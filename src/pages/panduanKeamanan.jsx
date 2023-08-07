import React from "react";
import "../assets/styles/panduanKeamanan.css";
import ApakahMembantu from "../components/ApakahMembantu/ApakahMembantu";

function PanduanKeamanan() {
  return (
    <div className="panduan-keamanan">
      <div className="isi-pertama-panduan">
        <h1>Bagaimana Agar Transaksi Saya Aman DI BuKos?</h1>
        <p>
          Mamikos selalu berupaya untuk menjaga keamanan dan kenyamanan pengguna
          (pencari, penyewa, dan pemilik kos) selama bertransaksi dan
          berkomunikasi di platform Mamikos (situs web dan aplikasi). Sebagai
          pengguna, Anda sebaiknya memperhatikan panduan keamanan Mamikos
          berikut ini:
        </p>

        <ul>
          <li>
            Pastikan Anda menjaga kerahasiaan akun Anda. Jangan pernah
            menginformasikan data pribadi (nomor kontak, email, atau password)
            maupun kode verifikasi (OTP) kepada siapapun. Tim Mamikos tidak
            pernah meminta kode verifikasi Anda.
          </li>
          <li>
            Lakukan verifikasi akun Anda. Hal ini dilakukan sebagai tindakan
            pencegahan peretasan akun dan memastikan keaslian identitas Anda
            sebagai pengguna.
          </li>
          <li>
            Buka link hanya dari platform atau media informasi resmi Mamikos.
            Link asli dari Mamikos selalu dimulai dengan alamat:
            https://mamikos.com atau https://owner.mamikos.com (apabila pengguna
            akun Pemilik Kos mengakses lewat desktop/ mobile web), email dari
            pihak Mamikos berasal dari domain yang memiliki akhiran @mamikos.com
            (contoh: cs@mamikos.com), dan kanal resmi Mamikos di media sosial
            adalah sebagai berikut: Facebook, Twitter, dan Instagram.
          </li>
          <li>
            Lakukan proses transaksi dan komunikasi dengan pengguna lain hanya
            di platform Mamikos. Lewat sistem Booking Langsung di Mamikos, Anda
            dapat menikmati kemudahan transaksi cashless dan pencatatan
            pembayaran yang bisa diakses kapan saja. Dengan menggunakan akun
            Anda sebagai penyewa/pemilik saat bertransaksi, kami dapat
            menindaklanjuti apabila terjadi indikasi pelanggaran, kecurangan
            (fraud), pencurian maupun penipuan, tindakan kriminal, dan transaksi
            yang mencurigakan.
            <p>
              Mohon berhati-hati dan tidak melakukan pembayaran apapun ke
              rekening yang bukan atas nama Mamikos/PT. Mama Teknologi Properti
              atau virtual account yang tidak tersedia atau berasal dari
              platform. Pihak Mamikos (termasuk di antaranya karyawan, agen,
              maupun mitra resmi) tidak pernah meminta pengguna melakukan
              pembayaran apapun ke rekening pribadi individu, termasuk
              memberikan hadiah, undian, promo di luar situs web, aplikasi, akun
              media sosial dan messenger resmi Mamikos.
            </p>
          </li>
          <li>
            Khusus untuk transaksi sewa apartemen dan jual-beli barang & jasa,
            gunakan fitur chat di Mamikos. Saat ini, fitur transaksi via Mamikos
            hanya tersedia untuk booking dan sewa kos. Bagi Anda yang ingin
            melakukan transaksi sewa apartemen dan jual-beli barang & jasa, kami
            tetap menghimbau agar Anda selalu mengutamakan keamanan, yakni
            dengan menggunakan fitur chat di Mamikos.
          </li>
          <li>
            Laporkan apabila akun Anda hilang. Jika akun Anda telah diambil alih
            oleh pihak lain tanpa sepengetahuan dan persetujuan Anda, Anda dapat
            dengan segera melaporkan kepada Mamikos.
          </li>
        </ul>
      </div>
      <ApakahMembantu/>
    </div>
  );
}

export default PanduanKeamanan;
