import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorModule } from 'primeng/editor';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, ReactiveFormsModule, EditorModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(){}


  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      content: new FormControl('', [Validators.required])
  })

  
  handleClick() {

    if(this.form.value.content){
   
     let html = this.form.value.content;
   
     // Substituindo text-align class para inline style
    

     html = html.replace(/class="ql-align-(\w+)">([\s\S]*?)<\/p>/g, (match: string, p1: string, p2: string) => {
      return `style="text-align: ${p1};">${p2}</p>`;
      });
  
   
     // Substituindo font-size class para inline style 
    

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
  
   
     // Adiciona font-size a um estilo existente/ou cria 


    html = html.replace(/style="(.*?)">([\s\S]*?)<\/p>/g, (match: string, p1: string, p2: string) => {
      let style: string = p1;
      if (!style.includes('font-size')) {
          style += ` font-size: 1em;`;
      }
      return `style="${style}">${p2}</p>`;
    });
  

   
     // Adiciona text-align a um style existente ou cria um novo 
  
    html = html.replace(/style="(.*?)">([\s\S]*?)<\/p>/g, (match: string, p1: string, p2: string) => {
      let style: string = p1;
      if (!style.includes('text-align')) {
          style += ` text-align: left;`;
      }
      return `style="${style}">${p2}</p>`;
    });
  
   
   
     const objeto = {
       email: this.form.value.email,
       name: this.form.value.name,
       content: html
     }
   
     console.log(objeto)
    }
   
   }


}
