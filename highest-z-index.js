var $ = require('jquery');

var min = 1

module.exports = function(els) {
    els = $(els || 'body > *');

    var zIndex
    if (els.length === 0) {
        zIndex = 1
    } else {
        var zIndexes = $.map(els, function (el) {
            var $el = $(el);
            if ($el.css('position') !== 'static' && $el.is(':visible')) {
                return Number($el.css('z-index')) || 1;
            }
            return 1;
        });

        zIndex = Math.max.apply(null, zIndexes);
    }

    return Math.max(zIndex, min)
};

module.exports.setMin = function(v) {
    min = v
}
