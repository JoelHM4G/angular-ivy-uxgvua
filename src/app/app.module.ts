import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  imports: [BrowserModule, HeroesModule, ContadorModule, DbzModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
