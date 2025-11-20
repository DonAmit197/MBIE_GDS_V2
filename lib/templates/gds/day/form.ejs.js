Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset\r\n  class="govuk-fieldset"\r\n  role="group"\r\n  aria-describedby="l-' +
((__t = ( ctx.instance.id )) == null ? '' : __t) +
'-' +
((__t = (
    ctx.component.key
  )) == null ? '' : __t) +
' ';
 if (ctx.component.description) { ;
__p += 'd-' +
((__t = ( ctx.instance.id )) == null ? '' : __t) +
'-' +
((__t = (
    ctx.component.key
  )) == null ? '' : __t);
 } ;
__p += '"\r\n>\r\n  <legend class="govuk-fieldset__legend govuk-visually-hidden">\r\n    ' +
((__t = ( ctx.component.label )) == null ? '' : __t) +
'\r\n  </legend>\r\n  <div class="govuk-date-input">\r\n    ';
 if (ctx.dayFirst && ctx.showDay) { ;
__p += '\r\n    <div class="govuk-date-input__item">\r\n      <div class="govuk-form-group">\r\n        ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\r\n        <label\r\n          for="' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
'-day"\r\n          class="govuk-label govuk-date-input__label ';
 if(ctx.component.fields.day.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n          >' +
((__t = ( ctx.t("Day") )) == null ? '' : __t) +
'</label\r\n        >\r\n        ';
 } ;
__p += '\r\n        <div>' +
((__t = ( ctx.day )) == null ? '' : __t) +
'</div>\r\n      </div>\r\n    </div>\r\n    ';
 } ;
__p += ' ';
 if (ctx.showMonth) { ;
__p += '\r\n    <div class="govuk-date-input__item">\r\n      <div class="govuk-form-group">\r\n        ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\r\n        <label\r\n          for="' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
'-month"\r\n          class="govuk-label govuk-date-input__label ';
 if(ctx.component.fields.month.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n          >' +
((__t = ( ctx.t("Month") )) == null ? '' : __t) +
'</label\r\n        >\r\n        ';
 } ;
__p += '\r\n        <div>' +
((__t = ( ctx.month )) == null ? '' : __t) +
'</div>\r\n      </div>\r\n    </div>\r\n    ';
 } ;
__p += ' ';
 if (!ctx.dayFirst && ctx.showDay) { ;
__p += '\r\n    <div class="govuk-date-input__item">\r\n      <div class="govuk-form-group">\r\n        ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\r\n        <label\r\n          for="' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
'-day"\r\n          class="govuk-label govuk-date-input__label ';
 if(ctx.component.fields.day.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n          >' +
((__t = ( ctx.t("Day") )) == null ? '' : __t) +
'</label\r\n        >\r\n        ';
 } ;
__p += '\r\n        <div>' +
((__t = ( ctx.day )) == null ? '' : __t) +
'</div>\r\n      </div>\r\n    </div>\r\n    ';
 } ;
__p += ' ';
 if (ctx.showYear) { ;
__p += '\r\n    <div class="govuk-date-input__item">\r\n      <div class="govuk-form-group">\r\n        ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\r\n        <label\r\n          for="' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
'-year"\r\n          class="govuk-label govuk-date-input__label ';
 if(ctx.component.fields.year.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n          >' +
((__t = ( ctx.t("Year") )) == null ? '' : __t) +
'</label\r\n        >\r\n        ';
 } ;
__p += '\r\n        <div>' +
((__t = ( ctx.year )) == null ? '' : __t) +
'</div>\r\n      </div>\r\n    </div>\r\n    ';
 } ;
__p += '\r\n  </div>\r\n  <input\r\n    name="data[day]"\r\n    type="hidden"\r\n    class="form-control"\r\n    lang="en"\r\n    value=""\r\n    ref="input"\r\n  />\r\n</fieldset>\r\n';
return __p
}