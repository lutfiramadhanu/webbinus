import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Kepalasekolah extends Component{
    render(){
        return(
            <div>
                <br/><h1 align="center">Kepala Sekolah</h1><br/>
                <center>
                    <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Mui.Button href="/">Home</Mui.Button>
                        <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/Kepalasekolah">Kepala Sekolah</Mui.Button>
                        <Mui.Button href="/Guru">Guru</Mui.Button>
                        <Mui.Button href="/Jurusan">Jurusan</Mui.Button>
                        <Mui.Button href="/Alamatsekolah">Alamat Sekolah</Mui.Button>
                    </Mui.ButtonGroup>
                </center><hr/><br/>
                <Mui.Container fidex>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                            <center><p>Kepala SMK Bina Nusantara Semarang</p>
                                <img src="/eka.jpg"></img>
                                <p>Eka Aribawa, S.Pd.I</p></center>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                            <h3 align="left">السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h3><br/>
                                    <p>Alhamdulillahirobbil’alamin puji syukur kepada Allah SWT atas ridho Nya web SMK Bina Nusantara Semarang dapat tersusun dengan baik. Shalawat dan Salam Tercurah kepada Nabi Muhammad SAW yang kita tunggu pertolongannya di Yaumul Qiyamah kelak.</p><br/>
                                    <p>SMK Bina Nusantara mempunyai visi untuk menjadi salah satu SMK swasta di Kota Semarang yang tidak hanya dapat dihitung keanggotaannya namun juga diperhitungkan keberadaannya. Terbukti dengan usaha peningkatan kualitas yang dibuktikan dengan kelengkapan sarana prasarana yang menunjang pembelajaran dan pelatihan ketrampilan siswa secara maksimal. Didukung dengan tenaga pendidik dan kependidikan yang berkompeten di bidangnya untuk kemajuan ketrampilan dan karakter siswa-siswanya.</p><br/>
                                    <p>Dari bidang Kurikulum, SMK Bina Nusantara telah berhasil melaksanakan program link and match dengan Industri  sesuai dengan kompetensi keahlian yang kami miliki. Salah satunya adalah dilaksanakannya kelas Industri yang bekerjasama dengan Astra Honda Motor, Intel Education, PT. Telkom, Excellent Computer dan PT. Apparel One Indonesia, PT. Alfaria Trijaya Tbk dan juga Santren Koding.</p><br/>
                                    <p>Dari bidang Kesiswaan, SMK Bina Nusantara menerapkan metode pembinaan yang bertujuan untuk peningkatan karakter siswa untuk menjadi sumber daya yang kompetitif dan berakhlakul karimah.</p><br/>
                                    <p>BKK Mitra Binusa adalah organisasi legal yang secara khusus memasarkan lulusan untuk dapat disalurkan di Industri, dan secara umum membantu warga lingkungan sekitar atas informasi lowongan pekerjaan yang ada. Kami berharap dengan adanya website ini dapat memberikan informasi atas keberadaan SMK Bina Nusantara Semarang.</p><br/>
                                <h3>وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h3><br/><br/>
                                    <p>Kepala SMK Bina Nusantara Semarang</p><br/>
                                    <p>Eka Aribawa, S.Pd.I</p><br/>
                             </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Container>
            </div>
        )
    }
}

export default Kepalasekolah;