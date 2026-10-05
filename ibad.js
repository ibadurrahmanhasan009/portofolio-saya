
        // Highlight Active Navigation on Scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.dock-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if(pageYOffset >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });

        // Handle Form Submit (Simulasi)
        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Mengirim...";
            btn.style.opacity = "0.7";
            
            setTimeout(() => {
                alert("Terima kasih! Pesan Anda telah terkirim.");
                e.target.reset();
                btn.innerText = originalText;
                btn.style.opacity = "1";
            }, 1500);
        }

        // Logika Filter Proyek Interaktif
document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Hapus class active dari tombol lama, pindah ke tombol baru
            document.querySelector(".filter-btn.active").classList.remove("active");
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || filterValue === cardCategory) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });
});

// Fungsi Geser Slide
function moveSlide(trackId, direction) {
  const track = document.getElementById(trackId);
  const scrollAmount = 260; // Jarak geser per klik
  track.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Buka Modal Detail Prestasi
function openPrestasiDetail(title, subtitle, description) {
  document.getElementById('modalPrestasiTitle').innerText = title;
  document.getElementById('modalPrestasiSub').innerText = subtitle;
  document.getElementById('modalPrestasiDesc').innerText = description;
  
  const modal = document.getElementById('prestasiModal');
  modal.style.display = 'flex';
}

// Buka Modal Foto Sertifikat Full
function openImageModal(imgSrc, caption) {
  document.getElementById('modalImgFull').src = imgSrc;
  document.getElementById('modalImgCaption').innerText = caption;
  
  const modal = document.getElementById('imageModal');
  modal.style.display = 'flex';
}

// Tutup Modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Tutup Modal jika area luar kotak diklik
function closeModalOnOuterClick(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}