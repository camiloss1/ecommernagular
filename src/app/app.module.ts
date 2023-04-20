import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserGateway } from './domain/models/User/gateway/user-gateway';
import { UsersService } from './infraestructura/driven-adapter/services/users.service';
import { DefaultModule } from './UI/layouts/default/default.module';
import { OutsideModule } from './UI/layouts/outside/outside.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    OutsideModule,
    HttpClientModule
    
  ],
  providers: [
    {provide: UserGateway, useClass:UsersService}
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
