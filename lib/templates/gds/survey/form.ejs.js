Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="govuk-table">\r\n    <thead class="govuk-table__head">\r\n    <tr class="govuk-table__row">\r\n        <th class="govuk-table__header"></th>\r\n        ';
 ctx.component.values.forEach(function(value) { ;
__p += '\r\n        <th class="govuk-table__header">' +
((__t = (ctx.t(value.label))) == null ? '' : __t) +
'</th>\r\n        ';
 }) ;
__p += '\r\n    </tr>\r\n    </thead>\r\n    <tbody class="govuk-table__body">\r\n    ';
 ctx.component.questions.forEach(function(question) { ;
__p += '\r\n    <tr class="govuk-table__row">\r\n        <td class="govuk-table__header">' +
((__t = (ctx.t(question.label))) == null ? '' : __t) +
'</td>\r\n        ';
 ctx.component.values.forEach(function(value) { ;
__p += '\r\n        <td class="govuk-table__cell">\r\n            <div class="govuk-radios__item">\r\n                <input class="govuk-radios__input" type="radio" name="' +
((__t = ( ctx.self.getInputName(question) )) == null ? '' : __t) +
'"\r\n                       value="' +
((__t = (value.value)) == null ? '' : __t) +
'" id="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'" ref="input">\r\n                <label class="govuk-label govuk-radios__label" for="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'">\r\n                </label>\r\n            </div>\r\n        </td>\r\n        ';
 }) ;
__p += '\r\n    </tr>\r\n    ';
 }) ;
__p += '\r\n    </tbody>\r\n</table>\r\n';
return __p
}