(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,qs='com.google.gwt.core.client.',rs='com.google.gwt.lang.',ss='com.google.gwt.user.client.',ts='com.google.gwt.user.client.impl.',us='com.google.gwt.user.client.ui.',vs='com.google.gwt.user.client.ui.impl.',ws='java.lang.',xs='java.util.',ys='net.jesta.md.kalkulacka.client.';function ps(){}
function jm(a){return this===a;}
function km(){return an(this);}
function hm(){}
_=hm.prototype={};_.eQ=jm;_.hC=km;_.tI=1;var q=null;function t(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
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
_=x.prototype=new hm();_.eQ=E;_.hC=F;_.tI=7;function bb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function db(a,b,c){return a[b]=c;}
function eb(b,a){return b[a];}
function fb(a){return a.length;}
function hb(e,d,c,b,a){return gb(e,d,c,b,0,fb(b),a);}
function gb(j,i,g,c,e,a,b){var d,f,h;if((f=eb(c,e))<0){throw new Bl();}h=bb(new ab(),f,eb(i,e),eb(g,e),j);++e;if(e<a){j=wm(j,1);for(d=0;d<f;++d){db(h,d,gb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){db(h,d,b);}}return h;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !ob(c,a.b)){throw new Fk();}return db(a,b,c);}
function ab(){}
_=ab.prototype=new hm();_.tI=0;function lb(b,a){return !(!(b&&sb[b][a]));}
function mb(a){return String.fromCharCode(a);}
function nb(b,a){if(b!=null)lb(b.tI,a)||rb();return b;}
function ob(b,a){return b!=null&&lb(b.tI,a);}
function pb(a){return a&65535;}
function rb(){throw new fl();}
function qb(a){if(a!==null){throw new fl();}return a;}
function tb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var sb;function xb(){xb=ps;uc=np(new lp());{qc=new Cd();ae(qc);}}
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
function rc(a){xb();var b,c;c=true;if(uc.b>0){b=qb(rp(uc,uc.b-1));if(!(c=null.ib())){ec(a,true);lc(a);}}return c;}
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
_=bd.prototype=new x();_.eQ=ed;_.hC=fd;_.tI=9;function ld(){ld=ps;nd=np(new lp());{md();}}
function md(){ld();rd(new hd());}
var nd;function jd(){while((ld(),nd).b>0){qb(rp((ld(),nd),0)).ib();}}
function kd(){return null;}
function hd(){}
_=hd.prototype=new hm();_.ab=jd;_.bb=kd;_.tI=10;function qd(){qd=ps;sd=np(new lp());Ad=np(new lp());{wd();}}
function rd(a){qd();op(sd,a);}
function td(){qd();var a,b;for(a=yn(sd);rn(a);){b=nb(sn(a),5);b.ab();}}
function ud(){qd();var a,b,c,d;d=null;for(a=yn(sd);rn(a);){b=nb(sn(a),5);c=b.bb();{d=c;}}return d;}
function vd(){qd();var a,b;for(a=yn(Ad);rn(a);){b=qb(sn(a));null.ib();}}
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
_=Bd.prototype=new hm();_.tI=0;function fe(b,a){a.preventDefault();}
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
_=Cd.prototype=new de();_.tI=0;function gj(b,a){hj(b,jj(b)+mb(45)+a);}
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
function sj(a){var b,c;b=rj(a);c=sm(b,32);if(c>=0){return xm(b,0,c);}return b;}
function tj(a,b){xc(a,'className',b);}
function uj(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw mm(new lm(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=ym(j);if(vm(j)==0){throw ql(new pl(),'Style names cannot be empty');}i=rj(c);e=tm(i,j);while(e!=(-1)){if(e==0||pm(i,e-1)==32){f=e+vm(j);g=vm(i);if(f==g||f<g&&pm(i,f)==32){break;}}e=um(i,j,e+1);}if(a){if(e==(-1)){if(vm(i)>0){i+=' ';}xc(c,'className',i+j);}}else{if(e!=(-1)){b=ym(xm(i,0,e));d=ym(wm(i,e+vm(j)));if(vm(b)==0){h=d;}else if(vm(d)==0){h=b;}else{h=b+' '+d;}xc(c,'className',h);}}}
function fj(){}
_=fj.prototype=new hm();_.tI=0;_.i=null;function ok(a){if(a.g){throw tl(new sl(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;yc(a.i,a);a.o();a.E();}
function pk(a){if(!a.g){throw tl(new sl(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.F();}finally{a.p();yc(a.i,null);a.g=false;}}
function qk(a){if(a.h!==null){a.h.db(a);}else if(a.h!==null){throw tl(new sl(),"This widget's parent does not implement HasWidgets");}}
function rk(b,a){if(b.g){yc(b.i,null);}nj(b,a);if(b.g){yc(a,b);}}
function sk(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){pk(c);}c.h=null;}else{if(a!==null){throw tl(new sl(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){ok(c);}}}
function tk(){}
function uk(){}
function vk(a){}
function wk(){}
function xk(){}
function yk(a){rk(this,a);}
function Cj(){}
_=Cj.prototype=new fj();_.o=tk;_.p=uk;_.z=vk;_.E=wk;_.F=xk;_.eb=yk;_.tI=11;_.g=false;_.h=null;function Fh(b,a){sk(a,b);}
function bi(b,a){sk(a,null);}
function ci(){var a,b;for(b=this.w();bk(b);){a=ck(b);ok(a);}}
function di(){var a,b;for(b=this.w();bk(b);){a=ck(b);pk(a);}}
function ei(){}
function fi(){}
function Eh(){}
_=Eh.prototype=new Cj();_.o=ci;_.p=di;_.E=ei;_.F=fi;_.tI=12;function Bf(a){a.f=fk(new Dj(),a);}
function Cf(a){Bf(a);return a;}
function Df(c,a,b){qk(a);gk(c.f,a);yb(b,a.i);Fh(c,a);}
function Ff(b,c){var a;if(c.h!==b){return false;}bi(b,c);a=c.i;sc(pc(a),a);mk(b.f,c);return true;}
function ag(){return kk(this.f);}
function bg(a){return Ff(this,a);}
function Af(){}
_=Af.prototype=new Eh();_.w=ag;_.db=bg;_.tI=13;function af(a){Cf(a);a.eb(Bb());Bc(a.i,'position','relative');Bc(a.i,'overflow','hidden');return a;}
function bf(a,b){Df(a,b,a.i);}
function df(a){Bc(a,'left','');Bc(a,'top','');Bc(a,'position','');}
function ef(b){var a;a=Ff(this,b);if(a){df(b.i);}return a;}
function Fe(){}
_=Fe.prototype=new Af();_.db=ef;_.tI=14;function eg(){eg=ps;Bk(),Dk;}
function dg(b,a){Bk(),Dk;gg(b,a);return b;}
function fg(b,a){switch(kc(a)){case 1:if(b.d!==null){yf(b.d,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function gg(b,a){rk(b,a);qj(b,7041);}
function hg(a){if(this.d===null){this.d=wf(new vf());}op(this.d,a);}
function ig(a){fg(this,a);}
function jg(a){gg(this,a);}
function cg(){}
_=cg.prototype=new Cj();_.j=hg;_.z=ig;_.eb=jg;_.tI=15;_.d=null;function jf(){jf=ps;Bk(),Dk;}
function hf(b,a){Bk(),Dk;dg(b,a);return b;}
function kf(b,a){zc(b.i,a);}
function gf(){}
_=gf.prototype=new cg();_.tI=16;function nf(){nf=ps;Bk(),Dk;}
function lf(a){Bk(),Dk;hf(a,Ab());of(a.i);oj(a,'gwt-Button');return a;}
function mf(b,a){Bk(),Dk;lf(b);kf(b,a);return b;}
function of(b){nf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function ff(){}
_=ff.prototype=new gf();_.tI=17;function qf(a){Cf(a);a.e=ac();a.d=Db();yb(a.e,a.d);a.eb(a.e);return a;}
function sf(c,b,a){xc(b,'align',a.a);}
function tf(c,b,a){Bc(b,'verticalAlign',a.a);}
function pf(){}
_=pf.prototype=new Af();_.tI=18;_.d=null;_.e=null;function jn(d,a,b){var c;while(a.v()){c=a.y();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function ln(a){throw fn(new en(),'add');}
function mn(b){var a;a=jn(this,this.w(),b);return a!==null;}
function hn(){}
_=hn.prototype=new hm();_.l=ln;_.n=mn;_.tI=0;function xn(b,a){throw wl(new vl(),'Index: '+a+', Size: '+b.b);}
function yn(a){return pn(new on(),a);}
function zn(b,a){throw fn(new en(),'add');}
function An(a){this.k(this.gb(),a);return true;}
function Bn(e){var a,b,c,d,f;if(e===this){return true;}if(!ob(e,13)){return false;}f=nb(e,13);if(this.gb()!=f.gb()){return false;}c=yn(this);d=f.w();while(rn(c)){a=sn(c);b=sn(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function Cn(){var a,b,c,d;c=1;a=31;b=yn(this);while(rn(b)){d=sn(b);c=31*c+(d===null?0:d.hC());}return c;}
function Dn(){return yn(this);}
function En(a){throw fn(new en(),'remove');}
function nn(){}
_=nn.prototype=new hn();_.k=zn;_.l=An;_.eQ=Bn;_.hC=Cn;_.w=Dn;_.cb=En;_.tI=19;function mp(a){{pp(a);}}
function np(a){mp(a);return a;}
function op(b,a){Ep(b.a,b.b++,a);return true;}
function pp(a){a.a=B();a.b=0;}
function rp(b,a){if(a<0||a>=b.b){xn(b,a);}return Ap(b.a,a);}
function sp(b,a){return tp(b,a,0);}
function tp(c,b,a){if(a<0){xn(c,a);}for(;a<c.b;++a){if(zp(b,Ap(c.a,a))){return a;}}return (-1);}
function up(c,a){var b;b=rp(c,a);Cp(c.a,a,1);--c.b;return b;}
function wp(a,b){if(a<0||a>this.b){xn(this,a);}vp(this.a,a,b);++this.b;}
function xp(a){return op(this,a);}
function vp(a,b,c){a.splice(b,0,c);}
function yp(a){return sp(this,a)!=(-1);}
function zp(a,b){return a===b||a!==null&&a.eQ(b);}
function Bp(a){return rp(this,a);}
function Ap(a,b){return a[b];}
function Dp(a){return up(this,a);}
function Cp(a,c,b){a.splice(c,b);}
function Ep(a,b,c){a[b]=c;}
function Fp(){return this.b;}
function lp(){}
_=lp.prototype=new nn();_.k=wp;_.l=xp;_.n=yp;_.t=Bp;_.cb=Dp;_.gb=Fp;_.tI=20;_.a=null;_.b=0;function wf(a){np(a);return a;}
function yf(d,c){var a,b;for(a=yn(d);rn(a);){b=nb(sn(a),6);b.A(c);}}
function vf(){}
_=vf.prototype=new lp();_.tI=21;function yh(a){a.eb(Bb());qj(a,131197);oj(a,'gwt-Label');return a;}
function zh(b,a){yh(b);Bh(b,a);return b;}
function Bh(b,a){Ac(b.i,a);}
function Ch(a,b){Bc(a.i,'whiteSpace',b?'normal':'nowrap');}
function Dh(a){switch(kc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function xh(){}
_=xh.prototype=new Cj();_.z=Dh;_.tI=22;function lg(a){yh(a);a.eb(Bb());qj(a,125);oj(a,'gwt-HTML');return a;}
function mg(b,a){lg(b);pg(b,a);return b;}
function ng(b,a,c){mg(b,a);Ch(b,c);return b;}
function pg(b,a){zc(b.i,a);}
function kg(){}
_=kg.prototype=new xh();_.tI=23;function wg(){wg=ps;ug(new tg(),'center');xg=ug(new tg(),'left');ug(new tg(),'right');}
var xg;function ug(b,a){b.a=a;return b;}
function tg(){}
_=tg.prototype=new hm();_.tI=0;_.a=null;function Dg(){Dg=ps;Bg(new Ag(),'bottom');Bg(new Ag(),'middle');Eg=Bg(new Ag(),'top');}
var Eg;function Bg(a,b){a.a=b;return a;}
function Ag(){}
_=Ag.prototype=new hm();_.tI=0;_.a=null;function ch(a){a.a=(wg(),xg);a.c=(Dg(),Eg);}
function dh(a){qf(a);ch(a);a.b=Fb();yb(a.d,a.b);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function eh(b,c){var a;a=gh(b);yb(b.b,a);Df(b,c,a);}
function gh(b){var a;a=Eb();sf(b,a,b.a);tf(b,a,b.c);return a;}
function hh(c){var a,b;b=pc(c.i);a=Ff(this,c);if(a){sc(this.b,b);}return a;}
function bh(){}
_=bh.prototype=new pf();_.db=hh;_.tI=24;_.b=null;function lh(c,a,b){}
function mh(c,a,b){}
function nh(c,a,b){}
function jh(){}
_=jh.prototype=new hm();_.B=lh;_.C=mh;_.D=nh;_.tI=25;function ph(a){np(a);return a;}
function rh(f,e,b,d){var a,c;for(a=yn(f);rn(a);){c=nb(sn(a),7);c.B(e,b,d);}}
function sh(f,e,b,d){var a,c;for(a=yn(f);rn(a);){c=nb(sn(a),7);c.C(e,b,d);}}
function th(f,e,b,d){var a,c;for(a=yn(f);rn(a);){c=nb(sn(a),7);c.D(e,b,d);}}
function uh(d,c,a){var b;b=vh(a);switch(kc(a)){case 128:rh(d,c,pb(hc(a)),b);break;case 512:th(d,c,pb(hc(a)),b);break;case 256:sh(d,c,pb(hc(a)),b);break;}}
function vh(a){return (jc(a)?1:0)|(ic(a)?8:0)|(gc(a)?2:0)|(fc(a)?4:0);}
function oh(){}
_=oh.prototype=new lp();_.tI=26;function mi(){mi=ps;qi=Cq(new cq());}
function li(b,a){mi();af(b);if(a===null){a=ni();}b.eb(a);ok(b);return b;}
function oi(c){mi();var a,b;b=nb(cr(qi,c),8);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=mc(c))){return null;}}if(qi.c==0){pi();}dr(qi,c,b=li(new gi(),a));return b;}
function ni(){mi();return $doc.body;}
function pi(){mi();rd(new hi());}
function gi(){}
_=gi.prototype=new Fe();_.tI=27;var qi;function ji(){var a,b;for(b=so(ap((mi(),qi)));zo(b);){a=nb(Ao(b),8);if(a.g){pk(a);}}}
function ki(){return null;}
function hi(){}
_=hi.prototype=new hm();_.ab=ji;_.bb=ki;_.tI=28;function Ci(){Ci=ps;Bk(),Dk;}
function zi(b,a){Bk(),Dk;dg(b,a);qj(b,1024);return b;}
function Ai(b,a){if(b.c===null){b.c=ph(new oh());}op(b.c,a);}
function Bi(a){if(a.b!==null){lc(a.b);}}
function Di(a){return nc(a.i,'value');}
function Ei(c,a){var b;vc(c.i,'readOnly',a);b='readonly';if(a){gj(c,b);}else{kj(c,b);}}
function Fi(b,a){xc(b.i,'value',a!==null?a:'');}
function aj(a){if(this.a===null){this.a=wf(new vf());}op(this.a,a);}
function bj(a){var b;fg(this,a);b=kc(a);if(this.c!==null&&(b&896)!=0){this.b=a;uh(this.c,this,a);this.b=null;}else if(b==1){if(this.a!==null){yf(this.a,this);}}else{}}
function yi(){}
_=yi.prototype=new cg();_.j=aj;_.z=bj;_.tI=29;_.a=null;_.b=null;_.c=null;function dj(){dj=ps;Bk(),Dk;}
function cj(a){Bk(),Dk;zi(a,Cb());oj(a,'gwt-TextBox');return a;}
function ej(b,a){wc(b.i,'size',a);}
function xi(){}
_=xi.prototype=new yi();_.tI=30;function wj(a){a.a=(wg(),xg);a.b=(Dg(),Eg);}
function xj(a){qf(a);wj(a);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function yj(b,d){var a,c;c=Fb();a=Aj(b);yb(c,a);yb(b.d,c);Df(b,d,a);}
function Aj(b){var a;a=Eb();sf(b,a,b.a);tf(b,a,b.b);return a;}
function Bj(c){var a,b;b=pc(c.i);a=Ff(this,c);if(a){sc(this.d,pc(b));}return a;}
function vj(){}
_=vj.prototype=new pf();_.db=Bj;_.tI=31;function fk(b,a){b.a=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function gk(a,b){jk(a,b,a.b);}
function ik(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function jk(d,e,a){var b,c;if(a<0||a>d.b){throw new vl();}if(d.b==d.a.a){c=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function kk(a){return Fj(new Ej(),a);}
function lk(c,b){var a;if(b<0||b>=c.b){throw new vl();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function mk(b,c){var a;a=ik(b,c);if(a==(-1)){throw new zr();}lk(b,a);}
function Dj(){}
_=Dj.prototype=new hm();_.tI=0;_.a=null;_.b=0;function Fj(b,a){b.b=a;return b;}
function bk(a){return a.a<a.b.b-1;}
function ck(a){if(a.a>=a.b.b){throw new zr();}return a.b.a[++a.a];}
function dk(){return bk(this);}
function ek(){return ck(this);}
function Ej(){}
_=Ej.prototype=new hm();_.v=dk;_.y=ek;_.tI=0;_.a=(-1);function Bk(){Bk=ps;Ck=Ak(new zk());Dk=Ck;}
function Ak(a){Bk();return a;}
function zk(){}
_=zk.prototype=new hm();_.tI=0;var Ck,Dk;function cn(b,a){a;return b;}
function bn(){}
_=bn.prototype=new hm();_.tI=3;function nl(b,a){cn(b,a);return b;}
function ml(){}
_=ml.prototype=new bn();_.tI=4;function mm(b,a){nl(b,a);return b;}
function lm(){}
_=lm.prototype=new ml();_.tI=5;function Fk(){}
_=Fk.prototype=new lm();_.tI=32;function el(a){return null!=String.fromCharCode(a).match(/\d/);}
function fl(){}
_=fl.prototype=new lm();_.tI=33;function bm(){bm=ps;{gm();}}
function cm(a){bm();return isNaN(a);}
function dm(a){bm();var b;b=em(a);if(cm(b)){throw Fl(new El(),'Unable to parse '+a);}return b;}
function em(a){bm();if(fm.test(a)){return parseFloat(a);}else{return Number.NaN;}}
function gm(){bm();fm=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var fm=null;function kl(){kl=ps;bm();}
function ll(a){kl();return dm(a);}
function ql(b,a){mm(b,a);return b;}
function pl(){}
_=pl.prototype=new lm();_.tI=34;function tl(b,a){mm(b,a);return b;}
function sl(){}
_=sl.prototype=new lm();_.tI=35;function wl(b,a){mm(b,a);return b;}
function vl(){}
_=vl.prototype=new lm();_.tI=36;function Al(a){return Math.round(a);}
function Bl(){}
_=Bl.prototype=new lm();_.tI=37;function Fl(b,a){ql(b,a);return b;}
function El(){}
_=El.prototype=new pl();_.tI=38;function pm(b,a){return b.charCodeAt(a);}
function rm(g){var a=Bm;if(!a){a=Bm={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function sm(b,a){return b.indexOf(String.fromCharCode(a));}
function tm(b,a){return b.indexOf(a);}
function um(c,b,a){return c.indexOf(b,a);}
function vm(a){return a.length;}
function wm(b,a){return b.substr(a,b.length-a);}
function xm(c,a,b){return c.substr(a,b-a);}
function ym(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function zm(a,b){return String(a)==b;}
function Am(a){if(!ob(a,1))return false;return zm(this,a);}
function Cm(){return rm(this);}
function Dm(a){return ''+a;}
_=String.prototype;_.eQ=Am;_.hC=Cm;_.tI=2;var Bm=null;function an(a){return u(a);}
function fn(b,a){mm(b,a);return b;}
function en(){}
_=en.prototype=new lm();_.tI=39;function pn(b,a){b.c=a;return b;}
function rn(a){return a.a<a.c.gb();}
function sn(a){if(!rn(a)){throw new zr();}return a.c.t(a.b=a.a++);}
function tn(a){if(a.b<0){throw new sl();}a.c.cb(a.b);a.a=a.b;a.b=(-1);}
function un(){return rn(this);}
function vn(){return sn(this);}
function on(){}
_=on.prototype=new hm();_.v=un;_.y=vn;_.tI=0;_.a=0;_.b=(-1);function Eo(f,d,e){var a,b,c;for(b=xq(f.q());qq(b);){a=rq(b);c=a.r();if(d===null?c===null:d.eQ(c)){if(e){sq(b);}return a;}}return null;}
function Fo(b){var a;a=b.q();return bo(new ao(),b,a);}
function ap(b){var a;a=br(b);return qo(new po(),b,a);}
function bp(a){return Eo(this,a,false)!==null;}
function cp(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ob(d,14)){return false;}f=nb(d,14);c=Fo(this);e=f.x();if(!ip(c,e)){return false;}for(a=eo(c);lo(a);){b=mo(a);h=this.u(b);g=f.u(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function dp(b){var a;a=Eo(this,b,false);return a===null?null:a.s();}
function ep(){var a,b,c;b=0;for(c=xq(this.q());qq(c);){a=rq(c);b+=a.hC();}return b;}
function fp(){return Fo(this);}
function Fn(){}
_=Fn.prototype=new hm();_.m=bp;_.eQ=cp;_.u=dp;_.hC=ep;_.x=fp;_.tI=40;function ip(e,b){var a,c,d;if(b===e){return true;}if(!ob(b,15)){return false;}c=nb(b,15);if(c.gb()!=e.gb()){return false;}for(a=c.w();a.v();){d=a.y();if(!e.n(d)){return false;}}return true;}
function jp(a){return ip(this,a);}
function kp(){var a,b,c;a=0;for(b=this.w();b.v();){c=b.y();if(c!==null){a+=c.hC();}}return a;}
function gp(){}
_=gp.prototype=new hn();_.eQ=jp;_.hC=kp;_.tI=41;function bo(b,a,c){b.a=a;b.b=c;return b;}
function eo(b){var a;a=xq(b.b);return jo(new io(),b,a);}
function fo(a){return this.a.m(a);}
function go(){return eo(this);}
function ho(){return this.b.a.c;}
function ao(){}
_=ao.prototype=new gp();_.n=fo;_.w=go;_.gb=ho;_.tI=42;function jo(b,a,c){b.a=c;return b;}
function lo(a){return a.a.v();}
function mo(b){var a;a=b.a.y();return a.r();}
function no(){return lo(this);}
function oo(){return mo(this);}
function io(){}
_=io.prototype=new hm();_.v=no;_.y=oo;_.tI=0;function qo(b,a,c){b.a=a;b.b=c;return b;}
function so(b){var a;a=xq(b.b);return xo(new wo(),b,a);}
function to(a){return ar(this.a,a);}
function uo(){return so(this);}
function vo(){return this.b.a.c;}
function po(){}
_=po.prototype=new hn();_.n=to;_.w=uo;_.gb=vo;_.tI=0;function xo(b,a,c){b.a=c;return b;}
function zo(a){return a.a.v();}
function Ao(a){var b;b=a.a.y().s();return b;}
function Bo(){return zo(this);}
function Co(){return Ao(this);}
function wo(){}
_=wo.prototype=new hm();_.v=Bo;_.y=Co;_.tI=0;function Eq(){Eq=ps;fr=lr();}
function Bq(a){{Dq(a);}}
function Cq(a){Eq();Bq(a);return a;}
function Dq(a){a.a=B();a.d=C();a.b=tb(fr,x);a.c=0;}
function Fq(b,a){if(ob(a,1)){return pr(b.d,nb(a,1))!==fr;}else if(a===null){return b.b!==fr;}else{return or(b.a,a,a.hC())!==fr;}}
function ar(a,b){if(a.b!==fr&&nr(a.b,b)){return true;}else if(kr(a.d,b)){return true;}else if(ir(a.a,b)){return true;}return false;}
function br(a){return vq(new mq(),a);}
function cr(c,a){var b;if(ob(a,1)){b=pr(c.d,nb(a,1));}else if(a===null){b=c.b;}else{b=or(c.a,a,a.hC());}return b===fr?null:b;}
function dr(c,a,d){var b;if(a!==null){b=sr(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=rr(c.a,a,d,rm(a));}if(b===fr){++c.c;return null;}else{return b;}}
function er(c,a){var b;if(ob(a,1)){b=ur(c.d,nb(a,1));}else if(a===null){b=c.b;c.b=tb(fr,x);}else{b=tr(c.a,a,a.hC());}if(b===fr){return null;}else{--c.c;return b;}}
function gr(e,c){Eq();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.l(a[f]);}}}}
function hr(d,a){Eq();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=gq(c.substring(1),e);a.l(b);}}}
function ir(f,h){Eq();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(nr(h,d)){return true;}}}}return false;}
function jr(a){return Fq(this,a);}
function kr(c,d){Eq();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(nr(d,a)){return true;}}}return false;}
function lr(){Eq();}
function mr(){return br(this);}
function nr(a,b){Eq();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function qr(a){return cr(this,a);}
function or(f,h,e){Eq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(nr(h,d)){return c.s();}}}}
function pr(b,a){Eq();return b[':'+a];}
function rr(f,h,j,e){Eq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(nr(h,d)){var i=c.s();c.fb(j);return i;}}}else{a=f[e]=[];}var c=gq(h,j);a.push(c);}
function sr(c,a,d){Eq();a=':'+a;var b=c[a];c[a]=d;return b;}
function tr(f,h,e){Eq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(nr(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.s();}}}}
function ur(c,a){Eq();a=':'+a;var b=c[a];delete c[a];return b;}
function cq(){}
_=cq.prototype=new Fn();_.m=jr;_.q=mr;_.u=qr;_.tI=43;_.a=null;_.b=null;_.c=0;_.d=null;var fr;function eq(b,a,c){b.a=a;b.b=c;return b;}
function gq(a,b){return eq(new dq(),a,b);}
function hq(b){var a;if(ob(b,16)){a=nb(b,16);if(nr(this.a,a.r())&&nr(this.b,a.s())){return true;}}return false;}
function iq(){return this.a;}
function jq(){return this.b;}
function kq(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function lq(a){var b;b=this.b;this.b=a;return b;}
function dq(){}
_=dq.prototype=new hm();_.eQ=hq;_.r=iq;_.s=jq;_.hC=kq;_.fb=lq;_.tI=44;_.a=null;_.b=null;function vq(b,a){b.a=a;return b;}
function xq(a){return oq(new nq(),a.a);}
function yq(c){var a,b,d;if(ob(c,16)){a=nb(c,16);b=a.r();if(Fq(this.a,b)){d=cr(this.a,b);return nr(a.s(),d);}}return false;}
function zq(){return xq(this);}
function Aq(){return this.a.c;}
function mq(){}
_=mq.prototype=new gp();_.n=yq;_.w=zq;_.gb=Aq;_.tI=45;function oq(c,b){var a;c.c=b;a=np(new lp());if(c.c.b!==(Eq(),fr)){op(a,eq(new dq(),null,c.c.b));}hr(c.c.d,a);gr(c.c.a,a);c.a=yn(a);return c;}
function qq(a){return rn(a.a);}
function rq(a){return a.b=nb(sn(a.a),16);}
function sq(a){if(a.b===null){throw tl(new sl(),'Must call next() before remove().');}else{tn(a.a);er(a.c,a.b.r());a.b=null;}}
function tq(){return qq(this);}
function uq(){return rq(this);}
function nq(){}
_=nq.prototype=new hm();_.v=tq;_.y=uq;_.tI=0;_.a=null;_.b=null;function zr(){}
_=zr.prototype=new lm();_.tI=46;function js(k){var a,b,c,d,e,f,g,h,i,j,l,m;h=cj(new xi());ej(h,6);i=cj(new xi());ej(i,5);j=cj(new xi());Ei(j,true);ej(j,8);m=ms(new ls(),i,h,j);Ai(i,new Er());qj(i,896);qj(h,896);Ai(h,new bs());g=xj(new vj());a=dh(new bh());eh(a,ng(new kg(),'\u010C\xE1stka:&nbsp;',false));eh(a,h);eh(a,ng(new kg(),'&nbsp;K\u010D',false));yj(g,a);b=dh(new bh());if(oi('isUrok')!==null){eh(b,ng(new kg(),'\xDArok:&nbsp;',false));}else{eh(b,ng(new kg(),'Po\u010Det&nbsp;procent:&nbsp;',false));}eh(b,i);eh(b,ng(new kg(),'&nbsp;%',false));yj(g,b);d=dh(new bh());eh(d,ng(new kg(),'V\xFDsledek:&nbsp;',false));eh(d,j);eh(d,ng(new kg(),'&nbsp;K\u010D   ',false));l=mf(new ff(),'Vypo\u010Dti');l.j(fs(new es(),k,m));c=dh(new bh());e=zh(new xh(),'               ');pj(e,'50px');eh(c,e);eh(c,l);yj(g,c);f=zh(new xh(),'               ');pj(f,'50px');yj(g,f);yj(g,d);bf(oi('percent-calc'),g);}
function ks(a,b){a.a=b;}
function Dr(){}
_=Dr.prototype=new hm();_.tI=0;_.a=false;function as(c,a,b){if(!el(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){Bi(nb(c,17));}else{}}
function Er(){}
_=Er.prototype=new jh();_.C=as;_.tI=47;function ds(c,a,b){if(!el(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){Bi(nb(c,17));}else{}}
function bs(){}
_=bs.prototype=new jh();_.C=ds;_.tI=48;function fs(b,a,c){b.a=a;b.b=c;return b;}
function hs(a){if(this.a.a){return;}ks(this.a,true);os(this.b,null);ks(this.a,false);}
function es(){}
_=es.prototype=new hm();_.A=hs;_.tI=49;function ms(c,b,a,d){c.b=b;c.a=a;c.c=d;return c;}
function os(e,c){var a,b,d,f;if(Di(e.b)===null||vm(Di(e.b))<1){Fi(e.c,'');return;}b=ll(Di(e.b));if(Di(e.b)===null||vm(Di(e.b))<1){Fi(e.c,'');return;}a=ll(Di(e.a));f=Al(b*a)/100.0;d=Dm(f);Fi(e.c,d);}
function ls(){}
_=ls.prototype=new hm();_.tI=0;_.a=null;_.b=null;_.c=null;function Ek(){js(new Dr());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Ek();}catch(a){b(d);}else{Ek();}}
var sb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{13:1},{13:1},{13:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{7:1},{13:1},{8:1,9:1,10:1,11:1,12:1},{5:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1,17:1},{9:1,10:1,11:1,12:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{14:1},{15:1},{15:1},{14:1},{16:1},{15:1},{3:1},{7:1},{7:1},{6:1}];if (net_jesta_md_kalkulacka_PerCentCalc) {  var __gwt_initHandlers = net_jesta_md_kalkulacka_PerCentCalc.__gwt_initHandlers;  net_jesta_md_kalkulacka_PerCentCalc.onScriptLoad(gwtOnLoad);}})();