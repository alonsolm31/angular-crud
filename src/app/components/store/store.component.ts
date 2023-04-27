import { Component } from "@angular/core";
import { Categoria } from "../../model/categoria.model";
import { Articulo } from "../../model/articulo.model";
import { RestDataSource } from "src/app/api/rest.datasource";
import { Observable } from "rxjs";
@Component({
    selector: "store",
    templateUrl: "./store.component.html"
})
export class StoreComponent {

    categorias!: [Categoria];
    articulos!: [Articulo];

    articulosTable: boolean = true;

    constructor(private api: RestDataSource) {
        this.getCategorias();
        this.getArticulos();
     }

    getCategorias(): any {
        return this.api.getCategorias().subscribe(response => {
            this.categorias = response.data;
        });
    }

    getArticulos(): any {
        return this.api.getArticulos().subscribe(response => {
            this.articulos = response.data;
        });
    }

    deleteArticulo(id: string) {
        this.api.deleteArticulo(id).subscribe(() => {
            window.location.reload();
        });   
    }

    deleteCategoria(id: string) {
        this.api.deleteCategoria(id).subscribe(() => {
            window.location.reload();
        });   
    }

}