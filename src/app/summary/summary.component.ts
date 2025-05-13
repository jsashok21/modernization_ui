import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
export interface PeriodicElement {
  transaction: string;
  slno: number;
  amount: string;
  balance: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { slno: 1, transaction: 'Gasoline', amount: '$250', balance: '$289,7654' },
  { slno: 2, transaction: 'Donation', amount: '$5', balance: '$289,4654' },
  { slno: 3, transaction: 'Groceries', amount: '$202', balance: '$289,3654' },
  { slno: 4, transaction: 'Credit Card Due', amount: '$1320', balance: '$289,3954' },
  { slno: 5, transaction: 'Insurance', amount: '$389', balance: '$289,764' },
  { slno: 6, transaction: 'Wifi', amount: '$90', balance: '$29,7654' },
  { slno: 7, transaction: 'Utility', amount: '$176', balance: '$289,754' },
  { slno: 8, transaction: 'Hospital', amount: '$300', balance: '$89,7654' },
  { slno: 9, transaction: 'Medical', amount: '$196', balance: '$289,754' },
  { slno: 10, transaction: 'Card EMI', amount: '$678', balance: '$89,7654' },
];
@Component({
  selector: 'app-summary',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  displayedColumns: string[] = ['slno', 'transaction', 'amount', 'balance'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
