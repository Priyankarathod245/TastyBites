!function(){var e={8371:function(e){var t=function(e,t,r){var a=Math.floor(e),i=1,n=a+1,o=1;if(e!==a)for(;i<=t&&o<=t;){var s=(a+n)/(i+o);if(e===s){i+o<=t?(i+=o,a+=n,o=t+1):i>o?o=t+1:i=t+1;break}e<s?(n=a+n,o=i+o):(a+=n,i+=o)}if(i>t&&(i=o,a=n),!r)return[0,a,i];var l=Math.floor(a/i);return[l,a-l*i,i]};t.cont=function(e,t,r){for(var a=e<0?-1:1,i=e*a,n=0,o=1,s=0,l=1,c=0,d=0,u=Math.floor(i);c<t&&(s=(u=Math.floor(i))*o+n,d=u*c+l,!(i-u<5e-8));)i=1/(i-u),n=o,o=s,l=c,c=d;if(d>t&&(c>t?(d=l,s=n):(d=c,s=o)),!r)return[0,a*s,d];var f=Math.floor(a*s/d);return[f,a*s-f*d,d]},"undefined"==typeof DO_NOT_EXPORT_FRAC&&(e.exports=t)}},t={};function r(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}const n=["¼","½","¾","⅐","⅑","⅒","⅓","⅔","⅕","⅖","⅗","⅘","⅙","⅚","⅛","⅜","⅝","⅞"],o={"¼":"1/4","½":"1/2","¾":"3/4","⅐":"1/7","⅑":"1/9","⅒":"1/10","⅓":"1/3","⅔":"2/3","⅕":"1/5","⅖":"2/5","⅗":"3/5","⅘":"4/5","⅙":"1/6","⅚":"5/6","⅛":"1/8","⅜":"3/8","⅝":"5/8","⅞":"7/8","1/16":"1/16","3/16":"3/16","5/16":"5/16","7/16":"7/16","9/16":"9/16","11/16":"11/16","13/16":"13/16","15/16":"15/16"},s=[[.33,"⅓"],[.66,"⅔"],[.2,"⅕"],[.4,"⅖"],[.6,"⅗"],[.8,"⅘"],[.166,"⅙"],[.833,"⅚"],[.143,"⅐"],[.111,"⅑"],[.1,"⅒"],[.125,"⅛"],[.25,"¼"],[.375,"⅜"],[.5,"½"],[.625,"⅝"],[.75,"¾"],[.875,"⅞"],[.0625,"1/16"],[.1875,"3/16"],[.3125,"5/16"],[.4375,"7/16"],[.5625,"9/16"],[.6875,"11/16"],[.8125,"13/16"],[.9375,"15/16"]],l=(e,t,r)=>Math.abs(e-t)<r,c=(e,t)=>t.vulgarFractions?e:t.fractionSlash?o[e].replace("/","⁄"):o[e];r(8371);var d,u={"¼":"1/4","½":"1/2","¾":"3/4","⅐":"1/7","⅑":"1/9","⅒":"1/10","⅓":"1/3","⅔":"2/3","⅕":"1/5","⅖":"2/5","⅗":"3/5","⅘":"4/5","⅙":"1/6","⅚":"5/6","⅛":"1/8","⅜":"3/8","⅝":"5/8","⅞":"7/8"};function f(e){var t=(e=(e=(e=(e=(e=((e=(e=(e=""+e).replace(",",".")).replace(" to ","-"))+"").replace(/(\u00BC|\u00BD|\u00BE|\u2150|\u2151|\u2152|\u2153|\u2154|\u2155|\u2156|\u2157|\u2158|\u2159|\u215A|\u215B|\u215C|\u215D|\u215E)/,(function(e,t){return" "+u[t]}))).replace(/(<([^>]+)>)/gi,"")).replace(/(\[([^\]]+)\])/gi,"")).replace(/[^\d\s\.\/-]/gi,"")).trim()).split(" "),r=!1;if(""!==e){r=0;for(var a=0;a<t.length;a++)if(""!==t[a].trim()){var i=t[a].split("/",2),n=parseFloat(i[0]);if(void 0!==i[1]){var o=parseFloat(i[1]);0!==o&&(n/=o)}isNaN(n)||(r+=n)}}return r}d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,r=[{key:"initLightGallery",value:function(e){var t=e.querySelectorAll(".dr-instruction-videopop");t&&t.forEach((function(e){lightGallery(e,{selector:"this"})}))}},{key:"initRatings",value:function(e){jQuery(e).find(".dr-comment-form-rating").each((function(){var e=jQuery(this).parent().find('input[name="rating"]');jQuery(this).rateYo({halfStar:!0,rating:5,onInit:function(t,r){e.val(t)},onChange:function(t,r){e.val(t)}})}))}}],null&&i(t.prototype,null),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),window.recipe_global=d,function(e){var r,i;i=!!e("body").hasClass("rtl"),e(".dr-post-carousel").owlCarousel({items:3,autoplay:!1,loop:!1,nav:!0,dots:!1,rewind:!0,margin:30,autoplaySpeed:800,autoplayTimeout:3e3,rtl:i,navText:['<svg xmlns="http://www.w3.org/2000/svg" width="18.479" height="12.689" viewBox="0 0 18.479 12.689"><g transform="translate(17.729 11.628) rotate(180)"><path d="M7820.11-1126.021l5.284,5.284-5.284,5.284" transform="translate(-7808.726 1126.021)" fill="none" stroke="#232323" stroke-linecap="round" stroke-width="1.5"/><path d="M6558.865-354.415H6542.66" transform="translate(-6542.66 359.699)" fill="none" stroke="#232323" stroke-linecap="round" stroke-width="1.5"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="18.479" height="12.689" viewBox="0 0 18.479 12.689"><g transform="translate(0.75 1.061)"><path d="M7820.11-1126.021l5.284,5.284-5.284,5.284" transform="translate(-7808.726 1126.021)" fill="none" stroke="#232323" stroke-linecap="round" stroke-width="1.5"/><path d="M6558.865-354.415H6542.66" transform="translate(-6542.66 359.699)" fill="none" stroke="#232323" stroke-linecap="round" stroke-width="1.5"/></g></svg>'],responsive:{0:{items:1},768:{items:2},1025:{items:3}}}),e(".js-select2").select2({closeOnSelect:!1,placeholder:delicious_recipes.search_placeholder,allowClear:!0});var n=null;if(e("body").on("change",".dr-search-field select",(function(){var t={};e(".dr-search-field select option").each((function(){e(this).is(":selected")&&(t.hasOwnProperty(e(this).attr("name"))||(t[e(this).attr("name")]=[]),-1==e.inArray(this.value,t[e(this).attr("name")])&&t[e(this).attr("name")].push(this.value))}));var r=e("#dr-search-nonce").val();null!==n&&n.abort(),n=jQuery.ajax({url:delicious_recipes.ajax_url,data:{action:"recipe_search_results",search:t,nonce:r},dataType:"json",type:"post",beforeSend:function(){e(".dr-search-item-wrap").addClass("dr-loading")},success:function(t){if(t.success){var r,i=wp.template("search-block-tmp");if(e(".dr-search-item-wrap").html(i(t.data.results)),e(".navigation.pagination .nav-links").addClass("dr-ajax-paginate").html(t.data.pagination),"AND"===(null===(r=t.data)||void 0===r?void 0:r.logic)){var o,s;if(e('.advance-search-options select.js-select2:not([name="sorting"]) option').each((function(t,r){e(this).text(e(r).data("title")+" (0)")})),null!==(o=t.data)&&void 0!==o&&o.terms){var l=t.data.terms;if("object"===a(l))for(var c in l)if("object"===a(l[c]))for(var d in l[c]){var u=l[c][d];e('select[name="'.concat(c,'"] option[value="').concat(u.term_id,'"]')).text("".concat(u.name," (").concat(u.count,")"))}}if(null!==(s=t.data)&&void 0!==s&&s.metas){var f=t.data.metas;if("object"===a(f))for(var p in f)for(var h in f[p]){var g=f[p][h],v=e('select[name="'.concat(p,'"] option[value="').concat(h,'"]')),m=v.data("title");v.text("".concat(m," (").concat(g,")"))}}e(".advance-search-options select.js-select2").select2({closeOnSelect:!1,placeholder:delicious_recipes.search_placeholder,allowClear:!0})}n=null}},complete:function(){e(".dr-search-item-wrap").removeClass("dr-loading"),n=null}})})),e(document).on("click",".dr-ajax-paginate a.page-numbers",(function(t){t.preventDefault();var r={};e(".dr-search-field select option").each((function(){e(this).is(":selected")&&(r.hasOwnProperty(e(this).attr("name"))||(r[e(this).attr("name")]=[]),-1==e.inArray(this.value,r[e(this).attr("name")])&&r[e(this).attr("name")].push(this.value))}));var a=e("#dr-search-nonce").val();jQuery.ajax({url:delicious_recipes.ajax_url,data:{action:"recipe_search_results",search:r,nonce:a,paged:e(this).attr("href").split("=")[1]},dataType:"json",type:"post",beforeSend:function(){e(".dr-search-item-wrap").addClass("dr-loading")},success:function(t){if(t.success){var r=wp.template("search-block-tmp");e(".dr-search-item-wrap").html(r(t.data.results)),e(".navigation.pagination .nav-links").addClass("dr-ajax-paginate").html(t.data.pagination)}},complete:function(){e(".dr-search-item-wrap").removeClass("dr-loading")}})})),e(".post-share a.meta-title").on("click",(function(t){t.stopPropagation(),e(this).siblings(".social-networks").slideToggle()})),e(".post-share").on("click",(function(e){e.stopPropagation()})),e("body, html").on("click",(function(){e(".post-share .social-networks").slideUp()})),e(".dr-category a, .post-navigation article .dr-category > span").each((function(){var t=e(this).width(),r=e(this).children(".cat-name").outerWidth(),a=(parseInt(r)-parseInt(t))/2;e(this).children(".cat-name").css("left",-a),e("body").hasClass("rtl")?e(this).children(".cat-name").css({left:"auto",right:-a}):e(this).children(".cat-name").css("left",-a)})),e(document).on("ready",(function(){var r=e("[data-liked_recipe_id]");if(r.length){var i=[];r.each((function(r,a){i=[].concat(t(i),[e(a).data("liked_recipe_id")])})),(i=t(new Set(i.filter((function(e){return!!e}))))).length&&e.ajax({type:"POST",url:delicious_recipes.ajax_url,data:{action:"recipe_get_likes",ids:t(i)},success:function(t){var i;if(!0===t.success){if(null!==(i=t.data)&&void 0!==i&&i.recipes&&"object"===a(t.data.recipes))for(var n in t.data.recipes)e('[data-liked_recipe_id="'.concat(n,'"] .dr-likes-total')).text(t.data.recipes[n].likes_count).closest(".dr_like__recipe").attr("title",t.data.recipes[n].likes).removeClass("loading")}else r.find(".dr_like__recipe").removeClass("loading")},error:function(){r.find(".dr_like__recipe").removeClass("loading")}})}})),e(document).on("click",".dr_like__recipe",(function(t){t.preventDefault();var r=e(this),a=r.attr("id").split("-").pop();if(r.hasClass("recipe-liked")){r.removeClass("recipe-liked"),r.addClass("like-recipe");var i="remove"}else r.removeClass("like-recipe"),r.addClass("recipe-liked"),i="add";e.ajax({type:"post",url:delicious_recipes.ajax_url,data:{action:"recipe_likes",add_remove:i,id:a},beforeSend:function(){r.addClass("loading")},success:function(e){r.attr("title",e.data.likes),r.find(".dr-likes-total").html(e.data.likes_count)}}).done((function(){if(r.removeClass("loading"),"undefined"!=typeof recipeProGlobal&&r.parent(".dr-floating-box .post-like .single-like").length>0){var e=window.location.href,t=recipeProGlobal.filter((function(t){return t.path===e}));t[0]&&(t[0].likes=r.parent(".single-like").html())}}))})),e(document).on("click",".dr-recipe-wishlist span.dr-bookmark-wishlist",(function(t){t.preventDefault();var r=e(this),a=r.data("recipe-id");if(r.hasClass("dr-wishlist-is-bookmarked")){r.removeClass("dr-wishlist-is-bookmarked");var i="remove"}else r.addClass("dr-wishlist-is-bookmarked"),i="add";e.ajax({type:"post",url:delicious_recipes.ajax_url,data:{action:"delicious_recipes_wishlist",add_remove:i,recipe_id:a},beforeSend:function(){r.addClass("loading")},success:function(e){r.find(".dr-wishlist-total").html(e.data.wishlists),r.find(".dr-wishlist-info").html(e.data.message)}}).done((function(){if(r.removeClass("loading"),"undefined"!=typeof recipeProGlobal&&r.parent(".dr-floating-box .dr-add-to-wishlist-single .dr-recipe-wishlist").length>0){var e=window.location.href,t=recipeProGlobal.filter((function(t){return t.path===e}));t[0]&&(t[0].wishlist=r.parent(".dr-recipe-wishlist").html())}}))})),e(".dr-recipe-wishlist span.dr-popup-user__registration").length){var o=document.getElementById("dr-user__registration-login-popup"),s=document.querySelectorAll(".dr-popup-user__registration");s.length&&s.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),o.style.display="block"}))})),document.getElementsByClassName("dr-user__registration-login-popup-close")[0].onclick=function(){o.style.display="none"},window.onclick=function(e){e.target==o&&(o.style.display="none")},e(document).on("submit","form[name='dr-form__log-in']",(function(t){t.preventDefault();var a=e(this),i=a.find('input[name="username"]').val(),n=a.find('input[name="password"]').val(),o=a.find('input[name="rememberme"]').val(),s=a.find('input[name="login"]').val();r=a.find('input[name="delicious_recipes_user_login_nonce"]').val(),e.ajax({url:delicious_recipes.ajax_url,data:{action:"delicious_recipes_process_login",username:i,password:n,rememberme:o,login:s,delicious_recipes_user_login_nonce:r,calling_action:"delicious_recipes_modal_login"},dataType:"json",type:"post",beforeSend:function(){a.addClass("dr-loading"),e(".delicious-recipes-success-msg").hide(),e(".delicious-recipes-error-msg").hide()},success:function(t){t.success?(e(".dr-recipe-wishlist > span").removeClass("dr-popup-user__registration"),e(".dr-recipe-wishlist > span").addClass("dr-bookmark-wishlist"),e(".delicious-recipes-success-msg").html(t.data.success).show(),location.reload()):(console.log(t.data.error),e(".delicious-recipes-error-msg").html(t.data.error).show())},complete:function(){a.removeClass("dr-loading")}})}))}e("#dr-recipes-clear-filters").on("click",(function(t){t.preventDefault(),e(".dr-advance-search .advance-search-options select").each((function(){e(this).val(null).trigger("change")}))})),e('.dr-inst-mark-read input[type="checkbox"]').each((function(){e(this).on("click",(function(){1==e(this).prop("checked")?e(this).parents("li").addClass("dr-instruction-checked"):e(this).parents("li").removeClass("dr-instruction-checked")}))})),e("form[name='dr-form__log-in']").parsley(),e(document).on("click",".dr-ud_tab",(function(){e(".dr-ud__sidebar").removeClass("collapsed")}))}(jQuery),window.addEventListener("load",function(){var e=function(){};if(e.on=function(e,t,r){document.addEventListener(e,(function(e){for(var a=e.target;a&&a!=this;a=a.parentNode)if(a.matches(t)){r.call(a,e);break}}),!1)},window.delicious_recipes.utilities=e,e.on("click",".view-gallery-btn",(function(e){var t=JSON.parse(this.dataset.lgSettings).map((function(e){return{src:e.previewURL}}));window.lightGallery(e.target,{dynamic:!0,dynamicEl:t}).openGallery(0)})),e.on("click",".dr-video-toggle",(function(e){e.target.matches(".dr-video-toggle")&&document.querySelectorAll(e.target.getAttribute("data-target")).forEach((function(e){"none"===e.style.display?e.style.display="block":e.style.display="none"}))})),"scale"===delicious_recipes.global_settings.adjustableServingType){var t=delicious_recipes.global_settings.useFraction,r="yes"===t[t.length-1],a=document.querySelectorAll(".dr-ingredients-list .scale-btn-wrapper button");if(a.length>0){var i=function(e){e.preventDefault(),a.forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active");var t=f(e.target.getAttribute("data-scale")),i=e.target.getAttribute("data-recipe");document.querySelectorAll(".dr-single-recipe-print-"+i).forEach((function(e){var r=e.getAttribute("href").split("?"),a="print_recipe=true&recipe_servings="+o*t;e.setAttribute("href",r[0]+"?"+a)})),d.forEach((function(e){var a=e.querySelector(".ingredient_quantity"),i=f(a.getAttribute("data-original")),o=t*i,d=o%1==0?o:o.toFixed(2);a.innerHTML=r?((e,t)=>{var r;const a="string"==typeof e?parseFloat(e):e;if(isNaN(a)||null===a)return null;if(0===a)return"";const i=Math.abs(a),o=Math.floor(i),d=`${a<0?"-":""}${0===o?"":`${o} `}`,u=i-o;if(0===u)return`${a}`;const f={vulgarFractions:t};for(const[e,t]of s)if(l(u,e,null!=(r=f.tolerance)?r:.0075)){const e=c(t,f);return`${n.includes(e)?d.trim():d}${e}`}return`${a}`})(o,!0):d}))},o=document.querySelector(".dr-ingredients-scale").getAttribute("data-serving-value"),d=document.querySelectorAll(".dr-ingredients-list .dr-unordered-list li");a.forEach((function(e){e.addEventListener("click",i)})),document.querySelector(".dr-ingredients-list .scale-btn-wrapper .active").click()}}else["keyup","mouseup"].forEach((function(e){document.addEventListener(e,(function(e){if(e.target.classList.contains("dr-scale-ingredients")){var t=e.target.closest(".dr-ingredients-list"),r=e.target.value,a=e.target.getAttribute("data-recipe");r=f(r);var i=e.target.getAttribute("data-original");i=f(i);var n=t.querySelectorAll(".ingredient_quantity");document.querySelectorAll(".dr-single-recipe-print-"+a).forEach((function(e){var t=e.getAttribute("href").split("?"),a="print_recipe=true&recipe_servings="+r;e.setAttribute("href",t[0]+"?"+a)})),n.forEach((function(e){var t=e.getAttribute("data-original");if(""!=t){var a=(t=f(t))/i*r;isNaN(a)||(a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=e,a=!1;if(arguments.length>2&&void 0!==arguments[2]&&arguments[2]);return a||(t=parseInt(t),0==(r=parseFloat(parseFloat(e).toFixed(t)))&&(r+=Math.pow(10,-1*t)),r=""+r),r}(a,2,!0)),e.innerText=a}}))}}))}));e.on("click","a",(function(e){var t,r=e.target.getAttribute("href");if(r&&(null==r?void 0:r.split("")).length>1&&null!==(t=e.target.getAttribute("href"))&&void 0!==t&&t.match(/^#.*$/)){e.preventDefault();var a=document.querySelector(e.target.getAttribute("href"));null==a||a.scrollIntoView({behavior:"smooth"})}})),recipe_global.initRatings("body"),recipe_global.initLightGallery(document.body),document.addEventListener("click",(function(e){!function(e){if(e.target.matches(".dr-switch-btn")){var t=e.target;if(t){var r=t.getAttribute("data-switch"),a=t.getAttribute("data-switch-on"),i=t.getAttribute("data-switch-off"),n=t.getAttribute("data-target");"off"==r?(t.setAttribute("data-switch","on"),t.innerText=a):(t.setAttribute("data-switch","off"),t.innerText=i);var o=t.getAttribute("data-switch");!function(e,t){"on"==t?e.forEach((function(e){e.classList.add("faq-active")})):e.forEach((function(e){e.classList.remove("faq-active")}))}(document.querySelector(n).querySelectorAll(".dr-faq-item"),o)}}["dr-faq-title-wrap","dr-title"].forEach((function(t){e.target.classList.contains(t)&&(e.target.closest(".dr-faq-item").matches(".faq-active")?e.target.closest(".dr-faq-item").classList.remove("faq-active"):e.target.closest(".dr-faq-item").classList.add("faq-active"))}))}(e)}))}()),window.onload=function(){var e=document.querySelectorAll('input[type="number"]');e&&e.forEach((function(e){e.addEventListener("mousewheel",(function(e){e.preventDefault()}))}))}}()}();