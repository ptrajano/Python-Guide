Booleano é um tipo que herda de [[Integer]], ou seja, todas as funcionalidades do integer são aplicadas aqui, mesmo que não faça sentido, o booleano é um tipo de dado que simboliza estados lógicas como o [[Palavras Restritas#True|True]] e [[Palavras Restritas#False|False]], elas são representadas pelos inteiros `1` e `0` respectivamente

```python
print(int(True))
print(int(False))
```

Porém, todo valor não nulo será atribuído o valor de `True`

```python
print(bool(10))
print(bool(-1))
print(bool(0))
```

A mudança também funciona para [[Float]] e [[Complex|números complexos]]

```python
print(bool(2.3))
print(bool(0.0))
print(bool(1 + 0.0j))
print(bool(0 + 1.2j))
print(bool(0 + 0.0j))
```

Além disso a mudança de tipos para booleanos também funciona para [[Lista|listas]], que indicam se uma lista é vazia ou não

```python
print(bool([1, 2, 3]))
print(bool([]))
```

E para objetivos iterativos, como [[Tupla]], [[Set]], [[Dicionário]], [[String]], terá o mesmo comportamento do exemplo dado a cima. Além disso o [[Palavras Restritas#None|None]] é `False` ao tentar converter e [[Ellipsis]] é verdadeiro, por mais esquisito que pareça

```python
print(bool(None))
print(bool(not None))
print(bool(...))
```

Perceba que, isso acontece pois é necessário que o comportamento funcione de forma análoga ao if e else (LINK LINK LINK)
```python
vect = [1, 2, 3]

if not vect:
	print("Not empty")

# Equivale

if not bool(vect):
	print("Not empty")
```
# Métodos Nativos 

Os métodos nativos são idênticos aos dos [[Integer#Métodos Nativos|inteiros]], dessa forma serão apresentados lá.