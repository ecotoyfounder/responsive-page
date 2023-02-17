import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ChatsComponent} from "./pages/chats/chats.component";
import {UsersComponent} from "./pages/users/users.component";
import {MyTeamComponent} from "./pages/my-team/my-team.component";
import {AutomatizationsComponent} from "./pages/automatizations/automatizations.component";
import {NeedHelpComponent} from "./pages/need-help/need-help.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "chats", component: ChatsComponent},
  {path: "users", component: UsersComponent},
  {path: "myteam", component: MyTeamComponent},
  {path: "automatizations", component: AutomatizationsComponent},
  {path: "help", component: NeedHelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
