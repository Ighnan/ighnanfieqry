document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  // Fungsi scroll untuk toggle kelas 'show' berdasarkan posisi scroll,
  // hanya berlaku pada section yang sedang tampil
  function showSectionOnScroll() {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
      if (section.style.display !== 'none') {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add('show');
        } else {
          section.classList.remove('show');
        }
      }
    });
  }

  // Fungsi untuk klik menu: menampilkan section target saja
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('data-target');

      sections.forEach(section => {
        if (section.id === targetId) {
          section.style.display = 'block';
          section.classList.add('show');
        } else {
          section.style.display = 'none';
          section.classList.remove('show');
        }
      });
    });
  });

  window.addEventListener('scroll', showSectionOnScroll);

  // Inisialisasi efek scroll reveal untuk section awal (tentang saya)
  showSectionOnScroll();
});
