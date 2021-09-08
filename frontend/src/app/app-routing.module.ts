import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaMedicoComponent } from './views/agenda-medico/agenda-medico.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { CajaComponent } from './views/caja/caja.component';
import { ConsultarMedicoComponent } from './views/consultar-medico/consultar-medico.component';
import { EntidadComponent } from './views/entidad/entidad.component';
import { FacturaComponent } from './views/factura/factura.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdenExamenComponent } from './views/orden-examen/orden-examen.component';
import { PlanSaludComponent } from './views/plan-salud/plan-salud.component';
import { PrioridadComponent } from './views/prioridad/prioridad.component';
import { RegistrarMedicoComponent } from './views/registrar-medico/registrar-medico.component';
import { RegistrarResultadoComponent } from './views/registrar-resultado/registrar-resultado.component';
import { ResultadoComponent } from './views/resultado/resultado.component';
import { TipoExamenComponent } from './views/tipo-examen/tipo-examen.component';
import { TurnoComponent } from './views/turno/turno.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { VerOrdenComponent } from './views/ver-orden/ver-orden.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'caja', component: CajaComponent},
  {path: 'turno', component: TurnoComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'orden-examen', component: OrdenExamenComponent},
  {path: 'registrar-medico', component: RegistrarMedicoComponent},
  {path: 'entidad', component: EntidadComponent},
  {path: 'plan-salud', component: PlanSaludComponent},
  {path: 'tipo-examen', component: TipoExamenComponent},
  {path: 'consultar-medico', component: ConsultarMedicoComponent},
  {path: 'ver-orden', component: VerOrdenComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: 'prioridad', component: PrioridadComponent},
  {path: 'agenda-medico', component: AgendaMedicoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrar-resultado', component: RegistrarResultadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
