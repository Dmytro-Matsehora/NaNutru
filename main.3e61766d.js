parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=new Date,t=new Date;t.setDate(e.getDate()-5);var n=t.toLocaleDateString(),l=document.getElementById("data");l.innerHTML=n;var a=document.getElementById("close-btn"),o=document.getElementById("popup"),c=document.getElementById("button");a.addEventListener("click",function(){o.style.display="none"}),c.addEventListener("click",function(){o.style.display="none"}),document.addEventListener("mouseleave",function(){o.style.display="block"}),setTimeout(function(){o.style.display="block"},2e4);var d=document.getElementById("timer"),i=document.getElementById("timer2"),s=600,r=setInterval(function(){s--;var e=Math.floor(s/60),t=s%60,n=("0"+e).slice(-2)+":"+("0"+t).slice(-2);d.innerHTML=n,i.innerHTML=n,0===s&&clearInterval(r)},1e3);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3e61766d.js.map