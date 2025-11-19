Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="govuk-table ' +
((__t = (ctx.component.customClass)) == null ? '' : __t) +
'">\r\n    ';
 if (ctx.component.header && ctx.component.header.length > 0) { ;
__p += '\r\n    <thead class="govuk-table__head">\r\n    <tr class="govuk-table__row">\r\n        ';
 ctx.component.header.forEach(function(header) { ;
__p += '\r\n        <th scope="col" class="govuk-table__header">' +
((__t = (ctx.t(header))) == null ? '' : __t) +
'</th>\r\n        ';
 }) ;
__p += '\r\n    </tr>\r\n    </thead>\r\n    ';
 } ;
__p += '\r\n    <tbody class="govuk-table__body">\r\n    ';
 ctx.tableComponents.forEach(function(row, rowIndex) { ;
__p += '\r\n    <tr class="govuk-table__row" ref="row-' +
((__t = (ctx.id)) == null ? '' : __t) +
'">\r\n        ';
 row.forEach(function(column, colIndex) { ;
__p += '\r\n        <td class="govuk-table__cell" ref="' +
((__t = (ctx.tableKey)) == null ? '' : __t) +
'-' +
((__t = (rowIndex)) == null ? '' : __t) +
'"';
 if (ctx.cellClassName) { ;
__p += ' class="' +
((__t = (ctx.cellClassName)) == null ? '' : __t) +
' govuk-table__cell"';
 } ;
__p += '>' +
((__t = (column)) == null ? '' : __t) +
'</td>\r\n        ';
 }) ;
__p += '\r\n    </tr>\r\n    ';
 }) ;
__p += '\r\n    </tbody>\r\n</table>\r\n';
return __p
}