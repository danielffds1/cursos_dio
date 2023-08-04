import os

mensagem_inicial = """
    ************************************************
            Bem vindo ao banco Python
            Obrigado por usar nosso sistema    
    ************************************************
"""

menu_cliente = """
    ================= MENU =========================
            Você já possui cadastro?
            0 - Não
            1 - Sim
"""

menu_contas = """
    Digite:
    0 - Cadastrar nova conta
    1 - Acessar uma conta
    2 - Listar contas
"""

menu_de_operacoes = """
    Digite:
    [d] - Depositar
    [s] - Sacar
    [e] - Extrato
    [q] - Sair
"""

AGENCIA = "0001"
LIMITE = 500
LIMITE_SAQUES = 3

banco_de_clientes = []
banco_contas_cadastradas = []
lista_de_operacoes = []
conta = 1

def verifica_entrada_cadastro(entrada):
    return entrada.isalpha()

def cadastro_usuario():
    nome = input("Digite o nome do cliente: ")
    data_de_nascimento = input("Digite a data de nascimento: ")
    cpf = input("Favor digitar apenas os números do cpf: ")
    endereco = input("Digite o logradouro: ")
    endereco += " "
    endereco += input("Digite o bairro: ")
    endereco += " "
    endereco += input("Digite a cidade e sigla do estado: ")

    return nome, data_de_nascimento, cpf, endereco

def validar_cpf_existente(cpf_procurado, banco_de_clientes):
    return next((pessoa for pessoa in banco_de_clientes if pessoa['cpf'] == cpf_procurado), None)

def validar_conta_existente(conta_procura, banco_contas_cadastradas):
    return next((conta for conta in banco_contas_cadastradas if conta['conta'] == conta_procura), None)

def depositar(valida_conta, deposito, /):
    if(deposito > 0):
        valida_conta["saldo"] += deposito
        valida_conta["extrato"] += f"Deposito: {deposito:.2f}\n"
        print(f'Deposito realizado com sucesso')
    else:
        print(f'Infelizmente não poderemos realizar a operação pois o valor do depósito está incorreto')

def sacar(*, valida_conta, saque, numero_saque, LIMITE_SAQUES):
    if(numero_saque < LIMITE_SAQUES):
        if(LIMITE >= saque):
            if(valida_conta["saldo"] > saque):
                print(f"Favor retirar o dinheiro")
                valida_conta["saldo"] -= saque
                valida_conta["extrato"] += f"Saque: {saque:.2f}\n"
                numero_saque += 1
            else:
                print("""Saldo inferior ao saque.
                        Saldo: {saldo:.2f}
                    """)
        else:
            print(f"Saque superior ao valor digitado")
    else:
        print(f"Limite excedido de saque")

while True:
    usuario_encontrado = None
    conta_encontrada = None

    print(mensagem_inicial)
    print(menu_cliente)
    
    cadastro = input("Favor digitar a opção: ")

    if verifica_entrada_cadastro(cadastro) == True:
        cadastro = 2
    else:
        cadastro = int(cadastro)

    if cadastro == 0:
        
        nome, data_de_nascimento, cpf, endereco = cadastro_usuario()

        #Criando um dicionário
        informacoes_pessoa = {
            'nome': nome, 
            'data_de_nascimento': data_de_nascimento,
            'cpf': cpf,
            'endereco': endereco 
        }

        usuario_encontrado = validar_cpf_existente(cpf, banco_de_clientes)

        if usuario_encontrado != None:
            print("CPF já existente favor cadastrar novo usuário com CPF válido")
        else:
            banco_de_clientes.append(informacoes_pessoa)

            usuario_encontrado = validar_cpf_existente(cpf, banco_de_clientes)
        
        os.system("cls")

    elif cadastro == 1:
        
        cpf = input("Favor digitar o cpf: ")

        usuario_encontrado = validar_cpf_existente(cpf, banco_de_clientes)

    else:
        os.system("cls")
        print("Opção errada favor digitar opção corretamente")


    if usuario_encontrado is not None:
        os.system("cls")
        name = usuario_encontrado["nome"]
        mensagem_boas_vindas = f'Bom dia {name.upper()}'
        print(mensagem_boas_vindas)

        print(menu_contas)

        opcoes_conta = int(input("Opções do menu de contas: "))

        if opcoes_conta == 0:
            contas= {
                "agencia": AGENCIA,
                "conta": conta,
                "nome": name,
                "cpf": usuario_encontrado["cpf"],
                "saldo": 0,
                "extrato": ""
            }

            banco_contas_cadastradas.append(contas)

            valida_conta = validar_conta_existente(conta, banco_contas_cadastradas)

            conta +=1

        elif opcoes_conta == 1:
            numero_conta = int(input("Digite o número da conta: "))
            valida_conta = validar_conta_existente(numero_conta, banco_contas_cadastradas)
            
        elif opcoes_conta == 2:
            print(banco_contas_cadastradas)
        
        else:
            print("Opção inválida")
        
        numero_saque = 0

        while True:
            print(menu_de_operacoes)

            opcao = input("Digite sua opção: ")

            if opcao == 'd':
                deposito = float(input("Qual o valor deseja depositar: R$ "))

                depositar(valida_conta, deposito)

            elif opcao == 's':
                saque = float(input("Favor digitar o valor do saque: R$ "))

                sacar(
                        valida_conta= valida_conta, 
                        saque = saque, 
                        numero_saque = numero_saque, 
                        LIMITE_SAQUES = LIMITE_SAQUES)

            elif opcao == 'e':
                print(f"{nome} seu extrato bancário")
                print(valida_conta["extrato"])
                print(f'Seu saldo é R$ {valida_conta["saldo"]:.2f}')

            elif opcao == 'q':
                break
            else:
                print("Operação inválida, por favor selecione novamente a operação desejada.")



        print(banco_de_clientes)
        print(banco_contas_cadastradas)