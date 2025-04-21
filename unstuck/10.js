window.habitlab_content_script = true;

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/bower_components/habitlab-paper-slider/habitlab-paper-slider-0.js":
/*!*************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-slider/habitlab-paper-slider-0.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    Polymer({
      is: 'habitlab-paper-slider',

      behaviors: [
        Polymer.IronA11yKeysBehavior,
        Polymer.IronFormElementBehavior,
        Polymer.PaperInkyFocusBehavior,
        Polymer.IronRangeBehavior
      ],

      properties: {
        /**
         * If true, the slider thumb snaps to tick marks evenly spaced based
         * on the `step` property value.
         */
        snaps: {
          type: Boolean,
          value: false,
          notify: true
        },

        /**
         * If true, a pin with numeric value label is shown when the slider thumb
         * is pressed. Use for settings for which users need to know the exact
         * value of the setting.
         */
        pin: {
          type: Boolean,
          value: false,
          notify: true
        },

        /**
         * The number that represents the current secondary progress.
         */
        secondaryProgress: {
          type: Number,
          value: 0,
          notify: true,
          observer: '_secondaryProgressChanged'
        },

        /**
         * If true, an input is shown and user can use it to set the slider value.
         */
        editable: {
          type: Boolean,
          value: false
        },

        /**
         * The immediate value of the slider.  This value is updated while the user
         * is dragging the slider.
         */
        immediateValue: {
          type: Number,
          value: 0,
          readOnly: true,
          notify: true
        },

        /**
         * The maximum number of markers
         */
        maxMarkers: {
          type: Number,
          value: 0,
          notify: true
        },

        /**
         * If true, the knob is expanded
         */
        expand: {
          type: Boolean,
          value: false,
          readOnly: true
        },

        /**
         * True when the user is dragging the slider.
         */
        dragging: {
          type: Boolean,
          value: false,
          readOnly: true
        },

        transiting: {
          type: Boolean,
          value: false,
          readOnly: true
        },

        markers: {
          type: Array,
          readOnly: true,
          value: []
        },
      },

      observers: [
        '_updateKnob(value, min, max, snaps, step)',
        '_valueChanged(value)',
        '_immediateValueChanged(immediateValue)',
        '_updateMarkers(maxMarkers, min, max, snaps)'
      ],

      hostAttributes: {
        role: 'slider',
        tabindex: 0
      },

      keyBindings: {
        'left down pagedown home': '_decrementKey',
        'right up pageup end': '_incrementKey'
      },

      /**
       * Increases value by `step` but not above `max`.
       * @method increment
       */
      increment: function() {
        this.value = this._clampValue(this.value + this.step);
      },

      /**
       * Decreases value by `step` but not below `min`.
       * @method decrement
       */
      decrement: function() {
        this.value = this._clampValue(this.value - this.step);
      },

      _updateKnob: function(value, min, max, snaps, step) {
        this.setAttribute('aria-valuemin', min);
        this.setAttribute('aria-valuemax', max);
        this.setAttribute('aria-valuenow', value);

        this._positionKnob(this._calcRatio(value));
      },

      _valueChanged: function() {
        this.fire('value-change');
      },

      _immediateValueChanged: function() {
        if (this.dragging) {
          this.fire('immediate-value-change');
        } else {
          this.value = this.immediateValue;
        }
      },

      _secondaryProgressChanged: function() {
        this.secondaryProgress = this._clampValue(this.secondaryProgress);
      },

      _expandKnob: function() {
        this._setExpand(true);
      },

      _resetKnob: function() {
        this.cancelDebouncer('expandKnob');
        this._setExpand(false);
      },

      _positionKnob: function(ratio) {
        this._setImmediateValue(this._calcStep(this._calcKnobPosition(ratio)));
        this._setRatio(this._calcRatio(this.immediateValue));

        this.$.sliderKnob.style.left = (this.ratio * 100) + '%';
        if (this.dragging) {
          this._knobstartx = this.ratio * this._w;
          this.translate3d(0, 0, 0, this.$.sliderKnob);
        }
      },

      _calcKnobPosition: function(ratio) {
        return (this.max - this.min) * ratio + this.min;
      },

      _onTrack: function(event) {
        event.stopPropagation();
        switch (event.detail.state) {
          case 'start':
            this._trackStart(event);
            break;
          case 'track':
            this._trackX(event);
            break;
          case 'end':
            this._trackEnd();
            break;
        }
      },

      _trackStart: function(event) {
        this._w = this.$.sliderBar.offsetWidth;
        this._x = this.ratio * this._w;
        this._startx = this._x;
        this._knobstartx = this._startx;
        this._minx = - this._startx;
        this._maxx = this._w - this._startx;
        this.$.sliderKnob.classList.add('dragging');
        this._setDragging(true);
      },

      _trackX: function(e) {
        if (!this.dragging) {
          this._trackStart(e);
        }

        var dx = Math.min(this._maxx, Math.max(this._minx, e.detail.dx));
        this._x = this._startx + dx;

        var immediateValue = this._calcStep(this._calcKnobPosition(this._x / this._w));
        this._setImmediateValue(immediateValue);

        // update knob's position
        var translateX = ((this._calcRatio(this.immediateValue) * this._w) - this._knobstartx);
        this.translate3d(translateX + 'px', 0, 0, this.$.sliderKnob);
      },

      _trackEnd: function() {
        var s = this.$.sliderKnob.style;

        this.$.sliderKnob.classList.remove('dragging');
        this._setDragging(false);
        this._resetKnob();
        this.value = this.immediateValue;

        s.transform = s.webkitTransform = '';

        this.fire('change');
      },

      _knobdown: function(event) {
        this._expandKnob();

        // cancel selection
        event.preventDefault();

        // set the focus manually because we will called prevent default
        this.focus();
      },

      _bardown: function(event) {
        this._w = this.$.sliderBar.offsetWidth;
        var rect = this.$.sliderBar.getBoundingClientRect();
        var ratio = (event.detail.x - rect.left) / this._w;
        var prevRatio = this.ratio;

        this._setTransiting(true);

        this._positionKnob(ratio);

        this.debounce('expandKnob', this._expandKnob, 60);

        // if the ratio doesn't change, sliderKnob's animation won't start
        // and `_knobTransitionEnd` won't be called
        // Therefore, we need to manually update the `transiting` state

        if (prevRatio === this.ratio) {
          this._setTransiting(false);
        }

        this.async(function() {
          this.fire('change');
        });

        // cancel selection
        event.preventDefault();

        // set the focus manually because we will called prevent default
        this.focus();
      },

      _knobTransitionEnd: function(event) {
        if (event.target === this.$.sliderKnob) {
          this._setTransiting(false);
        }
      },

      _updateMarkers: function(maxMarkers, min, max, snaps) {
        if (!snaps) {
          this._setMarkers([]);
        }
        var steps = Math.round((max - min) / this.step);
        if (steps > maxMarkers) {
          steps = maxMarkers;
        }
        this._setMarkers(new Array(steps));
      },

      _mergeClasses: function(classes) {
        return Object.keys(classes).filter(
          function(className) {
            return classes[className];
          }).join(' ');
      },

      _getClassNames: function() {
        return this._mergeClasses({
          disabled: this.disabled,
          pin: this.pin,
          snaps: this.snaps,
          ring: this.immediateValue <= this.min,
          expand: this.expand,
          dragging: this.dragging,
          transiting: this.transiting,
          editable: this.editable
        });
      },

      _incrementKey: function(event) {
        if (!this.disabled) {
          if (event.detail.key === 'end') {
            this.value = this.max;
          } else {
            this.increment();
          }
          this.fire('change');
        }
      },

      _decrementKey: function(event) {
        if (!this.disabled) {
          if (event.detail.key === 'home') {
            this.value = this.min;
          } else {
            this.decrement();
          }
          this.fire('change');
        }
      },

      _changeValue: function(event) {
        this.value = event.target.value;
        this.fire('change');
      },

      _inputKeyDown: function(event) {
        event.stopPropagation();
      },

      // create the element ripple inside the `sliderKnob`
      _createRipple: function() {
        this._rippleContainer = this.$.sliderKnob;
        return Polymer.PaperInkyFocusBehaviorImpl._createRipple.call(this);
      },

      // Hide the ripple when user is not interacting with keyboard.
      // This behavior is different from other ripple-y controls, but is
      // according to spec: https://www.google.com/design/spec/components/sliders.html
      _focusedChanged: function(receivedFocusFromKeyboard) {
        if (receivedFocusFromKeyboard) {
          this.ensureRipple();
        }
        if (this.hasRipple()) {
          // note, ripple must be un-hidden prior to setting `holdDown`
          if (receivedFocusFromKeyboard) {
            this._ripple.style.display = '';
          } else {
            this._ripple.style.display = 'none';
          }
          this._ripple.holdDown = receivedFocusFromKeyboard;
        }
      }
    });

    /**
     * Fired when the slider's value changes.
     *
     * @event value-change
     */

    /**
     * Fired when the slider's immediateValue changes. Only occurs while the
     * user is dragging.
     *
     * To detect changes to immediateValue that happen for any input (i.e.                                                          
     * dragging, tapping, clicking, etc.) listen for immediate-value-changed
     * instead.
     *
     * @event immediate-value-change
     */

    /**
     * Fired when the slider's value changes due to user interaction.
     *
     * Changes to the slider's value due to changes in an underlying
     * bound variable will not trigger this event.
     *
     * @event change
     */
  

/***/ }),

/***/ "./src/bower_components/habitlab-paper-slider/habitlab-paper-slider.deps.js":
/*!****************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-slider/habitlab-paper-slider.deps.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.deps.js */ "./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.deps.js")
__webpack_require__(/*! bower_components/iron-flex-layout/iron-flex-layout.deps.js */ "./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js")
__webpack_require__(/*! bower_components/iron-form-element-behavior/iron-form-element-behavior.deps.js */ "./src/bower_components/iron-form-element-behavior/iron-form-element-behavior.deps.js")
__webpack_require__(/*! bower_components/iron-range-behavior/iron-range-behavior.deps.js */ "./src/bower_components/iron-range-behavior/iron-range-behavior.deps.js")
__webpack_require__(/*! bower_components/paper-behaviors/paper-inky-focus-behavior.deps.js */ "./src/bower_components/paper-behaviors/paper-inky-focus-behavior.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-input/habitlab-paper-input.deps.js */ "./src/bower_components/habitlab-paper-input/habitlab-paper-input.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-progress/habitlab-paper-progress.deps.js */ "./src/bower_components/habitlab-paper-progress/habitlab-paper-progress.deps.js")
__webpack_require__(/*! bower_components/paper-styles/color.deps.js */ "./src/bower_components/paper-styles/color.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-slider/habitlab-paper-slider.html */ "./src/bower_components/habitlab-paper-slider/habitlab-paper-slider.html"), 'bower_components/habitlab-paper-slider/habitlab-paper-slider.html')
__webpack_require__(/*! bower_components/habitlab-paper-slider/habitlab-paper-slider-0 */ "./src/bower_components/habitlab-paper-slider/habitlab-paper-slider-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-slider/habitlab-paper-slider.html":
/*!*************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-slider/habitlab-paper-slider.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-a11y-keys-behavior/iron-a11y-keys-behavior.html> <link rel=import href=../iron-flex-layout/iron-flex-layout.html> <link rel=import href=../iron-form-element-behavior/iron-form-element-behavior.html> <link rel=import href=../iron-range-behavior/iron-range-behavior.html> <link rel=import href=../paper-behaviors/paper-inky-focus-behavior.html> <link rel=import href=../habitlab-paper-input/habitlab-paper-input.html> <link rel=import href=../habitlab-paper-progress/habitlab-paper-progress.html> <link rel=import href=../paper-styles/color.html> </head><body><habitlab-dom-module id=habitlab-paper-slider> <template strip-whitespace=\"\"> <style>:host{@apply(--layout);@apply(--layout-justified);@apply(--layout-center);width:200px;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;--habitlab-paper-progress-active-color:var(--habitlab-paper-slider-active-color, --google-blue-700);--habitlab-paper-progress-secondary-color:var(--habitlab-paper-slider-secondary-color, --google-blue-300);--habitlab-paper-progress-disabled-active-color:var(--habitlab-paper-slider-disabled-active-color, --paper-grey-400);--habitlab-paper-progress-disabled-secondary-color:var(--habitlab-paper-slider-disabled-secondary-color, --paper-grey-400)}:host(:focus){outline:0}#sliderContainer{position:relative;width:100%;height:calc(30px + var(--habitlab-paper-slider-height,2px));margin-left:calc(15px + var(--habitlab-paper-slider-height,2px)/ 2);margin-right:calc(15px + var(--habitlab-paper-slider-height,2px)/ 2)}#sliderContainer:focus{outline:0}#sliderContainer.editable{margin-top:12px;margin-bottom:12px}.bar-container{position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}.ring>.bar-container{left:calc(5px + var(--habitlab-paper-slider-height,2px)/ 2);transition:left .18s ease}.ring.expand.dragging>.bar-container{transition:none}.ring.expand:not(.pin)>.bar-container{left:calc(8px + var(--habitlab-paper-slider-height,2px)/ 2)}#sliderBar{padding:15px 0;width:100%;background-color:var(--habitlab-paper-slider-bar-color,transparent);--habitlab-paper-progress-container-color:var(--habitlab-paper-slider-container-color, --paper-grey-400);--habitlab-paper-progress-height:var(--habitlab-paper-slider-height, 2px)}.slider-markers{position:absolute;top:calc(14px + var(--habitlab-paper-slider-height,2px)/ 2);height:var(--habitlab-paper-slider-height,2px);left:0;right:-1px;box-sizing:border-box;pointer-events:none;@apply(--layout-horizontal);}.slider-marker{@apply(--layout-flex);}.slider-marker::after,.slider-markers::after{content:\"\";display:block;margin-left:-1px;width:2px;height:2px;border-radius:50%;background-color:#000}#sliderKnob{position:absolute;left:0;top:0;margin-left:calc(-15px - var(--habitlab-paper-slider-height,2px)/ 2);width:calc(30px + var(--habitlab-paper-slider-height,2px));height:calc(30px + var(--habitlab-paper-slider-height,2px))}.transiting>#sliderKnob{transition:left 80ms ease}#sliderKnob:focus{outline:0}#sliderKnob.dragging{transition:none}.snaps>#sliderKnob.dragging{transition:-webkit-transform 80ms ease;transition:transform 80ms ease}#sliderKnobInner{margin:10px;width:calc(100% - 20px);height:calc(100% - 20px);background-color:var(--habitlab-paper-slider-knob-color,--google-blue-700);border:2px solid var(--habitlab-paper-slider-knob-color,--google-blue-700);border-radius:50%;-moz-box-sizing:border-box;box-sizing:border-box;transition-property:-webkit-transform,background-color,border;transition-property:transform,background-color,border;transition-duration:.18s;transition-timing-function:ease}.expand:not(.pin)>#sliderKnob>#sliderKnobInner{-webkit-transform:scale(1.5);transform:scale(1.5)}.ring>#sliderKnob>#sliderKnobInner{background-color:var(--habitlab-paper-slider-knob-start-color,transparent);border:2px solid var(--habitlab-paper-slider-knob-start-border-color,--paper-grey-400)}#sliderKnobInner::before{background-color:var(--habitlab-paper-slider-pin-color,--google-blue-700)}.pin>#sliderKnob>#sliderKnobInner::before{content:\"\";position:absolute;top:0;left:50%;margin-left:-13px;width:26px;height:26px;border-radius:50% 50% 50% 0;-webkit-transform:rotate(-45deg) scale(0) translate(0);transform:rotate(-45deg) scale(0) translate(0)}#sliderKnobInner::after,#sliderKnobInner::before{transition:-webkit-transform .18s ease,background-color .18s ease;transition:transform .18s ease,background-color .18s ease}.pin.ring>#sliderKnob>#sliderKnobInner::before{background-color:var(--habitlab-paper-slider-pin-start-color,--paper-grey-400)}.pin.expand>#sliderKnob>#sliderKnobInner::before{-webkit-transform:rotate(-45deg) scale(1) translate(17px,-17px);transform:rotate(-45deg) scale(1) translate(17px,-17px)}.pin>#sliderKnob>#sliderKnobInner::after{content:attr(value);position:absolute;top:0;left:50%;margin-left:-16px;width:32px;height:26px;text-align:center;color:var(--habitlab-paper-slider-font-color,#fff);font-size:10px;-webkit-transform:scale(0) translate(0);transform:scale(0) translate(0)}.pin.expand>#sliderKnob>#sliderKnobInner::after{-webkit-transform:scale(1) translate(0,-17px);transform:scale(1) translate(0,-17px)}.slider-input{width:50px;overflow:hidden;--habitlab-paper-input-container-input:{text-align:center};@apply(--habitlab-paper-slider-input);}#sliderContainer.disabled{pointer-events:none}.disabled>#sliderKnob>#sliderKnobInner{background-color:var(--habitlab-paper-slider-disabled-knob-color,--paper-grey-400);border:2px solid var(--habitlab-paper-slider-disabled-knob-color,--paper-grey-400);-webkit-transform:scale3d(.75,.75,1);transform:scale3d(.75,.75,1)}.disabled.ring>#sliderKnob>#sliderKnobInner{background-color:var(--habitlab-paper-slider-knob-start-color,transparent);border:2px solid var(--habitlab-paper-slider-knob-start-border-color,--paper-grey-400)}habitlab-paper-ripple{color:var(--habitlab-paper-slider-knob-color,--google-blue-700)}</style> <div id=sliderContainer class$=\"[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]\"> <div class=bar-container> <habitlab-paper-progress disabled$=[[disabled]] id=sliderBar aria-hidden=true min=[[min]] max=[[max]] step=[[step]] value=[[immediateValue]] secondary-progress=[[secondaryProgress]] on-down=_bardown on-up=_resetKnob on-track=_onTrack> </habitlab-paper-progress> </div> <template is=habitlab-dom-if if=[[snaps]]> <div class=slider-markers> <template is=habitlab-dom-repeat items=[[markers]]> <div class=slider-marker></div> </template> </div> </template> <div id=sliderKnob on-down=_knobdown on-up=_resetKnob on-track=_onTrack on-transitionend=_knobTransitionEnd> <div id=sliderKnobInner value$=[[immediateValue]]></div> </div> </div> <template is=habitlab-dom-if if=[[editable]]> <habitlab-paper-input id=input type=number step=[[step]] min=[[min]] max=[[max]] class=slider-input disabled$=[[disabled]] value=[[immediateValue]] on-change=_changeValue on-keydown=_inputKeyDown no-label-float=\"\"> </habitlab-paper-input> </template> </template> <script src=habitlab-paper-slider-0.js></script> </habitlab-dom-module> </body></html>";

/***/ }),

/***/ "./src/components/habitlab-close-tab-button.deps.js":
/*!*************************************************!*\
  !*** ./src/components/habitlab-close-tab-button.deps.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps.js */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")
import_dom_modules(__webpack_require__(/*! components/habitlab-close-tab-button.html */ "./src/components/habitlab-close-tab-button.html"), 'components/habitlab-close-tab-button.html')
__webpack_require__(/*! components/habitlab-close-tab-button */ "./src/components/habitlab-close-tab-button.ls")


/***/ }),

/***/ "./src/components/habitlab-close-tab-button.html":
/*!**********************************************!*\
  !*** ./src/components/habitlab-close-tab-button.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <habitlab-dom-module id=habitlab-close-tab-button> <template> <style>:host{display:var(--call-to-action-button-display,inline-block);height:var(--call-to-action-button-height,38px);width:var(--call-to-action-button-width);margin:var(--call-to-action-button-margin,0 0 0 0)}.close_tab_button{cursor:pointer;color:var(--call-to-action-button-color,#fff);font-size:var(--call-to-action-button-font-size,14px);background-color:var(--call-to-action-button-bg-color,#415d67);margin:0 auto;width:100%;height:100%;box-shadow:var(--call-to-action-button-shadow,2px 2px 2px #888)}</style> <habitlab-paper-button class=close_tab_button on-click=button_clicked>{{buttontext}}</habitlab-paper-button> </template> <script src=habitlab-close-tab-button.js></script> </habitlab-dom-module>";

/***/ }),

/***/ "./src/components/habitlab-close-tab-button.ls":
/*!********************************************!*\
  !*** ./src/components/habitlab-close-tab-button.ls ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var close_selected_tab, log_action, get_tab_id, close_tab_with_id, msg;
close_selected_tab = __webpack_require__(/*! libs_common/tab_utils */ "./src/generated_libs/libs_frontend/tab_utils.js").close_selected_tab;
log_action = __webpack_require__(/*! libs_frontend/intervention_log_utils */ "./src/libs_frontend/intervention_log_utils.ls").log_action;
get_tab_id = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls").get_tab_id;
close_tab_with_id = __webpack_require__(/*! libs_common/tab_utils */ "./src/generated_libs/libs_frontend/tab_utils.js").close_tab_with_id;
msg = __webpack_require__(/*! libs_common/localization_utils */ "./src/libs_common/localization_utils.js").msg;
Polymer({
  is: 'habitlab-close-tab-button',
  doc: 'A button that closes the current tab',
  properties: {
    buttontext: {
      type: String,
      value: msg('Close Tab')
    }
  },
  button_clicked: async function(){
    (await log_action({
      'positive': 'habitlab-close-tab-button clicked'
    }));
    return close_tab_with_id(get_tab_id());
  }
});
//# sourceMappingURL=habitlab-close-tab-button.ls.map


/***/ }),

/***/ "./src/components/habitlab-interstitial-screen.deps.js":
/*!****************************************************!*\
  !*** ./src/components/habitlab-interstitial-screen.deps.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps.js */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.deps.js */ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-progress/habitlab-paper-progress.deps.js */ "./src/bower_components/habitlab-paper-progress/habitlab-paper-progress.deps.js")
__webpack_require__(/*! components/habitlab-logo-v2.deps.js */ "./src/components/habitlab-logo-v2.deps.js")
__webpack_require__(/*! components/call-to-action-button.deps.js */ "./src/components/call-to-action-button.deps.js")
import_dom_modules(__webpack_require__(/*! components/habitlab-interstitial-screen.html */ "./src/components/habitlab-interstitial-screen.html"), 'components/habitlab-interstitial-screen.html')
__webpack_require__(/*! components/habitlab-interstitial-screen */ "./src/components/habitlab-interstitial-screen.js")


/***/ }),

/***/ "./src/components/habitlab-interstitial-screen.html":
/*!*************************************************!*\
  !*** ./src/components/habitlab-interstitial-screen.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <link rel=import href=../bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.html> <link rel=import href=../bower_components/habitlab-paper-progress/habitlab-paper-progress.html> <link rel=import href=habitlab-logo-v2.html> <link rel=import href=call-to-action-button.html> <habitlab-dom-module id=habitlab-interstitial-screen> <template> <style>:host{position:fixed;display:block;top:0;left:0;width:100%;height:100%;background-color:#f2fcff;opacity:1;z-index:350000000000;font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif}.contentContainer{margin-top:20px}.titleText{font-size:1.5em;text-align:center}#messagetext{font-size:1.3em;text-align:center}.whiteDiv{position:fixed;display:flex;flex-direction:column;justify-content:center;top:0;left:0;width:100%;height:100%;background-color:#f2fcff;opacity:1;z-index:35000000}.okButton{cursor:pointer;padding:5px;background-color:#415d67;color:#fff;font-size:14px;height:38px;box-shadow:2px 2px 2px #888}.closeTabButton{cursor:pointer;padding:5px;margin-bottom:10px;font-size:14px;height:38px}#logo{margin:10px}.message-block{padding-top:40px;align-self:center}#paperprogress{display:none;margin-bottom:10px}</style> <div class=whiteDiv> <div class=contentContainer> <div id=titletext class=titleText></div> <div id=messagetext></div> <p> </p><p> <center> <habitlab-paper-progress id=paperprogress></habitlab-paper-progress> </center> <center> <habitlab-logo-v2 id=logo></habitlab-logo-v2> </center> <center> <call-to-action-button id=closetabbutton class=closeTabButton></call-to-action-button> </center> <center> <habitlab-paper-button id=okbutton class=okButton on-click=buttonclicked>default</habitlab-paper-button> </center> </p> <p></p> </div> </div> </template> <script src=habitlab-interstitial-screen.js></script> </habitlab-dom-module>";

/***/ }),

/***/ "./src/components/habitlab-interstitial-screen.js":
/*!***********************************************!*\
  !*** ./src/components/habitlab-interstitial-screen.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")

const {polymer_ext} = __webpack_require__(/*! libs_frontend/polymer_utils */ "./src/libs_frontend/polymer_utils.ls")
const {close_selected_tab} = __webpack_require__(/*! libs_frontend/tab_utils */ "./src/generated_libs/libs_frontend/tab_utils.js")

const {
  log_action,
} = __webpack_require__(/*! libs_frontend/intervention_log_utils */ "./src/libs_frontend/intervention_log_utils.ls")

Polymer({
  is: 'habitlab-interstitial-screen',
  doc: 'A screen that either shows work sites visited today or suggested links to New York Times articles.',
  properties: {
    btnTxt: {
      type: String, 
    },
    btnTxt2: {
      type: String, 
    },    
    minutes: {
      type: Number
    },
    titleText: {
      type: String, 
    },
    visits: {
      type: Number
    },
    intervention: {
      type: String
    },
    messageText: {
      type: String
    },
    randomizer: {
      type: Boolean,
      value: Math.floor(Math.random()*2) == 0,
    },
    show_rss_message: {
      type: Boolean,
      computed: 'compute_show_rss_message(show_progress_message, randomizer)',
    },
    show_workpages_message: {
      type: Boolean,
      computed: 'compute_show_workpages_message(show_progress_message, randomizer)',
    },
    show_progress_message: {
      type: Boolean,
      value: false,
      //computed: 'compute_progress_message()',
    }
  },

  listeners: {
    'disable_intervention': 'disableIntervention',
    'show_button': 'showButton'
  },
  compute_show_rss_message: function(show_progress_message, randomizer) {
    return (!show_progress_message) && randomizer
  },
  compute_show_workpages_message: function(show_progress_message, randomizer) {
    return !show_progress_message && !randomizer
  },
  //compute_show_progress_message: function() {
  //  return false
  //},
  buttonclicked: function() {
    log_action({'negative': 'Continuted to site.'})
    $(this).hide()
  },
  hideButton: function() {
    //$(this.$.okbutton).fadeOut("slow")
    this.$.okbutton.hidden = true
    //this.$.closetabbutton.hidden = true
    this.$.okbutton.style.display = 'none';
    //this.$.closetabbutton.style.display = 'none';
  },
  showProgress: function() {
    this.$.paperprogress.style.display = 'block';
  },
  incrementProgress: function() {
    this.$.paperprogress.value += 1;
  },
  setProgress: function(val) {
    this.$.paperprogress.value = val;
  },
  showButton: function() {
    console.log(this.$.okbutton)
    $(this.$.okbutton).fadeIn("slow")
    this.$.okbutton.hidden = false
    // this.$.closetabbutton.hidden = false
    this.$.okbutton.style.display = 'inline-flex';
    // this.$.closetabbutton.style.display = 'inline-flex';
  },
  ready: function() {
    this.$.okbutton.textContent = this.btnTxt
    this.$.closetabbutton.text = this.btnTxt2
    this.$.titletext.textContent = this.titleText
    this.$.messagetext.textContent = this.messageText
    console.log(this.$.titletext.textContent)
    this.addEventListener('show_button', function() {
      console.log('hi')
    })
    
    //this.$.titletext.hidden = true
    // this.$.closetabbutton.hidden = true
    // var self = this
    // $(this.$.titletext).fadeIn().promise().then(function() {
    //   console.log('faded in title-text!')
    //   $(self.$.closetabbutton).fadeIn(5000, function() {
    //     console.log('faded in close-tab')
    //   })
    // })

    // this.$.paperprogress.hidden = true
    // this.$.paperprogress.style.display = 'none';
  },
  disableIntervention: function() {
    $(this).hide()
  },
  
  attributeChanged: function() {
    this.$.okbutton.textContent = this.btnTxt 
    this.$.closetabbutton.text = this.btnTxt2
    this.$.messagetext.textContent = this.messageText
    this.$.titletext.textContent = this.titleText
  }
});



/***/ }),

/***/ "./src/components/timespent-view.deps.js":
/*!***********************************************!*\
  !*** ./src/components/timespent-view.deps.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps.js */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")
__webpack_require__(/*! components/habitlab-logo-v2.deps.js */ "./src/components/habitlab-logo-v2.deps.js")
__webpack_require__(/*! components/habitlab-close-tab-button.deps.js */ "./src/components/habitlab-close-tab-button.deps.js")
import_dom_modules(__webpack_require__(/*! components/timespent-view.html */ "./src/components/timespent-view.html"), 'components/timespent-view.html')
__webpack_require__(/*! components/timespent-view */ "./src/components/timespent-view.js")


/***/ }),

/***/ "./src/components/timespent-view.html":
/*!********************************************!*\
  !*** ./src/components/timespent-view.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <link rel=import href=habitlab-logo-v2.html> <link rel=import href=habitlab-close-tab-button.html> <habitlab-dom-module id=timespent-view> <template> <style>:host{display:inline-block;text-align:center;width:100%;height:100%}#displayText{background-color:#3498db;position:fixed;color:#fff;width:125px;min-height:120px;bottom:0;left:0;z-index:99999;font-size:1em;padding:3px;font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;line-height:16.08px;letter-spacing:0}#logo{height:38px;margin-bottom:7px}#close_tab_button{margin-bottom:7px}</style> <div id=displayText> <habitlab-logo-v2 id=logo></habitlab-logo-v2><br/> <habitlab-close-tab-button id=close_tab_button></habitlab-close-tab-button> <div>{{displayText}}</div> </div> </template> <script src=timespent-view.js></script> </habitlab-dom-module>";

/***/ }),

/***/ "./src/components/timespent-view.js":
/*!******************************************!*\
  !*** ./src/components/timespent-view.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

const {
  polymer_ext
} = __webpack_require__(/*! libs_frontend/polymer_utils */ "./src/libs_frontend/polymer_utils.ls");

const {
  url_to_domain,
} = __webpack_require__(/*! libs_common/domain_utils */ "./src/libs_common/domain_utils.ls");

const {
  close_selected_tab
} = __webpack_require__(/*! libs_common/tab_utils */ "./src/generated_libs/libs_frontend/tab_utils.js")

const {
  get_seconds_spent_on_current_domain_in_current_session
} = __webpack_require__(/*! libs_common/time_spent_utils */ "./src/libs_common/time_spent_utils.ls")

const {
  printable_time_spent_long
} = __webpack_require__(/*! libs_common/time_utils */ "./src/libs_common/time_utils.ls")

polymer_ext({
  is: 'timespent-view',
  properties: {
    site: {
      type: String,
      value: url_to_domain(window.location.href)
    },
    num_seconds_allowed: {
      type: Number,
      value: 30,
    },
    time_spent_on_domain_start: {
      type: Number,
      value: 0,
    },
    time_spent_on_domain_now: {
      type: Number,
      value: 0,
    },
    seconds_remaining: {
      type: Number,
      computed: 'compute_seconds_remaining(num_seconds_allowed, time_spent_on_domain_start, time_spent_on_domain_now)',
    },
    displayText: {
      type: String,
      computed: 'compute_display_text(seconds_remaining)'
    }
  },
  compute_display_text: function(seconds_remaining) {
    return printable_time_spent_long(seconds_remaining) + ' left.'
  },
  compute_seconds_remaining: function(num_seconds_allowed, time_spent_on_domain_start, time_spent_on_domain_now) {
    let time_elapsed = time_spent_on_domain_now - time_spent_on_domain_start
    let time_remaining = num_seconds_allowed - time_elapsed
    if (time_remaining < 0) {
      time_remaining = 0
    }
    return time_remaining
  },
  start: async function(seconds_spent_at_most_recent_start) {
    if (this.started) {
      return
    }
    this.started = true
    let self = this
    if (seconds_spent_at_most_recent_start == null) {
      seconds_spent_at_most_recent_start = 0
    }
    self.time_spent_on_domain_start = seconds_spent_at_most_recent_start
    self.time_spent_on_domain_now = await get_seconds_spent_on_current_domain_in_current_session()
    let was_time_remaining_previously_zero = false
    setInterval(async function() {
      self.time_spent_on_domain_now = await get_seconds_spent_on_current_domain_in_current_session()
      if (self.seconds_remaining <= 0) {
        if (!was_time_remaining_previously_zero) {
          was_time_remaining_previously_zero = true
          self.fire('timer-finished', {})
        }
      } else {
        was_time_remaining_previously_zero = false
      }
    }, 1000)
  },
  startTimer: async function(seconds, seconds_spent_at_most_recent_start) {
    if (seconds_spent_at_most_recent_start == null) {
      seconds_spent_at_most_recent_start = 0
    }
    this.num_seconds_allowed = seconds
    //let seconds_on_domain = await get_seconds_spent_on_current_domain_in_current_session()
    this.time_spent_on_domain_start = seconds_spent_at_most_recent_start // 0 //seconds_on_domain
    this.time_spent_on_domain_now = this.time_spent_on_domain_start
    this.start(seconds_spent_at_most_recent_start)
  },
});


/***/ }),

/***/ "./src/generated_libs/libs_frontend/db_utils.js":
/*!******************************************************!*\
  !*** ./src/generated_libs/libs_frontend/db_utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is generated from libs_common/function_signatures.ls
// Do not edit this file directly. To regenerate, run gulp
const {import_lib} = __webpack_require__(/*! libs_frontend/import_lib */ "./src/libs_frontend/import_lib.ls");
module.exports = import_lib('db_utils');


/***/ }),

/***/ "./src/generated_libs/libs_frontend/intervention_session_vars_backend.js":
/*!*******************************************************************************!*\
  !*** ./src/generated_libs/libs_frontend/intervention_session_vars_backend.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is generated from libs_common/function_signatures.ls
// Do not edit this file directly. To regenerate, run gulp
const {import_lib} = __webpack_require__(/*! libs_frontend/import_lib */ "./src/libs_frontend/import_lib.ls");
module.exports = import_lib('intervention_session_vars_backend');


/***/ }),

/***/ "./src/generated_libs/libs_frontend/session_utils.js":
/*!***********************************************************!*\
  !*** ./src/generated_libs/libs_frontend/session_utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is generated from libs_common/function_signatures.ls
// Do not edit this file directly. To regenerate, run gulp
const {import_lib} = __webpack_require__(/*! libs_frontend/import_lib */ "./src/libs_frontend/import_lib.ls");
module.exports = import_lib('session_utils');


/***/ }),

/***/ "./src/libs_common/domain_utils.ls":
/*!*****************************************!*\
  !*** ./src/libs_common/domain_utils.ls ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ref$, gexport, gexport_module, url_to_domain, domain_to_url, out$ =  true && exports || this;
ref$ = __webpack_require__(/*! libs_common/gexport */ "./src/libs_common/gexport.ls"), gexport = ref$.gexport, gexport_module = ref$.gexport_module;
out$.url_to_domain = url_to_domain = function(url){
  var domain;
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2];
  } else {
    domain = url.split('/')[0];
  }
  return domain;
};
out$.domain_to_url = domain_to_url = function(domain){
  return "http://" + url_to_domain(domain) + '/';
};
gexport_module('domain_utils', function(it){
  return eval(it);
});
//# sourceMappingURL=domain_utils.ls.map


/***/ }),

/***/ "./src/libs_common/time_spent_utils.ls":
/*!*********************************************!*\
  !*** ./src/libs_common/time_spent_utils.ls ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var moment, prelude, ref$, getkey_dictdict, getdict_for_key_dictdict, getdict_for_key2_dictdict, getCollection, setkey_dict, getkey_dict, url_to_domain, get_days_since_epoch, get_session_id, gexport, gexport_module, get_seconds_spent_on_all_domains_today, get_seconds_spent_on_all_domains_days_before_today, get_seconds_spent_on_domain_all_days, get_seconds_spent_on_domain_days_before_today, get_seconds_spent_on_domain_today, get_minutes_spent_on_domain_today, get_seconds_spent_on_current_domain_today, get_visits_to_domain_today, get_visits_to_domain_days_before_today, get_visits_to_current_domain_today, get_new_session_id_for_domain, get_seconds_spent_on_current_domain_in_session, get_seconds_spent_on_domain_in_session, get_seconds_spent_on_current_domain_in_current_session, out$ =  true && exports || this;
moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
prelude = __webpack_require__(/*! prelude-ls */ "./node_modules/prelude-ls/lib/index.js");
ref$ = __webpack_require__(/*! libs_common/db_utils */ "./src/generated_libs/libs_frontend/db_utils.js"), getkey_dictdict = ref$.getkey_dictdict, getdict_for_key_dictdict = ref$.getdict_for_key_dictdict, getdict_for_key2_dictdict = ref$.getdict_for_key2_dictdict, getCollection = ref$.getCollection, setkey_dict = ref$.setkey_dict, getkey_dict = ref$.getkey_dict;
url_to_domain = __webpack_require__(/*! libs_common/domain_utils */ "./src/libs_common/domain_utils.ls").url_to_domain;
get_days_since_epoch = __webpack_require__(/*! libs_common/time_utils */ "./src/libs_common/time_utils.ls").get_days_since_epoch;
get_session_id = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls").get_session_id;
ref$ = __webpack_require__(/*! libs_common/gexport */ "./src/libs_common/gexport.ls"), gexport = ref$.gexport, gexport_module = ref$.gexport_module;
out$.get_seconds_spent_on_all_domains_today = get_seconds_spent_on_all_domains_today = async function(){
  return (await getdict_for_key2_dictdict('seconds_on_domain_per_day', get_days_since_epoch()));
};
out$.get_seconds_spent_on_all_domains_days_before_today = get_seconds_spent_on_all_domains_days_before_today = async function(days_ago){
  return (await getdict_for_key2_dictdict('seconds_on_domain_per_day', get_days_since_epoch() - days_ago));
};
out$.get_seconds_spent_on_domain_all_days = get_seconds_spent_on_domain_all_days = async function(domain){
  var results, today_day_num, output, k, v;
  results = (await getdict_for_key_dictdict('seconds_on_domain_per_day', domain));
  today_day_num = get_days_since_epoch();
  output = {};
  for (k in results) {
    v = results[k];
    output[today_day_num - k] = v;
  }
  return output;
};
out$.get_seconds_spent_on_domain_days_before_today = get_seconds_spent_on_domain_days_before_today = async function(domain, days_ago){
  var current_day, result;
  current_day = get_days_since_epoch();
  result = (await getkey_dictdict('seconds_on_domain_per_day', domain, current_day - days_ago));
  return result != null ? result : 0;
};
out$.get_seconds_spent_on_domain_today = get_seconds_spent_on_domain_today = async function(domain){
  var current_day, result;
  current_day = get_days_since_epoch();
  result = (await getkey_dictdict('seconds_on_domain_per_day', domain, current_day));
  return result != null ? result : 0;
};
out$.get_minutes_spent_on_domain_today = get_minutes_spent_on_domain_today = async function(domain){
  var current_day, result;
  current_day = get_days_since_epoch();
  result = (await getkey_dictdict('seconds_on_domain_per_day', domain, current_day));
  if (result != null) {
    return Math.floor(result / 60.0);
  }
  return 0;
};
/**
* Return seconds spent on current domain today
* @return {integer} seconds spent
*/
out$.get_seconds_spent_on_current_domain_today = get_seconds_spent_on_current_domain_today = async function(){
  var current_domain, result;
  current_domain = window.location.host;
  result = (await get_seconds_spent_on_domain_today(current_domain));
  return result != null ? result : 0;
};
/**
* Return visits to the given domain today
* @param {domain} the doain
* @return {integer} seconds spent
*/
out$.get_visits_to_domain_today = get_visits_to_domain_today = async function(domain){
  var current_day, result;
  current_day = get_days_since_epoch();
  result = (await getkey_dictdict('visits_to_domain_per_day', domain, current_day));
  return result != null ? result : 0;
};
out$.get_visits_to_domain_days_before_today = get_visits_to_domain_days_before_today = async function(domain, days_ago){
  var current_day, result;
  current_day = get_days_since_epoch();
  result = (await getkey_dictdict('visits_to_domain_per_day', domain, current_day - days_ago));
  return result != null ? result : 0;
};
/**
* Return visits to the given domain today
* @return {integer} seconds spent
*/
out$.get_visits_to_current_domain_today = get_visits_to_current_domain_today = async function(){
  var current_domain, result;
  current_domain = window.location.host;
  result = (await get_visits_to_domain_today(current_domain));
  return result != null ? result : 0;
};
/*
export get_new_session_id_for_domain = (domain) ->>
  collection = await getCollection('seconds_on_domain_per_session')
  all_session_ids_for_domain = await collection.where('key').equals(domain).toArray()
  all_session_ids_for_domain = all_session_ids_for_domain.map (.key2)
  if all_session_ids_for_domain.length == 0
    return 0
  return prelude.maximum(all_session_ids_for_domain) + 1 # this is the day, in epoch time, that the most recent intervention set occurred
*/
out$.get_new_session_id_for_domain = get_new_session_id_for_domain = async function(domain){
  var result;
  result = (await getkey_dict('domain_to_last_session_id', domain));
  if (result == null) {
    (await setkey_dict('domain_to_last_session_id', domain, 0));
    return 0;
  }
  (await setkey_dict('domain_to_last_session_id', domain, result + 1));
  return result + 1;
};
out$.get_seconds_spent_on_current_domain_in_session = get_seconds_spent_on_current_domain_in_session = async function(session_id){
  var current_domain, result;
  current_domain = window.location.host;
  result = (await get_seconds_spent_on_domain_in_session(current_domain, session_id));
  return result != null ? result : 0;
};
out$.get_seconds_spent_on_domain_in_session = get_seconds_spent_on_domain_in_session = async function(domain, session_id){
  var result;
  result = (await getkey_dictdict('seconds_on_domain_per_session', domain, session_id));
  return result != null ? result : 0;
};
/**
* Return seconds spent on current domain this session
* @return {integer} seconds spent
*/
out$.get_seconds_spent_on_current_domain_in_current_session = get_seconds_spent_on_current_domain_in_current_session = async function(){
  var session_id, current_domain, result;
  session_id = get_session_id();
  current_domain = window.location.host;
  result = (await get_seconds_spent_on_domain_in_session(current_domain, session_id));
  return result != null ? result : 0;
};
gexport_module('time_spent_utils', function(it){
  return eval(it);
});
//# sourceMappingURL=time_spent_utils.ls.map


/***/ }),

/***/ "./src/libs_common/time_utils.ls":
/*!***************************************!*\
  !*** ./src/libs_common/time_utils.ls ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var moment, ref$, gexport, gexport_module, get_days_since_epoch, pad_to_two_digits, printable_time_spent_short, printable_time_spent, printable_time_spent_long, out$ =  true && exports || this;
moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
ref$ = __webpack_require__(/*! libs_common/gexport */ "./src/libs_common/gexport.ls"), gexport = ref$.gexport, gexport_module = ref$.gexport_module;
out$.get_days_since_epoch = get_days_since_epoch = function(){
  var start_of_epoch;
  start_of_epoch = moment().year(2016).month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);
  return moment().diff(start_of_epoch, 'days');
};
pad_to_two_digits = function(val){
  var output;
  output = val.toString();
  if (output.length === 1) {
    return '0' + output;
  }
  return output;
};
out$.printable_time_spent_short = printable_time_spent_short = function(seconds){
  var minutes;
  if (seconds < 0) {
    return '00:00';
  }
  minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;
  return minutes + ':' + pad_to_two_digits(seconds);
};
out$.printable_time_spent = printable_time_spent = function(seconds){
  if (seconds < 60) {
    return seconds + ' seconds';
  }
  return moment().add(seconds, 'seconds').fromNow(true);
};
/**
* Return time spent in hours, minutes, seconds format
* @param {Integer} seconds - seconds spent
* @return {String} 
*/
out$.printable_time_spent_long = printable_time_spent_long = function(seconds){
  var hours, remaining_seconds, minutes, output;
  if (seconds < 0) {
    return '0 seconds';
  }
  hours = Math.floor(seconds / 3600);
  remaining_seconds = seconds - hours * 3600;
  minutes = Math.floor(remaining_seconds / 60);
  remaining_seconds = remaining_seconds - minutes * 60;
  output = [];
  if (hours > 0) {
    if (hours === 1) {
      output.push('1 hour');
    } else {
      output.push(hours + ' hours');
    }
  }
  if (minutes > 0 || hours > 0) {
    if (minutes === 1) {
      output.push('1 minute');
    } else {
      output.push(minutes + ' minutes');
    }
  }
  if (remaining_seconds === 1) {
    output.push('1 second');
  } else if (remaining_seconds >= 0) {
    output.push(remaining_seconds + ' seconds');
  }
  return output.join(' ');
};
gexport_module('time_utils', function(it){
  return eval(it);
});
//# sourceMappingURL=time_utils.ls.map


/***/ }),

/***/ "./src/libs_frontend/intervention_session_vars.js":
/*!********************************************************!*\
  !*** ./src/libs_frontend/intervention_session_vars.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  get_intervention_session_var_backend,
  set_intervention_session_var_backend,
} = __webpack_require__(/*! libs_common/intervention_session_vars_backend */ "./src/generated_libs/libs_frontend/intervention_session_vars_backend.js")

const {
  get_intervention,
  get_session_id,
} = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls")

async function get_intervention_session_var(key) {
  const intervention_name = get_intervention().name
  const session_id = get_session_id()
  return await get_intervention_session_var_backend(intervention_name, session_id, key);
}

async function set_intervention_session_var(key, val) {
  const intervention_name = get_intervention().name
  const session_id = get_session_id()
  return await set_intervention_session_var_backend(intervention_name, session_id, key, val);
}

module.exports = {
  get_intervention_session_var,
  set_intervention_session_var,
}


/***/ })

}]);