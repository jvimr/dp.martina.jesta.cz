(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,yp='com.google.gwt.core.client.',zp='com.google.gwt.lang.',Ap='com.google.gwt.user.client.',Bp='com.google.gwt.user.client.impl.',Cp='com.google.gwt.user.client.ui.',Dp='com.google.gwt.user.client.ui.impl.',Ep='java.lang.',Fp='java.util.',aq='net.jesta.md.procentaStranka.client.';function xp(){}
function Bj(a){return this===a;}
function Cj(){return kk(this);}
function zj(){}
_=zj.prototype={};_.eQ=Bj;_.hC=Cj;_.tI=1;var o=null;function r(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function s(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function t(){return ++u;}
var u=0;function x(b,a){if(!lb(a,2)){return false;}return B(b,kb(a,2));}
function y(a){return r(a);}
function z(){return [];}
function A(){return {};}
function C(a){return x(this,a);}
function B(a,b){return a===b;}
function D(){return y(this);}
function v(){}
_=v.prototype=new zj();_.eQ=C;_.hC=D;_.tI=7;function F(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function bb(a,b,c){return a[b]=c;}
function cb(b,a){return b[a];}
function db(a){return a.length;}
function fb(e,d,c,b,a){return eb(e,d,c,b,0,db(b),a);}
function eb(j,i,g,c,e,a,b){var d,f,h;if((f=cb(c,e))<0){throw new xj();}h=F(new E(),f,cb(i,e),cb(g,e),j);++e;if(e<a){j=dk(j,1);for(d=0;d<f;++d){bb(h,d,eb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){bb(h,d,b);}}return h;}
function gb(a,b,c){if(c!==null&&a.b!=0&& !lb(c,a.b)){throw new hj();}return bb(a,b,c);}
function E(){}
_=E.prototype=new zj();_.tI=0;function jb(b,a){return !(!(b&&ob[b][a]));}
function kb(b,a){if(b!=null)jb(b.tI,a)||nb();return b;}
function lb(b,a){return b!=null&&jb(b.tI,a);}
function nb(){throw new kj();}
function mb(a){if(a!==null){throw new kj();}return a;}
function pb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var ob;function tb(){tb=xp;nc=vm(new tm());{jc=new ud();zd(jc);}}
function ub(b,a){tb();Dd(jc,b,a);}
function vb(a,b){tb();return wd(jc,a,b);}
function wb(){tb();return Fd(jc,'button');}
function xb(){tb();return Fd(jc,'div');}
function yb(){tb();return ae(jc,'checkbox');}
function zb(){tb();return Fd(jc,'label');}
function Ab(){tb();return Fd(jc,'span');}
function Bb(){tb();return Fd(jc,'tbody');}
function Cb(){tb();return Fd(jc,'td');}
function Db(){tb();return Fd(jc,'tr');}
function Eb(){tb();return Fd(jc,'table');}
function bc(b,a,d){tb();var c;c=o;{ac(b,a,d);}}
function ac(b,a,c){tb();var d;if(a===mc){if(dc(b)==8192){mc=null;}}d=Fb;Fb=b;try{c.x(b);}finally{Fb=d;}}
function cc(b,a){tb();be(jc,b,a);}
function dc(a){tb();return ce(jc,a);}
function ec(a){tb();xd(jc,a);}
function fc(a){tb();return de(jc,a);}
function gc(a,b){tb();return ee(jc,a,b);}
function hc(a){tb();return fe(jc,a);}
function ic(a){tb();return yd(jc,a);}
function kc(a){tb();var b,c;c=true;if(nc.b>0){b=mb(zm(nc,nc.b-1));if(!(c=null.eb())){cc(a,true);ec(a);}}return c;}
function lc(b,a){tb();ge(jc,b,a);}
function pc(a,b,c){tb();ie(jc,a,b,c);}
function oc(a,b,c){tb();he(jc,a,b,c);}
function qc(a,b){tb();je(jc,a,b);}
function rc(a,b){tb();ke(jc,a,b);}
function sc(a,b){tb();Ad(jc,a,b);}
function tc(b,a,c){tb();le(jc,b,a,c);}
function uc(a,b){tb();Bd(jc,a,b);}
var Fb=null,jc=null,mc=null,nc;function xc(a){if(lb(a,4)){return vb(this,kb(a,4));}return x(pb(this,vc),a);}
function yc(){return y(pb(this,vc));}
function vc(){}
_=vc.prototype=new v();_.eQ=xc;_.hC=yc;_.tI=8;function Cc(a){return x(pb(this,zc),a);}
function Dc(){return y(pb(this,zc));}
function zc(){}
_=zc.prototype=new v();_.eQ=Cc;_.hC=Dc;_.tI=9;function dd(){dd=xp;fd=vm(new tm());{ed();}}
function ed(){dd();jd(new Fc());}
var fd;function bd(){while((dd(),fd).b>0){mb(zm((dd(),fd),0)).eb();}}
function cd(){return null;}
function Fc(){}
_=Fc.prototype=new zj();_.B=bd;_.C=cd;_.tI=10;function id(){id=xp;kd=vm(new tm());sd=vm(new tm());{od();}}
function jd(a){id();wm(kd,a);}
function ld(){id();var a,b;for(a=bl(kd);Ak(a);){b=kb(Bk(a),5);b.B();}}
function md(){id();var a,b,c,d;d=null;for(a=bl(kd);Ak(a);){b=kb(Bk(a),5);c=b.C();{d=c;}}return d;}
function nd(){id();var a,b;for(a=bl(sd);Ak(a);){b=mb(Bk(a));null.eb();}}
function od(){id();__gwt_initHandlers(function(){rd();},function(){return qd();},function(){pd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function pd(){id();var a;a=o;{ld();}}
function qd(){id();var a;a=o;{return md();}}
function rd(){id();var a;a=o;{nd();}}
var kd,sd;function Dd(c,b,a){b.appendChild(a);}
function Fd(b,a){return $doc.createElement(a);}
function ae(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function be(c,b,a){b.cancelBubble=a;}
function ce(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function de(c,b){var a=$doc.getElementById(b);return a||null;}
function ee(c,a,b){return !(!a[b]);}
function fe(b,a){return a.__eventBits||0;}
function ge(c,b,a){b.removeChild(a);}
function ie(c,a,b,d){a[b]=d;}
function he(c,a,b,d){a[b]=d;}
function je(c,a,b){a.__listener=b;}
function ke(c,a,b){if(!b){b='';}a.innerHTML=b;}
function le(c,b,a,d){b.style[a]=d;}
function td(){}
_=td.prototype=new zj();_.tI=0;function wd(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function xd(b,a){a.returnValue=false;}
function yd(c,a){var b=a.parentElement;return b||null;}
function zd(d){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}$wnd.__dispatchEvent=function(){var c=Cd;Cd=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!kc($wnd.event)){Cd=c;return;}}var b,a=this;while(a&& !(b=a.__listener))a=a.parentElement;if(b)bc($wnd.event,a,b);Cd=c;};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function Ad(c,a,b){if(!b)b='';a.innerText=b;}
function Bd(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ud(){}
_=ud.prototype=new td();_.tI=0;var Cd=null;function th(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function uh(b,a){if(b.h!==null){th(b,b.h,a);}b.h=a;}
function vh(b,a){yh(b.h,a);}
function wh(a,b){zh(a.h,b);}
function xh(b,a){uc(b.h,a|hc(b.h));}
function yh(a,b){pc(a,'className',b);}
function zh(a,b){a.style.display=b?'':'none';}
function rh(){}
_=rh.prototype=new zj();_.tI=0;_.h=null;function ti(a){if(a.f){throw sj(new rj(),"Should only call onAttach when the widget is detached from the browser's document");}a.f=true;qc(a.h,a);a.m();a.z();}
function ui(a){if(!a.f){throw sj(new rj(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.A();}finally{a.n();qc(a.h,null);a.f=false;}}
function vi(a){if(a.g!==null){a.g.E(a);}else if(a.g!==null){throw sj(new rj(),"This widget's parent does not implement HasWidgets");}}
function wi(b,a){if(b.f){qc(b.h,null);}uh(b,a);if(b.f){qc(a,b);}}
function xi(c,b){var a;a=c.g;if(b===null){if(a!==null&&a.f){ui(c);}c.g=null;}else{if(a!==null){throw sj(new rj(),'Cannot set a new parent without first clearing the old parent');}c.g=b;if(b.f){ti(c);}}}
function yi(){}
function zi(){}
function Ai(a){}
function Bi(){}
function Ci(){}
function Di(a){wi(this,a);}
function bi(){}
_=bi.prototype=new rh();_.m=yi;_.n=zi;_.x=Ai;_.z=Bi;_.A=Ci;_.F=Di;_.tI=11;_.f=false;_.g=null;function Ag(b,a){xi(a,b);}
function Cg(b,a){xi(a,null);}
function Dg(){var a,b;for(b=this.u();gi(b);){a=hi(b);ti(a);}}
function Eg(){var a,b;for(b=this.u();gi(b);){a=hi(b);ui(a);}}
function Fg(){}
function ah(){}
function zg(){}
_=zg.prototype=new bi();_.m=Dg;_.n=Eg;_.z=Fg;_.A=ah;_.tI=12;function tf(a){a.e=ki(new ci(),a);}
function uf(a){tf(a);return a;}
function vf(c,a,b){vi(a);li(c.e,a);ub(b,a.h);Ag(c,a);}
function xf(b,c){var a;if(c.g!==b){return false;}Cg(b,c);a=c.h;lc(ic(a),a);ri(b.e,c);return true;}
function yf(){return pi(this.e);}
function zf(a){return xf(this,a);}
function sf(){}
_=sf.prototype=new zg();_.u=yf;_.E=zf;_.tI=13;function ne(a){uf(a);a.F(xb());tc(a.h,'position','relative');tc(a.h,'overflow','hidden');return a;}
function oe(a,b){vf(a,b,a.h);}
function qe(a){tc(a,'left','');tc(a,'top','');tc(a,'position','');}
function re(b){var a;a=xf(this,b);if(a){qe(b.h);}return a;}
function me(){}
_=me.prototype=new sf();_.E=re;_.tI=14;function Df(){Df=xp;dj(),fj;}
function Bf(b,a){dj(),fj;Ef(b,a);return b;}
function Cf(b,a){if(b.c===null){b.c=of(new nf());}wm(b.c,a);}
function Ef(b,a){wi(b,a);xh(b,7041);}
function Ff(a){switch(dc(a)){case 1:if(this.c!==null){qf(this.c,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function ag(a){Ef(this,a);}
function Af(){}
_=Af.prototype=new bi();_.x=Ff;_.F=ag;_.tI=15;_.c=null;function ve(){ve=xp;dj(),fj;}
function ue(b,a){dj(),fj;Bf(b,a);return b;}
function we(a){rc(this.h,a);}
function te(){}
_=te.prototype=new Af();_.ab=we;_.tI=16;function ze(){ze=xp;dj(),fj;}
function xe(a){dj(),fj;ue(a,wb());Ae(a.h);vh(a,'gwt-Button');return a;}
function ye(b,a){dj(),fj;xe(b);b.ab(a);return b;}
function Ae(b){ze();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function se(){}
_=se.prototype=new te();_.tI=17;function Ce(a){uf(a);a.d=Eb();a.c=Bb();ub(a.d,a.c);a.F(a.d);return a;}
function Ee(c,b,a){pc(b,'align',a.a);}
function Fe(c,b,a){tc(b,'verticalAlign',a.a);}
function Be(){}
_=Be.prototype=new sf();_.tI=18;_.c=null;_.d=null;function ef(){ef=xp;dj(),fj;}
function bf(a){dj(),fj;cf(a,yb());vh(a,'gwt-CheckBox');return a;}
function df(b,a){dj(),fj;bf(b);hf(b,a);return b;}
function cf(b,a){var c;dj(),fj;ue(b,Ab());b.a=a;b.b=zb();uc(b.a,hc(b.h));uc(b.h,0);ub(b.h,b.a);ub(b.h,b.b);c='check'+ ++mf;pc(b.a,'id',c);pc(b.b,'htmlFor',c);return b;}
function ff(b){var a;a=b.f?'checked':'defaultChecked';return gc(b.a,a);}
function gf(b,a){oc(b.a,'checked',a);oc(b.a,'defaultChecked',a);}
function hf(b,a){sc(b.b,a);}
function jf(){qc(this.a,this);}
function kf(){qc(this.a,null);gf(this,ff(this));}
function lf(a){rc(this.b,a);}
function af(){}
_=af.prototype=new te();_.z=jf;_.A=kf;_.ab=lf;_.tI=19;_.a=null;_.b=null;var mf=0;function sk(d,a,b){var c;while(a.t()){c=a.w();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function uk(a){throw pk(new ok(),'add');}
function vk(b){var a;a=sk(this,this.u(),b);return a!==null;}
function rk(){}
_=rk.prototype=new zj();_.j=uk;_.l=vk;_.tI=0;function al(b,a){throw vj(new uj(),'Index: '+a+', Size: '+b.b);}
function bl(a){return yk(new xk(),a);}
function cl(b,a){throw pk(new ok(),'add');}
function dl(a){this.i(this.cb(),a);return true;}
function el(e){var a,b,c,d,f;if(e===this){return true;}if(!lb(e,12)){return false;}f=kb(e,12);if(this.cb()!=f.cb()){return false;}c=bl(this);d=f.u();while(Ak(c)){a=Bk(c);b=Bk(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function fl(){var a,b,c,d;c=1;a=31;b=bl(this);while(Ak(b)){d=Bk(b);c=31*c+(d===null?0:d.hC());}return c;}
function gl(){return bl(this);}
function hl(a){throw pk(new ok(),'remove');}
function wk(){}
_=wk.prototype=new rk();_.i=cl;_.j=dl;_.eQ=el;_.hC=fl;_.u=gl;_.D=hl;_.tI=20;function um(a){{xm(a);}}
function vm(a){um(a);return a;}
function wm(b,a){gn(b.a,b.b++,a);return true;}
function xm(a){a.a=z();a.b=0;}
function zm(b,a){if(a<0||a>=b.b){al(b,a);}return cn(b.a,a);}
function Am(b,a){return Bm(b,a,0);}
function Bm(c,b,a){if(a<0){al(c,a);}for(;a<c.b;++a){if(bn(b,cn(c.a,a))){return a;}}return (-1);}
function Cm(c,a){var b;b=zm(c,a);en(c.a,a,1);--c.b;return b;}
function Em(a,b){if(a<0||a>this.b){al(this,a);}Dm(this.a,a,b);++this.b;}
function Fm(a){return wm(this,a);}
function Dm(a,b,c){a.splice(b,0,c);}
function an(a){return Am(this,a)!=(-1);}
function bn(a,b){return a===b||a!==null&&a.eQ(b);}
function dn(a){return zm(this,a);}
function cn(a,b){return a[b];}
function fn(a){return Cm(this,a);}
function en(a,c,b){a.splice(c,b);}
function gn(a,b,c){a[b]=c;}
function hn(){return this.b;}
function tm(){}
_=tm.prototype=new wk();_.i=Em;_.j=Fm;_.l=an;_.r=dn;_.D=fn;_.cb=hn;_.tI=21;_.a=null;_.b=0;function of(a){vm(a);return a;}
function qf(d,c){var a,b;for(a=bl(d);Ak(a);){b=kb(Bk(a),6);b.y(c);}}
function nf(){}
_=nf.prototype=new tm();_.tI=22;function hg(){hg=xp;fg(new eg(),'center');ig=fg(new eg(),'left');fg(new eg(),'right');}
var ig;function fg(b,a){b.a=a;return b;}
function eg(){}
_=eg.prototype=new zj();_.tI=0;_.a=null;function og(){og=xp;mg(new lg(),'bottom');mg(new lg(),'middle');pg=mg(new lg(),'top');}
var pg;function mg(a,b){a.a=b;return a;}
function lg(){}
_=lg.prototype=new zj();_.tI=0;_.a=null;function ug(a){a.F(xb());xh(a,131197);vh(a,'gwt-Label');return a;}
function vg(b,a){ug(b);xg(b,a);return b;}
function xg(b,a){sc(b.h,a);}
function yg(a){switch(dc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function tg(){}
_=tg.prototype=new bi();_.x=yg;_.tI=23;function hh(){hh=xp;lh=go(new ln());}
function gh(b,a){hh();ne(b);if(a===null){a=ih();}b.F(a);ti(b);return b;}
function jh(c){hh();var a,b;b=kb(mo(lh,c),7);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=fc(c))){return null;}}if(lh.c==0){kh();}no(lh,c,b=gh(new bh(),a));return b;}
function ih(){hh();return $doc.body;}
function kh(){hh();jd(new ch());}
function bh(){}
_=bh.prototype=new me();_.tI=24;var lh;function eh(){var a,b;for(b=Al(im((hh(),lh)));bm(b);){a=kb(cm(b),7);if(a.f){ui(a);}}}
function fh(){return null;}
function ch(){}
_=ch.prototype=new zj();_.B=eh;_.C=fh;_.tI=25;function Bh(a){a.a=(hg(),ig);a.b=(og(),pg);}
function Ch(a){Ce(a);Bh(a);pc(a.d,'cellSpacing','0');pc(a.d,'cellPadding','0');return a;}
function Dh(b,d){var a,c;c=Db();a=Fh(b);ub(c,a);ub(b.c,c);vf(b,d,a);}
function Fh(b){var a;a=Cb();Ee(b,a,b.a);Fe(b,a,b.b);return a;}
function ai(c){var a,b;b=ic(c.h);a=xf(this,c);if(a){lc(this.c,ic(b));}return a;}
function Ah(){}
_=Ah.prototype=new Be();_.E=ai;_.tI=26;function ki(b,a){b.a=fb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function li(a,b){oi(a,b,a.b);}
function ni(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function oi(d,e,a){var b,c;if(a<0||a>d.b){throw new uj();}if(d.b==d.a.a){c=fb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){gb(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){gb(d.a,b,d.a[b-1]);}gb(d.a,a,e);}
function pi(a){return ei(new di(),a);}
function qi(c,b){var a;if(b<0||b>=c.b){throw new uj();}--c.b;for(a=b;a<c.b;++a){gb(c.a,a,c.a[a+1]);}gb(c.a,c.b,null);}
function ri(b,c){var a;a=ni(b,c);if(a==(-1)){throw new dp();}qi(b,a);}
function ci(){}
_=ci.prototype=new zj();_.tI=0;_.a=null;_.b=0;function ei(b,a){b.b=a;return b;}
function gi(a){return a.a<a.b.b-1;}
function hi(a){if(a.a>=a.b.b){throw new dp();}return a.b.a[++a.a];}
function ii(){return gi(this);}
function ji(){return hi(this);}
function di(){}
_=di.prototype=new zj();_.t=ii;_.w=ji;_.tI=0;_.a=(-1);function dj(){dj=xp;ej=aj(new Fi());fj=ej;}
function cj(a){dj();return a;}
function Ei(){}
_=Ei.prototype=new zj();_.tI=0;var ej,fj;function bj(){bj=xp;dj();}
function aj(a){bj();cj(a);return a;}
function Fi(){}
_=Fi.prototype=new Ei();_.tI=0;function mk(b,a){a;return b;}
function lk(){}
_=lk.prototype=new zj();_.tI=3;function pj(b,a){mk(b,a);return b;}
function oj(){}
_=oj.prototype=new lk();_.tI=4;function Ej(b,a){pj(b,a);return b;}
function Dj(){}
_=Dj.prototype=new oj();_.tI=5;function hj(){}
_=hj.prototype=new Dj();_.tI=27;function kj(){}
_=kj.prototype=new Dj();_.tI=28;function sj(b,a){Ej(b,a);return b;}
function rj(){}
_=rj.prototype=new Dj();_.tI=29;function vj(b,a){Ej(b,a);return b;}
function uj(){}
_=uj.prototype=new Dj();_.tI=30;function xj(){}
_=xj.prototype=new Dj();_.tI=31;function ck(g){var a=gk;if(!a){a=gk={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function dk(b,a){return b.substr(a,b.length-a);}
function ek(a,b){return String(a)==b;}
function fk(a){if(!lb(a,1))return false;return ek(this,a);}
function hk(){return ck(this);}
_=String.prototype;_.eQ=fk;_.hC=hk;_.tI=2;var gk=null;function kk(a){return s(a);}
function pk(b,a){Ej(b,a);return b;}
function ok(){}
_=ok.prototype=new Dj();_.tI=32;function yk(b,a){b.c=a;return b;}
function Ak(a){return a.a<a.c.cb();}
function Bk(a){if(!Ak(a)){throw new dp();}return a.c.r(a.b=a.a++);}
function Ck(a){if(a.b<0){throw new rj();}a.c.D(a.b);a.a=a.b;a.b=(-1);}
function Dk(){return Ak(this);}
function Ek(){return Bk(this);}
function xk(){}
_=xk.prototype=new zj();_.t=Dk;_.w=Ek;_.tI=0;_.a=0;_.b=(-1);function gm(f,d,e){var a,b,c;for(b=ao(f.o());zn(b);){a=An(b);c=a.p();if(d===null?c===null:d.eQ(c)){if(e){Bn(b);}return a;}}return null;}
function hm(b){var a;a=b.o();return kl(new jl(),b,a);}
function im(b){var a;a=lo(b);return yl(new xl(),b,a);}
function jm(a){return gm(this,a,false)!==null;}
function km(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!lb(d,13)){return false;}f=kb(d,13);c=hm(this);e=f.v();if(!qm(c,e)){return false;}for(a=ml(c);tl(a);){b=ul(a);h=this.s(b);g=f.s(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function lm(b){var a;a=gm(this,b,false);return a===null?null:a.q();}
function mm(){var a,b,c;b=0;for(c=ao(this.o());zn(c);){a=An(c);b+=a.hC();}return b;}
function nm(){return hm(this);}
function il(){}
_=il.prototype=new zj();_.k=jm;_.eQ=km;_.s=lm;_.hC=mm;_.v=nm;_.tI=33;function qm(e,b){var a,c,d;if(b===e){return true;}if(!lb(b,14)){return false;}c=kb(b,14);if(c.cb()!=e.cb()){return false;}for(a=c.u();a.t();){d=a.w();if(!e.l(d)){return false;}}return true;}
function rm(a){return qm(this,a);}
function sm(){var a,b,c;a=0;for(b=this.u();b.t();){c=b.w();if(c!==null){a+=c.hC();}}return a;}
function om(){}
_=om.prototype=new rk();_.eQ=rm;_.hC=sm;_.tI=34;function kl(b,a,c){b.a=a;b.b=c;return b;}
function ml(b){var a;a=ao(b.b);return rl(new ql(),b,a);}
function nl(a){return this.a.k(a);}
function ol(){return ml(this);}
function pl(){return this.b.a.c;}
function jl(){}
_=jl.prototype=new om();_.l=nl;_.u=ol;_.cb=pl;_.tI=35;function rl(b,a,c){b.a=c;return b;}
function tl(a){return a.a.t();}
function ul(b){var a;a=b.a.w();return a.p();}
function vl(){return tl(this);}
function wl(){return ul(this);}
function ql(){}
_=ql.prototype=new zj();_.t=vl;_.w=wl;_.tI=0;function yl(b,a,c){b.a=a;b.b=c;return b;}
function Al(b){var a;a=ao(b.b);return Fl(new El(),b,a);}
function Bl(a){return ko(this.a,a);}
function Cl(){return Al(this);}
function Dl(){return this.b.a.c;}
function xl(){}
_=xl.prototype=new rk();_.l=Bl;_.u=Cl;_.cb=Dl;_.tI=0;function Fl(b,a,c){b.a=c;return b;}
function bm(a){return a.a.t();}
function cm(a){var b;b=a.a.w().q();return b;}
function dm(){return bm(this);}
function em(){return cm(this);}
function El(){}
_=El.prototype=new zj();_.t=dm;_.w=em;_.tI=0;function io(){io=xp;po=vo();}
function fo(a){{ho(a);}}
function go(a){io();fo(a);return a;}
function ho(a){a.a=z();a.d=A();a.b=pb(po,v);a.c=0;}
function jo(b,a){if(lb(a,1)){return zo(b.d,kb(a,1))!==po;}else if(a===null){return b.b!==po;}else{return yo(b.a,a,a.hC())!==po;}}
function ko(a,b){if(a.b!==po&&xo(a.b,b)){return true;}else if(uo(a.d,b)){return true;}else if(so(a.a,b)){return true;}return false;}
function lo(a){return En(new vn(),a);}
function mo(c,a){var b;if(lb(a,1)){b=zo(c.d,kb(a,1));}else if(a===null){b=c.b;}else{b=yo(c.a,a,a.hC());}return b===po?null:b;}
function no(c,a,d){var b;if(a!==null){b=Co(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=Bo(c.a,a,d,ck(a));}if(b===po){++c.c;return null;}else{return b;}}
function oo(c,a){var b;if(lb(a,1)){b=Eo(c.d,kb(a,1));}else if(a===null){b=c.b;c.b=pb(po,v);}else{b=Do(c.a,a,a.hC());}if(b===po){return null;}else{--c.c;return b;}}
function qo(e,c){io();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f]);}}}}
function ro(d,a){io();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=pn(c.substring(1),e);a.j(b);}}}
function so(f,h){io();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(xo(h,d)){return true;}}}}return false;}
function to(a){return jo(this,a);}
function uo(c,d){io();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(xo(d,a)){return true;}}}return false;}
function vo(){io();}
function wo(){return lo(this);}
function xo(a,b){io();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function Ao(a){return mo(this,a);}
function yo(f,h,e){io();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.p();if(xo(h,d)){return c.q();}}}}
function zo(b,a){io();return b[':'+a];}
function Bo(f,h,j,e){io();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.p();if(xo(h,d)){var i=c.q();c.bb(j);return i;}}}else{a=f[e]=[];}var c=pn(h,j);a.push(c);}
function Co(c,a,d){io();a=':'+a;var b=c[a];c[a]=d;return b;}
function Do(f,h,e){io();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.p();if(xo(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.q();}}}}
function Eo(c,a){io();a=':'+a;var b=c[a];delete c[a];return b;}
function ln(){}
_=ln.prototype=new il();_.k=to;_.o=wo;_.s=Ao;_.tI=36;_.a=null;_.b=null;_.c=0;_.d=null;var po;function nn(b,a,c){b.a=a;b.b=c;return b;}
function pn(a,b){return nn(new mn(),a,b);}
function qn(b){var a;if(lb(b,15)){a=kb(b,15);if(xo(this.a,a.p())&&xo(this.b,a.q())){return true;}}return false;}
function rn(){return this.a;}
function sn(){return this.b;}
function tn(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function un(a){var b;b=this.b;this.b=a;return b;}
function mn(){}
_=mn.prototype=new zj();_.eQ=qn;_.p=rn;_.q=sn;_.hC=tn;_.bb=un;_.tI=37;_.a=null;_.b=null;function En(b,a){b.a=a;return b;}
function ao(a){return xn(new wn(),a.a);}
function bo(c){var a,b,d;if(lb(c,15)){a=kb(c,15);b=a.p();if(jo(this.a,b)){d=mo(this.a,b);return xo(a.q(),d);}}return false;}
function co(){return ao(this);}
function eo(){return this.a.c;}
function vn(){}
_=vn.prototype=new om();_.l=bo;_.u=co;_.cb=eo;_.tI=38;function xn(c,b){var a;c.c=b;a=vm(new tm());if(c.c.b!==(io(),po)){wm(a,nn(new mn(),null,c.c.b));}ro(c.c.d,a);qo(c.c.a,a);c.a=bl(a);return c;}
function zn(a){return Ak(a.a);}
function An(a){return a.b=kb(Bk(a.a),15);}
function Bn(a){if(a.b===null){throw sj(new rj(),'Must call next() before remove().');}else{Ck(a.a);oo(a.c,a.b.p());a.b=null;}}
function Cn(){return zn(this);}
function Dn(){return An(this);}
function wn(){}
_=wn.prototype=new zj();_.t=Cn;_.w=Dn;_.tI=0;_.a=null;_.b=null;function dp(){}
_=dp.prototype=new Dj();_.tI=39;function vp(a,b){if(a.a!==null){Dh(a.a,vg(new tg(),b));}}
function wp(e){var a,b,c,d;e.a=Ch(new Ah());b=ye(new se(),'Odpov\u011B\u010F');c=ye(new se(),'Odpov\u011B\u010F');d=ye(new se(),'Odpov\u011B\u010F');Cf(b,new ip());Cf(c,new lp());Cf(d,new op());if(jh('logger')!==null){oe(jh('logger'),e.a);vp(e,'enabling logger');}if(jh('grid1-odpoved-button')!==null){vp(e,'enabling grids');oe(jh('grid1-odpoved-button'),b);wh(jh('grid1-odpoved-default'),false);wh(jh('grid1-odpoved-text'),false);oe(jh('grid2-odpoved-button'),c);wh(jh('grid2-odpoved-default'),false);wh(jh('grid2-odpoved-text'),false);oe(jh('grid3-odpoved-button'),d);wh(jh('grid3-odpoved-default'),false);wh(jh('grid3-odpoved-text'),false);}if(jh('kalkulacka')!==null){vp(e,'enabling calc');wh(jh('kalkulacka'),false);}if(jh('unchecked1')!==null){oe(jh('unchecked1'),df(new af(),'a'));oe(jh('unchecked2'),df(new af(),'b'));oe(jh('unchecked3'),df(new af(),'c'));oe(jh('unchecked4'),df(new af(),'d'));}if(jh('hint1-nadpis-default')!==null){vp(e,'enabling hint1');wh(jh('hint1-nadpis-default'),false);wh(jh('hint1-text'),false);a=ye(new se(),'N\xE1pov\u011Bda');Cf(a,new rp());oe(jh('hint1-button'),a);}}
function hp(){}
_=hp.prototype=new zj();_.tI=0;_.a=null;function kp(a){wh(jh('grid1-odpoved-text'),true);}
function ip(){}
_=ip.prototype=new zj();_.y=kp;_.tI=40;function np(a){wh(jh('grid2-odpoved-text'),true);}
function lp(){}
_=lp.prototype=new zj();_.y=np;_.tI=41;function qp(a){wh(jh('grid3-odpoved-text'),true);}
function op(){}
_=op.prototype=new zj();_.y=qp;_.tI=42;function tp(a){wh(jh('hint1-text'),false);}
function rp(){}
_=rp.prototype=new zj();_.y=tp;_.tI=43;function gj(){wp(new hp());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{gj();}catch(a){b(d);}else{gj();}}
var ob=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{12:1},{12:1},{12:1},{8:1,9:1,10:1,11:1},{7:1,8:1,9:1,10:1,11:1},{5:1},{8:1,9:1,10:1,11:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{13:1},{14:1},{14:1},{13:1},{15:1},{14:1},{3:1},{6:1},{6:1},{6:1},{6:1}];if (net_jesta_md_procentaStranka_Procenta) {  var __gwt_initHandlers = net_jesta_md_procentaStranka_Procenta.__gwt_initHandlers;  net_jesta_md_procentaStranka_Procenta.onScriptLoad(gwtOnLoad);}})();