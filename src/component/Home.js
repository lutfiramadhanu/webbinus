import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Home extends Component{
    render(){
        return(
            <div>
                <h1 align="center">HOME</h1>
                <center>
                <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Guru">Guru</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kepalasekolah">KEPALA-SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Jurusan">JURUSAN</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Alamatkontak">ALAMAT-KONTAK</a></Mui.Button>
                </center><hr></hr>
                <marquee><h1 align="center">SMK BINUS NIHH BOSSS</h1></marquee>
                <hr></hr>
                <img src="/P.jpg"></img>
                <hr></hr>

            </div>
        )
    }
}
export default Home;