(()=>{var Bc="170";var Nf=0,Oh=1,Df=2;var Ya=1,zc=2,jn=3,bi=0,$e=1,Fe=2,On=0,vi=1,an=2,Bh=3,zh=4,Uf=5,Gi=100,Ff=101,Of=102,Bf=103,zf=104,kf=200,Hf=201,Gf=202,Vf=203,fl=204,pl=205,Wf=206,Xf=207,qf=208,$f=209,Yf=210,Zf=211,Kf=212,Jf=213,jf=214,ml=0,gl=1,xl=2,ws=3,yl=4,vl=5,_l=6,Ml=7,Yu=0,Qf=1,tp=2,_i=0,kc=1,Hc=2,Gc=3,yr=4,ep=5,Vc=6,Wc=7;var Zu=300,Ts=301,Es=302,bl=303,Sl=304,Za=306,lr=1e3,Wi=1001,wl=1002,rn=1003,np=1004;var Nr=1005;var Un=1006,Po=1007;var Xi=1008;var ni=1009,Ku=1010,Ju=1011,cr=1012,Xc=1013,qi=1014,Fn=1015,cn=1016,qc=1017,$c=1018,As=1020,ju=35902,Qu=1021,td=1022,wn=1023,ed=1024,nd=1025,Ms=1026,Rs=1027,Yc=1028,Zc=1029,id=1030,Kc=1031;var Jc=1033,ha=33776,ua=33777,da=33778,fa=33779,Tl=35840,El=35841,Al=35842,Rl=35843,Cl=36196,Il=37492,Pl=37496,Ll=37808,Nl=37809,Dl=37810,Ul=37811,Fl=37812,Ol=37813,Bl=37814,zl=37815,kl=37816,Hl=37817,Gl=37818,Vl=37819,Wl=37820,Xl=37821,pa=36492,ql=36494,$l=36495,sd=36283,Yl=36284,Zl=36285,Kl=36286;var ma=2300,Jl=2301,Lo=2302,kh=2400,Hh=2401,Gh=2402;var ip=3200,sp=3201;var rd=0,rp=1,xi="",Ue="srgb",Os="srgb-linear",Ka="linear",se="srgb";var es=7680;var Vh=519,ap=512,op=513,lp=514,ad=515,cp=516,hp=517,up=518,dp=519,jl=35044,vr=35048;var Wh="300 es",ti=2e3,ga=2001,Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var No=Math.PI/180,Ql=180/Math.PI;function Mi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Oe(s,t,e){return Math.max(t,Math.min(e,s))}function fp(s,t){return(s%t+t)%t}function Do(s,t,e){return(1-e)*s+e*t}function Dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var at=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],v=i[4],_=i[7],E=i[2],w=i[5],A=i[8];return r[0]=a*x+o*y+l*E,r[3]=a*m+o*v+l*w,r[6]=a*p+o*_+l*A,r[1]=c*x+h*y+u*E,r[4]=c*m+h*v+u*w,r[7]=c*p+h*_+u*A,r[2]=d*x+f*y+g*E,r[5]=d*m+f*v+g*w,r[8]=d*p+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Uo=new Ht;function od(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pp(){let s=xa("canvas");return s.style.display="block",s}var Xh={};function ir(s){s in Xh||(Xh[s]=!0,console.warn(s))}function mp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gp(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xp(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Yt={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?Ka:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var qh=[.64,.33,.3,.6,.15,.06],$h=[.2126,.7152,.0722],Yh=[.3127,.329],Zh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Os]:{primaries:qh,whitePoint:Yh,transfer:Ka,toXYZ:Zh,fromXYZ:Kh,luminanceCoefficients:$h,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:qh,whitePoint:Yh,transfer:se,toXYZ:Zh,fromXYZ:Kh,luminanceCoefficients:$h,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});var ns,tc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=xa("canvas")),ns.width=t.width,ns.height=t.height;let n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=xa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yp=0,ya=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fo(i[a].image)):r.push(Fo(i[a]))}else r=Fo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fo(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?tc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vp=0,Qe=class s extends Si{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Wi,i=Wi,r=Un,a=Xi,o=wn,l=ni,c=s.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Mi(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lr:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lr:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Zu;Qe.DEFAULT_ANISOTROPY=1;var Se=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(f+1)/2,E=(p+1)/2,w=(h+d)/4,A=(u+x)/4,R=(g+m)/4;return v>_&&v>E?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=A/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=R/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=A/r,i=R/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ec=class extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ya(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends ec{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},va=class extends Qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nc=class extends Qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let E=Math.sqrt(v),w=Math.atan2(E,p*y);m=Math.sin(m*w)/E,o=Math.sin(o*w)/E}let _=o*y;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oo.copy(this).projectOnVector(t),this.sub(Oo)}reflect(t){return this.sub(Oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oo=new L,Jh=new wi,fn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Ur.subVectors(this.max,$s),is.subVectors(t.a,$s),ss.subVectors(t.b,$s),rs.subVectors(t.c,$s),ui.subVectors(ss,is),di.subVectors(rs,ss),Ui.subVectors(is,rs);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ui.z,Ui.y,ui.z,0,-ui.x,di.z,0,-di.x,Ui.z,0,-Ui.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ui.y,Ui.x,0];return!Bo(e,is,ss,rs,Ur)||(e=[1,0,0,0,1,0,0,0,1],!Bo(e,is,ss,rs,Ur))?!1:(Fr.crossVectors(ui,di),e=[Fr.x,Fr.y,Fr.z],Bo(e,is,ss,rs,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new L,new L,new L,new L,new L,new L,new L,new L],Mn=new L,Dr=new fn,is=new L,ss=new L,rs=new L,ui=new L,di=new L,Ui=new L,$s=new L,Ur=new L,Fr=new L,Fi=new L;function Bo(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Fi.fromArray(s,r);let o=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _p=new fn,Ys=new L,zo=new L,ii=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_p.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(zo)),this.expandByPoint(Ys.copy(t.center).sub(zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new L,ko=new L,Or=new L,fi=new L,Ho=new L,Br=new L,Go=new L,hr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ko.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(ko);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Or),o=fi.dot(this.direction),l=-fi.dot(Or),c=fi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ko).addScaledVector(Or,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,r){Ho.subVectors(e,t),Br.subVectors(n,t),Go.crossVectors(Ho,Br);let a=this.direction.dot(Go),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,t);let l=o*this.direction.dot(Br.crossVectors(fi,Br));if(l<0)return null;let c=o*this.direction.dot(Ho.cross(fi));if(c<0||l+c>a)return null;let h=-o*fi.dot(Go);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),a=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,bp)}lookAt(t,e,n){let i=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),pi.crossVectors(n,nn),pi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),pi.crossVectors(n,nn)),pi.normalize(),zr.crossVectors(nn,pi),i[0]=pi.x,i[4]=zr.x,i[8]=nn.x,i[1]=pi.y,i[5]=zr.y,i[9]=nn.y,i[2]=pi.z,i[6]=zr.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],_=n[11],E=n[15],w=i[0],A=i[4],R=i[8],b=i[12],M=i[1],I=i[5],k=i[9],N=i[13],P=i[2],H=i[6],U=i[10],$=i[14],D=i[3],V=i[7],J=i[11],Q=i[15];return r[0]=a*w+o*M+l*P+c*D,r[4]=a*A+o*I+l*H+c*V,r[8]=a*R+o*k+l*U+c*J,r[12]=a*b+o*N+l*$+c*Q,r[1]=h*w+u*M+d*P+f*D,r[5]=h*A+u*I+d*H+f*V,r[9]=h*R+u*k+d*U+f*J,r[13]=h*b+u*N+d*$+f*Q,r[2]=g*w+x*M+m*P+p*D,r[6]=g*A+x*I+m*H+p*V,r[10]=g*R+x*k+m*U+p*J,r[14]=g*b+x*N+m*$+p*Q,r[3]=y*w+v*M+_*P+E*D,r[7]=y*A+v*I+_*H+E*V,r[11]=y*R+v*k+_*U+E*J,r[15]=y*b+v*N+_*$+E*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,v=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,_=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,E=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,w=e*y+n*v+i*_+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=y*A,t[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*A,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*p+n*l*p)*A,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*A,t[4]=v*A,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*A,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*A,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*A,t[8]=_*A,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*A,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=E*A,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*A,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*A,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,v=l*h,_=l*u,E=n.x,w=n.y,A=n.z;return i[0]=(1-(x+p))*E,i[1]=(f+_)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(d+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+v)*A,i[9]=(m-y)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=as.set(i[0],i[1],i[2]).length(),a=as.set(i[4],i[5],i[6]).length(),o=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],bn.copy(this);let c=1/r,h=1/a,u=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=ti){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(o===ti)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ga)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ti){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h,g,x;if(o===ti)g=(a+r)*u,x=-2*u;else if(o===ga)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},as=new L,bn=new ce,Mp=new L(0,0,0),bp=new L(1,1,1),pi=new L,zr=new L,nn=new L,jh=new ce,Qh=new wi,Bn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var _a=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sp=0,tu=new L,os=new wi,Zn=new ce,kr=new L,Zs=new L,wp=new L,Tp=new wi,eu=new L(1,0,0),nu=new L(0,1,0),iu=new L(0,0,1),su={type:"added"},Ep={type:"removed"},ls={type:"childadded",child:null},Vo={type:"childremoved",child:null},ye=class s extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Bn,n=new wi,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ht}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(eu,t)}rotateY(t){return this.rotateOnAxis(nu,t)}rotateZ(t){return this.rotateOnAxis(iu,t)}translateOnAxis(t,e){return tu.copy(t).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eu,t)}translateY(t){return this.translateOnAxis(nu,t)}translateZ(t){return this.translateOnAxis(iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Zs,kr,this.up):Zn.lookAt(kr,Zs,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Zn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(su),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ep),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(su),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ye.DEFAULT_UP=new L(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new L,Kn=new L,Wo=new L,Jn=new L,cs=new L,hs=new L,ru=new L,Xo=new L,qo=new L,$o=new L,Yo=new Se,Zo=new Se,Ko=new Se,yi=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Sn.subVectors(i,e),Kn.subVectors(n,e),Wo.subVectors(t,e);let a=Sn.dot(Sn),o=Sn.dot(Kn),l=Sn.dot(Wo),c=Kn.dot(Kn),h=Kn.dot(Wo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Yo.setScalar(0),Zo.setScalar(0),Ko.setScalar(0),Yo.fromBufferAttribute(t,e),Zo.fromBufferAttribute(t,n),Ko.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Yo,r.x),a.addScaledVector(Zo,r.y),a.addScaledVector(Ko,r.z),a}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),Kn.subVectors(t,e),Sn.cross(Kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Sn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;cs.subVectors(i,n),hs.subVectors(r,n),Xo.subVectors(t,n);let l=cs.dot(Xo),c=hs.dot(Xo);if(l<=0&&c<=0)return e.copy(n);qo.subVectors(t,i);let h=cs.dot(qo),u=hs.dot(qo);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cs,a);$o.subVectors(t,r);let f=cs.dot($o),g=hs.dot($o);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(hs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ru.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(ru,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function Jo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=fp(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jo(a,r,t+1/3),this.g=Jo(a,r,t),this.b=Jo(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Yt.fromWorkingColorSpace(qe.copy(this),t),Math.round(Oe(qe.r*255,0,255))*65536+Math.round(Oe(qe.g*255,0,255))*256+Math.round(Oe(qe.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,r=qe.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ue){Yt.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Hr);let n=Do(mi.h,Hr.h,e),i=Do(mi.s,Hr.s,e),r=Do(mi.l,Hr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new ft;ft.NAMES=ld;var Ap=0,zn=class extends Si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Mi(),this.name="",this.blending=vi,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==pl&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},te=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new L,Gr=new at,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jl&&(t.usage=this.usage),t}};var Ma=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ba=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Dt=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}},Rp=0,dn=new ce,jo=new ye,us=new L,sn=new fn,Ks=new fn,De=new L,Jt=class s extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(od(t)?ba:Ma)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(sn.min,Ks.min),sn.expandByPoint(De),De.addVectors(sn.max,Ks.max),sn.expandByPoint(De)):(sn.expandByPoint(Ks.min),sn.expandByPoint(Ks.max))}sn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(t,c),De.add(us)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;let c=new L,h=new L,u=new L,d=new at,f=new at,g=new at,x=new L,m=new L;function p(R,b,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[R].add(x),o[b].add(x),o[M].add(x),l[R].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,b=y.length;R<b;++R){let M=y[R],I=M.start,k=M.count;for(let N=I,P=I+k;N<P;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new L,_=new L,E=new L,w=new L;function A(R){E.fromBufferAttribute(i,R),w.copy(E);let b=o[R];v.copy(b),v.sub(E.multiplyScalar(E.dot(b))).normalize(),_.crossVectors(w,b);let I=_.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,I)}for(let R=0,b=y.length;R<b;++R){let M=y[R],I=M.start,k=M.count;for(let N=I,P=I+k;N<P;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},au=new ce,Oi=new hr,Vr=new ii,ou=new L,Wr=new L,Xr=new L,qr=new L,Qo=new L,$r=new L,lu=new L,Yr=new L,it=class extends ye{constructor(t=new Jt,e=new te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Qo.fromBufferAttribute(u,t),a?$r.addScaledVector(Qo,h):$r.addScaledVector(Qo.sub(e),h))}e.add($r)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Vr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Vr,ou)===null||Oi.origin.distanceToSquared(ou)>(t.far-t.near)**2))&&(au.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(au),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,E=v;_<E;_+=3){let w=o.getX(_),A=o.getX(_+1),R=o.getX(_+2);i=Zr(this,p,t,n,c,h,u,w,A,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);i=Zr(this,a,t,n,c,h,u,y,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,E=v;_<E;_+=3){let w=_,A=_+1,R=_+2;i=Zr(this,p,t,n,c,h,u,w,A,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,_=m+2;i=Zr(this,a,t,n,c,h,u,y,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Cp(s,t,e,n,i,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===bi,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:s}}function Zr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Wr),s.getVertexPosition(l,Xr),s.getVertexPosition(c,qr);let h=Cp(s,t,e,n,Wr,Xr,qr,lu);if(h){let u=new L;yi.getBarycoord(lu,Wr,Xr,qr,u),i&&(h.uv=yi.getInterpolatedAttribute(i,o,l,c,u,new at)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,u,new at)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};yi.getNormal(Wr,Xr,qr,d.normal),h.face=d,h.barycoord=u}return h}var re=class s extends Jt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2));function g(x,m,p,y,v,_,E,w,A,R,b){let M=_/A,I=E/R,k=_/2,N=E/2,P=w/2,H=A+1,U=R+1,$=0,D=0,V=new L;for(let J=0;J<U;J++){let Q=J*I-N;for(let xt=0;xt<H;xt++){let Ut=xt*M-k;V[x]=Ut*y,V[m]=Q*v,V[p]=P,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[p]=w>0?1:-1,h.push(V.x,V.y,V.z),u.push(xt/A),u.push(1-J/R),$+=1}}for(let J=0;J<R;J++)for(let Q=0;Q<A;Q++){let xt=d+Q+H*J,Ut=d+Q+H*(J+1),Y=d+(Q+1)+H*(J+1),et=d+(Q+1)+H*J;l.push(xt,Ut,et),l.push(Ut,Y,et),D+=6}o.addGroup(f,D,b),f+=D,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ze(s){let t={};for(let e=0;e<s.length;e++){let n=Cs(s[e]);for(let i in n)t[i]=n[i]}return t}function Ip(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function cd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Ei={clone:Cs,merge:Ze},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pe=class extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=Ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Sa=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new L,cu=new at,hu=new at,Ke=class extends Sa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ql*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,cu,hu),e.subVectors(hu,cu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ds=-90,fs=1,ic=class extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ke(ds,fs,t,e);i.layers=this.layers,this.add(i);let r=new Ke(ds,fs,t,e);r.layers=this.layers,this.add(r);let a=new Ke(ds,fs,t,e);a.layers=this.layers,this.add(a);let o=new Ke(ds,fs,t,e);o.layers=this.layers,this.add(o);let l=new Ke(ds,fs,t,e);l.layers=this.layers,this.add(l);let c=new Ke(ds,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wa=class extends Qe{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},sc=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new re(5,5,5),r=new pe({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:On});r.uniforms.tEquirect.value=e;let a=new it(i,r),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Un),new ic(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},tl=new L,Np=new L,Dp=new Ht,Qn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=tl.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dp.getNormalMatrix(t),i=this.coplanarPoint(tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new ii,Kr=new L,ur=class{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,r=new Qn,a=new Qn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],y=i[13],v=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+a,d+h,m+g,_+y).normalize(),n[3].setComponents(l-a,d-h,m-g,_-y).normalize(),n[4].setComponents(l-o,d-u,m-x,_-v).normalize(),e===ti)n[5].setComponents(l+o,d+u,m+x,_+v).normalize();else if(e===ga)n[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Kr.x=i.normal.x>0?t.max.x:t.min.x,Kr.y=i.normal.y>0?t.max.y:t.min.y,Kr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hd(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Up(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Te=class s extends Jt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let v=0;v<c;v++){let _=v*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let v=y+c*p,_=y+c*(p+1),E=y+1+c*(p+1),w=y+1+c*p;f.push(v,_,w),f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,om=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Um=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,W0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ig=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ag=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Fp,alphahash_pars_fragment:Op,alphamap_fragment:Bp,alphamap_pars_fragment:zp,alphatest_fragment:kp,alphatest_pars_fragment:Hp,aomap_fragment:Gp,aomap_pars_fragment:Vp,batching_pars_vertex:Wp,batching_vertex:Xp,begin_vertex:qp,beginnormal_vertex:$p,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:tm,color_fragment:em,color_pars_fragment:nm,color_pars_vertex:im,color_vertex:sm,common:rm,cube_uv_reflection_fragment:am,defaultnormal_vertex:om,displacementmap_pars_vertex:lm,displacementmap_vertex:cm,emissivemap_fragment:hm,emissivemap_pars_fragment:um,colorspace_fragment:dm,colorspace_pars_fragment:fm,envmap_fragment:pm,envmap_common_pars_fragment:mm,envmap_pars_fragment:gm,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Rm,envmap_vertex:ym,fog_vertex:vm,fog_pars_vertex:_m,fog_fragment:Mm,fog_pars_fragment:bm,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:wm,lights_lambert_fragment:Tm,lights_lambert_pars_fragment:Em,lights_pars_begin:Am,lights_toon_fragment:Cm,lights_toon_pars_fragment:Im,lights_phong_fragment:Pm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Nm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Um,lights_fragment_maps:Fm,lights_fragment_end:Om,logdepthbuf_fragment:Bm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Hm,map_fragment:Gm,map_pars_fragment:Vm,map_particle_fragment:Wm,map_particle_pars_fragment:Xm,metalnessmap_fragment:qm,metalnessmap_pars_fragment:$m,morphinstance_vertex:Ym,morphcolor_vertex:Zm,morphnormal_vertex:Km,morphtarget_pars_vertex:Jm,morphtarget_vertex:jm,normal_fragment_begin:Qm,normal_fragment_maps:t0,normal_pars_fragment:e0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:s0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:l0,opaque_fragment:c0,packing:h0,premultiplied_alpha_fragment:u0,project_vertex:d0,dithering_fragment:f0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:y0,shadowmap_vertex:v0,shadowmask_pars_fragment:_0,skinbase_vertex:M0,skinning_pars_vertex:b0,skinning_vertex:S0,skinnormal_vertex:w0,specularmap_fragment:T0,specularmap_pars_fragment:E0,tonemapping_fragment:A0,tonemapping_pars_fragment:R0,transmission_fragment:C0,transmission_pars_fragment:I0,uv_pars_fragment:P0,uv_pars_vertex:L0,uv_vertex:N0,worldpos_vertex:D0,background_vert:U0,background_frag:F0,backgroundCube_vert:O0,backgroundCube_frag:B0,cube_vert:z0,cube_frag:k0,depth_vert:H0,depth_frag:G0,distanceRGBA_vert:V0,distanceRGBA_frag:W0,equirect_vert:X0,equirect_frag:q0,linedashed_vert:$0,linedashed_frag:Y0,meshbasic_vert:Z0,meshbasic_frag:K0,meshlambert_vert:J0,meshlambert_frag:j0,meshmatcap_vert:Q0,meshmatcap_frag:tg,meshnormal_vert:eg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:ag,meshtoon_vert:og,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:ug,shadow_frag:dg,sprite_vert:fg,sprite_frag:pg},ht={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Nn={basic:{uniforms:Ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ft(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ze([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ze([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new ft(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ze([ht.points,ht.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ze([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ze([ht.common,ht.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ze([ht.sprite,ht.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ze([ht.common,ht.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ze([ht.lights,ht.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Nn.physical={uniforms:Ze([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Jr={r:0,b:0,g:0},zi=new Bn,mg=new ce;function gg(s,t,e,n,i,r,a){let o=new ft(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,_=g(y);_===null?p(o,l):_&&_.isColor&&(p(_,1),v=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===Za)?(h===void 0&&(h=new it(new re(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:Cs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zi.copy(v.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(zi)),h.material.toneMapped=Yt.getTransfer(_.colorSpace)!==se,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new it(new Te(2,2),new pe({name:"BackgroundMaterial",uniforms:Cs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Jr,cd(s)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function xg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(M,I,k,N,P){let H=!1,U=u(N,k,I);r!==U&&(r=U,c(r.object)),H=f(M,N,k,P),H&&g(M,N,k,P),P!==null&&t.update(P,s.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,_(M,I,k,N),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,k){let N=k.wireframe===!0,P=n[M.id];P===void 0&&(P={},n[M.id]=P);let H=P[I.id];H===void 0&&(H={},P[I.id]=H);let U=H[N];return U===void 0&&(U=d(l()),H[N]=U),U}function d(M){let I=[],k=[],N=[];for(let P=0;P<e;P++)I[P]=0,k[P]=0,N[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,I,k,N){let P=r.attributes,H=I.attributes,U=0,$=k.getAttributes();for(let D in $)if($[D].location>=0){let J=P[D],Q=H[D];if(Q===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),J===void 0||J.attribute!==Q||Q&&J.data!==Q.data)return!0;U++}return r.attributesNum!==U||r.index!==N}function g(M,I,k,N){let P={},H=I.attributes,U=0,$=k.getAttributes();for(let D in $)if($[D].location>=0){let J=H[D];J===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));let Q={};Q.attribute=J,J&&J.data&&(Q.data=J.data),P[D]=Q,U++}r.attributes=P,r.attributesNum=U,r.index=N}function x(){let M=r.newAttributes;for(let I=0,k=M.length;I<k;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let k=r.newAttributes,N=r.enabledAttributes,P=r.attributeDivisors;k[M]=1,N[M]===0&&(s.enableVertexAttribArray(M),N[M]=1),P[M]!==I&&(s.vertexAttribDivisor(M,I),P[M]=I)}function y(){let M=r.newAttributes,I=r.enabledAttributes;for(let k=0,N=I.length;k<N;k++)I[k]!==M[k]&&(s.disableVertexAttribArray(k),I[k]=0)}function v(M,I,k,N,P,H,U){U===!0?s.vertexAttribIPointer(M,I,k,P,H):s.vertexAttribPointer(M,I,k,N,P,H)}function _(M,I,k,N){x();let P=N.attributes,H=k.getAttributes(),U=I.defaultAttributeValues;for(let $ in H){let D=H[$];if(D.location>=0){let V=P[$];if(V===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){let J=V.normalized,Q=V.itemSize,xt=t.get(V);if(xt===void 0)continue;let Ut=xt.buffer,Y=xt.type,et=xt.bytesPerElement,ut=Y===s.INT||Y===s.UNSIGNED_INT||V.gpuType===Xc;if(V.isInterleavedBufferAttribute){let lt=V.data,It=lt.stride,Lt=V.offset;if(lt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<D.locationSize;Mt++)p(D.location+Mt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Mt=0;Mt<D.locationSize;Mt++)m(D.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let Mt=0;Mt<D.locationSize;Mt++)v(D.location+Mt,Q/D.locationSize,Y,J,It*et,(Lt+Q/D.locationSize*Mt)*et,ut)}else{if(V.isInstancedBufferAttribute){for(let lt=0;lt<D.locationSize;lt++)p(D.location+lt,V.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let lt=0;lt<D.locationSize;lt++)m(D.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let lt=0;lt<D.locationSize;lt++)v(D.location+lt,Q/D.locationSize,Y,J,Q*et,Q/D.locationSize*lt*et,ut)}}else if(U!==void 0){let J=U[$];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(D.location,J);break;case 3:s.vertexAttrib3fv(D.location,J);break;case 4:s.vertexAttrib4fv(D.location,J);break;default:s.vertexAttrib1fv(D.location,J)}}}}y()}function E(){R();for(let M in n){let I=n[M];for(let k in I){let N=I[k];for(let P in N)h(N[P].object),delete N[P];delete I[k]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let k in I){let N=I[k];for(let P in N)h(N[P].object),delete N[P];delete I[k]}delete n[M.id]}function A(M){for(let I in n){let k=n[I];if(k[M.id]===void 0)continue;let N=k[M.id];for(let P in N)h(N[P].object),delete N[P];delete k[M.id]}}function R(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function yg(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==wn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ni&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!R)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:E,maxSamples:w}}function _g(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Qn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,_=p.clippingState||null;l.value=_,_=h(g,d,v,f);for(let E=0;E!==v;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Mg(s){let t=new WeakMap;function e(a,o){return o===bl?a.mapping=Ts:o===Sl&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===bl||o===Sl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new sc(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Is=class extends Sa{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_s=4,uu=[.125,.215,.35,.446,.526,.582],Vi=20,el=new Is,du=new ft,nl=null,il=0,sl=0,rl=!1,Hi=(1+Math.sqrt(5))/2,ps=1/Hi,fu=[new L(-Hi,ps,0),new L(Hi,ps,0),new L(-ps,0,Hi),new L(ps,0,Hi),new L(0,Hi,-ps),new L(0,Hi,ps),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ta=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nl,il,sl),this._renderer.xr.enabled=rl,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:cn,format:wn,colorSpace:Os,depthBuffer:!1},i=pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(r)),this._blurMaterial=Sg(r,t,e)}return i}_compileMaterial(t){let e=new it(this._lodPlanes[0],t);this._renderer.compile(e,el)}_sceneToCubeUV(t,e,n,i){let o=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(du),h.toneMapping=_i,h.autoClear=!1;let f=new te({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new it(new re,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(du),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;jr(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ts||t.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,el)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fu[(i-r-1)%fu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new it(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);let p=[],y=0;for(let A=0;A<Vi;++A){let R=A/x,b=Math.exp(-R*R/2);p.push(b),A===0?y+=b:A<m&&(y+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let _=this._sizeLods[i],E=3*_*(i>v-_s?i-v+_s:0),w=4*(this._cubeSize-_);jr(e,E,w,3*_,2*_),l.setRenderTarget(e),l.render(u,el)}};function bg(s){let t=[],e=[],n=[],i=s,r=s-_s+1+uu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-_s?l=uu[a-s+_s-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,R=w>2?0:-1,b=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(b,x*g*w),v.set(d,m*g*w);let M=[w,w,w,w,w,w];_.set(M,p*g*w)}let E=new Jt;E.setAttribute("position",new _e(y,x)),E.setAttribute("uv",new _e(v,m)),E.setAttribute("faceIndex",new _e(_,p)),t.push(E),i>_s&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pu(s,t,e){let n=new Be(s,t,e);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Sg(s,t,e){let n=new Float32Array(Vi),i=new L(0,1,0);return new pe({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function mu(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function gu(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===bl||l===Sl,h=l===Ts||l===Es;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ta(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ta(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Tg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Eg(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let v=0,_=y.length;v<_;v+=3){let E=y[v+0],w=y[v+1],A=y[v+2];d.push(E,w,w,A,A,E)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let E=v+0,w=v+1,A=v+2;d.push(E,w,w,A,A,E)}}else return;let m=new(od(d)?ba:Ma)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ag(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Rg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Cg(s,t,e){let n=new WeakMap,i=new Se;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=o.attributes.position.count*v,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*E*4*u),A=new va(w,_,E,u);A.type=Fn,A.needsUpdate=!0;let R=v*4;for(let M=0;M<u;M++){let I=m[M],k=p[M],N=y[M],P=_*E*4*M;for(let H=0;H<I.count;H++){let U=H*R;f===!0&&(i.fromBufferAttribute(I,H),w[P+U+0]=i.x,w[P+U+1]=i.y,w[P+U+2]=i.z,w[P+U+3]=0),g===!0&&(i.fromBufferAttribute(k,H),w[P+U+4]=i.x,w[P+U+5]=i.y,w[P+U+6]=i.z,w[P+U+7]=0),x===!0&&(i.fromBufferAttribute(N,H),w[P+U+8]=i.x,w[P+U+9]=i.y,w[P+U+10]=i.z,w[P+U+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new at(_,E)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ig(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ea=class extends Qe{constructor(t,e,n,i,r,a,o,l,c,h=Ms){if(h!==Ms&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ms&&(n=qi),n===void 0&&h===Rs&&(n=As),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ud=new Qe,xu=new Ea(1,1),dd=new va,fd=new nc,pd=new wa,yu=[],vu=[],_u=new Float32Array(16),Mu=new Float32Array(9),bu=new Float32Array(4);function Bs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=yu[i];if(r===void 0&&(r=new Float32Array(i),yu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ja(s,t){let e=vu[t];e===void 0&&(e=new Int32Array(t),vu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Pg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function Ng(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function Dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function Ug(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;bu.set(n),s.uniformMatrix2fv(this.addr,!1,bu),Re(e,n)}}function Fg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Mu.set(n),s.uniformMatrix3fv(this.addr,!1,Mu),Re(e,n)}}function Og(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;_u.set(n),s.uniformMatrix4fv(this.addr,!1,_u),Re(e,n)}}function Bg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function Hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function Gg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function Wg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function Xg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function qg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xu.compareFunction=ad,r=xu):r=ud,e.setTexture2D(t||r,i)}function $g(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||fd,i)}function Yg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pd,i)}function Zg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dd,i)}function Kg(s){switch(s){case 5126:return Pg;case 35664:return Lg;case 35665:return Ng;case 35666:return Dg;case 35674:return Ug;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Hg;case 5125:return Gg;case 36294:return Vg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Jg(s,t){s.uniform1fv(this.addr,t)}function jg(s,t){let e=Bs(t,this.size,2);s.uniform2fv(this.addr,e)}function Qg(s,t){let e=Bs(t,this.size,3);s.uniform3fv(this.addr,e)}function tx(s,t){let e=Bs(t,this.size,4);s.uniform4fv(this.addr,e)}function ex(s,t){let e=Bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function nx(s,t){let e=Bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ix(s,t){let e=Bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function sx(s,t){s.uniform1iv(this.addr,t)}function rx(s,t){s.uniform2iv(this.addr,t)}function ax(s,t){s.uniform3iv(this.addr,t)}function ox(s,t){s.uniform4iv(this.addr,t)}function lx(s,t){s.uniform1uiv(this.addr,t)}function cx(s,t){s.uniform2uiv(this.addr,t)}function hx(s,t){s.uniform3uiv(this.addr,t)}function ux(s,t){s.uniform4uiv(this.addr,t)}function dx(s,t,e){let n=this.cache,i=t.length,r=Ja(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ud,r[a])}function fx(s,t,e){let n=this.cache,i=t.length,r=Ja(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||fd,r[a])}function px(s,t,e){let n=this.cache,i=t.length,r=Ja(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||pd,r[a])}function mx(s,t,e){let n=this.cache,i=t.length,r=Ja(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||dd,r[a])}function gx(s){switch(s){case 5126:return Jg;case 35664:return jg;case 35665:return Qg;case 35666:return tx;case 35674:return ex;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}var rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kg(e.type)}},ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gx(e.type)}},oc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},al=/(\w+)(\])?(\[|\.)?/g;function Su(s,t){s.seq.push(t),s.map[t.id]=t}function xx(s,t,e){let n=s.name,i=n.length;for(al.lastIndex=0;;){let r=al.exec(n),a=al.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Su(e,c===void 0?new rc(o,s,t):new ac(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new oc(o),Su(e,u)),e=u}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);xx(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function wu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var yx=37297,vx=0;function _x(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Tu=new Ht;function Mx(s){Yt._getMatrix(Tu,Yt.workingColorSpace,s);let t=`mat3( ${Tu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Ka:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Eu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+_x(s.getShaderSource(t),a)}else return i}function bx(s,t){let e=Mx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sx(s,t){let e;switch(t){case kc:e="Linear";break;case Hc:e="Reinhard";break;case Gc:e="Cineon";break;case yr:e="ACESFilmic";break;case Vc:e="AgX";break;case Wc:e="Neutral";break;case ep:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qr=new L;function wx(){Yt.getLuminanceCoefficients(Qr);let s=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function Ex(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ax(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function sr(s){return s!==""}function Au(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ru(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(s){return s.replace(Rx,Ix)}var Cx=new Map;function Ix(s,t){let e=Vt[t];if(e===void 0){let n=Cx.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lc(e)}var Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(s){return s.replace(Px,Lx)}function Lx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Iu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ya?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case Es:t="ENVMAP_TYPE_CUBE";break;case Za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ux(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function Fx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yu:t="ENVMAP_BLENDING_MULTIPLY";break;case Qf:t="ENVMAP_BLENDING_MIX";break;case tp:t="ENVMAP_BLENDING_ADD";break}return t}function Ox(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bx(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Nx(e),c=Dx(e),h=Ux(e),u=Fx(e),d=Ox(e),f=Tx(e),g=Ex(r),x=i.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Vt.tonemapping_pars_fragment:"",e.toneMapping!==_i?Sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,bx("linearToOutputTexel",e.outputColorSpace),wx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),a=lc(a),a=Au(a,e),a=Ru(a,e),o=lc(o),o=Au(o,e),o=Ru(o,e),a=Cu(a),o=Cu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+a,_=y+p+o,E=wu(i,i.VERTEX_SHADER,v),w=wu(i,i.FRAGMENT_SHADER,_);i.attachShader(x,E),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(I){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(x).trim(),N=i.getShaderInfoLog(E).trim(),P=i.getShaderInfoLog(w).trim(),H=!0,U=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,E,w);else{let $=Eu(i,E,"vertex"),D=Eu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+$+`
`+D)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||P==="")&&(U=!1);U&&(I.diagnostics={runnable:H,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:P,prefix:p}})}i.deleteShader(E),i.deleteShader(w),R=new Ss(i,x),b=Ax(i,x)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,yx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=w,this}var zx=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hc(t),e.set(t,n)),n}},hc=class{constructor(t){this.id=zx++,this.code=t,this.usedTimes=0}};function kx(s,t,e,n,i,r,a){let o=new _a,l=new cc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,k,N){let P=k.fog,H=N.geometry,U=b.isMeshStandardMaterial?k.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||U),D=$&&$.mapping===Za?$.image.height:null,V=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Q=J!==void 0?J.length:0,xt=0;H.morphAttributes.position!==void 0&&(xt=1),H.morphAttributes.normal!==void 0&&(xt=2),H.morphAttributes.color!==void 0&&(xt=3);let Ut,Y,et,ut;if(V){let ae=Nn[V];Ut=ae.vertexShader,Y=ae.fragmentShader}else Ut=b.vertexShader,Y=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),ut=l.getFragmentShaderID(b);let lt=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),Lt=N.isInstancedMesh===!0,Mt=N.isBatchedMesh===!0,he=!!b.map,Wt=!!b.matcap,me=!!$,O=!!b.aoMap,Ve=!!b.lightMap,Xt=!!b.bumpMap,Ft=!!b.normalMap,Et=!!b.displacementMap,jt=!!b.emissiveMap,Ct=!!b.metalnessMap,C=!!b.roughnessMap,S=b.anisotropy>0,G=b.clearcoat>0,K=b.dispersion>0,nt=b.iridescence>0,j=b.sheen>0,bt=b.transmission>0,ot=S&&!!b.anisotropyMap,ct=G&&!!b.clearcoatMap,$t=G&&!!b.clearcoatNormalMap,st=G&&!!b.clearcoatRoughnessMap,vt=nt&&!!b.iridescenceMap,Nt=nt&&!!b.iridescenceThicknessMap,Ot=j&&!!b.sheenColorMap,_t=j&&!!b.sheenRoughnessMap,Kt=!!b.specularMap,Gt=!!b.specularColorMap,ue=!!b.specularIntensityMap,F=bt&&!!b.transmissionMap,dt=bt&&!!b.thicknessMap,Z=!!b.gradientMap,tt=!!b.alphaMap,gt=b.alphaTest>0,pt=!!b.alphaHash,zt=!!b.extensions,be=_i;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(be=s.toneMapping);let We={shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:Ut,fragmentShader:Y,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:ut,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&N._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&N.instanceColor!==null,instancingMorph:Lt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Os,alphaToCoverage:!!b.alphaToCoverage,map:he,matcap:Wt,envMap:me,envMapMode:me&&$.mapping,envMapCubeUVHeight:D,aoMap:O,lightMap:Ve,bumpMap:Xt,normalMap:Ft,displacementMap:d&&Et,emissiveMap:jt,normalMapObjectSpace:Ft&&b.normalMapType===rp,normalMapTangentSpace:Ft&&b.normalMapType===rd,metalnessMap:Ct,roughnessMap:C,anisotropy:S,anisotropyMap:ot,clearcoat:G,clearcoatMap:ct,clearcoatNormalMap:$t,clearcoatRoughnessMap:st,dispersion:K,iridescence:nt,iridescenceMap:vt,iridescenceThicknessMap:Nt,sheen:j,sheenColorMap:Ot,sheenRoughnessMap:_t,specularMap:Kt,specularColorMap:Gt,specularIntensityMap:ue,transmission:bt,transmissionMap:F,thicknessMap:dt,gradientMap:Z,opaque:b.transparent===!1&&b.blending===vi&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:pt,combine:b.combine,mapUv:he&&x(b.map.channel),aoMapUv:O&&x(b.aoMap.channel),lightMapUv:Ve&&x(b.lightMap.channel),bumpMapUv:Xt&&x(b.bumpMap.channel),normalMapUv:Ft&&x(b.normalMap.channel),displacementMapUv:Et&&x(b.displacementMap.channel),emissiveMapUv:jt&&x(b.emissiveMap.channel),metalnessMapUv:Ct&&x(b.metalnessMap.channel),roughnessMapUv:C&&x(b.roughnessMap.channel),anisotropyMapUv:ot&&x(b.anisotropyMap.channel),clearcoatMapUv:ct&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(b.sheenRoughnessMap.channel),specularMapUv:Kt&&x(b.specularMap.channel),specularColorMapUv:Gt&&x(b.specularColorMap.channel),specularIntensityMapUv:ue&&x(b.specularIntensityMap.channel),transmissionMapUv:F&&x(b.transmissionMap.channel),thicknessMapUv:dt&&x(b.thicknessMap.channel),alphaMapUv:tt&&x(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ft||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(he||tt),fog:!!P,useFog:b.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:he&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===se,decodeVideoTextureEmissive:jt&&b.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(b.emissiveMap.colorSpace)===se,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fe,flipSided:b.side===$e,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(y(M,b),v(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){let M=g[b.type],I;if(M){let k=Nn[M];I=Ei.clone(k.uniforms)}else I=b.uniforms;return I}function E(b,M){let I;for(let k=0,N=h.length;k<N;k++){let P=h[k];if(P.cacheKey===M){I=P,++I.usedTimes;break}}return I===void 0&&(I=new Bx(s,M,b,r),h.push(I)),I}function w(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:R}}function Hx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Gx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Pu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Lu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Gx),n.length>1&&n.sort(d||Pu),i.length>1&&i.sort(d||Pu)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Vx(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Lu,s.set(n,[a])):i>=r.length?(a=new Lu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Wx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ft};break;case"SpotLight":e={position:new L,direction:new L,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Xx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var qx=0;function $x(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Yx(s){let t=new Wx,e=Xx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new ce,a=new ce;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,v=0,_=0,E=0,w=0,A=0;c.sort($x);for(let b=0,M=c.length;b<M;b++){let I=c[b],k=I.color,N=I.intensity,P=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*N,u+=k.g*N,d+=k.b*N;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],N);A++}else if(I.isDirectionalLight){let U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,D=e.get(I);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,n.directionalShadow[f]=D,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=U,f++}else if(I.isSpotLight){let U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(k).multiplyScalar(N),U.distance=P,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[x]=U;let $=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,$.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[x]=$.matrix,I.castShadow){let D=e.get(I);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,n.spotShadow[x]=D,n.spotShadowMap[x]=H,_++}x++}else if(I.isRectAreaLight){let U=t.get(I);U.color.copy(k).multiplyScalar(N),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=U,m++}else if(I.isPointLight){let U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){let $=I.shadow,D=e.get(I);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=U,g++}else if(I.isHemisphereLight){let U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(N),U.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[p]=U,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==E||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=E,R.numLightProbes=A,n.version=qx++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Nu(s){let t=new Yx(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Zx(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Nu(s),t.set(i,[o])):r>=a.length?(o=new Nu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var uc=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dc=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jx(s,t,e){let n=new ur,i=new at,r=new at,a=new Se,o=new uc({depthPacking:sp}),l=new dc,c={},h=e.maxTextureSize,u={[bi]:$e,[$e]:bi,[Fe]:Fe},d=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Kx,fragmentShader:Jx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Jt;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let p=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),k=s.state;k.setBlending(On),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=p!==jn&&this.type===jn,P=p===jn&&this.type!==jn;for(let H=0,U=w.length;H<U;H++){let $=w[H],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);let V=D.getFrameExtents();if(i.multiply(V),r.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,D.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,D.mapSize.y=r.y)),D.map===null||N===!0||P===!0){let Q=this.type!==jn?{minFilter:rn,magFilter:rn}:{};D.map!==null&&D.map.dispose(),D.map=new Be(i.x,i.y,Q),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();let J=D.getViewportCount();for(let Q=0;Q<J;Q++){let xt=D.getViewport(Q);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),k.viewport(a),D.updateMatrices($,Q),n=D.getFrustum(),_(A,R,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===jn&&y(D,R),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,M,I)};function y(w,A){let R=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Be(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,R,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,R,f,x,null)}function v(w,A,R,b){let M=null,I=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=R.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=M.uuid,N=A.uuid,P=c[k];P===void 0&&(P={},c[k]=P);let H=P[N];H===void 0&&(H=M.clone(),P[N]=H,A.addEventListener("dispose",E)),M=H}if(M.visible=A.visible,M.wireframe=A.wireframe,b===jn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=s.properties.get(M);k.light=R}return M}function _(w,A,R,b,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let N=t.update(w),P=w.material;if(Array.isArray(P)){let H=N.groups;for(let U=0,$=H.length;U<$;U++){let D=H[U],V=P[D.materialIndex];if(V&&V.visible){let J=v(w,V,b,M);w.onBeforeShadow(s,w,A,R,N,J,D),s.renderBufferDirect(R,null,N,J,w,D),w.onAfterShadow(s,w,A,R,N,J,D)}}}else if(P.visible){let H=v(w,P,b,M);w.onBeforeShadow(s,w,A,R,N,H,null),s.renderBufferDirect(R,null,N,H,w,null),w.onAfterShadow(s,w,A,R,N,H,null)}}let k=w.children;for(let N=0,P=k.length;N<P;N++)_(k[N],A,R,b,M)}function E(w){w.target.removeEventListener("dispose",E);for(let R in c){let b=c[R],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Qx={[ml]:gl,[xl]:_l,[yl]:Ml,[ws]:vl,[gl]:ml,[_l]:xl,[Ml]:yl,[vl]:ws};function ty(s,t){function e(){let F=!1,dt=new Se,Z=null,tt=new Se(0,0,0,0);return{setMask:function(gt){Z!==gt&&!F&&(s.colorMask(gt,gt,gt,gt),Z=gt)},setLocked:function(gt){F=gt},setClear:function(gt,pt,zt,be,We){We===!0&&(gt*=be,pt*=be,zt*=be),dt.set(gt,pt,zt,be),tt.equals(dt)===!1&&(s.clearColor(gt,pt,zt,be),tt.copy(dt))},reset:function(){F=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let F=!1,dt=!1,Z=null,tt=null,gt=null;return{setReversed:function(pt){if(dt!==pt){let zt=t.get("EXT_clip_control");dt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let be=gt;gt=null,this.setClear(be)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?lt(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(pt){Z!==pt&&!F&&(s.depthMask(pt),Z=pt)},setFunc:function(pt){if(dt&&(pt=Qx[pt]),tt!==pt){switch(pt){case ml:s.depthFunc(s.NEVER);break;case gl:s.depthFunc(s.ALWAYS);break;case xl:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case yl:s.depthFunc(s.EQUAL);break;case vl:s.depthFunc(s.GEQUAL);break;case _l:s.depthFunc(s.GREATER);break;case Ml:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=pt}},setLocked:function(pt){F=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),s.clearDepth(pt),gt=pt)},reset:function(){F=!1,Z=null,tt=null,gt=null,dt=!1}}}function i(){let F=!1,dt=null,Z=null,tt=null,gt=null,pt=null,zt=null,be=null,We=null;return{setTest:function(ae){F||(ae?lt(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(ae){dt!==ae&&!F&&(s.stencilMask(ae),dt=ae)},setFunc:function(ae,vn,Xn){(Z!==ae||tt!==vn||gt!==Xn)&&(s.stencilFunc(ae,vn,Xn),Z=ae,tt=vn,gt=Xn)},setOp:function(ae,vn,Xn){(pt!==ae||zt!==vn||be!==Xn)&&(s.stencilOp(ae,vn,Xn),pt=ae,zt=vn,be=Xn)},setLocked:function(ae){F=ae},setClear:function(ae){We!==ae&&(s.clearStencil(ae),We=ae)},reset:function(){F=!1,dt=null,Z=null,tt=null,gt=null,pt=null,zt=null,be=null,We=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,E=null,w=null,A=new ft(0,0,0),R=0,b=!1,M=null,I=null,k=null,N=null,P=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,$=0,D=s.getParameter(s.VERSION);D.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(D)[1]),U=$>=1):D.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),U=$>=2);let V=null,J={},Q=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),Ut=new Se().fromArray(Q),Y=new Se().fromArray(xt);function et(F,dt,Z,tt){let gt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(F,pt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<Z;zt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(dt+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return pt}let ut={};ut[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(s.DEPTH_TEST),a.setFunc(ws),Xt(!1),Ft(Oh),lt(s.CULL_FACE),O(On);function lt(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function It(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Lt(F,dt){return u[F]!==dt?(s.bindFramebuffer(F,dt),u[F]=dt,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Mt(F,dt){let Z=f,tt=!1;if(F){Z=d.get(dt),Z===void 0&&(Z=[],d.set(dt,Z));let gt=F.textures;if(Z.length!==gt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,zt=gt.length;pt<zt;pt++)Z[pt]=s.COLOR_ATTACHMENT0+pt;Z.length=gt.length,tt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,tt=!0);tt&&s.drawBuffers(Z)}function he(F){return g!==F?(s.useProgram(F),g=F,!0):!1}let Wt={[Gi]:s.FUNC_ADD,[Ff]:s.FUNC_SUBTRACT,[Of]:s.FUNC_REVERSE_SUBTRACT};Wt[Bf]=s.MIN,Wt[zf]=s.MAX;let me={[kf]:s.ZERO,[Hf]:s.ONE,[Gf]:s.SRC_COLOR,[fl]:s.SRC_ALPHA,[Yf]:s.SRC_ALPHA_SATURATE,[qf]:s.DST_COLOR,[Wf]:s.DST_ALPHA,[Vf]:s.ONE_MINUS_SRC_COLOR,[pl]:s.ONE_MINUS_SRC_ALPHA,[$f]:s.ONE_MINUS_DST_COLOR,[Xf]:s.ONE_MINUS_DST_ALPHA,[Zf]:s.CONSTANT_COLOR,[Kf]:s.ONE_MINUS_CONSTANT_COLOR,[Jf]:s.CONSTANT_ALPHA,[jf]:s.ONE_MINUS_CONSTANT_ALPHA};function O(F,dt,Z,tt,gt,pt,zt,be,We,ae){if(F===On){x===!0&&(It(s.BLEND),x=!1);return}if(x===!1&&(lt(s.BLEND),x=!0),F!==Uf){if(F!==m||ae!==b){if((p!==Gi||_!==Gi)&&(s.blendEquation(s.FUNC_ADD),p=Gi,_=Gi),ae)switch(F){case vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case an:s.blendFunc(s.ONE,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case an:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,v=null,E=null,w=null,A.set(0,0,0),R=0,m=F,b=ae}return}gt=gt||dt,pt=pt||Z,zt=zt||tt,(dt!==p||gt!==_)&&(s.blendEquationSeparate(Wt[dt],Wt[gt]),p=dt,_=gt),(Z!==y||tt!==v||pt!==E||zt!==w)&&(s.blendFuncSeparate(me[Z],me[tt],me[pt],me[zt]),y=Z,v=tt,E=pt,w=zt),(be.equals(A)===!1||We!==R)&&(s.blendColor(be.r,be.g,be.b,We),A.copy(be),R=We),m=F,b=!1}function Ve(F,dt){F.side===Fe?It(s.CULL_FACE):lt(s.CULL_FACE);let Z=F.side===$e;dt&&(Z=!Z),Xt(Z),F.blending===vi&&F.transparent===!1?O(On):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let tt=F.stencilWrite;o.setTest(tt),tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),jt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(F){M!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),M=F)}function Ft(F){F!==Nf?(lt(s.CULL_FACE),F!==I&&(F===Oh?s.cullFace(s.BACK):F===Df?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),I=F}function Et(F){F!==k&&(U&&s.lineWidth(F),k=F)}function jt(F,dt,Z){F?(lt(s.POLYGON_OFFSET_FILL),(N!==dt||P!==Z)&&(s.polygonOffset(dt,Z),N=dt,P=Z)):It(s.POLYGON_OFFSET_FILL)}function Ct(F){F?lt(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function C(F){F===void 0&&(F=s.TEXTURE0+H-1),V!==F&&(s.activeTexture(F),V=F)}function S(F,dt,Z){Z===void 0&&(V===null?Z=s.TEXTURE0+H-1:Z=V);let tt=J[Z];tt===void 0&&(tt={type:void 0,texture:void 0},J[Z]=tt),(tt.type!==F||tt.texture!==dt)&&(V!==Z&&(s.activeTexture(Z),V=Z),s.bindTexture(F,dt||ut[F]),tt.type=F,tt.texture=dt)}function G(){let F=J[V];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(F){Ut.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Ut.copy(F))}function _t(F){Y.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function Kt(F,dt){let Z=c.get(dt);Z===void 0&&(Z=new WeakMap,c.set(dt,Z));let tt=Z.get(F);tt===void 0&&(tt=s.getUniformBlockIndex(dt,F.name),Z.set(F,tt))}function Gt(F,dt){let tt=c.get(dt).get(F);l.get(dt)!==tt&&(s.uniformBlockBinding(dt,tt,F.__bindingPointIndex),l.set(dt,tt))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},V=null,J={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,E=null,w=null,A=new ft(0,0,0),R=0,b=!1,M=null,I=null,k=null,N=null,P=null,Ut.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:It,bindFramebuffer:Lt,drawBuffers:Mt,useProgram:he,setBlending:O,setMaterial:Ve,setFlipSided:Xt,setCullFace:Ft,setLineWidth:Et,setPolygonOffset:jt,setScissorTest:Ct,activeTexture:C,bindTexture:S,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:vt,texImage3D:Nt,updateUBOMapping:Kt,uniformBlockBinding:Gt,texStorage2D:$t,texStorage3D:st,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ct,scissor:Ot,viewport:_t,reset:ue}}function Du(s,t,e,n){let i=ey(n);switch(e){case Qu:return s*t;case ed:return s*t;case nd:return s*t*2;case Yc:return s*t/i.components*i.byteLength;case Zc:return s*t/i.components*i.byteLength;case id:return s*t*2/i.components*i.byteLength;case Kc:return s*t*2/i.components*i.byteLength;case td:return s*t*3/i.components*i.byteLength;case wn:return s*t*4/i.components*i.byteLength;case Jc:return s*t*4/i.components*i.byteLength;case ha:case ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case da:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case El:case Rl:return Math.max(s,16)*Math.max(t,8)/4;case Tl:case Al:return Math.max(s,8)*Math.max(t,8)/2;case Cl:case Il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case pa:case ql:case $l:return Math.ceil(s/4)*Math.ceil(t/4)*16;case sd:case Yl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Zl:case Kl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ey(s){switch(s){case ni:case Ku:return{byteLength:1,components:1};case cr:case Ju:case cn:return{byteLength:2,components:1};case qc:case $c:return{byteLength:2,components:4};case qi:case Xc:case Fn:return{byteLength:4,components:1};case ju:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ny(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):xa("canvas")}function x(C,S,G){let K=1,nt=Ct(C);if((nt.width>G||nt.height>G)&&(K=G/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let j=Math.floor(K*nt.width),bt=Math.floor(K*nt.height);u===void 0&&(u=g(j,bt));let ot=S?g(j,bt):u;return ot.width=j,ot.height=bt,ot.getContext("2d").drawImage(C,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+j+"x"+bt+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,S,G,K,nt=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=S;if(S===s.RED&&(G===s.FLOAT&&(j=s.R32F),G===s.HALF_FLOAT&&(j=s.R16F),G===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.R8UI),G===s.UNSIGNED_SHORT&&(j=s.R16UI),G===s.UNSIGNED_INT&&(j=s.R32UI),G===s.BYTE&&(j=s.R8I),G===s.SHORT&&(j=s.R16I),G===s.INT&&(j=s.R32I)),S===s.RG&&(G===s.FLOAT&&(j=s.RG32F),G===s.HALF_FLOAT&&(j=s.RG16F),G===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RG8UI),G===s.UNSIGNED_SHORT&&(j=s.RG16UI),G===s.UNSIGNED_INT&&(j=s.RG32UI),G===s.BYTE&&(j=s.RG8I),G===s.SHORT&&(j=s.RG16I),G===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGB8UI),G===s.UNSIGNED_SHORT&&(j=s.RGB16UI),G===s.UNSIGNED_INT&&(j=s.RGB32UI),G===s.BYTE&&(j=s.RGB8I),G===s.SHORT&&(j=s.RGB16I),G===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),G===s.UNSIGNED_INT&&(j=s.RGBA32UI),G===s.BYTE&&(j=s.RGBA8I),G===s.SHORT&&(j=s.RGBA16I),G===s.INT&&(j=s.RGBA32I)),S===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){let bt=nt?Ka:Yt.getTransfer(K);G===s.FLOAT&&(j=s.RGBA32F),G===s.HALF_FLOAT&&(j=s.RGBA16F),G===s.UNSIGNED_BYTE&&(j=bt===se?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(C,S){let G;return C?S===null||S===qi||S===As?G=s.DEPTH24_STENCIL8:S===Fn?G=s.DEPTH32F_STENCIL8:S===cr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===As?G=s.DEPTH_COMPONENT24:S===Fn?G=s.DEPTH_COMPONENT32F:S===cr&&(G=s.DEPTH_COMPONENT16),G}function E(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){let S=C.target;S.removeEventListener("dispose",w),R(S),S.isVideoTexture&&h.delete(S)}function A(C){let S=C.target;S.removeEventListener("dispose",A),M(S)}function R(C){let S=n.get(C);if(S.__webglInit===void 0)return;let G=C.source,K=d.get(G);if(K){let nt=K[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(C),Object.keys(K).length===0&&d.delete(G)}n.remove(C)}function b(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let G=C.source,K=d.get(G);delete K[S.__cacheKey],a.memory.textures--}function M(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let nt=0;nt<S.__webglFramebuffer[K].length;nt++)s.deleteFramebuffer(S.__webglFramebuffer[K][nt]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=C.textures;for(let K=0,nt=G.length;K<nt;K++){let j=n.get(G[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(G[K])}n.remove(C)}let I=0;function k(){I=0}function N(){let C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function P(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function H(C,S){let G=n.get(C);if(C.isVideoTexture&&Et(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){let K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,C,S);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function U(C,S){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function $(C,S){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,S);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function D(C,S){let G=n.get(C);if(C.version>0&&G.__version!==C.version){et(G,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}let V={[lr]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[wl]:s.MIRRORED_REPEAT},J={[rn]:s.NEAREST,[np]:s.NEAREST_MIPMAP_NEAREST,[Nr]:s.NEAREST_MIPMAP_LINEAR,[Un]:s.LINEAR,[Po]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},Q={[ap]:s.NEVER,[dp]:s.ALWAYS,[op]:s.LESS,[ad]:s.LEQUAL,[lp]:s.EQUAL,[up]:s.GEQUAL,[cp]:s.GREATER,[hp]:s.NOTEQUAL};function xt(C,S){if(S.type===Fn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===Po||S.magFilter===Nr||S.magFilter===Xi||S.minFilter===Un||S.minFilter===Po||S.minFilter===Nr||S.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,V[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,V[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,V[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,J[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==Nr&&S.minFilter!==Xi||S.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ut(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",w));let K=S.source,nt=d.get(K);nt===void 0&&(nt={},d.set(K,nt));let j=P(S);if(j!==C.__cacheKey){nt[j]===void 0&&(nt[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),nt[j].usedTimes++;let bt=nt[C.__cacheKey];bt!==void 0&&(nt[C.__cacheKey].usedTimes--,bt.usedTimes===0&&b(S)),C.__cacheKey=j,C.__webglTexture=nt[j].texture}return G}function Y(C,S,G){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);let nt=Ut(C,S),j=S.source;e.bindTexture(K,C.__webglTexture,s.TEXTURE0+G);let bt=n.get(j);if(j.version!==bt.__version||nt===!0){e.activeTexture(s.TEXTURE0+G);let ot=Yt.getPrimaries(Yt.workingColorSpace),ct=S.colorSpace===xi?null:Yt.getPrimaries(S.colorSpace),$t=S.colorSpace===xi||ot===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let st=x(S.image,!1,i.maxTextureSize);st=jt(S,st);let vt=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type),Ot=v(S.internalFormat,vt,Nt,S.colorSpace,S.isVideoTexture);xt(K,S);let _t,Kt=S.mipmaps,Gt=S.isVideoTexture!==!0,ue=bt.__version===void 0||nt===!0,F=j.dataReady,dt=E(S,st);if(S.isDepthTexture)Ot=_(S.format===Rs,S.type),ue&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,Ot,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ot,st.width,st.height,0,vt,Nt,null));else if(S.isDataTexture)if(Kt.length>0){Gt&&ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,Kt[0].width,Kt[0].height);for(let Z=0,tt=Kt.length;Z<tt;Z++)_t=Kt[Z],Gt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,_t.width,_t.height,vt,Nt,_t.data):e.texImage2D(s.TEXTURE_2D,Z,Ot,_t.width,_t.height,0,vt,Nt,_t.data);S.generateMipmaps=!1}else Gt?(ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,st.width,st.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,vt,Nt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,st.width,st.height,0,vt,Nt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Gt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,Kt[0].width,Kt[0].height,st.depth);for(let Z=0,tt=Kt.length;Z<tt;Z++)if(_t=Kt[Z],S.format!==wn)if(vt!==null)if(Gt){if(F)if(S.layerUpdates.size>0){let gt=Du(_t.width,_t.height,S.format,S.type);for(let pt of S.layerUpdates){let zt=_t.data.subarray(pt*gt/_t.data.BYTES_PER_ELEMENT,(pt+1)*gt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,pt,_t.width,_t.height,1,vt,zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,_t.width,_t.height,st.depth,vt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Ot,_t.width,_t.height,st.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,_t.width,_t.height,st.depth,vt,Nt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Ot,_t.width,_t.height,st.depth,0,vt,Nt,_t.data)}else{Gt&&ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,Kt[0].width,Kt[0].height);for(let Z=0,tt=Kt.length;Z<tt;Z++)_t=Kt[Z],S.format!==wn?vt!==null?Gt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,_t.width,_t.height,vt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Ot,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,_t.width,_t.height,vt,Nt,_t.data):e.texImage2D(s.TEXTURE_2D,Z,Ot,_t.width,_t.height,0,vt,Nt,_t.data)}else if(S.isDataArrayTexture)if(Gt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,st.width,st.height,st.depth),F)if(S.layerUpdates.size>0){let Z=Du(st.width,st.height,S.format,S.type);for(let tt of S.layerUpdates){let gt=st.data.subarray(tt*Z/st.data.BYTES_PER_ELEMENT,(tt+1)*Z/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,vt,Nt,gt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Nt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,st.width,st.height,st.depth,0,vt,Nt,st.data);else if(S.isData3DTexture)Gt?(ue&&e.texStorage3D(s.TEXTURE_3D,dt,Ot,st.width,st.height,st.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Nt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,st.width,st.height,st.depth,0,vt,Nt,st.data);else if(S.isFramebufferTexture){if(ue)if(Gt)e.texStorage2D(s.TEXTURE_2D,dt,Ot,st.width,st.height);else{let Z=st.width,tt=st.height;for(let gt=0;gt<dt;gt++)e.texImage2D(s.TEXTURE_2D,gt,Ot,Z,tt,0,vt,Nt,null),Z>>=1,tt>>=1}}else if(Kt.length>0){if(Gt&&ue){let Z=Ct(Kt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Ot,Z.width,Z.height)}for(let Z=0,tt=Kt.length;Z<tt;Z++)_t=Kt[Z],Gt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,vt,Nt,_t):e.texImage2D(s.TEXTURE_2D,Z,Ot,vt,Nt,_t);S.generateMipmaps=!1}else if(Gt){if(ue){let Z=Ct(st);e.texStorage2D(s.TEXTURE_2D,dt,Ot,Z.width,Z.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Nt,st)}else e.texImage2D(s.TEXTURE_2D,0,Ot,vt,Nt,st);m(S)&&p(K),bt.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function et(C,S,G){if(S.image.length!==6)return;let K=Ut(C,S),nt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);let j=n.get(nt);if(nt.version!==j.__version||K===!0){e.activeTexture(s.TEXTURE0+G);let bt=Yt.getPrimaries(Yt.workingColorSpace),ot=S.colorSpace===xi?null:Yt.getPrimaries(S.colorSpace),ct=S.colorSpace===xi||bt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let $t=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let tt=0;tt<6;tt++)!$t&&!st?vt[tt]=x(S.image[tt],!0,i.maxCubemapSize):vt[tt]=st?S.image[tt].image:S.image[tt],vt[tt]=jt(S,vt[tt]);let Nt=vt[0],Ot=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Kt=v(S.internalFormat,Ot,_t,S.colorSpace),Gt=S.isVideoTexture!==!0,ue=j.__version===void 0||K===!0,F=nt.dataReady,dt=E(S,Nt);xt(s.TEXTURE_CUBE_MAP,S);let Z;if($t){Gt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Kt,Nt.width,Nt.height);for(let tt=0;tt<6;tt++){Z=vt[tt].mipmaps;for(let gt=0;gt<Z.length;gt++){let pt=Z[gt];S.format!==wn?Ot!==null?Gt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,pt.width,pt.height,Ot,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,Kt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,pt.width,pt.height,Ot,_t,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,Kt,pt.width,pt.height,0,Ot,_t,pt.data)}}}else{if(Z=S.mipmaps,Gt&&ue){Z.length>0&&dt++;let tt=Ct(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Gt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,vt[tt].width,vt[tt].height,Ot,_t,vt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,vt[tt].width,vt[tt].height,0,Ot,_t,vt[tt].data);for(let gt=0;gt<Z.length;gt++){let zt=Z[gt].image[tt].image;Gt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,zt.width,zt.height,Ot,_t,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,Kt,zt.width,zt.height,0,Ot,_t,zt.data)}}else{Gt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ot,_t,vt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,Ot,_t,vt[tt]);for(let gt=0;gt<Z.length;gt++){let pt=Z[gt];Gt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Ot,_t,pt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,Kt,Ot,_t,pt.image[tt])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=nt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ut(C,S,G,K,nt,j){let bt=r.convert(G.format,G.colorSpace),ot=r.convert(G.type),ct=v(G.internalFormat,bt,ot,G.colorSpace),$t=n.get(S),st=n.get(G);if(st.__renderTarget=S,!$t.__hasExternalTextures){let vt=Math.max(1,S.width>>j),Nt=Math.max(1,S.height>>j);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,j,ct,vt,Nt,S.depth,0,bt,ot,null):e.texImage2D(nt,j,ct,vt,Nt,0,bt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Ft(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,nt,st.__webglTexture,0,Xt(S)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,nt,st.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(C,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let K=S.depthTexture,nt=K&&K.isDepthTexture?K.type:null,j=_(S.stencilBuffer,nt),bt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Xt(S);Ft(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,j,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,C)}else{let K=S.textures;for(let nt=0;nt<K.length;nt++){let j=K[nt],bt=r.convert(j.format,j.colorSpace),ot=r.convert(j.type),ct=v(j.internalFormat,bt,ot,j.colorSpace),$t=Xt(S);G&&Ft(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,ct,S.width,S.height):Ft(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,ct,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ct,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let nt=K.__webglTexture,j=Xt(S);if(S.depthTexture.format===Ms)Ft(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(S.depthTexture.format===Rs)Ft(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Lt(C){let S=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");It(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),lt(S.__webglDepthbuffer[K],C,!1);else{let nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),lt(S.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(C,S,G){let K=n.get(C);S!==void 0&&ut(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Lt(C)}function he(C){let S=C.texture,G=n.get(C),K=n.get(S);C.addEventListener("dispose",A);let nt=C.textures,j=C.isWebGLCubeRenderTarget===!0,bt=nt.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ot]=[];for(let ct=0;ct<S.mipmaps.length;ct++)G.__webglFramebuffer[ot][ct]=s.createFramebuffer()}else G.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)G.__webglFramebuffer[ot]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ot=0,ct=nt.length;ot<ct;ot++){let $t=n.get(nt[ot]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ft(C)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ot=0;ot<nt.length;ot++){let ct=nt[ot];G.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ot]);let $t=r.convert(ct.format,ct.colorSpace),st=r.convert(ct.type),vt=v(ct.internalFormat,$t,st,ct.colorSpace,C.isXRRenderTarget===!0),Nt=Xt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,vt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,G.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),xt(s.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let ct=0;ct<S.mipmaps.length;ct++)ut(G.__webglFramebuffer[ot][ct],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ct);else ut(G.__webglFramebuffer[ot],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ot=0,ct=nt.length;ot<ct;ot++){let $t=nt[ot],st=n.get($t);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),xt(s.TEXTURE_2D,$t),ut(G.__webglFramebuffer,C,$t,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),m($t)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),xt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let ct=0;ct<S.mipmaps.length;ct++)ut(G.__webglFramebuffer[ct],C,S,s.COLOR_ATTACHMENT0,ot,ct);else ut(G.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ot,0);m(S)&&p(ot),e.unbindTexture()}C.depthBuffer&&Lt(C)}function Wt(C){let S=C.textures;for(let G=0,K=S.length;G<K;G++){let nt=S[G];if(m(nt)){let j=y(C),bt=n.get(nt).__webglTexture;e.bindTexture(j,bt),p(j),e.unbindTexture()}}}let me=[],O=[];function Ve(C){if(C.samples>0){if(Ft(C)===!1){let S=C.textures,G=C.width,K=C.height,nt=s.COLOR_BUFFER_BIT,j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(C),ot=S.length>1;if(ot)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[ct]);let $t=n.get(S[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,G,K,0,0,G,K,nt,s.NEAREST),l===!0&&(me.length=0,O.length=0,me.push(s.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.resolveDepthBuffer===!1&&(me.push(j),O.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,bt.__webglColorRenderbuffer[ct]);let $t=n.get(S[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Xt(C){return Math.min(i.maxSamples,C.samples)}function Ft(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Et(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function jt(C,S){let G=C.colorSpace,K=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Os&&G!==xi&&(Yt.getTransfer(G)===se?(K!==wn||nt!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ct(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=U,this.setTexture3D=$,this.setTextureCube=D,this.rebindTextures=Mt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ft}function iy(s,t){function e(n,i=xi){let r,a=Yt.getTransfer(i);if(n===ni)return s.UNSIGNED_BYTE;if(n===qc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ju)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ku)return s.BYTE;if(n===Ju)return s.SHORT;if(n===cr)return s.UNSIGNED_SHORT;if(n===Xc)return s.INT;if(n===qi)return s.UNSIGNED_INT;if(n===Fn)return s.FLOAT;if(n===cn)return s.HALF_FLOAT;if(n===Qu)return s.ALPHA;if(n===td)return s.RGB;if(n===wn)return s.RGBA;if(n===ed)return s.LUMINANCE;if(n===nd)return s.LUMINANCE_ALPHA;if(n===Ms)return s.DEPTH_COMPONENT;if(n===Rs)return s.DEPTH_STENCIL;if(n===Yc)return s.RED;if(n===Zc)return s.RED_INTEGER;if(n===id)return s.RG;if(n===Kc)return s.RG_INTEGER;if(n===Jc)return s.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===fa)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===El||n===Al||n===Rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Il||n===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Il)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ll||n===Nl||n===Dl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ll)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===ql||n===$l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pa)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sd||n===Yl||n===Zl||n===Kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var fc=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fe=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},sy={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ay=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Qe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pe({vertexShader:ry,fragmentShader:ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Te(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mc=class extends Si{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new pc,m=e.getContextAttributes(),p=null,y=null,v=[],_=[],E=new at,w=null,A=new Ke;A.viewport=new Se;let R=new Ke;R.viewport=new Se;let b=[A,R],M=new fc,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=v[Y];return et===void 0&&(et=new rr,v[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=v[Y];return et===void 0&&(et=new rr,v[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=v[Y];return et===void 0&&(et=new rr,v[Y]=et),et.getHandSpace()};function N(Y){let et=_.indexOf(Y.inputSource);if(et===-1)return;let ut=v[et];ut!==void 0&&(ut.update(Y.inputSource,Y.frame,c||a),ut.dispatchEvent({type:Y.type,data:Y.inputSource}))}function P(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",H);for(let Y=0;Y<v.length;Y++){let et=_[Y];et!==null&&(_[Y]=null,v[Y].disconnect(et))}I=null,k=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",P),i.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Be(f.framebufferWidth,f.framebufferHeight,{format:wn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,ut=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Rs:Ms,ut=m.stencil?As:qi);let It={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(It),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Be(d.textureWidth,d.textureHeight,{format:wn,type:ni,depthTexture:new Ea(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(Y){for(let et=0;et<Y.removed.length;et++){let ut=Y.removed[et],lt=_.indexOf(ut);lt>=0&&(_[lt]=null,v[lt].disconnect(ut))}for(let et=0;et<Y.added.length;et++){let ut=Y.added[et],lt=_.indexOf(ut);if(lt===-1){for(let Lt=0;Lt<v.length;Lt++)if(Lt>=_.length){_.push(ut),lt=Lt;break}else if(_[Lt]===null){_[Lt]=ut,lt=Lt;break}if(lt===-1)break}let It=v[lt];It&&It.connect(ut)}}let U=new L,$=new L;function D(Y,et,ut){U.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(ut.matrixWorld);let lt=U.distanceTo($),It=et.projectionMatrix.elements,Lt=ut.projectionMatrix.elements,Mt=It[14]/(It[10]-1),he=It[14]/(It[10]+1),Wt=(It[9]+1)/It[5],me=(It[9]-1)/It[5],O=(It[8]-1)/It[0],Ve=(Lt[8]+1)/Lt[0],Xt=Mt*O,Ft=Mt*Ve,Et=lt/(-O+Ve),jt=Et*-O;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(jt),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Ct=Mt+Et,C=he+Et,S=Xt-jt,G=Ft+(lt-jt),K=Wt*he/C*Ct,nt=me*he/C*Ct;Y.projectionMatrix.makePerspective(S,G,K,nt,Ct,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function V(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let et=Y.near,ut=Y.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),M.near=R.near=A.near=et,M.far=R.far=A.far=ut,(I!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,k=M.far),A.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;let lt=Y.parent,It=M.cameras;V(M,lt);for(let Lt=0;Lt<It.length;Lt++)V(It[Lt],lt);It.length===2?D(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),J(Y,M,lt)};function J(Y,et,ut){ut===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(ut.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ql*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Q=null;function xt(Y,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let lt=!1;ut.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Lt=0;Lt<ut.length;Lt++){let Mt=ut[Lt],he=null;if(f!==null)he=f.getViewport(Mt);else{let me=u.getViewSubImage(d,Mt);he=me.viewport,Lt===0&&(t.setRenderTargetTextures(y,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(y))}let Wt=b[Lt];Wt===void 0&&(Wt=new Ke,Wt.layers.enable(Lt),Wt.viewport=new Se,b[Lt]=Wt),Wt.matrix.fromArray(Mt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Mt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(he.x,he.y,he.width,he.height),Lt===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Wt)}let It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){let Lt=u.getDepthInformation(ut[0]);Lt&&Lt.isValid&&Lt.texture&&x.init(t,Lt,i.renderState)}}for(let ut=0;ut<v.length;ut++){let lt=_[ut],It=v[ut];lt!==null&&It!==void 0&&It.update(lt,et,c||a)}Q&&Q(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Ut=new hd;Ut.setAnimationLoop(xt),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}},ki=new Bn,oy=new ce;function ly(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,ki.copy(_),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(ki)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cy(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function c(y,v){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));let E=v.program;n.updateUBOMapping(y,E);let w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){let v=u();y.__bindingPointIndex=v;let _=s.createBuffer(),E=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=i[y.id],_=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,A=_.length;w<A;w++){let R=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,M=R.length;b<M;b++){let I=R[b];if(f(I,w,b,E)===!0){let k=I.__offset,N=Array.isArray(I.value)?I.value:[I.value],P=0;for(let H=0;H<N.length;H++){let U=N[H],$=x(U);typeof U=="number"||typeof U=="boolean"?(I.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,k+P,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=0,I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=0,I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=0):(U.toArray(I.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,_,E){let w=y.value,A=v+"_"+_;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:E[A]=w.clone(),!0;{let R=E[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return E[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(y){let v=y.uniforms,_=0,E=16;for(let A=0,R=v.length;A<R;A++){let b=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,I=b.length;M<I;M++){let k=b[M],N=Array.isArray(k.value)?k.value:[k.value];for(let P=0,H=N.length;P<H;P++){let U=N[P],$=x(U),D=_%E,V=D%$.boundary,J=D+V;_+=V,J!==0&&E-J<$.storage&&(_+=E-J),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=$.storage}}}let w=_%E;return w>0&&(_+=E-w),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Aa=class{constructor(t={}){let{canvas:e=pp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=_i,this.toneMappingExposure=1;let _=this,E=!1,w=0,A=0,R=null,b=-1,M=null,I=new Se,k=new Se,N=null,P=new ft(0),H=0,U=e.width,$=e.height,D=1,V=null,J=null,Q=new Se(0,0,U,$),xt=new Se(0,0,U,$),Ut=!1,Y=new ur,et=!1,ut=!1,lt=new ce,It=new ce,Lt=new L,Mt=new Se,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function me(){return R===null?D:1}let O=n;function Ve(T,B){return e.getContext(T,B)}try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),O===null){let B="webgl2";if(O=Ve(B,T),O===null)throw Ve(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Xt,Ft,Et,jt,Ct,C,S,G,K,nt,j,bt,ot,ct,$t,st,vt,Nt,Ot,_t,Kt,Gt,ue,F;function dt(){Xt=new Tg(O),Xt.init(),Gt=new iy(O,Xt),Ft=new vg(O,Xt,t,Gt),Et=new ty(O,Xt),Ft.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),jt=new Rg(O),Ct=new Hx,C=new ny(O,Xt,Et,Ct,Ft,Gt,jt),S=new Mg(_),G=new wg(_),K=new Up(O),ue=new xg(O,K),nt=new Eg(O,K,jt,ue),j=new Ig(O,nt,K,jt),Ot=new Cg(O,Ft,C),st=new _g(Ct),bt=new kx(_,S,G,Xt,Ft,ue,st),ot=new ly(_,Ct),ct=new Vx,$t=new Zx(Xt),Nt=new gg(_,S,G,Et,j,f,l),vt=new jx(_,j,Ft),F=new cy(O,jt,Ft,Et),_t=new yg(O,Xt,jt),Kt=new Ag(O,Xt,jt),jt.programs=bt.programs,_.capabilities=Ft,_.extensions=Xt,_.properties=Ct,_.renderLists=ct,_.shadowMap=vt,_.state=Et,_.info=jt}dt();let Z=new mc(_,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=Xt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Xt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(U,$,!1))},this.getSize=function(T){return T.set(U,$)},this.setSize=function(T,B,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,$=B,e.width=Math.floor(T*D),e.height=Math.floor(B*D),W===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(U*D,$*D).floor()},this.setDrawingBufferSize=function(T,B,W){U=T,$=B,D=W,e.width=Math.floor(T*W),e.height=Math.floor(B*W),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,B,W,X){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,B,W,X),Et.viewport(I.copy(Q).multiplyScalar(D).round())},this.getScissor=function(T){return T.copy(xt)},this.setScissor=function(T,B,W,X){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,B,W,X),Et.scissor(k.copy(xt).multiplyScalar(D).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(T){Et.setScissorTest(Ut=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(T=!0,B=!0,W=!0){let X=0;if(T){let z=!1;if(R!==null){let rt=R.texture.format;z=rt===Jc||rt===Kc||rt===Zc}if(z){let rt=R.texture.type,mt=rt===ni||rt===qi||rt===cr||rt===As||rt===qc||rt===$c,St=Nt.getClearColor(),wt=Nt.getClearAlpha(),Bt=St.r,kt=St.g,Tt=St.b;mt?(g[0]=Bt,g[1]=kt,g[2]=Tt,g[3]=wt,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Bt,x[1]=kt,x[2]=Tt,x[3]=wt,O.clearBufferiv(O.COLOR,0,x))}else X|=O.COLOR_BUFFER_BIT}B&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),ct.dispose(),$t.dispose(),Ct.dispose(),S.dispose(),G.dispose(),j.dispose(),ue.dispose(),F.dispose(),bt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ch),Z.removeEventListener("sessionend",Ih),Di.stop()};function tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=jt.autoReset,B=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,z=vt.type;dt(),jt.autoReset=T,vt.enabled=B,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=z}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function zt(T){let B=T.target;B.removeEventListener("dispose",zt),be(B)}function be(T){We(T),Ct.remove(T)}function We(T){let B=Ct.get(T).programs;B!==void 0&&(B.forEach(function(W){bt.releaseProgram(W)}),T.isShaderMaterial&&bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,W,X,z,rt){B===null&&(B=he);let mt=z.isMesh&&z.matrixWorld.determinant()<0,St=If(T,B,W,X,z);Et.setMaterial(X,mt);let wt=W.index,Bt=1;if(X.wireframe===!0){if(wt=nt.getWireframeAttribute(W),wt===void 0)return;Bt=2}let kt=W.drawRange,Tt=W.attributes.position,Qt=kt.start*Bt,de=(kt.start+kt.count)*Bt;rt!==null&&(Qt=Math.max(Qt,rt.start*Bt),de=Math.min(de,(rt.start+rt.count)*Bt)),wt!==null?(Qt=Math.max(Qt,0),de=Math.min(de,wt.count)):Tt!=null&&(Qt=Math.max(Qt,0),de=Math.min(de,Tt.count));let ge=de-Qt;if(ge<0||ge===1/0)return;ue.setup(z,X,St,W,wt);let je,ne=_t;if(wt!==null&&(je=K.get(wt),ne=Kt,ne.setIndex(je)),z.isMesh)X.wireframe===!0?(Et.setLineWidth(X.wireframeLinewidth*me()),ne.setMode(O.LINES)):ne.setMode(O.TRIANGLES);else if(z.isLine){let At=X.linewidth;At===void 0&&(At=1),Et.setLineWidth(At*me()),z.isLineSegments?ne.setMode(O.LINES):z.isLineLoop?ne.setMode(O.LINE_LOOP):ne.setMode(O.LINE_STRIP)}else z.isPoints?ne.setMode(O.POINTS):z.isSprite&&ne.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ne.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ne.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let At=z._multiDrawStarts,qn=z._multiDrawCounts,ie=z._multiDrawCount,_n=wt?K.get(wt).bytesPerElement:1,ts=Ct.get(X).currentProgram.getUniforms();for(let en=0;en<ie;en++)ts.setValue(O,"_gl_DrawID",en),ne.render(At[en]/_n,qn[en])}else if(z.isInstancedMesh)ne.renderInstances(Qt,ge,z.count);else if(W.isInstancedBufferGeometry){let At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,qn=Math.min(W.instanceCount,At);ne.renderInstances(Qt,ge,qn)}else ne.render(Qt,ge)};function ae(T,B,W){T.transparent===!0&&T.side===Fe&&T.forceSinglePass===!1?(T.side=$e,T.needsUpdate=!0,Lr(T,B,W),T.side=bi,T.needsUpdate=!0,Lr(T,B,W),T.side=Fe):Lr(T,B,W)}this.compile=function(T,B,W=null){W===null&&(W=T),p=$t.get(W),p.init(B),v.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let X=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let rt=z.material;if(rt)if(Array.isArray(rt))for(let mt=0;mt<rt.length;mt++){let St=rt[mt];ae(St,W,z),X.add(St)}else ae(rt,W,z),X.add(rt)}),v.pop(),p=null,X},this.compileAsync=function(T,B,W=null){let X=this.compile(T,B,W);return new Promise(z=>{function rt(){if(X.forEach(function(mt){Ct.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){z(T);return}setTimeout(rt,10)}Xt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let vn=null;function Xn(T){vn&&vn(T)}function Ch(){Di.stop()}function Ih(){Di.start()}let Di=new hd;Di.setAnimationLoop(Xn),typeof self!="undefined"&&Di.setContext(self),this.setAnimationLoop=function(T){vn=T,Z.setAnimationLoop(T),T===null?Di.stop():Di.start()},Z.addEventListener("sessionstart",Ch),Z.addEventListener("sessionend",Ih),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,R),p=$t.get(T,v.length),p.init(B),v.push(p),It.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(It),ut=this.localClippingEnabled,et=st.init(this.clippingPlanes,ut),m=ct.get(T,y.length),m.init(),y.push(m),Z.enabled===!0&&Z.isPresenting===!0){let rt=_.xr.getDepthSensingMesh();rt!==null&&Io(rt,B,-1/0,_.sortObjects)}Io(T,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(V,J),Wt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Wt&&Nt.addToRenderList(m,T),this.info.render.frame++,et===!0&&st.beginShadows();let W=p.state.shadowsArray;vt.render(W,T,B),et===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){let rt=B.cameras;if(z.length>0)for(let mt=0,St=rt.length;mt<St;mt++){let wt=rt[mt];Lh(X,z,T,wt)}Wt&&Nt.render(T);for(let mt=0,St=rt.length;mt<St;mt++){let wt=rt[mt];Ph(m,T,wt,wt.viewport)}}else z.length>0&&Lh(X,z,T,B),Wt&&Nt.render(T),Ph(m,T,B);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,B),ue.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],et===!0&&st.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Io(T,B,W,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){X&&Mt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(It);let mt=j.update(T),St=T.material;St.visible&&m.push(T,mt,St,W,Mt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){let mt=j.update(T),St=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Mt.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Mt.copy(mt.boundingSphere.center)),Mt.applyMatrix4(T.matrixWorld).applyMatrix4(It)),Array.isArray(St)){let wt=mt.groups;for(let Bt=0,kt=wt.length;Bt<kt;Bt++){let Tt=wt[Bt],Qt=St[Tt.materialIndex];Qt&&Qt.visible&&m.push(T,mt,Qt,W,Mt.z,Tt)}}else St.visible&&m.push(T,mt,St,W,Mt.z,null)}}let rt=T.children;for(let mt=0,St=rt.length;mt<St;mt++)Io(rt[mt],B,W,X)}function Ph(T,B,W,X){let z=T.opaque,rt=T.transmissive,mt=T.transparent;p.setupLightsView(W),et===!0&&st.setGlobalState(_.clippingPlanes,W),X&&Et.viewport(I.copy(X)),z.length>0&&Pr(z,B,W),rt.length>0&&Pr(rt,B,W),mt.length>0&&Pr(mt,B,W),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Lh(T,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Be(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?cn:ni,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let rt=p.state.transmissionRenderTarget[X.id],mt=X.viewport||I;rt.setSize(mt.z,mt.w);let St=_.getRenderTarget();_.setRenderTarget(rt),_.getClearColor(P),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),Wt&&Nt.render(W);let wt=_.toneMapping;_.toneMapping=_i;let Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),et===!0&&st.setGlobalState(_.clippingPlanes,X),Pr(T,W,X),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Tt=0,Qt=B.length;Tt<Qt;Tt++){let de=B[Tt],ge=de.object,je=de.geometry,ne=de.material,At=de.group;if(ne.side===Fe&&ge.layers.test(X.layers)){let qn=ne.side;ne.side=$e,ne.needsUpdate=!0,Nh(ge,W,X,je,ne,At),ne.side=qn,ne.needsUpdate=!0,kt=!0}}kt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}_.setRenderTarget(St),_.setClearColor(P,H),Bt!==void 0&&(X.viewport=Bt),_.toneMapping=wt}function Pr(T,B,W){let X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,rt=T.length;z<rt;z++){let mt=T[z],St=mt.object,wt=mt.geometry,Bt=X===null?mt.material:X,kt=mt.group;St.layers.test(W.layers)&&Nh(St,B,W,wt,Bt,kt)}}function Nh(T,B,W,X,z,rt){T.onBeforeRender(_,B,W,X,z,rt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(_,B,W,X,T,rt),z.transparent===!0&&z.side===Fe&&z.forceSinglePass===!1?(z.side=$e,z.needsUpdate=!0,_.renderBufferDirect(W,B,X,z,T,rt),z.side=bi,z.needsUpdate=!0,_.renderBufferDirect(W,B,X,z,T,rt),z.side=Fe):_.renderBufferDirect(W,B,X,z,T,rt),T.onAfterRender(_,B,W,X,z,rt)}function Lr(T,B,W){B.isScene!==!0&&(B=he);let X=Ct.get(T),z=p.state.lights,rt=p.state.shadowsArray,mt=z.state.version,St=bt.getParameters(T,z.state,rt,B,W),wt=bt.getProgramCacheKey(St),Bt=X.programs;X.environment=T.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(T.isMeshStandardMaterial?G:S).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",zt),Bt=new Map,X.programs=Bt);let kt=Bt.get(wt);if(kt!==void 0){if(X.currentProgram===kt&&X.lightsStateVersion===mt)return Uh(T,St),kt}else St.uniforms=bt.getUniforms(T),T.onBeforeCompile(St,_),kt=bt.acquireProgram(St,wt),Bt.set(wt,kt),X.uniforms=St.uniforms;let Tt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Tt.clippingPlanes=st.uniform),Uh(T,St),X.needsLights=Lf(T),X.lightsStateVersion=mt,X.needsLights&&(Tt.ambientLightColor.value=z.state.ambient,Tt.lightProbe.value=z.state.probe,Tt.directionalLights.value=z.state.directional,Tt.directionalLightShadows.value=z.state.directionalShadow,Tt.spotLights.value=z.state.spot,Tt.spotLightShadows.value=z.state.spotShadow,Tt.rectAreaLights.value=z.state.rectArea,Tt.ltc_1.value=z.state.rectAreaLTC1,Tt.ltc_2.value=z.state.rectAreaLTC2,Tt.pointLights.value=z.state.point,Tt.pointLightShadows.value=z.state.pointShadow,Tt.hemisphereLights.value=z.state.hemi,Tt.directionalShadowMap.value=z.state.directionalShadowMap,Tt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Tt.spotShadowMap.value=z.state.spotShadowMap,Tt.spotLightMatrix.value=z.state.spotLightMatrix,Tt.spotLightMap.value=z.state.spotLightMap,Tt.pointShadowMap.value=z.state.pointShadowMap,Tt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=kt,X.uniformsList=null,kt}function Dh(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Ss.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Uh(T,B){let W=Ct.get(T);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function If(T,B,W,X,z){B.isScene!==!0&&(B=he),C.resetTextureUnits();let rt=B.fog,mt=X.isMeshStandardMaterial?B.environment:null,St=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Os,wt=(X.isMeshStandardMaterial?G:S).get(X.envMap||mt),Bt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,kt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Tt=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,de=!!W.morphAttributes.color,ge=_i;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ge=_.toneMapping);let je=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=je!==void 0?je.length:0,At=Ct.get(X),qn=p.state.lights;if(et===!0&&(ut===!0||T!==M)){let un=T===M&&X.id===b;st.setState(X,T,un)}let ie=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==qn.state.version||At.outputColorSpace!==St||z.isBatchedMesh&&At.batching===!1||!z.isBatchedMesh&&At.batching===!0||z.isBatchedMesh&&At.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&At.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&At.instancing===!1||!z.isInstancedMesh&&At.instancing===!0||z.isSkinnedMesh&&At.skinning===!1||!z.isSkinnedMesh&&At.skinning===!0||z.isInstancedMesh&&At.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&At.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&At.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&At.instancingMorph===!1&&z.morphTexture!==null||At.envMap!==wt||X.fog===!0&&At.fog!==rt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Bt||At.vertexTangents!==kt||At.morphTargets!==Tt||At.morphNormals!==Qt||At.morphColors!==de||At.toneMapping!==ge||At.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,At.__version=X.version);let _n=At.currentProgram;ie===!0&&(_n=Lr(X,B,z));let ts=!1,en=!1,Xs=!1,xe=_n.getUniforms(),Ln=At.uniforms;if(Et.useProgram(_n.program)&&(ts=!0,en=!0,Xs=!0),X.id!==b&&(b=X.id,en=!0),ts||M!==T){Et.buffers.depth.getReversed()?(lt.copy(T.projectionMatrix),gp(lt),xp(lt),xe.setValue(O,"projectionMatrix",lt)):xe.setValue(O,"projectionMatrix",T.projectionMatrix),xe.setValue(O,"viewMatrix",T.matrixWorldInverse);let ci=xe.map.cameraPosition;ci!==void 0&&ci.setValue(O,Lt.setFromMatrixPosition(T.matrixWorld)),Ft.logarithmicDepthBuffer&&xe.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,en=!0,Xs=!0)}if(z.isSkinnedMesh){xe.setOptional(O,z,"bindMatrix"),xe.setOptional(O,z,"bindMatrixInverse");let un=z.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),xe.setValue(O,"boneTexture",un.boneTexture,C))}z.isBatchedMesh&&(xe.setOptional(O,z,"batchingTexture"),xe.setValue(O,"batchingTexture",z._matricesTexture,C),xe.setOptional(O,z,"batchingIdTexture"),xe.setValue(O,"batchingIdTexture",z._indirectTexture,C),xe.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&xe.setValue(O,"batchingColorTexture",z._colorsTexture,C));let qs=W.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Ot.update(z,W,_n),(en||At.receiveShadow!==z.receiveShadow)&&(At.receiveShadow=z.receiveShadow,xe.setValue(O,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ln.envMap.value=wt,Ln.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Ln.envMapIntensity.value=B.environmentIntensity),en&&(xe.setValue(O,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&Pf(Ln,Xs),rt&&X.fog===!0&&ot.refreshFogUniforms(Ln,rt),ot.refreshMaterialUniforms(Ln,X,D,$,p.state.transmissionRenderTarget[T.id]),Ss.upload(O,Dh(At),Ln,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ss.upload(O,Dh(At),Ln,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(O,"center",z.center),xe.setValue(O,"modelViewMatrix",z.modelViewMatrix),xe.setValue(O,"normalMatrix",z.normalMatrix),xe.setValue(O,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let un=X.uniformsGroups;for(let ci=0,hi=un.length;ci<hi;ci++){let Fh=un[ci];F.update(Fh,_n),F.bind(Fh,_n)}}return _n}function Pf(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Lf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,W){Ct.get(T.texture).__webglTexture=B,Ct.get(T.depthTexture).__webglTexture=W;let X=Ct.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){let W=Ct.get(T);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,W=0){R=T,w=B,A=W;let X=!0,z=null,rt=!1,mt=!1;if(T){let wt=Ct.get(T);if(wt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(wt.__hasExternalTextures)C.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Tt=T.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&Ct.has(Tt)&&(T.width!==Tt.image.width||T.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}let Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);let kt=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[B])?z=kt[B][W]:z=kt[B],rt=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?z=Ct.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?z=kt[W]:z=kt,I.copy(T.viewport),k.copy(T.scissor),N=T.scissorTest}else I.copy(Q).multiplyScalar(D).floor(),k.copy(xt).multiplyScalar(D).floor(),N=Ut;if(Et.bindFramebuffer(O.FRAMEBUFFER,z)&&X&&Et.drawBuffers(T,z),Et.viewport(I),Et.scissor(k),Et.setScissorTest(N),rt){let wt=Ct.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,W)}else if(mt){let wt=Ct.get(T.texture),Bt=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.__webglTexture,W||0,Bt)}b=-1},this.readRenderTargetPixels=function(T,B,W,X,z,rt,mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){Et.bindFramebuffer(O.FRAMEBUFFER,St);try{let wt=T.texture,Bt=wt.format,kt=wt.type;if(!Ft.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&W>=0&&W<=T.height-z&&O.readPixels(B,W,X,z,Gt.convert(Bt),Gt.convert(kt),rt)}finally{let wt=R!==null?Ct.get(R).__webglFramebuffer:null;Et.bindFramebuffer(O.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(T,B,W,X,z,rt,mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){let wt=T.texture,Bt=wt.format,kt=wt.type;if(!Ft.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-X&&W>=0&&W<=T.height-z){Et.bindFramebuffer(O.FRAMEBUFFER,St);let Tt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Tt),O.bufferData(O.PIXEL_PACK_BUFFER,rt.byteLength,O.STREAM_READ),O.readPixels(B,W,X,z,Gt.convert(Bt),Gt.convert(kt),0);let Qt=R!==null?Ct.get(R).__webglFramebuffer:null;Et.bindFramebuffer(O.FRAMEBUFFER,Qt);let de=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mp(O,de,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Tt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,rt),O.deleteBuffer(Tt),O.deleteSync(de),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,W=0){T.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);let X=Math.pow(2,-W),z=Math.floor(T.image.width*X),rt=Math.floor(T.image.height*X),mt=B!==null?B.x:0,St=B!==null?B.y:0;C.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,mt,St,z,rt),Et.unbindTexture()},this.copyTextureToTexture=function(T,B,W=null,X=null,z=0){T.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],B=arguments[2],z=arguments[3]||0,W=null);let rt,mt,St,wt,Bt,kt,Tt,Qt,de,ge=T.isCompressedTexture?T.mipmaps[z]:T.image;W!==null?(rt=W.max.x-W.min.x,mt=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Bt=W.min.y,kt=W.isBox3?W.min.z:0):(rt=ge.width,mt=ge.height,St=ge.depth||1,wt=0,Bt=0,kt=0),X!==null?(Tt=X.x,Qt=X.y,de=X.z):(Tt=0,Qt=0,de=0);let je=Gt.convert(B.format),ne=Gt.convert(B.type),At;B.isData3DTexture?(C.setTexture3D(B,0),At=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),At=O.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),At=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let qn=O.getParameter(O.UNPACK_ROW_LENGTH),ie=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_n=O.getParameter(O.UNPACK_SKIP_PIXELS),ts=O.getParameter(O.UNPACK_SKIP_ROWS),en=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ge.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,kt);let Xs=T.isDataArrayTexture||T.isData3DTexture,xe=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Ln=Ct.get(T),qs=Ct.get(B),un=Ct.get(Ln.__renderTarget),ci=Ct.get(qs.__renderTarget);Et.bindFramebuffer(O.READ_FRAMEBUFFER,un.__webglFramebuffer),Et.bindFramebuffer(O.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let hi=0;hi<St;hi++)Xs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(T).__webglTexture,z,kt+hi),T.isDepthTexture?(xe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(B).__webglTexture,z,de+hi),O.blitFramebuffer(wt,Bt,rt,mt,Tt,Qt,rt,mt,O.DEPTH_BUFFER_BIT,O.NEAREST)):xe?O.copyTexSubImage3D(At,z,Tt,Qt,de+hi,wt,Bt,rt,mt):O.copyTexSubImage2D(At,z,Tt,Qt,de+hi,wt,Bt,rt,mt);Et.bindFramebuffer(O.READ_FRAMEBUFFER,null),Et.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xe?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(At,z,Tt,Qt,de,rt,mt,St,je,ne,ge.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(At,z,Tt,Qt,de,rt,mt,St,je,ge.data):O.texSubImage3D(At,z,Tt,Qt,de,rt,mt,St,je,ne,ge):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,Tt,Qt,rt,mt,je,ne,ge.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,Tt,Qt,ge.width,ge.height,je,ge.data):O.texSubImage2D(O.TEXTURE_2D,z,Tt,Qt,rt,mt,je,ne,ge);O.pixelStorei(O.UNPACK_ROW_LENGTH,qn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ie),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_n),O.pixelStorei(O.UNPACK_SKIP_ROWS,ts),O.pixelStorei(O.UNPACK_SKIP_IMAGES,en),z===0&&B.generateMipmaps&&O.generateMipmap(At),Et.unbindTexture()},this.copyTextureToTexture3D=function(T,B,W=null,X=null,z=0){return T.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],B=arguments[3],z=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,W,X,z)},this.initRenderTarget=function(T){Ct.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Et.unbindTexture()},this.resetState=function(){w=0,A=0,R=null,Et.reset(),ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Ra=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ft(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ca=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new L,dr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new _e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fr=class extends zn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ms,Js=new L,gs=new L,xs=new L,ys=new at,js=new at,md=new ce,ta=new L,Qs=new L,ea=new L,Uu=new at,ol=new at,Fu=new at,Ia=class extends ye{constructor(t=new fr){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Jt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ca(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new dr(n,3,0,!1)),ms.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),md.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-xs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;na(ta.set(-.5,-.5,0),xs,a,gs,i,r),na(Qs.set(.5,-.5,0),xs,a,gs,i,r),na(ea.set(.5,.5,0),xs,a,gs,i,r),Uu.set(0,0),ol.set(1,0),Fu.set(1,1);let o=t.ray.intersectTriangle(ta,Qs,ea,!1,Js);if(o===null&&(na(Qs.set(-.5,.5,0),xs,a,gs,i,r),ol.set(0,1),o=t.ray.intersectTriangle(ta,ea,Qs,!1,Js),o===null))return;let l=t.ray.origin.distanceTo(Js);l<t.near||l>t.far||e.push({distance:l,point:Js.clone(),uv:yi.getInterpolation(Js,ta,Qs,ea,Uu,ol,Fu,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function na(s,t,e,n,i,r){ys.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(js.x=r*ys.x-i*ys.y,js.y=i*ys.x+r*ys.y):js.copy(ys),s.copy(t),s.x+=js.x,s.y+=js.y,s.applyMatrix4(md)}var gc=class extends Qe{constructor(t=null,e=1,n=1,i,r,a,o,l,c=rn,h=rn,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends _e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new ce,Ou=new ce,ia=[],Bu=new fn,hy=new ce,tr=new it,er=new ii,tn=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),Bu.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(Bu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),er.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vs),Ou.multiplyMatrices(n,vs),tr.matrixWorld=Ou,tr.raycast(t,ia);for(let a=0,o=ia.length;a<o;a++){let l=ia[a];l.instanceId=r,l.object=this,e.push(l)}ia.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gc(new Float32Array(i*this.count),i,this.count,Yc,Fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var mr=class extends zn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pa=new L,La=new L,zu=new ce,nr=new hr,sa=new ii,ll=new L,ku=new L,Na=class extends ye{constructor(t=new Jt,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Pa.fromBufferAttribute(e,i-1),La.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Pa.distanceTo(La);t.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;zu.copy(i).invert(),nr.copy(t.ray).applyMatrix4(zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),v=ra(this,t,nr,l,p,y);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=ra(this,t,nr,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=ra(this,t,nr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=ra(this,t,nr,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ra(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(Pa.fromBufferAttribute(a,i),La.fromBufferAttribute(a,r),e.distanceSqToSegment(Pa,La,ll,ku)>n)return;ll.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ll);if(!(l<t.near||l>t.far))return{distance:l,point:ku.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var xc=class extends zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hu=new ce,yc=new hr,aa=new ii,oa=new L,Da=class extends ye{constructor(t=new Jt,e=new xc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(i),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;Hu.copy(i).invert(),yc.copy(t.ray).applyMatrix4(Hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);oa.fromBufferAttribute(u,m),Gu(oa,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)oa.fromBufferAttribute(u,g),Gu(oa,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gu(s,t,e,n,i,r,a){let o=yc.distanceSqToPoint(s);if(o<e){let l=new L;yc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ls=class extends Qe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new at:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,i=[],r=[],a=[],o=new L,l=new ce;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Oe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Oe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gr=class extends pn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},vc=class extends gr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var la=new L,cl=new Qc,hl=new Qc,ul=new Qc,Ns=class extends pn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(la.subVectors(i[0],i[1]).add(i[0]),c=la);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(la.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=la),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),cl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),hl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),ul.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),hl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ul.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(cl.calc(l),hl.calc(l),ul.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vu(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function uy(s,t){let e=1-s;return e*e*t}function dy(s,t){return 2*(1-s)*s*t}function fy(s,t){return s*s*t}function ar(s,t,e,n){return uy(s,t)+dy(s,e)+fy(s,n)}function py(s,t){let e=1-s;return e*e*e*t}function my(s,t){let e=1-s;return 3*e*e*s*t}function gy(s,t){return 3*(1-s)*s*s*t}function xy(s,t){return s*s*s*t}function or(s,t,e,n,i){return py(s,t)+my(s,e)+gy(s,n)+xy(s,i)}var Ua=class extends pn{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,i.x,r.x,a.x,o.x),or(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_c=class extends pn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,i.x,r.x,a.x,o.x),or(t,i.y,r.y,a.y,o.y),or(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fa=class extends pn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mc=class extends pn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends pn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ar(t,i.x,r.x,a.x),ar(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bc=class extends pn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ar(t,i.x,r.x,a.x),ar(t,i.y,r.y,a.y),ar(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Vu(o,l.x,c.x,h.x,u.x),Vu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new at().fromArray(i))}return this}},Wu=Object.freeze({__proto__:null,ArcCurve:vc,CatmullRomCurve3:Ns,CubicBezierCurve:Ua,CubicBezierCurve3:_c,EllipseCurve:gr,LineCurve:Fa,LineCurve3:Mc,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:bc,SplineCurve:Ba}),Sc=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Wu[i.type]().fromJSON(i))}return this}},wc=class extends Sc{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fa(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Oa(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Ua(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ba(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new gr(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Tc=class s extends Jt{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Oe(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,d=new at,f=new L,g=new L,x=new L,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let v=n+y*h*i,_=Math.sin(v),E=Math.cos(v);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*_,u.y=t[w].y,u.z=t[w].x*E,a.push(u.x,u.y,u.z),d.x=y/e,d.y=w/(t.length-1),o.push(d.x,d.y);let A=l[3*w+0]*_,R=l[3*w+1],b=l[3*w+0]*E;c.push(A,R,b)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let _=v+y*t.length,E=_,w=_+t.length,A=_+t.length+1,R=_+1;r.push(E,w,R),r.push(A,R,w)}this.setIndex(r),this.setAttribute("position",new Dt(a,3)),this.setAttribute("uv",new Dt(o,2)),this.setAttribute("normal",new Dt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Ds=class s extends Tc{constructor(t=1,e=1,n=4,i=8){let r=new wc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Ti=class s extends Jt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(o,3)),this.setAttribute("uv",new Dt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Me=class s extends Jt{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(f,2));function y(){let _=new L,E=new L,w=0,A=(e-t)/n;for(let R=0;R<=r;R++){let b=[],M=R/r,I=M*(e-t)+t;for(let k=0;k<=i;k++){let N=k/i,P=N*l+o,H=Math.sin(P),U=Math.cos(P);E.x=I*H,E.y=-M*n+m,E.z=I*U,u.push(E.x,E.y,E.z),_.set(H,A,U).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-M),b.push(g++)}x.push(b)}for(let R=0;R<i;R++)for(let b=0;b<r;b++){let M=x[b][R],I=x[b+1][R],k=x[b+1][R+1],N=x[b][R+1];(t>0||b!==0)&&(h.push(M,I,N),w+=3),(e>0||b!==r-1)&&(h.push(I,k,N),w+=3)}c.addGroup(p,w,0),p+=w}function v(_){let E=g,w=new at,A=new L,R=0,b=_===!0?t:e,M=_===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let I=g;for(let k=0;k<=i;k++){let P=k/i*l+o,H=Math.cos(P),U=Math.sin(P);A.x=b*U,A.y=m*M,A.z=b*H,u.push(A.x,A.y,A.z),d.push(0,M,0),w.x=H*.5+.5,w.y=U*.5*M+.5,f.push(w.x,w.y),g++}for(let k=0;k<i;k++){let N=E+k,P=I+k;_===!0?h.push(P,P+1,N):h.push(P+1,P,N),R+=3}c.addGroup(p,R,_===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},on=class s extends Me{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},za=class s extends Jt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(r.slice(),3)),this.setAttribute("uv",new Dt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new L,_=new L,E=new L;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],_),f(e[w+2],E),l(v,_,E,y)}function l(y,v,_,E){let w=E+1,A=[];for(let R=0;R<=w;R++){A[R]=[];let b=y.clone().lerp(_,R/w),M=v.clone().lerp(_,R/w),I=w-R;for(let k=0;k<=I;k++)k===0&&R===w?A[R][k]=b:A[R][k]=b.clone().lerp(M,k/I)}for(let R=0;R<w;R++)for(let b=0;b<2*(w-R)-1;b++){let M=Math.floor(b/2);b%2===0?(d(A[R][M+1]),d(A[R+1][M]),d(A[R][M])):(d(A[R][M+1]),d(A[R+1][M+1]),d(A[R+1][M]))}}function c(y){let v=new L;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let y=new L;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(_,1-E)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],_=a[y+2],E=a[y+4],w=Math.max(v,_,E),A=Math.min(v,_,E);w>.9&&A<.1&&(v<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){let _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let y=new L,v=new L,_=new L,E=new L,w=new at,A=new at,R=new at;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),w.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),E.copy(y).add(v).add(_).divideScalar(3);let I=m(E);x(w,M+0,y,I),x(A,M+2,v,I),x(R,M+4,_,I)}}function x(y,v,_,E){E<0&&y.x===1&&(a[v]=y.x-1),_.x===0&&_.z===0&&(a[v]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Us=class s extends za{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ka=class s extends za{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ha=class s extends Jt{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new L,g=new at;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,v=y,_=y+n+1,E=y+n+2,w=y+1;o.push(v,_,w),o.push(_,E,w)}}this.setIndex(o),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ln=class s extends Jt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){let w=E/e;u.x=-t*Math.cos(i+w*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+w*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],_=h[p][y],E=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(v,_,w),(p!==n-1||l<Math.PI)&&f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var xr=class s extends Jt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ga=class extends pe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Rt=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rd,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ca(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function yy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Fs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ec=class extends Fs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kh,endingEnd:kh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hh:r=t,o=2*e-n;break;case Gh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hh:a=t,l=2*n-e;break;case Gh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+y*a[c+E]+v*a[l+E]+_*a[u+E];return r}},Ac=class extends Fs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Rc=class extends Fs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ca(e,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ca(t.times,Array),values:ca(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ec(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ma:e=this.InterpolantFactoryMethodDiscrete;break;case Jl:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return Jl;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&yy(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Jl;var $i=class extends Tn{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=ma;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends Tn{};Cc.prototype.ValueTypeName="color";var Ic=class extends Tn{};Ic.prototype.ValueTypeName="number";var Pc=class extends Fs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)wi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Va=class extends Tn{InterpolantFactoryMethodLinear(t){return new Pc(this.times,this.values,this.getValueSize(),t)}};Va.prototype.ValueTypeName="quaternion";Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ma;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends Tn{};Lc.prototype.ValueTypeName="vector";var Nc=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},vy=new Nc,Dc=class{constructor(t){this.manager=t!==void 0?t:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wa=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Xa=class extends Wa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dl=new ce,Xu=new L,qu=new L,Uc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xu),qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qu),e.updateMatrixWorld(),dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Fc=class extends Uc{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qa=class extends Wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Fc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var $a=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$u(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=$u();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function $u(){return performance.now()}var th="\\[\\]\\.:\\/",_y=new RegExp("["+th+"]","g"),eh="[^"+th+"]",My="[^"+th.replace("\\.","")+"]",by=/((?:WC+[\/:])*)/.source.replace("WC",eh),Sy=/(WCOD+)?/.source.replace("WCOD",My),wy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),Ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),Ey=new RegExp("^"+by+Sy+wy+Ty+"$"),Ay=["material","materials","bones","map"],Oc=class{constructor(t,e,n){let i=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_y,"")}static parseTrackName(t){let e=Ey.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ay.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Oc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xv=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);var ja={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ry=new Is(-1,1,1,-1,0,1),nh=class extends Jt{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}},Cy=new nh,Ai=class{constructor(t){this._mesh=new it(Cy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ry)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Qa=class extends hn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ei.clone(t.uniforms),this.material=new pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ai(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _r=class extends hn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},to=class extends hn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var eo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qa(ja),this.copyPass.material.blending=On,this.clock=new $a}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_r!==void 0&&(a instanceof _r?n=!0:a instanceof to&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var no=class extends hn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var gd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var zs=class s extends hn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Be(r,a,{type:cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Be(r,a,{type:cn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Be(r,a,{type:cn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=gd;this.highPassUniforms=Ei.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ja;this.copyUniforms=Ei.clone(h.uniforms),this.blendMaterial=new pe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:an,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ft,this.oldClearAlpha=1,this.basic=new te,this.fsQuad=new Ai(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};zs.BlurDirectionX=new at(1,0);zs.BlurDirectionY=new at(0,1);var xd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var io=class extends hn{constructor(){super();let t=xd;this.uniforms=Ei.clone(t.uniforms),this.material=new Ga({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ai(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Iy(s,t){let e=[],n=s.length;for(let i=0;i<n;i++){let r=s[i];if(r[3]!=="c"){e.push([r[0],r[1],r[2]||0]);continue}let a=s[(i-1+n)%n],o=s[(i+1)%n],l=r[4]||t,c=yd(a[0]-r[0],a[1]-r[1]),h=yd(o[0]-r[0],o[1]-r[1]);e.push([r[0]+c[0]*l,r[1]+c[1]*l,r[2]||0]),e.push([r[0]+(c[0]+h[0])*l*.29,r[1]+(c[1]+h[1])*l*.29,r[2]||0]),e.push([r[0]+h[0]*l,r[1]+h[1]*l,r[2]||0])}return e}function yd(s,t){let e=Math.hypot(s,t)||1;return[s/e,t/e]}var we=[{id:"lonato",category:"real",name:"South Garda Karting",place:"\u041B\u043E\u043D\u0430\u0442\u043E, \u0418\u0442\u0430\u043B\u0438\u044F",short:"\u041B\u043E\u043D\u0430\u0442\u043E",flag:"IT",desc:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F 1010 \u043C, \u043F\u043E \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u0435\u043B\u043A\u0435. \u0414\u043B\u0438\u043D\u043D\u0430\u044F \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u044F \u043F\u0440\u044F\u043C\u0430\u044F, \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0435\u0440\u0432\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442, \u0448\u0438\u043A\u0430\u043D\u044B \u0438 \u0448\u043F\u0438\u043B\u044C\u043A\u0430 \u0443 \u043F\u0430\u0434\u0434\u043E\u043A\u0430.",theme:"italy",length:1010,width:9,runoff:4.5,corners:11,points:[[-60,0,0],[40,0,0],[100,2,0],[132,14,0],[150,40,.3],[140,64,.6],[156,86,.8],[178,110,1],[176,136,1],[152,150,1],[126,138,1],[98,118,.8],[64,124,.6],[26,142,.4],[-18,146,.2],[-60,140,0],[-92,122,0],[-100,96,0],[-86,76,0],[-100,56,0],[-132,46,0],[-150,22,0],[-132,4,0]],sectors:[.3,.64],pit:{side:-1,before:60,after:120}},{id:"genk",category:"real",name:"Karting Genk",place:"\u0413\u0435\u043D\u043A, \u0411\u0435\u043B\u044C\u0433\u0438\u044F",short:"\u0413\u0435\u043D\u043A",flag:"BE",desc:"Horensbergdam, 1360 \u043C, \u043F\u0440\u043E\u0442\u0438\u0432 \u0447\u0430\u0441\u043E\u0432\u043E\u0439. \u0428\u043F\u0438\u043B\u044C\u043A\u0430 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u0441\u043B\u0435 \u0441\u0442\u0430\u0440\u0442\u0430, \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0441\u0432\u044F\u0437\u043A\u0438, \u0448\u043F\u0438\u043B\u044C\u043A\u0430 \u043F\u0435\u0440\u0435\u0434 \u0434\u043B\u0438\u043D\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u043F\u0440\u044F\u043C\u043E\u0439 \u0438 \u043F\u0440\u0430\u0432\u044B\u0439 \u043F\u043E\u0441\u043B\u0435 \u043D\u0435\u0451.",theme:"belgium",length:1360,width:9.5,runoff:5,corners:13,points:[[-70,0,0],[30,0,0],[100,-2,0],[132,-10,.2],[140,-34,.3],[122,-52,.4],[96,-46,.5],[62,-40,.6],[40,-54,.8],[36,-82,1.1],[52,-104,1.4],[84,-112,1.6],[118,-118,1.8],[148,-134,2],[160,-162,2],[142,-184,2],[114,-178,2],[70,-180,1.6],[0,-182,1.2],[-70,-180,.8],[-104,-186,.6],[-132,-174,.4],[-150,-146,.3],[-140,-118,.2],[-150,-92,.1],[-156,-58,0],[-146,-24,0],[-118,-4,0]],sectors:[.31,.62],pit:{side:1,before:70,after:115}},{id:"pfi",category:"real",name:"PF International",place:"\u0411\u0440\u044D\u043D\u0434\u043E\u043D (\u0411\u0440\u044D\u043D\u0441\u0442\u043E\u043D), \u0410\u043D\u0433\u043B\u0438\u044F",short:"PFI",flag:"GB",desc:"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u0430\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F 1382 \u043C, 15 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432, \u043F\u043E \u0447\u0430\u0441\u043E\u0432\u043E\u0439. \u0424\u0438\u0440\u043C\u0435\u043D\u043D\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C \u2014 \u043C\u043E\u0441\u0442: \u0442\u0440\u0430\u0441\u0441\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u043D\u0430\u0434 \u0441\u043E\u0431\u043E\u0439 \u0438 \u043D\u044B\u0440\u044F\u0435\u0442 \u0432 \u0442\u043E\u043D\u043D\u0435\u043B\u044C \u043F\u043E\u0434 \u044D\u0441\u0442\u0430\u043A\u0430\u0434\u043E\u0439.",theme:"england",length:1382,width:8.5,runoff:4.5,corners:15,points:[[-80,-60,0],[10,-60,0],[80,-60,0],[118,-48,0],[134,-20,0],[127,6,.4],[132,30,1.2],[110,46,2.4],[70,50,3.8],[30,58,5],[0,70,5.2],[-30,86,5],[-64,104,3.8],[-100,120,2.2],[-128,146,1.2],[-122,178,.6],[-94,194,.2],[-56,188,0],[-24,170,0],[10,176,0],[42,160,0],[60,130,0],[44,102,0],[24,84,0],[0,70,0],[-26,52,0],[-56,34,0],[-92,26,0],[-118,8,0],[-122,-24,0],[-108,-52,0]],sectors:[.3,.63],pit:{side:-1,before:40,after:120}},{id:"kristianstad",category:"real",name:"Kristianstad (Asum Ring)",place:"\u041A\u0440\u0438\u0441\u0442\u0438\u0430\u043D\u0441\u0442\u0430\u0434, \u0428\u0432\u0435\u0446\u0438\u044F",short:"\u041A\u0440\u0438\u0441\u0442\u0438\u0430\u043D\u0441\u0442\u0430\u0434",flag:"SE",desc:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u043E\u043A\u043E\u043B\u043E 1100 \u043C, \u043F\u0440\u043E\u0442\u0438\u0432 \u0447\u0430\u0441\u043E\u0432\u043E\u0439. \u041F\u043B\u043E\u0441\u043A\u0430\u044F \u0438 \u0431\u044B\u0441\u0442\u0440\u0430\u044F: \u0434\u043B\u0438\u043D\u043D\u0430\u044F \u043F\u0440\u044F\u043C\u0430\u044F, \xAB\u043C\u043E\u043B\u043E\u0442\u043E\u043A\xBB \u0438\u0437 \u0434\u0432\u0443\u0445 \u0448\u043F\u0438\u043B\u0435\u043A \u0438 \u0441\u0432\u044F\u0437\u043A\u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u044B\u0445 \u0434\u0443\u0433.",theme:"sweden",length:1100,width:8.5,runoff:5,corners:12,points:[[-70,0,0],[20,0,0],[90,0,0],[120,-10,0],[128,-40,0],[110,-64,0],[124,-92,0],[152,-110,0],[158,-140,0],[134,-158,0],[108,-144,0],[84,-120,0],[52,-124,0],[18,-146,0],[-26,-152,0],[-84,-150,0],[-124,-136,0],[-140,-104,0],[-120,-78,0],[-136,-52,0],[-146,-24,0],[-120,-4,0]],sectors:[.33,.66],pit:{side:1,before:70,after:100}},{id:"valley",category:"fun",name:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u043E\u043B\u0438\u043D\u0430",place:"\u0424\u0430\u043D-\u0442\u0440\u0430\u0441\u0441\u0430",short:"\u0414\u043E\u043B\u0438\u043D\u0430",desc:"\u0428\u0438\u0440\u043E\u043A\u0430\u044F \u0444\u0430\u043D-\u0442\u0440\u0430\u0441\u0441\u0430 \u0441 \u0445\u043E\u043B\u043C\u0430\u043C\u0438, \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044F\u043C\u0438 \u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430\u043C\u0438.",theme:"day",width:13,runoff:5,fun:!0,points:[[-60,-110,0],[20,-110,0],[75,-106,.5],[125,-88,1.5],[150,-45,3],[140,0,5],[108,22,6],[112,60,6.5],[150,88,5.5],[150,128,4],[110,142,3],[60,120,2.5],[15,132,3],[-35,150,4.5],[-95,140,6],[-150,110,5.5],[-168,62,4],[-142,34,3],[-142,8,2],[-160,-22,1],[-185,-60,0],[-170,-100,0],[-120,-110,0]],itemRows:[.2,.52,.8],boostPads:[[.36,0],[.66,-2.5],[.93,2.5]]},{id:"harbor",category:"fun",name:"\u0417\u0430\u043A\u0430\u0442\u043D\u0430\u044F \u0433\u0430\u0432\u0430\u043D\u044C",place:"\u0424\u0430\u043D-\u0442\u0440\u0430\u0441\u0441\u0430",short:"\u0413\u0430\u0432\u0430\u043D\u044C",desc:"\u041E\u0441\u0442\u0440\u043E\u0432 \u043D\u0430 \u0437\u0430\u043A\u0430\u0442\u0435: \u0434\u043B\u0438\u043D\u043D\u0430\u044F \u043F\u0440\u044F\u043C\u0430\u044F \u0432\u0434\u043E\u043B\u044C \u0432\u043E\u0434\u044B \u0438 \u0442\u0443\u0433\u0430\u044F \u0448\u043F\u0438\u043B\u044C\u043A\u0430 \u0443 \u043C\u0430\u044F\u043A\u0430.",theme:"sunset",width:13,runoff:5,fun:!0,points:[[-90,67,0],[-10,70,0],[60,69,0],[120,60,0],[165,25,.5],[160,-25,1.5],[115,-40,3],[70,-20,4],[30,-45,4.5],[40,-95,4],[95,-120,3.5],[120,-165,3],[80,-200,2.5],[15,-190,2.5],[-35,-150,3],[-80,-172,3.5],[-128,-166,3.5],[-152,-134,3],[-135,-100,2.5],[-155,-60,1.5],[-200,-30,.5],[-205,25,0],[-160,60,0]],itemRows:[.16,.47,.76],boostPads:[[.08,0],[.55,2.5],[.88,-2]]},{id:"neon",category:"fun",name:"\u041D\u0435\u043E\u043D\u043E\u0432\u044B\u0439 \u0433\u043E\u0440\u043E\u0434",place:"\u0424\u0430\u043D-\u0442\u0440\u0430\u0441\u0441\u0430",short:"\u041D\u0435\u043E\u043D",desc:"\u041D\u043E\u0447\u043D\u0430\u044F \u0443\u043B\u0438\u0447\u043D\u0430\u044F \u0444\u0430\u043D-\u0442\u0440\u0430\u0441\u0441\u0430: \u043F\u0440\u044F\u043C\u044B\u0435 \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u044B, \u0434\u0435\u0432\u044F\u043D\u043E\u0441\u0442\u043E\u0433\u0440\u0430\u0434\u0443\u0441\u043D\u044B\u0435 \u0443\u0433\u043B\u044B \u0438 \u0448\u0438\u043A\u0430\u043D\u0430.",theme:"night",width:13,runoff:4.5,fun:!0,points:Iy([[-60,-120,0],[8,-120,0],[36,-107,0],[64,-120,0],[120,-120,0,"c"],[120,-40,0,"c"],[45,-40,0,"c"],[45,40,0,"c"],[160,40,0,"c"],[160,125,0,"c"],[-55,125,0,"c"],[-55,45,0,"c"],[-150,45,0,"c"],[-150,-120,0,"c",26]],22),itemRows:[.22,.5,.78],boostPads:[[.12,0],[.62,0],[.9,2.5]]}],vd=we.filter(s=>s.category==="real"),$v=we.filter(s=>s.category==="fun");var Py=1,ih=s=>{for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s};function _d(s,t,e){let n=s.map(r=>new L(r[0],r[2]||0,r[1])),i=new Ns(n,t,"centripetal");if(i.arcLengthDivisions=8e3,e)for(let r=0;r<3;r++){let a=e/i.getLength();n=n.map(o=>new L(o.x*a,o.y,o.z*a)),i=new Ns(n,t,"centripetal"),i.arcLengthDivisions=8e3}return i}var so=class{constructor(t){this.def=t,this.roadWidth=t.width||9,this.half=this.roadWidth/2,this.runoff=t.runoff||5,this.barrier=this.half+this.runoff,this.kerbW=t.kerbW||1;let e=_d(t.points,!0,t.length);this.curve=e;let n=e.getLength(),i=Math.max(200,Math.round(n/Py)),r=e.getSpacedPoints(i);r.pop(),this.N=i,this.length=n,this.ds=n/i;let a=new Float32Array(i),o=new Float32Array(i),l=new Float32Array(i);for(let y=0;y<i;y++)a[y]=r[y].x,o[y]=r[y].y+.06,l[y]=r[y].z;for(let y=0;y<4;y++){let v=o.slice();for(let _=0;_<i;_++)o[_]=(v[(_-2+i)%i]+v[(_-1+i)%i]+v[_]+v[(_+1)%i]+v[(_+2)%i])/5}this.px=a,this.py=o,this.pz=l;let c=new Float32Array(i),h=new Float32Array(i),u=new Float32Array(i),d=new Float32Array(i),f=new Float32Array(i),g=new Float32Array(i);for(let y=0;y<i;y++){let v=(y-1+i)%i,_=(y+1)%i,E=a[_]-a[v],w=l[_]-l[v],A=Math.hypot(E,w)||1;E/=A,w/=A,c[y]=E,h[y]=w,u[y]=-w,d[y]=E,f[y]=Math.atan2(E,w),g[y]=(o[_]-o[v])/(2*this.ds)}this.tx=c,this.tz=h,this.nx=u,this.nz=d,this.head=f,this.slope=g;let x=new Float32Array(i),m=4;for(let y=0;y<i;y++){let v=(y-m+i)%i,_=(y+m)%i;x[y]=ih(f[_]-f[v])/(2*m*this.ds)}this.curv=x,this.kerb=new Uint8Array(i);for(let y=0;y<i;y++)if(Math.abs(x[y])>1/45)for(let v=-9;v<=9;v++)this.kerb[(y+v+i)%i]=1;let p=t.sectors||[1/3,2/3];this.sectorS=[0,p[0]*n,p[1]*n],this.findCrossings(),this.computeRacingLine(),this.buildBarriers(),this.buildPit(),this.buildGrid()}idx(t){return(t%this.N+this.N)%this.N}wrapS(t){let e=this.length;return(t%e+e)%e}deltaS(t,e){let n=this.length,i=(t-e)%n;return i>n/2&&(i-=n),i<-n/2&&(i+=n),i}sIdx(t){return this.idx(Math.round(this.wrapS(t)/this.ds))}sectorOf(t){return t=this.wrapS(t),t<this.sectorS[1]?0:t<this.sectorS[2]?1:2}findCrossings(){let t=this.N;this.bridge=new Uint8Array(t),this.hasBridge=!1;for(let e=0;e<t;e+=2)for(let n=0;n<t;n+=2){let i=Math.abs(e-n);if(i=Math.min(i,t-i),i*this.ds<60)continue;if(Math.hypot(this.px[e]-this.px[n],this.pz[e]-this.pz[n])<this.barrier*2+4&&Math.abs(this.py[e]-this.py[n])>2.5){let a=this.py[e]>this.py[n];for(let o=-2;o<=2;o++)this.bridge[this.idx(e+o)]=a?1:2;this.hasBridge=!0}}}computeRacingLine(){let t=this.N,e=this.half-1.3,n=new Float32Array(t),i=new Float32Array(t),r=new Float32Array(t),a=[[12,240],[6,240],[3,200],[2,120]];for(let[d,f]of a)for(let g=0;g<f;g++){for(let m=0;m<t;m++)i[m]=this.px[m]+this.nx[m]*n[m],r[m]=this.pz[m]+this.nz[m]*n[m];let x=new Float32Array(t);for(let m=0;m<t;m++){let p=(m-d+t)%t,y=(m+d)%t,v=(i[p]+i[y])*.5-this.px[m],_=(r[p]+r[y])*.5-this.pz[m],E=v*this.nx[m]+_*this.nz[m];E=n[m]+(E-n[m])*.6,x[m]=Math.max(-e,Math.min(e,E))}n=x}for(let d=0;d<4;d++){let f=n.slice();for(let g=0;g<t;g++)n[g]=(f[(g-1+t)%t]+2*f[g]+f[(g+1)%t])/4}this.lineOff=n;let o=new Float32Array(t),l=new Float32Array(t);for(let d=0;d<t;d++)o[d]=this.px[d]+this.nx[d]*n[d],l[d]=this.pz[d]+this.nz[d]*n[d];this.lx=o,this.lz=l;let c=new Float32Array(t),h=5;for(let d=0;d<t;d++){let f=(d-h+t)%t,g=(d+h)%t,x=d,m=Math.atan2(o[x]-o[f],l[x]-l[f]),p=Math.atan2(o[g]-o[x],l[g]-l[x]),y=Math.hypot(o[g]-o[f],l[g]-l[f])||1;c[d]=ih(p-m)/(y*.5)}let u=c.slice();for(let d=0;d<t;d++){let f=0;for(let g=-3;g<=3;g++)f+=u[(d+g+t)%t];c[d]=f/7}this.lineCurv=c}buildBarriers(){let t=this.N;if(this.barL=new Float32Array(t).fill(this.barrier),this.barR=new Float32Array(t).fill(this.barrier),this.hasBridge)for(let e=0;e<t;e++){if(this.py[e]<=2.5)continue;let n=1/0;for(let i=0;i<t;i+=2){let r=Math.abs(i-e);r=Math.min(r,t-r),!(r<60)&&(n=Math.min(n,(this.px[e]-this.px[i])**2+(this.pz[e]-this.pz[i])**2))}Math.sqrt(n)<this.barrier*2+6&&(this.barL[e]=this.half+1.5,this.barR[e]=this.half+1.5)}}buildPit(){let t=this.def.pit;if(this.pit=null,!t)return;let e=this.length,n=t.side,i=this.wrapS(-t.before),r=this.wrapS(t.after),a=this.half+3.2+2.9,o=[],l=t.before+t.after,c=34;for(let v=0;v<=l;v+=4){let _=this.wrapS(-t.before+v),E=1;v<c?E=v/c:v>l-c&&(E=(l-v)/c),E=E*E*(3-2*E);let w=n*(this.half-.6+(a-this.half+.6)*E),A=this.pointAt(_,w);o.push([A.x,A.z,A.y-.06])}let h=_d(o,!1,0),u=h.getLength(),d=Math.round(u),f=h.getSpacedPoints(d),g=new Float32Array(d+1),x=new Float32Array(d+1),m=new Float32Array(d+1),p=new Float32Array(d+1),y=new Float32Array(d+1);for(let v=0;v<=d;v++)g[v]=f[v].x,x[v]=f[v].y+.07,m[v]=f[v].z;for(let v=0;v<=d;v++){let _=Math.max(0,v-1),E=Math.min(d,v+1),w=g[E]-g[_],A=m[E]-m[_],R=Math.hypot(w,A)||1;p[v]=-A/R,y[v]=w/R}this.pit={side:n,sEntry:i,sExit:r,off:a,half:2.9,M:d,x:g,y:x,z:m,nx:p,nz:y,len:u,merge:c,span:l,before:t.before,after:t.after};for(let v=c+6;v<=l-c-6;v+=this.ds){let _=this.sIdx(-t.before+v);n<0?this.barL[_]=this.half+3.2:this.barR[_]=this.half+3.2}this.pitOpen=new Uint8Array(this.N);for(let v=0;v<c+8;v+=this.ds)this.pitOpen[this.sIdx(-t.before+v)]=1,this.pitOpen[this.sIdx(t.after-v)]=1}projectPit(t,e,n=-1,i={}){let r=this.pit;if(!r)return null;let a=-1,o=1/0,l=n>=0?Math.max(0,n-10):0,c=n>=0?Math.min(r.M,n+10):r.M;for(let u=l;u<=c;u++){let d=t-r.x[u],f=e-r.z[u],g=d*d+f*f;g<o&&(o=g,a=u)}if(n>=0&&(a===l||a===c)&&o>9)return this.projectPit(t,e,-1,i);let h=a;return i.i=h,i.d=(t-r.x[h])*r.nx[h]+(e-r.z[h])*r.nz[h],i.y=r.y[h],i.t=h/r.M,i.dist=Math.sqrt(o),i}buildGrid(){let t=this.bounds(30),e=.5,n=Math.ceil((t.maxX-t.minX)/e),i=Math.ceil((t.maxZ-t.minZ)/e),r=new Uint8Array(n*i),a=(l,c)=>{let h=Math.floor((l-t.minX)/e),u=Math.floor((c-t.minZ)/e);h>=0&&u>=0&&h<n&&u<i&&(r[u*n+h]=1)},o=this.N;for(let l=0;l<o;l++){let c=(l+1)%o,h=this.half+(this.kerb[l]?this.kerbW*.8:.2);for(let u=0;u<1;u+=.3){let d=this.px[l]+(this.px[c]-this.px[l])*u,f=this.pz[l]+(this.pz[c]-this.pz[l])*u,g=this.nx[l],x=this.nz[l];for(let m=-h;m<=h;m+=.25)a(d+g*m,f+x*m)}}this.grid={g:r,W:n,H:i,cell:e,minX:t.minX,minZ:t.minZ}}onGrid(t,e){let n=this.grid,i=Math.floor((t-n.minX)/n.cell),r=Math.floor((e-n.minZ)/n.cell);return i<0||r<0||i>=n.W||r>=n.H?0:n.g[r*n.W+i]}ray(t,e,n,i=30,r=.75){let a=this.grid,o=Math.sin(n),l=Math.cos(n),c=1/a.cell,h=a.W,u=a.H,d=a.g;for(let f=r;f<=i;f+=r){let g=Math.floor((t+o*f-a.minX)*c),x=Math.floor((e+l*f-a.minZ)*c);if(g<0||x<0||g>=h||x>=u||d[x*h+g]===0)return f-r*.5}return i}project(t,e,n=-1,i=null,r={}){let a=this.N,o=-1,l=1/0,c=0,h=(A,R)=>{o=-1,l=1/0;for(let b=-R;b<=R;b++){let M=A+b<0?A+b+a:A+b>=a?A+b-a:A+b,I=t-this.px[M],k=e-this.pz[M],N=I*I+k*k;if(i!==null){let P=i-this.py[M];N+=P*P*4}N<l&&(l=N,o=M,c=b)}};if(n>=0&&(h(n,8),(c<=-8||c>=8)&&h(o,40)),o<0||l>40*40){o=-1,l=1/0;for(let A=0;A<a;A++){let R=t-this.px[A],b=e-this.pz[A],M=R*R+b*b;if(i!==null){let I=i-this.py[A];M+=I*I*4}M<l&&(l=M,o=A)}}let u=o,d=0,f=o+1===a?0:o+1,g=o===0?a-1:o-1,x=(A,R)=>{let b=this.px[R]-this.px[A],M=this.pz[R]-this.pz[A],I=b*b+M*M||1;return((t-this.px[A])*b+(e-this.pz[A])*M)/I},m=x(o,f);m>=0?(u=o,d=Math.min(1,m)):(u=g,d=Math.max(0,Math.min(1,x(g,o))));let p=u+1===a?0:u+1,y=this.px[u]+(this.px[p]-this.px[u])*d,v=this.pz[u]+(this.pz[p]-this.pz[u])*d,_=this.nx[u]+(this.nx[p]-this.nx[u])*d,E=this.nz[u]+(this.nz[p]-this.nz[u])*d,w=Math.hypot(_,E)||1;return r.idx=o,r.i0=u,r.t=d,r.s=(u+d)*this.ds,r.d=((t-y)*_+(e-v)*E)/w,r.nx=_/w,r.nz=E/w,r.y=this.py[u]+(this.py[p]-this.py[u])*d,r.head=this.head[u],r.slope=this.slope[u],r}pointAt(t,e=0,n=new L){let i=this.wrapS(t)/this.ds,r=this.idx(Math.floor(i)),a=(r+1)%this.N,o=i-Math.floor(i),l=this.px[r]+(this.px[a]-this.px[r])*o,c=this.pz[r]+(this.pz[a]-this.pz[r])*o,h=this.py[r]+(this.py[a]-this.py[r])*o,u=this.nx[r]+(this.nx[a]-this.nx[r])*o,d=this.nz[r]+(this.nz[a]-this.nz[r])*o,f=Math.hypot(u,d)||1;return n.set(l+u/f*e,h,c+d/f*e)}headingAt(t){let e=this.wrapS(t)/this.ds,n=this.idx(Math.floor(e)),i=(n+1)%this.N,r=e-Math.floor(e);return this.head[n]+ih(this.head[i]-this.head[n])*r}lineOffsetAt(t){let e=this.wrapS(t)/this.ds,n=this.idx(Math.floor(e)),i=(n+1)%this.N,r=e-Math.floor(e);return this.lineOff[n]+(this.lineOff[i]-this.lineOff[n])*r}bounds(t=0){let e=1/0,n=-1/0,i=1/0,r=-1/0;for(let a=0;a<this.N;a++)e=Math.min(e,this.px[a]),n=Math.max(n,this.px[a]),i=Math.min(i,this.pz[a]),r=Math.max(r,this.pz[a]);return{minX:e-t,maxX:n+t,minZ:i-t,maxZ:r+t}}distToCenter(t,e,n=3){var a;let i=1/0;for(let o=0;o<this.N;o+=n){let l=t-this.px[o],c=e-this.pz[o],h=l*l+c*c;h<i&&(i=h)}let r=1/0;if(this.pit)for(let o=0;o<=this.pit.M;o+=n){let l=t-this.pit.x[o],c=e-this.pit.z[o];r=Math.min(r,l*l+c*c)}return Math.min(Math.sqrt(i),Math.sqrt(r)+this.barrier-((a=this.pit)==null?void 0:a.half)-1||1/0)}};var mn=[{id:"vikhr",name:"\u0412\u0438\u0445\u0440\u044C",num:7,color:"#e0322b",accent:"#ffffff",suit:"#1b1d22",bio:"\u0420\u043E\u0432\u043D\u044B\u0439 \u0442\u0435\u043C\u043F, \u0440\u0435\u0434\u043A\u043E \u043E\u0448\u0438\u0431\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0442\u043E\u0440\u043C\u043E\u0436\u0435\u043D\u0438\u0438."},{id:"kometa",name:"\u041A\u043E\u043C\u0435\u0442\u0430",num:21,color:"#1f6fe0",accent:"#ffd23f",suit:"#0f2447",bio:"\u041F\u043E\u0437\u0434\u043D\u043E \u0442\u043E\u0440\u043C\u043E\u0437\u0438\u0442 \u0438 \u043C\u043D\u043E\u0433\u043E \u0432\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u043F\u0440\u044F\u043C\u044B\u0445."},{id:"iskra",name:"\u0418\u0441\u043A\u0440\u0430",num:3,color:"#f5c518",accent:"#16181d",suit:"#2a2a2a",bio:"\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439 \u0441\u0442\u0430\u0440\u0442, \u043B\u044E\u0431\u0438\u0442 \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u0442\u044C \u0432 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0435."},{id:"grom",name:"\u0413\u0440\u043E\u043C",num:44,color:"#2e9e4b",accent:"#e8f5e9",suit:"#12321c",bio:"\u0428\u0438\u0440\u043E\u043A\u0430\u044F \u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u044F, \u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044E\u044E \u043F\u0440\u0438 \u0430\u0442\u0430\u043A\u0435."},{id:"lisa",name:"\u041B\u0438\u0441\u0430",num:11,color:"#f07818",accent:"#ffffff",suit:"#3a1c06",bio:"\u0421\u0430\u043C\u044B\u0439 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0439 \u0432 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u0432\u044F\u0437\u043A\u0430\u0445."},{id:"molniya",name:"\u041C\u043E\u043B\u043D\u0438\u044F",num:9,color:"#8b3fd9",accent:"#f0e6ff",suit:"#231036",bio:"\u0411\u044B\u0441\u0442\u0440 \u043D\u0430 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u043C \u043A\u0440\u0443\u0433\u0435."},{id:"briz",name:"\u0411\u0440\u0438\u0437",num:16,color:"#11a9c4",accent:"#ffffff",suit:"#0b2e36",bio:"\u0411\u0435\u0440\u0435\u0436\u0451\u0442 \u0448\u0438\u043D\u044B, \u0441\u0438\u043B\u0451\u043D \u0432 \u043A\u043E\u043D\u0446\u0435 \u0433\u043E\u043D\u043A\u0438."},{id:"titan",name:"\u0422\u0438\u0442\u0430\u043D",num:99,color:"#d8dde3",accent:"#e0322b",suit:"#30353c",bio:"\u041E\u043F\u044B\u0442\u043D\u044B\u0439 \u0433\u043E\u043D\u0449\u0438\u043A, \u043F\u043E\u0447\u0442\u0438 \u043D\u0435 \u0432\u044B\u0435\u0437\u0436\u0430\u0435\u0442 \u043D\u0430 \u043F\u043E\u0440\u0435\u0431\u0440\u0438\u043A\u0438."}],sh={easy:{name:"\u041B\u0451\u0433\u043A\u0438\u0439",speed:.93,corner:.86,items:.35,rubber:.05},normal:{name:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439",speed:.98,corner:.95,items:.7,rubber:.03},hard:{name:"\u0421\u043B\u043E\u0436\u043D\u044B\u0439",speed:1,corner:1.02,items:1,rubber:.02}},Md=[10,8,6,5,4,3,2,1];var bd={italy:{skyTop:"#3d86d8",skyHorizon:"#cfe4ef",skyBottom:"#e9f1f3",sunGlow:"#fff4d6",fog:"#d6e4ea",fogNear:220,fogFar:950,sunColor:"#fff0d8",sunIntensity:2.8,sunDir:[.5,.78,.25],hemiSky:"#d4e8ff",hemiGround:"#6f7a45",hemiIntensity:1.15,ground:"grass",grassTint:14280360,trees:"cypress",treeCount:260,mountains:"#8aa4b8",mountains2:"#b3c6d2",exposure:1.02,water:!1,night:!1,clouds:8,cloudColor:"#ffffff",asphaltTone:64,real:!0},belgium:{skyTop:"#6c8bb0",skyHorizon:"#c9d3dc",skyBottom:"#dde3e8",sunGlow:"#f3efe4",fog:"#c8d0d6",fogNear:180,fogFar:800,sunColor:"#f4efe6",sunIntensity:2,sunDir:[-.4,.7,.45],hemiSky:"#d0dae6",hemiGround:"#566b3a",hemiIntensity:1.35,ground:"grass",grassTint:12573082,trees:"mixed",treeCount:420,mountains:null,exposure:1.05,water:!1,night:!1,clouds:20,cloudColor:"#eef1f4",asphaltTone:58,real:!0},england:{skyTop:"#7a95b3",skyHorizon:"#d2dade",skyBottom:"#e1e6e8",sunGlow:"#f6f1e2",fog:"#ccd5d8",fogNear:170,fogFar:760,sunColor:"#f7f1e3",sunIntensity:2.1,sunDir:[.3,.62,-.5],hemiSky:"#d7e1ea",hemiGround:"#4e6a34",hemiIntensity:1.35,ground:"grass",grassTint:11917198,trees:"broadleaf",treeCount:380,mountains:"#8fa39a",mountains2:"#adbcb5",exposure:1.05,water:!1,night:!1,clouds:24,cloudColor:"#f2f4f5",asphaltTone:56,real:!0},sweden:{skyTop:"#2f78c8",skyHorizon:"#c4dff0",skyBottom:"#e3eff5",sunGlow:"#fff7e8",fog:"#d0e2ec",fogNear:220,fogFar:950,sunColor:"#fff6ea",sunIntensity:2.5,sunDir:[-.55,.55,-.3],hemiSky:"#d4e6ff",hemiGround:"#4f6a3c",hemiIntensity:1.2,ground:"grass",grassTint:12836002,trees:"pine",treeCount:520,mountains:null,exposure:1,water:!1,night:!1,clouds:12,cloudColor:"#ffffff",asphaltTone:60,real:!0},day:{skyTop:"#2f7fd6",skyHorizon:"#b9def2",skyBottom:"#dff0f7",sunGlow:"#fff6d8",fog:"#c8e3f1",fogNear:180,fogFar:820,sunColor:"#fff1d6",sunIntensity:2.7,sunDir:[.45,.75,.35],hemiSky:"#cfe6ff",hemiGround:"#5b7a36",hemiIntensity:1.15,ground:"grass",trees:"broadleaf",treeCount:520,mountains:"#86a6bd",mountains2:"#a9c2d2",exposure:1,water:!1,night:!1,clouds:14,cloudColor:"#ffffff",asphalt:[58,60,64],barrierStyle:"boards"},sunset:{skyTop:"#3b3a7a",skyHorizon:"#ff9a5c",skyBottom:"#ffc58a",sunGlow:"#ffd08a",fog:"#e9a27a",fogNear:170,fogFar:760,sunColor:"#ffb070",sunIntensity:2.4,sunDir:[-.7,.28,-.35],hemiSky:"#ffc49a",hemiGround:"#8a6a4a",hemiIntensity:1,ground:"sand",trees:"palm",treeCount:170,mountains:"#6b4f6e",mountains2:"#9a6a78",exposure:1.05,water:!0,night:!1,clouds:10,cloudColor:"#ffd6c0",asphalt:[62,58,58],barrierStyle:"boards"},night:{skyTop:"#05060f",skyHorizon:"#1b1840",skyBottom:"#2a1f4a",sunGlow:"#6b5cff",fog:"#120f2a",fogNear:120,fogFar:600,sunColor:"#8fa2ff",sunIntensity:.9,sunDir:[.3,.8,-.4],hemiSky:"#5d6bb8",hemiGround:"#1a1426",hemiIntensity:.75,ground:"city",trees:"none",treeCount:0,mountains:null,exposure:1.1,water:!1,night:!0,clouds:0,cloudColor:"#ffffff",asphalt:[44,46,54],barrierStyle:"neon"}},Sd=7;var ro={L:1.05,a:.6,b:.45,h:.22,T:1.4,dmax:.4},wd=.13,rh=.09,qt={junior:{id:"junior",name:"Rotax Junior",short:"Junior",vmaxKmh:95,mass:145,pmax:12e3,flaunch:700,rpmMax:14e3,rpmClutch:4200,rpmIdle:2400,gears:null,frontBrakes:!1,brakeR:.75,brakeF:0,mu:1.62,cda:.5,iz:36,note:"\u041F\u0440\u044F\u043C\u043E\u0439 \u043F\u0440\u0438\u0432\u043E\u0434, \u043C\u044F\u0433\u043A\u0438\u0439 \u043C\u043E\u0442\u043E\u0440. \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C ~95 \u043A\u043C/\u0447, \u0442\u043E\u0440\u043C\u043E\u0437 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0437\u0430\u0434\u0438."},ok:{id:"ok",name:"OK Senior",short:"OK",vmaxKmh:115,mass:150,pmax:15500,flaunch:900,rpmMax:16e3,rpmClutch:5e3,rpmIdle:2600,gears:null,frontBrakes:!1,brakeR:.75,brakeF:0,mu:1.72,cda:.55,iz:38,note:"\u041F\u0440\u044F\u043C\u043E\u0439 \u043F\u0440\u0438\u0432\u043E\u0434, 16 000 \u043E\u0431/\u043C\u0438\u043D. \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C ~115 \u043A\u043C/\u0447, \u0442\u043E\u0440\u043C\u043E\u0437 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0437\u0430\u0434\u0438."},kz2:{id:"kz2",name:"KZ2 \xB7 \u043A\u043E\u0440\u043E\u0431\u043A\u0430",short:"KZ2",vmaxKmh:130,mass:175,pmax:27e3,flaunch:1300,rpmMax:14e3,rpmClutch:4500,rpmIdle:2600,gears:[58,77,93,107,119,130],frontBrakes:!0,brakeR:.38,brakeF:1,mu:1.78,cda:.56,iz:44,note:"\u0428\u0435\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447, \u0442\u043E\u0440\u043C\u043E\u0437\u0430 \u043D\u0430 \u043E\u0431\u0435 \u043E\u0441\u0438. \u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C ~130 \u043A\u043C/\u0447."}},An={ASPHALT:0,KERB:1,GRASS:2,PIT:3,mu:[1,.88,.55,1],roll:[.016,.035,.2,.016],name:["\u0430\u0441\u0444\u0430\u043B\u044C\u0442","\u043F\u043E\u0440\u0435\u0431\u0440\u0438\u043A","\u0442\u0440\u0430\u0432\u0430","\u043F\u0438\u0442-\u043B\u0435\u0439\u043D"]},En=(s,t,e)=>s<t?t:s>e?e:s,Ly=(s,t,e)=>{let n=En((e-s)/(t-s),0,1);return n*n*(3-2*n)};function Td(s,t,e){let n=Math.abs(s)/e,i=n<1?Math.sin(n*1.5707963):1-.22*(1-Math.exp(-(n-1)*2.2));return(s>0?-i:i)*t}function Ed(s){return s>1.015?0:En(.45+1*(s-.35),.45,1)}function ao(s){return{cls:s,x:0,y:0,z:0,h:0,u:0,v:0,w:0,delta:0,rpm:s.rpmIdle,gear:1,shiftT:0,ax:0,throttle:0,brake:0,steer:0,surface:0,lift:0,scrub:0,slipF:0,slipR:0,lock:!1,spin:!1,sliding:0,trackIdx:-1,s:0,d:0,lastS:0,progress:0,onKerb:0,inPit:!1,pitIdx:-1,wallHit:0,offT:0,boostT:0,boostPow:0,spinT:0,proj:{},pproj:{}}}function ah(s,t=1){let e=En(Math.abs(s)/28,0,1.2);return ro.dmax*(1-.72*t*e)}function Ny(s,t,e,n,i){let r=Math.max(0,s.u);if(!t.gears){let g=t.vmaxKmh/3.6,x=r/g,m=t.rpmClutch/t.rpmMax,p=e>.05?Math.max(x,m*(1+.25*e)):Math.max(x,t.rpmIdle/t.rpmMax);if(s.rpm+=(p*t.rpmMax-s.rpm)*Math.min(1,n*(x>m?30:8)),x>=1)return 0;let y=Ed(Math.max(x,m)),v=s.boostT>0?1+.6*s.boostPow:1;return e*Math.min(t.flaunch*v,t.pmax*y*v/Math.max(r,2))}let a=t.gears,o=g=>a[g-1]/3.6;if(s.shiftT>0&&(s.shiftT-=n),!i&&s.shiftT<=0){let g=r/o(s.gear);g>.975&&s.gear<a.length&&e>.2?(s.gear++,s.shiftT=.07):s.gear>1&&g<.58&&r/o(s.gear-1)<.93&&(s.gear--,s.shiftT=.05)}let l=r/o(s.gear),c=t.rpmClutch/t.rpmMax,h=s.gear===1&&e>.05?Math.max(l,c*(1+.3*e)):Math.max(l,t.rpmIdle/t.rpmMax);if(s.rpm+=(h*t.rpmMax-s.rpm)*Math.min(1,n*30),s.shiftT>0||l>=1)return 0;if(s.gear>1&&l<c*.8)return e*t.pmax*.12/Math.max(r,2);let u=Ed(Math.max(l,c)),d=s.boostT>0?1+.5*s.boostPow:1,f=t.flaunch*(1.25-s.gear*.12);return e*Math.min(f*d,t.pmax*u*d/Math.max(r,2))}function Cd(s,t){let e=s.cls;if(!e.gears||s.shiftT>0)return;let n=s.gear+t;n<1||n>e.gears.length||t<0&&Math.max(0,s.u)/(e.gears[n-1]/3.6)>1.04||(s.gear=n,s.shiftT=.07)}function oo(s,t,e,n){let i=s.cls,r=i.mass,{L:a,a:o,b:l,h:c,T:h}=ro,u=n?n.assist:1,d=!!(n&&n.stab),f=En(t.steer,-1,1);if(d){let ot=s.steerIn||0,ct=Math.abs(f)>Math.abs(ot)&&Math.sign(f)===Math.sign(ot||f);s.steerIn=ot+En(f-ot,-e*(ct?4.2:8),e*(ct?4.2:8)),f=s.steerIn}let g=ah(s.u,u);s.slipR>.9&&t.steer*s.w>0&&(g=Math.max(g,.28));let x=-f*g,m=3.4;s.delta+=En(x-s.delta,-m*e,m*e),s.steer=f,s.throttle+=En(t.throttle-s.throttle,-e*12,e*10),s.brake+=En(t.brake-s.brake,-e*14,e*9);let p=s.spinT>0,y=i.mu*An.mu[s.surface]*(p?.35:1),v=r*9.81*l/a,_=r*9.81*o/a,E=r*s.ax*c/a,w=Math.max(.15*r*9.81,v-E),A=Math.max(.15*r*9.81,_+E),R=s.u,b=s.v,M=s.w,I=Math.max(Math.abs(R),3),k=Math.atan2(b+o*M,I)-s.delta,N=Math.atan2(b-l*M,I),P=Ly(.07,.2,Math.abs(s.delta))*Math.min(1,I/5);s.lift=P;let H=1-.15*(w-v)/v,U=1-.15*(A-_)/_,$=y*(1-.12*P)*U,D=y*.84*H,V=$*A,J=D*w;s.stallT>0&&(s.stallT-=e);let Q=p||s.stallT>0?0:En(s.throttle,0,1),xt=En(s.brake,0,1),Ut=Ny(s,i,Q,e,n&&n.manual),Y=R>.05?1:0,et=Ut-xt*i.brakeR*i.mu*_*Y,ut=-xt*i.brakeF*i.mu*v*Y;if(d){let ot=Math.min(.8,Math.abs(Math.atan2(b-l*M,I))/rh),ct=V*Math.sqrt(1-ot*ot)*.95;et<-ct&&(et=-ct),et>ct&&(et=ct),ut<-J*.95&&(ut=-J*.95)}s.lock=!1,s.spin=!1;let lt=1,It=1;Math.abs(et)>V?et<0?(s.lock=!0,et=-.78*V,lt=.35):(s.spin=!0,et=.85*V,lt=.5):lt=Math.sqrt(Math.max(.02,1-(et/V)**2)),Math.abs(ut)>J?(ut=-.8*J,It=.35):ut&&(It=Math.sqrt(Math.max(.02,1-(ut/J)**2))),R<.3&&xt>0&&(et=0,ut=0);let Lt=Td(k,J,wd)*It,Mt=Td(N,V,rh)*lt,he=Math.abs(M)*h*.5/I,Wt=(1-P)*Math.min(1,he/.12);s.scrub=Wt;let me=.14*V*Wt,O=-Math.sign(M)*.2*V*h*.5*Wt,Ve=.5*1.2*i.cda*R*Math.abs(R),Xt=Math.abs(R)>.05?An.roll[s.surface]*r*9.81*Math.sign(R):0,Ft=Math.cos(s.delta),Et=Math.sin(s.delta),jt=et+ut*Ft-Lt*Et-Ve-Xt-me*(R>0?1:0),Ct=Mt+Lt*Ft+ut*Et,C=o*(Lt*Ft+ut*Et)-l*Mt+O,S=R+(jt/r+b*M)*e,G=b+(Ct/r-R*M)*e,K=M+C/i.iz*e;if(Math.abs(S)<2.5){let ot=1-Math.abs(S)/2.5;G*=Math.exp(-e*10*ot),K+=(S*Math.tan(s.delta)/a-K)*Math.min(1,e*12*ot)}if(S<0&&(S=Math.max(S,-1.5),Q<=0&&(S*=Math.exp(-e*6))),d&&S>3&&!p){let ot=.13+.12*(1-u),ct=Math.tan(ot)*S;Math.abs(G)>ct&&(G+=(Math.sign(G)*ct-G)*Math.min(1,e*10));let $t=S*Math.tan(s.delta)/(a*(1+(S/24)**2));K+=($t-K)*Math.min(1,e*2.2*(.6+.4*u));let st=y*9.81*1.15/S+.15;Math.abs(K)>st&&(K+=(Math.sign(K)*st-K)*Math.min(1,e*12))}p&&(s.spinT-=e,K+=(s.spinDir||1)*9*e*(s.spinT>.4?1:0)),s.ax+=(jt/r-s.ax)*Math.min(1,e*12),s.u=S,s.v=G,s.w=K,s.h+=K*e;let nt=Math.sin(s.h),j=Math.cos(s.h);s.vx=S*nt+G*j,s.vz=S*j-G*nt,s.x+=s.vx*e,s.z+=s.vz*e,s.boostT>0&&(s.boostT-=e,s.boostT<=0&&(s.boostPow=0)),s.slipF=Math.abs(k)/wd,s.slipR=Math.abs(N)/rh;let bt=Math.max(s.slipR-1.1,s.slipF-1.4,s.lock?1:0,s.spin?.8:0,0);s.sliding=Math.min(1,bt)*Math.min(1,I/8)}function lo(s,t,e){let n=0,i=t.project(s.x,s.z,s.trackIdx,s.y,s.proj);s.trackIdx=i.idx;let r=Math.abs(i.d),a=i.d<0?-1:1,o=i.i0,l=a<0?t.barL[o]:t.barR[o],c=t.pit;if(c&&(s.inPit||t.pitOpen[o]&&a===c.side&&r>t.half+1.2)){let u=t.projectPit(s.x,s.z,s.pitIdx,s.pproj);if(u&&Math.abs(u.d)<c.half+1.2&&u.dist<12)if(s.inPit=!0,s.pitIdx=u.i,r<t.half+.6&&(u.i<c.merge||u.i>c.M-c.merge))s.inPit=!1;else{let d=c.half-.7,f=u.d*c.side>0,g=u.i<c.merge||u.i>c.M-c.merge;if(Math.abs(u.d)>d&&(f||!g)){let x=c.nx[u.i],m=c.nz[u.i],p=Math.sign(u.d),y=Math.abs(u.d)-d;s.x-=x*p*y,s.z-=m*p*y,n=Rd(s,x*p,m*p,.25)}return s.surface=An.PIT,s.y=u.y,s.s=i.s,s.d=i.d,Ad(s,t,i.s),s.onKerb=0,n}else s.inPit=!1}let h=l-.8;if(r>h){let u=a,d=r-h;s.x-=i.nx*u*d,s.z-=i.nz*u*d,n=Rd(s,i.nx*u,i.nz*u,.3)}return s.s=i.s,s.d=i.d,s.y=i.y,s.trackHead=i.head,s.slope=i.slope,r<=t.half?(s.surface=An.ASPHALT,s.onKerb=0):r<=t.half+t.kerbW&&t.kerb[o]?(s.surface=An.KERB,s.onKerb=1):(s.surface=An.GRASS,s.onKerb=0),s.surface===An.GRASS?s.offT+=e:s.offT=0,Ad(s,t,i.s),n}function Ad(s,t,e){let n=t.deltaS(e,s.lastS);s.lastS=e,s.progress+=n}function Rd(s,t,e,n){let i=s.vx*t+s.vz*e;if(i<=0)return 0;let r=s.vx-t*i*(1+n),a=s.vz-e*i*(1+n),o=En(1-i*.05,.45,.97);r*=o,a*=o;let l=Math.sin(s.h),c=Math.cos(s.h);return s.u=r*l+a*c,s.v=r*c-a*l,s.w*=.5,s.vx=r,s.vz=a,i}function ks(s,t,e,n,i=null){let r=t.pointAt(e,n);s.x=r.x,s.z=r.z,s.y=r.y,s.h=i===null?t.headingAt(e):i,s.u=s.v=s.w=0,s.vx=s.vz=0,s.delta=0,s.ax=0,s.rpm=s.cls.rpmIdle,s.gear=1,s.shiftT=0,s.inPit=!1,s.pitIdx=-1;let a=t.project(s.x,s.z,-1,s.y,s.proj);s.trackIdx=a.idx,s.s=a.s,s.d=a.d,s.lastS=a.s,s.progress=t.deltaS(a.s,0),s.surface=0,s.offT=0}function Id(s,t,e=.62){let n=t.pit;if(!n)return ks(s,t,t.wrapS(-12),0);let i=Math.round(n.M*e);s.x=n.x[i],s.z=n.z[i],s.y=n.y[i];let r=Math.min(n.M,i+2);s.h=Math.atan2(n.x[r]-n.x[i],n.z[r]-n.z[i]),s.u=s.v=s.w=0,s.vx=s.vz=0,s.delta=0,s.ax=0,s.rpm=s.cls.rpmIdle,s.gear=1,s.shiftT=0;let a=t.project(s.x,s.z,-1,s.y,s.proj);s.trackIdx=a.idx,s.s=a.s,s.d=a.d,s.lastS=a.s,s.progress=t.deltaS(a.s,0),s.inPit=!0,s.pitIdx=i,s.surface=An.PIT}var Pt=(s,t,e)=>s<t?t:s>e?e:s,Mr=(s,t,e)=>s+(t-s)*e,gn=(s,t,e,n)=>Mr(s,t,1-Math.exp(-e*n));function si(s){for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s}var oh=(s,t,e,n)=>s+si(t-s)*(1-Math.exp(-e*n));function ze(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Zt(s){if(s==null||!isFinite(s))return"\u2013:\u2013\u2013.\u2013\u2013\u2013";let t=s<0;s=Math.abs(s);let e=Math.floor(s/60),n=s-e*60,i=e+":"+(n<10?"0":"")+n.toFixed(3);return t?"-"+i:i}function lh(s){return s==null||!isFinite(s)?"":(s>=0?"+":"\u2212")+Math.abs(s).toFixed(2)}function Pd(s){s.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){let e=Array.isArray(t.material)?t.material:[t.material];for(let n of e){for(let i in n){let r=n[i];r&&r.isTexture&&!r.userData.shared&&r.dispose()}n.dispose()}}})}var br=()=>typeof window!="undefined"&&("ontouchstart"in window||navigator.maxTouchPoints>0)&&matchMedia("(pointer: coarse)").matches;var Nd=4;function Dd(s){Nd=s}function Ce(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function Ie(s,{repeat:t=!0,srgb:e=!0,aniso:n=!0}={}){let i=new Ls(s);return t&&(i.wrapS=i.wrapT=lr),e&&(i.colorSpace=Ue),n&&(i.anisotropy=Nd),i.needsUpdate=!0,i}function Rn(s,t,e,n,i=1,r=1){let a=s.getImageData(0,0,t,e),o=ze(i),l=a.data;for(let c=0;c<l.length;c+=4){let h=(o()-.5)*n;l[c]+=h,l[c+1]+=h,l[c+2]+=h,l[c+3]=l[c+3]*r}s.putImageData(a,0,0)}function Ud(s,t=!1){let[i,r]=Ce(512,512);r.fillStyle=`rgb(${s[0]},${s[1]},${s[2]})`,r.fillRect(0,0,512,512);let a=ze(7);for(let c=0;c<90;c++){let h=a()*512,u=a()*512,d=10+a()*60,f=r.createRadialGradient(h,u,0,h,u,d),g=a()<.5?0:255;f.addColorStop(0,`rgba(${g},${g},${g},${.03+a()*.04})`),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.fillRect(h-d,u-d,d*2,d*2)}let o=r.createLinearGradient(0,0,512,0);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(.35,"rgba(0,0,0,0.10)"),o.addColorStop(.5,"rgba(0,0,0,0.04)"),o.addColorStop(.65,"rgba(0,0,0,0.10)"),o.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=o,r.fillRect(0,0,512,512),Rn(r,512,512,34,3),r.strokeStyle="rgba(20,20,20,0.35)",r.lineWidth=1;for(let c=0;c<14;c++){let h=a()*512,u=a()*512;r.beginPath(),r.moveTo(h,u);for(let d=0;d<6;d++)h+=(a()-.5)*30,u+=a()*22,r.lineTo(h,u);r.stroke()}let l=t?"rgba(235,235,255,0.92)":"rgba(242,242,236,0.95)";return r.fillStyle=l,r.fillRect(512*.018,0,512*.02,512),r.fillRect(512*(1-.038),0,512*.02,512),Rn(r,512,512,10,5),Ie(i)}function Sr(s){let[n,i]=Ce(512,512),r=ze(s.length*31);if(s==="grass"){i.fillStyle="#5a9a36",i.fillRect(0,0,512,512);for(let a=0;a<4;a++)i.fillStyle=a%2?"rgba(255,255,220,0.07)":"rgba(0,40,0,0.06)",i.fillRect(0,a*512/4,512,512/4);for(let a=0;a<3500;a++){let o=r()*512,l=r()*512,c=110+r()*80;i.fillStyle=`rgba(${40+r()*50},${c},${20+r()*30},${.25+r()*.35})`,i.fillRect(o,l,1+r()*2,2+r()*4)}for(let a=0;a<40;a++){let o=r()*512,l=r()*512,c=20+r()*50,h=i.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,`rgba(${r()<.5?"120,110,40":"20,70,20"},0.12)`),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(o-c,l-c,c*2,c*2)}Rn(i,512,512,18,11)}else if(s==="sand"){i.fillStyle="#d8b98a",i.fillRect(0,0,512,512);for(let a=0;a<60;a++){let o=r()*512,l=r()*512,c=20+r()*70,h=i.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,`rgba(${r()<.5?"255,235,200":"150,110,70"},0.15)`),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(o-c,l-c,c*2,c*2)}i.strokeStyle="rgba(120,90,50,0.10)";for(let a=0;a<512;a+=9){i.beginPath();for(let o=0;o<=512;o+=16)i.lineTo(o,a+Math.sin(o*.05+a)*3);i.stroke()}Rn(i,512,512,26,13)}else if(s==="city"){i.fillStyle="#23222c",i.fillRect(0,0,512,512);let a=64;for(let o=0;o<512;o+=a)for(let l=0;l<512;l+=a){let c=30+r()*12;i.fillStyle=`rgb(${c},${c},${c+8})`,i.fillRect(l+2,o+2,a-4,a-4)}Rn(i,512,512,20,17)}else if(s==="runoff-grass"){i.fillStyle="#4f8f30",i.fillRect(0,0,512,512);for(let a=0;a<3e3;a++)i.fillStyle=`rgba(${40+r()*40},${100+r()*80},${20+r()*30},0.4)`,i.fillRect(r()*512,r()*512,1+r()*2,2+r()*4);Rn(i,512,512,18,19)}return Ie(n)}function ch(s=!1){let[t,e]=Ce(64,256);e.fillStyle=s?"#ff2d6f":"#d42a22",e.fillRect(0,0,64,128),e.fillStyle=s?"#e8ecff":"#f2f2f2",e.fillRect(0,128,64,128);let n=e.createLinearGradient(0,0,64,0);return n.addColorStop(0,"rgba(0,0,0,0.25)"),n.addColorStop(.3,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,0.1)"),e.fillStyle=n,e.fillRect(0,0,64,256),Rn(e,64,256,16,23),Ie(t)}var Ld=[["\u0410\u041F\u0415\u041A\u0421","#ffd000","#15171c"],["\u0422\u0423\u0420\u0411\u041E\u2022\u041C\u0410\u0421\u041B\u041E","#e0322b","#ffffff"],["\u0428\u0418\u041D\u042B \u0413\u0420\u0418\u041F","#15171c","#ffd000"],["\u041A\u0410\u0420\u0422-\u041A\u041B\u0423\u0411 7","#1f6fe0","#ffffff"],["\u0420\u0415\u0417\u0418\u041D\u0410","#ffffff","#15171c"],["\u041D\u0418\u0422\u0420\u041E","#2e9e4b","#ffffff"],["\u041F\u0418\u0422-\u0421\u0422\u041E\u041F","#f07818","#15171c"],["\u041B\u0418\u041D\u0418\u042F \u0410\u041F\u0415\u041A\u0421\u0410","#8b3fd9","#ffffff"]];function Fd(s){let[n,i]=Ce(2048,128),r=Ld.length,a=2048/r;for(let o=0;o<r;o++){let[l,c,h]=Ld[o];s==="neon"?(i.fillStyle="#0c0b16",i.fillRect(o*a,0,a,128),i.fillStyle=o%2?"#ff2d9a":"#23e1ff",i.fillRect(o*a,6,a,5),i.fillRect(o*a,117,a,5),i.font='800 54px "Unbounded", "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor=o%2?"#ff2d9a":"#23e1ff",i.shadowBlur=16,i.fillStyle="#ffffff",i.fillText(l,o*a+a/2,128/2+3,a-30),i.shadowBlur=0):(i.fillStyle=c,i.fillRect(o*a,0,a,128),i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(o*a+a-3,0,3,128),i.font='800 56px "Unbounded", "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillStyle=h,i.fillText(l,o*a+a/2,128/2+3,a-36))}return Ie(n)}function Od(){let[s,t]=Ce(256,64),e=32;for(let n=0;n<2;n++)for(let i=0;i<8;i++)t.fillStyle=(i+n)%2?"#111":"#f4f4f4",t.fillRect(i*e,n*e,e,e);return Rn(t,256,64,18,29),Ie(s)}function Bd(){let[s,t]=Ce(128,256);t.clearRect(0,0,128,256),t.fillStyle="rgba(20,10,0,0.55)",t.fillRect(0,0,128,256);for(let e=0;e<2;e++){let n=40+e*128;t.beginPath(),t.moveTo(14,n+60),t.lineTo(64,n),t.lineTo(114,n+60),t.lineTo(114,n+92),t.lineTo(64,n+32),t.lineTo(14,n+92),t.closePath();let i=t.createLinearGradient(0,n,0,n+92);i.addColorStop(0,"#fff6b0"),i.addColorStop(1,"#ff8a00"),t.fillStyle=i,t.fill()}return Ie(s)}function zd(){let[s,t]=Ce(128,128),e=t.createLinearGradient(0,0,128,128);return e.addColorStop(0,"rgba(255,90,200,0.9)"),e.addColorStop(.5,"rgba(90,200,255,0.9)"),e.addColorStop(1,"rgba(255,230,90,0.9)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.fillStyle="rgba(255,255,255,0.18)",t.fillRect(8,8,112,112),t.strokeStyle="rgba(255,255,255,0.95)",t.lineWidth=8,t.strokeRect(6,6,116,116),t.font='900 84px "Unbounded", "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#fff",t.shadowColor="rgba(0,0,0,0.5)",t.shadowBlur=8,t.fillText("?",64,70),Ie(s,{repeat:!1})}function kd(s,t,e){let[n,i]=Ce(128,96);return i.fillStyle=t,i.fillRect(0,0,128,96),i.fillStyle=e,i.font='900 70px "Unbounded", "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(String(s),64,52,116),Ie(n,{repeat:!1})}function Hd(s){let[t,e]=Ce(128,256);e.fillStyle="#0c0d18",e.fillRect(0,0,128,256);let n=ze(s),i=["#ffd98a","#9fd8ff","#ffb3e6","#fff3c4"];for(let r=6;r<256;r+=14)for(let a=6;a<128;a+=14)n()<.3&&(e.fillStyle=i[Math.floor(n()*i.length)],e.globalAlpha=.35+n()*.45,e.fillRect(a,r,8,9));return e.globalAlpha=1,Ie(t)}function Gd(){let[s,t]=Ce(256,128),e=ze(41);for(let n=0;n<18;n++){let i=40+e()*176,r=50+e()*40,a=22+e()*34,o=t.createRadialGradient(i,r,0,i,r,a);o.addColorStop(0,"rgba(255,255,255,0.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(i-a,r-a,a*2,a*2)}return Ie(s,{repeat:!1})}function Vd(){let[s,t]=Ce(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ie(s,{repeat:!1,srgb:!1})}function Wd(){let[s,t]=Ce(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ie(s,{repeat:!1})}function Xd(){let[e,n]=Ce(512,128);n.fillStyle="#2b2f38",n.fillRect(0,0,512,128);let i=ze(77),r=["#e0322b","#ffd000","#1f6fe0","#ffffff","#2e9e4b","#f07818","#8b3fd9","#11a9c4","#222"];for(let a=0;a<4;a++)for(let o=4;o<512;o+=10+i()*4){let l=12+a*30+i()*4;n.fillStyle=r[Math.floor(i()*r.length)],n.fillRect(o,l+8,8,14),n.fillStyle=["#f1c9a5","#c68e5d","#8a5a3b","#f5d7bd"][Math.floor(i()*4)],n.beginPath(),n.arc(o+4,l+5,4,0,Math.PI*2),n.fill()}return Ie(e)}function hh(s=60){let[n,i]=Ce(512,512);i.fillStyle=`rgb(${s},${s+1},${s+3})`,i.fillRect(0,0,512,512);let r=ze(91);for(let a=0;a<16e3;a++){let o=r()<.5?20+r()*30:120+r()*60;i.fillStyle=`rgba(${o},${o},${o},${.08+r()*.12})`,i.fillRect(r()*512,r()*512,1+r()*1.5,1+r()*1.5)}for(let a=0;a<50;a++){let o=r()*512,l=r()*512,c=20+r()*70,h=i.createRadialGradient(o,l,0,o,l,c),u=r()<.6?255:0;h.addColorStop(0,`rgba(${u},${u},${u},${.025+r()*.03})`),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(o-c,l-c,c*2,c*2)}i.strokeStyle="rgba(25,25,28,0.35)",i.lineWidth=1.2;for(let a=0;a<6;a++){i.beginPath();let o=r()*512,l=r()*512;i.moveTo(o,l);for(let c=0;c<8;c++)o+=(r()-.5)*24,l+=r()*30,i.lineTo(o,l);i.stroke()}return i.fillStyle="rgba(236,236,230,0.9)",i.fillRect(512*.006,0,512*.012,512),i.fillRect(512*(1-.018),0,512*.012,512),Rn(i,512,512,12,93),Ie(n)}function qd(){let[e,n]=Ce(64,256);n.clearRect(0,0,64,256);let i=ze(97);for(let a=0;a<64;a++){let o=a/63,l=Math.pow(Math.sin(o*Math.PI),1.6)*.5;for(let c=0;c<256;c+=2){let h=l*(.7+i()*.5);n.fillStyle=`rgba(8,8,10,${h.toFixed(3)})`,n.fillRect(a,c,1,2)}}return Ie(e)}function $d(){let[s,t]=Ce(64,128);t.fillStyle="#7a7a7a",t.fillRect(0,0,64,128);for(let e=0;e<3;e++){let n=e*42.6,i=t.createLinearGradient(0,n,0,n+42);i.addColorStop(0,"#303030"),i.addColorStop(.2,"#b0b0b0"),i.addColorStop(.5,"#8c8c8c"),i.addColorStop(.8,"#b0b0b0"),i.addColorStop(1,"#2a2a2a"),t.fillStyle=i,t.fillRect(0,n+1,64,40),t.fillStyle="rgba(0,0,0,0.6)",t.fillRect(0,n,64,2)}return Rn(t,64,128,14,99),Ie(s,{repeat:!1})}function uh(){let[s,t]=Ce(256,64);t.fillStyle="#b9b7b0",t.fillRect(0,0,256,64);let e=ze(101);for(let n=0;n<1400;n++){let i=150+e()*70;t.fillStyle=`rgba(${i},${i},${i-6},0.4)`,t.fillRect(e()*256,e()*64,2,2)}t.fillStyle="rgba(0,0,0,0.25)";for(let n=0;n<256;n+=64)t.fillRect(n,0,2,64);for(let n=0;n<256;n+=32)t.fillStyle=n/32%2?"#d0302a":"#f0f0f0",t.fillRect(n,0,32,8);return Rn(t,256,64,10,103),Ie(s)}function Yd(s){let[t,e]=Ce(128,128);e.fillStyle=s,e.fillRect(0,0,128,128);for(let n=0;n<8;n++)e.fillStyle=n%2?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.08)",e.fillRect(n*16,0,16,128);return Ie(t,{repeat:!1})}function Zd(s,t){let[e,n]=Ce(128,64);return n.fillStyle="#16181d",n.fillRect(0,0,128,64),n.fillStyle=t,n.fillRect(0,0,128,10),n.fillStyle="#ffffff",n.font='900 34px "Unbounded", "Arial Black", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(s,64,38),Ie(e,{repeat:!1})}function ke(s,t,{vRepeat:e=10,uA:n=0,uB:i=1,from:r=0,to:a=null,wall:o=!1,flipU:l=!1}={}){let c=s.N,h=[],u=[],d=[],f=a===null?c:a-r;for(let x=0;x<=f;x++){let m=(r+x)%c,[p,y,v,_]=t(m),E=s.px[m],w=s.pz[m],A=s.nx[m],R=s.nz[m];h.push(E+A*p,y,w+R*p,E+A*v,_,w+R*v);let b=(r+x)*s.ds;if(o){let M=(l?-b:b)/e;u.push(M,0,M,1)}else u.push(n,b/e,i,b/e)}for(let x=0;x<f;x++){let m=x*2,p=m+1,y=m+2,v=m+3;d.push(m,p,y,p,v,y)}let g=new Jt;return g.setAttribute("position",new Dt(h,3)),g.setAttribute("uv",new Dt(u,2)),g.setIndex(d),g.computeVertexNormals(),g}function Cn(s,t,e,n,i=0){let r=t.pointAt(t.wrapS(e),n);s.position.set(r.x,r.y+i,r.z);let a=t.idx(Math.round(e/t.ds));return s.rotation.set(-Math.atan(t.slope[a]),t.headingAt(t.wrapS(e)),0,"YXZ"),s}function Dy(s,t,e){let n=new fe,i=s.N,r=s.half,a=s.barrier,o=e!=="low",l=Ud(t.asphalt,t.night),c=new it(ke(s,N=>[-r,s.py[N],r,s.py[N]],{vRepeat:14}),new Rt({map:l,roughness:t.night?.6:.88,metalness:0}));c.receiveShadow=o,n.add(c);let h=t.ground==="grass"?"runoff-grass":t.ground,u=Sr(h),d=new Rt({map:u,roughness:1,color:t.ground==="city"?10132136:16777215});for(let N of[-1,1]){let P=ke(s,U=>N<0?[-a-.3,s.py[U]-.01,-r,s.py[U]-.01]:[r,s.py[U]-.01,a+.3,s.py[U]-.01],{vRepeat:10,uA:0,uB:(a-r)/10}),H=new it(P,d);H.receiveShadow=o,n.add(H)}let f=new Rt({map:u,roughness:1,color:t.ground==="city"?7829386:14540253}),g=0;for(let N=0;N<i;N++)g=Math.max(g,s.py[N]);if(g>.3)for(let N of[-1,1]){let P=ke(s,U=>{let $=s.py[U],D=1.5+$*1.8;return N<0?[-a-.3-D,-.25,-a-.3,$-.01]:[a+.3,$-.01,a+.3+D,-.25]},{vRepeat:10}),H=new it(P,f);H.receiveShadow=o,n.add(H)}let x=ch(t.night),m=new Rt({map:x,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),p=new Uint8Array(i);for(let N=0;N<i;N++)if(Math.abs(s.curv[N])>1/55)for(let P=-10;P<=10;P++)p[(N+P+i)%i]=1;let y=[],v=p.indexOf(0);if(v<0)y.push([0,i]);else{let N=0;for(;N<i;){let P=(v+N)%i;if(p[P]){let H=0;for(;N+H<i&&p[(v+N+H)%i];)H++;y.push([P,H]),N+=H}else N++}}for(let[N,P]of y)if(!(P<4))for(let H of[-1,1]){let U=ke(s,D=>{let V=s.py[D];return H<0?[-r-1.1,V+.025,-r+.35,V+.045]:[r-.35,V+.045,r+1.1,V+.025]},{from:N,to:N+P,vRepeat:3}),$=new it(U,m);$.receiveShadow=o,n.add($)}let _=Fd(t.barrierStyle),E=new Rt({map:_,roughness:.6,side:Fe,emissive:t.night?16777215:0,emissiveMap:t.night?_:null,emissiveIntensity:t.night?.9:0}),w=new Rt({color:t.night?1710630:15263976,roughness:.5}),A=new Rt({color:2764083,roughness:.6}),R=1;for(let N of[-1,1]){let P=N*(a+.15),H=ke(s,V=>[P,s.py[V]-.3,P,s.py[V]+R],{vRepeat:32,wall:!0,flipU:N>0}),U=new it(H,E);U.castShadow=o,U.receiveShadow=o,n.add(U);let $=ke(s,V=>N<0?[P-.35,s.py[V]+R,P+.05,s.py[V]+R]:[P-.05,s.py[V]+R,P+.35,s.py[V]+R],{vRepeat:10});n.add(new it($,w));let D=ke(s,V=>[P+N*.3,s.py[V]-.3,P+N*.3,s.py[V]+R],{vRepeat:10,wall:!0});n.add(new it(D,A))}if(t.night)for(let N of[-1,1]){let P=N*(a+.15),H=ke(s,U=>N<0?[P-.06,s.py[U]+R+.02,P+.06,s.py[U]+R+.02]:[P-.06,s.py[U]+R+.02,P+.06,s.py[U]+R+.02],{vRepeat:10});n.add(new it(H,new te({color:N<0?16723354:2351615})))}let b=Jd(n,s,t,o,a),M=[],I=Bd(),k=new te({map:I,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-3});I.repeat.set(1,2);for(let[N,P]of s.def.boostPads||[]){let H=N*s.length,U=new it(new Te(3.4,6).rotateX(-Math.PI/2).rotateY(Math.PI),k);Cn(U,s,H,P,.02),U.renderOrder=1,n.add(U),M.push({s:H,d:P,len:6,w:3.4})}return{group:n,pads:M,setLights(N,P=!1){b.forEach((H,U)=>{P?H.color.set(1703770):H.color.set(U<N?16718354:2229252)})},update(N){I.offset.y-=N*1.6}}}function Jd(s,t,e,n,i){let r=new it(new Te(t.roadWidth,2.2).rotateX(-Math.PI/2),new Rt({map:Od(),roughness:.8,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}));r.material.map.repeat.set(t.roadWidth/8,1),Cn(r,t,0,0,.012),r.receiveShadow=n,s.add(r);let a=new te({color:15790320,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});for(let m=0;m<8;m++){let{s:p,d:y}=dh(t,m),v=new it(new Te(2,.18).rotateX(-Math.PI/2),a);Cn(v,t,p+1.6,y,.012),s.add(v);for(let _ of[-1,1]){let E=new it(new Te(.16,.9).rotateX(-Math.PI/2),a);Cn(E,t,p+1.2,y+_*.92,.012),s.add(E)}}let o=new fe,l=new Rt({color:e.night?2236974:3159100,roughness:.5,metalness:.4}),c=i+1.2;for(let m of[-1,1]){let p=new it(new re(.6,7,.6),l);p.position.set(m*c,3.5,0),p.castShadow=n,o.add(p)}let h=new it(new re(c*2+.6,1.4,.7),l);h.position.set(0,6.6,0),h.castShadow=n,o.add(h);let u=new it(new Te(c*1.2,1.1),new te({map:Uy(),toneMapped:!1}));u.position.set(0,6.6,-.36),u.rotation.y=Math.PI;let d=u.clone();d.position.z=.36,d.rotation.y=0,o.add(u,d);let f=new it(new re(4.2,1.1,.4),new Rt({color:723725,roughness:.4}));f.position.set(0,5.35,-.1),o.add(f);let g=[],x=new Ti(.22,16);for(let m=0;m<5;m++){let p=new te({color:2229252,toneMapped:!1});g.push(p);for(let y=0;y<2;y++){let v=new it(x,p);v.position.set(-1.6+m*.8,5.6-y*.5,-.31),v.rotation.y=Math.PI,o.add(v)}}return Cn(o,t,0,0,0),o.rotation.x=0,s.add(o),g}function dh(s,t){let e=Math.floor(t/2),n=t%2===0?-1:1;return{s:s.wrapS(-6-e*Sd-t%2*3.5),d:n*2.6}}function Uy(){let s=document.createElement("canvas");s.width=1024,s.height=96;let t=s.getContext("2d");t.fillStyle="#15171c",t.fillRect(0,0,1024,96);let e=24;for(let i=0;i<4;i++)for(let r=0;r<6;r++)t.fillStyle=(r+i)%2?"#f4f4f4":"#15171c",t.fillRect(r*e,i*e,e,e),t.fillRect(1024-(r+1)*e,i*e,e,e);t.fillStyle="#ffd000",t.font='900 58px "Unbounded", "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("\u0421\u0422\u0410\u0420\u0422 \u2022 \u0424\u0418\u041D\u0418\u0428",512,52,760);let n=new Ls(s);return n.colorSpace=Ue,n}function jd(s,t,e){return s.def.fun?Dy(s,t,e):Oy(s,t,e)}function Fy(s,t,e,n,i=60){let r=s.N,a=1/0;for(let o=0;o<r;o+=2){let l=Math.abs(o-n);if(l=Math.min(l,r-l),l<i)continue;let c=t-s.px[o],h=e-s.pz[o],u=c*c+h*h;u<a&&(a=u)}return Math.sqrt(a)}function Kd(s,t,e,n,i,r,a=!1){let o=[],l=[],c=[];for(let u=0;u<=s.M;u++)o.push(s.x[u]+s.nx[u]*t,s.y[u]+n,s.z[u]+s.nz[u]*t,s.x[u]+s.nx[u]*e,s.y[u]+i,s.z[u]+s.nz[u]*e),a?l.push(u/r,0,u/r,1):l.push(0,u/r,1,u/r);for(let u=0;u<s.M;u++){let d=u*2;c.push(d,d+1,d+2,d+1,d+3,d+2)}let h=new Jt;return h.setAttribute("position",new Dt(o,3)),h.setAttribute("uv",new Dt(l,2)),h.setIndex(c),h.computeVertexNormals(),h}function Oy(s,t,e){let n=new fe,i=s.N,r=s.half,a=e!=="low",o=s.pit,l=new Uint8Array(i),c=new Float32Array(i);for(let P=0;P<i;P++)c[P]=s.hasBridge?Fy(s,s.px[P],s.pz[P],P):999,s.hasBridge&&s.py[P]>2.5&&c[P]<s.barrier*2+6&&(l[P]=1);let h=new it(ke(s,P=>[-r,s.py[P],r,s.py[P]],{vRepeat:11}),new Rt({map:hh(t.asphaltTone||62),roughness:.9,metalness:0}));h.receiveShadow=a,n.add(h);{let P=[],H=[],U=[];for(let J=0;J<=i;J++){let Q=J%i,xt=s.lx[Q],Ut=s.lz[Q],Y=s.py[Q]+.012;P.push(xt-s.nx[Q]*1.15,Y,Ut-s.nz[Q]*1.15,xt+s.nx[Q]*1.15,Y,Ut+s.nz[Q]*1.15),H.push(0,J*s.ds/9,1,J*s.ds/9)}for(let J=0;J<i;J++){let Q=J*2;U.push(Q,Q+1,Q+2,Q+1,Q+3,Q+2)}let D=new Jt;D.setAttribute("position",new Dt(P,3)),D.setAttribute("uv",new Dt(H,2)),D.setIndex(U);let V=new it(D,new te({map:qd(),transparent:!0,opacity:.75,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}));V.renderOrder=1,n.add(V)}let u=Sr("runoff-grass"),d=new Rt({map:u,roughness:1,color:t.grassTint||16777215});for(let P of[-1,1]){let H=ke(s,$=>{if(l[$])return P<0?[-r,s.py[$]-.02,-r,s.py[$]-.02]:[r,s.py[$]-.02,r,s.py[$]-.02];let D=P<0?s.barL[$]:s.barR[$];return P<0?[-D-.9,s.py[$]-.012,-r,s.py[$]-.012]:[r,s.py[$]-.012,D+.9,s.py[$]-.012]},{vRepeat:8,uA:0,uB:.8}),U=new it(H,d);U.receiveShadow=a,n.add(U)}let f=0;for(let P=0;P<i;P++)f=Math.max(f,s.py[P]);if(f>.3){let P=new Rt({map:u,roughness:1,color:13620928});for(let H of[-1,1]){let U=ke(s,D=>{let V=s.py[D],J=1.5+V*1.8,Q=(H<0?s.barL[D]:s.barR[D])+.9;return l[D]||c[D]<s.barrier*2+J+1?H<0?[-Q,V-.02,-Q,V-.02]:[Q,V-.02,Q,V-.02]:H<0?[-Q-J,-.2,-Q,V-.013]:[Q,V-.013,Q+J,-.2]},{vRepeat:10}),$=new it(U,P);$.receiveShadow=a,n.add($)}}let g=new Rt({map:ch(!1),roughness:.65,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),x=[],m=s.kerb.indexOf(0);if(m<0)x.push([0,i]);else{let P=0;for(;P<i;){let H=(m+P)%i;if(s.kerb[H]){let U=0;for(;P+U<i&&s.kerb[(m+P+U)%i];)U++;x.push([H,U]),P+=U}else P++}}for(let[P,H]of x)if(!(H<4))for(let U of[-1,1]){let $=ke(s,V=>{let J=s.py[V];return U<0?[-r-s.kerbW,J+.02,-r+.25,J+.04]:[r-.25,J+.04,r+s.kerbW,J+.02]},{from:P,to:P+H,vRepeat:2.4}),D=new it($,g);D.receiveShadow=a,n.add(D)}let p=[],y=P=>{if(!o)return!1;let H=s.deltaS(P,s.wrapS(-o.before));return(H<0?H+s.length:H)<=o.span+6};for(let P=0;P<s.length;P+=.64){let H=s.sIdx(P);if(!l[H])for(let U of[-1,1]){if(o&&U===o.side&&y(P))continue;let $=U<0?s.barL[H]:s.barR[H],D=s.pointAt(P,U*($+.35));p.push([D.x,D.y,D.z,P])}}let v=new Me(.31,.31,.72,12,1).translate(0,.36,0),_=new Rt({map:$d(),roughness:.95,color:16777215}),E=new tn(v,_,p.length),w=new ye,A=new ft(2894892),R=new ft(15921906),b=new ft(13642276),M=new ft(2776016);if(p.forEach(([P,H,U,$],D)=>{w.position.set(P,H-.05,U),w.rotation.set(0,D*1.7%6.28,0),w.updateMatrix(),E.setMatrixAt(D,w.matrix);let V=Math.floor($/6)%7;E.setColorAt(D,V===0?R:V===3?b:V===5?M:A)}),E.castShadow=e==="high",E.receiveShadow=a,n.add(E),o){let P=new it(Kd(o,-o.half,o.half,-.006,-.006,11),new Rt({map:hh((t.asphaltTone||62)+6),roughness:.9,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));P.receiveShadow=a,n.add(P);let H=new te({color:15921906,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),U=new it(Kd(o,o.side*(o.half-.25),o.side*(o.half-.1),.004,.004,5),H);n.add(U);let $=new Rt({map:uh(),roughness:.8,side:Fe}),D=s.sIdx(-o.before+o.merge+6),V=Math.round((o.span-2*o.merge-12)/s.ds),J=o.side*(r+3.2+.15),Q=ke(s,Mt=>[J,s.py[Mt]-.05,J,s.py[Mt]+.95],{from:D,to:D+V,vRepeat:8,wall:!0}),xt=new it(Q,$);xt.castShadow=a,xt.receiveShadow=a,n.add(xt);let Ut=ke(s,Mt=>[J-.2,s.py[Mt]+.95,J+.2,s.py[Mt]+.95],{from:D,to:D+V,vRepeat:8});n.add(new it(Ut,new Rt({color:14210767,roughness:.8})));let Y=["#d0302a","#1f6fe0","#f5c518","#2e9e4b","#f2f2f2","#8b3fd9","#f07818","#11a9c4"],et=new on(2.6,1.1,4,1).rotateY(Math.PI/4),ut=new Me(.05,.05,2.4,5),lt=new Rt({color:14540253,metalness:.6,roughness:.4}),It=new Rt({color:3817287,roughness:.6}),Lt=0;for(let Mt=o.merge+4;Mt<o.M-o.merge-4;Mt+=8){let he=o.nx[Mt],Wt=o.nz[Mt],me=o.x[Mt]+he*o.side*(o.half+3.2),O=o.z[Mt]+Wt*o.side*(o.half+3.2),Ve=o.y[Mt],Xt=Math.atan2(o.x[Math.min(o.M,Mt+1)]-o.x[Mt],o.z[Math.min(o.M,Mt+1)]-o.z[Mt]),Ft=new fe,Et=new it(et,new Rt({map:Yd(Y[Lt%Y.length]),roughness:.8}));Et.position.y=2.9,Et.castShadow=a,Ft.add(Et);for(let[Ct,C]of[[-1.75,-1.75],[1.75,-1.75],[-1.75,1.75],[1.75,1.75]]){let S=new it(ut,lt);S.position.set(Ct,1.2,C),Ft.add(S)}let jt=new it(new re(1.4,.5,.9),It);jt.position.set(.4,.25,.6),jt.castShadow=a,Ft.add(jt),Ft.position.set(me,Ve,O),Ft.rotation.y=Xt,n.add(Ft),Lt++}}if(s.hasBridge){let P=new Rt({map:uh(),roughness:.85,side:Fe}),H=new Rt({color:10131599,roughness:.9,side:Fe}),U=[],$=-1;for(let D=0;D<=i;D++){let V=D<i&&l[D];V&&$<0&&($=D),!V&&$>=0&&(U.push([$,D-$]),$=-1)}for(let[D,V]of U){for(let Q of[-1,1]){let xt=Q*(r+.7);n.add(new it(ke(s,Y=>[xt,s.py[Y]-.1,xt,s.py[Y]+1],{from:D,to:D+V,vRepeat:8,wall:!0}),P));let Ut=Q*(r+.95);n.add(new it(ke(s,Y=>[Ut,s.py[Y]-.8,Ut,s.py[Y]+1],{from:D,to:D+V,vRepeat:8,wall:!0}),P))}n.add(new it(ke(s,Q=>[-r-.95,s.py[Q]-.8,r+.95,s.py[Q]-.8],{from:D,to:D+V,vRepeat:8}),H));let J=new re(.8,1,.8);for(let Q=0;Q<V;Q+=3){let xt=(D+Q)%i;if(c[xt]>s.barrier+1.2&&c[xt]<s.barrier+4)for(let Y of[-1,1]){let et=s.pointAt(xt*s.ds,Y*(r-.2)),ut=Math.max(.5,et.y-.8),lt=new it(J,P);lt.scale.y=ut,lt.position.set(et.x,ut/2,et.z),lt.castShadow=a,n.add(lt)}}}}let I=Jd(n,s,t,a,s.barrier),k=new te({color:16053492,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),N=o?-o.side:1;return[["S2","#3ddc84"],["S3","#b36bff"]].forEach(([P,H],U)=>{let $=s.sectorS[U+1],D=new it(new Te(s.roadWidth,.3).rotateX(-Math.PI/2),k);Cn(D,s,$,0,.014),n.add(D);let V=s.sIdx($),J=N<0?s.barL[V]:s.barR[V],Q=new fe,xt=new it(new Te(1.8,.9),new te({map:Zd(P,H),side:Fe}));xt.position.y=2.4;let Ut=new it(new Me(.06,.06,2.4,6),new Rt({color:7829367,metalness:.5}));Ut.position.y=1.2,Q.add(xt,Ut),Cn(Q,s,$,N*(J+1.4),0),Q.rotation.x=0,Q.rotation.y+=Math.PI/2*N,n.add(Q)}),{group:n,pads:[],setLights(P,H=!1){I.forEach((U,$)=>{H?U.color.set(1703770):U.color.set($<P?16718354:2229252)})},update(){}}}function wr(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Jt,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Qd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=Qd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Qd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new _e(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}var By=`
varying vec3 vDir;
void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,zy=`
uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 glow; uniform vec3 sunDir; uniform float stars;
varying vec3 vDir;
float hash(vec3 p){ p = fract(p*0.3183099+0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
void main(){
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.4));
  float sd = max(dot(d, normalize(sunDir)), 0.0);
  col += glow * (pow(sd, 6.0) * 0.35 + pow(sd, 60.0) * 0.6);
  col += glow * smoothstep(0.9993, 0.9997, sd) * 3.0;
  if (stars > 0.0 && h > 0.05) {
    vec3 q = floor(d * 380.0);
    float s = hash(q);
    col += vec3(step(0.9975, s)) * (0.6 + 0.4*hash(q+1.7)) * stars * smoothstep(0.05, 0.3, h);
  }
  gl_FragColor = vec4(col, 1.0);
}`,ky=`
varying vec3 vW;
void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,Hy=`
uniform float time; uniform vec3 deep; uniform vec3 shallow; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 sunDir; uniform vec3 sunCol;
uniform vec3 fogColor; uniform float fogNear; uniform float fogFar;
varying vec3 vW;
float hh(vec2 p){
  return sin(p.x*0.09+time*0.9)*0.5 + sin(p.y*0.12-time*1.1)*0.5 + sin((p.x+p.y)*0.23+time*1.6)*0.25 + sin((p.x-p.y)*0.41-time*2.3)*0.12 + sin(p.x*0.8+p.y*0.6+time*3.1)*0.05;
}
void main(){
  vec2 p = vW.xz;
  float e = 0.6;
  vec3 n = normalize(vec3(hh(p-vec2(e,0.0))-hh(p+vec2(e,0.0)), 2.2, hh(p-vec2(0.0,e))-hh(p+vec2(0.0,e))));
  vec3 v = normalize(cameraPosition - vW);
  float fr = pow(1.0 - max(dot(n, v), 0.0), 4.0);
  vec3 r = reflect(-v, n);
  vec3 sky = mix(skyHor, skyTop, clamp(r.y*1.5, 0.0, 1.0));
  vec3 col = mix(deep, sky, 0.25 + fr*0.7);
  col += sunCol * pow(max(dot(r, normalize(sunDir)), 0.0), 180.0) * 3.0;
  col += sunCol * pow(max(dot(r, normalize(sunDir)), 0.0), 12.0) * 0.15;
  float dist = length(cameraPosition - vW);
  float f = smoothstep(fogNear, fogFar, dist);
  gl_FragColor = vec4(mix(col, fogColor, f), 1.0);
}`;function tf(s,t,e,n){let i={updaters:[]},r=n!=="low",a=ze(t.def.id.length*977+t.N);s.background=new ft(e.fog),s.fog=new Ra(e.fog,e.fogNear,e.fogFar);let o=new L(...e.sunDir).normalize(),l=new it(new ln(1500,32,16),new pe({vertexShader:By,fragmentShader:zy,side:$e,depthWrite:!1,fog:!1,uniforms:{top:{value:new ft(e.skyTop)},horizon:{value:new ft(e.skyHorizon)},bottom:{value:new ft(e.skyBottom)},glow:{value:new ft(e.sunGlow)},sunDir:{value:o},stars:{value:e.night?1:0}}}));l.renderOrder=-10,l.frustumCulled=!1,s.add(l),i.sky=l;let c=new Xa(e.hemiSky,e.hemiGround,e.hemiIntensity);s.add(c);let h=new qa(e.sunColor,e.sunIntensity);if(h.position.copy(o).multiplyScalar(150),r){h.castShadow=!0;let v=n==="high"?2048:1024;h.shadow.mapSize.set(v,v);let _=h.shadow.camera;_.left=-55,_.right=55,_.top=55,_.bottom=-55,_.near=10,_.far=400,h.shadow.bias=-4e-4,h.shadow.normalBias=.03}s.add(h,h.target),i.sun=h,i.sunDir=o;let u=t.bounds(0),d=(u.minX+u.maxX)/2,f=(u.minZ+u.maxZ)/2,g=(u.maxX-u.minX)/2,x=(u.maxZ-u.minZ)/2;i.center=new L(d,0,f),i.radius=Math.max(g,x);let m=Sr(e.ground);if(e.water){let v=new it(new Ti(1,96).rotateX(-Math.PI/2),new Rt({map:m,roughness:1})),_=g+70,E=x+70;v.scale.set(_,1,E),v.position.set(d,-.02,f),m.repeat.set(_/12,E/12),v.receiveShadow=r,s.add(v);let w=new it(new Ha(.97,1.06,96).rotateX(-Math.PI/2),new Rt({color:11044962,roughness:.4}));w.scale.set(_,1,E),w.position.set(d,-.08,f),s.add(w);let A=new it(new Te(4e3,4e3).rotateX(-Math.PI/2),new pe({vertexShader:ky,fragmentShader:Hy,uniforms:{time:{value:0},deep:{value:new ft("#1d4b6b")},shallow:{value:new ft("#2f8a9a")},skyTop:{value:new ft(e.skyTop)},skyHor:{value:new ft(e.skyHorizon)},sunDir:{value:o},sunCol:{value:new ft(e.sunGlow)},fogColor:{value:new ft(e.fog)},fogNear:{value:e.fogNear},fogFar:{value:e.fogFar}}}));A.position.set(d,-.35,f),s.add(A),i.updaters.push((R,b)=>{A.material.uniforms.time.value=b}),i.islandRx=_,i.islandRz=E}else{let v=new it(new Te(3e3,3e3).rotateX(-Math.PI/2),new Rt({map:m,roughness:1,color:e.grassTint||16777215}));m.repeat.set(3e3/18,3e3/18),v.position.set(d,-.03,f),v.receiveShadow=r,s.add(v)}if(e.mountains){let v=(w,A,R,b,M)=>{let I=ze(M),k=160,N=[],P=[];for(let D=0;D<=k;D++){let V=D/k*Math.PI*2,J=A+Math.sin(V*3+M)*R*.3+Math.sin(V*7+M*2)*R*.25+I()*R*.45;P.push(J)}P[k]=P[0];let H=[];for(let D=0;D<=k;D++){let V=D/k*Math.PI*2,J=d+Math.cos(V)*w,Q=f+Math.sin(V)*w;N.push(J,-20,Q,J,P[D],Q)}for(let D=0;D<k;D++){let V=D*2;H.push(V,V+2,V+1,V+1,V+2,V+3)}let U=new Jt;U.setAttribute("position",new Dt(N,3)),U.setIndex(H);let $=new it(U,new te({color:b,side:Fe,fog:!0}));return $.renderOrder=-5,$},_=v(1150,110,160,e.mountains2,3);_.material.fog=!1,_.material.color.lerp(new ft(e.skyHorizon),.35),s.add(_);let E=v(780,40,90,e.mountains,11);E.material.fog=!1,E.material.color.lerp(new ft(e.fog),.2),s.add(E)}if(e.clouds){let v=Gd();for(let _=0;_<e.clouds;_++){let E=new fr({map:v,color:e.cloudColor,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}),w=new Ia(E),A=a()*Math.PI*2,R=350+a()*650;w.position.set(d+Math.cos(A)*R,120+a()*160,f+Math.sin(A)*R);let b=140+a()*180;w.scale.set(b,b*.45,1),w.renderOrder=-4,s.add(w);let M=1+a()*2;i.updaters.push(I=>{w.position.x+=M*I})}}let p=(v,_,E)=>t.distToCenter(v,_,3)>t.barrier+E,y=(v,_)=>1.5+t.project(v,_,-1).y*1.8;if(i.stands=Vy(s,t,e,r,a),i.paddock=e.real?Gy(s,t,r,a):null,e.trees!=="none"&&e.treeCount){let v=Math.round(e.treeCount*(n==="low"?.5:1)),_=[],E=0;for(;_.length<v&&E<v*30;){E++;let w,A;if(e.water){let b=a()*Math.PI*2,M=Math.sqrt(a())*.95;w=d+Math.cos(b)*M*(i.islandRx-8),A=f+Math.sin(b)*M*(i.islandRz-8)}else if(w=d+(a()*2-1)*(g+260),A=f+(a()*2-1)*(x+260),Math.sin(w*.021)*Math.cos(A*.017)+Math.sin((w+A)*.011)<-.2&&a()<.8)continue;let R=t.distToCenter(w,A,3);R<t.barrier+5||R<t.barrier+y(w,A)+4||i.stands&&i.stands.box.distanceToPoint(new L(w,1,A))<6||i.paddock&&i.paddock.box.distanceToPoint(new L(w,1,A))<8||_.push([w,A])}fh(s,_,e.trees,r&&n==="high",a)}return e.night&&Wy(s,t,e,a,p,i,n),i.follow=v=>{h.position.set(v.x+o.x*150,v.y+o.y*150,v.z+o.z*150),h.target.position.copy(v),l.position.copy(v)},i}function fh(s,t,e,n,i){let r=new ye;if(e==="palm"){let f=new Me(.18,.28,7,7,6);f.translate(0,3.5,0);let g=f.attributes.position;for(let _=0;_<g.count;_++){let E=g.getY(_);g.setX(_,g.getX(_)+(E/7)**2*1.2)}f.computeVertexNormals();let x=[];for(let _=0;_<7;_++){let E=new on(.55,3.8,4,1);E.scale(1,1,.18),E.rotateZ(-Math.PI/2-.35),E.translate(1.7,-.3,0),E.rotateY(_/7*Math.PI*2),E.translate(1.2,7,0),x.push(E)}let m=wr(x),p=new tn(f,new Rt({color:9071176,roughness:.9}),t.length),y=new tn(m,new Rt({color:16777215,roughness:.8,flatShading:!0}),t.length),v=new ft;t.forEach(([_,E],w)=>{let A=.8+i()*.5;r.position.set(_,0,E),r.rotation.set(0,i()*Math.PI*2,0),r.scale.set(A,A,A),r.updateMatrix(),p.setMatrixAt(w,r.matrix),y.setMatrixAt(w,r.matrix),v.setHSL(.25+i()*.08,.5,.28+i()*.1),y.setColorAt(w,v)}),p.castShadow=y.castShadow=n,s.add(p,y);return}if(e==="mixed"){let f=[],g=[];t.forEach((x,m)=>(m%3===0?f:g).push(x)),fh(s,f,"pine",n,i),fh(s,g,"broadleaf",n,i);return}let a=e==="pine",o=e==="cypress",l=new Me(.22,.32,2.4,6).translate(0,1.2,0),c;if(o){let f=new Me(.2,1,7.5,8,3).translate(0,5.6,0),g=f.attributes.position;for(let x=0;x<g.count;x++){let m=g.getY(x),p=1-Math.pow((m-5.6)/3.75,2)*.25;g.setX(x,g.getX(x)*p),g.setZ(x,g.getZ(x)*p)}f.computeVertexNormals(),c=f}else if(a)c=wr([new on(2.2,3.5,7).translate(0,3.4,0),new on(1.7,3,7).translate(0,5,0),new on(1.1,2.4,7).translate(0,6.4,0)]);else{let f=new Us(2.1,1).translate(0,4,0),g=new Us(1.5,1).translate(.9,4.9,.4),x=new Us(1.4,1).translate(-.8,4.6,-.5);c=wr([f,g,x])}let h=new tn(l,new Rt({color:7031343,roughness:1}),t.length),u=new tn(c,new Rt({color:16777215,roughness:.85,flatShading:!0}),t.length),d=new ft;t.forEach(([f,g],x)=>{let m=.75+i()*.75;r.position.set(f,0,g),r.rotation.set(0,i()*Math.PI*2,0),r.scale.set(m,m*(.85+i()*.4),m),r.updateMatrix(),h.setMatrixAt(x,r.matrix),u.setMatrixAt(x,r.matrix),!a&&!o&&i()<.1?d.setHSL(.08+i()*.05,.65,.42):o?d.setHSL(.27+i()*.05,.4,.2+i()*.06):a?d.setHSL(.3+i()*.06,.35+i()*.15,.2+i()*.08):d.setHSL(.24+i()*.1,.45+i()*.2,.26+i()*.12),u.setColorAt(x,d)}),h.castShadow=u.castShadow=n,s.add(h,u)}function Gy(s,t,e,n){let i=t.pit;if(!i)return null;let r=new fe,a=[15921906,2047866,13185066,2830134,15254042,3046731],o=new re(2.5,3.2,12),l=new re(2.5,2.6,2.4),c=new re(4.2,.12,10),h=new Rt({color:1118481,roughness:.9}),u=new Me(.5,.5,.4,10).rotateZ(Math.PI/2),d=0;for(let f=i.merge+10;f<i.M-i.merge-10;f+=17){let g=i.nx[f],x=i.nz[f],m=i.side*(i.half+12+d%2*1.5),p=i.x[f]+g*m,y=i.z[f]+x*m,v=Math.atan2(i.x[Math.min(i.M,f+1)]-i.x[f],i.z[Math.min(i.M,f+1)]-i.z[f]),_=new fe,E=new Rt({color:a[d%a.length],roughness:.45,metalness:.2}),w=new it(o,E);w.position.set(0,2.2,0),w.castShadow=e,_.add(w);let A=new it(l,E);A.position.set(0,1.9,7.3),A.castShadow=e,_.add(A);let R=new it(c,new Rt({color:15329769,roughness:.7}));R.position.set(-i.side*3.2,3.3,0),R.rotation.z=i.side*.08,_.add(R);for(let b of[-4,-2.8,6.8])for(let M of[-1.1,1.1]){let I=new it(u,h);I.position.set(M,.5,b),_.add(I)}_.position.set(p,i.y[f]-.06,y),_.rotation.y=v,r.add(_),d++}return s.add(r),r.updateMatrixWorld(!0),{group:r,box:new fn().setFromObject(r)}}function Vy(s,t,e,n,i){let r=t.wrapS(-25),a=1,o=t.pit?[-t.pit.side,t.pit.side]:[1,-1];for(let p of o){let y=t.pointAt(r,p*(t.barrier+14));if(t.distToCenter(y.x,y.z,2)>t.barrier+8){a=p;break}}let l=new fe,c=46,h=5,u=new Rt({color:e.night?2763322:10134445,roughness:.8}),d=Xd();d.repeat.set(c/12,1);let f=new Rt({map:d,roughness:.9,emissive:e.night?16777215:0,emissiveMap:e.night?d:null,emissiveIntensity:e.night?.25:0});for(let p=0;p<h;p++){let y=new it(new re(c,.6+p*.8,1.6),u);y.position.set(0,(.6+p*.8)/2,p*1.6),y.castShadow=n,y.receiveShadow=n,l.add(y);let v=new it(new Te(c,1.1),f);v.position.set(0,.6+p*.8+.5,p*1.6-.2),v.rotation.y=Math.PI,l.add(v)}let g=new it(new re(c+2,.3,9.5),new Rt({color:e.night?1315871:15263978,roughness:.6}));g.position.set(0,8,3.2),g.rotation.x=-.06,g.castShadow=n,l.add(g);for(let p=-2;p<=2;p++){let y=new it(new re(.3,8,.3),u);y.position.set(p*(c/4.4),4,7.6),l.add(y)}let x=["#e0322b","#ffd000","#1f6fe0","#2e9e4b","#ffffff","#8b3fd9"];for(let p=0;p<8;p++){let y=new it(new Me(.04,.04,3),new Rt({color:13421772,metalness:.8,roughness:.3}));y.position.set(-c/2+3+p*((c-6)/7),9.6,0),l.add(y);let v=new it(new Te(1.4,.9),new Rt({color:x[p%x.length],side:Fe,roughness:.8}));v.position.set(y.position.x+.72,10.6,0),l.add(v)}Cn(l,t,r,a*(t.barrier+3),0),l.position.y=Math.max(0,l.position.y-.3),l.rotation.x=0,l.rotation.y+=a>0?-Math.PI/2:Math.PI/2,s.add(l),l.updateMatrixWorld(!0);let m=new fn().setFromObject(l);return{group:l,box:m}}function Wy(s,t,e,n,i,r,a){let o=t.bounds(0),l=[],c=a==="low"?200:420;for(let y=0;y<c;y++){let v=o.minX-120+n()*(o.maxX-o.minX+240),_=o.minZ-120+n()*(o.maxZ-o.minZ+240),E=10+n()*18,w=10+n()*18,R=v>o.minX+20&&v<o.maxX-20&&_>o.minZ+20&&_<o.maxZ-20?6+n()*16:14+n()*60;if(!i(v,_,Math.max(E,w)*.75+16)||r.stands&&r.stands.box.distanceToPoint(new L(v,1,_))<Math.max(E,w))continue;let b=new re(E,R,w),M=b.attributes.uv,I=b.attributes.normal;for(let k=0;k<M.count;k++){let N=Math.abs(I.getY(k)),P=Math.abs(I.getX(k))>.5?w:E;if(N>.5){M.setXY(k,.01,.99);continue}M.setXY(k,M.getX(k)*P/12,M.getY(k)*R/24)}b.translate(v,R/2,_),l.push(b)}if(l.length){let y=Hd(5),v=new it(wr(l),new Rt({map:y,emissive:16777215,emissiveMap:y,emissiveIntensity:.55,roughness:.7,color:5921392}));s.add(v)}let h=new Me(.1,.14,7,6).translate(0,3.5,0),u=new re(1.6,.18,.45).translate(0,7,0),d=[];for(let y=0;y<t.length;y+=34){let v=Math.floor(y/34)%2?1:-1;d.push([y,v])}let f=new tn(h,new Rt({color:2829622,roughness:.5,metalness:.6}),d.length),g=new tn(u,new te({color:16773320}),d.length),x=Wd(),m=new tn(new Te(1,1).rotateX(-Math.PI/2),new te({map:x,color:16767400,transparent:!0,opacity:.16,blending:an,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-4}),d.length);m.renderOrder=1;let p=new ye;d.forEach(([y,v],_)=>{let E=t.pointAt(y,v*(t.barrier+1.2)),w=t.headingAt(y);p.position.copy(E),p.rotation.set(0,w,0),p.scale.set(1,1,1),p.updateMatrix(),f.setMatrixAt(_,p.matrix),p.position.copy(t.pointAt(y,v*(t.barrier-.2))),p.rotation.set(0,w+Math.PI/2,0),p.updateMatrix(),g.setMatrixAt(_,p.matrix);let A=t.pointAt(y,v*(t.half-1.5));p.position.set(A.x,A.y+.03,A.z),p.rotation.set(0,w,0),p.scale.set(13,1,13),p.updateMatrix(),m.setMatrixAt(_,p.matrix)}),s.add(f,g,m)}var Tr=new L;function xn(s,t,e,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Tr.copy(t),Tr[n]=0,Tr.normalize();let c=.5*a/(a+o),h=1-Tr.angleTo(s)/l;return Math.sign(Tr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Ri=class extends re{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new L,x=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=xn(g,l,"z","y",r,n),d[p+1]=1-xn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-xn(g,l,"z","y",r,n),d[p+1]=1-xn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-xn(g,l,"x","z",r,t),d[p+1]=xn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-xn(g,l,"x","z",r,t),d[p+1]=1-xn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-xn(g,l,"x","y",r,t),d[p+1]=1-xn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=xn(g,l,"x","y",r,t),d[p+1]=1-xn(g,l,"y","x",r,e);break}}};var co=null;function ef(){return co||(co={frame:new re(1.05,.05,1.7),pod:new Ri(.26,.2,.95,3,.07),nose:new Ri(1.08,.2,.5,3,.08),bumper:new Ri(1.3,.13,.16,2,.05),seat:new Ri(.44,.46,.42,3,.1),engine:new Ri(.3,.3,.36,2,.05),pipe:new Me(.05,.06,.55,10),column:new Me(.022,.022,.42,6),wheelRing:new xr(.16,.022,6,18),torso:new Ds(.19,.3,4,10),arm:new Ds(.06,.34,3,6),leg:new Ds(.075,.5,3,6),helmet:new ln(.2,18,14),visor:new ln(.203,18,10,-1.1,2.2,1.05,.75),stripe:new xr(.2,.025,6,20,Math.PI),tireF:new Me(.25,.25,.2,20).rotateZ(Math.PI/2),tireR:new Me(.28,.28,.3,20).rotateZ(Math.PI/2),rimF:new Me(.15,.15,.21,12).rotateZ(Math.PI/2),rimR:new Me(.17,.17,.31,12).rotateZ(Math.PI/2),plate:new Te(.34,.25),flame:new on(.09,.7,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-.35),shield:new ln(1.35,24,16),lamp:new ln(.06,8,6),blob:new Te(2.2,2.8).rotateX(-Math.PI/2)},co)}var Xy=`
varying vec3 vN; varying vec3 vV;
void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix*viewMatrix*wp; }`,qy=`
uniform float time; uniform vec3 color; uniform float alpha;
varying vec3 vN; varying vec3 vV;
void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.2); float band = 0.5 + 0.5*sin(vN.y*18.0 - time*6.0);
 gl_FragColor = vec4(color*(0.6+f*1.8), (f*0.9 + band*0.08)*alpha); }`;function ho(s,{ghost:t=!1,night:e=!1,shadows:n=!0}={}){let i=ef(),r=new fe,a=new fe;r.add(a);let o=(D,V=.5,J=.1)=>{let Q=new Rt({color:D,roughness:V,metalness:J});return t&&(Q.transparent=!0,Q.opacity=.35,Q.depthWrite=!1),Q},l={paint:o(s.color,.32,.25),accent:o(s.accent,.4,.1),dark:o("#1b1d21",.7,.2),metal:o("#9aa2ad",.35,.85),tire:o("#161616",.92,0),rim:o("#c9ced6",.3,.9),suit:o(s.suit,.75,0),visor:o("#0d1520",.08,.6),pipe:o("#6f6258",.4,.8)},c=(D,V,J,Q,xt,Ut=a)=>{let Y=new it(D,V);return Y.position.set(J,Q,xt),Y.castShadow=n&&!t,Ut.add(Y),Y};c(i.frame,l.metal,0,.17,0),c(i.pod,l.paint,.62,.26,-.05),c(i.pod,l.paint,-.62,.26,-.05);let h=c(i.nose,l.paint,0,.3,.86);h.rotation.x=.18;let u=new Rt({map:kd(s.num,s.accent,s.color),roughness:.5});t&&(u.transparent=!0,u.opacity=.35);let d=c(i.plate,u,0,.47,.64);d.rotation.x=-.95,d.castShadow=!1,c(i.bumper,l.dark,0,.27,-.98);let f=c(i.seat,l.dark,0,.42,-.28);f.rotation.x=-.28,c(i.engine,l.metal,-.47,.42,-.5);let g=c(i.pipe,l.pipe,-.47,.5,-.84);g.rotation.x=Math.PI/2-.25;let x=c(i.column,l.dark,0,.44,.44);x.rotation.x=-.9;let m=c(i.wheelRing,l.dark,0,.6,.28);m.rotation.x=-.55;let p=c(i.torso,l.suit,0,.74,-.2);p.rotation.x=-.35;let y=new fe;y.position.set(0,1.1,-.1),a.add(y),c(i.helmet,l.paint,0,0,0,y).scale.set(1,1.02,1.08);let _=c(i.visor,l.visor,0,0,0,y);_.rotation.y=0;let E=c(i.stripe,l.accent,0,0,0,y);E.rotation.y=Math.PI/2,c(i.arm,l.suit,.2,.8,.02).rotation.set(1.05,0,-.35),c(i.arm,l.suit,-.2,.8,.02).rotation.set(1.05,0,.35);let R=c(i.leg,l.suit,.13,.4,.26);R.rotation.x=1.35;let b=c(i.leg,l.suit,-.13,.4,.26);b.rotation.x=1.35;let M=[],I=(D,V,J)=>{let Q=new fe;Q.position.set(D,J?.25:.28,V),a.add(Q);let xt=new fe;Q.add(xt);let Ut=new it(J?i.tireF:i.tireR,l.tire);Ut.castShadow=n&&!t,xt.add(Ut);let Y=new it(J?i.rimF:i.rimR,l.rim);xt.add(Y);let et=new it(new re(J?.212:.312,.05,.26),l.dark);xt.add(et),M.push({pivot:Q,spin:xt,front:J,r:J?.25:.28})};I(.6,.6,!0),I(-.6,.6,!0),I(.64,-.6,!1),I(-.64,-.6,!1);let k=new te({color:16752704,transparent:!0,opacity:.9,blending:an,depthWrite:!1}),N=new it(i.flame,k);N.position.set(-.47,.44,-1.1),N.rotation.x=.25,N.visible=!1,a.add(N);let P=new it(i.flame,k);P.scale.set(1.8,1.8,.6),N.add(P);let H=new pe({vertexShader:Xy,fragmentShader:qy,uniforms:{time:{value:0},color:{value:new ft("#5fd4ff")},alpha:{value:1}},transparent:!0,depthWrite:!1,blending:an}),U=new it(i.shield,H);U.position.y=.6,U.scale.set(1,.8,1.15),U.visible=!1,r.add(U);let $=null;if(e&&!t){let D=new te({color:16774352});$=[c(i.lamp,D,.35,.33,1.1),c(i.lamp,D,-.35,.33,1.1)];let V=new te({color:16719904});c(i.lamp,V,.5,.3,-1.05),c(i.lamp,V,-.5,.3,-1.05)}return r.userData={body:a,wheels:M,head:y,wheel:m,flame:N,flameMat:k,shield:U,shieldMat:H,M:l},r}var Er=class{constructor(t,e,{isPlayer:n=!1,index:i=0,cls:r}){if(Object.assign(this,ao(r)),this.race=t,this.geom=t.geom,this.driver=e,this.name=e.name,this.isPlayer=n,this.index=i,this.mesh=ho(e,{night:t.theme.night,shadows:t.quality!=="low"}),this.ud=this.mesh.userData,t.quality==="low"){let a=new it(ef().blob,t.blobMat);a.position.y=.04,a.renderOrder=1,this.mesh.add(a)}this.item=null,this.itemCount=0,this.rouletteT=0,this.rouletteItem=null,this.shieldT=0,this.padCooldown=0,this.speedScale=1,this.lapsDone=0,this.lapStart=0,this.lapTimes=[],this.bestLap=1/0,this.finished=!1,this.finishTime=0,this.rank=0,this.sector=0,this.secStart=0,this.curSectors=[null,null,null],this.wrongT=0,this.pitch=0,this.roll=0,this.wheelRot=0,this.visLift=0,this.skidPrev=[null,null],this.lastWallHit=-1,this.airY=0}get speed(){return Math.abs(this.u)}place(t,e){ks(this,this.geom,t,e),this.skidPrev=[null,null],this.syncMesh(0)}placePit(t){Id(this,this.geom,t),this.skidPrev=[null,null],this.syncMesh(0)}respawn(){let t=this.geom.wrapS(this.s),e=Pt(this.d,-this.geom.half+1.5,this.geom.half-1.5)*.3,n=this.progress;ks(this,this.geom,t,e),this.progress=n,this.spinT=0,this.boostT=0,this.skidPrev=[null,null],this.race.fx.burst(this.x,this.y+.8,this.z,.9,.9,.9,16,3,.3)}boost(t,e){this.boostT<=0?this.boostPow=e:this.boostPow=Math.max(this.boostPow,e),this.boostT=Math.max(this.boostT,t),this.isPlayer&&this.race.onPlayerBoost(e)}hit(t,e=null){if(this.spinT>0)return!1;if(this.shieldT>0)return this.shieldT=0,this.race.fx.burst(this.x,this.y+.8,this.z,.4,.85,1,30,7,.35),this.race.sound("shieldBreak",this),!1;this.boostT=0;let n=t==="rocket";return this.spinT=n?1.4:1,this.spinDir=Math.random()<.5?-1:1,this.u*=n?.35:.6,this.race.onKartHit(this,t,e),!0}step(t,e){var r;oo(this,e,t,this.race.physOpts(this));let n=lo(this,this.geom,t);n>1.5&&this.race.time-this.lastWallHit>.3&&(this.lastWallHit=this.race.time,this.race.onWallHit(this,n,this.x,this.z)),Math.cos(this.h-((r=this.trackHead)!=null?r:this.h))<-.3&&this.u>2?this.wrongT+=t:this.wrongT=Math.max(0,this.wrongT-t*2),this.shieldT>0&&(this.shieldT-=t)}syncMesh(t,e=0){var f;let n=this.ud,i=this.mesh,r=this.onKerb&&this.u>5?(Math.random()-.5)*.025:0;i.position.set(this.x,this.y+r,this.z);let a=(this.spinT>0,0);i.rotation.set(0,this.h+a,0);let o=this.u*this.w,l=(this.slope||0)*Math.cos(this.h-((f=this.trackHead)!=null?f:this.h)),c=-Math.atan(l)+Pt(-this.ax*.004,-.035,.035),h=Pt(o*.0045,-.07,.07)+Math.sign(this.w)*this.lift*.03;this.pitch=t?gn(this.pitch,c,10,t):c,this.roll=t?gn(this.roll,h,9,t):h,n.body.rotation.set(this.pitch,0,this.roll,"YXZ"),n.body.position.y=this.lift*.025,this.wheelRot+=this.u*(t||0)/.27;for(let g of n.wheels)g.spin.rotation.x=this.wheelRot*(g.front?1.1:1),g.front&&(g.pivot.rotation.y=this.delta);let u=this.w>0?1:-1;for(let g of n.wheels){if(g.front)continue;let x=Math.sign(g.pivot.position.x)===u;g.pivot.position.y=.28+(x?this.lift*.05:0)}n.wheel.rotation.z=-this.delta*2.4,n.head.rotation.y=this.delta*.6,n.head.rotation.z=-this.roll*2.2;let d=this.boostT>0;n.flame.visible=d,d&&(n.flame.scale.set(1,1,.8+Math.random()*.5+this.boostPow*.4),n.flameMat.color.setHSL(.07+Math.random()*.04,1,.55)),n.shield.visible=this.shieldT>0,this.shieldT>0&&(n.shieldMat.uniforms.time.value=e,n.shieldMat.uniforms.alpha.value=this.shieldT<1.2?Math.sin(e*30)>0?1:.3:1),t&&this.emitFx(t)}emitFx(t){let e=this.race.fx;if(!this.race.nearCamera(this)){this.skidPrev=[null,null];return}let n=Math.sin(this.h),i=Math.cos(this.h),r=-i,a=n,o=Math.abs(this.u),l=[];for(let f of[-1,1])l.push([this.x-n*.62+r*f*.64,this.y+.05,this.z-i*.62+a*f*.64]);let c=this.sliding;if(c>.2)for(let f of l)e.chance(c*.7)&&e.smoke(f[0],f[1]+.15,f[2],-n*1.5+(Math.random()-.5),.5,-i*1.5+(Math.random()-.5),.86,.7+c*.6,.9,.18+c*.2);if(this.surface===An.GRASS&&o>3){let f=this.race.dustColor;for(let g of l)e.chance(.45)&&e.dust(g[0],g[1]+.2,g[2],-n*2+(Math.random()-.5)*2,.8+Math.random(),-i*2+(Math.random()-.5)*2,f[0],f[1],f[2],.9)}this.spinT>0&&e.chance(.6)&&e.smoke(this.x,this.y+.3,this.z,(Math.random()-.5)*3,1,(Math.random()-.5)*3,.8,1.1,.9,.35);let h=this.x-n*1.15+r*.47,u=this.z-i*1.15+a*.47;if(this.boostT>0)for(let f=0;f<2;f++)e.flame(h,this.y+.5,u,-n*4+(Math.random()-.5),.5+Math.random(),-i*4+(Math.random()-.5),1+this.boostPow*.5);let d=(c>.25||this.lock||this.spin||this.spinT>0)&&this.surface!==An.GRASS&&o>2;for(let f=0;f<2;f++){let g=l[f];if(!d){this.skidPrev[f]=null;continue}let x=.14,m=[g[0]-r*x,g[1]-.02,g[2]-a*x],p=[g[0]+r*x,g[1]-.02,g[2]+a*x],y=this.skidPrev[f];if(y){let v=(y[0][0]-m[0])**2+(y[0][2]-m[2])**2;v>.2&&v<16?(e.skids.add(y[0][0],y[0][1],y[0][2],y[1][0],y[1][1],y[1][2],m[0],m[1],m[2],p[0],p[1],p[2]),this.skidPrev[f]=[m,p]):v>=16&&(this.skidPrev[f]=[m,p])}else this.skidPrev[f]=[m,p]}}};function $y(s,t,e=1){let n=s.N,i=new Float32Array(n),r=t.vmaxKmh/3.6,a=t.mu*(t.gears?.72:.75)*e;for(let c=0;c<n;c++){let h=0;for(let u=-5;u<=6;u++)h=Math.max(h,Math.abs(s.lineCurv[(c+u+n)%n]));i[c]=Math.min(r*1.02,Math.sqrt(a*9.81/Math.max(h,1e-4)))}let o=(t.frontBrakes?10:5.4)*(.85+.15*e),l=a*9.81;for(let c=0;c<2;c++)for(let h=n-1;h>=0;h--){let u=(h+1)%n,d=i[u],f=Math.abs(s.lineCurv[h]),g=Math.min(.95,d*d*f/l),x=o*Math.sqrt(1-g*g);i[h]=Math.min(i[h],Math.sqrt(d*d+2*x*s.ds))}return i}function Yy(s,t,e,n=1){let i=Math.max(3,s.u),r=Math.atan2(s.vx||Math.sin(s.h),s.vz||Math.cos(s.h)),a=t-s.x,o=e-s.z,l=Math.hypot(a,o)||1,c=si(Math.atan2(a,o)-(s.u>3?r:s.h)),h=2*Math.sin(c)/l,u=Math.atan(h*ro.L)*1.1+.05*(h*i-s.w),d=ah(s.u,n);return Pt(-u/d,-1,1)}var uo=class{constructor(t,e,n,i){this.race=t,this.kart=e,this.geom=t.geom,this.diff=n,this.r=ze(i),this.skill=n.corner*(.97+this.r()*.05),this.profile=$y(this.geom,e.cls,this.skill),this.lane=0,this.laneTarget=0,this.laneT=0,this.avoid=0,this.stuckT=0,this.itemDelay=0,this.itemHeld=0,this.inp={steer:0,throttle:0,brake:0,item:!1}}update(t){var v;let e=this.kart,n=this.geom,i=this.inp,r=this.race;if(i.item=!1,!r.canDrive)return i.throttle=0,i.brake=0,i.steer=0,i;let a=Math.max(0,e.u);this.laneT-=t,this.laneT<=0&&(this.laneT=3+this.r()*4,this.laneTarget=(this.r()-.5)*.7),this.lane+=Pt(this.laneTarget-this.lane,-t*.5,t*.5);let o=Pt(3.5+a*.28,4.5,11),l=e.s+o,c=n.lineOffsetAt(n.wrapS(l))+this.lane,h=0;for(let _ of r.karts){if(_===e)continue;let E=n.deltaS(_.s,e.s);if(E>-1&&E<11){let w=_.d-(e.d+(c-e.d)*.5);if(Math.abs(w)<1.9){let A=_.d>e.d?-1:1,b=(A>0?n.half-1-_.d:_.d+n.half-1)>1.6?A:-A;h+=b*(1.9-Math.abs(w))*(1-E/14)*1.2}}}if(r.items)for(let _ of r.items.hazards){let E=n.deltaS(_.s,e.s);if(E>0&&E<22){let w=_.d-c;Math.abs(w)<2&&(h+=(w>0?-1:1)*(2-Math.abs(w)))}}this.avoid+=(h-this.avoid)*Math.min(1,t*5),c=Pt(c+this.avoid,-n.half+1,n.half-1);let u=n.pointAt(n.wrapS(l),c),d=Yy(e,u.x,u.z,r.assist),f=n.idx(e.trackIdx+Math.round(2+a*.1)),g=this.profile[f]*e.speedScale,x=1,m=0,p=g-a;return p>-.4?x=Pt(.35+p*.5,0,1):(x=0,m=Pt((-p-.4)*.35,0,.85)),Math.abs(n.lineCurv[e.trackIdx])>1/70&&(m=Math.min(m,.35)),(e.sliding>.35||e.slipR>1.05)&&(x*=.4,m=Math.min(m,.2)),this.tc=this.tc===void 0?1:this.tc,e.spin||e.slipR>1?this.tc=Math.max(.3,this.tc-t*5):this.tc=Math.min(1,this.tc+t*1.5),x*=this.tc,r.time>3&&a<1.5?this.stuckT+=t:this.stuckT=Math.max(0,this.stuckT-t),this.stuckT>3&&(e.respawn(),this.stuckT=0),Math.cos(e.h-((v=e.trackHead)!=null?v:e.h))<-.3&&a>1?(this.wrongT=(this.wrongT||0)+t,this.wrongT>2&&(e.respawn(),this.wrongT=0)):this.wrongT=0,i.steer=d,i.throttle=x,i.brake=m,this.items(t),i}items(t){let e=this.kart,n=this.race;if(!n.items||!n.items.enabled||!e.item||e.rouletteT>0){this.itemHeld=0;return}if(this.itemHeld+=t,this.itemDelay>0){this.itemDelay-=t;return}if(this.r()>this.diff.items*t*3)return;let i=!1,r=this.geom;switch(e.item){case"nitro":case"nitro3":{let a=0;for(let o=5;o<60;o+=5)a=Math.max(a,Math.abs(r.lineCurv[r.idx(e.trackIdx+Math.round(o/r.ds))]));i=a<1/70&&e.surface===0;break}case"rocket":{let a=n.items.findTarget(e);i=a&&r.deltaS(a.s,e.s)<70||this.itemHeld>10;break}case"oil":i=n.karts.some(a=>a!==e&&r.deltaS(e.s,a.s)>3&&r.deltaS(e.s,a.s)<20)||this.itemHeld>9;break;case"shield":i=n.items.rockets.some(a=>a.target===e)||this.itemHeld>4;break}i&&(this.inp.item=!0,this.itemDelay=.6+this.r())}};var Zy=[-4.5,-1.5,1.5,4.5],fo=class{constructor(t,e=!0){this.race=t,this.geom=t.geom,this.enabled=e,this.boxes=[],this.rockets=[],this.hazards=[],this.group=new fe,t.scene.add(this.group),e&&this.buildBoxes(),this.rocketGeo=null}buildBoxes(){let t=zd(),e=new Rt({map:t,transparent:!0,opacity:.92,roughness:.2,metalness:.1,emissive:16777215,emissiveMap:t,emissiveIntensity:.35}),n=new re(1.1,1.1,1.1),i=new te({color:16777215,transparent:!0,opacity:.5}),r=new ka(.28);for(let a of this.geom.def.itemRows||[]){let o=a*this.geom.length;for(let l of Zy){let c=new fe;Cn(c,this.geom,o,l,1),c.rotation.x=0;let h=new it(n,e);h.castShadow=this.race.quality==="high",c.add(h);let u=new it(r,i);c.add(u),this.group.add(c),this.boxes.push({s:o,d:l,mesh:c,box:h,core:u,respawn:0,phase:Math.random()*6})}}}roll(t){let e=this.race.karts.length,n=e>1?t.rank/(e-1):.5,i={oil:.35*(1-n)+.08,shield:.22*(1-n)+.05,rocket:.12+.28*n,nitro:.22+.1*n,nitro3:.02+.3*n*n};t.rank===0&&(i.rocket*=.4);let r=0;for(let o in i)r+=i[o];let a=Math.random()*r;for(let o in i)if(a-=i[o],a<=0)return o;return"nitro"}give(t,e){t.item=e,t.itemCount=e==="nitro3"?3:1}update(t,e){let n=this.race,i=this.geom;for(let r of this.boxes){if(r.respawn>0){r.respawn-=t,r.respawn<=0&&(r.mesh.visible=!0,r.mesh.scale.setScalar(.01));continue}let a=r.mesh.scale.x;a<1&&r.mesh.scale.setScalar(Math.min(1,a+t*3)),r.box.rotation.set(e*.9+r.phase,e*1.3+r.phase,0),r.core.rotation.y=-e*2,r.mesh.position.y=i.pointAt(r.s,r.d).y+1+Math.sin(e*2+r.phase)*.12;for(let o of n.karts){let l=o.x-r.mesh.position.x,c=o.z-r.mesh.position.z;if(l*l+c*c<2.3*2.3&&Math.abs(o.y-i.pointAt(r.s,r.d).y)<2){r.respawn=2.2,r.mesh.visible=!1,n.fx.burst(r.mesh.position.x,r.mesh.position.y,r.mesh.position.z,.9,.7,1,18,5,.3),!o.item&&o.rouletteT<=0&&(o.rouletteT=o.isPlayer?1.1:.5,o.rouletteItem=this.roll(o),n.sound("pickup",o));break}}}for(let r of n.karts)r.rouletteT>0&&(r.rouletteT-=t,r.rouletteT<=0&&(this.give(r,r.rouletteItem),r.isPlayer&&n.sound("itemReady",r)));this.updateRockets(t,e),this.updateHazards(t,e)}use(t){if(!t.item||t.rouletteT>0)return;let e=this.race;switch(t.item){case"nitro":case"nitro3":t.boost(1.35,1.2),e.sound("nitro",t);break;case"rocket":this.fireRocket(t),e.sound("rocket",t);break;case"oil":this.dropOil(t),e.sound("drop",t);break;case"shield":t.shieldT=7,e.sound("shield",t);break}t.itemCount--,t.itemCount<=0&&(t.item=null)}findTarget(t){let e=null,n=1/0;for(let i of this.race.karts){if(i===t||i.finished)continue;let r=i.progress-t.progress;r>0&&r<160&&r<n&&(n=r,e=i)}return e}makeRocketMesh(){let t=new fe,e=new it(new Me(.16,.16,1,10).rotateX(Math.PI/2),new Rt({color:15263978,metalness:.5,roughness:.3})),n=new it(new on(.16,.4,10).rotateX(Math.PI/2).translate(0,0,.7),new Rt({color:14692907,roughness:.4})),i=new Rt({color:14692907,roughness:.5});t.add(e,n);for(let a=0;a<4;a++){let o=new it(new re(.03,.3,.3),i);o.position.set(0,0,-.4),o.rotation.z=a*Math.PI/2,o.translateY(.2),t.add(o)}let r=new it(new ln(.2,8,6),new te({color:16756800,toneMapped:!1}));return r.position.z=-.55,t.add(r),t}fireRocket(t){let e=this.findTarget(t),n=this.makeRocketMesh();this.group.add(n),this.rockets.push({owner:t,target:e,s:t.s+1.8,d:t.d,y:.7,life:6,age:0,speed:Math.max(t.speed+18,50),mesh:n,x:t.x,z:t.z,h:t.h,progress:t.progress+1.8})}updateRockets(t){let e=this.geom,n=this.race;for(let i=this.rockets.length-1;i>=0;i--){let r=this.rockets[i];r.age+=t,r.life-=t;let a=r.speed*t;if(r.s=e.wrapS(r.s+a),r.progress+=a,r.target&&!r.target.finished){let d=r.target.progress-r.progress;d<35&&(r.d+=(r.target.d-r.d)*Math.min(1,t*(d<12?10:3)))}else r.d*=Math.exp(-t*.5);r.d=Math.max(-e.half+.5,Math.min(e.half-.5,r.d));let o=e.pointAt(r.s,r.d),l=o.x,c=o.z,h=Math.atan2(l-r.x,c-r.z);r.x=l,r.z=c,r.h=h,r.mesh.position.set(l,o.y+r.y,c),r.mesh.rotation.set(0,h,0),n.fx.flame(l-Math.sin(h)*.6,o.y+r.y,c-Math.cos(h)*.6,-Math.sin(h)*3,.3,-Math.cos(h)*3,.9),Math.random()<.5&&n.fx.smoke(l-Math.sin(h)*.8,o.y+r.y,c-Math.cos(h)*.8,0,.5,0,.8,.7,.8,.28);let u=null;for(let d of n.karts){if(d===r.owner&&r.age<.6)continue;let f=d.x-l,g=d.z-c;if(f*f+g*g<1.7*1.7&&Math.abs(d.y-o.y)<2){u=d;break}}for(let d=this.hazards.length-1;d>=0;d--){let f=this.hazards[d];(f.x-l)**2+(f.z-c)**2<2.2&&(this.removeHazard(d),r.life=0)}(u||r.life<=0)&&(n.fx.explosion(l,o.y,c),n.sound("explosion",r.owner,0,{x:l,z:c}),u&&u.hit("rocket",r.owner),this.group.remove(r.mesh),r.mesh.traverse(d=>{d.geometry&&d.geometry.dispose(),d.material&&d.material.dispose()}),this.rockets.splice(i,1))}}dropOil(t){let e=this.geom,n=e.wrapS(t.s-2.6),i=e.pointAt(n,t.d);if(!this.oilGeo){this.oilGeo=new Ti(1.25,20).rotateX(-Math.PI/2);let o=this.oilGeo.attributes.position;for(let l=1;l<o.count;l++){let c=.75+Math.random()*.4;o.setX(l,o.getX(l)*c),o.setZ(l,o.getZ(l)*c)}this.oilMat=new Rt({color:460554,roughness:.05,metalness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-3}),this.oilSheen=new te({color:6308095,transparent:!0,opacity:.25,blending:an,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-4})}let r=new it(this.oilGeo,this.oilMat);r.position.set(i.x,i.y+.02,i.z),r.rotation.y=Math.random()*6,r.renderOrder=1;let a=new it(this.oilGeo,this.oilSheen);a.scale.setScalar(.6),a.position.y=.005,r.add(a),this.group.add(r),this.hazards.push({s:n,d:t.d,x:i.x,z:i.z,y:i.y,mesh:r,owner:t,t:0,sheen:a}),this.hazards.length>12&&this.removeHazard(0)}removeHazard(t){let e=this.hazards[t];this.group.remove(e.mesh),this.hazards.splice(t,1)}updateHazards(t,e){let n=this.race;for(let i=this.hazards.length-1;i>=0;i--){let r=this.hazards[i];r.t+=t,r.sheen.material.color.setHSL((e*.2+i*.1)%1,.8,.5);for(let a of n.karts){if(a===r.owner&&r.t<1)continue;let o=a.x-r.x,l=a.z-r.z;if(o*o+l*l<1.6*1.6&&Math.abs(a.y-r.y)<1.5){a.hit("oil",r.owner),this.removeHazard(i),n.sound("slip",a);break}}}}checkPads(t,e,n){for(let i of e){let r=this.geom.deltaS(t.s,i.s);Math.abs(r)<i.len/2&&Math.abs(t.d-i.d)<i.w/2+.3&&(!t.padCooldown||t.padCooldown<=0)&&(t.boost(1,1),t.padCooldown=.6,this.race.sound("pad",t))}t.padCooldown>0&&(t.padCooldown-=n)}};var Ky=`
attribute float size;
attribute vec4 pcolor;
varying vec4 vColor;
uniform float scale;
void main() {
  vColor = pcolor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,Jy=`
varying vec4 vColor;
uniform float soft;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  float a = 1.0 - smoothstep(soft, 1.0, d);
  if (a <= 0.001) discard;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
}`,po=class{constructor(t,e,n){this.max=t,this.n=0;let i=()=>new Float32Array(t);this.px=i(),this.py=i(),this.pz=i(),this.vx=i(),this.vy=i(),this.vz=i(),this.life=i(),this.maxLife=i(),this.s0=i(),this.s1=i(),this.cr=i(),this.cg=i(),this.cb=i(),this.a0=i(),this.grav=i(),this.drag=i();let r=new Jt;this.pos=new _e(new Float32Array(t*3),3).setUsage(vr),this.size=new _e(new Float32Array(t),1).setUsage(vr),this.col=new _e(new Float32Array(t*4),4).setUsage(vr),r.setAttribute("position",this.pos),r.setAttribute("size",this.size),r.setAttribute("pcolor",this.col),r.setDrawRange(0,0),this.mat=new pe({vertexShader:Ky,fragmentShader:Jy,uniforms:{scale:{value:400},soft:{value:n}},transparent:!0,depthWrite:!1,blending:e?an:vi}),this.points=new Da(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=e?3:2}spawn(t,e,n,i,r,a,o,l,c,h,u,d,f,g=0,x=0){let m=this.n;m>=this.max?m=Math.floor(Math.random()*this.max):this.n++,this.px[m]=t,this.py[m]=e,this.pz[m]=n,this.vx[m]=i,this.vy[m]=r,this.vz[m]=a,this.life[m]=o,this.maxLife[m]=o,this.s0[m]=l,this.s1[m]=c,this.cr[m]=h,this.cg[m]=u,this.cb[m]=d,this.a0[m]=f,this.grav[m]=g,this.drag[m]=x}update(t){let e=this.pos.array,n=this.size.array,i=this.col.array,r=0;for(;r<this.n;){if(this.life[r]-=t,this.life[r]<=0){let l=--this.n;r!==l&&(this.px[r]=this.px[l],this.py[r]=this.py[l],this.pz[r]=this.pz[l],this.vx[r]=this.vx[l],this.vy[r]=this.vy[l],this.vz[r]=this.vz[l],this.life[r]=this.life[l],this.maxLife[r]=this.maxLife[l],this.s0[r]=this.s0[l],this.s1[r]=this.s1[l],this.cr[r]=this.cr[l],this.cg[r]=this.cg[l],this.cb[r]=this.cb[l],this.a0[r]=this.a0[l],this.grav[r]=this.grav[l],this.drag[r]=this.drag[l]);continue}let a=Math.exp(-this.drag[r]*t);this.vx[r]*=a,this.vy[r]=this.vy[r]*a-this.grav[r]*t,this.vz[r]*=a,this.px[r]+=this.vx[r]*t,this.py[r]+=this.vy[r]*t,this.pz[r]+=this.vz[r]*t;let o=1-this.life[r]/this.maxLife[r];e[r*3]=this.px[r],e[r*3+1]=this.py[r],e[r*3+2]=this.pz[r],n[r]=this.s0[r]+(this.s1[r]-this.s0[r])*o,i[r*4]=this.cr[r],i[r*4+1]=this.cg[r],i[r*4+2]=this.cb[r],i[r*4+3]=this.a0[r]*(o<.1?o/.1:1-(o-.1)/.9),r++}this.points.geometry.setDrawRange(0,this.n),this.pos.needsUpdate=!0,this.size.needsUpdate=!0,this.col.needsUpdate=!0}},ph=class{constructor(t,e=657930,n=.42){this.max=t,this.head=0;let i=new Float32Array(t*4*3),r=[];for(let o=0;o<t;o++){let l=o*4;r.push(l,l+2,l+1,l+1,l+2,l+3)}let a=new Jt;this.attr=new _e(i,3).setUsage(vr),a.setAttribute("position",this.attr),a.setIndex(r),this.mesh=new it(a,new te({color:e,transparent:!0,opacity:n,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.dirtyFrom=-1}add(t,e,n,i,r,a,o,l,c,h,u,d){let f=this.attr.array,g=this.head*12;f[g]=t,f[g+1]=e,f[g+2]=n,f[g+3]=i,f[g+4]=r,f[g+5]=a,f[g+6]=o,f[g+7]=l,f[g+8]=c,f[g+9]=h,f[g+10]=u,f[g+11]=d,this.head=(this.head+1)%this.max,this.attr.needsUpdate=!0}},mo=class{constructor(t,e){let n=e==="low"?.5:1;this.mult=n,this.add=new po(Math.round(1800*n),!0,.15),this.norm=new po(Math.round(1400*n),!1,.35),this.skids=new ph(e==="low"?1200:2600),t.add(this.add.points,this.norm.points,this.skids.mesh),this.acc=0}setScale(t){this.add.mat.uniforms.scale.value=t,this.norm.mat.uniforms.scale.value=t}update(t){this.add.update(t),this.norm.update(t)}chance(t){return Math.random()<t*this.mult}spark(t,e,n,i,r,a,o,l,c,h=.22,u=.35){this.add.spawn(t,e,n,i,r,a,u,h,h*.3,o,l,c,1,9,1.5)}smoke(t,e,n,i,r,a,o=.85,l=1,c=.9,h=.35){this.norm.spawn(t,e,n,i,r,a,c,l*.5,l*2.2,o,o,o*1.02,h,-.6,2.2)}dust(t,e,n,i,r,a,o,l,c,h=.9){this.norm.spawn(t,e,n,i,r,a,.7,h*.5,h*1.8,o,l,c,.5,1.5,2.5)}flame(t,e,n,i,r,a,o=1){this.add.spawn(t,e,n,i,r,a,.16+Math.random()*.08,.55*o,.1,1,.55+Math.random()*.3,.15,.95,-1,3)}burst(t,e,n,i,r,a,o=24,l=6,c=.3){for(let h=0;h<o*this.mult;h++){let u=Math.random()*Math.PI*2,d=Math.random()*2-1,f=Math.sqrt(1-d*d),g=l*(.4+Math.random()*.6);this.add.spawn(t,e,n,Math.cos(u)*f*g,Math.abs(d)*g+1,Math.sin(u)*f*g,.4+Math.random()*.4,c,c*.2,i,r,a,1,8,1.2)}}explosion(t,e,n){this.burst(t,e+.5,n,1,.6,.15,40,11,.5),this.burst(t,e+.5,n,1,.9,.5,20,6,.8);for(let i=0;i<16*this.mult;i++)this.norm.spawn(t+(Math.random()-.5)*2,e+.5+Math.random(),n+(Math.random()-.5)*2,(Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4,1.4+Math.random()*.6,1.5,5,.25,.23,.22,.6,-.5,1.5)}};var ri=[-80,-45,-20,0,20,45,80].map(s=>s*Math.PI/180),Zi=ri.length+6,In=8,He=Zi*In+(In+1)*2,Ii=24,Ar=Ii*2,Pi=He+Ar,Je=1/60,sf=30,Ki={population:48,elite:10,parents:25,tournament:4,selection:"tournament",crossover:.35,blend:!1,mutation:.12,strength:.3,immigrants:.06,fine:.35,fineStrength:.03,adaptive:!0,patience:15,expansion:3,sectorMutation:.12,memory:!0,zeroReset:.005,timeout:100,idle:3,offroadGrace:.6,wallKill:!0,reverse:25,goal:50,autoStop:!1,simBudget:80,trainFps:20,autoSave:10,cloudSave:45,history:600,chartWindow:120,telemetryWindow:30,uiHz:5,trail:!0,ghost:!0,labels:!1,dead:!1,follow:!1},Wn=[{g:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",k:"population",n:"\u041A\u0430\u0440\u0442\u043E\u0432 \u0432 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0438",t:"num",min:16,max:160,s:1,key:1,h:"\u0411\u043E\u043B\u044C\u0448\u0435 \u043A\u0430\u0440\u0442\u043E\u0432 \u2014 \u043D\u0430\u0434\u0451\u0436\u043D\u0435\u0435 \u043E\u0442\u0431\u043E\u0440, \u043D\u043E \u043A\u0430\u0436\u0434\u044B\u0439 \u0448\u0430\u0433 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0434\u043E\u043B\u044C\u0448\u0435."},{g:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",k:"mutation",n:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u043C\u0443\u0442\u0430\u0446\u0438\u044F",t:"num",min:0,max:1,s:.001,key:1,h:"\u0412\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0434\u0438\u043D \u0432\u0435\u0441 \u043F\u043E\u0442\u043E\u043C\u043A\u0430."},{g:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",k:"strength",n:"\u0421\u0438\u043B\u0430 \u043C\u0443\u0442\u0430\u0446\u0438\u0438",t:"num",min:.001,max:3,s:.001,key:1,h:"\u041D\u0430 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u0432\u0435\u0441 \u043F\u0440\u0438 \u043C\u0443\u0442\u0430\u0446\u0438\u0438."},{g:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",k:"elite",n:"\u042D\u043B\u0438\u0442\u0430, %",t:"num",min:2,max:30,s:1,key:1,h:"\u0414\u043E\u043B\u044F \u043B\u0443\u0447\u0448\u0438\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044F\u0442 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 \u0431\u0435\u0437 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439."},{g:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",k:"timeout",n:"\u041B\u0438\u043C\u0438\u0442 \u043F\u043E\u043F\u044B\u0442\u043A\u0438, \u0441",t:"num",min:30,max:180,s:1,key:1,h:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434 \u0434\u0430\u0451\u0442\u0441\u044F \u043A\u0430\u0440\u0442\u0443 \u043D\u0430 \u043A\u0440\u0443\u0433."},{g:"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",k:"goal",n:"\u041E\u0440\u0438\u0435\u043D\u0442\u0438\u0440 \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0441",t:"num",min:30,max:120,s:.01,key:1,h:"\u0426\u0435\u043B\u044C \u043F\u043E \u043A\u0440\u0443\u0433\u0443 \u0434\u043B\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u0438 \xAB\u0440\u0430\u0437\u043D\u0438\u0446\u044B \u0441 \u0446\u0435\u043B\u044C\u044E\xBB."},{g:"\u041E\u0442\u0431\u043E\u0440",k:"parents",n:"\u041F\u0443\u043B \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439, %",t:"num",min:10,max:100,s:1,h:"\u0418\u0437 \u043A\u0430\u043A\u043E\u0439 \u0434\u043E\u043B\u0438 \u043B\u0443\u0447\u0448\u0438\u0445 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442\u0441\u044F \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0438."},{g:"\u041E\u0442\u0431\u043E\u0440",k:"tournament",n:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0442\u0443\u0440\u043D\u0438\u0440\u0430",t:"num",min:2,max:12,s:1,h:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u043E\u0432 \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F."},{g:"\u041E\u0442\u0431\u043E\u0440",k:"selection",n:"\u0412\u044B\u0431\u043E\u0440 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439",t:"sel",opts:["tournament","uniform"],optLabels:["\u0422\u0443\u0440\u043D\u0438\u0440","\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445"],h:"\u0422\u0443\u0440\u043D\u0438\u0440 \u0434\u0430\u0451\u0442 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E, \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u2014 \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0435."},{g:"\u041E\u0442\u0431\u043E\u0440",k:"crossover",n:"\u0412\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u0441\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u044F",t:"num",min:0,max:1,s:.01,h:"\u041A\u0430\u043A \u0447\u0430\u0441\u0442\u043E \u0432\u0435\u0441 \u0431\u0435\u0440\u0451\u0442\u0441\u044F \u0443 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F."},{g:"\u041E\u0442\u0431\u043E\u0440",k:"blend",n:"\u0423\u0441\u0440\u0435\u0434\u043D\u044F\u0442\u044C \u043F\u0440\u0438 \u0441\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0438",t:"bool",h:"\u0411\u0440\u0430\u0442\u044C \u0441\u0440\u0435\u0434\u043D\u0435\u0435 \u0434\u0432\u0443\u0445 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0432\u043C\u0435\u0441\u0442\u043E \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F."},{g:"\u041E\u0442\u0431\u043E\u0440",k:"immigrants",n:"\u0414\u043E\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0445",t:"num",min:0,max:.5,s:.01,h:"\u0421\u0432\u0435\u0436\u0430\u044F \u043A\u0440\u043E\u0432\u044C \u043A\u0430\u0436\u0434\u043E\u0435 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435."},{g:"\u041C\u0443\u0442\u0430\u0446\u0438\u0438",k:"fine",n:"\u0414\u043E\u043B\u044F \u0442\u043E\u043D\u043A\u043E\u0439 \u0434\u043E\u0432\u043E\u0434\u043A\u0438",t:"num",min:0,max:.8,s:.01,h:"\u0427\u0430\u0441\u0442\u044C \u043F\u043E\u0442\u043E\u043C\u043A\u043E\u0432 \u2014 \u043A\u043E\u043F\u0438\u0438 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430 \u0441 \u043A\u0440\u043E\u0448\u0435\u0447\u043D\u044B\u043C\u0438 \u043F\u0440\u0430\u0432\u043A\u0430\u043C\u0438."},{g:"\u041C\u0443\u0442\u0430\u0446\u0438\u0438",k:"fineStrength",n:"\u0428\u0430\u0433 \u0442\u043E\u043D\u043A\u043E\u0439 \u0434\u043E\u0432\u043E\u0434\u043A\u0438",t:"num",min:.001,max:.3,s:.001,h:"\u041D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0435\u043B\u043A\u0438\u0435 \u044D\u0442\u0438 \u043F\u0440\u0430\u0432\u043A\u0438."},{g:"\u041C\u0443\u0442\u0430\u0446\u0438\u0438",k:"zeroReset",n:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u0430\u044F \u0437\u0430\u043C\u0435\u043D\u0430 \u0432\u0435\u0441\u0430",t:"num",min:0,max:.1,s:.001,h:"\u0418\u0437\u0440\u0435\u0434\u043A\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0437\u0430\u043C\u0435\u043D\u044F\u0442\u044C \u0432\u0435\u0441 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u043C."},{g:"\u041C\u0443\u0442\u0430\u0446\u0438\u0438",k:"memory",n:"\u041E\u0431\u0443\u0447\u0430\u0442\u044C \u043F\u043E\u043F\u0440\u0430\u0432\u043A\u0438 24 \u0443\u0447\u0430\u0441\u0442\u043A\u043E\u0432",t:"bool",h:"\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u0442\u0440\u0430\u0441\u0441\u044B."},{g:"\u041C\u0443\u0442\u0430\u0446\u0438\u0438",k:"sectorMutation",n:"\u0428\u0430\u043D\u0441 \u043C\u0443\u0442\u0430\u0446\u0438\u0438 \u0443\u0447\u0430\u0441\u0442\u043A\u0430",t:"num",min:0,max:1,s:.001,h:"\u041A\u0430\u043A \u0447\u0430\u0441\u0442\u043E \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u043F\u0440\u0430\u0432\u043A\u0438 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0445 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432."},{g:"\u041C\u0443\u0442\u0430\u0446\u0438\u0438",k:"adaptive",n:"\u0410\u0432\u0442\u043E\u0443\u0441\u0438\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u0437\u0430\u0441\u0442\u043E\u0435",t:"bool",key:1,h:"\u0415\u0441\u043B\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043D\u0435 \u0440\u0430\u0441\u0442\u0451\u0442, \u043C\u0443\u0442\u0430\u0446\u0438\u0438 \u0443\u0441\u0438\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0441\u0430\u043C\u0438."},{g:"\u041C\u0443\u0442\u0430\u0446\u0438\u0438",k:"patience",n:"\u041E\u043A\u043D\u043E \u0437\u0430\u0441\u0442\u043E\u044F, \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0439",t:"num",min:2,max:100,s:1,h:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0439 \u0431\u0435\u0437 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0437\u0430\u0441\u0442\u043E\u0435\u043C."},{g:"\u041C\u0443\u0442\u0430\u0446\u0438\u0438",k:"expansion",n:"\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0430\u0432\u0442\u043E\u0443\u0441\u0438\u043B\u0435\u043D\u0438\u044F",t:"num",min:1,max:8,s:.1,h:"\u0412\u043E \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043C\u043E\u0433\u0443\u0442 \u0432\u044B\u0440\u0430\u0441\u0442\u0438 \u043C\u0443\u0442\u0430\u0446\u0438\u0438."},{g:"\u0417\u0430\u0435\u0437\u0434",k:"idle",n:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430, \u0441",t:"num",min:1,max:15,s:.1,h:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u0440\u043F\u0435\u0442\u044C \u043A\u0430\u0440\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u043F\u0440\u043E\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u0432\u043F\u0435\u0440\u0451\u0434."},{g:"\u0417\u0430\u0435\u0437\u0434",k:"offroadGrace",n:"\u0414\u043E\u043F\u0443\u0441\u043A \u0442\u0440\u0430\u0432\u044B, \u0441",t:"num",min:0,max:5,s:.01,h:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0436\u043D\u043E \u0435\u0445\u0430\u0442\u044C \u043F\u043E \u0442\u0440\u0430\u0432\u0435 \u0434\u043E \u0432\u044B\u043B\u0435\u0442\u0430 \u0438\u0437 \u043E\u0442\u0431\u043E\u0440\u0430."},{g:"\u0417\u0430\u0435\u0437\u0434",k:"wallKill",n:"\u0423\u0434\u0430\u0440 \u043E \u043F\u043E\u043A\u0440\u044B\u0448\u043A\u0438 \u2014 \u0432\u044B\u0431\u044B\u0432\u0430\u043D\u0438\u0435",t:"bool",key:1,h:"\u041B\u044E\u0431\u043E\u0435 \u043A\u0430\u0441\u0430\u043D\u0438\u0435 \u0431\u0430\u0440\u044C\u0435\u0440\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043F\u043E\u043F\u044B\u0442\u043A\u0443."},{g:"\u0417\u0430\u0435\u0437\u0434",k:"reverse",n:"\u0414\u043E\u043F\u0443\u0441\u043A \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043D\u0430\u0437\u0430\u0434, \u043C",t:"num",min:5,max:100,s:1,h:"\u041D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434."},{g:"\u0417\u0430\u0435\u0437\u0434",k:"autoStop",n:"\u041F\u0430\u0443\u0437\u0430 \u043F\u0440\u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0438 \u0446\u0435\u043B\u0438",t:"bool",h:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435, \u043A\u043E\u0433\u0434\u0430 \u043A\u0440\u0443\u0433 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u0430."},{g:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",k:"simBudget",n:"\u0414\u043E\u043B\u044F \u043A\u0430\u0434\u0440\u0430 \u043D\u0430 \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044E, %",t:"num",min:20,max:95,s:1,key:1,h:"\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0440\u044B\u0447\u0430\u0433 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F."},{g:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",k:"trainFps",n:"\u041A\u0430\u0434\u0440\u043E\u0432/\u0441 \u043F\u0440\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438",t:"num",min:5,max:60,s:1,key:1,h:"\u0420\u0435\u0436\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u2014 \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0439 \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443."},{g:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",k:"uiHz",n:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u0432/\u0441",t:"num",min:1,max:15,s:1,h:"\u041A\u0430\u043A \u0447\u0430\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0446\u0438\u0444\u0440\u044B \u0438 \u0433\u0440\u0430\u0444\u0438\u043A\u0438."},{g:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",k:"chartWindow",n:"\u041F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0439 \u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0435",t:"num",min:20,max:1e3,s:10,h:"\u0414\u043B\u0438\u043D\u0430 \u043E\u043A\u043D\u0430 \u043D\u0430 \u0432\u0441\u0435\u0445 \u0433\u0440\u0430\u0444\u0438\u043A\u0430\u0445."},{g:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",k:"telemetryWindow",n:"\u041E\u043A\u043D\u043E \u0442\u0435\u043B\u0435\u043C\u0435\u0442\u0440\u0438\u0438, \u0441",t:"num",min:10,max:120,s:1,h:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434 \u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432 \u0442\u0435\u043B\u0435\u043C\u0435\u0442\u0440\u0438\u0438 \u043B\u0438\u0434\u0435\u0440\u0430."},{g:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",k:"ghost",n:"\u0422\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430",t:"bool",h:"\u0416\u0451\u043B\u0442\u0430\u044F \u043B\u0438\u043D\u0438\u044F \u043F\u0440\u043E\u0448\u043B\u043E\u0433\u043E \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u043A\u0440\u0443\u0433\u0430."},{g:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",k:"trail",n:"\u0417\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u0438",t:"bool",h:"\u041D\u0443\u0436\u043D\u0430 \u0434\u043B\u044F \u043B\u0438\u043D\u0438\u0438 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430."},{g:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",k:"dead",n:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u044B\u0431\u044B\u0432\u0448\u0438\u0435 \u043A\u0430\u0440\u0442\u044B",t:"bool",h:"\u0412\u0438\u0434\u043D\u043E, \u0433\u0434\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0435\u0440\u044F\u044E\u0442\u0441\u044F \u043F\u0438\u043B\u043E\u0442\u044B."},{g:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",k:"follow",n:"\u041A\u0430\u043C\u0435\u0440\u0430 \u0437\u0430 \u043B\u0438\u0434\u0435\u0440\u043E\u043C",t:"bool",h:"\u0412\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u0437\u043E\u0440\u0430 \u0432\u0441\u0435\u0439 \u0442\u0440\u0430\u0441\u0441\u044B."},{g:"\u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435",k:"autoSave",n:"\u0410\u0432\u0442\u043E\u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435, \u0441",t:"num",min:5,max:120,s:1,h:"\u041A\u0430\u043A \u0447\u0430\u0441\u0442\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440."},{g:"\u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435",k:"cloudSave",n:"\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 \u043E\u0431\u043B\u0430\u043A\u043E, \u0441",t:"num",min:15,max:600,s:5,h:"\u041A\u0430\u043A \u0447\u0430\u0441\u0442\u043E \u043A\u043E\u043F\u0438\u044F \u0443\u0445\u043E\u0434\u0438\u0442 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440."},{g:"\u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435",k:"history",n:"\u0425\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0439",t:"num",min:100,max:3e3,s:100,h:"\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432 \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F."}],jy={lonato:47,genk:55,pfi:56,kristianstad:50,valley:55,harbor:60,neon:55};function Rr(s,t){let e=t==="junior"?1.09:t==="kz2"?.91:1;return Math.round((jy[s]||55)*e*100)/100}var Hn=Date.now()>>>0||12345;function Pe(){return Hn^=Hn<<13,Hn^=Hn>>>17,Hn^=Hn<<5,Hn>>>=0,Hn/4294967296}function Qy(s){Hn=s>>>0||12345}function tv(){return Hn}function of(s){let t=new Array(Pi).fill(0);return(s||[]).forEach((e,n)=>{n<Pi&&(t[n]=e)}),t}function lf(){let s=of([]),t=1/Math.sqrt(Zi);for(let e=0;e<He;e++)s[e]=(Pe()*2-1)*(e<Zi*In?1.6*t*2:1.2);return s}var mh=new Float32Array(In),Ci=new Float32Array(Zi);function ev(s,t){var n;for(let i=0;i<ri.length;i++)Ci[i]=t.ray(s.x,s.z,s.h-ri[i],sf)/sf;let e=s.cls.vmaxKmh/3.6;return Ci[ri.length]=s.u/e,Ci[ri.length+1]=Pt(si(s.h-((n=s.trackHead)!=null?n:s.h))/1.2,-2,2),Ci[ri.length+2]=Pt(s.d/t.half,-2,2),Ci[ri.length+3]=Pt(s.w/2,-2,2),Ci[ri.length+4]=Pt(s.v/4,-2,2),Ci[ri.length+5]=1,Ci}function nv(s,t,e,n,i=!0){for(let l=0;l<In;l++){let c=0,h=l*Zi;for(let u=0;u<Zi;u++)c+=t[u]*s[h+u];mh[l]=Math.tanh(c)}let r=Zi*In,a=s[r+In],o=s[r+In+1+In];for(let l=0;l<In;l++)a+=mh[l]*s[r+l],o+=mh[l]*s[r+In+1+l];if(i){let l=(e/n%1+1)%1*Ii,c=Math.floor(l)%Ii,h=l-Math.floor(l),u=(c+1)%Ii;a+=(s[He+c]||0)*(1-h)+(s[He+u]||0)*h,o+=(s[He+Ii+c]||0)*(1-h)+(s[He+Ii+u]||0)*h}return{steer:Math.tanh(a),pedal:Math.tanh(o)}}function iv(s,t,e=!0){let n=nv(s.wts,ev(s,t),s.s,t.length,e);return s.ctl=n,{steer:n.steer,throttle:Math.max(0,n.pedal),brake:Math.max(0,-n.pedal)}}var go=1;function rf(s){go=Math.max(go,s)}function sv(){return go}function Vn(s,t,e,n=null,i=!1,r=null){let a=ao(t);return ks(a,s,0,0),a.progress=0,Object.assign(a,{wts:of(e),alive:!0,done:!1,max:0,stale:0,t:0,cp:0,score:0,trail:[],offroad:0,id:i&&n?n.id:go++,parent:i&&n?n.parent:n?n.id:0,mmr:n?Math.round(n.mmr):1e3,trials:i&&n?n.trials:0,wins:i&&n?n.wins:0,age:i&&n?n.age+1:0,rules:r||null,ctl:{steer:0,pedal:0},hit:0}),a}function gh(s,t,e,n,i=!0){if(!s.alive)return;let r=iv(s,t,i);s.t+=Je;let a=0;for(let c=0;c<2;c++)oo(s,r,Je/2,{assist:1}),a=Math.max(a,lo(s,t,Je/2));s.hit=a,s.stale+=Je,s.progress>s.max+2&&(s.max=s.progress,s.stale=0);let o=t.length;s.cp=(s.max>=t.sectorS[1]?1:0)+(s.max>=t.sectorS[2]?1:0),e.trail&&Math.floor(s.t*10)>Math.floor((s.t-Je)*10)&&(s.trail.push([Math.round(s.x*10)/10,Math.round(s.z*10)/10,Math.round(s.y*10)/10]),s.trail.length>1500&&s.trail.shift()),s.score=Math.max(0,s.max);let l=s.rules||e;if(s.progress>=o&&s.cp===2){s.done=!0,s.alive=!1,s.max=o,s.score=o+1e4+(l.timeout-s.t)*100;return}s.offroad=s.surface===2?s.offroad+Je:0,n&&(l.wallKill&&a>.5||s.offroad>l.offroadGrace||s.stale>l.idle||s.progress<-l.reverse||s.t>=l.timeout)&&(s.alive=!1),(!Number.isFinite(s.x)||!Number.isFinite(s.z))&&(s.alive=!1)}function Li(s){return{timeout:s.timeout,idle:s.idle,offroadGrace:s.offroadGrace,wallKill:s.wallKill,reverse:s.reverse}}function rv(s){let t=0;for(let e=0;e<Pi;e+=3){let n=0;for(let r of s)n+=r.wts[e];n/=s.length;let i=0;for(let r of s)i+=(r.wts[e]-n)**2;t+=Math.sqrt(i/s.length)}return t/Math.ceil(Pi/3)}function av(s,t,e){let n=s.map(r=>r.mmr),i=n.map(r=>10**(r/400));s.forEach((r,a)=>{let o=0;s.forEach((c,h)=>{if(a===h)return;let u=r.score===c.score?.5:r.score>c.score?1:0;o+=u-i[a]/(i[a]+i[h])});let l=600+900*Pt(r.max/t,0,1)+(r.done?500+1400*Pt(e/r.t,0,1.4):0);r.mmr=Math.round(Pt(.8*n[a]+.2*l+12*o/Math.max(1,s.length-1),100,4e3)),r.trials++,r.done&&r.wins++})}function af(s,t){if(t.selection==="uniform")return s[Math.floor(Pe()*s.length)];let e=s[Math.floor(Pe()*s.length)];for(let n=1;n<t.tournament;n++){let i=s[Math.floor(Pe()*s.length)];i.score>e.score&&(e=i)}return e}function ov(s){return{id:s.id,parent:s.parent,mmr:s.mmr,trials:s.trials,wins:s.wins,age:s.age,wts:s.wts.slice(),t:s.t,max:s.max,done:s.done,score:s.score,trail:s.trail.map(t=>[t[0],t[1]]),rules:s.rules?{...s.rules}:null}}function cf(s,t,e,n,i,r){let a={generation:1,cls:t.id,pop:[],history:[],champion:null,bestScore:0,bestProgress:0,bestTime:null,clock:0,simTime:0,stagnation:0,effectiveMutation:e.mutation,effectiveStrength:e.strength,leaderboard:[],brainID:i,brainName:r,knowledge:{},originBrain:null,track:n};return a.pop=Array.from({length:e.population},()=>Vn(s,t,lf(),null,!1,Li(e))),a}function xh(s){return s.pop.reduce((t,e)=>e.max>t.max?e:t)}function hf(s,t,e){s.clock+=Je,s.simTime+=Je;for(let n of s.pop)n.alive&&gh(n,t,e,!0,e.memory);return s.pop.every(n=>!n.alive)}function uf(s,t,e){let n=t.length,i=qt[s.cls],r=s.pop.slice().sort((E,w)=>w.score-E.score),a=r[0],o=r.length,l=r.reduce((E,w)=>E+Pt(w.max/n,0,1)*100,0)/o;av(r,n,e.goal);let c=!s.champion||a.score>s.bestScore+1e-4;s.stagnation=c?0:(s.stagnation||0)+1,c&&(s.champion=ov(a),s.bestScore=a.score),s.bestProgress=Math.max(s.bestProgress,Math.min(100,a.max/n*100));let h=r.filter(E=>E.done),u=h.length?Math.min(...h.map(E=>E.t)):null;u!==null&&(s.bestTime=s.bestTime===null?u:Math.min(u,s.bestTime));let d=e.adaptive?Math.min(e.expansion,1+s.stagnation/e.patience):1;s.effectiveMutation=Math.min(1,e.mutation*d),s.effectiveStrength=e.strength*d,s.history.push({g:s.generation,best:Math.min(100,a.max/n*100),mean:l,record:s.bestProgress,finishes:h.length,count:o,lap:u,recordTime:s.bestTime,mmr:Math.max(...r.map(E=>E.mmr)),meanMMR:r.reduce((E,w)=>E+w.mmr,0)/o,diversity:rv(r),mutation:s.effectiveMutation,success:h.length/o*100}),s.history.length>e.history&&s.history.splice(0,s.history.length-e.history),s.leaderboard=r.map(E=>({id:E.id,parent:E.parent,mmr:E.mmr,trials:E.trials,wins:E.wins,t:E.done?E.t:null,progress:E.max/n*100,age:E.age}));let f=e.population,g=Pt(Math.round(f*e.elite/100),1,Math.min(r.length,f-1)),x=r.slice(0,Math.max(2,Math.ceil(r.length*e.parents/100))),m=Li(e),p=r.slice(0,g).map(E=>Vn(t,i,E.wts,E,!0,m));s.champion&&!p.some(E=>E.id===s.champion.id)&&p.length<f&&p.push(Vn(t,i,s.champion.wts,s.champion,!0,m));let y=Math.floor(f*e.immigrants),v=Math.floor((f-g-y)*e.fine),_=0;for(;p.length<f;){if(p.length>=f-y){p.push(Vn(t,i,lf(),null,!1,m));continue}let E=_<v&&s.champion;_++;let w=E?s.champion:af(x,e),A=af(x,e),R=w.wts.slice();if(E){let b=e.memory&&Pe()<.7,M=b?He:0,I=b?Pi:He,k=1+Math.floor(Pe()*3);for(let N=0;N<k;N++){let P=M+Math.floor(Pe()*(I-M));R[P]=Pt(R[P]+(Pe()+Pe()-1)*e.fineStrength,-8,8)}}else for(let b=0;b<R.length;b++){if(b>=He&&!e.memory)continue;Pe()<e.crossover&&(R[b]=e.blend?(R[b]+A.wts[b])/2:A.wts[b]);let M=b>=He?Math.min(1,e.sectorMutation*d):s.effectiveMutation;Pe()<M&&(R[b]=Pt(R[b]+(Pe()+Pe()+Pe()-1.5)*s.effectiveStrength,-8,8)),Pe()<e.zeroReset&&(R[b]=Pe()*2-1)}p.push(Vn(t,i,R,w,!1,m))}return s.pop=p,s.generation++,s.clock=0,{improved:c,top:a,lap:u}}var Gn=(s,t,e)=>typeof s=="number"&&Number.isFinite(s)&&s>=t&&s<=e;function df(s,t,e={}){let n=r=>Math.round(r*1e4)/1e4,i=r=>({id:r.id,parent:r.parent,mmr:r.mmr,trials:r.trials,wins:r.wins,age:r.age,wts:r.wts.map(n),rules:r.rules||null});return{version:4,kind:"apex-lab",savedAt:Date.now(),cfg:t,track:s.track,cls:s.cls,seed:tv(),nextID:sv(),lab:{generation:s.generation,history:s.history,bestScore:s.bestScore,bestProgress:s.bestProgress,bestTime:s.bestTime,simTime:s.simTime,stagnation:s.stagnation,effectiveMutation:s.effectiveMutation,effectiveStrength:s.effectiveStrength,leaderboard:s.leaderboard,brainID:s.brainID,brainName:s.brainName,knowledge:s.knowledge,originBrain:s.originBrain,pop:s.pop.map(i),champion:s.champion?{...i(s.champion),t:s.champion.t,max:s.champion.max,done:s.champion.done,score:s.champion.score,trail:s.champion.trail||[]}:null},...e}}function yh(s,t){if(!s||s.version!==4||s.kind!=="apex-lab"||!t.includes(s.track)||!qt[s.cls])throw Error("\u041D\u0435\u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F");let e=s.lab;if(!e||!Number.isInteger(e.generation)||e.generation<1||!Array.isArray(e.pop)||!Gn(e.pop.length,16,256)||!Array.isArray(e.history)||e.history.length>3e3)throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F");let n=i=>{if(!i||!Array.isArray(i.wts)||i.wts.length!==Pi||!i.wts.every(r=>Gn(r,-8,8)))throw Error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0435\u0441\u0430 \u0441\u0435\u0442\u0438");if(!Number.isSafeInteger(i.id)||!Gn(i.mmr,100,4e3))throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u0438\u043B\u043E\u0442\u0430")};e.pop.forEach(n),e.champion&&n(e.champion);for(let i of e.history)if(!i||!Number.isInteger(i.g)||!Gn(i.best,0,100)||!Gn(i.mean,0,100))throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D \u0433\u0440\u0430\u0444\u0438\u043A");if(e.bestTime!==null&&!Gn(e.bestTime,0,1e3))throw Error("\u041F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D \u0440\u0435\u043A\u043E\u0440\u0434");return s}function ff(s,t,e){var o,l,c;let n=qt[s.cls];Qy(s.seed||Date.now()),rf(s.nextID||1);let i=s.lab,r={generation:i.generation,cls:s.cls,track:s.track,history:i.history,champion:null,bestScore:i.bestScore||0,bestProgress:i.bestProgress||0,bestTime:(o=i.bestTime)!=null?o:null,clock:0,simTime:i.simTime||0,stagnation:i.stagnation||0,effectiveMutation:(l=i.effectiveMutation)!=null?l:e.mutation,effectiveStrength:(c=i.effectiveStrength)!=null?c:e.strength,leaderboard:i.leaderboard||[],brainID:i.brainID,brainName:i.brainName,knowledge:i.knowledge||{},originBrain:i.originBrain||null},a=Li(e);return r.pop=i.pop.map(h=>{let u=Vn(t,n,h.wts,null,!1,h.rules||a);return Object.assign(u,{id:h.id,parent:h.parent,mmr:h.mmr,trials:h.trials,wins:h.wins,age:h.age}),u}),i.champion&&(r.champion={...i.champion,wts:i.champion.wts.slice(),trail:Array.isArray(i.champion.trail)?i.champion.trail:[]}),rf(Math.max(...r.pop.map(h=>h.id+1),r.champion?r.champion.id+1:1)),r}function vh(s,t){return!s||typeof s.id!="string"||s.id.length>100||typeof s.name!="string"||s.name.length>80||!t.includes(s.sourceMap)||!qt[s.cls]||!Array.isArray(s.general)||s.general.length!==He||!s.general.every(e=>Gn(e,-8,8))||!Gn(s.mmr,100,4e3)||!s.knowledge||typeof s.knowledge!="object"?!1:Object.keys(s.knowledge).every(e=>{let n=s.knowledge[e];return t.includes(e)&&n&&Array.isArray(n.memory)&&n.memory.length===Ar&&n.memory.every(i=>Gn(i,-8,8))&&Number.isInteger(n.generation)&&(n.bestTime===null||Gn(n.bestTime,0,1e3))})}function _h(s,t,e,n){let i=s.knowledge[e],r=s.general.concat(i?i.memory:new Array(Ar).fill(0)),a=Vn(t,qt[s.cls]||qt.ok,r,null,!1,i&&i.rules?{...i.rules}:Li(n));return a.mmr=s.mmr,a}var Mh={};function ai(s){return Mh[s]||(Mh[s]=new so(we.find(t=>t.id===s))),Mh[s]}var Le=(s,t)=>s+":"+t,Cr=.8,bh=20,mf={id:"ai",name:"\u041D\u0435\u0439\u0440\u043E\u043F\u0438\u043B\u043E\u0442",num:0,color:"#3ddc84",accent:"#0f1115",suit:"#123824"},Ji=class{constructor(t,e){var n;this.app=t,this.cfg=e,this.mode=e.mode,this.def=we.find(i=>i.id===e.trackId),this.geom=ai(e.trackId),this.theme=bd[this.def.theme],this.quality=t.settings.quality,this.cls=qt[e.cls||"ok"],this.laps=this.mode==="attract"?999:e.laps||3,this.diff=sh[e.difficulty||"normal"],this.playerOpts={assist:(n=t.settings.assist)!=null?n:1,manual:t.settings.gearbox==="manual"&&!!this.cls.gears,stab:!0},this.aiOpts={assist:1,manual:!1},this.scene=new Ps,this.env=tf(this.scene,this.geom,this.theme,this.quality),this.track=jd(this.geom,this.theme,this.quality),this.scene.add(this.track.group),this.fx=new mo(this.scene,this.quality),this.blobMat=new te({map:Vd(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.dustColor=this.theme.ground==="sand"?[.86,.74,.55]:this.theme.ground==="city"?[.5,.5,.56]:[.42,.5,.26],this.time=0,this.clock=0,this.canDrive=!1,this.state="intro",this.stateT=0,this.finishCount=0,this.fastestLap=1/0,this.sessionBestSec=[1/0,1/0,1/0],this.itemsOn=!!this.def.fun&&["race","cup","attract"].includes(this.mode),this.items=new fo(this,this.itemsOn),this.karts=[],this.ais=[],this.player=null,this.hud=t.hud,this.camRig=t.camRig,this.camRig.tv.target=null,this.rec=t.store.record(Le(this.def.id,this.cls.id)),this.ghostFrames=[],this.trace=[],this.ghostMesh=null,this.lightsOn=0,this.holdT=1+Math.random()*.9,this.startPressT=null,this.results=null,this.sid=Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36),this.mode==="lab"?this.setupLab():this.mode==="watch"?this.setupWatch(e):this.buildField(),this.order=this.karts.slice(),this.focus=this.player||this.watchKart||this.karts[0]||null,this.focus&&this.camRig.snapChase(this.focus),this.player&&this.rec.ghost&&this.mode==="tt"&&(this.ghostMesh=ho(this.player.driver,{ghost:!0}),this.ghostMesh.visible=!1,this.scene.add(this.ghostMesh)),(this.mode==="attract"||this.mode==="watch")&&(this.state="racing",this.canDrive=!0),this.mode==="tt"&&(this.state="racing",this.canDrive=!0,this.hud&&this.hud.startLights(-1)),this.mode==="lab"&&(this.state="lab",this.canDrive=!0),this.mode==="tt"&&this.itemsOn&&this.items.give(this.player,"nitro3")}physOpts(t){return t.isPlayer?this.playerOpts:this.aiOpts}buildField(){let t=ze((Date.now()&65535)+17),e=this.cfg,n=[];if(this.mode==="attract")n=mn.slice().sort(()=>t()-.5).map(i=>({d:i,ai:!0}));else if(this.mode==="tt")n=[{d:mn.find(i=>i.id===e.driverId)||mn[0],ai:!1}];else{let i=mn.find(r=>r.id===e.driverId)||mn[0];e.grid?n=e.grid.map(r=>({d:mn.find(a=>a.id===r),ai:r!==i.id})):(n=mn.filter(r=>r.id!==i.id).sort(()=>t()-.5).slice(0,e.opponents).map(r=>({d:r,ai:!0})),n.splice(Math.min(5,n.length),0,{d:i,ai:!1}))}n.forEach((i,r)=>{let a=new Er(this,i.d,{isPlayer:!i.ai,index:r,cls:this.cls});if(this.mode==="tt")a.placePit(Math.min(.9,this.geom.pit?(this.geom.pit.before+14)/this.geom.pit.span:.5)),a.outLap=!0;else{let c=dh(this.geom,r);a.place(c.s,c.d)}this.scene.add(a.mesh),this.karts.push(a);let o=this.mode==="attract"?sh.normal:this.diff,l=new uo(this,a,o,1e3+r*77+Math.floor(t()*1e3));a.ai=l,i.ai?this.ais.push(l):this.player=a}),this.mode==="attract"&&this.karts.forEach((i,r)=>{let a=this.geom.wrapS(r*19+30);i.place(a,0),i.progress=a,i.u=18})}setupLab(){let t=new re(1.2,.35,1.8).translate(0,.3,0),e=new ln(.28,8,6).translate(0,.85,-.15),n=lv([t,e]);this.labMesh=new tn(n,new Rt({color:16777215,roughness:.6}),160),this.labMesh.frustumCulled=!1,this.labMesh.count=0,this.scene.add(this.labMesh),this.leaderMesh=ho(mf,{shadows:this.quality!=="low"}),this.labScale=2.4,this.scene.add(this.leaderMesh);let i=new Jt;i.setAttribute("position",new _e(new Float32Array(1600*3),3)),i.setDrawRange(0,0),this.champLine=new Na(i,new mr({color:16762941,transparent:!0,opacity:.9,depthTest:!1})),this.champLine.frustumCulled=!1,this.champLine.renderOrder=5,this.scene.add(this.champLine),this.champKey="",this.dummy=new ye,this.colAlive=new ft("#b9a7ff"),this.colDead=new ft("#59616e"),this.labRef=null}syncLab(t,e){var c;this.labRef=t;let n=this.dummy,i=0,r=null,a=e.follow?1:this.labScale;for(let h of t.pop)(!r||h.max>r.max)&&(r=h);for(let h of t.pop)if(h!==r&&!(!h.alive&&!e.dead)&&(n.position.set(h.x,h.y,h.z),n.rotation.set(0,h.h,0),n.scale.setScalar(a),n.updateMatrix(),this.labMesh.setMatrixAt(i,n.matrix),this.labMesh.setColorAt(i,h.alive?this.colAlive:this.colDead),i++,i>=160))break;if(this.labMesh.count=i,this.labMesh.instanceMatrix.needsUpdate=!0,this.labMesh.instanceColor&&(this.labMesh.instanceColor.needsUpdate=!0),r){this.leaderMesh.visible=!0,this.leaderMesh.position.set(r.x,r.y,r.z),this.leaderMesh.rotation.set(0,r.h,0),this.leaderMesh.scale.setScalar(this.app.labCfg&&this.app.labCfg.follow?1:this.labScale*1.15);for(let h of this.leaderMesh.userData.wheels)h.front&&(h.pivot.rotation.y=r.delta);this.labLeader=r}let o=t.champion,l=o&&e.ghost?o.id+":"+o.score:"";if(l!==this.champKey){this.champKey=l;let h=this.champLine.geometry.attributes.position.array,u=o&&e.ghost?o.trail||[]:[],d=Math.min(1600,u.length);for(let f=0;f<d;f++)h[f*3]=u[f][0],h[f*3+1]=((c=u[f][2])!=null?c:0)+.35,h[f*3+2]=u[f][1];this.champLine.geometry.setDrawRange(0,d),this.champLine.geometry.attributes.position.needsUpdate=!0}}setupWatch(t){var e;this.watchCar=t.car,this.watchCfg=t.labCfg,this.watchKart=new Er(this,{...mf,name:t.pilotName||"\u041D\u0435\u0439\u0440\u043E\u043F\u0438\u043B\u043E\u0442"},{isPlayer:!1,cls:this.cls}),this.watchKart.isWatch=!0,this.watchBest=(e=t.bestTime)!=null?e:null,this.scene.add(this.watchKart.mesh),this.karts.push(this.watchKart),this.watchAcc=0,this.copyWatch()}copyWatch(){let t=this.watchCar,e=this.watchKart;for(let n of["x","y","z","h","u","v","w","delta","lift","sliding","surface","onKerb","lock","spin","ax","slope","trackHead","rpm","gear","s","d","progress","throttle","brake","slipR","slipF"])e[n]=t[n]}sound(t,e,n=0,i=null){if(this.mode==="attract"||this.mode==="lab"||!this.app.audio.ctx)return;let r=1;if(e&&e!==this.player){let a=i?i.x:e.x,o=i?i.z:e.z,l=this.app.camera.position;r=Pt(1-Math.hypot(a-l.x,o-l.z)/70,0,1)*.8,(t==="pickup"||t==="itemReady")&&(r*=.3)}this.app.audio.play(t,n,r)}onPlayerBoost(t){this.camRig.shake(.08*t),this.hud.boostFlash()}onKartHit(t,e,n){t===this.player?(this.camRig.shake(e==="rocket"?.6:.25),this.sound("hit",t),this.hud.message(e==="rocket"?"\u041F\u0440\u044F\u043C\u043E\u0435 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435":"\u0417\u0430\u043D\u0435\u0441\u043B\u043E \u043D\u0430 \u043C\u0430\u0441\u043B\u0435","bad",1.4)):n&&n===this.player&&this.hud.message("\u041F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435: "+t.name,"good",1.4)}onWallHit(t,e,n,i){let r=Math.min(18,e*2);for(let a=0;a<r;a++)this.fx.dust(n,t.y+.4,i,(Math.random()-.5)*5,1+Math.random()*2,(Math.random()-.5)*5,.12,.12,.12,.5);this.sound("wall",t,e),t===this.focus&&this.camRig.shake(Math.min(.5,e*.04))}nearCamera(t){let e=this.app.camera.position;return(t.x-e.x)**2+(t.z-e.z)**2<90*90}update(t,e){if(this.clock+=t,this.stateT+=t,this.mode==="lab"){this.commonVisuals(t);return}if(this.mode==="watch"){this.updateWatch(t);return}let n=this.player;if(this.state==="intro")this.camRig.intro(Math.min(1,this.stateT/3.2),this.focus),(this.stateT>=3.2||e.item||e.skip)&&(this.setState("countdown"),this.camRig.snapChase(this.focus),this.hud.startLights(0));else if(this.state==="countdown"){let o=Math.min(5,Math.floor(this.stateT/Cr)+1);o!==this.lightsOn&&this.stateT<Cr*5&&(this.lightsOn=o,this.track.setLights(o),this.hud.startLights(o),this.app.audio.play("light")),n&&!this.app.hud.touchEnabled&&(e.throttle>.5?this.startPressT===null&&(this.startPressT=this.stateT):this.startPressT=null),this.stateT>=Cr*5+this.holdT&&this.go()}else this.state==="finished"&&this.stateT>3&&!this.results&&(this.results=this.buildResults(),this.app.onRaceFinished(this.results,this));let i=Math.max(1,Math.ceil(t/(1/120))),r=t/i;for(let o of this.ais)o.update(t);let a=n&&!n.finished?e:n?n.ai.update(t):null;for(let o=0;o<i;o++){for(let l of this.karts){let c=l===n?a:l.ai.inp;if(!this.canDrive){l.rpm+=((c&&c.throttle>.3?.55:.18)*l.cls.rpmMax-l.rpm)*.05;continue}l.step(r,c)}this.collide(),this.canDrive&&(this.time+=r);for(let l of this.karts)this.timing(l)}if(this.canDrive){for(let o of this.karts){let l=o===n?a:o.ai.inp;this.itemsOn&&l&&l.item&&this.items.use(o),this.items.checkPads(o,this.track.pads,t)}this.items.update(t,this.clock)}n&&e.reset&&this.canDrive&&!n.finished&&(n.respawn(),n.outLap||(n.lapInvalid=!0,this.hud.message("\u041A\u0440\u0443\u0433 \u043D\u0435 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D","bad",1.5))),n&&e.shiftUp&&this.app.shift(n,1),n&&e.shiftDown&&this.app.shift(n,-1),this.commonVisuals(t,e),this.updateAudio(t,a),this.mode!=="attract"&&this.hud.update(this,t)}commonVisuals(t,e={}){for(let a of this.karts)a.syncMesh(t,this.clock);this.fx.update(t),this.track.update(t);for(let a of this.env.updaters)a(t,this.clock);this.mode!=="lab"&&this.rank(),this.updateGhost(t),this.mode==="lab"?this.labRef&&this.app.labCfg&&this.app.labCfg.follow&&this.labLeader?this.camRig.top(t,this.labLeader,1.4):this.camRig.overview(t,this.geom.bounds(8)):this.mode==="attract"?this.camRig.broadcast(t,this.karts,this.geom):this.state==="finished"?this.camRig.orbit(t,this.focus):this.state!=="intro"&&this.focus&&(e.camera&&(this.camRig.mode=(this.camRig.mode+1)%3),this.focus.onKerb&&this.focus.u>8&&this.camRig.shake(this.camRig.mode===0?.04+this.focus.u*.002:.012+this.focus.u*7e-4),this.camRig.follow(t,this.focus,e.look));let n=this.app.camera.position,i=this.mode==="attract"?this.camRig.tv.target||this.focus:this.focus;for(let a of this.karts){if(a===i){a.mesh.visible=!0;continue}a.mesh.visible=(a.x-n.x)**2+(a.z-n.z)**2+(a.y+.6-n.y)**2>2.6*2.6}let r=this.mode==="lab"?this.labLeader||{mesh:{position:new L(this.env.center.x,0,this.env.center.z)}}:this.mode==="attract"?this.camRig.tv.target||this.focus:this.focus;r&&r.mesh&&this.env.follow(r.mesh.position),this.fx.setScale(this.app.renderer.domElement.height/(2*Math.tan(this.app.camera.fov*Math.PI/360)))}updateWatch(t){let e=this.watchCar;if(e.alive){for(this.watchAcc=Math.min(this.watchAcc+t,.25);this.watchAcc>=Je&&e.alive;)gh(e,this.geom,this.watchCfg,!1,this.watchCfg.memory),(e.t>=this.watchCfg.timeout||e.stale>8)&&(e.alive=!1),this.watchAcc-=Je;this.time=e.t,this.copyWatch(),!e.alive&&!this.watchDone&&(this.watchDone=!0,this.app.onWatchFinished(e,this))}this.commonVisuals(t,this.app.lastInput||{}),this.updateAudio(t,{throttle:e.throttle}),this.hud.update(this,t)}setState(t){this.state=t,this.stateT=0}go(){this.setState("racing"),this.canDrive=!0,this.lightsOn=0,this.track.setLights(0),this.hud.startLights(-1),this.app.audio.play("go"),this.hud.message("\u0421\u0442\u0430\u0440\u0442!","go",1);for(let e of this.karts)e.lapStart=0,e.secStart=0;let t=this.player;if(t){let e=this.startPressT;e!==null&&e>=Cr*4?(t.u=2.5,this.hud.message("\u041E\u0442\u043B\u0438\u0447\u043D\u0430\u044F \u0440\u0435\u0430\u043A\u0446\u0438\u044F","good",1.4)):e!==null&&e<Cr*2&&(t.stallT=.8,this.hud.message("\u0424\u0430\u043B\u044C\u0441\u0442\u0430\u0440\u0442: \u0437\u0430\u0433\u043B\u043E\u0445","bad",1.2))}}collide(){let t=this.karts,e=1.75;for(let n=0;n<t.length;n++){let i=t[n];for(let r=n+1;r<t.length;r++){let a=t[r],o=a.x-i.x,l=a.z-i.z,c=o*o+l*l;if(c>=e*e||Math.abs(i.y-a.y)>1.5)continue;let h=Math.sqrt(c)||.001,u=o/h,d=l/h,f=e-h,g=i.cls.mass*(i.shieldT>0?3:1),x=a.cls.mass*(a.shieldT>0?3:1),m=g+x;i.x-=u*f*(x/m),i.z-=d*f*(x/m),a.x+=u*f*(g/m),a.z+=d*f*(g/m);let p=(a.vx-i.vx)*u+(a.vz-i.vz)*d;if(p<0){let y=-1.35*p/(1/g+1/x);for(let[v,_,E]of[[i,-1,g],[a,1,x]]){let w=v.vx+_*y*u/E,A=v.vz+_*y*d/E,R=Math.sin(v.h),b=Math.cos(v.h);v.u=w*R+A*b,v.v=w*b-A*R,v.vx=w,v.vz=A}if(-p>2){let v=(i.x+a.x)/2,_=(i.z+a.z)/2;this.sound("bump",i===this.player||a===this.player?this.player:i,0,{x:v,z:_}),(i===this.player||a===this.player)&&this.camRig.shake(Math.min(.35,-p*.03))}}}}}timing(t){if(t.finished||!this.canDrive)return;let e=this.geom,n=e.length,i=t.progress-t.lapsDone*n;if(!t.outLap){let u=i>=e.sectorS[2]?2:i>=e.sectorS[1]?1:0;if(u>t.sector){let d=this.time-t.secStart;t.curSectors[t.sector]=d,this.onSector(t,t.sector,d),t.sector=u,t.secStart=this.time}if(t===this.player){let d=Math.floor(i/10);d>=0&&this.trace[d]===void 0&&(this.trace[d]=this.time-t.lapStart)}}let r=Math.floor(t.progress/n);if(r<=t.lapsDone)return;if(t.lapsDone=r,t.outLap){t.outLap=!1,t.lapStart=this.time,t.secStart=this.time,t.sector=0,t.curSectors=[null,null,null],t.lapInvalid=!1,t===this.player&&(this.ghostFrames=[],this.trace=[],this.ghostT=0,this.hud.message("\u041A\u0440\u0443\u0433 1 \xB7 \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0448\u043B\u043E","info",1.4));return}let a=this.time-t.lapStart,o=this.time-t.secStart;t.curSectors[2]=o,this.onSector(t,2,o),t.lastSectors=t.curSectors.slice(),(t.secHist||(t.secHist=[])).push(t.lastSectors),t.lapStart=this.time,t.secStart=this.time,t.sector=0,t.curSectors=[null,null,null];let l=!t.lapInvalid;t.lapInvalid=!1,t.lapTimes.push(l?a:null);let c=l&&a<t.bestLap;c&&(t.bestLap=a);let h=l&&a<this.fastestLap;h&&(this.fastestLap=a),t===this.player&&this.onPlayerLap(a,c,h,l),t.lapTimes.length>=this.laps&&this.mode!=="attract"&&this.finish(t)}onSector(t,e,n){let i=this.sessionBestSec[e];if(n<i&&(this.sessionBestSec[e]=n),t!==this.player||t.lapInvalid)return;let r=this.rec.bestSectors?this.rec.bestSectors[e]:null;t.pbSec=t.pbSec||[1/0,1/0,1/0];let a="yellow",o=Math.min(r!=null?r:1/0,i);n<=o?a="purple":n<=t.pbSec[e]&&(a="green"),n<t.pbSec[e]&&(t.pbSec[e]=n),(r==null||n<r)&&this.app.store.saveSector(Le(this.def.id,this.cls.id),e,n),this.hud.sectorDone(e,n,a)}onPlayerLap(t,e,n,i){let r=this.player,a=i&&(this.rec.bestLap==null||t<this.rec.bestLap),o=i?a?"record":n?"fastest":e?"pb":"normal":"invalid";this.hud.lapFlash(t,o,this.rec.bestLap),a?(this.app.store.saveLap(Le(this.def.id,this.cls.id),t,this.ghostFrames,this.trace,r.driver.id),this.rec=this.app.store.record(Le(this.def.id,this.cls.id)),this.sound("best",r)):this.sound("lap",r),i&&e&&this.app.onPlayerBestLap(t,this),this.ghostFrames=[],this.trace=[],this.ghostT=0;let l=r.lapTimes.length;l===this.laps-1&&this.laps>1?(this.hud.message("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043A\u0440\u0443\u0433","final",2),this.sound("finalLap",r)):l<this.laps&&this.hud.message("\u041A\u0440\u0443\u0433 "+(l+1),"info",1.2)}finish(t){if(t.finished=!0,t.finishTime=this.time,t.finishPos=this.finishCount++,t===this.player){this.setState("finished");let e=t.finishPos+1;this.hud.message(this.mode==="tt"?"\u0421\u0435\u0441\u0441\u0438\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430":`\u0424\u0438\u043D\u0438\u0448: ${e}-\u0435 \u043C\u0435\u0441\u0442\u043E`,e===1?"final":"info",3),this.sound("finish",t),this.hud.showTouch(!1)}}rank(){let t=this.karts.slice().sort((n,i)=>n.finished&&i.finished?n.finishTime-i.finishTime:n.finished?-1:i.finished?1:i.progress-n.progress);t.forEach((n,i)=>n.rank=i),this.order=t;let e=this.player;for(let n of this.ais){let i=n.diff.speed;e&&!e.finished&&this.mode!=="attract"&&(i*=1+Pt(-(n.kart.progress-e.progress)/250,-1,1)*n.diff.rubber),n.kart.speedScale=i}}updateGhost(t){let e=this.player;if(!e||this.state!=="racing"||!this.canDrive||e.outLap){this.ghostMesh&&(this.ghostMesh.visible=!1);return}for(this.recAcc=(this.recAcc||0)+t;this.recAcc>=1/bh;)this.recAcc-=1/bh,this.ghostFrames.push(Math.round(e.x*100)/100,Math.round(e.y*100)/100,Math.round(e.z*100)/100,Math.round(e.h*1e3)/1e3);let n=this.ghostMesh,i=this.rec.ghost;if(!n||!i)return;this.ghostT=(this.ghostT||0)+t;let r=this.ghostT*bh,a=Math.floor(r),o=i.length/4;if(a>=o-1){n.visible=!1;return}let l=r-a,c=a*4,h=c+4;n.visible=!0,n.position.set(Mr(i[c],i[h],l),Mr(i[c+1],i[h+1],l),Mr(i[c+2],i[h+2],l));let u=i[h+3]-i[c+3];u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2),n.rotation.y=i[c+3]+u*l}delta(){let t=this.player,e=this.rec.trace;if(!t||!e||!this.canDrive||t.finished||t.outLap)return null;let n=t.progress-t.lapsDone*this.geom.length;if(n<20)return null;let i=n/10,r=Math.floor(i);return r+1>=e.length||e[r]==null||e[r+1]==null?null:this.time-t.lapStart-(e[r]+(e[r+1]-e[r])*(i-r))}updateAudio(t,e){let n=this.app.audio;if(!n.ctx)return;if(this.mode==="attract"||this.mode==="lab"||this.app.paused){n.silenceEngines();return}let i=this.focus;if(!i)return;n.setEngine(0,i.rpm,i.cls.rpmMax,i.throttle||0,1);let r=this.app.camera.position,a=this.karts.filter(o=>o!==i).map(o=>({k:o,d:Math.hypot(o.x-r.x,o.z-r.z)})).sort((o,l)=>o.d-l.d);for(let o=0;o<2;o++){let l=a[o];if(!l){n.setEngine(o+1,0,1,0,0);continue}n.setEngine(o+1,l.k.rpm,l.k.cls.rpmMax,l.k.throttle||.8,Pt(1-l.d/50,0,1)*.8)}n.setSkid(i.surface===2?0:Pt(i.sliding*1.2+(i.lock?.5:0),0,1),i.sliding),n.setWind(Pt((Math.abs(i.u)/36)**2,0,1)),n.setRumble(i.onKerb&&Math.abs(i.u)>4?.6:i.surface===2&&Math.abs(i.u)>3?.35:0)}buildResults(){let t=this.geom.length,e=this.order.map(n=>{let i=n.finished?n.finishTime:null;if(!n.finished){let r=this.laps*t-n.progress;i=this.time+r/Math.max(12,n.progress/Math.max(1,this.time))}return{driver:n.driver,name:n.name,isPlayer:n.isPlayer,time:i,est:!n.finished,bestLap:n.bestLap,laps:n.lapTimes.slice(),sectors:n.lastSectors||null,secHist:(n.secHist||[]).slice(),pbSec:n.pbSec||null,lapsDone:n.lapTimes.length}});return e.sort((n,i)=>n.time-i.time),e.forEach((n,i)=>n.pos=i+1),{mode:this.mode,trackId:this.def.id,trackName:this.def.name,cls:this.cls.id,laps:this.laps,rows:e,fastestLap:this.fastestLap,sessionBestSec:this.sessionBestSec.slice()}}dispose(){Pd(this.scene),this.scene.clear()}};function lv(s){let t=[],e=[],n=[],i=0;for(let a of s){let o=a.attributes.position,l=a.attributes.normal;for(let c=0;c<o.count;c++)t.push(o.getX(c),o.getY(c),o.getZ(c)),e.push(l.getX(c),l.getY(c),l.getZ(c));if(a.index)for(let c=0;c<a.index.count;c++)n.push(a.index.getX(c)+i);else for(let c=0;c<o.count;c++)n.push(c+i);i+=o.count}let r=new Jt;return r.setAttribute("position",new Dt(t,3)),r.setAttribute("normal",new Dt(e,3)),r.setIndex(n),r}var ee=s=>document.getElementById(s),xo={nitro:'<svg viewBox="0 0 64 64" aria-label="\u041D\u0438\u0442\u0440\u043E"><defs><linearGradient id="gN" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fd0ff"/><stop offset="1" stop-color="#1f6fe0"/></linearGradient></defs><path d="M32 60c-9 0-15-6-15-13 0-6 4-9 6-14 1 4 3 6 5 6-1-9 3-17 10-23-1 7 3 11 6 16 3 4 3 7 3 11 0 10-6 17-15 17z" fill="#ff8a00"/><path d="M32 60c-5 0-8-3-8-8 0-4 3-6 4-9 1 3 3 4 5 4 0-4 2-7 4-9 0 4 3 6 3 10 0 7-3 12-8 12z" fill="#ffe14a"/><rect x="22" y="4" width="20" height="30" rx="6" fill="url(#gN)" stroke="#fff" stroke-width="2"/><rect x="27" y="1" width="10" height="5" rx="1.5" fill="#d8dde3"/><text x="32" y="25" text-anchor="middle" font-family="Unbounded,Arial Black,sans-serif" font-weight="900" font-size="10" fill="#fff">N\u2082O</text></svg>',rocket:'<svg viewBox="0 0 64 64" aria-label="\u0420\u0430\u043A\u0435\u0442\u0430"><g transform="rotate(45 32 32)"><path d="M32 4c7 7 9 17 9 27v14H23V31c0-10 2-20 9-27z" fill="#eef1f4" stroke="#fff" stroke-width="1.5"/><path d="M32 4c4 4 6.5 9 7.8 14H24.2C25.5 13 28 8 32 4z" fill="#e0322b"/><path d="M23 36l-8 10v6l8-4zM41 36l8 10v6l-8-4z" fill="#e0322b"/><circle cx="32" cy="27" r="4.5" fill="#1f6fe0" stroke="#fff" stroke-width="1.5"/><path d="M26 45h12l-2 7c-1 5-3 9-4 11-1-2-3-6-4-11z" fill="#ffb040"/></g></svg>',oil:'<svg viewBox="0 0 64 64" aria-label="\u041C\u0430\u0441\u043B\u043E"><ellipse cx="32" cy="50" rx="24" ry="8" fill="#101014"/><ellipse cx="26" cy="49" rx="9" ry="2.5" fill="#6a4dff" opacity=".55"/><path d="M32 4C26 16 18 24 18 34a14 14 0 0 0 28 0C46 24 38 16 32 4z" fill="#15151b" stroke="#8d8dff" stroke-width="2"/><path d="M26 30c0 4 2 7 5 8" stroke="#b6b6ff" stroke-width="3" stroke-linecap="round" fill="none"/></svg>',shield:'<svg viewBox="0 0 64 64" aria-label="\u0429\u0438\u0442"><path d="M32 4l22 8v16c0 15-9 26-22 32C19 54 10 43 10 28V12z" fill="#0e3d52" stroke="#5fd4ff" stroke-width="3"/><path d="M32 12l14 5v11c0 10-5 18-14 22z" fill="#5fd4ff" opacity=".55"/><path d="M24 31l6 6 11-12" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'};xo.nitro3=xo.nitro;var gf=["nitro","rocket","oil","shield"],cv=["rgba(255,208,0,0.95)","rgba(95,212,255,0.95)","rgba(242,243,245,0.95)"],yo=class{constructor(){this.root=ee("hud"),this.el={pos:ee("hudPos"),posBig:ee("pos-big"),posNum:ee("pos-num"),posOf:ee("pos-of"),lapLine:ee("lapLine"),watch:ee("watchTag"),tower:ee("tower"),slot:ee("item-slot"),icon:ee("item-icon"),cnt:ee("item-cnt"),fps:ee("fps"),lights:ee("lights"),msgs:ee("msgs"),wrong:ee("wrongway"),minimap:ee("minimap"),leds:ee("leds"),speed:ee("speed"),gear:ee("gear"),rpm:ee("rpm"),classTag:ee("classTag"),ltNow:ee("lt-now"),ltDelta:ee("lt-delta"),ltLast:ee("lt-last"),ltBest:ee("lt-best"),ltRec:ee("lt-rec"),timing:ee("timing"),sectors:ee("sectors"),lines:ee("speedlines"),hitflash:ee("hitflash"),touch:ee("touch")},this.el.leds.innerHTML=Array.from({length:12},(t,e)=>`<i class="${e<6?"g":e<10?"y":"r"}"></i>`).join(""),this.ledEls=Array.from(this.el.leds.children),this.secEls=Array.from(this.el.sectors.children).map(t=>({root:t,b:t.querySelector("b")})),this.cache={},this.lastRoulette=0,this.fpsAcc=0,this.fpsN=0,this.touchEnabled=!1}show(t){this.root.hidden=!t,t||this.showTouch(!1)}showTouch(t){let e=!!(t&&this.touchEnabled&&this.race&&this.race.player);this.el.touch.hidden=!e,document.body.classList.toggle("touch-on",e);let n=this.el.touch.querySelector("[data-touch=item]");n&&(n.hidden=!(this.race&&this.race.itemsOn))}showFps(t){this.el.fps.hidden=!t}set(t,e,n,i="textContent"){this.cache[t]!==n&&(this.cache[t]=n,e[i]=n)}setupRace(t){this.race=t,this.cache={},this.el.msgs.innerHTML="",this.el.wrong.hidden=!0,this.el.lights.hidden=!0;let e=t.mode==="watch",n=t.karts.length>1&&!e;this.el.tower.hidden=!n,this.el.posBig.hidden=!n,this.el.pos.hidden=e,this.el.watch.hidden=!e,e&&(this.el.watch.textContent="\u041D\u0435\u0439\u0440\u043E\u043F\u0438\u043B\u043E\u0442 \xB7 "+(t.watchKart?t.watchKart.name:"")),this.el.slot.hidden=!t.itemsOn,this.el.classTag.textContent=t.cls.short,this.el.gear.textContent=t.cls.gears?"1":"\u2014",this.el.ltRec.textContent=Zt(t.rec.bestLap),this.el.ltLast.textContent=Zt(null),this.el.ltBest.textContent=Zt(null),this.clearSectors(!0),this.drawMinimapBase(t),this.el.tower.innerHTML=t.karts.map(()=>'<div class="row"><span class="p"></span><i></i><span class="n"></span><span class="g"></span></div>').join(""),this.rows=Array.from(this.el.tower.children).map(i=>({r:i,p:i.children[0],i:i.children[1],n:i.children[2],g:i.children[3]})),this.boostT=0,this.watchSec={sector:0,start:0,lap:0}}clearSectors(t){this.secEls.forEach((e,n)=>{!t&&n===0||(e.root.className="sec",e.b.textContent="\u2014")})}sectorDone(t,e,n){t===0&&this.clearSectors(!1);let i=this.secEls[t];i.root.className="sec "+n,i.b.textContent=e.toFixed(3)}drawMinimapBase(t){let e=t.geom,n=e.bounds(12),i=document.createElement("canvas");i.width=i.height=340;let r=i.getContext("2d"),a=300/Math.max(n.maxX-n.minX,n.maxZ-n.minZ),o=(340-(n.maxX-n.minX)*a)/2,l=(340-(n.maxZ-n.minZ)*a)/2;this.map={sc:a,ox:o,oz:l,minX:n.minX,minZ:n.minZ};let c=d=>o+(d-n.minX)*a,h=d=>l+(d-n.minZ)*a;if(r.lineJoin="round",r.lineCap="round",e.pit){r.beginPath();for(let d=0;d<=e.pit.M;d+=2)r.lineTo(c(e.pit.x[d]),h(e.pit.z[d]));r.strokeStyle="rgba(0,0,0,0.5)",r.lineWidth=7,r.stroke(),r.setLineDash([5,4]),r.strokeStyle="rgba(200,205,215,0.75)",r.lineWidth=3,r.stroke(),r.setLineDash([])}(()=>{r.beginPath();for(let d=0;d<=e.N;d+=2){let f=d%e.N;r.lineTo(c(e.px[f]),h(e.pz[f]))}r.closePath()})(),r.strokeStyle="rgba(0,0,0,0.6)",r.lineWidth=15,r.stroke(),r.strokeStyle="#2a2e36",r.lineWidth=9,r.stroke();for(let d=0;d<3;d++){let f=e.sectorS[d],g=d<2?e.sectorS[d+1]:e.length;r.beginPath();for(let x=f;x<=g;x+=2){let m=e.sIdx(x);r.lineTo(c(e.px[m]),h(e.pz[m]))}r.strokeStyle=cv[d],r.lineWidth=3.2,r.stroke()}for(let d=0;d<3;d++){let f=e.sectorS[d],g=e.pointAt(f,-e.half-2),x=e.pointAt(f,e.half+2);if(r.strokeStyle=d===0?"#ffffff":"rgba(255,255,255,0.7)",r.lineWidth=d===0?4:2,r.beginPath(),r.moveTo(c(g.x),h(g.z)),r.lineTo(c(x.x),h(x.z)),r.stroke(),d>0){let m=e.pointAt(f,e.half+9);r.fillStyle="rgba(255,255,255,0.8)",r.font="700 15px system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("S"+(d+1),c(m.x),h(m.z))}}this.mapBase=i,this.mapCtx=this.el.minimap.getContext("2d")}drawMinimap(t){let e=this.mapCtx,n=this.map;e.clearRect(0,0,340,340),e.drawImage(this.mapBase,0,0);let i=l=>n.ox+(l-n.minX)*n.sc,r=l=>n.oz+(l-n.minZ)*n.sc;for(let l of t.items.hazards)e.fillStyle="#8d8dff",e.fillRect(i(l.x)-3,r(l.z)-3,6,6);for(let l of t.items.rockets)e.fillStyle="#ff5a2a",e.beginPath(),e.arc(i(l.x),r(l.z),4,0,7),e.fill();let a=t.focus,o=t.karts.slice().sort((l,c)=>(l===a?1:0)-(c===a?1:0));for(let l of o){let c=i(l.x),h=r(l.z),u=l===a;e.beginPath(),e.arc(c,h,u?8.5:6,0,Math.PI*2),e.fillStyle=l.driver.color,e.fill(),e.lineWidth=u?3.5:2,e.strokeStyle=u?"#ffd000":"#0f1115",e.stroke()}}startLights(t){if(t<0){this.el.lights.hidden=!0;return}this.el.lights.hidden=!1,Array.from(this.el.lights.children).forEach((e,n)=>e.classList.toggle("on",n<t))}message(t,e="info",n=1.5){let i=document.createElement("div");for(i.className="msg "+e+(t.length>16?" small":""),i.textContent=t,this.el.msgs.appendChild(i);this.el.msgs.children.length>3;)this.el.msgs.firstChild.remove();setTimeout(()=>i.classList.add("out"),n*1e3),setTimeout(()=>i.remove(),n*1e3+320)}lapFlash(t,e,n){let i=document.createElement("div");i.className="lapflash "+e;let r={record:"\u0420\u0435\u043A\u043E\u0440\u0434 \u0442\u0440\u0430\u0441\u0441\u044B",fastest:"\u0411\u044B\u0441\u0442\u0440\u0435\u0439\u0448\u0438\u0439 \u043A\u0440\u0443\u0433",pb:"\u041B\u0438\u0447\u043D\u044B\u0439 \u043B\u0443\u0447\u0448\u0438\u0439",normal:"\u041A\u0440\u0443\u0433",invalid:"\u041A\u0440\u0443\u0433 \u043D\u0435 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D"}[e],a="";e==="record"&&n!=null&&(a=" "+lh(t-n)),i.innerHTML=`<small>${r}</small>${Zt(t)}${a}`,this.el.msgs.appendChild(i),setTimeout(()=>i.remove(),2600),e==="record"&&(this.el.ltRec.textContent=Zt(t))}boostFlash(){this.boostT=.5}watchTiming(t,e){let n=t.geom,i=this.watchSec;if(i.lap)return;let r=e.progress,a=t.rec.bestSectors||[],o=(l,c)=>{let h=a[l];this.sectorDone(l,c,h==null||c<=h?"purple":c<=h*1.02?"green":"yellow")};i.sector===0&&r>=n.sectorS[1]&&(o(0,t.time-i.start),i.sector=1,i.start=t.time),i.sector===1&&r>=n.sectorS[2]&&(o(1,t.time-i.start),i.sector=2,i.start=t.time),i.sector===2&&r>=n.length&&(o(2,t.time-i.start),i.lap=t.time)}update(t,e){var h;let n=this.el;this.fpsAcc+=e,this.fpsN++,this.fpsAcc>.5&&(n.fps.textContent=Math.round(this.fpsN/this.fpsAcc)+" FPS",this.fpsAcc=0,this.fpsN=0);let i=t.mode==="watch",r=i?t.watchKart:t.player;if(!r)return;let a=t.karts.length;if(!i){this.set("pos",n.posNum,String(r.rank+1)),this.set("of",n.posOf,"/"+a);let u;r.outLap?u="\u041A\u0440\u0443\u0433 \u0432\u044B\u0445\u043E\u0434\u0430 \u0438\u0437 \u0431\u043E\u043A\u0441\u043E\u0432":r.finished?u="\u0424\u0438\u043D\u0438\u0448":u="\u041A\u0440\u0443\u0433 <b>"+Math.min(t.laps,r.lapTimes.length+1)+"/"+t.laps+"</b>",this.set("lap",n.lapLine,u,"innerHTML")}if(this.rows&&a>1&&!i){let u=t.order[0];t.order.forEach((d,f)=>{let g=this.rows[f];this.set("tp"+f,g.p,String(f+1)),this.set("tc"+f,g.i.style,d.driver.color,"background"),this.set("tn"+f,g.n,d.name);let x;if(d.finished)x=f===0?"\u0424\u0438\u043D\u0438\u0448":"+"+(d.finishTime-u.finishTime).toFixed(1);else if(f===0)x="\u041B\u0438\u0434\u0435\u0440";else{let m=(u.finished?t.laps*t.geom.length:u.progress)-d.progress;x=m>t.geom.length?"+"+Math.floor(m/t.geom.length)+" \u043A\u0440.":"+"+(m/Math.max(12,d.speed||15)).toFixed(1)}this.set("tg"+f,g.g,x),this.set("tr"+f,g.r,"row"+(d.isPlayer?" me":"")+(d.finished?" done":""),"className")})}if(t.itemsOn)if(r.rouletteT>0)this.lastRoulette-=e,this.lastRoulette<=0&&(this.lastRoulette=.08,n.icon.innerHTML=xo[gf[Math.floor(Math.random()*gf.length)]],n.slot.className="item-slot spin",this.cache.item=null,t.app.audio.ctx&&t.app.audio.play("tick")),this.set("cnt",n.cnt,!0,"hidden");else{let u=(r.item||"")+r.itemCount;this.cache.item!==u&&(this.cache.item=u,n.icon.innerHTML=r.item?xo[r.item]:"",n.slot.className="item-slot"+(r.item?" ready":""),n.cnt.hidden=!(r.item&&r.itemCount>1),n.cnt.textContent="\xD7"+r.itemCount)}let o=r.cls;this.set("spd",n.speed,String(Math.round(Math.abs(r.u)*3.6))),this.set("gear",n.gear,o.gears?String(r.gear):"\u2014"),this.set("rpm",n.rpm,(Math.round((r.rpm||0)/100)*100).toLocaleString("ru-RU")+" \u043E\u0431/\u043C\u0438\u043D");let l=Pt(((r.rpm||0)-o.rpmIdle)/(o.rpmMax-o.rpmIdle),0,1),c=Math.round(l*12);if(this.cache.leds!==c&&(this.cache.leds=c,this.ledEls.forEach((u,d)=>u.classList.toggle("on",d<c)),n.leds.classList.toggle("shift",c>=11&&!!o.gears)),i){this.watchTiming(t,r);let u=this.watchSec.lap||t.time;this.set("lt",n.ltNow,Zt(u)),this.set("lb",n.ltBest,Zt((h=t.watchBest)!=null?h:null)),this.set("ll",n.ltLast,this.watchSec.lap?Zt(this.watchSec.lap):Zt(null)),this.set("dl",n.ltDelta,"\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 "+Pt(r.progress/t.geom.length*100,0,100).toFixed(1)+"%"),this.set("dlc",n.ltDelta,"t-delta","className")}else{let u;r.finished?u=r.lapTimes[r.lapTimes.length-1]:t.canDrive?u=r.outLap?t.time:t.time-r.lapStart:u=0,this.set("lt",n.ltNow,r.outLap&&t.canDrive?"\u0432\u044B\u0435\u0437\u0434 "+Zt(u):Zt(u)),this.set("lti",n.ltNow.style,r.lapInvalid?"line-through":"none","textDecoration");let d=r.lapTimes.length?r.lapTimes[r.lapTimes.length-1]:void 0;this.set("ll",n.ltLast,d===void 0?Zt(null):d===null?"\u043D\u0435 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D":Zt(d)),this.set("lb",n.ltBest,Zt(isFinite(r.bestLap)?r.bestLap:null));let f=t.delta();this.set("dl",n.ltDelta,f==null?"":lh(f)+" \u043A \u0440\u0435\u043A\u043E\u0440\u0434\u0443"),this.set("dlc",n.ltDelta,"t-delta"+(f==null?"":f<0?" neg":" pos"),"className");let g=r.outLap||r.finished||!t.canDrive?-1:r.sector;this.cache.live!==g&&(this.cache.live=g,this.secEls.forEach((x,m)=>x.root.classList.toggle("live",m===g)))}this.set("lines",n.lines,r.boostT>0?"speedlines on":"speedlines","className"),this.set("hitf",n.hitflash,r.spinT>1?"hitflash on":"hitflash","className"),this.set("wrong",n.wrong,!(r.wrongT>1.2&&!r.finished&&!i),"hidden"),this.mapT=(this.mapT||0)+e,this.mapT>1/30&&(this.mapT=0,this.drawMinimap(t))}};var Pn=s=>440*Math.pow(2,(s-69)/12),vo=class{constructor(){this.ctx=null,this.vol={master:.8,music:.45,sfx:.9},this.muted=!1,this.musicMode=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,n.attack.value=.005,n.release.value=.2,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.connect(this.master),this.applyVolumes();let i=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,i,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let a=0;a<i;a++)r[a]=Math.random()*2-1;this.engines=[this.makeEngine(1),this.makeEngine(.55),this.makeEngine(.55)],this.skid=this.loopNoise("bandpass",1900,3),this.wind=this.loopNoise("lowpass",420,.7),this.rumble=this.loopNoise("lowpass",140,2),this.startSequencer()}applyVolumes(){if(!this.ctx)return;let t=this.muted?0:this.vol.master;this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05),this.music.gain.setTargetAtTime(this.vol.music*.55,this.ctx.currentTime,.05),this.sfx.gain.setTargetAtTime(this.vol.sfx,this.ctx.currentTime,.05)}setVolumes(t){Object.assign(this.vol,t),this.applyVolumes()}toggleMute(){return this.muted=!this.muted,this.applyVolumes(),this.muted}loopNoise(t,e,n){let i=this.ctx,r=i.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0;let a=i.createBiquadFilter();a.type=t,a.frequency.value=e,a.Q.value=n;let o=i.createGain();return o.gain.value=0,r.connect(a).connect(o).connect(this.sfx),r.start(),{f:a,g:o}}makeEngine(t){let e=this.ctx,n=e.createOscillator();n.type="sawtooth";let i=e.createOscillator();i.type="square";let r=e.createOscillator();r.type="sawtooth";let a=e.createOscillator();a.frequency.value=23;let o=e.createGain();o.gain.value=2.2,a.connect(o),o.connect(n.frequency),o.connect(i.frequency);let l=e.createGain();l.gain.value=.5;let c=e.createGain();c.gain.value=.28;let h=e.createGain();h.gain.value=.12;let u=e.createBiquadFilter();u.type="lowpass",u.Q.value=5,u.frequency.value=900;let d=e.createBiquadFilter();d.type="bandpass",d.Q.value=8,d.frequency.value=2200;let f=e.createGain();return f.gain.value=0,n.connect(l).connect(u),i.connect(c).connect(u),r.connect(h).connect(d).connect(f),u.connect(f).connect(this.sfx),n.start(),i.start(),r.start(),a.start(),{o1:n,o2:i,o3:r,f:u,ring:d,out:f,level:t}}setEngine(t,e,n,i,r){if(!this.ctx)return;let a=this.engines[t],o=this.ctx.currentTime,l=n?Math.min(1.05,e/n):0,c=Math.max(30,e/60);a.o1.frequency.setTargetAtTime(c,o,.02),a.o2.frequency.setTargetAtTime(c*.5,o,.02),a.o3.frequency.setTargetAtTime(c*3,o,.02),a.f.frequency.setTargetAtTime(420+l*2600+i*900,o,.03),a.ring.frequency.setTargetAtTime(1500+l*2600,o,.05),a.out.gain.setTargetAtTime(r*a.level*(.07+i*.08+l*.05),o,.04)}setSkid(t,e=0){if(!this.ctx)return;let n=this.ctx.currentTime;this.skid.g.gain.setTargetAtTime(t*.24,n,.04),this.skid.f.frequency.setTargetAtTime(1300+e*1500,n,.05)}setWind(t){this.ctx&&this.wind.g.gain.setTargetAtTime(t*.18,this.ctx.currentTime,.1)}setRumble(t){this.ctx&&this.rumble.g.gain.setTargetAtTime(t*.35,this.ctx.currentTime,.03)}silenceEngines(){if(this.ctx){for(let t=0;t<this.engines.length;t++)this.engines[t].out.gain.setTargetAtTime(0,this.ctx.currentTime,.08);this.setSkid(0),this.setWind(0),this.setRumble(0)}}tone(t,e,n,i,r,a=0,o=null){let l=this.ctx,c=l.currentTime+a,h=l.createOscillator();h.type=t,h.frequency.setValueAtTime(e,c),n!==e&&h.frequency.exponentialRampToValueAtTime(Math.max(20,n),c+i);let u=l.createGain();u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(r,c+.008),u.gain.exponentialRampToValueAtTime(1e-4,c+i),h.connect(u).connect(o||this.sfx),h.start(c),h.stop(c+i+.05)}noise(t,e,n,i,r,a=1,o=0,l=null){let c=this.ctx,h=c.currentTime+o,u=c.createBufferSource();u.buffer=this.noiseBuf,u.playbackRate.value=.8+Math.random()*.4;let d=c.createBiquadFilter();d.type=t,d.Q.value=a,d.frequency.setValueAtTime(e,h),d.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+i);let f=c.createGain();f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(r,h+.01),f.gain.exponentialRampToValueAtTime(1e-4,h+i),u.connect(d).connect(f).connect(l||this.sfx),u.start(h,Math.random()),u.stop(h+i+.05)}play(t,e=0,n=1){if(!this.ctx||n<=.01)return;let i=n;switch(t){case"light":this.tone("square",520,520,.22,.12*i);break;case"go":this.tone("square",1040,1040,.55,.14*i),this.tone("sine",520,520,.55,.12*i);break;case"hop":this.noise("lowpass",900,200,.12,.25*i,1);break;case"driftLevel":this.tone("triangle",500+e*260,900+e*300,.12,.16*i);break;case"miniturbo":this.noise("bandpass",400,3200,.45+e*.12,.35*i,2),this.tone("sawtooth",180,420,.35,.06*i);break;case"nitro":this.noise("bandpass",300,2600,.9,.45*i,1.5),this.tone("sawtooth",90,260,.8,.09*i);break;case"pad":this.noise("bandpass",600,3500,.5,.3*i,2),this.tone("triangle",600,1200,.25,.08*i);break;case"pickup":[0,.06,.12].forEach((r,a)=>this.tone("square",660*Math.pow(1.26,a),660*Math.pow(1.26,a),.08,.08*i,r));break;case"tick":this.tone("square",1500+Math.random()*400,1500,.03,.04*i);break;case"itemReady":this.tone("triangle",1318,1318,.2,.14*i),this.tone("triangle",1760,1760,.25,.1*i,.07);break;case"rocket":this.noise("bandpass",2400,500,.7,.4*i,1.2),this.tone("sawtooth",700,180,.5,.07*i);break;case"explosion":this.noise("lowpass",2200,90,1.1,.7*i,.7),this.tone("sine",110,35,.6,.5*i);break;case"drop":this.noise("lowpass",500,120,.3,.3*i),this.tone("sine",300,120,.2,.15*i);break;case"slip":this.tone("triangle",900,200,.6,.14*i),this.noise("bandpass",2e3,800,.5,.2*i,2);break;case"shield":this.tone("sine",400,1600,.5,.12*i),this.tone("triangle",800,2400,.5,.06*i,.05);break;case"shieldBreak":this.noise("highpass",3e3,6e3,.35,.3*i),this.tone("triangle",1800,400,.3,.1*i);break;case"hit":this.tone("sawtooth",600,90,.8,.12*i);break;case"wall":this.noise("lowpass",1400,150,.25,Math.min(.6,.12+e*.04)*i,.8),this.tone("sine",120,50,.2,Math.min(.5,.1+e*.03)*i);break;case"bump":this.noise("lowpass",900,120,.18,.3*i),this.tone("sine",160,60,.15,.25*i);break;case"lap":this.tone("triangle",988,988,.15,.14*i),this.tone("triangle",1318,1318,.3,.14*i,.12);break;case"finalLap":[0,.12,.24,.36].forEach((r,a)=>this.tone("square",Pn(76+[0,4,7,12][a]),Pn(76+[0,4,7,12][a]),.18,.08*i,r));break;case"best":[0,.07,.14].forEach((r,a)=>this.tone("triangle",Pn(84+a*3),Pn(84+a*3),.2,.1*i,r));break;case"finish":[[72,0],[76,.14],[79,.28],[84,.42],[79,.62],[84,.76]].forEach(([r,a])=>{this.tone("square",Pn(r),Pn(r),.22,.09*i,a),this.tone("triangle",Pn(r-12),Pn(r-12),.22,.1*i,a)});break;case"ui":this.tone("triangle",880,1320,.07,.08*i);break;case"uiMove":this.tone("triangle",660,660,.04,.05*i);break;case"wrong":this.tone("square",220,220,.2,.08*i);break}}startSequencer(){this.step=0,this.nextTime=this.ctx.currentTime+.1,this.bpm=124;let t=[[45,"m"],[41,"M"],[48,"M"],[43,"M"]];this.chords=t.map(([e,n])=>({root:e,tones:n==="m"?[0,3,7]:[0,4,7]})),this.timer=setInterval(()=>this.schedule(),25)}setMusic(t){this.musicMode=t}schedule(){if(!this.ctx||this.ctx.state!=="running")return;let t=60/this.bpm/4;for(;this.nextTime<this.ctx.currentTime+.12;)this.musicMode&&this.playStep(this.step,this.nextTime),this.nextTime+=t,this.step=(this.step+1)%64}playStep(t,e){let n=this.ctx,i=this.music,r=Math.floor(t/16),a=t%16,o=this.chords[r],l=this.musicMode==="race",c=e-n.currentTime;if(a%2===0){let h=o.root+(a%8===6?12:0);this.synth("sawtooth",Pn(h),.2,l?.16:.1,c,520,i)}if(l||a%2===0){let h=[0,1,2,1,0,2,1,2],u=o.tones[h[a%8]]+o.root+24+(a>=8?12:0);this.synth("square",Pn(u),.1,l?.035:.03,c,2400,i)}if(a===0)for(let h of o.tones)this.synth("triangle",Pn(o.root+12+h),1.9,.035,c,1200,i);if(l){if(a%4===0){let h=n.createOscillator(),u=n.createGain();h.frequency.setValueAtTime(140,e),h.frequency.exponentialRampToValueAtTime(40,e+.15),u.gain.setValueAtTime(.5,e),u.gain.exponentialRampToValueAtTime(.001,e+.22),h.connect(u).connect(i),h.start(e),h.stop(e+.25)}(a===4||a===12)&&this.noise("bandpass",1800,900,.16,.22,.8,c,i),a%2===1&&this.noise("highpass",8e3,9e3,.05,.06,.5,c,i)}}synth(t,e,n,i,r,a,o){let l=this.ctx,c=l.currentTime+r,h=l.createOscillator();h.type=t,h.frequency.value=e;let u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=a,u.Q.value=2;let d=l.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(i,c+.01),d.gain.exponentialRampToValueAtTime(1e-4,c+n),h.connect(u).connect(d).connect(o),h.start(c),h.stop(c+n+.05)}};var xf={left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"],gas:["ArrowUp","KeyW"],brake:["ArrowDown","KeyS"],shiftUp:["KeyE","PageUp"],shiftDown:["KeyQ","PageDown"],item:["KeyX","ControlLeft","ControlRight","Enter"],skip:["Space","Enter"],look:["KeyC"],camera:["KeyV"],reset:["KeyR"],pause:["Escape","KeyP"],mute:["KeyM"]},_o=class{constructor(){this.down=new Set,this.pressed=new Set,this.touch={left:!1,right:!1,brake:!1,drift:!1,item:!1,gas:!1},this.touchPressed=new Set,this.touchActive=!1,this.padPrev=[],this.gamepadActive=!1,this.state={steer:0,throttle:0,brake:0,item:!1,look:!1,camera:!1,reset:!1,pause:!1,mute:!1,shiftUp:!1,shiftDown:!1,skip:!1},addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")||(t.repeat||this.pressed.add(t.code),this.down.add(t.code),this.captureKeys&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.gamepadActive=!1)}),addEventListener("keyup",t=>this.down.delete(t.code)),addEventListener("blur",()=>{this.down.clear()}),this.captureKeys=!1}is(t){return xf[t].some(e=>this.down.has(e))}was(t){return xf[t].some(e=>this.pressed.has(e))}bindTouch(t){let e=(n,i)=>{i&&!this.touch[n]&&this.touchPressed.add(n),this.touch[n]=i};t.querySelectorAll("[data-touch]").forEach(n=>{let i=n.dataset.touch,r=o=>{o.preventDefault(),e(i,!0),n.classList.add("on"),this.touchActive=!0},a=o=>{o.preventDefault(),e(i,!1),n.classList.remove("on")};n.addEventListener("pointerdown",r),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),n.addEventListener("pointerleave",a)})}poll(t=!1){let e=this.state,n=0,i=0,r=0,a=!1,o=!1,l=!1,c=!1;this.is("left")&&(n-=1),this.is("right")&&(n+=1),this.is("gas")&&(i=1),this.is("brake")&&(r=.88),this.was("item")&&(a=!0),this.is("look")&&(o=!0),this.was("shiftUp")&&(l=!0),this.was("shiftDown")&&(c=!0);let h=this.was("camera"),u=this.was("reset"),d=this.was("pause"),f=this.was("mute"),g=this.was("skip"),x=navigator.getGamepads?navigator.getGamepads():[];for(let p of x){if(!p||p.mapping!=="standard")continue;let y=A=>p.buttons[A]&&p.buttons[A].pressed,v=A=>p.buttons[A]?p.buttons[A].value:0,_=this.padPrev[p.index]||[],E=A=>y(A)&&!_[A],w=p.axes[0]||0;(Math.abs(w)>.15||p.buttons.some(A=>A.pressed))&&(this.gamepadActive=!0),Math.abs(w)>.1&&(n+=Math.sign(w)*((Math.abs(w)-.1)/.9)),y(14)&&(n-=1),y(15)&&(n+=1),i=Math.max(i,v(7),y(0)?1:0),r=Math.max(r,v(6),y(2)?.88:0),E(5)&&(l=!0),E(4)&&(c=!0),E(3)&&(a=!0),(y(1)||y(10)||y(11))&&(o=!0),E(8)&&(h=!0),E(9)&&(d=!0),E(0)&&(g=!0),this.padPrev[p.index]=p.buttons.map(A=>A.pressed)}let m=this.touch;return m.left&&(n-=1),m.right&&(n+=1),m.brake&&(r=.88),this.touchPressed.has("item")&&(a=!0),this.touchPressed.has("pause")&&(d=!0),t&&!m.brake&&(i=1),m.gas&&(i=1),e.steer=Pt(n,-1,1),e.throttle=i,e.brake=r,e.item=a,e.look=o,e.shiftUp=l,e.shiftDown=c,e.camera=h,e.reset=u,e.pause=d,e.mute=f,e.skip=g,this.pressed.clear(),this.touchPressed.clear(),e}pollMenu(){var n,i,r,a,o,l,c;let t=navigator.getGamepads?navigator.getGamepads():[],e={up:!1,down:!1,left:!1,right:!1,ok:!1,back:!1};for(let h of t){if(!h||h.mapping!=="standard")continue;let u=this.menuPrev||{},d={up:((n=h.buttons[12])==null?void 0:n.pressed)||h.axes[1]<-.6,down:((i=h.buttons[13])==null?void 0:i.pressed)||h.axes[1]>.6,left:((r=h.buttons[14])==null?void 0:r.pressed)||h.axes[0]<-.6,right:((a=h.buttons[15])==null?void 0:a.pressed)||h.axes[0]>.6,ok:(o=h.buttons[0])==null?void 0:o.pressed,back:((l=h.buttons[1])==null?void 0:l.pressed)||((c=h.buttons[9])==null?void 0:c.pressed)};for(let f in d)d[f]&&!u[f]&&(e[f]=!0);this.menuPrev=d}return e}};var oe=new L,Mo=class{constructor(t){this.cam=t,this.pos=new L,this.look=new L,this.yaw=0,this.shakeAmt=0,this.fov=70,this.mode=0,this.tv={t:0,kind:0,anchor:new L,target:null,switchT:0},this.orbitA=0}shake(t){this.shakeAmt=Math.max(this.shakeAmt,t)}follow(t,e,n=!1){this.mode===0?this.top(t,e,1,n):this.chase(t,e,n)}top(t,e,n=1,i=!1){let r=Math.abs(e.u||0),o=r>3&&e.vx!==void 0?Math.atan2(e.vx,e.vz):e.h,l=e.h+si(o-e.h)*.5;this.yaw=oh(this.yaw,l,2.2,t);let c=i?this.yaw+Math.PI:this.yaw,h=(17+Pt(r/30,0,1.3)*4)*n,u=7.5*n,d=4+r*.25;oe.set(e.x-Math.sin(c)*u,e.y+h,e.z-Math.cos(c)*u),this.pos.lerp(oe,1-Math.exp(-t*8)),oe.set(e.x+Math.sin(c)*d,e.y,e.z+Math.cos(c)*d),this.look.lerp(oe,1-Math.exp(-t*10)),this.fov=gn(this.fov,52,3,t),this.apply(t)}overview(t,e){let n=(e.minX+e.maxX)/2,i=(e.minZ+e.maxZ)/2,r=e.maxX-e.minX,a=e.maxZ-e.minZ,o=this.cam.aspect||1.6,l=45,c=Math.tan(l*Math.PI/360),h=Math.max(a/2/c,r/2/(c*o))*1.05;oe.set(n,h*.94,i+h*.34),t===0||this.pos.distanceTo(oe)>400?this.pos.copy(oe):this.pos.lerp(oe,1-Math.exp(-t*3)),oe.set(n,0,i+h*.02),this.look.lerp(oe,t===0?1:1-Math.exp(-t*3)),this.fov=l,this.apply(t)}snapChase(t){if(this.yaw=t.h,this.mode===0){this.pos.set(t.x-Math.sin(t.h)*7.5,t.y+17,t.z-Math.cos(t.h)*7.5),this.look.set(t.x+Math.sin(t.h)*4,t.y,t.z+Math.cos(t.h)*4);return}let[e,n]=this.mode===2?[5.6,2.4]:[3.7,1.5];this.pos.set(t.x-Math.sin(t.h)*e,t.y+n,t.z-Math.cos(t.h)*e),this.look.set(t.x+Math.sin(t.h)*4,t.y+.7,t.z+Math.cos(t.h)*4)}chase(t,e,n=!1){let i=Math.abs(e.u),a=i>3&&e.u>0?Math.atan2(e.vx,e.vz):e.h,o=e.h+si(a-e.h)*.45;this.yaw=oh(this.yaw,e.spinT>0?this.yaw:o,5.5,t);let l=n?this.yaw+Math.PI:this.yaw,c=this.mode===2,h=Pt(i/(e.cls.vmaxKmh/3.6),0,1.2),u=(c?5.6:3.7)+h*(c?.6:.45)+(e.boostT>0?.3:0),d=(c?2.4:1.5)+h*.1;this.camY=this.camY===void 0?e.y:gn(this.camY,e.y,6,t),oe.set(e.x-Math.sin(l)*u,this.camY+d,e.z-Math.cos(l)*u),this.pos.lerp(oe,1-Math.exp(-t*14)),this.pos.y=Math.max(this.pos.y,e.y+1);let f=4+h*3;oe.set(e.x+Math.sin(l)*f,this.camY+.7,e.z+Math.cos(l)*f),this.look.lerp(oe,1-Math.exp(-t*16)),this.roll=gn(this.roll||0,Pt(-(e.w||0)*i*.004,-.05,.05),5,t);let g=66+h*12+(e.boostT>0?5:0);this.fov=gn(this.fov,g,3,t),this.rollOn=!0,this.apply(t)}intro(t,e,n){let i=t*t*(3-2*t),r=e.h+2.4,a=e.h+Math.PI,o=r+(a-r)*i,l=34-28.6*i,c=14-11.75*i;this.pos.set(e.x-Math.sin(o)*-l,e.y+c,e.z-Math.cos(o)*-l);let h=e.x+Math.sin(e.h)*3*i,u=e.z+Math.cos(e.h)*3*i;this.look.set(h,e.y+1*i,u),this.yaw=e.h,this.fov=60+8*i,this.apply(0)}orbit(t,e){this.orbitA+=t*.35;let n=e.h+Math.PI*.75+this.orbitA;oe.set(e.x+Math.sin(n)*7,e.y+2.4,e.z+Math.cos(n)*7),this.pos.lerp(oe,1-Math.exp(-t*3)),oe.set(e.x,e.y+.8,e.z),this.look.lerp(oe,1-Math.exp(-t*6)),this.fov=gn(this.fov,55,2,t),this.apply(t)}broadcast(t,e,n){let i=this.tv;if(i.switchT-=t,!i.target||i.switchT<=0){i.kind=(i.kind+1)%3,i.switchT=6+Math.random()*3;let a=e.slice().sort((o,l)=>l.progress-o.progress);i.target=a[Math.floor(Math.random()*Math.min(4,a.length))],i.kind===0&&this.placeTrackside(i.target,n),this.orbitA=Math.random()*6}let r=i.target;if(i.kind===0){n.deltaS(r.s,i.anchorS)>18&&this.placeTrackside(r,n),this.pos.copy(i.anchor),oe.set(r.x,r.y+.8,r.z),this.look.lerp(oe,1-Math.exp(-t*8));let a=this.pos.distanceTo(oe);this.fov=gn(this.fov,Pt(900/Math.max(a,8),14,55),3,t)}else if(i.kind===1){let a=r.h+Math.PI+Math.sin(this.orbitA+performance.now()*2e-4)*.6;oe.set(r.x+Math.sin(a)*16,r.y+11,r.z+Math.cos(a)*16),this.pos.lerp(oe,1-Math.exp(-t*2)),oe.set(r.x+Math.sin(r.h)*6,r.y,r.z+Math.cos(r.h)*6),this.look.lerp(oe,1-Math.exp(-t*4)),this.fov=gn(this.fov,50,2,t)}else{let a=r.h+2.6;oe.set(r.x+Math.sin(a)*4.5,r.y+1.3,r.z+Math.cos(a)*4.5),this.pos.lerp(oe,1-Math.exp(-t*6)),oe.set(r.x-Math.sin(r.h)*1.5,r.y+.7,r.z-Math.cos(r.h)*1.5),this.look.lerp(oe,1-Math.exp(-t*10)),this.fov=gn(this.fov,62,3,t)}this.apply(t)}placeTrackside(t,e){let n=e.wrapS(t.s+32+Math.random()*12),i=Math.random()<.5?-1:1,r=e.pointAt(n,i*(e.barrier+4));this.tv.anchor.set(r.x,r.y+2.5+Math.random()*3,r.z),this.tv.anchorS=n}apply(t){let e=this.cam;if(e.position.copy(this.pos),this.shakeAmt>.001){let n=this.shakeAmt;e.position.x+=(Math.random()-.5)*n,e.position.y+=(Math.random()-.5)*n,e.position.z+=(Math.random()-.5)*n,this.shakeAmt*=Math.exp(-t*7)}e.lookAt(this.look),this.rollOn&&(e.rotateZ(this.roll||0),this.rollOn=!1),Math.abs(e.fov-this.fov)>.01&&(e.fov=this.fov,e.updateProjectionMatrix())}};var yf="apex-karting-v2",vf={quality:null,qualityAuto:!0,master:.8,music:.45,sfx:.9,camera:1,camVer:2,touch:"auto",assist:1,gearbox:"auto",cls:"ok",category:"real",fps:!1,driverId:"vikhr",trackId:"lonato",difficulty:"normal",laps:3,opponents:7},bo=class{constructor(){this.data={settings:{...vf},records:{},cupWins:0};try{let t=localStorage.getItem(yf);if(t){let e=JSON.parse(t);this.data.settings={...vf,...e.settings||{}},this.data.settings.camVer!==2&&(this.data.settings.camera=1,this.data.settings.camVer=2),this.data.records=e.records||{},this.data.cupWins=e.cupWins||0}}catch{}}get settings(){return this.data.settings}save(){try{localStorage.setItem(yf,JSON.stringify(this.data))}catch{}}setSettings(t){Object.assign(this.data.settings,t),this.save()}record(t){return this.data.records[t]||(this.data.records[t]={bestLap:null,ghost:null,trace:null,driverId:null,bestRace:{},bestSectors:[null,null,null]})}saveSector(t,e,n){let i=this.record(t);i.bestSectors||(i.bestSectors=[null,null,null]),i.bestSectors[e]=Math.round(n*1e3)/1e3,this.save()}saveLap(t,e,n,i,r){let a=this.record(t);a.bestLap=e,a.ghost=n&&n.length>8?n.slice():null,a.trace=i?Array.from(i,o=>o===void 0?null:Math.round(o*1e3)/1e3):null,a.driverId=r,this.save()}saveRace(t,e,n){let i=this.record(t),r=i.bestRace[e];return r==null||n<r?(i.bestRace[e]=n,this.save(),!0):!1}};var q=s=>document.getElementById(s),Ge=s=>String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ni=(s,t,e)=>typeof s=="number"&&Number.isFinite(s)&&s>=t&&s<=e,So=s=>Math.round(s*1e4)/1e4,ji=we.map(s=>s.id),hv=Object.keys(qt),_f="apex.garage.v1",Hs=(s,t)=>`apex.lab.v1.${s}.${t}`,wo=(s,t)=>s+"-"+t,wf=s=>we.find(t=>t.id===s),Gs=s=>(wf(s)||{short:s}).short,oi=s=>(wf(s)||{name:s}).name,Ws=s=>{let[t,e]=s.split(":");return{t,c:e}},Ir=s=>{let{t,c:e}=Ws(String(s));return ji.includes(t)&&!!qt[e]},Sh=s=>s==null||!Number.isFinite(s)?"\u2014":Zt(s),wh="d9e6226a2c0cf743aaf0f6d0d421fedb12adbfe2c9ca143b2dde46100b615e77",To="apex.admin.v1",uv=":velocity-grid-2026";function Vs(s){try{return localStorage.getItem(s)}catch{return null}}function Th(s,t){localStorage.setItem(s,t)}function Eh(s){try{localStorage.removeItem(s)}catch{}}var dv=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function fv(s){let t=new TextEncoder().encode(s),e=t.length*8,n=new Uint8Array(((t.length+8>>6)+1)*64);n.set(t),n[t.length]=128,new DataView(n.buffer).setUint32(n.length-4,e>>>0,!1);let i=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],r=new Uint32Array(64),a=new DataView(n.buffer),o=(l,c)=>l>>>c|l<<32-c;for(let l=0;l<n.length;l+=64){for(let y=0;y<16;y++)r[y]=a.getUint32(l+y*4,!1);for(let y=16;y<64;y++){let v=o(r[y-15],7)^o(r[y-15],18)^r[y-15]>>>3,_=o(r[y-2],17)^o(r[y-2],19)^r[y-2]>>>10;r[y]=r[y-16]+v+r[y-7]+_>>>0}let[c,h,u,d,f,g,x,m]=i;for(let y=0;y<64;y++){let v=o(f,6)^o(f,11)^o(f,25),_=f&g^~f&x,E=m+v+_+dv[y]+r[y]>>>0,w=o(c,2)^o(c,13)^o(c,22),A=c&h^c&u^h&u,R=w+A>>>0;m=x,x=g,g=f,f=d+E>>>0,d=u,u=h,h=c,c=E+R>>>0}let p=[c,h,u,d,f,g,x,m];for(let y=0;y<8;y++)i[y]=i[y]+p[y]>>>0}return i.map(l=>l.toString(16).padStart(8,"0")).join("")}function pv(){try{let s=localStorage.getItem("apex.client");return s||(s="c"+Math.random().toString(36).slice(2,10),localStorage.setItem("apex.client",s)),s}catch{return"c-anon"}}function Eo(s){return(Array.isArray(s)?s:[]).filter(t=>t&&Ni(t.time,0,1e4)&&typeof t.name=="string"&&t.name.length<=80&&typeof t.note=="string"&&t.note.length<=100&&Ni(t.date,0,1e15)).slice(0,100)}function Mf(s,t){let e=(s||[]).concat(t||[]),n=new Set,i=[];e.sort((r,a)=>r.time-a.time);for(let r of e){let a=(r.brainID||r.name)+"|"+r.time.toFixed(3);n.has(a)||(n.add(a),i.push(r))}return i.slice(0,100)}var eM=Object.fromEntries(Wn.map(s=>[s.k,s]));function bf(s){if(!s||typeof s!="object"||!Ni(s.mutation,0,1))throw Error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");for(let t of Wn){let e=s[t.k];if(e!==void 0){if(t.t==="bool"){if(typeof e!="boolean")throw Error("\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 "+t.k)}else if(t.t==="sel"){if(!t.opts.includes(e))throw Error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u043E\u0442\u0431\u043E\u0440\u0430")}else if(!Ni(e,t.min,t.max)||t.s===1&&!Number.isInteger(e))throw Error("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0432\u043D\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430: "+t.n)}}}var Sf=(s,t)=>s.t==="bool"?t?"\u0432\u043A\u043B":"\u0432\u044B\u043A\u043B":s.t==="sel"?s.optLabels[s.opts.indexOf(t)]:String(t);function mv(s){return s.t==="bool"?`<label class="switch"><input id="cfg-${s.k}" type="checkbox" aria-label="${Ge(s.n)}"><span class="trk"></span></label>`:s.t==="sel"?`<select id="cfg-${s.k}" aria-label="${Ge(s.n)}">${s.opts.map((t,e)=>`<option value="${t}">${s.optLabels[e]}</option>`).join("")}</select>`:`<input id="rng-${s.k}" class="set-range" type="range" min="${s.min}" max="${s.max}" step="${s.s}" aria-label="${Ge(s.n)}"><input id="cfg-${s.k}" class="set-num" type="number" min="${s.min}" max="${s.max}" step="${s.s}" aria-label="${Ge(s.n)}">`}function Ao(s,t){let e=s.t==="bool"?t.checked:s.t==="sel"?t.value:Number(t.value);return s.t==="num"&&(e=Number.isFinite(e)?Pt(e,s.min,s.max):Ki[s.k],s.s===1&&(e=Math.round(e))),e}var Ne={grid:"#262c36",text:"#8b93a1",green:"#3ddc84",purple:"#b36bff",yellow:"#ffd23f",red:"#ff7a86"};function Tf(s){return!!(s&&s.offsetParent!==null&&s.getBoundingClientRect().width>0)}function li(s,t,e,n,i,r=0,a=null){let o=q(s);if(!Tf(o))return;let l=o.getBoundingClientRect(),c=Math.max(220,l.width),h=132,u=Math.min(devicePixelRatio||1,2);(o.width!==Math.round(c*u)||o.height!==h*u)&&(o.width=Math.round(c*u),o.height=h*u);let d=o.getContext("2d");d.setTransform(u,0,0,u,0,0),d.clearRect(0,0,c,h);let f=36,g=c-(a?30:12),x=17,m=106;d.font="9px ui-monospace, Menlo, monospace";for(let p=0;p<=4;p++){let y=m-(m-x)*p/4;d.strokeStyle=Ne.grid,d.beginPath(),d.moveTo(f,y),d.lineTo(g,y),d.stroke();let v=r+(e-r)*p/4;d.fillStyle=Ne.text,d.fillText(e-r<1?v.toFixed(2):e-r<10?v.toFixed(1):String(Math.round(v)),3,y+3),a&&(d.fillStyle=a.color,d.fillText(String(Math.round(a.max*p/4)),g+5,y+3))}if(d.fillStyle=Ne.text,d.fillText(n,f,10),d.fillText(i,f,124),!t.some(p=>p.values.some(Number.isFinite))){d.fillText("\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u043F\u0440\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438",f+8,65);return}for(let p of t){d.strokeStyle=p.color,d.lineWidth=1.8,d.beginPath();let y=!1;p.values.forEach((v,_)=>{if(!Number.isFinite(v)){y=!1;return}let E=f+(g-f)*_/Math.max(1,p.values.length-1),w=m-(m-x)*Pt((v-r)/(e-r||1),0,1);y?d.lineTo(E,w):d.moveTo(E,w),y=!0}),d.stroke(),p.values.length===1&&Number.isFinite(p.values[0])&&(d.fillStyle=p.color,d.fillRect(f-2,m-(m-x)*(p.values[0]-r)/(e-r||1)-2,4,4))}}var Ro=class{constructor(t){this.app=t,this.admin=!1,this.world={version:1,nextBrain:1,library:[],boards:{},mine:{},labTrack:"lonato",labCls:"ok"},this.lab=null,this.geom=null,this.cfg={...Ki,goal:Rr("lonato","ok")},this.track="lonato",this.cls="ok",this.training=!1,this.rate=12,this.acc=0,this.telemetry=[],this.telT=0,this.rateSteps=0,this.rateClock=0,this.actualRate=0,this.uiClock=0,this.autoClock=0,this.cloudClock=0,this.lastRender=0,this.savePending=!1,this.fpsFrames=0,this.fpsTime=0,this.frameMS=0,this.active=!1,this.db=null,this.downloads=null,this.cloudOwner=!1,this.cloudState="idle",this.cloudDirty={session:!1,world:!1},this.clientID=pv(),this.askResolve=null,this.afterLogin=null,this.garageKey=Le("lonato","ok")}boot(){try{this.admin=Vs(To)===wh}catch{this.admin=!1}this.loadWorld(),this.track=ji.includes(this.world.labTrack)?this.world.labTrack:"lonato",this.cls=qt[this.world.labCls]?this.world.labCls:"ok",this.buildSelects(),this.buildSettings(),this.bindUI(),this.setCloud("idle"),this.applyAdminUI(),this.syncStoreToBoards(),this.initCloud()}status(t){q("dataStatus").textContent=t}ask(t,e){return new Promise(n=>{q("askText").textContent=t,q("askOk").textContent=e||"\u0414\u0430",q("askCard").hidden=!1,this.askResolve=n,setTimeout(()=>q("askOk").focus(),30)})}closeAsk(t){q("askCard").hidden=!0;let e=this.askResolve;this.askResolve=null,e&&e(t)}handleEscape(){return q("askCard").hidden?q("loginCard").hidden?q("garage").hidden?!1:(this.closeGarage(),!0):(q("loginCard").hidden=!0,this.afterLogin=null,!0):(this.closeAsk(!1),!0)}modalOpen(){return!q("askCard").hidden||!q("loginCard").hidden||!q("garage").hidden}requestAdmin(t){this.afterLogin=t||null,q("loginError").textContent="",q("loginPass").value="",q("loginCard").hidden=!1,setTimeout(()=>(q("loginUser").value?q("loginPass"):q("loginUser")).focus(),30)}submitLogin(){let t=q("loginUser").value.trim(),e=q("loginPass").value;if(fv(t+":"+e+uv)!==wh){q("loginError").textContent="\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C.",q("loginPass").select();return}this.admin=!0;try{q("loginRemember").checked?Th(To,wh):Eh(To)}catch{}q("loginCard").hidden=!0,q("loginPass").value="",this.applyAdminUI(),this.status("\u0410\u0434\u043C\u0438\u043D-\u0437\u043E\u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u0430. \u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0438 \u0433\u0430\u0440\u0430\u0436 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B."),this.db&&this.cloudSync();let n=this.afterLogin;this.afterLogin=null,n&&n()}logout(){this.admin=!1,Eh(To),this.training=!1,this.active&&this.leave();let t=this.app.race;t&&t.mode==="watch"&&this.app.state!=="menu"&&this.app.quitToMenu(),this.applyAdminUI()}applyAdminUI(){let t=this.admin;q("adminBtn").textContent=t?"\u0412\u044B\u0439\u0442\u0438":"\u0410\u0434\u043C\u0438\u043D-\u0437\u043E\u043D\u0430",q("adminBtn").classList.toggle("accent",!t),q("lockChip").textContent=t?"\u0410\u0434\u043C\u0438\u043D \xB7 \u043F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F":"\u0413\u043E\u0441\u0442\u0435\u0432\u043E\u0439 \u0440\u0435\u0436\u0438\u043C",q("lockChip").className="chip "+(t?"ok":"warn"),q("garageBtn").textContent=t?"\u0413\u0430\u0440\u0430\u0436 / \u0440\u0435\u043A\u043E\u0440\u0434\u044B":"\u0420\u0435\u043A\u043E\u0440\u0434\u044B",q("garagePilots").hidden=!t,q("aiBoardWrap").hidden=!t,q("labLock").innerHTML=t?"\u043D\u0435\u0439\u0440\u043E\u044D\u0432\u043E\u043B\u044E\u0446\u0438\u044F \xB7 "+Ge(Gs(this.track)):'<span class="lock">\u0430\u0434\u043C\u0438\u043D</span>',this.app.updateWelcome()}loadWorld(){try{let t=JSON.parse(Vs(_f)||"null");if(!t)return;if(t.version!==1||!Array.isArray(t.library)||t.library.length>200)throw Error("\u0424\u043E\u0440\u043C\u0430\u0442 \u0433\u0430\u0440\u0430\u0436\u0430 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F");let e=this.world;e.library=t.library.filter(n=>vh(n,ji)),e.nextBrain=Number.isSafeInteger(t.nextBrain)&&t.nextBrain>0?t.nextBrain:1,e.boards={};for(let n of Object.keys(t.boards||{}))Ir(n)&&(e.boards[n]={human:Eo(t.boards[n].human),ai:Eo(t.boards[n].ai)});e.mine={};for(let n of Object.keys(t.mine||{}))Ir(n)&&Ni(t.mine[n],0,1e4)&&(e.mine[n]=t.mine[n]);ji.includes(t.labTrack)&&(e.labTrack=t.labTrack),qt[t.labCls]&&(e.labCls=t.labCls);for(let n of e.library){let i=Number(String(n.id).replace("brain-",""));Number.isSafeInteger(i)&&(e.nextBrain=Math.max(e.nextBrain,i+1))}}catch(t){this.status("\u0413\u0430\u0440\u0430\u0436 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D: "+t.message)}}saveWorld(){try{Th(_f,JSON.stringify(this.world))}catch{this.status("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0433\u0430\u0440\u0430\u0436: \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E. \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435.")}this.cloudDirty.world=!0}board(t){return this.world.boards[t]||(this.world.boards[t]={human:[],ai:[]})}addResult(t,e,n,i,r=null,a="",o=0,l=null){if(!Ni(n,.1,1e4))return;let c=this.board(t)[e],h=e==="ai"&&r?c.find(d=>d.brainID===r):l?c.find(d=>d.sid===l):null;if(h&&h.time<=n)return;h&&c.splice(c.indexOf(h),1);let u={time:n,name:String(i).slice(0,80),brainID:r,note:String(a).slice(0,100),date:Date.now(),generation:o};l&&(u.sid=String(l).slice(0,24)),c.push(u),c.sort((d,f)=>d.time-f.time),c.length>100&&(c.length=100)}syncStoreToBoards(){let t=!1,e=this.app.store.data.records||{};for(let n of Object.keys(e)){let i=e[n];if(!Ir(n)||!i||!Ni(i.bestLap,1,1e4))continue;this.board(n).human.length||(this.addResult(n,"human",i.bestLap,this.app.playerName(),null,"\u0420\u0435\u043A\u043E\u0440\u0434 \u043A\u0440\u0443\u0433\u0430"),t=!0)}t&&this.saveWorld()}onPlayerLap(t,e,n,i,r){this.addResult(t,"human",e,this.app.playerName(),null,n+" \xB7 "+i,0,r),this.saveWorld();let a=this.world.mine[t];(a==null||e<a)&&(this.world.mine[t]=e,this.saveWorld(),this.cloudPushScore(t,e))}updateBrain(){let t=this.lab;if(!t||!t.champion)return;let e=t.champion;t.brainID||(t.brainID="brain-"+this.world.nextBrain++),t.knowledge=t.knowledge||{},t.knowledge[this.track]={memory:e.wts.slice(He).map(So),generation:t.generation,bestTime:t.bestTime,rules:e.rules?{...e.rules}:Li(this.cfg)};let n=this.world.library.find(i=>i.id===t.brainID);if(!n){if(this.world.library.length>=200){this.status("\u0413\u0430\u0440\u0430\u0436 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D (200 \u043F\u0438\u043B\u043E\u0442\u043E\u0432). \u0423\u0434\u0430\u043B\u0438\u0442\u0435 \u043B\u0438\u0448\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u044D\u043A\u0441\u043F\u043E\u0440\u0442.");return}n={id:t.brainID},this.world.library.push(n)}Object.assign(n,{name:(t.brainName||"\u041F\u0438\u043B\u043E\u0442 "+Gs(this.track)).slice(0,80),sourceMap:this.track,cls:this.cls,general:e.wts.slice(0,He).map(So),knowledge:JSON.parse(JSON.stringify(t.knowledge)),mmr:Pt(Math.round(e.mmr),100,4e3),parent:t.originBrain||null,updatedAt:Date.now()})}payload(){return df(this.lab,this.cfg,{rate:this.rate})}writeSave(t){if(!this.lab)return!0;try{return this.updateBrain(),Th(Hs(this.track,this.cls),JSON.stringify(this.payload())),this.saveWorld(),this.cloudDirty.session=!0,this.savePending=!1,t&&this.status(`\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E: ${oi(this.track)} \xB7 ${qt[this.cls].name}, \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 ${this.lab.generation}.`),!0}catch{return this.status("\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u0438\u043B\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E. \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0432 \u0444\u0430\u0439\u043B."),!1}}persist(t){return this.lab?this.training&&!t?(this.savePending=!0,!0):this.writeSave(t):!0}restore(t){yh(t,ji);let e={...Ki,...t.cfg||{}};bf(e),this.cfg=e,this.track=t.track,this.cls=t.cls,this.geom=ai(t.track),this.lab=ff(t,this.geom,e),this.lab.brainID||(this.lab.brainID="brain-"+this.world.nextBrain++),this.lab.brainName||(this.lab.brainName=this.defaultBrainName()),Ni(t.rate,1,256)&&(this.rate=t.rate),this.telemetry=[],this.training=!1,this.acc=0,this.app.labCfg=this.cfg,this.syncSettings()}defaultBrainName(){return"\u041F\u0438\u043B\u043E\u0442 "+Gs(this.track)+" \xB7 "+qt[this.cls].short}fresh(){this.geom=ai(this.track),this.lab=cf(this.geom,qt[this.cls],this.cfg,this.track,"brain-"+this.world.nextBrain++,this.defaultBrainName()),this.telemetry=[],this.acc=0}load(t,e){this.lab&&(t!==this.track||e!==this.cls)&&this.persist(!0),this.training=!1,this.track=t,this.cls=e,this.world.labTrack=t,this.world.labCls=e,this.geom=ai(t);let n=!1;try{let i=Vs(Hs(t,e));i&&(this.restore(JSON.parse(i)),n=!0)}catch(i){this.status("\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043D\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E: "+i.message+". \u0421\u043E\u0437\u0434\u0430\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u044F.")}n?this.status(`\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 ${this.lab.generation}. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u041E\u0431\u0443\u0447\u0430\u0442\u044C\xBB, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C.`):(this.cfg={...this.cfg,goal:Rr(t,e)},this.fresh(),this.status(`\u041D\u043E\u0432\u0430\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u044F: ${this.cfg.population} \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0445 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u0435\u0439 \xB7 ${oi(t)} \xB7 ${qt[e].name}.`)),this.app.labCfg=this.cfg,this.syncSettings(),this.refreshSelects()}loadSaved(){try{let t=Vs(Hs(this.track,this.cls));if(!t){this.status("\u0421\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u044B \u0438 \u043A\u043B\u0430\u0441\u0441\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.");return}this.restore(JSON.parse(t)),this.status("\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 "+this.lab.generation+"."),this.afterSwap()}catch(t){this.status("\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E: "+t.message)}}afterSwap(){if(this.active){let t=this.app.race;!t||t.mode!=="lab"||t.def.id!==this.track||t.cls.id!==this.cls?this.showRace():t.syncLab(this.lab,this.cfg)}this.refreshSelects(),this.updateUI(),this.charts()}open(){if(!this.admin){this.requestAdmin(()=>this.open());return}this.lab||this.load(this.track,this.cls),this.active=!0,q("lab").hidden=!1,q("labCaption").hidden=!1,q("fpsChip").hidden=!1,this.app.enterLabView(),this.showRace(),this.refreshSelects(),this.lastRender=0,this.updateUI(),requestAnimationFrame(()=>this.charts()),this.cloudPullSession(!1)}showRace(){let t=this.app;t.setRace(new Ji(t,{mode:"lab",trackId:this.track,cls:this.cls})),t.race.syncLab(this.lab,this.cfg),t.camRig.overview(0,this.geom.bounds(8))}leave(t=!0){this.persist(!0),this.training=!1,this.active=!1,q("lab").hidden=!0,q("labCaption").hidden=!0,q("fpsChip").hidden=!0,this.app.leaveLabView(t)}step(){let t=this.lab,e=hf(t,this.geom,this.cfg);if(this.rateSteps++,t.simTime-this.telT>=.25){this.telT=t.simTime;let n=xh(t),i=t.pop.reduce((a,o)=>a+(o.alive?1:0),0);this.telemetry.push({t:t.simTime,v:Math.abs(n.u)*3.6,p:Pt(n.max/this.geom.length*100,0,100),alive:i/t.pop.length*100,steer:n.ctl.steer,pedal:n.ctl.pedal});let r=t.simTime-this.cfg.telemetryWindow;for(;this.telemetry.length&&this.telemetry[0].t<r;)this.telemetry.shift()}e&&this.nextGen()}nextGen(){let t=this.lab,e=t.generation,n=uf(t,this.geom,this.cfg);n.improved&&(this.updateBrain(),n.top.done&&this.addResult(Le(this.track,this.cls),"ai",n.top.t,t.brainName,t.brainID,"\u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 "+e,e)),this.savePending=!0,this.cloudDirty.session=!0,this.cfg.autoStop&&t.bestTime!=null&&t.bestTime<=this.cfg.goal&&(this.training=!1,this.writeSave(!1),this.status(`\u0426\u0435\u043B\u044C ${this.cfg.goal.toFixed(2)} \u0441 \u0434\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u0430: ${Sh(t.bestTime)}. \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E.`))}toggle(){this.training=!this.training,this.acc=0,this.training||this.persist(!1),this.updateUI()}frame(t,e){let n=performance.now();if(this.training&&!document.hidden&&this.lab){this.acc=Math.min(this.acc+t*this.rate,this.rate*.2);let a=n+Pt(t*1e3*this.cfg.simBudget/100,2,80),o=2e5;for(;this.training&&this.acc>=Je&&o-- >0&&performance.now()<a;)this.step(),this.acc-=Je}this.rateClock+=e,this.rateClock>=1&&(this.actualRate=this.rateSteps*Je/this.rateClock,this.rateSteps=0,this.rateClock=0),this.autoClock+=e,this.autoClock>=this.cfg.autoSave&&(this.autoClock=0,(this.savePending||this.training)&&this.writeSave(!1)),this.cloudClock+=e,this.cloudClock>=this.cfg.cloudSave&&(this.cloudClock=0,this.cloudAutoPush()),this.uiClock+=e,this.uiClock>=1/Math.min(this.cfg.uiHz,5)&&(this.uiClock=0,this.updateUI(),this.charts());let r=!(this.training&&this.rate>4)||n-this.lastRender>=1e3/this.cfg.trainFps;return r&&(this.lastRender=n,this.fpsFrames++,this.app.race&&this.app.race.mode==="lab"&&this.app.race.syncLab(this.lab,this.cfg)),this.fpsTime+=e,this.fpsTime>=1&&(q("fpsChip").textContent=Math.round(this.fpsFrames/this.fpsTime)+" FPS \xB7 "+this.frameMS.toFixed(1)+" \u043C\u0441",this.fpsFrames=0,this.fpsTime=0),this.frameMS=this.frameMS*.9+(performance.now()-n)*.1,r}buildSelects(){let t=a=>a.map(o=>`<option value="${o.id}">${Ge(o.name)}</option>`).join(""),e=we.filter(a=>a.category==="real"),n=we.filter(a=>a.category!=="real"),i=`<optgroup label="\u041A\u0430\u0440\u0442\u043E\u0434\u0440\u043E\u043C\u044B">${t(e)}</optgroup><optgroup label="\u0424\u0430\u043D-\u0442\u0440\u0430\u0441\u0441\u044B">${t(n)}</optgroup>`;q("labTrack").innerHTML=i,q("boardTrack").innerHTML=i;let r=hv.map(a=>`<option value="${a}">${Ge(qt[a].name)}</option>`).join("");q("labClass").innerHTML=r,q("boardClass").innerHTML=r}refreshSelects(){q("labTrack").value=this.track,q("labClass").value=this.cls,q("rate").value=String(this.rate),q("mutation").value=String(this.cfg.mutation),this.admin&&(q("labLock").textContent="\u043D\u0435\u0439\u0440\u043E\u044D\u0432\u043E\u043B\u044E\u0446\u0438\u044F \xB7 "+Gs(this.track))}switchLab(t,e){t===this.track&&e===this.cls&&this.lab||(this.load(t,e),this.saveWorld(),this.active&&this.showRace(),this.updateUI(),this.charts(),this.cloudPullSession(!1))}updateUI(){var o;let t=this.lab;if(!t||!this.active)return;let e=this.geom.length,n=t.pop.reduce((l,c)=>l+(c.alive?1:0),0),i=q("labState");i.textContent=this.training?"\u041E\u0411\u0423\u0427\u0415\u041D\u0418\u0415":"\u041F\u0410\u0423\u0417\u0410",i.classList.toggle("on",this.training),q("generation").textContent=String(t.generation),q("alive").textContent=n+" / "+t.pop.length,q("record").textContent=t.bestProgress.toFixed(1)+"%",q("aiTime").textContent=Sh(t.bestTime),q("toggle").textContent=this.training?"\u275A\u275A \u041F\u0430\u0443\u0437\u0430":"\u25B6 \u041E\u0431\u0443\u0447\u0430\u0442\u044C",q("watch").disabled=!t.champion,q("actualRate").textContent=this.actualRate.toFixed(1)+"\xD7 / "+this.rate+"\xD7",q("plateau").textContent=(t.stagnation||0)+" \u043F\u043E\u043A.",q("effectiveMutation").textContent=(((o=t.effectiveMutation)!=null?o:this.cfg.mutation)*100).toFixed(1)+"%",q("targetDelta").textContent=t.bestTime==null?"\u2014":(t.bestTime-this.cfg.goal>=0?"+":"\u2212")+Math.abs(t.bestTime-this.cfg.goal).toFixed(3)+" \u0441",q("targetLabel").textContent=`${oi(this.track)} \xB7 ${qt[this.cls].name} \xB7 ${Math.round(e)} \u043C. \u041E\u0440\u0438\u0435\u043D\u0442\u0438\u0440 ${this.cfg.goal.toFixed(2)} \u0441 (\u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F).`;let r=this.app.store.record(Le(this.track,this.cls));q("humanRecord").textContent=r.bestLap?Zt(r.bestLap):"\u043D\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u043A\u043E\u0440\u0434\u0430",q("brainInfo").textContent=`\xAB${t.brainName}\xBB \xB7 ${t.pop.length} \u043F\u0438\u043B\u043E\u0442\u043E\u0432 \xB7 ${Pi} \u0432\u0435\u0441\u043E\u0432: ${He} \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u0435\u0432\u044B\u0445 + ${Ar} \u043F\u043E\u043F\u0440\u0430\u0432\u043E\u043A \u0443\u0447\u0430\u0441\u0442\u043A\u043E\u0432. \u0424\u0438\u0437\u0438\u043A\u0430 \u0442\u0430 \u0436\u0435, \u0447\u0442\u043E \u0443 \u0438\u0433\u0440\u043E\u043A\u0430.`;let a=xh(t);q("liveControls").textContent=`\u041B\u0438\u0434\u0435\u0440 #${a.id} \xB7 MMR ${a.mmr} \xB7 ${Math.round(Math.abs(a.u)*3.6)} \u043A\u043C/\u0447 \xB7 \u0440\u0443\u043B\u044C ${Math.round(a.ctl.steer*100)}% \xB7 \u043F\u0435\u0434\u0430\u043B\u044C ${Math.round(a.ctl.pedal*100)}%`,q("telemetryLabel").textContent="\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 "+this.cfg.telemetryWindow+" \u0441",q("labCaption").innerHTML=`\u041F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 <b>${t.generation}</b> \xB7 \u0432 \u0437\u0430\u0435\u0437\u0434\u0435 ${n}/${t.pop.length} \xB7 \u043B\u0438\u0434\u0435\u0440 #${a.id}: ${Math.round(Math.abs(a.u)*3.6)} \u043A\u043C/\u0447, ${Pt(a.max/e*100,0,100).toFixed(1)}%`+(t.bestTime!=null?` \xB7 \u043B\u0443\u0447\u0448\u0438\u0439 \u043A\u0440\u0443\u0433 <b>${Zt(t.bestTime)}</b>`:""),Tf(q("pilotTable"))&&(q("pilotTable").innerHTML=t.pop.slice().sort((l,c)=>c.mmr-l.mmr).slice(0,80).map(l=>`<tr><td>#${l.id}<small>\u0440\u043E\u0434. ${l.parent?"#"+l.parent:"\u2014"}</small></td><td>${l.mmr}<small>${l.trials?l.trials+" \u043F\u043E\u043F\u044B\u0442\u043E\u043A":"\u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439"}</small></td><td>${l.done?l.t.toFixed(3)+" \u0441":Pt(l.max/e*100,0,100).toFixed(1)+"%"}</td><td>${l.done?"\u0424\u0438\u043D\u0438\u0448":l.alive?"\u0412 \u043F\u0443\u0442\u0438":"\u0412\u044B\u0431\u044B\u043B"}</td></tr>`).join(""),q("pilotSummary").textContent="MMR \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043D\u0443\u044E \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044E, \u0432\u0440\u0435\u043C\u044F \u043A\u0440\u0443\u0433\u0430 \u0438 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0441 \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u0435\u0439. \u041F\u043E\u0442\u043E\u043C\u043E\u043A \u043D\u0430\u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043E\u0446\u0435\u043D\u043A\u0443 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F; \u044D\u043B\u0438\u0442\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 ID.")}charts(){let t=this.lab;if(!t||!this.active)return;let e=this.cfg,n=t.history.slice(-e.chartWindow),i=n.length?"\u041F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F "+n[0].g+" \u2014 "+n[n.length-1].g:"\u041F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F",r=n.map(c=>c.lap).filter(Number.isFinite),a=Math.max(e.goal*1.3,...r),o=Math.max(0,Math.min(e.goal,...n.map(c=>{var h;return(h=c.recordTime)!=null?h:e.goal}))*.95);li("timeChart",[{color:Ne.green,values:n.map(c=>{var h;return(h=c.lap)!=null?h:null})},{color:Ne.yellow,values:n.map(c=>{var h;return(h=c.recordTime)!=null?h:null})},{color:Ne.red,values:n.map(()=>e.goal)}],a,"\u041A\u0440\u0443\u0433, \u0441 \xB7 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F / \u0440\u0435\u043A\u043E\u0440\u0434 / \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440",i,o),li("successChart",[{color:Ne.green,values:n.map(c=>c.success)}],100,"\u0424\u0438\u043D\u0438\u0448\u0438\u0440\u043E\u0432\u0430\u043B\u043E, %",i),li("historyChart",[{color:Ne.green,values:n.map(c=>c.best)},{color:Ne.purple,values:n.map(c=>c.mean)}],100,"\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u043A\u0440\u0443\u0433\u0430 \xB7 %",i);let l=this.telemetry;li("liveChart",[{color:Ne.green,values:l.map(c=>c.v)},{color:Ne.purple,values:l.map(c=>c.p*1.4)}],140,"\u043A\u043C/\u0447 (0\u2013140) \xB7 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 (0\u2013100%)",l.length?"\u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044F "+l[0].t.toFixed(0)+" \u2014 "+l[l.length-1].t.toFixed(0)+" \u0441":"\u0412\u0440\u0435\u043C\u044F \xB7 \u0441",0,{color:Ne.purple,max:100}),li("mmrChart",[{color:Ne.green,values:n.map(c=>{var h;return(h=c.mmr)!=null?h:null})},{color:Ne.purple,values:n.map(c=>{var h;return(h=c.meanMMR)!=null?h:null})}],Math.max(1500,...n.map(c=>c.mmr||0)),"MMR \xB7 \u043B\u0443\u0447\u0448\u0438\u0439 / \u0441\u0440\u0435\u0434\u043D\u0438\u0439",i),li("diversityChart",[{color:Ne.purple,values:n.map(c=>{var h;return(h=c.diversity)!=null?h:null})}],Math.max(.1,...n.map(c=>c.diversity||0)),"\u0420\u0430\u0437\u0431\u0440\u043E\u0441 \u0432\u0435\u0441\u043E\u0432 \xB7 \u0441\u0442. \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435",i),li("mutationChart",[{color:Ne.yellow,values:n.map(c=>c.mutation==null?null:c.mutation*100)}],100,"\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u043C\u0443\u0442\u0430\u0446\u0438\u0438, %",i),li("aliveChart",[{color:Ne.green,values:l.map(c=>c.alive)}],100,"\u041A\u0430\u0440\u0442\u044B \u0432 \u0437\u0430\u0435\u0437\u0434\u0435, %","\u0412\u0440\u0435\u043C\u044F \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438"),li("controlChart",[{color:Ne.green,values:l.map(c=>50+c.steer*50)},{color:Ne.purple,values:l.map(c=>50+c.pedal*50)}],100,"\u0420\u0443\u043B\u044C / \u043F\u0435\u0434\u0430\u043B\u044C \xB7 0 = \u22121, 50 = 0, 100 = +1","\u0412\u0440\u0435\u043C\u044F \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u0438")}buildSettings(){let t=[...new Set(Wn.map(r=>r.g))];q("setTabs").innerHTML=t.map((r,a)=>`<button class="set-tab${a?"":" on"}" data-g="${r}">${r}</button>`).join(""),q("setPanels").innerHTML=t.map((r,a)=>`<div class="set-panel"${a?" hidden":""} data-g="${r}">`+Wn.filter(o=>o.g===r).map(o=>`<div class="set-row${o.key?" key":""}" data-k="${o.k}" data-find="${Ge((o.n+" "+o.h).toLowerCase())}"><div class="set-head"><span class="set-name">${o.key?"<i>\u2605</i>":""}${Ge(o.n)}</span><button class="set-def" id="def-${o.k}" title="\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"></button></div><div class="set-ctl">${mv(o)}</div><p class="set-hint">${Ge(o.h)}</p></div>`).join("")+"</div>").join("");let e=Wn.length,n=e%10,i=e%100;q("settingsCount").textContent=e+" "+(n===1&&i!==11?"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440":n>=2&&n<=4&&(i<12||i>14)?"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430":"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432"),Array.from(q("setTabs").children).forEach(r=>r.addEventListener("click",()=>{Array.from(q("setTabs").children).forEach(a=>a.classList.toggle("on",a===r)),Array.from(q("setPanels").children).forEach(a=>a.hidden=a.dataset.g!==r.dataset.g),q("setFilter").value="",this.filterSettings("")}));for(let r of Wn){let a=q("cfg-"+r.k),o=q("rng-"+r.k);a.addEventListener("change",l=>this.setValue(r,Ao(r,l.target))),o&&(o.addEventListener("input",l=>{let c=Ao(r,l.target);a.value=String(c),this.cfg[r.k]=c,this.paintDefaults()}),o.addEventListener("change",l=>this.setValue(r,Ao(r,l.target)))),q("def-"+r.k).addEventListener("click",()=>this.setValue(r,this.defaultOf(r.k),`\xAB${r.n}\xBB \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u043E \u043A \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E.`))}q("setFilter").addEventListener("input",r=>this.filterSettings(r.target.value.trim().toLowerCase())),this.syncSettings()}defaultOf(t){return t==="goal"?Rr(this.track,this.cls):Ki[t]}filterSettings(t){let e=Array.from(q("setPanels").children),n=Array.from(q("setTabs").children);if(!t){let r=n.find(a=>a.classList.contains("on"))||n[0];e.forEach(a=>{a.hidden=a.dataset.g!==r.dataset.g,Array.from(a.children).forEach(o=>o.hidden=!1)}),q("setCount").textContent="";return}let i=0;e.forEach(r=>{let a=!1;Array.from(r.children).forEach(o=>{let l=o.dataset.find.includes(t);o.hidden=!l,l&&(a=!0,i++)}),r.hidden=!a}),q("setCount").textContent=i?"\u041D\u0430\u0439\u0434\u0435\u043D\u043E: "+i:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"}paintDefaults(){for(let t of Wn){let e=q("def-"+t.k);if(!e)continue;let n=this.defaultOf(t.k),i=this.cfg[t.k]!==n;e.textContent=i?"\u043F\u043E \u0443\u043C\u043E\u043B\u0447. "+Sf(t,n):"\u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",e.classList.toggle("changed",i),e.disabled=!i}}syncSettings(){for(let t of Wn){let e=q("cfg-"+t.k);if(!e)continue;t.t==="bool"?e.checked=!!this.cfg[t.k]:e.value=String(this.cfg[t.k]);let n=q("rng-"+t.k);n&&(n.value=String(this.cfg[t.k]))}q("mutation").value=String(this.cfg.mutation),this.paintDefaults()}setValue(t,e,n){this.cfg[t.k]=e,this.syncSettings(),this.status(n||`\xAB${t.n}\xBB \u2014 ${Sf(t,e)}. \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u0441\u044F \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F.`),this.persist(!1)}applySettings(){let t={...this.cfg};for(let e of Wn){let n=q("cfg-"+e.k);n&&(t[e.k]=Ao(e,n))}try{bf(t)}catch(e){this.status(e.message);return}this.cfg=t,this.app.labCfg=this.cfg,this.syncSettings(),this.persist(!1),this.status("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u044B \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B. \u041E\u0442\u0431\u043E\u0440 \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0437\u0430\u0435\u0437\u0434\u0430 \u2014 \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F.")}preset(t){let e=this.cfg;t==="fine"?Object.assign(e,{fine:.7,fineStrength:.008,mutation:.03,strength:.04,sectorMutation:.04,crossover:.05,immigrants:.03,adaptive:!0,patience:25,memory:!0}):t==="explore"?Object.assign(e,{fine:.25,fineStrength:.04,mutation:.35,strength:.6,sectorMutation:.25,crossover:.25,immigrants:.2,adaptive:!0,patience:8,memory:!0}):t==="turbo"?(Object.assign(e,{simBudget:92,trainFps:8,uiHz:2,trail:!1,ghost:!1,dead:!1,telemetryWindow:20}),this.rate=256,q("rate").value="256"):this.cfg={...Ki,population:e.population,goal:e.goal},this.app.labCfg=this.cfg,this.syncSettings(),this.persist(!1),this.status(t==="turbo"?"\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438: \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0440\u0435\u0436\u0435, \u043F\u043E\u0447\u0442\u0438 \u0432\u0435\u0441\u044C \u043A\u0430\u0434\u0440 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432 \u0440\u0430\u0441\u0447\u0451\u0442.":"\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u0440\u0438\u043C\u0435\u043D\u0451\u043D. \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043D\u043E\u0432\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.")}watchCfg(){return{...Ki,...this.cfg,memory:!0}}watchChampion(){let t=this.lab;if(!t||!t.champion)return;this.persist(!0),this.training=!1;let e=JSON.parse(JSON.stringify(t.champion)),n=this.track,i=this.cls,r=this.watchCfg();this.leave(!1),this.app.startWatch({trackId:n,cls:i,labCfg:r,bestTime:t.bestTime,back:"lab",pilotName:`${t.brainName} \xB7 #${e.id}`,brainID:t.brainID,brainName:t.brainName,makeCar:()=>{let a=Vn(ai(n),qt[i],e.wts,null,!1,e.rules||Li(r));return a.id=e.id,a.mmr=e.mmr,a}})}onWatchDone(t,e){!e.done||!t.brainID||(this.addResult(Le(t.trackId,t.cls),"ai",e.t,t.brainName||t.pilotName,t.brainID,t.back==="garage"?"\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0438\u0437 \u0433\u0430\u0440\u0430\u0436\u0430":"\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430"),this.saveWorld())}openGarage(t,e){this.lab&&this.admin&&this.persist(!0),this.training&&(this.training=!1,this.updateUI());let n=t&&e?Le(t,e):this.garageKey,{t:i,c:r}=Ws(n);q("boardTrack").value=i,q("boardClass").value=r,this.garageKey=n,this.refreshGarage(),this.refreshBoards(),this.cloudPullBoards(),this.admin&&this.cloudOwner&&this.cloudPullWorld(),this.applyAdminUI(),q("garage").hidden=!1,setTimeout(()=>q("closeGarage").focus(),30)}closeGarage(){q("garage").hidden=!0}garageChanged(){this.garageKey=Le(q("boardTrack").value,q("boardClass").value),this.refreshBoards(),this.brainInfo(),this.cloudPullBoards()}refreshGarage(){let t=q("brainSelect"),e=t.value,n=this.world.library.slice().sort((i,r)=>(r.updatedAt||0)-(i.updatedAt||0));t.innerHTML=n.length?n.map(i=>`<option value="${Ge(i.id)}">${Ge(i.name)} \xB7 ${Ge(Gs(i.sourceMap))} \xB7 ${Ge(qt[i.cls].short)} \xB7 MMR ${i.mmr}</option>`).join(""):'<option value="">\u0421\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0445 \u043F\u0438\u043B\u043E\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442</option>',t.value=n.some(i=>i.id===e)?e:n[0]?n[0].id:"",this.brainInfo()}brainInfo(){let t=this.world.library.find(i=>i.id===q("brainSelect").value),e=q("boardTrack").value;if(q("testBrain").disabled=q("adaptBrain").disabled=!t,q("snapshotBrain").disabled=!this.lab||!this.lab.champion,!t){q("brainInfoText").textContent="\u041E\u0431\u0443\u0447\u0438\u0442\u0435 \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u044E \u0432 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438: \u043B\u0443\u0447\u0448\u0438\u0439 \u043F\u0438\u043B\u043E\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C. \u041C\u043E\u0436\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u043D\u0438\u043C\u043A\u0438.";return}let n=t.knowledge[e];q("brainInfoText").textContent=`\u041A\u043B\u0430\u0441\u0441 ${qt[t.cls].name} \xB7 MMR ${t.mmr}. \u0426\u0435\u043B\u044C: ${oi(e)}. `+(n?(t.sourceMap===e?"\u041E\u0431\u0443\u0447\u0430\u043B\u0441\u044F \u0437\u0434\u0435\u0441\u044C":"\u0415\u0441\u0442\u044C \u043E\u043F\u044B\u0442 \u044D\u0442\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u044B")+`: \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0439 ${n.generation}, \u043B\u0443\u0447\u0448\u0438\u0439 \u043A\u0440\u0443\u0433 ${Sh(n.bestTime)}.`:`\u041D\u0435 \u043E\u0431\u0443\u0447\u0435\u043D \u043D\u0430 \u044D\u0442\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u0435: \u043E\u0431\u0449\u0438\u0435 \u0432\u0435\u0441\u0430 \u0441\u0435\u0442\u0438 (${He}) \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F, \u043F\u043E\u043F\u0440\u0430\u0432\u043A\u0438 ${Ii} \u0443\u0447\u0430\u0441\u0442\u043A\u043E\u0432 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u0441 \u043D\u0443\u043B\u044F.`)+" \u0414\u043E\u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E."}testBrain(){let t=this.world.library.find(r=>r.id===q("brainSelect").value);if(!t)return;let e=q("boardTrack").value,n=this.watchCfg(),i=JSON.parse(JSON.stringify(t));this.closeGarage(),this.active&&this.leave(!1),this.app.startWatch({trackId:e,cls:t.cls,labCfg:n,bestTime:t.knowledge[e]?t.knowledge[e].bestTime:null,back:"garage",pilotName:t.name,brainID:t.id,brainName:t.name,makeCar:()=>_h(i,ai(e),e,n)})}async adaptBrain(){let t=this.world.library.find(c=>c.id===q("brainSelect").value);if(!t)return;let e=q("boardTrack").value,n=t.cls;if(!!Vs(Hs(e,n))&&!await this.ask(`\u041D\u0430\u0447\u0430\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u0434\u043E\u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 \xAB${oi(e)}\xBB (${qt[n].name})? \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u044F \u044D\u0442\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u044B \u0438 \u043A\u043B\u0430\u0441\u0441\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430. \u041F\u0438\u043B\u043E\u0442\u044B \u0432 \u0433\u0430\u0440\u0430\u0436\u0435 \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F.`,"\u0414\u043E\u043E\u0431\u0443\u0447\u0430\u0442\u044C"))return;this.lab&&this.persist(!0);let r=JSON.parse(JSON.stringify(t));this.track=e,this.cls=n,this.world.labTrack=e,this.world.labCls=n,this.cfg={...this.cfg,goal:Rr(e,n)},this.fresh();let a=this.lab;a.brainName=(r.name+" \u2192 "+Gs(e)).slice(0,80),a.originBrain=r.id,a.knowledge=JSON.parse(JSON.stringify(r.knowledge));let o=_h(r,this.geom,e,this.cfg).wts,l=Li(this.cfg);a.pop=a.pop.map((c,h)=>{let u=o.slice();if(h>3)for(let d=0;d<He;d++)Pe()<.25&&(u[d]=Pt(u[d]+(Pe()-.5)*.2,-8,8));return Vn(this.geom,qt[n],u,null,!1,l)}),this.app.labCfg=this.cfg,this.syncSettings(),this.writeSave(!1),this.closeGarage(),this.status(`\u041A\u043E\u043F\u0438\u044F \xAB${a.brainName}\xBB \u0433\u043E\u0442\u043E\u0432\u0430. \u041E\u0431\u0449\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u044B, \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043F\u0438\u043B\u043E\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u041E\u0431\u0443\u0447\u0430\u0442\u044C\xBB.`),this.active?this.afterSwap():this.open()}snapshotBrain(){if(!this.lab||!this.lab.champion)return;this.updateBrain();let t=this.world.library.find(n=>n.id===this.lab.brainID);if(!t)return;if(this.world.library.length>=200){this.status("\u0413\u0430\u0440\u0430\u0436 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D.");return}let e=JSON.parse(JSON.stringify(t));e.id="brain-"+this.world.nextBrain++,e.parent=t.id,e.name=(q("brainName").value.trim()||t.name+" \xB7 \u0441\u043D\u0438\u043C\u043E\u043A "+this.lab.generation).slice(0,80),e.updatedAt=Date.now(),this.world.library.push(e),this.saveWorld(),this.refreshGarage(),q("brainSelect").value=e.id,this.brainInfo(),q("brainName").value=""}refreshBoards(){let t=this.garageKey,e=this.board(t),{t:n,c:i}=Ws(t),r=(a,o)=>`<tr><td>${o+1}</td><td>${Ge(a.name)}<small>${Ge(a.note)}${a.generation?" \xB7 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 "+a.generation:""}</small></td><td>${Zt(a.time)}</td><td>${new Date(a.date).toLocaleDateString("ru-RU")}</td></tr>`;for(let a of["human","ai"])q("board-"+a).innerHTML=e[a].length?e[a].slice(0,30).map(r).join(""):'<tr><td colspan="4">\u041D\u0430 \u044D\u0442\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u0435 \u0432 \u044D\u0442\u043E\u043C \u043A\u043B\u0430\u0441\u0441\u0435 \u0435\u0449\u0451 \u043D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.</td></tr>';q("boardMap").textContent="\u0420\u0435\u043A\u043E\u0440\u0434\u044B \xB7 "+oi(n)+" \xB7 "+qt[i].name}async clearBoard(){let{t,c:e}=Ws(this.garageKey);if(!await this.ask(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \xAB${oi(t)}\xBB \u0432 \u043A\u043B\u0430\u0441\u0441\u0435 ${qt[e].name}? \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u043F\u0438\u043B\u043E\u0442\u044B \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F.`,"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"))return;this.world.boards[this.garageKey]={human:[],ai:[]},delete this.world.mine[this.garageKey];let n=this.app.store.record(this.garageKey);Object.assign(n,{bestLap:null,ghost:null,trace:null,bestSectors:[null,null,null],bestRace:{}}),this.app.store.save(),this.saveWorld(),this.refreshBoards(),this.cloudPushWorld()}async exportFile(){if(!this.lab)return;let t=`apex-${this.track}-${this.cls}-gen${this.lab.generation}.json`,e=JSON.stringify(this.payload());if(this.downloads){try{await this.downloads.save({filename:t,data:e}),this.status("\u0424\u0430\u0439\u043B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D.")}catch(a){this.status(a&&a.code==="declined"?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E.":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B: "+(a&&a.message||"\u043E\u0448\u0438\u0431\u043A\u0430"))}return}let n=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3),this.status("\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u0441\u043D\u0438\u043C\u043E\u043A \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F.")}async importFile(t){try{if(t.size>2e7)throw Error("\u0424\u0430\u0439\u043B \u0431\u043E\u043B\u044C\u0448\u0435 20 \u041C\u0411");let e=yh(JSON.parse(await t.text()),ji);if(!await this.ask(`\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \xAB${oi(e.track)}\xBB (${qt[e.cls].name}) \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0438\u0437 \u0444\u0430\u0439\u043B\u0430 (\u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 ${e.lab.generation})?`,"\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C"))return;this.lab&&this.persist(!0),this.restore(e),this.world.labTrack=e.track,this.world.labCls=e.cls,this.writeSave(!1),this.status("\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 "+this.lab.generation+"."),this.afterSwap()}catch(e){this.status("\u0418\u043C\u043F\u043E\u0440\u0442 \u043E\u0442\u043A\u043B\u043E\u043D\u0451\u043D: "+e.message)}}async deleteSession(){await this.ask(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0418\u0418 \u0434\u043B\u044F \xAB${oi(this.track)}\xBB (${qt[this.cls].name}): \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F, \u0432\u0435\u0441\u0430 \u0438 \u0433\u0440\u0430\u0444\u0438\u043A\u0438? \u041F\u0438\u043B\u043E\u0442\u044B \u0432 \u0433\u0430\u0440\u0430\u0436\u0435 \u0438 \u0440\u0435\u043A\u043E\u0440\u0434\u044B \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F. \u0411\u0435\u0437 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430 \u044D\u0442\u043E \u043D\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.`,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C")&&(this.training=!1,Eh(Hs(this.track,this.cls)),this.fresh(),this.status("\u0421\u043E\u0437\u0434\u0430\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u0430\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u044F. \u0421\u0442\u0430\u0440\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u043E."),this.afterSwap())}setCloud(t,e){this.cloudState=t;let n={idle:"\u041E\u0431\u043B\u0430\u043A\u043E: \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026",local:"\u0422\u043E\u043B\u044C\u043A\u043E \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E",owner:"\u041E\u0431\u043B\u0430\u043A\u043E \xB7 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043E",guest:"\u041E\u0431\u043B\u0430\u043A\u043E \xB7 \u0440\u0435\u043A\u043E\u0440\u0434\u044B",error:"\u041E\u0431\u043B\u0430\u043A\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E"}[t]||t,i=q("cloudChip");i.textContent=e?n+" \xB7 "+e:n,i.className="chip"+(t==="owner"?" ok":t==="error"?" warn":"");let r=t!=="owner";q("cloudPush").disabled=r,q("cloudPull").disabled=r}async initCloud(){let t=null;try{t=window.claude&&typeof window.claude.use=="function"?window.claude:null}catch{t=null}if(!t){this.setCloud("local");return}let[e,n]=await Promise.all([t.use("db").catch(()=>null),t.use("downloads").catch(()=>null)]);if(this.db=e,this.downloads=n,!e){this.setCloud("local");return}try{await e.doc("system/probe").set({at:Date.now(),client:this.clientID}),this.cloudOwner=!0}catch{this.cloudOwner=!1}this.setCloud(this.cloudOwner?"owner":"guest"),q("garage").hidden||this.cloudPullBoards();for(let i of Object.keys(this.world.mine))this.cloudPushScore(i,this.world.mine[i],!0);await this.cloudSync()}async cloudSync(){!this.db||!this.cloudOwner||!this.admin||(await this.cloudPullWorld(),this.lab&&await this.cloudPullSession(!1))}sessionJSON(){let t=this.payload();t.lab.champion&&(t.lab.champion.trail=(t.lab.champion.trail||[]).filter((n,i)=>i%2===0).slice(0,800)),t.lab.history=t.lab.history.slice(-300);let e=JSON.stringify(t);return e.length>23e4&&(t.lab.history=t.lab.history.slice(-100),e=JSON.stringify(t)),e.length>23e4&&(t.lab.pop=t.lab.pop.slice(0,24),e=JSON.stringify(t)),e}async cloudPushSession(t){if(!this.db||!this.cloudOwner||!this.lab)return!1;try{return await this.db.doc("sessions/"+wo(this.track,this.cls)).set({savedAt:Date.now(),generation:this.lab.generation,track:this.track,cls:this.cls,json:this.sessionJSON()}),this.cloudDirty.session=!1,this.setCloud("owner","\u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 "+new Date().toLocaleTimeString("ru-RU")),t&&this.status("\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u0432 \u043E\u0431\u043B\u0430\u043A\u043E."),!0}catch(e){return this.setCloud("owner","\u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438"),t&&this.status("\u041E\u0431\u043B\u0430\u043A\u043E \u043E\u0442\u043A\u043B\u043E\u043D\u0438\u043B\u043E \u0437\u0430\u043F\u0438\u0441\u044C: "+(e&&(e.code||e.message)||"\u043E\u0448\u0438\u0431\u043A\u0430")),!1}}async cloudPullSession(t){if(!this.db||!this.cloudOwner||!this.admin)return!1;let e=this.track,n=this.cls;try{let i=await this.db.doc("sessions/"+wo(e,n)).get();if(!i.exists)return t&&this.status("\u0412 \u043E\u0431\u043B\u0430\u043A\u0435 \u043D\u0435\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u044B \u0438 \u043A\u043B\u0430\u0441\u0441\u0430."),!1;if(e!==this.track||n!==this.cls)return!1;let r=i.data(),a=Number(r.savedAt)||0,o=0;try{let l=Vs(Hs(e,n));l&&(o=Number(JSON.parse(l).savedAt)||0)}catch{}return!t&&(this.training||o>=a)||t&&o>a&&!await this.ask(`\u0412 \u043E\u0431\u043B\u0430\u043A\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0440\u0448\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E (\u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 ${r.generation}). \u0412\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C?`,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C")?!1:(this.restore(JSON.parse(r.json)),this.writeSave(!1),this.status(`\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u0438\u0437 \u043E\u0431\u043B\u0430\u043A\u0430: \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 ${this.lab.generation} (${new Date(a).toLocaleString("ru-RU")}).`),this.afterSwap(),!0)}catch(i){return t&&this.status("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u043E\u0431\u043B\u0430\u043A\u043E: "+(i&&i.message||"\u043E\u0448\u0438\u0431\u043A\u0430")),!1}}async cloudPushWorld(){if(!this.db||!this.cloudOwner)return!1;try{let t=r=>({...r,general:r.general.map(So),knowledge:Object.fromEntries(Object.entries(r.knowledge||{}).map(([a,o])=>[a,{...o,memory:(o.memory||[]).map(So)}]))}),e={};for(let r of Object.keys(this.world.boards)){let a=this.world.boards[r];e[r]={human:a.human.slice(0,30),ai:a.ai.slice(0,30)}}let n=this.world.library.slice().sort((r,a)=>(r.updatedAt||0)-(a.updatedAt||0)).slice(-60).map(t),i=JSON.stringify({version:1,nextBrain:this.world.nextBrain,library:n,boards:e});for(;i.length>23e4&&n.length>5;)n=n.slice(Math.ceil(n.length/4)),i=JSON.stringify({version:1,nextBrain:this.world.nextBrain,library:n,boards:e});return await this.db.doc("garage/world").set({savedAt:Date.now(),json:i}),this.cloudDirty.world=!1,!0}catch{return this.setCloud("owner","\u0433\u0430\u0440\u0430\u0436 \u043D\u0435 \u0432\u044B\u0433\u0440\u0443\u0436\u0435\u043D"),!1}}async cloudPullWorld(){if(!this.db||!this.cloudOwner)return!1;try{let t=await this.db.doc("garage/world").get();if(!t.exists)return!1;let e=JSON.parse(t.data().json||"null");if(!e||!Array.isArray(e.library))return!1;let n=this.world,i=new Set(n.library.map(r=>r.id));for(let r of e.library.filter(a=>vh(a,ji)))!i.has(r.id)&&n.library.length<200&&n.library.push(r);n.nextBrain=Math.max(n.nextBrain||1,Number(e.nextBrain)||1);for(let r of Object.keys(e.boards||{})){if(!Ir(r))continue;let a=e.boards[r]||{},o=this.board(r);n.boards[r]={human:Mf(o.human,Eo(a.human)),ai:Mf(o.ai,Eo(a.ai))}}return this.saveWorld(),this.cloudDirty.world=!1,q("garage").hidden||(this.refreshGarage(),this.refreshBoards()),!0}catch{return!1}}async cloudPushScore(t,e,n=!1){if(!this.db||!Ir(t))return;let{t:i,c:r}=Ws(t);try{let a=this.db.collection("scores/"+wo(i,r)+"/rows").doc(this.clientID);if(n){let o=await a.get();if(o.exists&&Number(o.data().time)<=e)return}await a.set({name:this.app.playerName(),time:e,date:Date.now(),track:i,cls:r}),!q("garage").hidden&&t===this.garageKey&&this.cloudPullBoards()}catch{}}async cloudPullBoards(){let t=q("board-cloud");if(!this.db){t.innerHTML=`<tr><td colspan="4">${this.cloudState==="idle"?"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u043E\u0431\u043B\u0430\u043A\u0443\u2026":"\u041E\u0431\u043B\u0430\u043A\u043E \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E: \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B."}</td></tr>`;return}let e=this.garageKey,{t:n,c:i}=Ws(e);try{let r=await this.db.collection("scores/"+wo(n,i)+"/rows").orderBy("time","asc").limit(30).get();if(e!==this.garageKey)return;let a=r.docs.map(o=>o.data()).filter(o=>o&&Number.isFinite(o.time)&&typeof o.name=="string");t.innerHTML=a.length?a.map((o,l)=>`<tr><td>${l+1}</td><td>${Ge(o.name.slice(0,40))}</td><td>${Zt(o.time)}</td><td>${new Date(o.date||0).toLocaleDateString("ru-RU")}</td></tr>`).join(""):'<tr><td colspan="4">\u0412 \u043E\u0431\u043B\u0430\u043A\u0435 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u044D\u0442\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u044B \u0438 \u043A\u043B\u0430\u0441\u0441\u0430.</td></tr>'}catch{t.innerHTML='<tr><td colspan="4">\u041E\u0431\u043B\u0430\u0447\u043D\u0430\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430.</td></tr>'}}cloudAutoPush(){!this.db||!this.cloudOwner||(this.cloudDirty.session&&this.lab&&this.admin&&this.cloudPushSession(!1),this.cloudDirty.world&&this.cloudPushWorld())}flush(){this.lab?this.writeSave(!1):this.saveWorld(),this.cloudAutoPush()}bindUI(){let t=(e,n)=>q(e).addEventListener("click",n);t("loginOk",()=>this.submitLogin()),t("loginCancel",()=>{q("loginCard").hidden=!0,this.afterLogin=null}),q("loginPass").addEventListener("keydown",e=>{e.key==="Enter"&&this.submitLogin()}),q("loginUser").addEventListener("keydown",e=>{e.key==="Enter"&&q("loginPass").focus()}),t("askOk",()=>this.closeAsk(!0)),t("askCancel",()=>this.closeAsk(!1)),t("adminBtn",()=>this.admin?this.logout():this.requestAdmin()),t("toggle",()=>this.toggle()),t("watch",()=>this.watchChampion()),t("labExit",()=>{this.leave()}),q("labTrack").addEventListener("change",e=>this.switchLab(e.target.value,this.cls)),q("labClass").addEventListener("change",e=>this.switchLab(this.track,e.target.value)),q("rate").addEventListener("change",e=>{this.rate=Pt(Number(e.target.value),1,256),this.acc=0,this.persist(!1)}),q("mutation").addEventListener("change",e=>{this.cfg.mutation=Pt(Number(e.target.value)||0,0,1),this.syncSettings(),this.persist(!1)}),t("presetBalanced",()=>this.preset("balanced")),t("presetFine",()=>this.preset("fine")),t("presetExplore",()=>this.preset("explore")),t("presetTurbo",()=>this.preset("turbo")),t("applySettings",()=>this.applySettings()),t("saveNow",()=>this.persist(!0)),t("load",()=>this.loadSaved()),t("cloudPush",async()=>{this.status("\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 \u0432 \u043E\u0431\u043B\u0430\u043A\u043E\u2026"),this.lab&&this.writeSave(!1),await this.cloudPushSession(!0),await this.cloudPushWorld()}),t("cloudPull",()=>this.cloudPullSession(!0)),t("export",()=>this.exportFile()),t("import",()=>q("file").click()),q("file").addEventListener("change",async e=>{let n=e.target.files[0];n&&await this.importFile(n),e.target.value=""}),t("delete",()=>this.deleteSession()),t("closeGarage",()=>this.closeGarage()),q("boardTrack").addEventListener("change",()=>this.garageChanged()),q("boardClass").addEventListener("change",()=>this.garageChanged()),q("brainSelect").addEventListener("change",()=>this.brainInfo()),t("testBrain",()=>this.testBrain()),t("adaptBrain",()=>this.adaptBrain()),t("snapshotBrain",()=>this.snapshotBrain()),t("clearBoard",()=>this.clearBoard()),q("garage").addEventListener("click",e=>{e.target===q("garage")&&this.closeGarage()}),addEventListener("pagehide",()=>this.flush()),document.addEventListener("visibilitychange",()=>{this.acc=0,document.hidden&&this.lab&&this.active&&this.writeSave(!1)})}};var yt=s=>document.getElementById(s),yn=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Ef={race:"\u0413\u043E\u043D\u043A\u0430",cup:"\u0427\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442",tt:"\u0417\u0430\u0435\u0437\u0434 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F",watch:"\u041D\u0435\u0439\u0440\u043E\u043F\u0438\u043B\u043E\u0442"},Qi=vd.map(s=>s.id),Co={steer:0,throttle:0,brake:0,item:!1,look:!1,camera:!1,reset:!1,pause:!1,shiftUp:!1,shiftDown:!1,skip:!1},Af={italy:["#26361c","#32471f"],belgium:["#1c3120","#254227"],england:["#1b3620","#23472a"],sweden:["#1a3324","#21402d"],day:["#1d3a22","#26492b"],sunset:["#3a2430","#5a3440"],night:["#11122a","#1b1c3a"]},Rf=s=>s%10===1&&s%100!==11?"\u043A\u0440\u0443\u0433":s%10>=2&&s%10<=4&&(s%100<12||s%100>14)?"\u043A\u0440\u0443\u0433\u0430":"\u043A\u0440\u0443\u0433\u043E\u0432",Rh=class{constructor(){this.store=new bo,this.settings=this.store.settings,this.settings.quality||this.store.setSettings({quality:br()?"medium":"high"}),we.some(n=>n.id===this.settings.trackId)||this.store.setSettings({trackId:"lonato"}),qt[this.settings.cls]||this.store.setSettings({cls:"ok"}),this.canvas=yt("game"),this.renderer=new Aa({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ue,this.renderer.toneMapping=yr,Dd(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.camera=new Ke(60,innerWidth/innerHeight,.1,3e3),this.camRig=new Mo(this.camera),this.camRig.mode=this.settings.camera,this.hud=new yo,this.audio=new vo,this.audio.setVolumes({master:this.settings.master,music:this.settings.music,sfx:this.settings.sfx}),this.input=new _o,this.input.bindTouch(yt("touch")),this.state="menu",this.paused=!1,this.race=null,this.cup=null,this.lastInput=Co,this.labCfg=null;let t=we.find(n=>n.id===this.settings.trackId);this.menu={mode:"tt",trackId:t.id,driverId:this.settings.driverId,cls:this.settings.cls,category:t.category};try{let n=localStorage.getItem("apex.name");n&&(yt("playerName").value=n)}catch{}this.lab=new Ro(this),this.applyQuality(),addEventListener("resize",()=>this.resize()),this.bindUI(),this.lab.boot(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="race"&&this.pause()});let e=()=>{this.audio.init(),this.audio.setMusic(this.state==="race"?"race":"menu")};addEventListener("pointerdown",e),addEventListener("keydown",e),this.startAttract(this.menu.trackId),yt("loading").hidden=!0,yt("topbar").hidden=!1,this.showScreen("title"),this.last=performance.now(),requestAnimationFrame(n=>this.loop(n))}playerName(){return(yt("playerName").value||"").trim().slice(0,30)||"\u0418\u0433\u0440\u043E\u043A"}updateWelcome(){if(!this.lab)return;let t=we.find(a=>a.id===this.menu.trackId),e=qt[this.menu.cls],n=this.store.record(Le(t.id,e.id)),i=n.bestLap?`\u0412\u0430\u0448 \u0440\u0435\u043A\u043E\u0440\u0434 ${t.short} \xB7 ${e.short}: ${Zt(n.bestLap)}`:`\u0420\u0435\u043A\u043E\u0440\u0434\u0430 \u043D\u0430 ${t.short} \u0432 \u043A\u043B\u0430\u0441\u0441\u0435 ${e.short} \u043F\u043E\u043A\u0430 \u043D\u0435\u0442`,r=this.lab.admin?`\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0430 \xB7 \u043F\u0438\u043B\u043E\u0442\u043E\u0432 \u0432 \u0433\u0430\u0440\u0430\u0436\u0435: ${this.lab.world.library.length}`:"\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0418\u0418 \u0437\u0430\u043A\u0440\u044B\u0442\u0430 \xB7 \u0432\u0445\u043E\u0434 \u043F\u043E \u043F\u0430\u0440\u043E\u043B\u044E";yt("welcomeData").textContent=i+" \xB7 "+r}applyQuality(){let t=this.settings.quality,e=this.renderer,n=window.devicePixelRatio||1;if(e.setPixelRatio(t==="high"?Math.min(n,2):t==="medium"?Math.min(n,1.5):Math.min(n,1)),e.shadowMap.enabled=t!=="low",e.shadowMap.type=t==="high"?zc:Ya,t==="high"){if(!this.composer){let i=new Be(1,1,{type:cn,samples:4});this.composer=new eo(e,i),this.renderPass=new no(new Ps,this.camera),this.bloom=new zs(new at(256,256),.4,.5,.85),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(new io)}}else this.composer&&(this.composer.dispose(),this.composer=null);this.resize(),this.hud.showFps(this.settings.fps),this.hud.touchEnabled=this.settings.touch==="on"||this.settings.touch==="auto"&&br()}resize(){let t=Math.max(64,this.canvas.clientWidth||innerWidth),e=Math.max(64,this.canvas.clientHeight||innerHeight);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e))}applyTheme(t){let e=t.theme;this.renderer.toneMappingExposure=e.exposure,this.bloom&&(this.bloom.strength=e.night?.7:.22,this.bloom.threshold=e.night?.62:.9,this.bloom.radius=e.night?.55:.4)}render(){this.race&&(this.composer?(this.renderPass.scene=this.race.scene,this.composer.render()):this.renderer.render(this.race.scene,this.camera))}setRace(t){this.race&&this.race.dispose(),this.race=t,this.applyTheme(t),this.renderer.compile(t.scene,this.camera)}startAttract(t){this.setRace(new Ji(this,{mode:"attract",trackId:t,cls:this.menu.cls,laps:999,difficulty:"hard"}));let e=we.find(n=>n.id===t);yt("onair-what").textContent=e.name+" \xB7 "+qt[this.menu.cls].name}startRace(t){t.mode!=="watch"&&(this.lastCfg=t),yt("loading").hidden=!1,yt("loading-text").textContent=t.mode==="watch"?"\u041D\u0435\u0439\u0440\u043E\u043F\u0438\u043B\u043E\u0442 \u0432\u044B\u0435\u0437\u0436\u0430\u0435\u0442":"\u041F\u0440\u043E\u0433\u0440\u0435\u0432\u0430\u0435\u043C \u0448\u0438\u043D\u044B",this.hideScreens(),yt("onair").hidden=!0,yt("topbar").hidden=!0,setTimeout(()=>{this.setRace(new Ji(this,t)),this.hud.setupRace(this.race),this.hud.show(!0);let e=this.race;this.hud.message(e.def.name,"info",2.4),t.mode==="tt"?this.hud.message(`${e.cls.name} \xB7 \u0432\u044B\u0435\u0437\u0434 \u0438\u0437 \u0431\u043E\u043A\u0441\u043E\u0432`,"small",2.4):t.mode==="watch"?this.hud.message(`${e.cls.name} \xB7 ${t.pilotName}`,"small",2.4):this.hud.message((t.mode==="cup"?`\u042D\u0442\u0430\u043F ${this.cup.stage+1} \u0438\u0437 ${Qi.length} \xB7 `:"")+`${e.cls.short} \xB7 ${t.laps} ${Rf(t.laps)}`,"small",2.4),this.hud.showTouch(!0),this.state="race",this.paused=!1,this.input.poll(),this.input.captureKeys=!0,this.audio.setMusic("race"),yt("loading").hidden=!0,this.canvas.focus()},30)}startWatch(t){this.watchSpec=t,this.cup=null,this.startRace({mode:"watch",trackId:t.trackId,cls:t.cls,car:t.makeCar(),labCfg:t.labCfg,pilotName:t.pilotName,bestTime:t.bestTime,laps:1})}restart(){this.hideScreens(),this.race&&this.race.mode==="watch"&&this.watchSpec?this.startWatch(this.watchSpec):this.lastCfg&&this.lastCfg.mode==="cup"&&this.cup?this.startCupStage():this.lastCfg&&this.startRace(this.lastCfg)}pause(){if(this.state!=="race")return;this.state="paused",this.paused=!0,this.audio.silenceEngines(),this.hud.showTouch(!1),yt("pause-title").textContent=this.race.def.name;let t=this.race.mode==="tt"?["\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0441\u0435\u0441\u0441\u0438\u044E","\u0438\u0442\u043E\u0433\u0438 \u043A\u0440\u0443\u0433\u043E\u0432"]:this.race.mode==="watch"?["\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440","\u0438\u0442\u043E\u0433 \u043F\u043E\u043F\u044B\u0442\u043A\u0438"]:["\u0421\u043E\u0439\u0442\u0438 \u0441 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u0438","\u0440\u0430\u0441\u0447\u0451\u0442\u043D\u044B\u0435 \u0438\u0442\u043E\u0433\u0438"];yt("pauseEnd").innerHTML=`<span class="t">${t[0]}</span><span class="h">${t[1]}</span>`,yt("topbar").hidden=!1,this.showScreen("pause")}resume(){this.hideScreens(),this.state="race",this.paused=!1,yt("topbar").hidden=!0,this.input.poll(),this.hud.showTouch(!0),this.canvas.focus()}endSession(){let t=this.race;if(!t||t.mode==="attract")return;if(this.hideScreens(),this.state="race",this.paused=!1,t.mode==="watch"){this.showWatchResults(t.watchCar,t);return}let e=t.buildResults();e.ended=!0,this.onRaceFinished(e,t)}quitToMenu(){this.cup=null,this.state="menu",this.paused=!1,document.body.classList.remove("lab-mode"),this.hud.show(!1),this.input.captureKeys=!1,this.audio.silenceEngines(),this.audio.setMusic("menu"),yt("topbar").hidden=!1,this.resize(),this.startAttract(this.menu.trackId),this.showScreen("title")}enterLabView(){this.state="lab",this.paused=!1,this.cup=null,this.hideScreens(),yt("onair").hidden=!0,yt("topbar").hidden=!1,this.hud.show(!1),this.input.captureKeys=!1,this.audio.silenceEngines(),document.body.classList.add("lab-mode"),this.resize()}leaveLabView(t=!0){document.body.classList.remove("lab-mode"),this.resize(),t&&this.quitToMenu()}shift(t,e){!this.race||!t.cls.gears||!this.race.playerOpts.manual||Cd(t,e)}onPlayerBestLap(t,e){this.lab.onPlayerLap(Le(e.def.id,e.cls.id),t,e.player.driver.name,e.cls.short,e.sid)}onWatchFinished(t,e){e===this.race&&(this.lab.onWatchDone(this.watchSpec,t),this.hud.message(t.done?"\u0424\u0438\u043D\u0438\u0448: "+Zt(t.t):"\u041F\u043E\u043F\u044B\u0442\u043A\u0430 \u043F\u0440\u0435\u0440\u0432\u0430\u043D\u0430",t.done?"final":"bad",2.4),setTimeout(()=>{this.race===e&&this.state==="race"&&this.showWatchResults(t,e)},2600))}showWatchResults(t,e){var l;this.state="results",this.hud.show(!1),this.audio.silenceEngines(),this.input.captureKeys=!1,yt("topbar").hidden=!1;let n=this.watchSpec,i=e.geom.length,r=this.store.record(Le(e.def.id,e.cls.id));yt("res-eyebrow").textContent="\u041D\u0435\u0439\u0440\u043E\u043F\u0438\u043B\u043E\u0442 \xB7 "+e.cls.name,yt("res-title").textContent=n.pilotName,yt("res-podium").innerHTML="";let a=Math.min(100,Math.max(t.max,0)/i*100),o=[["\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",t.done?Zt(t.t):`\u043D\u0435 \u0434\u043E\u0435\u0445\u0430\u043B: ${a.toFixed(1)}% \u043A\u0440\u0443\u0433\u0430`],["\u0422\u0440\u0430\u0441\u0441\u0430",`${e.def.name} \xB7 ${Math.round(i)} \u043C`],["\u041B\u0443\u0447\u0448\u0438\u0439 \u043A\u0440\u0443\u0433 \u0418\u0418 \u0432 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438",n.bestTime!=null?Zt(n.bestTime):"\u2014"],["\u0420\u0435\u043A\u043E\u0440\u0434 \u0438\u0433\u0440\u043E\u043A\u0430 \u0432 \u044D\u0442\u043E\u043C \u043A\u043B\u0430\u0441\u0441\u0435",r.bestLap?Zt(r.bestLap):"\u2014"],["MMR \u043F\u0438\u043B\u043E\u0442\u0430",String((l=t.mmr)!=null?l:"\u2014")]];t.done&&r.bestLap&&o.splice(1,0,["\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u0441 \u0438\u0433\u0440\u043E\u043A\u043E\u043C",(t.t-r.bestLap>=0?"+":"\u2212")+Math.abs(t.t-r.bestLap).toFixed(3)+" \u0441"]),yt("res-table").innerHTML="<tbody>"+o.map(([c,h])=>`<tr><td>${yn(c)}</td><td class="mono">${yn(h)}</td></tr>`).join("")+"</tbody>",yt("res-note").textContent=t.done?"\u0417\u0430\u0435\u0437\u0434 \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u0418\u0418 \u044D\u0442\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u044B \u0438 \u043A\u043B\u0430\u0441\u0441\u0430.":"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u043E\u043A\u0440\u044B\u0448\u0435\u043A \u0438\u043B\u0438 \u0437\u0430\u0441\u0442\u043E\u0439 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u044E\u0442 \u043F\u043E\u043F\u044B\u0442\u043A\u0443. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0434\u043E\u043E\u0431\u0443\u0447\u0438\u0442\u044C \u043F\u0438\u043B\u043E\u0442\u0430 \u043D\u0430 \u044D\u0442\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u0435.",this.resultActions([["\u041C\u0435\u043D\u044E",!1,()=>this.quitToMenu()],[n.back==="garage"?"\u0412 \u0433\u0430\u0440\u0430\u0436":"\u0412 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044E",!1,()=>{n.back==="garage"?(this.quitToMenu(),this.lab.openGarage(n.trackId,n.cls)):((this.lab.track!==n.trackId||this.lab.cls!==n.cls||!this.lab.lab)&&this.lab.load(n.trackId,n.cls),this.hideScreens(),this.lab.open())}],["\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437",!0,()=>this.startWatch(n)]]),this.showScreen("results")}onRaceFinished(t,e){if(e!==this.race||this.state!=="race")return;this.state="results",this.hud.show(!1),this.audio.silenceEngines(),this.input.captureKeys=!1,yt("topbar").hidden=!1;let n=t.rows.find(r=>r.isPlayer),i="";t.mode==="race"&&n&&!n.est&&this.store.saveRace(Le(t.trackId,t.cls),t.laps,n.time)&&(i=`\u041B\u0443\u0447\u0448\u0430\u044F \u0433\u043E\u043D\u043A\u0430 \u043D\u0430 ${t.laps} ${Rf(t.laps)}: ${Zt(n.time)}.`),t.mode==="cup"&&(t.rows.forEach((r,a)=>{let o=r.est&&t.ended&&r.isPlayer?0:Md[a]||0;this.cup.points[r.driver.id]=(this.cup.points[r.driver.id]||0)+o,r.pts=o}),this.cup.lastResults=t),this.renderResults(t,i),this.showScreen("results"),this.updateWelcome()}startCup(){let t=mn.map(e=>e.id);this.cup={stage:0,points:{},driverId:this.menu.driverId,cls:this.menu.cls,difficulty:this.settings.difficulty,field:t},t.forEach(e=>this.cup.points[e]=0),this.startCupStage()}startCupStage(){let t=this.cup,e;if(t.stage===0){let n=t.field.filter(i=>i!==t.driverId).sort(()=>Math.random()-.5);n.splice(5,0,t.driverId),e=n}else e=t.field.slice().sort((n,i)=>t.points[n]-t.points[i]);this.startRace({mode:"cup",trackId:Qi[t.stage],cls:t.cls,driverId:t.driverId,difficulty:t.difficulty,laps:3,grid:e})}showScreen(t){this.hideScreens();let e=yt("scr-"+t);e.hidden=!1,this.curScreen=t,yt("onair").hidden=!(this.state==="menu"&&t==="title"),t==="setup"&&this.renderSetup(),t==="settings"&&this.renderSettings(),t==="title"&&this.updateWelcome();let n=e.querySelector(".menu-btn, .btn.primary, button");n&&!br()&&n.focus({preventScroll:!0})}hideScreens(){document.querySelectorAll(".screen").forEach(t=>t.hidden=!0),this.curScreen=null}bindUI(){document.body.addEventListener("click",t=>{t.target.closest("button")&&this.audio.ctx&&this.audio.play("ui");let n=t.target.closest("[data-go]");if(n){let r=n.dataset.go;r==="race"||r==="cup"||r==="tt"?(this.menu.mode=r,this.showScreen("setup")):r==="settings"?(this.settingsBack="title",this.showScreen("settings")):r==="lab"?this.lab.open():r==="garage"?this.lab.openGarage(this.menu.trackId,this.menu.cls):this.showScreen(r)}let i=t.target.closest("[data-act]");if(i){let r=i.dataset.act;r==="resume"&&this.resume(),r==="restart"&&this.restart(),r==="end"&&this.endSession(),r==="settings"&&(this.settingsBack="pause",this.showScreen("settings")),r==="quit"&&this.quitToMenu()}}),yt("garageBtn").addEventListener("click",()=>{let t=this.race;t&&t.mode!=="attract"&&t.mode!=="lab"?this.lab.openGarage(t.def.id,t.cls.id):t&&t.mode==="lab"?this.lab.openGarage(this.lab.track,this.lab.cls):this.lab.openGarage(this.menu.trackId,this.menu.cls)}),yt("soundBtn").addEventListener("click",()=>{this.audio.init();let t=this.audio.toggleMute();yt("soundBtn").textContent=t?"\u266A \u0411\u0435\u0437 \u0437\u0432\u0443\u043A\u0430":"\u266A \u0417\u0432\u0443\u043A"}),yt("playerName").addEventListener("change",()=>{try{localStorage.setItem("apex.name",this.playerName())}catch{}}),yt("btn-start").addEventListener("click",()=>{let t=this.settings,e=this.menu;this.store.setSettings({driverId:e.driverId,trackId:e.trackId,cls:e.cls,category:e.category}),e.mode==="cup"?this.startCup():this.startRace({mode:e.mode,trackId:e.trackId,cls:e.cls,driverId:e.driverId,difficulty:t.difficulty,laps:t.laps,opponents:e.mode==="tt"?0:t.opponents})}),yt("btn-settings-back").addEventListener("click",()=>{this.settingsBack==="pause"?this.showScreen("pause"):this.showScreen("title")}),document.querySelectorAll("#scr-setup [data-cat]").forEach(t=>t.addEventListener("click",()=>{this.menu.category=t.dataset.cat;let e=we.filter(n=>n.category===this.menu.category);e.some(n=>n.id===this.menu.trackId)||(this.menu.trackId=e[0].id,this.state==="menu"&&this.startAttract(this.menu.trackId)),this.renderSetup()})),document.querySelectorAll("#scr-setup .seg").forEach(t=>{t.addEventListener("click",e=>{let n=e.target.closest("button");if(!n)return;let i=t.dataset.opt,r=i==="difficulty"?n.dataset.v:Number(n.dataset.v);this.store.setSettings({[i]:r}),this.syncSeg(t,String(r))})}),document.querySelectorAll("#scr-settings .seg").forEach(t=>{t.addEventListener("click",e=>{let n=e.target.closest("button");if(!n)return;let i=t.dataset.set,r=n.dataset.v;(i==="camera"||i==="assist")&&(r=Number(r)),i==="fps"&&(r=r==="true");let a=i==="quality"&&r!==this.settings.quality;this.store.setSettings({[i]:r}),i==="quality"&&this.store.setSettings({qualityAuto:!1}),this.syncSeg(t,String(r)),i==="camera"&&(this.camRig.mode=r),this.race&&(i==="assist"||i==="gearbox")&&(this.race.playerOpts.assist=this.settings.assist,this.race.playerOpts.manual=this.settings.gearbox==="manual"&&!!this.race.cls.gears),this.applyQuality(),a&&this.state==="menu"&&this.startAttract(this.menu.trackId)})}),document.querySelectorAll("#scr-settings input[type=range]").forEach(t=>{t.addEventListener("input",()=>{let e=t.dataset.vol;this.store.setSettings({[e]:Number(t.value)}),this.audio.setVolumes({[e]:Number(t.value)})})}),addEventListener("keydown",t=>{if(t.code==="Escape"&&this.lab.handleEscape()){t.preventDefault();return}if(this.lab.modalOpen())return;let e=t.target&&["INPUT","SELECT","TEXTAREA"].includes(t.target.tagName);if((t.code==="Escape"||t.code==="KeyP"&&!e)&&(this.state==="paused"&&this.curScreen==="pause"?(t.preventDefault(),this.resume()):this.curScreen==="settings"&&t.code==="Escape"?yt("btn-settings-back").click():this.state==="menu"&&this.curScreen&&this.curScreen!=="title"&&t.code==="Escape"&&this.showScreen("title")),t.code==="KeyM"&&this.state!=="race"&&!e){let n=this.audio.toggleMute();yt("soundBtn").textContent=n?"\u266A \u0411\u0435\u0437 \u0437\u0432\u0443\u043A\u0430":"\u266A \u0417\u0432\u0443\u043A"}})}syncSeg(t,e){t.querySelectorAll("button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.v===e)))}renderSetup(){let t=this.menu,e=this.settings,n=t.mode==="cup";n&&(t.category="real"),yt("setup-eyebrow").textContent=Ef[t.mode],yt("setup-title").textContent=n?`${Qi.length} \u044D\u0442\u0430\u043F\u0430, \u043E\u0434\u043D\u0430 \u0442\u0430\u0431\u043B\u0438\u0446\u0430`:t.mode==="tt"?"\u0412\u044B\u0435\u0437\u0434 \u0438\u0437 \u0431\u043E\u043A\u0441\u043E\u0432, \u043A\u0440\u0443\u0433\u0438 \u043F\u043E \u0441\u0435\u043A\u0442\u043E\u0440\u0430\u043C":"\u0422\u0440\u0430\u0441\u0441\u0430, \u043A\u043B\u0430\u0441\u0441 \u0438 \u043F\u0438\u043B\u043E\u0442",document.querySelectorAll("#scr-setup [data-cat]").forEach(l=>{l.setAttribute("aria-pressed",String(l.dataset.cat===t.category)),l.disabled=n&&l.dataset.cat!=="real"});let i=yt("track-list");i.innerHTML="";for(let l of we.filter(c=>c.category===t.category)){let c=this.store.record(Le(l.id,t.cls)),h=ai(l.id),u=document.createElement("button");u.className="track-card",u.setAttribute("aria-pressed",String(!n&&l.id===t.trackId)),n&&(u.disabled=!0),u.innerHTML=`<canvas width="220" height="164" aria-hidden="true"></canvas><span><span class="nm">${yn(l.name)}</span><span class="pl">${yn(l.place)}</span><span class="meta"><span>${Math.round(h.length)} \u043C</span><span>${l.width||Math.round(h.roadWidth)} \u043C</span><span>${c.bestLap?Zt(c.bestLap):"\u043D\u0435\u0442 \u0440\u0435\u043A\u043E\u0440\u0434\u0430"}</span></span></span>`,gv(u.querySelector("canvas"),h,l.theme),u.addEventListener("click",()=>{n||(t.trackId=l.id,i.querySelectorAll(".track-card").forEach(d=>d.setAttribute("aria-pressed","false")),u.setAttribute("aria-pressed","true"),this.renderTrackDesc(),this.state==="menu"&&this.race&&this.race.def.id!==l.id&&this.startAttract(l.id))}),i.appendChild(u)}this.renderTrackDesc();let r=yt("cup-stages");r.hidden=!n,r.innerHTML=n?Qi.map((l,c)=>`<span>\u042D\u0442\u0430\u043F ${c+1}: <b>${yn(we.find(h=>h.id===l).short)}</b></span>`).join('<span aria-hidden="true">\u2192</span>'):"";let a=yt("class-list");a.innerHTML="";for(let l of Object.keys(qt)){let c=qt[l],h=document.createElement("button");h.className="cls",h.setAttribute("aria-pressed",String(l===t.cls)),h.title=c.note,h.innerHTML=`<b>${yn(c.name)}</b><span>~${c.vmaxKmh} \u043A\u043C/\u0447 \xB7 ${c.gears?c.gears.length+" \u043F\u0435\u0440\u0435\u0434\u0430\u0447":"\u043F\u0440\u044F\u043C\u043E\u0439 \u043F\u0440\u0438\u0432\u043E\u0434"}</span><small>${c.mass} \u043A\u0433 \u0441 \u043F\u0438\u043B\u043E\u0442\u043E\u043C \xB7 \u0434\u043E ${c.rpmMax.toLocaleString("ru-RU")} \u043E\u0431/\u043C\u0438\u043D \xB7 \u0442\u043E\u0440\u043C\u043E\u0437\u0430 ${c.frontBrakes?"\u043D\u0430 \u043E\u0431\u0435 \u043E\u0441\u0438":"\u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0437\u0430\u0434\u0438"}</small>`,h.addEventListener("click",()=>{t.cls=l,a.querySelectorAll(".cls").forEach(u=>u.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true"),this.store.setSettings({cls:l}),this.renderSetup(),this.state==="menu"&&this.startAttract(t.trackId)}),a.appendChild(h)}let o=yt("driver-list");o.innerHTML="";for(let l of mn){let c=document.createElement("button");c.className="drv",c.setAttribute("aria-pressed",String(l.id===t.driverId)),c.title=l.bio,c.innerHTML=`<span class="num" style="background:${l.color};color:${l.accent}">${l.num}</span><span class="nm">${yn(l.name)}</span>`,c.addEventListener("click",()=>{t.driverId=l.id,o.querySelectorAll(".drv").forEach(h=>h.setAttribute("aria-pressed","false")),c.setAttribute("aria-pressed","true")}),o.appendChild(c)}yt("opt-diff").hidden=t.mode==="tt",yt("opt-laps").hidden=t.mode==="cup",yt("opt-opp").hidden=t.mode!=="race",this.syncSeg(document.querySelector("[data-opt=difficulty]"),e.difficulty),this.syncSeg(document.querySelector("[data-opt=laps]"),String(e.laps)),this.syncSeg(document.querySelector("[data-opt=opponents]"),String(e.opponents)),yt("btn-start").textContent=n?"\u041D\u0430\u0447\u0430\u0442\u044C \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442":t.mode==="tt"?"\u0412\u044B\u0435\u0445\u0430\u0442\u044C \u0438\u0437 \u0431\u043E\u043A\u0441\u043E\u0432":"\u041D\u0430 \u0441\u0442\u0430\u0440\u0442"}renderTrackDesc(){let t=this.menu;if(t.mode==="cup"){yt("track-desc").textContent="\u041E\u0447\u043A\u0438 \u0437\u0430 \u043C\u0435\u0441\u0442\u0430: 10, 8, 6, 5, 4, 3, 2, 1. \u0421\u043E \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430 \u043B\u0438\u0434\u0435\u0440 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442\u0430 \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C. \u041A\u043B\u0430\u0441\u0441 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u043E\u0434\u0438\u043D \u043D\u0430 \u0432\u0435\u0441\u044C \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442.";return}let e=we.find(r=>r.id===t.trackId),n=this.store.record(Le(e.id,t.cls)),i=n.bestSectors&&n.bestSectors.every(r=>r!=null)?` \u041B\u0443\u0447\u0448\u0438\u0435 \u0441\u0435\u043A\u0442\u043E\u0440\u044B: ${n.bestSectors.map(r=>r.toFixed(3)).join(" \xB7 ")}.`:"";yt("track-desc").textContent=`${e.place}. ${e.desc}${e.corners?" \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432: "+e.corners+".":""}${i}`}renderSettings(){let t=this.settings;document.querySelectorAll("#scr-settings .seg").forEach(e=>this.syncSeg(e,String(t[e.dataset.set]))),document.querySelectorAll("#scr-settings input[type=range]").forEach(e=>e.value=t[e.dataset.vol])}resultActions(t){let e=yt("res-actions");e.innerHTML="";for(let[i,r,a]of t){let o=document.createElement("button");o.className="btn"+(r?" primary":""),o.textContent=i,o.addEventListener("click",a),e.appendChild(o)}let n=e.querySelector(".btn.primary");n&&!br()&&setTimeout(()=>n.focus({preventScroll:!0}),50)}renderResults(t,e){let n=t.mode==="cup",i=t.mode==="tt",r=t.rows.find(c=>c.isPlayer),a=qt[t.cls];yt("res-eyebrow").textContent=(n?`\u0427\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442 \xB7 \u044D\u0442\u0430\u043F ${this.cup.stage+1} \u0438\u0437 ${Qi.length}`:Ef[t.mode])+" \xB7 "+a.name,yt("res-podium").innerHTML="";let o=this.store.record(Le(t.trackId,t.cls)),l;if(i){yt("res-title").textContent=t.trackName;let c=r.laps.filter(d=>d!=null),h=c.length?Math.min(...c):null,u=[0,1,2].map(d=>Math.min(...r.secHist.map((f,g)=>r.laps[g]!=null&&f&&f[d]!=null?f[d]:1/0)));l='<thead><tr><th>\u041A\u0440\u0443\u0433</th><th class="mono">S1</th><th class="mono">S2</th><th class="mono">S3</th><th class="mono">\u0412\u0440\u0435\u043C\u044F</th><th class="mono">\u041A \u043B\u0443\u0447\u0448\u0435\u043C\u0443</th></tr></thead><tbody>'+(r.laps.length?r.laps.map((d,f)=>{let g=r.secHist[f]||[],x=[0,1,2].map(m=>`<td class="mono ${d!=null&&g[m]===u[m]?"purple":""}">${g[m]!=null?g[m].toFixed(3):"\u2014"}</td>`).join("");return d==null?`<tr><td class="p">${f+1}</td>${x}<td class="mono est">\u043D\u0435 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D</td><td class="mono">\u2014</td></tr>`:`<tr class="${d===h?"me":""}"><td class="p">${f+1}</td>${x}<td class="mono ${d===h?"purple":""}">${Zt(d)}</td><td class="mono">${d===h?"\u2014":"+"+(d-h).toFixed(3)}</td></tr>`}).join(""):'<tr><td colspan="6">\u041D\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0445 \u043A\u0440\u0443\u0433\u043E\u0432: \u0432\u0440\u0435\u043C\u044F \u0438\u0434\u0451\u0442 \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u044F \u043B\u0438\u043D\u0438\u0438 \u0441\u0442\u0430\u0440\u0442\u0430.</td></tr>')+(h!=null&&u.every(Number.isFinite)?`<tr><td class="p">\u03A3</td><td class="mono" colspan="3">\u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0440\u0443\u0433: ${Zt(u[0]+u[1]+u[2])}</td><td class="mono">${Zt(h)}</td><td></td></tr>`:"")+"</tbody>",e=(e?e+" ":"")+`\u0420\u0435\u043A\u043E\u0440\u0434 \u0442\u0440\u0430\u0441\u0441\u044B \u0432 \u043A\u043B\u0430\u0441\u0441\u0435 ${a.short}: ${Zt(o.bestLap)}. \u0420\u0435\u043A\u043E\u0440\u0434\u043D\u044B\u0439 \u043A\u0440\u0443\u0433 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043F\u0440\u0438\u0437\u0440\u0430\u043A \u0434\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0432\u044B\u0435\u0437\u0434\u0430.`}else{yt("res-title").textContent=r?`${r.pos}-\u0435 \u043C\u0435\u0441\u0442\u043E \xB7 ${t.trackName}`:t.trackName;let c=t.rows[0];l=`<thead><tr><th>\u041F\u043E\u0437</th><th>\u041F\u0438\u043B\u043E\u0442</th><th class="mono">\u0412\u0440\u0435\u043C\u044F</th><th class="mono">\u041E\u0442\u0441\u0442\u0430\u0432\u0430\u043D\u0438\u0435</th><th class="mono">\u041B\u0443\u0447\u0448\u0438\u0439 \u043A\u0440\u0443\u0433</th>${n?'<th class="mono">\u041E\u0447\u043A\u0438</th>':""}</tr></thead><tbody>`+t.rows.map(h=>{let u=h===c?"\u2014":"+"+(h.time-c.time).toFixed(3),d=isFinite(h.bestLap)&&h.bestLap===t.fastestLap;return`<tr class="${h.isPlayer?"me":""}"><td class="p">${h.pos}</td><td><span class="pilot"><i style="background:${h.driver.color}"></i>\u2116${h.driver.num} ${yn(h.name)}</span></td><td class="mono ${h.est?"est":""}">${Zt(h.time)}</td><td class="mono ${h.est?"est":""}">${u}</td><td class="mono ${d?"purple":""}">${isFinite(h.bestLap)?Zt(h.bestLap):"\u2014"}</td>${n?`<td class="mono pts">+${h.pts}</td>`:""}</tr>`}).join("")+"</tbody>",t.rows.some(h=>h.est)&&(e=(e?e+" ":"")+"\u041A\u0443\u0440\u0441\u0438\u0432\u043E\u043C \u2014 \u0440\u0430\u0441\u0447\u0451\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u0438\u043B\u043E\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0434\u043E\u0435\u0445\u0430\u043B\u0438 \u0434\u043E \u0444\u0438\u043D\u0438\u0448\u0430."),t.ended&&n&&(e+=" \u0421\u0445\u043E\u0434 \u0441 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u0438: \u043E\u0447\u043A\u0438 \u0437\u0430 \u044D\u0442\u0430\u043F \u043D\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u044B.")}if(yt("res-table").innerHTML=l,yt("res-note").textContent=e,n)this.resultActions([["\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E",!1,()=>this.quitToMenu()],["\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442\u0430",!0,()=>this.renderCupTable()]]);else{let c=[["\u041C\u0435\u043D\u044E",!1,()=>this.quitToMenu()],["\u0420\u0435\u043A\u043E\u0440\u0434\u044B",!1,()=>this.lab.openGarage(t.trackId,t.cls)]];if(!i){let h=we.filter(d=>d.category===we.find(f=>f.id===t.trackId).category),u=h[(h.findIndex(d=>d.id===t.trackId)+1)%h.length];c.push(["\u0422\u0440\u0430\u0441\u0441\u0430: "+u.short,!1,()=>{this.menu.trackId=u.id,this.startRace({...this.lastCfg,trackId:u.id})}])}c.push([i?"\u041D\u043E\u0432\u044B\u0439 \u0432\u044B\u0435\u0437\u0434":"\u0415\u0449\u0451 \u0440\u0430\u0437",!0,()=>this.startRace(this.lastCfg)]),this.resultActions(c)}}renderCupTable(){let t=this.cup,e=t.stage>=Qi.length-1,n=t.field.map(a=>({d:mn.find(o=>o.id===a),pts:t.points[a]})).sort((a,o)=>o.pts-a.pts);yt("res-eyebrow").textContent=(e?"\u0427\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442 \xB7 \u0438\u0442\u043E\u0433":`\u0427\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442 \xB7 \u043F\u043E\u0441\u043B\u0435 \u044D\u0442\u0430\u043F\u0430 ${t.stage+1}`)+" \xB7 "+qt[t.cls].name;let i=n.findIndex(a=>a.d.id===t.driverId)+1;if(yt("res-title").textContent=e?i===1?"\u0427\u0435\u043C\u043F\u0438\u043E\u043D!":`\u0418\u0442\u043E\u0433: ${i}-\u0435 \u043C\u0435\u0441\u0442\u043E`:"\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442\u0430",e){let a=n.slice(0,3);yt("res-podium").innerHTML=`<div class="podium"><div class="p2"><div class="place">2</div><div class="who">${yn(a[1].d.name)}</div><div class="pts">${a[1].pts}</div></div><div class="p1"><div class="place">1</div><div class="who">${yn(a[0].d.name)}</div><div class="pts">${a[0].pts}</div></div><div class="p3"><div class="place">3</div><div class="who">${yn(a[2].d.name)}</div><div class="pts">${a[2].pts}</div></div></div>`,i===1&&(this.store.data.cupWins++,this.store.save())}else yt("res-podium").innerHTML="";yt("res-table").innerHTML='<thead><tr><th>\u041F\u043E\u0437</th><th>\u041F\u0438\u043B\u043E\u0442</th><th class="mono">\u041E\u0447\u043A\u0438</th><th class="mono">\u041E\u0442\u0440\u044B\u0432</th></tr></thead><tbody>'+n.map((a,o)=>`<tr class="${a.d.id===t.driverId?"me":""}"><td class="p">${o+1}</td><td><span class="pilot"><i style="background:${a.d.color}"></i>\u2116${a.d.num} ${yn(a.d.name)}</span></td><td class="mono pts">${a.pts}</td><td class="mono">${o===0?"\u2014":"\u2212"+(n[0].pts-a.pts)}</td></tr>`).join("")+"</tbody>",yt("res-note").textContent=e?`\u041F\u043E\u0431\u0435\u0434 \u0432 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442\u0430\u0445: ${this.store.data.cupWins}.`:`\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u044D\u0442\u0430\u043F: ${we.find(a=>a.id===Qi[t.stage+1]).name}. \u041B\u0438\u0434\u0435\u0440 \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C.`;let r=[["\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E",!1,()=>this.quitToMenu()]];e?r.push(["\u041D\u043E\u0432\u044B\u0439 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442",!0,()=>this.startCup()]):r.push(["\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u044D\u0442\u0430\u043F",!0,()=>{t.stage++,this.startCupStage()}]),this.resultActions(r)}menuNav(){if(!this.curScreen)return;let t=this.input.pollMenu();if(!(t.up||t.down||t.left||t.right||t.ok||t.back))return;let e=yt("scr-"+this.curScreen),n=Array.from(e.querySelectorAll("button:not([disabled]), input")).filter(r=>r.offsetParent!==null);if(!n.length)return;let i=n.indexOf(document.activeElement);(t.down||t.right)&&(i=(i+1)%n.length),(t.up||t.left)&&(i=(i-1+n.length)%n.length),(t.up||t.down||t.left||t.right)&&(n[Math.max(0,i)].focus(),this.audio.ctx&&this.audio.play("uiMove")),t.ok&&document.activeElement&&document.activeElement.tagName==="BUTTON"&&document.activeElement.click(),t.back&&(this.curScreen==="pause"?this.resume():this.curScreen!=="title"&&this.curScreen!=="results"&&this.showScreen(this.state==="paused"?"pause":"title"))}autoQuality(t){if(this.settings.qualityAuto===!1||this.state!=="menu"||this.settings.quality==="low")return;let e=this.perf||(this.perf={t:0,n:0,skip:1.5,checks:0});if(e.skip>0){e.skip-=t;return}if(e.t+=t,e.n++,e.t<3)return;let n=e.n/e.t;this.perf={t:0,n:0,skip:1.5,checks:e.checks+1},n<40?(this.store.setSettings({quality:this.settings.quality==="high"?"medium":"low"}),this.applyQuality(),this.startAttract(this.menu.trackId)):this.perf.checks>=2&&this.store.setSettings({qualityAuto:!1})}loop(t){requestAnimationFrame(i=>this.loop(i));let e=Math.max(1e-4,(t-this.last)/1e3),n=Math.min(.05,e);if(this.last=t,!!this.race){if(this.state==="lab"){this.labVis=(this.labVis||0)+e,this.lab.frame(n,Math.min(e,.5))&&(this.race.update(Math.min(.1,this.labVis),Co),this.labVis=0,this.render());return}if(this.autoQuality(Math.min(e,.5)),this.state==="race"){let i=this.input.poll(this.hud.touchEnabled&&!!this.race.player);if(this.lastInput=i,i.mute){let r=this.audio.toggleMute();yt("soundBtn").textContent=r?"\u266A \u0411\u0435\u0437 \u0437\u0432\u0443\u043A\u0430":"\u266A \u0417\u0432\u0443\u043A"}if(i.pause){this.pause(),this.render();return}this.race.update(n,i)}else this.state!=="paused"?(this.lastInput=Co,this.race.update(n,Co),this.menuNav()):this.menuNav();this.render()}}};function gv(s,t,e){let n=s.getContext("2d"),i=s.width,r=s.height,a=Af[e]||Af.day,o=n.createLinearGradient(0,0,0,r);o.addColorStop(0,a[0]),o.addColorStop(1,a[1]),n.fillStyle=o,n.fillRect(0,0,i,r);let l=t.bounds(10),c=Math.min((i-20)/(l.maxX-l.minX),(r-20)/(l.maxZ-l.minZ)),h=(i-(l.maxX-l.minX)*c)/2,u=(r-(l.maxZ-l.minZ)*c)/2,d=x=>h+(x-l.minX)*c,f=x=>u+(x-l.minZ)*c;if(n.lineJoin="round",n.lineCap="round",t.pit){n.beginPath();for(let x=0;x<=t.pit.M;x+=3)n.lineTo(d(t.pit.x[x]),f(t.pit.z[x]));n.strokeStyle="rgba(200,205,215,0.55)",n.lineWidth=2,n.stroke()}n.beginPath();for(let x=0;x<=t.N;x+=3){let m=x%t.N;n.lineTo(d(t.px[m]),f(t.pz[m]))}n.closePath(),n.strokeStyle="rgba(0,0,0,0.4)",n.lineWidth=9,n.stroke(),n.strokeStyle="#f2f3f5",n.lineWidth=4.5,n.stroke();let g=t.pointAt(0,0);n.fillStyle="#ffd000",n.beginPath(),n.arc(d(g.x),f(g.z),4.5,0,7),n.fill()}function Cf(){try{let s=document.createElement("canvas");if(!(s.getContext("webgl2")||s.getContext("webgl")))throw new Error("webgl");window.__apex=new Rh}catch(s){console.error(s),yt("loading-text").textContent="\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C WebGL. \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438\u043B\u0438 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435.";let t=document.querySelector("#loading .bar");t&&(t.hidden=!0)}}var Ah=typeof window!="undefined"&&window.claude&&window.claude.hot;Ah&&Ah.ready?Ah.ready(Cf):Cf();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
