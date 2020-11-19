
import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Jurusan extends Component{
    render(){
        return(
            <div>
                <h3 align="center">Jurusan</h3>
                <center>
                 <Mui.Button variant="contained">< a href="/">BERANDA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Guru">Guru</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kepalasekolah">KEPALA-SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Jurusan">JURUSAN</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Alamatkontak">ALAMAT-KONTAK</a></Mui.Button>
                </center><hr></hr>
                <h4><p>Ada beberapa Jurursan di sekolah kami</p></h4>
                <h2>1.AKUNTANSI</h2>
                <Mui.Container fidex>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">Akuntansi</h3>
                                    <p>Akuntansi merupakan kompetensi yg mempelajari proses mencatat,mengolah dan menyajikan data yg berkaitan dengan keuangan.Untuk jurusan akuntansi di SMK, siswa di berikan banyak teori mengeni akuntansi keuangan perusahaan jasa,akuntansi keuangan perusahaan dagang dan perpajakan. Selain itu,siswa jurusan akuntansi juga dibekali dengan komputerisasi akuntansi, misalnya menggunakan program MYOB yang dapat menjadi nilai plus untuk lulusan SMK jurusan akuntansi.</p>
                                    <img src="akl.jpg"/>
                                    <img src="akl1.jpg"/>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">Fasilitas</h3>
                                <ol>                    
                                        <li>Bank Mini</li>
                                        <li>Lab Computer</li>
                                </ol>
                             </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Container>
                <h2>2.TBSM</h2>   
                <Mui.Container fidex>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">TBSM</h3>
                                    <p>Tenik Bisnis Sepeda Motor adalah kompetensi yang mempelajari tentang perawatan, perbaikan, dan modifikasi sepeda motor.
                                        Lulusannya mampu menjadi Teknisi yang berkarakter profesional, ahli dan terampil dalam melakukan perawatan dan perbaikan mesin sepeda motor, chasis, pemindahan tenaga, sistem kelistrikan sepeda motor, kreatif dalam modifikasi dan asesoris sepeda motor,merancang dan membuat produk yang berbasis welding (pengelasan), dan menguasai Otomotif Technology Computer mutakhir
                                    </p>
                                    <img src="tbsm.jpg"/>
                                    <img src="tbsm1.jpg"/>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">Fasilitas</h3>
                                <ol>                    
                                        <li>bengkel berstandar Astra Honda(AHM)</li>
                                </ol>
                             </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Container> 
                <h2>3.TKJ</h2>
                <Mui.Container fidex>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">TKJ</h3>
                                    <p>Teknik komputer dan jaringan adalah kompetensi keahlian yg mempelajari tentang teknologi informasi dan jaringan. Di
smk bina nusantara lulusannya mampu menjadi network engineer,software development dan juga bisa membuat film animasi .
                                        Pembelajarannya menggunakan cyber class dan menggunakan peralatan yang canggih seperti IBD, VIRTUALISER, dan menggunakan piranti multimedia lainnya. Bekerja sama dengan Intel Education untuk menjamin kualitas pembelajaran sesuai dengan kebutuhan industri.
                                    </p>
                                    <img src="tkj.jpg"/>
                                    <img src="tkj1.jpg"/>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">Fasilitas</h3>
                                <ol>                         
                                         <li>Gedung milik sendiri</li>
                                         <li>Memiliki laboratorium canggih seperti laboratorium networking support</li>
                                         <li>Laboratorium hardware, software dan laboratorium multimedia.</li>
                                </ol>
                             </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Container> 
                    <h2>TATA BUSANA</h2>
                    <Mui.Container fidex>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">TATA BUSANA</h3>
                                    <p>Tata Busana merupakan kompetensi yang mempelajari bagaimana mendesain busana yg sesuai dengan bentuk tubuh serta karakteristik model atau seseorang. Tidak hanya mendesain,tapi juga membuat pola hingga desain tersebut menjadi busana.
                                    Lulusan TB dapat mendapat menjadi seorang desainer/perancang busana,dapat pula membuka usaha sendiri berupa butik/konveksi/tailor.
                                    </p>
                                    <img src="tb.jpg"/>
                                    <img src="tb2.jpeg"/>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">Fasilitas</h3>
                                <ol>                    
                                        <li>Mesin jahit industry</li>
                                        <li>Lab Garmen</li>
                                        <li>Peralatan Jahit yg berkualitas</li>
                                        <li>Mesin pasang kancing</li>
                                        <li>Mesin Obras</li>
                                        <li>Mesin Lubang kancing</li>
                                        <li>Boneka jahit</li>
                                </ol>
                             </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Container> 
            </div>
        )
    }
}
export default Jurusan;