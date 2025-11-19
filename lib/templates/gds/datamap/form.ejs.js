Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-grid-row">\r\n    ';
 ctx.columns.forEach(function(col) { ;
__p += '\r\n    <div class="govuk-grid-column-one-half">\r\n       <span class="govuk-body govuk-!-font-weight-bold"> ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title) )) == null ? '' : __t) +
'</span>\r\n    </div>\r\n    ';
 }) ;
__p += '\r\n</div>\r\n<hr class="dataGrid-hr"/>\r\n<div class="' +
((__t = (ctx.component.customClass)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-tbody">\r\n    ';
 if (ctx.hasAddButton && ctx.hasTopSubmit) { ;
__p += '\r\n    <button class="govuk-button govuk-button--secondary"\r\n            aria-label="' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'"\r\n            ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow">' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'\r\n    </button>\r\n    ';
 } ;
__p += '\r\n    ';
 ctx.rows.forEach(function(row, index) { ;
__p += '\r\n    <div class="govuk-grid-row" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-row">\r\n        ';
 ctx.columns.forEach(function(col) { ;
__p += '\r\n        <div class="govuk-grid-column-one-half" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'"\r\n             data-label="' +
((__t = ( ctx.t(col.label || col.title) )) == null ? '' : __t) +
'">\r\n            ' +
((__t = (row[col.key])) == null ? '' : __t) +
'\r\n        </div>\r\n        ';
 }) ;
__p += '\r\n    </div>\r\n    <div class="govuk-grid-row">\r\n        <div class="govuk-grid-column-full">\r\n            ';
 if (!ctx.builder && ctx.hasRemoveButtons) { ;
__p += '\r\n            <button aria-label="Remove item" title="Remove item" type="button"\r\n                    class="govuk-button govuk-button--warning" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-removeRow">\r\n                ' +
((__t = (ctx.t(ctx.component.properties['removeItemLabel'] || 'Remove'))) == null ? '' : __t) +
'\r\n            </button>\r\n            ';
 } ;
__p += '\r\n        </div>\r\n    </div>\r\n    <hr class="dataGrid-hr"/>\r\n    ';
 }) ;
__p += '\r\n    ';
 if (ctx.hasAddButton && ctx.hasBottomSubmit) { ;
__p += '\r\n    <button class="govuk-button govuk-button--secondary"\r\n            aria-label="' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'"\r\n            ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow">' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'\r\n    </button>\r\n    ';
 } ;
__p += '\r\n</div>\r\n\r\n';
return __p
}