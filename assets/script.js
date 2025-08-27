document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  // Fungsi scroll untuk toggle kelas 'show' berdasarkan posisi scroll
  function showSectionOnScroll() {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if(sectionTop < triggerBottom) {
        section.classList.add('show');
      } else {
        section.classList.remove('show');
      }
    });
  }

  // Fungsi untuk klik menu tampilkan 1 section dan sembunyikan sisanya
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('data-target');

      sections.forEach(section => {
        // sembunyikan semua section selain target
        if(section.id === targetId) {
          section.style.display = 'block';
          section.classList.add('show'); // pastikan class show ditambahkan
        } else {
          section.style.display = 'none';
          section.classList.remove('show');
        }
      });
    });
  });

  window.addEventListener('scroll', showSectionOnScroll);

  // Panggil fungsi scroll sekalian agar section awal bisa ada efek show
  showSectionOnScroll();
});
