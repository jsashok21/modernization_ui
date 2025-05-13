import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pin',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
  templateUrl: './pin.component.html',
  styleUrl: './pin.component.scss'
})
export class PinComponent {
  readonly panelOpenState = signal(true);
  private fb = inject(FormBuilder);
  pinForm: FormGroup = this.fb.group({
    accountNum: ['8765432087354'],
    oldPin: ['*******'],
    newPin: ['']
  });
}
