
O [operador de walrus](https://realpython.com/python-walrus-operator/) (morsa) é chamado assim por que parece uma morsa deitada `:=`, o intuito dele é ser usado ao mesmo para definir valor ao mesmo tempo que está dentro de uma expressão.

```python
from math import exp

Z = 5

print((logistic := 1/(1 + exp(-Z))) * (1 - logistic))
```

Que seria equivalente a 

```python
from math import exp

Z = 5

print((1/(1 + exp(-Z))) * (1 - (1/(1 + exp(-Z))))
```

Esse operador é útil mas trás um grau de complexidade e dificulta o entendimento do código, então normalmente é recomendado que não se use esse operador. Foi até por cause da implementação desse operador [PEP 572](https://peps.python.org/pep-0572/), que houve mudança na direção do python ([Guido van Rossum resigns as Python leader](https://lwn.net/Articles/759654/)), o [backlash](https://lwn.net/Articles/757713/) dessa implementação é imensa, como pode ser visto nesse comentário de um programador de `python`

```
Posted Jun 28, 2018 21:00 UTC (Thu) by **HelloWorld** (guest, #56129) [[Link](https://lwn.net/Articles/758596/)] (16 responses)

“  
In any language design, the total time spent discussing  
a feature in this list is proportional to two raised to  
the power of its position.  
0. Semantics  
1. Syntax  
2. Lexical syntax  
3. Lexical syntax of comments  
”  

Of course the real problem here is not the discussion but Python's broken language design. John McCarthy figured out in 1958 that the artifical separation of statements and expressions is completely unnecessary, and yet Van Rossum felt it necessary to make that mistake again 40 years later.
```

```
Posted Jul 13, 2018 2:07 UTC (Fri) by **OrbatuThyanD** (guest, #114326) [[Link](https://lwn.net/Articles/759696/)]

having spent 18 months pushing through an incredibly inconsequential pep that got bike-shedded to death (eventually accepted, you python 3.2+ folks are potentially benefiting), i'm oddly not surprised that guido is quitting as bdfl after this. dealing with the python devs on that pep made me never want to write python again.
```


Esse operador é algo confuso e não é "`Pythônico`". Porém há aplicações que de fato isso é útil, como por exemplo essa com [[Gerenciador de Contexto]].

```python
chunck = file.read(8192)
while chunck:
	process(chunk)
	chunck = file.read(8192)
```

Vira

```python
while chunck := file.read(8192)
	process(chunk)
```
[Referência do Exemplo](https://therenegadecoder.com/code/the-controversy-behind-the-walrus-operator-in-python/)

Essa discussão é entrada mais a fundo em [The Controversy Behind The Walrus Operator in Python ](https://therenegadecoder.com/code/the-controversy-behind-the-walrus-operator-in-python/).