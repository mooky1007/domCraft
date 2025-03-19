!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).DomCraft={})}(this,(function(t){"use strict";class e{constructor(t){this.el="string"==typeof t?document.createElement(t):t,this.init()}init(){this.el.newEl=this,this.el.set=this.set.bind(this),this.el.attr=this.attr.bind(this),this.el.animations=this.animations.bind(this),this.el.destroy=this.destroy.bind(this),this.el.addChildren=this.addChildren.bind(this),this.el.replaceChildren=this.replaceChildren.bind(this)}set(t={}){return this.config=t,"string"==typeof t?this.text(t):Object.entries(t).forEach((([t,e])=>{switch(t){case"text":this.text(e);break;case"html":this.html(e);break;case"style":this.style(e);break;case"attr":this.attr(e);break;case"dataset":this.dataset(e);break;case"href":this.href(e);break;case"src":this.src(e);break;case"type":this.type(e);break;case"placeholder":this.placeholder(e);break;case"id":this.id(e);break;case"class":this.class(e);break;case"ref":e(this);break;case"children":this.children(e);break;case"on":this.on(e);break;case"introAnimation":this.introAnimation=e;break;case"outroAnimation":this.outroAnimation=e;break;default:this[t]=e}})),this.el}id(t){return this.el.id=t,this.el}text(t){return this.el.textContent=t,this.el}html(t){return this.el.innerHTML=t,this.el}placeholder(t){return this.el.placeholder=t,this.el}type(t){return this.el.type=t,this.el}src(t){return this.el.src=t,this.el}href(t){return this.el.href=t,this.el}class(t){return 1===t.split(",").length?this.el.classList.add(t):t.split(",").forEach((t=>{this.el.classList.add(t.trim())})),this.el}attr(t){return Object.entries(t).forEach((([t,e])=>{this.el.setAttribute(t,e)})),this.el}style(t){return Object.entries(t).forEach((([t,e])=>this.el.style[t]=e)),this.el}dataset(t){return Object.entries(t).forEach((([t,e])=>{this.el.dataset[t]=e})),this.el}animations(t){if(Array.isArray(t))t.forEach((t=>{const{keyframe:e,options:i}=t;this.animate(e,i)}));else{const{keyframe:e,options:i}=t;this.animate(e,i)}return this.el}async animate(t,e){this.ani=this.el.animate(t,e),await this.ani.finished,this.onAnimationEnd&&this.onAnimationEnd.call(this)}children(t){return t.forEach((async t=>{if(t instanceof e)if(t.introAnimation){const{keyframe:e,options:i}=t.introAnimation;this.el.append(t.el),await t.el.animate(e,i).finished}else this.el.append(t.el);else if(t.newEl.introAnimation){const{keyframe:e,options:i}=t.newEl.introAnimation;this.el.append(t),await t.animate(e,i).finished}else this.el.append(t)})),this.el}on(t){return Object.entries(t).forEach((([t,e])=>{"animationEnd"!==t?this.el.addEventListener(t,e.bind(this)):this.onAnimationEnd=e})),this.el}async destroy(){if(this.outroAnimation){const{keyframe:t,options:e}=this.outroAnimation;return await this.el.animate(t,e).finished,this.el.remove()}return this.el.remove()}replaceChildren(...t){this.el.innerHTML="",this.children(t)}addChildren(...t){this.children(t)}}t.Dom=class{constructor(){}static qs(t){return new e(document.querySelector(t))}static qsa(t){return document.querySelectorAll(t)}static el(t){return new e(document.createElement(t))}static get body(){return new e(document.querySelector("body"))}static delay(t){return new Promise((e=>{setTimeout((()=>e()),t)}))}static injectCss(t){const e=document.createElement("style");e.textContent=t,document.head.append(e)}static get span(){return new e("span")}static get p(){return new e("p")}static get h1(){return new e("h1")}static get h2(){return new e("h2")}static get h3(){return new e("h3")}static get h4(){return new e("h4")}static get h5(){return new e("h5")}static get h6(){return new e("h6")}static get div(){return new e("div")}static get img(){return new e("img")}static get section(){return new e("section")}static get article(){return new e("article")}static get header(){return new e("header")}static get footer(){return new e("footer")}static get main(){return new e("main")}static get ul(){return new e("ul")}static get button(){return new e("button")}static get input(){return new e("input")}static get form(){return new e("form")}static get li(){return new e("li")}static get a(){return new e("a")}},t.Element=e,Object.defineProperty(t,"__esModule",{value:!0}),window.Dom=DomCraft.Dom}));
//# sourceMappingURL=dom_craft.umd.js.map
