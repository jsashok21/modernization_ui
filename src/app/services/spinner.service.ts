import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public spinnerOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  adjustSpinnerDisp(isOn: boolean): void {
    this.spinnerOn.next(isOn);
  }
}
