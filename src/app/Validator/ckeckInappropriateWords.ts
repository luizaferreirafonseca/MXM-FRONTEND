import { AbstractControl, ValidatorFn } from '@angular/forms';

export function inappropriateWordsValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const emailMessage: string = control.value;
    const inappropriateWordsRegex: RegExp = /\b(fuck+|shit+|asshole+|cunt+|bitch+|motherfucker+|bastard+|dick+|cock+|suicide+|kill myself+|end my life+|take my own life+|suicidal+|self-harm+|self-destructive+|crime+|murder+|hate+|racist+|violence+|foder+|merda+|filho da puta+|cadela+|buraco do cu+|vagabundo+|idiota+|otário+|caralho+|cona+|suicídio+|matar-me+|tirar minha própria vida+|suicida+|auto-mutilação+|autodestrutivo+|puta+|vadia+|vou te matar+|se mata+|vai se foder+|vsf+)\b/i;
    const containsInappropriateWords: boolean = inappropriateWordsRegex.test(emailMessage);
    return containsInappropriateWords ? { 'inappropriateWords': { value: control.value } } : null;
  };
}
