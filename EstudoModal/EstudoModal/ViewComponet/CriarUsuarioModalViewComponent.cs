using EstudoModal.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstudoModal.ViewComponet
{
    [ViewComponent(Name = "CreateUsuario")]
    public class CriarUsuarioModalViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var usuario = new Usuario();
            return View(usuario);
        }
    }
}
