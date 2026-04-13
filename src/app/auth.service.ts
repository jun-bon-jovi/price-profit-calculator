import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  async auth(): Promise<boolean> {
    const hash = window.location.hash.slice(1);
    const data = new TextEncoder().encode(hash);
    const buffer = await crypto.subtle.digest('SHA-256', data);
    const hash_array = Array.from(new Uint8Array(buffer));
    const hashed_token = hash_array
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
      .toLowerCase();
    return environment.hash === hashed_token;
  }
}
