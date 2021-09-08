import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { CajaComponent } from './views/caja/caja.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { TurnoComponent } from './views/turno/turno.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FacturaComponent } from './views/factura/factura.component';
import { OrdenExamenComponent } from './views/orden-examen/orden-examen.component';
import { RegistrarMedicoComponent } from './views/registrar-medico/registrar-medico.component';
import { RegistrarResultadoComponent } from './views/registrar-resultado/registrar-resultado.component';
import { ConsultarResultadoComponent } from './views/consultar-resultado/consultar-resultado.component';
import { ConsultarMedicoComponent } from './views/consultar-medico/consultar-medico.component';
import { EntidadComponent } from './views/entidad/entidad.component';
import { TipoExamenComponent } from './views/tipo-examen/tipo-examen.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePy from '@angular/common/locales/es-PY';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import localeEsAr from '@angular/common/locales/es-AR';
import { PlanSaludComponent } from './views/plan-salud/plan-salud.component';
import { VerOrdenComponent } from './views/ver-orden/ver-orden.component';
import { ResultadoComponent } from './views/resultado/resultado.component';
import { PrioridadComponent } from './views/prioridad/prioridad.component';
import { AgendaMedicoComponent } from './views/agenda-medico/agenda-medico.component';
import { LoginComponent } from './components/login/login.component';




registerLocaleData(localePy, 'es');
registerLocaleData(localePt, 'pt');
registerLocaleData(localeEn, 'en');
registerLocaleData(localeEsAr);

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    CajaComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TurnoComponent,
    UsuarioComponent,
    FacturaComponent,
    OrdenExamenComponent,
    RegistrarMedicoComponent,
    RegistrarResultadoComponent,
    ConsultarResultadoComponent,
    ConsultarMedicoComponent,
    EntidadComponent,
    TipoExamenComponent,
    PlanSaludComponent,
    VerOrdenComponent,
    ResultadoComponent,
    PrioridadComponent,
    AgendaMedicoComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule,
    MatSelectModule,
  
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),


  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],

  bootstrap: [AppComponent]
})
export class AppModule { }