Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<!-- @format -->\r\n\r\n';
 if (!['columns', 'container', 'datagrid'].includes(ctx.component.type)) { ;
__p += '\r\n<label\r\n  class="\r\n        ' +
((__t = ( ctx.label.className )) == null ? '' : __t) +
'\r\n        govuk-label\r\n        ';
 if (ctx.label.hidden) { ;
__p += ' govuk-!-display-none';
 } ;
__p += '\r\n    "\r\n  for="' +
((__t = ( ctx.instance.id )) == null ? '' : __t) +
'-' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
'"\r\n  id="l-' +
((__t = ( ctx.instance.id )) == null ? '' : __t) +
'-' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
'">\r\n  ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'\r\n</label>\r\n';
 } else if (!ctx.label.hidden) { ;
__p += '\r\n<span class="govuk-body">\r\n  ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'\r\n</span>\r\n';
 } ;
__p += '\r\n';
return __p
}