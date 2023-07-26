menu = """
    [d] - Depositar
    [s] - Sacar
    [e] - Extrato
    [q] - Sair
=> """

LIMITE = 500
LIMITE_SAQUES = 3

saldo = 0
extrato = ""
numero_saque = 0

nome = input("Digite seu nome: ")

while True:
    deposito = 0
    saque = 0
    valor = 0
    print(f"Olá, {nome}, seu saldo é de R$ {saldo}")

    opcao = input(menu)

    opcao = opcao.lower()

    if opcao == 'd':
        deposito = float(input("Qual o valor deseja depositar: R$ "))
        if(deposito > 0):
            saldo += deposito
            extrato += f"Deposito: {deposito:.2f}\n"
        else:
            print(f'Infelizmente não poderemos realizar a operação pois o valor do depósito está incorreto')

    elif opcao == 's':
        saque = float(input("Favor digitar o valor do saque: R$ "))

        if(numero_saque < LIMITE_SAQUES):
            if(LIMITE >= saque):
                if(saldo > saque):
                    print(f"Favor retirar o dinheiro")
                    saldo -= saque
                    extrato += f"Saque: {saque:.2f}\n"
                    numero_saque += 1
                else:
                    print("""Saldo inferior ao saque.
                             Saldo: {saldo:.2f}
                          """)
            else:
                print(f"Saque superior ao valor digitado")
        else:
            print(f"Limite excedido de saque")

    elif opcao == 'e':
        print(f"{nome} seu extrato bancário")
        print(extrato)
        print(f"Seu saldo é R$ {saldo:.2f}")

    elif opcao == 'q':
        break
    else:
        print("Operação inválida, por favor selecione novamente a operação desejada.")

