(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,lt='com.google.gwt.core.client.',mt='com.google.gwt.lang.',nt='com.google.gwt.user.client.',ot='com.google.gwt.user.client.impl.',pt='com.google.gwt.user.client.ui.',qt='com.google.gwt.user.client.ui.impl.',rt='java.lang.',st='java.util.',tt='net.jesta.md.kalkulacka.client.';function kt(){}
function ym(a){return this===a;}
function zm(){return qn(this);}
function wm(){}
_=wm.prototype={};_.eQ=ym;_.hC=zm;_.tI=1;var q=null;function t(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
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
_=x.prototype=new wm();_.eQ=E;_.hC=F;_.tI=7;function bb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function db(a,b,c){return a[b]=c;}
function eb(b,a){return b[a];}
function fb(a){return a.length;}
function hb(e,d,c,b,a){return gb(e,d,c,b,0,fb(b),a);}
function gb(j,i,g,c,e,a,b){var d,f,h;if((f=eb(c,e))<0){throw new km();}h=bb(new ab(),f,eb(i,e),eb(g,e),j);++e;if(e<a){j=fn(j,1);for(d=0;d<f;++d){db(h,d,gb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){db(h,d,b);}}return h;}
function ib(a,b,c){if(c!==null&&a.b!=0&& !ob(c,a.b)){throw new ol();}return db(a,b,c);}
function ab(){}
_=ab.prototype=new wm();_.tI=0;function lb(b,a){return !(!(b&&sb[b][a]));}
function mb(a){return String.fromCharCode(a);}
function nb(b,a){if(b!=null)lb(b.tI,a)||rb();return b;}
function ob(b,a){return b!=null&&lb(b.tI,a);}
function pb(a){return a&65535;}
function rb(){throw new ul();}
function qb(a){if(a!==null){throw new ul();}return a;}
function tb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var sb;function xb(){xb=kt;uc=Cp(new Ap());{qc=new fe();ke(qc);}}
function yb(b,a){xb();te(qc,b,a);}
function zb(a,b){xb();return ie(qc,a,b);}
function Ab(){xb();return ve(qc,'button');}
function Bb(){xb();return ve(qc,'div');}
function Cb(){xb();return we(qc,'text');}
function Db(){xb();return ve(qc,'tbody');}
function Eb(){xb();return ve(qc,'td');}
function Fb(){xb();return ve(qc,'tr');}
function ac(){xb();return ve(qc,'table');}
function dc(b,a,d){xb();var c;c=q;{cc(b,a,d);}}
function cc(b,a,c){xb();var d;if(a===tc){if(kc(b)==8192){tc=null;}}d=bc;bc=b;try{c.A(b);}finally{bc=d;}}
function ec(b,a){xb();xe(qc,b,a);}
function fc(a){xb();return ye(qc,a);}
function gc(a){xb();return ze(qc,a);}
function hc(a){xb();return Ae(qc,a);}
function ic(a){xb();return Be(qc,a);}
function jc(a){xb();return Ce(qc,a);}
function kc(a){xb();return De(qc,a);}
function lc(a){xb();pe(qc,a);}
function mc(a){xb();return Ee(qc,a);}
function nc(a,b){xb();return Fe(qc,a,b);}
function oc(a){xb();return af(qc,a);}
function pc(a){xb();return qe(qc,a);}
function rc(a){xb();var b,c;c=true;if(uc.b>0){b=qb(aq(uc,uc.b-1));if(!(c=null.lb())){ec(a,true);lc(a);}}return c;}
function sc(b,a){xb();bf(qc,b,a);}
function xc(a,b,c){xb();ef(qc,a,b,c);}
function vc(a,b,c){xb();cf(qc,a,b,c);}
function wc(a,b,c){xb();df(qc,a,b,c);}
function yc(a,b){xb();ff(qc,a,b);}
function zc(a,b){xb();gf(qc,a,b);}
function Ac(a,b){xb();hf(qc,a,b);}
function Bc(b,a,c){xb();jf(qc,b,a,c);}
function Cc(a,b){xb();me(qc,a,b);}
var bc=null,qc=null,tc=null,uc;function Fc(a){if(ob(a,4)){return zb(this,nb(a,4));}return z(tb(this,Dc),a);}
function ad(){return A(tb(this,Dc));}
function Dc(){}
_=Dc.prototype=new x();_.eQ=Fc;_.hC=ad;_.tI=8;function ed(a){return z(tb(this,bd),a);}
function fd(){return A(tb(this,bd));}
function bd(){}
_=bd.prototype=new x();_.eQ=ed;_.hC=fd;_.tI=9;function nd(){nd=kt;vd=Cp(new Ap());{ud();}}
function ld(a){nd();return a;}
function md(a){if(a.b){qd(a.c);}else{rd(a.c);}eq(vd,a);}
function od(a){if(!a.b){eq(vd,a);}a.gb();}
function pd(b,a){if(a<=0){throw Fl(new El(),'must be positive');}md(b);b.b=false;b.c=sd(b,a);Dp(vd,b);}
function qd(a){nd();$wnd.clearInterval(a);}
function rd(a){nd();$wnd.clearTimeout(a);}
function sd(b,a){nd();return $wnd.setTimeout(function(){b.r();},a);}
function td(){var a;a=q;{od(this);}}
function ud(){nd();zd(new hd());}
function gd(){}
_=gd.prototype=new wm();_.r=td;_.tI=10;_.b=false;_.c=0;var vd;function jd(){while((nd(),vd).b>0){md(nb(aq((nd(),vd),0),5));}}
function kd(){return null;}
function hd(){}
_=hd.prototype=new wm();_.cb=jd;_.db=kd;_.tI=11;function yd(){yd=kt;Ad=Cp(new Ap());ce=Cp(new Ap());{Ed();}}
function zd(a){yd();Dp(Ad,a);}
function Bd(){yd();var a,b;for(a=io(Ad);ao(a);){b=nb(bo(a),6);b.cb();}}
function Cd(){yd();var a,b,c,d;d=null;for(a=io(Ad);ao(a);){b=nb(bo(a),6);c=b.db();{d=c;}}return d;}
function Dd(){yd();var a,b;for(a=io(ce);ao(a);){b=qb(bo(a));null.lb();}}
function Ed(){yd();__gwt_initHandlers(function(){be();},function(){return ae();},function(){Fd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function Fd(){yd();var a;a=q;{Bd();}}
function ae(){yd();var a;a=q;{return Cd();}}
function be(){yd();var a;a=q;{Dd();}}
var Ad,ce;function te(c,b,a){b.appendChild(a);}
function ve(b,a){return $doc.createElement(a);}
function we(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function xe(c,b,a){b.cancelBubble=a;}
function ye(b,a){return !(!a.altKey);}
function ze(b,a){return !(!a.ctrlKey);}
function Ae(b,a){return a.which||(a.keyCode|| -1);}
function Be(b,a){return !(!a.metaKey);}
function Ce(b,a){return !(!a.shiftKey);}
function De(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Ee(c,b){var a=$doc.getElementById(b);return a||null;}
function Fe(d,a,b){var c=a[b];return c==null?null:String(c);}
function af(b,a){return a.__eventBits||0;}
function bf(c,b,a){b.removeChild(a);}
function ef(c,a,b,d){a[b]=d;}
function cf(c,a,b,d){a[b]=d;}
function df(c,a,b,d){a[b]=d;}
function ff(c,a,b){a.__listener=b;}
function gf(c,a,b){if(!b){b='';}a.innerHTML=b;}
function hf(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function jf(c,b,a,d){b.style[a]=d;}
function de(){}
_=de.prototype=new wm();_.tI=0;function pe(b,a){a.preventDefault();}
function qe(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function re(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){dc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!rc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)dc(b,a,c);};$wnd.__captureElem=null;}
function se(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ne(){}
_=ne.prototype=new de();_.tI=0;function ie(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function ke(a){re(a);je(a);}
function je(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function me(c,b,a){se(c,b,a);le(c,b,a);}
function le(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function ee(){}
_=ee.prototype=new ne();_.tI=0;function fe(){}
_=fe.prototype=new ee();_.tI=0;function oj(b,a){pj(b,rj(b)+mb(45)+a);}
function pj(b,a){Cj(b.i,a,true);}
function rj(a){return Aj(a.i);}
function sj(b,a){tj(b,rj(b)+mb(45)+a);}
function tj(b,a){Cj(b.i,a,false);}
function uj(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function vj(b,a){if(b.i!==null){uj(b,b.i,a);}b.i=a;}
function wj(b,a){Bj(b.i,a);}
function xj(a,b){Bc(a.i,'width',b);}
function yj(b,a){Cc(b.i,a|oc(b.i));}
function zj(a){return nc(a,'className');}
function Aj(a){var b,c;b=zj(a);c=bn(b,32);if(c>=0){return gn(b,0,c);}return b;}
function Bj(a,b){xc(a,'className',b);}
function Cj(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw Bm(new Am(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=hn(j);if(en(j)==0){throw Fl(new El(),'Style names cannot be empty');}i=zj(c);e=cn(i,j);while(e!=(-1)){if(e==0||Em(i,e-1)==32){f=e+en(j);g=en(i);if(f==g||f<g&&Em(i,f)==32){break;}}e=dn(i,j,e+1);}if(a){if(e==(-1)){if(en(i)>0){i+=' ';}xc(c,'className',i+j);}}else{if(e!=(-1)){b=hn(gn(i,0,e));d=hn(fn(i,e+en(j)));if(en(b)==0){h=d;}else if(en(d)==0){h=b;}else{h=b+' '+d;}xc(c,'className',h);}}}
function nj(){}
_=nj.prototype=new wm();_.tI=0;_.i=null;function wk(a){if(a.g){throw cm(new bm(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;yc(a.i,a);a.o();a.ab();}
function xk(a){if(!a.g){throw cm(new bm(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.bb();}finally{a.p();yc(a.i,null);a.g=false;}}
function yk(a){if(a.h!==null){a.h.fb(a);}else if(a.h!==null){throw cm(new bm(),"This widget's parent does not implement HasWidgets");}}
function zk(b,a){if(b.g){yc(b.i,null);}vj(b,a);if(b.g){yc(a,b);}}
function Ak(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){xk(c);}c.h=null;}else{if(a!==null){throw cm(new bm(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){wk(c);}}}
function Bk(){}
function Ck(){}
function Dk(a){}
function Ek(){}
function Fk(){}
function al(a){zk(this,a);}
function ek(){}
_=ek.prototype=new nj();_.o=Bk;_.p=Ck;_.A=Dk;_.ab=Ek;_.bb=Fk;_.hb=al;_.tI=12;_.g=false;_.h=null;function gi(b,a){Ak(a,b);}
function ii(b,a){Ak(a,null);}
function ji(){var a,b;for(b=this.x();jk(b);){a=kk(b);wk(a);}}
function ki(){var a,b;for(b=this.x();jk(b);){a=kk(b);xk(a);}}
function li(){}
function mi(){}
function fi(){}
_=fi.prototype=new ek();_.o=ji;_.p=ki;_.ab=li;_.bb=mi;_.tI=13;function jg(a){a.f=nk(new fk(),a);}
function kg(a){jg(a);return a;}
function lg(c,a,b){yk(a);ok(c.f,a);yb(b,a.i);gi(c,a);}
function ng(b,c){var a;if(c.h!==b){return false;}ii(b,c);a=c.i;sc(pc(a),a);uk(b.f,c);return true;}
function og(){return sk(this.f);}
function pg(a){return ng(this,a);}
function ig(){}
_=ig.prototype=new fi();_.x=og;_.fb=pg;_.tI=14;function lf(a){kg(a);a.hb(Bb());Bc(a.i,'position','relative');Bc(a.i,'overflow','hidden');return a;}
function mf(a,b){lg(a,b,a.i);}
function of(a){Bc(a,'left','');Bc(a,'top','');Bc(a,'position','');}
function pf(b){var a;a=ng(this,b);if(a){of(b.i);}return a;}
function kf(){}
_=kf.prototype=new ig();_.fb=pf;_.tI=15;function sg(){sg=kt;kl(),ml;}
function rg(b,a){kl(),ml;ug(b,a);return b;}
function tg(b,a){switch(kc(a)){case 1:if(b.e!==null){gg(b.e,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function ug(b,a){zk(b,a);yj(b,7041);}
function vg(a){if(this.e===null){this.e=eg(new dg());}Dp(this.e,a);}
function wg(a){tg(this,a);}
function xg(a){ug(this,a);}
function qg(){}
_=qg.prototype=new ek();_.j=vg;_.A=wg;_.hb=xg;_.tI=16;_.e=null;function tf(){tf=kt;kl(),ml;}
function sf(b,a){kl(),ml;rg(b,a);return b;}
function uf(b,a){zc(b.i,a);}
function rf(){}
_=rf.prototype=new qg();_.tI=17;function xf(){xf=kt;kl(),ml;}
function vf(a){kl(),ml;sf(a,Ab());yf(a.i);wj(a,'gwt-Button');return a;}
function wf(b,a){kl(),ml;vf(b);uf(b,a);return b;}
function yf(b){xf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function qf(){}
_=qf.prototype=new rf();_.tI=18;function Af(a){kg(a);a.e=ac();a.d=Db();yb(a.e,a.d);a.hb(a.e);return a;}
function Cf(c,b,a){xc(b,'align',a.a);}
function Df(c,b,a){Bc(b,'verticalAlign',a.a);}
function zf(){}
_=zf.prototype=new ig();_.tI=19;_.d=null;_.e=null;function yn(d,a,b){var c;while(a.w()){c=a.z();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function An(a){throw vn(new un(),'add');}
function Bn(b){var a;a=yn(this,this.x(),b);return a!==null;}
function xn(){}
_=xn.prototype=new wm();_.l=An;_.n=Bn;_.tI=0;function ho(b,a){throw fm(new em(),'Index: '+a+', Size: '+b.b);}
function io(a){return En(new Dn(),a);}
function jo(b,a){throw vn(new un(),'add');}
function ko(a){this.k(this.jb(),a);return true;}
function lo(e){var a,b,c,d,f;if(e===this){return true;}if(!ob(e,15)){return false;}f=nb(e,15);if(this.jb()!=f.jb()){return false;}c=io(this);d=f.x();while(ao(c)){a=bo(c);b=bo(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function mo(){var a,b,c,d;c=1;a=31;b=io(this);while(ao(b)){d=bo(b);c=31*c+(d===null?0:d.hC());}return c;}
function no(){return io(this);}
function oo(a){throw vn(new un(),'remove');}
function Cn(){}
_=Cn.prototype=new xn();_.k=jo;_.l=ko;_.eQ=lo;_.hC=mo;_.x=no;_.eb=oo;_.tI=20;function Bp(a){{Ep(a);}}
function Cp(a){Bp(a);return a;}
function Dp(b,a){oq(b.a,b.b++,a);return true;}
function Ep(a){a.a=B();a.b=0;}
function aq(b,a){if(a<0||a>=b.b){ho(b,a);}return kq(b.a,a);}
function bq(b,a){return cq(b,a,0);}
function cq(c,b,a){if(a<0){ho(c,a);}for(;a<c.b;++a){if(jq(b,kq(c.a,a))){return a;}}return (-1);}
function dq(c,a){var b;b=aq(c,a);mq(c.a,a,1);--c.b;return b;}
function eq(c,b){var a;a=bq(c,b);if(a==(-1)){return false;}dq(c,a);return true;}
function gq(a,b){if(a<0||a>this.b){ho(this,a);}fq(this.a,a,b);++this.b;}
function hq(a){return Dp(this,a);}
function fq(a,b,c){a.splice(b,0,c);}
function iq(a){return bq(this,a)!=(-1);}
function jq(a,b){return a===b||a!==null&&a.eQ(b);}
function lq(a){return aq(this,a);}
function kq(a,b){return a[b];}
function nq(a){return dq(this,a);}
function mq(a,c,b){a.splice(c,b);}
function oq(a,b,c){a[b]=c;}
function pq(){return this.b;}
function Ap(){}
_=Ap.prototype=new Cn();_.k=gq;_.l=hq;_.n=iq;_.u=lq;_.eb=nq;_.jb=pq;_.tI=21;_.a=null;_.b=0;function Ff(a){Cp(a);return a;}
function bg(d,c){var a,b;for(a=io(d);ao(a);){b=nb(bo(a),7);b.B(c);}}
function Ef(){}
_=Ef.prototype=new Ap();_.tI=22;function eg(a){Cp(a);return a;}
function gg(d,c){var a,b;for(a=io(d);ao(a);){b=nb(bo(a),8);b.C(c);}}
function dg(){}
_=dg.prototype=new Ap();_.tI=23;function Eg(){Eg=kt;Cg(new Bg(),'center');Fg=Cg(new Bg(),'left');Cg(new Bg(),'right');}
var Fg;function Cg(b,a){b.a=a;return b;}
function Bg(){}
_=Bg.prototype=new wm();_.tI=0;_.a=null;function fh(){fh=kt;dh(new ch(),'bottom');dh(new ch(),'middle');gh=dh(new ch(),'top');}
var gh;function dh(a,b){a.a=b;return a;}
function ch(){}
_=ch.prototype=new wm();_.tI=0;_.a=null;function kh(a){a.a=(Eg(),Fg);a.c=(fh(),gh);}
function lh(a){Af(a);kh(a);a.b=Fb();yb(a.d,a.b);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function mh(b,c){var a;a=oh(b);yb(b.b,a);lg(b,c,a);}
function oh(b){var a;a=Eb();Cf(b,a,b.a);Df(b,a,b.c);return a;}
function ph(c){var a,b;b=pc(c.i);a=ng(this,c);if(a){sc(this.b,b);}return a;}
function jh(){}
_=jh.prototype=new zf();_.fb=ph;_.tI=24;_.b=null;function th(c,a,b){}
function uh(c,a,b){}
function vh(c,a,b){}
function rh(){}
_=rh.prototype=new wm();_.D=th;_.E=uh;_.F=vh;_.tI=25;function xh(a){Cp(a);return a;}
function zh(f,e,b,d){var a,c;for(a=io(f);ao(a);){c=nb(bo(a),9);c.D(e,b,d);}}
function Ah(f,e,b,d){var a,c;for(a=io(f);ao(a);){c=nb(bo(a),9);c.E(e,b,d);}}
function Bh(f,e,b,d){var a,c;for(a=io(f);ao(a);){c=nb(bo(a),9);c.F(e,b,d);}}
function Ch(d,c,a){var b;b=Dh(a);switch(kc(a)){case 128:zh(d,c,pb(hc(a)),b);break;case 512:Bh(d,c,pb(hc(a)),b);break;case 256:Ah(d,c,pb(hc(a)),b);break;}}
function Dh(a){return (jc(a)?1:0)|(ic(a)?8:0)|(gc(a)?2:0)|(fc(a)?4:0);}
function wh(){}
_=wh.prototype=new Ap();_.tI=26;function ai(a){a.hb(Bb());yj(a,131197);wj(a,'gwt-Label');return a;}
function bi(b,a){ai(b);di(b,a);return b;}
function di(b,a){Ac(b.i,a);}
function ei(a){switch(kc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function Fh(){}
_=Fh.prototype=new ek();_.A=ei;_.tI=27;function ti(){ti=kt;xi=mr(new sq());}
function si(b,a){ti();lf(b);if(a===null){a=ui();}b.hb(a);wk(b);return b;}
function vi(c){ti();var a,b;b=nb(sr(xi,c),10);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=mc(c))){return null;}}if(xi.c==0){wi();}tr(xi,c,b=si(new ni(),a));return b;}
function ui(){ti();return $doc.body;}
function wi(){ti();zd(new oi());}
function ni(){}
_=ni.prototype=new kf();_.tI=28;var xi;function qi(){var a,b;for(b=bp(pp((ti(),xi)));ip(b);){a=nb(jp(b),10);if(a.g){xk(a);}}}
function ri(){return null;}
function oi(){}
_=oi.prototype=new wm();_.cb=qi;_.db=ri;_.tI=29;function ej(){ej=kt;kl(),ml;}
function aj(b,a){kl(),ml;rg(b,a);yj(b,1024);return b;}
function bj(b,a){if(b.a===null){b.a=Ff(new Ef());}Dp(b.a,a);}
function cj(b,a){if(b.d===null){b.d=xh(new wh());}Dp(b.d,a);}
function dj(a){if(a.c!==null){lc(a.c);}}
function fj(a){return nc(a.i,'value');}
function gj(c,a){var b;vc(c.i,'readOnly',a);b='readonly';if(a){oj(c,b);}else{sj(c,b);}}
function hj(b,a){xc(b.i,'value',a!==null?a:'');}
function ij(a){if(this.b===null){this.b=eg(new dg());}Dp(this.b,a);}
function jj(a){var b;tg(this,a);b=kc(a);if(this.d!==null&&(b&896)!=0){this.c=a;Ch(this.d,this,a);this.c=null;}else if(b==1){if(this.b!==null){gg(this.b,this);}}else if(b==1024){if(this.a!==null){bg(this.a,this);}}}
function Fi(){}
_=Fi.prototype=new qg();_.j=ij;_.A=jj;_.tI=30;_.a=null;_.b=null;_.c=null;_.d=null;function lj(){lj=kt;kl(),ml;}
function kj(a){kl(),ml;aj(a,Cb());wj(a,'gwt-TextBox');return a;}
function mj(b,a){wc(b.i,'size',a);}
function Ei(){}
_=Ei.prototype=new Fi();_.tI=31;function Ej(a){a.a=(Eg(),Fg);a.b=(fh(),gh);}
function Fj(a){Af(a);Ej(a);xc(a.e,'cellSpacing','0');xc(a.e,'cellPadding','0');return a;}
function ak(b,d){var a,c;c=Fb();a=ck(b);yb(c,a);yb(b.d,c);lg(b,d,a);}
function ck(b){var a;a=Eb();Cf(b,a,b.a);Df(b,a,b.b);return a;}
function dk(c){var a,b;b=pc(c.i);a=ng(this,c);if(a){sc(this.d,pc(b));}return a;}
function Dj(){}
_=Dj.prototype=new zf();_.fb=dk;_.tI=32;function nk(b,a){b.a=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[11],[4],null);return b;}
function ok(a,b){rk(a,b,a.b);}
function qk(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function rk(d,e,a){var b,c;if(a<0||a>d.b){throw new em();}if(d.b==d.a.a){c=hb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[11],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ib(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ib(d.a,b,d.a[b-1]);}ib(d.a,a,e);}
function sk(a){return hk(new gk(),a);}
function tk(c,b){var a;if(b<0||b>=c.b){throw new em();}--c.b;for(a=b;a<c.b;++a){ib(c.a,a,c.a[a+1]);}ib(c.a,c.b,null);}
function uk(b,c){var a;a=qk(b,c);if(a==(-1)){throw new js();}tk(b,a);}
function fk(){}
_=fk.prototype=new wm();_.tI=0;_.a=null;_.b=0;function hk(b,a){b.b=a;return b;}
function jk(a){return a.a<a.b.b-1;}
function kk(a){if(a.a>=a.b.b){throw new js();}return a.b.a[++a.a];}
function lk(){return jk(this);}
function mk(){return kk(this);}
function gk(){}
_=gk.prototype=new wm();_.w=lk;_.z=mk;_.tI=0;_.a=(-1);function kl(){kl=kt;ll=el(new cl());ml=ll!==null?jl(new bl()):ll;}
function jl(a){kl();return a;}
function bl(){}
_=bl.prototype=new wm();_.tI=0;var ll,ml;function fl(){fl=kt;kl();}
function dl(a){gl(a);hl(a);il(a);}
function el(a){fl();jl(a);dl(a);return a;}
function gl(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function hl(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function il(a){return function(){this.firstChild.focus();};}
function cl(){}
_=cl.prototype=new bl();_.tI=0;function sn(b,a){a;return b;}
function rn(){}
_=rn.prototype=new wm();_.tI=3;function Cl(b,a){sn(b,a);return b;}
function Bl(){}
_=Bl.prototype=new rn();_.tI=4;function Bm(b,a){Cl(b,a);return b;}
function Am(){}
_=Am.prototype=new Bl();_.tI=5;function ol(){}
_=ol.prototype=new Am();_.tI=33;function tl(a){return null!=String.fromCharCode(a).match(/\d/);}
function ul(){}
_=ul.prototype=new Am();_.tI=34;function qm(){qm=kt;{vm();}}
function rm(a){qm();return isNaN(a);}
function sm(a){qm();var b;b=tm(a);if(rm(b)){throw om(new nm(),'Unable to parse '+a);}return b;}
function tm(a){qm();if(um.test(a)){return parseFloat(a);}else{return Number.NaN;}}
function vm(){qm();um=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var um=null;function zl(){zl=kt;qm();}
function Al(a){zl();return sm(a);}
function Fl(b,a){Bm(b,a);return b;}
function El(){}
_=El.prototype=new Am();_.tI=35;function cm(b,a){Bm(b,a);return b;}
function bm(){}
_=bm.prototype=new Am();_.tI=36;function fm(b,a){Bm(b,a);return b;}
function em(){}
_=em.prototype=new Am();_.tI=37;function jm(a){return Math.round(a);}
function km(){}
_=km.prototype=new Am();_.tI=38;function om(b,a){Fl(b,a);return b;}
function nm(){}
_=nm.prototype=new El();_.tI=39;function Em(b,a){return b.charCodeAt(a);}
function an(g){var a=ln;if(!a){a=ln={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function bn(b,a){return b.indexOf(String.fromCharCode(a));}
function cn(b,a){return b.indexOf(a);}
function dn(c,b,a){return c.indexOf(b,a);}
function en(a){return a.length;}
function fn(b,a){return b.substr(a,b.length-a);}
function gn(c,a,b){return c.substr(a,b-a);}
function hn(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function jn(a,b){return String(a)==b;}
function kn(a){if(!ob(a,1))return false;return jn(this,a);}
function mn(){return an(this);}
function nn(a){return ''+a;}
_=String.prototype;_.eQ=kn;_.hC=mn;_.tI=2;var ln=null;function qn(a){return u(a);}
function vn(b,a){Bm(b,a);return b;}
function un(){}
_=un.prototype=new Am();_.tI=40;function En(b,a){b.c=a;return b;}
function ao(a){return a.a<a.c.jb();}
function bo(a){if(!ao(a)){throw new js();}return a.c.u(a.b=a.a++);}
function co(a){if(a.b<0){throw new bm();}a.c.eb(a.b);a.a=a.b;a.b=(-1);}
function eo(){return ao(this);}
function fo(){return bo(this);}
function Dn(){}
_=Dn.prototype=new wm();_.w=eo;_.z=fo;_.tI=0;_.a=0;_.b=(-1);function np(f,d,e){var a,b,c;for(b=hr(f.q());ar(b);){a=br(b);c=a.s();if(d===null?c===null:d.eQ(c)){if(e){cr(b);}return a;}}return null;}
function op(b){var a;a=b.q();return ro(new qo(),b,a);}
function pp(b){var a;a=rr(b);return Fo(new Eo(),b,a);}
function qp(a){return np(this,a,false)!==null;}
function rp(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ob(d,16)){return false;}f=nb(d,16);c=op(this);e=f.y();if(!xp(c,e)){return false;}for(a=to(c);Ao(a);){b=Bo(a);h=this.v(b);g=f.v(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function sp(b){var a;a=np(this,b,false);return a===null?null:a.t();}
function tp(){var a,b,c;b=0;for(c=hr(this.q());ar(c);){a=br(c);b+=a.hC();}return b;}
function up(){return op(this);}
function po(){}
_=po.prototype=new wm();_.m=qp;_.eQ=rp;_.v=sp;_.hC=tp;_.y=up;_.tI=41;function xp(e,b){var a,c,d;if(b===e){return true;}if(!ob(b,17)){return false;}c=nb(b,17);if(c.jb()!=e.jb()){return false;}for(a=c.x();a.w();){d=a.z();if(!e.n(d)){return false;}}return true;}
function yp(a){return xp(this,a);}
function zp(){var a,b,c;a=0;for(b=this.x();b.w();){c=b.z();if(c!==null){a+=c.hC();}}return a;}
function vp(){}
_=vp.prototype=new xn();_.eQ=yp;_.hC=zp;_.tI=42;function ro(b,a,c){b.a=a;b.b=c;return b;}
function to(b){var a;a=hr(b.b);return yo(new xo(),b,a);}
function uo(a){return this.a.m(a);}
function vo(){return to(this);}
function wo(){return this.b.a.c;}
function qo(){}
_=qo.prototype=new vp();_.n=uo;_.x=vo;_.jb=wo;_.tI=43;function yo(b,a,c){b.a=c;return b;}
function Ao(a){return a.a.w();}
function Bo(b){var a;a=b.a.z();return a.s();}
function Co(){return Ao(this);}
function Do(){return Bo(this);}
function xo(){}
_=xo.prototype=new wm();_.w=Co;_.z=Do;_.tI=0;function Fo(b,a,c){b.a=a;b.b=c;return b;}
function bp(b){var a;a=hr(b.b);return gp(new fp(),b,a);}
function cp(a){return qr(this.a,a);}
function dp(){return bp(this);}
function ep(){return this.b.a.c;}
function Eo(){}
_=Eo.prototype=new xn();_.n=cp;_.x=dp;_.jb=ep;_.tI=0;function gp(b,a,c){b.a=c;return b;}
function ip(a){return a.a.w();}
function jp(a){var b;b=a.a.z().t();return b;}
function kp(){return ip(this);}
function lp(){return jp(this);}
function fp(){}
_=fp.prototype=new wm();_.w=kp;_.z=lp;_.tI=0;function or(){or=kt;vr=Br();}
function lr(a){{nr(a);}}
function mr(a){or();lr(a);return a;}
function nr(a){a.a=B();a.d=C();a.b=tb(vr,x);a.c=0;}
function pr(b,a){if(ob(a,1)){return Fr(b.d,nb(a,1))!==vr;}else if(a===null){return b.b!==vr;}else{return Er(b.a,a,a.hC())!==vr;}}
function qr(a,b){if(a.b!==vr&&Dr(a.b,b)){return true;}else if(Ar(a.d,b)){return true;}else if(yr(a.a,b)){return true;}return false;}
function rr(a){return fr(new Cq(),a);}
function sr(c,a){var b;if(ob(a,1)){b=Fr(c.d,nb(a,1));}else if(a===null){b=c.b;}else{b=Er(c.a,a,a.hC());}return b===vr?null:b;}
function tr(c,a,d){var b;if(a!==null){b=cs(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=bs(c.a,a,d,an(a));}if(b===vr){++c.c;return null;}else{return b;}}
function ur(c,a){var b;if(ob(a,1)){b=es(c.d,nb(a,1));}else if(a===null){b=c.b;c.b=tb(vr,x);}else{b=ds(c.a,a,a.hC());}if(b===vr){return null;}else{--c.c;return b;}}
function wr(e,c){or();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.l(a[f]);}}}}
function xr(d,a){or();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=wq(c.substring(1),e);a.l(b);}}}
function yr(f,h){or();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(Dr(h,d)){return true;}}}}return false;}
function zr(a){return pr(this,a);}
function Ar(c,d){or();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(Dr(d,a)){return true;}}}return false;}
function Br(){or();}
function Cr(){return rr(this);}
function Dr(a,b){or();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function as(a){return sr(this,a);}
function Er(f,h,e){or();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(Dr(h,d)){return c.t();}}}}
function Fr(b,a){or();return b[':'+a];}
function bs(f,h,j,e){or();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(Dr(h,d)){var i=c.t();c.ib(j);return i;}}}else{a=f[e]=[];}var c=wq(h,j);a.push(c);}
function cs(c,a,d){or();a=':'+a;var b=c[a];c[a]=d;return b;}
function ds(f,h,e){or();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(Dr(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.t();}}}}
function es(c,a){or();a=':'+a;var b=c[a];delete c[a];return b;}
function sq(){}
_=sq.prototype=new po();_.m=zr;_.q=Cr;_.v=as;_.tI=44;_.a=null;_.b=null;_.c=0;_.d=null;var vr;function uq(b,a,c){b.a=a;b.b=c;return b;}
function wq(a,b){return uq(new tq(),a,b);}
function xq(b){var a;if(ob(b,18)){a=nb(b,18);if(Dr(this.a,a.s())&&Dr(this.b,a.t())){return true;}}return false;}
function yq(){return this.a;}
function zq(){return this.b;}
function Aq(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function Bq(a){var b;b=this.b;this.b=a;return b;}
function tq(){}
_=tq.prototype=new wm();_.eQ=xq;_.s=yq;_.t=zq;_.hC=Aq;_.ib=Bq;_.tI=45;_.a=null;_.b=null;function fr(b,a){b.a=a;return b;}
function hr(a){return Eq(new Dq(),a.a);}
function ir(c){var a,b,d;if(ob(c,18)){a=nb(c,18);b=a.s();if(pr(this.a,b)){d=sr(this.a,b);return Dr(a.t(),d);}}return false;}
function jr(){return hr(this);}
function kr(){return this.a.c;}
function Cq(){}
_=Cq.prototype=new vp();_.n=ir;_.x=jr;_.jb=kr;_.tI=46;function Eq(c,b){var a;c.c=b;a=Cp(new Ap());if(c.c.b!==(or(),vr)){Dp(a,uq(new tq(),null,c.c.b));}xr(c.c.d,a);wr(c.c.a,a);c.a=io(a);return c;}
function ar(a){return ao(a.a);}
function br(a){return a.b=nb(bo(a.a),18);}
function cr(a){if(a.b===null){throw cm(new bm(),'Must call next() before remove().');}else{co(a.a);ur(a.c,a.b.s());a.b=null;}}
function dr(){return ar(this);}
function er(){return br(this);}
function Dq(){}
_=Dq.prototype=new wm();_.w=dr;_.z=er;_.tI=0;_.a=null;_.b=null;function js(){}
_=js.prototype=new Am();_.tI=47;function dt(k){var a,b,c,d,e,f,g,h,i,j,l,m;h=kj(new Ei());mj(h,6);i=kj(new Ei());mj(i,5);j=kj(new Ei());gj(j,true);mj(j,8);m=gt(new ft(),i,h,j);bj(h,m);bj(i,m);cj(i,ps(new os(),k,m));yj(i,896);yj(h,896);cj(h,xs(new ws(),k,m));g=Fj(new Dj());a=lh(new jh());mh(a,bi(new Fh(),'\u010C\xE1stka '));mh(a,h);mh(a,bi(new Fh(),' K\u010D'));ak(g,a);b=lh(new jh());mh(b,bi(new Fh(),'Po\u010Det procent '));mh(b,i);mh(b,bi(new Fh(),' %'));ak(g,b);d=lh(new jh());mh(d,bi(new Fh(),'V\xFDsledek: '));mh(d,j);mh(d,bi(new Fh(),' K\u010D   '));l=wf(new qf(),'Vypo\u010Dti');l.j(Fs(new Es(),k,m));c=lh(new jh());e=bi(new Fh(),'               ');xj(e,'50px');mh(c,e);mh(c,l);ak(g,c);f=bi(new Fh(),'               ');xj(f,'50px');ak(g,f);ak(g,d);mf(vi('percent-calc'),g);}
function et(a,b){a.a=b;}
function ns(){}
_=ns.prototype=new wm();_.tI=0;_.a=false;function ps(b,a,c){b.a=a;b.b=c;return b;}
function rs(c,a,b){if(!tl(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){dj(nb(c,19));}else{if(this.a.a){return;}et(this.a,true);it(this.b,null);et(this.a,false);}pd(ts(new ss(),this,this.b),200);}
function os(){}
_=os.prototype=new rh();_.E=rs;_.tI=48;function us(){us=kt;nd();}
function ts(b,a,c){us();b.a=c;ld(b);return b;}
function vs(){it(this.a,null);}
function ss(){}
_=ss.prototype=new gd();_.gb=vs;_.tI=49;function xs(b,a,c){b.a=a;b.b=c;return b;}
function zs(c,a,b){if(!tl(a)&&a!=9&&a!=8&&a!=46&&a!=13&&a!=36&&a!=35&&a!=37&&a!=38&&a!=39&&a!=40){dj(nb(c,19));}else{if(this.a.a){return;}et(this.a,true);it(this.b,null);et(this.a,false);}pd(Bs(new As(),this,this.b),200);}
function ws(){}
_=ws.prototype=new rh();_.E=zs;_.tI=50;function Cs(){Cs=kt;nd();}
function Bs(b,a,c){Cs();b.a=c;ld(b);return b;}
function Ds(){it(this.a,null);}
function As(){}
_=As.prototype=new gd();_.gb=Ds;_.tI=51;function Fs(b,a,c){b.a=a;b.b=c;return b;}
function bt(a){if(this.a.a){return;}et(this.a,true);it(this.b,null);et(this.a,false);}
function Es(){}
_=Es.prototype=new wm();_.C=bt;_.tI=52;function gt(c,b,a,d){c.b=b;c.a=a;c.c=d;return c;}
function it(e,c){var a,b,d,f;if(fj(e.b)===null||en(fj(e.b))<1){hj(e.c,'');return;}b=Al(fj(e.b));if(fj(e.b)===null||en(fj(e.b))<1){hj(e.c,'');return;}a=Al(fj(e.a));f=jm(b*a)/100.0;d=nn(f);hj(e.c,d);}
function jt(a){it(this,a);}
function ft(){}
_=ft.prototype=new wm();_.B=jt;_.tI=53;_.a=null;_.b=null;_.c=null;function nl(){dt(new ns());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{nl();}catch(a){b(d);}else{nl();}}
var sb=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1,4:1},{2:1},{5:1},{6:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1},{15:1},{15:1},{15:1},{15:1},{11:1,12:1,13:1,14:1},{9:1},{15:1},{11:1,12:1,13:1,14:1},{10:1,11:1,12:1,13:1,14:1},{6:1},{11:1,12:1,13:1,14:1},{11:1,12:1,13:1,14:1,19:1},{11:1,12:1,13:1,14:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{16:1},{17:1},{17:1},{16:1},{18:1},{17:1},{3:1},{9:1},{5:1},{9:1},{5:1},{8:1},{7:1}];if (net_jesta_md_kalkulacka_PerCentCalc) {  var __gwt_initHandlers = net_jesta_md_kalkulacka_PerCentCalc.__gwt_initHandlers;  net_jesta_md_kalkulacka_PerCentCalc.onScriptLoad(gwtOnLoad);}})();