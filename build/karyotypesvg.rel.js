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


/* -*- mode: javascript; c-basic-offset: 4; indent-tabs-mode: nil -*- */
/*global $:false */
// 
// Derived and heavily extended from karyoscape.js at Dalliance Genome Explorer
//
//
// Karyotype.js
//

define(
    'karyotype',[
        './spans',
        './util',
        './colors',
    ],
    function(spans, util,colors) {

        
        var NS_SVG = 'http://www.w3.org/2000/svg';

        var dataLocation =
            "http://staticwest.rcsb.org/gene/hg38/chromosome.band.hg38.txt";

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

        var thumbColor = 'rgb(50, 88, 128)';

        function Karyotype()
        {


            this.width = 400;

            this.trackHeigth = 15;
            this.y = 0;

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

            util.setAttr(this.svg,'height',(this.trackHeigth + 5));


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
                this.trackHeigth = newHeight;
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


        Karyotype.prototype.loadData = function(){

            var that = this;
            $.get(dataLocation, function(data){
                that.setData(data);
            });
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

                    //
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
                //

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

            var trackHeight = this.trackHeigth;

            if (k.label === 'stalk' || k.label === 'acen'){

                trackHeight = 5;

                y = (this.trackHeigth - trackHeight) / 2;

            }

            var rect = util.makeElementNS(NS_SVG, 'rect', null, {
                x: bmin,
                y: y,
                width: (bmax - bmin),
                height: trackHeight,
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

            var path = this.leftBoundedRect(bmin,0, width,this.trackHeigth,radius);


            var rect = util.makeElementNS(NS_SVG, 'path', null, {
                d: path,
                x: bmin,
                y: (k.label === 'stalk' || k.label === 'acen' ? 5 : 0),
                width: (bmax - bmin),
                height: (k.label === 'stalk' ||
                k.label === 'acen' ? 5 : this.trackHeigth),
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

            var path = this.rightBoundedRect(bmin,0, width,this.trackHeigth,radius);

            var rect = util.makeElementNS(NS_SVG, 'path', null, {
                d: path,
                x: bmin,
                y: (k.label === 'stalk' || k.label === 'acen' ? 5 : 0),
                width: (bmax - bmin),
                height: (k.label === 'stalk' ||
                k.label === 'acen' ? 5 : this.trackHeigth),
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
                var bmin = ((1.0 * k.min) / this.chrLen) * this.width;
                var bmax = ((1.0 * k.max) / this.chrLen) * this.width;
                var col = karyo_palette[k.label];

                if (!col) {
                    col = karyo_palette[k.id];                    
                    k.label=k.id;
                } 
                
                if (!col) {
                    
                    
                    
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
                            'title':chrNr + k.id + ' ' + k.label + ' ' +
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
                        
                    }
                }
            }

           


            this.initThumb();            

        };

       
        Karyotype.prototype.createBandClickedEvent = function(k){
            var that = this;
            return function (event ) {

               

                var pos = $(that.realParent).position();

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
                y: -5,
                width: 5,
                height:
                this.trackHeigth + 10,
                fill: thumbColor,
                opacity:0.7
            });

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

                //
                
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
                
                percent = 1;
            }

            if ( percent > 1) {
                
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

            var availWidth = this.getPreferredWidth();
            if ( availWidth < 2) {
                return;
            }

            this.width = availWidth * this.scale;

            //$(this.parent).css('overflow', 'auto');
            //$(this.parent).css('width', $(this.realParent).width());

            $(this.realParent).empty();

            this.resetSVG();
            this.setParent(this.realParent);

            $(this.svg).attr("width",this.width);
            this.redraw();

        };

        Karyotype.prototype.getPreferredWidth = function () {

            var availWidth = $(this.realParent).width() ;

            if( availWidth < 1){
                
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
