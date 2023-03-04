import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AboutModule } from './feature/modules/about/about.module';
import { ContactModule } from './feature/modules/contact/contact.module';
import { HomeModule } from './feature/modules/home/home.module';
import { PortfolioModule } from './feature/modules/portfolio/portfolio.module';
import { ServicesModule } from './feature/modules/services/services.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    PortfolioModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
