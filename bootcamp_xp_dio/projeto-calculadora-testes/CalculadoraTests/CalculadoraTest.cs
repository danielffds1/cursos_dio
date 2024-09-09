//CalculadoraTest.cs dentro da pasta CalculadoraTests
using Calculadora.Services;

namespace CalculadoraTests;

public class CalculadoraTest
{
    public CalculadoraImp construirCalsse(){
        string data = "2021-10-10";
        CalculadoraImp calc = new CalculadoraImp("01/01/2024");
        return calc;
    }

    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(4, 5, 9)]
    public void Test1(int val1, int val2, int res)
    {
        //Arrange
        CalculadoraImp calc = construirCalsse();
        //Act
        int resultadoCalculadora = calc.Soma(val1, val2);
        //Assert
        Assert.Equal(res, resultadoCalculadora);
    }

    [Theory]
    [InlineData(1, 2, 2)]
    [InlineData(4, 5, 20)]
    public void TesteMultiplicar(int val1, int val2, int res)
    {
        //Arrange
        CalculadoraImp calc = construirCalsse();
        //Act
        int resultadoCalculadora = calc.Multiplicacao(val1, val2);
        //Assert
        Assert.Equal(res, resultadoCalculadora);
    }
    [Theory]
    [InlineData(6, 2, 3)]
    [InlineData(5, 5, 1)]
    public void TesteDividir(int val1, int val2, int res)
    {
        //Arrange
        CalculadoraImp calc = construirCalsse();
        //Act
        int resultadoCalculadora = calc.Divisao(val1, val2);
        //Assert
        Assert.Equal(res, resultadoCalculadora);
    }

    [Theory]
    [InlineData(6, 2, 4)]
    [InlineData(5, 5, 0)]
    public void TesteSubtrair(int val1, int val2, int res)
    {
        //Arrange
        CalculadoraImp calc = construirCalsse();
        //Act
        int resultadoCalculadora = calc.Subtracao(val1, val2);
        //Assert
        Assert.Equal(res, resultadoCalculadora);
    }

    [Fact]
    public void TestarDivisaoPorZero()
    {
        CalculadoraImp calc = construirCalsse();
        
        //Tratando as exceções quando tem assert que lança exceção
        Assert.Throws<DivideByZeroException>(() => calc.Divisao(10, 0));
    }

        [Fact]
    public void TestarHistorico()
    {
        CalculadoraImp calc = construirCalsse();

        calc.Soma(1, 2);
        calc.Multiplicacao(2, 3);
        calc.Divisao(4, 2);
        calc.Subtracao(5, 2);

        var lista = calc.historico();

        Assert.NotEmpty(calc.historico());
        Assert.Equal(3, calc.historico().Count);
    }
}