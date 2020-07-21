System.register([], ((t) => {
  'use strict';

  return { execute() {
    t({ S: T,
      a() { let t;return (t = _t()).observe.apply(t, arguments); },
      b(t, e, n) {
        const i = n || HTMLElement,
          s = t.querySelector(e);if (s instanceof i) return s;throw new QueryError(`Element not found: <${i.name}> ${e}`);
      },
      c(t, e, n) {
        const i = n || HTMLElement,
          s = t.closest(e);if (s instanceof i) return s;throw new QueryError(`Element not found: <${i.name}> ${e}`);
      },
      d: k,
      f(t, e, n) { return t.dispatchEvent(new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n })); },
      /**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */g(t, e) { const n = t.getAttribute(e);if (n != null) return n;throw new QueryError(`Attribute not found on element: ${e}`); },
      /**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */k(t = 0, e = {}) { return (n, i, s) => { if (!s || typeof s.value !== 'function') throw new Error('debounce can only decorate functions');const r = s.value;s.value = k(r, t, e), Object.defineProperty(n, i, s); }; },
      n(t, e, n) {
        const i = n || HTMLInputElement,
          s = t.elements.namedItem(e);if (s instanceof i) return s;throw new QueryError(`Element not found by name: <${i.name}> ${e}`);
      },
      o(t, e, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          s = !!i.capture,
          r = s ? B : q,
          o = r[t];o || (o = new T(), r[t] = o, document.addEventListener(t, Y, s));o.add(e, n);
      },
      q(t, e, n) {
        const i = n || HTMLElement,
          s = [];for (const r of t.querySelectorAll(e))r instanceof i && s.push(r);return s;
      },
      t: A });class QueryError extends Error {constructor(t) { super(t), this.name = 'QueryError', this.framesToPop = 1; }} const e = new WeakMap(),
      n = (t) => typeof t === 'function' && e.has(t),
      i = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
      s = (t, e, n = null) => { for (;e !== n;) { const n = e.nextSibling;t.removeChild(e), e = n; } },
      r = {},
      o = {},
      a = `{{lit-${String(Math.random()).slice(2)}}}`,
      c = `\x3c!--${a}--\x3e`,
      l = new RegExp(`${a}|${c}`);class Template {
      constructor(t, e) {
        this.parts = [], this.element = e;const n = [],
          i = [],
          s = document.createTreeWalker(e.content, 133, null, !1);let r = 0,
          o = -1,
          c = 0;const { strings: d, values: { length: f } } = t;for (;c < f;) {
          const t = s.nextNode();if (t !== null) {
            if (o++, t.nodeType === 1) {
              if (t.hasAttributes()) {
                const e = t.attributes,
                  { length: n } = e;let i = 0;for (let t = 0;t < n;t++)u(e[t].name, '$lit$') && i++;for (;i-- > 0;) {
                  const e = d[c],
                    n = m.exec(e)[2],
                    i = `${n.toLowerCase()}$lit$`,
                    s = t.getAttribute(i);t.removeAttribute(i);const r = s.split(l);this.parts.push({ type: 'attribute', index: o, name: n, strings: r }), c += r.length - 1;
                }
              }t.tagName === 'TEMPLATE' && (i.push(t), s.currentNode = t.content);
            } else if (t.nodeType === 3) {
              const e = t.data;if (e.indexOf(a) >= 0) {
                const i = t.parentNode,
                  s = e.split(l),
                  r = s.length - 1;for (let e = 0;e < r;e++) {
                  let n,
                    r = s[e];if (r === '')n = h();else { const t = m.exec(r);t !== null && u(t[2], '$lit$') && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -'$lit$'.length) + t[3]), n = document.createTextNode(r); }i.insertBefore(n, t), this.parts.push({ type: 'node', index: ++o });
                }s[r] === '' ? (i.insertBefore(h(), t), n.push(t)) : t.data = s[r], c += r;
              }
            } else if (t.nodeType === 8) if (t.data === a) { const e = t.parentNode;t.previousSibling !== null && o !== r || (o++, e.insertBefore(h(), t)), r = o, this.parts.push({ type: 'node', index: o }), t.nextSibling === null ? t.data = '' : (n.push(t), o--), c++; } else { let e = -1;for (;(e = t.data.indexOf(a, e + 1)) !== -1;) this.parts.push({ type: 'node', index: -1 }), c++; }
          } else s.currentNode = i.pop();
        } for (const a of n)a.parentNode.removeChild(a);
      }
    } const u = (t, e) => { const n = t.length - e.length;return n >= 0 && t.slice(n) === e; },
      d = (t) => t.index !== -1,
      h = () => document.createComment(''),
      m = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    /**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */
    class TemplateInstance {
      constructor(t, e, n) { this.__parts = [], this.template = t, this.processor = e, this.options = n; }

      update(t) { let e = 0;for (const n of this.__parts) void 0 !== n && n.setValue(t[e]), e++;for (const n of this.__parts) void 0 !== n && n.commit(); }

      _clone() {
        const t = i ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
          e = [],
          n = this.template.parts,
          s = document.createTreeWalker(t, 133, null, !1);let r,
          o = 0,
          a = 0,
          c = s.nextNode();for (;o < n.length;) if (r = n[o], d(r)) { for (;a < r.index;)a++, c.nodeName === 'TEMPLATE' && (e.push(c), s.currentNode = c.content), (c = s.nextNode()) === null && (s.currentNode = e.pop(), c = s.nextNode());if (r.type === 'node') { const t = this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling), this.__parts.push(t); } else this.__parts.push(...this.processor.handleAttributeExpressions(c, r.name, r.strings, this.options));o++; } else this.__parts.push(void 0), o++;return i && (document.adoptNode(t), customElements.upgrade(t)), t;
      }
    }
    /**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */const f = ` ${a} `;class TemplateResult {
      constructor(t, e, n, i) { this.strings = t, this.values = e, this.type = n, this.processor = i; }

      getHTML() {
        const t = this.strings.length - 1;let e = '',
          n = !1;for (let i = 0;i < t;i++) {
          const t = this.strings[i],
            s = t.lastIndexOf('\x3c!--');n = (s > -1 || n) && t.indexOf('--\x3e', s + 1) === -1;const r = m.exec(t);e += r === null ? t + (n ? f : c) : `${t.substr(0, r.index) + r[1] + r[2]}$lit$${r[3]}${a}`;
        } return e += this.strings[t], e;
      }

      getTemplateElement() { const t = document.createElement('template');return t.innerHTML = this.getHTML(), t; }
    }
    /**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */const p = (t) => t === null || !(typeof t === 'object' || typeof t === 'function'),
      g = (t) => Array.isArray(t) || !(!t || !t[Symbol.iterator]);class AttributeCommitter {
      constructor(t, e, n) { this.dirty = !0, this.element = t, this.name = e, this.strings = n, this.parts = [];for (let i = 0;i < n.length - 1;i++) this.parts[i] = this._createPart(); }

      _createPart() { return new AttributePart(this); }

      _getValue() {
        const t = this.strings,
          e = t.length - 1;let n = '';for (let i = 0;i < e;i++) { n += t[i];const e = this.parts[i];if (void 0 !== e) { const t = e.value;if (p(t) || !g(t))n += typeof t === 'string' ? t : String(t);else for (const e of t)n += typeof e === 'string' ? e : String(e); } } return n += t[e], n;
      }

      commit() { this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue())); }
    } class AttributePart {
      constructor(t) { this.value = void 0, this.committer = t; }

      setValue(t) { t === r || p(t) && t === this.value || (this.value = t, n(t) || (this.committer.dirty = !0)); }

      commit() { for (;n(this.value);) { const t = this.value;this.value = r, t(this); } this.value !== r && this.committer.commit(); }
    } class NodePart {
      constructor(t) { this.value = void 0, this.__pendingValue = void 0, this.options = t; }

      appendInto(t) { this.startNode = t.appendChild(h()), this.endNode = t.appendChild(h()); }

      insertAfterNode(t) { this.startNode = t, this.endNode = t.nextSibling; }

      appendIntoPart(t) { t.__insert(this.startNode = h()), t.__insert(this.endNode = h()); }

      insertAfterPart(t) { t.__insert(this.startNode = h()), this.endNode = t.endNode, t.endNode = this.startNode; }

      setValue(t) { this.__pendingValue = t; }

      commit() { for (;n(this.__pendingValue);) { const t = this.__pendingValue;this.__pendingValue = r, t(this); } const t = this.__pendingValue;t !== r && (p(t) ? t !== this.value && this.__commitText(t) : t instanceof TemplateResult ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : g(t) ? this.__commitIterable(t) : t === o ? (this.value = o, this.clear()) : this.__commitText(t)); }

      __insert(t) { this.endNode.parentNode.insertBefore(t, this.endNode); }

      __commitNode(t) { this.value !== t && (this.clear(), this.__insert(t), this.value = t); }

      __commitText(t) {
        const e = this.startNode.nextSibling,
          n = typeof (t = t == null ? '' : t) === 'string' ? t : String(t);e === this.endNode.previousSibling && e.nodeType === 3 ? e.data = n : this.__commitNode(document.createTextNode(n)), this.value = t;
      }

      __commitTemplateResult(t) {
        const e = this.options.templateFactory(t);if (this.value instanceof TemplateInstance && this.value.template === e) this.value.update(t.values);else {
          const n = new TemplateInstance(e, t.processor, this.options),
            i = n._clone();n.update(t.values), this.__commitNode(i), this.value = n;
        }
      }

      __commitIterable(t) {
        Array.isArray(this.value) || (this.value = [], this.clear());const e = this.value;let n,
          i = 0;for (const s of t)n = e[i], void 0 === n && (n = new NodePart(this.options), e.push(n), i === 0 ? n.appendIntoPart(this) : n.insertAfterPart(e[i - 1])), n.setValue(s), n.commit(), i++;i < e.length && (e.length = i, this.clear(n && n.endNode));
      }

      clear(t = this.startNode) { s(this.startNode.parentNode, t.nextSibling, this.endNode); }
    } class BooleanAttributePart {
      constructor(t, e, n) { if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== '' || n[1] !== '') throw new Error('Boolean attributes can only contain a single expression');this.element = t, this.name = e, this.strings = n; }

      setValue(t) { this.__pendingValue = t; }

      commit() { for (;n(this.__pendingValue);) { const t = this.__pendingValue;this.__pendingValue = r, t(this); } if (this.__pendingValue === r) return;const t = !!this.__pendingValue;this.value !== t && (t ? this.element.setAttribute(this.name, '') : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = r; }
    } class PropertyCommitter extends AttributeCommitter {
      constructor(t, e, n) { super(t, e, n), this.single = n.length === 2 && n[0] === '' && n[1] === ''; }

      _createPart() { return new PropertyPart(this); }

      _getValue() { return this.single ? this.parts[0].value : super._getValue(); }

      commit() { this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue()); }
    } class PropertyPart extends AttributePart {}let v = !1;try { const t = { get capture() { return v = !0, !1; } };window.addEventListener('test', t, t), window.removeEventListener('test', t, t); } catch (Ii) {} class EventPart {
      constructor(t, e, n) { this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = n, this.__boundHandleEvent = (t) => this.handleEvent(t); }

      setValue(t) { this.__pendingValue = t; }

      commit() {
        for (;n(this.__pendingValue);) { const t = this.__pendingValue;this.__pendingValue = r, t(this); } if (this.__pendingValue === r) return;const t = this.__pendingValue,
          e = this.value,
          i = t == null || e != null && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
          s = t != null && (e == null || i);i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), s && (this.__options = b(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = r;
      }

      handleEvent(t) { typeof this.value === 'function' ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t); }
    } const b = (t) => t && (v ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture)
      /**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */;const E = new class DefaultTemplateProcessor {
      handleAttributeExpressions(t, e, n, i) { const s = e[0];if (s === '.') { return new PropertyCommitter(t, e.slice(1), n).parts; } return s === '@' ? [new EventPart(t, e.slice(1), i.eventContext)] : s === '?' ? [new BooleanAttributePart(t, e.slice(1), n)] : new AttributeCommitter(t, e, n).parts; }

      handleTextExpression(t) { return new NodePart(t); }
    }();
    /**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */function w(t) { let e = y.get(t.type);void 0 === e && (e = { stringsArray: new WeakMap(), keyString: new Map() }, y.set(t.type, e));let n = e.stringsArray.get(t.strings);if (void 0 !== n) return n;const i = t.strings.join(a);return n = e.keyString.get(i), void 0 === n && (n = new Template(t, t.getTemplateElement()), e.keyString.set(i, n)), e.stringsArray.set(t.strings, n), n; } const y = new Map(),
      x = new WeakMap();
    /**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */t('r', (t, e, n) => { let i = x.get(e);void 0 === i && (s(e, e.firstChild), x.set(e, i = new NodePart({ templateFactory: w, ...n })), i.appendInto(e)), i.setValue(t), i.commit(); });
    /**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */
    (window.litHtmlVersions || (window.litHtmlVersions = [])).push('1.1.2');t('h', (t, ...e) => new TemplateResult(t, e, 'html', E));function A(t, e = 0, { start: n = !0, middle: i = !0, once: s = !1 } = {}) {
      let r,
        o = 0,
        a = !1;function c(...l) { if (a) return;const u = Date.now() - o;o = Date.now(), n ? (n = !1, t.apply(this, l), s && c.cancel()) : (i && u < e || !i) && (clearTimeout(r), r = setTimeout(() => { o = Date.now(), t.apply(this, l), s && c.cancel(); }, i ? e - u : e)); } return c.cancel = () => { clearTimeout(r), a = !0; }, c;
    } function k(t, e = 0, { start: n = !1, middle: i = !1, once: s = !1 } = {}) { return A(t, e, { start: n, middle: i, once: s }); } function T() { if (!(this instanceof T)) return new T();this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []; } const M = window.document.documentElement,
      L = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector;T.prototype.matchesSelector = function (t, e) { return L.call(t, e); }, T.prototype.querySelectorAll = function (t, e) { return e.querySelectorAll(t); }, T.prototype.indexes = [];const C = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;T.prototype.indexes.push({ name: 'ID', selector(t) { let e;if (e = t.match(C)) return e[0].slice(1); }, element(t) { if (t.id) return [t.id]; } });const S = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;T.prototype.indexes.push({ name: 'CLASS', selector(t) { let e;if (e = t.match(S)) return e[0].slice(1); }, element(t) { const e = t.className;if (e) { if (typeof e === 'string') return e.split(/\s/);if (typeof e === 'object' && 'baseVal' in e) return e.baseVal.split(/\s/); } } });let I,
      D = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;T.prototype.indexes.push({ name: 'TAG', selector(t) { let e;if (e = t.match(D)) return e[0].toUpperCase(); }, element(t) { return [t.nodeName.toUpperCase()]; } }), T.prototype.indexes.default = { name: 'UNIVERSAL', selector() { return !0; }, element() { return [!0]; } }, I = typeof window.Map === 'function' ? window.Map : (function () { function t() { this.map = {}; } return t.prototype.get = function (t) { return this.map[`${t} `]; }, t.prototype.set = function (t, e) { this.map[`${t} `] = e; }, t; }());const _ = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function H(t, e) {
      let n,
        i,
        s,
        r,
        o,
        a,
        c = (t = t.slice(0).concat(t.default)).length,
        l = e,
        u = [];do { if (_.exec(''), (s = _.exec(l)) && (l = s[3], s[2] || !l)) for (n = 0;n < c;n++) if (o = (a = t[n]).selector(s[1])) { for (i = u.length, r = !1;i--;) if (u[i].index === a && u[i].key === o) { r = !0;break; }r || u.push({ index: a, key: o });break; } } while (s);return u;
    } function N(t, e) {
      let n,
        i,
        s;for (n = 0, i = t.length;n < i;n++) if (s = t[n], e.isPrototypeOf(s)) return s;
    } function F(t, e) { return t.id - e.id; }T.prototype.logDefaultIndexUsed = function () {}, T.prototype.add = function (t, e) {
      let n,
        i,
        s,
        r,
        o,
        a,
        c,
        l,
        u = this.activeIndexes,
        d = this.selectors;if (typeof t === 'string') { for (n = { id: this.uid++, selector: t, data: e }, c = H(this.indexes, t), i = 0;i < c.length;i++)r = (l = c[i]).key, (o = N(u, s = l.index)) || ((o = Object.create(s)).map = new I(), u.push(o)), s === this.indexes.default && this.logDefaultIndexUsed(n), (a = o.map.get(r)) || (a = [], o.map.set(r, a)), a.push(n);this.size++, d.push(t); }
    }, T.prototype.remove = function (t, e) {
      if (typeof t === 'string') {
        let n,
          i,
          s,
          r,
          o,
          a,
          c,
          l,
          u = this.activeIndexes,
          d = {},
          h = arguments.length === 1;for (n = H(this.indexes, t), s = 0;s < n.length;s++) for (i = n[s], r = u.length;r--;) if (a = u[r], i.index.isPrototypeOf(a)) { if (c = a.map.get(i.key)) for (o = c.length;o--;)(l = c[o]).selector !== t || !h && l.data !== e || (c.splice(o, 1), d[l.id] = !0);break; } this.size -= Object.keys(d).length;
      }
    }, T.prototype.queryAll = function (t) {
      if (!this.selectors.length) return [];let e,
        n,
        i,
        s,
        r,
        o,
        a,
        c,
        l = {},
        u = [],
        d = this.querySelectorAll(this.selectors.join(', '), t);for (e = 0, i = d.length;e < i;e++) for (r = d[e], n = 0, s = (o = this.matches(r)).length;n < s;n++)l[(c = o[n]).id] ? a = l[c.id] : (a = { id: c.id, selector: c.selector, data: c.data, elements: [] }, l[c.id] = a, u.push(a)), a.elements.push(r);return u.sort(F);
    }, T.prototype.matches = function (t) {
      if (!t) return [];let e,
        n,
        i,
        s,
        r,
        o,
        a,
        c,
        l,
        u,
        d,
        h = this.activeIndexes,
        m = {},
        f = [];for (e = 0, s = h.length;e < s;e++) if (c = (a = h[e]).element(t)) for (n = 0, r = c.length;n < r;n++) if (l = a.map.get(c[n])) for (i = 0, o = l.length;i < o;i++)!m[d = (u = l[i]).id] && this.matchesSelector(t, u.selector) && (m[d] = !0, f.push(u));return f.sort(F);
    };var q = {},
      B = {},
      P = new WeakMap(),
      R = new WeakMap(),
      O = new WeakMap(),
      W = Object.getOwnPropertyDescriptor(Event.prototype, 'currentTarget');function V(t, e, n) { const i = t[e];return t[e] = function () { return n.apply(t, arguments), i.apply(t, arguments); }, t; } function $() { P.set(this, !0); } function j() { P.set(this, !0), R.set(this, !0); } function U() { return O.get(this) || null; } function K(t, e) { W && Object.defineProperty(t, 'currentTarget', { configurable: !0, enumerable: !0, get: e || W.get }); } function Y(t) {
      if (function (t) { try { return t.eventPhase, !0; } catch (e) { return !1; } }(t)) {
        const e = (t.eventPhase === 1 ? B : q)[t.type];if (e) {
          const n = (function (t, e, n) {
            let i = [],
              s = e;do { if (s.nodeType !== 1) break;const r = t.matches(s);if (r.length) { const o = { node: s, observers: r };n ? i.unshift(o) : i.push(o); } } while (s = s.parentElement);return i;
          }(e, t.target, t.eventPhase === 1));if (n.length) { V(t, 'stopPropagation', $), V(t, 'stopImmediatePropagation', j), K(t, U);for (let i = 0, s = n.length;i < s && !P.get(t);i++) { const r = n[i];O.set(t, r.node);for (let o = 0, a = r.observers.length;o < a && !R.get(t);o++)r.observers[o].data.call(r.node, t); }O.delete(t), K(t); }
        }
      }
    } const z = new WeakMap(),
      X = (t('u', ((t) => (...n) => { const i = t(...n);return e.set(i, !0), i; })((...t) => (e) => { let n = z.get(e);void 0 === n && (n = { lastRenderedIndex: 2147483647, values: [] }, z.set(e, n));const i = n.values;let s = i.length;n.values = t;for (let r = 0;r < t.length && !(r > n.lastRenderedIndex);r++) { const o = t[r];if (p(o) || typeof o.then !== 'function') { e.setValue(o), n.lastRenderedIndex = r;break; }r < s && o === i[r] || (n.lastRenderedIndex = 2147483647, s = 0, Promise.resolve(o).then((t) => { const i = n.values.indexOf(o);i > -1 && i < n.lastRenderedIndex && (n.lastRenderedIndex = i, e.setValue(t), e.commit()); })); } })), !!navigator.userAgent.match(/Macintosh/));class Combobox {
      constructor(t, e) { this.input = t, this.list = e, this.isComposing = !1, e.id || (e.id = `combobox-${Math.random().toString().slice(2, 6)}`), this.keyboardEventHandler = (t) => (function (t, e) { if (t.shiftKey || t.metaKey || t.altKey) return;if (!X && t.ctrlKey) return;if (e.isComposing) return;switch (t.key) { case 'Enter': case 'Tab': (function (t, e) { const n = e.querySelector('[aria-selected="true"]');return !!n && (n.getAttribute('aria-disabled') === 'true' || (n.click(), !0)); })(e.input, e.list) && t.preventDefault();break;case 'Escape': e.clearSelection();break;case 'ArrowDown': e.navigate(1), t.preventDefault();break;case 'ArrowUp': e.navigate(-1), t.preventDefault();break;case 'n': X && t.ctrlKey && (e.navigate(1), t.preventDefault());break;case 'p': X && t.ctrlKey && (e.navigate(-1), t.preventDefault());break;default: if (t.ctrlKey) break;e.clearSelection(); } }(t, this)), this.compositionEventHandler = (t) => (function (t, e) { if (e.isComposing = t.type === 'compositionstart', !document.getElementById(e.input.getAttribute('aria-controls') || '')) return;e.clearSelection(); }(t, this)), this.inputHandler = this.clearSelection.bind(this), t.setAttribute('role', 'combobox'), t.setAttribute('aria-controls', e.id), t.setAttribute('aria-expanded', 'false'), t.setAttribute('aria-autocomplete', 'list'), t.setAttribute('aria-haspopup', 'listbox'); }

      destroy() { this.clearSelection(), this.stop(), this.input.removeAttribute('role'), this.input.removeAttribute('aria-controls'), this.input.removeAttribute('aria-expanded'), this.input.removeAttribute('aria-autocomplete'), this.input.removeAttribute('aria-haspopup'); }

      start() { this.input.setAttribute('aria-expanded', 'true'), this.input.addEventListener('compositionstart', this.compositionEventHandler), this.input.addEventListener('compositionend', this.compositionEventHandler), this.input.addEventListener('input', this.inputHandler), this.input.addEventListener('keydown', this.keyboardEventHandler), this.list.addEventListener('click', Q); }

      stop() { this.clearSelection(), this.input.setAttribute('aria-expanded', 'false'), this.input.removeEventListener('compositionstart', this.compositionEventHandler), this.input.removeEventListener('compositionend', this.compositionEventHandler), this.input.removeEventListener('input', this.inputHandler), this.input.removeEventListener('keydown', this.keyboardEventHandler), this.list.removeEventListener('click', Q); }

      navigate(t = 1) {
        const e = Array.from(this.list.querySelectorAll('[aria-selected="true"]')).filter(G)[0],
          n = Array.from(this.list.querySelectorAll('[role="option"]')).filter(G),
          i = n.indexOf(e);if (i === n.length - 1 && t === 1 || i === 0 && t === -1) return this.clearSelection(), void this.input.focus();let s = t === 1 ? 0 : n.length - 1;if (e && i >= 0) { const e = i + t;e >= 0 && e < n.length && (s = e); } const r = n[s];if (r) for (const o of n)r === o ? (this.input.setAttribute('aria-activedescendant', r.id), r.setAttribute('aria-selected', 'true'), Z(this.list, r)) : o.setAttribute('aria-selected', 'false');
      }

      clearSelection() { this.input.removeAttribute('aria-activedescendant');for (const t of this.list.querySelectorAll('[aria-selected="true"]'))t.setAttribute('aria-selected', 'false'); }
    } function Q(t) { if (!(t.target instanceof Element)) return;const e = t.target.closest('[role="option"]');e && e.getAttribute('aria-disabled') !== 'true' && (function (t) { t.dispatchEvent(new CustomEvent('combobox-commit', { bubbles: !0 })); }(e)); } function G(t) { return !t.hidden && !(t instanceof HTMLInputElement && t.type === 'hidden') && (t.offsetWidth > 0 || t.offsetHeight > 0); } function Z(t, e) {
      (function (t, e) {
        const n = t.scrollTop,
          i = n + t.clientHeight,
          s = e.offsetTop,
          r = s + e.clientHeight;return s >= n && r <= i;
      })(t, e) || (t.scrollTop = e.offsetTop);
    }t('C', Combobox);let J = null,
      tt = null,
      et = [];function nt(t, e) { let n = [];function i() { const t = n;n = [], e(t); } return function () { for (var e = arguments.length, s = Array(e), r = 0;r < e;r++)s[r] = arguments[r];n.push(s), n.length === 1 && it(t, i); }; } function it(t, e) { tt || (tt = new MutationObserver(st)), J || (J = t.createElement('div'), tt.observe(J, { attributes: !0 })), et.push(e), J.setAttribute('data-twiddle', `${Date.now()}`); } function st() { const t = et;et = [];for (let e = 0;e < t.length;e++) try { t[e](); } catch (n) { setTimeout((() => { throw n; }), 0); } } const rt = new WeakMap(),
      ot = new WeakMap(),
      at = new WeakMap(),
      ct = new WeakMap();function lt(t, e) {
      for (let n = 0;n < e.length;n++) {
        const i = e[n],
          s = i[0],
          r = i[1],
          o = i[2];s === gt ? (ut(o, r), dt(o, r)) : s === vt ? ht(o, r) : s === bt && mt(t.observers, r);
      }
    } function ut(t, e) { if (e instanceof t.elementConstructor) { let n = rt.get(e);if (n || (n = [], rt.set(e, n)), n.indexOf(t.id) === -1) { let i = void 0;if (t.initialize && (i = t.initialize.call(void 0, e)), i) { let s = ot.get(e);s || (s = {}, ot.set(e, s)), s[`${t.id}`] = i; }n.push(t.id); } } } function dt(t, e) {
      if (e instanceof t.elementConstructor) {
        let n = ct.get(e);if (n || (n = [], ct.set(e, n)), n.indexOf(t.id) === -1) {
          t.elements.push(e);const i = ot.get(e),
            s = i ? i[`${t.id}`] : null;if (s && s.add && s.add.call(void 0, e), t.subscribe) { const r = t.subscribe.call(void 0, e);if (r) { let o = at.get(e);o || (o = {}, at.set(e, o)), o[`${t.id}`] = r; } }t.add && t.add.call(void 0, e), n.push(t.id);
        }
      }
    } function ht(t, e) {
      if (e instanceof t.elementConstructor) {
        const n = ct.get(e);if (n) {
          let i = t.elements.indexOf(e);if (i !== -1 && t.elements.splice(i, 1), (i = n.indexOf(t.id)) !== -1) {
            const s = ot.get(e),
              r = s ? s[`${t.id}`] : null;if (r && r.remove && r.remove.call(void 0, e), t.subscribe) {
              const o = at.get(e),
                a = o ? o[`${t.id}`] : null;a && a.unsubscribe && a.unsubscribe();
            }t.remove && t.remove.call(void 0, e), n.splice(i, 1);
          }n.length === 0 && ct.delete(e);
        }
      }
    } function mt(t, e) {
      const n = ct.get(e);if (n) {
        for (let i = n.slice(0), s = 0;s < i.length;s++) {
          const r = t[i[s]];if (r) {
            const o = r.elements.indexOf(e);o !== -1 && r.elements.splice(o, 1);const a = ot.get(e),
              c = a ? a[`${r.id}`] : null;c && c.remove && c.remove.call(void 0, e);const l = at.get(e),
              u = l ? l[`${r.id}`] : null;u && u.unsubscribe && u.unsubscribe(), r.remove && r.remove.call(void 0, e);
          }
        }ct.delete(e);
      }
    } let ft = null;function pt(t) { return 'matches' in t || 'webkitMatchesSelector' in t || 'mozMatchesSelector' in t || 'oMatchesSelector' in t || 'msMatchesSelector' in t; } var gt = 1,
      vt = 2,
      bt = 3;function Et(t, e, n) {
      for (let i = 0;i < n.length;i++) { const s = n[i];s.type === 'childList' ? (wt(t, e, s.addedNodes), yt(t, e, s.removedNodes)) : s.type === 'attributes' && xt(t, e, s.target); }(function (t) {
        if (ft === null) {
          const e = t.createElement('div'),
            n = t.createElement('div'),
            i = t.createElement('div');e.appendChild(n), n.appendChild(i), e.innerHTML = '', ft = i.parentNode !== n;
        } return ft;
      })(t.ownerDocument) && (function (t, e) { for (let n = 0;n < t.observers.length;n++) { const i = t.observers[n];if (i) for (let s = i.elements, r = 0;r < s.length;r++) { const o = s[r];o.parentNode || e.push([bt, o]); } } }(t, e));
    } function wt(t, e, n) { for (let i = 0;i < n.length;i++) { const s = n[i];if (pt(s)) for (let r = t.selectorSet.matches(s), o = 0;o < r.length;o++) { const a = r[o].data;e.push([gt, s, a]); } if ('querySelectorAll' in s) for (let c = t.selectorSet.queryAll(s), l = 0;l < c.length;l++) for (let u = c[l], d = u.data, h = u.elements, m = 0;m < h.length;m++)e.push([gt, h[m], d]); } } function yt(t, e, n) { for (let i = 0;i < n.length;i++) { const s = n[i];if ('querySelectorAll' in s) { e.push([bt, s]);for (let r = s.querySelectorAll('*'), o = 0;o < r.length;o++)e.push([bt, r[o]]); } } } function xt(t, e, n) { if (pt(n)) for (let i = t.selectorSet.matches(n), s = 0;s < i.length;s++) { const r = i[s].data;e.push([gt, n, r]); } if ('querySelectorAll' in n) { const o = ct.get(n);if (o) for (let a = 0;a < o.length;a++) { const c = t.observers[o[a]];c && (t.selectorSet.matchesSelector(n, c.selector) || e.push([vt, n, c])); } } } let At = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; },
      kt = 0;function Tt(t) { this.rootNode = t.nodeType === 9 ? t.documentElement : t, this.ownerDocument = t.nodeType === 9 ? t : t.ownerDocument, this.observers = [], this.selectorSet = new T(), this.mutationObserver = new MutationObserver(Ct.bind(this, this)), this._scheduleAddRootNodes = nt(this.ownerDocument, Lt.bind(this, this)), this._handleThrottledChangedTargets = nt(this.ownerDocument, It.bind(this, this)), this.rootNode.addEventListener('change', St.bind(this, this), !1), (function (t, e) { const n = t.readyState;n === 'interactive' || n === 'complete' ? it(t, e) : t.addEventListener('DOMContentLoaded', it(t, e)); }(this.ownerDocument, Mt.bind(this, this))); } function Mt(t) { t.mutationObserver.observe(t.rootNode, { childList: !0, attributes: !0, subtree: !0 }), t._scheduleAddRootNodes(); } function Lt(t) { const e = [];wt(t, e, [t.rootNode]), lt(t, e); } function Ct(t, e) { const n = [];Et(t, n, e), lt(t, n); } function St(t, e) { t._handleThrottledChangedTargets(e.target); } function It(t, e) { const n = [];!(function (t, e, n) { for (let i = 0;i < n.length;i++) for (let s = n[i], r = s.form ? s.form.elements : t.rootNode.querySelectorAll('input'), o = 0;o < r.length;o++)xt(t, e, r[o]); }(t, n, e)), lt(t, n); }Tt.prototype.disconnect = function () { this.mutationObserver.disconnect(); }, Tt.prototype.observe = function (t, e) {
      let n = void 0;typeof e === 'function' ? n = { selector: t, initialize: e } : (void 0 === e ? 'undefined' : At(e)) === 'object' ? (n = e).selector = t : n = t;var i = this,
        s = { id: kt++, selector: n.selector, initialize: n.initialize, add: n.add, remove: n.remove, subscribe: n.subscribe, elements: [], elementConstructor: n.hasOwnProperty('constructor') ? n.constructor : this.ownerDocument.defaultView.Element, abort() { i._abortObserving(s); } };return this.selectorSet.add(s.selector, s), this.observers[s.id] = s, this._scheduleAddRootNodes(), s;
    }, Tt.prototype._abortObserving = function (t) { for (let e = t.elements, n = 0;n < e.length;n++)ht(t, e[n]);this.selectorSet.remove(t.selector, t), delete this.observers[t.id]; }, Tt.prototype.triggerObservers = function (t) { const e = [];!(function (t, e, n) { if ('querySelectorAll' in n) { xt(t, e, n);for (let i = n.querySelectorAll('*'), s = 0;s < i.length;s++)xt(t, e, i[s]); } }(this, e, t)), lt(this, e); };let Dt = void 0;function _t() { return Dt || (Dt = new Tt(window.document)), Dt; } function Ht(t, e = 0, { start: n = !1, middle: i = !1, once: s = !1 } = {}) {
      return (function (t, e = 0, { start: n = !0, middle: i = !0, once: s = !1 } = {}) {
        let r,
          o = 0,
          a = !1,
          c = function c(...l) { if (!a) { const u = Date.now() - o;o = Date.now(), n ? (n = !1, t(...l), s && c.cancel()) : (i && u < e || !i) && (clearTimeout(r), r = setTimeout((() => { o = Date.now(), t(...l), s && c.cancel(); }), i ? e - u : e)); } };return c.cancel = function () { clearTimeout(r), a = !0; }, c;
      }(t, e, { start: n, middle: i, once: s }));
    } const Nt = new WeakMap();class AutoCheckElement extends HTMLElement {
      connectedCallback() {
        const t = this.input;if (!t) return;const e = Ht(qt.bind(null, this), 300),
          n = { check: e, controller: null };Nt.set(this, n), t.addEventListener('input', Ft), t.addEventListener('input', e), t.autocomplete = 'off', t.spellcheck = !1;
      }

      disconnectedCallback() { const t = this.input;if (!t) return;const e = Nt.get(this);e && (Nt.delete(this), t.removeEventListener('input', Ft), t.removeEventListener('input', e.check), t.setCustomValidity('')); }

      attributeChangedCallback(t) { if (t === 'required') { const t = this.input;if (!t) return;t.required = this.required; } }

      static get observedAttributes() { return ['required']; }

      get input() { return this.querySelector('input'); }

      get src() { const t = this.getAttribute('src');if (!t) return '';const e = this.ownerDocument.createElement('a');return e.href = t, e.href; }

      set src(t) { this.setAttribute('src', t); }

      get csrf() { const t = this.querySelector('[data-csrf]');return this.getAttribute('csrf') || t instanceof HTMLInputElement && t.value || ''; }

      set csrf(t) { this.setAttribute('csrf', t); }

      get required() { return this.hasAttribute('required'); }

      set required(t) { t ? this.setAttribute('required', '') : this.removeAttribute('required'); }
    } function Ft(t) {
      const e = t.currentTarget;if (!(e instanceof HTMLInputElement)) return;const n = e.closest('auto-check');if (!(n instanceof AutoCheckElement)) return;const i = n.src,
        s = n.csrf,
        r = Nt.get(n);if (!i || !s || !r) return;let o = 'Verifying…';e.dispatchEvent(new CustomEvent('auto-check-start', { bubbles: !0, detail: { setValidity: (t) => o = t } })), n.required && e.setCustomValidity(o);
    } async function qt(t) {
      const e = t.input;if (!e) return;const n = t.src,
        i = t.csrf,
        s = Nt.get(t);if (!n || !i || !s) return void (t.required && e.setCustomValidity(''));if (!e.value.trim()) return void (t.required && e.setCustomValidity(''));const r = new FormData();r.append('authenticity_token', i), r.append('value', e.value), e.dispatchEvent(new CustomEvent('auto-check-send', { bubbles: !0, detail: { body: r } })), s.controller ? s.controller.abort() : t.dispatchEvent(new CustomEvent('loadstart')), s.controller = 'AbortController' in window ? new AbortController() : { signal: null, abort() {} };try { const i = await (async function (t, e, n) { try { const i = await fetch(e, n);return t.dispatchEvent(new CustomEvent('load')), t.dispatchEvent(new CustomEvent('loadend')), i; } catch (i) { throw i.name !== 'AbortError' && (t.dispatchEvent(new CustomEvent('error')), t.dispatchEvent(new CustomEvent('loadend'))), i; } }(t, n, { credentials: 'same-origin', signal: s.controller.signal, method: 'POST', body: r }));i.ok ? (function (t, e, n) { n && e.setCustomValidity('');e.dispatchEvent(new CustomEvent('auto-check-success', { bubbles: !0, detail: { response: t.clone() } })); }(i, e, t.required)) : (function (t, e, n) { let i = 'Validation failed';e.dispatchEvent(new CustomEvent('auto-check-error', { bubbles: !0, detail: { response: t.clone(), setValidity: (t) => i = t } })), n && e.setCustomValidity(i); }(i, e, t.required)), s.controller = null, e.dispatchEvent(new CustomEvent('auto-check-complete', { bubbles: !0 })); } catch (o) { o.name !== 'AbortError' && (s.controller = null, e.dispatchEvent(new CustomEvent('auto-check-complete', { bubbles: !0 }))); }
    }window.customElements.get('auto-check') || (window.AutoCheckElement = AutoCheckElement, window.customElements.define('auto-check', AutoCheckElement));class AutocompleteEvent extends CustomEvent {constructor(t, e) { super(t, e), this.relatedTarget = e.relatedTarget; }} const Bt = new WeakMap();function Pt(t, e) {
      const n = new XMLHttpRequest();return n.open('GET', e, !0), n.setRequestHeader('Accept', 'text/fragment+html'), (function (t, e) {
        const n = Bt.get(t);n && n.abort();Bt.set(t, e);const i = () => Bt.delete(t),
          s = (function (t) { return new Promise((e, n) => { t.onload = function () { t.status >= 200 && t.status < 300 ? e(t.responseText) : n(new Error(t.responseText)); }, t.onerror = n, t.send(); }); }(e));return s.then(i, i), s;
      }(t, n));
    } class Autocomplete {
      constructor(t, e, n) { this.container = t, this.input = e, this.results = n, this.combobox = new Combobox(e, n), this.results.hidden = !0, this.input.setAttribute('autocomplete', 'off'), this.input.setAttribute('spellcheck', 'false'), this.interactingWithList = !1, this.onInputChange = (function (t, e) { let n;return function () { for (var i = arguments.length, s = new Array(i), r = 0;r < i;r++)s[r] = arguments[r];clearTimeout(n), n = setTimeout(() => { clearTimeout(n), t(...s); }, e); }; }(this.onInputChange.bind(this), 300)), this.onResultsMouseDown = this.onResultsMouseDown.bind(this), this.onInputBlur = this.onInputBlur.bind(this), this.onInputFocus = this.onInputFocus.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onCommit = this.onCommit.bind(this), this.input.addEventListener('keydown', this.onKeydown), this.input.addEventListener('focus', this.onInputFocus), this.input.addEventListener('blur', this.onInputBlur), this.input.addEventListener('input', this.onInputChange), this.results.addEventListener('mousedown', this.onResultsMouseDown), this.results.addEventListener('combobox-commit', this.onCommit); }

      destroy() { this.input.removeEventListener('keydown', this.onKeydown), this.input.removeEventListener('focus', this.onInputFocus), this.input.removeEventListener('blur', this.onInputBlur), this.input.removeEventListener('input', this.onInputChange), this.results.removeEventListener('mousedown', this.onResultsMouseDown), this.results.removeEventListener('combobox-commit', this.onCommit); }

      onKeydown(t) { if (t.key === 'Escape' && this.container.open) this.container.open = !1, t.stopPropagation(), t.preventDefault();else if (t.altKey && t.key === 'ArrowUp' && this.container.open) this.container.open = !1, t.stopPropagation(), t.preventDefault();else if (t.altKey && t.key === 'ArrowDown' && !this.container.open) { if (!this.input.value.trim()) return;this.container.open = !0, t.stopPropagation(), t.preventDefault(); } }

      onInputFocus() { this.fetchResults(); }

      onInputBlur() { this.interactingWithList ? this.interactingWithList = !1 : this.container.open = !1; }

      onCommit(t) { const { target: e } = t;const n = e;if (!(n instanceof HTMLElement)) return;if (this.container.open = !1, n instanceof HTMLAnchorElement) return;const i = n.getAttribute('data-autocomplete-value') || n.textContent;this.container.value = i; }

      onResultsMouseDown() { this.interactingWithList = !0; }

      onInputChange() { this.container.removeAttribute('value'), this.fetchResults(); }

      identifyOptions() { let t = 0;for (const e of this.results.querySelectorAll('[role="option"]:not([id])'))e.id = ''.concat(this.results.id, '-option-').concat(t++); }

      fetchResults() {
        const t = this.input.value.trim();if (!t) return void (this.container.open = !1);const e = this.container.src;if (!e) return;const n = new URL(e, window.location.href),
          i = new URLSearchParams(n.search.slice(1));i.append('q', t), n.search = i.toString(), this.container.dispatchEvent(new CustomEvent('loadstart')), Pt(this.input, n.toString()).then((t) => { this.results.innerHTML = t, this.identifyOptions();const e = !!this.results.querySelector('[role="option"]');this.container.open = e, this.container.dispatchEvent(new CustomEvent('load')), this.container.dispatchEvent(new CustomEvent('loadend')); }).catch(() => { this.container.dispatchEvent(new CustomEvent('error')), this.container.dispatchEvent(new CustomEvent('loadend')); });
      }

      open() { this.results.hidden && (this.combobox.start(), this.results.hidden = !1); }

      close() { this.results.hidden || (this.combobox.stop(), this.results.hidden = !0); }
    } const Rt = new WeakMap();class AutocompleteElement extends HTMLElement {
      constructor() { super(); }

      connectedCallback() {
        const t = this.getAttribute('for');if (!t) return;const e = this.querySelector('input'),
          n = document.getElementById(t);e instanceof HTMLInputElement && n && (Rt.set(this, new Autocomplete(this, e, n)), n.setAttribute('role', 'listbox'));
      }

      disconnectedCallback() { const t = Rt.get(this);t && (t.destroy(), Rt.delete(this)); }

      get src() { return this.getAttribute('src') || ''; }

      set src(t) { this.setAttribute('src', t); }

      get value() { return this.getAttribute('value') || ''; }

      set value(t) { this.setAttribute('value', t); }

      get open() { return this.hasAttribute('open'); }

      set open(t) { t ? this.setAttribute('open', '') : this.removeAttribute('open'); }

      static get observedAttributes() { return ['open', 'value']; }

      attributeChangedCallback(t, e, n) { if (e === n) return;const i = Rt.get(this);if (i) switch (t) { case 'open': n === null ? i.close() : i.open();break;case 'value': n !== null && (i.input.value = n), this.dispatchEvent(new AutocompleteEvent('auto-complete-change', { bubbles: !0, relatedTarget: i.input })); } }
    } function Ot(t) { if ('clipboard' in navigator) return navigator.clipboard.writeText(t.textContent);const e = getSelection();if (e == null) return Promise.reject(new Error());e.removeAllRanges();const n = document.createRange();return n.selectNodeContents(t), e.addRange(n), document.execCommand('copy'), e.removeAllRanges(), Promise.resolve(); } function Wt(t) { if ('clipboard' in navigator) return navigator.clipboard.writeText(t);const e = document.body;if (!e) return Promise.reject(new Error());const n = (function (t) { const e = document.createElement('pre');return e.style.width = '1px', e.style.height = '1px', e.style.position = 'fixed', e.style.top = '5px', e.textContent = t, e; }(t));return e.appendChild(n), Ot(n), e.removeChild(n), Promise.resolve(); } function Vt(t) {
      const e = t.getAttribute('for'),
        n = t.getAttribute('value');function i() { t.dispatchEvent(new CustomEvent('clipboard-copy', { bubbles: !0 })); } if (n)Wt(n).then(i);else if (e) { const n = 'getRootNode' in Element.prototype ? t.getRootNode() : t.ownerDocument;if (!(n instanceof Document || 'ShadowRoot' in window && n instanceof ShadowRoot)) return;const r = n.getElementById(e);r && (s = r, s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement ? Wt(s.value) : s instanceof HTMLAnchorElement && s.hasAttribute('href') ? Wt(s.href) : Ot(s)).then(i); } let s;
    } function $t(t) { const e = t.currentTarget;e instanceof HTMLElement && Vt(e); } function jt(t) { if (t.key === ' ' || t.key === 'Enter') { const e = t.currentTarget;e instanceof HTMLElement && (t.preventDefault(), Vt(e)); } } function Ut(t) { t.currentTarget.addEventListener('keydown', jt); } function Kt(t) { t.currentTarget.removeEventListener('keydown', jt); }window.customElements.get('auto-complete') || (window.AutocompleteElement = AutocompleteElement, window.customElements.define('auto-complete', AutocompleteElement)), t('A', AutocompleteElement);class ClipboardCopyElement extends HTMLElement {
      constructor() { super(), this.addEventListener('click', $t), this.addEventListener('focus', Ut), this.addEventListener('blur', Kt); }

      connectedCallback() { this.hasAttribute('tabindex') || this.setAttribute('tabindex', '0'), this.hasAttribute('role') || this.setAttribute('role', 'button'); }

      get value() { return this.getAttribute('value') || ''; }

      set value(t) { this.setAttribute('value', t); }
    }window.customElements.get('clipboard-copy') || (window.ClipboardCopyElement = ClipboardCopyElement, window.customElements.define('clipboard-copy', ClipboardCopyElement)), t('i', ClipboardCopyElement);function Yt(t) { let e = Array.from(t.querySelectorAll('[autofocus]')).filter(Xt)[0];e || (e = t, t.setAttribute('tabindex', '-1')), e.focus(); } function zt(t) {
      const e = t.currentTarget;e instanceof Element && (t.key === 'Escape' || t.key === 'Esc' ? (Jt(e, !1), t.stopPropagation()) : t.key === 'Tab' && (function (t) {
        if (!(t.currentTarget instanceof Element)) return;const e = t.currentTarget.querySelector('details-dialog');if (!e) return;t.preventDefault();const n = Array.from(e.querySelectorAll('*')).filter(Xt);if (n.length === 0) return;const i = t.shiftKey ? -1 : 1,
          s = e.getRootNode(),
          r = e.contains(s.activeElement) ? s.activeElement : null;let o = i === -1 ? -1 : 0;if (r instanceof HTMLElement) { const t = n.indexOf(r);t !== -1 && (o = t + i); }o < 0 ? o = n.length - 1 : o %= n.length;n[o].focus();
      }(t)));
    } function Xt(t) { return t.tabIndex >= 0 && !t.disabled && (function (t) { return !t.hidden && (!t.type || t.type !== 'hidden') && (t.offsetWidth > 0 || t.offsetHeight > 0); }(t)); } function Qt(t) { const e = t.querySelector('details-dialog');return !(e instanceof DetailsDialogElement) || e.dispatchEvent(new CustomEvent('details-dialog-close', { bubbles: !0, cancelable: !0 })); } function Gt(t) { if (!(t.currentTarget instanceof Element)) return;const e = t.currentTarget.closest('details');e && e.hasAttribute('open') && (Qt(e) || (t.preventDefault(), t.stopPropagation())); } function Zt(t) { const e = t.currentTarget;if (!(e instanceof Element)) return;const n = e.querySelector('details-dialog');if (n instanceof DetailsDialogElement) if (e.hasAttribute('open')) { const t = 'getRootNode' in n ? n.getRootNode() : document;t.activeElement instanceof HTMLElement && ie.set(n, { details: e, activeElement: t.activeElement }), Yt(n), e.addEventListener('keydown', zt); } else { for (const e of n.querySelectorAll('form'))e.reset();const t = (function (t, e) { const n = ie.get(e);return n && n.activeElement instanceof HTMLElement ? n.activeElement : t.querySelector('summary'); }(e, n));t && t.focus(), e.removeEventListener('keydown', zt); } } function Jt(t, e) { e !== t.hasAttribute('open') && (e ? t.setAttribute('open', '') : Qt(t) && t.removeAttribute('open')); } function te(t) { const e = t.currentTarget;if (!(e instanceof Element)) return;const n = e.querySelector('details-dialog');if (!(n instanceof DetailsDialogElement)) return;const i = n.querySelector('include-fragment:not([src])');if (!i) return;const s = n.src;s !== null && (i.addEventListener('loadend', () => { e.hasAttribute('open') && Yt(n); }), i.setAttribute('src', s), ne(e)); } function ee(t, e, n) { ne(t), e && t.addEventListener('toggle', te, { once: !0 }), e && n && t.addEventListener('mouseover', te, { once: !0 }); } function ne(t) { t.removeEventListener('toggle', te), t.removeEventListener('mouseover', te); } const ie = new WeakMap();class DetailsDialogElement extends HTMLElement {
      static get CLOSE_ATTR() { return 'data-close-dialog'; }

      static get CLOSE_SELECTOR() { return '[data-close-dialog]'; }

      constructor() { super(), ie.set(this, { details: null, activeElement: null }), this.addEventListener('click', (({ target: t }) => { if (!(t instanceof Element)) return;const e = t.closest('details');e && t.closest('[data-close-dialog]') && Jt(e, !1); })); }

      get src() { return this.getAttribute('src'); }

      set src(t) { this.setAttribute('src', t || ''); }

      get preload() { return this.hasAttribute('preload'); }

      set preload(t) { t ? this.setAttribute('preload', '') : this.removeAttribute('preload'); }

      connectedCallback() { this.setAttribute('role', 'dialog'), this.setAttribute('aria-modal', 'true');const t = ie.get(this);if (!t) return;const e = this.parentElement;if (!e) return;const n = e.querySelector('summary');n && (n.hasAttribute('role') || n.setAttribute('role', 'button'), n.addEventListener('click', Gt, { capture: !0 })), e.addEventListener('toggle', Zt), t.details = e, ee(e, this.src, this.preload); }

      disconnectedCallback() { const t = ie.get(this);if (!t) return;const { details: e } = t;if (!e) return;e.removeEventListener('toggle', Zt), ne(e);const n = e.querySelector('summary');n && n.removeEventListener('click', Gt, { capture: !0 }), t.details = null; }

      toggle(t) { const e = ie.get(this);if (!e) return;const { details: n } = e;n && Jt(n, t); }

      static get observedAttributes() { return ['src', 'preload']; }

      attributeChangedCallback() { const t = ie.get(this);if (!t) return;const { details: e } = t;e && ee(e, this.src, this.preload); }
    }t('D', DetailsDialogElement), window.customElements.get('details-dialog') || (window.DetailsDialogElement = DetailsDialogElement, window.customElements.define('details-dialog', DetailsDialogElement));class DetailsMenuElement extends HTMLElement {
      constructor() { super(); }

      get preload() { return this.hasAttribute('preload'); }

      set preload(t) { t ? this.setAttribute('preload', '') : this.removeAttribute('preload'); }

      get src() { return this.getAttribute('src') || ''; }

      set src(t) { this.setAttribute('src', t); }

      connectedCallback() { this.hasAttribute('role') || this.setAttribute('role', 'menu');const t = this.parentElement;if (!t) return;const e = t.querySelector('summary');e && (e.setAttribute('aria-haspopup', 'menu'), e.hasAttribute('role') || e.setAttribute('role', 'button'));const n = [oe(t, 'compositionstart', (t) => ge(this, t)), oe(t, 'compositionend', (t) => ge(this, t)), oe(t, 'click', (e) => he(t, this, e)), oe(t, 'change', (e) => he(t, this, e)), oe(t, 'keydown', (e) => (function (t, e, n) { if (!(n instanceof KeyboardEvent)) return;if (t.querySelector('details[open]')) return;const i = se.get(e);if (!i || i.isComposing) return;const s = n.target instanceof Element && n.target.tagName === 'SUMMARY';switch (n.key) { case 'Escape': t.hasAttribute('open') && (pe(t), n.preventDefault(), n.stopPropagation());break;case 'ArrowDown': { s && !t.hasAttribute('open') && t.setAttribute('open', '');const e = ue(t, !0);e && e.focus(), n.preventDefault(); } break;case 'ArrowUp': { s && !t.hasAttribute('open') && t.setAttribute('open', '');const e = ue(t, !1);e && e.focus(), n.preventDefault(); } break;case 'n': if (de && n.ctrlKey) { const e = ue(t, !0);e && e.focus(), n.preventDefault(); } break;case 'p': if (de && n.ctrlKey) { const e = ue(t, !1);e && e.focus(), n.preventDefault(); } break;case ' ': case 'Enter': { const e = document.activeElement;e instanceof HTMLElement && fe(e) && e.closest('details') === t && (n.preventDefault(), n.stopPropagation(), e.click()); } } }(t, this, e))), oe(t, 'toggle', () => ae(t, this), { once: !0 }), oe(t, 'toggle', () => (function (t) { if (!t.hasAttribute('open')) return;for (const e of document.querySelectorAll('details[open] > details-menu')) { const n = e.closest('details');n && n !== t && !n.contains(t) && n.removeAttribute('open'); } }(t))), this.preload ? oe(t, 'mouseover', () => ae(t, this), { once: !0 }) : re, ...ce(t)];se.set(this, { subscriptions: n, loaded: !1, isComposing: !1 }); }

      disconnectedCallback() { const t = se.get(this);if (t) { se.delete(this);for (const e of t.subscriptions)e.unsubscribe(); } }
    } const se = new WeakMap(),
      re = { unsubscribe() {} };function oe(t, e, n, i = !1) { return t.addEventListener(e, n, i), { unsubscribe: () => { t.removeEventListener(e, n, i); } }; } function ae(t, e) { const n = e.getAttribute('src');if (!n) return;const i = se.get(e);if (!i) return;if (i.loaded) return;i.loaded = !0;const s = e.querySelector('include-fragment');s && !s.hasAttribute('src') && (s.addEventListener('loadend', () => le(t)), s.setAttribute('src', n)); } function ce(t) { let e = !1;return [oe(t, 'mousedown', () => e = !0), oe(t, 'keydown', () => e = !1), oe(t, 'toggle', () => { t.hasAttribute('open') && (le(t) || e || (function (t) { const e = document.activeElement;if (e && fe(e) && t.contains(e)) return;const n = ue(t, !0);n && n.focus(); }(t))); })]; } function le(t) { if (!t.hasAttribute('open')) return !1;const e = t.querySelector('[autofocus]');return !!e && (e.focus(), !0); } function ue(t, e) {
      const n = Array.from(t.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])')),
        i = document.activeElement,
        s = i instanceof HTMLElement ? n.indexOf(i) : -1,
        r = e ? n[s + 1] : n[s - 1],
        o = e ? n[0] : n[n.length - 1];return r || o;
    } const de = navigator.userAgent.match(/Macintosh/);function he(t, e, n) {
      const i = n.target;if (i instanceof Element && i.closest('details') === t) {
        if (n.type === 'click') {
          const e = i.closest('[role="menuitem"], [role="menuitemradio"]'),
            n = e && e.tagName === 'LABEL' && e.querySelector('input');e && !n && me(e, t);
        } else if (n.type === 'change') { const e = i.closest('[role="menuitemradio"], [role="menuitemcheckbox"]');e && me(e, t); }
      }
    } function me(t, e) { if (t.hasAttribute('disabled') || t.getAttribute('aria-disabled') === 'true') return;const n = t.closest('details-menu');n && n.dispatchEvent(new CustomEvent('details-menu-select', { cancelable: !0, detail: { relatedTarget: t } })) && (!(function (t, e) { const n = e.querySelector('[data-menu-button]');if (!n) return;const i = (function (t) { if (!t) return null;const e = t.hasAttribute('data-menu-button-text') ? t : t.querySelector('[data-menu-button-text]');return e ? e.getAttribute('data-menu-button-text') || e.textContent : null; }(t));if (i)n.textContent = i;else { const e = (function (t) { if (!t) return null;const e = t.hasAttribute('data-menu-button-contents') ? t : t.querySelector('[data-menu-button-contents]');return e ? e.innerHTML : null; }(t));e && (n.innerHTML = e); } }(t, e)), (function (t, e) { for (const n of e.querySelectorAll('[role="menuitemradio"], [role="menuitemcheckbox"]')) { const e = n.querySelector('input[type="radio"], input[type="checkbox"]');let i = (n === t).toString();e instanceof HTMLInputElement && (i = e.indeterminate ? 'mixed' : e.checked.toString()), n.setAttribute('aria-checked', i); } }(t, e)), t.getAttribute('role') !== 'menuitemcheckbox' && pe(e), n.dispatchEvent(new CustomEvent('details-menu-selected', { detail: { relatedTarget: t } }))); } function fe(t) { const e = t.getAttribute('role');return e === 'menuitem' || e === 'menuitemcheckbox' || e === 'menuitemradio'; } function pe(t) { if (!t.hasAttribute('open')) return;t.removeAttribute('open');const e = t.querySelector('summary');e && e.focus(); } function ge(t, e) { const n = se.get(t);n && (n.isComposing = e.type === 'compositionstart'); }window.customElements.get('details-menu') || (window.DetailsMenuElement = DetailsMenuElement, window.customElements.define('details-menu', DetailsMenuElement));class Attachment {
      constructor(t, e) { this.file = t, this.directory = e, this.state = 'pending', this.id = null, this.href = null, this.name = null, this.percent = 0; }

      static traverse(t, e) { return (function (t, e) { if (e && (function (t) { return t.items && Array.from(t.items).some((t) => { const e = t.webkitGetAsEntry && t.webkitGetAsEntry();return e && e.isDirectory; }); }(t))) return (async function t(e, n) { const i = [];for (const s of ve(n)) if (s.isDirectory)i.push(...await t(s.fullPath, await Ee(s)));else { const t = await be(s);i.push(new Attachment(t, e)); } return i; }('', (function (t) { return Array.from(t.items).map((t) => t.webkitGetAsEntry()).filter((t) => t != null); }(t))));return Promise.resolve(ve(Array.from(t.files || [])).map((t) => new Attachment(t))); }(t, e)); }

      static from(t) { const e = [];for (const n of t) if (n instanceof File)e.push(new Attachment(n));else { if (!(n instanceof Attachment)) throw new Error('Unexpected type');e.push(n); } return e; }

      get fullPath() { return this.directory ? `${this.directory}/${this.file.name}` : this.file.name; }

      isImage() { return ['image/gif', 'image/png', 'image/jpg', 'image/jpeg'].indexOf(this.file.type) > -1; }

      saving(t) { if (this.state !== 'pending' && this.state !== 'saving') throw new Error(`Unexpected transition from ${this.state} to saving`);this.state = 'saving', this.percent = t; }

      saved(t) {
        let e,
          n,
          i;if (this.state !== 'pending' && this.state !== 'saving') throw new Error(`Unexpected transition from ${this.state} to saved`);this.state = 'saved', this.id = (e = t == null ? void 0 : t.id) !== null && void 0 !== e ? e : null, this.href = (n = t == null ? void 0 : t.href) !== null && void 0 !== n ? n : null, this.name = (i = t == null ? void 0 : t.name) !== null && void 0 !== i ? i : null;
      }

      isPending() { return this.state === 'pending'; }

      isSaving() { return this.state === 'saving'; }

      isSaved() { return this.state === 'saved'; }
    } function ve(t) { return Array.from(t).filter((t) => !(function (t) { return t.name.startsWith('.'); }(t))); } function be(t) { return new Promise(((e, n) => { t.file(e, n); })); } function Ee(t) {
      return new Promise(((e, n) => {
        const i = [],
          s = t.createReader(),
          r = () => { s.readEntries((t) => { t.length > 0 ? (i.push(...t), r()) : e(i); }, n); };r();
      }));
    }t('w', Attachment);class FileAttachmentElement extends HTMLElement {
      constructor() { super(), this.addEventListener('dragenter', xe), this.addEventListener('dragover', xe), this.addEventListener('dragleave', Ae), this.addEventListener('drop', ke), this.addEventListener('paste', Me), this.addEventListener('change', Le); }

      get directory() { return this.hasAttribute('directory'); }

      set directory(t) { t ? this.setAttribute('directory', '') : this.removeAttribute('directory'); }

      async attach(t) { const e = t instanceof DataTransfer ? await Attachment.traverse(t, this.directory) : Attachment.from(t);this.dispatchEvent(new CustomEvent('file-attachment-accept', { bubbles: !0, cancelable: !0, detail: { attachments: e } })) && e.length && this.dispatchEvent(new CustomEvent('file-attachment-accepted', { bubbles: !0, detail: { attachments: e } })); }
    } function we(t) { return Array.from(t.types).indexOf('Files') >= 0; }let ye = null;function xe(t) { const e = t.currentTarget;ye && clearTimeout(ye), ye = window.setTimeout(() => e.removeAttribute('hover'), 200);const n = t.dataTransfer;n && we(n) && (n.dropEffect = 'copy', e.setAttribute('hover', ''), t.stopPropagation(), t.preventDefault()); } function Ae(t) { t.dataTransfer && (t.dataTransfer.dropEffect = 'none'), t.currentTarget.removeAttribute('hover'), t.stopPropagation(), t.preventDefault(); } function ke(t) { const e = t.currentTarget;if (!(e instanceof FileAttachmentElement)) return;e.removeAttribute('hover');const n = t.dataTransfer;n && we(n) && (e.attach(n), t.stopPropagation(), t.preventDefault()); } const Te = /^image\/(gif|png|jpeg)$/;function Me(t) { if (!t.clipboardData) return;if (!t.clipboardData.items) return;const e = t.currentTarget;if (!(e instanceof FileAttachmentElement)) return;const n = (function (t) { for (const e of t) if (Te.test(e.type)) return e.getAsFile();return null; }(t.clipboardData.items));if (!n) return;const i = [n];e.attach(i), t.preventDefault(); } function Le(t) { const e = t.currentTarget;if (!(e instanceof FileAttachmentElement)) return;const n = t.target;if (!(n instanceof HTMLInputElement)) return;const i = e.getAttribute('input');if (!i || n.id !== i) return;const s = n.files;s && s.length !== 0 && (e.attach(s), n.value = ''); }window.customElements.get('file-attachment') || (window.FileAttachmentElement = FileAttachmentElement, window.customElements.define('file-attachment', FileAttachmentElement)), t('x', FileAttachmentElement);class FilterInputElement extends HTMLElement {
      constructor() { super(), this.currentQuery = null, this.filter = null, this.debounceInputChange = (function (t) { let e;return function () { clearTimeout(e), e = setTimeout(() => { clearTimeout(e), t(); }, 300); }; }(() => Ce(this, !0))), this.boundFilterResults = () => { Ce(this, !1); }; }

      static get observedAttributes() { return ['aria-owns']; }

      attributeChangedCallback(t, e) { e && t === 'aria-owns' && Ce(this, !1); }

      connectedCallback() { const t = this.input;t && (t.setAttribute('autocomplete', 'off'), t.setAttribute('spellcheck', 'false'), t.addEventListener('focus', this.boundFilterResults), t.addEventListener('change', this.boundFilterResults), t.addEventListener('input', this.debounceInputChange)); }

      disconnectedCallback() { const t = this.input;t && (t.removeEventListener('focus', this.boundFilterResults), t.removeEventListener('change', this.boundFilterResults), t.removeEventListener('input', this.debounceInputChange)); }

      get input() { const t = this.querySelector('input');return t instanceof HTMLInputElement ? t : null; }

      reset() { const t = this.input;t && (t.value = '', t.dispatchEvent(new Event('change', { bubbles: !0 }))); }
    } async function Ce(t, e = !1) {
      const n = t.input;if (!n) return;const i = n.value.trim(),
        s = t.getAttribute('aria-owns');if (!s) return;const r = document.getElementById(s);if (!r) return;const o = r.hasAttribute('data-filter-list') ? r : r.querySelector('[data-filter-list]');if (!o) return;if (t.dispatchEvent(new CustomEvent('filter-input-start', { bubbles: !0 })), e && t.currentQuery === i) return;t.currentQuery = i;const a = t.filter || Se,
        c = o.childElementCount;let l = 0,
        u = !1;for (const m of Array.from(o.children)) { if (!(m instanceof HTMLElement)) continue;const t = a(m, Ie(m), i);!0 === t.hideNew && (u = t.hideNew), m.hidden = !t.match, t.match && l++; } const d = r.querySelector('[data-filter-new-item]'),
        h = !!d && i.length > 0 && !u;d instanceof HTMLElement && (d.hidden = !h, h && (function (t, e) { const n = t.querySelector('[data-filter-new-item-text]');n && (n.textContent = e);const i = t.querySelector('[data-filter-new-item-value]');(i instanceof HTMLInputElement || i instanceof HTMLButtonElement) && (i.value = e); }(d, i))), (function (t, e) { const n = t.querySelector('[data-filter-empty-state]');n instanceof HTMLElement && (n.hidden = e); }(r, l > 0 || h)), t.dispatchEvent(new CustomEvent('filter-input-updated', { bubbles: !0, detail: { count: l, total: c } }));
    } function Se(t, e, n) { return { match: e.toLowerCase().indexOf(n.toLowerCase()) !== -1, hideNew: e === n }; } function Ie(t) { return ((t.querySelector('[data-filter-item-text]') || t).textContent || '').trim(); }t('F', FilterInputElement), window.customElements.get('filter-input') || (window.FilterInputElement = FilterInputElement, window.customElements.define('filter-input', FilterInputElement));const De = new Set(['👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🙏', '✍️', '💅', '🤳', '💪', '🦵', '🦶', '👂', '🦻', '👃', '👶', '🧒', '👦', '👧', '🧑', '👱', '👨', '🧔', '👱‍♂️', '👨‍🦰', '👨‍🦱', '👨‍🦳', '👨‍🦲', '👩', '👱‍♀️', '👩‍🦰', '👩‍🦱', '👩‍🦳', '👩‍🦲', '🧓', '👴', '👵', '🙍', '🙍‍♂️', '🙍‍♀️', '🙎', '🙎‍♂️', '🙎‍♀️', '🙅', '🙅‍♂️', '🙅‍♀️', '🙆', '🙆‍♂️', '🙆‍♀️', '💁', '💁‍♂️', '💁‍♀️', '🙋', '🙋‍♂️', '🙋‍♀️', '🧏', '🧏‍♂️', '🧏‍♀️', '🙇', '🙇‍♂️', '🙇‍♀️', '🤦', '🤦‍♂️', '🤦‍♀️', '🤷', '🤷‍♂️', '🤷‍♀️', '👨‍⚕️', '👩‍⚕️', '👨‍🎓', '👩‍🎓', '👨‍🏫', '👩‍🏫', '👨‍⚖️', '👩‍⚖️', '👨‍🌾', '👩‍🌾', '👨‍🍳', '👩‍🍳', '👨‍🔧', '👩‍🔧', '👨‍🏭', '👩‍🏭', '👨‍💼', '👩‍💼', '👨‍🔬', '👩‍🔬', '👨‍💻', '👩‍💻', '👨‍🎤', '👩‍🎤', '👨‍🎨', '👩‍🎨', '👨‍✈️', '👩‍✈️', '👨‍🚀', '👩‍🚀', '👨‍🚒', '👩‍🚒', '👮', '👮‍♂️', '👮‍♀️', '🕵️', '🕵️‍♂️', '🕵️‍♀️', '💂', '💂‍♂️', '💂‍♀️', '👷', '👷‍♂️', '👷‍♀️', '🤴', '👸', '👳', '👳‍♂️', '👳‍♀️', '👲', '🧕', '🤵', '👰', '🤰', '🤱', '👼', '🎅', '🤶', '🦸', '🦸‍♂️', '🦸‍♀️', '🦹', '🦹‍♂️', '🦹‍♀️', '🧙', '🧙‍♂️', '🧙‍♀️', '🧚', '🧚‍♂️', '🧚‍♀️', '🧛', '🧛‍♂️', '🧛‍♀️', '🧜', '🧜‍♂️', '🧜‍♀️', '🧝', '🧝‍♂️', '🧝‍♀️', '💆', '💆‍♂️', '💆‍♀️', '💇', '💇‍♂️', '💇‍♀️', '🚶', '🚶‍♂️', '🚶‍♀️', '🧍', '🧍‍♂️', '🧍‍♀️', '🧎', '🧎‍♂️', '🧎‍♀️', '👨‍🦯', '👩‍🦯', '👨‍🦼', '👩‍🦼', '👨‍🦽', '👩‍🦽', '🏃', '🏃‍♂️', '🏃‍♀️', '💃', '🕺', '🕴️', '🧖', '🧖‍♂️', '🧖‍♀️', '🧗', '🧗‍♂️', '🧗‍♀️', '🏇', '🏂', '🏌️', '🏌️‍♂️', '🏌️‍♀️', '🏄', '🏄‍♂️', '🏄‍♀️', '🚣', '🚣‍♂️', '🚣‍♀️', '🏊', '🏊‍♂️', '🏊‍♀️', '⛹️', '⛹️‍♂️', '⛹️‍♀️', '🏋️', '🏋️‍♂️', '🏋️‍♀️', '🚴', '🚴‍♂️', '🚴‍♀️', '🚵', '🚵‍♂️', '🚵‍♀️', '🤸', '🤸‍♂️', '🤸‍♀️', '🤽', '🤽‍♂️', '🤽‍♀️', '🤾', '🤾‍♂️', '🤾‍♀️', '🤹', '🤹‍♂️', '🤹‍♀️', '🧘', '🧘‍♂️', '🧘‍♀️', '🛀', '🛌', '🧑‍🤝‍🧑', '👭', '👫', '👬']);function _e(t) { return De.has(t); } function He(t) { return [...t].filter((t) => !Fe(t.codePointAt(0))).join(''); } function Ne(t, e) { const n = [...t].map((t) => t.codePointAt(0));return n[1] && (Fe(n[1]) || n[1] === 65039) ? n[1] = e : n.splice(1, 0, e), String.fromCodePoint(...n); } function Fe(t) { return t >= 127995 && t <= 127999; } function qe(t) { switch (t) { case 1: return 127995;case 2: return 127996;case 3: return 127997;case 4: return 127998;case 5: return 127999;default: return null; } } class GEmojiElement extends HTMLElement {
      get image() { return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild : null; }

      get tone() { return (this.getAttribute('tone') || '').split(' ').map((t) => { const e = parseInt(t, 10);return e >= 0 && e <= 5 ? e : 0; }).join(' '); }

      set tone(t) { this.setAttribute('tone', t); }

      connectedCallback() {
        if (this.image === null && !(function () {
          const t = /\bWindows NT 6.1\b/.test(navigator.userAgent),
            e = /\bWindows NT 6.2\b/.test(navigator.userAgent),
            n = /\bWindows NT 6.3\b/.test(navigator.userAgent),
            i = /\bFreeBSD\b/.test(navigator.userAgent),
            s = /\bLinux\b/.test(navigator.userAgent);return !(t || e || n || s || i);
        }())) { const t = this.getAttribute('fallback-src');if (t) { this.textContent = '';const e = (function (t) { const e = document.createElement('img');return e.className = 'emoji', e.alt = t.getAttribute('alias') || '', e.height = 20, e.width = 20, e; }(this));e.src = t, this.appendChild(e); } } this.hasAttribute('tone') && Be(this);
      }

      static get observedAttributes() { return ['tone']; }

      attributeChangedCallback(t) { switch (t) { case 'tone': Be(this); } }
    } function Be(t) { if (t.image) return;const e = t.tone.split(' ').map((t) => parseInt(t, 10));if (e.length === 0)t.textContent = He(t.textContent || '');else if (e.length === 1) { const n = e[0];t.textContent = n === 0 ? He(t.textContent || '') : (function (t, e) { const n = He(t);if (!_e(n)) return t;const i = qe(e);return i ? n.split('‍').map((t) => (_e(t) ? Ne(t, i) : t)).join('‍') : t; }(t.textContent || '', n)); } else t.textContent = (function (t, e) { const n = He(t);if (!_e(n)) return t;const i = e.map((t) => qe(t));return n.split('‍').map((t) => { if (!_e(t)) return t;const e = i.shift();return e ? Ne(t, e) : t; }).join('‍'); }(t.textContent || '', e)); }window.customElements.get('g-emoji') || (window.GEmojiElement = GEmojiElement, window.customElements.define('g-emoji', GEmojiElement));const Pe = document.createElement('template');Pe.innerHTML = '\n  <div class="crop-wrapper">\n    <img width="100%" class="crop-image" alt="">\n    <div class="crop-container">\n      <div data-crop-box class="crop-box">\n        <div class="crop-outline"></div>\n        <div data-direction="nw" class="handle nw"></div>\n        <div data-direction="ne" class="handle ne"></div>\n        <div data-direction="sw" class="handle sw"></div>\n        <div data-direction="se" class="handle se"></div>\n      </div>\n    </div>\n  </div>\n';const Re = new WeakMap(),
      Oe = new WeakMap(),
      We = new WeakMap();function Ve(t) {
      const e = t.currentTarget;if (!(e instanceof ImageCropElement)) return;const { box: n, image: i } = We.get(e) || {};let s = 0,
        r = 0;if (t.type === 'keydown')t.key === 'ArrowUp' ? r = -1 : t.key === 'ArrowDown' ? r = 1 : t.key === 'ArrowLeft' ? s = -1 : t.key === 'ArrowRight' && (s = 1);else if (Oe.has(e) && t instanceof MouseEvent) { const n = Oe.get(e);if (!n) return;s = t.pageX - n.dragStartX, r = t.pageY - n.dragStartY; } if (s !== 0 || r !== 0) {
        const t = Math.min(Math.max(0, n.offsetLeft + s), i.width - n.offsetWidth),
          o = Math.min(Math.max(0, n.offsetTop + r), i.height - n.offsetHeight);n.style.left = ''.concat(t, 'px'), n.style.top = ''.concat(o, 'px'), Xe(e, { x: t, y: o, width: n.offsetWidth, height: n.offsetHeight });
      }t instanceof MouseEvent && Oe.set(e, { dragStartX: t.pageX, dragStartY: t.pageY });
    } function $e(t) {
      const e = t.target;if (!(e instanceof HTMLElement)) return;const n = e.closest('image-crop');if (!(n instanceof ImageCropElement)) return;const { box: i } = We.get(n) || {},
        s = n.getBoundingClientRect();let r,
        o,
        a;if (t.key) { if (t.key === 'Escape') return Ye(n);if (t.key === '-' && (a = -10), t.key === '=' && (a = 10), !a) return;r = i.offsetWidth + a, o = i.offsetHeight + a, Re.set(n, { startX: i.offsetLeft, startY: i.offsetTop }); } else if (t instanceof MouseEvent) { const e = Re.get(n);if (!e) return;r = t.pageX - e.startX - s.left - window.pageXOffset, o = t.pageY - e.startY - s.top - window.pageYOffset; }r && o && Ue(n, r, o, !(t instanceof KeyboardEvent));
    } function je(t) {
      const e = t.currentTarget;if (!(e instanceof HTMLElement)) return;const n = e.closest('image-crop');if (!(n instanceof ImageCropElement)) return;const { box: i } = We.get(n) || {},
        s = t.target;if (s instanceof HTMLElement) if (s.hasAttribute('data-direction')) { const e = s.getAttribute('data-direction');n.addEventListener('mousemove', $e), ['nw', 'se'].indexOf(e) >= 0 && n.classList.add('nwse'), ['ne', 'sw'].indexOf(e) >= 0 && n.classList.add('nesw'), Re.set(n, { startX: i.offsetLeft + (['se', 'ne'].indexOf(e) >= 0 ? 0 : i.offsetWidth), startY: i.offsetTop + (['se', 'sw'].indexOf(e) >= 0 ? 0 : i.offsetHeight) }), $e(t); } else n.addEventListener('mousemove', Ve);
    } function Ue(t, e, n) {
      let i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        s = Math.max(Math.abs(e), Math.abs(n), 10);const r = Re.get(t);if (!r) return;const { box: o, image: a } = We.get(t) || {};s = Math.min(s, n > 0 ? a.height - r.startY : r.startY, e > 0 ? a.width - r.startX : r.startX);const c = i ? Math.round(Math.max(0, e > 0 ? r.startX : r.startX - s)) : o.offsetLeft,
        l = i ? Math.round(Math.max(0, n > 0 ? r.startY : r.startY - s)) : o.offsetTop;o.style.left = ''.concat(c, 'px'), o.style.top = ''.concat(l, 'px'), o.style.width = ''.concat(s, 'px'), o.style.height = ''.concat(s, 'px'), Xe(t, { x: c, y: l, width: s, height: s });
    } function Ke(t) { const e = t.currentTarget;if (!(e instanceof HTMLElement)) return;const n = e.closest('image-crop');n instanceof ImageCropElement && (n.loaded = !0, Ye(n)); } function Ye(t) {
      const { image: e } = We.get(t) || {},
        n = Math.round(e.clientWidth > e.clientHeight ? e.clientHeight : e.clientWidth);Re.set(t, { startX: (e.clientWidth - n) / 2, startY: (e.clientHeight - n) / 2 }), Ue(t, n, n);
    } function ze(t) { const e = t.currentTarget;e instanceof ImageCropElement && (Oe.delete(e), e.classList.remove('nwse', 'nesw'), e.removeEventListener('mousemove', $e), e.removeEventListener('mousemove', Ve)); } function Xe(t, e) {
      const { image: n } = We.get(t) || {},
        i = n.naturalWidth / n.width;for (const s in e) { const n = Math.round(e[s] * i);e[s] = n;const r = t.querySelector("[data-image-crop-input='".concat(s, "']"));r instanceof HTMLInputElement && (r.value = n.toString()); }t.dispatchEvent(new CustomEvent('image-crop-change', { bubbles: !0, detail: e }));
    } class ImageCropElement extends HTMLElement {
      connectedCallback() { if (We.has(this)) return;this.appendChild(document.importNode(Pe.content, !0));const t = this.querySelector('[data-crop-box]');if (!(t instanceof HTMLElement)) return;const e = this.querySelector('img');e instanceof HTMLImageElement && (We.set(this, { box: t, image: e }), e.addEventListener('load', Ke), this.addEventListener('mouseleave', ze), this.addEventListener('mouseup', ze), t.addEventListener('mousedown', je), this.addEventListener('keydown', Ve), this.addEventListener('keydown', $e), this.src && (e.src = this.src)); }

      static get observedAttributes() { return ['src']; }

      get src() { return this.getAttribute('src'); }

      set src(t) { t ? this.setAttribute('src', t) : this.removeAttribute('src'); }

      get loaded() { return this.hasAttribute('loaded'); }

      set loaded(t) { t ? this.setAttribute('loaded', '') : this.removeAttribute('loaded'); }

      attributeChangedCallback(t, e, n) { const { image: i } = We.get(this) || {};t === 'src' && (this.loaded = !1, i && (i.src = n)); }
    }window.customElements.get('image-crop') || (window.ImageCropElement = ImageCropElement, window.customElements.define('image-crop', ImageCropElement));const Qe = new WeakMap();function Ge(t, e) { setTimeout((() => { e.dispatchEvent(new Event(t)); }), 0); } async function Ze(t) { return Je(t).then(((e) => { const n = t.parentNode;n && (t.insertAdjacentHTML('afterend', e), n.removeChild(t)); }), (() => { t.classList.add('is-error'); })); } function Je(t) { const e = t.src;let n = Qe.get(t);return n && n.src === e ? n.data : (n = e ? t.load() : Promise.reject(new Error('missing src')), Qe.set(t, { src: e, data: n }), n); } class IncludeFragmentElement extends HTMLElement {
      constructor() { super(), this._attached = !1; }

      static get observedAttributes() { return ['src']; }

      get src() { const t = this.getAttribute('src');if (t) { const e = this.ownerDocument.createElement('a');return e.href = t, e.href; } return ''; }

      set src(t) { this.setAttribute('src', t); }

      get accept() { return this.getAttribute('accept') || ''; }

      set accept(t) { this.setAttribute('accept', t); }

      get data() { return Je(this); }

      attributeChangedCallback(t) { t === 'src' && this._attached && Ze(this); }

      connectedCallback() { this._attached = !0, this.src && Ze(this); }

      disconnectedCallback() { this._attached = !1; }

      request() { const t = this.src;if (!t) throw new Error('missing src');return new Request(t, { method: 'GET', credentials: 'same-origin', headers: { Accept: this.accept || 'text/html' } }); }

      load() {
        return Promise.resolve().then(() => (Ge('loadstart', this), this.fetch(this.request()))).then((t) => { if (t.status !== 200) throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);const e = t.headers.get('Content-Type');if (!(n = this.accept, n && n.split(',').find((t) => t.match(/^\s*\*\/\*/)) || e && e.includes(this.accept ? this.accept : 'text/html'))) throw new Error(`Failed to load resource: expected ${this.accept || 'text/html'} but was ${e}`);let n;return t; }).then((t) => t.text())
          .then((t) => (Ge('load', this), Ge('loadend', this), t), (t) => { throw Ge('error', this), Ge('loadend', this), t; });
      }

      fetch(t) { return fetch(t); }
    }t('I', IncludeFragmentElement), window.customElements.get('include-fragment') || (window.IncludeFragmentElement = IncludeFragmentElement, window.customElements.define('include-fragment', IncludeFragmentElement));const tn = ['[data-md-button]', 'md-header', 'md-bold', 'md-italic', 'md-quote', 'md-code', 'md-link', 'md-image', 'md-unordered-list', 'md-ordered-list', 'md-task-list', 'md-mention', 'md-ref'];function en(t) { const e = [];for (const n of t.querySelectorAll(tn.join(', ')))n.hidden || n.offsetWidth <= 0 && n.offsetHeight <= 0 || n.closest('markdown-toolbar') === t && e.push(n);return e; } const nn = new WeakMap();class MarkdownButtonElement extends HTMLElement {
      constructor() { super();const t = () => { const t = nn.get(this);t && pn(this, t); };let e;this.addEventListener('keydown', (e = t, function (t) { t.key !== ' ' && t.key !== 'Enter' || (t.preventDefault(), e(t)); })), this.addEventListener('click', t); }

      connectedCallback() { this.hasAttribute('role') || this.setAttribute('role', 'button'); }

      click() { const t = nn.get(this);t && pn(this, t); }
    } class MarkdownHeaderButtonElement extends MarkdownButtonElement {constructor() { super();const t = parseInt(this.getAttribute('level') || '3', 10);if (t < 1 || t > 6) return;const e = `${'#'.repeat(t)} `;nn.set(this, { prefix: e }); }}window.customElements.get('md-header') || (window.MarkdownHeaderButtonElement = MarkdownHeaderButtonElement, window.customElements.define('md-header', MarkdownHeaderButtonElement));class MarkdownBoldButtonElement extends MarkdownButtonElement {
      constructor() { super(), nn.set(this, { prefix: '**', suffix: '**', trimFirst: !0 }); }

      connectedCallback() { super.connectedCallback(), this.setAttribute('hotkey', 'b'); }
    }window.customElements.get('md-bold') || (window.MarkdownBoldButtonElement = MarkdownBoldButtonElement, window.customElements.define('md-bold', MarkdownBoldButtonElement));class MarkdownItalicButtonElement extends MarkdownButtonElement {
      constructor() { super(), nn.set(this, { prefix: '_', suffix: '_', trimFirst: !0 }); }

      connectedCallback() { super.connectedCallback(), this.setAttribute('hotkey', 'i'); }
    }window.customElements.get('md-italic') || (window.MarkdownItalicButtonElement = MarkdownItalicButtonElement, window.customElements.define('md-italic', MarkdownItalicButtonElement));class MarkdownQuoteButtonElement extends MarkdownButtonElement {constructor() { super(), nn.set(this, { prefix: '> ', multiline: !0, surroundWithNewlines: !0 }); }}window.customElements.get('md-quote') || (window.MarkdownQuoteButtonElement = MarkdownQuoteButtonElement, window.customElements.define('md-quote', MarkdownQuoteButtonElement));class MarkdownCodeButtonElement extends MarkdownButtonElement {constructor() { super(), nn.set(this, { prefix: '`', suffix: '`', blockPrefix: '```', blockSuffix: '```' }); }}window.customElements.get('md-code') || (window.MarkdownCodeButtonElement = MarkdownCodeButtonElement, window.customElements.define('md-code', MarkdownCodeButtonElement));class MarkdownLinkButtonElement extends MarkdownButtonElement {
      constructor() { super(), nn.set(this, { prefix: '[', suffix: '](url)', replaceNext: 'url', scanFor: 'https?://' }); }

      connectedCallback() { super.connectedCallback(), this.setAttribute('hotkey', 'k'); }
    }window.customElements.get('md-link') || (window.MarkdownLinkButtonElement = MarkdownLinkButtonElement, window.customElements.define('md-link', MarkdownLinkButtonElement));class MarkdownImageButtonElement extends MarkdownButtonElement {constructor() { super(), nn.set(this, { prefix: '![', suffix: '](url)', replaceNext: 'url', scanFor: 'https?://' }); }}window.customElements.get('md-image') || (window.MarkdownImageButtonElement = MarkdownImageButtonElement, window.customElements.define('md-image', MarkdownImageButtonElement));class MarkdownUnorderedListButtonElement extends MarkdownButtonElement {constructor() { super(), nn.set(this, { prefix: '- ', multiline: !0, surroundWithNewlines: !0 }); }}window.customElements.get('md-unordered-list') || (window.MarkdownUnorderedListButtonElement = MarkdownUnorderedListButtonElement, window.customElements.define('md-unordered-list', MarkdownUnorderedListButtonElement));class MarkdownOrderedListButtonElement extends MarkdownButtonElement {constructor() { super(), nn.set(this, { prefix: '1. ', multiline: !0, orderedList: !0 }); }}window.customElements.get('md-ordered-list') || (window.MarkdownOrderedListButtonElement = MarkdownOrderedListButtonElement, window.customElements.define('md-ordered-list', MarkdownOrderedListButtonElement));class MarkdownTaskListButtonElement extends MarkdownButtonElement {
      constructor() { super(), nn.set(this, { prefix: '- [ ] ', multiline: !0, surroundWithNewlines: !0 }); }

      connectedCallback() { super.connectedCallback(), this.setAttribute('hotkey', 'L'); }
    }window.customElements.get('md-task-list') || (window.MarkdownTaskListButtonElement = MarkdownTaskListButtonElement, window.customElements.define('md-task-list', MarkdownTaskListButtonElement));class MarkdownMentionButtonElement extends MarkdownButtonElement {constructor() { super(), nn.set(this, { prefix: '@', prefixSpace: !0 }); }}window.customElements.get('md-mention') || (window.MarkdownMentionButtonElement = MarkdownMentionButtonElement, window.customElements.define('md-mention', MarkdownMentionButtonElement));class MarkdownRefButtonElement extends MarkdownButtonElement {constructor() { super(), nn.set(this, { prefix: '#', prefixSpace: !0 }); }}window.customElements.get('md-ref') || (window.MarkdownRefButtonElement = MarkdownRefButtonElement, window.customElements.define('md-ref', MarkdownRefButtonElement));const sn = navigator.userAgent.match(/Macintosh/) ? 'Meta' : 'Control';class MarkdownToolbarElement extends HTMLElement {
      constructor() { super(); }

      connectedCallback() { this.hasAttribute('role') || this.setAttribute('role', 'toolbar'), this.addEventListener('keydown', on);const t = cn.bind(null, this);this.field && (this.field.addEventListener('keydown', t), an.set(this, t)), this.setAttribute('tabindex', '0'), this.addEventListener('focus', rn, { once: !0 }); }

      disconnectedCallback() { const t = an.get(this);t && this.field && (this.field.removeEventListener('keydown', t), an.delete(this)), this.removeEventListener('keydown', on); }

      get field() { const t = this.getAttribute('for');if (!t) return null;const e = 'getRootNode' in this ? this.getRootNode() : document;let n;return (e instanceof Document || e instanceof ShadowRoot) && (n = e.getElementById(t)), n instanceof HTMLTextAreaElement ? n : null; }
    } function rn({ target: t }) { if (!(t instanceof Element)) return;t.removeAttribute('tabindex');let e = '0';for (const n of en(t))n.setAttribute('tabindex', e), e === '0' && (n.focus(), e = '-1'); } function on(t) {
      const e = t.key;if (e !== 'ArrowRight' && e !== 'ArrowLeft' && e !== 'Home' && e !== 'End') return;const n = t.currentTarget;if (!(n instanceof HTMLElement)) return;const i = en(n),
        s = i.indexOf(t.target),
        r = i.length;if (s === -1) return;let o = 0;e === 'ArrowLeft' && (o = s - 1), e === 'ArrowRight' && (o = s + 1), e === 'End' && (o = r - 1), o < 0 && (o = r - 1), o > r - 1 && (o = 0);for (let a = 0;a < r;a += 1)i[a].setAttribute('tabindex', a === o ? '0' : '-1');t.preventDefault(), i[o].focus();
    } const an = new WeakMap();function cn(t, e) { if (e.metaKey && sn === 'Meta' || e.ctrlKey && sn === 'Control') { const n = t.querySelector(`[hotkey="${e.key}"]`);n && (n.click(), e.preventDefault()); } } function ln(t) { return t.trim().split('\n').length > 1; } function un(t, e) { return Array(e + 1).join(t); } function dn(t, e, n) { let i = e;const s = n ? /\n/ : /\s/;for (;t[i] && !t[i].match(s);)i++;return i; }window.customElements.get('markdown-toolbar') || (window.MarkdownToolbarElement = MarkdownToolbarElement, window.customElements.define('markdown-toolbar', MarkdownToolbarElement));let hn = null;function mn(t, e) {
      const n = t.value.slice(t.selectionStart, t.selectionEnd);let i;i = e.orderedList ? (function (t) {
        const e = /^\d+\.\s+/,
          n = t.selectionStart === t.selectionEnd;let i,
          s,
          r,
          o,
          a = t.value.slice(t.selectionStart, t.selectionEnd),
          c = a,
          l = a.split('\n');if (n) { const e = t.value.slice(0, t.selectionStart).split(/\n/);r = t.selectionStart - e[e.length - 1].length, o = dn(t.value, t.selectionStart, !0), c = t.value.slice(r, o); } const u = c.split('\n');if (u.every((t) => e.test(t))) { if (l = u.map((t) => t.replace(e, '')), a = l.join('\n'), n && r && o) { const e = u[0].length - l[0].length;s = i = t.selectionStart - e, t.selectionStart = r, t.selectionEnd = o; } } else {
          l = (function (t) {
            let e,
              n,
              i;const s = [];for (i = e = 0, n = t.length;e < n;i = ++e) { const e = t[i];s.push(`${i + 1}. ${e}`); } return s;
          }(l)), a = l.join('\n');const { newlinesToAppend: e, newlinesToPrepend: r } = fn(t);s = t.selectionStart + e.length, i = s + a.length, n && (s = i), a = e + a + r;
        } return { text: a, selectionStart: s, selectionEnd: i };
      }(t)) : e.multiline && ln(n) ? (function (t, e) {
        const { prefix: n, suffix: i, surroundWithNewlines: s } = e;let r = t.value.slice(t.selectionStart, t.selectionEnd),
          o = t.selectionStart,
          a = t.selectionEnd;const c = r.split('\n');if (c.every((t) => t.startsWith(n) && t.endsWith(i)))r = c.map((t) => t.slice(n.length, t.length - i.length)).join('\n'), a = o + r.length;else if (r = c.map((t) => n + t + i).join('\n'), s) { const { newlinesToAppend: e, newlinesToPrepend: n } = fn(t);o += e.length, a = o + r.length, r = e + r + n; } return { text: r, selectionStart: o, selectionEnd: a };
      }(t, e)) : (function (t, e) {
        let n,
          i;const { prefix: s, suffix: r, blockPrefix: o, blockSuffix: a, replaceNext: c, prefixSpace: l, scanFor: u, surroundWithNewlines: d } = e,
          h = t.selectionStart,
          m = t.selectionEnd;let f = t.value.slice(t.selectionStart, t.selectionEnd),
          p = ln(f) && o.length > 0 ? `${o}\n` : s,
          g = ln(f) && a.length > 0 ? `\n${a}` : r;if (l) { const e = t.value[t.selectionStart - 1];t.selectionStart === 0 || e == null || e.match(/\s/) || (p = ` ${p}`); }f = (function (t, e, n, i = !1) {
          if (t.selectionStart === t.selectionEnd)t.selectionStart = (function (t, e) { let n = e;for (;t[n] && t[n - 1] != null && !t[n - 1].match(/\s/);)n--;return n; }(t.value, t.selectionStart)), t.selectionEnd = dn(t.value, t.selectionEnd, i);else {
            const i = t.selectionStart - e.length,
              s = t.selectionEnd + n.length,
              r = t.value.slice(i, t.selectionStart) === e,
              o = t.value.slice(t.selectionEnd, s) === n;r && o && (t.selectionStart = i, t.selectionEnd = s);
          } return t.value.slice(t.selectionStart, t.selectionEnd);
        }(t, p, g, e.multiline));let v = t.selectionStart,
          b = t.selectionEnd;const E = c.length > 0 && g.indexOf(c) > -1 && f.length > 0;if (d) { const e = fn(t);n = e.newlinesToAppend, i = e.newlinesToPrepend, p = n + s, g += i; } if (f.startsWith(p) && f.endsWith(g)) { const t = f.slice(p.length, f.length - g.length);if (h === m) { let e = h - p.length;e = Math.max(e, v), e = Math.min(e, v + t.length), v = b = e; } else b = v + t.length;return { text: t, selectionStart: v, selectionEnd: b }; } if (E) { if (u.length > 0 && f.match(u)) { g = g.replace(c, f);const t = p + g;return v = b = v + p.length, { text: t, selectionStart: v, selectionEnd: b }; } { const t = p + f + g;return v = v + p.length + f.length + g.indexOf(c), b = v + c.length, { text: t, selectionStart: v, selectionEnd: b }; } } { let t = p + f + g;v = h + p.length, b = m + p.length;const n = f.match(/^\s*|\s*$/g);if (e.trimFirst && n) {
          const e = n[0] || '',
            i = n[1] || '';t = e + p + f.trim() + g + i, v += e.length, b -= i.length;
        } return { text: t, selectionStart: v, selectionEnd: b }; }
      }(t, e)), (function (t, { text: e, selectionStart: n, selectionEnd: i }) {
        const s = t.selectionStart,
          r = t.value.slice(0, s),
          o = t.value.slice(t.selectionEnd);if (hn === null || !0 === hn) { t.contentEditable = 'true';try { hn = document.execCommand('insertText', !1, e); } catch (a) { hn = !1; }t.contentEditable = 'false'; } if (hn && !t.value.slice(0, t.selectionStart).endsWith(e) && (hn = !1), !hn) { try { document.execCommand('ms-beginUndoUnit'); } catch (Ei) {}t.value = r + e + o;try { document.execCommand('ms-endUndoUnit'); } catch (Ei) {}t.dispatchEvent(new CustomEvent('input', { bubbles: !0, cancelable: !0 })); }n != null && i != null ? t.setSelectionRange(n, i) : t.setSelectionRange(s, t.selectionEnd);
      }(t, i));
    } function fn(t) {
      const e = t.value.slice(0, t.selectionStart),
        n = t.value.slice(t.selectionEnd),
        i = e.match(/\n*$/),
        s = n.match(/^\n*/),
        r = i ? i[0].length : 0,
        o = s ? s[0].length : 0;let a,
        c;return e.match(/\S/) && r < 2 && (a = un('\n', 2 - r)), n.match(/\S/) && o < 2 && (c = un('\n', 2 - o)), a == null && (a = ''), c == null && (c = ''), { newlinesToAppend: a, newlinesToPrepend: c };
    } function pn(t, e) {
      const n = t.closest('markdown-toolbar');if (!(n instanceof MarkdownToolbarElement)) return;const i = { prefix: '', suffix: '', blockPrefix: '', blockSuffix: '', multiline: !1, replaceNext: '', prefixSpace: !1, scanFor: '', surroundWithNewlines: !1, orderedList: !1, trimFirst: !1, ...e },
        s = n.field;s && (s.focus(), mn(s, i));
    }t('y', MarkdownToolbarElement);const gn = new WeakMap();class RemoteInputElement extends HTMLElement {
      constructor() {
        super();const t = vn.bind(null, this, !0),
          e = { currentQuery: null, oninput: bn(t), fetch: t, controller: null };gn.set(this, e);
      }

      static get observedAttributes() { return ['src']; }

      attributeChangedCallback(t, e) { e && t === 'src' && vn(this, !1); }

      connectedCallback() { const t = this.input;if (!t) return;t.setAttribute('autocomplete', 'off'), t.setAttribute('spellcheck', 'false');const e = gn.get(this);e && (t.addEventListener('focus', e.fetch), t.addEventListener('change', e.fetch), t.addEventListener('input', e.oninput)); }

      disconnectedCallback() { const t = this.input;if (!t) return;const e = gn.get(this);e && (t.removeEventListener('focus', e.fetch), t.removeEventListener('change', e.fetch), t.removeEventListener('input', e.oninput)); }

      get input() { const t = this.querySelector('input, textarea');return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : null; }

      get src() { return this.getAttribute('src') || ''; }

      set src(t) { this.setAttribute('src', t); }
    } async function vn(t, e) {
      const n = t.input;if (!n) return;const i = gn.get(t);if (!i) return;const s = n.value;if (e && i.currentQuery === s) return;i.currentQuery = s;const r = t.src;if (!r) return;const o = document.getElementById(t.getAttribute('aria-owns') || '');if (!o) return;const a = new URL(r, window.location.href),
        c = new URLSearchParams(a.search);let l;c.append(t.getAttribute('param') || 'q', s), a.search = c.toString(), i.controller ? i.controller.abort() : (t.dispatchEvent(new CustomEvent('loadstart')), t.setAttribute('loading', '')), i.controller = 'AbortController' in window ? new AbortController() : { signal: null, abort() {} };let u = '';try { l = await (async function (t, e, n) { try { const i = await fetch(e, n);return t.dispatchEvent(new CustomEvent('load')), t.dispatchEvent(new CustomEvent('loadend')), i; } catch (i) { throw i.name !== 'AbortError' && (t.dispatchEvent(new CustomEvent('error')), t.dispatchEvent(new CustomEvent('loadend'))), i; } }(t, a.toString(), { signal: i.controller.signal, credentials: 'same-origin', headers: { accept: 'text/fragment+html' } })), u = await l.text(), t.removeAttribute('loading'), i.controller = null; } catch (d) { return void (d.name !== 'AbortError' && (t.removeAttribute('loading'), i.controller = null)); }l && l.ok ? (o.innerHTML = u, t.dispatchEvent(new CustomEvent('remote-input-success', { bubbles: !0 }))) : t.dispatchEvent(new CustomEvent('remote-input-error', { bubbles: !0 }));
    } function bn(t) { let e;return function () { clearTimeout(e), e = setTimeout(() => { clearTimeout(e), t(); }, 300); }; }t('R', RemoteInputElement), window.customElements.get('remote-input') || (window.RemoteInputElement = RemoteInputElement, window.customElements.define('remote-input', RemoteInputElement));class TabContainerElement extends HTMLElement {
      constructor() {
        super(), this.addEventListener('keydown', (t) => {
          const e = t.target;if (!(e instanceof HTMLElement)) return;if (e.getAttribute('role') !== 'tab' && !e.closest('[role="tablist"]')) return;const n = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]')),
            i = n.indexOf(n.find((t) => t.matches('[aria-selected="true"]')));if (t.code === 'ArrowRight') { let t = i + 1;t >= n.length && (t = 0), En(this, t); } else if (t.code === 'ArrowLeft') { let t = i - 1;t < 0 && (t = n.length - 1), En(this, t); } else t.code === 'Home' ? (En(this, 0), t.preventDefault()) : t.code === 'End' && (En(this, n.length - 1), t.preventDefault());
        }), this.addEventListener('click', (t) => { const e = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]'));if (!(t.target instanceof Element)) return;const n = t.target.closest('[role="tab"]');n && n.closest('[role="tablist"]') && En(this, e.indexOf(n)); });
      }

      connectedCallback() { for (const t of this.querySelectorAll('[role="tablist"] [role="tab"]'))t.hasAttribute('aria-selected') || t.setAttribute('aria-selected', 'false'), t.hasAttribute('tabindex') || (t.getAttribute('aria-selected') === 'true' ? t.setAttribute('tabindex', '0') : t.setAttribute('tabindex', '-1')); }
    } function En(t, e) {
      const n = t.querySelectorAll('[role="tablist"] [role="tab"]'),
        i = t.querySelectorAll('[role="tabpanel"]'),
        s = n[e],
        r = i[e];if (t.dispatchEvent(new CustomEvent('tab-container-change', { bubbles: !0, cancelable: !0, detail: { relatedTarget: r } }))) { for (const t of n)t.setAttribute('aria-selected', 'false'), t.setAttribute('tabindex', '-1');for (const t of i)t.hidden = !0, t.hasAttribute('tabindex') || t.hasAttribute('data-tab-container-no-tabstop') || t.setAttribute('tabindex', '0');s.setAttribute('aria-selected', 'true'), s.setAttribute('tabindex', '0'), s.focus(), r.hidden = !1, t.dispatchEvent(new CustomEvent('tab-container-changed', { bubbles: !0, detail: { relatedTarget: r } })); }
    }t('e', TabContainerElement), window.customElements.get('tab-container') || (window.TabContainerElement = TabContainerElement, window.customElements.define('tab-container', TabContainerElement));const wn = new WeakMap();let yn = null;function xn(t, e) { return t.closest('task-lists') === e.closest('task-lists'); } function An(t) {
      if (t.currentTarget !== t.target) return;const e = t.currentTarget;if (!(e instanceof Element)) return;const n = e.closest('.contains-task-list');if (!n) return;if (e.classList.add('is-ghost'), t.dataTransfer && t.dataTransfer.setData('text/plain', (e.textContent || '').trim()), !e.parentElement) return;const i = Array.from(e.parentElement.children),
        s = i.indexOf(e),
        r = wn.get(e);r && r.sortStarted(n), yn = { didDrop: !1, dragging: e, dropzone: e, sourceList: n, sourceSibling: i[s + 1] || null, sourceIndex: s };
    } function kn(t) { if (!yn) return;const e = t.currentTarget;e instanceof Element && (xn(yn.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = 'move'), yn.dropzone !== e && (yn.dragging.classList.add('is-dragging'), yn.dropzone = e, !(function (t, e) { if (t.parentNode === e.parentNode) { let n = t;for (;n;) { if (n === e) return !0;n = n.previousElementSibling; } } return !1; }(yn.dragging, e)) ? e.after(yn.dragging) : e.before(yn.dragging))) : t.stopPropagation()); } function Tn(t) {
      if (!yn) return;t.preventDefault(), t.stopPropagation();const e = t.currentTarget;if (!(e instanceof Element)) return;if (yn.didDrop = !0, !yn.dragging.parentElement) return;let n = Array.from(yn.dragging.parentElement.children).indexOf(yn.dragging);const i = e.closest('.contains-task-list');if (!i) return;if (yn.sourceIndex === n && yn.sourceList === i) return;yn.sourceList === i && yn.sourceIndex < n && n++;const s = { list: yn.sourceList, index: yn.sourceIndex },
        r = { list: i, index: n },
        o = wn.get(yn.dragging);o && o.sortFinished({ src: s, dst: r });
    } function Mn() { yn && (yn.dragging.classList.remove('is-dragging'), yn.dragging.classList.remove('is-ghost'), yn.didDrop || yn.sourceList.insertBefore(yn.dragging, yn.sourceSibling), yn = null); } function Ln(t) { if (!yn) return;const e = t.currentTarget;e instanceof Element && (xn(yn.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = 'move')) : t.stopPropagation()); } const Cn = new WeakMap();class TaskListsElement extends HTMLElement {
      constructor() { super(), this.addEventListener('change', (t) => { const e = t.target;e instanceof HTMLInputElement && e.classList.contains('task-list-item-checkbox') && this.dispatchEvent(new CustomEvent('task-lists-check', { bubbles: !0, detail: { position: Nn(e), checked: e.checked } })); }), Cn.set(this, new MutationObserver(Bn.bind(null, this))); }

      connectedCallback() { const t = Cn.get(this);t && t.observe(this, { childList: !0, subtree: !0 }), Bn(this); }

      disconnectedCallback() { const t = Cn.get(this);t && t.disconnect(); }

      get disabled() { return this.hasAttribute('disabled'); }

      set disabled(t) { t ? this.setAttribute('disabled', '') : this.removeAttribute('disabled'); }

      get sortable() { return this.hasAttribute('sortable'); }

      set sortable(t) { t ? this.setAttribute('sortable', '') : this.removeAttribute('sortable'); }

      static get observedAttributes() { return ['disabled']; }

      attributeChangedCallback(t, e, n) { if (e !== n) switch (t) { case 'disabled': Pn(this); } }
    } const Sn = document.createElement('template');Sn.innerHTML = '\n  <span class="handle">\n    <svg class="drag-handle" aria-hidden="true" width="16" height="15" version="1.1" viewBox="0 0 16 15">\n      <path d="M12,4V5H4V4h8ZM4,8h8V7H4V8Zm0,3h8V10H4v1Z"></path>\n    </svg>\n  </span>';const In = new WeakMap();function Dn(t) {
      if (In.get(t)) return;In.set(t, !0);const e = t.closest('task-lists');if (!(e instanceof TaskListsElement)) return;if (e.querySelectorAll('.task-list-item').length <= 1) return;const n = Sn.content.cloneNode(!0),
        i = n.querySelector('.handle');if (t.prepend(n), !i) throw new Error('handle not found');i.addEventListener('mouseenter', $n), i.addEventListener('mouseleave', jn), (function (t, e, n) { wn.set(t, { sortStarted: e, sortFinished: n }), t.addEventListener('dragstart', An), t.addEventListener('dragenter', kn), t.addEventListener('dragend', Mn), t.addEventListener('drop', Tn), t.addEventListener('dragover', Ln); }(t, Wn, Vn)), t.addEventListener('mouseenter', _n), t.addEventListener('mouseleave', Hn);
    } function _n(t) { const e = t.currentTarget;if (!(e instanceof Element)) return;const n = e.closest('task-lists');n instanceof TaskListsElement && n.sortable && !n.disabled && e.classList.add('hovered'); } function Hn(t) { const e = t.currentTarget;e instanceof Element && e.classList.remove('hovered'); } function Nn(t) {
      const e = Fn(t);if (!e) throw new Error('.contains-task-list not found');const n = t.closest('.task-list-item'),
        i = n ? Array.from(e.children).indexOf(n) : -1;return [Rn(e), i];
    } function Fn(t) { const e = t.parentElement;return e ? e.closest('.contains-task-list') : null; } function qn(t) { return Fn(t) === (function t(e) { const n = Fn(e);return n ? t(n) || n : null; }(t)); } function Bn(t) { const e = t.querySelectorAll('.contains-task-list > .task-list-item');for (const n of e)qn(n) && Dn(n);Pn(t); } function Pn(t) { for (const e of t.querySelectorAll('.task-list-item'))e.classList.toggle('enabled', !t.disabled);for (const e of t.querySelectorAll('.task-list-item-checkbox'))e instanceof HTMLInputElement && (e.disabled = t.disabled); } function Rn(t) { const e = t.closest('task-lists');if (!e) throw new Error('parent not found');return Array.from(e.querySelectorAll('ol, ul')).indexOf(t); } const On = new WeakMap();function Wn(t) { const e = t.closest('task-lists');if (!e) throw new Error('parent not found');On.set(e, Array.from(e.querySelectorAll('ol, ul'))); } function Vn({ src: t, dst: e }) { const n = t.list.closest('task-lists');if (!n) return;const i = On.get(n);i && (On.delete(n), n.dispatchEvent(new CustomEvent('task-lists-move', { bubbles: !0, detail: { src: [i.indexOf(t.list), t.index], dst: [i.indexOf(e.list), e.index] } }))); } function $n(t) { const e = t.currentTarget;if (!(e instanceof Element)) return;const n = e.closest('.task-list-item');if (!n) return;const i = n.closest('task-lists');i instanceof TaskListsElement && i.sortable && !i.disabled && n.setAttribute('draggable', 'true'); } function jn(t) { if (yn) return;const e = t.currentTarget;if (!(e instanceof Element)) return;const n = e.closest('.task-list-item');n && n.setAttribute('draggable', 'false'); }window.customElements.get('task-lists') || (window.TaskListsElement = TaskListsElement, window.customElements.define('task-lists', TaskListsElement)), t('T', TaskListsElement);const Un = /\s|\(|\[/;function Kn(t, e, n) { const i = t.lastIndexOf(e, n - 1);if (i === -1) return;if (t.lastIndexOf(' ', n - 1) > i) return;const s = t[i - 1];return !s || Un.test(s) ? { word: t.substring(i + e.length, n), position: i + e.length } : void 0; } const Yn = ['position:absolute;', 'overflow:auto;', 'word-wrap:break-word;', 'top:0px;', 'left:-9999px;'],
      zn = ['box-sizing', 'font-family', 'font-size', 'font-style', 'font-variant', 'font-weight', 'height', 'letter-spacing', 'line-height', 'max-height', 'min-height', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'border-bottom', 'border-left', 'border-right', 'border-top', 'text-decoration', 'text-indent', 'text-transform', 'width', 'word-spacing'],
      Xn = new WeakMap();function Qn(t, e = t.selectionEnd) {
      const { mirror: n, marker: i } = (function (t, e) {
          const n = t.nodeName.toLowerCase();if (n !== 'textarea' && n !== 'input') throw new Error('expected textField to a textarea or input');let i = Xn.get(t);if (i && i.parentElement === t.parentElement)i.innerHTML = '';else {
            i = document.createElement('div'), Xn.set(t, i);const e = window.getComputedStyle(t),
              s = Yn.slice(0);n === 'textarea' ? s.push('white-space:pre-wrap;') : s.push('white-space:nowrap;');for (let t = 0, n = zn.length;t < n;t++) { const n = zn[t];s.push(`${n}:${e.getPropertyValue(n)};`); }i.style.cssText = s.join(' ');
          } const s = document.createElement('span');let r,
            o;if (s.style.cssText = 'position: absolute;', s.innerHTML = '&nbsp;', typeof e === 'number') { let n = t.value.substring(0, e);n && (r = document.createTextNode(n)), n = t.value.substring(e), n && (o = document.createTextNode(n)); } else { const e = t.value;e && (r = document.createTextNode(e)); } if (r && i.appendChild(r), i.appendChild(s), o && i.appendChild(o), !i.parentElement) { if (!t.parentElement) throw new Error('textField must have a parentElement to mirror');t.parentElement.insertBefore(i, t); } return i.scrollTop = t.scrollTop, i.scrollLeft = t.scrollLeft, { mirror: i, marker: s };
        }(t, e)),
        s = n.getBoundingClientRect(),
        r = i.getBoundingClientRect();return setTimeout(() => { n.remove(); }, 5e3), { top: r.top - s.top, left: r.left - s.left };
    } const Gn = new WeakMap();class TextExpander {
      constructor(t, e) { this.expander = t, this.input = e, this.combobox = null, this.menu = null, this.match = null, this.justPasted = !1, this.oninput = this.onInput.bind(this), this.onpaste = this.onPaste.bind(this), this.onkeydown = this.onKeydown.bind(this), this.oncommit = this.onCommit.bind(this), this.onmousedown = this.onMousedown.bind(this), this.onblur = this.onBlur.bind(this), this.interactingWithList = !1, e.addEventListener('paste', this.onpaste), e.addEventListener('input', this.oninput), e.addEventListener('keydown', this.onkeydown), e.addEventListener('blur', this.onblur); }

      destroy() { this.input.removeEventListener('paste', this.onpaste), this.input.removeEventListener('input', this.oninput), this.input.removeEventListener('keydown', this.onkeydown), this.input.removeEventListener('blur', this.onblur); }

      activate(t, e) { if (this.input !== document.activeElement) return;this.deactivate(), this.menu = e, e.id || (e.id = `text-expander-${Math.floor(1e5 * Math.random()).toString()}`), this.expander.append(e), this.combobox = new Combobox(this.input, e);const { top: n, left: i } = Qn(this.input, t.position);e.style.top = `${n}px`, e.style.left = `${i}px`, this.combobox.start(), e.addEventListener('combobox-commit', this.oncommit), e.addEventListener('mousedown', this.onmousedown), this.combobox.navigate(1); }

      deactivate() { const t = this.menu;t && this.combobox && (this.menu = null, t.removeEventListener('combobox-commit', this.oncommit), t.removeEventListener('mousedown', this.onmousedown), this.combobox.destroy(), t.remove()); }

      onCommit({ target: t }) {
        const e = t;if (!(e instanceof HTMLElement)) return;if (!this.combobox) return;const n = this.match;if (!n) return;const i = this.input.value.substring(0, n.position - n.key.length),
          s = this.input.value.substring(n.position + n.text.length),
          r = { item: e, key: n.key, value: null };if (!this.expander.dispatchEvent(new CustomEvent('text-expander-value', { cancelable: !0, detail: r }))) return;if (!r.value) return;const o = `${r.value} `;this.input.value = i + o + s, this.deactivate(), this.input.focus();const a = i.length + o.length;this.input.selectionStart = a, this.input.selectionEnd = a;
      }

      onBlur() { this.interactingWithList ? this.interactingWithList = !1 : this.deactivate(); }

      onPaste() { this.justPasted = !0; }

      async onInput() { if (this.justPasted) return void (this.justPasted = !1);const t = this.findMatch();if (t) { this.match = t;const e = await this.notifyProviders(t);if (!this.match) return;e ? this.activate(t, e) : this.deactivate(); } else this.match = null, this.deactivate(); }

      findMatch() {
        const t = this.input.selectionEnd,
          e = this.input.value;for (const n of this.expander.keys) { const i = Kn(e, n, t);if (i) return { text: i.word, key: n, position: i.position }; }
      }

      async notifyProviders(t) { const e = [];if (this.expander.dispatchEvent(new CustomEvent('text-expander-change', { cancelable: !0, detail: { provide: (t) => e.push(t), text: t.text, key: t.key } }))) return (await Promise.all(e)).filter((t) => t.matched).map((t) => t.fragment)[0]; }

      onMousedown() { this.interactingWithList = !0; }

      onKeydown(t) { t.key === 'Escape' && (this.deactivate(), t.stopImmediatePropagation(), t.preventDefault()); }
    } class TextExpanderElement extends HTMLElement {
      get keys() { const t = this.getAttribute('keys');return t ? t.split(' ') : []; }

      connectedCallback() { const t = this.querySelector('input[type="text"], textarea');if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;const e = new TextExpander(this, t);Gn.set(this, e); }

      disconnectedCallback() { const t = Gn.get(this);t && (t.destroy(), Gn.delete(this)); }
    }window.customElements.get('text-expander') || (window.TextExpanderElement = TextExpanderElement, window.customElements.define('text-expander', TextExpanderElement));const Zn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      Jn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];function ti(t) { return '0'.concat(t).slice(-2); } function ei(t, e) {
      const n = t.getDay(),
        i = t.getDate(),
        s = t.getMonth(),
        r = t.getFullYear(),
        o = t.getHours(),
        a = t.getMinutes(),
        c = t.getSeconds();return e.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g, ((e) => { let l;switch (e[1]) { case '%': return '%';case 'a': return Zn[n].slice(0, 3);case 'A': return Zn[n];case 'b': return Jn[s].slice(0, 3);case 'B': return Jn[s];case 'c': return t.toString();case 'd': return ti(i);case 'e': return String(i);case 'H': return ti(o);case 'I': return ti(ei(t, '%l'));case 'l': return String(o === 0 || o === 12 ? 12 : (o + 12) % 12);case 'm': return ti(s + 1);case 'M': return ti(a);case 'p': return o > 11 ? 'PM' : 'AM';case 'P': return o > 11 ? 'pm' : 'am';case 'S': return ti(c);case 'w': return String(n);case 'y': return ti(r % 100);case 'Y': return String(r);case 'Z': return l = t.toString().match(/\((\w+)\)$/), l ? l[1] : '';case 'z': return l = t.toString().match(/\w([+-]\d\d\d\d) /), l ? l[1] : ''; } return ''; }));
    } function ni(t) { let e;return function () { if (e) return e;if ('Intl' in window) try { return e = new Intl.DateTimeFormat(void 0, t), e; } catch (Ei) { if (!(Ei instanceof RangeError)) throw Ei; } }; }let ii = null;const si = ni({ day: 'numeric', month: 'short' });function ri() { if (ii !== null) return ii;const t = si();if (t) { const e = t.format(new Date(0));return ii = !!e.match(/^\d/), ii; } return !1; }let oi = null;const ai = ni({ day: 'numeric', month: 'short', year: 'numeric' });function ci(t) { const e = t.closest('[lang]');return e instanceof HTMLElement && e.lang ? e.lang : 'default'; } const li = new WeakMap();class ExtendedTimeElement extends HTMLElement {
      static get observedAttributes() { return ['datetime', 'day', 'format', 'lang', 'hour', 'minute', 'month', 'second', 'title', 'weekday', 'year']; }

      connectedCallback() { const t = this.getFormattedTitle();t && !this.hasAttribute('title') && this.setAttribute('title', t);const e = this.getFormattedDate();e && (this.textContent = e); }

      attributeChangedCallback(t, e, n) {
        const i = this.getFormattedTitle();if (t === 'datetime') { const t = Date.parse(n);isNaN(t) ? li.delete(this) : li.set(this, new Date(t)); } const s = this.getFormattedTitle(),
          r = this.getAttribute('title');t === 'title' || !s || r && r !== i || this.setAttribute('title', s);const o = this.getFormattedDate();o && (this.textContent = o);
      }

      get date() { return li.get(this); }

      getFormattedTitle() { const t = this.date;if (!t) return;const e = ui();if (e) return e.format(t);try { return t.toLocaleString(); } catch (Ei) { if (Ei instanceof RangeError) return t.toString();throw Ei; } }

      getFormattedDate() {}
    } const ui = ni({ day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }),
      di = new WeakMap();class LocalTimeElement extends ExtendedTimeElement {
      attributeChangedCallback(t, e, n) { t !== 'hour' && t !== 'minute' && t !== 'second' && t !== 'time-zone-name' || di.delete(this), super.attributeChangedCallback(t, e, n); }

      getFormattedDate() {
        const t = this.date;if (!t) return;const e = (function (t, e) { const n = { weekday: { short: '%a', long: '%A' }, day: { numeric: '%e', '2-digit': '%d' }, month: { short: '%b', long: '%B' }, year: { numeric: '%Y', '2-digit': '%y' } };let i = ri() ? 'weekday day month year' : 'weekday month day, year';for (const s in n) { const e = n[s][t.getAttribute(s)];i = i.replace(s, e || ''); } return i = i.replace(/(\s,)|(,\s$)/, ''), ei(e, i).replace(/\s+/, ' ').trim(); }(this, t)) || '',
          n = (function (t, e) {
            const n = {},
              i = t.getAttribute('hour');i !== 'numeric' && i !== '2-digit' || (n.hour = i);const s = t.getAttribute('minute');s !== 'numeric' && s !== '2-digit' || (n.minute = s);const r = t.getAttribute('second');r !== 'numeric' && r !== '2-digit' || (n.second = r);const o = t.getAttribute('time-zone-name');o !== 'short' && o !== 'long' || (n.timeZoneName = o);if (Object.keys(n).length === 0) return;let a = di.get(t);a || (a = ni(n), di.set(t, a));const c = a();if (c) return c.format(e); { const t = n.second ? '%H:%M:%S' : '%H:%M';return ei(e, t); }
          }(this, t)) || '';return ''.concat(e, ' ').concat(n).trim();
      }
    }window.customElements.get('local-time') || (window.LocalTimeElement = LocalTimeElement, window.customElements.define('local-time', LocalTimeElement));class RelativeTime {
      constructor(t, e) { this.date = t, this.locale = e; }

      toString() { const t = this.timeElapsed();if (t) return t; { const t = this.timeAhead();return t || 'on '.concat(this.formatDate()); } }

      timeElapsed() {
        const t = (new Date()).getTime() - this.date.getTime(),
          e = Math.round(t / 1e3),
          n = Math.round(e / 60),
          i = Math.round(n / 60),
          s = Math.round(i / 24);return t >= 0 && s < 30 ? this.timeAgoFromMs(t) : null;
      }

      timeAhead() {
        const t = this.date.getTime() - (new Date()).getTime(),
          e = Math.round(t / 1e3),
          n = Math.round(e / 60),
          i = Math.round(n / 60),
          s = Math.round(i / 24);return t >= 0 && s < 30 ? this.timeUntil() : null;
      }

      timeAgo() { const t = (new Date()).getTime() - this.date.getTime();return this.timeAgoFromMs(t); }

      timeAgoFromMs(t) {
        const e = Math.round(t / 1e3),
          n = Math.round(e / 60),
          i = Math.round(n / 60),
          s = Math.round(i / 24),
          r = Math.round(s / 30),
          o = Math.round(r / 12);return t < 0 ? hi(this.locale, 0, 'second') : e < 10 ? hi(this.locale, 0, 'second') : e < 45 ? hi(this.locale, -e, 'second') : e < 90 ? hi(this.locale, -n, 'minute') : n < 45 ? hi(this.locale, -n, 'minute') : n < 90 ? hi(this.locale, -i, 'hour') : i < 24 ? hi(this.locale, -i, 'hour') : i < 36 ? hi(this.locale, -s, 'day') : s < 30 ? hi(this.locale, -s, 'day') : r < 18 ? hi(this.locale, -r, 'month') : hi(this.locale, -o, 'year');
      }

      microTimeAgo() {
        const t = (new Date()).getTime() - this.date.getTime(),
          e = Math.round(t / 1e3),
          n = Math.round(e / 60),
          i = Math.round(n / 60),
          s = Math.round(i / 24),
          r = Math.round(s / 30),
          o = Math.round(r / 12);return n < 1 ? '1m' : n < 60 ? ''.concat(n, 'm') : i < 24 ? ''.concat(i, 'h') : s < 365 ? ''.concat(s, 'd') : ''.concat(o, 'y');
      }

      timeUntil() { const t = this.date.getTime() - (new Date()).getTime();return this.timeUntilFromMs(t); }

      timeUntilFromMs(t) {
        const e = Math.round(t / 1e3),
          n = Math.round(e / 60),
          i = Math.round(n / 60),
          s = Math.round(i / 24),
          r = Math.round(s / 30),
          o = Math.round(r / 12);return r >= 18 ? hi(this.locale, o, 'year') : r >= 12 ? hi(this.locale, o, 'year') : s >= 45 ? hi(this.locale, r, 'month') : s >= 30 ? hi(this.locale, r, 'month') : i >= 36 ? hi(this.locale, s, 'day') : i >= 24 ? hi(this.locale, s, 'day') : n >= 90 ? hi(this.locale, i, 'hour') : n >= 45 ? hi(this.locale, i, 'hour') : e >= 90 ? hi(this.locale, n, 'minute') : e >= 45 ? hi(this.locale, n, 'minute') : hi(this.locale, e >= 10 ? e : 0, 'second');
      }

      microTimeUntil() {
        const t = this.date.getTime() - (new Date()).getTime(),
          e = Math.round(t / 1e3),
          n = Math.round(e / 60),
          i = Math.round(n / 60),
          s = Math.round(i / 24),
          r = Math.round(s / 30),
          o = Math.round(r / 12);return s >= 365 ? ''.concat(o, 'y') : i >= 24 ? ''.concat(s, 'd') : n >= 60 ? ''.concat(i, 'h') : n > 1 ? ''.concat(n, 'm') : '1m';
      }

      formatDate() { let t = ri() ? '%e %b' : '%b %e';let e;return e = this.date, (new Date()).getUTCFullYear() !== e.getUTCFullYear() && (t += (function () { if (oi !== null) return oi;const t = ai();if (t) { const e = t.format(new Date(0));return oi = !!e.match(/\d,/), oi; } return !0; }()) ? ', %Y' : ' %Y'), ei(this.date, t); }

      formatTime() { const t = mi();return t ? t.format(this.date) : ei(this.date, '%l:%M%P'); }
    } function hi(t, e, n) { const i = (function (t, e) { if ('Intl' in window && 'RelativeTimeFormat' in window.Intl) try { return new Intl.RelativeTimeFormat(t, e); } catch (Ei) { if (!(Ei instanceof RangeError)) throw Ei; } }(t, { numeric: 'auto' }));return i ? i.format(e, n) : (function (t, e) { if (t === 0) switch (e) { case 'year': case 'quarter': case 'month': case 'week': return 'this '.concat(e);case 'day': return 'today';case 'hour': case 'minute': return 'in 0 '.concat(e, 's');case 'second': return 'now'; } else if (t === 1) switch (e) { case 'year': case 'quarter': case 'month': case 'week': return 'next '.concat(e);case 'day': return 'tomorrow';case 'hour': case 'minute': case 'second': return 'in 1 '.concat(e); } else if (t === -1) switch (e) { case 'year': case 'quarter': case 'month': case 'week': return 'last '.concat(e);case 'day': return 'yesterday';case 'hour': case 'minute': case 'second': return '1 '.concat(e, ' ago'); } else if (t > 1) switch (e) { case 'year': case 'quarter': case 'month': case 'week': case 'day': case 'hour': case 'minute': case 'second': return 'in '.concat(t, ' ').concat(e, 's'); } else if (t < -1) switch (e) { case 'year': case 'quarter': case 'month': case 'week': case 'day': case 'hour': case 'minute': case 'second': return ''.concat(-t, ' ').concat(e, 's ago'); } throw new RangeError("Invalid unit argument for format() '".concat(e, "'")); }(e, n)); } const mi = ni({ hour: 'numeric', minute: '2-digit' });class RelativeTimeElement extends ExtendedTimeElement {
      getFormattedDate() { const t = this.date;if (t) return new RelativeTime(t, ci(this)).toString(); }

      connectedCallback() { fi.push(this), pi || (gi(), pi = setInterval(gi, 6e4)), super.connectedCallback(); }

      disconnectedCallback() { const t = fi.indexOf(this);t !== -1 && fi.splice(t, 1), fi.length || pi && (clearInterval(pi), pi = null); }
    }t('j', RelativeTimeElement);const fi = [];let pi;function gi() {
      let t,
        e,
        n;for (e = 0, n = fi.length;e < n;e++)t = fi[e], t.textContent = t.getFormattedDate() || '';
    }window.customElements.get('relative-time') || (window.RelativeTimeElement = RelativeTimeElement, window.customElements.define('relative-time', RelativeTimeElement));class TimeAgoElement extends RelativeTimeElement {
      getFormattedDate() {
        const t = this.getAttribute('format'),
          e = this.date;if (e) return t === 'micro' ? new RelativeTime(e, ci(this)).microTimeAgo() : new RelativeTime(e, ci(this)).timeAgo();
      }
    }window.customElements.get('time-ago') || (window.TimeAgoElement = TimeAgoElement, window.customElements.define('time-ago', TimeAgoElement));class TimeUntilElement extends RelativeTimeElement {
      getFormattedDate() {
        const t = this.getAttribute('format'),
          e = this.date;if (e) return t === 'micro' ? new RelativeTime(e, ci(this)).microTimeUntil() : new RelativeTime(e, ci(this)).timeUntil();
      }
    }window.customElements.get('time-until') || (window.TimeUntilElement = TimeUntilElement, window.customElements.define('time-until', TimeUntilElement)), window.IncludeFragmentElement.prototype.fetch = (t) => (t.headers.append('X-Requested-With', 'XMLHttpRequest'), window.fetch(t));t('M', class MultiMap {
      constructor(t) { if (this.map = new Map(), t) for (const [e, n] of t) this.set(e, n); }

      get(t) { const e = this.map.get(t);return e || new Set(); }

      set(t, e) { let n = this.map.get(t);return n || (n = new Set(), this.map.set(t, n)), n.add(e), this; }

      has(t) { return this.map.has(t); }

      delete(t, e) { const n = this.map.get(t);if (!n) return !1;if (!e) return this.map.delete(t);const i = n.delete(e);return n.size || this.map.delete(t), i; }

      drain(t) { const e = [];for (const n of this.keys()) this.delete(n, t) && !this.has(n) && e.push(n);return e; }

      keys() { return this.map.keys(); }

      values() { return this.map.values(); }

      entries() { return this.map.entries(); }

      [Symbol.iterator]() { return this.entries(); }

      clear() { this.map.clear(); }

      get size() { return this.map.size; }
    });let vi,
      bi,
      Ei = function () { return ''.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1e12); },
      wi = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;return { name: t, value: e, delta: 0, entries: [], id: Ei(), isFinal: !1 }; },
      yi = function (t, e) { try { if (PerformanceObserver.supportedEntryTypes.includes(t)) { const n = new PerformanceObserver(((t) => { return t.getEntries().map(e); }));return n.observe({ type: t, buffered: !0 }), n; } } catch (t) {} },
      xi = !1,
      Ai = !1,
      ki = function (t) { xi = !t.persisted; },
      Ti = function () { addEventListener('pagehide', ki), addEventListener('unload', (() => {})); },
      Mi = function (t) { const e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];Ai || (Ti(), Ai = !0), addEventListener('visibilitychange', ((e) => { const n = e.timeStamp;document.visibilityState === 'hidden' && t({ timeStamp: n, isUnloading: xi }); }), { capture: !0, once: e }); },
      Li = function (t, e, n, i) { let s;return function () { n && e.isFinal && n.disconnect(), e.value >= 0 && (i || e.isFinal || document.visibilityState === 'hidden') && (e.delta = e.value - (s || 0), (e.delta || e.isFinal || void 0 === s) && (t(e), s = e.value)); }; },
      Ci = (t('p', (function (t) {
        let e,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = wi('CLS', 0),
          s = function (t) { t.hadRecentInput || (i.value += t.value, i.entries.push(t), e()); },
          r = yi('layout-shift', s);r && (e = Li(t, i, r, n), Mi(((t) => { const n = t.isUnloading;r.takeRecords().map(s), n && (i.isFinal = !0), e(); })));
      })), function () { return void 0 === vi && (vi = document.visibilityState === 'hidden' ? 0 : 1 / 0, Mi(((t) => { const e = t.timeStamp;return vi = e; }), !0)), { get timeStamp() { return vi; } }; }),
      Si = (t('v', ((t) => {
        let e,
          n = wi('FCP'),
          i = Ci(),
          s = yi('paint', ((t) => { t.name === 'first-contentful-paint' && t.startTime < i.timeStamp && (n.value = t.startTime, n.isFinal = !0, n.entries.push(t), e()); }));s && (e = Li(t, n, s));
      })), t('m', ((t) => {
        var e = wi('FID'),
          n = Ci(),
          i = function (t) { t.startTime < n.timeStamp && (e.value = t.processingStart - t.startTime, e.entries.push(t), e.isFinal = !0, r()); },
          s = yi('first-input', i),
          r = Li(t, e, s);s ? Mi((() => { s.takeRecords().map(i), s.disconnect(); }), !0) : window.perfMetrics && window.perfMetrics.onFirstInputDelay && window.perfMetrics.onFirstInputDelay(((t, i) => { i.timeStamp < n.timeStamp && (e.value = t, e.isFinal = !0, e.entries = [{ entryType: 'first-input', name: i.type, target: i.target, cancelable: i.cancelable, startTime: i.timeStamp, processingStart: i.timeStamp + t }], r()); }));
      })), function () { return bi || (bi = new Promise(((t) => { return ['scroll', 'keydown', 'pointerdown'].map(((e) => { addEventListener(e, t, { once: !0, passive: !0, capture: !0 }); })); }))), bi; });t('l', (function (t) {
      let e,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = wi('LCP'),
        s = Ci(),
        r = function (t) { const n = t.startTime;n < s.timeStamp ? (i.value = n, i.entries.push(t)) : i.isFinal = !0, e(); },
        o = yi('largest-contentful-paint', r);if (o) { e = Li(t, i, o, n);const a = function () { i.isFinal || (o.takeRecords().map(r), i.isFinal = !0, e()); };Si().then(a), Mi(a, !0); }
    })), t('s', ((t) => {
      let e,
        n = wi('TTFB');e = function () {
        try {
          const e = performance.getEntriesByType('navigation')[0] || (function () {
            const t = performance.timing,
              e = { entryType: 'navigation', startTime: 0 };for (const n in t)n !== 'navigationStart' && n !== 'toJSON' && (e[n] = Math.max(t[n] - t.navigationStart, 0));return e;
          }());n.value = n.delta = e.responseStart, n.entries = [e], n.isFinal = !0, t(n);
        } catch (t) {}
      }, document.readyState === 'complete' ? setTimeout(e, 0) : addEventListener('pageshow', e);
    }));
  } };
}));
//# sourceMappingURL=vendor-c2a9e66e.js.map
