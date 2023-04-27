import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RestDataSource } from "src/app/api/rest.datasource";
import { Categoria } from "src/app/model/categoria.model";
import { Router, Route } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: "add",
    templateUrl: "./add.component.html"
})
export class AddComponent {
    categoriaForm: boolean = false;
    articuloForm: boolean = false;
    submitted: boolean = false;
    error = {
        exist: false,
        title:'',
        list:[{error:''}]
    }
    
    categoria = {
        nombre:'',
        clave:'',
        fechaCreado:''
    }

    articulo = {
        nombre:'',
        clave:'',
        categoria:'',
        precios: [{precio:''}]
    }

    constructor(private api: RestDataSource, private router: Router, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(p => {
            if(p['type'] == "categoria") {
                this.categoriaForm = true;
            } else {
                this.articuloForm = true;
            }
        })
    }

    submit(form: NgForm) {
        this.submitted = true;
        if (form.valid) {

            if(this.categoriaForm == true){
                this.api.saveCategoria(this.categoria).subscribe(categoria => {
                    this.submitted = false;
                    this.router.navigateByUrl("/store");
                }, err => {
                    this.error.exist = true;
                    this.error.title = err.error.error;
                    this.error.list = err.error.errores
                });
                
            } else {
                this.api.saveArticulo(this.articulo).subscribe(articulo => {
                    this.submitted = false;
                    this.router.navigateByUrl("/store");
                }, err => {
                    this.error.exist = true;
                    this.error.title = err.error.error;
                    this.error.list = err.error.errores
                });
            }

        }
    }
}