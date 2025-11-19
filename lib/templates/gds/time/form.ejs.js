Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div>\r\n    <input class="govuk-input govuk-input--width-2" value="' +
((__t = (ctx.hour)) == null ? '' : __t) +
'" type="number" step="1" ref="hour" placeholder="HH"/>\r\n    <input class="govuk-input govuk-input--width-2" value="' +
((__t = (ctx.minute)) == null ? '' : __t) +
'" type="number"  step="1" ref="minute" placeholder="MM"/>\r\n</div>\r\n';
return __p
}