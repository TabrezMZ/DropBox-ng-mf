import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopageComponent } from './nopage/nopage.component';
import { MyDataService } from './my-data.service';
import { NgxExplorerModule, DataService, NgeExplorerConfig, ConfigProvider } from 'ngx-explorer';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NopageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxExplorerModule
  ],
  providers: [{ provide: DataService, useClass: MyDataService },
    {
      provide: ConfigProvider, useValue: new ConfigProvider({
        homeNodeName: 'Home'
      } as NgeExplorerConfig)
    }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
