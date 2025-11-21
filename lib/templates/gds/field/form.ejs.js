Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset\r\n  class="govuk-fieldset"\r\n  aria-describedby="';
 if
  (ctx.component.description) { ;
__p += 'd-' +
((__t = ( ctx.instance.id )) == null ? '' : __t) +
'-' +
((__t = (
    ctx.component.key
  )) == null ? '' : __t);
 } ;
__p += '"\r\n  aria-labelledby="l-' +
((__t = ( ctx.instance.id )) == null ? '' : __t) +
'-' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
' ';
 if
  (ctx.component.description) { ;
__p += 'd-' +
((__t = ( ctx.instance.id )) == null ? '' : __t) +
'-' +
((__t = (
    ctx.component.key
  )) == null ? '' : __t);
 } ;
__p += '"\r\n>\r\n  <legend\r\n    class="govuk-visually-hidden hide-in-pdf"\r\n    id="l-' +
((__t = ( ctx.instance.id )) == null ? '' : __t) +
'-' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
'-legend"\r\n  >\r\n    ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'\r\n  </legend>\r\n  <div class="govuk-checkboxes">\r\n    ';
 ctx.values.forEach(function(item) { ;
__p += '\r\n    <div class="govuk-checkboxes__item" ref="wrapper">\r\n      <' +
((__t = ( ctx.input.type )) == null ? '' : __t) +
'\r\n      ref="input" ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n      ' +
((__t = ( attr )) == null ? '' : __t) +
'="' +
((__t = ( ctx.input.attr[attr] )) == null ? '' : __t) +
' ';
 if (attr==='class') { ;
__p += '\r\n      govuk-checkboxes__input ';
 } ;
__p += '" ';
 } ;
__p += ' value="' +
((__t = ( item.value )) == null ? '' : __t) +
'" ';
 if
      (ctx.value === item.value || (typeof ctx.value === 'object' &&
      ctx.value.hasOwnProperty(item.value) && ctx.value[item.value])) { ;
__p += '\r\n      checked=true ';
 } ;
__p += ' id="' +
((__t = ( ctx.id )) == null ? '' : __t) +
'' +
((__t = ( ctx.row )) == null ? '' : __t) +
'-' +
((__t = ( item.value )) == null ? '' : __t) +
'" >\r\n      <label\r\n        class="govuk-label govuk-checkboxes__label"\r\n        for="' +
((__t = ( ctx.id )) == null ? '' : __t) +
'' +
((__t = ( ctx.row )) == null ? '' : __t) +
'-' +
((__t = ( item.value )) == null ? '' : __t) +
'"\r\n      >\r\n        <span>' +
((__t = ( ctx.t(item.label) )) == null ? '' : __t) +
'</span>\r\n      </label>\r\n    </div>\r\n    ';
 }) ;
__p += '\r\n  </div>\r\n</fieldset>\r\n';
return __p
}