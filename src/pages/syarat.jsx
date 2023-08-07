import React from "react";
import '../assets/styles/syarat.css'
import ApakahMembantu from "../components/ApakahMembantu/ApakahMembantu";

function Syarat() {
  return (
    <div className="syarat">
      <div className="isi-pertama-syarat">
        <h1>Syarat dan Ketentuan Umum</h1>

        <p>
          Halo, terima kasih telah mengunjungi situs web (website) mamikos.com
          atau aplikasi Mamikos (selanjutnya disebut “platform”).
        </p>
        <p>
          Platform ini dimiliki dan dioperasikan oleh Mamikos dan afiliasinya
          (selanjutnya disebut, “Kami”). Kami menyarankan pendatang, pengguna,
          ataupun pengguna terdaftar (selanjutnya disebut “Anda”) untuk membaca
          Syarat dan Ketentuan ini secara berkala termasuk juga Kebijakan
          Privasi dan Kebijakan Penalti Pengguna yang merupakan bagian yang
          tidak terpisahkan dari Syarat dan Ketentuan ini karena dapat berdampak
          kepada hak dan kewajiban Anda di bawah hukum.
        </p>
        <p>
          Dengan mengunjungi, menggunakan, mengakses dan/atau mendaftarkan diri
          Anda pada Platform Kami, Anda dianggap telah membaca, mengerti,
          memahami dan menyetujui seluruh isi yang tertuang dalam Syarat dan
          Ketentuan (selanjutnya disebut, “S&K”) ini. Jika Anda tidak setuju
          untuk terikat dengan S&K in maka Anda tidak diperkenankan untuk
          mengakses dan/atau menggunakan Platform Kami. S&K ini merupakan bentuk
          Perjanjian yang sah dan mengikat antara Anda dengan Kami.
        </p>
      </div>
        <ApakahMembantu/>
    </div>
  );
}

export default Syarat;
