import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from "./../model/categoria.model"
import { Articulo } from "./../model/articulo.model"

@Injectable({
    providedIn: 'root'
  })
export class RestDataSource {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = 'http://visorus.ddns.net:8095/';
    }

    getCategorias(): Observable<any> {
        return this.http.get<Categoria[]>(this.baseUrl + "categoria");
    }

    getArticulos(): Observable<any> {
        return this.http.get<Articulo[]>(this.baseUrl + "articulo");
    }

    getArticulo(id: string): Observable<any> {
        return this.http.get<Articulo>(this.baseUrl + "articulo/"+ id);
    }

    getCategoria(id: string): Observable<any> {
        return this.http.get<Categoria>(this.baseUrl + "categoria/"+ id);
    }

    saveCategoria(categoria: any): Observable<any> {
        return this.http.post<Categoria[]>(this.baseUrl + "categoria", categoria);
    }

    saveArticulo(articulo: any): Observable<any> {
        return this.http.post<Articulo[]>(this.baseUrl + "articulo", articulo);
    }

    editCategoria(id: string, categoria: any): Observable<any> {
        return this.http.post<Categoria[]>(this.baseUrl + "categoria", categoria);
    }

    editArticulo(id: string, articulo: any): Observable<any> {
        return this.http.put<Articulo>(this.baseUrl + "articulo/"+ id, articulo);
    }

    deleteArticulo(id: string): Observable<any> {
        return this.http.delete<Articulo>(this.baseUrl + "articulo/"+ id);
    }

    deleteCategoria(id: string): Observable<any> {
        return this.http.delete<Categoria>(this.baseUrl + "categoria/"+ id);
    }

}
