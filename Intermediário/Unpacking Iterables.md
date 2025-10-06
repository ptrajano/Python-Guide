O **unpacking operator** (operador de desempacotamento) é um recurso que permite "desempacotar" os elementos de sequências e [[Dicionário|dicionários]] em [[Argumentos de uma Função|argumentos de funções]] ou em novas estruturas de dados. Existem duas variantes: `*` para sequências e `**` para dicionários.

#### Unpacking com `*` (Sequências)

O operador `*` é usado para desempacotar os elementos de uma sequência ([[Lista|lista]], [[Tupla|tupla]], [[String|string]], etc.) em argumentos posicionais de uma [[Funções|função]] ou em uma nova sequência.

```python
def criar_pessoa(nome, idade, cidade):
    return f"{nome} tem {idade} anos e mora em {cidade}"

dados_pessoa = {
    'nome': 'João',
    'idade': 30,
    'cidade': 'São Paulo'
}

pessoa1 = criar_pessoa(nome=dados_pessoa['nome'], 
                       idade=dados_pessoa['idade'], 
                       cidade=dados_pessoa['cidade'])

pessoa2 = criar_pessoa(**dados_pessoa)

print(pessoa1)
print(pessoa2)
```

Além diso é possível usar quando quer pegar elementos de uma lista

```python
my_list = [1, 2, 3, 4, 5]

first_element, *mid_elements, last_element = my_list

print(first_element)
print(mid_elements)
print(last_element) 
```
#### Unpacking com `**` (Dicionários)

O operador `**` é usado para desempacotar os pares chave-valor de um dicionário em argumentos nomeados de uma função.

```python
info_base = {'nome': 'Maria', 'idade': 25}
info_endereco = {'cidade': 'Rio de Janeiro', 'pais': 'Brasil'}

pessoa_completa = {**info_base, **info_endereco}
print(pessoa_completa)
```

```python
info1 = {'nome': 'João', 'idade': 30}
info2 = {'nome': 'José', 'cidade': 'SP'}
combinado = {**info1, **info2}
print(combinado)
```

O `unpacking` é útil quando não se sabe os parâmetros que uma função ou método (LINK LINK LINK) recebem, como por exemplo em [[Decorators]] e no [[Dunder]] [[Dunder#`__new__`|__new__]].

Além disso é útil para facilitar quando estiver enviando os argumentos para uma função

```python
def get_query(ip, port, user, password, query):
	pass
	
bd_data = {
	'ip': 127.0.0.1,
	'port': 1234,
	'user': 'user',
	'password': 'password',
	'query': "select * from table"
}

get_query(**bd_data)
```