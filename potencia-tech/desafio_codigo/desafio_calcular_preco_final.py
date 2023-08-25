"""
    Você está criando um aplicativo de entrega de comida e precisa calcular o preço final do pedido do usuário. 
    O usuário escolheu alguns itens do cardápio e é preciso calcular o preço total do pedido.
"""

valorHamburguer = float(input())
quantidadeHamburguer = int(input())
valorBebida = float(input())
quantidadeBebida = int(input())
valorPago = float(input())

preco_total = (valorHamburguer * quantidadeHamburguer) + (valorBebida * quantidadeBebida)

troco_ao_cliente = valorPago - preco_total

print(f'O preço final do pedido é R$ {preco_total:.2f}. Seu troco é R$ {troco_ao_cliente:.2f}.')