using EstudoModal.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstudoModal.ViewComponet
{
    [ViewComponent(Name = "AtualizarUsuario")]
    public class EditarUsuarioModalViewComponent : ViewComponent
    {
        private readonly EstudoModalContext _context;

        public EditarUsuarioModalViewComponent(EstudoModalContext context)
        {
            _context = context;
        }

        public async Task<IViewComponentResult> InvokeAsync(Guid id)
        {
            var usuario = await _context.Usuario.FindAsync(id);
            return View(usuario);
        }
    }
}
