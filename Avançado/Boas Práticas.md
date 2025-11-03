
Aqui discutiremos sobre boas práticas na escrita de um código em `python`, um bom ponto de partida é o [ZEN do python](https://peps.python.org/pep-0020/) 

```python
import this # module returns the zen of python, this is an easter egg
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
def function_that_print_in_terminal_end_users_name_phone_and_gender(user_name, user_phone, user_gender):
	print(f"UserData({name=}, {phone=}, {gender=})")
```

Ou por exemplo, este [caso](https://github.com/facebook/react/blob/d1c8cdae3b20a670ee91b684e8e0ad0c400ae51c/packages/react/src/React.js#L130) engraçado do `react.js`

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

# Checagem de Igualdade

Usar [[If, Elif e Else|if]] para checar se uma variável tem valores salvos ou não, ou se um variável com valor [[Boolean|booleano]] é [[Palavras Restritas#True|True]] ou [[Palavras Restritas#False|False]], pode ser escrito de uma forma bem simples com `python`, usando uma linguagem mais `pythonica` que é recomendada

```python
is_connected = True
if is_connected == True: # Wrong
	pass
	
if is_connected: # Correct
	pass
```

```python
my_list = [1, 2, 3]

if len(my_list) > 0: # Wrong
	pass

if my_list: # Correct
	pass
```

Além disso, é melhor usar o operador [[Palavras Restritas#not|not]] entre as expressões e não no começo

```python
my_list = None

if my_list is not None: # Wrong
	pass
	
if not my_list: # Correct
	pass
```

Essa forma fica mais legível o que está acontecendo, um bom mantra para se seguir é "meu código faz sentido para alguém que não sabe programar?". 

# Retornos

Algo importante de se comentar é sobre o [[Palavras Restritas#return|retorno]] de uma função, vamos ver o seguinte caso

```python
def foo(x, a):
	if a == 1:
		try:
			inv = 1/x
			return inv
		except:
			return float('inf')
	else:
		return x ** 2
```

Perceba que essa função tem três retornos diferentes, o que isso causa é uma dificuldade no entendimento do que a função faz e o que ela retorna, pois uma boa prática é centralizar em apenas um retorno.

```python
def inv_or_square(num: float, op_type: bool) -> float:
	if op_type: # Inverse
		output = 1/num if num != 0 else float('inf')
	else:
		output = num ** 2
	return output
```

Obviamente essa função é apenas didática, não faz sentido essa função, pois por quê essa função retorna duas coisas diferentes, mas neste caso fica fácil para entender a questão do  retorno, mas aqui está um caso que faz sentido isso.

```python
def get_query(config: dict, query: str) -> pd.DataFrame:
	try:
		db = DataBase.connect(config) # db: DataBase
		df = db.fetch(query) # df: DataFrame
	except DataBaseException:
		df = None
		
	return df
	
```

Controlar as saídas de uma função é uma ótima prática, porém existem casos que isso não é o melhor caso, e de fato, faz sentido retornar antes, como por exemplo

```python
def last_item(my_list: list) -> int:
	if not my_list:
		return
	
	return my_list[-1]
```

Não faz sentido trabalhar em uma função de lista, se a lista estiver vazia, ou seja, fazer uma checagem no começo, para não ter que fazer a função inteira com uma lista vazia, faz sentido, isso é comum em [[Estrutura de Dados Avançadas|estruturas de dados]] como Pilha, Filha, etc...
Os casos que são bons de ter um `return` antes são os casos que as operações que serão feitas na função não podem ser feitas se uma condição não acontecer.

# Tipos de Dados no Retorno

Uma questão importante de se falar também é a questão do tipo de dado no retorno, vamos voltar ao exemplo do banco de dados

```python
def get_query(config: dict, query: str) -> pd.DataFrame:
	try:
		db = DataBase.connect(config) # db: DataBase
		df = db.fetch(query) # df: DataFrame
	except DataBaseException:
		df = None
		
	return df
```

Se essa função for chamada por outra função

```python
def use_data(config, dict, query: str) -> pd.DataFrame:
	df = get_query(config, query)
	
	if df.empty: # The data returned is empty
		pass
	...
	
```

Há um erro escondido neste código, o que acontece é que se não conseguir acessar o banco de dados e o `except` for chamado, então o `df` será [[Palavras Restritas#None|None]], e `None`  não tem o método `empty`, ou seja, esse código dará erro, mesmo que o erro já foi "tratado", por causa disso é importante que o `return` de uma função seja um tipo de dado específico

```python
def get_query(config: dict, query: str) -> pd.DataFrame:
	try:
		db = DataBase.connect(config) # db: DataBase
		df = db.fetch(query) # df: DataFrame
	except DataBaseException:
		df = pd.DataFrame() # empty DataFrame
		
	return df
```

# `Flat is better than nested`

Já trabalhamos com algumas `Zen's` do `Python` de forma implícita, mas agora vamos falar de forma explicita de um, o que que essa frase quer dizer, ela fala sobre o uso de [[Control Flow|controle de fluxos]], o uso constante de muitos controles de fluxos causa uma dificuldade de entendimento e, não só isso, deixa o código feio, por [exemplo](https://pybit.es/articles/why-is-flat-better-than-nested-zen-of-python/)

```python
def process_data(data: dict) -> bool:
	if data is not None:
		if 'value' in data:
			value = data['value']
			if value > 10:
				return True
			else:
				print('Value is too small')
		else:
			print('No Value in data')
	else:
		print('No data provided')
	return False

```

Perceba que esta escrita é confusa, pois o caminho que o seu olho faz não é vertical, ele tem que ir para os lados, e voltar para saber o que de fato está sendo trabalhado, podemos escrever de uma forma muito mais legível 

```python
def process_data(data: dict) -> bool:
	if not data:
		print('No data provided')
		return False
		
	if 'value' not in data:
		 print('No Value in data')
		 return False
		 
	if data['value'] <= 10:
		print('Value is too small')
		return False
	
	return True	
```

Este caso está extremamente mais legível, pois o caminho que o olho tem que fazer é mais vertical, uma boa forma de se obter essa forma partindo da primeira versão de `process_data` é inverter o que está se checando.

Além disso existe o extremo disso que é o [branchless programming](https://en.algorithmica.org/hpc/pipelining/branchless/), que é uma forma de se programar sem usar nenhum fluxo de controle, é muito mais uma filosofia, que de certa forma é boa, mas ao extremo pode ser ruim. 

```python
def max(a: int, b: int) -> int:
	return a * (a > b) + b * (a <= b)
```

Esta função é um exemplo disso, como [[Boolean|bool]] [[Herança e Composição|herda]] de [[Integer|int]] então é possível usar as operações de inteiros com os booleanos, e os operadores de comparação retornam valores booleanos (`1` ou `0`), dessa forma essa função fará o trabalho de um `if` sem usa-lo. Existem pontos positivos para usar isso, por causa do [pipeline](https://en.wikipedia.org/wiki/Pipeline_(software)), existe uma chance de [hazard](https://en.wikipedia.org/wiki/Hazard_(computer_architecture)), então ao não ter branch, não terá essa chance, então ao fazer essa operação milhares e milhares de vezes provavelmente não usar o `if` pode causar uma melhora de performance. Eu já usei várias vezes essa ideia, porém nas situações que eu usei, não usar `if` na verdade atrapalhou o rendimento, isso por quê a quantidade de operações feitas é maior que no `if`, então é uma coisa situacional.

# Clean Code

O [Clean Code](https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675) é um livro extremamente renomado no meio da programação que fala sobre como fazer um código limpo, ele trata de temas que já trabalhamos mais aprofundadamente e sobre tópicos que não foram tratados, porém iremos tratar sobre alguns aspectos específicos do livro que não foram discutidos anteriormente. 
## Manter Funções Pequenas

Este é um princípio simples que fala que funções devem ser pequenas e focadas em fazer somente uma tarefa

```python
def process_order(order: dict) -> dict:
    if not order or not order.get('items') or len(order['items']) == 0:
        raise ValueError('Invalid order')
    
    if not order.get('customer') or not order['customer'].get('email'):
        raise ValueError('Invalid customer')
    
    total = 0
    for item in order['items']:
        if item['price'] < 0:
            raise ValueError('Invalid price')
        if item['quantity'] <= 0:
            raise ValueError('Invalid quantity')
        total += item['price'] * item['quantity']
    
    if order['customer'].get('is_premium', False):
        total = total * 0.9  # 10% discount
    
    payment_result = process_payment(total, order['customer']['credit_card'])
    if not payment_result['success']:
        raise Exception(f'Payment failed: {payment_result["message"]}')
    
    subject = 'Order Confirmation'
    body = f"""Hello {order['customer']['name']},
    
    Your order for ${total:.2f} has been processed successfully.
    Items: {len(order['items'])}
    Status: Confirmed
    
    Thank you for your purchase!"""
    
    send_email(order['customer']['email'], subject, body)
    
    order_id = save_to_database({
        'customer_id': order['customer']['id'],
        'total': total,
        'status': 'confirmed',
        'items': order['items']
    })
    
    print(f'Order {order_id} processed successfully for {order["customer"]["email"]}')
    
    return {
        'order_id': order_id,
        'total': total,
        'status': 'confirmed'
    }
```

Neste código por exemplo, esta função está gigante, e ela não trabalha só com uma coisa, ela valida o pedido, calcula o total do pedido, checa se o cliente tem desconto, checa se foi pago, envia um email, faz um logging do pedido, e retorna um `dict` da confirmação do pedido. Obviamente todas essas ações precisam ser feitas, porem dessa forma se acontecer um erro dentro dessa função será muito mais difícil encontra-lo, o que não acontecesse no seguinte caso

```python
class OrderProcessor:
    def __init__(self, order: dict) -> None:
        self.order = order
    
    def execute(self) -> dict:
        self._validate_order()
        total = self._calculate_total()
        total_with_discount = self._apply_discount(total)
        self._process_payment(total_with_discount)
        self._send_confirmation(total_with_discount)
        order_id = self._save_order(total_with_discount)
        self._log_processing(order_id)
        
        return self._create_response(order_id, total_with_discount)
    
    def _validate_order(self) -> None:
        if not self.order:
            raise ValueError('Order cannot be null')
        
        if not self.order.get('items'):
            raise ValueError('Order must contain items')
        
        if not self.order.get('customer'):
            raise ValueError('Order must have a customer')
        
        if not self.order['customer'].get('email'):
            raise ValueError('Customer must have an email')
    
    def _validate_item(self, item: dict) -> None:
        if item['price'] < 0:
            raise ValueError('Price cannot be negative')
        
        if item['quantity'] <= 0:
            raise ValueError('Quantity must be greater than zero')
    
    def _calculate_total(self) -> float:
        total = 0
        
        for item in self.order['items']:
            self._validate_item(item)
            total += item['price'] * item['quantity']
        
        return total
    
    def _apply_discount(self, total: float) -> float:
        customer = self.order['customer']
        
        if customer.get('is_premium', False):
            return total * 0.9  # 10% discount
        
        return total
    
    def _process_payment(self, total: float) -> None:
        credit_card = self.order['customer']['credit_card']
        result = process_payment(total, credit_card)
        
        if not result['success']:
            raise Exception(f'Payment failed: {result["message"]}')
    
    def _send_confirmation(self, total: float) -> None:
        customer = self.order['customer']
        email_service.send_email(
            recipient=customer['email'],
            subject='Order Confirmation',
            body=self._create_email_body(customer, total)
        )
    
    def _create_email_body(self, customer: dict, total: float) -> str:
        return f"""Hello {customer['name']},

Your order for ${total:.2f} has been processed successfully.
Items: {len(self.order['items'])}
Status: Confirmed

Thank you for your purchase!"""
    
    def _save_order(self, total: float) -> str:
        order_data = {
            'customer_id': self.order['customer']['id'],
            'total': total,
            'status': 'confirmed',
            'items': self.order['items']
        }
        
        return database.save_order(order_data)
    
    def _log_processing(self, order_id: str) -> dict:
        logger.info(f'Order {order_id} processed for {self.order["customer"]["email"]}')
    
    def _create_response(self, order_id, total):
        return {
            'order_id': order_id,
            'total': total,
            'status': 'confirmed'
        }

def process_order(order):
    processor = OrderProcessor(order)
    return processor.execute()
```

Mesmo que esse código esteja mais "complexo", ele é mais abstrato e é mais fácil modificar uma parte do seu comportamento, por exemplo, se antes de retornar tivesse mais uma coisa para checar, é simples, só criar um novo método e em seguida adiciona-lo antes do `return` do `execute`. Obviamente esta é uma estrutura bem maior, porém todas as funcionalidades são claras e simples, portanto é mais fácil depurar se o projeto for maior.

## Single Responsability Principle (SRP)

Esta parte está diretamente relacionada ao [[#Manter Funções Pequenas|manter funções pequenas]], pois para manter funções pequenas e o código ainda fazer sentido, cada função tem que ter apenas uma responsabilidade, como pode ser visto no exemplo do tópico anterior, isso ajuda a adicionar novas funcionalidades, transformando o código em modular e fazendo ele ser escalonável.

## Manter Coisas Relacionadas Juntas

Isso basicamente fala que se tiver várias funções parecidas que trabalham juntos, então é melhor ou criar uma [[Criar sua própria "Biblioteca"|biblioteca]] ou transformar em uma [[Classes|classe]], como foi feito no último exemplo.

## Don't Repeat Yourself (DRY)

Este princípio é simples, ele fala para não ter código repetido, por exemplo neste caso aqui

```python
from time import time

def main() -> None:
	ini = time()
	function_01()
	print(f"function_01 time: {time() - ini}")
	
	ini = time()
	function_02()
	print(f"function_02 time: {time() - ini}")
	
	ini = time()
	function_03()
	print(f"function_03 time: {time() - ini}")
```

Se por exemplo, descobrirmos que a função `time` não é a melhor de se usar para calcular o tempo de execução de uma função ( não é), e ao invés disso deveríamos usar o `perf_counter`, e ai a gente precisa trocar todas 

```python
from time import perf_counter

def main() -> None:
	ini = perf_counter()
	function_01()
	print(f"function_01 time: {perf_counter() - ini}")
	
	ini = perf_counter()
	function_02()
	print(f"function_02 time: {perf_counter() - ini}")
	
	ini = perf_counter()
	function_03()
	print(f"function_03 time: {time() - ini}")
```

Neste caso, só por ter que trocar em todos os locais o mesmo código, eu me esqueci de trocar o último `time`, só por causa disso o meu código quebrou, além do que o tempo de eu ter que trocar cada parte é alta, então é muito melhor fazer alguma estrutura para fazer isso pra mim, como por exemplo usar esse [[Decorators|decorartor]]

```python
from time import perf_counter

def get_time(foo):
	def wrapper(*args, **kwargs):
		ini = perf_counter()
		res = foo(*args, **kwargs)
		print(f"{foo.__name__} time: {perf_counter() - ini}")
		
		return res
		
	return wrapper

@get_time
def function_01():
	pass
	
def main() -> void:
	function_01()
	function_02()
	function_03()
```

Ao usar esse decorator nas funções, conseguimos diminuir o número de linhas, e não só isso ter que mudar menos coisas no código, deixando ele mais escalonável se quisermos testar o tempo de execução de mais funções, por exemplo.

## Escreva Testes

Vou ser honesto, eu não sou uma pessoa que faz muitos testes no código que eu escrevo, porém é extremamente importante fazer testes para que o produto não contenha falhas, obviamente não é possível prever todas os erros que podem acontecer, porém só de testar muitos casos, a qualidade do produto será muito maior.

Aqui está referências boas sobre testes [tipos de teste](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing), [como testar códigos](https://www.testdevlab.com/blog/software-testing-process-methods-and-stages), eu recomendo bastante procurar outras referências pois essas são introdutórias, o processo de criar testes e de fato testar é um processo bastante trabalhoso e difícil, mesmo que não pareça, dessa forma vale muito a pena aprender sobre.

# SOLID

Os princípios [SOLID](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design-pt) são princípios voltados ao design de software orientado objeto, aonde é colocado 5 conceitos básicos que devem ser seguidos

## Single Responsability Principle (SRP)

Este princípio é o mesmo apresentado no [[#Clean Code|Clean Code]], mais específicamente o [[#Single Responsability Principle (SRP)|SRP]].

## Open Closed Principle

O que isso fala é que uma classe deve estar aberta para extensões, mas fechadas para modificações, um bom exemplo disso é [[Herança e Composição#Herança|métodos abstratos]], que vêm de herança, aonde  cria-se um mockup de possíveis objetos analisados

```python
from abc import ABC
from math import pi

def Shape(ABC):
	@property
	@abstractmethod
	def area(self) -> float:
		pass
		
def Circle(Shape):
	def __init__(self, radius: float) -> None:
		if length <= 0:
			raise ValueError(f'length must be positive')
		self.radius = radius
	
	@property
	def area(self) -> float:
		return pi * self.radius ** 2
		
def Square(Shape):
	def __init__(self, length: float) -> None:
		if length <= 0:
			raise ValueError(f'length length be positive')
		self.length = length
	
	@property
	def area(self) -> float:
		return self.length ** 2
```


## Princípio da Substituição de Liskov

O [princípio de substituição de liskov](https://en.wikipedia.org/wiki/Liskov_substitution_principle) é sem sombra de dúvidas o mais abstrato de todos, ele nos fala que se uma classe filha herda de uma pai, ao modificar um método da classe pai, ela não deve alterar a "corretude" do programa, ou seja, a classe filha não deve alterar o funcionamento do método da classe pai, se esse novo comportamento "fugir" do que é esperado da classe pai

```python
from abc import ABC
from math import pi

def Shape(ABC):
	@property
	@abstractmethod
	def area(self) -> float:
		pass
		
def Circle(Shape):
	def __init__(self, radius: float) -> None:
		if length <= 0:
			raise ValueError(f'length must be positive')
		self.radius = radius
		
	@property
	def area(self) -> float:
		return 2 * pi * self.radius

```

Neste caso a área está calculando o perímetro, o que não deveria acontecer

## Princípio da Segregação de Interfaces

Ela fala que um programador, que herdar de uma classe implementada por você, não deve ser obrigado a implementar métodos que não são úteis para eles, por exemplo

```python
def Shape(ABC):
	@property
	@abstractmethod
	def area(self) -> float:
		pass
		
	@property
	@abstractmethod
	def volume(self) -> float:
		pass
		
def Circle(Shape):
	def __init__(self, radius: float) -> None:
		if length <= 0:
			raise ValueError(f'length must be positive')
		self.radius = radius
		
	@property
	def area(self) -> float:
		return 2 * pi * self.radius
```

Neste caso aqui, por exemplo, um círculo é um objeto bidimensional, ou seja não faz sentido ele ter que implementar volume, que é o que está acontecendo.

## Princípio da Inversão de Dependência

Ele nos fala que as entidades devem depender de abstrações e não de implementações em si

```python
class MySQLDatabase:
    def connect(self):
        print("Connecting to MySQL...")
    
    def save_order(self, order_data):
        print("Saving to MySQL...")

class SMTPEmailService:
    def send_email(self, to, subject, body):
        print(f"Sending email via SMTP to {to}...")

class OrderService:
    def __init__(self):
        self.database = MySQLDatabase()  
        self.email_service = SMTPEmailService() 
    
    def process_order(self, order):
        self.database.connect()
        self.database.save_order(order)
        self.email_service.send_email(
            order['customer_email'], 
            "Order Confirmed", 
            "Your order was processed"
        )
```

O que acontece nesse código, a nossa classe `OrderService`, depende diretamente de `MySQLDatabase` e `SMTPEmailService`, se por exemplo, estivermos querendo testar, é preciso que o banco de dados esteja conectado e o serviço de e-mail também, dessa forma é difícil testar separadamente os objetos, além disso se ao invés de ser um servidor `MySQL` tivermos um servidor `Postgre`, teríamos que modificar toda a implementação de `OrderService`, então é melhor usar métodos abstratos e [[Herança e Composição#Composição|composição]]

```python
from abc import ABC, abstractmethod

class DatabaseRepository(ABC):
    @abstractmethod
    def connect(self):
        pass
    
    @abstractmethod
    def save_order(self, order_data):
        pass

class EmailService(ABC):
    @abstractmethod
    def send_email(self, to, subject, body):
        pass

class MySQLDatabase(DatabaseRepository):
    def connect(self):
        print("Connecting to MySQL...")
    
    def save_order(self, order_data):
        print("Saving to MySQL...")
        return "mysql_order_123"

class PostgreSQLDatabase(DatabaseRepository):
    def connect(self):
        print("Connecting to PostgreSQL...")
    
    def save_order(self, order_data):
        print("Saving to PostgreSQL...")
        return "postgres_order_123"

class SMTPEmailService(EmailService):
    def send_email(self, to, subject, body):
        print(f"Sending email via SMTP to {to}...")

class SendGridEmailService(EmailService):
    def send_email(self, to, subject, body):
        print(f"Sending email via SendGrid to {to}...")

class OrderService:
    def __init__(self, database: DatabaseRepository, email_service: EmailService):
        self.database = database 
        self.email_service = email_service 
        
    def process_order(self, order):
        self.database.connect()
        order_id = self.database.save_order(order)
        
        self.email_service.send_email(
            order['customer_email'], 
            "Order Confirmed", 
            f"Your order {order_id} was processed"
        )
        
        return order_id
```

Dessa forma, só é preciso modificar os argumentos de entrada da classe `OrderService` e como as outras classes vêm de uma classe pai com as mesmas implementações, então o funcionamento do `OrderService` sempre irá funcionar para toda classe que herdar de `DatabaseRepository` e de `EmailService`.

# Tipagem

Mesmo que `python` que tem tipagem do tipo fraco, uma boa prática é identificar que tipo de dados estão sendo recebidos em funções, classes, ou até mesmo em variáveis sendo criadas, a implementação de tipagem é recente (`Python3.5`), além disso a partir do `Python3.9` apareceram formas melhores de se trabalhar com tipagem, aqui vamos trabalhar nas últimas versões de tipagem.
Ao longo desses tópicos finais já comecei a usar a tipagem, pois acredito que é claro seu funcionamento, além disso acredito ser fácil ver suas vantagens, mas em primeiro lugar é importante comentar que essa tipagem, não é uma validação de tipo o `python` **não valida tipo**, ou seja é apenas para os programadores entenderem e documentarem códigos além de checar se as funções estão sendo utilizadas da forma correta, como pode ser visto neste caso.

```python
def add(a: int, b: int) -> int:
	return a + b
	
print(add('No', 'Typing'))
```

Para identificar o tipo de um argumento usa-se o `:`, e para indicar o retorno de uma função ou método identifica-se através de `->` seguido pelo tipo de retorno, 

```python
def add(a: int, b: int) -> int:
	return a + b
	
a: int = 5
b: int = 10

print(add(a, b)) 
```

a partir do `Python3.5` foi possível adicionar mais de um tipo de dados que uma variável pode receber usando o `|`

```python
def is_int(value: int | str) -> bool:
	return isinstance(value, int)
```

Neste caso, a indicação nos fala que essa função irá receber ou um inteiro ou uma string, o mesmo pode ser feito na saída

```python
def is_int(value: int | str | None) -> bool | None:
	if not value:
		return
	return isinstance(value, int)
```

Neste caso se o `value` for `None`, será retornado ele mesmo.

Além disso é possível identificar o tipo de dado que um estrutura de dados recebe

```python
my_list: list[int] = [1, 2, 3]
my_tuple: tuple[int, int, str] = [1, 2, '3']

my_dict: dict[str, int] = { # first value are keys, second are values
	'a': 1,
	'b': 2
}
```

Além disso a função `typing` seta vários tipos de dados que não são tão triviais de se trabalhar, como por exemplo uma função, ou qualquer valores

```python
from typing import Any, Callable
from time import perf_counter

def timer(foo: Callable[[Any], Any]) -> Callable[[Any], Any]:
	def wrapper(*args: Any, **kwargs: Any) -> Any:
		ini = perf_counter()
		res = foo(*args, **kwargs)
		print(f'{foo.__name__} time: {perf_counter() - ini}')
		
		return res
	
	return wrapper
```

O parâmetro `Any` indica que esse argumento pode ser de qualquer tipo, já o `Callable` indica um objeto que é chamável (que tem o  [[Dunder#`__call__`|dunder __call__]]), dentro de suas chaves, terá dois parâmetros, o primeiro será uma lista, com os argumentos de entrada da função, já a segunda posição será o seu retorno.

E por último, classes podem ser consideradas tipos, como já foi mostrado

```python
class OrderService:
    def __init__(self, database: DatabaseRepository, email_service: EmailService):
        self.database = database 
        self.email_service = email_service 
        
    def process_order(self, order):
        self.database.connect()
        order_id = self.database.save_order(order)
        
        self.email_service.send_email(
            order['customer_email'], 
            "Order Confirmed", 
            f"Your order {order_id} was processed"
        )
        
        return order_id
```

E se uma classe quiser colocar ela própria como tipo? A partir do `Python3.14` isso é mais direto

```python
class Node:
	def add(self, new_node: Node) -> None:
		...
```

Do `Python3.9` para frente pode-se usar

```python
class Node:
	def add(self, new_node: 'Node') -> None:
		...
```

E para trás, o que eu fazia era

```python
Self = object()
class Node:
	def add(self, new_node: Self) -> None:
		...
```

Neste exemplo, criamos um novo tipo chamado de `Self` para representar quando uma classe chama si própria.

Esse assunto de tipagem em `python` é bastante complexo, os maniacos do `python` são fascinados sobre esse tema, pois é o tema mais novo, aqui só passamos pela superfície sobre isso, aqui estão algumas referências para se aprofundar (LINK LINK LINK)

## Docstring

`Docstring` é a forma de documentar funções, classes, métodos no `python`

```python
def process_user(name: str, age: int, email: str) -> dict:
	"""
	process user data and return formatted info
	
	Args: 
		name: full user name
		age: age in years
		email: user email
		
	Returns:
		Dict with processed info
		
	Raises:
		ValueError: If age negative or email invalid
	"""
	if age < 0:
		raise ValueError("Age must be positive")
		
	if not valid_email(email):
		raise ValueError("Invalid Email")
		
	dict_output = {
		'name': name,
		'age': age,
		'email': email,
	}
	
	return dict_output
	
```

Essa é a forma padrão de gerar uma `docstring`, existem outros padrões, mas vamos tratar somente desse, em primeiro lugar temos uma explicação da função, em seguida todos os argumentos que a função recebe e suas explicações, e seus outputs junto com sua explicação, além disso tem uma indicação de erros que podem ser levantados, e também pode ter exemplos de funcionamentos, além disso se for um `docstring` de uma classe coloca-se os atributos dela também.

Por último, é possível acessar o `docstring` diretamente no código usando o [[Dunder|dunder]] `__doc__`
```python
def foo():
	"""
	my docstring
	"""
	pass
	
print(foo.__doc__)
```

## Exemplo Prático

Aqui vamos discutir mais a fundo sobre um exemplo, tirado do youtuber [Arjan Code](https://www.youtube.com/watch?v=g7EGMWvJ1fI), que é uma ótima referencia sobre boas práticas e `python` avançado. Vamos começar com um código "ruim"

```python
from typing import Any, Callable

type Data = dict[str, Any] # Defining Data type

def export_pdf(data: Data) -> None:
	print(f"Exporting pdf {data}")
	
def export_csv(data: Data) -> None:
	print(f"Exporting csv {data}")
	
def export_json(data: Data) -> None:
	print(f"Exporting json {data}")
	
def export_data(data: Data, format: str) -> None:
	if format == 'pdf':
		export_pdf(data)
	elif format == 'csv':
		export_csv(data)
	elif format == 'json':
		export_json(data)
	else:
		raise ValueError(f"Invalid format {format}")
	
```

Esse código faz algumas coisas boas, como por exemplo, padronização do nome de funções, então se formos criar uma função que exporta para uma tabela de `excel` o nome da função seguiria o mesmo padrão `export_xlsx` e receberia o mesmo parâmetro `data`. Porém existem melhoras que podem ser feitas, por exemplo, ao implementar `export_xlsx`, precisaríamos criar essa função em seguida modificar `export_data` para que a função funcione, percebe que a função `export_xlsx` depende da função `export_data`, que é uma coisa ruim, pois em primeiro lugar se `export_data` for muito grande ou ter várias funcionalidades e dentro delas ter que adicionar `export_xlsx` em vários locais pode ser que aconteça algum erro por desatenção, além disso, se formos adicionar mais 7 tipos de `exports`, teríamos que criar 7 novas funções e modificar `export_data` 7 vezes, percebe que é muito trabalhoso?

Dessa forma podemos fazer uma outra solução

```python
from typing import Any, Callable

type Data = dict[str, Any] # Defining Data type

exporters: dict[str, Callable[[Data], None]] = {
	'pdf': export_pdf,
	'csv': export_csv,
	'json': export_json,
}

def export_pdf(data: Data) -> None:
	print(f"Exporting pdf {data}")
	
def export_csv(data: Data) -> None:
	print(f"Exporting csv {data}")
	
def export_json(data: Data) -> None:
	print(f"Exporting json {data}")

def export_data(data: Data, format: str) -> None:
	exporter = exporters.get(format)
	if exporter is None:
		raise ValueError(f"Invalid format {format}")
	
	exporter(data)
```

Dessa forma não precisamos modificar a função `export_data` mais, porém ainda precisamos modificar o [[Dicionário|dicionário]] `exporters`, que terá como chave o `format` parâmetro de `export_data` e a função como valor do dicionário. Para não ter que modificar o dicionário, podemos fazer o seguinte

```python
from typing import Any, Callable
from functools import wraps

type Data = dict[str, Any] # Defining Data type
type ExportFn = Callable[[Data], None] # Defining export functions type

exporters: dict[str, ExportFn] = {}

def register_exporter(format: str) -> Callable[[ExportFn], ExportFn]:
		def decorator(fn: ExportFn) -> ExportFn:
			@wraps(fn)
			def wrapper(data: Data) -> None:
				return fn(data)
			
			exporters[format] = wrapper
			return wrapper

@register_exporter("pdf")
def export_pdf(data: Data) -> None:
	print(f"Exporting pdf {data}")
	
@register_exporter("csv")
def export_csv(data: Data) -> None:
	print(f"Exporting csv {data}")

@register_exporter("json")
def export_json(data: Data) -> None:
	print(f"Exporting json {data}")

def export_data(data: Data, format: str) -> None:
	exporter = exporters.get(format)
	if exporter is None:
		raise ValueError(f"Invalid format {format}")
	
	exporter(data)
```

Este caso começa a ficar complexo, mas vamos entender, criamos um [[Decorators|decorator]] que o intuito dele é registrar no nosso dicionário as funções, o decorator recebe como parâmetro o `format` que é a chave do dicionário, em seguida criamos o decorator em si, o `wrapper` tem o decorator [wraps](https://stackoverflow.com/questions/308999/what-does-functools-wraps-do) que manterá propriedades internas de `fn`, e assim criamos uma solução que precisamos apenas modificar as  funções `export` 

## `Simple is better than complex`

Bom, agora que falamos de tudo, vamos criticar tudo que já foi falado! 
Começando pelo [[#Exemplo Prático|exemplo]] que acabamos de passar, para tirar um [[If, Elif e Else|if e else]]

```python
def export_data(data: Data, format: str) -> None:
	if format == 'pdf':
		export_pdf(data)
	elif format == 'csv':
		export_csv(data)
	elif format == 'json':
		export_json(data)
	else:
		raise ValueError(f"Invalid format {format}")
```

Fizemos um código tão abstrato e complexo que dificulta ainda mais o entendimento, pois adicionamos 1 decorator complexo, 1 dicionário global, 3 funções decoradas e múltiplos níveis de indireção no código (não lemos o código verticalmente), ou seja adicionamos mais de 10 linhas de código extremamente complexas só para não usar um `if`.
Vamos supor que não escrevemos o código, e estamos tentando entende-lo, além disso o código é muito grande, e está em diversos arquivos diferentes. Partindo de `export_data`

```python
def export_data(data: Data, format: str) -> None:
	exporter = exporters.get(format)
	if exporter is None:
		raise ValueError(f"Invalid format {format}")
	
	exporter(data)
```

Já percebemos que a função chama algo que está fora dela `exporters`, então saímos da função para encontrar o `exporters`

```python
exporters: dict[str, ExportFn] = {}
```

Achamos o `exporters`, não vamos entrar na questão da tipagem, que pode ser um problema entender o que é `ExportFn`. Agora vemos que o dicionário é inicializado vazio, e agora? como sabemos quais valores estão dentro dele? Depois de muito procura achamos o decorator usando o `ctrl+F`

```python
def register_exporter(format: str) -> Callable[[ExportFn], ExportFn]:
		def decorator(fn: ExportFn) -> ExportFn:
			@wraps(fn)
			def wrapper(data: Data) -> None:
				return fn(data)
			
			exporters[format] = wrapper
			return wrapper
```

Depois de conseguir entender seu funcionamento procuramos as funções que usam esse decorator 

```python
@register_exporter("json")
def export_json(data: Data) -> None:
	print(f"Exporting json {data}")
```

Só assim conseguimos entender a simples função `export_data`, percebe que essa complexidade e abstração chega a ser esquisita? Se fosse só o simples `if` e `else` qualquer programador iria entender. Nisso chegamos em [dois conceitos](https://en.wikipedia.org/wiki/No_Silver_Bullet) importantes de [discutir](https://www.iankduncan.com/articles/2025-05-26-when-is-complexity-accidental) 

- Complexidade Essencial: Vem do problema em si (exportar para diferentes tipos de arquivos)
- Complexidade Acidental: Tudo que colocamos em cima (dicionário global, decorator, etc...)

Tudo isso acontece pois queríamos encontrar uma solução muito esperta que resolveria muitos problemas futuros e casos que não exploramos, mas precisamos disso? 

Isso dependerá de cada código, obviamente existem códigos que precisam disso, quando um código é usado por múltiplos times, muitas extensões serão adicionadas (minha opinião é mais de 5 ), o código é uma biblioteca ou um framework em que vários programadores nos anos seguintes vão usar, vou ter que modificar o código com uma frequência alta.

O que acontece é que muitas vezes Clean Code e SOLID são usados como dogma, quando na verdade deveriam ser usados como guias, como por exemplo no código estudado, geramos toda uma [Premature Generalization](https://www.codewithjason.com/premature-generalization/), uma generalização de forma prematura que só atrapalhou o nosso código buscando uma otimização futura

```
premature optimization is the root of all evil
```

Essa frase vem de [Donald Knuth](https://pt.wikipedia.org/wiki/Donald_Knuth), que é um renomado matemático e cientista da computação.
O ponto que eu quero trazer é que **é importante sim** saber abstrair e os princípios apresentados, mas mais importante ainda é saber quando usa-los. Como que eu acredito que quem está lendo isso são pessoas são pessoas que entendem de programação e querem melhorar como programador, acho que é importante saber fazer um código abstrato e escalonável, mesmo que não precise, pois isso é um diferencial absurdo em entrevistas de emprego ou em qualquer lugar que precise mostrar que é um bom programador, mas sempre lembrando que essa complexidade não é essencial, e estamos apenas trazendo mais florê para o código.