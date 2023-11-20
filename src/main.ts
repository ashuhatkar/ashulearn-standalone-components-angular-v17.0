/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : bootstrapApplication, appConfig
    --*                 : AppComponent
    --* Description     : Represents main
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
