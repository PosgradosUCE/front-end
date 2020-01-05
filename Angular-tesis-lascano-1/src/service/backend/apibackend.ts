import {Injectable} from "@angular/core";
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Afp} from "../../models/afp";
import {catchError, map} from 'rxjs/operators';
import {Cpa} from "../../models/cpa";
import {Acp} from "../../models/acp";
import {Pv} from "../../models/pv";
import {Tid} from "../../models/tid";
import {Ep} from "../../models/ep";
import {Tpm} from "../../models/tpm";
import {Tt} from "../../models/tt";
import {Idi} from "../../models/idi";
import {Cooprd} from "../../models/cooprd";
import {Iaa} from "../../models/iaa";
import {ContextoEv} from "../../models/contextoEv";
import {GestionAcademica} from "../../models/gestionAcademica";
import {EstructuraPrograma} from "../../models/estructuraPrograma";
import {PoliticasAdmision} from "../../models/politicasAdmision";
import {PoliticasTitulacion} from "../../models/politicasTitulacion";
import {SistemasBecas} from "../../models/SistemasBecas";
import {SeguimientoGraduados} from "../../models/seguimientoGraduados";
import {PerfilEgreso} from "../../models/perfilEgreso";
import {PlanEstudios} from "../../models/planEstudios";
import {PlanMicrocurricular} from "../../models/planMicrocurricular";
import {EvaluacionSeguimiento} from "../../models/evaluacionSeguimiento";
import {GruposInvestigacion} from "../../models/gruposInvestigacion";
import {BibvirrepDig} from "../../models/bibvirrepDig";
import {MovilidadAcademica} from "../../models/movilidadAcademica";
import {ParticipacionRedes} from "../../models/participacionRedes";
import {Router} from '@angular/router';
import {AuthService} from '../../app/usuarios/auth.service';


@Injectable({
  providedIn: 'root',
})
export class Apibackend {
  private academiaCuerpoAfp: string = "api/academia/cuerpoacademico/afp";
  private academiaCuerpoCpa: string = "api/academia/cuerpoacademico/cpa";
  private academiaCuerpoAcp: string = "api/academia/cuerpoacademico/acp";
  private academiaCuerpoPv: string = "api/academia/cuerpoacademico/pv";
  private carreradocenteTid: string = "api/academia/carreradocente/tid";
  private eficienciacademicaEp: string = "api/academia/eficienciacademica/ep";
  private eficienciacademicaTpm: string = "api/academia/carreradocente/tpm";
  private eficienciacademicaTt: string = "api/academia/carreradocente/tt";
  private condicionesIdi: string = "api/idi/condiciones/idi";
  private condicionesCooprd: string = "api/idi/condiciones/cooprd";
  private recursodesaprendizajeIaa: string = "api/ambienteinstitucional/recursosaprendizaje/iaa";


  // cualitativos
  private contextoEv: string = "api/organizacion/constitucion/contexto/contextev";
  private gestionacademica: string = "api/organizacion/constitucion/gestionacademica";
  private estructuraprograma: string = "api/organizacion/constitucion/estructuraprograma";
  private politicasadmision: string = "api/organizacion/politicasprocedimientos/politicasadmision";
  private politicastitulacion: string = "api/organizacion/politicasprocedimientos/politicastitulacion";
  private sistemasbecas: string = "api/organizacion/politicasprocedimientos/sistemasbecas";
  private seguimientograduados: string = "api/organizacion/politicasprocedimientos/seguimientograduados";
  private perfilegreso: string = "api/programaacademico/design/perfilegreso";
  private planestudios: string = "api/programaacademico/design/planestudios";
  private planmicrocurricular: string = "api/programaacademico/implementacion/planmicrocurricular";
  private evaluacionseguimiento: string = "api/programaacademico/implementacion/evaluacionseguimiento";
  private gruposinvesstigacion: string = "api/idi/condiciones/gruposinvestigacion";
  private bibvirrepdigg: string = "api/ambienteinstitucional/recursosaprendizaje/bibvirrepdig";
  private movilidadacademica: string = "api/ambienteinstitucional/redescooperacion/movilidadacademica";
  private participacionredes: string = "api/ambienteinstitucional/redescooperacion/participacioredes";

  //private origin: string = 'https://posgrados-fing.herokuapp.com';
   private origin: string = 'http://localhost:8080';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
  }

  private agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  private isNoAutorizado(e): boolean {
    if (e.status == 401) {
      if (this.authService.isAuthenticated()) {
        this.authService.logout();
      }
      this.router.navigate(['/login'])
      return true;
    }
    if (e.status == 403) {
      alert("no autorizado")
      this.router.navigate(['/posgrado/inicio']);
      return true;
    }
    return false;
  }

  getAfp(pfa, tp, date): Observable<any> {
    let param1 = pfa;
    let param2 = tp;
    let param3 = date;
    console.log(param3)
    return this.http.get<any>(`${this.origin + '/' + this.academiaCuerpoAfp + '/' + param1 + '/' + param2 + '/' + param3}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(afp => afp as Afp),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),

    );
  }

  getCpa(phdl, mscl, phd, msc, tp, date): Observable<any> {
    let param1 = phdl;
    let param2 = mscl;
    let param3 = phd;
    let param4 = msc;
    let param5 = tp;
    let param6 = date;
    return this.http.get<any>(`${this.origin + '/' + this.academiaCuerpoCpa + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5 + '/' + param6}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(cpa => cpa as Cpa),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    );
  }

  getAcp(ndad, tp, date): Observable<any> {
    let param1 = ndad;
    let param2 = tp;
    let param3 = date;
    return this.http.get<any>(`${this.origin + '/' + this.academiaCuerpoAcp + '/' + param1 + '/' + param2 + '/' + param3}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(acp => acp as Acp),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    );
  }

  getPv(mscv, phdv, tp, date): Observable<any> {
    let param1 = mscv;
    let param2 = phdv;
    let param3 = tp;
    let param4 = date;

    return this.http.get<any>(`${this.origin + '/' + this.academiaCuerpoPv + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(pv => pv as Pv),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )
  }

  getTid(ptc, tp, date): Observable<any> {
    let param1 = ptc;
    let param2 = tp;
    let param3 = date;
    return this.http.get<any>(`${this.origin + '/' + this.carreradocenteTid + '/' + param1 + '/' + param2 + '/' + param3}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(tid => tid as Tid),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )
  }

  getEp(ne, tp, date): Observable<any> {
    let param1 = ne;
    let param2 = tp;
    let param3 = date;
    return this.http.get<any>(`${this.origin + '/' + this.eficienciacademicaEp + '/' + param1 + '/' + param2 + '/' + param3}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(ep => ep as Ep),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )
  }

  getTpm(ter, te, date): Observable<any> {
    let param1 = ter;
    let param2 = te;
    let param3 = date;
    return this.http.get<any>(`${this.origin + '/' + this.eficienciacademicaTpm + '/' + param1 + '/' + param2 + '/' + param3}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(tpm => tpm as Tpm),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )
  }

  getTt(tet, te, date): Observable<any> {
    let param1 = tet;
    let param2 = te;
    let param3 = date;
    return this.http.get<any>(`${this.origin + '/' + this.eficienciacademicaTt + '/' + param1 + '/' + param2 + '/' + param3}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(tt => tt as Tt),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )
  }

  getIdi(pp, pe, tp, date): Observable<any> {
    let param1 = pp;
    let param2 = pe;
    let param3 = tp;
    let param4 = date;
    return this.http.get<any>(`${this.origin + '/' + this.condicionesIdi + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(idi => idi as Idi),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )
  }

  getCooprd(tacl, tac, date): Observable<any> {
    let param1 = tacl;
    let param2 = tac;
    let param3 = date;
    return this.http.get<any>(`${this.origin + '/' + this.condicionesCooprd + '/' + param1 + '/' + param2 + '/' + param3}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(cooprd => cooprd as Cooprd),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )
  }

  getIaa(fun, eq, dis, date): Observable<any> {
    let param1 = fun;
    let param2 = eq;
    let param3 = dis;
    let param4 = date;
    return this.http.get<any>(`${this.origin + '/' + this.recursodesaprendizajeIaa + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(iaa => iaa as Iaa),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )
  }

  getContextoEv(context1, context2, context3, context4, context5, context6, context7, date): Observable<any> {
    let param1 = context1;
    let param2 = context2;
    let param3 = context3;
    let param4 = context4;
    let param5 = context5;
    let param6 = context6;
    let param7 = context7;
    let param8 = date;
    return this.http.get<any>(`${this.origin + '/' + this.contextoEv + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5 + '/' + param6 + '/' + param7 + '/' + param8}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(contextoev => contextoev as ContextoEv),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )
  }

  getGestionAcademica(gestionAcademica1, gestionAcademica2, gestionAcademica3, gestionAcademica4, gestionAcademica5, gestionAcademica6, date): Observable<any> {
    let param1 = gestionAcademica1;
    let param2 = gestionAcademica2;
    let param3 = gestionAcademica3;
    let param4 = gestionAcademica4;
    let param5 = gestionAcademica5;
    let param6 = gestionAcademica6;
    let param7 = date;
    return this.http.get<any>(`${this.origin + '/' + this.gestionacademica + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5 + '/' + param6 + '/' + param7}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(gestionacademica => gestionacademica as GestionAcademica),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )
  }

  getEstructuraprograma(estructuraPrograma1, estructuraPrograma2, estructuraPrograma3, estructuraPrograma4, estructuraPrograma5, date): Observable<any> {
    let param1 = estructuraPrograma1;
    let param2 = estructuraPrograma2;
    let param3 = estructuraPrograma3;
    let param4 = estructuraPrograma4;
    let param5 = estructuraPrograma5;
    let param6 = date;
    return this.http.get<any>(`${this.origin + '/' + this.estructuraprograma + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5 + '/' + param6}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(estructuraPrograma => estructuraPrograma as EstructuraPrograma),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getPoliticasadmision(politicasAdmision1, politicasAdmision2, politicasAdmision3, politicasAdmision4, date): Observable<any> {
    let param1 = politicasAdmision1;
    let param2 = politicasAdmision2;
    let param3 = politicasAdmision3;
    let param4 = politicasAdmision4;
    let param5 = date;
    return this.http.get<any>(`${this.origin + '/' + this.politicasadmision + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(politicasAdmision => politicasAdmision as PoliticasAdmision),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getPoliticasTitulacion(politicasTitulacion1, politicasTitulacion2, politicasTitulacion3, politicasTitulacion4, date): Observable<any> {
    let param1 = politicasTitulacion1;
    let param2 = politicasTitulacion2;
    let param3 = politicasTitulacion3;
    let param4 = politicasTitulacion4;
    let param5 = date;
    return this.http.get<any>(`${this.origin + '/' + this.politicastitulacion + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(politicasTitulacion => politicasTitulacion as PoliticasTitulacion),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getSistemasBecas(sistemasBecas1, sistemasBecas2, sistemasBecas3, sistemasBecas4, date): Observable<any> {
    let param1 = sistemasBecas1;
    let param2 = sistemasBecas2;
    let param3 = sistemasBecas3;
    let param4 = sistemasBecas4;
    let param5 = date;
    return this.http.get<any>(`${this.origin + '/' + this.sistemasbecas + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(sistemasBecas => sistemasBecas as SistemasBecas),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getSeguimientoGraduados(seguimientoGraduados1, seguimientoGraduados2, seguimientoGraduados3, seguimientoGraduados4, seguimientoGraduados5, seguimientoGraduados6, date): Observable<any> {
    let param1 = seguimientoGraduados1;
    let param2 = seguimientoGraduados2;
    let param3 = seguimientoGraduados3;
    let param4 = seguimientoGraduados4;
    let param5 = seguimientoGraduados5;
    let param6 = seguimientoGraduados6;
    let param7 = date;
    return this.http.get<any>(`${this.origin + '/' + this.seguimientograduados + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5 + '/' + param6 + '/' + param7}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(seguimientoGraduados => seguimientoGraduados as SeguimientoGraduados),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getPerfilEgreso(perfilEgreso1, perfilEgreso2, perfilEgreso3, perfilEgreso4, perfilEgreso5, perfilEgreso6, date): Observable<any> {
    let param1 = perfilEgreso1;
    let param2 = perfilEgreso2;
    let param3 = perfilEgreso3;
    let param4 = perfilEgreso4;
    let param5 = perfilEgreso5;
    let param6 = perfilEgreso6;
    let param7 = date;
    return this.http.get<any>(`${this.origin + '/' + this.perfilegreso + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5 + '/' + param6 + '/' + param7}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(perfilEgreso => perfilEgreso as PerfilEgreso),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getPlanEstudios(planEstudios1, planEstudios2, planEstudios3, planEstudios4, planEstudios5, date): Observable<any> {
    let param1 = planEstudios1;
    let param2 = planEstudios2;
    let param3 = planEstudios3;
    let param4 = planEstudios4;
    let param5 = planEstudios5;
    let param6 = date;
    return this.http.get<any>(`${this.origin + '/' + this.planestudios + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5 + '/' + param6}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(planEstudios => planEstudios as PlanEstudios),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getPlanMicrocurricular(planMicrocurricular1, planMicrocurricular2, planMicrocurricular3, planMicrocurricular4, date): Observable<any> {
    let param1 = planMicrocurricular1;
    let param2 = planMicrocurricular2;
    let param3 = planMicrocurricular3;
    let param4 = planMicrocurricular4;
    let param5 = date;
    return this.http.get<any>(`${this.origin + '/' + this.planmicrocurricular + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(planMicrocurricular => planMicrocurricular as PlanMicrocurricular),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getEvaluacionSeguimiento(evaluacionSeguimiento1, evaluacionSeguimiento2, evaluacionSeguimiento3, evaluacionSeguimiento4, evaluacionSeguimiento5, date): Observable<any> {
    let param1 = evaluacionSeguimiento1;
    let param2 = evaluacionSeguimiento2;
    let param3 = evaluacionSeguimiento3;
    let param4 = evaluacionSeguimiento4;
    let param5 = evaluacionSeguimiento5;
    let param6 = date;
    return this.http.get<any>(`${this.origin + '/' + this.evaluacionseguimiento + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5 + '/' + param6}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(evaluacionSeguimiento => evaluacionSeguimiento as EvaluacionSeguimiento),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getGruposInvestigacion(gruposInvestigacion1, gruposInvestigacion2, gruposInvestigacion3, gruposInvestigacion4, date): Observable<any> {
    let param1 = gruposInvestigacion1;
    let param2 = gruposInvestigacion2;
    let param3 = gruposInvestigacion3;
    let param4 = gruposInvestigacion4;
    let param5 = date;
    return this.http.get<any>(`${this.origin + '/' + this.gruposinvesstigacion + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '/' + param5}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(gruposInvestigacion => gruposInvestigacion as GruposInvestigacion),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getBibVirRepDig(bibvirrepDig1, bibvirrepDig2, bibvirrepDig3, date): Observable<any> {
    let param1 = bibvirrepDig1;
    let param2 = bibvirrepDig2;
    let param3 = bibvirrepDig3;
    let param4 = date;
    return this.http.get<any>(`${this.origin + '/' + this.bibvirrepdigg + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(bibvirrepDig => bibvirrepDig as BibvirrepDig),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getMovilidadAcademica(movilidadAcademica1, movilidadAcademica2, movilidadAcademica3, date): Observable<any> {
    let param1 = movilidadAcademica1;
    let param2 = movilidadAcademica2;
    let param3 = movilidadAcademica3;
    let param4 = date;
    return this.http.get<any>(`${this.origin + '/' + this.movilidadacademica + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(movilidadAcademica => movilidadAcademica as MovilidadAcademica),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }

  getParticipacionRedes(participacionRedes1, participacionRedes2, participacionRedes3, date): Observable<any> {
    let param1 = participacionRedes1;
    let param2 = participacionRedes2;
    let param3 = participacionRedes3;
    let param4 = date;
    return this.http.get<any>(`${this.origin + '/' + this.participacionredes + '/' + param1 + '/' + param2 + '/' + param3 + '/' + param4}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      map(participacionRedes => participacionRedes as ParticipacionRedes),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

      }),
    )

  }
}
