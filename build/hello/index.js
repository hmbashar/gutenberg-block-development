/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hello/edit.js":
/*!***************************!*\
  !*** ./src/hello/edit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/hello/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */




const ALLOWED_MEDIA_TYPES = ["image"];
function Edit({
  className,
  attributes,
  setAttributes,
  isSelected
}) {
  const {
    plainTextContent,
    richTextContent,
    type,
    id,
    src,
    alt,
    textAlign
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Font Settings", "cb-my-block"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select", "cb-my-block"),
    value: type,
    options: [{
      label: "Small",
      value: "25%"
    }, {
      label: "Medium",
      value: "50%"
    }, {
      label: "Large",
      value: "100%"
    }],
    onChange: type => {
      setAttributes({
        type
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentControl, {
    value: textAlign,
    onChange: nextAlign => {
      setAttributes({
        textAlign: nextAlign
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: "edit",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit", "cb-my-block"),
    onClick: () => console.log("edit")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: "trash",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete", "cb-my-block"),
    onClick: () => console.log("Delete")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: "edit",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit", "cb-my-block"),
    onClick: () => console.log("edit")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: "trash",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete", "cb-my-block"),
    onClick: () => console.log("Delete")
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cb Hello Block – hello from the editor!", "cb-my-block"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(),
    value: plainTextContent,
    onChange: newPlainTextContent => setAttributes({
      plainTextContent: newPlainTextContent
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Type plain text here...", "cb-my-block")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps,
    style: {
      fontSize: type
    },
    tagName: "h2",
    value: richTextContent,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: newRichTextContent => setAttributes({
      richTextContent: newRichTextContent
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading...")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: `default ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: src,
    alt: alt
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      console.log(media);
      setAttributes({
        id: media.id,
        src: media.sizes.thumbnail ? media.sizes.thumbnail.url : media.url,
        alt: media.alt
      });
    },
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
      icon: "format-image",
      label: id || src ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace Image", "cb-my-block") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "cb-my-block"),
      onClick: open
    })
  })))));
}

/***/ }),

/***/ "./src/hello/index.js":
/*!****************************!*\
  !*** ./src/hello/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _asset_css_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/css/style.scss */ "./src/hello/asset/css/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/hello/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/hello/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/hello/block.json");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "512",
      viewBox: "0 0 512 512"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M122.051 108.639c4.87-2.603 6.708-8.66 4.106-13.53-2.603-4.87-8.66-6.708-13.53-4.106s-6.708 8.66-4.106 13.53c2.603 4.87 8.66 6.708 13.53 4.106z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M430.487 112.908c-46.853-37.095-109.013-57.524-175.028-57.524-34.925 0-68.702 5.667-100.392 16.845-5.219 1.84-7.957 7.564-6.116 12.782s7.565 7.956 12.782 6.116c29.543-10.421 61.078-15.704 93.727-15.704 126.112 0 228.711 80.296 228.711 178.992 0 27.752-7.935 54.375-23.584 79.128a10.017 10.017 0 00-1.551 5.356l.017 71.26-40.063-23.113a10.02 10.02 0 00-10.773.485c-42.038 29.583-96.289 45.875-152.757 45.875-126.112 0-228.711-80.296-228.711-178.992 0-44.769 21.297-87.644 59.967-120.729 4.205-3.598 4.697-9.923 1.1-14.127s-9.922-4.698-14.127-1.1C30.495 155.413 6.708 203.696 6.708 254.415c0 53.612 26.182 103.867 73.723 141.507 46.853 37.095 109.012 57.524 175.028 57.524 58.22 0 114.398-16.258 158.976-45.892l49.635 28.636a10.027 10.027 0 0010.019-.003 10.023 10.023 0 005.007-8.679l-.021-85.752c16.681-27.306 25.134-56.674 25.134-87.342 0-53.61-26.182-103.865-73.722-141.506z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
      cx: "430.917",
      cy: "301.256",
      r: "10.267"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M111.013 218.526v25.775h-31.26v-25.775c0-5.533-4.486-10.019-10.019-10.019s-10.019 4.486-10.019 10.019v74.13c0 5.533 4.486 10.019 10.019 10.019s10.019-4.486 10.019-10.019V264.34h31.26v28.317c0 5.533 4.486 10.019 10.019 10.019s10.019-4.486 10.019-10.019v-74.13c0-5.533-4.486-10.019-10.019-10.019s-10.019 4.485-10.019 10.018zM156.605 302.676h31.235c5.534 0 10.019-4.486 10.019-10.019s-4.486-10.019-10.019-10.019h-21.216v-17.026h18.913c5.534 0 10.019-4.486 10.019-10.019s-4.486-10.019-10.019-10.019h-18.913v-17.026h21.216c5.534 0 10.019-4.486 10.019-10.019s-4.486-10.019-10.019-10.019h-31.235c-5.534 0-10.019 4.486-10.019 10.019v74.13c0 5.531 4.486 10.017 10.019 10.017zM221.284 206.156c-5.534 0-10.019 4.486-10.019 10.019v74.068c0 4.883 3.52 9.054 8.332 9.877.71.121 19.28.047 27.701 0 5.534-.031 9.995-4.399 9.963-9.932-.03-5.515-4.51-9.964-10.018-9.964h-.057c-4.843.027-10.897.052-15.882.06v-64.108c-.001-5.534-4.487-10.02-10.02-10.02zM277.408 206.156c-5.533 0-10.019 4.486-10.019 10.019v74.068a10.02 10.02 0 008.333 9.877c.71.121 19.28.047 27.7 0 5.533-.031 9.994-4.399 9.964-9.932-.031-5.515-4.511-9.964-10.018-9.964h-.057c-4.843.027-10.897.052-15.882.06v-64.108c-.002-5.534-4.488-10.02-10.021-10.02zM359.594 302.676c25.963 0 47.085-21.122 47.085-47.085s-21.122-47.085-47.085-47.085-47.085 21.122-47.085 47.085 21.122 47.085 47.085 47.085zm0-74.13c14.913 0 27.046 12.133 27.046 27.046s-12.133 27.046-27.046 27.046-27.046-12.133-27.046-27.046 12.133-27.046 27.046-27.046zM430.917 278.466c5.533 0 10.019-4.486 10.019-10.019v-55.825c0-5.533-4.486-10.019-10.019-10.019s-10.019 4.486-10.019 10.019v55.825c0 5.533 4.486 10.019 10.019 10.019zM439.489 64.015a9.977 9.977 0 006.177 2.136 10 10 0 007.89-3.836l9.96-12.698c3.415-4.354 2.655-10.653-1.7-14.067-4.355-3.417-10.653-2.655-14.067 1.7l-9.96 12.698c-3.414 4.354-2.654 10.652 1.7 14.067zM379.804 38.139c.479.068.955.101 1.426.101 4.907 0 9.195-3.609 9.907-8.608l2.276-15.976c.78-5.478-3.028-10.552-8.507-11.333-5.475-.774-10.552 3.028-11.333 8.507l-2.276 15.976c-.78 5.479 3.029 10.552 8.507 11.333zM511.348 103.554c-1.96-5.175-7.742-7.781-12.919-5.821l-15.091 5.716c-5.175 1.96-7.781 7.745-5.821 12.919a10.024 10.024 0 009.372 6.474c1.179 0 2.379-.21 3.547-.653l15.091-5.716c5.175-1.96 7.781-7.745 5.821-12.919zM72.51 447.984c-4.354-3.417-10.652-2.654-14.067 1.7l-9.959 12.698c-3.415 4.354-2.654 10.653 1.7 14.067a9.973 9.973 0 006.177 2.136c2.972 0 5.914-1.316 7.891-3.836l9.959-12.698c3.414-4.354 2.653-10.652-1.701-14.067zM132.197 473.86c-5.477-.767-10.552 3.027-11.333 8.507l-2.276 15.976c-.781 5.477 3.027 10.552 8.506 11.333.479.068.955.101 1.426.101 4.907 0 9.194-3.609 9.906-8.608l2.276-15.976c.782-5.478-3.027-10.552-8.505-11.333zM21.565 389.81l-15.091 5.716c-5.175 1.96-7.781 7.744-5.821 12.919a10.024 10.024 0 009.372 6.474c1.179 0 2.379-.21 3.547-.653l15.091-5.716c5.175-1.96 7.781-7.744 5.821-12.919-1.961-5.175-7.744-7.779-12.919-5.821z"
    }))
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/hello/save.js":
/*!***************************!*\
  !*** ./src/hello/save.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const {
    plainTextContent,
    richTextContent,
    type,
    id,
    src,
    alt,
    textAlign
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    style: {
      textAlign: textAlign
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, plainTextContent), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    style: {
      fontSize: type
    },
    value: richTextContent
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: src,
    alt: alt ? alt : ''
  })));
}

/***/ }),

/***/ "./src/hello/asset/css/style.scss":
/*!****************************************!*\
  !*** ./src/hello/asset/css/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/hello/editor.scss":
/*!*******************************!*\
  !*** ./src/hello/editor.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/hello/block.json":
/*!******************************!*\
  !*** ./src/hello/block.json ***!
  \******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/hello","version":"0.1.0","title":"CB Hello","category":"widgets","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":true,"color":{"text":true,"link":true,"background":true},"align":true},"styles":[{"name":"red","label":"Red","isDefault":true},{"name":"green-amar","label":"Green"},{"name":"blue","label":"Blue"},{"name":"yellow","label":"Yellow"},{"name":"purple","label":"Purple"},{"name":"pink","label":"Pink"},{"name":"orange","label":"Orange"}],"textdomain":"cb-my-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"content":{"type":"string","default":""},"style":{"type":"string","default":"red"},"plainTextContent":{"type":"string","source":"text","selector":"p"},"richTextContent":{"type":"string","source":"html","selector":"h2"},"type":{"type":"string"},"id":{"type":"integer","default":0},"src":{"type":"string"},"alt":{"type":"string"},"textAlign":{"type":"string","default":"left"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"hello/index": 0,
/******/ 			"hello/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcb_my_block"] = globalThis["webpackChunkcb_my_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["hello/style-index"], () => (__webpack_require__("./src/hello/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map