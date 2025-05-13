import { Component, Directive, ElementRef, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-sec-v',
  imports: [MatExpansionModule, MatInput, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './sec-v.component.html',
  styleUrl: './sec-v.component.scss'
})
export class SecVComponent {
  readonly panelOpenState = signal(true);
  secVForm: FormGroup;
  constructor(private fb: FormBuilder, private spinnySvc: SpinnerService, private route: Router) {
    this.secVForm = this.fb.group({
      fname: ['Jane'],
      lname: ['Ashok'],
      mname: ['Sharmila'],
      dob: ['1925-04-21'],
      ssn: ['34563662'],
      phone: ['+1-(766)-567-274'],
      city: ['San Deigo'],
      state: ['California'],
      country: ['United States'],
      occupation: ['Engineer'],
    });
  }
  gotoRqstCreation(): void {
    this.spinnySvc.adjustSpinnerDisp(true);
    setTimeout(() => {
      this.spinnySvc.adjustSpinnerDisp(false);
      this.route.navigate(['reqEntry']);
    }, 10000);
  }
}
@Directive({
  selector: 'mat-form-field'
})
export class BackgroundDirective{
  constructor(private ele: ElementRef){
    console.log(ele);
  }
}
