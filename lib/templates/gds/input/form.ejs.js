Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.component.prefix || ctx.component.suffix) { ;
__p += '\r\n<div class="govuk-input__wrapper">\r\n  ';
 } ;
__p += '\r\n';
 if (ctx.component.prefix) { ;
__p += '\r\n<div ref="prefix" class="govuk-input__prefix" aria-hidden="true">\r\n  ' +
((__t = (ctx.component.prefix)) == null ? '' : __t) +
'\r\n</div>\r\n';
 } ;
__p += '\r\n<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\nref="' +
((__t = (ctx.input.ref ? ctx.input.ref : 'input')) == null ? '' : __t) +
'"\r\nstyle="margin-bottom: 10px"\r\n';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t);
 if (attr==='class') { if (ctx.input.type === 'textarea'){ ;
__p += ' govuk-textarea ';
 } else { ;
__p += ' govuk-input ';
} } ;
__p += '"\r\n';
 } ;
__p += '\r\n aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
' ';
 if (ctx.component.description) { ;
__p += 'd-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t);
 } ;
__p += '"\r\nid="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n>' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\r\n</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n';
 if (ctx.component.showCharCount) { ;
__p += '\r\n<span class="govuk-hint govuk-character-count__message" style="float:left; margin-right: 5px" ref="charcount"></span>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.showWordCount) { ;
__p += '\r\n<span class="govuk-hint govuk-character-count__message" style="float:left; margin-right: 5px" ref="wordcount"></span>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.suffix) { ;
__p += '\r\n<div class="govuk-input__suffix" aria-hidden="true">\r\n  ' +
((__t = (ctx.component.suffix)) == null ? '' : __t) +
'\r\n</div>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.prefix || ctx.component.suffix) { ;
__p += '\r\n</div>\r\n';
 } ;

return __p
}