"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[110],{3905:function(e,a,r){r.d(a,{Zo:function(){return m},kt:function(){return p}});var n=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function t(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,o=function(e,a){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):t(t({},a),e)),r},m=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(r),p=o,b=u["".concat(l,".").concat(p)]||u[p]||c[p]||s;return r?n.createElement(b,t(t({ref:a},m),{},{components:r})):n.createElement(b,t({ref:a},m))}));function p(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=r.length,t=new Array(s);t[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,t[1]=i;for(var d=2;d<s;d++)t[d]=r[d];return n.createElement.apply(null,t)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6220:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return m},toc:function(){return c},default:function(){return p}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),t=["components"],i={slug:"como-validar-dados-de-uma-forma-elegante",title:"Como validar dados de uma forma elegante",description:"Hoje vou ensinar uma maneira bem elegante de validar dados no Javascript. E o mais legal, usando somente os recursos nativos da linguagem!",keywords:["validator","javascript","array"],image:"/img/every.png",tags:["validador","javascript","every"],authors:"brunelli"},l=void 0,d={permalink:"/blog/como-validar-dados-de-uma-forma-elegante",editUrl:"https://github.com/mrbrunelli/blog/tree/master/blog/2022-02-21-como-validar-dados-de-uma-forma-elegante/index.md",source:"@site/blog/2022-02-21-como-validar-dados-de-uma-forma-elegante/index.md",title:"Como validar dados de uma forma elegante",description:"Hoje vou ensinar uma maneira bem elegante de validar dados no Javascript. E o mais legal, usando somente os recursos nativos da linguagem!",date:"2022-02-21T00:00:00.000Z",formattedDate:"21 de fevereiro de 2022",tags:[{label:"validador",permalink:"/blog/tags/validador"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"every",permalink:"/blog/tags/every"}],readingTime:3.72,truncated:!0,authors:[{name:"Matheus R. Brunelli",title:"Desenvolvedor de software",url:"https://github.com/mrbrunelli",imageURL:"https://avatars.githubusercontent.com/u/54479807?v=4&s=128",key:"brunelli"}],frontMatter:{slug:"como-validar-dados-de-uma-forma-elegante",title:"Como validar dados de uma forma elegante",description:"Hoje vou ensinar uma maneira bem elegante de validar dados no Javascript. E o mais legal, usando somente os recursos nativos da linguagem!",keywords:["validator","javascript","array"],image:"/img/every.png",tags:["validador","javascript","every"],authors:"brunelli"},prevItem:{title:"Aprenda a escrever testes - Parte 1",permalink:"/blog/aprenda-a-testar-pt1"},nextItem:{title:"Aprenda a criar snippets no VS Code",permalink:"/blog/aprenda-a-criar-snippets-no-vscode"}},m={authorsImageUrls:[void 0]},c=[{value:"Entendendo o cen\xe1rio",id:"entendendo-o-cen\xe1rio",children:[{value:"Requisitos",id:"requisitos",children:[],level:3}],level:2},{value:"Implementa\xe7\xe3o do endpoint",id:"implementa\xe7\xe3o-do-endpoint",children:[],level:2},{value:"Possibilidades",id:"possibilidades",children:[{value:"Condicionais: <code>if else</code>",id:"condicionais-if-else",children:[],level:3},{value:"Loops padr\xf5es: <code>for</code>",id:"loops-padr\xf5es-for",children:[],level:3},{value:"Conhecendo o <code>every</code>",id:"conhecendo-o-every",children:[],level:3}],level:2},{value:"Implementando o nosso validador",id:"implementando-o-nosso-validador",children:[{value:"B\xf4nus",id:"b\xf4nus",children:[],level:3}],level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[],level:2}],u={toc:c};function p(e){var a=e.components,r=(0,o.Z)(e,t);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Salve galera, tudo bem com voc\xeas?\nHoje vou ensinar uma maneira bem elegante de validar dados no Javascript. E o mais legal, usando somente os recursos nativos da linguagem."),(0,s.kt)("h2",{id:"entendendo-o-cen\xe1rio"},"Entendendo o cen\xe1rio"),(0,s.kt)("p",null,"Imagine o seguinte cen\xe1rio, voc\xea precisa construir uma API que ir\xe1 receber os dados de pessoas que querem receber notifica\xe7\xf5es regulares sobre seu cat\xe1logo de produtos."),(0,s.kt)("h3",{id:"requisitos"},"Requisitos"),(0,s.kt)("p",null,"Para sua regra de neg\xf3cios funcionar, voc\xea ir\xe1 precisar dos seguintes requisitos:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Sua API deve ser constru\xedda da forma mais simples poss\xedvel, se poss\xedvel uma ",(0,s.kt)("a",{parentName:"li",href:"https://aws.amazon.com/pt/lambda/"},"Lambda"),"."),(0,s.kt)("li",{parentName:"ul"},"A rota deve ser do tipo POST."),(0,s.kt)("li",{parentName:"ul"},"Receber do cliente nome, sobrenome, email e o cep."),(0,s.kt)("li",{parentName:"ul"},"Todos os dados s\xe3o obrigat\xf3rios.")),(0,s.kt)("h2",{id:"implementa\xe7\xe3o-do-endpoint"},"Implementa\xe7\xe3o do endpoint"),(0,s.kt)("p",null,"Vamos pular toda a parte da constru\xe7\xe3o da API. Vamos prosseguir como se toda a infraestrutura j\xe1 estivesse montada. Algo mais ou menos assim:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="subscribers.js"',title:'"subscribers.js"'},'exports.subscribers = async (req, res) => {\n  try {\n    const { first_name, last_name, email, cep } = red.body;\n\n    await subscribersRepository.insert({\n      first_name,\n      last_name,\n      email,\n      cep,\n    });\n\n    return res.status(200).json({\n      message:\n        "Obrigado por assinar nosso cat\xe1logo! Em breve enviaremos a edi\xe7\xe3o desse m\xeas por e-mail.",\n    });\n  } catch (error) {\n    return res.status(400).json({\n      message: error.message,\n    });\n  }\n};\n')),(0,s.kt)("p",null,"Lembra que eu disse que os dados do cliente devem ser obrigat\xf3rios? Em nenhum momento n\xf3s estamos validando isso. Da maneira como os dados est\xe3o vindo, estou repassando para meu repository."),(0,s.kt)("h2",{id:"possibilidades"},"Possibilidades"),(0,s.kt)("h3",{id:"condicionais-if-else"},"Condicionais: ",(0,s.kt)("inlineCode",{parentName:"h3"},"if else")),(0,s.kt)("p",null,"A maneira mais simples de satisfazer nossa valida\xe7\xe3o \xe9 criar um ",(0,s.kt)("inlineCode",{parentName:"p"},"if")," para cada campo e lan\xe7ar uma exce\xe7\xe3o caso algum retorne ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("h3",{id:"loops-padr\xf5es-for"},"Loops padr\xf5es: ",(0,s.kt)("inlineCode",{parentName:"h3"},"for")),(0,s.kt)("p",null,"Outra maneira \xe9 criar um ",(0,s.kt)("inlineCode",{parentName:"p"},"for")," e percorrer o ",(0,s.kt)("inlineCode",{parentName:"p"},"req.body")," com o ",(0,s.kt)("inlineCode",{parentName:"p"},"Object.keys")," e verificar campo a campo."),(0,s.kt)("h3",{id:"conhecendo-o-every"},"Conhecendo o ",(0,s.kt)("inlineCode",{parentName:"h3"},"every")),(0,s.kt)("p",null,"Mas nosso querido Javascript j\xe1 possu\xed um maravilhoso recurso que far\xe1 todo trabalho pesado para n\xf3s, e tudo isso de forma nativa, sem precisarmos instalar um pacote externo."),(0,s.kt)("p",null,"O ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every"},"every")," \xe9 um m\xe9todo que itera nosso array e retorna ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," somente se todos os \xedndices retornarem ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),". Com ele \xe9 poss\xedvel percorrer nosso ",(0,s.kt)("inlineCode",{parentName:"p"},"req.body"),", e caso n\xe3o tenha um determinado campo, automagicamente retornar\xe1 ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),", interrompendo dessa forma a itera\xe7\xe3o."),(0,s.kt)("p",null,"Vamos ver como ficar\xe1:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="subscribersValidator.js"',title:'"subscribersValidator.js"'},'class SubscriberValidator {\n  static isValid(data = {}) {\n    const requiredFields = ["first_name", "last_name", "email", "cep"];\n    return requiredFields.every((field) => data.hasOwnProperty(field));\n  }\n}\n')),(0,s.kt)("p",null,"Note que para cada campo iterado do nosso ",(0,s.kt)("inlineCode",{parentName:"p"},"requiredFields"),", testamos com o ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty"},"hasOwnProperty")," se ",(0,s.kt)("inlineCode",{parentName:"p"},"field")," est\xe1 presente no objeto ",(0,s.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,s.kt)("h2",{id:"implementando-o-nosso-validador"},"Implementando o nosso validador"),(0,s.kt)("p",null,"Voltemos ao c\xf3digo do nosso endpoint, agora com nosso ",(0,s.kt)("inlineCode",{parentName:"p"},"SubscriberValidator"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="subscribers.js"',title:'"subscribers.js"'},'const SubscriberValidator = require("./validators/subscriber-validator");\n\nexports.subscribers = async (req, res) => {\n  try {\n    if (!SubscriberValidator.isValid(req.body)) {\n      throw new Error("Favor preencher todos os campos.");\n    }\n\n    const { first_name, last_name, email, cep } = red.body;\n\n    await subscribersRepository.insert({\n      first_name,\n      last_name,\n      email,\n      cep,\n    });\n\n    return res.status(200).json({\n      message:\n        "Obrigado por assinar nosso cat\xe1logo! Em breve enviaremos a edi\xe7\xe3o desse m\xeas por e-mail.",\n    });\n  } catch (error) {\n    return res.status(400).json({\n      message: error.message,\n    });\n  }\n};\n')),(0,s.kt)("p",null,"Veja como ficou enxuta nossa feature. E o melhor \xe9 que o ",(0,s.kt)("inlineCode",{parentName:"p"},"every")," interrompe imediatamente o loop e retorna ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," caso algum campo n\xe3o esteja l\xe1 no ",(0,s.kt)("inlineCode",{parentName:"p"},"req.body"),"."),(0,s.kt)("h3",{id:"b\xf4nus"},"B\xf4nus"),(0,s.kt)("p",null,"Podemos refatorar nosso ",(0,s.kt)("inlineCode",{parentName:"p"},"SubscriberValidator")," e retornar o campo que o usu\xe1rio esqueceu de informar:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="subscribersValidator.js"',title:'"subscribersValidator.js"'},'class SubscriberValidator {\n  static isValid(data = {}) {\n    const requiredFields = ["first_name", "last_name", "email", "cep", "phone"];\n    let missingField;\n\n    const isValid = requiredFields.every((field) => {\n      const hasField = data.hasOwnProperty(field);\n      if (!hasField) missingField = field;\n      return hasField;\n    });\n\n    return {\n      isValid,\n      missingField,\n    };\n  }\n}\n')),(0,s.kt)("p",null,"Podemos refatorar nosso endpoint e retornar o campo que est\xe1 faltando na ",(0,s.kt)("inlineCode",{parentName:"p"},"response"),". Dessa forma o usu\xe1rio saber\xe1 onde errou:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="subscribers.js"',title:'"subscribers.js"'},'const SubscriberValidator = require("./validators/subscriber-validator");\n\nexports.subscribers = async (req, res) => {\n  try {\n    const { isValid, missingField } = SubscriberValidator.isValid(req.body);\n\n    if (!isValid) {\n      throw new Error(`O campo \'${missingField}\' \xe9 obrigat\xf3rio!`);\n    }\n\n    const { first_name, last_name, email, cep } = red.body;\n\n    await subscribersRepository.insert({\n      first_name,\n      last_name,\n      email,\n      cep,\n    });\n\n    return res.status(200).json({\n      message:\n        "Obrigado por assinar nosso cat\xe1logo! Em breve enviaremos a edi\xe7\xe3o desse m\xeas por e-mail.",\n    });\n  } catch (error) {\n    return res.status(400).json({\n      message: error.message,\n    });\n  }\n};\n')),(0,s.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,s.kt)("p",null,"Utilizamos somente recursos nativos da nossa linguagem e evitamos pacotes externos desnecess\xe1rios."),(0,s.kt)("p",null,"Caso sua API precisasse de muitas valida\xe7\xf5es, grava\xe7\xe3o de logs, mensagens super refinadas, ai sim seria melhor utilizar um pacote para fazer esse trabalho."),(0,s.kt)("p",null,"Mas aqui era algo extremamente simples."),(0,s.kt)("p",null,"Espero que tenha gostado! Compartilhe essa postagem com seus amigos e colegas de trabalho! Vou ficando por aqui, at\xe9 a pr\xf3xima!"))}p.isMDXComponent=!0}}]);