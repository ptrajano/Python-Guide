
É importante conversar sobre argumentos de uma função de uma forma mais aprofundada, pois existem várias nuances.

## Vários Argumentos

É possível ter vários parâmetros dentro de uma função, separando por vírgula dentro do parênteses

```python
def hello(name, age):
	print(f"Hello {name.capitalize()}, your age is {age}!")
	
hello("Pedro", 24)
hello(26, "Guilherme")
```

Perceba que se inverter os valores sem querer, o `output` será errado, dessa forma é possível usar os nomes dos argumentos da função para definir qual variável é qual

```python
def hello(name, age):
	print(f"Hello {name.capitalize()}, your age is {age}!")
	
hello(name = "Pedro", age = 24)
hello(age = 26, name = "Guilherme")
```

## Argumentos Padrões

É possível criar uma função que tenha argumentos padrões, que se por acaso ao chamar a função o argumento não for passado então, a função saberá como trabalhar, todo argumento que tem valores padrões devem estar depois dos argumentos que não tem valores padrões

```python
def hello(name, age, city= 'Brasília'):
	print(f"Hello {name.capitalize()}, your age is {age}, and you are from {city}!")
	
hello('Pedro', age = 24)
hello('Guilherme', 26, city = 'São Paulo')
```

É importante ressaltar que se um objeto mutável, como por exemplo [[Lista]], [[Set]] e [[Dicionário]] for passado como argumento padrão, acontece um comportamento que não é esperado naturalmente, mas faz sentido na implementação do `python`. 

```python
def append_element(value, vect=[]):
	vect.append(value)
	return vect
	
my_vect = append_element(10)
my_vect_02 = append_element(20)

print(my_vect)
print(my_vect_02)
```

Perceba que neste caso, os dois vetores que foram criados, dividem a mesma lista, isso acontece, pois o objeto mutável foi colocado como argumento padrão da função, então a lista vazia que é criada como objeto padrão é uma lista localizada na memória, e toda vez que ela é chamada essa mesma lista será usada, então os valores mudam. Então, se não quiser que esse comportamento aconteça, o correto é fazer 

```python
def append_element(value, vect=None):
	if not vect:
		vect = []
	vect.append(value)
	return vect
	
my_vect = append_element(10)
my_vect_02 = append_element(20)

print(my_vect)
print(my_vect_02)
```


## `args` e `kwargs`

Essa é a parte mais complexa de se entender sobre argumentos de uma função. Vamos começar com um exemplo, a função [[Funções Nativas#min|min]], consegue receber quantos parâmetros forem necessários

```python
print(min(1, 3, 5, 2, 5, 7, 9, 2, 1231, 31241))
```

Para fazer isso usa-se o argumento `args`, ele indica que a função pode receber quantos parâmetros forem necessário, vamos implementar a função `min` para valores

```python
def min(*args):
	min_value = None
	for value in args:
		if min_value == None or value < min_value:
			min_value = value
	
	return min_value

print(min(1, 3, 5, 2, 5, 7, 9, 2, 1231, 31241))
```

Além disso é possível usar o `args` junto com valores necessários, sendo que o `args` vem depois dos argumentos sem valor padrão e os com valor padrões

```python
def smallest_grade(name, *args):
	print(f"{name} your smallest grade is {min(args)}")
	
smallest_grade('Pedro', 10, 4, 5, 2)
```

É importante falar que caso não se passe nenhum parâmetro no `args`, será gerado uma [[Tupla]] vazia

```python
def foo(*args):
	return args
	
print(foo())
```

E se no exemplo da menor nota a gente quisesse informar a matéria também, para isso usamos o `kwargs`, que é a forma enxuta de `keyword arguments`. O `kwargs` gera um [[Dicionário]] com o par de palavra chave e valor.

```python
def smallest_grade(name, **kwargs):
	min_key = None
	for key in kwargs.keys():
		if kwargs[key] < kwargs.get(min_key, 100):
			min_key = key
	print(f"{name} your smallest grade is {kwargs[key]} in {key}")
	
smallest_grade('Pedro', math = 10, portugues = 4, biology = 5, science = 2)
```

Existem duas coisas para se comentar sobre o `args` e `kwargs`, em primeiro lugar o nome deles pode varias, ele é livre

```python
def smallest_grade(name, *grades):
	print(f"{name} your smallest grade is {min(grades)}")
	
smallest_grade('Pedro', 10, 4, 5, 2)
```

E dessa forma chegamos no próximo ponto, o que difere os dois é a quantidade de `*` que vem antes da palavra, se for só 1 então é um `args` se for 2 será um `kwargs`, isso acontece por causa do [[Unpacking Iterables|unpacking]] do `python`