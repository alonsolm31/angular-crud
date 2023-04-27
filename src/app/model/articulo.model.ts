import { Categoria } from "./categoria.model";
import { Precio } from "./precio.model";

export class Articulo {

    constructor(
        public id: string,
        public clave?: string,
        public categoria?: Categoria,
        public nombre?: string,
        public precios?: [Precio],
        public activo?: boolean) { }
}