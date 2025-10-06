[Programação assíncrona](https://www.softplan.com.br/tech-writers/o-que-e-programacao-assincrona-e-como-utiliza-la/) é uma forma de executar código de forma concorrente, visando evitar delays ou tempo de esperas na execução de programas, ela é usada normalmente para escrita e leitura de arquivos, chamadas de recursos web, e divisão de uma tarefa custosa em tarefas menores. Isso acontece quebrando um processo em diversas [threads](https://pt.wikipedia.org/wiki/Thread_(computa%C3%A7%C3%A3o)) e rodando-os de forma concorrente. O intuito aqui não é explicar a fundo o funcionamento dessa técnica, assume-se que já conhece os conceitos apresentados, e aqui focará mais na linguagem em si.

Diferente de outras linguagens que utilizam _threads_ do sistema operacional para concorrência, o `python` possui o _Global Interpreter Lock_ (LINK LINK LINK), que impede que múltiplas _threads_ executem código Python ao mesmo tempo, por que a linguagem é [interpretada](https://pt.wikipedia.org/wiki/Linguagem_interpretada). A programação assíncrona no `python` contorna essa limitação usando um paradigma de **[programação orientada a eventos](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_eventos)** e **[corotinas](https://pt.wikipedia.org/wiki/Corrotina)** (_coroutines_), gerenciado por um **[[#`Event Loop`|Event Loop]]**.

O coração da programação assíncrona moderna no Python é o módulo **[[Bibliotecas nativas#asyncio|asyncio]]**, introduzido oficialmente na versão 3.4 e significativamente aprimorado nas versões 3.5+ com a introdução das palavras-chave `async` e `await`.

## `async def`

Usado para definir uma corotina usando a base de [[Funções|função]]. Essas funções funcionam de forma diferente de uma normal. Quando chamadas, retorna um objeto `coroutine`, mas o seu código não é executado imediatamente

## `await`

Essa [[Palavras Restritas|palavra restrita]] só pode ser usada dentro de uma `coroutine` ela é usada para suspender a execução da corotina atual até que o objeto que está sendo esperado (normalmente outra corotina) sejá completado, enquanto se espera o Event Loop pode executar outras tarefas

## `Event Loop`

Responsável por executar as corotinas e gerenciar as tarefas e retornar quando for necessário 

## Exemplo

Neste primeiro caso é síncrono

```python
import time

def buscar_dados_sincrono(tarefa_id):
    print(f'Iniciando Tarefa {tarefa_id}...')
    time.sleep(1)
    print(f'Concluindo Tarefa {tarefa_id}...')
    return f'Dados da Tarefa {tarefa_id}'


inicio = time.time()
for i in range(3):
    resultado = buscar_dados_sincrono(i)
    print(resultado)
fim = time.time()

print(f"\nTempo total síncrono: {fim - inicio:.2f} segundos")
```

Neste segundo caso é assíncrono

```python
import asyncio
import time

async def buscar_dados_assincrono(tarefa_id):
    print(f'Iniciando Tarefa {tarefa_id}...')
    await asyncio.sleep(1)  
    print(f'Concluindo Tarefa {tarefa_id}...')
    return f'Dados da Tarefa {tarefa_id}'

async def main():
    inicio = time.time()

    tarefas = [
        buscar_dados_assincrono(0),
        buscar_dados_assincrono(1),
        buscar_dados_assincrono(2)
    ]
    resultados = await asyncio.gather(*tarefas)

    for resultado in resultados:
        print(resultado)

    fim = time.time()
    print(f"\nTempo total assíncrono: {fim - inicio:.2f} segundos")

asyncio.run(main())
```

