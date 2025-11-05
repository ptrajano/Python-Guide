## Básico
O try e except é uma estrutura que se acontecer algum erro na [[Lista de Exceptions|| exceção]] ele irá tratar a execução sem finalizar o código necessariamente. Sua estrutura básica é:

```python
y = 0
try:
	x = 1/y
except:
	x = y
```

Mas essa não é a forma mais correta de se trabalhar com isso, pois nesse caso todo e qualquer erro que possa acontecer irá para o `except`, então por exemplo apertar o `ctrl + c` para finalizar o programa não irá finalizar pois o isso é uma exceção, então a forma mais correta de se trabalhar é 

```python
y = 0
try:
	x = 1/y
except ZeroDivisionError:
	x = y
```

Dessa forma, se acontecer outro erro que não está planejado pelo programador o código gera a exceção. Essa ferramente não é recomendada para programas pequenos, além disso é sempre bom lembrar que o intuito da programação é resolver problemas e pensar em todos os casos em que se pode acontecer um erro, dessa forma o try e except são como se fosse "roubar", obviamente que isso é subjetivo e somente minha opinião, mas em códigos grandes que contêm essa funcionalidade, o que normalmente acontecesse é que por causa de um erro que aconteceu dentro de um try, ele não foi chamado e sai pelo except, e então em algum outro momento do código acontecesse um erro causado pelo erro original, mas como o erro aconteceu em outro lugar fica difícil de deburar. Dessa forma dificulta o encontro de comportamentos atípicos e além disso dificulta o aprendizado do programador, pois ele foge dos erros que são essenciais para o aprendizado, dessa forma, é importante trabalhar com isso de forma segura e simples, sempre minimizando a chance de acontecer um comportamento inesperado [Impactos try e except](https://pt.stackoverflow.com/questions/314111/quais-os-impactos-do-uso-excessivo-do-try-except-tratamento-de-exce%c3%a7%c3%b5es), [Exceções e Controle de Fluxo](https://pt.stackoverflow.com/questions/48410/exce%c3%a7%c3%b5es-devem-ser-usadas-para-controle-de-fluxo/56299#56299).
Se quiser trabalhar com mais de um tipo de exceção, podemos usar uma tupla

```python
try:
	1/0
except (ValueError, ZeroDivisionError):
	print("Error")
```

Mas a partir do [Python 3.14](https://docs.python.org/3.14/whatsnew/3.14.html) não será mais necessário utilizar a notação de tupla [PEP 758](https://peps.python.org/pep-0758/) e a simples virgula bastará.
Mas e si quissemos usar o erro que aconteceu no print como faríamos isso 

```python
try:
	1/0
except (ValueError, ZeroDivisionError) as e:
	print(f"Error: [{e}]")
```

E existe forma de trabalhar com conjuntos de erros de forma diferente
```python
try:
	1/0
except (ValueError, ZeroDivisionError) as NumError:
	print(f"Error: [{NumError}]")
except KeyboardInterrupt as CtrlC:
	print("Closing system")
except Exception as e:
	raise e
```

Dessa forma se acontecer um erro numérico ele irá indicar de uma forma, se só fechar o sistema ele indica de outra e se acontecer um erro inesperado o erro ainda acontece.

## Finally
O `finally` é uma outra [[Palavras Restritas|keyword]] importante para entender o funcionamento do try e o except, o finally é um bloco de código que roda sempre independente de exceções ou não após o try e o except, uma das suas principais finalidades é no uso de context manager [o que é um context manager?](https://pt.stackoverflow.com/questions/535114/o-que-%C3%A9-um-context-manager-em-python). Ou seja, ao abrir um arquivo, se acontecer algum erro ou não enquanto o arquivo estiver aberto o arquivo tem que ser fechado para não deixar na memória

```python
try:
	f = open('file')
except:
	print("Error")
finally:
	f.close()
```

Neste caso independente de ter dado problema ou não o arquivo vai ser fechado, porém o python já tem uma solução melhor para isso que é a keyword `with`, ela já faz automaticamente isso

```python
with open('file') as f:
	1/0
```

O `with` é muito mais recomendado, pois é mais claro, e como poderá ser visto a frente o finally tem alguns comportamentos estranhos, como por exemplo:

```python
def foo():
	try:
		1/0
	except:
		print("There was an Error")
		return
	finally:
		print("What?")
		
foo()
```

Neste caso, mesmo que o `return` estava dentro do `except` o `finally` ainda foi executado, mas ao mesmo tempo o `except` foi executado antes do retorno da função. O que acontecesse é que todo o processo do `except` acontecesse antes do `finally`, mas se houver uma saída de escopo dentro da exceção o `finally` vai acontecer antes disso, como pode ser visto aqui 

```python
def foo():
	try:
		1/0
	except:
		return print("There was an Error")
	finally:
		print("What?")
		
foo()
```

Ainda nesse caso o `print` do `except` aconteceu antes do `print` do `finally`. Ele é bastante poderoso, mas precisa tomar cuidado ao trabalhar com ele

## Else

Em primeiro lugar, o uso de `else` com o `try` e `except` não é recomendado, pois não é claro sua funcionalidade só pelo nome, é um bloco completamente desnecessário e trás complexidade desnecessária para um código que já é confuso como o tratamento de erro com `try` e `except`. Mas o fluxo de controle passa pelo `else` caso não haja erro dentro do `try`, ou seja

```python
try:
	print("Hello World")
except:
	print("Error")
else:
	print("Why is this implemented")
```

Não vale a pena conversar sobre isso até para não encorajar o uso desse sacrilégio, pois por quê não colocar o código do `else` dentro do `try` sendo a última coisa, mas se acontecer um erro no bloco `else` acontecerá um erro diretamente, e você quer que esse código só rode caso não houver um erro dentro do `try` e o `except` não pode rodar aquele pedaço de código e ao mesmo tempo eu quero se houver um erro o programe acabe

```python
flag = True
try:
	print("Hello World")
except:
	print("Error")
	flag = False
if flag:
	print("Why is this implemented")
```

Esse código até pode ser maior, mas a legibilidade é muito melhor. Não é que não existe utilidade para o `else` nesse contexto [else & try](https://stackoverflow.com/questions/855759/what-is-the-intended-use-of-the-optional-else-clause-of-the-try-statement-in), mas eu acredito que existem formas melhores de melhorar a legibilidade do código, e isso é quase que um concesso na comunidade do `python`, se for possível evitar, evite! 
