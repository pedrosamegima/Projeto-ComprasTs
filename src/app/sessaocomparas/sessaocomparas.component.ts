import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sessaocomparas',
  templateUrl: './sessaocomparas.component.html',
  styleUrls: ['./sessaocomparas.component.scss']
})
export class SessaocomparasComponent {
  Comprar(){
    Swal.fire({
      title: "Você deseja comprar este produto?",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produtp adicionado com sucesso", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adicionar ao carrinho", "", "info");
      }
    });
  }
}
