import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  private fb = inject(FormBuilder);
  addressData = {
    addrLn1: '1211 LEEWAY DRIVE',
    addrLn2: [''],
    addrZip: ['90011'],
    addrCity: ['San Deigo'],
    addrState: ['California'],
    addrCnty: ['United States']
  }
  firstFormGroup: FormGroup = this.fb.group({ fullName: [''] });
  secondFormGroup: FormGroup = this.fb.group({
    addrLn1: [''],
    addrLn2: [''],
    addrZip: [''],
    addrCity: [''],
    addrState: [''],
    addrCnty: ['']
  });
  ngOnInit(): void {
    this.firstFormGroup.patchValue({ fullName: 'Ashok, Jane Sharmila' });
    this.secondFormGroup.patchValue(this.addressData);
  }
}
