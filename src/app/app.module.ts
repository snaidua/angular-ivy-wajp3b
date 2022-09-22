import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './router.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppService, HttpService } from './services';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RoutingModule],
  declarations: [AppComponent, HelloComponent],
  providers: [AppService, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
