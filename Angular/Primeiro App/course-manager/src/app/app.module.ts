import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component'
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent /*Quando a rota direcionar para courses, será exibido o componente de lista de courses.*/
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent /*Informamos o /:id para indicar que passaremos um ID*/
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' /*Quando chamar localhost:4200 ele irá direcionar para o courses*/
      },
      {
        path: '**', component: Error404Component /*Quando não encontrar a URL ele irá redirecionar para...*/
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
