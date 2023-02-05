import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { MathComponent } from './Components/math/math.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { OnHoverChangeDirective } from './Directives/on-hover-change.directive';
import { DefaultImagePipe } from './Pipes/default-image.pipe';
import { OrdersComponent } from './Components/orders/orders.component';
import { FilterArrayPipe } from './Pipes/filter-array.pipe';
import { ImgScaleDirective } from './Directives/img-scale.directive';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    MoviesComponent,
    HomeComponent,
    ProductDetailsComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductsComponent,
    OnHoverChangeDirective,
    DefaultImagePipe,
    FilterArrayPipe,
    ImgScaleDirective,
    MathComponent,
    PageNotFoundComponent,
    MovieDetailsComponent,
    OrdersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
