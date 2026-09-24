(()=>{var Bl="170";var Nu=0,Sc=1,Fu=2;var io=1,zl=2,Ln=3,Qn=0,Le=1,Be=2,Mn=0,$n=1,qe=2,wc=3,Tc=4,Ou=5,xi=100,Bu=101,zu=102,ku=103,Hu=104,Vu=200,Gu=201,Wu=202,Xu=203,fa=204,pa=205,qu=206,Yu=207,Zu=208,$u=209,Ju=210,Ku=211,Qu=212,ju=213,td=214,ma=0,ga=1,xa=2,Zi=3,_a=4,va=5,ya=6,Ma=7,Lh=0,ed=1,nd=2,Jn=0,kl=1,Hl=2,Vl=3,Fs=4,id=5,Gl=6,Wl=7;var Dh=300,$i=301,Ji=302,ba=303,Sa=304,so=306,As=1e3,vi=1001,wa=1002,Xe=1003,sd=1004;var qs=1005;var vn=1006,Lo=1007;var yi=1008;var Fn=1009,Uh=1010,Nh=1011,Rs=1012,Xl=1013,Mi=1014,yn=1015,Ye=1016,ql=1017,Yl=1018,Ki=1020,Fh=35902,Oh=1021,Bh=1022,cn=1023,zh=1024,kh=1025,Xi=1026,Qi=1027,Zl=1028,$l=1029,Hh=1030,Jl=1031;var Kl=1033,Mr=33776,br=33777,Sr=33778,wr=33779,Ta=35840,Ea=35841,Aa=35842,Ra=35843,Ca=36196,Ia=37492,Pa=37496,La=37808,Da=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,Ba=37814,za=37815,ka=37816,Ha=37817,Va=37818,Ga=37819,Wa=37820,Xa=37821,Tr=36492,qa=36494,Ya=36495,Vh=36283,Za=36284,$a=36285,Ja=36286;var Er=2300,Ka=2301,Do=2302,Ec=2400,Ac=2401,Rc=2402;var rd=3200,od=3201;var Gh=0,ad=1,Yn="",Te="srgb",os="srgb-linear",ro="linear",Kt="srgb";var Ti=7680;var Cc=519,ld=512,cd=513,hd=514,Wh=515,ud=516,dd=517,fd=518,pd=519,Qa=35044,Os=35048;var Ic="300 es",Un=2e3,Ar=2001,jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Uo=Math.PI/180,ja=180/Math.PI;function Kn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[r&255]+Ie[r>>8&255]+Ie[r>>16&255]+Ie[r>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Ee(r,t,e){return Math.max(t,Math.min(e,r))}function md(r,t){return(r%t+t)%t}function No(r,t,e){return(1-e)*r+e*t}function _n(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var st=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],y=i[4],v=i[7],R=i[2],T=i[5],E=i[8];return s[0]=o*x+a*_+l*R,s[3]=o*m+a*y+l*T,s[6]=o*p+a*v+l*E,s[1]=c*x+h*_+u*R,s[4]=c*m+h*y+u*T,s[7]=c*p+h*v+u*E,s[2]=f*x+d*_+g*R,s[5]=f*m+d*y+g*T,s[8]=f*p+d*v+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fo=new Nt;function Xh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Rr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gd(){let r=Rr("canvas");return r.style.display="block",r}var Pc={};function bs(r){r in Pc||(Pc[r]=!0,console.warn(r))}function xd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function _d(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vd(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ht={enabled:!0,workingColorSpace:os,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?ro:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Nn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Lc=[.64,.33,.3,.6,.15,.06],Dc=[.2126,.7152,.0722],Uc=[.3127,.329],Nc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ht.define({[os]:{primaries:Lc,whitePoint:Uc,transfer:ro,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:Dc,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:Lc,whitePoint:Uc,transfer:Kt,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:Dc,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}});var Ei,tl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Rr("canvas")),Ei.width=t.width,Ei.height=t.height;let n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Rr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yd=0,Cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Oo(i[o].image)):s.push(Oo(i[o]))}else s=Oo(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Oo(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?tl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Md=0,ze=class r extends jn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=vi,i=vi,s=vn,o=yi,a=cn,l=Fn,c=r.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Kn(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Dh;ze.DEFAULT_ANISOTROPY=1;var fe=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,R=(p+1)/2,T=(h+f)/4,E=(u+x)/4,C=(g+m)/4;return y>v&&y>R?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=E/n):v>R?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=C/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},el=class extends jn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new ze(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Cr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ae=class extends el{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ir=class extends ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let R=Math.sqrt(y),T=Math.atan2(R,p*_);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let v=a*_;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bo.copy(this).projectOnVector(t),this.sub(Bo)}reflect(t){return this.sub(Bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bo=new P,Oc=new ti,hn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Zs.subVectors(this.max,fs),Ai.subVectors(t.a,fs),Ri.subVectors(t.b,fs),Ci.subVectors(t.c,fs),Hn.subVectors(Ri,Ai),Vn.subVectors(Ci,Ri),hi.subVectors(Ai,Ci);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-hi.z,hi.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,hi.z,0,-hi.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-hi.y,hi.x,0];return!zo(e,Ai,Ri,Ci,Zs)||(e=[1,0,0,0,1,0,0,0,1],!zo(e,Ai,Ri,Ci,Zs))?!1:($s.crossVectors(Hn,Vn),e=[$s.x,$s.y,$s.z],zo(e,Ai,Ri,Ci,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},An=[new P,new P,new P,new P,new P,new P,new P,new P],on=new P,Ys=new hn,Ai=new P,Ri=new P,Ci=new P,Hn=new P,Vn=new P,hi=new P,fs=new P,Zs=new P,$s=new P,ui=new P;function zo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ui.fromArray(r,s);let a=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var bd=new hn,ps=new P,ko=new P,ei=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(ko)),this.expandByPoint(ps.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new P,Ho=new P,Js=new P,Gn=new P,Vo=new P,Ks=new P,Go=new P,Pr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ho.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(Ho);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Js),a=Gn.dot(this.direction),l=-Gn.dot(Js),c=Gn.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ho).addScaledVector(Js,f),d}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,s){Vo.subVectors(e,t),Ks.subVectors(n,t),Go.crossVectors(Vo,Ks);let o=this.direction.dot(Go),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,t);let l=a*this.direction.dot(Ks.crossVectors(Gn,Ks));if(l<0)return null;let c=a*this.direction.dot(Vo.cross(Gn));if(c<0||l+c>o)return null;let h=-a*Gn.dot(Go);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,g,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ii.setFromMatrixColumn(t,0).length(),s=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sd,t,wd)}lookAt(t,e,n){let i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Wn.crossVectors(n,Ge),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Wn.crossVectors(n,Ge)),Wn.normalize(),Qs.crossVectors(Ge,Wn),i[0]=Wn.x,i[4]=Qs.x,i[8]=Ge.x,i[1]=Wn.y,i[5]=Qs.y,i[9]=Ge.y,i[2]=Wn.z,i[6]=Qs.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],y=n[7],v=n[11],R=n[15],T=i[0],E=i[4],C=i[8],b=i[12],M=i[1],I=i[5],O=i[9],L=i[13],H=i[2],Y=i[6],W=i[10],J=i[14],z=i[3],$=i[7],tt=i[11],at=i[15];return s[0]=o*T+a*M+l*H+c*z,s[4]=o*E+a*I+l*Y+c*$,s[8]=o*C+a*O+l*W+c*tt,s[12]=o*b+a*L+l*J+c*at,s[1]=h*T+u*M+f*H+d*z,s[5]=h*E+u*I+f*Y+d*$,s[9]=h*C+u*O+f*W+d*tt,s[13]=h*b+u*L+f*J+d*at,s[2]=g*T+x*M+m*H+p*z,s[6]=g*E+x*I+m*Y+p*$,s[10]=g*C+x*O+m*W+p*tt,s[14]=g*b+x*L+m*J+p*at,s[3]=_*T+y*M+v*H+R*z,s[7]=_*E+y*I+v*Y+R*$,s[11]=_*C+y*O+v*W+R*tt,s[15]=_*b+y*L+v*J+R*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+x*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,y=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,R=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,T=e*_+n*y+i*v+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=_*E,t[1]=(x*f*s-u*m*s-x*i*d+n*m*d+u*i*p-n*f*p)*E,t[2]=(a*m*s-x*l*s+x*i*c-n*m*c-a*i*p+n*l*p)*E,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*E,t[4]=y*E,t[5]=(h*m*s-g*f*s+g*i*d-e*m*d-h*i*p+e*f*p)*E,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*E,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*E,t[8]=v*E,t[9]=(g*u*s-h*x*s-g*n*d+e*x*d+h*n*p-e*u*p)*E,t[10]=(o*x*s-g*a*s+g*n*c-e*x*c-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*E,t[12]=R*E,t[13]=(h*x*i-g*u*i+g*n*f-e*x*f-h*n*m+e*u*m)*E,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,x=o*h,m=o*u,p=a*u,_=l*c,y=l*h,v=l*u,R=n.x,T=n.y,E=n.z;return i[0]=(1-(x+p))*R,i[1]=(d+v)*R,i[2]=(g-y)*R,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+p))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(g+y)*E,i[9]=(m-_)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Ii.set(i[0],i[1],i[2]).length(),o=Ii.set(i[4],i[5],i[6]).length(),a=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],an.copy(this);let c=1/s,h=1/o,u=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Un){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(a===Un)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ar)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Un){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h,g,x;if(a===Un)g=(o+s)*u,x=-2*u;else if(a===Ar)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ii=new P,an=new ee,Sd=new P(0,0,0),wd=new P(1,1,1),Wn=new P,Qs=new P,Ge=new P,Bc=new ee,zc=new ti,bn=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Td=0,kc=new P,Pi=new ti,Cn=new ee,js=new P,ms=new P,Ed=new P,Ad=new ti,Hc=new P(1,0,0),Vc=new P(0,1,0),Gc=new P(0,0,1),Wc={type:"added"},Rd={type:"removed"},Li={type:"childadded",child:null},Wo={type:"childremoved",child:null},ve=class r extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new P,e=new bn,n=new ti,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Nt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Hc,t)}rotateY(t){return this.rotateOnAxis(Vc,t)}rotateZ(t){return this.rotateOnAxis(Gc,t)}translateOnAxis(t,e){return kc.copy(t).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hc,t)}translateY(t){return this.translateOnAxis(Vc,t)}translateZ(t){return this.translateOnAxis(Gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ms,js,this.up):Cn.lookAt(js,ms,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wc),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rd),Wo.child=t,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wc),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ve.DEFAULT_UP=new P(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new P,In=new P,Xo=new P,Pn=new P,Di=new P,Ui=new P,Xc=new P,qo=new P,Yo=new P,Zo=new P,$o=new fe,Jo=new fe,Ko=new fe,Zn=class r{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ln.subVectors(i,e),In.subVectors(n,e),Xo.subVectors(t,e);let o=ln.dot(ln),a=ln.dot(In),l=ln.dot(Xo),c=In.dot(In),h=In.dot(Xo),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return $o.setScalar(0),Jo.setScalar(0),Ko.setScalar(0),$o.fromBufferAttribute(t,e),Jo.fromBufferAttribute(t,n),Ko.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector($o,s.x),o.addScaledVector(Jo,s.y),o.addScaledVector(Ko,s.z),o}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),In.subVectors(t,e),ln.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Di.subVectors(i,n),Ui.subVectors(s,n),qo.subVectors(t,n);let l=Di.dot(qo),c=Ui.dot(qo);if(l<=0&&c<=0)return e.copy(n);Yo.subVectors(t,i);let h=Di.dot(Yo),u=Ui.dot(Yo);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Di,o);Zo.subVectors(t,s);let d=Di.dot(Zo),g=Ui.dot(Zo);if(g>=0&&d<=g)return e.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ui,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Xc.subVectors(s,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Xc,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Di,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Qo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var _t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ht.workingColorSpace){if(t=md(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Qo(o,s,t+1/3),this.g=Qo(o,s,t),this.b=Qo(o,s,t-1/3)}return Ht.toWorkingColorSpace(this,i),this}setStyle(t,e=Te){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Ht.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ee(Pe.r*255,0,255))*65536+Math.round(Ee(Pe.g*255,0,255))*256+Math.round(Ee(Pe.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Pe.copy(this),e);let n=Pe.r,i=Pe.g,s=Pe.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Te){Ht.fromWorkingColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,i=Pe.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(tr);let n=No(Xn.h,tr.h,e),i=No(Xn.s,tr.s,e),s=No(Xn.l,tr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new _t;_t.NAMES=qh;var Cd=0,On=class extends jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Kn(),this.name="",this.blending=$n,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},te=class extends On{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new P,er=new st,xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qa&&(t.usage=this.usage),t}};var Dr=class extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ur=class extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bt=class extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Id=0,je=new ee,jo=new ve,Ni=new P,We=new hn,gs=new hn,we=new P,ne=class r extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xh(t)?Ur:Dr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(We.min,gs.min),We.expandByPoint(we),we.addVectors(We.max,gs.max),We.expandByPoint(we)):(We.expandByPoint(gs.min),We.expandByPoint(gs.max))}We.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(t,c),we.add(Ni)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new P,l[C]=new P;let c=new P,h=new P,u=new P,f=new st,d=new st,g=new st,x=new P,m=new P;function p(C,b,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(x),a[b].add(x),a[M].add(x),l[C].add(m),l[b].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,b=_.length;C<b;++C){let M=_[C],I=M.start,O=M.count;for(let L=I,H=I+O;L<H;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new P,v=new P,R=new P,T=new P;function E(C){R.fromBufferAttribute(i,C),T.copy(R);let b=a[C];y.copy(b),y.sub(R.multiplyScalar(R.dot(b))).normalize(),v.crossVectors(T,b);let I=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,I)}for(let C=0,b=_.length;C<b;++C){let M=_[C],I=M.start,O=M.count;for(let L=I,H=I+O;L<H;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new xe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qc=new ee,di=new Pr,nr=new ei,Yc=new P,ir=new P,sr=new P,rr=new P,ta=new P,or=new P,Zc=new P,ar=new P,pt=class extends ve{constructor(t=new ne,e=new te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){or.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(ta.fromBufferAttribute(u,t),o?or.addScaledVector(ta,h):or.addScaledVector(ta.sub(e),h))}e.add(or)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),di.copy(t.ray).recast(t.near),!(nr.containsPoint(di.origin)===!1&&(di.intersectSphere(nr,Yc)===null||di.origin.distanceToSquared(Yc)>(t.far-t.near)**2))&&(qc.copy(s).invert(),di.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,R=y;v<R;v+=3){let T=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);i=lr(this,p,t,n,c,h,u,T,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=lr(this,o,t,n,c,h,u,_,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,R=y;v<R;v+=3){let T=v,E=v+1,C=v+2;i=lr(this,p,t,n,c,h,u,T,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,y=m+1,v=m+2;i=lr(this,o,t,n,c,h,u,_,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Pd(r,t,e,n,i,s,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Qn,a),l===null)return null;ar.copy(a),ar.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:r}}function lr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ir),r.getVertexPosition(l,sr),r.getVertexPosition(c,rr);let h=Pd(r,t,e,n,ir,sr,rr,Zc);if(h){let u=new P;Zn.getBarycoord(Zc,ir,sr,rr,u),i&&(h.uv=Zn.getInterpolatedAttribute(i,a,l,c,u,new st)),s&&(h.uv1=Zn.getInterpolatedAttribute(s,a,l,c,u,new st)),o&&(h.normal=Zn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};Zn.getNormal(ir,sr,rr,f.normal),h.face=f,h.barycoord=u}return h}var ue=class r extends ne{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function g(x,m,p,_,y,v,R,T,E,C,b){let M=v/E,I=R/C,O=v/2,L=R/2,H=T/2,Y=E+1,W=C+1,J=0,z=0,$=new P;for(let tt=0;tt<W;tt++){let at=tt*I-L;for(let At=0;At<Y;At++){let rt=At*M-O;$[x]=rt*_,$[m]=at*y,$[p]=H,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[p]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(At/E),u.push(1-tt/C),J+=1}}for(let tt=0;tt<C;tt++)for(let at=0;at<E;at++){let At=f+at+Y*tt,rt=f+at+Y*(tt+1),B=f+(at+1)+Y*(tt+1),q=f+(at+1)+Y*tt;l.push(At,rt,q),l.push(rt,B,q),z+=6}a.addGroup(d,z,b),d+=z,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ji(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(r){let t={};for(let e=0;e<r.length;e++){let n=ji(r[e]);for(let i in n)t[i]=n[i]}return t}function Ld(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Yh(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var ii={clone:ji,merge:Ue},Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,re=class extends On{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Nr=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new P,$c=new st,Jc=new st,Ne=class extends Nr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,$c,Jc),e.subVectors(Jc,$c)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Uo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fi=-90,Oi=1,il=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(Fi,Oi,t,e);i.layers=this.layers,this.add(i);let s=new Ne(Fi,Oi,t,e);s.layers=this.layers,this.add(s);let o=new Ne(Fi,Oi,t,e);o.layers=this.layers,this.add(o);let a=new Ne(Fi,Oi,t,e);a.layers=this.layers,this.add(a);let l=new Ne(Fi,Oi,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fr=class extends ze{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$i,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},sl=class extends Ae{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ue(5,5,5),s=new re({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Mn});s.uniforms.tEquirect.value=e;let o=new pt(i,s),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=vn),new il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},ea=new P,Nd=new P,Fd=new Nt,Dn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ea.subVectors(n,e).cross(Nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fd.getNormalMatrix(t),i=this.coplanarPoint(ea).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new ei,cr=new P,Cs=class{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,s=new Dn,o=new Dn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],m=i[11],p=i[12],_=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-d,v-p).normalize(),n[1].setComponents(l+s,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+h,m+g,v+_).normalize(),n[3].setComponents(l-o,f-h,m-g,v-_).normalize(),n[4].setComponents(l-a,f-u,m-x,v-y).normalize(),e===Un)n[5].setComponents(l+a,f+u,m+x,v+y).normalize();else if(e===Ar)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(cr.x=i.normal.x>0?t.max.x:t.min.x,cr.y=i.normal.y>0?t.max.y:t.min.y,cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Od(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ye=class r extends ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*f-o;for(let y=0;y<c;y++){let v=y*u-s;g.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let y=_+c*p,v=_+c*(p+1),R=_+1+c*(p+1),T=_+1+c*p;d.push(y,v,T),d.push(v,R,T)}this.setIndex(d),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
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
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
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
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lf=`#define PI 3.141592653589793
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
} // validated`,cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hf=`vec3 transformedNormal = objectNormal;
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
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
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
}`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ff=`PhysicalMaterial material;
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
#endif`,Of=`struct PhysicalMaterial {
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
}`,Bf=`
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
#endif`,zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zf=`#if defined( USE_POINTS_UV )
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
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
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
#endif`,lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
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
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
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
}`,Xp=`#if DEPTH_PACKING == 3200
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
}`,qp=`#define DISTANCE
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
}`,Yp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,jp=`uniform vec3 diffuse;
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
}`,tm=`#define LAMBERT
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
}`,em=`#define LAMBERT
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
}`,nm=`#define MATCAP
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
}`,im=`#define MATCAP
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
}`,sm=`#define NORMAL
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
}`,rm=`#define NORMAL
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
}`,om=`#define PHONG
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
}`,am=`#define PHONG
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
}`,lm=`#define STANDARD
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
}`,cm=`#define STANDARD
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
}`,hm=`#define TOON
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
}`,um=`#define TOON
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
}`,dm=`uniform float size;
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 color;
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
}`,gm=`uniform float rotation;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Bd,alphahash_pars_fragment:zd,alphamap_fragment:kd,alphamap_pars_fragment:Hd,alphatest_fragment:Vd,alphatest_pars_fragment:Gd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:Yd,begin_vertex:Zd,beginnormal_vertex:$d,bsdfs:Jd,iridescence_fragment:Kd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:tf,clipping_planes_pars_vertex:ef,clipping_planes_vertex:nf,color_fragment:sf,color_pars_fragment:rf,color_pars_vertex:of,color_vertex:af,common:lf,cube_uv_reflection_fragment:cf,defaultnormal_vertex:hf,displacementmap_pars_vertex:uf,displacementmap_vertex:df,emissivemap_fragment:ff,emissivemap_pars_fragment:pf,colorspace_fragment:mf,colorspace_pars_fragment:gf,envmap_fragment:xf,envmap_common_pars_fragment:_f,envmap_pars_fragment:vf,envmap_pars_vertex:yf,envmap_physical_pars_fragment:Pf,envmap_vertex:Mf,fog_vertex:bf,fog_pars_vertex:Sf,fog_fragment:wf,fog_pars_fragment:Tf,gradientmap_pars_fragment:Ef,lightmap_pars_fragment:Af,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Cf,lights_pars_begin:If,lights_toon_fragment:Lf,lights_toon_pars_fragment:Df,lights_phong_fragment:Uf,lights_phong_pars_fragment:Nf,lights_physical_fragment:Ff,lights_physical_pars_fragment:Of,lights_fragment_begin:Bf,lights_fragment_maps:zf,lights_fragment_end:kf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Wf,map_fragment:Xf,map_pars_fragment:qf,map_particle_fragment:Yf,map_particle_pars_fragment:Zf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Jf,morphinstance_vertex:Kf,morphcolor_vertex:Qf,morphnormal_vertex:jf,morphtarget_pars_vertex:tp,morphtarget_vertex:ep,normal_fragment_begin:np,normal_fragment_maps:ip,normal_pars_fragment:sp,normal_pars_vertex:rp,normal_vertex:op,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:lp,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:up,opaque_fragment:dp,packing:fp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:xp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:Mp,shadowmap_vertex:bp,shadowmask_pars_fragment:Sp,skinbase_vertex:wp,skinning_pars_vertex:Tp,skinning_vertex:Ep,skinnormal_vertex:Ap,specularmap_fragment:Rp,specularmap_pars_fragment:Cp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Pp,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:Up,uv_pars_vertex:Np,uv_vertex:Fp,worldpos_vertex:Op,background_vert:Bp,background_frag:zp,backgroundCube_vert:kp,backgroundCube_frag:Hp,cube_vert:Vp,cube_frag:Gp,depth_vert:Wp,depth_frag:Xp,distanceRGBA_vert:qp,distanceRGBA_frag:Yp,equirect_vert:Zp,equirect_frag:$p,linedashed_vert:Jp,linedashed_frag:Kp,meshbasic_vert:Qp,meshbasic_frag:jp,meshlambert_vert:tm,meshlambert_frag:em,meshmatcap_vert:nm,meshmatcap_frag:im,meshnormal_vert:sm,meshnormal_frag:rm,meshphong_vert:om,meshphong_frag:am,meshphysical_vert:lm,meshphysical_frag:cm,meshtoon_vert:hm,meshtoon_frag:um,points_vert:dm,points_frag:fm,shadow_vert:pm,shadow_frag:mm,sprite_vert:gm,sprite_frag:xm},lt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},xn={basic:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ue([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ue([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ue([lt.points,lt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ue([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ue([lt.common,lt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ue([lt.sprite,lt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ue([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ue([lt.lights,lt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};xn.physical={uniforms:Ue([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var hr={r:0,b:0,g:0},pi=new bn,_m=new ee;function vm(r,t,e,n,i,s,o){let a=new _t(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1,v=g(_);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);let R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===so)?(h===void 0&&(h=new pt(new ue(1,1,1),new re({name:"BackgroundCubeMaterial",uniforms:ji(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),pi.copy(y.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(pi)),h.material.toneMapped=Ht.getTransfer(v.colorSpace)!==Kt,(u!==v||f!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pt(new ye(2,2),new re({name:"BackgroundMaterial",uniforms:ji(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(v.colorSpace)!==Kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(hr,Yh(r)),n.buffers.color.setClear(hr.r,hr.g,hr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m}}function ym(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(M,I,O,L,H){let Y=!1,W=u(L,O,I);s!==W&&(s=W,c(s.object)),Y=d(M,L,O,H),Y&&g(M,L,O,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(M,I,O,L),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,I,O){let L=O.wireframe===!0,H=n[M.id];H===void 0&&(H={},n[M.id]=H);let Y=H[I.id];Y===void 0&&(Y={},H[I.id]=Y);let W=Y[L];return W===void 0&&(W=f(l()),Y[L]=W),W}function f(M){let I=[],O=[],L=[];for(let H=0;H<e;H++)I[H]=0,O[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:L,object:M,attributes:{},index:null}}function d(M,I,O,L){let H=s.attributes,Y=I.attributes,W=0,J=O.getAttributes();for(let z in J)if(J[z].location>=0){let tt=H[z],at=Y[z];if(at===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),tt===void 0||tt.attribute!==at||at&&tt.data!==at.data)return!0;W++}return s.attributesNum!==W||s.index!==L}function g(M,I,O,L){let H={},Y=I.attributes,W=0,J=O.getAttributes();for(let z in J)if(J[z].location>=0){let tt=Y[z];tt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor));let at={};at.attribute=tt,tt&&tt.data&&(at.data=tt.data),H[z]=at,W++}s.attributes=H,s.attributesNum=W,s.index=L}function x(){let M=s.newAttributes;for(let I=0,O=M.length;I<O;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let O=s.newAttributes,L=s.enabledAttributes,H=s.attributeDivisors;O[M]=1,L[M]===0&&(r.enableVertexAttribArray(M),L[M]=1),H[M]!==I&&(r.vertexAttribDivisor(M,I),H[M]=I)}function _(){let M=s.newAttributes,I=s.enabledAttributes;for(let O=0,L=I.length;O<L;O++)I[O]!==M[O]&&(r.disableVertexAttribArray(O),I[O]=0)}function y(M,I,O,L,H,Y,W){W===!0?r.vertexAttribIPointer(M,I,O,H,Y):r.vertexAttribPointer(M,I,O,L,H,Y)}function v(M,I,O,L){x();let H=L.attributes,Y=O.getAttributes(),W=I.defaultAttributeValues;for(let J in Y){let z=Y[J];if(z.location>=0){let $=H[J];if($===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){let tt=$.normalized,at=$.itemSize,At=t.get($);if(At===void 0)continue;let rt=At.buffer,B=At.type,q=At.bytesPerElement,et=B===r.INT||B===r.UNSIGNED_INT||$.gpuType===Xl;if($.isInterleavedBufferAttribute){let ot=$.data,St=ot.stride,vt=$.offset;if(ot.isInstancedInterleavedBuffer){for(let zt=0;zt<z.locationSize;zt++)p(z.location+zt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let zt=0;zt<z.locationSize;zt++)m(z.location+zt);r.bindBuffer(r.ARRAY_BUFFER,rt);for(let zt=0;zt<z.locationSize;zt++)y(z.location+zt,at/z.locationSize,B,tt,St*q,(vt+at/z.locationSize*zt)*q,et)}else{if($.isInstancedBufferAttribute){for(let ot=0;ot<z.locationSize;ot++)p(z.location+ot,$.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ot=0;ot<z.locationSize;ot++)m(z.location+ot);r.bindBuffer(r.ARRAY_BUFFER,rt);for(let ot=0;ot<z.locationSize;ot++)y(z.location+ot,at/z.locationSize,B,tt,at*q,at/z.locationSize*ot*q,et)}}else if(W!==void 0){let tt=W[J];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(z.location,tt);break;case 3:r.vertexAttrib3fv(z.location,tt);break;case 4:r.vertexAttrib4fv(z.location,tt);break;default:r.vertexAttrib1fv(z.location,tt)}}}}_()}function R(){C();for(let M in n){let I=n[M];for(let O in I){let L=I[O];for(let H in L)h(L[H].object),delete L[H];delete I[O]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let O in I){let L=I[O];for(let H in L)h(L[H].object),delete L[H];delete I[O]}delete n[M.id]}function E(M){for(let I in n){let O=n[I];if(O[M.id]===void 0)continue;let L=O[M.id];for(let H in L)h(L[H].object),delete L[H];delete O[M.id]}}function C(){b(),o=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Mm(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bm(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==cn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let C=E===Ye&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Fn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==yn&&!C)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function Sm(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Dn,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let _=s?0:n,y=_*4,v=p.clippingState||null;l.value=v,v=h(g,f,y,d);for(let R=0;R!==y;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function wm(r){let t=new WeakMap;function e(o,a){return a===ba?o.mapping=$i:a===Sa&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ba||a===Sa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new sl(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var ts=class extends Nr{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Wi=4,Kc=[.125,.215,.35,.446,.526,.582],_i=20,na=new ts,Qc=new _t,ia=null,sa=0,ra=0,oa=!1,gi=(1+Math.sqrt(5))/2,Bi=1/gi,jc=[new P(-gi,Bi,0),new P(gi,Bi,0),new P(-Bi,0,gi),new P(Bi,0,gi),new P(0,gi,-Bi),new P(0,gi,Bi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=oa,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ye,format:cn,colorSpace:os,depthBuffer:!1},i=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tm(s)),this._blurMaterial=Em(s,t,e)}return i}_compileMaterial(t){let e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,n,i){let a=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Qc),h.toneMapping=Jn,h.autoClear=!1;let d=new te({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new pt(new ue,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Qc),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;ur(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===$i||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,na)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jc[(i-s-1)%jc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*_i-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):_i;m>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);let p=[],_=0;for(let E=0;E<_i;++E){let C=E/x,b=Math.exp(-C*C/2);p.push(b),E===0?_+=b:E<m&&(_+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let v=this._sizeLods[i],R=3*v*(i>y-Wi?i-y+Wi:0),T=4*(this._cubeSize-v);ur(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(u,na)}};function Tm(r){let t=[],e=[],n=[],i=r,s=r-Wi+1+Kc.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Wi?l=Kc[o-r+Wi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){let E=T%3*2/3-1,C=T>2?0:-1,b=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];_.set(b,x*g*T),y.set(f,m*g*T);let M=[T,T,T,T,T,T];v.set(M,p*g*T)}let R=new ne;R.setAttribute("position",new xe(_,x)),R.setAttribute("uv",new xe(y,m)),R.setAttribute("faceIndex",new xe(v,p)),t.push(R),i>Wi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function th(r,t,e){let n=new Ae(r,t,e);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Em(r,t,e){let n=new Float32Array(_i),i=new P(0,1,0);return new re({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function eh(){return new re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function nh(){return new re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}function Am(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ba||l===Sa,h=l===$i||l===Ji;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Or(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Or(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rm(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cm(r,t,e,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],r.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let y=0,v=_.length;y<v;y+=3){let R=_[y+0],T=_[y+1],E=_[y+2];f.push(R,T,T,E,E,R)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let R=y+0,T=y+1,E=y+2;f.push(R,T,T,E,E,R)}}else return;let m=new(Xh(f)?Ur:Dr)(f,1);m.version=x;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Im(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*x[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pm(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Lm(r,t,e){let n=new WeakMap,i=new fe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*R*4*u),E=new Ir(T,v,R,u);E.type=yn,E.needsUpdate=!0;let C=y*4;for(let M=0;M<u;M++){let I=m[M],O=p[M],L=_[M],H=v*R*4*M;for(let Y=0;Y<I.count;Y++){let W=Y*C;d===!0&&(i.fromBufferAttribute(I,Y),T[H+W+0]=i.x,T[H+W+1]=i.y,T[H+W+2]=i.z,T[H+W+3]=0),g===!0&&(i.fromBufferAttribute(O,Y),T[H+W+4]=i.x,T[H+W+5]=i.y,T[H+W+6]=i.z,T[H+W+7]=0),x===!0&&(i.fromBufferAttribute(L,Y),T[H+W+8]=i.x,T[H+W+9]=i.y,T[H+W+10]=i.z,T[H+W+11]=L.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new st(v,R)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Dm(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Br=class extends ze{constructor(t,e,n,i,s,o,a,l,c,h=Xi){if(h!==Xi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=Mi),n===void 0&&h===Qi&&(n=Ki),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$h=new ze,ih=new Br(1,1),Jh=new Ir,Kh=new nl,Qh=new Fr,sh=[],rh=[],oh=new Float32Array(16),ah=new Float32Array(9),lh=new Float32Array(4);function as(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=sh[i];if(s===void 0&&(s=new Float32Array(i),sh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function be(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function oo(r,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Um(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Nm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2fv(this.addr,t),be(e,t)}}function Fm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;r.uniform3fv(this.addr,t),be(e,t)}}function Om(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4fv(this.addr,t),be(e,t)}}function Bm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;lh.set(n),r.uniformMatrix2fv(this.addr,!1,lh),be(e,n)}}function zm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;ah.set(n),r.uniformMatrix3fv(this.addr,!1,ah),be(e,n)}}function km(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;oh.set(n),r.uniformMatrix4fv(this.addr,!1,oh),be(e,n)}}function Hm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Vm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2iv(this.addr,t),be(e,t)}}function Gm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3iv(this.addr,t),be(e,t)}}function Wm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4iv(this.addr,t),be(e,t)}}function Xm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2uiv(this.addr,t),be(e,t)}}function Ym(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3uiv(this.addr,t),be(e,t)}}function Zm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4uiv(this.addr,t),be(e,t)}}function $m(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ih.compareFunction=Wh,s=ih):s=$h,e.setTexture2D(t||s,i)}function Jm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kh,i)}function Km(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qh,i)}function Qm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jh,i)}function jm(r){switch(r){case 5126:return Um;case 35664:return Nm;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return zm;case 35676:return km;case 5124:case 35670:return Hm;case 35667:case 35671:return Vm;case 35668:case 35672:return Gm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Qm}}function t0(r,t){r.uniform1fv(this.addr,t)}function e0(r,t){let e=as(t,this.size,2);r.uniform2fv(this.addr,e)}function n0(r,t){let e=as(t,this.size,3);r.uniform3fv(this.addr,e)}function i0(r,t){let e=as(t,this.size,4);r.uniform4fv(this.addr,e)}function s0(r,t){let e=as(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function r0(r,t){let e=as(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function o0(r,t){let e=as(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function a0(r,t){r.uniform1iv(this.addr,t)}function l0(r,t){r.uniform2iv(this.addr,t)}function c0(r,t){r.uniform3iv(this.addr,t)}function h0(r,t){r.uniform4iv(this.addr,t)}function u0(r,t){r.uniform1uiv(this.addr,t)}function d0(r,t){r.uniform2uiv(this.addr,t)}function f0(r,t){r.uniform3uiv(this.addr,t)}function p0(r,t){r.uniform4uiv(this.addr,t)}function m0(r,t,e){let n=this.cache,i=t.length,s=oo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||$h,s[o])}function g0(r,t,e){let n=this.cache,i=t.length,s=oo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Kh,s[o])}function x0(r,t,e){let n=this.cache,i=t.length,s=oo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Qh,s[o])}function _0(r,t,e){let n=this.cache,i=t.length,s=oo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jh,s[o])}function v0(r){switch(r){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return _0}}var rl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jm(e.type)}},ol=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v0(e.type)}},al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},aa=/(\w+)(\])?(\[|\.)?/g;function ch(r,t){r.seq.push(t),r.map[t.id]=t}function y0(r,t,e){let n=r.name,i=n.length;for(aa.lastIndex=0;;){let s=aa.exec(n),o=aa.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ch(e,c===void 0?new rl(a,r,t):new ol(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new al(a),ch(e,u)),e=u}}}var Yi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);y0(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function hh(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var M0=37297,b0=0;function S0(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var uh=new Nt;function w0(r){Ht._getMatrix(uh,Ht.workingColorSpace,r);let t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(r)){case ro:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function dh(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+S0(r.getShaderSource(t),o)}else return i}function T0(r,t){let e=w0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function E0(r,t){let e;switch(t){case kl:e="Linear";break;case Hl:e="Reinhard";break;case Vl:e="Cineon";break;case Fs:e="ACESFilmic";break;case Gl:e="AgX";break;case Wl:e="Neutral";break;case id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dr=new P;function A0(){Ht.getLuminanceCoefficients(dr);let r=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function C0(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I0(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ss(r){return r!==""}function fh(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(r){return r.replace(P0,D0)}var L0=new Map;function D0(r,t){let e=Ot[t];if(e===void 0){let n=L0.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ll(e)}var U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(r){return r.replace(U0,N0)}function N0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===io?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===zl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function O0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $i:case Ji:t="ENVMAP_TYPE_CUBE";break;case so:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function z0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Lh:t="ENVMAP_BLENDING_MULTIPLY";break;case ed:t="ENVMAP_BLENDING_MIX";break;case nd:t="ENVMAP_BLENDING_ADD";break}return t}function k0(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function H0(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=F0(e),c=O0(e),h=B0(e),u=z0(e),f=k0(e),d=R0(e),g=C0(s),x=i.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Jn?E0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,T0("linearToOutputTexel",e.outputColorSpace),A0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),o=ll(o),o=fh(o,e),o=ph(o,e),a=ll(a),a=fh(a,e),a=ph(a,e),o=mh(o),a=mh(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+m+o,v=_+p+a,R=hh(i,i.VERTEX_SHADER,y),T=hh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,R),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(I){if(r.debug.checkShaderErrors){let O=i.getProgramInfoLog(x).trim(),L=i.getShaderInfoLog(R).trim(),H=i.getShaderInfoLog(T).trim(),Y=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,R,T);else{let J=dh(i,R,"vertex"),z=dh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+J+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||H==="")&&(W=!1);W&&(I.diagnostics={runnable:Y,programLog:O,vertexShader:{log:L,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(R),i.deleteShader(T),C=new Yi(i,x),b=I0(i,x)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,M0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=b0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var V0=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hl(t),e.set(t,n)),n}},hl=class{constructor(t){this.id=V0++,this.code=t,this.usedTimes=0}};function G0(r,t,e,n,i,s,o){let a=new Lr,l=new cl,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,O,L){let H=O.fog,Y=L.geometry,W=b.isMeshStandardMaterial?O.environment:null,J=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),z=J&&J.mapping===so?J.image.height:null,$=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=tt!==void 0?tt.length:0,At=0;Y.morphAttributes.position!==void 0&&(At=1),Y.morphAttributes.normal!==void 0&&(At=2),Y.morphAttributes.color!==void 0&&(At=3);let rt,B,q,et;if($){let Qt=xn[$];rt=Qt.vertexShader,B=Qt.fragmentShader}else rt=b.vertexShader,B=b.fragmentShader,l.update(b),q=l.getVertexShaderID(b),et=l.getFragmentShaderID(b);let ot=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),vt=L.isInstancedMesh===!0,zt=L.isBatchedMesh===!0,he=!!b.map,Xt=!!b.matcap,me=!!J,F=!!b.aoMap,Ke=!!b.lightMap,Vt=!!b.bumpMap,Gt=!!b.normalMap,Rt=!!b.displacementMap,oe=!!b.emissiveMap,Et=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,k=b.clearcoat>0,K=b.dispersion>0,j=b.iridescence>0,Z=b.sheen>0,wt=b.transmission>0,ht=S&&!!b.anisotropyMap,mt=k&&!!b.clearcoatMap,qt=k&&!!b.clearcoatNormalMap,nt=k&&!!b.clearcoatRoughnessMap,gt=j&&!!b.iridescenceMap,Ct=j&&!!b.iridescenceThicknessMap,It=Z&&!!b.sheenColorMap,xt=Z&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,Ft=!!b.specularColorMap,ie=!!b.specularIntensityMap,D=wt&&!!b.transmissionMap,ct=wt&&!!b.thicknessMap,X=!!b.gradientMap,Q=!!b.alphaMap,ft=b.alphaTest>0,ut=!!b.alphaHash,Dt=!!b.extensions,de=Jn;b.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(de=r.toneMapping);let Ce={shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:rt,fragmentShader:B,defines:b.defines,customVertexShaderID:q,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:zt,batchingColor:zt&&L._colorsTexture!==null,instancing:vt,instancingColor:vt&&L.instanceColor!==null,instancingMorph:vt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:os,alphaToCoverage:!!b.alphaToCoverage,map:he,matcap:Xt,envMap:me,envMapMode:me&&J.mapping,envMapCubeUVHeight:z,aoMap:F,lightMap:Ke,bumpMap:Vt,normalMap:Gt,displacementMap:f&&Rt,emissiveMap:oe,normalMapObjectSpace:Gt&&b.normalMapType===ad,normalMapTangentSpace:Gt&&b.normalMapType===Gh,metalnessMap:Et,roughnessMap:A,anisotropy:S,anisotropyMap:ht,clearcoat:k,clearcoatMap:mt,clearcoatNormalMap:qt,clearcoatRoughnessMap:nt,dispersion:K,iridescence:j,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:Z,sheenColorMap:It,sheenRoughnessMap:xt,specularMap:Wt,specularColorMap:Ft,specularIntensityMap:ie,transmission:wt,transmissionMap:D,thicknessMap:ct,gradientMap:X,opaque:b.transparent===!1&&b.blending===$n&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:ft,alphaHash:ut,combine:b.combine,mapUv:he&&x(b.map.channel),aoMapUv:F&&x(b.aoMap.channel),lightMapUv:Ke&&x(b.lightMap.channel),bumpMapUv:Vt&&x(b.bumpMap.channel),normalMapUv:Gt&&x(b.normalMap.channel),displacementMapUv:Rt&&x(b.displacementMap.channel),emissiveMapUv:oe&&x(b.emissiveMap.channel),metalnessMapUv:Et&&x(b.metalnessMap.channel),roughnessMapUv:A&&x(b.roughnessMap.channel),anisotropyMapUv:ht&&x(b.anisotropyMap.channel),clearcoatMapUv:mt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:qt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:xt&&x(b.sheenRoughnessMap.channel),specularMapUv:Wt&&x(b.specularMap.channel),specularColorMapUv:Ft&&x(b.specularColorMap.channel),specularIntensityMapUv:ie&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:ct&&x(b.thicknessMap.channel),alphaMapUv:Q&&x(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Gt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!Y.attributes.uv&&(he||Q),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:L.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:At,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:de,decodeVideoTexture:he&&b.map.isVideoTexture===!0&&Ht.getTransfer(b.map.colorSpace)===Kt,decodeVideoTextureEmissive:oe&&b.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(b.emissiveMap.colorSpace)===Kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Be,flipSided:b.side===Le,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Dt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&b.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(_(M,b),y(M,b),M.push(r.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=g[b.type],I;if(M){let O=xn[M];I=ii.clone(O.uniforms)}else I=b.uniforms;return I}function R(b,M){let I;for(let O=0,L=h.length;O<L;O++){let H=h[O];if(H.cacheKey===M){I=H,++I.usedTimes;break}}return I===void 0&&(I=new H0(r,M,b,s),h.push(I)),I}function T(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:C}}function W0(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function X0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function xh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function _h(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,x,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||X0),n.length>1&&n.sort(f||xh),i.length>1&&i.sort(f||xh)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function q0(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new _h,r.set(n,[o])):i>=s.length?(o=new _h,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Y0(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new _t};break;case"SpotLight":e={position:new P,direction:new P,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function Z0(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var $0=0;function J0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function K0(r){let t=new Y0,e=Z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,s=new ee,o=new ee;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,y=0,v=0,R=0,T=0,E=0;c.sort(J0);for(let b=0,M=c.length;b<M;b++){let I=c[b],O=I.color,L=I.intensity,H=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*L,u+=O.g*L,f+=O.b*L;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],L);E++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,z=e.get(I);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=I.shadow.matrix,_++}n.directional[d]=W,d++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(O).multiplyScalar(L),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[x]=W;let J=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,J.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[x]=J.matrix,I.castShadow){let z=e.get(I);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=Y,v++}x++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(O).multiplyScalar(L),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let J=I.shadow,z=e.get(I);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(L),W.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=E,n.version=$0++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let y=c[p];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function vh(r){let t=new K0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Q0(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new vh(r),t.set(i,[a])):s>=o.length?(a=new vh(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ul=class extends On{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dl=class extends On{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
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
}`;function eg(r,t,e){let n=new Cs,i=new st,s=new st,o=new fe,a=new ul({depthPacking:od}),l=new dl,c={},h=e.maxTextureSize,u={[Qn]:Le,[Le]:Qn,[Be]:Be},f=new re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:j0,fragmentShader:tg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ne;g.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let p=this.type;this.render=function(T,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=r.getRenderTarget(),M=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Mn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let L=p!==Ln&&this.type===Ln,H=p===Ln&&this.type!==Ln;for(let Y=0,W=T.length;Y<W;Y++){let J=T[Y],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let $=z.getFrameExtents();if(i.multiply($),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null||L===!0||H===!0){let at=this.type!==Ln?{minFilter:Xe,magFilter:Xe}:{};z.map!==null&&z.map.dispose(),z.map=new Ae(i.x,i.y,at),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();let tt=z.getViewportCount();for(let at=0;at<tt;at++){let At=z.getViewport(at);o.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),O.viewport(o),z.updateMatrices(J,at),n=z.getFrustum(),v(E,C,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===Ln&&_(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(b,M,I)};function _(T,E){let C=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ae(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,C,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,C,d,x,null)}function y(T,E,C,b){let M=null,I=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=M.uuid,L=E.uuid,H=c[O];H===void 0&&(H={},c[O]=H);let Y=H[L];Y===void 0&&(Y=M.clone(),H[L]=Y,E.addEventListener("dispose",R)),M=Y}if(M.visible=E.visible,M.wireframe=E.wireframe,b===Ln?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=r.properties.get(M);O.light=C}return M}function v(T,E,C,b,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ln)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let L=t.update(T),H=T.material;if(Array.isArray(H)){let Y=L.groups;for(let W=0,J=Y.length;W<J;W++){let z=Y[W],$=H[z.materialIndex];if($&&$.visible){let tt=y(T,$,b,M);T.onBeforeShadow(r,T,E,C,L,tt,z),r.renderBufferDirect(C,null,L,tt,T,z),T.onAfterShadow(r,T,E,C,L,tt,z)}}}else if(H.visible){let Y=y(T,H,b,M);T.onBeforeShadow(r,T,E,C,L,Y,null),r.renderBufferDirect(C,null,L,Y,T,null),T.onAfterShadow(r,T,E,C,L,Y,null)}}let O=T.children;for(let L=0,H=O.length;L<H;L++)v(O[L],E,C,b,M)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let b=c[C],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var ng={[ma]:ga,[xa]:ya,[_a]:Ma,[Zi]:va,[ga]:ma,[ya]:xa,[Ma]:_a,[va]:Zi};function ig(r,t){function e(){let D=!1,ct=new fe,X=null,Q=new fe(0,0,0,0);return{setMask:function(ft){X!==ft&&!D&&(r.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ut,Dt,de,Ce){Ce===!0&&(ft*=de,ut*=de,Dt*=de),ct.set(ft,ut,Dt,de),Q.equals(ct)===!1&&(r.clearColor(ft,ut,Dt,de),Q.copy(ct))},reset:function(){D=!1,X=null,Q.set(-1,0,0,0)}}}function n(){let D=!1,ct=!1,X=null,Q=null,ft=null;return{setReversed:function(ut){if(ct!==ut){let Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let de=ft;ft=null,this.setClear(de)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?ot(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(ut){X!==ut&&!D&&(r.depthMask(ut),X=ut)},setFunc:function(ut){if(ct&&(ut=ng[ut]),Q!==ut){switch(ut){case ma:r.depthFunc(r.NEVER);break;case ga:r.depthFunc(r.ALWAYS);break;case xa:r.depthFunc(r.LESS);break;case Zi:r.depthFunc(r.LEQUAL);break;case _a:r.depthFunc(r.EQUAL);break;case va:r.depthFunc(r.GEQUAL);break;case ya:r.depthFunc(r.GREATER);break;case Ma:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ft!==ut&&(ct&&(ut=1-ut),r.clearDepth(ut),ft=ut)},reset:function(){D=!1,X=null,Q=null,ft=null,ct=!1}}}function i(){let D=!1,ct=null,X=null,Q=null,ft=null,ut=null,Dt=null,de=null,Ce=null;return{setTest:function(Qt){D||(Qt?ot(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!D&&(r.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,sn,Tn){(X!==Qt||Q!==sn||ft!==Tn)&&(r.stencilFunc(Qt,sn,Tn),X=Qt,Q=sn,ft=Tn)},setOp:function(Qt,sn,Tn){(ut!==Qt||Dt!==sn||de!==Tn)&&(r.stencilOp(Qt,sn,Tn),ut=Qt,Dt=sn,de=Tn)},setLocked:function(Qt){D=Qt},setClear:function(Qt){Ce!==Qt&&(r.clearStencil(Qt),Ce=Qt)},reset:function(){D=!1,ct=null,X=null,Q=null,ft=null,ut=null,Dt=null,de=null,Ce=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,R=null,T=null,E=new _t(0,0,0),C=0,b=!1,M=null,I=null,O=null,L=null,H=null,Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,J=0,z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=J>=2);let $=null,tt={},at=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),rt=new fe().fromArray(at),B=new fe().fromArray(At);function q(D,ct,X,Q){let ft=new Uint8Array(4),ut=r.createTexture();r.bindTexture(D,ut),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<X;Dt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(ct+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return ut}let et={};et[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(r.DEPTH_TEST),o.setFunc(Zi),Vt(!1),Gt(Sc),ot(r.CULL_FACE),F(Mn);function ot(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function St(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function vt(D,ct){return u[D]!==ct?(r.bindFramebuffer(D,ct),u[D]=ct,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ct),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function zt(D,ct){let X=d,Q=!1;if(D){X=f.get(ct),X===void 0&&(X=[],f.set(ct,X));let ft=D.textures;if(X.length!==ft.length||X[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Dt=ft.length;ut<Dt;ut++)X[ut]=r.COLOR_ATTACHMENT0+ut;X.length=ft.length,Q=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Q=!0);Q&&r.drawBuffers(X)}function he(D){return g!==D?(r.useProgram(D),g=D,!0):!1}let Xt={[xi]:r.FUNC_ADD,[Bu]:r.FUNC_SUBTRACT,[zu]:r.FUNC_REVERSE_SUBTRACT};Xt[ku]=r.MIN,Xt[Hu]=r.MAX;let me={[Vu]:r.ZERO,[Gu]:r.ONE,[Wu]:r.SRC_COLOR,[fa]:r.SRC_ALPHA,[Ju]:r.SRC_ALPHA_SATURATE,[Zu]:r.DST_COLOR,[qu]:r.DST_ALPHA,[Xu]:r.ONE_MINUS_SRC_COLOR,[pa]:r.ONE_MINUS_SRC_ALPHA,[$u]:r.ONE_MINUS_DST_COLOR,[Yu]:r.ONE_MINUS_DST_ALPHA,[Ku]:r.CONSTANT_COLOR,[Qu]:r.ONE_MINUS_CONSTANT_COLOR,[ju]:r.CONSTANT_ALPHA,[td]:r.ONE_MINUS_CONSTANT_ALPHA};function F(D,ct,X,Q,ft,ut,Dt,de,Ce,Qt){if(D===Mn){x===!0&&(St(r.BLEND),x=!1);return}if(x===!1&&(ot(r.BLEND),x=!0),D!==Ou){if(D!==m||Qt!==b){if((p!==xi||v!==xi)&&(r.blendEquation(r.FUNC_ADD),p=xi,v=xi),Qt)switch(D){case $n:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qe:r.blendFunc(r.ONE,r.ONE);break;case wc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $n:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qe:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,y=null,R=null,T=null,E.set(0,0,0),C=0,m=D,b=Qt}return}ft=ft||ct,ut=ut||X,Dt=Dt||Q,(ct!==p||ft!==v)&&(r.blendEquationSeparate(Xt[ct],Xt[ft]),p=ct,v=ft),(X!==_||Q!==y||ut!==R||Dt!==T)&&(r.blendFuncSeparate(me[X],me[Q],me[ut],me[Dt]),_=X,y=Q,R=ut,T=Dt),(de.equals(E)===!1||Ce!==C)&&(r.blendColor(de.r,de.g,de.b,Ce),E.copy(de),C=Ce),m=D,b=!1}function Ke(D,ct){D.side===Be?St(r.CULL_FACE):ot(r.CULL_FACE);let X=D.side===Le;ct&&(X=!X),Vt(X),D.blending===$n&&D.transparent===!1?F(Mn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){M!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),M=D)}function Gt(D){D!==Nu?(ot(r.CULL_FACE),D!==I&&(D===Sc?r.cullFace(r.BACK):D===Fu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),I=D}function Rt(D){D!==O&&(W&&r.lineWidth(D),O=D)}function oe(D,ct,X){D?(ot(r.POLYGON_OFFSET_FILL),(L!==ct||H!==X)&&(r.polygonOffset(ct,X),L=ct,H=X)):St(r.POLYGON_OFFSET_FILL)}function Et(D){D?ot(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function A(D){D===void 0&&(D=r.TEXTURE0+Y-1),$!==D&&(r.activeTexture(D),$=D)}function S(D,ct,X){X===void 0&&($===null?X=r.TEXTURE0+Y-1:X=$);let Q=tt[X];Q===void 0&&(Q={type:void 0,texture:void 0},tt[X]=Q),(Q.type!==D||Q.texture!==ct)&&($!==X&&(r.activeTexture(X),$=X),r.bindTexture(D,ct||et[D]),Q.type=D,Q.texture=ct)}function k(){let D=tt[$];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(D){rt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),rt.copy(D))}function xt(D){B.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),B.copy(D))}function Wt(D,ct){let X=c.get(ct);X===void 0&&(X=new WeakMap,c.set(ct,X));let Q=X.get(D);Q===void 0&&(Q=r.getUniformBlockIndex(ct,D.name),X.set(D,Q))}function Ft(D,ct){let Q=c.get(ct).get(D);l.get(ct)!==Q&&(r.uniformBlockBinding(ct,Q,D.__bindingPointIndex),l.set(ct,Q))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},$=null,tt={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,R=null,T=null,E=new _t(0,0,0),C=0,b=!1,M=null,I=null,O=null,L=null,H=null,rt.set(0,0,r.canvas.width,r.canvas.height),B.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:St,bindFramebuffer:vt,drawBuffers:zt,useProgram:he,setBlending:F,setMaterial:Ke,setFlipSided:Vt,setCullFace:Gt,setLineWidth:Rt,setPolygonOffset:oe,setScissorTest:Et,activeTexture:A,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:Ft,texStorage2D:qt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:It,viewport:xt,reset:ie}}function yh(r,t,e,n){let i=sg(n);switch(e){case Oh:return r*t;case zh:return r*t;case kh:return r*t*2;case Zl:return r*t/i.components*i.byteLength;case $l:return r*t/i.components*i.byteLength;case Hh:return r*t*2/i.components*i.byteLength;case Jl:return r*t*2/i.components*i.byteLength;case Bh:return r*t*3/i.components*i.byteLength;case cn:return r*t*4/i.components*i.byteLength;case Kl:return r*t*4/i.components*i.byteLength;case Mr:case br:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Sr:case wr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Ra:return Math.max(r,16)*Math.max(t,8)/4;case Ta:case Aa:return Math.max(r,8)*Math.max(t,8)/2;case Ca:case Ia:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Tr:case qa:case Ya:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Vh:case Za:return Math.ceil(r/4)*Math.ceil(t/4)*8;case $a:case Ja:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sg(r){switch(r){case Fn:case Uh:return{byteLength:1,components:1};case Rs:case Nh:case Ye:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case Mi:case Xl:case yn:return{byteLength:4,components:1};case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function rg(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Rr("canvas")}function x(A,S,k){let K=1,j=Et(A);if((j.width>k||j.height>k)&&(K=k/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let Z=Math.floor(K*j.width),wt=Math.floor(K*j.height);u===void 0&&(u=g(Z,wt));let ht=S?g(Z,wt):u;return ht.width=Z,ht.height=wt,ht.getContext("2d").drawImage(A,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+wt+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(A,S,k,K,j=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===r.RED&&(k===r.FLOAT&&(Z=r.R32F),k===r.HALF_FLOAT&&(Z=r.R16F),k===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.R8UI),k===r.UNSIGNED_SHORT&&(Z=r.R16UI),k===r.UNSIGNED_INT&&(Z=r.R32UI),k===r.BYTE&&(Z=r.R8I),k===r.SHORT&&(Z=r.R16I),k===r.INT&&(Z=r.R32I)),S===r.RG&&(k===r.FLOAT&&(Z=r.RG32F),k===r.HALF_FLOAT&&(Z=r.RG16F),k===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RG8UI),k===r.UNSIGNED_SHORT&&(Z=r.RG16UI),k===r.UNSIGNED_INT&&(Z=r.RG32UI),k===r.BYTE&&(Z=r.RG8I),k===r.SHORT&&(Z=r.RG16I),k===r.INT&&(Z=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),k===r.UNSIGNED_INT&&(Z=r.RGB32UI),k===r.BYTE&&(Z=r.RGB8I),k===r.SHORT&&(Z=r.RGB16I),k===r.INT&&(Z=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),k===r.UNSIGNED_INT&&(Z=r.RGBA32UI),k===r.BYTE&&(Z=r.RGBA8I),k===r.SHORT&&(Z=r.RGBA16I),k===r.INT&&(Z=r.RGBA32I)),S===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),S===r.RGBA){let wt=j?ro:Ht.getTransfer(K);k===r.FLOAT&&(Z=r.RGBA32F),k===r.HALF_FLOAT&&(Z=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Z=wt===Kt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(A,S){let k;return A?S===null||S===Mi||S===Ki?k=r.DEPTH24_STENCIL8:S===yn?k=r.DEPTH32F_STENCIL8:S===Rs&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Mi||S===Ki?k=r.DEPTH_COMPONENT24:S===yn?k=r.DEPTH_COMPONENT32F:S===Rs&&(k=r.DEPTH_COMPONENT16),k}function R(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xe&&A.minFilter!==vn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){let S=A.target;S.removeEventListener("dispose",T),C(S),S.isVideoTexture&&h.delete(S)}function E(A){let S=A.target;S.removeEventListener("dispose",E),M(S)}function C(A){let S=n.get(A);if(S.__webglInit===void 0)return;let k=A.source,K=f.get(k);if(K){let j=K[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(A),Object.keys(K).length===0&&f.delete(k)}n.remove(A)}function b(A){let S=n.get(A);r.deleteTexture(S.__webglTexture);let k=A.source,K=f.get(k);delete K[S.__cacheKey],o.memory.textures--}function M(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let j=0;j<S.__webglFramebuffer[K].length;j++)r.deleteFramebuffer(S.__webglFramebuffer[K][j]);else r.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)r.deleteFramebuffer(S.__webglFramebuffer[K]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=A.textures;for(let K=0,j=k.length;K<j;K++){let Z=n.get(k[K]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[K])}n.remove(A)}let I=0;function O(){I=0}function L(){let A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function H(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Y(A,S){let k=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(k,A,S);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function W(A,S){let k=n.get(A);if(A.version>0&&k.__version!==A.version){B(k,A,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function J(A,S){let k=n.get(A);if(A.version>0&&k.__version!==A.version){B(k,A,S);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function z(A,S){let k=n.get(A);if(A.version>0&&k.__version!==A.version){q(k,A,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}let $={[As]:r.REPEAT,[vi]:r.CLAMP_TO_EDGE,[wa]:r.MIRRORED_REPEAT},tt={[Xe]:r.NEAREST,[sd]:r.NEAREST_MIPMAP_NEAREST,[qs]:r.NEAREST_MIPMAP_LINEAR,[vn]:r.LINEAR,[Lo]:r.LINEAR_MIPMAP_NEAREST,[yi]:r.LINEAR_MIPMAP_LINEAR},at={[ld]:r.NEVER,[pd]:r.ALWAYS,[cd]:r.LESS,[Wh]:r.LEQUAL,[hd]:r.EQUAL,[fd]:r.GEQUAL,[ud]:r.GREATER,[dd]:r.NOTEQUAL};function At(A,S){if(S.type===yn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===vn||S.magFilter===Lo||S.magFilter===qs||S.magFilter===yi||S.minFilter===vn||S.minFilter===Lo||S.minFilter===qs||S.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,$[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,$[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,$[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,tt[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xe||S.minFilter!==qs&&S.minFilter!==yi||S.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function rt(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));let K=S.source,j=f.get(K);j===void 0&&(j={},f.set(K,j));let Z=H(S);if(Z!==A.__cacheKey){j[Z]===void 0&&(j[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[Z].usedTimes++;let wt=j[A.__cacheKey];wt!==void 0&&(j[A.__cacheKey].usedTimes--,wt.usedTimes===0&&b(S)),A.__cacheKey=Z,A.__webglTexture=j[Z].texture}return k}function B(A,S,k){let K=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=r.TEXTURE_3D);let j=rt(A,S),Z=S.source;e.bindTexture(K,A.__webglTexture,r.TEXTURE0+k);let wt=n.get(Z);if(Z.version!==wt.__version||j===!0){e.activeTexture(r.TEXTURE0+k);let ht=Ht.getPrimaries(Ht.workingColorSpace),mt=S.colorSpace===Yn?null:Ht.getPrimaries(S.colorSpace),qt=S.colorSpace===Yn||ht===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let nt=x(S.image,!1,i.maxTextureSize);nt=oe(S,nt);let gt=s.convert(S.format,S.colorSpace),Ct=s.convert(S.type),It=y(S.internalFormat,gt,Ct,S.colorSpace,S.isVideoTexture);At(K,S);let xt,Wt=S.mipmaps,Ft=S.isVideoTexture!==!0,ie=wt.__version===void 0||j===!0,D=Z.dataReady,ct=R(S,nt);if(S.isDepthTexture)It=v(S.format===Qi,S.type),ie&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,It,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,It,nt.width,nt.height,0,gt,Ct,null));else if(S.isDataTexture)if(Wt.length>0){Ft&&ie&&e.texStorage2D(r.TEXTURE_2D,ct,It,Wt[0].width,Wt[0].height);for(let X=0,Q=Wt.length;X<Q;X++)xt=Wt[X],Ft?D&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,xt.width,xt.height,gt,Ct,xt.data):e.texImage2D(r.TEXTURE_2D,X,It,xt.width,xt.height,0,gt,Ct,xt.data);S.generateMipmaps=!1}else Ft?(ie&&e.texStorage2D(r.TEXTURE_2D,ct,It,nt.width,nt.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,Ct,nt.data)):e.texImage2D(r.TEXTURE_2D,0,It,nt.width,nt.height,0,gt,Ct,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&ie&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,It,Wt[0].width,Wt[0].height,nt.depth);for(let X=0,Q=Wt.length;X<Q;X++)if(xt=Wt[X],S.format!==cn)if(gt!==null)if(Ft){if(D)if(S.layerUpdates.size>0){let ft=yh(xt.width,xt.height,S.format,S.type);for(let ut of S.layerUpdates){let Dt=xt.data.subarray(ut*ft/xt.data.BYTES_PER_ELEMENT,(ut+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,ut,xt.width,xt.height,1,gt,Dt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,nt.depth,gt,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,It,xt.width,xt.height,nt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,nt.depth,gt,Ct,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,It,xt.width,xt.height,nt.depth,0,gt,Ct,xt.data)}else{Ft&&ie&&e.texStorage2D(r.TEXTURE_2D,ct,It,Wt[0].width,Wt[0].height);for(let X=0,Q=Wt.length;X<Q;X++)xt=Wt[X],S.format!==cn?gt!==null?Ft?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,X,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,xt.width,xt.height,gt,Ct,xt.data):e.texImage2D(r.TEXTURE_2D,X,It,xt.width,xt.height,0,gt,Ct,xt.data)}else if(S.isDataArrayTexture)if(Ft){if(ie&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,It,nt.width,nt.height,nt.depth),D)if(S.layerUpdates.size>0){let X=yh(nt.width,nt.height,S.format,S.type);for(let Q of S.layerUpdates){let ft=nt.data.subarray(Q*X/nt.data.BYTES_PER_ELEMENT,(Q+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,gt,Ct,ft)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(S.isData3DTexture)Ft?(ie&&e.texStorage3D(r.TEXTURE_3D,ct,It,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)):e.texImage3D(r.TEXTURE_3D,0,It,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(S.isFramebufferTexture){if(ie)if(Ft)e.texStorage2D(r.TEXTURE_2D,ct,It,nt.width,nt.height);else{let X=nt.width,Q=nt.height;for(let ft=0;ft<ct;ft++)e.texImage2D(r.TEXTURE_2D,ft,It,X,Q,0,gt,Ct,null),X>>=1,Q>>=1}}else if(Wt.length>0){if(Ft&&ie){let X=Et(Wt[0]);e.texStorage2D(r.TEXTURE_2D,ct,It,X.width,X.height)}for(let X=0,Q=Wt.length;X<Q;X++)xt=Wt[X],Ft?D&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,gt,Ct,xt):e.texImage2D(r.TEXTURE_2D,X,It,gt,Ct,xt);S.generateMipmaps=!1}else if(Ft){if(ie){let X=Et(nt);e.texStorage2D(r.TEXTURE_2D,ct,It,X.width,X.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Ct,nt)}else e.texImage2D(r.TEXTURE_2D,0,It,gt,Ct,nt);m(S)&&p(K),wt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function q(A,S,k){if(S.image.length!==6)return;let K=rt(A,S),j=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);let Z=n.get(j);if(j.version!==Z.__version||K===!0){e.activeTexture(r.TEXTURE0+k);let wt=Ht.getPrimaries(Ht.workingColorSpace),ht=S.colorSpace===Yn?null:Ht.getPrimaries(S.colorSpace),mt=S.colorSpace===Yn||wt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let qt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let Q=0;Q<6;Q++)!qt&&!nt?gt[Q]=x(S.image[Q],!0,i.maxCubemapSize):gt[Q]=nt?S.image[Q].image:S.image[Q],gt[Q]=oe(S,gt[Q]);let Ct=gt[0],It=s.convert(S.format,S.colorSpace),xt=s.convert(S.type),Wt=y(S.internalFormat,It,xt,S.colorSpace),Ft=S.isVideoTexture!==!0,ie=Z.__version===void 0||K===!0,D=j.dataReady,ct=R(S,Ct);At(r.TEXTURE_CUBE_MAP,S);let X;if(qt){Ft&&ie&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Wt,Ct.width,Ct.height);for(let Q=0;Q<6;Q++){X=gt[Q].mipmaps;for(let ft=0;ft<X.length;ft++){let ut=X[ft];S.format!==cn?It!==null?Ft?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,ut.width,ut.height,It,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Wt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,ut.width,ut.height,It,xt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Wt,ut.width,ut.height,0,It,xt,ut.data)}}}else{if(X=S.mipmaps,Ft&&ie){X.length>0&&ct++;let Q=Et(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Wt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){Ft?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,gt[Q].width,gt[Q].height,It,xt,gt[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,gt[Q].width,gt[Q].height,0,It,xt,gt[Q].data);for(let ft=0;ft<X.length;ft++){let Dt=X[ft].image[Q].image;Ft?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Dt.width,Dt.height,It,xt,Dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Wt,Dt.width,Dt.height,0,It,xt,Dt.data)}}else{Ft?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,It,xt,gt[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,It,xt,gt[Q]);for(let ft=0;ft<X.length;ft++){let ut=X[ft];Ft?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,It,xt,ut.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Wt,It,xt,ut.image[Q])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Z.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function et(A,S,k,K,j,Z){let wt=s.convert(k.format,k.colorSpace),ht=s.convert(k.type),mt=y(k.internalFormat,wt,ht,k.colorSpace),qt=n.get(S),nt=n.get(k);if(nt.__renderTarget=S,!qt.__hasExternalTextures){let gt=Math.max(1,S.width>>Z),Ct=Math.max(1,S.height>>Z);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,mt,gt,Ct,S.depth,0,wt,ht,null):e.texImage2D(j,Z,mt,gt,Ct,0,wt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),Gt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,j,nt.__webglTexture,0,Vt(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,j,nt.__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(A,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){let K=S.depthTexture,j=K&&K.isDepthTexture?K.type:null,Z=v(S.stencilBuffer,j),wt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=Vt(S);Gt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,Z,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,A)}else{let K=S.textures;for(let j=0;j<K.length;j++){let Z=K[j],wt=s.convert(Z.format,Z.colorSpace),ht=s.convert(Z.type),mt=y(Z.internalFormat,wt,ht,Z.colorSpace),qt=Vt(S);k&&Gt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,mt,S.width,S.height):Gt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,mt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,mt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);let j=K.__webglTexture,Z=Vt(S);if(S.depthTexture.format===Xi)Gt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(S.depthTexture.format===Qi)Gt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function vt(A){let S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");St(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=r.createRenderbuffer(),ot(S.__webglDepthbuffer[K],A,!1);else{let j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ot(S.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,j)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(A,S,k){let K=n.get(A);S!==void 0&&et(K.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&vt(A)}function he(A){let S=A.texture,k=n.get(A),K=n.get(S);A.addEventListener("dispose",E);let j=A.textures,Z=A.isWebGLCubeRenderTarget===!0,wt=j.length>1;if(wt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let mt=0;mt<S.mipmaps.length;mt++)k.__webglFramebuffer[ht][mt]=r.createFramebuffer()}else k.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)k.__webglFramebuffer[ht]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(wt)for(let ht=0,mt=j.length;ht<mt;ht++){let qt=n.get(j[ht]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&Gt(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<j.length;ht++){let mt=j[ht];k.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);let qt=s.convert(mt.format,mt.colorSpace),nt=s.convert(mt.type),gt=y(mt.internalFormat,qt,nt,mt.colorSpace,A.isXRRenderTarget===!0),Ct=Vt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,gt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ot(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),At(r.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)et(k.__webglFramebuffer[ht][mt],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else et(k.__webglFramebuffer[ht],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,mt=j.length;ht<mt;ht++){let qt=j[ht],nt=n.get(qt);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),At(r.TEXTURE_2D,qt),et(k.__webglFramebuffer,A,qt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),m(qt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),At(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)et(k.__webglFramebuffer[mt],A,S,r.COLOR_ATTACHMENT0,ht,mt);else et(k.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,ht,0);m(S)&&p(ht),e.unbindTexture()}A.depthBuffer&&vt(A)}function Xt(A){let S=A.textures;for(let k=0,K=S.length;k<K;k++){let j=S[k];if(m(j)){let Z=_(A),wt=n.get(j).__webglTexture;e.bindTexture(Z,wt),p(Z),e.unbindTexture()}}}let me=[],F=[];function Ke(A){if(A.samples>0){if(Gt(A)===!1){let S=A.textures,k=A.width,K=A.height,j=r.COLOR_BUFFER_BIT,Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=n.get(A),ht=S.length>1;if(ht)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);let qt=n.get(S[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qt,0)}r.blitFramebuffer(0,0,k,K,0,0,k,K,j,r.NEAREST),l===!0&&(me.length=0,F.length=0,me.push(r.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(me.push(Z),F.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);let qt=n.get(S[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Vt(A){return Math.min(i.maxSamples,A.samples)}function Gt(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function oe(A,S){let k=A.colorSpace,K=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==os&&k!==Yn&&(Ht.getTransfer(k)===Kt?(K!==cn||j!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Et(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=zt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Gt}function og(r,t){function e(n,i=Yn){let s,o=Ht.getTransfer(i);if(n===Fn)return r.UNSIGNED_BYTE;if(n===ql)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Yl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return r.BYTE;if(n===Nh)return r.SHORT;if(n===Rs)return r.UNSIGNED_SHORT;if(n===Xl)return r.INT;if(n===Mi)return r.UNSIGNED_INT;if(n===yn)return r.FLOAT;if(n===Ye)return r.HALF_FLOAT;if(n===Oh)return r.ALPHA;if(n===Bh)return r.RGB;if(n===cn)return r.RGBA;if(n===zh)return r.LUMINANCE;if(n===kh)return r.LUMINANCE_ALPHA;if(n===Xi)return r.DEPTH_COMPONENT;if(n===Qi)return r.DEPTH_STENCIL;if(n===Zl)return r.RED;if(n===$l)return r.RED_INTEGER;if(n===Hh)return r.RG;if(n===Jl)return r.RG_INTEGER;if(n===Kl)return r.RGBA_INTEGER;if(n===Mr||n===br||n===Sr||n===wr)if(o===Kt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Ea||n===Aa||n===Ra)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ta)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Ia||n===Pa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ca||n===Ia)return o===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pa)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===La)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===qa||n===Ya)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Tr)return o===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===Za||n===$a||n===Ja)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Tr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var fl=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ge=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},ag={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ag)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cg=`
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

}`,pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ze,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new re({vertexShader:lg,fragmentShader:cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ml=class extends jn{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new pl,m=e.getContextAttributes(),p=null,_=null,y=[],v=[],R=new st,T=null,E=new Ne;E.viewport=new fe;let C=new Ne;C.viewport=new fe;let b=[E,C],M=new fl,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=y[B];return q===void 0&&(q=new ws,y[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=y[B];return q===void 0&&(q=new ws,y[B]=q),q.getGripSpace()},this.getHand=function(B){let q=y[B];return q===void 0&&(q=new ws,y[B]=q),q.getHandSpace()};function L(B){let q=v.indexOf(B.inputSource);if(q===-1)return;let et=y[q];et!==void 0&&(et.update(B.inputSource,B.frame,c||o),et.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Y);for(let B=0;B<y.length;B++){let q=v[B];q!==null&&(v[B]=null,y[B].disconnect(q))}I=null,O=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,_=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ae(d.framebufferWidth,d.framebufferHeight,{format:cn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,et=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=m.stencil?Qi:Xi,et=m.stencil?Ki:Mi);let St={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(St),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Ae(f.textureWidth,f.textureHeight,{format:cn,type:Fn,depthTexture:new Br(f.textureWidth,f.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(B){for(let q=0;q<B.removed.length;q++){let et=B.removed[q],ot=v.indexOf(et);ot>=0&&(v[ot]=null,y[ot].disconnect(et))}for(let q=0;q<B.added.length;q++){let et=B.added[q],ot=v.indexOf(et);if(ot===-1){for(let vt=0;vt<y.length;vt++)if(vt>=v.length){v.push(et),ot=vt;break}else if(v[vt]===null){v[vt]=et,ot=vt;break}if(ot===-1)break}let St=y[ot];St&&St.connect(et)}}let W=new P,J=new P;function z(B,q,et){W.setFromMatrixPosition(q.matrixWorld),J.setFromMatrixPosition(et.matrixWorld);let ot=W.distanceTo(J),St=q.projectionMatrix.elements,vt=et.projectionMatrix.elements,zt=St[14]/(St[10]-1),he=St[14]/(St[10]+1),Xt=(St[9]+1)/St[5],me=(St[9]-1)/St[5],F=(St[8]-1)/St[0],Ke=(vt[8]+1)/vt[0],Vt=zt*F,Gt=zt*Ke,Rt=ot/(-F+Ke),oe=Rt*-F;if(q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(oe),B.translateZ(Rt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),St[10]===-1)B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let Et=zt+Rt,A=he+Rt,S=Vt-oe,k=Gt+(ot-oe),K=Xt*he/A*Et,j=me*he/A*Et;B.projectionMatrix.makePerspective(S,k,K,j,Et,A),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function $(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let q=B.near,et=B.far;x.texture!==null&&(x.depthNear>0&&(q=x.depthNear),x.depthFar>0&&(et=x.depthFar)),M.near=C.near=E.near=q,M.far=C.far=E.far=et,(I!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,O=M.far),E.layers.mask=B.layers.mask|2,C.layers.mask=B.layers.mask|4,M.layers.mask=E.layers.mask|C.layers.mask;let ot=B.parent,St=M.cameras;$(M,ot);for(let vt=0;vt<St.length;vt++)$(St[vt],ot);St.length===2?z(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),tt(B,M,ot)};function tt(B,q,et){et===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(et.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ja*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let at=null;function At(B,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let et=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ot=!1;et.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let vt=0;vt<et.length;vt++){let zt=et[vt],he=null;if(d!==null)he=d.getViewport(zt);else{let me=u.getViewSubImage(f,zt);he=me.viewport,vt===0&&(t.setRenderTargetTextures(_,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(_))}let Xt=b[vt];Xt===void 0&&(Xt=new Ne,Xt.layers.enable(vt),Xt.viewport=new fe,b[vt]=Xt),Xt.matrix.fromArray(zt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(zt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(he.x,he.y,he.width,he.height),vt===0&&(M.matrix.copy(Xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Xt)}let St=i.enabledFeatures;if(St&&St.includes("depth-sensing")){let vt=u.getDepthInformation(et[0]);vt&&vt.isValid&&vt.texture&&x.init(t,vt,i.renderState)}}for(let et=0;et<y.length;et++){let ot=v[et],St=y[et];ot!==null&&St!==void 0&&St.update(ot,q,c||o)}at&&at(B,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let rt=new Zh;rt.setAnimationLoop(At),this.setAnimationLoop=function(B){at=B},this.dispose=function(){}}},mi=new bn,hg=new ee;function ug(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,mi.copy(v),mi.x*=-1,mi.y*=-1,mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(hg.makeRotationFromEuler(mi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dg(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let v=y.program;n.uniformBlockBinding(_,v)}function c(_,y){let v=i[_.id];v===void 0&&(g(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",m));let R=y.program;n.updateUBOMapping(_,R);let T=t.render.frame;s[_.id]!==T&&(f(_),s[_.id]=T)}function h(_){let y=u();_.__bindingPointIndex=y;let v=r.createBuffer(),R=_.__size,T=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,R,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=i[_.id],v=_.uniforms,R=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let T=0,E=v.length;T<E;T++){let C=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,M=C.length;b<M;b++){let I=C[b];if(d(I,T,b,R)===!0){let O=I.__offset,L=Array.isArray(I.value)?I.value:[I.value],H=0;for(let Y=0;Y<L.length;Y++){let W=L[Y],J=x(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,O+H,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(_,y,v,R){let T=_.value,E=y+"_"+v;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{let C=R[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(_){let y=_.uniforms,v=0,R=16;for(let E=0,C=y.length;E<C;E++){let b=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,I=b.length;M<I;M++){let O=b[M],L=Array.isArray(O.value)?O.value:[O.value];for(let H=0,Y=L.length;H<Y;H++){let W=L[H],J=x(W),z=v%R,$=z%J.boundary,tt=z+$;v+=$,tt!==0&&R-tt<J.storage&&(v+=R-tt),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=J.storage}}}let T=v%R;return T>0&&(v+=R-T),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(let _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var zr=class{constructor(t={}){let{canvas:e=gd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this.toneMapping=Jn,this.toneMappingExposure=1;let v=this,R=!1,T=0,E=0,C=null,b=-1,M=null,I=new fe,O=new fe,L=null,H=new _t(0),Y=0,W=e.width,J=e.height,z=1,$=null,tt=null,at=new fe(0,0,W,J),At=new fe(0,0,W,J),rt=!1,B=new Cs,q=!1,et=!1,ot=new ee,St=new ee,vt=new P,zt=new fe,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function me(){return C===null?z:1}let F=n;function Ke(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bl}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){let U="webgl2";if(F=Ke(U,w),F===null)throw Ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,Gt,Rt,oe,Et,A,S,k,K,j,Z,wt,ht,mt,qt,nt,gt,Ct,It,xt,Wt,Ft,ie,D;function ct(){Vt=new Rm(F),Vt.init(),Ft=new og(F,Vt),Gt=new bm(F,Vt,t,Ft),Rt=new ig(F,Vt),Gt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),oe=new Pm(F),Et=new W0,A=new rg(F,Vt,Rt,Et,Gt,Ft,oe),S=new wm(v),k=new Am(v),K=new Od(F),ie=new ym(F,K),j=new Cm(F,K,oe,ie),Z=new Dm(F,j,K,oe),It=new Lm(F,Gt,A),nt=new Sm(Et),wt=new G0(v,S,k,Vt,Gt,ie,nt),ht=new ug(v,Et),mt=new q0,qt=new Q0(Vt),Ct=new vm(v,S,k,Rt,Z,d,l),gt=new eg(v,Z,Gt),D=new dg(F,oe,Gt,Rt),xt=new Mm(F,Vt,oe),Wt=new Im(F,Vt,oe),oe.programs=wt.programs,v.capabilities=Gt,v.extensions=Vt,v.properties=Et,v.renderLists=mt,v.shadowMap=gt,v.state=Rt,v.info=oe}ct();let X=new ml(v,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(W,J,!1))},this.getSize=function(w){return w.set(W,J)},this.setSize=function(w,U,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,J=U,e.width=Math.floor(w*z),e.height=Math.floor(U*z),V===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(W*z,J*z).floor()},this.setDrawingBufferSize=function(w,U,V){W=w,J=U,z=V,e.width=Math.floor(w*V),e.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,U,V,G){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,U,V,G),Rt.viewport(I.copy(at).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(At)},this.setScissor=function(w,U,V,G){w.isVector4?At.set(w.x,w.y,w.z,w.w):At.set(w,U,V,G),Rt.scissor(O.copy(At).multiplyScalar(z).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(w){Rt.setScissorTest(rt=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){tt=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(w=!0,U=!0,V=!0){let G=0;if(w){let N=!1;if(C!==null){let it=C.texture.format;N=it===Kl||it===Jl||it===$l}if(N){let it=C.texture.type,dt=it===Fn||it===Mi||it===Rs||it===Ki||it===ql||it===Yl,yt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),Pt=yt.r,Ut=yt.g,bt=yt.b;dt?(g[0]=Pt,g[1]=Ut,g[2]=bt,g[3]=Mt,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Pt,x[1]=Ut,x[2]=bt,x[3]=Mt,F.clearBufferiv(F.COLOR,0,x))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT),V&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),qt.dispose(),Et.dispose(),S.dispose(),k.dispose(),Z.dispose(),ie.dispose(),D.dispose(),wt.dispose(),X.dispose(),X.removeEventListener("sessionstart",mc),X.removeEventListener("sessionend",gc),ci.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=oe.autoReset,U=gt.enabled,V=gt.autoUpdate,G=gt.needsUpdate,N=gt.type;ct(),oe.autoReset=w,gt.enabled=U,gt.autoUpdate=V,gt.needsUpdate=G,gt.type=N}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){let U=w.target;U.removeEventListener("dispose",Dt),de(U)}function de(w){Ce(w),Et.remove(w)}function Ce(w){let U=Et.get(w).programs;U!==void 0&&(U.forEach(function(V){wt.releaseProgram(V)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,G,N,it){U===null&&(U=he);let dt=N.isMesh&&N.matrixWorld.determinant()<0,yt=Lu(w,U,V,G,N);Rt.setMaterial(G,dt);let Mt=V.index,Pt=1;if(G.wireframe===!0){if(Mt=j.getWireframeAttribute(V),Mt===void 0)return;Pt=2}let Ut=V.drawRange,bt=V.attributes.position,Zt=Ut.start*Pt,se=(Ut.start+Ut.count)*Pt;it!==null&&(Zt=Math.max(Zt,it.start*Pt),se=Math.min(se,(it.start+it.count)*Pt)),Mt!==null?(Zt=Math.max(Zt,0),se=Math.min(se,Mt.count)):bt!=null&&(Zt=Math.max(Zt,0),se=Math.min(se,bt.count));let ae=se-Zt;if(ae<0||ae===1/0)return;ie.setup(N,G,yt,V,Mt);let Oe,$t=xt;if(Mt!==null&&(Oe=K.get(Mt),$t=Wt,$t.setIndex(Oe)),N.isMesh)G.wireframe===!0?(Rt.setLineWidth(G.wireframeLinewidth*me()),$t.setMode(F.LINES)):$t.setMode(F.TRIANGLES);else if(N.isLine){let Tt=G.linewidth;Tt===void 0&&(Tt=1),Rt.setLineWidth(Tt*me()),N.isLineSegments?$t.setMode(F.LINES):N.isLineLoop?$t.setMode(F.LINE_LOOP):$t.setMode(F.LINE_STRIP)}else N.isPoints?$t.setMode(F.POINTS):N.isSprite&&$t.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$t.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))$t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Tt=N._multiDrawStarts,En=N._multiDrawCounts,Jt=N._multiDrawCount,rn=Mt?K.get(Mt).bytesPerElement:1,wi=Et.get(G).currentProgram.getUniforms();for(let Ve=0;Ve<Jt;Ve++)wi.setValue(F,"_gl_DrawID",Ve),$t.render(Tt[Ve]/rn,En[Ve])}else if(N.isInstancedMesh)$t.renderInstances(Zt,ae,N.count);else if(V.isInstancedBufferGeometry){let Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,En=Math.min(V.instanceCount,Tt);$t.renderInstances(Zt,ae,En)}else $t.render(Zt,ae)};function Qt(w,U,V){w.transparent===!0&&w.side===Be&&w.forceSinglePass===!1?(w.side=Le,w.needsUpdate=!0,Xs(w,U,V),w.side=Qn,w.needsUpdate=!0,Xs(w,U,V),w.side=Be):Xs(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),p=qt.get(V),p.init(U),y.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let G=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let it=N.material;if(it)if(Array.isArray(it))for(let dt=0;dt<it.length;dt++){let yt=it[dt];Qt(yt,V,N),G.add(yt)}else Qt(it,V,N),G.add(it)}),y.pop(),p=null,G},this.compileAsync=function(w,U,V=null){let G=this.compile(w,U,V);return new Promise(N=>{function it(){if(G.forEach(function(dt){Et.get(dt).currentProgram.isReady()&&G.delete(dt)}),G.size===0){N(w);return}setTimeout(it,10)}Vt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let sn=null;function Tn(w){sn&&sn(w)}function mc(){ci.stop()}function gc(){ci.start()}let ci=new Zh;ci.setAnimationLoop(Tn),typeof self!="undefined"&&ci.setContext(self),this.setAnimationLoop=function(w){sn=w,X.setAnimationLoop(w),w===null?ci.stop():ci.start()},X.addEventListener("sessionstart",mc),X.addEventListener("sessionend",gc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,C),p=qt.get(w,y.length),p.init(U),y.push(p),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),B.setFromProjectionMatrix(St),et=this.localClippingEnabled,q=nt.init(this.clippingPlanes,et),m=mt.get(w,_.length),m.init(),_.push(m),X.enabled===!0&&X.isPresenting===!0){let it=v.xr.getDepthSensingMesh();it!==null&&Po(it,U,-1/0,v.sortObjects)}Po(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,tt),Xt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Xt&&Ct.addToRenderList(m,w),this.info.render.frame++,q===!0&&nt.beginShadows();let V=p.state.shadowsArray;gt.render(V,w,U),q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){let it=U.cameras;if(N.length>0)for(let dt=0,yt=it.length;dt<yt;dt++){let Mt=it[dt];_c(G,N,w,Mt)}Xt&&Ct.render(w);for(let dt=0,yt=it.length;dt<yt;dt++){let Mt=it[dt];xc(m,w,Mt,Mt.viewport)}}else N.length>0&&_c(G,N,w,U),Xt&&Ct.render(w),xc(m,w,U);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,U),ie.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],q===!0&&nt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Po(w,U,V,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||B.intersectsSprite(w)){G&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);let dt=Z.update(w),yt=w.material;yt.visible&&m.push(w,dt,yt,V,zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||B.intersectsObject(w))){let dt=Z.update(w),yt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),zt.copy(dt.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(yt)){let Mt=dt.groups;for(let Pt=0,Ut=Mt.length;Pt<Ut;Pt++){let bt=Mt[Pt],Zt=yt[bt.materialIndex];Zt&&Zt.visible&&m.push(w,dt,Zt,V,zt.z,bt)}}else yt.visible&&m.push(w,dt,yt,V,zt.z,null)}}let it=w.children;for(let dt=0,yt=it.length;dt<yt;dt++)Po(it[dt],U,V,G)}function xc(w,U,V,G){let N=w.opaque,it=w.transmissive,dt=w.transparent;p.setupLightsView(V),q===!0&&nt.setGlobalState(v.clippingPlanes,V),G&&Rt.viewport(I.copy(G)),N.length>0&&Ws(N,U,V),it.length>0&&Ws(it,U,V),dt.length>0&&Ws(dt,U,V),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function _c(w,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Ae(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Ye:Fn,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));let it=p.state.transmissionRenderTarget[G.id],dt=G.viewport||I;it.setSize(dt.z,dt.w);let yt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(H),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Xt&&Ct.render(V);let Mt=v.toneMapping;v.toneMapping=Jn;let Pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),q===!0&&nt.setGlobalState(v.clippingPlanes,G),Ws(w,V,G),A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let bt=0,Zt=U.length;bt<Zt;bt++){let se=U[bt],ae=se.object,Oe=se.geometry,$t=se.material,Tt=se.group;if($t.side===Be&&ae.layers.test(G.layers)){let En=$t.side;$t.side=Le,$t.needsUpdate=!0,vc(ae,V,G,Oe,$t,Tt),$t.side=En,$t.needsUpdate=!0,Ut=!0}}Ut===!0&&(A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it))}v.setRenderTarget(yt),v.setClearColor(H,Y),Pt!==void 0&&(G.viewport=Pt),v.toneMapping=Mt}function Ws(w,U,V){let G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=w.length;N<it;N++){let dt=w[N],yt=dt.object,Mt=dt.geometry,Pt=G===null?dt.material:G,Ut=dt.group;yt.layers.test(V.layers)&&vc(yt,U,V,Mt,Pt,Ut)}}function vc(w,U,V,G,N,it){w.onBeforeRender(v,U,V,G,N,it),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,V,G,w,it),N.transparent===!0&&N.side===Be&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,v.renderBufferDirect(V,U,G,N,w,it),N.side=Qn,N.needsUpdate=!0,v.renderBufferDirect(V,U,G,N,w,it),N.side=Be):v.renderBufferDirect(V,U,G,N,w,it),w.onAfterRender(v,U,V,G,N,it)}function Xs(w,U,V){U.isScene!==!0&&(U=he);let G=Et.get(w),N=p.state.lights,it=p.state.shadowsArray,dt=N.state.version,yt=wt.getParameters(w,N.state,it,U,V),Mt=wt.getProgramCacheKey(yt),Pt=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?k:S).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",Dt),Pt=new Map,G.programs=Pt);let Ut=Pt.get(Mt);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===dt)return Mc(w,yt),Ut}else yt.uniforms=wt.getUniforms(w),w.onBeforeCompile(yt,v),Ut=wt.acquireProgram(yt,Mt),Pt.set(Mt,Ut),G.uniforms=yt.uniforms;let bt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=nt.uniform),Mc(w,yt),G.needsLights=Uu(w),G.lightsStateVersion=dt,G.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function yc(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Yi.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Mc(w,U){let V=Et.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Lu(w,U,V,G,N){U.isScene!==!0&&(U=he),A.resetTextureUnits();let it=U.fog,dt=G.isMeshStandardMaterial?U.environment:null,yt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:os,Mt=(G.isMeshStandardMaterial?k:S).get(G.envMap||dt),Pt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ut=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),bt=!!V.morphAttributes.position,Zt=!!V.morphAttributes.normal,se=!!V.morphAttributes.color,ae=Jn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ae=v.toneMapping);let Oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$t=Oe!==void 0?Oe.length:0,Tt=Et.get(G),En=p.state.lights;if(q===!0&&(et===!0||w!==M)){let Qe=w===M&&G.id===b;nt.setState(G,w,Qe)}let Jt=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==En.state.version||Tt.outputColorSpace!==yt||N.isBatchedMesh&&Tt.batching===!1||!N.isBatchedMesh&&Tt.batching===!0||N.isBatchedMesh&&Tt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Tt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Tt.instancing===!1||!N.isInstancedMesh&&Tt.instancing===!0||N.isSkinnedMesh&&Tt.skinning===!1||!N.isSkinnedMesh&&Tt.skinning===!0||N.isInstancedMesh&&Tt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Tt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Tt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Tt.instancingMorph===!1&&N.morphTexture!==null||Tt.envMap!==Mt||G.fog===!0&&Tt.fog!==it||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==nt.numPlanes||Tt.numIntersection!==nt.numIntersection)||Tt.vertexAlphas!==Pt||Tt.vertexTangents!==Ut||Tt.morphTargets!==bt||Tt.morphNormals!==Zt||Tt.morphColors!==se||Tt.toneMapping!==ae||Tt.morphTargetsCount!==$t)&&(Jt=!0):(Jt=!0,Tt.__version=G.version);let rn=Tt.currentProgram;Jt===!0&&(rn=Xs(G,U,N));let wi=!1,Ve=!1,us=!1,le=rn.getUniforms(),gn=Tt.uniforms;if(Rt.useProgram(rn.program)&&(wi=!0,Ve=!0,us=!0),G.id!==b&&(b=G.id,Ve=!0),wi||M!==w){Rt.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),_d(ot),vd(ot),le.setValue(F,"projectionMatrix",ot)):le.setValue(F,"projectionMatrix",w.projectionMatrix),le.setValue(F,"viewMatrix",w.matrixWorldInverse);let zn=le.map.cameraPosition;zn!==void 0&&zn.setValue(F,vt.setFromMatrixPosition(w.matrixWorld)),Gt.logarithmicDepthBuffer&&le.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ve=!0,us=!0)}if(N.isSkinnedMesh){le.setOptional(F,N,"bindMatrix"),le.setOptional(F,N,"bindMatrixInverse");let Qe=N.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),le.setValue(F,"boneTexture",Qe.boneTexture,A))}N.isBatchedMesh&&(le.setOptional(F,N,"batchingTexture"),le.setValue(F,"batchingTexture",N._matricesTexture,A),le.setOptional(F,N,"batchingIdTexture"),le.setValue(F,"batchingIdTexture",N._indirectTexture,A),le.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(F,"batchingColorTexture",N._colorsTexture,A));let ds=V.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&It.update(N,V,rn),(Ve||Tt.receiveShadow!==N.receiveShadow)&&(Tt.receiveShadow=N.receiveShadow,le.setValue(F,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(gn.envMap.value=Mt,gn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),Ve&&(le.setValue(F,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&Du(gn,us),it&&G.fog===!0&&ht.refreshFogUniforms(gn,it),ht.refreshMaterialUniforms(gn,G,z,J,p.state.transmissionRenderTarget[w.id]),Yi.upload(F,yc(Tt),gn,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Yi.upload(F,yc(Tt),gn,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(F,"center",N.center),le.setValue(F,"modelViewMatrix",N.modelViewMatrix),le.setValue(F,"normalMatrix",N.normalMatrix),le.setValue(F,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Qe=G.uniformsGroups;for(let zn=0,kn=Qe.length;zn<kn;zn++){let bc=Qe[zn];D.update(bc,rn),D.bind(bc,rn)}}return rn}function Du(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Uu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,V){Et.get(w.texture).__webglTexture=U,Et.get(w.depthTexture).__webglTexture=V;let G=Et.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let V=Et.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){C=w,T=U,E=V;let G=!0,N=null,it=!1,dt=!1;if(w){let Mt=Et.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(Mt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Mt.__hasExternalTextures)A.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let bt=w.depthTexture;if(Mt.__boundDepthTexture!==bt){if(bt!==null&&Et.has(bt)&&(w.width!==bt.image.width||w.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(dt=!0);let Ut=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?N=Ut[U][V]:N=Ut[U],it=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[V]:N=Ut,I.copy(w.viewport),O.copy(w.scissor),L=w.scissorTest}else I.copy(at).multiplyScalar(z).floor(),O.copy(At).multiplyScalar(z).floor(),L=rt;if(Rt.bindFramebuffer(F.FRAMEBUFFER,N)&&G&&Rt.drawBuffers(w,N),Rt.viewport(I),Rt.scissor(O),Rt.setScissorTest(L),it){let Mt=Et.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,V)}else if(dt){let Mt=Et.get(w.texture),Pt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,V||0,Pt)}b=-1},this.readRenderTargetPixels=function(w,U,V,G,N,it,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){Rt.bindFramebuffer(F.FRAMEBUFFER,yt);try{let Mt=w.texture,Pt=Mt.format,Ut=Mt.type;if(!Gt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N&&F.readPixels(U,V,G,N,Ft.convert(Pt),Ft.convert(Ut),it)}finally{let Mt=C!==null?Et.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,G,N,it,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){let Mt=w.texture,Pt=Mt.format,Ut=Mt.type;if(!Gt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N){Rt.bindFramebuffer(F.FRAMEBUFFER,yt);let bt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.bufferData(F.PIXEL_PACK_BUFFER,it.byteLength,F.STREAM_READ),F.readPixels(U,V,G,N,Ft.convert(Pt),Ft.convert(Ut),0);let Zt=C!==null?Et.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,Zt);let se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await xd(F,se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,it),F.deleteBuffer(bt),F.deleteSync(se),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,V=0){w.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-V),N=Math.floor(w.image.width*G),it=Math.floor(w.image.height*G),dt=U!==null?U.x:0,yt=U!==null?U.y:0;A.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,dt,yt,N,it),Rt.unbindTexture()},this.copyTextureToTexture=function(w,U,V=null,G=null,N=0){w.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let it,dt,yt,Mt,Pt,Ut,bt,Zt,se,ae=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(it=V.max.x-V.min.x,dt=V.max.y-V.min.y,yt=V.isBox3?V.max.z-V.min.z:1,Mt=V.min.x,Pt=V.min.y,Ut=V.isBox3?V.min.z:0):(it=ae.width,dt=ae.height,yt=ae.depth||1,Mt=0,Pt=0,Ut=0),G!==null?(bt=G.x,Zt=G.y,se=G.z):(bt=0,Zt=0,se=0);let Oe=Ft.convert(U.format),$t=Ft.convert(U.type),Tt;U.isData3DTexture?(A.setTexture3D(U,0),Tt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Tt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Tt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let En=F.getParameter(F.UNPACK_ROW_LENGTH),Jt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),rn=F.getParameter(F.UNPACK_SKIP_PIXELS),wi=F.getParameter(F.UNPACK_SKIP_ROWS),Ve=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ut);let us=w.isDataArrayTexture||w.isData3DTexture,le=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let gn=Et.get(w),ds=Et.get(U),Qe=Et.get(gn.__renderTarget),zn=Et.get(ds.__renderTarget);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let kn=0;kn<yt;kn++)us&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,N,Ut+kn),w.isDepthTexture?(le&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(U).__webglTexture,N,se+kn),F.blitFramebuffer(Mt,Pt,it,dt,bt,Zt,it,dt,F.DEPTH_BUFFER_BIT,F.NEAREST)):le?F.copyTexSubImage3D(Tt,N,bt,Zt,se+kn,Mt,Pt,it,dt):F.copyTexSubImage2D(Tt,N,bt,Zt,se+kn,Mt,Pt,it,dt);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Tt,N,bt,Zt,se,it,dt,yt,Oe,$t,ae.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Tt,N,bt,Zt,se,it,dt,yt,Oe,ae.data):F.texSubImage3D(Tt,N,bt,Zt,se,it,dt,yt,Oe,$t,ae):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,bt,Zt,it,dt,Oe,$t,ae.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,bt,Zt,ae.width,ae.height,Oe,ae.data):F.texSubImage2D(F.TEXTURE_2D,N,bt,Zt,it,dt,Oe,$t,ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,En),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Jt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rn),F.pixelStorei(F.UNPACK_SKIP_ROWS,wi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ve),N===0&&U.generateMipmaps&&F.generateMipmap(Tt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V=null,G=null,N=0){return w.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,V,G,N)},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){T=0,E=0,C=null,Rt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};var kr=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new _t(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},es=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qa,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},De=new P,Is=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ps=class extends On{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zi,xs=new P,ki=new P,Hi=new P,Vi=new st,_s=new st,jh=new ee,fr=new P,vs=new P,pr=new P,Mh=new st,la=new st,bh=new st,Vr=class extends ve{constructor(t=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hr(e,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new Is(n,3,0,!1)),zi.setAttribute("uv",new Is(n,2,3,!1))}this.geometry=zi,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),jh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Hi.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;mr(fr.set(-.5,-.5,0),Hi,o,ki,i,s),mr(vs.set(.5,-.5,0),Hi,o,ki,i,s),mr(pr.set(.5,.5,0),Hi,o,ki,i,s),Mh.set(0,0),la.set(1,0),bh.set(1,1);let a=t.ray.intersectTriangle(fr,vs,pr,!1,xs);if(a===null&&(mr(vs.set(-.5,.5,0),Hi,o,ki,i,s),la.set(0,1),a=t.ray.intersectTriangle(fr,pr,vs,!1,xs),a===null))return;let l=t.ray.origin.distanceTo(xs);l<t.near||l>t.far||e.push({distance:l,point:xs.clone(),uv:Zn.getInterpolation(xs,fr,vs,pr,Mh,la,bh,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mr(r,t,e,n,i,s){Vi.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(_s.x=s*Vi.x-i*Vi.y,_s.y=i*Vi.x+s*Vi.y):_s.copy(Vi),r.copy(t),r.x+=_s.x,r.y+=_s.y,r.applyMatrix4(jh)}var gl=class extends ze{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Xe,h=Xe,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ls=class extends xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gi=new ee,Sh=new ee,gr=[],wh=new hn,fg=new ee,ys=new pt,Ms=new ei,Sn=class extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),wh.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(wh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),Ms.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Gi),Sh.multiplyMatrices(n,Gi),ys.matrixWorld=Sh,ys.raycast(t,gr);for(let o=0,a=gr.length;o<a;o++){let l=gr[o];l.instanceId=s,l.object=this,e.push(l)}gr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gl(new Float32Array(i*this.count),i,this.count,Zl,yn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var xl=class extends On{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Th=new ee,_l=new Pr,xr=new ei,_r=new P,Gr=class extends ve{constructor(t=new ne,e=new xl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=s,t.ray.intersectsSphere(xr)===!1)return;Th.copy(i).invert(),_l.copy(t.ray).applyMatrix4(Th);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);_r.fromBufferAttribute(u,m),Eh(_r,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)_r.fromBufferAttribute(u,g),Eh(_r,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Eh(r,t,e,n,i,s,o){let a=_l.distanceSqToPoint(r);if(a<e){let l=new P;_l.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ns=class extends ze{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new st:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,i=[],s=[],o=[],a=new P,l=new ee;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ee(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ee(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ds=class extends tn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},vl=class extends Ds{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jl(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var vr=new P,ca=new jl,ha=new jl,ua=new jl,Us=class extends tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(vr.subVectors(i[0],i[1]).add(i[0]),c=vr);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(vr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ca.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),ha.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),ua.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ha.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ua.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ca.calc(l),ha.calc(l),ua.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ah(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function pg(r,t){let e=1-r;return e*e*t}function mg(r,t){return 2*(1-r)*r*t}function gg(r,t){return r*r*t}function Ts(r,t,e,n){return pg(r,t)+mg(r,e)+gg(r,n)}function xg(r,t){let e=1-r;return e*e*e*t}function _g(r,t){let e=1-r;return 3*e*e*r*t}function vg(r,t){return 3*(1-r)*r*r*t}function yg(r,t){return r*r*r*t}function Es(r,t,e,n,i){return xg(r,t)+_g(r,e)+vg(r,n)+yg(r,i)}var Wr=class extends tn{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Es(t,i.x,s.x,o.x,a.x),Es(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yl=class extends tn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Es(t,i.x,s.x,o.x,a.x),Es(t,i.y,s.y,o.y,a.y),Es(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xr=class extends tn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ml=class extends tn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends tn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ts(t,i.x,s.x,o.x),Ts(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends tn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ts(t,i.x,s.x,o.x),Ts(t,i.y,s.y,o.y),Ts(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ah(a,l.x,c.x,h.x,u.x),Ah(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new st().fromArray(i))}return this}},Rh=Object.freeze({__proto__:null,ArcCurve:vl,CatmullRomCurve3:Us,CubicBezierCurve:Wr,CubicBezierCurve3:yl,EllipseCurve:Ds,LineCurve:Xr,LineCurve3:Ml,QuadraticBezierCurve:qr,QuadraticBezierCurve3:bl,SplineCurve:Yr}),Sl=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Rh[i.type]().fromJSON(i))}return this}},wl=class extends Sl{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Xr(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new qr(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Wr(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Yr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Ds(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Tl=class r extends ne{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ee(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,f=new st,d=new P,g=new P,x=new P,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=e;_++){let y=n+_*h*i,v=Math.sin(y),R=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*R,o.push(u.x,u.y,u.z),f.x=_/e,f.y=T/(t.length-1),a.push(f.x,f.y);let E=l[3*T+0]*v,C=l[3*T+1],b=l[3*T+0]*R;c.push(E,C,b)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let v=y+_*t.length,R=v,T=v+t.length,E=v+t.length+1,C=v+1;s.push(R,T,C),s.push(E,C,T)}this.setIndex(s),this.setAttribute("position",new Bt(o,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},is=class r extends Tl{constructor(t=1,e=1,n=4,i=8){let s=new wl;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},ni=class r extends ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new P,h=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Re=class r extends ne{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(d,2));function _(){let v=new P,R=new P,T=0,E=(e-t)/n;for(let C=0;C<=s;C++){let b=[],M=C/s,I=M*(e-t)+t;for(let O=0;O<=i;O++){let L=O/i,H=L*l+a,Y=Math.sin(H),W=Math.cos(H);R.x=I*Y,R.y=-M*n+m,R.z=I*W,u.push(R.x,R.y,R.z),v.set(Y,E,W).normalize(),f.push(v.x,v.y,v.z),d.push(L,1-M),b.push(g++)}x.push(b)}for(let C=0;C<i;C++)for(let b=0;b<s;b++){let M=x[b][C],I=x[b+1][C],O=x[b+1][C+1],L=x[b][C+1];(t>0||b!==0)&&(h.push(M,I,L),T+=3),(e>0||b!==s-1)&&(h.push(I,O,L),T+=3)}c.addGroup(p,T,0),p+=T}function y(v){let R=g,T=new st,E=new P,C=0,b=v===!0?t:e,M=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let I=g;for(let O=0;O<=i;O++){let H=O/i*l+a,Y=Math.cos(H),W=Math.sin(H);E.x=b*W,E.y=m*M,E.z=b*Y,u.push(E.x,E.y,E.z),f.push(0,M,0),T.x=Y*.5+.5,T.y=W*.5*M+.5,d.push(T.x,T.y),g++}for(let O=0;O<i;O++){let L=R+O,H=I+O;v===!0?h.push(H,H+1,L):h.push(H+1,H,L),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},un=class r extends Re{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zr=class r extends ne{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new P,v=new P,R=new P;for(let T=0;T<e.length;T+=3)d(e[T+0],y),d(e[T+1],v),d(e[T+2],R),l(y,v,R,_)}function l(_,y,v,R){let T=R+1,E=[];for(let C=0;C<=T;C++){E[C]=[];let b=_.clone().lerp(v,C/T),M=y.clone().lerp(v,C/T),I=T-C;for(let O=0;O<=I;O++)O===0&&C===T?E[C][O]=b:E[C][O]=b.clone().lerp(M,O/I)}for(let C=0;C<T;C++)for(let b=0;b<2*(T-C)-1;b++){let M=Math.floor(b/2);b%2===0?(f(E[C][M+1]),f(E[C+1][M]),f(E[C][M])):(f(E[C][M+1]),f(E[C+1][M+1]),f(E[C+1][M]))}}function c(_){let y=new P;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(_),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){let _=new P;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];let v=m(_)/2/Math.PI+.5,R=p(_)/Math.PI+.5;o.push(v,1-R)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],R=o[_+4],T=Math.max(y,v,R),E=Math.min(y,v,R);T>.9&&E<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,y){let v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){let _=new P,y=new P,v=new P,R=new P,T=new st,E=new st,C=new st;for(let b=0,M=0;b<s.length;b+=9,M+=6){_.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),T.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),R.copy(_).add(y).add(v).divideScalar(3);let I=m(R);x(T,M+0,_,I),x(E,M+2,y,I),x(C,M+4,v,I)}}function x(_,y,v,R){R<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var ss=class r extends Zr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},$r=class r extends Zr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Jr=class r extends ne{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new P,g=new st;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=s+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,y=_,v=_+n+1,R=_+n+2,T=_+1;a.push(y,v,T),a.push(v,R,T)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var dn=class r extends ne{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],y=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(i+T*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+T*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+v,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let y=h[p][_+1],v=h[p][_],R=h[p+1][_],T=h[p+1][_+1];(p!==0||o>0)&&d.push(y,v,T),(p!==n-1||l<Math.PI)&&d.push(v,R,T)}this.setIndex(d),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ns=class r extends ne{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let x=g/i*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let x=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,_=(i+1)*d+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Kr=class extends re{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},kt=class extends On{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function yr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Mg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var rs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends rs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ac:s=t,a=2*e-n;break;case Rc:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ac:o=t,l=2*n-e;break;case Rc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let R=0;R!==a;++R)s[R]=p*o[h+R]+_*o[c+R]+y*o[l+R]+v*o[u+R];return s}},Al=class extends rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},Rl=class extends rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},fn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case Ka:e=this.InterpolantFactoryMethodLinear;break;case Do:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Mg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Do,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Ka;var bi=class extends fn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Er;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends fn{};Cl.prototype.ValueTypeName="color";var Il=class extends fn{};Il.prototype.ValueTypeName="number";var Pl=class extends rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)ti.slerpFlat(s,0,o,c-a,o,c,l);return s}},Qr=class extends fn{InterpolantFactoryMethodLinear(t){return new Pl(this.times,this.values,this.getValueSize(),t)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends fn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Er;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends fn{};Ll.prototype.ValueTypeName="vector";var Dl=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},bg=new Dl,Ul=class{constructor(t){this.manager=t!==void 0?t:bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var jr=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},to=class extends jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},da=new ee,Ch=new P,Ih=new P,Nl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ch),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Fl=class extends Nl{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eo=class extends jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Fl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var no=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ph(){return performance.now()}var tc="\\[\\]\\.:\\/",Sg=new RegExp("["+tc+"]","g"),ec="[^"+tc+"]",wg="[^"+tc.replace("\\.","")+"]",Tg=/((?:WC+[\/:])*)/.source.replace("WC",ec),Eg=/(WCOD+)?/.source.replace("WCOD",wg),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),Rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),Cg=new RegExp("^"+Tg+Eg+Ag+Rg+"$"),Ig=["material","materials","bones","map"],Ol=class{constructor(t,e,n){let i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(t){let e=Cg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Ig.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Ol;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qg=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);var ao={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ze=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Pg=new ts(-1,1,1,-1,0,1),nc=class extends ne{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}},Lg=new nc,si=class{constructor(t){this._mesh=new pt(Lg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Pg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var lo=class extends Ze{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ii.clone(t.uniforms),this.material=new re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new si(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Bs=class extends Ze{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},co=class extends Ze{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ho=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new Ae(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ye}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lo(ao),this.copyPass.material.blending=Mn,this.clock=new no}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bs!==void 0&&(o instanceof Bs?n=!0:o instanceof co&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var uo=class extends Ze{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var tu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ls=class r extends Ze{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new _t(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ae(s,o,{type:Ye}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ae(s,o,{type:Ye});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ae(s,o,{type:Ye});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}let a=tu;this.highPassUniforms=ii.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new re({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new st(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ao;this.copyUniforms=ii.clone(h.uniforms),this.blendMaterial=new re({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _t,this.oldClearAlpha=1,this.basic=new te,this.fsQuad=new si(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new st(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ls.BlurDirectionX=new st(1,0);ls.BlurDirectionY=new st(0,1);var eu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var fo=class extends Ze{constructor(){super();let t=eu;this.uniforms=ii.clone(t.uniforms),this.material=new Kr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Dg(r,t){let e=[],n=r.length;for(let i=0;i<n;i++){let s=r[i];if(s[3]!=="c"){e.push([s[0],s[1],s[2]||0]);continue}let o=r[(i-1+n)%n],a=r[(i+1)%n],l=s[4]||t,c=nu(o[0]-s[0],o[1]-s[1]),h=nu(a[0]-s[0],a[1]-s[1]);e.push([s[0]+c[0]*l,s[1]+c[1]*l,s[2]||0]),e.push([s[0]+(c[0]+h[0])*l*.29,s[1]+(c[1]+h[1])*l*.29,s[2]||0]),e.push([s[0]+h[0]*l,s[1]+h[1]*l,s[2]||0])}return e}function nu(r,t){let e=Math.hypot(r,t)||1;return[r/e,t/e]}var en=[{id:"valley",name:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u043E\u043B\u0438\u043D\u0430",short:"\u0414\u043E\u043B\u0438\u043D\u0430",desc:"\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u0441\u0432\u044F\u0437\u043A\u0438, \u0445\u043E\u043B\u043C\u044B \u0438 S-\u043E\u0431\u0440\u0430\u0437\u043D\u0430\u044F \u0441\u0435\u043A\u0446\u0438\u044F. \u0425\u043E\u0440\u043E\u0448\u0430\u044F \u0442\u0440\u0430\u0441\u0441\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0437\u0430\u0435\u0437\u0434\u0430.",theme:"day",width:13,runoff:5,points:[[-60,-110,0],[20,-110,0],[75,-106,.5],[125,-88,1.5],[150,-45,3],[140,0,5],[108,22,6],[112,60,6.5],[150,88,5.5],[150,128,4],[110,142,3],[60,120,2.5],[15,132,3],[-35,150,4.5],[-95,140,6],[-150,110,5.5],[-168,62,4],[-142,34,3],[-142,8,2],[-160,-22,1],[-185,-60,0],[-170,-100,0],[-120,-110,0]],itemRows:[.2,.52,.8],boostPads:[[.36,0],[.66,-2.5],[.93,2.5]]},{id:"harbor",name:"\u0417\u0430\u043A\u0430\u0442\u043D\u0430\u044F \u0433\u0430\u0432\u0430\u043D\u044C",short:"\u0413\u0430\u0432\u0430\u043D\u044C",desc:"\u041E\u0441\u0442\u0440\u043E\u0432 \u043D\u0430 \u0437\u0430\u043A\u0430\u0442\u0435: \u0434\u043B\u0438\u043D\u043D\u0430\u044F \u043F\u0440\u044F\u043C\u0430\u044F \u0432\u0434\u043E\u043B\u044C \u0432\u043E\u0434\u044B \u0438 \u0442\u0443\u0433\u0430\u044F \u0448\u043F\u0438\u043B\u044C\u043A\u0430 \u0443 \u043C\u0430\u044F\u043A\u0430.",theme:"sunset",width:13,runoff:5,points:[[-90,67,0],[-10,70,0],[60,69,0],[120,60,0],[165,25,.5],[160,-25,1.5],[115,-40,3],[70,-20,4],[30,-45,4.5],[40,-95,4],[95,-120,3.5],[120,-165,3],[80,-200,2.5],[15,-190,2.5],[-35,-150,3],[-80,-172,3.5],[-128,-166,3.5],[-152,-134,3],[-135,-100,2.5],[-155,-60,1.5],[-200,-30,.5],[-205,25,0],[-160,60,0]],itemRows:[.16,.47,.76],boostPads:[[.08,0],[.55,2.5],[.88,-2]]},{id:"neon",name:"\u041D\u0435\u043E\u043D\u043E\u0432\u044B\u0439 \u0433\u043E\u0440\u043E\u0434",short:"\u041D\u0435\u043E\u043D",desc:"\u041D\u043E\u0447\u043D\u0430\u044F \u0443\u043B\u0438\u0447\u043D\u0430\u044F \u0442\u0440\u0430\u0441\u0441\u0430: \u043F\u0440\u044F\u043C\u044B\u0435 \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u044B, \u0434\u0435\u0432\u044F\u043D\u043E\u0441\u0442\u043E\u0433\u0440\u0430\u0434\u0443\u0441\u043D\u044B\u0435 \u0443\u0433\u043B\u044B \u0438 \u0448\u0438\u043A\u0430\u043D\u0430.",theme:"night",width:13,runoff:4.5,points:Dg([[-60,-120,0],[8,-120,0],[36,-107,0],[64,-120,0],[120,-120,0,"c"],[120,-40,0,"c"],[45,-40,0,"c"],[45,40,0,"c"],[160,40,0,"c"],[160,125,0,"c"],[-55,125,0,"c"],[-55,45,0,"c"],[-150,45,0,"c"],[-150,-120,0,"c",26]],22),itemRows:[.22,.5,.78],boostPads:[[.12,0],[.62,0],[.9,2.5]]}];var Ug=1,ic=r=>{for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return r},po=class{constructor(t){this.def=t,this.roadWidth=t.width||13,this.half=this.roadWidth/2,this.runoff=t.runoff||5,this.barrier=this.half+this.runoff;let e=t.points.map(_=>new P(_[0],_[2]||0,_[1])),n=new Us(e,!0,"centripetal");n.arcLengthDivisions=8e3,this.curve=n;let i=n.getLength(),s=Math.max(200,Math.round(i/Ug)),o=n.getSpacedPoints(s);o.pop(),this.N=s,this.length=i,this.ds=i/s;let a=new Float32Array(s),l=new Float32Array(s),c=new Float32Array(s);for(let _=0;_<s;_++)a[_]=o[_].x,l[_]=o[_].y+.06,c[_]=o[_].z;for(let _=0;_<3;_++){let y=l.slice();for(let v=0;v<s;v++)l[v]=(y[(v-2+s)%s]+y[(v-1+s)%s]+y[v]+y[(v+1)%s]+y[(v+2)%s])/5}this.px=a,this.py=l,this.pz=c;let h=new Float32Array(s),u=new Float32Array(s),f=new Float32Array(s),d=new Float32Array(s),g=new Float32Array(s),x=new Float32Array(s);for(let _=0;_<s;_++){let y=(_-1+s)%s,v=(_+1)%s,R=a[v]-a[y],T=c[v]-c[y],E=Math.hypot(R,T)||1;R/=E,T/=E,h[_]=R,u[_]=T,f[_]=-T,d[_]=R,g[_]=Math.atan2(R,T),x[_]=(l[v]-l[y])/(2*this.ds)}this.tx=h,this.tz=u,this.nx=f,this.nz=d,this.head=g,this.slope=x;let m=new Float32Array(s),p=4;for(let _=0;_<s;_++){let y=(_-p+s)%s,v=(_+p)%s;m[_]=ic(g[v]-g[y])/(2*p*this.ds)}this.curv=m,this.computeRacingLine()}idx(t){return(t%this.N+this.N)%this.N}computeRacingLine(){let t=this.N,e=this.half-1.7,n=new Float32Array(t),i=new Float32Array(t),s=new Float32Array(t),o=[[10,220],[5,220],[2,160]];for(let[f,d]of o)for(let g=0;g<d;g++){for(let m=0;m<t;m++)i[m]=this.px[m]+this.nx[m]*n[m],s[m]=this.pz[m]+this.nz[m]*n[m];let x=new Float32Array(t);for(let m=0;m<t;m++){let p=(m-f+t)%t,_=(m+f)%t,y=(i[p]+i[_])*.5-this.px[m],v=(s[p]+s[_])*.5-this.pz[m],R=y*this.nx[m]+v*this.nz[m];R=n[m]+(R-n[m])*.6,x[m]=Math.max(-e,Math.min(e,R))}n=x}for(let f=0;f<4;f++){let d=n.slice();for(let g=0;g<t;g++)n[g]=(d[(g-1+t)%t]+2*d[g]+d[(g+1)%t])/4}this.lineOff=n;let a=new Float32Array(t),l=new Float32Array(t);for(let f=0;f<t;f++)a[f]=this.px[f]+this.nx[f]*n[f],l[f]=this.pz[f]+this.nz[f]*n[f];let c=new Float32Array(t),h=5;for(let f=0;f<t;f++){let d=(f-h+t)%t,g=(f+h)%t,x=f,m=Math.atan2(a[x]-a[d],l[x]-l[d]),p=Math.atan2(a[g]-a[x],l[g]-l[x]),_=Math.hypot(a[g]-a[d],l[g]-l[d])||1;c[f]=ic(p-m)/(_*.5)}let u=c.slice();for(let f=0;f<t;f++){let d=0;for(let g=-3;g<=3;g++)d+=u[(f+g+t)%t];c[f]=d/7}this.lineCurv=c}project(t,e,n=-1,i=null,s={}){let o=this.N,a=-1,l=1/0;if(n>=0)for(let R=-40;R<=40;R++){let T=(n+R+o)%o,E=t-this.px[T],C=e-this.pz[T],b=E*E+C*C;if(i!==null){let M=i-this.py[T];b+=M*M*4}b<l&&(l=b,a=T)}if(a<0||l>30*30)for(let R=0;R<o;R++){let T=t-this.px[R],E=e-this.pz[R],C=T*T+E*E;if(i!==null){let b=i-this.py[R];C+=b*b*4}C<l&&(l=C,a=R)}let c=a,h=0,u=(a+1)%o,f=(a-1+o)%o,d=(R,T)=>{let E=this.px[T]-this.px[R],C=this.pz[T]-this.pz[R],b=E*E+C*C||1;return((t-this.px[R])*E+(e-this.pz[R])*C)/b},g=d(a,u);g>=0?(c=a,h=Math.min(1,g)):(c=f,h=Math.max(0,Math.min(1,d(f,a))));let x=(c+1)%o,m=this.px[c]+(this.px[x]-this.px[c])*h,p=this.pz[c]+(this.pz[x]-this.pz[c])*h,_=this.nx[c]+(this.nx[x]-this.nx[c])*h,y=this.nz[c]+(this.nz[x]-this.nz[c])*h,v=Math.hypot(_,y)||1;return s.idx=a,s.i0=c,s.t=h,s.s=(c+h)*this.ds,s.d=((t-m)*_+(e-p)*y)/v,s.nx=_/v,s.nz=y/v,s.y=this.py[c]+(this.py[x]-this.py[c])*h,s.head=this.head[c],s.slope=this.slope[c],s}pointAt(t,e=0,n=new P){let i=t/this.ds,s=this.idx(Math.floor(i)),o=(s+1)%this.N,a=i-Math.floor(i),l=this.px[s]+(this.px[o]-this.px[s])*a,c=this.pz[s]+(this.pz[o]-this.pz[s])*a,h=this.py[s]+(this.py[o]-this.py[s])*a,u=this.nx[s]+(this.nx[o]-this.nx[s])*a,f=this.nz[s]+(this.nz[o]-this.nz[s])*a,d=Math.hypot(u,f)||1;return n.set(l+u/d*e,h,c+f/d*e)}headingAt(t){let e=t/this.ds,n=this.idx(Math.floor(e)),i=(n+1)%this.N,s=e-Math.floor(e);return this.head[n]+ic(this.head[i]-this.head[n])*s}lineOffsetAt(t){let e=t/this.ds,n=this.idx(Math.floor(e)),i=(n+1)%this.N,s=e-Math.floor(e);return this.lineOff[n]+(this.lineOff[i]-this.lineOff[n])*s}wrapS(t){let e=this.length;return(t%e+e)%e}deltaS(t,e){let n=this.length,i=(t-e)%n;return i>n/2&&(i-=n),i<-n/2&&(i+=n),i}bounds(t=0){let e=1/0,n=-1/0,i=1/0,s=-1/0;for(let o=0;o<this.N;o++)e=Math.min(e,this.px[o]),n=Math.max(n,this.px[o]),i=Math.min(i,this.pz[o]),s=Math.max(s,this.pz[o]);return{minX:e-t,maxX:n+t,minZ:i-t,maxZ:s+t}}distToCenter(t,e,n=3){let i=1/0;for(let s=0;s<this.N;s+=n){let o=t-this.px[s],a=e-this.pz[s],l=o*o+a*a;l<i&&(i=l)}return Math.sqrt(i)}};var pn=[{id:"vikhr",name:"\u0412\u0438\u0445\u0440\u044C",num:7,color:"#e0322b",accent:"#ffffff",suit:"#1b1d22",stats:{speed:3,accel:3,handling:3,weight:3},bio:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B. \u0420\u043E\u0432\u043D\u044B\u0439 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u0435."},{id:"kometa",name:"\u041A\u043E\u043C\u0435\u0442\u0430",num:21,color:"#1f6fe0",accent:"#ffd23f",suit:"#0f2447",stats:{speed:5,accel:2,handling:2,weight:3},bio:"\u0421\u0430\u043C\u0430\u044F \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C, \u043D\u043E \u0434\u043E\u043B\u0433\u043E \u0440\u0430\u0437\u0433\u043E\u043D\u044F\u0435\u0442\u0441\u044F."},{id:"iskra",name:"\u0418\u0441\u043A\u0440\u0430",num:3,color:"#f5c518",accent:"#16181d",suit:"#2a2a2a",stats:{speed:2,accel:5,handling:3,weight:2},bio:"\u0412\u0437\u0440\u044B\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0433\u043E\u043D, \u0431\u044B\u0441\u0442\u0440\u043E \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043E\u0448\u0438\u0431\u043E\u043A."},{id:"grom",name:"\u0413\u0440\u043E\u043C",num:44,color:"#2e9e4b",accent:"#e8f5e9",suit:"#12321c",stats:{speed:4,accel:2,handling:2,weight:5},bio:"\u0422\u044F\u0436\u0451\u043B\u044B\u0439. \u0412\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442 \u043B\u044E\u0431\u0443\u044E \u0442\u043E\u043B\u043A\u043E\u0442\u043D\u044E \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0435."},{id:"lisa",name:"\u041B\u0438\u0441\u0430",num:11,color:"#f07818",accent:"#ffffff",suit:"#3a1c06",stats:{speed:3,accel:3,handling:5,weight:1},bio:"\u041B\u0443\u0447\u0448\u0438\u0439 \u0437\u0430\u043D\u043E\u0441\u043D\u044B\u0439 \u043A\u0430\u0440\u0442: \u0431\u044B\u0441\u0442\u0440\u043E \u043A\u043E\u043F\u0438\u0442 \u0442\u0443\u0440\u0431\u043E."},{id:"molniya",name:"\u041C\u043E\u043B\u043D\u0438\u044F",num:9,color:"#8b3fd9",accent:"#f0e6ff",suit:"#231036",stats:{speed:4,accel:3,handling:3,weight:2},bio:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0438 \u043B\u0451\u0433\u043A\u0438\u0439, \u043B\u044E\u0431\u0438\u0442 \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u043F\u0440\u044F\u043C\u044B\u0435."},{id:"briz",name:"\u0411\u0440\u0438\u0437",num:16,color:"#11a9c4",accent:"#ffffff",suit:"#0b2e36",stats:{speed:2,accel:4,handling:4,weight:2},bio:"\u0426\u0435\u043F\u043A\u0438\u0439 \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u0445, \u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u0438."},{id:"titan",name:"\u0422\u0438\u0442\u0430\u043D",num:99,color:"#d8dde3",accent:"#e0322b",suit:"#30353c",stats:{speed:4,accel:3,handling:2,weight:4},bio:"\u041D\u0430\u0434\u0451\u0436\u043D\u044B\u0439 \u0438 \u0442\u044F\u0436\u0451\u043B\u044B\u0439. \u0421\u043B\u043E\u0436\u043D\u043E \u0441\u0431\u0438\u0442\u044C \u0441 \u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u0438."}];function iu(r){return{maxSpeed:25.5+r.speed*.9,accel:9+r.accel*2.2,turnRate:1.95+r.handling*.13,driftCharge:.85+r.handling*.08,mass:.8+r.weight*.14,grassPenalty:.5+r.weight*.02}}var mo={easy:{name:"\u041B\u0451\u0433\u043A\u0438\u0439",speed:.86,corner:.84,drift:.15,items:.35,mistakes:.5,rubber:.08},normal:{name:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439",speed:.95,corner:.93,drift:.55,items:.7,mistakes:.2,rubber:.05},hard:{name:"\u0421\u043B\u043E\u0436\u043D\u044B\u0439",speed:1,corner:1,drift:.9,items:1,mistakes:.05,rubber:.03}},sc=[10,8,6,5,4,3,2,1];var su={day:{skyTop:"#2f7fd6",skyHorizon:"#b9def2",skyBottom:"#dff0f7",sunGlow:"#fff6d8",fog:"#c8e3f1",fogNear:180,fogFar:820,sunColor:"#fff1d6",sunIntensity:2.7,sunDir:[.45,.75,.35],hemiSky:"#cfe6ff",hemiGround:"#5b7a36",hemiIntensity:1.15,ground:"grass",trees:"broadleaf",treeCount:520,mountains:"#86a6bd",mountains2:"#a9c2d2",exposure:1,water:!1,night:!1,clouds:14,cloudColor:"#ffffff",asphalt:[58,60,64],barrierStyle:"boards"},sunset:{skyTop:"#3b3a7a",skyHorizon:"#ff9a5c",skyBottom:"#ffc58a",sunGlow:"#ffd08a",fog:"#e9a27a",fogNear:170,fogFar:760,sunColor:"#ffb070",sunIntensity:2.4,sunDir:[-.7,.28,-.35],hemiSky:"#ffc49a",hemiGround:"#8a6a4a",hemiIntensity:1,ground:"sand",trees:"palm",treeCount:170,mountains:"#6b4f6e",mountains2:"#9a6a78",exposure:1.05,water:!0,night:!1,clouds:10,cloudColor:"#ffd6c0",asphalt:[62,58,58],barrierStyle:"boards"},night:{skyTop:"#05060f",skyHorizon:"#1b1840",skyBottom:"#2a1f4a",sunGlow:"#6b5cff",fog:"#120f2a",fogNear:120,fogFar:600,sunColor:"#8fa2ff",sunIntensity:.9,sunDir:[.3,.8,-.4],hemiSky:"#5d6bb8",hemiGround:"#1a1426",hemiIntensity:.75,ground:"city",trees:"none",treeCount:0,mountains:null,exposure:1.1,water:!1,night:!0,clouds:0,cloudColor:"#ffffff",asphalt:[44,46,54],barrierStyle:"neon"}},ru=7;var Yt=(r,t,e)=>r<t?t:r>e?e:r,zs=(r,t,e)=>r+(t-r)*e,Fe=(r,t,e,n)=>zs(r,t,1-Math.exp(-e*n));function cs(r){for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return r}var go=(r,t,e,n)=>r+cs(t-r)*(1-Math.exp(-e*n));function ke(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function He(r){if(r==null||!isFinite(r))return"\u2013:\u2013\u2013.\u2013\u2013\u2013";let t=r<0;r=Math.abs(r);let e=Math.floor(r/60),n=r-e*60,i=e+":"+(n<10?"0":"")+n.toFixed(3);return t?"-"+i:i}function rc(r){return r==null||!isFinite(r)?"":(r>=0?"+":"\u2212")+Math.abs(r).toFixed(2)}function ou(r){r.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){let e=Array.isArray(t.material)?t.material:[t.material];for(let n of e){for(let i in n){let s=n[i];s&&s.isTexture&&!s.userData.shared&&s.dispose()}n.dispose()}}})}var hs=()=>typeof window!="undefined"&&("ontouchstart"in window||navigator.maxTouchPoints>0)&&matchMedia("(pointer: coarse)").matches;var lu=4;function cu(r){lu=r}function $e(r,t){let e=document.createElement("canvas");return e.width=r,e.height=t,[e,e.getContext("2d")]}function Je(r,{repeat:t=!0,srgb:e=!0,aniso:n=!0}={}){let i=new ns(r);return t&&(i.wrapS=i.wrapT=As),e&&(i.colorSpace=Te),n&&(i.anisotropy=lu),i.needsUpdate=!0,i}function ri(r,t,e,n,i=1,s=1){let o=r.getImageData(0,0,t,e),a=ke(i),l=o.data;for(let c=0;c<l.length;c+=4){let h=(a()-.5)*n;l[c]+=h,l[c+1]+=h,l[c+2]+=h,l[c+3]=l[c+3]*s}r.putImageData(o,0,0)}function hu(r,t=!1){let[i,s]=$e(512,512);s.fillStyle=`rgb(${r[0]},${r[1]},${r[2]})`,s.fillRect(0,0,512,512);let o=ke(7);for(let c=0;c<90;c++){let h=o()*512,u=o()*512,f=10+o()*60,d=s.createRadialGradient(h,u,0,h,u,f),g=o()<.5?0:255;d.addColorStop(0,`rgba(${g},${g},${g},${.03+o()*.04})`),d.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=d,s.fillRect(h-f,u-f,f*2,f*2)}let a=s.createLinearGradient(0,0,512,0);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(.35,"rgba(0,0,0,0.10)"),a.addColorStop(.5,"rgba(0,0,0,0.04)"),a.addColorStop(.65,"rgba(0,0,0,0.10)"),a.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=a,s.fillRect(0,0,512,512),ri(s,512,512,34,3),s.strokeStyle="rgba(20,20,20,0.35)",s.lineWidth=1;for(let c=0;c<14;c++){let h=o()*512,u=o()*512;s.beginPath(),s.moveTo(h,u);for(let f=0;f<6;f++)h+=(o()-.5)*30,u+=o()*22,s.lineTo(h,u);s.stroke()}let l=t?"rgba(235,235,255,0.92)":"rgba(242,242,236,0.95)";return s.fillStyle=l,s.fillRect(512*.018,0,512*.02,512),s.fillRect(512*(1-.038),0,512*.02,512),ri(s,512,512,10,5),Je(i)}function xo(r){let[n,i]=$e(512,512),s=ke(r.length*31);if(r==="grass"){i.fillStyle="#5a9a36",i.fillRect(0,0,512,512);for(let o=0;o<4;o++)i.fillStyle=o%2?"rgba(255,255,220,0.07)":"rgba(0,40,0,0.06)",i.fillRect(0,o*512/4,512,512/4);for(let o=0;o<3500;o++){let a=s()*512,l=s()*512,c=110+s()*80;i.fillStyle=`rgba(${40+s()*50},${c},${20+s()*30},${.25+s()*.35})`,i.fillRect(a,l,1+s()*2,2+s()*4)}for(let o=0;o<40;o++){let a=s()*512,l=s()*512,c=20+s()*50,h=i.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,`rgba(${s()<.5?"120,110,40":"20,70,20"},0.12)`),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(a-c,l-c,c*2,c*2)}ri(i,512,512,18,11)}else if(r==="sand"){i.fillStyle="#d8b98a",i.fillRect(0,0,512,512);for(let o=0;o<60;o++){let a=s()*512,l=s()*512,c=20+s()*70,h=i.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,`rgba(${s()<.5?"255,235,200":"150,110,70"},0.15)`),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(a-c,l-c,c*2,c*2)}i.strokeStyle="rgba(120,90,50,0.10)";for(let o=0;o<512;o+=9){i.beginPath();for(let a=0;a<=512;a+=16)i.lineTo(a,o+Math.sin(a*.05+o)*3);i.stroke()}ri(i,512,512,26,13)}else if(r==="city"){i.fillStyle="#23222c",i.fillRect(0,0,512,512);let o=64;for(let a=0;a<512;a+=o)for(let l=0;l<512;l+=o){let c=30+s()*12;i.fillStyle=`rgb(${c},${c},${c+8})`,i.fillRect(l+2,a+2,o-4,o-4)}ri(i,512,512,20,17)}else if(r==="runoff-grass"){i.fillStyle="#4f8f30",i.fillRect(0,0,512,512);for(let o=0;o<3e3;o++)i.fillStyle=`rgba(${40+s()*40},${100+s()*80},${20+s()*30},0.4)`,i.fillRect(s()*512,s()*512,1+s()*2,2+s()*4);ri(i,512,512,18,19)}return Je(n)}function uu(r=!1){let[t,e]=$e(64,256);e.fillStyle=r?"#ff2d6f":"#d42a22",e.fillRect(0,0,64,128),e.fillStyle=r?"#e8ecff":"#f2f2f2",e.fillRect(0,128,64,128);let n=e.createLinearGradient(0,0,64,0);return n.addColorStop(0,"rgba(0,0,0,0.25)"),n.addColorStop(.3,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,0.1)"),e.fillStyle=n,e.fillRect(0,0,64,256),ri(e,64,256,16,23),Je(t)}var au=[["\u0410\u041F\u0415\u041A\u0421","#ffd000","#15171c"],["\u0422\u0423\u0420\u0411\u041E\u2022\u041C\u0410\u0421\u041B\u041E","#e0322b","#ffffff"],["\u0428\u0418\u041D\u042B \u0413\u0420\u0418\u041F","#15171c","#ffd000"],["\u041A\u0410\u0420\u0422-\u041A\u041B\u0423\u0411 7","#1f6fe0","#ffffff"],["\u0420\u0415\u0417\u0418\u041D\u0410","#ffffff","#15171c"],["\u041D\u0418\u0422\u0420\u041E","#2e9e4b","#ffffff"],["\u041F\u0418\u0422-\u0421\u0422\u041E\u041F","#f07818","#15171c"],["\u041B\u0418\u041D\u0418\u042F \u0410\u041F\u0415\u041A\u0421\u0410","#8b3fd9","#ffffff"]];function du(r){let[n,i]=$e(2048,128),s=au.length,o=2048/s;for(let a=0;a<s;a++){let[l,c,h]=au[a];r==="neon"?(i.fillStyle="#0c0b16",i.fillRect(a*o,0,o,128),i.fillStyle=a%2?"#ff2d9a":"#23e1ff",i.fillRect(a*o,6,o,5),i.fillRect(a*o,117,o,5),i.font='800 54px "Unbounded", "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor=a%2?"#ff2d9a":"#23e1ff",i.shadowBlur=16,i.fillStyle="#ffffff",i.fillText(l,a*o+o/2,128/2+3,o-30),i.shadowBlur=0):(i.fillStyle=c,i.fillRect(a*o,0,o,128),i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(a*o+o-3,0,3,128),i.font='800 56px "Unbounded", "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillStyle=h,i.fillText(l,a*o+o/2,128/2+3,o-36))}return Je(n)}function fu(){let[r,t]=$e(256,64),e=32;for(let n=0;n<2;n++)for(let i=0;i<8;i++)t.fillStyle=(i+n)%2?"#111":"#f4f4f4",t.fillRect(i*e,n*e,e,e);return ri(t,256,64,18,29),Je(r)}function pu(){let[r,t]=$e(128,256);t.clearRect(0,0,128,256),t.fillStyle="rgba(20,10,0,0.55)",t.fillRect(0,0,128,256);for(let e=0;e<2;e++){let n=40+e*128;t.beginPath(),t.moveTo(14,n+60),t.lineTo(64,n),t.lineTo(114,n+60),t.lineTo(114,n+92),t.lineTo(64,n+32),t.lineTo(14,n+92),t.closePath();let i=t.createLinearGradient(0,n,0,n+92);i.addColorStop(0,"#fff6b0"),i.addColorStop(1,"#ff8a00"),t.fillStyle=i,t.fill()}return Je(r)}function mu(){let[r,t]=$e(128,128),e=t.createLinearGradient(0,0,128,128);return e.addColorStop(0,"rgba(255,90,200,0.9)"),e.addColorStop(.5,"rgba(90,200,255,0.9)"),e.addColorStop(1,"rgba(255,230,90,0.9)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.fillStyle="rgba(255,255,255,0.18)",t.fillRect(8,8,112,112),t.strokeStyle="rgba(255,255,255,0.95)",t.lineWidth=8,t.strokeRect(6,6,116,116),t.font='900 84px "Unbounded", "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#fff",t.shadowColor="rgba(0,0,0,0.5)",t.shadowBlur=8,t.fillText("?",64,70),Je(r,{repeat:!1})}function gu(r,t,e){let[n,i]=$e(128,96);return i.fillStyle=t,i.fillRect(0,0,128,96),i.fillStyle=e,i.font='900 70px "Unbounded", "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(String(r),64,52,116),Je(n,{repeat:!1})}function xu(r){let[t,e]=$e(128,256);e.fillStyle="#0c0d18",e.fillRect(0,0,128,256);let n=ke(r),i=["#ffd98a","#9fd8ff","#ffb3e6","#fff3c4"];for(let s=6;s<256;s+=14)for(let o=6;o<128;o+=14)n()<.3&&(e.fillStyle=i[Math.floor(n()*i.length)],e.globalAlpha=.35+n()*.45,e.fillRect(o,s,8,9));return e.globalAlpha=1,Je(t)}function _u(){let[r,t]=$e(256,128),e=ke(41);for(let n=0;n<18;n++){let i=40+e()*176,s=50+e()*40,o=22+e()*34,a=t.createRadialGradient(i,s,0,i,s,o);a.addColorStop(0,"rgba(255,255,255,0.55)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(i-o,s-o,o*2,o*2)}return Je(r,{repeat:!1})}function vu(){let[r,t]=$e(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Je(r,{repeat:!1,srgb:!1})}function yu(){let[r,t]=$e(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Je(r,{repeat:!1})}function Mu(){let[e,n]=$e(512,128);n.fillStyle="#2b2f38",n.fillRect(0,0,512,128);let i=ke(77),s=["#e0322b","#ffd000","#1f6fe0","#ffffff","#2e9e4b","#f07818","#8b3fd9","#11a9c4","#222"];for(let o=0;o<4;o++)for(let a=4;a<512;a+=10+i()*4){let l=12+o*30+i()*4;n.fillStyle=s[Math.floor(i()*s.length)],n.fillRect(a,l+8,8,14),n.fillStyle=["#f1c9a5","#c68e5d","#8a5a3b","#f5d7bd"][Math.floor(i()*4)],n.beginPath(),n.arc(a+4,l+5,4,0,Math.PI*2),n.fill()}return Je(e)}function oi(r,t,{vRepeat:e=10,uA:n=0,uB:i=1,from:s=0,to:o=null,wall:a=!1,flipU:l=!1}={}){let c=r.N,h=[],u=[],f=[],d=o===null?c:o-s;for(let x=0;x<=d;x++){let m=(s+x)%c,[p,_,y,v]=t(m),R=r.px[m],T=r.pz[m],E=r.nx[m],C=r.nz[m];h.push(R+E*p,_,T+C*p,R+E*y,v,T+C*y);let b=(s+x)*r.ds;if(a){let M=(l?-b:b)/e;u.push(M,0,M,1)}else u.push(n,b/e,i,b/e)}for(let x=0;x<d;x++){let m=x*2,p=m+1,_=m+2,y=m+3;f.push(m,p,_,p,y,_)}let g=new ne;return g.setAttribute("position",new Bt(h,3)),g.setAttribute("uv",new Bt(u,2)),g.setIndex(f),g.computeVertexNormals(),g}function Bn(r,t,e,n,i=0){let s=t.pointAt(t.wrapS(e),n);r.position.set(s.x,s.y+i,s.z);let o=t.idx(Math.round(e/t.ds));return r.rotation.set(-Math.atan(t.slope[o]),t.headingAt(t.wrapS(e)),0,"YXZ"),r}function bu(r,t,e){let n=new ge,i=r.N,s=r.half,o=r.barrier,a=e!=="low",l=hu(t.asphalt,t.night),c=new pt(oi(r,rt=>[-s,r.py[rt],s,r.py[rt]],{vRepeat:14}),new kt({map:l,roughness:t.night?.6:.88,metalness:0}));c.receiveShadow=a,n.add(c);let h=t.ground==="grass"?"runoff-grass":t.ground,u=xo(h),f=new kt({map:u,roughness:1,color:t.ground==="city"?10132136:16777215});for(let rt of[-1,1]){let B=oi(r,et=>rt<0?[-o-.3,r.py[et]-.01,-s,r.py[et]-.01]:[s,r.py[et]-.01,o+.3,r.py[et]-.01],{vRepeat:10,uA:0,uB:(o-s)/10}),q=new pt(B,f);q.receiveShadow=a,n.add(q)}let d=new kt({map:u,roughness:1,color:t.ground==="city"?7829386:14540253}),g=0;for(let rt=0;rt<i;rt++)g=Math.max(g,r.py[rt]);if(g>.3)for(let rt of[-1,1]){let B=oi(r,et=>{let ot=r.py[et],St=1.5+ot*1.8;return rt<0?[-o-.3-St,-.25,-o-.3,ot-.01]:[o+.3,ot-.01,o+.3+St,-.25]},{vRepeat:10}),q=new pt(B,d);q.receiveShadow=a,n.add(q)}let x=uu(t.night),m=new kt({map:x,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),p=new Uint8Array(i);for(let rt=0;rt<i;rt++)if(Math.abs(r.curv[rt])>1/55)for(let B=-10;B<=10;B++)p[(rt+B+i)%i]=1;let _=[],y=p.indexOf(0);if(y<0)_.push([0,i]);else{let rt=0;for(;rt<i;){let B=(y+rt)%i;if(p[B]){let q=0;for(;rt+q<i&&p[(y+rt+q)%i];)q++;_.push([B,q]),rt+=q}else rt++}}for(let[rt,B]of _)if(!(B<4))for(let q of[-1,1]){let et=oi(r,St=>{let vt=r.py[St];return q<0?[-s-1.1,vt+.025,-s+.35,vt+.045]:[s-.35,vt+.045,s+1.1,vt+.025]},{from:rt,to:rt+B,vRepeat:3}),ot=new pt(et,m);ot.receiveShadow=a,n.add(ot)}let v=du(t.barrierStyle),R=new kt({map:v,roughness:.6,side:Be,emissive:t.night?16777215:0,emissiveMap:t.night?v:null,emissiveIntensity:t.night?.9:0}),T=new kt({color:t.night?1710630:15263976,roughness:.5}),E=new kt({color:2764083,roughness:.6}),C=1;for(let rt of[-1,1]){let B=rt*(o+.15),q=oi(r,vt=>[B,r.py[vt]-.3,B,r.py[vt]+C],{vRepeat:32,wall:!0,flipU:rt>0}),et=new pt(q,R);et.castShadow=a,et.receiveShadow=a,n.add(et);let ot=oi(r,vt=>rt<0?[B-.35,r.py[vt]+C,B+.05,r.py[vt]+C]:[B-.05,r.py[vt]+C,B+.35,r.py[vt]+C],{vRepeat:10});n.add(new pt(ot,T));let St=oi(r,vt=>[B+rt*.3,r.py[vt]-.3,B+rt*.3,r.py[vt]+C],{vRepeat:10,wall:!0});n.add(new pt(St,E))}if(t.night)for(let rt of[-1,1]){let B=rt*(o+.15),q=oi(r,et=>rt<0?[B-.06,r.py[et]+C+.02,B+.06,r.py[et]+C+.02]:[B-.06,r.py[et]+C+.02,B+.06,r.py[et]+C+.02],{vRepeat:10});n.add(new pt(q,new te({color:rt<0?16723354:2351615})))}let b=new pt(new ye(r.roadWidth,2.2).rotateX(-Math.PI/2),new kt({map:fu(),roughness:.8,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}));b.material.map.repeat.set(r.roadWidth/8,1),Bn(b,r,0,0,.012),b.receiveShadow=a,n.add(b);let M=new te({color:15790320,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});for(let rt=0;rt<8;rt++){let{s:B,d:q}=oc(r,rt),et=new pt(new ye(2,.18).rotateX(-Math.PI/2),M);Bn(et,r,B+1.6,q,.012),n.add(et);for(let ot of[-1,1]){let St=new pt(new ye(.16,.9).rotateX(-Math.PI/2),M);Bn(St,r,B+1.2,q+ot*.92,.012),n.add(St)}}let I=new ge,O=new kt({color:t.night?2236974:3159100,roughness:.5,metalness:.4}),L=o+1.2;for(let rt of[-1,1]){let B=new pt(new ue(.6,7,.6),O);B.position.set(rt*L,3.5,0),B.castShadow=a,I.add(B)}let H=new pt(new ue(L*2+.6,1.4,.7),O);H.position.set(0,6.6,0),H.castShadow=a,I.add(H);let Y=new pt(new ye(L*1.2,1.1),new te({map:Ng(),toneMapped:!1}));Y.position.set(0,6.6,-.36),Y.rotation.y=Math.PI;let W=Y.clone();W.position.z=.36,W.rotation.y=0,I.add(Y,W);let J=new pt(new ue(4.2,1.1,.4),new kt({color:723725,roughness:.4}));J.position.set(0,5.35,-.1),I.add(J);let z=[],$=new ni(.22,16);for(let rt=0;rt<5;rt++){let B=new te({color:2229252,toneMapped:!1});z.push(B);for(let q=0;q<2;q++){let et=new pt($,B);et.position.set(-1.6+rt*.8,5.6-q*.5,-.31),et.rotation.y=Math.PI,I.add(et)}}Bn(I,r,0,0,0),I.rotation.x=0,n.add(I);let tt=[],at=pu(),At=new te({map:at,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-3});at.repeat.set(1,2);for(let[rt,B]of r.def.boostPads||[]){let q=rt*r.length,et=new pt(new ye(3.4,6).rotateX(-Math.PI/2).rotateY(Math.PI),At);Bn(et,r,q,B,.02),et.renderOrder=1,n.add(et),tt.push({s:q,d:B,len:6,w:3.4})}return{group:n,pads:tt,setLights(rt,B=!1){z.forEach((q,et)=>{B?q.color.set(1703770):q.color.set(et<rt?16718354:2229252)})},update(rt){at.offset.y-=rt*1.6}}}function oc(r,t){let e=Math.floor(t/2),n=t%2===0?-1:1;return{s:r.wrapS(-6-e*ru-t%2*3.5),d:n*2.6}}function Ng(){let r=document.createElement("canvas");r.width=1024,r.height=96;let t=r.getContext("2d");t.fillStyle="#15171c",t.fillRect(0,0,1024,96);let e=24;for(let i=0;i<4;i++)for(let s=0;s<6;s++)t.fillStyle=(s+i)%2?"#f4f4f4":"#15171c",t.fillRect(s*e,i*e,e,e),t.fillRect(1024-(s+1)*e,i*e,e,e);t.fillStyle="#ffd000",t.font='900 58px "Unbounded", "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("\u0421\u0422\u0410\u0420\u0422 \u2022 \u0424\u0418\u041D\u0418\u0428",512,52,760);let n=new ns(r);return n.colorSpace=Te,n}function ks(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new ne,c=0;for(let h=0;h<r.length;++h){let u=r[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=r[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Su(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=Su(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Su(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new xe(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var Fg=`
varying vec3 vDir;
void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,Og=`
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
}`,Bg=`
varying vec3 vW;
void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,zg=`
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
}`;function wu(r,t,e,n){let i={updaters:[]},s=n!=="low",o=ke(t.def.id.length*977+t.N);r.background=new _t(e.fog),r.fog=new kr(e.fog,e.fogNear,e.fogFar);let a=new P(...e.sunDir).normalize(),l=new pt(new dn(1500,32,16),new re({vertexShader:Fg,fragmentShader:Og,side:Le,depthWrite:!1,fog:!1,uniforms:{top:{value:new _t(e.skyTop)},horizon:{value:new _t(e.skyHorizon)},bottom:{value:new _t(e.skyBottom)},glow:{value:new _t(e.sunGlow)},sunDir:{value:a},stars:{value:e.night?1:0}}}));l.renderOrder=-10,l.frustumCulled=!1,r.add(l),i.sky=l;let c=new to(e.hemiSky,e.hemiGround,e.hemiIntensity);r.add(c);let h=new eo(e.sunColor,e.sunIntensity);if(h.position.copy(a).multiplyScalar(150),s){h.castShadow=!0;let y=n==="high"?2048:1024;h.shadow.mapSize.set(y,y);let v=h.shadow.camera;v.left=-55,v.right=55,v.top=55,v.bottom=-55,v.near=10,v.far=400,h.shadow.bias=-4e-4,h.shadow.normalBias=.03}r.add(h,h.target),i.sun=h,i.sunDir=a;let u=t.bounds(0),f=(u.minX+u.maxX)/2,d=(u.minZ+u.maxZ)/2,g=(u.maxX-u.minX)/2,x=(u.maxZ-u.minZ)/2;i.center=new P(f,0,d),i.radius=Math.max(g,x);let m=xo(e.ground);if(e.water){let y=new pt(new ni(1,96).rotateX(-Math.PI/2),new kt({map:m,roughness:1})),v=g+70,R=x+70;y.scale.set(v,1,R),y.position.set(f,-.02,d),m.repeat.set(v/12,R/12),y.receiveShadow=s,r.add(y);let T=new pt(new Jr(.97,1.06,96).rotateX(-Math.PI/2),new kt({color:11044962,roughness:.4}));T.scale.set(v,1,R),T.position.set(f,-.08,d),r.add(T);let E=new pt(new ye(4e3,4e3).rotateX(-Math.PI/2),new re({vertexShader:Bg,fragmentShader:zg,uniforms:{time:{value:0},deep:{value:new _t("#1d4b6b")},shallow:{value:new _t("#2f8a9a")},skyTop:{value:new _t(e.skyTop)},skyHor:{value:new _t(e.skyHorizon)},sunDir:{value:a},sunCol:{value:new _t(e.sunGlow)},fogColor:{value:new _t(e.fog)},fogNear:{value:e.fogNear},fogFar:{value:e.fogFar}}}));E.position.set(f,-.35,d),r.add(E),i.updaters.push((C,b)=>{E.material.uniforms.time.value=b}),i.islandRx=v,i.islandRz=R}else{let y=new pt(new ye(3e3,3e3).rotateX(-Math.PI/2),new kt({map:m,roughness:1}));m.repeat.set(3e3/18,3e3/18),y.position.set(f,-.03,d),y.receiveShadow=s,r.add(y)}if(e.mountains){let y=(T,E,C,b,M)=>{let I=ke(M),O=160,L=[],H=[];for(let z=0;z<=O;z++){let $=z/O*Math.PI*2,tt=E+Math.sin($*3+M)*C*.3+Math.sin($*7+M*2)*C*.25+I()*C*.45;H.push(tt)}H[O]=H[0];let Y=[];for(let z=0;z<=O;z++){let $=z/O*Math.PI*2,tt=f+Math.cos($)*T,at=d+Math.sin($)*T;L.push(tt,-20,at,tt,H[z],at)}for(let z=0;z<O;z++){let $=z*2;Y.push($,$+2,$+1,$+1,$+2,$+3)}let W=new ne;W.setAttribute("position",new Bt(L,3)),W.setIndex(Y);let J=new pt(W,new te({color:b,side:Be,fog:!0}));return J.renderOrder=-5,J},v=y(1150,110,160,e.mountains2,3);v.material.fog=!1,v.material.color.lerp(new _t(e.skyHorizon),.35),r.add(v);let R=y(780,40,90,e.mountains,11);R.material.fog=!1,R.material.color.lerp(new _t(e.fog),.2),r.add(R)}if(e.clouds){let y=_u();for(let v=0;v<e.clouds;v++){let R=new Ps({map:y,color:e.cloudColor,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}),T=new Vr(R),E=o()*Math.PI*2,C=350+o()*650;T.position.set(f+Math.cos(E)*C,120+o()*160,d+Math.sin(E)*C);let b=140+o()*180;T.scale.set(b,b*.45,1),T.renderOrder=-4,r.add(T);let M=1+o()*2;i.updaters.push(I=>{T.position.x+=M*I})}}let p=(y,v,R)=>t.distToCenter(y,v,3)>t.barrier+R,_=(y,v)=>1.5+t.project(y,v,-1).y*1.8;if(i.stands=Hg(r,t,e,s,o),e.trees!=="none"&&e.treeCount){let y=Math.round(e.treeCount*(n==="low"?.5:1)),v=[],R=0;for(;v.length<y&&R<y*30;){R++;let T,E;if(e.water){let b=o()*Math.PI*2,M=Math.sqrt(o())*.95;T=f+Math.cos(b)*M*(i.islandRx-8),E=d+Math.sin(b)*M*(i.islandRz-8)}else if(T=f+(o()*2-1)*(g+260),E=d+(o()*2-1)*(x+260),Math.sin(T*.021)*Math.cos(E*.017)+Math.sin((T+E)*.011)<-.2&&o()<.8)continue;let C=t.distToCenter(T,E,3);C<t.barrier+5||C<t.barrier+_(T,E)+4||i.stands&&i.stands.box.distanceToPoint(new P(T,1,E))<6||v.push([T,E])}kg(r,v,e.trees,s&&n==="high",o)}return e.night&&Vg(r,t,e,o,p,i,n),i.follow=y=>{h.position.set(y.x+a.x*150,y.y+a.y*150,y.z+a.z*150),h.target.position.copy(y),l.position.copy(y)},i}function kg(r,t,e,n,i){let s=new ve;if(e==="palm"){let f=new Re(.18,.28,7,7,6);f.translate(0,3.5,0);let d=f.attributes.position;for(let y=0;y<d.count;y++){let v=d.getY(y);d.setX(y,d.getX(y)+(v/7)**2*1.2)}f.computeVertexNormals();let g=[];for(let y=0;y<7;y++){let v=new un(.55,3.8,4,1);v.scale(1,1,.18),v.rotateZ(-Math.PI/2-.35),v.translate(1.7,-.3,0),v.rotateY(y/7*Math.PI*2),v.translate(1.2,7,0),g.push(v)}let x=ks(g),m=new Sn(f,new kt({color:9071176,roughness:.9}),t.length),p=new Sn(x,new kt({color:16777215,roughness:.8,flatShading:!0}),t.length),_=new _t;t.forEach(([y,v],R)=>{let T=.8+i()*.5;s.position.set(y,0,v),s.rotation.set(0,i()*Math.PI*2,0),s.scale.set(T,T,T),s.updateMatrix(),m.setMatrixAt(R,s.matrix),p.setMatrixAt(R,s.matrix),_.setHSL(.25+i()*.08,.5,.28+i()*.1),p.setColorAt(R,_)}),m.castShadow=p.castShadow=n,r.add(m,p);return}let o=e==="pine",a=new Re(.22,.32,2.4,6).translate(0,1.2,0),l;if(o)l=ks([new un(2.2,3.5,7).translate(0,3.4,0),new un(1.7,3,7).translate(0,5,0),new un(1.1,2.4,7).translate(0,6.4,0)]);else{let f=new ss(2.1,1).translate(0,4,0),d=new ss(1.5,1).translate(.9,4.9,.4),g=new ss(1.4,1).translate(-.8,4.6,-.5);l=ks([f,d,g])}let c=new Sn(a,new kt({color:7031343,roughness:1}),t.length),h=new Sn(l,new kt({color:16777215,roughness:.85,flatShading:!0}),t.length),u=new _t;t.forEach(([f,d],g)=>{let x=.75+i()*.75;s.position.set(f,0,d),s.rotation.set(0,i()*Math.PI*2,0),s.scale.set(x,x*(.85+i()*.4),x),s.updateMatrix(),c.setMatrixAt(g,s.matrix),h.setMatrixAt(g,s.matrix),i()<.12?u.setHSL(.08+i()*.05,.65,.42):u.setHSL(.24+i()*.1,.45+i()*.2,.26+i()*.12),h.setColorAt(g,u)}),c.castShadow=h.castShadow=n,r.add(c,h)}function Hg(r,t,e,n,i){let s=t.wrapS(-25),o=1;for(let m of[1,-1]){let p=t.pointAt(s,m*(t.barrier+14));if(t.distToCenter(p.x,p.z,2)>t.barrier+8){o=m;break}}let a=new ge,l=46,c=5,h=new kt({color:e.night?2763322:10134445,roughness:.8}),u=Mu();u.repeat.set(l/12,1);let f=new kt({map:u,roughness:.9,emissive:e.night?16777215:0,emissiveMap:e.night?u:null,emissiveIntensity:e.night?.25:0});for(let m=0;m<c;m++){let p=new pt(new ue(l,.6+m*.8,1.6),h);p.position.set(0,(.6+m*.8)/2,m*1.6),p.castShadow=n,p.receiveShadow=n,a.add(p);let _=new pt(new ye(l,1.1),f);_.position.set(0,.6+m*.8+.5,m*1.6-.2),_.rotation.y=Math.PI,a.add(_)}let d=new pt(new ue(l+2,.3,9.5),new kt({color:e.night?1315871:15263978,roughness:.6}));d.position.set(0,8,3.2),d.rotation.x=-.06,d.castShadow=n,a.add(d);for(let m=-2;m<=2;m++){let p=new pt(new ue(.3,8,.3),h);p.position.set(m*(l/4.4),4,7.6),a.add(p)}let g=["#e0322b","#ffd000","#1f6fe0","#2e9e4b","#ffffff","#8b3fd9"];for(let m=0;m<8;m++){let p=new pt(new Re(.04,.04,3),new kt({color:13421772,metalness:.8,roughness:.3}));p.position.set(-l/2+3+m*((l-6)/7),9.6,0),a.add(p);let _=new pt(new ye(1.4,.9),new kt({color:g[m%g.length],side:Be,roughness:.8}));_.position.set(p.position.x+.72,10.6,0),a.add(_)}Bn(a,t,s,o*(t.barrier+3),0),a.position.y=Math.max(0,a.position.y-.3),a.rotation.x=0,a.rotation.y+=o>0?-Math.PI/2:Math.PI/2,r.add(a),a.updateMatrixWorld(!0);let x=new hn().setFromObject(a);return{group:a,box:x}}function Vg(r,t,e,n,i,s,o){let a=t.bounds(0),l=[],c=o==="low"?200:420;for(let _=0;_<c;_++){let y=a.minX-120+n()*(a.maxX-a.minX+240),v=a.minZ-120+n()*(a.maxZ-a.minZ+240),R=10+n()*18,T=10+n()*18,C=y>a.minX+20&&y<a.maxX-20&&v>a.minZ+20&&v<a.maxZ-20?6+n()*16:14+n()*60;if(!i(y,v,Math.max(R,T)*.75+16)||s.stands&&s.stands.box.distanceToPoint(new P(y,1,v))<Math.max(R,T))continue;let b=new ue(R,C,T),M=b.attributes.uv,I=b.attributes.normal;for(let O=0;O<M.count;O++){let L=Math.abs(I.getY(O)),H=Math.abs(I.getX(O))>.5?T:R;if(L>.5){M.setXY(O,.01,.99);continue}M.setXY(O,M.getX(O)*H/12,M.getY(O)*C/24)}b.translate(y,C/2,v),l.push(b)}if(l.length){let _=xu(5),y=new pt(ks(l),new kt({map:_,emissive:16777215,emissiveMap:_,emissiveIntensity:.55,roughness:.7,color:5921392}));r.add(y)}let h=new Re(.1,.14,7,6).translate(0,3.5,0),u=new ue(1.6,.18,.45).translate(0,7,0),f=[];for(let _=0;_<t.length;_+=34){let y=Math.floor(_/34)%2?1:-1;f.push([_,y])}let d=new Sn(h,new kt({color:2829622,roughness:.5,metalness:.6}),f.length),g=new Sn(u,new te({color:16773320}),f.length),x=yu(),m=new Sn(new ye(1,1).rotateX(-Math.PI/2),new te({map:x,color:16767400,transparent:!0,opacity:.16,blending:qe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-4}),f.length);m.renderOrder=1;let p=new ve;f.forEach(([_,y],v)=>{let R=t.pointAt(_,y*(t.barrier+1.2)),T=t.headingAt(_);p.position.copy(R),p.rotation.set(0,T,0),p.scale.set(1,1,1),p.updateMatrix(),d.setMatrixAt(v,p.matrix),p.position.copy(t.pointAt(_,y*(t.barrier-.2))),p.rotation.set(0,T+Math.PI/2,0),p.updateMatrix(),g.setMatrixAt(v,p.matrix);let E=t.pointAt(_,y*(t.half-1.5));p.position.set(E.x,E.y+.03,E.z),p.rotation.set(0,T,0),p.scale.set(13,1,13),p.updateMatrix(),m.setMatrixAt(v,p.matrix)}),r.add(d,g,m)}var Hs=new P;function nn(r,t,e,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Hs.copy(t),Hs[n]=0,Hs.normalize();let c=.5*o/(o+a),h=1-Hs.angleTo(r)/l;return Math.sign(Hs[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ai=class extends ue{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new P,l=new P,c=new P(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new P,x=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*s,h[m+1]=c.y*Math.sign(a.y)+l.y*s,h[m+2]=c.z*Math.sign(a.z)+l.z*s,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=nn(g,l,"z","y",s,n),f[p+1]=1-nn(g,l,"y","z",s,e);break;case 1:g.set(-1,0,0),f[p+0]=1-nn(g,l,"z","y",s,n),f[p+1]=1-nn(g,l,"y","z",s,e);break;case 2:g.set(0,1,0),f[p+0]=1-nn(g,l,"x","z",s,t),f[p+1]=nn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),f[p+0]=1-nn(g,l,"x","z",s,t),f[p+1]=1-nn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),f[p+0]=1-nn(g,l,"x","y",s,t),f[p+1]=1-nn(g,l,"y","x",s,e);break;case 5:g.set(0,0,-1),f[p+0]=nn(g,l,"x","y",s,t),f[p+1]=1-nn(g,l,"y","x",s,e);break}}};var _o=null;function Tu(){return _o||(_o={frame:new ue(1.05,.05,1.7),pod:new ai(.26,.2,.95,3,.07),nose:new ai(1.08,.2,.5,3,.08),bumper:new ai(1.3,.13,.16,2,.05),seat:new ai(.44,.46,.42,3,.1),engine:new ai(.3,.3,.36,2,.05),pipe:new Re(.05,.06,.55,10),column:new Re(.022,.022,.42,6),wheelRing:new Ns(.16,.022,6,18),torso:new is(.19,.3,4,10),arm:new is(.06,.34,3,6),leg:new is(.075,.5,3,6),helmet:new dn(.2,18,14),visor:new dn(.203,18,10,-1.1,2.2,1.05,.75),stripe:new Ns(.2,.025,6,20,Math.PI),tireF:new Re(.25,.25,.2,20).rotateZ(Math.PI/2),tireR:new Re(.28,.28,.3,20).rotateZ(Math.PI/2),rimF:new Re(.15,.15,.21,12).rotateZ(Math.PI/2),rimR:new Re(.17,.17,.31,12).rotateZ(Math.PI/2),plate:new ye(.34,.25),flame:new un(.09,.7,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-.35),shield:new dn(1.35,24,16),lamp:new dn(.06,8,6),blob:new ye(2.2,2.8).rotateX(-Math.PI/2)},_o)}var Gg=`
varying vec3 vN; varying vec3 vV;
void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix*viewMatrix*wp; }`,Wg=`
uniform float time; uniform vec3 color; uniform float alpha;
varying vec3 vN; varying vec3 vV;
void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.2); float band = 0.5 + 0.5*sin(vN.y*18.0 - time*6.0);
 gl_FragColor = vec4(color*(0.6+f*1.8), (f*0.9 + band*0.08)*alpha); }`;function lc(r,{ghost:t=!1,night:e=!1,shadows:n=!0}={}){let i=Tu(),s=new ge,o=new ge;s.add(o);let a=(z,$=.5,tt=.1)=>{let at=new kt({color:z,roughness:$,metalness:tt});return t&&(at.transparent=!0,at.opacity=.35,at.depthWrite=!1),at},l={paint:a(r.color,.32,.25),accent:a(r.accent,.4,.1),dark:a("#1b1d21",.7,.2),metal:a("#9aa2ad",.35,.85),tire:a("#161616",.92,0),rim:a("#c9ced6",.3,.9),suit:a(r.suit,.75,0),visor:a("#0d1520",.08,.6),pipe:a("#6f6258",.4,.8)},c=(z,$,tt,at,At,rt=o)=>{let B=new pt(z,$);return B.position.set(tt,at,At),B.castShadow=n&&!t,rt.add(B),B};c(i.frame,l.metal,0,.17,0),c(i.pod,l.paint,.62,.26,-.05),c(i.pod,l.paint,-.62,.26,-.05);let h=c(i.nose,l.paint,0,.3,.86);h.rotation.x=.18;let u=new kt({map:gu(r.num,r.accent,r.color),roughness:.5});t&&(u.transparent=!0,u.opacity=.35);let f=c(i.plate,u,0,.47,.64);f.rotation.x=-.95,f.castShadow=!1,c(i.bumper,l.dark,0,.27,-.98);let d=c(i.seat,l.dark,0,.42,-.28);d.rotation.x=-.28,c(i.engine,l.metal,-.47,.42,-.5);let g=c(i.pipe,l.pipe,-.47,.5,-.84);g.rotation.x=Math.PI/2-.25;let x=c(i.column,l.dark,0,.44,.44);x.rotation.x=-.9;let m=c(i.wheelRing,l.dark,0,.6,.28);m.rotation.x=-.55;let p=c(i.torso,l.suit,0,.74,-.2);p.rotation.x=-.35;let _=new ge;_.position.set(0,1.1,-.1),o.add(_),c(i.helmet,l.paint,0,0,0,_).scale.set(1,1.02,1.08);let v=c(i.visor,l.visor,0,0,0,_);v.rotation.y=0;let R=c(i.stripe,l.accent,0,0,0,_);R.rotation.y=Math.PI/2,c(i.arm,l.suit,.2,.8,.02).rotation.set(1.05,0,-.35),c(i.arm,l.suit,-.2,.8,.02).rotation.set(1.05,0,.35);let C=c(i.leg,l.suit,.13,.4,.26);C.rotation.x=1.35;let b=c(i.leg,l.suit,-.13,.4,.26);b.rotation.x=1.35;let M=[],I=(z,$,tt)=>{let at=new ge;at.position.set(z,tt?.25:.28,$),o.add(at);let At=new ge;at.add(At);let rt=new pt(tt?i.tireF:i.tireR,l.tire);rt.castShadow=n&&!t,At.add(rt);let B=new pt(tt?i.rimF:i.rimR,l.rim);At.add(B);let q=new pt(new ue(tt?.212:.312,.05,.26),l.dark);At.add(q),M.push({pivot:at,spin:At,front:tt,r:tt?.25:.28})};I(.6,.6,!0),I(-.6,.6,!0),I(.64,-.6,!1),I(-.64,-.6,!1);let O=new te({color:16752704,transparent:!0,opacity:.9,blending:qe,depthWrite:!1}),L=new pt(i.flame,O);L.position.set(-.47,.44,-1.1),L.rotation.x=.25,L.visible=!1,o.add(L);let H=new pt(i.flame,O);H.scale.set(1.8,1.8,.6),L.add(H);let Y=new re({vertexShader:Gg,fragmentShader:Wg,uniforms:{time:{value:0},color:{value:new _t("#5fd4ff")},alpha:{value:1}},transparent:!0,depthWrite:!1,blending:qe}),W=new pt(i.shield,Y);W.position.y=.6,W.scale.set(1,.8,1.15),W.visible=!1,s.add(W);let J=null;if(e&&!t){let z=new te({color:16774352});J=[c(i.lamp,z,.35,.33,1.1),c(i.lamp,z,-.35,.33,1.1)];let $=new te({color:16719904});c(i.lamp,$,.5,.3,-1.05),c(i.lamp,$,-.5,.3,-1.05)}return s.userData={body:o,wheels:M,head:_,wheel:m,flame:L,flameMat:O,shield:W,shieldMat:Y,M:l},s}var Xg=[0,.6,1.1,1.7],ac=[[1,1,1],[.35,.7,1],[1,.55,.12],[.8,.35,1]],vo=class{constructor(t,e,{isPlayer:n=!1,index:i=0}={}){if(this.race=t,this.geom=t.geom,this.driver=e,this.name=e.name,this.isPlayer=n,this.index=i,this.p=iu(e.stats),this.mesh=lc(e,{night:t.theme.night,shadows:t.quality!=="low"}),this.ud=this.mesh.userData,t.quality==="low"){let s=new pt(Tu().blob,t.blobMat);s.position.y=.04,s.renderOrder=1,this.mesh.add(s)}this.x=0,this.y=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.vf=0,this.vl=0,this.speed=0,this.steer=0,this.throttleVis=0,this.drifting=!1,this.driftDir=0,this.driftCharge=0,this.driftLevel=0,this.driftArmed=!1,this.hopT=0,this.hopH=.22,this.boostT=0,this.boostPow=0,this.spinT=0,this.spinAng=0,this.spinRate=0,this.shieldT=0,this.stallT=0,this.item=null,this.itemCount=0,this.rouletteT=0,this.rouletteItem=null,this.speedScale=1,this.proj={},this.trackIdx=-1,this.s=0,this.d=0,this.lastS=0,this.onGrass=!1,this.progress=0,this.lapsDone=0,this.lapStart=0,this.lapTimes=[],this.bestLap=1/0,this.finished=!1,this.finishTime=0,this.rank=0,this.wrongT=0,this.pitch=0,this.roll=0,this.visYaw=0,this.wheelRot=0,this.skidPrev=[null,null],this.lastWallHit=0,this.airY=0,this.airV=0,this.lapTrace=[]}place(t,e){let n=this.geom.pointAt(t,e);this.x=n.x,this.z=n.z,this.y=n.y,this.h=this.geom.headingAt(t),this.vx=this.vz=0;let i=this.geom.project(this.x,this.z,-1,null,this.proj);this.trackIdx=i.idx,this.s=i.s,this.d=i.d,this.lastS=i.s,this.progress=this.geom.deltaS(i.s,0),this.syncMesh(0)}respawn(){let t=this.geom.wrapS(this.s),e=Yt(this.d,-this.geom.half+2,this.geom.half-2)*.3,n=this.geom.pointAt(t,e);this.x=n.x,this.z=n.z,this.y=n.y,this.h=this.geom.headingAt(t),this.vx=this.vz=0,this.drifting=!1,this.spinT=0,this.spinAng=0,this.boostT=0,this.skidPrev=[null,null],this.race.fx.burst(this.x,this.y+.8,this.z,.5,.8,1,20,4,.3)}boost(t,e){this.boostT<=0?this.boostPow=e:this.boostPow=Math.max(this.boostPow,e),this.boostT=Math.max(this.boostT,t),this.isPlayer&&this.race.onPlayerBoost(e)}hit(t,e=null){if(this.spinT>0)return!1;if(this.shieldT>0)return this.shieldT=0,this.race.fx.burst(this.x,this.y+.8,this.z,.4,.85,1,30,7,.35),this.race.sound("shieldBreak",this),!1;this.drifting=!1,this.driftCharge=0,this.driftLevel=0,this.boostT=0;let n=t==="rocket";this.spinT=n?1.5:1.15,this.spinRate=(n?13:10)*(Math.random()<.5?-1:1);let i=n?.3:.55;return this.vx*=i,this.vz*=i,n&&(this.airV=5.5),this.race.onKartHit(this,t,e),!0}step(t,e){let n=this.p,i=this.geom,s=this.race.canDrive&&this.spinT<=0,o=s?e.throttle:0,a=s?e.brake:0,l=s?e.steer:0;this.stallT>0&&(this.stallT-=t,o*=.15);let c=Math.sin(this.h),h=Math.cos(this.h),u=-h,f=c,d=this.vx*c+this.vz*h,g=this.vx*u+this.vz*f;this.steer=Fe(this.steer,l,11,t),this.throttleVis=Fe(this.throttleVis,o,8,t);let x=this.boostT>0,m=this.onGrass&&!x,p=n.maxSpeed*this.speedScale;if(m&&(p*=n.grassPenalty),x&&(p*=1+.3*this.boostPow),x)d<p&&(d=Math.min(p,d+(n.accel*1.3+16*this.boostPow)*t)),this.boostT-=t,this.boostT<=0&&(this.boostPow=0);else if(o>.01&&d<p){let J=Math.max(0,d)/p;d=Math.min(p,d+n.accel*o*(1-.8*J*J)*t)}if(d>p&&(d=Fe(d,p,m?2.4:.9,t)),a>.01&&(d>.3?d=Math.max(0,d-30*a*t):d=Math.max(-8,d-11*a*t)),o<=.01&&a<=.01&&!x){let J=(m?9:3.2)*t;d=Math.abs(d)<J?0:d-Math.sign(d)*J}this.spinT>0&&(d=Fe(d,0,1.6,t));let _=Math.abs(d),y=Yt(_/n.maxSpeed,0,1.4);if(s&&e.driftPressed&&_>6&&this.hopT<=0&&!this.drifting&&this.airY<=.01&&(this.hopT=.3,this.driftArmed=!0,this.race.sound("hop",this)),e.drift||(this.driftArmed=!1),this.driftArmed&&s&&!this.drifting&&Math.abs(l)>.3&&_>8&&(this.drifting=!0,this.driftDir=Math.sign(l),this.driftCharge=0,this.driftLevel=0,this.driftArmed=!1),this.drifting)if(!e.drift||_<6||!s||m&&_<9)this.driftLevel>0&&e.drift===!1&&s&&(this.boost(Xg[this.driftLevel],.55+this.driftLevel*.15),this.race.sound("miniturbo",this,this.driftLevel)),this.drifting=!1,this.driftCharge=0,this.driftLevel=0;else{let z=Yt(this.steer*this.driftDir,-1,1);this.driftCharge+=t*n.driftCharge*(.65+.55*Math.max(0,z))*(m?.3:1);let $=this.driftCharge>3?3:this.driftCharge>1.9?2:this.driftCharge>.9?1:0;if($>this.driftLevel){this.driftLevel=$,this.race.sound("driftLevel",this,$);let tt=ac[$];this.race.fx.burst(this.x-c*.9,this.y+.3,this.z-h*.9,tt[0],tt[1],tt[2],14,4,.25)}}let v=Yt(_/5,0,1),R;if(this.drifting){let J=Yt(this.steer*this.driftDir,-1,1);R=this.driftDir*n.turnRate*v*(.55+.45*J)*(1-.16*y*y)}else R=this.steer*n.turnRate*v*(1-.42*y*y),d<0&&(R=-R);m&&(R*=.85),this.h-=R*t;let T=this.drifting?7.5:m?4.5:9,E=Math.hypot(d,g);g*=Math.exp(-T*t);let C=Math.hypot(d,g);d>0&&(d+=(E-C)*(this.drifting?.85:.55)),m&&_>3&&(d-=d*.35*t);let b=Math.sin(this.h),M=Math.cos(this.h),I=-M,O=b;this.vx=b*d+I*g,this.vz=M*d+O*g,this.vf=d,this.vl=g,this.x+=this.vx*t,this.z+=this.vz*t;let L=i.project(this.x,this.z,this.trackIdx,this.y,this.proj);this.trackIdx=L.idx;let H=i.barrier-.9;if(Math.abs(L.d)>H){let J=Math.sign(L.d),z=Math.abs(L.d)-H;this.x-=L.nx*J*z,this.z-=L.nz*J*z;let $=(this.vx*L.nx+this.vz*L.nz)*J;if($>0){this.vx-=L.nx*J*$*1.35,this.vz-=L.nz*J*$*1.35;let tt=Yt(1-$*.035,.55,.985);this.vx*=tt,this.vz*=tt;let at=L.head,At=Math.cos(this.h-at)>=0?at:at+Math.PI;this.h=go(this.h,At,2.5+$*.3,t),$>2.5&&this.race.time-this.lastWallHit>.25&&(this.lastWallHit=this.race.time,this.race.onWallHit(this,$,this.x+L.nx*J*.8,this.z+L.nz*J*.8)),$>6&&this.drifting&&(this.drifting=!1,this.driftCharge=0,this.driftLevel=0)}}this.s=L.s,this.d=L.d,this.onGrass=Math.abs(L.d)>i.half+.35,this.trackHead=L.head,this.slope=L.slope,this.airV-=22*t,this.airY=Math.max(0,this.airY+this.airV*t),this.airY<=0&&(this.airV=0),this.y=L.y;let Y=i.deltaS(L.s,this.lastS);this.lastS=L.s,this.progress+=Y,this.speed=Math.hypot(this.vx,this.vz),Math.cos(this.h-L.head)<-.3&&d>2?this.wrongT+=t:this.wrongT=Math.max(0,this.wrongT-t*2),this.spinT>0&&(this.spinT-=t,this.spinAng+=this.spinRate*t,this.spinT<=0&&(this.spinRate=0)),this.shieldT>0&&(this.shieldT-=t),this.hopT>0&&(this.hopT-=t)}syncMesh(t,e=0){let n=this.ud,i=this.mesh,s=this.hopT>0?Math.sin((1-this.hopT/.3)*Math.PI)*this.hopH:0;i.position.set(this.x,this.y+s+this.airY,this.z);let o=this.drifting?this.driftDir*-.42:0;if(this.visYaw=t?Fe(this.visYaw,o,6,t):o,this.spinT<=0&&this.spinAng!==0){let u=Math.round(this.spinAng/(Math.PI*2))*Math.PI*2;this.spinAng=t?Fe(this.spinAng,u,10,t):u,Math.abs(this.spinAng-u)<.01&&(this.spinAng=0)}i.rotation.set(0,this.h+this.visYaw+this.spinAng,0);let a=(this.slope||0)*Math.cos(this.h-(this.trackHead||this.h)),l=-Math.atan(a)-Yt(this.throttleVis*.015-(this.vf<0,0),-.05,.05),c=Yt(this.steer*this.speed*.0042+(this.drifting?this.driftDir*.06:0),-.14,.14);this.pitch=t?Fe(this.pitch,l,10,t):l,this.roll=t?Fe(this.roll,c,8,t):c,n.body.rotation.set(this.pitch,0,this.roll,"YXZ"),this.airY>.01&&this.spinT>0&&(n.body.rotation.x+=Math.sin(e*20)*.1),this.wheelRot+=this.vf*t/.27;for(let u of n.wheels)u.spin.rotation.x=this.wheelRot*(u.front?1.1:1),u.front&&(u.pivot.rotation.y=-this.steer*.42);n.wheel.rotation.z=this.steer*1.2,n.head.rotation.y=-this.steer*.25,n.head.rotation.z=-this.roll*1.5;let h=this.boostT>0;if(n.flame.visible=h,h){let u=.8+Math.random()*.5+this.boostPow*.4;n.flame.scale.set(1,1,u),n.flameMat.color.setHSL(.07+Math.random()*.04,1,.55)}n.shield.visible=this.shieldT>0,this.shieldT>0&&(n.shieldMat.uniforms.time.value=e,n.shieldMat.uniforms.alpha.value=this.shieldT<1.2?Math.sin(e*30)>0?1:.3:1),t&&this.emitFx(t)}emitFx(t){let e=this.race.fx,n=Math.sin(this.h),i=Math.cos(this.h),s=-i,o=n,a=this.speed,l=this.race.nearCamera(this),c=[];for(let d of[-1,1])c.push([this.x-n*.62+s*d*.64,this.y+.05,this.z-i*.62+o*d*.64]);if(this.drifting&&l){let d=ac[this.driftLevel],g=this.driftLevel>0?3:1;for(let x of c){for(let m=0;m<g;m++){if(!e.chance(.9))continue;let p=Math.random()*6.28;e.spark(x[0],x[1]+.1,x[2],-n*3+Math.cos(p)*2+s*this.driftDir*2,1.5+Math.random()*2.5,-i*3+Math.sin(p)*2+o*this.driftDir*2,d[0],d[1],d[2],this.driftLevel>0?.26:.14,.25+Math.random()*.2)}e.chance(.35)&&e.smoke(x[0],x[1]+.2,x[2],-n*2+(Math.random()-.5),.6,-i*2+(Math.random()-.5),.88,.9,.8,.22)}}if(this.onGrass&&a>4&&l){let d=this.race.dustColor;for(let g of c)e.chance(.5)&&e.dust(g[0],g[1]+.2,g[2],-n*2+(Math.random()-.5)*2,1+Math.random()*1.5,-i*2+(Math.random()-.5)*2,d[0],d[1],d[2],1)}let h=this.x-n*1.15+s*.47,u=this.z-i*1.15+o*.47;if(this.boostT>0&&l)for(let d=0;d<2;d++)e.flame(h,this.y+.5,u,-n*4+(Math.random()-.5),.5+Math.random(),-i*4+(Math.random()-.5),1+this.boostPow*.5);if(this.stallT>0&&l)for(let d of c)e.smoke(d[0],d[1]+.2,d[2],(Math.random()-.5)*2,1,(Math.random()-.5)*2,.9,1.2,1,.4);this.spinT>0&&l&&e.chance(.6)&&e.smoke(this.x,this.y+.3,this.z,(Math.random()-.5)*3,1,(Math.random()-.5)*3,.8,1.1,.9,.35);let f=(this.drifting||Math.abs(this.vl)>4.5||this.spinT>0||this.stallT>0)&&!this.onGrass&&this.airY<=.01&&a>2;for(let d=0;d<2;d++){let g=c[d];if(!f){this.skidPrev[d]=null;continue}let x=.14,m=[g[0]-s*x,g[1]-.02,g[2]-o*x],p=[g[0]+s*x,g[1]-.02,g[2]+o*x],_=this.skidPrev[d];if(_){let y=(_[0][0]-m[0])**2+(_[0][2]-m[2])**2;y>.25&&y<16?(e.skids.add(_[0][0],_[0][1],_[0][2],_[1][0],_[1][1],_[1][2],m[0],m[1],m[2],p[0],p[1],p[2]),this.skidPrev[d]=[m,p]):y>=16&&(this.skidPrev[d]=[m,p])}else this.skidPrev[d]=[m,p]}}};function qg(r,t,e){let n=r.N,i=new Float32Array(n),s=t.maxSpeed;for(let a=0;a<n;a++){let l=0;for(let u=-4;u<=4;u++)l=Math.max(l,Math.abs(r.lineCurv[(a+u+n)%n]));let c=4,h=s*1.05;for(let u=0;u<18;u++){let f=(c+h)/2,d=f/s;t.turnRate*(1-.42*d*d)/f*.86*e>=l?c=f:h=f}i[a]=c}let o=17;for(let a=0;a<2;a++)for(let l=n-1;l>=0;l--){let c=i[(l+1)%n];i[l]=Math.min(i[l],Math.sqrt(c*c+2*o*r.ds))}return i}var yo=class{constructor(t,e,n,i){this.race=t,this.kart=e,this.geom=t.geom,this.diff=n,this.r=ke(i),this.skill=.965+this.r()*.05,this.profile=qg(this.geom,e.p,n.corner*(.97+this.r()*.04)),this.lane=(this.r()-.5)*2,this.laneTarget=this.lane,this.laneT=0,this.stuckT=0,this.reverseT=0,this.wrongT=0,this.itemDelay=0,this.itemHeld=0,this.wobbleT=0,this.wobble=0,this.driftCorner=-1,this.driftT=0,this.inp={steer:0,throttle:0,brake:0,drift:!1,driftPressed:!1,item:!1},this.avoid=0}update(t){var b;let e=this.kart,n=this.geom,i=this.inp,s=this.race;if(i.driftPressed=!1,i.item=!1,!s.canDrive)return i.throttle=0,i.brake=0,i.steer=0,i;let o=e.speed;this.laneT-=t,this.laneT<=0&&(this.laneT=2+this.r()*4,this.laneTarget=(this.r()-.5)*3),this.lane+=Yt(this.laneTarget-this.lane,-t*.8,t*.8);let a=Yt(5+o*.4,6,17),l=e.s+a,c=n.lineOffsetAt(n.wrapS(l))*.9+this.lane,h=0;for(let M of s.karts){if(M===e)continue;let I=n.deltaS(M.s,e.s);if(I>-1&&I<13){let O=M.d-(e.d+(c-e.d)*.5);if(Math.abs(O)<2.6){let L=M.d>e.d?-1:1,Y=(L>0?n.half-1.5-M.d:M.d+n.half-1.5)>2.2?L:-L;h+=Y*(2.6-Math.abs(O))*(1-I/16)*1.3}}}for(let M of s.items.hazards){let I=n.deltaS(M.s,e.s);if(I>0&&I<24){let O=M.d-c;Math.abs(O)<2.2&&(h+=(O>0?-1:1)*(2.2-Math.abs(O))*1.2)}}this.avoid+=(h-this.avoid)*Math.min(1,t*6),c=Yt(c+this.avoid,-n.half+1.3,n.half-1.3),this.wobbleT-=t,this.wobbleT<=0&&(this.wobbleT=1+this.r()*3,this.wobble=this.r()<this.diff.mistakes?(this.r()-.5)*1.2:0);let u=n.pointAt(n.wrapS(l),c),f=Math.atan2(u.x-e.x,u.z-e.z),d=o>2&&e.vf>0?Math.atan2(e.vx,e.vz):e.h,g=cs(f-d),x=Yt(-g*2.7+this.wobble*.3,-1,1),m=n.idx(e.trackIdx+Math.round(3+o*.12)),p=this.profile[m],_=1,y=0,v=o,R=p*this.skill;v>R+1.6?(_=0,y=Yt((v-R)/5,.25,1)):v>R&&(_=.35),this.wobble&&Math.abs(this.wobble)>.45&&(_*=.7);let T=this.curvAhead(0,9),E=this.curvAhead(14,32),C=Math.abs(T.k)>1/30&&Math.abs(E.k)>1/45&&Math.sign(T.k)===Math.sign(E.k);if(!e.drifting&&!this.wantDrift&&o>14&&C&&this.driftCorner!==T.idx&&(this.driftCorner=T.idx,this.r()<this.diff.drift&&(i.driftPressed=!0,this.wantDrift=!0,this.driftDir=T.k>0?-1:1,this.driftT=0)),this.wantDrift){this.driftT+=t,!e.drifting&&e.hopT>0&&(x=this.driftDir*Math.max(.4,x*this.driftDir));let M=this.curvAhead(0,10),I=Math.sign(M.k)===this.driftDir&&Math.abs(M.k)>1/90,O=Math.abs(M.k)<1/45||I,L=Math.abs(e.d)>n.half-.8,H=e.driftLevel<1&&e.driftCharge>.3&&this.driftT<2.2&&!I;(e.drifting&&(L||O&&!H)&&this.driftT>.45||this.driftT>4||!e.drifting&&e.hopT<=0&&this.driftT>.5)&&(this.wantDrift=!1)}if(i.drift=!!this.wantDrift,e.drifting){y=Math.min(y,.4);let M=Math.min(1.4,o/e.p.maxSpeed),I=x*(1-.42*M*M)/(1-.16*M*M);x=Yt((I*e.driftDir-.55)/.45*e.driftDir,-1,1)}return s.time>3&&o<1.2&&this.reverseT<=0?this.stuckT+=t:this.stuckT=Math.max(0,this.stuckT-t),this.stuckT>1.2&&(this.reverseT=1.1,this.stuckT=0,this.stuckCount=(this.stuckCount||0)+1),this.reverseT>0?(this.reverseT-=t,_=0,y=1,x=-x,this.stuckCount>2&&(e.respawn(),this.stuckCount=0,this.reverseT=0)):o>6&&(this.stuckCount=0),Math.cos(e.h-((b=e.trackHead)!=null?b:e.h))<-.2&&o>1?this.wrongT+=t:this.wrongT=0,this.wrongT>2.5&&(e.respawn(),this.wrongT=0),i.steer=x,i.throttle=_,i.brake=y,this.items(t),i}curvAhead(t,e){let n=this.geom,i=this.kart,s=0,o=-1;for(let a=t;a<=e;a+=2){let l=n.idx(i.trackIdx+Math.round(a/n.ds)),c=n.lineCurv[l];Math.abs(c)>Math.abs(s)&&(s=c,o=l)}return{k:s,idx:o<0?-1:Math.floor(o/(40/n.ds))}}items(t){let e=this.kart,n=this.race;if(!e.item||e.rouletteT>0){this.itemHeld=0;return}if(this.itemHeld+=t,this.itemDelay>0){this.itemDelay-=t;return}if(this.r()>this.diff.items*t*4)return;let i=!1;switch(e.item){case"nitro":case"nitro3":{let s=this.curvAhead(5,60);i=Math.abs(s.k)<1/70&&!e.onGrass;break}case"rocket":{let s=n.items.findTarget(e);i=s&&n.geom.deltaS(s.s,e.s)<70,this.itemHeld>10&&(i=!0);break}case"oil":{i=n.karts.some(s=>s!==e&&n.geom.deltaS(e.s,s.s)>3&&n.geom.deltaS(e.s,s.s)<20)||this.itemHeld>9;break}case"shield":i=n.items.rockets.some(s=>s.target===e)||this.itemHeld>4;break}i&&(this.inp.item=!0,this.itemDelay=.6+this.r())}};var Yg=[-4.5,-1.5,1.5,4.5],Mo=class{constructor(t,e=!0){this.race=t,this.geom=t.geom,this.enabled=e,this.boxes=[],this.rockets=[],this.hazards=[],this.group=new ge,t.scene.add(this.group),e&&this.buildBoxes(),this.rocketGeo=null}buildBoxes(){let t=mu(),e=new kt({map:t,transparent:!0,opacity:.92,roughness:.2,metalness:.1,emissive:16777215,emissiveMap:t,emissiveIntensity:.35}),n=new ue(1.1,1.1,1.1),i=new te({color:16777215,transparent:!0,opacity:.5}),s=new $r(.28);for(let o of this.geom.def.itemRows||[]){let a=o*this.geom.length;for(let l of Yg){let c=new ge;Bn(c,this.geom,a,l,1),c.rotation.x=0;let h=new pt(n,e);h.castShadow=this.race.quality==="high",c.add(h);let u=new pt(s,i);c.add(u),this.group.add(c),this.boxes.push({s:a,d:l,mesh:c,box:h,core:u,respawn:0,phase:Math.random()*6})}}}roll(t){let e=this.race.karts.length,n=e>1?t.rank/(e-1):.5,i={oil:.35*(1-n)+.08,shield:.22*(1-n)+.05,rocket:.12+.28*n,nitro:.22+.1*n,nitro3:.02+.3*n*n};t.rank===0&&(i.rocket*=.4);let s=0;for(let a in i)s+=i[a];let o=Math.random()*s;for(let a in i)if(o-=i[a],o<=0)return a;return"nitro"}give(t,e){t.item=e,t.itemCount=e==="nitro3"?3:1}update(t,e){let n=this.race,i=this.geom;for(let s of this.boxes){if(s.respawn>0){s.respawn-=t,s.respawn<=0&&(s.mesh.visible=!0,s.mesh.scale.setScalar(.01));continue}let o=s.mesh.scale.x;o<1&&s.mesh.scale.setScalar(Math.min(1,o+t*3)),s.box.rotation.set(e*.9+s.phase,e*1.3+s.phase,0),s.core.rotation.y=-e*2,s.mesh.position.y=i.pointAt(s.s,s.d).y+1+Math.sin(e*2+s.phase)*.12;for(let a of n.karts){let l=a.x-s.mesh.position.x,c=a.z-s.mesh.position.z;if(l*l+c*c<2.3*2.3&&Math.abs(a.y-i.pointAt(s.s,s.d).y)<2){s.respawn=2.2,s.mesh.visible=!1,n.fx.burst(s.mesh.position.x,s.mesh.position.y,s.mesh.position.z,.9,.7,1,18,5,.3),!a.item&&a.rouletteT<=0&&(a.rouletteT=a.isPlayer?1.1:.5,a.rouletteItem=this.roll(a),n.sound("pickup",a));break}}}for(let s of n.karts)s.rouletteT>0&&(s.rouletteT-=t,s.rouletteT<=0&&(this.give(s,s.rouletteItem),s.isPlayer&&n.sound("itemReady",s)));this.updateRockets(t,e),this.updateHazards(t,e)}use(t){if(!t.item||t.rouletteT>0)return;let e=this.race;switch(t.item){case"nitro":case"nitro3":t.boost(1.35,1.2),e.sound("nitro",t);break;case"rocket":this.fireRocket(t),e.sound("rocket",t);break;case"oil":this.dropOil(t),e.sound("drop",t);break;case"shield":t.shieldT=7,e.sound("shield",t);break}t.itemCount--,t.itemCount<=0&&(t.item=null)}findTarget(t){let e=null,n=1/0;for(let i of this.race.karts){if(i===t||i.finished)continue;let s=i.progress-t.progress;s>0&&s<160&&s<n&&(n=s,e=i)}return e}makeRocketMesh(){let t=new ge,e=new pt(new Re(.16,.16,1,10).rotateX(Math.PI/2),new kt({color:15263978,metalness:.5,roughness:.3})),n=new pt(new un(.16,.4,10).rotateX(Math.PI/2).translate(0,0,.7),new kt({color:14692907,roughness:.4})),i=new kt({color:14692907,roughness:.5});t.add(e,n);for(let o=0;o<4;o++){let a=new pt(new ue(.03,.3,.3),i);a.position.set(0,0,-.4),a.rotation.z=o*Math.PI/2,a.translateY(.2),t.add(a)}let s=new pt(new dn(.2,8,6),new te({color:16756800,toneMapped:!1}));return s.position.z=-.55,t.add(s),t}fireRocket(t){let e=this.findTarget(t),n=this.makeRocketMesh();this.group.add(n),this.rockets.push({owner:t,target:e,s:t.s+1.8,d:t.d,y:.7,life:6,age:0,speed:Math.max(t.speed+18,50),mesh:n,x:t.x,z:t.z,h:t.h,progress:t.progress+1.8})}updateRockets(t){let e=this.geom,n=this.race;for(let i=this.rockets.length-1;i>=0;i--){let s=this.rockets[i];s.age+=t,s.life-=t;let o=s.speed*t;if(s.s=e.wrapS(s.s+o),s.progress+=o,s.target&&!s.target.finished){let f=s.target.progress-s.progress;f<35&&(s.d+=(s.target.d-s.d)*Math.min(1,t*(f<12?10:3)))}else s.d*=Math.exp(-t*.5);s.d=Math.max(-e.half+.5,Math.min(e.half-.5,s.d));let a=e.pointAt(s.s,s.d),l=a.x,c=a.z,h=Math.atan2(l-s.x,c-s.z);s.x=l,s.z=c,s.h=h,s.mesh.position.set(l,a.y+s.y,c),s.mesh.rotation.set(0,h,0),n.fx.flame(l-Math.sin(h)*.6,a.y+s.y,c-Math.cos(h)*.6,-Math.sin(h)*3,.3,-Math.cos(h)*3,.9),Math.random()<.5&&n.fx.smoke(l-Math.sin(h)*.8,a.y+s.y,c-Math.cos(h)*.8,0,.5,0,.8,.7,.8,.28);let u=null;for(let f of n.karts){if(f===s.owner&&s.age<.6)continue;let d=f.x-l,g=f.z-c;if(d*d+g*g<1.7*1.7&&Math.abs(f.y-a.y)<2){u=f;break}}for(let f=this.hazards.length-1;f>=0;f--){let d=this.hazards[f];(d.x-l)**2+(d.z-c)**2<2.2&&(this.removeHazard(f),s.life=0)}(u||s.life<=0)&&(n.fx.explosion(l,a.y,c),n.sound("explosion",s.owner,0,{x:l,z:c}),u&&u.hit("rocket",s.owner),this.group.remove(s.mesh),s.mesh.traverse(f=>{f.geometry&&f.geometry.dispose(),f.material&&f.material.dispose()}),this.rockets.splice(i,1))}}dropOil(t){let e=this.geom,n=e.wrapS(t.s-2.6),i=e.pointAt(n,t.d);if(!this.oilGeo){this.oilGeo=new ni(1.25,20).rotateX(-Math.PI/2);let a=this.oilGeo.attributes.position;for(let l=1;l<a.count;l++){let c=.75+Math.random()*.4;a.setX(l,a.getX(l)*c),a.setZ(l,a.getZ(l)*c)}this.oilMat=new kt({color:460554,roughness:.05,metalness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-3}),this.oilSheen=new te({color:6308095,transparent:!0,opacity:.25,blending:qe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-4})}let s=new pt(this.oilGeo,this.oilMat);s.position.set(i.x,i.y+.02,i.z),s.rotation.y=Math.random()*6,s.renderOrder=1;let o=new pt(this.oilGeo,this.oilSheen);o.scale.setScalar(.6),o.position.y=.005,s.add(o),this.group.add(s),this.hazards.push({s:n,d:t.d,x:i.x,z:i.z,y:i.y,mesh:s,owner:t,t:0,sheen:o}),this.hazards.length>12&&this.removeHazard(0)}removeHazard(t){let e=this.hazards[t];this.group.remove(e.mesh),this.hazards.splice(t,1)}updateHazards(t,e){let n=this.race;for(let i=this.hazards.length-1;i>=0;i--){let s=this.hazards[i];s.t+=t,s.sheen.material.color.setHSL((e*.2+i*.1)%1,.8,.5);for(let o of n.karts){if(o===s.owner&&s.t<1)continue;let a=o.x-s.x,l=o.z-s.z;if(a*a+l*l<1.6*1.6&&Math.abs(o.y-s.y)<1.5){o.hit("oil",s.owner),this.removeHazard(i),n.sound("slip",o);break}}}}checkPads(t,e,n){for(let i of e){let s=this.geom.deltaS(t.s,i.s);Math.abs(s)<i.len/2&&Math.abs(t.d-i.d)<i.w/2+.3&&(!t.padCooldown||t.padCooldown<=0)&&(t.boost(1,1),t.padCooldown=.6,this.race.sound("pad",t))}t.padCooldown>0&&(t.padCooldown-=n)}};var Zg=`
attribute float size;
attribute vec4 pcolor;
varying vec4 vColor;
uniform float scale;
void main() {
  vColor = pcolor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,$g=`
varying vec4 vColor;
uniform float soft;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  float a = 1.0 - smoothstep(soft, 1.0, d);
  if (a <= 0.001) discard;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
}`,bo=class{constructor(t,e,n){this.max=t,this.n=0;let i=()=>new Float32Array(t);this.px=i(),this.py=i(),this.pz=i(),this.vx=i(),this.vy=i(),this.vz=i(),this.life=i(),this.maxLife=i(),this.s0=i(),this.s1=i(),this.cr=i(),this.cg=i(),this.cb=i(),this.a0=i(),this.grav=i(),this.drag=i();let s=new ne;this.pos=new xe(new Float32Array(t*3),3).setUsage(Os),this.size=new xe(new Float32Array(t),1).setUsage(Os),this.col=new xe(new Float32Array(t*4),4).setUsage(Os),s.setAttribute("position",this.pos),s.setAttribute("size",this.size),s.setAttribute("pcolor",this.col),s.setDrawRange(0,0),this.mat=new re({vertexShader:Zg,fragmentShader:$g,uniforms:{scale:{value:400},soft:{value:n}},transparent:!0,depthWrite:!1,blending:e?qe:$n}),this.points=new Gr(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=e?3:2}spawn(t,e,n,i,s,o,a,l,c,h,u,f,d,g=0,x=0){let m=this.n;m>=this.max?m=Math.floor(Math.random()*this.max):this.n++,this.px[m]=t,this.py[m]=e,this.pz[m]=n,this.vx[m]=i,this.vy[m]=s,this.vz[m]=o,this.life[m]=a,this.maxLife[m]=a,this.s0[m]=l,this.s1[m]=c,this.cr[m]=h,this.cg[m]=u,this.cb[m]=f,this.a0[m]=d,this.grav[m]=g,this.drag[m]=x}update(t){let e=this.pos.array,n=this.size.array,i=this.col.array,s=0;for(;s<this.n;){if(this.life[s]-=t,this.life[s]<=0){let l=--this.n;s!==l&&(this.px[s]=this.px[l],this.py[s]=this.py[l],this.pz[s]=this.pz[l],this.vx[s]=this.vx[l],this.vy[s]=this.vy[l],this.vz[s]=this.vz[l],this.life[s]=this.life[l],this.maxLife[s]=this.maxLife[l],this.s0[s]=this.s0[l],this.s1[s]=this.s1[l],this.cr[s]=this.cr[l],this.cg[s]=this.cg[l],this.cb[s]=this.cb[l],this.a0[s]=this.a0[l],this.grav[s]=this.grav[l],this.drag[s]=this.drag[l]);continue}let o=Math.exp(-this.drag[s]*t);this.vx[s]*=o,this.vy[s]=this.vy[s]*o-this.grav[s]*t,this.vz[s]*=o,this.px[s]+=this.vx[s]*t,this.py[s]+=this.vy[s]*t,this.pz[s]+=this.vz[s]*t;let a=1-this.life[s]/this.maxLife[s];e[s*3]=this.px[s],e[s*3+1]=this.py[s],e[s*3+2]=this.pz[s],n[s]=this.s0[s]+(this.s1[s]-this.s0[s])*a,i[s*4]=this.cr[s],i[s*4+1]=this.cg[s],i[s*4+2]=this.cb[s],i[s*4+3]=this.a0[s]*(a<.1?a/.1:1-(a-.1)/.9),s++}this.points.geometry.setDrawRange(0,this.n),this.pos.needsUpdate=!0,this.size.needsUpdate=!0,this.col.needsUpdate=!0}},cc=class{constructor(t,e=657930,n=.42){this.max=t,this.head=0;let i=new Float32Array(t*4*3),s=[];for(let a=0;a<t;a++){let l=a*4;s.push(l,l+2,l+1,l+1,l+2,l+3)}let o=new ne;this.attr=new xe(i,3).setUsage(Os),o.setAttribute("position",this.attr),o.setIndex(s),this.mesh=new pt(o,new te({color:e,transparent:!0,opacity:n,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.dirtyFrom=-1}add(t,e,n,i,s,o,a,l,c,h,u,f){let d=this.attr.array,g=this.head*12;d[g]=t,d[g+1]=e,d[g+2]=n,d[g+3]=i,d[g+4]=s,d[g+5]=o,d[g+6]=a,d[g+7]=l,d[g+8]=c,d[g+9]=h,d[g+10]=u,d[g+11]=f,this.head=(this.head+1)%this.max,this.attr.needsUpdate=!0}},So=class{constructor(t,e){let n=e==="low"?.5:1;this.mult=n,this.add=new bo(Math.round(1800*n),!0,.15),this.norm=new bo(Math.round(1400*n),!1,.35),this.skids=new cc(e==="low"?1200:2600),t.add(this.add.points,this.norm.points,this.skids.mesh),this.acc=0}setScale(t){this.add.mat.uniforms.scale.value=t,this.norm.mat.uniforms.scale.value=t}update(t){this.add.update(t),this.norm.update(t)}chance(t){return Math.random()<t*this.mult}spark(t,e,n,i,s,o,a,l,c,h=.22,u=.35){this.add.spawn(t,e,n,i,s,o,u,h,h*.3,a,l,c,1,9,1.5)}smoke(t,e,n,i,s,o,a=.85,l=1,c=.9,h=.35){this.norm.spawn(t,e,n,i,s,o,c,l*.5,l*2.2,a,a,a*1.02,h,-.6,2.2)}dust(t,e,n,i,s,o,a,l,c,h=.9){this.norm.spawn(t,e,n,i,s,o,.7,h*.5,h*1.8,a,l,c,.5,1.5,2.5)}flame(t,e,n,i,s,o,a=1){this.add.spawn(t,e,n,i,s,o,.16+Math.random()*.08,.55*a,.1,1,.55+Math.random()*.3,.15,.95,-1,3)}burst(t,e,n,i,s,o,a=24,l=6,c=.3){for(let h=0;h<a*this.mult;h++){let u=Math.random()*Math.PI*2,f=Math.random()*2-1,d=Math.sqrt(1-f*f),g=l*(.4+Math.random()*.6);this.add.spawn(t,e,n,Math.cos(u)*d*g,Math.abs(f)*g+1,Math.sin(u)*d*g,.4+Math.random()*.4,c,c*.2,i,s,o,1,8,1.2)}}explosion(t,e,n){this.burst(t,e+.5,n,1,.6,.15,40,11,.5),this.burst(t,e+.5,n,1,.9,.5,20,6,.8);for(let i=0;i<16*this.mult;i++)this.norm.spawn(t+(Math.random()-.5)*2,e+.5+Math.random(),n+(Math.random()-.5)*2,(Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4,1.4+Math.random()*.6,1.5,5,.25,.23,.22,.6,-.5,1.5)}};var hc={};function dc(r){return hc[r]||(hc[r]=new po(en.find(t=>t.id===r))),hc[r]}var Vs=.8,uc=20,Gs=class{constructor(t,e){if(this.app=t,this.cfg=e,this.mode=e.mode,this.def=en.find(n=>n.id===e.trackId),this.geom=dc(e.trackId),this.theme=su[this.def.theme],this.quality=t.settings.quality,this.laps=this.mode==="attract"?999:e.laps,this.diff=mo[e.difficulty||"normal"],this.scene=new es,this.env=wu(this.scene,this.geom,this.theme,this.quality),this.track=bu(this.geom,this.theme,this.quality),this.scene.add(this.track.group),this.fx=new So(this.scene,this.quality),this.blobMat=new te({map:vu(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.dustColor=this.theme.ground==="sand"?[.86,.74,.55]:this.theme.ground==="city"?[.5,.5,.56]:[.42,.52,.26],this.time=0,this.clock=0,this.canDrive=!1,this.state="intro",this.stateT=0,this.finishCount=0,this.fastestLap=1/0,this.items=new Mo(this,this.mode!=="tt"),this.karts=[],this.ais=[],this.player=null,this.buildField(),this.order=this.karts.slice(),this.focus=this.player||this.karts[0],this.camRig=t.camRig,this.camRig.tv.target=null,this.camRig.snapChase(this.focus),this.lightsOn=0,this.holdT=1+Math.random()*.9,this.startPressT=null,this.results=null,this.hud=t.hud,this.rec=t.store.record(this.def.id),this.ghostFrames=[],this.trace=[],this.ghostMesh=null,this.player&&this.rec.ghost&&this.mode==="tt"&&(this.ghostMesh=lc(this.player.driver,{ghost:!0}),this.ghostMesh.visible=!1,this.scene.add(this.ghostMesh)),this.mode==="attract"){this.state="racing",this.canDrive=!0,this.track.setLights(0);for(let n of this.karts)n.progress+=0}this.mode==="tt"&&this.items.give(this.player,"nitro3")}buildField(){let t=ke((Date.now()&65535)+17),e=this.cfg,n=[];if(this.mode==="attract")n=pn.slice().sort(()=>t()-.5).map(i=>({d:i,ai:!0}));else if(this.mode==="tt")n=[{d:pn.find(i=>i.id===e.driverId),ai:!1}];else{let i=pn.find(o=>o.id===e.driverId),s;if(e.grid)n=e.grid.map(o=>({d:pn.find(a=>a.id===o),ai:o!==i.id}));else{s=pn.filter(a=>a.id!==i.id).sort(()=>t()-.5).slice(0,e.opponents),n=s.map(a=>({d:a,ai:!0}));let o=Math.min(5,n.length);n.splice(o,0,{d:i,ai:!1})}}n.forEach((i,s)=>{let o=new vo(this,i.d,{isPlayer:!i.ai,index:s}),a=oc(this.geom,s);o.place(a.s,a.d),this.scene.add(o.mesh),this.karts.push(o);let l=this.mode==="attract"?mo.hard:this.diff,c=new yo(this,o,i.ai?l:mo.normal,1e3+s*77+Math.floor(t()*1e3));o.ai=c,i.ai?this.ais.push(c):this.player=o}),this.mode==="attract"&&this.karts.forEach((i,s)=>{let o=this.geom.wrapS(s*23+40);i.place(o,(s%3-1)*3),i.progress=o;let a=Math.sin(i.h),l=Math.cos(i.h);i.vx=a*22,i.vz=l*22})}sound(t,e,n=0,i=null){if(this.mode==="attract"||!this.app.audio.ctx)return;let s=1;if(e&&e!==this.player){let o=i?i.x:e.x,a=i?i.z:e.z,l=this.app.camera.position,c=Math.hypot(o-l.x,a-l.z);s=Yt(1-c/70,0,1)*.8,(t==="pickup"||t==="itemReady"||t==="driftLevel")&&(s*=.3)}this.app.audio.play(t,n,s)}onPlayerBoost(t){this.camRig.shake(.08*t),this.hud.boostFlash()}onKartHit(t,e,n){t===this.player?(this.camRig.shake(e==="rocket"?.6:.25),this.sound("hit",t),this.hud.message(e==="rocket"?"\u041F\u0440\u044F\u043C\u043E\u0435 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435":"\u0417\u0430\u043D\u0435\u0441\u043B\u043E \u043D\u0430 \u043C\u0430\u0441\u043B\u0435","bad",1.4)):n&&n===this.player&&this.hud.message("\u041F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435: "+t.name,"good",1.4)}onWallHit(t,e,n,i){let s=Math.min(24,e*3);for(let o=0;o<s;o++)this.fx.spark(n,t.y+.4,i,(Math.random()-.5)*8,1+Math.random()*4,(Math.random()-.5)*8,1,.75,.35,.18,.4);this.sound("wall",t,e),t===this.player&&this.camRig.shake(Math.min(.5,e*.035))}nearCamera(t){let e=this.app.camera.position;return(t.x-e.x)**2+(t.z-e.z)**2<90*90}update(t,e){this.clock+=t,this.stateT+=t;let n=this.player;if(this.state==="intro"){let h=this.mode==="tt"?2.2:3.4;this.camRig.intro(Math.min(1,this.stateT/h),this.focus),(this.stateT>=h||e.item||e.driftPressed)&&(this.setState("countdown"),this.camRig.snapChase(this.focus),this.hud.startLights(0))}else if(this.state==="countdown"){let h=Math.min(5,Math.floor(this.stateT/Vs)+1);h!==this.lightsOn&&this.stateT<Vs*5&&(this.lightsOn=h,this.track.setLights(h),this.hud.startLights(h),this.app.audio.play("light")),n&&!this.app.hud.touchEnabled&&(e.throttle>.5?this.startPressT===null&&(this.startPressT=this.stateT):this.startPressT=null),this.stateT>=Vs*5+this.holdT&&this.go()}else this.state==="finished"&&this.stateT>3.2&&!this.results&&(this.results=this.buildResults(),this.app.onRaceFinished(this.results,this));let i=Math.max(1,Math.ceil(t/(1/120))),s=t/i;for(let h of this.ais)h.update(t);let o=n&&!n.finished?e:n?n.ai.update(t):null;for(let h=0;h<i;h++){for(let u of this.karts){let f=u===n?o:u.ai.inp;u.step(s,f),h===0&&(f.driftPressed=!1)}this.collide(),this.canDrive&&(this.time+=s);for(let u of this.karts)this.checkLap(u)}for(let h of this.karts){let u=h===n?o:h.ai.inp;u&&u.item&&this.canDrive&&this.items.use(h),this.items.checkPads(h,this.track.pads,t)}this.items.update(t,this.clock),n&&e.reset&&this.canDrive&&!n.finished&&n.respawn();for(let h of this.karts)h.syncMesh(t,this.clock);this.fx.update(t),this.track.update(t);for(let h of this.env.updaters)h(t,this.clock);this.rank(),this.updateGhost(t),this.mode==="attract"?this.camRig.broadcast(t,this.karts,this.geom):this.state==="finished"?this.camRig.orbit(t,this.focus):this.state!=="intro"&&(e.camera&&(this.camRig.mode=1-this.camRig.mode),this.camRig.chase(t,this.focus,e.look));let a=this.app.camera.position,l=this.mode==="attract"?this.camRig.tv.target||this.focus:this.focus;for(let h of this.karts){if(h===l){h.mesh.visible=!0;continue}h.mesh.visible=(h.x-a.x)**2+(h.z-a.z)**2+(h.y+.6-a.y)**2>2.6*2.6}let c=this.mode==="attract"?this.camRig.tv.target||this.focus:this.focus;this.env.follow(c.mesh.position),this.fx.setScale(this.app.renderer.domElement.height/(2*Math.tan(this.app.camera.fov*Math.PI/360))),this.updateAudio(t,o),this.mode!=="attract"&&this.hud.update(this,t)}setState(t){this.state=t,this.stateT=0}go(){this.setState("racing"),this.canDrive=!0,this.lightsOn=0,this.track.setLights(0),this.hud.startLights(-1),this.app.audio.play("go"),this.hud.message("\u0421\u0442\u0430\u0440\u0442!","go",1);for(let e of this.karts)e.lapStart=0;let t=this.player;if(t){let e=this.startPressT;e!==null&&e>=Vs*4?(t.boost(1.1,.9),this.hud.message("\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0442\u0430\u0440\u0442","good",1.4),this.sound("nitro",t)):e!==null&&e<Vs*2&&(t.stallT=.9,this.hud.message("\u041F\u0440\u043E\u0431\u0443\u043A\u0441\u043E\u0432\u043A\u0430","bad",1.2))}for(let e of this.ais){let n=Math.random();n<e.diff.drift*.4?e.kart.boost(1,.8):n>.9&&(e.kart.stallT=.4)}}collide(){let t=this.karts,e=2.1;for(let n=0;n<t.length;n++){let i=t[n];for(let s=n+1;s<t.length;s++){let o=t[s],a=o.x-i.x,l=o.z-i.z,c=a*a+l*l;if(c>=e*e||Math.abs(i.y-o.y)>1.5)continue;let h=Math.sqrt(c)||.001,u=a/h,f=l/h,d=e-h,g=i.p.mass*(i.shieldT>0?3:1),x=o.p.mass*(o.shieldT>0?3:1),m=g+x;i.x-=u*d*(x/m),i.z-=f*d*(x/m),o.x+=u*d*(g/m),o.z+=f*d*(g/m);let p=(o.vx-i.vx)*u+(o.vz-i.vz)*f;if(p<0){let _=-1.45*p/(1/g+1/x);if(i.vx-=_*u/g,i.vz-=_*f/g,o.vx+=_*u/x,o.vz+=_*f/x,-p>2.5){let y=(i.x+o.x)/2,v=(i.z+o.z)/2;this.fx.burst(y,i.y+.4,v,1,.8,.4,8,4,.16),this.sound("bump",i===this.player||o===this.player?this.player:i,0,{x:y,z:v}),(i===this.player||o===this.player)&&this.camRig.shake(Math.min(.35,-p*.03))}}}}}checkLap(t){if(t.finished||!this.canDrive)return;let e=this.geom.length,n=Math.floor(t.progress/e);if(t===this.player){let a=t.progress-t.lapsDone*e,l=Math.floor(a/10);l>=0&&this.trace[l]===void 0&&(this.trace[l]=this.time-t.lapStart)}if(n<=t.lapsDone)return;t.lapsDone=n;let i=this.time-t.lapStart;t.lapStart=this.time,t.lapTimes.push(i);let s=i<t.bestLap;s&&(t.bestLap=i);let o=i<this.fastestLap;o&&(this.fastestLap=i),t===this.player&&this.onPlayerLap(i,s,o),t.lapsDone>=this.laps&&this.finish(t)}onPlayerLap(t,e,n){let i=this.player,s=this.rec.bestLap==null||t<this.rec.bestLap,o=s?"record":n?"fastest":e?"pb":"normal";this.hud.lapFlash(t,o,this.rec.bestLap),s?(this.app.store.saveLap(this.def.id,t,this.ghostFrames,this.trace,i.driver.id),this.rec=this.app.store.record(this.def.id),this.sound("best",i)):this.sound("lap",i),this.ghostFrames=[],this.trace=[],this.ghostT=0,i.lapsDone===this.laps-1&&this.laps>1?(this.hud.message("\u0424\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0440\u0443\u0433","final",2),this.sound("finalLap",i)):i.lapsDone<this.laps&&this.hud.message("\u041A\u0440\u0443\u0433 "+(i.lapsDone+1),"info",1.2)}finish(t){if(t.finished=!0,t.finishTime=this.time,t.finishPos=this.finishCount++,t===this.player){this.setState("finished");let e=t.finishPos+1;this.hud.message(this.mode==="tt"?"\u0424\u0438\u043D\u0438\u0448":`\u0424\u0438\u043D\u0438\u0448: ${e}-\u0435 \u043C\u0435\u0441\u0442\u043E`,e===1?"final":"info",3),this.sound("finish",t),this.hud.showTouch(!1),this.mode==="tt"||this.karts.length}}rank(){let t=this.karts.slice().sort((n,i)=>n.finished&&i.finished?n.finishTime-i.finishTime:n.finished?-1:i.finished?1:i.progress-n.progress);t.forEach((n,i)=>n.rank=i),this.order=t;let e=this.player;for(let n of this.ais){let i=n.kart,s=n.diff.speed;if(e&&!e.finished){let o=i.progress-e.progress;s*=1+Yt(-o/250,-1,1)*n.diff.rubber}i.speedScale=s}}updateGhost(t){let e=this.player;if(!e||this.state!=="racing"||!this.canDrive)return;for(this.recAcc=(this.recAcc||0)+t;this.recAcc>=1/uc;)this.recAcc-=1/uc,this.ghostFrames.push(Math.round(e.x*100)/100,Math.round(e.y*100)/100,Math.round(e.z*100)/100,Math.round(e.h*1e3)/1e3);let n=this.ghostMesh,i=this.rec.ghost;if(!n||!i)return;this.ghostT=(this.ghostT||0)+t;let s=this.ghostT*uc,o=Math.floor(s),a=i.length/4;if(o>=a-1){n.visible=!1;return}let l=s-o,c=o*4,h=c+4;n.visible=!0,n.position.set(zs(i[c],i[h],l),zs(i[c+1],i[h+1],l),zs(i[c+2],i[h+2],l));let u=i[h+3]-i[c+3];u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2),n.rotation.y=i[c+3]+u*l}delta(){let t=this.player,e=this.rec.trace;if(!t||!e||!this.canDrive||t.finished)return null;let n=this.geom.length,i=t.progress-t.lapsDone*n;if(i<20)return null;let s=i/10,o=Math.floor(s);if(o+1>=e.length||e[o]==null||e[o+1]==null)return null;let a=e[o]+(e[o+1]-e[o])*(s-o);return this.time-t.lapStart-a}updateAudio(t,e){let n=this.app.audio;if(!n.ctx)return;if(this.mode==="attract"||this.app.paused){n.silenceEngines();return}let i=this.focus,s=e?e.throttle:0,a=.1+Yt(i.speed/(i.p.maxSpeed*1.25),0,1)*.88;!this.canDrive&&s>0&&(a=.45+Math.sin(this.clock*30)*.05+.2),i.stallT>0&&(a=.9),n.setEngine(0,Yt(a,0,1),s,1);let l=this.app.camera.position,c=this.karts.filter(u=>u!==i).map(u=>({k:u,d:Math.hypot(u.x-l.x,u.z-l.z)})).sort((u,f)=>u.d-f.d);for(let u=0;u<2;u++){let f=c[u];if(!f){n.setEngine(u+1,0,0,0);continue}let d=.1+Yt(f.k.speed/(f.k.p.maxSpeed*1.25),0,1)*.88;n.setEngine(u+1,d,1,Yt(1-f.d/50,0,1)*.9)}let h=0;i.drifting?h=.55+i.driftLevel*.1:Math.abs(i.vl)>4&&!i.onGrass&&(h=.35),(i.spinT>0||i.stallT>0)&&(h=.7),n.setSkid(h),n.setWind(Yt((i.speed/34)**2,0,1))}buildResults(){let t=this.geom.length,e=this.order.map(n=>{let i=n.finished?n.finishTime:null;if(!n.finished){let s=this.laps*t-n.progress,o=Math.max(12,n.progress/Math.max(1,this.time));i=this.time+s/o}return{driver:n.driver,name:n.name,isPlayer:n.isPlayer,time:i,est:!n.finished,bestLap:n.bestLap,laps:n.lapTimes.slice()}});return e.sort((n,i)=>n.time-i.time),e.forEach((n,i)=>n.pos=i+1),{mode:this.mode,trackId:this.def.id,trackName:this.def.name,laps:this.laps,rows:e,fastestLap:this.fastestLap}}dispose(){ou(this.scene),this.scene.clear()}};var pe=r=>document.getElementById(r),wo={nitro:'<svg viewBox="0 0 64 64" aria-label="\u041D\u0438\u0442\u0440\u043E"><defs><linearGradient id="gN" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fd0ff"/><stop offset="1" stop-color="#1f6fe0"/></linearGradient></defs><path d="M32 60c-9 0-15-6-15-13 0-6 4-9 6-14 1 4 3 6 5 6-1-9 3-17 10-23-1 7 3 11 6 16 3 4 3 7 3 11 0 10-6 17-15 17z" fill="#ff8a00"/><path d="M32 60c-5 0-8-3-8-8 0-4 3-6 4-9 1 3 3 4 5 4 0-4 2-7 4-9 0 4 3 6 3 10 0 7-3 12-8 12z" fill="#ffe14a"/><rect x="22" y="4" width="20" height="30" rx="6" fill="url(#gN)" stroke="#fff" stroke-width="2"/><rect x="27" y="1" width="10" height="5" rx="1.5" fill="#d8dde3"/><text x="32" y="25" text-anchor="middle" font-family="Unbounded,Arial Black,sans-serif" font-weight="900" font-size="10" fill="#fff">N\u2082O</text></svg>',rocket:'<svg viewBox="0 0 64 64" aria-label="\u0420\u0430\u043A\u0435\u0442\u0430"><g transform="rotate(45 32 32)"><path d="M32 4c7 7 9 17 9 27v14H23V31c0-10 2-20 9-27z" fill="#eef1f4" stroke="#fff" stroke-width="1.5"/><path d="M32 4c4 4 6.5 9 7.8 14H24.2C25.5 13 28 8 32 4z" fill="#e0322b"/><path d="M23 36l-8 10v6l8-4zM41 36l8 10v6l-8-4z" fill="#e0322b"/><circle cx="32" cy="27" r="4.5" fill="#1f6fe0" stroke="#fff" stroke-width="1.5"/><path d="M26 45h12l-2 7c-1 5-3 9-4 11-1-2-3-6-4-11z" fill="#ffb040"/></g></svg>',oil:'<svg viewBox="0 0 64 64" aria-label="\u041C\u0430\u0441\u043B\u043E"><ellipse cx="32" cy="50" rx="24" ry="8" fill="#101014"/><ellipse cx="26" cy="49" rx="9" ry="2.5" fill="#6a4dff" opacity=".55"/><path d="M32 4C26 16 18 24 18 34a14 14 0 0 0 28 0C46 24 38 16 32 4z" fill="#15151b" stroke="#8d8dff" stroke-width="2"/><path d="M26 30c0 4 2 7 5 8" stroke="#b6b6ff" stroke-width="3" stroke-linecap="round" fill="none"/></svg>',shield:'<svg viewBox="0 0 64 64" aria-label="\u0429\u0438\u0442"><path d="M32 4l22 8v16c0 15-9 26-22 32C19 54 10 43 10 28V12z" fill="#0e3d52" stroke="#5fd4ff" stroke-width="3"/><path d="M32 12l14 5v11c0 10-5 18-14 22z" fill="#5fd4ff" opacity=".55"/><path d="M24 31l6 6 11-12" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'};wo.nitro3=wo.nitro;var Eu=["nitro","rocket","oil","shield"],To=class{constructor(){this.root=pe("hud"),this.el={posNum:pe("pos-num"),posOf:pe("pos-of"),lap:pe("lap-num"),tower:pe("tower"),slot:pe("item-slot"),icon:pe("item-icon"),cnt:pe("item-cnt"),fps:pe("fps"),lights:pe("lights"),msgs:pe("msgs"),wrong:pe("wrongway"),minimap:pe("minimap"),leds:pe("leds"),speed:pe("speed"),ltNow:pe("lt-now"),ltDelta:pe("lt-delta"),ltBest:pe("lt-best"),drift:pe("drift"),lines:pe("speedlines"),hitflash:pe("hitflash"),touch:pe("touch")},this.el.leds.innerHTML=Array.from({length:12},(t,e)=>`<i class="${e<6?"g":e<10?"y":"r"}"></i>`).join(""),this.ledEls=Array.from(this.el.leds.children),this.driftEls=Array.from(this.el.drift.querySelectorAll("b")),this.cache={},this.lastRoulette=0,this.fpsAcc=0,this.fpsN=0,this.touchEnabled=!1}show(t){this.root.hidden=!t,t||this.showTouch(!1)}showTouch(t){this.el.touch.hidden=!(t&&this.touchEnabled),document.body.classList.toggle("touch-on",!!(t&&this.touchEnabled))}showFps(t){this.el.fps.hidden=!t}set(t,e,n,i="textContent"){this.cache[t]!==n&&(this.cache[t]=n,e[i]=n)}setupRace(t){this.race=t,this.cache={},this.el.msgs.innerHTML="",this.el.wrong.hidden=!0,this.el.lights.hidden=!0,this.startLights(0),this.el.tower.hidden=t.karts.length<2,this.el.slot.hidden=!1,this.drawMinimapBase(t),this.el.tower.innerHTML=t.karts.map(()=>'<div class="row"><span class="p"></span><i></i><span class="n"></span><span class="g"></span></div>').join(""),this.rows=Array.from(this.el.tower.children).map(e=>({r:e,p:e.children[0],i:e.children[1],n:e.children[2],g:e.children[3]})),this.el.ltBest.textContent=He(t.rec.bestLap),this.boostT=0}drawMinimapBase(t){let e=t.geom,n=e.bounds(20),i=document.createElement("canvas");i.width=i.height=340;let s=i.getContext("2d"),o=300/Math.max(n.maxX-n.minX,n.maxZ-n.minZ),a=(340-(n.maxX-n.minX)*o)/2,l=(340-(n.maxZ-n.minZ)*o)/2;this.map={sc:o,ox:a,oz:l,minX:n.minX,minZ:n.minZ};let c=d=>a+(d-n.minX)*o,h=d=>l+(d-n.minZ)*o;s.lineJoin="round",s.lineCap="round",s.beginPath();for(let d=0;d<=e.N;d+=2){let g=d%e.N;s.lineTo(c(e.px[g]),h(e.pz[g]))}s.closePath(),s.strokeStyle="rgba(0,0,0,0.55)",s.lineWidth=16,s.stroke(),s.strokeStyle="rgba(242,243,245,0.9)",s.lineWidth=9,s.stroke(),s.strokeStyle="#2a2e36",s.lineWidth=5,s.stroke();let u=e.pointAt(0,-e.half),f=e.pointAt(0,e.half);s.strokeStyle="#ffd000",s.lineWidth=4,s.beginPath(),s.moveTo(c(u.x),h(u.z)),s.lineTo(c(f.x),h(f.z)),s.stroke(),this.mapBase=i,this.mapCtx=this.el.minimap.getContext("2d")}drawMinimap(t){let e=this.mapCtx,n=this.map;e.clearRect(0,0,340,340),e.drawImage(this.mapBase,0,0);let i=a=>n.ox+(a-n.minX)*n.sc,s=a=>n.oz+(a-n.minZ)*n.sc;for(let a of t.items.hazards)e.fillStyle="#8d8dff",e.fillRect(i(a.x)-3,s(a.z)-3,6,6);for(let a of t.items.rockets)e.fillStyle="#ff5a2a",e.beginPath(),e.arc(i(a.x),s(a.z),4,0,7),e.fill();let o=t.karts.slice().sort((a,l)=>(a.isPlayer?1:0)-(l.isPlayer?1:0));for(let a of o){let l=i(a.x),c=s(a.z);e.beginPath(),e.arc(l,c,a.isPlayer?9:6.5,0,Math.PI*2),e.fillStyle=a.driver.color,e.fill(),e.lineWidth=a.isPlayer?3.5:2,e.strokeStyle=a.isPlayer?"#ffd000":"#0f1115",e.stroke()}}startLights(t){if(t<0){this.el.lights.hidden=!0;return}this.el.lights.hidden=!1,Array.from(this.el.lights.children).forEach((e,n)=>e.classList.toggle("on",n<t))}message(t,e="info",n=1.5){let i=document.createElement("div");for(i.className="msg "+e+(t.length>16?" small":""),i.textContent=t,this.el.msgs.appendChild(i);this.el.msgs.children.length>3;)this.el.msgs.firstChild.remove();setTimeout(()=>i.classList.add("out"),n*1e3),setTimeout(()=>i.remove(),n*1e3+320)}lapFlash(t,e,n){let i=document.createElement("div");i.className="lapflash "+e;let s={record:"\u0420\u0435\u043A\u043E\u0440\u0434 \u0442\u0440\u0430\u0441\u0441\u044B",fastest:"\u0411\u044B\u0441\u0442\u0440\u0435\u0439\u0448\u0438\u0439 \u043A\u0440\u0443\u0433",pb:"\u041B\u0438\u0447\u043D\u044B\u0439 \u043B\u0443\u0447\u0448\u0438\u0439",normal:"\u041A\u0440\u0443\u0433"}[e],o="";e==="record"&&n!=null&&(o=" "+rc(t-n)),i.innerHTML=`<small>${s}</small>${He(t)}${o}`,this.el.msgs.appendChild(i),setTimeout(()=>i.remove(),2600),e==="record"&&(this.el.ltBest.textContent=He(t))}boostFlash(){this.boostT=.5}update(t,e){let n=t.player,i=this.el;if(this.fpsAcc+=e,this.fpsN++,this.fpsAcc>.5&&(i.fps.textContent=Math.round(this.fpsN/this.fpsAcc)+" FPS",this.fpsAcc=0,this.fpsN=0),!n)return;let s=t.karts.length;if(this.set("pos",i.posNum,String(n.rank+1)),this.set("of",i.posOf,"/"+s),this.set("lap",i.lap,Math.min(t.laps,n.lapsDone+1)+"/"+t.laps),this.rows&&s>1){let x=t.order[0];t.order.forEach((m,p)=>{let _=this.rows[p];this.set("tp"+p,_.p,String(p+1)),this.set("tc"+p,_.i.style,m.driver.color,"background"),this.set("tn"+p,_.n,m.name);let y;if(m.finished)y=p===0?"\u0424\u0438\u043D\u0438\u0448":"+"+(m.finishTime-x.finishTime).toFixed(1);else if(p===0)y="\u041B\u0438\u0434\u0435\u0440";else{let R=(x.finished?t.laps*t.geom.length:x.progress)-m.progress;y=R>t.geom.length?"+"+Math.floor(R/t.geom.length)+" \u043A\u0440.":"+"+(R/Math.max(15,m.speed||20)).toFixed(1)}this.set("tg"+p,_.g,y);let v="row"+(m.isPlayer?" me":"")+(m.finished?" done":"");this.set("tr"+p,_.r,v,"className")})}if(n.rouletteT>0){if(this.lastRoulette-=e,this.lastRoulette<=0){this.lastRoulette=.08;let x=Eu[Math.floor(Math.random()*Eu.length)];i.icon.innerHTML=wo[x],i.slot.className="item-slot spin",this.cache.item=null,t.app.audio.ctx&&t.app.audio.play("tick")}this.set("cnt",i.cnt,!0,"hidden")}else{let x=(n.item||"")+n.itemCount;this.cache.item!==x&&(this.cache.item=x,i.icon.innerHTML=n.item?wo[n.item]:"",i.slot.className="item-slot"+(n.item?" ready":""),i.cnt.hidden=!(n.item&&n.itemCount>1),i.cnt.textContent="\xD7"+n.itemCount)}let o=Math.round(n.speed*3.6);this.set("spd",i.speed,String(o));let a=Yt(.1+n.speed/(n.p.maxSpeed*1.25)*.88,0,1),l=Math.round(a*12);this.cache.leds!==l&&(this.cache.leds=l,this.ledEls.forEach((x,m)=>x.classList.toggle("on",m<l)),i.leds.classList.toggle("shift",l>=11));let c=t.canDrive&&!n.finished?t.time-n.lapStart:n.finished?n.lapTimes[n.lapTimes.length-1]:0;this.set("lt",i.ltNow,He(c));let h=t.delta(),u=h==null?"":rc(h);this.set("dl",i.ltDelta,u),this.set("dlc",i.ltDelta,"lt-delta"+(h==null?"":h<0?" neg":" pos"),"className");let f=n.drifting?n.driftCharge:0,d=[.9,1.9,3];for(let x=0;x<3;x++){let m=x?d[x-1]:0,p=d[x],y=Yt((f-m)/(p-m),0,1).toFixed(2);this.cache["dr"+x]!==y&&(this.cache["dr"+x]=y,this.driftEls[x].style.transform=`scaleX(${y})`)}let g=n.boostT>0;this.set("lines",i.lines,g?"speedlines on":"speedlines","className"),this.set("hitf",i.hitflash,n.spinT>1?"hitflash on":"hitflash","className"),this.set("wrong",i.wrong,!(n.wrongT>1.2&&!n.finished),"hidden"),this.mapT=(this.mapT||0)+e,this.mapT>1/30&&(this.mapT=0,this.drawMinimap(t))}};var mn=r=>440*Math.pow(2,(r-69)/12),Eo=class{constructor(){this.ctx=null,this.vol={master:.8,music:.45,sfx:.9},this.muted=!1,this.musicMode=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,n.attack.value=.005,n.release.value=.2,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.connect(this.master),this.applyVolumes();let i=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,i,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let o=0;o<i;o++)s[o]=Math.random()*2-1;this.engines=[this.makeEngine(1),this.makeEngine(.55),this.makeEngine(.55)],this.skid=this.loopNoise("bandpass",1900,1.2),this.wind=this.loopNoise("lowpass",420,.7),this.startSequencer()}applyVolumes(){if(!this.ctx)return;let t=this.muted?0:this.vol.master;this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05),this.music.gain.setTargetAtTime(this.vol.music*.55,this.ctx.currentTime,.05),this.sfx.gain.setTargetAtTime(this.vol.sfx,this.ctx.currentTime,.05)}setVolumes(t){Object.assign(this.vol,t),this.applyVolumes()}toggleMute(){return this.muted=!this.muted,this.applyVolumes(),this.muted}loopNoise(t,e,n){let i=this.ctx,s=i.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;let o=i.createBiquadFilter();o.type=t,o.frequency.value=e,o.Q.value=n;let a=i.createGain();return a.gain.value=0,s.connect(o).connect(a).connect(this.sfx),s.start(),{f:o,g:a}}makeEngine(t){let e=this.ctx,n=e.createOscillator();n.type="sawtooth";let i=e.createOscillator();i.type="square";let s=e.createOscillator();s.frequency.value=23;let o=e.createGain();o.gain.value=2.5,s.connect(o),o.connect(n.frequency),o.connect(i.frequency);let a=e.createGain();a.gain.value=.5;let l=e.createGain();l.gain.value=.3;let c=e.createBiquadFilter();c.type="lowpass",c.Q.value=5,c.frequency.value=900;let h=e.createGain();return h.gain.value=0,n.connect(a).connect(c),i.connect(l).connect(c),c.connect(h).connect(this.sfx),n.start(),i.start(),s.start(),{o1:n,o2:i,f:c,out:h,level:t}}setEngine(t,e,n,i){if(!this.ctx)return;let s=this.engines[t],o=this.ctx.currentTime,a=52+e*185;s.o1.frequency.setTargetAtTime(a,o,.03),s.o2.frequency.setTargetAtTime(a*.5,o,.03),s.f.frequency.setTargetAtTime(500+e*2400+n*900,o,.04),s.out.gain.setTargetAtTime(i*s.level*(.09+n*.07+e*.05),o,.05)}setSkid(t){this.ctx&&this.skid.g.gain.setTargetAtTime(t*.22,this.ctx.currentTime,.04)}setWind(t){this.ctx&&this.wind.g.gain.setTargetAtTime(t*.2,this.ctx.currentTime,.1)}silenceEngines(){if(this.ctx){for(let t=0;t<this.engines.length;t++)this.engines[t].out.gain.setTargetAtTime(0,this.ctx.currentTime,.08);this.setSkid(0),this.setWind(0)}}tone(t,e,n,i,s,o=0,a=null){let l=this.ctx,c=l.currentTime+o,h=l.createOscillator();h.type=t,h.frequency.setValueAtTime(e,c),n!==e&&h.frequency.exponentialRampToValueAtTime(Math.max(20,n),c+i);let u=l.createGain();u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(s,c+.008),u.gain.exponentialRampToValueAtTime(1e-4,c+i),h.connect(u).connect(a||this.sfx),h.start(c),h.stop(c+i+.05)}noise(t,e,n,i,s,o=1,a=0,l=null){let c=this.ctx,h=c.currentTime+a,u=c.createBufferSource();u.buffer=this.noiseBuf,u.playbackRate.value=.8+Math.random()*.4;let f=c.createBiquadFilter();f.type=t,f.Q.value=o,f.frequency.setValueAtTime(e,h),f.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+i);let d=c.createGain();d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(s,h+.01),d.gain.exponentialRampToValueAtTime(1e-4,h+i),u.connect(f).connect(d).connect(l||this.sfx),u.start(h,Math.random()),u.stop(h+i+.05)}play(t,e=0,n=1){if(!this.ctx||n<=.01)return;let i=n;switch(t){case"light":this.tone("square",520,520,.22,.12*i);break;case"go":this.tone("square",1040,1040,.55,.14*i),this.tone("sine",520,520,.55,.12*i);break;case"hop":this.noise("lowpass",900,200,.12,.25*i,1);break;case"driftLevel":this.tone("triangle",500+e*260,900+e*300,.12,.16*i);break;case"miniturbo":this.noise("bandpass",400,3200,.45+e*.12,.35*i,2),this.tone("sawtooth",180,420,.35,.06*i);break;case"nitro":this.noise("bandpass",300,2600,.9,.45*i,1.5),this.tone("sawtooth",90,260,.8,.09*i);break;case"pad":this.noise("bandpass",600,3500,.5,.3*i,2),this.tone("triangle",600,1200,.25,.08*i);break;case"pickup":[0,.06,.12].forEach((s,o)=>this.tone("square",660*Math.pow(1.26,o),660*Math.pow(1.26,o),.08,.08*i,s));break;case"tick":this.tone("square",1500+Math.random()*400,1500,.03,.04*i);break;case"itemReady":this.tone("triangle",1318,1318,.2,.14*i),this.tone("triangle",1760,1760,.25,.1*i,.07);break;case"rocket":this.noise("bandpass",2400,500,.7,.4*i,1.2),this.tone("sawtooth",700,180,.5,.07*i);break;case"explosion":this.noise("lowpass",2200,90,1.1,.7*i,.7),this.tone("sine",110,35,.6,.5*i);break;case"drop":this.noise("lowpass",500,120,.3,.3*i),this.tone("sine",300,120,.2,.15*i);break;case"slip":this.tone("triangle",900,200,.6,.14*i),this.noise("bandpass",2e3,800,.5,.2*i,2);break;case"shield":this.tone("sine",400,1600,.5,.12*i),this.tone("triangle",800,2400,.5,.06*i,.05);break;case"shieldBreak":this.noise("highpass",3e3,6e3,.35,.3*i),this.tone("triangle",1800,400,.3,.1*i);break;case"hit":this.tone("sawtooth",600,90,.8,.12*i);break;case"wall":this.noise("lowpass",1400,150,.25,Math.min(.6,.12+e*.04)*i,.8),this.tone("sine",120,50,.2,Math.min(.5,.1+e*.03)*i);break;case"bump":this.noise("lowpass",900,120,.18,.3*i),this.tone("sine",160,60,.15,.25*i);break;case"lap":this.tone("triangle",988,988,.15,.14*i),this.tone("triangle",1318,1318,.3,.14*i,.12);break;case"finalLap":[0,.12,.24,.36].forEach((s,o)=>this.tone("square",mn(76+[0,4,7,12][o]),mn(76+[0,4,7,12][o]),.18,.08*i,s));break;case"best":[0,.07,.14].forEach((s,o)=>this.tone("triangle",mn(84+o*3),mn(84+o*3),.2,.1*i,s));break;case"finish":[[72,0],[76,.14],[79,.28],[84,.42],[79,.62],[84,.76]].forEach(([s,o])=>{this.tone("square",mn(s),mn(s),.22,.09*i,o),this.tone("triangle",mn(s-12),mn(s-12),.22,.1*i,o)});break;case"ui":this.tone("triangle",880,1320,.07,.08*i);break;case"uiMove":this.tone("triangle",660,660,.04,.05*i);break;case"wrong":this.tone("square",220,220,.2,.08*i);break}}startSequencer(){this.step=0,this.nextTime=this.ctx.currentTime+.1,this.bpm=124;let t=[[45,"m"],[41,"M"],[48,"M"],[43,"M"]];this.chords=t.map(([e,n])=>({root:e,tones:n==="m"?[0,3,7]:[0,4,7]})),this.timer=setInterval(()=>this.schedule(),25)}setMusic(t){this.musicMode=t}schedule(){if(!this.ctx||this.ctx.state!=="running")return;let t=60/this.bpm/4;for(;this.nextTime<this.ctx.currentTime+.12;)this.musicMode&&this.playStep(this.step,this.nextTime),this.nextTime+=t,this.step=(this.step+1)%64}playStep(t,e){let n=this.ctx,i=this.music,s=Math.floor(t/16),o=t%16,a=this.chords[s],l=this.musicMode==="race",c=e-n.currentTime;if(o%2===0){let h=a.root+(o%8===6?12:0);this.synth("sawtooth",mn(h),.2,l?.16:.1,c,520,i)}if(l||o%2===0){let h=[0,1,2,1,0,2,1,2],u=a.tones[h[o%8]]+a.root+24+(o>=8?12:0);this.synth("square",mn(u),.1,l?.035:.03,c,2400,i)}if(o===0)for(let h of a.tones)this.synth("triangle",mn(a.root+12+h),1.9,.035,c,1200,i);if(l){if(o%4===0){let h=n.createOscillator(),u=n.createGain();h.frequency.setValueAtTime(140,e),h.frequency.exponentialRampToValueAtTime(40,e+.15),u.gain.setValueAtTime(.5,e),u.gain.exponentialRampToValueAtTime(.001,e+.22),h.connect(u).connect(i),h.start(e),h.stop(e+.25)}(o===4||o===12)&&this.noise("bandpass",1800,900,.16,.22,.8,c,i),o%2===1&&this.noise("highpass",8e3,9e3,.05,.06,.5,c,i)}}synth(t,e,n,i,s,o,a){let l=this.ctx,c=l.currentTime+s,h=l.createOscillator();h.type=t,h.frequency.value=e;let u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=o,u.Q.value=2;let f=l.createGain();f.gain.setValueAtTime(1e-4,c),f.gain.exponentialRampToValueAtTime(i,c+.01),f.gain.exponentialRampToValueAtTime(1e-4,c+n),h.connect(u).connect(f).connect(a),h.start(c),h.stop(c+n+.05)}};var Au={left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"],gas:["ArrowUp","KeyW"],brake:["ArrowDown","KeyS"],drift:["Space","ShiftLeft","ShiftRight"],item:["KeyE","KeyX","ControlLeft","ControlRight","Enter"],look:["KeyC"],camera:["KeyV"],reset:["KeyR"],pause:["Escape","KeyP"],mute:["KeyM"]},Ao=class{constructor(){this.down=new Set,this.pressed=new Set,this.touch={left:!1,right:!1,brake:!1,drift:!1,item:!1,gas:!1},this.touchPressed=new Set,this.touchActive=!1,this.padPrev=[],this.gamepadActive=!1,this.state={steer:0,throttle:0,brake:0,drift:!1,driftPressed:!1,item:!1,look:!1,camera:!1,reset:!1,pause:!1,mute:!1},addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")||(t.repeat||this.pressed.add(t.code),this.down.add(t.code),this.captureKeys&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.gamepadActive=!1)}),addEventListener("keyup",t=>this.down.delete(t.code)),addEventListener("blur",()=>{this.down.clear()}),this.captureKeys=!1}is(t){return Au[t].some(e=>this.down.has(e))}was(t){return Au[t].some(e=>this.pressed.has(e))}bindTouch(t){let e=(n,i)=>{i&&!this.touch[n]&&this.touchPressed.add(n),this.touch[n]=i};t.querySelectorAll("[data-touch]").forEach(n=>{let i=n.dataset.touch,s=a=>{a.preventDefault(),e(i,!0),n.classList.add("on"),this.touchActive=!0},o=a=>{a.preventDefault(),e(i,!1),n.classList.remove("on")};n.addEventListener("pointerdown",s),n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),n.addEventListener("pointerleave",o)})}poll(t=!1){let e=this.state,n=0,i=0,s=0,o=!1,a=!1,l=!1,c=!1;this.is("left")&&(n-=1),this.is("right")&&(n+=1),this.is("gas")&&(i=1),this.is("brake")&&(s=1),this.is("drift")&&(o=!0),this.was("drift")&&(a=!0),this.was("item")&&(l=!0),this.is("look")&&(c=!0);let h=this.was("camera"),u=this.was("reset"),f=this.was("pause"),d=this.was("mute"),g=navigator.getGamepads?navigator.getGamepads():[];for(let m of g){if(!m||m.mapping!=="standard")continue;let p=E=>m.buttons[E]&&m.buttons[E].pressed,_=E=>m.buttons[E]?m.buttons[E].value:0,y=this.padPrev[m.index]||[],v=E=>p(E)&&!y[E],R=m.axes[0]||0;(Math.abs(R)>.15||m.buttons.some(E=>E.pressed))&&(this.gamepadActive=!0),Math.abs(R)>.12&&(n+=Math.sign(R)*((Math.abs(R)-.12)/.88)),p(14)&&(n-=1),p(15)&&(n+=1),i=Math.max(i,_(7),p(0)?1:0),s=Math.max(s,_(6),p(2)?1:0),(p(5)||p(4)||p(1))&&(o=!0),(v(5)||v(4)||v(1))&&(a=!0),v(3)&&(l=!0),(p(10)||p(11))&&(c=!0),v(8)&&(h=!0),v(9)&&(f=!0),this.padPrev[m.index]=m.buttons.map(E=>E.pressed)}let x=this.touch;return x.left&&(n-=1),x.right&&(n+=1),x.brake&&(s=1),x.drift&&(o=!0),this.touchPressed.has("drift")&&(a=!0),this.touchPressed.has("item")&&(l=!0),this.touchPressed.has("pause")&&(f=!0),t&&!x.brake&&(i=1),x.gas&&(i=1),e.steer=Yt(n,-1,1),e.throttle=i,e.brake=s,e.drift=o,e.driftPressed=a,e.item=l,e.look=c,e.camera=h,e.reset=u,e.pause=f,e.mute=d,this.pressed.clear(),this.touchPressed.clear(),e}pollMenu(){var n,i,s,o,a,l,c;let t=navigator.getGamepads?navigator.getGamepads():[],e={up:!1,down:!1,left:!1,right:!1,ok:!1,back:!1};for(let h of t){if(!h||h.mapping!=="standard")continue;let u=this.menuPrev||{},f={up:((n=h.buttons[12])==null?void 0:n.pressed)||h.axes[1]<-.6,down:((i=h.buttons[13])==null?void 0:i.pressed)||h.axes[1]>.6,left:((s=h.buttons[14])==null?void 0:s.pressed)||h.axes[0]<-.6,right:((o=h.buttons[15])==null?void 0:o.pressed)||h.axes[0]>.6,ok:(a=h.buttons[0])==null?void 0:a.pressed,back:((l=h.buttons[1])==null?void 0:l.pressed)||((c=h.buttons[9])==null?void 0:c.pressed)};for(let d in f)f[d]&&!u[d]&&(e[d]=!0);this.menuPrev=f}return e}};var Se=new P,Ro=class{constructor(t){this.cam=t,this.pos=new P,this.look=new P,this.yaw=0,this.shakeAmt=0,this.fov=70,this.mode=0,this.tv={t:0,kind:0,anchor:new P,target:null,switchT:0},this.orbitA=0}shake(t){this.shakeAmt=Math.max(this.shakeAmt,t)}snapChase(t){this.yaw=t.h;let[e,n]=this.mode?[7.4,3.1]:[5.4,2.25];this.pos.set(t.x-Math.sin(t.h)*e,t.y+n,t.z-Math.cos(t.h)*e),this.look.set(t.x+Math.sin(t.h)*3,t.y+1,t.z+Math.cos(t.h)*3)}chase(t,e,n=!1){let s=e.speed>3&&e.vf>0?Math.atan2(e.vx,e.vz):e.h,o=e.h+cs(s-e.h)*.6+(e.spinT>0,0);this.yaw=go(this.yaw,e.spinT>0?this.yaw:o,4.5,t);let a=n?this.yaw+Math.PI:this.yaw,[l,c]=this.mode?[7.4,3.1]:[5.4,2.25],h=e.boostT>0?.35:0,u=l+h+Yt(e.speed/30,0,1.3)*.4;Se.set(e.x-Math.sin(a)*u,e.y+c+e.airY*.5,e.z-Math.cos(a)*u);let f=1-Math.exp(-t*22);this.pos.lerp(Se,f),this.pos.y=Math.max(this.pos.y,e.y+1.2),Se.set(e.x+Math.sin(a)*3.2,e.y+1+e.airY*.6,e.z+Math.cos(a)*3.2),this.look.lerp(Se,1-Math.exp(-t*20));let d=67+Yt(e.speed/e.p.maxSpeed,0,1.25)*7+(e.boostT>0?5:0);this.fov=Fe(this.fov,d,4,t),this.apply(t)}intro(t,e,n){let i=t*t*(3-2*t),s=e.h+2.4,o=e.h+Math.PI,a=s+(o-s)*i,l=34-28.6*i,c=14-11.75*i;this.pos.set(e.x-Math.sin(a)*-l,e.y+c,e.z-Math.cos(a)*-l);let h=e.x+Math.sin(e.h)*3*i,u=e.z+Math.cos(e.h)*3*i;this.look.set(h,e.y+1*i,u),this.yaw=e.h,this.fov=60+8*i,this.apply(0)}orbit(t,e){this.orbitA+=t*.35;let n=e.h+Math.PI*.75+this.orbitA;Se.set(e.x+Math.sin(n)*7,e.y+2.4,e.z+Math.cos(n)*7),this.pos.lerp(Se,1-Math.exp(-t*3)),Se.set(e.x,e.y+.8,e.z),this.look.lerp(Se,1-Math.exp(-t*6)),this.fov=Fe(this.fov,55,2,t),this.apply(t)}broadcast(t,e,n){let i=this.tv;if(i.switchT-=t,!i.target||i.switchT<=0){i.kind=(i.kind+1)%3,i.switchT=6+Math.random()*3;let o=e.slice().sort((a,l)=>l.progress-a.progress);i.target=o[Math.floor(Math.random()*Math.min(4,o.length))],i.kind===0&&this.placeTrackside(i.target,n),this.orbitA=Math.random()*6}let s=i.target;if(i.kind===0){n.deltaS(s.s,i.anchorS)>18&&this.placeTrackside(s,n),this.pos.copy(i.anchor),Se.set(s.x,s.y+.8,s.z),this.look.lerp(Se,1-Math.exp(-t*8));let o=this.pos.distanceTo(Se);this.fov=Fe(this.fov,Yt(900/Math.max(o,8),14,55),3,t)}else if(i.kind===1){let o=s.h+Math.PI+Math.sin(this.orbitA+performance.now()*2e-4)*.6;Se.set(s.x+Math.sin(o)*16,s.y+11,s.z+Math.cos(o)*16),this.pos.lerp(Se,1-Math.exp(-t*2)),Se.set(s.x+Math.sin(s.h)*6,s.y,s.z+Math.cos(s.h)*6),this.look.lerp(Se,1-Math.exp(-t*4)),this.fov=Fe(this.fov,50,2,t)}else{let o=s.h+2.6;Se.set(s.x+Math.sin(o)*4.5,s.y+1.3,s.z+Math.cos(o)*4.5),this.pos.lerp(Se,1-Math.exp(-t*6)),Se.set(s.x-Math.sin(s.h)*1.5,s.y+.7,s.z-Math.cos(s.h)*1.5),this.look.lerp(Se,1-Math.exp(-t*10)),this.fov=Fe(this.fov,62,3,t)}this.apply(t)}placeTrackside(t,e){let n=e.wrapS(t.s+32+Math.random()*12),i=Math.random()<.5?-1:1,s=e.pointAt(n,i*(e.barrier+4));this.tv.anchor.set(s.x,s.y+2.5+Math.random()*3,s.z),this.tv.anchorS=n}apply(t){let e=this.cam;if(e.position.copy(this.pos),this.shakeAmt>.001){let n=this.shakeAmt;e.position.x+=(Math.random()-.5)*n,e.position.y+=(Math.random()-.5)*n,e.position.z+=(Math.random()-.5)*n,this.shakeAmt*=Math.exp(-t*7)}e.lookAt(this.look),Math.abs(e.fov-this.fov)>.01&&(e.fov=this.fov,e.updateProjectionMatrix())}};var Ru="apex-karting-v1",Cu={quality:null,qualityAuto:!0,master:.8,music:.45,sfx:.9,camera:0,touch:"auto",fps:!1,driverId:"vikhr",trackId:"valley",difficulty:"normal",laps:3,opponents:7},Co=class{constructor(){this.data={settings:{...Cu},records:{},cupWins:0};try{let t=localStorage.getItem(Ru);if(t){let e=JSON.parse(t);this.data.settings={...Cu,...e.settings||{}},this.data.records=e.records||{},this.data.cupWins=e.cupWins||0}}catch{}}get settings(){return this.data.settings}save(){try{localStorage.setItem(Ru,JSON.stringify(this.data))}catch{}}setSettings(t){Object.assign(this.data.settings,t),this.save()}record(t){return this.data.records[t]||(this.data.records[t]={bestLap:null,ghost:null,trace:null,driverId:null,bestRace:{}})}saveLap(t,e,n,i,s){let o=this.record(t);o.bestLap=e,o.ghost=n&&n.length>8?n.slice():null,o.trace=i?Array.from(i,a=>a===void 0?null:Math.round(a*1e3)/1e3):null,o.driverId=s,this.save()}saveRace(t,e,n){let i=this.record(t),s=i.bestRace[e];return s==null||n<s?(i.bestRace[e]=n,this.save(),!0):!1}};var Lt=r=>document.getElementById(r),li=r=>String(r).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Iu={race:"\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0433\u043E\u043D\u043A\u0430",cup:"\u041A\u0443\u0431\u043E\u043A \u0410\u043F\u0435\u043A\u0441\u0430",tt:"\u0417\u0430\u0435\u0437\u0434 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F"},Io=["valley","harbor","neon"],Jg={steer:0,throttle:0,brake:0,drift:!1,driftPressed:!1,item:!1,look:!1,camera:!1,reset:!1,pause:!1},pc=class{constructor(){this.store=new Co,this.settings=this.store.settings,this.settings.quality||this.store.setSettings({quality:hs()?"medium":"high"}),this.canvas=Lt("game"),this.renderer=new zr({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Te,this.renderer.toneMapping=Fs,cu(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.camera=new Ne(70,innerWidth/innerHeight,.1,3e3),this.camRig=new Ro(this.camera),this.camRig.mode=this.settings.camera,this.hud=new To,this.audio=new Eo,this.audio.setVolumes({master:this.settings.master,music:this.settings.music,sfx:this.settings.sfx}),this.input=new Ao,this.input.bindTouch(Lt("touch")),this.state="menu",this.paused=!1,this.race=null,this.cup=null,this.menu={mode:"race",trackId:this.settings.trackId,driverId:this.settings.driverId},this.screenStack=[],this.applyQuality(),addEventListener("resize",()=>this.resize()),this.resize(),this.bindUI(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="race"&&this.pause()});let t=()=>{this.audio.init(),this.audio.setMusic(this.state==="race"?"race":"menu")};addEventListener("pointerdown",t),addEventListener("keydown",t),this.startAttract(this.menu.trackId),Lt("loading").hidden=!0,this.showScreen("title"),this.last=performance.now(),requestAnimationFrame(e=>this.loop(e))}applyQuality(){let t=this.settings.quality,e=this.renderer,n=window.devicePixelRatio||1;if(e.setPixelRatio(t==="high"?Math.min(n,2):t==="medium"?Math.min(n,1.5):Math.min(n,1)),e.shadowMap.enabled=t!=="low",e.shadowMap.type=t==="high"?zl:io,t==="high"){if(!this.composer){let i=new Ae(1,1,{type:Ye,samples:4});this.composer=new ho(e,i),this.renderPass=new uo(new es,this.camera),this.bloom=new ls(new st(256,256),.4,.5,.85),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(new fo)}}else this.composer&&(this.composer.dispose(),this.composer=null);this.resize(),this.hud.showFps(this.settings.fps),this.hud.touchEnabled=this.settings.touch==="on"||this.settings.touch==="auto"&&hs()}resize(){let t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e))}applyTheme(t){let e=t.theme;this.renderer.toneMappingExposure=e.exposure,this.bloom&&(this.bloom.strength=e.night?.7:.32,this.bloom.threshold=e.night?.62:.88,this.bloom.radius=e.night?.55:.4)}render(){this.race&&(this.composer?(this.renderPass.scene=this.race.scene,this.composer.render()):this.renderer.render(this.race.scene,this.camera))}setRace(t){this.race&&this.race.dispose(),this.race=t,this.applyTheme(t),this.renderer.compile(t.scene,this.camera)}startAttract(t){this.setRace(new Gs(this,{mode:"attract",trackId:t,laps:999,difficulty:"hard"}));let e=en.find(n=>n.id===t);Lt("onair-what").textContent=e.name}startRace(t){this.lastCfg=t,Lt("loading").hidden=!1,Lt("loading-text").textContent="\u0413\u043E\u0442\u043E\u0432\u0438\u043C \u0442\u0440\u0430\u0441\u0441\u0443",this.hideScreens(),Lt("onair").hidden=!0,setTimeout(()=>{this.setRace(new Gs(this,t)),this.hud.setupRace(this.race),this.hud.show(!0);let e=t.laps===1?"1 \u043A\u0440\u0443\u0433":t.laps<5?t.laps+" \u043A\u0440\u0443\u0433\u0430":t.laps+" \u043A\u0440\u0443\u0433\u043E\u0432";this.hud.message(this.race.def.name,"info",2.4),this.hud.message((t.mode==="cup"?`\u042D\u0442\u0430\u043F ${this.cup.stage+1} \u0438\u0437 3 \xB7 `:"")+e,"small",2.4),this.hud.showTouch(!0),this.state="race",this.paused=!1,this.input.poll(),this.input.captureKeys=!0,this.audio.setMusic("race"),Lt("loading").hidden=!0,this.canvas.focus()},30)}pause(){this.state==="race"&&(this.state="paused",this.paused=!0,this.audio.silenceEngines(),this.hud.showTouch(!1),Lt("pause-title").textContent=this.race.def.name,this.showScreen("pause"))}resume(){this.hideScreens(),this.state="race",this.paused=!1,this.input.poll(),this.hud.showTouch(!0),this.canvas.focus()}quitToMenu(){this.cup=null,this.state="menu",this.paused=!1,this.hud.show(!1),this.input.captureKeys=!1,this.audio.silenceEngines(),this.audio.setMusic("menu"),this.startAttract(this.menu.trackId),this.screenStack=[],this.showScreen("title")}onRaceFinished(t,e){if(e!==this.race||this.state!=="race")return;this.state="results",this.hud.show(!1),this.audio.silenceEngines(),this.input.captureKeys=!1;let n=t.rows.find(s=>s.isPlayer),i="";t.mode!=="cup"&&n&&!n.est&&t.mode!=="attract"&&this.store.saveRace(t.trackId,t.laps,n.time)&&(i="\u041D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434 \u0437\u0430\u0435\u0437\u0434\u0430 \u043D\u0430 "+t.laps+" \u043A\u0440.: "+He(n.time)+"."),t.mode==="cup"&&(t.rows.forEach((s,o)=>{this.cup.points[s.driver.id]=(this.cup.points[s.driver.id]||0)+sc[o],s.pts=sc[o]}),this.cup.lastResults=t),this.renderResults(t,i),this.showScreen("results")}startCup(){let t=pn.map(e=>e.id);this.cup={stage:0,points:{},driverId:this.menu.driverId,difficulty:this.settings.difficulty,field:t},t.forEach(e=>this.cup.points[e]=0),this.startCupStage()}startCupStage(){let t=this.cup,e;if(t.stage===0){let n=t.field.filter(i=>i!==t.driverId).sort(()=>Math.random()-.5);n.splice(5,0,t.driverId),e=n}else e=t.field.slice().sort((n,i)=>t.points[n]-t.points[i]);this.startRace({mode:"cup",trackId:Io[t.stage],driverId:t.driverId,difficulty:t.difficulty,laps:3,grid:e})}showScreen(t){this.hideScreens();let e=Lt("scr-"+t);e.hidden=!1,this.curScreen=t,Lt("onair").hidden=!(this.state==="menu"&&t==="title"),t==="setup"&&this.renderSetup(),t==="settings"&&this.renderSettings();let n=e.querySelector(".menu-btn, .btn.primary, button");n&&!hs()&&n.focus({preventScroll:!0})}hideScreens(){document.querySelectorAll(".screen").forEach(t=>t.hidden=!0),this.curScreen=null}bindUI(){document.body.addEventListener("click",t=>{t.target.closest("button")&&this.audio.ctx&&this.audio.play("ui");let n=t.target.closest("[data-go]");if(n){let s=n.dataset.go;s==="race"||s==="cup"||s==="tt"?(this.menu.mode=s,this.showScreen("setup")):s==="settings"?(this.settingsBack="title",this.showScreen("settings")):this.showScreen(s)}let i=t.target.closest("[data-act]");if(i){let s=i.dataset.act;s==="resume"&&this.resume(),s==="restart"&&(this.hideScreens(),this.startRace(this.lastCfg)),s==="settings"&&(this.settingsBack="pause",this.showScreen("settings")),s==="quit"&&this.quitToMenu()}}),Lt("btn-start").addEventListener("click",()=>{let t=this.settings;this.store.setSettings({driverId:this.menu.driverId,trackId:this.menu.trackId}),this.menu.mode==="cup"?this.startCup():this.startRace({mode:this.menu.mode,trackId:this.menu.trackId,driverId:this.menu.driverId,difficulty:t.difficulty,laps:t.laps,opponents:this.menu.mode==="tt"?0:t.opponents})}),Lt("btn-settings-back").addEventListener("click",()=>{this.settingsBack==="pause"?this.showScreen("pause"):this.showScreen("title")}),document.querySelectorAll("#scr-setup .seg").forEach(t=>{t.addEventListener("click",e=>{let n=e.target.closest("button");if(!n)return;let i=t.dataset.opt,s=i==="difficulty"?n.dataset.v:Number(n.dataset.v);this.store.setSettings({[i]:s}),this.syncSeg(t,String(s))})}),document.querySelectorAll("#scr-settings .seg").forEach(t=>{t.addEventListener("click",e=>{let n=e.target.closest("button");if(!n)return;let i=t.dataset.set,s=n.dataset.v;i==="camera"&&(s=Number(s)),i==="fps"&&(s=s==="true");let o=i==="quality"&&s!==this.settings.quality;this.store.setSettings({[i]:s}),i==="quality"&&this.store.setSettings({qualityAuto:!1}),this.syncSeg(t,String(s)),i==="camera"&&(this.camRig.mode=s),this.applyQuality(),o&&this.state==="menu"&&this.startAttract(this.menu.trackId)})}),document.querySelectorAll("#scr-settings input[type=range]").forEach(t=>{t.addEventListener("input",()=>{let e=t.dataset.vol;this.store.setSettings({[e]:Number(t.value)}),this.audio.setVolumes({[e]:Number(t.value)})})}),addEventListener("keydown",t=>{(t.code==="Escape"||t.code==="KeyP")&&(this.state==="paused"&&this.curScreen==="pause"?(t.preventDefault(),this.resume()):this.state==="menu"&&this.curScreen&&this.curScreen!=="title"&&t.code==="Escape"?this.showScreen("title"):this.curScreen==="settings"&&t.code==="Escape"&&Lt("btn-settings-back").click()),t.code==="KeyM"&&this.state!=="race"&&this.audio.toggleMute()})}syncSeg(t,e){t.querySelectorAll("button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.v===e)))}renderSetup(){let t=this.menu,e=this.settings;Lt("setup-eyebrow").textContent=Iu[t.mode],Lt("setup-title").textContent=t.mode==="cup"?"\u0422\u0440\u0438 \u044D\u0442\u0430\u043F\u0430, \u043E\u0434\u043D\u0430 \u0442\u0430\u0431\u043B\u0438\u0446\u0430":t.mode==="tt"?"\u041E\u0434\u0438\u043D \u043D\u0430 \u0442\u0440\u0430\u0441\u0441\u0435 \u043F\u0440\u043E\u0442\u0438\u0432 \u0447\u0430\u0441\u043E\u0432":"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0440\u0430\u0441\u0441\u0443 \u0438 \u043F\u0438\u043B\u043E\u0442\u0430";let n=t.mode==="cup",i=Lt("track-list");i.innerHTML="";for(let l of en){let c=this.store.record(l.id),h=dc(l.id),u=document.createElement("button");u.className="track-card",u.setAttribute("aria-pressed",String(!n&&l.id===t.trackId)),n&&(u.disabled=!0),u.innerHTML=`<canvas width="240" height="180" aria-hidden="true"></canvas><span class="nm">${li(l.name)}</span><span class="meta"><span>${Math.round(h.length)} \u043C</span><span>${c.bestLap?He(c.bestLap):"\u043D\u0435\u0442 \u0440\u0435\u043A\u043E\u0440\u0434\u0430"}</span></span>`,Kg(u.querySelector("canvas"),h,l.theme),u.addEventListener("click",()=>{n||(t.trackId=l.id,i.querySelectorAll(".track-card").forEach(f=>f.setAttribute("aria-pressed","false")),u.setAttribute("aria-pressed","true"),Lt("track-desc").textContent=l.desc,this.race&&this.race.def.id!==l.id&&this.startAttract(l.id))}),i.appendChild(u)}let s=en.find(l=>l.id===t.trackId);Lt("track-desc").textContent=n?"\u041E\u0447\u043A\u0438 \u0437\u0430 \u043C\u0435\u0441\u0442\u0430: 10, 8, 6, 5, 4, 3, 2, 1. \u041D\u0430 \u0432\u0442\u043E\u0440\u043E\u043C \u0438 \u0442\u0440\u0435\u0442\u044C\u0435\u043C \u044D\u0442\u0430\u043F\u0430\u0445 \u043B\u0438\u0434\u0435\u0440 \u043A\u0443\u0431\u043A\u0430 \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C.":s.desc;let o=Lt("cup-stages");o.hidden=!n,o.innerHTML=n?Io.map((l,c)=>`<span>\u042D\u0442\u0430\u043F ${c+1}: <b>${li(en.find(h=>h.id===l).short)}</b></span>`).join('<span aria-hidden="true">\u2192</span>'):"";let a=Lt("driver-list");a.innerHTML="";for(let l of pn){let c=document.createElement("button");c.className="drv",c.setAttribute("aria-pressed",String(l.id===t.driverId)),c.innerHTML=`<span class="num" style="background:${l.color};color:${l.accent}">${l.num}</span><span class="nm">${li(l.name)}</span>`,c.addEventListener("click",()=>{t.driverId=l.id,a.querySelectorAll(".drv").forEach(h=>h.setAttribute("aria-pressed","false")),c.setAttribute("aria-pressed","true"),this.renderDriver()}),a.appendChild(c)}this.renderDriver(),Lt("opt-diff").hidden=t.mode==="tt",Lt("opt-laps").hidden=t.mode==="cup",Lt("opt-opp").hidden=t.mode!=="race",this.syncSeg(document.querySelector("[data-opt=difficulty]"),e.difficulty),this.syncSeg(document.querySelector("[data-opt=laps]"),String(e.laps)),this.syncSeg(document.querySelector("[data-opt=opponents]"),String(e.opponents)),Lt("btn-start").textContent=n?"\u041D\u0430\u0447\u0430\u0442\u044C \u043A\u0443\u0431\u043E\u043A":"\u041D\u0430 \u0441\u0442\u0430\u0440\u0442"}renderDriver(){let t=pn.find(n=>n.id===this.menu.driverId),e=[["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",t.stats.speed],["\u0420\u0430\u0437\u0433\u043E\u043D",t.stats.accel],["\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",t.stats.handling],["\u0412\u0435\u0441",t.stats.weight]];Lt("driver-stats").innerHTML=e.map(([n,i])=>`<div class="stat"><span>${n}</span><span class="pips" aria-label="${i} \u0438\u0437 5">${[1,2,3,4,5].map(s=>`<i class="${s<=i?"on":""}"></i>`).join("")}</span></div>`).join(""),Lt("driver-bio").textContent=`\u2116${t.num} ${t.name}. ${t.bio}`}renderSettings(){let t=this.settings;document.querySelectorAll("#scr-settings .seg").forEach(e=>this.syncSeg(e,String(t[e.dataset.set]))),document.querySelectorAll("#scr-settings input[type=range]").forEach(e=>e.value=t[e.dataset.vol])}renderResults(t,e){let n=t.mode==="cup",i=t.mode==="tt",s=t.rows.find(u=>u.isPlayer);Lt("res-eyebrow").textContent=n?`\u041A\u0443\u0431\u043E\u043A \u0410\u043F\u0435\u043A\u0441\u0430 \xB7 \u044D\u0442\u0430\u043F ${this.cup.stage+1} \u0438\u0437 3`:Iu[t.mode],Lt("res-title").textContent=i?t.trackName:s?`${s.pos}-\u0435 \u043C\u0435\u0441\u0442\u043E \xB7 ${t.trackName}`:t.trackName;let o=t.rows[0],a;if(i){let u=Math.min(...s.laps);a='<thead><tr><th>\u041A\u0440\u0443\u0433</th><th class="mono">\u0412\u0440\u0435\u043C\u044F</th><th class="mono">\u041A \u043B\u0443\u0447\u0448\u0435\u043C\u0443</th></tr></thead><tbody>'+s.laps.map((d,g)=>`<tr class="${d===u?"me":""}"><td class="p">${g+1}</td><td class="mono ${d===u?"purple":""}">${He(d)}</td><td class="mono">${d===u?"\u2014":"+"+(d-u).toFixed(3)}</td></tr>`).join("")+`<tr><td class="p">\u03A3</td><td class="mono">${He(s.time)}</td><td class="mono"></td></tr></tbody>`;let f=this.store.record(t.trackId);e=(e?e+" ":"")+`\u0420\u0435\u043A\u043E\u0440\u0434 \u0442\u0440\u0430\u0441\u0441\u044B: ${He(f.bestLap)}. \u041B\u0443\u0447\u0448\u0438\u0439 \u043A\u0440\u0443\u0433 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043F\u0440\u0438\u0437\u0440\u0430\u043A \u0434\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0437\u0430\u0435\u0437\u0434\u0430.`}else a=`<thead><tr><th>\u041F\u043E\u0437</th><th>\u041F\u0438\u043B\u043E\u0442</th><th class="mono">\u0412\u0440\u0435\u043C\u044F</th><th class="mono">\u041E\u0442\u0441\u0442\u0430\u0432\u0430\u043D\u0438\u0435</th><th class="mono">\u041B\u0443\u0447\u0448\u0438\u0439 \u043A\u0440\u0443\u0433</th>${n?'<th class="mono">\u041E\u0447\u043A\u0438</th>':""}</tr></thead><tbody>`+t.rows.map(u=>{let f=u===o?"\u2014":"+"+(u.time-o.time).toFixed(3),d=u.bestLap===t.fastestLap;return`<tr class="${u.isPlayer?"me":""}"><td class="p">${u.pos}</td><td><span class="chip"><i style="background:${u.driver.color}"></i>${li(u.name)}</span></td><td class="mono ${u.est?"est":""}">${He(u.time)}</td><td class="mono ${u.est?"est":""}">${f}</td><td class="mono ${d?"purple":""}">${isFinite(u.bestLap)?He(u.bestLap):"\u2014"}</td>${n?`<td class="mono pts">+${u.pts}</td>`:""}</tr>`}).join("")+"</tbody>",t.rows.some(u=>u.est)&&(e=(e?e+" ":"")+"\u041A\u0443\u0440\u0441\u0438\u0432\u043E\u043C \u2014 \u0440\u0430\u0441\u0447\u0451\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u0438\u043B\u043E\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0449\u0451 \u043D\u0430 \u0442\u0440\u0430\u0441\u0441\u0435.");Lt("res-table").innerHTML=a,Lt("res-podium").innerHTML="",Lt("res-note").textContent=e;let l=Lt("res-actions");l.innerHTML="";let c=(u,f,d)=>{let g=document.createElement("button");return g.className="btn"+(f?" primary":""),g.textContent=u,g.addEventListener("click",d),l.appendChild(g),g};if(n)c("\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E",!1,()=>this.quitToMenu()),c("\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043A\u0443\u0431\u043A\u0430",!0,()=>this.renderCupTable());else{if(c("\u041C\u0435\u043D\u044E",!1,()=>this.quitToMenu()),!i){let u=en.findIndex(d=>d.id===t.trackId),f=en[(u+1)%en.length];c("\u0422\u0440\u0430\u0441\u0441\u0430: "+f.short,!1,()=>{this.menu.trackId=f.id,this.startRace({...this.lastCfg,trackId:f.id})})}c("\u0415\u0449\u0451 \u0440\u0430\u0437",!0,()=>this.startRace(this.lastCfg))}let h=l.querySelector(".btn.primary");h&&!hs()&&setTimeout(()=>h.focus({preventScroll:!0}),50)}renderCupTable(){let t=this.cup,e=t.stage>=Io.length-1,n=t.field.map(l=>({d:pn.find(c=>c.id===l),pts:t.points[l]})).sort((l,c)=>c.pts-l.pts);Lt("res-eyebrow").textContent=e?"\u041A\u0443\u0431\u043E\u043A \u0410\u043F\u0435\u043A\u0441\u0430 \xB7 \u0438\u0442\u043E\u0433":`\u041A\u0443\u0431\u043E\u043A \u0410\u043F\u0435\u043A\u0441\u0430 \xB7 \u043F\u043E\u0441\u043B\u0435 \u044D\u0442\u0430\u043F\u0430 ${t.stage+1}`;let i=n.findIndex(l=>l.d.id===t.driverId)+1;if(Lt("res-title").textContent=e?i===1?"\u041A\u0443\u0431\u043E\u043A \u0432\u0430\u0448":`\u0418\u0442\u043E\u0433: ${i}-\u0435 \u043C\u0435\u0441\u0442\u043E`:"\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043A\u0443\u0431\u043A\u0430",e){let l=n.slice(0,3);Lt("res-podium").innerHTML=`<div class="podium"><div class="p2"><div class="place">2</div><div class="who">${li(l[1].d.name)}</div><div class="pts">${l[1].pts}</div></div><div class="p1"><div class="place">1</div><div class="who">${li(l[0].d.name)}</div><div class="pts">${l[0].pts}</div></div><div class="p3"><div class="place">3</div><div class="who">${li(l[2].d.name)}</div><div class="pts">${l[2].pts}</div></div></div>`,i===1&&(this.store.data.cupWins++,this.store.save())}else Lt("res-podium").innerHTML="";Lt("res-table").innerHTML='<thead><tr><th>\u041F\u043E\u0437</th><th>\u041F\u0438\u043B\u043E\u0442</th><th class="mono">\u041E\u0447\u043A\u0438</th><th class="mono">\u041E\u0442\u0440\u044B\u0432</th></tr></thead><tbody>'+n.map((l,c)=>`<tr class="${l.d.id===t.driverId?"me":""}"><td class="p">${c+1}</td><td><span class="chip"><i style="background:${l.d.color}"></i>\u2116${l.d.num} ${li(l.d.name)}</span></td><td class="mono pts">${l.pts}</td><td class="mono">${c===0?"\u2014":"\u2212"+(n[0].pts-l.pts)}</td></tr>`).join("")+"</tbody>",Lt("res-note").textContent=e?`\u041F\u043E\u0431\u0435\u0434 \u0432 \u043A\u0443\u0431\u043A\u0435: ${this.store.data.cupWins}.`:`\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u044D\u0442\u0430\u043F: ${en.find(l=>l.id===Io[t.stage+1]).name}. \u041B\u0438\u0434\u0435\u0440 \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C.`;let s=Lt("res-actions");s.innerHTML="";let o=(l,c,h)=>{let u=document.createElement("button");return u.className="btn"+(c?" primary":""),u.textContent=l,u.addEventListener("click",h),s.appendChild(u),u};o("\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E",!1,()=>this.quitToMenu()),e?o("\u041D\u043E\u0432\u044B\u0439 \u043A\u0443\u0431\u043E\u043A",!0,()=>this.startCup()):o("\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u044D\u0442\u0430\u043F",!0,()=>{t.stage++,this.startCupStage()});let a=s.querySelector(".btn.primary");a&&!hs()&&a.focus({preventScroll:!0})}menuNav(){if(!this.curScreen)return;let t=this.input.pollMenu();if(!(t.up||t.down||t.left||t.right||t.ok||t.back))return;let e=Lt("scr-"+this.curScreen),n=Array.from(e.querySelectorAll("button:not([disabled]), input")).filter(s=>s.offsetParent!==null),i=n.indexOf(document.activeElement);(t.down||t.right)&&(i=(i+1)%n.length),(t.up||t.left)&&(i=(i-1+n.length)%n.length),(t.up||t.down||t.left||t.right)&&(n[Math.max(0,i)].focus(),this.audio.ctx&&this.audio.play("uiMove")),t.ok&&document.activeElement&&document.activeElement.tagName==="BUTTON"&&document.activeElement.click(),t.back&&(this.curScreen==="pause"?this.resume():this.curScreen!=="title"&&this.curScreen!=="results"&&this.showScreen(this.state==="paused"?"pause":"title"))}autoQuality(t){if(this.settings.qualityAuto===!1||this.state!=="menu"||this.settings.quality==="low")return;let e=this.perf||(this.perf={t:0,n:0,skip:1.5,checks:0});if(e.skip>0){e.skip-=t;return}if(e.t+=t,e.n++,e.t<3)return;let n=e.n/e.t;this.perf={t:0,n:0,skip:1.5,checks:e.checks+1},n<40?(this.store.setSettings({quality:this.settings.quality==="high"?"medium":"low"}),this.applyQuality(),this.startAttract(this.menu.trackId)):this.perf.checks>=2&&this.store.setSettings({qualityAuto:!1})}loop(t){requestAnimationFrame(i=>this.loop(i));let e=Math.max(1e-4,(t-this.last)/1e3),n=Math.min(.05,e);if(this.last=t,!!this.race){if(this.autoQuality(Math.min(e,.5)),this.state==="race"){let i=this.input.poll(this.hud.touchEnabled);if(i.mute&&this.audio.toggleMute(),i.pause){this.pause(),this.render();return}this.race.update(n,i)}else this.state!=="paused"?(this.race.update(n,Jg),this.menuNav()):this.menuNav();this.render()}}};function Kg(r,t,e){let n=r.getContext("2d"),i=r.width,s=r.height,o={day:["#1d3a22","#26492b"],sunset:["#3a2430","#5a3440"],night:["#11122a","#1b1c3a"]}[e],a=n.createLinearGradient(0,0,0,s);a.addColorStop(0,o[0]),a.addColorStop(1,o[1]),n.fillStyle=a,n.fillRect(0,0,i,s);let l=t.bounds(20),c=Math.min((i-24)/(l.maxX-l.minX),(s-24)/(l.maxZ-l.minZ)),h=(i-(l.maxX-l.minX)*c)/2,u=(s-(l.maxZ-l.minZ)*c)/2;n.beginPath();for(let d=0;d<=t.N;d+=3){let g=d%t.N;n.lineTo(h+(t.px[g]-l.minX)*c,u+(t.pz[g]-l.minZ)*c)}n.closePath(),n.lineJoin="round",n.strokeStyle="rgba(0,0,0,0.4)",n.lineWidth=10,n.stroke(),n.strokeStyle="#f2f3f5",n.lineWidth=5,n.stroke();let f=t.pointAt(0,0);n.fillStyle="#ffd000",n.beginPath(),n.arc(h+(f.x-l.minX)*c,u+(f.z-l.minZ)*c,5,0,7),n.fill()}function Pu(){try{let r=document.createElement("canvas");if(!(r.getContext("webgl2")||r.getContext("webgl")))throw new Error("webgl");window.__apex=new pc}catch(r){console.error(r),Lt("loading-text").textContent="\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C WebGL. \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438\u043B\u0438 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435.";let t=document.querySelector("#loading .bar");t&&(t.hidden=!0)}}var fc=typeof window!="undefined"&&window.claude&&window.claude.hot;fc&&fc.ready?fc.ready(Pu):Pu();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
