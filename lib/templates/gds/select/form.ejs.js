Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '\r\n\r\n';
 
  
  if (!ctx.component.customOptions || typeof ctx.component.customOptions !== 'object') {
    ctx.component.customOptions = {};
  }

  ctx.component.customOptions.labelId = 'l-' + ctx.instance.id + '-' + ctx.component.key;
;
__p += '\r\n\r\n\r\n<select ref="' +
((__t = (ctx.input.ref ? ctx.input.ref : 'selectContainer')) == null ? '' : __t) +
'"\r\n        ' +
((__t = ( ctx.input.multiple ? 'multiple' : '' )) == null ? '' : __t) +
'\r\n';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t);
 if (attr==='class') { ;
__p += ' govuk-select ';
 } ;
__p += '"\r\n';
 } ;
__p += '\r\n>' +
((__t = (ctx.selectOptions)) == null ? '' : __t) +
'</select>';
return __p
}