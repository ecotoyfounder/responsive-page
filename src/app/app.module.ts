import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { UsersComponent } from './pages/users/users.component';
import { MyTeamComponent } from './pages/my-team/my-team.component';
import { AutomatizationsComponent } from './pages/automatizations/automatizations.component';
import { NeedHelpComponent } from './pages/need-help/need-help.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    UsersComponent,
    MyTeamComponent,
    AutomatizationsComponent,
    NeedHelpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
