Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<!-- @format -->\r\n\r\n<div class="' +
((__t = ( ctx.component.customClass )) == null ? '' : __t) +
'" ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-tbody">\r\n  ';
 if (ctx.hasAddButton && ctx.hasTopSubmit) { ;
__p += '\r\n  <button\r\n    class="govuk-button govuk-button--secondary"\r\n    aria-label="' +
((__t = ( ctx.t(ctx.component.addAnother || 'Add Another') )) == null ? '' : __t) +
'"\r\n    ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-addRow">\r\n    ' +
((__t = ( ctx.t(ctx.component.addAnother || 'Add Another') )) == null ? '' : __t) +
'\r\n  </button>\r\n  ';
 } ;
__p += ' ';
 ctx.rows.forEach(function(row, index) { ;
__p += '\r\n  <div ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-row" class="govuk-grid-row">\r\n    <div class="govuk-grid-column-full">\r\n      <div class="govuk-grid-row">\r\n        ';
 ctx.columns.forEach(function(col) { ;
__p += '\r\n        <div\r\n          class="govuk-column"\r\n          ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'"\r\n          data-label="' +
((__t = ( ctx.t(col.label || col.title) )) == null ? '' : __t) +
'">\r\n          ';
 if (!ctx.component.hideLabel) { ;
__p += '\r\n          ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title) )) == null ? '' : __t) +
'\r\n          ';
 } ;
__p += '\r\n          ' +
((__t = ( row[col.key] )) == null ? '' : __t) +
'\r\n        </div>\r\n        ';
 }) ;
__p += '\r\n      </div>\r\n      <div class="govuk-grid-row govuk-!-margin-top-3">\r\n        <div class="govuk-grid-column-full">\r\n          ';
 if (ctx.component.reorder) { ;
__p += '\r\n          <button\r\n            aria-label="' +
((__t = (
              ctx.t(
                ctx.component.properties['reorderItemLabel'] || 'Reorder item'
              )
            )) == null ? '' : __t) +
'"\r\n            type="button"\r\n            title="' +
((__t = (
              ctx.t(
                ctx.component.properties['reorderItemLabel'] || 'Reorder item'
              )
            )) == null ? '' : __t) +
'"\r\n            class="formio-drag-button govuk-button govuk-button--secondary">\r\n            ' +
((__t = (
              ctx.t(ctx.component.properties['reorderItemLabel'] || 'Reorder')
            )) == null ? '' : __t) +
'\r\n          </button>\r\n          ';
 } ;
__p += ' ';
 if (!ctx.builder && ctx.hasRemoveButtons) { ;
__p += '\r\n          <button\r\n            aria-label="' +
((__t = (
              ctx.t(
                ctx.component.properties['removeItemLabel'] || 'Remove item'
              )
            )) == null ? '' : __t) +
'"\r\n            title="' +
((__t = (
              ctx.t(
                ctx.component.properties['removeItemLabel'] || 'Remove item'
              )
            )) == null ? '' : __t) +
'"\r\n            type="button"\r\n            class="govuk-button govuk-button--warning"\r\n            ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-removeRow">\r\n            ' +
((__t = ( ctx.t(ctx.component.properties['removeItemLabel'] || 'Remove') )) == null ? '' : __t) +
'\r\n          </button>\r\n          ';
 } ;
__p += '\r\n        </div>\r\n      </div>\r\n      <hr class="dataGrid-hr" />\r\n    </div>\r\n  </div>\r\n  ';
 }) ;
__p += ' ';
 if (ctx.hasAddButton && ctx.hasBottomSubmit) { ;
__p += '\r\n  <button\r\n    class="govuk-button govuk-button--secondary"\r\n    aria-label="' +
((__t = ( ctx.t(ctx.component.addAnother || 'Add Another') )) == null ? '' : __t) +
'"\r\n    ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-addRow">\r\n    ' +
((__t = ( ctx.t(ctx.component.addAnother || 'Add Another') )) == null ? '' : __t) +
'\r\n  </button>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}