System.register(['./vendor.js'], ((t) => {
  'use strict';

  let e,
    n,
    o,
    i,
    r,
    a,
    s,
    c,
    l,
    u;return { setters: [function (t) { e = t.S, n = t.q, o = t.o, i = t.a, r = t.f, a = t.g, s = t.n, c = t.b, l = t.c, u = t.T; }],
    execute() {
      t({ $(t, e) {
        const n = t.currentTarget,
          o = { type: (n.method || 'GET').toUpperCase(), url: n.action, container: null, target: n };if (Object.assign(o, e), o.type === 'GET') { if (n.querySelector('input[type=file]')) return;const t = ht(o.url);t.search += (t.search ? '&' : '') + et(n), o.url = t.toString(); } else o.data = new FormData(n);at(o), t.preventDefault();
      },
      A(t, e) { function n(t) { const { currentTarget: o } = t;o && (o.removeEventListener('input', e), o.removeEventListener('blur', n)); }x(t, ((t) => { t.addEventListener('input', e), t.addEventListener('blur', n); })); },
      B: V,
      C(t) { return He.get(t); },
      D(t) { void 0 === t.interactive && (t.interactive = !0);window.ga('send', 'event', t.category, t.action, t.label, t.value, { nonInteraction: !t.interactive }); },
      E(t, e) {
        for (const n in e) {
          const o = e[n],
            i = t.elements.namedItem(n);i instanceof HTMLInputElement ? i.value = o : i instanceof HTMLTextAreaElement && (i.value = o);
        }
      },
      F: f,
      G: Yt,
      H: qe,
      I(t, e) { if (typeof e === 'boolean') { if (!(t instanceof HTMLInputElement)) throw new TypeError('only checkboxes can be set to boolean value');t.checked = e; } else { if (t.type === 'checkbox') throw new TypeError("checkbox can't be set to string value");t.value = e; }Z(t, 'change', !1); },
      async J(t) {
        return He.get(t) || Re(await (e = t, n = 'codeEditor:ready', new Promise((t) => { e.addEventListener(n, t, { once: !0 }); })));let e,
          n;
      },
      async K() {
        await (async function () {
          const t = document.querySelector('link[rel=sso-session]'),
            e = document.querySelector('meta[name=sso-expires-around]');if (!(t instanceof HTMLLinkElement)) return !0;if (!(function (t) { if (!(t instanceof HTMLMetaElement)) return !0;const e = parseInt(t.content);return (new Date()).getTime() / 1e3 > e; }(e))) return !0;const n = t.href,
            o = await m(n, { headers: { Accept: 'application/json' } });return await o.json();
        }()) || (Ye || (Ye = (async function () {
          const t = c(document, 'link[rel=sso-modal]', HTMLLinkElement),
            e = await Fe({ content: w(document, t.href), dialogClass: 'sso-modal' });let n = null;const o = window.external;if (o.ssoComplete = function (t) { t.error ? (n = !1, We(n)) : (n = !0, We(n), (function (t) { const e = document.querySelector('meta[name=sso-expires-around]');e && e.setAttribute('content', t); }(t.expiresAround)), window.focus()), o.ssoComplete = null; }, await (function (t) { return new Promise((e) => { t.addEventListener('dialog:remove', e, { once: !0 }); }); }(e)), !n) throw new Error('sso prompt canceled');
        }()).then(Ke).catch(Ke)), await Ye);
      },
      L(t, e) { return new Promise(((n, o) => { !(function i(r) { m(t, e).then(((t) => { switch (t.status) { case 200: n(t);break;case 202: setTimeout(() => i(1.5 * r), r);break;default: o(new ResponseError$1(t)); } }), o); }(1e3)); })); },
      M: Ue,
      N(t) { return t && t.default || t; },
      O(t, e) { Object.keys($t.children).length === 0 && document.addEventListener('keydown', Ft);const n = (function (t) { return t.split(',').map((t) => t.split(' ')); }(e || t.getAttribute('data-hotkey') || '')).map((e) => $t.insert(e).add(t));Bt.set(t, n); },
      P(t) { const e = Bt.get(t);if (e && e.length) for (const n of e)n && n.delete(t);Object.keys($t.children).length === 0 && document.removeEventListener('keydown', Ft); },
      Q() { return Promise.resolve(); },
      R: Nt,
      S: et,
      async T(t, e, n = !1) { const o = Te.get(t);o == null || o.abort();const i = t.closest('.js-updatable-content[data-url], .js-updatable-content [data-url]');!n && i && i === t && (Le[a(i, 'data-url')] = e);return xe(t, e); },
      U: ye,
      V: Fe,
      X(t) { At.push(t); },
      Y(t, e) { t.removeEventListener('keydown', A), t.removeEventListener('keyup', M), t.removeEventListener('input', O);const n = S.get(t);n && (n.timer != null && n.listener === e && clearTimeout(n.timer), S.delete(t)); },
      Z: E,
      _(t, e) { const n = t.currentTarget;if (t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;if (location.protocol !== n.protocol || location.hostname !== n.hostname) return;if (n.href.indexOf('#') > -1 && pt(n) === pt(location)) return;if (t.defaultPrevented) return;const o = { url: n.href, container: null, target: n };Object.assign(o, e), rt(n, 'pjax:click', { options: o, relatedEvent: t }) && (at(o), t.preventDefault(), rt(n, 'pjax:clicked', { options: o })); },
      a: b,
      async a$(t) {
        const e = Sn(xn, On, t),
          n = await navigator.credentials.create(e);return Sn(jn, Pn, n);
      },
      a0: qt,
      a1: W,
      a2: F,
      a3() { return ot; },
      a4: Ge,
      a5(t) { const e = t.split('‍');let n = 0;for (const o of e) { const t = Array.from(o.split(/[\ufe00-\ufe0f]/).join('')).length;n += t; } return n / e.length; },
      a6: ke,
      a7(t) { return m(t.action, { method: t.method, body: new FormData(t) }); },
      a8: mn,
      a9: N,
      aA() { const t = P[q() - 1];if (t) return t.url; },
      aB() { const t = P[q() + 1];if (t) return t.url; },
      aC(t, e) {
        const n = t.closest('[data-pjax-container]');if (!n) throw new Error(`no pjax container for ${(function (t) { const e = [];let n = t;for (;n && (e.push(Y(n)), !(n instanceof window.Window)) && n.nodeType !== 9 && !n.id;) { if (n.parentNode instanceof Document) { e.push('#document');break; } if (!(n.parentNode instanceof HTMLElement)) break;n = n.parentNode; } return e.reverse().join(' > '); }(t))}`);const o = gt(n),
          i = ht(t.href);return i.search += `${i.search ? '&' : ''}_pjax=${encodeURIComponent(o)}`, m(i.href, { headers: { Accept: 'text/html', 'X-PJAX': 'true', 'X-PJAX-Container': o, ...e && e.headers } });
      },
      aD(t, e) { K.set(t, e), n = e, n.catch(() => {});let n; },
      aE: X,
      aF: Tt,
      aG: ze,
      aH(t, e) { const n = l(t, '[data-notification-id]');e.hasAttribute('data-status') && (function (t, e) { t.classList.toggle('notification-archived', e === 'archived'), t.classList.toggle('notification-unread', e === 'unread'), t.classList.toggle('notification-read', e === 'read'); }(n, a(e, 'data-status')));e.hasAttribute('data-subscription-status') && (function (t, e) { t.classList.toggle('notification-unsubscribed', e === 'unsubscribed'); }(n, a(e, 'data-subscription-status')));e.hasAttribute('data-starred-status') && (function (t, e) { t.classList.toggle('notification-starred', e === 'starred'); }(n, a(e, 'data-starred-status'))); },
      aI: U,
      aJ: Se,
      aM(t) { const e = [];return function (n) { e.push(n), e.length === 1 && queueMicrotask(() => { const n = [...e];e.length = 0, t(n); }); }; },
      aN(t) {
        const e = t.getAttribute('data-details-container') || '.js-details-container',
          n = l(t, e).classList;return n.contains('Details--on') || n.contains('open');
      },
      aO: In,
      async aP() { return window.PublicKeyCredential && window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable && await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable() ? 'supported' : 'unsupported'; },
      aQ: Nn,
      async aR(t) {
        const e = Sn(xn, Hn, t),
          n = await navigator.credentials.get(e);return Sn(jn, Rn, n);
      },
      aT(t, e, n) {
        let o = t.value.substring(0, t.selectionEnd || 0),
          i = t.value.substring(t.selectionEnd || 0);o = o.replace(e, n), i = i.replace(e, n), t.value = o + i, t.selectionStart = o.length, t.selectionEnd = o.length, t.dispatchEvent(new CustomEvent('change', { bubbles: !0, cancelable: !1 }));
      },
      aU: z,
      aV: J,
      aW(t) { Mt.push(t); },
      aX(t) { const e = t.getBoundingClientRect();return { top: e.top + window.pageYOffset, left: e.left + window.pageXOffset }; },
      aY() { return new Promise(window.requestAnimationFrame); },
      aZ: Yn,
      a_(t) { if (Gn(), !t) return;const e = document.createElement('div');e.innerHTML = t, document.body && document.body.append(e);const n = e.querySelector('button');n && n.addEventListener('click', Gn, { once: !0 });document.addEventListener('keydown', (t) => { t.key === 'Escape' && Gn() && t.stopImmediatePropagation(); }), $n = e; },
      aa: vn,
      ab(t) { const e = U(t);e && mn(e); },
      ac(t, e) { window.ga('provide', t, e); },
      ad(t) { window.ga('set', { location: t }); },
      ae(t) { window.ga('set', { title: t }); },
      af(t, e) { window.ga('set', t, e); },
      ag(t, e = { page: '' }) { e.page = t || '', window.ga('send', 'pageview', e); },
      ah(t, e, n = {}) { window.ga('create', t, e, n), window.ga('set', 'transport', 'sendBeacon' in window.navigator ? 'beacon' : 'xhr'); },
      ai(t, e = {}) { window.ga(() => { window.ga('require', t, e); }); },
      aj: En,
      al(t, e) {
        const n = t.selectionEnd || 0,
          o = t.value.substring(0, n),
          i = t.value.substring(n),
          r = t.value === '' || o.match(/\n$/) ? '' : '\n';t.value = o + r + e + i, t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.dispatchEvent(new CustomEvent('change', { bubbles: !0, cancelable: !1 })), t.focus();
      },
      am(t, e, n) { const o = n ? ({ ...n }) : {};o.mode = 'same-origin';const i = new Request(t, o);return i.headers.append('Scoped-CSRF-Token', e), i; },
      ao: tt,
      ap: we,
      aq: Ee,
      ar(t, e) { ce(t), se(t, e); },
      as(t) {
        const e = t.getAttribute('data-hydro-click-payload') || '',
          n = t.getAttribute('data-hydro-click-hmac') || '',
          o = t.getAttribute('data-hydro-client-context') || '';St(e, n, o);
      },
      async at(t) {
        const e = (n = t, n === 'low' || n === 'medium' || n === 'high' || n === 'two_factor' ? n : null);let n;if (!e) throw new Error('invariant violation: level');return await v(`/sessions/in_sudo?requested_access_level=${e}`, { headers: { accept: 'application/json' } }) === 'true' || (async function () {
          if (qn) return !1;qn = !0, Bn = !1;const t = (await (async function () {
            const t = c(document, 'link[rel=sudo-modal]', HTMLLinkElement),
              e = document.querySelector('.js-sudo-prompt');if (e instanceof HTMLTemplateElement) return e;if (t) {
              const e = await w(document, (function (t) {
                const e = new URL(t, window.location.origin),
                  n = new URLSearchParams(e.search.slice(1));return n.set('webauthn-support', In()), e.search = n.toString(), e.toString();
              }(t.href)));return document.body.appendChild(e), c(document, '.js-sudo-prompt', HTMLTemplateElement);
            } throw new Error("couldn't load sudo prompt");
          }())).content.cloneNode(!0);if (!(t instanceof DocumentFragment)) throw new Error('invariant violation: content instanceof DocumentFragment');const e = await Fe({ content: t });return await new Promise((t) => { e.addEventListener('dialog:remove', (() => { qn = !1, t(); }), { once: !0 }); }), Bn;
        }());
      },
      au(t) {
        const e = Xn(t),
          n = (function (t) { const e = t.match(/(file-.+?-)L\d+?/i);return e ? e[1] : ''; }(t));return { blobRange: e, anchorPrefix: n };
      },
      av: Xn,
      aw({ anchorPrefix: t, blobRange: e }) { return e ? `#${t}${(function (t) { const { start: e, end: n } = Fn(t);return e.column != null && n.column != null ? `L${e.line}C${e.column}-L${n.line}C${n.column}` : e.line === n.line ? `L${e.line}` : `L${e.line}-L${n.line}`; }(e))}` : '#'; },
      ax(t, e) {
        const [n, o] = Un(t.start, !0, e),
          [i, r] = Un(t.end, !1, e);if (!n || !i) return;let a = o,
          s = r;a === -1 && (a = 0);s === -1 && (s = i.childNodes.length);if (!n.ownerDocument) throw new Error('DOMRange needs to be inside document');const c = n.ownerDocument.createRange();return c.setStart(n, a), c.setEnd(i, s), c;
      },
      ay(t, e) { e.appendChild(t.extractContents()), t.insertNode(e); },
      az: kn,
      b: w,
      b0: Ce,
      c: j,
      e() { throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs'); },
      async f(t, e) {
        const n = p(t, e);n.headers.set('Accept', 'application/json');const o = await self.fetch(n),
          i = new ResponseError$1(o);return h(o, i), o.json();
      },
      g: v,
      h(t) { const e = S.get(t);e && e.listener.call(null, t); },
      i(t, e, n = { wait: null }) { S.set(t, { keypressed: !1, inputed: !1, timer: void 0, listener: e, wait: n.wait != null ? n.wait : 100 }), t.addEventListener('keydown', A), t.addEventListener('keyup', M), t.addEventListener('input', O); },
      j: Ot,
      k: se,
      l: re,
      m: y,
      n: ae,
      o: x,
      p(t) { at({ url: t.url, container: t.container, replace: t.replace }); },
      q(t, e, n) { function o(e) { const i = e.currentTarget;i && (i.removeEventListener(t, n), i.removeEventListener('blur', o)); }x(e, ((e) => { e.addEventListener(t, n), e.addEventListener('blur', o); })); },
      async s(t) {
        if (Te.get(t)) return;const e = t.hasAttribute('data-retain-focus'),
          n = a(t, 'data-url'),
          o = new AbortController();Te.set(t, o);try { const i = await fetch(n, { signal: o.signal, headers: { Accept: 'text/html', 'X-Requested-With': 'XMLHttpRequest' } });if (!i.ok) return;const r = await i.text();return we(t, e) ? void console.warn('Failed to update content with interactions', t) : (Le[n] = r, xe(t, r, e)); } catch (i) {} finally { Te.delete(t); }
      },
      t(t) {
        const e = t.getAttribute('data-hydro-view') || '',
          n = t.getAttribute('data-hydro-view-hmac') || '',
          o = t.getAttribute('data-hydro-client-context') || '';St(e, n, o);
      },
      u(t) { return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t; },
      v: m,
      w: xt,
      y: Q,
      z: Me });class ResponseError extends Error {constructor(t, e) { super(`${t} for HTTP ${e.status}`), this.response = e; }} function f(t, e) { const n = t.createElement('template');return n.innerHTML = e, t.importNode(n.content, !0); } class ResponseError$1 extends Error {constructor(t) { super(), this.response = t, this.framesToPop = 1; }} const d = window.AbortError || class AbortError extends Error {};function h(t, e) { if (t.status >= 200 && t.status < 300) return t; { const n = t.statusText ? ` ${t.statusText}` : '';throw e.message = `HTTP ${t.status}${n}`, e; } } function p(t, e) { const n = e ? ({ ...e }) : {};n.credentials || (n.credentials = 'same-origin');const o = new Request(t, n);if (o.headers.append('X-Requested-With', 'XMLHttpRequest'), /#csrf-token=/.test(o.url)) throw new TypeError('URL with encoded CSRF token was passed to fetch(); csrfRequestWithToken(url, token) must be used instead');return o; } async function g(t, e) { const n = await self.fetch(t);if (e && e.aborted) throw new d('The operation was aborted');return n; } async function m(t, e) {
        const n = p(t, e),
          o = await g(n, e && e.signal);return h(o, new ResponseError$1(o)), o;
      } async function v(t, e) {
        const n = p(t, e),
          o = await g(n, e && e.signal);return h(o, new ResponseError$1(o)), o.text();
      } async function w(t, e, n) {
        const o = p(e, n),
          i = await g(o, n && n.signal);return h(i, new ResponseError$1(i)), (function (t, e) { const n = e.headers.get('content-type') || '';if (!n.startsWith('text/html')) throw new ResponseError(`expected response with text/html, but was ${n}`, e);const o = e.headers.get('x-html-safe');if (!o) throw new ResponseError('missing X-HTML-Safe nonce', e);if (o !== t) throw new ResponseError('response X-HTML-Safe nonce did not match', e); }((function (t) { const e = t.querySelector('meta[name=html-safe-nonce]');if (e == null || !(e instanceof HTMLMetaElement)) throw new Error('could not find html-safe-nonce on document');const n = e.content;if (n) return n;throw new Error('could not find html-safe-nonce on document'); }(t)), i)), f(t, await i.text());
      } function y(t, e) {
        const n = new Map();return function (...o) {
          const i = e ? e(...o) : JSON.stringify(o),
            r = n.get(i);if (void 0 !== r) return r;const a = t(...o);return n.set(i, a), a;
        };
      } class Subscription {constructor(t) { this.closed = !1, this.unsubscribe = () => { t(), this.closed = !0; }; }} function b(t, e, n, o = { capture: !1 }) { return t.addEventListener(e, n, o), new Subscription(() => { t.removeEventListener(e, n, o); }); } function E(...t) { return new Subscription(() => { for (const e of t)e.unsubscribe(); }); }let k = !1;const T = new e();function L(t) { const e = t.target;if (e instanceof HTMLElement && e.nodeType !== Node.DOCUMENT_NODE) for (const n of T.matches(e))n.data.call(null, e); } function x(t, e) { k || (k = !0, document.addEventListener('focus', L, !0)), T.add(t, e), document.activeElement instanceof HTMLElement && document.activeElement.matches(t) && e(document.activeElement); }t('d', typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});function j(t, e) { return t(e = { exports: {} }, e.exports), e.exports; } const _ = t('r', document.readyState === 'interactive' || document.readyState === 'complete' ? Promise.resolve() : new Promise((t) => { document.addEventListener('DOMContentLoaded', () => { t(); }); })),
        C = t('x', document.readyState === 'complete' ? Promise.resolve() : new Promise((t) => { window.addEventListener('load', t); })),
        S = new WeakMap();function D(t) { const e = S.get(t);e && (e.timer != null && clearTimeout(e.timer), e.timer = window.setTimeout(() => { e.timer != null && (e.timer = null), e.inputed = !1, e.listener.call(null, t); }, e.wait)); } function A(t) {
        const e = t.currentTarget,
          n = S.get(e);n && (n.keypressed = !0, n.timer != null && clearTimeout(n.timer));
      } function M(t) {
        const e = t.currentTarget,
          n = S.get(e);n && (n.keypressed = !1, n.inputed && D(e));
      } function O(t) {
        const e = t.currentTarget,
          n = S.get(e);n && (n.inputed = !0, n.keypressed || D(e));
      } const P = [];let H,
        R = 0;function N() { return H; } function I() { try { return Math.min(Math.max(0, history.length) || 0, 9007199254740991); } catch (xn) { return 0; } } function q() { return I() - 1 + R; } function $(t) { H = t;const e = location.href;P[q()] = { url: e, state: H }, P.length = I(), window.dispatchEvent(new CustomEvent('statechange', { bubbles: !1, cancelable: !1 })); } function B() { return (new Date()).getTime(); } function X(t, e, n) { R = 0;const o = { _id: B(), ...t };history.pushState(o, e, n), $(o); } function V(t, e, n) { const o = { _id: N()._id, ...t };history.replaceState(o, e, n), $(o); } function U(t, e = location.hash) { return F(t, W(e)); } function F(t, e) { return e === '' ? null : t.getElementById(e) || t.getElementsByName(e)[0]; } function W(t) { try { return decodeURIComponent(t.slice(1)); } catch (e) { return ''; } } function Y(t) {
        if (t instanceof window.Window) return 'window';if (t instanceof window.Document) return '#document';const e = [t.nodeName.toLowerCase()],
          n = t.id;if (n && e.push(`#${n}`), typeof t.getAttribute === 'function' && t.getAttribute('class')) { const n = (t.getAttribute('class') || '').trim().split(/\s+/).join('.');n && e.push(`.${n}`); } return e.join('');
      }H = (function () { const t = { _id: (new Date()).getTime() };return $(t), t; }()), window.addEventListener('popstate', ((t) => { const e = t.state;e && e._id && (e._id < (N()._id || NaN) ? R-- : R++, $(e)); }), !0), window.addEventListener('hashchange', (() => { if (I() > P.length) { const t = { _id: B() };history.replaceState(t, '', location.href), $(t); } }), !0);const K = new WeakMap();function G(t, e) { const o = (function (t, e) { const o = n(t, 'link[rel=pjax-prefetch]', HTMLLinkElement);for (const n of o) if (n.href === e) return n;return null; }(t, e));if (o) { const t = K.get(o);return o.remove(), K.delete(o), t || null; } return null; } function z(t) {
        const e = t.closest('form');if (!(e instanceof HTMLFormElement)) return;let n = J(e);if (t.name) {
          const o = t.matches('input[type=submit]') ? 'Submit' : '',
            i = t.value || o;n || (n = document.createElement('input'), n.type = 'hidden', n.classList.add('is-submit-button-value'), e.prepend(n)), n.name = t.name, n.value = i;
        } else n && n.remove();
      } function J(t) { const e = t.querySelector('input.is-submit-button-value');return e instanceof HTMLInputElement ? e : null; } function Z(t, e, n) { return t.dispatchEvent(new CustomEvent(e, { bubbles: !0, cancelable: n })); } function Q(t, e) { e && (!(function (t, e) { if (!(t instanceof HTMLFormElement)) throw new TypeError('The specified element is not of type HTMLFormElement.');if (!(e instanceof HTMLElement)) throw new TypeError('The specified element is not of type HTMLElement.');if (e.type !== 'submit') throw new TypeError('The specified element is not a submit button.');if (!t || t !== e.form) throw new Error('The specified element is not owned by the form element.'); }(t, e)), z(e)), Z(t, 'submit', !0) && t.submit(); } function tt(t) {
        if (!(t instanceof HTMLElement)) return !1;const e = t.nodeName.toLowerCase(),
          n = (t.getAttribute('type') || '').toLowerCase();return e === 'select' || e === 'textarea' || e === 'input' && n !== 'submit' && n !== 'reset' || t.isContentEditable;
      } function et(t) { return new URLSearchParams(new FormData(t)).toString(); } const nt = { container: null, push: !0, replace: !1, type: 'GET', dataType: 'html', scrollTo: 0 };let ot,
        it = null;function rt(t, e, n) { return t.dispatchEvent(new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n })); } function at(t) {
        const e = { url: '', container: null };Object.assign(e, nt, t), e.requestUrl = e.url;const o = ht(e.url),
          i = o.hash,
          r = e.container,
          a = gt(r);e.type === 'GET' && (o.search += `${o.search ? '&' : ''}_pjax=${encodeURIComponent(a)}`, e.url = o.toString()), ot || (ot = { id: ft(), url: window.location.href, title: document.title, container: a, fragment: e.fragment }, V(ot, ot.title, ot.url));let s = G(r, e.requestUrl);if (!s) { try { it == null || it.abort(); } catch (u) {} const { signal: t } = it = new AbortController();s = m(e.url, { signal: t, method: e.type, body: e.data, headers: { Accept: 'text/html', 'X-PJAX': 'true', 'X-PJAX-Container': a } }); } let c,
          l;!0 === e.push && !0 !== e.replace && (c = ot.id, l = dt(r), yt[c] = l, Et.push(c), kt(bt, 0), kt(Et, 20), X(null, '', e.requestUrl)), rt(r, 'pjax:start', { url: e.url }), rt(r, 'pjax:send'), s.then((async (t) => {
          const o = ot,
            s = (function () { for (const t of document.getElementsByTagName('meta')) { const e = t.getAttribute('http-equiv');if (e && e.toUpperCase() === 'X-PJAX-VERSION') return t.content; } return null; }()),
            c = t.headers.get('X-PJAX-Version'),
            l = (function (t, e, n) {
              const o = { url: wt(e, n.requestUrl), title: '' },
                i = /<html/i.test(t);if ((e.headers.get('Content-Type') || '').split(';', 1)[0].trim() !== 'text/html') return o;let r,
                a;if (i) {
                const e = t.match(/<head[^>]*>([\s\S.]*)<\/head>/i),
                  n = t.match(/<body[^>]*>([\s\S.]*)<\/body>/i);r = e ? Array.from(f(document, e[0]).childNodes) : [], a = n ? Array.from(f(document, n[0]).childNodes) : [];
              } else r = a = Array.from(f(document, t).childNodes);if (a.length === 0) return o;const s = mt(r, 'title', HTMLTitleElement);let c;if (o.title = s.length > 0 && s[s.length - 1].textContent || '', n.fragment) { if (n.fragment === 'body')c = a;else { const t = mt(a, n.fragment, Element);c = t.length > 0 ? [t[0]] : []; } if (c.length && (n.fragment === 'body' ? o.contents = c : o.contents = c.flatMap((t) => Array.from(t.childNodes)), !o.title)) { const t = c[0];t instanceof Element && (o.title = t.getAttribute('title') || t.getAttribute('data-title') || ''); } } else i || (o.contents = a);if (o.contents) { o.contents = o.contents.filter(((t) => { return !(t instanceof Element) || !t.matches('title'); }));for (const e of o.contents) if (e instanceof Element) for (const t of e.querySelectorAll('title'))t.remove();const t = mt(o.contents, 'script[src]', HTMLScriptElement);for (const e of t)e.remove();o.scripts = t, o.contents = o.contents.filter((e) => t.indexOf(e) === -1); }o.title && (o.title = o.title.trim());return o;
            }(await t.text(), t, e)),
            { contents: u } = l,
            d = ht(l.url);if (i && (d.hash = i, l.url = d.href), s && c && s !== c) return void st(l.url);if (!u) return void st(l.url);ot = { id: e.id != null ? e.id : ft(), url: l.url, title: l.title, container: a, fragment: e.fragment }, !0 !== e.push && !0 !== e.replace || V(ot, l.title, l.url);const h = document.activeElement,
            p = e.container != null && e.container.contains(h);if (h instanceof HTMLElement && p) try { h.blur(); } catch (xn) {}l.title && (document.title = l.title), rt(r, 'pjax:beforeReplace', { contents: u, state: ot, previousState: o }), vt(r, u);const g = n(r, 'input[autofocus], textarea[autofocus]').pop();g && document.activeElement !== g && g.focus(), l.scripts && (function (t) {
            const e = n(document, 'script[src]', HTMLScriptElement);for (const n of t) {
              const { src: t } = n;if (e.some((e) => e.src === t)) return;const o = document.createElement('script'),
                i = n.getAttribute('type');i && (o.type = i), o.src = t, document.head && document.head.appendChild(o);
            }
          }(l.scripts));let m = e.scrollTo;if (i) { const t = U(document, i);if (t) { m = t.getBoundingClientRect().top + window.pageYOffset; } } typeof m === 'number' && window.scrollTo(window.pageXOffset, m), rt(r, 'pjax:success'), rt(r, 'pjax:complete'), rt(r, 'pjax:end');
        }), ((t) => { let n = e.requestUrl;t instanceof ResponseError$1 && (n = wt(t.response, n));const o = rt(r, 'pjax:error');e.type === 'GET' && o && st(n), rt(r, 'pjax:complete'), rt(r, 'pjax:end'); }));
      } function st(t) { ot && V(null, '', ot.url), window.location.replace(t); }let ct = !0;const lt = window.location.href,
        ut = window.history.state;function ft() { return (new Date()).getTime(); } function dt(t) { const e = t.cloneNode(!0);return [gt(t), Array.from(e.childNodes), Date.now()]; } function ht(t) { const e = document.createElement('a');return e.href = t, e; } function pt(t) { return t.href.replace(/#.*/, ''); } function gt(t) { if (t.id) return `#${t.id}`;throw new Error('pjax container has no id'); } function mt(t, e, o) { let i = [];for (const r of t)r instanceof Element && (r instanceof o && r.matches(e) && i.push(r), i = i.concat(n(r, e, o)));return i; } function vt(t, e) { t.innerHTML = '';for (const n of e)n != null && t.appendChild(n); } function wt(t, e) { const n = t.headers.get('X-PJAX-URL');return n ? ((o = ht(n)).search = o.search.replace(/([?&])(_pjax|_)=[^&]*/g, ''), o.href.replace(/\?($|#)/, '$1')) : e;let o; }ut && ut.container && (ot = ut), 'state' in window.history && (ct = !1);const yt = {},
        bt = [],
        Et = [];function kt(t, e) { for (;t.length > e;) { const e = t.shift();if (e == null) return;delete yt[e]; } } function Tt(t) {
        let e,
          n;const o = (n = (e = t.head) === null || void 0 === e ? void 0 : e.querySelector('meta[name="expected-hostname"]')) === null || void 0 === n ? void 0 : n.content;return !!o && o.replace(/\.$/, '').split('.').slice(-2).join('.') !== t.location.hostname.replace(/\.$/, '').split('.').slice(-2).join('.');
      }window.addEventListener('popstate', ((t) => {
        if (!ct) try { it == null || it.abort(); } catch (i) {} const e = ot,
          n = t.state;let o = null;if (n && n.container) {
          if (ct && lt === n.url) return;if (e) { if (e.id === n.id) return;o = e.id < n.id ? 'forward' : 'back'; } const [t, i, r] = yt[n.id] || [],
            a = document.querySelector(t || n.container);if (a instanceof HTMLElement) {
            e && (function (t, e, n) {
              let o,
                i;yt[e] = n, t === 'forward' ? (o = Et, i = bt) : (o = bt, i = Et);o.push(e);const r = i.pop();r && delete yt[r];kt(o, 20);
            }(o, e.id, dt(a))), rt(a, 'pjax:popstate', { state: n, direction: o, cachedAt: r });const t = { id: n.id, url: n.url, container: a, push: !1, fragment: n.fragment || '', scrollTo: !1 };i ? (rt(a, 'pjax:start'), ot = n, n.title && (document.title = n.title), rt(a, 'pjax:beforeReplace', { contents: i, state: n, previousState: e }), vt(a, i), rt(a, 'pjax:end')) : at(t), a.offsetHeight;
          } else st(location.href);
        }ct = !1;
      }));let Lt = [];function xt(t, e = !1) { void 0 === t.timestamp && (t.timestamp = (new Date()).getTime()), Lt.push(t), e ? Ct() : (async function () { await C, _t == null && (_t = window.requestIdleCallback(Ct)); }()); }let jt,
        _t = null;function Ct() {
        let t,
          e;if (_t = null, Tt(document)) return;const n = (e = (t = document.head) === null || void 0 === t ? void 0 : t.querySelector('meta[name="browser-stats-url"]')) === null || void 0 === e ? void 0 : e.content;if (!n) return;const o = JSON.stringify({ stats: Lt });navigator.sendBeacon && navigator.sendBeacon(n, o), Lt = [];
      } function St(t, e, n) {
        const o = { hydroEventPayload: t, hydroEventHmac: e, visitorPayload: '', visitorHmac: '', hydroClientContext: n },
          i = document.querySelector('meta[name=visitor-payload]');i instanceof HTMLMetaElement && (o.visitorPayload = i.content);const r = document.querySelector('meta[name=visitor-hmac]') || '';r instanceof HTMLMetaElement && (o.visitorHmac = r.content), xt(o, !0);
      }o('click', '[data-hydro-click]', ((t) => { const e = t.currentTarget;St(e.getAttribute('data-hydro-click') || '', e.getAttribute('data-hydro-click-hmac') || '', e.getAttribute('data-hydro-client-context') || ''); }));class ErrorWithResponse extends Error {constructor(t, e) { super(t), this.response = e; }} function Dt() {
        let t,
          e;return [new Promise(((n, o) => { t = n, e = o; })), t, e];
      } const At = [],
        Mt = [];function Ot(t, e) { jt || (jt = new Map(), document.addEventListener('submit', Pt));const n = jt.get(t) || [];jt.set(t, [...n, e]); } function Pt(t) {
        if (!(t.target instanceof HTMLFormElement)) return;const e = t.target,
          n = (function (t) { const e = [];for (const n of jt.keys()) if (t.matches(n)) { const t = jt.get(n) || [];e.push(...t); } return e; }(e));if (n.length === 0) return;const o = (function (t) {
            const e = { method: t.method || 'GET', url: t.action, headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }), body: null };if (e.method.toUpperCase() === 'GET') {
              const n = (function (t) {
                const e = new URLSearchParams(),
                  n = new FormData(t).entries();for (const [o, i] of [...n])e.append(o, i.toString());return e.toString();
              }(t));n && (e.url += (~e.url.indexOf('?') ? '&' : '?') + n);
            } else e.body = new FormData(t);return e;
          }(e)),
          [i, r, a] = Dt();t.preventDefault(), (async function (t, e, n, o) {
          let i = !1;for (const r of t) {
            const [t, a] = Dt(),
              s = () => (i = !0, a(), o),
              c = { text: s, json: () => (n.headers.set('Accept', 'application/json'), s()), html: () => (n.headers.set('Accept', 'text/html'), s()) };await Promise.race([t, r(e, c, n)]);
          } return i;
        }(n, e, o, i)).then(async (t) => {
          if (t) {
            for (const t of Mt) await t(e);(async function (t) {
              const e = await window.fetch(t.url, { method: t.method, body: t.body !== null ? t.body : void 0, headers: t.headers, credentials: 'same-origin' }),
                n = { url: e.url, status: e.status, statusText: e.statusText, headers: e.headers, text: '', get json() { const t = JSON.parse(this.text);return delete this.json, this.json = t, this.json; }, get html() { return delete this.html, this.html = (function (t, e) { const n = t.createElement('template');return n.innerHTML = e, t.importNode(n.content, !0); }(document, this.text)), this.html; } },
                o = await e.text();if (n.text = o, e.ok) return n;throw new ErrorWithResponse('request failed', n);
            })(o).then(r, a).catch(() => {}).then(() => { for (const t of At)t(e); });
          } else e.submit();
        }, (t) => { e.submit(), setTimeout(() => { throw t; }); });
      } function Ht(t) { let e = t;const n = e.ownerDocument;if (!n) return;if (!e.offsetParent) return;const o = n.defaultView.HTMLElement;if (e !== n.body) { for (;e !== n.body;) { if (!(e.parentElement instanceof o)) return;e = e.parentElement;const { position: t, overflowY: n, overflowX: i } = getComputedStyle(e);if (t === 'fixed' || n === 'auto' || i === 'auto' || n === 'scroll' || i === 'scroll') break; } return e instanceof Document ? null : e; } } function Rt(t, e) {
        let n = e;const o = t.ownerDocument;if (!o) return;const i = o.documentElement;if (!i) return;if (t === i) return;const r = Nt(t, n);if (!r) return;n = r._container;const a = n === o.documentElement && o.defaultView ? { top: o.defaultView.pageYOffset, left: o.defaultView.pageXOffset } : { top: n.scrollTop, left: n.scrollLeft },
          s = r.top - a.top,
          c = r.left - a.left,
          l = n.clientHeight,
          u = n.clientWidth;return { top: s, left: c, bottom: l - (s + t.offsetHeight), right: u - (c + t.offsetWidth), height: l, width: u };
      } function Nt(t, e) {
        let n = t;const o = n.ownerDocument;if (!o) return;const i = o.documentElement;if (!i) return;const r = o.defaultView.HTMLElement;let a = 0,
          s = 0;const c = n.offsetHeight,
          l = n.offsetWidth;for (;n !== o.body && n !== e;) { if (a += n.offsetTop || 0, s += n.offsetLeft || 0, !(n.offsetParent instanceof r)) return;n = n.offsetParent; }let u,
          f,
          d;if (e && e !== o && e !== o.defaultView && e !== o.documentElement && e !== o.body) { if (!(e instanceof r)) return;d = e, u = e.scrollHeight, f = e.scrollWidth; } else d = i, u = (function (t, e) { return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight); }(o.body, i)), f = (function (t, e) { return Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth); }(o.body, i));return { top: a, left: s, bottom: u - (a + c), right: f - (s + l), _container: d };
      } class Leaf {
        constructor(t) { this.children = [], this.parent = t; }

        delete(t) { const e = this.children.indexOf(t);return e !== -1 && (this.children = this.children.slice(0, e).concat(this.children.slice(e + 1)), this.children.length === 0 && this.parent.delete(this), !0); }

        add(t) { return this.children.push(t), this; }
      } class RadixTrie {
        constructor(t) { this.parent = null, this.children = {}, this.parent = t || null; }

        get(t) { return this.children[t]; }

        insert(t) { let e = this;for (let n = 0;n < t.length;n += 1) { const o = t[n];let i = e.get(o);if (n === t.length - 1) return i instanceof RadixTrie && (e.delete(i), i = null), i || (i = new Leaf(e), e.children[o] = i), i;i instanceof Leaf && (i = null), i || (i = new RadixTrie(e), e.children[o] = i), e = i; } return e; }

        delete(t) { for (const e in this.children) { if (this.children[e] === t) { const t = delete this.children[e];return Object.keys(this.children).length === 0 && this.parent && this.parent.delete(this), t; } } return !1; }
      } function It(t) {
        if (!(t instanceof HTMLElement)) return !1;const e = t.nodeName.toLowerCase(),
          n = (t.getAttribute('type') || '').toLowerCase();return e === 'select' || e === 'textarea' || e === 'input' && n !== 'submit' && n !== 'reset' && n !== 'checkbox' && n !== 'radio' || t.isContentEditable;
      } function qt(t) { return `${t.ctrlKey ? 'Control+' : ''}${t.altKey ? 'Alt+' : ''}${t.metaKey ? 'Meta+' : ''}${t.shiftKey && t.key.toUpperCase() !== t.key ? 'Shift+' : ''}${t.key}`; } const $t = new RadixTrie(),
        Bt = new WeakMap();let Xt = $t,
        Vt = null;function Ut() { Vt = null, Xt = $t; } function Ft(t) { if (t.defaultPrevented) return;if (t.target instanceof Node && It(t.target)) return;Vt != null && window.clearTimeout(Vt), Vt = window.setTimeout(Ut, 1500);const e = Xt.get(qt(t));let n;if (e) return Xt = e, e instanceof Leaf ? (It(n = e.children[e.children.length - 1]) ? n.focus() : n.click(), t.preventDefault(), void Ut()) : void 0;Ut(); } function Wt(t, e) {
        let n = t;const o = t.ownerDocument;if (n !== o && n !== o.defaultView && n !== o.documentElement && n !== o.body || (n = o), n instanceof o.defaultView.Document) {
          const t = e.top != null ? e.top : o.defaultView.pageYOffset,
            n = e.left != null ? e.left : o.defaultView.pageXOffset;o.defaultView.scrollTo(n, t);
        } else { if (!(n instanceof o.defaultView.HTMLElement)) throw new Error('invariant');n.scrollTop = e.top, e.left != null && (n.scrollLeft = e.left); }
      } function Yt(t) { return !(function (t) { return t.offsetWidth <= 0 && t.offsetHeight <= 0; }(t)); } const Kt = navigator.userAgent.match(/Macintosh/),
        Gt = Kt ? 'metaKey' : 'ctrlKey',
        zt = Kt ? 'Meta' : 'Control';let Jt = !1,
        Zt = { x: 0, y: 0 };function Qt(t) { t instanceof MouseEvent && (Zt.x === t.clientX && Zt.y === t.clientY || (Jt = !1), Zt = { x: t.clientX, y: t.clientY }); } function te(t) {
        if (Jt) return;const e = t.currentTarget,
          { target: n } = t;if (!(n instanceof Element && e instanceof HTMLElement && e.closest('.js-active-navigation-container'))) return;const o = n.closest('.js-navigation-item');o && de(o, e);
      }i('.js-navigation-container:not(.js-navigation-container-no-mouse)', { subscribe: (t) => E(b(t, 'mouseover', Qt), b(t, 'mouseover', te)) });let ee,
        ne = 0;function oe(t) { if (t.target !== document.body && t.target instanceof HTMLElement && !t.target.classList.contains('js-navigation-enable')) return;Jt = !0;const e = he();let n = !1;if (e) { const o = e.querySelector('.js-navigation-item.navigation-focus') || e;n = r(o, 'navigation:keydown', { hotkey: qt(t), originalEvent: t, originalTarget: t.target }); }n || t.preventDefault(); } function ie(t) { const e = t.modifierKey || t.altKey || t.ctrlKey || t.metaKey;r(t.currentTarget, 'navigation:open', { modifierKey: e, shiftKey: t.shiftKey }) || t.preventDefault(); } function re(t) { const e = he();t !== e && (e && ae(e), t.classList.add('js-active-navigation-container')); } function ae(t) { t.classList.remove('js-active-navigation-container'); } function se(t, e) {
        const n = e || t,
          o = pe(t)[0],
          i = n.closest('.js-navigation-item') || o;if (re(t), i instanceof HTMLElement) { if (de(i, t)) return;ve(Ht(i), i); }
      } function ce(t) { const e = t.querySelectorAll('.js-navigation-item.navigation-focus');for (const n of e)n.classList.remove('navigation-focus'); } function le(t, e) {
        const n = pe(e),
          o = n.indexOf(t),
          i = n[o - 1];if (i) { if (de(i, e)) return;const t = Ht(i);ge(e) === 'page' ? me(t, i) : ve(t, i); }
      } function ue(t, e) {
        const n = pe(e),
          o = n.indexOf(t),
          i = n[o + 1];if (i) { if (de(i, e)) return;const t = Ht(i);ge(e) === 'page' ? me(t, i) : ve(t, i); }
      } function fe(t, e = !1) { r(t, 'navigation:keyopen', { modifierKey: e }); } function de(t, e) { return !r(t, 'navigation:focus') || (ce(e), t.classList.add('navigation-focus'), !1); } function he() { return document.querySelector('.js-active-navigation-container'); } function pe(t) { const e = [];for (const n of t.querySelectorAll('.js-navigation-item'))n instanceof HTMLElement && Yt(n) && e.push(n);return e; } function ge(t) { return t.getAttribute('data-navigation-scroll') || 'item'; } function me(t, e, n = 'smooth') { const o = Rt(e, t);o && (o.bottom <= 0 ? e.scrollIntoView({ behavior: n, block: 'start' }) : o.top <= 0 && e.scrollIntoView({ behavior: n, block: 'end' })); } function ve(t, e) {
        const n = Nt(e, t),
          o = Rt(e, t);if (n != null && o != null) if (o.bottom <= 0 && document.body) { Wt(t, { top: (t.offsetParent != null ? t.scrollHeight : document.body.scrollHeight) - (n.bottom + o.height) }); } else o.top <= 0 && Wt(t, { top: n.top });
      } function we(t, e = !1) { return ye(t) || (function (t, e) { const n = (function (t) { if (void 0 instanceof Element) return;if (t && t.ownerDocument && t.ownerDocument.activeElement) return t.ownerDocument.activeElement;return null; }(t));return n !== null && ((!e || n !== t) && (!(n !== t || !tt(n)) || (!(!t.contains(n) || (function (t) { if (!(ee instanceof Element)) return !1;const e = t.closest('a[href], button');if (!e) return !1;const n = ee.closest('a[href], button');return e === n; }(n))) || ee instanceof Element && t.contains(ee) && !!ee.closest('details[open] > summary')))); }(t, e)) || (function (t) { return t.matches(':active'); }(t)) || (function (t) { return !(!t.closest('.is-dirty') && !t.querySelector('.is-dirty')); }(t)); } function ye(t) { for (const e of t.querySelectorAll('input, textarea')) if ((e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && be(e)) return !0;return !1; } function be(t) { if (t instanceof HTMLInputElement && (t.type === 'checkbox' || t.type === 'radio')) { if (t.checked !== t.defaultChecked) return !0; } else if (t.value !== t.defaultValue) return !0;return !1; }i('.js-active-navigation-container', { add() { ne++, ne === 1 && document.addEventListener('keydown', oe); }, remove() { ne--, ne === 0 && document.removeEventListener('keydown', oe); } }), o('navigation:keydown', '.js-active-navigation-container', ((t) => {
        const e = t.currentTarget,
          n = t.detail.originalTarget.matches('input, textarea'),
          o = t.target;if (o.classList.contains('js-navigation-item')) {
          if (n) { if (Kt) switch (qt(t.detail.originalEvent)) { case 'Control+n': ue(o, e);break;case 'Control+p': le(o, e); } switch (qt(t.detail.originalEvent)) { case 'ArrowUp': le(o, e);break;case 'ArrowDown': ue(o, e);break;case 'Enter': case `${zt}+Enter`: fe(o, t.detail.originalEvent[Gt]); } } else {
            if (Kt) {
              switch (qt(t.detail.originalEvent)) {
                case 'Control+n': ue(o, e);break;case 'Control+p': le(o, e);break;case 'Alt+v': !(function (t, e) {
                  const n = pe(e);let o = n.indexOf(t);const i = Ht(t);if (i == null) return;let r,
                    a;for (;(r = n[o - 1]) && (a = Rt(r, i)) && a.top >= 0;)o--;if (r) { if (de(r, e)) return;me(i, r); }
                }(o, e));break;case 'Control+v': !(function (t, e) {
                  const n = pe(e);let o = n.indexOf(t);const i = Ht(t);if (i == null) return;let r,
                    a;for (;(r = n[o + 1]) && (a = Rt(r, i)) && a.bottom >= 0;)o++;if (r) { if (de(r, e)) return;me(i, r); }
                }(o, e));
              }
            } switch (qt(t.detail.originalEvent)) { case 'j': case 'J': ue(o, e);break;case 'k': case 'K': le(o, e);break;case 'o': case 'Enter': case `${zt}+Enter`: fe(o, t.detail[Gt]); }
          }
        } else { const o = pe(e)[0];if (o) if (n) { if (Kt) switch (qt(t.detail.originalEvent)) { case 'Control+n': de(o, e); } switch (qt(t.detail.originalEvent)) { case 'ArrowDown': de(o, e); } } else { if (Kt) switch (qt(t.detail.originalEvent)) { case 'Control+n': case 'Control+v': de(o, e); } switch (qt(t.detail.originalEvent)) { case 'j': de(o, e); } } } if (n) { if (Kt) switch (qt(t.detail.originalEvent)) { case 'Control+n': case 'Control+p': t.preventDefault(); } switch (qt(t.detail.originalEvent)) { case 'ArrowUp': case 'ArrowDown': t.preventDefault();break;case 'Enter': t.preventDefault(); } } else { if (Kt) switch (qt(t.detail.originalEvent)) { case 'Control+n': case 'Control+p': case 'Control+v': case 'Alt+v': t.preventDefault(); } switch (qt(t.detail.originalEvent)) { case 'j': case 'k': t.preventDefault();break;case 'o': case 'Enter': case `${Gt}+Enter`: t.preventDefault(); } }
      })), o('click', '.js-active-navigation-container .js-navigation-item', ((t) => { ie(t); })), o('navigation:keyopen', '.js-active-navigation-container .js-navigation-item', ((t) => { const e = t.currentTarget.classList.contains('js-navigation-open') ? t.currentTarget : t.currentTarget.querySelector('.js-navigation-open');if (e instanceof HTMLAnchorElement) { if (t.detail.modifierKey)window.open(e.href, '_blank'), window.focus();else { e.dispatchEvent(new MouseEvent('click', { bubbles: !0, cancelable: !0 })) && e.click(); }t.preventDefault(); } else ie(t); })), document.addEventListener('mouseup', ((t) => { ee = t.target; }));function Ee(t, e) {
        return ke((function (t) {
          if (t.activeElement !== t.body) return t.activeElement;const e = t.querySelectorAll(':hover'),
            n = e.length;if (n) return e[n - 1];
        }(t)), e);
      } function ke(t, e) {
        let n = t;if (!n) return Promise.resolve(e());const o = n.ownerDocument.documentElement;const i = (function (t) {
          for (var e = [];t;) {
            const n = t.getBoundingClientRect(),
              o = n.top,
              i = n.left;e.push({ element: t, top: o, left: i }), t = t.parentElement;
          } return e;
        }(n));return Promise.resolve(e()).then(((t) => {
          const e = (function (t) { for (let e = 0;e < t.length;e++) { const n = t[e];if (o.contains(n.element)) return n; } }(i));if (e) {
            n = e.element;const r = e.top,
              a = e.left,
              s = n.getBoundingClientRect(),
              c = s.top,
              l = s.left;!(function (t, e, n) {
              const o = t.ownerDocument,
                i = o.defaultView;function r(t) { return t.offsetParent ? { top: t.scrollTop, left: t.scrollLeft } : { top: i.pageYOffset, left: i.pageXOffset }; } function a(t, e, n) {
                if (e === 0 && n === 0) return [0, 0];const a = r(t),
                  s = a.top + n,
                  c = a.left + e;t === o || t === i || t === o.documentElement || t === o.body ? o.defaultView.scrollTo(c, s) : (t.scrollTop = s, t.scrollLeft = c);const l = r(t);return [l.left - a.left, l.top - a.top];
              } function s(t) {
                let e = t;if (e.offsetParent && e !== o.body) {
                  for (;e !== o.body;) {
                    if (!e.parentElement) return;e = e.parentElement;const n = i.getComputedStyle(e),
                      r = n.position,
                      a = n.overflowY,
                      s = n.overflowX;if (r === 'fixed' || a === 'auto' || s === 'auto' || a === 'scroll' || s === 'scroll') break;
                  } return e;
                }
              } let c = s(t),
                l = 0,
                u = 0;for (;c;) { const f = a(c, e - l, n - u);if (l += f[0], u += f[1], l === e && u === n) break;c = s(c); }
            }(n, l - a, c - r));
          } return t;
        }));
      } const Te = new WeakMap(),
        Le = t('aS', {});function xe(t, e, n = !1) {
        return Ee(document, () => {
          const o = f(document, e.trim()),
            i = n && t.ownerDocument && t === t.ownerDocument.activeElement ? o.querySelector('*') : null,
            r = Array.from(t.querySelectorAll('details[open][id]')).map((t) => t.id);t.tagName === 'DETAILS' && t.id && t.hasAttribute('open') && r.push(t.id);for (const e of t.querySelectorAll('.js-updatable-content-preserve-scroll-position')) { const t = a(e, 'data-updatable-content-scroll-position-id');je.set(t, e.scrollTop); } for (const t of r) { const e = o.querySelector(`#${t}`);e && e.setAttribute('open', ''); }t.replaceWith(o), i instanceof HTMLElement && i.focus();
        });
      } const je = new Map();async function _e(t, e) { let n;const o = new Promise((e, o) => { n = self.setTimeout(() => o(new Error('timeout')), t); });if (!e) return o;try { await Promise.race([o, De(e)]); } catch (xn) { throw self.clearTimeout(n), xn; } } async function Ce(t, e) { let n;const o = new Promise((e) => { n = self.setTimeout(e, t); });if (!e) return o;try { await Promise.race([o, De(e)]); } catch (xn) { throw self.clearTimeout(n), xn; } } async function Se(t, e, n = 1 / 0, o) {
        const i = o ? De(o) : null;for (let a = 0;a < e;a++) {
          try { const e = i ? Promise.race([t(), i]) : t();return await e; } catch (xn) {
            if (xn.name === 'AbortError') throw xn;if (a === e - 1) throw xn;const i = 1e3 * Math.pow(2, a),
              s = (r = 0.1 * i, Math.floor(Math.random() * Math.floor(r)));await Ce(Math.min(n, i + s), o);
          }
        } let r;throw new Error('retry failed');
      } function De(t) { return new Promise((e, n) => { const o = new Error('aborted');o.name = 'AbortError', t.aborted ? n(o) : t.addEventListener('abort', () => n(o)); }); } async function Ae(t, e, n) {
        const o = new WebSocket(t),
          i = (function (t) { return new Promise((e, n) => { t.readyState === WebSocket.OPEN ? e(t) : (t.onerror = () => { t.onerror = null, t.onopen = null, n(new Error('connect failed')); }, t.onopen = () => { t.onerror = null, t.onopen = null, e(t); }); }); }(o));try { return await Promise.race([i, _e(e, n)]), o; } catch (xn) { throw (async function (t) { try { (await t).close(); } catch (e) {} }(i)), xn; }
      } function Me(t, e) { return Se(() => Ae(t, e.timeout, e.signal), e.attempts, e.maxDelay, e.signal); }i('.js-updatable-content-preserve-scroll-position', { constructor: HTMLElement, add(t) { const e = t.getAttribute('data-updatable-content-scroll-position-id');if (!e) return;const n = je.get(e);n != null && (t.scrollTop = n); } });t('aL', class StableSocket {
        constructor(t, e, n) { this.socket = null, this.opening = null, this.url = t, this.delegate = e, this.policy = n; }

        async open() {
          if (this.opening || this.socket) return;this.opening = new AbortController();const t = { ...this.policy, signal: this.opening.signal };try { this.socket = await Me(this.url, t); } catch (e) { return void this.delegate.socketDidFinish(this); } finally { this.opening = null; } this.socket.onclose = (t) => {
            let e,
              n,
              o;this.socket = null, this.delegate.socketDidClose(this, t.code, t.reason), (o = t.code) === Oe || o === Pe ? this.delegate.socketDidFinish(this) : setTimeout(() => this.open(), (e = 100, n = 150, Math.random() * (n - e) + e));
          }, this.socket.onmessage = (t) => { this.delegate.socketDidReceiveMessage(this, t.data); }, this.delegate.socketDidOpen(this);
        }

        close(t, e) { this.opening ? (this.opening.abort(), this.opening = null) : this.socket && (this.socket.onclose = null, this.socket.close(t, e), this.socket = null, this.delegate.socketDidClose(this, t, e), this.delegate.socketDidFinish(this)); }

        send(t) { this.socket && this.socket.send(t); }

        isOpen() { return !!this.socket; }
      });const Oe = 1008,
        Pe = 1011;t('aK', class BufferedSocket {
        constructor(t) { this.buf = [], this.socket = t, this.delegate = t.delegate, t.delegate = this; }

        open() { return this.socket.open(); }

        close(t, e) { this.socket.close(t, e); }

        send(t) { this.socket.isOpen() ? (this.flush(), this.socket.send(t)) : this.buf.push(t); }

        isOpen() { return this.socket.isOpen(); }

        flush() { for (const t of this.buf) this.socket.send(t);this.buf.length = 0; }

        socketDidOpen(t) { this.flush(), this.delegate.socketDidOpen(t); }

        socketDidClose(t, e, n) { this.delegate.socketDidClose(t, e, n); }

        socketDidFinish(t) { this.delegate.socketDidFinish(t); }

        socketDidReceiveMessage(t, e) { this.delegate.socketDidReceiveMessage(t, e); }
      });const He = new WeakMap();function Re(t) { if (!(t instanceof CustomEvent)) throw new Error('assert: event is not a CustomEvent');const e = t.detail.editor;if (!t.target) throw new Error('assert: event.target is null');return He.set(t.target, e), e; }o('codeEditor:ready', '.js-code-editor', Re), (function () {
        const t = function (t) { this.w = t || []; };t.prototype.set = function (t) { this.w[t] = !0; }, t.prototype.encode = function () { for (var t = [], e = 0;e < this.w.length;e++) this.w[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);for (e = 0;e < t.length;e++)t[e] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(t[e] || 0);return `${t.join('')}~`; };const e = new t();function n(t) { e.set(t); } var o = function (e, n) { const o = new t(r(e));o.set(n), e.set(ae, o.w); },
          i = function (n) { n = r(n), n = new t(n);for (var o = e.w.slice(), i = 0;i < n.w.length;i++)o[i] = o[i] || n.w[i];return new t(o).encode(); },
          r = function (t) { return t = t.get(ae), s(t) || (t = []), t; },
          a = function (t) { return typeof t === 'function'; },
          s = function (t) { return Object.prototype.toString.call(Object(t)) == '[object Array]'; },
          c = function (t) { return t != null && (`${t.constructor}`).indexOf('String') > -1; },
          l = function (t, e) { return t.indexOf(e) == 0; },
          u = function (t) { return t ? t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : ''; },
          f = function (t) { const e = T.createElement('img');return e.width = 1, e.height = 1, e.src = t, e; },
          d = function () {},
          h = function (t) { return encodeURIComponent instanceof Function ? encodeURIComponent(t) : (n(28), t); },
          p = function (t, e, o, i) { try { t.addEventListener ? t.addEventListener(e, o, !!i) : t.attachEvent && t.attachEvent(`on${e}`, o); } catch (xn) { n(27); } },
          g = /^[\w\-:/.?=&%!]+$/,
          m = function (t, e, n, o) { t && (n ? (o = '', e && g.test(e) && (o = ` id="${e}"`), g.test(t) && T.write(`<script${o} src="${t}"><\/script>`)) : ((n = T.createElement('script')).type = 'text/javascript', n.async = !0, n.src = t, o && (n.onload = o), e && (n.id = e), (t = T.getElementsByTagName('script')[0]).parentNode.insertBefore(n, t))); },
          v = function () { return T.location.protocol == 'https:'; },
          w = function (t, e) { return (t = t.match(`(?:&|#|\\?)${h(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')}=([^&#]*)`)) && t.length == 2 ? t[1] : ''; },
          y = function () { const t = `${T.location.hostname}`;return t.indexOf('www.') == 0 ? t.substring(4) : t; },
          b = function (t, e) { if (e.length == 1 && e[0] != null && typeof e[0] === 'object') return e[0];for (var n = {}, o = Math.min(t.length + 1, e.length), i = 0;i < o;i++) { if (typeof e[i] === 'object') { for (const r in e[i])e[i].hasOwnProperty(r) && (n[r] = e[i][r]);break; }i < t.length && (n[t[i]] = e[i]); } return n; },
          E = function () { this.keys = [], this.values = {}, this.m = {}; };E.prototype.set = function (t, e, n) { this.keys.push(t), n ? this.m[`:${t}`] = e : this.values[`:${t}`] = e; }, E.prototype.get = function (t) { return this.m.hasOwnProperty(`:${t}`) ? this.m[`:${t}`] : this.values[`:${t}`]; }, E.prototype.map = function (t) {
          for (let e = 0;e < this.keys.length;e++) {
            const n = this.keys[e],
              o = this.get(n);o && t(n, o);
          }
        };var k = window,
          T = document,
          L = window,
          x = function (t) { const e = L._gaUserPrefs;if (e && e.ioo && e.ioo() || t && !0 === L[`ga-disable-${t}`]) return !0;try { const n = L.external;if (n && n._gaUserPrefs && n._gaUserPrefs == 'oo') return !0; } catch (Rn) {} return !1; },
          j = function (t) {
            const e = [],
              n = T.cookie.split(';');t = new RegExp(`^\\s*${t}=\\s*(.*?)\\s*$`);for (let o = 0;o < n.length;o++) { const i = n[o].match(t);i && e.push(i[1]); } return e;
          },
          _ = function (t, e, o, i, r, a) { if (!(r = !x(r) && !(D.test(T.location.hostname) || o == '/' && S.test(i)))) return !1;if (e && e.length > 1200 && (e = e.substring(0, 1200), n(24)), o = `${t}=${e}; path=${o}; `, a && (o += `expires=${new Date((new Date()).getTime() + a).toGMTString()}; `), i && i != 'none' && (o += `domain=${i};`), i = T.cookie, T.cookie = o, !(i = i != T.cookie))t: { for (t = j(t), i = 0;i < t.length;i++) if (e == t[i]) { i = !0;break t; }i = !1; } return i; },
          C = function (t) { return h(t).replace(/\(/g, '%28').replace(/\)/g, '%29'); },
          S = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
          D = /(^|\.)doubleclick\.net$/i,
          A = function () { return `${ft || v() ? 'https:' : 'http:'}//www.google-analytics.com`; },
          M = function (t) { this.name = 'len', this.message = `${t}-8192`; },
          O = function (t, e, n) { if (n = n || d, e.length <= 2036)P(t, e, n);else { if (!(e.length <= 8192)) throw N('len', e.length), new M(e.length);R(t, e, n) || H(t, e, n) || P(t, e, n); } },
          P = function (t, e, n) { const o = f(`${t}?${e}`);o.onload = o.onerror = function () { o.onload = null, o.onerror = null, n(); }; },
          H = function (t, e, n) { const o = k.XMLHttpRequest;if (!o) return !1;let i = new o();return 'withCredentials' in i && (i.open('POST', t, !0), i.withCredentials = !0, i.setRequestHeader('Content-Type', 'text/plain'), i.onreadystatechange = function () { i.readyState == 4 && (n(), i = null); }, i.send(e), !0); },
          R = function (t, e, n) { return !!k.navigator.sendBeacon && (!!k.navigator.sendBeacon(t, e) && (n(), !0)); },
          N = function (t, e, n) { 100 * Math.random() >= 1 || x('?') || (t = ['t=error', `_e=${t}`, '_v=j48', 'sr=1'], e && t.push(`_f=${e}`), n && t.push(`_m=${h(n.substring(0, 100))}`), t.push('aip=1'), t.push(`z=${G()}`), P(`${A()}/collect`, t.join('&'), d)); },
          I = function (t) { const e = k.gaData = k.gaData || {};return e[t] = e[t] || {}; },
          q = function () { this.M = []; };function $(t) { if (t.get(Re) != 100 && eo(et(t, Te)) % 1e4 >= 100 * nt(t, Re)) throw 'abort'; } function B(t) { if (x(et(t, je))) throw 'abort'; } function X() { const t = T.location.protocol;if (t != 'http:' && t != 'https:') throw 'abort'; } function V(t) { try { k.navigator.sendBeacon ? n(42) : k.XMLHttpRequest && 'withCredentials' in new k.XMLHttpRequest() && n(40); } catch (Mn) {}t.set(re, i(t), !0), t.set(bt, nt(t, bt) + 1);const e = [];Q.map(((n, o) => { o.F && ((n = t.get(n)) != null && n != o.defaultValue && (typeof n === 'boolean' && (n *= 1), e.push(`${o.F}=${h(`${n}`)}`))); })), e.push(`z=${z()}`), t.set(vt, e.join('&'), !0); } function U(t) {
          let e = et(t, qe) || `${A()}/collect`,
            n = et(t, yt);if (!n && t.get(wt) && (n = 'beacon'), n) {
            var o = et(t, vt),
              i = (i = t.get(mt)) || d;n == 'image' ? P(e, o, i) : n == 'xhr' && H(e, o, i) || n == 'beacon' && R(e, o, i) || O(e, o, i);
          } else O(e, et(t, vt), t.get(mt));e = t.get(je), n = (e = I(e)).hitcount, e.hitcount = n ? n + 1 : 1, e = t.get(je), delete I(e).pending_experiments, t.set(mt, d, !0);
        } function F(t) { let e;(k.gaData = k.gaData || {}).expId && t.set(zt, (k.gaData = k.gaData || {}).expId), (k.gaData = k.gaData || {}).expVar && t.set(Jt, (k.gaData = k.gaData || {}).expVar);let n = t.get(je);if (n = I(n).pending_experiments) { const o = [];for (e in n)n.hasOwnProperty(e) && n[e] && o.push(`${encodeURIComponent(e)}.${encodeURIComponent(n[e])}`);e = o.join('!'); } else e = void 0;e && t.set(Zt, e, !0); } function W() { if (k.navigator && k.navigator.loadPurpose == 'preview') throw 'abort'; } function Y(t) { const e = k.gaDevIds;s(e) && e.length != 0 && t.set('&did', e.join(','), !0); } function K(t) { if (!t.get(je)) throw 'abort'; }q.prototype.add = function (t) { this.M.push(t); }, q.prototype.D = function (t) { try { for (var e = 0;e < this.M.length;e++) { const n = t.get(this.M[e]);n && a(n) && n.call(k, t); } } catch (Rn) {}(e = t.get(mt)) != d && a(e) && (t.set(mt, d, !0), setTimeout(e, 10)); };var G = function () { return Math.round(2147483647 * Math.random()); },
          z = function () { try { const t = new Uint32Array(1);return k.crypto.getRandomValues(t), 2147483647 & t[0]; } catch (e) { return G(); } };function J(t) {
          let e = nt(t, ne);if (e >= 500 && n(15), (o = et(t, gt)) != 'transaction' && o != 'item') {
            var o = nt(t, ie),
              i = (new Date()).getTime(),
              r = nt(t, oe);if (r == 0 && t.set(oe, i), (r = Math.round(2 * (i - r) / 1e3)) > 0 && (o = Math.min(o + r, 20), t.set(oe, i)), o <= 0) throw 'abort';t.set(ie, --o);
          }t.set(ne, ++e);
        } var Z = function () { this.data = new E(); },
          Q = new E(),
          tt = [];Z.prototype.get = function (t) {
          let e = rt(t),
            n = this.data.get(t);return e && n == null && (n = a(e.defaultValue) ? e.defaultValue() : e.defaultValue), e && e.Z ? e.Z(this, t, n) : n;
        };var et = function (t, e) { return (t = t.get(e)) == null ? '' : `${t}`; },
          nt = function (t, e) { return (t = t.get(e)) == null || t === '' ? 0 : 1 * t; };Z.prototype.set = function (t, e, n) { if (t) if (typeof t === 'object') for (const o in t)t.hasOwnProperty(o) && ot(this, o, t[o], n);else ot(this, t, e, n); };var ot = function (t, e, n, o) { if (n != null) switch (e) { case je: Cn.test(n); } const i = rt(e);i && i.o ? i.o(t, e, n, o) : t.data.set(e, n, o); },
          it = function (t, e, n, o, i) { this.name = t, this.F = e, this.Z = o, this.o = i, this.defaultValue = n; },
          rt = function (t) {
            let e = Q.get(t);if (!e) {
              for (let n = 0;n < tt.length;n++) {
                const o = tt[n],
                  i = o[0].exec(t);if (i) { e = o[1](i), Q.set(e.name, e);break; }
              }
            } return e;
          },
          at = function (t, e, n, o, i) { return t = new it(t, e, n, o, i), Q.set(t.name, t), t.name; },
          st = function (t, e) { tt.push([new RegExp(`^${t}$`), e]); },
          ct = function (t, e, n) { return at(t, e, n, void 0, lt); },
          lt = function () {},
          ut = c(window.GoogleAnalyticsObject) && u(window.GoogleAnalyticsObject) || 'ga',
          ft = !1,
          dt = ct('apiVersion', 'v'),
          ht = ct('clientVersion', '_v');at('anonymizeIp', 'aip');var pt = at('adSenseId', 'a'),
          gt = at('hitType', 't'),
          mt = at('hitCallback'),
          vt = at('hitPayload');at('nonInteraction', 'ni'), at('currencyCode', 'cu'), at('dataSource', 'ds');var wt = at('useBeacon', void 0, !1),
          yt = at('transport');at('sessionControl', 'sc', ''), at('sessionGroup', 'sg'), at('queueTime', 'qt');var bt = at('_s', '_s');at('screenName', 'cd');const Et = at('location', 'dl', ''),
          kt = at('referrer', 'dr'),
          Tt = at('page', 'dp', '');at('hostname', 'dh');const Lt = at('language', 'ul'),
          xt = at('encoding', 'de');at('title', 'dt', (() => { return T.title || void 0; })), st('contentGroup([0-9]+)', ((t) => { return new it(t[0], `cg${t[1]}`); }));const jt = at('screenColors', 'sd'),
          _t = at('screenResolution', 'sr'),
          Ct = at('viewportSize', 'vp'),
          St = at('javaEnabled', 'je'),
          Dt = at('flashVersion', 'fl');at('campaignId', 'ci'), at('campaignName', 'cn'), at('campaignSource', 'cs'), at('campaignMedium', 'cm'), at('campaignKeyword', 'ck'), at('campaignContent', 'cc');const At = at('eventCategory', 'ec'),
          Mt = at('eventAction', 'ea'),
          Ot = at('eventLabel', 'el'),
          Pt = at('eventValue', 'ev'),
          Ht = at('socialNetwork', 'sn'),
          Rt = at('socialAction', 'sa'),
          Nt = at('socialTarget', 'st'),
          It = at('l1', 'plt'),
          qt = at('l2', 'pdt'),
          $t = at('l3', 'dns'),
          Bt = at('l4', 'rrt'),
          Xt = at('l5', 'srt'),
          Vt = at('l6', 'tcp'),
          Ut = at('l7', 'dit'),
          Ft = at('l8', 'clt'),
          Wt = at('timingCategory', 'utc'),
          Yt = at('timingVar', 'utv'),
          Kt = at('timingLabel', 'utl'),
          Gt = at('timingValue', 'utt');at('appName', 'an'), at('appVersion', 'av', ''), at('appId', 'aid', ''), at('appInstallerId', 'aiid', ''), at('exDescription', 'exd'), at('exFatal', 'exf');var zt = at('expId', 'xid'),
          Jt = at('expVar', 'xvar'),
          Zt = at('exp', 'exp'),
          Qt = at('_utma', '_utma'),
          te = at('_utmz', '_utmz'),
          ee = at('_utmht', '_utmht'),
          ne = at('_hc', void 0, 0),
          oe = at('_ti', void 0, 0),
          ie = at('_to', void 0, 20);st('dimension([0-9]+)', ((t) => { return new it(t[0], `cd${t[1]}`); })), st('metric([0-9]+)', ((t) => { return new it(t[0], `cm${t[1]}`); })), at('linkerParam', void 0, void 0, ((t) => { const e = ln(t = t.get(Te), 0);return `_ga=1.${h(`${e}.${t}`)}`; }), lt);var re = at('usage', '_u'),
          ae = at('_um');at('forceSSL', void 0, void 0, (() => { return ft; }), ((t, e, o) => { n(34), ft = !!o; }));const se = at('_j1', 'jid');st('\\&(.*)', ((t) => {
          const e = new it(t[0], t[1]),
            n = (function (t) { let e;return Q.map(((n, o) => { o.F == t && (e = o); })), e && e.name; }(t[0].substring(1)));return n && (e.Z = function (t) { return t.get(n); }, e.o = function (t, e, o, i) { t.set(n, o, i); }, e.F = void 0), e;
        }));var ce = ct('_oot'),
          le = at('previewTask'),
          ue = at('checkProtocolTask'),
          fe = at('validationTask'),
          de = at('checkStorageTask'),
          he = at('historyImportTask'),
          pe = at('samplerTask'),
          ge = at('_rlt'),
          me = at('buildHitTask'),
          ve = at('sendHitTask'),
          we = at('ceTask'),
          ye = at('devIdTask'),
          be = at('timingTask'),
          Ee = at('displayFeaturesTask'),
          ke = ct('name'),
          Te = ct('clientId', 'cid'),
          Le = ct('clientIdTime'),
          xe = at('userId', 'uid'),
          je = ct('trackingId', 'tid'),
          _e = ct('cookieName', void 0, '_ga'),
          Ce = ct('cookieDomain'),
          Se = ct('cookiePath', void 0, '/'),
          De = ct('cookieExpires', void 0, 63072e3),
          Ae = ct('legacyCookieDomain'),
          Me = ct('legacyHistoryImport', void 0, !0),
          Oe = ct('storage', void 0, 'cookie'),
          Pe = ct('allowLinker', void 0, !1),
          He = ct('allowAnchor', void 0, !0),
          Re = ct('sampleRate', 'sf', 100),
          Ne = ct('siteSpeedSampleRate', void 0, 1),
          Ie = ct('alwaysSendReferrer', void 0, !1),
          qe = at('transportUrl'),
          $e = at('_r', '_r');function Be(t, e, o, i) { e[t] = function () { try { return i && n(i), o.apply(this, arguments); } catch (xn) { throw N('exc', t, xn && xn.name), xn; } }; } const Xe = function (t, e, n) { this.V = t, this.fa = e, this.$ = !1, this.oa = n, this.ea = 1; },
          Ve = function (t, e) { let n;if (t.fa && t.$) return 0;if (t.$ = !0, e) { if (t.oa && nt(e, t.oa)) return nt(e, t.oa);if (e.get(Ne) == 0) return 0; } return t.V == 0 ? 0 : (void 0 === n && (n = z()), n % t.V == 0 ? Math.floor(n / t.V) % t.ea + 1 : 0); };var Ue = function (t) { const e = {};if (Fe(e) || We(e)) { const n = e[It];n == null || 1 / 0 == n || isNaN(n) || (n > 0 ? (Ye(e, $t), Ye(e, Vt), Ye(e, Xt), Ye(e, qt), Ye(e, Bt), Ye(e, Ut), Ye(e, Ft), t(e)) : p(k, 'load', (() => { Ue(t); }), !1)); } },
          Fe = function (t) { let e;if (!(e = (e = k.performance || k.webkitPerformance) && e.timing)) return !1;const n = e.navigationStart;return n != 0 && (t[It] = e.loadEventStart - n, t[$t] = e.domainLookupEnd - e.domainLookupStart, t[Vt] = e.connectEnd - e.connectStart, t[Xt] = e.responseStart - e.requestStart, t[qt] = e.responseEnd - e.responseStart, t[Bt] = e.fetchStart - n, t[Ut] = e.domInteractive - n, t[Ft] = e.domContentLoadedEventStart - n, !0); },
          We = function (t) {
            if (k.top != k) return !1;let e = k.external,
              n = e && e.onloadT;return e && !e.isValidLoadTime && (n = void 0), n > 2147483648 && (n = void 0), n > 0 && e.setPageReadyTime(), n != null && (t[It] = n, !0);
          },
          Ye = function (t, e) { const n = t[e];(isNaN(n) || 1 / 0 == n || n < 0) && (t[e] = void 0); },
          Ke = function (t) { return function (e) { if (e.get(gt) == 'pageview' && !t.I) { t.I = !0;const n = (function (t) { const e = Math.min(nt(t, Ne), 100);return !(eo(et(t, Te)) % 100 >= e); }(e));e = w(e.get(Et), 'gclid').length > 0, (n || e) && Ue(((e) => { t.send(n ? 'timing' : 'adtiming', e); })); } }; },
          Ge = !1,
          ze = function (t) {
            if (et(t, Oe) == 'cookie') {
              let e = et(t, _e),
                o = Qe(t),
                i = nn(et(t, Se)),
                r = en(et(t, Ce)),
                a = 1e3 * nt(t, De),
                s = et(t, je);if (r != 'auto')_(e, o, i, r, s, a) && (Ge = !0);else { let c;if (n(32), o = [], (r = y().split('.')).length != 4 || (c = r[r.length - 1], parseInt(c, 10) != c)) { for (c = r.length - 2;c >= 0;c--)o.push(r.slice(c).join('.'));o.push('none'), c = o; } else c = ['none'];for (let l = 0;l < c.length;l++) if (r = c[l], t.data.set(Ce, r), o = Qe(t), _(e, o, i, r, s, a)) return void (Ge = !0);t.data.set(Ce, 'auto'); }
            }
          },
          Je = function (t) { if (et(t, Oe) == 'cookie' && !Ge && (ze(t), !Ge)) throw 'abort'; },
          Ze = function (t) {
            if (t.get(Me)) {
              let e = et(t, Ce),
                o = et(t, Ae) || y(),
                i = rn('__utma', o, e);i && (n(19), t.set(ee, (new Date()).getTime(), !0), t.set(Qt, i.R), (e = rn('__utmz', o, e)) && i.hash == e.hash && t.set(te, e.R));
            }
          },
          Qe = function (t) {
            let e = C(et(t, Te)),
              n = en(et(t, Ce)).split('.').length;return (t = on(et(t, Se))) > 1 && (n += `-${t}`), ['GA1', n, e].join('.');
          },
          tn = function (t, e, n) { for (var o, i = [], r = [], a = 0;a < t.length;a++) { const s = t[a];s.H[n] == e ? i.push(s) : o == null || s.H[n] < o ? (r = [s], o = s.H[n]) : s.H[n] == o && r.push(s); } return i.length > 0 ? i : r; },
          en = function (t) { return t.indexOf('.') == 0 ? t.substr(1) : t; },
          nn = function (t) { return t ? (t.length > 1 && t.lastIndexOf('/') == t.length - 1 && (t = t.substr(0, t.length - 1)), t.indexOf('/') != 0 && (t = `/${t}`), t) : '/'; },
          on = function (t) { return (t = nn(t)) == '/' ? 1 : t.split('/').length; };function rn(t, e, n) {
          e == 'none' && (e = '');const o = [],
            i = j(t);t = t == '__utma' ? 6 : 2;for (let r = 0;r < i.length;r++) { const a = (`${i[r]}`).split('.');a.length >= t && o.push({ hash: a[0], R: i[r], O: a }); } if (o.length != 0) return o.length == 1 ? o[0] : an(e, o) || an(n, o) || an(null, o) || o[0];
        } function an(t, e) { let n;t == null ? n = t = 1 : (n = eo(t), t = eo(l(t, '.') ? t.substring(1) : `.${t}`));for (let o = 0;o < e.length;o++) if (e[o].hash == n || e[o].hash == t) return e[o]; } const sn = new RegExp(/^https?:\/\/([^\/:]+)/),
          cn = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;function ln(t, e) {
          const n = new Date(),
            o = k.navigator,
            i = o.plugins || [];for (t = [t, o.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + e], e = 0;e < i.length;++e)t.push(i[e].description);return eo(t.join('.'));
        } const un = function (t) { n(48), this.target = t, this.T = !1; };un.prototype.ca = function (t, e) { if (t.tagName) { if (t.tagName.toLowerCase() == 'a') return void (t.href && (t.href = fn(this, t.href, e)));if (t.tagName.toLowerCase() == 'form') return dn(this, t); } if (typeof t === 'string') return fn(this, t, e); };var fn = function (t, e, n) {
            (i = cn.exec(e)) && i.length >= 3 && (e = i[1] + (i[3] ? i[2] + i[3] : '')), t = t.target.get('linkerParam');var o = e.indexOf('?'),
              i = e.indexOf('#');return n ? e += (i == -1 ? '#' : '&') + t : (n = o == -1 ? '?' : '&', e = i == -1 ? e + (n + t) : e.substring(0, i) + n + t + e.substring(i)), e.replace(/&+_ga=/, '&_ga=');
          },
          dn = function (t, e) { if (e && e.action) { const n = t.target.get('linkerParam').split('=')[1];if (e.method.toLowerCase() == 'get') { t = e.childNodes || [];for (let o = 0;o < t.length;o++) if (t[o].name == '_ga') return void t[o].setAttribute('value', n);(t = T.createElement('input')).setAttribute('type', 'hidden'), t.setAttribute('name', '_ga'), t.setAttribute('value', n), e.appendChild(t); } else e.method.toLowerCase() == 'post' && (e.action = fn(t, e.action)); } };function hn(t, e) { if (e == T.location.hostname) return !1;for (let n = 0;n < t.length;n++) if (t[n] instanceof RegExp) { if (t[n].test(e)) return !0; } else if (e.indexOf(t[n]) >= 0) return !0;return !1; }un.prototype.S = function (t, e, o) { function i(o) { try { let i;o = o || k.event;t: { let a = o.target || o.srcElement;for (o = 100;a && o > 0;) { if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) { i = a;break t; }a = a.parentNode, o--; }i = {}; }(i.protocol == 'http:' || i.protocol == 'https:') && hn(t, i.hostname || '') && i.href && (i.href = fn(r, i.href, e)); } catch (s) { n(26); } } var r = this;this.T || (this.T = !0, p(T, 'mousedown', i, !1), p(T, 'keyup', i, !1)), o && p(T, 'submit', ((e) => { if ((e = (e = e || k.event).target || e.srcElement) && e.action) { const n = e.action.match(sn);n && hn(t, n[1]) && dn(r, e); } })); };var pn,
          gn = /^(GTM|OPT)-[A-Z0-9]+$/,
          mn = /;_gaexp=[^;]*/g,
          vn = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
          wn = function (t, e, o) { this.U = se, this.aa = e, (e = o) || (e = (e = et(t, ke)) && e != 't0' ? kn.test(e) ? `_gat_${C(et(t, je))}` : `_gat_${C(e)}` : '_gat'), this.Y = e, Ve(new Xe(10), t) && (n(30), this.pa = !0); },
          yn = function (t, e) { e.get(t.U) || (j(t.Y)[0] == '1' ? e.set(t.U, '', !0) : e.set(t.U, `${G()}`, !0)); },
          bn = function (t, e) { if (e.get(t.U)) { let n = 6e5;t.pa && (n /= 10), _(t.Y, '1', e.get(Se), e.get(Ce), e.get(je), n); } },
          En = function (t, e) {
            if (e.get(t.U)) {
              const n = new E(),
                o = function (t) { rt(t).F && n.set(rt(t).F, e.get(t)); };o(dt), o(ht), o(je), o(Te), o(xe), o(t.U), n.set(rt(re).F, i(e));let r = t.aa;n.map(((t, e) => { r += `${h(t)}=`, r += `${h(`${e}`)}&`; })), r += `z=${G()}`, f(r), e.set(t.U, '', !0);
            }
          },
          kn = /^gtm\d+$/,
          Tn = function (t, e) { let n;(t = t.b).get('dcLoaded') || (o(t, 29), (e = e || {})[_e] && (n = C(e[_e])), (function (t, e) { const n = e.get(me);e.set(me, ((e) => { yn(t, e);const o = n(e);return bn(t, e), o; }));const o = e.get(ve);e.set(ve, ((e) => { const n = o(e);return En(t, e), n; })); }(e = new wn(t, 'https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&', n), t)), t.set('dcLoaded', !0)); },
          Ln = function (t) { if (!t.get('dcLoaded') && t.get(Oe) == 'cookie') { o(t, 51);const e = new wn(t);yn(e, t), bn(e, t), t.get(e.U) && (t.set($e, 1, !0), t.set(qe, `${A()}/r/collect`, !0)); } },
          jn = function (t) { return t ? (1 * t).toFixed(3) : '0'; },
          _n = function (t) {
            const e = k.performance;if (e && e.getEntriesByName) {
              n(35);const o = `https://www.google-analytics.com/analytics.js?wpid=${t}`;m(o, void 0, void 0, (() => {
                try {
                  let i = 1,
                    r = e.getEntriesByName('https://www.google-analytics.com/analytics.js');r && r.length != 0 || (r = e.getEntriesByName('http://www.google-analytics.com/analytics.js'), i = 0);const a = e.getEntriesByName(o);if (r && r.length == 1 && a && a.length == 1) {
                    n(37);const s = r[0],
                      c = a[0],
                      l = { tid: t, ad: jn(s.duration), bd: jn(c.duration), ar: jn(s.responseEnd - s.requestStart), br: jn(c.responseEnd - c.requestStart), an: jn(s.domainLookupEnd - s.domainLookupStart), bn: jn(c.domainLookupEnd - c.domainLookupStart), ac: jn(s.connectEnd - s.connectStart), bc: jn(c.connectEnd - c.connectStart), as: i };i = [];for (const u in i.push('_v=j48'), i.push('id=10'), l)l.hasOwnProperty(u) && i.push(`${u}=${h(l[u])}`);i.push(`z=${G()}`), P('https://www.google-analytics.com/u/d', i.join('&'), d);
                  }
                } catch (f) {}
              }));
            }
          },
          Cn = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
          Sn = function (t) {
            function e(t, e) { r.b.data.set(t, e); } function o(t, n) { e(t, n), r.filters.add(t); } function i(t, e, o) { Ve(new Xe(1e4, !0, e), r.b) && (t = j(t)) && t.length > 0 && n(o); } var r = this;this.b = new Z(), this.filters = new q(), e(ke, t[ke]), e(je, u(t[je])), e(_e, t[_e]), e(Ce, t[Ce] || y()), e(Se, t[Se]), e(De, t[De]), e(Ae, t[Ae]), e(Me, t[Me]), e(Pe, t[Pe]), e(He, t[He]), e(Re, t[Re]), e(Ne, t[Ne]), e(Ie, t[Ie]), e(Oe, t[Oe]), e(xe, t[xe]), e(Le, t[Le]), e(dt, 1), e(ht, 'j48'), o(ce, B), o(le, W), o(ue, X), o(fe, K), o(de, Je), o(he, Ze), o(pe, $), o(ge, J), o(we, F), o(ye, Y), o(Ee, Ln), o(me, V), o(ve, U), o(be, Ke(this)), Dn(this.b, t[Te]), An(this.b), this.b.set(pt, (function () { const t = k.gaGlobal = k.gaGlobal || {};return t.hid = t.hid || G(); }())), (function (t, e, n) {
              if (!pn) {
                let o;o = T.location.hash;let i = k.name,
                  r = /^#?gaso=([^&]*)/;(i = (o = (o = o && o.match(r) || i && i.match(r)) ? o[1] : j('GASO')[0] || '') && o.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (_('GASO', `${o}`, n, e, t, 0), window._udo || (window._udo = e), window._utcp || (window._utcp = n), t = i[1], m(`https://www.google.com/analytics/web/inpage/pub/inpage.js?${t ? `prefix=${t}&` : ''}${G()}`, '_gasojs')), pn = !0;
              }
            }(this.b.get(je), this.b.get(Ce), this.b.get(Se))), this.ra = new Xe(1e4, !0, 'gaexp10'), i('_gid', 'gacookie11', 41), i('_gaid', 'gacookie12', 44);
          },
          Dn = function (t, e) {
            if (et(t, Oe) == 'cookie') {
              var o;Ge = !1;t: {
                var i = j(et(t, _e));if (i && !(i.length < 1)) {
                  o = [];for (var r = 0;r < i.length;r++) {
                    var a,
                      s = (a = i[r].split('.')).shift();(s == 'GA1' || s == '1') && a.length > 1 ? ((s = a.shift().split('-')).length == 1 && (s[1] = '1'), s[0] *= 1, s[1] *= 1, a = { H: s, s: a.join('.') }) : a = void 0, a && o.push(a);
                  } if (o.length == 1) { n(13), o = o[0].s;break t; } if (o.length != 0) { if (n(14), i = en(et(t, Ce)).split('.').length, (o = tn(o, i, 0)).length == 1) { o = o[0].s;break t; }i = on(et(t, Se)), o = (o = tn(o, i, 1))[0] && o[0].s;break t; }n(12);
                }o = void 0;
              }o || (o = et(t, Ce), (o = rn('__utma', i = et(t, Ae) || y(), o)) != null ? (n(10), o = `${o.O[1]}.${o.O[2]}`) : o = void 0), o && (t.data.set(Te, o), Ge = !0);
            } if (o = t.get(He), (r = w(T.location[o ? 'href' : 'search'], '_ga')) && (t.get(Pe) ? (o = r.indexOf('.')) == -1 ? n(22) : (i = r.substring(o + 1), r.substring(0, o) != '1' ? n(22) : (o = i.indexOf('.')) == -1 ? n(22) : (r = i.substring(0, o)) != ln(o = i.substring(o + 1), 0) && r != ln(o, -1) && r != ln(o, -2) ? n(23) : (n(11), t.data.set(Te, o))) : n(21)), e && (n(9), t.data.set(Te, h(e))), !t.get(Te)) if (e = (e = k.gaGlobal && k.gaGlobal.vid) && e.search(/^(?:utma\.)?\d+\.\d+$/) != -1 ? e : void 0)n(17), t.data.set(Te, e);else { for (n(8), o = (e = k.navigator.userAgent + (T.cookie ? T.cookie : '') + (T.referrer ? T.referrer : '')).length, i = k.history.length;i > 0;)e += i-- ^ o++;t.data.set(Te, [G() ^ 2147483647 & eo(e), Math.round((new Date()).getTime() / 1e3)].join('.')); }ze(t);
          },
          An = function (t) {
            let e = k.navigator,
              o = k.screen,
              i = T.location;if (t.set(kt, (function (t) { const e = T.referrer;if (/^https?:\/\//i.test(e)) { if (t) return e;t = `//${T.location.hostname}`;const n = e.indexOf(t);if ((n == 5 || n == 6) && ((t = e.charAt(n + t.length)) == '/' || t == '?' || t == '' || t == ':')) return;return e; } }(t.get(Ie)))), i) { var r = i.pathname || '';r.charAt(0) != '/' && (n(31), r = `/${r}`), t.set(Et, `${i.protocol}//${i.hostname}${r}${i.search}`); }o && t.set(_t, `${o.width}x${o.height}`), o && t.set(jt, `${o.colorDepth}-bit`);o = T.documentElement;let a = (r = T.body) && r.clientWidth && r.clientHeight,
              s = [];if (o && o.clientWidth && o.clientHeight && (T.compatMode === 'CSS1Compat' || !a) ? s = [o.clientWidth, o.clientHeight] : a && (s = [r.clientWidth, r.clientHeight]), o = s[0] <= 0 || s[1] <= 0 ? '' : s.join('x'), t.set(Ct, o), t.set(Dt, (function () {
              let t,
                e,
                n;if ((n = (n = k.navigator) ? n.plugins : null) && n.length) for (let o = 0;o < n.length && !e;o++) { const i = n[o];i.name.indexOf('Shockwave Flash') > -1 && (e = i.description); } if (!e) try { e = (t = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7')).GetVariable('$version'); } catch (a) {} if (!e) try { t = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6'), e = 'WIN 6,0,21,0', t.AllowScriptAccess = 'always', e = t.GetVariable('$version'); } catch (a) {} if (!e) try { e = (t = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')).GetVariable('$version'); } catch (a) {} return e && (t = e.match(/[\d]+/g)) && t.length >= 3 && (e = `${t[0]}.${t[1]} r${t[2]}`), e || void 0;
            }())), t.set(xt, T.characterSet || T.charset), t.set(St, e && typeof e.javaEnabled === 'function' && e.javaEnabled() || !1), t.set(Lt, (e && (e.language || e.browserLanguage) || '').toLowerCase()), i && t.get(He) && (e = T.location.hash)) { for (e = e.split(/[?&#]+/), i = [], o = 0;o < e.length;++o)(l(e[o], 'utm_id') || l(e[o], 'utm_campaign') || l(e[o], 'utm_source') || l(e[o], 'utm_medium') || l(e[o], 'utm_term') || l(e[o], 'utm_content') || l(e[o], 'gclid') || l(e[o], 'dclid') || l(e[o], 'gclsrc')) && i.push(e[o]);i.length > 0 && (e = `#${i.join('&')}`, t.set(Et, t.get(Et) + e)); }
          };Sn.prototype.get = function (t) { return this.b.get(t); }, Sn.prototype.set = function (t, e) { this.b.set(t, e); };const On = { pageview: [Tt], event: [At, Mt, Ot, Pt], social: [Ht, Rt, Nt], timing: [Wt, Yt, Gt, Kt] };Sn.prototype.send = function (t) {
          let e,
            n;arguments.length < 1 || (typeof arguments[0] === 'string' ? (e = arguments[0], n = [].slice.call(arguments, 1)) : (e = arguments[0] && arguments[0][gt], n = arguments), e && ((n = b(On[e] || [], n))[gt] = e, this.b.set(n, void 0, !0), this.filters.D(this.b), this.b.data.m = {}, Ve(this.ra, this.b) && _n(this.b.get(je))));
        }, Sn.prototype.ma = function (t, e) { const n = this;Un(t, n, e) || (Wn(t, (() => { Un(t, n, e); })), Fn(String(n.get(ke)), t, void 0, e, !0)); };let Pn,
          Hn,
          Nn,
          In,
          qn = function (t) { return T.visibilityState != 'prerender' && (t(), !0); },
          $n = function (t) {
            if (!qn(t)) {
              n(16);var e = !1,
                o = function () {
                  if (!e && qn(t)) {
                    e = !0;const n = o,
                      i = T;i.removeEventListener ? i.removeEventListener('visibilitychange', n, !1) : i.detachEvent && i.detachEvent('onvisibilitychange', n);
                  }
                };p(T, 'visibilitychange', o);
            }
          },
          Bn = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
          Xn = function (t) { if (a(t[0])) this.u = t[0];else { let e = Bn.exec(t[0]);if (e != null && e.length == 4 && (this.c = e[1] || 't0', this.K = e[2] || '', this.C = e[3], this.a = [].slice.call(t, 1), this.K || (this.A = this.C == 'create', this.i = this.C == 'require', this.g = this.C == 'provide', this.ba = this.C == 'remove'), this.i && (this.a.length >= 3 ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (c(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), e = t[1], t = t[2], !this.C) throw 'abort';if (this.i && (!c(e) || e == '')) throw 'abort';if (this.g && (!c(e) || e == '' || !a(t))) throw 'abort';if (Vn(this.c) || Vn(this.K)) throw 'abort';if (this.g && this.c != 't0') throw 'abort'; } };function Vn(t) { return t.indexOf('.') >= 0 || t.indexOf(':') >= 0; }Pn = new E(), Nn = new E(), In = new E(), Hn = { ec: 45, ecommerce: 46, linkid: 47 };var Un = function (t, e, n) { e == Jn || e.get(ke);const o = Pn.get(t);return !!a(o) && (e.plugins_ = e.plugins_ || new E(), !!e.plugins_.get(t) || (e.plugins_.set(t, new o(e, n || {})), !0)); },
          Fn = function (t, e, o, i, r) { if (!a(Pn.get(e)) && !Nn.get(e)) { if (Hn.hasOwnProperty(e) && n(Hn[e]), gn.test(e)) { if (n(52), !(t = Jn.j(t))) return !0;i = { id: e, B: (o = i || {}).dataLayer || 'dataLayer', ia: !!t.get('anonymizeIp'), na: r, G: !1 }, t.get('&gtm') == e && (i.G = !0);const s = String(t.get('name'));s != 't0' && (i.target = s), x(String(t.get('trackingId'))) || (i.ja = String(t.get(Te)), i.ka = Number(t.get(Le)), o = o.palindrome ? vn : mn, o = (o = T.cookie.replace(/^|(; +)/g, ';').match(o)) ? o.sort().join('').substring(1) : void 0, i.la = o, i.qa = w(t.b.get(Et) || '', 'gclid')), t = i.B, o = (new Date()).getTime(), k[t] = k[t] || [], o = { 'gtm.start': o }, r || (o.event = 'gtm.js'), k[t].push(o), o = (function (t) { function e(t, e) { e && (n += `&${t}=${h(e)}`); } var n = `https://www.google-analytics.com/gtm/js?id=${h(t.id)}`;return t.B != 'dataLayer' && e('l', t.B), e('t', t.target), e('cid', t.ja), e('cidt', t.ka), e('gac', t.la), e('aip', t.ia), t.na && e('m', 'sync'), e('cycle', t.G), t.qa && e('gclid', t.qa), n; }(i)); }!o && Hn.hasOwnProperty(e) ? (n(39), o = `${e}.js`) : n(43), o && (o && o.indexOf('/') >= 0 || (o = `${ft || v() ? 'https:' : 'http:'}//www.google-analytics.com/plugins/ua/${o}`), t = (i = Gn(o)).protocol, o = T.location.protocol, (t == 'https:' || t == o || t == 'http:' && o == 'http:') && Kn(i) && (m(i.url, void 0, r), Nn.set(e, !0))); } },
          Wn = function (t, e) { const n = In.get(t) || [];n.push(e), In.set(t, n); },
          Yn = function (t, e) { Pn.set(t, e), e = In.get(t) || [];for (let n = 0;n < e.length;n++)e[n]();In.set(t, []); },
          Kn = function (t) { let e = Gn(T.location.href);return !!l(t.url, 'https://www.google-analytics.com/gtm/js?id=') || !(t.query || t.url.indexOf('?') >= 0 || t.path.indexOf('://') >= 0) && (t.host == e.host && t.port == e.port || (e = t.protocol == 'http:' ? 80 : 443, !(t.host != 'www.google-analytics.com' || (t.port || e) != e || !l(t.path, '/plugins/')))); },
          Gn = function (t) {
            function e(t) {
              let e = (t.hostname || '').split(':')[0].toLowerCase(),
                n = (t.protocol || '').toLowerCase();n = 1 * t.port || (n == 'http:' ? 80 : n == 'https:' ? 443 : '');return t = t.pathname || '', l(t, '/') || (t = `/${t}`), [e, `${n}`, t];
            } const n = T.createElement('a');n.href = T.location.href;let o = (n.protocol || '').toLowerCase(),
              i = e(n),
              r = n.search || '',
              a = `${o}//${i[0]}${i[1] ? `:${i[1]}` : ''}`;return l(t, '//') ? t = o + t : l(t, '/') ? t = a + t : !t || l(t, '?') ? t = a + i[2] + (t || r) : t.split('/')[0].indexOf(':') < 0 && (t = `${a + i[2].substring(0, i[2].lastIndexOf('/'))}/${t}`), n.href = t, o = e(n), { protocol: (n.protocol || '').toLowerCase(), host: o[0], port: o[1], path: o[2], query: n.search || '', url: t || '' };
          },
          zn = { ga() { zn.f = []; } };zn.ga(), zn.D = function (t) { let e = zn.J.apply(zn, arguments);e = zn.f.concat(e);for (zn.f = [];e.length > 0 && !zn.v(e[0]) && (e.shift(), !(zn.f.length > 0)););zn.f = zn.f.concat(e); }, zn.J = function (t) { for (var e = [], n = 0;n < arguments.length;n++) try { const o = new Xn(arguments[n]);o.g ? Yn(o.a[0], o.a[1]) : (o.i && (o.ha = Fn(o.c, o.a[0], o.X, o.W)), e.push(o)); } catch (xn) {} return e; }, zn.v = function (t) {
          try {
            if (t.u)t.u.call(k, Jn.j('t0'));else {
              const e = t.c == ut ? Jn : Jn.j(t.c);if (t.A)t.c != 't0' || Jn.create.apply(Jn, t.a);else if (t.ba)Jn.remove(t.c);else if (e) {
                if (t.i) { if (t.ha && (t.ha = Fn(t.c, t.a[0], t.X, t.W)), !Un(t.a[0], e, t.W)) return !0; } else if (t.K) {
                  const n = t.C,
                    o = t.a,
                    i = e.plugins_.get(t.K);i[n].apply(i, o);
                } else e[t.C].apply(e, t.a);
              }
            }
          } catch (r) {}
        };var Jn = function (t) { n(1), zn.D.apply(zn, [arguments]); };Jn.h = {}, Jn.P = [], Jn.L = 0, Jn.answer = 42;const Zn = [je, Ce, ke];Jn.create = function (t) { let e = b(Zn, [].slice.call(arguments));e[ke] || (e[ke] = 't0');const n = `${e[ke]}`;return Jn.h[n] ? Jn.h[n] : (e = new Sn(e), Jn.h[n] = e, Jn.P.push(e), e); }, Jn.remove = function (t) { for (let e = 0;e < Jn.P.length;e++) if (Jn.P[e].get(ke) == t) { Jn.P.splice(e, 1), Jn.h[t] = null;break; } }, Jn.j = function (t) { return Jn.h[t]; }, Jn.getAll = function () { return Jn.P.slice(0); }, Jn.N = function () { ut != 'ga' && n(49);let t = k[ut];if (!t || t.answer != 42) { if (Jn.L = t && t.l, Jn.loaded = !0, Be('create', e = k[ut] = Jn, e.create), Be('remove', e, e.remove), Be('getByName', e, e.j, 5), Be('getAll', e, e.getAll, 6), Be('get', e = Sn.prototype, e.get, 7), Be('set', e, e.set, 4), Be('send', e, e.send), Be('requireSync', e, e.ma), Be('get', e = Z.prototype, e.get), Be('set', e, e.set), !v() && !ft) { t: { for (var e = T.getElementsByTagName('script'), o = 0;o < e.length && o < 100;o++) { const i = e[o].src;if (i && i.indexOf('https://www.google-analytics.com/analytics') == 0) { n(33), e = !0;break t; } }e = !1; }e && (ft = !0); }v() || ft || !Ve(new Xe(1e4)) || (n(36), ft = !0), (k.gaplugins = k.gaplugins || {}).Linker = un, e = un.prototype, Yn('linker', un), Be('decorate', e, e.ca, 20), Be('autoLink', e, e.S, 25), Yn('displayfeatures', Tn), Yn('adfeatures', Tn), t = t && t.q, s(t) ? zn.D.apply(Jn, t) : n(50); } }, Jn.da = function () { for (let t = Jn.getAll(), e = 0;e < t.length;e++)t[e].get(ke); };const Qn = Jn.N,
          to = k[ut];function eo(t) {
          let e,
            n,
            o = 1;if (t) for (o = 0, n = t.length - 1;n >= 0;n--)o = (e = 266338304 & (o = (o << 6 & 268435455) + (e = t.charCodeAt(n)) + (e << 14))) != 0 ? o ^ e >> 21 : o;return o;
        }to && to.r ? Qn() : $n(Qn), $n((() => { zn.D(['provide', 'render', d]); }));
      }()), (function () {
        const t = window,
          e = 'push',
          n = 'length',
          o = 'prototype',
          i = function (t) { if (t.get && t.set) { this.clear();const e = t.get('buildHitTask');t.set('buildHitTask', f(this, e)), t.set('_rlt', d(this, t.get('_rlt'))); } },
          r = { action: 'pa', promoAction: 'promoa', id: 'ti', affiliation: 'ta', revenue: 'tr', tax: 'tt', shipping: 'ts', coupon: 'tcc', step: 'cos', label: 'col', option: 'col', options: 'col', list: 'pal', listSource: 'pls' },
          a = { id: 'id', name: 'nm', brand: 'br', category: 'ca', variant: 'va', position: 'ps', price: 'pr', quantity: 'qt', coupon: 'cc', 'dimension(\\d+)': 'cd', 'metric(\\d+)': 'cm' },
          s = { id: 'id', name: 'nm', creative: 'cr', position: 'ps' },
          c = function (t, e) { this.name = t, this.source = e, this.e = []; },
          l = 'detail checkout checkout_option click add remove purchase refund'.split(' ');i[o].clear = function () { this.b = void 0, this.f = [], this.a = [], this.g = [], this.d = void 0; }, i[o].h = function (t, e) { const n = e || {};t == 'promo_click' ? n.promoAction = 'click' : n.action = t, this.b = h(n); }, i[o].j = function (t) { (t = h(t)) && this.f[e](t); }, i[o].i = function (t) {
          const o = h(t);if (o) {
            let i,
              r = t.list || '';t = t.listSource || '';for (let a = 0;a < this.a[n];a++) if (this.a[a].name == r) { i = this.a[a];break; }i || (i = new c(r, t), this.a[e](i)), i.e[e](o);
          }
        }, i[o].c = function (t) { (t = h(t)) && this.g[e](t); };const u = function (t, e, i) { if (Object[o].toString.call(Object(t)) == '[object Array]') for (let r = 0;r < t[n];r++)e.call(i, t[r]); };i[o].data = function (t) { if (t && t.ecommerce) { (t = t.ecommerce).promoView && u(t.promoView.promotions, this.c, this), t.promoClick && (this.h('promo_click', t.promoClick.actionField), u(t.promoClick.promotions, this.c, this));for (let e = 0;e < l[n];e++) { const o = t[l[e]];if (o) { this.h(l[e], o.actionField), u(o.products, this.j, this);break; } }u(t.impressions, this.i, this), t.currencyCode && (this.d = t.currencyCode); } };var f = function (t, e) {
            return function (o) {
              let i,
                c,
                l;for (t.b && p(r, t.b, o, '&'), i = 0;i < t.f[n];i++)c = `&pr${i + 1}`, p(a, t.f[i], o, c);for (i = 0;i < t.a[n];i++) { c = `&il${i + 1}`, (l = t.a[i]).name && o.set(`${c}nm`, l.name, !0), l.source && o.set(`${c}ls`, l.source, !0);for (let u = 0;u < l.e[n];u++)p(a, l.e[u], o, `${c}pi${u + 1}`); } for (i = 0;i < t.g[n];i++)c = `&promo${i + 1}`, p(s, t.g[i], o, c);return t.d && o.set('&cu', t.d, !0), t.clear(), e(o);
            };
          },
          d = function (t, e) { return function (n) { const o = t.b && t.b.action;if (o != 'purchase' && o != 'refund') return e(n); }; },
          h = function (t) {
            let e = 0,
              n = {};if (t && typeof t === 'object') for (const o in t)t.hasOwnProperty(o) && (n[o] = t[o], e++);return e ? n : void 0;
          },
          p = function (t, e, n, o) { for (const i in e) if (e.hasOwnProperty(i)) for (const r in t) if (t.hasOwnProperty(r)) { const a = i.match(`^${r}$`);a && n.set(o + t[r] + a.slice(1).join(''), e[i], !0); } };!(function () { t.gaplugins = t.gaplugins || {}, t.gaplugins.EC = i, i[o].setAction = i[o].h, i[o].addProduct = i[o].j, i[o].addImpression = i[o].i, i[o].addPromo = i[o].c, i[o].clear = i[o].clear, i[o].data = i[o].data;const n = t.GoogleAnalyticsObject || 'ga';t[n] = t[n] || function () { (t[n].q = t[n].q || [])[e](arguments); }, t[n]('provide', 'ec', i); }());
      }()), window.ga || (window.ga = function () { window.ga.q.push(arguments); }, window.ga.q = []);const Ne = [];let Ie = 0;function qe(t) { !(async function () { Ne.push(t), await _, (function () { const t = Ie;Ie = Ne.length, $e(Ne.slice(t), null, window.location.href); }()); }()); } function $e(t, e, n) {
        const o = window.location.hash.slice(1),
          i = { oldURL: e, newURL: n, target: o ? document.getElementById(o) : null };for (const r of t)r.call(null, i);
      }qe.clear = () => { Ne.length = Ie = 0; };let Be = window.location.href;window.addEventListener('popstate', (() => { Be = window.location.href; })), window.addEventListener('hashchange', ((t) => { const e = window.location.href;try { $e(Ne, t.oldURL || Be, e); } finally { Be = e; } }));let Xe = null;document.addEventListener('pjax:start', (() => { Xe = window.location.href; })), document.addEventListener('pjax:end', (() => { $e(Ne, Xe, window.location.href); })), x(['input[pattern]', 'input[required]', 'textarea[required]', 'input[data-required-change]', 'textarea[data-required-change]'].join(','), (t) => { let e = t.checkValidity();function n() { const n = t.checkValidity();n !== e && t.form && Ue(t.form), e = n; }t.addEventListener('input', n), t.addEventListener('blur', (function e() { t.removeEventListener('input', n), t.removeEventListener('blur', e); })); });const Ve = new WeakMap();function Ue(t) { const e = t.checkValidity();for (const o of n(t, 'button[data-disable-invalid]', HTMLButtonElement))o.disabled = !e; } async function Fe(t) {
        const e = c(document, '#site-details-dialog', HTMLTemplateElement).content.cloneNode(!0);if (!(e instanceof DocumentFragment)) throw new Error('invariant violation: clonedDetails instanceof HTMLElement');const n = c(e, 'details'),
          o = c(n, 'details-dialog'),
          i = c(n, '.js-details-dialog-spinner');t.detailsClass && n.classList.add(...t.detailsClass.split(' ')), t.dialogClass && o.classList.add(...t.dialogClass.split(' ')), document.body.append(e);const a = await t.content;return i.remove(), o.prepend(a), n.addEventListener('toggle', () => { n.hasAttribute('open') || (r(o, 'dialog:remove'), n.remove()); }), o;
      } function We(t) { const e = document.querySelector('.sso-modal');e && (e.classList.remove('success', 'error'), t ? e.classList.add('success') : e.classList.add('error')); }i('button[data-disable-invalid]', { constructor: HTMLButtonElement, initialize(t) { const e = t.form;e && (!(function (t) { Ve.get(t) || (t.addEventListener('change', () => Ue(t)), Ve.set(t, !0)); }(e)), t.disabled = !e.checkValidity()); } }), i('input[data-required-change], textarea[data-required-change]', ((t) => { const e = t.type === 'radio' && t.form ? s(t.form, t.name, RadioNodeList).value : null;function n(n) { const o = t.form;if (n && t.type === 'radio' && o && e) for (const i of s(o, t.name, RadioNodeList))i instanceof HTMLInputElement && i.setCustomValidity(t.value === e ? 'unchanged' : '');else t.setCustomValidity(t.value === (e || t.defaultValue) ? 'unchanged' : ''); }t.addEventListener('input', n), t.addEventListener('change', n), n(), t.form && Ue(t.form); })), document.addEventListener('reset', ((t) => { if (t.target instanceof HTMLFormElement) { const e = t.target;setTimeout(() => Ue(e)); } })), i('.js-sso-modal-complete', ((t) => {
        if (window.opener && window.opener.external.ssoComplete) {
          const e = t.getAttribute('data-error'),
            n = t.getAttribute('data-expires-around');window.opener.external.ssoComplete({ error: e, expiresAround: n }), window.close();
        } else { const e = t.getAttribute('data-fallback-url');e && (window.location.href = e); }
      }));let Ye = null;function Ke() { Ye = null; } function Ge() { const t = document.getElementById('ajax-error-message');t && t.classList.add('visible'); } function ze() { const t = document.getElementById('ajax-error-message');t && t.classList.remove('visible'); } function Je() {}o('deprecatedAjaxError', '[data-remote]', ((t) => {
        const e = t.detail,
          { error: n, text: o } = e;t.currentTarget === t.target && n !== 'abort' && n !== 'canceled' && (/<html/.test(o) ? (Ge(), t.stopImmediatePropagation()) : setTimeout((() => { t.defaultPrevented || Ge(); }), 0));
      })), o('deprecatedAjaxSend', '[data-remote]', (() => { ze(); })), o('click', '.js-ajax-error-dismiss', (() => { ze(); }));t('W', class SlidingPromiseQueue {
        constructor() { this.previousReceiver = { resolve: Je, reject: Je }; }

        push(t) { return this.previousReceiver.resolve = this.previousReceiver.reject = Je, new Promise((e, n) => { const o = { resolve: e, reject: n };this.previousReceiver = o, t.then(((...t) => { o.resolve(...t); }), ((...t) => { o.reject(...t); })); }); }
      });let Ze = !1,
        Qe = 0;const tn = [];function en() { tn.length ? Ze || (window.addEventListener('resize', on, { passive: !0 }), document.addEventListener('scroll', on, { passive: !0 }), Ze = !0) : (function () { const t = { passive: !0 };window.removeEventListener('resize', on, t), document.removeEventListener('scroll', on, t), Ze = !1; }()); } function nn() { rn(!0); } function on() { rn(); } function rn(t = !1) {
        for (const e of tn) {
          if (e.element.offsetHeight > 0) {
            const { element: n, placeholder: o, top: i } = e,
              r = n.getBoundingClientRect();if (o) { const a = o.getBoundingClientRect();n.classList.contains('is-stuck') ? a.top > pn(n, i) ? sn(e) : cn(e) : r.top <= pn(n, i) ? an(e) : t && cn(e); } else r.top <= pn(n, i) ? an(e) : sn(e);
          }
        }
      } function an({ element: t, placeholder: e, top: n }) { if (e) { const o = t.getBoundingClientRect();gn(t, pn(t, n)), t.style.left = `${o.left}px`, t.style.width = `${o.width}px`, t.style.marginTop = '0', t.style.position = 'fixed', e.style.display = 'block'; }t.classList.add('is-stuck'); } function sn({ element: t, placeholder: e }) { e && (t.style.position = 'static', t.style.marginTop = e.style.marginTop, e.style.display = 'none'), t.classList.remove('is-stuck'); } function cn({ element: t, placeholder: e, offsetParent: n, top: o }) {
        if (e) {
          const i = t.getBoundingClientRect(),
            r = e.getBoundingClientRect();if (gn(t, pn(t, o)), t.style.left = `${r.left}px`, t.style.width = `${r.width}px`, n) { const e = n.getBoundingClientRect();e.bottom < i.height + parseInt(String(o)) && (t.style.top = `${e.bottom - i.height}px`); }
        }
      } function ln(t) { if (function (t) { const { position: e } = window.getComputedStyle(t);return /sticky/.test(e); }(t)) return null;const e = t.previousElementSibling;if (e && e.classList.contains('is-placeholder')) { if (!(e instanceof HTMLElement)) throw new Error('invariant');return e; } const n = document.createElement('div');return n.style.visibility = 'hidden', n.style.display = 'none', n.style.height = window.getComputedStyle(t).height, n.className = t.className, n.classList.remove('js-sticky'), n.classList.add('is-placeholder'), t.parentNode.insertBefore(n, t); } async function un(t) {
        await C, (function (t) {
          const e = ln(t),
            n = window.getComputedStyle(t).position;t.style.position = 'static';const o = t.offsetParent;t.style.position = 'fixed';const i = hn(t),
            r = { element: t, placeholder: e, offsetParent: o, top: i === 'auto' ? 0 : parseInt(i || '0') };t.style.position = n, tn.push(r);
        }(t)), rn(), en();
      } function fn() { for (const t of n(document, '.js-position-sticky, .js-notification-shelf-offset-top'))dn(t); } function dn(t) { if (t.classList.contains('js-notification-top-shelf')) return;gn(t, (parseInt(hn(t)) || 0) + Qe); } function hn(t) { const e = t.getAttribute('data-original-top');if (e != null) return e;const n = window.getComputedStyle(t).top;return t.setAttribute('data-original-top', n), n; } function pn(t, e) { return t.classList.contains('js-notification-top-shelf') ? e : e + Qe; } function gn(t, e) { t.style.setProperty('top', `${e}px`, 'important'); } function mn(t) { const e = t.ownerDocument;t.scrollIntoView(), setTimeout(() => { e && e.defaultView && e.defaultView.scrollBy(0, -vn(e)); }, 0); } function vn(t) {
        nn();const e = t.querySelectorAll('.js-sticky-offset-scroll'),
          n = t.querySelectorAll('.js-position-sticky');return Math.max(0, ...Array.from(e).map((t) => { const { top: e, height: n } = t.getBoundingClientRect();return e === 0 ? n : 0; })) + Math.max(0, ...Array.from(n).map((t) => {
          const { top: e, height: n } = t.getBoundingClientRect(),
            o = parseInt(getComputedStyle(t).top);if (!t.parentElement) return 0;const i = t.parentElement.getBoundingClientRect().top;return e === o && i < 0 ? n : 0;
        }));
      }i('.js-sticky', { constructor: HTMLElement, add(t) { un(t); }, remove(t) { !(function (t) { const e = tn.map((t) => t.element).indexOf(t);tn.splice(e, 1); }(t)), en(); } }), i('.js-notification-top-shelf', { constructor: HTMLElement, add(t) { !(async function (t) { if (t.offsetParent === null) return;await C;const e = Math.floor(t.getBoundingClientRect().height);e > 0 && (Qe = e, fn(), nn()); }(t)); }, remove() { for (const t of n(document, '.js-notification-top-shelf'))t.remove();Qe > 0 && (Qe = 0, fn(), nn()); } }), i('.js-notification-shelf-offset-top, .js-position-sticky', { constructor: HTMLElement, add: dn });const wn = 'ontransitionend' in window;function yn(t) { return getComputedStyle(t).transitionProperty === 'height'; } function bn(t, e) { t.style.transition = 'none', e(), t.offsetHeight, t.style.transition = ''; } function En(t, e) {
        const n = t.getAttribute('data-details-container') || '.js-details-container',
          o = l(t, n);!(function (t, e) { if (!wn) return void e();const n = Array.from(t.querySelectorAll('.js-transitionable'));t.classList.contains('js-transitionable') && n.push(t);for (const o of n) { const t = yn(o);o instanceof HTMLElement && (o.addEventListener('transitionend', () => { o.style.display = '', o.style.visibility = '', t && bn(o, (() => { o.style.height = ''; })); }, { once: !0 }), o.style.boxSizing = 'content-box', o.style.display = 'block', o.style.visibility = 'visible', t && bn(o, (() => { o.style.height = getComputedStyle(o).height; })), o.offsetHeight); }e();for (const o of n) if (o instanceof HTMLElement && yn(o)) { const t = getComputedStyle(o).height;o.style.boxSizing = '', o.style.height = t === '0px' ? `${o.scrollHeight}px` : '0px'; } }(o, () => {
          const n = e != null ? e : !o.classList.contains('open');o.classList.toggle('open', n), o.classList.toggle('Details--on', n), t.setAttribute('aria-expanded', n.toString()), Promise.resolve().then(() => {
            !(function (t) {
              const e = t.querySelectorAll('input[autofocus], textarea[autofocus]'),
                n = e[e.length - 1];n instanceof HTMLElement && document.activeElement !== n && n.focus();
            }(o)), (function (t) { t.classList.contains('tooltipped') && (t.classList.remove('tooltipped'), t.addEventListener('mouseleave', () => { t.classList.add('tooltipped'), t instanceof HTMLElement && t.blur(); }, { once: !0 })); }(t));const e = new CustomEvent('details:toggled', { bubbles: !0, cancelable: !1, detail: { open: o.classList.contains('Details--on') } });o.dispatchEvent(e);
          });
        }));
      } function kn(t) {
        let e = !1,
          n = t.parentElement;for (;n;)n.classList.contains('Details-content--shown') && (e = !0), n.classList.contains('js-details-container') && (n.classList.toggle('open', !e), n.classList.toggle('Details--on', !e), e = !1), n = n.parentElement;
      }o('click', '.js-details-target', ((t) => { const { currentTarget: e } = t;e instanceof HTMLElement && (En(e), t.preventDefault()); })), qe((({ target: t }) => { t && kn(t); }));const Tn = j(((t) => {
      /**!
       * Sortable
       * @author	RubaXa   <trash@rubaxa.org>
       * @license MIT
       */
        let e;e = function () {
          if (typeof window === 'undefined' || !window.document) return function () { throw new Error('Sortable.js requires a window with a document'); };let t,
            e,
            n,
            o,
            i,
            r,
            a,
            s,
            c,
            l,
            u,
            f,
            d,
            h,
            p,
            g,
            m,
            v,
            w,
            y,
            b,
            E,
            k = {},
            T = /\s+/g,
            L = /left|right|inline/,
            x = `Sortable${(new Date()).getTime()}`,
            j = window,
            _ = j.document,
            C = j.parseInt,
            S = j.setTimeout,
            D = j.jQuery || j.Zepto,
            A = j.Polymer,
            M = !1,
            O = 'draggable' in _.createElement('div'),
            P = !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((E = _.createElement('x')).style.cssText = 'pointer-events:auto', E.style.pointerEvents === 'auto'),
            H = !1,
            R = Math.abs,
            N = Math.min,
            I = [],
            q = [],
            $ = function () { return !1; },
            B = rt(((t, e, n) => {
              if (n && e.scroll) {
                let o,
                  i,
                  r,
                  a,
                  s,
                  f,
                  d = n[x],
                  h = e.scrollSensitivity,
                  p = e.scrollSpeed,
                  g = t.clientX,
                  m = t.clientY,
                  v = window.innerWidth,
                  w = window.innerHeight;if (l !== n && (c = e.scroll, l = n, u = e.scrollFn, !0 === c)) { c = n;do { if (c.offsetWidth < c.scrollWidth || c.offsetHeight < c.scrollHeight) break; } while (c = c.parentNode); }c && (o = c, i = c.getBoundingClientRect(), r = (R(i.right - g) <= h) - (R(i.left - g) <= h), a = (R(i.bottom - m) <= h) - (R(i.top - m) <= h)), r || a || (a = (w - m <= h) - (m <= h), ((r = (v - g <= h) - (g <= h)) || a) && (o = j)), k.vx === r && k.vy === a && k.el === o || (k.el = o, k.vx = r, k.vy = a, clearInterval(k.pid), o && (k.pid = setInterval((() => { if (f = a ? a * p : 0, s = r ? r * p : 0, typeof u === 'function') return u.call(d, s, f, t);o === j ? j.scrollTo(j.pageXOffset + s, j.pageYOffset + f) : (o.scrollTop += f, o.scrollLeft += s); }), 24)));
              }
            }), 30),
            X = function (t) {
              function e(t, e) { return t != null && !0 !== t || (t = n.name) != null ? typeof t === 'function' ? t : function (n, o) { const i = o.options.group.name;return e ? t : t && (t.join ? t.indexOf(i) > -1 : i == t); } : $; } var n = {},
                o = t.group;o && typeof o === 'object' || (o = { name: o }), n.name = o.name, n.checkPull = e(o.pull, !0), n.checkPut = e(o.put), n.revertClone = o.revertClone, t.group = n;
            };try { window.addEventListener('test', null, Object.defineProperty({}, 'passive', { get() { M = { capture: !1, passive: !1 }; } })); } catch (lt) {} function V(t, e) { if (!t || !t.nodeType || t.nodeType !== 1) throw `Sortable: \`el\` must be HTMLElement, and not ${{}.toString.call(t)}`;this.el = t, this.options = e = at({}, e), t[x] = this;const n = { group: null, sort: !0, disabled: !1, store: null, handle: null, scroll: !0, scrollSensitivity: 30, scrollSpeed: 10, draggable: /[uo]l/i.test(t.nodeName) ? 'li' : '>*', ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen', dragClass: 'sortable-drag', ignore: 'a, img', filter: null, preventOnFilter: !0, animation: 0, setData(t, e) { t.setData('Text', e.textContent); }, dropBubble: !1, dragoverBubble: !1, dataIdAttr: 'data-id', delay: 0, forceFallback: !1, fallbackClass: 'sortable-fallback', fallbackOnBody: !1, fallbackTolerance: 0, fallbackOffset: { x: 0, y: 0 }, supportPointer: !1 !== V.supportPointer };for (const o in n)!(o in e) && (e[o] = n[o]);for (const i in X(e), this)i.charAt(0) === '_' && typeof this[i] === 'function' && (this[i] = this[i].bind(this));this.nativeDraggable = !e.forceFallback && O, Y(t, 'mousedown', this._onTapStart), Y(t, 'touchstart', this._onTapStart), e.supportPointer && Y(t, 'pointerdown', this._onTapStart), this.nativeDraggable && (Y(t, 'dragover', this), Y(t, 'dragenter', this)), q.push(this._onDragOver), e.store && this.sort(e.store.get(this)); } function U(e, n) { e.lastPullMode !== 'clone' && (n = !0), i && i.state !== n && (z(i, 'display', n ? 'none' : ''), n || i.state && (e.options.group.revertClone ? (r.insertBefore(i, a), e._animate(t, i)) : r.insertBefore(i, t)), i.state = n); } function F(t, e, n) { if (t) { n = n || _;do { if (e === '>*' && t.parentNode === n || it(t, e)) return t; } while (t = W(t)); } return null; } function W(t) { const e = t.host;return e && e.nodeType ? e : t.parentNode; } function Y(t, e, n) { t.addEventListener(e, n, M); } function K(t, e, n) { t.removeEventListener(e, n, M); } function G(t, e, n) { if (t) if (t.classList)t.classList[n ? 'add' : 'remove'](e);else { const o = (` ${t.className} `).replace(T, ' ').replace(` ${e} `, ' ');t.className = (o + (n ? ` ${e}` : '')).replace(T, ' '); } } function z(t, e, n) { const o = t && t.style;if (o) { if (void 0 === n) return _.defaultView && _.defaultView.getComputedStyle ? n = _.defaultView.getComputedStyle(t, '') : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];e in o || (e = `-webkit-${e}`), o[e] = n + (typeof n === 'string' ? '' : 'px'); } } function J(t, e, n) {
            if (t) {
              let o = t.getElementsByTagName(e),
                i = 0,
                r = o.length;if (n) for (;i < r;i++)n(o[i], i);return o;
            } return [];
          } function Z(t, e, n, o, r, a, s, c) {
            t = t || e[x];const l = _.createEvent('Event'),
              u = t.options,
              f = `on${n.charAt(0).toUpperCase()}${n.substr(1)}`;l.initEvent(n, !0, !0), l.to = r || e, l.from = a || e, l.item = o || e, l.clone = i, l.oldIndex = s, l.newIndex = c, e.dispatchEvent(l), u[f] && u[f].call(t, l);
          } function Q(t, e, n, o, i, r, a, s) {
            let c,
              l,
              u = t[x],
              f = u.options.onMove;return (c = _.createEvent('Event')).initEvent('move', !0, !0), c.to = e, c.from = t, c.dragged = n, c.draggedRect = o, c.related = i || e, c.relatedRect = r || e.getBoundingClientRect(), c.willInsertAfter = s, t.dispatchEvent(c), f && (l = f.call(u, c, a)), l;
          } function tt(t) { t.draggable = !1; } function et() { H = !1; } function nt(t) { for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0;n--;)o += e.charCodeAt(n);return o.toString(36); } function ot(t, e) { let n = 0;if (!t || !t.parentNode) return -1;for (;t && (t = t.previousElementSibling);)t.nodeName.toUpperCase() === 'TEMPLATE' || e !== '>*' && !it(t, e) || n++;return n; } function it(t, e) {
            if (t) {
              const n = (e = e.split('.')).shift().toUpperCase(),
                o = new RegExp(`\\s(${e.join('|')})(?=\\s)`, 'g');return !(n !== '' && t.nodeName.toUpperCase() != n || e.length && ((` ${t.className} `).match(o) || []).length != e.length);
            } return !1;
          } function rt(t, e) {
            let n,
              o;return function () { void 0 === n && (n = arguments, o = this, S((() => { n.length === 1 ? t.call(o, n[0]) : t.apply(o, n), n = void 0; }), e)); };
          } function at(t, e) { if (t && e) for (const n in e)e.hasOwnProperty(n) && (t[n] = e[n]);return t; } function st(t) { return S(t, 0); } function ct(t) { return clearTimeout(t); } return V.prototype = { constructor: V,
            _onTapStart(e) {
              let n,
                o = this,
                i = this.el,
                r = this.options,
                a = r.preventOnFilter,
                c = e.type,
                l = e.touches && e.touches[0],
                u = (l || e).target,
                f = e.target.shadowRoot && e.path && e.path[0] || u,
                d = r.filter;if ((function (t) { I.length = 0;for (let e = t.getElementsByTagName('input'), n = e.length;n--;) { const o = e[n];o.checked && I.push(o); } }(i)), !t && !(/mousedown|pointerdown/.test(c) && e.button !== 0 || r.disabled) && !f.isContentEditable && (u = F(u, r.draggable, i)) && s !== u) { if (n = ot(u, r.draggable), typeof d === 'function') { if (d.call(this, e, u, this)) return Z(o, f, 'filter', u, i, i, n), void (a && e.preventDefault()); } else if (d && (d = d.split(',').some(((t) => { if (t = F(f, t.trim(), i)) return Z(o, t, 'filter', u, i, i, n), !0; })))) return void (a && e.preventDefault());r.handle && !F(f, r.handle, i) || this._prepareDragStart(e, l, u, n); }
            },
            _prepareDragStart(o, i, c, l) {
              let u,
                f = this,
                d = f.el,
                h = f.options,
                g = d.ownerDocument;c && !t && c.parentNode === d && (w = o, r = d, t = c, h.handleReplacedDragElement && (e = c.getAttribute('id')), n = t.parentNode, a = t.nextSibling, s = c, m = h.group, p = l, this._lastX = (i || o).clientX, this._lastY = (i || o).clientY, t.style['will-change'] = 'all', u = function () { f._disableDelayedDrag(), t.draggable = f.nativeDraggable, G(t, h.chosenClass, !0), f._triggerDragStart(o, i), Z(f, r, 'choose', t, r, r, p); }, h.ignore.split(',').forEach(((e) => { J(t, e.trim(), tt); })), Y(g, 'mouseup', f._onDrop), Y(g, 'touchend', f._onDrop), Y(g, 'touchcancel', f._onDrop), Y(g, 'selectstart', f), h.supportPointer && Y(g, 'pointercancel', f._onDrop), h.delay ? (Y(g, 'mouseup', f._disableDelayedDrag), Y(g, 'touchend', f._disableDelayedDrag), Y(g, 'touchcancel', f._disableDelayedDrag), Y(g, 'mousemove', f._disableDelayedDrag), Y(g, 'touchmove', f._disableDelayedDrag), h.supportPointer && Y(g, 'pointermove', f._disableDelayedDrag), f._dragStartTimer = S(u, h.delay)) : u());
            },
            _disableDelayedDrag() { const t = this.el.ownerDocument;clearTimeout(this._dragStartTimer), K(t, 'mouseup', this._disableDelayedDrag), K(t, 'touchend', this._disableDelayedDrag), K(t, 'touchcancel', this._disableDelayedDrag), K(t, 'mousemove', this._disableDelayedDrag), K(t, 'touchmove', this._disableDelayedDrag), K(t, 'pointermove', this._disableDelayedDrag); },
            _triggerDragStart(e, n) { (n = n || (e.pointerType == 'touch' ? e : null)) ? (w = { target: t, clientX: n.clientX, clientY: n.clientY }, this._onDragStart(w, 'touch')) : this.nativeDraggable ? (Y(t, 'dragend', this), Y(r, 'dragstart', this._onDragStart)) : this._onDragStart(w, !0);try { _.selection ? st((() => { _.selection.empty(); })) : window.getSelection().removeAllRanges(); } catch (lt) {} },
            _dragStarted() { if (r && t) { const e = this.options;G(t, e.ghostClass, !0), G(t, e.dragClass, !1), V.active = this, Z(this, r, 'start', t, r, r, p); } else this._nulling(); },
            _emulateDragOver() {
              if (y) {
                if (this._lastX === y.clientX && this._lastY === y.clientY) return;this._lastX = y.clientX, this._lastY = y.clientY, P || z(o, 'display', 'none');let t = _.elementFromPoint(y.clientX, y.clientY),
                  e = t,
                  n = q.length;if (t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(y.clientX, y.clientY)), e) do { if (e[x]) { for (;n--;)q[n]({ clientX: y.clientX, clientY: y.clientY, target: t, rootEl: e });break; }t = e; } while (e = e.parentNode);P || z(o, 'display', '');
              }
            },
            _onTouchMove(t) {
              if (w) {
                const e = this.options,
                  n = e.fallbackTolerance,
                  i = e.fallbackOffset,
                  r = t.touches ? t.touches[0] : t,
                  a = r.clientX - w.clientX + i.x,
                  s = r.clientY - w.clientY + i.y,
                  c = t.touches ? `translate3d(${a}px,${s}px,0)` : `translate(${a}px,${s}px)`;if (!V.active) { if (n && N(R(r.clientX - this._lastX), R(r.clientY - this._lastY)) < n) return;this._dragStarted(); } this._appendGhost(), b = !0, y = r, z(o, 'webkitTransform', c), z(o, 'mozTransform', c), z(o, 'msTransform', c), z(o, 'transform', c), t.preventDefault();
              }
            },
            _appendGhost() {
              if (!o) {
                let e,
                  n = t.getBoundingClientRect(),
                  i = z(t),
                  a = this.options;G(o = t.cloneNode(!0), a.ghostClass, !1), G(o, a.fallbackClass, !0), G(o, a.dragClass, !0), z(o, 'top', n.top - C(i.marginTop, 10)), z(o, 'left', n.left - C(i.marginLeft, 10)), z(o, 'width', n.width), z(o, 'height', n.height), z(o, 'opacity', '0.8'), z(o, 'position', 'fixed'), z(o, 'zIndex', '100000'), z(o, 'pointerEvents', 'none'), a.fallbackOnBody && _.body.appendChild(o) || r.appendChild(o), e = o.getBoundingClientRect(), z(o, 'width', 2 * n.width - e.width), z(o, 'height', 2 * n.height - e.height);
              }
            },
            _onDragStart(e, n) {
              const o = e.dataTransfer,
                i = this.options;this._offUpEvents(), m.checkPull(this, this, t, e), G(t, i.dragClass, !0), n ? (n === 'touch' ? (Y(_, 'touchmove', this._onTouchMove), Y(_, 'touchend', this._onDrop), Y(_, 'touchcancel', this._onDrop), i.supportPointer && (Y(_, 'pointermove', this._onTouchMove), Y(_, 'pointerup', this._onDrop))) : (Y(_, 'mousemove', this._onTouchMove), Y(_, 'mouseup', this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (o && (o.effectAllowed = 'move', i.setData && i.setData.call(this, o, t)), Y(_, 'drop', this), this._dragStartId = st(this._dragStarted));
            },
            _onDragOver(s) {
              let c,
                l,
                u,
                p,
                g = this.el,
                w = this.options,
                y = w.group,
                E = V.active,
                k = m === y,
                T = !1,
                j = w.sort;if (void 0 !== s.preventDefault && (s.preventDefault(), !w.dragoverBubble && s.stopPropagation()), !t.animated && (b = !0, w.handleReplacedDragElement && !t.parentNode && e && G(t = _.getElementById(e) || t, this.options.ghostClass, !0), E && !w.disabled && (k ? j || (p = !r.contains(t)) : v === this || (E.lastPullMode = m.checkPull(this, E, t, s)) && y.checkPut(this, E, t, s)) && (void 0 === s.rootEl || s.rootEl === this.el))) {
                if (B(s, w, this.el), H) return;if (c = F(s.target, w.draggable, g), l = t.getBoundingClientRect(), v !== this && (v = this, T = !0), p) return U(E, !0), n = r, void (i || a ? r.insertBefore(t, i || a) : j || r.appendChild(t));if (g.children.length === 0 || g.children[0] === o || g === s.target && (function (t, e) { const n = t.lastElementChild.getBoundingClientRect();return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5; }(g, s))) { if (g.children.length !== 0 && g.children[0] !== o && g === s.target && (c = g.lastElementChild), c) { if (c.animated) return;u = c.getBoundingClientRect(); }U(E, k), !1 !== Q(r, g, t, l, c, u, s) && (t.contains(g) || (g.appendChild(t), n = g), this._animate(l, t), c && this._animate(u, c)); } else if (c && !c.animated && c !== t && void 0 !== c.parentNode[x]) {
                  f !== c && (f = c, d = z(c), h = z(c.parentNode));let C = (u = c.getBoundingClientRect()).right - u.left,
                    D = u.bottom - u.top,
                    A = L.test(d.cssFloat + d.display) || h.display == 'flex' && h['flex-direction'].indexOf('row') === 0,
                    M = c.offsetWidth > t.offsetWidth,
                    O = c.offsetHeight > t.offsetHeight,
                    P = (A ? (s.clientX - u.left) / C : (s.clientY - u.top) / D) > 0.5,
                    R = c.nextElementSibling,
                    N = !1;if (A) {
                    const I = t.offsetTop,
                      q = c.offsetTop;N = I === q ? c.previousElementSibling === t && !M || P && M : c.previousElementSibling === t || t.previousElementSibling === c ? (s.clientY - u.top) / D > 0.5 : q > I;
                  } else T || (N = R !== t && !O || P && O);const $ = Q(r, g, t, l, c, u, s, N);!1 !== $ && ($ !== 1 && $ !== -1 || (N = $ === 1), H = !0, S(et, 30), U(E, k), t.contains(g) || (N && !R ? g.appendChild(t) : c.parentNode.insertBefore(t, N ? R : c)), n = t.parentNode, this._animate(l, t), this._animate(u, c));
                }
              }
            },
            _animate(t, e) { const n = this.options.animation;if (n) { const o = e.getBoundingClientRect();t.nodeType === 1 && (t = t.getBoundingClientRect()), z(e, 'transition', 'none'), z(e, 'transform', `translate3d(${t.left - o.left}px,${t.top - o.top}px,0)`), e.offsetWidth, z(e, 'transition', `all ${n}ms`), z(e, 'transform', 'translate3d(0,0,0)'), clearTimeout(e.animated), e.animated = S((() => { z(e, 'transition', ''), z(e, 'transform', ''), e.animated = !1; }), n); } },
            _offUpEvents() { const t = this.el.ownerDocument;K(_, 'touchmove', this._onTouchMove), K(_, 'pointermove', this._onTouchMove), K(t, 'mouseup', this._onDrop), K(t, 'touchend', this._onDrop), K(t, 'pointerup', this._onDrop), K(t, 'touchcancel', this._onDrop), K(t, 'pointercancel', this._onDrop), K(t, 'selectstart', this); },
            _onDrop(e) {
              const s = this.el,
                c = this.options;clearInterval(this._loopId), clearInterval(k.pid), clearTimeout(this._dragStartTimer), ct(this._cloneId), ct(this._dragStartId), K(_, 'mouseover', this), K(_, 'mousemove', this._onTouchMove), this.nativeDraggable && (K(_, 'drop', this), K(s, 'dragstart', this._onDragStart)), this._offUpEvents(), e && (b && (e.preventDefault(), !c.dropBubble && e.stopPropagation()), o && o.parentNode && o.parentNode.removeChild(o), r !== n && V.active.lastPullMode === 'clone' || i && i.parentNode && i.parentNode.removeChild(i), t && (this.nativeDraggable && K(t, 'dragend', this), tt(t), t.style['will-change'] = '', G(t, this.options.ghostClass, !1), G(t, this.options.chosenClass, !1), Z(this, r, 'unchoose', t, n, r, p), r !== n ? (g = ot(t, c.draggable)) >= 0 && (Z(null, n, 'add', t, n, r, p, g), Z(this, r, 'remove', t, n, r, p, g), Z(null, n, 'sort', t, n, r, p, g), Z(this, r, 'sort', t, n, r, p, g)) : t.nextSibling !== a && (g = ot(t, c.draggable)) >= 0 && (Z(this, r, 'update', t, n, r, p, g), Z(this, r, 'sort', t, n, r, p, g)), V.active && (g != null && g !== -1 || (g = p), Z(this, r, 'end', t, n, r, p, g), this.save()))), this._nulling();
            },
            _nulling() { r = t = n = o = a = i = s = c = l = w = y = b = g = f = d = v = m = V.active = null, I.forEach(((t) => { t.checked = !0; })), I.length = 0; },
            handleEvent(e) { switch (e.type) { case 'drop': case 'dragend': this._onDrop(e);break;case 'dragover': case 'dragenter': t && (this._onDragOver(e), (function (t) { t.dataTransfer && (t.dataTransfer.dropEffect = 'move'), t.preventDefault(); }(e)));break;case 'mouseover': this._onDrop(e);break;case 'selectstart': e.preventDefault(); } },
            toArray() { for (var t, e = [], n = this.el.children, o = 0, i = n.length, r = this.options;o < i;o++)F(t = n[o], r.draggable, this.el) && e.push(t.getAttribute(r.dataIdAttr) || nt(t));return e; },
            sort(t) {
              const e = {},
                n = this.el;this.toArray().forEach((function (t, o) { const i = n.children[o];F(i, this.options.draggable, n) && (e[t] = i); }), this), t.forEach(((t) => { e[t] && (n.removeChild(e[t]), n.appendChild(e[t])); }));
            },
            save() { const t = this.options.store;t && t.set(this); },
            closest(t, e) { return F(t, e || this.options.draggable, this.el); },
            option(t, e) { const n = this.options;if (void 0 === e) return n[t];n[t] = e, t === 'group' && X(n); },
            destroy() { let t = this.el;t[x] = null, K(t, 'mousedown', this._onTapStart), K(t, 'touchstart', this._onTapStart), K(t, 'pointerdown', this._onTapStart), this.nativeDraggable && (K(t, 'dragover', this), K(t, 'dragenter', this)), Array.prototype.forEach.call(t.querySelectorAll('[draggable]'), ((t) => { t.removeAttribute('draggable'); })), q.splice(q.indexOf(this._onDragOver), 1), this._onDrop(), this.el = t = null; } }, Y(_, 'touchmove', ((t) => { V.active && t.preventDefault(); })), V.utils = { on: Y, off: K, css: z, find: J, is(t, e) { return !!F(t, e, t); }, extend: at, throttle: rt, closest: F, toggleClass: G, clone(t) { return A && A.dom ? A.dom(t).cloneNode(!0) : D ? D(t).clone(!0)[0] : t.cloneNode(!0); }, index: ot, nextTick: st, cancelNextTick: ct }, V.create = function (t, e) { return new V(t, e); }, V.version = '1.7.0', V;
        }, t.exports = e();
      }));t('ak', Tn);const Ln = y((() => {
        let t,
          e;return (((e = (t = document.head) === null || void 0 === t ? void 0 : t.querySelector('meta[name="enabled-features"]')) === null || void 0 === e ? void 0 : e.content) || '').split(',');
      }));t('an', y(((t) => { return Ln().indexOf(t) !== -1; })));function xn(t) {
        const e = '=='.slice(0, (4 - t.length % 4) % 4),
          n = t.replace(/-/g, '+').replace(/_/g, '/') + e,
          o = atob(n),
          i = new ArrayBuffer(o.length),
          r = new Uint8Array(i);for (let a = 0;a < o.length;a++)r[a] = o.charCodeAt(a);return i;
      } function jn(t) { const e = new Uint8Array(t);let n = '';for (const o of e)n += String.fromCharCode(o);return btoa(n).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, ''); } const _n = 'copy',
        Cn = 'convert';function Sn(t, e, n) { if (e === _n) return n;if (e === Cn) return t(n);if (e instanceof Array) return n.map((n) => Sn(t, e[0], n));if (e instanceof Object) { const o = {};for (const [i, r] of Object.entries(e)) if (i in n)n[i] != null ? o[i] = Sn(t, r.schema, n[i]) : o[i] = null;else if (r.required) throw new Error(`Missing key: ${i}`);return o; } } function Dn(t) { return { required: !0, schema: t }; } function An(t) { return { required: !1, schema: t }; } const Mn = { type: Dn(_n), id: Dn(Cn), transports: An(_n) },
        On = { publicKey: Dn({ rp: Dn(_n), user: Dn({ id: Dn(Cn), name: Dn(_n), displayName: Dn(_n), icon: An(_n) }), challenge: Dn(Cn), pubKeyCredParams: Dn(_n), timeout: An(_n), excludeCredentials: An([Mn]), authenticatorSelection: An(_n), attestation: An(_n), extensions: An(_n) }), signal: An(_n) },
        Pn = { type: Dn(_n), id: Dn(_n), rawId: Dn(Cn), response: Dn({ clientDataJSON: Dn(Cn), attestationObject: Dn(Cn) }) },
        Hn = { mediation: An(_n), publicKey: Dn({ challenge: Dn(Cn), timeout: An(_n), rpId: An(_n), allowCredentials: An([Mn]), userVerification: An(_n), extensions: An(_n) }), signal: An(_n) },
        Rn = { type: Dn(_n), id: Dn(_n), rawId: Dn(Cn), response: Dn({ clientDataJSON: Dn(Cn), authenticatorData: Dn(Cn), signature: Dn(Cn), userHandle: Dn(Cn) }) };function Nn() { return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential); } function In() { return Nn() ? 'supported' : 'unsupported'; }let qn = !1;let $n,
        Bn = !1;function Xn(t) {
        const e = t.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);if (e) {
          if (e.length === 1) { const t = Vn(e[0]);if (!t) return;return Object.freeze({ start: t, end: t }); } if (e.length === 2) {
            const t = Vn(e[0]),
              n = Vn(e[1]);if (!t || !n) return;return Fn(Object.freeze({ start: t, end: n }));
          }
        } else;
      } function Vn(t) {
        const e = t.match(/L(\d+)/),
          n = t.match(/C(\d+)/);return e ? Object.freeze({ line: parseInt(e[1]), column: n ? parseInt(n[1]) : null }) : null;
      } function Un(t, e, n) {
        const o = [null, 0],
          i = n(t.line);if (!i) return o;if (t.column == null) return [i, -1];let r = t.column - 1;const a = (function t(e) { if (e.nodeType === Node.TEXT_NODE) return [e];if (!e.childNodes || !e.childNodes.length) return [];let n = [];for (const o of e.childNodes)n = n.concat(t(o));return n; }(i));for (let s = 0;s < a.length;s++) {
          const t = a[s],
            n = r - (t.textContent || '').length;if (n === 0) { const n = a[s + 1];return e && n ? [n, 0] : [t, r]; } if (n < 0) return [t, r];r = n;
        } return o;
      } function Fn(t) { const e = [t.start, t.end];return e.sort(Wn), e[0] === t.start && e[1] === t.end ? t : Object.freeze({ start: e[0], end: e[1] }); } function Wn(t, e) { return t.line === e.line && t.column === e.column ? 0 : t.line === e.line && typeof t.column === 'number' && typeof e.column === 'number' ? t.column - e.column : t.line - e.line; } function Yn(t) { if (t.querySelector('.js-task-list-field')) for (const e of n(t, 'task-lists', u))e.disabled = !1; } function Kn(t, e, o) {
        const i = c(t, '.js-comment-update', HTMLFormElement);!(function (t) { for (const e of n(t, 'task-lists', u))e.disabled = !0; }(t));const r = i.elements.namedItem('task_list_track');r instanceof Element && r.remove();const s = i.elements.namedItem('task_list_operation');s instanceof Element && s.remove();const l = document.createElement('input');l.setAttribute('type', 'hidden'), l.setAttribute('name', 'task_list_track'), l.setAttribute('value', e), i.appendChild(l);const f = document.createElement('input');if (f.setAttribute('type', 'hidden'), f.setAttribute('name', 'task_list_operation'), f.setAttribute('value', JSON.stringify(o)), i.appendChild(f), !i.elements.namedItem('task_list_key')) {
          const t = c(i, '.js-task-list-field'),
            e = a(t, 'name').split('[')[0],
            n = document.createElement('input');n.setAttribute('type', 'hidden'), n.setAttribute('name', 'task_list_key'), n.setAttribute('value', e), i.appendChild(n);
        }t.classList.remove('is-comment-stale'), Q(i);
      } function Gn() { return !!$n && ($n.remove(), $n = null, !0); }Ot('.js-sudo-form', (async (t, e) => { try { await e.text(); } catch (n) { if (!n.response) throw n;let e;switch (n.response.status) { case 401: e = 'Incorrect password.';break;case 429: e = 'Too many password attempts. Please wait and try again later.';break;default: e = 'Failed to receive a response. Please try again later.'; } return c(t, '.js-sudo-error').textContent = e, c(t, '.js-sudo-error').hidden = !1, void (c(t, '.js-sudo-password', HTMLInputElement).value = ''); }Bn = !0, l(t, 'details').removeAttribute('open'); })), i('.js-task-list-container .js-task-list-field', ((t) => { Yn(l(t, '.js-task-list-container')); })), o('task-lists-move', 'task-lists', ((t) => { const { src: e, dst: n } = t.detail;Kn(l(t.currentTarget, '.js-task-list-container'), 'reordered', { operation: 'move', src: e, dst: n }); })), o('task-lists-check', 'task-lists', ((t) => { const { position: e, checked: n } = t.detail;Kn(l(t.currentTarget, '.js-task-list-container'), `checked:${n ? 1 : 0}`, { operation: 'check', position: e, checked: n }); })), Ot('.js-task-list-container .js-comment-update', (async (t, e) => {
        const n = l(t, '.js-task-list-container'),
          o = t.elements.namedItem('task_list_track');o instanceof Element && o.remove();const i = t.elements.namedItem('task_list_operation');let r;i instanceof Element && i.remove();try { r = await e.json(); } catch (a) {
          let t;try { t = JSON.parse(a.response.text); } catch (xn) {} if (t && t.stale) {
            const e = t.updated_markdown,
              o = t.updated_html,
              i = t.version;if (e && o && i) {
              const t = c(n, '.js-comment-body'),
                r = c(n, '.js-body-version'),
                a = c(n, '.js-task-list-field', HTMLTextAreaElement);t.innerHTML = o, a.value = e, n.setAttribute('data-body-version', i), r instanceof HTMLInputElement && (r.value = i);
            }
          } else window.location.reload();
        }r && (i && r.json.source && (c(n, '.js-task-list-field', HTMLTextAreaElement).value = r.json.source), Yn(n));
      }));
    } };
}));
//# sourceMappingURL=frameworks-b8e5a034.js.map
