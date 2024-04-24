import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ServicoMensagemService } from '../services/servico-mensagem.service';
import { Mensagem } from '../Models/Mensagem';
import * as bootstrap from 'bootstrap';
import { RouterLink, RouterOutlet } from '@angular/router';
import { inappropriateWordsValidator } from '../Validator/ckeckInappropriateWords';




@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, ReactiveFormsModule, EditorModule, RouterLink, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private MessageService: ServicoMensagemService) { }

  erroMessage: string | null = '';
  @ViewChild('errorModal') errorModal!: ElementRef;
  @ViewChild('successModal') successModal!: ElementRef;

  form = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZÀ-ú ]+$'), Validators.maxLength(100)]),
    adressDestination: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', [Validators.required, inappropriateWordsValidator()])
  })


  handleClick() {

    

    if (this.form.value.body && this.form.value.name && this.form.value.adressDestination && this.form.valid) {

      this.form.valid

      let html = this.form.value.body;

      html = html.replace(/class="ql-align-(\w+)">([\s\S]*?)<\/p>/g, (match: string, p1: string, p2: string) => {
        return `style="text-align: ${p1};">${p2}</p>`;
      });

      html = html.replace(/class="ql-size-(\w+)">([\s\S]*?)<\/p>/g, (match: string, p1: string, p2: string) => {
        let fontSize: string = '';
        switch (p1) {
          case 'small':
            fontSize = '0.75em';
            break;
          case 'normal':
            fontSize = '1em';
            break;
          case 'large':
            fontSize = '1.5em';
            break;
          case 'huge':
            fontSize = '2.5em';
            break;
          default:
            break;
        }
        return `style="font-size: ${fontSize};">${p2}</p>`;
      });


      html = html.replace(/style="(.*?)">([\s\S]*?)<\/p>/g, (match: string, p1: string, p2: string) => {
        let style: string = p1;
        if (!style.includes('font-size')) {
          style += ` font-size: 1em;`;
        }
        return `style="${style}">${p2}</p>`;
      });

      html = html.replace(/style="(.*?)">([\s\S]*?)<\/p>/g, (match: string, p1: string, p2: string) => {
        let style: string = p1;
        if (!style.includes('text-align')) {
          style += ` text-align: left;`;
        }
        return `style="${style}">${p2}</p>`;
      });

      let body = ` <!DOCTYPE html>
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

  </html>
`
      
      const message: Mensagem = {
        name: this.form.value.name,
        adressDestination: this.form.value.adressDestination,
        body: body
      };

      this.MessageService.enviarMensagem(message).subscribe(
        {
          next: res => {
            const SuccessModal = new bootstrap.Modal(this.successModal.nativeElement);
            SuccessModal.show();
            this.form.reset();
          },
          error: err => {
            const ErrorModal = new bootstrap.Modal(this.errorModal.nativeElement);
            ErrorModal.show();
          
          }


        });



    }
  }


}






























