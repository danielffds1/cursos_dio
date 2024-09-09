//CalculadoraImp.cs dentro da pasta Calculadora/Services
namespace Calculadora.Services
{
    public class CalculadoraImp
    {
        private List<string> listaHistorico;
        private string data;
        //Inicializa a lista de histórico
        public CalculadoraImp(string data)
        {
            listaHistorico = new List<string>();
            this.data = data;
        }
        public int Soma(int numero1, int numero2)
        {
            listaHistorico.Insert(0, "Res: " + (numero1 + numero2) + " - data: " + data);

            return numero1 + numero2;
        }
        public int Subtracao(int numero1, int numero2)
        {
            listaHistorico.Insert(0, "Res: " + (numero1 + numero2) + " - data: " + data);
            return numero1 - numero2;
        }
        public int Multiplicacao(int numero1, int numero2)
        {
            listaHistorico.Insert(0, "Res: " + (numero1 + numero2) + " - data: " + data);
            return numero1 * numero2;
        }
        public int Divisao(int numero1, int numero2)
        {
            listaHistorico.Insert(0, "Res: " + (numero1 + numero2) + " - data: " + data);
            return numero1 / numero2;
        }
        public List<string> historico()
        {
            //Retorna os 3 primeiros itens da lista
            listaHistorico.RemoveRange(3, listaHistorico.Count - 3);
            return listaHistorico;
        }
    }
}