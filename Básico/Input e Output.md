Nesta parte vamos trabalhar com as formas nativas de receber informação do terminal `input` e colocar informação no terminal `output`. 

## Input

Todo dado que é pego no `python` é uma [[String]], portanto é necessário modificar o dado para que ele seja do tipo correto.

```python
name = input("Digite seu nome: ")
```

A função(LINK LINK LINK) `input` recebe apenas um parâmetro que é o texto que irá aparecer no terminal pedindo dado, se não for informado nenhum texto, não aparecerá nada

```python
name = input()
```

## Print

O `print` é a função (LINK LINK LINK) de colocar na tela, ela irá colocar na tela algum conteúdo

```python
name = input("Digite seu nome: ")
print(f"Olá {name}, seja bem vindo!")
```

Neste caso utilizou-se de uma f-string (LINK LINK LINK), mas além de aceitar strings como argumento, o `print` aceita todas as estruturas de dados

```python
number = 10
print(number)
```

Ou por exemplo, uma função (LINK LINK LINK)

```python
def function():
	return 10
	
print(function)
```

Perceba que neste caso estamos passando a função em si, e não seu resultado.

Além disso, a função `print`, pode receber outros parâmetros, que são

### `sep`

Parâmetro [[String]] que é inserido entre valores, o valor padrão é o espaço `' '`

```python
name = 'Pedro'
print("Hello", name, "Welcome!", sep='-')
```

### `end`

Parâmetro que indica a [[String]] que ficará no final do texto, o valor padrão é a quebra de linha `\n`.

```python
print("Hello World!", end = 'THIS IS THE END')
```

### `file`

Este parâmetro é usado para salvar o conteúdo de uma string dentro de um arquivo de texto, porém não é recomendado usa-lo, é muito melhor usar um [[Gerenciador de Contexto]] para essa tarefa.

```python
sourceFile = open('python.txt', 'w')
print('Pretty cool, huh!', file = sourceFile)
sourceFile.close()
```
[exemplo](https://www.programiz.com/python-programming/methods/built-in/print)

### `flush`

Esse é um parâmetro [[Boolean|booleano]]. Para entender esse [conceito](https://stackoverflow.com/questions/15608229/what-does-prints-flush-do) é necessário entender o que é um buffer de I/O (Input/Output), I/O com buffer é uma local da memória usado para salvar temporariamente dados de escritas, o buffer é mantido até ele lotar ou até aparecer uma nova linha `\n`, o nome desse despejo é `flush`. O I/O com buffer é feito para melhorar o desempenho do código, pois escrever em blocos é mais rápido. Dessa forma esse parâmetro é usado para escolher se o buffer interno será escrito.