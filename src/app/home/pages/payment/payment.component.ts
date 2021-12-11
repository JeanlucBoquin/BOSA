import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { ShoppingCart } from '../../interfaces/carrito-de-compras';
import { Order } from '../../interfaces/orden';
import { HomeService } from '../../home.service';
import Swal from 'sweetalert2';

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
    private authService: AuthService,
    private homeService: HomeService
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
    if (
      localStorage.getItem("lnglat") &&
      localStorage.getItem("shoppingcart") &&
      localStorage.getItem("direccion")
    ) {
      const idCliente = this.authService.usuarioActual._id
      const datosTarjeta = {
        tarjeta: this.miFormulario.get("tarjeta")?.value.slice(0, -3) + "***",
        cvv: this.miFormulario.get("cvv")?.value
      };
      const lnglat = JSON.parse(localStorage.getItem("lnglat")!)
      const direccion = JSON.parse(localStorage.getItem("direccion")!)
      const localStorageProductos = JSON.parse(localStorage.getItem("shoppingcart")!)
      const productos = localStorageProductos.map((element: ShoppingCart) => {
        const data = {
          idProducto: element._id,
          idEmpresa: element.idEmpresa,
          cantidad: element.cantidad,
        }
        return data
      });
      const orden: Order = {
        idCliente,
        productos,
        datosTarjeta,
        lnglat,
        direccion
      }
      // console.log(orden)
      this.homeService.setOrder(orden)
        .subscribe(res => {
          if (res.ok === true) {
            Swal.fire(
              'Estupendo!',
              `${res.msg}`,
              'success'
            ).then(() => {
              localStorage.clear();
              this.miFormulario.reset()
            })
          }
        })
    }else{
      Swal.fire(
        'Lo sentimos algo salido mal!',
        `Verifica que hayan productos en el carrito he ingresa correctamente tus ubicarcion`,
        'error'
      )
    }
  }
}
