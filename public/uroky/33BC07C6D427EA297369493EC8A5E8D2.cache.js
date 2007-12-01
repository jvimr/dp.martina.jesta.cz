(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,Cr='com.google.gwt.core.client.',Dr='com.google.gwt.lang.',Er='com.google.gwt.user.client.',Fr='com.google.gwt.user.client.impl.',as='com.google.gwt.user.client.ui.',bs='com.google.gwt.user.client.ui.impl.',cs='java.lang.',ds='java.util.',es='net.jesta.md.urokyStranka.client.';function Br(){}
function Dl(a){return this===a;}
function El(){return rm(this);}
function Bl(){}
_=Bl.prototype={};_.eQ=Dl;_.hC=El;_.tI=1;var r=null;function u(a){return a==null?0:a.$H?a.$H:(a.$H=w());}
function v(a){return a==null?0:a.$H?a.$H:(a.$H=w());}
function w(){return ++x;}
var x=0;function tm(b,a){a;return b;}
function sm(){}
_=sm.prototype=new Bl();_.tI=3;function Dk(b,a){tm(b,a);return b;}
function Ck(){}
_=Ck.prototype=new sm();_.tI=4;function am(b,a){Dk(b,a);return b;}
function Fl(){}
_=Fl.prototype=new Ck();_.tI=5;function z(c,b,a){am(c,'JavaScript '+b+' exception: '+a);return c;}
function y(){}
_=y.prototype=new Fl();_.tI=6;function D(b,a){if(!tb(a,2)){return false;}return bb(b,sb(a,2));}
function E(a){return u(a);}
function F(){return [];}
function ab(){return {};}
function cb(a){return D(this,a);}
function bb(a,b){return a===b;}
function db(){return E(this);}
function B(){}
_=B.prototype=new Bl();_.eQ=cb;_.hC=db;_.tI=7;function fb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function hb(a,b,c){return a[b]=c;}
function ib(b,a){return b[a];}
function kb(b,a){return b[a];}
function jb(a){return a.length;}
function mb(e,d,c,b,a){return lb(e,d,c,b,0,jb(b),a);}
function lb(j,i,g,c,e,a,b){var d,f,h;if((f=ib(c,e))<0){throw new ol();}h=fb(new eb(),f,ib(i,e),ib(g,e),j);++e;if(e<a){j=hm(j,1);for(d=0;d<f;++d){hb(h,d,lb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){hb(h,d,b);}}return h;}
function nb(f,e,c,g){var a,b,d;b=jb(g);d=fb(new eb(),b,e,c,f);for(a=0;a<b;++a){hb(d,a,kb(g,a));}return d;}
function ob(a,b,c){if(c!==null&&a.b!=0&& !tb(c,a.b)){throw new pk();}return hb(a,b,c);}
function eb(){}
_=eb.prototype=new Bl();_.tI=0;function rb(b,a){return !(!(b&&yb[b][a]));}
function sb(b,a){if(b!=null)rb(b.tI,a)||xb();return b;}
function tb(b,a){return b!=null&&rb(b.tI,a);}
function ub(a){return a&65535;}
function vb(a){return ~(~a);}
function xb(){throw new vk();}
function wb(a){if(a!==null){throw new vk();}return a;}
function zb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var yb;function Cb(a){if(tb(a,3)){return a;}return z(new y(),Eb(a),Db(a));}
function Db(a){return a.message;}
function Eb(a){return a.name;}
function ac(){ac=Br;Cc=Eo(new Co());{xc=new ce();he(xc);}}
function bc(b,a){ac();qe(xc,b,a);}
function cc(a,b){ac();return fe(xc,a,b);}
function dc(){ac();return se(xc,'button');}
function ec(){ac();return se(xc,'div');}
function fc(){ac();return te(xc,'text');}
function gc(a){ac();return ue(xc,a);}
function jc(b,a,d){ac();var c;c=r;{ic(b,a,d);}}
function ic(b,a,c){ac();var d;if(a===Bc){if(qc(b)==8192){Bc=null;}}d=hc;hc=b;try{c.x(b);}finally{hc=d;}}
function kc(b,a){ac();ve(xc,b,a);}
function lc(a){ac();return we(xc,a);}
function mc(a){ac();return xe(xc,a);}
function nc(a){ac();return ye(xc,a);}
function oc(a){ac();return ze(xc,a);}
function pc(a){ac();return Ae(xc,a);}
function qc(a){ac();return Be(xc,a);}
function rc(a){ac();me(xc,a);}
function sc(a){ac();return Ce(xc,a);}
function uc(a,b){ac();return Ee(xc,a,b);}
function tc(a,b){ac();return De(xc,a,b);}
function vc(a){ac();return Fe(xc,a);}
function wc(a){ac();return ne(xc,a);}
function yc(c,b,d,a){ac();af(xc,c,b,d,a);}
function zc(a){ac();var b,c;c=true;if(Cc.b>0){b=wb(cp(Cc,Cc.b-1));if(!(c=null.fb())){kc(a,true);rc(a);}}return c;}
function Ac(b,a){ac();bf(xc,b,a);}
function Dc(a,b,c){ac();df(xc,a,b,c);}
function Ec(a,b){ac();ef(xc,a,b);}
function Fc(a,b){ac();ff(xc,a,b);}
function ad(b,a,c){ac();gf(xc,b,a,c);}
function bd(a,b){ac();je(xc,a,b);}
var hc=null,xc=null,Bc=null,Cc;function ed(a){if(tb(a,4)){return cc(this,sb(a,4));}return D(zb(this,cd),a);}
function fd(){return E(zb(this,cd));}
function cd(){}
_=cd.prototype=new B();_.eQ=ed;_.hC=fd;_.tI=8;function jd(a){return D(zb(this,gd),a);}
function kd(){return E(zb(this,gd));}
function gd(){}
_=gd.prototype=new B();_.eQ=jd;_.hC=kd;_.tI=9;function qd(){qd=Br;sd=Eo(new Co());{rd();}}
function rd(){qd();wd(new md());}
var sd;function od(){while((qd(),sd).b>0){wb(cp((qd(),sd),0)).fb();}}
function pd(){return null;}
function md(){}
_=md.prototype=new Bl();_.E=od;_.F=pd;_.tI=10;function vd(){vd=Br;xd=Eo(new Co());Fd=Eo(new Co());{Bd();}}
function wd(a){vd();Fo(xd,a);}
function yd(){vd();var a,b;for(a=jn(xd);bn(a);){b=sb(cn(a),5);b.E();}}
function zd(){vd();var a,b,c,d;d=null;for(a=jn(xd);bn(a);){b=sb(cn(a),5);c=b.F();{d=c;}}return d;}
function Ad(){vd();var a,b;for(a=jn(Fd);bn(a);){b=wb(cn(a));null.fb();}}
function Bd(){vd();__gwt_initHandlers(function(){Ed();},function(){return Dd();},function(){Cd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function Cd(){vd();var a;a=r;{yd();}}
function Dd(){vd();var a;a=r;{return zd();}}
function Ed(){vd();var a;a=r;{Ad();}}
var xd,Fd;function qe(c,b,a){b.appendChild(a);}
function se(b,a){return $doc.createElement(a);}
function te(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function ue(c,a){var b;b=se(c,'select');if(a){cf(c,b,'multiple',true);}return b;}
function ve(c,b,a){b.cancelBubble=a;}
function we(b,a){return !(!a.altKey);}
function xe(b,a){return !(!a.ctrlKey);}
function ye(b,a){return a.which||(a.keyCode|| -1);}
function ze(b,a){return !(!a.metaKey);}
function Ae(b,a){return !(!a.shiftKey);}
function Be(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Ce(c,b){var a=$doc.getElementById(b);return a||null;}
function Ee(d,a,b){var c=a[b];return c==null?null:String(c);}
function De(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function Fe(b,a){return a.__eventBits||0;}
function af(e,d,b,f,a){var c=new Option(b,f);if(a== -1||a>d.options.length-1){d.add(c,null);}else{d.add(c,d.options[a]);}}
function bf(c,b,a){b.removeChild(a);}
function df(c,a,b,d){a[b]=d;}
function cf(c,a,b,d){a[b]=d;}
function ef(c,a,b){a.__listener=b;}
function ff(c,a,b){if(!b){b='';}a.innerHTML=b;}
function gf(c,b,a,d){b.style[a]=d;}
function ae(){}
_=ae.prototype=new Bl();_.tI=0;function me(b,a){a.preventDefault();}
function ne(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function oe(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){jc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!zc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)jc(b,a,c);};$wnd.__captureElem=null;}
function pe(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ke(){}
_=ke.prototype=new ae();_.tI=0;function fe(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function he(a){oe(a);ge(a);}
function ge(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function je(c,b,a){pe(c,b,a);ie(c,b,a);}
function ie(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function be(){}
_=be.prototype=new ke();_.tI=0;function ce(){}
_=ce.prototype=new be();_.tI=0;function Di(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function Ei(b,a){if(b.g!==null){Di(b,b.g,a);}b.g=a;}
function Fi(b,a){cj(b.g,a);}
function aj(a,b){dj(a.g,b);}
function bj(b,a){bd(b.g,a|vc(b.g));}
function cj(a,b){Dc(a,'className',b);}
function dj(a,b){a.style.display=b?'':'none';}
function Bi(){}
_=Bi.prototype=new Bl();_.tI=0;_.g=null;function xj(a){if(a.e){throw dl(new cl(),"Should only call onAttach when the widget is detached from the browser's document");}a.e=true;Ec(a.g,a);a.m();a.C();}
function yj(a){if(!a.e){throw dl(new cl(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.D();}finally{a.n();Ec(a.g,null);a.e=false;}}
function zj(a){if(a.f!==null){mf(a.f,a);}else if(a.f!==null){throw dl(new cl(),"This widget's parent does not implement HasWidgets");}}
function Aj(b,a){if(b.e){Ec(b.g,null);}Ei(b,a);if(b.e){Ec(a,b);}}
function Bj(c,b){var a;a=c.f;if(b===null){if(a!==null&&a.e){yj(c);}c.f=null;}else{if(a!==null){throw dl(new cl(),'Cannot set a new parent without first clearing the old parent');}c.f=b;if(b.e){xj(c);}}}
function Cj(){}
function Dj(){}
function Ej(a){}
function Fj(){}
function ak(){}
function bk(a){Aj(this,a);}
function ej(){}
_=ej.prototype=new Bi();_.m=Cj;_.n=Dj;_.x=Ej;_.C=Fj;_.D=ak;_.bb=bk;_.tI=11;_.e=false;_.f=null;function wh(b,a){Bj(a,b);}
function xh(b){var a;a=bg(b);while(jj(a)){kj(a);lj(a);}}
function zh(b,a){Bj(a,null);}
function Ah(){var a,b;for(b=this.u();jj(b);){a=kj(b);xj(a);}}
function Bh(){var a,b;for(b=this.u();jj(b);){a=kj(b);yj(a);}}
function Ch(){}
function Dh(){}
function vh(){}
_=vh.prototype=new ej();_.m=Ah;_.n=Bh;_.C=Ch;_.D=Dh;_.tI=12;function Df(a){a.a=oj(new fj(),a);}
function Ef(a){Df(a);return a;}
function Ff(c,a,b){zj(a);pj(c.a,a);bc(b,a.g);wh(c,a);}
function bg(a){return tj(a.a);}
function cg(b,c){var a;if(c.f!==b){return false;}zh(b,c);a=c.g;Ac(wc(a),a);vj(b.a,c);return true;}
function dg(){return bg(this);}
function Cf(){}
_=Cf.prototype=new vh();_.u=dg;_.tI=13;function jf(a){Ef(a);a.bb(ec());ad(a.g,'position','relative');ad(a.g,'overflow','hidden');return a;}
function kf(a,b){Ff(a,b,a.g);}
function mf(b,c){var a;a=cg(b,c);if(a){nf(c.g);}return a;}
function nf(a){ad(a,'left','');ad(a,'top','');ad(a,'position','');}
function hf(){}
_=hf.prototype=new Cf();_.tI=14;function gg(){gg=Br;lk(),nk;}
function fg(b,a){lk(),nk;ig(b,a);return b;}
function hg(b,a){switch(qc(a)){case 1:if(b.d!==null){Af(b.d,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function ig(b,a){Aj(b,a);bj(b,7041);}
function jg(a){if(this.d===null){this.d=yf(new xf());}Fo(this.d,a);}
function kg(a){hg(this,a);}
function lg(a){ig(this,a);}
function eg(){}
_=eg.prototype=new ej();_.h=jg;_.x=kg;_.bb=lg;_.tI=15;_.d=null;function rf(){rf=Br;lk(),nk;}
function qf(b,a){lk(),nk;fg(b,a);return b;}
function sf(b,a){Fc(b.g,a);}
function pf(){}
_=pf.prototype=new eg();_.tI=16;function vf(){vf=Br;lk(),nk;}
function tf(a){lk(),nk;qf(a,dc());wf(a.g);Fi(a,'gwt-Button');return a;}
function uf(b,a){lk(),nk;tf(b);sf(b,a);return b;}
function wf(b){vf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function of(){}
_=of.prototype=new pf();_.tI=17;function zm(d,a,b){var c;while(a.t()){c=a.w();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function Bm(a){throw wm(new vm(),'add');}
function Cm(b){var a;a=zm(this,this.u(),b);return a!==null;}
function ym(){}
_=ym.prototype=new Bl();_.j=Bm;_.l=Cm;_.tI=0;function hn(b,a){throw gl(new fl(),'Index: '+a+', Size: '+b.b);}
function jn(a){return Fm(new Em(),a);}
function kn(b,a){throw wm(new vm(),'add');}
function ln(a){this.i(this.db(),a);return true;}
function mn(e){var a,b,c,d,f;if(e===this){return true;}if(!tb(e,13)){return false;}f=sb(e,13);if(this.db()!=f.db()){return false;}c=jn(this);d=f.u();while(bn(c)){a=cn(c);b=cn(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function nn(){var a,b,c,d;c=1;a=31;b=jn(this);while(bn(b)){d=cn(b);c=31*c+(d===null?0:d.hC());}return c;}
function on(){return jn(this);}
function pn(a){throw wm(new vm(),'remove');}
function Dm(){}
_=Dm.prototype=new ym();_.i=kn;_.j=ln;_.eQ=mn;_.hC=nn;_.u=on;_.ab=pn;_.tI=18;function Do(a){{ap(a);}}
function Eo(a){Do(a);return a;}
function Fo(b,a){pp(b.a,b.b++,a);return true;}
function ap(a){a.a=F();a.b=0;}
function cp(b,a){if(a<0||a>=b.b){hn(b,a);}return lp(b.a,a);}
function dp(b,a){return ep(b,a,0);}
function ep(c,b,a){if(a<0){hn(c,a);}for(;a<c.b;++a){if(kp(b,lp(c.a,a))){return a;}}return (-1);}
function fp(c,a){var b;b=cp(c,a);np(c.a,a,1);--c.b;return b;}
function hp(a,b){if(a<0||a>this.b){hn(this,a);}gp(this.a,a,b);++this.b;}
function ip(a){return Fo(this,a);}
function gp(a,b,c){a.splice(b,0,c);}
function jp(a){return dp(this,a)!=(-1);}
function kp(a,b){return a===b||a!==null&&a.eQ(b);}
function mp(a){return cp(this,a);}
function lp(a,b){return a[b];}
function op(a){return fp(this,a);}
function np(a,c,b){a.splice(c,b);}
function pp(a,b,c){a[b]=c;}
function qp(){return this.b;}
function Co(){}
_=Co.prototype=new Dm();_.i=hp;_.j=ip;_.l=jp;_.r=mp;_.ab=op;_.db=qp;_.tI=19;_.a=null;_.b=0;function yf(a){Eo(a);return a;}
function Af(d,c){var a,b;for(a=jn(d);bn(a);){b=sb(cn(a),6);b.y(c);}}
function xf(){}
_=xf.prototype=new Co();_.tI=20;function jh(a){a.bb(ec());bj(a,131197);Fi(a,'gwt-Label');return a;}
function lh(a,b){ad(a.g,'whiteSpace',b?'normal':'nowrap');}
function mh(a){switch(qc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function ih(){}
_=ih.prototype=new ej();_.x=mh;_.tI=21;function ng(a){jh(a);a.bb(ec());bj(a,125);Fi(a,'gwt-HTML');return a;}
function og(b,a){ng(b);rg(b,a);return b;}
function pg(b,a,c){og(b,a);lh(b,c);return b;}
function rg(b,a){Fc(b.g,a);}
function mg(){}
_=mg.prototype=new ih();_.tI=22;function Cg(c,a,b){}
function Dg(c,a,b){}
function Eg(c,a,b){}
function Ag(){}
_=Ag.prototype=new Bl();_.z=Cg;_.A=Dg;_.B=Eg;_.tI=23;function ah(a){Eo(a);return a;}
function ch(f,e,b,d){var a,c;for(a=jn(f);bn(a);){c=sb(cn(a),7);c.z(e,b,d);}}
function dh(f,e,b,d){var a,c;for(a=jn(f);bn(a);){c=sb(cn(a),7);c.A(e,b,d);}}
function eh(f,e,b,d){var a,c;for(a=jn(f);bn(a);){c=sb(cn(a),7);c.B(e,b,d);}}
function fh(d,c,a){var b;b=gh(a);switch(qc(a)){case 128:ch(d,c,ub(nc(a)),b);break;case 512:eh(d,c,ub(nc(a)),b);break;case 256:dh(d,c,ub(nc(a)),b);break;}}
function gh(a){return (pc(a)?1:0)|(oc(a)?8:0)|(mc(a)?2:0)|(lc(a)?4:0);}
function Fg(){}
_=Fg.prototype=new Co();_.tI=24;function qh(){qh=Br;lk(),nk;}
function oh(b,a){lk(),nk;fg(b,gc(a));bj(b,1024);Fi(b,'gwt-ListBox');return b;}
function ph(b,a){sh(b,a,(-1));}
function rh(a){return tc(a.g,'selectedIndex');}
function sh(c,b,a){th(c,b,b,a);}
function th(c,b,d,a){yc(c.g,b,d,a);}
function uh(a){if(qc(a)==1024){}else{hg(this,a);}}
function nh(){}
_=nh.prototype=new eg();_.x=uh;_.tI=25;function ei(){ei=Br;ii=nq(new tp());}
function di(b,a){ei();jf(b);if(a===null){a=fi();}b.bb(a);xj(b);return b;}
function gi(c){ei();var a,b;b=sb(tq(ii,c),8);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=sc(c))){return null;}}if(ii.c==0){hi();}uq(ii,c,b=di(new Eh(),a));return b;}
function fi(){ei();return $doc.body;}
function hi(){ei();wd(new Fh());}
function Eh(){}
_=Eh.prototype=new hf();_.tI=26;var ii;function bi(){var a,b;for(b=co(ro((ei(),ii)));ko(b);){a=sb(lo(b),8);if(a.e){yj(a);}}}
function ci(){return null;}
function Fh(){}
_=Fh.prototype=new Bl();_.E=bi;_.F=ci;_.tI=27;function ui(){ui=Br;lk(),nk;}
function ri(b,a){lk(),nk;fg(b,a);bj(b,1024);return b;}
function si(b,a){if(b.c===null){b.c=ah(new Fg());}Fo(b.c,a);}
function ti(a){if(a.b!==null){rc(a.b);}}
function vi(a){return uc(a.g,'value');}
function wi(b,a){Dc(b.g,'value',a!==null?a:'');}
function xi(a){if(this.a===null){this.a=yf(new xf());}Fo(this.a,a);}
function yi(a){var b;hg(this,a);b=qc(a);if(this.c!==null&&(b&896)!=0){this.b=a;fh(this.c,this,a);this.b=null;}else if(b==1){if(this.a!==null){Af(this.a,this);}}else{}}
function qi(){}
_=qi.prototype=new eg();_.h=xi;_.x=yi;_.tI=28;_.a=null;_.b=null;_.c=null;function Ai(){Ai=Br;lk(),nk;}
function zi(a){lk(),nk;ri(a,fc());Fi(a,'gwt-TextBox');return a;}
function pi(){}
_=pi.prototype=new qi();_.tI=29;function oj(b,a){b.b=a;b.a=mb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[10],[4],null);return b;}
function pj(a,b){sj(a,b,a.c);}
function rj(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function sj(d,e,a){var b,c;if(a<0||a>d.c){throw new fl();}if(d.c==d.a.a){c=mb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[10],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ob(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){ob(d.a,b,d.a[b-1]);}ob(d.a,a,e);}
function tj(a){return hj(new gj(),a);}
function uj(c,b){var a;if(b<0||b>=c.c){throw new fl();}--c.c;for(a=b;a<c.c;++a){ob(c.a,a,c.a[a+1]);}ob(c.a,c.c,null);}
function vj(b,c){var a;a=rj(b,c);if(a==(-1)){throw new kr();}uj(b,a);}
function fj(){}
_=fj.prototype=new Bl();_.tI=0;_.a=null;_.b=null;_.c=0;function hj(b,a){b.b=a;return b;}
function jj(a){return a.a<a.b.c-1;}
function kj(a){if(a.a>=a.b.c){throw new kr();}return a.b.a[++a.a];}
function lj(a){if(a.a<0||a.a>=a.b.c){throw new cl();}mf(a.b.b,a.b.a[a.a--]);}
function mj(){return jj(this);}
function nj(){return kj(this);}
function gj(){}
_=gj.prototype=new Bl();_.t=mj;_.w=nj;_.tI=0;_.a=(-1);function lk(){lk=Br;mk=fk(new dk());nk=mk!==null?kk(new ck()):mk;}
function kk(a){lk();return a;}
function ck(){}
_=ck.prototype=new Bl();_.tI=0;var mk,nk;function gk(){gk=Br;lk();}
function ek(a){hk(a);ik(a);jk(a);}
function fk(a){gk();kk(a);ek(a);return a;}
function hk(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function ik(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function jk(a){return function(){this.firstChild.focus();};}
function dk(){}
_=dk.prototype=new ck();_.tI=0;function pk(){}
_=pk.prototype=new Fl();_.tI=30;function uk(a){return null!=String.fromCharCode(a).match(/\d/);}
function vk(){}
_=vk.prototype=new Fl();_.tI=31;function ul(){ul=Br;vl=nb('[Ljava.lang.String;',0,1,['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']);{Al();}}
function wl(a){ul();return isNaN(a);}
function xl(a){ul();var b;b=yl(a);if(wl(b)){throw sl(new rl(),'Unable to parse '+a);}return b;}
function yl(a){ul();if(zl.test(a)){return parseFloat(a);}else{return Number.NaN;}}
function Al(){ul();zl=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var vl,zl=null;function Ak(){Ak=Br;ul();}
function Bk(a){Ak();return xl(a);}
function al(b,a){am(b,a);return b;}
function Fk(){}
_=Fk.prototype=new Fl();_.tI=32;function dl(b,a){am(b,a);return b;}
function cl(){}
_=cl.prototype=new Fl();_.tI=33;function gl(b,a){am(b,a);return b;}
function fl(){}
_=fl.prototype=new Fl();_.tI=34;function jl(){jl=Br;ul();}
function kl(c){jl();var a,b;if(c==0){return '0';}a='';while(c!=0){b=vb(c)&15;a=vl[b]+a;c=c>>>4;}return a;}
function nl(a){return Math.round(a);}
function ol(){}
_=ol.prototype=new Fl();_.tI=35;function sl(b,a){al(b,a);return b;}
function rl(){}
_=rl.prototype=new Fk();_.tI=36;function em(g){var a=lm;if(!a){a=lm={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function fm(a){return a.length;}
function gm(c,b,d){var a=kl(b);return c.replace(RegExp('\\x'+a,'g'),String.fromCharCode(d));}
function hm(b,a){return b.substr(a,b.length-a);}
function im(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function jm(a,b){return String(a)==b;}
function km(a){if(!tb(a,1))return false;return jm(this,a);}
function mm(){return em(this);}
function nm(a){return ''+a;}
function om(a){return ''+a;}
_=String.prototype;_.eQ=km;_.hC=mm;_.tI=2;var lm=null;function rm(a){return v(a);}
function wm(b,a){am(b,a);return b;}
function vm(){}
_=vm.prototype=new Fl();_.tI=37;function Fm(b,a){b.c=a;return b;}
function bn(a){return a.a<a.c.db();}
function cn(a){if(!bn(a)){throw new kr();}return a.c.r(a.b=a.a++);}
function dn(a){if(a.b<0){throw new cl();}a.c.ab(a.b);a.a=a.b;a.b=(-1);}
function en(){return bn(this);}
function fn(){return cn(this);}
function Em(){}
_=Em.prototype=new Bl();_.t=en;_.w=fn;_.tI=0;_.a=0;_.b=(-1);function po(f,d,e){var a,b,c;for(b=iq(f.o());bq(b);){a=cq(b);c=a.p();if(d===null?c===null:d.eQ(c)){if(e){dq(b);}return a;}}return null;}
function qo(b){var a;a=b.o();return sn(new rn(),b,a);}
function ro(b){var a;a=sq(b);return ao(new Fn(),b,a);}
function so(a){return po(this,a,false)!==null;}
function to(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!tb(d,14)){return false;}f=sb(d,14);c=qo(this);e=f.v();if(!zo(c,e)){return false;}for(a=un(c);Bn(a);){b=Cn(a);h=this.s(b);g=f.s(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function uo(b){var a;a=po(this,b,false);return a===null?null:a.q();}
function vo(){var a,b,c;b=0;for(c=iq(this.o());bq(c);){a=cq(c);b+=a.hC();}return b;}
function wo(){return qo(this);}
function qn(){}
_=qn.prototype=new Bl();_.k=so;_.eQ=to;_.s=uo;_.hC=vo;_.v=wo;_.tI=38;function zo(e,b){var a,c,d;if(b===e){return true;}if(!tb(b,15)){return false;}c=sb(b,15);if(c.db()!=e.db()){return false;}for(a=c.u();a.t();){d=a.w();if(!e.l(d)){return false;}}return true;}
function Ao(a){return zo(this,a);}
function Bo(){var a,b,c;a=0;for(b=this.u();b.t();){c=b.w();if(c!==null){a+=c.hC();}}return a;}
function xo(){}
_=xo.prototype=new ym();_.eQ=Ao;_.hC=Bo;_.tI=39;function sn(b,a,c){b.a=a;b.b=c;return b;}
function un(b){var a;a=iq(b.b);return zn(new yn(),b,a);}
function vn(a){return this.a.k(a);}
function wn(){return un(this);}
function xn(){return this.b.a.c;}
function rn(){}
_=rn.prototype=new xo();_.l=vn;_.u=wn;_.db=xn;_.tI=40;function zn(b,a,c){b.a=c;return b;}
function Bn(a){return a.a.t();}
function Cn(b){var a;a=b.a.w();return a.p();}
function Dn(){return Bn(this);}
function En(){return Cn(this);}
function yn(){}
_=yn.prototype=new Bl();_.t=Dn;_.w=En;_.tI=0;function ao(b,a,c){b.a=a;b.b=c;return b;}
function co(b){var a;a=iq(b.b);return io(new ho(),b,a);}
function eo(a){return rq(this.a,a);}
function fo(){return co(this);}
function go(){return this.b.a.c;}
function Fn(){}
_=Fn.prototype=new ym();_.l=eo;_.u=fo;_.db=go;_.tI=0;function io(b,a,c){b.a=c;return b;}
function ko(a){return a.a.t();}
function lo(a){var b;b=a.a.w().q();return b;}
function mo(){return ko(this);}
function no(){return lo(this);}
function ho(){}
_=ho.prototype=new Bl();_.t=mo;_.w=no;_.tI=0;function pq(){pq=Br;wq=Cq();}
function mq(a){{oq(a);}}
function nq(a){pq();mq(a);return a;}
function oq(a){a.a=F();a.d=ab();a.b=zb(wq,B);a.c=0;}
function qq(b,a){if(tb(a,1)){return ar(b.d,sb(a,1))!==wq;}else if(a===null){return b.b!==wq;}else{return Fq(b.a,a,a.hC())!==wq;}}
function rq(a,b){if(a.b!==wq&&Eq(a.b,b)){return true;}else if(Bq(a.d,b)){return true;}else if(zq(a.a,b)){return true;}return false;}
function sq(a){return gq(new Dp(),a);}
function tq(c,a){var b;if(tb(a,1)){b=ar(c.d,sb(a,1));}else if(a===null){b=c.b;}else{b=Fq(c.a,a,a.hC());}return b===wq?null:b;}
function uq(c,a,d){var b;if(a!==null){b=dr(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=cr(c.a,a,d,em(a));}if(b===wq){++c.c;return null;}else{return b;}}
function vq(c,a){var b;if(tb(a,1)){b=fr(c.d,sb(a,1));}else if(a===null){b=c.b;c.b=zb(wq,B);}else{b=er(c.a,a,a.hC());}if(b===wq){return null;}else{--c.c;return b;}}
function xq(e,c){pq();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f]);}}}}
function yq(d,a){pq();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=xp(c.substring(1),e);a.j(b);}}}
function zq(f,h){pq();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(Eq(h,d)){return true;}}}}return false;}
function Aq(a){return qq(this,a);}
function Bq(c,d){pq();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(Eq(d,a)){return true;}}}return false;}
function Cq(){pq();}
function Dq(){return sq(this);}
function Eq(a,b){pq();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function br(a){return tq(this,a);}
function Fq(f,h,e){pq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.p();if(Eq(h,d)){return c.q();}}}}
function ar(b,a){pq();return b[':'+a];}
function cr(f,h,j,e){pq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.p();if(Eq(h,d)){var i=c.q();c.cb(j);return i;}}}else{a=f[e]=[];}var c=xp(h,j);a.push(c);}
function dr(c,a,d){pq();a=':'+a;var b=c[a];c[a]=d;return b;}
function er(f,h,e){pq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.p();if(Eq(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.q();}}}}
function fr(c,a){pq();a=':'+a;var b=c[a];delete c[a];return b;}
function tp(){}
_=tp.prototype=new qn();_.k=Aq;_.o=Dq;_.s=br;_.tI=41;_.a=null;_.b=null;_.c=0;_.d=null;var wq;function vp(b,a,c){b.a=a;b.b=c;return b;}
function xp(a,b){return vp(new up(),a,b);}
function yp(b){var a;if(tb(b,16)){a=sb(b,16);if(Eq(this.a,a.p())&&Eq(this.b,a.q())){return true;}}return false;}
function zp(){return this.a;}
function Ap(){return this.b;}
function Bp(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function Cp(a){var b;b=this.b;this.b=a;return b;}
function up(){}
_=up.prototype=new Bl();_.eQ=yp;_.p=zp;_.q=Ap;_.hC=Bp;_.cb=Cp;_.tI=42;_.a=null;_.b=null;function gq(b,a){b.a=a;return b;}
function iq(a){return Fp(new Ep(),a.a);}
function jq(c){var a,b,d;if(tb(c,16)){a=sb(c,16);b=a.p();if(qq(this.a,b)){d=tq(this.a,b);return Eq(a.q(),d);}}return false;}
function kq(){return iq(this);}
function lq(){return this.a.c;}
function Dp(){}
_=Dp.prototype=new xo();_.l=jq;_.u=kq;_.db=lq;_.tI=43;function Fp(c,b){var a;c.c=b;a=Eo(new Co());if(c.c.b!==(pq(),wq)){Fo(a,vp(new up(),null,c.c.b));}yq(c.c.d,a);xq(c.c.a,a);c.a=jn(a);return c;}
function bq(a){return bn(a.a);}
function cq(a){return a.b=sb(cn(a.a),16);}
function dq(a){if(a.b===null){throw dl(new cl(),'Must call next() before remove().');}else{dn(a.a);vq(a.c,a.b.p());a.b=null;}}
function eq(){return bq(this);}
function fq(){return cq(this);}
function Ep(){}
_=Ep.prototype=new Bl();_.t=eq;_.w=fq;_.tI=0;_.a=null;_.b=null;function kr(){}
_=kr.prototype=new Fl();_.tI=44;function wr(a){a.a=nb('[Ljava.lang.String;',0,1,[' 20 000 K\u010D',' 50 000 K\u010D','100 000 K\u010D','150 000 K\u010D','200 000 K\u010D','300 000 K\u010D','400 000 K\u010D','500 000 K\u010D']);a.b=nb('[I',0,(-1),[20000,50000,100000,150000,200000,300000,400000,500000]);}
function xr(a){wr(a);return a;}
function zr(c){var a,b;if(gi('q3_input_castka')!==null){c.c=oh(new nh(),false);kf(gi('q3_input_castka'),c.c);ph(c.c,'--- Vyberte ---');for(b=0;b<c.a.a;b++){ph(c.c,c.a[b]);}c.d=zi(new pi());kf(gi('q3_input_procenta'),c.d);if(gi('q3_ans')!==null){aj(gi('q3_ans'),false);}a=uf(new of(),'Vypo\u010Dti');if(gi('q3-input-vypocti')!==null){kf(gi('q3-input-vypocti'),a);}a.h(qr(new pr(),c));si(c.d,new tr());}}
function Ar(j){var a,c,d,e,f,g,h,i,k,l,m,n;f='\u010C\xE1stka, kterou byste m\u011Bli po roce zaplatit bance, \u010Din\xED ';g=' K\u010D a to je o ';h=' K\u010D ( o ';i=' %) v\xEDc ne\u017E p\u016Fvodn\xED \u010D\xE1stka.';c='???';d=0;if(rh(j.c)>0){d=j.b[rh(j.c)-1];c=om(d);}else{return;}l=0.0;if(vi(j.d)!==null&&fm(vi(j.d))>0){m=im(vi(j.d));m=gm(m,44,46);try{l=Bk(m);}catch(a){a=Cb(a);if(tb(a,17)){a;wi(j.d,'13.5');return;}else throw a;}}l=nl(l*100)/10000.0;if(l<=0.0){return;}if(l>10000){wi(j.d,'13.5');return;}k=l*d;n=k+d;wi(j.d,nm(l*100));e='\u010C\xE1stka, kterou byste m\u011Bli po roce zaplatit bance, \u010Din\xED '+nm(n)+' K\u010D a to je o '+nm(k)+' K\u010D ( o '+nm(l*100)+' %) v\xEDc ne\u017E p\u016Fvodn\xED \u010D\xE1stka.';if(gi('q3_ans')!==null){xh(gi('q3_ans'));kf(gi('q3_ans'),pg(new mg(),e,true));}aj(gi('q3_ans'),true);}
function or(){}
_=or.prototype=new Bl();_.tI=0;_.c=null;_.d=null;function qr(b,a){b.a=a;return b;}
function sr(a){if(gi('q3_ans')!==null){aj(gi('q3_ans'),false);}Ar(this.a);}
function pr(){}
_=pr.prototype=new Bl();_.y=sr;_.tI=45;function vr(c,a,b){if(!uk(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40&&a!=44&&a!=46){ti(sb(c,18));}}
function tr(){}
_=tr.prototype=new Ag();_.A=vr;_.tI=46;function ok(){zr(xr(new or()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{ok();}catch(a){b(d);}else{ok();}}
var yb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{13:1},{13:1},{13:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{7:1},{13:1},{9:1,10:1,11:1,12:1},{8:1,9:1,10:1,11:1,12:1},{5:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1,18:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1,17:1},{3:1},{14:1},{15:1},{15:1},{14:1},{16:1},{15:1},{3:1},{6:1},{7:1}];if (net_jesta_md_urokyStranka_UrokyStranka) {  var __gwt_initHandlers = net_jesta_md_urokyStranka_UrokyStranka.__gwt_initHandlers;  net_jesta_md_urokyStranka_UrokyStranka.onScriptLoad(gwtOnLoad);}})();