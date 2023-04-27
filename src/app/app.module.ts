import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './components/store/store.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AddComponent } from './components/add/add.component';
import { FormsModule } from "@angular/forms";
import { EditComponent } from './components/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent },
      { path: "add", component: AddComponent },
      { path: "edit", component: EditComponent },
      { path: "**", redirectTo: "/store" }
  ]),
  FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
