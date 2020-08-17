import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductFormComponent } from './components/product-form/product-form.component';
import { GroupFormComponent } from './components/group-form/group-form.component';
import { BulmaFormComponent } from './components/bulma-form/bulma-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent,
    FormComponent,
    ProductFormComponent,
    GroupFormComponent,
    BulmaFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
