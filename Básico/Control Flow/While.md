O `while` é um controle de fluxo de laço de repetição em que enquanto uma condicional for [[Palavras Restritas#True|True]], o laço será executado, diferente do [[For|for]] que é um número determinado de passos, o `while` pode não ter.

```python
# main loop of a game
run = True
while run:
	# Do stuff
	pass
```

Aqui tem um código que não faz nada, mas que mostra a estrutura básica de um jogo aonde tem um laço principal (Normalmente `while`) em que enquanto o jogador estiver vivo ou jogando o jogo continua.  É importante ressaltar que todas as operações que podem ser feitas com um [[Boolean|booleano]], podem ser feitas na condição, por exemplo usar o [[Palavras Restritas#and|and]] ou a [[Palavras Restritas#or|or]]. Além disso todas as operações lógicas em estruturas de dados e tipos de dados podem ser usadas, como por exemplo neste caso usando [[Integer|int]].

```python
num = 10
while num != 1:
	print(num)
	if num % 2 == 0:
		num /= 2
	else:
		num = 3 * num + 1

print(num)
```

Existem três palavras chaves que estão relacionadas ao [[For]] e o `while`, essas palavras são

## `break`

O `break` sai de um laço instantaneamente, mesmo que ainda tenha objetos para iterar

```python
i = 0
while True:
	if i == 10:
		break
	print(i)
	i+=1

```

## `continue`

O `continue` pula as instruções que ainda faltam dentro do laço e vão para a próxima iteração do laço

```python
i = 0
while i < 10:
	if i % 2 == 0:
		continue
	print("ODD: {i}")
	i+=1
```

## `else`

O `else` no `while` e no [[For|for]] e no [[Try and Except|try and except]] são implementadas, mas devem ser evitadas, pois o seu comportamento não é claro, ou seja, se alguém que não conhece muito de `python` ver um laço com um `else` em seguida a pessoa não vai conseguir entender de forma direta o que está acontecendo, e isso é contra o próprio ZEN do `python` (LINK LINK LINK).
Mas o seu funcionamento é fácil de entender e existem soluções melhores para se usar.
O `else` será executado quando um `break` não for acionado dentro do laço, ou seja, todas as repetições que precisavam ser feitas foram feitas até o final.

```python
i = 0
while i < 10:
	print(i)
	i+=1
else:
	print("No Break")
```

```python
i = 0
while i < 10:
	if i == 5:
		break
	print(num)
	i+=1
else:
	print("No break")
```