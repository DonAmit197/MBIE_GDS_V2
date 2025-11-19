Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }


var buttonType = '';
switch (ctx.input.component.theme) {
case 'warning':
case 'danger':
buttonType = 'govuk-button--warning';
break;
case 'secondary':
case 'info':
buttonType = 'govuk-button--secondary';
break;
}

;
__p += '\r\n\r\n<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\nref="button"\r\nclass="govuk-button ' +
((__t = (buttonType)) == null ? '' : __t) +
'"\r\n';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n';
 } ;
__p += '\r\n>\r\n';
 if (ctx.component.leftIcon) { ;
__p += '<i class="' +
((__t = (ctx.component.leftIcon)) == null ? '' : __t) +
'"></i>&nbsp;';
 } ;
__p += '\r\n' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\r\n';
 if (ctx.component.rightIcon) { ;
__p += '&nbsp;<i class="' +
((__t = (ctx.component.rightIcon)) == null ? '' : __t) +
'"></i>';
 } ;
__p += '\r\n</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n<div ref="buttonMessageContainer">\r\n    <span class="govuk-hint" ref="buttonMessage"></span>\r\n</div>\r\n';
return __p
}