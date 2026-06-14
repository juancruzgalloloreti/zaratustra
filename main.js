/* ─── BARRA DE PROGRESO ─── */
const prog = document.getElementById('prog');
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  prog.style.width = pct + '%';
}, { passive: true });

/* ─── ANIMACIÓN Y ESTILO DEL NAV ─── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─── REVEAL ON SCROLL INTERSECTION OBSERVER ─── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.1 });
document.querySelectorAll('.rv').forEach(el => obs.observe(el));

/* Animación del Hero al cargar */
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#hero .rv').forEach((el, i) => {
    setTimeout(() => el.classList.add('on'), 150 + i * 150);
  });
});

/* ─── CITAS DESPLEGABLES (CONTROL DE ALTURA SUAVE) ─── */
function abrirCita(btn) {
  const item = btn.closest('.cita-item');
  const abierto = item.classList.toggle('open');
  btn.textContent = abierto ? 'Cerrar ↑' : 'Abrir →';
}

/* ─── MENÚ MÓVIL ─── */
const mobMenu = document.getElementById('mobMenu');
function abrirMenu() {
  mobMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function cerrarMenu() {
  mobMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── NAVEGACIÓN ACTIVA BASADA EN EL SCROLL ─── */
const secciones = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.25, rootMargin: "-20% 0px -60% 0px" });

secciones.forEach(s => navObserver.observe(s));
