Esse tipo de dado, no `python`, é representada pela sigla `str`, ela engloba todas caracteres e símbolos que existem no [Unicode](https://pt.wikipedia.org/wiki/Unicode). 

```python
"Hello World!"
"123"
"ଅଇଉ"
"😀"
```

É importante ressaltar que o segundo caso `"123"` é uma string que pode representar o número $123$, mas não necessariamente, em primeiro lugar as operações de strings são obviamente diferentes das de [[Integer|inteiros]], pois não faz sentido você dividir uma palavra. Além disso, strings numéricas podem representar, por exemplo códigos internos de uma loja, que obviamente não faz sentido ter a mesma funcionalidade que um inteiro.

As formas de representar uma string são através de  `'` ou `"` ou `"""`. Isso acontece para que possamos fazer

```python
double_string = "It's Me"
single_string = 'Than He said: "Hello World!"'
multi_line_string = """
Multi-Line String
Made Simple
"""
```

Além disso é possível acessar elementos de uma string utilizando da seguinte forma

```python
string = "Hi my name is Pedro"

print(string[6])
```

O comportamento é igual ao de [[Lista|lista]], por causa disso é possível usar conceitos de lista como [[Lista#Slicing|slicing]].

# Prefixos

Os prefixos são letras ou conjunto de letras que vem antes das aspas da string para modificar o comportamento padrão das string.
Além das duas que serão mostradas aqui existe também a [u-string](https://stackoverflow.com/questions/2464959/whats-the-u-prefix-in-a-python-string), que não é mais utilizada a partir do `python3`, pois é a forma padrão de uma string, além disso existe o prefixo de [[Bytes|byte]] que é tratado separadamente por causa de sua implementação (ele é um objeto a parte).

## `r-string`

Ignoram caracteres de escape, tratando a string literalmente.

```python
path1 = "C:\Users\new\file.txt"
print(path1)

path2 = r"C:\Users\new\file.txt"
print(path2)
```

## `f-string`

Permite interpolação de variáveis e expressões diretamente na string, além de trazer opções de formatação

```python
name = 'pedro'
age = 24

print(f'Hi {name.capitalize()} with age less than {age + 1}!')
```

A `f-string` é uma ferramente extremamente poderosa, em que é possível fazer operações dentro de uma string, como foi feito no exemplo acima, e da opções de formatações que ajudam no tratamento de string e números

```python
x = 10
y = 20
print(f"{x=}, {y=}")
```

Neste caso o nome da variável já aparece ao colocar o `=` após a variável

```python
pi = 3.14159
print(f"{pi:.2f}")
```

```python
value = 1320.523

print(f"{value:,.2f}") # 1,320.52
```

Neste casos o `.2f` indica que irá aparecer duas casas decimais, e a `,` no último caso indica que terá separação das centenas por vírgula.

```python
num = 10
print(f"{num:+}") # Show sign
```

```python
num = 122
print(f"{num:b}") # binary representation
print(f"{num:o}") # octal representation
print(f"{num:x}") # hexadecimal representation
```

```python
# Padding
num = 10
print(f"{num:05}")
```

```python
print(f"{0.1:.2%}")
```

```python
print(f"{10:>10}") # Right padding
print(f"{10:<10}") # Left padding
```

```python
print(f"{0.1:*^10}") 
```

```python
print(f"{10:15}") 
```

```python
obj = 10

print(f"Repr: {obj!r}, Str: {obj!s}")
```

o `!r` indica que se quer pegar o [[Funções Nativas#repr|repr]] do objeto, e o `!s` indica que irá pegar a `string` direta, muito útil para [[Classes|classes]] que usam os [[Dunder|dunders]] [[Dunder#`__str__`|__str__]] e [[Dunder#`__repr__`|__repr__]]. 
# Métodos Nativos
## `capitalize`

Retorna uma cópia da string com o primeiro caractere em maiúsculo e o restante em minúsculo.

```python
string = "pedro"

print(string.capitalize())
```
## `casefold`

Similar ao [[#`lower`|lower]], mas mais agressivo - remove todas as distinções de caso, útil para comparações case-insensitive.
```python
string = "STRASSE"

print(string.lower())
print(string.casefold())

string = "ß"
print(string.lower())
print(string.casefold())
```

## `center`

Retorna a string centralizada em um campo de largura especificada, preenchendo com espaços ou caractere personalizado.

```python
string = "PYTHON"

print(string.center(20, '-'))
```

## `count`

Retorna o número de ocorrências de uma substring na string. Pode receber índices de início e fim.

```python
string = banana

print(string.count('na'))
```
## `encode`

Codifica a string usando o codec especificado, retornando bytes. Útil para manipulação de arquivos e redes.

```python
string = "Hello World! 🌍"

print(string.encode())

print(string.encode('ascii', erros = 'replace'))
```

## `endswith`

Verifica se a string termina com um sufixo específico. Pode verificar com tupla de sufixos.

```python
string = 'document.pdf'

print(string.endswith('.pdf'))
```

## `expandtabs`

Substitui tabs por espaços. O tamanho padrão do tab é 8 espaços, mas pode ser customizado.

```python
string = "Name\tAge\tCity\nPedro\t24\tDF\nGuilherme\t26\tDF"

print(texto.expandtabs())

print(texto.expandtabs(4)) # tabs == 4 spaces
```

## `find`

Retorna o índice da primeira ocorrência de uma substring. Retorna -1 se não encontrado.

```python
string = 'i like python, python is cool!'

print(string.find('python'))
```

## `format`

Formata uma string substituindo campos delimitados por `{}` com valores.

```python
print("{} + {} = {}".format(2, 3, 5))
```
## `format_map`

Similar ao `format()`, mas aceita um [[Dicionário|dicionário]] diretamente sem precisar desempacotar. Mais eficiente quando se trabalha com dicionários.

```python
person = {'name': 'Ana', 'age': 30, 'city': 'São Paulo'}

text = "Name: {name}, Age: {age}, City: {city}".format_map(person)

print(text)
```

## `index`

Retorna o índice da primeira ocorrência de uma substring. Lança [[Lista de Exceptions#`ValueError`|ValueError]] se não encontrado.

```python
string = 'Python is cool!'

print(string.index('Python'))
```

## `isalnum`

Verifica se todos os caracteres da string são alfanuméricos (letras ou números).

```python
print('Python123'.isalnum())
```

## `isalpha`

Verifica se todos os caracteres são letras (apenas alfabeto).

```python
print('Python123'.isalpha())
```

## `isascii`

Verifica se todos os caracteres são [ASCII](https://pt.wikipedia.org/wiki/ASCII).

```python
print("東京".isascii())
```

## `isdecimal`

Verifica se todos os caracteres são decimais (0-9).

```python
print("12345".isdecimal())
print("12.34".isdecimal()) # False (.)
```

## `isdigit`

Verifica se todos os caracteres são dígitos (inclui alguns caracteres especiais como sobrescritos).

```python
print("123".isdigit())
print("²".isdigit())
print("12.3".isdigit()) # False (.)
```

## `isidentifier`

Verifica se a string é um identificador válido em Python (pode ser usado como nome de variável, [[Funções|funções]], etc.).

```python
print("var".isidentifier())
print("1var".isidentifier())
```

## `islower`

Verifica se todos os caracteres caixas-alta (uppercase) na string são minúsculos.

```python
print('python'.islower())
```

## `isnumeric`

Verifica se todos os caracteres são numéricos (inclui dígitos, frações, subscritos, sobrescritos, etc.).

```python
print("12345".isnumeric())
print("½".isnumeric())
print("一二三".isnumeric()) # Chinese Numerals
print("12.34".isnumeric()) # False (.)
```

## `isprintable`

Verifica se todos os caracteres na string são imprimíveis ou a string está vazia.

```python
print("Hello World".isprintable())
print("Bell\a".isprintable()) #False \a is a sound
```

## `isspace`

Verifica se a string contém apenas caracteres de espaço em branco.

```python
print("   ".isspace())
print("\t".isspace()) # True
print("\n".isspace()) # True
print("\r".isspace()) # True
print("  hello  ".isspace()) # False
```

## `istitle`

Verifica se a string segue o formato de título (cada palavra começa com maiúscula).

```python
print("This Is A Title".istitle())
```

## `isupper`

Verifica se todos os caracteres caixas-alta (uppercase) na string são maiúsculos.

```python
print("PYTHON".isupper())
```

## `join`

Concatena elementos de um iterável ([[Lista|lista]], [[Tupla|tupla]], etc.) em uma string, usando a string como separador.

```python
words = ["Python", "é", "incrível"]
res = " ".join(words)
print(res)
```

## `ljust`

Retorna a string justificada à esquerda em um campo de largura especificada.

```python
print("Python".ljust(10, '-'))
```

## `lower`

Retorna uma cópia da string com todos os caracteres convertidos para minúsculas.

```python
print("PYTHON".lower())
```

## `lstrip`

Remove caracteres leading (do início) da string. Por padrão remove espaços em branco.

```python
print("   Python".lstrip())
```

## `maketrans`

Cria uma tabela de tradução para uso com [[#`translate`|translate]]. Pode receber um ou dois argumentos para mapeamento de caracteres.

```python
table = str.maketrans({'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5'})
text = "python is fantastic"

print(text.translate(table))
```

## `partition`

Divide a string na primeira ocorrência do separador, retornando uma [[Tupla]] de 3 elementos.

```python
email = "python@example.com"

print(email.partition('@'))
```

## `removeprefix`

Remove um prefixo específico da string, se presente. (Python 3.9+)

```python
print("Mr. João Silva".removeprefix("Mr. "))
```

## `removesuffix`

Remove um sufixo específico da string, se presente. (Python 3.9+)

```python
print("file.txt".removesuffix(".txt"))
```

## `replace`

Substitui todas as ocorrências de uma substring por outra.

```python
string = 'the cat hunts the rat'

print(string.replace('cat', 'dog'))
```

## `rfind`

Encontra a última ocorrência de uma substring, retornando -1 se não encontrada.

```python
string = 'i like python, python is cool!'

print(string.rfind('python'))
```

## `rindex`

Similar ao [[#`rfind`|rfind]], mas lança [[Lista de Exceptions#`ValueError`|ValueError]] se a substring não for encontrada.

```python
string = 'i like python, python is cool!'

print(string.rfind('Python')) #Uppercase
```

## `rjust`

Retorna a string justificada à direita em um campo de largura especificada.

```python
print("Python".rjust(10, '-'))
```

## `rpartition`

Divide a string na última ocorrência do separador, retornando uma tupla de 3 elementos.

```python
string =  "usr/local/bin/python"

print(string.rpartition('/'))
```

## `rsplit`

Divide a string a partir da direita, limitando o número de divisões.

```python
print('1 2 3 4 5'.rsplit())
```

## `rstrip`

Remove caracteres trailing (do final) da string.

```python
print("Python   ".rstrip())
```

## `split`

Divide a string em uma [[Lista|lista]] de substrings usando um separador.

```python
print('python-is-cool'.split('-'))
```

## `splitlines`

Divide a string em uma lista de linhas, quebradas por limites de linha.

```python
string = """
this
is 
a 
text
"""

print(string.splitlines())
```

## `startswith`

Verifica se a string começa com um prefixo específico. Pode verificar com [[Tupla|tuplas]] de prefixos.

```python
string = 'Python is cool!'
print(string.startswith(("Python", "Java", "C++")))
```

## `strip`

Remove caracteres leading e trailing (do início e do final) da string.

```python
print("   Python   ".strip())
```

## `swapcase`

Inverte o caso de todos os caracteres da string (maiúsculas se tornam minúsculas e vice-versa).

```python
print("Python".swapcase())
```

## `title`

Retorna uma versão da string com cada palavra capitalizada (primeira letra maiúscula).

```python
print("python programming".title())
```

## `translate`

Aplica uma tabela de tradução à string (usada com `maketrans`).

```python
table = str.maketrans('aeiou', '12345')
text = "python is fantastic"

print(text.translate(table))
```

## `upper`

Retorna uma cópia da string com todos os caracteres convertidos para maiúsculas.

```python
print("python".upper())
```

## `zfill`

Preenche a string com zeros à esquerda até atingir a largura especificada. Útil quando se quer trabalhar com binário.

```python
print("42".zfill(5))
```