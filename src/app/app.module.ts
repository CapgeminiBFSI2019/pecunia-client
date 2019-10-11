import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { UpdateNameComponent } from './account/update-name/update-name.component';
import { UpdateContactComponent } from './account/update-contact/update-contact.component';
import { UpdateAddressComponent } from './account/update-address/update-address.component';
import { DeleteAccountComponent } from './account/delete-account/delete-account.component';
import { CreditSlipComponent } from './transaction/credit-slip/credit-slip.component';
import { CreditChequeComponent } from './transaction/credit-cheque/credit-cheque.component';
import { SlipChequeComponent } from './transaction/slip-cheque/slip-cheque.component';
import { DebitChequeComponent } from './transaction/debit-cheque/debit-cheque.component';
import { DebitSlipComponent } from './transaction/debit-slip/debit-slip.component';
import { AccountSummaryComponent } from './passbook/account-summary/account-summary.component';
import { PassbookUpdateComponent } from './passbook/passbook-update/passbook-update.component';
import { LoanRequestComponent } from './loan/loan-request/loan-request.component';
import { LoanDisbursalComponent } from './loan/loan-disbursal/loan-disbursal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddAccountComponent,
    UpdateNameComponent,
    UpdateContactComponent,
    UpdateAddressComponent,
    DeleteAccountComponent,
    CreditSlipComponent,
    CreditChequeComponent,
    SlipChequeComponent,
    DebitChequeComponent,
    DebitSlipComponent,
    AccountSummaryComponent,
    PassbookUpdateComponent,
    LoanRequestComponent,
    LoanDisbursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
