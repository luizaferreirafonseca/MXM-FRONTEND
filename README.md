<h1 align="center"> 📧: Projeto Final MXM - Mensageiro Escola Cooper  </h1>

## 🌐 Visão do projeto
* Este é o projeto final da MXM, que consiste em um sistema de mensageria para envio de e-mails a partir de uma fila disparada para remetentes. Esta parte do projeto é o front-end, cujo objetivo é criar uma página de envio de e-mails com campos para nome, e-mail e texto formatável (negrito, tamanho da fonte, alinhamento). Os dados inseridos nessa página serão enviados (com suas devidas formatações no body e com o formato HTML) para a API, que os colocará em uma fila. Dessa forma, pensamos na criação de um sistema de envio de mensagens diretamente de coordenação de uma escola, onde os administradores responsáveis (como coordenadores e/ou colaboradores no geral) poderão organizar e-mails para enviar aos responsáveis dos alunos da escola, como forma de comunicados, etc.

* 🚀 <a href="https://luiza-mxm-frontend.vercel.app/">Acesse o deploy!</a>

  
![image](https://github.com/ALM-MXM/MXM-FRONTEND/assets/139771003/4712baeb-3872-4b70-aff5-a1cf26768904)

---------

## ⚒️ Funcionalidades 

☑️ Tela de Login 

* A tela de login permite que administradores autentiquem-se para acessar a funcionalidade principal. É necessário ter um cadastro prévio com a API para utilizar essa tela. Após o login bem-sucedido, o usuário é redirecionado à página de envio de e-mails, com seus dados salvos na sessão e um token JWT gerado para segurança das requisições.

☑️ Tela Principal (envio de e-mails) 

* Nesta tela, o administrador pode enviar e-mails para os colaboradores. Os campos disponíveis são: nome, e-mail e corpo da mensagem. O campo de corpo da mensagem permite formatação, incluindo opções como negrito, sublinhado, itálico, alinhamento e tamanho da fonte. Todos os campos possuem validações para garantir que não sejam enviados conteúdos vazios ou com palavras inapropriadas. Caso ocorra alguma invalidade, modais informativos aparecerão para orientar o usuário.

## 💡 Detalhes de produção 

* O projeto possui a implementação de Guards nas rotas para segurança;
* Mensagens formatadas e enviadas de forma consistente para garantir estilos compatíveis em diferentes clientes de e-mail.
* Utilização da biblioteca NgPrime e Quill Editor, proporcionando funcionalidades avançadas de edição e formatação de texto.
* Responsividade nas telas para garantir uma boa experiência em dispositivos móveis.
* Segurança reforçada com JWT Token.
* Para autenticação com usuário previamente cadastrado:
  - e-mail: adm-escolacooper@cooper.com
  - senha: Usuario123!

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

## :eyeglasses: Autora

<div><img src="https://github.com/luizaferreirafonseca.png" width="100px;"/></div>
<div><a href="https://github.com/luizaferreirafonseca">Luiza Ferreira</a></div>
</br></br>
