<h1 align="center"> 📧: Projeto Final MXM - Mensageiro Escola Cooper  </h1>

## 🌐 Visão do projeto
* Este projeto final da MXM consiste em criar um sistema de mensageria, o qual poderemos enviar e-mails de uma fila e dispará-los para os remetentes. Esse repositório é responsável pela primeira parte do projeto, que é o front-end. O objetivo consiste em criar uma página que contenha e-mail, nome, texto que possa ser formatado (negrito, tamanho de fonte, alinhamento). Essa página irá enviar os dados do e-mail para a API e os dados serão colocados em uma fila. Dessa forma, pensamos na criação de um sistema de envio de mensagens diretamente de coordenação de uma escola, onde os administradores responsáveis (como coordenadores e/ou colaboradores no geral) poderão organizar e-mails para enviar aos responsáveis dos alunos da escola, como forma de comunicados, etc.

* 🚀 <a href="https://luiza-mxm-frontend.vercel.app/">Acesse o deploy!</a>

  
![image](https://github.com/ALM-MXM/MXM-FRONTEND/assets/139771003/4712baeb-3872-4b70-aff5-a1cf26768904)

---------

## ⚒️ Funcionalidades 

☑️ Tela de Login 

* A tela de login é uma feature extra/adicional no projeto. O administrador responsável terá um cadastro previamente feito com um endpoint criado na API e, dessa forma, poderá utilizar a tela de login pra fazer sua autenticação. O usuário deverá realizar o login com suas credenciais válidas e, após isso, será redirecionado à pagina de envio de e-mails com os seus dados salvos na sessão e um token JWT será gerado para segurança das requisições.

☑️ Tela Principal (envio de e-mails) 

* Nesta tela, o usuário administrador poderá enviar os e-mails aos colaboradores. Para isso, utilizamos os campos como: nome, email e corpo da mensagem. O corpo da mensagem possui opções de formatação da mensagem como: negrito, sublinhado, itálico, alinhamento e tamanho de fonte. Todos os campos estão com suas validações e o formulário para envio de e-mail não permite que seja enviado conteúdos vazios ou que possuam palavras inapropriadas. Caso ocorra algum tipo de invalidez, alguns modais irão aparecer pedindo atenção.

## 💡 Detalhes de produção 

* O projeto possui a implementação de Guards nas rotas para segurança
* As mensagens formatadas e enviadas estão transformadas devidamente para que os seus estilos sejam consistentes em qualquer cliente de e-mail.
* Utilização da lib Ngprime juntamente com a dependência Quill por detrás dos panos. Essa lib é um editor de texto avançado para aplicativos Angular e traz funcionalidades pra edições e formatações.
* Responsividade nas telas em execução
* Segurança com JWT Token

## 🔧 Tecnologia utilizada 

* HTML e CSS 
* Framework Angular 17

## :arrow_forward: Execução do projeto

| Passos | Descrição |
| --- | --- |
| 1º passo | Clonar o repositório: _git clone https://github.com/ALM-MXM/MXM-FRONTEND.git_  |
| 2º passo | Acessar a pasta do projeto: _$ cd MXM-FRONTEND_ |
| 3º passo | Instalar as dependências do Angular: _npm install_ | 
| 4º passo | Rodar o projeto com o comando **ng serve ou  ng serve --o** | ____

## :eyeglasses: Colaboradora 

<div><img src="https://github.com/luizaferreirafonseca.png" width="100px;"/></div>
<div><a href="https://github.com/luizaferreirafonseca">Luiza Ferreira</a></div>
</br></br>
