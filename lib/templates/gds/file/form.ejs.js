Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (!ctx.self.imageUpload) { ;
__p += '\r\n<table class="govuk-table custom-table">\r\n    <thead class="govuk-table__head">\r\n    <tr class="govuk-table__row">\r\n        ';
 if (!ctx.disabled) { ;
__p += '\r\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">' +
((__t = (ctx.t('Action'))) == null ? '' : __t) +
'</th>\r\n        ';
 } ;
__p += '\r\n        ';
 if (ctx.self.hasTypes) { ;
__p += '\r\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">' +
((__t = (ctx.t('File Name'))) == null ? '' : __t) +
'</th>\r\n        ';
 } else { ;
__p += '\r\n        <th scope="col" class="govuk-table__header govuk-!-width-one-half custom-th">' +
((__t = (ctx.t('File Name'))) == null ? '' : __t) +
'</th>\r\n        ';
 } ;
__p += '\r\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">' +
((__t = (ctx.t('Size'))) == null ? '' : __t) +
'</th>\r\n        ';
 if (ctx.self.hasTypes) { ;
__p += '\r\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">' +
((__t = (ctx.t('Type'))) == null ? '' : __t) +
'</th>\r\n        ';
 } ;
__p += '\r\n    </tr>\r\n    </thead>\r\n    <tbody class="govuk-table__body">\r\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\r\n        <tr class="govuk-table__row">\r\n            ';
 if (!ctx.disabled) { ;
__p += '\r\n            <td class="govuk-table__cell"><button class="govuk-button govuk-button--warning govuk-!-margin-bottom-0" ref="removeLink">Remove</button></td>\r\n            ';
 } ;
__p += '\r\n            <td class="govuk-table__cell">\r\n                ';
 if (ctx.component.uploadOnly) { ;
__p += '\r\n                ' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'\r\n                ';
 } else { ;
__p += '\r\n                <a href="' +
((__t = (file.url || '#')) == null ? '' : __t) +
'" target="_blank" ref="fileLink">' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'</a>\r\n                ';
 } ;
__p += '\r\n            </td>\r\n            <td class="govuk-table__cell">\r\n                ' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'\r\n            </td>\r\n            ';
 if (ctx.self.hasTypes && !ctx.disabled) { ;
__p += '\r\n            <td class="govuk-table__cell">\r\n                <select class="govuk-select" ref="fileType" >\r\n                    ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\r\n                    <option class="test" value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = ( type.label )) == null ? '' : __t) +
'</option>\r\n                    ';
 }); ;
__p += '\r\n                </select>\r\n            </td>\r\n            ';
 } ;
__p += '\r\n        </tr>\r\n    ';
 }) ;
__p += '\r\n    </tbody>\r\n</table>\r\n';
 } else { ;
__p += '\r\n<table class="govuk-table custom-table">\r\n    <thead class="govuk-table__head">\r\n        <tr class="govuk-table__row">\r\n            ';
 if (!ctx.disabled) { ;
__p += '\r\n            <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">' +
((__t = (ctx.t('Action'))) == null ? '' : __t) +
'</th>\r\n            ';
 } ;
__p += '\r\n            <th scope="col" class="govuk-table__header custom-th ' +
((__t = ( ctx.disabled ? 'govuk-!-width-full' : 'govuk-!-width-three-quarters')) == null ? '' : __t) +
'">' +
((__t = (ctx.t('Image name'))) == null ? '' : __t) +
'</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="govuk-table__body">\r\n        ';
 ctx.files.forEach(function(file) { ;
__p += '\r\n        <tr class="govuk-table__row">\r\n        ';
 if (!ctx.disabled) { ;
__p += '\r\n          <td class="govuk-table__cell"><button class="govuk-button govuk-button--warning govuk-!-margin-bottom-0" ref="removeLink">Remove</button></td>\r\n        ';
 } ;
__p += '\r\n         <td class="govuk-table__cell">\r\n          <img ref="fileImage" src="" alt="' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'" style="width:' +
((__t = (ctx.component.imageSize)) == null ? '' : __t) +
'px">\r\n         </td>\r\n        </tr>\r\n        ';
 }) ;
__p += '\r\n    </tbody>\r\n</table>\r\n';
 } ;
__p += '\r\n';
 if (!ctx.disabled && (ctx.component.multiple || !ctx.files.length)) { ;
__p += '\r\n';
 if (ctx.self.useWebViewCamera) { ;
__p += '\r\n<div class="fileSelector">\r\n    <button class="govuk-button" data-module="govuk-button" ref="galleryButton">' +
((__t = (ctx.t('Gallery'))) == null ? '' : __t) +
'</button>\r\n    <button class="govuk-button" data-module="govuk-button" ref="cameraButton">' +
((__t = (ctx.t('Camera'))) == null ? '' : __t) +
'</button>\r\n</div>\r\n';
 } else if (!ctx.self.cameraMode) { ;
__p += '\r\n<div class="fileSelector" ref="fileDrop">\r\n    ' +
((__t = (ctx.t('Drop files to attach,'))) == null ? '' : __t) +
'\r\n    ';
 if (ctx.self.imageUpload) { ;
__p += '\r\n    <a href="#" ref="toggleCameraMode">' +
((__t = (ctx.t('Use Camera,'))) == null ? '' : __t) +
'</a>\r\n    ';
 } ;
__p += '\r\n    ' +
((__t = (ctx.t('or'))) == null ? '' : __t) +
' <a href="#" ref="fileBrowse" class="browse">' +
((__t = (ctx.t('browse'))) == null ? '' : __t) +
'</a>\r\n</div>\r\n';
 } else { ;
__p += '\r\n<div>\r\n    <video class="video" autoplay="true" ref="videoPlayer"></video>\r\n</div>\r\n<button class="govuk-button" data-module="govuk-button" ref="takePictureButton">' +
((__t = (ctx.t('Take Picture'))) == null ? '' : __t) +
'</button>\r\n<button class="govuk-button govuk-button--secondary" data-module="govuk-button" ref="toggleCameraMode">' +
((__t = (ctx.t('Switch to file upload'))) == null ? '' : __t) +
'</button>\r\n';
 } ;
__p += '\r\n';
 } ;
__p += '\r\n<div class="govuk-!-margin-top-2">\r\n    ';
 ctx.statuses.forEach(function(status) { ;
__p += '\r\n    <div class="file ' +
((__t = (ctx.statuses.status === 'error' ? ' has-error' : '')) == null ? '' : __t) +
'">\r\n        <div class="govuk-grid-row">\r\n            <div class="govuk-grid-column-one-quarter"><button class="govuk-button govuk-button--warning govuk-!-margin-bottom-2" ref="fileStatusRemove">Remove</button></div>\r\n            <div class="fileName govuk-label govuk-grid-column-one-quarter">' +
((__t = (status.originalName)) == null ? '' : __t) +
'</div>\r\n            <div class="fileSize govuk-label govuk-grid-column-one-quarter">' +
((__t = (ctx.fileSize(status.size))) == null ? '' : __t) +
'</div>\r\n            <div class="govuk-grid-column-one-quarter">\r\n            ';
 if (status.status === 'progress') { ;
__p += '\r\n                <div class="govuk-label">' +
((__t = (status.progress)) == null ? '' : __t) +
'% ' +
((__t = (ctx.t('Complete'))) == null ? '' : __t) +
'</div>\r\n            ';
 } else if (status.status === 'error'){ ;
__p += '\r\n                <div class="govuk-error-message"> ' +
((__t = (ctx.t(status.message))) == null ? '' : __t) +
'</div>\r\n            ';
 } else { ;
__p += '\r\n                 <div class="bg-' +
((__t = (status.status)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(status.message))) == null ? '' : __t) +
'</div>\r\n            ';
 } ;
__p += '\r\n            </div>\r\n        </div>\r\n    </div>\r\n    ';
 }) ;
__p += '\r\n</div>\r\n';
 if (!ctx.component.storage || ctx.support.hasWarning) { ;
__p += '\r\n<div class="govuk-grid-row">\r\n    <div class="govuk-grid-column-full">\r\n        <div class="govuk-warning-text">\r\n            ';
 if (!ctx.component.storage) { ;
__p += '\r\n            <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px !important;">!</span>\r\n            <strong class="govuk-warning-text__text">\r\n                <span class="govuk-warning-text__assistive">Warning</span>\r\n                ' +
((__t = (ctx.t('No storage has been set for this field. File uploads are disabled until storage is set up.'))) == null ? '' : __t) +
'\r\n            </strong>\r\n            ';
 } ;
__p += '\r\n            ';
 if (!ctx.support.filereader) { ;
__p += '\r\n            <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px !important;">!</span>\r\n            <strong class="govuk-warning-text__text">\r\n                <span class="govuk-warning-text__assistive">Warning</span>\r\n                ' +
((__t = (ctx.t('File API & FileReader API not supported.'))) == null ? '' : __t) +
'\r\n            </strong>\r\n            ';
 } ;
__p += '\r\n            ';
 if (!ctx.support.formdata) { ;
__p += '\r\n            <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px !important;">!</span>\r\n            <strong class="govuk-warning-text__text">\r\n                <span class="govuk-warning-text__assistive">Warning</span>\r\n                ' +
((__t = (ctx.t("XHR2's FormData is not supported."))) == null ? '' : __t) +
'\r\n            </strong>\r\n            ';
 } ;
__p += '\r\n            ';
 if (!ctx.support.progress) { ;
__p += '\r\n            <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px !important;">!</span>\r\n            <strong class="govuk-warning-text__text">\r\n                <span class="govuk-warning-text__assistive">Warning</span>\r\n                ' +
((__t = (ctx.t("XHR2's upload progress isn't supported."))) == null ? '' : __t) +
'\r\n            </strong>\r\n            ';
 } ;
__p += '\r\n        </div>\r\n    </div>\r\n</div>\r\n';
 } ;
__p += '\r\n';
return __p
}