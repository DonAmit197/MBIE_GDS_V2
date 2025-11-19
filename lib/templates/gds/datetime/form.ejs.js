Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-grid-row">\r\n    <div class="govuk-grid-column-three-quarters">\r\n        <div class="govuk-grid-row">\r\n            <div class="govuk-grid-column-one-half">\r\n                <div class="govuk-date-input">\r\n                    <div class="govuk-date-input__item">\r\n                        <div class="govuk-form-group">\r\n                            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\r\n                            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\r\n                                   class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\r\n                            ';
 } ;
__p += '\r\n                            <div>' +
((__t = (ctx.day)) == null ? '' : __t) +
'</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="govuk-date-input__item">\r\n                        <div class="govuk-form-group">\r\n                            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\r\n                            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month"\r\n                                   class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Month'))) == null ? '' : __t) +
'</label>\r\n                            ';
 } ;
__p += '\r\n                            <div>' +
((__t = (ctx.month)) == null ? '' : __t) +
'</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="govuk-date-input__item">\r\n                        <div class="govuk-form-group">\r\n                            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\r\n                            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year"\r\n                                   class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Year'))) == null ? '' : __t) +
'</label>\r\n                            ';
 } ;
__p += '\r\n                            <div>' +
((__t = (ctx.year)) == null ? '' : __t) +
'</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="govuk-grid-column-one-half">\r\n                <div class="govuk-date-input">\r\n                    <div class="govuk-date-input__item">\r\n                        <div class="govuk-form-group">\r\n                            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\r\n                            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-hour"\r\n                                   class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Hour'))) == null ? '' : __t) +
'</label>\r\n                            ';
 } ;
__p += '\r\n                            <div>' +
((__t = (ctx.hour)) == null ? '' : __t) +
'</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="govuk-date-input__item">\r\n                        <div class="govuk-form-group">\r\n                            ';
 if (!ctx.component.hideInputLabels) { ;
__p += '\r\n                            <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-minute"\r\n                                   class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Minute'))) == null ? '' : __t) +
'</label>\r\n                            ';
 } ;
__p += '\r\n                            <div>' +
((__t = (ctx.minute)) == null ? '' : __t) +
'</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<input name="data[dateTime]" type="hidden" class="form-control" lang="en" value="' +
((__t = (ctx.dataValue)) == null ? '' : __t) +
'" ref="input">\r\n';
return __p
}