""" 
Você foi contratado por um banco para desenvolver um programa que auxilie seus 
clientes a realizar depósitos em suas contas. O programa deve solicitar ao 
cliente o valor do depósito e verificar se o valor é válido. Se o valor for 
maior do que zero, o programa deve adicionar o valor ao saldo da conta. 
Caso contrário, o programa deve exibir uma mensagem de erro e solicitar um 
novo valor. O programa deve continuar solicitando valores de depósito até 
que seja digitado um valor válido.
"""

while(True):
    valor = float(input())

    if valor > 0:
        # TODO: Imprimir a mensagem de sucesso, formatando o saldo atual (vide Exemplos).
        print(f'Deposito realizado com sucesso!\nSaldo atual: R$ {valor:.2f}')
    elif valor == 0:
       # TODO: Imprimir a mensagem de valor inválido.
        print(f'Encerrando o programa...')
        break
    else:
      # TODO: Imprimir a mensagem de encerrar o programa.
      print(f'Valor invalido! Digite um valor maior que zero.')