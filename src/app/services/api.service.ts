import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {}

  // devuelve un onberservable de productos por medio de una peticion get y la IProduct es un array
  public getAllProducts(sort?: string): Observable<IProduct[]> {
    const sortparams = sort ? `?sort=${sort}` : '';
    return this._httpClient.get<IProduct[]>(`${this.baseUrl}${sortparams}`);
  }

  //devuelve un observable de un solo producto
  public getProduct(id: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  //devuelve un observable de categorias
  public getAllCategory(category: string): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }

  // devuelve un observable de productos por medio de una peticion
  //  post la cual envia al backend un producto para agregarlo
  public newProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(this.baseUrl, product);
  }

  // devuelve un observable de productos por medio de una peticion put la cual actualiza un producto
  public updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this._httpClient.put<IProduct>(
      `${this.baseUrl}/${product.id}`,
      product
    );
  }

  // devuelve un observable de productos por medio de una peticion delete la cual elimina un producto
  public deleteProduct(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(`${this.baseUrl}/${id}`);
  }
}
