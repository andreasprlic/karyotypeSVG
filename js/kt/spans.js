/* -*- mode: javascript; c-basic-offset: 4; indent-tabs-mode: nil -*- */
/*jshint unused: false */

// 
// Derived from Dalliance Genome Explorer
// (c) Thomas Down 2006-2010
//
// spans.js: JavaScript Intset/Location port.
//


define(function() {

    "use strict";
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