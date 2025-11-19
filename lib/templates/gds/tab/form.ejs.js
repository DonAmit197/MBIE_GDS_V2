Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-tabs" data-module="govuk-tabs">\r\n    <ul class="govuk-tabs__list" role="tablist">\r\n        ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\r\n            <li class="govuk-tabs__list-item' +
((__t = ( ctx.currentTab === index ? ' govuk-tabs__list-item--selected' : '')) == null ? '' : __t) +
'"\r\n                role="presentation" ref="' +
((__t = (ctx.tabLikey)) == null ? '' : __t) +
'">\r\n                <a class="govuk-tabs__tab" href="#' +
((__t = (tab.key)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.tabLinkKey)) == null ? '' : __t) +
'">\r\n                    ' +
((__t = (ctx.t(tab.label))) == null ? '' : __t) +
'\r\n                </a>\r\n            </li>\r\n        ';
 }) ;
__p += '\r\n    </ul>\r\n    ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\r\n    <section class="govuk-tabs__panel ' +
((__t = (ctx.currentTab === index ? '' : 'govuk-tabs__panel--hidden')) == null ? '' : __t) +
'"\r\n             ref="' +
((__t = (ctx.tabKey)) == null ? '' : __t) +
'" id="' +
((__t = (tab.key)) == null ? '' : __t) +
'">\r\n        ' +
((__t = (ctx.tabComponents[index])) == null ? '' : __t) +
'\r\n    </section>\r\n    ';
 }) ;
__p += '\r\n</div>\r\n';
return __p
}