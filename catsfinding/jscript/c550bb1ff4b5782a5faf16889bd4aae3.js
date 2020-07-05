
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],"__proto__"!==d&&g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;d<c;d++)if(!1===b.call(a[d],d,a[d]))break}else for(d in a)if(!1===b.call(a[d],d,a[d]))break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?c<0?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(d<c)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)(d=!b(a[f],f))!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;g<d;g++)null!=(e=b(a[g],g,c))&&h.push(e);else for(g in a)null!=(e=b(a[g],g,c))&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;if("string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a))return c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"!==c&&!n.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=fa(),z=fa(),A=fa(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(xa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ea(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+pa(r[h]);s=r.join(","),w=_.test(a)&&na(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function fa(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ga(a){return a[u]=!0,a}function ha(a){var b=n.createElement("div");try{return!!a(b)}catch(xa){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ia(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ja(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ka(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function la(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ma(a){return ga(function(b){return b=+b,ga(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function na(a){return a&&void 0!==a.getElementsByTagName&&a}c=ea.support={},f=ea.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ea.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ha(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ha(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ha(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(void 0!==b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c=void 0!==a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return void 0!==b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if(void 0!==b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ha(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ha(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ha(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d||(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ja(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ja(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ea.matches=function(a,b){return ea(a,null,null,b)},ea.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(xa){}return ea(b,n,null,[a]).length>0},ea.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ea.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ea.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ea.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ea.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ea.selectors={cacheLength:50,createPseudo:ga,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ea.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ea.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||void 0!==a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ea.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),!1===t)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return(t-=e)===d||t%d==0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ea.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ga(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ga(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ga(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ga(function(a){return function(b){return ea(a,b).length>0}}),contains:ga(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ga(function(a){return V.test(a||"")||ea.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ma(function(){return[0]}),last:ma(function(a,b){return[b-1]}),eq:ma(function(a,b,c){return[c<0?c+b:c]}),even:ma(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:ma(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:ma(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:ma(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ka(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=la(b);function oa(){}oa.prototype=d.filters=d.pseudos,d.setFilters=new oa,g=ea.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ea.error(a):z(a,i).slice(0)};function pa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function qa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function ra(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sa(a,b,c){for(var d=0,e=b.length;d<e;d++)ea(a,b[d],c);return c}function ta(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function ua(a,b,c,d,e,f){return d&&!d[u]&&(d=ua(d)),e&&!e[u]&&(e=ua(e,f)),ga(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||sa(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ta(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ta(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ta(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function va(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=qa(function(a){return a===b},h,!0),l=qa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[qa(ra(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return ua(i>1&&ra(m),i>1&&pa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,i<e&&va(a.slice(i,e)),e<f&&va(a=a.slice(e)),e<f&&pa(a))}m.push(c)}return ra(m)}function wa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ta(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ea.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ga(f):f}return h=ea.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=va(b[c]),f[u]?d.push(f):e.push(f);f=A(a,wa(e,d)),f.selector=a}return f},i=ea.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(!(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0]))return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&na(b.parentNode)||b))){if(j.splice(i,1),!(a=f.length&&pa(j)))return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&na(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ha(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ha(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ia("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ha(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ia("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ha(function(a){return null==a.getAttribute("disabled")})||ia(K,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ea}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;b<e;b++)if(n.contains(d[b],this))return!0}));for(b=0;b<e;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(!(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a))||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if((f=d.getElementById(e[2]))&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))}).prototype=n.fn,A=n(d);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do{a=a[b]}while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.uniqueSort(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g;function G(a){var b={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)!1===f[h].apply(c[0],c[1])&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function b(c){n.each(c,function(c,d){n.isFunction(d)?a.unique&&j.has(d)||f.push(d):d&&d.length&&"string"!==n.type(d)&&b(d)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);b<d;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(!0===a?--n.readyWait:n.isReady)||(n.isReady=!0,!0!==a&&--n.readyWait>0||(H.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function I(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J)):(d.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(I(),n.ready())}n.ready.promise=function(b){if(!H)if(H=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J);else{d.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&function b(){if(!n.isReady){try{c.doScroll("left")}catch(e){return a.setTimeout(b,50)}I(),n.ready()}}()}return H.promise(b)},n.ready.promise();var K;for(K in n(l))break;l.ownFirst="0"===K,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;(c=d.getElementsByTagName("body")[0])&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),void 0!==b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var L=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return(1===c||9===c)&&(!b||!0!==b&&a.getAttribute("classid")===b)},M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if("string"==typeof(c=a.getAttribute(d))){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:M.test(c)?n.parseJSON(c):c)}catch(e){}n.data(a,b,c)}else c=void 0}return c}function P(a){var b
;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(L(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?null==(f=g[b])&&(f=g[n.camelCase(b)]):f=g,f}}function R(a,b,c){if(L(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return!!(a=a.nodeType?n.cache[a[n.expando]]:a[n.expando])&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),O(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?O(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)(c=n._data(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return(c=d.getElementsByTagName("body")[0])&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),void 0!==b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do{f=f||".5",k/=f,n.style(a,b,k+j)}while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)X(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Y=/^(?:checkbox|radio)$/i,Z=/<([\w:-]+)/,$=/^$|\/(?:java|ecma)script/i,_=/^\s+/,aa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ba(a){var b=aa.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var ca={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};ca.optgroup=ca.option,ca.tbody=ca.tfoot=ca.colgroup=ca.caption=ca.thead,ca.th=ca.td;function da(a,b){var c,d,e=0,f=void 0!==a.getElementsByTagName?a.getElementsByTagName(b||"*"):void 0!==a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,da(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function ea(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var fa=/<|&#?\w+;/,ga=/<tbody/i;function ha(a){Y.test(a.type)&&(a.defaultChecked=a.checked)}function ia(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ba(b),q=[],r=0;r<o;r++)if((g=a[r])||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(fa.test(g)){i=i||p.appendChild(b.createElement("div")),j=(Z.exec(g)||["",""])[1].toLowerCase(),m=ca[j]||ca._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&_.test(g)&&q.push(b.createTextNode(_.exec(g)[0])),!l.tbody){g="table"!==j||ga.test(g)?"<table>"!==m[1]||ga.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(da(q,"input"),ha),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=da(p.appendChild(g),"script"),h&&ea(i),c){f=0;while(g=i[f++])$.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=!1===e.attributes[c].expando);e=null}();var ja=/^(?:input|select|textarea)$/i,ka=/^key/,la=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ma=/^(?:focusinfocus|focusoutblur)$/,na=/^([^.]*)(?:\.(.+)|)/;function oa(){return!0}function pa(){return!1}function qa(){try{return d.activeElement}catch(a){}}function ra(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ra(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),!1===e)e=pa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return void 0===n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=na.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&!1!==j.setup.call(a,d,p,k)||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=na.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,p,r.handle)||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ma.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||!1!==l.trigger.apply(e,c))){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,ma.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),(g=h&&i[h])&&g.apply&&L(i)&&(b.result=g.apply(i,c),!1===b.result&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||!1===l._default.apply(p.pop(),c))&&L(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,a)){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,void 0!==(d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i))&&!1===(a.result=d)&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(!0!==i.disabled||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=la.test(f)?this.mouseHooks:ka.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==qa()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){if(this===qa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(n.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&(void 0===a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){if(!(this instanceof n.Event))return new n.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?oa:pa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:pa,isPropagationStopped:pa,isImmediatePropagationStopped:pa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=oa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=oa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=oa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){if(n.nodeName(this,"form"))return!1;n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){if(n.nodeName(this,"form"))return!1;n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){if(ja.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1;n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ja.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,arguments)},teardown:function(){return n.event.remove(this,"._change"),!ja.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return ra(this,a,b,c,d)},one:function(a,b,c,d){return ra(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=pa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return n.event.trigger(a,b,c,!0)}});var sa=/ jQuery\d+="(?:null|\d+)"/g,ta=new RegExp("<(?:"+aa+")[\\s/>]","i"),ua=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,va=/<script|<style|<link/i,wa=/checked\s*(?:[^=]|=\s*.checked.)/i,xa=/^true\/(.*)/,ya=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,za=ba(d),Aa=za.appendChild(d.createElement("div"));function Ba(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Ca(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Da(a){var b=xa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ea(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Fa(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Ca(b).text=a.text,Da(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Y.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ga(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&wa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ga(f,b,c,d)});if(o&&(k=ia(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(da(k,"script"),Ca),h=i.length;m<o;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,da(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Da),m=0;m<h;m++)g=i[m],$.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(ya,"")));k=e=null}return a}function Ha(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(da(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&ea(da(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ua,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ta.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Aa.innerHTML=a.outerHTML,Aa.removeChild(f=Aa.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=da(f),h=da(a),g=0;null!=(e=h[g]);++g)d[g]&&Fa(e,d[g]);if(b)if(c)for(h=h||da(a),d=d||da(f),g=0;null!=(e=h[g]);g++)Ea(e,d[g]);else Ea(a,f);return d=da(f,"script"),d.length>0&&ea(d,!i&&da(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||L(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||void 0===d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ga,detach:function(a){return Ha(this,a,!0)},remove:function(a){return Ha(this,a)},text:function(a){return X(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ga(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){Ba(this,a).appendChild(a)}})},prepend:function(){return Ga(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ba(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ga(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ga(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(da(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return X(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(sa,""):void 0;if("string"==typeof a&&!va.test(a)&&(l.htmlSerialize||!ta.test(a))&&(l.leadingWhitespace||!_.test(a))&&!ca[(Z.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(da(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ga(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(da(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;d<=h;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ia,Ja={HTML:"block",BODY:"block"};function Ka(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function La(a){var b=d,c=Ja[a];return c||(c=Ka(a,b),"none"!==c&&c||(Ia=(Ia||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ia[0].contentWindow||Ia[0].contentDocument).document,b.write(),b.close(),c=Ka(a,b),Ia.detach()),Ja[a]=c),c}var Ma=/^margin/,Na=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Oa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Pa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",(f=0===k[0].offsetHeight)&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}j.style&&(j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}}))}();var Qa,Ra,Sa=/^(top|right|bottom|left)$/;a.getComputedStyle?(Qa=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Ra=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Qa(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Na.test(g)&&Ma.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Pa.currentStyle&&(Qa=function(a){return a.currentStyle},Ra=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Qa(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Na.test(g)&&!Sa.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ta(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ua=/alpha\([^)]*\)/i,Va=/opacity\s*=\s*([^)]*)/i,Wa=/^(none|table(?!-c[ea]).+)/,Xa=new RegExp("^("+S+")(.*)$","i"),Ya={position:"absolute",visibility:"hidden",display:"block"},Za={letterSpacing:"0",fontWeight:"400"},$a=["Webkit","O","Moz","ms"],_a=d.createElement("div").style;function ab(a){if(a in _a)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=$a.length;while(c--)if((a=$a[c]+b)in _a)return a}function bb(a,b){for(var c,d,e,f=[],g=0,h=a.length;g<h;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",La(d.nodeName)))):(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;g<h;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function cb(a,b,c){var d=Xa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function db(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function eb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Qa(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(e<=0||null==e){if(e=Ra(a,b,f),(e<0||null==e)&&(e=a.style[b]),Na.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+db(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ra(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=ab(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=ab(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ra(a,b,d)),"normal"===f&&b in Za&&(f=Za[b]),""===c||c?(e=parseFloat(f),!0===c||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){if(c)return Wa.test(n.css(a,"display"))&&0===a.offsetWidth?Oa(a,Ya,function(){return eb(a,b,d)}):eb(a,b,d)},set:function(a,c,d){var e=d&&Qa(a);return cb(a,c,d?db(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Va.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Ua,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ua.test(f)?f.replace(Ua,e):f+" "+e)}}),n.cssHooks.marginRight=Ta(l.reliableMarginRight,function(a,b){if(b)return Oa(a,{display:"inline-block"},Ra,[a,"marginRight"])}),n.cssHooks.marginLeft=Ta(l.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ra(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Oa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px"}),n.each({
margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Ma.test(a)||(n.cssHooks[a+b].set=cb)}),n.fn.extend({css:function(a,b){return X(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Qa(a),e=b.length;g<e;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return bb(this,!0)},hide:function(){return bb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function fb(a,b,c,d,e){return new fb.prototype.init(a,b,c,d,e)}n.Tween=fb,fb.prototype={constructor:fb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=fb.propHooks[this.prop];return a&&a.get?a.get(this):fb.propHooks._default.get(this)},run:function(a){var b,c=fb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):fb.propHooks._default.set(this),this}},fb.prototype.init.prototype=fb.prototype,fb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},fb.propHooks.scrollTop=fb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=fb.prototype.init,n.fx.step={};var gb,hb,ib=/^(?:toggle|show|hide)$/,jb=/queueHooks$/;function kb(){return a.setTimeout(function(){gb=void 0}),gb=n.now()}function lb(a,b){var c,d={height:a},e=0;for(b=b?1:0;e<4;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function mb(a,b,c){for(var d,e=(pb.tweeners[b]||[]).concat(pb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function nb(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),"inline"===(k="none"===j?n._data(a,"olddisplay")||La(a.nodeName):j)&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==La(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ib.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?La(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=mb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function ob(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=n.cssHooks[d])&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function pb(a,b,c){var d,e,f=0,g=pb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=gb||kb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:gb||kb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(ob(k,j.opts.specialEasing);f<g;f++)if(d=pb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,mb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(pb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(F);for(var c,d=0,e=a.length;d<e;d++)c=a[d],pb.tweeners[c]=pb.tweeners[c]||[],pb.tweeners[c].unshift(b)},prefilters:[nb],prefilter:function(a,b){b?pb.prefilters.unshift(a):pb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=pb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&jb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(lb(b,!0),a,d,e)}}),n.each({slideDown:lb("show"),slideUp:lb("hide"),slideToggle:lb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(gb=n.now();c<b.length;c++)(a=b[c])()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),gb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){hb||(hb=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(hb),hb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var qb=/\r/g,rb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),(b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return(b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(qb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(rb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||e<0,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){if(n.isArray(b))return a.checked=n.inArray(n(a).val(),b)>-1}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return X(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return void 0===a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return!1===b?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){if(!c)return a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){if(!n.nodeName(a,"input"))return sb&&sb.set(a,b,c);a.defaultValue=b}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);if(d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c))return b}},ub.id=ub.name=ub.coords=function(a,b,c){var d;if(!c)return(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);if(c&&c.specified)return c.value},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""!==b&&b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return X(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(F)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(F)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||!1===a?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(!(g=j[i+" "+f]||j["* "+f]))for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}if(!0!==g)if(g&&a.throws)b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(u<2)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),x(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(F)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0==n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),!1===l.cache&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&!1!==l.contentType||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(!1===l.beforeSend.call(m,w,l)||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,x)}catch(y){if(!(u<2))throw y;x(-1,y)}}else x(-1,"No Transport");function x(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&b<300||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),(x=w.getResponseHeader("etag"))&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",b<0&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Y.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,(fc=l.ajax=!!fc)&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):!1!==b.jsonp&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ia([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType&&(a.defaultView||a.parentWindow)}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(void 0!==e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Pa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return X(this,function(a,d,e){var f=lc(a);if(void 0===e)return f?b in f?f[b]:f.document.documentElement[d]:a[d];f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ta(l.pixelPosition,function(a,c){if(c)return c=Ra(a,b),Na.test(c)?n(a).position()[b]+"px":c})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(!0===d||!0===e?"margin":"border")
;return X(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});
jQuery.noConflict();



"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);



(function($) {

    $(document).ready(function() {


        var mks_ep_modal_displayed = false;

        /* Modal open manually helper */
        $('body').on('click', '.mks-ep-trigger-open', function(e) {
            e.preventDefault();
            mks_ep_open_modal($('.mks-ep-modal'), 'click-customizer');
            mks_ep_modal_displayed = true;
        });

        if (mks_ep_can_display_modal()) {

            /* Exit trigger */
            $(document).on('mouseleave', function(e) {
                if (!mks_ep_modal_displayed && (e.pageY - $(window).scrollTop()) < 0) {
                    mks_ep_open_modal($('.mks-ep-modal'), 'exit-demo');
                    mks_ep_modal_displayed = true;
                }
            });
        }

        /* Modal close */
        $('.mks-ep-modal').on('click', 'a.mks-ep-close-modal', function(e) {
            e.preventDefault();
            mks_ep_close_modal($(this).closest('.mks-ep-modal'));
        });


        /* Test drive submit */
        $('.mks-ep-modal').on('submit', '.mks-ep-modal-test-drive-form', function(e) {
            e.preventDefault();
            var form = $(this);
            var email = form.find('.mks-ep-test-drive-email').val();
            var theme = form.find('.mks-ep-test-drive-theme').val();
            var ref = form.find('.mks-ep-test-drive-ref').val();

            if (!mks_ep_is_valid_email(email)) {
                return false;
            }

            // $.ajax({

            //     url: mks_ep_settings.ajax_url,
            //     method: 'POST',
            //     data: {
            //         action: 'mks_ep_test_drive_submit',
            //         email: email,
            //         theme: theme
            //     }

            // });

            // form.fadeOut(300, function() {
            //     $('.mks-ep-modal-test-drive-response').fadeIn(300);
            // });

            $('.mks-ep-modal-test-drive-request').fadeOut(300, function() {

                $('.mks-ep-modal-test-drive-loader').show();

                $.ajax({
                    url: mks_ep_settings.ajax_url,
                    type: "POST",
                    data: {
                        action: 'mks_ep_test_drive_submit',
                        email: email,
                        theme: theme,
                        ref: ref
                    },
                    timeout: 8000,
                    success: function(response) {

                        $('.mks-ep-modal-test-drive-loader').hide();
                        var res = JSON.parse(response);
                        if (res.success) {
                            $('.mks-ep-modal-test-drive-response-success').html(res.data);
                            $('.mks-ep-modal-test-drive-response').fadeIn(300);

                        } else {
                            $('.mks-ep-modal-test-drive-response-error').html(res.data);
                            $('.mks-ep-modal-test-drive-request').fadeIn(300);
                        }

                        // setTimeout(function() {
                        //     mks_clear_blur($('#modal-try .content-wrapper'));
                        // }, 500);

                    },

                    error: function(xmlhttprequest, textstatus, message) {

                        $('.mks-ep-modal-test-drive-loader').hide();

                        if (textstatus === 'timeout') {
                            $('.mks-ep-modal-test-drive-response-success').html('All set, thanks! We will send you an email when your website is ready, in a couple of minutes.');

                            $('.mks-ep-modal-test-drive-response').show().animate({
                                opacity: 1
                            }, 300);

                        } else {
                            $('.mks-ep-modal-test-drive-response-error').html(message);
                            $('.mks-ep-modal-test-drive-request').fadeIn(300);
                        }

                        // setTimeout(function() {
                        //     mks_clear_blur($('#modal-try .content-wrapper'));
                        // }, 500);


                    }
                });
            });
        });

    });

    /* Check if we modal should be displayed */
    function mks_ep_can_display_modal() {

        if (!mks_ep_is_desktop() || mks_ep_in_iframe() || !$('.mks-ep-modal').length || mks_ep_read_cookie('mks_exit_' + $('.mks-ep-test-drive-theme').val())) {
            return false;
        }

        // if (!mks_ep_is_desktop() || mks_ep_in_iframe() || !$('.mks-ep-modal').length) {
        //   return false;
        // }

        return true;

    }


    /* Close modal */
    function mks_ep_close_modal(obj) {
        obj.removeClass('active');
        $('body, html').removeClass('mks-ep-modal-open');
    }



    /* Open modal */
    function mks_ep_open_modal(obj, ref) {

        var window_height = $(window).height();

        obj.css('height', window_height + 'px').css('top', $(window).scrollTop() + 'px').addClass('active');

        $('body, html').addClass('mks-ep-modal-open');
        $('.mks-ep-modal-test-drive-response').hide();
        $('.mks-ep-modal-test-drive-request').show();

        //mks_ep_center(obj.find('.mks-ep-section'));

        $('.mks-ep-test-drive-ref').val(ref);

        var cookie_name = 'mks_exit_' + obj.find('.mks-ep-test-drive-theme').val();

        if (!mks_ep_read_cookie(cookie_name)) {
            mks_ep_create_cookie(cookie_name, true, 30);
        }

    }



    /* Is in iFrame */
    function mks_ep_in_iframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }


    /* Check if is desktop */
    function mks_ep_is_desktop() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return false;
        }

        return true;
    }


    /* Create cookie */
    function mks_ep_create_cookie(name, value, days) {
        var expires;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }


    /* Read/check cookie */
    function mks_ep_read_cookie(name) {
        var nameEQ = encodeURIComponent(name) + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }


    /* Delete cookie */
    function mks_ep_erase_cookie(name) {
        createCookie(name, "", -1);
    }


    /* Validate email */
    function mks_ep_is_valid_email(email) {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(email)) {
            return true;

        }

        return false;
    }

    /* Function to center elements */
    function mks_ep_center(obj) {

        var parent_height = obj.parent().height();
        var obj_height = obj.height();

        if (parent_height > obj_height + 80) {
            obj.css("position", "absolute");
            obj.css("top", ((parent_height - obj_height) / 2) + "px");
        } else {
            obj.css("padding-top", '40px').css("padding-bottom", '40px');
        }



    }



})(jQuery);



(function($) {
    $(document).ready(function($) {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

            $("body").on("touchstart", ".mks_accordion_heading", function(e) {
                mks_accordion_handle($(this));
            });

            $("body").on("touchstart", ".mks_toggle_heading", function(e) {
                mks_toggle_handle($(this));
            });


            $("body").on("touchstart", ".mks_tabs_nav .mks_tab_nav_item", function(e) {
                mks_tab_handle($(this));
            });

        } else {

            $("body").on("click", ".mks_accordion_heading", function(e) {
                mks_accordion_handle($(this));
            });


            $("body").on("click", ".mks_toggle_heading", function(e) {
                mks_toggle_handle($(this));
            });


            $("body").on("click", ".mks_tabs_nav .mks_tab_nav_item", function(e) {
                mks_tab_handle($(this));
            });
        }

        /* Initialize tabs */
        $('.mks_tabs').each(function() {

            var tabs_nav = $(this).find('.mks_tabs_nav');

            $(this).find('.mks_tab_item').each(function() {
                tabs_nav.append('<div class="mks_tab_nav_item">' + $(this).find('.nav').html() + '</div>');
                $(this).find('.nav').remove();

            });

            $(this).find('.mks_tabs_nav').find('.mks_tab_nav_item:first').addClass('active');
            $(this).find('.mks_tab_item').hide();
            $(this).find('.mks_tab_item:first').show();
            $(this).show();

        });


    });

    function mks_accordion_handle($obj) {
        var toggle = $obj.parent('.mks_accordion_item');
        if (!toggle.hasClass('mks_accordion_active')) {
            toggle.parent('div').find('.mks_accordion_item').find('.mks_accordion_content:visible').slideUp("fast");
            toggle.parent('div').find('.mks_accordion_active').removeClass('mks_accordion_active');
            toggle.find('.mks_accordion_content').slideToggle("fast", function() {
                toggle.addClass('mks_accordion_active');
                if ((toggle.offset().top + 100) < $(window).scrollTop()) {
                    $('html, body').stop().animate({
                        scrollTop: (toggle.offset().top - 100)
                    }, '300');
                }
            });
        } else {
            toggle.parent('div').find('.mks_accordion_item').find('.mks_accordion_content:visible').slideUp("fast");
            toggle.parent('div').find('.mks_accordion_active').removeClass('mks_accordion_active');
        }
    }

    function mks_toggle_handle($obj) {
        var toggle = $obj.parent('.mks_toggle');
        toggle.find('.mks_toggle_content').slideToggle("fast", function() {
            toggle.toggleClass('mks_toggle_active');
        });
    }

    function mks_tab_handle($obj) {
        if ($obj.hasClass('active') == false) {

            tab_to_show = $obj.parent('.mks_tabs_nav').find('.mks_tab_nav_item').index($obj);

            $obj.parent('.mks_tabs_nav').parent('.mks_tabs').find('.mks_tab_item').hide();
            $obj.parent('.mks_tabs_nav').parent('.mks_tabs').find('.mks_tab_item').eq(tab_to_show).show();

            $obj.parent('.mks_tabs_nav').find('.mks_tab_nav_item').removeClass('active');
            $obj.addClass('active');

        }
    }

})(jQuery);



jQuery(document).ready(function(){});



!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&n.message!==undefined?n.message:undefined;if(!(n=e.extend({},e.blockUI.defaults,n||{})).ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=y===undefined?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,g={};e(t).data("blockUI.history",g),g.el=m,g.parent=m.parentNode,g.display=m.style.display,g.position=m.style.position,g.parent&&g.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var v,I,w,U,x=n.baseZ;v=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x+++';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&v.css("opacity",0);var C=[v,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=a(t,"borderTopWidth"),T=a(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(n.css&&n.css.top?parseInt(n.css.top,10):0)+') + "px"';o.setExpression("top",i)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&v.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):d(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,d=e(t),a=d.data("blockUI.history"),c=d.data("blockUI.timeout");c&&(clearTimeout(c),d.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=d.data("blockUI.onUnblock"),d.removeData("blockUI.onUnblock"));var r;r=l?e(document.body).children().filter(".blockUI").add("body > .blockUI"):d.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0==--s&&n(r,a,o,t)})):n(r,a,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),d=l.width(),a=l[0].style.width;l.width(d-1).width(d),l[0].style.width=a}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var d="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(d,n,s):e(document).unbind(d,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,d=e(t.target);return d.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),d.parents("div."+s.blockMsgClass).length>0||0===d.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[!0===e?b.length-1:0];t&&t.focus()}}function d(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-a(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-a(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function a(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),n===undefined&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();



jQuery(function(o){if("undefined"==typeof wc_add_to_cart_params)return!1;function t(){this.requests=[],this.addRequest=this.addRequest.bind(this),this.run=this.run.bind(this),o(document.body).on("click",".add_to_cart_button",{addToCartHandler:this},this.onAddToCart).on("click",".remove_from_cart_button",{addToCartHandler:this},this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("added_to_cart removed_from_cart",{addToCartHandler:this},this.updateFragments)}t.prototype.addRequest=function(t){this.requests.push(t),1===this.requests.length&&this.run()},t.prototype.run=function(){var t=this,a=t.requests[0].complete;t.requests[0].complete=function(){"function"==typeof a&&a(),t.requests.shift(),0<t.requests.length&&t.run()},o.ajax(this.requests[0])},t.prototype.onAddToCart=function(t){var a=o(this);if(a.is(".ajax_add_to_cart")){if(!a.attr("data-product_id"))return!0;t.preventDefault(),a.removeClass("added"),a.addClass("loading");var r={};o.each(a.data(),function(t,a){r[t]=a}),o(document.body).trigger("adding_to_cart",[a,r]),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),data:r,success:function(t){t&&(t.error&&t.product_url?window.location=t.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?o(document.body).trigger("added_to_cart",[t.fragments,t.cart_hash,a]):window.location=wc_add_to_cart_params.cart_url)},dataType:"json"})}},t.prototype.onRemoveFromCart=function(t){var a=o(this),r=a.closest(".woocommerce-mini-cart-item");t.preventDefault(),r.block({message:null,overlayCSS:{opacity:.6}}),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),data:{cart_item_key:a.data("cart_item_key")},success:function(t){t&&t.fragments?o(document.body).trigger("removed_from_cart",[t.fragments,t.cart_hash,a]):window.location=a.attr("href")},error:function(){window.location=a.attr("href")},dataType:"json"})},t.prototype.updateButton=function(t,a,r,e){(e=void 0!==e&&e)&&(e.removeClass("loading"),e.addClass("added"),wc_add_to_cart_params.is_cart||0!==e.parent().find(".added_to_cart").length||e.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),o(document.body).trigger("wc_cart_button_updated",[e]))},t.prototype.updateFragments=function(t,a){a&&(o.each(a,function(t){o(t).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),o.each(a,function(t,a){o(t).replaceWith(a),o(t).stop(!0).css("opacity","1").unblock()}),o(document.body).trigger("wc_fragments_loaded"))},new t});



!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});



jQuery(function(i){i(".woocommerce-ordering").on("change","select.orderby",function(){i(this).closest("form").submit()}),i("input.qty:not(.product-quantity input.qty)").each(function(){var e=parseFloat(i(this).attr("min"));0<=e&&parseFloat(i(this).val())<e&&i(this).val(e)});var o="store_notice"+(i(".woocommerce-store-notice").data("notice-id")||"");"hidden"===Cookies.get(o)?i(".woocommerce-store-notice").hide():i(".woocommerce-store-notice").show(),i(".woocommerce-store-notice__dismiss-link").click(function(e){Cookies.set(o,"hidden",{path:"/"}),i(".woocommerce-store-notice").hide(),e.preventDefault()}),i(document.body).on("click",function(){i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),i(".woocommerce-input-wrapper").on("click",function(e){e.stopPropagation()}),i(".woocommerce-input-wrapper :input").on("keydown",function(e){var o=i(this).parent().find("span.description");if(27===e.which&&o.length&&o.is(":visible"))return o.prop("aria-hidden",!0).slideUp(250),e.preventDefault(),!1}).on("click focus",function(){var e=i(this).parent(),o=e.find("span.description");e.addClass("currentTarget"),i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),o.length&&o.is(":hidden")&&o.prop("aria-hidden",!1).slideDown(250),e.removeClass("currentTarget")}),i.scroll_to_notices=function(e){e.length&&i("html, body").animate({scrollTop:e.offset().top-100},1e3)}});



jQuery(function(r){if("undefined"==typeof wc_cart_fragments_params)return!1;var t=!0,o=wc_cart_fragments_params.cart_hash_key;try{t="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(f){t=!1}function a(){t&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function s(e){t&&(localStorage.setItem(o,e),sessionStorage.setItem(o,e))}var e={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",data:{time:(new Date).getTime()},timeout:wc_cart_fragments_params.request_timeout,success:function(e){e&&e.fragments&&(r.each(e.fragments,function(e,t){r(e).replaceWith(t)}),t&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(e.fragments)),s(e.cart_hash),e.cart_hash&&a()),r(document.body).trigger("wc_fragments_refreshed"))},error:function(){r(document.body).trigger("wc_fragments_ajax_error")}};function n(){r.ajax(e)}if(t){var i=null;r(document.body).on("wc_fragment_refresh updated_wc_div",function(){n()}),r(document.body).on("added_to_cart removed_from_cart",function(e,t,r){var n=sessionStorage.getItem(o);null!==n&&n!==undefined&&""!==n||a(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(t)),s(r)}),r(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(n,864e5)}),r(window).on("storage onstorage",function(e){o===e.originalEvent.key&&localStorage.getItem(o)!==sessionStorage.getItem(o)&&n()}),r(window).on("pageshow",function(e){e.originalEvent.persisted&&(r(".widget_shopping_cart_content").empty(),r(document.body).trigger("wc_fragment_refresh"))});try{var c=r.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(o),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=1*m+864e5,w=(new Date).getTime();if(d<w)throw"Fragment expired";i=setTimeout(n,d-w)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";r.each(c,function(e,t){r(e).replaceWith(t)}),r(document.body).trigger("wc_fragments_loaded")}catch(f){n()}}else n();0<Cookies.get("woocommerce_items_in_cart")?r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),r(document.body).on("adding_to_cart",function(){r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()}),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.widgetsPreview&&wp.customize.widgetsPreview.WidgetPartial&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){n()})});



/* Minit: https://demo.mekshq.com/trawell/wp-content/plugins/meks-easy-maps/public/js/infoBox.js */
/**
 * @name InfoBox
 * @version 1.1.13 [March 19, 2014]
 * @author Gary Little (inspired by proof-of-concept code from Pamela Fox of Google)
 * @copyright Copyright 2010 Gary Little [gary at luxcentral.com]
 * @fileoverview InfoBox extends the Google Maps JavaScript API V3 <tt>OverlayView</tt> class.
 *  <p>
 *  An InfoBox behaves like a <tt>google.maps.InfoWindow</tt>, but it supports several
 *  additional properties for advanced styling. An InfoBox can also be used as a map label.
 *  <p>
 *  An InfoBox also fires the same events as a <tt>google.maps.InfoWindow</tt>.
 */

/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true */
/*global google */

/**
 * @name InfoBoxOptions
 * @class This class represents the optional parameter passed to the {@link InfoBox} constructor.
 * @property {string|Node} content The content of the InfoBox (plain text or an HTML DOM node).
 * @property {boolean} [disableAutoPan=false] Disable auto-pan on <tt>open</tt>.
 * @property {number} maxWidth The maximum width (in pixels) of the InfoBox. Set to 0 if no maximum.
 * @property {Size} pixelOffset The offset (in pixels) from the top left corner of the InfoBox
 *  (or the bottom left corner if the <code>alignBottom</code> property is <code>true</code>)
 *  to the map pixel corresponding to <tt>position</tt>.
 * @property {LatLng} position The geographic location at which to display the InfoBox.
 * @property {number} zIndex The CSS z-index style value for the InfoBox.
 *  Note: This value overrides a zIndex setting specified in the <tt>boxStyle</tt> property.
 * @property {string} [boxClass="infoBox"] The name of the CSS class defining the styles for the InfoBox container.
 * @property {Object} [boxStyle] An object literal whose properties define specific CSS
 *  style values to be applied to the InfoBox. Style values defined here override those that may
 *  be defined in the <code>boxClass</code> style sheet. If this property is changed after the
 *  InfoBox has been created, all previously set styles (except those defined in the style sheet)
 *  are removed from the InfoBox before the new style values are applied.
 * @property {string} closeBoxMargin The CSS margin style value for the close box.
 *  The default is "2px" (a 2-pixel margin on all sides).
 * @property {string} closeBoxURL The URL of the image representing the close box.
 *  Note: The default is the URL for Google's standard close box.
 *  Set this property to "" if no close box is required.
 * @property {Size} infoBoxClearance Minimum offset (in pixels) from the InfoBox to the
 *  map edge after an auto-pan.
 * @property {boolean} [isHidden=false] Hide the InfoBox on <tt>open</tt>.
 *  [Deprecated in favor of the <tt>visible</tt> property.]
 * @property {boolean} [visible=true] Show the InfoBox on <tt>open</tt>.
 * @property {boolean} alignBottom Align the bottom left corner of the InfoBox to the <code>position</code>
 *  location (default is <tt>false</tt> which means that the top left corner of the InfoBox is aligned).
 * @property {string} pane The pane where the InfoBox is to appear (default is "floatPane").
 *  Set the pane to "mapPane" if the InfoBox is being used as a map label.
 *  Valid pane names are the property names for the <tt>google.maps.MapPanes</tt> object.
 * @property {boolean} enableEventPropagation Propagate mousedown, mousemove, mouseover, mouseout,
 *  mouseup, click, dblclick, touchstart, touchend, touchmove, and contextmenu events in the InfoBox
 *  (default is <tt>false</tt> to mimic the behavior of a <tt>google.maps.InfoWindow</tt>). Set
 *  this property to <tt>true</tt> if the InfoBox is being used as a map label.
 */

/**
 * Creates an InfoBox with the options specified in {@link InfoBoxOptions}.
 *  Call <tt>InfoBox.open</tt> to add the box to the map.
 * @constructor
 * @param {InfoBoxOptions} [opt_opts]
 */
function InfoBox(opt_opts) {

  opt_opts = opt_opts || {};

  google.maps.OverlayView.apply(this, arguments);

  // Standard options (in common with google.maps.InfoWindow):
  //
  this.content_ = opt_opts.content || "";
  this.disableAutoPan_ = opt_opts.disableAutoPan || false;
  this.maxWidth_ = opt_opts.maxWidth || 0;
  this.pixelOffset_ = opt_opts.pixelOffset || new google.maps.Size(0, 0);
  this.position_ = opt_opts.position || new google.maps.LatLng(0, 0);
  this.zIndex_ = opt_opts.zIndex || null;

  // Additional options (unique to InfoBox):
  //
  this.boxClass_ = opt_opts.boxClass || "infoBox";
  this.boxStyle_ = opt_opts.boxStyle || {};
  this.closeBoxMargin_ = opt_opts.closeBoxMargin || "2px";
  this.closeBoxURL_ = opt_opts.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif";
  if (opt_opts.closeBoxURL === "") {
    this.closeBoxURL_ = "";
  }
  this.infoBoxClearance_ = opt_opts.infoBoxClearance || new google.maps.Size(1, 1);

  if (typeof opt_opts.visible === "undefined") {
    if (typeof opt_opts.isHidden === "undefined") {
      opt_opts.visible = true;
    } else {
      opt_opts.visible = !opt_opts.isHidden;
    }
  }
  this.isHidden_ = !opt_opts.visible;

  this.alignBottom_ = opt_opts.alignBottom || false;
  this.pane_ = opt_opts.pane || "floatPane";
  this.enableEventPropagation_ = opt_opts.enableEventPropagation || false;

  this.div_ = null;
  this.closeListener_ = null;
  this.moveListener_ = null;
  this.mapListener_ = null;
  this.contextListener_ = null;
  this.eventListeners_ = null;
  this.fixedWidthSet_ = null;
}

/* InfoBox extends OverlayView in the Google Maps API v3.
 */
InfoBox.prototype = new google.maps.OverlayView();

/**
 * Creates the DIV representing the InfoBox.
 * @private
 */
InfoBox.prototype.createInfoBoxDiv_ = function () {

  var i;
  var events;
  var bw;
  var me = this;

  // This handler prevents an event in the InfoBox from being passed on to the map.
  //
  var cancelHandler = function (e) {
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };

  // This handler ignores the current event in the InfoBox and conditionally prevents
  // the event from being passed on to the map. It is used for the contextmenu event.
  //
  var ignoreHandler = function (e) {

    e.returnValue = false;

    if (e.preventDefault) {

      e.preventDefault();
    }

    if (!me.enableEventPropagation_) {

      cancelHandler(e);
    }
  };

  if (!this.div_) {

    this.div_ = document.createElement("div");

    this.setBoxStyle_();

    if (typeof this.content_.nodeType === "undefined") {
      this.div_.innerHTML = this.getCloseBoxImg_() + this.content_;
    } else {
      this.div_.innerHTML = this.getCloseBoxImg_();
      this.div_.appendChild(this.content_);
    }

    // Add the InfoBox DIV to the DOM
    this.getPanes()[this.pane_].appendChild(this.div_);

    this.addClickHandler_();

    if (this.div_.style.width) {

      this.fixedWidthSet_ = true;

    } else {

      if (this.maxWidth_ !== 0 && this.div_.offsetWidth > this.maxWidth_) {

        this.div_.style.width = this.maxWidth_;
        this.div_.style.overflow = "auto";
        this.fixedWidthSet_ = true;

      } else { // The following code is needed to overcome problems with MSIE

        bw = this.getBoxWidths_();

        this.div_.style.width = (this.div_.offsetWidth - bw.left - bw.right) + "px";
        this.fixedWidthSet_ = false;
      }
    }

    this.panBox_(this.disableAutoPan_);

    if (!this.enableEventPropagation_) {

      this.eventListeners_ = [];

      // Cancel event propagation.
      //
      // Note: mousemove not included (to resolve Issue 152)
      events = ["mousedown", "mouseover", "mouseout", "mouseup",
      "click", "dblclick", "touchstart", "touchend", "touchmove"];

      for (i = 0; i < events.length; i++) {

        this.eventListeners_.push(google.maps.event.addDomListener(this.div_, events[i], cancelHandler));
      }

      // Workaround for Google bug that causes the cursor to change to a pointer
      // when the mouse moves over a marker underneath InfoBox.
      this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function (e) {
        this.style.cursor = "default";
      }));
    }

    this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", ignoreHandler);

    /**
     * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
     * @name InfoBox#domready
     * @event
     */
    google.maps.event.trigger(this, "domready");
  }
};

/**
 * Returns the HTML <IMG> tag for the close box.
 * @private
 */
InfoBox.prototype.getCloseBoxImg_ = function () {

  var img = "";

  if (this.closeBoxURL_ !== "") {

    img  = "<img";
    img += " src='" + this.closeBoxURL_ + "'";
    img += " align=right"; // Do this because Opera chokes on style='float: right;'
    img += " style='";
    img += " position: relative;"; // Required by MSIE
    img += " cursor: pointer;";
    img += " margin: " + this.closeBoxMargin_ + ";";
    img += "'>";
  }

  return img;
};

/**
 * Adds the click handler to the InfoBox close box.
 * @private
 */
InfoBox.prototype.addClickHandler_ = function () {

  var closeBox;

  if (this.closeBoxURL_ !== "") {

    closeBox = this.div_.firstChild;
    this.closeListener_ = google.maps.event.addDomListener(closeBox, "click", this.getCloseClickHandler_());

  } else {

    this.closeListener_ = null;
  }
};

/**
 * Returns the function to call when the user clicks the close box of an InfoBox.
 * @private
 */
InfoBox.prototype.getCloseClickHandler_ = function () {

  var me = this;

  return function (e) {

    // 1.0.3 fix: Always prevent propagation of a close box click to the map:
    e.cancelBubble = true;

    if (e.stopPropagation) {

      e.stopPropagation();
    }

    /**
     * This event is fired when the InfoBox's close box is clicked.
     * @name InfoBox#closeclick
     * @event
     */
    google.maps.event.trigger(me, "closeclick");

    me.close();
  };
};

/**
 * Pans the map so that the InfoBox appears entirely within the map's visible area.
 * @private
 */
InfoBox.prototype.panBox_ = function (disablePan) {

  var map;
  var bounds;
  var xOffset = 0, yOffset = 0;

  if (!disablePan) {

    map = this.getMap();

    if (map instanceof google.maps.Map) { // Only pan if attached to map, not panorama

      if (!map.getBounds().contains(this.position_)) {
      // Marker not in visible area of map, so set center
      // of map to the marker position first.
        map.setCenter(this.position_);
      }

      bounds = map.getBounds();

      var mapDiv = map.getDiv();
      var mapWidth = mapDiv.offsetWidth;
      var mapHeight = mapDiv.offsetHeight;
      var iwOffsetX = this.pixelOffset_.width;
      var iwOffsetY = this.pixelOffset_.height;
      var iwWidth = this.div_.offsetWidth  + 20;
      var iwHeight = this.div_.offsetHeight + 20;
      var padX = this.infoBoxClearance_.width;
      var padY = this.infoBoxClearance_.height;
      var pixPosition = this.getProjection().fromLatLngToContainerPixel(this.position_);

      if (pixPosition.x < (-iwOffsetX + padX)) {
        xOffset = pixPosition.x + iwOffsetX - padX;
      } else if ((pixPosition.x + iwWidth + iwOffsetX + padX) > mapWidth) {
        xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
      }
      if (this.alignBottom_) {
        if (pixPosition.y < (-iwOffsetY + padY + iwHeight)) {
          yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
        } else if ((pixPosition.y + iwOffsetY + padY) > mapHeight) {
          yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
        }
      } else {
        if (pixPosition.y < (-iwOffsetY + padY)) {
          yOffset = pixPosition.y + iwOffsetY - padY;
        } else if ((pixPosition.y + iwHeight + iwOffsetY + padY) > mapHeight) {
          yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
        }
      }

      if (!(xOffset === 0 && yOffset === 0)) {

        // Move the map to the shifted center.
        //
        var c = map.getCenter();
        map.panBy(xOffset, yOffset);
      }
    }
  }
};

/**
 * Sets the style of the InfoBox by setting the style sheet and applying
 * other specific styles requested.
 * @private
 */
InfoBox.prototype.setBoxStyle_ = function () {

  var i, boxStyle;

  if (this.div_) {

    // Apply style values from the style sheet defined in the boxClass parameter:
    this.div_.className = this.boxClass_;

    // Clear existing inline style values:
    this.div_.style.cssText = "";

    // Apply style values defined in the boxStyle parameter:
    boxStyle = this.boxStyle_;
    for (i in boxStyle) {

      if (boxStyle.hasOwnProperty(i)) {

        this.div_.style[i] = boxStyle[i];
      }
    }

    // Fix for iOS disappearing InfoBox problem.
    // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad
    this.div_.style.WebkitTransform = "translateZ(0)";

    // Fix up opacity style for benefit of MSIE:
    //
    if (typeof this.div_.style.opacity !== "undefined" && this.div_.style.opacity !== "") {
      // See http://www.quirksmode.org/css/opacity.html
      this.div_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(Opacity=" + (this.div_.style.opacity * 100) + ")\"";
      this.div_.style.filter = "alpha(opacity=" + (this.div_.style.opacity * 100) + ")";
    }

    // Apply required styles:
    //
    this.div_.style.position = "absolute";
    this.div_.style.visibility = 'hidden';
    if (this.zIndex_ !== null) {

      this.div_.style.zIndex = this.zIndex_;
    }
  }
};

/**
 * Get the widths of the borders of the InfoBox.
 * @private
 * @return {Object} widths object (top, bottom left, right)
 */
InfoBox.prototype.getBoxWidths_ = function () {

  var computedStyle;
  var bw = {top: 0, bottom: 0, left: 0, right: 0};
  var box = this.div_;

  if (document.defaultView && document.defaultView.getComputedStyle) {

    computedStyle = box.ownerDocument.defaultView.getComputedStyle(box, "");

    if (computedStyle) {

      // The computed styles are always in pixel units (good!)
      bw.top = parseInt(computedStyle.borderTopWidth, 10) || 0;
      bw.bottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
      bw.left = parseInt(computedStyle.borderLeftWidth, 10) || 0;
      bw.right = parseInt(computedStyle.borderRightWidth, 10) || 0;
    }

  } else if (document.documentElement.currentStyle) { // MSIE

    if (box.currentStyle) {

      // The current styles may not be in pixel units, but assume they are (bad!)
      bw.top = parseInt(box.currentStyle.borderTopWidth, 10) || 0;
      bw.bottom = parseInt(box.currentStyle.borderBottomWidth, 10) || 0;
      bw.left = parseInt(box.currentStyle.borderLeftWidth, 10) || 0;
      bw.right = parseInt(box.currentStyle.borderRightWidth, 10) || 0;
    }
  }

  return bw;
};

/**
 * Invoked when <tt>close</tt> is called. Do not call it directly.
 */
InfoBox.prototype.onRemove = function () {

  if (this.div_) {

    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};

/**
 * Draws the InfoBox based on the current map projection and zoom level.
 */
InfoBox.prototype.draw = function () {

  this.createInfoBoxDiv_();

  var pixPosition = this.getProjection().fromLatLngToDivPixel(this.position_);

  this.div_.style.left = (pixPosition.x + this.pixelOffset_.width) + "px";

  if (this.alignBottom_) {
    this.div_.style.bottom = -(pixPosition.y + this.pixelOffset_.height) + "px";
  } else {
    this.div_.style.top = (pixPosition.y + this.pixelOffset_.height) + "px";
  }

  if (this.isHidden_) {

    this.div_.style.visibility = "hidden";

  } else {

    this.div_.style.visibility = "visible";
  }
};

/**
 * Sets the options for the InfoBox. Note that changes to the <tt>maxWidth</tt>,
 *  <tt>closeBoxMargin</tt>, <tt>closeBoxURL</tt>, and <tt>enableEventPropagation</tt>
 *  properties have no affect until the current InfoBox is <tt>close</tt>d and a new one
 *  is <tt>open</tt>ed.
 * @param {InfoBoxOptions} opt_opts
 */
InfoBox.prototype.setOptions = function (opt_opts) {
  if (typeof opt_opts.boxClass !== "undefined") { // Must be first

    this.boxClass_ = opt_opts.boxClass;
    this.setBoxStyle_();
  }
  if (typeof opt_opts.boxStyle !== "undefined") { // Must be second

    this.boxStyle_ = opt_opts.boxStyle;
    this.setBoxStyle_();
  }
  if (typeof opt_opts.content !== "undefined") {

    this.setContent(opt_opts.content);
  }
  if (typeof opt_opts.disableAutoPan !== "undefined") {

    this.disableAutoPan_ = opt_opts.disableAutoPan;
  }
  if (typeof opt_opts.maxWidth !== "undefined") {

    this.maxWidth_ = opt_opts.maxWidth;
  }
  if (typeof opt_opts.pixelOffset !== "undefined") {

    this.pixelOffset_ = opt_opts.pixelOffset;
  }
  if (typeof opt_opts.alignBottom !== "undefined") {

    this.alignBottom_ = opt_opts.alignBottom;
  }
  if (typeof opt_opts.position !== "undefined") {

    this.setPosition(opt_opts.position);
  }
  if (typeof opt_opts.zIndex !== "undefined") {

    this.setZIndex(opt_opts.zIndex);
  }
  if (typeof opt_opts.closeBoxMargin !== "undefined") {

    this.closeBoxMargin_ = opt_opts.closeBoxMargin;
  }
  if (typeof opt_opts.closeBoxURL !== "undefined") {

    this.closeBoxURL_ = opt_opts.closeBoxURL;
  }
  if (typeof opt_opts.infoBoxClearance !== "undefined") {

    this.infoBoxClearance_ = opt_opts.infoBoxClearance;
  }
  if (typeof opt_opts.isHidden !== "undefined") {

    this.isHidden_ = opt_opts.isHidden;
  }
  if (typeof opt_opts.visible !== "undefined") {

    this.isHidden_ = !opt_opts.visible;
  }
  if (typeof opt_opts.enableEventPropagation !== "undefined") {

    this.enableEventPropagation_ = opt_opts.enableEventPropagation;
  }

  if (this.div_) {

    this.draw();
  }
};

/**
 * Sets the content of the InfoBox.
 *  The content can be plain text or an HTML DOM node.
 * @param {string|Node} content
 */
InfoBox.prototype.setContent = function (content) {
  this.content_ = content;

  if (this.div_) {

    if (this.closeListener_) {

      google.maps.event.removeListener(this.closeListener_);
      this.closeListener_ = null;
    }

    // Odd code required to make things work with MSIE.
    //
    if (!this.fixedWidthSet_) {

      this.div_.style.width = "";
    }

    if (typeof content.nodeType === "undefined") {
      this.div_.innerHTML = this.getCloseBoxImg_() + content;
    } else {
      this.div_.innerHTML = this.getCloseBoxImg_();
      this.div_.appendChild(content);
    }

    // Perverse code required to make things work with MSIE.
    // (Ensures the close box does, in fact, float to the right.)
    //
    if (!this.fixedWidthSet_) {
      this.div_.style.width = this.div_.offsetWidth + "px";
      if (typeof content.nodeType === "undefined") {
        this.div_.innerHTML = this.getCloseBoxImg_() + content;
      } else {
        this.div_.innerHTML = this.getCloseBoxImg_();
        this.div_.appendChild(content);
      }
    }

    this.addClickHandler_();
  }

  /**
   * This event is fired when the content of the InfoBox changes.
   * @name InfoBox#content_changed
   * @event
   */
  google.maps.event.trigger(this, "content_changed");
};

/**
 * Sets the geographic location of the InfoBox.
 * @param {LatLng} latlng
 */
InfoBox.prototype.setPosition = function (latlng) {

  this.position_ = latlng;

  if (this.div_) {

    this.draw();
  }

  /**
   * This event is fired when the position of the InfoBox changes.
   * @name InfoBox#position_changed
   * @event
   */
  google.maps.event.trigger(this, "position_changed");
};

/**
 * Sets the zIndex style for the InfoBox.
 * @param {number} index
 */
InfoBox.prototype.setZIndex = function (index) {

  this.zIndex_ = index;

  if (this.div_) {

    this.div_.style.zIndex = index;
  }

  /**
   * This event is fired when the zIndex of the InfoBox changes.
   * @name InfoBox#zindex_changed
   * @event
   */
  google.maps.event.trigger(this, "zindex_changed");
};

/**
 * Sets the visibility of the InfoBox.
 * @param {boolean} isVisible
 */
InfoBox.prototype.setVisible = function (isVisible) {

  this.isHidden_ = !isVisible;
  if (this.div_) {
    this.div_.style.visibility = (this.isHidden_ ? "hidden" : "visible");
  }
};

/**
 * Returns the content of the InfoBox.
 * @returns {string}
 */
InfoBox.prototype.getContent = function () {

  return this.content_;
};

/**
 * Returns the geographic location of the InfoBox.
 * @returns {LatLng}
 */
InfoBox.prototype.getPosition = function () {

  return this.position_;
};

/**
 * Returns the zIndex for the InfoBox.
 * @returns {number}
 */
InfoBox.prototype.getZIndex = function () {

  return this.zIndex_;
};

/**
 * Returns a flag indicating whether the InfoBox is visible.
 * @returns {boolean}
 */
InfoBox.prototype.getVisible = function () {

  var isVisible;

  if ((typeof this.getMap() === "undefined") || (this.getMap() === null)) {
    isVisible = false;
  } else {
    isVisible = !this.isHidden_;
  }
  return isVisible;
};

/**
 * Shows the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
 */
InfoBox.prototype.show = function () {

  this.isHidden_ = false;
  if (this.div_) {
    this.div_.style.visibility = "visible";
  }
};

/**
 * Hides the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
 */
InfoBox.prototype.hide = function () {

  this.isHidden_ = true;
  if (this.div_) {
    this.div_.style.visibility = "hidden";
  }
};

/**
 * Adds the InfoBox to the specified map or Street View panorama. If <tt>anchor</tt>
 *  (usually a <tt>google.maps.Marker</tt>) is specified, the position
 *  of the InfoBox is set to the position of the <tt>anchor</tt>. If the
 *  anchor is dragged to a new location, the InfoBox moves as well.
 * @param {Map|StreetViewPanorama} map
 * @param {MVCObject} [anchor]
 */
InfoBox.prototype.open = function (map, anchor) {

  var me = this;

  if (anchor) {

    this.position_ = anchor.getPosition();
    this.moveListener_ = google.maps.event.addListener(anchor, "position_changed", function () {
      me.setPosition(this.getPosition());
    });

    this.mapListener_ = google.maps.event.addListener(anchor, "map_changed", function() {
      me.setMap(this.map);
    });
  }

  this.setMap(map);

  if (this.div_) {

    this.panBox_();
  }
};

/**
 * Removes the InfoBox from the map.
 */
InfoBox.prototype.close = function () {

  var i;

  if (this.closeListener_) {

    google.maps.event.removeListener(this.closeListener_);
    this.closeListener_ = null;
  }

  if (this.eventListeners_) {

    for (i = 0; i < this.eventListeners_.length; i++) {

      google.maps.event.removeListener(this.eventListeners_[i]);
    }
    this.eventListeners_ = null;
  }

  if (this.moveListener_) {

    google.maps.event.removeListener(this.moveListener_);
    this.moveListener_ = null;
  }

  if (this.mapListener_) {

    google.maps.event.removeListener(this.mapListener_);
    this.mapListener_ = null;
  }

  if (this.contextListener_) {

    google.maps.event.removeListener(this.contextListener_);
    this.contextListener_ = null;
  }

  this.setMap(null);
};



/* Minit: https://demo.mekshq.com/trawell/wp-content/plugins/meks-easy-maps/public/js/markerClusterer.js */
// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3_3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0.1
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'imagePath': (string) The base URL where the images representing
 *                  clusters will be found. The full URL will be:
 *                  {imagePath}[1-5].{imageExtension}
 *                  Default: '../images/m'.
 *     'imageExtension': (string) The suffix for images URL representing
 *                       clusters will be found. See _imagePath_ for details.
 *                       Default: 'png'.
 *     'averageCenter': (boolean) Whether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */
function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);
  this.map_ = map;

  /**
   * @type {Array.<google.maps.Marker>}
   * @private
   */
  this.markers_ = [];

  /**
   *  @type {Array.<Cluster>}
   */
  this.clusters_ = [];

  this.sizes = [53, 56, 66, 78, 90];

  /**
   * @private
   */
  this.styles_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  var options = opt_options || {};

  /**
   * @type {number}
   * @private
   */
  this.gridSize_ = options['gridSize'] || 60;

  /**
   * @private
   */
  this.minClusterSize_ = options['minimumClusterSize'] || 2;


  /**
   * @type {?number}
   * @private
   */
  this.maxZoom_ = options['maxZoom'] || null;

  this.styles_ = options['styles'] || [];

  /**
   * @type {string}
   * @private
   */
  this.imagePath_ = options['imagePath'] ||
      this.MARKER_CLUSTER_IMAGE_PATH_;

  /**
   * @type {string}
   * @private
   */
  this.imageExtension_ = options['imageExtension'] ||
      this.MARKER_CLUSTER_IMAGE_EXTENSION_;

  /**
   * @type {boolean}
   * @private
   */
  this.zoomOnClick_ = true;

  if (options['zoomOnClick'] != undefined) {
    this.zoomOnClick_ = options['zoomOnClick'];
  }

  /**
   * @type {boolean}
   * @private
   */
  this.averageCenter_ = false;

  if (options['averageCenter'] != undefined) {
    this.averageCenter_ = options['averageCenter'];
  }

  this.setupStyles_();

  this.setMap(map);

  /**
   * @type {number}
   * @private
   */
  this.prevZoom_ = this.map_.getZoom();

  // Add the map event listeners
  var that = this;
  google.maps.event.addListener(this.map_, 'zoom_changed', function() {
    // Determines map type and prevent illegal zoom levels
    var zoom = that.map_.getZoom();
    var minZoom = that.map_.minZoom || 0;
    var maxZoom = Math.min(that.map_.maxZoom || 100,
                         that.map_.mapTypes[that.map_.getMapTypeId()].maxZoom);
    zoom = Math.min(Math.max(zoom,minZoom),maxZoom);

    if (that.prevZoom_ != zoom) {
      that.prevZoom_ = zoom;
      that.resetViewport();
    }
  });

  google.maps.event.addListener(this.map_, 'idle', function() {
    that.redraw();
  });

  // Finally, add the markers
  if (opt_markers && (opt_markers.length || Object.keys(opt_markers).length)) {
    this.addMarkers(opt_markers, false);
  }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = '../images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function(obj1, obj2) {
  return (function(object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function() {
  this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function() {};

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function() {
  if (this.styles_.length) {
    return;
  }

  for (var i = 0, size; size = this.sizes[i]; i++) {
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
      height: size,
      width: size
    });
  }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function() {
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }

  this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function(styles) {
  this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function() {
  return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function() {
  return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function() {
  return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function() {
  return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
  this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function() {
  return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
  var index = 0;
  var count = markers.length;
  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index
  };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function(calculator) {
  this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function() {
  return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {
  if (markers.length) {
    for (var i = 0, marker; marker = markers[i]; i++) {
      this.pushMarkerTo_(marker);
    }
  } else if (Object.keys(markers).length) {
    for (var marker in markers) {
      this.pushMarkerTo_(markers[marker]);
    }
  }
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {
  marker.isAdded = false;
  if (marker['draggable']) {
    // If the marker is draggable add a listener so we update the clusters on
    // the drag end.
    var that = this;
    google.maps.event.addListener(marker, 'dragend', function() {
      marker.isAdded = false;
      that.repaint();
    });
  }
  this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function(marker) {
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        index = i;
        break;
      }
    }
  }

  if (index == -1) {
    // Marker is not in our list of markers.
    return false;
  }

  marker.setMap(null);

  this.markers_.splice(index, 1);

  return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  } else {
   return false;
  }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw) {
  // create a local copy of markers if required
  // (removeMarker_ modifies the getMarkers() array in place)
  var markersCopy = markers === this.getMarkers() ? markers.slice() : markers;
  var removed = false;

  for (var i = 0, marker; marker = markersCopy[i]; i++) {
    var r = this.removeMarker_(marker);
    removed = removed || r;
  }

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function(ready) {
  if (!this.ready_) {
    this.ready_ = ready;
    this.createClusters_();
  }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function() {
  return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function() {
  return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function(map) {
  this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function() {
  return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function(size) {
  this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function() {
  return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function(size) {
  this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function(bounds) {
  var projection = this.getProjection();

  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng());

  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;

  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;

  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);

  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);

  return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {
  return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function() {
  this.resetViewport(true);

  // Set the markers a empty array.
  this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function(opt_hide) {
  // Remove all the clusters
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.remove();
  }

  // Reset the markers to not be added and to be invisible.
  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }

  this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function() {
  var oldClusters = this.clusters_.slice();
  this.clusters_.length = 0;
  this.resetViewport();
  this.redraw();

  // Remove the old clusters.
  // Do it in a timeout so the other clusters have been drawn first.
  window.setTimeout(function() {
    for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
      cluster.remove();
    }
  }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function() {
  this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }

  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {
  var distance = 40000; // Some large number
  var clusterToAddTo = null;
  var pos = marker.getPosition();
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    var center = cluster.getCenter();
    if (center) {
      var d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }

  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    var cluster = new Cluster(this);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function() {
  if (!this.ready_) {
    return;
  }

  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
      this.map_.getBounds().getNorthEast());
  var bounds = this.getExtendedBounds(mapBounds);

  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      this.addToClosestCluster_(marker);
    }
  }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
  this.markerClusterer_ = markerClusterer;
  this.map_ = markerClusterer.getMap();
  this.gridSize_ = markerClusterer.getGridSize();
  this.minClusterSize_ = markerClusterer.getMinClusterSize();
  this.averageCenter_ = markerClusterer.isAverageCenter();
  this.center_ = null;
  this.markers_ = [];
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
      markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function(marker) {
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) != -1;
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        return true;
      }
    }
  }
  return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function(marker) {
  if (this.isMarkerAlreadyAdded(marker)) {
    return false;
  }

  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l-1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l-1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }

  marker.isAdded = true;
  this.markers_.push(marker);

  var len = this.markers_.length;
  if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
    // Min cluster size not reached so show the marker.
    marker.setMap(this.map_);
  }

  if (len == this.minClusterSize_) {
    // Hide the markers that were showing.
    for (var i = 0; i < len; i++) {
      this.markers_[i].setMap(null);
    }
  }

  if (len >= this.minClusterSize_) {
    marker.setMap(null);
  }

  this.updateIcon();
  return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function() {
  return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }
  return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function() {
  this.clusterIcon_.remove();
  this.markers_.length = 0;
  delete this.markers_;
};


/**
 * Returns the number of markers in the cluster.
 *
 * @return {number} The number of markers in the cluster.
 */
Cluster.prototype.getSize = function() {
  return this.markers_.length;
};


/**
 * Returns a list of the markers in the cluster.
 *
 * @return {Array.<google.maps.Marker>} The markers in the cluster.
 */
Cluster.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function() {
  return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function(marker) {
  return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function() {
  return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function() {
  var zoom = this.map_.getZoom();
  var mz = this.markerClusterer_.getMaxZoom();

  if (mz && zoom > mz) {
    // The zoom is greater than our max zoom so show all the markers in cluster.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
      marker.setMap(this.map_);
    }
    return;
  }

  if (this.markers_.length < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }

  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.setSums(sums);
  this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

  this.styles_ = styles;
  this.padding_ = opt_padding || 0;
  this.cluster_ = cluster;
  this.center_ = null;
  this.map_ = cluster.getMap();
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;

  this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 */
ClusterIcon.prototype.triggerClusterClick = function() {
  var markerClusterer = this.cluster_.getMarkerClusterer();

  // Trigger the clusterclick event.
  google.maps.event.trigger(markerClusterer.map_, 'clusterclick', this.cluster_);

  if (markerClusterer.isZoomOnClick()) {
    // Zoom into the cluster.
    this.map_.fitBounds(this.cluster_.getBounds());
  }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function() {
  this.div_ = document.createElement('DIV');
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.innerHTML = this.sums_.text;
  }

  var panes = this.getPanes();
  panes.overlayMouseTarget.appendChild(this.div_);

  var that = this;
  google.maps.event.addDomListener(this.div_, 'click', function() {
    that.triggerClusterClick();
  });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function(latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);
  pos.x -= parseInt(this.width_ / 2, 10);
  pos.y -= parseInt(this.height_ / 2, 10);
  return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function() {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + 'px';
    this.div_.style.left = pos.x + 'px';
  }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function() {
  if (this.div_) {
    this.div_.style.display = 'none';
  }
  this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function() {
  if (this.div_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.style.display = '';
  }
  this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function() {
  this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function() {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function(sums) {
  this.sums_ = sums;
  this.text_ = sums.text;
  this.index_ = sums.index;
  if (this.div_) {
    this.div_.innerHTML = sums.text;
  }

  this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function() {
  var index = Math.max(0, this.sums_.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style['url'];
  this.height_ = style['height'];
  this.width_ = style['width'];
  this.textColor_ = style['textColor'];
  this.anchor_ = style['anchor'];
  this.textSize_ = style['textSize'];
  this.backgroundPosition_ = style['backgroundPosition'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function(center) {
  this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function(pos) {
  var style = [];
  style.push('background-image:url(' + this.url_ + ');');
  var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
  style.push('background-position:' + backgroundPosition + ';');

  if (typeof this.anchor_ === 'object') {
    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_) {
      style.push('height:' + (this.height_ - this.anchor_[0]) +
          'px; padding-top:' + this.anchor_[0] + 'px;');
    } else {
      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
          'px;');
    }
    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_) {
      style.push('width:' + (this.width_ - this.anchor_[1]) +
          'px; padding-left:' + this.anchor_[1] + 'px;');
    } else {
      style.push('width:' + this.width_ + 'px; text-align:center;');
    }
  } else {
    style.push('height:' + this.height_ + 'px; line-height:' +
        this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
  }

  var txtColor = this.textColor_ ? this.textColor_ : 'black';
  var txtSize = this.textSize_ ? this.textSize_ : 11;

  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
      pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
      txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
  return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;

Object.keys = Object.keys || function(o) {
    var result = [];
    for(var name in o) {
        if (o.hasOwnProperty(name))
          result.push(name);
    }
    return result;
};



(function($) {

    "use strict";

    var Mks_Maps = {

        settings: {},
        items: {},
        markers: [], // array of all markets on the map used for clustering
        polylines: [],
        bounds: {},
        multiple: false,
        pinColor: "#FF0000",
        infoBox: new InfoBox(),
        infoBoxSettings: {},
        fittedToContainer: false,
        lastValidCenter: {},
        minZoomLevel: 2,

        init: function() {
            var get_maps = $('.mks-maps');
            get_maps.each(this.initializeMapEachCallback);
        },

        initializeMapEachCallback: function() {
            var $this = $(this);

            Mks_Maps.resetData();

            Mks_Maps.settings = Mks_Maps.getMapSettings($this);
            Mks_Maps.items = $this.data('items');

            if (mks_maps_empty(Mks_Maps.settings) || mks_maps_empty(Mks_Maps.items)) {
                console.error('Maps and items must be passed tru map div like this "data-settings" and "data-maps" in json format');
                return false;
            }


            var id = $this.attr('id'),
                map = document.getElementById(id),
                streetView = Mks_Maps.settings.streetView;

            delete(Mks_Maps.settings.streetView);

            Mks_Maps.multiple = Object.keys(Mks_Maps.items).length > 1;

            if (mks_maps_empty(map)) {
                console.error('Maps div not found');
                return false;
            }

            Mks_Maps.settings.center = Mks_Maps.getMapCenter();
            Mks_Maps.settings.styles = (!mks_maps_empty(Mks_Maps.settings.styles)) ? JSON.parse(Mks_Maps.settings.styles) : [];

            // Map initialization
            map = new google.maps.Map(map, Mks_Maps.settings);
            map.mks_maps_data = {
                center: Mks_Maps.settings.center
            };

            if (Mks_Maps.setStreetView(streetView, id, map)) {
                return true; // Street view added no need for going down to pins and infoboxes
            }

            if (mks_maps_empty(Mks_Maps.settings.center)) {
                Mks_Maps.bounds = new google.maps.LatLngBounds();
                map.mks_maps_data.bounds = Mks_Maps.bounds;
            }
            // Infobox prepare
            Mks_Maps.prepareInfoBoxSettings();

            Mks_Maps.printItems(map, Mks_Maps.items, Mks_Maps.afterMapInitialization);
        },

        setStreetView: function(streetView, id, map) {

            if (mks_maps_empty(streetView) || !streetView || Mks_Maps.multiple) {
                return false;
            }

            var panorama = new google.maps.StreetViewPanorama(
                document.getElementById(id), {
                    position: Mks_Maps.settings.center,
                    zoomControl: false,
                    scrollwheel: false,
                    streetViewControl: false,
                    disableDefaultUI: true,
                    pov: {
                        heading: 34,
                        pitch: 10
                    }
                });

            map.setStreetView(panorama);
            return true;
        },

        getMapSettings: function($elem) {
            var settings = $elem.data('settings');

            if (!mks_maps_empty(settings.pinColor)) {
                Mks_Maps.pinColor = settings.pinColor;
                delete(settings.pinColor);
            }

            return settings;
        },

        getMapCenter: function() {
            if (!Mks_Maps.multiple) {
                if (!mks_maps_empty(Mks_Maps.items[0].latitude) && !mks_maps_empty(Mks_Maps.items[0].longitude)) {
                    return new google.maps.LatLng(parseFloat(Mks_Maps.items[0].latitude), parseFloat(Mks_Maps.items[0].longitude));
                } else {
                    return new google.maps.LatLng(44.787197, 20.457273);
                }
            }

        },

        bringMapBackInView: function(map) {
            map.centered = false;

            google.maps.event.addListener(map, 'zoom_changed', function() {

                if (map.centered) {
                    return;
                }

                map.centered = true;

                Mks_Maps.checkMapBounds(map);
            });
        },

        checkMapBounds: function(map) {
            var bounds = map.getBounds();
            var sLat = bounds.getSouthWest().lat();
            var nLat = bounds.getNorthEast().lat();

            if (bounds.getSouthWest().lng() === -180 && bounds.getNorthEast().lng() === 180 && map.getCenter().lng() > 10) {
                map.setCenter(new google.maps.LatLng(map.getCenter().lat(), 0));
            }

            if (sLat < -85 || nLat > 85) {
                //the map has gone beyone the world's max or min latitude - gray areas are visible
                map.setZoom(parseInt(map.getZoom() + 1));
            }
        },

        printItems: function(map, items, doneCallback) {
            $.each(items, function(i, item) {
                if (mks_maps_empty(item.address) || mks_maps_empty(item.latitude) || mks_maps_empty(item.longitude)) {
                    return true;
                }

                var position = new google.maps.LatLng(item.latitude, item.longitude),
                    markerContent = Mks_Maps.printMarker(item);


                if (mks_maps_empty(Mks_Maps.settings.center)) {
                    Mks_Maps.bounds.extend(position);
                }

                var pinColor = Mks_Maps.pinColor;
                if (!mks_maps_empty(item.pinColor)) {
                    pinColor = item.pinColor;
                }

                var marker = new google.maps.Marker({
                    position: position,
                    content: markerContent,
                    link: item.link,
                    map: map,
                    icon: mks_maps_marker_icon(pinColor),
                    id: item
                });

                Mks_Maps.markers.push(marker);

                if (!mks_maps_empty(Mks_Maps.settings.printPolylines)) {
                    var polyline = {
                        lat: Number(item.latitude),
                        lng: Number(item.longitude)
                    };

                    Mks_Maps.polylines.push(polyline);
                }

                if (Mks_Maps.settings.infoBox) {
                    Mks_Maps.printInfoBox(map, marker);
                }
            });

            if (typeof doneCallback === 'function') {
                doneCallback(map);
            }
        },

        printMarker: function(item) {
            var html = '<div class="mks-map-info-box">';

            if (!mks_maps_empty(item.thumbnail)) {
                html += '<div class="mks-map-entry-image"><a href="' + item.link + '">' + item.thumbnail + '</a></div>';
            }

            html += '<span class="mks-map-info-box-close"><span class="mks-map-x"></span></span><div class="mks-map-element-pos-abs">';

            if (!mks_maps_empty(Mks_Maps.settings.display.format) && !mks_maps_empty(item.format)) {
                html += '<div class="mks-map-entry-format">';
                html += '<div class="mks-map-format-icon">' + item.format + '</div>';
                html += '</div>';
            }

            if (!mks_maps_empty(Mks_Maps.settings.display.category) && !mks_maps_empty(item.categories)) {
                html += '<div class="mks-map-entry-category">' + item.categories + '</div>';
            }

            html += '<div class="mks-map-entry-header">' +
                '<h6 class="h6 entry-title"><a href="' + item.link + '">' + item.title + '</a></h6>' +
                '</div>';

            if (!mks_maps_empty(Mks_Maps.settings.display.meta) && Mks_Maps.settings.display.meta && !mks_maps_empty(item.meta)) {
                html += '<div class="mks-map-entry-meta">' + item.meta + '</div>';
            }

            if (!mks_maps_empty(Mks_Maps.settings.display.excerpt) && Mks_Maps.settings.display.excerpt && !mks_maps_empty(item.excerpt)) {
                html += '<div class="mks-map-entry-content">' + item.excerpt + '</div>';
            }

            html += '</div>';

            return html;
        },

        prepareInfoBoxSettings: function() {
            var infoBoxWrapper = document.createElement("div");
            infoBoxWrapper.className = 'mks-map-wrapper';

            Mks_Maps.infoBoxSettings = {
                content: infoBoxWrapper,
                disableAutoPan: false,
                alignBottom: true,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-60, -40),
                zIndex: null,
                boxStyle: {
                    width: "280px"
                },
                closeBoxMargin: "0px",
                closeBoxURL: "",
                enableEventPropagation: false
            };
        },

        printInfoBox: function(map, marker) {
            if (mks_maps_empty(Mks_Maps.infoBoxSettings) || mks_maps_empty(map) || mks_maps_empty(marker)) {
                return false;
            }

            google.maps.event.addListener(marker, 'click', function() {

                Mks_Maps.infoBox.close();

                Mks_Maps.infoBox.setOptions(Mks_Maps.infoBoxSettings);
                Mks_Maps.infoBox.setContent(this.content);
                Mks_Maps.infoBox.open(map, this);

                setTimeout(function() {
                    Mks_Maps.checkMapBounds(map);
                }, 100);

                google.maps.event.addListener(Mks_Maps.infoBox, 'domready', function() {
                    $('.mks-map-info-box-close').click(function() {
                        Mks_Maps.infoBox.close();
                    });
                });
            });
        },

        afterMapInitialization: function(map) {
            if (mks_maps_empty(Mks_Maps.settings.center)) {
                map.fitBounds(Mks_Maps.bounds);

                Mks_Maps.printClusters(map);

                Mks_Maps.printPolylines(map);
            }

            Mks_Maps.bringMapBackInView(map);
        },

        printPolylines: function(map) {
            var itemsCount = Object.keys(Mks_Maps.items).length;

            if (mks_maps_empty(Mks_Maps.polylines) || parseInt(Mks_Maps.settings.polylinesLimit) <= itemsCount) {
                return false;
            }

            // Add polylines to map
            var polylines_path = new google.maps.Polyline({
                path: Mks_Maps.polylines,
                geodesic: true,
                strokeColor: Mks_Maps.settings.clusterColor,
                strokeOpacity: 1,
                strokeWeight: 2
            });

            polylines_path.setMap(map);
        },

        printClusters: function(map) {

            if(!Mks_Maps.settings.clusterEnable){
                return;
            }

            var marker_clusters_style = [{
                    width: 50,
                    height: 50,
                    url: mks_maps_cluster_icon(Mks_Maps.settings.clusterColor),
                    textColor: Mks_Maps.settings.clusterTextColor,
                    textSize: Mks_Maps.settings.clusterTextSize
                }],
                marker_clusters_options = {
                    styles: marker_clusters_style,
                    imagePath: mks_maps_cluster_icon(Mks_Maps.settings.clusterColor),
                    minClusterSize: 2,
                    maxZoom: 17
                };

            return new MarkerClusterer(map, Mks_Maps.markers, marker_clusters_options);
        },

        resetData: function() {
            Mks_Maps.markers = [];
            Mks_Maps.polylines = [];
            Mks_Maps.settings = {};
            Mks_Maps.items = {};
            Mks_Maps.markers = [];
            Mks_Maps.polylines = [];
            Mks_Maps.bounds = {};
            Mks_Maps.multiple = false;
            Mks_Maps.pinColor = "#FF0000";
            Mks_Maps.infoBox = new InfoBox();
            Mks_Maps.infoBoxSettings = {};
        }
    };

    window.Mks_Maps = Mks_Maps;

    $(document).ready(function() {
        Mks_Maps.init();
    });


    // ********** Helpers ************

    // custom marker svg icon
    function mks_maps_marker_icon(color) {
        return {
            path: 'M60,14.147c-17.855,0-32.331,14.475-32.331,32.331C27.669,76.314,60,107.292,60,107.292s32.331-34.111,32.331-60.815  C92.331,28.622,77.855,14.147,60,14.147z M60.001,58.015c-7.4,0-13.398-5.999-13.398-13.398c0-7.399,5.999-13.398,13.398-13.398  c7.399,0,13.397,5.999,13.397,13.398C73.398,52.016,67.4,58.015,60.001,58.015z',
            fillColor: color,
            fillOpacity: 1,
            strokeOpacity: 0,
            strokeWeight: 1,
            scale: 0.5,
            anchor: new google.maps.Point(60, 102)
        };
    }

    // custom cluster svg icon
    function mks_maps_cluster_icon(color) {
        var rgba_color = mks_maps_hex_to_rgba(color, 0.2);
        var encoded = window.btoa(
            '<svg xmlns="http://www.w3.org/2000/svg" width="53" height="52">' +
            '<circle cx="25" cy="25" r="25" fill="' + rgba_color + '"/>' +
            '<circle cx="25" cy="25" r="18" fill="' + color + '"/>' +
            '</svg>');
        return ('data:image/svg+xml;base64,' + encoded);
    }

    // convert hex color to rgba
    function mks_maps_hex_to_rgba(hex, alpha) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        return null;
    }

    function mks_maps_empty(variable) {

        if (typeof variable === 'undefined') {
            return true;
        }

        if (variable === 0 || variable === '0') {
            return true;
        }

        if (variable === null) {
            return true;
        }

        if (variable.length === 0) {
            return true;
        }

        if (variable === "") {
            return true;
        }

        if (typeof variable === 'object' && $.isEmptyObject(variable)) {
            return true;
        }

        return false;
    }

})(jQuery);



/* Minit: /wp-includes/js/imagesloaded.min.js */
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,s=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),s="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(s?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,s=this.getListenersAsObject(e);for(r in s)s.hasOwnProperty(r)&&(i=t(s[r],n),-1!==i&&s[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,s,o=this.getListenersAsObject(e);for(r in o)if(o.hasOwnProperty(r))for(i=o[r].length;i--;)n=o[r][i],n.once===!0&&this.removeListener(e,n.listener),s=n.listener.apply(this,t||[]),s===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=s,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var s={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",s):e.eventie=s}(this),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"==f.call(e)}function s(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e);return t}function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=s(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),u&&(this.jqDeferred=new u.Deferred);var r=this;setTimeout(function(){r.check()})}function h(e){this.img=e}function a(e,t){this.url=e,this.element=t,this.img=new Image}var u=e.jQuery,c=e.console,f=Object.prototype.toString;o.prototype=new t,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var e=0;e<this.elements.length;e++){var t=this.elements[e];this.addElementImages(t)}},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var r=n[i];this.addImage(r)}if("string"==typeof this.options.background){var s=e.querySelectorAll(this.options.background);for(i=0;i<s.length;i++){var o=s[i];this.addElementBackgroundImages(o)}}}};var d={1:!0,9:!0,11:!0};o.prototype.addElementBackgroundImages=function(e){for(var t=m(e),n=/url\(['"]*([^'"\)]+)['"]*\)/gi,i=n.exec(t.backgroundImage);null!==i;){var r=i&&i[1];r&&this.addBackground(r,e),i=n.exec(t.backgroundImage)}};var m=e.getComputedStyle||function(e){return e.currentStyle};return o.prototype.addImage=function(e){var t=new h(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var n=new a(e,t);this.images.push(n)},o.prototype.check=function(){function e(e,n,i){setTimeout(function(){t.progress(e,n,i)})}var t=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();for(var n=0;n<this.images.length;n++){var i=this.images[n];i.once("progress",e),i.check()}},o.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit("progress",this,e,t),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&c&&c.log("progress: "+n,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},h.prototype=new t,h.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,n.bind(this.proxyImage,"load",this),n.bind(this.proxyImage,"error",this),n.bind(this.img,"load",this),n.bind(this.img,"error",this),void(this.proxyImage.src=this.img.src))},h.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},h.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.img,t)},h.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this),n.unbind(this.img,"load",this),n.unbind(this.img,"error",this)},a.prototype=new h,a.prototype.check=function(){n.bind(this.img,"load",this),n.bind(this.img,"error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},a.prototype.unbindEvents=function(){n.unbind(this.img,"load",this),n.unbind(this.img,"error",this)},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.element,t)},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(u=t,u.fn.imagesLoaded=function(e,t){var n=new o(this,e,t);return n.jqDeferred.promise(u(this))})},o.makeJQueryPlugin(),o});



/* Minit: https://demo.mekshq.com/trawell/wp-content/themes/trawell/assets/js/min.js */
!function(s){"use strict";s.fn.fitVids=function(t){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("div");n.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',e.appendChild(n.childNodes[1])}return t&&s.extend(i,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&t.push(i.customSelector);var n=".fitvidsignore";i.ignore&&(n=n+", "+i.ignore);var e=s(this).find(t.join(","));(e=(e=e.not("object object")).not(n)).each(function(){var t=s(this);if(!(0<t.parents(n).length||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var e=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10));if(!t.attr("name")){var i="fitvid"+s.fn.fitVids._count;t.attr("name",i),s.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),t.removeAttr("height").removeAttr("width")}})})},s.fn.fitVids._count=0}(window.jQuery||window.Zepto);var objectFitImages=function(){"use strict";var o="bfred-it:object-fit-images",r=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,t=new Image,a="object-fit"in t.style,s="object-position"in t.style,l="background-size"in t.style,c="string"==typeof t.currentSrc,u=t.getAttribute,h=t.setAttribute,d=!1;function p(t,e,i){var n="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";u.call(t,"src")!==n&&h.call(t,"src",n)}function m(t,e){t.naturalWidth?e(t):setTimeout(m,100,t,e)}function A(e){var i,n,t=function(t){for(var e,i=getComputedStyle(t).fontFamily,n={};null!==(e=r.exec(i));)n[e[1]]=e[2];return n}(e),s=e[o];if(t["object-fit"]=t["object-fit"]||"fill",!s.img){if("fill"===t["object-fit"])return;if(!s.skipTest&&a&&!t["object-position"])return}if(!s.img){s.img=new Image(e.width,e.height),s.img.srcset=u.call(e,"data-ofi-srcset")||e.srcset,s.img.src=u.call(e,"data-ofi-src")||e.src,h.call(e,"data-ofi-src",e.src),e.srcset&&h.call(e,"data-ofi-srcset",e.srcset),p(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{i=e,n={get:function(t){return i[o].img[t||"src"]},set:function(t,e){return i[o].img[e||"src"]=t,h.call(i,"data-ofi-"+e,t),A(i),t}},Object.defineProperty(i,"src",n),Object.defineProperty(i,"currentSrc",{get:function(){return n.get("currentSrc")}}),Object.defineProperty(i,"srcset",{get:function(){return n.get("srcset")},set:function(t){return n.set(t,"srcset")}})}catch(t){window.console&&console.log("http://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!c&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(s.img),e.style.backgroundImage="url("+(s.img.currentSrc||s.img.src).replace("(","%28").replace(")","%29")+")",e.style.backgroundPosition=t["object-position"]||"center",e.style.backgroundRepeat="no-repeat",/scale-down/.test(t["object-fit"])?m(s.img,function(){s.img.naturalWidth>e.width||s.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"}):e.style.backgroundSize=t["object-fit"].replace("none","auto").replace("fill","100% 100%"),m(s.img,function(t){p(e,t.naturalWidth,t.naturalHeight)})}function f(t,e){var i=!d&&!t;if(e=e||{},t=t||"img",s&&!e.skipTest||!l)return!1;"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var n=0;n<t.length;n++)t[n][o]=t[n][o]||{skipTest:e.skipTest},A(t[n]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&f(t.target,{skipTest:e.skipTest})},!0),d=!0,t="img"),e.watchMQ&&window.addEventListener("resize",f.bind(null,t,{skipTest:e.skipTest}))}return f.supportsObjectFit=a,f.supportsObjectPosition=s,function(){function i(t,e){return t[o]&&t[o].img&&("src"===e||"srcset"===e)?t[o].img:t}s||(HTMLImageElement.prototype.getAttribute=function(t){return u.call(i(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,e){return h.call(i(this,t),t,String(e))})}(),f}();!function(l,i,s,o){function c(t,e){this.settings=null,this.options=l.extend({},c.Defaults,e),this.$element=l(t),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},l.each(["onResize","onThrottledResize"],l.proxy(function(t,e){this._handlers[e]=l.proxy(this[e],this)},this)),l.each(c.Plugins,l.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),l.each(c.Workers,l.proxy(function(t,e){this._pipe.push({filter:e.filter,run:l.proxy(e.run,this)})},this)),this.setup(),this.initialize()}c.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:i,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},c.Width={Default:"default",Inner:"inner",Outer:"outer"},c.Type={Event:"event",State:"state"},c.Plugins={},c.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,n=this.settings.rtl,s={width:"auto","margin-left":n?e:"","margin-right":n?"":e};!i&&this.$stage.children().css(s),t.css=s}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,n=this._items.length,s=!this.settings.autoWidth,o=[];for(t.items={merge:!1,width:e};n--;)i=this._mergers[n],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=1<i||t.items.merge,o[n]=s?e*i:this._items[n].width();this._widths=o}},{filter:["items","settings"],run:function(){var t=[],e=this._items,i=this.settings,n=Math.max(2*i.items,4),s=2*Math.ceil(e.length/2),o=i.loop&&e.length?i.rewind?n:Math.max(n,s):0,r="",a="";for(o/=2;o--;)t.push(this.normalize(t.length/2,!0)),r+=e[t[t.length-1]][0].outerHTML,t.push(this.normalize(e.length-1-(t.length-1)/2,!0)),a=e[t[t.length-1]][0].outerHTML+a;this._clones=t,l(r).addClass("cloned").appendTo(this.$stage),l(a).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,i=-1,n=0,s=0,o=[];++i<e;)n=o[i-1]||0,s=this._widths[this.relative(i)]+this.settings.margin,o.push(n+s*t);this._coordinates=o}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,i={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(i)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,n=this.$stage.children();if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],n.eq(e).css(t.css);else i&&(t.css.width=t.items.width,n.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,i,n,s=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,r=this.coordinates(this.current())+o,a=r+this.width()*s,l=[];for(i=0,n=this._coordinates.length;i<n;i++)t=this._coordinates[i-1]||0,e=Math.abs(this._coordinates[i])+o*s,(this.op(t,"<=",r)&&this.op(t,">",a)||this.op(e,"<",r)&&this.op(e,">",a))&&l.push(i);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+l.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],c.prototype.initialize=function(){var t,e,i;(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading"))&&(t=this.$element.find("img"),e=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:o,i=this.$element.children(e).width(),t.length&&i<=0&&this.preloadAutoWidthImages(t));this.$element.addClass(this.options.loadingClass),this.$stage=l("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},c.prototype.setup=function(){var e=this.viewport(),t=this.options.responsive,i=-1,n=null;t?(l.each(t,function(t){t<=e&&i<t&&(i=Number(t))}),"function"==typeof(n=l.extend({},this.options,t[i])).stagePadding&&(n.stagePadding=n.stagePadding()),delete n.responsive,n.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+i))):n=l.extend({},this.options),this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=i,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},c.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},c.prototype.prepare=function(t){var e=this.trigger("prepare",{content:t});return e.data||(e.data=l("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(t)),this.trigger("prepared",{content:e.data}),e.data},c.prototype.update=function(){for(var t=0,e=this._pipe.length,i=l.proxy(function(t){return this[t]},this._invalidated),n={};t<e;)(this._invalidated.all||0<l.grep(this._pipe[t].filter,i).length)&&this._pipe[t].run(n),t++;this._invalidated={},!this.is("valid")&&this.enter("valid")},c.prototype.width=function(t){switch(t=t||c.Width.Default){case c.Width.Inner:case c.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},c.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},c.prototype.onThrottledResize=function(){i.clearTimeout(this.resizeTimer),this.resizeTimer=i.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},c.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},c.prototype.registerEventHandlers=function(){l.support.transition&&this.$stage.on(l.support.transition.end+".owl.core",l.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(i,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",l.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",l.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",l.proxy(this.onDragEnd,this)))},c.prototype.onDragStart=function(t){var e=null;3!==t.which&&(e=l.support.transform?{x:(e=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===e.length?12:4],y:e[16===e.length?13:5]}:(e=this.$stage.position(),{x:this.settings.rtl?e.left+this.$stage.width()-this.width()+this.settings.margin:e.left,y:e.top}),this.is("animating")&&(l.support.transform?this.animate(e.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===t.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=l(t.target),this._drag.stage.start=e,this._drag.stage.current=e,this._drag.pointer=this.pointer(t),l(s).on("mouseup.owl.core touchend.owl.core",l.proxy(this.onDragEnd,this)),l(s).one("mousemove.owl.core touchmove.owl.core",l.proxy(function(t){var e=this.difference(this._drag.pointer,this.pointer(t));l(s).on("mousemove.owl.core touchmove.owl.core",l.proxy(this.onDragMove,this)),Math.abs(e.x)<Math.abs(e.y)&&this.is("valid")||(t.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},c.prototype.onDragMove=function(t){var e=null,i=null,n=null,s=this.difference(this._drag.pointer,this.pointer(t)),o=this.difference(this._drag.stage.start,s);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-e,o.x=((o.x-e)%i+i)%i+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),n=this.settings.pullDrag?-1*s.x/5:0,o.x=Math.max(Math.min(o.x,e+n),i+n)),this._drag.stage.current=o,this.animate(o.x))},c.prototype.onDragEnd=function(t){var e=this.difference(this._drag.pointer,this.pointer(t)),i=this._drag.stage.current,n=0<e.x^this.settings.rtl?"left":"right";l(s).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==e.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(i.x,0!==e.x?n:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=n,(3<Math.abs(e.x)||300<(new Date).getTime()-this._drag.time)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},c.prototype.closest=function(i,n){var s=-1,o=this.width(),r=this.coordinates();return this.settings.freeDrag||l.each(r,l.proxy(function(t,e){return"left"===n&&e-30<i&&i<e+30?s=t:"right"===n&&e-o-30<i&&i<e-o+30?s=t+1:this.op(i,"<",e)&&this.op(i,">",r[t+1]||e-o)&&(s="left"===n?t+1:t),-1===s},this)),this.settings.loop||(this.op(i,">",r[this.minimum()])?s=i=this.minimum():this.op(i,"<",r[this.maximum()])&&(s=i=this.maximum())),s},c.prototype.animate=function(t){var e=0<this.speed();this.is("animating")&&this.onTransitionEnd(),e&&(this.enter("animating"),this.trigger("translate")),l.support.transform3d&&l.support.transition?this.$stage.css({transform:"translate3d("+t+"px,0px,0px)",transition:this.speed()/1e3+"s"}):e?this.$stage.animate({left:t+"px"},this.speed(),this.settings.fallbackEasing,l.proxy(this.onTransitionEnd,this)):this.$stage.css({left:t+"px"})},c.prototype.is=function(t){return this._states.current[t]&&0<this._states.current[t]},c.prototype.current=function(t){if(t===o)return this._current;if(0===this._items.length)return o;if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}});e.data!==o&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},c.prototype.invalidate=function(t){return"string"===l.type(t)&&(this._invalidated[t]=!0,this.is("valid")&&this.leave("valid")),l.map(this._invalidated,function(t,e){return e})},c.prototype.reset=function(t){(t=this.normalize(t))!==o&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},c.prototype.normalize=function(t,e){var i=this._items.length,n=e?0:this._clones.length;return!this.isNumeric(t)||i<1?t=o:(t<0||i+n<=t)&&(t=((t-n/2)%i+i)%i+n/2),t},c.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},c.prototype.maximum=function(t){var e,i,n,s=this.settings,o=this._coordinates.length;if(s.loop)o=this._clones.length/2+this._items.length-1;else if(s.autoWidth||s.merge){for(e=this._items.length,i=this._items[--e].width(),n=this.$element.width();e--&&!(n<(i+=this._items[e].width()+this.settings.margin)););o=e+1}else o=s.center?this._items.length-1:this._items.length-s.items;return t&&(o-=this._clones.length/2),Math.max(o,0)},c.prototype.minimum=function(t){return t?0:this._clones.length/2},c.prototype.items=function(t){return t===o?this._items.slice():(t=this.normalize(t,!0),this._items[t])},c.prototype.mergers=function(t){return t===o?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},c.prototype.clones=function(i){var e=this._clones.length/2,n=e+this._items.length,s=function(t){return t%2==0?n+t/2:e-(t+1)/2};return i===o?l.map(this._clones,function(t,e){return s(e)}):l.map(this._clones,function(t,e){return t===i?s(e):null})},c.prototype.speed=function(t){return t!==o&&(this._speed=t),this._speed},c.prototype.coordinates=function(t){var e,i=1,n=t-1;return t===o?l.map(this._coordinates,l.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(i=-1,n=t+1),e=this._coordinates[t],e+=(this.width()-e+(this._coordinates[n]||0))/2*i):e=this._coordinates[n]||0,e=Math.ceil(e))},c.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},c.prototype.to=function(t,e){var i=this.current(),n=null,s=t-this.relative(i),o=(0<s)-(s<0),r=this._items.length,a=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(s)>r/2&&(s+=-1*o*r),(n=(((t=i+s)-a)%r+r)%r+a)!==t&&n-s<=l&&0<n-s&&(i=n-s,t=n,this.reset(i))):t=this.settings.rewind?(t%(l+=1)+l)%l:Math.max(a,Math.min(l,t)),this.speed(this.duration(i,t,e)),this.current(t),this.$element.is(":visible")&&this.update()},c.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},c.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},c.prototype.onTransitionEnd=function(t){if(t!==o&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},c.prototype.viewport=function(){var t;return this.options.responsiveBaseElement!==i?t=l(this.options.responsiveBaseElement).width():i.innerWidth?t=i.innerWidth:s.documentElement&&s.documentElement.clientWidth?t=s.documentElement.clientWidth:console.warn("Can not detect viewport width."),t},c.prototype.replace=function(t){this.$stage.empty(),this._items=[],t&&(t=t instanceof jQuery?t:l(t)),this.settings.nestedItemSelector&&(t=t.find("."+this.settings.nestedItemSelector)),t.filter(function(){return 1===this.nodeType}).each(l.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},c.prototype.add=function(t,e){var i=this.relative(this._current);e=e===o?this._items.length:this.normalize(e,!0),t=t instanceof jQuery?t:l(t),this.trigger("add",{content:t,position:e}),t=this.prepare(t),0===this._items.length||e===this._items.length?(0===this._items.length&&this.$stage.append(t),0!==this._items.length&&this._items[e-1].after(t),this._items.push(t),this._mergers.push(1*t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[e].before(t),this._items.splice(e,0,t),this._mergers.splice(e,0,1*t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[i]&&this.reset(this._items[i].index()),this.invalidate("items"),this.trigger("added",{content:t,position:e})},c.prototype.remove=function(t){(t=this.normalize(t,!0))!==o&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},c.prototype.preloadAutoWidthImages=function(t){t.each(l.proxy(function(t,e){this.enter("pre-loading"),e=l(e),l(new Image).one("load",l.proxy(function(t){e.attr("src",t.target.src),e.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",e.attr("src")||e.attr("data-src")||e.attr("data-src-retina"))},this))},c.prototype.destroy=function(){for(var t in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),l(s).off(".owl.core"),!1!==this.settings.responsive&&(i.clearTimeout(this.resizeTimer),this.off(i,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[t].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},c.prototype.op=function(t,e,i){var n=this.settings.rtl;switch(e){case"<":return n?i<t:t<i;case">":return n?t<i:i<t;case">=":return n?t<=i:i<=t;case"<=":return n?i<=t:t<=i}},c.prototype.on=function(t,e,i,n){t.addEventListener?t.addEventListener(e,i,n):t.attachEvent&&t.attachEvent("on"+e,i)},c.prototype.off=function(t,e,i,n){t.removeEventListener?t.removeEventListener(e,i,n):t.detachEvent&&t.detachEvent("on"+e,i)},c.prototype.trigger=function(t,e,i,n,s){var o={item:{count:this._items.length,index:this.current()}},r=l.camelCase(l.grep(["on",t,i],function(t){return t}).join("-").toLowerCase()),a=l.Event([t,"owl",i||"carousel"].join(".").toLowerCase(),l.extend({relatedTarget:this},o,e));return this._supress[t]||(l.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(a)}),this.register({type:c.Type.Event,name:t}),this.$element.trigger(a),this.settings&&"function"==typeof this.settings[r]&&this.settings[r].call(this,a)),a},c.prototype.enter=function(t){l.each([t].concat(this._states.tags[t]||[]),l.proxy(function(t,e){this._states.current[e]===o&&(this._states.current[e]=0),this._states.current[e]++},this))},c.prototype.leave=function(t){l.each([t].concat(this._states.tags[t]||[]),l.proxy(function(t,e){this._states.current[e]--},this))},c.prototype.register=function(i){if(i.type===c.Type.Event){if(l.event.special[i.name]||(l.event.special[i.name]={}),!l.event.special[i.name].owl){var e=l.event.special[i.name]._default;l.event.special[i.name]._default=function(t){return!e||!e.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&-1<t.namespace.indexOf("owl"):e.apply(this,arguments)},l.event.special[i.name].owl=!0}}else i.type===c.Type.State&&(this._states.tags[i.name]?this._states.tags[i.name]=this._states.tags[i.name].concat(i.tags):this._states.tags[i.name]=i.tags,this._states.tags[i.name]=l.grep(this._states.tags[i.name],l.proxy(function(t,e){return l.inArray(t,this._states.tags[i.name])===e},this)))},c.prototype.suppress=function(t){l.each(t,l.proxy(function(t,e){this._supress[e]=!0},this))},c.prototype.release=function(t){l.each(t,l.proxy(function(t,e){delete this._supress[e]},this))},c.prototype.pointer=function(t){var e={x:null,y:null};return(t=(t=t.originalEvent||t||i.event).touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t).pageX?(e.x=t.pageX,e.y=t.pageY):(e.x=t.clientX,e.y=t.clientY),e},c.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},c.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},l.fn.owlCarousel=function(e){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=l(this),i=t.data("owl.carousel");i||(i=new c(this,"object"==typeof e&&e),t.data("owl.carousel",i),l.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(t,e){i.register({type:c.Type.Event,name:e}),i.$element.on(e+".owl.carousel.core",l.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([e]),i[e].apply(this,[].slice.call(arguments,1)),this.release([e]))},i))})),"string"==typeof e&&"_"!==e.charAt(0)&&i[e].apply(i,n)})},l.fn.owlCarousel.Constructor=c}(window.Zepto||window.jQuery,window,document),function(e,i,t,n){var s=function(t){this._core=t,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":e.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=e.extend({},s.Defaults,this._core.options),this._core.$element.on(this._handlers)};s.Defaults={autoRefresh:!0,autoRefreshInterval:500},s.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=i.setInterval(e.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},s.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},s.prototype.destroy=function(){var t,e;for(t in i.clearInterval(this._interval),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},e.fn.owlCarousel.Constructor.Plugins.AutoRefresh=s}(window.Zepto||window.jQuery,window,document),function(a,o,t,e){var i=function(t){this._core=t,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(t){if(t.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(t.property&&"position"==t.property.name||"initialized"==t.type))for(var e=this._core.settings,i=e.center&&Math.ceil(e.items/2)||e.items,n=e.center&&-1*i||0,s=(t.property&&void 0!==t.property.value?t.property.value:this._core.current())+n,o=this._core.clones().length,r=a.proxy(function(t,e){this.load(e)},this);n++<i;)this.load(o/2+this._core.relative(s)),o&&a.each(this._core.clones(this._core.relative(s)),r),s++},this)},this._core.options=a.extend({},i.Defaults,this._core.options),this._core.$element.on(this._handlers)};i.Defaults={lazyLoad:!1},i.prototype.load=function(t){var e=this._core.$stage.children().eq(t),i=e&&e.find(".owl-lazy");!i||-1<a.inArray(e.get(0),this._loaded)||(i.each(a.proxy(function(t,e){var i,n=a(e),s=1<o.devicePixelRatio&&n.attr("data-src-retina")||n.attr("data-src");this._core.trigger("load",{element:n,url:s},"lazy"),n.is("img")?n.one("load.owl.lazy",a.proxy(function(){n.css("opacity",1),this._core.trigger("loaded",{element:n,url:s},"lazy")},this)).attr("src",s):((i=new Image).onload=a.proxy(function(){n.css({"background-image":'url("'+s+'")',opacity:"1"}),this._core.trigger("loaded",{element:n,url:s},"lazy")},this),i.src=s)},this)),this._loaded.push(e.get(0)))},i.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=i}(window.Zepto||window.jQuery,window,document),function(o,t,e,i){var n=function(t){this._core=t,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"==t.property.name&&this.update()},this),"loaded.owl.lazy":o.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=o.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},n.prototype.update=function(){var t,e=this._core._current,i=e+this._core.settings.items,n=this._core.$stage.children().toArray().slice(e,i),s=[];o.each(n,function(t,e){s.push(o(e).height())}),t=Math.max.apply(null,s),this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)},n.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},o.fn.owlCarousel.Constructor.Plugins.AutoHeight=n}(window.Zepto||window.jQuery,window,document),function(u,t,e,i){var n=function(t){this._core=t,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":u.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":u.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":u.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":u.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":u.proxy(function(t){if(t.namespace){var e=u(t.content).find(".owl-video");e.length&&(e.css("display","none"),this.fetch(e,u(t.content)))}},this)},this._core.options=u.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",u.proxy(function(t){this.play(t)},this))};n.Defaults={video:!1,videoHeight:!1,videoWidth:!1},n.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube",n=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),s=t.attr("data-width")||this._core.settings.videoWidth,o=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if(-1<(n=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu"))i="youtube";else if(-1<n[3].indexOf("vimeo"))i="vimeo";else{if(!(-1<n[3].indexOf("vzaar")))throw new Error("Video URL not supported.");i="vzaar"}n=n[6],this._videos[r]={type:i,id:n,width:s,height:o},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},n.prototype.thumbnail=function(e,t){var i,n,s=t.width&&t.height?'style="width:'+t.width+"px;height:"+t.height+'px;"':"",o=e.find("img"),r="src",a="",l=this._core.settings,c=function(t){'<div class="owl-video-play-icon"></div>',i=l.lazyLoad?'<div class="owl-video-tn '+a+'" '+r+'="'+t+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+t+')"></div>',e.after(i),e.after('<div class="owl-video-play-icon"></div>')};if(e.wrap('<div class="owl-video-wrapper"'+s+"></div>"),this._core.settings.lazyLoad&&(r="data-src",a="owl-lazy"),o.length)return c(o.attr(r)),o.remove(),!1;"youtube"===t.type?(n="//img.youtube.com/vi/"+t.id+"/hqdefault.jpg",c(n)):"vimeo"===t.type?u.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+t.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t[0].thumbnail_large,c(n)}}):"vzaar"===t.type&&u.ajax({type:"GET",url:"//vzaar.com/api/videos/"+t.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t.framegrab_url,c(n)}})},n.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},n.prototype.play=function(t){var e,i=u(t.target).closest("."+this._core.settings.itemClass),n=this._videos[i.attr("data-video")],s=n.width||"100%",o=n.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),i=this._core.items(this._core.relative(i.index())),this._core.reset(i.index()),"youtube"===n.type?e='<iframe width="'+s+'" height="'+o+'" src="//www.youtube.com/embed/'+n.id+"?autoplay=1&rel=0&v="+n.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===n.type?e='<iframe src="//player.vimeo.com/video/'+n.id+'?autoplay=1" width="'+s+'" height="'+o+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===n.type&&(e='<iframe frameborder="0"height="'+o+'"width="'+s+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+n.id+'/player?autoplay=true"></iframe>'),u('<div class="owl-video-frame">'+e+"</div>").insertAfter(i.find(".owl-video")),this._playing=i.addClass("owl-video-playing"))},n.prototype.isInFullScreen=function(){var t=e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement;return t&&u(t).parent().hasClass("owl-video-frame")},n.prototype.destroy=function(){var t,e;for(t in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},u.fn.owlCarousel.Constructor.Plugins.Video=n}(window.Zepto||window.jQuery,window,document),function(r,t,e,i){var n=function(t){this.core=t,this.core.options=r.extend({},n.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":r.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":r.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":r.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};n.Defaults={animateOut:!1,animateIn:!1},n.prototype.swap=function(){if(1===this.core.settings.items&&r.support.animation&&r.support.transition){this.core.speed(0);var t,e=r.proxy(this.clear,this),i=this.core.$stage.children().eq(this.previous),n=this.core.$stage.children().eq(this.next),s=this.core.settings.animateIn,o=this.core.settings.animateOut;this.core.current()!==this.previous&&(o&&(t=this.core.coordinates(this.previous)-this.core.coordinates(this.next),i.one(r.support.animation.end,e).css({left:t+"px"}).addClass("animated owl-animated-out").addClass(o)),s&&n.one(r.support.animation.end,e).addClass("animated owl-animated-in").addClass(s))}},n.prototype.clear=function(t){r(t.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},r.fn.owlCarousel.Constructor.Plugins.Animate=n}(window.Zepto||window.jQuery,window,document),function(i,n,s,t){var e=function(t){this._core=t,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":i.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":i.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":i.proxy(function(t,e,i){t.namespace&&this.play(e,i)},this),"stop.owl.autoplay":i.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":i.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":i.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":i.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":i.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=i.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(t,e){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(t,e){return this._timeout&&n.clearTimeout(this._timeout),n.setTimeout(i.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||s.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),t||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(n.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var t,e;for(t in this.stop(),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},i.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(o,t,e,i){"use strict";var n=function(t){this._core=t,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":o.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":o.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":o.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=o.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers)};n.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},n.prototype.initialize=function(){var t,i=this._core.settings;for(t in this._controls.$relative=(i.navContainer?o(i.navContainer):o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=o("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",o.proxy(function(t){this.prev(i.navSpeed)},this)),this._controls.$next=o("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",o.proxy(function(t){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[o("<div>").addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?o(i.dotsContainer):o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",o.proxy(function(t){var e=o(t.target).parent().is(this._controls.$absolute)?o(t.target).index():o(t.target).parent().index();t.preventDefault(),this.to(e,i.dotsSpeed)},this)),this._overrides)this._core[t]=o.proxy(this[t],this)},n.prototype.destroy=function(){var t,e,i,n;for(t in this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)this._controls[e].remove();for(n in this.overides)this._core[n]=this._overrides[n];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},n.prototype.update=function(){var t,e,i=this._core.clones().length/2,n=i+this._core.items().length,s=this._core.maximum(!0),o=this._core.settings,r=o.center||o.autoWidth||o.dotsData?1:o.dotsEach||o.items;if("page"!==o.slideBy&&(o.slideBy=Math.min(o.slideBy,o.items)),o.dots||"page"==o.slideBy)for(this._pages=[],t=i,e=0;t<n;t++){if(r<=e||0===e){if(this._pages.push({start:Math.min(s,t-i),end:t-i+r-1}),Math.min(s,t-i)===s)break;e=0,0}e+=this._core.mergers(this._core.relative(t))}},n.prototype.draw=function(){var t,e=this._core.settings,i=this._core.items().length<=e.items,n=this._core.relative(this._core.current()),s=e.loop||e.rewind;this._controls.$relative.toggleClass("disabled",!e.nav||i),e.nav&&(this._controls.$previous.toggleClass("disabled",!s&&n<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!s&&n>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!e.dots||i),e.dots&&(t=this._pages.length-this._controls.$absolute.children().length,e.dotsData&&0!==t?this._controls.$absolute.html(this._templates.join("")):0<t?this._controls.$absolute.append(new Array(t+1).join(this._templates[0])):t<0&&this._controls.$absolute.children().slice(t).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(o.inArray(this.current(),this._pages)).addClass("active"))},n.prototype.onTrigger=function(t){var e=this._core.settings;t.page={index:o.inArray(this.current(),this._pages),count:this._pages.length,size:e&&(e.center||e.autoWidth||e.dotsData?1:e.dotsEach||e.items)}},n.prototype.current=function(){var i=this._core.relative(this._core.current());return o.grep(this._pages,o.proxy(function(t,e){return t.start<=i&&t.end>=i},this)).pop()},n.prototype.getPosition=function(t){var e,i,n=this._core.settings;return"page"==n.slideBy?(e=o.inArray(this.current(),this._pages),i=this._pages.length,t?++e:--e,e=this._pages[(e%i+i)%i].start):(e=this._core.relative(this._core.current()),i=this._core.items().length,t?e+=n.slideBy:e-=n.slideBy),e},n.prototype.next=function(t){o.proxy(this._overrides.to,this._core)(this.getPosition(!0),t)},n.prototype.prev=function(t){o.proxy(this._overrides.to,this._core)(this.getPosition(!1),t)},n.prototype.to=function(t,e,i){var n;!i&&this._pages.length?(n=this._pages.length,o.proxy(this._overrides.to,this._core)(this._pages[(t%n+n)%n].start,e)):o.proxy(this._overrides.to,this._core)(t,e)},o.fn.owlCarousel.Constructor.Plugins.Navigation=n}(window.Zepto||window.jQuery,window,document),function(n,s,t,e){"use strict";var i=function(t){this._core=t,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":n.proxy(function(t){t.namespace&&"URLHash"===this._core.settings.startPosition&&n(s).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":n.proxy(function(t){if(t.namespace){var e=n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!e)return;this._hashes[e]=t.content}},this),"changed.owl.carousel":n.proxy(function(t){if(t.namespace&&"position"===t.property.name){var i=this._core.items(this._core.relative(this._core.current())),e=n.map(this._hashes,function(t,e){return t===i?e:null}).join();if(!e||s.location.hash.slice(1)===e)return;s.location.hash=e}},this)},this._core.options=n.extend({},i.Defaults,this._core.options),this.$element.on(this._handlers),n(s).on("hashchange.owl.navigation",n.proxy(function(t){var e=s.location.hash.substring(1),i=this._core.$stage.children(),n=this._hashes[e]&&i.index(this._hashes[e]);void 0!==n&&n!==this._core.current()&&this._core.to(this._core.relative(n),!1,!0)},this))};i.Defaults={URLhashListener:!1},i.prototype.destroy=function(){var t,e;for(t in n(s).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},n.fn.owlCarousel.Constructor.Plugins.Hash=i}(window.Zepto||window.jQuery,window,document),function(s,t,e,o){var r=s("<support>").get(0).style,a="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},n=function(){return!!u("transform")},l=function(){return!!u("perspective")},c=function(){return!!u("animation")};function u(t,i){var n=!1,e=t.charAt(0).toUpperCase()+t.slice(1);return s.each((t+" "+a.join(e+" ")+e).split(" "),function(t,e){if(r[e]!==o)return n=!i||e,!1}),n}function h(t){return u(t,!0)}(function(){return!!u("transition")})()&&(s.support.transition=new String(h("transition")),s.support.transition.end=i.transition.end[s.support.transition]),c()&&(s.support.animation=new String(h("animation")),s.support.animation.end=i.animation.end[s.support.animation]),n()&&(s.support.transform=new String(h("transform")),s.support.transform3d=l())}(window.Zepto||window.jQuery,window,document),function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.PhotoSwipeUI_Default=e()}(this,function(){"use strict";return function(s,a){var i,l,o,r,e,n,c,u,h,t,d,p,m,A,f,g,w,v,y=this,_=!1,x=!0,b=!0,C={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(t,e){return t.title?(e.children[0].innerHTML=t.title,!0):(e.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return s.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return s.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},T=function(t){if(g)return!0;t=t||window.event,f.timeToIdle&&f.mouseUsed&&!h&&P();for(var e,i,n=(t.target||t.srcElement).getAttribute("class")||"",s=0;s<L.length;s++)(e=L[s]).onTap&&-1<n.indexOf("pswp__"+e.name)&&(e.onTap(),i=!0);if(i){t.stopPropagation&&t.stopPropagation(),g=!0;var o=a.features.isOldAndroid?600:30;setTimeout(function(){g=!1},o)}},E=function(t,e,i){a[(i?"add":"remove")+"Class"](t,"pswp__"+e)},k=function(){var t=1===f.getNumItemsFn();t!==A&&(E(l,"ui--one-slide",t),A=t)},I=function(){E(c,"share-modal--hidden",b)},S=function(){return(b=!b)?(a.removeClass(c,"pswp__share-modal--fade-in"),setTimeout(function(){b&&I()},300)):(I(),setTimeout(function(){b||a.addClass(c,"pswp__share-modal--fade-in")},30)),b||M(),!1},D=function(t){var e=(t=t||window.event).target||t.srcElement;return s.shout("shareLinkClick",t,e),!(!e.href||!e.hasAttribute("download")&&(window.open(e.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),b||S(),1))},M=function(){for(var t,e,i,n,s="",o=0;o<f.shareButtons.length;o++)t=f.shareButtons[o],e=f.getImageURLForShare(t),i=f.getPageURLForShare(t),n=f.getTextForShare(t),s+='<a href="'+t.url.replace("{{url}}",encodeURIComponent(i)).replace("{{image_url}}",encodeURIComponent(e)).replace("{{raw_image_url}}",e).replace("{{text}}",encodeURIComponent(n))+'" target="_blank" class="pswp__share--'+t.id+'"'+(t.download?"download":"")+">"+t.label+"</a>",f.parseShareButtonOut&&(s=f.parseShareButtonOut(t,s));c.children[0].innerHTML=s,c.children[0].onclick=D},z=function(t){for(var e=0;e<f.closeElClasses.length;e++)if(a.hasClass(t,"pswp__"+f.closeElClasses[e]))return!0},B=0,P=function(){clearTimeout(v),B=0,h&&y.setIdle(!1)},F=function(t){var e=(t=t||window.event).relatedTarget||t.toElement;e&&"HTML"!==e.nodeName||(clearTimeout(v),v=setTimeout(function(){y.setIdle(!0)},f.timeToIdleOutside))},R=function(t){p!==t&&(E(d,"preloader--active",!t),p=t)},O=function(t){var e=t.vGap;if(!s.likelyTouchDevice||f.mouseUsed||screen.width>f.fitControlsWidth){var i=f.barsSize;if(f.captionEl&&"auto"===i.bottom)if(r||((r=a.createEl("pswp__caption pswp__caption--fake")).appendChild(a.createEl("pswp__caption__center")),l.insertBefore(r,o),a.addClass(l,"pswp__ui--fit")),f.addCaptionHTMLFn(t,r,!0)){var n=r.clientHeight;e.bottom=parseInt(n,10)||44}else e.bottom=i.top;else e.bottom="auto"===i.bottom?0:i.bottom;e.top=i.top}else e.top=e.bottom=0},L=[{name:"caption",option:"captionEl",onInit:function(t){o=t}},{name:"share-modal",option:"shareEl",onInit:function(t){c=t},onTap:function(){S()}},{name:"button--share",option:"shareEl",onInit:function(t){n=t},onTap:function(){S()}},{name:"button--zoom",option:"zoomEl",onTap:s.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(t){e=t}},{name:"button--close",option:"closeEl",onTap:s.close},{name:"button--arrow--left",option:"arrowEl",onTap:s.prev},{name:"button--arrow--right",option:"arrowEl",onTap:s.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){i.isFullscreen()?i.exit():i.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(t){d=t}}];y.init=function(){var e;a.extend(s.options,C,!0),f=s.options,l=a.getChildByClass(s.scrollWrap,"pswp__ui"),(t=s.listen)("onVerticalDrag",function(t){x&&t<.95?y.hideControls():!x&&.95<=t&&y.showControls()}),t("onPinchClose",function(t){x&&t<.9?(y.hideControls(),e=!0):e&&!x&&.9<t&&y.showControls()}),t("zoomGestureEnded",function(){(e=!1)&&!x&&y.showControls()}),t("beforeChange",y.update),t("doubleTap",function(t){var e=s.currItem.initialZoomLevel;s.getZoomLevel()!==e?s.zoomTo(e,t,333):s.zoomTo(f.getDoubleTapZoom(!1,s.currItem),t,333)}),t("preventDragEvent",function(t,e,i){var n=t.target||t.srcElement;n&&n.getAttribute("class")&&-1<t.type.indexOf("mouse")&&(0<n.getAttribute("class").indexOf("__caption")||/(SMALL|STRONG|EM)/i.test(n.tagName))&&(i.prevent=!1)}),t("bindEvents",function(){a.bind(l,"pswpTap click",T),a.bind(s.scrollWrap,"pswpTap",y.onGlobalTap),s.likelyTouchDevice||a.bind(s.scrollWrap,"mouseover",y.onMouseOver)}),t("unbindEvents",function(){b||S(),w&&clearInterval(w),a.unbind(document,"mouseout",F),a.unbind(document,"mousemove",P),a.unbind(l,"pswpTap click",T),a.unbind(s.scrollWrap,"pswpTap",y.onGlobalTap),a.unbind(s.scrollWrap,"mouseover",y.onMouseOver),i&&(a.unbind(document,i.eventK,y.updateFullscreen),i.isFullscreen()&&(f.hideAnimationDuration=0,i.exit()),i=null)}),t("destroy",function(){f.captionEl&&(r&&l.removeChild(r),a.removeClass(o,"pswp__caption--empty")),c&&(c.children[0].onclick=null),a.removeClass(l,"pswp__ui--over-close"),a.addClass(l,"pswp__ui--hidden"),y.setIdle(!1)}),f.showAnimationDuration||a.removeClass(l,"pswp__ui--hidden"),t("initialZoomIn",function(){f.showAnimationDuration&&a.removeClass(l,"pswp__ui--hidden")}),t("initialZoomOut",function(){a.addClass(l,"pswp__ui--hidden")}),t("parseVerticalMargin",O),function(){var s,o,r,t=function(t){if(t)for(var e=t.length,i=0;i<e;i++){s=t[i],o=s.className;for(var n=0;n<L.length;n++)r=L[n],-1<o.indexOf("pswp__"+r.name)&&(f[r.option]?(a.removeClass(s,"pswp__element--disabled"),r.onInit&&r.onInit(s)):a.addClass(s,"pswp__element--disabled"))}};t(l.children);var e=a.getChildByClass(l,"pswp__top-bar");e&&t(e.children)}(),f.shareEl&&n&&c&&(b=!0),k(),f.timeToIdle&&t("mouseUsed",function(){a.bind(document,"mousemove",P),a.bind(document,"mouseout",F),w=setInterval(function(){2==++B&&y.setIdle(!0)},f.timeToIdle/2)}),f.fullscreenEl&&!a.features.isOldAndroid&&(i||(i=y.getFullscreenAPI()),i?(a.bind(document,i.eventK,y.updateFullscreen),y.updateFullscreen(),a.addClass(s.template,"pswp--supports-fs")):a.removeClass(s.template,"pswp--supports-fs")),f.preloaderEl&&(R(!0),t("beforeChange",function(){clearTimeout(m),m=setTimeout(function(){s.currItem&&s.currItem.loading?(!s.allowProgressiveImg()||s.currItem.img&&!s.currItem.img.naturalWidth)&&R(!1):R(!0)},f.loadingIndicatorDelay)}),t("imageLoadComplete",function(t,e){s.currItem===e&&R(!0)}))},y.setIdle=function(t){E(l,"ui--idle",h=t)},y.update=function(){_=!(!x||!s.currItem||(y.updateIndexIndicator(),f.captionEl&&(f.addCaptionHTMLFn(s.currItem,o),E(o,"caption--empty",!s.currItem.title)),0)),b||S(),k()},y.updateFullscreen=function(t){t&&setTimeout(function(){s.setScrollOffset(0,a.getScrollY())},50),a[(i.isFullscreen()?"add":"remove")+"Class"](s.template,"pswp--fs")},y.updateIndexIndicator=function(){f.counterEl&&(e.innerHTML=s.getCurrentIndex()+1+f.indexIndicatorSep+f.getNumItemsFn())},y.onGlobalTap=function(t){var e=(t=t||window.event).target||t.srcElement;if(!g)if(t.detail&&"mouse"===t.detail.pointerType){if(z(e))return void s.close();a.hasClass(e,"pswp__img")&&(1===s.getZoomLevel()&&s.getZoomLevel()<=s.currItem.fitRatio?f.clickToCloseNonZoomable&&s.close():s.toggleDesktopZoom(t.detail.releasePoint))}else if(f.tapToToggleControls&&(x?y.hideControls():y.showControls()),f.tapToClose&&(a.hasClass(e,"pswp__img")||z(e)))return void s.close()},y.onMouseOver=function(t){var e=(t=t||window.event).target||t.srcElement;E(l,"ui--over-close",z(e))},y.hideControls=function(){a.addClass(l,"pswp__ui--hidden"),x=!1},y.showControls=function(){x=!0,_||y.update(),a.removeClass(l,"pswp__ui--hidden")},y.supportsFullscreen=function(){var t=document;return!!(t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen)},y.getFullscreenAPI=function(){var t,e=document.documentElement,i="fullscreenchange";return e.requestFullscreen?t={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:i}:e.mozRequestFullScreen?t={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+i}:e.webkitRequestFullscreen?t={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+i}:e.msRequestFullscreen&&(t={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),t&&(t.enter=function(){if(u=f.closeOnScroll,f.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK)return s.template[this.enterK]();s.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},t.exit=function(){return f.closeOnScroll=u,document[this.exitK]()},t.isFullscreen=function(){return document[this.elementK]}),t}}}),function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.PhotoSwipe=e()}(this,function(){"use strict";return function(p,n,t,e){var m={features:null,bind:function(t,e,i,n){var s=(n?"remove":"add")+"EventListener";e=e.split(" ");for(var o=0;o<e.length;o++)e[o]&&t[s](e[o],i,!1)},isArray:function(t){return t instanceof Array},createEl:function(t,e){var i=document.createElement(e||"div");return t&&(i.className=t),i},getScrollY:function(){var t=window.pageYOffset;return void 0!==t?t:document.documentElement.scrollTop},unbind:function(t,e,i){m.bind(t,e,i,!0)},removeClass:function(t,e){var i=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(i," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(t,e){m.hasClass(t,e)||(t.className+=(t.className?" ":"")+e)},hasClass:function(t,e){return t.className&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},getChildByClass:function(t,e){for(var i=t.firstChild;i;){if(m.hasClass(i,e))return i;i=i.nextSibling}},arraySearch:function(t,e,i){for(var n=t.length;n--;)if(t[n][i]===e)return n;return-1},extend:function(t,e,i){for(var n in e)if(e.hasOwnProperty(n)){if(i&&t.hasOwnProperty(n))continue;t[n]=e[n]}},easing:{sine:{out:function(t){return Math.sin(t*(Math.PI/2))},inOut:function(t){return-(Math.cos(Math.PI*t)-1)/2}},cubic:{out:function(t){return--t*t*t+1}}},detectFeatures:function(){if(m.features)return m.features;var t=m.createEl().style,e="",i={};if(i.oldIE=document.all&&!document.addEventListener,i.touch="ontouchstart"in window,window.requestAnimationFrame&&(i.raf=window.requestAnimationFrame,i.caf=window.cancelAnimationFrame),i.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!i.pointerEvent){var n=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var s=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);s&&0<s.length&&1<=(s=parseInt(s[1],10))&&s<8&&(i.isOldIOSPhone=!0)}var o=n.match(/Android\s([0-9\.]*)/),r=o?o[1]:0;1<=(r=parseFloat(r))&&(r<4.4&&(i.isOldAndroid=!0),i.androidVersion=r),i.isMobileOpera=/opera mini|opera mobi/i.test(n)}for(var a,l,c=["transform","perspective","animationName"],u=["","webkit","Moz","ms","O"],h=0;h<4;h++){e=u[h];for(var d=0;d<3;d++)a=c[d],l=e+(e?a.charAt(0).toUpperCase()+a.slice(1):a),!i[a]&&l in t&&(i[a]=l);e&&!i.raf&&(e=e.toLowerCase(),i.raf=window[e+"RequestAnimationFrame"],i.raf&&(i.caf=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]))}if(!i.raf){var p=0;i.raf=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-p)),n=window.setTimeout(function(){t(e+i)},i);return p=e+i,n},i.caf=function(t){clearTimeout(t)}}return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,m.features=i}};m.detectFeatures(),m.features.oldIE&&(m.bind=function(t,e,i,n){e=e.split(" ");for(var s,o=(n?"detach":"attach")+"Event",r=function(){i.handleEvent.call(i)},a=0;a<e.length;a++)if(s=e[a])if("object"==typeof i&&i.handleEvent){if(n){if(!i["oldIE"+s])return!1}else i["oldIE"+s]=r;t[o]("on"+s,i["oldIE"+s])}else t[o]("on"+s,i)});var A=this,f={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(t){return"A"===t.tagName},getDoubleTapZoom:function(t,e){return t?1:e.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};m.extend(f,e);var l,s,o,g,r,a,c,u,h,w,d,v,y,_,x,b,C,T,E,k,I,S,D,M,z,B,P,F,R,O,L,Z,$,W,H,j,N,U,Q,G,V,Y,i,X,q,K,J,tt,et,it,nt,st,ot,rt,at,lt,ct={x:0,y:0},ut={x:0,y:0},ht={x:0,y:0},dt={},pt=0,mt={},At={x:0,y:0},ft=0,gt=!0,wt=[],vt={},yt=!1,_t=function(t,e){m.extend(A,e.publicMethods),wt.push(t)},xt=function(t){var e=We();return e-1<t?t-e:t<0?e+t:t},bt={},Ct=function(t,e){return bt[t]||(bt[t]=[]),bt[t].push(e)},Tt=function(t){var e=bt[t];if(e){var i=Array.prototype.slice.call(arguments);i.shift();for(var n=0;n<e.length;n++)e[n].apply(A,i)}},Et=function(){return(new Date).getTime()},kt=function(t){rt=t,A.bg.style.opacity=t*f.bgOpacity},It=function(t,e,i,n,s){(!yt||s&&s!==A.currItem)&&(n/=s?s.fitRatio:A.currItem.fitRatio),t[S]=v+e+"px, "+i+"px"+y+" scale("+n+")"},St=function(t){et&&(t&&(w>A.currItem.fitRatio?yt||(Xe(A.currItem,!1,!0),yt=!0):yt&&(Xe(A.currItem),yt=!1)),It(et,ht.x,ht.y,w))},Dt=function(t){t.container&&It(t.container.style,t.initialPosition.x,t.initialPosition.y,t.initialZoomLevel,t)},Mt=function(t,e){e[S]=v+t+"px, 0px"+y},zt=function(t,e){if(!f.loop&&e){var i=g+(At.x*pt-t)/At.x,n=Math.round(t-ue.x);(i<0&&0<n||i>=We()-1&&n<0)&&(t=ue.x+n*f.mainScrollEndFriction)}ue.x=t,Mt(t,r)},Bt=function(t,e){var i=he[t]-mt[t];return ut[t]+ct[t]+i-i*(e/d)},Pt=function(t,e){t.x=e.x,t.y=e.y,e.id&&(t.id=e.id)},Ft=function(t){t.x=Math.round(t.x),t.y=Math.round(t.y)},Rt=null,Ot=function(){Rt&&(m.unbind(document,"mousemove",Ot),m.addClass(p,"pswp--has_mouse"),f.mouseUsed=!0,Tt("mouseUsed")),Rt=setTimeout(function(){Rt=null},100)},Lt=function(t,e){var i=Qe(A.currItem,dt,t);return e&&(tt=i),i},Zt=function(t){return t||(t=A.currItem),t.initialZoomLevel},$t=function(t){return t||(t=A.currItem),0<t.w?f.maxSpreadZoom:1},Wt=function(t,e,i,n){return n===A.currItem.initialZoomLevel?(i[t]=A.currItem.initialPosition[t],!0):(i[t]=Bt(t,n),i[t]>e.min[t]?(i[t]=e.min[t],!0):i[t]<e.max[t]&&(i[t]=e.max[t],!0))},Ht=function(t){var e="";f.escKey&&27===t.keyCode?e="close":f.arrowKeys&&(37===t.keyCode?e="prev":39===t.keyCode&&(e="next")),e&&(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey||(t.preventDefault?t.preventDefault():t.returnValue=!1,A[e]()))},jt=function(t){t&&(Y||V||it||N)&&(t.preventDefault(),t.stopPropagation())},Nt=function(){A.setScrollOffset(0,m.getScrollY())},Ut={},Qt=0,Gt=function(t){Ut[t]&&(Ut[t].raf&&B(Ut[t].raf),Qt--,delete Ut[t])},Vt=function(t){Ut[t]&&Gt(t),Ut[t]||(Qt++,Ut[t]={})},Yt=function(){for(var t in Ut)Ut.hasOwnProperty(t)&&Gt(t)},Xt=function(t,e,i,n,s,o,r){var a,l=Et();Vt(t);var c=function(){if(Ut[t]){if(a=Et()-l,n<=a)return Gt(t),o(i),void(r&&r());o((i-e)*s(a/n)+e),Ut[t].raf=z(c)}};c()},qt={shout:Tt,listen:Ct,viewportSize:dt,options:f,isMainScrollAnimating:function(){return it},getZoomLevel:function(){return w},getCurrentIndex:function(){return g},isDragging:function(){return Q},isZooming:function(){return K},setScrollOffset:function(t,e){mt.x=t,O=mt.y=e,Tt("updateScrollOffset",mt)},applyZoomPan:function(t,e,i,n){ht.x=e,ht.y=i,w=t,St(n)},init:function(){if(!l&&!s){var t;A.framework=m,A.template=p,A.bg=m.getChildByClass(p,"pswp__bg"),P=p.className,l=!0,L=m.detectFeatures(),z=L.raf,B=L.caf,S=L.transform,R=L.oldIE,A.scrollWrap=m.getChildByClass(p,"pswp__scroll-wrap"),A.container=m.getChildByClass(A.scrollWrap,"pswp__container"),r=A.container.style,A.itemHolders=b=[{el:A.container.children[0],wrap:0,index:-1},{el:A.container.children[1],wrap:0,index:-1},{el:A.container.children[2],wrap:0,index:-1}],b[0].el.style.display=b[2].el.style.display="none",function(){if(S){var t=L.perspective&&!M;return v="translate"+(t?"3d(":"("),y=L.perspective?", 0px)":")"}S="left",m.addClass(p,"pswp--ie"),Mt=function(t,e){e.left=t+"px"},Dt=function(t){var e=1<t.fitRatio?1:t.fitRatio,i=t.container.style,n=e*t.w,s=e*t.h;i.width=n+"px",i.height=s+"px",i.left=t.initialPosition.x+"px",i.top=t.initialPosition.y+"px"},St=function(){if(et){var t=et,e=A.currItem,i=1<e.fitRatio?1:e.fitRatio,n=i*e.w,s=i*e.h;t.width=n+"px",t.height=s+"px",t.left=ht.x+"px",t.top=ht.y+"px"}}}(),h={resize:A.updateSize,orientationchange:function(){clearTimeout(Z),Z=setTimeout(function(){dt.x!==A.scrollWrap.clientWidth&&A.updateSize()},500)},scroll:Nt,keydown:Ht,click:jt};var e=L.isOldIOSPhone||L.isOldAndroid||L.isMobileOpera;for(L.animationName&&L.transform&&!e||(f.showAnimationDuration=f.hideAnimationDuration=0),t=0;t<wt.length;t++)A["init"+wt[t]]();n&&(A.ui=new n(A,m)).init(),Tt("firstUpdate"),g=g||f.index||0,(isNaN(g)||g<0||g>=We())&&(g=0),A.currItem=$e(g),(L.isOldIOSPhone||L.isOldAndroid)&&(gt=!1),p.setAttribute("aria-hidden","false"),f.modal&&(gt?p.style.position="fixed":(p.style.position="absolute",p.style.top=m.getScrollY()+"px")),void 0===O&&(Tt("initialLayout"),O=F=m.getScrollY());var i="pswp--open ";for(f.mainClass&&(i+=f.mainClass+" "),f.showHideOpacity&&(i+="pswp--animate_opacity "),i+=M?"pswp--touch":"pswp--notouch",i+=L.animationName?" pswp--css_animation":"",i+=L.svg?" pswp--svg":"",m.addClass(p,i),A.updateSize(),a=-1,ft=null,t=0;t<3;t++)Mt((t+a)*At.x,b[t].el.style);R||m.bind(A.scrollWrap,u,A),Ct("initialZoomInEnd",function(){A.setContent(b[0],g-1),A.setContent(b[2],g+1),b[0].el.style.display=b[2].el.style.display="block",f.focus&&p.focus(),m.bind(document,"keydown",A),L.transform&&m.bind(A.scrollWrap,"click",A),f.mouseUsed||m.bind(document,"mousemove",Ot),m.bind(window,"resize scroll orientationchange",A),Tt("bindEvents")}),A.setContent(b[1],g),A.updateCurrItem(),Tt("afterInit"),gt||(_=setInterval(function(){Qt||Q||K||w!==A.currItem.initialZoomLevel||A.updateSize()},1e3)),m.addClass(p,"pswp--visible")}},close:function(){l&&(s=!(l=!1),Tt("close"),m.unbind(window,"resize scroll orientationchange",A),m.unbind(window,"scroll",h.scroll),m.unbind(document,"keydown",A),m.unbind(document,"mousemove",Ot),L.transform&&m.unbind(A.scrollWrap,"click",A),Q&&m.unbind(window,c,A),clearTimeout(Z),Tt("unbindEvents"),He(A.currItem,null,!0,A.destroy))},destroy:function(){Tt("destroy"),Re&&clearTimeout(Re),p.setAttribute("aria-hidden","true"),p.className=P,_&&clearInterval(_),m.unbind(A.scrollWrap,u,A),m.unbind(window,"scroll",A),me(),Yt(),bt=null},panTo:function(t,e,i){i||(t>tt.min.x?t=tt.min.x:t<tt.max.x&&(t=tt.max.x),e>tt.min.y?e=tt.min.y:e<tt.max.y&&(e=tt.max.y)),ht.x=t,ht.y=e,St()},handleEvent:function(t){t=t||window.event,h[t.type]&&h[t.type](t)},goTo:function(t){var e=(t=xt(t))-g;ft=e,g=t,A.currItem=$e(g),pt-=e,zt(At.x*pt),Yt(),it=!1,A.updateCurrItem()},next:function(){A.goTo(g+1)},prev:function(){A.goTo(g-1)},updateCurrZoomItem:function(t){if(t&&Tt("beforeChange",0),b[1].el.children.length){var e=b[1].el.children[0];et=m.hasClass(e,"pswp__zoom-wrap")?e.style:null}else et=null;tt=A.currItem.bounds,d=w=A.currItem.initialZoomLevel,ht.x=tt.center.x,ht.y=tt.center.y,t&&Tt("afterChange")},invalidateCurrItems:function(){x=!0;for(var t=0;t<3;t++)b[t].item&&(b[t].item.needsUpdate=!0)},updateCurrItem:function(t){if(0!==ft){var e,i=Math.abs(ft);if(!(t&&i<2)){A.currItem=$e(g),yt=!1,Tt("beforeChange",ft),3<=i&&(a+=ft+(0<ft?-3:3),i=3);for(var n=0;n<i;n++)0<ft?(e=b.shift(),b[2]=e,Mt((++a+2)*At.x,e.el.style),A.setContent(e,g-i+n+1+1)):(e=b.pop(),b.unshift(e),Mt(--a*At.x,e.el.style),A.setContent(e,g+i-n-1-1));if(et&&1===Math.abs(ft)){var s=$e(C);s.initialZoomLevel!==w&&(Qe(s,dt),Xe(s),Dt(s))}ft=0,A.updateCurrZoomItem(),C=g,Tt("afterChange")}}},updateSize:function(t){if(!gt&&f.modal){var e=m.getScrollY();if(O!==e&&(p.style.top=e+"px",O=e),!t&&vt.x===window.innerWidth&&vt.y===window.innerHeight)return;vt.x=window.innerWidth,vt.y=window.innerHeight,p.style.height=vt.y+"px"}if(dt.x=A.scrollWrap.clientWidth,dt.y=A.scrollWrap.clientHeight,Nt(),At.x=dt.x+Math.round(dt.x*f.spacing),At.y=dt.y,zt(At.x*pt),Tt("beforeResize"),void 0!==a){for(var i,n,s,o=0;o<3;o++)i=b[o],Mt((o+a)*At.x,i.el.style),s=g+o-1,f.loop&&2<We()&&(s=xt(s)),(n=$e(s))&&(x||n.needsUpdate||!n.bounds)?(A.cleanSlide(n),A.setContent(i,s),1===o&&(A.currItem=n,A.updateCurrZoomItem(!0)),n.needsUpdate=!1):-1===i.index&&0<=s&&A.setContent(i,s),n&&n.container&&(Qe(n,dt),Xe(n),Dt(n));x=!1}d=w=A.currItem.initialZoomLevel,(tt=A.currItem.bounds)&&(ht.x=tt.center.x,ht.y=tt.center.y,St(!0)),Tt("resize")},zoomTo:function(e,t,i,n,s){t&&(d=w,he.x=Math.abs(t.x)-ht.x,he.y=Math.abs(t.y)-ht.y,Pt(ut,ht));var o=Lt(e,!1),r={};Wt("x",o,r,e),Wt("y",o,r,e);var a=w,l=ht.x,c=ht.y;Ft(r);var u=function(t){ht.y=1===t?(w=e,ht.x=r.x,r.y):(w=(e-a)*t+a,ht.x=(r.x-l)*t+l,(r.y-c)*t+c),s&&s(t),St(1===t)};i?Xt("customZoomTo",0,1,i,n||m.easing.sine.inOut,u):u(1)}},Kt={},Jt={},te={},ee={},ie={},ne=[],se={},oe=[],re={},ae=0,le={x:0,y:0},ce=0,ue={x:0,y:0},he={x:0,y:0},de={x:0,y:0},pe=function(t,e){return re.x=Math.abs(t.x-e.x),re.y=Math.abs(t.y-e.y),Math.sqrt(re.x*re.x+re.y*re.y)},me=function(){i&&(B(i),i=null)},Ae=function(){Q&&(i=z(Ae),Se())},fe=function(t,e){return!(!t||t===document)&&!(t.getAttribute("class")&&-1<t.getAttribute("class").indexOf("pswp__scroll-wrap"))&&(e(t)?t:fe(t.parentNode,e))},ge={},we=function(t,e){return ge.prevent=!fe(t.target,f.isClickableElement),Tt("preventDragEvent",t,e,ge),ge.prevent},ve=function(t,e){return e.x=t.pageX,e.y=t.pageY,e.id=t.identifier,e},ye=function(t,e,i){i.x=.5*(t.x+e.x),i.y=.5*(t.y+e.y)},_e=function(){var t=ht.y-A.currItem.initialPosition.y;return 1-Math.abs(t/(dt.y/2))},xe={},be={},Ce=[],Te=function(t){for(;0<Ce.length;)Ce.pop();return D?(lt=0,ne.forEach(function(t){0===lt?Ce[0]=t:1===lt&&(Ce[1]=t),lt++})):-1<t.type.indexOf("touch")?t.touches&&0<t.touches.length&&(Ce[0]=ve(t.touches[0],xe),1<t.touches.length&&(Ce[1]=ve(t.touches[1],be))):(xe.x=t.pageX,xe.y=t.pageY,xe.id="",Ce[0]=xe),Ce},Ee=function(t,e){var i,n,s,o,r=ht[t]+e[t],a=0<e[t],l=ue.x+e.x,c=ue.x-se.x;if(i=r>tt.min[t]||r<tt.max[t]?f.panEndFriction:1,r=ht[t]+e[t]*i,(f.allowPanToNext||w===A.currItem.initialZoomLevel)&&(et?"h"!==nt||"x"!==t||V||(a?(r>tt.min[t]&&(i=f.panEndFriction,tt.min[t],n=tt.min[t]-ut[t]),(n<=0||c<0)&&1<We()?(o=l,c<0&&l>se.x&&(o=se.x)):tt.min.x!==tt.max.x&&(s=r)):(r<tt.max[t]&&(i=f.panEndFriction,tt.max[t],n=ut[t]-tt.max[t]),(n<=0||0<c)&&1<We()?(o=l,0<c&&l<se.x&&(o=se.x)):tt.min.x!==tt.max.x&&(s=r))):o=l,"x"===t))return void 0!==o&&(zt(o,!0),X=o!==se.x),tt.min.x!==tt.max.x&&(void 0!==s?ht.x=s:X||(ht.x+=e.x*i)),void 0!==o;it||X||w>A.currItem.fitRatio&&(ht[t]+=e[t]*i)},ke=function(t){if(!("mousedown"===t.type&&0<t.button))if(Ze)t.preventDefault();else if(!U||"mousedown"!==t.type){if(we(t,!0)&&t.preventDefault(),Tt("pointerDown"),D){var e=m.arraySearch(ne,t.pointerId,"id");e<0&&(e=ne.length),ne[e]={x:t.pageX,y:t.pageY,id:t.pointerId}}var i=Te(t),n=i.length;q=null,Yt(),Q&&1!==n||(Q=st=!0,m.bind(window,c,A),j=at=ot=N=X=Y=G=V=!1,nt=null,Tt("firstTouchStart",i),Pt(ut,ht),ct.x=ct.y=0,Pt(ee,i[0]),Pt(ie,ee),se.x=At.x*pt,oe=[{x:ee.x,y:ee.y}],W=$=Et(),Lt(w,!0),me(),Ae()),!K&&1<n&&!it&&!X&&(d=w,K=G=!(V=!1),ct.y=ct.x=0,Pt(ut,ht),Pt(Kt,i[0]),Pt(Jt,i[1]),ye(Kt,Jt,de),he.x=Math.abs(de.x)-ht.x,he.y=Math.abs(de.y)-ht.y,J=pe(Kt,Jt))}},Ie=function(t){if(t.preventDefault(),D){var e=m.arraySearch(ne,t.pointerId,"id");if(-1<e){var i=ne[e];i.x=t.pageX,i.y=t.pageY}}if(Q){var n=Te(t);if(nt||Y||K)q=n;else if(ue.x!==At.x*pt)nt="h";else{var s=Math.abs(n[0].x-ee.x)-Math.abs(n[0].y-ee.y);10<=Math.abs(s)&&(nt=0<s?"h":"v",q=n)}}},Se=function(){if(q){var t,e,i=q.length;if(0!==i)if(Pt(Kt,q[0]),te.x=Kt.x-ee.x,te.y=Kt.y-ee.y,K&&1<i){if(ee.x=Kt.x,ee.y=Kt.y,!te.x&&!te.y&&(t=q[1],e=Jt,t.x===e.x&&t.y===e.y))return;Pt(Jt,q[1]),V||(V=!0,Tt("zoomGestureStarted"));var n=pe(Kt,Jt),s=Pe(n);s>A.currItem.initialZoomLevel+A.currItem.initialZoomLevel/15&&(at=!0);var o=1,r=Zt(),a=$t();if(s<r)if(f.pinchToClose&&!at&&d<=A.currItem.initialZoomLevel){var l=1-(r-s)/(r/1.2);kt(l),Tt("onPinchClose",l),ot=!0}else 1<(o=(r-s)/r)&&(o=1),s=r-o*(r/3);else a<s&&(1<(o=(s-a)/(6*r))&&(o=1),s=a+o*r);o<0&&(o=0),ye(Kt,Jt,le),ct.x+=le.x-de.x,ct.y+=le.y-de.y,Pt(de,le),ht.x=Bt("x",s),ht.y=Bt("y",s),j=w<s,w=s,St()}else{if(!nt)return;if(st&&(st=!1,10<=Math.abs(te.x)&&(te.x-=q[0].x-ie.x),10<=Math.abs(te.y)&&(te.y-=q[0].y-ie.y)),ee.x=Kt.x,ee.y=Kt.y,0===te.x&&0===te.y)return;if("v"===nt&&f.closeOnVerticalDrag&&"fit"===f.scaleMode&&w===A.currItem.initialZoomLevel){ct.y+=te.y,ht.y+=te.y;var c=_e();return N=!0,Tt("onVerticalDrag",c),kt(c),void St()}!function(t,e,i){if(50<t-W){var n=2<oe.length?oe.shift():{};n.x=e,n.y=i,oe.push(n),W=t}}(Et(),Kt.x,Kt.y),Y=!0,tt=A.currItem.bounds,Ee("x",te)||(Ee("y",te),Ft(ht),St())}}},De=function(t){if(L.isOldAndroid){if(U&&"mouseup"===t.type)return;-1<t.type.indexOf("touch")&&(clearTimeout(U),U=setTimeout(function(){U=0},600))}var e;if(Tt("pointerUp"),we(t,!1)&&t.preventDefault(),D){var i=m.arraySearch(ne,t.pointerId,"id");-1<i&&(e=ne.splice(i,1)[0],navigator.pointerEnabled?e.type=t.pointerType||"mouse":(e.type={4:"mouse",2:"touch",3:"pen"}[t.pointerType],e.type||(e.type=t.pointerType||"mouse")))}var n,s=Te(t),o=s.length;if("mouseup"===t.type&&(o=0),2===o)return!(q=null);1===o&&Pt(ie,s[0]),0!==o||nt||it||(e||("mouseup"===t.type?e={x:t.pageX,y:t.pageY,type:"mouse"}:t.changedTouches&&t.changedTouches[0]&&(e={x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY,type:"touch"})),Tt("touchRelease",t,e));var r=-1;if(0===o&&(Q=!1,m.unbind(window,c,A),me(),K?r=0:-1!==ce&&(r=Et()-ce)),ce=1===o?Et():-1,n=-1!==r&&r<150?"zoom":"swipe",K&&o<2&&(K=!1,1===o&&(n="zoomPointerUp"),Tt("zoomGestureEnded")),q=null,Y||V||it||N)if(Yt(),H||(H=Me()),H.calculateSwipeSpeed("x"),N)if(_e()<f.verticalDragRange)A.close();else{var a=ht.y,l=rt;Xt("verticalDrag",0,1,300,m.easing.cubic.out,function(t){ht.y=(A.currItem.initialPosition.y-a)*t+a,kt((1-l)*t+l),St()}),Tt("onVerticalDrag",1)}else{if((X||it)&&0===o){if(Be(n,H))return;n="zoomPointerUp"}it||("swipe"===n?!X&&w>A.currItem.fitRatio&&ze(H):Fe())}},Me=function(){var e,i,n={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(t){i=1<oe.length?(e=Et()-W+50,oe[oe.length-2][t]):(e=Et()-$,ie[t]),n.lastFlickOffset[t]=ee[t]-i,n.lastFlickDist[t]=Math.abs(n.lastFlickOffset[t]),20<n.lastFlickDist[t]?n.lastFlickSpeed[t]=n.lastFlickOffset[t]/e:n.lastFlickSpeed[t]=0,Math.abs(n.lastFlickSpeed[t])<.1&&(n.lastFlickSpeed[t]=0),n.slowDownRatio[t]=.95,n.slowDownRatioReverse[t]=1-n.slowDownRatio[t],n.speedDecelerationRatio[t]=1},calculateOverBoundsAnimOffset:function(e,t){n.backAnimStarted[e]||(ht[e]>tt.min[e]?n.backAnimDestination[e]=tt.min[e]:ht[e]<tt.max[e]&&(n.backAnimDestination[e]=tt.max[e]),void 0!==n.backAnimDestination[e]&&(n.slowDownRatio[e]=.7,n.slowDownRatioReverse[e]=1-n.slowDownRatio[e],n.speedDecelerationRatioAbs[e]<.05&&(n.lastFlickSpeed[e]=0,n.backAnimStarted[e]=!0,Xt("bounceZoomPan"+e,ht[e],n.backAnimDestination[e],t||300,m.easing.sine.out,function(t){ht[e]=t,St()}))))},calculateAnimOffset:function(t){n.backAnimStarted[t]||(n.speedDecelerationRatio[t]=n.speedDecelerationRatio[t]*(n.slowDownRatio[t]+n.slowDownRatioReverse[t]-n.slowDownRatioReverse[t]*n.timeDiff/10),n.speedDecelerationRatioAbs[t]=Math.abs(n.lastFlickSpeed[t]*n.speedDecelerationRatio[t]),n.distanceOffset[t]=n.lastFlickSpeed[t]*n.speedDecelerationRatio[t]*n.timeDiff,ht[t]+=n.distanceOffset[t])},panAnimLoop:function(){if(Ut.zoomPan&&(Ut.zoomPan.raf=z(n.panAnimLoop),n.now=Et(),n.timeDiff=n.now-n.lastNow,n.lastNow=n.now,n.calculateAnimOffset("x"),n.calculateAnimOffset("y"),St(),n.calculateOverBoundsAnimOffset("x"),n.calculateOverBoundsAnimOffset("y"),n.speedDecelerationRatioAbs.x<.05&&n.speedDecelerationRatioAbs.y<.05))return ht.x=Math.round(ht.x),ht.y=Math.round(ht.y),St(),void Gt("zoomPan")}};return n},ze=function(t){if(t.calculateSwipeSpeed("y"),tt=A.currItem.bounds,t.backAnimDestination={},t.backAnimStarted={},Math.abs(t.lastFlickSpeed.x)<=.05&&Math.abs(t.lastFlickSpeed.y)<=.05)return t.speedDecelerationRatioAbs.x=t.speedDecelerationRatioAbs.y=0,t.calculateOverBoundsAnimOffset("x"),t.calculateOverBoundsAnimOffset("y"),!0;Vt("zoomPan"),t.lastNow=Et(),t.panAnimLoop()},Be=function(t,e){var i,n,s;if(it||(ae=g),"swipe"===t){var o=ee.x-ie.x,r=e.lastFlickDist.x<10;30<o&&(r||20<e.lastFlickOffset.x)?n=-1:o<-30&&(r||e.lastFlickOffset.x<-20)&&(n=1)}n&&((g+=n)<0?(g=f.loop?We()-1:0,s=!0):g>=We()&&(g=f.loop?0:We()-1,s=!0),s&&!f.loop||(ft+=n,pt-=n,i=!0));var a,l=At.x*pt,c=Math.abs(l-ue.x);return a=i||l>ue.x==0<e.lastFlickSpeed.x?(a=0<Math.abs(e.lastFlickSpeed.x)?c/Math.abs(e.lastFlickSpeed.x):333,a=Math.min(a,400),Math.max(a,250)):333,ae===g&&(i=!1),it=!0,Tt("mainScrollAnimStart"),Xt("mainScroll",ue.x,l,a,m.easing.cubic.out,zt,function(){Yt(),it=!1,ae=-1,(i||ae!==g)&&A.updateCurrItem(),Tt("mainScrollAnimComplete")}),i&&A.updateCurrItem(!0),i},Pe=function(t){return 1/J*t*d},Fe=function(){var t=w,e=Zt(),i=$t();w<e?t=e:i<w&&(t=i);var n,s=rt;return ot&&!j&&!at&&w<e?A.close():(ot&&(n=function(t){kt((1-s)*t+s)}),A.zoomTo(t,0,200,m.easing.cubic.out,n)),!0};_t("Gestures",{publicMethods:{initGestures:function(){var t=function(t,e,i,n,s){T=t+e,E=t+i,k=t+n,I=s?t+s:""};(D=L.pointerEvent)&&L.touch&&(L.touch=!1),D?navigator.pointerEnabled?t("pointer","down","move","up","cancel"):t("MSPointer","Down","Move","Up","Cancel"):L.touch?(t("touch","start","move","end","cancel"),M=!0):t("mouse","down","move","up"),c=E+" "+k+" "+I,u=T,D&&!M&&(M=1<navigator.maxTouchPoints||1<navigator.msMaxTouchPoints),A.likelyTouchDevice=M,h[T]=ke,h[E]=Ie,h[k]=De,I&&(h[I]=h[k]),L.touch&&(u+=" mousedown",c+=" mousemove mouseup",h.mousedown=h[T],h.mousemove=h[E],h.mouseup=h[k]),M||(f.allowPanToNext=!1)}}});var Re,Oe,Le,Ze,$e,We,He=function(r,t,a,e){var l;Re&&clearTimeout(Re),Le=Ze=!0,r.initialLayout?(l=r.initialLayout,r.initialLayout=null):l=f.getThumbBoundsFn&&f.getThumbBoundsFn(g);var c,u,h=a?f.hideAnimationDuration:f.showAnimationDuration,d=function(){Gt("initialZoom"),a?(A.template.removeAttribute("style"),A.bg.removeAttribute("style")):(kt(1),t&&(t.style.display="block"),m.addClass(p,"pswp--animated-in"),Tt("initialZoom"+(a?"OutEnd":"InEnd"))),e&&e(),Ze=!1};if(!h||!l||void 0===l.x)return Tt("initialZoom"+(a?"Out":"In")),w=r.initialZoomLevel,Pt(ht,r.initialPosition),St(),p.style.opacity=a?0:1,kt(1),void(h?setTimeout(function(){d()},h):d());c=o,u=!A.currItem.src||A.currItem.loadError||f.showHideOpacity,r.miniImg&&(r.miniImg.style.webkitBackfaceVisibility="hidden"),a||(w=l.w/r.w,ht.x=l.x,ht.y=l.y-F,A[u?"template":"bg"].style.opacity=.001,St()),Vt("initialZoom"),a&&!c&&m.removeClass(p,"pswp--animated-in"),u&&(a?m[(c?"remove":"add")+"Class"](p,"pswp--animate_opacity"):setTimeout(function(){m.addClass(p,"pswp--animate_opacity")},30)),Re=setTimeout(function(){if(Tt("initialZoom"+(a?"Out":"In")),a){var e=l.w/r.w,i=ht.x,n=ht.y,s=w,o=rt,t=function(t){ht.y=1===t?(w=e,ht.x=l.x,l.y-O):(w=(e-s)*t+s,ht.x=(l.x-i)*t+i,(l.y-O-n)*t+n),St(),u?p.style.opacity=1-t:kt(o-t*o)};c?Xt("initialZoom",0,1,h,m.easing.cubic.out,t,d):(t(1),Re=setTimeout(d,h+20))}else w=r.initialZoomLevel,Pt(ht,r.initialPosition),St(),kt(1),u?p.style.opacity=1:kt(1),Re=setTimeout(d,h+20)},a?25:90)},je={},Ne=[],Ue={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Oe.length}},Qe=function(t,e,i){if(!t.src||t.loadError)return t.w=t.h=0,t.initialZoomLevel=t.fitRatio=1,t.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}},t.initialPosition=t.bounds.center,t.bounds;var n,s,o,r,a=!i;if(a&&(t.vGap||(t.vGap={top:0,bottom:0}),Tt("parseVerticalMargin",t)),je.x=e.x,je.y=e.y-t.vGap.top-t.vGap.bottom,a){var l=je.x/t.w,c=je.y/t.h;t.fitRatio=l<c?l:c;var u=f.scaleMode;"orig"===u?i=1:"fit"===u&&(i=t.fitRatio),1<i&&(i=1),t.initialZoomLevel=i,t.bounds||(t.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}})}return i?(s=(n=t).w*i,o=t.h*i,(r=n.bounds).center.x=Math.round((je.x-s)/2),r.center.y=Math.round((je.y-o)/2)+n.vGap.top,r.max.x=s>je.x?Math.round(je.x-s):r.center.x,r.max.y=o>je.y?Math.round(je.y-o)+n.vGap.top:r.center.y,r.min.x=s>je.x?0:r.center.x,r.min.y=o>je.y?n.vGap.top:r.center.y,a&&i===t.initialZoomLevel&&(t.initialPosition=t.bounds.center),t.bounds):void 0},Ge=function(t,e,i,n,s,o){e.loadError||n&&(e.imageAppended=!0,Xe(e,n,e===A.currItem&&yt),i.appendChild(n),o&&setTimeout(function(){e&&e.loaded&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null)},500))},Ve=function(t){t.loading=!0,t.loaded=!1;var e=t.img=m.createEl("pswp__img","img"),i=function(){t.loading=!1,t.loaded=!0,t.loadComplete?t.loadComplete(t):t.img=null,e.onload=e.onerror=null,e=null};return e.onload=i,e.onerror=function(){t.loadError=!0,i()},e.src=t.src,e},Ye=function(t,e){if(t.src&&t.loadError&&t.container)return e&&(t.container.innerHTML=""),t.container.innerHTML=f.errorMsg.replace("%url%",t.src),!0},Xe=function(t,e,i){if(t.src){e||(e=t.container.lastChild);var n=i?t.w:Math.round(t.w*t.fitRatio),s=i?t.h:Math.round(t.h*t.fitRatio);t.placeholder&&!t.loaded&&(t.placeholder.style.width=n+"px",t.placeholder.style.height=s+"px"),e.style.width=n+"px",e.style.height=s+"px"}},qe=function(){if(Ne.length){for(var t,e=0;e<Ne.length;e++)(t=Ne[e]).holder.index===t.index&&Ge(t.index,t.item,t.baseDiv,t.img,0,t.clearPlaceholder);Ne=[]}};_t("Controller",{publicMethods:{lazyLoadItem:function(t){t=xt(t);var e=$e(t);e&&(!e.loaded&&!e.loading||x)&&(Tt("gettingData",t,e),e.src&&Ve(e))},initController:function(){m.extend(f,Ue,!0),A.items=Oe=t,$e=A.getItemAt,We=f.getNumItemsFn,f.loop,We()<3&&(f.loop=!1),Ct("beforeChange",function(t){var e,i=f.preload,n=null===t||0<=t,s=Math.min(i[0],We()),o=Math.min(i[1],We());for(e=1;e<=(n?o:s);e++)A.lazyLoadItem(g+e);for(e=1;e<=(n?s:o);e++)A.lazyLoadItem(g-e)}),Ct("initialLayout",function(){A.currItem.initialLayout=f.getThumbBoundsFn&&f.getThumbBoundsFn(g)}),Ct("mainScrollAnimComplete",qe),Ct("initialZoomInEnd",qe),Ct("destroy",function(){for(var t,e=0;e<Oe.length;e++)(t=Oe[e]).container&&(t.container=null),t.placeholder&&(t.placeholder=null),t.img&&(t.img=null),t.preloader&&(t.preloader=null),t.loadError&&(t.loaded=t.loadError=!1);Ne=null})},getItemAt:function(t){return 0<=t&&void 0!==Oe[t]&&Oe[t]},allowProgressiveImg:function(){return f.forceProgressiveLoading||!M||f.mouseUsed||1200<screen.width},setContent:function(e,i){f.loop&&(i=xt(i));var t=A.getItemAt(e.index);t&&(t.container=null);var n,s=A.getItemAt(i);if(s){Tt("gettingData",i,s),e.index=i;var o=(e.item=s).container=m.createEl("pswp__zoom-wrap");if(!s.src&&s.html&&(s.html.tagName?o.appendChild(s.html):o.innerHTML=s.html),Ye(s),Qe(s,dt),!s.src||s.loadError||s.loaded)s.src&&!s.loadError&&((n=m.createEl("pswp__img","img")).style.opacity=1,n.src=s.src,Xe(s,n),Ge(0,s,o,n));else{if(s.loadComplete=function(t){if(l){if(e&&e.index===i){if(Ye(t,!0))return t.loadComplete=t.img=null,Qe(t,dt),Dt(t),void(e.index===g&&A.updateCurrZoomItem());t.imageAppended?!Ze&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null):L.transform&&(it||Ze)?Ne.push({item:t,baseDiv:o,img:t.img,index:i,holder:e,clearPlaceholder:!0}):Ge(0,t,o,t.img,0,!0)}t.loadComplete=null,t.img=null,Tt("imageLoadComplete",i,t)}},m.features.transform){var r="pswp__img pswp__img--placeholder";r+=s.msrc?"":" pswp__img--placeholder--blank";var a=m.createEl(r,s.msrc?"img":"");s.msrc&&(a.src=s.msrc),Xe(s,a),o.appendChild(a),s.placeholder=a}s.loading||Ve(s),A.allowProgressiveImg()&&(!Le&&L.transform?Ne.push({item:s,baseDiv:o,img:s.img,index:i,holder:e}):Ge(0,s,o,s.img,0,!0))}Le||i!==g?Dt(s):(et=o.style,He(s,n||s.img)),e.el.innerHTML="",e.el.appendChild(o)}else e.el.innerHTML=""},cleanSlide:function(t){t.img&&(t.img.onload=t.img.onerror=null),t.loaded=t.loading=t.img=t.imageAppended=!1}}});var Ke,Je,ti={},ei=function(t,e,i){var n=document.createEvent("CustomEvent"),s={origEvent:t,target:t.target,releasePoint:e,pointerType:i||"touch"};n.initCustomEvent("pswpTap",!0,!0,s),t.target.dispatchEvent(n)};_t("Tap",{publicMethods:{initTap:function(){Ct("firstTouchStart",A.onTapStart),Ct("touchRelease",A.onTapRelease),Ct("destroy",function(){ti={},Ke=null})},onTapStart:function(t){1<t.length&&(clearTimeout(Ke),Ke=null)},onTapRelease:function(t,e){var i,n;if(e&&!Y&&!G&&!Qt){var s=e;if(Ke&&(clearTimeout(Ke),Ke=null,i=s,n=ti,Math.abs(i.x-n.x)<25&&Math.abs(i.y-n.y)<25))return void Tt("doubleTap",s);if("mouse"===e.type)return void ei(t,e,"mouse");if("BUTTON"===t.target.tagName.toUpperCase()||m.hasClass(t.target,"pswp__single-tap"))return void ei(t,e);Pt(ti,s),Ke=setTimeout(function(){ei(t,e),Ke=null},300)}}}}),_t("DesktopZoom",{publicMethods:{initDesktopZoom:function(){R||(M?Ct("mouseUsed",function(){A.setupDesktopZoom()}):A.setupDesktopZoom(!0))},setupDesktopZoom:function(t){Je={};var e="wheel mousewheel DOMMouseScroll";Ct("bindEvents",function(){m.bind(p,e,A.handleMouseWheel)}),Ct("unbindEvents",function(){Je&&m.unbind(p,e,A.handleMouseWheel)}),A.mouseZoomedIn=!1;var i,n=function(){A.mouseZoomedIn&&(m.removeClass(p,"pswp--zoomed-in"),A.mouseZoomedIn=!1),w<1?m.addClass(p,"pswp--zoom-allowed"):m.removeClass(p,"pswp--zoom-allowed"),s()},s=function(){i&&(m.removeClass(p,"pswp--dragging"),i=!1)};Ct("resize",n),Ct("afterChange",n),Ct("pointerDown",function(){A.mouseZoomedIn&&(i=!0,m.addClass(p,"pswp--dragging"))}),Ct("pointerUp",s),t||n()},handleMouseWheel:function(t){if(w<=A.currItem.fitRatio)return f.modal&&(!f.closeOnScroll||Qt||Q?t.preventDefault():S&&2<Math.abs(t.deltaY)&&(o=!0,A.close())),!0;if(t.stopPropagation(),Je.x=0,"deltaX"in t)1===t.deltaMode?(Je.x=18*t.deltaX,Je.y=18*t.deltaY):(Je.x=t.deltaX,Je.y=t.deltaY);else if("wheelDelta"in t)t.wheelDeltaX&&(Je.x=-.16*t.wheelDeltaX),t.wheelDeltaY?Je.y=-.16*t.wheelDeltaY:Je.y=-.16*t.wheelDelta;else{if(!("detail"in t))return;Je.y=t.detail}Lt(w,!0);var e=ht.x-Je.x,i=ht.y-Je.y;(f.modal||e<=tt.min.x&&e>=tt.max.x&&i<=tt.min.y&&i>=tt.max.y)&&t.preventDefault(),A.panTo(e,i)},toggleDesktopZoom:function(t){t=t||{x:dt.x/2+mt.x,y:dt.y/2+mt.y};var e=f.getDoubleTapZoom(!0,A.currItem),i=w===e;A.mouseZoomedIn=!i,A.zoomTo(i?A.currItem.initialZoomLevel:e,t,333),m[(i?"remove":"add")+"Class"](p,"pswp--zoomed-in")}}});var ii,ni,si,oi,ri,ai,li,ci,ui,hi,di,pi,mi={history:!0,galleryUID:1},Ai=function(){return di.hash.substring(1)},fi=function(){ii&&clearTimeout(ii),si&&clearTimeout(si)},gi=function(){var t=Ai(),e={};if(t.length<5)return e;var i,n=t.split("&");for(i=0;i<n.length;i++)if(n[i]){var s=n[i].split("=");s.length<2||(e[s[0]]=s[1])}if(f.galleryPIDs){var o=e.pid;for(i=e.pid=0;i<Oe.length;i++)if(Oe[i].pid===o){e.pid=i;break}}else e.pid=parseInt(e.pid,10)-1;return e.pid<0&&(e.pid=0),e},wi=function(){if(si&&clearTimeout(si),Qt||Q)si=setTimeout(wi,500);else{oi?clearTimeout(ni):oi=!0;var t=g+1,e=$e(g);e.hasOwnProperty("pid")&&(t=e.pid);var i=li+"&gid="+f.galleryUID+"&pid="+t;ci||-1===di.hash.indexOf(i)&&(hi=!0);var n=di.href.split("#")[0]+"#"+i;pi?"#"+i!==window.location.hash&&history[ci?"replaceState":"pushState"]("",document.title,n):ci?di.replace(n):di.hash=i,ci=!0,ni=setTimeout(function(){oi=!1},60)}};_t("History",{publicMethods:{initHistory:function(){if(m.extend(f,mi,!0),f.history){di=window.location,ci=ui=hi=!1,li=Ai(),pi="pushState"in history,-1<li.indexOf("gid=")&&(li=(li=li.split("&gid=")[0]).split("?gid=")[0]),Ct("afterChange",A.updateURL),Ct("unbindEvents",function(){m.unbind(window,"hashchange",A.onHashChange)});var t=function(){ai=!0,ui||(hi?history.back():li?di.hash=li:pi?history.pushState("",document.title,di.pathname+di.search):di.hash=""),fi()};Ct("unbindEvents",function(){o&&t()}),Ct("destroy",function(){ai||t()}),Ct("firstUpdate",function(){g=gi().pid});var e=li.indexOf("pid=");-1<e&&"&"===(li=li.substring(0,e)).slice(-1)&&(li=li.slice(0,-1)),setTimeout(function(){l&&m.bind(window,"hashchange",A.onHashChange)},40)}},onHashChange:function(){if(Ai()===li)return ui=!0,void A.close();oi||(ri=!0,A.goTo(gi().pid),ri=!1)},updateURL:function(){fi(),ri||(ci?ii=setTimeout(wi,800):wi())}}}),m.extend(A,qt)}}),function(t){var e,s,i,n,o,r,a,l=navigator.userAgent;t.HTMLPictureElement&&/ecko/.test(l)&&l.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(s=document.createElement("source"),i=function(t){var e,i,n=t.parentNode;"PICTURE"===n.nodeName.toUpperCase()?(e=s.cloneNode(),n.insertBefore(e,n.firstElementChild),setTimeout(function(){n.removeChild(e)})):(!t._pfLastSize||t.offsetWidth>t._pfLastSize)&&(t._pfLastSize=t.offsetWidth,i=t.sizes,t.sizes+=",100vw",setTimeout(function(){t.sizes=i}))},n=function(){var t,e=document.querySelectorAll("picture > img, img[srcset][sizes]");for(t=0;t<e.length;t++)i(e[t])},o=function(){clearTimeout(e),e=setTimeout(n,99)},r=t.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){o(),r&&r.addListener&&r.addListener(o)},s.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),o))}(window),function(t,o,c){"use strict";var s,u,l;o.createElement("picture");var b={},r=!1,e=function(){},i=o.createElement("img"),h=i.getAttribute,d=i.setAttribute,p=i.removeAttribute,a=o.documentElement,n={},C={algorithm:""},m="data-pfsrc",A=m+"set",f=navigator.userAgent,T=/rident/.test(f)||/ecko/.test(f)&&f.match(/rv\:(\d+)/)&&35<RegExp.$1,E="currentSrc",g=/\s+\+?\d+(e\d+)?w/,w=/(\([^)]+\))?\s*(.+)/,v=t.picturefillCFG,y="font-size:100%!important;",_=!0,x={},k={},I=t.devicePixelRatio,S={px:1,in:96},D=o.createElement("a"),M=!1,z=/^[ \t\n\r\u000c]+/,B=/^[, \t\n\r\u000c]+/,P=/^[^ \t\n\r\u000c]+/,F=/[,]+$/,R=/^\d+$/,O=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,L=function(t,e,i,n){t.addEventListener?t.addEventListener(e,i,n||!1):t.attachEvent&&t.attachEvent("on"+e,i)},Z=function(e){var i={};return function(t){return t in i||(i[t]=e(t)),i[t]}};function $(t){return" "===t||"\t"===t||"\n"===t||"\f"===t||"\r"===t}var W,H,j,N,U,Q,G,V,Y,X,q,K,J,tt,et,it,nt,st,ot,rt=(W=/^([\d\.]+)(em|vw|px)$/,H=Z(function(t){return"return "+function(){for(var t=arguments,e=0,i=t[0];++e in t;)i=i.replace(t[e],t[++e]);return i}((t||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(t,e){var i;if(!(t in x))if(x[t]=!1,e&&(i=t.match(W)))x[t]=i[1]*S[i[2]];else try{x[t]=new Function("e",H(t))(S)}catch(t){}return x[t]}),at=function(t,e){return t.w?(t.cWidth=b.calcListLength(e||"100vw"),t.res=t.w/t.cWidth):t.res=t.d,t},lt=function(t){if(r){var e,i,n,s=t||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),n=(e=s.elements||b.qsa(s.context||o,s.reevaluate||s.reselect?b.sel:b.selShort)).length){for(b.setupRun(s),M=!0,i=0;i<n;i++)b.fillImg(e[i],s);b.teardownRun(s)}}};function ct(t,e){return t.res-e.res}function ut(t,e){var i,n,s;if(t&&e)for(s=b.parseSet(e),t=b.makeUrl(t),i=0;i<s.length;i++)if(t===b.makeUrl(s[i].url)){n=s[i];break}return n}t.console&&console.warn,E in i||(E="src"),n["image/jpeg"]=!0,n["image/gif"]=!0,n["image/png"]=!0,n["image/svg+xml"]=o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),b.ns=("pf"+(new Date).getTime()).substr(0,9),b.supSrcset="srcset"in i,b.supSizes="sizes"in i,b.supPicture=!!t.HTMLPictureElement,b.supSrcset&&b.supPicture&&!b.supSizes&&(j=o.createElement("img"),i.srcset="data:,a",j.src="data:,a",b.supSrcset=i.complete===j.complete,b.supPicture=b.supSrcset&&b.supPicture),b.supSrcset&&!b.supSizes?(N="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",U=o.createElement("img"),Q=function(){2===U.width&&(b.supSizes=!0),u=b.supSrcset&&!b.supSizes,r=!0,setTimeout(lt)},U.onload=Q,U.onerror=Q,U.setAttribute("sizes","9px"),U.srcset=N+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",U.src=N):r=!0,b.selShort="picture>img,img[srcset]",b.sel=b.selShort,b.cfg=C,b.DPR=I||1,b.u=S,b.types=n,b.setSize=e,b.makeUrl=Z(function(t){return D.href=t,D.href}),b.qsa=function(t,e){return"querySelector"in t?t.querySelectorAll(e):[]},b.matchesMedia=function(){return t.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?b.matchesMedia=function(t){return!t||matchMedia(t).matches}:b.matchesMedia=b.mMQ,b.matchesMedia.apply(this,arguments)},b.mMQ=function(t){return!t||rt(t)},b.calcLength=function(t){var e=rt(t,!0)||!1;return e<0&&(e=!1),e},b.supportsType=function(t){return!t||n[t]},b.parseSize=Z(function(t){var e=(t||"").match(w);return{media:e&&e[1],length:e&&e[2]}}),b.parseSet=function(t){return t.cands||(t.cands=function(n,h){function t(t){var e,i=t.exec(n.substring(r));if(i)return e=i[0],r+=e.length,e}var d,p,e,i,s,o=n.length,r=0,m=[];function a(){var t,e,i,n,s,o,r,a,l,c=!1,u={};for(n=0;n<p.length;n++)o=(s=p[n])[s.length-1],r=s.substring(0,s.length-1),a=parseInt(r,10),l=parseFloat(r),R.test(r)&&"w"===o?((t||e)&&(c=!0),0===a?c=!0:t=a):O.test(r)&&"x"===o?((t||e||i)&&(c=!0),l<0?c=!0:e=l):R.test(r)&&"h"===o?((i||e)&&(c=!0),0===a?c=!0:i=a):c=!0;c||(u.url=d,t&&(u.w=t),e&&(u.d=e),i&&(u.h=i),i||e||t||(u.d=1),1===u.d&&(h.has1x=!0),u.set=h,m.push(u))}function l(){for(t(z),e="",i="in descriptor";;){if(s=n.charAt(r),"in descriptor"===i)if($(s))e&&(p.push(e),e="",i="after descriptor");else{if(","===s)return r+=1,e&&p.push(e),void a();if("("===s)e+=s,i="in parens";else{if(""===s)return e&&p.push(e),void a();e+=s}}else if("in parens"===i)if(")"===s)e+=s,i="in descriptor";else{if(""===s)return p.push(e),void a();e+=s}else if("after descriptor"===i)if($(s));else{if(""===s)return void a();i="in descriptor",r-=1}r+=1}}for(;;){if(t(B),o<=r)return m;d=t(P),p=[],","===d.slice(-1)?(d=d.replace(F,""),a()):l()}}(t.srcset,t)),t.cands},b.getEmValue=function(){var t;if(!s&&(t=o.body)){var e=o.createElement("div"),i=a.style.cssText,n=t.style.cssText;e.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",a.style.cssText=y,t.style.cssText=y,t.appendChild(e),s=e.offsetWidth,t.removeChild(e),s=parseFloat(s,10),a.style.cssText=i,t.style.cssText=n}return s||16},b.calcListLength=function(t){if(!(t in k)||C.uT){var e=b.calcLength(function(t){var e,i,n,s,o,r,a,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,c=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=(i=function(t){var e,i="",n=[],s=[],o=0,r=0,a=!1;function l(){i&&(n.push(i),i="")}function c(){n[0]&&(s.push(n),n=[])}for(;;){if(""===(e=t.charAt(r)))return l(),c(),s;if(a){if("*"===e&&"/"===t[r+1]){a=!1,r+=2,l();continue}r+=1}else{if($(e)){if(t.charAt(r-1)&&$(t.charAt(r-1))||!i){r+=1;continue}if(0===o){l(),r+=1;continue}e=" "}else if("("===e)o+=1;else if(")"===e)o-=1;else{if(","===e){l(),c(),r+=1;continue}if("/"===e&&"*"===t.charAt(r+1)){a=!0,r+=2;continue}}i+=e,r+=1}}}(t)).length,e=0;e<n;e++)if(o=(s=i[e])[s.length-1],a=o,l.test(a)&&0<=parseFloat(a)||c.test(a)||"0"===a||"-0"===a||"+0"===a){if(r=o,s.pop(),0===s.length)return r;if(s=s.join(" "),b.matchesMedia(s))return r}return"100vw"}(t));k[t]=e||S.width}return k[t]},b.setRes=function(t){var e;if(t)for(var i=0,n=(e=b.parseSet(t)).length;i<n;i++)at(e[i],t.sizes);return e},b.setRes.res=at,b.applySetCandidate=function(t,e){if(t.length){var i,n,s,o,r,a,l,c,u,h,d,p,m,A,f,g,w,v,y,_=e[b.ns],x=b.DPR;if(a=_.curSrc||e[E],(l=_.curCan||(h=e,d=a,!(p=t[0].set)&&d&&(p=(p=h[b.ns].sets)&&p[p.length-1]),(m=ut(d,p))&&(d=b.makeUrl(d),h[b.ns].curSrc=d,(h[b.ns].curCan=m).res||at(m,m.set.sizes)),m))&&l.set===t[0].set&&((u=T&&!e.complete&&l.res-.1>x)||(l.cached=!0,l.res>=x&&(r=l))),!r)for(t.sort(ct),r=t[(o=t.length)-1],n=0;n<o;n++)if((i=t[n]).res>=x){r=t[s=n-1]&&(u||a!==b.makeUrl(i.url))&&(A=t[s].res,f=i.res,g=x,w=t[s].cached,y=v=void 0,g<("saveData"===C.algorithm?2.7<A?g+1:(y=(f-g)*(v=Math.pow(A-.6,1.5)),w&&(y+=.1*v),A+y):1<g?Math.sqrt(A*f):A))?t[s]:i;break}r&&(c=b.makeUrl(r.url),_.curSrc=c,_.curCan=r,c!==a&&b.setSrc(e,r),b.setSize(e))}},b.setSrc=function(t,e){var i;t.src=e.url,"image/svg+xml"===e.set.type&&(i=t.style.width,t.style.width=t.offsetWidth+1+"px",t.offsetWidth+1&&(t.style.width=i))},b.getSet=function(t){var e,i,n,s=!1,o=t[b.ns].sets;for(e=0;e<o.length&&!s;e++)if((i=o[e]).srcset&&b.matchesMedia(i.media)&&(n=b.supportsType(i.type))){"pending"===n&&(i=n),s=i;break}return s},b.parseSets=function(t,e,i){var n,s,o,r,a=e&&"PICTURE"===e.nodeName.toUpperCase(),l=t[b.ns];(l.src===c||i.src)&&(l.src=h.call(t,"src"),l.src?d.call(t,m,l.src):p.call(t,m)),(l.srcset===c||i.srcset||!b.supSrcset||t.srcset)&&(n=h.call(t,"srcset"),l.srcset=n,r=!0),l.sets=[],a&&(l.pic=!0,function(t,e){var i,n,s,o,r=t.getElementsByTagName("source");for(i=0,n=r.length;i<n;i++)(s=r[i])[b.ns]=!0,(o=s.getAttribute("srcset"))&&e.push({srcset:o,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(e,l.sets)),l.srcset?(s={srcset:l.srcset,sizes:h.call(t,"sizes")},l.sets.push(s),(o=(u||l.src)&&g.test(l.srcset||""))||!l.src||ut(l.src,s)||s.has1x||(s.srcset+=", "+l.src,s.cands.push({url:l.src,d:1,set:s}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=c,l.supported=!(a||s&&!b.supSrcset||o&&!b.supSizes),r&&b.supSrcset&&!l.supported&&(n?(d.call(t,A,n),t.srcset=""):p.call(t,A)),l.supported&&!l.srcset&&(!l.src&&t.src||t.src!==b.makeUrl(l.src))&&(null===l.src?t.removeAttribute("src"):t.src=l.src),l.parsed=!0},b.fillImg=function(t,e){var i,n,s,o,r,a=e.reselect||e.reevaluate;(t[b.ns]||(t[b.ns]={}),i=t[b.ns],a||i.evaled!==l)&&(i.parsed&&!e.reevaluate||b.parseSets(t,t.parentNode,e),i.supported?i.evaled=l:(n=t,o=b.getSet(n),r=!1,"pending"!==o&&(r=l,o&&(s=b.setRes(o),b.applySetCandidate(s,n))),n[b.ns].evaled=r))},b.setupRun=function(){M&&!_&&I===t.devicePixelRatio||(_=!1,I=t.devicePixelRatio,x={},k={},b.DPR=I||1,S.width=Math.max(t.innerWidth||0,a.clientWidth),S.height=Math.max(t.innerHeight||0,a.clientHeight),S.vw=S.width/100,S.vh=S.height/100,l=[S.height,S.width,I].join("-"),S.em=b.getEmValue(),S.rem=S.em)},b.supPicture?(lt=e,b.fillImg=e):(J=t.attachEvent?/d$|^c/:/d$|^c|^i/,tt=function(){var t=o.readyState||"";et=setTimeout(tt,"loading"===t?200:999),o.body&&(b.fillImgs(),(G=G||J.test(t))&&clearTimeout(et))},et=setTimeout(tt,o.body?9:99),it=a.clientHeight,L(t,"resize",(V=function(){_=Math.max(t.innerWidth||0,a.clientWidth)!==S.width||a.clientHeight!==it,it=a.clientHeight,_&&b.fillImgs()},Y=99,K=function(){var t=new Date-q;t<Y?X=setTimeout(K,Y-t):(X=null,V())},function(){q=new Date,X||(X=setTimeout(K,Y))})),L(o,"readystatechange",tt)),b.picturefill=lt,b.fillImgs=lt,b.teardownRun=e,lt._=b,t.picturefillCFG={pf:b,push:function(t){var e=t.shift();"function"==typeof b[e]?b[e].apply(b,t):(C[e]=t[0],M&&b.fillImgs({reselect:!0}))}};for(;v&&v.length;)t.picturefillCFG.push(v.shift());t.picturefill=lt,"object"==typeof module&&"object"==typeof module.exports?module.exports=lt:"function"==typeof define&&define.amd&&define("picturefill",function(){return lt}),b.supPicture||(n["image/webp"]=(nt="image/webp",st="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(ot=new t.Image).onerror=function(){n[nt]=!1,lt()},ot.onload=function(){n[nt]=1===ot.width,lt()},ot.src=st,"pending"))}(window,document),function(){var D,M;D=this.jQuery||window.jQuery,M=D(window),D.fn.stick_in_parent=function(t){var b,e,C,T,E,k,s,i,I,S,n,o,r;for(null==t&&(t={}),S=t.sticky_class,T=t.inner_scrolling,I=t.recalc_every,i=t.parent,k=t.offset_top,E=t.spacer,C=t.bottoming,null==k&&(k=0),null==i&&(i=void 0),null==T&&(T=!0),null==S&&(S="is_stuck"),b=D(document),null==C&&(C=!0),s=function(t){var e,i;return window.getComputedStyle?(t[0],e=window.getComputedStyle(t[0]),i=parseFloat(e.getPropertyValue("width"))+parseFloat(e.getPropertyValue("margin-left"))+parseFloat(e.getPropertyValue("margin-right")),"border-box"!==e.getPropertyValue("box-sizing")&&(i+=parseFloat(e.getPropertyValue("border-left-width"))+parseFloat(e.getPropertyValue("border-right-width"))+parseFloat(e.getPropertyValue("padding-left"))+parseFloat(e.getPropertyValue("padding-right"))),i):t.outerWidth(!0)},n=function(r,a,l,c,u,h,d,p){var m,t,A,f,g,w,v,y,e,_,x,n;if(!r.data("sticky_kit")){if(r.data("sticky_kit",!0),g=b.height(),v=r.parent(),null!=i&&(v=v.closest(i)),!v.length)throw"failed to find stick parent";if(m=A=!1,(x=null!=E?E&&r.closest(E):D("<div />"))&&x.css("position",r.css("position")),(y=function(){var t,e,i;if(!p)return g=b.height(),t=parseInt(v.css("border-top-width"),10),e=parseInt(v.css("padding-top"),10),a=parseInt(v.css("padding-bottom"),10),l=v.offset().top+t+e,c=v.height(),A&&(m=A=!1,null==E&&(r.insertAfter(x),x.detach()),r.css({position:"",top:"",width:"",bottom:""}).removeClass(S),i=!0),u=r.offset().top-(parseInt(r.css("margin-top"),10)||0)-k,h=r.outerHeight(!0),d=r.css("float"),x&&x.css({width:s(r),height:h,display:r.css("display"),"vertical-align":r.css("vertical-align"),float:d}),i?n():void 0})(),h!==c)return f=void 0,w=k,_=I,n=function(){var t,e,i,n,s,o;if(!p)return i=!1,null!=_&&(_-=1)<=0&&(_=I,y(),i=!0),i||b.height()===g||(y(),i=!0),n=M.scrollTop(),null!=f&&(e=n-f),f=n,A?(C&&(s=c+l<n+h+w,m&&!s&&(m=!1,r.css({position:"fixed",bottom:"",top:w}).trigger("sticky_kit:unbottom"))),n<u&&(A=!1,w=k,null==E&&("left"!==d&&"right"!==d||r.insertAfter(x),x.detach()),t={position:"",width:"",top:""},r.css(t).removeClass(S).trigger("sticky_kit:unstick")),T&&(o=M.height())<h+k&&(m||(w-=e,w=Math.max(o-h,w),w=Math.min(k,w),A&&r.css({top:w+"px"})))):u<n&&(A=!0,(t={position:"fixed",top:w}).width="border-box"===r.css("box-sizing")?r.outerWidth()+"px":r.width()+"px",r.css(t).addClass(S),null==E&&(r.after(x),"left"!==d&&"right"!==d||x.append(r)),r.trigger("sticky_kit:stick")),A&&C&&(null==s&&(s=c+l<n+h+w),!m&&s)?(m=!0,"static"===v.css("position")&&v.css({position:"relative"}),r.css({position:"absolute",bottom:a,top:"auto"}).trigger("sticky_kit:bottom")):void 0},e=function(){if(!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement))return y(),n()},t=function(){if(p=!0,M.off("touchmove",n),M.off("scroll",n),M.off("resize",e),D(document.body).off("sticky_kit:recalc",e),r.off("sticky_kit:detach",t),r.removeData("sticky_kit"),r.css({position:"",bottom:"",top:"",width:""}),v.position("position",""),A)return null==E&&("left"!==d&&"right"!==d||r.insertAfter(x),x.remove()),r.removeClass(S)},M.on("touchmove",n),M.on("scroll",n),M.on("resize",e),D(document.body).on("sticky_kit:recalc",e),r.on("sticky_kit:detach",t),setTimeout(n,0)}},o=0,r=this.length;o<r;o++)e=this[o],n(D(e));return this}}.call(this),function(l){"use strict";var r={settings:{admin_bar:{height:0,position:""}},init:function(){this.admin_bar_check(),this.sticky_sidebar(),this.accordion_widget(),this.sticky_header(),this.fit_vids(),this.sliders(),this.instagram_slider(),this.responsive_sidebar(),this.header_action_search(),this.init_load_more_click(),this.init_infinite_scroll(),this.scroll_push_state(),this.scroll_animate(),this.gutenberg_gallery(),this.popup(),this.reverse_menu(),this.start_kenburns(),this.object_fit_fix(),this.video_fallback_image(),this.animate_counters(),this.cover_image_parallax(),this.align_full_fix(),this.switcher()},resize:function(){this.admin_bar_check(),this.sticky_sidebar(),this.align_full_fix()},scroll:function(){},admin_bar_check:function(){l("#wpadminbar").length&&l("#wpadminbar").is(":visible")&&(this.settings.admin_bar.height=l("#wpadminbar").height(),this.settings.admin_bar.position=l("#wpadminbar").css("position"))},switcher:function(){l("#switcher_link, .switcher_close").click(function(t){t.preventDefault(),l("#switcher_wrap").toggleClass("switcher_moved")}),l("#switcher_wrap").hasClass("lazy_open")&&setTimeout(function(){l("#switcher_wrap").hasClass("switcher_moved")&&l("#switcher_link").click()},7e3),l("#show-rtl").change(function(){l(this).is(":checked")?l("head").append('<link media="all" type="text/css" href="'+l(this).attr("data-url")+'" id="trawell-rtl-css-custom" rel="stylesheet">'):l("#trawell-rtl-css-custom").remove()})},sticky_sidebar:function(){l(".trawell-sidebar-sticky").length&&l("body").imagesLoaded(function(){var t=l(".trawell-sidebar-sticky"),i=window.matchMedia("(min-width: 1260px)").matches?50:30;t.each(function(){var t=l(this).parent().hasClass("trawell-sidebar-mini")?730:1024,e=(l(".trawell-header-sticky").length&&!trawell_js_settings.header_sticky_up?l(".trawell-header-sticky").outerHeight():0)+("fixed"==r.settings.admin_bar.position?r.settings.admin_bar.height:0)+i;window.matchMedia("(min-width: "+t+"px)").matches?l(this).stick_in_parent({inner_scrolling:!0,offset_top:e}):(l(this).css("height","auto"),l(this).css("min-height","1px"),l(this).trigger("sticky_kit:detach"))})})},accordion_widget:function(){l(".widget").each(function(){l(this).find(".menu-item-has-children > a, .page_item_has_children > a, .cat-parent > a").after('<span class="trawell-accordion-nav"><i class="o-angle-down-1"></i></span>')}),l(".widget").on("click",".trawell-accordion-nav",function(){l(this).next("ul.sub-menu:first, ul.children:first").slideToggle("fast").parent().toggleClass("active")})},responsive_sidebar:function(){l("body").on("click",".trawell-hamburger",function(){l("body").addClass("trawell-sidebar-action-open trawell-lock");var t="fixed"==r.settings.admin_bar.position||0==l(window).scrollTop()?r.settings.admin_bar.height:0;l(".trawell-sidebar").css("top",t)}),l("body").on("click",".trawell-action-close, .trawell-body-overlay",function(){l("body").removeClass("trawell-sidebar-action-open trawell-lock")}),l(document).keyup(function(t){27==t.keyCode&&l("body").hasClass("trawell-sidebar-action-open")&&l("body").removeClass("trawell-sidebar-action-open trawell-lock")});var t=l(".trawell-sidebar .widget:not(.trawell-responsive-nav)"),e=l(".trawell-sidebar .widget.widget-no-padding:not(.trawell-responsive-nav)");t.length==e.length&&0!=t.length&&l(".trawell-responsive-nav").addClass("widget-no-padding")},header_action_search:function(){l("body").on("click",".trawell-action-search span",function(){l(this).find("i").toggleClass("o-exit-1","o-search-1"),l(this).closest(".trawell-action-search").toggleClass("active"),setTimeout(function(){l('.active input[type="text"]').focus()},150)}),l(document).on("click",function(t){!l(t.target).is(".trawell-action-search span")&&l(window).width()<580&&l(".trawell-action-search.active .sub-menu").css("width",l(window).width())})},sticky_header:function(){var i=l(".trawell-header-sticky");if(c(i))return!1;var n=0;l(window).scroll(function(){var t=l(window).scrollTop(),e="fixed"==r.settings.admin_bar.position?r.settings.admin_bar.height:0;trawell_js_settings.header_sticky_up?t<n&&t>=trawell_js_settings.header_sticky_offset?r.show_sticky_header(i,e):r.hide_sticky_header(i):t>=trawell_js_settings.header_sticky_offset?r.show_sticky_header(i,e):r.hide_sticky_header(i),n=t})},fit_vids:function(){l(".trawell-entry, .widget, .trawell-cover > .container, .trawell-custom-content").fitVids({customSelector:["iframe[src*='youtube.com/embed']","iframe[src*='player.vimeo.com/video']","iframe[src*='kickstarter.com/projects']","iframe[src*='players.brightcove.net']","iframe[src*='hulu.com/embed']","iframe[src*='vine.co/v']","iframe[src*='videopress.com/embed']","iframe[src*='dailymotion.com/embed']","iframe[src*='vid.me/e']","iframe[src*='player.twitch.tv']","iframe[src*='facebook.com/plugins/video.php']","iframe[src*='gfycat.com/ifr/']","iframe[src*='liveleak.com/ll_embed']","iframe[src*='media.myspace.com']","iframe[src*='archive.org/embed']","iframe[src*='w.soundcloud.com/player']","iframe[src*='channel9.msdn.com']","iframe[src*='content.jwplatform.com']","iframe[src*='wistia.com']","iframe[src*='vooplayer.com']","iframe[src*='content.zetatv.com.uy']","iframe[src*='embed.wirewax.com']","iframe[src*='eventopedia.navstream.com']","iframe[src*='cdn.playwire.com']","iframe[src*='drive.google.com']","iframe[src*='videos.sproutvideo.com']"].join(","),ignore:'[class^="wp-block"]'})},show_sticky_header:function(t,e){c(e)&&(t=0),t.hasClass("active")||(t.css("top",e),t.addClass("active"))},hide_sticky_header:function(t){t.hasClass("active")&&t.removeClass("active")},sliders:function(){l("body").imagesLoaded(function(){l(".trawell-cover-gallery .gallery, .trawell-cover-slider, .gallery.gallery-columns-1, .wp-block-gallery.columns-1, .trawell-cover-gallery .wp-block-gallery").each(function(){var t=l(this);if(t.hasClass("trawell-cover-slider")||!c(trawell_js_settings.use_gallery)){t.hasClass("owl-carousel")||t.addClass("owl-carousel");var e=t.hasClass("wp-block-gallery")?t.attr("class").match(/columns-(\d+)/):t.attr("class").match(/gallery-columns-(\d+)/),i=c(e)?1:e[1],n=!1;t.hasClass("trawell-cover-slider")&&(n=!!trawell_js_settings.home_slider_autoplay),t.owlCarousel({rtl:!!trawell_js_settings.rtl_mode,loop:!0,nav:!0,autoWidth:!1,autoHeight:!0,autoplay:n,autoplayTimeout:1e3*parseInt(trawell_js_settings.home_slider_autoplay_time),autoplayHoverPause:!0,center:!1,fluidSpeed:300,margin:0,items:i,navText:['<i class="o-angle-left-1"></i>','<i class="o-angle-right-1"></i>'],responsive:{0:{items:1==i?1:2},729:{items:1==i?1:3},1024:{items:1==i?1:4},1200:{items:i}}})}})})},instagram_slider:function(){var t=l(".trawell-pre-footer .meks-instagram-widget");t.length&&(t.hasClass("owl-carousel")||t.addClass("owl-carousel"),t.owlCarousel({rtl:!!trawell_js_settings.rtl_mode,loop:!0,nav:!0,autoWidth:!1,center:!0,fluidSpeed:300,margin:0,items:5,navText:['<i class="o-angle-left-1"></i>','<i class="o-angle-right-1"></i>'],lazyLoad:!0,responsive:{0:{items:2},729:{items:3},1024:{items:4},1200:{items:5}}}))},gutenberg_gallery:function(){if(!c(trawell_js_settings.use_gallery)){var t=l(".wp-block-gallery");t.length&&l("body").imagesLoaded(function(){var n=document.querySelectorAll(".wp-block-gallery img");t.find("a").each(function(t){var e=n[t].naturalWidth,i=n[t].naturalHeight;l(this).attr("data-size",JSON.stringify({w:e,h:i}))})})}},popup:function(){l("body").on("click",".gallery-item a, a.trawell-popup-img, .wp-block-gallery a",function(t){if(l(this).hasClass("trawell-popup-img")||!c(trawell_js_settings.use_gallery)){t.preventDefault();var e=document.querySelectorAll(".pswp")[0],n=[],s=0,o=l(this),i=!!o.closest(".gallery, .wp-block-gallery").hasClass("owl-carousel"),r=[],a=!o.hasClass("trawell-popup-img");if(c(r=a?i?l(this).closest(".gallery, .wp-block-gallery").find(".owl-item:not(.cloned) .gallery-item a, .owl-item:not(.cloned) .blocks-gallery-item a"):l(this).closest(".gallery, .wp-block-gallery").find(".gallery-item a, .blocks-gallery-item a"):l("a.trawell-popup-img")))return!0;l.each(r,function(t){o.attr("href")==l(this).attr("href")&&(s=t);var e=JSON.parse(l(this).attr("data-size")),i={src:l(this).attr("href"),w:e.w,h:e.h,title:a?l(this).closest(".gallery-item, .blocks-gallery-item").find("figcaption").html():l(this).closest("figure.wp-caption").find("figcaption").html()};n.push(i)}),new PhotoSwipe(e,PhotoSwipeUI_Default,n,{history:!1,index:s,preload:[2,2],captionEl:!0,fullscreenEl:!1,zoomEl:!1,shareEl:!1,preloaderEl:!0}).init()}})},reverse_menu:function(){l(".trawell-header").on("mouseenter","ul li",function(t){l(this).find("ul").length&&(l(window).width()-(l(this).find("ul").offset().left+l(this).find("ul").outerWidth())<0&&l(this).find("ul").addClass("trawell-rev"))})},init_load_more_click:function(){l("body").on("click",".load-more > a",function(t){t.preventDefault();var e=l(this).attr("href");c(e)||r.load_more({url:e,elem_with_new_url:".load-more > a"},function(){})})},init_infinite_scroll:function(){if(!c(l(".trawell-pagination .trawell-infinite-scroll"))){var i=!0;l(window).scroll(function(){var t=l(".trawell-pagination");if(!c(t)&&i&&l(this).scrollTop()>t.offset().top-l(this).height()-200){i=!1;var e=l(".trawell-pagination .trawell-infinite-scroll a").attr("href");r.load_more({url:e,elem_with_new_url:".trawell-infinite-scroll a"},function(){i=!0})}})}},load_more:function(t,s){if(c(t))console.error("Args can't be empty");else{r.toggle_pagination_loader();var e={url:window.location.href,container:".trawell-posts",elem_with_new_url:".load-more > a",attr_with_new_url:"href"},o=l.extend({},e,t);c(o.url)&&console.error("You must provide url to next page"),l("<div>").load(o.url,function(){var t=l(this),e=t.find(o.elem_with_new_url).attr(o.attr_with_new_url),i=t.find("title").text(),n=t.find(o.container).children();n.imagesLoaded(function(){if(n.hide().appendTo(".trawell-posts:last").fadeIn(),window.location.href!==e){c(e)?l(o.elem_with_new_url).closest(".trawell-pagination").fadeOut("fast").remove():l(o.elem_with_new_url).attr(o.attr_with_new_url,e);var t={prev:window.location.href,next:o.url,offset:l(window).scrollTop(),prev_title:window.document.title,next_title:i};r.push_state(t),"function"==typeof s&&s(!0)}else l(o.elem_with_new_url).closest(".trawell-pagination").fadeOut("fast").remove(),"function"==typeof s&&s(!1);r.toggle_pagination_loader(),r.sticky_sidebar()})})}},toggle_pagination_loader:function(){l(".trawell-pagination").toggleClass("trawell-loader-active")},push_state:function(t){var e={prev:window.location.href,next:"",offset:l(window).scrollTop(),prev_title:window.document.title,next_title:window.document.title,increase_counter:!0},i=l.extend({},e,t);i.increase_counter&&(r.pushes.up++,r.pushes.down++),delete i.increase_counter,r.pushes.url.push(i),window.document.title=i.next_title,window.history.pushState(i,"",i.next)},pushes:{url:[],up:0,down:0},scroll_push_state:function(){if(!c(l(".trawell-pagination .load-more a"))||!c(l(".trawell-pagination .trawell-infinite-scroll"))){r.push_state({increase_counter:!1});var t,e=0;l(window).scroll(function(){r.pushes.url[r.pushes.up].offset!==t&&l(window).scrollTop()<r.pushes.url[r.pushes.up].offset&&(t=r.pushes.url[r.pushes.up].offset,e=0,window.document.title=r.pushes.url[r.pushes.up].prev_title,window.history.replaceState(r.pushes.url,"",r.pushes.url[r.pushes.up].prev),r.pushes.down=r.pushes.up,0!==r.pushes.up&&r.pushes.up--),r.pushes.url[r.pushes.down].offset!==e&&l(window).scrollTop()>r.pushes.url[r.pushes.down].offset&&(e=r.pushes.url[r.pushes.down].offset,t=0,window.document.title=r.pushes.url[r.pushes.down].next_title,window.history.replaceState(r.pushes.url,"",r.pushes.url[r.pushes.down].next),r.pushes.up=r.pushes.down,r.pushes.down<r.pushes.url.length-1&&r.pushes.down++)})}},scroll_animate:function(){l("body").on("click",".trawell-scroll-animate",function(t){t.preventDefault();var e=this.hash,i=l(e),n=trawell_js_settings.header_sticky?l(".trawell-header-sticky").height():0;l("html, body").stop().animate({scrollTop:i.offset().top-n},900,"swing",function(){window.location.hash=e})})},start_kenburns:function(){if(window.matchMedia("(max-width: 439px)").matches)return!1;l("body").imagesLoaded(function(){l("body.trawell-animation-kenburns").addClass("trawell-animation-kenburns-start")})},object_fit_fix:function(){l("body").imagesLoaded(function(){objectFitImages(".trawell-item a.entry-image img,.trawell-cover img")})},video_fallback_image:function(){trawell_js_settings.home_cover_video_image_fallback&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&this.is_autoplay_supported(function(t){t||(l(".trawell-cover-video-item video").css("display","none"),l(".trawell-cover-video-item .trawell-fallback-video-image").css("display","block"))})},is_autoplay_supported:function(t){if("function"!=typeof t)return console.log("is_autoplay_supported: Callback must be a function!"),!1;if(sessionStorage.autoplay_supported)"true"===sessionStorage.autoplay_supported?t(!0):t(!1);else{var e=document.createElement("video");e.autoplay=!0,e.src="data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAATKbW9vdgAAAGxtdmhkAAAAANLEP5XSxD+VAAB1MAAAdU4AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACFpb2RzAAAAABCAgIAQAE////9//w6AgIAEAAAAAQAABDV0cmFrAAAAXHRraGQAAAAH0sQ/ldLEP5UAAAABAAAAAAAAdU4AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAoAAAAFoAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAHVOAAAH0gABAAAAAAOtbWRpYQAAACBtZGhkAAAAANLEP5XSxD+VAAB1MAAAdU5VxAAAAAAANmhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABMLVNNQVNIIFZpZGVvIEhhbmRsZXIAAAADT21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAw9zdGJsAAAAwXN0c2QAAAAAAAAAAQAAALFhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAoABaABIAAAASAAAAAAAAAABCkFWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAOGF2Y0MBZAAf/+EAHGdkAB+s2UCgL/lwFqCgoKgAAB9IAAdTAHjBjLABAAVo6+yyLP34+AAAAAATY29scm5jbHgABQAFAAUAAAAAEHBhc3AAAAABAAAAAQAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAAQBjdHRzAAAAAAAAAB4AAAABAAAH0gAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAB9IAAAAUc3RzcwAAAAAAAAABAAAAAQAAACpzZHRwAAAAAKaWlpqalpaampaWmpqWlpqalpaampaWmpqWlpqalgAAABxzdHNjAAAAAAAAAAEAAAABAAAAHgAAAAEAAACMc3RzegAAAAAAAAAAAAAAHgAAA5YAAAAVAAAAEwAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABRzdGNvAAAAAAAAAAEAAAT6AAAAGHNncGQBAAAAcm9sbAAAAAIAAAAAAAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAeAAAAAAAAAAhmcmVlAAAGC21kYXQAAAMfBgX///8b3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMTEgNzU5OTIxMCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTUgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0xMSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgc3RpdGNoYWJsZT0xIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PWluZmluaXRlIGtleWludF9taW49Mjkgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz0ycGFzcyBtYnRyZWU9MSBiaXRyYXRlPTExMiByYXRldG9sPTEuMCBxY29tcD0wLjYwIHFwbWluPTUgcXBtYXg9NjkgcXBzdGVwPTQgY3BseGJsdXI9MjAuMCBxYmx1cj0wLjUgdmJ2X21heHJhdGU9ODI1IHZidl9idWZzaXplPTkwMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAG9liIQAFf/+963fgU3DKzVrulc4tMurlDQ9UfaUpni2SAAAAwAAAwAAD/DNvp9RFdeXpgAAAwB+ABHAWYLWHUFwGoHeKCOoUwgBAAADAAADAAADAAADAAAHgvugkks0lyOD2SZ76WaUEkznLgAAFFEAAAARQZokbEFf/rUqgAAAAwAAHVAAAAAPQZ5CeIK/AAADAAADAA6ZAAAADwGeYXRBXwAAAwAAAwAOmAAAAA8BnmNqQV8AAAMAAAMADpkAAAAXQZpoSahBaJlMCCv//rUqgAAAAwAAHVEAAAARQZ6GRREsFf8AAAMAAAMADpkAAAAPAZ6ldEFfAAADAAADAA6ZAAAADwGep2pBXwAAAwAAAwAOmAAAABdBmqxJqEFsmUwIK//+tSqAAAADAAAdUAAAABFBnspFFSwV/wAAAwAAAwAOmQAAAA8Bnul0QV8AAAMAAAMADpgAAAAPAZ7rakFfAAADAAADAA6YAAAAF0Ga8EmoQWyZTAgr//61KoAAAAMAAB1RAAAAEUGfDkUVLBX/AAADAAADAA6ZAAAADwGfLXRBXwAAAwAAAwAOmQAAAA8Bny9qQV8AAAMAAAMADpgAAAAXQZs0SahBbJlMCCv//rUqgAAAAwAAHVAAAAARQZ9SRRUsFf8AAAMAAAMADpkAAAAPAZ9xdEFfAAADAAADAA6YAAAADwGfc2pBXwAAAwAAAwAOmAAAABdBm3hJqEFsmUwIK//+tSqAAAADAAAdUQAAABFBn5ZFFSwV/wAAAwAAAwAOmAAAAA8Bn7V0QV8AAAMAAAMADpkAAAAPAZ+3akFfAAADAAADAA6ZAAAAF0GbvEmoQWyZTAgr//61KoAAAAMAAB1QAAAAEUGf2kUVLBX/AAADAAADAA6ZAAAADwGf+XRBXwAAAwAAAwAOmAAAAA8Bn/tqQV8AAAMAAAMADpkAAAAXQZv9SahBbJlMCCv//rUqgAAAAwAAHVE=",e.load(),e.style.display="none",e.playing=!1,e.play(),e.onplay=function(){this.playing=!0},e.oncanplay=function(){e.playing?(sessionStorage.autoplay_supported="true",t(!0)):(sessionStorage.autoplay_supported="false",t(!1))}}},animate_counters:function(){if(trawell_js_settings.home_counter_animate){var e=l(".trawell-numbers");if(0!=e.length){var i=!0;l(window).scroll(function(){var t=e.offset().top-window.innerHeight;i&&l(window).scrollTop()>t&&(l(".display-2").each(function(){var t=l(this),e=t.attr("data-count");l({count_start:0}).animate({count_start:e},{duration:2e3,easing:"swing",step:function(){t.text(Math.floor(this.count_start))},complete:function(){t.text(this.count_start)}})}),i=!1)})}}},cover_image_parallax:function(){trawell_js_settings.cover_parallax&&l(".trawell-parallax .trawell-cover-item").css("background-image","url("+l(".trawell-parallax .trawell-cover-item .entry-image img").attr("src")+")")},align_full_fix:function(){if(l("body").hasClass("trawell-sidebar-none")){var t=".alignfull { width: "+l(window).width()+"px; margin-left: -"+l(window).width()/2+"px; margin-right: -"+l(window).width()/2+"px; left:50%; right:50%; }";l("#trawell-align-fix").length?l("#trawell-align-fix").html(t):l("head").append('<style id="trawell-align-fix" type="text/css">'+t+"</style>")}}};function c(t){return void 0===t||(null===t||(0===t.length||(""===t||!("object"!=typeof t||!l.isEmptyObject(t)))))}l(document).ready(function(){r.init()}),l(window).resize(function(){r.resize()}),l(window).scroll(function(){r.scroll()})}(jQuery);




(function($) {

    "use strict";

    $(document).ready(function() {

        $('body').on('click', '.meks_ess-item:not(".prevent-share-popup")', function(e) {
            e.preventDefault();
            meks_ess_popup($(this).attr('data-url'));
        });

    });

    function meks_ess_popup(data) {
        window.open(data, "Share", 'height=500,width=760,top=' + ($(window).height() / 2 - 250) + ', left=' + ($(window).width() / 2 - 380) + 'resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0');
    }

})(jQuery);



(function(c, a) {
    var b = {};
    b.name = "Strategic Partnerships namespace";
    b.gElm = function(d) {
        return (d) ? c.getElementById(d) : false;
    };
    b.validation = {
        validSearch: function() {
            var idf = jQuery('#b_idf:checked').val();
            //alert(idf);
            if (idf != 'on') { // check if idf checkbox is checked and exclude date validation
                if (!this.checkDestination() || !this.checkDates()) {
                    return false;
                }
            }
        },
        checkDestination: function() {
            var d = b.gElm("b_destination").value || "";
            if (d) {
                return true;
            }
            this.showFormError(b.vars.errors.destinationErrorMsg,
                "searchBox_error_msg");
            return false;
        },
        checkDates: function() {
            var j = b.gElm,
                k = parseInt(j("b_checkin_day").value),
                f = j("b_checkin_month").value,
                p = f.split(/-/),
                g = new Date(p[0], p[1] - 1, k),
                h = parseInt(j("b_checkout_day").value),
                l = j("b_checkout_month").value,
                i = l.split(/-/),
                n = new Date(i[0], i[1] - 1, h),
                o = b.vars.gen.b_todays_date.split(/-/),
                m = j("b_checkin_input") || false,
                d = m && m.offsetWidth ? true : false;
            textCheckOut = j("b_checkout_input") || false;
            textCheckOutShown = m && m.offsetWidth ? true : false;
            if (parseInt(i[1]) === parseInt(o[1]) && k < parseInt(o[2])) {
                this.showFormError(b.vars.errors.dateInThePast,
                    "searchBox_dates_error_msg");
                return false;
            }
            if (n.getTime() <= g.getTime()) {
                this.showFormError(b.vars.errors.cObeforeCI, "searchBox_dates_error_msg");
                return false;
            }
            if ((n - g) / (1000 * 60 * 60 * 24) > 30) {
                this.showFormError(b.vars.errors.tooManyDays,
                    "searchBox_dates_error_msg");
                return false;
            }
            return true;
        },
        showFormError: function(f, d) {
            if (!f || !d) {
                return false;
            }
            var e = c.getElementById(d),
                g = function() {
                    jQuery(e).fadeOut("default");
                };
            e.innerHTML = f;
            e.style.cursor = "pointer";
            jQuery(e).fadeIn("default", function() {
                var h = this;
                if (h.addEventListener) {
                    h.addEventListener("click", g, false);
                }
                if (h.attachEvent) {
                    h.attachEvent("onclick", g);
                }
                setTimeout(g, 5000);
            });
        }
    };
    a.sp = b;
    a.e = b.gElm;
})(document, window);

jQuery(document).on('click', '#b_dest_unlocker', function(event){
    event.preventDefault();
    jQuery("#b_dest_type, #b_dest_id, #b_open_search").remove();
    jQuery("#b_destination").removeAttr("readonly");
    jQuery("#b_destination").val('');
    jQuery("#b_destination").attr("placeholder", objectL10n.placeholder);
    jQuery("#b_dest_unlocker").remove();
    jQuery("#b_destination").css({
        "background": "#FFFFFF",
        "color": "#003580"
    });

});

jQuery(document).on('hover', '#b_dest_unlocker', function(event){
//jQuery("#b_dest_unlocker").hover(function() {
    jQuery("#b_open_search").toggle();
});

jQuery("#bos_info_displayer").click(function(event) {
    event.preventDefault();
    jQuery("#bos_info_box").toggle();
});



/* Get current date*/
var my_date = new Date();
var b_gg_today = my_date.getDate();
var b_mm_today = my_date.getMonth() + 1;
var b_yy_today = my_date.getFullYear();
var sp = sp || {};
sp.vars = {};
sp.vars.errors = {
    destinationErrorMsg: objectL10n.destinationErrorMsg,
    tooManyDays: objectL10n.tooManyDays,
    dateInThePast: objectL10n.dateInThePast,
    cObeforeCI: objectL10n.cObeforeCI
};
sp.vars.gen = {
    b_todays_date: b_yy_today + '-' + b_mm_today + '-' + b_gg_today
};
booking = {};
booking.env = {};
sp.variables = {
    calendar_nextMonth: objectL10n.nextMonth,
    calendar_prevMonth: objectL10n.calendar_prevMonth,
    calendar_closeCalendar: objectL10n.calendar_closeCalendar,
    calendar_url: '',
    months: [objectL10n.january, objectL10n.february, objectL10n.march,
        objectL10n.april, objectL10n.may, objectL10n.june, objectL10n.july,
        objectL10n.august, objectL10n.september, objectL10n.october, objectL10n.november,
        objectL10n.december
    ],
    days: [objectL10n.mo, objectL10n.tu, objectL10n.we, objectL10n.th, objectL10n
        .fr, objectL10n.sa, objectL10n.su
    ],
    b_is_searchbox: true
};
// TODO: Sort all of the naming out. Once all of the products have been consolidated the name space needs cleaning up to stay consistent.
sp.gen = {
    difference: function(a, b) {
        return Math.abs(a - b);
    },
    id: function(elm) {
        return (elm) ? document.getElementById(elm) : false;
    }
};
// Calender
calendar = new Object();
tr = new Object();
var filaMonth;

function showCalendar(img, cal, dt, frm, m, y, d) {
    var d = document;
    if (d.getElementById) {
        var c = d.getElementById(cal),
            i = d.getElementById(img),
            f = d.getElementById(frm);
        calendar.calfrm = frm;
        calendar.cal = c;
        calendar.caldt = dt;
        calendar.calf = f;
        var my = f[dt + '_month'].value.split("-");
        y = my[0];
        m = my[1];
        d = f[dt + '_day'].value;
        buildCal(y, m, d);
        var l = 0;
        var t = 0;
        aTag = i;
        do {
            aTag = aTag.offsetParent;
            l += aTag.offsetLeft;
            t += aTag.offsetTop;
        } while (aTag.offsetParent && aTag.tagName != 'body');
        var left = i.offsetLeft + l;
        var top = i.offsetTop + t + i.offsetHeight + 2;
        // Adding a class for the check in and check out.
        jQuery(c).attr('class', "b_popup " + dt);
        if (sp.variables.b_is_ie6) {
            if (sp.variables.b_action === "index") {
                left = i.offsetLeft + 140;
                top = i.offsetTop + 290;
            }
            if (sp.variables.b_action === "hotel") {
                left = i.offsetLeft + 160;
                top = i.offsetTop + 150;
            }
            if (sp.variables.b_action.match(/city|region|landmark|country|place/g)) {
                left = i.offsetLeft + 160;
                top = i.offsetTop + 150;
            }
        }
        if (sp.variables.b_is_searchbox) {
            var bWidth = jQuery("#b_searchboxInc").width(),
                cWidth = jQuery(c).innerWidth(),
                bHeight = jQuery("#b_searchboxInc").height(),
                cHeight = jQuery(c).innerHeight();
            if ((cWidth + left) >= bWidth) {
                left = left - sp.gen.difference((cWidth + left), bWidth);
            }
            var container;
            if (container = document.getElementById('container')) {
                if (container.offsetHeight <= 180) {
                    top = "-35";
                } else {
                    if ((cHeight + top) >= bHeight) {
                        top = top - sp.gen.difference((cHeight + top), bHeight);
                        if ((cWidth + (left + 10)) < bWidth) {
                            left = left + 10;
                        }
                    }
                }
            } else {
                if ((cHeight + top) >= bHeight) {
                    top = top - sp.gen.difference((cHeight + top), bHeight);
                    if ((cWidth + (left + 10)) < bWidth) {
                        left = left + 10;
                    }
                }
            }
        }
        c.style.position = "absolute";
        c.style.left = left + 'px';
        c.style.top = top + 'px';
        c.style.display = "block";
    }
}

function closeCal() {
    calendar.cal.style.display = 'none';
}

function buildCal(y, m, d) {
    var daysInMonth = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    td = new Date();
    if (!y) {
        y = td.getFullYear();
    }
    if (!m) {
        m = td.getMonth() + 1;
    }
    if (!d) {
        d = td.getDate;
    }
    var frm = calendar.calfrm;
    var dt = calendar.caldt;
    var mDate = new Date(y, m - 1, 1);
    var firstMonthDay = mDate.getDay();
    daysInMonth[1] = (((mDate.getFullYear() % 100 != 0) && (mDate.getFullYear() %
        4 == 0)) || (mDate.getFullYear() % 400 == 0)) ? 29 : 28;
    var today = (y == td.getFullYear() && m == td.getMonth() + 1) ? td.getDate() :
        0;
    var t = '<table class="b_caltable" cellspacing="0"><tr class="b_calHeader">';
    var flm = td.getMonth() + 1;
    var flyr = td.getFullYear();
    for (p = 0; p <= 11; p++) {
        if (flm == m) {
            filaMonth = p;
        }
        flm++;
        if (flm > 12) {
            flm = 1;
            flyr++;
        }
    }
    t += '<td colspan="7">';
    if (filaMonth == 0) {
        t += '<span class="prevMonthDisabled">&nbsp;&lt;&nbsp;</span>';
    } else {
        t += '<a class="changeMonth" href="javascript:prevMonth(' + y + ',' + m +
            ');" title="' + sp.variables.calendar_Month + '">&nbsp;&lt;&nbsp;</a>';
    }
    if (!sp.variables.b_hide_month_dd) {
        t +=
            '&nbsp;<select name="ym" class="selectMonth" onchange="goMonth(this.options[this.selectedIndex].value)">';
        var mn = td.getMonth() + 1;
        var yr = td.getFullYear();
        for (n = 0; n <= 11; n++) {
            t += '<option value="' + mn + '"';
            if (mn == m) {
                t += ' selected="selected"';
            }
            t += '>' + sp.variables.months[mn - 1] + ' ' + yr + '</option>';
            mn++;
            if (mn > 12) {
                mn = 1;
                yr++;
            }
        }
        t += '</select>&nbsp;';
    }
    if (filaMonth == 11) {
        t += '&nbsp;&gt;&nbsp;';
    } else {
        t += '<a class="changeMonth" href="javascript:nextMonth(' + y + ',' + m +
            ');" title="' + sp.variables.calendar_nextMonth + '">&nbsp;&gt;&nbsp;</a>';
    }
    t += '</td></tr>';
    t += '<tr class="b_calDayNames">';
    for (dn = 0; dn < 7; dn++) {
        var cl = '';
        if ((dn % 7 == 5) || (dn % 7 == 6)) {
            cl += ' b_calWeekend';
        }
        t += '<th class="' + cl + '">' + sp.variables.days[dn] + '</th>';
    }
    t += '</tr><tr class="b_calDays">';
    // Make the previous and next months dates appear.
    if (sp.variables.full_dates) {
        var getPrevMonth = (m - 1) - 1,
            prevMonth = daysInMonth[getPrevMonth],
            newMonth = 1;
    }
    for (i = 1; i <= 42; i++) {
        var x = i - (firstMonthDay + 6) % 7,
            prevM = 0,
            nextM;
        // This out puts the days in the month
        if (x > daysInMonth[m - 1] || x < 1) {
            if (sp.variables.full_dates) {
                prevM = (x < 1) ? 1 : 0;
                nextM = (x > daysInMonth[m - 1]) ? 1 : 0;
            }
            x = (!sp.variables.full_dates) ? '&nbsp;' : (x >= daysInMonth[m - 1]) ?
                newMonth++ : (prevMonth - x);
        }
        var cl = '';
        var href = 0;
        if ((i % 7 == 0) || (i % 7 == 6)) {
            cl += ' b_calWeekend';
        }
        if (x > 0) {
            var xDay = new Date(y, m - 1, x);
            if ((xDay.getFullYear() == y) && (xDay.getMonth() + 1 == m) && (xDay.getDate() ==
                d)) {
                cl += ' b_calSelected';
                href = 1;
            }
            if ((xDay.getFullYear() == td.getFullYear()) && (xDay.getMonth() == td.getMonth()) &&
                (xDay.getDate() == td.getDate())) {
                cl += ' b_calToday';
                href = 1;
            } else {
                if (xDay > td && !prevM || sp.variables.full_dates && nextM && !prevM) {
                    cl += (nextM) ? 'nextMonth b_calFuture' : ' b_calFuture';
                    href = 1;
                } else {
                    if (xDay < td || sp.variables.full_dates && prevM) {
                        cl += ' b_calPast'
                    }
                }
            }
        };
        t += '<td class="' + cl + '">';
        if (href) {
            t += '<a id="' + x + '-' + m + '-' + y +
                '" class="calDateClick" href="javascript:pickDate(' + y + ',' + m + ',' +
                x + ',\'' + dt + '\',\'' + frm + '\');">' + x + '</a>';
        } else {
            t += x;
        }
        t += '</td>';
        if (((i) % 7 == 0) && (i < 36)) {
            t += '</tr><tr class="b_calDays">';
        }
    }
    t +=
        '</tr><tr class="b_calClose"><td colspan="7"><a href="javascript:closeCal();">' +
        sp.variables.calendar_closeCalendar + '</a></td></tr></table>';
    document.getElementById("b_calendarInner").innerHTML = t;
}

function prevMonth(y, m) {
    if (new Date(y, m - 1, 1) < td) {
        return;
    }
    if (m > 1) {
        m--;
    } else {
        m = 12;
        y--;
    };
    buildCal(y, m);
}

function nextMonth(y, m) {
    if (m < 12) {
        m++;
    } else {
        m = 1;
        y++;
    }
    if (y > td.getFullYear() && m >= (td.getMonth() + 1)) {
        return;
    }
    buildCal(y, m);
}

function goMonth(m) {
    var y = td.getFullYear();
    if (m < td.getMonth() + 1) {
        y++;
    }
    buildCal(y, m);
}

function pickDate(y, m, d, dt, frm) {
    // set form values
    var f = calendar.calf,
        dt = calendar.caldt,
        tInput;
    f[dt + '_month'].value = y + "-" + m;
    f[dt + '_day'].value = d;
    if (tInput = document.getElementById(dt + '_input')) {
        tInput.value = d + "/" + m + "/" + y;
    }
    tickCheckBox('b_availcheck');
    if (dt == "b_checkin") {
        checkDateOrder(calendar.calfrm, 'b_checkin_day', 'b_checkin_month',
            'b_checkout_day', 'b_checkout_month');
    }
    closeCal();
}

function checkDateOrder(frm, ci_day, ci_month_year, co_day, co_month_year) {
    var frm = document.getElementById(frm),
        my = frm[ci_month_year].value.split("-"),
        ci = new Date(my[0], my[1] - 1, frm[ci_day].value, 12, 0, 0, 0);
    // create date object from checkout values
    my = frm[co_month_year].value.split("-");
    var co = new Date(my[0], my[1] - 1, frm[co_day].value, 12, 0, 0, 0);
    // if checkin date is at or after checkout date,
    // add a day full of milliseconds, and set the
    // selectbox values for checkout date to new value
    if (ci >= co) {
        co.setTime(ci.getTime() + 1000 * 60 * 60 * 24);
        frm[co_day].value = co.getDate();
        var com = co.getMonth() + 1;
        frm[co_month_year].value = co.getFullYear() + "-" + com;
        var tInput;
        if (tInput = document.getElementById('b_checkout_input')) {
            tInput.value = co.getDate() + "/" + com + "/" + co.getFullYear();
        }
    }
    //updateSelectOptions( ci_day, ci_month_year, co_day, co_month_year );
}

function updateSelectOptions(ci_day, ci_month_year, co_day, co_month_year) {
    var daysInMonth = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        checkInDay = sp.gen.id(ci_day),
        checkInMonth = sp.gen.id(ci_month_year).value.split(/-/),
        checkInOptions = "",
        checkOutDay = sp.gen.id(co_day),
        checkOutMonth = sp.gen.id(co_month_year).value.split(/-/),
        checkOutOptions = "";
    daysInMonth[1] = (new Date(checkInDay[1], 1, 28).getMonth()) ? 28 : 29;
    if (sp.variables.b_is_ie) {
        dim = daysInMonth[checkInMonth[1] - 1];
        checkInOptions = checkInDay.getElementsByType('option');
        var cIOLng = checkInOptions.length;
        for (var i = 0; i <= 31; i++) {
            if (i <= dim) {
                if (dim) {
                    checkInOptions[i].value = i;
                    checkInOptions[i].innerHTML = i;
                } else {}
            } else {
                checkInOptions[i].parentNode.removeChild(checkInOptions[i]);
            }
        }
        dim = daysInMonth[checkOutMonth[1] - 1];
    } else {
        var dim = "";
        // Set check in day number
        checkInDay.innerHTML = "";
        dim = daysInMonth[checkInMonth[1] - 1];
        for (var i = 1; i <= dim; i++) {
            checkInOptions += "<option value='" + i + "'>" + i + "</option>";
        }
        checkInDay.innerHTML = checkInOptions;
        // Set check out day number
        checkOutDay.innerHTML = "";
        dim = daysInMonth[checkOutMonth[1] - 1];
        for (var i = 1; i <= dim; i++) {
            checkOutOptions += "<option value='" + i + "'>" + i + "</option>";
        }
        checkOutDay.innerHTML = checkOutOptions;
    }
}

function tickCheckBox(a) {
        if (document.getElementById(a)) {
            document.getElementById(a).checked = true;
        }
        return true;
    }
    // For the text inputs setting up behaviours.
    (function(d) {
        var checkIn,
            checkOut,
            validaton = function(e) {
                var keyCodeMap = {
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        111: "/",
                        189: "-",
                        46: "delete",
                        37: "left",
                        38: "up",
                        39: "right",
                        40: "down",
                        8: "backspace"
                    },
                    keycode;
                if (window.event) {
                    keycode = window.event.keyCode;
                } else if (e) {
                    keycode = e.which;
                }
                if (keyCodeMap[keycode]) {
                    return true;
                }
                return false;
            },
            updateTextInput = function(e) {
                var elm = e.explicitOriginalTarget.parentNode,
                    splitDates;
                if (!elm.className.match(/changeMonth|selectMonth/)) {
                    if (elm.className === "calDateClick" && elm.href.match(/javascript/)) {
                        splitDates = elm.id.split("-");
                    } else {
                        if (e.currentTarget.value.match(/\//)) {
                            splitDates = e.currentTarget.value.split("/");
                        } else {
                            splitDates = e.currentTarget.value.split("-");
                        }
                    }
                    pickDate(splitDates[2], splitDates[1], splitDates[0], "b_" + e.currentTarget
                        .className.split("_")[1], "b_frm");
                }
            };
        if (checkIn = d.getElementById('b_checkin_input')) {
            checkIn.onblur = updateTextInput;
            checkIn.onkeydown = validaton;
            checkIn.onkeyup = validaton;
        }
        if (checkOut = d.getElementById('b_checkout_input')) {
            checkOut.onblur = updateTextInput;
            checkOut.onkeydown = validaton;
            checkOut.onkeyup = validaton;
        }
        // Set current date to ensure even cached pages a correct datetime
        var currentDate = my_date;
        var currentYear = 1900 + currentDate.getYear();
        var dailyMS = 24 * 60 * 60 * 1000;
        var arrivalDate = new Date(currentDate.getTime());
        var departureDate = new Date(currentDate.getTime() + 1 * dailyMS);
        var arrivalYearMonth = 1900 + arrivalDate.getYear() + "-" + 1 + arrivalDate.getMonth();
        var arrivalDay = arrivalDate.getDate();
        var departureYearMonth = 1900 + departureDate.getYear() + "-" + 1 +
            departureDate.getMonth();
        var departureDay = departureDate.getDate();
        var frm = document.getElementById('b_frm');
        if (frm && frm.length > 0 && frm != null) {
            if ((frm.checkin_monthday.selectedIndex == 0) && (frm.checkout_monthday.selectedIndex ==
                0)) {
                frm.checkin_monthday.options[arrivalDay - 1].selected = true;
                frm.checkout_monthday.options[departureDay - 1].selected = true;
            }
            // create date object from checkin values
            // set date to 12:00 to avoid problems with one
            // date being wintertime and the other summertime
            var my = frm['b_checkin_month'].value.split("-");
            var ci = new Date(my[0], my[1] - 1, frm['b_checkin_day'].value, 12, 0, 0, 0);
            // create date object from checkout values
            my = frm['b_checkout_month'].value.split("-");
            var co = new Date(my[0], my[1] - 1, frm['b_checkout_day'].value, 12, 0, 0,
                0);
            if (ci >= co) {
                co.setTime(ci.getTime() + 1000 * 60 * 60 * 24);
                frm['b_checkout_day'].value = co.getDate();
                var com = co.getMonth() + 1;
                frm['b_checkout_month'].value = co.getFullYear() + "-" + com;
            }
        } // if(  frm &&  frm.length > 0 && frm != null )
    })(document);



/* Minit: /wp-includes/js/wp-embed.min.js */
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);
