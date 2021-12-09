import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { ShoppingCart } from '../../interfaces/carrito-de-compras';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required], []],
    apellido: ["", [Validators.required], []],
    tarjeta: ["", [Validators.required], []],
    fechaExp: ["", [Validators.required], []],
    cvv: ["", [Validators.required], []],
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Dominic",
      apellido: "Boquin",
      tarjeta: "5205919850227771",
      fechaExp: "08/2024",
      cvv: "944",
    })
  }

  procesarOrden() {
    const idCliente = this.authService.usuarioActual._id
    const datosTarjeta = {
      tarjeta:this.miFormulario.get("tarjeta")?.value.slice(0,-3)+"***",
      cvv: this.miFormulario.get("cvv")?.value
    };
    const lnglat = JSON.parse(localStorage.getItem("lnglat") || "")
    const localStorageProductos = JSON.parse(localStorage.getItem("shoppingcart")!)
    const productos = localStorageProductos.map((element: ShoppingCart) => {
      const data = {
        idProduct: element._id,
        idCompany: element.idCompany,
        cantidad: element.cantidad,
      }
      return data
    });
    const orden = {
      idCliente,
      productos,
      datosTarjeta,
      lnglat
    }
    console.log(orden)
  }
}
