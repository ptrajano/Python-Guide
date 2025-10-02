
Esse tipo de dado representa os [números complexos](https://pt.wikipedia.org/wiki/N%C3%BAmero_complexo), para representar um número complexo existe duas formas, a primeira é usando a função [[Funções Nativas#complex|complex]], e a segunda é usar diretamente a implementação do `python`

```python
num = complex(1, 2)
print(num)

num = 1 + 2j
print(num)
```

# Métodos Nativos

## `conjugate`

Esse método retorna o [conjugado](https://pt.wikipedia.org/wiki/Conjugado_de_um_n%C3%BAmero_complexo) do número complexo

```python
num = 10 + 2j
print(num.conjugate())
```

## `imag`

Retorna a parte imaginária do número complexo

```python
num = 10 + 2j
print(num.imag)
```
## `real`

Retorna a parte real do número complexo

```python
num = 10 + 2j
print(num.real)
```