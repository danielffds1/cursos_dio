# Laboratório 3 - Modelos de serviços na computação em nuvem
# Modelos como Serviços (IaaS, PaaS, SaaS) na Azure

**IaaS (Infrastructure as a Service)**: 
Oferece infraestrutura de TI sob demanda, incluindo servidores, armazenamento e redes. Os usuários têm controle total sobre a configuração e manutenção dos sistemas operacionais e aplicativos. Exemplos no Azure: **Azure Virtual Machines**, **Azure Storage**.

**PaaS (Platform as a Service)**:
Fornece uma plataforma completa para desenvolvimento e implantação de aplicativos. O foco está no desenvolvimento de código, enquanto o provedor de nuvem gerencia a infraestrutura subjacente, incluindo sistemas operacionais e servidores. Exemplos no Azure: **Azure App Services**, **Azure SQL Database**.

**SaaS (Software as a Service)**:
Oferece aplicativos prontos para uso, totalmente gerenciados pelo provedor de nuvem. Os usuários acessam o software via internet e não precisam se preocupar com manutenção ou gerenciamento da infraestrutura. Exemplos no Azure: **Microsoft 365**, **Dynamics 365**.

# Modelo de Responsabilidade Compartilhada na Computação em Nuvem

**Responsabilidade do Provedor de Nuvem**:
Inclui a gestão da infraestrutura física (servidores, armazenamento, rede) e, dependendo do modelo de serviço, a plataforma (sistemas operacionais, runtime) e o software. O provedor garante a segurança, a atualização e a disponibilidade da infraestrutura.

**Responsabilidade do Cliente**:
- **IaaS**: Gerencia sistemas operacionais, aplicativos e dados.
- **PaaS**: Gerencia aplicativos e dados.
- **SaaS**: Gerencia identidades, permissões de acesso e dados.

O modelo de responsabilidade compartilhada ajuda a definir claramente as funções e responsabilidades de cada parte, evitando lacunas na segurança e na conformidade.

# Laboratório 2 - Características e pricípios de computação em nuvem

Na computação em nuvem, **alta disponibilidade** refere-se à capacidade de um sistema ou serviço de permanecer operacional e acessível por longos períodos, minimizando interrupções. Isso é alcançado por meio de redundância e replicação de recursos, garantindo que, mesmo em caso de falhas, o serviço continue disponível.

**Disponibilidade SLA (Service Level Agreement)** é um compromisso do provedor de nuvem de garantir um determinado nível de tempo de atividade para seus serviços, geralmente expresso em porcentagens (por exemplo, 99,99%). O SLA define as expectativas de desempenho e a compensação em caso de falha no cumprimento dessas garantias.

**Escalabilidade** é a capacidade de um sistema de aumentar ou diminuir seus recursos conforme a demanda. Pode ser feita de forma **vertical** (aumentando os recursos de um único servidor) ou **horizontal** (adicionando mais servidores). Isso garante que o sistema possa lidar com diferentes cargas de trabalho de maneira eficiente.

**Elasticidade** é uma forma dinâmica de escalabilidade, onde os recursos são ajustados automaticamente em tempo real, de acordo com as variações na carga de trabalho. A elasticidade permite que os sistemas aumentem ou diminuam a capacidade de forma ágil, mantendo o desempenho ideal e otimizando custos.

**Confiabilidade** envolve a capacidade do sistema de funcionar de maneira consistente e correta. Na nuvem, isso é alcançado através de recursos redundantes, recuperação automática e failover, garantindo que os serviços permaneçam operacionais mesmo em caso de falhas.

**Previsibilidade** refere-se à capacidade de prever o desempenho e os custos associados à execução de sistemas na nuvem. Ferramentas de monitoramento e controle permitem que as organizações planejem e ajustem os recursos conforme necessário, evitando surpresas em termos de desempenho e gastos.

**Segurança** é a proteção de dados e recursos contra ameaças e acessos não autorizados. Na nuvem, isso inclui criptografia, controle de acesso, autenticação multifator e conformidade com regulamentações, garantindo que os dados estejam seguros e em conformidade com os padrões da indústria.

**Governança** envolve a definição e a aplicação de políticas e processos para o gerenciamento dos recursos na nuvem. Inclui controle de custos, políticas de segurança, conformidade e gerenciamento de acesso para garantir que os recursos sejam usados de maneira eficiente e segura.

**Gerenciamento** ou **Gerenciabilidade** refere-se à capacidade de monitorar, administrar e automatizar a infraestrutura e os serviços na nuvem. Ferramentas de gerenciamento centralizadas, como painéis de controle e automação de processos, permitem que as organizações mantenham a eficiência operacional e o desempenho dos sistemas.

### Resumo prático do Laboratório 2
Na computação em nuvem, como no Microsoft Azure, todos esses conceitos trabalham juntos para fornecer uma infraestrutura de TI robusta, eficiente e segura. A alta disponibilidade e os SLAs garantem que os serviços estejam quase sempre acessíveis. A escalabilidade e a elasticidade permitem que os sistemas se adaptem rapidamente à carga de trabalho variável. Confiabilidade e previsibilidade garantem operações consistentes e custo-efetivas. A segurança protege dados sensíveis, enquanto a governança e o gerenciamento mantêm o controle e a eficiência dos recursos na nuvem.

# Laboratório 1 - Introdução ao Microsoft Azure
# Nuvens Públicas, Privadas e Híbridas no Microsoft Azure

## Introdução

O Microsoft Azure oferece uma gama de soluções de computação em nuvem que podem ser classificadas em três tipos principais de ambientes: **nuvem pública**, **nuvem privada** e **nuvem híbrida**. Cada um desses modelos tem suas próprias características, com aplicações adequadas a diferentes cenários de negócios.

### Nuvem Pública

A **nuvem pública** é um ambiente de computação onde os recursos (servidores, armazenamento, bancos de dados, etc.) são fornecidos e gerenciados por provedores de serviços em nuvem como o Microsoft Azure. Esses recursos são compartilhados entre vários usuários, mas cada um possui seus próprios dados isolados e protegidos.

#### Vantagens:
- **Escalabilidade**: As empresas podem aumentar ou reduzir seus recursos conforme necessário, sem precisar investir em hardware adicional.
- **Custos menores**: Não há necessidade de manutenção de infraestrutura física, o que reduz os custos operacionais.
- **Acesso global**: Disponível de qualquer lugar com acesso à internet.

#### Desvantagens:
- **Menor controle**: Como os recursos são gerenciados pelo provedor, há menos controle direto sobre a infraestrutura.
- **Segurança compartilhada**: Embora os dados estejam isolados, o ambiente é compartilhado, o que pode levantar preocupações de segurança para algumas empresas.

### Nuvem Privada

A **nuvem privada** oferece uma infraestrutura dedicada exclusivamente a uma única empresa, seja ela hospedada localmente no data center da empresa ou gerenciada por um provedor de serviços em nuvem.

#### Vantagens:
- **Maior controle**: As empresas têm controle total sobre os recursos e a segurança da infraestrutura.
- **Personalização**: Soluções de TI podem ser customizadas para atender necessidades específicas de conformidade e segurança.

#### Desvantagens:
- **Custos elevados**: A manutenção e o gerenciamento de uma nuvem privada exigem investimentos significativos em hardware e equipe especializada.
- **Escalabilidade limitada**: A expansão pode ser mais lenta e cara, pois depende da aquisição de novos recursos físicos.

### Nuvem Híbrida

A **nuvem híbrida** combina elementos de nuvens públicas e privadas, permitindo que as empresas usem ambas conforme necessário. Ela oferece flexibilidade para armazenar dados confidenciais em uma nuvem privada enquanto aproveita os recursos de escalabilidade da nuvem pública para cargas de trabalho menos sensíveis.

#### Vantagens:
- **Flexibilidade**: Oferece o melhor dos dois mundos, permitindo que as empresas equilibrem custo e controle.
- **Segurança e conformidade**: Dados sensíveis podem ser mantidos em uma nuvem privada, enquanto a nuvem pública é usada para tarefas de maior demanda.
- **Escalabilidade**: Quando os recursos da nuvem privada não são suficientes, a nuvem pública pode fornecer capacidade adicional.

#### Desvantagens:
- **Complexidade de gerenciamento**: Manter uma infraestrutura híbrida pode ser mais complexo, pois envolve a integração de dois ambientes diferentes.
- **Custos variáveis**: Embora a nuvem híbrida ofereça flexibilidade, ela pode gerar custos adicionais se não for bem gerenciada.

## Vantagens e Desvantagens da Utilização de Serviços na Nuvem

### Vantagens:
1. **Redução de Custos**: Não é necessário investir em infraestrutura física, manutenção e atualizações de hardware.
2. **Escalabilidade e Flexibilidade**: Recursos podem ser escalados conforme a demanda, permitindo que as empresas paguem apenas pelo que utilizam.
3. **Acesso Global e Mobilidade**: Equipes podem acessar recursos e dados de qualquer lugar do mundo, facilitando o trabalho remoto.
4. **Atualizações e Manutenção Automáticas**: Provedores de nuvem, como o Azure, cuidam das atualizações de segurança e de software, garantindo um ambiente sempre atualizado.

### Desvantagens:
1. **Dependência de Conectividade**: A infraestrutura na nuvem depende de uma conexão estável à internet. Se houver problemas de conectividade, isso pode afetar os serviços.
2. **Segurança e Privacidade**: Embora os provedores de nuvem tenham fortes medidas de segurança, os dados estão em servidores de terceiros, o que pode ser uma preocupação para algumas empresas.
3. **Custos de Longo Prazo**: O pagamento contínuo pelo uso da nuvem pode se acumular ao longo do tempo, especialmente se os recursos não forem otimizados.

## Quando Utilizar Serviços na Nuvem?

### Quando Utilizar:
- **Startups e Pequenas Empresas**: Para evitar altos custos iniciais de infraestrutura, a nuvem oferece flexibilidade e escalabilidade sem a necessidade de grandes investimentos.
- **Empresas com Demanda Variável**: Se uma empresa lida com picos de demanda que variam ao longo do tempo, a capacidade de escalar a infraestrutura rapidamente é uma grande vantagem.
- **Empresas com Trabalho Remoto**: Para organizações que precisam oferecer acesso a recursos de TI para equipes distribuídas ou remotas.
- **Projetos de Curta Duração**: A nuvem é ideal para projetos temporários onde não faz sentido investir em infraestrutura física.

### Quando Não Utilizar:
- **Empresas com Requisitos Rígidos de Conformidade**: Organizações que precisam cumprir regulações específicas de privacidade ou segurança podem preferir manter dados sensíveis em infraestruturas locais.
- **Negócios com Custos de Longo Prazo Altos**: Em alguns casos, para empresas de grande porte com requisitos previsíveis, pode ser mais econômico investir em infraestrutura própria a longo prazo.
- **Conectividade Limitada**: Se uma empresa opera em uma área com pouca conectividade à internet, a dependência da nuvem pode ser um fator negativo.
