/*
 RequireJS 2.1.15 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ba){function G(b){return"[object Function]"===K.call(b)}function H(b){return"[object Array]"===K.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function T(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return fa.call(b,c)}function m(b,c){return t(b,c)&&b[c]}function B(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function U(b,c,d,e){c&&B(c,function(c,g){if(d||!t(b,g))e&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[g]||(b[g]={}),U(b[g],c,d,e)):b[g]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;v(b.split("."),function(b){c=c[b]});return c}function C(b,c,d,e){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function ga(b){function c(a,k,b){var f,l,c,d,e,g,i,p,k=k&&k.split("/"),h=j.map,n=h&&h["*"];if(a){a=a.split("/");l=a.length-1;j.nodeIdCompat&&
Q.test(a[l])&&(a[l]=a[l].replace(Q,""));"."===a[0].charAt(0)&&k&&(l=k.slice(0,k.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],"."===d)l.splice(c,1),c-=1;else if(".."===d&&!(0===c||1==c&&".."===l[2]||".."===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join("/")}if(b&&h&&(k||n)){l=a.split("/");c=l.length;a:for(;0<c;c-=1){e=l.slice(0,c).join("/");if(k)for(d=k.length;0<d;d-=1)if(b=m(h,k.slice(0,d).join("/")))if(b=m(b,e)){f=b;g=c;break a}!i&&(n&&m(n,e))&&(i=m(n,e),p=c)}!f&&i&&(f=i,g=p);f&&(l.splice(0,
g,f),a=l.join("/"))}return(f=m(j.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(k){if(k.getAttribute("data-requiremodule")===a&&k.getAttribute("data-requirecontext")===i.contextName)return k.parentNode.removeChild(k),!0})}function e(a){var k=m(j.paths,a);if(k&&H(k)&&1<k.length)return k.shift(),i.require.undef(a),i.makeRequire(null,{skipMap:!0})([a]),!0}function n(a){var k,c=a?a.indexOf("!"):-1;-1<c&&(k=a.substring(0,c),a=a.substring(c+1,a.length));return[k,a]}function p(a,
k,b,f){var l,d,e=null,g=k?k.name:null,j=a,p=!0,h="";a||(p=!1,a="_@r"+(K+=1));a=n(a);e=a[0];a=a[1];e&&(e=c(e,g,f),d=m(r,e));a&&(e?h=d&&d.normalize?d.normalize(a,function(a){return c(a,g,f)}):-1===a.indexOf("!")?c(a,g,f):a:(h=c(a,g,f),a=n(h),e=a[0],h=a[1],b=!0,l=i.nameToUrl(h)));b=e&&!d&&!b?"_unnormalized"+(O+=1):"";return{prefix:e,name:h,parentMap:k,unnormalized:!!b,url:l,originalName:j,isDefine:p,id:(e?e+"!"+h:h)+b}}function s(a){var k=a.id,b=m(h,k);b||(b=h[k]=new i.Module(a));return b}function q(a,
k,b){var f=a.id,c=m(h,f);if(t(r,f)&&(!c||c.defineEmitComplete))"defined"===k&&b(r[f]);else if(c=s(a),c.error&&"error"===k)b(c.error);else c.on(k,b)}function w(a,b){var c=a.requireModules,f=!1;if(b)b(a);else if(v(c,function(b){if(b=m(h,b))b.error=a,b.events.error&&(f=!0,b.emit("error",a))}),!f)g.onError(a)}function x(){R.length&&(ha.apply(A,[A.length,0].concat(R)),R=[])}function y(a){delete h[a];delete V[a]}function F(a,b,c){var f=a.map.id;a.error?a.emit("error",a.error):(b[f]=!0,v(a.depMaps,function(f,
d){var e=f.id,g=m(h,e);g&&(!a.depMatched[d]&&!c[e])&&(m(b,e)?(a.defineDep(d,r[e]),a.check()):F(g,b,c))}),c[f]=!0)}function D(){var a,b,c=(a=1E3*j.waitSeconds)&&i.startTime+a<(new Date).getTime(),f=[],l=[],g=!1,h=!0;if(!W){W=!0;B(V,function(a){var i=a.map,j=i.id;if(a.enabled&&(i.isDefine||l.push(a),!a.error))if(!a.inited&&c)e(j)?g=b=!0:(f.push(j),d(j));else if(!a.inited&&(a.fetched&&i.isDefine)&&(g=!0,!i.prefix))return h=!1});if(c&&f.length)return a=C("timeout","Load timeout for modules: "+f,null,
f),a.contextName=i.contextName,w(a);h&&v(l,function(a){F(a,{},{})});if((!c||b)&&g)if((z||ea)&&!X)X=setTimeout(function(){X=0;D()},50);W=!1}}function E(a){t(r,a[0])||s(p(a[0],null,!0)).init(a[1],a[2])}function I(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function J(){var a;
for(x();A.length;){a=A.shift();if(null===a[0])return w(C("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));E(a)}}var W,Z,i,L,X,j={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},h={},V={},$={},A=[],r={},S={},aa={},K=1,O=1;L={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?r[a.map.id]=a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?
a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return m(j.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};Z=function(a){this.events=m($,a.id)||{};this.map=a;this.shim=m(j.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,f){f=f||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=
c;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;S[a]||(S[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var f=this.exports,l=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(l)){if(this.events.error&&this.map.isDefine||g.onError!==ca)try{f=i.execCb(c,l,b,f)}catch(d){a=d}else f=i.execCb(c,l,b,f);this.map.isDefine&&void 0===f&&((b=this.module)?f=b.exports:this.usingExports&&
(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else f=l;this.exports=f;if(this.map.isDefine&&!this.ignore&&(r[c]=f,g.onResourceLoad))g.onResourceLoad(i,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=
this.map,b=a.id,d=p(a.prefix);this.depMaps.push(d);q(d,"defined",u(this,function(f){var l,d;d=m(aa,this.map.id);var e=this.map.name,P=this.map.parentMap?this.map.parentMap.name:null,n=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(e=f.normalize(e,function(a){return c(a,P,!0)})||""),f=p(a.prefix+"!"+e,this.map.parentMap),q(f,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=m(h,f.id)){this.depMaps.push(f);
if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else d?(this.map.url=i.nameToUrl(d),this.load()):(l=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];B(h,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),l.fromText=u(this,function(f,c){var d=a.name,e=p(d),P=M;c&&(f=c);P&&(M=!1);s(e);t(j.config,b)&&(j.config[d]=j.config[b]);try{g.exec(f)}catch(h){return w(C("fromtexteval",
"fromText eval for "+b+" failed: "+h,h,[b]))}P&&(M=!0);this.depMaps.push(e);i.completeLoad(d);n([d],l)}),f.load(a.name,n,l,j))}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,u(this,function(a,b){var c,f;if("string"===typeof a){a=p(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(L,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;q(a,"defined",u(this,function(a){this.defineDep(b,
a);this.check()}));this.errback&&q(a,"error",u(this,this.errback))}c=a.id;f=h[c];!t(L,c)&&(f&&!f.enabled)&&i.enable(a,this)}));B(this.pluginMaps,u(this,function(a){var b=m(h,a.id);b&&!b.enabled&&i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:j,contextName:b,registry:h,defined:r,urlFetched:S,defQueue:A,Module:Z,makeModuleMap:p,
nextTick:g.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=j.shim,c={paths:!0,bundles:!0,config:!0,map:!0};B(a,function(a,b){c[b]?(j[b]||(j[b]={}),U(j[b],a,!0,!0)):j[b]=a});a.bundles&&B(a.bundles,function(a,b){v(a,function(a){a!==b&&(aa[a]=b)})});a.shim&&(B(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);b[c]=a}),j.shim=b);a.packages&&v(a.packages,function(a){var b,
a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(j.paths[b]=a.location);j.pkgs[b]=a.name+"/"+(a.main||"main").replace(ia,"").replace(Q,"")});B(h,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=p(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,e){function j(c,d,m){var n,q;e.enableBuildCallback&&(d&&G(d))&&(d.__requireJsBuild=
!0);if("string"===typeof c){if(G(d))return w(C("requireargs","Invalid require call"),m);if(a&&t(L,c))return L[c](h[a.id]);if(g.get)return g.get(i,c,a,j);n=p(c,a,!1,!0);n=n.id;return!t(r,n)?w(C("notloaded",'Module name "'+n+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[n]}J();i.nextTick(function(){J();q=s(p(null,a));q.skipMap=e.skipMap;q.init(c,d,m,{enabled:!0});D()});return j}e=e||{};U(j,{isBrowser:z,toUrl:function(b){var d,e=b.lastIndexOf("."),k=b.split("/")[0];if(-1!==
e&&(!("."===k||".."===k)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(r,p(b,a,!1,!0).id)},specified:function(b){b=p(b,a,!1,!0).id;return t(r,b)||t(h,b)}});a||(j.undef=function(b){x();var c=p(b,a,!0),e=m(h,b);d(b);delete r[b];delete S[c.url];delete $[b];T(A,function(a,c){a[0]===b&&A.splice(c,1)});e&&(e.events.defined&&($[b]=e.events),y(b))});return j},enable:function(a){m(h,a.id)&&s(a).enable()},completeLoad:function(a){var b,
c,d=m(j.shim,a)||{},g=d.exports;for(x();A.length;){c=A.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}c=m(h,a);if(!b&&!t(r,a)&&c&&!c.inited){if(j.enforceDefine&&(!g||!da(g)))return e(a)?void 0:w(C("nodefine","No define call for "+a,null,[a]));E([a,d.deps||[],d.exportsFn])}D()},nameToUrl:function(a,b,c){var d,e,h;(d=m(j.pkgs,a))&&(a=d);if(d=m(aa,a))return i.nameToUrl(d,b,c);if(g.jsExtRegExp.test(a))d=a+(b||"");else{d=j.paths;a=a.split("/");for(e=a.length;0<e;e-=1)if(h=a.slice(0,
e).join("/"),h=m(d,h)){H(h)&&(h=h[0]);a.splice(0,e,h);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+d}return j.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+j.urlArgs):d},load:function(a,b){g.load(i,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ja.test((a.currentTarget||a.srcElement).readyState))N=null,a=I(a),i.completeLoad(a.id)},onScriptError:function(a){var b=I(a);if(!e(b.id))return w(C("scripterror",
"Script error for: "+b.id,a,[b.id]))}};i.require=i.makeRequire();return i}var g,x,y,D,I,E,N,J,s,O,ka=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,la=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,Q=/\.js$/,ia=/^\.\//;x=Object.prototype;var K=x.toString,fa=x.hasOwnProperty,ha=Array.prototype.splice,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),ea=!z&&"undefined"!==typeof importScripts,ja=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,
Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},q={},R=[],M=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(G(requirejs))return;q=requirejs;requirejs=void 0}"undefined"!==typeof require&&!G(require)&&(q=require,require=void 0);g=requirejs=function(b,c,d,e){var n,p="_";!H(b)&&"string"!==typeof b&&(n=b,H(c)?(b=c,c=d,d=e):b=[]);n&&n.context&&(p=n.context);(e=m(F,p))||(e=F[p]=g.s.newContext(p));n&&e.configure(n);return e.require(b,c,d)};g.config=function(b){return g(b)};
g.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=g);g.version="2.1.15";g.jsExtRegExp=/^\/|:|\?|\.js$/;g.isBrowser=z;x=g.s={contexts:F,newContext:ga};g({});v(["toUrl","undef","defined","specified"],function(b){g[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))y=x.head=D.parentNode;g.onError=ca;g.createNode=function(b){var c=
b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};g.load=function(b,c,d){var e=b&&b.config||{};if(z)return e=g.createNode(e,c,d),e.setAttribute("data-requirecontext",b.contextName),e.setAttribute("data-requiremodule",c),e.attachEvent&&!(e.attachEvent.toString&&0>e.attachEvent.toString().indexOf("[native code"))&&!Y?(M=!0,e.attachEvent("onreadystatechange",b.onScriptLoad)):
(e.addEventListener("load",b.onScriptLoad,!1),e.addEventListener("error",b.onScriptError,!1)),e.src=d,J=e,D?y.insertBefore(e,D):y.appendChild(e),J=null,e;if(ea)try{importScripts(d),b.completeLoad(c)}catch(m){b.onError(C("importscripts","importScripts failed for "+c+" at "+d,m,[c]))}};z&&!q.skipDataMain&&T(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(I=b.getAttribute("data-main"))return s=I,q.baseUrl||(E=s.split("/"),s=E.pop(),O=E.length?E.join("/")+"/":"./",q.baseUrl=
O),s=s.replace(Q,""),g.jsExtRegExp.test(s)&&(s=I),q.deps=q.deps?q.deps.concat(s):[s],!0});define=function(b,c,d){var e,g;"string"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(ka,"").replace(la,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(M){if(!(e=J))N&&"interactive"===N.readyState||T(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return N=b}),e=N;e&&(b||
(b=e.getAttribute("data-requiremodule")),g=F[e.getAttribute("data-requirecontext")])}(g?g.defQueue:R).push([b,c,d])};define.amd={jQuery:!0};g.exec=function(b){return eval(b)};g(q)}})(this);

define("vendor/require.js", function(){});

/* -*- mode: javascript; c-basic-offset: 4; indent-tabs-mode: nil -*- */
/*jshint unused: false */

// 
// Derived from Dalliance Genome Explorer
// (c) Thomas Down 2006-2010
//
// spans.js: JavaScript Intset/Location port.
//


define('spans',[],function() {

    
    var exports = {};

    function Range(min, max)
    {
        this._min = min|0;
        this._max = max|0;
    }

    Range.prototype.min = function() {
        return this._min;
    };

    Range.prototype.max = function() {
        return this._max;
    };

    Range.prototype.contains = function(pos) {
        return pos >= this._min && pos <= this._max;
    };

    Range.prototype.isContiguous = function() {
        return true;
    };

    Range.prototype.ranges = function() {
        return [this];
    };

    Range.prototype.toString = function() {
        return '[' + this._min + '-' + this._max + ']';
    };

    exports.Range = Range;

    function CompoundRange(ranges) {
        this._ranges = ranges;
        // assert sorted?
    }

    CompoundRange.prototype.min = function() {
        return this._ranges[0].min();
    };

    CompoundRange.prototype.max = function() {
        return this._ranges[this._ranges.length - 1].max();
    };

    CompoundRange.prototype.contains = function(pos) {
        // FIXME implement bsearch if we use this much.
        for (var s = 0; s < this._ranges.length; ++s) {
            if (this._ranges[s].contains(pos)) {
                return true;
            }
        }
        return false;
    };

    CompoundRange.prototype.isContiguous = function() {
        return this._ranges.length > 1;
    };

    CompoundRange.prototype.ranges = function() {
        return this._ranges;
    };

    CompoundRange.prototype.toString = function() {
        var s = '';
        for (var r = 0; r < this._ranges.length; ++r) {
            if (r>0) {
                s = s + ',';
            }
            s = s + this._ranges[r].toString();
        }
        return s;
    };

    exports.CompoundRange = CompoundRange;

    exports.rangeOrder = function(a, b)
    {
        if (a.min() < b.min()) {
            return -1;
        } else if (a.min() > b.min()) {
            return 1;
        } else if (a.max() < b.max()) {
            return -1;
        } else if (b.max() > a.max()) {
            return 1;
        } else {
            return 0;
        }
    };


    exports.union=function(s0, s1) {
        var ranges = s0.ranges().concat(s1.ranges()).sort(this.rangeOrder);
        var oranges = [];
        var current = ranges[0];

        for (var i = 1; i < ranges.length; ++i) {
            var nxt = ranges[i];
            if (nxt.min() > (current.max() + 1)) {
                oranges.push(current);
                current = nxt;
            } else {
                if (nxt.max() > current.max()) {
                    current = new Range(current.min(), nxt.max());
                }
            }
        }
        oranges.push(current);

        if (oranges.length === 1) {
            return oranges[0];
        } else {
            return new CompoundRange(oranges);
        }
    };

    /*
     function intersection(s0, s1) {
     var r0 = s0.ranges();
     var r1 = s1.ranges();
     var l0 = r0.length, l1 = r1.length;
     var i0 = 0, i1 = 0;
     var or = [];

     while (i0 < l0 && i1 < l1) {
     s0 = r0[i0];
     s1 = r1[i1];
     var lapMin = Math.max(s0.min(), s1.min());
     var lapMax = Math.min(s0.max(), s1.max());
     if (lapMax >= lapMin) {
     or.push(new Range(lapMin, lapMax));
     }
     if (s0.max() > s1.max()) {
     ++i1;
     } else {
     ++i0;
     }
     }

     if (or.length === 0) {
     return null; // FIXME
     } else if (or.length === 1) {
     return or[0];
     } else {
     return new CompoundRange(or);
     }
     }

     function coverage(s) {
     var tot = 0;
     var rl = s.ranges();
     for (var ri = 0; ri < rl.length; ++ri) {
     var r = rl[ri];
     tot += (r.max() - r.min() + 1);
     }
     return tot;
     }
     */

    return exports;

});
/*jshint unused: false */


define('util',[],function()
{

    var exports = {};

    var attr_name_cache = {};


    exports.indexOf = function(needle) {
    
    var indexOf;

    if(typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;            
            for(i = 0; i < this.length; i++) {
                if(this[i] === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle);
};



    exports.endsWith = function(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };

    
    exports.isNumber = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    var reA = /[^a-zA-Z]/g;
    var reN = /[^0-9]/g;
    
    exports.sortAlphaNum = function(a,b) {
        var aA = a.replace(reA, "");
        var bA = b.replace(reA, "");
        if(aA === bA) {
            var aN = parseInt(a.replace(reN, ""), 10);
            var bN = parseInt(b.replace(reN, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
            return aA > bA ? 1 : -1;
        }
    };

    exports.setAttr = function(node, key, value) {
        var attr = attr_name_cache[key];
        if (!attr) {
            var _attr = '';
            for (var c = 0; c < key.length; ++c) {
                var cc = key.substring(c, c + 1);
                var lcc = cc.toLowerCase();
                if (lcc !== cc) {
                    _attr = _attr + '-' + lcc;
                } else {
                    _attr = _attr + cc;
                }
            }
            attr_name_cache[key] = _attr;
            attr = _attr;
        }
        node.setAttribute(attr, value);
    };

    exports.setAttrs = function (node, attribs) {
        if (attribs) {
            for (var l in attribs) {
                if (attribs.hasOwnProperty(l)) {
                    this.setAttr(node, l, attribs[l]);
                }
            }
        }
    };

    exports.makeElement = function (tag, children, attribs, styles) {
        var ele = document.createElement(tag);
        if (children) {
            if (!(children instanceof Array)) {
                children = [children];
            }
            for (var i = 0; i < children.length; ++i) {
                var c = children[i];
                if (c) {
                    if (typeof c === 'string') {
                        c = document.createTextNode(c);
                    } else if (typeof c === 'number') {
                        c = document.createTextNode('' + c);
                    }
                    ele.appendChild(c);
                }
            }
        }

        if (attribs) {
            for (var l in attribs) {
                if (attribs.hasOwnProperty(l)) {
                    ele[l] = attribs[l];
                }

            }
        }
        if (styles) {
            for (var s in styles) {
                if (styles.hasOwnProperty(s)) {
                    ele.style[s] = styles[s];
                }
            }
        }
        return ele;
    };


    exports.makeElementNS = function(namespace, tag, children, attribs) {
        var ele = document.createElementNS(namespace, tag);
        if (children) {
            if (!(children instanceof Array)) {
                children = [children];
            }
            for (var i = 0; i < children.length; ++i) {
                var c = children[i];
                if (typeof c === 'string') {
                    c = document.createTextNode(c);
                }
                ele.appendChild(c);
            }
        }

        this.setAttrs(ele, attribs);
        return ele;
    };


    exports.removeChildren = function(node) {
        if (!node || !node.childNodes) {
            return;
        }

        while (node.childNodes.length > 0) {
            node.removeChild(node.firstChild);
        }
    };

    var timer = null;
    exports.makeTooltip = function(ele, text, popupHolder)
    {
        var isin = false;
        var thisB = this;

        var outlistener;
        outlistener = function(ev) {
            isin = false;
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            ele.removeEventListener('mouseout', outlistener, false);
        };

        var setup;
        setup = function(ev) {

            var mx = ev.clientX + window.scrollX, my = ev.clientY + window.scrollY;

            if (!timer) {
                var that = this;
                timer = setTimeout(function() {
                    var popup = exports.makeElement('div', text, {}, {
                        position: 'absolute',
                        top: '' + (my + 20) + 'px',
                        left: '' + Math.max(mx - 30, 20) + 'px',
                        backgroundColor: 'white',
                        borderWidth: '1px',
                        borderColor: 'black',
                        borderStyle: 'solid',
                        padding: '2px',
                        maxWidth: '400px'
                    });

                    popupHolder.appendChild(popup);
                    var moveHandler;
                    moveHandler = function(ev) {
                        try {
                            popupHolder.removeChild(popup);
                        } catch (e) {
                            // May have been removed by other code which clears the popup layer.
                        }
                        window.removeEventListener('mousemove', moveHandler, false);
                        if (isin) {
                            if (ele.offsetParent === null) {
                                // dlog('Null parent...');
                            } else {
                                setup(ev);
                            }
                        }
                    };
                    window.addEventListener('mousemove', moveHandler, false);
                    timer = null;
                }, 200);
            }
        };

        ele.addEventListener('mouseover', function(ev) {
            isin = true;
            ele.addEventListener('mouseout', outlistener, false);
            setup(ev);
        }, false);
        ele.addEventListener('DOMNodeRemovedFromDocument', function(ev) {
            isin = false;
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        }, false);
    };

    return exports;
});
/* Derived in parts from PV viewer.
*
* (C) Marco Piasini
*
* */
define('colors',[],function()
{

    

    var exports = {};

    exports.rgb = {};

    var rgb = exports.rgb;

    exports.rgb.fromValues = function(x, y, z, w) {
        var out = new Array(4);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    };

    exports.rgb.mix = function(out, colorOne, colorTwo, t) {
        var oneMinusT = 1.0 - t;
        out[0] = colorOne[0]*t+colorTwo[0]*oneMinusT;
        out[1] = colorOne[1]*t+colorTwo[1]*oneMinusT;
        out[2] = colorOne[2]*t+colorTwo[2]*oneMinusT;
        out[3] = colorOne[3]*t+colorTwo[3]*oneMinusT;
        return out;
    };

    exports.rgb.hex2rgb = function(color){
        var r, g, b, a;
        if (color.length === 4 || color.length === 5 ) {
            r = parseInt(color[1], 16);
            g = parseInt(color[2], 16);
            b = parseInt(color[3], 16);
            a = 15;
            if(color.length===5) {
                a = parseInt(color[4], 16);
            }
            var oneOver15 = 1/15.0;
            return rgb.fromValues(oneOver15 * r, oneOver15 * g,
                oneOver15 * b, oneOver15 * a);
        }
        if (color.length === 7 || color.length === 9) {
            r = parseInt(color.substr(1, 2), 16);
            g = parseInt(color.substr(3, 2), 16);
            b = parseInt(color.substr(5, 2), 16);
            a = 255;
            if(color.length===9) {
                a = parseInt(color.substr(7, 2), 16);
            }
            var oneOver255 = 1/255.0;
            return rgb.fromValues(oneOver255 * r, oneOver255 * g,
                oneOver255 * b, oneOver255 * a);
        }
    };

    var COLORS = {
        white :        rgb.fromValues(1.0,1.0 ,1.0,1.0),
        black :        rgb.fromValues(0.0,0.0 ,0.0,1.0),
        grey :         rgb.fromValues(0.5,0.5 ,0.5,1.0),
        lightgrey :    rgb.fromValues(0.8,0.8 ,0.8,1.0),
        darkgrey :     rgb.fromValues(0.3,0.3 ,0.3,1.0),
        red :          rgb.hex2rgb("#AA00A2"),
        darkred :      rgb.hex2rgb("#7F207B"),
        lightred :     rgb.fromValues(1.0,0.5 ,0.5,1.0),
        green :        rgb.hex2rgb("#C9F600"),
        darkgreen :    rgb.hex2rgb("#9FB82E"),
        lightgreen :   rgb.hex2rgb("#E1FA71"), // or D8FA3F
        blue :         rgb.hex2rgb("#6A93D4"), // or 6A93D4
        darkblue :     rgb.hex2rgb("#284A7E"), // or 104BA9
        lightblue :    rgb.fromValues(0.5,0.5 ,1.0,1.0),
        yellow :       rgb.hex2rgb("#FFCC73"),
        darkyellow :   rgb.fromValues(0.5,0.5 ,0.0,1.0),
        lightyellow :  rgb.fromValues(1.0,1.0 ,0.5,1.0),
        cyan :         rgb.fromValues(0.0,1.0 ,1.0,1.0),
        darkcyan :     rgb.fromValues(0.0,0.5 ,0.5,1.0),
        lightcyan :    rgb.fromValues(0.5,1.0 ,1.0,1.0),
        magenta :      rgb.fromValues(1.0,0.0 ,1.0,1.0),
        darkmagenta :  rgb.fromValues(0.5,0.0 ,0.5,1.0),
        lightmagenta : rgb.fromValues(1.0,0.5 ,1.0,1.0),
        orange :       rgb.hex2rgb("#FFA200"), // or FFBA40
        darkorange :   rgb.fromValues(0.5,0.25,0.0,1.0),
        lightorange :  rgb.fromValues(1.0,0.75,0.5,1.0),
        brown :        rgb.hex2rgb("#A66A00"),
        purple :       rgb.hex2rgb("#D435CD")
    };


    exports.rgb.componentToHex = function(c) {

        var hex = c.toString(16);

        return hex.length === 1 ? "0" + hex : hex;
    };

    exports.rgb.rgb2hex = function(color)
    {
        if ( color.length === 3){
            var r = color[0];
            var g = color[1];
            var b = color[2];
            return "#" +
                exports.rgb.componentToHex(r) +
                exports.rgb.componentToHex(g) +
                exports.rgb.componentToHex(b);

        } else if ( color.length ===4 || color.length === 5){

          var r1 = color[0];
          var g1 = color[1];
          var b1 = color[2];
          var a1 = 15;
          if(color.length===4) {
              a1 = color[3];
          }

            return "#" +
                exports.rgb.componentToHex(r1*255) +
                exports.rgb.componentToHex(g1*255) +
                exports.rgb.componentToHex(b1*255);
        }
        return "#000000";
    };



// provide an override of the default color setting.
    exports.setColorPalette = function(customColors){
        console.log("setting colors");
        COLORS = customColors;
        exports.initGradients();
    };

// internal function to force various types into an RGBA quadruplet 
    exports.forceRGB = function(color) {
        if (typeof color === 'string') {
            var lookup = COLORS[color];
            if (lookup !== undefined) {
                return lookup;
            } else if (color.length > 0 && color[0] === '#') {
                return exports.hex2rgb(color);
            } else {
                console.error("unknown color " + color);
            }
        }
        // in case no alpha component is provided, default alpha to 1.0
        if (color.length === 3) {
            return [color[0], color[1], color[2], 1.0];
        }
        return color;
    };

    exports.forceHex = function(color){
        var lookup = COLORS[color];
        if ( lookup !== undefined){

            return exports.rgb.rgb2hex(lookup);
        }
    };


    return exports;
});


/* pako 0.2.6 nodeca/pako */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define('pako',[],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.pako=t()}}(function(){return function t(e,a,i){function n(s,o){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(r)return r(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var d=a[s]={exports:{}};e[s][0].call(d.exports,function(t){var a=e[s][1][t];return n(a?a:t)},d,d.exports,t,e,a,i)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e,a){function i(t,e){var a=new p(e);if(a.push(t,!0),a.err)throw a.msg;return a.result}function n(t,e){return e=e||{},e.raw=!0,i(t,e)}function r(t,e){return e=e||{},e.gzip=!0,i(t,e)}var s=t("./zlib/deflate.js"),o=t("./utils/common"),l=t("./utils/strings"),h=t("./zlib/messages"),d=t("./zlib/zstream"),f=Object.prototype.toString,_=0,u=4,c=0,b=1,g=-1,m=0,w=8,p=function(t){this.options=o.assign({level:g,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var a=s.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==c)throw new Error(h[a]);e.header&&s.deflateSetHeader(this.strm,e.header)};p.prototype.push=function(t,e){var a,i,n=this.strm,r=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:e===!0?u:_,n.input="string"==typeof t?l.string2buf(t):"[object ArrayBuffer]"===f.call(t)?new Uint8Array(t):t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new o.Buf8(r),n.next_out=0,n.avail_out=r),a=s.deflate(n,i),a!==b&&a!==c)return this.onEnd(a),this.ended=!0,!1;(0===n.avail_out||0===n.avail_in&&i===u)&&this.onData("string"===this.options.to?l.buf2binstring(o.shrinkBuf(n.output,n.next_out)):o.shrinkBuf(n.output,n.next_out))}while((n.avail_in>0||0===n.avail_out)&&a!==b);return i===u?(a=s.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===c):!0},p.prototype.onData=function(t){this.chunks.push(t)},p.prototype.onEnd=function(t){t===c&&(this.result="string"===this.options.to?this.chunks.join(""):o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Deflate=p,a.deflate=i,a.deflateRaw=n,a.gzip=r},{"./utils/common":3,"./utils/strings":4,"./zlib/deflate.js":8,"./zlib/messages":13,"./zlib/zstream":15}],2:[function(t,e,a){function i(t,e){var a=new u(e);if(a.push(t,!0),a.err)throw a.msg;return a.result}function n(t,e){return e=e||{},e.raw=!0,i(t,e)}var r=t("./zlib/inflate.js"),s=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/constants"),h=t("./zlib/messages"),d=t("./zlib/zstream"),f=t("./zlib/gzheader"),_=Object.prototype.toString,u=function(t){this.options=s.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0===(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var a=r.inflateInit2(this.strm,e.windowBits);if(a!==l.Z_OK)throw new Error(h[a]);this.header=new f,r.inflateGetHeader(this.strm,this.header)};u.prototype.push=function(t,e){var a,i,n,h,d,f=this.strm,u=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:e===!0?l.Z_FINISH:l.Z_NO_FLUSH,f.input="string"==typeof t?o.binstring2buf(t):"[object ArrayBuffer]"===_.call(t)?new Uint8Array(t):t,f.next_in=0,f.avail_in=f.input.length;do{if(0===f.avail_out&&(f.output=new s.Buf8(u),f.next_out=0,f.avail_out=u),a=r.inflate(f,l.Z_NO_FLUSH),a!==l.Z_STREAM_END&&a!==l.Z_OK)return this.onEnd(a),this.ended=!0,!1;f.next_out&&(0===f.avail_out||a===l.Z_STREAM_END||0===f.avail_in&&i===l.Z_FINISH)&&("string"===this.options.to?(n=o.utf8border(f.output,f.next_out),h=f.next_out-n,d=o.buf2string(f.output,n),f.next_out=h,f.avail_out=u-h,h&&s.arraySet(f.output,f.output,n,h,0),this.onData(d)):this.onData(s.shrinkBuf(f.output,f.next_out)))}while(f.avail_in>0&&a!==l.Z_STREAM_END);return a===l.Z_STREAM_END&&(i=l.Z_FINISH),i===l.Z_FINISH?(a=r.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===l.Z_OK):!0},u.prototype.onData=function(t){this.chunks.push(t)},u.prototype.onEnd=function(t){t===l.Z_OK&&(this.result="string"===this.options.to?this.chunks.join(""):s.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Inflate=u,a.inflate=i,a.inflateRaw=n,a.ungzip=i},{"./utils/common":3,"./utils/strings":4,"./zlib/constants":6,"./zlib/gzheader":9,"./zlib/inflate.js":11,"./zlib/messages":13,"./zlib/zstream":15}],3:[function(t,e,a){var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;a.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(var i in a)a.hasOwnProperty(i)&&(t[i]=a[i])}}return t},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,a,i,n){if(e.subarray&&t.subarray)return void t.set(e.subarray(a,a+i),n);for(var r=0;i>r;r++)t[n+r]=e[a+r]},flattenChunks:function(t){var e,a,i,n,r,s;for(i=0,e=0,a=t.length;a>e;e++)i+=t[e].length;for(s=new Uint8Array(i),n=0,e=0,a=t.length;a>e;e++)r=t[e],s.set(r,n),n+=r.length;return s}},r={arraySet:function(t,e,a,i,n){for(var r=0;i>r;r++)t[n+r]=e[a+r]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,n)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,r))},a.setTyped(i)},{}],4:[function(t,e,a){function i(t,e){if(65537>e&&(t.subarray&&s||!t.subarray&&r))return String.fromCharCode.apply(null,n.shrinkBuf(t,e));for(var a="",i=0;e>i;i++)a+=String.fromCharCode(t[i]);return a}var n=t("./common"),r=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(o){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(o){s=!1}for(var l=new n.Buf8(256),h=0;256>h;h++)l[h]=h>=252?6:h>=248?5:h>=240?4:h>=224?3:h>=192?2:1;l[254]=l[254]=1,a.string2buf=function(t){var e,a,i,r,s,o=t.length,l=0;for(r=0;o>r;r++)a=t.charCodeAt(r),55296===(64512&a)&&o>r+1&&(i=t.charCodeAt(r+1),56320===(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),r++)),l+=128>a?1:2048>a?2:65536>a?3:4;for(e=new n.Buf8(l),s=0,r=0;l>s;r++)a=t.charCodeAt(r),55296===(64512&a)&&o>r+1&&(i=t.charCodeAt(r+1),56320===(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),r++)),128>a?e[s++]=a:2048>a?(e[s++]=192|a>>>6,e[s++]=128|63&a):65536>a?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},a.buf2binstring=function(t){return i(t,t.length)},a.binstring2buf=function(t){for(var e=new n.Buf8(t.length),a=0,i=e.length;i>a;a++)e[a]=t.charCodeAt(a);return e},a.buf2string=function(t,e){var a,n,r,s,o=e||t.length,h=new Array(2*o);for(n=0,a=0;o>a;)if(r=t[a++],128>r)h[n++]=r;else if(s=l[r],s>4)h[n++]=65533,a+=s-1;else{for(r&=2===s?31:3===s?15:7;s>1&&o>a;)r=r<<6|63&t[a++],s--;s>1?h[n++]=65533:65536>r?h[n++]=r:(r-=65536,h[n++]=55296|r>>10&1023,h[n++]=56320|1023&r)}return i(h,n)},a.utf8border=function(t,e){var a;for(e=e||t.length,e>t.length&&(e=t.length),a=e-1;a>=0&&128===(192&t[a]);)a--;return 0>a?e:0===a?e:a+l[t[a]]>e?a:e}},{"./common":3}],5:[function(t,e){function a(t,e,a,i){for(var n=65535&t|0,r=t>>>16&65535|0,s=0;0!==a;){s=a>2e3?2e3:a,a-=s;do n=n+e[i++]|0,r=r+n|0;while(--s);n%=65521,r%=65521}return n|r<<16|0}e.exports=a},{}],6:[function(t,e){e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],7:[function(t,e){function a(){for(var t,e=[],a=0;256>a;a++){t=a;for(var i=0;8>i;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}function i(t,e,a,i){var r=n,s=i+a;t=-1^t;for(var o=i;s>o;o++)t=t>>>8^r[255&(t^e[o])];return-1^t}var n=a();e.exports=i},{}],8:[function(t,e,a){function i(t,e){return t.msg=N[e],e}function n(t){return(t<<1)-(t>4?9:0)}function r(t){for(var e=t.length;--e>=0;)t[e]=0}function s(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(A.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}function o(t,e){Z._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)}function l(t,e){t.pending_buf[t.pending++]=e}function h(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function d(t,e,a,i){var n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,A.arraySet(e,t.input,t.next_in,n,a),1===t.state.wrap?t.adler=R(t.adler,e,n,a):2===t.state.wrap&&(t.adler=C(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)}function f(t,e){var a,i,n=t.max_chain_length,r=t.strstart,s=t.prev_length,o=t.nice_match,l=t.strstart>t.w_size-ht?t.strstart-(t.w_size-ht):0,h=t.window,d=t.w_mask,f=t.prev,_=t.strstart+lt,u=h[r+s-1],c=h[r+s];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do if(a=e,h[a+s]===c&&h[a+s-1]===u&&h[a]===h[r]&&h[++a]===h[r+1]){r+=2,a++;do;while(h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&_>r);if(i=lt-(_-r),r=_-lt,i>s){if(t.match_start=e,s=i,i>=o)break;u=h[r+s-1],c=h[r+s]}}while((e=f[e&d])>l&&0!==--n);return s<=t.lookahead?s:t.lookahead}function _(t){var e,a,i,n,r,s=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-ht)){A.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,a=t.hash_size,e=a;do i=t.head[--e],t.head[e]=i>=s?i-s:0;while(--a);a=s,e=a;do i=t.prev[--e],t.prev[e]=i>=s?i-s:0;while(--a);n+=s}if(0===t.strm.avail_in)break;if(a=d(t.strm,t.window,t.strstart+t.lookahead,n),t.lookahead+=a,t.lookahead+t.insert>=ot)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+ot-1])&t.hash_mask,t.prev[r&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++,t.insert--,!(t.lookahead+t.insert<ot)););}while(t.lookahead<ht&&0!==t.strm.avail_in)}function u(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(_(t),0===t.lookahead&&e===I)return wt;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+a;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,o(t,!1),0===t.strm.avail_out))return wt;if(t.strstart-t.block_start>=t.w_size-ht&&(o(t,!1),0===t.strm.avail_out))return wt}return t.insert=0,e===D?(o(t,!0),0===t.strm.avail_out?vt:kt):t.strstart>t.block_start&&(o(t,!1),0===t.strm.avail_out)?wt:wt}function c(t,e){for(var a,i;;){if(t.lookahead<ht){if(_(t),t.lookahead<ht&&e===I)return wt;if(0===t.lookahead)break}if(a=0,t.lookahead>=ot&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ot-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-ht&&(t.match_length=f(t,a)),t.match_length>=ot)if(i=Z._tr_tally(t,t.strstart-t.match_start,t.match_length-ot),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=ot){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ot-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=Z._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(o(t,!1),0===t.strm.avail_out))return wt}return t.insert=t.strstart<ot-1?t.strstart:ot-1,e===D?(o(t,!0),0===t.strm.avail_out?vt:kt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?wt:pt}function b(t,e){for(var a,i,n;;){if(t.lookahead<ht){if(_(t),t.lookahead<ht&&e===I)return wt;if(0===t.lookahead)break}if(a=0,t.lookahead>=ot&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ot-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=ot-1,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ht&&(t.match_length=f(t,a),t.match_length<=5&&(t.strategy===P||t.match_length===ot&&t.strstart-t.match_start>4096)&&(t.match_length=ot-1)),t.prev_length>=ot&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-ot,i=Z._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-ot),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ot-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!==--t.prev_length);if(t.match_available=0,t.match_length=ot-1,t.strstart++,i&&(o(t,!1),0===t.strm.avail_out))return wt}else if(t.match_available){if(i=Z._tr_tally(t,0,t.window[t.strstart-1]),i&&o(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return wt}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=Z._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<ot-1?t.strstart:ot-1,e===D?(o(t,!0),0===t.strm.avail_out?vt:kt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?wt:pt}function g(t,e){for(var a,i,n,r,s=t.window;;){if(t.lookahead<=lt){if(_(t),t.lookahead<=lt&&e===I)return wt;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=ot&&t.strstart>0&&(n=t.strstart-1,i=s[n],i===s[++n]&&i===s[++n]&&i===s[++n])){r=t.strstart+lt;do;while(i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&r>n);t.match_length=lt-(r-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=ot?(a=Z._tr_tally(t,1,t.match_length-ot),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=Z._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(o(t,!1),0===t.strm.avail_out))return wt}return t.insert=0,e===D?(o(t,!0),0===t.strm.avail_out?vt:kt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?wt:pt}function m(t,e){for(var a;;){if(0===t.lookahead&&(_(t),0===t.lookahead)){if(e===I)return wt;break}if(t.match_length=0,a=Z._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(o(t,!1),0===t.strm.avail_out))return wt}return t.insert=0,e===D?(o(t,!0),0===t.strm.avail_out?vt:kt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?wt:pt}function w(t){t.window_size=2*t.w_size,r(t.head),t.max_lazy_match=E[t.level].max_lazy,t.good_match=E[t.level].good_length,t.nice_match=E[t.level].nice_length,t.max_chain_length=E[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=ot-1,t.match_available=0,t.ins_h=0}function p(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=J,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new A.Buf16(2*rt),this.dyn_dtree=new A.Buf16(2*(2*it+1)),this.bl_tree=new A.Buf16(2*(2*nt+1)),r(this.dyn_ltree),r(this.dyn_dtree),r(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new A.Buf16(st+1),this.heap=new A.Buf16(2*at+1),r(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new A.Buf16(2*at+1),r(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function v(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=W,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?ft:gt,t.adler=2===e.wrap?0:1,e.last_flush=I,Z._tr_init(e),F):i(t,H)}function k(t){var e=v(t);return e===F&&w(t.state),e}function x(t,e){return t&&t.state?2!==t.state.wrap?H:(t.state.gzhead=e,F):H}function y(t,e,a,n,r,s){if(!t)return H;var o=1;if(e===K&&(e=6),0>n?(o=0,n=-n):n>15&&(o=2,n-=16),1>r||r>Q||a!==J||8>n||n>15||0>e||e>9||0>s||s>G)return i(t,H);8===n&&(n=9);var l=new p;return t.state=l,l.strm=t,l.wrap=o,l.gzhead=null,l.w_bits=n,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=r+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+ot-1)/ot),l.window=new A.Buf8(2*l.w_size),l.head=new A.Buf16(l.hash_size),l.prev=new A.Buf16(l.w_size),l.lit_bufsize=1<<r+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new A.Buf8(l.pending_buf_size),l.d_buf=l.lit_bufsize>>1,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=a,k(t)}function z(t,e){return y(t,e,J,V,$,X)}function B(t,e){var a,o,d,f;if(!t||!t.state||e>U||0>e)return t?i(t,H):H;if(o=t.state,!t.output||!t.input&&0!==t.avail_in||o.status===mt&&e!==D)return i(t,0===t.avail_out?M:H);if(o.strm=t,a=o.last_flush,o.last_flush=e,o.status===ft)if(2===o.wrap)t.adler=0,l(o,31),l(o,139),l(o,8),o.gzhead?(l(o,(o.gzhead.text?1:0)+(o.gzhead.hcrc?2:0)+(o.gzhead.extra?4:0)+(o.gzhead.name?8:0)+(o.gzhead.comment?16:0)),l(o,255&o.gzhead.time),l(o,o.gzhead.time>>8&255),l(o,o.gzhead.time>>16&255),l(o,o.gzhead.time>>24&255),l(o,9===o.level?2:o.strategy>=q||o.level<2?4:0),l(o,255&o.gzhead.os),o.gzhead.extra&&o.gzhead.extra.length&&(l(o,255&o.gzhead.extra.length),l(o,o.gzhead.extra.length>>8&255)),o.gzhead.hcrc&&(t.adler=C(t.adler,o.pending_buf,o.pending,0)),o.gzindex=0,o.status=_t):(l(o,0),l(o,0),l(o,0),l(o,0),l(o,0),l(o,9===o.level?2:o.strategy>=q||o.level<2?4:0),l(o,xt),o.status=gt);else{var _=J+(o.w_bits-8<<4)<<8,u=-1;u=o.strategy>=q||o.level<2?0:o.level<6?1:6===o.level?2:3,_|=u<<6,0!==o.strstart&&(_|=dt),_+=31-_%31,o.status=gt,h(o,_),0!==o.strstart&&(h(o,t.adler>>>16),h(o,65535&t.adler)),t.adler=1}if(o.status===_t)if(o.gzhead.extra){for(d=o.pending;o.gzindex<(65535&o.gzhead.extra.length)&&(o.pending!==o.pending_buf_size||(o.gzhead.hcrc&&o.pending>d&&(t.adler=C(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending!==o.pending_buf_size));)l(o,255&o.gzhead.extra[o.gzindex]),o.gzindex++;o.gzhead.hcrc&&o.pending>d&&(t.adler=C(t.adler,o.pending_buf,o.pending-d,d)),o.gzindex===o.gzhead.extra.length&&(o.gzindex=0,o.status=ut)}else o.status=ut;if(o.status===ut)if(o.gzhead.name){d=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>d&&(t.adler=C(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending===o.pending_buf_size)){f=1;break}f=o.gzindex<o.gzhead.name.length?255&o.gzhead.name.charCodeAt(o.gzindex++):0,l(o,f)}while(0!==f);o.gzhead.hcrc&&o.pending>d&&(t.adler=C(t.adler,o.pending_buf,o.pending-d,d)),0===f&&(o.gzindex=0,o.status=ct)}else o.status=ct;if(o.status===ct)if(o.gzhead.comment){d=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>d&&(t.adler=C(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending===o.pending_buf_size)){f=1;break}f=o.gzindex<o.gzhead.comment.length?255&o.gzhead.comment.charCodeAt(o.gzindex++):0,l(o,f)}while(0!==f);o.gzhead.hcrc&&o.pending>d&&(t.adler=C(t.adler,o.pending_buf,o.pending-d,d)),0===f&&(o.status=bt)}else o.status=bt;if(o.status===bt&&(o.gzhead.hcrc?(o.pending+2>o.pending_buf_size&&s(t),o.pending+2<=o.pending_buf_size&&(l(o,255&t.adler),l(o,t.adler>>8&255),t.adler=0,o.status=gt)):o.status=gt),0!==o.pending){if(s(t),0===t.avail_out)return o.last_flush=-1,F}else if(0===t.avail_in&&n(e)<=n(a)&&e!==D)return i(t,M);if(o.status===mt&&0!==t.avail_in)return i(t,M);if(0!==t.avail_in||0!==o.lookahead||e!==I&&o.status!==mt){var c=o.strategy===q?m(o,e):o.strategy===Y?g(o,e):E[o.level].func(o,e);if((c===vt||c===kt)&&(o.status=mt),c===wt||c===vt)return 0===t.avail_out&&(o.last_flush=-1),F;if(c===pt&&(e===O?Z._tr_align(o):e!==U&&(Z._tr_stored_block(o,0,0,!1),e===T&&(r(o.head),0===o.lookahead&&(o.strstart=0,o.block_start=0,o.insert=0))),s(t),0===t.avail_out))return o.last_flush=-1,F}return e!==D?F:o.wrap<=0?L:(2===o.wrap?(l(o,255&t.adler),l(o,t.adler>>8&255),l(o,t.adler>>16&255),l(o,t.adler>>24&255),l(o,255&t.total_in),l(o,t.total_in>>8&255),l(o,t.total_in>>16&255),l(o,t.total_in>>24&255)):(h(o,t.adler>>>16),h(o,65535&t.adler)),s(t),o.wrap>0&&(o.wrap=-o.wrap),0!==o.pending?F:L)}function S(t){var e;return t&&t.state?(e=t.state.status,e!==ft&&e!==_t&&e!==ut&&e!==ct&&e!==bt&&e!==gt&&e!==mt?i(t,H):(t.state=null,e===gt?i(t,j):F)):H}var E,A=t("../utils/common"),Z=t("./trees"),R=t("./adler32"),C=t("./crc32"),N=t("./messages"),I=0,O=1,T=3,D=4,U=5,F=0,L=1,H=-2,j=-3,M=-5,K=-1,P=1,q=2,Y=3,G=4,X=0,W=2,J=8,Q=9,V=15,$=8,tt=29,et=256,at=et+1+tt,it=30,nt=19,rt=2*at+1,st=15,ot=3,lt=258,ht=lt+ot+1,dt=32,ft=42,_t=69,ut=73,ct=91,bt=103,gt=113,mt=666,wt=1,pt=2,vt=3,kt=4,xt=3,yt=function(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n};E=[new yt(0,0,0,0,u),new yt(4,4,8,4,c),new yt(4,5,16,8,c),new yt(4,6,32,32,c),new yt(4,4,16,16,b),new yt(8,16,32,32,b),new yt(8,16,128,128,b),new yt(8,32,128,256,b),new yt(32,128,258,1024,b),new yt(32,258,258,4096,b)],a.deflateInit=z,a.deflateInit2=y,a.deflateReset=k,a.deflateResetKeep=v,a.deflateSetHeader=x,a.deflate=B,a.deflateEnd=S,a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./messages":13,"./trees":14}],9:[function(t,e){function a(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}e.exports=a},{}],10:[function(t,e){var a=30,i=12;e.exports=function(t,e){var n,r,s,o,l,h,d,f,_,u,c,b,g,m,w,p,v,k,x,y,z,B,S,E,A;n=t.state,r=t.next_in,E=t.input,s=r+(t.avail_in-5),o=t.next_out,A=t.output,l=o-(e-t.avail_out),h=o+(t.avail_out-257),d=n.dmax,f=n.wsize,_=n.whave,u=n.wnext,c=n.window,b=n.hold,g=n.bits,m=n.lencode,w=n.distcode,p=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;t:do{15>g&&(b+=E[r++]<<g,g+=8,b+=E[r++]<<g,g+=8),k=m[b&p];e:for(;;){if(x=k>>>24,b>>>=x,g-=x,x=k>>>16&255,0===x)A[o++]=65535&k;else{if(!(16&x)){if(0===(64&x)){k=m[(65535&k)+(b&(1<<x)-1)];continue e}if(32&x){n.mode=i;break t}t.msg="invalid literal/length code",n.mode=a;break t}y=65535&k,x&=15,x&&(x>g&&(b+=E[r++]<<g,g+=8),y+=b&(1<<x)-1,b>>>=x,g-=x),15>g&&(b+=E[r++]<<g,g+=8,b+=E[r++]<<g,g+=8),k=w[b&v];a:for(;;){if(x=k>>>24,b>>>=x,g-=x,x=k>>>16&255,!(16&x)){if(0===(64&x)){k=w[(65535&k)+(b&(1<<x)-1)];continue a}t.msg="invalid distance code",n.mode=a;break t}if(z=65535&k,x&=15,x>g&&(b+=E[r++]<<g,g+=8,x>g&&(b+=E[r++]<<g,g+=8)),z+=b&(1<<x)-1,z>d){t.msg="invalid distance too far back",n.mode=a;break t}if(b>>>=x,g-=x,x=o-l,z>x){if(x=z-x,x>_&&n.sane){t.msg="invalid distance too far back",n.mode=a;break t}if(B=0,S=c,0===u){if(B+=f-x,y>x){y-=x;do A[o++]=c[B++];while(--x);B=o-z,S=A}}else if(x>u){if(B+=f+u-x,x-=u,y>x){y-=x;do A[o++]=c[B++];while(--x);if(B=0,y>u){x=u,y-=x;do A[o++]=c[B++];while(--x);B=o-z,S=A}}}else if(B+=u-x,y>x){y-=x;do A[o++]=c[B++];while(--x);B=o-z,S=A}for(;y>2;)A[o++]=S[B++],A[o++]=S[B++],A[o++]=S[B++],y-=3;y&&(A[o++]=S[B++],y>1&&(A[o++]=S[B++]))}else{B=o-z;do A[o++]=A[B++],A[o++]=A[B++],A[o++]=A[B++],y-=3;while(y>2);y&&(A[o++]=A[B++],y>1&&(A[o++]=A[B++]))}break}}break}}while(s>r&&h>o);y=g>>3,r-=y,g-=y<<3,b&=(1<<g)-1,t.next_in=r,t.next_out=o,t.avail_in=s>r?5+(s-r):5-(r-s),t.avail_out=h>o?257+(h-o):257-(o-h),n.hold=b,n.bits=g}},{}],11:[function(t,e,a){function i(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function n(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new m.Buf16(320),this.work=new m.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function r(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=D,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new m.Buf32(ct),e.distcode=e.distdyn=new m.Buf32(bt),e.sane=1,e.back=-1,A):C}function s(t){var e;return t&&t.state?(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,r(t)):C}function o(t,e){var a,i;return t&&t.state?(i=t.state,0>e?(a=0,e=-e):(a=(e>>4)+1,48>e&&(e&=15)),e&&(8>e||e>15)?C:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,s(t))):C}function l(t,e){var a,i;return t?(i=new n,t.state=i,i.window=null,a=o(t,e),a!==A&&(t.state=null),a):C}function h(t){return l(t,mt)}function d(t){if(wt){var e;for(b=new m.Buf32(512),g=new m.Buf32(32),e=0;144>e;)t.lens[e++]=8;for(;256>e;)t.lens[e++]=9;for(;280>e;)t.lens[e++]=7;for(;288>e;)t.lens[e++]=8;for(k(y,t.lens,0,288,b,0,t.work,{bits:9}),e=0;32>e;)t.lens[e++]=5;k(z,t.lens,0,32,g,0,t.work,{bits:5}),wt=!1}t.lencode=b,t.lenbits=9,t.distcode=g,t.distbits=5}function f(t,e,a,i){var n,r=t.state;return null===r.window&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new m.Buf8(r.wsize)),i>=r.wsize?(m.arraySet(r.window,e,a-r.wsize,r.wsize,0),r.wnext=0,r.whave=r.wsize):(n=r.wsize-r.wnext,n>i&&(n=i),m.arraySet(r.window,e,a-i,n,r.wnext),i-=n,i?(m.arraySet(r.window,e,a-i,i,0),r.wnext=i,r.whave=r.wsize):(r.wnext+=n,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=n))),0}function _(t,e){var a,n,r,s,o,l,h,_,u,c,b,g,ct,bt,gt,mt,wt,pt,vt,kt,xt,yt,zt,Bt,St=0,Et=new m.Buf8(4),At=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return C;a=t.state,a.mode===G&&(a.mode=X),o=t.next_out,r=t.output,h=t.avail_out,s=t.next_in,n=t.input,l=t.avail_in,_=a.hold,u=a.bits,c=l,b=h,yt=A;t:for(;;)switch(a.mode){case D:if(0===a.wrap){a.mode=X;break}for(;16>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(2&a.wrap&&35615===_){a.check=0,Et[0]=255&_,Et[1]=_>>>8&255,a.check=p(a.check,Et,2,0),_=0,u=0,a.mode=U;break}if(a.flags=0,a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&_)<<8)+(_>>8))%31){t.msg="incorrect header check",a.mode=ft;break}if((15&_)!==T){t.msg="unknown compression method",a.mode=ft;break}if(_>>>=4,u-=4,xt=(15&_)+8,0===a.wbits)a.wbits=xt;else if(xt>a.wbits){t.msg="invalid window size",a.mode=ft;break}a.dmax=1<<xt,t.adler=a.check=1,a.mode=512&_?q:G,_=0,u=0;break;case U:for(;16>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(a.flags=_,(255&a.flags)!==T){t.msg="unknown compression method",a.mode=ft;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=ft;break}a.head&&(a.head.text=_>>8&1),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=p(a.check,Et,2,0)),_=0,u=0,a.mode=F;case F:for(;32>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.head&&(a.head.time=_),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,Et[2]=_>>>16&255,Et[3]=_>>>24&255,a.check=p(a.check,Et,4,0)),_=0,u=0,a.mode=L;case L:for(;16>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.head&&(a.head.xflags=255&_,a.head.os=_>>8),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=p(a.check,Et,2,0)),_=0,u=0,a.mode=H;case H:if(1024&a.flags){for(;16>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.length=_,a.head&&(a.head.extra_len=_),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=p(a.check,Et,2,0)),_=0,u=0}else a.head&&(a.head.extra=null);a.mode=j;case j:if(1024&a.flags&&(g=a.length,g>l&&(g=l),g&&(a.head&&(xt=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Array(a.head.extra_len)),m.arraySet(a.head.extra,n,s,g,xt)),512&a.flags&&(a.check=p(a.check,n,g,s)),l-=g,s+=g,a.length-=g),a.length))break t;a.length=0,a.mode=M;case M:if(2048&a.flags){if(0===l)break t;g=0;do xt=n[s+g++],a.head&&xt&&a.length<65536&&(a.head.name+=String.fromCharCode(xt));while(xt&&l>g);if(512&a.flags&&(a.check=p(a.check,n,g,s)),l-=g,s+=g,xt)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=K;case K:if(4096&a.flags){if(0===l)break t;g=0;do xt=n[s+g++],a.head&&xt&&a.length<65536&&(a.head.comment+=String.fromCharCode(xt));while(xt&&l>g);if(512&a.flags&&(a.check=p(a.check,n,g,s)),l-=g,s+=g,xt)break t}else a.head&&(a.head.comment=null);a.mode=P;case P:if(512&a.flags){for(;16>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_!==(65535&a.check)){t.msg="header crc mismatch",a.mode=ft;break}_=0,u=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=G;break;case q:for(;32>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}t.adler=a.check=i(_),_=0,u=0,a.mode=Y;case Y:if(0===a.havedict)return t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,R;t.adler=a.check=1,a.mode=G;case G:if(e===S||e===E)break t;case X:if(a.last){_>>>=7&u,u-=7&u,a.mode=lt;break}for(;3>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}switch(a.last=1&_,_>>>=1,u-=1,3&_){case 0:a.mode=W;break;case 1:if(d(a),a.mode=et,e===E){_>>>=2,u-=2;break t}break;case 2:a.mode=V;break;case 3:t.msg="invalid block type",a.mode=ft}_>>>=2,u-=2;break;case W:for(_>>>=7&u,u-=7&u;32>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if((65535&_)!==(_>>>16^65535)){t.msg="invalid stored block lengths",a.mode=ft;break}if(a.length=65535&_,_=0,u=0,a.mode=J,e===E)break t;case J:a.mode=Q;case Q:if(g=a.length){if(g>l&&(g=l),g>h&&(g=h),0===g)break t;m.arraySet(r,n,s,g,o),l-=g,s+=g,h-=g,o+=g,a.length-=g;break}a.mode=G;break;case V:for(;14>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(a.nlen=(31&_)+257,_>>>=5,u-=5,a.ndist=(31&_)+1,_>>>=5,u-=5,a.ncode=(15&_)+4,_>>>=4,u-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=ft;break}a.have=0,a.mode=$;case $:for(;a.have<a.ncode;){for(;3>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.lens[At[a.have++]]=7&_,_>>>=3,u-=3}for(;a.have<19;)a.lens[At[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,zt={bits:a.lenbits},yt=k(x,a.lens,0,19,a.lencode,0,a.work,zt),a.lenbits=zt.bits,yt){t.msg="invalid code lengths set",a.mode=ft;break}a.have=0,a.mode=tt;case tt:for(;a.have<a.nlen+a.ndist;){for(;St=a.lencode[_&(1<<a.lenbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(u>=gt);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(16>wt)_>>>=gt,u-=gt,a.lens[a.have++]=wt;else{if(16===wt){for(Bt=gt+2;Bt>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_>>>=gt,u-=gt,0===a.have){t.msg="invalid bit length repeat",a.mode=ft;break}xt=a.lens[a.have-1],g=3+(3&_),_>>>=2,u-=2}else if(17===wt){for(Bt=gt+3;Bt>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=gt,u-=gt,xt=0,g=3+(7&_),_>>>=3,u-=3}else{for(Bt=gt+7;Bt>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=gt,u-=gt,xt=0,g=11+(127&_),_>>>=7,u-=7}if(a.have+g>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=ft;break}for(;g--;)a.lens[a.have++]=xt}}if(a.mode===ft)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=ft;break}if(a.lenbits=9,zt={bits:a.lenbits},yt=k(y,a.lens,0,a.nlen,a.lencode,0,a.work,zt),a.lenbits=zt.bits,yt){t.msg="invalid literal/lengths set",a.mode=ft;break}if(a.distbits=6,a.distcode=a.distdyn,zt={bits:a.distbits},yt=k(z,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,zt),
a.distbits=zt.bits,yt){t.msg="invalid distances set",a.mode=ft;break}if(a.mode=et,e===E)break t;case et:a.mode=at;case at:if(l>=6&&h>=258){t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,v(t,b),o=t.next_out,r=t.output,h=t.avail_out,s=t.next_in,n=t.input,l=t.avail_in,_=a.hold,u=a.bits,a.mode===G&&(a.back=-1);break}for(a.back=0;St=a.lencode[_&(1<<a.lenbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(u>=gt);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(mt&&0===(240&mt)){for(pt=gt,vt=mt,kt=wt;St=a.lencode[kt+((_&(1<<pt+vt)-1)>>pt)],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(u>=pt+gt);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=pt,u-=pt,a.back+=pt}if(_>>>=gt,u-=gt,a.back+=gt,a.length=wt,0===mt){a.mode=ot;break}if(32&mt){a.back=-1,a.mode=G;break}if(64&mt){t.msg="invalid literal/length code",a.mode=ft;break}a.extra=15&mt,a.mode=it;case it:if(a.extra){for(Bt=a.extra;Bt>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.length+=_&(1<<a.extra)-1,_>>>=a.extra,u-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=nt;case nt:for(;St=a.distcode[_&(1<<a.distbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(u>=gt);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(0===(240&mt)){for(pt=gt,vt=mt,kt=wt;St=a.distcode[kt+((_&(1<<pt+vt)-1)>>pt)],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(u>=pt+gt);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=pt,u-=pt,a.back+=pt}if(_>>>=gt,u-=gt,a.back+=gt,64&mt){t.msg="invalid distance code",a.mode=ft;break}a.offset=wt,a.extra=15&mt,a.mode=rt;case rt:if(a.extra){for(Bt=a.extra;Bt>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.offset+=_&(1<<a.extra)-1,_>>>=a.extra,u-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=ft;break}a.mode=st;case st:if(0===h)break t;if(g=b-h,a.offset>g){if(g=a.offset-g,g>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=ft;break}g>a.wnext?(g-=a.wnext,ct=a.wsize-g):ct=a.wnext-g,g>a.length&&(g=a.length),bt=a.window}else bt=r,ct=o-a.offset,g=a.length;g>h&&(g=h),h-=g,a.length-=g;do r[o++]=bt[ct++];while(--g);0===a.length&&(a.mode=at);break;case ot:if(0===h)break t;r[o++]=a.length,h--,a.mode=at;break;case lt:if(a.wrap){for(;32>u;){if(0===l)break t;l--,_|=n[s++]<<u,u+=8}if(b-=h,t.total_out+=b,a.total+=b,b&&(t.adler=a.check=a.flags?p(a.check,r,b,o-b):w(a.check,r,b,o-b)),b=h,(a.flags?_:i(_))!==a.check){t.msg="incorrect data check",a.mode=ft;break}_=0,u=0}a.mode=ht;case ht:if(a.wrap&&a.flags){for(;32>u;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=ft;break}_=0,u=0}a.mode=dt;case dt:yt=Z;break t;case ft:yt=N;break t;case _t:return I;case ut:default:return C}return t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,(a.wsize||b!==t.avail_out&&a.mode<ft&&(a.mode<lt||e!==B))&&f(t,t.output,t.next_out,b-t.avail_out)?(a.mode=_t,I):(c-=t.avail_in,b-=t.avail_out,t.total_in+=c,t.total_out+=b,a.total+=b,a.wrap&&b&&(t.adler=a.check=a.flags?p(a.check,r,b,t.next_out-b):w(a.check,r,b,t.next_out-b)),t.data_type=a.bits+(a.last?64:0)+(a.mode===G?128:0)+(a.mode===et||a.mode===J?256:0),(0===c&&0===b||e===B)&&yt===A&&(yt=O),yt)}function u(t){if(!t||!t.state)return C;var e=t.state;return e.window&&(e.window=null),t.state=null,A}function c(t,e){var a;return t&&t.state?(a=t.state,0===(2&a.wrap)?C:(a.head=e,e.done=!1,A)):C}var b,g,m=t("../utils/common"),w=t("./adler32"),p=t("./crc32"),v=t("./inffast"),k=t("./inftrees"),x=0,y=1,z=2,B=4,S=5,E=6,A=0,Z=1,R=2,C=-2,N=-3,I=-4,O=-5,T=8,D=1,U=2,F=3,L=4,H=5,j=6,M=7,K=8,P=9,q=10,Y=11,G=12,X=13,W=14,J=15,Q=16,V=17,$=18,tt=19,et=20,at=21,it=22,nt=23,rt=24,st=25,ot=26,lt=27,ht=28,dt=29,ft=30,_t=31,ut=32,ct=852,bt=592,gt=15,mt=gt,wt=!0;a.inflateReset=s,a.inflateReset2=o,a.inflateResetKeep=r,a.inflateInit=h,a.inflateInit2=l,a.inflate=_,a.inflateEnd=u,a.inflateGetHeader=c,a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./inffast":10,"./inftrees":12}],12:[function(t,e){var a=t("../utils/common"),i=15,n=852,r=592,s=0,o=1,l=2,h=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],d=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],f=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],_=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,u,c,b,g,m,w){var p,v,k,x,y,z,B,S,E,A=w.bits,Z=0,R=0,C=0,N=0,I=0,O=0,T=0,D=0,U=0,F=0,L=null,H=0,j=new a.Buf16(i+1),M=new a.Buf16(i+1),K=null,P=0;for(Z=0;i>=Z;Z++)j[Z]=0;for(R=0;c>R;R++)j[e[u+R]]++;for(I=A,N=i;N>=1&&0===j[N];N--);if(I>N&&(I=N),0===N)return b[g++]=20971520,b[g++]=20971520,w.bits=1,0;for(C=1;N>C&&0===j[C];C++);for(C>I&&(I=C),D=1,Z=1;i>=Z;Z++)if(D<<=1,D-=j[Z],0>D)return-1;if(D>0&&(t===s||1!==N))return-1;for(M[1]=0,Z=1;i>Z;Z++)M[Z+1]=M[Z]+j[Z];for(R=0;c>R;R++)0!==e[u+R]&&(m[M[e[u+R]]++]=R);if(t===s?(L=K=m,z=19):t===o?(L=h,H-=257,K=d,P-=257,z=256):(L=f,K=_,z=-1),F=0,R=0,Z=C,y=g,O=I,T=0,k=-1,U=1<<I,x=U-1,t===o&&U>n||t===l&&U>r)return 1;for(var q=0;;){q++,B=Z-T,m[R]<z?(S=0,E=m[R]):m[R]>z?(S=K[P+m[R]],E=L[H+m[R]]):(S=96,E=0),p=1<<Z-T,v=1<<O,C=v;do v-=p,b[y+(F>>T)+v]=B<<24|S<<16|E|0;while(0!==v);for(p=1<<Z-1;F&p;)p>>=1;if(0!==p?(F&=p-1,F+=p):F=0,R++,0===--j[Z]){if(Z===N)break;Z=e[u+m[R]]}if(Z>I&&(F&x)!==k){for(0===T&&(T=I),y+=C,O=Z-T,D=1<<O;N>O+T&&(D-=j[O+T],!(0>=D));)O++,D<<=1;if(U+=1<<O,t===o&&U>n||t===l&&U>r)return 1;k=F&x,b[k]=I<<24|O<<16|y-g|0}}return 0!==F&&(b[y+F]=Z-T<<24|64<<16|0),w.bits=I,0}},{"../utils/common":3}],13:[function(t,e){e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],14:[function(t,e,a){function i(t){for(var e=t.length;--e>=0;)t[e]=0}function n(t){return 256>t?st[t]:st[256+(t>>>7)]}function r(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function s(t,e,a){t.bi_valid>G-a?(t.bi_buf|=e<<t.bi_valid&65535,r(t,t.bi_buf),t.bi_buf=e>>G-t.bi_valid,t.bi_valid+=a-G):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}function o(t,e,a){s(t,a[2*e],a[2*e+1])}function l(t,e){var a=0;do a|=1&t,t>>>=1,a<<=1;while(--e>0);return a>>>1}function h(t){16===t.bi_valid?(r(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}function d(t,e){var a,i,n,r,s,o,l=e.dyn_tree,h=e.max_code,d=e.stat_desc.static_tree,f=e.stat_desc.has_stree,_=e.stat_desc.extra_bits,u=e.stat_desc.extra_base,c=e.stat_desc.max_length,b=0;for(r=0;Y>=r;r++)t.bl_count[r]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;q>a;a++)i=t.heap[a],r=l[2*l[2*i+1]+1]+1,r>c&&(r=c,b++),l[2*i+1]=r,i>h||(t.bl_count[r]++,s=0,i>=u&&(s=_[i-u]),o=l[2*i],t.opt_len+=o*(r+s),f&&(t.static_len+=o*(d[2*i+1]+s)));if(0!==b){do{for(r=c-1;0===t.bl_count[r];)r--;t.bl_count[r]--,t.bl_count[r+1]+=2,t.bl_count[c]--,b-=2}while(b>0);for(r=c;0!==r;r--)for(i=t.bl_count[r];0!==i;)n=t.heap[--a],n>h||(l[2*n+1]!==r&&(t.opt_len+=(r-l[2*n+1])*l[2*n],l[2*n+1]=r),i--)}}function f(t,e,a){var i,n,r=new Array(Y+1),s=0;for(i=1;Y>=i;i++)r[i]=s=s+a[i-1]<<1;for(n=0;e>=n;n++){var o=t[2*n+1];0!==o&&(t[2*n]=l(r[o]++,o))}}function _(){var t,e,a,i,n,r=new Array(Y+1);for(a=0,i=0;H-1>i;i++)for(lt[i]=a,t=0;t<1<<$[i];t++)ot[a++]=i;for(ot[a-1]=i,n=0,i=0;16>i;i++)for(ht[i]=n,t=0;t<1<<tt[i];t++)st[n++]=i;for(n>>=7;K>i;i++)for(ht[i]=n<<7,t=0;t<1<<tt[i]-7;t++)st[256+n++]=i;for(e=0;Y>=e;e++)r[e]=0;for(t=0;143>=t;)nt[2*t+1]=8,t++,r[8]++;for(;255>=t;)nt[2*t+1]=9,t++,r[9]++;for(;279>=t;)nt[2*t+1]=7,t++,r[7]++;for(;287>=t;)nt[2*t+1]=8,t++,r[8]++;for(f(nt,M+1,r),t=0;K>t;t++)rt[2*t+1]=5,rt[2*t]=l(t,5);dt=new ut(nt,$,j+1,M,Y),ft=new ut(rt,tt,0,K,Y),_t=new ut(new Array(0),et,0,P,X)}function u(t){var e;for(e=0;M>e;e++)t.dyn_ltree[2*e]=0;for(e=0;K>e;e++)t.dyn_dtree[2*e]=0;for(e=0;P>e;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*W]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function c(t){t.bi_valid>8?r(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function b(t,e,a,i){c(t),i&&(r(t,a),r(t,~a)),R.arraySet(t.pending_buf,t.window,e,a,t.pending),t.pending+=a}function g(t,e,a,i){var n=2*e,r=2*a;return t[n]<t[r]||t[n]===t[r]&&i[e]<=i[a]}function m(t,e,a){for(var i=t.heap[a],n=a<<1;n<=t.heap_len&&(n<t.heap_len&&g(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!g(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i}function w(t,e,a){var i,r,l,h,d=0;if(0!==t.last_lit)do i=t.pending_buf[t.d_buf+2*d]<<8|t.pending_buf[t.d_buf+2*d+1],r=t.pending_buf[t.l_buf+d],d++,0===i?o(t,r,e):(l=ot[r],o(t,l+j+1,e),h=$[l],0!==h&&(r-=lt[l],s(t,r,h)),i--,l=n(i),o(t,l,a),h=tt[l],0!==h&&(i-=ht[l],s(t,i,h)));while(d<t.last_lit);o(t,W,e)}function p(t,e){var a,i,n,r=e.dyn_tree,s=e.stat_desc.static_tree,o=e.stat_desc.has_stree,l=e.stat_desc.elems,h=-1;for(t.heap_len=0,t.heap_max=q,a=0;l>a;a++)0!==r[2*a]?(t.heap[++t.heap_len]=h=a,t.depth[a]=0):r[2*a+1]=0;for(;t.heap_len<2;)n=t.heap[++t.heap_len]=2>h?++h:0,r[2*n]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=s[2*n+1]);for(e.max_code=h,a=t.heap_len>>1;a>=1;a--)m(t,r,a);n=l;do a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],m(t,r,1),i=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=i,r[2*n]=r[2*a]+r[2*i],t.depth[n]=(t.depth[a]>=t.depth[i]?t.depth[a]:t.depth[i])+1,r[2*a+1]=r[2*i+1]=n,t.heap[1]=n++,m(t,r,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],d(t,e),f(r,h,t.bl_count)}function v(t,e,a){var i,n,r=-1,s=e[1],o=0,l=7,h=4;for(0===s&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;a>=i;i++)n=s,s=e[2*(i+1)+1],++o<l&&n===s||(h>o?t.bl_tree[2*n]+=o:0!==n?(n!==r&&t.bl_tree[2*n]++,t.bl_tree[2*J]++):10>=o?t.bl_tree[2*Q]++:t.bl_tree[2*V]++,o=0,r=n,0===s?(l=138,h=3):n===s?(l=6,h=3):(l=7,h=4))}function k(t,e,a){var i,n,r=-1,l=e[1],h=0,d=7,f=4;for(0===l&&(d=138,f=3),i=0;a>=i;i++)if(n=l,l=e[2*(i+1)+1],!(++h<d&&n===l)){if(f>h){do o(t,n,t.bl_tree);while(0!==--h)}else 0!==n?(n!==r&&(o(t,n,t.bl_tree),h--),o(t,J,t.bl_tree),s(t,h-3,2)):10>=h?(o(t,Q,t.bl_tree),s(t,h-3,3)):(o(t,V,t.bl_tree),s(t,h-11,7));h=0,r=n,0===l?(d=138,f=3):n===l?(d=6,f=3):(d=7,f=4)}}function x(t){var e;for(v(t,t.dyn_ltree,t.l_desc.max_code),v(t,t.dyn_dtree,t.d_desc.max_code),p(t,t.bl_desc),e=P-1;e>=3&&0===t.bl_tree[2*at[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}function y(t,e,a,i){var n;for(s(t,e-257,5),s(t,a-1,5),s(t,i-4,4),n=0;i>n;n++)s(t,t.bl_tree[2*at[n]+1],3);k(t,t.dyn_ltree,e-1),k(t,t.dyn_dtree,a-1)}function z(t){var e,a=4093624447;for(e=0;31>=e;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return N;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return I;for(e=32;j>e;e++)if(0!==t.dyn_ltree[2*e])return I;return N}function B(t){bt||(_(),bt=!0),t.l_desc=new ct(t.dyn_ltree,dt),t.d_desc=new ct(t.dyn_dtree,ft),t.bl_desc=new ct(t.bl_tree,_t),t.bi_buf=0,t.bi_valid=0,u(t)}function S(t,e,a,i){s(t,(T<<1)+(i?1:0),3),b(t,e,a,!0)}function E(t){s(t,D<<1,3),o(t,W,nt),h(t)}function A(t,e,a,i){var n,r,o=0;t.level>0?(t.strm.data_type===O&&(t.strm.data_type=z(t)),p(t,t.l_desc),p(t,t.d_desc),o=x(t),n=t.opt_len+3+7>>>3,r=t.static_len+3+7>>>3,n>=r&&(n=r)):n=r=a+5,n>=a+4&&-1!==e?S(t,e,a,i):t.strategy===C||r===n?(s(t,(D<<1)+(i?1:0),3),w(t,nt,rt)):(s(t,(U<<1)+(i?1:0),3),y(t,t.l_desc.max_code+1,t.d_desc.max_code+1,o+1),w(t,t.dyn_ltree,t.dyn_dtree)),u(t),i&&c(t)}function Z(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(ot[a]+j+1)]++,t.dyn_dtree[2*n(e)]++),t.last_lit===t.lit_bufsize-1}var R=t("../utils/common"),C=4,N=0,I=1,O=2,T=0,D=1,U=2,F=3,L=258,H=29,j=256,M=j+1+H,K=30,P=19,q=2*M+1,Y=15,G=16,X=7,W=256,J=16,Q=17,V=18,$=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],tt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],et=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],at=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],it=512,nt=new Array(2*(M+2));i(nt);var rt=new Array(2*K);i(rt);var st=new Array(it);i(st);var ot=new Array(L-F+1);i(ot);var lt=new Array(H);i(lt);var ht=new Array(K);i(ht);var dt,ft,_t,ut=function(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length},ct=function(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e},bt=!1;a._tr_init=B,a._tr_stored_block=S,a._tr_flush_block=A,a._tr_tally=Z,a._tr_align=E},{"../utils/common":3}],15:[function(t,e){function a(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}e.exports=a},{}],"/":[function(t,e){var a=t("./lib/utils/common").assign,i=t("./lib/deflate"),n=t("./lib/inflate"),r=t("./lib/zlib/constants"),s={};a(s,i,n,r),e.exports=s},{"./lib/deflate":1,"./lib/inflate":2,"./lib/utils/common":3,"./lib/zlib/constants":6}]},{},[])("/")});
/* -*- mode: javascript; c-basic-offset: 4; indent-tabs-mode: nil -*- */
/*global $:false */
// 
// Derived and heavily extended from karyoscape.js at Dalliance Genome Explorer
//
//
// Karyotype.js
//

define(
    'karyotype',['require','spans','util','colors','pako'],function(require){
        //var spans, util,colors) 

        var spans  = require('spans');
        var util   = require('util');
        var colors = require('colors');
        var pako   = require('pako');

        var NS_SVG = 'http://www.w3.org/2000/svg';

        var dataLocation =
            "http://staticwest.rcsb.org/gene/hg38/chromosome.band.hg38.txt.gz";

        var karyo_palette = {
            gneg:  colors.forceHex('white'),
            gpos25: 'rgb(200,200,200)',
            gpos33: 'rgb(180,180,180)',
            gpos50: 'rgb(128,128,128)',
            gpos66: 'rgb(100,100,100)',
            gpos75: 'rgb(64,64,64)',
            gpos100: 'rgb(0,0,0)',
            gpos: 'rgb(0,0,0)',
            gvar: 'rgb(100,100,100)',
            acen: colors.forceHex('red'),
            stalk: 'rgb(100,100,100)',
            gradient : 'rgb(128,128,128)',
            border : 'black'
        };

        var thumbColor = colors.forceHex('green');
        var thumbStroke = colors.forceHex('darkgreen');


        function Karyotype()
        {


            this.width = 400;

            this.trackHeight = 10;

            // we leave a bit of space at the top, for the thumb to be better visible

            this.y = 6;

            // to look ok, this.y should not be smaller than this.thumbSpacer
            this.thumbSpacer = 6;

            this.thumbWidth = 5;

            this.padding = 1;

            this._initialized = false;
            this.listenerMap = {};
            this.karyos = [];
            this.scale = 1;


            this.chrLen = 1;
            this.start = 0;
            this.end = 1;
            this.bands = [];
            this.thumbEnabled = true;

            this.realParent = "";
            this.parent = "";

            this.hPopupHolder = util.makeElement('div');
            this.hPopupHolder.style['font-family'] = 'helvetica';
            this.hPopupHolder.style['font-size'] = '12pt';

            this.resetSVG();

            var that = this;

            function onResize() {
                

                $(parent).css('overflow', 'hidden');
                $(parent).css('width', 'auto');
                $(that.realParent).css('overflow', 'hidden');
                $(that.realParent).css('width', 'auto');
                that.updateScale();
                that.redraw();
            }

            var resizeTimer = false;

            $(window).resize(function () {
                if ( resizeTimer )  {
                 clearTimeout(resizeTimer);
                }
                resizeTimer = setTimeout(onResize, 300);
                
            });
        }

        Karyotype.prototype.resetSVG = function(){
            this.svg = util.makeElementNS(NS_SVG, 'svg');

            util.setAttr(this.svg,'height',this.y + 
                this.trackHeight + this.thumbSpacer * 2 + 
                this.padding);


        };

        Karyotype.prototype.setParent = function(elem) {

            if (typeof $(elem) !== undefined) {

                this.realParent = elem;

                var myInnerDiv = $("<div>");
                $(this.realParent).append(myInnerDiv);

                this.parent = myInnerDiv;

                this.parent.append(this.svg);
                this.parent.append(this.hPopupHolder);


            } else {
                console.error("could not register parent " + elem);
            }


        };

        Karyotype.prototype.addListener = function(eventName, callback) {
            var callbacks = this.listenerMap[eventName];
            if (typeof callbacks === 'undefined') {
                callbacks = [];
                this.listenerMap[eventName] = callbacks;
            }

            callbacks.push(callback);


            if (this._initialized && eventName === 'viewerReady') {
                // don't use dispatch here, we only want this callback to be
                // invoked.
                callback(this, null);
            }
        };

        Karyotype.prototype.init = function(){

            this.loadData(dataLocation);
        };

        Karyotype.prototype.setDataLocation = function(url){

            dataLocation = url;
        };

        Karyotype.prototype.getSVG = function() {
            return this.svg;
        };

        Karyotype.prototype.setTrackHeight = function(newHeight){

            if ( newHeight>0 ) {
                this.trackHeight = newHeight;
            }
            if ( this._initialized) {
                this.redraw();
            }
        };

        Karyotype.prototype.getChrLen = function(){

            return this.chrLen;
        };

        Karyotype.prototype.getChr = function(){

            return this.chr;
        };


        Karyotype.prototype.getWidth = function(){

            return this.width;
        };

        
        
        // if url ends with .gz
        // use gunzip to read the data faster

           

        Karyotype.prototype.loadData = function(){

            var that = this;

             if ( util.endsWith(dataLocation,'.gz')){

                $.ajax({
                          url: dataLocation,
                          type: "GET",
                          dataType: 'text',
                          mimeType: 'text/plain; charset=x-user-defined',
                          processData: false,
                          responseType:'blob',
                          success: function(result){
                                
                                // we need to convert the response to binary
                                var bytes = [];

                                for (var i = 0; i < result.length; ++i)
                                {
                                    bytes.push(result.charCodeAt(i));
                                }

                                var binData     = new Uint8Array(bytes);

                                // now we use the pako library to uncompress the binary response
                                var pdata     = pako.inflate(binData);

                                // and convert the uncompressed data back to string
                                var data     = String.fromCharCode.apply(null, 
                                                new Uint16Array(pdata));
                                           
                                that.setData(data);
                          },
                          error : function( jqXHR,  textStatus,  errorThrown){
                            console.log(errorThrown);
                            console.error(textStatus);
                            console.log(jqXHR);
                          }
                });

               
            } else {
                // probably a standard txt file
                $.get(dataLocation, function(data){
                    that.setData(data);
                });
            }
        };

        Karyotype.prototype._dispatchEvent = function(event, newEventName, arg) {

            var callbacks = this.listenerMap[newEventName];
            if (callbacks) {
                callbacks.forEach(function (callback) {
                    callback(arg, event);
                });
            }
        };

        Karyotype.prototype.setData = function(data){

            data = data.split(/\r?\n/);

            for(var i = 0; i < data.length; i++){

                if ( data[i].startsWith("#")) {
                    continue;
                }

                var d = data[i].split(/[\t]+/);

                this.bands.push(d);
            }

            if (!this._initialized) {
                this._initialized = true;
                this._dispatchEvent({'name':'viewerReadyEvent'},
                    'viewerReady',this);
            }
        };

        Karyotype.prototype.getBands = function(){
            return this.bands;
        };

        Karyotype.prototype.setBands = function(bands){
            this.bands = bands;
            this._initialized = true;
        };



        Karyotype.prototype.update = function(chr, start, end) {
            this.start = start;
            this.end = end;
            
            if (!this.chr || chr !== this.chr) {
                
                this.chr = chr;
                
                util.removeChildren(this.svg);
                //$(this.svg).empty();
                
                this.karyos = [];
                

                for (var i = 0 ; i < this.bands.length ; i++){

                    //console.log(bands[i][0] + " " + chr);
                    if ( this.bands[i][0] === chr){
                        
                        var elem = this.bands[i];

                        //var chr=elem[0];
                        var min = parseInt(elem[1]);
                        var max = parseInt(elem[2]);
                        var name = elem[3];
                        var desc = elem[4];

                        if ( max > this.chrLen) {
                            this.chrLen = max;
                        }

                        this.karyos.push({
                            id: name,
                            min: min,
                            max: max,
                            label: desc
                        });


                    }
                }

                if ( this._initialized) {
                    this.redraw();
                }
            } 

            if ( this._initialized) {

                this.setThumb();
            }
        };

        Karyotype.prototype.getChromosomeList = function(){

            var chromosomes = [];
            var data = this.getBands();
              for(var i = 0; i < data.length; i++){
                //console.log(data[i]);

                var chr = data[i][0];

                if ( chr.startsWith("#") ) {
                    continue;
                }

                // skip alternatives
                // if ( chr.indexOf('_')  > -1) {
                //     continue;
                // }

                // skip empty lines
                if ( chr.length < 3) {
                    continue;
                }

               
                if ( util.indexOf.call(chromosomes,chr) < 0){
                    chromosomes.push(chr);
                }

            }
            
            return chromosomes.sort(util.sortAlphaNum);
        };

        Karyotype.prototype.getChromosomeSizes = function() {
            var size={};
             var data = this.getBands();
             for(var i = 0; i < data.length; i++){

               
                var chr = data[i][0];
                
                if ( chr.startsWith("#") ) {
                    continue;
                }

                // skip alternatives
                // if ( chr.indexOf('_')  > -1) {
                //     continue;
                // }

                // skip empty lines
                if ( chr.length < 3) {
                    continue;
                }

                var max = parseInt(data[i][2]);

                if ( typeof size[chr] === 'undefined'){
                    

                    size[chr] = max; 
                } else {
                    if ( max > size[chr]) {
                        
                        size[chr] = max;
                    }
                }

             }

             return size;

        };


        Karyotype.prototype.createGradient = function(i,col){
            var gradient = util.makeElementNS(NS_SVG, 'linearGradient', null, {
                id: 'myGradient' + this.chr + '_' + i,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
                'gradientUnits': 'userSpaceOnUse'
            });

            // and now the stops..

            var stop1 = util.makeElementNS(NS_SVG, 'stop', null, {
                id: 'start' + this.chr + '_' + i,
                'offset':     '50%',
                'stop-color': col
            });

            gradient.appendChild(stop1);

            var stop2 = util.makeElementNS(NS_SVG, 'stop', null, {
                id: 'stop' + this.chr + '_' +i,
                'offset':    '100%',
                'stop-color': karyo_palette.gradient
            });

            gradient.appendChild(stop2);
                    
            var defs = util.makeElementNS(NS_SVG, 'defs');

            defs.appendChild(gradient);

            this.svg.appendChild(defs);
        };

        Karyotype.prototype.createBox = function(k, bmin, bmax, col,fill){

            var y = this.y;
            
            var height = this.y + this.trackHeight;

            if (k.label === 'stalk' || k.label === 'acen'){

                y = this.y + this.trackHeight / 4;

                height = this.y + this.trackHeight / 2;
            }



            var rect = util.makeElementNS(NS_SVG, 'rect', null, {
                x: bmin,
                y: y,
                width: (bmax - bmin),
                height: height,
                fill: fill,
                //fill:col,
                stroke: k.label === 'acen' ? col : karyo_palette.border,
                strokewidth: 1

            });

            return rect;
        };

        Karyotype.prototype.numberWithCommas = function(x){

            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x)) {
                x = x.replace(pattern, "$1,$2");
            }
            return x;

        };

        Karyotype.prototype.createLeftBox = function(k, bmin, bmax, col,fill){

            var width = (bmax-bmin);
            var radius = 5;
            if ( width - radius <0) {
                radius = width - 1;
            }
            if ( radius < 0 ) {
                radius = 0;
            }

            var path = this.leftBoundedRect(bmin,this.y, width,this.y+ this.trackHeight,radius);


            var rect = util.makeElementNS(NS_SVG, 'path', null, {
                d: path,
                x: bmin,
                y: (k.label === 'stalk' || k.label === 'acen' ? this.y+5 : this.y),
                width: (bmax - bmin),
                height: (k.label === 'stalk' ||
                k.label === 'acen' ? this.y+5 : this.y+this.trackHeight),
                fill: fill,
                //fill:col,
                stroke: k.label === 'acen' ? col : karyo_palette.border,
                strokewidth: 1

            });

            

            return rect;
        };

        Karyotype.prototype.createRightBox = function(k, bmin, bmax, col,fill){

            var width = (bmax-bmin);
            var radius = 5;
            if ( width - radius <0) {
                radius = width - 1;
            }
            if ( radius < 0 ) {
                radius = 0;
            }

            var path = this.rightBoundedRect(bmin,this.y, width,this.y+this.trackHeight,radius);

            var rect = util.makeElementNS(NS_SVG, 'path', null, {
                d: path,
                x: bmin,
                y: (k.label === 'stalk' || k.label === 'acen' ? this.y+5 : this.y),
                width: (bmax - bmin),
                height: (k.label === 'stalk' ||
                k.label === 'acen' ? this.y+5 : this.y+this.trackHeight),
                fill: fill,
                stroke: k.label === 'acen' ? col : karyo_palette.border,
                strokewidth: 1


            });

            
            return rect;
        };

        Karyotype.prototype.rightBoundedRect = function(x,y,width,height, radius){
            return  this.roundedRect(x,y,width,height,radius,false,true,false,true);
        };

        Karyotype.prototype.leftBoundedRect = function(x,y,width,height, radius){
            return  this.roundedRect(x,y,width,height,radius,true,false,true,false);
        };

        /*
         x: x-coordinate
         y: y-coordinate
         w: width
         h: height
         r: corner radius
         tl: top_left rounded?
         tr: top_right rounded?
         bl: bottom_left rounded?
         br: bottom_right rounded?
         */
        Karyotype.prototype.roundedRect = function(x, y, w, h, r, tl, tr, bl, br) {
            var retval;
            retval  = "M" + (x + r) + "," + y;
            retval += "h" + (w - 2*r);
            if (tr) { retval += "a" + r + "," + r + " 0 0 1 " + r + "," + r; }
            else { retval += "h" + r; retval += "v" + r; }
            retval += "v" + (h - 2*r);
            if (br) { retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + r; }
            else { retval += "v" + r; retval += "h" + -r; }
            retval += "h" + (2*r - w);
            if (bl) { retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + -r; }
            else { retval += "h" + -r; retval += "v" + -r; }
            retval += "v" + (2*r - h);
            if (tl) { retval += "a" + r + "," + r + " 0 0 1 " + r + "," + -r; }
            else { retval += "v" + -r; retval += "h" + r; }
            retval += "z";
            return retval;
        };


        Karyotype.prototype.redraw = function() {

            util.removeChildren(this.svg);

            this.karyos = this.karyos.sort(function(k1, k2) {
                return (k1.min|0) - (k2.min|0);
            });
            if (this.karyos.length > 0) {
                if (!this.chrLen) {
                    this.chrLen = this.karyos[this.karyos.length - 1].max;
                }
            } else {
                if (!this.chrLen) {
                    alert('Warning: insufficient data to set up spatial navigator');
                    this.chrLen = 200000000;
                }
                this.karyos.push({
                    id: "",
                    min: 1,
                    max: this.chrLen,
                    label: 'gneg'
                });
            }
            var bandspans = null;

            for (var i = 0; i < this.karyos.length; ++i) {
                var k = this.karyos[i];
                var bmin = this.padding+((1.0 * k.min) / this.chrLen) * this.width;
                var bmax = this.padding+((1.0 * k.max) / this.chrLen) * this.width;
                var col = karyo_palette[k.label];

                if (!col) {
                    col = karyo_palette[k.id];                    
                    k.label=k.id;
                } 
                
                if (!col) {
                    
                    console.log(k);
                    console.error("don't understand " + k.label + " : " + k);
                } else {
                    if (bmax > bmin) {

                        this.createGradient(i,col);

                        var fill = 'url(#myGradient'+ this.chr + '_'  + i+')';

                        var box;
                        if ( i === 0 ) {
                            box = this.createLeftBox(k, bmin, bmax, col, fill);
                        } else if  ( i === (this.karyos.length - 1)) {
                            box = this.createRightBox(k, bmin, bmax, col,fill);
                        } else {
                            box = this.createBox(k, bmin, bmax, col, fill);
                        }

                        var chrNr = "";
                        if (this.chr.startsWith("chr")) {
                            chrNr = this.chr.substring(3);
                        }
                        $(box).tooltip({
                            'title':chrNr + k.id + ' ' + 
                            this.numberWithCommas(k.min) + ' - ' +
                            this.numberWithCommas(k.max),
                            'container':'body'
                        });
                        $(box).css('cursor', 'pointer');


                        this.svg.appendChild(box);

                        if (k.label.substring(0, 1) === 'g') {
                            var br = new spans.Range(k.min, k.max);
                            if (bandspans === null) {
                                bandspans = br;
                            } else {
                                bandspans = spans.union(bandspans, br);
                            }
                        }


                        var bandClickedEventFunction = this.createBandClickedEvent(k);

                        $(box).bind('click', bandClickedEventFunction);

                        var mouseOverBandEvent = this.createMouseOverBandEvent(k);

                        $(box).bind('mouseover', mouseOverBandEvent);

                    } else {
                        console.error("bmax < bmin " + k);
                    }
                }
            }

            this.initThumb();            

        };

       
        Karyotype.prototype.createBandClickedEvent = function(k){
            var that = this;
            return function (event ) {

            
                var pos = $(that.realParent).offset();

                var x = event.clientX -4;

                var width = that.width;
                var chrLen = that.chrLen;

                var trueX = x - pos.left;

                var seqPos = Math.round(trueX / width * chrLen);
  
                that._dispatchEvent({'name':'bandClickedEvent'},
                    'bandClicked',{ 'min': seqPos,                     
                     'max': (seqPos + width),
                     'chrLen':that.chrLen, 
                     'chr' : that.chr,
                     'band':k});
            };
        };

        Karyotype.prototype.createMouseOverBandEvent = function(k){
            var that = this;
            return function () {
                that._dispatchEvent({'name':'mouseOverBandEvent'},
                    'mouseOverBand',k);
            };
        };

        Karyotype.prototype.initThumb = function() {

            if ( ! this.thumbEnabled){
                return;
            }

            this.thumb = util.makeElementNS(NS_SVG, 'rect', null, {
                id:'thumb' + this.chr,
                x: 50,
                y: this.y-this.thumbSpacer,
                width: this.thumbWidth,
                height: this.y+this.trackHeight + this.thumbSpacer *2 ,
                fill: thumbColor,
                stroke: thumbStroke,
                strokewidth:1,
                opacity:0.7
            });

            $(this.thumb).css('cursor', 'col-resize');

            this.svg.appendChild(this.thumb);

            this.setThumb();

            var thisKaryo = this;
            var sliderDeltaX;

            var that = this;
            var moveHandler = function(ev) {
                ev.stopPropagation(); ev.preventDefault();
                var sliderX = Math.max(-4, Math.min(ev.clientX + sliderDeltaX,
                    thisKaryo.width - 4));
                thisKaryo.thumb.setAttribute('x', sliderX);
            };
            var upHandler = function(ev) {
                ev.stopPropagation(); ev.preventDefault();
                if (thisKaryo.onchange) {

                    var val = (thisKaryo.thumb.getAttribute('x')|0);

                    thisKaryo.onchange((1.0 * (val + 4)) / thisKaryo.width, true);
                }
                document.removeEventListener('mousemove', moveHandler, true);
                document.removeEventListener('mouseup', upHandler, true);

                // at what sequence position did the slider get released?

                var xval = (thisKaryo.thumb.getAttribute('x')|0);
                var start =   Math.round(xval / thisKaryo.width * thisKaryo.chrLen) ;

                //console.log(start + " " + thisKaryo.chrLen + " " + thisKaryo.chrLen * start ) ;
                
                var width = thisKaryo.thumb.getAttribute('width')|1;
                
                var end = Math.round(start + (width / thisKaryo.width * thisKaryo.chrLen));

                that._dispatchEvent({'name':'sliderMovedEvent'},
                    'sliderMoved', {'min':start,'max': end, 'chr': thisKaryo.chr});
            };

            this.thumb.addEventListener('mousedown', function(ev) {
                ev.stopPropagation(); ev.preventDefault();
                sliderDeltaX = thisKaryo.thumb.getAttribute('x') - ev.clientX;
                document.addEventListener('mousemove', moveHandler, true);
                document.addEventListener('mouseup', upHandler, true);
            }, false);


        };

        /** enable/disable the display of the "thumb", which displays a currently selected region.
        */
        Karyotype.prototype.showThumb = function(flag) {

            this.thumbEnabled = flag;

            if (flag && ( ! this.thumb)) {
                this.initThumb();
            }

            if ( ! flag && this.thumb){
                this.svg.removeChild(this.thumb);
                this.thumb = undefined;


            }

        };

        /** update the position of the "thumb".
        */
        Karyotype.prototype.setThumb = function() {

            if ( ! this.thumbEnabled){
                return;
            }

            if ( ! this._initialized) {
                return;
            }

            var pos = (this.start|0) ;
            
            var gpos = Math.round(((1.0 * pos)/this.chrLen) * this.width);

            var w = Math.round((this.end|0 - this.start|0) / this.chrLen * this.width);

            if ( w < 5) {
                w = 5;
            }

            // console.log("setThumb: " + gpos + " " + w + " tw: " + this.width + " chrlen " +
            //             this.chrLen  + " start " + this.start + " this.thumb: " + this.thumb);
            if (this.thumb) {
                 
                this.thumb.setAttribute('x', gpos );
              
                this.thumb.setAttribute('width', w);
                
            }
        };

        /** allows to set the scale of this karyotype image. This can be used when showing 
            multiple karyotypes on the same page.

            Chr1 would be 100% of the scale, and each other chromosome can get scaled 
            down relative to its size.

            Percent is a number between 0 and 1;
        */
        Karyotype.prototype.setScale = function(percent){

            if ( percent < 0) {
                console.error("scale has to be a value between 0 and 1");
                percent = 1;
            }

            if ( percent > 1) {
                console.error("scale has to be a value between 0 and 1");
                // prob a user input error
                if ( percent <=100) {
                    percent = percent / 100;
                } else {

                    percent = 1;
                }
            }

            this.scale = percent;

        };

        Karyotype.prototype.updateScale = function () {

            var availWidth = this.getPreferredWidth() - this.padding * 2;
            if ( availWidth < 2) {
                return;
            }

            this.width = availWidth * this.scale ;

            //$(this.parent).css('overflow', 'auto');
            //$(this.parent).css('width', $(this.realParent).width());

            $(this.realParent).empty();

            this.resetSVG();
            this.setParent(this.realParent);

            $(this.svg).attr("width",this.width+this.padding * 2);
            this.redraw();

        };

        Karyotype.prototype.getPreferredWidth = function () {

            var availWidth = $(this.realParent).width() ;

            if( availWidth < 1){
                console.error("something is wrong with this page");
                return 1;
            }
            return availWidth;

        };


        return {
            Karyotype : function(elem, options){
                return new Karyotype(elem, options);
            }

        };

    });
