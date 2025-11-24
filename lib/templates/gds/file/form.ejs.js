Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 var labelId = 'f-' + ctx.instance.id + '-' + ctx.component.key; ;
__p += '\r\n';
 var dVal = (ctx && ctx.instance && ctx.instance.dataValue) ? ctx.instance.dataValue : []; ;
__p += '\r\n';
 var hasDVal = false; ;
__p += '\r\n\r\n';
 if (dVal) { ;
__p += '\r\n  ';
 if (Array.isArray(dVal)) { ;
__p += '\r\n    ';
 hasDVal = dVal.length > 0; ;
__p += '\r\n  ';
 } else if (typeof dVal === 'object') { ;
__p += '\r\n    ';
 hasDVal = Object.keys(dVal).length > 0; ;
__p += '\r\n  ';
 } else if (typeof dVal === 'string') { ;
__p += '\r\n    ';
 hasDVal = dVal.replace(/\s+/g, '').length > 0; ;
__p += '\r\n  ';
 } else { ;
__p += '\r\n    ';
 hasDVal = true; ;
__p += '\r\n  ';
 } ;
__p += '\r\n';
 } ;
__p += '\r\n\r\n';
 if (!ctx.self.imageUpload) { ;
__p += '\r\n<table class="govuk-table custom-table"\r\n  ';
 if (!hasDVal) { ;
__p += ' tabindex="0" ';
 } ;
__p += '\r\n>\r\n  <caption class="govuk-visually-hidden" id="' +
((__t = (labelId)) == null ? '' : __t) +
'">\r\n    ' +
((__t = (ctx.t('Upload files for'))) == null ? '' : __t) +
'\r\n    ' +
((__t = (ctx.component.label ? ctx.t(ctx.component.label) : ctx.t('Upload files'))) == null ? '' : __t) +
'\r\n    ';
 if (ctx.component.description) { ;
__p += '\r\n      <br />\r\n      <span>' +
((__t = (ctx.t(ctx.component.description))) == null ? '' : __t) +
'</span>\r\n    ';
 } ;
__p += '\r\n  </caption>\r\n\r\n  <thead class="govuk-table__head">\r\n    <tr class="govuk-table__row">\r\n      ';
 if (!ctx.disabled) { ;
__p += '\r\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">\r\n          ' +
((__t = (ctx.t('Action'))) == null ? '' : __t) +
'\r\n        </th>\r\n      ';
 } ;
__p += '\r\n      ';
 if (ctx.self.hasTypes) { ;
__p += '\r\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">\r\n          ' +
((__t = (ctx.t('File Name'))) == null ? '' : __t) +
'\r\n        </th>\r\n      ';
 } else { ;
__p += '\r\n        <th scope="col" class="govuk-table__header govuk-!-width-one-half custom-th">\r\n          ' +
((__t = (ctx.t('File Name'))) == null ? '' : __t) +
'\r\n        </th>\r\n      ';
 } ;
__p += '\r\n      <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">\r\n        ' +
((__t = (ctx.t('Size'))) == null ? '' : __t) +
'\r\n      </th>\r\n      ';
 if (ctx.self.hasTypes) { ;
__p += '\r\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">\r\n          ' +
((__t = (ctx.t('Type'))) == null ? '' : __t) +
'\r\n        </th>\r\n      ';
 } ;
__p += '\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody class="govuk-table__body">\r\n    ';
 ctx.files.forEach(function(file, index) { ;
__p += '\r\n      ';
 var fname = file.originalName || file.name; ;
__p += '\r\n      <tr class="govuk-table__row">\r\n        ';
 if (!ctx.disabled) { ;
__p += '\r\n          <td class="govuk-table__cell">\r\n            <button\r\n              class="govuk-button govuk-button--warning govuk-!-margin-bottom-0"\r\n              type="button"\r\n              ref="removeLink"\r\n              aria-label="' +
((__t = (ctx.t('Remove file'))) == null ? '' : __t) +
': ' +
((__t = (fname)) == null ? '' : __t) +
'"\r\n            >\r\n              ' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'\r\n            </button>\r\n          </td>\r\n        ';
 } ;
__p += '\r\n\r\n        <td class="govuk-table__cell">\r\n          ';
 if (ctx.component.uploadOnly) { ;
__p += '\r\n            <span>' +
((__t = (fname)) == null ? '' : __t) +
'</span>\r\n          ';
 } else { ;
__p += '\r\n            <a\r\n              href="' +
((__t = (file.url || '#')) == null ? '' : __t) +
'"\r\n              target="_blank"\r\n              rel="noopener noreferrer"\r\n              ref="fileLink"\r\n              aria-label="' +
((__t = (ctx.t('Open file in a new tab'))) == null ? '' : __t) +
': ' +
((__t = (fname)) == null ? '' : __t) +
'"\r\n            >\r\n              ' +
((__t = (fname)) == null ? '' : __t) +
'\r\n            </a>\r\n          ';
 } ;
__p += '\r\n        </td>\r\n\r\n        <td class="govuk-table__cell">\r\n          ' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'\r\n        </td>\r\n\r\n        ';
 if (ctx.self.hasTypes && !ctx.disabled) { ;
__p += '\r\n          <td class="govuk-table__cell">\r\n            <label\r\n              class="govuk-visually-hidden"\r\n              for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-type-' +
((__t = (index)) == null ? '' : __t) +
'"\r\n            >\r\n              ' +
((__t = (ctx.t('File type for'))) == null ? '' : __t) +
' ' +
((__t = (fname)) == null ? '' : __t) +
'\r\n            </label>\r\n            <select\r\n              class="govuk-select"\r\n              id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-type-' +
((__t = (index)) == null ? '' : __t) +
'"\r\n              ref="fileType"\r\n              aria-label="' +
((__t = (ctx.t('File type for'))) == null ? '' : __t) +
' ' +
((__t = (fname)) == null ? '' : __t) +
'"\r\n            >\r\n              ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\r\n                <option\r\n                  value="' +
((__t = ( type.value )) == null ? '' : __t) +
'"\r\n                  ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '\r\n                >\r\n                  ' +
((__t = ( type.label )) == null ? '' : __t) +
'\r\n                </option>\r\n              ';
 }); ;
__p += '\r\n            </select>\r\n          </td>\r\n        ';
 } ;
__p += '\r\n      </tr>\r\n    ';
 }); ;
__p += '\r\n  </tbody>\r\n</table>\r\n\r\n';
 } else { ;
__p += '\r\n\r\n<table class="govuk-table custom-table" aria-labelledby="' +
((__t = (labelId)) == null ? '' : __t) +
'">\r\n  <caption class="govuk-visually-hidden" id="' +
((__t = (labelId)) == null ? '' : __t) +
'">\r\n    ' +
((__t = (ctx.t('Uploaded images'))) == null ? '' : __t) +
'\r\n  </caption>\r\n\r\n  <thead class="govuk-table__head">\r\n    <tr class="govuk-table__row">\r\n      ';
 if (!ctx.disabled) { ;
__p += '\r\n        <th scope="col" class="govuk-table__header govuk-!-width-one-quarter custom-th">\r\n          ' +
((__t = (ctx.t('Action'))) == null ? '' : __t) +
'\r\n        </th>\r\n      ';
 } ;
__p += '\r\n      <th\r\n        scope="col"\r\n        class="govuk-table__header custom-th ' +
((__t = ( ctx.disabled ? 'govuk-!-width-full' : 'govuk-!-width-three-quarters')) == null ? '' : __t) +
'"\r\n      >\r\n        ' +
((__t = (ctx.t('Image name'))) == null ? '' : __t) +
'\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody class="govuk-table__body">\r\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\r\n      ';
 var fname = file.originalName || file.name; ;
__p += '\r\n      <tr class="govuk-table__row">\r\n        ';
 if (!ctx.disabled) { ;
__p += '\r\n          <td class="govuk-table__cell">\r\n            <button\r\n              class="govuk-button govuk-button--warning govuk-!-margin-bottom-0"\r\n              type="button"\r\n              ref="removeLink"\r\n              aria-label="' +
((__t = (ctx.t('Remove image'))) == null ? '' : __t) +
': ' +
((__t = (fname)) == null ? '' : __t) +
'"\r\n            >\r\n              ' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'\r\n            </button>\r\n          </td>\r\n        ';
 } ;
__p += '\r\n        <td class="govuk-table__cell">\r\n          <img\r\n            ref="fileImage"\r\n            src=""\r\n            alt="' +
((__t = (fname)) == null ? '' : __t) +
'"\r\n            width="' +
((__t = (ctx.component.imageSize)) == null ? '' : __t) +
'"\r\n            style="max-width: 100%; height: auto;"\r\n          >\r\n        </td>\r\n      </tr>\r\n    ';
 }); ;
__p += '\r\n  </tbody>\r\n</table>\r\n\r\n';
 } ;
__p += '\r\n\r\n';
 if (!ctx.disabled && (ctx.component.multiple || !ctx.files.length)) { ;
__p += '\r\n  ';
 if (ctx.self.useWebViewCamera) { ;
__p += '\r\n    <div\r\n      class="fileSelector"\r\n      role="group"\r\n      aria-label="' +
((__t = (ctx.t('Choose image source'))) == null ? '' : __t) +
'"\r\n    >\r\n      <button\r\n        class="govuk-button"\r\n        data-module="govuk-button"\r\n        type="button"\r\n        ref="galleryButton"\r\n      >\r\n        ' +
((__t = (ctx.t('Gallery'))) == null ? '' : __t) +
'\r\n      </button>\r\n      <button\r\n        class="govuk-button"\r\n        data-module="govuk-button"\r\n        type="button"\r\n        ref="cameraButton"\r\n      >\r\n        ' +
((__t = (ctx.t('Camera'))) == null ? '' : __t) +
'\r\n      </button>\r\n    </div>\r\n  ';
 } else if (!ctx.self.cameraMode) { ;
__p += '\r\n    <div\r\n      class="fileSelector"\r\n      ref="fileDrop"\r\n      aria-label="' +
((__t = (ctx.t('Drop files to attach or browse'))) == null ? '' : __t) +
'"\r\n    >\r\n      <span aria-hidden="true">' +
((__t = (ctx.t('Drop files to attach,'))) == null ? '' : __t) +
'</span>\r\n      ';
 if (ctx.self.imageUpload) { ;
__p += '\r\n        <a href="#" ref="toggleCameraMode">' +
((__t = (ctx.t('Use Camera,'))) == null ? '' : __t) +
'</a>\r\n      ';
 } ;
__p += '\r\n      <span>' +
((__t = (ctx.t('or'))) == null ? '' : __t) +
'</span>\r\n      <a href="#" ref="fileBrowse" class="browse">' +
((__t = (ctx.t('browse'))) == null ? '' : __t) +
'</a>\r\n    </div>\r\n  ';
 } else { ;
__p += '\r\n    <div>\r\n      <video\r\n        class="video"\r\n        autoplay="true"\r\n        ref="videoPlayer"\r\n        aria-label="' +
((__t = (ctx.t('Camera preview'))) == null ? '' : __t) +
'"\r\n      ></video>\r\n    </div>\r\n    <button\r\n      class="govuk-button"\r\n      data-module="govuk-button"\r\n      type="button"\r\n      ref="takePictureButton"\r\n    >\r\n      ' +
((__t = (ctx.t('Take Picture'))) == null ? '' : __t) +
'\r\n    </button>\r\n    <button\r\n      class="govuk-button govuk-button--secondary"\r\n      data-module="govuk-button"\r\n      type="button"\r\n      ref="toggleCameraMode"\r\n    >\r\n      ' +
((__t = (ctx.t('Switch to file upload'))) == null ? '' : __t) +
'\r\n    </button>\r\n  ';
 } ;
__p += '\r\n';
 } ;
__p += '\r\n\r\n<div class="govuk-!-margin-top-2" aria-live="polite" role="status">\r\n  ';
 ctx.statuses.forEach(function(status) { ;
__p += '\r\n    ';
 var isError = status.status === 'error'; ;
__p += '\r\n    ';
 var fname = status.originalName || status.name; ;
__p += '\r\n    <div class="file ' +
((__t = ( isError ? 'has-error' : '' )) == null ? '' : __t) +
'">\r\n      <div class="govuk-grid-row">\r\n        <div class="govuk-grid-column-one-quarter">\r\n          <button\r\n            class="govuk-button govuk-button--warning govuk-!-margin-bottom-2"\r\n            type="button"\r\n            ref="fileStatusRemove"\r\n            aria-label="' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
': ' +
((__t = (fname)) == null ? '' : __t) +
'"\r\n          >\r\n            ' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'\r\n          </button>\r\n        </div>\r\n        <div class="fileName govuk-label govuk-grid-column-one-quarter">\r\n          ' +
((__t = (fname)) == null ? '' : __t) +
'\r\n        </div>\r\n        <div class="fileSize govuk-label govuk-grid-column-one-quarter">\r\n          ' +
((__t = (ctx.fileSize(status.size))) == null ? '' : __t) +
'\r\n        </div>\r\n\r\n        <div class="govuk-grid-column-one-quarter">\r\n          ';
 if (status.status === 'progress') { ;
__p += '\r\n            <div class="govuk-label">\r\n              ' +
((__t = (status.progress)) == null ? '' : __t) +
'% ' +
((__t = (ctx.t('Complete'))) == null ? '' : __t) +
'\r\n            </div>\r\n          ';
 } else if (isError) { ;
__p += '\r\n            <div class="govuk-error-message" role="alert">\r\n              <span class="govuk-visually-hidden">' +
((__t = (ctx.t('Error'))) == null ? '' : __t) +
':</span>\r\n              ' +
((__t = (ctx.t(status.message))) == null ? '' : __t) +
'\r\n            </div>\r\n          ';
 } else { ;
__p += '\r\n            <div class="bg-' +
((__t = (status.status)) == null ? '' : __t) +
'">\r\n              ' +
((__t = (ctx.t(status.message))) == null ? '' : __t) +
'\r\n            </div>\r\n          ';
 } ;
__p += '\r\n        </div>\r\n      </div>\r\n    </div>\r\n  ';
 }); ;
__p += '\r\n</div>\r\n\r\n';
 if (!ctx.component.storage || ctx.support.hasWarning) { ;
__p += '\r\n  <div class="govuk-grid-row">\r\n    <div class="govuk-grid-column-full">\r\n      <div class="govuk-warning-text">\r\n        ';
 if (!ctx.component.storage) { ;
__p += '\r\n          <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px;">!</span>\r\n          <strong class="govuk-warning-text__text">\r\n            <span class="govuk-warning-text__assistive">' +
((__t = (ctx.t('Warning'))) == null ? '' : __t) +
'</span>\r\n            ' +
((__t = (ctx.t('No storage has been set for this field. File uploads are disabled until storage is set up.'))) == null ? '' : __t) +
'\r\n          </strong>\r\n        ';
 } ;
__p += '\r\n        ';
 if (!ctx.support.filereader) { ;
__p += '\r\n          <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px;">!</span>\r\n          <strong class="govuk-warning-text__text">\r\n            <span class="govuk-warning-text__assistive">' +
((__t = (ctx.t('Warning'))) == null ? '' : __t) +
'</span>\r\n            ' +
((__t = (ctx.t('File API & FileReader API not supported.'))) == null ? '' : __t) +
'\r\n          </strong>\r\n        ';
 } ;
__p += '\r\n        ';
 if (!ctx.support.formdata) { ;
__p += '\r\n          <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px;">!</span>\r\n          <strong class="govuk-warning-text__text">\r\n            <span class="govuk-warning-text__assistive">' +
((__t = (ctx.t('Warning'))) == null ? '' : __t) +
'</span>\r\n            ' +
((__t = (ctx.t("XHR2's FormData is not supported."))) == null ? '' : __t) +
'\r\n          </strong>\r\n        ';
 } ;
__p += '\r\n        ';
 if (!ctx.support.progress) { ;
__p += '\r\n          <span class="govuk-warning-text__icon" aria-hidden="true" style="min-width: 35px;">!</span>\r\n          <strong class="govuk-warning-text__text">\r\n            <span class="govuk-warning-text__assistive">' +
((__t = (ctx.t('Warning'))) == null ? '' : __t) +
'</span>\r\n            ' +
((__t = (ctx.t("XHR2's upload progress isn't supported."))) == null ? '' : __t) +
'\r\n          </strong>\r\n        ';
 } ;
__p += '\r\n      </div>\r\n    </div>\r\n  </div>\r\n';
 } ;
__p += '\r\n';
return __p
}