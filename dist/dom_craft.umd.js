!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).DomCraft={})}(this,(function(e){"use strict";class t{constructor(e){return this.el={},this.el="string"==typeof e?document.createElement(e):e,this.init(),this.el}init(){this.el.set=this.set.bind(this)}set(e={}){return this.config=e,"text"in e&&(this.el.textContent=e.text),"style"in e&&Object.keys(e.style).forEach((t=>{this.el.style[t]=e.style[t]})),"attributes"in e&&Object.keys(e.attributes).forEach((t=>{this.el.setAttribute(t,e.attributes[t])})),"nested"in e&&e.nested.forEach((e=>{this.el.append(e)})),"on"in e&&Object.keys(e.on).forEach((t=>{this.el.addEventListener(t,e.on[t].bind(this))})),"classes"in e&&(1===e.classes.split(",").length?this.el.classList.add(e.classes):e.classes.split(",").forEach((e=>{this.el.classList.add(e.trim())}))),this.el}}e.Dom=class{constructor(){}qs(e){return document.querySelector(e)}qsa(e){return document.querySelectorAll(e)}ce(e){return document.createElement(e)}static get body(){return new t(document.querySelector("body"))}static get span(){return new t("span")}static get p(){return new t("p")}static get div(){return new t("div")}},e.Element=t,Object.defineProperty(e,"__esModule",{value:!0}),window.Dom=DomCraft.Dom}));
//# sourceMappingURL=dom_craft.umd.js.map
