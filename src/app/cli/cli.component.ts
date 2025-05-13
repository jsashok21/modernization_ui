import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cli',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
  templateUrl: './cli.component.html',
  styleUrl: './cli.component.scss'
})
export class CliComponent {
  readonly panelOpenState = signal(true);
  private fb = inject(FormBuilder);
  addressData = {
    addrLn1: '1211 LEEWAY DRIVE',
    addrLn2: [''],
    addrZip: ['90011'],
    addrCity: ['San Deigo'],
    addrState: ['California'],
    addrCnty: ['United States']
  }
  cliReqForm: FormGroup = this.fb.group({
    accountNum: ['8765432087354'],
    creditLimit: ['$5000'],
    newCreditLimit: ['$7000'],
    cashLimit: ['$2000']
  });
  ngOnInit(): void {
  }
}
