//AgendaContext.cs dentro da pasta moduloapi/Context
using Microsoft.EntityFrameworkCore;
using moduloapi.Entities;

namespace moduloapi.Context
{
    public class AgendaContext : DbContext
    {
        public AgendaContext(DbContextOptions<AgendaContext> options) : base(options)
        {
        }

        //Definindo a entidade Contato para o Entity Framework criar a tabela
        public DbSet<Contato> Contatos { get; set; }
    }
}
