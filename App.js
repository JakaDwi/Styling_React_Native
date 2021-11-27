import React, { Component } from "react";
import { View, Text, Image, Button} from "react-native";
import tambah from './img/tambah.png';
import list from './img/list.png';
import kotak from './img/kotak.png';
import vid from './img/vid.png';
import tag from './img/tag.png';
import account from './img/account.png';
import jaka from './img/jaka.png';
import pia from './img/pia.png';
import kucing from './img/kucing.png';
import plus from './img/plus.png';
import foto1 from './img/foto1.png';
import foto2 from './img/foto2.png';
import foto3 from './img/foto3.png';
import home from './img/home.png';
import search from './img/search.png';
import reels from './img/reels.png';
import shop from './img/shop.png';
import { style } from "./style";

const App = () => {
  return (
    <View style={style.container}>
      <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
        <View style={{flex:6, backgroundColor:'white',
          justifyContent:'center'}}>
            <Text style={{fontSize:19, color:'black'}}>Jaka Dwi Prasetyo</Text>
        </View>
        <TampilanGambar simbol={tambah} />
        <TampilanGambar simbol={list} />
      </View>
      <View style={{flex:2, backgroundColor:'white',
        flexDirection:'row'}}>
          <View style={style.viewGambar}>
            <Image source={account} style={{width:90,
              height:90, borderRadius:90/2}} />
      </View>
          <CardProfile angka="100" keterangan="Post" />
          <CardProfile angka="88.4M" keterangan="Followers" />
          <CardProfile angka="2,110" keterangan="Following" />
      </View>
      <View style={{flex:1.5, backgroundColor:'white'}}>
        <Text style={{fontSize:15, color:'black'}}>Biasa di panggil Jakk</Text>
        <Text style={{fontSize:13}}>Followers Jutaan Tapi Gadapet Centang Biru</Text>
        <Text style={style.textBio}>@piapio</Text>
      </View>
      
      <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
          <View style={{flex:7, backgroundColor:'white'}}>
            <Button title="Edit Profil" ></Button>
          </View>
          <View style={{flex:1, backgroundColor:'white'}}>
            <Button title="v" style={{borderRadius:5}} ></Button>
          </View>
      </View>
      <View style={{flex:2, backgroundColor:'white', flexDirection:'row'}}>
        <Sorotan gambar={jaka} keteranganSorotan="Si Ganteng" />
        <Sorotan gambar={pia} keteranganSorotan="Si Cantik" />
        <Sorotan gambar={kucing} keteranganSorotan="Si Majikan" />
        <Sorotan gambar={plus} keteranganSorotan="New" />
      </View>
        <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
          <TampilanGambar simbol={kotak} />
          <TampilanGambar simbol={vid} />
          <TampilanGambar simbol={tag} /> 
      </View>
      <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
        <Foto feed={foto1} />
        <Foto feed={foto2} />
        <Foto feed={foto3} />
      </View>
      <View style={{flex:1, backgroundColor:'white', flexDirection:"row"}}>
        <Navigasi nav={home} />
        <Navigasi nav={search} />
        <Navigasi nav={reels} />
        <Navigasi nav={shop} />
        <View style={style.viewGambar}>
            <Image source={account} style={{width:28,
              height:28, borderRadius:80/2}} />
        </View>
      </View>
    </View>     
  )
}

const TampilanGambar = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.simbol} style={style.gambar} />
    </View>
  )
}

const CardProfile = (props) => {
  return (
    <View style={style.viewGambar}>
      <Text style={style.textProfil}>{props.angka}</Text>
      <Text style={style.keteranganProfil}>
        {props.keterangan}</Text>
    </View>
  )
}

const Sorotan = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.gambar} style=
      {style.gambarProfil} />
      <Text>{props.keteranganSorotan}</Text>
    </View>
  )
}

const Foto = (props) => {
  return (
    <View style={style.viewRow}>
      <Image source={props.feed} style={style.gridGambar} />
    </View>
  )
}

const Navigasi = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.nav} style={style.gambar} />
    </View>
  )
}
export default App;