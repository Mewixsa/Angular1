import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { YevgenComponent } from './yevgen/yevgen.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { Yevgen2Component } from './yevgen2/yevgen2.component';
import { RouterModule, Routes } from '@angular/router';
import { Yevgen3Component } from './yevgen3/yevgen3.component';

const routes: Routes = [
  { path: 'evgen1', component: YevgenComponent },
  { path: 'evgen2', component: Yevgen2Component },
  { path: 'evgen3', component: Yevgen3Component}

];

@NgModule({
  declarations: [
    AppComponent,
    YevgenComponent,
    Yevgen2Component,
    Yevgen3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { 
  
}
