(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,js='com.google.gwt.core.client.',ks='com.google.gwt.lang.',ls='com.google.gwt.user.client.',ms='com.google.gwt.user.client.impl.',ns='com.google.gwt.user.client.ui.',os='com.google.gwt.user.client.ui.impl.',ps='java.lang.',qs='java.util.',rs='net.jesta.md.kalkulacka.client.';function is(){}
function cm(a){return this===a;}
function dm(){return zm(this);}
function am(){}
_=am.prototype={};_.eQ=cm;_.hC=dm;_.tI=1;var q=null;function t(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
function u(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
function v(){return ++w;}
var w=0;function z(b,a){if(!ob(a,2)){return false;}return D(b,nb(a,2));}
function A(a){return t(a);}
function B(){return [];}
function C(){return {};}
function E(a){return z(this,a);}
function D(a,b){return a===b;}
function F(){return A(this);}
function x(){}
_=x.prototype=new am();_.eQ=E;_.hC=F;_.tI=7;function bb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function db(a,b,c){return a[b]=c;}
function eb(b,a){return b[a];}
function fb(a){return a.length;}
function hb(e,d,c,b,a){return gb(e,d,c,b,0,fb(b),a);}
function gb(j,i,g,c,e,a,b){var d,f,h;if((f=eb(c,e))<0){throw new ul();}h=bb(new ab(),f,eb(i,e),eb(g,e),j);++e;if(e<a){j=pm(j,1);for(d=0;d<f;++d){db(h,d,gb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){db(h,d,b);}}return h;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !ob(c,a.b)){throw new yk();}return db(a,b,c);}
function ab(){}
_=ab.prototype=new am();_.tI=0;function lb(b,a){return !(!(b&&sb[b][a]));}
function mb(a){return String.fromCharCode(a);}
function nb(b,a){if(b!=null)lb(b.tI,a)||rb();return b;}
function ob(b,a){return b!=null&&lb(b.tI,a);}
function pb(a){return a&65535;}
function rb(){throw new Ek();}
function qb(a){if(a!==null){throw new Ek();}return a;}
function tb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var sb;function xb(){xb=is;uc=gp(new ep());{qc=new Cd();ae(qc);}}
function yb(b,a){xb();je(qc,b,a);}
function zb(a,b){xb();return Ed(qc,a,b);}
function Ab(){xb();return le(qc,'button');}
function Bb(){xb();return le(qc,'div');}
function Cb(){xb();return me(qc,'text');}
function Db(){xb();return le(qc,'tbody');}
function Eb(){xb();return le(qc,'td');}
function Fb(){xb();return le(qc,'tr');}
function ac(){xb();return le(qc,'table');}
function dc(b,a,d){xb();var c;c=q;{cc(b,a,d);}}
function cc(b,a,c){xb();var d;if(a===tc){if(kc(b)==8192){tc=null;}}d=bc;bc=b;try{c.z(b);}finally{bc=d;}}
function ec(b,a){xb();ne(qc,b,a);}
function fc(a){xb();return oe(qc,a);}
function gc(a){xb();return pe(qc,a);}
function hc(a){xb();return qe(qc,a);}
function ic(a){xb();return re(qc,a);}
function jc(a){xb();return se(qc,a);}
function kc(a){xb();return te(qc,a);}
function lc(a){xb();fe(qc,a);}
function mc(a){xb();return ue(qc,a);}
function nc(a,b){xb();return ve(qc,a,b);}
function oc(a){xb();return we(qc,a);}
function pc(a){xb();return ge(qc,a);}
function rc(a){xb();var b,c;c=true;if(uc.b>0){b=qb(kp(uc,uc.b-1));if(!(c=null.ib())){ec(a,true);lc(a);}}return c;}
function sc(b,a){xb();xe(qc,b,a);}
function xc(a,b,c){xb();Ae(qc,a,b,c);}
function vc(a,b,c){xb();ye(qc,a,b,c);}
function wc(a,b,c){xb();ze(qc,a,b,c);}
function yc(a,b){xb();Be(qc,a,b);}
function zc(a,b){xb();Ce(qc,a,b);}
function Ac(a,b){xb();De(qc,a,b);}
function Bc(b,a,c){xb();Ee(qc,b,a,c);}
function Cc(a,b){xb();ce(qc,a,b);}
var bc=null,qc=null,tc=null,uc;function Fc(a){if(ob(a,4)){return zb(this,nb(a,4));}return z(tb(this,Dc),a);}
function ad(){return A(tb(this,Dc));}
function Dc(){}
_=Dc.prototype=new x();_.eQ=Fc;_.hC=ad;_.tI=8;function ed(a){return z(tb(this,bd),a);}
function fd(){return A(tb(this,bd));}
function bd(){}
_=bd.prototype=new x();_.eQ=ed;_.hC=fd;_.tI=9;function ld(){ld=is;nd=gp(new ep());{md();}}
function md(){ld();rd(new hd());}
var nd;function jd(){while((ld(),nd).b>0){qb(kp((ld(),nd),0)).ib();}}
function kd(){return null;}
function hd(){}
_=hd.prototype=new am();_.ab=jd;_.bb=kd;_.tI=10;function qd(){qd=is;sd=gp(new ep());Ad=gp(new ep());{wd();}}
function rd(a){qd();hp(sd,a);}
function td(){qd();var a,b;for(a=rn(sd);kn(a);){b=nb(ln(a),5);b.ab();}}
function ud(){qd();var a,b,c,d;d=null;for(a=rn(sd);kn(a);){b=nb(ln(a),5);c=b.bb();{d=c;}}return d;}
function vd(){qd();var a,b;for(a=rn(Ad);kn(a);){b=qb(ln(a));null.ib();}}
function wd(){qd();__gwt_initHandlers(function(){zd();},function(){return yd();},function(){xd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function xd(){qd();var a;a=q;{td();}}
function yd(){qd();var a;a=q;{return ud();}}
function zd(){qd();var a;a=q;{vd();}}
var sd,Ad;function je(c,b,a){b.appendChild(a);}
function le(b,a){return $doc.createElement(a);}
function me(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function ne(c,b,a){b.cancelBubble=a;}
function oe(b,a){return !(!a.altKey);}
function pe(b,a){return !(!a.ctrlKey);}
function qe(b,a){return a.which||(a.keyCode|| -1);}
function re(b,a){return !(!a.metaKey);}
function se(b,a){return !(!a.shiftKey);}
function te(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function ue(c,b){var a=$doc.getElementById(b);return a||null;}
function ve(d,a,b){var c=a[b];return c==null?null:String(c);}
function we(b,a){return a.__eventBits||0;}
function xe(c,b,a){b.removeChild(a);}
function Ae(c,a,b,d){a[b]=d;}
function ye(c,a,b,d){a[b]=d;}
function ze(c,a,b,d){a[b]=d;}
function Be(c,a,b){a.__listener=b;}
function Ce(c,a,b){if(!b){b='';}a.innerHTML=b;}
function De(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function Ee(c,b,a,d){b.style[a]=d;}
function Bd(){}
_=Bd.prototype=new am();_.tI=0;function fe(b,a){a.preventDefault();}
function ge(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function he(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){dc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!rc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)dc(b,a,c);};$wnd.__captureElem=null;}
function ie(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function de(){}
_=de.prototype=new Bd();_.tI=0;function Ed(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function ae(a){he(a);Fd(a);}
function Fd(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function ce(c,b,a){ie(c,b,a);be(c,b,a);}
function be(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function Cd(){}
_=Cd.prototype=new de();_.tI=0;function Fi(b,a){aj(b,cj(b)+mb(45)+a);}
function aj(b,a){nj(b.i,a,true);}
function cj(a){return lj(a.i);}
function dj(b,a){ej(b,cj(b)+mb(45)+a);}
function ej(b,a){nj(b.i,a,false);}
function fj(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function gj(b,a){if(b.i!==null){fj(b,b.i,a);}b.i=a;}
function hj(b,a){mj(b.i,a);}
function ij(a,b){Bc(a.i,'width',b);}
function jj(b,a){Cc(b.i,a|oc(b.i));}
function kj(a){return nc(a,'className');}
function lj(a){var b,c;b=kj(a);c=lm(b,32);if(c>=0){return qm(b,0,c);}return b;}
function mj(a,b){xc(a,'className',b);}
function nj(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw fm(new em(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=rm(j);if(om(j)==0){throw jl(new il(),'Style names cannot be empty');}i=kj(c);e=mm(i,j);while(e!=(-1)){if(e==0||im(i,e-1)==32){f=e+om(j);g=om(i);if(f==g||f<g&&im(i,f)==32){break;}}e=nm(i,j,e+1);}if(a){if(e==(-1)){if(om(i)>0){i+=' ';}xc(c,'className',i+j);}}else{if(e!=(-1)){b=rm(qm(i,0,e));d=rm(pm(i,e+om(j)));if(om(b)==0){h=d;}else if(om(d)==0){h=b;}else{h=b+' '+d;}xc(c,'className',h);}}}
function Ei(){}
_=Ei.prototype=new am();_.tI=0;_.i=null;function hk(a){if(a.g){throw ml(new ll(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;yc(a.i,a);a.o();a.E();}
function ik(a){if(!a.g){throw ml(new ll(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.F();}finally{a.p();yc(a.i,null);a.g=false;}}
function jk(a){if(a.h!==null){a.h.db(a);}else if(a.h!==null){throw ml(new ll(),"This widget's parent does not implement HasWidgets");}}
function kk(b,a){if(b.g){yc(b.i,null);}gj(b,a);if(b.g){yc(a,b);}}
function lk(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){ik(c);}c.h=null;}else{if(a!==null){throw ml(new ll(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){hk(c);}}}
function mk(){}
function nk(){}
function ok(a){}
function pk(){}
function qk(){}
function rk(a){kk(this,a);}
function vj(){}
_=vj.prototype=new Ei();_.o=mk;_.p=nk;_.z=ok;_.E=pk;_.F=qk;_.eb=rk;_.tI=11;_.g=false;_.h=null;function yh(b,a){lk(a,b);}
function Ah(b,a){lk(a,null);}
function Bh(){var a,b;for(b=this.w();Aj(b);){a=Bj(b);hk(a);}}
function Ch(){var a,b;for(b=this.w();Aj(b);){a=Bj(b);ik(a);}}
function Dh(){}
function Eh(){}
function xh(){}
_=xh.prototype=new vj();_.o=Bh;_.p=Ch;_.E=Dh;_.F=Eh;_.tI=12;function Bf(a){a.f=Ej(new wj(),a);}
function Cf(a){Bf(a);return a;}
function Df(c,a,b){jk(a);Fj(c.f,a);yb(b,a.i);yh(c,a);}
function Ff(b,c){var a;if(c.h!==b){return false;}Ah(b,c);a=c.i;sc(pc(a),a);fk(b.f,c);return true;}
function ag(){return dk(this.f);}
function bg(a){return Ff(this,a);}
function Af(){}
_=Af.prototype=new xh();_.w=ag;_.db=bg;_.tI=13;function af(a){Cf(a);a.eb(Bb());Bc(a.i,'position','relative');Bc(a.i,'overflow','hidden');return a;}
function bf(a,b){Df(a,b,a.i);}
function df(a){Bc(a,'left','');Bc(a,'top','');Bc(a,'position','');}
function ef(b){var a;a=Ff(this,b);if(a){df(b.i);}return a;}
function Fe(){}
_=Fe.prototype=new Af();_.db=ef;_.tI=14;function eg(){eg=is;uk(),wk;}
function dg(b,a){uk(),wk;gg(b,a);return b;}
function fg(b,a){switch(kc(a)){case 1:if(b.d!==null){yf(b.d,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function gg(b,a){kk(b,a);jj(b,7041);}
function hg(a){if(this.d===null){this.d=wf(new vf());}hp(this.d,a);}
function ig(a){fg(this,a);}
function jg(a){gg(this,a);}
function cg(){}
_=cg.prototype=new vj();_.j=hg;_.z=ig;_.eb=jg;_.tI=15;_.d=null;function jf(){jf=is;uk(),wk;}
function hf(b,a){uk(),wk;dg(b,a);return b;}
function kf(b,a){zc(b.i,a);}
function gf(){}
_=gf.prototype=new cg();_.tI=16;function nf(){nf=is;uk(),wk;}
function lf(a){uk(),wk;hf(a,Ab());of(a.i);hj(a,'gwt-Button');return a;}
function mf(b,a){uk(),wk;lf(b);kf(b,a);return b;}
function of(b){nf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function ff(){}
_=ff.prototype=new gf();_.tI=17;function qf(a){Cf(a);a.e=ac();a.d=Db();yb(a.e,a.d);a.eb(a.e);return a;}
function sf(c,b,a){xc(b,'align',a.a);}
function tf(c,b,a){Bc(b,'verticalAlign',a.a);}
function pf(){}
_=pf.prototype=new Af();_.tI=18;_.d=null;_.e=null;function bn(d,a,b){var c;while(a.v()){c=a.y();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function dn(a){throw Em(new Dm(),'add');}
function en(b){var a;a=bn(this,this.w(),b);return a!==null;}
function an(){}
_=an.prototype=new am();_.l=dn;_.n=en;_.tI=0;function qn(b,a){throw pl(new ol(),'Index: '+a+', Size: '+b.b);}
function rn(a){return hn(new gn(),a);}
function sn(b,a){throw Em(new Dm(),'add');}
function tn(a){this.k(this.gb(),a);return true;}
function un(e){var a,b,c,d,f;if(e===this){return true;}if(!ob(e,13)){return false;}f=nb(e,13);if(this.gb()!=f.gb()){return false;}c=rn(this);d=f.w();while(kn(c)){a=ln(c);b=ln(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function vn(){var a,b,c,d;c=1;a=31;b=rn(this);while(kn(b)){d=ln(b);c=31*c+(d===null?0:d.hC());}return c;}
function wn(){return rn(this);}
function xn(a){throw Em(new Dm(),'remove');}
function fn(){}
_=fn.prototype=new an();_.k=sn;_.l=tn;_.eQ=un;_.hC=vn;_.w=wn;_.cb=xn;_.tI=19;function fp(a){{ip(a);}}
function gp(a){fp(a);return a;}
function hp(b,a){xp(b.a,b.b++,a);return true;}
function ip(a){a.a=B();a.b=0;}
function kp(b,a){if(a<0||a>=b.b){qn(b,a);}return tp(b.a,a);}
function lp(b,a){return mp(b,a,0);}
function mp(c,b,a){if(a<0){qn(c,a);}for(;a<c.b;++a){if(sp(b,tp(c.a,a))){return a;}}return (-1);}
function np(c,a){var b;b=kp(c,a);vp(c.a,a,1);--c.b;return b;}
function pp(a,b){if(a<0||a>this.b){qn(this,a);}op(this.a,a,b);++this.b;}
function qp(a){return hp(this,a);}
function op(a,b,c){a.splice(b,0,c);}
function rp(a){return lp(this,a)!=(-1);}
function sp(a,b){return a===b||a!==null&&a.eQ(b);}
function up(a){return kp(this,a);}
function tp(a,b){return a[b];}
function wp(a){return np(this,a);}
function vp(a,c,b){a.splice(c,b);}
function xp(a,b,c){a[b]=c;}
function yp(){return this.b;}
function ep(){}
_=ep.prototype=new fn();_.k=pp;_.l=qp;_.n=rp;_.t=up;_.cb=wp;_.gb=yp;_.tI=20;_.a=null;_.b=0;function wf(a){gp(a);return a;}
function yf(d,c){var a,b;for(a=rn(d);kn(a);){b=nb(ln(a),6);b.A(c);}}
function vf(){}
_=vf.prototype=new ep();_.tI=21;function qg(){qg=is;og(new ng(),'center');rg=og(new ng(),'left');og(new ng(),'right');}
var rg;function og(b,a){b.a=a;return b;}
function ng(){}
_=ng.prototype=new am();_.tI=0;_.a=null;function xg(){xg=is;vg(new ug(),'bottom');vg(new ug(),'middle');yg=vg(new ug(),'top');}
var yg;function vg(a,b){a.a=b;return a;}
function ug(){}
_=ug.prototype=new am();_.tI=0;_.a=null;function Cg(a){a.a=(qg(),rg);a.c=(xg(),yg);}
function Dg(a){qf(a);Cg(a);a.b=Fb();yb(a.d,a.b);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function Eg(b,c){var a;a=ah(b);yb(b.b,a);Df(b,c,a);}
function ah(b){var a;a=Eb();sf(b,a,b.a);tf(b,a,b.c);return a;}
function bh(c){var a,b;b=pc(c.i);a=Ff(this,c);if(a){sc(this.b,b);}return a;}
function Bg(){}
_=Bg.prototype=new pf();_.db=bh;_.tI=22;_.b=null;function fh(c,a,b){}
function gh(c,a,b){}
function hh(c,a,b){}
function dh(){}
_=dh.prototype=new am();_.B=fh;_.C=gh;_.D=hh;_.tI=23;function jh(a){gp(a);return a;}
function lh(f,e,b,d){var a,c;for(a=rn(f);kn(a);){c=nb(ln(a),7);c.B(e,b,d);}}
function mh(f,e,b,d){var a,c;for(a=rn(f);kn(a);){c=nb(ln(a),7);c.C(e,b,d);}}
function nh(f,e,b,d){var a,c;for(a=rn(f);kn(a);){c=nb(ln(a),7);c.D(e,b,d);}}
function oh(d,c,a){var b;b=ph(a);switch(kc(a)){case 128:lh(d,c,pb(hc(a)),b);break;case 512:nh(d,c,pb(hc(a)),b);break;case 256:mh(d,c,pb(hc(a)),b);break;}}
function ph(a){return (jc(a)?1:0)|(ic(a)?8:0)|(gc(a)?2:0)|(fc(a)?4:0);}
function ih(){}
_=ih.prototype=new ep();_.tI=24;function sh(a){a.eb(Bb());jj(a,131197);hj(a,'gwt-Label');return a;}
function th(b,a){sh(b);vh(b,a);return b;}
function vh(b,a){Ac(b.i,a);}
function wh(a){switch(kc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function rh(){}
_=rh.prototype=new vj();_.z=wh;_.tI=25;function fi(){fi=is;ji=vq(new Bp());}
function ei(b,a){fi();af(b);if(a===null){a=gi();}b.eb(a);hk(b);return b;}
function hi(c){fi();var a,b;b=nb(Bq(ji,c),8);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=mc(c))){return null;}}if(ji.c==0){ii();}Cq(ji,c,b=ei(new Fh(),a));return b;}
function gi(){fi();return $doc.body;}
function ii(){fi();rd(new ai());}
function Fh(){}
_=Fh.prototype=new Fe();_.tI=26;var ji;function ci(){var a,b;for(b=lo(zo((fi(),ji)));so(b);){a=nb(to(b),8);if(a.g){ik(a);}}}
function di(){return null;}
function ai(){}
_=ai.prototype=new am();_.ab=ci;_.bb=di;_.tI=27;function vi(){vi=is;uk(),wk;}
function si(b,a){uk(),wk;dg(b,a);jj(b,1024);return b;}
function ti(b,a){if(b.c===null){b.c=jh(new ih());}hp(b.c,a);}
function ui(a){if(a.b!==null){lc(a.b);}}
function wi(a){return nc(a.i,'value');}
function xi(c,a){var b;vc(c.i,'readOnly',a);b='readonly';if(a){Fi(c,b);}else{dj(c,b);}}
function yi(b,a){xc(b.i,'value',a!==null?a:'');}
function zi(a){if(this.a===null){this.a=wf(new vf());}hp(this.a,a);}
function Ai(a){var b;fg(this,a);b=kc(a);if(this.c!==null&&(b&896)!=0){this.b=a;oh(this.c,this,a);this.b=null;}else if(b==1){if(this.a!==null){yf(this.a,this);}}else{}}
function ri(){}
_=ri.prototype=new cg();_.j=zi;_.z=Ai;_.tI=28;_.a=null;_.b=null;_.c=null;function Ci(){Ci=is;uk(),wk;}
function Bi(a){uk(),wk;si(a,Cb());hj(a,'gwt-TextBox');return a;}
function Di(b,a){wc(b.i,'size',a);}
function qi(){}
_=qi.prototype=new ri();_.tI=29;function pj(a){a.a=(qg(),rg);a.b=(xg(),yg);}
function qj(a){qf(a);pj(a);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function rj(b,d){var a,c;c=Fb();a=tj(b);yb(c,a);yb(b.d,c);Df(b,d,a);}
function tj(b){var a;a=Eb();sf(b,a,b.a);tf(b,a,b.b);return a;}
function uj(c){var a,b;b=pc(c.i);a=Ff(this,c);if(a){sc(this.d,pc(b));}return a;}
function oj(){}
_=oj.prototype=new pf();_.db=uj;_.tI=30;function Ej(b,a){b.a=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[10],[4],null);return b;}
function Fj(a,b){ck(a,b,a.b);}
function bk(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function ck(d,e,a){var b,c;if(a<0||a>d.b){throw new ol();}if(d.b==d.a.a){c=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[10],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function dk(a){return yj(new xj(),a);}
function ek(c,b){var a;if(b<0||b>=c.b){throw new ol();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function fk(b,c){var a;a=bk(b,c);if(a==(-1)){throw new sr();}ek(b,a);}
function wj(){}
_=wj.prototype=new am();_.tI=0;_.a=null;_.b=0;function yj(b,a){b.b=a;return b;}
function Aj(a){return a.a<a.b.b-1;}
function Bj(a){if(a.a>=a.b.b){throw new sr();}return a.b.a[++a.a];}
function Cj(){return Aj(this);}
function Dj(){return Bj(this);}
function xj(){}
_=xj.prototype=new am();_.v=Cj;_.y=Dj;_.tI=0;_.a=(-1);function uk(){uk=is;vk=tk(new sk());wk=vk;}
function tk(a){uk();return a;}
function sk(){}
_=sk.prototype=new am();_.tI=0;var vk,wk;function Bm(b,a){a;return b;}
function Am(){}
_=Am.prototype=new am();_.tI=3;function gl(b,a){Bm(b,a);return b;}
function fl(){}
_=fl.prototype=new Am();_.tI=4;function fm(b,a){gl(b,a);return b;}
function em(){}
_=em.prototype=new fl();_.tI=5;function yk(){}
_=yk.prototype=new em();_.tI=31;function Dk(a){return null!=String.fromCharCode(a).match(/\d/);}
function Ek(){}
_=Ek.prototype=new em();_.tI=32;function Al(){Al=is;{Fl();}}
function Bl(a){Al();return isNaN(a);}
function Cl(a){Al();var b;b=Dl(a);if(Bl(b)){throw yl(new xl(),'Unable to parse '+a);}return b;}
function Dl(a){Al();if(El.test(a)){return parseFloat(a);}else{return Number.NaN;}}
function Fl(){Al();El=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var El=null;function dl(){dl=is;Al();}
function el(a){dl();return Cl(a);}
function jl(b,a){fm(b,a);return b;}
function il(){}
_=il.prototype=new em();_.tI=33;function ml(b,a){fm(b,a);return b;}
function ll(){}
_=ll.prototype=new em();_.tI=34;function pl(b,a){fm(b,a);return b;}
function ol(){}
_=ol.prototype=new em();_.tI=35;function tl(a){return Math.round(a);}
function ul(){}
_=ul.prototype=new em();_.tI=36;function yl(b,a){jl(b,a);return b;}
function xl(){}
_=xl.prototype=new il();_.tI=37;function im(b,a){return b.charCodeAt(a);}
function km(g){var a=um;if(!a){a=um={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function lm(b,a){return b.indexOf(String.fromCharCode(a));}
function mm(b,a){return b.indexOf(a);}
function nm(c,b,a){return c.indexOf(b,a);}
function om(a){return a.length;}
function pm(b,a){return b.substr(a,b.length-a);}
function qm(c,a,b){return c.substr(a,b-a);}
function rm(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function sm(a,b){return String(a)==b;}
function tm(a){if(!ob(a,1))return false;return sm(this,a);}
function vm(){return km(this);}
function wm(a){return ''+a;}
_=String.prototype;_.eQ=tm;_.hC=vm;_.tI=2;var um=null;function zm(a){return u(a);}
function Em(b,a){fm(b,a);return b;}
function Dm(){}
_=Dm.prototype=new em();_.tI=38;function hn(b,a){b.c=a;return b;}
function kn(a){return a.a<a.c.gb();}
function ln(a){if(!kn(a)){throw new sr();}return a.c.t(a.b=a.a++);}
function mn(a){if(a.b<0){throw new ll();}a.c.cb(a.b);a.a=a.b;a.b=(-1);}
function nn(){return kn(this);}
function on(){return ln(this);}
function gn(){}
_=gn.prototype=new am();_.v=nn;_.y=on;_.tI=0;_.a=0;_.b=(-1);function xo(f,d,e){var a,b,c;for(b=qq(f.q());jq(b);){a=kq(b);c=a.r();if(d===null?c===null:d.eQ(c)){if(e){lq(b);}return a;}}return null;}
function yo(b){var a;a=b.q();return An(new zn(),b,a);}
function zo(b){var a;a=Aq(b);return jo(new io(),b,a);}
function Ao(a){return xo(this,a,false)!==null;}
function Bo(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ob(d,14)){return false;}f=nb(d,14);c=yo(this);e=f.x();if(!bp(c,e)){return false;}for(a=Cn(c);eo(a);){b=fo(a);h=this.u(b);g=f.u(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function Co(b){var a;a=xo(this,b,false);return a===null?null:a.s();}
function Do(){var a,b,c;b=0;for(c=qq(this.q());jq(c);){a=kq(c);b+=a.hC();}return b;}
function Eo(){return yo(this);}
function yn(){}
_=yn.prototype=new am();_.m=Ao;_.eQ=Bo;_.u=Co;_.hC=Do;_.x=Eo;_.tI=39;function bp(e,b){var a,c,d;if(b===e){return true;}if(!ob(b,15)){return false;}c=nb(b,15);if(c.gb()!=e.gb()){return false;}for(a=c.w();a.v();){d=a.y();if(!e.n(d)){return false;}}return true;}
function cp(a){return bp(this,a);}
function dp(){var a,b,c;a=0;for(b=this.w();b.v();){c=b.y();if(c!==null){a+=c.hC();}}return a;}
function Fo(){}
_=Fo.prototype=new an();_.eQ=cp;_.hC=dp;_.tI=40;function An(b,a,c){b.a=a;b.b=c;return b;}
function Cn(b){var a;a=qq(b.b);return bo(new ao(),b,a);}
function Dn(a){return this.a.m(a);}
function En(){return Cn(this);}
function Fn(){return this.b.a.c;}
function zn(){}
_=zn.prototype=new Fo();_.n=Dn;_.w=En;_.gb=Fn;_.tI=41;function bo(b,a,c){b.a=c;return b;}
function eo(a){return a.a.v();}
function fo(b){var a;a=b.a.y();return a.r();}
function go(){return eo(this);}
function ho(){return fo(this);}
function ao(){}
_=ao.prototype=new am();_.v=go;_.y=ho;_.tI=0;function jo(b,a,c){b.a=a;b.b=c;return b;}
function lo(b){var a;a=qq(b.b);return qo(new po(),b,a);}
function mo(a){return zq(this.a,a);}
function no(){return lo(this);}
function oo(){return this.b.a.c;}
function io(){}
_=io.prototype=new an();_.n=mo;_.w=no;_.gb=oo;_.tI=0;function qo(b,a,c){b.a=c;return b;}
function so(a){return a.a.v();}
function to(a){var b;b=a.a.y().s();return b;}
function uo(){return so(this);}
function vo(){return to(this);}
function po(){}
_=po.prototype=new am();_.v=uo;_.y=vo;_.tI=0;function xq(){xq=is;Eq=er();}
function uq(a){{wq(a);}}
function vq(a){xq();uq(a);return a;}
function wq(a){a.a=B();a.d=C();a.b=tb(Eq,x);a.c=0;}
function yq(b,a){if(ob(a,1)){return ir(b.d,nb(a,1))!==Eq;}else if(a===null){return b.b!==Eq;}else{return hr(b.a,a,a.hC())!==Eq;}}
function zq(a,b){if(a.b!==Eq&&gr(a.b,b)){return true;}else if(dr(a.d,b)){return true;}else if(br(a.a,b)){return true;}return false;}
function Aq(a){return oq(new fq(),a);}
function Bq(c,a){var b;if(ob(a,1)){b=ir(c.d,nb(a,1));}else if(a===null){b=c.b;}else{b=hr(c.a,a,a.hC());}return b===Eq?null:b;}
function Cq(c,a,d){var b;if(a!==null){b=lr(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=kr(c.a,a,d,km(a));}if(b===Eq){++c.c;return null;}else{return b;}}
function Dq(c,a){var b;if(ob(a,1)){b=nr(c.d,nb(a,1));}else if(a===null){b=c.b;c.b=tb(Eq,x);}else{b=mr(c.a,a,a.hC());}if(b===Eq){return null;}else{--c.c;return b;}}
function Fq(e,c){xq();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.l(a[f]);}}}}
function ar(d,a){xq();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=Fp(c.substring(1),e);a.l(b);}}}
function br(f,h){xq();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(gr(h,d)){return true;}}}}return false;}
function cr(a){return yq(this,a);}
function dr(c,d){xq();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(gr(d,a)){return true;}}}return false;}
function er(){xq();}
function fr(){return Aq(this);}
function gr(a,b){xq();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function jr(a){return Bq(this,a);}
function hr(f,h,e){xq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(gr(h,d)){return c.s();}}}}
function ir(b,a){xq();return b[':'+a];}
function kr(f,h,j,e){xq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(gr(h,d)){var i=c.s();c.fb(j);return i;}}}else{a=f[e]=[];}var c=Fp(h,j);a.push(c);}
function lr(c,a,d){xq();a=':'+a;var b=c[a];c[a]=d;return b;}
function mr(f,h,e){xq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(gr(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.s();}}}}
function nr(c,a){xq();a=':'+a;var b=c[a];delete c[a];return b;}
function Bp(){}
_=Bp.prototype=new yn();_.m=cr;_.q=fr;_.u=jr;_.tI=42;_.a=null;_.b=null;_.c=0;_.d=null;var Eq;function Dp(b,a,c){b.a=a;b.b=c;return b;}
function Fp(a,b){return Dp(new Cp(),a,b);}
function aq(b){var a;if(ob(b,16)){a=nb(b,16);if(gr(this.a,a.r())&&gr(this.b,a.s())){return true;}}return false;}
function bq(){return this.a;}
function cq(){return this.b;}
function dq(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function eq(a){var b;b=this.b;this.b=a;return b;}
function Cp(){}
_=Cp.prototype=new am();_.eQ=aq;_.r=bq;_.s=cq;_.hC=dq;_.fb=eq;_.tI=43;_.a=null;_.b=null;function oq(b,a){b.a=a;return b;}
function qq(a){return hq(new gq(),a.a);}
function rq(c){var a,b,d;if(ob(c,16)){a=nb(c,16);b=a.r();if(yq(this.a,b)){d=Bq(this.a,b);return gr(a.s(),d);}}return false;}
function sq(){return qq(this);}
function tq(){return this.a.c;}
function fq(){}
_=fq.prototype=new Fo();_.n=rq;_.w=sq;_.gb=tq;_.tI=44;function hq(c,b){var a;c.c=b;a=gp(new ep());if(c.c.b!==(xq(),Eq)){hp(a,Dp(new Cp(),null,c.c.b));}ar(c.c.d,a);Fq(c.c.a,a);c.a=rn(a);return c;}
function jq(a){return kn(a.a);}
function kq(a){return a.b=nb(ln(a.a),16);}
function lq(a){if(a.b===null){throw ml(new ll(),'Must call next() before remove().');}else{mn(a.a);Dq(a.c,a.b.r());a.b=null;}}
function mq(){return jq(this);}
function nq(){return kq(this);}
function gq(){}
_=gq.prototype=new am();_.v=mq;_.y=nq;_.tI=0;_.a=null;_.b=null;function sr(){}
_=sr.prototype=new em();_.tI=45;function cs(k){var a,b,c,d,e,f,g,h,i,j,l,m;h=Bi(new qi());Di(h,6);i=Bi(new qi());Di(i,5);j=Bi(new qi());xi(j,true);Di(j,8);m=fs(new es(),i,h,j);ti(i,new xr());jj(i,896);jj(h,896);ti(h,new Ar());g=qj(new oj());a=Dg(new Bg());Eg(a,th(new rh(),'\u010C\xE1stka '));Eg(a,h);Eg(a,th(new rh(),' K\u010D'));rj(g,a);b=Dg(new Bg());if(hi('isUrok')!==null){Eg(b,th(new rh(),'\xDArok '));}else{Eg(b,th(new rh(),'Po\u010Det procent '));}Eg(b,i);Eg(b,th(new rh(),' %'));rj(g,b);d=Dg(new Bg());Eg(d,th(new rh(),'V\xFDsledek: '));Eg(d,j);Eg(d,th(new rh(),' K\u010D   '));l=mf(new ff(),'Vypo\u010Dti');l.j(Er(new Dr(),k,m));c=Dg(new Bg());e=th(new rh(),'               ');ij(e,'50px');Eg(c,e);Eg(c,l);rj(g,c);f=th(new rh(),'               ');ij(f,'50px');rj(g,f);rj(g,d);bf(hi('percent-calc'),g);}
function ds(a,b){a.a=b;}
function wr(){}
_=wr.prototype=new am();_.tI=0;_.a=false;function zr(c,a,b){if(!Dk(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){ui(nb(c,17));}else{}}
function xr(){}
_=xr.prototype=new dh();_.C=zr;_.tI=46;function Cr(c,a,b){if(!Dk(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){ui(nb(c,17));}else{}}
function Ar(){}
_=Ar.prototype=new dh();_.C=Cr;_.tI=47;function Er(b,a,c){b.a=a;b.b=c;return b;}
function as(a){if(this.a.a){return;}ds(this.a,true);hs(this.b,null);ds(this.a,false);}
function Dr(){}
_=Dr.prototype=new am();_.A=as;_.tI=48;function fs(c,b,a,d){c.b=b;c.a=a;c.c=d;return c;}
function hs(e,c){var a,b,d,f;if(wi(e.b)===null||om(wi(e.b))<1){yi(e.c,'');return;}b=el(wi(e.b));if(wi(e.b)===null||om(wi(e.b))<1){yi(e.c,'');return;}a=el(wi(e.a));f=tl(b*a)/100.0;d=wm(f);yi(e.c,d);}
function es(){}
_=es.prototype=new am();_.tI=0;_.a=null;_.b=null;_.c=null;function xk(){cs(new wr());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{xk();}catch(a){b(d);}else{xk();}}
var sb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{13:1},{13:1},{13:1},{9:1,10:1,11:1,12:1},{7:1},{13:1},{9:1,10:1,11:1,12:1},{8:1,9:1,10:1,11:1,12:1},{5:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1,17:1},{9:1,10:1,11:1,12:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{14:1},{15:1},{15:1},{14:1},{16:1},{15:1},{3:1},{7:1},{7:1},{6:1}];if (net_jesta_md_kalkulacka_PerCentCalc) {  var __gwt_initHandlers = net_jesta_md_kalkulacka_PerCentCalc.__gwt_initHandlers;  net_jesta_md_kalkulacka_PerCentCalc.onScriptLoad(gwtOnLoad);}})();