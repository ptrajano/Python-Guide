
Aqui não entraremos no tópico de criar uma biblioteca de fato, e subi-la para o [PyPi](https://pypi.org/), vamos falar basicamente sobre como escrever scripts em `python` em vários arquivos e usa-los em outros arquivos. Isso é uma boa prática que visa organizar seu código para projetos maiores (LINK LINK LINK), tornando-o mais modular, passível de manutenção e fácil de entender. 

Uma biblioteca bem estruturada permite que você
- Reutilize código entre projetos (modular)
- Separe responsabilidades de forma clara (LINK LINK LINK)
- Facilite testes e a depuração
- Colaborar com outros desenvolvedores 

# Estrutura Básica de arquivos

Aqui está uma sugestão de estrutura de arquivos que é boa, e aceitada pela industria

```text
my_lib/
├── __init__.py
├── core/
│   ├── __init__.py
│   ├── core_01.py
│   └── core_02.py
├── utils/
│   ├── __init__.py
│   ├── files.py
│   └── strings.py
└── exemplos/
    └── example_01.py
```

Essa estrutura, obviamente, varia de projeto em projeto mas ela é uma boa base para se começar.

## `__init__.py`

Este arquivo é essencial para transformar uma pasta comum em um **pacote Python**. Pode estar vazio ou conter lógica de inicialização:

```python
from .core.core_01 import obj_01
from .core.core_02 import obj_02
from .utils.files import FileHandler
from .utils.strings import StringUtils

__version__ = "1.0.0"
__all__ = ['obj_01', 'obj_02', 'FileHandler', 'StringUtils']
```

Este arquivo não é essencial para projetos de médio porte, mas para grande é uma boa prática.

## Módulos

Cada módulo seria um arquivo em `python` e ele conteria uma, ou algumas, [[Funções|funções]] ou classes (LINK LINK LINK), o intuito delas é conter apenas objetos (LINK LINK LINK) para que o arquivo principal que utilizará deles possa trabalhar em cima. O `python` tem uma peculiaridade que se, por exemplo, tivermos o seguinte código

```python
# file config.py

import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

print("Hello World!")
```

```python
# file main.py

import config
```

Ao tentar rodar o arquivo `main.py`, esse arquivo que na teoria "não faz nada", terá uma saída

Saída:
```text
Hello World!
```

Dessa forma percebemos que ao importar uma biblioteca, se houver código solto com alguma implementação, só de se importar a biblioteca esse código será rodado. Por causa disso, é importante usar o [[Dunder|dunder]] `__main__` (LINK LINK LINK) para trabalhar, e conseguir depurar de forma fácil e que não gere comportamentos inesperados como esse.
	
