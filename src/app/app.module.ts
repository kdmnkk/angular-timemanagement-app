import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { TablesComponent } from './components/tables/tables.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TitleComponent } from './components/title/title.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import { AddTaskFormComponent } from './components/todo/add-task-form/add-task-form.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TodoComponent,
    TablesComponent,
    CalendarComponent,
    HomePageComponent,
    TitleComponent,
    AddTaskFormComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
