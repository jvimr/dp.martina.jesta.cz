(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,ys='com.google.gwt.core.client.',zs='com.google.gwt.lang.',As='com.google.gwt.user.client.',Bs='com.google.gwt.user.client.impl.',Cs='com.google.gwt.user.client.ui.',Ds='com.google.gwt.user.client.ui.impl.',Es='java.lang.',Fs='java.util.',at='net.jesta.md.kalkulacka.client.';function xs(){}
function qm(a){return this===a;}
function rm(){return hn(this);}
function om(){}
_=om.prototype={};_.eQ=qm;_.hC=rm;_.tI=1;var q=null;function t(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
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
_=x.prototype=new om();_.eQ=E;_.hC=F;_.tI=7;function bb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function db(a,b,c){return a[b]=c;}
function eb(b,a){return b[a];}
function fb(a){return a.length;}
function hb(e,d,c,b,a){return gb(e,d,c,b,0,fb(b),a);}
function gb(j,i,g,c,e,a,b){var d,f,h;if((f=eb(c,e))<0){throw new cm();}h=bb(new ab(),f,eb(i,e),eb(g,e),j);++e;if(e<a){j=Dm(j,1);for(d=0;d<f;++d){db(h,d,gb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){db(h,d,b);}}return h;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !ob(c,a.b)){throw new gl();}return db(a,b,c);}
function ab(){}
_=ab.prototype=new om();_.tI=0;function lb(b,a){return !(!(b&&sb[b][a]));}
function mb(a){return String.fromCharCode(a);}
function nb(b,a){if(b!=null)lb(b.tI,a)||rb();return b;}
function ob(b,a){return b!=null&&lb(b.tI,a);}
function pb(a){return a&65535;}
function rb(){throw new ml();}
function qb(a){if(a!==null){throw new ml();}return a;}
function tb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var sb;function xb(){xb=xs;uc=up(new sp());{qc=new Dd();ce(qc);}}
function yb(b,a){xb();le(qc,b,a);}
function zb(a,b){xb();return ae(qc,a,b);}
function Ab(){xb();return ne(qc,'button');}
function Bb(){xb();return ne(qc,'div');}
function Cb(){xb();return oe(qc,'text');}
function Db(){xb();return ne(qc,'tbody');}
function Eb(){xb();return ne(qc,'td');}
function Fb(){xb();return ne(qc,'tr');}
function ac(){xb();return ne(qc,'table');}
function dc(b,a,d){xb();var c;c=q;{cc(b,a,d);}}
function cc(b,a,c){xb();var d;if(a===tc){if(kc(b)==8192){tc=null;}}d=bc;bc=b;try{c.z(b);}finally{bc=d;}}
function ec(b,a){xb();pe(qc,b,a);}
function fc(a){xb();return qe(qc,a);}
function gc(a){xb();return re(qc,a);}
function hc(a){xb();return se(qc,a);}
function ic(a){xb();return te(qc,a);}
function jc(a){xb();return ue(qc,a);}
function kc(a){xb();return ve(qc,a);}
function lc(a){xb();he(qc,a);}
function mc(a){xb();return we(qc,a);}
function nc(a,b){xb();return xe(qc,a,b);}
function oc(a){xb();return ye(qc,a);}
function pc(a){xb();return ie(qc,a);}
function rc(a){xb();var b,c;c=true;if(uc.b>0){b=qb(yp(uc,uc.b-1));if(!(c=null.jb())){ec(a,true);lc(a);}}return c;}
function sc(b,a){xb();ze(qc,b,a);}
function xc(a,b,c){xb();Ce(qc,a,b,c);}
function vc(a,b,c){xb();Ae(qc,a,b,c);}
function wc(a,b,c){xb();Be(qc,a,b,c);}
function yc(a,b){xb();De(qc,a,b);}
function zc(a,b){xb();Ee(qc,a,b);}
function Ac(a,b){xb();Fe(qc,a,b);}
function Bc(b,a,c){xb();af(qc,b,a,c);}
function Cc(a,b){xb();ee(qc,a,b);}
var bc=null,qc=null,tc=null,uc;function Fc(a){if(ob(a,4)){return zb(this,nb(a,4));}return z(tb(this,Dc),a);}
function ad(){return A(tb(this,Dc));}
function Dc(){}
_=Dc.prototype=new x();_.eQ=Fc;_.hC=ad;_.tI=8;function ed(a){return z(tb(this,bd),a);}
function fd(){return A(tb(this,bd));}
function bd(){}
_=bd.prototype=new x();_.eQ=ed;_.hC=fd;_.tI=9;function ld(){ld=xs;nd=up(new sp());{md();}}
function md(){ld();rd(new hd());}
var nd;function jd(){while((ld(),nd).b>0){qb(yp((ld(),nd),0)).jb();}}
function kd(){return null;}
function hd(){}
_=hd.prototype=new om();_.bb=jd;_.cb=kd;_.tI=10;function qd(){qd=xs;sd=up(new sp());Ad=up(new sp());{wd();}}
function rd(a){qd();vp(sd,a);}
function td(){qd();var a,b;for(a=Fn(sd);yn(a);){b=nb(zn(a),5);b.bb();}}
function ud(){qd();var a,b,c,d;d=null;for(a=Fn(sd);yn(a);){b=nb(zn(a),5);c=b.cb();{d=c;}}return d;}
function vd(){qd();var a,b;for(a=Fn(Ad);yn(a);){b=qb(zn(a));null.jb();}}
function wd(){qd();__gwt_initHandlers(function(){zd();},function(){return yd();},function(){xd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function xd(){qd();var a;a=q;{td();}}
function yd(){qd();var a;a=q;{return ud();}}
function zd(){qd();var a;a=q;{vd();}}
var sd,Ad;function le(c,b,a){b.appendChild(a);}
function ne(b,a){return $doc.createElement(a);}
function oe(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function pe(c,b,a){b.cancelBubble=a;}
function qe(b,a){return !(!a.altKey);}
function re(b,a){return !(!a.ctrlKey);}
function se(b,a){return a.which||(a.keyCode|| -1);}
function te(b,a){return !(!a.metaKey);}
function ue(b,a){return !(!a.shiftKey);}
function ve(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function we(c,b){var a=$doc.getElementById(b);return a||null;}
function xe(d,a,b){var c=a[b];return c==null?null:String(c);}
function ye(b,a){return a.__eventBits||0;}
function ze(c,b,a){b.removeChild(a);}
function Ce(c,a,b,d){a[b]=d;}
function Ae(c,a,b,d){a[b]=d;}
function Be(c,a,b,d){a[b]=d;}
function De(c,a,b){a.__listener=b;}
function Ee(c,a,b){if(!b){b='';}a.innerHTML=b;}
function Fe(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function af(c,b,a,d){b.style[a]=d;}
function Bd(){}
_=Bd.prototype=new om();_.tI=0;function he(b,a){a.preventDefault();}
function ie(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function je(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){dc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!rc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)dc(b,a,c);};$wnd.__captureElem=null;}
function ke(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function fe(){}
_=fe.prototype=new Bd();_.tI=0;function ae(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function ce(a){je(a);be(a);}
function be(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function ee(c,b,a){ke(c,b,a);de(c,b,a);}
function de(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function Cd(){}
_=Cd.prototype=new fe();_.tI=0;function Dd(){}
_=Dd.prototype=new Cd();_.tI=0;function gj(b,a){hj(b,jj(b)+mb(45)+a);}
function hj(b,a){uj(b.i,a,true);}
function jj(a){return sj(a.i);}
function kj(b,a){lj(b,jj(b)+mb(45)+a);}
function lj(b,a){uj(b.i,a,false);}
function mj(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function nj(b,a){if(b.i!==null){mj(b,b.i,a);}b.i=a;}
function oj(b,a){tj(b.i,a);}
function pj(a,b){Bc(a.i,'width',b);}
function qj(b,a){Cc(b.i,a|oc(b.i));}
function rj(a){return nc(a,'className');}
function sj(a){var b,c;b=rj(a);c=zm(b,32);if(c>=0){return Em(b,0,c);}return b;}
function tj(a,b){xc(a,'className',b);}
function uj(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw tm(new sm(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=Fm(j);if(Cm(j)==0){throw xl(new wl(),'Style names cannot be empty');}i=rj(c);e=Am(i,j);while(e!=(-1)){if(e==0||wm(i,e-1)==32){f=e+Cm(j);g=Cm(i);if(f==g||f<g&&wm(i,f)==32){break;}}e=Bm(i,j,e+1);}if(a){if(e==(-1)){if(Cm(i)>0){i+=' ';}xc(c,'className',i+j);}}else{if(e!=(-1)){b=Fm(Em(i,0,e));d=Fm(Dm(i,e+Cm(j)));if(Cm(b)==0){h=d;}else if(Cm(d)==0){h=b;}else{h=b+' '+d;}xc(c,'className',h);}}}
function fj(){}
_=fj.prototype=new om();_.tI=0;_.i=null;function ok(a){if(a.g){throw Al(new zl(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;yc(a.i,a);a.o();a.F();}
function pk(a){if(!a.g){throw Al(new zl(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.ab();}finally{a.p();yc(a.i,null);a.g=false;}}
function qk(a){if(a.h!==null){a.h.eb(a);}else if(a.h!==null){throw Al(new zl(),"This widget's parent does not implement HasWidgets");}}
function rk(b,a){if(b.g){yc(b.i,null);}nj(b,a);if(b.g){yc(a,b);}}
function sk(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){pk(c);}c.h=null;}else{if(a!==null){throw Al(new zl(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){ok(c);}}}
function tk(){}
function uk(){}
function vk(a){}
function wk(){}
function xk(){}
function yk(a){rk(this,a);}
function Cj(){}
_=Cj.prototype=new fj();_.o=tk;_.p=uk;_.z=vk;_.F=wk;_.ab=xk;_.fb=yk;_.tI=11;_.g=false;_.h=null;function Eh(b,a){sk(a,b);}
function ai(b,a){sk(a,null);}
function bi(){var a,b;for(b=this.w();bk(b);){a=ck(b);ok(a);}}
function ci(){var a,b;for(b=this.w();bk(b);){a=ck(b);pk(a);}}
function di(){}
function ei(){}
function Dh(){}
_=Dh.prototype=new Cj();_.o=bi;_.p=ci;_.F=di;_.ab=ei;_.tI=12;function bg(a){a.f=fk(new Dj(),a);}
function cg(a){bg(a);return a;}
function dg(c,a,b){qk(a);gk(c.f,a);yb(b,a.i);Eh(c,a);}
function fg(b,c){var a;if(c.h!==b){return false;}ai(b,c);a=c.i;sc(pc(a),a);mk(b.f,c);return true;}
function gg(){return kk(this.f);}
function hg(a){return fg(this,a);}
function ag(){}
_=ag.prototype=new Dh();_.w=gg;_.eb=hg;_.tI=13;function cf(a){cg(a);a.fb(Bb());Bc(a.i,'position','relative');Bc(a.i,'overflow','hidden');return a;}
function df(a,b){dg(a,b,a.i);}
function ff(a){Bc(a,'left','');Bc(a,'top','');Bc(a,'position','');}
function gf(b){var a;a=fg(this,b);if(a){ff(b.i);}return a;}
function bf(){}
_=bf.prototype=new ag();_.eb=gf;_.tI=14;function kg(){kg=xs;cl(),el;}
function jg(b,a){cl(),el;mg(b,a);return b;}
function lg(b,a){switch(kc(a)){case 1:if(b.e!==null){Ef(b.e,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function mg(b,a){rk(b,a);qj(b,7041);}
function ng(a){if(this.e===null){this.e=Cf(new Bf());}vp(this.e,a);}
function og(a){lg(this,a);}
function pg(a){mg(this,a);}
function ig(){}
_=ig.prototype=new Cj();_.j=ng;_.z=og;_.fb=pg;_.tI=15;_.e=null;function lf(){lf=xs;cl(),el;}
function kf(b,a){cl(),el;jg(b,a);return b;}
function mf(b,a){zc(b.i,a);}
function jf(){}
_=jf.prototype=new ig();_.tI=16;function pf(){pf=xs;cl(),el;}
function nf(a){cl(),el;kf(a,Ab());qf(a.i);oj(a,'gwt-Button');return a;}
function of(b,a){cl(),el;nf(b);mf(b,a);return b;}
function qf(b){pf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function hf(){}
_=hf.prototype=new jf();_.tI=17;function sf(a){cg(a);a.e=ac();a.d=Db();yb(a.e,a.d);a.fb(a.e);return a;}
function uf(c,b,a){xc(b,'align',a.a);}
function vf(c,b,a){Bc(b,'verticalAlign',a.a);}
function rf(){}
_=rf.prototype=new ag();_.tI=18;_.d=null;_.e=null;function qn(d,a,b){var c;while(a.v()){c=a.y();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function sn(a){throw nn(new mn(),'add');}
function tn(b){var a;a=qn(this,this.w(),b);return a!==null;}
function pn(){}
_=pn.prototype=new om();_.l=sn;_.n=tn;_.tI=0;function En(b,a){throw Dl(new Cl(),'Index: '+a+', Size: '+b.b);}
function Fn(a){return wn(new vn(),a);}
function ao(b,a){throw nn(new mn(),'add');}
function bo(a){this.k(this.hb(),a);return true;}
function co(e){var a,b,c,d,f;if(e===this){return true;}if(!ob(e,14)){return false;}f=nb(e,14);if(this.hb()!=f.hb()){return false;}c=Fn(this);d=f.w();while(yn(c)){a=zn(c);b=zn(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function eo(){var a,b,c,d;c=1;a=31;b=Fn(this);while(yn(b)){d=zn(b);c=31*c+(d===null?0:d.hC());}return c;}
function fo(){return Fn(this);}
function go(a){throw nn(new mn(),'remove');}
function un(){}
_=un.prototype=new pn();_.k=ao;_.l=bo;_.eQ=co;_.hC=eo;_.w=fo;_.db=go;_.tI=19;function tp(a){{wp(a);}}
function up(a){tp(a);return a;}
function vp(b,a){fq(b.a,b.b++,a);return true;}
function wp(a){a.a=B();a.b=0;}
function yp(b,a){if(a<0||a>=b.b){En(b,a);}return bq(b.a,a);}
function zp(b,a){return Ap(b,a,0);}
function Ap(c,b,a){if(a<0){En(c,a);}for(;a<c.b;++a){if(aq(b,bq(c.a,a))){return a;}}return (-1);}
function Bp(c,a){var b;b=yp(c,a);dq(c.a,a,1);--c.b;return b;}
function Dp(a,b){if(a<0||a>this.b){En(this,a);}Cp(this.a,a,b);++this.b;}
function Ep(a){return vp(this,a);}
function Cp(a,b,c){a.splice(b,0,c);}
function Fp(a){return zp(this,a)!=(-1);}
function aq(a,b){return a===b||a!==null&&a.eQ(b);}
function cq(a){return yp(this,a);}
function bq(a,b){return a[b];}
function eq(a){return Bp(this,a);}
function dq(a,c,b){a.splice(c,b);}
function fq(a,b,c){a[b]=c;}
function gq(){return this.b;}
function sp(){}
_=sp.prototype=new un();_.k=Dp;_.l=Ep;_.n=Fp;_.t=cq;_.db=eq;_.hb=gq;_.tI=20;_.a=null;_.b=0;function xf(a){up(a);return a;}
function zf(d,c){var a,b;for(a=Fn(d);yn(a);){b=nb(zn(a),6);b.A(c);}}
function wf(){}
_=wf.prototype=new sp();_.tI=21;function Cf(a){up(a);return a;}
function Ef(d,c){var a,b;for(a=Fn(d);yn(a);){b=nb(zn(a),7);b.B(c);}}
function Bf(){}
_=Bf.prototype=new sp();_.tI=22;function wg(){wg=xs;ug(new tg(),'center');xg=ug(new tg(),'left');ug(new tg(),'right');}
var xg;function ug(b,a){b.a=a;return b;}
function tg(){}
_=tg.prototype=new om();_.tI=0;_.a=null;function Dg(){Dg=xs;Bg(new Ag(),'bottom');Bg(new Ag(),'middle');Eg=Bg(new Ag(),'top');}
var Eg;function Bg(a,b){a.a=b;return a;}
function Ag(){}
_=Ag.prototype=new om();_.tI=0;_.a=null;function ch(a){a.a=(wg(),xg);a.c=(Dg(),Eg);}
function dh(a){sf(a);ch(a);a.b=Fb();yb(a.d,a.b);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function eh(b,c){var a;a=gh(b);yb(b.b,a);dg(b,c,a);}
function gh(b){var a;a=Eb();uf(b,a,b.a);vf(b,a,b.c);return a;}
function hh(c){var a,b;b=pc(c.i);a=fg(this,c);if(a){sc(this.b,b);}return a;}
function bh(){}
_=bh.prototype=new rf();_.eb=hh;_.tI=23;_.b=null;function lh(c,a,b){}
function mh(c,a,b){}
function nh(c,a,b){}
function jh(){}
_=jh.prototype=new om();_.C=lh;_.D=mh;_.E=nh;_.tI=24;function ph(a){up(a);return a;}
function rh(f,e,b,d){var a,c;for(a=Fn(f);yn(a);){c=nb(zn(a),8);c.C(e,b,d);}}
function sh(f,e,b,d){var a,c;for(a=Fn(f);yn(a);){c=nb(zn(a),8);c.D(e,b,d);}}
function th(f,e,b,d){var a,c;for(a=Fn(f);yn(a);){c=nb(zn(a),8);c.E(e,b,d);}}
function uh(d,c,a){var b;b=vh(a);switch(kc(a)){case 128:rh(d,c,pb(hc(a)),b);break;case 512:th(d,c,pb(hc(a)),b);break;case 256:sh(d,c,pb(hc(a)),b);break;}}
function vh(a){return (jc(a)?1:0)|(ic(a)?8:0)|(gc(a)?2:0)|(fc(a)?4:0);}
function oh(){}
_=oh.prototype=new sp();_.tI=25;function yh(a){a.fb(Bb());qj(a,131197);oj(a,'gwt-Label');return a;}
function zh(b,a){yh(b);Bh(b,a);return b;}
function Bh(b,a){Ac(b.i,a);}
function Ch(a){switch(kc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function xh(){}
_=xh.prototype=new Cj();_.z=Ch;_.tI=26;function li(){li=xs;pi=dr(new jq());}
function ki(b,a){li();cf(b);if(a===null){a=mi();}b.fb(a);ok(b);return b;}
function ni(c){li();var a,b;b=nb(jr(pi,c),9);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=mc(c))){return null;}}if(pi.c==0){oi();}kr(pi,c,b=ki(new fi(),a));return b;}
function mi(){li();return $doc.body;}
function oi(){li();rd(new gi());}
function fi(){}
_=fi.prototype=new bf();_.tI=27;var pi;function ii(){var a,b;for(b=zo(hp((li(),pi)));ap(b);){a=nb(bp(b),9);if(a.g){pk(a);}}}
function ji(){return null;}
function gi(){}
_=gi.prototype=new om();_.bb=ii;_.cb=ji;_.tI=28;function Ci(){Ci=xs;cl(),el;}
function yi(b,a){cl(),el;jg(b,a);qj(b,1024);return b;}
function zi(b,a){if(b.a===null){b.a=xf(new wf());}vp(b.a,a);}
function Ai(b,a){if(b.d===null){b.d=ph(new oh());}vp(b.d,a);}
function Bi(a){if(a.c!==null){lc(a.c);}}
function Di(a){return nc(a.i,'value');}
function Ei(c,a){var b;vc(c.i,'readOnly',a);b='readonly';if(a){gj(c,b);}else{kj(c,b);}}
function Fi(b,a){xc(b.i,'value',a!==null?a:'');}
function aj(a){if(this.b===null){this.b=Cf(new Bf());}vp(this.b,a);}
function bj(a){var b;lg(this,a);b=kc(a);if(this.d!==null&&(b&896)!=0){this.c=a;uh(this.d,this,a);this.c=null;}else if(b==1){if(this.b!==null){Ef(this.b,this);}}else if(b==1024){if(this.a!==null){zf(this.a,this);}}}
function xi(){}
_=xi.prototype=new ig();_.j=aj;_.z=bj;_.tI=29;_.a=null;_.b=null;_.c=null;_.d=null;function dj(){dj=xs;cl(),el;}
function cj(a){cl(),el;yi(a,Cb());oj(a,'gwt-TextBox');return a;}
function ej(b,a){wc(b.i,'size',a);}
function wi(){}
_=wi.prototype=new xi();_.tI=30;function wj(a){a.a=(wg(),xg);a.b=(Dg(),Eg);}
function xj(a){sf(a);wj(a);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function yj(b,d){var a,c;c=Fb();a=Aj(b);yb(c,a);yb(b.d,c);dg(b,d,a);}
function Aj(b){var a;a=Eb();uf(b,a,b.a);vf(b,a,b.b);return a;}
function Bj(c){var a,b;b=pc(c.i);a=fg(this,c);if(a){sc(this.d,pc(b));}return a;}
function vj(){}
_=vj.prototype=new rf();_.eb=Bj;_.tI=31;function fk(b,a){b.a=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[11],[4],null);return b;}
function gk(a,b){jk(a,b,a.b);}
function ik(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function jk(d,e,a){var b,c;if(a<0||a>d.b){throw new Cl();}if(d.b==d.a.a){c=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[11],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function kk(a){return Fj(new Ej(),a);}
function lk(c,b){var a;if(b<0||b>=c.b){throw new Cl();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function mk(b,c){var a;a=ik(b,c);if(a==(-1)){throw new as();}lk(b,a);}
function Dj(){}
_=Dj.prototype=new om();_.tI=0;_.a=null;_.b=0;function Fj(b,a){b.b=a;return b;}
function bk(a){return a.a<a.b.b-1;}
function ck(a){if(a.a>=a.b.b){throw new as();}return a.b.a[++a.a];}
function dk(){return bk(this);}
function ek(){return ck(this);}
function Ej(){}
_=Ej.prototype=new om();_.v=dk;_.y=ek;_.tI=0;_.a=(-1);function cl(){cl=xs;dl=Ck(new Ak());el=dl!==null?bl(new zk()):dl;}
function bl(a){cl();return a;}
function zk(){}
_=zk.prototype=new om();_.tI=0;var dl,el;function Dk(){Dk=xs;cl();}
function Bk(a){Ek(a);Fk(a);al(a);}
function Ck(a){Dk();bl(a);Bk(a);return a;}
function Ek(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function Fk(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function al(a){return function(){this.firstChild.focus();};}
function Ak(){}
_=Ak.prototype=new zk();_.tI=0;function kn(b,a){a;return b;}
function jn(){}
_=jn.prototype=new om();_.tI=3;function ul(b,a){kn(b,a);return b;}
function tl(){}
_=tl.prototype=new jn();_.tI=4;function tm(b,a){ul(b,a);return b;}
function sm(){}
_=sm.prototype=new tl();_.tI=5;function gl(){}
_=gl.prototype=new sm();_.tI=32;function ll(a){return null!=String.fromCharCode(a).match(/\d/);}
function ml(){}
_=ml.prototype=new sm();_.tI=33;function im(){im=xs;{nm();}}
function jm(a){im();return isNaN(a);}
function km(a){im();var b;b=lm(a);if(jm(b)){throw gm(new fm(),'Unable to parse '+a);}return b;}
function lm(a){im();if(mm.test(a)){return parseFloat(a);}else{return Number.NaN;}}
function nm(){im();mm=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var mm=null;function rl(){rl=xs;im();}
function sl(a){rl();return km(a);}
function xl(b,a){tm(b,a);return b;}
function wl(){}
_=wl.prototype=new sm();_.tI=34;function Al(b,a){tm(b,a);return b;}
function zl(){}
_=zl.prototype=new sm();_.tI=35;function Dl(b,a){tm(b,a);return b;}
function Cl(){}
_=Cl.prototype=new sm();_.tI=36;function bm(a){return Math.round(a);}
function cm(){}
_=cm.prototype=new sm();_.tI=37;function gm(b,a){xl(b,a);return b;}
function fm(){}
_=fm.prototype=new wl();_.tI=38;function wm(b,a){return b.charCodeAt(a);}
function ym(g){var a=cn;if(!a){a=cn={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function zm(b,a){return b.indexOf(String.fromCharCode(a));}
function Am(b,a){return b.indexOf(a);}
function Bm(c,b,a){return c.indexOf(b,a);}
function Cm(a){return a.length;}
function Dm(b,a){return b.substr(a,b.length-a);}
function Em(c,a,b){return c.substr(a,b-a);}
function Fm(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function an(a,b){return String(a)==b;}
function bn(a){if(!ob(a,1))return false;return an(this,a);}
function dn(){return ym(this);}
function en(a){return ''+a;}
_=String.prototype;_.eQ=bn;_.hC=dn;_.tI=2;var cn=null;function hn(a){return u(a);}
function nn(b,a){tm(b,a);return b;}
function mn(){}
_=mn.prototype=new sm();_.tI=39;function wn(b,a){b.c=a;return b;}
function yn(a){return a.a<a.c.hb();}
function zn(a){if(!yn(a)){throw new as();}return a.c.t(a.b=a.a++);}
function An(a){if(a.b<0){throw new zl();}a.c.db(a.b);a.a=a.b;a.b=(-1);}
function Bn(){return yn(this);}
function Cn(){return zn(this);}
function vn(){}
_=vn.prototype=new om();_.v=Bn;_.y=Cn;_.tI=0;_.a=0;_.b=(-1);function fp(f,d,e){var a,b,c;for(b=Eq(f.q());xq(b);){a=yq(b);c=a.r();if(d===null?c===null:d.eQ(c)){if(e){zq(b);}return a;}}return null;}
function gp(b){var a;a=b.q();return jo(new io(),b,a);}
function hp(b){var a;a=ir(b);return xo(new wo(),b,a);}
function ip(a){return fp(this,a,false)!==null;}
function jp(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ob(d,15)){return false;}f=nb(d,15);c=gp(this);e=f.x();if(!pp(c,e)){return false;}for(a=lo(c);so(a);){b=to(a);h=this.u(b);g=f.u(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function kp(b){var a;a=fp(this,b,false);return a===null?null:a.s();}
function lp(){var a,b,c;b=0;for(c=Eq(this.q());xq(c);){a=yq(c);b+=a.hC();}return b;}
function mp(){return gp(this);}
function ho(){}
_=ho.prototype=new om();_.m=ip;_.eQ=jp;_.u=kp;_.hC=lp;_.x=mp;_.tI=40;function pp(e,b){var a,c,d;if(b===e){return true;}if(!ob(b,16)){return false;}c=nb(b,16);if(c.hb()!=e.hb()){return false;}for(a=c.w();a.v();){d=a.y();if(!e.n(d)){return false;}}return true;}
function qp(a){return pp(this,a);}
function rp(){var a,b,c;a=0;for(b=this.w();b.v();){c=b.y();if(c!==null){a+=c.hC();}}return a;}
function np(){}
_=np.prototype=new pn();_.eQ=qp;_.hC=rp;_.tI=41;function jo(b,a,c){b.a=a;b.b=c;return b;}
function lo(b){var a;a=Eq(b.b);return qo(new po(),b,a);}
function mo(a){return this.a.m(a);}
function no(){return lo(this);}
function oo(){return this.b.a.c;}
function io(){}
_=io.prototype=new np();_.n=mo;_.w=no;_.hb=oo;_.tI=42;function qo(b,a,c){b.a=c;return b;}
function so(a){return a.a.v();}
function to(b){var a;a=b.a.y();return a.r();}
function uo(){return so(this);}
function vo(){return to(this);}
function po(){}
_=po.prototype=new om();_.v=uo;_.y=vo;_.tI=0;function xo(b,a,c){b.a=a;b.b=c;return b;}
function zo(b){var a;a=Eq(b.b);return Eo(new Do(),b,a);}
function Ao(a){return hr(this.a,a);}
function Bo(){return zo(this);}
function Co(){return this.b.a.c;}
function wo(){}
_=wo.prototype=new pn();_.n=Ao;_.w=Bo;_.hb=Co;_.tI=0;function Eo(b,a,c){b.a=c;return b;}
function ap(a){return a.a.v();}
function bp(a){var b;b=a.a.y().s();return b;}
function cp(){return ap(this);}
function dp(){return bp(this);}
function Do(){}
_=Do.prototype=new om();_.v=cp;_.y=dp;_.tI=0;function fr(){fr=xs;mr=sr();}
function cr(a){{er(a);}}
function dr(a){fr();cr(a);return a;}
function er(a){a.a=B();a.d=C();a.b=tb(mr,x);a.c=0;}
function gr(b,a){if(ob(a,1)){return wr(b.d,nb(a,1))!==mr;}else if(a===null){return b.b!==mr;}else{return vr(b.a,a,a.hC())!==mr;}}
function hr(a,b){if(a.b!==mr&&ur(a.b,b)){return true;}else if(rr(a.d,b)){return true;}else if(pr(a.a,b)){return true;}return false;}
function ir(a){return Cq(new tq(),a);}
function jr(c,a){var b;if(ob(a,1)){b=wr(c.d,nb(a,1));}else if(a===null){b=c.b;}else{b=vr(c.a,a,a.hC());}return b===mr?null:b;}
function kr(c,a,d){var b;if(a!==null){b=zr(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=yr(c.a,a,d,ym(a));}if(b===mr){++c.c;return null;}else{return b;}}
function lr(c,a){var b;if(ob(a,1)){b=Br(c.d,nb(a,1));}else if(a===null){b=c.b;c.b=tb(mr,x);}else{b=Ar(c.a,a,a.hC());}if(b===mr){return null;}else{--c.c;return b;}}
function nr(e,c){fr();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.l(a[f]);}}}}
function or(d,a){fr();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=nq(c.substring(1),e);a.l(b);}}}
function pr(f,h){fr();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(ur(h,d)){return true;}}}}return false;}
function qr(a){return gr(this,a);}
function rr(c,d){fr();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(ur(d,a)){return true;}}}return false;}
function sr(){fr();}
function tr(){return ir(this);}
function ur(a,b){fr();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function xr(a){return jr(this,a);}
function vr(f,h,e){fr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(ur(h,d)){return c.s();}}}}
function wr(b,a){fr();return b[':'+a];}
function yr(f,h,j,e){fr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(ur(h,d)){var i=c.s();c.gb(j);return i;}}}else{a=f[e]=[];}var c=nq(h,j);a.push(c);}
function zr(c,a,d){fr();a=':'+a;var b=c[a];c[a]=d;return b;}
function Ar(f,h,e){fr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(ur(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.s();}}}}
function Br(c,a){fr();a=':'+a;var b=c[a];delete c[a];return b;}
function jq(){}
_=jq.prototype=new ho();_.m=qr;_.q=tr;_.u=xr;_.tI=43;_.a=null;_.b=null;_.c=0;_.d=null;var mr;function lq(b,a,c){b.a=a;b.b=c;return b;}
function nq(a,b){return lq(new kq(),a,b);}
function oq(b){var a;if(ob(b,17)){a=nb(b,17);if(ur(this.a,a.r())&&ur(this.b,a.s())){return true;}}return false;}
function pq(){return this.a;}
function qq(){return this.b;}
function rq(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function sq(a){var b;b=this.b;this.b=a;return b;}
function kq(){}
_=kq.prototype=new om();_.eQ=oq;_.r=pq;_.s=qq;_.hC=rq;_.gb=sq;_.tI=44;_.a=null;_.b=null;function Cq(b,a){b.a=a;return b;}
function Eq(a){return vq(new uq(),a.a);}
function Fq(c){var a,b,d;if(ob(c,17)){a=nb(c,17);b=a.r();if(gr(this.a,b)){d=jr(this.a,b);return ur(a.s(),d);}}return false;}
function ar(){return Eq(this);}
function br(){return this.a.c;}
function tq(){}
_=tq.prototype=new np();_.n=Fq;_.w=ar;_.hb=br;_.tI=45;function vq(c,b){var a;c.c=b;a=up(new sp());if(c.c.b!==(fr(),mr)){vp(a,lq(new kq(),null,c.c.b));}or(c.c.d,a);nr(c.c.a,a);c.a=Fn(a);return c;}
function xq(a){return yn(a.a);}
function yq(a){return a.b=nb(zn(a.a),17);}
function zq(a){if(a.b===null){throw Al(new zl(),'Must call next() before remove().');}else{An(a.a);lr(a.c,a.b.r());a.b=null;}}
function Aq(){return xq(this);}
function Bq(){return yq(this);}
function uq(){}
_=uq.prototype=new om();_.v=Aq;_.y=Bq;_.tI=0;_.a=null;_.b=null;function as(){}
_=as.prototype=new sm();_.tI=46;function qs(k){var a,b,c,d,e,f,g,h,i,j,l,m;h=cj(new wi());ej(h,6);i=cj(new wi());ej(i,5);j=cj(new wi());Ei(j,true);ej(j,8);m=ts(new ss(),i,h,j);zi(h,m);zi(i,m);Ai(i,new fs());qj(i,896);qj(h,896);Ai(h,new is());g=xj(new vj());a=dh(new bh());eh(a,zh(new xh(),'\u010C\xE1stka '));eh(a,h);eh(a,zh(new xh(),' K\u010D'));yj(g,a);b=dh(new bh());if(ni('isUrok')!==null){eh(b,zh(new xh(),'\xDArok '));}else{eh(b,zh(new xh(),'Po\u010Det procent '));}eh(b,i);eh(b,zh(new xh(),' %'));yj(g,b);d=dh(new bh());eh(d,zh(new xh(),'V\xFDsledek: '));eh(d,j);eh(d,zh(new xh(),' K\u010D   '));l=of(new hf(),'Vypo\u010Dti');l.j(ms(new ls(),k,m));c=dh(new bh());e=zh(new xh(),'               ');pj(e,'50px');eh(c,e);eh(c,l);yj(g,c);f=zh(new xh(),'               ');pj(f,'50px');yj(g,f);yj(g,d);df(ni('percent-calc'),g);}
function rs(a,b){a.a=b;}
function es(){}
_=es.prototype=new om();_.tI=0;_.a=false;function hs(c,a,b){if(!ll(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){Bi(nb(c,18));}else{}}
function fs(){}
_=fs.prototype=new jh();_.D=hs;_.tI=47;function ks(c,a,b){if(!ll(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){Bi(nb(c,18));}else{}}
function is(){}
_=is.prototype=new jh();_.D=ks;_.tI=48;function ms(b,a,c){b.a=a;b.b=c;return b;}
function os(a){if(this.a.a){return;}rs(this.a,true);vs(this.b,null);rs(this.a,false);}
function ls(){}
_=ls.prototype=new om();_.B=os;_.tI=49;function ts(c,b,a,d){c.b=b;c.a=a;c.c=d;return c;}
function vs(e,c){var a,b,d,f;if(Di(e.b)===null||Cm(Di(e.b))<1){Fi(e.c,'');return;}b=sl(Di(e.b));if(Di(e.b)===null||Cm(Di(e.b))<1){Fi(e.c,'');return;}a=sl(Di(e.a));f=bm(b*a)/100.0;d=en(f);Fi(e.c,d);}
function ws(a){vs(this,a);}
function ss(){}
_=ss.prototype=new om();_.A=ws;_.tI=50;_.a=null;_.b=null;_.c=null;function fl(){qs(new es());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{fl();}catch(a){b(d);}else{fl();}}
var sb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{10:1,11:1,12:1,13:1},{10:1,11:1,12:1,13:1},{10:1,11:1,12:1,13:1},{10:1,11:1,12:1,13:1},{10:1,11:1,12:1,13:1},{10:1,11:1,12:1,13:1},{10:1,11:1,12:1,13:1},{10:1,11:1,12:1,13:1},{14:1},{14:1},{14:1},{14:1},{10:1,11:1,12:1,13:1},{8:1},{14:1},{10:1,11:1,12:1,13:1},{9:1,10:1,11:1,12:1,13:1},{5:1},{10:1,11:1,12:1,13:1},{10:1,11:1,12:1,13:1,18:1},{10:1,11:1,12:1,13:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{15:1},{16:1},{16:1},{15:1},{17:1},{16:1},{3:1},{8:1},{8:1},{7:1},{6:1}];if (net_jesta_md_kalkulacka_PerCentCalc) {  var __gwt_initHandlers = net_jesta_md_kalkulacka_PerCentCalc.__gwt_initHandlers;  net_jesta_md_kalkulacka_PerCentCalc.onScriptLoad(gwtOnLoad);}})();