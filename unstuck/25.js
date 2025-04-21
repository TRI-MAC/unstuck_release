window.habitlab_content_script = true;

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./src/bower_components/habitlab-iron-image/habitlab-iron-image-0.js":
/*!*********************************************************!*\
  !*** ./src/bower_components/habitlab-iron-image/habitlab-iron-image-0.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    Polymer({
      is: 'habitlab-iron-image',

      properties: {
        /**
         * The URL of an image.
         */
        src: {
          observer: '_srcChanged',
          type: String,
          value: ''
        },

        /**
         * A short text alternative for the image.
         */
        alt: {
          type: String,
          value: null
        },

        /**
         * When true, the image is prevented from loading and any placeholder is
         * shown.  This may be useful when a binding to the src property is known to
         * be invalid, to prevent 404 requests.
         */
        preventLoad: {
          type: Boolean,
          value: false,
          observer: '_preventLoadChanged'
        },

        /**
         * Sets a sizing option for the image.  Valid values are `contain` (full
         * aspect ratio of the image is contained within the element and
         * letterboxed) or `cover` (image is cropped in order to fully cover the
         * bounds of the element), or `null` (default: image takes natural size).
         */
        sizing: {
          type: String,
          value: null,
          reflectToAttribute: true
        },

        /**
         * When a sizing option is used (`cover` or `contain`), this determines
         * how the image is aligned within the element bounds.
         */
        position: {
          type: String,
          value: 'center'
        },

        /**
         * When `true`, any change to the `src` property will cause the `placeholder`
         * image to be shown until the new image has loaded.
         */
        preload: {
          type: Boolean,
          value: false
        },

        /**
         * This image will be used as a background/placeholder until the src image has
         * loaded.  Use of a data-URI for placeholder is encouraged for instant rendering.
         */
        placeholder: {
          type: String,
          value: null,
          observer: '_placeholderChanged'
        },

        /**
         * When `preload` is true, setting `fade` to true will cause the image to
         * fade into place.
         */
        fade: {
          type: Boolean,
          value: false
        },

        /**
         * Read-only value that is true when the image is loaded.
         */
        loaded: {
          notify: true,
          readOnly: true,
          type: Boolean,
          value: false
        },

        /**
         * Read-only value that tracks the loading state of the image when the `preload`
         * option is used.
         */
        loading: {
          notify: true,
          readOnly: true,
          type: Boolean,
          value: false
        },

        /**
         * Read-only value that indicates that the last set `src` failed to load.
         */
        error: {
          notify: true,
          readOnly: true,
          type: Boolean,
          value: false
        },

        /**
         * Can be used to set the width of image (e.g. via binding); size may also be
         * set via CSS.
         */
        width: {
          observer: '_widthChanged',
          type: Number,
          value: null
        },

        /**
         * Can be used to set the height of image (e.g. via binding); size may also be
         * set via CSS.
         *
         * @attribute height
         * @type number
         * @default null
         */
        height: {
          observer: '_heightChanged',
          type: Number,
          value: null
        },
      },

      observers: [
        '_transformChanged(sizing, position)'
      ],

      ready: function() {
        var img = this.$.img;

        img.onload = function() {
          if (this.$.img.src !== this._resolveSrc(this.src)) return;

          this._setLoading(false);
          this._setLoaded(true);
          this._setError(false);
        }.bind(this);

        img.onerror = function() {
          if (this.$.img.src !== this._resolveSrc(this.src)) return;

          this._reset();

          this._setLoading(false);
          this._setLoaded(false);
          this._setError(true);
        }.bind(this);

        this._resolvedSrc = '';
      },

      _load: function(src) {
        if (src) {
          this.$.img.src = src;
        } else {
          this.$.img.removeAttribute('src');
        }
        this.$.sizedImgDiv.style.backgroundImage = src ? 'url("' + src + '")' : '';

        this._setLoading(!!src);
        this._setLoaded(false);
        this._setError(false);
      },

      _reset: function() {
        this.$.img.removeAttribute('src');
        this.$.sizedImgDiv.style.backgroundImage = '';

        this._setLoading(false);
        this._setLoaded(false);
        this._setError(false);
      },

      _computePlaceholderHidden: function() {
        return !this.preload || (!this.fade && !this.loading && this.loaded);
      },

      _computePlaceholderClassName: function() {
        return (this.preload && this.fade && !this.loading && this.loaded) ? 'faded-out' : '';
      },

      _computeImgDivHidden: function() {
        return !this.sizing;
      },

      _computeImgDivARIAHidden: function() {
        return this.alt === '' ? 'true' : undefined;
      },

      _computeImgDivARIALabel: function() {
        if (this.alt !== null) {
          return this.alt;
        }

        // Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
        // that URL x, but '' is the default for src.
        if (this.src === '') {
          return '';
        }

        var pathComponents = (new URL(this._resolveSrc(this.src))).pathname.split("/");
        return pathComponents[pathComponents.length - 1];
      },

      _computeImgHidden: function() {
        return !!this.sizing;
      },

      _widthChanged: function() {
        this.style.width = isNaN(this.width) ? this.width : this.width + 'px';
      },

      _heightChanged: function() {
        this.style.height = isNaN(this.height) ? this.height : this.height + 'px';
      },

      _preventLoadChanged: function() {
        if (this.preventLoad || this.loaded) return;

        this._reset();
        this._load(this.src);
      },

      _srcChanged: function(newSrc, oldSrc) {
        var newResolvedSrc = this._resolveSrc(newSrc);
        if (newResolvedSrc === this._resolvedSrc) return;
        this._resolvedSrc = newResolvedSrc;

        this._reset();
        if (!this.preventLoad) {
          this._load(newSrc);
        }
      },

      _placeholderChanged: function() {
        this.$.placeholder.style.backgroundImage =
          this.placeholder ? 'url("' + this.placeholder + '")' : '';
      },

      _transformChanged: function() {
        var sizedImgDivStyle = this.$.sizedImgDiv.style;
        var placeholderStyle = this.$.placeholder.style;

        sizedImgDivStyle.backgroundSize =
        placeholderStyle.backgroundSize =
          this.sizing;

        sizedImgDivStyle.backgroundPosition =
        placeholderStyle.backgroundPosition =
          this.sizing ? this.position : '';

        sizedImgDivStyle.backgroundRepeat =
        placeholderStyle.backgroundRepeat =
          this.sizing ? 'no-repeat' : '';
      },

      _resolveSrc: function(testSrc) {
        return Polymer.ResolveUrl.resolveUrl(testSrc, this.ownerDocument.baseURI);
      }
    });
  

/***/ }),

/***/ "./src/bower_components/habitlab-iron-image/habitlab-iron-image.deps.js":
/*!************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-image/habitlab-iron-image.deps.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-flex-layout/iron-flex-layout.deps.js */ "./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-iron-image/habitlab-iron-image.html */ "./src/bower_components/habitlab-iron-image/habitlab-iron-image.html"), 'bower_components/habitlab-iron-image/habitlab-iron-image.html')
__webpack_require__(/*! bower_components/habitlab-iron-image/habitlab-iron-image-0 */ "./src/bower_components/habitlab-iron-image/habitlab-iron-image-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-iron-image/habitlab-iron-image.html":
/*!*********************************************************!*\
  !*** ./src/bower_components/habitlab-iron-image/habitlab-iron-image.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-flex-layout/iron-flex-layout.html> </head><body><habitlab-dom-module id=habitlab-iron-image> <template> <style>:host{display:inline-block;overflow:hidden;position:relative}#sizedImgDiv{@apply(--layout-fit);display:none}#img{display:block;width:var(--habitlab-iron-image-width,auto);height:var(--habitlab-iron-image-height,auto)}:host([sizing]) #sizedImgDiv{display:block}:host([sizing]) #img{display:none}#placeholder{@apply(--layout-fit);background-color:inherit;opacity:1;@apply(--habitlab-iron-image-placeholder);}#placeholder.faded-out{transition:opacity .5s linear;opacity:0}</style> <div id=sizedImgDiv role=img hidden$=[[_computeImgDivHidden(sizing)]] aria-hidden$=[[_computeImgDivARIAHidden(alt)]] aria-label$=\"[[_computeImgDivARIALabel(alt, src)]]\"></div> <img id=img alt$=[[alt]] hidden$=[[_computeImgHidden(sizing)]]> <div id=placeholder hidden$=\"[[_computePlaceholderHidden(preload, fade, loading, loaded)]]\" class$=\"[[_computePlaceholderClassName(preload, fade, loading, loaded)]]\"></div> </template> <script src=habitlab-iron-image-0.js></script> </habitlab-dom-module> </body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-card/habitlab-paper-card-0.js":
/*!*********************************************************!*\
  !*** ./src/bower_components/habitlab-paper-card/habitlab-paper-card-0.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    Polymer({
      is: 'habitlab-paper-card',

      properties: {
        /**
         * The title of the card.
         */
        heading: {
          type: String,
          value: '',
          observer: '_headingChanged'
        },

        /**
         * The url of the title image of the card.
         */
        image: {
          type: String,
          value: ''
        },

        /**
         * The text alternative of the card's title image.
         */
        alt: {
          type: String
        },

        /**
         * When `true`, any change to the image url property will cause the
         * `placeholder` image to be shown until the image is fully rendered.
         */
        preloadImage: {
          type: Boolean,
          value: false
        },

        /**
         * When `preloadImage` is true, setting `fadeImage` to true will cause the
         * image to fade into place.
         */
        fadeImage: {
          type: Boolean,
          value: false
        },

        /**
         * This image will be used as a background/placeholder until the src image has
         * loaded. Use of a data-URI for placeholder is encouraged for instant rendering.
         */
        placeholderImage: {
          type: String,
          value: null
        },

        /**
         * The z-depth of the card, from 0-5.
         */
        elevation: {
          type: Number,
          value: 1,
          reflectToAttribute: true
        },

        /**
         * Set this to true to animate the card shadow when setting a new
         * `z` value.
         */
        animatedShadow: {
          type: Boolean,
          value: false
        },

        /**
         * Read-only property used to pass down the `animatedShadow` value to
         * the underlying habitlab-paper-material style (since they have different names).
         */
        animated: {
          type: Boolean,
          reflectToAttribute: true,
          readOnly: true,
          computed: '_computeAnimated(animatedShadow)'
        }
      },

      _headingChanged: function(heading) {
        var label = this.getAttribute('aria-label');
        this.setAttribute('aria-label', heading);
      },

      _computeHeadingClass: function(image) {
        var cls = 'title-text';
        if (image)
          cls += ' over-image';
        return cls;
      },

      _computeAnimated: function(animatedShadow) {
        return animatedShadow;
      }
    });
  

/***/ }),

/***/ "./src/bower_components/habitlab-paper-card/habitlab-paper-card.deps.js":
/*!************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-card/habitlab-paper-card.deps.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-flex-layout/iron-flex-layout.deps.js */ "./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js")
__webpack_require__(/*! bower_components/habitlab-iron-image/habitlab-iron-image.deps.js */ "./src/bower_components/habitlab-iron-image/habitlab-iron-image.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-material/habitlab-paper-material.deps.js */ "./src/bower_components/habitlab-paper-material/habitlab-paper-material.deps.js")
__webpack_require__(/*! bower_components/paper-styles/default-theme.deps.js */ "./src/bower_components/paper-styles/default-theme.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-card/habitlab-paper-card.html */ "./src/bower_components/habitlab-paper-card/habitlab-paper-card.html"), 'bower_components/habitlab-paper-card/habitlab-paper-card.html')
__webpack_require__(/*! bower_components/habitlab-paper-card/habitlab-paper-card-0 */ "./src/bower_components/habitlab-paper-card/habitlab-paper-card-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-card/habitlab-paper-card.html":
/*!*********************************************************!*\
  !*** ./src/bower_components/habitlab-paper-card/habitlab-paper-card.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-flex-layout/iron-flex-layout.html> <link rel=import href=../habitlab-iron-image/habitlab-iron-image.html> <link rel=import href=../habitlab-paper-material/habitlab-paper-material.html> <link rel=import href=../paper-styles/default-theme.html> </head><body><habitlab-dom-module id=habitlab-paper-card> <template> <style include=habitlab-paper-material>:host{display:inline-block;position:relative;box-sizing:border-box;background-color:var(--habitlab-paper-card-background-color,--primary-background-color);border-radius:2px;@apply(--paper-font-common-base);@apply(--habitlab-paper-card);}[hidden]{display:none!important}.header{position:relative;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden;@apply(--habitlab-paper-card-header);}.header habitlab-iron-image{display:block;width:100%;--habitlab-iron-image-width:100%;pointer-events:none;@apply(--habitlab-paper-card-header-image);}.header .title-text{padding:16px;font-size:24px;font-weight:400;color:var(--habitlab-paper-card-header-color,#000);@apply(--habitlab-paper-card-header-text);}.header .title-text.over-image{position:absolute;bottom:0;@apply(--habitlab-paper-card-header-image-text);}:host ::content .card-content{padding:16px;position:relative;@apply(--habitlab-paper-card-content);}:host ::content .card-actions{border-top:1px solid #e8e8e8;padding:5px 16px;position:relative;@apply(--habitlab-paper-card-actions);}</style> <div class=header> <habitlab-iron-image hidden$=[[!image]] src=[[image]] alt=[[alt]] placeholder=[[placeholderImage]] preload=[[preloadImage]] fade=[[fadeImage]]></habitlab-iron-image> <div hidden$=[[!heading]] class$=[[_computeHeadingClass(image)]]>[[heading]]</div> </div> <content></content> </template> <script src=habitlab-paper-card-0.js></script> </habitlab-dom-module> </body></html>";

/***/ })

}]);