export class Producto{
    id: number = 0;
    descripciones: string = "";
    costo: number = 0;
    precioVenta: number= 0;
    stock: number= 0;
    idUsuario: number=0;
    constructor(id: number,
        descripciones: string,
        costo: number,
        precioVenta: number,
        stock: number,
        idUsuario: number){
            this.id = id;
            this.descripciones = descripciones;
            this.costo = costo;
            this.precioVenta = precioVenta;
            this.stock = stock;
            this.idUsuario = idUsuario;
        }
}

export class Usuario{
    id: number = 0;
    contraseña: string = "";
    nombre: string = "";
    apellido: string = "";
    nombreUsuario: string ="";
    mail: string ="";
    constructor(id: number = 0,
        nombre: string = "",
        apellido: string = "",
        nombreUsuario: string ="",
        contraseña: string = "",
        mail: string =""){
            this.id = id;
            this.contraseña = contraseña;
            this.nombre = nombre;
            this.apellido = apellido;
            this.nombreUsuario = nombreUsuario;
            this.mail = mail;
        }
}

export class Venta{
    id: number = 0;
    comentarios: string = "";
    constructor(id: number,
        comentarios: string){
            this.id = id;
            this.comentarios = comentarios;
        }
}

export class ProductoVendido{
    id: number = 0;
    stock: string = "";
    idProducto: number = 0;
    idVenta: number = 0;
    constructor(id: number,
        stock: string,
        idProducto: number,
        idVenta: number){
            this.id = id;
            this.stock = stock;
            this.idProducto = idProducto;
            this.idVenta = idVenta;
        }
}
