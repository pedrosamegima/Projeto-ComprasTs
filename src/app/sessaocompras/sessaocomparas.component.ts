import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import{OnInit} from '@angular/core';
import { SessaoService } from './service/sessao.service';
import { Isessao } from './service/isessao';
@Component({
  selector: 'app-sessaocomparas',
  templateUrl: './sessaocomparas.component.html',
  styleUrls: ['./sessaocomparas.component.scss']
})
export class SessaocomparasComponent implements OnInit {
  ngOnInit(): void { this.listar()}
  produtos: Isessao[] = [];
  constructor (private service: SessaoService){ }
  listar(){
    this.service.listar().subscribe(dados => this.produtos = dados);
  }
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
        Swal.fire("Produto adicionado com sucesso", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adicionar ao carrinho", "", "info");
      }
    });
  }
}
