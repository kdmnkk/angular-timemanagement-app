import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import {HomePageComponent} from "./components/home-page/home-page.component";
import {TablesComponent} from "./components/tables/tables.component";
import {TodoComponent} from "./components/todo/todo.component";
import {CalendarComponent} from "./components/calendar/calendar.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'calendar', component: CalendarComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
