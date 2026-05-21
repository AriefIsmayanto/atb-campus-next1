const programs = [
  {
    title: 'Bisnis Digital',
    label: 'Program Unggulan',
    image: '/program-bisnis.svg',
    icon: '🛒',
    desc: 'Pelajari strategi bisnis modern, pemasaran digital, branding, dan manajemen usaha berbasis teknologi.',
  },
  {
    title: 'Keterampilan Digital',
    label: 'Kelas Praktis',
    image: '/program-digital.svg',
    icon: '</>',
    desc: 'Kuasai keterampilan digital seperti pengelolaan web, data bisnis, desain konten, dan teknologi terkini.',
  },
  {
    title: 'Nilai Islami & Karakter',
    label: 'Pembinaan',
    image: '/program-karakter.svg',
    icon: '☪',
    desc: 'Pembinaan karakter islami, akhlak mulia, kedisiplinan, dan kepemimpinan untuk masa depan.',
  },
];

const features = [
  ['Pembelajaran Praktis', 'Metode belajar berbasis praktik, proyek nyata, dan portofolio yang relevan dengan kebutuhan industri.', '🎯'],
  ['Kurikulum Relevan', 'Kurikulum disusun untuk menjawab kebutuhan bisnis digital, teknologi, komunikasi, dan kewirausahaan.', '📈'],
  ['Pembinaan Karakter', 'Integrasi nilai-nilai Islam dalam adab, kedisiplinan, tanggung jawab, dan kehidupan kampus.', '🕌'],
  ['Konsultasi PMB', 'Tim PMB siap membantu informasi program, biaya, beasiswa, dan alur pendaftaran secara ramah.', '💬'],
  ['Kolaborasi & Kemitraan', 'Mendorong kerja sama dengan komunitas, lembaga, UMKM, dan dunia profesional.', '🤝'],
  ['Lingkungan Positif', 'Suasana kampus yang nyaman, islami, dan mendukung pengembangan diri mahasiswa.', '🌿'],
];

const testimonials = [
  {
    label: 'Calon Mahasiswa',
    name: 'Aisyah N.',
    role: 'Calon Mahasiswa 2026',
    quote:
      'Saya memilih ATB karena programnya kekinian, dosen-dosennya inspiratif, dan lingkungan kampusnya sangat mendukung.',
  },
  {
    label: 'Wali Mahasiswa',
    name: 'Bapak Arifin',
    role: 'Wali Mahasiswa',
    quote:
      'Kami percaya ATB mampu membekali anak kami dengan ilmu, keterampilan, dan akhlak yang baik untuk masa depannya.',
  },
  {
    label: 'Tim PMB',
    name: 'Tim PMB ATB',
    role: 'Layanan Informasi',
    quote:
      'Kami siap memberikan informasi terbaik dan membantu setiap calon mahasiswa bergabung bersama keluarga besar ATB.',
  },
];

const quickLinks = [
  ['Tentang ATB', '🏛️'],
  ['Program Studi', '🎓'],
  ['Fasilitas', '🏫'],
  ['Beasiswa', '🏅'],
  ['PMB 2026', '📝'],
  ['Berita', '📰'],
  ['Galeri', '🖼️'],
  ['Kontak', '☎️'],
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#beranda">
          <img src="/logo-atb.jpg" alt="Logo ATB" />
          <div>
            <strong>ATB</strong>
            <span>Akademi Teknologi<br />dan Bisnis Baiturrahman</span>
          </div>
        </a>

        <nav className="desktopNav">
          <a href="#beranda" className="active">Beranda</a>
          <a href="#program">Program</a>
          <a href="#keunggulan">Keunggulan</a>
          <a href="#testimoni">Testimoni</a>
          <a href="#pmb">PMB</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <div className="navActions">
          <a className="btn outline small" href="https://wa.me/6282324444139" target="_blank">Konsultasi</a>
          <a className="btn gold small" href="#pmb">Daftar PMB</a>
        </div>
      </header>

      <section id="beranda" className="hero">
        <div className="heroCopy">
          <span className="kicker">PMB Akademi Teknologi dan Bisnis Baiturrahman</span>
          <h1>Kampus Digital Berbasis Nilai Islami</h1>
          <div className="goldLine" />
          <p>
            Mempersiapkan generasi masa depan yang unggul di bidang teknologi dan bisnis
            dengan berlandaskan nilai-nilai Islam.
          </p>

          <div className="heroButtons">
            <a className="btn teal" href="#program">Jelajahi Program <span>→</span></a>
            <a className="btn gold" href="#pmb">Daftar PMB 2026/2027 <span>→</span></a>
          </div>

          <div className="trustBadges">
            <span>🏅<b>Terakreditasi</b><small>Baik Sekali</small></span>
            <span>👨‍🏫<b>Dosen</b><small>Berpengalaman</small></span>
            <span>🎓<b>Lulusan Siap</b><small>Bersaing</small></span>
          </div>
        </div>

        <div className="heroMedia">
          <div className="heroBlob"></div>
          <img className="campusImage" src="/hero-campus.svg" alt="Ilustrasi kampus ATB" />
          <div className="floatBadge badgeRating">⭐ <b>4.8/5</b><small>Kepuasan Mahasiswa</small></div>
          <div className="floatBadge badgePmb">👥 <b>PMB 2026/2027</b><small>Telah Dibuka!</small></div>
          <div className="floatBadge badgeCareer">🎓 <b>Siap Karier & Wirausaha</b><small>Berbasis Teknologi & Nilai Islami</small></div>
        </div>
      </section>

      <section className="stats">
        <article>
          <span className="statIcon">🎓</span>
          <div>
            <strong>8+</strong>
            <b>Program Unggulan</b>
            <small>Fokus pada teknologi, bisnis, dan karakter islami</small>
          </div>
        </article>
        <article>
          <span className="statIcon goldCircle">👥</span>
          <div>
            <strong>PMB 2026/2027</strong>
            <b>Penerimaan Mahasiswa Baru</b>
            <small>Ayo bergabung bersama calon mahasiswa lainnya</small>
          </div>
        </article>
        <article>
          <span className="statIcon">📖</span>
          <div>
            <strong>Praktis & Relevan</strong>
            <b>Fokus Pembelajaran</b>
            <small>Kurikulum terkini, praktik nyata, siap kerja & wirausaha</small>
          </div>
        </article>
      </section>

      <section className="quickLinks">
        {quickLinks.map(([label, icon]) => (
          <a href={label === 'Kontak' ? '#kontak' : '#program'} key={label}>
            <span>{icon}</span>
            <b>{label}</b>
          </a>
        ))}
      </section>

      <section id="program" className="section">
        <div className="sectionTitle">
          <h2>Program Unggulan ATB</h2>
          <div className="goldLine center" />
        </div>

        <div className="programGrid">
          {programs.map((item) => (
            <article className="programCard" key={item.title}>
              <div className="programImage">
                <img src={item.image} alt={item.title} />
                <span>{item.icon}</span>
              </div>
              <div className="programBody">
                <small>{item.label}</small>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#pmb">Selengkapnya →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="keunggulan" className="section compact">
        <div className="sectionTitle">
          <h2>Keunggulan ATB</h2>
          <div className="goldLine center" />
        </div>

        <div className="featureGrid">
          {features.map(([title, desc, icon]) => (
            <article className="featureCard" key={title}>
              <span>{icon}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="testimoni" className="section compact">
        <div className="sectionTitle">
          <h2>Testimoni</h2>
          <div className="goldLine center" />
        </div>

        <div className="testimonialWrap">
          <button aria-label="Sebelumnya">‹</button>
          <div className="testimonialGrid">
            {testimonials.map((item, index) => (
              <article className="testimonialCard" key={item.name}>
                <span className="quote">“</span>
                <small>{item.label}</small>
                <p>{item.quote}</p>
                <div className="person">
                  <span>{index + 1}</span>
                  <div>
                    <b>{item.name}</b>
                    <small>{item.role}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button aria-label="Berikutnya">›</button>
        </div>
        <div className="dots"><span></span><span></span><span></span></div>
      </section>

      <section id="kontak" className="location">
        <div className="locationInfo">
          <h2>Kampus ATB</h2>
          <p>📍 Garut RT.04, Dawung, Sambirejo, Sragen</p>
          <p>🌐 www.baiturrahman.ac.id</p>
          <p>☎️ 0823 2444 4139</p>
          <a className="mapButton" href="https://maps.google.com" target="_blank">Lihat di Google Maps 📍</a>
        </div>
        <img src="/campus-location.svg" alt="Ilustrasi lokasi kampus ATB" />
      </section>

      <section id="pmb" className="consult">
        <div className="consultCopy">
          <span>Konsultasi & Info PMB</span>
          <h2>Tanya Apapun, Kami Siap Membantu!</h2>
          <p>Tim kami siap membantu memberikan informasi seputar program, biaya, beasiswa, dan pendaftaran.</p>
          <a className="btn whatsapp" href="https://wa.me/6282324444139?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20PMB%20ATB." target="_blank">Chat via WhatsApp →</a>
        </div>

        <form className="leadForm">
          <label>Nama Lengkap<input placeholder="Masukkan nama lengkap Anda" /></label>
          <label>No. WhatsApp<input placeholder="Contoh: 0812 3456 7890" /></label>
          <label>Email<input placeholder="Masukkan email Anda" /></label>
          <label>Program yang Diminati
            <select defaultValue="">
              <option value="" disabled>Pilih program</option>
              <option>Bisnis Digital</option>
              <option>Konsultasi PMB</option>
            </select>
          </label>
          <label className="wide">Pesan<textarea placeholder="Tulis pertanyaan atau informasi yang ingin Anda ketahui..." /></label>
          <a className="submitButton wide" href="https://wa.me/6282324444139?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20PMB%20ATB." target="_blank">Kirim Pesan ✈</a>
        </form>
      </section>

      <footer className="footer">
        <div className="footerBrand">
          <img src="/logo-atb.jpg" alt="Logo ATB" />
          <div>
            <strong>ATB</strong>
            <p>Kampus digital berbasis nilai islami yang mempersiapkan generasi unggul di bidang teknologi dan bisnis.</p>
          </div>
        </div>

        <div className="footerCols">
          <div>
            <b>Tautan Cepat</b>
            <a href="#beranda">Beranda</a>
            <a href="#program">Program</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#pmb">PMB 2026</a>
          </div>
          <div>
            <b>Program</b>
            <a href="#program">Bisnis Digital</a>
            <a href="#program">Keterampilan Digital</a>
            <a href="#program">Nilai Islami & Karakter</a>
          </div>
          <div>
            <b>Hubungi Kami</b>
            <span>Garut RT.04, Dawung, Sambirejo, Sragen</span>
            <span>0823 2444 4139</span>
            <span>www.baiturrahman.ac.id</span>
          </div>
        </div>

        <p className="copyright">© 2025 Akademi Teknologi dan Bisnis Baiturrahman (ATB). All rights reserved.</p>
      </footer>

      <a className="floatingWhatsapp" href="https://wa.me/6282324444139" target="_blank" aria-label="WhatsApp">WA</a>
    </main>
  );
}
