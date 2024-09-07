using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MinimalApi.Dominio.Entidades;
using MinimalApi.Dominio.Servicos;
using MinimalApi.Infraestrutura.Db;

namespace Test.Domain.Servicos
{
    [TestClass]
    public class VeiculoServicoTest
    {
         private DbContexto CriarContextoDeTeste()
    {
        var assemblyPath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
        var path = Path.GetFullPath(Path.Combine(assemblyPath ?? "", "..", "..", ".."));

        var builder = new ConfigurationBuilder()
            .SetBasePath(path ?? Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddEnvironmentVariables();

        var configuration = builder.Build();

        return new DbContexto(configuration);
    }

        [TestMethod]
        public void Deve_Incluir_Veiculo()
        {
            // Arrange
            var contexto = CriarContextoDeTeste();
            var veiculoServico = new VeiculoServico(contexto);
            var veiculo = new Veiculo { Nome = "Civic", Marca = "Honda", Ano = 2022 };

            // Act
            veiculoServico.Incluir(veiculo);

            // Assert
            Assert.AreEqual(1, contexto.Veiculos.Count());
            Assert.AreEqual("Civic", contexto.Veiculos.First().Nome);
        }

        [TestMethod]
        public void Deve_Atualizar_Veiculo()
        {
            // Arrange
            var contexto = CriarContextoDeTeste();
            var veiculoServico = new VeiculoServico(contexto);
            var veiculo = new Veiculo { Nome = "Civic", Marca = "Honda", Ano = 2022 };
            veiculoServico.Incluir(veiculo);

            // Act
            veiculo.Nome = "Civic 2023";
            veiculoServico.Atualizar(veiculo);

            // Assert
            Assert.AreEqual("Civic 2023", contexto.Veiculos.First().Nome);
        }

        [TestMethod]
        public void Deve_Apagar_Veiculo()
        {
            // Arrange
            var contexto = CriarContextoDeTeste();
            var veiculoServico = new VeiculoServico(contexto);
            var veiculo = new Veiculo { Nome = "Civic", Marca = "Honda", Ano = 2022 };
            veiculoServico.Incluir(veiculo);

            // Act
            veiculoServico.Apagar(veiculo);

            // Assert
            Assert.AreEqual(0, contexto.Veiculos.Count());
        }

        [TestMethod]
        public void Deve_Buscar_Veiculo_Por_Id()
        {
            // Arrange
            var contexto = CriarContextoDeTeste();
            var veiculoServico = new VeiculoServico(contexto);
            var veiculo = new Veiculo { Nome = "Civic", Marca = "Honda", Ano = 2022 };
            veiculoServico.Incluir(veiculo);

            // Act
            var veiculoEncontrado = veiculoServico.BuscaPorId(veiculo.Id);

            // Assert
            Assert.IsNotNull(veiculoEncontrado);
            Assert.AreEqual("Civic", veiculoEncontrado.Nome);
        }

        [TestMethod]
        public void Deve_Listar_Todos_Os_Veiculos()
        {
            // Arrange
            var contexto = CriarContextoDeTeste();
            var veiculoServico = new VeiculoServico(contexto);
            veiculoServico.Incluir(new Veiculo { Nome = "Civic", Marca = "Honda", Ano = 2022 });
            veiculoServico.Incluir(new Veiculo { Nome = "Corolla", Marca = "Toyota", Ano = 2021 });

            // Act
            var veiculos = veiculoServico.Todos();

            // Assert
            Assert.AreEqual(2, veiculos.Count);
        }
    }
}
