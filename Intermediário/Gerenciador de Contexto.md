
Um [Gerenciador de Contexto](https://book.pythontips.com/en/latest/context_managers.html) permite a alocação e a liberação de recursos de forma simples, e diminuindo a chance de haver [vazamento de memória](https://en.wikipedia.org/wiki/Memory_leak). Pode entender isso através do seguinte exemplo

```python
f = open('file.txt', 'w')
f.write('Hello World!')
f.close()
```

Neste caso aqui, se houver um erro na escrita do `Hello World!`, o código irá parar e por causa disso a linha seguinte que seria de fechar o arquivo não seria executada, dessa forma, portanto o arquivo ainda estaria preso na memória. Para que não haja contextos abertos e não fechados foi implementado o [[Palavras Restritas#with|with]] que indica um gerenciador de contexto

```python
with open('file.txt' 'w') as f:
	f.write('Hello World!')
```

Dessa forma, se houve um [[Lista de Exceptions|Exception]], dentro do gerenciador de contexto, o arquivo será fechado de qualquer forma, isso é equivalente ao usar o [[Try and Except|try e o except]] da seguinte forma

```python
try:
	f = open('file.txt', 'w')
	f.write('Hello World!')
except Exception as e:
	raise Exception
finally:
	f.close()
```

Pelo funcionamento do `try` e o `except`, sabemos que o `finally` será executado independente de um erro acontecer ou não, mesmo com o `raise`, mas para simplificar a escrita, e ajudar no entendimento criou-se o `with`. 

Além disso é possível implementar que a sua classe tenha o funcionamento de gerenciador de contexto através dos dunders [[Dunder#`__enter__`|__enter__]]  e [[Dunder#`__exit__`|__exit__]], como pode ser visto no seguinte [exemplo](https://book.pythontips.com/en/latest/context_managers.html) 
```python
class File(object):
    def __init__(self, file_name, method):
        self.file_obj = open(file_name, method)
    def __enter__(self):
        return self.file_obj
    def __exit__(self, type, value, traceback):
        print("Exception has been handled")
        self.file_obj.close()
        return True

with File('demo.txt', 'w') as opened_file:
    opened_file.undefined_function()
```

