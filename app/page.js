const stats = [
  { value: '01', label: 'Program Studi Unggulan', sub: 'Bisnis Digital' },
  { value: '2026', label: 'PMB Tahun Akademik', sub: 'Siap menerima calon mahasiswa baru' },
  { value: '100%', label: 'Fokus Pembelajaran', sub: 'Digital, bisnis, karakter, dan praktik' },
];

const programs = [
  {
    tag: 'Program Unggulan',
    title: 'Bisnis Digital',
    desc: 'Program studi yang menyiapkan mahasiswa memahami pemasaran digital, manajemen bisnis, teknologi, konten kreatif, dan kewirausahaan modern.',
    points: ['Digital marketing', 'Entrepreneurship', 'Project based learning'],
  },
  {
    tag: 'Kelas Praktis',
    title: 'Keterampilan Digital',
    desc: 'Mahasiswa diarahkan mengenal tools digital yang relevan untuk dunia kerja, UMKM, dan pengembangan bisnis berbasis teknologi.',
    points: ['Desain konten', 'Data bisnis', 'Branding digital'],
  },
  {
    tag: 'Karakter',
    title: 'Nilai Islami',
    desc: 'Lingkungan belajar dibangun dengan adab, tanggung jawab, kedisiplinan, dan orientasi kebermanfaatan untuk masyarakat.',
    points: ['Adab', 'Integritas', 'Kolaborasi'],
  },
];

const advantages = [
  ['Kampus Berbasis Nilai', 'Pembelajaran diarahkan bukan hanya cakap digital, tetapi juga berkarakter, beradab, dan bermanfaat.'],
  ['Kurikulum Relevan', 'Materi disusun mengikuti kebutuhan dunia bisnis digital, pemasaran, teknologi, dan kewirausahaan.'],
  ['Belajar Praktik', 'Mahasiswa tidak hanya belajar teori, tetapi juga membuat proyek nyata yang bisa menjadi portofolio.'],
  ['Lingkungan Positif', 'Suasana kampus yang mendukung pembinaan karakter, kedisiplinan, dan budaya belajar.'],
  ['Akses Konsultasi PMB', 'Calon mahasiswa dapat berkonsultasi langsung melalui WhatsApp sebelum mendaftar.'],
  ['Desain Modern', 'Website demo ini disiapkan untuk membangun kesan kampus yang aktif, profesional, dan siap berkembang.'],
];

const testimonials = [
  {
    name: 'Calon Mahasiswa',
    role: 'Peminat Bisnis Digital',
    quote:
      'Saya tertarik karena ATB menggabungkan pembelajaran bisnis, teknologi, dan nilai Islami. Cocok untuk generasi muda yang ingin siap kerja dan siap berkarya.',
  },
  {
    name: 'Orang Tua Santri',
    role: 'Wali Mahasiswa',
    quote:
      'Kami berharap anak-anak tidak hanya kuliah, tetapi juga mendapatkan lingkungan yang baik, terarah, dan mendukung masa depan.',
  },
  {
    name: 'Tim PMB ATB',
    role: 'Akademi Teknologi dan Bisnis Baiturrahman',
    quote:
      'Kami membuka ruang konsultasi bagi calon mahasiswa yang ingin mengenal program studi, biaya, fasilitas, dan alur pendaftaran.',
  },
];

const gallery = ['Kegiatan Kampus', 'Pembelajaran Digital', 'Seminar Bisnis', 'Pendampingan PMB'];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#beranda" aria-label="Beranda ATB">
          <span className="logoMark">ATB</span>
          <span>
            <strong>Akademi</strong>
            <small>Teknologi & Bisnis Baiturrahman</small>
          </span>
        </a>
        <nav>
          <a href="#program">Program</a>
          <a href="#keunggulan">Keunggulan</a>
          <a href="#pmb">PMB</a>
          <a href="#kontak">Kontak</a>
        </nav>
        <a className="navCta" href="https://wa.me/6282324444139" target="_blank">
          Konsultasi
        </a>
      </header>

      <section id="beranda" className="hero section">
        <div className="heroText">
          <span className="eyebrow">PMB Akademi Teknologi dan Bisnis Baiturrahman</span>
          <h1>Kampus Bisnis Digital Berbasis Nilai Islami</h1>
          <p>
            ATB hadir untuk menyiapkan generasi muda yang siap menghadapi dunia digital,
            memiliki kemampuan bisnis, serta tetap kokoh dengan akhlak dan nilai-nilai Islami.
          </p>
          <div className="heroActions">
            <a className="btn primary" href="#pmb">Daftar PMB</a>
            <a className="btn ghost" href="#program">Lihat Program</a>
          </div>
          <div className="trustBar" aria-label="Kepercayaan kampus">
            <span>Terarah</span>
            <span>Modern</span>
            <span>Berbasis Karakter</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="Ilustrasi kampus ATB">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="campusCard mainCard">
            <div className="miniLogo">ATB</div>
            <h2>Bisnis Digital</h2>
            <p>Belajar bisnis, teknologi, branding, dan pemasaran digital secara praktis.</p>
            <div className="progress">
              <span style={{ width: '82%' }} />
            </div>
            <small>Persiapan PMB 2026/2027</small>
          </div>
          <div className="floatingCard rating">
            <strong>4.9</strong>
            <span>Kesan profesional</span>
          </div>
          <div className="floatingCard badge">
            <strong>PMB</strong>
            <span>Konsultasi via WhatsApp</span>
          </div>
        </div>
      </section>

      <section className="statsWrap">
        {stats.map((item) => (
          <article className="statCard" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <small>{item.sub}</small>
          </article>
        ))}
      </section>

      <section id="program" className="section">
        <div className="sectionHead">
          <span className="eyebrow">Program Kampus</span>
          <h2>Pilihan belajar yang disusun untuk masa depan digital</h2>
          <p>
            Struktur ini dibuat seperti landing page profesional: ringkas, jelas, dan langsung
            membantu pengunjung memahami keunggulan kampus.
          </p>
        </div>
        <div className="programGrid">
          {programs.map((program) => (
            <article className="programCard" key={program.title}>
              <span className="chip">{program.tag}</span>
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
              <ul>
                {program.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href="#pmb">Lihat detail</a>
            </article>
          ))}
        </div>
      </section>

      <section id="keunggulan" className="section splitSection">
        <div>
          <span className="eyebrow">Mengapa Memilih ATB?</span>
          <h2>Desain pendidikan yang relevan, praktis, dan bernilai</h2>
          <p>
            Bagian ini menonjolkan alasan kenapa calon mahasiswa perlu memilih ATB. Cocok
            untuk meningkatkan kepercayaan dan mendorong pendaftaran.
          </p>
          <a className="btn primary" href="#pmb">Konsultasi Sekarang</a>
        </div>
        <div className="advantageGrid">
          {advantages.map(([title, desc]) => (
            <article className="advantageCard" key={title}>
              <span>✓</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section highlight">
        <div>
          <span className="eyebrow light">Suasana Kampus</span>
          <h2>Bangun citra kampus yang aktif dan dekat dengan generasi muda</h2>
          <p>
            Gunakan area ini untuk menampilkan foto kegiatan nyata: pembelajaran, seminar,
            praktik digital, kegiatan mahasiswa, dan suasana kampus.
          </p>
        </div>
        <div className="galleryGrid">
          {gallery.map((item, index) => (
            <div className={`galleryItem item${index + 1}`} key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span className="eyebrow">Testimoni</span>
          <h2>Cerita mereka, inspirasi untuk calon mahasiswa</h2>
          <p>
            Untuk demo, bagian ini masih berupa contoh. Nanti bisa diganti dengan testimoni
            alumni, mahasiswa, wali mahasiswa, atau mitra kampus.
          </p>
        </div>
        <div className="testimonialGrid">
          {testimonials.map((item) => (
            <article className="testimonialCard" key={item.name}>
              <p>“{item.quote}”</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pmb" className="section formSection">
        <div className="formCopy">
          <span className="eyebrow">Konsultasi PMB</span>
          <h2>Ingin tahu biaya, alur pendaftaran, dan program studi?</h2>
          <p>
            Isi data singkat, lalu arahkan calon mahasiswa untuk menghubungi admin PMB via WhatsApp.
            Untuk versi demo ini, tombol akan membuka WhatsApp.
          </p>
          <div className="contactMini">
            <span>📍 Garut RT.04, Dawung, Sambirejo, Sragen</span>
            <span>🌐 www.baiturrahman.ac.id</span>
            <span>📞 0823 2444 4139</span>
          </div>
        </div>
        <form className="leadForm">
          <label>
            Nama Lengkap
            <input placeholder="Masukkan nama lengkap" />
          </label>
          <label>
            Program yang diminati
            <select defaultValue="">
              <option value="" disabled>Pilih program</option>
              <option>Bisnis Digital</option>
              <option>Konsultasi PMB</option>
            </select>
          </label>
          <label>
            Nomor WhatsApp
            <input placeholder="08xxxxxxxxxx" />
          </label>
          <a className="btn primary full" href="https://wa.me/6282324444139?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20PMB%20ATB." target="_blank">
            Konsultasi via WhatsApp
          </a>
        </form>
      </section>

      <footer id="kontak" className="footer">
        <div>
          <strong>Akademi Teknologi & Bisnis Baiturrahman</strong>
          <p>Kampus digital, bisnis, dan karakter Islami.</p>
        </div>
        <div>
          <span>Garut RT.04, Dawung, Sambirejo, Sragen</span>
          <span>www.baiturrahman.ac.id</span>
          <span>0823 2444 4139</span>
        </div>
      </footer>

      <a className="whatsappFloat" href="https://wa.me/6282324444139" target="_blank" aria-label="Chat WhatsApp">
        WA
      </a>
    </main>
  );
}
