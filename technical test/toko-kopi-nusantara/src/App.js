import React from 'react';
import './App.css';

function App() {
  return (
    <div class="container">
        <header>
            <h1>Selamat datang di Toko Kopi Nusantara</h1>
            <p>
                Toko Kopi Nusantara adalah UMKM yang menyediakan kopi berkualitas tinggi dari berbagai daerah di Indonesia.
            </p>
        </header>

        <section class="section about">
            <h2>Tentang Kami</h2>
            <p>
                Kami berkomitmen menghadirkan cita rasa terbaik kopi lokal dari berbagai penjuru Indonesia. Dengan mendukung para petani melalui pembelian langsung, kami memastikan setiap cangkir kopi tidak hanya berkualitas tetapi juga memberikan dampak positif bagi komunitas lokal.
            </p>
        </section>

        <section class="section">
            <h2>Produk Kami</h2>
            <div class="products">
                <div class="product">
                    <img src="image\acehgayo.jpg" alt="Kopi Aceh Gayo"/>
                    <h3>Kopi Aceh Gayo - Robusta</h3>
                </div>
                <div class="product">
                    <img src="image\robusta.jpg" alt="Kopi Toraja"/>
                    <h3>Kopi Toraja - Arabica</h3>
                </div>
                <div class="product">
                    <img src="image\bali.jpg" alt="Kopi Bali"/>
                    <h3>Kopi Bali - Single Origin</h3>
                </div>
            </div>
        </section>

        <section class="section contact">
            <h2>Hubungi Kami</h2>
            <p>Untuk pemesanan atau pertanyaan lebih lanjut, silakan hubungi kami melalui:</p>
            <ul>
                <li>Email: <a href="mailto:toko@kopinusantara.com">toko@kopinusantara.com</a></li>
                <li>Telepon: <a href="tel:+62211234567">(021) 123-4567</a></li>
            </ul>
        </section>

        <footer>
            <p>&copy; 2025 Toko Kopi Nusantara. Semua hak dilindungi.</p>
        </footer>
    </div>
  );
}

export default App;
