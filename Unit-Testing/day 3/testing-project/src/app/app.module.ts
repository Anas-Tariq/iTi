import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { FormsModule } from '@angular/forms';
import { MasterService } from './services/master.service';
import { UserserviceService } from './services/userservice.service';

@NgModule({
  declarations: [AppComponent, TitlecasePipe, UserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
