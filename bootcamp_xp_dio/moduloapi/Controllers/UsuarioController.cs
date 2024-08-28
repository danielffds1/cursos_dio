//UsuarioController.cs dentro do projeto moduloapi/Controllers
using System;
using Microsoft.AspNetCore.Mvc;

namespace moduloapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {  
        [HttpGet("OberDataHoraAtual")]
        public IActionResult ObterDataHora()
        {
            var obj = new
            {
                Data = DateTime.Now.ToLongDateString(),
                Hora = DateTime.Now.ToLongTimeString()
            };

            return Ok(obj);
        }

        [HttpGet("Apresentar/{nome}")]
        public IActionResult Apresentar(string nome)
        {
            var mensagem = $"Olá, {nome}! Seja bem-vindo ao sistema!";

            return Ok(new {mensagem});
        }
    }
}
