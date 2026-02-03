import { Routes } from '@angular/router';
import { ConsultarMatriculaVehicular } from './pages/consultar-matricula-vehicular/consultar-matricula-vehicular';
import { RegistroMatriculaVehicular } from './pages/registro-matricula-vehicular/registro-matricula-vehicular';

export const routes: Routes = [
  {
    path: 'listado-matricula-vehicular',
    component: ConsultarMatriculaVehicular,
    title: 'Listado de matriculas vehiculares'
  },
  {
    path: 'registro-matricula-vehicular',
    component: RegistroMatriculaVehicular,
    title: 'Registro de matriculas vehiculares'
  }
];
