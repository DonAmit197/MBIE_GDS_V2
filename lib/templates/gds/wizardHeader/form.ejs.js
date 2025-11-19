Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-breadcrumbs">\r\n    <ol class="govuk-breadcrumbs__list">\r\n        ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\r\n        ';
 if (ctx.currentPage === index) { ;
__p += '\r\n        <li class="govuk-breadcrumbs__list-item" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (panel.title)) == null ? '' : __t) +
'</li>\r\n        ';
 } else { ;
__p += '\r\n        <li class="govuk-breadcrumbs__list-item">\r\n            ';
 if (ctx.isBreadcrumbClickable) { ;
__p += '\r\n                <a style="text-decoration:underline" class="govuk-breadcrumbs__link" href="#" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (panel.title)) == null ? '' : __t) +
'</a>\r\n            ';
 } else { ;
__p += '\r\n                <div style="text-decoration:underline" class="govuk-breadcrumbs__link" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (panel.title)) == null ? '' : __t) +
'</div>\r\n            ';
 } ;
__p += '\r\n        </li>\r\n        ';
 } ;
__p += '\r\n        ';
 }) ;
__p += '\r\n    </ol>\r\n</div>';
return __p
}