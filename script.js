// ── SCROLL FADE-UP ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── PROFILE PHOTO UPLOAD ──
const photoInput = document.getElementById('photoInput');
const profileImg = document.getElementById('profileImg');
const photoPlaceholder = document.getElementById('photoPlaceholder');

photoInput.addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    profileImg.src = e.target.result;
    profileImg.style.display = 'block';
    photoPlaceholder.style.display = 'none';
  };
  reader.readAsDataURL(file);
});

// ── CONTACT FORM ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  btn.style.background = '#34d399';
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}
