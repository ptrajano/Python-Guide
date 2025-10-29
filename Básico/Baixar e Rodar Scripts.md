
Para começar a programar, em primeiro lugar, é preciso baixar o `python`, isso irá depender do sistema operacional que será usado, vamos falar de dois o Windows e Linux. Para o MacOS basta seguir esse [guia](https://python.org.br/instalacao-mac/).

## Windows

Existe mais de uma forma de baixar o `python` no windows, aqui vamos tratar de uma, o que se deve ser feito é abrir o terminal, apertando o botão `Win` e pesquisando terminal, ou digitando `win+R` e digitando `cmd`, quando abrir o terminal (tela preta) digite `python`, isso deve abrir a loja do windows, caso não abra procure a loja e o `python` nela, então é só clicar em baixar.

## Linux

O primeiro passo é abrir o terminal, e em seguida digitar os seguintes comandos

```bash
sudo apt update
```

Que irá atualizar os pacotes existentes

```bash
sudo apt install python3 python3-pip
```

Em primeiro lugar baixa-se a última versão do `python` e baixa o `pip`, que é usado para baixar [[Bibliotecas Importantes|novas bibliotecas]]

# Validando que está baixado

Para checar se o `python` está baixado ou não, digite `python` ou `python3`, normalmente ele é salvo como `python3`, porém pode ser que seja somente `python`, caso o `python` não esteja baixado, tente seguir os passos anteriores novamente. Supondo que está instalado, o que deve aparecer é o `Interactive Python Shell (REPL)`, que é uma forma de escrever scripts de `python` e roda-lo linha por linha

```python
>>> 
>>> 
>>> 
```

# Primeiro Script

É uma tradição na comunidade de desenvolvimento que o primeiro código escrito deve ser uma saudação para o mundo, para fazer isso usa-se a [[Funções|função]] [[Funções Nativas#print|print]], que será discutida mais para frente

```python
>>> print('Hello World!')
```

O output esperado disso é

```text
Hello World!
```

Aqui já da para começar a brincar com o `python`.

# Primeiro Arquivo

Um arquivo de script em `python` é um arquivo que termina com `.py`, esse é o indicativo que ele deve ser tratado como um código nessa linguagem. Esse arquivo será o espaço em que você escreverá seu código. 
