Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset class="govuk-fieldset">\r\n    <legend ref="header" class="govuk-fieldset__legend govuk-fieldset__legend--m">\r\n        ' +
((__t = (ctx.t(ctx.component.legend))) == null ? '' : __t) +
'\r\n        ';
 if (ctx.component.tooltip) { ;
__p += '\r\n        <details class="govuk-details" style="margin-top: 5px" data-module="govuk-details">\r\n            <summary class="govuk-details__summary">\r\n                        <span class="govuk-details__summary-text">\r\n                          ' +
((__t = (ctx.component.tooltipTitle || 'Help')) == null ? '' : __t) +
'\r\n                        </span>\r\n            </summary>\r\n            <div class="govuk-details__text">\r\n                ' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'\r\n            </div>\r\n        </details>\r\n        ';
 } ;
__p += '\r\n    </legend>\r\n    ';
 if (!ctx.collapsed) { ;
__p += '\r\n    <div ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\r\n        ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\r\n    </div>\r\n    ';
 } ;
__p += '\r\n</fieldset>';
return __p
}