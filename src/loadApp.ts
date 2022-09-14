import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { FundsModule } from './appFunds/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export const mountSidebar = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
};
export const mountFunds = () => {
  platformBrowserDynamic()
    .bootstrapModule(FundsModule)
    .catch(err => console.error(err));
};
