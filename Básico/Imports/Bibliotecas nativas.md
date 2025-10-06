
## Fundamentais do Sistema

- **sys**: Acesso a variáveis e funções específicas do sistema
- **os**: Interface com o sistema operacional (arquivos, processos, variáveis de ambiente)
- **os.path**: Operações com caminhos de arquivos
- **platform**: Informações sobre a plataforma de hardware/software
- **errno**: Símbolos padrão de erro do sistema
- **fcntl**: Chamadas do sistema fcntl() para I/O
- **gc**: Interface para garbage collector
- **genericpath**: Operações comuns de caminhos
- **pty**: Manipulação de pseudo-terminais
- **resource**: Interface para uso de recursos do sistema
- **stat**: Constantes para interpretar resultados de os.stat()
- **tty**: Funções de controle de terminal
- **getopt**: Parser para opções de linha de comando (estilo C)
- **mimetypes**: Mapeamento de nomes de arquivo para tipos MIME
- **mmap**: Suporte a memory-mapped files
- **optparse**: Parser para opções de linha de comando (depreciado)
- **pkgutil**: Utilitários para extensões de pacotes
- **pyexpat**: Interface para parser Expat
- **rlcompleter**: Função de completion para readline
- **sched**: Event scheduler geral
- **shlex**: Parser simples para linguagem similar a shell
- **sre_compile**: Compilador de expressões regulares (interno)
- **sre_constants**: Constantes de expressões regulares (interno)
- **sre_parse**: Parser de expressões regulares (interno)
- **subprocess**: Gerenciamento de subprocessos
- **symtable**: Interface para tabelas de símbolos do compilador
- **sysconfig**: Informações de configuração do Python

## Tipos de Dados e Estruturas

- **collections**: Estruturas de dados especializadas (namedtuple, deque, Counter, etc.)
- **array**: Arrays eficientes de valores numéricos
- **dataclasses**: Decorador para criar classes principalmente para armazenar dados
- **enum**: Suporte para enumerations
- **types**: Definições de tipo para verificação dinâmica
- **typing**: Suporte para type hints

## Matemática e Numéricos

- **math**: Funções matemáticas (trigonometria, logaritmos, etc.)
- **cmath**: Funções matemáticas para números complexos
- **decimal**: Aritmética decimal de precisão arbitrária
- **fractions**: Números racionais
- **numbers**: Hierarquia de classes base para números
- **random**: Geração de números pseudoaleatórios
- **statistics**: Funções estatísticas matemáticas

## Manipulação de Strings e Texto

- **string**: Operações comuns com strings
- **re**: Operações com expressões regulares
- **textwrap**: Quebra e formatação de texto
- **difflib**: Helpers para comparação de sequências
- **unicodedata**: Banco de dados Unicode
- **encodings**: Pacote com todas as codificações de caracteres
- **fileinput**: Itera sobre linhas de múltiplos arquivos de input
- **ipaddress**: Manipulação de endereços IPv4/IPv6

## Manipulação de Dados e Formatos

- **aifc**: Leitura e escrita de arquivos AIFF e AIFC
- **base64**: Codificação e decodificação Base16, Base32, Base64, Base85
- **binascii**: Conversão entre binário e ASCII
- **chunk**: Leitura de arquivos chunked IFF
- **colorsys**: Conversões entre sistemas de cores
- **plistlib**: Geração e parsing de arquivos .plist (Property List)
- **quopri**: Codificação e decodificação quoted-printable (MIME)
- **struct**: Interpreta bytes como dados binários empacotados
- **tomllib**: Suporte para parsing de arquivos TOML (Python 3.11+)
- **uu**: Codificação e decodificação uuencode
- **xdrlib**: Codificação e decodificação de dados XDR
- **codecs** - Sistema de registro e gerenciamento de codificações de texto (UTF-8, ASCII, etc.) para codificação e decodificação de dados
- **opcode** - Tabelas e utilitários para os opcodes internos do bytecode Python, usado pelo compilador e disassembler
- **copy**: Operações de cópia superficial e profunda

## Datas e Horas

- **datetime**: Tipos básicos de data e hora
- **calendar**: Funções gerais relacionadas ao calendário
- **time**: Acesso a funções de tempo
- **zoneinfo**: Suporte ao banco de dados de fuso horário IANA

## Estruturas de Dados Avançadas

- **heapq**: Implementação de heap queue algorithm (priority queue)
- **bisect**: Array bisection algorithm para ordenação
- **queue**: Implementação de filas sincronizadas multiprocesso
- **weakref**: Suporte a referências fracas
- **ctypes** - Interface para chamar funções de bibliotecas compartilhadas em C e trabalhar com estruturas de dados compatíveis com C
- **graphlib**: Funcionalidade para trabalhar com estruturas do tipo grafo


## Programação Assíncrona e Concorrente

- **asyncio**: Framework para programação assíncrona
- **threading**: API de alto nível para threads
- **multiprocessing**: Processamento paralelo usando subprocessos
- **concurrent**: Classes de alto nível para concorrência
- **contextvars** - Mecanismo para armazenar e acessar dados contextuais em programas assíncronos, mantendo estado isolado entre tarefas
- **signal**: Configura handlers para eventos assíncronos


## Funções de Programação Funcional

- **functools**: Funções de ordem superior e operações em callable objects
- **itertools**: Funções criando iteradores para loop eficiente
- **operator**: Operadores padrão como funções

## Persistência e Serialização

- **pickle**: Serialização e desserialização de objetos Python
- **json**: Codificador e decodificador JSON
- **shelve**: Persistência de objetos Python
- **dbm**: Interfaces para bancos de dados Unix "dbm"
- **pickletools** - Ferramentas para análise, otimização e inspeção de dados serializados no formato pickle
- **copyreg**: Suporte a registro para pickle
- **marshal**: Serialização de objetos (Python-specific)

## Arquivos e Diretórios

- **pathlib**: Caminhos do sistema de arquivos orientado a objetos
- **shutil**: Operações de alto nível em arquivos e coleções de arquivos
- **glob**: Busca de caminhos Unix style
- **fnmatch**: Comparação de nomes de arquivo Unix style
- **tempfile**: Geração de arquivos e diretórios temporários
- **filecmp**: Comparação de arquivos e diretórios
- **tempfile**: Gera arquivos e diretórios temporários
- **zipapp**: Cria aplicações Python executáveis zip
- **zipimport**: Importa módulos de arquivos Zip
-  **tarfile**: Leitura e escrita de arquivos tar
- **sunau**: Leitura e escrita de arquivos Sun AU

## Entrada/Saída e Formatação

- **io**: Ferramentas core para trabalhar com streams
- **pprint**: Pretty-print de dados
- **reprlib**: Implementação alternativa de repr()
- **sqlite3**: Interface DB-API 2.0 para banco de dados SQLite
- **select**: Espera por conclusão de I/O
- **selectors**: Abstração de alto nível para I/O multiplexado
- **atexit**: Registra funções a serem chamadas na saída do programa
## Internet e Protocolos

- **socket**: Interface de rede de baixo nível
- **urllib**: Módulos para abrir URLs
- **http**: Módulos HTTP
- **email**: Suporte a email e mensagens MIME    
- **xml**: Processamento XML    
- **csv**: Leitura e escrita de arquivos CSV
- **cgi**: Suporte a Common Gateway Interface
- **cgitb**: Traceback manager para scripts CGI
- **ftplib**: Cliente FTP
- **html**: Suporte para HTML
- **imaplib**: Cliente IMAP4
- **mailbox**: Manipula mailboxes em vários formatos
- **mailcap**: Manipulação de arquivos mailcap
- **nntplib**: Cliente NNTP
- **poplib**: Cliente POP3
- **smtplib**: Cliente SMTP
- **sndhdr**: Reconhece tipos de arquivos de som
- **socketserver**: Framework para servidores de rede
- **telnetlib**: Cliente Telnet
- **xmlrpc**: Suporte a XML-RPC
- **site**: Configuração do site-specific configuration
- **ipaddress**: Manipulação de endereços IPv4/IPv6
- **netrc**: Processamento de arquivos .netrc
- **webbrowser**: Controle do navegador web
- **wsgiref**: Implementação de referência WSGI
## Desenvolvimento e Debugging

- **logging**: Sistema de logging para Python
- **pdb**: The Python Debugger
- **unittest**: Framework de testes unitários    
- **doctest**: Testes através de docstrings
- **inspect**: Inspecionar objetos ao vivo    
- **traceback**: Imprimir ou recuperar stack traces
- **bdb**: Framework genérico para debuggers
- **cProfile**: Profiler com overhead baixo
- **code**: Facilidades para emular o console do Python
- **codeop**: Compila código Python
- **compileall**: Compila recursivamente bibliotecas Python
- **dis**: Disassembler para bytecode Python
- **faulthandler**: Despeja traceback do Python em falhas
- **linecache**: Acesso aleatório a linhas de texto
- **pdb**: Debugger do Python
- **pstats**: Estatísticas para profilers
- **py_compile**: Compila arquivos Python
- **pyclbr**: Suporte a browser de classes Python
- **pydoc**: Gerador de documentação e sistema de ajuda
- **pydoc_data**: Dados para pydoc
- **tabnanny**: Detector de indentação ambígua
- **token**: Constantes para tokens do parser Python
- **tokenize**: Tokenizer para código fonte Python
- **trace**: Rastreia execução de código Python
- **tracemalloc**: Rastreia alocações de memória
- **cmd** - Framework para criar interpretadores de linha de comando personalizados com sistema de ajuda automático, completamento e processamento de comandos
- **code** - Utilitários para implementar consoles Python interativos, incluindo execução de código, tracebacks e sessões interativas
- **idlelib** - Implementação do ambiente de desenvolvimento integrado (IDE) IDLE que acompanha o Python
- **ensurepip**: Bootstrapper para o pip installer
- **timeit**: Mede tempo de execução de pequenos trechos de código
- **turtle**: Gráficos turtle
- **turtledemo**: Demonstrações do módulo turtle
- **tkinter**: Interface para Tk (GUI toolkit)
- **venv**: Criação de ambientes virtuais
- **warnings**: Controle de warnings
- **lib2to3**: Biblioteca de conversão do python 2 pro 3
-  **modulefinder**: Encontra módulos usados por um script
- **profile**: Profiler do Python
- **runpy**: Executa módulos Python como scripts

## Internacionalização

- **gettext**: Serviços de internacionalização    
- **locale**: Serviços de internacionalização

## Módulos Especiais

- **builtins**: Objetos built-in
- ****future****: Definições futuras
- **abc**: Abstract Base Classes
- **contextlib**: Utilitários para with-statement
-  **importlib**: Implementação de import

## Segurança

- **hashlib**: Algoritmos de hash seguros
- **hmac**: Keyed-Hashing para autenticação de mensagens
- **secrets**: Geração de números aleatórios seguros para gerenciamento de secrets    
- **ssl**: Encapsulamento de socket para TLS/SSL
- **crypt**: Interface para criptografia Unix style
- **getpass**: Entrada de senha sem eco
- **secrets**: Gera números aleatórios seguros para secrets
- **uuid**: Objetos UUID de acordo com RFC 4122


## Áudio e Multimídia

- **wave**: Leitura e escrita de arquivos WAV    
- **audioop**: Operações em dados de áudio crus
- **imghdr** - Identificador de formatos de arquivos de imagem (JPEG, PNG, GIF, etc.) através da análise de assinaturas de arquivo

## Windows específico

- **winreg**: Acesso ao registro do Windows
- **winsound**: Interface de acesso ao player de som do Windows
-  **nt**: Interface específica do Windows NT
- **msvcrt**: Rotinas úteis do MS VC++ runtime (Windows)
- **ntpath**: Operações com caminhos no estilo Windows NT
- **nturl2path**: Conversão entre URLs e caminhos de arquivo Windows
- **msilib**: Leitura e escrita de arquivos Microsoft Installer
## Unix específico

- **pwd**: The password database
- **grp**: The group database
- **ossaudiodev**: Suporte ao dispositivo de áudio OSS 
-  **posix**: Interface específica do POSIX
- **posixpath**: Operações com caminhos no estilo POSIX
- **pwd**: Banco de dados de senhas (Unix)
- **spwd**: Banco de dados de senhas shadow (Unix)
- **syslog**: Interface para syslogger Unix
- **termios**: Controle de TTY POSIX style
- **pipes**: Interface para pipeline Unix
- **readline**: Interface GNU readline (quando disponível)
- **nis**: Interface para Sun's NIS (Yellow Pages)

## Outros Utilitários

- **argparse**: Parser para opções de linha de comando
- **configparser**: Parser de arquivos de configuração
- **zipfile**: Trabalhar com arquivos ZIP
- **gzip**, **bz2**, **lzma**, **zlib**: Compressão de arquivos
## Easter Eggs

- **antigravity**: Importe isso para diversão
- **this**: O Zen do Python