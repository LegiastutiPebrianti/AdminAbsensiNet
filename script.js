// Fungsi untuk mengganti halaman
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }
  
  // Menyimpan data saat registrasi
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
  
    if (password === confirmPassword) {
      const newUser = { username, email, password };
      localStorage.setItem('user', JSON.stringify(newUser)); // Menyimpan pengguna ke localStorage
      alert('Akun berhasil dibuat. Silakan login.');
      showPage('login');
    } else {
      alert('Password tidak cocok!');
    }
  });
  
  // Login
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      localStorage.setItem('loggedUser', JSON.stringify({ username: username }));
      window.location.href = 'dashboard.html'; // Redirect ke halaman dashboard
    } else {
      alert('Username atau password salah.');
    }
  });
  