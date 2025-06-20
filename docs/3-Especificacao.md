# 3. Especificações do Projeto

A desigualdade social e a escassez de recursos ainda são desafios enfrentados por muitas pessoas, tornando a solidariedade e as ações de doação essenciais para mitigar esses problemas. No entanto, um dos principais obstáculos enfrentados por doadores é a falta de confiança e transparência no processo de doação. Muitos têm receio de que suas contribuições não cheguem a quem realmente precisa ou sejam mal geridas.

Diante desse cenário, este projeto tem como objetivo o desenvolvimento de uma plataforma online de doações que conecte doadores a instituições e projetos sociais de forma segura e eficiente. O sistema permitirá o cadastro de usuários, o registro de doações e a gestão de recebimentos por parte das instituições beneficiadas, garantindo transparência no processo.

A plataforma será projetada para facilitar a busca por instituições confiáveis, permitindo doações de roupas, alimentos e outros itens essenciais. Além disso, contará com um sistema de notificações e um painel administrativo para garantir um melhor controle e organização das doações. 

# 3.1 Técnicas e Ferramentas Utilizadas
Para o desenvolvimento da plataforma, serão utilizadas as seguintes tecnologias e metodologias:

3.1.1 Tecnologias de Desenvolvimento

    Linguagem de Programação: JavaScript
    Frontend: React.js/React-Native
    Backend: Node.js
    Banco de Dados: MySQL

3.1.2 Ferramentas de Desenvolvimento

    Gerenciamento de Código: GitHub
    Gerenciamento de Tarefas: Trello
    Ambiente de Desenvolvimento: Visual Studio Code

3.1.3 Metodologias

    Metodologia Ágil (Scrum): O projeto será desenvolvido em sprints, com reuniões para acompanhamento do progresso e ajustes necessários.
    Revisão de Código: Para garantir a qualidade do código, serão realizadas revisões periódicas entre os membros da equipe.

## 3.2 Histórias de Usuários

Histórias de Usuário – Doador
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João (Doador)  | Criar uma conta na plataforma          | Realizar doações de forma segura e transparente            |
|Beatriz (Doadora)      | Buscar instituições confiáveis por tipo de doação (roupas, alimentos)                 | Encontrar rapidamente instituições que atendem às minhas preferências de doação |
| Gabriel (Doador)            | Visualizar um histórico detalhado de minhas doações           | Ter controle sobre o impacto das minhas contribuições               |
| Vitor (Doador              | Configurar alertas de necessidades específicas de doações nas instituições                | Ser notificado sobre quais tipos de doações as instituições precisam mais |

Histórias de Usuário – Instituição Beneficiada
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana (Instituição Beneficiada)  | Registrar a instituição na plataforma          | Receber doações de maneira organizada e garantir que cheguem ao público-alvo           |
|Lucas (Instituição Beneficiada)      | Notificar doadores sobre o recebimento das doações | Garantir transparência e fortalecer a confiança no processo de doação |

Histórias de Usuário – Administrador
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Robson (Administrador)  | Acompanhar todas as doações realizadas na plataforma   | Garantir que as doações sejam entregues corretamente e para as instituições certas |
|Maria (Administrador)     | Verificar o andamento das campanhas de arrecadação | Avaliar o sucesso das campanhas e gerar relatórios para prestação de contas |

3.2.1 Resumo de Contexto

Doador: O foco está em facilitar o processo de doação, proporcionando funcionalidades que permitam encontrar instituições confiáveis, acompanhar o impacto de suas doações e ser notificado sobre necessidades específicas.

Instituição Beneficiada: As histórias focam na possibilidade de registro e na necessidade de garantir transparência no recebimento das doações, com o envio de notificações aos doadores para promover confiança.

Administrador: O administrador precisa de funcionalidades para garantir o bom andamento da plataforma, com controle e organização das doações, além da capacidade de gerar relatórios e monitorar as campanhas.



## 3.3 Classificação dos Requisitos Funcionais x Requisitos não Funcionais 

### 3.3.1 Requisitos Funcionais

|ID    | Descrição do Requisito                  | Prioridade |
|------|-----------------------------------------|------------|
|RF-001| Permitir que o usuário crie uma conta na plataforma (Doador, Instituição Beneficiada e Administrador). |    ALTA    | 
|RF-002| Permitir que o doador busque instituições por tipo de doação (roupas, alimentos, etc.) e localização geográfica.   |    ALTA   |
|RF-003| Permitir que o doador registre suas doações e visualize um histórico detalhado de doações passadas.   |    ALTA   |
|RF-004| Permitir que as instituições configurem alertas de necessidades específicas de doações e enviem notificações para os doadores.   |    MÉDIA   |
|RF-005| Permitir que os administradores acompanhem todas as doações realizadas na plataforma, com acesso a informações detalhadas e filtros.   |    ALTA   |
|RF-006| Permitir que os administradores gerenciem o cadastro de instituições e campanhas de arrecadação.   |    MÉDIA   |
|RF-007| Permitir que as instituições enviem feedback para os doadores sobre o recebimento e uso das doações.   |    MÉDIA   |

### 3.3.2 Requisitos não Funcionais

|ID     | Descrição do Requisito                                            |Prioridade |
|-------|-------------------------------------------------------------------|-----------|
|RNF-001|O sistema deve estar disponível 99,9% do tempo, garantindo acesso contínuo. |    ALTA  | 
|RNF-002| As buscas por instituições e filtros devem retornar resultados em menos de 2 segundos.             |    ALTA  | 
|RNF-003| O sistema deve suportar crescimento de usuários e transações sem perda de desempenho.             |    ALTA  |
|RNF-004| A interface deve ser intuitiva e acessível a todos os úsuarios. |    MÉDIA  |
|RNF-005| O sistema deve ser compatível com dispositivos móveis e navegadores modernos.	            |    MÉDIA  |
|RNF-006| Deve garantir integridade e precisão dos dados armazenados.             |    ALTA  |
|RNF-007| Deve permitir atualizações rápidas com impacto mínimo nos usuários.             |    MÉDIA  |
|RNF-008| Deve atender às normas de proteção de dados (ex: LGPD) e realizar backups periódicos.           |    ALTA  |

## 3.4 Restrições

|ID| Restrição                                               |
|--|---------------------------------------------------------|
|01| O software deve ser compatível com Windows e Linux.     |
|02| O sistema deve ser desenvolvido utilizando JavaScript e MySQL.|
|03| O Software deve ser seguro e garantindo a proteção dos dados dos usuários e doadores.|
|04| O sistema deve ser responsivo.|
|05| O sistema deve ser compatível com os princípios navegadores utilizados (Chrome, Firefox, Edge e Safari.|
|06| O código deve seguir as boas práticas de desenvolvimento, garantindo a fácil manutenção.|
|07| Deve permitir pesquisar ONGs por categoria (alimentação, educação, saúde.|
|08| Deve possuir um painel administrativo para gestão das ONGS e das doações.|
|09| Deve permitir a atualização de dados cadastrados.|
|10| O usuário deve poder visualizar o impacto de suas doações, por meio de fotos ou relatos .|

