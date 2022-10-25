import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { RezervuarasComponent } from './components/rezervuaras/rezervuaras.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { AboutComponent } from './components/about/about.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import {RouterModule, Routes} from "@angular/router";
import { JokeComponent } from './components/joke/joke.component';
import {HttpClientModule} from "@angular/common/http";
import { ExchangeComponent } from './components/exchange/exchange.component';

const appRoutes:Routes=[
  {path:"", component:TaskListComponent},
  {path:"new", component:NewTaskComponent},
  {path:"rezervuaras", component:RezervuarasComponent},
  {path:"about", component:AboutComponent},
  {path:"edit/:id", component:EditTaskComponent},
  {path:"joke", component:JokeComponent},
  {path:"exchange", component:ExchangeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RezervuarasComponent,
    TaskListComponent,
    NewTaskComponent,
    AboutComponent,
    EditTaskComponent,
    NavBarComponent,
    TaskDetailsComponent,
    JokeComponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
