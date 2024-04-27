import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ServicoMensagemServico } from '../servicos/servico-mensagem.servico';
import { Mensagem } from '../Modelos/Mensagem';
import * as bootstrap from 'bootstrap';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsuarioLogado } from '../Modelos/UsuarioLogado';
import { SessionStorageServico } from '../servicos/session-storage-servico';
import { palavrasinapropriadasValidator } from '../Validator/checkPalavrasInapropriadas';




@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, ReactiveFormsModule, EditorModule, RouterLink, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent  {

  constructor(private ServicoMensagem: ServicoMensagemServico, private sessionStorageServico: SessionStorageServico) { }

  usuario!: UsuarioLogado;
  erroMensagem: string | null = '';
  @ViewChild('erroModal') erroModal!: ElementRef;
  @ViewChild('sucessoModal') sucessoModal!: ElementRef;

  ngOnInit(){
    const usuario = this.sessionStorageServico.pegarUsuarioLogado();
    this.usuario = usuario;
  }

  formulario = new FormGroup({

    nome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZÀ-ú ]+$'), Validators.maxLength(100)]),
    enderecoDestino: new FormControl('', [Validators.required, Validators.email]),
    corpo: new FormControl('', [Validators.required, palavrasinapropriadasValidator()])
  })



  enviarFormulario() {
    if (this.formulario.valid) {
      const corpoHTML = this.construirCorpoHTML();
      const mensagem: Mensagem = {
        nome: this.formulario.value.nome || '',
        enderecoDestino: this.formulario.value.enderecoDestino || '',
        corpo: corpoHTML
      };

      this.ServicoMensagem.enviarMensagem(mensagem).subscribe({
        next: () => {
          const sucessoModal = new bootstrap.Modal(this.sucessoModal.nativeElement);
          sucessoModal.show();
          this.formulario.reset();
        },
        error: () => {
          const erroModal = new bootstrap.Modal(this.erroModal.nativeElement);
          erroModal.show();
        }
      });
    } else {
      const erroModal = new bootstrap.Modal(this.erroModal.nativeElement);
      erroModal.show();
    }
  }

   construirCorpoHTML(): string {
    let html = this.formulario.value.corpo || '';
    html = this.transformarAlinhamento(html);
    html = this.transformarTamanhoFonte(html);
    return this.construirDocumentoHTML(html);
  }

   transformarAlinhamento(html: string): string {
    return html.replace(/class="ql-align-(\w+)">([\s\S]*?)<\/p>/g, (match: string, p1: string, p2: string) => {
      return `style="text-align: ${p1};">${p2}</p>`;
    });
  }

  transformarTamanhoFonte(html: string): string {
    return html.replace(/class="ql-size-(\w+)">([\s\S]*?)<\/p>/g, (match: string, p1: string, p2: string) => {
      const tamanhoFonte = this.obterTamanhoFonte(p1);
      return `style="font-size: ${tamanhoFonte};">${p2}</p>`;
    });
  }

   obterTamanhoFonte(classe: string): string {
    switch (classe) {
      case 'small':
        return '0.75em';
      case 'normal':
        return '1em';
      case 'large':
        return '1.5em';
      case 'huge':
        return '2.5em';
      default:
        return '1em';
    }
  }

  construirDocumentoHTML(html: string): string {
    return `<!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        ${html}
      </body>
      </html>`;
  }


}

























