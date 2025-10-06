
A recursão é um conceito importante de se entender em [[Funções|funções]] em que uma função chama ela mesma várias vezes para fazer alguma operação, esse comportamento é útil para estruturas de dados mais complexas (LINK LINK LINK), mas aparece em conceitos básicos, como o [Fibonacci](https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci) 

```python
def fibonacci(num):
	if num < 1:
		return 0
	return fibonacci(num - 1) + fibonacci(num - 2)
	
print(fibonacci(5))
```

A coisa mais importante de se lembrar ao fazer uma função recursiva é lembrar da condição de parada, se não tiver essa condição a função ficará criando mais funções infinitamente, pois não tem condição de parar, caso não tenha essa condição será chamado o erro [[Lista de Exceptions#`RecursionError`|RecursionError]].

```python
def fibonacci(num):
	return fibonacci(num - 1) + fibonacci(num - 2)
	
print(fib(5))
```

