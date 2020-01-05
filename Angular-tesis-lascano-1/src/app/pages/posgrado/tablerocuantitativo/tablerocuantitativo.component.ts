import {Component} from '@angular/core';
import {Apibackend} from '../../../../service/backend/apibackend';
import {AuthService} from '../../../usuarios/auth.service';

@Component({
  selector: 'ngx-tablerocuantitativo',
  templateUrl: 'tablerocuantitativo.html',
  styleUrls: ['tablerocuantitativo.scss'],
})
export class TablerocuantitativoComponent {

  //afinidad de formacion de posgrado
  public afps = [];
  public pfa;
  public tpafp;
  public fecha;
  public date;
  public semaforoafp;

  //Composicion de la planta academica
  public cpas = [];
  public phdl;
  public mscl;
  public msc;
  public phd;
  public tpcpa;
  public semaforocpa;

  //Actualizacion cientifica
  public acps = [];
  public ndad;
  public tpacp;
  public fechaacp;
  public semaforoacp;

  //Profesores Visitantes
  public pvs = [];
  public mscv;
  public phdv;
  public tppv;
  public datepv;
  public semaforopv;

  //titularidad y dedicacion
  public tids = [];
  public ptc;
  public tptid;
  public fechatid;
  public semaforotid;

  //estudiantes por profesor
  public eps = [];
  public ne;
  public tpep;
  public fechaep;
  public semaforoep;

  //Tasa de permanencia
  public tpms = [];
  public ter;
  public tetpm;
  public fechatpm;
  public semaforotpm;

  //Tasa de titulacion
  public tts = [];
  public tet;
  public tett;
  public fechatt;
  public semaforott;

  //I + D colaborativo interno
  public idis = [];
  public pp;
  public pe;
  public tpidi;
  public fechaidi;
  public semaforoidi;

  //Cooperacion extern y redes de investigacion
  public cooprds = [];
  public tacl;
  public tac;
  public fechacooprd;
  public semaforocooprd;

  //Ambientes de aprendizaje
  public iaas = [];
  public fun;
  public eq;
  public dis;
  public fechaiaa;
  public semaforoiaa;


  constructor(public service: Apibackend, private authService: AuthService) {

  }

  //afinidad de formacion de posgrado
  public afp() {
    this.fecha = this.obtenerFecha();
    console.log(this.fecha);
    if (this.pfa !== "" && this.tpafp !== "" && this.tpafp !== "0") {

      this.service.getAfp(this.pfa, this.tpafp, this.fecha).subscribe(
        response => {
          console.log("estas en evintplantacademica :*");
          console.log(response);
          if (1 >= response['afp'] && response['afp'] > 0.8) {
            this.afps = response;
            this.semaforoafp = '../../../../../../assets/images/verde.png';

          }
          if (0.8 >= response['afp'] && response['afp'] > 0.6) {
            this.afps = response;
            this.semaforoafp = '../../../../../../assets/images/amarillo.png';
          }
          if (0.6 >= response['afp']) {
            this.afps = response;
            this.semaforoafp = '../../../../../../assets/images/rojo.png';
          }

        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");
    }
  }

  //Composicion de la planta academica
  public cpa() {
    this.date = this.obtenerFecha();
    if (this.phdl !== "" && this.mscl !== "" && this.phd !== "" && this.msc !== "" && this.tpcpa !== "" && this.tpcpa !== "0") {
      this.service.getCpa(this.phdl, this.mscl, this.phd, this.msc, this.tpcpa, this.date).subscribe(
        response => {
          if (1 > response['cpa']) {

            this.cpas = response;
            this.semaforocpa = '../../../../../../assets/images/rojo.png';
          }
          if (response['cpa'] > 1) {
            this.cpas = response;
            this.semaforocpa = '../../../../../../assets/images/verde.png';
          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");
    }


  }

  //Actualizacion cientifica
  public acp() {
    this.fechaacp = this.obtenerFecha();
    if (this.ndad !== "" && this.tpacp !== "" && this.tpacp !== "0") {
      this.service.getAcp(this.ndad, this.tpacp, this.fechaacp).subscribe(
        response => {
          if (100 >= response['acp'] && response['acp'] > 75) {
            this.acps = response;
            this.semaforoacp = '../../../../../../assets/images/verde.png';

          }
          if (75 >= response['acp'] && response['acp'] > 50) {
            this.acps = response;
            this.semaforoacp = '../../../../../../assets/images/amarillo.png';

          }
          if (50 >= response['acp']) {
            this.acps = response;
            this.semaforoacp = '../../../../../../assets/images/rojo.png';

          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");
    }

  }

  //Profesores Visitantes
  public pv() {
    this.datepv = this.obtenerFecha();
    if (this.mscv !== "" && this.phdv !== "" && this.tppv !== "" && this.tppv !== "0") {
      this.service.getPv(this.mscv, this.phdv, this.tppv, this.datepv).subscribe(
        response => {
          if (response['pv'] > 25) {
            this.pvs = response;
            this.semaforopv = '../../../../../../assets/images/rojo.png';

          }
          if (25 >= response['pv']) {
            this.pvs = response;
            this.semaforopv = '../../../../../../assets/images/verde.png';
          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");
    }
  }

  //titularidad y dedicacion
  public tid() {
    this.fechatid = this.obtenerFecha();
    if (this.ptc !== "" && this.tptid !== "" && this.tptid !== "0") {
      this.service.getTid(this.ptc, this.tptid, this.fechatid).subscribe(
        response => {
          if (response['tid'] > 75) {
            this.tids = response;
            this.semaforotid = '../../../../../../assets/images/verde.png';

          }
          if (75 >= response['tid']) {
            this.tids = response;
            this.semaforotid = '../../../../../../assets/images/rojo.png';

          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");

    }

  }

  //Estudiantes por profesores
  public ep() {
    this.fechaep = this.obtenerFecha();
    if (this.ne !== "" && this.tpep !== "" && this.tpep !== "0") {

      this.service.getEp(this.ne, this.tpep, this.fechaep).subscribe(
        response => {
          if (response['ep'] > 30) {
            this.eps = response;
            this.semaforoep = '../../../../../../assets/images/rojo.png';

          }
          if (30 >= response['ep']) {
            this.eps = response;
            this.semaforoep = '../../../../../../assets/images/verde.png';

          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");

    }
  }

  //Tasa de permanencia
  public tpm() {
    this.fechatpm = this.obtenerFecha();
    if (this.ter !== "" && this.tetpm !== "" && this.tetpm !== "0") {
      this.service.getTpm(this.ter, this.tetpm, this.fechatpm).subscribe(
        response => {
          if (100 > response['tpm'] && response['tpm'] > 80) {
            this.tpms = response;
            this.semaforotpm = '../../../../../../assets/images/verde.png';

          }
          if (80 >= response['tpm'] && response['tpm'] > 60) {
            this.tpms = response;
            this.semaforotpm = '../../../../../../assets/images/amarillo.png';

          }
          if (60 >= response['tpm'] && response['tpm'] > 0) {
            this.tpms = response;
            this.semaforotpm = '../../../../../../assets/images/verde.png';
          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");
    }
  }

  //Tasa de titulacion
  public tt() {
    this.fechatt = this.obtenerFecha();
    if (this.tet !== "" && this.tett !== "" && this.tett !== "0") {

      this.service.getTt(this.tet, this.tett, this.fechatt).subscribe(
        response => {
          if (100 > response['tt'] && response['tt'] > 80) {
            this.tts = response;
            this.semaforott = '../../../../../../assets/images/verde.png';

          }
          if (80 >= response['tt'] && response['tt'] > 60) {
            this.tts = response;
            this.semaforott = '../../../../../../assets/images/amarillo.png';

          }
          if (60 >= response['tt'] && response['tt'] > 0) {
            this.tts = response;
            this.semaforott = '../../../../../../assets/images/verde.png';

          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");

    }

  }

  //I + D colaborativo interno
  public idi() {
    this.fechaidi = this.obtenerFecha();
    if (this.pp !== "" && this.pe !== "" && this.tpidi !== "" && this.tpidi !== "0") {

      this.service.getIdi(this.pp, this.pe, this.tpidi, this.fechaidi).subscribe(
        response => {
          if (response['idi'] > 1) {
            this.idis = response;
            this.semaforoidi = '../../../../../../assets/images/verde.png';

          }
          if (1 > response['idi']) {
            this.idis = response;
            this.semaforoidi = '../../../../../../assets/images/rojo.png';
          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");
    }
  }

  //Cooperacion extern y redes de investigacion

  public cooprd() {
    this.fechacooprd = this.obtenerFecha();
    if (this.tacl !== "" && this.tac !== "" && this.tac !== "0") {

      this.service.getCooprd(this.tacl, this.tac, this.fechacooprd).subscribe(
        response => {

          if (100 >= response['cooprd'] && response['cooprd'] > 50) {
            this.cooprds = response;
            this.semaforocooprd = '../../../../../../assets/images/verde.png';

          }
          if (50 >= response['cooprd'] && response['cooprd'] > 25) {
            this.cooprds = response;
            this.semaforocooprd = '../../../../../../assets/images/amarillo.png';

          }
          if (25 >= response['cooprd']) {
            this.cooprds = response;
            this.semaforocooprd = '../../../../../../assets/images/rojo.png';
          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");
    }
  }

  //Ambientes de aprendizaje
  public iaa() {
    this.fechaiaa = this.obtenerFecha();
    if (this.fun !== "" && this.eq !== "" && this.dis !== "") {
      this.service.getIaa(this.fun, this.eq, this.dis, this.fechaiaa).subscribe(
        response => {
          if (10 >= response['iaa'] && response['iaa'] >= 9) {
            this.iaas = response;
            this.semaforoiaa = '../../../../../../assets/images/verde.png';
          }
          if (9 >= response['iaa'] && response['iaa'] >= 7) {
            this.iaas = response;
            this.semaforoiaa = '../../../../../../assets/images/amarillo.png';
          }
          if (7 > response['iaa']) {
            this.iaas = response;
            this.semaforoiaa = '../../../../../../assets/images/rojo.png';
          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");
    }
  }


  public obtenerFecha() {
    let hoy = new Date();
    let dd = hoy.getDate();
    let mm = hoy.getMonth() + 1;
    let yyyy = hoy.getFullYear();

    dd = this.addZero(dd);
    mm = this.addZero(mm);
    let fecha = dd + '-' + mm + '-' + yyyy;

    return fecha.toString();

  }

  public addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }
}
