import React from "react";
import { cekTahun, cekTanggal, cekBulan} from  '../utils/tanggal';

const Hello = () => {
    return(
      <>
     <p> Hello, selamat datang di kelas web programming</p>
     
    <p>  sekarang tanggal: { cekTanggal()} / {cekBulan()} / {cekTahun()} </p>
     
      </>
    );
  };

    export default Hello;