function net_jesta_md_kalkulacka_PerCentCalc(){var l=window,k=document,t=l.external,ab,w,q,p='',z={},db=[],F=[],o=[],C,E;if(!l.__gwt_stylesLoaded){l.__gwt_stylesLoaded={};}if(!l.__gwt_scriptsLoaded){l.__gwt_scriptsLoaded={};}function v(){try{return t&&(t.gwtOnLoad&&l.location.search.indexOf('gwt.hybrid')== -1);}catch(a){return false;}}
function y(){if(ab&&w){var c=k.getElementById('net.jesta.md.kalkulacka.PerCentCalc');var b=c.contentWindow;b.__gwt_initHandlers=net_jesta_md_kalkulacka_PerCentCalc.__gwt_initHandlers;if(v()){b.__gwt_getProperty=function(a){return r(a);};}net_jesta_md_kalkulacka_PerCentCalc=null;b.gwtOnLoad(C,'net.jesta.md.kalkulacka.PerCentCalc',p);}}
function s(){var j,h='__gwt_marker_net.jesta.md.kalkulacka.PerCentCalc',i;k.write('<script id="'+h+'"><\/script>');i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!='SCRIPT'){j=j.previousSibling;}function d(b){var a=b.lastIndexOf('/');return a>=0?b.substring(0,a+1):'';}
;if(j&&j.src){p=d(j.src);}if(p==''){var c=k.getElementsByTagName('base');if(c.length>0){p=c[c.length-1].href;}else{var g=k.location;var e=g.href;p=d(e.substr(0,e.length-g.hash.length));}}else if(p.match(/^\w+:\/\//)){}else{var f=k.createElement('img');f.src=p+'clear.cache.gif';p=d(f.src);}if(i){i.parentNode.removeChild(i);}}
function D(){var f=document.getElementsByTagName('meta');for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute('name'),b;if(h){if(h=='gwt:property'){b=e.getAttribute('content');if(b){var i,c=b.indexOf('=');if(c>=0){h=b.substring(0,c);i=b.substring(c+1);}else{h=b;i='';}z[h]=i;}}else if(h=='gwt:onPropertyErrorFn'){b=e.getAttribute('content');if(b){try{E=eval(b);}catch(a){alert('Bad handler "'+b+'" for "gwt:onPropertyErrorFn"');}}}else if(h=='gwt:onLoadErrorFn'){b=e.getAttribute('content');if(b){try{C=eval(b);}catch(a){alert('Bad handler "'+b+'" for "gwt:onLoadErrorFn"');}}}}}}
function n(a,b){return b in db[a];}
function m(a){var b=z[a];return b==null?null:b;}
function cb(d,e){var a=o;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[]);}a[d[c]]=e;}
function r(d){var e=F[d](),b=db[d];if(e in b){return e;}var a=[];for(var c in b){a[b[c]]=c;}if(E){E(d,a,e);}throw null;}
F['user.agent']=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2]);};if(d.indexOf('opera')!= -1){return 'opera';}else if(d.indexOf('webkit')!= -1){return 'safari';}else if(d.indexOf('msie')!= -1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return 'ie6';}}}else if(d.indexOf('gecko')!= -1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return 'gecko1_8';}return 'gecko';}return 'unknown';};db['user.agent']={'gecko':0,'gecko1_8':1,'ie6':2,'opera':3,'safari':4};net_jesta_md_kalkulacka_PerCentCalc.onInjectionDone=function(){ab=true;y();};net_jesta_md_kalkulacka_PerCentCalc.onScriptLoad=function(){w=true;y();};s();D();var bb;if(v()){bb='hosted.html?net_jesta_md_kalkulacka_PerCentCalc';}else{try{cb(['gecko1_8'],'09179643089201EEC9E223A6695E7145');cb(['safari'],'71FD1914060ACA7B2E5B84D6276A53BD');cb(['opera'],'D4CB49831305F1528B0EE52B6F84234E');cb(['ie6'],'F4B76C3536691C44C2373A1C16945E13');cb(['gecko'],'F9AF957AD06FBE77D83E1D4CD3AF5BCC');bb=o[r('user.agent')];}catch(a){return;}bb+='.cache.html';}var B;function A(){if(!q){q=true;y();if(k.removeEventListener){k.removeEventListener('DOMContentLoaded',A,false);}if(B){clearInterval(B);}}}
var u;function x(){if(!u){u=true;var a=k.createElement('iframe');a.src="javascript:''";a.id='net.jesta.md.kalkulacka.PerCentCalc';a.style.cssText='position:absolute;width:0;height:0;border:none';k.body.appendChild(a);a.src=p+bb;}}
if(k.addEventListener){k.addEventListener('DOMContentLoaded',function(){x();A();},false);}var B=setInterval(function(){if(/loaded|complete/.test(k.readyState)){x();A();}},50);k.write("<script>net_jesta_md_kalkulacka_PerCentCalc.onInjectionDone('net.jesta.md.kalkulacka.PerCentCalc')<\/script>");}
net_jesta_md_kalkulacka_PerCentCalc.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i();}finally{g&&g(a);}};d.onbeforeunload=function(a){var c,b;try{c=e();}finally{b=f&&f(a);}if(c!=null){return c;}if(b!=null){return b;}};d.onunload=function(a){try{j();}finally{h&&h(a);}};};net_jesta_md_kalkulacka_PerCentCalc();