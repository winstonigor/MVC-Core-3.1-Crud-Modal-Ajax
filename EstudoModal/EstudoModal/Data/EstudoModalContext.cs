using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EstudoModal.Models;

namespace EstudoModal.Data
{
    public class EstudoModalContext : DbContext
    {
        public EstudoModalContext (DbContextOptions<EstudoModalContext> options)
            : base(options)
        {
        }

        public DbSet<EstudoModal.Models.Usuario> Usuario { get; set; }
    }
}
