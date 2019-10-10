import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';

const route: Routes = [
  { path: "example1", component: Example1Component },
  { path: "example2", component: Example2Component },
  { path: "example3", component: Example3Component }
]

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component
  ],
  imports: [
    RouterModule.forRoot(route),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
