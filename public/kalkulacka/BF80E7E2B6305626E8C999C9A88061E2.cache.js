(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,it='com.google.gwt.core.client.',jt='com.google.gwt.lang.',kt='com.google.gwt.user.client.',lt='com.google.gwt.user.client.impl.',mt='com.google.gwt.user.client.ui.',nt='com.google.gwt.user.client.ui.impl.',ot='java.lang.',pt='java.util.',qt='net.jesta.md.kalkulacka.client.';function ht(){}
function vm(a){return this===a;}
function wm(){return nn(this);}
function tm(){}
_=tm.prototype={};_.eQ=vm;_.hC=wm;_.tI=1;var q=null;function t(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
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
_=x.prototype=new tm();_.eQ=E;_.hC=F;_.tI=7;function bb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function db(a,b,c){return a[b]=c;}
function eb(b,a){return b[a];}
function fb(a){return a.length;}
function hb(e,d,c,b,a){return gb(e,d,c,b,0,fb(b),a);}
function gb(j,i,g,c,e,a,b){var d,f,h;if((f=eb(c,e))<0){throw new hm();}h=bb(new ab(),f,eb(i,e),eb(g,e),j);++e;if(e<a){j=cn(j,1);for(d=0;d<f;++d){db(h,d,gb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){db(h,d,b);}}return h;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !ob(c,a.b)){throw new ll();}return db(a,b,c);}
function ab(){}
_=ab.prototype=new tm();_.tI=0;function lb(b,a){return !(!(b&&sb[b][a]));}
function mb(a){return String.fromCharCode(a);}
function nb(b,a){if(b!=null)lb(b.tI,a)||rb();return b;}
function ob(b,a){return b!=null&&lb(b.tI,a);}
function pb(a){return a&65535;}
function rb(){throw new rl();}
function qb(a){if(a!==null){throw new rl();}return a;}
function tb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var sb;function xb(){xb=ht;uc=zp(new xp());{qc=new ee();le(qc);}}
function yb(b,a){xb();ne(qc,b,a);}
function zb(a,b){xb();return ie(qc,a,b);}
function Ab(){xb();return pe(qc,'button');}
function Bb(){xb();return pe(qc,'div');}
function Cb(){xb();return qe(qc,'text');}
function Db(){xb();return pe(qc,'tbody');}
function Eb(){xb();return pe(qc,'td');}
function Fb(){xb();return pe(qc,'tr');}
function ac(){xb();return pe(qc,'table');}
function dc(b,a,d){xb();var c;c=q;{cc(b,a,d);}}
function cc(b,a,c){xb();var d;if(a===tc){if(kc(b)==8192){tc=null;}}d=bc;bc=b;try{c.A(b);}finally{bc=d;}}
function ec(b,a){xb();re(qc,b,a);}
function fc(a){xb();return se(qc,a);}
function gc(a){xb();return te(qc,a);}
function hc(a){xb();return ue(qc,a);}
function ic(a){xb();return ve(qc,a);}
function jc(a){xb();return we(qc,a);}
function kc(a){xb();return xe(qc,a);}
function lc(a){xb();je(qc,a);}
function mc(a){xb();return ye(qc,a);}
function nc(a,b){xb();return ze(qc,a,b);}
function oc(a){xb();return Ae(qc,a);}
function pc(a){xb();return ke(qc,a);}
function rc(a){xb();var b,c;c=true;if(uc.b>0){b=qb(Dp(uc,uc.b-1));if(!(c=null.lb())){ec(a,true);lc(a);}}return c;}
function sc(b,a){xb();Be(qc,b,a);}
function xc(a,b,c){xb();Ee(qc,a,b,c);}
function vc(a,b,c){xb();Ce(qc,a,b,c);}
function wc(a,b,c){xb();De(qc,a,b,c);}
function yc(a,b){xb();Fe(qc,a,b);}
function zc(a,b){xb();af(qc,a,b);}
function Ac(a,b){xb();bf(qc,a,b);}
function Bc(b,a,c){xb();cf(qc,b,a,c);}
function Cc(a,b){xb();me(qc,a,b);}
var bc=null,qc=null,tc=null,uc;function Fc(a){if(ob(a,4)){return zb(this,nb(a,4));}return z(tb(this,Dc),a);}
function ad(){return A(tb(this,Dc));}
function Dc(){}
_=Dc.prototype=new x();_.eQ=Fc;_.hC=ad;_.tI=8;function ed(a){return z(tb(this,bd),a);}
function fd(){return A(tb(this,bd));}
function bd(){}
_=bd.prototype=new x();_.eQ=ed;_.hC=fd;_.tI=9;function nd(){nd=ht;vd=zp(new xp());{ud();}}
function ld(a){nd();return a;}
function md(a){if(a.b){qd(a.c);}else{rd(a.c);}bq(vd,a);}
function od(a){if(!a.b){bq(vd,a);}a.gb();}
function pd(b,a){if(a<=0){throw Cl(new Bl(),'must be positive');}md(b);b.b=false;b.c=sd(b,a);Ap(vd,b);}
function qd(a){nd();$wnd.clearInterval(a);}
function rd(a){nd();$wnd.clearTimeout(a);}
function sd(b,a){nd();return $wnd.setTimeout(function(){b.r();},a);}
function td(){var a;a=q;{od(this);}}
function ud(){nd();zd(new hd());}
function gd(){}
_=gd.prototype=new tm();_.r=td;_.tI=10;_.b=false;_.c=0;var vd;function jd(){while((nd(),vd).b>0){md(nb(Dp((nd(),vd),0),5));}}
function kd(){return null;}
function hd(){}
_=hd.prototype=new tm();_.cb=jd;_.db=kd;_.tI=11;function yd(){yd=ht;Ad=zp(new xp());ce=zp(new xp());{Ed();}}
function zd(a){yd();Ap(Ad,a);}
function Bd(){yd();var a,b;for(a=fo(Ad);Dn(a);){b=nb(En(a),6);b.cb();}}
function Cd(){yd();var a,b,c,d;d=null;for(a=fo(Ad);Dn(a);){b=nb(En(a),6);c=b.db();{d=c;}}return d;}
function Dd(){yd();var a,b;for(a=fo(ce);Dn(a);){b=qb(En(a));null.lb();}}
function Ed(){yd();__gwt_initHandlers(function(){be();},function(){return ae();},function(){Fd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function Fd(){yd();var a;a=q;{Bd();}}
function ae(){yd();var a;a=q;{return Cd();}}
function be(){yd();var a;a=q;{Dd();}}
var Ad,ce;function ne(c,b,a){b.appendChild(a);}
function pe(b,a){return $doc.createElement(a);}
function qe(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function re(c,b,a){b.cancelBubble=a;}
function se(b,a){return !(!a.altKey);}
function te(b,a){return !(!a.ctrlKey);}
function ue(b,a){return a.which||(a.keyCode|| -1);}
function ve(b,a){return !(!a.metaKey);}
function we(b,a){return !(!a.shiftKey);}
function xe(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function ye(c,b){var a=$doc.getElementById(b);return a||null;}
function ze(d,a,b){var c=a[b];return c==null?null:String(c);}
function Ae(b,a){return a.__eventBits||0;}
function Be(c,b,a){b.removeChild(a);}
function Ee(c,a,b,d){a[b]=d;}
function Ce(c,a,b,d){a[b]=d;}
function De(c,a,b,d){a[b]=d;}
function Fe(c,a,b){a.__listener=b;}
function af(c,a,b){if(!b){b='';}a.innerHTML=b;}
function bf(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function cf(c,b,a,d){b.style[a]=d;}
function de(){}
_=de.prototype=new tm();_.tI=0;function ie(c,a,b){return a==b;}
function je(b,a){a.preventDefault();}
function ke(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function le(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){dc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!rc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)dc(b,a,c);};$wnd.__captureElem=null;}
function me(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ge(){}
_=ge.prototype=new de();_.tI=0;function ee(){}
_=ee.prototype=new ge();_.tI=0;function ij(b,a){jj(b,lj(b)+mb(45)+a);}
function jj(b,a){wj(b.i,a,true);}
function lj(a){return uj(a.i);}
function mj(b,a){nj(b,lj(b)+mb(45)+a);}
function nj(b,a){wj(b.i,a,false);}
function oj(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function pj(b,a){if(b.i!==null){oj(b,b.i,a);}b.i=a;}
function qj(b,a){vj(b.i,a);}
function rj(a,b){Bc(a.i,'width',b);}
function sj(b,a){Cc(b.i,a|oc(b.i));}
function tj(a){return nc(a,'className');}
function uj(a){var b,c;b=tj(a);c=Em(b,32);if(c>=0){return dn(b,0,c);}return b;}
function vj(a,b){xc(a,'className',b);}
function wj(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw ym(new xm(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=en(j);if(bn(j)==0){throw Cl(new Bl(),'Style names cannot be empty');}i=tj(c);e=Fm(i,j);while(e!=(-1)){if(e==0||Bm(i,e-1)==32){f=e+bn(j);g=bn(i);if(f==g||f<g&&Bm(i,f)==32){break;}}e=an(i,j,e+1);}if(a){if(e==(-1)){if(bn(i)>0){i+=' ';}xc(c,'className',i+j);}}else{if(e!=(-1)){b=en(dn(i,0,e));d=en(cn(i,e+bn(j)));if(bn(b)==0){h=d;}else if(bn(d)==0){h=b;}else{h=b+' '+d;}xc(c,'className',h);}}}
function hj(){}
_=hj.prototype=new tm();_.tI=0;_.i=null;function qk(a){if(a.g){throw Fl(new El(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;yc(a.i,a);a.o();a.ab();}
function rk(a){if(!a.g){throw Fl(new El(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.bb();}finally{a.p();yc(a.i,null);a.g=false;}}
function sk(a){if(a.h!==null){a.h.fb(a);}else if(a.h!==null){throw Fl(new El(),"This widget's parent does not implement HasWidgets");}}
function tk(b,a){if(b.g){yc(b.i,null);}pj(b,a);if(b.g){yc(a,b);}}
function uk(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){rk(c);}c.h=null;}else{if(a!==null){throw Fl(new El(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){qk(c);}}}
function vk(){}
function wk(){}
function xk(a){}
function yk(){}
function zk(){}
function Ak(a){tk(this,a);}
function Ej(){}
_=Ej.prototype=new hj();_.o=vk;_.p=wk;_.A=xk;_.ab=yk;_.bb=zk;_.hb=Ak;_.tI=12;_.g=false;_.h=null;function ai(b,a){uk(a,b);}
function ci(b,a){uk(a,null);}
function di(){var a,b;for(b=this.x();dk(b);){a=ek(b);qk(a);}}
function ei(){var a,b;for(b=this.x();dk(b);){a=ek(b);rk(a);}}
function fi(){}
function gi(){}
function Fh(){}
_=Fh.prototype=new Ej();_.o=di;_.p=ei;_.ab=fi;_.bb=gi;_.tI=13;function dg(a){a.f=hk(new Fj(),a);}
function eg(a){dg(a);return a;}
function fg(c,a,b){sk(a);ik(c.f,a);yb(b,a.i);ai(c,a);}
function hg(b,c){var a;if(c.h!==b){return false;}ci(b,c);a=c.i;sc(pc(a),a);ok(b.f,c);return true;}
function ig(){return mk(this.f);}
function jg(a){return hg(this,a);}
function cg(){}
_=cg.prototype=new Fh();_.x=ig;_.fb=jg;_.tI=14;function ef(a){eg(a);a.hb(Bb());Bc(a.i,'position','relative');Bc(a.i,'overflow','hidden');return a;}
function ff(a,b){fg(a,b,a.i);}
function hf(a){Bc(a,'left','');Bc(a,'top','');Bc(a,'position','');}
function jf(b){var a;a=hg(this,b);if(a){hf(b.i);}return a;}
function df(){}
_=df.prototype=new cg();_.fb=jf;_.tI=15;function mg(){mg=ht;hl(),jl;}
function lg(b,a){hl(),jl;og(b,a);return b;}
function ng(b,a){switch(kc(a)){case 1:if(b.e!==null){ag(b.e,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function og(b,a){tk(b,a);sj(b,7041);}
function pg(a){if(this.e===null){this.e=Ef(new Df());}Ap(this.e,a);}
function qg(a){ng(this,a);}
function rg(a){og(this,a);}
function kg(){}
_=kg.prototype=new Ej();_.j=pg;_.A=qg;_.hb=rg;_.tI=16;_.e=null;function nf(){nf=ht;hl(),jl;}
function mf(b,a){hl(),jl;lg(b,a);return b;}
function of(b,a){zc(b.i,a);}
function lf(){}
_=lf.prototype=new kg();_.tI=17;function rf(){rf=ht;hl(),jl;}
function pf(a){hl(),jl;mf(a,Ab());sf(a.i);qj(a,'gwt-Button');return a;}
function qf(b,a){hl(),jl;pf(b);of(b,a);return b;}
function sf(b){rf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function kf(){}
_=kf.prototype=new lf();_.tI=18;function uf(a){eg(a);a.e=ac();a.d=Db();yb(a.e,a.d);a.hb(a.e);return a;}
function wf(c,b,a){xc(b,'align',a.a);}
function xf(c,b,a){Bc(b,'verticalAlign',a.a);}
function tf(){}
_=tf.prototype=new cg();_.tI=19;_.d=null;_.e=null;function vn(d,a,b){var c;while(a.w()){c=a.z();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function xn(a){throw sn(new rn(),'add');}
function yn(b){var a;a=vn(this,this.x(),b);return a!==null;}
function un(){}
_=un.prototype=new tm();_.l=xn;_.n=yn;_.tI=0;function eo(b,a){throw cm(new bm(),'Index: '+a+', Size: '+b.b);}
function fo(a){return Bn(new An(),a);}
function go(b,a){throw sn(new rn(),'add');}
function ho(a){this.k(this.jb(),a);return true;}
function io(e){var a,b,c,d,f;if(e===this){return true;}if(!ob(e,15)){return false;}f=nb(e,15);if(this.jb()!=f.jb()){return false;}c=fo(this);d=f.x();while(Dn(c)){a=En(c);b=En(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function jo(){var a,b,c,d;c=1;a=31;b=fo(this);while(Dn(b)){d=En(b);c=31*c+(d===null?0:d.hC());}return c;}
function ko(){return fo(this);}
function lo(a){throw sn(new rn(),'remove');}
function zn(){}
_=zn.prototype=new un();_.k=go;_.l=ho;_.eQ=io;_.hC=jo;_.x=ko;_.eb=lo;_.tI=20;function yp(a){{Bp(a);}}
function zp(a){yp(a);return a;}
function Ap(b,a){lq(b.a,b.b++,a);return true;}
function Bp(a){a.a=B();a.b=0;}
function Dp(b,a){if(a<0||a>=b.b){eo(b,a);}return hq(b.a,a);}
function Ep(b,a){return Fp(b,a,0);}
function Fp(c,b,a){if(a<0){eo(c,a);}for(;a<c.b;++a){if(gq(b,hq(c.a,a))){return a;}}return (-1);}
function aq(c,a){var b;b=Dp(c,a);jq(c.a,a,1);--c.b;return b;}
function bq(c,b){var a;a=Ep(c,b);if(a==(-1)){return false;}aq(c,a);return true;}
function dq(a,b){if(a<0||a>this.b){eo(this,a);}cq(this.a,a,b);++this.b;}
function eq(a){return Ap(this,a);}
function cq(a,b,c){a.splice(b,0,c);}
function fq(a){return Ep(this,a)!=(-1);}
function gq(a,b){return a===b||a!==null&&a.eQ(b);}
function iq(a){return Dp(this,a);}
function hq(a,b){return a[b];}
function kq(a){return aq(this,a);}
function jq(a,c,b){a.splice(c,b);}
function lq(a,b,c){a[b]=c;}
function mq(){return this.b;}
function xp(){}
_=xp.prototype=new zn();_.k=dq;_.l=eq;_.n=fq;_.u=iq;_.eb=kq;_.jb=mq;_.tI=21;_.a=null;_.b=0;function zf(a){zp(a);return a;}
function Bf(d,c){var a,b;for(a=fo(d);Dn(a);){b=nb(En(a),7);b.B(c);}}
function yf(){}
_=yf.prototype=new xp();_.tI=22;function Ef(a){zp(a);return a;}
function ag(d,c){var a,b;for(a=fo(d);Dn(a);){b=nb(En(a),8);b.C(c);}}
function Df(){}
_=Df.prototype=new xp();_.tI=23;function yg(){yg=ht;wg(new vg(),'center');zg=wg(new vg(),'left');wg(new vg(),'right');}
var zg;function wg(b,a){b.a=a;return b;}
function vg(){}
_=vg.prototype=new tm();_.tI=0;_.a=null;function Fg(){Fg=ht;Dg(new Cg(),'bottom');Dg(new Cg(),'middle');ah=Dg(new Cg(),'top');}
var ah;function Dg(a,b){a.a=b;return a;}
function Cg(){}
_=Cg.prototype=new tm();_.tI=0;_.a=null;function eh(a){a.a=(yg(),zg);a.c=(Fg(),ah);}
function fh(a){uf(a);eh(a);a.b=Fb();yb(a.d,a.b);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function gh(b,c){var a;a=ih(b);yb(b.b,a);fg(b,c,a);}
function ih(b){var a;a=Eb();wf(b,a,b.a);xf(b,a,b.c);return a;}
function jh(c){var a,b;b=pc(c.i);a=hg(this,c);if(a){sc(this.b,b);}return a;}
function dh(){}
_=dh.prototype=new tf();_.fb=jh;_.tI=24;_.b=null;function nh(c,a,b){}
function oh(c,a,b){}
function ph(c,a,b){}
function lh(){}
_=lh.prototype=new tm();_.D=nh;_.E=oh;_.F=ph;_.tI=25;function rh(a){zp(a);return a;}
function th(f,e,b,d){var a,c;for(a=fo(f);Dn(a);){c=nb(En(a),9);c.D(e,b,d);}}
function uh(f,e,b,d){var a,c;for(a=fo(f);Dn(a);){c=nb(En(a),9);c.E(e,b,d);}}
function vh(f,e,b,d){var a,c;for(a=fo(f);Dn(a);){c=nb(En(a),9);c.F(e,b,d);}}
function wh(d,c,a){var b;b=xh(a);switch(kc(a)){case 128:th(d,c,pb(hc(a)),b);break;case 512:vh(d,c,pb(hc(a)),b);break;case 256:uh(d,c,pb(hc(a)),b);break;}}
function xh(a){return (jc(a)?1:0)|(ic(a)?8:0)|(gc(a)?2:0)|(fc(a)?4:0);}
function qh(){}
_=qh.prototype=new xp();_.tI=26;function Ah(a){a.hb(Bb());sj(a,131197);qj(a,'gwt-Label');return a;}
function Bh(b,a){Ah(b);Dh(b,a);return b;}
function Dh(b,a){Ac(b.i,a);}
function Eh(a){switch(kc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function zh(){}
_=zh.prototype=new Ej();_.A=Eh;_.tI=27;function ni(){ni=ht;ri=jr(new pq());}
function mi(b,a){ni();ef(b);if(a===null){a=oi();}b.hb(a);qk(b);return b;}
function pi(c){ni();var a,b;b=nb(pr(ri,c),10);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=mc(c))){return null;}}if(ri.c==0){qi();}qr(ri,c,b=mi(new hi(),a));return b;}
function oi(){ni();return $doc.body;}
function qi(){ni();zd(new ii());}
function hi(){}
_=hi.prototype=new df();_.tI=28;var ri;function ki(){var a,b;for(b=Eo(mp((ni(),ri)));fp(b);){a=nb(gp(b),10);if(a.g){rk(a);}}}
function li(){return null;}
function ii(){}
_=ii.prototype=new tm();_.cb=ki;_.db=li;_.tI=29;function Ei(){Ei=ht;hl(),jl;}
function Ai(b,a){hl(),jl;lg(b,a);sj(b,1024);return b;}
function Bi(b,a){if(b.a===null){b.a=zf(new yf());}Ap(b.a,a);}
function Ci(b,a){if(b.d===null){b.d=rh(new qh());}Ap(b.d,a);}
function Di(a){if(a.c!==null){lc(a.c);}}
function Fi(a){return nc(a.i,'value');}
function aj(c,a){var b;vc(c.i,'readOnly',a);b='readonly';if(a){ij(c,b);}else{mj(c,b);}}
function bj(b,a){xc(b.i,'value',a!==null?a:'');}
function cj(a){if(this.b===null){this.b=Ef(new Df());}Ap(this.b,a);}
function dj(a){var b;ng(this,a);b=kc(a);if(this.d!==null&&(b&896)!=0){this.c=a;wh(this.d,this,a);this.c=null;}else if(b==1){if(this.b!==null){ag(this.b,this);}}else if(b==1024){if(this.a!==null){Bf(this.a,this);}}}
function zi(){}
_=zi.prototype=new kg();_.j=cj;_.A=dj;_.tI=30;_.a=null;_.b=null;_.c=null;_.d=null;function fj(){fj=ht;hl(),jl;}
function ej(a){hl(),jl;Ai(a,Cb());qj(a,'gwt-TextBox');return a;}
function gj(b,a){wc(b.i,'size',a);}
function yi(){}
_=yi.prototype=new zi();_.tI=31;function yj(a){a.a=(yg(),zg);a.b=(Fg(),ah);}
function zj(a){uf(a);yj(a);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function Aj(b,d){var a,c;c=Fb();a=Cj(b);yb(c,a);yb(b.d,c);fg(b,d,a);}
function Cj(b){var a;a=Eb();wf(b,a,b.a);xf(b,a,b.b);return a;}
function Dj(c){var a,b;b=pc(c.i);a=hg(this,c);if(a){sc(this.d,pc(b));}return a;}
function xj(){}
_=xj.prototype=new tf();_.fb=Dj;_.tI=32;function hk(b,a){b.a=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[4],null);return b;}
function ik(a,b){lk(a,b,a.b);}
function kk(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function lk(d,e,a){var b,c;if(a<0||a>d.b){throw new bm();}if(d.b==d.a.a){c=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function mk(a){return bk(new ak(),a);}
function nk(c,b){var a;if(b<0||b>=c.b){throw new bm();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function ok(b,c){var a;a=kk(b,c);if(a==(-1)){throw new gs();}nk(b,a);}
function Fj(){}
_=Fj.prototype=new tm();_.tI=0;_.a=null;_.b=0;function bk(b,a){b.b=a;return b;}
function dk(a){return a.a<a.b.b-1;}
function ek(a){if(a.a>=a.b.b){throw new gs();}return a.b.a[++a.a];}
function fk(){return dk(this);}
function gk(){return ek(this);}
function ak(){}
_=ak.prototype=new tm();_.w=fk;_.z=gk;_.tI=0;_.a=(-1);function hl(){hl=ht;il=dl(new cl());jl=il!==null?gl(new Bk()):il;}
function gl(a){hl();return a;}
function Bk(){}
_=Bk.prototype=new tm();_.tI=0;var il,jl;function Fk(){Fk=ht;hl();}
function Dk(a){al(a);bl(a);fl(a);}
function Ek(a){Fk();gl(a);Dk(a);return a;}
function al(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function bl(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function Ck(){}
_=Ck.prototype=new Bk();_.tI=0;function el(){el=ht;Fk();}
function dl(a){el();Ek(a);return a;}
function fl(b){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus();},0);};}
function cl(){}
_=cl.prototype=new Ck();_.tI=0;function pn(b,a){a;return b;}
function on(){}
_=on.prototype=new tm();_.tI=3;function zl(b,a){pn(b,a);return b;}
function yl(){}
_=yl.prototype=new on();_.tI=4;function ym(b,a){zl(b,a);return b;}
function xm(){}
_=xm.prototype=new yl();_.tI=5;function ll(){}
_=ll.prototype=new xm();_.tI=33;function ql(a){return null!=String.fromCharCode(a).match(/\d/);}
function rl(){}
_=rl.prototype=new xm();_.tI=34;function nm(){nm=ht;{sm();}}
function om(a){nm();return isNaN(a);}
function pm(a){nm();var b;b=qm(a);if(om(b)){throw lm(new km(),'Unable to parse '+a);}return b;}
function qm(a){nm();if(rm.test(a)){return parseFloat(a);}else{return Number.NaN;}}
function sm(){nm();rm=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var rm=null;function wl(){wl=ht;nm();}
function xl(a){wl();return pm(a);}
function Cl(b,a){ym(b,a);return b;}
function Bl(){}
_=Bl.prototype=new xm();_.tI=35;function Fl(b,a){ym(b,a);return b;}
function El(){}
_=El.prototype=new xm();_.tI=36;function cm(b,a){ym(b,a);return b;}
function bm(){}
_=bm.prototype=new xm();_.tI=37;function gm(a){return Math.round(a);}
function hm(){}
_=hm.prototype=new xm();_.tI=38;function lm(b,a){Cl(b,a);return b;}
function km(){}
_=km.prototype=new Bl();_.tI=39;function Bm(b,a){return b.charCodeAt(a);}
function Dm(g){var a=hn;if(!a){a=hn={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function Em(b,a){return b.indexOf(String.fromCharCode(a));}
function Fm(b,a){return b.indexOf(a);}
function an(c,b,a){return c.indexOf(b,a);}
function bn(a){return a.length;}
function cn(b,a){return b.substr(a,b.length-a);}
function dn(c,a,b){return c.substr(a,b-a);}
function en(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function fn(a,b){return String(a)==b;}
function gn(a){if(!ob(a,1))return false;return fn(this,a);}
function jn(){return Dm(this);}
function kn(a){return ''+a;}
_=String.prototype;_.eQ=gn;_.hC=jn;_.tI=2;var hn=null;function nn(a){return u(a);}
function sn(b,a){ym(b,a);return b;}
function rn(){}
_=rn.prototype=new xm();_.tI=40;function Bn(b,a){b.c=a;return b;}
function Dn(a){return a.a<a.c.jb();}
function En(a){if(!Dn(a)){throw new gs();}return a.c.u(a.b=a.a++);}
function Fn(a){if(a.b<0){throw new El();}a.c.eb(a.b);a.a=a.b;a.b=(-1);}
function ao(){return Dn(this);}
function bo(){return En(this);}
function An(){}
_=An.prototype=new tm();_.w=ao;_.z=bo;_.tI=0;_.a=0;_.b=(-1);function kp(f,d,e){var a,b,c;for(b=er(f.q());Dq(b);){a=Eq(b);c=a.s();if(d===null?c===null:d.eQ(c)){if(e){Fq(b);}return a;}}return null;}
function lp(b){var a;a=b.q();return oo(new no(),b,a);}
function mp(b){var a;a=or(b);return Co(new Bo(),b,a);}
function np(a){return kp(this,a,false)!==null;}
function op(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ob(d,16)){return false;}f=nb(d,16);c=lp(this);e=f.y();if(!up(c,e)){return false;}for(a=qo(c);xo(a);){b=yo(a);h=this.v(b);g=f.v(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function pp(b){var a;a=kp(this,b,false);return a===null?null:a.t();}
function qp(){var a,b,c;b=0;for(c=er(this.q());Dq(c);){a=Eq(c);b+=a.hC();}return b;}
function rp(){return lp(this);}
function mo(){}
_=mo.prototype=new tm();_.m=np;_.eQ=op;_.v=pp;_.hC=qp;_.y=rp;_.tI=41;function up(e,b){var a,c,d;if(b===e){return true;}if(!ob(b,17)){return false;}c=nb(b,17);if(c.jb()!=e.jb()){return false;}for(a=c.x();a.w();){d=a.z();if(!e.n(d)){return false;}}return true;}
function vp(a){return up(this,a);}
function wp(){var a,b,c;a=0;for(b=this.x();b.w();){c=b.z();if(c!==null){a+=c.hC();}}return a;}
function sp(){}
_=sp.prototype=new un();_.eQ=vp;_.hC=wp;_.tI=42;function oo(b,a,c){b.a=a;b.b=c;return b;}
function qo(b){var a;a=er(b.b);return vo(new uo(),b,a);}
function ro(a){return this.a.m(a);}
function so(){return qo(this);}
function to(){return this.b.a.c;}
function no(){}
_=no.prototype=new sp();_.n=ro;_.x=so;_.jb=to;_.tI=43;function vo(b,a,c){b.a=c;return b;}
function xo(a){return a.a.w();}
function yo(b){var a;a=b.a.z();return a.s();}
function zo(){return xo(this);}
function Ao(){return yo(this);}
function uo(){}
_=uo.prototype=new tm();_.w=zo;_.z=Ao;_.tI=0;function Co(b,a,c){b.a=a;b.b=c;return b;}
function Eo(b){var a;a=er(b.b);return dp(new cp(),b,a);}
function Fo(a){return nr(this.a,a);}
function ap(){return Eo(this);}
function bp(){return this.b.a.c;}
function Bo(){}
_=Bo.prototype=new un();_.n=Fo;_.x=ap;_.jb=bp;_.tI=0;function dp(b,a,c){b.a=c;return b;}
function fp(a){return a.a.w();}
function gp(a){var b;b=a.a.z().t();return b;}
function hp(){return fp(this);}
function ip(){return gp(this);}
function cp(){}
_=cp.prototype=new tm();_.w=hp;_.z=ip;_.tI=0;function lr(){lr=ht;sr=yr();}
function ir(a){{kr(a);}}
function jr(a){lr();ir(a);return a;}
function kr(a){a.a=B();a.d=C();a.b=tb(sr,x);a.c=0;}
function mr(b,a){if(ob(a,1)){return Cr(b.d,nb(a,1))!==sr;}else if(a===null){return b.b!==sr;}else{return Br(b.a,a,a.hC())!==sr;}}
function nr(a,b){if(a.b!==sr&&Ar(a.b,b)){return true;}else if(xr(a.d,b)){return true;}else if(vr(a.a,b)){return true;}return false;}
function or(a){return cr(new zq(),a);}
function pr(c,a){var b;if(ob(a,1)){b=Cr(c.d,nb(a,1));}else if(a===null){b=c.b;}else{b=Br(c.a,a,a.hC());}return b===sr?null:b;}
function qr(c,a,d){var b;if(a!==null){b=Fr(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=Er(c.a,a,d,Dm(a));}if(b===sr){++c.c;return null;}else{return b;}}
function rr(c,a){var b;if(ob(a,1)){b=bs(c.d,nb(a,1));}else if(a===null){b=c.b;c.b=tb(sr,x);}else{b=as(c.a,a,a.hC());}if(b===sr){return null;}else{--c.c;return b;}}
function tr(e,c){lr();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.l(a[f]);}}}}
function ur(d,a){lr();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=tq(c.substring(1),e);a.l(b);}}}
function vr(f,h){lr();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(Ar(h,d)){return true;}}}}return false;}
function wr(a){return mr(this,a);}
function xr(c,d){lr();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(Ar(d,a)){return true;}}}return false;}
function yr(){lr();}
function zr(){return or(this);}
function Ar(a,b){lr();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function Dr(a){return pr(this,a);}
function Br(f,h,e){lr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(Ar(h,d)){return c.t();}}}}
function Cr(b,a){lr();return b[':'+a];}
function Er(f,h,j,e){lr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(Ar(h,d)){var i=c.t();c.ib(j);return i;}}}else{a=f[e]=[];}var c=tq(h,j);a.push(c);}
function Fr(c,a,d){lr();a=':'+a;var b=c[a];c[a]=d;return b;}
function as(f,h,e){lr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(Ar(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.t();}}}}
function bs(c,a){lr();a=':'+a;var b=c[a];delete c[a];return b;}
function pq(){}
_=pq.prototype=new mo();_.m=wr;_.q=zr;_.v=Dr;_.tI=44;_.a=null;_.b=null;_.c=0;_.d=null;var sr;function rq(b,a,c){b.a=a;b.b=c;return b;}
function tq(a,b){return rq(new qq(),a,b);}
function uq(b){var a;if(ob(b,18)){a=nb(b,18);if(Ar(this.a,a.s())&&Ar(this.b,a.t())){return true;}}return false;}
function vq(){return this.a;}
function wq(){return this.b;}
function xq(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function yq(a){var b;b=this.b;this.b=a;return b;}
function qq(){}
_=qq.prototype=new tm();_.eQ=uq;_.s=vq;_.t=wq;_.hC=xq;_.ib=yq;_.tI=45;_.a=null;_.b=null;function cr(b,a){b.a=a;return b;}
function er(a){return Bq(new Aq(),a.a);}
function fr(c){var a,b,d;if(ob(c,18)){a=nb(c,18);b=a.s();if(mr(this.a,b)){d=pr(this.a,b);return Ar(a.t(),d);}}return false;}
function gr(){return er(this);}
function hr(){return this.a.c;}
function zq(){}
_=zq.prototype=new sp();_.n=fr;_.x=gr;_.jb=hr;_.tI=46;function Bq(c,b){var a;c.c=b;a=zp(new xp());if(c.c.b!==(lr(),sr)){Ap(a,rq(new qq(),null,c.c.b));}ur(c.c.d,a);tr(c.c.a,a);c.a=fo(a);return c;}
function Dq(a){return Dn(a.a);}
function Eq(a){return a.b=nb(En(a.a),18);}
function Fq(a){if(a.b===null){throw Fl(new El(),'Must call next() before remove().');}else{Fn(a.a);rr(a.c,a.b.s());a.b=null;}}
function ar(){return Dq(this);}
function br(){return Eq(this);}
function Aq(){}
_=Aq.prototype=new tm();_.w=ar;_.z=br;_.tI=0;_.a=null;_.b=null;function gs(){}
_=gs.prototype=new xm();_.tI=47;function at(k){var a,b,c,d,e,f,g,h,i,j,l,m;h=ej(new yi());gj(h,6);i=ej(new yi());gj(i,5);j=ej(new yi());aj(j,true);gj(j,8);m=dt(new ct(),i,h,j);Bi(h,m);Bi(i,m);Ci(i,ms(new ls(),k,m));sj(i,896);sj(h,896);Ci(h,us(new ts(),k,m));g=zj(new xj());a=fh(new dh());gh(a,Bh(new zh(),'\u010C\xE1stka '));gh(a,h);gh(a,Bh(new zh(),' K\u010D'));Aj(g,a);b=fh(new dh());gh(b,Bh(new zh(),'Po\u010Det procent '));gh(b,i);gh(b,Bh(new zh(),' %'));Aj(g,b);d=fh(new dh());gh(d,Bh(new zh(),'V\xFDsledek: '));gh(d,j);gh(d,Bh(new zh(),' K\u010D   '));l=qf(new kf(),'Vypo\u010Dti');l.j(Cs(new Bs(),k,m));c=fh(new dh());e=Bh(new zh(),'               ');rj(e,'50px');gh(c,e);gh(c,l);Aj(g,c);f=Bh(new zh(),'               ');rj(f,'50px');Aj(g,f);Aj(g,d);ff(pi('percent-calc'),g);}
function bt(a,b){a.a=b;}
function ks(){}
_=ks.prototype=new tm();_.tI=0;_.a=false;function ms(b,a,c){b.a=a;b.b=c;return b;}
function os(c,a,b){if(!ql(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){Di(nb(c,19));}else{if(this.a.a){return;}bt(this.a,true);ft(this.b,null);bt(this.a,false);}pd(qs(new ps(),this,this.b),200);}
function ls(){}
_=ls.prototype=new lh();_.E=os;_.tI=48;function rs(){rs=ht;nd();}
function qs(b,a,c){rs();b.a=c;ld(b);return b;}
function ss(){ft(this.a,null);}
function ps(){}
_=ps.prototype=new gd();_.gb=ss;_.tI=49;function us(b,a,c){b.a=a;b.b=c;return b;}
function ws(c,a,b){if(!ql(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){Di(nb(c,19));}else{if(this.a.a){return;}bt(this.a,true);ft(this.b,null);bt(this.a,false);}pd(ys(new xs(),this,this.b),200);}
function ts(){}
_=ts.prototype=new lh();_.E=ws;_.tI=50;function zs(){zs=ht;nd();}
function ys(b,a,c){zs();b.a=c;ld(b);return b;}
function As(){ft(this.a,null);}
function xs(){}
_=xs.prototype=new gd();_.gb=As;_.tI=51;function Cs(b,a,c){b.a=a;b.b=c;return b;}
function Es(a){if(this.a.a){return;}bt(this.a,true);ft(this.b,null);bt(this.a,false);}
function Bs(){}
_=Bs.prototype=new tm();_.C=Es;_.tI=52;function dt(c,b,a,d){c.b=b;c.a=a;c.c=d;return c;}
function ft(e,c){var a,b,d,f;if(Fi(e.b)===null||bn(Fi(e.b))<1){bj(e.c,'');return;}b=xl(Fi(e.b));if(Fi(e.b)===null||bn(Fi(e.b))<1){bj(e.c,'');return;}a=xl(Fi(e.a));f=gm(b*a)/100.0;d=kn(f);bj(e.c,d);}
function gt(a){ft(this,a);}
function ct(){}
_=ct.prototype=new tm();_.B=gt;_.tI=53;_.a=null;_.b=null;_.c=null;function kl(){at(new ks());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{kl();}catch(a){b(d);}else{kl();}}
var sb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{6:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{15:1},{15:1},{15:1},{15:1},{11:1,12:1,13:1,14:1},{9:1},{15:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{6:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1,19:1},{11:1,12:1,13:1,14:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{16:1},{17:1},{17:1},{16:1},{18:1},{17:1},{3:1},{9:1},{5:1},{9:1},{5:1},{8:1},{7:1}];if (net_jesta_md_kalkulacka_PerCentCalc) {  var __gwt_initHandlers = net_jesta_md_kalkulacka_PerCentCalc.__gwt_initHandlers;  net_jesta_md_kalkulacka_PerCentCalc.onScriptLoad(gwtOnLoad);}})();