/*! infoc.js v 0.0.6 */
(function(){var h="other",m="other",l="PC";var k=navigator.platform,c=navigator.userAgent,b=window.location.href,q=window.location.search;var o="/";var n={"windows nt 5.0":"Win2000","windows 2000":"Win2000","windows nt 5.1":"WinXP","windows xp":"WinXP","windows nt 5.2":"Win2003","windows 2003":"Win2003","windows nt 6.0":"WinVista","windows vista":"WinVista","windows nt 6.1":"Win7","windows 7":"Win7","windows nt 6.2":"Win8","windows 8":"Win8","windows nt 6.3":"Win8.1","windows 8.1":"Win8.1"};var p={win32:n,windows:n,android:"Android",ipad:"iOS",iphone:"iOS",macintosh:"Mac",macIntel:"Mac",mac:"Mac",x11:"Unix",linux:"Linux"};function e(w){var v=[],r="0123456789abcdef",t,u;for(t=0;t<36;t++){v[t]=r.substr(Math.floor(Math.random()*16),1)}v[14]="4";v[19]=r.substr((v[19]&3)|8,1);if(w){u=v.join("").substr(0,32)}else{v[8]=v[13]=v[18]=v[23]="-";u=v.join("")}return u}function a(t){var s,r=[];if(typeof t==="object"){for(s in t){if(t.hasOwnProperty(s)){r.push(s+"="+encodeURIComponent(t[s]==null?"":t[s]+""))}}}return r.join("&")}function f(s){var r=new Image(0,0);r.onload=function(){r=null};r.src=s;if(r.complete){r=null}}function g(){var s=c.toLowerCase(),t,r;for(i in p){if(p.hasOwnProperty(i)&&s.indexOf(i)>-1){if(typeof p[i]==="object"){for(j in p[i]){if(p[i].hasOwnProperty(j)&&s.indexOf(j)>-1){m=p[i][j];break}}}else{m=p[i]}break}}if(m==="Mac"){l="Mac"}else{if(m==="iOS"){t=/iPad|iPhone/.exec(c);l=t&&t[0]||l}else{if(m==="Android"){l="Mobile"}}}t=/(chrome)[ \/]([\w.]+)/.exec(s)||/(webkit)[ \/]([\w.]+)/.exec(s)||/ms(ie)\s([\w.]+)/.exec(s)||/(firefox)[ \/]([\w.]+)/.exec(s)||[];if(t&&t[1]){if(t[1]==="ie"){r=/msie\s([\d\.]+)/.exec(s);h=t[1]+(r&&r[1]?parseInt(r[1]):"")}else{if(t[1]==="webkit"){h="Webkit";if(s.indexOf("safari")>-1&&(m==="iOS"||m==="MAC")){h="Safari"}}else{h=t[1].substr(0,1).toUpperCase()+t[1].substr(1)}}}}g();function d(r,s){this.setRoot(r);this.params={product_no:0,public_index:0,business_index:0};this.addParams(s);return this}d.prototype={root:"/",setRoot:function(r){this.root=r;return this},addParams:function(r){if(typeof r==="object"){for(i in r){if(r.hasOwnProperty(i)){if(typeof i==="string"||typeof i==="number"){this.params[i]=r[i]}}}}return this},report:function(u,t){if(typeof u!=="object"){return}var s,r;for(s in this.params){if(this.params.hasOwnProperty(s)){if(typeof u[s]==="undefined"){u[s]=this.params[s]}}}r=this.root+"?"+a(u);t=t==null?true:t;if(t){setTimeout(function(){f(r)},0)}else{f(r)}return this}};d.getDevice=function(){return{browser:h,system:m,device:l}};d.queryString=function(s){var u=0,w={},t,v,x,r=q?q.substr(1).split("&"):[];for(;u<r.length;u++){x=r[u].indexOf("=");if(x>0){t=r[u].substring(0,x);v=r[u].substring(x+1);w[t]=decodeURIComponent(v)}}return w[s]?w[s]:undefined};d.getUUID=function(s){var r=s?"infoc_client_uuid":"infoc_uuid";uuid=d.cookie(r);if(!uuid){uuid=e(s);d.cookie(r,uuid,{path:"/",expires:30*24*3600})}return uuid};window.Infoc=d})();(function(b){function a(c,d){return c!=null?a[d===b?"get":"set"].apply(null,arguments):b}a.get=function(f){var e,d,g,c;if(document.cookie){d=document.cookie.split("; ");for(g=0,c=d.length;g<c;g++){if(d[g].indexOf(f+"=")===0){e=decodeURIComponent(d[g].substr(f.length+1));break}}}return e};a.set=function(e,g,f){var c=[],d;f=f||{};if(g==null){g="";f.expires=-1}if(typeof f.expires==="number"){d=new Date();d.setTime(d.getTime()+f.expires*1000)}else{if(f.expires instanceof Date){d=f.expires}}c.push(e+"="+encodeURIComponent(g));d&&c.push("expires="+d.toUTCString());f.path&&c.push("path="+f.path);f.domain&&c.push("domain="+f.domain);f.secure&&c.push("secure");return document.cookie=c.join("; ")};Infoc.cookie=a})();