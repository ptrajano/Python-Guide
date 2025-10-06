O `match` é um caso específico do [[If, Elif e Else|if, elif e else]], aonde checam o mesmo valor para valores diferentes, o seu intuito principal é facilitar a escrita, deixando o seu conteúdo mais óbvio

```python
color = 'BLUE'
if color == 'RED':
	print("The color is red")
elif color == 'YELLOW':
	print("The color is yellow")
elif color == 'GREEN':
	print("The color is green")
elif color == 'BLUE':
	print("The color is blue")
else:
	print("I don't know this color!")
```

Este é o caso usando o `if`, já com o `match` seria

```python
color = 'BLUE'

match color:
	case 'RED':
		print("The color is red")
	case 'YELLOW':
		print("The color is yellow")
	case 'GREEN':
		print("The color is green")
	case 'BLUE':
		print("The color is blue")
	case _:
		print("I don't know this color!")
```


Em primeiro lugar definimos qual a variável que vamos analisar (`color` neste caso), em seguida abrimos todos os `case` que serão checados colocando somente o valor que será checado, e por último para fazer um caso que equivalha ao `else`, usa-se a palavra restrita [[Palavras Restritas#_|_]], se a cor não for igual a nenhuma das que foram citadas ele entrará aqui.
Eu pessoalmente não acho muito útil usar o `match` neste caso, mas existe uma coisa que faz com que ele seja extremamente útil, que é o fato de os `case` poderem ter mais de um valor que será analisado.


```python
color = 'BLUE'

match color:
	case 'RED' | 'YELLOW':
		print("The color is warm")
	case 'GREEN' | 'BLUE':
		print("The color is cold")
	case _:
		print("I don't know this color!")
```

Além disso é importante ressaltar que após entrar em um `case` todos os `case` em baixo serão ignorados, ou seja, se em alguma condicional tenha mais de um `BLUE`, somente o primeiro será executado

```python
color = 'BLUE'

match color:
	case 'RED' | 'YELLOW':
		print("The color is warm")
	case 'GREEN' | 'BLUE':
		print("The color is cold")
	case 'GREEN' | 'BLUE':
		print("The color is cold")
	case _:
		print("I don't know this color!")
```

Perceba que neste caso só aparece um `output`, e que se o `match` checasse até o final deveria aparecer dois.

Além disso é possível adicionar um [[If, Elif e Else|if]] statment no `case`, como pode ser visto neste [exemplo](https://www.w3schools.com/python/python_match.asp).

```python
month = 5  
day = 4  
match day:  
  case 1 | 2 | 3 | 4 | 5 if month == 4:  
    print("A weekday in April")  
  case 1 | 2 | 3 | 4 | 5 if month == 5:  
    print("A weekday in May")  
  case _:  
    print("No match")
```

