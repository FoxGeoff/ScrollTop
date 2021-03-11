import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ScrollTestComponent } from './scroll-test/scroll-test.component';
import { ScrollTest2Component } from './scroll-test2/scroll-test2.component';

const routes: Routes = [
  { path: 'scroll-test2', component: ScrollTest2Component },
  { path: 'scroll-test', component: ScrollTestComponent },
  { path: '', redirectTo: 'scroll-test', pathMatch: 'full' }
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
