parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UKGC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.timerVision=void 0;var t=function(){var t=document.getElementById("audio"),e=document.getElementById("audio-start"),n=document.getElementById("audio-half-time"),d=document.getElementById("audio-finish"),i=document.querySelector(".timer"),o=document.querySelector(".time-input"),a=document.getElementById("button-addon2"),l=document.getElementById("pause"),u=document.getElementById("customSwitch1"),c=document.getElementById("iterations-input"),r=document.querySelector(".remaining-iterations");r.textContent=0,i.textContent=60,o.value=60;var s=!1,m=function(t){t.play(),t.currentTime=0};c.addEventListener("change",function(){r.textContent=c.value}),a.addEventListener("click",function(){m(e),s||(i.textContent=o.value),s&&(s=!1,l.disabled=!1),o.disabled=!0,a.disabled=!0;var u=setInterval(function(){i.textContent>0&&i.textContent--,i.textContent==Math.ceil(o.value/2)&&m(t),0==i.textContent&&(clearInterval(u),o.disabled=!1,a.disabled=!1,r.textContent>0&&(r.textContent--,m(t)),r.textContent==Math.ceil(o.value/2)&&m(n),0==r.textContent&&(a.disabled=!0,l.disabled=!0,r.textContent="Конец",m(d))),l.addEventListener("click",function(){clearInterval(u),s=!0,a.disabled=!1,l.disabled=!0})},1e3)}),u.addEventListener("click",function(){document.body.classList.toggle("light")})};exports.timerVision=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";var r=require("./src/timer");(0,r.timerVision)();
},{"./src/timer":"UKGC"}]},{},["Focm"], null)
//# sourceMappingURL=/timer/timer.e31bb0bc.js.map