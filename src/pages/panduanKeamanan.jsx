import React from "react";
import "../assets/styles/panduanKeamanan.css";
import ApakahMembantu from "../components/ApakahMembantu/ApakahMembantu";

function PanduanKeamanan() {
  return (
    <div className="panduan-keamanan">
      <div className="isi-pertama-panduan">
        <h1>Bagaimana Agar Transaksi Saya Aman DI BuKos?</h1>
        <p>
          BuKos selalu berupaya untuk menjaga keamanan dan kenyamanan pengguna
          (pencari, penyewa, dan pemilik kos) selama bertransaksi dan
          berkomunikasi di platform BuKos (situs web dan aplikasi). Sebagai
          pengguna, Anda sebaiknya memperhatikan panduan keamanan BuKos
          berikut ini:
        </p>

        <ul>
          <li>
            Pastikan Anda menjaga kerahasiaan akun Anda. Jangan pernah
            menginformasikan data pribadi (nomor kontak, email, atau password)
            maupun kode verifikasi (OTP) kepada siapapun. Tim BuKos tidak
            pernah meminta kode verifikasi Anda.
          </li>
          <li>
            Lakukan verifikasi akun Anda. Hal ini dilakukan sebagai tindakan
            pencegahan peretasan akun dan memastikan keaslian identitas Anda
            sebagai pengguna.
          </li>
          <li>
            Buka link hanya dari platform atau media informasi resmi BuKos.
            Link asli dari BuKos selalu dimulai dengan alamat:
            https://BuKos.com atau https://owner.BuKos.com (apabila pengguna
            akun Pemilik Kos mengakses lewat desktop/ mobile web), email dari
            pihak BuKos berasal dari domain yang memiliki akhiran @BuKos.com
            (contoh: cs@BuKos.com), dan kanal resmi BuKos di media sosial
            adalah sebagai berikut: Facebook, Twitter, dan Instagram.
          </li>
          <li>
            Lakukan proses transaksi dan komunikasi dengan pengguna lain hanya
            di platform BuKos. Lewat sistem Booking Langsung di BuKos, Anda
            dapat menikmati kemudahan transaksi cashless dan pencatatan
            pembayaran yang bisa diakses kapan saja. Dengan menggunakan akun
            Anda sebagai penyewa/pemilik saat bertransaksi, kami dapat
            menindaklanjuti apabila terjadi indikasi pelanggaran, kecurangan
            (fraud), pencurian maupun penipuan, tindakan kriminal, dan transaksi
            yang mencurigakan.
            <p>
              Mohon berhati-hati dan tidak melakukan pembayaran apapun ke
              rekening yang bukan atas nama BuKos/PT. Mama Teknologi Properti
              atau virtual account yang tidak tersedia atau berasal dari
              platform. Pihak BuKos (termasuk di antaranya karyawan, agen,
              maupun mitra resmi) tidak pernah meminta pengguna melakukan
              pembayaran apapun ke rekening pribadi individu, termasuk
              memberikan hadiah, undian, promo di luar situs web, aplikasi, akun
              media sosial dan messenger resmi BuKos.
            </p>
          </li>
          <li>
            Khusus untuk transaksi sewa apartemen dan jual-beli barang & jasa,
            gunakan fitur chat di BuKos. Saat ini, fitur transaksi via BuKos
            hanya tersedia untuk booking dan sewa kos. Bagi Anda yang ingin
            melakukan transaksi sewa apartemen dan jual-beli barang & jasa, kami
            tetap menghimbau agar Anda selalu mengutamakan keamanan, yakni
            dengan menggunakan fitur chat di BuKos.
          </li>
          <li>
            Laporkan apabila akun Anda hilang. Jika akun Anda telah diambil alih
            oleh pihak lain tanpa sepengetahuan dan persetujuan Anda, Anda dapat
            dengan segera melaporkan kepada BuKos.
          </li>
        </ul>
      </div>
      <ApakahMembantu/>
    </div>
  );
}

export default PanduanKeamanan;
