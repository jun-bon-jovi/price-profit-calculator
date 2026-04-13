import { inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import lara from '@primeuix/themes/lara';
import { providePrimeNG } from 'primeng/config';
import { AppComponent } from 'src/app/app.component';
import { routes } from 'src/app/app.routes';
import { AuthService } from 'src/app/auth.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideAppInitializer(async () => {
      const authService = inject(AuthService);
      const authorized = await authService.auth();
      if (!authorized) {
        const elem = document.querySelector('app-root');
        if (elem) {
          elem.innerHTML = '';
        } else {
          document.body.innerHTML = '';
        }
        return new Promise(() => {});
      }
      return Promise.resolve();
    }),
    provideZoneChangeDetection(),
    provideRouter(routes),
    providePrimeNG({ theme: { preset: lara } }),
  ],
}).catch((err) => console.error(err));
