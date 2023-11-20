import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppModule } from './app.modules';

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    importProvidersFrom([AppModule, AppRoutingModule]),
    provideRouter(routes),
    provideClientHydration()
  ]
};
