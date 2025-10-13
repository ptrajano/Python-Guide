
Aqui discutiremos sobre boas práticas na escrita de um código em `python`, um bom ponto de partida é o [ZEN do python](https://peps.python.org/pep-0020/) 

```python
import this
```

```text
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

Estes são os princípios básicos criados pelos pioneiros do `python` sobre como ter um bom design de projetos. Aqui não trataremos de todos os aforismos, mas de vários deles, além disso discutiremos sobre outros tópicos como a [PEP8](https://peps.python.org/pep-0008/), que é uma documentação explícita sobre esse tema. E por último sobre o livro [Clean Code](https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675)  e os princípios SOLID.

# Por quê fazer um código legível?

É muito importante seguir boas práticas e tentar ao máximo transformar o seu código em algo legível, não só para você mas para qualquer programador, pois mesmo que seu código seja somente um [snippet](https://en.wikipedia.org/wiki/Snippet_(programming)), pode ser que você ou outra pessoa precise da base do seu código, e é bastante comum que depois de tempos curtos, como uma semana, o próprio programador não entenda o que foi feito no código. 
O primeiro motivo é a manutenibilidade em que se o código for legível, ele mesmo funciona como uma documentação para usos, modificações e manutenções futuras, isso ajuda não só na depuração do código em si, mas na produção de códigos futuros, isso vem de uma crença antiga que diz que $80\%$ do custo de um software está na manutenção ([Maintenance](https://comparesoft.com/software-asset-management-systems/software-maintenance/#:~:text=Manuten%C3%A7%C3%A3o%20de%20software:%20por%20que,Fim%20de%20vida%20ou%20substitui%C3%A7%C3%A3o)).
Além disso, é impossível fazer um trabalho em equipe, se os colaboradores não estiverem padronizados, pois os outros desenvolvedores precisam entender seu código tanto para conectar com os deles, quanto para fazer uma revisão e busca de possíveis bugs, além disso, se novos membros forem adicionados na equipe, ele conseguirá começar a programar mais rápido, pois estudos ([Bin Lin, Gregorio Robles](https://arxiv.org/abs/2308.13429)) mostram que em média aproximadamente $60\%$ do tempo que uma pessoa leva no processo de desenvolvimento é entendendo os códigos que já foram feitos.
E por último, vamos falar sobre a depuração, códigos claros diminuem a probabilidade de acontecerem erros de lógicas, ou condições complexas mas desnecessárias. E bugs tem um custo econômico altíssimo, como mostra esse artigo jornalistico de 2002, que diz que Bugs em software custam mais de US$\$ 60$ bilhões por ano só nos Estados Unidos ([Folha](https://www1.folha.uol.com.br/folha/reuters/ult112u18024.shtml))  , então toda forma de tentar diminuir suas ocorrências é válida, incluindo escrever códigos mais legíveis.

# Nomes de variáveis

De uma forma geral, a comunidade de programação concorda em usar certas convenções em nomes de variáveis para melhorar a legibilidade de códigos
- Variáveis, [[Funções|funções]], métodos, pacotes, módulos
	- `nome_minusculo_com_underscore`
- [[Classes]] e [[Lista de Exceptions|Exceptions]]
	- `MaiusculasIndicamSeparacao`
- [[Variáveis Privadas|atributos privados]] e métodos internos
	- `_comeca_com_underscore`
- Constantes
	- `CAPS_NO_TALO`

Constantes são definidas como valores que não irão variar ao longo do seu código

```python
PI = 3.141592
```

O motivo dessa distinção é que se caso tiver um trecho de código assim

```python
PI = 3.141592
PI *= 2
```

É fácil de se perceber que isso é um comportamento indesejado, pois o valor de $\pi$ deve ser constante ao longo de todo código. Um adendo legal de se comentar é que existem certas linguagens, como o `JavaScript` que tem a palavra `const` no seu dicionário, e se caso tentar modificar uma variável que tem essa indicação haverá um erro, porém, esse trecho é válido

```javascript
const my_array = [1, 2, 3]

my_array[0] = 10
my_array.push(4)

console.log(my_array) // output: [10, 2, 3, 4] 
```

O que está acontecendo neste caso é que ele define que o objeto array sempre será constante, porém pode-se modificar seus valores internos. Na nossa definição de constante, isso não poderia.

Além disso, é importante comentar que os nomes, para uma boa legibilidade, devem explicitar exatamente o intuito desse objeto, por exemplo

```python
def foo(n, p, g):
	print(n, p, g)
```

Este exemplo é simples, porém é impossível entender o que de fato essa função faz, pois seus argumentos são letras e o nome da função não nos informa nada, porém ao escrever

```python
def print_user_data(name, phone, gender):
	print(f"UserData({name=}, {phone=}, {gender=})")
```

Mesmo não sabendo `python` é possível entender que essa função irá retornar as informações do usuários.
De uma forma geral, é uma boa prática que nomes de atributos/variáveis explicitem o conteúdo dela, e nome de funções/classes/métodos explicitem o intuito delas e o que será feito. 
É importante que os nomes de seus objetos sejam o menor que explicite todo o seu conteúdo, pois o excesso também é ruim

```python
def function_that_put_in_terminal_end_users_name_phone_and_gender(user_name, user_phone, user_gender):
	print(f"UserData({name=}, {phone=}, {gender=})")
```

Ou por exemplo, este [caso](https://github.com/facebook/react/blob/d1c8cdae3b20a670ee91b684e8e0ad0c400ae51c/packages/react/src/React.js#L130) engraçado do `React.js`

```javascript
ReactSharedInternals as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
```

Existem alguns casos que são tranquilos usar variáveis com nomes curtos, normalmente em laços, pois é fácil de entender o que está acontecendo

```python
for i in range(10): # i -> idx
	print(i)
```

```python
my_list = [1, 2, 3, 4]

for e in my_list: # e -> element
	print(e)
```

