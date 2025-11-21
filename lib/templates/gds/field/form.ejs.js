Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<!-- @format -->\r\n\r\n';
 if (ctx.label.labelPosition !== 'bottom') { ;
__p += '\r\n' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\r\n';
 } ;
__p += ' ';
 if (ctx.component.description) { ;
__p += '\r\n<div class="govuk-hint" id="d-' +
((__t = ( ctx.instance.id )) == null ? '' : __t) +
'-' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
'">\r\n  ' +
((__t = ( ctx.t(ctx.component.description) )) == null ? '' : __t) +
'\r\n</div>\r\n';
 } ;
__p += '\r\n<div ref="messageContainer" class="govuk-error-message"></div>\r\n' +
((__t = ( ctx.element )) == null ? '' : __t) +
'\r\n';
 if (ctx.component.tooltip) { ;
__p += '\r\n<details\r\n  class="govuk-details"\r\n  style="margin-top: 5px"\r\n  data-module="govuk-details"\r\n>\r\n  <summary class="govuk-details__summary">\r\n    <span class="govuk-details__summary-text">\r\n      ' +
((__t = ( ctx.component.tooltipTitle || "Help" )) == null ? '' : __t) +
'\r\n    </span>\r\n  </summary>\r\n  <div class="govuk-details__text">\r\n    ' +
((__t = ( ctx.component.tooltip )) == null ? '' : __t) +
'\r\n  </div>\r\n</details>\r\n';
 } ;
__p += ' ';
 if (ctx.label.labelPosition === 'bottom') { ;
__p += '\r\n' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\r\n';
 } ;
__p += '\r\n';
return __p
}