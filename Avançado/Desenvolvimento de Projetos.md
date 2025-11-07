
Você já se perguntou como o `Spotify` foi criado? Como tirar do papel a ideia de uma plataforma de streaming de música? Parece algo assustador e difícil de começar, porém existem métodos e estudos das melhores formas de tirar a ideia do papel e chegar no resultado esperado. Obviamente cada equipe trabalha de uma forma e com metodologias diferentes, mas aqui vamos apresentar uma forma de se trabalhar com desafios grandes, sendo as metodologias apresentadas as mais consolidadas tanto academicamente quanto no mundo das empresas, essa parte não é necessariamente sobre programação em si, mas sim desenvolvimento de projetos, porém o enfoque será dado para desenvolvimento de projetos de Software.

Quando falamos de projetos complexos, o desafio não é só programar bem, mas organizar o trabalho, lidar com as mudanças e e entender e resolver os problemas. Um bom programador sabe que para produzir e manter um projeto desses (como o `spotify`) é necessário, em primeiro lugar trabalhar em equipe e ter equipes especializadas em cada parte do problema.

## Desenvolvendo o Projeto

Vamos apresentar as metodologias em um "caso prático" que seria a construção do `Spotify`. A ideia em si é simples de entender, o usuário que procurar músicas, criar playlists, e ouvir o que quiser, quando quiser.
Mas como que partindo dessa ideia construímos um sistema com milhões de usuários e bilhões de músicas?

### Entender o Problema

Boa parte do desenvolvimento de projetos grandes não é a programação em si, e sim em entender o **problema real**, entender o **usuário** e o que ele quer, entender as **restrições** e entender quais são as **entradas e saídas**. 
No nosso caso, o problema não é tocar música, o verdadeiro desafio é como entregar música sob demanda para milhões de pessoas ao redor do mundo, com rapidez, qualidade e personalização.

Isso quer dizer que nosso sistema precisa lidar com:
-  Entrada de músicas
- Catálogo imenso de músicas
- Perfis de usuários
-  Playlists personalizadas
- Recomendações inteligentes
- Streaming rápido e estável
- Pagamento e planos
- Licenciamento para os músicos

Aqui conseguimos perceber a primeira coisa, a carreira de um programador não é apenas saber codar, na verdade, boa prática é entender as [regras de negócio](https://pt.wikipedia.org/wiki/Regras_de_neg%C3%B3cio) e como implementa-las. Além disso precisamos entender sobre as **restrições** do nosso problema, quanto tempo temos para desenvolver? Qual o capital do projeto? Qual a segurança necessária do software? Qual a performance esperada? Em quais dispositivos nosso software vai funcionar?

Depois de todo o processo de entender o problema e, obviamente, documentar todos os pontos listados, conseguimos de fato a decompor o problema em problemas menores.

### **Decomposição do Problema**

É praticamente impossível desenvolver um projeto complexo como o Spotify em tempo hábil com apenas um desenvolvedor. Para viabilizar o trabalho paralelo de múltiplas equipes, precisamos decompor o problema em sub-problemas menores. Aqui, o [Modelo C4](https://en.wikipedia.org/wiki/C4_model)([Exemplo](https://github.com/TheKataLog/Celus-Ceals)) nos oferece uma metodologia valiosa, especialmente em seu **Nível 2 (Containers)**, onde identificamos os principais aplicativos, serviços, armazenamentos de dados e como eles interagem.

A decomposição resulta em módulos independentes que, quando integrados, entregam o produto final. Entender o escopo e quebrar o projeto nessas unidades é crucial, pois estabelece uma estrutura para que todos os passos subsequentes fluam naturalmente.

**Aplicando a Decomposição (Nível 2 do C4) :**
- **Serviço de Gerenciamento de Usuários:** login, perfil, preferências, planos    
- **Serviço de Catálogo de Músicas:** catálogo, metadados, artistas, álbuns
- **Serviço de Playlists:** criação, edição, compartilhamento
- **Serviço de Streaming de Áudio:** envio dos arquivos de áudio com qualidade e velocidade
- **Serviço de Recomendação:** aprendizado com o gosto do usuário
- **Serviço de Pagamentos:** controle sobre assinaturas e planos
- **Serviço de Análise:** métricas de uso interno e externo

Esta é uma simplificação do problema real, mas ao decompô-lo dessa forma, conseguimos separar o sistema em partes que podem ser trabalhadas em paralelo. Obviamente existem dependências – para recomendar uma música, precisamos conhecer o usuário e o catálogo – mas essas dependências são gerenciadas através de interfaces bem definidas (APIs), permitindo que cada equipe "simule" o sistema completo com base nas entradas e saídas esperadas de cada serviço.

### **Planejamento da Arquitetura com Abordagem C4**

Com os componentes identificados, começamos a planejar a arquitetura em alto nível. É aqui que o **Modelo C4** mostra todo seu valor, ajudando-nos a visualizar e planejar como esses microsserviços vão se comunicar e se organizar.

Partimos do **Diagrama de Contexto (Nível 1 do C4)**, que mostra o Spotify como uma caixa única e suas interações com usuários e sistemas externos (como gateways de pagamento). Em seguida, detalhamos esse contexto no **Diagrama de Containers (Nível 2)**, que é justamente o resultado da nossa etapa de decomposição.

Nesta fase de planejamento:
- Escolhemos os **padrões de design** e, crucialmente, definimos **como os microsserviços vão se comunicar** (por exemplo, via APIs REST, mensageria com Kafka).
- Desenvolvemos pseudocódigo e contratos de interface para cada container, garantindo que o sistema seja escalável e respeite princípios como os do **SOLID**, especialmente o de inversão de dependência.

Finalmente, ao nos aprofundarmos no **Nível 3 (Componentes)**, planejamos a estrutura interna de cada container, decidindo quais classes, módulos e funções serão necessários. Essa abordagem estruturada garante que, mesmo começando com um projeto simples, o sistema possa ser refinado de forma organizada em algo robusto e de fácil manutenção.

### Escolha das Tecnologias

Depois que o sistema já foi todo planejado, escolhemos quais são as melhores tecnologias a serem usadas, por exemplo, aonde vamos guardas as músicas? Qual o melhor banco de dados para se usar? Quais linguagens serão usadas no [frontend e backend](https://pt.wikipedia.org/wiki/Front-end_e_back-end)? Como vamos autenticar o usuário e pagamentos? Enfim, destrinchar cada parte arquitetada e descobrir qual a melhor plataforma para cada módulo.

### Desenvolvimento Iterativo

Agora que todo o projeto foi definido é hora de começar a programar, o mesmo problema que tivemos na criação do `Spotify` temos também nos módulos, mesmo sendo uma subdivisão de um problema maior, cada módulo é um problema grande por si só, por causa disso existem metodologias, como a [Scrum](https://www.atlassian.com/br/agile/scrum) que é uma estrutura de gestão ágil, seu intuito é ajudar a estruturar e gerenciar o desenvolvimento de uma equipe, dividindo o desenvolvimento em ciclos, com o intuito de que para cada ciclo uma parte do problema será resolvido.
Na scrum temos o **Scrum Master**, que seu trabalho é gerenciar a equipe, conversar com os chefes e  as outras equipes sobre o funcionamento do seu time, o seu intuito é fazer com que os seus desenvolvedores não precisem se preocupar com qualquer problema que não seja relacionado com a codificação, além disso ele deve entender a fundo o que cada membro está fazendo para intermediar com as outras equipes sobre entregas.
Além disso tem o **time de desenvolvimento**, que de fato irá implementar as tarefas da equipe, as equipes normalmente tem diferentes conjuntos de habilidades para que cada pessoa consiga fazer algo que saiba e não "engargalar" as entregas, além disso é a equipe que conduz o planejamento de cada **Sprint**.
Por último temos os eventos que serão feitos, começando com a **sprint** que é um ciclo em que um dos subproblemas será resolvido, normalmente é um processo de 1 a 4 semanas,  então no começo de cada sprint, tem-se uma reunião falando do que foi concluído, o que pode ser melhorado e, por último, o que será tratado no próximo ciclo. Além disso essa metodologia fala de **daily scrum** que é uma reunião diária e curta (15 min), em que cada pessoa falará do que foi feito ontem e o que será feito hoje.
Cada **sprint** segue a [PDCA](https://pt.wikipedia.org/wiki/Ciclo_PDCA) que é um método iterativo que subdivide o processo de resolução em quatro partes: 
- **Plan**: Planejar o que será feito
- **Do**: Implementar
- **Check**: Testar e validar os resultados
- **Act**: Corrigir e melhorar o que foi feito

E o trabalho da equipe pode ser acompanhado visualmente com estruturas como o [Kanban](https://pt.wikipedia.org/wiki/Kanban), que separa o trabalho em quatro fileiras

| A Fazer | Em processo | Em Revisão | Concluído |
| ------- | ----------- | ---------- | --------- |
|         |             |            |           |

Podendo ter um Kanban tanto para as sprints, quanto para todo o projeto em si, isso ajuda para que nas dailys consiga saber o que que cada um precisa fazer ainda e ajuda nas reuniões das sprints para saber o que falta na visão mais macroscópica do sistema.

### Teste, Validação, Qualidade e Monitoramento

Dado que após várias semanas todas as equipes conseguiram entregar seus módulos e já foi feita a ligação deles, o próximo passo é testar o sistema, tentar encontrar o máximo de bugs possíveis e assim validar o sistema, o próximo passo é testar a qualidade do sistema vendo, por exemplo, a qualidade do áudio em diferentes dispositivos. O intuito principal é encontrar o máximo de problemas e possíveis reclamações para que quando o produto ser lançado de fato não haja atrito entre o desenvolvimento e a operação. Em seguida, escolher um grupo para usar o aplicativo como se já estivesse em produção, para que eles encontrem mais bugs no dia a dia, para isso é preciso monitorar o funcionamento do aplicativo e guardar logs, que são os registros internos do funcionamento do sistema, para que quando eventuais bugs apareçam seja fácil encontrar o que causou esses problemas.

### Entrega do Produto e Evolução

Dado que todos esses processos já estão feitos, o próximo passo é lançar o aplicativo ([[#Teste, Validação, Qualidade e Monitoramento|o passo anterior ]] nunca deve parar). Depois da entrega o sistema deve continuar sendo monitorado para encontrar possíveis problemas, mas nem só isso, analisar os dados dos usuários para entender quais são os problemas deles no aplicativo e o que pode ser melhorado, além disso é necessário documentar todo o software (se já não foi feito) para facilitar trabalhos futuros. Perceba que mesmo que o aplicativo já tenha sido "finalizado", o trabalho do desenvolvedor não acaba, pois o perfil de usuário muda, problemas acontecem, como por exemplo esse que o servidor da [aws caiu](https://www.mixvale.com.br/2025/10/20/amazons-aws-deals-with-network-failures-after-outage-hits-snapchat-and-online-banks/) e atingiu uma quantidade altíssima de produtos, como Fortine, Snapchat, Roblox, Prime Video, etc... 

### Conclusão

O intuito desse texto é exemplificar como que podemos trabalhar com um projeto complexo e grande, usando de metodologias conhecidas no meio do desenvolvimento de software para manter o processo simples e organizado, mesmo a tarefa sendo imensa. É importante ressaltar que um sistema precisa ser compreensível para que consiga ser trabalhado com facilidade ([[Boas Práticas|boas práticas]]), confiável para minimizar a quantidade de "stress" que o usuário final vai ter (testes e monitoramento), evolutivo para que mesmo que o projeto seja concluído o produto ainda ser relevante no mercado, escalável para conseguir atingir novas parcelas do mercado (spotify ter podcasts e funcionar em basicamente todos dispositivos). 

| Etapa                        | O que acontece                              |
| ---------------------------- | ------------------------------------------- |
| **Entendimento do problema** | Descobrir o que realmente precisa ser feito |
| **Divisão em módulos**       | Quebrar em partes gerenciáveis              |
| **Planejamento e desenho**   | Decidir como os módulos se conectam         |
| **Execução iterativa**       | Desenvolver em ciclos curtos                |
| **Validação**                | Testar, revisar, medir                      |
| **Evolução**                 | Melhorar continuamente                      |