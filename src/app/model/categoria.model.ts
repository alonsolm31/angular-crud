import { Injectable } from "@angular/core";

export class Categoria {

    constructor(
        public id: string,
        public clave?: string,
        public fechaCreado?: number,
        public nombre?: string,
        public activo?: boolean,) { }
}