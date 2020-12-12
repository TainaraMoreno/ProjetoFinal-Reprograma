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

    | Método | Recurso | Descrição |
    | --- | --- | --- |
    | GET | /bolsas | Retorna todos as bolsas |

    | Método | Recurso | Descrição |
    | --- | --- | --- |
    | POST | /bolsas/criar| cadastra uma nova bolsa |

    | Método | Recurso | Descrição |
    | --- | --- | --- |
    | GET | /bolsas/:id | Retorna uma bolsas pelo identificador|

    | Método | Recurso | Descrição |
    | --- | --- | --- |
    | PUT | /bolsas/atualizar/:id | Atualiza a bolsa|

    | Método | Recurso | Descrição |
    | --- | --- | --- |
    | DELETE | /exercise/deletar/:id | Deleta a bolsa|

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






