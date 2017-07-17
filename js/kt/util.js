/*jshint unused: false */


define(function (require) {

    var exports = {};

    var attr_name_cache = {};

    var pako = require('pako');

    var NS_SVG = 'http://www.w3.org/2000/svg';

    exports.indexOf = function (needle) {

        var indexOf;

        if (typeof Array.prototype.indexOf === 'function') {
            indexOf = Array.prototype.indexOf;
        } else {
            indexOf = function (needle) {
                var i = -1, index = -1;
                for (i = 0; i < this.length; i++) {
                    if (this[i] === needle) {
                        index = i;
                        break;
                    }
                }

                return index;
            };
        }

        return indexOf.call(this, needle);
    };


    exports.endsWith = function (str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };


    exports.isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    var reA = /[^a-zA-Z]/g;
    var reN = /[^0-9]/g;

    exports.sortAlphaNum = function (a, b) {
        var aA = a.replace(reA, "");
        var bA = b.replace(reA, "");
        if (aA === bA) {
            var aN = parseInt(a.replace(reN, ""), 10);
            var bN = parseInt(b.replace(reN, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
            return aA > bA ? 1 : -1;
        }
    };

    exports.setAttr = function (node, key, value) {
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


    exports.makeElementNS = function (namespace, tag, children, attribs) {
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


    exports.removeChildren = function (node) {
        if (!node || !node.childNodes) {
            return;
        }

        while (node.childNodes.length > 0) {
            node.removeChild(node.firstChild);
        }
    };

    var timer = null;
    exports.makeTooltip = function (ele, text, popupHolder) {
        var isin = false;
        var thisB = this;

        var outlistener;
        outlistener = function (ev) {
            isin = false;
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            ele.removeEventListener('mouseout', outlistener, false);
        };

        var setup;
        setup = function (ev) {

            var mx = ev.clientX + window.scrollX, my = ev.clientY + window.scrollY;

            if (!timer) {
                var that = this;
                timer = setTimeout(function () {
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
                    moveHandler = function (ev) {
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

        ele.addEventListener('mouseover', function (ev) {
            isin = true;
            ele.addEventListener('mouseout', outlistener, false);
            setup(ev);
        }, false);
        ele.addEventListener('DOMNodeRemovedFromDocument', function (ev) {
            isin = false;
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        }, false);
    };

    exports.createText = function(text,x,y){
            var newText = document.createElementNS(NS_SVG,"text");
            newText.setAttributeNS(null,"x",x);
            newText.setAttributeNS(null,"y",y);

            return newText;
        };

    exports.getTextNodeWidth = function (textNode) {
        var width = 0;
        var range, rect;

        if (document.createRange) {
            range = document.createRange();
            if (range.getBoundingClientRect) {
                range.selectNodeContents(textNode);
                rect = range.getBoundingClientRect();
                console.log(rect);
                if (rect) {
                    width = rect.right - rect.left;
                }
            }
        }

        return width;
    };

    exports.gzipSuccessFunction = function (result) {

        try {
            // we need to convert the response to binary
            var bytes = [];

            for (var i = 0; i < result.length; ++i) {
                bytes.push(result.charCodeAt(i));
            }

            var binData = new Uint8Array(bytes);

            // now we use the pako library to uncompress the binary response
            var pdata = pako.inflate(binData);

            // and convert the uncompressed data back to string
            var data = String.fromCharCode.apply(null,
                new Uint16Array(pdata));

            return data;
        } catch (err) {
            console.log(err);
            // probably conent is already uncompressed
            return result;
        }

    };

    return exports;
});