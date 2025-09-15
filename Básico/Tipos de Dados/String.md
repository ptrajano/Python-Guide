Esse tipo de dado, no `python`, é representada pela sigla `str`, ela engloba todas caracteres e símbolos que existem no [Unicode](https://pt.wikipedia.org/wiki/Unicode). 

```python
"Hello World!"
"123"
"ଅଇଉ"
"😀"
```

É importante ressaltar que o segundo caso `"123"` é uma string que pode representar o número $123$, mas não necessariamente, em primeiro lugar as operações de strings são obviamente diferentes das de inteiros (LINK LINK LINK), pois não faz sentido você dividir uma palavra. Além disso, strings numéricas podem representar, por exemplo códigos internos de uma loja, que obviamente não faz sentido ter a mesma funcionalidade que um inteiro.

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

O comportamento é igual ao de lista (LINK LINK LINK), por causa disso é possível usar conceitos de lista como slicing (LINK LINK LINK)

Para fazer um loop (LINK LINK LINK) na lista é possível usar a função `range` ou de uma forma mais "pythonica" 

```python
for x in "banana":
	print(x)
```

Além disso a palavra `in` checa se existe uma substring dentro da string base, ou seja

```python
print("Hello" in "Hello World!")
```

E existe também o `not in` que checa se a substring não existe

```python
print("hello" not in "Hello World!")
```

Além disso existem os métodos desse tipo de dado

## `capitalize`
## `casefold`
## `center`
## `count`
## `encode`
## `endswith`
## `expandtabs`
## `find`
## `format`
## `format_map`
## `index`
## `isalnum`
## `isalpha`
## `isascii`
## `isdecimal`
## `isdigit`
## `isidentifier`
## `islower`
## `isnumeric`
## `isprintable`
## `isspace`
## `istitle`
## `isupper`
## `join`
## `ljust`
## `lower`
## `lstrip`
## `maketrans`
## `partition`
## `removeprefix`
## `removesuffix`
## `replace`
## `rfind`
## `rindex`
## `rjust`
## `rpartition`
## `rsplit`
## `rstrip`
## `split`
## `splitlines`
## `startswith`
## `strip`
## `swapcase`
## `title`
## `translate`
## `upper`
## `zfill`
