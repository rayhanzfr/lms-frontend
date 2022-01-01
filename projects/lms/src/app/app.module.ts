import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { LoginModule } from './pages/login/login.module';
import { MainbarComponent } from './pages/mainbar/mainbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from 'projects/core/src/app/services/http-interceptor/http-interceptor.service';
import { TransactionOutViewComponent } from './pages/non-admin/transaction-out/transaction-out-view/transaction-out-view.component';
import { TransactionOutDetailViewComponent } from './pages/non-admin/transaction-out/transaction-out-detail-view/transaction-out-detail-view.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    TransactionOutViewComponent,
    TransactionOutDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
