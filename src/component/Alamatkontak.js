
import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Alamatkontak extends Component{
    render(){
        return(
            <div>
                <h3 align="center">Alamat kontak</h3>
                <center>
                 <Mui.Button variant="contained">< a href="/">BERANDA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Guru">Guru</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kepalasekolah">KEPALA-SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Jurusan">JURUSAN</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Alamatkontak">ALAMAT-KONTAK</a></Mui.Button>
                </center><hr></hr>
                <h1 align="center">Alamat Kontak</h1><hr></hr>
                <img src="P.jpg" height="300"/>
                <Mui.Container fixed>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={50} sm={70}>
                                <h3 align="center"></h3>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2858744478826!2d110.29925951477327!3d-6.9755591949607165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705fdc0235654d:0x97b3afe1b2104e70!2sSMK Bina Nusantara Semarang!5e0!3m2!1sid!2sid!4v1605772546549!5m2!1sid!2sid" width="600" height="400"/>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">Smk Bina Nusantara</h3>
                               <ol>
                                   <li>(NSS: 402036316053, NPSN:  20328986)</li>
                                   <li>Alamat : Jl. Kemantren No. 5 RT 04 RW 02 Kelurahan Wonosari Kecamatan Ngaliyan Semarang</li>
                                   <li>Telp : (024) 8662971</li>
                                   <li>Email : smkbinusasmg@yahoo.com</li>
                               </ol>
                             </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Container>
            </div>
        )
    }
}
export default Alamatkontak;