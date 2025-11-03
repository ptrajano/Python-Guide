-  [[Introdução]] 
- [[Baixar e Rodar Scripts]]
## Nomes de Variáveis

Uma variável funciona como se fosse um "container" ou uma caixa que armazena dados na memória de um computador, para criar variáveis em `python` faz

```python
name = 'Pedro'
```

O que está antes da igualdade é o nome da variável, após a igualdade temos o que será salvo nela, neste caso é uma [[String]].
Variáveis não podem conter certos tipos de caracteres nos seus nomes, como por exemplo

```python
na)me = 'Pedro'
na#me = 'Pedro'
na-me = 'Pedro'
na@me = 'Pedro'
na´me = 'Pedro'
📝 = 'pedro'
```

Normalmente nos contemos com as letras, os números e o `_`

```python
my_name = 'Pedro'
name1 = 'Pedro'
na1me = 'Pedro'
```

Porém não podemos começar o nome de uma variável com um número

```python
1name = 'Pedro'
```

Além disso não se pode usar certas palavras, que são chamadas de [[Palavras Restritas|palavras restritas]]

```python
class = 'Pedro'
def = 'Pedro'
int = 'Pedro'
```

-  [[Input e Output]] 
- Tipos de Dados
	- [[Float]]
	- [[Integer]]
	- [[String]]
-  Controle de Fluxo
	- [[If, Elif e Else]]
	- [[For]]
	- [[While]]


## Exercícios 
- Faça seu primeiro script! Escreve um código que coloque no terminal "Hello World!"
- Faça um script que recebe o nome e a idade de uma pessoa e retorne uma saudação a pessoa
- Receba três números que vão simbolizar os parâmetros de um polinômio de segundo grau
$$
a x^2 + bx + c = 0
$$

Sendo eles a,b e c nessa ordem, a partir disso o seu intuito é calcular as duas raizes desse polinômio se existir, caso não exista solução, print na tela que não é possível encontrar solução
- Faça um código que some os números de um até N, sendo N um valor recebido na entrada