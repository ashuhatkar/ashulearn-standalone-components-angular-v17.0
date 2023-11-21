/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : ApplicationConfig, providerRouter, routes, AppRoutingModule
    --*                 : provideClientHydration, provideProtractorTestingSupport, AppModule
    --* Description     : Represents app config
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppModule } from './app.modules';

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    importProvidersFrom([AppModule, AppRoutingModule]),
    provideRouter(ROUTES),
    provideClientHydration()
  ]
};
