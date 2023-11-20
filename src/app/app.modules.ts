import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./admin/views/home/home.module";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    routes,
    HomeModule
  ],
  providers: []
})
export class AppModule {}
