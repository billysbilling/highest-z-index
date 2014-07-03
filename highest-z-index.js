var $ = require('jquery');

module.exports = function(els) {
    els = $(els || 'body > *');

    if (els.length === 0) {
        return 1;
    }

    var zIndexes = $.map(els, function (el) {
        var $el = $(el);
        if ($el.css('position') !== 'static' && $el.is(':visible')) {
            return Number($el.css('z-index')) || 1;
        }
        return 1;
    });

    return Math.max.apply(null, zIndexes);
};