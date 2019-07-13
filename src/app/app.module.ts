import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,    //every browser app must import, 
                      //imports critical service provider,
                      // imports and exports commonModule such as ngIf and ng For
    
    HttpClientModule, // to register http client side service provider.
    RouterModule.forRoot([
      {path:'welcome',component: WelcomeComponent},
      {path:'',redirectTo: 'welcome',pathMatch:'full'},
      {path:'**', redirectTo:'welcome',pathMatch:'full'}

    ]),
    ProductModule //feature module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
