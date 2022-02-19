"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[140],{3905:function(e,t,o){o.d(t,{Zo:function(){return m},kt:function(){return p}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=u(o),p=n,A=d["".concat(l,".").concat(p)]||d[p]||s[p]||a;return o?r.createElement(A,i(i({ref:t},m),{},{components:o})):r.createElement(A,i({ref:t},m))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4848:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return m},toc:function(){return s},default:function(){return p}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],c={slug:"como-foi-construir-um-validador-de-objetos",title:"Como foi construir um validador de objetos?",description:"Primeiramente, por que contru\xed um pacote de validar objetos, sendo que o npm est\xe1 cheio deles...",keywords:["validator","object validator","schema validator","npm"],image:"./npm.png",authors:"brunelli",tags:["npm","pacote npm","validator","validador de objetos"]},l=void 0,u={permalink:"/blog/como-foi-construir-um-validador-de-objetos",editUrl:"https://github.com/mrbrunelli/blog/tree/master/blog/2022-02-17-como-foi-construir-um-validador-de-objetos/index.md",source:"@site/blog/2022-02-17-como-foi-construir-um-validador-de-objetos/index.md",title:"Como foi construir um validador de objetos?",description:"Primeiramente, por que contru\xed um pacote de validar objetos, sendo que o npm est\xe1 cheio deles...",date:"2022-02-17T00:00:00.000Z",formattedDate:"17 de fevereiro de 2022",tags:[{label:"npm",permalink:"/blog/tags/npm"},{label:"pacote npm",permalink:"/blog/tags/pacote-npm"},{label:"validator",permalink:"/blog/tags/validator"},{label:"validador de objetos",permalink:"/blog/tags/validador-de-objetos"}],readingTime:4.89,truncated:!0,authors:[{name:"Matheus Ricardo Brunelli",title:"Desenvolvedor de Software S\xeanior",url:"https://github.com/mrbrunelli",imageURL:"https://avatars.githubusercontent.com/u/54479807?v=4",key:"brunelli"}],frontMatter:{slug:"como-foi-construir-um-validador-de-objetos",title:"Como foi construir um validador de objetos?",description:"Primeiramente, por que contru\xed um pacote de validar objetos, sendo que o npm est\xe1 cheio deles...",keywords:["validator","object validator","schema validator","npm"],image:"./npm.png",authors:"brunelli",tags:["npm","pacote npm","validator","validador de objetos"]},nextItem:{title:"Como contornar a dor de escrever um teste unit\xe1rio?",permalink:"/blog/como-contornar-a-dor-de-escrever-um-teste-unit\xe1rio"}},m={image:o(5667).Z,authorsImageUrls:[void 0]},s=[],d={toc:s};function p(e){var t=e.components,c=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Logo NPM",src:o(5667).Z,width:"540",height:"210"})),(0,a.kt)("p",null,"Eai galera, tudo bem com voc\xeas? Espero que sim.\nHoje gostaria de compartilhar como ",(0,a.kt)("strong",{parentName:"p"},"criei meu primeiro pacote npm"),", quais foram minhas motiva\xe7\xf5es e as etapas desde a ideia at\xe9 o publish."),(0,a.kt)("p",null,"Primeiramente, por que contru\xed um pacote de ",(0,a.kt)("strong",{parentName:"p"},"validar objetos"),", sendo que o npm ",(0,a.kt)("strong",{parentName:"p"},"est\xe1 cheio deles?"),"\nBem, essa decis\xe3o foi um pouco dif\xedcil, visto que j\xe1 existe um validador de schemas muito famoso na comunidade, o famigerado ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/yup"},(0,a.kt)("strong",{parentName:"a"},"Yup")),"."))}p.isMDXComponent=!0},5667:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAADSAgMAAAB87fECAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAADLODf///8EXxL6AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfhCAkCAi0o2YxVAAAAwElEQVR42u3asRGAIAxAURr3s7FxPxumtLHihMt5QS3er0PyBqBs/6hwcHBwcHBwcHBwcHBwcHCkO/Y66rimhkM1tKqzmYODg4ODg4ODg4ODg4ODY7qjOdxxNG+frOLg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OCY7Aj9M+Dg4ODg4ODg4ODg4ODg4PjKEev+cEYcHBwcHBwcHBwcHBwcHByJjlDLcMda3oqDg4ODg4ODg4ODg4ODgyPSCV7wh+HNgMmcAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA4LTA5VDAyOjAyOjQ0KzAwOjAw39Y9SwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOC0wOVQwMjowMjo0NCswMDowMK6LhfcAAAAASUVORK5CYII="}}]);