window.habitlab_content_script = true;

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/bower_components/classList.js/classList.min.js":
/*!************************************************************!*\
  !*** ./src/bower_components/classList.js/classList.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},a=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},c=function(t,e){if(""===e)throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",""+this)}},u=l[n]=[],h=function(){return new l(this)};if(a[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return t+="",-1!==c(this,t)},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",-1===c(this,t)&&(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=c(this,t);-1!==e;)this.splice(e,1),r=!0,e=c(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.toString=function(){return this.join(" ")},s.defineProperty){var f={get:h,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,f)}catch(g){(void 0===g.number||-2146823252===g.number)&&(f.enumerable=!1,s.defineProperty(i,e,f))}}else s[n].__defineGetter__&&i.__defineGetter__(e,h)}}(self),function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}());


/***/ }),

/***/ "./src/bower_components/habitlab-iron-media-query/habitlab-iron-media-query-0.js":
/*!*********************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-media-query/habitlab-iron-media-query-0.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  Polymer({

    is: 'habitlab-iron-media-query',

    properties: {

      /**
       * The Boolean return value of the media query.
       */
      queryMatches: {
        type: Boolean,
        value: false,
        readOnly: true,
        notify: true
      },

      /**
       * The CSS media query to evaluate.
       */
      query: {
        type: String,
        observer: 'queryChanged'
      },

      /**
       * If true, the query attribute is assumed to be a complete media query
       * string rather than a single media feature.
       */
      full: {
        type: Boolean,
        value: false
      },

      /**
       * @type {function(MediaQueryList)}
       */
      _boundMQHandler: {
        value: function() {
          return this.queryHandler.bind(this);
        }
      },

      /**
       * @type {MediaQueryList}
       */
      _mq: {
        value: null
      }
    },

    attached: function() {
      this.style.display = 'none';
      this.queryChanged();
    },

    detached: function() {
      this._remove();
    },

    _add: function() {
      if (this._mq) {
        this._mq.addListener(this._boundMQHandler);
      }
    },

    _remove: function() {
      if (this._mq) {
        this._mq.removeListener(this._boundMQHandler);
      }
      this._mq = null;
    },

    queryChanged: function() {
      this._remove();
      var query = this.query;
      if (!query) {
        return;
      }
      if (!this.full && query[0] !== '(') {
        query = '(' + query + ')';
      }
      this._mq = window.matchMedia(query);
      this._add();
      this.queryHandler(this._mq);
    },

    queryHandler: function(mq) {
      this._setQueryMatches(mq.matches);
    }

  });



/***/ }),

/***/ "./src/bower_components/habitlab-iron-media-query/habitlab-iron-media-query.deps.js":
/*!************************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-media-query/habitlab-iron-media-query.deps.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-iron-media-query/habitlab-iron-media-query.html */ "./src/bower_components/habitlab-iron-media-query/habitlab-iron-media-query.html"), 'bower_components/habitlab-iron-media-query/habitlab-iron-media-query.html')
__webpack_require__(/*! bower_components/habitlab-iron-media-query/habitlab-iron-media-query-0 */ "./src/bower_components/habitlab-iron-media-query/habitlab-iron-media-query-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-iron-media-query/habitlab-iron-media-query.html":
/*!*********************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-media-query/habitlab-iron-media-query.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <script src=habitlab-iron-media-query-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/iron-range-behavior/iron-range-behavior-0.js":
/*!***************************************************************************!*\
  !*** ./src/bower_components/iron-range-behavior/iron-range-behavior-0.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



 /**
 * `iron-range-behavior` provides the behavior for something with a minimum to maximum range.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
 Polymer.IronRangeBehavior = {

  properties: {

    /**
     * The number that represents the current value.
     */
    value: {
      type: Number,
      value: 0,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * The number that indicates the minimum value of the range.
     */
    min: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * The number that indicates the maximum value of the range.
     */
    max: {
      type: Number,
      value: 100,
      notify: true
    },

    /**
     * Specifies the value granularity of the range's value.
     */
    step: {
      type: Number,
      value: 1,
      notify: true
    },

    /**
     * Returns the ratio of the value.
     */
    ratio: {
      type: Number,
      value: 0,
      readOnly: true,
      notify: true
    },
  },

  observers: [
    '_update(value, min, max, step)'
  ],

  _calcRatio: function(value) {
    return (this._clampValue(value) - this.min) / (this.max - this.min);
  },

  _clampValue: function(value) {
    return Math.min(this.max, Math.max(this.min, this._calcStep(value)));
  },

  _calcStep: function(value) {
    // polymer/issues/2493
    value = parseFloat(value);

    if (!this.step) {
      return value;
    }

    var numSteps = Math.round((value - this.min) / this.step);
    if (this.step < 1) {
     /**
      * For small values of this.step, if we calculate the step using
      * `Math.round(value / step) * step` we may hit a precision point issue
      * eg. 0.1 * 0.2 =  0.020000000000000004
      * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
      *
      * as a work around we can divide by the reciprocal of `step`
      */
      return numSteps / (1 / this.step) + this.min;
    } else {
      return numSteps * this.step + this.min;
    }
  },

  _validateValue: function() {
    var v = this._clampValue(this.value);
    this.value = this.oldValue = isNaN(v) ? this.oldValue : v;
    return this.value !== v;
  },

  _update: function() {
    this._validateValue();
    this._setRatio(this._calcRatio(this.value) * 100);
  }

};


/***/ }),

/***/ "./src/bower_components/iron-range-behavior/iron-range-behavior.deps.js":
/*!******************************************************************************!*\
  !*** ./src/bower_components/iron-range-behavior/iron-range-behavior.deps.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-range-behavior/iron-range-behavior.html */ "./src/bower_components/iron-range-behavior/iron-range-behavior.html"), 'bower_components/iron-range-behavior/iron-range-behavior.html')
__webpack_require__(/*! bower_components/iron-range-behavior/iron-range-behavior-0 */ "./src/bower_components/iron-range-behavior/iron-range-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/iron-range-behavior/iron-range-behavior.html":
/*!***************************************************************************!*\
  !*** ./src/bower_components/iron-range-behavior/iron-range-behavior.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <script src=iron-range-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/iron-multi-selectable-0.js":
/*!***********************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/iron-multi-selectable-0.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


  /** @polymerBehavior Polymer.IronMultiSelectableBehavior */
  Polymer.IronMultiSelectableBehaviorImpl = {
    properties: {

      /**
       * If true, multiple selections are allowed.
       */
      multi: {
        type: Boolean,
        value: false,
        observer: 'multiChanged'
      },

      /**
       * Gets or sets the selected elements. This is used instead of `selected` when `multi`
       * is true.
       */
      selectedValues: {
        type: Array,
        notify: true
      },

      /**
       * Returns an array of currently selected items.
       */
      selectedItems: {
        type: Array,
        readOnly: true,
        notify: true
      },

    },

    observers: [
      '_updateSelected(selectedValues.splices)'
    ],

    /**
     * Selects the given value. If the `multi` property is true, then the selected state of the
     * `value` will be toggled; otherwise the `value` will be selected.
     *
     * @method select
     * @param {string|number} value the value to select.
     */
    select: function(value) {
      if (this.multi) {
        if (this.selectedValues) {
          this._toggleSelected(value);
        } else {
          this.selectedValues = [value];
        }
      } else {
        this.selected = value;
      }
    },

    multiChanged: function(multi) {
      this._selection.multi = multi;
    },

    get _shouldUpdateSelection() {
      return this.selected != null ||
        (this.selectedValues != null && this.selectedValues.length);
    },

    _updateAttrForSelected: function() {
      if (!this.multi) {
        Polymer.IronSelectableBehavior._updateAttrForSelected.apply(this);
      } else if (this._shouldUpdateSelection) {
        this.selectedValues = this.selectedItems.map(function(selectedItem) {
          return this._indexToValue(this.indexOf(selectedItem));
        }, this).filter(function(unfilteredValue) {
          return unfilteredValue != null;
        }, this);
      }
    },

    _updateSelected: function() {
      if (this.multi) {
        this._selectMulti(this.selectedValues);
      } else {
        this._selectSelected(this.selected);
      }
    },

    _selectMulti: function(values) {
      if (values) {
        var selectedItems = this._valuesToItems(values);
        // clear all but the current selected items
        this._selection.clear(selectedItems);
        // select only those not selected yet
        for (var i = 0; i < selectedItems.length; i++) {
          this._selection.setItemSelected(selectedItems[i], true);
        }
        // Check for items, since this array is populated only when attached
        if (this.fallbackSelection && this.items.length && !this._selection.get().length) {
          var fallback = this._valueToItem(this.fallbackSelection);
          if (fallback) {
            this.selectedValues = [this.fallbackSelection];
          }
        }
      } else {
        this._selection.clear();
      }
    },

    _selectionChange: function() {
      var s = this._selection.get();
      if (this.multi) {
        this._setSelectedItems(s);
      } else {
        this._setSelectedItems([s]);
        this._setSelectedItem(s);
      }
    },

    _toggleSelected: function(value) {
      var i = this.selectedValues.indexOf(value);
      var unselected = i < 0;
      if (unselected) {
        this.push('selectedValues',value);
      } else {
        this.splice('selectedValues',i,1);
      }
    },

    _valuesToItems: function(values) {
      return (values == null) ? null : values.map(function(value) {
        return this._valueToItem(value);
      }, this);
    }
  };

  /** @polymerBehavior */
  Polymer.IronMultiSelectableBehavior = [
    Polymer.IronSelectableBehavior,
    Polymer.IronMultiSelectableBehaviorImpl
  ];



/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/iron-multi-selectable.deps.js":
/*!**************************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/iron-multi-selectable.deps.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-iron-selector/iron-selectable.deps.js */ "./src/bower_components/habitlab-iron-selector/iron-selectable.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-iron-selector/iron-multi-selectable.html */ "./src/bower_components/habitlab-iron-selector/iron-multi-selectable.html"), 'bower_components/habitlab-iron-selector/iron-multi-selectable.html')
__webpack_require__(/*! bower_components/habitlab-iron-selector/iron-multi-selectable-0 */ "./src/bower_components/habitlab-iron-selector/iron-multi-selectable-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/iron-multi-selectable.html":
/*!***********************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/iron-multi-selectable.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=iron-selectable.html> <script src=iron-multi-selectable-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/iron-selectable-0.js":
/*!*****************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/iron-selectable-0.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  /** @polymerBehavior */
  Polymer.IronSelectableBehavior = {

      /**
       * Fired when habitlab-iron-selector is activated (selected or deselected).
       * It is fired before the selected items are changed.
       * Cancel the event to abort selection.
       *
       * @event iron-activate
       */

      /**
       * Fired when an item is selected
       *
       * @event iron-select
       */

      /**
       * Fired when an item is deselected
       *
       * @event iron-deselect
       */

      /**
       * Fired when the list of selectable items changes (e.g., items are
       * added or removed). The detail of the event is a mutation record that
       * describes what changed.
       *
       * @event iron-items-changed
       */

    properties: {

      /**
       * If you want to use an attribute value or property of an element for
       * `selected` instead of the index, set this to the name of the attribute
       * or property. Hyphenated values are converted to camel case when used to
       * look up the property of a selectable element. Camel cased values are
       * *not* converted to hyphenated values for attribute lookup. It's
       * recommended that you provide the hyphenated form of the name so that
       * selection works in both cases. (Use `attr-or-property-name` instead of
       * `attrOrPropertyName`.)
       */
      attrForSelected: {
        type: String,
        value: null
      },

      /**
       * Gets or sets the selected element. The default is to use the index of the item.
       * @type {string|number}
       */
      selected: {
        type: String,
        notify: true
      },

      /**
       * Returns the currently selected item.
       *
       * @type {?Object}
       */
      selectedItem: {
        type: Object,
        readOnly: true,
        notify: true
      },

      /**
       * The event that fires from items when they are selected. Selectable
       * will listen for this event from items and update the selection state.
       * Set to empty string to listen to no events.
       */
      activateEvent: {
        type: String,
        value: 'tap',
        observer: '_activateEventChanged'
      },

      /**
       * This is a CSS selector string.  If this is set, only items that match the CSS selector
       * are selectable.
       */
      selectable: String,

      /**
       * The class to set on elements when selected.
       */
      selectedClass: {
        type: String,
        value: 'iron-selected'
      },

      /**
       * The attribute to set on elements when selected.
       */
      selectedAttribute: {
        type: String,
        value: null
      },

      /**
       * Default fallback if the selection based on selected with `attrForSelected`
       * is not found.
       */
      fallbackSelection: {
        type: String,
        value: null
      },

      /**
       * The list of items from which a selection can be made.
       */
      items: {
        type: Array,
        readOnly: true,
        notify: true,
        value: function() {
          return [];
        }
      },

      /**
       * The set of excluded elements where the key is the `localName`
       * of the element that will be ignored from the item list.
       *
       * @default {template: 1}
       */
      _excludedLocalNames: {
        type: Object,
        value: function() {
          return {
            'template': 1
          };
        }
      }
    },

    observers: [
      '_updateAttrForSelected(attrForSelected)',
      '_updateSelected(selected)',
      '_checkFallback(fallbackSelection)'
    ],

    created: function() {
      this._bindFilterItem = this._filterItem.bind(this);
      this._selection = new Polymer.IronSelection(this._applySelection.bind(this));
    },

    attached: function() {
      this._observer = this._observeItems(this);
      this._updateItems();
      if (!this._shouldUpdateSelection) {
        this._updateSelected();
      }
      this._addListener(this.activateEvent);
    },

    detached: function() {
      if (this._observer) {
        Polymer.dom(this).unobserveNodes(this._observer);
      }
      this._removeListener(this.activateEvent);
    },

    /**
     * Returns the index of the given item.
     *
     * @method indexOf
     * @param {Object} item
     * @returns Returns the index of the item
     */
    indexOf: function(item) {
      return this.items.indexOf(item);
    },

    /**
     * Selects the given value.
     *
     * @method select
     * @param {string|number} value the value to select.
     */
    select: function(value) {
      this.selected = value;
    },

    /**
     * Selects the previous item.
     *
     * @method selectPrevious
     */
    selectPrevious: function() {
      var length = this.items.length;
      var index = (Number(this._valueToIndex(this.selected)) - 1 + length) % length;
      this.selected = this._indexToValue(index);
    },

    /**
     * Selects the next item.
     *
     * @method selectNext
     */
    selectNext: function() {
      var index = (Number(this._valueToIndex(this.selected)) + 1) % this.items.length;
      this.selected = this._indexToValue(index);
    },

    /**
     * Selects the item at the given index.
     *
     * @method selectIndex
     */
    selectIndex: function(index) {
      this.select(this._indexToValue(index));
    },

    /**
     * Force a synchronous update of the `items` property.
     *
     * NOTE: Consider listening for the `iron-items-changed` event to respond to
     * updates to the set of selectable items after updates to the DOM list and
     * selection state have been made.
     *
     * WARNING: If you are using this method, you should probably consider an
     * alternate approach. Synchronously querying for items is potentially
     * slow for many use cases. The `items` property will update asynchronously
     * on its own to reflect selectable items in the DOM.
     */
    forceSynchronousItemUpdate: function() {
      this._updateItems();
    },

    get _shouldUpdateSelection() {
      return this.selected != null;
    },

    _checkFallback: function() {
      if (this._shouldUpdateSelection) {
        this._updateSelected();
      }
    },

    _addListener: function(eventName) {
      this.listen(this, eventName, '_activateHandler');
    },

    _removeListener: function(eventName) {
      this.unlisten(this, eventName, '_activateHandler');
    },

    _activateEventChanged: function(eventName, old) {
      this._removeListener(old);
      this._addListener(eventName);
    },

    _updateItems: function() {
      var nodes = Polymer.dom(this).queryDistributedElements(this.selectable || '*');
      nodes = Array.prototype.filter.call(nodes, this._bindFilterItem);
      this._setItems(nodes);
    },

    _updateAttrForSelected: function() {
      if (this._shouldUpdateSelection) {
        this.selected = this._indexToValue(this.indexOf(this.selectedItem));
      }
    },

    _updateSelected: function() {
      this._selectSelected(this.selected);
    },

    _selectSelected: function(selected) {
      this._selection.select(this._valueToItem(this.selected));
      // Check for items, since this array is populated only when attached
      // Since Number(0) is falsy, explicitly check for undefined
      if (this.fallbackSelection && this.items.length && (this._selection.get() === undefined)) {
        this.selected = this.fallbackSelection;
      }
    },

    _filterItem: function(node) {
      return !this._excludedLocalNames[node.localName];
    },

    _valueToItem: function(value) {
      return (value == null) ? null : this.items[this._valueToIndex(value)];
    },

    _valueToIndex: function(value) {
      if (this.attrForSelected) {
        for (var i = 0, item; item = this.items[i]; i++) {
          if (this._valueForItem(item) == value) {
            return i;
          }
        }
      } else {
        return Number(value);
      }
    },

    _indexToValue: function(index) {
      if (this.attrForSelected) {
        var item = this.items[index];
        if (item) {
          return this._valueForItem(item);
        }
      } else {
        return index;
      }
    },

    _valueForItem: function(item) {
      var propValue = item[Polymer.CaseMap.dashToCamelCase(this.attrForSelected)];
      return propValue != undefined ? propValue : item.getAttribute(this.attrForSelected);
    },

    _applySelection: function(item, isSelected) {
      if (this.selectedClass) {
        this.toggleClass(this.selectedClass, isSelected, item);
      }
      if (this.selectedAttribute) {
        this.toggleAttribute(this.selectedAttribute, isSelected, item);
      }
      this._selectionChange();
      this.fire('iron-' + (isSelected ? 'select' : 'deselect'), {item: item});
    },

    _selectionChange: function() {
      this._setSelectedItem(this._selection.get());
    },

    // observe items change under the given node.
    _observeItems: function(node) {
      return Polymer.dom(node).observeNodes(function(mutation) {
        this._updateItems();

        if (this._shouldUpdateSelection) {
          this._updateSelected();
        }

        // Let other interested parties know about the change so that
        // we don't have to recreate mutation observers everywhere.
        this.fire('iron-items-changed', mutation, {
          bubbles: false,
          cancelable: false
        });
      });
    },

    _activateHandler: function(e) {
      var t = e.target;
      var items = this.items;
      while (t && t != this) {
        var i = items.indexOf(t);
        if (i >= 0) {
          var value = this._indexToValue(i);
          this._itemActivate(value, t);
          return;
        }
        t = t.parentNode;
      }
    },

    _itemActivate: function(value, item) {
      if (!this.fire('iron-activate',
          {selected: value, item: item}, {cancelable: true}).defaultPrevented) {
        this.select(value);
      }
    }

  };



/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/iron-selectable.deps.js":
/*!********************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/iron-selectable.deps.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-iron-selector/iron-selection.deps.js */ "./src/bower_components/habitlab-iron-selector/iron-selection.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-iron-selector/iron-selectable.html */ "./src/bower_components/habitlab-iron-selector/iron-selectable.html"), 'bower_components/habitlab-iron-selector/iron-selectable.html')
__webpack_require__(/*! bower_components/habitlab-iron-selector/iron-selectable-0 */ "./src/bower_components/habitlab-iron-selector/iron-selectable-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/iron-selectable.html":
/*!*****************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/iron-selectable.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=iron-selection.html> <script src=iron-selectable-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/iron-selection-0.js":
/*!****************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/iron-selection-0.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  /**
   * @param {!Function} selectCallback
   * @constructor
   */
  Polymer.IronSelection = function(selectCallback) {
    this.selection = [];
    this.selectCallback = selectCallback;
  };

  Polymer.IronSelection.prototype = {

    /**
     * Retrieves the selected item(s).
     *
     * @method get
     * @returns Returns the selected item(s). If the multi property is true,
     * `get` will return an array, otherwise it will return
     * the selected item or undefined if there is no selection.
     */
    get: function() {
      return this.multi ? this.selection.slice() : this.selection[0];
    },

    /**
     * Clears all the selection except the ones indicated.
     *
     * @method clear
     * @param {Array} excludes items to be excluded.
     */
    clear: function(excludes) {
      this.selection.slice().forEach(function(item) {
        if (!excludes || excludes.indexOf(item) < 0) {
          this.setItemSelected(item, false);
        }
      }, this);
    },

    /**
     * Indicates if a given item is selected.
     *
     * @method isSelected
     * @param {*} item The item whose selection state should be checked.
     * @returns Returns true if `item` is selected.
     */
    isSelected: function(item) {
      return this.selection.indexOf(item) >= 0;
    },

    /**
     * Sets the selection state for a given item to either selected or deselected.
     *
     * @method setItemSelected
     * @param {*} item The item to select.
     * @param {boolean} isSelected True for selected, false for deselected.
     */
    setItemSelected: function(item, isSelected) {
      if (item != null) {
        if (isSelected !== this.isSelected(item)) {
          // proceed to update selection only if requested state differs from current
          if (isSelected) {
            this.selection.push(item);
          } else {
            var i = this.selection.indexOf(item);
            if (i >= 0) {
              this.selection.splice(i, 1);
            }
          }
          if (this.selectCallback) {
            this.selectCallback(item, isSelected);
          }
        }
      }
    },

    /**
     * Sets the selection state for a given item. If the `multi` property
     * is true, then the selected state of `item` will be toggled; otherwise
     * the `item` will be selected.
     *
     * @method select
     * @param {*} item The item to select.
     */
    select: function(item) {
      if (this.multi) {
        this.toggle(item);
      } else if (this.get() !== item) {
        this.setItemSelected(this.get(), false);
        this.setItemSelected(item, true);
      }
    },

    /**
     * Toggles the selection state for `item`.
     *
     * @method toggle
     * @param {*} item The item to toggle.
     */
    toggle: function(item) {
      this.setItemSelected(item, !this.isSelected(item));
    }

  };



/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/iron-selection.deps.js":
/*!*******************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/iron-selection.deps.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-iron-selector/iron-selection.html */ "./src/bower_components/habitlab-iron-selector/iron-selection.html"), 'bower_components/habitlab-iron-selector/iron-selection.html')
__webpack_require__(/*! bower_components/habitlab-iron-selector/iron-selection-0 */ "./src/bower_components/habitlab-iron-selector/iron-selection-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/iron-selection.html":
/*!****************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/iron-selection.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <script src=iron-selection-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/habitlab-iron-selector-0.js":
/*!***************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/habitlab-iron-selector-0.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


  /**
  `habitlab-iron-selector` is an element which can be used to manage a list of elements
  that can be selected.  Tapping on the item will make the item selected.  The `selected` indicates
  which item is being selected.  The default is to use the index of the item.

  Example:

      <habitlab-iron-selector selected="0">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </habitlab-iron-selector>

  If you want to use the attribute value of an element for `selected` instead of the index,
  set `attrForSelected` to the name of the attribute.  For example, if you want to select item by
  `name`, set `attrForSelected` to `name`.

  Example:

      <habitlab-iron-selector attr-for-selected="name" selected="foo">
        <div name="foo">Foo</div>
        <div name="bar">Bar</div>
        <div name="zot">Zot</div>
      </habitlab-iron-selector>

  You can specify a default fallback with `fallbackSelection` in case the `selected` attribute does
  not match the `attrForSelected` attribute of any elements.

  Example:

        <habitlab-iron-selector attr-for-selected="name" selected="non-existing"
                       fallback-selection="default">
          <div name="foo">Foo</div>
          <div name="bar">Bar</div>
          <div name="default">Default</div>
        </habitlab-iron-selector>

  Note: When the selector is multi, the selection will set to `fallbackSelection` iff
  the number of matching elements is zero.

  `habitlab-iron-selector` is not styled. Use the `iron-selected` CSS class to style the selected element.

  Example:

      <style>
        .iron-selected {
          background: #eee;
        }
      </style>

      ...

      <habitlab-iron-selector selected="0">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </habitlab-iron-selector>

  @demo demo/index.html
  */

  Polymer({

    is: 'habitlab-iron-selector',

    behaviors: [
      Polymer.IronMultiSelectableBehavior
    ]

  });



/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/habitlab-iron-selector.deps.js":
/*!******************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/habitlab-iron-selector.deps.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-iron-selector/iron-multi-selectable.deps.js */ "./src/bower_components/habitlab-iron-selector/iron-multi-selectable.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-iron-selector/habitlab-iron-selector.html */ "./src/bower_components/habitlab-iron-selector/habitlab-iron-selector.html"), 'bower_components/habitlab-iron-selector/habitlab-iron-selector.html')
__webpack_require__(/*! bower_components/habitlab-iron-selector/habitlab-iron-selector-0 */ "./src/bower_components/habitlab-iron-selector/habitlab-iron-selector-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-iron-selector/habitlab-iron-selector.html":
/*!***************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-selector/habitlab-iron-selector.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=iron-multi-selectable.html> <script src=habitlab-iron-selector-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/neon-animation/animations/habitlab-opaque-animation-0.js":
/*!******************************************************************************!*\
  !*** ./src/bower_components/neon-animation/animations/habitlab-opaque-animation-0.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  Polymer({

    is: 'habitlab-opaque-animation',

    behaviors: [
      Polymer.NeonAnimationBehavior
    ],

    configure: function(config) {
      var node = config.node;
      this._effect = new KeyframeEffect(node, [
        {'opacity': '1'},
        {'opacity': '1'}
      ], this.timingFromConfig(config));
      node.style.opacity = '0';
      return this._effect;
    },

    complete: function(config) {
      config.node.style.opacity = '';
    }

  });



/***/ }),

/***/ "./src/bower_components/neon-animation/animations/habitlab-opaque-animation.deps.js":
/*!*********************************************************************************!*\
  !*** ./src/bower_components/neon-animation/animations/habitlab-opaque-animation.deps.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/neon-animation/neon-animation-behavior.deps.js */ "./src/bower_components/neon-animation/neon-animation-behavior.deps.js")
__webpack_require__(/*! bower_components/neon-animation/web-animations.deps.js */ "./src/bower_components/neon-animation/web-animations.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/neon-animation/animations/habitlab-opaque-animation.html */ "./src/bower_components/neon-animation/animations/habitlab-opaque-animation.html"), 'bower_components/neon-animation/animations/habitlab-opaque-animation.html')
__webpack_require__(/*! bower_components/neon-animation/animations/habitlab-opaque-animation-0 */ "./src/bower_components/neon-animation/animations/habitlab-opaque-animation-0.js")


/***/ }),

/***/ "./src/bower_components/neon-animation/animations/habitlab-opaque-animation.html":
/*!******************************************************************************!*\
  !*** ./src/bower_components/neon-animation/animations/habitlab-opaque-animation.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../../polymer/polymer.html> <link rel=import href=../neon-animation-behavior.html> <link rel=import href=../web-animations.html> <script src=habitlab-opaque-animation-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/neon-animation/habitlab-neon-animatable-0.js":
/*!******************************************************************!*\
  !*** ./src/bower_components/neon-animation/habitlab-neon-animatable-0.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  Polymer({

    is: 'habitlab-neon-animatable',

    behaviors: [
      Polymer.NeonAnimatableBehavior,
      Polymer.IronResizableBehavior
    ]

  });



/***/ }),

/***/ "./src/bower_components/neon-animation/habitlab-neon-animatable.deps.js":
/*!*********************************************************************!*\
  !*** ./src/bower_components/neon-animation/habitlab-neon-animatable.deps.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js */ "./src/bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js")
__webpack_require__(/*! bower_components/neon-animation/habitlab-neon-animatable-behavior.deps.js */ "./src/bower_components/neon-animation/habitlab-neon-animatable-behavior.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/neon-animation/habitlab-neon-animatable.html */ "./src/bower_components/neon-animation/habitlab-neon-animatable.html"), 'bower_components/neon-animation/habitlab-neon-animatable.html')
__webpack_require__(/*! bower_components/neon-animation/habitlab-neon-animatable-0 */ "./src/bower_components/neon-animation/habitlab-neon-animatable-0.js")


/***/ }),

/***/ "./src/bower_components/neon-animation/habitlab-neon-animatable.html":
/*!******************************************************************!*\
  !*** ./src/bower_components/neon-animation/habitlab-neon-animatable.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-resizable-behavior/iron-resizable-behavior.html> <link rel=import href=habitlab-neon-animatable-behavior.html> </head><body><habitlab-dom-module id=habitlab-neon-animatable> <style>:host{display:block}</style> <template> <content></content> </template> </habitlab-dom-module> <script src=habitlab-neon-animatable-0.js></script> </body></html>";

/***/ }),

/***/ "./src/bower_components/neon-animation/habitlab-neon-animated-pages-0.js":
/*!**********************************************************************!*\
  !*** ./src/bower_components/neon-animation/habitlab-neon-animated-pages-0.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


(function() {

  Polymer({

    is: 'habitlab-neon-animated-pages',

    behaviors: [
      Polymer.IronResizableBehavior,
      Polymer.IronSelectableBehavior,
      Polymer.NeonAnimationRunnerBehavior
    ],

    properties: {

      activateEvent: {
        type: String,
        value: ''
      },

      // if true, the initial page selection will also be animated according to its animation config.
      animateInitialSelection: {
        type: Boolean,
        value: false
      }

    },

    listeners: {
      'iron-select': '_onIronSelect',
      'neon-animation-finish': '_onNeonAnimationFinish'
    },

    _onIronSelect: function(event) {
      var selectedPage = event.detail.item;

      // Only consider child elements.
      if (this.items.indexOf(selectedPage) < 0) {
        return;
      }

      var oldPage = this._valueToItem(this._prevSelected) || false;
      this._prevSelected = this.selected;

      // on initial load and if animateInitialSelection is negated, simply display selectedPage.
      if (!oldPage && !this.animateInitialSelection) {
        this._completeSelectedChanged();
        return;
      }

      this.animationConfig = [];

      // configure selectedPage animations.
      if (this.entryAnimation) {
        this.animationConfig.push({
          name: this.entryAnimation,
          node: selectedPage
        });
      } else {
        if (selectedPage.getAnimationConfig) {
          this.animationConfig.push({
            animatable: selectedPage,
            type: 'entry'
          });
        }
      }

      // configure oldPage animations iff exists.
      if (oldPage) {

        // cancel the currently running animation if one is ongoing.
        if (oldPage.classList.contains('neon-animating')) {
          this._squelchNextFinishEvent = true;
          this.cancelAnimation();
          this._completeSelectedChanged();
          this._squelchNextFinishEvent = false;
        }

        // configure the animation.
        if (this.exitAnimation) {
          this.animationConfig.push({
            name: this.exitAnimation,
            node: oldPage
          });
        } else {
          if (oldPage.getAnimationConfig) {
            this.animationConfig.push({
              animatable: oldPage,
              type: 'exit'
            });
          }
        }

        // display the oldPage during the transition.
        oldPage.classList.add('neon-animating');
      }

      // display the selectedPage during the transition.
      selectedPage.classList.add('neon-animating');

      // actually run the animations.
      if (this.animationConfig.length >= 1) {

        // on first load, ensure we run animations only after element is attached.
        if (!this.isAttached) {
          this.async(function () {
            this.playAnimation(undefined, {
              fromPage: null,
              toPage: selectedPage
            });
          });

        } else {
          this.playAnimation(undefined, {
            fromPage: oldPage,
            toPage: selectedPage
          });
        }

      } else {
        this._completeSelectedChanged(oldPage, selectedPage);
      }
    },

    /**
     * @param {Object=} oldPage
     * @param {Object=} selectedPage
     */
    _completeSelectedChanged: function(oldPage, selectedPage) {
      if (selectedPage) {
        selectedPage.classList.remove('neon-animating');
      }
      if (oldPage) {
        oldPage.classList.remove('neon-animating');
      }
      if (!selectedPage || !oldPage) {
        var nodes = Polymer.dom(this.$.content).getDistributedNodes();
        for (var node, index = 0; node = nodes[index]; index++) {
          node.classList && node.classList.remove('neon-animating');
        }
      }
      this.async(this._notifyPageResize);
    },

    _onNeonAnimationFinish: function(event) {
      if (this._squelchNextFinishEvent) {
        this._squelchNextFinishEvent = false;
        return;
      }
      this._completeSelectedChanged(event.detail.fromPage, event.detail.toPage);
    },

    _notifyPageResize: function() {
      var selectedPage = this.selectedItem || this._valueToItem(this.selected);
      this.resizerShouldNotify = function(element) {
        return element == selectedPage;
      }
      this.notifyResize();
    }

  })

})();


/***/ }),

/***/ "./src/bower_components/neon-animation/habitlab-neon-animated-pages.deps.js":
/*!*************************************************************************!*\
  !*** ./src/bower_components/neon-animation/habitlab-neon-animated-pages.deps.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js */ "./src/bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js")
__webpack_require__(/*! bower_components/habitlab-iron-selector/iron-selectable.deps.js */ "./src/bower_components/habitlab-iron-selector/iron-selectable.deps.js")
__webpack_require__(/*! bower_components/neon-animation/neon-animation-runner-behavior.deps.js */ "./src/bower_components/neon-animation/neon-animation-runner-behavior.deps.js")
__webpack_require__(/*! bower_components/neon-animation/animations/habitlab-opaque-animation.deps.js */ "./src/bower_components/neon-animation/animations/habitlab-opaque-animation.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/neon-animation/habitlab-neon-animated-pages.html */ "./src/bower_components/neon-animation/habitlab-neon-animated-pages.html"), 'bower_components/neon-animation/habitlab-neon-animated-pages.html')
__webpack_require__(/*! bower_components/neon-animation/habitlab-neon-animated-pages-0 */ "./src/bower_components/neon-animation/habitlab-neon-animated-pages-0.js")


/***/ }),

/***/ "./src/bower_components/neon-animation/habitlab-neon-animated-pages.html":
/*!**********************************************************************!*\
  !*** ./src/bower_components/neon-animation/habitlab-neon-animated-pages.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-resizable-behavior/iron-resizable-behavior.html> <link rel=import href=../habitlab-iron-selector/iron-selectable.html> <link rel=import href=neon-animation-runner-behavior.html> <link rel=import href=animations/habitlab-opaque-animation.html> </head><body><habitlab-dom-module id=habitlab-neon-animated-pages> <style>:host{display:block;position:relative}:host>::content>*{position:absolute;top:0;left:0;bottom:0;right:0}:host>::content>:not(.iron-selected):not(.neon-animating){display:none!important}:host>::content>.neon-animating{pointer-events:none}</style> <template> <content id=content></content> </template> </habitlab-dom-module> <script src=habitlab-neon-animated-pages-0.js></script> </body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-progress/habitlab-paper-progress-0.js":
/*!*****************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-progress/habitlab-paper-progress-0.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


  Polymer({
    is: 'habitlab-paper-progress',

    behaviors: [
      Polymer.IronRangeBehavior
    ],

    properties: {
      /**
       * The number that represents the current secondary progress.
       */
      secondaryProgress: {
        type: Number,
        value: 0
      },

      /**
       * The secondary ratio
       */
      secondaryRatio: {
        type: Number,
        value: 0,
        readOnly: true
      },

      /**
       * Use an indeterminate progress indicator.
       */
      indeterminate: {
        type: Boolean,
        value: false,
        observer: '_toggleIndeterminate'
      },

      /**
       * True if the progress is disabled.
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_disabledChanged'
      }
    },

    observers: [
      '_progressChanged(secondaryProgress, value, min, max)'
    ],

    hostAttributes: {
      role: 'progressbar'
    },

    _toggleIndeterminate: function(indeterminate) {
      // If we use attribute/class binding, the animation sometimes doesn't translate properly
      // on Safari 7.1. So instead, we toggle the class here in the update method.
      this.toggleClass('indeterminate', indeterminate, this.$.primaryProgress);
    },

    _transformProgress: function(progress, ratio) {
      var transform = 'scaleX(' + (ratio / 100) + ')';
      progress.style.transform = progress.style.webkitTransform = transform;
    },

    _mainRatioChanged: function(ratio) {
      this._transformProgress(this.$.primaryProgress, ratio);
    },

    _progressChanged: function(secondaryProgress, value, min, max) {
      secondaryProgress = this._clampValue(secondaryProgress);
      value = this._clampValue(value);

      var secondaryRatio = this._calcRatio(secondaryProgress) * 100;
      var mainRatio = this._calcRatio(value) * 100;

      this._setSecondaryRatio(secondaryRatio);
      this._transformProgress(this.$.secondaryProgress, secondaryRatio);
      this._transformProgress(this.$.primaryProgress, mainRatio);

      this.secondaryProgress = secondaryProgress;

      this.setAttribute('aria-valuenow', value);
      this.setAttribute('aria-valuemin', min);
      this.setAttribute('aria-valuemax', max);
    },

    _disabledChanged: function(disabled) {
      this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
    },

    _hideSecondaryProgress: function(secondaryRatio) {
      return secondaryRatio === 0;
    }
  });


/***/ }),

/***/ "./src/bower_components/habitlab-paper-progress/habitlab-paper-progress.deps.js":
/*!********************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-progress/habitlab-paper-progress.deps.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-flex-layout/iron-flex-layout.deps.js */ "./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js")
__webpack_require__(/*! bower_components/iron-range-behavior/iron-range-behavior.deps.js */ "./src/bower_components/iron-range-behavior/iron-range-behavior.deps.js")
__webpack_require__(/*! bower_components/paper-styles/color.deps.js */ "./src/bower_components/paper-styles/color.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-progress/habitlab-paper-progress.html */ "./src/bower_components/habitlab-paper-progress/habitlab-paper-progress.html"), 'bower_components/habitlab-paper-progress/habitlab-paper-progress.html')
__webpack_require__(/*! bower_components/habitlab-paper-progress/habitlab-paper-progress-0 */ "./src/bower_components/habitlab-paper-progress/habitlab-paper-progress-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-progress/habitlab-paper-progress.html":
/*!*****************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-progress/habitlab-paper-progress.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-flex-layout/iron-flex-layout.html> <link rel=import href=../iron-range-behavior/iron-range-behavior.html> <link rel=import href=../paper-styles/color.html> </head><body><habitlab-dom-module id=habitlab-paper-progress> <template> <style>:host{display:block;width:200px;position:relative;overflow:hidden}:host([hidden]){display:none!important}#progressContainer{@apply(--habitlab-paper-progress-container);position:relative}#progressContainer,.indeterminate::after{height:var(--habitlab-paper-progress-height,4px)}#primaryProgress,#secondaryProgress,.indeterminate::after{@apply(--layout-fit);}#progressContainer,.indeterminate::after{background:var(--habitlab-paper-progress-container-color,--google-grey-300)}:host(.transiting) #primaryProgress,:host(.transiting) #secondaryProgress{-webkit-transition-property:-webkit-transform;transition-property:transform;-webkit-transition-duration:var(--habitlab-paper-progress-transition-duration,.08s);transition-duration:var(--habitlab-paper-progress-transition-duration,.08s);-webkit-transition-timing-function:var(--habitlab-paper-progress-transition-timing-function,ease);transition-timing-function:var(--habitlab-paper-progress-transition-timing-function,ease);-webkit-transition-delay:var(--habitlab-paper-progress-transition-delay,0s);transition-delay:var(--habitlab-paper-progress-transition-delay,0s)}#primaryProgress,#secondaryProgress{@apply(--layout-fit);-webkit-transform-origin:left center;transform-origin:left center;-webkit-transform:scaleX(0);transform:scaleX(0);will-change:transform}#primaryProgress{background:var(--habitlab-paper-progress-active-color,--google-green-500)}#secondaryProgress{background:var(--habitlab-paper-progress-secondary-color,--google-green-100)}:host([disabled]) #primaryProgress{background:var(--habitlab-paper-progress-disabled-active-color,--google-grey-500)}:host([disabled]) #secondaryProgress{background:var(--habitlab-paper-progress-disabled-secondary-color,--google-grey-300)}:host(:not([disabled])) #primaryProgress.indeterminate{-webkit-transform-origin:right center;transform-origin:right center;-webkit-animation:indeterminate-bar var(--habitlab-paper-progress-indeterminate-cycle-duration,2s) linear infinite;animation:indeterminate-bar var(--habitlab-paper-progress-indeterminate-cycle-duration,2s) linear infinite}:host(:not([disabled])) #primaryProgress.indeterminate::after{content:\"\";-webkit-transform-origin:center center;transform-origin:center center;-webkit-animation:indeterminate-splitter var(--habitlab-paper-progress-indeterminate-cycle-duration,2s) linear infinite;animation:indeterminate-splitter var(--habitlab-paper-progress-indeterminate-cycle-duration,2s) linear infinite}@-webkit-keyframes indeterminate-bar{0%{-webkit-transform:scaleX(1) translateX(-100%)}50%{-webkit-transform:scaleX(1) translateX(0)}75%{-webkit-transform:scaleX(1) translateX(0);-webkit-animation-timing-function:cubic-bezier(.28,.62,.37,.91)}100%{-webkit-transform:scaleX(0) translateX(0)}}@-webkit-keyframes indeterminate-splitter{0%{-webkit-transform:scaleX(.75) translateX(-125%)}30%{-webkit-transform:scaleX(.75) translateX(-125%);-webkit-animation-timing-function:cubic-bezier(.42,0,.6,.8)}90%{-webkit-transform:scaleX(.75) translateX(125%)}100%{-webkit-transform:scaleX(.75) translateX(125%)}}@keyframes indeterminate-bar{0%{transform:scaleX(1) translateX(-100%)}50%{transform:scaleX(1) translateX(0)}75%{transform:scaleX(1) translateX(0);animation-timing-function:cubic-bezier(.28,.62,.37,.91)}100%{transform:scaleX(0) translateX(0)}}@keyframes indeterminate-splitter{0%{transform:scaleX(.75) translateX(-125%)}30%{transform:scaleX(.75) translateX(-125%);animation-timing-function:cubic-bezier(.42,0,.6,.8)}90%{transform:scaleX(.75) translateX(125%)}100%{transform:scaleX(.75) translateX(125%)}}</style> <div id=progressContainer> <div id=secondaryProgress hidden$=[[_hideSecondaryProgress(secondaryRatio)]]></div> <div id=primaryProgress></div> </div> </template> </habitlab-dom-module> <script src=habitlab-paper-progress-0.js></script> </body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-time-picker/classlist-shim.deps.js":
/*!***********************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-time-picker/classlist-shim.deps.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-time-picker/classlist-shim.html */ "./src/bower_components/habitlab-paper-time-picker/classlist-shim.html"), 'bower_components/habitlab-paper-time-picker/classlist-shim.html')
__webpack_require__(/*! bower_components/classList.js/classList.min */ "./src/bower_components/classList.js/classList.min.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-time-picker/classlist-shim.html":
/*!********************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-time-picker/classlist-shim.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=../classList.js/classList.min.js></script> ";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector-0.js":
/*!**************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector-0.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    (function(){
      var SVG_NS = 'http://www.w3.org/2000/svg';

      var RADIANS_PER_DEGREE = Math.PI / 180;

      var ANIMATION_DURATION = 150; // in milliseconds

      // radius values as a percentage of the clock-face radius
      var MAX_VISIBLE = 12;

      var instanceCount = 0;
      
      var normalizeAngle = function(a) {
        // convert angle to a positive value between 0 and 360
        a = a ? a % 360 : 0;
        return a < 0 ? a + 360 : a;
      };
      
      function getShortestAngle(from, to) {
        var angle, offset = 0;
        from = from || 0;
        angle = normalizeAngle(from);
        if ( angle < 180 && (to > (angle + 180)) ) {
          offset = -360; 
        }
        if ( angle >= 180 && (to <= (angle - 180)) ) {
          offset = 360; 
        }
        return from + offset + (to - angle);
      }

      Polymer({
        is: 'habitlab-paper-clock-selector',
        properties: {
          selected: {
            type: Number,
            notify: true,
            value: 0,
            observer: '_selectedChanged'
          },
          count: {
            type: Number,
            value: 0
          },
          step: {
            type: Number,
            value: 1,
            observer: '_stepChanged'
          },
          useZero: {
            type: Boolean,
            value: false
          },
          zeroPad: {
            type: Boolean,
            value: false
          },
          animated: {
            type: Boolean,
            value: false
          }
        },
        listeners: {
          'iron-resize': '_updateSize'
        },
        observers: [
          '_populate(count, step, useZero, _instanceId)',
          '_zeroPadChanged(zeroPad, _numbers)'
        ],
        behaviors: [
          Polymer.IronResizableBehavior
        ],
        ready: function() {
          this._currentAngle = 0;
          this._populate();
          this._selectedChanged(this.selected);
          this._instanceId = instanceCount++;
        },
        setClockHand: function(deg, animate, callback) {
          deg = normalizeAngle(deg);

          animate = typeof(animate) === 'undefined' ? this.animated : animate;
          animate = this._radius ? animate : false;

          var current = this._currentAngle;
          var rotate = getShortestAngle(current, deg);
          if (normalizeAngle(rotate) === current) {
            return this._setHandRotation(current, animate);
          }

          if (animate) {
            this._once('paper-clock-transition-end', function() {
              if (callback) {
                callback();
              }
            }.bind(this));
          }

          this.async(function() {
            this._setHandRotation(rotate, animate);
          });
        },
        _performRotation : function(angle, animate) {
          // If the angle is in transition from a previous animation, cancel it
          if (this._animationFrame) {
            window.cancelAnimationFrame(this._animationFrame);
          }

          // If the transition is animated, create an animation loop that will 
          // gradually increment towards the new angle while refreshing the hand positions
          if (animate) {
            var previousAngle = this._currentAngle;
            var angleDifference = angle - previousAngle;
          
            var animationStart = null;
            var incrementAngle = function(timestamp) {
              if (!animationStart) {
                animationStart = timestamp;
              }

              // Calculate the angle of rotation for this frame and apply it to the element
              var elapsedTime = timestamp - animationStart;
              var animationProgress = Math.min(elapsedTime / ANIMATION_DURATION, 1);
              this._currentAngle = previousAngle + (this._applyAnimationEasing(animationProgress) * angleDifference);
              this._updateHandPositions();

              // If the animation hasn't completed, request animation of the next frame
              if (animationProgress === 1) {
                this._animationFrame = null;
                this.fire('paper-clock-transition-end');
              } else {
                  this._animationFrame = window.requestAnimationFrame(incrementAngle);
              }
            }.bind(this);

            // Begin the animation loop by requesting the first frame
            this._animationFrame = window.requestAnimationFrame(incrementAngle);
          } else {
            // If the transition is not animated, set the end angle immediately
            this._currentAngle = angle;
            this._updateHandPositions();
          }
        },
        _applyAnimationEasing : function(progress) {
          return Math.pow(progress, 2);
        },
        _setHandRotation: function(deg, animate) {
          var hasLabel = ((deg / 360) * this.count) % this.step === 0 ;
          this.$.clockHand.classList[['remove', 'add'][+hasLabel]]('no-dot');
          this._performRotation(deg, animate);
        },
        _selectedChanged: function(selected) {
          if (!this.count || isNaN(selected)) {
            return;
          }
          var value = selected % this.count;
          var idx = value;

          if (idx === 0 && !this.useZero) {
            value = this.count;
          }
          if (value !== this.selected) {
            this.selected = value;
            return;
          }
          this._vibrate();
          this.setClockHand((360 / this.count) * this.selected);
        },
        _stepChanged: function(value, oldValue) {
          this._step = oldValue;
          if (!this.count || isNaN(value)) {
            return;
          }
          var minStep = Math.ceil(this.count / MAX_VISIBLE);
          if (value < minStep) {
            value = minStep;
          }
          this._step = value;
        },
        _populate: function() {
          delete this._resizedCache;
          var display, value, number;
          var $numbers = this.$.numbers;

          this.set('_numbers', []);
          this._stepChanged(this.step);

          // remove dom nodes since they'll be re-created
          while($numbers.firstChild) {
            $numbers.removeChild($numbers.firstChild);
          }

          var numbers = [];

          for (var i=0; i<this.count; i++) {
            value = i;
            display = null;
            if (i === 0 && !this.useZero) {
              value = this.count;
            }

            number = {
              index: i,
              value: value,
              display: value % this._step === 0,
              x: 0,
              y: 0,
              label: this._formatNumber(value)
            };

            number.dom = this._createNumberElement(number);
            numbers.push(number);
            $numbers.appendChild(number.dom.g);
          }
          this.set('_numbers', numbers);
          this._positionClockPoints();
          this._updateHandPositions();
        },
        _updateNumber: function(number) {
          var dom = number.dom;
          if (!dom) {
            return;
          }
          if (number.x && number.y && dom.text) {
            dom.text.setAttributeNS(null, 'x', number.x);
            dom.text.setAttributeNS(null, 'y', number.y);
            dom.text.textContent  = this._formatNumber(number.value);
            dom.textClipped.setAttributeNS(null, 'x', number.x);
            dom.textClipped.setAttributeNS(null, 'y', number.y);
            dom.textClipped.textContent = this._formatNumber(number.value);
          }
        },
        _createNumberElement: function(number) {
          // We can't use templates inside SVG elements, so we have to create
          // the numbers in dom and set up attribute bindings manually
          function create(type, classList) {
            var el = document.createElementNS(SVG_NS, type);
            if (classList) {
              classList.forEach(function(c) {
                el.classList.add(c);
              });
            }
            if (!Polymer.Settings.useNativeShadow) {
              el.classList.add('style-scope');
              el.classList.add('habitlab-paper-clock-selector');
            }
            return el;
          }

          var g = create('g', ['number']);
          var text = null;
          var textClipped = null;
          if (number.display) {
            text = create('text');
            text.textContent = number.label;
            g.appendChild(text);
            textClipped = create('text', ['clipped']);
            textClipped.textContent = number.label;
            textClipped.setAttribute("clip-path", "url(#handClip" + this._instanceId + ")");
            g.appendChild(textClipped);
          }

          return {g: g, text: text, textClipped: textClipped};
        },
        _updateSize: function() {
          var radius = Math.min(this.offsetWidth, this.offsetHeight) / 2;

          this._radius = radius;
          this._selectorSize = 20;
          this._selectorDotSize = 3;
          this._padding = 2;
          this._positionClockPoints();

          this._resizedCache = this._radius;
          this.$.clock.style.width = (radius * 2) + 'px';
          this.$.clock.style.height = (radius * 2) + 'px';
          this._updateHandPositions();

          this.async(function() {
            // FIXME: this is hacky, but for some reason we need to wait a bit
            // to get an accurate measurement
            this._bounds = this.$.face.getBoundingClientRect();

            // account for page scrolling
            this._bounds = {
                top: this._bounds.top + window.pageYOffset,
                right: this._bounds.right + window.pageXOffset,
                bottom: this._bounds.bottom + window.pageYOffset,
                left: this._bounds.left + window.pageXOffset,
                width: this._bounds.width
            }
          }.bind(this), 150);
        },
        _positionClockPoints: function() {
          if (!this._radius) {
            return;
          }

          this._selectorOuter = this._radius - this._padding * 2;
          this._selectorInner = this._selectorOuter - this._selectorSize * 2;
          this._selectorCenter = this._selectorOuter - this._selectorSize;

          var numbers = this._numbers;
          var angle = (360 / this.count) * RADIANS_PER_DEGREE;

          var a, number;
          for (var i=0; i<this.count; i++) {
            a = angle * i;
            number = numbers[i];
            number.x = this._radius + (Math.sin(a) * this._selectorCenter);
            number.y = this._radius - (Math.cos(a) * this._selectorCenter);
            this._updateNumber(number);
          }
        },
        _notifyNumberChanged: function(path) {
          var propPath, props = ['x', 'y'];
          for (var i=0; i<props.length; i++) {
            propPath = path + '.' + props[i];
            if (this.get(propPath)) {
              this.notifyPath(propPath, this.get(propPath));
            }
          }
        },
        _getSelectArea: function(radius, outer, inner) {
          return '\n' +
            'M ' + (radius - outer) + ' ' + radius + '\n' + 
            'A ' + outer + ' ' + outer + ' 0 0 0 ' + (radius + outer) + ' ' + radius + '\n' + 
            'A ' + outer + ' ' + outer + ' 0 0 0 ' + (radius - outer) + ' ' + radius + '\n' + 
            'M ' + (radius - inner) + ' ' + radius + '\n' + 
            'A ' + inner + ' ' + inner + ' 0 0 1 ' + (radius + inner) + ' ' + radius + '\n'+ 
            'A ' + inner + ' ' + inner + ' 0 0 1 ' + (radius - inner) + ' ' + radius;
        },
        _onTouch: function(event) {
          var x = event.detail.x + window.pageXOffset - this._bounds.left - this._radius;
          var y = event.detail.y + window.pageYOffset - this._bounds.top - this._radius;

          /* only rotate while in the touch area */
          var distance = Math.abs(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
          if (distance < this._selectorInner || distance > this._selectorOuter) {
            return;
          }

          /* don't animate while tracking */
          this.animated = event.type !== 'track';

          // use coords to find angle from 12 o'clock position
          var theta = Math.atan(y / x);
          theta = (Math.PI / 2) + (x < 0 ? theta + Math.PI : theta);
          var intervalRad = (360 / this.count) * RADIANS_PER_DEGREE;


          // determine the selected number
          this.selected = Math.round(theta / intervalRad);

          /* only fire selected when we've tapped or stopped tracking */
          if (event.type === 'tap' || event.detail.state === 'end') {
            this.fire('paper-clock-selected', {value: this.selected, animated: this.animated});
          }
        },
        _formatNumber: function(value) {
          if (this.zeroPad) {
            return ('0' + value).substr(-2);
          }
          return value.toString();
        },
        _getNumberClass: function(pfx, n, selected) {
          var cssClass = pfx;
          if (selected.value === n.value) {
            cssClass += ' selected';
          }
          return cssClass;
        },
        _vibrate: function() {
          this.debounce('vibrate', function() {
            if (navigator.vibrate) {
              navigator.vibrate(10);
            }
          });
        },
        _zeroPadChanged: function() {
          this._numbers.forEach(function(number) {
            this._updateNumber(number);
          }.bind(this));
        },
        _once: function(eventName, callback, node) {
          node = node || this;
          function onceCallback() {
            node.removeEventListener(eventName, onceCallback);
            callback.apply(null, arguments);
          }
          node.addEventListener(eventName, onceCallback);
        },

        _updateHandPositions : function() {
          if (!this._radius) {
            return;
          }

          var radians = this._currentAngle * RADIANS_PER_DEGREE;
          this._handX = this._radius + (Math.sin(radians) * this._selectorCenter);
          this._handY = this._radius - (Math.cos(radians) * this._selectorCenter);
        },

      });
    })();
  

/***/ }),

/***/ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector.deps.js":
/*!*****************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector.deps.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js */ "./src/bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-time-picker/classlist-shim.deps.js */ "./src/bower_components/habitlab-paper-time-picker/classlist-shim.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector.html */ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector.html"), 'bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector.html')
__webpack_require__(/*! bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector-0 */ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector.html":
/*!**************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-resizable-behavior/iron-resizable-behavior.html> <link rel=import href=classlist-shim.html> </head><body><habitlab-dom-module id=habitlab-paper-clock-selector> <template> <style>:host *{-webkit-tap-highlight-color:transparent}:host{display:block;@apply(--paper-font-body1);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;@apply(--layout-horizontal);@apply(--layout-center-center);}#clock{display:block;overflow:visible}#clock *{pointer-events:fill}#face{fill:var(--divider-color);cursor:default}.line{stroke-width:2}.dot{fill:var(--default-primary-color)}.line{stroke:var(--default-primary-color)}.clock-hand{z-index:1}.disc-large{z-index:2;fill:var(--default-primary-color)}.disc-small{fill:var(--text-primary-color)}.clock-hand.no-dot .disc-small{fill:none;stroke:none}.number text{z-index:3;fill:var(--primary-text-color);@apply(--paper-font-subhead);pointer-events:none;dominant-baseline:middle;text-align:center;text-anchor:middle}.number text.clipped{z-index:4;fill:var(--text-primary-color)}.select-area{cursor:pointer;fill-opacity:0}</style> <svg version=1.1 id=clock> <defs> <clipPath id=handClip[[_instanceId]]> <circle id=clipCircle r$={{_selectorSize}} cx$={{_handX}} cy$={{_handY}}></circle> </clipPath> </defs> <circle id=face class=bg r$={{_radius}} cx$={{_radius}} cy$={{_radius}}></circle> <g id=clockHand class=clock-hand> <circle class=dot r=2 cx$={{_radius}} cy$={{_radius}}></circle> <line class=line x1$={{_radius}} y1$={{_radius}} x2$={{_handX}} y2$={{_handY}}></line> <circle class=disc-large r$={{_selectorSize}} cx$={{_handX}} cy$={{_handY}}></circle> <circle class=disc-small r$={{_selectorDotSize}} cx$={{_handX}} cy$={{_handY}}></circle> </g> <g id=numbers></g> <path class=select-area on-tap=_onTouch on-track=_onTouch d$=\"{{_getSelectArea(_radius, _selectorInner, _selectorOuter)}}\"></path> </svg> </template> <script src=habitlab-paper-clock-selector-0.js></script> </habitlab-dom-module> </body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-0.js":
/*!***********************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-0.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    (function() {
      function warn() {
        if (window.console) {
          console.warn.apply(console, arguments);
        }
      }

      Polymer({
        is: 'habitlab-paper-time-picker',
        properties: {
          /**
           * The selected time
           */
          time: {
            type: String,
            value: '00:00',
            notify: true,
            observer: '_timeChanged' 
          },
          /**
           * The time value as the number of minutes(if enableSeconds then number of seconds) from midnight
           */
          rawValue: {
            type: Number,
            value: 0,
            notify: true,
            observer: '_rawValueChanged'
          },
          /**
           * The current 24-hour value (0-24)
           */
          hour: {
            type: Number,
            observer: '_hourChanged',
            notify: true,
            value: 0
          },
          /**
           * The current 12-hour value (0-12)
           */
          hour12: {
            type: Number,
            notify: true,
            observer: '_hour12Changed'
          },
          /**
           * The current minute (0-59)
           */
          minute: {
            type: Number,
            notify: true,
            observer: '_minuteChanged',
            value: 0
          },
          /**
           * The current second (0-59)
           */
           second: {
            type: Number,
            notify: true,
            observer: '_secondChanged',
            value: 0
          },
          /**
           * The current period ('AM', 'PM')
           */
          period: {
            type: String,
            notify: true,
            observer: '_periodChanged',
            value: 'AM'
          },
          /**
           * The current selector view ('hours' or 'minutes')
           */
          view: {
            type: String,
            notify: true,
            value: 'hours',
            observer: '_viewChanged'
          },
          /**
           * Maximum screen width at which the picker uses a vertical layout
           */
          responsiveWidth: {
            type: String,
            value: '560px'
          },
          /**
           * Force narrow layout
           */
          forceNarrow: {
            type: Boolean,
            value: false
          },
          /**
           * Whether or not to animate the clock hand between selections
           */
          animated: {
            type: Boolean,
            value: false
          },
          narrow: {
            type: Boolean,
            reflectToAttribute: true,
            value: false,
            notify: true,
          },
          isTouch: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
          },
          enableSeconds: {
            type: Boolean,
            value: false
          },
          _queryMatches: {
            type: Boolean,
            value: false,
            observer: '_computeNarrow'
          }
        },
        behaviors: [
          Polymer.IronResizableBehavior
        ],
        observers: [
          '_updateTime(hour, minute, second)'
        ],
        listeners: {
          'iron-resize': '_resizeHandler',
          'paper-clock-selected': '_onClockSelected'
        },
        ready: function() {
          this.isTouch = 'ontouchstart' in window;
          this.view = 'hours';
        },
        _timeChanged: function(time) {
          if (!time) {
            this.rawValue = 0;
            return;
          }

          var parsed = this.parseTime(time);
          var cleanedTime = this.formatTime(parsed.hour, parsed.minute, parsed.second);
          if (cleanedTime !== time) {
            this.time = cleanedTime;
            return;
          }
          var rawValue = (parsed.hour * 60) + parsed.minute;
          if (this.enableSeconds) {
            rawValue = (rawValue * 60) + parsed.second;
          }
          this.rawValue = rawValue;
        },
        _updateTime: function(hour, minute, second) {
          var rawValue = (hour * 60) + minute;
          if (this.enableSeconds) {
            rawValue = (rawValue * 60) + second;
          }
          this.rawValue = rawValue;
        },
        formatTime: function(hour, minute, second) {
          var period = (hour % 24) < 12 ? 'AM' : 'PM';
          hour = hour % 12 || 12;
          minute = ('0' + minute).substr(-2);
          second = ('0' + second).substr(-2);
          if (this.enableSeconds) {
            minute += ':' + second;
          }
          return hour + ':' + minute + ' ' + period;
        },
        parseTime: function(timeString) {
          var pattern = /^\s*(\d{1,2}):?(\d{2})(:?(\d{2}))?(\s*([AaPp])\.?[Mm]\.?|[A-Z])?\s*$/;
          var match = timeString.match(pattern);
          if (!match) {
            warn('Invalid time:', timeString);
            return;
          }
          var hour = parseInt(match[1]);
          var minute = parseInt(match[2]);
          var second = match[4] ? parseInt(match[4]) : 0;
          var period = match[6] ? (match[6][0].toUpperCase() + 'M') : 'AM';
          if (period === 'PM' && hour < 12) {
            hour = (hour + 12) % 24;
          } else if (period === 'AM' && hour === 12) {
            hour = 0;
          }
          return {hour: hour, minute: minute, second: second};
        },
        togglePeriod: function() {
          this.period = (this.period === 'AM') ? 'PM' : 'AM';
        },
        _rawValueChanged: function(value, oldValue) {
          if (isNaN(parseInt(value))) {
            this.rawValue = oldValue;
            return;
          }
          if (this.enableSeconds) {
            this.hour = Math.floor(value / 3600);
            this.minute = Math.floor(value / 60) % 60;
            this.second = value % 60;
          } else {
            this.hour = Math.floor(value / 60);
            this.minute = value % 60;
            this.second = 0;
          }
          this.time = this.formatTime(this.hour, this.minute, this.second);
        },
        _hour12Changed: function(hour12) {
          var add = (this.period === 'PM' ? 12 : 0);
          this.hour = ((hour12 % 12) + add) % 24;
        },
        _hourChanged: function(hour, oldValue) {
          hour = parseInt(hour);
          if (isNaN(hour) && !hour) {
            return;
          }
          if (isNaN(hour)) {
            warn('Invalid number:', hour);
            this.hour = oldValue;
            return;
          }
          hour = parseFloat(hour) % 24;
          this.hour = hour;
          this.hour12 = this._twelveHour(hour);
          this.period = ['PM', 'AM'][+(hour < 12)];
        },
        _minuteChanged: function(minute) {
          minute = parseFloat(minute) % 60;
          this.minute = minute;
        },
        _secondChanged: function(second) {
          second = parseFloat(second) % 60;
          this.second = second;
        },
        _periodChanged: function(period) {
          if (isNaN(parseInt(this.hour)) || isNaN(parseInt(this.minute))) {
            return;
          }
          if (period === 'AM' &&  this.hour >= 12) {
            this.hour -= 12;
          } else if (period === 'PM' && this.hour < 12) {
            this.hour += 12;
          }
        },
        _zeroPad: function(value, length) {
          if (value === undefined || isNaN(value) || isNaN(length)) {
            return;
          }
          return ('0' + value).substr(-length);
        },
        _twelveHour: function(hour) {
          return hour % 12 || 12;
        },
        _isEqual: function(a, b) {
          return a === b;
        },
        _getMediaQuery: function(forceNarrow, responsiveWidth) {
          return '(max-width: ' + (forceNarrow ? '' : responsiveWidth) + ')';
        },
        _computeNarrow: function() {
          this.set('narrow', this._queryMatches || this.forceNarrow);
        },
        _viewChanged: function(toView, fromView) {
          this.$.pages._notifyPageResize();

          // prevent the clock-hand transition when selecting, otherwise the 
          // extra movement would be confusing
          if (this._selecting || !fromView || !toView || !this.animated) {
            return;
          }

          var clocks = {'hours': this.$.hourClock, 'minutes': this.$.minuteClock, 'seconds': this.$.secondClock};
          var from = clocks[fromView];
          var to = clocks[toView];
          var fromAngle = (360 / from.count) * from.selected;
          var toAngle = (360 / to.count) * to.selected;

          // transition both clock hands at the same time
          to.setClockHand(fromAngle, false);
          from.setClockHand(toAngle);

          this.async(function() {
            to.setClockHand(toAngle, true, function() {
              this.async(function() {
                from.setClockHand(fromAngle, false);
              }, 200);
            }.bind(this));
          }.bind(this));
        },
        _onClockSelected: function(event) {
          if (this.view === 'hours') {

            var showMinutes = function() {
              this.async(function() {
                this._selecting = true;
                this.view = 'minutes';
                this._selecting = false;
              }.bind(this), 100);
              this.$.hourClock.removeEventListener('paper-clock-transition-end', showMinutes);
            }.bind(this);

            if (event.detail.animated) {
              this.$.hourClock.addEventListener('paper-clock-transition-end', showMinutes);
            } else {
              showMinutes();
            }

            if (this.hour12 !== event.detail.value) {
              this.hour12 = event.detail.value;
            } else {
              // show minutes if same hour is selected
              showMinutes();
            }
          } else if (this.view === 'minutes' && this.enableSeconds) {

            var showSeconds = function() {
              this.async(function() {
                this._selecting = true;
                this.view = 'seconds';
                this._selecting = false;
              }.bind(this), 100);
              this.$.minuteClock.removeEventListener('paper-clock-transition-end', showSeconds);
            }.bind(this);

            if (event.detail.animated) {
              this.$.minuteClock.addEventListener('paper-clock-transition-end', showSeconds);
            } else {
              showSeconds();
            }

            if (this.minute !== event.detail.value) {
              this.minute = event.detail.value;
            } else {
              // show seconds if same minute is selected
              showSeconds();
            }
          }
        },
        _resizeHandler: function() {
          if (!this.offsetWidth || this._resizing) {
            return;
          }
          this.updateStyles();
          this.async(function() {
            this._resizing = true;
            this.$.pages._notifyPageResize();
            this._resizing = false;
          }.bind(this));
        }
      });
    })();
  

/***/ }),

/***/ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-dialog-style.deps.js":
/*!***************************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-dialog-style.deps.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-dialog-style.html */ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-dialog-style.html"), 'bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-dialog-style.html')


/***/ }),

/***/ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-dialog-style.html":
/*!************************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-dialog-style.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style is=habitlab-custom-style>:root{--habitlab-paper-time-picker-dialog:{margin:0;max-height:520px!important};--habitlab-paper-time-picker-dialog-picker:{margin-top:0!important;padding:0};--habitlab-paper-time-picker-dialog-calendar:{padding-bottom:0};--habitlab-paper-time-picker-dialog-heading:{margin-bottom:-56px};}</style> <habitlab-dom-module id=habitlab-paper-time-picker-dialog-style> <template> <style>.habitlab-paper-time-picker-dialog{@apply(--habitlab-paper-time-picker-dialog);}.habitlab-paper-time-picker-dialog>habitlab-paper-time-picker{--paper-calendar:{@apply(--habitlab-paper-time-picker-dialog-calendar);};@apply(--habitlab-paper-time-picker-dialog-picker);}.habitlab-paper-time-picker-dialog>habitlab-paper-time-picker:not([narrow]){--habitlab-paper-time-picker-heading:{@apply(--habitlab-paper-time-picker-dialog-heading);};}</style> </template> </habitlab-dom-module> ";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.deps.js":
/*!**************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.deps.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-iron-media-query/habitlab-iron-media-query.deps.js */ "./src/bower_components/habitlab-iron-media-query/habitlab-iron-media-query.deps.js")
__webpack_require__(/*! bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js */ "./src/bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js")
__webpack_require__(/*! bower_components/habitlab-iron-selector/habitlab-iron-selector.deps.js */ "./src/bower_components/habitlab-iron-selector/habitlab-iron-selector.deps.js")
__webpack_require__(/*! bower_components/iron-flex-layout/iron-flex-layout.deps.js */ "./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js")
__webpack_require__(/*! bower_components/paper-styles/typography.deps.js */ "./src/bower_components/paper-styles/typography.deps.js")
__webpack_require__(/*! bower_components/neon-animation/habitlab-neon-animated-pages.deps.js */ "./src/bower_components/neon-animation/habitlab-neon-animated-pages.deps.js")
__webpack_require__(/*! bower_components/neon-animation/habitlab-neon-animatable.deps.js */ "./src/bower_components/neon-animation/habitlab-neon-animatable.deps.js")
__webpack_require__(/*! bower_components/neon-animation/animations/habitlab-fade-in-animation.deps.js */ "./src/bower_components/neon-animation/animations/habitlab-fade-in-animation.deps.js")
__webpack_require__(/*! bower_components/neon-animation/animations/habitlab-fade-out-animation.deps.js */ "./src/bower_components/neon-animation/animations/habitlab-fade-out-animation.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector.deps.js */ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-clock-selector.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-dialog-style.deps.js */ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-dialog-style.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.html */ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.html"), 'bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.html')
__webpack_require__(/*! bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-0 */ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.html":
/*!***********************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-time-picker/habitlab-paper-time-picker.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../habitlab-iron-media-query/habitlab-iron-media-query.html> <link rel=import href=../iron-resizable-behavior/iron-resizable-behavior.html> <link rel=import href=../habitlab-iron-selector/habitlab-iron-selector.html> <link rel=import href=../iron-flex-layout/iron-flex-layout.html> <link rel=import href=../paper-styles/typography.html> <link rel=import href=../neon-animation/habitlab-neon-animated-pages.html> <link rel=import href=../neon-animation/habitlab-neon-animatable.html> <link rel=import href=../neon-animation/animations/habitlab-fade-in-animation.html> <link rel=import href=../neon-animation/animations/habitlab-fade-out-animation.html> <link rel=import href=habitlab-paper-clock-selector.html> <link rel=import href=habitlab-paper-time-picker-dialog-style.html> <style is=habitlab-custom-style include=habitlab-paper-time-picker-dialog-style></style> </head><body><habitlab-dom-module id=habitlab-paper-time-picker> <template> <style>:host *{-webkit-tap-highlight-color:transparent}:host{display:block;background-color:var(--primary-background-color);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;@apply(--paper-font-body1);font-size:14px}#timePicker{width:512px;height:304px;@apply(--layout-horizontal);@apply(--habitlab-paper-time-picker);}#heading{width:168px;padding:16px;@apply(--layout-vertical);@apply(--habitlab-paper-time-picker-heading);}:host([enable-seconds]) #heading{width:200px}#clockArea{padding:20px}:host([narrow]) #timePicker{width:328px;height:428px;@apply(--layout-vertical);}:host([narrow]) #heading{width:auto;height:96px;padding:0 48px;@apply(--layout-horizontal);@apply(--layout-end-justified);}:host([enable-seconds][narrow]) #heading{padding:0 16px}:host([narrow]) #heading .time{margin-top:6px;@apply(--paper-font-display3);}:host([narrow]) #timePicker #heading .time{font-size:60px;letter-spacing:.1ex!important}:host([narrow]) #heading .period{margin-left:12px;margin-top:12px}:host([narrow]) #clockArea{padding:16px;@apply(--habitlab-paper-time-picker-clock);}#heading{box-sizing:border-box;color:var(--light-primary-color);background:var(--default-primary-color);@apply(--layout-vertical);@apply(--layout-center-center);}#heading>habitlab-iron-selector{margin-top:10px}#heading .time{@apply(--paper-font-display2);@apply(--layout-horizontal);@apply(--layout-end-justified);width:5.34ex;letter-spacing:.13ex!important}:host([enable-seconds]) #heading .time{width:8.5ex;font-size:40px}#heading .iron-selected{color:var(--text-primary-color)}#heading .period{font-weight:600;@apply(--paper-font-subhead);}#heading .period div,#heading .time div{cursor:pointer}#clockArea{background:var(--default-background-color);overflow:hidden;@apply(--layout-flex);@apply(--habitlab-paper-time-picker-clock);@apply(--layout-vertical);}#clockArea>div{@apply(--layout-flex);position:relative}.clock{@apply(--layout-fit);}.clock-animatable{@apply(--layout-fit);}</style> <habitlab-iron-media-query query=\"{{_getMediaQuery(forceNarrow, responsiveWidth)}}\" query-matches={{_queryMatches}}></habitlab-iron-media-query> <div id=timePicker> <div id=heading> <habitlab-iron-selector class=time selectable=[name] attr-for-selected=name selected={{view}}> <div name=hours class=hour>{{hour12}}</div> <div class=sep>:</div> <div name=minutes class=minute>{{_zeroPad(minute, 2)}}</div> <template is=habitlab-dom-if if=\"[[ enableSeconds ]]\"> <div class=sep>:</div> <div name=seconds class=second>{{_zeroPad(second, 2)}}</div> </template> </habitlab-iron-selector> <habitlab-iron-selector class=period attr-for-selected=name selected={{period}}> <div name=AM>AM</div> <div name=PM>PM</div> </habitlab-iron-selector> </div> <div id=clockArea> <div> <habitlab-neon-animated-pages id=pages class=clock-animatable attr-for-selected=name selected={{view}} entry-animation=habitlab-fade-in-animation exit-animation=habitlab-fade-out-animation> <habitlab-neon-animatable class=clock-animatable name=hours> <habitlab-paper-clock-selector class=clock id=hourClock count=12 step=1 animated=[[animated]] selected={{hour12}}></habitlab-paper-clock-selector> </habitlab-neon-animatable> <habitlab-neon-animatable class=clock-animatable name=minutes> <habitlab-paper-clock-selector class=clock id=minuteClock count=60 step=5 animated=[[animated]] use-zero=\"\" zero-pad=\"\" selected={{minute}}></habitlab-paper-clock-selector> </habitlab-neon-animatable> <template is=habitlab-dom-if if=\"[[ enableSeconds ]]\"> <habitlab-neon-animatable class=clock-animatable name=seconds> <habitlab-paper-clock-selector class=clock id=secondClock count=60 step=5 animated=[[animated]] use-zero=\"\" zero-pad=\"\" selected={{second}}></habitlab-paper-clock-selector> </habitlab-neon-animatable> </template> </habitlab-neon-animated-pages> </div> </div> </div> </template> <script src=habitlab-paper-time-picker-0.js></script> </habitlab-dom-module> </body></html>";

/***/ }),

/***/ "./src/components/call-to-action-button.deps.js":
/*!******************************************************!*\
  !*** ./src/components/call-to-action-button.deps.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps.js */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")
import_dom_modules(__webpack_require__(/*! components/call-to-action-button.html */ "./src/components/call-to-action-button.html"), 'components/call-to-action-button.html')
__webpack_require__(/*! components/call-to-action-button */ "./src/components/call-to-action-button.js")


/***/ }),

/***/ "./src/components/call-to-action-button.html":
/*!***************************************************!*\
  !*** ./src/components/call-to-action-button.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <habitlab-dom-module id=call-to-action-button> <template> <style>:host{display:var(--call-to-action-button-display,inline-block);min-height:var(--call-to-action-button-min-height,38px);width:var(--call-to-action-button-width);margin:var(--call-to-action-button-margin,0 0 0 0)}.call-to-action-button{cursor:pointer;color:var(--call-to-action-button-color,#fff);background-color:var(--call-to-action-button-bg-color,#415d67);margin:0 auto;width:100%;height:100%;box-shadow:var(--call-to-action-button-shadow,2px 2px 2px #888)}</style> <habitlab-paper-button class=call-to-action-button on-click=buttonClicked>{{buttonText}}</habitlab-paper-button> </template> <script src=call-to-action-button.js></script> </habitlab-dom-module>";

/***/ }),

/***/ "./src/components/call-to-action-button.js":
/*!*************************************************!*\
  !*** ./src/components/call-to-action-button.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {polymer_ext} = __webpack_require__(/*! libs_frontend/polymer_utils */ "./src/libs_frontend/polymer_utils.ls");
const {log_action} = __webpack_require__(/*! libs_frontend/intervention_log_utils */ "./src/libs_frontend/intervention_log_utils.ls")
const {
  get_intervention, 
  get_goal_info
} = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls")

const {
  close_tab_with_id
} = __webpack_require__(/*! libs_common/tab_utils */ "./src/generated_libs/libs_frontend/tab_utils.js")

const {
  get_tab_id
} = __webpack_require__ (/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls")

polymer_ext({
  is: 'call-to-action-button',
  properties: {
    goal: {
      type: Object
    },
    buttonText: {
      type: String,
      computed: 'computeButtonText(goal)'
    }
  },
  ready: function() {
    this.goal = get_goal_info()
  },
  buttonClicked: function() {
    if (this.goal.is_positive) {
      log_action({'positive': 'habitlab-positive-goal-site-button clicked'})
      var domain = this.goal.domain
      if (domain.search("http") == -1) {
        domain = 'https://' + domain
      }
      window.location.href = domain
    } else {
      log_action({'positive': 'habitlab-close-tab-button clicked'})
      close_tab_with_id(get_tab_id()) 
    }
  },
  computeButtonText: function(goal) {
    if (goal.call_to_action != null) {
      // Should be max 21 characters
      return goal.call_to_action
    } else if (!goal.is_positive) {
      var sitename_printable = get_goal_info().sitename_printable
      return "Close " + sitename_printable
    } else {
      // Positive goal with no call to action text set -> just use its description for now
      return goal.description
    }
  }
});

/***/ })

}]);