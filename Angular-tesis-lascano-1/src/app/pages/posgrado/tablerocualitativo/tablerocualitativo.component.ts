import {Component} from '@angular/core';
import {Apibackend} from '../../../../service/backend/apibackend';
import {Router} from '@angular/router';
import {AuthService} from '../../../usuarios/auth.service';

@Component({
  selector: 'ngx-tablerocualitativo',
  templateUrl: 'tablerocualitativo.html',
  styleUrls: ['tablerocualitativo.scss'],
})
export class TablerocualitativoComponent {

//Contexto
  public contextoEvs = [];
  public contexto1;
  public contexto2;
  public contexto3;
  public contexto4;
  public contexto5;
  public contexto6;
  public contexto7;
  public fechacontexto;
  public semaforoaContexto;

//gestion academica
  public gestionAcademicas = [];
  public gestionAcademica1;
  public gestionAcademica2;
  public gestionAcademica3;
  public gestionAcademica4;
  public gestionAcademica5;
  public gestionAcademica6;
  public fechagestionAcademica;
  public semaforoGestion;

  //estructura programa
  public estructuraProgramas = [];
  public estructuraPrograma1;
  public estructuraPrograma2;
  public estructuraPrograma3;
  public estructuraPrograma4;
  public estructuraPrograma5;
  public fechaEstructuraPrograma;
  public semaforoEstructuraPrograma;

  //politicas Admision
  public politicasAdmisions = [];
  public politicasAdmision1;
  public politicasAdmision2;
  public politicasAdmision3;
  public politicasAdmision4;
  public fechaPoliticasAdmision;
  public semaforoPoliticasAdmision;

  //politicas Titulacion
  public politicasTitulacions = [];
  public politicasTitulacion1;
  public politicasTitulacion2;
  public politicasTitulacion3;
  public politicasTitulacion4;
  public fechaPoliticasTitulacion;
  public semaforoPoliticasTitulacion;

  //politicas Titulacion
  public sistemasBecass = [];
  public sistemasBecas1;
  public sistemasBecas2;
  public sistemasBecas3;
  public sistemasBecas4;
  public fechaSistemasBecas;
  public semaforoSistemasBecas;

  //politicas Titulacion
  public seguimientoGraduadoss = [];
  public seguimientoGraduados1;
  public seguimientoGraduados2;
  public seguimientoGraduados3;
  public seguimientoGraduados4;
  public seguimientoGraduados5;
  public seguimientoGraduados6;
  public fechaSeguimientoGraduados;
  public semaforoSeguimientoGraduados;

  //politicas Titulacion
  public perfilEgresos = [];
  public perfilEgreso1;
  public perfilEgreso2;
  public perfilEgreso3;
  public perfilEgreso4;
  public perfilEgreso5;
  public perfilEgreso6;
  public fechaPerfilEgreso;
  public semaforoPerfilEgreso;

  //Plan Estudios
  public planEstudioss = [];
  public planEstudios1;
  public planEstudios2;
  public planEstudios3;
  public planEstudios4;
  public planEstudios5;
  public fechaPlanEstudios;
  public semaforoPlanEstudios;

  //Plan microcurricular
  public planMicrocurriculars = [];
  public planMicrocurricular1;
  public planMicrocurricular2;
  public planMicrocurricular3;
  public planMicrocurricular4;
  public fechaPlanMicrocurricular;
  public semaforoPlanMicrocurricular;

  //Evaluacion y Seguimiento
  public evaluacionSeguimientos = [];
  public evaluacionSeguimiento1;
  public evaluacionSeguimiento2;
  public evaluacionSeguimiento3;
  public evaluacionSeguimiento4;
  public evaluacionSeguimiento5;
  public fechaEvaluacionSeguimiento;
  public semaforoEvaluacionSeguimiento;

  //Grupos de Investigacion
  public gruposInvestigacions = [];
  public gruposInvestigacion1;
  public gruposInvestigacion2;
  public gruposInvestigacion3;
  public gruposInvestigacion4;
  public fechaGruposInvestigacion;
  public semaforoGruposInvestigacion;

  //Biblioteca virtual y repositorios digitales
  public bibvirrepDigs = [];
  public bibvirrepDig1;
  public bibvirrepDig2;
  public bibvirrepDig3;
  public fechaBibvirrepDig;
  public semaforoBibvirrepDig;

  //Biblioteca virtual y repositorios digitales
  public movilidadacademicas = [];
  public movilidadacademica1;
  public movilidadacademica2;
  public movilidadacademica3;
  public fechaMovilidadacademica;
  public semaforoMovilidadacademica;

  //Particion de Redes
  public participacionRedess = [];
  public participacionRedes1;
  public participacionRedes2;
  public participacionRedes3;
  public fechaParticipacionRedes;
  public semaforoParticipacionRedes;


  constructor(public service: Apibackend, public router: Router, private authService: AuthService) {

  }

//contexto
  public contextoEv() {
    this.fechacontexto = this.obtenerFecha();
    if (this.contexto1 !== "" && this.contexto2 !== "" && this.contexto3 !== "" && this.contexto4 !== "" && this.contexto5 !== "" && this.contexto6 !== "" && this.contexto7 !== "") {

      this.service.getContextoEv(this.contexto1, this.contexto2, this.contexto3, this.contexto4, this.contexto5, this.contexto6, this.contexto7, this.fechacontexto).subscribe(
        response => {
          console.log(response);
          if (response['promedioContext'] == 1) {
            this.contextoEvs = response;
            this.semaforoaContexto = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioContext']) {
            this.contextoEvs = response;
            this.semaforoaContexto = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioContext']) {
            this.contextoEvs = response;
            this.semaforoaContexto = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioContext']) {
            this.contextoEvs = response;
            this.semaforoaContexto = '../../../../../../assets/images/rojo.png';
          }
        },
      )
    } else {
      alert("ingrese datos distintos de cero o validos");
    }
  }

  public gestionAcademica() {
    this.fechagestionAcademica = this.obtenerFecha();
    if (this.gestionAcademica1 !== "" && this.gestionAcademica2 !== "" && this.gestionAcademica3 !== "" && this.gestionAcademica4 !== "" && this.gestionAcademica5 !== "" && this.gestionAcademica6 !== "") {
      this.service.getGestionAcademica(this.gestionAcademica1, this.gestionAcademica2, this.gestionAcademica3, this.gestionAcademica4, this.gestionAcademica5, this.gestionAcademica6, this.fechagestionAcademica).subscribe(
        response => {
          if (response['promedioGestionAcademica'] == 1) {
            this.gestionAcademicas = response;
            this.semaforoGestion = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioGestionAcademica']) {
            this.gestionAcademicas = response;
            this.semaforoGestion = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioGestionAcademica']) {
            this.gestionAcademicas = response;
            this.semaforoGestion = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioGestionAcademica']) {
            this.gestionAcademicas = response;
            this.semaforoGestion = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public estructuraPrograma() {
    this.fechaEstructuraPrograma = this.obtenerFecha();
    if (this.estructuraPrograma1 !== "" && this.estructuraPrograma2 !== "" && this.estructuraPrograma3 !== "" && this.estructuraPrograma4 !== "" && this.estructuraPrograma5 !== "") {
      this.service.getEstructuraprograma(this.estructuraPrograma1, this.estructuraPrograma2, this.estructuraPrograma3, this.estructuraPrograma4, this.estructuraPrograma5, this.fechaEstructuraPrograma).subscribe(
        response => {
          if (response['promedioEstructuraPrograma'] == 1) {
            this.estructuraProgramas = response;
            this.semaforoEstructuraPrograma = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioEstructuraPrograma']) {
            this.estructuraProgramas = response;
            this.semaforoEstructuraPrograma = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioEstructuraPrograma']) {
            this.estructuraProgramas = response;
            this.semaforoEstructuraPrograma = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioEstructuraPrograma']) {
            this.estructuraProgramas = response;
            this.semaforoEstructuraPrograma = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public politicasAdmision() {
    this.fechaPoliticasAdmision = this.obtenerFecha();
    if (this.politicasAdmision1 !== "" && this.politicasAdmision2 !== "" && this.politicasAdmision3 !== "" && this.politicasAdmision4 !== "") {
      this.service.getPoliticasadmision(this.politicasAdmision1, this.politicasAdmision2, this.politicasAdmision3, this.politicasAdmision4, this.fechaPoliticasAdmision).subscribe(
        response => {
          if (response['promedioPoliticasAdmision'] == 1) {
            this.politicasAdmisions = response;
            this.semaforoPoliticasAdmision = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioPoliticasAdmision']) {
            this.politicasAdmisions = response;
            this.semaforoPoliticasAdmision = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioPoliticasAdmision']) {
            this.politicasAdmisions = response;
            this.semaforoPoliticasAdmision = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioPoliticasAdmision']) {
            this.politicasAdmisions = response;
            this.semaforoPoliticasAdmision = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public politicasTitulacion() {
    this.fechaPoliticasTitulacion = this.obtenerFecha();
    if (this.politicasTitulacion1 !== "" && this.politicasTitulacion2 !== "" && this.politicasTitulacion3 !== "" && this.politicasTitulacion4 !== "") {
      this.service.getPoliticasTitulacion(this.politicasTitulacion1, this.politicasTitulacion2, this.politicasTitulacion3, this.politicasTitulacion4, this.fechaPoliticasTitulacion).subscribe(
        response => {
          if (response['promedioPoliticasTitulacion'] == 1) {
            this.politicasTitulacions = response;
            this.semaforoPoliticasTitulacion = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioPoliticasTitulacion']) {
            this.politicasTitulacions = response;
            this.semaforoPoliticasTitulacion = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioPoliticasTitulacion']) {
            this.politicasTitulacions = response;
            this.semaforoPoliticasTitulacion = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioPoliticasTitulacion']) {
            this.politicasTitulacions = response;
            this.semaforoPoliticasTitulacion = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public sistemasBecas() {
    this.fechaSistemasBecas = this.obtenerFecha();
    if (this.sistemasBecas1 !== "" && this.sistemasBecas2 !== "" && this.sistemasBecas3 !== "" && this.sistemasBecas4 !== "") {
      this.service.getSistemasBecas(this.sistemasBecas1, this.sistemasBecas2, this.sistemasBecas3, this.sistemasBecas4, this.fechaSistemasBecas).subscribe(
        response => {
          if (response['promedioSistemasBecas'] == 1) {
            this.sistemasBecass = response;
            this.semaforoSistemasBecas = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioSistemasBecas']) {
            this.sistemasBecass = response;
            this.semaforoSistemasBecas = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioSistemasBecas']) {
            this.sistemasBecass = response;
            this.semaforoSistemasBecas = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioSistemasBecas']) {
            this.sistemasBecass = response;
            this.semaforoSistemasBecas = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public seguimientoGraduados() {
    this.fechaSeguimientoGraduados = this.obtenerFecha();
    if (this.seguimientoGraduados1 !== "" && this.seguimientoGraduados2 !== "" && this.seguimientoGraduados3 !== "" && this.seguimientoGraduados4 !== "" && this.seguimientoGraduados5 !== "" && this.seguimientoGraduados6 !== "") {
      this.service.getSeguimientoGraduados(this.seguimientoGraduados1, this.seguimientoGraduados2, this.seguimientoGraduados3, this.seguimientoGraduados4, this.seguimientoGraduados5, this.seguimientoGraduados6, this.fechaSeguimientoGraduados).subscribe(
        response => {
          if (response['promedioSeguimientoGraduados'] == 1) {
            this.seguimientoGraduadoss = response;
            this.semaforoSeguimientoGraduados = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioSeguimientoGraduados']) {
            this.seguimientoGraduadoss = response;
            this.semaforoSeguimientoGraduados = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioSeguimientoGraduados']) {
            this.seguimientoGraduadoss = response;
            this.semaforoSeguimientoGraduados = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioSeguimientoGraduados']) {
            this.seguimientoGraduadoss = response;
            this.semaforoSeguimientoGraduados = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public perfilEgreso() {
    this.fechaPerfilEgreso = this.obtenerFecha();
    if (this.perfilEgreso1 !== "" && this.perfilEgreso2 !== "" && this.perfilEgreso3 !== "" && this.perfilEgreso4 !== "" && this.perfilEgreso5 !== "" && this.perfilEgreso6 !== "") {
      this.service.getPerfilEgreso(this.perfilEgreso1, this.perfilEgreso2, this.perfilEgreso3, this.perfilEgreso4, this.perfilEgreso5, this.perfilEgreso6, this.fechaPerfilEgreso).subscribe(
        response => {
          if (response['promedioPerfilEgreso'] == 1) {
            this.perfilEgresos = response;
            this.semaforoPerfilEgreso = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioPerfilEgreso']) {
            this.perfilEgresos = response;
            this.semaforoPerfilEgreso = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioPerfilEgreso']) {
            this.perfilEgresos = response;
            this.semaforoPerfilEgreso = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioPerfilEgreso']) {
            this.perfilEgresos = response;
            this.semaforoPerfilEgreso = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public planEstudios() {
    this.fechaPlanEstudios = this.obtenerFecha();
    if (this.planEstudios1 !== "" && this.planEstudios2 !== "" && this.planEstudios3 !== "" && this.planEstudios4 !== "" && this.planEstudios5 !== "") {
      this.service.getPlanEstudios(this.planEstudios1, this.planEstudios2, this.planEstudios3, this.planEstudios4, this.planEstudios5, this.fechaPlanEstudios).subscribe(
        response => {
          if (response['promedioPlanEstudios'] == 1) {
            this.planEstudioss = response;
            this.semaforoPlanEstudios = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioPlanEstudios']) {
            this.planEstudioss = response;
            this.semaforoPlanEstudios = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioPlanEstudios']) {
            this.planEstudioss = response;
            this.semaforoPlanEstudios = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioPlanEstudios']) {
            this.planEstudioss = response;
            this.semaforoPlanEstudios = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public planMicrocurricular() {
    this.fechaPlanMicrocurricular = this.obtenerFecha();
    if (this.planMicrocurricular1 !== "" && this.planMicrocurricular2 !== "" && this.planMicrocurricular3 !== "" && this.planMicrocurricular4 !== "") {
      this.service.getPlanMicrocurricular(this.planMicrocurricular1, this.planMicrocurricular2, this.planMicrocurricular3, this.planMicrocurricular4, this.fechaPlanMicrocurricular).subscribe(
        response => {
          if (response['promedioPlanMicrocurricular'] == 1) {
            this.planMicrocurriculars = response;
            this.semaforoPlanMicrocurricular = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioPlanMicrocurricular']) {
            this.planMicrocurriculars = response;
            this.semaforoPlanMicrocurricular = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioPlanMicrocurricular']) {
            this.planMicrocurriculars = response;
            this.semaforoPlanMicrocurricular = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioPlanMicrocurricular']) {
            this.planMicrocurriculars = response;
            this.semaforoPlanMicrocurricular = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public evaluacionSeguimiento() {
    this.fechaEvaluacionSeguimiento = this.obtenerFecha();
    if (this.evaluacionSeguimiento1 !== "" && this.evaluacionSeguimiento2 !== "" && this.evaluacionSeguimiento3 !== "" && this.evaluacionSeguimiento4 !== "" && this.evaluacionSeguimiento5 !== "") {
      this.service.getEvaluacionSeguimiento(this.evaluacionSeguimiento1, this.evaluacionSeguimiento2, this.evaluacionSeguimiento3, this.evaluacionSeguimiento4, this.evaluacionSeguimiento5, this.fechaPlanMicrocurricular).subscribe(
        response => {
          if (response['promedioEvaluacionSeguimiento'] == 1) {
            this.evaluacionSeguimientos = response;
            this.semaforoEvaluacionSeguimiento = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioEvaluacionSeguimiento']) {
            this.evaluacionSeguimientos = response;
            this.semaforoEvaluacionSeguimiento = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioEvaluacionSeguimiento']) {
            this.evaluacionSeguimientos = response;
            this.semaforoEvaluacionSeguimiento = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioEvaluacionSeguimiento']) {
            this.evaluacionSeguimientos = response;
            this.semaforoEvaluacionSeguimiento = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public gruposInvestigacion() {
    this.fechaGruposInvestigacion = this.obtenerFecha();
    if (this.gruposInvestigacion1 !== "" && this.gruposInvestigacion2 !== "" && this.gruposInvestigacion3 !== "" && this.gruposInvestigacion4 !== "") {
      this.service.getGruposInvestigacion(this.gruposInvestigacion1, this.gruposInvestigacion2, this.gruposInvestigacion3, this.gruposInvestigacion4, this.fechaGruposInvestigacion).subscribe(
        response => {
          if (response['promedioGruposInvestigacion'] == 1) {
            this.gruposInvestigacions = response;
            this.semaforoGruposInvestigacion = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioGruposInvestigacion']) {
            this.gruposInvestigacions = response;
            this.semaforoGruposInvestigacion = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioGruposInvestigacion']) {
            this.gruposInvestigacions = response;
            this.semaforoGruposInvestigacion = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioGruposInvestigacion']) {
            this.gruposInvestigacions = response;
            this.semaforoGruposInvestigacion = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public bibvirrepDig() {
    this.fechaBibvirrepDig = this.obtenerFecha();
    if (this.bibvirrepDig1 !== "" && this.bibvirrepDig2 !== "" && this.bibvirrepDig3 !== "") {
      this.service.getBibVirRepDig(this.bibvirrepDig1, this.bibvirrepDig2, this.bibvirrepDig3, this.fechaBibvirrepDig).subscribe(
        response => {
          if (response['promedioBibvirrepDig'] == 1) {
            this.bibvirrepDigs = response;
            this.semaforoBibvirrepDig = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioBibvirrepDig']) {
            this.bibvirrepDigs = response;
            this.semaforoBibvirrepDig = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioBibvirrepDig']) {
            this.bibvirrepDigs = response;
            this.semaforoBibvirrepDig = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioBibvirrepDig']) {
            this.bibvirrepDigs = response;
            this.semaforoBibvirrepDig = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public movilidadacademica() {
    this.fechaMovilidadacademica = this.obtenerFecha();
    if (this.movilidadacademica1 !== "" && this.movilidadacademica2 !== "" && this.movilidadacademica3 !== "") {
      this.service.getMovilidadAcademica(this.movilidadacademica1, this.movilidadacademica2, this.movilidadacademica3, this.fechaMovilidadacademica).subscribe(
        response => {
          if (response['promedioMovilidadAcademica'] == 1) {
            this.movilidadacademicas = response;
            this.semaforoMovilidadacademica = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioMovilidadAcademica']) {
            this.movilidadacademicas = response;
            this.semaforoMovilidadacademica = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioMovilidadAcademica']) {
            this.movilidadacademicas = response;
            this.semaforoMovilidadacademica = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioMovilidadAcademica']) {
            this.movilidadacademicas = response;
            this.semaforoMovilidadacademica = '../../../../../../assets/images/rojo.png';
          }
        },
      )

    }
  }

  public participacionRedes() {
    this.fechaParticipacionRedes = this.obtenerFecha();
    if (this.participacionRedes1 !== "" && this.participacionRedes2 !== "" && this.participacionRedes3 !== "") {
      this.service.getParticipacionRedes(this.participacionRedes1, this.participacionRedes2, this.participacionRedes3, this.fechaParticipacionRedes).subscribe(
        response => {
          if (response['promedioParticipacionRedes'] == 1) {
            this.participacionRedess = response;
            this.semaforoParticipacionRedes = '../../../../../../assets/images/verde.png';
          }
          if (1 > response['promedioParticipacionRedes']) {
            this.participacionRedess = response;
            this.semaforoParticipacionRedes = '../../../../../../assets/images/amarillo.png';
          }
          if (0.7 > response['promedioParticipacionRedes']) {
            this.participacionRedess = response;
            this.semaforoParticipacionRedes = '../../../../../../assets/images/amarillo.png';
          }
          if (0.35 > response['promedioParticipacionRedes']) {
            this.participacionRedess = response;
            this.semaforoParticipacionRedes = '../../../../../../assets/images/rojo.png';
          }
        },
      )

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
