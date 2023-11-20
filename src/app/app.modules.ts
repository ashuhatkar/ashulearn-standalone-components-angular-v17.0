/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : BrowserModule, NgModule, routes, AppComponent
    --*                 : AppRoutingModule, HomeModule
    --* Description     : Represents app module
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
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
