import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [DecimalPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: any;
  @Output() onBuy = new EventEmitter<any>();
  buy(P:any) {
    console.log('Product clicked:', P);
    this.onBuy.emit(P);
  }
}
