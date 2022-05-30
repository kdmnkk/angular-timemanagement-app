import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './@shared/components/header/header.component';
import { MenuComponent } from './@shared/components/menu/menu.component';
import { TablesComponent } from './@shared/components/tables/tables.component';
import { CalendarComponent } from './@shared/components/calendar/calendar.component';
import { HomePageComponent } from './@shared/components/home-page/home-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {TodoApiService} from "./@shared/components/services/todo.api.service";
import {TodoService} from "./@shared/components/services/todo.service";
import { SharedModule } from 'src/app/@shared/shared.module';
import { TodoModule } from 'src/app/@todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TablesComponent,
    CalendarComponent,
    HomePageComponent,
  ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
    SharedModule,
    TodoModule
	],
  providers: [TodoApiService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
