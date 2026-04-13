import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import lara from '@primeuix/themes/lara';
import { providePrimeNG } from 'primeng/config';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection(), provideRouter(routes), providePrimeNG({ theme: { preset: lara } })],
}).catch((err) => console.error(err));
