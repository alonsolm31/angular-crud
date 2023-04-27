import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RestDataSource } from "src/app/api/rest.datasource";
import { Categoria } from "src/app/model/categoria.model";
import { Router, Route } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: "edit",
    templateUrl: "./edit.component.html"
})
export class EditComponent implements OnInit{
    categoriaForm: boolean = false;
    articuloForm: boolean = false;
    submitted: boolean = false;
    id: string = '';
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
        categoria: {clave:''},
        precios: [{precio:''}],
        activo: true
    }

    constructor(private api: RestDataSource, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(p => {
            if(p['type'] == "categoria") {
                this.categoriaForm = true;
                this.api.getCategoria(p['id']).subscribe(a => {
                    this.categoria = a;
                });
            } else {
                this.articuloForm = true;
                this.api.getArticulo(p['id']).subscribe(a => {
                    this.articulo = a;
                });
            }
            this.id = p['id'] 
        })
    }

    submit(form: NgForm) {
        this.submitted = true;
        if (form.valid) {

            if(this.categoriaForm == true){
                this.api.editCategoria(this.id, this.categoria).subscribe(categoria => {
                    this.submitted = false;
                    this.router.navigateByUrl("/store");
                }, err => {
                    this.error.exist = true;
                    this.error.title = err.error.error;
                    this.error.list = err.error.errores;
                });
            } else {
                this.api.editArticulo(this.id, this.articulo).subscribe(articulo => {
                    this.submitted = false;
                    this.router.navigateByUrl("/store");
                }, err => {
                    this.error.exist = true;
                    this.error.title = err.error.error;
                    this.error.list = err.error.errores;
                });
            }

        }
    }
}