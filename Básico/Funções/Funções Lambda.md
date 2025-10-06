
Uma função lambda é uma [[Funções|função]] que é feita em uma linha, ela é uma função anônima, seu intuito original é gerar uma função que será usada mas não quer que seja salva na memória, como por exemplo para parâmetros de [[Funções Nativas#filter|filter]], [[Funções Nativas#map|map]] ou [[Funções Nativas#sorted|sorted]]. Além disso existe uma melhora de performance usando funções lambdas, mas é importante lembrar sempre da legibilidade do código, que ao usar lambda acaba-se perdendo um pouco.

```python
spam = ['a1', 'a2', 'a3']

sorted(spam, lambda x: int(x[1]))
```
[Exemplo de lambda](https://discuss.python.org/t/what-is-the-purpose-of-lambda-expressions/12415/2)

Mesmo que a função lambda não tenha sido gerada para ser repetida em vários locais do código é sim possível usa-la em vários locais, setando uma variável para a função

```python
add = lambda a, b: a + b

print(add(1, 2)) 
```

Conseguimos ver a anonimidade da função checando os [[Dunder|dunders]] internos das funções

```python
def add_normal(a, b):
	return a + b
	
add_lambda = lambda a, b: a + b

print(add_normal.__name__)
print(add_lambda.__name__)
```

Perceba que a função lambda é salva apenas com o nome `lambda`. 