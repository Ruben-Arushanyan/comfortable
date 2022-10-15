"use strict";(self.webpackChunkcomfortable_website=self.webpackChunkcomfortable_website||[]).push([[669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:3,description:"Check if a value is a string primitive type.",title:"isString()",keywords:["string","is-string","string-type","check-value-string","javascript","comfortable","comfort","util","utils","utility","utilities","extras","helpers","stdlib","boost","oop","oop-in-javascript","object-oriented-programming","oop-principles","object-oriented"]},a=void 0,s={unversionedId:"$Value/isString",id:"$Value/isString",title:"isString()",description:"Check if a value is a string primitive type.",source:"@site/docs/$Value/isString.md",sourceDirName:"$Value",slug:"/$Value/isString",permalink:"/docs/$Value/isString",draft:!1,editUrl:"https://github.com/Ruben-Arushanyan/comfortable/edit/master/website/docs/$Value/isString.md",tags:[],version:"current",lastUpdatedBy:"Ruben Arushanyan",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Check if a value is a string primitive type.",title:"isString()",keywords:["string","is-string","string-type","check-value-string","javascript","comfortable","comfort","util","utils","utility","utilities","extras","helpers","stdlib","boost","oop","oop-in-javascript","object-oriented-programming","oop-principles","object-oriented"]},sidebar:"tutorialSidebar",previous:{title:"constructor",permalink:"/docs/$Value/constructor"}},l={},p=[{value:"Examples",id:"examples",level:2},{value:"Syntax",id:"syntax",level:2},{value:"<code>.isString()</code>",id:"isstring",level:3},{value:"Returns <code>&lt;boolean&gt;</code>",id:"returns-boolean",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Check if a value is a ",(0,i.kt)("strong",{parentName:"p"},"string primitive type"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {$Value} from 'comfortable/$Value'\n\n$Value('Hello').isString()\n// true\n\n$Value('').isString()\n// true\n\n$Value(123).isString()\n// false\n\n$Value(new String(\"Hello\")).isString()\n// false\n")),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("h3",{id:"isstring"},(0,i.kt)("inlineCode",{parentName:"h3"},".isString()")),(0,i.kt)("h4",{id:"returns-boolean"},"Returns ",(0,i.kt)("inlineCode",{parentName:"h4"},"<boolean>")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the value is a ",(0,i.kt)("strong",{parentName:"p"},"string primitive type"),", else ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."))}u.isMDXComponent=!0}}]);