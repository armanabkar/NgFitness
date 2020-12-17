import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiService {
  loadingStateChanged = new Subject<boolean>();

  constructor(private snackbar: MatSnackBar) {}

  showSnackbar(message: string, action: boolean | any, duration: number): void {
    this.snackbar.open(message, action, { duration });
  }
}
