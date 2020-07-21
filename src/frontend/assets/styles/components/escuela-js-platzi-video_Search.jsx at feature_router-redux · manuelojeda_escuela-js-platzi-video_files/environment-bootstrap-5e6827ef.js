!(function () {
  'use strict';

  function e(e) { const t = [];for (const o of (function () { try { return document.cookie.split(';'); } catch (e) { return []; } }())) { const [n, r] = o.trim().split('=');e === n && void 0 !== r && t.push({ key: n, value: r }); } return t; } function t(e) {
    return e.split('\n').reduce(((e, t) => {
      const a = (function (e) {
        const t = o.exec(e);if (!t) return null;const r = t[2] && t[2].indexOf('native') === 0,
          l = t[2] && t[2].indexOf('eval') === 0,
          i = n.exec(t[2]);l && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]);return { file: r ? null : t[2], methodName: t[1] || '<unknown>', arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
      }(t)) || (function (e) { const t = r.exec(e);if (!t) return null;return { file: t[2], methodName: t[1] || '<unknown>', arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null }; }(t)) || (function (e) {
        const t = l.exec(e);if (!t) return null;const o = t[3] && t[3].indexOf(' > eval') > -1,
          n = i.exec(t[3]);o && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null);return { file: t[3], methodName: t[1] || '<unknown>', arguments: t[2] ? t[2].split(',') : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
      }(t)) || (function (e) { const t = s.exec(e);if (!t) return null;return { file: t[2], methodName: t[1] || '<unknown>', arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null }; }(t)) || (function (e) { const t = c.exec(e);if (!t) return null;return { file: t[3], methodName: t[1] || '<unknown>', arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null }; }(t));return a && e.push(a), e;
    }), []);
  } var o = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    n = /\((\S*)(?::(\d+))(?::(\d+))\)/;var r = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;var l = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
    i = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;var c = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;var s = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;function a(e) { const t = document.querySelectorAll(e);if (t.length > 0) return t[t.length - 1]; } function u() { return `${window.location.protocol}//${window.location.host}${(function () { const e = a('meta[name=analytics-location]');return e ? e.content : window.location.pathname; }()) + (function () { let e = '';a('meta[name=analytics-location-query-strip]') || (e = window.location.search);const t = a('meta[name=analytics-location-params]');t && (e += (e ? '&' : '?') + t.content);for (const o of document.querySelectorAll('meta[name=analytics-param-rename]')) { const t = o.content.split(':', 2);e = e.replace(new RegExp(`(^|[?&])${t[0]}($|=)`, 'g'), `$1${t[1]}$2`); } return e; }())}`; }let f = !1,
    d = 0;const m = Date.now();async function p(e) {
    let t,
      o;if (!(!g && !f && d < 10 && typeof Blob === 'function' && typeof Intl !== 'undefined' && typeof MutationObserver !== 'undefined' && typeof URLSearchParams !== 'undefined' && typeof WebSocket !== 'undefined' && typeof IntersectionObserver !== 'undefined' && typeof AbortController !== 'undefined' && 'entries' in FormData.prototype && 'append' in Element.prototype) || (function (e) {
      let t,
        o;const n = (o = (t = e.head) === null || void 0 === t ? void 0 : t.querySelector('meta[name="expected-hostname"]')) === null || void 0 === o ? void 0 : o.content;return !!n && n.replace(/\.$/, '').split('.').slice(-2).join('.') !== e.location.hostname.replace(/\.$/, '').split('.').slice(-2).join('.');
    }(document))) return;const n = (o = (t = document.head) === null || void 0 === t ? void 0 : t.querySelector('meta[name="browser-errors-url"]')) === null || void 0 === o ? void 0 : o.content;if (n) if (e.error.stacktrace.some((e) => w.test(e.filename) || w.test(e.function)))f = !0;else { d++;try { await fetch(n, { method: 'post', body: JSON.stringify(e) }); } catch (r) {} }
  } function v(e) { return { type: e.name, value: e.message, stacktrace: y(e) }; } function h(e, t = {}) { return { error: e, sanitizedUrl: u() || window.location.href, readyState: document.readyState, referrer: document.referrer, timeSinceLoad: Math.round(Date.now() - m), user: b() || void 0, ...t }; } function y(e) {
    let o;const n = (function (e) { return t(e.stack || '').map((e) => ({ filename: e.file || '', function: String(e.methodName), lineno: (e.lineNumber || 0).toString(), colno: (e.column || 0).toString() })); }(e)),
      r = (o = e.framesToPop) !== null && void 0 !== o ? o : 0;return r === 0 ? n : n.slice(r);
  } const w = /(chrome|moz|safari)-extension:\/\//;function b() {
    let t,
      o;const n = (o = (t = document.head) === null || void 0 === t ? void 0 : t.querySelector('meta[name="user-login"]')) === null || void 0 === o ? void 0 : o.content;if (n) return n;const r = (function () {
      let t = '';const o = e('_octo'),
        n = [];for (const e of o) { const o = e.value.split('.');if (o.shift() === 'GH1' && o.length > 1) { const e = (o.shift() || '').split('-');e.length === 1 && (e[1] = '1');const r = [Number(e[0]), Number(e[1])];t = o.join('.'), n.push([r, t]); } } return t = '', n.length > 0 && (t = String(n.sort().reverse()[0][1])), t;
    }());return r ? `anonymous-${r}` : null;
  }let g = !1;window.addEventListener('pageshow', () => g = !1), window.addEventListener('pagehide', () => g = !0), window.addEventListener('error', ((e) => { e.error && p(h(v(e.error))); })), window.addEventListener('unhandledrejection', (async (e) => { if (e.promise) try { await e.promise; } catch (t) { !t || t.response instanceof Response || p(h(v(t))); } })), window.location.hash === '#b00m' && setTimeout(() => { throw new Error('b00m'); }), self.System = self.System || (() => {
    const e = {},
      t = {},
      o = (e) => e.replace(/^.\/([\w-]+)-[a-f0-9]{8,}.js$/, './$1.js'),
      n = window.customElements ? Promise.resolve() : new Promise((e, t) => { const o = document.getElementById('js-conditional-compat');if (!(o instanceof HTMLScriptElement)) return t(new Error('unable to load compat.js'));const n = setTimeout(() => { t(new Error('timed out loading compat.js')); }, 1e4);o.onload = () => { clearTimeout(n), e(); }, o.onerror = () => { clearTimeout(n), t(new Error('network error loading compat.js')); }, o.src = o.getAttribute('data-src') || '', o.removeAttribute('data-src'); }),
      r = { register(l, i) {
        const c = o(`./${((document.currentScript || {}).src || '').split('?').shift().split('/').pop()}`),
          s = {},
          a = i((e, t) => (t ? s[e] = t : Object.assign(s, e)), r),
          u = l.map((e, t) => r.import(o(e)).then(a.setters[t]));u.unshift(n), e[c] = Promise.all(u).then(() => (a.execute(), s)), t[c] && (t[c](e[c]), delete t[c]);
      },
      import: (o) => e[o] || (e[o] = new Promise((e, n) => {
        const r = setTimeout(() => { n(new Error(`could not resolve ${o}`)); }, 1e4),
          l = document.querySelector(`script[data-src][data-module-id="${o}"]`);l && (l.setAttribute('src', l.getAttribute('data-src')), l.removeAttribute('data-src')), t[o] = (t) => { clearTimeout(r), e(t); };
      })) };return r;
  })(), window.requestIdleCallback = window.requestIdleCallback || function (e) { const t = Date.now();return setTimeout((() => { e({ didTimeout: !1, timeRemaining() { return Math.max(0, 50 - (Date.now() - t)); } }); }), 1); }, window.cancelIdleCallback = window.cancelIdleCallback || function (e) { clearTimeout(e); }, (function () {
    const e = window,
      t = document;function o() {
      if (!('scrollBehavior' in t.documentElement.style && !0 !== e.__forceSmoothScrollPolyfill__)) {
        var o,
          n = e.HTMLElement || e.Element,
          r = (o = e.navigator.userAgent, new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(o) ? 1 : 0),
          l = { scroll: e.scroll || e.scrollTo, scrollBy: e.scrollBy, elementScroll: n.prototype.scroll || c, scrollIntoView: n.prototype.scrollIntoView },
          i = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now;e.scroll = e.scrollTo = function () { void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? p.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : l.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset)); }, e.scrollBy = function () { void 0 !== arguments[0] && (s(arguments[0]) ? l.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset))); }, n.prototype.scroll = n.prototype.scrollTo = function () {
          if (void 0 !== arguments[0]) {
            if (!0 !== s(arguments[0])) {
              const e = arguments[0].left,
                t = arguments[0].top;p.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t);
            } else { if (typeof arguments[0] === 'number' && void 0 === arguments[1]) throw new SyntaxError("Value couldn't be converted");l.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop); }
          }
        }, n.prototype.scrollBy = function () { void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : l.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop)); }, n.prototype.scrollIntoView = function () {
          if (!0 !== s(arguments[0])) {
            const o = d(this),
              n = o.getBoundingClientRect(),
              r = this.getBoundingClientRect();o !== t.body ? (p.call(this, o, o.scrollLeft + r.left - n.left, o.scrollTop + r.top - n.top), e.getComputedStyle(o).position !== 'fixed' && e.scrollBy({ left: n.left, top: n.top, behavior: 'smooth' })) : e.scrollBy({ left: r.left, top: r.top, behavior: 'smooth' });
          } else l.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        };
      } function c(e, t) { this.scrollLeft = e, this.scrollTop = t; } function s(e) { if (e === null || typeof e !== 'object' || void 0 === e.behavior || e.behavior === 'auto' || e.behavior === 'instant') return !0;if (typeof e === 'object' && e.behavior === 'smooth') return !1;throw new TypeError(`behavior member of ScrollOptions ${e.behavior} is not a valid value for enumeration ScrollBehavior.`); } function a(e, t) { return t === 'Y' ? e.clientHeight + r < e.scrollHeight : t === 'X' ? e.clientWidth + r < e.scrollWidth : void 0; } function u(t, o) { const n = e.getComputedStyle(t, null)[`overflow${o}`];return n === 'auto' || n === 'scroll'; } function f(e) {
        const t = a(e, 'Y') && u(e, 'Y'),
          o = a(e, 'X') && u(e, 'X');return t || o;
      } function d(e) { let o;do { o = (e = e.parentNode) === t.body; } while (!1 === o && !1 === f(e));return o = null, e; } function m(t) {
        let o,
          n,
          r,
          l,
          c = (i() - t.startTime) / 468;l = c = c > 1 ? 1 : c, o = 0.5 * (1 - Math.cos(Math.PI * l)), n = t.startX + (t.x - t.startX) * o, r = t.startY + (t.y - t.startY) * o, t.method.call(t.scrollable, n, r), n === t.x && r === t.y || e.requestAnimationFrame(m.bind(e, t));
      } function p(o, n, r) {
        let s,
          a,
          u,
          f,
          d = i();o === t.body ? (s = e, a = e.scrollX || e.pageXOffset, u = e.scrollY || e.pageYOffset, f = l.scroll) : (s = o, a = o.scrollLeft, u = o.scrollTop, f = c), m({ scrollable: s, method: f, startTime: d, startX: a, startY: u, x: n, y: r });
      }
    } typeof exports === 'object' ? module.exports = { polyfill: o } : o();
  }()), window.getSelection && !(function () { const e = document.createElement('div');return e.style.cssText = '-ms-user-select: element; user-select: contain;', e.style.getPropertyValue('-ms-user-select') === 'element' || e.style.getPropertyValue('-ms-user-select') === 'contain' || e.style.getPropertyValue('user-select') === 'contain'; }()) && document.addEventListener('click', ((e) => { if (!(e.target instanceof Element)) return;const t = e.target.closest('.user-select-contain');if (!t) return;const o = window.getSelection();if (!o.rangeCount) return;const n = o.getRangeAt(0).commonAncestorContainer;t.contains(n) || o.selectAllChildren(t); })), Array.prototype.flatMap || Object.defineProperty(Array.prototype, 'flatMap', { writable: !0, configurable: !0, value(e, t) { return Array.prototype.reduce.call(this, (o, n, r, l) => { const i = e.call(t, n, r, l);return Array.isArray(i) ? o.concat(i) : (o.push(i), o); }, []); } }), Object.fromEntries || (Object.fromEntries = function (e) { const t = {};for (const o of e)t[o[0]] = o[1];return t; }), typeof window.queueMicrotask !== 'function' && (window.queueMicrotask = async function (e) { try { await Promise.resolve(), e(); } catch (t) { setTimeout(() => { throw t; }); } });
}());
//# sourceMappingURL=environment-bootstrap-a2dbe735.js.map
