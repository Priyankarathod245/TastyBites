!function(){var r={8371:function(r){var t=function(r,t,n){var e=Math.floor(r),o=1,i=e+1,a=1;if(r!==e)for(;o<=t&&a<=t;){var u=(e+i)/(o+a);if(r===u){o+a<=t?(o+=a,e+=i,a=t+1):o>a?a=t+1:o=t+1;break}r<u?(i=e+i,a=o+a):(e+=i,o+=a)}if(o>t&&(o=a,e=i),!n)return[0,e,o];var f=Math.floor(e/o);return[f,e-f*o,o]};t.cont=function(r,t,n){for(var e=r<0?-1:1,o=r*e,i=0,a=1,u=0,f=1,c=0,s=0,l=Math.floor(o);c<t&&(u=(l=Math.floor(o))*a+i,s=l*c+f,!(o-l<5e-8));)o=1/(o-l),i=a,a=u,f=c,c=s;if(s>t&&(c>t?(s=f,u=i):(s=c,u=a)),!n)return[0,e*u,s];var p=Math.floor(e*u/s);return[p,e*u-p*s,s]},"undefined"==typeof DO_NOT_EXPORT_FRAC&&(r.exports=t)}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,{a:t}),t},n.d=function(r,t){for(var e in t)n.o(t,e)&&!n.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},function(){"use strict";n(8371);var r,t={"¼":"1/4","½":"1/2","¾":"3/4","⅐":"1/7","⅑":"1/9","⅒":"1/10","⅓":"1/3","⅔":"2/3","⅕":"1/5","⅖":"2/5","⅗":"3/5","⅘":"4/5","⅙":"1/6","⅚":"5/6","⅛":"1/8","⅜":"3/8","⅝":"5/8","⅞":"7/8"};function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}window.PrintScripts={init:function(){var r,t="",n="",e=new URLSearchParams(window.location.search);e.has("recipe_servings")&&(n=e.get("recipe_servings"),n=this.parse(n)),r=parseInt(print_props.recipe),t=print_props.original_servings,t=this.parse(t),""!=n&&n!=t&&this.updateServings(r,t,n)},updateServings:function(r,t,n){var o,i=function(r,t){var n="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=function(r,t){if(r){if("string"==typeof r)return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}(r))||t&&r&&"number"==typeof r.length){n&&(r=n);var o=0,i=function(){};return{s:i,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,f=!1;return{s:function(){n=n.call(r)},n:function(){var r=n.next();return u=r.done,r},e:function(r){f=!0,a=r},f:function(){try{u||null==n.return||n.return()}finally{if(f)throw a}}}}(document.querySelectorAll('.ingredient_quantity[data-recipe="'+r+'"]'));try{for(i.s();!(o=i.n()).done;){var a=o.value,u=a.dataset.original;if(""!=u){var f=(u=this.parse(u))/t*n;isNaN(f)||(f=this.format(f)),a.innerHTML=f}}}catch(r){i.e(r)}finally{i.f()}},parse:function(r){return function(r){var n=(r=(r=(r=(r=(r=((r=(r=(r=""+r).replace(",",".")).replace(" to ","-"))+"").replace(/(\u00BC|\u00BD|\u00BE|\u2150|\u2151|\u2152|\u2153|\u2154|\u2155|\u2156|\u2157|\u2158|\u2159|\u215A|\u215B|\u215C|\u215D|\u215E)/,(function(r,n){return" "+t[n]}))).replace(/(<([^>]+)>)/gi,"")).replace(/(\[([^\]]+)\])/gi,"")).replace(/[^\d\s\.\/-]/gi,"")).trim()).split(" "),e=!1;if(""!==r){e=0;for(var o=0;o<n.length;o++)if(""!==n[o].trim()){var i=n[o].split("/",2),a=parseFloat(i[0]);if(void 0!==i[1]){var u=parseFloat(i[1]);0!==u&&(a/=u)}isNaN(a)||(e+=a)}}return e}(r)},format:function(r){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=r,e=!1;if(arguments.length>2&&void 0!==arguments[2]&&arguments[2]);return e||(t=parseInt(t),0==(n=parseFloat(parseFloat(r).toFixed(t)))&&(n+=Math.pow(10,-1*t)),n=""+n),n}(r,2,!0)}},r=function(){window.PrintScripts.init()},"loading"!=document.readyState?r():document.addEventListener("DOMContentLoaded",r)}()}();