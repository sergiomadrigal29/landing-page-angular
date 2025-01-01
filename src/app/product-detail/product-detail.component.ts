import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { IProduct } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | undefined;
  loanding = true;
  color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params) => {
        this._apiService.getProduct(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.color = (this.product?.price as number) > 5 ? 'red' : 'green';
            this.loanding = false;
          },
          error: (error: any) => {
            console.error('Error al obtener el producto', error);
            this.loanding = false;
          },
        });
      },
      error: (error: any) => {
        console.error('Error al obtener el producto', error);
      },
    });
  }
}
