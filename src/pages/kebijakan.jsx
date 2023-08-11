import React, { useState } from "react";
import "../assets/styles/kebijakan.css";
import Footer from "../components/Footer/Footer";
import ApakahMembantu from "../components/ApakahMembantu/ApakahMembantu";

const Accordion = ({
  title,
  children,
  accordionKey,
  activeAccordionKey,
  setActiveAccordionKey,
}) => {
  const isExpanded = accordionKey === activeAccordionKey;

  const toggleAccordion = () => {
    setActiveAccordionKey(isExpanded ? null : accordionKey);
  };

  return (
    <div className={`accordion ${isExpanded ? "expanded" : ""}`}>
      <button className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
        <span className={`accordion-icon ${isExpanded ? "expanded" : ""}`}>
          &#9662;
        </span>
      </button>
      {isExpanded && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const Kebijakan = () => {
  const [activeAccordionKey, setActiveAccordionKey] = useState(null);

  return (
    <div className="kebijakan">
      <div className="isi-pertama-kebijakan">
        <h1>Kebijakan Privasi Bukos</h1>

        <p>
          Halo, terima kasih telah mengunjungi situs web (website) BuKos.com
          atau aplikasi BuKos (selanjutnya disebut “platform”).
        </p>
        <p>
          Platform ini dimiliki dan dioperasikan oleh BuKos dan afiliasinya
          (selanjutnya disebut, “Kami”). Kami sangat menghormati privasi atas
          Informasi Pribadi pendatang, pengguna, ataupun pengguna terdaftar
          (selanjutnya disebut “Anda”) dan ingin melindungi Informasi Pribadi
          tersebut sesuai dengan Kebijakan Privasi (selanjutnya disebut
          “Kebijakan”) ini.
        </p>
        <p>
          Kebijakan ini berlaku pada setiap platform yang dioperasikan oleh
          Kami. Kebijakan ini menjelaskan bagaimana Kami mengumpulkan,
          menyimpan, menjaga, menggunakan dan (pada kondisi tertentu)
          mengungkapkan informasi pribadi yang teridentifikasi yang Anda berikan
          selama menggunakan platform Kami (selanjutnya disebut “Informasi
          Pribadi”) serta menjelaskan bagaimana langkah yang telah Kami ambil
          untuk mengamankan Informasi Pribadi Anda. Dengan mengunjungi,
          menggunakan dan/atau mendaftarkan diri Anda pada platform Kami, maka
          Anda dianggap telah membaca, mengerti, memahami dan menyetujui seluruh
          isi yang tertuang dalam kebijakan ini. Apabila Anda tidak setuju
          dengan sebagian atau seluruh isi Kebijakan ini, Anda dapat
          meninggalkan platform yang Kami kelola.
        </p>
      </div>

      <div className="accordion-kebijakan">
        <Accordion
          title="1. Informasi pribadi"
          accordionKey={1}
          activeAccordionKey={activeAccordionKey}
          setActiveAccordionKey={setActiveAccordionKey}
        >
          <p>
            Informasi Pribadi adalah setiap informasi atau keterangan tentang
            individu yang benar dan nyata yang melekat dan dapat diidentifikasi
            secara wajar dari informasi atau keterangan tersebut baik langsung
            maupun tidak langsung, pada masing-masing individu. Informasi
            Pribadi yang Kami kumpulkan diantaranya adalah:
          </p>
          <p>
            a. Username / nama pengguna, termasuk nama asli dari Anda sesuai
            dengan tanda pengenal, b. Alamat email, c. Nomor telepon, d. Alamat
            tempat tinggal, e. Nomor identitas diri Anda, f. Nomor rekening bank
            Anda, g. Identifikasi pengguna BuKos termasuk kredensial log in,
            h. Data transaksi, termasuk semua detail pembayaran, reservasi, dan
            detail booking yang dilakukan melalui platform ini, i. Riwayat
            pemesanan, termasuk semua informasi booking di platform ini, j.
            Komentar atau umpan balik yang Anda berikan pada konten platform
            ini.
          </p>
          <p>
            Selain itu kami juga dapat mengumpulkan informasi non-pribadi yang
            dapat digunakan untuk mengidentifikasi Anda termasuk diantaranya
            adalah alamat protokol internet (internet protocol/IP) Anda, data
            lokasi geografis, jenis sistem pengoperasian, kebangsaan, preferensi
            pencarian Anda, dan data-data umum lainnya yang ada pada Internet.
          </p>
        </Accordion>

        <Accordion
          title="2. Informasi pribadi yang kami kumpulkan"
          accordionKey={2}
          activeAccordionKey={activeAccordionKey}
          setActiveAccordionKey={setActiveAccordionKey}
        >
          <p>Kami mengumpulkan Informasi Pribadi Anda dengan cara:</p>
          <p>
            a. Anda berikan kepada Kami secara langsung saat menggunakan
            platform yang Kami kelola. b. Saat Anda berinteraksi dengan Platform
            kami, kami dapat mengumpulkan Data Teknis Anda secara otomatis. Kami
            dapat mengumpulkan data pribadi tersebut dengan menggunakan cookie
            Platform. c. Pihak ketiga atau sumber yang tersedia untuk umum. Kami
            dapat menerima Data Pribadi Anda dari pihak ketiga yang berlokasi di
            berbagai negara. Ini termasuk:
          </p>
          <p>
            i. Data Teknis dari penyedia analitik (seperti Google), jaringan
            periklanan dan platform media sosial (seperti Instagram, Twitter,
            Facebook, dll); dan ii. Kontak dan Data Transaksi dari penyedia
            layanan teknis, pembayaran dan pengiriman.
          </p>
          <p>
            Kami akan menggunakan Informasi Pribadi Anda yang kami kumpulkan
            melalui platform untuk tujuan-tujuan sebagai berikut:
          </p>
          <p>
            a. Melakukan pendaftaran, mengelola, mengurus penggunaan dan/atau
            akses pada platform Kami, b. Mengelola, mengoperasikan, mengurus dan
            memberikan kepada Anda penawaran ataupun layanan yang ada pada
            platform Kami, c. Meneruskan pembayaran dan/atau pemesanan kepada
            Mitra kami untuk melaksanakan layanan yang terdapat pada platform
            kami d. Menghubungi Anda sehubungan dengan hal yang berkaitan dengan
            penggunaan dan akses terkait promosi maupun layanan platform Kami,
            serta memberikan konfirmasi atas pertanyaan maupun permintaan yang
            Anda ajukan kepada Kami (dan sebaliknya), e. Melakukan penyesuaian
            fitur atau pengalaman Anda saat menggunakan platform, f.
            Mempublikasikan ulasan, komentar maupun rating yang Anda berikan
            melalui platform dalam bentuk apapun termasuk digital dan cetak
            untuk dapat diakses oleh publik, g. Melakukan pengukuran dan
            meningkatkan pengalaman Anda saat menggunakan platform, h.
            Melaksanakan dan mengaplikasikan S&K maupun penyelesaian sengketa,
            pemecahan masalah, aduan, atau mengumpulkan pembayaran, dan/atau i.
            Tujuan-tujuan lain yang akan Kami beritahukan kepada Anda pada saat
            dilakukannya pengumpulan dan/atau penggunaan Informasi Pribadi.
          </p>
          <p>
            Selain untuk tujuan sebagaimana tersebut di atas, Kami juga dapat
            menggunakan Informasi Pribadi maupun informasi non-pribadi Anda
            untuk tujuan termasuk namun tidak terbatas pada pemasaran atas
            produk baru, penawaran khusus, newsletter, survei maupun informasi
            lain yang Kami kirimkan melalui media apapun dan dalam bentuk apapun
            (seperti: poster, infografis, teks) dan Kami tawarkan kepada Anda.
            sehubungan dengan hal ini Anda senantiasa dapat memilih untuk
            keluar, berhenti berlangganan atau menggunakan dari setiap pemasaran
            yang Kami kirimkan kepada Anda kapanpun dengan mengikuti setiap
            panduan maupun instruksi pemberhentian berlangganan yang diatur pada
            materi promosi tersebut. Kami juga dapat menggunakan Informasi
            Pribadi Anda sebagai pertimbangan Kami dalam melakukan riset pasar
            dimana Kami akan tetap memperhatikan dan menghormati kepercayaan
            yang Anda berikan kepada Kami terkait Informasi Pribadi, oleh
            karenanya Kami akan menyediakan dalam bentuk rincian anonim dan
            hanya akan digunakan untuk keperluan statistik.
          </p>
        </Accordion>

        <Accordion
          title="3. Pembagian Informasi Pribadi"
          accordionKey={3}
          activeAccordionKey={activeAccordionKey}
          setActiveAccordionKey={setActiveAccordionKey}
        >
          <p>
            Kami hanya akan membagi Informasi Pribadi Anda kepada
            perusahaan-perusahaan yang terafiliasi dengan Kami, pihak berwenang
            seperti pemerintah, mitra bisnis terpercaya Kami, pemasok maupun
            agen Kami dari waktu ke waktu dan dimanapun. Anda memahami bahwa
            Kami dapat membagikan Informasi Pribadi Anda pada situasi-situasi
            tertentu seperti:
          </p>
          <p>
            a. Melakukan pembelaan terhadap klaim, gugatan, tuntutan apapun, b.
            Mematuhi peraturan perundang-undangan, proses dan/atau perintah
            pengadilan permintaan yang sah oleh pejabat penegak hukum atau pihak
            yang berwenang, c. Melakukan pemeriksaan atau penyelidikan atas
            penipuan atau kesalahan lainnya yang dipersyaratkan atau diperlukan
            dalam rangka proses mematuhi hukum yang berlaku, atau untuk
            melindungi kepentingan sah Kami, d. Kepada pembeli atau mitra Kami
            berkaitan dengan pelaksanaan penjualan, layanan, pengalihan,
            pekerjaan lain baik sebagian ataupun seluruhnya dari kegiatan bisnis
            perusahaan Kami, e. Untuk mempertahankan, melindungi hak Kami,
            pengguna platform lainnya, atau pihak ketiga sesuai dengan
            kebijaksanaan Kami, dan f. Kondisi-kondisi lain selama diperbolehkan
            oleh hukum.
          </p>
        </Accordion>

        <Accordion
          title="4. Persetujuan"
          accordionKey={4}
          activeAccordionKey={activeAccordionKey}
          setActiveAccordionKey={setActiveAccordionKey}
        >
          <p>
            Sebagaimana telah kami jelaskan pada bagian awal Kebijakan ini,
            dengan mengakses, menjelajah, menggunakan, mendaftarkan diri Anda,
            menggunakan layanan atau produk yang Kami berikan pada platform atau
            dengan meng-klik tombol “konfirmasi” atau “setuju” atau pada saat
            Anda membuat akun baru pada situs, maka Anda menyetujui Kami dan
            perusahaan yang terafiliasi dengan Kami untuk mengumpulkan,
            menggunakan, mengungkapkan, mentransfer dan/atau mengolah Informasi
            Pribadi sebagaimana tertuang dalam Kebijakan ini. Sewaktu-waktu Anda
            dapat menarik persetujuan terhadap pengumpulan, penggunaan atau
            penyingkapan Kami atas Informasi Pribadi dengan memberikan
            menyampaikan pemberitahuan secara tertulis kepada Kami dan disertai
            dengan alasan Anda. Setelah konfirmasi atas penarikan persetujuan,
            Kami akan berhenti mengumpulkan, menggunakan atau mentransfer,
            menyingkap Informasi Pribadi. Namun demikian hal ini tidak berlaku
            dalam hal diwajibkan oleh hukum atau dalam hal Kami menjalankan
            kegiatan usaha yang sah atau berdasarkan tujuan hukum untuk
            mempertahankannya. Dalam hal anda menarik persetujuan Anda maka Kami
            mungkin tidak dapat untuk terus memberikan layanan Kami kepada Anda
            dan Anda setuju untuk membebaskan Kami dan tidak akan meminta
            pertanggung jawaban atas setiap kerugian atau kerusakan yang timbul
            dari atau terkait penghentian layanan tersebut.
          </p>
        </Accordion>

        <Accordion
          title="5. Perlindungan Informasi Pribadi"
          accordionKey={5}
          activeAccordionKey={activeAccordionKey}
          setActiveAccordionKey={setActiveAccordionKey}
        >
          <p>
            Kami senantiasa melindungi Informasi Pribadi di bawah kepemilikan
            atau kendali Kami dengan mempertahankan pengaturan keamanan yang
            wajar untuk mencegah akses, pengumpulan, penggunaan, penyingkapan,
            penyalinan, modifikasi, penghapusan yang tidak sah atau risiko yang
            sama salah satunya menggunakan SSL (Secure Socket Layer).
          </p>
        </Accordion>

        <Accordion
          title="6. Penyimpanan Dan Penghapusan Informasi Pribadi"
          accordionKey={6}
          activeAccordionKey={activeAccordionKey}
          setActiveAccordionKey={setActiveAccordionKey}
        >
          <p>
            a. Kami akan menyimpan informasi selama akun Anda tetap aktif dan
            Anda dapat melakukan penghapusan sesuai dengan ketentuan peraturan
            hukum yang berlaku. Anda dapat meminta penghapusan akun dengan
            menggunakan fitur “Hapus Akun” di profil akun Anda. b. Anda dapat
            melakukan registrasi ulang dengan Informasi Pribadi yang pernah Anda
            daftarkan sebelumnya setelah 2×24 jam (dua kali dua puluh empat jam)
            sejak Anda melakukan penghapusan akun Anda.
          </p>
        </Accordion>

        <Accordion
          title="7. Persetujuan Kebijakan Privasi Data"
          accordionKey={7}
          activeAccordionKey={activeAccordionKey}
          setActiveAccordionKey={setActiveAccordionKey}
        >
          <p>
            Kebijakan ini mungkin diubah dan/atau diperbaharui dari waktu ke
            waktu sebagai upaya Kami dalam menyesuaikan dengan perubahan hukum
            dan peraturan yang ada tanpa pemberitahuan sebelumnya. Kami
            menyarankan untuk membaca secara seksama dan memeriksa kembali laman
            Kebijakan ini dari waktu ke waktu untuk mengetahui perubahan apapun.
            Dengan tetap mengakses dan menggunakan platform, maka Anda dianggap
            menyetujui perubahan-perubahan dalam Kebijakan yang ada. Anda
            memahami bahwa versi terbaru dari Kebijakan ini akan menggantikan
            semua versi sebelumnya.
          </p>
          
        </Accordion>

        {/* Tambahkan instance Accordion lain sesuai kebutuhan */}
      </div>
      <ApakahMembantu/>
    </div>
  );
};

export default Kebijakan;
