(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,ps='com.google.gwt.core.client.',qs='com.google.gwt.lang.',rs='com.google.gwt.user.client.',ss='com.google.gwt.user.client.impl.',ts='com.google.gwt.user.client.ui.',us='com.google.gwt.user.client.ui.impl.',vs='java.lang.',ws='java.util.',xs='net.jesta.md.kalkulacka.client.';function os(){}
function im(a){return this===a;}
function jm(){return Fm(this);}
function gm(){}
_=gm.prototype={};_.eQ=im;_.hC=jm;_.tI=1;var q=null;function t(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
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
_=x.prototype=new gm();_.eQ=E;_.hC=F;_.tI=7;function bb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function db(a,b,c){return a[b]=c;}
function eb(b,a){return b[a];}
function fb(a){return a.length;}
function hb(e,d,c,b,a){return gb(e,d,c,b,0,fb(b),a);}
function gb(j,i,g,c,e,a,b){var d,f,h;if((f=eb(c,e))<0){throw new Al();}h=bb(new ab(),f,eb(i,e),eb(g,e),j);++e;if(e<a){j=vm(j,1);for(d=0;d<f;++d){db(h,d,gb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){db(h,d,b);}}return h;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !ob(c,a.b)){throw new Ek();}return db(a,b,c);}
function ab(){}
_=ab.prototype=new gm();_.tI=0;function lb(b,a){return !(!(b&&sb[b][a]));}
function mb(a){return String.fromCharCode(a);}
function nb(b,a){if(b!=null)lb(b.tI,a)||rb();return b;}
function ob(b,a){return b!=null&&lb(b.tI,a);}
function pb(a){return a&65535;}
function rb(){throw new el();}
function qb(a){if(a!==null){throw new el();}return a;}
function tb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var sb;function xb(){xb=os;uc=mp(new kp());{qc=new Cd();de(qc);}}
function yb(b,a){xb();fe(qc,b,a);}
function zb(a,b){xb();return ae(qc,a,b);}
function Ab(){xb();return he(qc,'button');}
function Bb(){xb();return he(qc,'div');}
function Cb(){xb();return ie(qc,'text');}
function Db(){xb();return he(qc,'tbody');}
function Eb(){xb();return he(qc,'td');}
function Fb(){xb();return he(qc,'tr');}
function ac(){xb();return he(qc,'table');}
function dc(b,a,d){xb();var c;c=q;{cc(b,a,d);}}
function cc(b,a,c){xb();var d;if(a===tc){if(kc(b)==8192){tc=null;}}d=bc;bc=b;try{c.z(b);}finally{bc=d;}}
function ec(b,a){xb();je(qc,b,a);}
function fc(a){xb();return ke(qc,a);}
function gc(a){xb();return le(qc,a);}
function hc(a){xb();return me(qc,a);}
function ic(a){xb();return ne(qc,a);}
function jc(a){xb();return oe(qc,a);}
function kc(a){xb();return pe(qc,a);}
function lc(a){xb();be(qc,a);}
function mc(a){xb();return qe(qc,a);}
function nc(a,b){xb();return re(qc,a,b);}
function oc(a){xb();return se(qc,a);}
function pc(a){xb();return ce(qc,a);}
function rc(a){xb();var b,c;c=true;if(uc.b>0){b=qb(qp(uc,uc.b-1));if(!(c=null.ib())){ec(a,true);lc(a);}}return c;}
function sc(b,a){xb();te(qc,b,a);}
function xc(a,b,c){xb();we(qc,a,b,c);}
function vc(a,b,c){xb();ue(qc,a,b,c);}
function wc(a,b,c){xb();ve(qc,a,b,c);}
function yc(a,b){xb();xe(qc,a,b);}
function zc(a,b){xb();ye(qc,a,b);}
function Ac(a,b){xb();ze(qc,a,b);}
function Bc(b,a,c){xb();Ae(qc,b,a,c);}
function Cc(a,b){xb();ee(qc,a,b);}
var bc=null,qc=null,tc=null,uc;function Fc(a){if(ob(a,4)){return zb(this,nb(a,4));}return z(tb(this,Dc),a);}
function ad(){return A(tb(this,Dc));}
function Dc(){}
_=Dc.prototype=new x();_.eQ=Fc;_.hC=ad;_.tI=8;function ed(a){return z(tb(this,bd),a);}
function fd(){return A(tb(this,bd));}
function bd(){}
_=bd.prototype=new x();_.eQ=ed;_.hC=fd;_.tI=9;function ld(){ld=os;nd=mp(new kp());{md();}}
function md(){ld();rd(new hd());}
var nd;function jd(){while((ld(),nd).b>0){qb(qp((ld(),nd),0)).ib();}}
function kd(){return null;}
function hd(){}
_=hd.prototype=new gm();_.ab=jd;_.bb=kd;_.tI=10;function qd(){qd=os;sd=mp(new kp());Ad=mp(new kp());{wd();}}
function rd(a){qd();np(sd,a);}
function td(){qd();var a,b;for(a=xn(sd);qn(a);){b=nb(rn(a),5);b.ab();}}
function ud(){qd();var a,b,c,d;d=null;for(a=xn(sd);qn(a);){b=nb(rn(a),5);c=b.bb();{d=c;}}return d;}
function vd(){qd();var a,b;for(a=xn(Ad);qn(a);){b=qb(rn(a));null.ib();}}
function wd(){qd();__gwt_initHandlers(function(){zd();},function(){return yd();},function(){xd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function xd(){qd();var a;a=q;{td();}}
function yd(){qd();var a;a=q;{return ud();}}
function zd(){qd();var a;a=q;{vd();}}
var sd,Ad;function fe(c,b,a){b.appendChild(a);}
function he(b,a){return $doc.createElement(a);}
function ie(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function je(c,b,a){b.cancelBubble=a;}
function ke(b,a){return !(!a.altKey);}
function le(b,a){return !(!a.ctrlKey);}
function me(b,a){return a.which||(a.keyCode|| -1);}
function ne(b,a){return !(!a.metaKey);}
function oe(b,a){return !(!a.shiftKey);}
function pe(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function qe(c,b){var a=$doc.getElementById(b);return a||null;}
function re(d,a,b){var c=a[b];return c==null?null:String(c);}
function se(b,a){return a.__eventBits||0;}
function te(c,b,a){b.removeChild(a);}
function we(c,a,b,d){a[b]=d;}
function ue(c,a,b,d){a[b]=d;}
function ve(c,a,b,d){a[b]=d;}
function xe(c,a,b){a.__listener=b;}
function ye(c,a,b){if(!b){b='';}a.innerHTML=b;}
function ze(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function Ae(c,b,a,d){b.style[a]=d;}
function Bd(){}
_=Bd.prototype=new gm();_.tI=0;function ae(c,a,b){return a==b;}
function be(b,a){a.preventDefault();}
function ce(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function de(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){dc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!rc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)dc(b,a,c);};$wnd.__captureElem=null;}
function ee(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function Ed(){}
_=Ed.prototype=new Bd();_.tI=0;function Cd(){}
_=Cd.prototype=new Ed();_.tI=0;function Bi(b,a){Ci(b,Ei(b)+mb(45)+a);}
function Ci(b,a){jj(b.i,a,true);}
function Ei(a){return hj(a.i);}
function Fi(b,a){aj(b,Ei(b)+mb(45)+a);}
function aj(b,a){jj(b.i,a,false);}
function bj(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function cj(b,a){if(b.i!==null){bj(b,b.i,a);}b.i=a;}
function dj(b,a){ij(b.i,a);}
function ej(a,b){Bc(a.i,'width',b);}
function fj(b,a){Cc(b.i,a|oc(b.i));}
function gj(a){return nc(a,'className');}
function hj(a){var b,c;b=gj(a);c=rm(b,32);if(c>=0){return wm(b,0,c);}return b;}
function ij(a,b){xc(a,'className',b);}
function jj(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw lm(new km(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=xm(j);if(um(j)==0){throw pl(new ol(),'Style names cannot be empty');}i=gj(c);e=sm(i,j);while(e!=(-1)){if(e==0||om(i,e-1)==32){f=e+um(j);g=um(i);if(f==g||f<g&&om(i,f)==32){break;}}e=tm(i,j,e+1);}if(a){if(e==(-1)){if(um(i)>0){i+=' ';}xc(c,'className',i+j);}}else{if(e!=(-1)){b=xm(wm(i,0,e));d=xm(vm(i,e+um(j)));if(um(b)==0){h=d;}else if(um(d)==0){h=b;}else{h=b+' '+d;}xc(c,'className',h);}}}
function Ai(){}
_=Ai.prototype=new gm();_.tI=0;_.i=null;function dk(a){if(a.g){throw sl(new rl(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;yc(a.i,a);a.o();a.E();}
function ek(a){if(!a.g){throw sl(new rl(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.F();}finally{a.p();yc(a.i,null);a.g=false;}}
function fk(a){if(a.h!==null){a.h.db(a);}else if(a.h!==null){throw sl(new rl(),"This widget's parent does not implement HasWidgets");}}
function gk(b,a){if(b.g){yc(b.i,null);}cj(b,a);if(b.g){yc(a,b);}}
function hk(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){ek(c);}c.h=null;}else{if(a!==null){throw sl(new rl(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){dk(c);}}}
function ik(){}
function jk(){}
function kk(a){}
function lk(){}
function mk(){}
function nk(a){gk(this,a);}
function rj(){}
_=rj.prototype=new Ai();_.o=ik;_.p=jk;_.z=kk;_.E=lk;_.F=mk;_.eb=nk;_.tI=11;_.g=false;_.h=null;function uh(b,a){hk(a,b);}
function wh(b,a){hk(a,null);}
function xh(){var a,b;for(b=this.w();wj(b);){a=xj(b);dk(a);}}
function yh(){var a,b;for(b=this.w();wj(b);){a=xj(b);ek(a);}}
function zh(){}
function Ah(){}
function th(){}
_=th.prototype=new rj();_.o=xh;_.p=yh;_.E=zh;_.F=Ah;_.tI=12;function xf(a){a.f=Aj(new sj(),a);}
function yf(a){xf(a);return a;}
function zf(c,a,b){fk(a);Bj(c.f,a);yb(b,a.i);uh(c,a);}
function Bf(b,c){var a;if(c.h!==b){return false;}wh(b,c);a=c.i;sc(pc(a),a);bk(b.f,c);return true;}
function Cf(){return Fj(this.f);}
function Df(a){return Bf(this,a);}
function wf(){}
_=wf.prototype=new th();_.w=Cf;_.db=Df;_.tI=13;function Ce(a){yf(a);a.eb(Bb());Bc(a.i,'position','relative');Bc(a.i,'overflow','hidden');return a;}
function De(a,b){zf(a,b,a.i);}
function Fe(a){Bc(a,'left','');Bc(a,'top','');Bc(a,'position','');}
function af(b){var a;a=Bf(this,b);if(a){Fe(b.i);}return a;}
function Be(){}
_=Be.prototype=new wf();_.db=af;_.tI=14;function ag(){ag=os;Ak(),Ck;}
function Ff(b,a){Ak(),Ck;cg(b,a);return b;}
function bg(b,a){switch(kc(a)){case 1:if(b.d!==null){uf(b.d,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function cg(b,a){gk(b,a);fj(b,7041);}
function dg(a){if(this.d===null){this.d=sf(new rf());}np(this.d,a);}
function eg(a){bg(this,a);}
function fg(a){cg(this,a);}
function Ef(){}
_=Ef.prototype=new rj();_.j=dg;_.z=eg;_.eb=fg;_.tI=15;_.d=null;function ef(){ef=os;Ak(),Ck;}
function df(b,a){Ak(),Ck;Ff(b,a);return b;}
function ff(b,a){zc(b.i,a);}
function cf(){}
_=cf.prototype=new Ef();_.tI=16;function jf(){jf=os;Ak(),Ck;}
function gf(a){Ak(),Ck;df(a,Ab());kf(a.i);dj(a,'gwt-Button');return a;}
function hf(b,a){Ak(),Ck;gf(b);ff(b,a);return b;}
function kf(b){jf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function bf(){}
_=bf.prototype=new cf();_.tI=17;function mf(a){yf(a);a.e=ac();a.d=Db();yb(a.e,a.d);a.eb(a.e);return a;}
function of(c,b,a){xc(b,'align',a.a);}
function pf(c,b,a){Bc(b,'verticalAlign',a.a);}
function lf(){}
_=lf.prototype=new wf();_.tI=18;_.d=null;_.e=null;function hn(d,a,b){var c;while(a.v()){c=a.y();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function kn(a){throw en(new dn(),'add');}
function ln(b){var a;a=hn(this,this.w(),b);return a!==null;}
function gn(){}
_=gn.prototype=new gm();_.l=kn;_.n=ln;_.tI=0;function wn(b,a){throw vl(new ul(),'Index: '+a+', Size: '+b.b);}
function xn(a){return on(new nn(),a);}
function yn(b,a){throw en(new dn(),'add');}
function zn(a){this.k(this.gb(),a);return true;}
function An(e){var a,b,c,d,f;if(e===this){return true;}if(!ob(e,13)){return false;}f=nb(e,13);if(this.gb()!=f.gb()){return false;}c=xn(this);d=f.w();while(qn(c)){a=rn(c);b=rn(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function Bn(){var a,b,c,d;c=1;a=31;b=xn(this);while(qn(b)){d=rn(b);c=31*c+(d===null?0:d.hC());}return c;}
function Cn(){return xn(this);}
function Dn(a){throw en(new dn(),'remove');}
function mn(){}
_=mn.prototype=new gn();_.k=yn;_.l=zn;_.eQ=An;_.hC=Bn;_.w=Cn;_.cb=Dn;_.tI=19;function lp(a){{op(a);}}
function mp(a){lp(a);return a;}
function np(b,a){Dp(b.a,b.b++,a);return true;}
function op(a){a.a=B();a.b=0;}
function qp(b,a){if(a<0||a>=b.b){wn(b,a);}return zp(b.a,a);}
function rp(b,a){return sp(b,a,0);}
function sp(c,b,a){if(a<0){wn(c,a);}for(;a<c.b;++a){if(yp(b,zp(c.a,a))){return a;}}return (-1);}
function tp(c,a){var b;b=qp(c,a);Bp(c.a,a,1);--c.b;return b;}
function vp(a,b){if(a<0||a>this.b){wn(this,a);}up(this.a,a,b);++this.b;}
function wp(a){return np(this,a);}
function up(a,b,c){a.splice(b,0,c);}
function xp(a){return rp(this,a)!=(-1);}
function yp(a,b){return a===b||a!==null&&a.eQ(b);}
function Ap(a){return qp(this,a);}
function zp(a,b){return a[b];}
function Cp(a){return tp(this,a);}
function Bp(a,c,b){a.splice(c,b);}
function Dp(a,b,c){a[b]=c;}
function Ep(){return this.b;}
function kp(){}
_=kp.prototype=new mn();_.k=vp;_.l=wp;_.n=xp;_.t=Ap;_.cb=Cp;_.gb=Ep;_.tI=20;_.a=null;_.b=0;function sf(a){mp(a);return a;}
function uf(d,c){var a,b;for(a=xn(d);qn(a);){b=nb(rn(a),6);b.A(c);}}
function rf(){}
_=rf.prototype=new kp();_.tI=21;function mg(){mg=os;kg(new jg(),'center');ng=kg(new jg(),'left');kg(new jg(),'right');}
var ng;function kg(b,a){b.a=a;return b;}
function jg(){}
_=jg.prototype=new gm();_.tI=0;_.a=null;function tg(){tg=os;rg(new qg(),'bottom');rg(new qg(),'middle');ug=rg(new qg(),'top');}
var ug;function rg(a,b){a.a=b;return a;}
function qg(){}
_=qg.prototype=new gm();_.tI=0;_.a=null;function yg(a){a.a=(mg(),ng);a.c=(tg(),ug);}
function zg(a){mf(a);yg(a);a.b=Fb();yb(a.d,a.b);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function Ag(b,c){var a;a=Cg(b);yb(b.b,a);zf(b,c,a);}
function Cg(b){var a;a=Eb();of(b,a,b.a);pf(b,a,b.c);return a;}
function Dg(c){var a,b;b=pc(c.i);a=Bf(this,c);if(a){sc(this.b,b);}return a;}
function xg(){}
_=xg.prototype=new lf();_.db=Dg;_.tI=22;_.b=null;function bh(c,a,b){}
function ch(c,a,b){}
function dh(c,a,b){}
function Fg(){}
_=Fg.prototype=new gm();_.B=bh;_.C=ch;_.D=dh;_.tI=23;function fh(a){mp(a);return a;}
function hh(f,e,b,d){var a,c;for(a=xn(f);qn(a);){c=nb(rn(a),7);c.B(e,b,d);}}
function ih(f,e,b,d){var a,c;for(a=xn(f);qn(a);){c=nb(rn(a),7);c.C(e,b,d);}}
function jh(f,e,b,d){var a,c;for(a=xn(f);qn(a);){c=nb(rn(a),7);c.D(e,b,d);}}
function kh(d,c,a){var b;b=lh(a);switch(kc(a)){case 128:hh(d,c,pb(hc(a)),b);break;case 512:jh(d,c,pb(hc(a)),b);break;case 256:ih(d,c,pb(hc(a)),b);break;}}
function lh(a){return (jc(a)?1:0)|(ic(a)?8:0)|(gc(a)?2:0)|(fc(a)?4:0);}
function eh(){}
_=eh.prototype=new kp();_.tI=24;function oh(a){a.eb(Bb());fj(a,131197);dj(a,'gwt-Label');return a;}
function ph(b,a){oh(b);rh(b,a);return b;}
function rh(b,a){Ac(b.i,a);}
function sh(a){switch(kc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function nh(){}
_=nh.prototype=new rj();_.z=sh;_.tI=25;function bi(){bi=os;fi=Bq(new bq());}
function ai(b,a){bi();Ce(b);if(a===null){a=ci();}b.eb(a);dk(b);return b;}
function di(c){bi();var a,b;b=nb(br(fi,c),8);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=mc(c))){return null;}}if(fi.c==0){ei();}cr(fi,c,b=ai(new Bh(),a));return b;}
function ci(){bi();return $doc.body;}
function ei(){bi();rd(new Ch());}
function Bh(){}
_=Bh.prototype=new Be();_.tI=26;var fi;function Eh(){var a,b;for(b=ro(Fo((bi(),fi)));yo(b);){a=nb(zo(b),8);if(a.g){ek(a);}}}
function Fh(){return null;}
function Ch(){}
_=Ch.prototype=new gm();_.ab=Eh;_.bb=Fh;_.tI=27;function ri(){ri=os;Ak(),Ck;}
function oi(b,a){Ak(),Ck;Ff(b,a);fj(b,1024);return b;}
function pi(b,a){if(b.c===null){b.c=fh(new eh());}np(b.c,a);}
function qi(a){if(a.b!==null){lc(a.b);}}
function si(a){return nc(a.i,'value');}
function ti(c,a){var b;vc(c.i,'readOnly',a);b='readonly';if(a){Bi(c,b);}else{Fi(c,b);}}
function ui(b,a){xc(b.i,'value',a!==null?a:'');}
function vi(a){if(this.a===null){this.a=sf(new rf());}np(this.a,a);}
function wi(a){var b;bg(this,a);b=kc(a);if(this.c!==null&&(b&896)!=0){this.b=a;kh(this.c,this,a);this.b=null;}else if(b==1){if(this.a!==null){uf(this.a,this);}}else{}}
function ni(){}
_=ni.prototype=new Ef();_.j=vi;_.z=wi;_.tI=28;_.a=null;_.b=null;_.c=null;function yi(){yi=os;Ak(),Ck;}
function xi(a){Ak(),Ck;oi(a,Cb());dj(a,'gwt-TextBox');return a;}
function zi(b,a){wc(b.i,'size',a);}
function mi(){}
_=mi.prototype=new ni();_.tI=29;function lj(a){a.a=(mg(),ng);a.b=(tg(),ug);}
function mj(a){mf(a);lj(a);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function nj(b,d){var a,c;c=Fb();a=pj(b);yb(c,a);yb(b.d,c);zf(b,d,a);}
function pj(b){var a;a=Eb();of(b,a,b.a);pf(b,a,b.b);return a;}
function qj(c){var a,b;b=pc(c.i);a=Bf(this,c);if(a){sc(this.d,pc(b));}return a;}
function kj(){}
_=kj.prototype=new lf();_.db=qj;_.tI=30;function Aj(b,a){b.a=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[10],[4],null);return b;}
function Bj(a,b){Ej(a,b,a.b);}
function Dj(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function Ej(d,e,a){var b,c;if(a<0||a>d.b){throw new ul();}if(d.b==d.a.a){c=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[10],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function Fj(a){return uj(new tj(),a);}
function ak(c,b){var a;if(b<0||b>=c.b){throw new ul();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function bk(b,c){var a;a=Dj(b,c);if(a==(-1)){throw new yr();}ak(b,a);}
function sj(){}
_=sj.prototype=new gm();_.tI=0;_.a=null;_.b=0;function uj(b,a){b.b=a;return b;}
function wj(a){return a.a<a.b.b-1;}
function xj(a){if(a.a>=a.b.b){throw new yr();}return a.b.a[++a.a];}
function yj(){return wj(this);}
function zj(){return xj(this);}
function tj(){}
_=tj.prototype=new gm();_.v=yj;_.y=zj;_.tI=0;_.a=(-1);function Ak(){Ak=os;Bk=wk(new vk());Ck=Bk!==null?zk(new ok()):Bk;}
function zk(a){Ak();return a;}
function ok(){}
_=ok.prototype=new gm();_.tI=0;var Bk,Ck;function sk(){sk=os;Ak();}
function qk(a){tk(a);uk(a);yk(a);}
function rk(a){sk();zk(a);qk(a);return a;}
function tk(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function uk(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function pk(){}
_=pk.prototype=new ok();_.tI=0;function xk(){xk=os;sk();}
function wk(a){xk();rk(a);return a;}
function yk(b){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus();},0);};}
function vk(){}
_=vk.prototype=new pk();_.tI=0;function bn(b,a){a;return b;}
function an(){}
_=an.prototype=new gm();_.tI=3;function ml(b,a){bn(b,a);return b;}
function ll(){}
_=ll.prototype=new an();_.tI=4;function lm(b,a){ml(b,a);return b;}
function km(){}
_=km.prototype=new ll();_.tI=5;function Ek(){}
_=Ek.prototype=new km();_.tI=31;function dl(a){return null!=String.fromCharCode(a).match(/\d/);}
function el(){}
_=el.prototype=new km();_.tI=32;function am(){am=os;{fm();}}
function bm(a){am();return isNaN(a);}
function cm(a){am();var b;b=dm(a);if(bm(b)){throw El(new Dl(),'Unable to parse '+a);}return b;}
function dm(a){am();if(em.test(a)){return parseFloat(a);}else{return Number.NaN;}}
function fm(){am();em=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var em=null;function jl(){jl=os;am();}
function kl(a){jl();return cm(a);}
function pl(b,a){lm(b,a);return b;}
function ol(){}
_=ol.prototype=new km();_.tI=33;function sl(b,a){lm(b,a);return b;}
function rl(){}
_=rl.prototype=new km();_.tI=34;function vl(b,a){lm(b,a);return b;}
function ul(){}
_=ul.prototype=new km();_.tI=35;function zl(a){return Math.round(a);}
function Al(){}
_=Al.prototype=new km();_.tI=36;function El(b,a){pl(b,a);return b;}
function Dl(){}
_=Dl.prototype=new ol();_.tI=37;function om(b,a){return b.charCodeAt(a);}
function qm(g){var a=Am;if(!a){a=Am={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function rm(b,a){return b.indexOf(String.fromCharCode(a));}
function sm(b,a){return b.indexOf(a);}
function tm(c,b,a){return c.indexOf(b,a);}
function um(a){return a.length;}
function vm(b,a){return b.substr(a,b.length-a);}
function wm(c,a,b){return c.substr(a,b-a);}
function xm(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function ym(a,b){return String(a)==b;}
function zm(a){if(!ob(a,1))return false;return ym(this,a);}
function Bm(){return qm(this);}
function Cm(a){return ''+a;}
_=String.prototype;_.eQ=zm;_.hC=Bm;_.tI=2;var Am=null;function Fm(a){return u(a);}
function en(b,a){lm(b,a);return b;}
function dn(){}
_=dn.prototype=new km();_.tI=38;function on(b,a){b.c=a;return b;}
function qn(a){return a.a<a.c.gb();}
function rn(a){if(!qn(a)){throw new yr();}return a.c.t(a.b=a.a++);}
function sn(a){if(a.b<0){throw new rl();}a.c.cb(a.b);a.a=a.b;a.b=(-1);}
function tn(){return qn(this);}
function un(){return rn(this);}
function nn(){}
_=nn.prototype=new gm();_.v=tn;_.y=un;_.tI=0;_.a=0;_.b=(-1);function Do(f,d,e){var a,b,c;for(b=wq(f.q());pq(b);){a=qq(b);c=a.r();if(d===null?c===null:d.eQ(c)){if(e){rq(b);}return a;}}return null;}
function Eo(b){var a;a=b.q();return ao(new Fn(),b,a);}
function Fo(b){var a;a=ar(b);return po(new oo(),b,a);}
function ap(a){return Do(this,a,false)!==null;}
function bp(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ob(d,14)){return false;}f=nb(d,14);c=Eo(this);e=f.x();if(!hp(c,e)){return false;}for(a=co(c);ko(a);){b=lo(a);h=this.u(b);g=f.u(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function cp(b){var a;a=Do(this,b,false);return a===null?null:a.s();}
function dp(){var a,b,c;b=0;for(c=wq(this.q());pq(c);){a=qq(c);b+=a.hC();}return b;}
function ep(){return Eo(this);}
function En(){}
_=En.prototype=new gm();_.m=ap;_.eQ=bp;_.u=cp;_.hC=dp;_.x=ep;_.tI=39;function hp(e,b){var a,c,d;if(b===e){return true;}if(!ob(b,15)){return false;}c=nb(b,15);if(c.gb()!=e.gb()){return false;}for(a=c.w();a.v();){d=a.y();if(!e.n(d)){return false;}}return true;}
function ip(a){return hp(this,a);}
function jp(){var a,b,c;a=0;for(b=this.w();b.v();){c=b.y();if(c!==null){a+=c.hC();}}return a;}
function fp(){}
_=fp.prototype=new gn();_.eQ=ip;_.hC=jp;_.tI=40;function ao(b,a,c){b.a=a;b.b=c;return b;}
function co(b){var a;a=wq(b.b);return io(new ho(),b,a);}
function eo(a){return this.a.m(a);}
function fo(){return co(this);}
function go(){return this.b.a.c;}
function Fn(){}
_=Fn.prototype=new fp();_.n=eo;_.w=fo;_.gb=go;_.tI=41;function io(b,a,c){b.a=c;return b;}
function ko(a){return a.a.v();}
function lo(b){var a;a=b.a.y();return a.r();}
function mo(){return ko(this);}
function no(){return lo(this);}
function ho(){}
_=ho.prototype=new gm();_.v=mo;_.y=no;_.tI=0;function po(b,a,c){b.a=a;b.b=c;return b;}
function ro(b){var a;a=wq(b.b);return wo(new vo(),b,a);}
function so(a){return Fq(this.a,a);}
function to(){return ro(this);}
function uo(){return this.b.a.c;}
function oo(){}
_=oo.prototype=new gn();_.n=so;_.w=to;_.gb=uo;_.tI=0;function wo(b,a,c){b.a=c;return b;}
function yo(a){return a.a.v();}
function zo(a){var b;b=a.a.y().s();return b;}
function Ao(){return yo(this);}
function Bo(){return zo(this);}
function vo(){}
_=vo.prototype=new gm();_.v=Ao;_.y=Bo;_.tI=0;function Dq(){Dq=os;er=kr();}
function Aq(a){{Cq(a);}}
function Bq(a){Dq();Aq(a);return a;}
function Cq(a){a.a=B();a.d=C();a.b=tb(er,x);a.c=0;}
function Eq(b,a){if(ob(a,1)){return or(b.d,nb(a,1))!==er;}else if(a===null){return b.b!==er;}else{return nr(b.a,a,a.hC())!==er;}}
function Fq(a,b){if(a.b!==er&&mr(a.b,b)){return true;}else if(jr(a.d,b)){return true;}else if(hr(a.a,b)){return true;}return false;}
function ar(a){return uq(new lq(),a);}
function br(c,a){var b;if(ob(a,1)){b=or(c.d,nb(a,1));}else if(a===null){b=c.b;}else{b=nr(c.a,a,a.hC());}return b===er?null:b;}
function cr(c,a,d){var b;if(a!==null){b=rr(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=qr(c.a,a,d,qm(a));}if(b===er){++c.c;return null;}else{return b;}}
function dr(c,a){var b;if(ob(a,1)){b=tr(c.d,nb(a,1));}else if(a===null){b=c.b;c.b=tb(er,x);}else{b=sr(c.a,a,a.hC());}if(b===er){return null;}else{--c.c;return b;}}
function fr(e,c){Dq();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.l(a[f]);}}}}
function gr(d,a){Dq();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=fq(c.substring(1),e);a.l(b);}}}
function hr(f,h){Dq();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(mr(h,d)){return true;}}}}return false;}
function ir(a){return Eq(this,a);}
function jr(c,d){Dq();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(mr(d,a)){return true;}}}return false;}
function kr(){Dq();}
function lr(){return ar(this);}
function mr(a,b){Dq();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function pr(a){return br(this,a);}
function nr(f,h,e){Dq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(mr(h,d)){return c.s();}}}}
function or(b,a){Dq();return b[':'+a];}
function qr(f,h,j,e){Dq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(mr(h,d)){var i=c.s();c.fb(j);return i;}}}else{a=f[e]=[];}var c=fq(h,j);a.push(c);}
function rr(c,a,d){Dq();a=':'+a;var b=c[a];c[a]=d;return b;}
function sr(f,h,e){Dq();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(mr(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.s();}}}}
function tr(c,a){Dq();a=':'+a;var b=c[a];delete c[a];return b;}
function bq(){}
_=bq.prototype=new En();_.m=ir;_.q=lr;_.u=pr;_.tI=42;_.a=null;_.b=null;_.c=0;_.d=null;var er;function dq(b,a,c){b.a=a;b.b=c;return b;}
function fq(a,b){return dq(new cq(),a,b);}
function gq(b){var a;if(ob(b,16)){a=nb(b,16);if(mr(this.a,a.r())&&mr(this.b,a.s())){return true;}}return false;}
function hq(){return this.a;}
function iq(){return this.b;}
function jq(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function kq(a){var b;b=this.b;this.b=a;return b;}
function cq(){}
_=cq.prototype=new gm();_.eQ=gq;_.r=hq;_.s=iq;_.hC=jq;_.fb=kq;_.tI=43;_.a=null;_.b=null;function uq(b,a){b.a=a;return b;}
function wq(a){return nq(new mq(),a.a);}
function xq(c){var a,b,d;if(ob(c,16)){a=nb(c,16);b=a.r();if(Eq(this.a,b)){d=br(this.a,b);return mr(a.s(),d);}}return false;}
function yq(){return wq(this);}
function zq(){return this.a.c;}
function lq(){}
_=lq.prototype=new fp();_.n=xq;_.w=yq;_.gb=zq;_.tI=44;function nq(c,b){var a;c.c=b;a=mp(new kp());if(c.c.b!==(Dq(),er)){np(a,dq(new cq(),null,c.c.b));}gr(c.c.d,a);fr(c.c.a,a);c.a=xn(a);return c;}
function pq(a){return qn(a.a);}
function qq(a){return a.b=nb(rn(a.a),16);}
function rq(a){if(a.b===null){throw sl(new rl(),'Must call next() before remove().');}else{sn(a.a);dr(a.c,a.b.r());a.b=null;}}
function sq(){return pq(this);}
function tq(){return qq(this);}
function mq(){}
_=mq.prototype=new gm();_.v=sq;_.y=tq;_.tI=0;_.a=null;_.b=null;function yr(){}
_=yr.prototype=new km();_.tI=45;function is(k){var a,b,c,d,e,f,g,h,i,j,l,m;h=xi(new mi());zi(h,6);i=xi(new mi());zi(i,5);j=xi(new mi());ti(j,true);zi(j,8);m=ls(new ks(),i,h,j);pi(i,new Dr());fj(i,896);fj(h,896);pi(h,new as());g=mj(new kj());a=zg(new xg());Ag(a,ph(new nh(),'\u010C\xE1stka '));Ag(a,h);Ag(a,ph(new nh(),' K\u010D'));nj(g,a);b=zg(new xg());if(di('isUrok')!==null){Ag(b,ph(new nh(),'\xDArok '));}else{Ag(b,ph(new nh(),'Po\u010Det procent '));}Ag(b,i);Ag(b,ph(new nh(),' %'));nj(g,b);d=zg(new xg());Ag(d,ph(new nh(),'V\xFDsledek: '));Ag(d,j);Ag(d,ph(new nh(),' K\u010D   '));l=hf(new bf(),'Vypo\u010Dti');l.j(es(new ds(),k,m));c=zg(new xg());e=ph(new nh(),'               ');ej(e,'50px');Ag(c,e);Ag(c,l);nj(g,c);f=ph(new nh(),'               ');ej(f,'50px');nj(g,f);nj(g,d);De(di('percent-calc'),g);}
function js(a,b){a.a=b;}
function Cr(){}
_=Cr.prototype=new gm();_.tI=0;_.a=false;function Fr(c,a,b){if(!dl(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){qi(nb(c,17));}else{}}
function Dr(){}
_=Dr.prototype=new Fg();_.C=Fr;_.tI=46;function cs(c,a,b){if(!dl(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){qi(nb(c,17));}else{}}
function as(){}
_=as.prototype=new Fg();_.C=cs;_.tI=47;function es(b,a,c){b.a=a;b.b=c;return b;}
function gs(a){if(this.a.a){return;}js(this.a,true);ns(this.b,null);js(this.a,false);}
function ds(){}
_=ds.prototype=new gm();_.A=gs;_.tI=48;function ls(c,b,a,d){c.b=b;c.a=a;c.c=d;return c;}
function ns(e,c){var a,b,d,f;if(si(e.b)===null||um(si(e.b))<1){ui(e.c,'');return;}b=kl(si(e.b));if(si(e.b)===null||um(si(e.b))<1){ui(e.c,'');return;}a=kl(si(e.a));f=zl(b*a)/100.0;d=Cm(f);ui(e.c,d);}
function ks(){}
_=ks.prototype=new gm();_.tI=0;_.a=null;_.b=null;_.c=null;function Dk(){is(new Cr());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Dk();}catch(a){b(d);}else{Dk();}}
var sb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1},{13:1},{13:1},{13:1},{9:1,10:1,11:1,12:1},{7:1},{13:1},{9:1,10:1,11:1,12:1},{8:1,9:1,10:1,11:1,12:1},{5:1},{9:1,10:1,11:1,12:1},{9:1,10:1,11:1,12:1,17:1},{9:1,10:1,11:1,12:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{14:1},{15:1},{15:1},{14:1},{16:1},{15:1},{3:1},{7:1},{7:1},{6:1}];if (net_jesta_md_kalkulacka_PerCentCalc) {  var __gwt_initHandlers = net_jesta_md_kalkulacka_PerCentCalc.__gwt_initHandlers;  net_jesta_md_kalkulacka_PerCentCalc.onScriptLoad(gwtOnLoad);}})();