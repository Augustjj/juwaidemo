(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!cj[a]){var b=f("<"+a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),c.body.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write("<!doctype><html><body></body></html>");b=cl.createElement(a),cl.body.appendChild(b),d=f.css(b,"display"),c.body.removeChild(ck)}cj[a]=d}return cj[a]}function cu(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function ct(){cq=b}function cs(){setTimeout(ct,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bF.test(a)?d(a,e):b_(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bU,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bQ),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bD(a,b,c){var d=b==="width"?bx:by,e=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return e;f.each(d,function(){c||(e-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?e+=parseFloat(f.css(a,"margin"+this))||0:e-=parseFloat(f.css(a,"border"+this+"Width"))||0});return e}function bn(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bm(a){f.nodeName(a,"input")?bl(a):a.getElementsByTagName&&f.grep(a.getElementsByTagName("input"),bl)}function bl(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bk(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bj(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bi(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bh(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function X(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(S.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function W(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function O(a,b){return(a&&a!=="*"?a+".":"")+b.replace(A,"`").replace(B,"&")}function N(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(y,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function L(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function F(){return!0}function E(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function H(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(H,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=d.userAgent,x,y,z,A=Object.prototype.toString,B=Object.prototype.hasOwnProperty,C=Array.prototype.push,D=Array.prototype.slice,E=String.prototype.trim,F=Array.prototype.indexOf,G={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return D.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?C.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:C,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;y.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!y){y=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",z),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&H()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):G[A.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;if(a.constructor&&!B.call(a,"constructor")&&!B.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a);return c===b||B.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b,c,d){a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:E?function(a){return a==null?"":E.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?C.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(F)return F.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=D.call(arguments,2),g=function(){return a.apply(c,f.concat(D.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){G["[object "+b+"]"]=b.toLowerCase()}),x=e.uaMatch(w),x.browser&&(e.browser[x.browser]=!0,e.browser.version=x.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?z=function(){c.removeEventListener("DOMContentLoaded",z,!1),e.ready()}:c.attachEvent&&(z=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",z),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};f=c.createElement("select"),g=f.appendChild(c.createElement("option")),h=a.getElementsByTagName("input")[0],j={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},h.checked=!0,j.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,j.optDisabled=!g.disabled;try{delete a.test}catch(s){j.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function b(){j.noCloneEvent=!1,a.detachEvent("onclick",b)}),a.cloneNode(!0).fireEvent("onclick")),h=c.createElement("input"),h.value="t",h.setAttribute("type","radio"),j.radioValue=h.value==="t",h.setAttribute("checked","checked"),a.appendChild(h),k=c.createDocumentFragment(),k.appendChild(a.firstChild),j.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",l=c.createElement("body"),m={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(q in m)l.style[q]=m[q];l.appendChild(a),b.insertBefore(l,b.firstChild),j.appendChecked=h.checked,j.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,j.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",j.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",n=a.getElementsByTagName("td"),r=n[0].offsetHeight===0,n[0].style.display="",n[1].style.display="none",j.reliableHiddenOffsets=r&&n[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(i=c.createElement("div"),i.style.width="0",i.style.marginRight="0",a.appendChild(i),j.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(i,null)||{marginRight:0}).marginRight,10)||0)===0),l.innerHTML="",b.removeChild(l);if(a.attachEvent)for(q in{submit:1,change:1,focusin:1})p="on"+q,r=p in a,r||(a.setAttribute(p,"return;"),r=typeof a[p]=="function"),j[q+"Bubbles"]=r;return j}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g=f.expando,h=typeof c=="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;if((!l||e&&l&&!k[l][g])&&h&&d===b)return;l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[f.camelCase(c)]:i}},removeData:function(b,c,d){if(!!f.acceptData(b)){var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;if(!h[i])return;if(c){var j=d?h[i][e]:h[i];if(j){delete j[c];if(!l(j))return}}if(d){delete h[i][e];if(!l(h[i]))return}var k=h[i][e];f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:/,v,w;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.addClass(a.call(this,b,c.attr("class")||""))});if(a&&typeof a=="string"){var b=(a||"").split(o);for(var c=0,d=this.length;c<d;c++){var e=this[c];if(e.nodeType===1)if(!e.className)e.className=a;else{var g=" "+e.className+" ",h=e.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);e.className=f.trim(h)}}}return this},removeClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a=="string"||a===b){var c=(a||"").split(o);for(var d=0,e=this.length;d<e;d++){var g=this[d];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(n," ");for(var i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){var d=f(this);d.toggleClass(a.call(this,c,d.attr("class"),b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;return(e.value||"").replace(p,"")}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);c=j&&f.attrFix[c]||c,i=f.attrHooks[c],i||(!t.test(c)||typeof d!="boolean"&&d!==b&&d.toLowerCase()!==c.toLowerCase()?v&&(f.nodeName(a,"form")||u.test(c))&&(i=v):i=w);if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j)return i.get(a,c);h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},tabIndex:{get:function(a){var c=a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);c=i&&f.propFix[c]||c,h=f.propHooks[c];return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]},propHooks:{}}),w={get:function(a,c){return a[f.propFix[c]||c]?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=b),a.setAttribute(c,c.toLowerCase()));return c}},f.attrHooks.value={get:function(a,b){if(v&&f.nodeName(a,"button"))return v.get(a,b);return a.value},set:function(a,b,c){if(v&&f.nodeName(a,"button"))return v.set(a,b,c);a.value=b}},f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);if(d){d.nodeValue=b;return b}}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var x=Object.prototype.hasOwnProperty,y=/\.(.*)$/,z=/^(?:textarea|input|select)$/i,A=/\./g,B=/ /g,C=/[^\w\s.|`]/g,D=function(a){return a.replace(C,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=E;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=E);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem
)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,O(a.origType,a.selector),f.extend({},a,{handler:N,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,O(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?F:E):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=F;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=F;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=F,this.stopPropagation()},isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E};var G=function(a){var b=a.relatedTarget;a.type=a.data;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&f.event.handle.apply(this,arguments)}catch(d){}},H=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?H:G,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?H:G)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&f(b).closest("form").length&&L("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&L("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var I,J=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},K=function(c){var d=c.target,e,g;if(!!z.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=J(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:K,beforedeactivate:K,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&K.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&K.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",J(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in I)f.event.add(this,c+".specialChange",I[c]);return z.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return z.test(this.nodeName)}},I=f.event.special.change.filters,I.focus=I.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var M={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||E,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=y.exec(h),k="",j&&(k=j[0],h=h.replace(y,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,M[h]?(a.push(M[h]+k),h=h+k):h=(M[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+O(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+O(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var P=/Until$/,Q=/^(?:parents|prevUntil|prevAll)/,R=/,/,S=/^.[^:#\[\.,]*$/,T=Array.prototype.slice,U=f.expr.match.POS,V={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(X(this,a,!1),"not",a)},filter:function(a){return this.pushStack(X(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=U.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=U.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a=="string")return f.inArray(this[0],a?f(a):this.parent().children());return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(W(c[0])||W(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=T.call(arguments);P.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!V[a]?f.unique(e):e,(this.length>1||R.test(d))&&Q.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_=/<([\w:]+)/,ba=/<tbody/i,bb=/<|&#?\w+;/,bc=/<(?:script|object|embed|option|style)/i,bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Y,""):null;if(typeof a=="string"&&!bc.test(a)&&(f.support.leadingWhitespace||!Z.test(a))&&!bg[(_.exec(a)||["",""])[1].toLowerCase()]){a=a.replace($,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bh(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bn)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bc.test(a[0])&&(f.support.checkClone||!bd.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bj(a,d),e=bk(a),g=bk(d);for(h=0;e[h];++h)bj(e[h],g[h])}if(b){bi(a,d);if(c){e=bk(a),g=bk(d);for(h=0;e[h];++h)bi(e[h],g[h])}}return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||
b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bb.test(k))k=b.createTextNode(k);else{k=k.replace($,"<$1></$2>");var l=(_.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=ba.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&Z.test(k)&&o.insertBefore(b.createTextNode(Z.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof(r=k.length)=="number")for(i=0;i<r;i++)bm(k[i]);else bm(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bo=/alpha\([^)]*\)/i,bp=/opacity=([^)]*)/,bq=/-([a-z])/ig,br=/([A-Z]|^ms)/g,bs=/^-?\d+(?:px)?$/i,bt=/^-?\d/,bu=/^[+\-]=/,bv=/[^+\-\.\de]+/g,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB,bC=function(a,b){return b.toUpperCase()};f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,widows:!0,orphans:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d;if(h==="number"&&isNaN(d)||d==null)return;h==="string"&&bu.test(d)&&(d=+d.replace(bv,"")+parseFloat(f.css(a,c))),h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bq,bC)}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){a.offsetWidth!==0?e=bD(a,b,d):f.swap(a,bw,function(){e=bD(a,b,d)});if(e<=0){e=bz(a,b,b),e==="0px"&&bB&&(e=bB(a,b,b));if(e!=null)return e===""||e==="auto"?"0px":e}if(e<0||e==null){e=a.style[b];return e===""||e==="auto"?"0px":e}return typeof e=="string"?e:e+"px"}},set:function(a,b){if(!bs.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bp.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.filter=bo.test(g)?g.replace(bo,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,c){var d,e,g;c=c.replace(br,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bs.test(d)&&bt.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bE=/%20/g,bF=/\[\]$/,bG=/\r?\n/g,bH=/#.*$/,bI=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bJ=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bK=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bL=/^(?:GET|HEAD)$/,bM=/^\/\//,bN=/\?/,bO=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bP=/^(?:select|textarea)/i,bQ=/\s+/,bR=/([?&])_=[^&]*/,bS=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bT=f.fn.load,bU={},bV={},bW,bX;try{bW=e.href}catch(bY){bW=c.createElement("a"),bW.href="",bW=bW.href}bX=bS.exec(bW.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bT)return bT.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bO,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bP.test(this.nodeName)||bJ.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bG,"\r\n")}}):{name:b.name,value:c.replace(bG,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));for(var c in{context:1,url:1})c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a},ajaxSettings:{url:bW,isLocal:bK.test(bX[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML}},ajaxPrefilter:bZ(bU),ajaxTransport:bZ(bV),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;var o,r,u,w=l?ca(d,v,l):b,x,y;if(a>=200&&a<300||a===304){if(d.ifModified){if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;if(y=v.getResponseHeader("Etag"))f.etag[k]=y}if(a===304)c="notmodified",o=!0;else try{r=cb(d,w),c="success",o=!0}catch(z){c="parsererror",u=z}}else{u=c;if(!c||a)c="error",a<0&&(a=0)}v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bI.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bH,"").replace(bM,bX[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bQ),d.crossDomain==null&&(r=bS.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bX[1]&&r[2]==bX[2]&&(r[3]||(r[1]==="http:"?80:443))==(bX[3]||(bX[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bU,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bL.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bN.test(d.url)?"&":"?")+d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bR,"$1_="+x);d.url=y+(y===d.url?(bN.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bV,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){status<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bE,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq,cr=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cv(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cm.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=cn.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this),f.isFunction(d.old)&&d.old.call(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function h(a){return d.step(a)}var d=this,e=f.fx,g;this.startTime=cq||cs(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!co&&(cr?(co=1,g=function(){co&&(cr(g),e.tick())},cr(g)):co=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cq||cs(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){return this[0]?parseFloat(f.css(this[0],d,"padding")):null},f.fn["outer"+c]=function(a){return this[0]?parseFloat(f.css(this[0],d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=f.css(e,d),i=parseFloat(h);return f.isNaN(i)?h:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);
// Juwai global namespace
window.JW = {
    google : {
        map_query_param : '' // toggle value: client=gme-juwailimited&
    }
};

var STATIC_PATH = typeof STATIC_PATH === "undefined" ? "http://www.juwaistatic.com/" : STATIC_PATH;

var tb_pathToImage=STATIC_PATH + "images/loadingAnimation.gif";
(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function(a){var b=/\+/g;function c(h){return h};function d(h){return decodeURIComponent(h.replace(b,' '))};function e(h){if(h.indexOf('"')===0){h=h.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\')};try{return f.json?JSON.parse(h):h}catch(er){}};var f=a.cookie=function(h,i,j){h=a.trim(h);if(i!==undefined){j=a.extend({},f.defaults,j);if(typeof j.expires==='number'){var p=j.expires,q=j.expires=new Date();q.setDate(q.getDate()+p)};i=f.json?JSON.stringify(i):String(i);return(document.cookie=[f.raw?key:encodeURIComponent(h),'=',f.raw?value:encodeURIComponent(i),j.expires?'; expires='+j.expires.toUTCString():'',j.path?'; path='+j.path:'',j.domain?'; domain='+j.domain:'',j.secure?'; secure':''].join(''))};var k=f.raw?raw:d;var m=document.cookie.split('; ');var n=h?undefined:{};for(var o=0,l=m.length;o<l;o++){var p=m[o].split('=');var q=k(p.shift());var r=k(p.join('='));if(h&&h===q){n=e(r);break};if(!h){n[q]=e(r)}};return n};f.defaults={};a.removeCookie=function(h,i){if(a.cookie(h)!==undefined){a.cookie(h,'',a.extend({},i,{expires:-1}));return true};return false}}));
/***pre load img****/
(function(a){a.preload=function(){var c=[],b=arguments.length;for(;b--;){c.push(a("<img />").attr("src",arguments[b]));}};})(jQuery);
/******************/
/*******judging the browser @andy********/
(function($){
	$.extend({
		judging_browser:function(){
			var browser_obj = $.browser;
			if(browser_obj.mozilla){
				return 'ff';
			}else if(browser_obj.webkit){
				return 'webkit';
			}else if(browser_obj.msie){
				return 'ie'+browser_obj.version;
			}else{
				return 'else';
			}
		}
	})
})(jQuery);
/*******juding the browser end********/
/*******j_anchor @author andy*******/
(function($){
	var options = {
		top:0,
		speed:500
	}
	$.extend({
		anchor:function(name_class_name,tab_class_name){
			if(typeof(tab_class_name)==='string'){
				$('.'+tab_class_name).click(function(event){
					var hash = $(this).get(0).href;
					$.anchor_scroll(hash,name_class_name);
				})
			}
			if(typeof(hash)==='undefined') 	var hash = window.location.hash;
			if(hash!=''){
				$.anchor_scroll(hash,name_class_name);
			}
		},
		anchor_scroll:function(hash,name_class_name){
			var hast_arr = hash.split('#');
			if(hast_arr.length>1){
				hash = hast_arr[1];
			}else{
				hash = hast_arr[0];
			}
			var obj = $('.'+name_class_name).filter('[name="'+hash+'"]').eq(0);
			if(obj.length==0){
				var obj = $('.'+name_class_name).filter('[name_anchor="'+hash+'"]').eq(0);
			}
			if(obj.length>0){
				var boer = $.judging_browser();
				if(boer != 'ie7.0' && boer != 'ie6.0'){
					obj.removeAttr('name');
				}
				obj.attr('name_anchor',hash);
				var options_conf = $.parseJSON(obj.attr('options'));
				$.extend(options,options_conf);
				var s_t = obj.offset().top - options.top;
				$('html,body').animate({scrollTop:s_t+'px'}, options.speed);
			}
		}
	});
})(jQuery);
/*******j_anchor  end*******/
/*******j_popover @andy*******/
(function($){
	var options = {
		delay:5000,
		outSpeed:300,
		msg:''
	}
	$.extend({
		popover_time_out:null,
		popover:function(options_conf){
			if(typeof(options_conf)=='string'){
				var msg = options_conf;
			}else if(typeof(options_conf)=='object'){
				$.extend(options,options_conf);
				var msg = options.msg;
			}else{
				$.error('popover need input');
				return null;
			}
			if($('#j_popover').length < 1){
				var _tp = '<div id="j_popover" style="max-width:980px;background-color:#484848;overflow:hidden;border-radius:4px;color:#FFF;text-align:center;line-height:180%;font-size:14px;position:fixed;top: 50%;left:50%;z-index:103;opacity:0.85;padding:10px 20px;">'+msg+'</div>';
				$('body').append(_tp);
				var w = $('#j_popover').width();
				var h = $('#j_popover').height();
				$('#j_popover').css({
					opacity:0.85,
					'margin-left':'-'+parseInt(w/2)+'px',
					'margin-top':'-'+parseInt(h/2)+'px'
				});
				if(this.popover_time_out!==null){
					clearTimeout(this.popover_time_out);
				}
				this.popover_time_out = setTimeout(function(){
					$("#j_popover").fadeOut(options.outSpeed);
				},options.delay);
			}else{
				if(this.popover_time_out!==null){
					clearTimeout(this.popover_time_out);
				}
				var _tp = $('#j_popover');
				_tp.html(msg);
				var w = _tp.width();
				var h = _tp.height();
				_tp.css({
					'margin-left':'-'+parseInt(w/2)+'px',
					'margin-top':'-'+parseInt(h/2)+'px'
				}).stop().css({opacity:0.85,display:'block'});
				this.popover_time_out = setTimeout(function(){
					_tp.fadeOut(options.outSpeed);
				},options.delay);
			}
		}
	})
})(jQuery);
/*******j_popover end*********/
/***********juwaimap*****@andy*****/
(function($){
	var juwaimap = function(li_val){
		return this.each(function(e){
			if($(this).attr('juwaimaped')!=='true'){
				$(this).attr('juwaimaped','true');
				$(this).width($(this).find('img').attr('width'));
				$(this).height($(this).find('img').attr('height'));
				$(this).css('background-image','url(' + STATIC_PATH + 'images/map/'+$('#CODE').val()+'.png)').css('background-repeat','no-repeat');
				$(this).find('.map_mouse_div,.map_click_div').css('background-image','url(' + STATIC_PATH + 'images/map/'+$('#CODE').val()+'.png)').css('background-repeat','no-repeat');
				$(this).find('area').hover(
					function(e){
						$('.map_mouse_div').css({'width':$(this).attr('divwidth')+'px','height':$(this).attr('divheight')+'px','left':$(this).attr('divleft')+'px','top':$(this).attr('divtop')+'px','background-position':$(this).attr('bgleft')+'px '+$(this).attr('bgtop')+'px'});
						$('.map_mouseover_title').html($(this).attr('title'));
						$('.map_mouseover_title').show();
					},
					function(e){
						$('.map_mouseover_title').hide();
						$('.map_mouse_div').css({'width':'0px','height':'0px'});
					}
				);
				$('.header_map area').click(function(e){
					$('.map_click_div').css({'width':$(this).attr('divwidth')+'px','height':$(this).attr('divheight')+'px','left':$(this).attr('divleft')+'px','top':$(this).attr('divtop')+'px','background-position':$(this).attr('bgleft')+'px '+$(this).attr('bgtop')+'px'});
				});
			}
			if(typeof(li_val)!='undefined'){
				var area_obj = $(this).find('area[regionid='+li_val+']');
				$('.map_click_div').css({'width':area_obj.attr('divwidth')+'px','height':area_obj.attr('divheight')+'px','left':area_obj.attr('divleft')+'px','top':area_obj.attr('divtop')+'px','background-position':area_obj.attr('bgleft')+'px '+area_obj.attr('bgtop')+'px'});
			}
		});
	}
	$.fn.extend({
		juwaimap:juwaimap
	});
}(jQuery));
/***********juwaimap end******/
String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}
/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/
$(document).ready(function(){
tb_init('a.thickbox, area.thickbox, input.thickbox');
imgLoader=new Image();
imgLoader.src=tb_pathToImage;
$.anchor('j_anchor','j_anchor_tab');
});
function tb_init(domChunk){
$(domChunk).click(function(){
var t=this.title||this.name||null;
var a=$(this).attr('rel')||$(this).attr('alt');
var g=$(this).attr('rel')||false;
var b=$(this).attr('callback')||'';
if(b==''){
tb_show(t,a,g);
}else{
tb_show(t,a,g,b);
}
this.blur();
return false;
});
}
function tb_show(caption,url,imageGroup,loaded_call_function){
if(!(url instanceof Array))
url = url.replace(/[\s]/g,"");
if(typeof(document.body.style.maxHeight)==="undefined"){
$("body","html").css({height:"100%",width:"100%"});
$("html").css("overflow","hidden");
if(document.getElementById("TB_HideSelect")===null){
$("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
}
}else{
if(document.getElementById("TB_overlay")===null){
$("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
}
}
if(tb_detectMacXFF()){
$("#TB_overlay").addClass("TB_overlayMacFFBGHack");
}else{
$("#TB_overlay").addClass("TB_overlayBG");
}
if(caption===null){caption="";}
$("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");
$('#TB_load').show();
var baseURL;
if(!(url instanceof Array)){
if(url.indexOf("?")!==-1){
baseURL=url.substr(0,url.indexOf("?"));
}else{
baseURL=url;
}
}else{
	baseURL=url[0][1];
}
var urlString=/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
var urlType=baseURL.toLowerCase().match(urlString);
if(urlType=='.jpg' || urlType=='.jpeg' || urlType=='.png' || urlType=='.gif' || urlType=='.bmp' || url instanceof Array){
if(url instanceof Array){
	url_html = "";
	TB_WIDTH = 805;
	TB_HEIGHT = document.documentElement.clientHeight < 760 ? (document.documentElement.clientHeight-40) : 720;
	TB_SHOW_HEIGHT = TB_HEIGHT - 120;
	tb_position();
	TB_window_top = '<div class="tb_window_top"><a href="javascript:void(0)" style="display:none;"><span class="tb_download"></span><span>下载</span></a><a href="'+$("#printbtn a").attr("href")+'" target="_blank" rel="nofollow"><span class="tb_print"></span><span>打印</span></a><a href="javascript:void(0)" class="tb_new_cl" onclick="tb_remove();"><span class="tb_new_close"></span><span>关闭</span></a><div class="clear"></div></div>';
	zoom = '<div class="zoom"><a href="javascript:zoomAction(1);void(0);" class="zoom_small"></a><a href="javascript:zoomAction(-1);void(0);" class="zoom_big"></a><input type="hidden" name="zoom_number" id="zoom_number" value="0" /><div class="clear"></div></div>';
	original_area = TB_window_top+zoom+'<div class="original_area" style="height: '+TB_SHOW_HEIGHT+'px"></div>';
	url_html += '<div class="list_img_show"><ul>';
	for(var i in url){
		if(i == loaded_call_function) showOriginalImg(url[i][1]);
		if(typeof(url[i][0])=='undefined'){
			var smart_img_content = '<div class="img_error" style="font-size:14px;height:100%;line-height:58px;width:100%;">暂无图片</div>';
		}else{
			var smart_img_content = '<img src="'+url[i][0]+'" />';
		}
		url_html += '<li><a href="javascript:void(0);" '+(i == loaded_call_function ? 'class="thumb_selected"':'')+' onclick="showOriginalImg(\''+url[i][1]+'\'); $(\'.list_img_show li a\').removeClass(\'thumb_selected\'); $(this).addClass(\'thumb_selected\')">'+smart_img_content+'</a></li>';
	}
	url_html += '</ul><div class="clear"></div></div>';
	url_html += '<div class="btn_box"><a href="#" id="tab_prv" onclick="frontScroll();"'+(url.length>5?'':' class="last"')+'>上一张</a><a href="#" id="tab_next" class="last" onclick="backScroll();">下一张</a></div>';
	$("#TB_load").remove();
	$("#TB_ImageOff").click(tb_remove);
	$("#TB_window").append(original_area+'<div class="list_img_tab">'+url_html+'</div>').css("border-color","#333");
	$("#TB_window").css({display:"block"});
}else{
TB_PrevCaption="";
TB_PrevURL="";
TB_PrevHTML="";
TB_NextCaption="";
TB_NextURL="";
TB_NextHTML="";
TB_imageCount="";
TB_FoundURL=false;
if(imageGroup){
var TB_TempArray=$("."+imageGroup).get();
for(TB_Counter=0;((TB_Counter<TB_TempArray.length)&&(TB_NextHTML===""));TB_Counter++){
var urlTypeTemp=TB_TempArray[TB_Counter].getAttribute('rel').toLowerCase().match(urlString);
if(!(TB_TempArray[TB_Counter].getAttribute('rel').replace(/[\s]/g,"")==url)){
if(TB_FoundURL){
TB_NextCaption=TB_TempArray[TB_Counter].title;
TB_NextURL=TB_TempArray[TB_Counter].getAttribute('rel').replace(/[\s]/g,"");
TB_NextHTML="<span id='TB_next'><a href='#'>下一张</a></span>";
}else{
TB_PrevCaption=TB_TempArray[TB_Counter].title;
TB_PrevURL=TB_TempArray[TB_Counter].getAttribute('rel').replace(/[\s]/g,"");
TB_PrevHTML="<span id='TB_prev'><a href='#'>上一张</a></span>";
}
}else{
TB_FoundURL=true;
TB_imageCount="<span>一共有"+(TB_TempArray.length)+"张图片，这是第"+(TB_Counter+1)+"张</span>";
}
}
}
imgPreloader=new Image();
imgPreloader.src=url;
imgPreloader.onload=function(){
imgPreloader.onload=null;
var pagesize=tb_getPageSize();
var x=pagesize[0]-150;
var y=pagesize[1]-150;
var imageWidth=imgPreloader.width;
var imageHeight=imgPreloader.height;
if(imageWidth>x){
imageHeight=imageHeight*(x/imageWidth);
imageWidth=x;
if(imageHeight>y){
imageWidth=imageWidth*(y/imageHeight);
imageHeight=y;
}
}else if(imageHeight>y){
imageWidth=imageWidth*(y/imageHeight);
imageHeight=y;
if(imageWidth>x){
imageHeight=imageHeight*(x/imageWidth);
imageWidth=x;
}
}
TB_WIDTH=imageWidth+30;
TB_HEIGHT=imageHeight+60;
$("#TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>"+"<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>"+TB_imageCount+TB_PrevHTML+TB_NextHTML+"</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='Close'><img src='" + STATIC_PATH + "images/btn_close.jpg'/></a></div>");
$("#TB_closeWindowButton").click(tb_remove);
if(!(TB_PrevHTML==="")){
function goPrev(){
if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
$("#TB_window").remove();
$("body").append("<div id='TB_window'></div>");
tb_show(TB_PrevCaption,TB_PrevURL,imageGroup);
return false;
}
$("#TB_prev").click(goPrev);
}
if(!(TB_NextHTML==="")){
function goNext(){
$("#TB_window").remove();
$("body").append("<div id='TB_window'></div>");
tb_show(TB_NextCaption,TB_NextURL,imageGroup);
return false;
}
$("#TB_next").click(goNext);
}
document.onkeydown=function(e){
if(e==null){
keycode=event.keyCode;
}else{
keycode=e.which;
}
if(keycode==27){
tb_remove();
}else if(keycode==190){
if(!(TB_NextHTML=="")){
document.onkeydown="";
goNext();
}
}else if(keycode==188){
if(!(TB_PrevHTML=="")){
document.onkeydown="";
goPrev();
}
}
};
tb_position();
$("#TB_load").remove();
$("#TB_ImageOff").click(tb_remove);
$("#TB_window").css({display:"block"});
};
imgPreloader.src=url;
}
}else{
var queryString=url.replace(/^[^\?]+\??/,'');
var params=tb_parseQuery(queryString);
if(params['auto_close']!=='false'){
$("#TB_overlay").click(tb_remove);
}
TB_WIDTH=(params['width']*1)||630;
TB_HEIGHT=(params['height']*1)+40||440;
ajaxContentW=TB_WIDTH;
ajaxContentH=TB_HEIGHT+60;
if(url.indexOf('TB_iframe')!=-1){
urlNoQuery=url.split('TB_');
$("#TB_iframeContent").remove();
if(params['modal']!="true"){
$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='Close'><img src='" + STATIC_PATH + "images/btn_close.jpg'/></a></div></div><iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW+29)+"px;height:"+(ajaxContentH+17)+"px;' > </iframe>");
}else{
$("#TB_overlay").unbind();
$("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW+29)+"px;height:"+(ajaxContentH+17)+"px;'> </iframe>");
}
}else{
if($("#TB_window").css("display")!="block"){
if(params['modal']!="true"){
$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><img src='" + STATIC_PATH + "images/btn_close.jpg'/></a></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px';></div>");
}else{
//$("#TB_overlay").unbind();
$("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;'></div>");
}
}else{
$("#TB_ajaxContent")[0].style.width=ajaxContentW+"px";
$("#TB_ajaxContent")[0].style.height=ajaxContentH+"px";
$("#TB_ajaxContent")[0].scrollTop=0;
$("#TB_ajaxWindowTitle").html(caption);
}
}
$("#TB_closeWindowButton").click(tb_remove);
if(url.indexOf('TB_inline')!=-1){
if($('#'+params['inlineId']).find('.thick_caption').length!=0){
$('#'+params['inlineId']).find('.thick_caption').css('display','none');
$('#TB_ajaxWindowTitle').html($('#'+params['inlineId']).find('.thick_caption').html());
}
$("#TB_ajaxContent").append($('#'+params['inlineId']).children());
$("#TB_window").unload(function(){
$("#TB_ajaxContent").find('.thick_caption').css('display','block');
$('#'+params['inlineId']).append($("#TB_ajaxContent").children());
});
tb_position();
$("#TB_load").remove();
$("#TB_window").css({display:"block"});
if(typeof(loaded_call_function)!='undefined'){
eval(loaded_call_function+'()');
}
}else if(url.indexOf('TB_iframe')!=-1){
tb_position();
if($.browser.safari){
$("#TB_load").remove();
$("#TB_window").css({display:"block"});
}
}else{
$("#TB_ajaxContent").load(url+="&random="+(new Date().getTime()),function(){
tb_position();
$("#TB_load").remove();
tb_init("#TB_ajaxContent a.thickbox");
$("#TB_window").css({display:"block"});
if(typeof(loaded_call_function)!='undefined'){

eval(loaded_call_function+'()');
}
});
}
}
if(!params['modal']){
document.onkeyup=function(e){
if(e==null){
keycode=event.keyCode;
}else{
keycode=e.which;
}
if(keycode==27){
tb_remove();
}
};
}
}
function tb_showIframe(){
$("#TB_load").remove();
$("#TB_window").css({display:"block"});
}
function tb_remove(){
$("#TB_imageOff").unbind("click");
$("#TB_closeWindowButton").unbind("click");
$("#TB_window").fadeOut("fast",function(){$('#TB_window,#TB_overlay,#TB_HideSelect').trigger("unload").unbind().remove();});
$("#TB_load").remove();
if(typeof document.body.style.maxHeight=="undefined"){
$("body","html").css({height:"auto",width:"auto"});
$("html").css("overflow","");
}
document.onkeydown="";
document.onkeyup="";
return false;
}
function tb_success_close(){
	setTimeout(tb_remove,2000);
}
function tb_position(){
$("#TB_window").css({marginLeft:'-'+parseInt((TB_WIDTH/2),10)+'px',width:TB_WIDTH+'px'});
if(!(jQuery.browser.msie&&jQuery.browser.version<7)){
$("#TB_window").css({marginTop:'-'+parseInt((TB_HEIGHT/2),10)+'px'});
}
}
function tb_parseQuery(query){
var Params={};
if(!query){return Params;}
var Pairs=query.split(/[;&]/);
for(var i=0;i<Pairs.length;i++){
var KeyVal=Pairs[i].split('=');
if(!KeyVal||KeyVal.length!=2){continue;}
var key=unescape(KeyVal[0]);
var val=unescape(KeyVal[1]);
val=val.replace(/\+/g,' ');
Params[key]=val;
}
return Params;
}
function tb_getPageSize(){
var de=document.documentElement;
var w=window.innerWidth||self.innerWidth||(de&&de.clientWidth)||document.body.clientWidth;
var h=window.innerHeight||self.innerHeight||(de&&de.clientHeight)||document.body.clientHeight;
arrayPageSize=[w,h];
return arrayPageSize;
}
function tb_detectMacXFF(){
var userAgent=navigator.userAgent.toLowerCase();
if(userAgent.indexOf('mac')!=-1&&userAgent.indexOf('firefox')!=-1){
return true;
}
}
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode}catch(e){p=this}}if(p==this){return false}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.mouseover(handleHover).mouseout(handleHover)}})(jQuery);(function(b){function k(a,e,c){var f=this,j=b(this),i,l=a.length-1;b.each(c,function(d,g){b.isFunction(g)&&j.bind(d,g)});b.extend(this,{click:function(d,g){var n=a.eq(d);if(typeof d=="string"&&d.replace("#","")){n=a.filter("[href*="+d.replace("#","")+"]");d=Math.max(n.index(),0)}g=g||b.Event();g.type="beforeSwitch";j.trigger(g,[d]);if(!g.isDefaultPrevented()){h[c.effect].call(f,d,function(){g.type="onSwitch";j.trigger(g,[d])});g.type="onStart";j.trigger(g,[d]);if(!g.isDefaultPrevented()){i=d;a.removeClass(c.currentCls);n.addClass(c.currentCls);if(c.juwaitype==='percentage'){a.parent().find('label').html((d+1)+'/'+a.length)}if(c.funCallBack!==null){c.funCallBack.call(this,d)}return f}}},getCfg:function(){return c},getTriggers:function(){return a},getPanels:function(){return e},getVisiblePanel:function(d){return f.getPanels().slice(d*c.steps,(d+1)*c.steps)},getIndex:function(){return i},move:function(d){if(e.parent().is(":animated")||e.length<=c.visible)return f;return typeof d=="number"?d<0?c.circular?f.click(l):f:d>l?c.circular?f.click(0):f:f.click(d):f.click()},next:function(){return f.move(i+1)},prev:function(){return f.move(i-1)},bind:function(d,g){j.bind(d,g);return f},unbind:function(d){j.unbind(d);return f},beforeSwitch:function(d){return this.bind("beforeSwitch",d)},onSwitch:function(d){return this.bind("onSwitch",d)},resetPosition:function(){}});var m;a.each(function(d){c.triggerType==="mouse"?b(this).bind({mouseenter:function(g){if(d!==i)m=setTimeout(function(){f.click(d,g)},c.delay*1E3)},mouseleave:function(){clearTimeout(m)}}):b(this).bind("click",function(g){d!==i&&f.click(d,g);return false})});if(location.hash)f.click(location.hash);else c.initIndex>=0&&f.click(c.initIndex);e.find("a[href^=#]").click(function(d){f.click(b(this).attr("href"),d)});c.panelSwitch&&e.css("cursor","pointer").click(function(){f.next();return false})}b.switchable=b.switchable||{};b.switchable={cfg:{triggers:"a",juwaitype:'page',currentCls:"current",initIndex:0,triggerType:"mouse",delay:0.1,effect:"default",steps:1,visible:1,speed:0.7,easing:"swing",circular:false,vertical:false,panelSwitch:false,beforeSwitch:null,onSwitch:null,funCallBack:null,api:false,showtext:true,showalt:false},addEffect:function(a,e){h[a]=e}};var h={"default":function(a,e){this.getPanels().hide();this.getVisiblePanel(a).show();e.call()},ajax:function(a,e){this.getPanels().first().load(this.getTriggers().eq(a).attr("href"),e)}};b.fn.switchable=function(a,e){var c=this.eq(typeof e=="number"?e:0).data("switchable");if(c)return c;if(b.isFunction(e))e={beforeSwitch:e};var f=b.extend({},b.switchable.cfg),j=this.length;e=b.extend(f,e);this.each(function(i){var l=b(this),m=a.jquery?a:l.children(a);m.length||(m=j==1?b(a):l.parent().find(a));i=l.find(e.triggers);if(!i.length){var d=Math.ceil(m.length/e.steps),g=[];if(e.juwaitype=='percentage'){var a_display='style="display:none"';l.append('<label>1/'+d+'</label>')}else{var a_display=''}for(i=1;i<=d;i++){var temp='';if(e.showtext==false){temp='<img src="'+$(a).eq(i-1).attr("thumb")+'"/><span class="redline"></span>'}else if(e.showalt==true){temp=$(a).eq(i-1).attr("showalt")}else{temp=i}g.push('<a href="javascript:void(0)" '+a_display+' target="_self">'+ temp +"</a>")}i=l.append(g.join("")).children("a")}c=new k(i,m,e);l.data("switchable",c)});return e.api?c:this}})(jQuery);$.switchable.addEffect("fade",function(b,k){var h=this.getCfg(),a=this.getPanels(),e=this.getVisiblePanel(b),mm=(e.index()==0)?(a.length-1):(e.index()-1);a.eq(mm).fadeOut(h.speed*1E3,function(){e.fadeIn(h.speed*1E3,k)})});$.switchable.addEffect("scroll",function(b,k){var h=this,a=h.getCfg(),e=h.getVisiblePanel(b),c=h.getPanels().parent(),f=h.getIndex(),j=h.getTriggers().length-1,i=f===0&&b===j||f===j&&b===0,l=f===0&&b===j?true:false;e=a.vertical?{top:-e.position().top}:{left:-e.position().left};c.is(":animated")&&c.stop(true);c.animate(e,a.speed*1E3,a.easing,function(){k.call();i&&h.resetPosition(l)})});(function(b){var k=b.switchable;k.plugin=k.plugin||{};k.plugin.autoplay={cfg:{autoplay:true,interval:3,autopause:true,api:false}};b.fn.autoplay=function(h){if(typeof h=="number")h={interval:h};var a=b.extend({},k.plugin.autoplay.cfg),e;b.extend(a,h);this.each(function(){var c=b(this).switchable();if(c)e=c;var f,j,i=true;c.play=function(){if(!f){i=false;f=setInterval(function(){c.next()},a.interval*1E3);c.next()}};c.pause=function(){f=clearInterval(f)};c.stop=function(){c.pause();i=true};a.autopause&&c.getPanels().hover(function(){c.pause();clearTimeout(j)},function(){i||(j=setTimeout(c.play,a.interval*1E3))});a.autoplay&&setTimeout(c.play,a.interval*1E3)});return a.api?e:this}})(jQuery);(function(b){b.fn.carousel=function(){this.each(function(){var k=b(this).switchable(),h=k.getCfg(),a=k.getPanels(),e=a.parent(),c=k.getTriggers().length-1,f=a.slice(0,h.steps),j=a.slice(c*h.steps),i=h.vertical?j.position().top:j.position().left,l=h.vertical?"top":"left",m=a.length>h.visible,d=0;a.css("position","relative").each(function(){d+=h.vertical?b(this).outerHeight(true):b(this).outerWidth(true)});m&&j.length<h.visible&&e.append(a.slice(0,h.visible).clone().addClass("clone"));b.extend(k,{move:function(g){if(e.is(":animated")||!m)return this;$(e).find('.clone').eq(0).css('visibility','visible');if(g<0){this.adjustPosition(true);return this.click(c)}else if(g>c){$(e).find('.clone').eq(0).css('visibility','hidden');this.adjustPosition(false);return this.click(0)}else return this.click(g)},adjustPosition:function(g){b.each(g?j:f,function(){b(this).css(l,g?-d:d)})},resetPosition:function(g){b.each(g?j:f,function(){b(this).css(l,0)});e.css(l,g?-i:0)}})});return this}})(jQuery);(function(b){function k(a){switch(a.type){case"mousemove":return b.extend(a.data,{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY});case"DOMMouseScroll":b.extend(a,a.data);a.delta=-a.detail/3;break;case"mousewheel":a.delta=a.wheelDelta/120}a.type="wheel";return b.event.handle.call(this,a,a.delta)}b.fn.wheel=function(a){return this[a?"bind":"trigger"]("wheel",a)};b.event.special.wheel={setup:function(){b.event.add(this,h,k,{})},teardown:function(){b.event.remove(this,h,k)}};var h=!b.browser.mozilla?"mousewheel":"DOMMouseScroll"+(b.browser.version<"1.9"?" mousemove":"");b.fn.mousewheel=function(){this.each(function(){var a=b(this).switchable();a.getPanels().parent().wheel(function(e,c){c<0?a.next():a.prev();return false})});return this}})(jQuery);
$(document).ready(function(){
if($('.openx_Ads').length!=0){
var openx_id=new Array();
var openx_url=ROOT_PATH+'jwox.php?';
$('.openx_Ads').each(function(){
	var openxid = $(this).attr('openxid');
	openx_id.push(openxid);
});
for(var i in openx_id){
if(openx_url!=ROOT_PATH+'jwox.php?')openx_url+='&';
openx_url+='open_id[]='+openx_id[i];
}
$.getJSON(openx_url,function(json){
for(var i in json){
$('.openx_Ads[openxid='+json[i].id+']').html(json[i].content.replace(/bannerid/g,'jwbannerid'));
}
});
}
if($('.openx_Cam').length!=0){
var openx_id = new Array();
var openx_url = ROOT_PATH+'jwoxCampaign.php?';
$('.openx_Cam').each(function() {
   openx_id.push($(this).attr('camAndPos'));
});
for(var i in openx_id){
if(openx_url!=ROOT_PATH+'jwox.php?')openx_url+='&';
openx_url += 'camAndPos[]='+openx_id[i];
}
$.getJSON(openx_url,function(json){
for(var i in json){
$('.openx_Cam[camAndPos='+json[i].camAndPos+']').html(json[i].html.replace(/bannerid/g,'jwbannerid'));
}
});
}
$(".countrySel").hover(function(){
$(".continents_menu").css("display","block");
$('.countrySel .country_show_div').css("background-position","0px -28px");
},function(){
$(".continents_menu").css("display","none");
$('.countrySel .country_show_div').css("background-position","0px 0px");
});
$(".exchangeSel").hover(function(){
$(".exchange_menu").css("display","block");
},function(){
$(".exchange_menu").css("display","none");
});
var config={
sensitivity:2,
interval:100,
over:iconHoverOver,
timeout:500,
out:iconHoverOut
};
//$("#iconlist ul li ul").css({'display':'none'});
$("#iconlist ul li").hoverIntent(config);
$('.select_custom').each(function(){
if($(this).find('.selected').length!=0){
$(this).find('label').html($(this).find('.selected').html());
}
});
$('.select_custom').hover(
function(){
if($.browser.msie)$(this).css({'position':'relative','z-index':2});
$(this).find('ul').css('display','block');
$(this).find('label').css('border-bottom','0px');
if($(this).find('ul').attr('max_height')!=''){
if($(this).find('ul').height()>$(this).find('ul').attr('max_height')){
$(this).find('ul').css({'height':$(this).find('ul').attr('max_height')+'px'});
}
}
},
function(){
if($.browser.msie)$(this).css({'position':'static'});
$(this).find('ul').css('display','none');
$(this).find('label').css('border-bottom','1px solid #999');
}
);
$('.select_custom ul li').live('click',function(){
if($(this).attr('mm')!=$(this).parent().prev().val()&&!($(this).attr('mm')=='0'&&$(this).parent().prev().val()=='')){
if($(this).attr('mm')=='0'){
$(this).parent().prev().val('');
}else{
$(this).parent().prev().val($(this).attr('mm'));
}
if($('.nav_search').length!=0){
$('#search_form').submit();
//$(this).parent().parent().find('label').html($(this).html().replace(/(\(.*\))/g,''));
}
}
if($('.nav_search_select').length>0)nav_search_function($(this).parent().parent());
})
$('body').delegate('.statistics_property', 'click', function(){
return statisticsPropertyClick(this);
})
$('#friend_scroll, #js-partner-link').delegate('a[data-stats-type=12][data-partner-id]', 'click', function(){
    var $this = $( this );
    logStats(0, $this.data( 'stats-type' ), $this.data( 'partner-id' ));
});
$('.partnershiplist a').click(function(){
if($('#partnershiplist_from').length<1){
$('body').append('<form id="partnershiplist_from" target="_blank" action="'+ROOT_PATH+'?c=statsRedirect" method="post">'+
'<input id="partnership_url" type="hidden" name="partnership_url" value="'+$(this)[0].href+'">'+
'<input id="partnership_id" type="hidden" name="partnership_id" value="'+$(this).attr('pid')+'">'+
'</form>');
$('#partnershiplist_from').submit();
}else{
$('#partnershiplist_from').val($(this).attr('type'));
$('#partnership_url').val($(this)[0].href);
$('#partnership_id').val($(this).attr('pid'));
$('#partnershiplist_from').submit();
}
$('#partnershiplist_from').remove();
return false;
})

// Trigger buyerEnquiry when clicking places we want to get stats from.
$( '.buyer_enquiry' ).delegate( '[data-action="send-data"]', 'click', function( event ) {
    var $trigger = $( event.target );

    buyerEnquiry( $trigger.data( 'property' ), $trigger.data( 'value' ) );
} );

var gettitlenews_address_default = $("#gettitlenews_address").val();
$("#gettitlenews_address").blur(function(){
if($(this).val()==""){
$(this).attr("value",gettitlenews_address_default).addClass("gray");
}
});
$("#gettitlenews_address").focus(function(){
if($(this).val()==gettitlenews_address_default||$(this).val()=="Email Address"){
$(this).attr("value","").removeClass("gray");
}
});
//var nav_T = $('#juwaiRightOut').offset().top;
//var hea_T = $('.divHeader').offset().top;
//if($('#iconlist li').length>3 || $(".topContainer").length==0) $('#juwaiRightOut').css("visibility","visible");
$(window).bind('scroll resize',function(){
var win_T = $(window).scrollTop();
if($('#iconlist li').length>3 || $(".topContainer").length==0){
/*
if(win_T>nav_T){
if($.browser.msie&&$.browser.version=='6.0'){
var ie6_t = win_T - hea_T - 3;
$('#juwaiRightOut').css('top',ie6_t+'px');
}else{
$('#juwaiRightOut').css({'position':'fixed','top':'-3px'});
var r = (document.documentElement.clientWidth-1000)/2;
$('#juwaiRightOut').css('right',r+'px');
}
}else{
$('#juwaiRightOut').css({'position':'absolute','right':'0px'});
$('#juwaiRightOut').css('top',parseInt(nav_T-hea_T)+'px');
}
*/
//if($(".topContainer").length>0) $(".topContainer")
}else if($(".topContainer").length>0 && $.browser.msie && $.browser.version=='6.0'){
	$(".topContainer").css("top", parseInt(win_T)+"px").css("position", "absolute");
}
});
});
function mainMenuHover(){
$('.navigation ul li').each(
function(){
$(this).hover(
function(){
if($(this).attr("class")!="selected")
$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_up.jpg','_over.jpg'));
},
function(){
if($(this).attr("class")!="selected")
$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_over.jpg','_up.jpg'));
}
);
}
);
}
function iconHoverOver(){
$(this).css({"z-index":11});
if($.browser.msie){
$(this).find("ul").css({'display':''});
}else{
$(this).find("ul").stop().fadeTo('fast',1).show();
}
var menu_bg_a_pos=$(this).find('a').css('background-position');
var menu_bg_a_poss=menu_bg_a_pos.split(' ');
$(this).find('a').css('background-position',(parseInt(menu_bg_a_poss[0].split('px')[0])+159)+'px'+' '+menu_bg_a_poss[1]);
}
function iconHoverOut(){
$(this).css({"z-index":10});
if($.browser.msie){
$(this).find("ul").css({'display':'none'});
}else{
$(this).find("ul").stop().fadeTo('fast',0,function(){
$(this).hide();
});
}
var menu_bg_a_pos=$(this).find('a').css('background-position');
var menu_bg_a_poss=menu_bg_a_pos.split(' ');
$(this).find('a').css('background-position',(parseInt(menu_bg_a_poss[0].split('px')[0])-159)+'px'+' '+menu_bg_a_poss[1]);
}
function MM_swapImgRestore(){
var i,x,a=document.MM_sr;for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)x.src=x.oSrc;
}
function MM_preloadImages(){
var d=document;if(d.images){if(!d.MM_p)d.MM_p=new Array();
var i,j=d.MM_p.length,a=MM_preloadImages.arguments;for(i=0;i<a.length;i++)
if(a[i].indexOf("#")!=0){d.MM_p[j]=new Image;d.MM_p[j++].src=a[i];}}
}
function MM_findObj(n,d){
var p,i,x;if(!d)d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){
d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p);}
if(!(x=d[n])&&d.all)x=d.all[n];
for(i=0;!x&&i<d.forms.length;i++)x=d.forms[i][n];
for(i=0;!x&&d.layers&&i<d.layers.length;i++)x=MM_findObj(n,d.layers[i].document);
if(!x&&d.getElementById)x=d.getElementById(n);return x;
}
function MM_swapImage(){
var i,j=0,x,a=MM_swapImage.arguments;document.MM_sr=new Array;for(i=0;i<(a.length-2);i+=3)
if((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x;if(!x.oSrc)x.oSrc=x.src;x.src=a[i+2];}
}
function logout(){
$.getJSON(ROOT_PATH+"?c=collect&a=logout","",
function(data){
if(data['result_code']==1){
window.location.href=window.location.href;
return false;
}
})
}
function openxCampaign(campaignid){
var https_ROOT_PATH=ROOT_PATH.replace('http','https');
var m3_u=(location.protocol=='https:'?https_ROOT_PATH+'openx/www/delivery/ajs.php':ROOT_PATH+'openx/www/delivery/ajs.php');
var m3_r=Math.floor(Math.random()*99999999999);
if(!document.MAX_used)document.MAX_used=',';
document.write("<scr"+"ipt type='text/javascript' src='"+m3_u);
document.write("?campaignid="+campaignid+"&amp;target=_blank&amp;block=1");
document.write('&amp;cb='+m3_r);
if(document.MAX_used!=',')document.write("&amp;exclude="+document.MAX_used);
document.write(document.charset?'&amp;charset='+document.charset:(document.characterSet?'&amp;charset='+document.characterSet:''));
document.write("&amp;loc="+escape(window.location));
if(document.referrer)document.write("&amp;referer="+escape(document.referrer));
if(document.context)document.write("&context="+escape(document.context));
if(document.mmm_fo)document.write("&amp;mmm_fo=1");
document.write("'><\/scr"+"ipt>");
}
function maindingyue(){
if(!checkEmailAddress($('#gettitlenews_address').val())||$('#gettitlenews_address').val()==''){alert("不能为空或邮箱格式不对");}else{
$.getJSON(ROOT_PATH+"?c=collect&a=recordEmailSent",{
Semail:$('#gettitlenews_address').val()
},function(data){
if(data.email==1){
alert($('#gettitlenews_address').val()+'已经订阅了电邮简报,请用其它电邮订阅');
}else{
alert($('#gettitlenews_address').val()+'订阅电邮简报成功');
}
});
}
}
/*********header search bar********/
function homemap_keyword_list_data(keycode){
	if($('.post_searchbox').attr('isfocus')==='true'){
		if(keycode==38 || keycode==40){
			var conn = $('.post_searchbox').next().get(0);
			var input = $('.post_searchbox');
			if(keycode==38){
				keyword_choose('down',conn,'a',input);
			}else{
				keyword_choose('up',conn,'a',input);
			}
		}else if(keycode==13){
			post_homemap_search_submit();
		}else{
			post_homemap_keyword_data($('.post_searchbox').val());
		}
	}else{
		if(keycode==38 || keycode==40){
			var homesearch_type = $('.homesearch_bar_tap_span').attr('homesearch_type');
			if(homesearch_type==0){
				var conn = $(".homemap_keyword_search_list_table table").get(0);
			}else{
				var conn = $(".homemap_keyword_search_list_table ul").get(0);
			}
			var input = $("#homemap_keyword_remind_box_input");
			if(keycode==38){
				keyword_choose('down',conn,'a',input);
			}else{
				keyword_choose('up',conn,'a',input);
			}
		}else if(keycode==13){
			homemap_search_submit();
		}else{
			homemap_keyword_data($('#homemap_keyword_remind_box_input').val());
		}
	}
}
function post_homemap_keyword_data(kw){
	if(kw!=''){
		homemap_new_return_data.prototype.kw = kw;
		if(typeof(homemap_new_return_data.prototype.kw_return_list[kw])=='undefined'){
			$.getJSON(ROOT_PATH+"?c=collect&a=getNewsKeywordData&kw="+kw,function(json){
				homemap_new_return_data.prototype.kw_return_list[kw] = json;
				post_homemap_new_return_data(kw,json);
			});
		}else{
			post_homemap_new_return_data(kw,homemap_new_return_data.prototype.kw_return_list[kw]);
		}
	}
}

function post_homemap_new_return_data(kw,json){
	if(homemap_new_return_data.prototype.kw == kw){
		$('.post_searchbox').next().find('li').remove();
		for(var i in json.result){
			$('.post_searchbox').next().append('<li><a href="'+ROOT_PATH+'search/'+json.result[i]+'/v3/">'+json.result[i]+'</a></li>');
		}
		if($('.post_searchbox').attr('isfocus') == 'true'){
			if($('.post_searchbox').next().find('li').length>0){
				$('.post_searchbox').next().css('display','block');
			}
		}
	}
}
homemap_keyword_list_data.prototype.timeout = null;
homemap_keyword_list_data.prototype.post_timeout = null;
function homemap_keyword_data(kw){
	kw = encodeURIComponent(kw);
	if(kw == ''){$('.homemap_keyword_search_list_table').stop().css('height','auto').slideUp(400);return false;}
	var homesearch_type = $("#homemap_keyword_remind_box_type").val();
	if(homesearch_type==0){
		homemap_property_return_data.prototype.kw = kw;
		if(typeof(homemap_property_return_data.prototype.kw_return_list[kw])=='undefined'){
			$.getJSON(ROOT_PATH+"v2/listing-suggestion/"+kw,function(json){
				homemap_property_return_data.prototype.kw_return_list[kw] = json;
				homemap_property_return_data(kw,json);
			});
		}else{
			homemap_property_return_data(kw,homemap_property_return_data.prototype.kw_return_list[kw]);
		}
	}else if(homesearch_type==1){
		homemap_new_return_data.prototype.kw = kw;
		if(typeof(homemap_new_return_data.prototype.kw_return_list[kw])=='undefined'){
			$.getJSON(ROOT_PATH+"?c=collect&a=getNewsKeywordData&kw="+kw,function(json){
				homemap_new_return_data.prototype.kw_return_list[kw] = json;
				homemap_new_return_data(kw,json);
			});
		}else{
			homemap_new_return_data(kw,homemap_new_return_data.prototype.kw_return_list[kw]);
		}
	}
}
function homemap_new_return_data(kw,json){
	if(homemap_new_return_data.prototype.kw == kw){
		$('.homemap_keyword_search_list_table ul li').remove();
		for(var i in json.result){
			$('.homemap_keyword_search_list_table ul').append('<li><a href="javascript:;" rel="'+ROOT_PATH+'search/'+json.result[i]+'">'+json.result[i]+'</a></li>');
		}
		if($('#homemap_keyword_remind_box_input').attr('isfocus') == 'true'){
			if($('.homemap_keyword_search_list_table a').length>0){
				$('.homemap_keyword_search_list_table').stop().css('height','auto').slideDown(400);
			}
		}
		$('.homemap_keyword_search_list_table ul li a').click(
				function(){
					homemap_preJump($(this).attr('rel'));
					return false;
					}
				);
	}
}
homemap_new_return_data.prototype.kw = null;
homemap_new_return_data.prototype.kw_return_list = [];
function homemap_property_return_data(kw,json){
	if(homemap_property_return_data.prototype.kw == kw){
		$('.homemap_keyword_search_list_table table tr').remove();
		if(json.result.country){
			for(var i in json.result.country){
				if(i==0){
					$('.homemap_keyword_search_list_table table').append('<tr><th rowspan="'+json.result.country.length+'">国家</th><td><a href="javascript:;" rel="'+json.result.country[i].url+'">'+json.result.country[i].text+'</a></td></tr>');
				}else{
					$('.homemap_keyword_search_list_table table').append('<tr><td><a href="javascript:;" rel="'+json.result.country[i].url+'">'+json.result.country[i].text+'</a></td></tr>');
				}
			}
		}
		if(json.result.region){
			for(var i in json.result.region){
				if(i==0){
					var border_class = ' class="firstTd"';
					$('.homemap_keyword_search_list_table table').append('<tr><th rowspan="'+json.result.region.length+'">州/省</th><td'+border_class+'><a href="javascript:;" rel="'+json.result.region[i].url+'">'+json.result.region[i].text+'</a></td></tr>');
				}else{
					$('.homemap_keyword_search_list_table table').append('<tr><td><a href="javascript:;" rel="'+json.result.region[i].url+'">'+json.result.region[i].text+'</a></td></tr>');
				}
			}
		}
		if(json.result.city){
			for(var i in json.result.city){
				if(i==0){
					var border_class = ' class="firstTd"';
					$('.homemap_keyword_search_list_table table').append('<tr><th rowspan="'+json.result.city.length+'">城市</th><td'+border_class+'><a href="javascript:;" rel="'+json.result.city[i].url+'">'+json.result.city[i].text+'</a></td></tr>');
				}else{
					$('.homemap_keyword_search_list_table table').append('<tr><td><a href="javascript:;" rel="'+json.result.city[i].url+'">'+json.result.city[i].text+'</a></td></tr>');
				}
			}
		}
		if(json.result.address){
			for(var i in json.result.address){
				if(i==0){
					var border_class = ' class="firstTd addressTd"';
					$('.homemap_keyword_search_list_table table').append('<tr><th rowspan="'+json.result.address.length+'">地址</th><td'+border_class+'><a href="javascript:;" rel="'+json.result.address[i].url+'">'+json.result.address[i].text+'</a></td></tr>');
				}else{
					$('.homemap_keyword_search_list_table table').append('<tr><td class="addressTd"><a href="javascript:;" rel="'+json.result.address[i].url+'">'+json.result.address[i].text+'</a></td></tr>');
				}
			}
		}
		/*if(json.result.zipcode.length>0){
			for(var i in json.result.zipcode){
				if(i==0){
					var border_class = ' class="firstTd"';
					$('.homemap_keyword_search_list_table table').append('<tr><th rowspan="'+json.result.zipcode.length+'">邮编</th><td'+border_class+'><a href="'+ROOT_PATH+json.result.zipcode[i].url+'">'+json.result.zipcode[i].text+'</a></td></tr>');
				}else{
					$('.homemap_keyword_search_list_table table').append('<tr><td><a href="'+ROOT_PATH+json.result.zipcode[i].url+'">'+json.result.zipcode[i].text+'</a></td></tr>');
				}
			}
		}*/
		if(json.result.agent){
			for(var i in json.result.agent){
				if(i==0){
					var border_class = ' class="firstTd agentTd"';
					$('.homemap_keyword_search_list_table table').append('<tr><th rowspan="'+json.result.agent.length+'">中介</th><td'+border_class+'><a href="javascript:;" rel="'+json.result.agent[i].url+'">'+json.result.agent[i].text+'</a></td></tr>');
				}else{
					$('.homemap_keyword_search_list_table table').append('<tr><td class="agentTd"><a href="javascript:;" rel="'+json.result.agent[i].url+'">'+json.result.agent[i].text+'</a></td></tr>');
				}
			}
		}
		$('.homemap_keyword_search_list_table table').append('<tr><th rowspan="3" class="firstTh"></th><td class="searchTd"><a id="searchTda" href="javascript:homemap_search_submit()">搜索包含"'+'<label>'+$("#homemap_keyword_remind_box_input").val()+'</label>'+'"的房产</a></td></tr>');
		if($('#homemap_keyword_remind_box_input').attr('isfocus') == 'true'){
			if($('.homemap_keyword_search_list_table a').length>0){
				$('.homemap_keyword_search_list_table').stop().css('height','auto').slideDown(400);
			}
		}
		$('.homemap_keyword_search_list_table table td a').not($("#searchTda")[0]).click(
				function(){
					homemap_preJump($(this).attr('rel'));
					return false;
					}
				);
	}
}
homemap_property_return_data.prototype.kw = null;
homemap_property_return_data.prototype.kw_return_list = [];

function homemap_preSubmit(){
	var homesearch_type = $("#homemap_keyword_remind_box_type").val();
	var reg = /^\d+$/;
	var kw = htmlEncode($("#homemap_keyword_remind_box_input").val());
	if(kw != ''){
		if(!reg.test(kw)){
			if(homesearch_type==0){
				var conn = $(".homemap_keyword_search_list_table table");
			}else{
				var conn = $(".homemap_keyword_search_list_table ul");
			}
			var url = '';
			conn.find('a').each(function(index) {
				if($(this).text()== kw){
					url = $(this).get(0).rel;
				}
			});
			$("#homemap_keyword_remind_box_url").val(url);
		}else{
			$("#homemap_keyword_remind_box_url").val(ROOT_PATH +kw+'.htm');
		}
		//$('#homemap_keyword_search_list_from').append('<input type="hidden" name="form_url" value="'+window.location.href+'" />');
	}
	else{
		alert('请填写关键字');
		return false;
	}
	$('#homemap_keyword_search_list_from').append('<input type="hidden" name="form_url" value="'+window.location.href+'" />');
	if(homesearch_type==0){
		var action = "/globalsearch/"+$("#homemap_keyword_remind_box_input").val();
		$("#homemap_keyword_search_list_from").attr("action", action);
		return true;
	}
}
function post_homemap_search_submit(){
	if($(".post_searchbox").val()!=''){
		window.location.href = ROOT_PATH+'search/'+$(".post_searchbox").val();
	}else{
		alert('请填写关键字');
	}
}
function homemap_search_submit(){
	if($("#homemap_keyword_remind_box_input").val()!=''){
		if($("#homemap_keyword_remind_box_input").val().length<255){
			$('#homemap_keyword_search_list_from').submit();
		}
		else{
			alert('关键字过长');
		}
	}else{
		alert('请填写关键字');
	}
}
function homemap_preJump(jump_url){
	$('#homemap_keyword_search_list_from').append('<input type="hidden" name="form_url" value="'+window.location.href+'" />');
	$('#homemap_keyword_search_list_from').append('<input type="hidden" name="goto_url" value="'+jump_url+'" />');
	var p_url = ROOT_PATH+"index.php?c=collect&a=get_search_text";
	var form = $('#homemap_keyword_search_list_from');
	$.ajax({
		type: "POST",
		url: p_url,
		data: form.serialize(),
		dataType:"json",
		success: function(msg){
			if(msg.result>0){
				window.location.href = jump_url;
			}
		}
	})
	//window.location.href = jump_url;
	return false;
}
/*********header search bar end****/


$(document).ready(function(){
$('.conditionselect_box ul').each(function(index){
	var li_val = $(this).attr('li_val');
	var a = $(this).find('a[val='+li_val+']');
	var parent_id = $(this).parent().parent().attr('id');
	if(a.length>0){
		switch(parent_id){
			case 'region_select_box':
				$(this).parent().find('span').text(a.text());
				break;
			case 'city_select_box':
				$(this).parent().find('span').text(a.text());
				break;
			case 'area_select_box':
				$(this).parent().find('span').text(a.text());
				break;
			case 'status_select_box':
				reSetStatus_select(a.attr('val'));
				break;
			case 'attr_select_box':
				reSetAttr_select(a.attr('val'));
				break;
			case 'indoor_select_box':
				$(this).parent().find('span').text(a.text());
				break;
			case 'outdoor_select_box':
				$(this).parent().find('span').text(a.text());
				break;
			case 'rooms_select_box':
				$(this).parent().find('span').text(a.text());
				break;
			case 'view_select_box':
				$(this).parent().find('span').text(a.text());
				break;
			case 'facing_select_box':
				$(this).parent().find('span').text(a.text());
				break;
			case 'age_select_box':
				$(this).parent().find('span').text(a.text());
				break;

		}
	}
});

$('body').keyup(function(e){
	if($(".keyword_select_box_text[isfocus=true]").length>0){
		if(e.keyCode==38 || e.keyCode==40){
			var conn = $(".keyword_select_box_text[isfocus=true]").next().get(0);
			var input = $(".keyword_select_box_text[isfocus=true]");
			if(e.keyCode==38){
				keyword_choose('down',conn,'a',input);
			}else{
				keyword_choose('up',conn,'a',input);
			}
		}else if(e.keyCode==13){
			if($(".keyword_select_box_text").hasClass("newglobal_keyword_select_box_text")){
				newglobal_search_submit();
			}else{
				search_submit($('#CODE').val());
			}
		}else{
			keyword_list_data($('.keyword_select_box_text[isfocus=true]').val());
		}
	}else if($("#homemap_keyword_remind_box_input").attr('isfocus')==='true'){
		homemap_keyword_list_data(e.keyCode);
	}else if($("#search_keyword").attr('isfocus')==='true'){
		newsSearch_keyword_list_data(e.keyCode);
	}
});
/*******header search bar******/
$(".homesearch_bar_tap_tag").click(function(){
	var homesearch_type = $('#homemap_keyword_remind_box_type').val();
	$(".homesearch_bar_tap_tag li").show();
	$(".homesearch_bar_tap_tag li").eq(homesearch_type).hide();

	if ($( this ).hasClass( 'homesearch_dropdown-open' )) {
	    $( this ).removeClass( 'homesearch_dropdown-open' );
	} else {
	    $( this ).addClass( 'homesearch_dropdown-open' );
	}
});

var keyword_remind_box_bg_text = '';

$( '.homesearch_bar_tap_tag li' ).click( function() {
    var homesearch_type = $( this ).index( '.homesearch_bar_tap_tag li' );
    var $searchInput = $( '#homemap_keyword_remind_box_input' );
    var placeholderAttr;

    $( '#homemap_keyword_remind_box_type' ).val( homesearch_type );

    $( this ).parent().prev().html( $( this ).text() + '<i></i>' );

    $( '.homemap_keyword_search_list_table' ).find( 'table' ).css( 'display', 'block' );
    $( '.homemap_keyword_search_list_table' ).find( 'ul' ).css( 'display', 'none' );

    placeholderAttr = homesearch_type ? 'placeholder-news' : 'placeholder-property';
    $searchInput.attr( 'placeholder', $searchInput.data( placeholderAttr ) );
    homemap_keyword_data( $searchInput.val() );
});

$('#homemap_keyword_remind_box_input').focus(function(e){
	$(this).attr('isfocus','true');
	if(homemap_keyword_list_data.prototype.timeout!==null){
		clearTimeout(homemap_keyword_list_data.prototype.timeout);
	}
	$('.homemap_keyword_remind_box_bg').text('');
	if($('#homemap_keyword_remind_box_input').val()!= '' && $('.homemap_keyword_search_list_table a').length>0){
		$('.homemap_keyword_search_list_table').stop().css('height','auto').slideDown(400);
	}
}).blur(function(){
	$(this).attr('isfocus','false');
	if(homemap_keyword_list_data.prototype.timeout!==null){
		clearTimeout(homemap_keyword_list_data.prototype.timeout);
	}
	var homesearch_type = $("#homemap_keyword_remind_box_type").val();
	if(homesearch_type==0){
		keyword_remind_box_bg_text = $('.homemap_keyword_remind_box_bg').attr('property_val');
	}else{
		keyword_remind_box_bg_text = $('.homemap_keyword_remind_box_bg').attr('new_val');
	}
	if($('#homemap_keyword_remind_box_input').val()==''){
		$('.homemap_keyword_remind_box_bg').text(keyword_remind_box_bg_text);
	}
	homemap_keyword_list_data.prototype.timeout = setTimeout(function(){
		$('.homemap_keyword_search_list_table').stop().css('height','auto').slideUp(400);
	},300);
});
/*******header search bar end******/

$(".keyword_select_box_text").focus(function(e){
	var obj = this;
	var index = $(obj).index('.keyword_select_box_text');

	if(typeof(keyword_list_data.prototype.timeout[index])!='undefined'){
		if(keyword_list_data.prototype.timeout[index]!=null)clearTimeout(keyword_list_data.prototype.timeout[index]);
	}
	if($(this).prev().is('.keyword_select_box_text_span')){
		$(this).prev().text('');
	}
	if($(this).val()=='在当前条件下搜索'){
		$(this).val('');
	}
	$(this).attr('isfocus','true');
	$(this).parent().find('.keyword_search_list_ul').show();

	if($(this).parent().find('.keyword_search_list_ul').find('li').length>0){
		$(this).parent().find('.keyword_search_list_ul').css({'border':'1px solid #DCDCDC'});
	}else{
		$(this).parent().find('.keyword_search_list_ul').css({'border':'0px solid #DCDCDC'});
	}

})
$(".keyword_select_box_text").blur(function(e){
	$(this).attr('isfocus','false');
	var obj = this;
	var index = $(obj).index('.keyword_select_box_text');
	if(typeof(keyword_list_data.prototype.timeout[index])!='undefined'){
		if(keyword_list_data.prototype.timeout[index]!=null)clearTimeout(keyword_list_data.prototype.timeout[index]);
	}
	keyword_list_data.prototype.timeout[index] = setTimeout(function(){
		if($(obj).prev().is('.keyword_select_box_text_span')){
			if($(obj).parent().find(".keyword_select_box_text").val()==''){
				$(obj).prev().text($(obj).prev().attr('def_val'));
			}
		}else{
			if($(obj).parent().find(".keyword_select_box_text").val()==''){
				$(obj).parent().find(".keyword_select_box_text").val('在当前条件下搜索');
			}
		}
		$(obj).parent().find('.keyword_search_list_ul').hide();
	},300);
})

if($("#trigger1").length!=0){
$('#trigger1').switchable('.properties_scroll_item1',{
triggerType:'click',
effect:'scroll',
steps:5,
visible:5
}).autoplay({
autoplay: true,
autopause: true,
interval: 10
}).carousel();
var api1=$('#trigger1').switchable();
$('#next1').click(function(){
api1.next();
});
$('#prev1').click(function(){
api1.prev();
});
}
if($('#trigger2').length!=0){
$('#trigger2').switchable('.properties_scroll_item2',{
triggerType:'click',
effect:'scroll',
steps:5,
visible:5
}).carousel();
var api2=$('#trigger2').switchable();
$('#next2').click(function(){
api2.next();
});
$('#prev2').click(function(){
api2.prev();
});
}
$(".sub_parent, .select_plus").hover(function(){
	var p_width = $(this).find("a:eq(0)").width();
	$(this).find("ul:first").show();
	if($.browser.msie && ($.browser.version == '7.0' || $.browser.version == '6.0')){
		$(this).find("ul:first").find("a").width(p_width);
	}
},function(){
	$(this).find("ul:first").hide();
})

if($(".keyword_select_box_btn").length>0 && $("#keyword_select_box").length>0){
if($(".init_hide:hidden").length>0){
	$("#keyword_select_box").width($(".keyword_select_box_btn").offset().left - $("#keyword_select_box").offset().left - 10);
	$(".keyword_select_box_text").not("#imitate_keyword").width($("#keyword_select_box").width()-31);
}else{
	if($(".keyword_select_box_btn").offset().left - $("#keyword_select_box").offset().left > $("#keyword_select_box").width()){
		$(".keyword_select_box_btn").css("margin-top", "21px");
	}
}
}

/** header search price, indoor, outdoor, rooms, view, facing, age click event **/
if($(".topHeaderSearch ").length>0){
	$("#price_select_box, #indoor_select_box, #outdoor_select_box, #rooms_select_box, #view_select_box, #facing_select_box, #age_select_box, #employe_select_box, #return_select_box, #lang_select_box").find("li a").click(function(){
		var cln = $(this).parent().parent().parent().parent().attr('id');
		$(this).parent().parent().prev().text($(this).text());
		if($(this).attr("val") == ''){
			$("."+cln).val('');
		}else if($("."+cln).length == 2){
			var temp = $(this).attr("val").split("-");
			if(temp.length==2){
				$("."+cln).eq(0).val(temp[0]);
				$("."+cln).eq(1).val(temp[1]);
			}else{
				if($(this).parent().index()<2) {
					$("."+cln).eq(0).val(0);
					$("."+cln).eq(1).val($(this).attr("val").replace(/[^0-9]/ig,""));
				}else{
					$("."+cln).eq(0).val($(this).attr("val").replace(/[^0-9]/ig,""));
					$("."+cln).eq(1).val('');
				}
			}
		}else{
			$("."+cln).val($(this).attr("val"));
		}
	})
}
$(".conditionselect").hover(
function(){
	var ul = $(this).find("ul:first").not(".keyword_search_list_ul");
	if(ul.find('li').length>1){
		ul.css({"height":"auto","overflow-y":"auto"}).stop().slideDown("fast");
	}
},function(){
	var ul = $(this).find("ul:first").not(".keyword_search_list_ul");
	ul.css({"height":"auto","overflow-y":"auto"}).stop().slideUp("fast");
})


/** header region, city, area click event **/
if($("#SHOW_REGION").val() == 1){
	$.getJSON(ROOT_PATH+"?c=collect&a=ajaxGetRegionList&countryid="+$('#COUNTRYID').val(),function(data){
		if(data.result == 1) addUlList("region_select_box", data.region);
	});
}else if($("#SHOW_CITY").val() == 1){
	$.getJSON(ROOT_PATH+"?c=collect&a=ajaxGetCityList&type=property&countryid="+$('#COUNTRYID').val(),function(data){
		if(data.result == 1) addUlList("city_select_box", data.city);
	});
}

$(".topHeaderSearch #region_select_box li a").live("click", function(e){
	$('.map_content').juwaimap($(this).attr("val"));
	$("#region_select_box .conditionselect span").text($(this).text());
	$("#search_hidden_c").val('');
	$("#search_hidden_a").val('');
	$("#search_hidden_r").val($(this).attr("val"));
	removerecord(new Array("city_select_box","area_select_box"));
	if($(this).attr("val") != '' )$.getJSON(ROOT_PATH+"?c=collect&a=ajaxGetCityList&type=property&countryid="+$('#COUNTRYID').val()+"&id="+$(this).attr("val"),function(data){
		if(data.result == 1) addUlList("city_select_box", data.city);
	});
})


$(".topHeaderSearch #city_select_box li a").live("click", function(){
	$("#city_select_box .conditionselect span").text($(this).text());
	$("#search_hidden_a").val('');$("#search_hidden_c").val($(this).attr("val"));
	removerecord("area_select_box");
	$(".conditionselect_box ul").stop().slideUp("fast");
	if($(this).attr("val") != '' ) $.getJSON(ROOT_PATH+"?c=collect&a=ajaxGetAreaList&type=property&id="+$(this).attr("val"),function(data){
		if(data.result == 1) addUlList("area_select_box", data.area);
	});
})

$(".topHeaderSearch #area_select_box li a").live("click", function(){
	$("#area_select_box .conditionselect span").text($(this).text());
	$("#search_hidden_a").val($(this).attr("val"));
})

$(".topHeaderSearch #attr_select_box li a").live("click", function(){
	if($("#search_hidden_t").val() != 4){
		$("#attr_select_box .conditionselect span").text($(this).text());
		$("#search_hidden_t").val($(this).attr("val"));
	}
})
$(".topHeaderSearch #status_select_box li a").click(function(){
	reSetStatus_select($(this).attr('val'));
})
$(".topHeaderSearch .conditionselect a").live('click',function(e){
	e.preventDefault();
	 return false;
});
// header search end
foot_load();
//fix_top_userlogin();
footer_switchable_bind();

/** friend scroll **/
$('#friend_scroll_trigger').switchable('#friend_scroll li', {
	triggerType: 'click',
	effect: 'scroll',
	steps: 1,
	visible: 1,
	vertical:true
}).autoplay({
	autoplay: true,
	autopause: true,
	interval: 5
}).carousel();
});
function footer_switchable_bind(){
	if($(".tabMenu").attr('bindswitchabled')!='true'){
		$(".tabMenu li:first").addClass("first").find("a:first").addClass("selected");
		$(".tabArea:first").show();
		$(".tabMenu").attr('bindswitchabled','true');
	}
	if($(".globalAgentScroll").attr('bindswitchabled')!='true'){
		/** bottom agent scroll **/
		$('#globalAgent_trigger').switchable('.globalAgentScroll .clearfix .agentContainer', {
			triggerType: 'click',
			effect: 'scroll',
			steps: 3,
			visible: 3
		}).autoplay({
			autoplay: true,
			autopause: true,
			interval: 5
		}).carousel();
		$(".globalAgentScroll").attr('bindswitchabled','true');
	}
	/** property last scroll **/
	if($(".propertyLastScroll").attr('bindswitchabled')!='true'){
		$('#propertyLast_trigger').switchable('.propertyLastScroll .clearfix .propertyContainer', {
			triggerType: 'click',
			effect: 'scroll',
			steps: 4,
			visible: 4
		}).autoplay({
			autoplay: true,
			autopause: true,
			interval: 5
		}).carousel();
		$(".propertyLastScroll").attr('bindswitchabled','true');
	}

	/** property recommend scroll **/
	if($(".propertyRecommendScroll").attr('bindswitchabled')!='true'){
		$('#propertyRecommend_trigger').switchable('.propertyRecommendScroll .clearfix .propertyContainer', {
			triggerType: 'click',
			effect: 'scroll',
			steps: 4,
			visible: 4
		}).autoplay({
			autoplay: true,
			autopause: true,
			interval: 5
		}).carousel();
		$(".propertyRecommendScroll").attr('bindswitchabled','true');
	}
}
/************* @ andy for other page get keyword_select_box_text val**************/
function return_keyword_select_box_text_val(){
    if($('.conditionselect_box .keyword_select_box_text').val()!='' && $('.conditionselect_box .keyword_select_box_text').val()!='在当前条件下搜索'){
        return $('.conditionselect_box .keyword_select_box_text').val();
    }else{
        return '';
    }
}
/***********keyword remind *********/

function keyword_choose_a(text){
	//keyword_list_data(text);
	$(".keyword_select_box_text").val(text);
	$('.keyword_search_list_ul').hide();
	search_submit($('#CODE').val());
}
function keyword_choose(dir,conn,tar,input){
	var ul = conn;
	var len = $(ul).find(tar).length;
	if(len>0){
		var a = $(ul).find(tar);
		var a_height = a.eq(0).height();
		if($(ul).find(tar+'.select').length==0){
			if(dir == 'up'){
				a.eq(0).addClass('select');
				input.val(a.eq(0).text());
			}else{
				a.eq(len-1).addClass('select');
				input.val(a.eq(len-1).text());
			}
		}else{
			var a_index = $(ul).find(tar).index($(ul).find(tar+'.select'));
			a.removeClass('select');
			if(dir == 'up'){
				if(a_index==len-1){
					var new_a_index = 0;
				}else{
					var new_a_index = a_index+1;
				}
			}else{
				if(a_index==0){
					var new_a_index = len-1;
				}else{
					var new_a_index = a_index-1;
				}
			}
			input.val(a.eq(new_a_index).text());
			a.eq(new_a_index).addClass('select');
			$(ul).scrollTop(a_height*new_a_index);
		}
	}
}
function keyword_return_data(kw,json){
	if(keyword_return_data.prototype.kw == kw){
		var ob_ul = $(".keyword_select_box_text").next();
		ob_ul.children().remove();
		for(var i in json.result){
			ob_ul.append('<li onclick="keyword_choose_a(\''+json.result[i]+'\')"><a>'+json.result[i]+'</a></li>');
		}
		if(json.result.length>0 || $(".keyword_select_box_text").attr('isfocus')==='true')$('.keyword_search_list_ul').css({'height':'auto','border':'1px solid #DCDCDC'})
		if(ob_ul.attr('shouldshow')==='true' && ob_ul.is(":hidden") && json.result.length != 0){
			ob_ul.css({"height":"auto","overflow-y":"auto"}).stop().slideDown("fast");
		}
	}
}
function keyword_list_data(kw){
	if(kw!==''){
		keyword_return_data.prototype.kw = kw;
		if($(".keyword_select_box_text").hasClass("newglobal_keyword_select_box_text")){
			var country_code = '';
			var newglobal_box_country_id_text = $('#newglobal_box_country_id').find('span').text();
			$('#newglobal_box_country_id').find('a').each(function(){
				if(newglobal_box_country_id_text == $(this).text()){
					country_code = $(this).attr('val');
					return false;
				}
			})
			if(country_code==''){
				country_code = 'nocountry';
			}
		}else{
			country_code = $('#CODE').val();
		}
		if(typeof(keyword_return_data.prototype.kw_return_list['country_'+country_code+kw])=='undefined'){
			var kw_url = ROOT_PATH+"?c=collect&a=keyword_listdata&country="+country_code+"&kw="+kw;
			if($("#keyword_custom_ajax_url").size()>0){
				kw_url = ROOT_PATH+"?"+$("#keyword_custom_ajax_url").val()+"&country="+country_code+"&kw="+kw;
			}
			$.getJSON(kw_url,function(json){
				keyword_return_data.prototype.kw_return_list['country_'+country_code+kw] = json;
				keyword_return_data(kw,json);
			});
		}else{
			keyword_return_data(kw,keyword_return_data.prototype.kw_return_list['country_'+country_code+kw]);
		}
	}
}
keyword_return_data.prototype.kw_return_list = [];
keyword_list_data.prototype.timeout = new Array();
/************** end*************/

function reSetPrice(price_val){
	var price_l = $('#price_select_box').find('a[val='+price_val+']');
	if(price_l.length==1){
		$("#search_hidden_pmin, #search_hidden_pmax").val("");
		$("#price_select_box .conditionselect span").text(price_l.text());
		if(price_val.indexOf("-") === -1){
			if($(this).parent().index()<2) {
				$("#search_hidden_pmin").val('');
				$("#search_hidden_pmax").val(price_val.replace(/[^0-9]/ig,""));
			}else{
				$("#search_hidden_pmin").val(price_val.replace(/[^0-9]/ig,""));
			}
		}else{
			var arr = price_val.split("-");
			$("#search_hidden_pmin").val(arr[0].replace(/[^0-9]/ig,""));
			$("#search_hidden_pmax").val(arr[1].replace(/[^0-9]/ig,""));
		}
	}
}
function reSetAttr_select(attr_val){
	var attr_l = $('#attr_select_box').find('a[val='+attr_val+']').eq(0);
	if($("#search_hidden_t").val() != 4 && attr_l.length==1){
		$("#attr_select_box .conditionselect span").text(attr_l.text());
		$("#search_hidden_t").val(attr_val);
	}
}
function reSetStatus_select(status_val){
	var status_l = $('#status_select_box').find('a[val='+status_val+']');
	if(status_l.length==1){
		$("#status_select_box .conditionselect span").text(status_l.text());
		$("#search_hidden_t, #search_hidden_pmin, #search_hidden_pmax").val("");
		$("#search_hidden_s").val(status_val);
		$("#price_select_box li.p, #price_select_box li.rp").hide();
		$("#attr_select_box li.p, #attr_select_box li.rp").hide();
		var attr_select_li_val = $('#attr_select_box ul').attr('li_val');
		var price_select_li_val = $('#price_select_box ul').attr('li_val');

		switch(status_val){
			case '0':
				$("#attr_select_box li.p").show();
				$("#price_select_box li.p").show();
				reSetAttr_select(attr_select_li_val);
				reSetPrice(price_select_li_val);
				reSetAttr_select(0);
				break;
			case '1':
				$("#attr_select_box li.rp").show();
				$("#price_select_box li.rp").show();
				reSetAttr_select(attr_select_li_val);
				reSetPrice(price_select_li_val);
				reSetAttr_select(0);
				break;
			case '2':
				$("#attr_select_box .conditionselect span").text($("#attr_select_box").find("ul:first .init").text());
				$("#attr_select_box").find("ul:first li:not(.init)").hide();
				$("#search_hidden_t").val(4); break;
		}
	}
}
function reSetRegion(region_id){
	var region_l = $('#region_select_box').find('a[val='+region_id+']');
	if(region_l.length>0){
		region_l.click();
	}
}


function showOriginalImg(src){
	$(".original_area").empty();
	var tw, th, iw, ih, tl, tt;
	var Img = new Image();
	if(!/^https{0,1}:\/\/agentadmin\.juwai\.com.*$/.test(src)){
		Img.src = src;
		Img.onload = function() {
			$(".original_area")[0].appendChild(Img);
			iw = parseInt($(".original_area img").width());
			ih = parseInt($(".original_area img").height());
			if(iw < 800 && ih < TB_SHOW_HEIGHT){
				tw = iw; th = ih;
			}else if(ih/TB_SHOW_HEIGHT > iw/800){
				th = TB_SHOW_HEIGHT;
				tw = iw * TB_SHOW_HEIGHT / ih;
			}else{
				tw = 800;
				th = ih * 800 / iw;
			}
			tl = (800 - tw)/2;
			tt = (TB_SHOW_HEIGHT - th)/2;

			$(".original_area img").css({"width": tw, "height": th, "left": tl, "top": tt}).attr("draggable","false");
			mouseMoveEvent();
			$("#zoom_number").val(0);
		}
	}
}

function zoomAction(status){
	var coefficient = 1;
	var deep = 0.1;
	//alert(1);
	var zoom_number = parseInt($("#zoom_number").val());
	if(!(zoom_number*status>0 && Math.abs(zoom_number) >= 5)){
		switch(status){
			case 1: coefficient += deep; $("#zoom_number").val(++zoom_number); break;
			case -1: coefficient -= deep; $("#zoom_number").val(--zoom_number); break;
			default: coefficient = 1;
		}
		var iw = parseInt($(".original_area img").width()*coefficient);
		var ih = parseInt($(".original_area img").height()*coefficient);

		tl = (800 - iw)/2;
		tt = (TB_SHOW_HEIGHT - ih)/2;
		$(".original_area img").css({"width": iw, "height": ih, "left": tl, "top": tt});
	}
}

function frontScroll(){
	var left = parseInt($(".list_img_show ul").css("left").split("px")[0]);
	if(Math.floor(Math.abs(left/80))+5<$(".list_img_show ul li").length){
		$("#tab_next, #tab_prv").removeClass("last");
		$(".list_img_show ul").animate({left: (left-80)+'px'}, 200, function(){
			if(Math.floor(Math.abs(left/80))+6>=$(".list_img_show ul li").length) $("#tab_prv").addClass("last");
			$("#tab_prv").attr("onclick","frontScroll();");
		});
		$("#tab_prv").removeAttr("onclick");
	}
}

function backScroll(){
	var left = parseInt($(".list_img_show ul").css("left").split("px")[0]);
	if(Math.floor(left/80)<0){
		$("#tab_next, #tab_prv").removeClass("last");
		$(".list_img_show ul").animate({left: (left+80)+'px'}, 200, function(){
			if(Math.floor(left/80)+1>=0) $("#tab_next").addClass("last");
			$("#tab_next").attr("onclick","backScroll();");
		});
		$("#tab_next").removeAttr("onclick");
	}
}


function mouseMoveEvent(){
	$(".original_area img").mousedown(function(e){
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
		$(this).addClass("hand");//.css("cursor","move");
		var cx = parseInt($(this).css("left").split("px")[0]);
		var cy = parseInt($(this).css("top").split("px")[0]);
		var x = cx - e.clientX;
		var y = cy - e.clientY;

		$(document).bind("mousemove",function(ev){
			window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			var _x =  ev.clientX + x;
			var _y =  ev.clientY + y;
			$(".original_area img").stop().animate({left:_x+"px",top:_y+"px"},10);
			return false;
		});
		return false;

	});
	$(document).mouseup(function(){
		$(".original_area img").removeClass("hand");//.css("cursor","pointer");
		$(this).unbind("mousemove");
		return false;
	});


}
function getScrollTop() {
    return ('pageYOffset' in window) ? window.pageYOffset
        : document.compatMode === "BackCompat"
        && document.body.scrollTop
        || document.documentElement.scrollTop ;
}



/*				jacky_chen	2013-04-19		页面底部JS	 start	*/

function foot_load(){
	foot_fixed_ie("7.0");
	var v_ul = $("#visit_record .foot_yj_list").find("ul").eq(0);
	var v_li_list = v_ul.find("li");
	if(v_li_list.length == 0){
		v_ul.append("<li id='no_v_list' style='height:20px; border:none;'>没有浏览记录！</li>");
		v_ul.siblings("ul").hide();
		$("#visit_num").text(0);
	}else{
		$("#visit_num").text(v_li_list.length);
	}
	foot_compare_cookie_read();

	$(".foot_user_type").click(function(){
		$("#feedback_submit_error").text("");
	});
	faved_num();
}

function faved_num(){
	var visited_fav = 0;
	$("#visit_record .foot_yj_list li img").each(function(){
		if($(this).attr("src").indexOf("xin1.png") >= 0){
			visited_fav++;
		}
	});
	$("#visit_fav_num").text(visited_fav);
}

function show_search_record(){
	var _is_showed = $("#view_record").is(":visible");
	$(".foot_pop_div").hide();
	$("#view_record .foot_search_list").find("ul").eq(0).find("li").each(function(index,dom){
		if(index >= 5){
			$(this).hide();
		}
	});
	if(_is_showed){
		$("#view_record").fadeOut();
	}else{
		$("#view_record").css({"bottom":"20px","left":"-65px"}).fadeIn();
	}
};

function get_visit_record(dom){
	var _is_showed = $("#visit_record").is(":visible");
	if(!_is_showed){
		$.getJSON(ROOT_PATH+"?c=collect&a=_fav_check&id=" + $(dom).attr("val"),
		function(data){
			var _u = data.result_code <= 0 ? '' : data.result_code;
			$(dom).find("img").eq(1).attr("src", STATIC_PATH + "images/xin"+_u+".png");
		});
	}
	faved_num();
}

function show_visit_record(){
	var _is_showed = $("#visit_record").is(":visible");
	$(".foot_pop_div").hide();
	var v_ul = $("#visit_record .foot_yj_list").find("ul").eq(0);
	var v_li_list = v_ul.find("li");
	if(v_li_list.length == 0){
		v_ul.append("<li id='no_v_list' style='height:20px; border:none;'>没有浏览记录！</li>");
		v_ul.siblings("ul").hide();
		$("#visit_num").text(0);
	}else{
		if(v_li_list.eq(0).text().indexOf('没有浏览记录') >= 0){
			$("#visit_num").text($(v_li_list).length - 1);
		}else{
			$("#visit_num").text($(v_li_list).length);
		}
		if($(v_ul).attr("sorted") == 1){

		}else{
			var _new_v_list = [];
			var _max = v_li_list.length
			for(var _i = 0; _i <  _max; _i++){
				_new_v_list[_max -1 - _i] = v_li_list[_i];
			}
			$(v_li_list).remove();
			$(v_ul).append(_new_v_list);
			$(v_ul).attr("sorted",1);
		}
		$(_new_v_list).each(function(index,dom){
			if(index >= 5){
				$(this).hide();
			}else{
				get_visit_record(this);
			}
		});
	}
	if(_is_showed){
		$("#visit_record").fadeOut();
	}else{

		$("#visit_record").fadeIn();
	}
	faved_num();
};

function foot_bar_close(){
	$("#foot_bar_show").hide();
	$("#foot_bar_small").show();
	$("#foot_menu").removeAttr("style").width("60").css({"right":"0"});
};

function foot_bar_small(){
	$("#foot_bar_show").show();
	$("#foot_bar_small").hide();
	$("#foot_menu").width("1000").css({"left":"0","right":"0"});
	foot_fixed_ie("7.0");
};
function clear_compare(item){
	var _length = '';
	var all = false;
	if(typeof(item) == 'undefined'){
		_length = $("#compare_record .foot_yj_list li").length;
		all = true;
	}else{
		_length = $("#compare_record .foot_yj_list li").index($(item).parents("li"));
	}
	foot_compare_cookie_del(item);

	$("#compare_record .foot_yj_list ul").eq(0).find("li").each(function(index, element) {
		if(all){
			$(this).remove();
			$("#foot_menu").removeClass("showmenu").hide();
			return;
		}else{
			if(_length == index){
				$(this).remove();
				if($("#compare_record .foot_yj_list ul").eq(0).find("li").length == 0) $("#foot_menu").removeClass("showmenu").hide();
				return;
			}
		}
    });
}
function show_compare_record(){
	if(parseInt($("#foot_menu_box").css("margin-left").split("px")[0])<0){
		$("#foot_menu").addClass("showmenu");
	}else{
		$("#foot_menu").removeClass("showmenu");
	}
}
function foot_fixed_ie(ver){
	if($.browser.msie && $.browser.version == ver){
		$("#foot_menu").css({"left":($(window).width() - 1000) / 2});
	}
}

function foot_addFav(id,dom){
	var is_cancel = 0;
	if($(dom).attr("src").indexOf("xin1.png") >= 0){
		is_cancel = 1;
	}
	var _url =ROOT_PATH + "?c=collect&id="+id;
	if(is_cancel == 0){
		_url += "&a=_addToFavorite";
	}else{
		_url += "&a=_fav_del";
	}
	$.getJSON(_url ,
	function(data){
		if(data['result_code']==0){
			juwaiAlert(is_cancel == 0 ? "收藏成功！":"已取消收藏");
			if(is_cancel == 0){
				$(dom).attr("src",STATIC_PATH + "images/xin1.png");
			}else{
				$(dom).attr("src",STATIC_PATH + "images/xin.png");
			}
			faved_num();
		}
		else{
			window.location.href = ROOT_PATH + 'login';
		}
	});
}

function foot_compare_cookie_read(){
	//var objs = eval("[{ id: 1, name: 'n_1' }, { id: 2, name: 'n_2'}]");
	var _cookie = $.cookie().compared;
	var comp_num = 0;
	if(typeof(_cookie) != "undefined" && _cookie != '' && _cookie != undefined){
		var data = $.parseJSON(_cookie);
		for(var i in data){
			foot_add_compare(data[i],1);
		}
	}else{
		data = new Array();
	}

	if(data.length == 0){
		$("#foot_menu").hide();
	} else {
		$("#foot_menu").show().removeClass("showmenu");
		$("#compare_num").text($("#compare_record .foot_yj_list ul").eq(0).find("li").length);
	}
}

function foot_error_img(dom){
	$(dom).hide();
	$(dom).parent().append("<div style='width:115px;height:"+$(dom).height()+"px; font-size:28px; padding:0 10px 0 5px; line-height:80px;' class='img_error'>暂无图片</div>");
}
function foot_add_from_a(id){
	var cooker_length = 0;
	if(typeof($.cookie().compared) == "undefined"){
		cooker_length = 0;
	}else{
		try{cooker_length = $.cookie().compared.match(/\"id\"/gi).length;}catch(e){}
	}
	$("#foot_menu").show().addClass("showmenu");
	if(cooker_length >= 4){
		$("body").append('<div class="compare_err" style="position: fixed;top: 35%;left: 41%;min-width: 246px;width: auto;background-color: #888;text-align: center;padding: 35px 25px;font-size: 26px;color: #ffffff;-moz-border-radius: 4px;	-webkit-border-radius: 4px;	border-radius: 4px;z-index:10;">房产对比最多能添加4个</div>');
		setTimeout(function(){$(".compare_err").fadeOut().remove();}, 3000);
	}else{
		var _this = undefined , obj = {};
		var imgobj = '';
		if(typeof(property_list) == "object"){		//判断来源是不是来自 地图页
			for(var i=0; i<property_list.length;i++){
				if (property_list[i][0] == id){
					_this = property_list[i];
					break;
				}
			}
			obj.img = property_list[i][4];
			obj.title = property_list[i][16];
		}else if($(".chax").length > 0){
			$(".chax").each(function(){
				if($(this).attr("rel") == id){
					_this = this;
					return false;
				}
			});
			if($(_this).hasClass("text_div_compare")){
				imgobj = $(_this).parents(".waterfall_div").find(".text_div_compare_img");
				obj.img = $(_this).parents(".waterfall_div").find(".text_div_compare_img").attr("src");
				obj.title = $(_this).parents(".waterfall_div").find(".text_div_compare_title").text();
				if(obj.title=='')obj.title = $(_this).parents(".waterfall_div").find(".text_div_compare_title").next().text();
			}else{
				imgobj = $(_this).parents(".div_conn_container").find(".img_content_all a").children().eq(0);
				if (imgobj[0] && imgobj[0].tagName != 'IMG') {
					imgobj = $(_this).parents(".div_conn_container").find(".img_content_all a").children().eq(1);
				}
				obj.img = $(_this).parents(".div_conn_container").find(".img_content_all").find("img").attr("src");
				obj.title = $(_this).parents(".div_conn_container").find(".top_title_box").find("h3").text() || $(_this).parents(".div_conn_container").find(".top_title_box").find("h1").text() || $(_this).parents(".divImgView").find("h1").text();
			}
		}else if($(".npj_images").length > 0){
			imgobj = $(".npj_images .large_img img:visible");
			obj.img = $(".npj_images .large_img img:eq(0)").attr('src');
			obj.title = $(".property_title").html();
		}else{
			imgobj = $(".img_arr_m:eq(0)");
			obj.img = $(".img_arr_m:eq(0)").attr('src');
			obj.title = $(".property_title").html();
		}

		obj.id = id;

		if (foot_compare_cookie_is_exists(obj.id)) {
			$("body").append('<div class="compare_err" style="position: fixed;top: 35%;left: 41%;min-width: 246px;width: auto;background-color: #888;text-align: center;padding: 35px 25px;font-size: 26px;color: #ffffff;-moz-border-radius: 4px;	-webkit-border-radius: 4px;	border-radius: 4px;z-index:10;">已在对比列表中</div>');
		setTimeout(function(){$(".compare_err").fadeOut().remove();}, 3000);
			return false;
		}

		if(imgobj == "" || imgobj.length == 0){
			foot_add_compare(obj,0);
		}else{
			imgobj2 = imgobj.clone();
			imgobj2.show().addClass("clone_img").find(".total_img, .total_img_bg").remove();
			imgobj2.css({"position":"absolute","top":imgobj.offset().top,"left":imgobj.offset().left,"width":imgobj.width()+"px","height":imgobj.height()+"px", "z-index": 1000}).appendTo('body')
			imgobj2.animate({"top": ($("#foot_menu").offset().top+45)+"px","left": "11px","width": "77px", "height": "58px", "line-height": "58px", "font-size": "14px"}, 2000, function(){
				foot_add_compare(obj,0);
				imgobj2.remove();
				$(".clone_img").remove();
			});
		}
	}
	return false;
}
function foot_compare_cookie_is_exists(id) {
	var _cookie = $.cookie().compared;
	if(typeof(_cookie)=='undefined'){
		var data = new Array();
	}else{
		var data = $.parseJSON(_cookie);
	}

	for(var i in data){
		if(data[i].id == id){
			return true;
		}
	}

	return false;
}
function foot_compare_submit() {
	var window_href  = window.location.href;
	var window_href_arr = window_href.match(/^.*([A-Z]{2})(property|rentProperty){0,1}\/{0,1}([^/]*)\/{0,1}([^/]*)\/{0,1}$/);

	if(window_href_arr!=null){
		if(window_href_arr[3]=='undefined'){
			var href_search_key = '';
		}else{
			var href_search_key = window_href_arr[3];
		}
		var country_code = window_href_arr[1];
		if(typeof(window_href_arr[2])=='undefined'){
			var href_search_type = 'property';
		}else{
			var href_search_type = window_href_arr[2];
		}
	}else{
		var country_code = '';
		var href_search_key = '';
		var href_search_type = 'property';
	}


	if($("#search_form").length<1){
		$("body").append("<form id='search_form' method='post' style='display:none;'><input type='hidden' id='compare_id' name='compare_id' /></form>");
	}
	if($("#search_form #compare_id").length < 1){
		$("#search_form").append("<input type='hidden' id='compare_id' name='compare_id' />");
	}

	if($('input[name=href_search_type]').length<1){
		$("#search_form").append("<input type=\"hidden\" name=\"href_search_type\" value=\""+href_search_type+"\" />");
	}else{
		$('input[name=href_search_type]').val(href_search_type);
	}
	if($('input[name=s]').length<1){
		$("#search_form").append("<input type=\"hidden\" name=\"s\" value=\""+href_search_key+"\" />");
	}else{
		$('input[name=s]').val(href_search_key);
	}

	var compare_form =ROOT_PATH+"property/compare";
	var list = $("#compare_record .foot_yj_list ul").eq(0).find("li");

	if(list.length < 2){
		alert('请选择两个或两个以上的楼盘');
		return false;
	}

	var _cookie = $.cookie().compared;
	var compare_id = '';
	if(typeof(_cookie) != "undefined"){
		var data = $.parseJSON(_cookie);
		for(var i in data){
			if(compare_id.indexOf(data[i].id)===-1){
				if(compare_id!='')compare_id+=',';
				compare_id += data[i].id;
			}
		}
	}else{
		alert('请先加入对比');
	}
	$("#search_form #compare_id").val(compare_id);


	$("#search_form").attr("action",compare_form);
	$("#search_form").attr("target",'_blank');
	$("#search_form").append("<input type=\"hidden\" name=\"if_Refactor_page\" value=\"yes\" />");
	$("#search_form").submit();
};


function foot_add_compare(obj,type){
	var tpl =
	    '<li id="foot_compare_@id@"><a href="/@id@.htm" title="@fulltitle@" target="_blank" style="display: block; width: 77px; float: left;"><img src="@img@" height="58" width="77" /></a><div class="foot_record_pad_div"><a  target="_blank" href="/@id@.htm" title="@fulltitle@"><span class="foot_yj_title">@fulltitle@</span></a><a class="foot_yj_icon" href="javascript:void(0);" onclick="clear_compare(this)">删除(Delete)</a></li>';

	//var data = [];
	var ck = "", _img="" , _title = "", _fulltitle = "", _id = "" , _has = 0 , _ul = $("#compare_record .foot_yj_list ul").eq(0);
	var _time = "" ;
	var _date = new Date();
	_time = _date.getTime();

	if(obj instanceof jQuery){
		_img = $(obj).parent().find(".img_content").find("img").attr("src");
		_title = $(obj).parent().find(".top_title_box").find("h1").text();
		_id = $(obj).val();
	}else{
		_img = obj.img;
		_title = obj.title;
		_id = obj.id;
		_fulltitle = obj.fulltitle || $.trim(_title);
	}
	_img = $.trim(_img);
	_img = _img || STATIC_PATH + "images/luenhuan/none_img.gif";
	//_img = _img == '' || _img.indexOf('none_img')  >= 0 ? "<div style='width:130px;height:85px; font-size:28px; padding:20px 0 0 5px;' class='img_error'>暫無圖片</div>" : _img;

	_fulltitle = $.trim(_fulltitle);
	_title = $.trim(_title) || _fulltitle;
	_title = _title.length <= 9 ? _title : _title.substr(0,9) + "..";

	_ul.find("li").each(function(){
		if($(this).attr('id').indexOf(_id) >= 0){
			_has = 1;
			return;
		}
	});

	if(_has != 0){
		return;
	}

	/*
	ck = '{"id":"@id@","img":"@img@","title":"@title@","time":"@time@"}';
	var _tmp = tpl.replace("@img@",_img).replace("@title@",_title).replace("@id@",_id).replace("@time@",_time);
	ck = ck.replace("@img@",_img).replace("@title@",_title).replace("@id@",_id).replace("@time@",_time);
	*/

	ck = '{"id":"@id@","img":"@img@","fulltitle":"@fulltitle@"}';
	var _tmp = tpl.replaceAll("@img@",_img).replaceAll("@title@",_title).replaceAll("@id@",_id).replaceAll("@fulltitle@",_fulltitle);
	ck = ck.replaceAll("@img@",_img).replaceAll("@id@",_id).replaceAll("@fulltitle@",_fulltitle);

	if(_img == '' || _img.indexOf('none_img') >= 0){
		//$("#foot_compare_" + _id).find("img").hide().parent().append("<div style='width:130px;height:85px; font-size:28px; padding:20px 0 0 5px;' class='img_error'>暫無圖片</div>");
		_tmp = _tmp.replace('<img src="'+_img+'" height="58" width="77" />',"<div style='width:75px; height:56px; font-size:14px; line-height:58px; border: 1px solid #DDDDDD;' class='img_error'>暂无图片</div>");
	}
	//data.push(ck);
	//_tmp = _tmp.replace(
	if(type == 1){
		$("#foot_menu").show().addClass("showmenu");
		_ul.append(_tmp);
	}else{
		if($(_ul).find('li').length>=5){
			if($(_ul).find('li').length <= 7){
				$(_ul).find("li").last().hide();
			}else{
				var _tp = '<div id="_add_foot_err" style="background-color: #484848; height: 42px; min-width: 146px; padding:0 10px; border-radius: 4px; color: #FFF;text-align: center;line-height: 290%; font-size: 14px; position: fixed;top: 50%;left:45%;z-index:3;opacity:0.6;">最多只能加入8个楼盘行进对比！</div>';
				if($("#_add_foot_err").length > 0){
					$("#_add_foot_err").show();
				}else{
					$("body").append(_tp);
				}
				setTimeout(function(){
					$("#_add_foot_err").fadeOut();
				},5000);
				return;
				//$(_ul).find("li").last().remove();
			}
		}
		if($(_ul).find('li').length > 0){
			$(_ul).find("li").eq(0).before(_tmp);
		}else{
			_ul.append(_tmp);
		}
	}
	var num = $(_ul).find('li').length;
	$("#compare_num").text(num);
	set_compared_cookie(ck);
}

function set_compared_cookie(str){
	var _cookie = $.cookie().compared;
	//_tmp = _tmp + _cookie;

	if(typeof(_cookie)!='undefined' && _cookie.indexOf(str) > 0){
		return;
	}

	var data = $.parseJSON(_cookie) || {};

	var data_arr = new Array();
	data_arr.push($.parseJSON(str));
	for(var i in data){
		if(i<8){
			data_arr.push(data[i]);
		}
	}
	str = json_to_str(data_arr);
	//data = eval(eval("'["+ _cookie +"]'"));
	$.cookie('compared', str , {expires: 30, path: '/', domain: document.domain});
}

function foot_compare_cookie_del(item){
	if(typeof(item) == 'undefined'){
		$.cookie("compared","",{expires: -1 , path: '/' ,domain: document.domain});
		$("#compare_num").text(0);
		return;
	}
	var _cookie = $.cookie().compared;
	if(typeof(_cookie)=='undefined'){
		var data = new Array();
	}else{
		var data = $.parseJSON(_cookie);
	}
	var data_arr = new Array();
	for(var i in data){
		if(data[i].id != $(item).parents("li").attr("id").replace("foot_compare_","")){
			data_arr.push(data[i]);
		}
	}
	str = json_to_str(data_arr);
	$.cookie('compared', str , {expires: 30, path: '/', domain: document.domain});
}

function json_to_str(o) {
	var arr = [];
	var fmt = function(s) {
	if (typeof s == 'object' && s != null) return json_to_str(s);
	return /^(string|number)$/.test(typeof s) ? '"' + s + '"' : s;
	}
	for (var i in o) arr.push('"' + i + '":' + fmt(o[i]));
	return '{' + arr.join(',') + '}';
}

/****************feedback js 2013.06.09 terence**************/

function foot_sent_call(){
	if($("#feedback_info").attr("succ") == "1"){
		$("#feedback_info").hide();
		$("#TB_window").width(370).css({"border":"none","border-radius":"10px"});
		$("#TB_ajaxContent").width(370).height(104);
		$("#feedback_success").fadeIn();
	}
}

function feedback_type_show(dom){
	$(dom).find("ul").css({"height":"auto","overflow-y":"auto","margin-top":"29px"}).stop().slideDown("fast");
	$(dom).find("ul").find("li a").each(function(){
		$(this).css({"font-size":"14px"});
	});
	$(dom).find("ul").find("li a").mouseover(function(){
		$(this).css({"color":"red","background":"#FEE","text-decoration":"none","font-size":"14px"});
	});
	$(dom).find("ul").find("li a").mouseout(function(){
		$(this).removeAttr("style");
	});
}

function feedback_type_unshow(dom){
	$(dom).find("ul").css({"height":"auto","overflow-y":"auto","margin-top":"29px"}).stop().slideUp("fast");
}

/*				jacky_chen	2013-04-19		页面底部JS	 end	*/

/*    terence    2013.04.25   start*/
function imgError(obj,w,h,square){
	var par = $(obj).parent();
	//var div_class = par.attr('class');
	$(obj).remove();
	par.append('<div>暂无图片</div>');
	if(typeof(w)!='undefined'|| typeof(w)!=''){
		par.find('div').css('width',w);
	}
	if(typeof(h)!='undefined' || typeof(h)!=''){
		if(typeof(square) == 'undefined'){
			if(h==60 || h==70){
				style_h = h-10;
				par.find('div').css('height',style_h);
			}
			if(h==94){
				par.find('div').css('height',h-14);
			}
		}else{
			par.find('div').css('height',h);
		}
	}
	par.css("text-decoration","none");
	par.find('div').addClass('img_error none_img_'+w+'x'+h);
}
/*    terence    2013.04.25   end*/
//var alertCountrySel=new showCountryLists();

function alertCountrySel(){
	this.h=document.documentElement.clientHeight||document.body.clientHeight;
	this.w=document.documentElement.clientWidth||document.body.clientWidth;
	this.showbox=$("#showbox");
	this.cover=$("body").find("#alertcover");
	this.footContent=this.showbox.find(".footContent");
	this.screenW=window.screen.availWidth;
	this.scrrenH=window.screen.availHeight;
	this._cover=$("<div id='alertcover'></div>");
	var _this=this;
	this.addCover=function(){
		_this._cover.css({
                   	"position":"fixed",
	                "z-index":"9990",
	                "background-color":"#000",
	                "opacity":".6",
                    "width":_this.w.toString()+"px",
                    "height":_this.h.toString()+"pX"
                   });
		$("body").prepend(_this._cover);
	}
	this.removeCover=function(){
		 $("body").find("#alertcover").remove();
	}
    this.removeFootContent=function(){
      	_this.footContent.remove();
    }
    this.showboxClose=function(){
    	_this.showbox.fadeOut(100);
    }
    this.init=function(){
            _this.removeCover();
            _this.removeFootContent();
            _this.addCover();
            _this.showbox.find(".closeCountryAlert").click(function(){
              _this.removeCover();
            	_this.showboxClose();
            });
            _this.cover.live("click",function(){
             	_this.removeCover();
            	_this.showboxClose();
           });
	        setTimeout(function(){
                 var _t=parseInt((_this.scrrenH-_this.showbox.outerHeight())/2);
                 var _l=parseInt((_this.w-_this.showbox.outerWidth())/2);
	            _this.showbox.fadeIn(150).css({
	        	"position":"fixed",
	            "z-index":"10000",
	             "left":_l.toString()+"px",
                "top":_t.toString()+"pX",
	            "background-color":"#ffffff"
	           });
        },0);
    }
    this.init();
}


function addUlList(ob, data){
	$("#"+ob).find("ul:first li:not(.init)").remove();
	for(var i in data){
		$("#"+ob).find("ul:first").append('<li><a href="javascript:void(0);" val="'+data[i]['ID']+'">'+(data[i]['NAME_LANG']=='' ? data[i]['NAME'] : (data[i]['NAME_LANG']+"("+data[i]['NAME']+")"))+(data[i]['POSTALCODE']==''||data[i]['POSTALCODE']==null||typeof(data[i]['POSTALCODE'])=='undefined'?"":(",&nbsp;"+data[i]['POSTALCODE']))+'</a></li>');
	}
}
function addUlTypeList(ob, data){
	$("#"+ob).find("ul:first li:not(.init)").remove();
	for(var i in data){
		$("#"+ob).find("ul:first").append('<li><a href="javascript:void(0);" val="'+i+'">'+data[i]+'</a></li>');
	}
	$("#search_hidden_t").val("");
}
function removerecord(ob){
	if(ob instanceof Array){
		for(var i in ob){
			$("#"+ob[i]).find("ul:first li:not(.init)").remove();
			$("#"+ob[i]).find(".conditionselect span").text("不限");
		}
	}else{
		$("#"+ob).find("ul:first li:not(.init)").remove();
		$("#"+ob).find(".conditionselect span").text("不限");
	}
	$(".conditionselect_box ul").stop().slideUp("fast");
}
function return_searchfrom_s(){
	var arr = new Array();
	for(var i=0; i<$(".search_hidden").length; i++){
		if($(".search_hidden").eq(i).val() != '' && $(".search_hidden").eq(i).attr("id")!=="search_hidden_s"){
			if(!($(".search_hidden").eq(i).attr("name")=='t' && ($(".search_hidden").eq(i).val()=='0' || $(".search_hidden").eq(i).val()==''))){
				arr.push($(".search_hidden").eq(i).attr("name")+"-"+$(".search_hidden").eq(i).val());
			}
		}
	}
	if(arr.length>0){
		return arr.join("_");
	}else{
		return false;
	}
}
function return_searchfrom_action(CODE){
	if($('#engine_content_1').hasClass('show')){
		$(".keyword_select_box_text").val($("#imitate_keyword").val());
	}
	var s = return_searchfrom_s();
	var v = $('#search_hidden_v').val();
	var keyword = return_keyword_select_box_text_val();
	if(v =='' || typeof(v)=='undefined') v = 0;

	if(s===false && $("#search_hidden_s").val() == '' && keyword=='') return false;
	var action = ROOT_PATH + CODE + ($("#search_hidden_s").val()==1 ? "rentProperty":"property");
	if(s!==false)action += "/" + s + "/";
	if(keyword!='') {
		if(s!==false) action += keyword+'/';
		else action += "/v-"+v+"/" + keyword+'/';
	}
	return action;
}
function search_submit(CODE){
	var action = return_searchfrom_action(CODE);
	if(action!==false){
		$("form#search_condition_form").submit();
	}
}
function addCountryMap(){
	if($('#CODE').val()!='' && $('.header_map').length<1){
		if($('.header_Map').length<1){
			$.getJSON(ROOT_PATH + "?c=collect&a=addCountryMapCode&code="+$('#CODE').val(),function(json){
				if(json.result_code == 1){
					$(".searchConditionLeft .countrymaparea").children().remove();
					$(".searchConditionLeft .countrymaparea").append(json.data);
					if($('#region_select_box ul').attr('li_val')!==''){
						var li_val = $('#region_select_box ul').attr('li_val');
						$('.map_content').juwaimap(li_val);
					}else{
						$('.map_content').juwaimap();
					}
					$('.header_map area').bind('click',function(e){
						$("#region_select_box .conditionselect span").text($("#region_select_box li a[val="+$(this).attr('regionid')+"]").text());
						$(".search_hidden").val(''); $("#search_hidden_r").val($(this).attr('regionid'));
						removerecord(new Array("city_select_box","area_select_box"));
						if($(this).attr("val") != '' )$.getJSON(ROOT_PATH+"?c=collect&a=ajaxGetCityList&type=property&countryid="+$('#COUNTRYID').val()+"&id="+$(this).attr('regionid'),function(data){
							if(data.result == 1) addUlList("city_select_box", data.city);
						});
						e.preventDefault();
					});
				}
			});
		}
	}
}
function tabMenuSwitch(index){
	$(".tabMenu li a").removeClass("selected");
	$(".tabMenu li").eq(index).find("a").addClass("selected");
	$(".tabArea").hide();
	$("#tabArea"+index).show();
}

function logStats(propertyIDs, type, accountID) {
    try {
        var fingerPrint = new Fingerprint2();
    } catch(e) {
        if (!!console && typeof console.log === 'function') {
            console.log(e.message);
        }
    } finally {
        if ( $.cookie( 'internal_web_analytics_id' ) === undefined && fingerPrint ) {
            fingerPrint.get( function( result ) {
                if ( !$.cookie( 'internal_web_analytics_id' ) ) {
                    $.post('/?c=collect&a=setBrowerSignature', {'fingerprint': result}).always( function(){
                        postStats(propertyIDs, type, accountID);
                    });
                }
            });
        } else {
            postStats(propertyIDs, type, accountID);
        }
    }
}

function postStats(propertyIDs, type, accountID) {
	if(navigator.userAgent.indexOf('spider') !== -1) return false;

	if(!propertyIDs && !accountID){
		return false;
	}
	if('www.juwai.com' != window.location.hostname){
		var API = 'http://122.248.233.173/stats/';
	}else{
		var API = 'http://api.juwai.com/stats/';
	}
	var data = {property_ids: propertyIDs, stat_type: type, client_id: 1};
	if ( $.cookie( 'internal_web_analytics_id' ) ) {
	    data.internal_web_analytics_id = $.cookie( 'internal_web_analytics_id' );
	}
	if(accountID){
		data['account_id'] = accountID;
	}

    var utmData = getUtmData();
    if ( !$.isEmptyObject( data ) ) {
        data = $.extend( data, utmData );
    }

	$.post( API, data );
}

/**
 * Get query string by specify name
 *
 * @param {string} name
 * @param {string} queryString (Optional)
 * @returns {string|null}
 */
function getQueryString( name, queryString )
{
    var regex, matches;

    queryString = queryString || window.location.search.substr( 1 );
    regex = new RegExp( '(^|&)' + name + '=([^&]*)(&|$)' );
    matches = queryString.match( regex );

    if ( matches ) {
        return decodeURI( matches[2] );
    }

    return null;
}

/**
 * Get utm data from url
 *
 * @param queryString (Optional)
 * @returns {object}
 */
function getUtmData( queryString )
{
    var data = {}, offset,
        names = ['utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign' ];

    $.each( names, function( i, name ) {
        var value = getQueryString( name, queryString );
        if ( value !== null ) {
            data[ name ] = value;
        }
    });

    // Get referer utm data if empty
    if ( $.isEmptyObject( data ) && !queryString && document.referrer ) {
        offset = document.referrer.indexOf( '?' );
        if ( offset !== -1 ) {
            queryString = document.referrer.substr( offset + 1 );
            if (queryString) {
                return getUtmData( queryString );
            }
        }
    }

    return data;
}

// Send data from buyer's page to statistics DB.
//
// @see {@link http://jira.juwai.com/browse/JUW-1572%7CJira}
// @param {string}  statsType - Element that triggered the event
// @param {integer} accountID - User ID we want to send to the stats.
function buyerEnquiry( statsType, accountID ) {
    var propertyID = 0;
    var types = {
        'access':  26,
        'phone':   27,
        'address': 28,
        'enquiry': 29
    };
    var type = types[ statsType ];

    if ( !type ) {
        return;
    }

    logStats( propertyID, type, accountID );
}

function statisticsPropertyClick(obj){
	var url=$(obj)[0].href.match(/\/([0-9]+)\.htm$/);
	if($('#statistics_property_from').length<1){
		$('body').append('<form id="statistics_property_from" target="_blank" action="'+ROOT_PATH+url[1]+'.htm" method="post">'+
		'<input id="statistics_property_type" type="hidden" name="statistics_property_type" value="'+$(obj).attr('type')+'">'+
		'</form>');
		$('#statistics_property_from').submit();
	}else{
		$('#statistics_property_type').val($(obj).attr('type'));
		$('#statistics_property_from').attr({action: ROOT_PATH+url[1]+'.htm'});
		$('#statistics_property_from').submit();
	}

	return false;
}

function checkEmailAddress(email){
	return email.match(/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i);
}

function juwaiEnquiry(){
	try{ga('send', 'event', 'HP-Enquriy_open', 'open', {'nonInteraction': 1});}catch(e){}
	tb_show(null,ROOT_PATH+"?c=homemap&a=send_list&height=505&width=400&modal=true&auto_close=false&popf=juwaiEnquiry()",false);
	return false;
}
function htmlEncode(str) {
	var s = "";
	if (str.length == 0) {
		return "";
	}
	s = str.replace(/&/g, "&amp;");
	s = s.replace(/\</g, "&lt;");
	s = s.replace(/\>/g, "&gt;");
	s = s.replace(/'/g, "&apos;");
	s = s.replace(/"/g, '&quot;');
	s = s.replace(/(^\s*)|(\s*$)/g, "");
	return s;
}

function closeJuwaiAlert(callback){
	if(document.getElementById("TB_window")===null){
		$('#TB_overlay').remove();
	}
	$('#alert_confirm').remove();
	if(arguments[0]){
		callback();
	}
}

function juwaiAlert(msg,secs,callback,enversion){
	if(document.getElementById("TB_overlay")===null){
		$("body").append("<div id='TB_overlay'></div><div id='alert_confirm'></div>");
	}else{
		if(document.getElementById("alert_confirm")===null){
			$('body').append("<div id='alert_confirm'></div>");
		}
	}
	if(tb_detectMacXFF()){
		$("#TB_overlay").addClass("TB_overlayMacFFBGHack");
	}else{
		$("#TB_overlay").addClass("TB_overlayBG");
	}
	var secs = arguments[1] || 3; //倒计时的秒数
	var content = '<img src="' + STATIC_PATH + 'images/property_detail/btn_close_plain.png" class="cls_img" id="cls_img">';
	content+='<img src="' + STATIC_PATH + 'images/my_juwai/confirm_ok.png" class="ok_img">';
	if(msg != ''){
		content+='<h2>'+msg+'</h2>';
	}else{
		content+='<h2>&nbsp;</h2>';
	}
	if (arguments[3]) {
		var enversion = true;
	} else {
		var enversion = false;
	}
	if (enversion === true) {
	    content+='<h3>Close automatically in <span id="secs_num" style="color:red;">'+secs+'</span> seconds</h3>';
	    $("#alert_confirm").append(content).css("border-color","#333");
	} else {
        content+='<h3><span id="secs_num" style="color:red;">'+secs+'</span> 秒自动关闭</h3>';
	    $("#alert_confirm").append(content).css("border-color","#333");
    }
	if(arguments[2]){
		var call_fun = true;
	}
	else{
		var call_fun = false;
	}
	$('#cls_img').live('click',function(){
		if(call_fun){
			closeJuwaiAlert(callback);
		}
		else{
			closeJuwaiAlert();
		}
		return false;
	});
	for(var i= secs;i>=0;i--){
	   window.setTimeout('doUpdate(' + i +','+callback+ ')', (secs-i) * 1000);
	}
}

function doUpdate(num,callback){
	document.getElementById('secs_num').innerHTML = num;
	if(num == 0) {
		if(arguments[1]){
			closeJuwaiAlert(callback);
		}
		else{
			closeJuwaiAlert();
		}
	}
}

//alert($.cookie().PHPSESSID);
$(function(){
    if($(".stickybar").length>0&&$.cookie('stickybar')==undefined){
        $(".stickybar").slideDown(200,function(){
        	try{
              ga('send', 'event', 'Homepage_Stickybar_open', 'open', {'nonInteraction': 1});
        	}catch(e){

        	}
        });
	    $(".stickybar").find(".closebar").click(function(){
			var parent=$(this).parents(".stickybar");
			parent.slideUp(200);
			$.cookie('stickybar','open',{expires:365,path:'/'});
			try{
               ga('send', 'event', 'Homepage_Stickybar_close', 'click', {'nonInteraction': 1});
			}catch(e){

			}
		});
		$(".stickybar").find('.icons-qqlogin').click(function(){
			toQQLogin('bar');
		});
		$(".stickybar").find('.icons-weibologin').click(function(){
			toWeiBoLogin('bar');
		});
		$(".stickybar").find('.icons-login').click(function(event){
			//toWeiBoLogin('bar');
		    event.preventDefault();
		    try{ ga('send', 'event', 'Login_Stickybar_click', 'click', {'nonInteraction': 1});}
		    catch(e){}

			var url = ROOT_PATH+"?c=login&a=popLogin&height=400&width=760&modal=true";
            tb_show(null,url,false);
		});
		$(".stickybar").find('.link-register').find('a').click(function(event){
			//toWeiBoLogin('bar');
		    event.preventDefault();
		    try{ ga('send', 'event', 'register_Stickybar_click', 'click', {'nonInteraction': 1});}
		    catch(e){}

			var url = ROOT_PATH+"?c=login&a=popLogin&height=400&width=760&modal=true";

            //alert($("#login").length);

            tb_show(null,url,false,'_loaded');


		});
    }
	$('.js_cupertino').click(function(){
		us_news_report_open('cupertino');
	});
	$('.js_mountaincity').click(function(){
		us_news_report_open('mountaincity');
	});
	$('.js_whistler').click(function(){
		us_news_report_open('whistler');
	});
	$('.js_atherton').click(function(){
		us_news_report_open('atherton');
	});

    $( '.home_slider_content, .juwai_promotion2, .sliderDiv' )
    .find('a').click(function() {
        var categoty = $( this ).data( 'category' );
        var tag = $( this ).data( 'tag' );
        try{ ga('send', 'event', categoty, 'Click', tag); }
        catch(e){}
    });

    $('.addGaEvent').each(function() {
        var categoty = $( this ).parent().data( 'category' );
        var tag = $( this ).parent().data( 'tag' );
        try{ ga('send', 'event', categoty, 'Impression', tag); }
        catch(e){}
    });
});
//add enquiry-box for cupertino
function us_news_report_open(type){

	var _host='http://'+window.location.host;
    if(type=='cupertino'){
    	try{ga('send', 'event', 'Cupertino_Report_Detail_Click', 'Click');}catch(e){}
        var report_url = _host+'/?c=collect&a=property_report&guide=1&aid=&id=&width=696&height=420&iscupertino=true&page_type=Listing&country_code=US&popf=specific_report_open("cupertino")';
    }
    else if(type=='mountaincity'){
        try{ga('send', 'event', 'MountainCity_Report_Detail_Click', 'Click');}catch(e){}
        var report_url = _host+'/?c=collect&a=property_report&guide=1&aid=&id=&width=696&height=420&ismountain=true&page_type=Listing&country_code=US&popf=specific_report_open("mountaincity")';
    }
    else if(type=='whistler'){
        try{ga('send', 'event', 'Whistler_Report_Detail_Click', 'Click');}catch(e){}
        var report_url = _host+'/?c=collect&a=property_report&guide=1&aid=&id=&width=696&height=420&iswhistler=true&page_type=Listing&country_code=US&popf=specific_report_open("whistler")';
    }
    else if(type=='atherton'){
        try{ga('send', 'event', 'Atherton_Report_Detail_Click', 'Click');}catch(e){}
        var report_url = _host+'/?c=collect&a=property_report&guide=1&aid=&id=&width=696&height=420&isatherton=true&page_type=Listing&country_code=US&popf=specific_report_open("atherton")';
    }
    tb_show(null,report_url,false, 'resizePopSize');
}
//it's callback function of user click stickybar on 'quick register' link
 function _loaded(){
            	//alert($("#login").length);
            	setTimeout(function(){
            		$("#login").trigger('click');
            	},260);

            }
function update_interaction_num(update_type){
    var request_url = '/?c=collect&a=getInteractionNum&type='+update_type;
    $.ajax({
        type:'post',
        url:request_url,
        dataType:'json',
        success:function(msg){
            if(msg.favorite_num){
                $('.favorite_num').html(msg.favorite_num);
            }
            if(msg.enquiry_num){
                $('.enquiry_num').html(msg.enquiry_num);
            }
        }
    })
}
/*news ask open for news detail page*/
/*function news_ask_question_open(){

	tb_show(null,ROOT_PATH+"?c=property&a=enquiry_form&type=news_ask&height=559&width=779&modal=true&auto_close=false&popf=juwaiEnquiry()",false);
}*/
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }
    else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(function(){
        if(typeof ga ==='undefined'){
            ga=function(){}
        }
    })

/**
 * validate submit values, show tips
 * @param JQuery $block
 * @param JQuery $error
 * @param Object tip
 * @param RegExp regexp
 */
function keySubmit( $block, $error, tip, regexp ) {
    var value = $block.val().trim();

    if ( value === '' || value === tip.acquiesce ) {
        $error.show();
        $error.text( tip.mustIn );
        $block.val( tip.acquiesce );

        if ( typeof tip.moreClass !== 'undefined' ) {
            $block.addClass( tip.moreClass );
        }

        return false;
    }

    if ( typeof regexp === 'undefined' ) {
        $error.hide();

        return true;
    } else {
        if ( regexp.test( value ) ) {
            $error.hide();

            return true;
        } else {
            $error.show();
            $error.text( tip.formatWrong );

            return false;
        }
    }
}

/**
* bind input events, check input values
* @param JQuery $block
* @param JQuery $error
* @param Object tip
* @param RegExp regexp
*/
function checkInput( $block, $error, tip, regexp ) {
    $block.focus( function() {
        var value = $block.val().trim();

        if ( value === tip.acquiesce ) {
            $block.val( '' );

            if ( typeof tip.moreClass !== 'undefined' ) {
                $block.removeClass( tip.moreClass );
            }
        }
    } );
    $block.blur( function() {
        keySubmit( $block, $error, tip, regexp );
    } );
}
(function( JW ) {
    'use strict';

    /**
     * Create a new instance of Listhub.
     *
     * @see {@link https://app.listhub.com/tracking-docs/v3/query-string-params.html}
     *
     * 1. Create Listhub instance with `var myListing = new JW.Listhub({ … })`.
     * 2. Publish a listing event with `myListing.publish( 'EVENT_NAME' );`.
     * 3. Use image events like `myListing.publish( 'EVENT_NAME' ).load( … );`.
     *
     * @param {Object} options
     * @param {string} options.providerId - Metrics Provider Id
     * @param {string} options.listingKey - Listhub Listing Key
     * @constructor
     */
    JW.Listhub = function Listhub( options ) {
        // Always use `new` to benefit from prototype inheritance:
        // http://stackoverflow.com/a/383503
        if ( !( this instanceof JW.Listhub ) ) {
            return new JW.Listhub( options );
        }

        this.providerId = options.providerId;
        this.listingKey = options.listingKey;
    };

    /**
     * Set default values for any instance.
     *
     * @return {Listhub}
     */
    JW.Listhub.prototype.init = function init() {
        var listhub = this;

        // Version of the Listhub API we are using
        listhub.version = 3;

        // URL endpoint for the Listhub stats collection
        listhub.url = '//tracking.listhub.net/tracker';

        listhub.valid = {
            // https://app.listhub.com/tracking-docs/v3/supported-events.html
            eventNames: [
                'SEARCH_DISPLAY',
                'DETAIL_PAGE_VIEWED',
                'AGENT_EMAIL_SENT',
                'OFFICE_EMAIL_SENT',
                'AGENT_PHONE_CALL',
                'OFFICE_PHONE_CALL',
                'AGENT_WEBSITE_CLICKED',
                'OFFICE_WEBSITE_CLICKED',
                'LISTING_SAVED',
                'VIRTUAL_TOUR_CLICKED',
                'VIEWED_MORE_PHOTOS',
                'VIDEO_CLICKED',
                'PRINT_MEDIA_CLICKED',
                'PROPERTY_MAP_CLICKED',
                'DRIVING_DIRECTIONS_CLICKED',
                'SHARED_MOBILE',
                'SHARED_FACEBOOK',
                'SHARED_TWITTER',
                'SHARED_LINKEDIN',
                'SHARED_PINTEREST',
                'SHARED_GOOGLE_PLUS'
            ],

            providerId: [
                'M-3410', /* Sothebys */
                'M-3490'  /* Listhub */
            ]
        };

        return listhub;
    };

    /**
     * Populate an array of encoded data needed for stats.
     *
     * @param  {string} eventName - Event Name
     * @return {object}           - Parameters for the query, with encoded values (auto with jQuery).
     */
    JW.Listhub.prototype.prepareData = function prepareData( eventName ) {
        var listhub = this;

        // Encode some sensitive values for URL.
        var data = {
            'providerId': listhub.providerId,
            'eventName':  eventName,
            'eventStart': new Date().getTime(),
            'apiVersion': listhub.version,
            'eventPage':  window.location.href,
            'listingKey': listhub.listingKey,
            'clientId':   '',
            'userAgent':  window.navigator.userAgent
        };

        return {
            'mp': data.providerId,
            'ev': data.eventName,
            'et': data.eventStart,
            'v': data.apiVersion,
            'ep': data.eventPage,
            'lkey': data.listingKey,
            'clid': data.clientId,
            'ua': data.userAgent
        };
    };

    /**
     * Check the data can be published.
     *
     * @param  {string} eventName - Event Name
     * @return {boolean}
     */
    JW.Listhub.prototype.checkBeforePublish = function checkBeforePublish( eventName ) {
        var listhub = this;

        var userAgent = window.navigator.userAgent.toLowerCase();

        // Skip if the user-agent is likely to be a web crawler.
        if (
            userAgent.indexOf( 'spider' ) !== -1
            || userAgent.indexOf( 'crawl' ) !== -1
            || userAgent.indexOf( 'bot' ) !== -1
            || userAgent.indexOf( 'slurp' ) !== -1
        ) {
            return false;
        }

        // Throw an error if a required parameter is missing.
        if ( !( listhub.providerId && eventName && listhub.listingKey ) ) {
            throw( 'One of the required parameters is missing (mp, ev or lkey).' );
        }

        // Throw an error if the Event Name is invalid.
        if ( $.inArray( eventName, listhub.valid.eventNames ) === -1 ) {
            throw(
                eventName + ' is not a valid Event Name.'
                + ' It should be one of ' + listhub.valid.eventNames.join( ', ' ) + '.'
            );
        }

        // Throw an error if the Metrics Provider Id is invalid.
        if ( $.inArray( listhub.providerId, listhub.valid.providerId ) === -1 ) {
            throw(
                listhub.providerId + ' is not a valid Metrics Provider Id.'
                + ' It should be one of ' + listhub.valid.providerId.join( ', ' ) + '.'
            );
        }

        return true;
    };

    /**
     * Push event based stats to Listhub.
     *
     * @see {@link https://app.listhub.com/tracking-docs/v3/supported-events.html}
     *
     * @param  {string} eventName - Event Name
     * @return {Object}           - jqXHR Object (Promise)
     */
    JW.Listhub.prototype.publish = function publish( eventName ) {
        var listhub = this;

        var beacon = new Image() || document.createElement( 'img' );
        var data;

        // Only publish if everything we need is there.
        if ( !listhub.checkBeforePublish( eventName ) ) {
            return;
        }

        // Prepare data for the request sent to Listhub.
        data = listhub.prepareData( eventName );

        // Query the gif beacon from Listhub.
        beacon.src = listhub.url + '?' + $.param( data );

        return beacon;
    };
})( window.JW );

(function( JW ) {
    'use strict';

    /**
     * Create Enquiry.
     *
     * @constructor
     * @param {object} options
     * @param {string} options.id            - CSS selector for the `id` of the Enquiry.
     * @param {function} options.beforeSubmit - Callback before submit.
     * @param {function} options.submit - Callback submit.
     * @param {function} options.afterSubmit - Callback after submit.
     * @constructor
     */
    JW.Enquiry = function Enquiry( options ) {
        // Always use `new` to benefit from prototype inheritance:
        // http://stackoverflow.com/a/383503
        if ( !( this instanceof JW.Enquiry ) ) {
            return new JW.Enquiry( options );
        }

        this.$ = $( options.id );

        // Register callbacks.
        this.eventCallback = {
            beforeSubmit: options.beforeSubmit || null,
            submit:       options.submit || null,
            afterSubmit:  options.afterSubmit || null
        };
    };

    /**
     * Initialize the Enquiry.
     *
     * @return {Enquiry}
     */
    JW.Enquiry.prototype.init = function init() {
        this.$form = this.$.find( '.js-enquiry-form' );
        this.reset();

        // Bind submit event
        this.$form.submit( $.proxy( this.submit, this ) );
        this.$.find( '#js-enquiry-form_submit-button' ).click($.proxy( this.submit, this ));

        return this;
    };

    /**
     * Reset the form.
     *
     * @return {Enquiry}
     */
    JW.Enquiry.prototype.reset = function reset() {
        var enquiry = this;

        // Get the fields that need to be validated.
        this.$fields = this.$.find( '[data-validate]' );

        // If the form is submitting
        this.submitting = false;

        // Reset the input values after submit form.
        this.$form.get( 0 ).reset();

        this.$fields.each( function() {
            var $input = $( this );

            // Get validation methods, e.g. require|email.
            var validateMethods = $input.data( 'validate' ).split( '|' );

            // Some actions for the inputs with require validation method.
            if ( validateMethods.indexOf( 'require' ) !== -1 ) {
                // Add is-required class for the input without value.
                if ( $.trim( $input.val() ) === '' ) {
                    $input.addClass( 'is-required' );
                } else {
                    $input.removeClass( 'is-required' );
                }

                // Toggle is-required class for the field in keyup event.
                $input.keyup( function() {
                    if ( $.trim( $input.val() ) === '' ) {
                        $input.addClass( 'is-required' );
                    } else {
                        $input.removeClass( 'is-required' );
                    }
                } );
            }

            // Bind validate callback to blur event for the input.
            $input.blur( $.proxy( enquiry.validate, this, this ) )
        });

        return this;
    };

    /**
     * Validate the input in the form.
     *
     * @param {Object} input
     * @return {boolean}
     */
    JW.Enquiry.prototype.validate = function validate( input ) {
        var $input           = $( input );
        var value            = $.trim( $input.val() );
        var errorMessage     = '';
        var validateMethods  = $input.data( 'validate' ).split( '|' );
        var emailRegex       = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        var emailCantInclude = /@\btest\b.\bcom\b/g;
        var numericRegex     = /^\d{1,}$/;
        var numericRepeat    = /^(\d)\1{7,}$/;

        // Error message popup element
        var $errorHolder     = $input.siblings( '.c-enquiry-form__error' );

        // Handle require validation method
        if ( validateMethods.indexOf( 'require' ) !== -1 && value === '' ) {
            errorMessage = '务必填写';
        }

        // Handle email validation method
        if ( validateMethods.indexOf( 'email' ) !== -1 && value !== '' ) {
            if ( emailRegex.test( value ) === false ) {
                errorMessage = '请输入有效的邮件地址';
            }

            if ( errorMessage === '' && value.length < 6 ) {
                errorMessage = '请输入至少6位字符';
            }

            if ( errorMessage === '' && emailCantInclude.test( value.toLowerCase() ) === true ) {
                errorMessage = '请输入有效的邮件地址';
            }
        }

        // Handle numeric validation method
        if ( validateMethods.indexOf( 'numeric' ) !== -1 && value !== '' ) {
            if ( numericRegex.test( value ) === false || numericRepeat.test( value ) === true ) {
                errorMessage = '请输入有效的电话格式，中间无空格';
            }

            if ( errorMessage === '' && value.length < 8 ) {
                errorMessage = '请输入至少8位字符';
            }
        }

        if ( errorMessage === '' ) {
            if ( $errorHolder.length ) {
                $errorHolder.hide();
            }

            return true;
        }

        // Create error popup element if doesn't exist.
        if ( !$errorHolder.length ) {
            $errorHolder = $( '<p/>', {
                'class': 'c-enquiry-form__error'
            });

            $input.after( $errorHolder );
        }

        // Populate error message and popup.
        $errorHolder.html( errorMessage );
        $errorHolder.show();

        return false;
    };

    /**
     * Before submit the Enquiry form.
     */
    JW.Enquiry.prototype.beforeSubmit = function beforeSubmit() {
        var enquiry = this;
        var noError  = true;
        var description = enquiry.$.find( 'textarea[name="description"]' );

        // Validate all fields.
        enquiry.$fields.each( function() {
            noError = noError & enquiry.validate( this );
        });

        // Don't submit the form if errors exist or the form is submitting.
        if ( !noError || enquiry.submitting ) {
            return false;
        }

        // Set placeholder as value when description is null.
        if ( $.trim( description.val() ) === '' ) {
            description.val( description.attr( 'placeholder' ) );
        }

        return true;
    }
    /**
     * Submit the Enquiry form. Used for form submit callback.
     *
     * @return {boolean}
     */
    JW.Enquiry.prototype.submit = function submit() {
        var enquiry = this;

        if ( !enquiry.beforeSubmit() ) {
            return false;
        }

        // Call submit callback if specified.
        if ( enquiry.eventCallback.submit ) {
            enquiry.eventCallback.submit();
        }

        return false;
    };
})( window.JW );

function setDescriptionVal( selector ) {
    var description = $( selector ).find( '#enquiry_from_textarea' );
    var placeholder = description.attr( 'placeholder' );
    var descriptionDefault = $.trim( description.val() ) !== '' ? description.val() : placeholder;

    description.toggleClass( 'grey', true );

    description.blur(function () {
        if ( description.val().trim() === '' ) {
            description.val( descriptionDefault );
            description.toggleClass( 'grey', true );
        }
    });

    description.keyup(function () {
        description.toggleClass( 'grey', (description.val() === descriptionDefault) );
    });
}
