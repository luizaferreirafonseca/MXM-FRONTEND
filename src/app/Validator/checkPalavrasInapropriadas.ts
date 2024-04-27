import { AbstractControl, ValidatorFn } from '@angular/forms';

export function palavrasinapropriadasValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const mensagemEmail: string = control.value;
    const palavrasinapropriadasRegex: RegExp = /\b(fuck+|shit+|asshole+|cunt+|bitch+|motherfucker+|bastard+|dick+|cock+|suicide+|kill myself+|end my life+|take my own life+|suicidal+|self-harm+|self-destructive+|crime+|murder+|hate+|racist+|violence+|foder+|merda+|filho da puta+|cadela+|buraco do cu+|vagabundo+|idiota+|otário+|caralho+|cona+|suicídio+|matar-me+|tirar minha própria vida+|suicida+|auto-mutilação+|autodestrutivo+|puta+|vadia+|vou te matar+|se mata+|vai se foder+|vsf+)\b/i;
    const contemPalavrasInapropriadas: boolean = palavrasinapropriadasRegex.test(mensagemEmail);
    return contemPalavrasInapropriadas ? { 'palavrasinapropriadas': { value: control.value } } : null;
  };
}
