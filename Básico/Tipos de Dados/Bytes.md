Os [bytes](https://docs.python.org/3/library/stdtypes.html#bytes-objects) são objetos feitos para manipular dados binários, sendo eles sequências imutáveis de bytes únicos. Eles são feitos para trabalhar com carácteres [ASCII](https://pt.wikipedia.org/wiki/ASCII), e sua sintaxe é parecida com a de [[String#Prefixos|prefixos de string]], podendo ser chamado através de 

```python
print(bytes(10))
print(b'test')
```

Ao tentar adicionar um carácter não ASCII, será chamado um [[Lista de Exceptions#`SyntaxError`|SyntaxError]]. O intuito principal dessa `byte-string` é para que elas estejam prontas para serem salvas na memória e no disco, normalmente utiliza-se desse objeto ao encontrar uma [[String|string]] que não se tem informação sobre, e não se sabe sua codificação, como por exemplo ao tentar ler um documento de imagem, áudio, vídeo, etc.

O motivo deles serem falados separadamente é por quê eles não herdam do objeto [[String|str]], ele não é uma [[Herança e Composição#Herança|subclasse]]

```python
print(issubclass(bytes, str))
```

## Métodos Nativos

Alguns dos métodos desse objeto são idênticos aos de [[String|string]], e esses métodos são [[String#`capitalize`|capitalize]], [[String#`center`|center]], [[String#`count`|count]], [[String#`endswith`|endswith]], [[String#`expandtabs`|expandtabs]], [[String#`find`|find]], [[String#`index`|index]], [[String#`isalnum`|isalnum]], [[String#`isalpha`|isalpha]], [[String#`isascii`|isascii]], [[String#`isdigit`|isdigit]], [[String#`islower`|islower]], [[String#`isspace`|isspace]], [[String#`istitle`|istitle]], [[String#`isupper`|isupper]], [[String#`ljust`|ljust]], [[String#`lower`|lower]], [[String#`lstrip`|lstrip]], [[String#`isspace`|isspace]], [[String#`partition`|partition]], [[String#`removeprefix`|removeprefix]], [[String#`removesuffix`|removesuffix]], [[String#`replace`|replace]], [[String#`rfind`|rfind]], [[String#`rindex`|rindex]], [[String#`rjust`|rjust]], [[String#`rpartition`|rpartition]], [[String#`rsplit`|rsplit]], [[String#`rstrip`|rstrip]], [[String#`split`|split]], [[String#`splitlines`|splitlines]], [[String#`startswith`|startswith]], [[String#`strip`|strip]], [[String#`swapcase`|swapcase]], [[String#`title`|title]], [[String#`upper`|upper]] e [[String#`zfill`|zfill]].

## `decode`

Converte bytes para string usando uma codificação específica.

```python
data = b'Hello World'
text = data.decode('utf-8')

print(text)
print(type(text))

bytes_latin = b'caf\xe9' 
texto_latin = bytes_latin.decode('latin-1')
print(texto_latin) 
```

## `fromhex`

Método de classe que cria bytes a partir de uma string hexadecimal.

```python
hex_string = "48656c6c6f20576f726c64"
data = bytes.fromhex(hex_string)
print(data)
```

## `hex`

Retorna uma string hexadecimal representando os bytes.

```python
data = b'Hello'

hex_string = data.hex()
print(hex_string)
```

Perceba que o tipo do hexadecimal é [[String]], ele não tem um tipo próprio

```python
data = b'Hello'

hex_string = data.hex()

print(type(hex_string))
```

## `join`

Concatena uma sequência de objetos bytes usando o bytes object como separador. Não aceita objetos que não sejam bytes, igual a [[String|string]] que só aceita objetos do tipo `str`.

```python
separator = b', '
itens = [b'apple', b'banana', b'orange']
res = separator.join(itens)

print(res)
```

## `maketrans`

Cria uma tabela de tradução para uso com [[#`translate`|translate]], mas trabalha com bytes em vez de caracteres.

```python
origin = b'aeiou'
destiny = b'12345'
table = bytes.maketrans(origin, destiny)
text_byte = b'python is awesome'
res = text_byte.translate(table)
print(res)
```

## `translate`

Aplica uma tabela de tradução aos bytes (similar às [[String|strings]], mas trabalha com valores de bytes).

```python
origin = b'aeiou'
destiny = b'12345'
table = bytes.maketrans(origin, destiny)
text_byte = b'python is awesome'
res = text_byte.translate(table)
print(res)
```