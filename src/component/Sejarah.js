import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Sejarah extends Component{
    render(){
        return(
            <div>
                <h3 align="center">Sejarah Sekolah</h3>
                <center>
                 <Mui.Button variant="contained">< a href="/">BERANDA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Guru">Guru</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kepalasekolah">KEPALA-SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Jurusan">JURUSAN</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Alamatkontak">ALAMAT-KONTAK</a></Mui.Button>
                </center><hr></hr>
                <center>
                    <img src="logo smk.jpg" width="450" height="350"/><br></br>
                </center>
                <Mui.Container fidex>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">Sejarah</h3>
                                    <p>SMK BINA NUSANTARA SEMARANG adalah sekolah menenengah kejuruan yang berdiri pada tanggal 18 mei 2010 dibawah Yayasan Bina Nusantara yang di ketuai Drs.Sugiyono,M.M dan Sugiyarto,S.Kom, M.M.SMK BINA NUSANTARA SEMARANG beralamat di jl.Kemantren No.5 wonosari Ngaliyan Semarang. Dengan luas lokasi  4004 m2, sarana dan prasarana yang memadai, suasana belajar yang nyaman karena berada di tengah perkamampungan masyarakat yang jauh dari kebisingan.Jumlah siswa SMK BINA NUSANTARA mengalami peningkatan dari tahun ketahun. Mayoritas siswa berasal dari lingkungan sekitar, Kota Semarang, dan luar Semarang. Siswa berasal dari keluarga dengan perekonomian menengah kebawah.</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">Tujuan SMK Bina Nusantara</h3>
                                <ol>
                                    <li>Mempersiapkan tamatan yang memiliki kepribadian dan berakhlak mulia sebagai tenaga kerja tingkat menengah yang kompeten sesuai program keahlian pilihannya</li><br/>
                                    <li>Membekali peserta didik untuk berkarir, mandiri yang mampu beradaptasi dilingkungan kerja sesuai bidangnya dan mampu menghadapi perubahan yang terjadi di masyarakat.</li><br/>
                                    <li>Membekali peserta didik sikap profesional untuk mengembangkan diri dan mampu berkompetisi di tingkat nasional, regional dan internasional.</li><br/>
                                </ol>
                             </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Container>
            </div>
        )
    }
}
export default Sejarah;