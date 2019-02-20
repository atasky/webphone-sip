/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/* ---------- */
/*!
 * 
 *  SIP version 0.9.2
 *  Copyright (c) 2014-2018 Junction Networks, Inc <http://www.onsip.com>
 *  Homepage: https://sipjs.com
 *  License: https://sipjs.com/license/
 * 
 * 
 *  ~~~SIP.js contains substantial portions of JsSIP under the following license~~~
 *  Homepage: http://jssip.net
 *  Copyright (c) 2012-2013 José Luis Millán - Versatica <http://www.versatica.com>
 * 
 *  Permission is hereby granted, free of charge, to any person obtaining
 *  a copy of this software and associated documentation files (the
 *  "Software"), to deal in the Software without restriction, including
 *  without limitation the rights to use, copy, modify, merge, publish,
 *  distribute, sublicense, and/or sell copies of the Software, and to
 *  permit persons to whom the Software is furnished to do so, subject to
 *  the following conditions:
 * 
 *  The above copyright notice and this permission notice shall be
 *  included in all copies or substantial portions of the Software.
 * 
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 *  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 *  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 *  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 *  ~~~ end JsSIP license ~~~
 * 
 * 
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SIP"] = factory();
	else
		root["SIP"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2)(__webpack_require__(34));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @name SIP
 * @namespace
 */


module.exports = function (environment) {

  var pkg = __webpack_require__(3),
      version = pkg.version,
      title = pkg.title;

  var SIP = Object.defineProperties({}, {
    version: {
      get: function get() {
        return version;
      }
    },
    name: {
      get: function get() {
        return title;
      }
    }
  });

  __webpack_require__(4)(SIP, environment);
  SIP.LoggerFactory = __webpack_require__(5)(environment.console);
  SIP.EventEmitter = __webpack_require__(6)();
  SIP.C = __webpack_require__(8)(SIP.name, SIP.version);
  SIP.Exceptions = __webpack_require__(9);
  SIP.Timers = __webpack_require__(10)(environment.timers);
  SIP.Transport = environment.Transport(SIP, environment.WebSocket);
  __webpack_require__(11)(SIP);
  __webpack_require__(12)(SIP);
  __webpack_require__(13)(SIP);
  __webpack_require__(14)(SIP);
  __webpack_require__(15)(SIP);
  __webpack_require__(16)(SIP);
  __webpack_require__(18)(SIP);
  __webpack_require__(19)(SIP);
  SIP.SessionDescriptionHandler = __webpack_require__(20)(SIP.EventEmitter);
  __webpack_require__(21)(SIP);
  __webpack_require__(22)(SIP);
  __webpack_require__(23)(SIP);
  __webpack_require__(25)(SIP);
  __webpack_require__(26)(SIP, environment);
  __webpack_require__(28)(SIP);
  SIP.DigestAuthentication = __webpack_require__(29)(SIP.Utils);
  SIP.Grammar = __webpack_require__(30)(SIP);
  SIP.WebRTC = {
    Modifiers: __webpack_require__(32)(SIP),
    Simple: __webpack_require__(33)(SIP)
  };

  return SIP;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"name":"sip.js","title":"SIP.js","description":"A simple, intuitive, and powerful JavaScript signaling library","version":"0.9.2","main":"dist/sip.min.js","browser":{"./src/environment.js":"./src/environment_browser.js"},"homepage":"https://sipjs.com","author":"OnSIP <developer@onsip.com> (https://sipjs.com/aboutus/)","contributors":[{"url":"https://github.com/onsip/SIP.js/blob/master/THANKS.md"}],"repository":{"type":"git","url":"https://github.com/onsip/SIP.js.git"},"keywords":["sip","websocket","webrtc","library","javascript"],"devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-preset-env":"^1.6.1","eslint":"^4.9.0","jasmine-core":"^2.8.0","karma":"^1.7.1","karma-cli":"^1.0.1","karma-jasmine":"^1.1.0","karma-jasmine-html-reporter":"^0.2.2","karma-mocha-reporter":"^2.2.5","karma-phantomjs-launcher":"^1.0.4","karma-webpack":"^2.0.6","pegjs":"^0.10.0","pegjs-loader":"^0.5.4","uglifyjs-webpack-plugin":"^1.0.1","webpack":"^3.8.1"},"engines":{"node":">=4.0"},"license":"MIT","scripts":{"prebuild":"eslint src/*.js src/**/*.js","build":"webpack --progress && cp dist/sip.js dist/sip-$npm_package_version.js && cp dist/sip.min.js  dist/sip-$npm_package_version.min.js","browserTest":"sleep 2 && open http://0.0.0.0:9876/debug.html & karma start --reporters kjhtml --no-single-run","commandLineTest":"karma start --reporters mocha --browsers PhantomJS --single-run","buildAndTest":"npm run build && npm run commandLineTest"},"dependencies":{"ws":"^1.0.1"},"optionalDependencies":{"promiscuous":"^0.6.0"}}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview Utils
 */

module.exports = function (SIP, environment) {
  var Utils;

  Utils = {

    Promise: environment.Promise,

    defer: function defer() {
      var deferred = {};
      deferred.promise = new Utils.Promise(function (resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
      });
      return deferred;
    },

    reducePromises: function reducePromises(arr, val) {
      return arr.reduce(function (acc, fn) {
        acc = acc.then(fn);
        return acc;
      }, SIP.Utils.Promise.resolve(val));
    },

    augment: function augment(object, constructor, args, override) {
      var idx, proto;

      // Add public properties from constructor's prototype onto object
      proto = constructor.prototype;
      for (idx in proto) {
        if (override || object[idx] === undefined) {
          object[idx] = proto[idx];
        }
      }

      // Construct the object as though it were just created by constructor
      constructor.apply(object, args);
    },

    optionsOverride: function optionsOverride(options, winner, loser, isDeprecated, logger, defaultValue) {
      if (isDeprecated && options[loser]) {
        logger.warn(loser + ' is deprecated, please use ' + winner + ' instead');
      }

      if (options[winner] && options[loser]) {
        logger.warn(winner + ' overriding ' + loser);
      }

      options[winner] = options[winner] || options[loser] || defaultValue;
    },

    str_utf8_length: function str_utf8_length(string) {
      return encodeURIComponent(string).replace(/%[A-F\d]{2}/g, 'U').length;
    },

    generateFakeSDP: function generateFakeSDP(body) {
      if (!body) {
        return;
      }

      var start = body.indexOf('o=');
      var end = body.indexOf('\r\n', start);

      return 'v=0\r\n' + body.slice(start, end) + '\r\ns=-\r\nt=0 0\r\nc=IN IP4 0.0.0.0';
    },

    isFunction: function isFunction(fn) {
      if (fn !== undefined) {
        return Object.prototype.toString.call(fn) === '[object Function]';
      } else {
        return false;
      }
    },

    isDecimal: function isDecimal(num) {
      return !isNaN(num) && parseFloat(num) === parseInt(num, 10);
    },

    createRandomToken: function createRandomToken(size, base) {
      var i,
          r,
          token = '';

      base = base || 32;

      for (i = 0; i < size; i++) {
        r = Math.random() * base | 0;
        token += r.toString(base);
      }

      return token;
    },

    newTag: function newTag() {
      return SIP.Utils.createRandomToken(SIP.UA.C.TAG_LENGTH);
    },

    // http://stackoverflow.com/users/109538/broofa
    newUUID: function newUUID() {
      var UUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });

      return UUID;
    },

    hostType: function hostType(host) {
      if (!host) {
        return;
      } else {
        host = SIP.Grammar.parse(host, 'host');
        if (host !== -1) {
          return host.host_type;
        }
      }
    },

    /**
    * Normalize SIP URI.
    * NOTE: It does not allow a SIP URI without username.
    * Accepts 'sip', 'sips' and 'tel' URIs and convert them into 'sip'.
    * Detects the domain part (if given) and properly hex-escapes the user portion.
    * If the user portion has only 'tel' number symbols the user portion is clean of 'tel' visual separators.
    * @private
    * @param {String} target
    * @param {String} [domain]
    */
    normalizeTarget: function normalizeTarget(target, domain) {
      var uri, target_array, target_user, target_domain;

      // If no target is given then raise an error.
      if (!target) {
        return;
        // If a SIP.URI instance is given then return it.
      } else if (target instanceof SIP.URI) {
        return target;

        // If a string is given split it by '@':
        // - Last fragment is the desired domain.
        // - Otherwise append the given domain argument.
      } else if (typeof target === 'string') {
        target_array = target.split('@');

        switch (target_array.length) {
          case 1:
            if (!domain) {
              return;
            }
            target_user = target;
            target_domain = domain;
            break;
          case 2:
            target_user = target_array[0];
            target_domain = target_array[1];
            break;
          default:
            target_user = target_array.slice(0, target_array.length - 1).join('@');
            target_domain = target_array[target_array.length - 1];
        }

        // Remove the URI scheme (if present).
        target_user = target_user.replace(/^(sips?|tel):/i, '');

        // Remove 'tel' visual separators if the user portion just contains 'tel' number symbols.
        if (/^[\-\.\(\)]*\+?[0-9\-\.\(\)]+$/.test(target_user)) {
          target_user = target_user.replace(/[\-\.\(\)]/g, '');
        }

        // Build the complete SIP URI.
        target = SIP.C.SIP + ':' + SIP.Utils.escapeUser(target_user) + '@' + target_domain;
        // Finally parse the resulting URI.
        uri = SIP.URI.parse(target);

        return uri;
      } else {
        return;
      }
    },

    /**
    * Hex-escape a SIP URI user.
    * @private
    * @param {String} user
    */
    escapeUser: function escapeUser(user) {
      // Don't hex-escape ':' (%3A), '+' (%2B), '?' (%3F"), '/' (%2F).
      return encodeURIComponent(decodeURIComponent(user)).replace(/%3A/ig, ':').replace(/%2B/ig, '+').replace(/%3F/ig, '?').replace(/%2F/ig, '/');
    },

    headerize: function headerize(string) {
      var exceptions = {
        'Call-Id': 'Call-ID',
        'Cseq': 'CSeq',
        'Min-Se': 'Min-SE',
        'Rack': 'RAck',
        'Rseq': 'RSeq',
        'Www-Authenticate': 'WWW-Authenticate'
      },
          name = string.toLowerCase().replace(/_/g, '-').split('-'),
          hname = '',
          parts = name.length,
          part;

      for (part = 0; part < parts; part++) {
        if (part !== 0) {
          hname += '-';
        }
        hname += name[part].charAt(0).toUpperCase() + name[part].substring(1);
      }
      if (exceptions[hname]) {
        hname = exceptions[hname];
      }
      return hname;
    },

    sipErrorCause: function sipErrorCause(status_code) {
      var cause;

      for (cause in SIP.C.SIP_ERROR_CAUSES) {
        if (SIP.C.SIP_ERROR_CAUSES[cause].indexOf(status_code) !== -1) {
          return SIP.C.causes[cause];
        }
      }

      return SIP.C.causes.SIP_FAILURE_CODE;
    },

    getReasonPhrase: function getReasonPhrase(code, specific) {
      return specific || SIP.C.REASON_PHRASE[code] || '';
    },

    getReasonHeaderValue: function getReasonHeaderValue(code, reason) {
      reason = SIP.Utils.getReasonPhrase(code, reason);
      return 'SIP ;cause=' + code + ' ;text="' + reason + '"';
    },

    getCancelReason: function getCancelReason(code, reason) {
      if (code && code < 200 || code > 699) {
        throw new TypeError('Invalid status_code: ' + code);
      } else if (code) {
        return SIP.Utils.getReasonHeaderValue(code, reason);
      }
    },

    buildStatusLine: function buildStatusLine(code, reason) {
      code = code || null;
      reason = reason || null;

      // Validate code and reason values
      if (!code || code < 100 || code > 699) {
        throw new TypeError('Invalid status_code: ' + code);
      } else if (reason && typeof reason !== 'string' && !(reason instanceof String)) {
        throw new TypeError('Invalid reason_phrase: ' + reason);
      }

      reason = Utils.getReasonPhrase(code, reason);

      return 'SIP/2.0 ' + code + ' ' + reason + '\r\n';
    },

    /**
    * Generate a random Test-Net IP (http://tools.ietf.org/html/rfc5735)
    * @private
    */
    getRandomTestNetIP: function getRandomTestNetIP() {
      function getOctet(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
      }
      return '192.0.2.' + getOctet(1, 254);
    },

    // MD5 (Message-Digest Algorithm) http://www.webtoolkit.info
    calculateMD5: function calculateMD5(string) {
      function RotateLeft(lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
      }

      function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
          return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }
        if (lX4 | lY4) {
          if (lResult & 0x40000000) {
            return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
          } else {
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
          }
        } else {
          return lResult ^ lX8 ^ lY8;
        }
      }

      function F(x, y, z) {
        return x & y | ~x & z;
      }

      function G(x, y, z) {
        return x & z | y & ~z;
      }

      function H(x, y, z) {
        return x ^ y ^ z;
      }

      function I(x, y, z) {
        return y ^ (x | ~z);
      }

      function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
          lByteCount++;
        }
        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
      }

      function WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
          lByte = lValue >>> lCount * 8 & 255;
          WordToHexValue_temp = "0" + lByte.toString(16);
          WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
      }

      function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);

          if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode(c >> 6 | 192);
            utftext += String.fromCharCode(c & 63 | 128);
          } else {
            utftext += String.fromCharCode(c >> 12 | 224);
            utftext += String.fromCharCode(c >> 6 & 63 | 128);
            utftext += String.fromCharCode(c & 63 | 128);
          }
        }
        return utftext;
      }

      var x = [];
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7,
          S12 = 12,
          S13 = 17,
          S14 = 22;
      var S21 = 5,
          S22 = 9,
          S23 = 14,
          S24 = 20;
      var S31 = 4,
          S32 = 11,
          S33 = 16,
          S34 = 23;
      var S41 = 6,
          S42 = 10,
          S43 = 15,
          S44 = 21;

      string = Utf8Encode(string);

      x = ConvertToWordArray(string);

      a = 0x67452301;b = 0xEFCDAB89;c = 0x98BADCFE;d = 0x10325476;

      for (k = 0; k < x.length; k += 16) {
        AA = a;BB = b;CC = c;DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
      }

      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

      return temp.toLowerCase();
    }
  };

  SIP.Utils = Utils;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var levels = {
  'error': 0,
  'warn': 1,
  'log': 2,
  'debug': 3
};

module.exports = function (console) {

  var LoggerFactory = function LoggerFactory() {
    var logger,
        level = 2,
        builtinEnabled = true,
        connector = null;

    this.loggers = {};

    logger = this.getLogger('sip.loggerfactory');

    Object.defineProperties(this, {
      builtinEnabled: {
        get: function get() {
          return builtinEnabled;
        },
        set: function set(value) {
          if (typeof value === 'boolean') {
            builtinEnabled = value;
          } else {
            logger.error('invalid "builtinEnabled" parameter value: ' + JSON.stringify(value));
          }
        }
      },

      level: {
        get: function get() {
          return level;
        },
        set: function set(value) {
          if (value >= 0 && value <= 3) {
            level = value;
          } else if (value > 3) {
            level = 3;
          } else if (levels.hasOwnProperty(value)) {
            level = levels[value];
          } else {
            logger.error('invalid "level" parameter value: ' + JSON.stringify(value));
          }
        }
      },

      connector: {
        get: function get() {
          return connector;
        },
        set: function set(value) {
          if (value === null || value === "" || value === undefined) {
            connector = null;
          } else if (typeof value === 'function') {
            connector = value;
          } else {
            logger.error('invalid "connector" parameter value: ' + JSON.stringify(value));
          }
        }
      }
    });
  };

  LoggerFactory.prototype.print = function (target, category, label, content) {
    if (typeof content === 'string') {
      var prefix = [new Date(), category];
      if (label) {
        prefix.push(label);
      }
      content = prefix.concat(content).join(' | ');
    }
    target.call(console, content);
  };

  function Logger(logger, category, label) {
    this.logger = logger;
    this.category = category;
    this.label = label;
  }

  Object.keys(levels).forEach(function (targetName) {
    Logger.prototype[targetName] = function (content) {
      this.logger[targetName](this.category, this.label, content);
    };

    LoggerFactory.prototype[targetName] = function (category, label, content) {
      if (this.level >= levels[targetName]) {
        if (this.builtinEnabled) {
          this.print(console[targetName], category, label, content);
        }

        if (this.connector) {
          this.connector(targetName, category, label, content);
        }
      }
    };
  });

  LoggerFactory.prototype.getLogger = function (category, label) {
    var logger;

    if (label && this.level === 3) {
      return new Logger(this, category, label);
    } else if (this.loggers[category]) {
      return this.loggers[category];
    } else {
      logger = new Logger(this, category);
      this.loggers[category] = logger;
      return logger;
    }
  };

  return LoggerFactory;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NodeEventEmitter = __webpack_require__(7).EventEmitter;

module.exports = function () {

  // Don't use `new SIP.EventEmitter()` for inheriting.
  // Use Object.create(SIP.EventEmitter.prototoype);
  function EventEmitter() {
    NodeEventEmitter.call(this);
  }

  EventEmitter.prototype = Object.create(NodeEventEmitter.prototype, {
    constructor: {
      value: EventEmitter,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  return EventEmitter;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview SIP Constants
 */

/**
 * SIP Constants.
 * @augments SIP
 */

module.exports = function (name, version) {
  return {
    USER_AGENT: name + '/' + version,

    // SIP scheme
    SIP: 'sip',
    SIPS: 'sips',

    // End and Failure causes
    causes: {
      // Generic error causes
      CONNECTION_ERROR: 'Connection Error',
      REQUEST_TIMEOUT: 'Request Timeout',
      SIP_FAILURE_CODE: 'SIP Failure Code',
      INTERNAL_ERROR: 'Internal Error',

      // SIP error causes
      BUSY: 'Busy',
      REJECTED: 'Rejected',
      REDIRECTED: 'Redirected',
      UNAVAILABLE: 'Unavailable',
      NOT_FOUND: 'Not Found',
      ADDRESS_INCOMPLETE: 'Address Incomplete',
      INCOMPATIBLE_SDP: 'Incompatible SDP',
      AUTHENTICATION_ERROR: 'Authentication Error',
      DIALOG_ERROR: 'Dialog Error',

      // Session error causes
      WEBRTC_NOT_SUPPORTED: 'WebRTC Not Supported',
      WEBRTC_ERROR: 'WebRTC Error',
      CANCELED: 'Canceled',
      NO_ANSWER: 'No Answer',
      EXPIRES: 'Expires',
      NO_ACK: 'No ACK',
      NO_PRACK: 'No PRACK',
      USER_DENIED_MEDIA_ACCESS: 'User Denied Media Access',
      BAD_MEDIA_DESCRIPTION: 'Bad Media Description',
      RTP_TIMEOUT: 'RTP Timeout'
    },

    supported: {
      UNSUPPORTED: 'none',
      SUPPORTED: 'supported',
      REQUIRED: 'required'
    },

    SIP_ERROR_CAUSES: {
      REDIRECTED: [300, 301, 302, 305, 380],
      BUSY: [486, 600],
      REJECTED: [403, 603],
      NOT_FOUND: [404, 604],
      UNAVAILABLE: [480, 410, 408, 430],
      ADDRESS_INCOMPLETE: [484],
      INCOMPATIBLE_SDP: [488, 606],
      AUTHENTICATION_ERROR: [401, 407]
    },

    // SIP Methods
    ACK: 'ACK',
    BYE: 'BYE',
    CANCEL: 'CANCEL',
    INFO: 'INFO',
    INVITE: 'INVITE',
    MESSAGE: 'MESSAGE',
    NOTIFY: 'NOTIFY',
    OPTIONS: 'OPTIONS',
    REGISTER: 'REGISTER',
    UPDATE: 'UPDATE',
    SUBSCRIBE: 'SUBSCRIBE',
    REFER: 'REFER',
    PRACK: 'PRACK',

    /* SIP Response Reasons
     * DOC: http://www.iana.org/assignments/sip-parameters
     * Copied from https://github.com/versatica/OverSIP/blob/master/lib/oversip/sip/constants.rb#L7
     */
    REASON_PHRASE: {
      100: 'Trying',
      180: 'Ringing',
      181: 'Call Is Being Forwarded',
      182: 'Queued',
      183: 'Session Progress',
      199: 'Early Dialog Terminated', // draft-ietf-sipcore-199
      200: 'OK',
      202: 'Accepted', // RFC 3265
      204: 'No Notification', //RFC 5839
      300: 'Multiple Choices',
      301: 'Moved Permanently',
      302: 'Moved Temporarily',
      305: 'Use Proxy',
      380: 'Alternative Service',
      400: 'Bad Request',
      401: 'Unauthorized',
      402: 'Payment Required',
      403: 'Forbidden',
      404: 'Not Found',
      405: 'Method Not Allowed',
      406: 'Not Acceptable',
      407: 'Proxy Authentication Required',
      408: 'Request Timeout',
      410: 'Gone',
      412: 'Conditional Request Failed', // RFC 3903
      413: 'Request Entity Too Large',
      414: 'Request-URI Too Long',
      415: 'Unsupported Media Type',
      416: 'Unsupported URI Scheme',
      417: 'Unknown Resource-Priority', // RFC 4412
      420: 'Bad Extension',
      421: 'Extension Required',
      422: 'Session Interval Too Small', // RFC 4028
      423: 'Interval Too Brief',
      428: 'Use Identity Header', // RFC 4474
      429: 'Provide Referrer Identity', // RFC 3892
      430: 'Flow Failed', // RFC 5626
      433: 'Anonymity Disallowed', // RFC 5079
      436: 'Bad Identity-Info', // RFC 4474
      437: 'Unsupported Certificate', // RFC 4744
      438: 'Invalid Identity Header', // RFC 4744
      439: 'First Hop Lacks Outbound Support', // RFC 5626
      440: 'Max-Breadth Exceeded', // RFC 5393
      469: 'Bad Info Package', // draft-ietf-sipcore-info-events
      470: 'Consent Needed', // RFC 5360
      478: 'Unresolvable Destination', // Custom code copied from Kamailio.
      480: 'Temporarily Unavailable',
      481: 'Call/Transaction Does Not Exist',
      482: 'Loop Detected',
      483: 'Too Many Hops',
      484: 'Address Incomplete',
      485: 'Ambiguous',
      486: 'Busy Here',
      487: 'Request Terminated',
      488: 'Not Acceptable Here',
      489: 'Bad Event', // RFC 3265
      491: 'Request Pending',
      493: 'Undecipherable',
      494: 'Security Agreement Required', // RFC 3329
      500: 'Internal Server Error',
      501: 'Not Implemented',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Server Time-out',
      505: 'Version Not Supported',
      513: 'Message Too Large',
      580: 'Precondition Failure', // RFC 3312
      600: 'Busy Everywhere',
      603: 'Decline',
      604: 'Does Not Exist Anywhere',
      606: 'Not Acceptable'
    },

    /* SIP Option Tags
     * DOC: http://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml#sip-parameters-4
     */
    OPTION_TAGS: {
      '100rel': true, // RFC 3262
      199: true, // RFC 6228
      answermode: true, // RFC 5373
      'early-session': true, // RFC 3959
      eventlist: true, // RFC 4662
      explicitsub: true, // RFC-ietf-sipcore-refer-explicit-subscription-03
      'from-change': true, // RFC 4916
      'geolocation-http': true, // RFC 6442
      'geolocation-sip': true, // RFC 6442
      gin: true, // RFC 6140
      gruu: true, // RFC 5627
      histinfo: true, // RFC 7044
      ice: true, // RFC 5768
      join: true, // RFC 3911
      'multiple-refer': true, // RFC 5368
      norefersub: true, // RFC 4488
      nosub: true, // RFC-ietf-sipcore-refer-explicit-subscription-03
      outbound: true, // RFC 5626
      path: true, // RFC 3327
      policy: true, // RFC 6794
      precondition: true, // RFC 3312
      pref: true, // RFC 3840
      privacy: true, // RFC 3323
      'recipient-list-invite': true, // RFC 5366
      'recipient-list-message': true, // RFC 5365
      'recipient-list-subscribe': true, // RFC 5367
      replaces: true, // RFC 3891
      'resource-priority': true, // RFC 4412
      'sdp-anat': true, // RFC 4092
      'sec-agree': true, // RFC 3329
      tdialog: true, // RFC 4538
      timer: true, // RFC 4028
      uui: true // RFC 7433
    }
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview Exceptions
 */

/**
 * SIP Exceptions.
 * @augments SIP
 */

module.exports = {
  ConfigurationError: function () {
    var exception = function exception(parameter, value) {
      this.code = 1;
      this.name = 'CONFIGURATION_ERROR';
      this.parameter = parameter;
      this.value = value;
      this.message = !this.value ? 'Missing parameter: ' + this.parameter : 'Invalid value ' + JSON.stringify(this.value) + ' for parameter "' + this.parameter + '"';
    };
    exception.prototype = new Error();
    return exception;
  }(),

  InvalidStateError: function () {
    var exception = function exception(status) {
      this.code = 2;
      this.name = 'INVALID_STATE_ERROR';
      this.status = status;
      this.message = 'Invalid status: ' + status;
    };
    exception.prototype = new Error();
    return exception;
  }(),

  NotSupportedError: function () {
    var exception = function exception(message) {
      this.code = 3;
      this.name = 'NOT_SUPPORTED_ERROR';
      this.message = message;
    };
    exception.prototype = new Error();
    return exception;
  }(),

  GetDescriptionError: function () {
    var exception = function exception(message) {
      this.code = 4;
      this.name = 'GET_DESCRIPTION_ERROR';
      this.message = message;
    };
    exception.prototype = new Error();
    return exception;
  }(),

  RenegotiationError: function () {
    var exception = function exception(message) {
      this.code = 5;
      this.name = 'RENEGOTIATION_ERROR';
      this.message = message;
    };
    exception.prototype = new Error();
    return exception;
  }()
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview SIP TIMERS
 */

/**
 * @augments SIP
 */

var T1 = 500,
    T2 = 4000,
    T4 = 5000;
module.exports = function (timers) {
  var Timers = {
    T1: T1,
    T2: T2,
    T4: T4,
    TIMER_B: 64 * T1,
    TIMER_D: 0 * T1,
    TIMER_F: 64 * T1,
    TIMER_H: 64 * T1,
    TIMER_I: 0 * T1,
    TIMER_J: 0 * T1,
    TIMER_K: 0 * T4,
    TIMER_L: 64 * T1,
    TIMER_M: 64 * T1,
    TIMER_N: 64 * T1,
    PROVISIONAL_RESPONSE_INTERVAL: 60000 // See RFC 3261 Section 13.3.1.1
  };

  ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval'].forEach(function (name) {
    // can't just use timers[name].bind(timers) since it bypasses jasmine's
    // clock-mocking
    Timers[name] = function () {
      return timers[name].apply(timers, arguments);
    };
  });

  return Timers;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview SIP Message Parser
 */

/**
 * Extract and parse every header of a SIP message.
 * @augments SIP
 * @namespace
 */

module.exports = function (SIP) {
  var Parser;

  function getHeader(data, headerStart) {
    var
    // 'start' position of the header.
    start = headerStart,

    // 'end' position of the header.
    end = 0,

    // 'partial end' position of the header.
    partialEnd = 0;

    //End of message.
    if (data.substring(start, start + 2).match(/(^\r\n)/)) {
      return -2;
    }

    while (end === 0) {
      // Partial End of Header.
      partialEnd = data.indexOf('\r\n', start);

      // 'indexOf' returns -1 if the value to be found never occurs.
      if (partialEnd === -1) {
        return partialEnd;
      }

      if (!data.substring(partialEnd + 2, partialEnd + 4).match(/(^\r\n)/) && data.charAt(partialEnd + 2).match(/(^\s+)/)) {
        // Not the end of the message. Continue from the next position.
        start = partialEnd + 2;
      } else {
        end = partialEnd;
      }
    }

    return end;
  }

  function parseHeader(message, data, headerStart, headerEnd) {
    var header,
        idx,
        length,
        parsed,
        hcolonIndex = data.indexOf(':', headerStart),
        headerName = data.substring(headerStart, hcolonIndex).trim(),
        headerValue = data.substring(hcolonIndex + 1, headerEnd).trim();

    // If header-field is well-known, parse it.
    switch (headerName.toLowerCase()) {
      case 'via':
      case 'v':
        message.addHeader('via', headerValue);
        if (message.getHeaders('via').length === 1) {
          parsed = message.parseHeader('Via');
          if (parsed) {
            message.via = parsed;
            message.via_branch = parsed.branch;
          }
        } else {
          parsed = 0;
        }
        break;
      case 'from':
      case 'f':
        message.setHeader('from', headerValue);
        parsed = message.parseHeader('from');
        if (parsed) {
          message.from = parsed;
          message.from_tag = parsed.getParam('tag');
        }
        break;
      case 'to':
      case 't':
        message.setHeader('to', headerValue);
        parsed = message.parseHeader('to');
        if (parsed) {
          message.to = parsed;
          message.to_tag = parsed.getParam('tag');
        }
        break;
      case 'record-route':
        parsed = SIP.Grammar.parse(headerValue, 'Record_Route');

        if (parsed === -1) {
          parsed = undefined;
          break;
        }

        length = parsed.length;
        for (idx = 0; idx < length; idx++) {
          header = parsed[idx];
          message.addHeader('record-route', headerValue.substring(header.position, header.offset));
          message.headers['Record-Route'][message.getHeaders('record-route').length - 1].parsed = header.parsed;
        }
        break;
      case 'call-id':
      case 'i':
        message.setHeader('call-id', headerValue);
        parsed = message.parseHeader('call-id');
        if (parsed) {
          message.call_id = headerValue;
        }
        break;
      case 'contact':
      case 'm':
        parsed = SIP.Grammar.parse(headerValue, 'Contact');

        if (parsed === -1) {
          parsed = undefined;
          break;
        }

        length = parsed.length;
        for (idx = 0; idx < length; idx++) {
          header = parsed[idx];
          message.addHeader('contact', headerValue.substring(header.position, header.offset));
          message.headers['Contact'][message.getHeaders('contact').length - 1].parsed = header.parsed;
        }
        break;
      case 'content-length':
      case 'l':
        message.setHeader('content-length', headerValue);
        parsed = message.parseHeader('content-length');
        break;
      case 'content-type':
      case 'c':
        message.setHeader('content-type', headerValue);
        parsed = message.parseHeader('content-type');
        break;
      case 'cseq':
        message.setHeader('cseq', headerValue);
        parsed = message.parseHeader('cseq');
        if (parsed) {
          message.cseq = parsed.value;
        }
        if (message instanceof SIP.IncomingResponse) {
          message.method = parsed.method;
        }
        break;
      case 'max-forwards':
        message.setHeader('max-forwards', headerValue);
        parsed = message.parseHeader('max-forwards');
        break;
      case 'www-authenticate':
        message.setHeader('www-authenticate', headerValue);
        parsed = message.parseHeader('www-authenticate');
        break;
      case 'proxy-authenticate':
        message.setHeader('proxy-authenticate', headerValue);
        parsed = message.parseHeader('proxy-authenticate');
        break;
      case 'refer-to':
      case 'r':
        message.setHeader('refer-to', headerValue);
        parsed = message.parseHeader('refer-to');
        if (parsed) {
          message.refer_to = parsed;
        }
        break;
      default:
        // Do not parse this header.
        message.setHeader(headerName, headerValue);
        parsed = 0;
    }

    if (parsed === undefined) {
      return {
        error: 'error parsing header "' + headerName + '"'
      };
    } else {
      return true;
    }
  }

  /** Parse SIP Message
   * @function
   * @param {String} message SIP message.
   * @param {Object} logger object.
   * @returns {SIP.IncomingRequest|SIP.IncomingResponse|undefined}
   */
  Parser = {};
  Parser.parseMessage = function (data, ua) {
    var message,
        firstLine,
        contentLength,
        bodyStart,
        parsed,
        headerStart = 0,
        headerEnd = data.indexOf('\r\n'),
        logger = ua.getLogger('sip.parser');

    if (headerEnd === -1) {
      logger.warn('no CRLF found, not a SIP message, discarded');
      return;
    }

    // Parse first line. Check if it is a Request or a Reply.
    firstLine = data.substring(0, headerEnd);
    parsed = SIP.Grammar.parse(firstLine, 'Request_Response');

    if (parsed === -1) {
      logger.warn('error parsing first line of SIP message: "' + firstLine + '"');
      return;
    } else if (!parsed.status_code) {
      message = new SIP.IncomingRequest(ua);
      message.method = parsed.method;
      message.ruri = parsed.uri;
    } else {
      message = new SIP.IncomingResponse(ua);
      message.status_code = parsed.status_code;
      message.reason_phrase = parsed.reason_phrase;
    }

    message.data = data;
    headerStart = headerEnd + 2;

    /* Loop over every line in data. Detect the end of each header and parse
    * it or simply add to the headers collection.
    */
    while (true) {
      headerEnd = getHeader(data, headerStart);

      // The SIP message has normally finished.
      if (headerEnd === -2) {
        bodyStart = headerStart + 2;
        break;
      }
      // data.indexOf returned -1 due to a malformed message.
      else if (headerEnd === -1) {
          logger.error('malformed message');
          return;
        }

      parsed = parseHeader(message, data, headerStart, headerEnd);

      if (parsed !== true) {
        logger.error(parsed.error);
        return;
      }

      headerStart = headerEnd + 2;
    }

    /* RFC3261 18.3.
     * If there are additional bytes in the transport packet
     * beyond the end of the body, they MUST be discarded.
     */
    if (message.hasHeader('content-length')) {
      contentLength = message.getHeader('content-length');
      message.body = data.substr(bodyStart, contentLength);
    } else {
      message.body = data.substring(bodyStart);
    }

    return message;
  };

  SIP.Parser = Parser;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview SIP Message
 */

module.exports = function (SIP) {
  var OutgoingRequest, IncomingMessage, IncomingRequest, IncomingResponse;

  function getSupportedHeader(request) {
    var allowUnregistered = request.ua.configuration.hackAllowUnregisteredOptionTags;
    var optionTags = [];
    var optionTagSet = {};

    if (request.method === SIP.C.REGISTER) {
      optionTags.push('path', 'gruu');
    } else if (request.method === SIP.C.INVITE && (request.ua.contact.pub_gruu || request.ua.contact.temp_gruu)) {
      optionTags.push('gruu');
    }

    if (request.ua.configuration.rel100 === SIP.C.supported.SUPPORTED) {
      optionTags.push('100rel');
    }
    if (request.ua.configuration.replaces === SIP.C.supported.SUPPORTED) {
      optionTags.push('replaces');
    }

    optionTags.push('outbound');

    optionTags = optionTags.concat(request.ua.configuration.extraSupported);

    optionTags = optionTags.filter(function (optionTag) {
      var registered = SIP.C.OPTION_TAGS[optionTag];
      var unique = !optionTagSet[optionTag];
      optionTagSet[optionTag] = true;
      return (registered || allowUnregistered) && unique;
    });

    return 'Supported: ' + optionTags.join(', ') + '\r\n';
  }

  /**
   * @augments SIP
   * @class Class for outgoing SIP request.
   * @param {String} method request method
   * @param {String} ruri request uri
   * @param {SIP.UA} ua
   * @param {Object} params parameters that will have priority over ua.configuration parameters:
   * <br>
   *  - cseq, call_id, from_tag, from_uri, from_displayName, to_uri, to_tag, route_set
   * @param {Object} [headers] extra headers
   * @param {String} [body]
   */
  OutgoingRequest = function OutgoingRequest(method, ruri, ua, params, extraHeaders, body) {
    var to, from, call_id, cseq, to_uri, from_uri;

    params = params || {};

    // Mandatory parameters check
    if (!method || !ruri || !ua) {
      return null;
    }

    this.logger = ua.getLogger('sip.sipmessage');
    this.ua = ua;
    this.headers = {};
    this.method = method;
    this.ruri = ruri;
    this.body = body;
    this.extraHeaders = (extraHeaders || []).slice();
    this.statusCode = params.status_code;
    this.reasonPhrase = params.reason_phrase;

    // Fill the Common SIP Request Headers

    // Route
    if (params.route_set) {
      this.setHeader('route', params.route_set);
    } else if (ua.configuration.usePreloadedRoute) {
      this.setHeader('route', ua.transport.server.sip_uri);
    }

    // Via
    // Empty Via header. Will be filled by the client transaction.
    this.setHeader('via', '');

    // Max-Forwards
    this.setHeader('max-forwards', SIP.UA.C.MAX_FORWARDS);

    // To
    to_uri = params.to_uri || ruri;
    to = params.to_displayName || params.to_displayName === 0 ? '"' + params.to_displayName + '" ' : '';
    to += '<' + (to_uri && to_uri.toRaw ? to_uri.toRaw() : to_uri) + '>';
    to += params.to_tag ? ';tag=' + params.to_tag : '';
    this.to = new SIP.NameAddrHeader.parse(to);
    this.setHeader('to', to);

    // From
    from_uri = params.from_uri || ua.configuration.uri;
    if (params.from_displayName || params.from_displayName === 0) {
      from = '"' + params.from_displayName + '" ';
    } else if (ua.configuration.displayName) {
      from = '"' + ua.configuration.displayName + '" ';
    } else {
      from = '';
    }
    from += '<' + (from_uri && from_uri.toRaw ? from_uri.toRaw() : from_uri) + '>;tag=';
    from += params.from_tag || SIP.Utils.newTag();
    this.from = new SIP.NameAddrHeader.parse(from);
    this.setHeader('from', from);

    // Call-ID
    call_id = params.call_id || ua.configuration.sipjsId + SIP.Utils.createRandomToken(15);
    this.call_id = call_id;
    this.setHeader('call-id', call_id);

    // CSeq
    cseq = params.cseq || Math.floor(Math.random() * 10000);
    this.cseq = cseq;
    this.setHeader('cseq', cseq + ' ' + method);
  };

  OutgoingRequest.prototype = {
    /**
     * Replace the the given header by the given value.
     * @param {String} name header name
     * @param {String | Array} value header value
     */
    setHeader: function setHeader(name, value) {
      this.headers[SIP.Utils.headerize(name)] = value instanceof Array ? value : [value];
    },

    /**
     * Get the value of the given header name at the given position.
     * @param {String} name header name
     * @returns {String|undefined} Returns the specified header, undefined if header doesn't exist.
     */
    getHeader: function getHeader(name) {
      var regexp,
          idx,
          length = this.extraHeaders.length,
          header = this.headers[SIP.Utils.headerize(name)];

      if (header) {
        if (header[0]) {
          return header[0];
        }
      } else {
        regexp = new RegExp('^\\s*' + name + '\\s*:', 'i');
        for (idx = 0; idx < length; idx++) {
          header = this.extraHeaders[idx];
          if (regexp.test(header)) {
            return header.substring(header.indexOf(':') + 1).trim();
          }
        }
      }

      return;
    },

    /**
     * Get the header/s of the given name.
     * @param {String} name header name
     * @returns {Array} Array with all the headers of the specified name.
     */
    getHeaders: function getHeaders(name) {
      var idx,
          length,
          regexp,
          header = this.headers[SIP.Utils.headerize(name)],
          result = [];

      if (header) {
        length = header.length;
        for (idx = 0; idx < length; idx++) {
          result.push(header[idx]);
        }
        return result;
      } else {
        length = this.extraHeaders.length;
        regexp = new RegExp('^\\s*' + name + '\\s*:', 'i');
        for (idx = 0; idx < length; idx++) {
          header = this.extraHeaders[idx];
          if (regexp.test(header)) {
            result.push(header.substring(header.indexOf(':') + 1).trim());
          }
        }
        return result;
      }
    },

    /**
     * Verify the existence of the given header.
     * @param {String} name header name
     * @returns {boolean} true if header with given name exists, false otherwise
     */
    hasHeader: function hasHeader(name) {
      var regexp,
          idx,
          length = this.extraHeaders.length;

      if (this.headers[SIP.Utils.headerize(name)]) {
        return true;
      } else {
        regexp = new RegExp('^\\s*' + name + '\\s*:', 'i');
        for (idx = 0; idx < length; idx++) {
          if (regexp.test(this.extraHeaders[idx])) {
            return true;
          }
        }
      }

      return false;
    },

    toString: function toString() {
      var msg = '',
          header,
          length,
          idx;

      msg += this.method + ' ' + (this.ruri.toRaw ? this.ruri.toRaw() : this.ruri) + ' SIP/2.0\r\n';

      for (header in this.headers) {
        length = this.headers[header].length;
        for (idx = 0; idx < length; idx++) {
          msg += header + ': ' + this.headers[header][idx] + '\r\n';
        }
      }

      length = this.extraHeaders.length;
      for (idx = 0; idx < length; idx++) {
        msg += this.extraHeaders[idx].trim() + '\r\n';
      }

      msg += getSupportedHeader(this);
      msg += 'User-Agent: ' + this.ua.configuration.userAgentString + '\r\n';

      if (this.body) {
        if (typeof this.body === 'string') {
          length = SIP.Utils.str_utf8_length(this.body);
          msg += 'Content-Length: ' + length + '\r\n\r\n';
          msg += this.body;
        } else {
          if (this.body.body && this.body.contentType) {
            length = SIP.Utils.str_utf8_length(this.body.body);
            msg += 'Content-Type: ' + this.body.contentType + '\r\n';
            msg += 'Content-Length: ' + length + '\r\n\r\n';
            msg += this.body.body;
          } else {
            msg += 'Content-Length: ' + 0 + '\r\n\r\n';
          }
        }
      } else {
        msg += 'Content-Length: ' + 0 + '\r\n\r\n';
      }

      return msg;
    }
  };

  /**
   * @augments SIP
   * @class Class for incoming SIP message.
   */
  IncomingMessage = function IncomingMessage() {
    this.data = null;
    this.headers = null;
    this.method = null;
    this.via = null;
    this.via_branch = null;
    this.call_id = null;
    this.cseq = null;
    this.from = null;
    this.from_tag = null;
    this.to = null;
    this.to_tag = null;
    this.body = null;
  };

  IncomingMessage.prototype = {
    /**
    * Insert a header of the given name and value into the last position of the
    * header array.
    * @param {String} name header name
    * @param {String} value header value
    */
    addHeader: function addHeader(name, value) {
      var header = { raw: value };

      name = SIP.Utils.headerize(name);

      if (this.headers[name]) {
        this.headers[name].push(header);
      } else {
        this.headers[name] = [header];
      }
    },

    /**
     * Get the value of the given header name at the given position.
     * @param {String} name header name
     * @returns {String|undefined} Returns the specified header, null if header doesn't exist.
     */
    getHeader: function getHeader(name) {
      var header = this.headers[SIP.Utils.headerize(name)];

      if (header) {
        if (header[0]) {
          return header[0].raw;
        }
      } else {
        return;
      }
    },

    /**
     * Get the header/s of the given name.
     * @param {String} name header name
     * @returns {Array} Array with all the headers of the specified name.
     */
    getHeaders: function getHeaders(name) {
      var idx,
          length,
          header = this.headers[SIP.Utils.headerize(name)],
          result = [];

      if (!header) {
        return [];
      }

      length = header.length;
      for (idx = 0; idx < length; idx++) {
        result.push(header[idx].raw);
      }

      return result;
    },

    /**
     * Verify the existence of the given header.
     * @param {String} name header name
     * @returns {boolean} true if header with given name exists, false otherwise
     */
    hasHeader: function hasHeader(name) {
      return this.headers[SIP.Utils.headerize(name)] ? true : false;
    },

    /**
    * Parse the given header on the given index.
    * @param {String} name header name
    * @param {Number} [idx=0] header index
    * @returns {Object|undefined} Parsed header object, undefined if the header is not present or in case of a parsing error.
    */
    parseHeader: function parseHeader(name, idx) {
      var header, value, parsed;

      name = SIP.Utils.headerize(name);

      idx = idx || 0;

      if (!this.headers[name]) {
        this.logger.log('header "' + name + '" not present');
        return;
      } else if (idx >= this.headers[name].length) {
        this.logger.log('not so many "' + name + '" headers present');
        return;
      }

      header = this.headers[name][idx];
      value = header.raw;

      if (header.parsed) {
        return header.parsed;
      }

      //substitute '-' by '_' for grammar rule matching.
      parsed = SIP.Grammar.parse(value, name.replace(/-/g, '_'));

      if (parsed === -1) {
        this.headers[name].splice(idx, 1); //delete from headers
        this.logger.warn('error parsing "' + name + '" header field with value "' + value + '"');
        return;
      } else {
        header.parsed = parsed;
        return parsed;
      }
    },

    /**
     * Message Header attribute selector. Alias of parseHeader.
     * @param {String} name header name
     * @param {Number} [idx=0] header index
     * @returns {Object|undefined} Parsed header object, undefined if the header is not present or in case of a parsing error.
     *
     * @example
     * message.s('via',3).port
     */
    s: function s(name, idx) {
      return this.parseHeader(name, idx);
    },

    /**
    * Replace the value of the given header by the value.
    * @param {String} name header name
    * @param {String} value header value
    */
    setHeader: function setHeader(name, value) {
      var header = { raw: value };
      this.headers[SIP.Utils.headerize(name)] = [header];
    },

    toString: function toString() {
      return this.data;
    }
  };

  /**
   * @augments IncomingMessage
   * @class Class for incoming SIP request.
   */
  IncomingRequest = function IncomingRequest(ua) {
    this.logger = ua.getLogger('sip.sipmessage');
    this.ua = ua;
    this.headers = {};
    this.ruri = null;
    this.transport = null;
    this.server_transaction = null;
  };
  IncomingRequest.prototype = new IncomingMessage();

  /**
  * Stateful reply.
  * @param {Number} code status code
  * @param {String} reason reason phrase
  * @param {Object} headers extra headers
  * @param {String} body body
  * @param {Function} [onSuccess] onSuccess callback
  * @param {Function} [onFailure] onFailure callback
  */
  // TODO: Get rid of callbacks and make promise based
  IncomingRequest.prototype.reply = function (code, reason, extraHeaders, body, onSuccess, onFailure) {
    var rr,
        vias,
        length,
        idx,
        response,
        to = this.getHeader('To'),
        r = 0,
        v = 0;

    response = SIP.Utils.buildStatusLine(code, reason);
    extraHeaders = (extraHeaders || []).slice();

    if (this.method === SIP.C.INVITE && code > 100 && code <= 200) {
      rr = this.getHeaders('record-route');
      length = rr.length;

      for (r; r < length; r++) {
        response += 'Record-Route: ' + rr[r] + '\r\n';
      }
    }

    vias = this.getHeaders('via');
    length = vias.length;

    for (v; v < length; v++) {
      response += 'Via: ' + vias[v] + '\r\n';
    }

    if (!this.to_tag && code > 100) {
      to += ';tag=' + SIP.Utils.newTag();
    } else if (this.to_tag && !this.s('to').hasParam('tag')) {
      to += ';tag=' + this.to_tag;
    }

    response += 'To: ' + to + '\r\n';
    response += 'From: ' + this.getHeader('From') + '\r\n';
    response += 'Call-ID: ' + this.call_id + '\r\n';
    response += 'CSeq: ' + this.cseq + ' ' + this.method + '\r\n';

    length = extraHeaders.length;
    for (idx = 0; idx < length; idx++) {
      response += extraHeaders[idx].trim() + '\r\n';
    }

    response += getSupportedHeader(this);
    response += 'User-Agent: ' + this.ua.configuration.userAgentString + '\r\n';

    if (body) {
      if (typeof body === 'string') {
        length = SIP.Utils.str_utf8_length(body);
        response += 'Content-Type: application/sdp\r\n';
        response += 'Content-Length: ' + length + '\r\n\r\n';
        response += body;
      } else {
        if (body.body && body.contentType) {
          length = SIP.Utils.str_utf8_length(body.body);
          response += 'Content-Type: ' + body.contentType + '\r\n';
          response += 'Content-Length: ' + length + '\r\n\r\n';
          response += body.body;
        } else {
          response += 'Content-Length: ' + 0 + '\r\n\r\n';
        }
      }
    } else {
      response += 'Content-Length: ' + 0 + '\r\n\r\n';
    }

    this.server_transaction.receiveResponse(code, response).then(onSuccess, onFailure);

    return response;
  };

  /**
  * Stateless reply.
  * @param {Number} code status code
  * @param {String} reason reason phrase
  */
  IncomingRequest.prototype.reply_sl = function (code, reason) {
    var to,
        response,
        v = 0,
        vias = this.getHeaders('via'),
        length = vias.length;

    response = SIP.Utils.buildStatusLine(code, reason);

    for (v; v < length; v++) {
      response += 'Via: ' + vias[v] + '\r\n';
    }

    to = this.getHeader('To');

    if (!this.to_tag && code > 100) {
      to += ';tag=' + SIP.Utils.newTag();
    } else if (this.to_tag && !this.s('to').hasParam('tag')) {
      to += ';tag=' + this.to_tag;
    }

    response += 'To: ' + to + '\r\n';
    response += 'From: ' + this.getHeader('From') + '\r\n';
    response += 'Call-ID: ' + this.call_id + '\r\n';
    response += 'CSeq: ' + this.cseq + ' ' + this.method + '\r\n';
    response += 'User-Agent: ' + this.ua.configuration.userAgentString + '\r\n';
    response += 'Content-Length: ' + 0 + '\r\n\r\n';

    this.transport.send(response);
  };

  /**
   * @augments IncomingMessage
   * @class Class for incoming SIP response.
   */
  IncomingResponse = function IncomingResponse(ua) {
    this.logger = ua.getLogger('sip.sipmessage');
    this.headers = {};
    this.status_code = null;
    this.reason_phrase = null;
  };
  IncomingResponse.prototype = new IncomingMessage();

  SIP.OutgoingRequest = OutgoingRequest;
  SIP.IncomingRequest = IncomingRequest;
  SIP.IncomingResponse = IncomingResponse;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview SIP URI
 */

/**
 * @augments SIP
 * @class Class creating a SIP URI.
 *
 * @param {String} [scheme]
 * @param {String} [user]
 * @param {String} host
 * @param {String} [port]
 * @param {Object} [parameters]
 * @param {Object} [headers]
 *
 */

module.exports = function (SIP) {
  var URI;

  URI = function URI(scheme, user, host, port, parameters, headers) {
    var param, header, raw, normal;

    // Checks
    if (!host) {
      throw new TypeError('missing or invalid "host" parameter');
    }

    // Initialize parameters
    scheme = scheme || SIP.C.SIP;
    this.parameters = {};
    this.headers = {};

    for (param in parameters) {
      this.setParam(param, parameters[param]);
    }

    for (header in headers) {
      this.setHeader(header, headers[header]);
    }

    // Raw URI
    raw = {
      scheme: scheme,
      user: user,
      host: host,
      port: port
    };

    // Normalized URI
    normal = {
      scheme: scheme.toLowerCase(),
      user: user,
      host: host.toLowerCase(),
      port: port
    };

    Object.defineProperties(this, {
      _normal: {
        get: function get() {
          return normal;
        }
      },

      _raw: {
        get: function get() {
          return raw;
        }
      },

      scheme: {
        get: function get() {
          return normal.scheme;
        },
        set: function set(value) {
          raw.scheme = value;
          normal.scheme = value.toLowerCase();
        }
      },

      user: {
        get: function get() {
          return normal.user;
        },
        set: function set(value) {
          normal.user = raw.user = value;
        }
      },

      host: {
        get: function get() {
          return normal.host;
        },
        set: function set(value) {
          raw.host = value;
          normal.host = value.toLowerCase();
        }
      },

      aor: {
        get: function get() {
          return normal.user + '@' + normal.host;
        }
      },

      port: {
        get: function get() {
          return normal.port;
        },
        set: function set(value) {
          normal.port = raw.port = value === 0 ? value : parseInt(value, 10) || null;
        }
      }
    });
  };

  URI.prototype = {
    setParam: function setParam(key, value) {
      if (key) {
        this.parameters[key.toLowerCase()] = typeof value === 'undefined' || value === null ? null : value.toString().toLowerCase();
      }
    },

    getParam: function getParam(key) {
      if (key) {
        return this.parameters[key.toLowerCase()];
      }
    },

    hasParam: function hasParam(key) {
      if (key) {
        return this.parameters.hasOwnProperty(key.toLowerCase()) && true || false;
      }
    },

    deleteParam: function deleteParam(parameter) {
      var value;
      parameter = parameter.toLowerCase();
      if (this.parameters.hasOwnProperty(parameter)) {
        value = this.parameters[parameter];
        delete this.parameters[parameter];
        return value;
      }
    },

    clearParams: function clearParams() {
      this.parameters = {};
    },

    setHeader: function setHeader(name, value) {
      this.headers[SIP.Utils.headerize(name)] = value instanceof Array ? value : [value];
    },

    getHeader: function getHeader(name) {
      if (name) {
        return this.headers[SIP.Utils.headerize(name)];
      }
    },

    hasHeader: function hasHeader(name) {
      if (name) {
        return this.headers.hasOwnProperty(SIP.Utils.headerize(name)) && true || false;
      }
    },

    deleteHeader: function deleteHeader(header) {
      var value;
      header = SIP.Utils.headerize(header);
      if (this.headers.hasOwnProperty(header)) {
        value = this.headers[header];
        delete this.headers[header];
        return value;
      }
    },

    clearHeaders: function clearHeaders() {
      this.headers = {};
    },

    clone: function clone() {
      return new URI(this._raw.scheme, this._raw.user, this._raw.host, this._raw.port, JSON.parse(JSON.stringify(this.parameters)), JSON.parse(JSON.stringify(this.headers)));
    },

    toRaw: function toRaw() {
      return this._toString(this._raw);
    },

    toString: function toString() {
      return this._toString(this._normal);
    },

    _toString: function _toString(uri) {
      var header,
          parameter,
          idx,
          uriString,
          headers = [];

      uriString = uri.scheme + ':';
      // add slashes if it's not a sip(s) URI
      if (!uri.scheme.toLowerCase().match("^sips?$")) {
        uriString += "//";
      }
      if (uri.user) {
        uriString += SIP.Utils.escapeUser(uri.user) + '@';
      }
      uriString += uri.host;
      if (uri.port || uri.port === 0) {
        uriString += ':' + uri.port;
      }

      for (parameter in this.parameters) {
        uriString += ';' + parameter;

        if (this.parameters[parameter] !== null) {
          uriString += '=' + this.parameters[parameter];
        }
      }

      for (header in this.headers) {
        for (idx in this.headers[header]) {
          headers.push(header + '=' + this.headers[header][idx]);
        }
      }

      if (headers.length > 0) {
        uriString += '?' + headers.join('&');
      }

      return uriString;
    }
  };

  /**
    * Parse the given string and returns a SIP.URI instance or undefined if
    * it is an invalid URI.
    * @public
    * @param {String} uri
    */
  URI.parse = function (uri) {
    uri = SIP.Grammar.parse(uri, 'SIP_URI');

    if (uri !== -1) {
      return uri;
    } else {
      return undefined;
    }
  };

  SIP.URI = URI;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview SIP NameAddrHeader
 */

/**
 * @augments SIP
 * @class Class creating a Name Address SIP header.
 *
 * @param {SIP.URI} uri
 * @param {String} [displayName]
 * @param {Object} [parameters]
 *
 */

module.exports = function (SIP) {
  var NameAddrHeader;

  NameAddrHeader = function NameAddrHeader(uri, displayName, parameters) {
    var param;

    // Checks
    if (!uri || !(uri instanceof SIP.URI)) {
      throw new TypeError('missing or invalid "uri" parameter');
    }

    // Initialize parameters
    this.uri = uri;
    this.parameters = {};

    for (param in parameters) {
      this.setParam(param, parameters[param]);
    }

    Object.defineProperties(this, {
      friendlyName: {
        get: function get() {
          return this.displayName || uri.aor;
        }
      },

      displayName: {
        get: function get() {
          return displayName;
        },
        set: function set(value) {
          displayName = value === 0 ? '0' : value;
        }
      }
    });
  };
  NameAddrHeader.prototype = {
    setParam: function setParam(key, value) {
      if (key) {
        this.parameters[key.toLowerCase()] = typeof value === 'undefined' || value === null ? null : value.toString();
      }
    },
    getParam: SIP.URI.prototype.getParam,
    hasParam: SIP.URI.prototype.hasParam,
    deleteParam: SIP.URI.prototype.deleteParam,
    clearParams: SIP.URI.prototype.clearParams,

    clone: function clone() {
      return new NameAddrHeader(this.uri.clone(), this.displayName, JSON.parse(JSON.stringify(this.parameters)));
    },

    toString: function toString() {
      var body, parameter;

      body = this.displayName || this.displayName === 0 ? '"' + this.displayName + '" ' : '';
      body += '<' + this.uri.toString() + '>';

      for (parameter in this.parameters) {
        body += ';' + parameter;

        if (this.parameters[parameter] !== null) {
          body += '=' + this.parameters[parameter];
        }
      }

      return body;
    }
  };

  /**
    * Parse the given string and returns a SIP.NameAddrHeader instance or undefined if
    * it is an invalid NameAddrHeader.
    * @public
    * @param {String} name_addr_header
    */
  NameAddrHeader.parse = function (name_addr_header) {
    name_addr_header = SIP.Grammar.parse(name_addr_header, 'Name_Addr_Header');

    if (name_addr_header !== -1) {
      return name_addr_header;
    } else {
      return undefined;
    }
  };

  SIP.NameAddrHeader = NameAddrHeader;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview SIP Transactions
 */

/**
 * SIP Transactions module.
 * @augments SIP
 */

module.exports = function (SIP) {
  var C = {
    // Transaction states
    STATUS_TRYING: 1,
    STATUS_PROCEEDING: 2,
    STATUS_CALLING: 3,
    STATUS_ACCEPTED: 4,
    STATUS_COMPLETED: 5,
    STATUS_TERMINATED: 6,
    STATUS_CONFIRMED: 7,

    // Transaction types
    NON_INVITE_CLIENT: 'nict',
    NON_INVITE_SERVER: 'nist',
    INVITE_CLIENT: 'ict',
    INVITE_SERVER: 'ist'
  };

  function buildViaHeader(request_sender, transport, id) {
    var via;
    via = 'SIP/2.0/' + (request_sender.ua.configuration.hackViaTcp ? 'TCP' : transport.server.scheme);
    via += ' ' + request_sender.ua.configuration.viaHost + ';branch=' + id;
    if (request_sender.ua.configuration.forceRport) {
      via += ';rport';
    }
    return via;
  }

  /**
  * @augments SIP.Transactions
  * @class Non Invite Client Transaction
  * @param {SIP.RequestSender} request_sender
  * @param {SIP.OutgoingRequest} request
  * @param {SIP.Transport} transport
  */
  var NonInviteClientTransaction = function NonInviteClientTransaction(request_sender, request, transport) {
    var via;

    this.type = C.NON_INVITE_CLIENT;
    this.transport = transport;
    this.id = 'z9hG4bK' + Math.floor(Math.random() * 10000000);
    this.request_sender = request_sender;
    this.request = request;

    this.logger = request_sender.ua.getLogger('sip.transaction.nict', this.id);

    via = buildViaHeader(request_sender, transport, this.id);
    this.request.setHeader('via', via);

    this.request_sender.ua.newTransaction(this);
  };
  NonInviteClientTransaction.prototype = Object.create(SIP.EventEmitter.prototype);

  NonInviteClientTransaction.prototype.stateChanged = function (state) {
    this.state = state;
    this.emit('stateChanged');
  };

  NonInviteClientTransaction.prototype.send = function () {
    var tr = this;

    this.stateChanged(C.STATUS_TRYING);
    this.F = SIP.Timers.setTimeout(tr.timer_F.bind(tr), SIP.Timers.TIMER_F);

    if (!this.transport.send(this.request)) {
      this.onTransportError();
    }
  };

  NonInviteClientTransaction.prototype.onTransportError = function () {
    this.logger.log('transport error occurred, deleting non-INVITE client transaction ' + this.id);
    SIP.Timers.clearTimeout(this.F);
    SIP.Timers.clearTimeout(this.K);
    this.stateChanged(C.STATUS_TERMINATED);
    this.request_sender.ua.destroyTransaction(this);
    this.request_sender.onTransportError();
  };

  NonInviteClientTransaction.prototype.timer_F = function () {
    this.logger.debug('Timer F expired for non-INVITE client transaction ' + this.id);
    this.stateChanged(C.STATUS_TERMINATED);
    this.request_sender.ua.destroyTransaction(this);
    this.request_sender.onRequestTimeout();
  };

  NonInviteClientTransaction.prototype.timer_K = function () {
    this.stateChanged(C.STATUS_TERMINATED);
    this.request_sender.ua.destroyTransaction(this);
  };

  NonInviteClientTransaction.prototype.receiveResponse = function (response) {
    var tr = this,
        status_code = response.status_code;

    if (status_code < 200) {
      switch (this.state) {
        case C.STATUS_TRYING:
        case C.STATUS_PROCEEDING:
          this.stateChanged(C.STATUS_PROCEEDING);
          this.request_sender.receiveResponse(response);
          break;
      }
    } else {
      switch (this.state) {
        case C.STATUS_TRYING:
        case C.STATUS_PROCEEDING:
          this.stateChanged(C.STATUS_COMPLETED);
          SIP.Timers.clearTimeout(this.F);

          if (status_code === 408) {
            this.request_sender.onRequestTimeout();
          } else {
            this.request_sender.receiveResponse(response);
          }

          this.K = SIP.Timers.setTimeout(tr.timer_K.bind(tr), SIP.Timers.TIMER_K);
          break;
        case C.STATUS_COMPLETED:
          break;
      }
    }
  };

  /**
  * @augments SIP.Transactions
  * @class Invite Client Transaction
  * @param {SIP.RequestSender} request_sender
  * @param {SIP.OutgoingRequest} request
  * @param {SIP.Transport} transport
  */
  var InviteClientTransaction = function InviteClientTransaction(request_sender, request, transport) {
    var via,
        tr = this;

    this.type = C.INVITE_CLIENT;
    this.transport = transport;
    this.id = 'z9hG4bK' + Math.floor(Math.random() * 10000000);
    this.request_sender = request_sender;
    this.request = request;

    this.logger = request_sender.ua.getLogger('sip.transaction.ict', this.id);

    via = buildViaHeader(request_sender, transport, this.id);
    this.request.setHeader('via', via);

    this.request_sender.ua.newTransaction(this);

    // Add the cancel property to the request.
    //Will be called from the request instance, not the transaction itself.
    this.request.cancel = function (reason, extraHeaders) {
      extraHeaders = (extraHeaders || []).slice();
      var length = extraHeaders.length;
      var extraHeadersString = null;
      for (var idx = 0; idx < length; idx++) {
        extraHeadersString = (extraHeadersString || '') + extraHeaders[idx].trim() + '\r\n';
      }

      tr.cancel_request(tr, reason, extraHeadersString);
    };
  };
  InviteClientTransaction.prototype = Object.create(SIP.EventEmitter.prototype);

  InviteClientTransaction.prototype.stateChanged = function (state) {
    this.state = state;
    this.emit('stateChanged');
  };

  InviteClientTransaction.prototype.send = function () {
    var tr = this;
    this.stateChanged(C.STATUS_CALLING);
    this.B = SIP.Timers.setTimeout(tr.timer_B.bind(tr), SIP.Timers.TIMER_B);

    if (!this.transport.send(this.request)) {
      this.onTransportError();
    }
  };

  InviteClientTransaction.prototype.onTransportError = function () {
    this.logger.log('transport error occurred, deleting INVITE client transaction ' + this.id);
    SIP.Timers.clearTimeout(this.B);
    SIP.Timers.clearTimeout(this.D);
    SIP.Timers.clearTimeout(this.M);
    this.stateChanged(C.STATUS_TERMINATED);
    this.request_sender.ua.destroyTransaction(this);

    if (this.state !== C.STATUS_ACCEPTED) {
      this.request_sender.onTransportError();
    }
  };

  // RFC 6026 7.2
  InviteClientTransaction.prototype.timer_M = function () {
    this.logger.debug('Timer M expired for INVITE client transaction ' + this.id);

    if (this.state === C.STATUS_ACCEPTED) {
      SIP.Timers.clearTimeout(this.B);
      this.stateChanged(C.STATUS_TERMINATED);
      this.request_sender.ua.destroyTransaction(this);
    }
  };

  // RFC 3261 17.1.1
  InviteClientTransaction.prototype.timer_B = function () {
    this.logger.debug('Timer B expired for INVITE client transaction ' + this.id);
    if (this.state === C.STATUS_CALLING) {
      this.stateChanged(C.STATUS_TERMINATED);
      this.request_sender.ua.destroyTransaction(this);
      this.request_sender.onRequestTimeout();
    }
  };

  InviteClientTransaction.prototype.timer_D = function () {
    this.logger.debug('Timer D expired for INVITE client transaction ' + this.id);
    SIP.Timers.clearTimeout(this.B);
    this.stateChanged(C.STATUS_TERMINATED);
    this.request_sender.ua.destroyTransaction(this);
  };

  InviteClientTransaction.prototype.sendACK = function (options) {
    // TODO: Move PRACK stuff into the transaction layer. That is really where it should be

    var self = this,
        ruri;
    options = options || {};

    if (this.response.getHeader('contact')) {
      ruri = this.response.parseHeader('contact').uri;
    } else {
      ruri = this.request.ruri;
    }
    var ack = new SIP.OutgoingRequest("ACK", ruri, this.request.ua, {
      cseq: this.response.cseq,
      call_id: this.response.call_id,
      from_uri: this.response.from.uri,
      from_tag: this.response.from_tag,
      to_uri: this.response.to.uri,
      to_tag: this.response.to_tag,
      route_set: this.response.getHeaders('record-route').reverse()
    }, options.extraHeaders || [], options.body);

    this.ackSender = new SIP.RequestSender({
      request: ack,
      onRequestTimeout: this.request_sender.applicant.applicant ? this.request_sender.applicant.applicant.onRequestTimeout : function () {
        self.logger.warn("ACK Request timed out");
      },
      onTransportError: this.request_sender.applicant.applicant ? this.request_sender.applicant.applicant.onRequestTransportError : function () {
        self.loigger.warn("ACK Request had a transport error");
      },
      receiveResponse: options.receiveResponse || function () {
        self.logger.warn("Received a response to an ACK which was unexpected. Dropping Response.");
      }
    }, this.request.ua).send();

    return ack;
  };

  InviteClientTransaction.prototype.cancel_request = function (tr, reason, extraHeaders) {
    var request = tr.request;

    this.cancel = SIP.C.CANCEL + ' ' + request.ruri + ' SIP/2.0\r\n';
    this.cancel += 'Via: ' + request.headers['Via'].toString() + '\r\n';

    if (this.request.headers['Route']) {
      this.cancel += 'Route: ' + request.headers['Route'].toString() + '\r\n';
    }

    this.cancel += 'To: ' + request.headers['To'].toString() + '\r\n';
    this.cancel += 'From: ' + request.headers['From'].toString() + '\r\n';
    this.cancel += 'Call-ID: ' + request.headers['Call-ID'].toString() + '\r\n';
    this.cancel += 'CSeq: ' + request.headers['CSeq'].toString().split(' ')[0] + ' CANCEL\r\n';

    if (reason) {
      this.cancel += 'Reason: ' + reason + '\r\n';
    }

    if (extraHeaders) {
      this.cancel += extraHeaders;
    }

    this.cancel += 'Content-Length: 0\r\n\r\n';

    // Send only if a provisional response (>100) has been received.
    if (this.state === C.STATUS_PROCEEDING) {
      this.transport.send(this.cancel);
    }
  };

  InviteClientTransaction.prototype.receiveResponse = function (response) {
    var tr = this,
        status_code = response.status_code;

    // This may create a circular dependency...
    response.transaction = this;

    if (this.response && this.response.status_code === response.status_code && this.response.cseq === response.cseq) {
      this.logger.debug("ICT Received a retransmission for cseq: " + response.cseq);
      if (this.ackSender) {
        this.ackSender.send();
      }
      return;
    }
    this.response = response;

    if (status_code >= 100 && status_code <= 199) {
      switch (this.state) {
        case C.STATUS_CALLING:
          this.stateChanged(C.STATUS_PROCEEDING);
          this.request_sender.receiveResponse(response);
          if (this.cancel) {
            this.transport.send(this.cancel);
          }
          break;
        case C.STATUS_PROCEEDING:
          this.request_sender.receiveResponse(response);
          break;
      }
    } else if (status_code >= 200 && status_code <= 299) {
      switch (this.state) {
        case C.STATUS_CALLING:
        case C.STATUS_PROCEEDING:
          this.stateChanged(C.STATUS_ACCEPTED);
          this.M = SIP.Timers.setTimeout(tr.timer_M.bind(tr), SIP.Timers.TIMER_M);
          this.request_sender.receiveResponse(response);
          break;
        case C.STATUS_ACCEPTED:
          this.request_sender.receiveResponse(response);
          break;
      }
    } else if (status_code >= 300 && status_code <= 699) {
      switch (this.state) {
        case C.STATUS_CALLING:
        case C.STATUS_PROCEEDING:
          this.stateChanged(C.STATUS_COMPLETED);
          this.sendACK();
          this.request_sender.receiveResponse(response);
          break;
        case C.STATUS_COMPLETED:
          this.sendACK();
          break;
      }
    }
  };

  /**
   * @augments SIP.Transactions
   * @class ACK Client Transaction
   * @param {SIP.RequestSender} request_sender
   * @param {SIP.OutgoingRequest} request
   * @param {SIP.Transport} transport
   */
  var AckClientTransaction = function AckClientTransaction(request_sender, request, transport) {
    var via;

    this.transport = transport;
    this.id = 'z9hG4bK' + Math.floor(Math.random() * 10000000);
    this.request_sender = request_sender;
    this.request = request;

    this.logger = request_sender.ua.getLogger('sip.transaction.nict', this.id);

    via = buildViaHeader(request_sender, transport, this.id);
    this.request.setHeader('via', via);
  };
  AckClientTransaction.prototype = Object.create(SIP.EventEmitter.prototype);

  AckClientTransaction.prototype.send = function () {
    if (!this.transport.send(this.request)) {
      this.onTransportError();
    }
  };

  AckClientTransaction.prototype.onTransportError = function () {
    this.logger.log('transport error occurred, for an ACK client transaction ' + this.id);
    this.request_sender.onTransportError();
  };

  /**
  * @augments SIP.Transactions
  * @class Non Invite Server Transaction
  * @param {SIP.IncomingRequest} request
  * @param {SIP.UA} ua
  */
  var NonInviteServerTransaction = function NonInviteServerTransaction(request, ua) {
    this.type = C.NON_INVITE_SERVER;
    this.id = request.via_branch;
    this.request = request;
    this.transport = request.transport;
    this.ua = ua;
    this.last_response = '';
    request.server_transaction = this;

    this.logger = ua.getLogger('sip.transaction.nist', this.id);

    this.state = C.STATUS_TRYING;

    ua.newTransaction(this);
  };
  NonInviteServerTransaction.prototype = Object.create(SIP.EventEmitter.prototype);

  NonInviteServerTransaction.prototype.stateChanged = function (state) {
    this.state = state;
    this.emit('stateChanged');
  };

  NonInviteServerTransaction.prototype.timer_J = function () {
    this.logger.debug('Timer J expired for non-INVITE server transaction ' + this.id);
    this.stateChanged(C.STATUS_TERMINATED);
    this.ua.destroyTransaction(this);
  };

  NonInviteServerTransaction.prototype.onTransportError = function () {
    if (!this.transportError) {
      this.transportError = true;

      this.logger.log('transport error occurred, deleting non-INVITE server transaction ' + this.id);

      SIP.Timers.clearTimeout(this.J);
      this.stateChanged(C.STATUS_TERMINATED);
      this.ua.destroyTransaction(this);
    }
  };

  NonInviteServerTransaction.prototype.receiveResponse = function (status_code, response) {
    var tr = this;
    var deferred = SIP.Utils.defer();

    if (status_code === 100) {
      /* RFC 4320 4.1
       * 'A SIP element MUST NOT
       * send any provisional response with a
       * Status-Code other than 100 to a non-INVITE request.'
       */
      switch (this.state) {
        case C.STATUS_TRYING:
          this.stateChanged(C.STATUS_PROCEEDING);
          if (!this.transport.send(response)) {
            this.onTransportError();
          }
          break;
        case C.STATUS_PROCEEDING:
          this.last_response = response;
          if (!this.transport.send(response)) {
            this.onTransportError();
            deferred.reject();
          } else {
            deferred.resolve();
          }
          break;
      }
    } else if (status_code >= 200 && status_code <= 699) {
      switch (this.state) {
        case C.STATUS_TRYING:
        case C.STATUS_PROCEEDING:
          this.stateChanged(C.STATUS_COMPLETED);
          this.last_response = response;
          this.J = SIP.Timers.setTimeout(tr.timer_J.bind(tr), SIP.Timers.TIMER_J);
          if (!this.transport.send(response)) {
            this.onTransportError();
            deferred.reject();
          } else {
            deferred.resolve();
          }
          break;
        case C.STATUS_COMPLETED:
          break;
      }
    }

    return deferred.promise;
  };

  /**
  * @augments SIP.Transactions
  * @class Invite Server Transaction
  * @param {SIP.IncomingRequest} request
  * @param {SIP.UA} ua
  */
  var InviteServerTransaction = function InviteServerTransaction(request, ua) {
    this.type = C.INVITE_SERVER;
    this.id = request.via_branch;
    this.request = request;
    this.transport = request.transport;
    this.ua = ua;
    this.last_response = '';
    request.server_transaction = this;

    this.logger = ua.getLogger('sip.transaction.ist', this.id);

    this.state = C.STATUS_PROCEEDING;

    ua.newTransaction(this);

    this.resendProvisionalTimer = null;

    request.reply(100);
  };
  InviteServerTransaction.prototype = Object.create(SIP.EventEmitter.prototype);

  InviteServerTransaction.prototype.stateChanged = function (state) {
    this.state = state;
    this.emit('stateChanged');
  };

  InviteServerTransaction.prototype.timer_H = function () {
    this.logger.debug('Timer H expired for INVITE server transaction ' + this.id);

    if (this.state === C.STATUS_COMPLETED) {
      this.logger.warn('transactions', 'ACK for INVITE server transaction was never received, call will be terminated');
    }

    this.stateChanged(C.STATUS_TERMINATED);
    this.ua.destroyTransaction(this);
  };

  InviteServerTransaction.prototype.timer_I = function () {
    this.stateChanged(C.STATUS_TERMINATED);
    this.ua.destroyTransaction(this);
  };

  // RFC 6026 7.1
  InviteServerTransaction.prototype.timer_L = function () {
    this.logger.debug('Timer L expired for INVITE server transaction ' + this.id);

    if (this.state === C.STATUS_ACCEPTED) {
      this.stateChanged(C.STATUS_TERMINATED);
      this.ua.destroyTransaction(this);
    }
  };

  InviteServerTransaction.prototype.onTransportError = function () {
    if (!this.transportError) {
      this.transportError = true;

      this.logger.log('transport error occurred, deleting INVITE server transaction ' + this.id);

      if (this.resendProvisionalTimer !== null) {
        SIP.Timers.clearInterval(this.resendProvisionalTimer);
        this.resendProvisionalTimer = null;
      }

      SIP.Timers.clearTimeout(this.L);
      SIP.Timers.clearTimeout(this.H);
      SIP.Timers.clearTimeout(this.I);

      this.stateChanged(C.STATUS_TERMINATED);
      this.ua.destroyTransaction(this);
    }
  };

  InviteServerTransaction.prototype.resend_provisional = function () {
    if (!this.transport.send(this.last_response)) {
      this.onTransportError();
    }
  };

  // INVITE Server Transaction RFC 3261 17.2.1
  InviteServerTransaction.prototype.receiveResponse = function (status_code, response) {
    var tr = this;
    var deferred = SIP.Utils.defer();

    if (status_code >= 100 && status_code <= 199) {
      switch (this.state) {
        case C.STATUS_PROCEEDING:
          if (!this.transport.send(response)) {
            this.onTransportError();
          }
          this.last_response = response;
          break;
      }
    }

    if (status_code > 100 && status_code <= 199 && this.state === C.STATUS_PROCEEDING) {
      // Trigger the resendProvisionalTimer only for the first non 100 provisional response.
      if (this.resendProvisionalTimer === null) {
        this.resendProvisionalTimer = SIP.Timers.setInterval(tr.resend_provisional.bind(tr), SIP.Timers.PROVISIONAL_RESPONSE_INTERVAL);
      }
    } else if (status_code >= 200 && status_code <= 299) {
      switch (this.state) {
        case C.STATUS_PROCEEDING:
          this.stateChanged(C.STATUS_ACCEPTED);
          this.last_response = response;
          this.L = SIP.Timers.setTimeout(tr.timer_L.bind(tr), SIP.Timers.TIMER_L);

          if (this.resendProvisionalTimer !== null) {
            SIP.Timers.clearInterval(this.resendProvisionalTimer);
            this.resendProvisionalTimer = null;
          }
        /* falls through */
        case C.STATUS_ACCEPTED:
          // Note that this point will be reached for proceeding tr.state also.
          if (!this.transport.send(response)) {
            this.onTransportError();
            deferred.reject();
          } else {
            deferred.resolve();
          }
          break;
      }
    } else if (status_code >= 300 && status_code <= 699) {
      switch (this.state) {
        case C.STATUS_PROCEEDING:
          if (this.resendProvisionalTimer !== null) {
            SIP.Timers.clearInterval(this.resendProvisionalTimer);
            this.resendProvisionalTimer = null;
          }

          if (!this.transport.send(response)) {
            this.onTransportError();
            deferred.reject();
          } else {
            this.stateChanged(C.STATUS_COMPLETED);
            this.H = SIP.Timers.setTimeout(tr.timer_H.bind(tr), SIP.Timers.TIMER_H);
            deferred.resolve();
          }
          break;
      }
    }

    return deferred.promise;
  };

  /**
   * @function
   * @param {SIP.UA} ua
   * @param {SIP.IncomingRequest} request
   *
   * @return {boolean}
   * INVITE:
   *  _true_ if retransmission
   *  _false_ new request
   *
   * ACK:
   *  _true_  ACK to non2xx response
   *  _false_ ACK must be passed to TU (accepted state)
   *          ACK to 2xx response
   *
   * CANCEL:
   *  _true_  no matching invite transaction
   *  _false_ matching invite transaction and no final response sent
   *
   * OTHER:
   *  _true_  retransmission
   *  _false_ new request
   */
  var checkTransaction = function checkTransaction(ua, request) {
    var tr;

    switch (request.method) {
      case SIP.C.INVITE:
        tr = ua.transactions.ist[request.via_branch];
        if (tr) {
          switch (tr.state) {
            case C.STATUS_PROCEEDING:
              tr.transport.send(tr.last_response);
              break;

            // RFC 6026 7.1 Invite retransmission
            //received while in C.STATUS_ACCEPTED state. Absorb it.
            case C.STATUS_ACCEPTED:
              break;
          }
          return true;
        }
        break;
      case SIP.C.ACK:
        tr = ua.transactions.ist[request.via_branch];

        // RFC 6026 7.1
        if (tr) {
          if (tr.state === C.STATUS_ACCEPTED) {
            return false;
          } else if (tr.state === C.STATUS_COMPLETED) {
            tr.stateChanged(C.STATUS_CONFIRMED);
            tr.I = SIP.Timers.setTimeout(tr.timer_I.bind(tr), SIP.Timers.TIMER_I);
            return true;
          }
        }

        // ACK to 2XX Response.
        else {
            return false;
          }
        break;
      case SIP.C.CANCEL:
        tr = ua.transactions.ist[request.via_branch];
        if (tr) {
          request.reply_sl(200);
          if (tr.state === C.STATUS_PROCEEDING) {
            return false;
          } else {
            return true;
          }
        } else {
          request.reply_sl(481);
          return true;
        }
      default:

        // Non-INVITE Server Transaction RFC 3261 17.2.2
        tr = ua.transactions.nist[request.via_branch];
        if (tr) {
          switch (tr.state) {
            case C.STATUS_TRYING:
              break;
            case C.STATUS_PROCEEDING:
            case C.STATUS_COMPLETED:
              tr.transport.send(tr.last_response);
              break;
          }
          return true;
        }
        break;
    }
  };

  SIP.Transactions = {
    C: C,
    checkTransaction: checkTransaction,
    NonInviteClientTransaction: NonInviteClientTransaction,
    InviteClientTransaction: InviteClientTransaction,
    AckClientTransaction: AckClientTransaction,
    NonInviteServerTransaction: NonInviteServerTransaction,
    InviteServerTransaction: InviteServerTransaction
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview SIP Dialog
 */

/**
 * @augments SIP
 * @class Class creating a SIP dialog.
 * @param {SIP.RTCSession} owner
 * @param {SIP.IncomingRequest|SIP.IncomingResponse} message
 * @param {Enum} type UAC / UAS
 * @param {Enum} state SIP.Dialog.C.STATUS_EARLY / SIP.Dialog.C.STATUS_CONFIRMED
 */

module.exports = function (SIP) {

  var RequestSender = __webpack_require__(17)(SIP);

  var Dialog,
      C = {
    // Dialog states
    STATUS_EARLY: 1,
    STATUS_CONFIRMED: 2
  };

  // RFC 3261 12.1
  Dialog = function Dialog(owner, message, type, state) {
    var contact;

    this.uac_pending_reply = false;
    this.uas_pending_reply = false;

    if (!message.hasHeader('contact')) {
      return {
        error: 'unable to create a Dialog without Contact header field'
      };
    }

    if (message instanceof SIP.IncomingResponse) {
      state = message.status_code < 200 ? C.STATUS_EARLY : C.STATUS_CONFIRMED;
    } else {
      // Create confirmed dialog if state is not defined
      state = state || C.STATUS_CONFIRMED;
    }

    contact = message.parseHeader('contact');

    // RFC 3261 12.1.1
    if (type === 'UAS') {
      this.id = {
        call_id: message.call_id,
        local_tag: message.to_tag,
        remote_tag: message.from_tag,
        toString: function toString() {
          return this.call_id + this.local_tag + this.remote_tag;
        }
      };
      this.state = state;
      this.remote_seqnum = message.cseq;
      this.local_uri = message.parseHeader('to').uri;
      this.remote_uri = message.parseHeader('from').uri;
      this.remote_target = contact.uri;
      this.route_set = message.getHeaders('record-route');
      this.invite_seqnum = message.cseq;
      this.local_seqnum = message.cseq;
    }
    // RFC 3261 12.1.2
    else if (type === 'UAC') {
        this.id = {
          call_id: message.call_id,
          local_tag: message.from_tag,
          remote_tag: message.to_tag,
          toString: function toString() {
            return this.call_id + this.local_tag + this.remote_tag;
          }
        };
        this.state = state;
        this.invite_seqnum = message.cseq;
        this.local_seqnum = message.cseq;
        this.local_uri = message.parseHeader('from').uri;
        this.pracked = [];
        this.remote_uri = message.parseHeader('to').uri;
        this.remote_target = contact.uri;
        this.route_set = message.getHeaders('record-route').reverse();
      }

    this.logger = owner.ua.getLogger('sip.dialog', this.id.toString());
    this.owner = owner;
    owner.ua.dialogs[this.id.toString()] = this;
    this.logger.log('new ' + type + ' dialog created with status ' + (this.state === C.STATUS_EARLY ? 'EARLY' : 'CONFIRMED'));
    owner.emit('dialog', this);
  };

  Dialog.prototype = {
    /**
     * @param {SIP.IncomingMessage} message
     * @param {Enum} UAC/UAS
     */
    update: function update(message, type) {
      this.state = C.STATUS_CONFIRMED;

      this.logger.log('dialog ' + this.id.toString() + '  changed to CONFIRMED state');

      if (type === 'UAC') {
        // RFC 3261 13.2.2.4
        this.route_set = message.getHeaders('record-route').reverse();
      }
    },

    terminate: function terminate() {
      this.logger.log('dialog ' + this.id.toString() + ' deleted');
      if (this.sessionDescriptionHandler && this.state !== C.STATUS_CONFIRMED) {
        // TODO: This should call .close() on the handler when implemented
        this.sessionDescriptionHandler.close();
      }
      delete this.owner.ua.dialogs[this.id.toString()];
    },

    /**
    * @param {String} method request method
    * @param {Object} extraHeaders extra headers
    * @returns {SIP.OutgoingRequest}
    */

    // RFC 3261 12.2.1.1
    createRequest: function createRequest(method, extraHeaders, body) {
      var cseq, request;
      extraHeaders = (extraHeaders || []).slice();

      if (!this.local_seqnum) {
        this.local_seqnum = Math.floor(Math.random() * 10000);
      }

      cseq = method === SIP.C.CANCEL || method === SIP.C.ACK ? this.invite_seqnum : this.local_seqnum += 1;

      request = new SIP.OutgoingRequest(method, this.remote_target, this.owner.ua, {
        'cseq': cseq,
        'call_id': this.id.call_id,
        'from_uri': this.local_uri,
        'from_tag': this.id.local_tag,
        'to_uri': this.remote_uri,
        'to_tag': this.id.remote_tag,
        'route_set': this.route_set
      }, extraHeaders, body);

      request.dialog = this;

      return request;
    },

    /**
    * @param {SIP.IncomingRequest} request
    * @returns {Boolean}
    */

    // RFC 3261 12.2.2
    checkInDialogRequest: function checkInDialogRequest(request) {
      var self = this;

      if (!this.remote_seqnum) {
        this.remote_seqnum = request.cseq;
      } else if (request.cseq < this.remote_seqnum) {
        //Do not try to reply to an ACK request.
        if (request.method !== SIP.C.ACK) {
          request.reply(500);
        }
        if (request.cseq === this.invite_seqnum) {
          return true;
        }
        return false;
      }

      switch (request.method) {
        // RFC3261 14.2 Modifying an Existing Session -UAS BEHAVIOR-
        case SIP.C.INVITE:
          if (this.uac_pending_reply === true) {
            request.reply(491);
          } else if (this.uas_pending_reply === true && request.cseq > this.remote_seqnum) {
            var retryAfter = (Math.random() * 10 | 0) + 1;
            request.reply(500, null, ['Retry-After:' + retryAfter]);
            this.remote_seqnum = request.cseq;
            return false;
          } else {
            this.uas_pending_reply = true;
            request.server_transaction.on('stateChanged', function stateChanged() {
              if (this.state === SIP.Transactions.C.STATUS_ACCEPTED || this.state === SIP.Transactions.C.STATUS_COMPLETED || this.state === SIP.Transactions.C.STATUS_TERMINATED) {

                this.removeListener('stateChanged', stateChanged);
                self.uas_pending_reply = false;
              }
            });
          }

          // RFC3261 12.2.2 Replace the dialog`s remote target URI if the request is accepted
          if (request.hasHeader('contact')) {
            request.server_transaction.on('stateChanged', function () {
              if (this.state === SIP.Transactions.C.STATUS_ACCEPTED) {
                self.remote_target = request.parseHeader('contact').uri;
              }
            });
          }
          break;
        case SIP.C.NOTIFY:
          // RFC6665 3.2 Replace the dialog`s remote target URI if the request is accepted
          if (request.hasHeader('contact')) {
            request.server_transaction.on('stateChanged', function () {
              if (this.state === SIP.Transactions.C.STATUS_COMPLETED) {
                self.remote_target = request.parseHeader('contact').uri;
              }
            });
          }
          break;
      }

      if (request.cseq > this.remote_seqnum) {
        this.remote_seqnum = request.cseq;
      }

      return true;
    },

    sendRequest: function sendRequest(applicant, method, options) {
      options = options || {};

      var extraHeaders = (options.extraHeaders || []).slice();

      var body = null;
      if (options.body) {
        if (options.body.body) {
          body = options.body;
        } else {
          body = {};
          body.body = options.body;
          if (options.contentType) {
            body.contentType = options.contentType;
          }
        }
      }

      var request = this.createRequest(method, extraHeaders, body),
          request_sender = new RequestSender(this, applicant, request);

      request_sender.send();

      return request;
    },

    /**
    * @param {SIP.IncomingRequest} request
    */
    receiveRequest: function receiveRequest(request) {
      //Check in-dialog request
      if (!this.checkInDialogRequest(request)) {
        return;
      }

      this.owner.receiveRequest(request);
    }
  };

  Dialog.C = C;
  SIP.Dialog = Dialog;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileoverview In-Dialog Request Sender
 */

/**
 * @augments SIP.Dialog
 * @class Class creating an In-dialog request sender.
 * @param {SIP.Dialog} dialog
 * @param {Object} applicant
 * @param {SIP.OutgoingRequest} request
 */
/**
 * @fileoverview in-Dialog Request Sender
 */

module.exports = function (SIP) {
  var RequestSender;

  RequestSender = function RequestSender(dialog, applicant, request) {

    this.dialog = dialog;
    this.applicant = applicant;
    this.request = request;

    // RFC3261 14.1 Modifying an Existing Session. UAC Behavior.
    this.reattempt = false;
    this.reattemptTimer = null;
  };

  RequestSender.prototype = {
    send: function send() {
      var self = this,
          request_sender = new SIP.RequestSender(this, this.dialog.owner.ua);

      request_sender.send();

      // RFC3261 14.2 Modifying an Existing Session -UAC BEHAVIOR-
      if (this.request.method === SIP.C.INVITE && request_sender.clientTransaction.state !== SIP.Transactions.C.STATUS_TERMINATED) {
        this.dialog.uac_pending_reply = true;
        request_sender.clientTransaction.on('stateChanged', function stateChanged() {
          if (this.state === SIP.Transactions.C.STATUS_ACCEPTED || this.state === SIP.Transactions.C.STATUS_COMPLETED || this.state === SIP.Transactions.C.STATUS_TERMINATED) {

            this.removeListener('stateChanged', stateChanged);
            self.dialog.uac_pending_reply = false;
          }
        });
      }
    },

    onRequestTimeout: function onRequestTimeout() {
      this.applicant.onRequestTimeout();
    },

    onTransportError: function onTransportError() {
      this.applicant.onTransportError();
    },

    receiveResponse: function receiveResponse(response) {
      var self = this;

      // RFC3261 12.2.1.2 408 or 481 is received for a request within a dialog.
      if (response.status_code === 408 || response.status_code === 481) {
        this.applicant.onDialogError(response);
      } else if (response.method === SIP.C.INVITE && response.status_code === 491) {
        if (this.reattempt) {
          this.applicant.receiveResponse(response);
        } else {
          this.request.cseq.value = this.dialog.local_seqnum += 1;
          this.reattemptTimer = SIP.Timers.setTimeout(function () {
            if (self.applicant.owner.status !== SIP.Session.C.STATUS_TERMINATED) {
              self.reattempt = true;
              self.request_sender.send();
            }
          }, this.getReattemptTimeout());
        }
      } else {
        this.applicant.receiveResponse(response);
      }
    }
  };

  return RequestSender;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileoverview Request Sender
 */

/**
 * @augments SIP
 * @class Class creating a request sender.
 * @param {Object} applicant
 * @param {SIP.UA} ua
 */

module.exports = function (SIP) {
  var RequestSender;

  RequestSender = function RequestSender(applicant, ua) {
    this.logger = ua.getLogger('sip.requestsender');
    this.ua = ua;
    this.applicant = applicant;
    this.method = applicant.request.method;
    this.request = applicant.request;
    this.credentials = null;
    this.challenged = false;
    this.staled = false;

    // If ua is in closing process or even closed just allow sending Bye and ACK
    if (ua.status === SIP.UA.C.STATUS_USER_CLOSED && (this.method !== SIP.C.BYE || this.method !== SIP.C.ACK)) {
      this.onTransportError();
    }
  };

  /**
  * Create the client transaction and send the message.
  */
  RequestSender.prototype = {
    send: function send() {
      switch (this.method) {
        case "INVITE":
          this.clientTransaction = new SIP.Transactions.InviteClientTransaction(this, this.request, this.ua.transport);
          break;
        case "ACK":
          this.clientTransaction = new SIP.Transactions.AckClientTransaction(this, this.request, this.ua.transport);
          break;
        default:
          this.clientTransaction = new SIP.Transactions.NonInviteClientTransaction(this, this.request, this.ua.transport);
      }
      this.clientTransaction.send();

      return this.clientTransaction;
    },

    /**
    * Callback fired when receiving a request timeout error from the client transaction.
    * To be re-defined by the applicant.
    * @event
    */
    onRequestTimeout: function onRequestTimeout() {
      this.applicant.onRequestTimeout();
    },

    /**
    * Callback fired when receiving a transport error from the client transaction.
    * To be re-defined by the applicant.
    * @event
    */
    onTransportError: function onTransportError() {
      this.applicant.onTransportError();
    },

    /**
    * Called from client transaction when receiving a correct response to the request.
    * Authenticate request if needed or pass the response back to the applicant.
    * @param {SIP.IncomingResponse} response
    */
    receiveResponse: function receiveResponse(response) {
      var cseq,
          challenge,
          authorization_header_name,
          status_code = response.status_code;

      /*
      * Authentication
      * Authenticate once. _challenged_ flag used to avoid infinite authentications.
      */
      if (status_code === 401 || status_code === 407) {

        // Get and parse the appropriate WWW-Authenticate or Proxy-Authenticate header.
        if (response.status_code === 401) {
          challenge = response.parseHeader('www-authenticate');
          authorization_header_name = 'authorization';
        } else {
          challenge = response.parseHeader('proxy-authenticate');
          authorization_header_name = 'proxy-authorization';
        }

        // Verify it seems a valid challenge.
        if (!challenge) {
          this.logger.warn(response.status_code + ' with wrong or missing challenge, cannot authenticate');
          this.applicant.receiveResponse(response);
          return;
        }

        if (!this.challenged || !this.staled && challenge.stale === true) {
          if (!this.credentials) {
            this.credentials = this.ua.configuration.authenticationFactory(this.ua);
          }

          // Verify that the challenge is really valid.
          if (!this.credentials.authenticate(this.request, challenge)) {
            this.applicant.receiveResponse(response);
            return;
          }
          this.challenged = true;

          if (challenge.stale) {
            this.staled = true;
          }

          if (response.method === SIP.C.REGISTER) {
            cseq = this.applicant.cseq += 1;
          } else if (this.request.dialog) {
            cseq = this.request.dialog.local_seqnum += 1;
          } else {
            cseq = this.request.cseq + 1;
            this.request.cseq = cseq;
          }
          this.request.setHeader('cseq', cseq + ' ' + this.method);

          this.request.setHeader(authorization_header_name, this.credentials.toString());
          this.send();
        } else {
          this.applicant.receiveResponse(response);
        }
      } else {
        this.applicant.receiveResponse(response);
      }
    }
  };

  SIP.RequestSender = RequestSender;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (SIP) {

  var RegisterContext;

  RegisterContext = function RegisterContext(ua) {
    var params = {},
        regId = 1;

    this.registrar = ua.configuration.registrarServer;
    this.expires = ua.configuration.registerExpires;

    // Contact header
    this.contact = ua.contact.toString();

    if (regId) {
      this.contact += ';reg-id=' + regId;
      this.contact += ';+sip.instance="<urn:uuid:' + ua.configuration.instanceId + '>"';
    }

    // Call-ID and CSeq values RFC3261 10.2
    this.call_id = SIP.Utils.createRandomToken(22);
    this.cseq = Math.floor(Math.random() * 10000);

    this.to_uri = ua.configuration.uri;

    params.to_uri = this.to_uri;
    params.to_displayName = ua.configuration.displayName;
    params.call_id = this.call_id;
    params.cseq = this.cseq;

    // Extends ClientContext
    SIP.Utils.augment(this, SIP.ClientContext, [ua, 'REGISTER', this.registrar, { params: params }]);

    this.registrationTimer = null;
    this.registrationExpiredTimer = null;

    // Set status
    this.registered = false;

    this.logger = ua.getLogger('sip.registercontext');
  };

  RegisterContext.prototype = {
    register: function register(options) {
      var self = this,
          extraHeaders;

      // Handle Options
      this.options = options || {};
      extraHeaders = (this.options.extraHeaders || []).slice();
      extraHeaders.push('Contact: ' + this.contact + ';expires=' + this.expires);
      extraHeaders.push('Allow: ' + SIP.UA.C.ALLOWED_METHODS.toString());

      // Save original extraHeaders to be used in .close
      this.closeHeaders = this.options.closeWithHeaders ? (this.options.extraHeaders || []).slice() : [];

      this.receiveResponse = function (response) {
        var contact,
            expires,
            contacts = response.getHeaders('contact').length,
            cause;

        // Discard responses to older REGISTER/un-REGISTER requests.
        if (response.cseq !== this.cseq) {
          return;
        }

        // Clear registration timer
        if (this.registrationTimer !== null) {
          SIP.Timers.clearTimeout(this.registrationTimer);
          this.registrationTimer = null;
        }

        switch (true) {
          case /^1[0-9]{2}$/.test(response.status_code):
            this.emit('progress', response);
            break;
          case /^2[0-9]{2}$/.test(response.status_code):
            this.emit('accepted', response);

            if (response.hasHeader('expires')) {
              expires = response.getHeader('expires');
            }

            if (this.registrationExpiredTimer !== null) {
              SIP.Timers.clearTimeout(this.registrationExpiredTimer);
              this.registrationExpiredTimer = null;
            }

            // Search the Contact pointing to us and update the expires value accordingly.
            if (!contacts) {
              this.logger.warn('no Contact header in response to REGISTER, response ignored');
              break;
            }

            while (contacts--) {
              contact = response.parseHeader('contact', contacts);
              if (contact.uri.user === this.ua.contact.uri.user) {
                expires = contact.getParam('expires');
                break;
              } else {
                contact = null;
              }
            }

            if (!contact) {
              this.logger.warn('no Contact header pointing to us, response ignored');
              break;
            }

            if (!expires) {
              expires = this.expires;
            }

            // Re-Register before the expiration interval has elapsed.
            // For that, decrease the expires value. ie: 3 seconds
            this.registrationTimer = SIP.Timers.setTimeout(function () {
              self.registrationTimer = null;
              self.register(self.options);
            }, expires * 1000 - 3000);
            this.registrationExpiredTimer = SIP.Timers.setTimeout(function () {
              self.logger.warn('registration expired');
              if (self.registered) {
                self.unregistered(null, SIP.C.causes.EXPIRES);
              }
            }, expires * 1000);

            //Save gruu values
            if (contact.hasParam('temp-gruu')) {
              this.ua.contact.temp_gruu = SIP.URI.parse(contact.getParam('temp-gruu').replace(/"/g, ''));
            }
            if (contact.hasParam('pub-gruu')) {
              this.ua.contact.pub_gruu = SIP.URI.parse(contact.getParam('pub-gruu').replace(/"/g, ''));
            }

            this.registered = true;
            this.emit('registered', response || null);
            break;
          // Interval too brief RFC3261 10.2.8
          case /^423$/.test(response.status_code):
            if (response.hasHeader('min-expires')) {
              // Increase our registration interval to the suggested minimum
              this.expires = response.getHeader('min-expires');
              // Attempt the registration again immediately
              this.register(this.options);
            } else {
              //This response MUST contain a Min-Expires header field
              this.logger.warn('423 response received for REGISTER without Min-Expires');
              this.registrationFailure(response, SIP.C.causes.SIP_FAILURE_CODE);
            }
            break;
          default:
            cause = SIP.Utils.sipErrorCause(response.status_code);
            this.registrationFailure(response, cause);
        }
      };

      this.onRequestTimeout = function () {
        this.registrationFailure(null, SIP.C.causes.REQUEST_TIMEOUT);
      };

      this.onTransportError = function () {
        this.registrationFailure(null, SIP.C.causes.CONNECTION_ERROR);
      };

      this.cseq++;
      this.request.cseq = this.cseq;
      this.request.setHeader('cseq', this.cseq + ' REGISTER');
      this.request.extraHeaders = extraHeaders;
      this.send();
    },

    registrationFailure: function registrationFailure(response, cause) {
      this.emit('failed', response || null, cause || null);
    },

    onTransportClosed: function onTransportClosed() {
      this.registered_before = this.registered;
      if (this.registrationTimer !== null) {
        SIP.Timers.clearTimeout(this.registrationTimer);
        this.registrationTimer = null;
      }

      if (this.registrationExpiredTimer !== null) {
        SIP.Timers.clearTimeout(this.registrationExpiredTimer);
        this.registrationExpiredTimer = null;
      }

      if (this.registered) {
        this.unregistered(null, SIP.C.causes.CONNECTION_ERROR);
      }
    },

    onTransportConnected: function onTransportConnected() {
      this.register(this.options);
    },

    close: function close() {
      var options = {
        all: false,
        extraHeaders: this.closeHeaders
      };

      this.registered_before = this.registered;
      if (this.registered) {
        this.unregister(options);
      }
    },

    unregister: function unregister(options) {
      var extraHeaders;

      options = options || {};

      if (!this.registered && !options.all) {
        this.logger.warn('Already unregistered, but sending an unregister anyways.');
      }

      extraHeaders = (options.extraHeaders || []).slice();

      this.registered = false;

      // Clear the registration timer.
      if (this.registrationTimer !== null) {
        SIP.Timers.clearTimeout(this.registrationTimer);
        this.registrationTimer = null;
      }

      if (options.all) {
        extraHeaders.push('Contact: *');
        extraHeaders.push('Expires: 0');
      } else {
        extraHeaders.push('Contact: ' + this.contact + ';expires=0');
      }

      this.receiveResponse = function (response) {
        var cause;

        switch (true) {
          case /^1[0-9]{2}$/.test(response.status_code):
            this.emit('progress', response);
            break;
          case /^2[0-9]{2}$/.test(response.status_code):
            this.emit('accepted', response);
            if (this.registrationExpiredTimer !== null) {
              SIP.Timers.clearTimeout(this.registrationExpiredTimer);
              this.registrationExpiredTimer = null;
            }
            this.unregistered(response);
            break;
          default:
            cause = SIP.Utils.sipErrorCause(response.status_code);
            this.unregistered(response, cause);
        }
      };

      this.onRequestTimeout = function () {
        // Not actually unregistered...
        //this.unregistered(null, SIP.C.causes.REQUEST_TIMEOUT);
      };

      this.onTransportError = function () {
        // Not actually unregistered...
        //this.unregistered(null, SIP.C.causes.CONNECTION_ERROR);
      };

      this.cseq++;
      this.request.cseq = this.cseq;
      this.request.setHeader('cseq', this.cseq + ' REGISTER');
      this.request.extraHeaders = extraHeaders;

      this.send();
    },

    unregistered: function unregistered(response, cause) {
      this.registered = false;
      this.emit('unregistered', response || null, cause || null);
    }

  };

  SIP.RegisterContext = RegisterContext;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable */
/**
 * @fileoverview SessionDescriptionHandler
 */

/* SessionDescriptionHandler
 * @class PeerConnection helper Class.
 * @param {SIP.Session} session
 * @param {Object} [options]
 */

module.exports = function (EventEmitter) {
  var SessionDescriptionHandler = function SessionDescriptionHandler(session, options) {};

  SessionDescriptionHandler.prototype = Object.create(EventEmitter.prototype, {

    /**
     * Destructor
     */
    close: { value: function close() {} },

    /**
     * Gets the local description from the underlying media implementation
     * @param {Object} [options] Options object to be used by getDescription
     * @param {Array} [modifiers] Array with one time use description modifiers
     * @returns {Promise} Promise that resolves with the local description to be used for the session
     */
    getDescription: { value: function getDescription(options, modifiers) {} },

    /**
     * Check if the Session Description Handler can handle the Content-Type described by a SIP Message
     * @param {String} contentType The content type that is in the SIP Message
     * @returns {boolean}
     */
    hasDescription: { value: function hasSessionDescription(contentType) {} },

    /**
     * The modifier that should be used when the session would like to place the call on hold
     * @param {String} [sdp] The description that will be modified
     * @returns {Promise} Promise that resolves with modified SDP
     */
    holdModifier: { value: function holdModifier(sdp) {} },

    /**
     * Set the remote description to the underlying media implementation
     * @param {String} sessionDescription The description provided by a SIP message to be set on the media implementation
     * @param {Object} [options] Options object to be used by setDescription
     * @param {Array} [modifiers] Array with one time use description modifiers
     * @returns {Promise} Promise that resolves once the description is set
     */
    setDescription: { value: function setDescription(sessionDescription, options, modifiers) {} }
  });

  return SessionDescriptionHandler;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (SIP) {
  var ClientContext;

  ClientContext = function ClientContext(ua, method, target, options) {
    var originalTarget = target;

    // Validate arguments
    if (target === undefined) {
      throw new TypeError('Not enough arguments');
    }

    this.ua = ua;
    this.logger = ua.getLogger('sip.clientcontext');
    this.method = method;
    target = ua.normalizeTarget(target);
    if (!target) {
      throw new TypeError('Invalid target: ' + originalTarget);
    }

    /* Options
     * - extraHeaders
     * - params
     * - contentType
     * - body
     */
    options = Object.create(options || Object.prototype);
    options.extraHeaders = (options.extraHeaders || []).slice();

    // Build the request
    this.request = new SIP.OutgoingRequest(this.method, target, this.ua, options.params, options.extraHeaders);
    if (options.body) {
      this.body = {};
      this.body.body = options.body;
      if (options.contentType) {
        this.body.contentType = options.contentType;
      }
      this.request.body = this.body;
    }

    /* Set other properties from the request */
    this.localIdentity = this.request.from;
    this.remoteIdentity = this.request.to;

    this.data = {};
  };
  ClientContext.prototype = Object.create(SIP.EventEmitter.prototype);

  ClientContext.prototype.send = function () {
    new SIP.RequestSender(this, this.ua).send();
    return this;
  };

  ClientContext.prototype.cancel = function (options) {
    options = options || {};

    options.extraHeaders = (options.extraHeaders || []).slice();

    var cancel_reason = SIP.Utils.getCancelReason(options.status_code, options.reason_phrase);
    this.request.cancel(cancel_reason, options.extraHeaders);

    this.emit('cancel');
  };

  ClientContext.prototype.receiveResponse = function (response) {
    var cause = SIP.Utils.getReasonPhrase(response.status_code);

    switch (true) {
      case /^1[0-9]{2}$/.test(response.status_code):
        this.emit('progress', response, cause);
        break;

      case /^2[0-9]{2}$/.test(response.status_code):
        if (this.ua.applicants[this]) {
          delete this.ua.applicants[this];
        }
        this.emit('accepted', response, cause);
        break;

      default:
        if (this.ua.applicants[this]) {
          delete this.ua.applicants[this];
        }
        this.emit('rejected', response, cause);
        this.emit('failed', response, cause);
        break;
    }
  };

  ClientContext.prototype.onRequestTimeout = function () {
    this.emit('failed', null, SIP.C.causes.REQUEST_TIMEOUT);
  };

  ClientContext.prototype.onTransportError = function () {
    this.emit('failed', null, SIP.C.causes.CONNECTION_ERROR);
  };

  SIP.ClientContext = ClientContext;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (SIP) {
  var ServerContext;

  ServerContext = function ServerContext(ua, request) {
    this.ua = ua;
    this.logger = ua.getLogger('sip.servercontext');
    this.request = request;
    if (request.method === SIP.C.INVITE) {
      this.transaction = new SIP.Transactions.InviteServerTransaction(request, ua);
    } else {
      this.transaction = new SIP.Transactions.NonInviteServerTransaction(request, ua);
    }

    if (request.body) {
      this.body = request.body;
    }
    if (request.hasHeader('Content-Type')) {
      this.contentType = request.getHeader('Content-Type');
    }
    this.method = request.method;

    this.data = {};

    this.localIdentity = request.to;
    this.remoteIdentity = request.from;
  };

  ServerContext.prototype = Object.create(SIP.EventEmitter.prototype);

  ServerContext.prototype.progress = function (options) {
    options = Object.create(options || Object.prototype);
    options.statusCode || (options.statusCode = 180);
    options.minCode = 100;
    options.maxCode = 199;
    options.events = ['progress'];
    return this.reply(options);
  };

  ServerContext.prototype.accept = function (options) {
    options = Object.create(options || Object.prototype);
    options.statusCode || (options.statusCode = 200);
    options.minCode = 200;
    options.maxCode = 299;
    options.events = ['accepted'];
    return this.reply(options);
  };

  ServerContext.prototype.reject = function (options) {
    options = Object.create(options || Object.prototype);
    options.statusCode || (options.statusCode = 480);
    options.minCode = 300;
    options.maxCode = 699;
    options.events = ['rejected', 'failed'];
    return this.reply(options);
  };

  ServerContext.prototype.reply = function (options) {
    options = options || {}; // This is okay, so long as we treat options as read-only in this method
    var statusCode = options.statusCode || 100,
        minCode = options.minCode || 100,
        maxCode = options.maxCode || 699,
        reasonPhrase = SIP.Utils.getReasonPhrase(statusCode, options.reasonPhrase),
        extraHeaders = options.extraHeaders || [],
        body = options.body,
        events = options.events || [],
        response;

    if (statusCode < minCode || statusCode > maxCode) {
      throw new TypeError('Invalid statusCode: ' + statusCode);
    }
    response = this.request.reply(statusCode, reasonPhrase, extraHeaders, body);
    events.forEach(function (event) {
      this.emit(event, response, reasonPhrase);
    }, this);

    return this;
  };

  ServerContext.prototype.onRequestTimeout = function () {
    this.emit('failed', null, SIP.C.causes.REQUEST_TIMEOUT);
  };

  ServerContext.prototype.onTransportError = function () {
    this.emit('failed', null, SIP.C.causes.CONNECTION_ERROR);
  };

  SIP.ServerContext = ServerContext;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (SIP) {

  var DTMF = __webpack_require__(24)(SIP);

  var Session,
      InviteServerContext,
      InviteClientContext,
      ReferServerContext,
      ReferClientContext,
      C = {
    //Session states
    STATUS_NULL: 0,
    STATUS_INVITE_SENT: 1,
    STATUS_1XX_RECEIVED: 2,
    STATUS_INVITE_RECEIVED: 3,
    STATUS_WAITING_FOR_ANSWER: 4,
    STATUS_ANSWERED: 5,
    STATUS_WAITING_FOR_PRACK: 6,
    STATUS_WAITING_FOR_ACK: 7,
    STATUS_CANCELED: 8,
    STATUS_TERMINATED: 9,
    STATUS_ANSWERED_WAITING_FOR_PRACK: 10,
    STATUS_EARLY_MEDIA: 11,
    STATUS_CONFIRMED: 12
  };

  /*
   * @param {function returning SIP.sessionDescriptionHandler} [sessionDescriptionHandlerFactory]
   *        (See the documentation for the sessionDescriptionHandlerFactory argument of the UA constructor.)
   */
  Session = function Session(sessionDescriptionHandlerFactory) {
    this.status = C.STATUS_NULL;
    this.dialog = null;
    this.pendingReinvite = false;
    this.earlyDialogs = {};
    if (!sessionDescriptionHandlerFactory) {
      throw new SIP.Exceptions.SessionDescriptionHandlerMissing('A session description handler is required for the session to function');
    }
    this.sessionDescriptionHandlerFactory = sessionDescriptionHandlerFactory;

    this.hasOffer = false;
    this.hasAnswer = false;

    // Session Timers
    this.timers = {
      ackTimer: null,
      expiresTimer: null,
      invite2xxTimer: null,
      userNoAnswerTimer: null,
      rel1xxTimer: null,
      prackTimer: null
    };

    // Session info
    this.startTime = null;
    this.endTime = null;
    this.tones = null;

    // Hold state
    this.local_hold = false;

    // Flag to disable renegotiation. When set to true, it will not renegotiate
    // and will throw a RENEGOTIATION_ERROR
    this.disableRenegotiation = false;

    this.early_sdp = null;
    this.rel100 = SIP.C.supported.UNSUPPORTED;
  };

  Session.prototype = {
    dtmf: function dtmf(tones, options) {
      var tone,
          dtmfs = [],
          self = this;

      options = options || {};

      if (tones === undefined) {
        throw new TypeError('Not enough arguments');
      }

      // Check Session Status
      if (this.status !== C.STATUS_CONFIRMED && this.status !== C.STATUS_WAITING_FOR_ACK) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }

      // Check tones
      if (typeof tones !== 'string' && typeof tones !== 'number' || !tones.toString().match(/^[0-9A-D#*,]+$/i)) {
        throw new TypeError('Invalid tones: ' + tones);
      }

      tones = tones.toString().split('');

      while (tones.length > 0) {
        dtmfs.push(new DTMF(this, tones.shift(), options));
      }

      if (this.tones) {
        // Tones are already queued, just add to the queue
        this.tones = this.tones.concat(dtmfs);
        return this;
      }

      var sendDTMF = function sendDTMF() {
        var dtmf, timeout;

        if (self.status === C.STATUS_TERMINATED || !self.tones || self.tones.length === 0) {
          // Stop sending DTMF
          self.tones = null;
          return this;
        }

        dtmf = self.tones.shift();

        if (tone === ',') {
          timeout = 2000;
        } else {
          dtmf.on('failed', function () {
            self.tones = null;
          });
          dtmf.send(options);
          timeout = dtmf.duration + dtmf.interToneGap;
        }

        // Set timeout for the next tone
        SIP.Timers.setTimeout(sendDTMF, timeout);
      };

      this.tones = dtmfs;
      sendDTMF();
      return this;
    },

    bye: function bye(options) {
      options = Object.create(options || Object.prototype);
      var statusCode = options.statusCode;

      // Check Session Status
      if (this.status === C.STATUS_TERMINATED) {
        this.logger.error('Error: Attempted to send BYE in a terminated session.');
        return this;
      }

      this.logger.log('terminating Session');

      if (statusCode && (statusCode < 200 || statusCode >= 700)) {
        throw new TypeError('Invalid statusCode: ' + statusCode);
      }

      options.receiveResponse = function () {};

      return this.sendRequest(SIP.C.BYE, options).terminated();
    },

    refer: function refer(target, options) {
      options = options || {};

      // Check Session Status
      if (this.status !== C.STATUS_CONFIRMED) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }

      this.referContext = new SIP.ReferClientContext(this.ua, this, target, options);

      this.emit('referRequested', this.referContext);

      this.referContext.refer();
    },

    sendRequest: function sendRequest(method, options) {
      options = options || {};
      var self = this;

      var request = new SIP.OutgoingRequest(method, this.dialog.remote_target, this.ua, {
        cseq: options.cseq || (this.dialog.local_seqnum += 1),
        call_id: this.dialog.id.call_id,
        from_uri: this.dialog.local_uri,
        from_tag: this.dialog.id.local_tag,
        to_uri: this.dialog.remote_uri,
        to_tag: this.dialog.id.remote_tag,
        route_set: this.dialog.route_set,
        statusCode: options.statusCode,
        reasonPhrase: options.reasonPhrase
      }, options.extraHeaders || [], options.body);

      new SIP.RequestSender({
        request: request,
        onRequestTimeout: function onRequestTimeout() {
          self.onRequestTimeout();
        },
        onTransportError: function onTransportError() {
          self.onTransportError();
        },
        receiveResponse: options.receiveResponse || function (response) {
          self.receiveNonInviteResponse(response);
        }
      }, this.ua).send();

      // Emit the request event
      this.emit(method.toLowerCase(), request);

      return this;
    },

    close: function close() {
      var idx;

      if (this.status === C.STATUS_TERMINATED) {
        return this;
      }

      this.logger.log('closing INVITE session ' + this.id);

      // 1st Step. Terminate media.
      if (this.sessionDescriptionHandler) {
        this.sessionDescriptionHandler.close();
      }

      // 2nd Step. Terminate signaling.

      // Clear session timers
      for (idx in this.timers) {
        SIP.Timers.clearTimeout(this.timers[idx]);
      }

      // Terminate dialogs

      // Terminate confirmed dialog
      if (this.dialog) {
        this.dialog.terminate();
        delete this.dialog;
      }

      // Terminate early dialogs
      for (idx in this.earlyDialogs) {
        this.earlyDialogs[idx].terminate();
        delete this.earlyDialogs[idx];
      }

      this.status = C.STATUS_TERMINATED;

      delete this.ua.sessions[this.id];
      return this;
    },

    createDialog: function createDialog(message, type, early) {
      var dialog,
          early_dialog,
          local_tag = message[type === 'UAS' ? 'to_tag' : 'from_tag'],
          remote_tag = message[type === 'UAS' ? 'from_tag' : 'to_tag'],
          id = message.call_id + local_tag + remote_tag;

      early_dialog = this.earlyDialogs[id];

      // Early Dialog
      if (early) {
        if (early_dialog) {
          return true;
        } else {
          early_dialog = new SIP.Dialog(this, message, type, SIP.Dialog.C.STATUS_EARLY);

          // Dialog has been successfully created.
          if (early_dialog.error) {
            this.logger.error(early_dialog.error);
            this.failed(message, SIP.C.causes.INTERNAL_ERROR);
            return false;
          } else {
            this.earlyDialogs[id] = early_dialog;
            return true;
          }
        }
      }
      // Confirmed Dialog
      else {
          // In case the dialog is in _early_ state, update it
          if (early_dialog) {
            early_dialog.update(message, type);
            this.dialog = early_dialog;
            delete this.earlyDialogs[id];
            for (var dia in this.earlyDialogs) {
              this.earlyDialogs[dia].terminate();
              delete this.earlyDialogs[dia];
            }
            return true;
          }

          // Otherwise, create a _confirmed_ dialog
          dialog = new SIP.Dialog(this, message, type);

          if (dialog.error) {
            this.logger.error(dialog.error);
            this.failed(message, SIP.C.causes.INTERNAL_ERROR);
            return false;
          } else {
            this.to_tag = message.to_tag;
            this.dialog = dialog;
            return true;
          }
        }
    },

    /**
     * Hold
     */
    hold: function hold(options, modifiers) {

      if (this.status !== C.STATUS_WAITING_FOR_ACK && this.status !== C.STATUS_CONFIRMED) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }

      if (this.local_hold) {
        this.logger.log('Session is already on hold, cannot put it on hold again');
        return;
      }

      options = options || {};
      options.modifiers = modifiers || [];
      options.modifiers.push(this.sessionDescriptionHandler.holdModifier);

      this.local_hold = true;

      this.sendReinvite(options);
    },

    /**
     * Unhold
     */
    unhold: function unhold(options, modifiers) {

      if (this.status !== C.STATUS_WAITING_FOR_ACK && this.status !== C.STATUS_CONFIRMED) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }

      if (!this.local_hold) {
        this.logger.log('Session is not on hold, cannot unhold it');
        return;
      }

      options = options || {};

      if (modifiers) {
        options.modifiers = modifiers;
      }

      this.local_hold = false;

      this.sendReinvite(options);
    },

    reinvite: function reinvite(options, modifiers) {
      options = options || {};

      if (modifiers) {
        options.modifiers = modifiers;
      }

      return this.sendReinvite(options);
    },

    /**
     * In dialog INVITE Reception
     * @private
     */
    receiveReinvite: function receiveReinvite(request) {
      var self = this,
          promise;
      // TODO: Should probably check state of the session

      self.emit('reinvite', this);

      // Invite w/o SDP
      if (request.getHeader('Content-Length') === '0' && !request.getHeader('Content-Type')) {
        promise = this.sessionDescriptionHandler.getDescription(this.sessionDescriptionHandlerOptions, this.modifiers);

        // Invite w/ SDP
      } else if (this.sessionDescriptionHandler.hasDescription(request.getHeader('Content-Type'))) {
        promise = this.sessionDescriptionHandler.setDescription(request.body, this.sessionDescriptionHandlerOptions, this.modifiers).then(this.sessionDescriptionHandler.getDescription.bind(this.sessionDescriptionHandler, this.sessionDescriptionHandlerOptions, this.modifiers));

        // Bad Packet (should never get hit)
      } else {
        request.reply(415);
        this.emit('reinviteFailed', self);
        return;
      }

      var _receiveRequest = this.receiveRequest;

      // HACK to catch the ACK
      this.receiveRequest = function (request) {
        if (request.method === SIP.C.ACK && this.status === C.STATUS_WAITING_FOR_ACK && this.sessionDescriptionHandler.hasDescription(request.getHeader('Content-Type'))) {
          this.hasAnswer = true;
          this.sessionDescriptionHandler.setDescription(request.body, this.sessionDescriptionHandlerOptions, this.modifiers).then(function () {
            SIP.Timers.clearTimeout(this.timers.ackTimer);
            SIP.Timers.clearTimeout(this.timers.invite2xxTimer);
            this.status = C.STATUS_CONFIRMED;

            this.emit('confirmed', request);
          }.bind(this));
        } else {
          _receiveRequest.call(this, request);
        }
      }.bind(this);

      promise.catch(function onFailure(e) {
        var statusCode;
        if (e instanceof SIP.Exceptions.GetDescriptionError) {
          statusCode = 500;
        } else if (e instanceof SIP.Exceptions.RenegotiationError) {
          self.emit('renegotiationError', e);
          self.logger.warn(e);
          statusCode = 488;
        } else {
          self.logger.error(e);
          statusCode = 488;
        }
        request.reply(statusCode);
        self.emit('reinviteFailed', self);
      }).then(function (description) {
        var extraHeaders = ['Contact: ' + self.contact];
        request.reply(200, null, extraHeaders, description, function () {
          self.status = C.STATUS_WAITING_FOR_ACK;

          self.setACKTimer();
          self.emit('reinviteAccepted', self);
        });
      });
    },

    sendReinvite: function sendReinvite(options) {
      if (this.pendingReinvite) {
        this.logger.warn('Reinvite in progress. Please wait until complete, then try again.');
        return;
      }
      this.pendingReinvite = true;
      options = options || {};
      options.modifiers = options.modifiers || [];

      var self = this,
          extraHeaders = (options.extraHeaders || []).slice();

      extraHeaders.push('Contact: ' + this.contact);
      extraHeaders.push('Allow: ' + SIP.UA.C.ALLOWED_METHODS.toString());

      this.sessionDescriptionHandler.getDescription(options.sessionDescriptionHandlerOptions, options.modifiers).then(function (description) {
        self.sendRequest(SIP.C.INVITE, {
          extraHeaders: extraHeaders,
          body: description,
          receiveResponse: self.receiveReinviteResponse.bind(self)
        });
      }).catch(function onFailure(e) {
        if (e instanceof SIP.Exceptions.RenegotiationError) {
          self.pendingReinvite = false;
          self.emit('renegotiationError', e);
          self.logger.warn('Renegotiation Error');
          self.logger.warn(e);
          return;
        }
        self.logger.error('sessionDescriptionHandler error');
        self.logger.error(e);
      });
    },

    receiveRequest: function receiveRequest(request) {
      switch (request.method) {
        case SIP.C.BYE:
          request.reply(200);
          if (this.status === C.STATUS_CONFIRMED) {
            this.emit('bye', request);
            this.terminated(request, SIP.C.causes.BYE);
          }
          break;
        case SIP.C.INVITE:
          if (this.status === C.STATUS_CONFIRMED) {
            this.logger.log('re-INVITE received');
            this.receiveReinvite(request);
          }
          break;
        case SIP.C.INFO:
          if (this.status === C.STATUS_CONFIRMED || this.status === C.STATUS_WAITING_FOR_ACK) {
            if (this.onInfo) {
              return this.onInfo(request);
            }

            var body,
                tone,
                duration,
                contentType = request.getHeader('content-type'),
                reg_tone = /^(Signal\s*?=\s*?)([0-9A-D#*]{1})(\s)?.*/,
                reg_duration = /^(Duration\s?=\s?)([0-9]{1,4})(\s)?.*/;

            if (contentType) {
              if (contentType.match(/^application\/dtmf-relay/i)) {
                if (request.body) {
                  body = request.body.split('\r\n', 2);
                  if (body.length === 2) {
                    if (reg_tone.test(body[0])) {
                      tone = body[0].replace(reg_tone, "$2");
                    }
                    if (reg_duration.test(body[1])) {
                      duration = parseInt(body[1].replace(reg_duration, "$2"), 10);
                    }
                  }
                }

                new DTMF(this, tone, { duration: duration }).init_incoming(request);
              } else {
                request.reply(415, null, ["Accept: application/dtmf-relay"]);
              }
            }
          }
          break;
        case SIP.C.REFER:
          if (this.status === C.STATUS_CONFIRMED) {
            this.logger.log('REFER received');
            this.referContext = new SIP.ReferServerContext(this.ua, request);
            var hasReferListener = this.listeners('referRequested').length;
            if (hasReferListener) {
              this.emit('referRequested', this.referContext);
            } else {
              this.logger.log('No referRequested listeners, automatically accepting and following the refer');
              var options = { followRefer: true };
              if (this.passedOptions) {
                options.inviteOptions = this.passedOptions;
              }
              this.referContext.accept(options, this.modifiers);
            }
          }
          break;
        case SIP.C.NOTIFY:
          if (this.referContext && this.referContext instanceof SIP.ReferClientContext && request.hasHeader('event') && request.getHeader('event') === 'refer') {
            this.referContext.receiveNotify(request);
            return;
          }
          request.reply(200, 'OK');
          this.emit('notify', request);
          break;
      }
    },

    /**
     * Reception of Response for in-dialog INVITE
     * @private
     */
    receiveReinviteResponse: function receiveReinviteResponse(response) {
      var self = this;

      if (this.status === C.STATUS_TERMINATED) {
        return;
      }

      switch (true) {
        case /^1[0-9]{2}$/.test(response.status_code):
          break;
        case /^2[0-9]{2}$/.test(response.status_code):
          this.status = C.STATUS_CONFIRMED;

          // 17.1.1.1 - For each final response that is received at the client transaction, the client transaction sends an ACK,
          this.emit("ack", response.transaction.sendACK());
          this.pendingReinvite = false;
          // TODO: All of these timers should move into the Transaction layer
          SIP.Timers.clearTimeout(self.timers.invite2xxTimer);
          if (!this.sessionDescriptionHandler.hasDescription(response.getHeader('Content-Type'))) {
            this.logger.error('2XX response received to re-invite but did not have a description');
            this.emit('reinviteFailed', self);
            this.emit('renegotiationError', new SIP.Exceptions.RenegotiationError('2XX response received to re-invite but did not have a description'));
            break;
          }

          this.sessionDescriptionHandler.setDescription(response.body, this.sessionDescriptionHandlerOptions, this.modifiers).catch(function onFailure(e) {
            self.logger.error('Could not set the description in 2XX response');
            self.logger.error(e);
            self.emit('reinviteFailed', self);
            self.emit('renegotiationError', e);
            self.sendRequest(SIP.C.BYE, {
              extraHeaders: [SIP.Utils.getReasonHeaderValue(488, 'Not Acceptable Here')]
            });
          }).then(function () {
            self.emit('reinviteAccepted', self);
          });
          break;
        default:
          this.disableRenegotiation = true;
          this.pendingReinvite = false;
          this.logger.log('Received a non 1XX or 2XX response to a re-invite');
          this.emit('reinviteFailed', self);
          this.emit('renegotiationError', new SIP.Exceptions.RenegotiationError('Invalid response to a re-invite'));
      }
    },

    acceptAndTerminate: function acceptAndTerminate(response, status_code, reason_phrase) {
      var extraHeaders = [];

      if (status_code) {
        extraHeaders.push('Reason: ' + SIP.Utils.getReasonHeaderValue(status_code, reason_phrase));
      }

      // An error on dialog creation will fire 'failed' event
      if (this.dialog || this.createDialog(response, 'UAC')) {
        this.emit("ack", response.transaction.sendACK());
        this.sendRequest(SIP.C.BYE, {
          extraHeaders: extraHeaders
        });
      }

      return this;
    },

    /**
     * RFC3261 13.3.1.4
     * Response retransmissions cannot be accomplished by transaction layer
     *  since it is destroyed when receiving the first 2xx answer
     */
    setInvite2xxTimer: function setInvite2xxTimer(request, description) {
      var self = this,
          timeout = SIP.Timers.T1;

      this.timers.invite2xxTimer = SIP.Timers.setTimeout(function invite2xxRetransmission() {
        if (self.status !== C.STATUS_WAITING_FOR_ACK) {
          return;
        }

        self.logger.log('no ACK received, attempting to retransmit OK');

        var extraHeaders = ['Contact: ' + self.contact];

        request.reply(200, null, extraHeaders, description);

        timeout = Math.min(timeout * 2, SIP.Timers.T2);

        self.timers.invite2xxTimer = SIP.Timers.setTimeout(invite2xxRetransmission, timeout);
      }, timeout);
    },

    /**
     * RFC3261 14.2
     * If a UAS generates a 2xx response and never receives an ACK,
     *  it SHOULD generate a BYE to terminate the dialog.
     */
    setACKTimer: function setACKTimer() {
      var self = this;

      this.timers.ackTimer = SIP.Timers.setTimeout(function () {
        if (self.status === C.STATUS_WAITING_FOR_ACK) {
          self.logger.log('no ACK received for an extended period of time, terminating the call');
          SIP.Timers.clearTimeout(self.timers.invite2xxTimer);
          self.sendRequest(SIP.C.BYE);
          self.terminated(null, SIP.C.causes.NO_ACK);
        }
      }, SIP.Timers.TIMER_H);
    },

    /*
     * @private
     */
    onTransportError: function onTransportError() {
      if (this.status !== C.STATUS_CONFIRMED && this.status !== C.STATUS_TERMINATED) {
        this.failed(null, SIP.C.causes.CONNECTION_ERROR);
      }
    },

    onRequestTimeout: function onRequestTimeout() {
      if (this.status === C.STATUS_CONFIRMED) {
        this.terminated(null, SIP.C.causes.REQUEST_TIMEOUT);
      } else if (this.status !== C.STATUS_TERMINATED) {
        this.failed(null, SIP.C.causes.REQUEST_TIMEOUT);
        this.terminated(null, SIP.C.causes.REQUEST_TIMEOUT);
      }
    },

    onDialogError: function onDialogError(response) {
      if (this.status === C.STATUS_CONFIRMED) {
        this.terminated(response, SIP.C.causes.DIALOG_ERROR);
      } else if (this.status !== C.STATUS_TERMINATED) {
        this.failed(response, SIP.C.causes.DIALOG_ERROR);
        this.terminated(response, SIP.C.causes.DIALOG_ERROR);
      }
    },

    /**
     * @private
     */

    failed: function failed(response, cause) {
      if (this.status === C.STATUS_TERMINATED) {
        return this;
      }
      this.emit('failed', response || null, cause || null);
      return this;
    },

    rejected: function rejected(response, cause) {
      this.emit('rejected', response || null, cause || null);
      return this;
    },

    canceled: function canceled() {
      this.emit('cancel');
      return this;
    },

    accepted: function accepted(response, cause) {
      cause = SIP.Utils.getReasonPhrase(response && response.status_code, cause);

      this.startTime = new Date();

      if (this.replacee) {
        this.replacee.emit('replaced', this);
        this.replacee.terminate();
      }
      this.emit('accepted', response, cause);
      return this;
    },

    terminated: function terminated(message, cause) {
      if (this.status === C.STATUS_TERMINATED) {
        return this;
      }

      this.endTime = new Date();

      this.close();
      this.emit('terminated', message || null, cause || null);
      return this;
    },

    connecting: function connecting(request) {
      this.emit('connecting', { request: request });
      return this;
    }
  };

  Session.C = C;
  SIP.Session = Session;

  InviteServerContext = function InviteServerContext(ua, request) {
    var expires,
        self = this,
        contentType = request.getHeader('Content-Type'),
        contentDisp = request.parseHeader('Content-Disposition');

    SIP.Utils.augment(this, SIP.ServerContext, [ua, request]);
    SIP.Utils.augment(this, SIP.Session, [ua.configuration.sessionDescriptionHandlerFactory]);

    if (contentDisp && contentDisp.type === 'render') {
      this.renderbody = request.body;
      this.rendertype = contentType;
    }

    this.status = C.STATUS_INVITE_RECEIVED;
    this.from_tag = request.from_tag;
    this.id = request.call_id + this.from_tag;
    this.request = request;
    this.contact = this.ua.contact.toString();

    this.receiveNonInviteResponse = function () {}; // intentional no-op

    this.logger = ua.getLogger('sip.inviteservercontext', this.id);

    //Save the session into the ua sessions collection.
    this.ua.sessions[this.id] = this;

    //Get the Expires header value if exists
    if (request.hasHeader('expires')) {
      expires = request.getHeader('expires') * 1000;
    }

    //Set 100rel if necessary
    function set100rel(h, c) {
      if (request.hasHeader(h) && request.getHeader(h).toLowerCase().indexOf('100rel') >= 0) {
        self.rel100 = c;
      }
    }
    set100rel('require', SIP.C.supported.REQUIRED);
    set100rel('supported', SIP.C.supported.SUPPORTED);

    /* Set the to_tag before
     * replying a response code that will create a dialog.
     */
    request.to_tag = SIP.Utils.newTag();

    // An error on dialog creation will fire 'failed' event
    if (!this.createDialog(request, 'UAS', true)) {
      request.reply(500, 'Missing Contact header field');
      return;
    }

    var options = { extraHeaders: ['Contact: ' + self.contact] };

    if (self.rel100 !== SIP.C.supported.REQUIRED) {
      self.progress(options);
    }
    self.status = C.STATUS_WAITING_FOR_ANSWER;

    // Set userNoAnswerTimer
    self.timers.userNoAnswerTimer = SIP.Timers.setTimeout(function () {
      request.reply(408);
      self.failed(request, SIP.C.causes.NO_ANSWER);
      self.terminated(request, SIP.C.causes.NO_ANSWER);
    }, self.ua.configuration.noAnswerTimeout);

    /* Set expiresTimer
     * RFC3261 13.3.1
     */
    if (expires) {
      self.timers.expiresTimer = SIP.Timers.setTimeout(function () {
        if (self.status === C.STATUS_WAITING_FOR_ANSWER) {
          request.reply(487);
          self.failed(request, SIP.C.causes.EXPIRES);
          self.terminated(request, SIP.C.causes.EXPIRES);
        }
      }, expires);
    }
  };

  InviteServerContext.prototype = {
    reject: function reject(options) {
      // Check Session Status
      if (this.status === C.STATUS_TERMINATED) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }

      this.logger.log('rejecting RTCSession');

      SIP.ServerContext.prototype.reject.call(this, options);
      return this.terminated();
    },

    terminate: function terminate(options) {
      options = options || {};

      var extraHeaders = (options.extraHeaders || []).slice(),
          body = options.body,
          dialog,
          self = this;

      if (this.status === C.STATUS_WAITING_FOR_ACK && this.request.server_transaction.state !== SIP.Transactions.C.STATUS_TERMINATED) {
        dialog = this.dialog;

        this.receiveRequest = function (request) {
          if (request.method === SIP.C.ACK) {
            this.sendRequest(SIP.C.BYE, {
              extraHeaders: extraHeaders,
              body: body
            });
            dialog.terminate();
          }
        };

        this.request.server_transaction.on('stateChanged', function () {
          if (this.state === SIP.Transactions.C.STATUS_TERMINATED && this.dialog) {
            this.request = new SIP.OutgoingRequest(SIP.C.BYE, this.dialog.remote_target, this.ua, {
              'cseq': this.dialog.local_seqnum += 1,
              'call_id': this.dialog.id.call_id,
              'from_uri': this.dialog.local_uri,
              'from_tag': this.dialog.id.local_tag,
              'to_uri': this.dialog.remote_uri,
              'to_tag': this.dialog.id.remote_tag,
              'route_set': this.dialog.route_set
            }, extraHeaders, body);

            new SIP.RequestSender({
              request: this.request,
              onRequestTimeout: function onRequestTimeout() {
                self.onRequestTimeout();
              },
              onTransportError: function onTransportError() {
                self.onTransportError();
              },
              receiveResponse: function receiveResponse() {
                return;
              }
            }, this.ua).send();
            dialog.terminate();
          }
        });

        this.emit('bye', this.request);
        this.terminated();

        // Restore the dialog into 'this' in order to be able to send the in-dialog BYE :-)
        this.dialog = dialog;

        // Restore the dialog into 'ua' so the ACK can reach 'this' session
        this.ua.dialogs[dialog.id.toString()] = dialog;
      } else if (this.status === C.STATUS_CONFIRMED) {
        this.bye(options);
      } else {
        this.reject(options);
      }

      return this;
    },

    /*
     * @param {Object} [options.sessionDescriptionHandlerOptions] gets passed to SIP.SessionDescriptionHandler.getDescription as options
     */
    progress: function progress(options) {
      options = options || {};
      var statusCode = options.statusCode || 180,
          reasonPhrase = options.reasonPhrase,
          extraHeaders = (options.extraHeaders || []).slice(),
          body = options.body,
          response;

      if (statusCode < 100 || statusCode > 199) {
        throw new TypeError('Invalid statusCode: ' + statusCode);
      }

      if (this.isCanceled || this.status === C.STATUS_TERMINATED) {
        return this;
      }

      function do100rel() {
        /* jshint validthis: true */
        statusCode = options.statusCode || 183;

        // Set status and add extra headers
        this.status = C.STATUS_WAITING_FOR_PRACK;
        extraHeaders.push('Contact: ' + this.contact);
        extraHeaders.push('Require: 100rel');
        extraHeaders.push('RSeq: ' + Math.floor(Math.random() * 10000));

        // Get the session description to add to preaccept with
        this.sessionDescriptionHandler.getDescription(options.sessionDescriptionHandlerOptions, options.modifiers).then(function onSuccess(description) {
          if (this.isCanceled || this.status === C.STATUS_TERMINATED) {
            return;
          }

          this.early_sdp = description.body;
          this[this.hasOffer ? 'hasAnswer' : 'hasOffer'] = true;

          // Retransmit until we get a response or we time out (see prackTimer below)
          var timeout = SIP.Timers.T1;
          this.timers.rel1xxTimer = SIP.Timers.setTimeout(function rel1xxRetransmission() {
            this.request.reply(statusCode, null, extraHeaders, description);
            timeout *= 2;
            this.timers.rel1xxTimer = SIP.Timers.setTimeout(rel1xxRetransmission.bind(this), timeout);
          }.bind(this), timeout);

          // Timeout and reject INVITE if no response
          this.timers.prackTimer = SIP.Timers.setTimeout(function () {
            if (this.status !== C.STATUS_WAITING_FOR_PRACK) {
              return;
            }

            this.logger.log('no PRACK received, rejecting the call');
            SIP.Timers.clearTimeout(this.timers.rel1xxTimer);
            this.request.reply(504);
            this.terminated(null, SIP.C.causes.NO_PRACK);
          }.bind(this), SIP.Timers.T1 * 64);

          // Send the initial response
          response = this.request.reply(statusCode, reasonPhrase, extraHeaders, description);
          this.emit('progress', response, reasonPhrase);
        }.bind(this), function onFailure() {
          this.request.reply(480);
          this.failed(null, SIP.C.causes.WEBRTC_ERROR);
          this.terminated(null, SIP.C.causes.WEBRTC_ERROR);
        }.bind(this));
      } // end do100rel

      function normalReply() {
        /* jshint validthis:true */
        response = this.request.reply(statusCode, reasonPhrase, extraHeaders, body);
        this.emit('progress', response, reasonPhrase);
      }

      if (options.statusCode !== 100 && (this.rel100 === SIP.C.supported.REQUIRED || this.rel100 === SIP.C.supported.SUPPORTED && options.rel100 || this.rel100 === SIP.C.supported.SUPPORTED && this.ua.configuration.rel100 === SIP.C.supported.REQUIRED)) {
        this.sessionDescriptionHandler = this.setupSessionDescriptionHandler();
        if (this.sessionDescriptionHandler.hasDescription(this.request.getHeader('Content-Type'))) {
          this.hasOffer = true;
          this.sessionDescriptionHandler.setDescription(this.request.body, options.sessionDescriptionHandlerOptions, options.modifiers).then(do100rel.apply(this)).catch(function onFailure(e) {
            this.logger.warn('invalid description');
            this.logger.warn(e);
            this.failed(null, SIP.C.causes.WEBRTC_ERROR);
            this.terminated(null, SIP.C.causes.WEBRTC_ERROR);
          }.bind(this));
        } else {
          do100rel.apply(this);
        }
      } else {
        normalReply.apply(this);
      }
      return this;
    },

    /*
     * @param {Object} [options.sessionDescriptionHandlerOptions] gets passed to SIP.SessionDescriptionHandler.getDescription as options
     */
    accept: function accept(options) {
      options = options || {};

      this.onInfo = options.onInfo;

      var self = this,
          request = this.request,
          extraHeaders = (options.extraHeaders || []).slice(),
          descriptionCreationSucceeded = function descriptionCreationSucceeded(description) {
        var response,

        // run for reply success callback
        replySucceeded = function replySucceeded() {
          self.status = C.STATUS_WAITING_FOR_ACK;

          self.setInvite2xxTimer(request, description);
          self.setACKTimer();
        },


        // run for reply failure callback
        replyFailed = function replyFailed() {
          self.failed(null, SIP.C.causes.CONNECTION_ERROR);
          self.terminated(null, SIP.C.causes.CONNECTION_ERROR);
        };

        extraHeaders.push('Contact: ' + self.contact);
        extraHeaders.push('Allow: ' + SIP.UA.C.ALLOWED_METHODS.toString());

        if (!self.hasOffer) {
          self.hasOffer = true;
        } else {
          self.hasAnswer = true;
        }
        response = request.reply(200, null, extraHeaders, description, replySucceeded, replyFailed);
        if (self.status !== C.STATUS_TERMINATED) {
          // Didn't fail
          self.accepted(response, SIP.Utils.getReasonPhrase(200));
        }
      },
          descriptionCreationFailed = function descriptionCreationFailed() {
        // TODO: This should check the actual error and make sure it is an
        //        "expected" error. Otherwise it should throw.
        if (self.status === C.STATUS_TERMINATED) {
          return;
        }
        self.request.reply(480);
        self.failed(null, SIP.C.causes.WEBRTC_ERROR);
        self.terminated(null, SIP.C.causes.WEBRTC_ERROR);
      };

      // Check Session Status
      if (this.status === C.STATUS_WAITING_FOR_PRACK) {
        this.status = C.STATUS_ANSWERED_WAITING_FOR_PRACK;
        return this;
      } else if (this.status === C.STATUS_WAITING_FOR_ANSWER) {
        this.status = C.STATUS_ANSWERED;
      } else if (this.status !== C.STATUS_EARLY_MEDIA) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }

      // An error on dialog creation will fire 'failed' event
      if (!this.createDialog(request, 'UAS')) {
        request.reply(500, 'Missing Contact header field');
        return this;
      }

      SIP.Timers.clearTimeout(this.timers.userNoAnswerTimer);

      if (this.status === C.STATUS_EARLY_MEDIA) {
        descriptionCreationSucceeded({});
      } else {
        this.sessionDescriptionHandler = this.setupSessionDescriptionHandler();
        if (this.request.getHeader('Content-Length') === '0' && !this.request.getHeader('Content-Type')) {
          this.sessionDescriptionHandler.getDescription(options.sessionDescriptionHandlerOptions, options.modifiers).catch(descriptionCreationFailed).then(descriptionCreationSucceeded);
        } else if (this.sessionDescriptionHandler.hasDescription(this.request.getHeader('Content-Type'))) {
          this.hasOffer = true;
          this.sessionDescriptionHandler.setDescription(this.request.body, options.sessionDescriptionHandlerOptions, options.modifiers).then(function () {
            return this.sessionDescriptionHandler.getDescription(options.sessionDescriptionHandlerOptions, options.modifiers);
          }.bind(this)).catch(descriptionCreationFailed).then(descriptionCreationSucceeded);
        } else {
          this.request.reply(415);
          // TODO: Events
          return;
        }
      }

      return this;
    },

    receiveRequest: function receiveRequest(request) {

      // ISC RECEIVE REQUEST

      function confirmSession() {
        /* jshint validthis:true */
        var contentType, contentDisp;

        SIP.Timers.clearTimeout(this.timers.ackTimer);
        SIP.Timers.clearTimeout(this.timers.invite2xxTimer);
        this.status = C.STATUS_CONFIRMED;

        contentType = request.getHeader('Content-Type');
        contentDisp = request.getHeader('Content-Disposition');

        if (contentDisp && contentDisp.type === 'render') {
          this.renderbody = request.body;
          this.rendertype = contentType;
        }

        this.emit('confirmed', request);
      }

      switch (request.method) {
        case SIP.C.CANCEL:
          /* RFC3261 15 States that a UAS may have accepted an invitation while a CANCEL
           * was in progress and that the UAC MAY continue with the session established by
           * any 2xx response, or MAY terminate with BYE. SIP does continue with the
           * established session. So the CANCEL is processed only if the session is not yet
           * established.
           */

          /*
           * Terminate the whole session in case the user didn't accept (or yet to send the answer) nor reject the
           *request opening the session.
           */
          if (this.status === C.STATUS_WAITING_FOR_ANSWER || this.status === C.STATUS_WAITING_FOR_PRACK || this.status === C.STATUS_ANSWERED_WAITING_FOR_PRACK || this.status === C.STATUS_EARLY_MEDIA || this.status === C.STATUS_ANSWERED) {

            this.status = C.STATUS_CANCELED;
            this.request.reply(487);
            this.canceled(request);
            this.rejected(request, SIP.C.causes.CANCELED);
            this.failed(request, SIP.C.causes.CANCELED);
            this.terminated(request, SIP.C.causes.CANCELED);
          }
          break;
        case SIP.C.ACK:
          if (this.status === C.STATUS_WAITING_FOR_ACK) {
            if (this.sessionDescriptionHandler.hasDescription(request.getHeader('Content-Type'))) {
              // ACK contains answer to an INVITE w/o SDP negotiation
              this.hasAnswer = true;
              this.sessionDescriptionHandler.setDescription(request.body, this.sessionDescriptionHandlerOptions, this.modifiers).then(
              // TODO: Catch then .then
              confirmSession.bind(this), function onFailure(e) {
                this.logger.warn(e);
                this.terminate({
                  statusCode: '488',
                  reasonPhrase: 'Bad Media Description'
                });
                this.failed(request, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
                this.terminated(request, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
              }.bind(this));
            } else {
              confirmSession.apply(this);
            }
          }
          break;
        case SIP.C.PRACK:
          if (this.status === C.STATUS_WAITING_FOR_PRACK || this.status === C.STATUS_ANSWERED_WAITING_FOR_PRACK) {
            if (!this.hasAnswer) {
              this.sessionDescriptionHandler = this.setupSessionDescriptionHandler();
              if (this.sessionDescriptionHandler.hasDescription(request.getHeader('Content-Type'))) {
                this.hasAnswer = true;
                this.sessionDescriptionHandler.setDescription(request.body, this.sessionDescriptionHandlerOptions, this.modifiers).then(function onSuccess() {
                  SIP.Timers.clearTimeout(this.timers.rel1xxTimer);
                  SIP.Timers.clearTimeout(this.timers.prackTimer);
                  request.reply(200);
                  if (this.status === C.STATUS_ANSWERED_WAITING_FOR_PRACK) {
                    this.status = C.STATUS_EARLY_MEDIA;
                    this.accept();
                  }
                  this.status = C.STATUS_EARLY_MEDIA;
                }.bind(this), function onFailure(e) {
                  this.logger.warn(e);
                  this.terminate({
                    statusCode: '488',
                    reasonPhrase: 'Bad Media Description'
                  });
                  this.failed(request, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
                  this.terminated(request, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
                }.bind(this));
              } else {
                this.terminate({
                  statusCode: '488',
                  reasonPhrase: 'Bad Media Description'
                });
                this.failed(request, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
                this.terminated(request, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
              }
            } else {
              SIP.Timers.clearTimeout(this.timers.rel1xxTimer);
              SIP.Timers.clearTimeout(this.timers.prackTimer);
              request.reply(200);

              if (this.status === C.STATUS_ANSWERED_WAITING_FOR_PRACK) {
                this.status = C.STATUS_EARLY_MEDIA;
                this.accept();
              }
              this.status = C.STATUS_EARLY_MEDIA;
            }
          } else if (this.status === C.STATUS_EARLY_MEDIA) {
            request.reply(200);
          }
          break;
        default:
          Session.prototype.receiveRequest.apply(this, [request]);
          break;
      }
    },

    // Internal Function to setup the handler consistently
    setupSessionDescriptionHandler: function setupSessionDescriptionHandler() {
      if (this.sessionDescriptionHandler) {
        return this.sessionDescriptionHandler;
      }
      return this.sessionDescriptionHandlerFactory(this, this.ua.configuration.sessionDescriptionHandlerFactoryOptions);
    },

    onTransportError: function onTransportError() {
      if (this.status !== C.STATUS_CONFIRMED && this.status !== C.STATUS_TERMINATED) {
        this.failed(null, SIP.C.causes.CONNECTION_ERROR);
      }
    },

    onRequestTimeout: function onRequestTimeout() {
      if (this.status === C.STATUS_CONFIRMED) {
        this.terminated(null, SIP.C.causes.REQUEST_TIMEOUT);
      } else if (this.status !== C.STATUS_TERMINATED) {
        this.failed(null, SIP.C.causes.REQUEST_TIMEOUT);
        this.terminated(null, SIP.C.causes.REQUEST_TIMEOUT);
      }
    }

  };

  SIP.InviteServerContext = InviteServerContext;

  InviteClientContext = function InviteClientContext(ua, target, options, modifiers) {
    options = options || {};
    this.passedOptions = options; // Save for later to use with refer
    options.params = Object.create(options.params || Object.prototype);

    var extraHeaders = (options.extraHeaders || []).slice(),
        sessionDescriptionHandlerFactory = ua.configuration.sessionDescriptionHandlerFactory;

    this.sessionDescriptionHandlerFactoryOptions = ua.configuration.sessionDescriptionHandlerFactoryOptions || {};
    this.sessionDescriptionHandlerOptions = options.sessionDescriptionHandlerOptions || {};
    this.modifiers = modifiers;

    this.inviteWithoutSdp = options.inviteWithoutSdp || false;

    // Set anonymous property
    this.anonymous = options.anonymous || false;

    // Custom data to be sent either in INVITE or in ACK
    this.renderbody = options.renderbody || null;
    this.rendertype = options.rendertype || 'text/plain';

    // Session parameter initialization
    this.from_tag = SIP.Utils.newTag();
    options.params.from_tag = this.from_tag;

    /* Do not add ;ob in initial forming dialog requests if the registration over
     *  the current connection got a GRUU URI.
     */
    this.contact = ua.contact.toString({
      anonymous: this.anonymous,
      outbound: this.anonymous ? !ua.contact.temp_gruu : !ua.contact.pub_gruu
    });

    if (this.anonymous) {
      options.params.from_displayName = 'Anonymous';
      options.params.from_uri = 'sip:anonymous@anonymous.invalid';

      extraHeaders.push('P-Preferred-Identity: ' + ua.configuration.uri.toString());
      extraHeaders.push('Privacy: id');
    }
    extraHeaders.push('Contact: ' + this.contact);
    extraHeaders.push('Allow: ' + SIP.UA.C.ALLOWED_METHODS.toString());
    if (this.inviteWithoutSdp && this.renderbody) {
      extraHeaders.push('Content-Type: ' + this.rendertype);
      extraHeaders.push('Content-Disposition: render;handling=optional');
    }

    if (ua.configuration.rel100 === SIP.C.supported.REQUIRED) {
      extraHeaders.push('Require: 100rel');
    }
    if (ua.configuration.replaces === SIP.C.supported.REQUIRED) {
      extraHeaders.push('Require: replaces');
    }

    options.extraHeaders = extraHeaders;

    SIP.Utils.augment(this, SIP.ClientContext, [ua, SIP.C.INVITE, target, options]);
    SIP.Utils.augment(this, SIP.Session, [sessionDescriptionHandlerFactory]);

    // Check Session Status
    if (this.status !== C.STATUS_NULL) {
      throw new SIP.Exceptions.InvalidStateError(this.status);
    }

    // OutgoingSession specific parameters
    this.isCanceled = false;
    this.received_100 = false;

    this.method = SIP.C.INVITE;

    this.receiveNonInviteResponse = this.receiveResponse;
    this.receiveResponse = this.receiveInviteResponse;

    this.logger = ua.getLogger('sip.inviteclientcontext');

    ua.applicants[this] = this;

    this.id = this.request.call_id + this.from_tag;

    this.onInfo = options.onInfo;
  };

  InviteClientContext.prototype = {
    invite: function invite() {
      var self = this;

      //Save the session into the ua sessions collection.
      //Note: placing in constructor breaks call to request.cancel on close... User does not need this anyway
      this.ua.sessions[this.id] = this;

      if (this.inviteWithoutSdp) {
        //just send an invite with no sdp...
        this.request.body = self.renderbody;
        this.status = C.STATUS_INVITE_SENT;
        this.send();
      } else {
        //Initialize Media Session
        this.sessionDescriptionHandler = this.sessionDescriptionHandlerFactory(this, this.sessionDescriptionHandlerFactoryOptions);

        this.sessionDescriptionHandler.getDescription(this.sessionDescriptionHandlerOptions, this.modifiers).then(function onSuccess(description) {
          if (self.isCanceled || self.status === C.STATUS_TERMINATED) {
            return;
          }
          self.hasOffer = true;
          self.request.body = description;
          self.status = C.STATUS_INVITE_SENT;
          self.send();
        }, function onFailure() {
          if (self.status === C.STATUS_TERMINATED) {
            return;
          }
          self.failed(null, SIP.C.causes.WEBRTC_ERROR);
          self.terminated(null, SIP.C.causes.WEBRTC_ERROR);
        });
      }

      return this;
    },

    receiveInviteResponse: function receiveInviteResponse(response) {
      var cause,
          session = this,
          id = response.call_id + response.from_tag + response.to_tag,
          extraHeaders = [],
          options = {};

      if (this.status === C.STATUS_TERMINATED || response.method !== SIP.C.INVITE) {
        return;
      }

      if (this.dialog && response.status_code >= 200 && response.status_code <= 299) {
        if (id !== this.dialog.id.toString()) {
          if (!this.createDialog(response, 'UAC', true)) {
            return;
          }
          this.emit("ack", response.transaction.sendACK({ body: SIP.Utils.generateFakeSDP(response.body) }));
          this.earlyDialogs[id].sendRequest(this, SIP.C.BYE);

          /* NOTE: This fails because the forking proxy does not recognize that an unanswerable
           * leg (due to peerConnection limitations) has been answered first. If your forking
           * proxy does not hang up all unanswered branches on the first branch answered, remove this.
           */
          if (this.status !== C.STATUS_CONFIRMED) {
            this.failed(response, SIP.C.causes.WEBRTC_ERROR);
            this.terminated(response, SIP.C.causes.WEBRTC_ERROR);
          }
          return;
        } else if (this.status === C.STATUS_CONFIRMED) {
          this.emit("ack", response.transaction.sendACK());
          return;
        } else if (!this.hasAnswer) {
          // invite w/o sdp is waiting for callback
          //an invite with sdp must go on, and hasAnswer is true
          return;
        }
      }

      if (this.dialog && response.status_code < 200) {
        /*
          Early media has been set up with at least one other different branch,
          but a final 2xx response hasn't been received
        */
        if (this.dialog.pracked.indexOf(response.getHeader('rseq')) !== -1 || this.dialog.pracked[this.dialog.pracked.length - 1] >= response.getHeader('rseq') && this.dialog.pracked.length > 0) {
          return;
        }

        if (!this.earlyDialogs[id] && !this.createDialog(response, 'UAC', true)) {
          return;
        }

        if (this.earlyDialogs[id].pracked.indexOf(response.getHeader('rseq')) !== -1 || this.earlyDialogs[id].pracked[this.earlyDialogs[id].pracked.length - 1] >= response.getHeader('rseq') && this.earlyDialogs[id].pracked.length > 0) {
          return;
        }

        extraHeaders.push('RAck: ' + response.getHeader('rseq') + ' ' + response.getHeader('cseq'));
        this.earlyDialogs[id].pracked.push(response.getHeader('rseq'));

        this.earlyDialogs[id].sendRequest(this, SIP.C.PRACK, {
          extraHeaders: extraHeaders,
          body: SIP.Utils.generateFakeSDP(response.body)
        });
        return;
      }

      // Proceed to cancellation if the user requested.
      if (this.isCanceled) {
        if (response.status_code >= 100 && response.status_code < 200) {
          this.request.cancel(this.cancelReason, extraHeaders);
          this.canceled(null);
        } else if (response.status_code >= 200 && response.status_code < 299) {
          this.acceptAndTerminate(response);
          this.emit('bye', this.request);
        } else if (response.status_code >= 300) {
          cause = SIP.C.REASON_PHRASE[response.status_code] || SIP.C.causes.CANCELED;
          this.rejected(response, cause);
          this.failed(response, cause);
          this.terminated(response, cause);
        }
        return;
      }

      switch (true) {
        case /^100$/.test(response.status_code):
          this.received_100 = true;
          this.emit('progress', response);
          break;
        case /^1[0-9]{2}$/.test(response.status_code):
          // Do nothing with 1xx responses without To tag.
          if (!response.to_tag) {
            this.logger.warn('1xx response received without to tag');
            break;
          }

          // Create Early Dialog if 1XX comes with contact
          if (response.hasHeader('contact')) {
            // An error on dialog creation will fire 'failed' event
            if (!this.createDialog(response, 'UAC', true)) {
              break;
            }
          }

          this.status = C.STATUS_1XX_RECEIVED;

          if (response.hasHeader('require') && response.getHeader('require').indexOf('100rel') !== -1) {

            // Do nothing if this.dialog is already confirmed
            if (this.dialog || !this.earlyDialogs[id]) {
              break;
            }

            if (this.earlyDialogs[id].pracked.indexOf(response.getHeader('rseq')) !== -1 || this.earlyDialogs[id].pracked[this.earlyDialogs[id].pracked.length - 1] >= response.getHeader('rseq') && this.earlyDialogs[id].pracked.length > 0) {
              return;
            }
            // TODO: This may be broken. It may have to be on the early dialog
            this.sessionDescriptionHandler = this.sessionDescriptionHandlerFactory(this, this.sessionDescriptionHandlerFactoryOptions);
            if (!this.sessionDescriptionHandler.hasDescription(response.getHeader('Content-Type'))) {
              extraHeaders.push('RAck: ' + response.getHeader('rseq') + ' ' + response.getHeader('cseq'));
              this.earlyDialogs[id].pracked.push(response.getHeader('rseq'));
              this.earlyDialogs[id].sendRequest(this, SIP.C.PRACK, {
                extraHeaders: extraHeaders
              });
              this.emit('progress', response);
            } else if (this.hasOffer) {
              if (!this.createDialog(response, 'UAC')) {
                break;
              }
              this.hasAnswer = true;
              this.dialog.pracked.push(response.getHeader('rseq'));

              this.sessionDescriptionHandler.setDescription(response.body, this.sessionDescriptionHandlerOptions, this.modifiers).then(function onSuccess() {
                extraHeaders.push('RAck: ' + response.getHeader('rseq') + ' ' + response.getHeader('cseq'));

                session.sendRequest(SIP.C.PRACK, {
                  extraHeaders: extraHeaders,
                  receiveResponse: function receiveResponse() {}
                });
                session.status = C.STATUS_EARLY_MEDIA;
                session.emit('progress', response);
              }, function onFailure(e) {
                session.logger.warn(e);
                session.acceptAndTerminate(response, 488, 'Not Acceptable Here');
                session.failed(response, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
              });
            } else {
              var earlyDialog = this.earlyDialogs[id];
              var earlyMedia = earlyDialog.sessionDescriptionHandler = this.sessionDescriptionHandlerFactory(this, this.sessionDescriptionHandlerFactoryOptions);

              earlyDialog.pracked.push(response.getHeader('rseq'));

              earlyMedia.setDescription(response.body, session.sessionDescriptionHandlerOptions, session.modifers).then(earlyMedia.getDescription.bind(earlyMedia, session.sessionDescriptionHandlerOptions, session.modifiers)).then(function onSuccess(description) {
                extraHeaders.push('RAck: ' + response.getHeader('rseq') + ' ' + response.getHeader('cseq'));
                earlyDialog.sendRequest(session, SIP.C.PRACK, {
                  extraHeaders: extraHeaders,
                  body: description
                });
                session.status = C.STATUS_EARLY_MEDIA;
                session.emit('progress', response);
              }).catch(function onFailure(e) {
                if (e instanceof SIP.Exceptions.GetDescriptionError) {
                  earlyDialog.pracked.push(response.getHeader('rseq'));
                  if (session.status === C.STATUS_TERMINATED) {
                    return;
                  }
                  session.failed(null, SIP.C.causes.WEBRTC_ERROR);
                  session.terminated(null, SIP.C.causes.WEBRTC_ERROR);
                } else {
                  earlyDialog.pracked.splice(earlyDialog.pracked.indexOf(response.getHeader('rseq')), 1);
                  // Could not set remote description
                  session.logger.warn('invalid description');
                  session.logger.warn(e);
                }
              });
            }
          } else {
            this.emit('progress', response);
          }
          break;
        case /^2[0-9]{2}$/.test(response.status_code):
          var cseq = this.request.cseq + ' ' + this.request.method;
          if (cseq !== response.getHeader('cseq')) {
            break;
          }

          if (this.status === C.STATUS_EARLY_MEDIA && this.dialog) {
            this.status = C.STATUS_CONFIRMED;
            options = {};
            if (this.renderbody) {
              extraHeaders.push('Content-Type: ' + this.rendertype);
              options.extraHeaders = extraHeaders;
              options.body = this.renderbody;
            }
            this.emit("ack", response.transaction.sendACK(options));
            this.accepted(response);
            break;
          }
          // Do nothing if this.dialog is already confirmed
          if (this.dialog) {
            break;
          }

          // This is an invite without sdp
          if (!this.hasOffer) {
            if (this.earlyDialogs[id] && this.earlyDialogs[id].sessionDescriptionHandler) {
              //REVISIT
              this.hasOffer = true;
              this.hasAnswer = true;
              this.sessionDescriptionHandler = this.earlyDialogs[id].sessionDescriptionHandler;
              if (!this.createDialog(response, 'UAC')) {
                break;
              }
              this.status = C.STATUS_CONFIRMED;
              this.emit("ack", response.transaction.sendACK());

              this.accepted(response);
            } else {
              this.sessionDescriptionHandler = this.sessionDescriptionHandlerFactory(this, this.sessionDescriptionHandlerFactoryOptions);

              if (!this.sessionDescriptionHandler.hasDescription(response.getHeader('Content-Type'))) {
                this.acceptAndTerminate(response, 400, 'Missing session description');
                this.failed(response, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
                break;
              }
              if (!this.createDialog(response, 'UAC')) {
                break;
              }
              this.hasOffer = true;
              this.sessionDescriptionHandler.setDescription(response.body, this.sessionDescriptionHandlerOptions, this.modifiers).then(this.sessionDescriptionHandler.getDescription.bind(this.sessionDescriptionHandler, this.sessionDescriptionHandlerOptions, this.modifiers)).then(function onSuccess(description) {
                //var localMedia;
                if (session.isCanceled || session.status === C.STATUS_TERMINATED) {
                  return;
                }

                session.status = C.STATUS_CONFIRMED;
                session.hasAnswer = true;

                session.emit("ack", response.transaction.sendACK({ body: description }));
                session.accepted(response);
              }).catch(function onFailure(e) {
                if (e instanceof SIP.Exceptions.GetDescriptionError) {
                  // TODO do something here
                  session.logger.warn("there was a problem");
                } else {
                  session.logger.warn('invalid description');
                  session.logger.warn(e);
                  session.acceptAndTerminate(response, 488, 'Invalid session description');
                  session.failed(response, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
                }
              });
            }
          } else if (this.hasAnswer) {
            if (this.renderbody) {
              extraHeaders.push('Content-Type: ' + session.rendertype);
              options.extraHeaders = extraHeaders;
              options.body = this.renderbody;
            }
            this.emit("ack", response.transaction.sendACK(options));
          } else {
            if (!this.sessionDescriptionHandler.hasDescription(response.getHeader('Content-Type'))) {
              this.acceptAndTerminate(response, 400, 'Missing session description');
              this.failed(response, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
              break;
            }
            if (!this.createDialog(response, 'UAC')) {
              break;
            }
            this.hasAnswer = true;
            this.sessionDescriptionHandler.setDescription(response.body, this.sessionDescriptionHandlerOptions, this.modifiers).then(function onSuccess() {
              var options = {};
              session.status = C.STATUS_CONFIRMED;
              if (session.renderbody) {
                extraHeaders.push('Content-Type: ' + session.rendertype);
                options.extraHeaders = extraHeaders;
                options.body = session.renderbody;
              }
              session.emit("ack", response.transaction.sendACK(options));
              session.accepted(response);
            }, function onFailure(e) {
              session.logger.warn(e);
              session.acceptAndTerminate(response, 488, 'Not Acceptable Here');
              session.failed(response, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
            });
          }
          break;
        default:
          cause = SIP.Utils.sipErrorCause(response.status_code);
          this.rejected(response, cause);
          this.failed(response, cause);
          this.terminated(response, cause);
      }
    },

    cancel: function cancel(options) {
      options = options || {};

      options.extraHeaders = (options.extraHeaders || []).slice();

      // Check Session Status
      if (this.status === C.STATUS_TERMINATED || this.status === C.STATUS_CONFIRMED) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }

      this.logger.log('canceling RTCSession');

      var cancel_reason = SIP.Utils.getCancelReason(options.status_code, options.reason_phrase);

      // Check Session Status
      if (this.status === C.STATUS_NULL || this.status === C.STATUS_INVITE_SENT && !this.received_100) {
        this.isCanceled = true;
        this.cancelReason = cancel_reason;
      } else if (this.status === C.STATUS_INVITE_SENT || this.status === C.STATUS_1XX_RECEIVED || this.status === C.STATUS_EARLY_MEDIA) {
        this.request.cancel(cancel_reason, options.extraHeaders);
      }

      return this.canceled();
    },

    terminate: function terminate(options) {
      if (this.status === C.STATUS_TERMINATED) {
        return this;
      }

      if (this.status === C.STATUS_WAITING_FOR_ACK || this.status === C.STATUS_CONFIRMED) {
        this.bye(options);
      } else {
        this.cancel(options);
      }

      return this;
    },

    receiveRequest: function receiveRequest(request) {
      // ICC RECEIVE REQUEST

      // Reject CANCELs
      if (request.method === SIP.C.CANCEL) {
        // TODO; make this a switch when it gets added
      }

      if (request.method === SIP.C.ACK && this.status === C.STATUS_WAITING_FOR_ACK) {

        SIP.Timers.clearTimeout(this.timers.ackTimer);
        SIP.Timers.clearTimeout(this.timers.invite2xxTimer);
        this.status = C.STATUS_CONFIRMED;

        this.accepted();
      }

      return Session.prototype.receiveRequest.apply(this, [request]);
    },

    onTransportError: function onTransportError() {
      if (this.status !== C.STATUS_CONFIRMED && this.status !== C.STATUS_TERMINATED) {
        this.failed(null, SIP.C.causes.CONNECTION_ERROR);
      }
    },

    onRequestTimeout: function onRequestTimeout() {
      if (this.status === C.STATUS_CONFIRMED) {
        this.terminated(null, SIP.C.causes.REQUEST_TIMEOUT);
      } else if (this.status !== C.STATUS_TERMINATED) {
        this.failed(null, SIP.C.causes.REQUEST_TIMEOUT);
        this.terminated(null, SIP.C.causes.REQUEST_TIMEOUT);
      }
    }

  };

  SIP.InviteClientContext = InviteClientContext;

  ReferClientContext = function ReferClientContext(ua, applicant, target, options) {
    this.options = options || {};
    this.extraHeaders = (this.options.extraHeaders || []).slice();

    if (ua === undefined || applicant === undefined || target === undefined) {
      throw new TypeError('Not enough arguments');
    }

    SIP.Utils.augment(this, SIP.ClientContext, [ua, SIP.C.REFER, applicant.remoteIdentity.uri.toString(), options]);

    this.applicant = applicant;

    var withReplaces = target instanceof SIP.InviteServerContext || target instanceof SIP.InviteClientContext;
    if (withReplaces) {
      // Attended Transfer
      // All of these fields should be defined based on the check above
      this.target = '"' + target.remoteIdentity.friendlyName + '" ' + '<' + target.dialog.remote_target.toString() + '?Replaces=' + target.dialog.id.call_id + '%3Bto-tag%3D' + target.dialog.id.remote_tag + '%3Bfrom-tag%3D' + target.dialog.id.local_tag + '>';
    } else {
      // Blind Transfer
      // Refer-To: <sip:bob@example.com>
      try {
        this.target = SIP.Grammar.parse(target, 'Refer_To').uri || target;
      } catch (e) {
        this.logger.debug(".refer() cannot parse Refer_To from", target);
        this.logger.debug("...falling through to normalizeTarget()");
      }

      // Check target validity
      this.target = this.ua.normalizeTarget(this.target);
      if (!this.target) {
        throw new TypeError('Invalid target: ' + target);
      }
    }

    if (this.ua) {
      this.extraHeaders.push('Referred-By: <' + this.ua.configuration.uri + '>');
    }
    // TODO: Check that this is correct isc/icc
    this.extraHeaders.push('Contact: ' + applicant.contact);
    this.extraHeaders.push('Allow: ' + SIP.UA.C.ALLOWED_METHODS.toString());
    this.extraHeaders.push('Refer-To: ' + this.target);
  };

  ReferClientContext.prototype = {

    refer: function refer(options) {
      options = options || {};

      var extraHeaders = (this.extraHeaders || []).slice();
      if (options.extraHeaders) {
        extraHeaders.concat(options.extraHeaders);
      }

      this.applicant.sendRequest(SIP.C.REFER, {
        extraHeaders: this.extraHeaders,
        receiveResponse: function (response) {
          if (/^1[0-9]{2}$/.test(response.status_code)) {
            this.emit('referRequestProgress', this);
          } else if (/^2[0-9]{2}$/.test(response.status_code)) {
            this.emit('referRequestAccepted', this);
          } else if (/^[4-6][0-9]{2}$/.test(response.status_code)) {
            this.emit('referRequestRejected', this);
          }
          if (options.receiveResponse) {
            options.receiveResponse(response);
          }
        }.bind(this)
      });
      return this;
    },

    receiveNotify: function receiveNotify(request) {
      // If we can correctly handle this, then we need to send a 200 OK!
      if (request.hasHeader('Content-Type') && request.getHeader('Content-Type').search(/^message\/sipfrag/) !== -1) {
        var messageBody = SIP.Grammar.parse(request.body, 'sipfrag');
        if (messageBody === -1) {
          request.reply(489, 'Bad Event');
          return;
        }
        switch (true) {
          case /^1[0-9]{2}$/.test(messageBody.status_code):
            this.emit('referProgress', this);
            break;
          case /^2[0-9]{2}$/.test(messageBody.status_code):
            this.emit('referAccepted', this);
            if (!this.options.activeAfterTransfer && this.applicant.terminate) {
              this.applicant.terminate();
            }
            break;
          default:
            this.emit('referRejected', this);
            break;
        }
        request.reply(200);
        this.emit('notify', request);
        return;
      }
      request.reply(489, 'Bad Event');
    }
  };

  SIP.ReferClientContext = ReferClientContext;

  ReferServerContext = function ReferServerContext(ua, request) {
    SIP.Utils.augment(this, SIP.ServerContext, [ua, request]);

    this.ua = ua;

    this.status = C.STATUS_INVITE_RECEIVED;
    this.from_tag = request.from_tag;
    this.id = request.call_id + this.from_tag;
    this.request = request;
    this.contact = this.ua.contact.toString();

    this.logger = ua.getLogger('sip.referservercontext', this.id);

    // RFC 3515 2.4.1
    if (!this.request.hasHeader('refer-to')) {
      this.logger.warn('Invalid REFER packet. A refer-to header is required. Rejecting refer.');
      this.reject();
      return;
    }

    this.referTo = this.request.parseHeader('refer-to');

    // TODO: Must set expiration timer and send 202 if there is no response by then

    this.referredSession = this.ua.findSession(request);

    // Needed to send the NOTIFY's
    this.cseq = Math.floor(Math.random() * 10000);
    this.call_id = this.request.call_id;
    this.from_uri = this.request.to.uri;
    this.from_tag = this.request.to.parameters.tag;
    this.remote_target = this.request.headers.Contact[0].parsed.uri;
    this.to_uri = this.request.from.uri;
    this.to_tag = this.request.from_tag;
    this.route_set = this.request.getHeaders('record-route');

    this.receiveNonInviteResponse = function () {};

    if (this.request.hasHeader('referred-by')) {
      this.referredBy = this.request.getHeader('referred-by');
    }

    if (this.referTo.uri.hasHeader('replaces')) {
      this.replaces = this.referTo.uri.getHeader('replaces');
    }

    this.status = C.STATUS_WAITING_FOR_ANSWER;
  };

  ReferServerContext.prototype = {

    progress: function progress() {
      if (this.status !== C.STATUS_WAITING_FOR_ANSWER) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }
      this.request.reply(100);
    },

    reject: function reject(options) {
      if (this.status === C.STATUS_TERMINATED) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }
      this.logger.log('Rejecting refer');
      this.status = C.STATUS_TERMINATED;
      SIP.ServerContext.prototype.reject.call(this, options);
      this.emit('referRequestRejected', this);
    },

    accept: function accept(options, modifiers) {
      options = options || {};

      if (this.status === C.STATUS_WAITING_FOR_ANSWER) {
        this.status = C.STATUS_ANSWERED;
      } else {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }

      this.request.reply(202, 'Accepted');
      this.emit('referRequestAccepted', this);

      if (options.followRefer) {
        this.logger.log('Accepted refer, attempting to automatically follow it');

        var target = this.referTo.uri;
        if (!target.scheme.match("^sips?$")) {
          this.logger.error('SIP.js can only automatically follow SIP refer target');
          this.reject();
          return;
        }

        var inviteOptions = options.inviteOptions || {};
        var extraHeaders = (inviteOptions.extraHeaders || []).slice();
        if (this.replaces) {
          // decodeURIComponent is a holdover from 2c086eb4. Not sure that it is actually necessary
          extraHeaders.push('Replaces: ' + decodeURIComponent(this.replaces));
        }

        if (this.referredBy) {
          extraHeaders.push('Referred-By: ' + this.referredBy);
        }

        inviteOptions.extraHeaders = extraHeaders;

        target.clearHeaders();

        this.targetSession = this.ua.invite(target, inviteOptions, modifiers);

        this.emit('referInviteSent', this);

        this.targetSession.once('progress', function () {
          this.sendNotify('SIP/2.0 100 Trying');
          this.emit('referProgress', this);
          if (this.referredSession) {
            this.referredSession.emit('referProgress', this);
          }
        }.bind(this));
        this.targetSession.once('accepted', function () {
          this.logger.log('Successfully followed the refer');
          this.sendNotify('SIP/2.0 200 OK');
          this.emit('referAccepted', this);
          if (this.referredSession) {
            this.referredSession.emit('referAccepted', this);
          }
        }.bind(this));

        var referFailed = function referFailed(response) {
          if (this.status === C.STATUS_TERMINATED) {
            return; // No throw here because it is possible this gets called multiple times
          }
          this.logger.log('Refer was not successful. Resuming session');
          if (response && response.status_code === 429) {
            this.logger.log('Alerting referrer that identity is required.');
            this.sendNotify('SIP/2.0 429 Provide Referrer Identity');
            return;
          }
          this.sendNotify('SIP/2.0 603 Declined');
          // Must change the status after sending the final Notify or it will not send due to check
          this.status = C.STATUS_TERMINATED;
          this.emit('referRejected', this);
          if (this.referredSession) {
            this.referredSession.emit('referRejected');
          }
        };

        this.targetSession.once('rejected', referFailed.bind(this));
        this.targetSession.once('failed', referFailed.bind(this));
      } else {
        this.logger.log('Accepted refer, but did not automatically follow it');
        this.sendNotify('SIP/2.0 200 OK');
        this.emit('referAccepted', this);
        if (this.referredSession) {
          this.referredSession.emit('referAccepted', this);
        }
      }
    },

    sendNotify: function sendNotify(body) {
      if (this.status !== C.STATUS_ANSWERED) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }
      if (SIP.Grammar.parse(body, 'sipfrag') === -1) {
        throw new Error('sipfrag body is required to send notify for refer');
      }

      var request = new SIP.OutgoingRequest(SIP.C.NOTIFY, this.remote_target, this.ua, {
        cseq: this.cseq += 1, // randomly generated then incremented on each additional notify
        call_id: this.call_id, // refer call_id
        from_uri: this.from_uri,
        from_tag: this.from_tag,
        to_uri: this.to_uri,
        to_tag: this.to_tag,
        route_set: this.route_set
      }, ['Event: refer', 'Subscription-State: terminated', 'Content-Type: message/sipfrag'], body);

      new SIP.RequestSender({
        request: request,
        onRequestTimeout: function onRequestTimeout() {
          return;
        },
        onTransportError: function onTransportError() {
          return;
        },
        receiveResponse: function receiveResponse() {
          return;
        }
      }, this.ua).send();
    }
  };

  SIP.ReferServerContext = ReferServerContext;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview DTMF
 */

/**
 * @class DTMF
 * @param {SIP.Session} session
 */

module.exports = function (SIP) {

  var _DTMF,
      C = {
    MIN_DURATION: 70,
    MAX_DURATION: 6000,
    DEFAULT_DURATION: 100,
    MIN_INTER_TONE_GAP: 50,
    DEFAULT_INTER_TONE_GAP: 500
  };

  _DTMF = function DTMF(session, tone, options) {
    var duration, interToneGap;

    if (tone === undefined) {
      throw new TypeError('Not enough arguments');
    }

    this.logger = session.ua.getLogger('sip.invitecontext.dtmf', session.id);
    this.owner = session;
    this.direction = null;

    options = options || {};
    duration = options.duration || null;
    interToneGap = options.interToneGap || null;

    // Check tone type
    if (typeof tone === 'string') {
      tone = tone.toUpperCase();
    } else if (typeof tone === 'number') {
      tone = tone.toString();
    } else {
      throw new TypeError('Invalid tone: ' + tone);
    }

    // Check tone value
    if (!tone.match(/^[0-9A-D#*]$/)) {
      throw new TypeError('Invalid tone: ' + tone);
    } else {
      this.tone = tone;
    }

    // Check duration
    if (duration && !SIP.Utils.isDecimal(duration)) {
      throw new TypeError('Invalid tone duration: ' + duration);
    } else if (!duration) {
      duration = _DTMF.C.DEFAULT_DURATION;
    } else if (duration < _DTMF.C.MIN_DURATION) {
      this.logger.warn('"duration" value is lower than the minimum allowed, setting it to ' + _DTMF.C.MIN_DURATION + ' milliseconds');
      duration = _DTMF.C.MIN_DURATION;
    } else if (duration > _DTMF.C.MAX_DURATION) {
      this.logger.warn('"duration" value is greater than the maximum allowed, setting it to ' + _DTMF.C.MAX_DURATION + ' milliseconds');
      duration = _DTMF.C.MAX_DURATION;
    } else {
      duration = Math.abs(duration);
    }
    this.duration = duration;

    // Check interToneGap
    if (interToneGap && !SIP.Utils.isDecimal(interToneGap)) {
      throw new TypeError('Invalid interToneGap: ' + interToneGap);
    } else if (!interToneGap) {
      interToneGap = _DTMF.C.DEFAULT_INTER_TONE_GAP;
    } else if (interToneGap < _DTMF.C.MIN_INTER_TONE_GAP) {
      this.logger.warn('"interToneGap" value is lower than the minimum allowed, setting it to ' + _DTMF.C.MIN_INTER_TONE_GAP + ' milliseconds');
      interToneGap = _DTMF.C.MIN_INTER_TONE_GAP;
    } else {
      interToneGap = Math.abs(interToneGap);
    }
    this.interToneGap = interToneGap;
  };
  _DTMF.prototype = Object.create(SIP.EventEmitter.prototype);

  _DTMF.prototype.send = function (options) {
    var extraHeaders,
        body = {};

    this.direction = 'outgoing';

    // Check RTCSession Status
    if (this.owner.status !== SIP.Session.C.STATUS_CONFIRMED && this.owner.status !== SIP.Session.C.STATUS_WAITING_FOR_ACK) {
      throw new SIP.Exceptions.InvalidStateError(this.owner.status);
    }

    // Get DTMF options
    options = options || {};
    extraHeaders = options.extraHeaders ? options.extraHeaders.slice() : [];

    body.contentType = 'application/dtmf-relay';

    body.body = "Signal= " + this.tone + "\r\n";
    body.body += "Duration= " + this.duration;

    this.request = this.owner.dialog.sendRequest(this, SIP.C.INFO, {
      extraHeaders: extraHeaders,
      body: body
    });

    this.owner.emit('dtmf', this.request, this);
  };

  /**
   * @private
   */
  _DTMF.prototype.receiveResponse = function (response) {
    var cause;

    switch (true) {
      case /^1[0-9]{2}$/.test(response.status_code):
        // Ignore provisional responses.
        break;

      case /^2[0-9]{2}$/.test(response.status_code):
        this.emit('succeeded', {
          originator: 'remote',
          response: response
        });
        break;

      default:
        cause = SIP.Utils.sipErrorCause(response.status_code);
        this.emit('failed', response, cause);
        break;
    }
  };

  /**
   * @private
   */
  _DTMF.prototype.onRequestTimeout = function () {
    this.emit('failed', null, SIP.C.causes.REQUEST_TIMEOUT);
    this.owner.onRequestTimeout();
  };

  /**
   * @private
   */
  _DTMF.prototype.onTransportError = function () {
    this.emit('failed', null, SIP.C.causes.CONNECTION_ERROR);
    this.owner.onTransportError();
  };

  /**
   * @private
   */
  _DTMF.prototype.onDialogError = function (response) {
    this.emit('failed', response, SIP.C.causes.DIALOG_ERROR);
    this.owner.onDialogError(response);
  };

  /**
   * @private
   */
  _DTMF.prototype.init_incoming = function (request) {
    this.direction = 'incoming';
    this.request = request;

    request.reply(200);

    if (!this.tone || !this.duration) {
      this.logger.warn('invalid INFO DTMF received, discarded');
    } else {
      this.owner.emit('dtmf', request, this);
    }
  };

  _DTMF.C = C;
  return _DTMF;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileoverview SIP Subscriber (SIP-Specific Event Notifications RFC6665)
 */

/**
 * @augments SIP
 * @class Class creating a SIP Subscription.
 */

module.exports = function (SIP) {
  SIP.Subscription = function (ua, target, event, options) {
    options = Object.create(options || Object.prototype);
    this.extraHeaders = options.extraHeaders = (options.extraHeaders || []).slice();

    this.id = null;
    this.state = 'init';

    if (!event) {
      throw new TypeError('Event necessary to create a subscription.');
    } else {
      //TODO: check for valid events here probably make a list in SIP.C; or leave it up to app to check?
      //The check may need to/should probably occur on the other side,
      this.event = event;
    }

    if (typeof options.expires !== 'number') {
      ua.logger.warn('expires must be a number. Using default of 3600.');
      this.expires = 3600;
    } else {
      this.expires = options.expires;
    }
    this.requestedExpires = this.expires;

    options.extraHeaders.push('Event: ' + this.event);
    options.extraHeaders.push('Expires: ' + this.expires);

    if (options.body) {
      this.body = options.body;
    }

    this.contact = ua.contact.toString();

    options.extraHeaders.push('Contact: ' + this.contact);
    options.extraHeaders.push('Allow: ' + SIP.UA.C.ALLOWED_METHODS.toString());

    SIP.Utils.augment(this, SIP.ClientContext, [ua, SIP.C.SUBSCRIBE, target, options]);

    this.logger = ua.getLogger('sip.subscription');

    this.dialog = null;
    this.timers = { N: null, sub_duration: null };
    this.errorCodes = [404, 405, 410, 416, 480, 481, 482, 483, 484, 485, 489, 501, 604];
  };

  SIP.Subscription.prototype = {
    subscribe: function subscribe() {
      var sub = this;

      //these states point to an existing subscription, no subscribe is necessary
      if (this.state === 'active') {
        this.refresh();
        return this;
      } else if (this.state === 'notify_wait') {
        return this;
      }

      SIP.Timers.clearTimeout(this.timers.sub_duration);
      SIP.Timers.clearTimeout(this.timers.N);
      this.timers.N = SIP.Timers.setTimeout(sub.timer_fire.bind(sub), SIP.Timers.TIMER_N);

      this.ua.earlySubscriptions[this.request.call_id + this.request.from.parameters.tag + this.event] = this;

      this.send();

      this.state = 'notify_wait';

      return this;
    },

    refresh: function refresh() {
      if (this.state === 'terminated' || this.state === 'pending' || this.state === 'notify_wait') {
        return;
      }

      this.dialog.sendRequest(this, SIP.C.SUBSCRIBE, {
        extraHeaders: this.extraHeaders,
        body: this.body
      });
    },

    receiveResponse: function receiveResponse(response) {
      var expires,
          sub = this,
          cause = SIP.Utils.getReasonPhrase(response.status_code);

      if (this.state === 'notify_wait' && response.status_code >= 300 || this.state !== 'notify_wait' && this.errorCodes.indexOf(response.status_code) !== -1) {
        this.failed(response, null);
      } else if (/^2[0-9]{2}$/.test(response.status_code)) {
        this.emit('accepted', response, cause);
        //As we don't support RFC 5839 or other extensions where the NOTIFY is optional, timer N will not be cleared
        //SIP.Timers.clearTimeout(this.timers.N);

        expires = response.getHeader('Expires');

        if (expires && expires <= this.requestedExpires) {
          // Preserve new expires value for subsequent requests
          this.expires = expires;
          this.timers.sub_duration = SIP.Timers.setTimeout(sub.refresh.bind(sub), expires * 900);
        } else {
          if (!expires) {
            this.logger.warn('Expires header missing in a 200-class response to SUBSCRIBE');
            this.failed(response, SIP.C.EXPIRES_HEADER_MISSING);
          } else {
            this.logger.warn('Expires header in a 200-class response to SUBSCRIBE with a higher value than the one in the request');
            this.failed(response, SIP.C.INVALID_EXPIRES_HEADER);
          }
        }
      } else if (response.statusCode > 300) {
        this.emit('failed', response, cause);
        this.emit('rejected', response, cause);
      }
    },

    unsubscribe: function unsubscribe() {
      var extraHeaders = [],
          sub = this;

      this.state = 'terminated';

      extraHeaders.push('Event: ' + this.event);
      extraHeaders.push('Expires: 0');

      extraHeaders.push('Contact: ' + this.contact);
      extraHeaders.push('Allow: ' + SIP.UA.C.ALLOWED_METHODS.toString());

      //makes sure expires isn't set, and other typical resubscribe behavior
      this.receiveResponse = function () {};

      this.dialog.sendRequest(this, this.method, {
        extraHeaders: extraHeaders,
        body: this.body
      });

      SIP.Timers.clearTimeout(this.timers.sub_duration);
      SIP.Timers.clearTimeout(this.timers.N);
      this.timers.N = SIP.Timers.setTimeout(sub.timer_fire.bind(sub), SIP.Timers.TIMER_N);
    },

    /**
    * @private
    */
    timer_fire: function timer_fire() {
      if (this.state === 'terminated') {
        this.terminateDialog();
        SIP.Timers.clearTimeout(this.timers.N);
        SIP.Timers.clearTimeout(this.timers.sub_duration);

        delete this.ua.subscriptions[this.id];
      } else if (this.state === 'notify_wait' || this.state === 'pending') {
        this.close();
      } else {
        this.refresh();
      }
    },

    /**
    * @private
    */
    close: function close() {
      if (this.state === 'notify_wait') {
        this.state = 'terminated';
        SIP.Timers.clearTimeout(this.timers.N);
        SIP.Timers.clearTimeout(this.timers.sub_duration);
        this.receiveResponse = function () {};

        delete this.ua.earlySubscriptions[this.request.call_id + this.request.from.parameters.tag + this.event];
      } else if (this.state !== 'terminated') {
        this.unsubscribe();
      }
    },

    /**
    * @private
    */
    createConfirmedDialog: function createConfirmedDialog(message, type) {
      var dialog;

      this.terminateDialog();
      dialog = new SIP.Dialog(this, message, type);
      dialog.invite_seqnum = this.request.cseq;
      dialog.local_seqnum = this.request.cseq;

      if (!dialog.error) {
        this.dialog = dialog;
        return true;
      }
      // Dialog not created due to an error
      else {
          return false;
        }
    },

    /**
    * @private
    */
    terminateDialog: function terminateDialog() {
      if (this.dialog) {
        delete this.ua.subscriptions[this.id];
        this.dialog.terminate();
        delete this.dialog;
      }
    },

    /**
    * @private
    */
    receiveRequest: function receiveRequest(request) {
      var sub_state,
          sub = this;

      function setExpiresTimeout() {
        if (sub_state.expires) {
          SIP.Timers.clearTimeout(sub.timers.sub_duration);
          sub_state.expires = Math.min(sub.expires, Math.max(sub_state.expires, 0));
          sub.timers.sub_duration = SIP.Timers.setTimeout(sub.refresh.bind(sub), sub_state.expires * 900);
        }
      }

      if (!this.matchEvent(request)) {
        //checks event and subscription_state headers
        request.reply(489);
        return;
      }

      if (!this.dialog) {
        if (this.createConfirmedDialog(request, 'UAS')) {
          this.id = this.dialog.id.toString();
          delete this.ua.earlySubscriptions[this.request.call_id + this.request.from.parameters.tag + this.event];
          this.ua.subscriptions[this.id] = this;
          // UPDATE ROUTE SET TO BE BACKWARDS COMPATIBLE?
        }
      }

      sub_state = request.parseHeader('Subscription-State');

      request.reply(200, SIP.C.REASON_200);

      SIP.Timers.clearTimeout(this.timers.N);

      this.emit('notify', { request: request });

      // if we've set state to terminated, no further processing should take place
      // and we are only interested in cleaning up after the appropriate NOTIFY
      if (this.state === 'terminated') {
        if (sub_state.state === 'terminated') {
          this.terminateDialog();
          SIP.Timers.clearTimeout(this.timers.N);
          SIP.Timers.clearTimeout(this.timers.sub_duration);

          delete this.ua.subscriptions[this.id];
        }
        return;
      }

      switch (sub_state.state) {
        case 'active':
          this.state = 'active';
          setExpiresTimeout();
          break;
        case 'pending':
          if (this.state === 'notify_wait') {
            setExpiresTimeout();
          }
          this.state = 'pending';
          break;
        case 'terminated':
          SIP.Timers.clearTimeout(this.timers.sub_duration);
          if (sub_state.reason) {
            this.logger.log('terminating subscription with reason ' + sub_state.reason);
            switch (sub_state.reason) {
              case 'deactivated':
              case 'timeout':
                this.subscribe();
                return;
              case 'probation':
              case 'giveup':
                if (sub_state.params && sub_state.params['retry-after']) {
                  this.timers.sub_duration = SIP.Timers.setTimeout(sub.subscribe.bind(sub), sub_state.params['retry-after']);
                } else {
                  this.subscribe();
                }
                return;
              case 'rejected':
              case 'noresource':
              case 'invariant':
                break;
            }
          }
          this.close();
          break;
      }
    },

    failed: function failed(response, cause) {
      this.close();
      this.emit('failed', response, cause);
      this.emit('rejected', response, cause);
      return this;
    },

    onDialogError: function onDialogError(response) {
      this.failed(response, SIP.C.causes.DIALOG_ERROR);
    },

    /**
    * @private
    */
    matchEvent: function matchEvent(request) {
      var event;

      // Check mandatory header Event
      if (!request.hasHeader('Event')) {
        this.logger.warn('missing Event header');
        return false;
      }
      // Check mandatory header Subscription-State
      if (!request.hasHeader('Subscription-State')) {
        this.logger.warn('missing Subscription-State header');
        return false;
      }

      // Check whether the event in NOTIFY matches the event in SUBSCRIBE
      event = request.parseHeader('event').event;

      if (this.event !== event) {
        this.logger.warn('event match failed');
        request.reply(481, 'Event Match Failed');
        return false;
      } else {
        return true;
      }
    }
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * @augments SIP
 * @class Class creating a SIP User Agent.
 * @param {function returning SIP.sessionDescriptionHandler} [configuration.sessionDescriptionHandlerFactory]
 *        A function will be invoked by each of the UA's Sessions to build the sessionDescriptionHandler for that Session.
 *        If no (or a falsy) value is provided, each Session will use a default (WebRTC) sessionDescriptionHandler.
 *
 * @param {Object} [configuration.media] gets passed to SIP.sessionDescriptionHandler.getDescription as mediaHint
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (SIP, environment) {
  var UA,
      C = {
    // UA status codes
    STATUS_INIT: 0,
    STATUS_STARTING: 1,
    STATUS_READY: 2,
    STATUS_USER_CLOSED: 3,
    STATUS_NOT_READY: 4,

    // UA error codes
    CONFIGURATION_ERROR: 1,
    NETWORK_ERROR: 2,

    ALLOWED_METHODS: ['ACK', 'CANCEL', 'INVITE', 'MESSAGE', 'BYE', 'OPTIONS', 'INFO', 'NOTIFY', 'REFER'],

    ACCEPTED_BODY_TYPES: ['application/sdp', 'application/dtmf-relay'],

    MAX_FORWARDS: 70,
    TAG_LENGTH: 10
  };

  UA = function UA(configuration) {
    var self = this;

    // Helper function for forwarding events
    function selfEmit(type) {
      //registrationFailed handler is invoked with two arguments. Allow event handlers to be invoked with a variable no. of arguments
      return self.emit.bind(self, type);
    }

    // Set Accepted Body Types
    C.ACCEPTED_BODY_TYPES = C.ACCEPTED_BODY_TYPES.toString();

    this.log = new SIP.LoggerFactory();
    this.logger = this.getLogger('sip.ua');

    this.cache = {
      credentials: {}
    };

    this.configuration = {};
    this.dialogs = {};

    //User actions outside any session/dialog (MESSAGE)
    this.applicants = {};

    this.data = {};
    this.sessions = {};
    this.subscriptions = {};
    this.earlySubscriptions = {};
    this.transport = null;
    this.contact = null;
    this.status = C.STATUS_INIT;
    this.error = null;
    this.transactions = {
      nist: {},
      nict: {},
      ist: {},
      ict: {}
    };

    this.transportRecoverAttempts = 0;
    this.transportRecoveryTimer = null;

    Object.defineProperties(this, {
      transactionsCount: {
        get: function get() {
          var type,
              transactions = ['nist', 'nict', 'ist', 'ict'],
              count = 0;

          for (type in transactions) {
            count += Object.keys(this.transactions[transactions[type]]).length;
          }

          return count;
        }
      },

      nictTransactionsCount: {
        get: function get() {
          return Object.keys(this.transactions['nict']).length;
        }
      },

      nistTransactionsCount: {
        get: function get() {
          return Object.keys(this.transactions['nist']).length;
        }
      },

      ictTransactionsCount: {
        get: function get() {
          return Object.keys(this.transactions['ict']).length;
        }
      },

      istTransactionsCount: {
        get: function get() {
          return Object.keys(this.transactions['ist']).length;
        }
      }
    });

    /**
     * Load configuration
     *
     * @throws {SIP.Exceptions.ConfigurationError}
     * @throws {TypeError}
     */

    if (configuration === undefined) {
      configuration = {};
    } else if (typeof configuration === 'string' || configuration instanceof String) {
      configuration = {
        uri: configuration
      };
    }

    // Apply log configuration if present
    if (configuration.log) {
      if (configuration.log.hasOwnProperty('builtinEnabled')) {
        this.log.builtinEnabled = configuration.log.builtinEnabled;
      }

      if (configuration.log.hasOwnProperty('level')) {
        this.log.level = configuration.log.level;
      }

      if (configuration.log.hasOwnProperty('connector')) {
        this.log.connector = configuration.log.connector;
      }
    }

    try {
      this.loadConfig(configuration);
    } catch (e) {
      this.status = C.STATUS_NOT_READY;
      this.error = C.CONFIGURATION_ERROR;
      throw e;
    }

    // Initialize registerContext
    this.registerContext = new SIP.RegisterContext(this);
    this.registerContext.on('failed', selfEmit('registrationFailed'));
    this.registerContext.on('registered', selfEmit('registered'));
    this.registerContext.on('unregistered', selfEmit('unregistered'));

    if (this.configuration.autostart) {
      this.start();
    }
  };
  UA.prototype = Object.create(SIP.EventEmitter.prototype);

  //=================
  //  High Level API
  //=================

  UA.prototype.register = function (options) {
    this.configuration.register = true;
    this.registerContext.register(options);

    return this;
  };

  /**
   * Unregister.
   *
   * @param {Boolean} [all] unregister all user bindings.
   *
   */
  UA.prototype.unregister = function (options) {
    this.configuration.register = false;

    var context = this.registerContext;
    this.afterConnected(context.unregister.bind(context, options));

    return this;
  };

  UA.prototype.isRegistered = function () {
    return this.registerContext.registered;
  };

  /**
   * Connection state.
   * @param {Boolean}
   */
  UA.prototype.isConnected = function () {
    return this.transport ? this.transport.connected : false;
  };

  UA.prototype.afterConnected = function afterConnected(callback) {
    if (this.isConnected()) {
      callback();
    } else {
      this.once('connected', callback);
    }
  };

  /**
   * Returns a promise which resolves once the UA is connected.
   */
  UA.prototype.waitForConnected = function () {
    return new SIP.Utils.Promise(function (resolve) {
      this.afterConnected(resolve);
    }.bind(this));
  };

  /**
   * Make an outgoing call.
   *
   * @param {String} target
   * @param {Object} views
   * @param {Object} [options.media] gets passed to SIP.sessionDescriptionHandler.getDescription as mediaHint
   *
   * @throws {TypeError}
   *
   */
  UA.prototype.invite = function (target, options, modifiers) {
    var context = new SIP.InviteClientContext(this, target, options, modifiers);

    // Delay sending actual invite until the next 'tick' if we are already
    // connected, so that API consumers can register to events fired by the
    // the session.
    this.waitForConnected().then(function () {
      context.invite();
      this.emit('inviteSent', context);
    }.bind(this));
    return context;
  };

  UA.prototype.subscribe = function (target, event, options) {
    var sub = new SIP.Subscription(this, target, event, options);

    this.afterConnected(sub.subscribe.bind(sub));
    return sub;
  };

  /**
   * Send a message.
   *
   * @param {String} target
   * @param {String} body
   * @param {Object} [options]
   *
   * @throws {TypeError}
   *
   */
  UA.prototype.message = function (target, body, options) {
    if (body === undefined) {
      throw new TypeError('Not enough arguments');
    }

    // There is no Message module, so it is okay that the UA handles defaults here.
    options = Object.create(options || Object.prototype);
    options.contentType || (options.contentType = 'text/plain');
    options.body = body;

    return this.request(SIP.C.MESSAGE, target, options);
  };

  UA.prototype.request = function (method, target, options) {
    var req = new SIP.ClientContext(this, method, target, options);

    this.afterConnected(req.send.bind(req));
    return req;
  };

  /**
   * Gracefully close.
   *
   */
  UA.prototype.stop = function () {
    var session,
        subscription,
        applicant,
        ua = this;

    function transactionsListener() {
      if (ua.nistTransactionsCount === 0 && ua.nictTransactionsCount === 0) {
        ua.removeListener('transactionDestroyed', transactionsListener);
        ua.transport.disconnect();
      }
    }

    this.logger.log('user requested closure...');

    if (this.status === C.STATUS_USER_CLOSED) {
      this.logger.warn('UA already closed');
      return this;
    }

    // Clear transportRecoveryTimer
    SIP.Timers.clearTimeout(this.transportRecoveryTimer);

    // Close registerContext
    this.logger.log('closing registerContext');
    this.registerContext.close();

    // Run  _terminate_ on every Session
    for (session in this.sessions) {
      this.logger.log('closing session ' + session);
      this.sessions[session].terminate();
    }

    //Run _close_ on every confirmed Subscription
    for (subscription in this.subscriptions) {
      this.logger.log('unsubscribing from subscription ' + subscription);
      this.subscriptions[subscription].close();
    }

    //Run _close_ on every early Subscription
    for (subscription in this.earlySubscriptions) {
      this.logger.log('unsubscribing from early subscription ' + subscription);
      this.earlySubscriptions[subscription].close();
    }

    // Run  _close_ on every applicant
    for (applicant in this.applicants) {
      this.applicants[applicant].close();
    }

    this.status = C.STATUS_USER_CLOSED;

    /*
     * If the remaining transactions are all INVITE transactions, there is no need to
     * wait anymore because every session has already been closed by this method.
     * - locally originated sessions where terminated (CANCEL or BYE)
     * - remotely originated sessions where rejected (4XX) or terminated (BYE)
     * Remaining INVITE transactions belong tho sessions that where answered. This are in
     * 'accepted' state due to timers 'L' and 'M' defined in [RFC 6026]
     */
    if (this.nistTransactionsCount === 0 && this.nictTransactionsCount === 0) {
      this.transport.disconnect();
    } else {
      this.on('transactionDestroyed', transactionsListener);
    }

    if (typeof environment.removeEventListener === 'function') {
      // Google Chrome Packaged Apps don't allow 'unload' listeners:
      // unload is not available in packaged apps
      if (!(global.chrome && global.chrome.app && global.chrome.app.runtime)) {
        environment.removeEventListener('unload', this.environListener);
      }
    }

    return this;
  };

  /**
   * Connect to the WS server if status = STATUS_INIT.
   * Resume UA after being closed.
   *
   */
  UA.prototype.start = function () {
    var server;

    this.logger.log('user requested startup...');
    if (this.status === C.STATUS_INIT) {
      server = this.getNextWsServer();
      this.status = C.STATUS_STARTING;
      new SIP.Transport(this, server);
    } else if (this.status === C.STATUS_USER_CLOSED) {
      this.logger.log('resuming');
      this.status = C.STATUS_READY;
      this.transport.connect();
    } else if (this.status === C.STATUS_STARTING) {
      this.logger.log('UA is in STARTING status, not opening new connection');
    } else if (this.status === C.STATUS_READY) {
      this.logger.log('UA is in READY status, not resuming');
    } else {
      this.logger.error('Connection is down. Auto-Recovery system is trying to connect');
    }

    if (this.configuration.autostop && typeof environment.addEventListener === 'function') {
      // Google Chrome Packaged Apps don't allow 'unload' listeners:
      // unload is not available in packaged apps
      if (!(global.chrome && global.chrome.app && global.chrome.app.runtime)) {
        this.environListener = this.stop.bind(this);
        environment.addEventListener('unload', this.environListener);
      }
    }

    return this;
  };

  /**
   * Normalize a string into a valid SIP request URI
   *
   * @param {String} target
   *
   * @returns {SIP.URI|undefined}
   */
  UA.prototype.normalizeTarget = function (target) {
    return SIP.Utils.normalizeTarget(target, this.configuration.hostportParams);
  };

  //===============================
  //  Private (For internal use)
  //===============================

  UA.prototype.saveCredentials = function (credentials) {
    this.cache.credentials[credentials.realm] = this.cache.credentials[credentials.realm] || {};
    this.cache.credentials[credentials.realm][credentials.uri] = credentials;

    return this;
  };

  UA.prototype.getCredentials = function (request) {
    var realm, credentials;

    realm = request.ruri.host;

    if (this.cache.credentials[realm] && this.cache.credentials[realm][request.ruri]) {
      credentials = this.cache.credentials[realm][request.ruri];
      credentials.method = request.method;
    }

    return credentials;
  };

  UA.prototype.getLogger = function (category, label) {
    return this.log.getLogger(category, label);
  };

  //==============================
  // Event Handlers
  //==============================

  /**
   * Transport Close event
   * @private
   * @event
   * @param {SIP.Transport} transport.
   */
  UA.prototype.onTransportClosed = function (transport) {
    // Run _onTransportError_ callback on every client transaction using _transport_
    var type,
        idx,
        length,
        client_transactions = ['nict', 'ict', 'nist', 'ist'];

    transport.server.status = SIP.Transport.C.STATUS_DISCONNECTED;
    this.logger.log('connection state set to ' + SIP.Transport.C.STATUS_DISCONNECTED);

    length = client_transactions.length;
    for (type = 0; type < length; type++) {
      for (idx in this.transactions[client_transactions[type]]) {
        this.transactions[client_transactions[type]][idx].onTransportError();
      }
    }

    // Close sessions if GRUU is not being used
    if (!this.contact.pub_gruu) {
      this.closeSessionsOnTransportError();
    }
  };

  /**
   * Unrecoverable transport event.
   * Connection reattempt logic has been done and didn't success.
   * @private
   * @event
   * @param {SIP.Transport} transport.
   */
  UA.prototype.onTransportError = function (transport) {
    var server;

    this.logger.log('transport ' + transport.server.ws_uri + ' failed | connection state set to ' + SIP.Transport.C.STATUS_ERROR);

    // Close sessions.
    //Mark this transport as 'down'
    transport.server.status = SIP.Transport.C.STATUS_ERROR;

    this.emit('disconnected', {
      transport: transport
    });

    // try the next transport if the UA isn't closed
    if (this.status === C.STATUS_USER_CLOSED) {
      return;
    }

    server = this.getNextWsServer();

    if (server) {
      new SIP.Transport(this, server);
    } else {
      this.closeSessionsOnTransportError();
      if (!this.error || this.error !== C.NETWORK_ERROR) {
        this.status = C.STATUS_NOT_READY;
        this.error = C.NETWORK_ERROR;
      }
      // Transport Recovery process
      this.recoverTransport();
    }
  };

  /**
   * Transport connection event.
   * @private
   * @event
   * @param {SIP.Transport} transport.
   */
  UA.prototype.onTransportConnected = function (transport) {
    this.transport = transport;

    // Reset transport recovery counter
    this.transportRecoverAttempts = 0;

    transport.server.status = SIP.Transport.C.STATUS_READY;
    this.logger.log('connection state set to ' + SIP.Transport.C.STATUS_READY);

    if (this.status === C.STATUS_USER_CLOSED) {
      return;
    }

    this.status = C.STATUS_READY;
    this.error = null;

    if (this.configuration.register) {
      this.configuration.authenticationFactory.initialize().then(function () {
        this.registerContext.onTransportConnected();
      }.bind(this));
    }

    this.emit('connected', {
      transport: transport
    });
  };

  /**
   * Transport connecting event
   * @private
   * @param {SIP.Transport} transport.
   * #param {Integer} attempts.
   */
  UA.prototype.onTransportConnecting = function (transport, attempts) {
    this.emit('connecting', {
      transport: transport,
      attempts: attempts
    });
  };

  /**
   * new Transaction
   * @private
   * @param {SIP.Transaction} transaction.
   */
  UA.prototype.newTransaction = function (transaction) {
    this.transactions[transaction.type][transaction.id] = transaction;
    this.emit('newTransaction', { transaction: transaction });
  };

  /**
   * destroy Transaction
   * @private
   * @param {SIP.Transaction} transaction.
   */
  UA.prototype.destroyTransaction = function (transaction) {
    delete this.transactions[transaction.type][transaction.id];
    this.emit('transactionDestroyed', {
      transaction: transaction
    });
  };

  //=========================
  // receiveRequest
  //=========================

  /**
   * Request reception
   * @private
   * @param {SIP.IncomingRequest} request.
   */
  UA.prototype.receiveRequest = function (request) {
    var dialog,
        session,
        message,
        earlySubscription,
        method = request.method,
        replaces,
        replacedDialog,
        self = this;

    function ruriMatches(uri) {
      return uri && uri.user === request.ruri.user;
    }

    // Check that request URI points to us
    if (!(ruriMatches(this.configuration.uri) || ruriMatches(this.contact.uri) || ruriMatches(this.contact.pub_gruu) || ruriMatches(this.contact.temp_gruu))) {
      this.logger.warn('Request-URI does not point to us');
      if (request.method !== SIP.C.ACK) {
        request.reply_sl(404);
      }
      return;
    }

    // Check request URI scheme
    if (request.ruri.scheme === SIP.C.SIPS) {
      request.reply_sl(416);
      return;
    }

    // Check transaction
    if (SIP.Transactions.checkTransaction(this, request)) {
      return;
    }

    /* RFC3261 12.2.2
     * Requests that do not change in any way the state of a dialog may be
     * received within a dialog (for example, an OPTIONS request).
     * They are processed as if they had been received outside the dialog.
     */
    if (method === SIP.C.OPTIONS) {
      new SIP.Transactions.NonInviteServerTransaction(request, this);
      request.reply(200, null, ['Allow: ' + SIP.UA.C.ALLOWED_METHODS.toString(), 'Accept: ' + C.ACCEPTED_BODY_TYPES]);
    } else if (method === SIP.C.MESSAGE) {
      message = new SIP.ServerContext(this, request);
      message.body = request.body;
      message.content_type = request.getHeader('Content-Type') || 'text/plain';

      request.reply(200, null);
      this.emit('message', message);
    } else if (method !== SIP.C.INVITE && method !== SIP.C.ACK) {
      // Let those methods pass through to normal processing for now.
      new SIP.ServerContext(this, request);
    }

    // Initial Request
    if (!request.to_tag) {
      switch (method) {
        case SIP.C.INVITE:
          replaces = this.configuration.replaces !== SIP.C.supported.UNSUPPORTED && request.parseHeader('replaces');

          if (replaces) {
            replacedDialog = this.dialogs[replaces.call_id + replaces.replaces_to_tag + replaces.replaces_from_tag];

            if (!replacedDialog) {
              //Replaced header without a matching dialog, reject
              request.reply_sl(481, null);
              return;
            } else if (replacedDialog.owner.status === SIP.Session.C.STATUS_TERMINATED) {
              request.reply_sl(603, null);
              return;
            } else if (replacedDialog.state === SIP.Dialog.C.STATUS_CONFIRMED && replaces.early_only) {
              request.reply_sl(486, null);
              return;
            }
          }

          session = new SIP.InviteServerContext(this, request);
          session.replacee = replacedDialog && replacedDialog.owner;
          self.emit('invite', session);
          break;
        case SIP.C.BYE:
          // Out of dialog BYE received
          request.reply(481);
          break;
        case SIP.C.CANCEL:
          session = this.findSession(request);
          if (session) {
            session.receiveRequest(request);
          } else {
            this.logger.warn('received CANCEL request for a non existent session');
          }
          break;
        case SIP.C.ACK:
          /* Absorb it.
           * ACK request without a corresponding Invite Transaction
           * and without To tag.
           */
          break;
        case SIP.C.NOTIFY:
          if (this.configuration.allowLegacyNotifications && this.listeners('notify').length > 0) {
            request.reply(200, null);
            self.emit('notify', { request: request });
          } else {
            request.reply(481, 'Subscription does not exist');
          }
          break;
        case SIP.C.REFER:
          this.logger.log('Received an out of dialog refer');
          if (this.configuration.allowOutOfDialogRefers) {
            this.logger.log('Allow out of dialog refers is enabled on the UA');
            var referContext = new SIP.ReferServerContext(this, request);
            var hasReferListener = this.listeners('outOfDialogReferRequested').length;
            if (hasReferListener) {
              this.emit('outOfDialogReferRequested', referContext);
            } else {
              this.logger.log('No outOfDialogReferRequest listeners, automatically accepting and following the out of dialog refer');
              referContext.accept({ followRefer: true });
            }
            break;
          }
          request.reply(405);
          break;
        default:
          request.reply(405);
          break;
      }
    }
    // In-dialog request
    else {
        dialog = this.findDialog(request);

        if (dialog) {
          if (method === SIP.C.INVITE) {
            new SIP.Transactions.InviteServerTransaction(request, this);
          }
          dialog.receiveRequest(request);
        } else if (method === SIP.C.NOTIFY) {
          session = this.findSession(request);
          earlySubscription = this.findEarlySubscription(request);
          if (session) {
            session.receiveRequest(request);
          } else if (earlySubscription) {
            earlySubscription.receiveRequest(request);
          } else {
            this.logger.warn('received NOTIFY request for a non existent session or subscription');
            request.reply(481, 'Subscription does not exist');
          }
        }
        /* RFC3261 12.2.2
         * Request with to tag, but no matching dialog found.
         * Exception: ACK for an Invite request for which a dialog has not
         * been created.
         */
        else {
            if (method !== SIP.C.ACK) {
              request.reply(481);
            }
          }
      }
  };

  //=================
  // Utils
  //=================

  /**
   * Get the session to which the request belongs to, if any.
   * @private
   * @param {SIP.IncomingRequest} request.
   * @returns {SIP.OutgoingSession|SIP.IncomingSession|null}
   */
  UA.prototype.findSession = function (request) {
    return this.sessions[request.call_id + request.from_tag] || this.sessions[request.call_id + request.to_tag] || null;
  };

  /**
   * Get the dialog to which the request belongs to, if any.
   * @private
   * @param {SIP.IncomingRequest}
   * @returns {SIP.Dialog|null}
   */
  UA.prototype.findDialog = function (request) {
    return this.dialogs[request.call_id + request.from_tag + request.to_tag] || this.dialogs[request.call_id + request.to_tag + request.from_tag] || null;
  };

  /**
   * Get the subscription which has not been confirmed to which the request belongs to, if any
   * @private
   * @param {SIP.IncomingRequest}
   * @returns {SIP.Subscription|null}
   */
  UA.prototype.findEarlySubscription = function (request) {
    return this.earlySubscriptions[request.call_id + request.to_tag + request.getHeader('event')] || null;
  };

  /**
   * Retrieve the next server to which connect.
   * @private
   * @returns {Object} ws_server
   */
  UA.prototype.getNextWsServer = function () {
    // Order servers by weight
    var idx,
        length,
        ws_server,
        candidates = [];

    length = this.configuration.wsServers.length;
    for (idx = 0; idx < length; idx++) {
      ws_server = this.configuration.wsServers[idx];

      if (ws_server.status === SIP.Transport.C.STATUS_ERROR) {
        continue;
      } else if (candidates.length === 0) {
        candidates.push(ws_server);
      } else if (ws_server.weight > candidates[0].weight) {
        candidates = [ws_server];
      } else if (ws_server.weight === candidates[0].weight) {
        candidates.push(ws_server);
      }
    }

    idx = Math.floor(Math.random() * candidates.length);

    return candidates[idx];
  };

  /**
   * Close all sessions on transport error.
   * @private
   */
  UA.prototype.closeSessionsOnTransportError = function () {
    var idx;

    // Run _transportError_ for every Session
    for (idx in this.sessions) {
      this.sessions[idx].onTransportError();
    }
    // Call registerContext _onTransportClosed_
    this.registerContext.onTransportClosed();
  };

  UA.prototype.recoverTransport = function (ua) {
    var idx, length, k, nextRetry, count, server;

    ua = ua || this;
    count = ua.transportRecoverAttempts;

    length = ua.configuration.wsServers.length;
    for (idx = 0; idx < length; idx++) {
      ua.configuration.wsServers[idx].status = 0;
    }

    server = ua.getNextWsServer();

    k = Math.floor(Math.random() * Math.pow(2, count) + 1);
    nextRetry = k * ua.configuration.connectionRecoveryMinInterval;

    if (nextRetry > ua.configuration.connectionRecoveryMaxInterval) {
      this.logger.log('time for next connection attempt exceeds connectionRecoveryMaxInterval, resetting counter');
      nextRetry = ua.configuration.connectionRecoveryMinInterval;
      count = 0;
    }

    this.logger.log('next connection attempt in ' + nextRetry + ' seconds');

    this.transportRecoveryTimer = SIP.Timers.setTimeout(function () {
      ua.transportRecoverAttempts = count + 1;
      new SIP.Transport(ua, server);
    }, nextRetry * 1000);
  };

  function checkAuthenticationFactory(authenticationFactory) {
    if (!(authenticationFactory instanceof Function)) {
      return;
    }
    if (!authenticationFactory.initialize) {
      authenticationFactory.initialize = function initialize() {
        return SIP.Utils.Promise.resolve();
      };
    }
    return authenticationFactory;
  }

  /**
   * Configuration load.
   * @private
   * returns {Boolean}
   */
  UA.prototype.loadConfig = function (configuration) {
    // Settings and default values
    var parameter,
        value,
        checked_value,
        hostportParams,
        registrarServer,
        settings = {
      /* Host address
      * Value to be set in Via sent_by and host part of Contact FQDN
      */
      viaHost: SIP.Utils.createRandomToken(12) + '.invalid',

      uri: new SIP.URI('sip', 'anonymous.' + SIP.Utils.createRandomToken(6), 'anonymous.invalid', null, null),
      wsServers: [{
        scheme: 'WSS',
        sip_uri: '<sip:edge.sip.onsip.com;transport=ws;lr>',
        status: 0,
        weight: 0,
        ws_uri: 'wss://edge.sip.onsip.com'
      }],

      //Custom Configuration Settings
      custom: {},

      //Display name
      displayName: '',

      // Password
      password: null,

      // Registration parameters
      registerExpires: 600,
      register: true,
      registrarServer: null,

      // Transport related parameters
      wsServerMaxReconnection: 3,
      wsServerReconnectionTimeout: 4,

      connectionRecoveryMinInterval: 2,
      connectionRecoveryMaxInterval: 30,

      keepAliveInterval: 0,

      extraSupported: [],

      usePreloadedRoute: false,

      //string to be inserted into User-Agent request header
      userAgentString: SIP.C.USER_AGENT,

      // Session parameters
      noAnswerTimeout: 60,

      // Logging parameters
      traceSip: false,

      // Hacks
      hackViaTcp: false,
      hackIpInContact: false,
      hackWssInTransport: false,
      hackAllowUnregisteredOptionTags: false,

      // Session Description Handler Options
      sessionDescriptionHandlerFactoryOptions: {
        constraints: {},
        peerConnectionOptions: {}
      },

      contactName: SIP.Utils.createRandomToken(8), // user name in user part
      contactTransport: 'ws',
      forceRport: false,

      //autostarting
      autostart: true,
      autostop: true,

      //Reliable Provisional Responses
      rel100: SIP.C.supported.UNSUPPORTED,

      // Replaces header (RFC 3891)
      // http://tools.ietf.org/html/rfc3891
      replaces: SIP.C.supported.UNSUPPORTED,

      sessionDescriptionHandlerFactory: __webpack_require__(27)(SIP).defaultFactory,

      authenticationFactory: checkAuthenticationFactory(function authenticationFactory(ua) {
        return new SIP.DigestAuthentication(ua);
      }),

      allowLegacyNotifications: false,

      allowOutOfDialogRefers: false
    };

    // Pre-Configuration
    function aliasUnderscored(parameter, logger) {
      var underscored = parameter.replace(/([a-z][A-Z])/g, function (m) {
        return m[0] + '_' + m[1].toLowerCase();
      });

      if (parameter === underscored) {
        return;
      }

      var hasParameter = configuration.hasOwnProperty(parameter);
      if (configuration.hasOwnProperty(underscored)) {
        logger.warn(underscored + ' is deprecated, please use ' + parameter);
        if (hasParameter) {
          logger.warn(parameter + ' overriding ' + underscored);
        }
      }

      configuration[parameter] = hasParameter ? configuration[parameter] : configuration[underscored];
    }

    var configCheck = this.getConfigurationCheck();

    // Check Mandatory parameters
    for (parameter in configCheck.mandatory) {
      aliasUnderscored(parameter, this.logger);
      if (!configuration.hasOwnProperty(parameter)) {
        throw new SIP.Exceptions.ConfigurationError(parameter);
      } else {
        value = configuration[parameter];
        checked_value = configCheck.mandatory[parameter](value);
        if (checked_value !== undefined) {
          settings[parameter] = checked_value;
        } else {
          throw new SIP.Exceptions.ConfigurationError(parameter, value);
        }
      }
    }

    // Check Optional parameters
    for (parameter in configCheck.optional) {
      aliasUnderscored(parameter, this.logger);
      if (configuration.hasOwnProperty(parameter)) {
        value = configuration[parameter];

        // If the parameter value is an empty array, but shouldn't be, apply its default value.
        if (value instanceof Array && value.length === 0) {
          continue;
        }

        // If the parameter value is null, empty string, or undefined then apply its default value.
        if (value === null || value === "" || value === undefined) {
          continue;
        }
        // If it's a number with NaN value then also apply its default value.
        // NOTE: JS does not allow "value === NaN", the following does the work:
        else if (typeof value === 'number' && isNaN(value)) {
            continue;
          }

        checked_value = configCheck.optional[parameter](value);
        if (checked_value !== undefined) {
          settings[parameter] = checked_value;
        } else {
          throw new SIP.Exceptions.ConfigurationError(parameter, value);
        }
      }
    }

    // Sanity Checks

    // Connection recovery intervals
    if (settings.connectionRecoveryMaxInterval < settings.connectionRecoveryMinInterval) {
      throw new SIP.Exceptions.ConfigurationError('connectionRecoveryMaxInterval', settings.connectionRecoveryMaxInterval);
    }

    // Post Configuration Process

    // Allow passing 0 number as displayName.
    if (settings.displayName === 0) {
      settings.displayName = '0';
    }

    // Instance-id for GRUU
    if (!settings.instanceId) {
      settings.instanceId = SIP.Utils.newUUID();
    }

    // sipjsId instance parameter. Static random tag of length 5
    settings.sipjsId = SIP.Utils.createRandomToken(5);

    // String containing settings.uri without scheme and user.
    hostportParams = settings.uri.clone();
    hostportParams.user = null;
    settings.hostportParams = hostportParams.toRaw().replace(/^sip:/i, '');

    /* Check whether authorizationUser is explicitly defined.
     * Take 'settings.uri.user' value if not.
     */
    if (!settings.authorizationUser) {
      settings.authorizationUser = settings.uri.user;
    }

    /* If no 'registrarServer' is set use the 'uri' value without user portion. */
    if (!settings.registrarServer) {
      registrarServer = settings.uri.clone();
      registrarServer.user = null;
      settings.registrarServer = registrarServer;
    }

    // User noAnswerTimeout
    settings.noAnswerTimeout = settings.noAnswerTimeout * 1000;

    // Via Host
    if (settings.hackIpInContact) {
      if (typeof settings.hackIpInContact === 'boolean') {
        settings.viaHost = SIP.Utils.getRandomTestNetIP();
      } else if (typeof settings.hackIpInContact === 'string') {
        settings.viaHost = settings.hackIpInContact;
      }
    }

    // Contact transport parameter
    if (settings.hackWssInTransport) {
      settings.contactTransport = 'wss';
    }

    this.contact = {
      pub_gruu: null,
      temp_gruu: null,
      uri: new SIP.URI('sip', settings.contactName, settings.viaHost, null, { transport: settings.contactTransport }),
      toString: function toString(options) {
        options = options || {};

        var anonymous = options.anonymous || null,
            outbound = options.outbound || null,
            contact = '<';

        if (anonymous) {
          contact += (this.temp_gruu || 'sip:anonymous@anonymous.invalid;transport=' + settings.contactTransport).toString();
        } else {
          contact += (this.pub_gruu || this.uri).toString();
        }

        if (outbound) {
          contact += ';ob';
        }

        contact += '>';

        return contact;
      }
    };

    var skeleton = {};
    // Fill the value of the configuration_skeleton
    for (parameter in settings) {
      skeleton[parameter] = {
        value: settings[parameter],
        writable: parameter === 'register' || parameter === 'custom',
        configurable: false
      };
    }

    Object.defineProperties(this.configuration, skeleton);

    this.logger.log('configuration parameters after validation:');
    for (parameter in settings) {
      switch (parameter) {
        case 'uri':
        case 'registrarServer':
        case 'sessionDescriptionHandlerFactory':
          this.logger.log('· ' + parameter + ': ' + settings[parameter]);
          break;
        case 'password':
          this.logger.log('· ' + parameter + ': ' + 'NOT SHOWN');
          break;
        default:
          this.logger.log('· ' + parameter + ': ' + JSON.stringify(settings[parameter]));
      }
    }

    return;
  };

  /**
   * Configuration checker.
   * @private
   * @return {Boolean}
   */
  UA.prototype.getConfigurationCheck = function () {
    return {
      mandatory: {},

      optional: {

        uri: function uri(_uri) {
          var parsed;

          if (!/^sip:/i.test(_uri)) {
            _uri = SIP.C.SIP + ':' + _uri;
          }
          parsed = SIP.URI.parse(_uri);

          if (!parsed) {
            return;
          } else if (!parsed.user) {
            return;
          } else {
            return parsed;
          }
        },

        //Note: this function used to call 'this.logger.error' but calling 'this' with anything here is invalid
        wsServers: function wsServers(_wsServers) {
          var idx, length, url;

          /* Allow defining wsServers parameter as:
           *  String: "host"
           *  Array of Strings: ["host1", "host2"]
           *  Array of Objects: [{ws_uri:"host1", weight:1}, {ws_uri:"host2", weight:0}]
           *  Array of Objects and Strings: [{ws_uri:"host1"}, "host2"]
           */
          if (typeof _wsServers === 'string') {
            _wsServers = [{ ws_uri: _wsServers }];
          } else if (_wsServers instanceof Array) {
            length = _wsServers.length;
            for (idx = 0; idx < length; idx++) {
              if (typeof _wsServers[idx] === 'string') {
                _wsServers[idx] = { ws_uri: _wsServers[idx] };
              }
            }
          } else {
            return;
          }

          if (_wsServers.length === 0) {
            return false;
          }

          length = _wsServers.length;
          for (idx = 0; idx < length; idx++) {
            if (!_wsServers[idx].ws_uri) {
              return;
            }
            if (_wsServers[idx].weight && !Number(_wsServers[idx].weight)) {
              return;
            }

            url = SIP.Grammar.parse(_wsServers[idx].ws_uri, 'absoluteURI');

            if (url === -1) {
              return;
            } else if (['wss', 'ws', 'udp'].indexOf(url.scheme) < 0) {
              return;
            } else {
              _wsServers[idx].sip_uri = '<sip:' + url.host + (url.port ? ':' + url.port : '') + ';transport=' + url.scheme.replace(/^wss$/i, 'ws') + ';lr>';

              if (!_wsServers[idx].weight) {
                _wsServers[idx].weight = 0;
              }

              _wsServers[idx].status = 0;
              _wsServers[idx].scheme = url.scheme.toUpperCase();
            }
          }
          return _wsServers;
        },

        authorizationUser: function authorizationUser(_authorizationUser) {
          if (SIP.Grammar.parse('"' + _authorizationUser + '"', 'quoted_string') === -1) {
            return;
          } else {
            return _authorizationUser;
          }
        },

        connectionRecoveryMaxInterval: function connectionRecoveryMaxInterval(_connectionRecoveryMaxInterval) {
          var value;
          if (SIP.Utils.isDecimal(_connectionRecoveryMaxInterval)) {
            value = Number(_connectionRecoveryMaxInterval);
            if (value > 0) {
              return value;
            }
          }
        },

        connectionRecoveryMinInterval: function connectionRecoveryMinInterval(_connectionRecoveryMinInterval) {
          var value;
          if (SIP.Utils.isDecimal(_connectionRecoveryMinInterval)) {
            value = Number(_connectionRecoveryMinInterval);
            if (value > 0) {
              return value;
            }
          }
        },

        displayName: function displayName(_displayName) {
          if (SIP.Grammar.parse('"' + _displayName + '"', 'displayName') === -1) {
            return;
          } else {
            return _displayName;
          }
        },

        hackViaTcp: function hackViaTcp(_hackViaTcp) {
          if (typeof _hackViaTcp === 'boolean') {
            return _hackViaTcp;
          }
        },

        hackIpInContact: function hackIpInContact(_hackIpInContact) {
          if (typeof _hackIpInContact === 'boolean') {
            return _hackIpInContact;
          } else if (typeof _hackIpInContact === 'string' && SIP.Grammar.parse(_hackIpInContact, 'host') !== -1) {
            return _hackIpInContact;
          }
        },

        hackWssInTransport: function hackWssInTransport(_hackWssInTransport) {
          if (typeof _hackWssInTransport === 'boolean') {
            return _hackWssInTransport;
          }
        },

        hackAllowUnregisteredOptionTags: function hackAllowUnregisteredOptionTags(_hackAllowUnregisteredOptionTags) {
          if (typeof _hackAllowUnregisteredOptionTags === 'boolean') {
            return _hackAllowUnregisteredOptionTags;
          }
        },

        contactTransport: function contactTransport(_contactTransport) {
          if (typeof _contactTransport === 'string') {
            return _contactTransport;
          }
        },

        forceRport: function forceRport(_forceRport) {
          if (typeof _forceRport === 'boolean') {
            return _forceRport;
          }
        },

        instanceId: function instanceId(_instanceId) {
          if (typeof _instanceId !== 'string') {
            return;
          }

          if (/^uuid:/i.test(_instanceId)) {
            _instanceId = _instanceId.substr(5);
          }

          if (SIP.Grammar.parse(_instanceId, 'uuid') === -1) {
            return;
          } else {
            return _instanceId;
          }
        },

        keepAliveInterval: function keepAliveInterval(_keepAliveInterval) {
          var value;
          if (SIP.Utils.isDecimal(_keepAliveInterval)) {
            value = Number(_keepAliveInterval);
            if (value > 0) {
              return value;
            }
          }
        },

        extraSupported: function extraSupported(optionTags) {
          var idx, length;

          if (!(optionTags instanceof Array)) {
            return;
          }

          length = optionTags.length;
          for (idx = 0; idx < length; idx++) {
            if (typeof optionTags[idx] !== 'string') {
              return;
            }
          }

          return optionTags;
        },

        noAnswerTimeout: function noAnswerTimeout(_noAnswerTimeout) {
          var value;
          if (SIP.Utils.isDecimal(_noAnswerTimeout)) {
            value = Number(_noAnswerTimeout);
            if (value > 0) {
              return value;
            }
          }
        },

        password: function password(_password) {
          return String(_password);
        },

        rel100: function rel100(_rel) {
          if (_rel === SIP.C.supported.REQUIRED) {
            return SIP.C.supported.REQUIRED;
          } else if (_rel === SIP.C.supported.SUPPORTED) {
            return SIP.C.supported.SUPPORTED;
          } else {
            return SIP.C.supported.UNSUPPORTED;
          }
        },

        replaces: function replaces(_replaces) {
          if (_replaces === SIP.C.supported.REQUIRED) {
            return SIP.C.supported.REQUIRED;
          } else if (_replaces === SIP.C.supported.SUPPORTED) {
            return SIP.C.supported.SUPPORTED;
          } else {
            return SIP.C.supported.UNSUPPORTED;
          }
        },

        register: function register(_register) {
          if (typeof _register === 'boolean') {
            return _register;
          }
        },

        registerExpires: function registerExpires(_registerExpires) {
          var value;
          if (SIP.Utils.isDecimal(_registerExpires)) {
            value = Number(_registerExpires);
            if (value > 0) {
              return value;
            }
          }
        },

        registrarServer: function registrarServer(_registrarServer) {
          var parsed;

          if (typeof _registrarServer !== 'string') {
            return;
          }

          if (!/^sip:/i.test(_registrarServer)) {
            _registrarServer = SIP.C.SIP + ':' + _registrarServer;
          }
          parsed = SIP.URI.parse(_registrarServer);

          if (!parsed) {
            return;
          } else if (parsed.user) {
            return;
          } else {
            return parsed;
          }
        },

        traceSip: function traceSip(_traceSip) {
          if (typeof _traceSip === 'boolean') {
            return _traceSip;
          }
        },

        userAgentString: function userAgentString(_userAgentString) {
          if (typeof _userAgentString === 'string') {
            return _userAgentString;
          }
        },

        usePreloadedRoute: function usePreloadedRoute(_usePreloadedRoute) {
          if (typeof _usePreloadedRoute === 'boolean') {
            return _usePreloadedRoute;
          }
        },

        wsServerMaxReconnection: function wsServerMaxReconnection(_wsServerMaxReconnection) {
          var value;
          if (SIP.Utils.isDecimal(_wsServerMaxReconnection)) {
            value = Number(_wsServerMaxReconnection);
            if (value > 0) {
              return value;
            }
          }
        },

        wsServerReconnectionTimeout: function wsServerReconnectionTimeout(_wsServerReconnectionTimeout) {
          var value;
          if (SIP.Utils.isDecimal(_wsServerReconnectionTimeout)) {
            value = Number(_wsServerReconnectionTimeout);
            if (value > 0) {
              return value;
            }
          }
        },

        autostart: function autostart(_autostart) {
          if (typeof _autostart === 'boolean') {
            return _autostart;
          }
        },

        autostop: function autostop(_autostop) {
          if (typeof _autostop === 'boolean') {
            return _autostop;
          }
        },

        sessionDescriptionHandlerFactory: function sessionDescriptionHandlerFactory(_sessionDescriptionHandlerFactory) {
          if (_sessionDescriptionHandlerFactory instanceof Function) {
            return _sessionDescriptionHandlerFactory;
          }
        },

        sessionDescriptionHandlerFactoryOptions: function sessionDescriptionHandlerFactoryOptions(options) {
          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            return options;
          }
        },

        authenticationFactory: checkAuthenticationFactory,

        allowLegacyNotifications: function allowLegacyNotifications(_allowLegacyNotifications) {
          if (typeof _allowLegacyNotifications === 'boolean') {
            return _allowLegacyNotifications;
          }
        },

        custom: function custom(_custom) {
          if ((typeof _custom === 'undefined' ? 'undefined' : _typeof(_custom)) === 'object') {
            return _custom;
          }
        },

        contactName: function contactName(_contactName) {
          if (typeof _contactName === 'string') {
            return _contactName;
          }
        }
      }
    };
  };

  UA.C = C;
  SIP.UA = UA;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * @fileoverview SessionDescriptionHandler
 */

/* SessionDescriptionHandler
 * @class PeerConnection helper Class.
 * @param {SIP.Session} session
 * @param {Object} [options]
 */

module.exports = function (SIP) {

  // Constructor
  var SessionDescriptionHandler = function SessionDescriptionHandler(session, options) {
    // TODO: Validate the options
    this.options = options || {};

    this.logger = session.ua.getLogger('sip.invitecontext.sessionDescriptionHandler', session.id);
    this.session = session;

    this.CONTENT_TYPE = 'application/sdp';

    this.modifiers = this.options.modifiers || [];
    if (!Array.isArray(this.modifiers)) {
      this.modifiers = [this.modifiers];
    }

    var environment = global.window || global;
    this.WebRTC = {
      MediaStream: environment.MediaStream,
      getUserMedia: environment.navigator.mediaDevices.getUserMedia.bind(environment.navigator.mediaDevices),
      RTCPeerConnection: environment.RTCPeerConnection,
      RTCSessionDescription: environment.RTCSessionDescription
    };

    this.iceGatheringDeferred = null;
    this.iceGatheringTimeout = false;
    this.iceGatheringTimer = null;

    this.initPeerConnection(this.options.peerConnectionOptions);

    this.constraints = this.checkAndDefaultConstraints(this.options.constraints);

    this.session.emit('SessionDescriptionHandler-created', this);
  };

  /**
   * @param {SIP.Session} session
   * @param {Object} [options]
   */

  SessionDescriptionHandler.defaultFactory = function defaultFactory(session, options) {
    return new SessionDescriptionHandler(session, options);
  };

  SessionDescriptionHandler.prototype = Object.create(SIP.SessionDescriptionHandler.prototype, {
    // Functions the sesssion can use

    /**
     * Destructor
     */
    close: { writable: true, value: function value() {
        this.logger.log('closing PeerConnection');
        // have to check signalingState since this.close() gets called multiple times
        if (this.peerConnection && this.peerConnection.signalingState !== 'closed') {
          if (this.peerConnection.getSenders) {
            this.peerConnection.getSenders().forEach(function (sender) {
              if (sender.track) {
                sender.track.stop();
              }
            });
          } else {
            this.logger.warn('Using getLocalStreams which is deprecated');
            this.peerConnection.getLocalStreams().forEach(function (stream) {
              stream.getTracks().forEach(function (track) {
                track.stop();
              });
            });
          }
          if (this.peerConnection.getReceivers) {
            this.peerConnection.getReceivers().forEach(function (receiver) {
              if (receiver.track) {
                receiver.track.stop();
              }
            });
          } else {
            this.logger.warn('Using getRemoteStreams which is deprecated');
            this.peerConnection.getRemoteStreams().forEach(function (stream) {
              stream.getTracks().forEach(function (track) {
                track.stop();
              });
            });
          }
          this.resetIceGatheringComplete();
          this.peerConnection.close();
        }
      } },

    /**
     * Gets the local description from the underlying media implementation
     * @param {Object} [options] Options object to be used by getDescription
     * @param {MediaStreamConstraints} [options.constraints] MediaStreamConstraints https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints
     * @param {Object} [options.peerConnectionOptions] If this is set it will recreate the peer connection with the new options
     * @param {Array} [modifiers] Array with one time use description modifiers
     * @returns {Promise} Promise that resolves with the local description to be used for the session
     */
    getDescription: { writable: true, value: function value(options, modifiers) {
        var self = this;
        var shouldAcquireMedia = true;

        if (this.session.disableRenegotiation) {
          this.logger.warn("The flag \"disableRenegotiation\" is set to true for this session description handler. We will not try to renegotiate.");
          return SIP.Utils.Promise.reject(new SIP.Exceptions.RenegotiationError("disableRenegotiation flag set to true for this session description handler"));
        }

        options = options || {};
        if (options.peerConnectionOptions) {
          this.initPeerConnection(options.peerConnectionOptions);
        }

        // Merge passed constraints with saved constraints and save
        var newConstraints = Object.assign({}, this.constraints, options.constraints);
        newConstraints = this.checkAndDefaultConstraints(newConstraints);
        if (JSON.stringify(newConstraints) !== JSON.stringify(this.constraints)) {
          this.constraints = newConstraints;
        } else {
          shouldAcquireMedia = false;
        }

        modifiers = modifiers || [];
        if (!Array.isArray(modifiers)) {
          modifiers = [modifiers];
        }
        modifiers = modifiers.concat(this.modifiers);

        // Check to see if the peerConnection already has a local description
        if (!shouldAcquireMedia && this.peerConnection.localDescription && this.peerConnection.localDescription.sdp && this.peerConnection.localDescription.sdp !== '') {
          return this.createOfferOrAnswer(options.RTCOfferOptions, modifiers).then(function (sdp) {
            return {
              body: sdp,
              contentType: self.CONTENT_TYPE
            };
          });
        }

        // GUM and set myself up
        self.logger.log('acquiring local media');
        // TODO: Constraints should be named MediaStreamConstraints
        return this.acquire(self.constraints).then(function acquireSucceeded(streams) {
          self.logger.log('acquired local media streams');
          return streams;
        }, function acquireFailed(err) {
          self.logger.error('unable to acquire streams');
          self.logger.error(err);
          throw err;
        }).then(function addStreams(streams) {
          try {
            streams = [].concat(streams);
            streams.forEach(function (stream) {
              if (self.peerConnection.addTrack) {
                stream.getTracks().forEach(function (track) {
                  self.peerConnection.addTrack(track, stream);
                });
              } else {
                // Chrome 59 does not support addTrack
                self.peerConnection.addStream(stream);
              }
            }, this);
          } catch (e) {
            self.logger.error('error adding stream');
            self.logger.error(e);
            return SIP.Utils.Promise.reject(e);
          }
          return SIP.Utils.Promise.resolve();
        }).then(function streamAdditionSucceeded() {
          return self.createOfferOrAnswer(options.RTCOfferOptions, modifiers);
        }).then(function (sdp) {
          return {
            body: sdp,
            contentType: self.CONTENT_TYPE
          };
        }).catch(function (e) {
          this.session.disableRenegotiation = true;
          throw e;
        });
      } },

    /**
     * Check if the Session Description Handler can handle the Content-Type described by a SIP Message
     * @param {String} contentType The content type that is in the SIP Message
     * @returns {boolean}
     */
    hasDescription: { writable: true, value: function hasDescription(contentType) {
        return contentType === this.CONTENT_TYPE;
      } },

    /**
     * The modifier that should be used when the session would like to place the call on hold
     * @param {String} [sdp] The description that will be modified
     * @returns {Promise} Promise that resolves with modified SDP
     */
    holdModifier: { writable: true, value: function holdModifier(description) {
        if (!/a=(sendrecv|sendonly|recvonly|inactive)/.test(description.sdp)) {
          description.sdp = description.sdp.replace(/(m=[^\r]*\r\n)/g, '$1a=sendonly\r\n');
        } else {
          description.sdp = description.sdp.replace(/a=sendrecv\r\n/g, 'a=sendonly\r\n');
          description.sdp = description.sdp.replace(/a=recvonly\r\n/g, 'a=inactive\r\n');
        }
        return SIP.Utils.Promise.resolve(description);
      } },

    /**
     * Set the remote description to the underlying media implementation
     * @param {String} sessionDescription The description provided by a SIP message to be set on the media implementation
     * @param {Object} [options] Options object to be used by getDescription
     * @param {MediaStreamConstraints} [options.constraints] MediaStreamConstraints https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints
     * @param {Object} [options.peerConnectionOptions] If this is set it will recreate the peer connection with the new options
     * @param {Array} [modifiers] Array with one time use description modifiers
     * @returns {Promise} Promise that resolves once the description is set
     */
    setDescription: { writable: true, value: function setDescription(sessionDescription, options, modifiers) {
        var self = this;

        // https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (!this.session.disableRenegotiation && isFirefox && this.peerConnection && this.isVideoHold(sessionDescription)) {
          this.session.disableRenegotiation = true;
        }

        if (this.session.disableRenegotiation) {
          this.logger.warn("The flag \"disableRenegotiation\" is set to true for this session description handler. We will not try to renegotiate.");
          return SIP.Utils.Promise.reject(new SIP.Exceptions.RenegotiationError("disableRenegotiation flag set to true for this session description handler"));
        }

        options = options || {};
        if (options.peerConnectionOptions) {
          this.initPeerConnection(options.peerConnectionOptions);
        }

        // Merge passed constraints with saved constraints and save
        this.constraints = Object.assign({}, this.constraints, options.constraints);
        this.constraints = this.checkAndDefaultConstraints(this.constraints);

        modifiers = modifiers || [];
        if (!Array.isArray(modifiers)) {
          modifiers = [modifiers];
        }
        modifiers = modifiers.concat(this.modifiers);

        var description = {
          type: this.hasOffer('local') ? 'answer' : 'offer',
          sdp: sessionDescription
        };

        return SIP.Utils.reducePromises(modifiers, description).catch(function modifierError(e) {
          self.logger.error("The modifiers did not resolve successfully");
          self.logger.error(e);
          throw e;
        }).then(function (modifiedDescription) {
          self.emit('setDescription', modifiedDescription);
          return self.peerConnection.setRemoteDescription(new self.WebRTC.RTCSessionDescription(modifiedDescription));
        }).catch(function setRemoteDescriptionError(e) {
          self.session.disableRenegotiation = true;
          self.logger.error(e);
          self.emit('peerConnection-setRemoteDescriptionFailed', e);
          throw e;
        }).then(function setRemoteDescriptionSuccess() {
          if (self.peerConnection.getReceivers) {
            self.emit('setRemoteDescription', self.peerConnection.getReceivers());
          } else {
            self.emit('setRemoteDescription', self.peerConnection.getRemoteStreams());
          }
          self.emit('confirmed', self);
        });
      } },

    // Internal functions
    createOfferOrAnswer: { writable: true, value: function createOfferOrAnswer(RTCOfferOptions, modifiers) {
        var self = this;
        var methodName;
        var pc = this.peerConnection;

        RTCOfferOptions = RTCOfferOptions || {};

        methodName = self.hasOffer('remote') ? 'createAnswer' : 'createOffer';

        return pc[methodName](RTCOfferOptions).catch(function methodError(e) {
          self.emit('peerConnection-' + methodName + 'Failed', e);
          throw e;
        }).then(function (sdp) {
          return SIP.Utils.reducePromises(modifiers, sdp);
        }).then(function (sdp) {
          self.logger.log(sdp);
          return pc.setLocalDescription(sdp);
        }).catch(function localDescError(e) {
          self.emit('peerConnection-SetLocalDescriptionFailed', e);
          throw e;
        }).then(function onSetLocalDescriptionSuccess() {
          return self.waitForIceGatheringComplete();
        }).then(function readySuccess() {
          var localDescription = self.peerConnection.localDescription;
          return SIP.Utils.reducePromises(modifiers, localDescription);
        }).then(function (localDescription) {
          self.emit('getDescription', localDescription);
          return localDescription.sdp;
        }).catch(function createOfferOrAnswerError(e) {
          self.logger.error(e);
          // TODO: Not sure if this is correct
          throw new SIP.Exceptions.GetDescriptionError(e);
        });
      } },

    addDefaultIceCheckingTimeout: { writable: true, value: function addDefaultIceCheckingTimeout(peerConnectionOptions) {
        if (peerConnectionOptions.iceCheckingTimeout === undefined) {
          peerConnectionOptions.iceCheckingTimeout = 1500;
        }
        return peerConnectionOptions;
      } },

    addDefaultIceServers: { writable: true, value: function addDefaultIceServers(rtcConfiguration) {
        if (!rtcConfiguration.iceServers) {
          rtcConfiguration.iceServers = [{ urls: 'stun:stun.l.google.com:19302' }];
        }
        return rtcConfiguration;
      } },

    checkAndDefaultConstraints: { writable: true, value: function checkAndDefaultConstraints(constraints) {
        var defaultConstraints = { audio: true, video: true };
        constraints = constraints || defaultConstraints;
        // Empty object check
        if (Object.keys(constraints).length === 0 && constraints.constructor === Object) {
          return defaultConstraints;
        }
        return constraints;
      } },

    initPeerConnection: { writable: true, value: function initPeerConnection(options) {
        var self = this;
        options = options || {};
        options = this.addDefaultIceCheckingTimeout(options);
        options.rtcConfiguration = options.rtcConfiguration || {};
        options.rtcConfiguration = this.addDefaultIceServers(options.rtcConfiguration);

        this.logger.log('initPeerConnection');

        if (this.peerConnection) {
          this.logger.log('Already have a peer connection for this session. Tearing down.');
          this.resetIceGatheringComplete();
          this.peerConnection.close();
        }

        this.peerConnection = new this.WebRTC.RTCPeerConnection(options.rtcConfiguration);

        this.logger.log('New peer connection created');
        this.session.emit('peerConnection-created', this.peerConnection);

        this.peerConnection.ontrack = function (e) {
          self.logger.log('track added');
          self.emit('addTrack', e);
        };

        this.peerConnection.onaddstream = function (e) {
          self.logger.warn('Using deprecated stream API');
          self.logger.log('stream added');
          self.emit('addStream', e);
        };

        // TODO: There is no remove track listener
        this.peerConnection.onremovestream = function (e) {
          self.logger.log('stream removed: ' + e.stream.id);
        };

        this.peerConnection.onicecandidate = function (e) {
          self.emit('iceCandidate', e);
          if (e.candidate) {
            self.logger.log('ICE candidate received: ' + (e.candidate.candidate === null ? null : e.candidate.candidate.trim()));
          }
        };

        this.peerConnection.onicegatheringstatechange = function () {
          self.logger.log('RTCIceGatheringState changed: ' + this.iceGatheringState);
          switch (this.iceGatheringState) {
            case 'gathering':
              self.emit('iceGathering', this);
              if (!self.iceGatheringTimer && options.iceCheckingTimeout) {
                self.iceGatheringTimeout = false;
                self.iceGatheringTimer = SIP.Timers.setTimeout(function () {
                  self.logger.log('RTCIceChecking Timeout Triggered after ' + options.iceCheckingTimeout + ' milliseconds');
                  self.iceGatheringTimeout = true;
                  self.triggerIceGatheringComplete();
                }, options.iceCheckingTimeout);
              }
              break;
            case 'complete':
              self.triggerIceGatheringComplete();
              break;
          }
        };

        this.peerConnection.oniceconnectionstatechange = function () {
          //need e for commented out case
          var stateEvent;

          switch (this.iceConnectionState) {
            case 'new':
              stateEvent = 'iceConnection';
              break;
            case 'checking':
              stateEvent = 'iceConnectionChecking';
              break;
            case 'connected':
              stateEvent = 'iceConnectionConnected';
              break;
            case 'completed':
              stateEvent = 'iceConnectionCompleted';
              break;
            case 'failed':
              stateEvent = 'iceConnectionFailed';
              break;
            case 'disconnected':
              stateEvent = 'iceConnectionDisconnected';
              break;
            case 'closed':
              stateEvent = 'iceConnectionClosed';
              break;
            default:
              self.logger.warn('Unknown iceConnection state:', this.iceConnectionState);
              return;
          }
          self.emit(stateEvent, this);
        };
      } },

    acquire: { writable: true, value: function acquire(constraints) {
        // Default audio & video to true
        constraints = this.checkAndDefaultConstraints(constraints);

        return new SIP.Utils.Promise(function (resolve, reject) {
          /*
           * Make the call asynchronous, so that ICCs have a chance
           * to define callbacks to `userMediaRequest`
           */
          this.emit('userMediaRequest', constraints);

          var emitThenCall = function (eventName, callback) {
            var callbackArgs = Array.prototype.slice.call(arguments, 2);
            // Emit with all of the arguments from the real callback.
            var newArgs = [eventName].concat(callbackArgs);
            this.emit.apply(this, newArgs);
            return callback.apply(null, callbackArgs);
          }.bind(this);

          if (constraints.audio || constraints.video) {
            this.WebRTC.getUserMedia(constraints).then(emitThenCall.bind(this, 'userMedia', function (streams) {
              resolve(streams);
            }), emitThenCall.bind(this, 'userMediaFailed', function (e) {
              reject(e);
              throw e;
            }));
          } else {
            // Local streams were explicitly excluded.
            resolve([]);
          }
        }.bind(this));
      } },

    isVideoHold: { writable: true, value: function isVideoHold(description) {
        if (description.search(/^(m=video.*?)[\s\S]*^(a=sendonly?)/gm) !== -1) {
          return true;
        }
        return false;
      } },

    hasOffer: { writable: true, value: function hasOffer(where) {
        var offerState = 'have-' + where + '-offer';
        return this.peerConnection.signalingState === offerState;
      } },

    // ICE gathering state handling

    isIceGatheringComplete: { writable: true, value: function isIceGatheringComplete() {
        return this.peerConnection.iceGatheringState === 'complete' || this.iceGatheringTimeout;
      } },

    resetIceGatheringComplete: { writable: true, value: function rejectIceGatheringComplete() {
        this.iceGatheringTimeout = false;

        if (this.iceGatheringTimer) {
          SIP.Timers.clearTimeout(this.iceGatheringTimer);
          this.iceGatheringTimer = null;
        }

        if (this.iceGatheringDeferred) {
          this.iceGatheringDeferred.reject();
          this.iceGatheringDeferred = null;
        }
      } },

    triggerIceGatheringComplete: { writable: true, value: function triggerIceGatheringComplete() {
        if (this.isIceGatheringComplete()) {
          this.emit('iceGatheringComplete', this);

          if (this.iceGatheringTimer) {
            SIP.Timers.clearTimeout(this.iceGatheringTimer);
            this.iceGatheringTimer = null;
          }

          if (this.iceGatheringDeferred) {
            this.iceGatheringDeferred.resolve();
            this.iceGatheringDeferred = null;
          }
        }
      } },

    waitForIceGatheringComplete: { writable: true, value: function waitForIceGatheringComplete() {
        if (this.isIceGatheringComplete()) {
          return SIP.Utils.Promise.resolve();
        } else if (!this.isIceGatheringDeferred) {
          this.iceGatheringDeferred = SIP.Utils.defer();
        }
        return this.iceGatheringDeferred.promise;
      } }
  });

  return SessionDescriptionHandler;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview Incoming SIP Message Sanity Check
 */

/**
 * SIP message sanity check.
 * @augments SIP
 * @function
 * @param {SIP.IncomingMessage} message
 * @param {SIP.UA} ua
 * @param {SIP.Transport} transport
 * @returns {Boolean}
 */

module.exports = function (SIP) {
  var sanityCheck,
      requests = [],
      responses = [],
      all = [];

  // Reply
  function reply(status_code, message, transport) {
    var to,
        response = SIP.Utils.buildStatusLine(status_code),
        vias = message.getHeaders('via'),
        length = vias.length,
        idx = 0;

    for (idx; idx < length; idx++) {
      response += "Via: " + vias[idx] + "\r\n";
    }

    to = message.getHeader('To');

    if (!message.to_tag) {
      to += ';tag=' + SIP.Utils.newTag();
    }

    response += "To: " + to + "\r\n";
    response += "From: " + message.getHeader('From') + "\r\n";
    response += "Call-ID: " + message.call_id + "\r\n";
    response += "CSeq: " + message.cseq + " " + message.method + "\r\n";
    response += "\r\n";

    transport.send(response);
  }

  /*
   * Sanity Check for incoming Messages
   *
   * Requests:
   *  - _rfc3261_8_2_2_1_ Receive a Request with a non supported URI scheme
   *  - _rfc3261_16_3_4_ Receive a Request already sent by us
   *   Does not look at via sent-by but at sipjsId, which is inserted as
   *   a prefix in all initial requests generated by the ua
   *  - _rfc3261_18_3_request_ Body Content-Length
   *  - _rfc3261_8_2_2_2_ Merged Requests
   *
   * Responses:
   *  - _rfc3261_8_1_3_3_ Multiple Via headers
   *  - _rfc3261_18_1_2_ sent-by mismatch
   *  - _rfc3261_18_3_response_ Body Content-Length
   *
   * All:
   *  - Minimum headers in a SIP message
   */

  // Sanity Check functions for requests
  function rfc3261_8_2_2_1(message, ua, transport) {
    if (!message.ruri || message.ruri.scheme !== 'sip') {
      reply(416, message, transport);
      return false;
    }
  }

  function rfc3261_16_3_4(message, ua, transport) {
    if (!message.to_tag) {
      if (message.call_id.substr(0, 5) === ua.configuration.sipjsId) {
        reply(482, message, transport);
        return false;
      }
    }
  }

  function rfc3261_18_3_request(message, ua, transport) {
    var len = SIP.Utils.str_utf8_length(message.body),
        contentLength = message.getHeader('content-length');

    if (len < contentLength) {
      reply(400, message, transport);
      return false;
    }
  }

  function rfc3261_8_2_2_2(message, ua, transport) {
    var tr,
        idx,
        fromTag = message.from_tag,
        call_id = message.call_id,
        cseq = message.cseq;

    if (!message.to_tag) {
      if (message.method === SIP.C.INVITE) {
        tr = ua.transactions.ist[message.via_branch];
        if (tr) {
          return;
        } else {
          for (idx in ua.transactions.ist) {
            tr = ua.transactions.ist[idx];
            if (tr.request.from_tag === fromTag && tr.request.call_id === call_id && tr.request.cseq === cseq) {
              reply(482, message, transport);
              return false;
            }
          }
        }
      } else {
        tr = ua.transactions.nist[message.via_branch];
        if (tr) {
          return;
        } else {
          for (idx in ua.transactions.nist) {
            tr = ua.transactions.nist[idx];
            if (tr.request.from_tag === fromTag && tr.request.call_id === call_id && tr.request.cseq === cseq) {
              reply(482, message, transport);
              return false;
            }
          }
        }
      }
    }
  }

  // Sanity Check functions for responses
  function rfc3261_8_1_3_3(message, ua) {
    if (message.getHeaders('via').length > 1) {
      ua.getLogger('sip.sanitycheck').warn('More than one Via header field present in the response. Dropping the response');
      return false;
    }
  }

  function rfc3261_18_1_2(message, ua) {
    var viaHost = ua.configuration.viaHost;
    if (message.via.host !== viaHost || message.via.port !== undefined) {
      ua.getLogger('sip.sanitycheck').warn('Via sent-by in the response does not match UA Via host value. Dropping the response');
      return false;
    }
  }

  function rfc3261_18_3_response(message, ua) {
    var len = SIP.Utils.str_utf8_length(message.body),
        contentLength = message.getHeader('content-length');

    if (len < contentLength) {
      ua.getLogger('sip.sanitycheck').warn('Message body length is lower than the value in Content-Length header field. Dropping the response');
      return false;
    }
  }

  // Sanity Check functions for requests and responses
  function minimumHeaders(message, ua) {
    var mandatoryHeaders = ['from', 'to', 'call_id', 'cseq', 'via'],
        idx = mandatoryHeaders.length;

    while (idx--) {
      if (!message.hasHeader(mandatoryHeaders[idx])) {
        ua.getLogger('sip.sanitycheck').warn('Missing mandatory header field : ' + mandatoryHeaders[idx] + '. Dropping the response');
        return false;
      }
    }
  }

  requests.push(rfc3261_8_2_2_1);
  requests.push(rfc3261_16_3_4);
  requests.push(rfc3261_18_3_request);
  requests.push(rfc3261_8_2_2_2);

  responses.push(rfc3261_8_1_3_3);
  responses.push(rfc3261_18_1_2);
  responses.push(rfc3261_18_3_response);

  all.push(minimumHeaders);

  sanityCheck = function sanityCheck(message, ua, transport) {
    var len, pass;

    len = all.length;
    while (len--) {
      pass = all[len](message, ua, transport);
      if (pass === false) {
        return false;
      }
    }

    if (message instanceof SIP.IncomingRequest) {
      len = requests.length;
      while (len--) {
        pass = requests[len](message, ua, transport);
        if (pass === false) {
          return false;
        }
      }
    } else if (message instanceof SIP.IncomingResponse) {
      len = responses.length;
      while (len--) {
        pass = responses[len](message, ua, transport);
        if (pass === false) {
          return false;
        }
      }
    }

    //Everything is OK
    return true;
  };

  SIP.sanityCheck = sanityCheck;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileoverview SIP Digest Authentication
 */

/**
 * SIP Digest Authentication.
 * @augments SIP.
 * @function Digest Authentication
 * @param {SIP.UA} ua
 */

module.exports = function (Utils) {
  var DigestAuthentication;

  DigestAuthentication = function DigestAuthentication(ua) {
    this.logger = ua.getLogger('sipjs.digestauthentication');
    this.username = ua.configuration.authorizationUser;
    this.password = ua.configuration.password;
    this.cnonce = null;
    this.nc = 0;
    this.ncHex = '00000000';
    this.response = null;
  };

  /**
  * Performs Digest authentication given a SIP request and the challenge
  * received in a response to that request.
  * Returns true if credentials were successfully generated, false otherwise.
  *
  * @param {SIP.OutgoingRequest} request
  * @param {Object} challenge
  */
  DigestAuthentication.prototype.authenticate = function (request, challenge) {
    // Inspect and validate the challenge.

    this.algorithm = challenge.algorithm;
    this.realm = challenge.realm;
    this.nonce = challenge.nonce;
    this.opaque = challenge.opaque;
    this.stale = challenge.stale;

    if (this.algorithm) {
      if (this.algorithm !== 'MD5') {
        this.logger.warn('challenge with Digest algorithm different than "MD5", authentication aborted');
        return false;
      }
    } else {
      this.algorithm = 'MD5';
    }

    if (!this.realm) {
      this.logger.warn('challenge without Digest realm, authentication aborted');
      return false;
    }

    if (!this.nonce) {
      this.logger.warn('challenge without Digest nonce, authentication aborted');
      return false;
    }

    // 'qop' can contain a list of values (Array). Let's choose just one.
    if (challenge.qop) {
      if (challenge.qop.indexOf('auth') > -1) {
        this.qop = 'auth';
      } else if (challenge.qop.indexOf('auth-int') > -1) {
        this.qop = 'auth-int';
      } else {
        // Otherwise 'qop' is present but does not contain 'auth' or 'auth-int', so abort here.
        this.logger.warn('challenge without Digest qop different than "auth" or "auth-int", authentication aborted');
        return false;
      }
    } else {
      this.qop = null;
    }

    // Fill other attributes.

    this.method = request.method;
    this.uri = request.ruri;
    this.cnonce = Utils.createRandomToken(12);
    this.nc += 1;
    this.updateNcHex();

    // nc-value = 8LHEX. Max value = 'FFFFFFFF'.
    if (this.nc === 4294967296) {
      this.nc = 1;
      this.ncHex = '00000001';
    }

    // Calculate the Digest "response" value.
    this.calculateResponse();

    return true;
  };

  /**
  * Generate Digest 'response' value.
  * @private
  */
  DigestAuthentication.prototype.calculateResponse = function () {
    var ha1, ha2;

    // HA1 = MD5(A1) = MD5(username:realm:password)
    ha1 = Utils.calculateMD5(this.username + ":" + this.realm + ":" + this.password);

    if (this.qop === 'auth') {
      // HA2 = MD5(A2) = MD5(method:digestURI)
      ha2 = Utils.calculateMD5(this.method + ":" + this.uri);
      // response = MD5(HA1:nonce:nonceCount:credentialsNonce:qop:HA2)
      this.response = Utils.calculateMD5(ha1 + ":" + this.nonce + ":" + this.ncHex + ":" + this.cnonce + ":auth:" + ha2);
    } else if (this.qop === 'auth-int') {
      // HA2 = MD5(A2) = MD5(method:digestURI:MD5(entityBody))
      ha2 = Utils.calculateMD5(this.method + ":" + this.uri + ":" + Utils.calculateMD5(this.body ? this.body : ""));
      // response = MD5(HA1:nonce:nonceCount:credentialsNonce:qop:HA2)
      this.response = Utils.calculateMD5(ha1 + ":" + this.nonce + ":" + this.ncHex + ":" + this.cnonce + ":auth-int:" + ha2);
    } else if (this.qop === null) {
      // HA2 = MD5(A2) = MD5(method:digestURI)
      ha2 = Utils.calculateMD5(this.method + ":" + this.uri);
      // response = MD5(HA1:nonce:HA2)
      this.response = Utils.calculateMD5(ha1 + ":" + this.nonce + ":" + ha2);
    }
  };

  /**
  * Return the Proxy-Authorization or WWW-Authorization header value.
  */
  DigestAuthentication.prototype.toString = function () {
    var auth_params = [];

    if (!this.response) {
      throw new Error('response field does not exist, cannot generate Authorization header');
    }

    auth_params.push('algorithm=' + this.algorithm);
    auth_params.push('username="' + this.username + '"');
    auth_params.push('realm="' + this.realm + '"');
    auth_params.push('nonce="' + this.nonce + '"');
    auth_params.push('uri="' + this.uri + '"');
    auth_params.push('response="' + this.response + '"');
    if (this.opaque) {
      auth_params.push('opaque="' + this.opaque + '"');
    }
    if (this.qop) {
      auth_params.push('qop=' + this.qop);
      auth_params.push('cnonce="' + this.cnonce + '"');
      auth_params.push('nc=' + this.ncHex);
    }

    return 'Digest ' + auth_params.join(', ');
  };

  /**
  * Generate the 'nc' value as required by Digest in this.ncHex by reading this.nc.
  * @private
  */
  DigestAuthentication.prototype.updateNcHex = function () {
    var hex = Number(this.nc).toString(16);
    this.ncHex = '00000000'.substr(0, 8 - hex.length) + hex;
  };

  return DigestAuthentication;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Grammar = __webpack_require__(31);

module.exports = function (SIP) {

  return {
    parse: function parseCustom(input, startRule) {
      var options = { startRule: startRule, SIP: SIP };
      try {
        Grammar.parse(input, options);
      } catch (e) {
        options.data = -1;
      }
      return options.data;
    }
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleIndices = { Contact: 118, Name_Addr_Header: 155, Record_Route: 175, Request_Response: 81, SIP_URI: 45, Subscription_State: 185, Supported: 190, Require: 181, Via: 193, absoluteURI: 84, Call_ID: 117, Content_Disposition: 129, Content_Length: 134, Content_Type: 135, CSeq: 145, displayName: 121, Event: 148, From: 150, host: 52, Max_Forwards: 153, Min_SE: 212, Proxy_Authenticate: 156, quoted_string: 40, Refer_To: 177, Replaces: 178, Session_Expires: 209, stun_URI: 216, To: 191, turn_URI: 222, uuid: 225, WWW_Authenticate: 208, challenge: 157, sipfrag: 229, Referred_By: 230 },
      peg$startRuleIndex   = 118,

      peg$consts = [
        "\r\n",
        peg$literalExpectation("\r\n", false),
        /^[0-9]/,
        peg$classExpectation([["0", "9"]], false, false),
        /^[a-zA-Z]/,
        peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
        /^[0-9a-fA-F]/,
        peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false),
        /^[\0-\xFF]/,
        peg$classExpectation([["\0", "\xFF"]], false, false),
        /^["]/,
        peg$classExpectation(["\""], false, false),
        " ",
        peg$literalExpectation(" ", false),
        "\t",
        peg$literalExpectation("\t", false),
        /^[a-zA-Z0-9]/,
        peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"]], false, false),
        ";",
        peg$literalExpectation(";", false),
        "/",
        peg$literalExpectation("/", false),
        "?",
        peg$literalExpectation("?", false),
        ":",
        peg$literalExpectation(":", false),
        "@",
        peg$literalExpectation("@", false),
        "&",
        peg$literalExpectation("&", false),
        "=",
        peg$literalExpectation("=", false),
        "+",
        peg$literalExpectation("+", false),
        "$",
        peg$literalExpectation("$", false),
        ",",
        peg$literalExpectation(",", false),
        "-",
        peg$literalExpectation("-", false),
        "_",
        peg$literalExpectation("_", false),
        ".",
        peg$literalExpectation(".", false),
        "!",
        peg$literalExpectation("!", false),
        "~",
        peg$literalExpectation("~", false),
        "*",
        peg$literalExpectation("*", false),
        "'",
        peg$literalExpectation("'", false),
        "(",
        peg$literalExpectation("(", false),
        ")",
        peg$literalExpectation(")", false),
        "%",
        peg$literalExpectation("%", false),
        function() {return " "; },
        function() {return ':'; },
        /^[!-~]/,
        peg$classExpectation([["!", "~"]], false, false),
        /^[\x80-\uFFFF]/,
        peg$classExpectation([["\x80", "\uFFFF"]], false, false),
        /^[\x80-\xBF]/,
        peg$classExpectation([["\x80", "\xBF"]], false, false),
        /^[a-f]/,
        peg$classExpectation([["a", "f"]], false, false),
        "`",
        peg$literalExpectation("`", false),
        "<",
        peg$literalExpectation("<", false),
        ">",
        peg$literalExpectation(">", false),
        "\\",
        peg$literalExpectation("\\", false),
        "[",
        peg$literalExpectation("[", false),
        "]",
        peg$literalExpectation("]", false),
        "{",
        peg$literalExpectation("{", false),
        "}",
        peg$literalExpectation("}", false),
        function() {return "*"; },
        function() {return "/"; },
        function() {return "="; },
        function() {return "("; },
        function() {return ")"; },
        function() {return ">"; },
        function() {return "<"; },
        function() {return ","; },
        function() {return ";"; },
        function() {return ":"; },
        function() {return "\""; },
        /^[!-']/,
        peg$classExpectation([["!", "'"]], false, false),
        /^[*-[]/,
        peg$classExpectation([["*", "["]], false, false),
        /^[\]-~]/,
        peg$classExpectation([["]", "~"]], false, false),
        function(contents) {
                                return contents; },
        /^[#-[]/,
        peg$classExpectation([["#", "["]], false, false),
        /^[\0-\t]/,
        peg$classExpectation([["\0", "\t"]], false, false),
        /^[\x0B-\f]/,
        peg$classExpectation([["\x0B", "\f"]], false, false),
        /^[\x0E-\x7F]/,
        peg$classExpectation([["\x0E", "\x7F"]], false, false),
        function() {
                                options.data.uri = new options.SIP.URI(options.data.scheme, options.data.user, options.data.host, options.data.port);
                                delete options.data.scheme;
                                delete options.data.user;
                                delete options.data.host;
                                delete options.data.host_type;
                                delete options.data.port;
                              },
        function() {
                                options.data.uri = new options.SIP.URI(options.data.scheme, options.data.user, options.data.host, options.data.port, options.data.uri_params, options.data.uri_headers);
                                delete options.data.scheme;
                                delete options.data.user;
                                delete options.data.host;
                                delete options.data.host_type;
                                delete options.data.port;
                                delete options.data.uri_params;

                                if (options.startRule === 'SIP_URI') { options.data = options.data.uri;}
                              },
        "sips",
        peg$literalExpectation("sips", true),
        "sip",
        peg$literalExpectation("sip", true),
        function(uri_scheme) {
                            options.data.scheme = uri_scheme; },
        function() {
                            options.data.user = decodeURIComponent(text().slice(0, -1));},
        function() {
                            options.data.password = text(); },
        function() {
                            options.data.host = text();
                            return options.data.host; },
        function() {
                          options.data.host_type = 'domain';
                          return text(); },
        /^[a-zA-Z0-9_\-]/,
        peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", "-"], false, false),
        /^[a-zA-Z0-9\-]/,
        peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "-"], false, false),
        function() {
                            options.data.host_type = 'IPv6';
                            return text(); },
        "::",
        peg$literalExpectation("::", false),
        function() {
                          options.data.host_type = 'IPv6';
                          return text(); },
        function() {
                            options.data.host_type = 'IPv4';
                            return text(); },
        "25",
        peg$literalExpectation("25", false),
        /^[0-5]/,
        peg$classExpectation([["0", "5"]], false, false),
        "2",
        peg$literalExpectation("2", false),
        /^[0-4]/,
        peg$classExpectation([["0", "4"]], false, false),
        "1",
        peg$literalExpectation("1", false),
        /^[1-9]/,
        peg$classExpectation([["1", "9"]], false, false),
        function(port) {
                            port = parseInt(port.join(''));
                            options.data.port = port;
                            return port; },
        "transport=",
        peg$literalExpectation("transport=", true),
        "udp",
        peg$literalExpectation("udp", true),
        "tcp",
        peg$literalExpectation("tcp", true),
        "sctp",
        peg$literalExpectation("sctp", true),
        "tls",
        peg$literalExpectation("tls", true),
        function(transport) {
                              if(!options.data.uri_params) options.data.uri_params={};
                              options.data.uri_params['transport'] = transport.toLowerCase(); },
        "user=",
        peg$literalExpectation("user=", true),
        "phone",
        peg$literalExpectation("phone", true),
        "ip",
        peg$literalExpectation("ip", true),
        function(user) {
                              if(!options.data.uri_params) options.data.uri_params={};
                              options.data.uri_params['user'] = user.toLowerCase(); },
        "method=",
        peg$literalExpectation("method=", true),
        function(method) {
                              if(!options.data.uri_params) options.data.uri_params={};
                              options.data.uri_params['method'] = method; },
        "ttl=",
        peg$literalExpectation("ttl=", true),
        function(ttl) {
                              if(!options.data.params) options.data.params={};
                              options.data.params['ttl'] = ttl; },
        "maddr=",
        peg$literalExpectation("maddr=", true),
        function(maddr) {
                              if(!options.data.uri_params) options.data.uri_params={};
                              options.data.uri_params['maddr'] = maddr; },
        "lr",
        peg$literalExpectation("lr", true),
        function() {
                              if(!options.data.uri_params) options.data.uri_params={};
                              options.data.uri_params['lr'] = undefined; },
        function(param, value) {
                              if(!options.data.uri_params) options.data.uri_params = {};
                              if (value === null){
                                value = undefined;
                              }
                              else {
                                value = value[1];
                              }
                              options.data.uri_params[param.toLowerCase()] = value && value.toLowerCase();},
        function(hname, hvalue) {
                              hname = hname.join('').toLowerCase();
                              hvalue = hvalue.join('');
                              if(!options.data.uri_headers) options.data.uri_headers = {};
                              if (!options.data.uri_headers[hname]) {
                                options.data.uri_headers[hname] = [hvalue];
                              } else {
                                options.data.uri_headers[hname].push(hvalue);
                              }},
        function() {
                              // lots of tests fail if this isn't guarded...
                              if (options.startRule === 'Refer_To') {
                                options.data.uri = new options.SIP.URI(options.data.scheme, options.data.user, options.data.host, options.data.port, options.data.uri_params, options.data.uri_headers);
                                delete options.data.scheme;
                                delete options.data.user;
                                delete options.data.host;
                                delete options.data.host_type;
                                delete options.data.port;
                                delete options.data.uri_params;
                              }
                            },
        "//",
        peg$literalExpectation("//", false),
        function() {
                            options.data.scheme= text(); },
        peg$literalExpectation("SIP", true),
        function() {
                            options.data.sip_version = text(); },
        "INVITE",
        peg$literalExpectation("INVITE", false),
        "ACK",
        peg$literalExpectation("ACK", false),
        "VXACH",
        peg$literalExpectation("VXACH", false),
        "OPTIONS",
        peg$literalExpectation("OPTIONS", false),
        "BYE",
        peg$literalExpectation("BYE", false),
        "CANCEL",
        peg$literalExpectation("CANCEL", false),
        "REGISTER",
        peg$literalExpectation("REGISTER", false),
        "SUBSCRIBE",
        peg$literalExpectation("SUBSCRIBE", false),
        "NOTIFY",
        peg$literalExpectation("NOTIFY", false),
        "REFER",
        peg$literalExpectation("REFER", false),
        function() {

                            options.data.method = text();
                            return options.data.method; },
        function(status_code) {
                          options.data.status_code = parseInt(status_code.join('')); },
        function() {
                          options.data.reason_phrase = text(); },
        function() {
                      options.data = text(); },
        function() {
                                var idx, length;
                                length = options.data.multi_header.length;
                                for (idx = 0; idx < length; idx++) {
                                  if (options.data.multi_header[idx].parsed === null) {
                                    options.data = null;
                                    break;
                                  }
                                }
                                if (options.data !== null) {
                                  options.data = options.data.multi_header;
                                } else {
                                  options.data = -1;
                                }},
        function() {
                                var header;
                                if(!options.data.multi_header) options.data.multi_header = [];
                                try {
                                  header = new options.SIP.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                                  delete options.data.uri;
                                  delete options.data.displayName;
                                  delete options.data.params;
                                } catch(e) {
                                  header = null;
                                }
                                options.data.multi_header.push( { 'position': peg$currPos,
                                                          'offset': location().start.offset,
                                                          'parsed': header
                                                        });},
        function(displayName) {
                                displayName = text().trim();
                                if (displayName[0] === '\"') {
                                  displayName = displayName.substring(1, displayName.length-1);
                                }
                                options.data.displayName = displayName; },
        "q",
        peg$literalExpectation("q", true),
        function(q) {
                                if(!options.data.params) options.data.params = {};
                                options.data.params['q'] = q; },
        "expires",
        peg$literalExpectation("expires", true),
        function(expires) {
                                if(!options.data.params) options.data.params = {};
                                options.data.params['expires'] = expires; },
        function(delta_seconds) {
                                return parseInt(delta_seconds.join('')); },
        "0",
        peg$literalExpectation("0", false),
        function() {
                                return parseFloat(text()); },
        function(param, value) {
                                if(!options.data.params) options.data.params = {};
                                if (value === null){
                                  value = undefined;
                                }
                                else {
                                  value = value[1];
                                }
                                options.data.params[param.toLowerCase()] = value;},
        "render",
        peg$literalExpectation("render", true),
        "session",
        peg$literalExpectation("session", true),
        "icon",
        peg$literalExpectation("icon", true),
        "alert",
        peg$literalExpectation("alert", true),
        function() {
                                    if (options.startRule === 'Content_Disposition') {
                                      options.data.type = text().toLowerCase();
                                    }
                                  },
        "handling",
        peg$literalExpectation("handling", true),
        "optional",
        peg$literalExpectation("optional", true),
        "required",
        peg$literalExpectation("required", true),
        function(length) {
                                options.data = parseInt(length.join('')); },
        function() {
                                options.data = text(); },
        "text",
        peg$literalExpectation("text", true),
        "image",
        peg$literalExpectation("image", true),
        "audio",
        peg$literalExpectation("audio", true),
        "video",
        peg$literalExpectation("video", true),
        "application",
        peg$literalExpectation("application", true),
        "message",
        peg$literalExpectation("message", true),
        "multipart",
        peg$literalExpectation("multipart", true),
        "x-",
        peg$literalExpectation("x-", true),
        function(cseq_value) {
                          options.data.value=parseInt(cseq_value.join('')); },
        function(expires) {options.data = expires; },
        function(event_type) {
                               options.data.event = event_type.toLowerCase(); },
        function() {
                        var tag = options.data.tag;
                          options.data = new options.SIP.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                          if (tag) {options.data.setParam('tag',tag)}
                        },
        "tag",
        peg$literalExpectation("tag", true),
        function(tag) {options.data.tag = tag; },
        function(forwards) {
                          options.data = parseInt(forwards.join('')); },
        function(min_expires) {options.data = min_expires; },
        function() {
                                options.data = new options.SIP.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                              },
        "digest",
        peg$literalExpectation("Digest", true),
        "realm",
        peg$literalExpectation("realm", true),
        function(realm) { options.data.realm = realm; },
        "domain",
        peg$literalExpectation("domain", true),
        "nonce",
        peg$literalExpectation("nonce", true),
        function(nonce) { options.data.nonce=nonce; },
        "opaque",
        peg$literalExpectation("opaque", true),
        function(opaque) { options.data.opaque=opaque; },
        "stale",
        peg$literalExpectation("stale", true),
        "true",
        peg$literalExpectation("true", true),
        function() { options.data.stale=true; },
        "false",
        peg$literalExpectation("false", true),
        function() { options.data.stale=false; },
        "algorithm",
        peg$literalExpectation("algorithm", true),
        "md5",
        peg$literalExpectation("MD5", true),
        "md5-sess",
        peg$literalExpectation("MD5-sess", true),
        function(algorithm) {
                              options.data.algorithm=algorithm.toUpperCase(); },
        "qop",
        peg$literalExpectation("qop", true),
        "auth-int",
        peg$literalExpectation("auth-int", true),
        "auth",
        peg$literalExpectation("auth", true),
        function(qop_value) {
                                options.data.qop || (options.data.qop=[]);
                                options.data.qop.push(qop_value.toLowerCase()); },
        function(rack_value) {
                          options.data.value=parseInt(rack_value.join('')); },
        function() {
                          var idx, length;
                          length = options.data.multi_header.length;
                          for (idx = 0; idx < length; idx++) {
                            if (options.data.multi_header[idx].parsed === null) {
                              options.data = null;
                              break;
                            }
                          }
                          if (options.data !== null) {
                            options.data = options.data.multi_header;
                          } else {
                            options.data = -1;
                          }},
        function() {
                          var header;
                          if(!options.data.multi_header) options.data.multi_header = [];
                          try {
                            header = new options.SIP.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                            delete options.data.uri;
                            delete options.data.displayName;
                            delete options.data.params;
                          } catch(e) {
                            header = null;
                          }
                          options.data.multi_header.push( { 'position': peg$currPos,
                                                    'offset': location().start.offset,
                                                    'parsed': header
                                                  });},
        function() {
                      options.data = new options.SIP.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                    },
        function() {
                              if (!(options.data.replaces_from_tag && options.data.replaces_to_tag)) {
                                options.data = -1;
                              }
                            },
        function() {
                              options.data = {
                                call_id: options.data
                              };
                            },
        "from-tag",
        peg$literalExpectation("from-tag", true),
        function(from_tag) {
                              options.data.replaces_from_tag = from_tag;
                            },
        "to-tag",
        peg$literalExpectation("to-tag", true),
        function(to_tag) {
                              options.data.replaces_to_tag = to_tag;
                            },
        "early-only",
        peg$literalExpectation("early-only", true),
        function() {
                              options.data.early_only = true;
                            },
        function(head, r) {return r;},
        function(head, tail) { return list(head, tail); },
        function(value) {
                        if (options.startRule === 'Require') {
                          options.data = value || [];
                        }
                      },
        function(rseq_value) {
                          options.data.value=parseInt(rseq_value.join('')); },
        "active",
        peg$literalExpectation("active", true),
        "pending",
        peg$literalExpectation("pending", true),
        "terminated",
        peg$literalExpectation("terminated", true),
        function() {
                                options.data.state = text(); },
        "reason",
        peg$literalExpectation("reason", true),
        function(reason) {
                                if (typeof reason !== 'undefined') options.data.reason = reason; },
        function(expires) {
                                if (typeof expires !== 'undefined') options.data.expires = expires; },
        "retry_after",
        peg$literalExpectation("retry_after", true),
        function(retry_after) {
                                if (typeof retry_after !== 'undefined') options.data.retry_after = retry_after; },
        "deactivated",
        peg$literalExpectation("deactivated", true),
        "probation",
        peg$literalExpectation("probation", true),
        "rejected",
        peg$literalExpectation("rejected", true),
        "timeout",
        peg$literalExpectation("timeout", true),
        "giveup",
        peg$literalExpectation("giveup", true),
        "noresource",
        peg$literalExpectation("noresource", true),
        "invariant",
        peg$literalExpectation("invariant", true),
        function(value) {
                        if (options.startRule === 'Supported') {
                          options.data = value || [];
                        }
                      },
        function() {
                      var tag = options.data.tag;
                        options.data = new options.SIP.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                        if (tag) {options.data.setParam('tag',tag)}
                      },
        "ttl",
        peg$literalExpectation("ttl", true),
        function(via_ttl_value) {
                              options.data.ttl = via_ttl_value; },
        "maddr",
        peg$literalExpectation("maddr", true),
        function(via_maddr) {
                              options.data.maddr = via_maddr; },
        "received",
        peg$literalExpectation("received", true),
        function(via_received) {
                              options.data.received = via_received; },
        "branch",
        peg$literalExpectation("branch", true),
        function(via_branch) {
                              options.data.branch = via_branch; },
        "rport",
        peg$literalExpectation("rport", true),
        function() {
                              if(typeof response_port !== 'undefined')
                                options.data.rport = response_port.join(''); },
        function(via_protocol) {
                              options.data.protocol = via_protocol; },
        peg$literalExpectation("UDP", true),
        peg$literalExpectation("TCP", true),
        peg$literalExpectation("TLS", true),
        peg$literalExpectation("SCTP", true),
        function(via_transport) {
                              options.data.transport = via_transport; },
        function() {
                              options.data.host = text(); },
        function(via_sent_by_port) {
                              options.data.port = parseInt(via_sent_by_port.join('')); },
        function(ttl) {
                              return parseInt(ttl.join('')); },
        function(deltaSeconds) {
                              if (options.startRule === 'Session_Expires') {
                                options.data.deltaSeconds = deltaSeconds;
                              }
                            },
        "refresher",
        peg$literalExpectation("refresher", false),
        "uas",
        peg$literalExpectation("uas", false),
        "uac",
        peg$literalExpectation("uac", false),
        function(endpoint) {
                              if (options.startRule === 'Session_Expires') {
                                options.data.refresher = endpoint;
                              }
                            },
        function(deltaSeconds) {
                              if (options.startRule === 'Min_SE') {
                                options.data = deltaSeconds;
                              }
                            },
        "stuns",
        peg$literalExpectation("stuns", true),
        "stun",
        peg$literalExpectation("stun", true),
        function(scheme) {
                              options.data.scheme = scheme; },
        function(host) {
                              options.data.host = host; },
        "?transport=",
        peg$literalExpectation("?transport=", false),
        "turns",
        peg$literalExpectation("turns", true),
        "turn",
        peg$literalExpectation("turn", true),
        function() {
                              options.data.transport = transport; },
        function() {
                          options.data = text(); },
        "Referred-By",
        peg$literalExpectation("Referred-By", false),
        "b",
        peg$literalExpectation("b", false),
        "cid",
        peg$literalExpectation("cid", false)
      ],

      peg$bytecode = [
        peg$decode("2 \"\"6 7!"),
        peg$decode("4\"\"\"5!7#"),
        peg$decode("4$\"\"5!7%"),
        peg$decode("4&\"\"5!7'"),
        peg$decode(";'.# &;("),
        peg$decode("4(\"\"5!7)"),
        peg$decode("4*\"\"5!7+"),
        peg$decode("2,\"\"6,7-"),
        peg$decode("2.\"\"6.7/"),
        peg$decode("40\"\"5!71"),
        peg$decode("22\"\"6273.\x89 &24\"\"6475.} &26\"\"6677.q &28\"\"6879.e &2:\"\"6:7;.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E"),
        peg$decode(";).# &;,"),
        peg$decode("2F\"\"6F7G.} &2H\"\"6H7I.q &2J\"\"6J7K.e &2L\"\"6L7M.Y &2N\"\"6N7O.M &2P\"\"6P7Q.A &2R\"\"6R7S.5 &2T\"\"6T7U.) &2V\"\"6V7W"),
        peg$decode("%%2X\"\"6X7Y/5#;#/,$;#/#$+#)(#'#(\"'#&'#/\"!&,)"),
        peg$decode("%%$;$0#*;$&/,#; /#$+\")(\"'#&'#.\" &\"/=#$;$/&#0#*;$&&&#/'$8\":Z\" )(\"'#&'#"),
        peg$decode(";..\" &\""),
        peg$decode("%$;'.# &;(0)*;'.# &;(&/?#28\"\"6879/0$;//'$8#:[# )(#'#(\"'#&'#"),
        peg$decode("%%$;2/&#0#*;2&&&#/g#$%$;.0#*;.&/,#;2/#$+\")(\"'#&'#0=*%$;.0#*;.&/,#;2/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/\"!&,)"),
        peg$decode("4\\\"\"5!7].# &;3"),
        peg$decode("4^\"\"5!7_"),
        peg$decode("4`\"\"5!7a"),
        peg$decode(";!.) &4b\"\"5!7c"),
        peg$decode("%$;).\x95 &2F\"\"6F7G.\x89 &2J\"\"6J7K.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O/\x9E#0\x9B*;).\x95 &2F\"\"6F7G.\x89 &2J\"\"6J7K.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O&&&#/\"!&,)"),
        peg$decode("%$;).\x89 &2F\"\"6F7G.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O/\x92#0\x8F*;).\x89 &2F\"\"6F7G.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O&&&#/\"!&,)"),
        peg$decode("2T\"\"6T7U.\xE3 &2V\"\"6V7W.\xD7 &2f\"\"6f7g.\xCB &2h\"\"6h7i.\xBF &2:\"\"6:7;.\xB3 &2D\"\"6D7E.\xA7 &22\"\"6273.\x9B &28\"\"6879.\x8F &2j\"\"6j7k.\x83 &;&.} &24\"\"6475.q &2l\"\"6l7m.e &2n\"\"6n7o.Y &26\"\"6677.M &2>\"\"6>7?.A &2p\"\"6p7q.5 &2r\"\"6r7s.) &;'.# &;("),
        peg$decode("%$;).\u012B &2F\"\"6F7G.\u011F &2J\"\"6J7K.\u0113 &2L\"\"6L7M.\u0107 &2X\"\"6X7Y.\xFB &2P\"\"6P7Q.\xEF &2H\"\"6H7I.\xE3 &2@\"\"6@7A.\xD7 &2d\"\"6d7e.\xCB &2R\"\"6R7S.\xBF &2N\"\"6N7O.\xB3 &2T\"\"6T7U.\xA7 &2V\"\"6V7W.\x9B &2f\"\"6f7g.\x8F &2h\"\"6h7i.\x83 &28\"\"6879.w &2j\"\"6j7k.k &;&.e &24\"\"6475.Y &2l\"\"6l7m.M &2n\"\"6n7o.A &26\"\"6677.5 &2p\"\"6p7q.) &2r\"\"6r7s/\u0134#0\u0131*;).\u012B &2F\"\"6F7G.\u011F &2J\"\"6J7K.\u0113 &2L\"\"6L7M.\u0107 &2X\"\"6X7Y.\xFB &2P\"\"6P7Q.\xEF &2H\"\"6H7I.\xE3 &2@\"\"6@7A.\xD7 &2d\"\"6d7e.\xCB &2R\"\"6R7S.\xBF &2N\"\"6N7O.\xB3 &2T\"\"6T7U.\xA7 &2V\"\"6V7W.\x9B &2f\"\"6f7g.\x8F &2h\"\"6h7i.\x83 &28\"\"6879.w &2j\"\"6j7k.k &;&.e &24\"\"6475.Y &2l\"\"6l7m.M &2n\"\"6n7o.A &26\"\"6677.5 &2p\"\"6p7q.) &2r\"\"6r7s&&&#/\"!&,)"),
        peg$decode("%;//?#2P\"\"6P7Q/0$;//'$8#:t# )(#'#(\"'#&'#"),
        peg$decode("%;//?#24\"\"6475/0$;//'$8#:u# )(#'#(\"'#&'#"),
        peg$decode("%;//?#2>\"\"6>7?/0$;//'$8#:v# )(#'#(\"'#&'#"),
        peg$decode("%;//?#2T\"\"6T7U/0$;//'$8#:w# )(#'#(\"'#&'#"),
        peg$decode("%;//?#2V\"\"6V7W/0$;//'$8#:x# )(#'#(\"'#&'#"),
        peg$decode("%2h\"\"6h7i/0#;//'$8\":y\" )(\"'#&'#"),
        peg$decode("%;//6#2f\"\"6f7g/'$8\":z\" )(\"'#&'#"),
        peg$decode("%;//?#2D\"\"6D7E/0$;//'$8#:{# )(#'#(\"'#&'#"),
        peg$decode("%;//?#22\"\"6273/0$;//'$8#:|# )(#'#(\"'#&'#"),
        peg$decode("%;//?#28\"\"6879/0$;//'$8#:}# )(#'#(\"'#&'#"),
        peg$decode("%;//0#;&/'$8\":~\" )(\"'#&'#"),
        peg$decode("%;&/0#;//'$8\":~\" )(\"'#&'#"),
        peg$decode("%;=/T#$;G.) &;K.# &;F0/*;G.) &;K.# &;F&/,$;>/#$+#)(#'#(\"'#&'#"),
        peg$decode("4\x7F\"\"5!7\x80.A &4\x81\"\"5!7\x82.5 &4\x83\"\"5!7\x84.) &;3.# &;."),
        peg$decode("%%;//Q#;&/H$$;J.# &;K0)*;J.# &;K&/,$;&/#$+$)($'#(#'#(\"'#&'#/\"!&,)"),
        peg$decode("%;//]#;&/T$%$;J.# &;K0)*;J.# &;K&/\"!&,)/1$;&/($8$:\x85$!!)($'#(#'#(\"'#&'#"),
        peg$decode(";..G &2L\"\"6L7M.; &4\x86\"\"5!7\x87./ &4\x83\"\"5!7\x84.# &;3"),
        peg$decode("%2j\"\"6j7k/J#4\x88\"\"5!7\x89.5 &4\x8A\"\"5!7\x8B.) &4\x8C\"\"5!7\x8D/#$+\")(\"'#&'#"),
        peg$decode("%;N/M#28\"\"6879/>$;O.\" &\"/0$;S/'$8$:\x8E$ )($'#(#'#(\"'#&'#"),
        peg$decode("%;N/d#28\"\"6879/U$;O.\" &\"/G$;S/>$;_/5$;l.\" &\"/'$8&:\x8F& )(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%3\x90\"\"5$7\x91.) &3\x92\"\"5#7\x93/' 8!:\x94!! )"),
        peg$decode("%;P/]#%28\"\"6879/,#;R/#$+\")(\"'#&'#.\" &\"/6$2:\"\"6:7;/'$8#:\x95# )(#'#(\"'#&'#"),
        peg$decode("$;+.) &;-.# &;Q/2#0/*;+.) &;-.# &;Q&&&#"),
        peg$decode("2<\"\"6<7=.q &2>\"\"6>7?.e &2@\"\"6@7A.Y &2B\"\"6B7C.M &2D\"\"6D7E.A &22\"\"6273.5 &26\"\"6677.) &24\"\"6475"),
        peg$decode("%$;+._ &;-.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E0e*;+._ &;-.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E&/& 8!:\x96! )"),
        peg$decode("%;T/J#%28\"\"6879/,#;^/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
        peg$decode("%;U.) &;\\.# &;X/& 8!:\x97! )"),
        peg$decode("%$%;V/2#2J\"\"6J7K/#$+\")(\"'#&'#0<*%;V/2#2J\"\"6J7K/#$+\")(\"'#&'#&/D#;W/;$2J\"\"6J7K.\" &\"/'$8#:\x98# )(#'#(\"'#&'#"),
        peg$decode("$4\x99\"\"5!7\x9A/,#0)*4\x99\"\"5!7\x9A&&&#"),
        peg$decode("%4$\"\"5!7%/?#$4\x9B\"\"5!7\x9C0)*4\x9B\"\"5!7\x9C&/#$+\")(\"'#&'#"),
        peg$decode("%2l\"\"6l7m/?#;Y/6$2n\"\"6n7o/'$8#:\x9D# )(#'#(\"'#&'#"),
        peg$decode("%%;Z/\xB3#28\"\"6879/\xA4$;Z/\x9B$28\"\"6879/\x8C$;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+-)(-'#(,'#(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0790 &%2\x9E\"\"6\x9E7\x9F/\xA4#;Z/\x9B$28\"\"6879/\x8C$;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+,)(,'#(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u06F9 &%2\x9E\"\"6\x9E7\x9F/\x8C#;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+*)(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u067A &%2\x9E\"\"6\x9E7\x9F/t#;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0613 &%2\x9E\"\"6\x9E7\x9F/\\#;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+&)(&'#(%'#($'#(#'#(\"'#&'#.\u05C4 &%2\x9E\"\"6\x9E7\x9F/D#;Z/;$28\"\"6879/,$;[/#$+$)($'#(#'#(\"'#&'#.\u058D &%2\x9E\"\"6\x9E7\x9F/,#;[/#$+\")(\"'#&'#.\u056E &%2\x9E\"\"6\x9E7\x9F/,#;Z/#$+\")(\"'#&'#.\u054F &%;Z/\x9B#2\x9E\"\"6\x9E7\x9F/\x8C$;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$++)(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u04C7 &%;Z/\xAA#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x83$2\x9E\"\"6\x9E7\x9F/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+*)(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0430 &%;Z/\xB9#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x92$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/k$2\x9E\"\"6\x9E7\x9F/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+))()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u038A &%;Z/\xC8#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xA1$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/z$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/S$2\x9E\"\"6\x9E7\x9F/D$;Z/;$28\"\"6879/,$;[/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u02D5 &%;Z/\xD7#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xB0$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x89$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/b$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/;$2\x9E\"\"6\x9E7\x9F/,$;[/#$+')(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0211 &%;Z/\xFE#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xD7$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xB0$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x89$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/b$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/;$2\x9E\"\"6\x9E7\x9F/,$;Z/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0126 &%;Z/\u011C#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xF5$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xCE$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xA7$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x80$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/Y$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/2$2\x9E\"\"6\x9E7\x9F/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#/& 8!:\xA0! )"),
        peg$decode("%;#/M#;#.\" &\"/?$;#.\" &\"/1$;#.\" &\"/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%;Z/;#28\"\"6879/,$;Z/#$+#)(#'#(\"'#&'#.# &;\\"),
        peg$decode("%;]/o#2J\"\"6J7K/`$;]/W$2J\"\"6J7K/H$;]/?$2J\"\"6J7K/0$;]/'$8':\xA1' )(''#(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%2\xA2\"\"6\xA27\xA3/2#4\xA4\"\"5!7\xA5/#$+\")(\"'#&'#.\x98 &%2\xA6\"\"6\xA67\xA7/;#4\xA8\"\"5!7\xA9/,$;!/#$+#)(#'#(\"'#&'#.j &%2\xAA\"\"6\xAA7\xAB/5#;!/,$;!/#$+#)(#'#(\"'#&'#.B &%4\xAC\"\"5!7\xAD/,#;!/#$+\")(\"'#&'#.# &;!"),
        peg$decode("%%;!.\" &\"/[#;!.\" &\"/M$;!.\" &\"/?$;!.\" &\"/1$;!.\" &\"/#$+%)(%'#($'#(#'#(\"'#&'#/' 8!:\xAE!! )"),
        peg$decode("$%22\"\"6273/,#;`/#$+\")(\"'#&'#0<*%22\"\"6273/,#;`/#$+\")(\"'#&'#&"),
        peg$decode(";a.A &;b.; &;c.5 &;d./ &;e.) &;f.# &;g"),
        peg$decode("%3\xAF\"\"5*7\xB0/a#3\xB1\"\"5#7\xB2.G &3\xB3\"\"5#7\xB4.; &3\xB5\"\"5$7\xB6./ &3\xB7\"\"5#7\xB8.# &;6/($8\":\xB9\"! )(\"'#&'#"),
        peg$decode("%3\xBA\"\"5%7\xBB/I#3\xBC\"\"5%7\xBD./ &3\xBE\"\"5\"7\xBF.# &;6/($8\":\xC0\"! )(\"'#&'#"),
        peg$decode("%3\xC1\"\"5'7\xC2/1#;\x8F/($8\":\xC3\"! )(\"'#&'#"),
        peg$decode("%3\xC4\"\"5$7\xC5/1#;\xEF/($8\":\xC6\"! )(\"'#&'#"),
        peg$decode("%3\xC7\"\"5&7\xC8/1#;T/($8\":\xC9\"! )(\"'#&'#"),
        peg$decode("%3\xCA\"\"5\"7\xCB/N#%2>\"\"6>7?/,#;6/#$+\")(\"'#&'#.\" &\"/'$8\":\xCC\" )(\"'#&'#"),
        peg$decode("%;h/P#%2>\"\"6>7?/,#;i/#$+\")(\"'#&'#.\" &\"/)$8\":\xCD\"\"! )(\"'#&'#"),
        peg$decode("%$;j/&#0#*;j&&&#/\"!&,)"),
        peg$decode("%$;j/&#0#*;j&&&#/\"!&,)"),
        peg$decode(";k.) &;+.# &;-"),
        peg$decode("2l\"\"6l7m.e &2n\"\"6n7o.Y &24\"\"6475.M &28\"\"6879.A &2<\"\"6<7=.5 &2@\"\"6@7A.) &2B\"\"6B7C"),
        peg$decode("%26\"\"6677/n#;m/e$$%2<\"\"6<7=/,#;m/#$+\")(\"'#&'#0<*%2<\"\"6<7=/,#;m/#$+\")(\"'#&'#&/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;n/A#2>\"\"6>7?/2$;o/)$8#:\xCE#\"\" )(#'#(\"'#&'#"),
        peg$decode("$;p.) &;+.# &;-/2#0/*;p.) &;+.# &;-&&&#"),
        peg$decode("$;p.) &;+.# &;-0/*;p.) &;+.# &;-&"),
        peg$decode("2l\"\"6l7m.e &2n\"\"6n7o.Y &24\"\"6475.M &26\"\"6677.A &28\"\"6879.5 &2@\"\"6@7A.) &2B\"\"6B7C"),
        peg$decode(";\x90.# &;r"),
        peg$decode("%;\x8F/G#;'/>$;s/5$;'/,$;\x84/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode(";M.# &;t"),
        peg$decode("%;\x7F/E#28\"\"6879/6$;u.# &;x/'$8#:\xCF# )(#'#(\"'#&'#"),
        peg$decode("%;v.# &;w/J#%26\"\"6677/,#;\x83/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
        peg$decode("%2\xD0\"\"6\xD07\xD1/:#;\x80/1$;w.\" &\"/#$+#)(#'#(\"'#&'#"),
        peg$decode("%24\"\"6475/,#;{/#$+\")(\"'#&'#"),
        peg$decode("%;z/3#$;y0#*;y&/#$+\")(\"'#&'#"),
        peg$decode(";*.) &;+.# &;-"),
        peg$decode(";+.\x8F &;-.\x89 &22\"\"6273.} &26\"\"6677.q &28\"\"6879.e &2:\"\"6:7;.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E"),
        peg$decode("%;|/e#$%24\"\"6475/,#;|/#$+\")(\"'#&'#0<*%24\"\"6475/,#;|/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%$;~0#*;~&/e#$%22\"\"6273/,#;}/#$+\")(\"'#&'#0<*%22\"\"6273/,#;}/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("$;~0#*;~&"),
        peg$decode(";+.w &;-.q &28\"\"6879.e &2:\"\"6:7;.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E"),
        peg$decode("%%;\"/\x87#$;\".G &;!.A &2@\"\"6@7A.5 &2F\"\"6F7G.) &2J\"\"6J7K0M*;\".G &;!.A &2@\"\"6@7A.5 &2F\"\"6F7G.) &2J\"\"6J7K&/#$+\")(\"'#&'#/& 8!:\xD2! )"),
        peg$decode(";\x81.# &;\x82"),
        peg$decode("%%;O/2#2:\"\"6:7;/#$+\")(\"'#&'#.\" &\"/,#;S/#$+\")(\"'#&'#.\" &\""),
        peg$decode("$;+.\x83 &;-.} &2B\"\"6B7C.q &2D\"\"6D7E.e &22\"\"6273.Y &28\"\"6879.M &2:\"\"6:7;.A &2<\"\"6<7=.5 &2>\"\"6>7?.) &2@\"\"6@7A/\x8C#0\x89*;+.\x83 &;-.} &2B\"\"6B7C.q &2D\"\"6D7E.e &22\"\"6273.Y &28\"\"6879.M &2:\"\"6:7;.A &2<\"\"6<7=.5 &2>\"\"6>7?.) &2@\"\"6@7A&&&#"),
        peg$decode("$;y0#*;y&"),
        peg$decode("%3\x92\"\"5#7\xD3/q#24\"\"6475/b$$;!/&#0#*;!&&&#/L$2J\"\"6J7K/=$$;!/&#0#*;!&&&#/'$8%:\xD4% )(%'#($'#(#'#(\"'#&'#"),
        peg$decode("2\xD5\"\"6\xD57\xD6"),
        peg$decode("2\xD7\"\"6\xD77\xD8"),
        peg$decode("2\xD9\"\"6\xD97\xDA"),
        peg$decode("2\xDB\"\"6\xDB7\xDC"),
        peg$decode("2\xDD\"\"6\xDD7\xDE"),
        peg$decode("2\xDF\"\"6\xDF7\xE0"),
        peg$decode("2\xE1\"\"6\xE17\xE2"),
        peg$decode("2\xE3\"\"6\xE37\xE4"),
        peg$decode("2\xE5\"\"6\xE57\xE6"),
        peg$decode("2\xE7\"\"6\xE77\xE8"),
        peg$decode("%;\x85.S &;\x86.M &;\x88.G &;\x89.A &;\x8A.; &;\x8B.5 &;\x8C./ &;\x8D.) &;\x8E.# &;6/& 8!:\xE9! )"),
        peg$decode("%;\x84/G#;'/>$;\x91/5$;'/,$;\x93/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%;\x92/' 8!:\xEA!! )"),
        peg$decode("%;!/5#;!/,$;!/#$+#)(#'#(\"'#&'#"),
        peg$decode("%$;*.A &;+.; &;-.5 &;3./ &;4.) &;'.# &;(0G*;*.A &;+.; &;-.5 &;3./ &;4.) &;'.# &;(&/& 8!:\xEB! )"),
        peg$decode("%;\xB5/Y#$%;A/,#;\xB5/#$+\")(\"'#&'#06*%;A/,#;\xB5/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%;9/N#%2:\"\"6:7;/,#;9/#$+\")(\"'#&'#.\" &\"/'$8\":\xEC\" )(\"'#&'#"),
        peg$decode("%;:.c &%;\x97/Y#$%;A/,#;\x97/#$+\")(\"'#&'#06*%;A/,#;\x97/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/& 8!:\xED! )"),
        peg$decode("%;L.# &;\x98/]#$%;B/,#;\x9A/#$+\")(\"'#&'#06*%;B/,#;\x9A/#$+\")(\"'#&'#&/'$8\":\xEE\" )(\"'#&'#"),
        peg$decode("%;\x99.\" &\"/>#;@/5$;M/,$;?/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%%;6/Y#$%;./,#;6/#$+\")(\"'#&'#06*%;./,#;6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#.# &;H/' 8!:\xEF!! )"),
        peg$decode(";\x9B.) &;\x9C.# &;\x9F"),
        peg$decode("%3\xF0\"\"5!7\xF1/:#;</1$;\x9E/($8#:\xF2#! )(#'#(\"'#&'#"),
        peg$decode("%3\xF3\"\"5'7\xF4/:#;</1$;\x9D/($8#:\xF5#! )(#'#(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\xF6!! )"),
        peg$decode("%2\xF7\"\"6\xF77\xF8/o#%2J\"\"6J7K/M#;!.\" &\"/?$;!.\" &\"/1$;!.\" &\"/#$+$)($'#(#'#(\"'#&'#.\" &\"/'$8\":\xF9\" )(\"'#&'#"),
        peg$decode("%;6/J#%;</,#;\xA0/#$+\")(\"'#&'#.\" &\"/)$8\":\xFA\"\"! )(\"'#&'#"),
        peg$decode(";6.) &;T.# &;H"),
        peg$decode("%;\xA2/Y#$%;B/,#;\xA3/#$+\")(\"'#&'#06*%;B/,#;\xA3/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%3\xFB\"\"5&7\xFC.G &3\xFD\"\"5'7\xFE.; &3\xFF\"\"5$7\u0100./ &3\u0101\"\"5%7\u0102.# &;6/& 8!:\u0103! )"),
        peg$decode(";\xA4.# &;\x9F"),
        peg$decode("%3\u0104\"\"5(7\u0105/M#;</D$3\u0106\"\"5(7\u0107./ &3\u0108\"\"5(7\u0109.# &;6/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;6/Y#$%;A/,#;6/#$+\")(\"'#&'#06*%;A/,#;6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u010A!! )"),
        peg$decode("%;\xA8/& 8!:\u010B! )"),
        peg$decode("%;\xA9/k#;;/b$;\xAE/Y$$%;B/,#;\xAF/#$+\")(\"'#&'#06*%;B/,#;\xAF/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode(";\xAA.# &;\xAB"),
        peg$decode("3\u010C\"\"5$7\u010D.S &3\u010E\"\"5%7\u010F.G &3\u0110\"\"5%7\u0111.; &3\u0112\"\"5%7\u0113./ &3\u0114\"\"5+7\u0115.# &;\xAC"),
        peg$decode("3\u0116\"\"5'7\u0117./ &3\u0118\"\"5)7\u0119.# &;\xAC"),
        peg$decode(";6.# &;\xAD"),
        peg$decode("%3\u011A\"\"5\"7\u011B/,#;6/#$+\")(\"'#&'#"),
        peg$decode(";\xAC.# &;6"),
        peg$decode("%;6/5#;</,$;\xB0/#$+#)(#'#(\"'#&'#"),
        peg$decode(";6.# &;H"),
        peg$decode("%;\xB2/5#;./,$;\x8F/#$+#)(#'#(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u011C!! )"),
        peg$decode("%;\x9D/' 8!:\u011D!! )"),
        peg$decode("%;\xB5/^#$%;B/,#;\x9F/#$+\")(\"'#&'#06*%;B/,#;\x9F/#$+\")(\"'#&'#&/($8\":\u011E\"!!)(\"'#&'#"),
        peg$decode("%%;7/e#$%2J\"\"6J7K/,#;7/#$+\")(\"'#&'#0<*%2J\"\"6J7K/,#;7/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/\"!&,)"),
        peg$decode("%;L.# &;\x98/]#$%;B/,#;\xB7/#$+\")(\"'#&'#06*%;B/,#;\xB7/#$+\")(\"'#&'#&/'$8\":\u011F\" )(\"'#&'#"),
        peg$decode(";\xB8.# &;\x9F"),
        peg$decode("%3\u0120\"\"5#7\u0121/:#;</1$;6/($8#:\u0122#! )(#'#(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u0123!! )"),
        peg$decode("%;\x9D/' 8!:\u0124!! )"),
        peg$decode("%$;\x990#*;\x99&/x#;@/o$;M/f$;?/]$$%;B/,#;\x9F/#$+\")(\"'#&'#06*%;B/,#;\x9F/#$+\")(\"'#&'#&/'$8%:\u0125% )(%'#($'#(#'#(\"'#&'#"),
        peg$decode(";\xBD"),
        peg$decode("%3\u0126\"\"5&7\u0127/k#;./b$;\xC0/Y$$%;A/,#;\xC0/#$+\")(\"'#&'#06*%;A/,#;\xC0/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#.# &;\xBE"),
        peg$decode("%;6/k#;./b$;\xBF/Y$$%;A/,#;\xBF/#$+\")(\"'#&'#06*%;A/,#;\xBF/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%;6/;#;</2$;6.# &;H/#$+#)(#'#(\"'#&'#"),
        peg$decode(";\xC1.G &;\xC3.A &;\xC5.; &;\xC7.5 &;\xC8./ &;\xC9.) &;\xCA.# &;\xBF"),
        peg$decode("%3\u0128\"\"5%7\u0129/5#;</,$;\xC2/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;I/' 8!:\u012A!! )"),
        peg$decode("%3\u012B\"\"5&7\u012C/\x97#;</\x8E$;D/\x85$;\xC4/|$$%$;'/&#0#*;'&&&#/,#;\xC4/#$+\")(\"'#&'#0C*%$;'/&#0#*;'&&&#/,#;\xC4/#$+\")(\"'#&'#&/,$;E/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode(";t.# &;w"),
        peg$decode("%3\u012D\"\"5%7\u012E/5#;</,$;\xC6/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;I/' 8!:\u012F!! )"),
        peg$decode("%3\u0130\"\"5&7\u0131/:#;</1$;I/($8#:\u0132#! )(#'#(\"'#&'#"),
        peg$decode("%3\u0133\"\"5%7\u0134/]#;</T$%3\u0135\"\"5$7\u0136/& 8!:\u0137! ).4 &%3\u0138\"\"5%7\u0139/& 8!:\u013A! )/#$+#)(#'#(\"'#&'#"),
        peg$decode("%3\u013B\"\"5)7\u013C/R#;</I$3\u013D\"\"5#7\u013E./ &3\u013F\"\"5(7\u0140.# &;6/($8#:\u0141#! )(#'#(\"'#&'#"),
        peg$decode("%3\u0142\"\"5#7\u0143/\x93#;</\x8A$;D/\x81$%;\xCB/e#$%2D\"\"6D7E/,#;\xCB/#$+\")(\"'#&'#0<*%2D\"\"6D7E/,#;\xCB/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/,$;E/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%3\u0144\"\"5(7\u0145./ &3\u0146\"\"5$7\u0147.# &;6/' 8!:\u0148!! )"),
        peg$decode("%;6/Y#$%;A/,#;6/#$+\")(\"'#&'#06*%;A/,#;6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%;\xCE/G#;./>$;\xCE/5$;./,$;\x8F/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u0149!! )"),
        peg$decode("%;\xD0/]#$%;A/,#;\xD0/#$+\")(\"'#&'#06*%;A/,#;\xD0/#$+\")(\"'#&'#&/'$8\":\u014A\" )(\"'#&'#"),
        peg$decode("%;\x98/]#$%;B/,#;\x9F/#$+\")(\"'#&'#06*%;B/,#;\x9F/#$+\")(\"'#&'#&/'$8\":\u014B\" )(\"'#&'#"),
        peg$decode("%;L.O &;\x98.I &%;@.\" &\"/:#;t/1$;?.\" &\"/#$+#)(#'#(\"'#&'#/]#$%;B/,#;\x9F/#$+\")(\"'#&'#06*%;B/,#;\x9F/#$+\")(\"'#&'#&/'$8\":\u014C\" )(\"'#&'#"),
        peg$decode("%;\xD3/]#$%;B/,#;\xD4/#$+\")(\"'#&'#06*%;B/,#;\xD4/#$+\")(\"'#&'#&/'$8\":\u014D\" )(\"'#&'#"),
        peg$decode("%;\x95/& 8!:\u014E! )"),
        peg$decode("%3\u014F\"\"5(7\u0150/:#;</1$;6/($8#:\u0151#! )(#'#(\"'#&'#.g &%3\u0152\"\"5&7\u0153/:#;</1$;6/($8#:\u0154#! )(#'#(\"'#&'#.: &%3\u0155\"\"5*7\u0156/& 8!:\u0157! ).# &;\x9F"),
        peg$decode("%%;6/k#$%;A/2#;6/)$8\":\u0158\"\"$ )(\"'#&'#0<*%;A/2#;6/)$8\":\u0158\"\"$ )(\"'#&'#&/)$8\":\u0159\"\"! )(\"'#&'#.\" &\"/' 8!:\u015A!! )"),
        peg$decode("%;\xD7/Y#$%;A/,#;\xD7/#$+\")(\"'#&'#06*%;A/,#;\xD7/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%;\x98/Y#$%;B/,#;\x9F/#$+\")(\"'#&'#06*%;B/,#;\x9F/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u015B!! )"),
        peg$decode("%;\xDA/Y#$%;B/,#;\xDB/#$+\")(\"'#&'#06*%;B/,#;\xDB/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%3\u015C\"\"5&7\u015D.; &3\u015E\"\"5'7\u015F./ &3\u0160\"\"5*7\u0161.# &;6/& 8!:\u0162! )"),
        peg$decode("%3\u0163\"\"5&7\u0164/:#;</1$;\xDC/($8#:\u0165#! )(#'#(\"'#&'#.} &%3\xF3\"\"5'7\xF4/:#;</1$;\x9D/($8#:\u0166#! )(#'#(\"'#&'#.P &%3\u0167\"\"5+7\u0168/:#;</1$;\x9D/($8#:\u0169#! )(#'#(\"'#&'#.# &;\x9F"),
        peg$decode("3\u016A\"\"5+7\u016B.k &3\u016C\"\"5)7\u016D._ &3\u016E\"\"5(7\u016F.S &3\u0170\"\"5'7\u0171.G &3\u0172\"\"5&7\u0173.; &3\u0174\"\"5*7\u0175./ &3\u0176\"\"5)7\u0177.# &;6"),
        peg$decode(";1.\" &\""),
        peg$decode("%%;6/k#$%;A/2#;6/)$8\":\u0158\"\"$ )(\"'#&'#0<*%;A/2#;6/)$8\":\u0158\"\"$ )(\"'#&'#&/)$8\":\u0159\"\"! )(\"'#&'#.\" &\"/' 8!:\u0178!! )"),
        peg$decode("%;L.# &;\x98/]#$%;B/,#;\xE0/#$+\")(\"'#&'#06*%;B/,#;\xE0/#$+\")(\"'#&'#&/'$8\":\u0179\" )(\"'#&'#"),
        peg$decode(";\xB8.# &;\x9F"),
        peg$decode("%;\xE2/Y#$%;A/,#;\xE2/#$+\")(\"'#&'#06*%;A/,#;\xE2/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%;\xE9/k#;./b$;\xEC/Y$$%;B/,#;\xE3/#$+\")(\"'#&'#06*%;B/,#;\xE3/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode(";\xE4.; &;\xE5.5 &;\xE6./ &;\xE7.) &;\xE8.# &;\x9F"),
        peg$decode("%3\u017A\"\"5#7\u017B/:#;</1$;\xEF/($8#:\u017C#! )(#'#(\"'#&'#"),
        peg$decode("%3\u017D\"\"5%7\u017E/:#;</1$;T/($8#:\u017F#! )(#'#(\"'#&'#"),
        peg$decode("%3\u0180\"\"5(7\u0181/@#;</7$;\\.# &;Y/($8#:\u0182#! )(#'#(\"'#&'#"),
        peg$decode("%3\u0183\"\"5&7\u0184/:#;</1$;6/($8#:\u0185#! )(#'#(\"'#&'#"),
        peg$decode("%3\u0186\"\"5%7\u0187/O#%;</3#$;!0#*;!&/#$+\")(\"'#&'#.\" &\"/'$8\":\u0188\" )(\"'#&'#"),
        peg$decode("%;\xEA/G#;;/>$;6/5$;;/,$;\xEB/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%3\x92\"\"5#7\xD3.# &;6/' 8!:\u0189!! )"),
        peg$decode("%3\xB1\"\"5#7\u018A.G &3\xB3\"\"5#7\u018B.; &3\xB7\"\"5#7\u018C./ &3\xB5\"\"5$7\u018D.# &;6/' 8!:\u018E!! )"),
        peg$decode("%;\xED/D#%;C/,#;\xEE/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
        peg$decode("%;U.) &;\\.# &;X/& 8!:\u018F! )"),
        peg$decode("%%;!.\" &\"/[#;!.\" &\"/M$;!.\" &\"/?$;!.\" &\"/1$;!.\" &\"/#$+%)(%'#($'#(#'#(\"'#&'#/' 8!:\u0190!! )"),
        peg$decode("%%;!/?#;!.\" &\"/1$;!.\" &\"/#$+#)(#'#(\"'#&'#/' 8!:\u0191!! )"),
        peg$decode(";\xBD"),
        peg$decode("%;\x9D/^#$%;B/,#;\xF2/#$+\")(\"'#&'#06*%;B/,#;\xF2/#$+\")(\"'#&'#&/($8\":\u0192\"!!)(\"'#&'#"),
        peg$decode(";\xF3.# &;\x9F"),
        peg$decode("%2\u0193\"\"6\u01937\u0194/L#;</C$2\u0195\"\"6\u01957\u0196.) &2\u0197\"\"6\u01977\u0198/($8#:\u0199#! )(#'#(\"'#&'#"),
        peg$decode("%;\x9D/^#$%;B/,#;\x9F/#$+\")(\"'#&'#06*%;B/,#;\x9F/#$+\")(\"'#&'#&/($8\":\u019A\"!!)(\"'#&'#"),
        peg$decode("%;6/5#;0/,$;\xF6/#$+#)(#'#(\"'#&'#"),
        peg$decode("$;2.) &;4.# &;.0/*;2.) &;4.# &;.&"),
        peg$decode("$;%0#*;%&"),
        peg$decode("%;\xF9/;#28\"\"6879/,$;\xFA/#$+#)(#'#(\"'#&'#"),
        peg$decode("%3\u019B\"\"5%7\u019C.) &3\u019D\"\"5$7\u019E/' 8!:\u019F!! )"),
        peg$decode("%;\xFB/J#%28\"\"6879/,#;^/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
        peg$decode("%;\\.) &;X.# &;\x82/' 8!:\u01A0!! )"),
        peg$decode(";\".S &;!.M &2F\"\"6F7G.A &2J\"\"6J7K.5 &2H\"\"6H7I.) &2N\"\"6N7O"),
        peg$decode("2L\"\"6L7M.\x95 &2B\"\"6B7C.\x89 &2<\"\"6<7=.} &2R\"\"6R7S.q &2T\"\"6T7U.e &2V\"\"6V7W.Y &2P\"\"6P7Q.M &2@\"\"6@7A.A &2D\"\"6D7E.5 &22\"\"6273.) &2>\"\"6>7?"),
        peg$decode("%;\xFF/b#28\"\"6879/S$;\xFA/J$%2\u01A1\"\"6\u01A17\u01A2/,#;\xEB/#$+\")(\"'#&'#.\" &\"/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%3\u01A3\"\"5%7\u01A4.) &3\u01A5\"\"5$7\u01A6/' 8!:\u019F!! )"),
        peg$decode("%;\xEB/O#3\xB1\"\"5#7\xB2.6 &3\xB3\"\"5#7\xB4.* &$;+0#*;+&/'$8\":\u01A7\" )(\"'#&'#"),
        peg$decode("%;\u0103/\x87#2F\"\"6F7G/x$;\u0102/o$2F\"\"6F7G/`$;\u0102/W$2F\"\"6F7G/H$;\u0102/?$2F\"\"6F7G/0$;\u0104/'$8):\u01A8) )()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%;#/>#;#/5$;#/,$;#/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%;\u0102/,#;\u0102/#$+\")(\"'#&'#"),
        peg$decode("%;\u0102/5#;\u0102/,$;\u0102/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;\x84/U#;'/L$;\x91/C$;'/:$;\x8F/1$; .\" &\"/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%2\u01A9\"\"6\u01A97\u01AA.) &2\u01AB\"\"6\u01AB7\u01AC/w#;0/n$;\u0107/e$$%;B/2#;\u0108.# &;\x9F/#$+\")(\"'#&'#0<*%;B/2#;\u0108.# &;\x9F/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode(";\x98.# &;L"),
        peg$decode("%2\u01AD\"\"6\u01AD7\u01AE/5#;</,$;\u0109/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;D/S#;,/J$2:\"\"6:7;/;$;,.# &;T/,$;E/#$+%)(%'#($'#(#'#(\"'#&'#")
      ],

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleIndices)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleIndex = peg$startRuleIndices[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$decode(s) {
    var bc = new Array(s.length), i;

    for (i = 0; i < s.length; i++) {
      bc[i] = s.charCodeAt(i) - 32;
    }

    return bc;
  }

  function peg$parseRule(index) {
    var bc    = peg$bytecode[index],
        ip    = 0,
        ips   = [],
        end   = bc.length,
        ends  = [],
        stack = [],
        params, i;

    while (true) {
      while (ip < end) {
        switch (bc[ip]) {
          case 0:
            stack.push(peg$consts[bc[ip + 1]]);
            ip += 2;
            break;

          case 1:
            stack.push(void 0);
            ip++;
            break;

          case 2:
            stack.push(null);
            ip++;
            break;

          case 3:
            stack.push(peg$FAILED);
            ip++;
            break;

          case 4:
            stack.push([]);
            ip++;
            break;

          case 5:
            stack.push(peg$currPos);
            ip++;
            break;

          case 6:
            stack.pop();
            ip++;
            break;

          case 7:
            peg$currPos = stack.pop();
            ip++;
            break;

          case 8:
            stack.length -= bc[ip + 1];
            ip += 2;
            break;

          case 9:
            stack.splice(-2, 1);
            ip++;
            break;

          case 10:
            stack[stack.length - 2].push(stack.pop());
            ip++;
            break;

          case 11:
            stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
            ip += 2;
            break;

          case 12:
            stack.push(input.substring(stack.pop(), peg$currPos));
            ip++;
            break;

          case 13:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (stack[stack.length - 1]) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 14:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (stack[stack.length - 1] === peg$FAILED) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 15:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (stack[stack.length - 1] !== peg$FAILED) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 16:
            if (stack[stack.length - 1] !== peg$FAILED) {
              ends.push(end);
              ips.push(ip);

              end = ip + 2 + bc[ip + 1];
              ip += 2;
            } else {
              ip += 2 + bc[ip + 1];
            }

            break;

          case 17:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (input.length > peg$currPos) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 18:
            ends.push(end);
            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

            if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
              end = ip + 4 + bc[ip + 2];
              ip += 4;
            } else {
              end = ip + 4 + bc[ip + 2] + bc[ip + 3];
              ip += 4 + bc[ip + 2];
            }

            break;

          case 19:
            ends.push(end);
            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

            if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
              end = ip + 4 + bc[ip + 2];
              ip += 4;
            } else {
              end = ip + 4 + bc[ip + 2] + bc[ip + 3];
              ip += 4 + bc[ip + 2];
            }

            break;

          case 20:
            ends.push(end);
            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

            if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
              end = ip + 4 + bc[ip + 2];
              ip += 4;
            } else {
              end = ip + 4 + bc[ip + 2] + bc[ip + 3];
              ip += 4 + bc[ip + 2];
            }

            break;

          case 21:
            stack.push(input.substr(peg$currPos, bc[ip + 1]));
            peg$currPos += bc[ip + 1];
            ip += 2;
            break;

          case 22:
            stack.push(peg$consts[bc[ip + 1]]);
            peg$currPos += peg$consts[bc[ip + 1]].length;
            ip += 2;
            break;

          case 23:
            stack.push(peg$FAILED);
            if (peg$silentFails === 0) {
              peg$fail(peg$consts[bc[ip + 1]]);
            }
            ip += 2;
            break;

          case 24:
            peg$savedPos = stack[stack.length - 1 - bc[ip + 1]];
            ip += 2;
            break;

          case 25:
            peg$savedPos = peg$currPos;
            ip++;
            break;

          case 26:
            params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
            for (i = 0; i < bc[ip + 3]; i++) {
              params[i] = stack[stack.length - 1 - params[i]];
            }

            stack.splice(
              stack.length - bc[ip + 2],
              bc[ip + 2],
              peg$consts[bc[ip + 1]].apply(null, params)
            );

            ip += 4 + bc[ip + 3];
            break;

          case 27:
            stack.push(peg$parseRule(bc[ip + 1]));
            ip += 2;
            break;

          case 28:
            peg$silentFails++;
            ip++;
            break;

          case 29:
            peg$silentFails--;
            ip++;
            break;

          default:
            throw new Error("Invalid opcode: " + bc[ip] + ".");
        }
      }

      if (ends.length > 0) {
        end = ends.pop();
        ip = ips.pop();
      } else {
        break;
      }
    }

    return stack[0];
  }


    options.data = {}; // Object to which header attributes will be assigned during parsing

    function list (head, tail) {
      return [head].concat(tail);
    }


  peg$result = peg$parseRule(peg$startRuleIndex);

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @name SIP
 * @namespace
 */


module.exports = function (SIP) {
  var Modifiers;

  Modifiers = {
    stripTcpCandidates: function stripTcpCandidates(description) {
      description.sdp = description.sdp.replace(/^a=candidate:\d+ \d+ tcp .*?\r\n/img, "");
      return SIP.Utils.Promise.resolve(description);
    },

    stripTelephoneEvent: function stripTelephoneEvent(description) {
      description.sdp = description.sdp.replace(/^a=rtpmap:\d+ telephone-event\/\d+\r\n/img, "");
      return SIP.Utils.Promise.resolve(description);
    },

    cleanJitsiSdpImageattr: function cleanJitsiSdpImageattr(description) {
      description.sdp = description.sdp.replace(/^(a=imageattr:.*?)(x|y)=\[0-/gm, "$1$2=[1:");
      return SIP.Utils.Promise.resolve(description);
    },

    stripG722: function stripG722(description) {
      var parts = description.sdp.match(/^m=audio.*$/gm);
      if (parts) {
        var mline = parts[0];
        mline = mline.split(" ");
        // Ignore the first 3 parameters of the mline. The codec information is after that
        for (var i = 3; i < mline.length; i = i + 1) {
          if (mline[i] === "9") {
            mline.splice(i, 1);
            var numberOfCodecs = parseInt(mline[1], 10);
            numberOfCodecs = numberOfCodecs - 1;
            mline[1] = numberOfCodecs.toString();
          }
        }
        mline = mline.join(" ");
        description.sdp = description.sdp.replace(/^m=audio.*$/gm, mline);
        description.sdp = description.sdp.replace(/^a=rtpmap:.*G722\/8000\r\n?/gm, "").replace();
      }
      return SIP.Utils.Promise.resolve(description);
    }
  };

  return Modifiers;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * @fileoverview Simple
 */

/* Simple
 * @class Simple
 */

module.exports = function (SIP) {

  var C = {
    STATUS_NULL: 0,
    STATUS_NEW: 1,
    STATUS_CONNECTING: 2,
    STATUS_CONNECTED: 3,
    STATUS_COMPLETED: 4
  };

  /*
   * @param {Object} options
   */
  var Simple = function Simple(options) {
    /*
     *  {
     *    media: {
     *      remote: {
     *        audio: <DOM element>,
     *        video: <DOM element>
     *      },
     *      local: {
     *        video: <DOM element>
     *      }
     *    },
     *    ua: {
     *       <UA Configuration Options>
     *    }
     *  }
     */

    if (options.media.remote.video) {
      this.video = true;
    } else {
      this.video = false;
    }

    if (options.media.remote.audio) {
      this.audio = true;
    } else {
      this.audio = false;
    }

    if (!this.audio && !this.video) {
      // Need to do at least audio or video
      // Error
      throw new Error('At least one remote audio or video element is required for Simple.');
    }

    this.options = options;

    // https://stackoverflow.com/questions/7944460/detect-safari-browser
    var browserUa = global.navigator.userAgent.toLowerCase();
    var isSafari = false;
    if (browserUa.indexOf('safari') > -1 && browserUa.indexOf('chrome') < 0) {
      isSafari = true;
    }
    var sessionDescriptionHandlerFactoryOptions = {};
    if (isSafari) {
      sessionDescriptionHandlerFactoryOptions.modifiers = [SIP.WebRTC.Modifiers.stripG722];
    }

    if (!this.options.ua.uri) {
      this.anonymous = true;
    }

    this.ua = new SIP.UA({
      // User Configurable Options
      wsServers: this.options.ua.wsServers,
      uri: this.options.ua.uri,
      authorizationUser: this.options.ua.authorizationUser,
      password: this.options.ua.password,
      displayName: this.options.ua.displayName,
      // Undocumented "Advanced" Options
      traceSip: this.options.ua.traceSip,
      hackWssInTransport: true,
      hackIpInContact: true,
      userAgentString: this.options.ua.userAgentString,
      // Fixed Options
      register: true,
      sessionDescriptionHandlerFactoryOptions: sessionDescriptionHandlerFactoryOptions
    });

    this.state = C.STATUS_NULL;

    this.logger = this.ua.getLogger('sip.simple');

    this.ua.on('registered', function () {
      this.emit('registered', this.ua);
    }.bind(this));

    this.ua.on('unregistered', function () {
      this.emit('unregistered', this.ua);
    }.bind(this));

    this.ua.on('failed', function () {
      this.emit('unregistered', this.ua);
    }.bind(this));

    this.ua.on('invite', function (session) {
      // If there is already an active session reject the incoming session
      if (this.state !== C.STATUS_NULL && this.state !== C.STATUS_COMPLETED) {
        this.logger.warn('Rejecting incoming call. Simple only supports 1 call at a time');
        session.reject();
        return;
      }
      this.session = session;
      this.setupSession();
      this.emit('ringing', this.session);
    }.bind(this));

    this.ua.on('message', function (message) {
      this.emit('message', message);
    }.bind(this));

    return this;
  };

  Simple.prototype = Object.create(SIP.EventEmitter.prototype);
  Simple.C = C;

  // Public

  Simple.prototype.call = function (destination) {
    if (!this.ua || !this.checkRegistration()) {
      this.logger.warn('A registered UA is required for calling');
      return;
    }
    if (this.state !== C.STATUS_NULL && this.state !== C.STATUS_COMPLETED) {
      this.logger.warn('Cannot make more than a single call with Simple');
      return;
    }
    // Safari hack, because you cannot call .play() from a non user action
    if (this.options.media.remote.audio) {
      this.options.media.remote.audio.autoplay = true;
    }
    if (this.options.media.remote.video) {
      this.options.media.remote.video.autoplay = true;
    }
    if (this.options.media.local && this.options.media.local.video) {
      this.options.media.local.video.autoplay = true;
      this.options.media.local.video.volume = 0;
    }
    this.session = this.ua.invite(destination, {
      sessionDescriptionHandlerOptions: {
        constraints: {
          audio: this.audio,
          video: this.video
        }
      }
    });
    this.setupSession();

    return this.session;
  };

  Simple.prototype.answer = function () {
    if (this.state !== C.STATUS_NEW && this.state !== C.STATUS_CONNECTING) {
      this.logger.warn('No call to answer');
      return;
    }
    // Safari hack, because you cannot call .play() from a non user action
    if (this.options.media.remote.audio) {
      this.options.media.remote.audio.autoplay = true;
    }
    if (this.options.media.remote.video) {
      this.options.media.remote.video.autoplay = true;
    }
    return this.session.accept({
      sessionDescriptionHandlerOptions: {
        constraints: {
          audio: this.audio,
          video: this.video
        }
      }
    });
    // emit call is active
  };

  Simple.prototype.reject = function () {
    if (this.state !== C.STATUS_NEW && this.state !== C.STATUS_CONNECTING) {
      this.logger.warn('Call is already answered');
      return;
    }
    return this.session.reject();
  };

  Simple.prototype.hangup = function () {
    if (this.state !== C.STATUS_CONNECTED && this.state !== C.STATUS_CONNECTING && this.state !== C.STATUS_NEW) {
      this.logger.warn('No active call to hang up on');
      return;
    }
    if (this.state !== C.STATUS_CONNECTED) {
      return this.session.cancel();
    } else {
      return this.session.bye();
    }
  };

  Simple.prototype.hold = function () {
    if (this.state !== C.STATUS_CONNECTED || this.session.local_hold) {
      this.logger.warn('Cannot put call on hold');
      return;
    }
    this.mute();
    this.logger.log('Placing session on hold');
    return this.session.hold();
  };

  Simple.prototype.unhold = function () {
    if (this.state !== C.STATUS_CONNECTED || !this.session.local_hold) {
      this.logger.warn('Cannot unhold a call that is not on hold');
      return;
    }
    this.unmute();
    this.logger.log('Placing call off hold');
    return this.session.unhold();
  };

  Simple.prototype.mute = function () {
    if (this.state !== C.STATUS_CONNECTED) {
      this.logger.warn('An acitve call is required to mute audio');
      return;
    }
    this.logger.log('Muting Audio');
    this.toggleMute(true);
    this.emit('mute', this);
  };

  Simple.prototype.unmute = function () {
    if (this.state !== C.STATUS_CONNECTED) {
      this.logger.warn('An active call is required to unmute audio');
      return;
    }
    this.logger.log('Unmuting Audio');
    this.toggleMute(false);
    this.emit('unmute', this);
  };

  Simple.prototype.sendDTMF = function (tone) {
    if (this.state !== C.STATUS_CONNECTED) {
      this.logger.warn('An active call is required to send a DTMF tone');
      return;
    }
    this.logger.log('Sending DTMF tone: ' + tone);
    this.session.dtmf(tone);
  };

  Simple.prototype.message = function (destination, message) {
    if (!this.ua || !this.checkRegistration()) {
      this.logger.warn('A registered UA is required to send a message');
      return;
    }
    if (!destination || !message) {
      this.logger.warn('A destination and message are required to send a message');
      return;
    }
    this.ua.message(destination, message);
  };

  // Private Helpers

  Simple.prototype.checkRegistration = function () {
    return this.anonymous || this.ua && this.ua.isRegistered();
  };

  Simple.prototype.setupRemoteMedia = function () {
    // If there is a video track, it will attach the video and audio to the same element
    var pc = this.session.sessionDescriptionHandler.peerConnection;
    var remoteStream;

    if (pc.getReceivers) {
      remoteStream = new global.window.MediaStream();
      pc.getReceivers().forEach(function (receiver) {
        var track = receiver.track;
        if (track) {
          remoteStream.addTrack(track);
        }
      });
    } else {
      remoteStream = pc.getRemoteStreams()[0];
    }
    if (this.video) {
      this.options.media.remote.video.srcObject = remoteStream;
      this.options.media.remote.video.play().catch(function () {
        this.logger.log('play was rejected');
      }.bind(this));
    } else if (this.audio) {
      this.options.media.remote.audio.srcObject = remoteStream;
      this.options.media.remote.audio.play().catch(function () {
        this.logger.log('play was rejected');
      }.bind(this));
    }
  };

  Simple.prototype.setupLocalMedia = function () {
    if (this.video && this.options.media.local && this.options.media.local.video) {
      var pc = this.session.sessionDescriptionHandler.peerConnection;
      var localStream;
      if (pc.getSenders) {
        localStream = new global.window.MediaStream();
        pc.getSenders().forEach(function (sender) {
          var track = sender.track;
          if (track && track.kind === 'video') {
            localStream.addTrack(track);
          }
        });
      } else {
        localStream = pc.getLocalStreams()[0];
      }
      this.options.media.local.video.srcObject = localStream;
      this.options.media.local.video.volume = 0;
      this.options.media.local.video.play();
    }
  };

  Simple.prototype.cleanupMedia = function () {
    if (this.video) {
      this.options.media.remote.video.srcObject = null;
      this.options.media.remote.video.pause();
      if (this.options.media.local && this.options.media.local.video) {
        this.options.media.local.video.srcObject = null;
        this.options.media.local.video.pause();
      }
    }
    if (this.audio) {
      this.options.media.remote.audio.srcObject = null;
      this.options.media.remote.audio.pause();
    }
  };

  Simple.prototype.setupSession = function () {
    this.state = C.STATUS_NEW;
    this.emit('new', this.session);

    this.session.on('progress', this.onProgress.bind(this));
    this.session.on('accepted', this.onAccepted.bind(this));
    this.session.on('rejected', this.onEnded.bind(this));
    this.session.on('failed', this.onFailed.bind(this));
    this.session.on('terminated', this.onEnded.bind(this));
  };

  Simple.prototype.destroyMedia = function () {
    this.session.sessionDescriptionHandler.close();
  };

  Simple.prototype.toggleMute = function (mute) {
    var pc = this.session.sessionDescriptionHandler.peerConnection;
    if (pc.getSenders) {
      pc.getSenders().forEach(function (sender) {
        if (sender.track) {
          sender.track.enabled = !mute;
        }
      });
    } else {
      pc.getLocalStreams().forEach(function (stream) {
        stream.getAudioTracks().forEach(function (track) {
          track.enabled = !mute;
        });
        stream.getVideoTracks().forEach(function (track) {
          track.enabled = !mute;
        });
      });
    }
  };

  Simple.prototype.onAccepted = function () {
    this.state = C.STATUS_CONNECTED;
    this.emit('connected', this.session);

    this.setupLocalMedia();
    this.setupRemoteMedia();
    this.session.sessionDescriptionHandler.on('addTrack', function () {
      this.logger.log('A track has been added, triggering new remoteMedia setup');
      this.setupRemoteMedia();
    }.bind(this));

    this.session.sessionDescriptionHandler.on('addStream', function () {
      this.logger.log('A stream has been added, trigger new remoteMedia setup');
      this.setupRemoteMedia();
    }.bind(this));

    this.session.on('hold', function () {
      this.emit('hold', this.session);
    }.bind(this));
    this.session.on('unhold', function () {
      this.emit('unhold', this.session);
    }.bind(this));
    this.session.on('dtmf', function (tone) {
      this.emit('dtmf', tone);
    }.bind(this));
    this.session.on('bye', this.onEnded.bind(this));
  };

  Simple.prototype.onProgress = function () {
    this.state = C.STATUS_CONNECTING;
    this.emit('connecting', this.session);
  };

  Simple.prototype.onFailed = function () {
    this.onEnded();
  };

  Simple.prototype.onEnded = function () {
    this.state = C.STATUS_COMPLETED;
    this.emit('ended', this.session);
    this.cleanupMedia();
  };

  return Simple;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var toplevel = global.window || global;

function getPrefixedProperty(object, name) {
  if (object == null) {
    return;
  }
  var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  var prefixedNames = [name, 'webkit' + capitalizedName, 'moz' + capitalizedName];
  for (var i in prefixedNames) {
    var property = object[prefixedNames[i]];
    if (property) {
      return property.bind(object);
    }
  }
}

module.exports = {
  WebSocket: toplevel.WebSocket,
  Transport: __webpack_require__(35),
  open: toplevel.open,
  Promise: toplevel.Promise,
  timers: toplevel,

  // Console is not defined in ECMAScript, so just in case...
  console: toplevel.console || {
    debug: function debug() {},
    log: function log() {},
    warn: function warn() {},
    error: function error() {}
  },

  addEventListener: getPrefixedProperty(toplevel, 'addEventListener'),
  removeEventListener: getPrefixedProperty(toplevel, 'removeEventListener')
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview Transport
 */

/**
 * @augments SIP
 * @class Transport
 * @param {SIP.UA} ua
 * @param {Object} server ws_server Object
 */

module.exports = function (SIP, WebSocket) {
  var Transport,
      C = {
    // Transport status codes
    STATUS_READY: 0,
    STATUS_DISCONNECTED: 1,
    STATUS_ERROR: 2
  };

  /**
   * Compute an amount of time in seconds to wait before sending another
   * keep-alive.
   * @returns {Number}
   */
  function computeKeepAliveTimeout(upperBound) {
    var lowerBound = upperBound * 0.8;
    return 1000 * (Math.random() * (upperBound - lowerBound) + lowerBound);
  }

  Transport = function Transport(ua, server) {

    this.logger = ua.getLogger('sip.transport');
    this.ua = ua;
    this.ws = null;
    this.server = server;
    this.reconnection_attempts = 0;
    this.closed = false;
    this.connected = false;
    this.reconnectTimer = null;
    this.lastTransportError = {};

    this.keepAliveInterval = ua.configuration.keepAliveInterval;
    this.keepAliveTimeout = null;
    this.keepAliveTimer = null;

    this.ua.transport = this;

    // Connect
    this.connect();
  };

  Transport.prototype = {
    /**
     * Send a message.
     * @param {SIP.OutgoingRequest|String} msg
     * @returns {Boolean}
     */
    send: function send(msg) {
      var message = msg.toString();

      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        if (this.ua.configuration.traceSip === true) {
          this.logger.log('sending WebSocket message:\n\n' + message + '\n');
        }
        this.ws.send(message);
        return true;
      } else {
        this.logger.warn('unable to send message, WebSocket is not open');
        return false;
      }
    },

    /**
     * Send a keep-alive (a double-CRLF sequence).
     * @private
     * @returns {Boolean}
     */
    sendKeepAlive: function sendKeepAlive() {
      if (this.keepAliveTimeout) {
        return;
      }

      this.keepAliveTimeout = SIP.Timers.setTimeout(function () {
        this.ua.emit('keepAliveTimeout');
      }.bind(this), 10000);

      return this.send('\r\n\r\n');
    },

    /**
     * Start sending keep-alives.
     * @private
     */
    startSendingKeepAlives: function startSendingKeepAlives() {
      if (this.keepAliveInterval && !this.keepAliveTimer) {
        this.keepAliveTimer = SIP.Timers.setTimeout(function () {
          this.sendKeepAlive();
          this.keepAliveTimer = null;
          this.startSendingKeepAlives();
        }.bind(this), computeKeepAliveTimeout(this.keepAliveInterval));
      }
    },

    /**
     * Stop sending keep-alives.
     * @private
     */
    stopSendingKeepAlives: function stopSendingKeepAlives() {
      SIP.Timers.clearTimeout(this.keepAliveTimer);
      SIP.Timers.clearTimeout(this.keepAliveTimeout);
      this.keepAliveTimer = null;
      this.keepAliveTimeout = null;
    },

    /**
    * Disconnect socket.
    */
    disconnect: function disconnect() {
      if (this.ws) {
        // Clear reconnectTimer
        SIP.Timers.clearTimeout(this.reconnectTimer);

        this.stopSendingKeepAlives();

        this.closed = true;
        this.logger.log('closing WebSocket ' + this.server.ws_uri);
        this.ws.close();
        this.ws = null;
      }

      if (this.reconnectTimer !== null) {
        SIP.Timers.clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
        this.ua.emit('disconnected', {
          transport: this,
          code: this.lastTransportError.code,
          reason: this.lastTransportError.reason
        });
      }
    },

    /**
    * Connect socket.
    */
    connect: function connect() {
      var transport = this;

      if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
        this.logger.log('WebSocket ' + this.server.ws_uri + ' is already connected');
        return false;
      }

      if (this.ws) {
        this.ws.close();
        this.ws = null;
      }

      this.logger.log('connecting to WebSocket ' + this.server.ws_uri);
      this.ua.onTransportConnecting(this, this.reconnection_attempts === 0 ? 1 : this.reconnection_attempts);

      try {
        this.ws = new WebSocket(this.server.ws_uri, 'sip');
      } catch (e) {
        this.logger.warn('error connecting to WebSocket ' + this.server.ws_uri + ': ' + e);
      }

      this.ws.binaryType = 'arraybuffer';

      this.ws.onopen = function () {
        transport.onOpen();
      };

      this.ws.onclose = function (e) {
        transport.onClose(e);
        // Always cleanup. Eases GC, prevents potential memory leaks.
        this.onopen = null;
        this.onclose = null;
        this.onmessage = null;
        this.onerror = null;
      };

      this.ws.onmessage = function (e) {
        transport.onMessage(e);
      };

      this.ws.onerror = function (e) {
        transport.onError(e);
      };
    },

    // Transport Event Handlers

    /**
    * @event
    * @param {event} e
    */
    onOpen: function onOpen() {
      this.connected = true;

      this.logger.log('WebSocket ' + this.server.ws_uri + ' connected');
      // Clear reconnectTimer since we are not disconnected
      if (this.reconnectTimer !== null) {
        SIP.Timers.clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      // Reset reconnection_attempts
      this.reconnection_attempts = 0;
      // Disable closed
      this.closed = false;
      // Trigger onTransportConnected callback
      this.ua.onTransportConnected(this);
      // Start sending keep-alives
      this.startSendingKeepAlives();
    },

    /**
    * @event
    * @param {event} e
    */
    onClose: function onClose(e) {
      var connected_before = this.connected;

      this.lastTransportError.code = e.code;
      this.lastTransportError.reason = e.reason;

      this.stopSendingKeepAlives();

      if (this.reconnection_attempts > 0) {
        this.logger.log('Reconnection attempt ' + this.reconnection_attempts + ' failed (code: ' + e.code + (e.reason ? '| reason: ' + e.reason : '') + ')');
        this.reconnect();
      } else {
        this.connected = false;
        this.logger.log('WebSocket disconnected (code: ' + e.code + (e.reason ? '| reason: ' + e.reason : '') + ')');

        if (e.wasClean === false) {
          this.logger.warn('WebSocket abrupt disconnection');
        }
        // Transport was connected
        if (connected_before === true) {
          this.ua.onTransportClosed(this);
          // Check whether the user requested to close.
          if (!this.closed) {
            this.reconnect();
          } else {
            this.ua.emit('disconnected', {
              transport: this,
              code: this.lastTransportError.code,
              reason: this.lastTransportError.reason
            });
          }
        } else {
          // This is the first connection attempt
          //Network error
          this.ua.onTransportError(this);
        }
      }
    },

    /**
    * @event
    * @param {event} e
    */
    onMessage: function onMessage(e) {
      var message,
          transaction,
          data = e.data;

      // CRLF Keep Alive response from server. Ignore it.
      if (data === '\r\n') {
        SIP.Timers.clearTimeout(this.keepAliveTimeout);
        this.keepAliveTimeout = null;

        if (this.ua.configuration.traceSip === true) {
          this.logger.log('received WebSocket message with CRLF Keep Alive response');
        }

        return;
      }

      // WebSocket binary message.
      else if (typeof data !== 'string') {
          try {
            data = String.fromCharCode.apply(null, new Uint8Array(data));
          } catch (evt) {
            this.logger.warn('received WebSocket binary message failed to be converted into string, message discarded');
            return;
          }

          if (this.ua.configuration.traceSip === true) {
            this.logger.log('received WebSocket binary message:\n\n' + data + '\n');
          }
        }

        // WebSocket text message.
        else {
            if (this.ua.configuration.traceSip === true) {
              this.logger.log('received WebSocket text message:\n\n' + data + '\n');
            }
          }

      message = SIP.Parser.parseMessage(data, this.ua);

      if (!message) {
        return;
      }

      if (this.ua.status === SIP.UA.C.STATUS_USER_CLOSED && message instanceof SIP.IncomingRequest) {
        return;
      }

      // Do some sanity check
      if (SIP.sanityCheck(message, this.ua, this)) {
        if (message instanceof SIP.IncomingRequest) {
          message.transport = this;
          this.ua.receiveRequest(message);
        } else if (message instanceof SIP.IncomingResponse) {
          /* Unike stated in 18.1.2, if a response does not match
          * any transaction, it is discarded here and no passed to the core
          * in order to be discarded there.
          */
          switch (message.method) {
            case SIP.C.INVITE:
              transaction = this.ua.transactions.ict[message.via_branch];
              if (transaction) {
                transaction.receiveResponse(message);
              }
              break;
            case SIP.C.ACK:
              // Just in case ;-)
              break;
            default:
              transaction = this.ua.transactions.nict[message.via_branch];
              if (transaction) {
                transaction.receiveResponse(message);
              }
              break;
          }
        }
      }
    },

    /**
    * @event
    * @param {event} e
    */
    onError: function onError(e) {
      this.logger.warn('WebSocket connection error: ');
      this.logger.warn(e);
    },

    /**
    * Reconnection attempt logic.
    * @private
    */
    reconnect: function reconnect() {
      var transport = this;

      this.reconnection_attempts += 1;

      if (this.reconnection_attempts > this.ua.configuration.wsServerMaxReconnection) {
        this.logger.warn('maximum reconnection attempts for WebSocket ' + this.server.ws_uri);
        this.ua.onTransportError(this);
      } else if (this.reconnection_attempts === 1) {
        this.logger.log('Connection to WebSocket ' + this.server.ws_uri + ' severed, attempting first reconnect');
        transport.connect();
      } else {
        this.logger.log('trying to reconnect to WebSocket ' + this.server.ws_uri + ' (reconnection attempt ' + this.reconnection_attempts + ')');

        this.reconnectTimer = SIP.Timers.setTimeout(function () {
          transport.connect();
          transport.reconnectTimer = null;
        }, this.ua.configuration.wsServerReconnectionTimeout * 1000);
      }
    }
  };

  Transport.C = C;
  return Transport;
};

/***/ })
/******/ ]);
});
/* ---------- */
/*!
 * EventEmitter v5.2.4 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */
!function(e){"use strict";function t(){}function n(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function r(e){return function(){return this[e].apply(this,arguments)}}function i(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&i(e.listener)}var s=t.prototype,o=e.EventEmitter;s.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp){t={};for(n in r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n])}else t=r[e]||(r[e]=[]);return t},s.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},s.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},s.addListener=function(e,t){if(!i(t))throw new TypeError("listener must be a function");var r,s=this.getListenersAsObject(e),o="object"==typeof t;for(r in s)s.hasOwnProperty(r)&&n(s[r],t)===-1&&s[r].push(o?t:{listener:t,once:!1});return this},s.on=r("addListener"),s.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},s.once=r("addOnceListener"),s.defineEvent=function(e){return this.getListeners(e),this},s.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},s.removeListener=function(e,t){var r,i,s=this.getListenersAsObject(e);for(i in s)s.hasOwnProperty(i)&&(r=n(s[i],t),r!==-1&&s[i].splice(r,1));return this},s.off=r("removeListener"),s.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},s.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},s.manipulateListeners=function(e,t,n){var r,i,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(r=n.length;r--;)s.call(this,t,n[r]);else for(r in t)t.hasOwnProperty(r)&&(i=t[r])&&("function"==typeof i?s.call(this,r,i):o.call(this,r,i));return this},s.removeEvent=function(e){var t,n=typeof e,r=this._getEvents();if("string"===n)delete r[e];else if(e instanceof RegExp)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},s.removeAllListeners=r("removeEvent"),s.emitEvent=function(e,t){var n,r,i,s,o,u=this.getListenersAsObject(e);for(s in u)if(u.hasOwnProperty(s))for(n=u[s].slice(0),i=0;i<n.length;i++)r=n[i],r.once===!0&&this.removeListener(e,r.listener),o=r.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},s.trigger=r("emitEvent"),s.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},s.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},s._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},s._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return e.EventEmitter=o,t},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:e.EventEmitter=t}(this||{});
/* ---------- */
/*! Localize - v0.1.0 - 2015-10-12
 * https://github.com/coderifous/jquery-localize
 * Copyright (c) 2015 coderifous; Licensed MIT */
!function(a){var b;return b=function(a){return a=a.replace(/_/,"-").toLowerCase(),a.length>3&&(a=a.substring(0,3)+a.substring(3).toUpperCase()),a},a.defaultLanguage=b(navigator.language||navigator.userLanguage),a.localize=function(c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;return null==d&&(d={}),u=this,g={},f=d.fileExtension||"json",j=function(a,b,c){var e;switch(null==c&&(c=1),c){case 1:return g={},d.loadBase?(e=a+("."+f),h(e,a,b,c)):j(a,b,2);case 2:if(b.length>=2)return e=""+a+"-"+b.substring(0,2)+"."+f,h(e,a,b,c);break;case 3:if(b.length>=5)return e=""+a+"-"+b.substring(0,5)+"."+f,h(e,a,b,c)}},h=function(b,c,e,f){var h,i,k;return null!=d.pathPrefix&&(b=""+d.pathPrefix+"/"+b),k=function(b){return a.extend(g,b),p(g),j(c,e,f+1)},i=function(){return d.fallback&&d.fallback!==e?j(c,d.fallback):void 0},h={url:b,dataType:"json",async:!1,timeout:null!=d.timeout?d.timeout:500,success:k,error:i},"file:"===window.location.protocol&&(h.error=function(b){return k(a.parseJSON(b.responseText))}),a.ajax(h)},p=function(a){return null!=d.callback?d.callback(a,e):e(a)},e=function(b){return a.localize.data[c]=b,u.each(function(){var c,d,e;return c=a(this),d=c.data("localize"),d||(d=c.attr("rel").match(/localize\[(.*?)\]/)[1]),e=t(d,b),null!=e?k(c,d,e):void 0})},k=function(b,c,d){return b.is("input")?n(b,c,d):b.is("textarea")?n(b,c,d):b.is("img")?m(b,c,d):b.is("optgroup")?o(b,c,d):a.isPlainObject(d)||b.html(d),a.isPlainObject(d)?l(b,d):void 0},n=function(b,c,d){var e;return e=a.isPlainObject(d)?d.value:d,b.is("[placeholder]")?b.attr("placeholder",e):b.val(e)},l=function(a,b){return r(a,"title",b),r(a,"href",b),s(a,"text",b)},o=function(a,b,c){return a.attr("label",c)},m=function(a,b,c){return r(a,"alt",c),r(a,"src",c)},t=function(a,b){var c,d,e,f;for(c=a.split(/\./),d=b,e=0,f=c.length;f>e;e++)a=c[e],d=null!=d?d[a]:null;return d},r=function(a,b,c){return c=t(b,c),null!=c?a.attr(b,c):void 0},s=function(a,b,c){return c=t(b,c),null!=c?a.text(c):void 0},q=function(a){var b;return"string"==typeof a?"^"+a+"$":null!=a.length?function(){var c,d,e;for(e=[],c=0,d=a.length;d>c;c++)b=a[c],e.push(q(b));return e}().join("|"):a},i=b(d.language?d.language:a.defaultLanguage),d.skipLanguage&&i.match(q(d.skipLanguage))||j(c,i,1),u},a.fn.localize=a.localize,a.localize.data={}}(jQuery);
