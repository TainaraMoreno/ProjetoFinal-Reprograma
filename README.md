# ProjetoFinal-Reprograma


# Aqui Tem Bolsas

![logo](https://github.com/TainaraMoreno/ProjetoFinal-Reprograma/blob/main/img/aquitemBolsas.png)


## O projeto
Aqui tem bolsas é a facilidade de encontrar bolsas de estudo em um único lugar. 

Na maioria das vezes por falta de informação e renda, muitas pessoas acham que não terá oportunidade de estudar.  A ideia é divulgar o site em redes sociais, para qualquer pessoa ter as informações que é possível ter oportunidades de estudos. 

A Plataforma é a captação de bolsas oferecidas por instituições e ongs, com o intuito de ajudar as pessoas que buscam oportunidade de estudo e uma qualificação profissional. 



**Arquitetura**

        Arquitetura MVC
        |
        \--📂 ProjetoFinal-Reprograma
            |   .env
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   README.md
            |   server.js
            \--📂 img
            \--📂 node_modules
            \--📂src
                |
                |   **app.js**
                |
                📂---configs
                |   **database.js
                |
                📂---controller
                |       bolsasControllers.js              |            
                |
                📂---models
                |       bolsasSchema.js     
                |
                📂---routes
                |       bolsasRoutes.js              |           
                |           
                |__   


**EndPoints**

Método  |  Recurso               |  Descrição                             | 
--------|------------------------|----------------------------------------|
GET     |      /bolsas           |  Retorna todas as bolsas               |
POST    | /bolsas/criar          |  Cadastra uma nova bolsa               |
GET     | /bolsas/:id            |  Retorna uma bolsa pelo identificador  |
PUT     | /bolsas/atualizar/:id  |  Atualiza uma bolsa                    |
DELETE  | /bolsas/delete/:id     |  Deleta uma bolsa                      |




## Tecnologias Utilizadas:

* Nodejs
* mongodb
* Mongoose
* Npm
* Cors
* Express
* Nodemon
* DotEnv
* IDE VSCode
* Postman


## Qualidade 
Foram realizados testes para a garantia da qualidade da API 
O testes realizados foram: 
 * Caixa Branca
 * Teste Unitário
 * Teste de Integração
 * Teste de Aceite Operacional (Teste Funcional)
    OBS: Desejável a implementação de teste automatizado da API,  usando a ferramenta Robot Framework

 ### Evid~encia dos Testes
  



