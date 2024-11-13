/*! For license information please see scripts.js.LICENSE.txt */
(() => {
  var e = {
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document",
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var a = [],
            o = Object.getPrototypeOf,
            s = a.slice,
            l = a.flat
              ? function (e) {
                  return a.flat.call(e);
                }
              : function (e) {
                  return a.concat.apply([], e);
                },
            c = a.push,
            d = a.indexOf,
            u = {},
            p = u.toString,
            f = u.hasOwnProperty,
            h = f.toString,
            v = h.call(Object),
            g = {},
            m = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            w = i.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var i,
              r,
              a = (n = n || w).createElement("script");
            if (((a.text = e), t))
              for (i in b)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  a.setAttribute(i, r);
            n.head.appendChild(a).parentNode.removeChild(a);
          }
          function C(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? u[p.call(e)] || "object"
              : typeof e;
          }
          var T = "3.6.0",
            k = function (e, t) {
              return new k.fn.init(e, t);
            };
          function E(e) {
            var t = !!e && "length" in e && e.length,
              n = C(e);
            return (
              !m(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (k.fn = k.prototype =
            {
              jquery: T,
              constructor: k,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = k.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return k.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  k.map(this, function (t, n) {
                    return e.call(t, n, t);
                  }),
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  k.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  }),
                );
              },
              odd: function () {
                return this.pushStack(
                  k.grep(this, function (e, t) {
                    return t % 2;
                  }),
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: a.sort,
              splice: a.splice,
            }),
            (k.extend = k.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  a,
                  o = arguments[0] || {},
                  s = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof o &&
                    ((c = o), (o = arguments[s] || {}), s++),
                    "object" == typeof o || m(o) || (o = {}),
                    s === l && ((o = this), s--);
                  s < l;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          o !== i &&
                          (c &&
                          i &&
                          (k.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = o[t]),
                              (a =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || k.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (o[t] = k.extend(c, a, i)))
                            : void 0 !== i && (o[t] = i));
                return o;
              }),
            k.extend({
              expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== p.call(e) ||
                  ((t = o(e)) &&
                    ("function" !=
                      typeof (n = f.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== v))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (E(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (E(Object(e))
                      ? k.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : d.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, a = e.length, o = !n; r < a; r++)
                  !t(e[r], r) !== o && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  a = 0,
                  o = [];
                if (E(e))
                  for (i = e.length; a < i; a++)
                    null != (r = t(e[a], a, n)) && o.push(r);
                else for (a in e) null != (r = t(e[a], a, n)) && o.push(r);
                return l(o);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (k.fn[Symbol.iterator] = a[Symbol.iterator]),
            k.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " ",
              ),
              function (e, t) {
                u["[object " + t + "]"] = t.toLowerCase();
              },
            );
          var S = (function (e) {
            var t,
              n,
              i,
              r,
              a,
              o,
              s,
              l,
              c,
              d,
              u,
              p,
              f,
              h,
              v,
              g,
              m,
              y,
              w,
              b = "sizzle" + 1 * new Date(),
              x = e.document,
              C = 0,
              T = 0,
              k = le(),
              E = le(),
              S = le(),
              A = le(),
              M = function (e, t) {
                return e === t && (u = !0), 0;
              },
              P = {}.hasOwnProperty,
              L = [],
              O = L.pop,
              D = L.push,
              j = L.push,
              z = L.slice,
              N = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              I =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              H = "[\\x20\\t\\r\\n\\f]",
              _ =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                H +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              B =
                "\\[" +
                H +
                "*(" +
                _ +
                ")(?:" +
                H +
                "*([*^$|!~]?=)" +
                H +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                _ +
                "))|)" +
                H +
                "*\\]",
              q =
                ":(" +
                _ +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                B +
                ")*)|.*)\\)|)",
              R = new RegExp(H + "+", "g"),
              $ = new RegExp(
                "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
                "g",
              ),
              W = new RegExp("^" + H + "*," + H + "*"),
              V = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
              F = new RegExp(H + "|>"),
              G = new RegExp(q),
              X = new RegExp("^" + _ + "$"),
              Y = {
                ID: new RegExp("^#(" + _ + ")"),
                CLASS: new RegExp("^\\.(" + _ + ")"),
                TAG: new RegExp("^(" + _ + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    H +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    H +
                    "*(?:([+-]|)" +
                    H +
                    "*(\\d+)|))" +
                    H +
                    "*\\)|)",
                  "i",
                ),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    H +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    H +
                    "*((?:-\\d)?\\d*)" +
                    H +
                    "*\\)|)(?=[^-]|$)",
                  "i",
                ),
              },
              U = /HTML$/i,
              K = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              Z = /^[^{]+\{\s*\[native \w/,
              Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])",
                "g",
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320,
                      ))
                );
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              ae = function () {
                p();
              },
              oe = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" },
              );
            try {
              j.apply((L = z.call(x.childNodes)), x.childNodes),
                L[x.childNodes.length].nodeType;
            } catch (e) {
              j = {
                apply: L.length
                  ? function (e, t) {
                      D.apply(e, z.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, i, r) {
              var a,
                s,
                c,
                d,
                u,
                h,
                m,
                y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return i;
              if (!r && (p(t), (t = t || f), v)) {
                if (11 !== x && (u = Q.exec(e)))
                  if ((a = u[1])) {
                    if (9 === x) {
                      if (!(c = t.getElementById(a))) return i;
                      if (c.id === a) return i.push(c), i;
                    } else if (
                      y &&
                      (c = y.getElementById(a)) &&
                      w(t, c) &&
                      c.id === a
                    )
                      return i.push(c), i;
                  } else {
                    if (u[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (a = u[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return j.apply(i, t.getElementsByClassName(a)), i;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!g || !g.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((m = e), (y = t), 1 === x && (F.test(e) || V.test(e)))) {
                    for (
                      ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((d = t.getAttribute("id"))
                          ? (d = d.replace(ie, re))
                          : t.setAttribute("id", (d = b))),
                        s = (h = o(e)).length;
                      s--;

                    )
                      h[s] = (d ? "#" + d : ":scope") + " " + we(h[s]);
                    m = h.join(",");
                  }
                  try {
                    return j.apply(i, y.querySelectorAll(m)), i;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    d === b && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace($, "$1"), t, i, r);
            }
            function le() {
              var e = [];
              return function t(n, r) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = r)
                );
              };
            }
            function ce(e) {
              return (e[b] = !0), e;
            }
            function de(e) {
              var t = f.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ue(e, t) {
              for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ve(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && oe(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ge(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, i) {
                    for (var r, a = e([], n.length, t), o = a.length; o--; )
                      n[(r = a[o])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function me(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (a = se.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !U.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = se.setDocument =
              function (e) {
                var t,
                  r,
                  o = e ? e.ownerDocument || e : x;
                return o != f && 9 === o.nodeType && o.documentElement
                  ? ((h = (f = o).documentElement),
                    (v = !a(f)),
                    x != f &&
                      (r = f.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener("unload", ae, !1)
                        : r.attachEvent && r.attachEvent("onunload", ae)),
                    (n.scope = de(function (e) {
                      return (
                        h.appendChild(e).appendChild(f.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = de(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = de(function (e) {
                      return (
                        e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = Z.test(
                      f.getElementsByClassName,
                    )),
                    (n.getById = de(function (e) {
                      return (
                        (h.appendChild(e).id = b),
                        !f.getElementsByName || !f.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n,
                              i,
                              r,
                              a = t.getElementById(e);
                            if (a) {
                              if (
                                (n = a.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [a];
                              for (
                                r = t.getElementsByName(e), i = 0;
                                (a = r[i++]);

                              )
                                if (
                                  (n = a.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [a];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            r = 0,
                            a = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = a[r++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return a;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                          return t.getElementsByClassName(e);
                      }),
                    (m = []),
                    (g = []),
                    (n.qsa = Z.test(f.querySelectorAll)) &&
                      (de(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=" + H + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push("\\[" + H + "*(?:value|" + I + ")"),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            g.push("~="),
                          (t = f.createElement("input")).setAttribute(
                            "name",
                            "",
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[" +
                                H +
                                "*name" +
                                H +
                                "*=" +
                                H +
                                "*(?:''|\"\")",
                            ),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            g.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          g.push("[\\r\\n\\f]");
                      }),
                      de(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name" + H + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
                      })),
                    (n.matchesSelector = Z.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector),
                    )) &&
                      de(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          m.push("!=", q);
                      }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (m = m.length && new RegExp(m.join("|"))),
                    (t = Z.test(h.compareDocumentPosition)),
                    (w =
                      t || Z.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (M = t
                      ? function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var i =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                              ? e == f || (e.ownerDocument == x && w(x, e))
                                ? -1
                                : t == f || (t.ownerDocument == x && w(x, t))
                                ? 1
                                : d
                                ? N(d, e) - N(d, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var n,
                            i = 0,
                            r = e.parentNode,
                            a = t.parentNode,
                            o = [e],
                            s = [t];
                          if (!r || !a)
                            return e == f
                              ? -1
                              : t == f
                              ? 1
                              : r
                              ? -1
                              : a
                              ? 1
                              : d
                              ? N(d, e) - N(d, t)
                              : 0;
                          if (r === a) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) o.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; o[i] === s[i]; ) i++;
                          return i
                            ? pe(o[i], s[i])
                            : o[i] == x
                            ? -1
                            : s[i] == x
                            ? 1
                            : 0;
                        }),
                    f)
                  : f;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  v &&
                  !A[t + " "] &&
                  (!m || !m.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  A(t, !0);
                }
              return se(t, f, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != f && p(e), w(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != f && p(e);
              var r = i.attrHandle[t.toLowerCase()],
                a =
                  r && P.call(i.attrHandle, t.toLowerCase())
                    ? r(e, t, !v)
                    : void 0;
              return void 0 !== a
                ? a
                : n.attributes || !v
                ? e.getAttribute(t)
                : (a = e.getAttributeNode(t)) && a.specified
                ? a.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(ie, re);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                i = [],
                r = 0,
                a = 0;
              if (
                ((u = !n.detectDuplicates),
                (d = !n.sortStable && e.slice(0)),
                e.sort(M),
                u)
              ) {
                for (; (t = e[a++]); ) t === e[a] && (r = i.push(a));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (d = null), e;
            }),
            (r = se.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  a = e.nodeType;
                if (a) {
                  if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === a || 4 === a) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            (i = se.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            G.test(n) &&
                            (t = o(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = k[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + H + ")" + e + "(" + H + "|$)",
                      )) &&
                        k(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              "",
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = se.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                              ? r !== n
                              : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                              ? n && r.indexOf(n) > -1
                              : "$=" === t
                              ? n && r.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (r === n ||
                                  r.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var a = "nth" !== e.slice(0, 3),
                      o = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            d,
                            u,
                            p,
                            f,
                            h,
                            v = a !== o ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            w = !1;
                          if (g) {
                            if (a) {
                              for (; v; ) {
                                for (p = t; (p = p[v]); )
                                  if (
                                    s
                                      ? p.nodeName.toLowerCase() === m
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = v = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [o ? g.firstChild : g.lastChild]), o && y)
                            ) {
                              for (
                                w =
                                  (f =
                                    (c =
                                      (d =
                                        (u = (p = g)[b] || (p[b] = {}))[
                                          p.uniqueID
                                        ] || (u[p.uniqueID] = {}))[e] ||
                                      [])[0] === C && c[1]) && c[2],
                                  p = f && g.childNodes[f];
                                (p =
                                  (++f && p && p[v]) || (w = f = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++w && p === t) {
                                  d[e] = [C, f, w];
                                  break;
                                }
                            } else if (
                              (y &&
                                (w = f =
                                  (c =
                                    (d =
                                      (u = (p = t)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (u[p.uniqueID] = {}))[e] ||
                                    [])[0] === C && c[1]),
                              !1 === w)
                            )
                              for (
                                ;
                                (p =
                                  (++f && p && p[v]) ||
                                  (w = f = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? p.nodeName.toLowerCase() !== m
                                  : 1 !== p.nodeType) ||
                                  !++w ||
                                  (y &&
                                    ((d =
                                      (u = p[b] || (p[b] = {}))[p.uniqueID] ||
                                      (u[p.uniqueID] = {}))[e] = [C, w]),
                                  p !== t));

                              );
                            return (w -= r) === i || (w % i == 0 && w / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      r =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return r[b]
                      ? r(t)
                      : r.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var i, a = r(e, t), o = a.length; o--; )
                                e[(i = N(e, a[o]))] = !(n[i] = a[o]);
                            })
                          : function (e) {
                              return r(e, 0, n);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      i = s(e.replace($, "$1"));
                    return i[b]
                      ? ce(function (e, t, n, r) {
                          for (
                            var a, o = i(e, null, r, []), s = e.length;
                            s--;

                          )
                            (a = o[s]) && (e[s] = !(t[s] = a));
                        })
                      : function (e, r, a) {
                          return (
                            (t[0] = e),
                            i(t, null, a, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || r(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      X.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = v
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === f.activeElement &&
                      (!f.hasFocus || f.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ve(!1),
                  disabled: ve(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return K.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (i.pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = fe(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
            function ye() {}
            function we(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function be(e, t, n) {
              var i = t.dir,
                r = t.next,
                a = r || i,
                o = n && "parentNode" === a,
                s = T++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || o) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      d,
                      u,
                      p = [C, s];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || o)
                          if (
                            ((d =
                              (u = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (u[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((c = d[a]) && c[0] === C && c[1] === s)
                              return (p[2] = c[2]);
                            if (((d[a] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Ce(e, t, n, i, r) {
              for (
                var a, o = [], s = 0, l = e.length, c = null != t;
                s < l;
                s++
              )
                (a = e[s]) &&
                  ((n && !n(a, i, r)) || (o.push(a), c && t.push(s)));
              return o;
            }
            function Te(e, t, n, i, r, a) {
              return (
                i && !i[b] && (i = Te(i)),
                r && !r[b] && (r = Te(r, a)),
                ce(function (a, o, s, l) {
                  var c,
                    d,
                    u,
                    p = [],
                    f = [],
                    h = o.length,
                    v =
                      a ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                          se(e, t[i], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || (!a && t) ? v : Ce(v, p, e, s, l),
                    m = n ? (r || (a ? e : h || i) ? [] : o) : g;
                  if ((n && n(g, m, s, l), i))
                    for (c = Ce(m, f), i(c, [], s, l), d = c.length; d--; )
                      (u = c[d]) && (m[f[d]] = !(g[f[d]] = u));
                  if (a) {
                    if (r || e) {
                      if (r) {
                        for (c = [], d = m.length; d--; )
                          (u = m[d]) && c.push((g[d] = u));
                        r(null, (m = []), c, l);
                      }
                      for (d = m.length; d--; )
                        (u = m[d]) &&
                          (c = r ? N(a, u) : p[d]) > -1 &&
                          (a[c] = !(o[c] = u));
                    }
                  } else (m = Ce(m === o ? m.splice(h, m.length) : m)), r ? r(null, o, m, l) : j.apply(o, m);
                })
              );
            }
            function ke(e) {
              for (
                var t,
                  n,
                  r,
                  a = e.length,
                  o = i.relative[e[0].type],
                  s = o || i.relative[" "],
                  l = o ? 1 : 0,
                  d = be(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0,
                  ),
                  u = be(
                    function (e) {
                      return N(t, e) > -1;
                    },
                    s,
                    !0,
                  ),
                  p = [
                    function (e, n, i) {
                      var r =
                        (!o && (i || n !== c)) ||
                        ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                      return (t = null), r;
                    },
                  ];
                l < a;
                l++
              )
                if ((n = i.relative[e[l].type])) p = [be(xe(p), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                    for (r = ++l; r < a && !i.relative[e[r].type]; r++);
                    return Te(
                      l > 1 && xe(p),
                      l > 1 &&
                        we(
                          e
                            .slice(0, l - 1)
                            .concat({
                              value: " " === e[l - 2].type ? "*" : "",
                            }),
                        ).replace($, "$1"),
                      n,
                      l < r && ke(e.slice(l, r)),
                      r < a && ke((e = e.slice(r))),
                      r < a && we(e),
                    );
                  }
                  p.push(n);
                }
              return xe(p);
            }
            return (
              (ye.prototype = i.filters = i.pseudos),
              (i.setFilters = new ye()),
              (o = se.tokenize =
                function (e, t) {
                  var n,
                    r,
                    a,
                    o,
                    s,
                    l,
                    c,
                    d = E[e + " "];
                  if (d) return t ? 0 : d.slice(0);
                  for (s = e, l = [], c = i.preFilter; s; ) {
                    for (o in ((n && !(r = W.exec(s))) ||
                      (r && (s = s.slice(r[0].length) || s), l.push((a = []))),
                    (n = !1),
                    (r = V.exec(s)) &&
                      ((n = r.shift()),
                      a.push({ value: n, type: r[0].replace($, " ") }),
                      (s = s.slice(n.length))),
                    i.filter))
                      !(r = Y[o].exec(s)) ||
                        (c[o] && !(r = c[o](r))) ||
                        ((n = r.shift()),
                        a.push({ value: n, type: o, matches: r }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : E(e, l).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    r = [],
                    a = [],
                    s = S[e + " "];
                  if (!s) {
                    for (t || (t = o(e)), n = t.length; n--; )
                      (s = ke(t[n]))[b] ? r.push(s) : a.push(s);
                    (s = S(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          r = e.length > 0,
                          a = function (a, o, s, l, d) {
                            var u,
                              h,
                              g,
                              m = 0,
                              y = "0",
                              w = a && [],
                              b = [],
                              x = c,
                              T = a || (r && i.find.TAG("*", d)),
                              k = (C += null == x ? 1 : Math.random() || 0.1),
                              E = T.length;
                            for (
                              d && (c = o == f || o || d);
                              y !== E && null != (u = T[y]);
                              y++
                            ) {
                              if (r && u) {
                                for (
                                  h = 0,
                                    o ||
                                      u.ownerDocument == f ||
                                      (p(u), (s = !v));
                                  (g = e[h++]);

                                )
                                  if (g(u, o || f, s)) {
                                    l.push(u);
                                    break;
                                  }
                                d && (C = k);
                              }
                              n && ((u = !g && u) && m--, a && w.push(u));
                            }
                            if (((m += y), n && y !== m)) {
                              for (h = 0; (g = t[h++]); ) g(w, b, o, s);
                              if (a) {
                                if (m > 0)
                                  for (; y--; )
                                    w[y] || b[y] || (b[y] = O.call(l));
                                b = Ce(b);
                              }
                              j.apply(l, b),
                                d &&
                                  !a &&
                                  b.length > 0 &&
                                  m + t.length > 1 &&
                                  se.uniqueSort(l);
                            }
                            return d && ((C = k), (c = x)), w;
                          };
                        return n ? ce(a) : a;
                      })(a, r),
                    )),
                      (s.selector = e);
                  }
                  return s;
                }),
              (l = se.select =
                function (e, t, n, r) {
                  var a,
                    l,
                    c,
                    d,
                    u,
                    p = "function" == typeof e && e,
                    f = !r && o((e = p.selector || e));
                  if (((n = n || []), 1 === f.length)) {
                    if (
                      (l = f[0] = f[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      v &&
                      i.relative[l[1].type]
                    ) {
                      if (
                        !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      a = Y.needsContext.test(e) ? 0 : l.length;
                      a-- && ((c = l[a]), !i.relative[(d = c.type)]);

                    )
                      if (
                        (u = i.find[d]) &&
                        (r = u(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && me(t.parentNode)) || t,
                        ))
                      ) {
                        if ((l.splice(a, 1), !(e = r.length && we(l))))
                          return j.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (p || s(e, f))(
                      r,
                      t,
                      !v,
                      n,
                      !t || (ee.test(e) && me(t.parentNode)) || t,
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(M).join("") === b),
              (n.detectDuplicates = !!u),
              p(),
              (n.sortDetached = de(function (e) {
                return (
                  1 & e.compareDocumentPosition(f.createElement("fieldset"))
                );
              })),
              de(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                ue("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2,
                    );
                }),
              (n.attributes &&
                de(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                ue("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              de(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                ue(I, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              se
            );
          })(i);
          (k.find = S),
            (k.expr = S.selectors),
            (k.expr[":"] = k.expr.pseudos),
            (k.uniqueSort = k.unique = S.uniqueSort),
            (k.text = S.getText),
            (k.isXMLDoc = S.isXML),
            (k.contains = S.contains),
            (k.escapeSelector = S.escape);
          var A = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && k(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            M = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            P = k.expr.match.needsContext;
          function L(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var O =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function D(e, t, n) {
            return m(t)
              ? k.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? k.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? k.grep(e, function (e) {
                  return d.call(t, e) > -1 !== n;
                })
              : k.filter(t, e, n);
          }
          (k.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? k.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : k.find.matches(
                    e,
                    k.grep(t, function (e) {
                      return 1 === e.nodeType;
                    }),
                  )
            );
          }),
            k.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    k(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (k.contains(r[t], this)) return !0;
                    }),
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  k.find(e, r[t], n);
                return i > 1 ? k.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(D(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(D(this, e || [], !0));
              },
              is: function (e) {
                return !!D(
                  this,
                  "string" == typeof e && P.test(e) ? k(e) : e || [],
                  !1,
                ).length;
              },
            });
          var j,
            z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((k.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || j), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : z.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof k ? t[0] : t),
                  k.merge(
                    this,
                    k.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : w,
                      !0,
                    ),
                  ),
                  O.test(i[1]) && k.isPlainObject(t))
                )
                  for (i in t) m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = w.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : m(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(k)
              : k.makeArray(e, this);
          }).prototype = k.fn),
            (j = k(w));
          var N = /^(?:parents|prev(?:Until|All))/,
            I = { children: !0, contents: !0, next: !0, prev: !0 };
          function H(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          k.fn.extend({
            has: function (e) {
              var t = k(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (k.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                a = [],
                o = "string" != typeof e && k(e);
              if (!P.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (o
                        ? o.index(n) > -1
                        : 1 === n.nodeType && k.find.matchesSelector(n, e))
                    ) {
                      a.push(n);
                      break;
                    }
              return this.pushStack(a.length > 1 ? k.uniqueSort(a) : a);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? d.call(k(e), this[0])
                  : d.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e),
              );
            },
          }),
            k.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return A(e, "parentNode", n);
                },
                next: function (e) {
                  return H(e, "nextSibling");
                },
                prev: function (e) {
                  return H(e, "previousSibling");
                },
                nextAll: function (e) {
                  return A(e, "nextSibling");
                },
                prevAll: function (e) {
                  return A(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return A(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return M((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return M(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && o(e.contentDocument)
                    ? e.contentDocument
                    : (L(e, "template") && (e = e.content || e),
                      k.merge([], e.childNodes));
                },
              },
              function (e, t) {
                k.fn[e] = function (n, i) {
                  var r = k.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = k.filter(i, r)),
                    this.length > 1 &&
                      (I[e] || k.uniqueSort(r), N.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              },
            );
          var _ = /[^\x20\t\r\n\f]+/g;
          function B(e) {
            return e;
          }
          function q(e) {
            throw e;
          }
          function R(e, t, n, i) {
            var r;
            try {
              e && m((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && m((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (k.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      k.each(e.match(_) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : k.extend({}, e);
            var t,
              n,
              i,
              r,
              a = [],
              o = [],
              s = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; o.length; s = -1)
                  for (n = o.shift(); ++s < a.length; )
                    !1 === a[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = a.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (a = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    a &&
                      (n && !t && ((s = a.length - 1), o.push(n)),
                      (function t(n) {
                        k.each(n, function (n, i) {
                          m(i)
                            ? (e.unique && c.has(i)) || a.push(i)
                            : i && i.length && "string" !== C(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    k.each(arguments, function (e, t) {
                      for (var n; (n = k.inArray(t, a, n)) > -1; )
                        a.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? k.inArray(e, a) > -1 : a.length > 0;
                },
                empty: function () {
                  return a && (a = []), this;
                },
                disable: function () {
                  return (r = o = []), (a = n = ""), this;
                },
                disabled: function () {
                  return !a;
                },
                lock: function () {
                  return (r = o = []), n || t || (a = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      o.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return c;
          }),
            k.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      k.Callbacks("memory"),
                      k.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      k.Callbacks("once memory"),
                      k.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      k.Callbacks("once memory"),
                      k.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return a.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return k
                        .Deferred(function (n) {
                          k.each(t, function (t, i) {
                            var r = m(e[i[4]]) && e[i[4]];
                            a[i[1]](function () {
                              var e = r && r.apply(this, arguments);
                              e && m(e.promise)
                                ? e
                                    .promise()
                                    .progress(n.notify)
                                    .done(n.resolve)
                                    .fail(n.reject)
                                : n[i[0] + "With"](this, r ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        })
                        .promise();
                    },
                    then: function (e, n, r) {
                      var a = 0;
                      function o(e, t, n, r) {
                        return function () {
                          var s = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < a)) {
                                if ((i = n.apply(s, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution",
                                  );
                                (c =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  m(c)
                                    ? r
                                      ? c.call(i, o(a, t, B, r), o(a, t, q, r))
                                      : (a++,
                                        c.call(
                                          i,
                                          o(a, t, B, r),
                                          o(a, t, q, r),
                                          o(a, t, B, t.notifyWith),
                                        ))
                                    : (n !== B && ((s = void 0), (l = [i])),
                                      (r || t.resolveWith)(s, l));
                              }
                            },
                            d = r
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (i) {
                                    k.Deferred.exceptionHook &&
                                      k.Deferred.exceptionHook(i, d.stackTrace),
                                      e + 1 >= a &&
                                        (n !== q && ((s = void 0), (l = [i])),
                                        t.rejectWith(s, l));
                                  }
                                };
                          e
                            ? d()
                            : (k.Deferred.getStackHook &&
                                (d.stackTrace = k.Deferred.getStackHook()),
                              i.setTimeout(d));
                        };
                      }
                      return k
                        .Deferred(function (i) {
                          t[0][3].add(o(0, i, m(r) ? r : B, i.notifyWith)),
                            t[1][3].add(o(0, i, m(e) ? e : B)),
                            t[2][3].add(o(0, i, m(n) ? n : q));
                        })
                        .promise();
                    },
                    promise: function (e) {
                      return null != e ? k.extend(e, r) : r;
                    },
                  },
                  a = {};
                return (
                  k.each(t, function (e, i) {
                    var o = i[2],
                      s = i[5];
                    (r[i[1]] = o.add),
                      s &&
                        o.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock,
                        ),
                      o.add(i[3].fire),
                      (a[i[0]] = function () {
                        return (
                          a[i[0] + "With"](
                            this === a ? void 0 : this,
                            arguments,
                          ),
                          this
                        );
                      }),
                      (a[i[0] + "With"] = o.fireWith);
                  }),
                  r.promise(a),
                  e && e.call(a, a),
                  a
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = s.call(arguments),
                  a = k.Deferred(),
                  o = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || a.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (R(e, a.done(o(n)).resolve, a.reject, !t),
                  "pending" === a.state() || m(r[n] && r[n].then))
                )
                  return a.then();
                for (; n--; ) R(r[n], o(n), a.reject);
                return a.promise();
              },
            });
          var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (k.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              $.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t,
              );
          }),
            (k.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var W = k.Deferred();
          function V() {
            w.removeEventListener("DOMContentLoaded", V),
              i.removeEventListener("load", V),
              k.ready();
          }
          (k.fn.ready = function (e) {
            return (
              W.then(e).catch(function (e) {
                k.readyException(e);
              }),
              this
            );
          }),
            k.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --k.readyWait : k.isReady) ||
                  ((k.isReady = !0),
                  (!0 !== e && --k.readyWait > 0) || W.resolveWith(w, [k]));
              },
            }),
            (k.ready.then = W.then),
            "complete" === w.readyState ||
            ("loading" !== w.readyState && !w.documentElement.doScroll)
              ? i.setTimeout(k.ready)
              : (w.addEventListener("DOMContentLoaded", V),
                i.addEventListener("load", V));
          var F = function (e, t, n, i, r, a, o) {
              var s = 0,
                l = e.length,
                c = null == n;
              if ("object" === C(n))
                for (s in ((r = !0), n)) F(e, t, s, n[s], !0, a, o);
              else if (
                void 0 !== i &&
                ((r = !0),
                m(i) || (o = !0),
                c &&
                  (o
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(k(e), n);
                      }))),
                t)
              )
                for (; s < l; s++)
                  t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : a;
            },
            G = /^-ms-/,
            X = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function U(e) {
            return e.replace(G, "ms-").replace(X, Y);
          }
          var K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = k.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    K(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[U(t)] = n;
                else for (i in t) r[U(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][U(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(U)
                      : (t = U(t)) in i
                      ? [t]
                      : t.match(_) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || k.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !k.isEmptyObject(t);
              },
            });
          var Z = new J(),
            Q = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Q.set(e, t, n);
              } else n = void 0;
            return n;
          }
          k.extend({
            hasData: function (e) {
              return Q.hasData(e) || Z.hasData(e);
            },
            data: function (e, t, n) {
              return Q.access(e, t, n);
            },
            removeData: function (e, t) {
              Q.remove(e, t);
            },
            _data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            _removeData: function (e, t) {
              Z.remove(e, t);
            },
          }),
            k.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  a = this[0],
                  o = a && a.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = Q.get(a)),
                    1 === a.nodeType && !Z.get(a, "hasDataAttrs"))
                  ) {
                    for (n = o.length; n--; )
                      o[n] &&
                        0 === (i = o[n].name).indexOf("data-") &&
                        ((i = U(i.slice(5))), ne(a, i, r[i]));
                    Z.set(a, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Q.set(this, e);
                    })
                  : F(
                      this,
                      function (t) {
                        var n;
                        if (a && void 0 === t)
                          return void 0 !== (n = Q.get(a, e)) ||
                            void 0 !== (n = ne(a, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Q.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0,
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Q.remove(this, e);
                });
              },
            }),
            k.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = Z.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = Z.access(e, t, k.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = k.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  a = k._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete a.stop,
                    r.call(
                      e,
                      function () {
                        k.dequeue(e, t);
                      },
                      a,
                    )),
                  !i && a && a.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Z.get(e, n) ||
                  Z.access(e, n, {
                    empty: k.Callbacks("once memory").add(function () {
                      Z.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            k.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? k.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = k.queue(this, e, t);
                        k._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            k.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  k.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = k.Deferred(),
                  a = this,
                  o = this.length,
                  s = function () {
                    --i || r.resolveWith(a, [a]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  o--;

                )
                  (n = Z.get(a[o], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(s));
                return s(), r.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            ae = ["Top", "Right", "Bottom", "Left"],
            oe = w.documentElement,
            se = function (e) {
              return k.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          oe.getRootNode &&
            (se = function (e) {
              return (
                k.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === k.css(e, "display"))
            );
          };
          function de(e, t, n, i) {
            var r,
              a,
              o = 20,
              s = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return k.css(e, t, "");
                  },
              l = s(),
              c = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
              d =
                e.nodeType &&
                (k.cssNumber[t] || ("px" !== c && +l)) &&
                re.exec(k.css(e, t));
            if (d && d[3] !== c) {
              for (l /= 2, c = c || d[3], d = +l || 1; o--; )
                k.style(e, t, d + c),
                  (1 - a) * (1 - (a = s() / l || 0.5)) <= 0 && (o = 0),
                  (d /= a);
              (d *= 2), k.style(e, t, d + c), (n = n || []);
            }
            return (
              n &&
                ((d = +d || +l || 0),
                (r = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = d), (i.end = r))),
              r
            );
          }
          var ue = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = ue[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = k.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (ue[i] = r),
              r)
            );
          }
          function fe(e, t) {
            for (var n, i, r = [], a = 0, o = e.length; a < o; a++)
              (i = e[a]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[a] = Z.get(i, "display") || null),
                      r[a] || (i.style.display = "")),
                    "" === i.style.display && ce(i) && (r[a] = pe(i)))
                  : "none" !== n && ((r[a] = "none"), Z.set(i, "display", n)));
            for (a = 0; a < o; a++) null != r[a] && (e[a].style.display = r[a]);
            return e;
          }
          k.fn.extend({
            show: function () {
              return fe(this, !0);
            },
            hide: function () {
              return fe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? k(this).show() : k(this).hide();
                  });
            },
          });
          var he,
            ve,
            ge = /^(?:checkbox|radio)$/i,
            me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = w.createDocumentFragment().appendChild(w.createElement("div"))),
            (ve = w.createElement("input")).setAttribute("type", "radio"),
            ve.setAttribute("checked", "checked"),
            ve.setAttribute("name", "t"),
            he.appendChild(ve),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (g.option = !!he.lastChild);
          var we = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function be(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && L(e, t)) ? k.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
          }
          (we.tbody = we.tfoot = we.colgroup = we.caption = we.thead),
            (we.th = we.td),
            g.option ||
              (we.optgroup = we.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Ce = /<|&#?\w+;/;
          function Te(e, t, n, i, r) {
            for (
              var a,
                o,
                s,
                l,
                c,
                d,
                u = t.createDocumentFragment(),
                p = [],
                f = 0,
                h = e.length;
              f < h;
              f++
            )
              if ((a = e[f]) || 0 === a)
                if ("object" === C(a)) k.merge(p, a.nodeType ? [a] : a);
                else if (Ce.test(a)) {
                  for (
                    o = o || u.appendChild(t.createElement("div")),
                      s = (me.exec(a) || ["", ""])[1].toLowerCase(),
                      l = we[s] || we._default,
                      o.innerHTML = l[1] + k.htmlPrefilter(a) + l[2],
                      d = l[0];
                    d--;

                  )
                    o = o.lastChild;
                  k.merge(p, o.childNodes),
                    ((o = u.firstChild).textContent = "");
                } else p.push(t.createTextNode(a));
            for (u.textContent = "", f = 0; (a = p[f++]); )
              if (i && k.inArray(a, i) > -1) r && r.push(a);
              else if (
                ((c = se(a)),
                (o = be(u.appendChild(a), "script")),
                c && xe(o),
                n)
              )
                for (d = 0; (a = o[d++]); ) ye.test(a.type || "") && n.push(a);
            return u;
          }
          var ke = /^([^.]*)(?:\.(.+)|)/;
          function Ee() {
            return !0;
          }
          function Se() {
            return !1;
          }
          function Ae(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return w.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Me(e, t, n, i, r, a) {
            var o, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Me(e, s, n, i, t[s], a);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = Se;
            else if (!r) return e;
            return (
              1 === a &&
                ((o = r),
                (r = function (e) {
                  return k().off(e), o.apply(this, arguments);
                }),
                (r.guid = o.guid || (o.guid = k.guid++))),
              e.each(function () {
                k.event.add(this, t, r, i, n);
              })
            );
          }
          function Pe(e, t, n) {
            n
              ? (Z.set(e, t, !1),
                k.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      r,
                      a = Z.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (a.length)
                        (k.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((a = s.call(arguments)),
                        Z.set(this, t, a),
                        (i = n(this, t)),
                        this[t](),
                        a !== (r = Z.get(this, t)) || i
                          ? Z.set(this, t, !1)
                          : (r = {}),
                        a !== r)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          r && r.value
                        );
                    } else
                      a.length &&
                        (Z.set(this, t, {
                          value: k.event.trigger(
                            k.extend(a[0], k.Event.prototype),
                            a.slice(1),
                            this,
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Z.get(e, t) && k.event.add(e, t, Ee);
          }
          (k.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var a,
                o,
                s,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                v,
                g = Z.get(e);
              if (K(e))
                for (
                  n.handler && ((n = (a = n).handler), (r = a.selector)),
                    r && k.find.matchesSelector(oe, r),
                    n.guid || (n.guid = k.guid++),
                    (l = g.events) || (l = g.events = Object.create(null)),
                    (o = g.handle) ||
                      (o = g.handle =
                        function (t) {
                          return void 0 !== k && k.event.triggered !== t.type
                            ? k.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(_) || [""]).length;
                  c--;

                )
                  (f = v = (s = ke.exec(t[c]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    f &&
                      ((u = k.event.special[f] || {}),
                      (f = (r ? u.delegateType : u.bindType) || f),
                      (u = k.event.special[f] || {}),
                      (d = k.extend(
                        {
                          type: f,
                          origType: v,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && k.expr.match.needsContext.test(r),
                          namespace: h.join("."),
                        },
                        a,
                      )),
                      (p = l[f]) ||
                        (((p = l[f] = []).delegateCount = 0),
                        (u.setup && !1 !== u.setup.call(e, i, h, o)) ||
                          (e.addEventListener && e.addEventListener(f, o))),
                      u.add &&
                        (u.add.call(e, d),
                        d.handler.guid || (d.handler.guid = n.guid)),
                      r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                      (k.event.global[f] = !0));
            },
            remove: function (e, t, n, i, r) {
              var a,
                o,
                s,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                v,
                g = Z.hasData(e) && Z.get(e);
              if (g && (l = g.events)) {
                for (c = (t = (t || "").match(_) || [""]).length; c--; )
                  if (
                    ((f = v = (s = ke.exec(t[c]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      u = k.event.special[f] || {},
                        p =
                          l[(f = (i ? u.delegateType : u.bindType) || f)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)",
                          ),
                        o = a = p.length;
                      a--;

                    )
                      (d = p[a]),
                        (!r && v !== d.origType) ||
                          (n && n.guid !== d.guid) ||
                          (s && !s.test(d.namespace)) ||
                          (i &&
                            i !== d.selector &&
                            ("**" !== i || !d.selector)) ||
                          (p.splice(a, 1),
                          d.selector && p.delegateCount--,
                          u.remove && u.remove.call(e, d));
                    o &&
                      !p.length &&
                      ((u.teardown && !1 !== u.teardown.call(e, h, g.handle)) ||
                        k.removeEvent(e, f, g.handle),
                      delete l[f]);
                  } else for (f in l) k.event.remove(e, f + t[c], n, i, !0);
                k.isEmptyObject(l) && Z.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                a,
                o,
                s = new Array(arguments.length),
                l = k.event.fix(e),
                c =
                  (Z.get(this, "events") || Object.create(null))[l.type] || [],
                d = k.event.special[l.type] || {};
              for (s[0] = l, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !d.preDispatch || !1 !== d.preDispatch.call(this, l))
              ) {
                for (
                  o = k.event.handlers.call(this, l, c), t = 0;
                  (r = o[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (a = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== a.namespace &&
                      !l.rnamespace.test(a.namespace)) ||
                      ((l.handleObj = a),
                      (l.data = a.data),
                      void 0 !==
                        (i = (
                          (k.event.special[a.origType] || {}).handle ||
                          a.handler
                        ).apply(r.elem, s)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                a,
                o,
                s = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (a = [], o = {}, n = 0; n < l; n++)
                      void 0 === o[(r = (i = t[n]).selector + " ")] &&
                        (o[r] = i.needsContext
                          ? k(r, this).index(c) > -1
                          : k.find(r, this, null, [c]).length),
                        o[r] && a.push(i);
                    a.length && s.push({ elem: c, handlers: a });
                  }
              return (
                (c = this),
                l < t.length && s.push({ elem: c, handlers: t.slice(l) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(k.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[k.expando] ? e : new k.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      L(t, "input") &&
                      Pe(t, "click", Ee),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      L(t, "input") &&
                      Pe(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      L(t, "input") &&
                      Z.get(t, "click")) ||
                    L(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (k.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (k.Event = function (e, t) {
              if (!(this instanceof k.Event)) return new k.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ee
                      : Se),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && k.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[k.expando] = !0);
            }),
            (k.Event.prototype = {
              constructor: k.Event,
              isDefaultPrevented: Se,
              isPropagationStopped: Se,
              isImmediatePropagationStopped: Se,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            k.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              k.event.addProp,
            ),
            k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              k.event.special[e] = {
                setup: function () {
                  return Pe(this, e, Ae), !1;
                },
                trigger: function () {
                  return Pe(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            k.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                k.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (i && (i === this || k.contains(this, i))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              },
            ),
            k.fn.extend({
              on: function (e, t, n, i) {
                return Me(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Me(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    k(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler,
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Se),
                  this.each(function () {
                    k.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Le = /<script|<style|<link/i,
            Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function je(e, t) {
            return (
              (L(e, "table") &&
                L(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                k(e).children("tbody")[0]) ||
              e
            );
          }
          function ze(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Ne(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Ie(e, t) {
            var n, i, r, a, o, s;
            if (1 === t.nodeType) {
              if (Z.hasData(e) && (s = Z.get(e).events))
                for (r in (Z.remove(t, "handle events"), s))
                  for (n = 0, i = s[r].length; n < i; n++)
                    k.event.add(t, r, s[r][n]);
              Q.hasData(e) &&
                ((a = Q.access(e)), (o = k.extend({}, a)), Q.set(t, o));
            }
          }
          function He(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function _e(e, t, n, i) {
            t = l(t);
            var r,
              a,
              o,
              s,
              c,
              d,
              u = 0,
              p = e.length,
              f = p - 1,
              h = t[0],
              v = m(h);
            if (
              v ||
              (p > 1 && "string" == typeof h && !g.checkClone && Oe.test(h))
            )
              return e.each(function (r) {
                var a = e.eq(r);
                v && (t[0] = h.call(this, r, a.html())), _e(a, t, n, i);
              });
            if (
              p &&
              ((a = (r = Te(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = a),
              a || i)
            ) {
              for (s = (o = k.map(be(r, "script"), ze)).length; u < p; u++)
                (c = r),
                  u !== f &&
                    ((c = k.clone(c, !0, !0)),
                    s && k.merge(o, be(c, "script"))),
                  n.call(e[u], c, u);
              if (s)
                for (
                  d = o[o.length - 1].ownerDocument, k.map(o, Ne), u = 0;
                  u < s;
                  u++
                )
                  (c = o[u]),
                    ye.test(c.type || "") &&
                      !Z.access(c, "globalEval") &&
                      k.contains(d, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? k._evalUrl &&
                          !c.noModule &&
                          k._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            d,
                          )
                        : x(c.textContent.replace(De, ""), c, d));
            }
            return e;
          }
          function Be(e, t, n) {
            for (
              var i, r = t ? k.filter(t, e) : e, a = 0;
              null != (i = r[a]);
              a++
            )
              n || 1 !== i.nodeType || k.cleanData(be(i)),
                i.parentNode &&
                  (n && se(i) && xe(be(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          k.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                a,
                o,
                s = e.cloneNode(!0),
                l = se(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  k.isXMLDoc(e)
                )
              )
                for (o = be(s), i = 0, r = (a = be(e)).length; i < r; i++)
                  He(a[i], o[i]);
              if (t)
                if (n)
                  for (
                    a = a || be(e), o = o || be(s), i = 0, r = a.length;
                    i < r;
                    i++
                  )
                    Ie(a[i], o[i]);
                else Ie(e, s);
              return (
                (o = be(s, "script")).length > 0 &&
                  xe(o, !l && be(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = k.event.special, a = 0;
                void 0 !== (n = e[a]);
                a++
              )
                if (K(n)) {
                  if ((t = n[Z.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? k.event.remove(n, i)
                          : k.removeEvent(n, i, t.handle);
                    n[Z.expando] = void 0;
                  }
                  n[Q.expando] && (n[Q.expando] = void 0);
                }
            },
          }),
            k.fn.extend({
              detach: function (e) {
                return Be(this, e, !0);
              },
              remove: function (e) {
                return Be(this, e);
              },
              text: function (e) {
                return F(
                  this,
                  function (e) {
                    return void 0 === e
                      ? k.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              append: function () {
                return _e(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    je(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return _e(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return _e(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return _e(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (k.cleanData(be(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return k.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return F(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Le.test(e) &&
                      !we[(me.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = k.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (k.cleanData(be(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              replaceWith: function () {
                var e = [];
                return _e(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    k.inArray(this, e) < 0 &&
                      (k.cleanData(be(this)), n && n.replaceChild(t, this));
                  },
                  e,
                );
              },
            }),
            k.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                k.fn[e] = function (e) {
                  for (
                    var n, i = [], r = k(e), a = r.length - 1, o = 0;
                    o <= a;
                    o++
                  )
                    (n = o === a ? this : this.clone(!0)),
                      k(r[o])[t](n),
                      c.apply(i, n.get());
                  return this.pushStack(i);
                };
              },
            );
          var qe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            Re = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            $e = function (e, t, n) {
              var i,
                r,
                a = {};
              for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = a[r];
              return i;
            },
            We = new RegExp(ae.join("|"), "i");
          function Ve(e, t, n) {
            var i,
              r,
              a,
              o,
              s = e.style;
            return (
              (n = n || Re(e)) &&
                ("" !== (o = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (o = k.style(e, t)),
                !g.pixelBoxStyles() &&
                  qe.test(o) &&
                  We.test(t) &&
                  ((i = s.width),
                  (r = s.minWidth),
                  (a = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = o),
                  (o = n.width),
                  (s.width = i),
                  (s.minWidth = r),
                  (s.maxWidth = a))),
              void 0 !== o ? o + "" : o
            );
          }
          function Fe(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (d) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (d.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  oe.appendChild(c).appendChild(d);
                var e = i.getComputedStyle(d);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (d.style.right = "60%"),
                  (o = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (d.style.position = "absolute"),
                  (a = 12 === t(d.offsetWidth / 3)),
                  oe.removeChild(c),
                  (d = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              a,
              o,
              s,
              l,
              c = w.createElement("div"),
              d = w.createElement("div");
            d.style &&
              ((d.style.backgroundClip = "content-box"),
              (d.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === d.style.backgroundClip),
              k.extend(g, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), o;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), a;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == s &&
                      ((e = w.createElement("table")),
                      (t = w.createElement("tr")),
                      (n = w.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      oe.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (s =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      oe.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ge = ["Webkit", "Moz", "ms"],
            Xe = w.createElement("div").style,
            Ye = {};
          function Ue(e) {
            return (
              k.cssProps[e] ||
              Ye[e] ||
              (e in Xe
                ? e
                : (Ye[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                        n--;

                      )
                        if ((e = Ge[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Ke = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            Ze = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Qe = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function tt(e, t, n, i, r, a) {
            var o = "width" === t ? 1 : 0,
              s = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
              "margin" === n && (l += k.css(e, n + ae[o], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= k.css(e, "padding" + ae[o], !0, r)),
                    "margin" !== n &&
                      (l -= k.css(e, "border" + ae[o] + "Width", !0, r)))
                  : ((l += k.css(e, "padding" + ae[o], !0, r)),
                    "padding" !== n
                      ? (l += k.css(e, "border" + ae[o] + "Width", !0, r))
                      : (s += k.css(e, "border" + ae[o] + "Width", !0, r)));
            return (
              !i &&
                a >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        a -
                        l -
                        s -
                        0.5,
                    ),
                  ) || 0),
              l
            );
          }
          function nt(e, t, n) {
            var i = Re(e),
              r =
                (!g.boxSizingReliable() || n) &&
                "border-box" === k.css(e, "boxSizing", !1, i),
              a = r,
              o = Ve(e, t, i),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (qe.test(o)) {
              if (!n) return o;
              o = "auto";
            }
            return (
              ((!g.boxSizingReliable() && r) ||
                (!g.reliableTrDimensions() && L(e, "tr")) ||
                "auto" === o ||
                (!parseFloat(o) && "inline" === k.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === k.css(e, "boxSizing", !1, i)),
                (a = s in e) && (o = e[s])),
              (o = parseFloat(o) || 0) +
                tt(e, t, n || (r ? "border" : "content"), a, i, o) +
                "px"
            );
          }
          function it(e, t, n, i, r) {
            return new it.prototype.init(e, t, n, i, r);
          }
          k.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ve(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  a,
                  o,
                  s = U(t),
                  l = Je.test(t),
                  c = e.style;
                if (
                  (l || (t = Ue(s)),
                  (o = k.cssHooks[t] || k.cssHooks[s]),
                  void 0 === n)
                )
                  return o && "get" in o && void 0 !== (r = o.get(e, !1, i))
                    ? r
                    : c[t];
                "string" == (a = typeof n) &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = de(e, t, r)), (a = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== a ||
                      l ||
                      (n += (r && r[3]) || (k.cssNumber[s] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (o && "set" in o && void 0 === (n = o.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                a,
                o,
                s = U(t);
              return (
                Je.test(t) || (t = Ue(s)),
                (o = k.cssHooks[t] || k.cssHooks[s]) &&
                  "get" in o &&
                  (r = o.get(e, !0, n)),
                void 0 === r && (r = Ve(e, t, i)),
                "normal" === r && t in Qe && (r = Qe[t]),
                "" === n || n
                  ? ((a = parseFloat(r)), !0 === n || isFinite(a) ? a || 0 : r)
                  : r
              );
            },
          }),
            k.each(["height", "width"], function (e, t) {
              k.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Ke.test(k.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, i)
                      : $e(e, Ze, function () {
                          return nt(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    a = Re(e),
                    o = !g.scrollboxSize() && "absolute" === a.position,
                    s =
                      (o || i) && "border-box" === k.css(e, "boxSizing", !1, a),
                    l = i ? tt(e, t, i, s, a) : 0;
                  return (
                    s &&
                      o &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(a[t]) -
                          tt(e, t, "border", !1, a) -
                          0.5,
                      )),
                    l &&
                      (r = re.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = k.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (k.cssHooks.marginLeft = Fe(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ve(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      $e(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            k.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (k.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        a = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + ae[i] + t] = a[i] || a[i - 2] || a[0];
                    return r;
                  },
                }),
                  "margin" !== e && (k.cssHooks[e + t].set = et);
              },
            ),
            k.fn.extend({
              css: function (e, t) {
                return F(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      a = {},
                      o = 0;
                    if (Array.isArray(t)) {
                      for (i = Re(e), r = t.length; o < r; o++)
                        a[t[o]] = k.css(e, t[o], !1, i);
                      return a;
                    }
                    return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1,
                );
              },
            }),
            (k.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, i, r, a) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || k.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = a || (k.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        k.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration,
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  k.fx.step[e.prop]
                    ? k.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!k.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : k.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (k.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (k.fx = it.prototype.init),
            (k.fx.step = {});
          var rt,
            at,
            ot = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
          function lt() {
            at &&
              (!1 === w.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(lt)
                : i.setTimeout(lt, k.fx.interval),
              k.fx.tick());
          }
          function ct() {
            return (
              i.setTimeout(function () {
                rt = void 0;
              }),
              (rt = Date.now())
            );
          }
          function dt(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = ae[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function ut(e, t, n) {
            for (
              var i,
                r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                a = 0,
                o = r.length;
              a < o;
              a++
            )
              if ((i = r[a].call(n, t, e))) return i;
          }
          function pt(e, t, n) {
            var i,
              r,
              a = 0,
              o = pt.prefilters.length,
              s = k.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = rt || ct(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    a = 0,
                    o = c.tweens.length;
                  a < o;
                  a++
                )
                  c.tweens[a].run(i);
                return (
                  s.notifyWith(e, [c, i, n]),
                  i < 1 && o
                    ? n
                    : (o || s.notifyWith(e, [c, 1, 0]),
                      s.resolveWith(e, [c]),
                      !1)
                );
              },
              c = s.promise({
                elem: e,
                props: k.extend({}, t),
                opts: k.extend(
                  !0,
                  { specialEasing: {}, easing: k.easing._default },
                  n,
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = k.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing,
                  );
                  return c.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                      : s.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              d = c.props;
            for (
              (function (e, t) {
                var n, i, r, a, o;
                for (n in e)
                  if (
                    ((r = t[(i = U(n))]),
                    (a = e[n]),
                    Array.isArray(a) && ((r = a[1]), (a = e[n] = a[0])),
                    n !== i && ((e[i] = a), delete e[n]),
                    (o = k.cssHooks[i]) && ("expand" in o))
                  )
                    for (n in ((a = o.expand(a)), delete e[i], a))
                      (n in e) || ((e[n] = a[n]), (t[n] = r));
                  else t[i] = r;
              })(d, c.opts.specialEasing);
              a < o;
              a++
            )
              if ((i = pt.prefilters[a].call(c, e, d, c.opts)))
                return (
                  m(i.stop) &&
                    (k._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              k.map(d, ut, c),
              m(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              k.fx.timer(
                k.extend(l, { elem: e, anim: c, queue: c.opts.queue }),
              ),
              c
            );
          }
          (k.Animation = k.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return de(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              m(e) ? ((t = e), (e = ["*"])) : (e = e.match(_));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  a,
                  o,
                  s,
                  l,
                  c,
                  d,
                  u = "width" in t || "height" in t,
                  p = this,
                  f = {},
                  h = e.style,
                  v = e.nodeType && ce(e),
                  g = Z.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (o = k._queueHooks(e, "fx")).unqueued &&
                    ((o.unqueued = 0),
                    (s = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || s();
                    })),
                  o.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      o.unqueued--, k.queue(e, "fx").length || o.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), ot.test(r))) {
                    if (
                      (delete t[i],
                      (a = a || "toggle" === r),
                      r === (v ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !g || void 0 === g[i]) continue;
                      v = !0;
                    }
                    f[i] = (g && g[i]) || k.style(e, i);
                  }
                if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(f))
                  for (i in (u &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = g && g.display) && (c = Z.get(e, "display")),
                    "none" === (d = k.css(e, "display")) &&
                      (c
                        ? (d = c)
                        : (fe([e], !0),
                          (c = e.style.display || c),
                          (d = k.css(e, "display")),
                          fe([e]))),
                    ("inline" === d || ("inline-block" === d && null != c)) &&
                      "none" === k.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((d = h.display), (c = "none" === d ? "" : d))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  f))
                    l ||
                      (g
                        ? "hidden" in g && (v = g.hidden)
                        : (g = Z.access(e, "fxshow", { display: c })),
                      a && (g.hidden = !v),
                      v && fe([e], !0),
                      p.done(function () {
                        for (i in (v || fe([e]), Z.remove(e, "fxshow"), f))
                          k.style(e, i, f[i]);
                      })),
                      (l = ut(v ? g[i] : 0, i, p)),
                      i in g ||
                        ((g[i] = l.start),
                        v && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (k.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? k.extend({}, e)
                  : {
                      complete: n || (!n && t) || (m(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !m(t) && t),
                    };
              return (
                k.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in k.fx.speeds
                      ? (i.duration = k.fx.speeds[i.duration])
                      : (i.duration = k.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  m(i.old) && i.old.call(this),
                    i.queue && k.dequeue(this, i.queue);
                }),
                i
              );
            }),
            k.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = k.isEmptyObject(e),
                  a = k.speed(t, n, i),
                  o = function () {
                    var t = pt(this, k.extend({}, e), a);
                    (r || Z.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (o.finish = o),
                  r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      a = k.timers,
                      o = Z.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                      for (r in o) o[r] && o[r].stop && st.test(r) && i(o[r]);
                    for (r = a.length; r--; )
                      a[r].elem !== this ||
                        (null != e && a[r].queue !== e) ||
                        (a[r].anim.stop(n), (t = !1), a.splice(r, 1));
                    (!t && n) || k.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = Z.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      a = k.timers,
                      o = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        k.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = a.length;
                      t--;

                    )
                      a[t].elem === this &&
                        a[t].queue === e &&
                        (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; t < o; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            k.each(["toggle", "show", "hide"], function (e, t) {
              var n = k.fn[t];
              k.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(dt(t, !0), e, i, r);
              };
            }),
            k.each(
              {
                slideDown: dt("show"),
                slideUp: dt("hide"),
                slideToggle: dt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                k.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              },
            ),
            (k.timers = []),
            (k.fx.tick = function () {
              var e,
                t = 0,
                n = k.timers;
              for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || k.fx.stop(), (rt = void 0);
            }),
            (k.fx.timer = function (e) {
              k.timers.push(e), k.fx.start();
            }),
            (k.fx.interval = 13),
            (k.fx.start = function () {
              at || ((at = !0), lt());
            }),
            (k.fx.stop = function () {
              at = null;
            }),
            (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (k.fn.delay = function (e, t) {
              return (
                (e = (k.fx && k.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = w.createElement("input"),
                t = w
                  .createElement("select")
                  .appendChild(w.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = w.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var ft,
            ht = k.expr.attrHandle;
          k.fn.extend({
            attr: function (e, t) {
              return F(this, k.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                k.removeAttr(this, e);
              });
            },
          }),
            k.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                  return void 0 === e.getAttribute
                    ? k.prop(e, t, n)
                    : ((1 === a && k.isXMLDoc(e)) ||
                        (r =
                          k.attrHooks[t.toLowerCase()] ||
                          (k.expr.match.bool.test(t) ? ft : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void k.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = k.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && L(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(_);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (ft = {
              set: function (e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || k.find.attr;
              ht[t] = function (e, t, i) {
                var r,
                  a,
                  o = t.toLowerCase();
                return (
                  i ||
                    ((a = ht[o]),
                    (ht[o] = r),
                    (r = null != n(e, t, i) ? o : null),
                    (ht[o] = a)),
                  r
                );
              };
            });
          var vt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;
          function mt(e) {
            return (e.match(_) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function wt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(_)) || [];
          }
          k.fn.extend({
            prop: function (e, t) {
              return F(this, k.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[k.propFix[e] || e];
              });
            },
          }),
            k.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                  return (
                    (1 === a && k.isXMLDoc(e)) ||
                      ((t = k.propFix[t] || t), (r = k.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = k.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : vt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (k.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            k.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                k.propFix[this.toLowerCase()] = this;
              },
            ),
            k.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  a,
                  o,
                  s,
                  l = 0;
                if (m(e))
                  return this.each(function (t) {
                    k(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = wt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + mt(r) + " "))
                    ) {
                      for (o = 0; (a = t[o++]); )
                        i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                      r !== (s = mt(i)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  a,
                  o,
                  s,
                  l = 0;
                if (m(e))
                  return this.each(function (t) {
                    k(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = wt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + mt(r) + " "))
                    ) {
                      for (o = 0; (a = t[o++]); )
                        for (; i.indexOf(" " + a + " ") > -1; )
                          i = i.replace(" " + a + " ", " ");
                      r !== (s = mt(i)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : m(e)
                  ? this.each(function (n) {
                      k(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, r, a, o;
                      if (i)
                        for (r = 0, a = k(this), o = wt(e); (t = o[r++]); )
                          a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && Z.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Z.get(this, "__className__") || "",
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + mt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var bt = /\r/g;
          k.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = m(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, k(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = k.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        k.valHooks[this.type] ||
                        k.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    k.valHooks[r.type] ||
                    k.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(bt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            k.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      a = e.selectedIndex,
                      o = "select-one" === e.type,
                      s = o ? null : [],
                      l = o ? a + 1 : r.length;
                    for (i = a < 0 ? l : o ? a : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === a) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))
                      ) {
                        if (((t = k(n).val()), o)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, a = k.makeArray(t), o = r.length;
                      o--;

                    )
                      ((i = r[o]).selected =
                        k.inArray(k.valHooks.option.get(i), a) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), a;
                  },
                },
              },
            }),
            k.each(["radio", "checkbox"], function () {
              (k.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = k.inArray(k(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (k.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in i);
          var xt = /^(?:focusinfocus|focusoutblur)$/,
            Ct = function (e) {
              e.stopPropagation();
            };
          k.extend(k.event, {
            trigger: function (e, t, n, r) {
              var a,
                o,
                s,
                l,
                c,
                d,
                u,
                p,
                h = [n || w],
                v = f.call(e, "type") ? e.type : e,
                g = f.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((o = p = s = n = n || w),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !xt.test(v + k.event.triggered) &&
                  (v.indexOf(".") > -1 &&
                    ((g = v.split(".")), (v = g.shift()), g.sort()),
                  (c = v.indexOf(":") < 0 && "on" + v),
                  ((e = e[k.expando]
                    ? e
                    : new k.Event(v, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)",
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : k.makeArray(t, [e])),
                  (u = k.event.special[v] || {}),
                  r || !u.trigger || !1 !== u.trigger.apply(n, t)))
              ) {
                if (!r && !u.noBubble && !y(n)) {
                  for (
                    l = u.delegateType || v,
                      xt.test(l + v) || (o = o.parentNode);
                    o;
                    o = o.parentNode
                  )
                    h.push(o), (s = o);
                  s === (n.ownerDocument || w) &&
                    h.push(s.defaultView || s.parentWindow || i);
                }
                for (a = 0; (o = h[a++]) && !e.isPropagationStopped(); )
                  (p = o),
                    (e.type = a > 1 ? l : u.bindType || v),
                    (d =
                      (Z.get(o, "events") || Object.create(null))[e.type] &&
                      Z.get(o, "handle")) && d.apply(o, t),
                    (d = c && o[c]) &&
                      d.apply &&
                      K(o) &&
                      ((e.result = d.apply(o, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = v),
                  r ||
                    e.isDefaultPrevented() ||
                    (u._default && !1 !== u._default.apply(h.pop(), t)) ||
                    !K(n) ||
                    (c &&
                      m(n[v]) &&
                      !y(n) &&
                      ((s = n[c]) && (n[c] = null),
                      (k.event.triggered = v),
                      e.isPropagationStopped() && p.addEventListener(v, Ct),
                      n[v](),
                      e.isPropagationStopped() && p.removeEventListener(v, Ct),
                      (k.event.triggered = void 0),
                      s && (n[c] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
              k.event.trigger(i, null, t);
            },
          }),
            k.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  k.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return k.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  k.event.simulate(t, e.target, k.event.fix(e));
                };
                k.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = Z.access(i, t);
                    r || i.addEventListener(e, n, !0),
                      Z.access(i, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = Z.access(i, t) - 1;
                    r
                      ? Z.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), Z.remove(i, t));
                  },
                };
              });
          var Tt = i.location,
            kt = { guid: Date.now() },
            Et = /\?/;
          k.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                k.error(
                  "Invalid XML: " +
                    (n
                      ? k
                          .map(n.childNodes, function (e) {
                            return e.textContent;
                          })
                          .join("\n")
                      : e),
                ),
              t
            );
          };
          var St = /\[\]$/,
            At = /\r?\n/g,
            Mt = /^(?:submit|button|image|reset|file)$/i,
            Pt = /^(?:input|select|textarea|keygen)/i;
          function Lt(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              k.each(t, function (t, r) {
                n || St.test(e)
                  ? i(e, r)
                  : Lt(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i,
                    );
              });
            else if (n || "object" !== C(t)) i(e, t);
            else for (r in t) Lt(e + "[" + r + "]", t[r], n, i);
          }
          (k.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = m(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
              k.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) Lt(n, e[n], t, r);
            return i.join("&");
          }),
            k.fn.extend({
              serialize: function () {
                return k.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = k.prop(this, "elements");
                  return e ? k.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !k(this).is(":disabled") &&
                      Pt.test(this.nodeName) &&
                      !Mt.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = k(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? k.map(n, function (e) {
                          return { name: t.name, value: e.replace(At, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(At, "\r\n") };
                  })
                  .get();
              },
            });
          var Ot = /%20/g,
            Dt = /#.*$/,
            jt = /([?&])_=[^&]*/,
            zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Nt = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            Ht = {},
            _t = {},
            Bt = "*/".concat("*"),
            qt = w.createElement("a");
          function Rt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                a = t.toLowerCase().match(_) || [];
              if (m(n))
                for (; (i = a[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function $t(e, t, n, i) {
            var r = {},
              a = e === _t;
            function o(s) {
              var l;
              return (
                (r[s] = !0),
                k.each(e[s] || [], function (e, s) {
                  var c = s(t, n, i);
                  return "string" != typeof c || a || r[c]
                    ? a
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), o(c), !1);
                }),
                l
              );
            }
            return o(t.dataTypes[0]) || (!r["*"] && o("*"));
          }
          function Wt(e, t) {
            var n,
              i,
              r = k.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && k.extend(!0, e, i), e;
          }
          (qt.href = Tt.href),
            k.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Tt.protocol,
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Bt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": k.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, k.ajaxSettings), t) : Wt(k.ajaxSettings, e);
              },
              ajaxPrefilter: Rt(Ht),
              ajaxTransport: Rt(_t),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  a,
                  o,
                  s,
                  l,
                  c,
                  d,
                  u,
                  p,
                  f = k.ajaxSetup({}, t),
                  h = f.context || f,
                  v = f.context && (h.nodeType || h.jquery) ? k(h) : k.event,
                  g = k.Deferred(),
                  m = k.Callbacks("once memory"),
                  y = f.statusCode || {},
                  b = {},
                  x = {},
                  C = "canceled",
                  T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!o)
                          for (o = {}; (t = zt.exec(a)); )
                            o[t[1].toLowerCase() + " "] = (
                              o[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = o[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? a : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) T.always(e[T.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || C;
                      return n && n.abort(t), E(0, t), this;
                    },
                  };
                if (
                  (g.promise(T),
                  (f.url = ((e || f.url || Tt.href) + "").replace(
                    It,
                    Tt.protocol + "//",
                  )),
                  (f.type = t.method || t.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || "*").toLowerCase().match(_) || [
                    "",
                  ]),
                  null == f.crossDomain)
                ) {
                  l = w.createElement("a");
                  try {
                    (l.href = f.url),
                      (l.href = l.href),
                      (f.crossDomain =
                        qt.protocol + "//" + qt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if (
                  (f.data &&
                    f.processData &&
                    "string" != typeof f.data &&
                    (f.data = k.param(f.data, f.traditional)),
                  $t(Ht, f, t, T),
                  c)
                )
                  return T;
                for (u in ((d = k.event && f.global) &&
                  0 == k.active++ &&
                  k.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !Nt.test(f.type)),
                (r = f.url.replace(Dt, "")),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 ===
                      (f.contentType || "").indexOf(
                        "application/x-www-form-urlencoded",
                      ) &&
                    (f.data = f.data.replace(Ot, "+"))
                  : ((p = f.url.slice(r.length)),
                    f.data &&
                      (f.processData || "string" == typeof f.data) &&
                      ((r += (Et.test(r) ? "&" : "?") + f.data), delete f.data),
                    !1 === f.cache &&
                      ((r = r.replace(jt, "$1")),
                      (p = (Et.test(r) ? "&" : "?") + "_=" + kt.guid++ + p)),
                    (f.url = r + p)),
                f.ifModified &&
                  (k.lastModified[r] &&
                    T.setRequestHeader("If-Modified-Since", k.lastModified[r]),
                  k.etag[r] && T.setRequestHeader("If-None-Match", k.etag[r])),
                ((f.data && f.hasContent && !1 !== f.contentType) ||
                  t.contentType) &&
                  T.setRequestHeader("Content-Type", f.contentType),
                T.setRequestHeader(
                  "Accept",
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] +
                        ("*" !== f.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
                    : f.accepts["*"],
                ),
                f.headers))
                  T.setRequestHeader(u, f.headers[u]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, T, f) || c))
                  return T.abort();
                if (
                  ((C = "abort"),
                  m.add(f.complete),
                  T.done(f.success),
                  T.fail(f.error),
                  (n = $t(_t, f, t, T)))
                ) {
                  if (
                    ((T.readyState = 1), d && v.trigger("ajaxSend", [T, f]), c)
                  )
                    return T;
                  f.async &&
                    f.timeout > 0 &&
                    (s = i.setTimeout(function () {
                      T.abort("timeout");
                    }, f.timeout));
                  try {
                    (c = !1), n.send(b, E);
                  } catch (e) {
                    if (c) throw e;
                    E(-1, e);
                  }
                } else E(-1, "No Transport");
                function E(e, t, o, l) {
                  var u,
                    p,
                    w,
                    b,
                    x,
                    C = t;
                  c ||
                    ((c = !0),
                    s && i.clearTimeout(s),
                    (n = void 0),
                    (a = l || ""),
                    (T.readyState = e > 0 ? 4 : 0),
                    (u = (e >= 200 && e < 300) || 304 === e),
                    o &&
                      (b = (function (e, t, n) {
                        for (
                          var i, r, a, o, s = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in s)
                            if (s[r] && s[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) a = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              a = r;
                              break;
                            }
                            o || (o = r);
                          }
                          a = a || o;
                        }
                        if (a) return a !== l[0] && l.unshift(a), n[a];
                      })(f, T, o)),
                    !u &&
                      k.inArray("script", f.dataTypes) > -1 &&
                      k.inArray("json", f.dataTypes) < 0 &&
                      (f.converters["text script"] = function () {}),
                    (b = (function (e, t, n, i) {
                      var r,
                        a,
                        o,
                        s,
                        l,
                        c = {},
                        d = e.dataTypes.slice();
                      if (d[1])
                        for (o in e.converters)
                          c[o.toLowerCase()] = e.converters[o];
                      for (a = d.shift(); a; )
                        if (
                          (e.responseFields[a] && (n[e.responseFields[a]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = a),
                          (a = d.shift()))
                        )
                          if ("*" === a) a = l;
                          else if ("*" !== l && l !== a) {
                            if (!(o = c[l + " " + a] || c["* " + a]))
                              for (r in c)
                                if (
                                  (s = r.split(" "))[1] === a &&
                                  (o = c[l + " " + s[0]] || c["* " + s[0]])
                                ) {
                                  !0 === o
                                    ? (o = c[r])
                                    : !0 !== c[r] &&
                                      ((a = s[0]), d.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== o)
                              if (o && e.throws) t = o(t);
                              else
                                try {
                                  t = o(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: o
                                      ? e
                                      : "No conversion from " + l + " to " + a,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(f, b, T, u)),
                    u
                      ? (f.ifModified &&
                          ((x = T.getResponseHeader("Last-Modified")) &&
                            (k.lastModified[r] = x),
                          (x = T.getResponseHeader("etag")) && (k.etag[r] = x)),
                        204 === e || "HEAD" === f.type
                          ? (C = "nocontent")
                          : 304 === e
                          ? (C = "notmodified")
                          : ((C = b.state), (p = b.data), (u = !(w = b.error))))
                      : ((w = C),
                        (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                    (T.status = e),
                    (T.statusText = (t || C) + ""),
                    u
                      ? g.resolveWith(h, [p, C, T])
                      : g.rejectWith(h, [T, C, w]),
                    T.statusCode(y),
                    (y = void 0),
                    d &&
                      v.trigger(u ? "ajaxSuccess" : "ajaxError", [
                        T,
                        f,
                        u ? p : w,
                      ]),
                    m.fireWith(h, [T, C]),
                    d &&
                      (v.trigger("ajaxComplete", [T, f]),
                      --k.active || k.event.trigger("ajaxStop")));
                }
                return T;
              },
              getJSON: function (e, t, n) {
                return k.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return k.get(e, void 0, t, "script");
              },
            }),
            k.each(["get", "post"], function (e, t) {
              k[t] = function (e, n, i, r) {
                return (
                  m(n) && ((r = r || i), (i = n), (n = void 0)),
                  k.ajax(
                    k.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      k.isPlainObject(e) && e,
                    ),
                  )
                );
              };
            }),
            k.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (k._evalUrl = function (e, t, n) {
              return k.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  k.globalEval(e, t, n);
                },
              });
            }),
            k.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (m(e) && (e = e.call(this[0])),
                    (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return m(e)
                  ? this.each(function (t) {
                      k(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = k(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = m(e);
                return this.each(function (n) {
                  k(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      k(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (k.expr.pseudos.hidden = function (e) {
              return !k.expr.pseudos.visible(e);
            }),
            (k.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (k.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Vt = { 0: 200, 1223: 204 },
            Ft = k.ajaxSettings.xhr();
          (g.cors = !!Ft && "withCredentials" in Ft),
            (g.ajax = Ft = !!Ft),
            k.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (Ft && !e.crossDomain))
                return {
                  send: function (r, a) {
                    var o,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (o in e.xhrFields) s[o] = e.xhrFields[o];
                    for (o in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      s.setRequestHeader(o, r[o]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? a(0, "error")
                              : a(s.status, s.statusText)
                            : a(
                                Vt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders(),
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            k.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            k.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return k.globalEval(e), e;
                },
              },
            }),
            k.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            k.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = k("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        }),
                      )),
                      w.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Gt,
            Xt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
          k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || k.expando + "_" + kt.guid++;
              return (this[e] = !0), e;
            },
          }),
            k.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                a,
                o,
                s =
                  !1 !== e.jsonp &&
                  (Yt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded",
                        ) &&
                      Yt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Yt, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return o || k.error(r + " was not called"), o[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (a = i[r]),
                  (i[r] = function () {
                    o = arguments;
                  }),
                  n.always(function () {
                    void 0 === a ? k(i).removeProp(r) : (i[r] = a),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                      o && m(a) && a(o[0]),
                      (o = a = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((Gt = w.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Gt.childNodes.length)),
            (k.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((i = (t =
                          w.implementation.createHTMLDocument(
                            "",
                          )).createElement("base")).href = w.location.href),
                        t.head.appendChild(i))
                      : (t = w)),
                  (a = !n && []),
                  (r = O.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = Te([e], t, a)),
                      a && a.length && k(a).remove(),
                      k.merge([], r.childNodes)));
              var i, r, a;
            }),
            (k.fn.load = function (e, t, n) {
              var i,
                r,
                a,
                o = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((i = mt(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                o.length > 0 &&
                  k
                    .ajax({
                      url: e,
                      type: r || "GET",
                      dataType: "html",
                      data: t,
                    })
                    .done(function (e) {
                      (a = arguments),
                        o.html(
                          i ? k("<div>").append(k.parseHTML(e)).find(i) : e,
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          o.each(function () {
                            n.apply(this, a || [e.responseText, t, e]);
                          });
                        },
                    ),
                this
              );
            }),
            (k.expr.pseudos.animated = function (e) {
              return k.grep(k.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (k.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  a,
                  o,
                  s,
                  l,
                  c = k.css(e, "position"),
                  d = k(e),
                  u = {};
                "static" === c && (e.style.position = "relative"),
                  (s = d.offset()),
                  (a = k.css(e, "top")),
                  (l = k.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (a + l).indexOf("auto") > -1
                    ? ((o = (i = d.position()).top), (r = i.left))
                    : ((o = parseFloat(a) || 0), (r = parseFloat(l) || 0)),
                  m(t) && (t = t.call(e, n, k.extend({}, s))),
                  null != t.top && (u.top = t.top - s.top + o),
                  null != t.left && (u.left = t.left - s.left + r),
                  "using" in t ? t.using.call(e, u) : d.css(u);
              },
            }),
            k.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        k.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === k.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === k.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = k(e).offset()).top += k.css(
                        e,
                        "borderTopWidth",
                        !0,
                      )),
                      (r.left += k.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - k.css(i, "marginTop", !0),
                    left: t.left - r.left - k.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === k.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || oe;
                });
              },
            }),
            k.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                k.fn[e] = function (i) {
                  return F(
                    this,
                    function (e, i, r) {
                      var a;
                      if (
                        (y(e)
                          ? (a = e)
                          : 9 === e.nodeType && (a = e.defaultView),
                        void 0 === r)
                      )
                        return a ? a[t] : e[i];
                      a
                        ? a.scrollTo(
                            n ? a.pageXOffset : r,
                            n ? r : a.pageYOffset,
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length,
                  );
                };
              },
            ),
            k.each(["top", "left"], function (e, t) {
              k.cssHooks[t] = Fe(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ve(e, t)), qe.test(n) ? k(e).position()[t] + "px" : n
                  );
              });
            }),
            k.each({ Height: "height", Width: "width" }, function (e, t) {
              k.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  k.fn[i] = function (r, a) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                      s = n || (!0 === r || !0 === a ? "margin" : "border");
                    return F(
                      this,
                      function (t, n, r) {
                        var a;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((a = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              a["scroll" + e],
                              t.body["offset" + e],
                              a["offset" + e],
                              a["client" + e],
                            ))
                          : void 0 === r
                          ? k.css(t, n, s)
                          : k.style(t, n, r, s);
                      },
                      t,
                      o ? r : void 0,
                      o,
                    );
                  };
                },
              );
            }),
            k.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                k.fn[t] = function (e) {
                  return this.on(t, e);
                };
              },
            ),
            k.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            k.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " ",
              ),
              function (e, t) {
                k.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              },
            );
          var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (k.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
              return (
                (i = s.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(s.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || k.guid++),
                r
              );
          }),
            (k.holdReady = function (e) {
              e ? k.readyWait++ : k.ready(!0);
            }),
            (k.isArray = Array.isArray),
            (k.parseJSON = JSON.parse),
            (k.nodeName = L),
            (k.isFunction = m),
            (k.isWindow = y),
            (k.camelCase = U),
            (k.type = C),
            (k.now = Date.now),
            (k.isNumeric = function (e) {
              var t = k.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (k.trim = function (e) {
              return null == e ? "" : (e + "").replace(Ut, "");
            }),
            void 0 ===
              (n = function () {
                return k;
              }.apply(t, [])) || (e.exports = n);
          var Kt = i.jQuery,
            Jt = i.$;
          return (
            (k.noConflict = function (e) {
              return (
                i.$ === k && (i.$ = Jt),
                e && i.jQuery === k && (i.jQuery = Kt),
                k
              );
            }),
            void 0 === r && (i.jQuery = i.$ = k),
            k
          );
        });
      },
      505: (e, t, n) => {
        !(function (e, t, n, i) {
          var r = "accordion",
            a = {
              transitionSpeed: 300,
              transitionEasing: "ease",
              controlElement: "[data-control]",
              contentElement: "[data-content]",
              groupElement: "[data-accordion-group]",
              singleOpen: !0,
            };
          function o(t, n) {
            (this.element = t),
              (this.options = e.extend({}, a, n)),
              (this._defaults = a),
              (this._name = r),
              this.init();
          }
          (o.prototype.init = function () {
            var i,
              r,
              a = this.options,
              o = e(this.element),
              s = o.find("> " + a.controlElement),
              l = o.find("> " + a.contentElement),
              c = o.parents("[data-accordion]").length > 0,
              d = { "max-height": 0, overflow: "hidden" },
              u = (function () {
                var e = (n.body || n.documentElement).style,
                  t = "transition";
                if ("string" == typeof e[t]) return !0;
                var i = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                t = "Transition";
                for (var r = 0; r < i.length; r++)
                  if ("string" == typeof e[i[r] + t]) return !0;
                return !1;
              })();
            function p(e, t) {
              t
                ? l.css({ "-webkit-transition": "", transition: "" })
                : l.css({
                    "-webkit-transition":
                      "max-height " +
                      a.transitionSpeed +
                      "ms " +
                      a.transitionEasing,
                    transition:
                      "max-height " +
                      a.transitionSpeed +
                      "ms " +
                      a.transitionEasing,
                  });
            }
            function f(t) {
              var n = 0;
              t.children().each(function () {
                n += e(this).outerHeight(!0);
              }),
                t.data("oHeight", n);
            }
            function h(t, n, i, r) {
              var o,
                s = t.filter(".open").find("> [data-content]"),
                l = s.find("[data-accordion].open > [data-content]");
              a.singleOpen ||
                (l = l.not(
                  n.siblings("[data-accordion].open").find("> [data-content]"),
                )),
                (o = s.add(l)),
                t.hasClass("open") &&
                  o.each(function () {
                    var t = e(this).data("oHeight");
                    switch (r) {
                      case "+":
                        e(this).data("oHeight", t + i);
                        break;
                      case "-":
                        e(this).data("oHeight", t - i);
                        break;
                      default:
                        throw "updateParentHeight method needs an operation";
                    }
                    e(this).css("max-height", "inherit");
                  });
            }
            function v(e) {
              if (e.hasClass("open")) {
                var t = e.find("> [data-content]"),
                  n = t.find("[data-accordion].open > [data-content]"),
                  i = t.add(n);
                f(i), i.css("max-height", "inherit");
              }
            }
            function g(e, t) {
              e.trigger("accordion.close"),
                u
                  ? (c &&
                      h(
                        e.parents("[data-accordion]"),
                        e,
                        t.data("oHeight"),
                        "-",
                      ),
                    t.css(d),
                    e.removeClass("open"))
                  : (t.css("max-height", "inherit"),
                    t.animate(d, a.transitionSpeed),
                    e.removeClass("open"));
            }
            function m() {
              var i = !!a.singleOpen && o.parents(a.groupElement).length > 0;
              f(l),
                i &&
                  (function (t) {
                    t.closest(a.groupElement);
                    var n = t.siblings("[data-accordion]").filter(".open"),
                      i = n.find("[data-accordion]").filter(".open"),
                      r = n.add(i);
                    r.each(function () {
                      var t = e(this),
                        n = t.find(a.contentElement);
                      g(t, n);
                    }),
                      r.removeClass("open");
                  })(o),
                o.hasClass("open")
                  ? g(o, l)
                  : (function (e, n) {
                      var i;
                      e.trigger("accordion.open"),
                        u
                          ? (p(),
                            c &&
                              h(
                                e.parents("[data-accordion]"),
                                e,
                                n.data("oHeight"),
                                "+",
                              ),
                            (i = function () {
                              n.css("max-height", "inherit");
                            }),
                            t.requestAnimationFrame
                              ? requestAnimationFrame(i)
                              : t.webkitRequestAnimationFrame
                              ? webkitRequestAnimationFrame(i)
                              : t.mozRequestAnimationFrame
                              ? mozRequestAnimationFrame(i)
                              : setTimeout(i, 1e3 / 60),
                            e.addClass("open"))
                          : (n.animate(
                              { "max-height": n.data("oHeight") },
                              a.transitionSpeed,
                              function () {
                                n.css({ "max-height": "none" });
                              },
                            ),
                            e.addClass("open"));
                    })(o, l),
                setTimeout(function () {
                  e([n.documentElement, n.body]).animate(
                    { scrollTop: o.offset().top - 200 },
                    1e3,
                  );
                }, 500);
            }
            l.each(function () {
              var t = e(this);
              0 != t.css("max-height") &&
                (t.closest("[data-accordion]").hasClass("open")
                  ? (p(), f(t), t.css("max-height", "inherit"))
                  : t.css({ "max-height": 0, overflow: "hidden" }));
            }),
              o.attr("data-accordion") ||
                (o.attr("data-accordion", ""),
                o.find(a.controlElement).attr("data-control", ""),
                o.find(a.contentElement).attr("data-content", "")),
              s.on("click", m),
              s.on("accordion.toggle", function () {
                if (a.singleOpen && s.length > 1) return !1;
                m();
              }),
              s.on("accordion.refresh", function () {
                v(o);
              }),
              e(t).on(
                "resize",
                ((i = function () {
                  v(o);
                }),
                function () {
                  var e = this,
                    t = arguments;
                  r && clearTimeout(r),
                    (r = setTimeout(function () {
                      i.apply(e, t), (r = null);
                    }, 100));
                }),
              );
          }),
            (e.fn[r] = function (t) {
              return this.each(function () {
                e.data(this, "plugin_" + r) ||
                  e.data(this, "plugin_" + r, new o(this, t));
              });
            });
        })(n(755), window, document);
      },
      790: (e, t, n) => {
        var i,
          r,
          a,
          o,
          s,
          l,
          c,
          d,
          u,
          p,
          f,
          h,
          v,
          g,
          m,
          y,
          w = n(755);
        (i = window),
          (r = document),
          (s = (a = w)("html")),
          (l = a(i)),
          (c = a(r)),
          (d = a.fancybox =
            function () {
              d.open.apply(this, arguments);
            }),
          (u = navigator.userAgent.match(/msie/i)),
          (p = null),
          (f = r.createTouch !== o),
          (h = function (e) {
            return e && e.hasOwnProperty && e instanceof a;
          }),
          (v = function (e) {
            return e && "string" === a.type(e);
          }),
          (g = function (e) {
            return v(e) && 0 < e.indexOf("%");
          }),
          (m = function (e, t) {
            var n = parseInt(e, 10) || 0;
            return t && g(e) && (n *= d.getViewport()[t] / 100), Math.ceil(n);
          }),
          (y = function (e, t) {
            return m(e, t) + "px";
          }),
          a.extend(d, {
            version: "2.1.7",
            defaults: {
              padding: 15,
              margin: 20,
              width: 800,
              height: 600,
              minWidth: 100,
              minHeight: 100,
              maxWidth: 9999,
              maxHeight: 9999,
              pixelRatio: 1,
              autoSize: !0,
              autoHeight: !1,
              autoWidth: !1,
              autoResize: !0,
              autoCenter: !f,
              fitToView: !0,
              aspectRatio: !1,
              topRatio: 0.5,
              leftRatio: 0.5,
              scrolling: "auto",
              wrapCSS: "",
              arrows: !0,
              closeBtn: !0,
              closeClick: !1,
              nextClick: !1,
              mouseWheel: !0,
              autoPlay: !1,
              playSpeed: 3e3,
              preload: 3,
              modal: !1,
              loop: !0,
              ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
              iframe: { scrolling: "auto", preload: !0 },
              swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always",
              },
              keys: {
                next: { 13: "left", 34: "up", 39: "left", 40: "up" },
                prev: { 8: "right", 33: "down", 37: "right", 38: "down" },
                close: [27],
                play: [32],
                toggle: [70],
              },
              direction: { next: "left", prev: "right" },
              scrollOutside: !0,
              index: 0,
              type: null,
              href: null,
              content: null,
              title: null,
              tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe:
                  '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                  (u ? ' allowtransparency="true"' : "") +
                  "></iframe>",
                error:
                  '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn:
                  '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading: '<div id="fancybox-loading"><div></div></div>',
              },
              openEffect: "fade",
              openSpeed: 250,
              openEasing: "swing",
              openOpacity: !0,
              openMethod: "zoomIn",
              closeEffect: "fade",
              closeSpeed: 250,
              closeEasing: "swing",
              closeOpacity: !0,
              closeMethod: "zoomOut",
              nextEffect: "elastic",
              nextSpeed: 250,
              nextEasing: "swing",
              nextMethod: "changeIn",
              prevEffect: "elastic",
              prevSpeed: 250,
              prevEasing: "swing",
              prevMethod: "changeOut",
              helpers: { overlay: !0, title: !0 },
              onCancel: a.noop,
              beforeLoad: a.noop,
              afterLoad: a.noop,
              beforeShow: a.noop,
              afterShow: a.noop,
              beforeChange: a.noop,
              beforeClose: a.noop,
              afterClose: a.noop,
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: { timer: null, isActive: !1 },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function (e, t) {
              if (e && (a.isPlainObject(t) || (t = {}), !1 !== d.close(!0)))
                return (
                  a.isArray(e) || (e = h(e) ? a(e).get() : [e]),
                  a.each(e, function (n, i) {
                    var r,
                      s,
                      l,
                      c,
                      u,
                      p = {};
                    "object" === a.type(i) &&
                      (i.nodeType && (i = a(i)),
                      h(i)
                        ? ((p = {
                            href: i.data("fancybox-href") || i.attr("href"),
                            title: a("<div/>")
                              .text(
                                i.data("fancybox-title") ||
                                  i.attr("title") ||
                                  "",
                              )
                              .html(),
                            isDom: !0,
                            element: i,
                          }),
                          a.metadata && a.extend(!0, p, i.metadata()))
                        : (p = i)),
                      (r = t.href || p.href || (v(i) ? i : null)),
                      (s = t.title !== o ? t.title : p.title || ""),
                      !(c = (l = t.content || p.content)
                        ? "html"
                        : t.type || p.type) &&
                        p.isDom &&
                        ((c = i.data("fancybox-type")) ||
                          (c = (c = i.prop("class").match(/fancybox\.(\w+)/))
                            ? c[1]
                            : null)),
                      v(r) &&
                        (c ||
                          (d.isImage(r)
                            ? (c = "image")
                            : d.isSWF(r)
                            ? (c = "swf")
                            : "#" === r.charAt(0)
                            ? (c = "inline")
                            : v(i) && ((c = "html"), (l = i))),
                        "ajax" === c &&
                          ((u = r.split(/\s+/, 2)),
                          (r = u.shift()),
                          (u = u.shift()))),
                      l ||
                        ("inline" === c
                          ? r
                            ? (l = a(
                                v(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r,
                              ))
                            : p.isDom && (l = i)
                          : "html" === c
                          ? (l = r)
                          : c || r || !p.isDom || ((c = "inline"), (l = i))),
                      a.extend(p, {
                        href: r,
                        type: c,
                        content: l,
                        title: s,
                        selector: u,
                      }),
                      (e[n] = p);
                  }),
                  (d.opts = a.extend(!0, {}, d.defaults, t)),
                  t.keys !== o &&
                    (d.opts.keys =
                      !!t.keys && a.extend({}, d.defaults.keys, t.keys)),
                  (d.group = e),
                  d._start(d.opts.index)
                );
            },
            cancel: function () {
              var e = d.coming;
              (e && !1 === d.trigger("onCancel")) ||
                (d.hideLoading(),
                e &&
                  (d.ajaxLoad && d.ajaxLoad.abort(),
                  (d.ajaxLoad = null),
                  d.imgPreload &&
                    (d.imgPreload.onload = d.imgPreload.onerror = null),
                  e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(),
                  (d.coming = null),
                  d.current || d._afterZoomOut(e)));
            },
            close: function (e) {
              d.cancel(),
                !1 !== d.trigger("beforeClose") &&
                  (d.unbindEvents(),
                  d.isActive &&
                    (d.isOpen && !0 !== e
                      ? ((d.isOpen = d.isOpened = !1),
                        (d.isClosing = !0),
                        a(".fancybox-item, .fancybox-nav").remove(),
                        d.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                        d.transitions[d.current.closeMethod]())
                      : (a(".fancybox-wrap")
                          .stop(!0)
                          .trigger("onReset")
                          .remove(),
                        d._afterZoomOut())));
            },
            play: function (e) {
              var t = function () {
                  clearTimeout(d.player.timer);
                },
                n = function () {
                  t(),
                    d.current &&
                      d.player.isActive &&
                      (d.player.timer = setTimeout(
                        d.next,
                        d.current.playSpeed,
                      ));
                },
                i = function () {
                  t(),
                    c.unbind(".player"),
                    (d.player.isActive = !1),
                    d.trigger("onPlayEnd");
                };
              !0 === e || (!d.player.isActive && !1 !== e)
                ? d.current &&
                  (d.current.loop || d.current.index < d.group.length - 1) &&
                  ((d.player.isActive = !0),
                  c.bind({
                    "onCancel.player beforeClose.player": i,
                    "onUpdate.player": n,
                    "beforeLoad.player": t,
                  }),
                  n(),
                  d.trigger("onPlayStart"))
                : i();
            },
            next: function (e) {
              var t = d.current;
              t &&
                (v(e) || (e = t.direction.next),
                d.jumpto(t.index + 1, e, "next"));
            },
            prev: function (e) {
              var t = d.current;
              t &&
                (v(e) || (e = t.direction.prev),
                d.jumpto(t.index - 1, e, "prev"));
            },
            jumpto: function (e, t, n) {
              var i = d.current;
              i &&
                ((e = m(e)),
                (d.direction =
                  t || i.direction[e >= i.index ? "next" : "prev"]),
                (d.router = n || "jumpto"),
                i.loop &&
                  (0 > e && (e = i.group.length + (e % i.group.length)),
                  (e %= i.group.length)),
                i.group[e] !== o && (d.cancel(), d._start(e)));
            },
            reposition: function (e, t) {
              var n,
                i = d.current,
                r = i ? i.wrap : null;
              r &&
                ((n = d._getPosition(t)),
                e && "scroll" === e.type
                  ? (delete n.position, r.stop(!0, !0).animate(n, 200))
                  : (r.css(n), (i.pos = a.extend({}, i.dim, n))));
            },
            update: function (e) {
              var t = e && e.originalEvent && e.originalEvent.type,
                n = !t || "orientationchange" === t;
              n && (clearTimeout(p), (p = null)),
                d.isOpen &&
                  !p &&
                  (p = setTimeout(
                    function () {
                      var i = d.current;
                      i &&
                        !d.isClosing &&
                        (d.wrap.removeClass("fancybox-tmp"),
                        (n ||
                          "load" === t ||
                          ("resize" === t && i.autoResize)) &&
                          d._setDimension(),
                        ("scroll" === t && i.canShrink) || d.reposition(e),
                        d.trigger("onUpdate"),
                        (p = null));
                    },
                    n && !f ? 0 : 300,
                  ));
            },
            toggle: function (e) {
              d.isOpen &&
                ((d.current.fitToView =
                  "boolean" === a.type(e) ? e : !d.current.fitToView),
                f &&
                  (d.wrap.removeAttr("style").addClass("fancybox-tmp"),
                  d.trigger("onUpdate")),
                d.update());
            },
            hideLoading: function () {
              c.unbind(".loading"), a("#fancybox-loading").remove();
            },
            showLoading: function () {
              var e, t;
              d.hideLoading(),
                (e = a(d.opts.tpl.loading).click(d.cancel).appendTo("body")),
                c.bind("keydown.loading", function (e) {
                  27 === (e.which || e.keyCode) &&
                    (e.preventDefault(), d.cancel());
                }),
                d.defaults.fixed ||
                  ((t = d.getViewport()),
                  e.css({
                    position: "absolute",
                    top: 0.5 * t.h + t.y,
                    left: 0.5 * t.w + t.x,
                  })),
                d.trigger("onLoading");
            },
            getViewport: function () {
              var e = (d.current && d.current.locked) || !1,
                t = { x: l.scrollLeft(), y: l.scrollTop() };
              return (
                e && e.length
                  ? ((t.w = e[0].clientWidth), (t.h = e[0].clientHeight))
                  : ((t.w = f && i.innerWidth ? i.innerWidth : l.width()),
                    (t.h = f && i.innerHeight ? i.innerHeight : l.height())),
                t
              );
            },
            unbindEvents: function () {
              d.wrap && h(d.wrap) && d.wrap.unbind(".fb"),
                c.unbind(".fb"),
                l.unbind(".fb");
            },
            bindEvents: function () {
              var e,
                t = d.current;
              t &&
                (l.bind(
                  "orientationchange.fb" +
                    (f ? "" : " resize.fb") +
                    (t.autoCenter && !t.locked ? " scroll.fb" : ""),
                  d.update,
                ),
                (e = t.keys) &&
                  c.bind("keydown.fb", function (n) {
                    var i = n.which || n.keyCode,
                      r = n.target || n.srcElement;
                    if (27 === i && d.coming) return !1;
                    n.ctrlKey ||
                      n.altKey ||
                      n.shiftKey ||
                      n.metaKey ||
                      (r && (r.type || a(r).is("[contenteditable]"))) ||
                      a.each(e, function (e, r) {
                        return 1 < t.group.length && r[i] !== o
                          ? (d[e](r[i]), n.preventDefault(), !1)
                          : -1 < a.inArray(i, r)
                          ? (d[e](), n.preventDefault(), !1)
                          : void 0;
                      });
                  }),
                a.fn.mousewheel &&
                  t.mouseWheel &&
                  d.wrap.bind("mousewheel.fb", function (e, n, i, r) {
                    for (
                      var o = a(e.target || null), s = !1;
                      o.length &&
                      !(s || o.is(".fancybox-skin") || o.is(".fancybox-wrap"));

                    )
                      (s =
                        (s = o[0]) &&
                        !(s.style.overflow && "hidden" === s.style.overflow) &&
                        ((s.clientWidth && s.scrollWidth > s.clientWidth) ||
                          (s.clientHeight && s.scrollHeight > s.clientHeight))),
                        (o = a(o).parent());
                    0 !== n &&
                      !s &&
                      1 < d.group.length &&
                      !t.canShrink &&
                      (0 < r || 0 < i
                        ? d.prev(0 < r ? "down" : "left")
                        : (0 > r || 0 > i) && d.next(0 > r ? "up" : "right"),
                      e.preventDefault());
                  }));
            },
            trigger: function (e, t) {
              var n,
                i = t || d.coming || d.current;
              if (i) {
                if (
                  (a.isFunction(i[e]) &&
                    (n = i[e].apply(
                      i,
                      Array.prototype.slice.call(arguments, 1),
                    )),
                  !1 === n)
                )
                  return !1;
                i.helpers &&
                  a.each(i.helpers, function (t, n) {
                    n &&
                      d.helpers[t] &&
                      a.isFunction(d.helpers[t][e]) &&
                      d.helpers[t][e](
                        a.extend(!0, {}, d.helpers[t].defaults, n),
                        i,
                      );
                  });
              }
              c.trigger(e);
            },
            isImage: function (e) {
              return (
                v(e) &&
                e.match(
                  /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i,
                )
              );
            },
            isSWF: function (e) {
              return v(e) && e.match(/\.(swf)((\?|#).*)?$/i);
            },
            _start: function (e) {
              var t,
                n,
                i = {};
              if (((e = m(e)), !(t = d.group[e] || null))) return !1;
              if (
                ((t = (i = a.extend(!0, {}, d.opts, t)).margin),
                (n = i.padding),
                "number" === a.type(t) && (i.margin = [t, t, t, t]),
                "number" === a.type(n) && (i.padding = [n, n, n, n]),
                i.modal &&
                  a.extend(!0, i, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: { overlay: { closeClick: !1 } },
                  }),
                i.autoSize && (i.autoWidth = i.autoHeight = !0),
                "auto" === i.width && (i.autoWidth = !0),
                "auto" === i.height && (i.autoHeight = !0),
                (i.group = d.group),
                (i.index = e),
                (d.coming = i),
                !1 === d.trigger("beforeLoad"))
              )
                d.coming = null;
              else {
                if (((n = i.type), (t = i.href), !n))
                  return (
                    (d.coming = null),
                    !(!d.current || !d.router || "jumpto" === d.router) &&
                      ((d.current.index = e), d[d.router](d.direction))
                  );
                if (
                  ((d.isActive = !0),
                  ("image" !== n && "swf" !== n) ||
                    ((i.autoHeight = i.autoWidth = !1),
                    (i.scrolling = "visible")),
                  "image" === n && (i.aspectRatio = !0),
                  "iframe" === n && f && (i.scrolling = "scroll"),
                  (i.wrap = a(i.tpl.wrap)
                    .addClass(
                      "fancybox-" +
                        (f ? "mobile" : "desktop") +
                        " fancybox-type-" +
                        n +
                        " fancybox-tmp " +
                        i.wrapCSS,
                    )
                    .appendTo(i.parent || "body")),
                  a.extend(i, {
                    skin: a(".fancybox-skin", i.wrap),
                    outer: a(".fancybox-outer", i.wrap),
                    inner: a(".fancybox-inner", i.wrap),
                  }),
                  a.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                    i.skin.css("padding" + t, y(i.padding[e]));
                  }),
                  d.trigger("onReady"),
                  "inline" === n || "html" === n)
                ) {
                  if (!i.content || !i.content.length)
                    return d._error("content");
                } else if (!t) return d._error("href");
                "image" === n
                  ? d._loadImage()
                  : "ajax" === n
                  ? d._loadAjax()
                  : "iframe" === n
                  ? d._loadIframe()
                  : d._afterLoad();
              }
            },
            _error: function (e) {
              a.extend(d.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: d.coming.tpl.error,
              }),
                d._afterLoad();
            },
            _loadImage: function () {
              var e = (d.imgPreload = new Image());
              (e.onload = function () {
                (this.onload = this.onerror = null),
                  (d.coming.width = this.width / d.opts.pixelRatio),
                  (d.coming.height = this.height / d.opts.pixelRatio),
                  d._afterLoad();
              }),
                (e.onerror = function () {
                  (this.onload = this.onerror = null), d._error("image");
                }),
                (e.src = d.coming.href),
                !0 !== e.complete && d.showLoading();
            },
            _loadAjax: function () {
              var e = d.coming;
              d.showLoading(),
                (d.ajaxLoad = a.ajax(
                  a.extend({}, e.ajax, {
                    url: e.href,
                    error: function (e, t) {
                      d.coming && "abort" !== t
                        ? d._error("ajax", e)
                        : d.hideLoading();
                    },
                    success: function (t, n) {
                      "success" === n && ((e.content = t), d._afterLoad());
                    },
                  }),
                ));
            },
            _loadIframe: function () {
              var e = d.coming,
                t = a(e.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                  .attr("scrolling", f ? "auto" : e.iframe.scrolling)
                  .attr("src", e.href);
              a(e.wrap).bind("onReset", function () {
                try {
                  a(this)
                    .find("iframe")
                    .hide()
                    .attr("src", "//about:blank")
                    .end()
                    .empty();
                } catch (e) {}
              }),
                e.iframe.preload &&
                  (d.showLoading(),
                  t.one("load", function () {
                    a(this).data("ready", 1),
                      f || a(this).bind("load.fb", d.update),
                      a(this)
                        .parents(".fancybox-wrap")
                        .width("100%")
                        .removeClass("fancybox-tmp")
                        .show(),
                      d._afterLoad();
                  })),
                (e.content = t.appendTo(e.inner)),
                e.iframe.preload || d._afterLoad();
            },
            _preloadImages: function () {
              var e,
                t,
                n = d.group,
                i = d.current,
                r = n.length,
                a = i.preload ? Math.min(i.preload, r - 1) : 0;
              for (t = 1; t <= a; t += 1)
                "image" === (e = n[(i.index + t) % r]).type &&
                  e.href &&
                  (new Image().src = e.href);
            },
            _afterLoad: function () {
              var e,
                t,
                n,
                i,
                r,
                o = d.coming,
                s = d.current;
              if ((d.hideLoading(), o && !1 !== d.isActive))
                if (!1 === d.trigger("afterLoad", o, s))
                  o.wrap.stop(!0).trigger("onReset").remove(),
                    (d.coming = null);
                else {
                  switch (
                    (s &&
                      (d.trigger("beforeChange", s),
                      s.wrap
                        .stop(!0)
                        .removeClass("fancybox-opened")
                        .find(".fancybox-item, .fancybox-nav")
                        .remove()),
                    d.unbindEvents(),
                    (e = o.content),
                    (t = o.type),
                    (n = o.scrolling),
                    a.extend(d, {
                      wrap: o.wrap,
                      skin: o.skin,
                      outer: o.outer,
                      inner: o.inner,
                      current: o,
                      previous: s,
                    }),
                    (i = o.href),
                    t)
                  ) {
                    case "inline":
                    case "ajax":
                    case "html":
                      o.selector
                        ? (e = a("<div>").html(e).find(o.selector))
                        : h(e) &&
                          (e.data("fancybox-placeholder") ||
                            e.data(
                              "fancybox-placeholder",
                              a('<div class="fancybox-placeholder"></div>')
                                .insertAfter(e)
                                .hide(),
                            ),
                          (e = e.show().detach()),
                          o.wrap.bind("onReset", function () {
                            a(this).find(e).length &&
                              e
                                .hide()
                                .replaceAll(e.data("fancybox-placeholder"))
                                .data("fancybox-placeholder", !1);
                          }));
                      break;
                    case "image":
                      e = o.tpl.image.replace(/\{href\}/g, i);
                      break;
                    case "swf":
                      (e =
                        '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                        i +
                        '"></param>'),
                        (r = ""),
                        a.each(o.swf, function (t, n) {
                          (e +=
                            '<param name="' +
                            t +
                            '" value="' +
                            n +
                            '"></param>'),
                            (r += " " + t + '="' + n + '"');
                        }),
                        (e +=
                          '<embed src="' +
                          i +
                          '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                          r +
                          "></embed></object>");
                  }
                  (h(e) && e.parent().is(o.inner)) || o.inner.append(e),
                    d.trigger("beforeShow"),
                    o.inner.css(
                      "overflow",
                      "yes" === n ? "scroll" : "no" === n ? "hidden" : n,
                    ),
                    d._setDimension(),
                    d.reposition(),
                    (d.isOpen = !1),
                    (d.coming = null),
                    d.bindEvents(),
                    d.isOpened
                      ? s.prevMethod && d.transitions[s.prevMethod]()
                      : a(".fancybox-wrap")
                          .not(o.wrap)
                          .stop(!0)
                          .trigger("onReset")
                          .remove(),
                    d.transitions[d.isOpened ? o.nextMethod : o.openMethod](),
                    d._preloadImages();
                }
            },
            _setDimension: function () {
              var e,
                t = d.getViewport(),
                n = 0,
                i = d.wrap,
                r = d.skin,
                o = d.inner,
                s = d.current;
              e = s.width;
              var l,
                c,
                u,
                p,
                f,
                h,
                v,
                w,
                b,
                x = s.height,
                C = s.minWidth,
                T = s.minHeight,
                k = s.maxWidth,
                E = s.maxHeight,
                S = s.scrolling,
                A = s.scrollOutside ? s.scrollbarWidth : 0,
                M = s.margin,
                P = m(M[1] + M[3]),
                L = m(M[0] + M[2]);
              if (
                (i
                  .add(r)
                  .add(o)
                  .width("auto")
                  .height("auto")
                  .removeClass("fancybox-tmp"),
                (c = P + (M = m(r.outerWidth(!0) - r.width()))),
                (u = L + (l = m(r.outerHeight(!0) - r.height()))),
                (p = g(e) ? ((t.w - c) * m(e)) / 100 : e),
                (f = g(x) ? ((t.h - u) * m(x)) / 100 : x),
                "iframe" === s.type)
              ) {
                if (
                  ((b = s.content), s.autoHeight && b && 1 === b.data("ready"))
                )
                  try {
                    b[0].contentWindow.document.location &&
                      (o.width(p).height(9999),
                      (h = b.contents().find("body")),
                      A && h.css("overflow-x", "hidden"),
                      (f = h.outerHeight(!0)));
                  } catch (e) {}
              } else
                (s.autoWidth || s.autoHeight) &&
                  (o.addClass("fancybox-tmp"),
                  s.autoWidth || o.width(p),
                  s.autoHeight || o.height(f),
                  s.autoWidth && (p = o.width()),
                  s.autoHeight && (f = o.height()),
                  o.removeClass("fancybox-tmp"));
              if (
                ((e = m(p)),
                (x = m(f)),
                (w = p / f),
                (C = m(g(C) ? m(C, "w") - c : C)),
                (k = m(g(k) ? m(k, "w") - c : k)),
                (T = m(g(T) ? m(T, "h") - u : T)),
                (h = k),
                (v = E = m(g(E) ? m(E, "h") - u : E)),
                s.fitToView &&
                  ((k = Math.min(t.w - c, k)), (E = Math.min(t.h - u, E))),
                (c = t.w - P),
                (L = t.h - L),
                s.aspectRatio
                  ? (e > k && (x = m((e = k) / w)),
                    x > E && (e = m((x = E) * w)),
                    e < C && (x = m((e = C) / w)),
                    x < T && (e = m((x = T) * w)))
                  : ((e = Math.max(C, Math.min(e, k))),
                    s.autoHeight &&
                      "iframe" !== s.type &&
                      (o.width(e), (x = o.height())),
                    (x = Math.max(T, Math.min(x, E)))),
                s.fitToView)
              )
                if (
                  (o.width(e).height(x),
                  i.width(e + M),
                  (t = i.width()),
                  (P = i.height()),
                  s.aspectRatio)
                )
                  for (; (t > c || P > L) && e > C && x > T && !(19 < n++); )
                    (x = Math.max(T, Math.min(E, x - 10))),
                      (e = m(x * w)) < C && (x = m((e = C) / w)),
                      e > k && (x = m((e = k) / w)),
                      o.width(e).height(x),
                      i.width(e + M),
                      (t = i.width()),
                      (P = i.height());
                else
                  (e = Math.max(C, Math.min(e, e - (t - c)))),
                    (x = Math.max(T, Math.min(x, x - (P - L))));
              A && "auto" === S && x < f && e + M + A < c && (e += A),
                o.width(e).height(x),
                i.width(e + M),
                (t = i.width()),
                (P = i.height()),
                (n = (t > c || P > L) && e > C && x > T),
                (e = s.aspectRatio
                  ? e < h && x < v && e < p && x < f
                  : (e < h || x < v) && (e < p || x < f)),
                a.extend(s, {
                  dim: { width: y(t), height: y(P) },
                  origWidth: p,
                  origHeight: f,
                  canShrink: n,
                  canExpand: e,
                  wPadding: M,
                  hPadding: l,
                  wrapSpace: P - r.outerHeight(!0),
                  skinSpace: r.height() - x,
                }),
                !b && s.autoHeight && x > T && x < E && !e && o.height("auto");
            },
            _getPosition: function (e) {
              var t = d.current,
                n = d.getViewport(),
                i = t.margin,
                r = d.wrap.width() + i[1] + i[3],
                a = d.wrap.height() + i[0] + i[2];
              return (
                (i = { position: "absolute", top: i[0], left: i[3] }),
                t.autoCenter && t.fixed && !e && a <= n.h && r <= n.w
                  ? (i.position = "fixed")
                  : t.locked || ((i.top += n.y), (i.left += n.x)),
                (i.top = y(Math.max(i.top, i.top + (n.h - a) * t.topRatio))),
                (i.left = y(
                  Math.max(i.left, i.left + (n.w - r) * t.leftRatio),
                )),
                i
              );
            },
            _afterZoomIn: function () {
              var e = d.current;
              e &&
                ((d.isOpen = d.isOpened = !0),
                d.wrap
                  .css("overflow", "visible")
                  .addClass("fancybox-opened")
                  .hide()
                  .show(0),
                d.update(),
                (e.closeClick || (e.nextClick && 1 < d.group.length)) &&
                  d.inner
                    .css("cursor", "pointer")
                    .bind("click.fb", function (t) {
                      a(t.target).is("a") ||
                        a(t.target).parent().is("a") ||
                        (t.preventDefault(),
                        d[e.closeClick ? "close" : "next"]());
                    }),
                e.closeBtn &&
                  a(e.tpl.closeBtn)
                    .appendTo(d.skin)
                    .bind("click.fb", function (e) {
                      e.preventDefault(), d.close();
                    }),
                e.arrows &&
                  1 < d.group.length &&
                  ((e.loop || 0 < e.index) &&
                    a(e.tpl.prev).appendTo(d.outer).bind("click.fb", d.prev),
                  (e.loop || e.index < d.group.length - 1) &&
                    a(e.tpl.next).appendTo(d.outer).bind("click.fb", d.next)),
                d.trigger("afterShow"),
                e.loop || e.index !== e.group.length - 1
                  ? d.opts.autoPlay &&
                    !d.player.isActive &&
                    ((d.opts.autoPlay = !1), d.play(!0))
                  : d.play(!1));
            },
            _afterZoomOut: function (e) {
              (e = e || d.current),
                a(".fancybox-wrap").trigger("onReset").remove(),
                a.extend(d, {
                  group: {},
                  opts: {},
                  router: !1,
                  current: null,
                  isActive: !1,
                  isOpened: !1,
                  isOpen: !1,
                  isClosing: !1,
                  wrap: null,
                  skin: null,
                  outer: null,
                  inner: null,
                }),
                d.trigger("afterClose", e);
            },
          }),
          (d.transitions = {
            getOrigPosition: function () {
              var e = d.current,
                t = e.element,
                n = e.orig,
                i = {},
                r = 50,
                a = 50,
                o = e.hPadding,
                s = e.wPadding,
                l = d.getViewport();
              return (
                !n &&
                  e.isDom &&
                  t.is(":visible") &&
                  ((n = t.find("img:first")).length || (n = t)),
                h(n)
                  ? ((i = n.offset()),
                    n.is("img") &&
                      ((r = n.outerWidth()), (a = n.outerHeight())))
                  : ((i.top = l.y + (l.h - a) * e.topRatio),
                    (i.left = l.x + (l.w - r) * e.leftRatio)),
                ("fixed" === d.wrap.css("position") || e.locked) &&
                  ((i.top -= l.y), (i.left -= l.x)),
                {
                  top: y(i.top - o * e.topRatio),
                  left: y(i.left - s * e.leftRatio),
                  width: y(r + s),
                  height: y(a + o),
                }
              );
            },
            step: function (e, t) {
              var n,
                i,
                r = t.prop,
                a = (i = d.current).wrapSpace,
                o = i.skinSpace;
              ("width" !== r && "height" !== r) ||
                ((n =
                  t.end === t.start ? 1 : (e - t.start) / (t.end - t.start)),
                d.isClosing && (n = 1 - n),
                (i = e - (i = "width" === r ? i.wPadding : i.hPadding)),
                d.skin[r](m("width" === r ? i : i - a * n)),
                d.inner[r](m("width" === r ? i : i - a * n - o * n)));
            },
            zoomIn: function () {
              var e = d.current,
                t = e.pos,
                n = e.openEffect,
                i = "elastic" === n,
                r = a.extend({ opacity: 1 }, t);
              delete r.position,
                i
                  ? ((t = this.getOrigPosition()),
                    e.openOpacity && (t.opacity = 0.1))
                  : "fade" === n && (t.opacity = 0.1),
                d.wrap
                  .css(t)
                  .animate(r, {
                    duration: "none" === n ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: i ? this.step : null,
                    complete: d._afterZoomIn,
                  });
            },
            zoomOut: function () {
              var e = d.current,
                t = e.closeEffect,
                n = "elastic" === t,
                i = { opacity: 0.1 };
              n &&
                ((i = this.getOrigPosition()),
                e.closeOpacity && (i.opacity = 0.1)),
                d.wrap.animate(i, {
                  duration: "none" === t ? 0 : e.closeSpeed,
                  easing: e.closeEasing,
                  step: n ? this.step : null,
                  complete: d._afterZoomOut,
                });
            },
            changeIn: function () {
              var e,
                t = d.current,
                n = t.nextEffect,
                i = t.pos,
                r = { opacity: 1 },
                a = d.direction;
              (i.opacity = 0.1),
                "elastic" === n &&
                  ((e = "down" === a || "up" === a ? "top" : "left"),
                  "down" === a || "right" === a
                    ? ((i[e] = y(m(i[e]) - 200)), (r[e] = "+=200px"))
                    : ((i[e] = y(m(i[e]) + 200)), (r[e] = "-=200px"))),
                "none" === n
                  ? d._afterZoomIn()
                  : d.wrap
                      .css(i)
                      .animate(r, {
                        duration: t.nextSpeed,
                        easing: t.nextEasing,
                        complete: d._afterZoomIn,
                      });
            },
            changeOut: function () {
              var e = d.previous,
                t = e.prevEffect,
                n = { opacity: 0.1 },
                i = d.direction;
              "elastic" === t &&
                (n["down" === i || "up" === i ? "top" : "left"] =
                  ("up" === i || "left" === i ? "-" : "+") + "=200px"),
                e.wrap.animate(n, {
                  duration: "none" === t ? 0 : e.prevSpeed,
                  easing: e.prevEasing,
                  complete: function () {
                    a(this).trigger("onReset").remove();
                  },
                });
            },
          }),
          (d.helpers.overlay = {
            defaults: {
              closeClick: !0,
              speedOut: 200,
              showEarly: !0,
              css: {},
              locked: !f,
              fixed: !0,
            },
            overlay: null,
            fixed: !1,
            el: a("html"),
            create: function (e) {
              var t;
              (e = a.extend({}, this.defaults, e)),
                this.overlay && this.close(),
                (t = d.coming ? d.coming.parent : e.parent),
                (this.overlay = a(
                  '<div class="fancybox-overlay"></div>',
                ).appendTo(t && t.length ? t : "body")),
                (this.fixed = !1),
                e.fixed &&
                  d.defaults.fixed &&
                  (this.overlay.addClass("fancybox-overlay-fixed"),
                  (this.fixed = !0));
            },
            open: function (e) {
              var t = this;
              (e = a.extend({}, this.defaults, e)),
                this.overlay
                  ? this.overlay.unbind(".overlay").width("auto").height("auto")
                  : this.create(e),
                this.fixed ||
                  (l.bind("resize.overlay", a.proxy(this.update, this)),
                  this.update()),
                e.closeClick &&
                  this.overlay.bind("click.overlay", function (e) {
                    if (a(e.target).hasClass("fancybox-overlay"))
                      return d.isActive ? d.close() : t.close(), !1;
                  }),
                this.overlay.css(e.css).show();
            },
            close: function () {
              l.unbind("resize.overlay"),
                this.el.hasClass("fancybox-lock") &&
                  (a(".fancybox-margin").removeClass("fancybox-margin"),
                  this.el.removeClass("fancybox-lock"),
                  l.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
                a(".fancybox-overlay").remove().hide(),
                a.extend(this, { overlay: null, fixed: !1 });
            },
            update: function () {
              var e,
                t = "100%";
              this.overlay.width(t).height("100%"),
                u
                  ? ((e = Math.max(
                      r.documentElement.offsetWidth,
                      r.body.offsetWidth,
                    )),
                    c.width() > e && (t = c.width()))
                  : c.width() > l.width() && (t = c.width()),
                this.overlay.width(t).height(c.height());
            },
            onReady: function (e, t) {
              var n = this.overlay;
              a(".fancybox-overlay").stop(!0, !0),
                n || this.create(e),
                e.locked &&
                  this.fixed &&
                  t.fixed &&
                  ((t.locked = this.overlay.append(t.wrap)), (t.fixed = !1)),
                !0 === e.showEarly && this.beforeShow.apply(this, arguments);
            },
            beforeShow: function (e, t) {
              t.locked &&
                !this.el.hasClass("fancybox-lock") &&
                (!1 !== this.fixPosition &&
                  a("*:not(object)")
                    .filter(function () {
                      return (
                        "fixed" === a(this).css("position") &&
                        !a(this).hasClass("fancybox-overlay") &&
                        !a(this).hasClass("fancybox-wrap")
                      );
                    })
                    .addClass("fancybox-margin"),
                this.el.addClass("fancybox-margin"),
                (this.scrollV = l.scrollTop()),
                (this.scrollH = l.scrollLeft()),
                this.el.addClass("fancybox-lock"),
                l.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
                this.open(e);
            },
            onUpdate: function () {
              this.fixed || this.update();
            },
            afterClose: function (e) {
              this.overlay &&
                !d.coming &&
                this.overlay.fadeOut(e.speedOut, a.proxy(this.close, this));
            },
          }),
          (d.helpers.title = {
            defaults: { type: "float", position: "bottom" },
            beforeShow: function (e) {
              var t = d.current,
                n = t.title,
                i = e.type;
              if (
                (a.isFunction(n) && (n = n.call(t.element, t)),
                v(n) && "" !== a.trim(n))
              ) {
                switch (
                  ((t = a(
                    '<div class="fancybox-title fancybox-title-' +
                      i +
                      '-wrap">' +
                      n +
                      "</div>",
                  )),
                  i)
                ) {
                  case "inside":
                    i = d.skin;
                    break;
                  case "outside":
                    i = d.wrap;
                    break;
                  case "over":
                    i = d.inner;
                    break;
                  default:
                    (i = d.skin),
                      t.appendTo("body"),
                      u && t.width(t.width()),
                      t.wrapInner('<span class="child"></span>'),
                      (d.current.margin[2] += Math.abs(
                        m(t.css("margin-bottom")),
                      ));
                }
                t["top" === e.position ? "prependTo" : "appendTo"](i);
              }
            },
          }),
          (a.fn.fancybox = function (e) {
            var t,
              n = a(this),
              i = this.selector || "",
              r = function (r) {
                var o,
                  s,
                  l = a(this).blur(),
                  c = t;
                r.ctrlKey ||
                  r.altKey ||
                  r.shiftKey ||
                  r.metaKey ||
                  l.is(".fancybox-wrap") ||
                  ((o = e.groupAttr || "data-fancybox-group"),
                  (s = l.attr(o)) || ((o = "rel"), (s = l.get(0)[o])),
                  s &&
                    "" !== s &&
                    "nofollow" !== s &&
                    (c = (l = (l = i.length ? a(i) : n).filter(
                      "[" + o + '="' + s + '"]',
                    )).index(this)),
                  (e.index = c),
                  !1 !== d.open(l, e) && r.preventDefault());
              };
            return (
              (t = (e = e || {}).index || 0),
              i && !1 !== e.live
                ? c
                    .undelegate(i, "click.fb-start")
                    .delegate(
                      i + ":not('.fancybox-item, .fancybox-nav')",
                      "click.fb-start",
                      r,
                    )
                : n.unbind("click.fb-start").bind("click.fb-start", r),
              this.filter("[data-fancybox-start=1]").trigger("click"),
              this
            );
          }),
          c.ready(function () {
            var e, t;
            a.scrollbarWidth === o &&
              (a.scrollbarWidth = function () {
                var e = a(
                    '<div style="width:50px;height:50px;overflow:auto"><div/></div>',
                  ).appendTo("body"),
                  t =
                    (t = e.children()).innerWidth() - t.height(99).innerWidth();
                return e.remove(), t;
              }),
              a.support.fixedPosition === o &&
                (a.support.fixedPosition = (function () {
                  var e = a(
                      '<div style="position:fixed;top:20px;"></div>',
                    ).appendTo("body"),
                    t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                  return e.remove(), t;
                })()),
              a.extend(d.defaults, {
                scrollbarWidth: a.scrollbarWidth(),
                fixed: a.support.fixedPosition,
                parent: a("body"),
              }),
              (e = a(i).width()),
              s.addClass("fancybox-lock-test"),
              (t = a(i).width()),
              s.removeClass("fancybox-lock-test"),
              a(
                "<style type='text/css'>.fancybox-margin{margin-right:" +
                  (t - e) +
                  "px;}</style>",
              ).appendTo("head");
          });
      },
      531: (e, t, n) => {
        var i, r, a;
        (r = [n(755)]),
          void 0 ===
            (a =
              "function" ==
              typeof (i = function (e) {
                var t,
                  n = navigator.userAgent,
                  i = /iphone/i.test(n),
                  r = /chrome/i.test(n),
                  a = /android/i.test(n);
                (e.mask = {
                  definitions: {
                    9: "[0-9]",
                    a: "[A-Za-z]",
                    "*": "[A-Za-z0-9]",
                  },
                  autoclear: !0,
                  dataName: "rawMaskFn",
                  placeholder: "_",
                }),
                  e.fn.extend({
                    caret: function (e, t) {
                      var n;
                      if (0 !== this.length && !this.is(":hidden"))
                        return "number" == typeof e
                          ? ((t = "number" == typeof t ? t : e),
                            this.each(function () {
                              this.setSelectionRange
                                ? this.setSelectionRange(e, t)
                                : this.createTextRange &&
                                  ((n = this.createTextRange()).collapse(!0),
                                  n.moveEnd("character", t),
                                  n.moveStart("character", e),
                                  n.select());
                            }))
                          : (this[0].setSelectionRange
                              ? ((e = this[0].selectionStart),
                                (t = this[0].selectionEnd))
                              : document.selection &&
                                document.selection.createRange &&
                                ((n = document.selection.createRange()),
                                (e =
                                  0 -
                                  n.duplicate().moveStart("character", -1e5)),
                                (t = e + n.text.length)),
                            { begin: e, end: t });
                    },
                    unmask: function () {
                      return this.trigger("unmask");
                    },
                    mask: function (n, o) {
                      var s, l, c, d, u, p, f;
                      if (!n && this.length > 0) {
                        var h = e(this[0]).data(e.mask.dataName);
                        return h ? h() : void 0;
                      }
                      return (
                        (o = e.extend(
                          {
                            autoclear: e.mask.autoclear,
                            placeholder: e.mask.placeholder,
                            completed: null,
                          },
                          o,
                        )),
                        (s = e.mask.definitions),
                        (l = []),
                        (c = p = n.length),
                        (d = null),
                        e.each(n.split(""), function (e, t) {
                          "?" == t
                            ? (p--, (c = e))
                            : s[t]
                            ? (l.push(new RegExp(s[t])),
                              null === d && (d = l.length - 1),
                              c > e && (u = l.length - 1))
                            : l.push(null);
                        }),
                        this.trigger("unmask").each(function () {
                          function h() {
                            if (o.completed) {
                              for (var e = d; u >= e; e++)
                                if (l[e] && T[e] === v(e)) return;
                              o.completed.call(C);
                            }
                          }
                          function v(e) {
                            return o.placeholder.charAt(
                              e < o.placeholder.length ? e : 0,
                            );
                          }
                          function g(e) {
                            for (; ++e < p && !l[e]; );
                            return e;
                          }
                          function m(e, t) {
                            var n, i;
                            if (!(0 > e)) {
                              for (n = e, i = g(t); p > n; n++)
                                if (l[n]) {
                                  if (!(p > i && l[n].test(T[i]))) break;
                                  (T[n] = T[i]), (T[i] = v(i)), (i = g(i));
                                }
                              b(), C.caret(Math.max(d, e));
                            }
                          }
                          function y() {
                            x(), C.val() != E && C.change();
                          }
                          function w(e, t) {
                            var n;
                            for (n = e; t > n && p > n; n++)
                              l[n] && (T[n] = v(n));
                          }
                          function b() {
                            C.val(T.join(""));
                          }
                          function x(e) {
                            var t,
                              n,
                              i,
                              r = C.val(),
                              a = -1;
                            for (t = 0, i = 0; p > t; t++)
                              if (l[t]) {
                                for (T[t] = v(t); i++ < r.length; )
                                  if (((n = r.charAt(i - 1)), l[t].test(n))) {
                                    (T[t] = n), (a = t);
                                    break;
                                  }
                                if (i > r.length) {
                                  w(t + 1, p);
                                  break;
                                }
                              } else
                                T[t] === r.charAt(i) && i++, c > t && (a = t);
                            return (
                              e
                                ? b()
                                : c > a + 1
                                ? o.autoclear || T.join("") === k
                                  ? (C.val() && C.val(""), w(0, p))
                                  : b()
                                : (b(), C.val(C.val().substring(0, a + 1))),
                              c ? t : d
                            );
                          }
                          var C = e(this),
                            T = e.map(n.split(""), function (e, t) {
                              return "?" != e ? (s[e] ? v(t) : e) : void 0;
                            }),
                            k = T.join(""),
                            E = C.val();
                          C.data(e.mask.dataName, function () {
                            return e
                              .map(T, function (e, t) {
                                return l[t] && e != v(t) ? e : null;
                              })
                              .join("");
                          }),
                            C.one("unmask", function () {
                              C.off(".mask").removeData(e.mask.dataName);
                            })
                              .on("focus.mask", function () {
                                var e;
                                C.prop("readonly") ||
                                  (clearTimeout(t),
                                  (E = C.val()),
                                  (e = x()),
                                  (t = setTimeout(function () {
                                    C.get(0) === document.activeElement &&
                                      (b(),
                                      e == n.replace("?", "").length
                                        ? C.caret(0, e)
                                        : C.caret(e));
                                  }, 10)));
                              })
                              .on("blur.mask", y)
                              .on("keydown.mask", function (e) {
                                if (!C.prop("readonly")) {
                                  var t,
                                    n,
                                    r,
                                    a = e.which || e.keyCode;
                                  (f = C.val()),
                                    8 === a || 46 === a || (i && 127 === a)
                                      ? ((n = (t = C.caret()).begin),
                                        (r = t.end) - n == 0 &&
                                          ((n =
                                            46 !== a
                                              ? (function (e) {
                                                  for (; --e >= 0 && !l[e]; );
                                                  return e;
                                                })(n)
                                              : (r = g(n - 1))),
                                          (r = 46 === a ? g(r) : r)),
                                        w(n, r),
                                        m(n, r - 1),
                                        e.preventDefault())
                                      : 13 === a
                                      ? y.call(this, e)
                                      : 27 === a &&
                                        (C.val(E),
                                        C.caret(0, x()),
                                        e.preventDefault());
                                }
                              })
                              .on("keypress.mask", function (t) {
                                if (!C.prop("readonly")) {
                                  var n,
                                    i,
                                    r,
                                    o = t.which || t.keyCode,
                                    s = C.caret();
                                  t.ctrlKey ||
                                    t.altKey ||
                                    t.metaKey ||
                                    32 > o ||
                                    !o ||
                                    13 === o ||
                                    (s.end - s.begin != 0 &&
                                      (w(s.begin, s.end),
                                      m(s.begin, s.end - 1)),
                                    (n = g(s.begin - 1)),
                                    p > n &&
                                      ((i = String.fromCharCode(o)),
                                      l[n].test(i)) &&
                                      ((function (e) {
                                        var t, n, i, r;
                                        for (t = e, n = v(e); p > t; t++)
                                          if (l[t]) {
                                            if (
                                              ((i = g(t)),
                                              (r = T[t]),
                                              (T[t] = n),
                                              !(p > i && l[i].test(r)))
                                            )
                                              break;
                                            n = r;
                                          }
                                      })(n),
                                      (T[n] = i),
                                      b(),
                                      (r = g(n)),
                                      a
                                        ? setTimeout(function () {
                                            e.proxy(e.fn.caret, C, r)();
                                          }, 0)
                                        : C.caret(r),
                                      s.begin <= u && h()),
                                    t.preventDefault());
                                }
                              })
                              .on("input.mask paste.mask", function () {
                                C.prop("readonly") ||
                                  setTimeout(function () {
                                    var e = x(!0);
                                    C.caret(e), h();
                                  }, 0);
                              }),
                            r &&
                              a &&
                              C.off("input.mask").on("input.mask", function () {
                                var e = C.val(),
                                  t = C.caret();
                                if (f && f.length && f.length > e.length) {
                                  for (x(!0); t.begin > 0 && !l[t.begin - 1]; )
                                    t.begin--;
                                  if (0 === t.begin)
                                    for (; t.begin < d && !l[t.begin]; )
                                      t.begin++;
                                  C.caret(t.begin, t.begin);
                                } else {
                                  for (x(!0); t.begin < p && !l[t.begin]; )
                                    t.begin++;
                                  C.caret(t.begin, t.begin);
                                }
                                h();
                              }),
                            x();
                        })
                      );
                    },
                  });
              })
                ? i.apply(t, r)
                : i) || (e.exports = a);
      },
      825: (e, t, n) => {
        var i,
          r,
          a = n(755);
        ((i = a).fn.sweetDropdown = function (e, t) {
          switch (e) {
            case "attach":
              return i(this).attr("data-dropdown", t);
            case "detach":
              return i(this).removeAttr("data-dropdown");
            case "show":
              return i(this).click();
            case "hide":
              return i.sweetDropdown.hideAll(), i(this);
            case "enable":
              return i(this).removeClass("dropdown-disabled");
            case "disable":
              return i(this).addClass("dropdown-disabled");
          }
        }),
          (i.sweetDropdown = function () {}),
          (i.sweetDropdown.attachAll = function () {
            return (
              i("body")
                .off("click.dropdown")
                .on("click.dropdown", "[data-dropdown]", r),
              i("[data-dropdown]")
                .off("click.dropdown")
                .on("click.dropdown", r),
              i("html, .sweet-modal-content")
                .off("click.dropdown")
                .on("click.dropdown", i.sweetDropdown.hideAll),
              i(window)
                .off("resize.dropdown")
                .on("resize.dropdown", i.sweetDropdown.hideAll),
              !0
            );
          }),
          (i.sweetDropdown.hideAll = function (e, t) {
            var n, r, a, o;
            return (
              null == e && (e = null),
              null == t && (t = null),
              (a = e ? i(e.target).parents().addBack() : null) &&
              a.hasClass("dropdown-menu") &&
              !a.is("A")
                ? void 0
                : ((n = ".dropdown-menu"),
                  (o = "[data-dropdown]"),
                  (r = ""),
                  t &&
                    ((r = i(t).attr("id")),
                    i('[data-dropdown="#' + r + '"]').hasClass(
                      "dropdown-open",
                    ) ||
                      ((n = ".dropdown-menu:not(#" + r + ")"),
                      (o = '[data-dropdown!="#' + r + '"]'))),
                  i("body")
                    .find(n)
                    .removeClass("dropdown-opened")
                    .end()
                    .find(o)
                    .removeClass("dropdown-open"),
                  window.setTimeout(function () {
                    return i("body").find(n).hide().end();
                  }, 200),
                  !0)
            );
          }),
          (i.sweetDropdown.ANCHOR_POSITIONS = [
            "top-left",
            "top-center",
            "top-right",
            "right-top",
            "right-center",
            "right-bottom",
            "bottom-left",
            "bottom-center",
            "bottom-right",
            "left-top",
            "left-center",
            "left-bottom",
          ]),
          (i.sweetDropdown.defaults = { anchorPosition: "center" }),
          (r = function (e) {
            var t,
              n,
              r,
              a,
              o,
              s,
              l,
              c,
              d,
              u,
              p,
              f,
              h,
              v,
              g,
              m,
              y,
              w,
              b,
              x,
              C,
              T,
              k,
              E,
              S,
              A;
            if (
              (null == e && (e = null),
              (r = i(this)),
              (t = (n = i(r.data("dropdown"))).find(".dropdown-anchor")),
              (u = n.hasClass("dropdown-has-anchor")),
              (g = r.hasClass("dropdown-open")),
              (v = r.hasClass("dropdown-disabled")),
              (S = n.outerWidth()),
              (A = r.outerWidth()),
              (p = n.outerHeight()),
              (f = r.outerHeight()),
              (E = r.position().top),
              (y = r.position().left),
              r.hasClass("dropdown-use-offset") &&
                ((E = r.offset().top), (y = r.offset().left)),
              (T = y + A),
              n.length < 1)
            )
              return console.error(
                "[SweetDropdown] Could not find dropdown: " +
                  i(this).data("dropdown"),
              );
            if (
              (t.length < 1 &&
                u &&
                ((t = i('<div class="dropdown-anchor"></div>')), n.prepend(t)),
              void 0 !== e && (e.preventDefault(), e.stopPropagation()),
              g || v)
            )
              return !1;
            for (
              i.sweetDropdown.hideAll(null, r.data("dropdown")),
                c = i.sweetDropdown.defaults.anchorPosition,
                h = 0,
                w = (C = i.sweetDropdown.ANCHOR_POSITIONS).length;
              w > h;
              h++
            )
              (b = C[h]), n.hasClass("dropdown-anchor-" + b) && (c = b);
            if (
              ((k = 0),
              (m = 0),
              (d = (x = c.split("-"))[0]),
              (c = x[1]),
              "top" === d || "bottom" === d)
            )
              switch (c) {
                case "left":
                  m = y;
                  break;
                case "center":
                  m = y - S / 2 + A / 2;
                  break;
                case "right":
                  m = T - S;
              }
            if ("left" === d || "right" === d)
              switch (c) {
                case "top":
                  k = E;
                  break;
                case "center":
                  k = E - p / 2 + f / 2;
                  break;
                case "bottom":
                  k = E + f - p;
              }
            switch (d) {
              case "top":
                k = E + f;
                break;
              case "right":
                m = y - S;
                break;
              case "bottom":
                k = E - p;
                break;
              case "left":
                m = y + A;
            }
            return (
              (s = parseInt(n.data("add-x"))),
              (l = parseInt(n.data("add-y"))),
              isNaN(s) || (m += s),
              isNaN(l) || (k += l),
              (a = parseInt(r.data("add-anchor-x"))),
              (o = parseInt(r.data("add-anchor-y"))),
              isNaN(a) || t.css({ marginLeft: a }),
              isNaN(o) || t.css({ marginTop: o }),
              n.css({ top: k, left: m, display: "block" }),
              window.setTimeout(function () {
                return n.addClass("dropdown-opened");
              }, 0),
              r.addClass("dropdown-open"),
              r
            );
          }),
          i(function () {
            return i.sweetDropdown.attachAll();
          });
      },
      588: (e) => {
        var t, n;
        (n = (function (e, t, n) {
          "use strict";
          var i, r;
          if (
            ((function () {
              var t,
                n = {
                  lazyClass: "lazyload",
                  loadedClass: "lazyloaded",
                  loadingClass: "lazyloading",
                  preloadClass: "lazypreload",
                  errorClass: "lazyerror",
                  autosizesClass: "lazyautosizes",
                  srcAttr: "data-src",
                  srcsetAttr: "data-srcset",
                  sizesAttr: "data-sizes",
                  minSize: 40,
                  customMedia: {},
                  init: !0,
                  expFactor: 1.5,
                  hFac: 0.8,
                  loadMode: 2,
                  loadHidden: !0,
                  ricTimeout: 0,
                  throttleDelay: 125,
                };
              for (t in ((r = e.lazySizesConfig || e.lazysizesConfig || {}), n))
                t in r || (r[t] = n[t]);
            })(),
            !t || !t.getElementsByClassName)
          )
            return { init: function () {}, cfg: r, noSupport: !0 };
          var a = t.documentElement,
            o = e.HTMLPictureElement,
            s = "addEventListener",
            l = "getAttribute",
            c = e[s].bind(e),
            d = e.setTimeout,
            u = e.requestAnimationFrame || d,
            p = e.requestIdleCallback,
            f = /^picture$/i,
            h = ["load", "error", "lazyincluded", "_lazyloaded"],
            v = {},
            g = Array.prototype.forEach,
            m = function (e, t) {
              return (
                v[t] || (v[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                v[t].test(e[l]("class") || "") && v[t]
              );
            },
            y = function (e, t) {
              m(e, t) ||
                e.setAttribute("class", (e[l]("class") || "").trim() + " " + t);
            },
            w = function (e, t) {
              var n;
              (n = m(e, t)) &&
                e.setAttribute("class", (e[l]("class") || "").replace(n, " "));
            },
            b = function (e, t, n) {
              var i = n ? s : "removeEventListener";
              n && b(e, t),
                h.forEach(function (n) {
                  e[i](n, t);
                });
            },
            x = function (e, n, r, a, o) {
              var s = t.createEvent("Event");
              return (
                r || (r = {}),
                (r.instance = i),
                s.initEvent(n, !a, !o),
                (s.detail = r),
                e.dispatchEvent(s),
                s
              );
            },
            C = function (t, n) {
              var i;
              !o && (i = e.picturefill || r.pf)
                ? (n &&
                    n.src &&
                    !t[l]("srcset") &&
                    t.setAttribute("srcset", n.src),
                  i({ reevaluate: !0, elements: [t] }))
                : n && n.src && (t.src = n.src);
            },
            T = function (e, t) {
              return (getComputedStyle(e, null) || {})[t];
            },
            k = function (e, t, n) {
              for (
                n = n || e.offsetWidth;
                n < r.minSize && t && !e._lazysizesWidth;

              )
                (n = t.offsetWidth), (t = t.parentNode);
              return n;
            },
            E = (function () {
              var e,
                n,
                i = [],
                r = [],
                a = i,
                o = function () {
                  var t = a;
                  for (a = i.length ? r : i, e = !0, n = !1; t.length; )
                    t.shift()();
                  e = !1;
                },
                s = function (i, r) {
                  e && !r
                    ? i.apply(this, arguments)
                    : (a.push(i), n || ((n = !0), (t.hidden ? d : u)(o)));
                };
              return (s._lsFlush = o), s;
            })(),
            S = function (e, t) {
              return t
                ? function () {
                    E(e);
                  }
                : function () {
                    var t = this,
                      n = arguments;
                    E(function () {
                      e.apply(t, n);
                    });
                  };
            },
            A = function (e) {
              var t,
                i = 0,
                a = r.throttleDelay,
                o = r.ricTimeout,
                s = function () {
                  (t = !1), (i = n.now()), e();
                },
                l =
                  p && o > 49
                    ? function () {
                        p(s, { timeout: o }),
                          o !== r.ricTimeout && (o = r.ricTimeout);
                      }
                    : S(function () {
                        d(s);
                      }, !0);
              return function (e) {
                var r;
                (e = !0 === e) && (o = 33),
                  t ||
                    ((t = !0),
                    (r = a - (n.now() - i)) < 0 && (r = 0),
                    e || r < 9 ? l() : d(l, r));
              };
            },
            M = function (e) {
              var t,
                i,
                r = function () {
                  (t = null), e();
                },
                a = function () {
                  var e = n.now() - i;
                  e < 99 ? d(a, 99 - e) : (p || r)(r);
                };
              return function () {
                (i = n.now()), t || (t = d(a, 99));
              };
            },
            P = (function () {
              var o,
                p,
                h,
                v,
                k,
                P,
                O,
                D,
                j,
                z,
                N,
                I,
                H = /^img$/i,
                _ = /^iframe$/i,
                B =
                  "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                q = 0,
                R = 0,
                $ = -1,
                W = function (e) {
                  R--, (!e || R < 0 || !e.target) && (R = 0);
                },
                V = function (e) {
                  return (
                    null == I && (I = "hidden" == T(t.body, "visibility")),
                    I ||
                      !(
                        "hidden" == T(e.parentNode, "visibility") &&
                        "hidden" == T(e, "visibility")
                      )
                  );
                },
                F = function (e, n) {
                  var i,
                    r = e,
                    o = V(e);
                  for (
                    D -= n, N += n, j -= n, z += n;
                    o && (r = r.offsetParent) && r != t.body && r != a;

                  )
                    (o = (T(r, "opacity") || 1) > 0) &&
                      "visible" != T(r, "overflow") &&
                      ((i = r.getBoundingClientRect()),
                      (o =
                        z > i.left &&
                        j < i.right &&
                        N > i.top - 1 &&
                        D < i.bottom + 1));
                  return o;
                },
                G = function () {
                  var e,
                    n,
                    s,
                    c,
                    d,
                    u,
                    f,
                    h,
                    g,
                    m,
                    y,
                    w,
                    b = i.elements;
                  if ((v = r.loadMode) && R < 8 && (e = b.length)) {
                    for (n = 0, $++; n < e; n++)
                      if (b[n] && !b[n]._lazyRace)
                        if (
                          !B ||
                          (i.prematureUnveil && i.prematureUnveil(b[n]))
                        )
                          Q(b[n]);
                        else if (
                          (((h = b[n][l]("data-expand")) && (u = 1 * h)) ||
                            (u = q),
                          m ||
                            ((m =
                              !r.expand || r.expand < 1
                                ? a.clientHeight > 500 && a.clientWidth > 500
                                  ? 500
                                  : 370
                                : r.expand),
                            (i._defEx = m),
                            (y = m * r.expFactor),
                            (w = r.hFac),
                            (I = null),
                            q < y && R < 1 && $ > 2 && v > 2 && !t.hidden
                              ? ((q = y), ($ = 0))
                              : (q = v > 1 && $ > 1 && R < 6 ? m : 0)),
                          g !== u &&
                            ((P = innerWidth + u * w),
                            (O = innerHeight + u),
                            (f = -1 * u),
                            (g = u)),
                          (s = b[n].getBoundingClientRect()),
                          (N = s.bottom) >= f &&
                            (D = s.top) <= O &&
                            (z = s.right) >= f * w &&
                            (j = s.left) <= P &&
                            (N || z || j || D) &&
                            (r.loadHidden || V(b[n])) &&
                            ((p && R < 3 && !h && (v < 3 || $ < 4)) ||
                              F(b[n], u)))
                        ) {
                          if ((Q(b[n]), (d = !0), R > 9)) break;
                        } else
                          !d &&
                            p &&
                            !c &&
                            R < 4 &&
                            $ < 4 &&
                            v > 2 &&
                            (o[0] || r.preloadAfterLoad) &&
                            (o[0] ||
                              (!h &&
                                (N ||
                                  z ||
                                  j ||
                                  D ||
                                  "auto" != b[n][l](r.sizesAttr)))) &&
                            (c = o[0] || b[n]);
                    c && !d && Q(c);
                  }
                },
                X = A(G),
                Y = function (e) {
                  var t = e.target;
                  t._lazyCache
                    ? delete t._lazyCache
                    : (W(e),
                      y(t, r.loadedClass),
                      w(t, r.loadingClass),
                      b(t, K),
                      x(t, "lazyloaded"));
                },
                U = S(Y),
                K = function (e) {
                  U({ target: e.target });
                },
                J = function (e) {
                  var t,
                    n = e[l](r.srcsetAttr);
                  (t = r.customMedia[e[l]("data-media") || e[l]("media")]) &&
                    e.setAttribute("media", t),
                    n && e.setAttribute("srcset", n);
                },
                Z = S(function (e, t, n, i, a) {
                  var o, s, c, u, p, v;
                  (p = x(e, "lazybeforeunveil", t)).defaultPrevented ||
                    (i &&
                      (n ? y(e, r.autosizesClass) : e.setAttribute("sizes", i)),
                    (s = e[l](r.srcsetAttr)),
                    (o = e[l](r.srcAttr)),
                    a && (u = (c = e.parentNode) && f.test(c.nodeName || "")),
                    (v = t.firesLoad || ("src" in e && (s || o || u))),
                    (p = { target: e }),
                    y(e, r.loadingClass),
                    v && (clearTimeout(h), (h = d(W, 2500)), b(e, K, !0)),
                    u && g.call(c.getElementsByTagName("source"), J),
                    s
                      ? e.setAttribute("srcset", s)
                      : o &&
                        !u &&
                        (_.test(e.nodeName)
                          ? (function (e, t) {
                              try {
                                e.contentWindow.location.replace(t);
                              } catch (n) {
                                e.src = t;
                              }
                            })(e, o)
                          : (e.src = o)),
                    a && (s || u) && C(e, { src: o })),
                    e._lazyRace && delete e._lazyRace,
                    w(e, r.lazyClass),
                    E(function () {
                      var t = e.complete && e.naturalWidth > 1;
                      (v && !t) ||
                        (t && y(e, "ls-is-cached"),
                        Y(p),
                        (e._lazyCache = !0),
                        d(function () {
                          "_lazyCache" in e && delete e._lazyCache;
                        }, 9)),
                        "lazy" == e.loading && R--;
                    }, !0);
                }),
                Q = function (e) {
                  if (!e._lazyRace) {
                    var t,
                      n = H.test(e.nodeName),
                      i = n && (e[l](r.sizesAttr) || e[l]("sizes")),
                      a = "auto" == i;
                    ((!a && p) ||
                      !n ||
                      (!e[l]("src") && !e.srcset) ||
                      e.complete ||
                      m(e, r.errorClass) ||
                      !m(e, r.lazyClass)) &&
                      ((t = x(e, "lazyunveilread").detail),
                      a && L.updateElem(e, !0, e.offsetWidth),
                      (e._lazyRace = !0),
                      R++,
                      Z(e, t, a, i, n));
                  }
                },
                ee = M(function () {
                  (r.loadMode = 3), X();
                }),
                te = function () {
                  3 == r.loadMode && (r.loadMode = 2), ee();
                },
                ne = function () {
                  p ||
                    (n.now() - k < 999
                      ? d(ne, 999)
                      : ((p = !0), (r.loadMode = 3), X(), c("scroll", te, !0)));
                };
              return {
                _: function () {
                  (k = n.now()),
                    (i.elements = t.getElementsByClassName(r.lazyClass)),
                    (o = t.getElementsByClassName(
                      r.lazyClass + " " + r.preloadClass,
                    )),
                    c("scroll", X, !0),
                    c("resize", X, !0),
                    c("pageshow", function (e) {
                      if (e.persisted) {
                        var n = t.querySelectorAll("." + r.loadingClass);
                        n.length &&
                          n.forEach &&
                          u(function () {
                            n.forEach(function (e) {
                              e.complete && Q(e);
                            });
                          });
                      }
                    }),
                    e.MutationObserver
                      ? new MutationObserver(X).observe(a, {
                          childList: !0,
                          subtree: !0,
                          attributes: !0,
                        })
                      : (a[s]("DOMNodeInserted", X, !0),
                        a[s]("DOMAttrModified", X, !0),
                        setInterval(X, 999)),
                    c("hashchange", X, !0),
                    [
                      "focus",
                      "mouseover",
                      "click",
                      "load",
                      "transitionend",
                      "animationend",
                    ].forEach(function (e) {
                      t[s](e, X, !0);
                    }),
                    /d$|^c/.test(t.readyState)
                      ? ne()
                      : (c("load", ne),
                        t[s]("DOMContentLoaded", X),
                        d(ne, 2e4)),
                    i.elements.length ? (G(), E._lsFlush()) : X();
                },
                checkElems: X,
                unveil: Q,
                _aLSL: te,
              };
            })(),
            L = (function () {
              var e,
                n = S(function (e, t, n, i) {
                  var r, a, o;
                  if (
                    ((e._lazysizesWidth = i),
                    (i += "px"),
                    e.setAttribute("sizes", i),
                    f.test(t.nodeName || ""))
                  )
                    for (
                      a = 0, o = (r = t.getElementsByTagName("source")).length;
                      a < o;
                      a++
                    )
                      r[a].setAttribute("sizes", i);
                  n.detail.dataAttr || C(e, n.detail);
                }),
                i = function (e, t, i) {
                  var r,
                    a = e.parentNode;
                  a &&
                    ((i = k(e, a, i)),
                    (r = x(e, "lazybeforesizes", { width: i, dataAttr: !!t }))
                      .defaultPrevented ||
                      ((i = r.detail.width) &&
                        i !== e._lazysizesWidth &&
                        n(e, a, r, i)));
                },
                a = M(function () {
                  var t,
                    n = e.length;
                  if (n) for (t = 0; t < n; t++) i(e[t]);
                });
              return {
                _: function () {
                  (e = t.getElementsByClassName(r.autosizesClass)),
                    c("resize", a);
                },
                checkElems: a,
                updateElem: i,
              };
            })(),
            O = function () {
              !O.i && t.getElementsByClassName && ((O.i = !0), L._(), P._());
            };
          return (
            d(function () {
              r.init && O();
            }),
            (i = {
              cfg: r,
              autoSizer: L,
              loader: P,
              init: O,
              uP: C,
              aC: y,
              rC: w,
              hC: m,
              fire: x,
              gW: k,
              rAF: E,
            })
          );
        })((t = "undefined" != typeof window ? window : {}), t.document, Date)),
          (t.lazySizes = n),
          e.exports && (e.exports = n);
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var a = (t[i] = { exports: {} });
    return e[i].call(a.exports, a, a.exports, n), a.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function t(n, i) {
      void 0 === n && (n = {}),
        void 0 === i && (i = {}),
        Object.keys(i).forEach(function (r) {
          void 0 === n[r]
            ? (n[r] = i[r])
            : e(i[r]) &&
              e(n[r]) &&
              Object.keys(i[r]).length > 0 &&
              t(n[r], i[r]);
        });
    }
    n(531), n(790), n(588), n(825), n(505), n(755);
    var i = {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: { blur: function () {}, nodeName: "" },
      querySelector: function () {
        return null;
      },
      querySelectorAll: function () {
        return [];
      },
      getElementById: function () {
        return null;
      },
      createEvent: function () {
        return { initEvent: function () {} };
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return [];
          },
        };
      },
      createElementNS: function () {
        return {};
      },
      importNode: function () {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function r() {
      var e = "undefined" != typeof document ? document : {};
      return t(e, i), e;
    }
    var a = {
      document: i,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {},
      },
      CustomEvent: function () {
        return this;
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return "";
          },
        };
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {};
      },
      requestAnimationFrame: function (e) {
        return "undefined" == typeof setTimeout
          ? (e(), null)
          : setTimeout(e, 0);
      },
      cancelAnimationFrame: function (e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function o() {
      var e = "undefined" != typeof window ? window : {};
      return t(e, a), e;
    }
    function s(e) {
      return (
        (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        s(e)
      );
    }
    function l(e, t) {
      return (
        (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          }),
        l(e, t)
      );
    }
    function c(e, t, n) {
      return (
        (c = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (e, t, n) {
              var i = [null];
              i.push.apply(i, t);
              var r = new (Function.bind.apply(e, i))();
              return n && l(r, n.prototype), r;
            }),
        c.apply(null, arguments)
      );
    }
    function d(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (
        (d = function (e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return e;
          var n;
          if ("function" != typeof e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, i);
          }
          function i() {
            return c(e, arguments, s(this).constructor);
          }
          return (
            (i.prototype = Object.create(e.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            l(i, e)
          );
        }),
        d(e)
      );
    }
    var u = (function (e) {
      var t, n;
      function i(t) {
        var n, i, r;
        return (
          (i = (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          })((n = e.call.apply(e, [this].concat(t)) || this))),
          (r = i.__proto__),
          Object.defineProperty(i, "__proto__", {
            get: function () {
              return r;
            },
            set: function (e) {
              r.__proto__ = e;
            },
          }),
          n
        );
      }
      return (
        (n = e),
        ((t = i).prototype = Object.create(n.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = n),
        i
      );
    })(d(Array));
    function p(e) {
      void 0 === e && (e = []);
      var t = [];
      return (
        e.forEach(function (e) {
          Array.isArray(e) ? t.push.apply(t, p(e)) : t.push(e);
        }),
        t
      );
    }
    function f(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function h(e, t) {
      var n = o(),
        i = r(),
        a = [];
      if (!t && e instanceof u) return e;
      if (!e) return new u(a);
      if ("string" == typeof e) {
        var s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          var l = "div";
          0 === s.indexOf("<li") && (l = "ul"),
            0 === s.indexOf("<tr") && (l = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (l = "tr"),
            0 === s.indexOf("<tbody") && (l = "table"),
            0 === s.indexOf("<option") && (l = "select");
          var c = i.createElement(l);
          c.innerHTML = s;
          for (var d = 0; d < c.childNodes.length; d += 1)
            a.push(c.childNodes[d]);
        } else
          a = (function (e, t) {
            if ("string" != typeof e) return [e];
            for (
              var n = [], i = t.querySelectorAll(e), r = 0;
              r < i.length;
              r += 1
            )
              n.push(i[r]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) a.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof u) return e;
        a = e;
      }
      return new u(
        (function (e) {
          for (var t = [], n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(a),
      );
    }
    h.fn = u.prototype;
    var v = "resize scroll".split(" ");
    function g(e) {
      return function () {
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
          n[i] = arguments[i];
        if (void 0 === n[0]) {
          for (var r = 0; r < this.length; r += 1)
            v.indexOf(e) < 0 &&
              (e in this[r] ? this[r][e]() : h(this[r]).trigger(e));
          return this;
        }
        return this.on.apply(this, [e].concat(n));
      };
    }
    g("click"),
      g("blur"),
      g("focus"),
      g("focusin"),
      g("focusout"),
      g("keyup"),
      g("keydown"),
      g("keypress"),
      g("submit"),
      g("change"),
      g("mousedown"),
      g("mousemove"),
      g("mouseup"),
      g("mouseenter"),
      g("mouseleave"),
      g("mouseout"),
      g("mouseover"),
      g("touchstart"),
      g("touchend"),
      g("touchmove"),
      g("resize"),
      g("scroll");
    var m = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = p(
          t.map(function (e) {
            return e.split(" ");
          }),
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).add.apply(t, i);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = p(
          t.map(function (e) {
            return e.split(" ");
          }),
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).remove.apply(t, i);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = p(
          t.map(function (e) {
            return e.split(" ");
          }),
        );
        return (
          f(this, function (e) {
            return (
              i.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = p(
          t.map(function (e) {
            return e.split(" ");
          }),
        );
        this.forEach(function (e) {
          i.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (var i in e) (this[n][i] = e[i]), this[n].setAttribute(i, e[i]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = t[0],
          r = t[1],
          a = t[2],
          o = t[3];
        function s(e) {
          var t = e.target;
          if (t) {
            var n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), h(t).is(r))) a.apply(t, n);
            else
              for (var i = h(t).parents(), o = 0; o < i.length; o += 1)
                h(i[o]).is(r) && a.apply(i[o], n);
          }
        }
        function l(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
        }
        "function" == typeof t[1] &&
          ((i = t[0]), (a = t[1]), (o = t[2]), (r = void 0)),
          o || (o = !1);
        for (var c, d = i.split(" "), u = 0; u < this.length; u += 1) {
          var p = this[u];
          if (r)
            for (c = 0; c < d.length; c += 1) {
              var f = d[c];
              p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []),
                p.dom7LiveListeners[f].push({ listener: a, proxyListener: s }),
                p.addEventListener(f, s, o);
            }
          else
            for (c = 0; c < d.length; c += 1) {
              var v = d[c];
              p.dom7Listeners || (p.dom7Listeners = {}),
                p.dom7Listeners[v] || (p.dom7Listeners[v] = []),
                p.dom7Listeners[v].push({ listener: a, proxyListener: l }),
                p.addEventListener(v, l, o);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = t[0],
          r = t[1],
          a = t[2],
          o = t[3];
        "function" == typeof t[1] &&
          ((i = t[0]), (a = t[1]), (o = t[2]), (r = void 0)),
          o || (o = !1);
        for (var s = i.split(" "), l = 0; l < s.length; l += 1)
          for (var c = s[l], d = 0; d < this.length; d += 1) {
            var u = this[d],
              p = void 0;
            if (
              (!r && u.dom7Listeners
                ? (p = u.dom7Listeners[c])
                : r && u.dom7LiveListeners && (p = u.dom7LiveListeners[c]),
              p && p.length)
            )
              for (var f = p.length - 1; f >= 0; f -= 1) {
                var h = p[f];
                (a && h.listener === a) ||
                (a &&
                  h.listener &&
                  h.listener.dom7proxy &&
                  h.listener.dom7proxy === a)
                  ? (u.removeEventListener(c, h.proxyListener, o),
                    p.splice(f, 1))
                  : a ||
                    (u.removeEventListener(c, h.proxyListener, o),
                    p.splice(f, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (
          var e = o(), t = arguments.length, n = new Array(t), i = 0;
          i < t;
          i++
        )
          n[i] = arguments[i];
        for (var r = n[0].split(" "), a = n[1], s = 0; s < r.length; s += 1)
          for (var l = r[s], c = 0; c < this.length; c += 1) {
            var d = this[c];
            if (e.CustomEvent) {
              var u = new e.CustomEvent(l, {
                detail: a,
                bubbles: !0,
                cancelable: !0,
              });
              (d.dom7EventData = n.filter(function (e, t) {
                return t > 0;
              })),
                d.dispatchEvent(u),
                (d.dom7EventData = []),
                delete d.dom7EventData;
            }
          }
        return this;
      },
      transitionEnd: function (e) {
        var t = this;
        return (
          e &&
            t.on("transitionend", function n(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = o();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          var e = o(),
            t = r(),
            n = this[0],
            i = n.getBoundingClientRect(),
            a = t.body,
            s = n.clientTop || a.clientTop || 0,
            l = n.clientLeft || a.clientLeft || 0,
            c = n === e ? e.scrollY : n.scrollTop,
            d = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + c - s, left: i.left + d - l };
        }
        return null;
      },
      css: function (e, t) {
        var n,
          i = o();
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (var r in e) this[n].style[r] = e[r];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach(function (t, n) {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          n,
          i = o(),
          a = r(),
          s = this[0];
        if (!s || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (s.matches) return s.matches(e);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          if (s.msMatchesSelector) return s.msMatchesSelector(e);
          for (t = h(e), n = 0; n < t.length; n += 1) if (t[n] === s) return !0;
          return !1;
        }
        if (e === a) return s === a;
        if (e === i) return s === i;
        if (e.nodeType || e instanceof u) {
          for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
            if (t[n] === s) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return h([]);
        if (e < 0) {
          var n = t + e;
          return h(n < 0 ? [] : [this[n]]);
        }
        return h([this[e]]);
      },
      append: function () {
        for (var e, t = r(), n = 0; n < arguments.length; n += 1) {
          e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          for (var i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              var a = t.createElement("div");
              for (a.innerHTML = e; a.firstChild; )
                this[i].appendChild(a.firstChild);
            } else if (e instanceof u)
              for (var o = 0; o < e.length; o += 1) this[i].appendChild(e[o]);
            else this[i].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        var t,
          n,
          i = r();
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            var a = i.createElement("div");
            for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1)
              this[t].insertBefore(a.childNodes[n], this[t].childNodes[0]);
          } else if (e instanceof u)
            for (n = 0; n < e.length; n += 1)
              this[t].insertBefore(e[n], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e)
              ? h([this[0].nextElementSibling])
              : h([])
            : this[0].nextElementSibling
            ? h([this[0].nextElementSibling])
            : h([])
          : h([]);
      },
      nextAll: function (e) {
        var t = [],
          n = this[0];
        if (!n) return h([]);
        for (; n.nextElementSibling; ) {
          var i = n.nextElementSibling;
          e ? h(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return h(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && h(t.previousElementSibling).is(e)
              ? h([t.previousElementSibling])
              : h([])
            : t.previousElementSibling
            ? h([t.previousElementSibling])
            : h([]);
        }
        return h([]);
      },
      prevAll: function (e) {
        var t = [],
          n = this[0];
        if (!n) return h([]);
        for (; n.previousElementSibling; ) {
          var i = n.previousElementSibling;
          e ? h(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return h(t);
      },
      parent: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? h(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return h(t);
      },
      parents: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].parentNode; i; )
            e ? h(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        return h(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1)
            t.push(i[r]);
        return h(t);
      },
      children: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].children, r = 0; r < i.length; r += 1)
            (e && !h(i[r]).is(e)) || t.push(i[r]);
        return h(t);
      },
      filter: function (e) {
        return h(f(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(m).forEach(function (e) {
      Object.defineProperty(h.fn, e, { value: m[e], writable: !0 });
    });
    const y = h;
    function w(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function b() {
      return Date.now();
    }
    function x(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function C() {
      for (
        var e,
          t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          n = ["__proto__", "constructor", "prototype"],
          i = 1;
        i < arguments.length;
        i += 1
      ) {
        var r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (
          null != r &&
          ((e = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? e instanceof HTMLElement
            : e && (1 === e.nodeType || 11 === e.nodeType)))
        )
          for (
            var a = Object.keys(Object(r)).filter(function (e) {
                return n.indexOf(e) < 0;
              }),
              o = 0,
              s = a.length;
            o < s;
            o += 1
          ) {
            var l = a[o],
              c = Object.getOwnPropertyDescriptor(r, l);
            void 0 !== c &&
              c.enumerable &&
              (x(t[l]) && x(r[l])
                ? r[l].__swiper__
                  ? (t[l] = r[l])
                  : C(t[l], r[l])
                : !x(t[l]) && x(r[l])
                ? ((t[l] = {}), r[l].__swiper__ ? (t[l] = r[l]) : C(t[l], r[l]))
                : (t[l] = r[l]));
          }
      }
      return t;
    }
    function T(e, t) {
      Object.keys(t).forEach(function (n) {
        x(t[n]) &&
          Object.keys(t[n]).forEach(function (i) {
            "function" == typeof t[n][i] && (t[n][i] = t[n][i].bind(e));
          }),
          (e[n] = t[n]);
      });
    }
    function k(e) {
      return (
        void 0 === e && (e = ""),
        "." +
          e
            .trim()
            .replace(/([\.:!\/])/g, "\\$1")
            .replace(/ /g, ".")
      );
    }
    function E(e, t, n, i) {
      var a = r();
      return (
        n &&
          Object.keys(i).forEach(function (n) {
            if (!t[n] && !0 === t.auto) {
              var r = a.createElement("div");
              (r.className = i[n]), e.append(r), (t[n] = r);
            }
          }),
        t
      );
    }
    var S, A, M;
    function P() {
      return (
        S ||
          (S = (function () {
            var e = o(),
              t = r();
            return {
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              pointerEvents:
                !!e.PointerEvent &&
                "maxTouchPoints" in e.navigator &&
                e.navigator.maxTouchPoints >= 0,
              observer:
                "MutationObserver" in e || "WebkitMutationObserver" in e,
              passiveListener: (function () {
                var t = !1;
                try {
                  var n = Object.defineProperty({}, "passive", {
                    get: function () {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        S
      );
    }
    const L = {
      name: "resize",
      create: function () {
        var e = this;
        C(e, {
          resize: {
            observer: null,
            createObserver: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                ((e.resize.observer = new ResizeObserver(function (t) {
                  var n = e.width,
                    i = e.height,
                    r = n,
                    a = i;
                  t.forEach(function (t) {
                    var n = t.contentBoxSize,
                      i = t.contentRect,
                      o = t.target;
                    (o && o !== e.el) ||
                      ((r = i ? i.width : (n[0] || n).inlineSize),
                      (a = i ? i.height : (n[0] || n).blockSize));
                  }),
                    (r === n && a === i) || e.resize.resizeHandler();
                })),
                e.resize.observer.observe(e.el));
            },
            removeObserver: function () {
              e.resize.observer &&
                e.resize.observer.unobserve &&
                e.el &&
                (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
            },
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function (e) {
          var t = o();
          e.params.resizeObserver && void 0 !== o().ResizeObserver
            ? e.resize.createObserver()
            : (t.addEventListener("resize", e.resize.resizeHandler),
              t.addEventListener(
                "orientationchange",
                e.resize.orientationChangeHandler,
              ));
        },
        destroy: function (e) {
          var t = o();
          e.resize.removeObserver(),
            t.removeEventListener("resize", e.resize.resizeHandler),
            t.removeEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler,
            );
        },
      },
    };
    function O() {
      return (
        (O =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
        O.apply(this, arguments)
      );
    }
    var D = {
      attach: function (e, t) {
        void 0 === t && (t = {});
        var n = o(),
          i = this,
          r = new (n.MutationObserver || n.WebkitMutationObserver)(function (
            e,
          ) {
            if (1 !== e.length) {
              var t = function () {
                i.emit("observerUpdate", e[0]);
              };
              n.requestAnimationFrame
                ? n.requestAnimationFrame(t)
                : n.setTimeout(t, 0);
            } else i.emit("observerUpdate", e[0]);
          });
        r.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          i.observer.observers.push(r);
      },
      init: function () {
        var e = this;
        if (e.support.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), n = 0; n < t.length; n += 1)
              e.observer.attach(t[n]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    };
    const j = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function () {
          T(this, { observer: O({}, D, { observers: [] }) });
        },
        on: {
          init: function (e) {
            e.observer.init();
          },
          destroy: function (e) {
            e.observer.destroy();
          },
        },
      },
      z = {
        on: function (e, t, n) {
          var i = this;
          if ("function" != typeof t) return i;
          var r = n ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][r](t);
            }),
            i
          );
        },
        once: function (e, t, n) {
          var i = this;
          if ("function" != typeof t) return i;
          function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
              a[o] = arguments[o];
            t.apply(i, a);
          }
          return (r.__emitterProxy = t), i.on(e, r, n);
        },
        onAny: function (e, t) {
          var n = this;
          if ("function" != typeof e) return n;
          var i = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off: function (e, t) {
          var n = this;
          return n.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach(function (i, r) {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(r, 1);
                    });
              }),
              n)
            : n;
        },
        emit: function () {
          var e,
            t,
            n,
            i = this;
          if (!i.eventsListeners) return i;
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
            a[o] = arguments[o];
          return (
            "string" == typeof a[0] || Array.isArray(a[0])
              ? ((e = a[0]), (t = a.slice(1, a.length)), (n = i))
              : ((e = a[0].events), (t = a[0].data), (n = a[0].context || i)),
            t.unshift(n),
            (Array.isArray(e) ? e : e.split(" ")).forEach(function (e) {
              i.eventsAnyListeners &&
                i.eventsAnyListeners.length &&
                i.eventsAnyListeners.forEach(function (i) {
                  i.apply(n, [e].concat(t));
                }),
                i.eventsListeners &&
                  i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach(function (e) {
                    e.apply(n, t);
                  });
            }),
            i
          );
        },
      },
      N = {
        updateSize: function () {
          var e,
            t,
            n = this,
            i = n.$el;
          (e =
            void 0 !== n.params.width && null !== n.params.width
              ? n.params.width
              : i[0].clientWidth),
            (t =
              void 0 !== n.params.height && null !== n.params.height
                ? n.params.height
                : i[0].clientHeight),
            (0 === e && n.isHorizontal()) ||
              (0 === t && n.isVertical()) ||
              ((e =
                e -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              C(n, { width: e, height: t, size: n.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          var i = e.params,
            r = e.$wrapperEl,
            a = e.size,
            o = e.rtlTranslate,
            s = e.wrongRTL,
            l = e.virtual && i.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = r.children("." + e.params.slideClass),
            u = l ? e.virtual.slides.length : d.length,
            p = [],
            f = [],
            h = [],
            v = i.slidesOffsetBefore;
          "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
          var g = i.slidesOffsetAfter;
          "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
          var m = e.snapGrid.length,
            y = e.slidesGrid.length,
            w = i.spaceBetween,
            b = -v,
            x = 0,
            T = 0;
          if (void 0 !== a) {
            var k, E;
            "string" == typeof w &&
              w.indexOf("%") >= 0 &&
              (w = (parseFloat(w.replace("%", "")) / 100) * a),
              (e.virtualSize = -w),
              o
                ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              i.slidesPerColumn > 1 &&
                ((k =
                  Math.floor(u / i.slidesPerColumn) ===
                  u / e.params.slidesPerColumn
                    ? u
                    : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn),
                "auto" !== i.slidesPerView &&
                  "row" === i.slidesPerColumnFill &&
                  (k = Math.max(k, i.slidesPerView * i.slidesPerColumn)));
            for (
              var S,
                A,
                M,
                P = i.slidesPerColumn,
                L = k / P,
                O = Math.floor(u / i.slidesPerColumn),
                D = 0;
              D < u;
              D += 1
            ) {
              E = 0;
              var j = d.eq(D);
              if (i.slidesPerColumn > 1) {
                var z = void 0,
                  N = void 0,
                  I = void 0;
                if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                  var H = Math.floor(
                      D / (i.slidesPerGroup * i.slidesPerColumn),
                    ),
                    _ = D - i.slidesPerColumn * i.slidesPerGroup * H,
                    B =
                      0 === H
                        ? i.slidesPerGroup
                        : Math.min(
                            Math.ceil((u - H * P * i.slidesPerGroup) / P),
                            i.slidesPerGroup,
                          );
                  (z =
                    (N =
                      _ - (I = Math.floor(_ / B)) * B + H * i.slidesPerGroup) +
                    (I * k) / P),
                    j.css({
                      "-webkit-box-ordinal-group": z,
                      "-moz-box-ordinal-group": z,
                      "-ms-flex-order": z,
                      "-webkit-order": z,
                      order: z,
                    });
                } else
                  "column" === i.slidesPerColumnFill
                    ? ((I = D - (N = Math.floor(D / P)) * P),
                      (N > O || (N === O && I === P - 1)) &&
                        (I += 1) >= P &&
                        ((I = 0), (N += 1)))
                    : (N = D - (I = Math.floor(D / L)) * L);
                j.css(
                  t("margin-top"),
                  0 !== I ? i.spaceBetween && i.spaceBetween + "px" : "",
                );
              }
              if ("none" !== j.css("display")) {
                if ("auto" === i.slidesPerView) {
                  var q = getComputedStyle(j[0]),
                    R = j[0].style.transform,
                    $ = j[0].style.webkitTransform;
                  if (
                    (R && (j[0].style.transform = "none"),
                    $ && (j[0].style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    E = e.isHorizontal() ? j.outerWidth(!0) : j.outerHeight(!0);
                  else {
                    var W = n(q, "width"),
                      V = n(q, "padding-left"),
                      F = n(q, "padding-right"),
                      G = n(q, "margin-left"),
                      X = n(q, "margin-right"),
                      Y = q.getPropertyValue("box-sizing");
                    if (Y && "border-box" === Y) E = W + G + X;
                    else {
                      var U = j[0],
                        K = U.clientWidth;
                      E = W + V + F + G + X + (U.offsetWidth - K);
                    }
                  }
                  R && (j[0].style.transform = R),
                    $ && (j[0].style.webkitTransform = $),
                    i.roundLengths && (E = Math.floor(E));
                } else
                  (E = (a - (i.slidesPerView - 1) * w) / i.slidesPerView),
                    i.roundLengths && (E = Math.floor(E)),
                    d[D] && (d[D].style[t("width")] = E + "px");
                d[D] && (d[D].swiperSlideSize = E),
                  h.push(E),
                  i.centeredSlides
                    ? ((b = b + E / 2 + x / 2 + w),
                      0 === x && 0 !== D && (b = b - a / 2 - w),
                      0 === D && (b = b - a / 2 - w),
                      Math.abs(b) < 0.001 && (b = 0),
                      i.roundLengths && (b = Math.floor(b)),
                      T % i.slidesPerGroup == 0 && p.push(b),
                      f.push(b))
                    : (i.roundLengths && (b = Math.floor(b)),
                      (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                        e.params.slidesPerGroup ==
                        0 && p.push(b),
                      f.push(b),
                      (b = b + E + w)),
                  (e.virtualSize += E + w),
                  (x = E),
                  (T += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, a) + g),
              o &&
                s &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                r.css({ width: e.virtualSize + i.spaceBetween + "px" }),
              i.setWrapperSize &&
                r.css(
                  (((A = {})[t("width")] =
                    e.virtualSize + i.spaceBetween + "px"),
                  A),
                ),
              i.slidesPerColumn > 1 &&
                ((e.virtualSize = (E + i.spaceBetween) * k),
                (e.virtualSize =
                  Math.ceil(e.virtualSize / i.slidesPerColumn) -
                  i.spaceBetween),
                r.css(
                  (((M = {})[t("width")] =
                    e.virtualSize + i.spaceBetween + "px"),
                  M),
                ),
                i.centeredSlides))
            ) {
              S = [];
              for (var J = 0; J < p.length; J += 1) {
                var Z = p[J];
                i.roundLengths && (Z = Math.floor(Z)),
                  p[J] < e.virtualSize + p[0] && S.push(Z);
              }
              p = S;
            }
            if (!i.centeredSlides) {
              S = [];
              for (var Q = 0; Q < p.length; Q += 1) {
                var ee = p[Q];
                i.roundLengths && (ee = Math.floor(ee)),
                  p[Q] <= e.virtualSize - a && S.push(ee);
              }
              (p = S),
                Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) >
                  1 && p.push(e.virtualSize - a);
            }
            if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
              var te,
                ne = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              d.filter(function (e, t) {
                return !i.cssMode || t !== d.length - 1;
              }).css((((te = {})[ne] = w + "px"), te));
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              var ie = 0;
              h.forEach(function (e) {
                ie += e + (i.spaceBetween ? i.spaceBetween : 0);
              });
              var re = (ie -= i.spaceBetween) - a;
              p = p.map(function (e) {
                return e < 0 ? -v : e > re ? re + g : e;
              });
            }
            if (i.centerInsufficientSlides) {
              var ae = 0;
              if (
                (h.forEach(function (e) {
                  ae += e + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (ae -= i.spaceBetween) < a)
              ) {
                var oe = (a - ae) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - oe;
                }),
                  f.forEach(function (e, t) {
                    f[t] = e + oe;
                  });
              }
            }
            C(e, { slides: d, snapGrid: p, slidesGrid: f, slidesSizesGrid: h }),
              u !== c && e.emit("slidesLengthChange"),
              p.length !== m &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              f.length !== y && e.emit("slidesGridLengthChange"),
              (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = this,
            i = [],
            r = n.virtual && n.params.virtual.enabled,
            a = 0;
          "number" == typeof e
            ? n.setTransition(e)
            : !0 === e && n.setTransition(n.params.speed);
          var o = function (e) {
            return r
              ? n.slides.filter(function (t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : n.slides.eq(e)[0];
          };
          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
            if (n.params.centeredSlides)
              n.visibleSlides.each(function (e) {
                i.push(e);
              });
            else
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var s = n.activeIndex + t;
                if (s > n.slides.length && !r) break;
                i.push(o(s));
              }
          else i.push(o(n.activeIndex));
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var l = i[t].offsetHeight;
              a = l > a ? l : a;
            }
          a && n.$wrapperEl.css("height", a + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            n = t.params,
            i = t.slides,
            r = t.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            var a = -e;
            r && (a = e),
              i.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var o = 0; o < i.length; o += 1) {
              var s = i[o],
                l =
                  (a +
                    (n.centeredSlides ? t.minTranslate() : 0) -
                    s.swiperSlideOffset) /
                  (s.swiperSlideSize + n.spaceBetween);
              if (
                n.watchSlidesVisibility ||
                (n.centeredSlides && n.autoHeight)
              ) {
                var c = -(a - s.swiperSlideOffset),
                  d = c + t.slidesSizesGrid[o];
                ((c >= 0 && c < t.size - 1) ||
                  (d > 1 && d <= t.size) ||
                  (c <= 0 && d >= t.size)) &&
                  (t.visibleSlides.push(s),
                  t.visibleSlidesIndexes.push(o),
                  i.eq(o).addClass(n.slideVisibleClass));
              }
              s.progress = r ? -l : l;
            }
            t.visibleSlides = y(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if (void 0 === e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          var i = t.params,
            r = t.maxTranslate() - t.minTranslate(),
            a = t.progress,
            o = t.isBeginning,
            s = t.isEnd,
            l = o,
            c = s;
          0 === r
            ? ((a = 0), (o = !0), (s = !0))
            : ((o = (a = (e - t.minTranslate()) / r) <= 0), (s = a >= 1)),
            C(t, { progress: a, isBeginning: o, isEnd: s }),
            (i.watchSlidesProgress ||
              i.watchSlidesVisibility ||
              (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            o && !l && t.emit("reachBeginning toEdge"),
            s && !c && t.emit("reachEnd toEdge"),
            ((l && !o) || (c && !s)) && t.emit("fromEdge"),
            t.emit("progress", a);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            n = t.slides,
            i = t.params,
            r = t.$wrapperEl,
            a = t.activeIndex,
            o = t.realIndex,
            s = t.virtual && i.virtual.enabled;
          n.removeClass(
            i.slideActiveClass +
              " " +
              i.slideNextClass +
              " " +
              i.slidePrevClass +
              " " +
              i.slideDuplicateActiveClass +
              " " +
              i.slideDuplicateNextClass +
              " " +
              i.slideDuplicatePrevClass,
          ),
            (e = s
              ? t.$wrapperEl.find(
                  "." + i.slideClass + '[data-swiper-slide-index="' + a + '"]',
                )
              : n.eq(a)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? r
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        o +
                        '"]',
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : r
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        o +
                        '"]',
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var l = e
            .nextAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === l.length && (l = n.eq(0)).addClass(i.slideNextClass);
          var c = e
            .prevAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === c.length && (c = n.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? r
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        l.attr("data-swiper-slide-index") +
                        '"]',
                    )
                    .addClass(i.slideDuplicateNextClass)
                : r
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        l.attr("data-swiper-slide-index") +
                        '"]',
                    )
                    .addClass(i.slideDuplicateNextClass),
              c.hasClass(i.slideDuplicateClass)
                ? r
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        c.attr("data-swiper-slide-index") +
                        '"]',
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : r
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        c.attr("data-swiper-slide-index") +
                        '"]',
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this,
            i = n.rtlTranslate ? n.translate : -n.translate,
            r = n.slidesGrid,
            a = n.snapGrid,
            o = n.params,
            s = n.activeIndex,
            l = n.realIndex,
            c = n.snapIndex,
            d = e;
          if (void 0 === d) {
            for (var u = 0; u < r.length; u += 1)
              void 0 !== r[u + 1]
                ? i >= r[u] && i < r[u + 1] - (r[u + 1] - r[u]) / 2
                  ? (d = u)
                  : i >= r[u] && i < r[u + 1] && (d = u + 1)
                : i >= r[u] && (d = u);
            o.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (a.indexOf(i) >= 0) t = a.indexOf(i);
          else {
            var p = Math.min(o.slidesPerGroupSkip, d);
            t = p + Math.floor((d - p) / o.slidesPerGroup);
          }
          if ((t >= a.length && (t = a.length - 1), d !== s)) {
            var f = parseInt(
              n.slides.eq(d).attr("data-swiper-slide-index") || d,
              10,
            );
            C(n, {
              snapIndex: t,
              realIndex: f,
              previousIndex: s,
              activeIndex: d,
            }),
              n.emit("activeIndexChange"),
              n.emit("snapIndexChange"),
              l !== f && n.emit("realIndexChange"),
              (n.initialized || n.params.runCallbacksOnInit) &&
                n.emit("slideChange");
          } else t !== c && ((n.snapIndex = t), n.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            n = this,
            i = n.params,
            r = y(e.target).closest("." + i.slideClass)[0],
            a = !1;
          if (r)
            for (var o = 0; o < n.slides.length; o += 1)
              if (n.slides[o] === r) {
                (a = !0), (t = o);
                break;
              }
          if (!r || !a)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = r),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  y(r).attr("data-swiper-slide-index"),
                  10,
                ))
              : (n.clickedIndex = t),
            i.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      },
      I = {
        slideTo: function (e, t, n, i, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                typeof e +
                "] given.",
            );
          if ("string" == typeof e) {
            var a = parseInt(e, 10);
            if (!isFinite(a))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                  e +
                  "] given.",
              );
            e = a;
          }
          var o = this,
            s = e;
          s < 0 && (s = 0);
          var l = o.params,
            c = o.snapGrid,
            d = o.slidesGrid,
            u = o.previousIndex,
            p = o.activeIndex,
            f = o.rtlTranslate,
            h = o.wrapperEl,
            v = o.enabled;
          if (
            (o.animating && l.preventInteractionOnTransition) ||
            (!v && !i && !r)
          )
            return !1;
          var g = Math.min(o.params.slidesPerGroupSkip, s),
            m = g + Math.floor((s - g) / o.params.slidesPerGroup);
          m >= c.length && (m = c.length - 1),
            (p || l.initialSlide || 0) === (u || 0) &&
              n &&
              o.emit("beforeSlideChangeStart");
          var y,
            w = -c[m];
          if ((o.updateProgress(w), l.normalizeSlideIndex))
            for (var b = 0; b < d.length; b += 1) {
              var x = -Math.floor(100 * w),
                C = Math.floor(100 * d[b]),
                T = Math.floor(100 * d[b + 1]);
              void 0 !== d[b + 1]
                ? x >= C && x < T - (T - C) / 2
                  ? (s = b)
                  : x >= C && x < T && (s = b + 1)
                : x >= C && (s = b);
            }
          if (o.initialized && s !== p) {
            if (!o.allowSlideNext && w < o.translate && w < o.minTranslate())
              return !1;
            if (
              !o.allowSlidePrev &&
              w > o.translate &&
              w > o.maxTranslate() &&
              (p || 0) !== s
            )
              return !1;
          }
          if (
            ((y = s > p ? "next" : s < p ? "prev" : "reset"),
            (f && -w === o.translate) || (!f && w === o.translate))
          )
            return (
              o.updateActiveIndex(s),
              l.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              "slide" !== l.effect && o.setTranslate(w),
              "reset" !== y && (o.transitionStart(n, y), o.transitionEnd(n, y)),
              !1
            );
          if (l.cssMode) {
            var k,
              E = o.isHorizontal(),
              S = -w;
            return (
              f && (S = h.scrollWidth - h.offsetWidth - S),
              0 === t
                ? (h[E ? "scrollLeft" : "scrollTop"] = S)
                : h.scrollTo
                ? h.scrollTo(
                    (((k = {})[E ? "left" : "top"] = S),
                    (k.behavior = "smooth"),
                    k),
                  )
                : (h[E ? "scrollLeft" : "scrollTop"] = S),
              !0
            );
          }
          return (
            0 === t
              ? (o.setTransition(0),
                o.setTranslate(w),
                o.updateActiveIndex(s),
                o.updateSlidesClasses(),
                o.emit("beforeTransitionStart", t, i),
                o.transitionStart(n, y),
                o.transitionEnd(n, y))
              : (o.setTransition(t),
                o.setTranslate(w),
                o.updateActiveIndex(s),
                o.updateSlidesClasses(),
                o.emit("beforeTransitionStart", t, i),
                o.transitionStart(n, y),
                o.animating ||
                  ((o.animating = !0),
                  o.onSlideToWrapperTransitionEnd ||
                    (o.onSlideToWrapperTransitionEnd = function (e) {
                      o &&
                        !o.destroyed &&
                        e.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          o.onSlideToWrapperTransitionEnd,
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          o.onSlideToWrapperTransitionEnd,
                        ),
                        (o.onSlideToWrapperTransitionEnd = null),
                        delete o.onSlideToWrapperTransitionEnd,
                        o.transitionEnd(n, y));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    "transitionend",
                    o.onSlideToWrapperTransitionEnd,
                  ),
                  o.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    o.onSlideToWrapperTransitionEnd,
                  ))),
            !0
          );
        },
        slideToLoop: function (e, t, n, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
          var r = this,
            a = e;
          return r.params.loop && (a += r.loopedSlides), r.slideTo(a, t, n, i);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            r = i.params,
            a = i.animating;
          if (!i.enabled) return i;
          var o = i.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
          if (r.loop) {
            if (a && r.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return i.slideTo(i.activeIndex + o, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            r = i.params,
            a = i.animating,
            o = i.snapGrid,
            s = i.slidesGrid,
            l = i.rtlTranslate;
          if (!i.enabled) return i;
          if (r.loop) {
            if (a && r.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var d,
            u = c(l ? i.translate : -i.translate),
            p = o.map(function (e) {
              return c(e);
            }),
            f = o[p.indexOf(u) - 1];
          return (
            void 0 === f &&
              r.cssMode &&
              o.forEach(function (e) {
                !f && u >= e && (f = e);
              }),
            void 0 !== f && (d = s.indexOf(f)) < 0 && (d = i.activeIndex - 1),
            i.slideTo(d, e, t, n)
          );
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          var r = this,
            a = r.activeIndex,
            o = Math.min(r.params.slidesPerGroupSkip, a),
            s = o + Math.floor((a - o) / r.params.slidesPerGroup),
            l = r.rtlTranslate ? r.translate : -r.translate;
          if (l >= r.snapGrid[s]) {
            var c = r.snapGrid[s];
            l - c > (r.snapGrid[s + 1] - c) * i &&
              (a += r.params.slidesPerGroup);
          } else {
            var d = r.snapGrid[s - 1];
            l - d <= (r.snapGrid[s] - d) * i && (a -= r.params.slidesPerGroup);
          }
          return (
            (a = Math.max(a, 0)),
            (a = Math.min(a, r.slidesGrid.length - 1)),
            r.slideTo(a, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            i = t.$wrapperEl,
            r =
              "auto" === n.slidesPerView
                ? t.slidesPerViewDynamic()
                : n.slidesPerView,
            a = t.clickedIndex;
          if (n.loop) {
            if (t.animating) return;
            (e = parseInt(
              y(t.clickedSlide).attr("data-swiper-slide-index"),
              10,
            )),
              n.centeredSlides
                ? a < t.loopedSlides - r / 2 ||
                  a > t.slides.length - t.loopedSlides + r / 2
                  ? (t.loopFix(),
                    (a = i
                      .children(
                        "." +
                          n.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          n.slideDuplicateClass +
                          ")",
                      )
                      .eq(0)
                      .index()),
                    w(function () {
                      t.slideTo(a);
                    }))
                  : t.slideTo(a)
                : a > t.slides.length - r
                ? (t.loopFix(),
                  (a = i
                    .children(
                      "." +
                        n.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        n.slideDuplicateClass +
                        ")",
                    )
                    .eq(0)
                    .index()),
                  w(function () {
                    t.slideTo(a);
                  }))
                : t.slideTo(a);
          } else t.slideTo(a);
        },
      },
      H = {
        loopCreate: function () {
          var e = this,
            t = r(),
            n = e.params,
            i = e.$wrapperEl;
          i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
          var a = i.children("." + n.slideClass);
          if (n.loopFillGroupWithBlank) {
            var o = n.slidesPerGroup - (a.length % n.slidesPerGroup);
            if (o !== n.slidesPerGroup) {
              for (var s = 0; s < o; s += 1) {
                var l = y(t.createElement("div")).addClass(
                  n.slideClass + " " + n.slideBlankClass,
                );
                i.append(l);
              }
              a = i.children("." + n.slideClass);
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = a.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10),
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > a.length && (e.loopedSlides = a.length);
          var c = [],
            d = [];
          a.each(function (t, n) {
            var i = y(t);
            n < e.loopedSlides && d.push(t),
              n < a.length && n >= a.length - e.loopedSlides && c.push(t),
              i.attr("data-swiper-slide-index", n);
          });
          for (var u = 0; u < d.length; u += 1)
            i.append(y(d[u].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (var p = c.length - 1; p >= 0; p -= 1)
            i.prepend(y(c[p].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            n = e.activeIndex,
            i = e.slides,
            r = e.loopedSlides,
            a = e.allowSlidePrev,
            o = e.allowSlideNext,
            s = e.snapGrid,
            l = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var c = -s[n] - e.getTranslate();
          n < r
            ? ((t = i.length - 3 * r + n),
              (t += r),
              e.slideTo(t, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((l ? -e.translate : e.translate) - c))
            : n >= i.length - r &&
              ((t = -i.length + n + r),
              (t += r),
              e.slideTo(t, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((l ? -e.translate : e.translate) - c)),
            (e.allowSlidePrev = a),
            (e.allowSlideNext = o),
            e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            n = e.params,
            i = e.slides;
          t
            .children(
              "." +
                n.slideClass +
                "." +
                n.slideDuplicateClass +
                ",." +
                n.slideClass +
                "." +
                n.slideBlankClass,
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      };
    function _(e) {
      var t = this,
        n = r(),
        i = o(),
        a = t.touchEventsData,
        s = t.params,
        l = t.touches;
      if (t.enabled && (!t.animating || !s.preventInteractionOnTransition)) {
        var c = e;
        c.originalEvent && (c = c.originalEvent);
        var d = y(c.target);
        if (
          ("wrapper" !== s.touchEventsTarget ||
            d.closest(t.wrapperEl).length) &&
          ((a.isTouchEvent = "touchstart" === c.type),
          (a.isTouchEvent || !("which" in c) || 3 !== c.which) &&
            !(
              (!a.isTouchEvent && "button" in c && c.button > 0) ||
              (a.isTouched && a.isMoved)
            ))
        ) {
          s.noSwipingClass &&
            "" !== s.noSwipingClass &&
            c.target &&
            c.target.shadowRoot &&
            e.path &&
            e.path[0] &&
            (d = y(e.path[0]));
          var u = s.noSwipingSelector
              ? s.noSwipingSelector
              : "." + s.noSwipingClass,
            p = !(!c.target || !c.target.shadowRoot);
          if (
            s.noSwiping &&
            (p
              ? (function (e, t) {
                  return (
                    void 0 === t && (t = this),
                    (function t(n) {
                      return n && n !== r() && n !== o()
                        ? (n.assignedSlot && (n = n.assignedSlot),
                          n.closest(e) || t(n.getRootNode().host))
                        : null;
                    })(t)
                  );
                })(u, c.target)
              : d.closest(u)[0])
          )
            t.allowClick = !0;
          else if (!s.swipeHandler || d.closest(s.swipeHandler)[0]) {
            (l.currentX =
              "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX),
              (l.currentY =
                "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
            var f = l.currentX,
              h = l.currentY,
              v = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
              g = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
            if (v && (f <= g || f >= i.innerWidth - g)) {
              if ("prevent" !== v) return;
              e.preventDefault();
            }
            if (
              (C(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (l.startX = f),
              (l.startY = h),
              (a.touchStartTime = b()),
              (t.allowClick = !0),
              t.updateSize(),
              (t.swipeDirection = void 0),
              s.threshold > 0 && (a.allowThresholdMove = !1),
              "touchstart" !== c.type)
            ) {
              var m = !0;
              d.is(a.focusableElements) && (m = !1),
                n.activeElement &&
                  y(n.activeElement).is(a.focusableElements) &&
                  n.activeElement !== d[0] &&
                  n.activeElement.blur();
              var w = m && t.allowTouchMove && s.touchStartPreventDefault;
              (!s.touchStartForcePreventDefault && !w) ||
                d[0].isContentEditable ||
                c.preventDefault();
            }
            t.emit("touchStart", c);
          }
        }
      }
    }
    function B(e) {
      var t = r(),
        n = this,
        i = n.touchEventsData,
        a = n.params,
        o = n.touches,
        s = n.rtlTranslate;
      if (n.enabled) {
        var l = e;
        if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
          if (!i.isTouchEvent || "touchmove" === l.type) {
            var c =
                "touchmove" === l.type &&
                l.targetTouches &&
                (l.targetTouches[0] || l.changedTouches[0]),
              d = "touchmove" === l.type ? c.pageX : l.pageX,
              u = "touchmove" === l.type ? c.pageY : l.pageY;
            if (l.preventedByNestedSwiper)
              return (o.startX = d), void (o.startY = u);
            if (!n.allowTouchMove)
              return (
                (n.allowClick = !1),
                void (
                  i.isTouched &&
                  (C(o, { startX: d, startY: u, currentX: d, currentY: u }),
                  (i.touchStartTime = b()))
                )
              );
            if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
              if (n.isVertical()) {
                if (
                  (u < o.startY && n.translate <= n.maxTranslate()) ||
                  (u > o.startY && n.translate >= n.minTranslate())
                )
                  return (i.isTouched = !1), void (i.isMoved = !1);
              } else if (
                (d < o.startX && n.translate <= n.maxTranslate()) ||
                (d > o.startX && n.translate >= n.minTranslate())
              )
                return;
            if (
              i.isTouchEvent &&
              t.activeElement &&
              l.target === t.activeElement &&
              y(l.target).is(i.focusableElements)
            )
              return (i.isMoved = !0), void (n.allowClick = !1);
            if (
              (i.allowTouchCallbacks && n.emit("touchMove", l),
              !(l.targetTouches && l.targetTouches.length > 1))
            ) {
              (o.currentX = d), (o.currentY = u);
              var p,
                f = o.currentX - o.startX,
                h = o.currentY - o.startY;
              if (
                !(
                  n.params.threshold &&
                  Math.sqrt(Math.pow(f, 2) + Math.pow(h, 2)) <
                    n.params.threshold
                )
              )
                if (
                  (void 0 === i.isScrolling &&
                    ((n.isHorizontal() && o.currentY === o.startY) ||
                    (n.isVertical() && o.currentX === o.startX)
                      ? (i.isScrolling = !1)
                      : f * f + h * h >= 25 &&
                        ((p =
                          (180 * Math.atan2(Math.abs(h), Math.abs(f))) /
                          Math.PI),
                        (i.isScrolling = n.isHorizontal()
                          ? p > a.touchAngle
                          : 90 - p > a.touchAngle))),
                  i.isScrolling && n.emit("touchMoveOpposite", l),
                  void 0 === i.startMoving &&
                    ((o.currentX === o.startX && o.currentY === o.startY) ||
                      (i.startMoving = !0)),
                  i.isScrolling)
                )
                  i.isTouched = !1;
                else if (i.startMoving) {
                  (n.allowClick = !1),
                    !a.cssMode && l.cancelable && l.preventDefault(),
                    a.touchMoveStopPropagation &&
                      !a.nested &&
                      l.stopPropagation(),
                    i.isMoved ||
                      (a.loop && n.loopFix(),
                      (i.startTranslate = n.getTranslate()),
                      n.setTransition(0),
                      n.animating &&
                        n.$wrapperEl.trigger(
                          "webkitTransitionEnd transitionend",
                        ),
                      (i.allowMomentumBounce = !1),
                      !a.grabCursor ||
                        (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
                        n.setGrabCursor(!0),
                      n.emit("sliderFirstMove", l)),
                    n.emit("sliderMove", l),
                    (i.isMoved = !0);
                  var v = n.isHorizontal() ? f : h;
                  (o.diff = v),
                    (v *= a.touchRatio),
                    s && (v = -v),
                    (n.swipeDirection = v > 0 ? "prev" : "next"),
                    (i.currentTranslate = v + i.startTranslate);
                  var g = !0,
                    m = a.resistanceRatio;
                  if (
                    (a.touchReleaseOnEdges && (m = 0),
                    v > 0 && i.currentTranslate > n.minTranslate()
                      ? ((g = !1),
                        a.resistance &&
                          (i.currentTranslate =
                            n.minTranslate() -
                            1 +
                            Math.pow(
                              -n.minTranslate() + i.startTranslate + v,
                              m,
                            )))
                      : v < 0 &&
                        i.currentTranslate < n.maxTranslate() &&
                        ((g = !1),
                        a.resistance &&
                          (i.currentTranslate =
                            n.maxTranslate() +
                            1 -
                            Math.pow(
                              n.maxTranslate() - i.startTranslate - v,
                              m,
                            ))),
                    g && (l.preventedByNestedSwiper = !0),
                    !n.allowSlideNext &&
                      "next" === n.swipeDirection &&
                      i.currentTranslate < i.startTranslate &&
                      (i.currentTranslate = i.startTranslate),
                    !n.allowSlidePrev &&
                      "prev" === n.swipeDirection &&
                      i.currentTranslate > i.startTranslate &&
                      (i.currentTranslate = i.startTranslate),
                    n.allowSlidePrev ||
                      n.allowSlideNext ||
                      (i.currentTranslate = i.startTranslate),
                    a.threshold > 0)
                  ) {
                    if (!(Math.abs(v) > a.threshold || i.allowThresholdMove))
                      return void (i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove)
                      return (
                        (i.allowThresholdMove = !0),
                        (o.startX = o.currentX),
                        (o.startY = o.currentY),
                        (i.currentTranslate = i.startTranslate),
                        void (o.diff = n.isHorizontal()
                          ? o.currentX - o.startX
                          : o.currentY - o.startY)
                      );
                  }
                  a.followFinger &&
                    !a.cssMode &&
                    ((a.freeMode ||
                      a.watchSlidesProgress ||
                      a.watchSlidesVisibility) &&
                      (n.updateActiveIndex(), n.updateSlidesClasses()),
                    a.freeMode &&
                      (0 === i.velocities.length &&
                        i.velocities.push({
                          position: o[n.isHorizontal() ? "startX" : "startY"],
                          time: i.touchStartTime,
                        }),
                      i.velocities.push({
                        position: o[n.isHorizontal() ? "currentX" : "currentY"],
                        time: b(),
                      })),
                    n.updateProgress(i.currentTranslate),
                    n.setTranslate(i.currentTranslate));
                }
            }
          }
        } else i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l);
      }
    }
    function q(e) {
      var t = this,
        n = t.touchEventsData,
        i = t.params,
        r = t.touches,
        a = t.rtlTranslate,
        o = t.$wrapperEl,
        s = t.slidesGrid,
        l = t.snapGrid;
      if (t.enabled) {
        var c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          n.allowTouchCallbacks && t.emit("touchEnd", c),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        i.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        var d,
          u = b(),
          p = u - n.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(c),
            t.emit("tap click", c),
            p < 300 &&
              u - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", c)),
          (n.lastClickTime = b()),
          w(function () {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === r.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (d = i.followFinger
            ? a
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          !i.cssMode)
        )
          if (i.freeMode) {
            if (d < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (d > -t.maxTranslate())
              return void (t.slides.length < l.length
                ? t.slideTo(l.length - 1)
                : t.slideTo(t.slides.length - 1));
            if (i.freeModeMomentum) {
              if (n.velocities.length > 1) {
                var f = n.velocities.pop(),
                  h = n.velocities.pop(),
                  v = f.position - h.position,
                  g = f.time - h.time;
                (t.velocity = v / g),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                    (t.velocity = 0),
                  (g > 150 || b() - f.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              (t.velocity *= i.freeModeMomentumVelocityRatio),
                (n.velocities.length = 0);
              var m = 1e3 * i.freeModeMomentumRatio,
                y = t.velocity * m,
                x = t.translate + y;
              a && (x = -x);
              var C,
                T,
                k = !1,
                E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
              if (x < t.maxTranslate())
                i.freeModeMomentumBounce
                  ? (x + t.maxTranslate() < -E && (x = t.maxTranslate() - E),
                    (C = t.maxTranslate()),
                    (k = !0),
                    (n.allowMomentumBounce = !0))
                  : (x = t.maxTranslate()),
                  i.loop && i.centeredSlides && (T = !0);
              else if (x > t.minTranslate())
                i.freeModeMomentumBounce
                  ? (x - t.minTranslate() > E && (x = t.minTranslate() + E),
                    (C = t.minTranslate()),
                    (k = !0),
                    (n.allowMomentumBounce = !0))
                  : (x = t.minTranslate()),
                  i.loop && i.centeredSlides && (T = !0);
              else if (i.freeModeSticky) {
                for (var S, A = 0; A < l.length; A += 1)
                  if (l[A] > -x) {
                    S = A;
                    break;
                  }
                x = -(x =
                  Math.abs(l[S] - x) < Math.abs(l[S - 1] - x) ||
                  "next" === t.swipeDirection
                    ? l[S]
                    : l[S - 1]);
              }
              if (
                (T &&
                  t.once("transitionEnd", function () {
                    t.loopFix();
                  }),
                0 !== t.velocity)
              ) {
                if (
                  ((m = a
                    ? Math.abs((-x - t.translate) / t.velocity)
                    : Math.abs((x - t.translate) / t.velocity)),
                  i.freeModeSticky)
                ) {
                  var M = Math.abs((a ? -x : x) - t.translate),
                    P = t.slidesSizesGrid[t.activeIndex];
                  m =
                    M < P ? i.speed : M < 2 * P ? 1.5 * i.speed : 2.5 * i.speed;
                }
              } else if (i.freeModeSticky) return void t.slideToClosest();
              i.freeModeMomentumBounce && k
                ? (t.updateProgress(C),
                  t.setTransition(m),
                  t.setTranslate(x),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  o.transitionEnd(function () {
                    t &&
                      !t.destroyed &&
                      n.allowMomentumBounce &&
                      (t.emit("momentumBounce"),
                      t.setTransition(i.speed),
                      setTimeout(function () {
                        t.setTranslate(C),
                          o.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          });
                      }, 0));
                  }))
                : t.velocity
                ? (t.updateProgress(x),
                  t.setTransition(m),
                  t.setTranslate(x),
                  t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                    ((t.animating = !0),
                    o.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    })))
                : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(x)),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            } else {
              if (i.freeModeSticky) return void t.slideToClosest();
              i.freeMode && t.emit("_freeModeNoMomentumRelease");
            }
            (!i.freeModeMomentum || p >= i.longSwipesMs) &&
              (t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses());
          } else {
            for (
              var L = 0, O = t.slidesSizesGrid[0], D = 0;
              D < s.length;
              D += D < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
            ) {
              var j = D < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
              void 0 !== s[D + j]
                ? d >= s[D] && d < s[D + j] && ((L = D), (O = s[D + j] - s[D]))
                : d >= s[D] &&
                  ((L = D), (O = s[s.length - 1] - s[s.length - 2]));
            }
            var z = (d - s[L]) / O,
              N = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (p > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection &&
                (z >= i.longSwipesRatio ? t.slideTo(L + N) : t.slideTo(L)),
                "prev" === t.swipeDirection &&
                  (z > 1 - i.longSwipesRatio ? t.slideTo(L + N) : t.slideTo(L));
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
              !t.navigation ||
              (c.target !== t.navigation.nextEl &&
                c.target !== t.navigation.prevEl)
                ? ("next" === t.swipeDirection && t.slideTo(L + N),
                  "prev" === t.swipeDirection && t.slideTo(L))
                : c.target === t.navigation.nextEl
                ? t.slideTo(L + N)
                : t.slideTo(L);
            }
          }
      }
    }
    function R() {
      var e = this,
        t = e.params,
        n = e.el;
      if (!n || 0 !== n.offsetWidth) {
        t.breakpoints && e.setBreakpoint();
        var i = e.allowSlideNext,
          r = e.allowSlidePrev,
          a = e.snapGrid;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = i),
          e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
      }
    }
    function $(e) {
      var t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function W() {
      var e = this,
        t = e.wrapperEl,
        n = e.rtlTranslate;
      if (e.enabled) {
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = n
                ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                : -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        var i = e.maxTranslate() - e.minTranslate();
        (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
          e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
    }
    var V = !1;
    function F() {}
    const G = {
        attachEvents: function () {
          var e = this,
            t = r(),
            n = e.params,
            i = e.touchEvents,
            a = e.el,
            o = e.wrapperEl,
            s = e.device,
            l = e.support;
          (e.onTouchStart = _.bind(e)),
            (e.onTouchMove = B.bind(e)),
            (e.onTouchEnd = q.bind(e)),
            n.cssMode && (e.onScroll = W.bind(e)),
            (e.onClick = $.bind(e));
          var c = !!n.nested;
          if (!l.touch && l.pointerEvents)
            a.addEventListener(i.start, e.onTouchStart, !1),
              t.addEventListener(i.move, e.onTouchMove, c),
              t.addEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (l.touch) {
              var d = !(
                "touchstart" !== i.start ||
                !l.passiveListener ||
                !n.passiveListeners
              ) && { passive: !0, capture: !1 };
              a.addEventListener(i.start, e.onTouchStart, d),
                a.addEventListener(
                  i.move,
                  e.onTouchMove,
                  l.passiveListener ? { passive: !1, capture: c } : c,
                ),
                a.addEventListener(i.end, e.onTouchEnd, d),
                i.cancel && a.addEventListener(i.cancel, e.onTouchEnd, d),
                V || (t.addEventListener("touchstart", F), (V = !0));
            }
            ((n.simulateTouch && !s.ios && !s.android) ||
              (n.simulateTouch && !l.touch && s.ios)) &&
              (a.addEventListener("mousedown", e.onTouchStart, !1),
              t.addEventListener("mousemove", e.onTouchMove, c),
              t.addEventListener("mouseup", e.onTouchEnd, !1));
          }
          (n.preventClicks || n.preventClicksPropagation) &&
            a.addEventListener("click", e.onClick, !0),
            n.cssMode && o.addEventListener("scroll", e.onScroll),
            n.updateOnWindowResize
              ? e.on(
                  s.ios || s.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  R,
                  !0,
                )
              : e.on("observerUpdate", R, !0);
        },
        detachEvents: function () {
          var e = this,
            t = r(),
            n = e.params,
            i = e.touchEvents,
            a = e.el,
            o = e.wrapperEl,
            s = e.device,
            l = e.support,
            c = !!n.nested;
          if (!l.touch && l.pointerEvents)
            a.removeEventListener(i.start, e.onTouchStart, !1),
              t.removeEventListener(i.move, e.onTouchMove, c),
              t.removeEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (l.touch) {
              var d = !(
                "onTouchStart" !== i.start ||
                !l.passiveListener ||
                !n.passiveListeners
              ) && { passive: !0, capture: !1 };
              a.removeEventListener(i.start, e.onTouchStart, d),
                a.removeEventListener(i.move, e.onTouchMove, c),
                a.removeEventListener(i.end, e.onTouchEnd, d),
                i.cancel && a.removeEventListener(i.cancel, e.onTouchEnd, d);
            }
            ((n.simulateTouch && !s.ios && !s.android) ||
              (n.simulateTouch && !l.touch && s.ios)) &&
              (a.removeEventListener("mousedown", e.onTouchStart, !1),
              t.removeEventListener("mousemove", e.onTouchMove, c),
              t.removeEventListener("mouseup", e.onTouchEnd, !1));
          }
          (n.preventClicks || n.preventClicksPropagation) &&
            a.removeEventListener("click", e.onClick, !0),
            n.cssMode && o.removeEventListener("scroll", e.onScroll),
            e.off(
              s.ios || s.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              R,
            );
        },
      },
      X = {
        addClasses: function () {
          var e,
            t,
            n,
            i = this,
            r = i.classNames,
            a = i.params,
            o = i.rtl,
            s = i.$el,
            l = i.device,
            c = i.support,
            d =
              ((e = [
                "initialized",
                a.direction,
                { "pointer-events": c.pointerEvents && !c.touch },
                { "free-mode": a.freeMode },
                { autoheight: a.autoHeight },
                { rtl: o },
                { multirow: a.slidesPerColumn > 1 },
                {
                  "multirow-column":
                    a.slidesPerColumn > 1 && "column" === a.slidesPerColumnFill,
                },
                { android: l.android },
                { ios: l.ios },
                { "css-mode": a.cssMode },
              ]),
              (t = a.containerModifierClass),
              (n = []),
              e.forEach(function (e) {
                "object" == typeof e
                  ? Object.keys(e).forEach(function (i) {
                      e[i] && n.push(t + i);
                    })
                  : "string" == typeof e && n.push(t + e);
              }),
              n);
          r.push.apply(r, d),
            s.addClass([].concat(r).join(" ")),
            i.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            n = e.classNames;
          t.removeClass(n.join(" ")), e.emitContainerClasses();
        },
      },
      Y = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
    function U(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var K = {
        modular: {
          useParams: function (e) {
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (n) {
                var i = t.modules[n];
                i.params && C(e, i.params);
              });
          },
          useModules: function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (n) {
                var i = t.modules[n],
                  r = e[n] || {};
                i.on &&
                  t.on &&
                  Object.keys(i.on).forEach(function (e) {
                    t.on(e, i.on[e]);
                  }),
                  i.create && i.create.bind(t)(r);
              });
          },
        },
        eventsEmitter: z,
        update: N,
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this,
              n = t.params,
              i = t.rtlTranslate,
              r = t.translate,
              a = t.$wrapperEl;
            if (n.virtualTranslate) return i ? -r : r;
            if (n.cssMode) return r;
            var s = (function (e, t) {
              void 0 === t && (t = "x");
              var n,
                i,
                r,
                a = o(),
                s = (function (e) {
                  var t,
                    n = o();
                  return (
                    n.getComputedStyle && (t = n.getComputedStyle(e, null)),
                    !t && e.currentStyle && (t = e.currentStyle),
                    t || (t = e.style),
                    t
                  );
                })(e);
              return (
                a.WebKitCSSMatrix
                  ? ((i = s.transform || s.webkitTransform).split(",").length >
                      6 &&
                      (i = i
                        .split(", ")
                        .map(function (e) {
                          return e.replace(",", ".");
                        })
                        .join(", ")),
                    (r = new a.WebKitCSSMatrix("none" === i ? "" : i)))
                  : (n = (r =
                      s.MozTransform ||
                      s.OTransform ||
                      s.MsTransform ||
                      s.msTransform ||
                      s.transform ||
                      s
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,"))
                      .toString()
                      .split(",")),
                "x" === t &&
                  (i = a.WebKitCSSMatrix
                    ? r.m41
                    : 16 === n.length
                    ? parseFloat(n[12])
                    : parseFloat(n[4])),
                "y" === t &&
                  (i = a.WebKitCSSMatrix
                    ? r.m42
                    : 16 === n.length
                    ? parseFloat(n[13])
                    : parseFloat(n[5])),
                i || 0
              );
            })(a[0], e);
            return i && (s = -s), s || 0;
          },
          setTranslate: function (e, t) {
            var n = this,
              i = n.rtlTranslate,
              r = n.params,
              a = n.$wrapperEl,
              o = n.wrapperEl,
              s = n.progress,
              l = 0,
              c = 0;
            n.isHorizontal() ? (l = i ? -e : e) : (c = e),
              r.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
              r.cssMode
                ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    n.isHorizontal() ? -l : -c)
                : r.virtualTranslate ||
                  a.transform("translate3d(" + l + "px, " + c + "px, 0px)"),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? l : c);
            var d = n.maxTranslate() - n.minTranslate();
            (0 === d ? 0 : (e - n.minTranslate()) / d) !== s &&
              n.updateProgress(e),
              n.emit("setTranslate", n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, n, i, r) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0),
              void 0 === i && (i = !0);
            var a = this,
              o = a.params,
              s = a.wrapperEl;
            if (a.animating && o.preventInteractionOnTransition) return !1;
            var l,
              c = a.minTranslate(),
              d = a.maxTranslate();
            if (
              ((l = i && e > c ? c : i && e < d ? d : e),
              a.updateProgress(l),
              o.cssMode)
            ) {
              var u,
                p = a.isHorizontal();
              return (
                0 === t
                  ? (s[p ? "scrollLeft" : "scrollTop"] = -l)
                  : s.scrollTo
                  ? s.scrollTo(
                      (((u = {})[p ? "left" : "top"] = -l),
                      (u.behavior = "smooth"),
                      u),
                    )
                  : (s[p ? "scrollLeft" : "scrollTop"] = -l),
                !0
              );
            }
            return (
              0 === t
                ? (a.setTransition(0),
                  a.setTranslate(l),
                  n &&
                    (a.emit("beforeTransitionStart", t, r),
                    a.emit("transitionEnd")))
                : (a.setTransition(t),
                  a.setTranslate(l),
                  n &&
                    (a.emit("beforeTransitionStart", t, r),
                    a.emit("transitionStart")),
                  a.animating ||
                    ((a.animating = !0),
                    a.onTranslateToWrapperTransitionEnd ||
                      (a.onTranslateToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            a.onTranslateToWrapperTransitionEnd,
                          ),
                          a.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            a.onTranslateToWrapperTransitionEnd,
                          ),
                          (a.onTranslateToWrapperTransitionEnd = null),
                          delete a.onTranslateToWrapperTransitionEnd,
                          n && a.emit("transitionEnd"));
                      }),
                    a.$wrapperEl[0].addEventListener(
                      "transitionend",
                      a.onTranslateToWrapperTransitionEnd,
                    ),
                    a.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      a.onTranslateToWrapperTransitionEnd,
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            var n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var n = this,
              i = n.activeIndex,
              r = n.params,
              a = n.previousIndex;
            if (!r.cssMode) {
              r.autoHeight && n.updateAutoHeight();
              var o = t;
              if (
                (o || (o = i > a ? "next" : i < a ? "prev" : "reset"),
                n.emit("transitionStart"),
                e && i !== a)
              ) {
                if ("reset" === o)
                  return void n.emit("slideResetTransitionStart");
                n.emit("slideChangeTransitionStart"),
                  "next" === o
                    ? n.emit("slideNextTransitionStart")
                    : n.emit("slidePrevTransitionStart");
              }
            }
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var n = this,
              i = n.activeIndex,
              r = n.previousIndex,
              a = n.params;
            if (((n.animating = !1), !a.cssMode)) {
              n.setTransition(0);
              var o = t;
              if (
                (o || (o = i > r ? "next" : i < r ? "prev" : "reset"),
                n.emit("transitionEnd"),
                e && i !== r)
              ) {
                if ("reset" === o)
                  return void n.emit("slideResetTransitionEnd");
                n.emit("slideChangeTransitionEnd"),
                  "next" === o
                    ? n.emit("slideNextTransitionEnd")
                    : n.emit("slidePrevTransitionEnd");
              }
            }
          },
        },
        slide: I,
        loop: H,
        grabCursor: {
          setGrabCursor: function (e) {
            var t = this;
            if (
              !(
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
            ) {
              var n = t.el;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (n.style.cursor = e ? "grabbing" : "grab");
            }
          },
          unsetGrabCursor: function () {
            var e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.el.style.cursor = "");
          },
        },
        manipulation: {
          appendSlide: function (e) {
            var t = this,
              n = t.$wrapperEl,
              i = t.params;
            if (
              (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            )
              for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
            else n.append(e);
            i.loop && t.loopCreate(),
              (i.observer && t.support.observer) || t.update();
          },
          prependSlide: function (e) {
            var t = this,
              n = t.params,
              i = t.$wrapperEl,
              r = t.activeIndex;
            n.loop && t.loopDestroy();
            var a = r + 1;
            if ("object" == typeof e && "length" in e) {
              for (var o = 0; o < e.length; o += 1) e[o] && i.prepend(e[o]);
              a = r + e.length;
            } else i.prepend(e);
            n.loop && t.loopCreate(),
              (n.observer && t.support.observer) || t.update(),
              t.slideTo(a, 0, !1);
          },
          addSlide: function (e, t) {
            var n = this,
              i = n.$wrapperEl,
              r = n.params,
              a = n.activeIndex;
            r.loop &&
              ((a -= n.loopedSlides),
              n.loopDestroy(),
              (n.slides = i.children("." + r.slideClass)));
            var o = n.slides.length;
            if (e <= 0) n.prependSlide(t);
            else if (e >= o) n.appendSlide(t);
            else {
              for (
                var s = a > e ? a + 1 : a, l = [], c = o - 1;
                c >= e;
                c -= 1
              ) {
                var d = n.slides.eq(c);
                d.remove(), l.unshift(d);
              }
              if ("object" == typeof t && "length" in t) {
                for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
                s = a > e ? a + t.length : a;
              } else i.append(t);
              for (var p = 0; p < l.length; p += 1) i.append(l[p]);
              r.loop && n.loopCreate(),
                (r.observer && n.support.observer) || n.update(),
                r.loop
                  ? n.slideTo(s + n.loopedSlides, 0, !1)
                  : n.slideTo(s, 0, !1);
            }
          },
          removeSlide: function (e) {
            var t = this,
              n = t.params,
              i = t.$wrapperEl,
              r = t.activeIndex;
            n.loop &&
              ((r -= t.loopedSlides),
              t.loopDestroy(),
              (t.slides = i.children("." + n.slideClass)));
            var a,
              o = r;
            if ("object" == typeof e && "length" in e) {
              for (var s = 0; s < e.length; s += 1)
                (a = e[s]),
                  t.slides[a] && t.slides.eq(a).remove(),
                  a < o && (o -= 1);
              o = Math.max(o, 0);
            } else
              (a = e),
                t.slides[a] && t.slides.eq(a).remove(),
                a < o && (o -= 1),
                (o = Math.max(o, 0));
            n.loop && t.loopCreate(),
              (n.observer && t.support.observer) || t.update(),
              n.loop
                ? t.slideTo(o + t.loopedSlides, 0, !1)
                : t.slideTo(o, 0, !1);
          },
          removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
          },
        },
        events: G,
        breakpoints: {
          setBreakpoint: function () {
            var e = this,
              t = e.activeIndex,
              n = e.initialized,
              i = e.loopedSlides,
              r = void 0 === i ? 0 : i,
              a = e.params,
              o = e.$el,
              s = a.breakpoints;
            if (s && (!s || 0 !== Object.keys(s).length)) {
              var l = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
              if (l && e.currentBreakpoint !== l) {
                var c = l in s ? s[l] : void 0;
                c &&
                  [
                    "slidesPerView",
                    "spaceBetween",
                    "slidesPerGroup",
                    "slidesPerGroupSkip",
                    "slidesPerColumn",
                  ].forEach(function (e) {
                    var t = c[e];
                    void 0 !== t &&
                      (c[e] =
                        "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                          ? "slidesPerView" === e
                            ? parseFloat(t)
                            : parseInt(t, 10)
                          : "auto");
                  });
                var d = c || e.originalParams,
                  u = a.slidesPerColumn > 1,
                  p = d.slidesPerColumn > 1,
                  f = a.enabled;
                u && !p
                  ? (o.removeClass(
                      a.containerModifierClass +
                        "multirow " +
                        a.containerModifierClass +
                        "multirow-column",
                    ),
                    e.emitContainerClasses())
                  : !u &&
                    p &&
                    (o.addClass(a.containerModifierClass + "multirow"),
                    ((d.slidesPerColumnFill &&
                      "column" === d.slidesPerColumnFill) ||
                      (!d.slidesPerColumnFill &&
                        "column" === a.slidesPerColumnFill)) &&
                      o.addClass(a.containerModifierClass + "multirow-column"),
                    e.emitContainerClasses());
                var h = d.direction && d.direction !== a.direction,
                  v = a.loop && (d.slidesPerView !== a.slidesPerView || h);
                h && n && e.changeDirection(), C(e.params, d);
                var g = e.params.enabled;
                C(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                  f && !g ? e.disable() : !f && g && e.enable(),
                  (e.currentBreakpoint = l),
                  e.emit("_beforeBreakpoint", d),
                  v &&
                    n &&
                    (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - r + e.loopedSlides, 0, !1)),
                  e.emit("breakpoint", d);
              }
            }
          },
          getBreakpoint: function (e, t, n) {
            if (
              (void 0 === t && (t = "window"), e && ("container" !== t || n))
            ) {
              var i = !1,
                r = o(),
                a = "window" === t ? r.innerHeight : n.clientHeight,
                s = Object.keys(e).map(function (e) {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    var t = parseFloat(e.substr(1));
                    return { value: a * t, point: e };
                  }
                  return { value: e, point: e };
                });
              s.sort(function (e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10);
              });
              for (var l = 0; l < s.length; l += 1) {
                var c = s[l],
                  d = c.point,
                  u = c.value;
                "window" === t
                  ? r.matchMedia("(min-width: " + u + "px)").matches && (i = d)
                  : u <= n.clientWidth && (i = d);
              }
              return i || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
              t = e.params,
              n = e.isLocked,
              i =
                e.slides.length > 0 &&
                t.slidesOffsetBefore +
                  t.spaceBetween * (e.slides.length - 1) +
                  e.slides[0].offsetWidth * e.slides.length;
            t.slidesOffsetBefore && t.slidesOffsetAfter && i
              ? (e.isLocked = i <= e.size)
              : (e.isLocked = 1 === e.snapGrid.length),
              (e.allowSlideNext = !e.isLocked),
              (e.allowSlidePrev = !e.isLocked),
              n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
              n &&
                n !== e.isLocked &&
                ((e.isEnd = !1), e.navigation && e.navigation.update());
          },
        },
        classes: X,
        images: {
          loadImage: function (e, t, n, i, r, a) {
            var s,
              l = o();
            function c() {
              a && a();
            }
            y(e).parent("picture")[0] || (e.complete && r)
              ? c()
              : t
              ? (((s = new l.Image()).onload = c),
                (s.onerror = c),
                i && (s.sizes = i),
                n && (s.srcset = n),
                t && (s.src = t))
              : c();
          },
          preloadImages: function () {
            var e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (var n = 0; n < e.imagesToLoad.length; n += 1) {
              var i = e.imagesToLoad[n];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t,
              );
            }
          },
        },
      },
      J = {},
      Z = (function () {
        function e() {
          for (
            var t, n, i = arguments.length, r = new Array(i), a = 0;
            a < i;
            a++
          )
            r[a] = arguments[a];
          if (
            (1 === r.length &&
            r[0].constructor &&
            "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
              ? (n = r[0])
              : ((t = r[0]), (n = r[1])),
            n || (n = {}),
            (n = C({}, n)),
            t && !n.el && (n.el = t),
            n.el && y(n.el).length > 1)
          ) {
            var s = [];
            return (
              y(n.el).each(function (t) {
                var i = C({}, n, { el: t });
                s.push(new e(i));
              }),
              s
            );
          }
          var l,
            c = this;
          (c.__swiper__ = !0),
            (c.support = P()),
            (c.device =
              (void 0 === (l = { userAgent: n.userAgent }) && (l = {}),
              A ||
                (A = (function (e) {
                  var t = (void 0 === e ? {} : e).userAgent,
                    n = P(),
                    i = o(),
                    r = i.navigator.platform,
                    a = t || i.navigator.userAgent,
                    s = { ios: !1, android: !1 },
                    l = i.screen.width,
                    c = i.screen.height,
                    d = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                    u = a.match(/(iPad).*OS\s([\d_]+)/),
                    p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                    f = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    h = "Win32" === r,
                    v = "MacIntel" === r;
                  return (
                    !u &&
                      v &&
                      n.touch &&
                      [
                        "1024x1366",
                        "1366x1024",
                        "834x1194",
                        "1194x834",
                        "834x1112",
                        "1112x834",
                        "768x1024",
                        "1024x768",
                        "820x1180",
                        "1180x820",
                        "810x1080",
                        "1080x810",
                      ].indexOf(l + "x" + c) >= 0 &&
                      ((u = a.match(/(Version)\/([\d.]+)/)) ||
                        (u = [0, 1, "13_0_0"]),
                      (v = !1)),
                    d && !h && ((s.os = "android"), (s.android = !0)),
                    (u || f || p) && ((s.os = "ios"), (s.ios = !0)),
                    s
                  );
                })(l)),
              A)),
            (c.browser =
              (M ||
                (M = (function () {
                  var e,
                    t = o();
                  return {
                    isEdge: !!t.navigator.userAgent.match(/Edge/g),
                    isSafari:
                      ((e = t.navigator.userAgent.toLowerCase()),
                      e.indexOf("safari") >= 0 &&
                        e.indexOf("chrome") < 0 &&
                        e.indexOf("android") < 0),
                    isWebView:
                      /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        t.navigator.userAgent,
                      ),
                  };
                })()),
              M)),
            (c.eventsListeners = {}),
            (c.eventsAnyListeners = []),
            void 0 === c.modules && (c.modules = {}),
            Object.keys(c.modules).forEach(function (e) {
              var t = c.modules[e];
              if (t.params) {
                var i = Object.keys(t.params)[0],
                  r = t.params[i];
                if ("object" != typeof r || null === r) return;
                if (
                  (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                    !0 === n[i] &&
                    (n[i] = { auto: !0 }),
                  !(i in n) || !("enabled" in r))
                )
                  return;
                !0 === n[i] && (n[i] = { enabled: !0 }),
                  "object" != typeof n[i] ||
                    "enabled" in n[i] ||
                    (n[i].enabled = !0),
                  n[i] || (n[i] = { enabled: !1 });
              }
            });
          var d,
            u,
            p = C({}, Y);
          return (
            c.useParams(p),
            (c.params = C({}, p, J, n)),
            (c.originalParams = C({}, c.params)),
            (c.passedParams = C({}, n)),
            c.params &&
              c.params.on &&
              Object.keys(c.params.on).forEach(function (e) {
                c.on(e, c.params.on[e]);
              }),
            c.params && c.params.onAny && c.onAny(c.params.onAny),
            (c.$ = y),
            C(c, {
              enabled: c.params.enabled,
              el: t,
              classNames: [],
              slides: y(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === c.params.direction;
              },
              isVertical: function () {
                return "vertical" === c.params.direction;
              },
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: c.params.allowSlideNext,
              allowSlidePrev: c.params.allowSlidePrev,
              touchEvents:
                ((d = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                (u = ["mousedown", "mousemove", "mouseup"]),
                c.support.pointerEvents &&
                  (u = ["pointerdown", "pointermove", "pointerup"]),
                (c.touchEventsTouch = {
                  start: d[0],
                  move: d[1],
                  end: d[2],
                  cancel: d[3],
                }),
                (c.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
                c.support.touch || !c.params.simulateTouch
                  ? c.touchEventsTouch
                  : c.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: c.params.focusableElements,
                lastClickTime: b(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: c.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            c.useModules(),
            c.emit("_swiper"),
            c.params.init && c.init(),
            c
          );
        }
        var t,
          n,
          i = e.prototype;
        return (
          (i.enable = function () {
            var e = this;
            e.enabled ||
              ((e.enabled = !0),
              e.params.grabCursor && e.setGrabCursor(),
              e.emit("enable"));
          }),
          (i.disable = function () {
            var e = this;
            e.enabled &&
              ((e.enabled = !1),
              e.params.grabCursor && e.unsetGrabCursor(),
              e.emit("disable"));
          }),
          (i.setProgress = function (e, t) {
            var n = this;
            e = Math.min(Math.max(e, 0), 1);
            var i = n.minTranslate(),
              r = (n.maxTranslate() - i) * e + i;
            n.translateTo(r, void 0 === t ? 0 : t),
              n.updateActiveIndex(),
              n.updateSlidesClasses();
          }),
          (i.emitContainerClasses = function () {
            var e = this;
            if (e.params._emitClasses && e.el) {
              var t = e.el.className.split(" ").filter(function (t) {
                return (
                  0 === t.indexOf("swiper-container") ||
                  0 === t.indexOf(e.params.containerModifierClass)
                );
              });
              e.emit("_containerClasses", t.join(" "));
            }
          }),
          (i.getSlideClasses = function (e) {
            var t = this;
            return e.className
              .split(" ")
              .filter(function (e) {
                return (
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
                );
              })
              .join(" ");
          }),
          (i.emitSlidesClasses = function () {
            var e = this;
            if (e.params._emitClasses && e.el) {
              var t = [];
              e.slides.each(function (n) {
                var i = e.getSlideClasses(n);
                t.push({ slideEl: n, classNames: i }),
                  e.emit("_slideClass", n, i);
              }),
                e.emit("_slideClasses", t);
            }
          }),
          (i.slidesPerViewDynamic = function () {
            var e = this,
              t = e.params,
              n = e.slides,
              i = e.slidesGrid,
              r = e.size,
              a = e.activeIndex,
              o = 1;
            if (t.centeredSlides) {
              for (
                var s, l = n[a].swiperSlideSize, c = a + 1;
                c < n.length;
                c += 1
              )
                n[c] &&
                  !s &&
                  ((o += 1), (l += n[c].swiperSlideSize) > r && (s = !0));
              for (var d = a - 1; d >= 0; d -= 1)
                n[d] &&
                  !s &&
                  ((o += 1), (l += n[d].swiperSlideSize) > r && (s = !0));
            } else
              for (var u = a + 1; u < n.length; u += 1)
                i[u] - i[a] < r && (o += 1);
            return o;
          }),
          (i.update = function () {
            var e = this;
            if (e && !e.destroyed) {
              var t = e.snapGrid,
                n = e.params;
              n.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode
                  ? (i(), e.params.autoHeight && e.updateAutoHeight())
                  : (("auto" === e.params.slidesPerView ||
                      e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                      : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
                n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update");
            }
            function i() {
              var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
            }
          }),
          (i.changeDirection = function (e, t) {
            void 0 === t && (t = !0);
            var n = this,
              i = n.params.direction;
            return (
              e || (e = "horizontal" === i ? "vertical" : "horizontal"),
              e === i ||
                ("horizontal" !== e && "vertical" !== e) ||
                (n.$el
                  .removeClass("" + n.params.containerModifierClass + i)
                  .addClass("" + n.params.containerModifierClass + e),
                n.emitContainerClasses(),
                (n.params.direction = e),
                n.slides.each(function (t) {
                  "vertical" === e
                    ? (t.style.width = "")
                    : (t.style.height = "");
                }),
                n.emit("changeDirection"),
                t && n.update()),
              n
            );
          }),
          (i.mount = function (e) {
            var t = this;
            if (t.mounted) return !0;
            var n = y(e || t.params.el);
            if (!(e = n[0])) return !1;
            e.swiper = t;
            var i = function () {
                return (
                  "." +
                  (t.params.wrapperClass || "").trim().split(" ").join(".")
                );
              },
              a = (function () {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                  var t = y(e.shadowRoot.querySelector(i()));
                  return (
                    (t.children = function (e) {
                      return n.children(e);
                    }),
                    t
                  );
                }
                return n.children(i());
              })();
            if (0 === a.length && t.params.createElements) {
              var o = r().createElement("div");
              (a = y(o)),
                (o.className = t.params.wrapperClass),
                n.append(o),
                n.children("." + t.params.slideClass).each(function (e) {
                  a.append(e);
                });
            }
            return (
              C(t, {
                $el: n,
                el: e,
                $wrapperEl: a,
                wrapperEl: a[0],
                mounted: !0,
                rtl:
                  "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate:
                  "horizontal" === t.params.direction &&
                  ("rtl" === e.dir.toLowerCase() ||
                    "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === a.css("display"),
              }),
              !0
            );
          }),
          (i.init = function (e) {
            var t = this;
            return (
              t.initialized ||
                !1 === t.mount(e) ||
                (t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.params.loop && t.loopCreate(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.preloadImages && t.preloadImages(),
                t.params.loop
                  ? t.slideTo(
                      t.params.initialSlide + t.loopedSlides,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0,
                    )
                  : t.slideTo(
                      t.params.initialSlide,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0,
                    ),
                t.attachEvents(),
                (t.initialized = !0),
                t.emit("init"),
                t.emit("afterInit")),
              t
            );
          }),
          (i.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var n,
              i = this,
              r = i.params,
              a = i.$el,
              o = i.$wrapperEl,
              s = i.slides;
            return (
              void 0 === i.params ||
                i.destroyed ||
                (i.emit("beforeDestroy"),
                (i.initialized = !1),
                i.detachEvents(),
                r.loop && i.loopDestroy(),
                t &&
                  (i.removeClasses(),
                  a.removeAttr("style"),
                  o.removeAttr("style"),
                  s &&
                    s.length &&
                    s
                      .removeClass(
                        [
                          r.slideVisibleClass,
                          r.slideActiveClass,
                          r.slideNextClass,
                          r.slidePrevClass,
                        ].join(" "),
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(function (e) {
                  i.off(e);
                }),
                !1 !== e &&
                  ((i.$el[0].swiper = null),
                  (n = i),
                  Object.keys(n).forEach(function (e) {
                    try {
                      n[e] = null;
                    } catch (e) {}
                    try {
                      delete n[e];
                    } catch (e) {}
                  })),
                (i.destroyed = !0)),
              null
            );
          }),
          (e.extendDefaults = function (e) {
            C(J, e);
          }),
          (e.installModule = function (t) {
            e.prototype.modules || (e.prototype.modules = {});
            var n =
              t.name || Object.keys(e.prototype.modules).length + "_" + b();
            e.prototype.modules[n] = t;
          }),
          (e.use = function (t) {
            return Array.isArray(t)
              ? (t.forEach(function (t) {
                  return e.installModule(t);
                }),
                e)
              : (e.installModule(t), e);
          }),
          (t = e),
          (n = [
            {
              key: "extendedDefaults",
              get: function () {
                return J;
              },
            },
            {
              key: "defaults",
              get: function () {
                return Y;
              },
            },
          ]),
          null && U(t.prototype, null),
          n && U(t, n),
          e
        );
      })();
    Object.keys(K).forEach(function (e) {
      Object.keys(K[e]).forEach(function (t) {
        Z.prototype[t] = K[e][t];
      });
    }),
      Z.use([L, j]);
    const Q = Z;
    function ee() {
      return (
        (ee =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
        ee.apply(this, arguments)
      );
    }
    var te = {
      toggleEl: function (e, t) {
        e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
      },
      update: function () {
        var e = this,
          t = e.params.navigation,
          n = e.navigation.toggleEl;
        if (!e.params.loop) {
          var i = e.navigation,
            r = i.$nextEl,
            a = i.$prevEl;
          a &&
            a.length > 0 &&
            (e.isBeginning ? n(a, !0) : n(a, !1),
            e.params.watchOverflow &&
              e.enabled &&
              a[e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
            r &&
              r.length > 0 &&
              (e.isEnd ? n(r, !0) : n(r, !1),
              e.params.watchOverflow &&
                e.enabled &&
                r[e.isLocked ? "addClass" : "removeClass"](t.lockClass));
        }
      },
      onPrevClick: function (e) {
        var t = this;
        e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
      },
      onNextClick: function (e) {
        var t = this;
        e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
      },
      init: function () {
        var e,
          t,
          n = this,
          i = n.params.navigation;
        (n.params.navigation = E(
          n.$el,
          n.params.navigation,
          n.params.createElements,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
        )),
          (i.nextEl || i.prevEl) &&
            (i.nextEl &&
              ((e = y(i.nextEl)),
              n.params.uniqueNavElements &&
                "string" == typeof i.nextEl &&
                e.length > 1 &&
                1 === n.$el.find(i.nextEl).length &&
                (e = n.$el.find(i.nextEl))),
            i.prevEl &&
              ((t = y(i.prevEl)),
              n.params.uniqueNavElements &&
                "string" == typeof i.prevEl &&
                t.length > 1 &&
                1 === n.$el.find(i.prevEl).length &&
                (t = n.$el.find(i.prevEl))),
            e && e.length > 0 && e.on("click", n.navigation.onNextClick),
            t && t.length > 0 && t.on("click", n.navigation.onPrevClick),
            C(n.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: t,
              prevEl: t && t[0],
            }),
            n.enabled ||
              (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          n = t.$nextEl,
          i = t.$prevEl;
        n &&
          n.length &&
          (n.off("click", e.navigation.onNextClick),
          n.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass));
      },
    };
    const ne = {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      },
      create: function () {
        T(this, { navigation: ee({}, te) });
      },
      on: {
        init: function (e) {
          e.navigation.init(), e.navigation.update();
        },
        toEdge: function (e) {
          e.navigation.update();
        },
        fromEdge: function (e) {
          e.navigation.update();
        },
        destroy: function (e) {
          e.navigation.destroy();
        },
        "enable disable": function (e) {
          var t = e.navigation,
            n = t.$nextEl,
            i = t.$prevEl;
          n &&
            n[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass,
            ),
            i &&
              i[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass,
              );
        },
        click: function (e, t) {
          var n = e.navigation,
            i = n.$nextEl,
            r = n.$prevEl,
            a = t.target;
          if (e.params.navigation.hideOnClick && !y(a).is(r) && !y(a).is(i)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === a || e.pagination.el.contains(a))
            )
              return;
            var o;
            i
              ? (o = i.hasClass(e.params.navigation.hiddenClass))
              : r && (o = r.hasClass(e.params.navigation.hiddenClass)),
              !0 === o ? e.emit("navigationShow") : e.emit("navigationHide"),
              i && i.toggleClass(e.params.navigation.hiddenClass),
              r && r.toggleClass(e.params.navigation.hiddenClass);
          }
        },
      },
    };
    function ie() {
      return (
        (ie =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
        ie.apply(this, arguments)
      );
    }
    var re = {
      update: function () {
        var e = this,
          t = e.rtl,
          n = e.params.pagination;
        if (
          n.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var i,
            r =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            a = e.pagination.$el,
            o = e.params.loop
              ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((i = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup,
                )) >
                  r - 1 - 2 * e.loopedSlides && (i -= r - 2 * e.loopedSlides),
                i > o - 1 && (i -= o),
                i < 0 && "bullets" !== e.params.paginationType && (i = o + i))
              : (i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === n.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            var s,
              l,
              c,
              d = e.pagination.bullets;
            if (
              (n.dynamicBullets &&
                ((e.pagination.bulletSize = d
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                a.css(
                  e.isHorizontal() ? "width" : "height",
                  e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px",
                ),
                n.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                  e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        n.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (s = i - e.pagination.dynamicBulletIndex),
                (c =
                  ((l = s + (Math.min(d.length, n.dynamicMainBullets) - 1)) +
                    s) /
                  2)),
              d.removeClass(
                n.bulletActiveClass +
                  " " +
                  n.bulletActiveClass +
                  "-next " +
                  n.bulletActiveClass +
                  "-next-next " +
                  n.bulletActiveClass +
                  "-prev " +
                  n.bulletActiveClass +
                  "-prev-prev " +
                  n.bulletActiveClass +
                  "-main",
              ),
              a.length > 1)
            )
              d.each(function (e) {
                var t = y(e),
                  r = t.index();
                r === i && t.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (r >= s &&
                      r <= l &&
                      t.addClass(n.bulletActiveClass + "-main"),
                    r === s &&
                      t
                        .prev()
                        .addClass(n.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(n.bulletActiveClass + "-prev-prev"),
                    r === l &&
                      t
                        .next()
                        .addClass(n.bulletActiveClass + "-next")
                        .next()
                        .addClass(n.bulletActiveClass + "-next-next"));
              });
            else {
              var u = d.eq(i),
                p = u.index();
              if ((u.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                for (var f = d.eq(s), h = d.eq(l), v = s; v <= l; v += 1)
                  d.eq(v).addClass(n.bulletActiveClass + "-main");
                if (e.params.loop)
                  if (p >= d.length - n.dynamicMainBullets) {
                    for (var g = n.dynamicMainBullets; g >= 0; g -= 1)
                      d.eq(d.length - g).addClass(
                        n.bulletActiveClass + "-main",
                      );
                    d.eq(d.length - n.dynamicMainBullets - 1).addClass(
                      n.bulletActiveClass + "-prev",
                    );
                  } else
                    f
                      .prev()
                      .addClass(n.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(n.bulletActiveClass + "-prev-prev"),
                      h
                        .next()
                        .addClass(n.bulletActiveClass + "-next")
                        .next()
                        .addClass(n.bulletActiveClass + "-next-next");
                else
                  f
                    .prev()
                    .addClass(n.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(n.bulletActiveClass + "-prev-prev"),
                    h
                      .next()
                      .addClass(n.bulletActiveClass + "-next")
                      .next()
                      .addClass(n.bulletActiveClass + "-next-next");
              }
            }
            if (n.dynamicBullets) {
              var m = Math.min(d.length, n.dynamicMainBullets + 4),
                w =
                  (e.pagination.bulletSize * m - e.pagination.bulletSize) / 2 -
                  c * e.pagination.bulletSize,
                b = t ? "right" : "left";
              d.css(e.isHorizontal() ? b : "top", w + "px");
            }
          }
          if (
            ("fraction" === n.type &&
              (a.find(k(n.currentClass)).text(n.formatFractionCurrent(i + 1)),
              a.find(k(n.totalClass)).text(n.formatFractionTotal(o))),
            "progressbar" === n.type)
          ) {
            var x;
            x = n.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            var C = (i + 1) / o,
              T = 1,
              E = 1;
            "horizontal" === x ? (T = C) : (E = C),
              a
                .find(k(n.progressbarFillClass))
                .transform(
                  "translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")",
                )
                .transition(e.params.speed);
          }
          "custom" === n.type && n.renderCustom
            ? (a.html(n.renderCustom(e, i + 1, o)),
              e.emit("paginationRender", a[0]))
            : e.emit("paginationUpdate", a[0]),
            e.params.watchOverflow &&
              e.enabled &&
              a[e.isLocked ? "addClass" : "removeClass"](n.lockClass);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var n =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            r = "";
          if ("bullets" === t.type) {
            var a = e.params.loop
              ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode && !e.params.loop && a > n && (a = n);
            for (var o = 0; o < a; o += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, o, t.bulletClass))
                : (r +=
                    "<" +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    ">");
            i.html(r), (e.pagination.bullets = i.find(k(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(r)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this;
        e.params.pagination = E(
          e.$el,
          e.params.pagination,
          e.params.createElements,
          { el: "swiper-pagination" },
        );
        var t = e.params.pagination;
        if (t.el) {
          var n = y(t.el);
          0 !== n.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              n.length > 1 &&
              (n = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
            n.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (n.addClass("" + t.modifierClass + t.type + "-dynamic"),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              n.addClass(t.progressbarOppositeClass),
            t.clickable &&
              n.on("click", k(t.bulletClass), function (t) {
                t.preventDefault();
                var n = y(this).index() * e.params.slidesPerGroup;
                e.params.loop && (n += e.loopedSlides), e.slideTo(n);
              }),
            C(e.pagination, { $el: n, el: n[0] }),
            e.enabled || n.addClass(t.lockClass));
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var n = e.pagination.$el;
          n.removeClass(t.hiddenClass),
            n.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && n.off("click", k(t.bulletClass));
        }
      },
    };
    const ae = {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function (e) {
            return e;
          },
          formatFractionTotal: function (e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock",
        },
      },
      create: function () {
        T(this, { pagination: ie({ dynamicBulletIndex: 0 }, re) });
      },
      on: {
        init: function (e) {
          e.pagination.init(), e.pagination.render(), e.pagination.update();
        },
        activeIndexChange: function (e) {
          (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
        },
        snapIndexChange: function (e) {
          e.params.loop || e.pagination.update();
        },
        slidesLengthChange: function (e) {
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function (e) {
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function (e) {
          e.pagination.destroy();
        },
        "enable disable": function (e) {
          var t = e.pagination.$el;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass,
            );
        },
        click: function (e, t) {
          var n = t.target;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            e.pagination.$el.length > 0 &&
            !y(n).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                (e.navigation.prevEl && n === e.navigation.prevEl))
            )
              return;
            !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
              ? e.emit("paginationShow")
              : e.emit("paginationHide"),
              e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
          }
        },
      },
    };
    function oe() {
      return (
        (oe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
        oe.apply(this, arguments)
      );
    }
    var se = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            n = e.rtlTranslate,
            i = e.progress,
            r = t.dragSize,
            a = t.trackSize,
            o = t.$dragEl,
            s = t.$el,
            l = e.params.scrollbar,
            c = r,
            d = (a - r) * i;
          n
            ? (d = -d) > 0
              ? ((c = r - d), (d = 0))
              : -d + r > a && (c = a + d)
            : d < 0
            ? ((c = r + d), (d = 0))
            : d + r > a && (c = a - d),
            e.isHorizontal()
              ? (o.transform("translate3d(" + d + "px, 0, 0)"),
                (o[0].style.width = c + "px"))
              : (o.transform("translate3d(0px, " + d + "px, 0)"),
                (o[0].style.height = c + "px")),
            l.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (s[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                (s[0].style.opacity = 0), s.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        var t = this;
        t.params.scrollbar.el &&
          t.scrollbar.el &&
          t.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            n = t.$dragEl,
            i = t.$el;
          (n[0].style.width = ""), (n[0].style.height = "");
          var r,
            a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            o = e.size / e.virtualSize,
            s = o * (a / e.size);
          (r =
            "auto" === e.params.scrollbar.dragSize
              ? a * o
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (n[0].style.width = r + "px")
              : (n[0].style.height = r + "px"),
            (i[0].style.display = o >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            C(t, { trackSize: a, divider: o, moveDivider: s, dragSize: r }),
            e.params.watchOverflow &&
              e.enabled &&
              t.$el[e.isLocked ? "addClass" : "removeClass"](
                e.params.scrollbar.lockClass,
              );
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition: function (e) {
        var t,
          n = this,
          i = n.scrollbar,
          r = n.rtlTranslate,
          a = i.$el,
          o = i.dragSize,
          s = i.trackSize,
          l = i.dragStartPos;
        (t =
          (i.getPointerPosition(e) -
            a.offset()[n.isHorizontal() ? "left" : "top"] -
            (null !== l ? l : o / 2)) /
          (s - o)),
          (t = Math.max(Math.min(t, 1), 0)),
          r && (t = 1 - t);
        var c = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
        n.updateProgress(c),
          n.setTranslate(c),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this,
          n = t.params.scrollbar,
          i = t.scrollbar,
          r = t.$wrapperEl,
          a = i.$el,
          o = i.$dragEl;
        (t.scrollbar.isTouched = !0),
          (t.scrollbar.dragStartPos =
            e.target === o[0] || e.target === o
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          r.transition(100),
          o.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          a.transition(0),
          n.hide && a.css("opacity", 1),
          t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
          t.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this,
          n = t.scrollbar,
          i = t.$wrapperEl,
          r = n.$el,
          a = n.$dragEl;
        t.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          n.setDragPosition(e),
          i.transition(0),
          r.transition(0),
          a.transition(0),
          t.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this,
          n = t.params.scrollbar,
          i = t.scrollbar,
          r = t.$wrapperEl,
          a = i.$el;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
          n.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = w(function () {
              a.css("opacity", 0), a.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          n.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            n = e.scrollbar,
            i = e.touchEventsTouch,
            a = e.touchEventsDesktop,
            o = e.params,
            s = e.support,
            l = n.$el[0],
            c = !(!s.passiveListener || !o.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!s.passiveListener || !o.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          l &&
            (s.touch
              ? (l.addEventListener(i.start, e.scrollbar.onDragStart, c),
                l.addEventListener(i.move, e.scrollbar.onDragMove, c),
                l.addEventListener(i.end, e.scrollbar.onDragEnd, d))
              : (l.addEventListener(a.start, e.scrollbar.onDragStart, c),
                t.addEventListener(a.move, e.scrollbar.onDragMove, c),
                t.addEventListener(a.end, e.scrollbar.onDragEnd, d)));
        }
      },
      disableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            n = e.scrollbar,
            i = e.touchEventsTouch,
            a = e.touchEventsDesktop,
            o = e.params,
            s = e.support,
            l = n.$el[0],
            c = !(!s.passiveListener || !o.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!s.passiveListener || !o.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          l &&
            (s.touch
              ? (l.removeEventListener(i.start, e.scrollbar.onDragStart, c),
                l.removeEventListener(i.move, e.scrollbar.onDragMove, c),
                l.removeEventListener(i.end, e.scrollbar.onDragEnd, d))
              : (l.removeEventListener(a.start, e.scrollbar.onDragStart, c),
                t.removeEventListener(a.move, e.scrollbar.onDragMove, c),
                t.removeEventListener(a.end, e.scrollbar.onDragEnd, d)));
        }
      },
      init: function () {
        var e = this,
          t = e.scrollbar,
          n = e.$el;
        e.params.scrollbar = E(n, e.params.scrollbar, e.params.createElements, {
          el: "swiper-scrollbar",
        });
        var i = e.params.scrollbar;
        if (i.el) {
          var r = y(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            r.length > 1 &&
            1 === n.find(i.el).length &&
            (r = n.find(i.el));
          var a = r.find("." + e.params.scrollbar.dragClass);
          0 === a.length &&
            ((a = y(
              '<div class="' + e.params.scrollbar.dragClass + '"></div>',
            )),
            r.append(a)),
            C(t, { $el: r, el: r[0], $dragEl: a, dragEl: a[0] }),
            i.draggable && t.enableDraggable(),
            r &&
              r[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass,
              );
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    };
    const le = {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
        },
      },
      create: function () {
        T(this, {
          scrollbar: oe(
            { isTouched: !1, timeout: null, dragTimeout: null },
            se,
          ),
        });
      },
      on: {
        init: function (e) {
          e.scrollbar.init(),
            e.scrollbar.updateSize(),
            e.scrollbar.setTranslate();
        },
        update: function (e) {
          e.scrollbar.updateSize();
        },
        resize: function (e) {
          e.scrollbar.updateSize();
        },
        observerUpdate: function (e) {
          e.scrollbar.updateSize();
        },
        setTranslate: function (e) {
          e.scrollbar.setTranslate();
        },
        setTransition: function (e, t) {
          e.scrollbar.setTransition(t);
        },
        "enable disable": function (e) {
          var t = e.scrollbar.$el;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.scrollbar.lockClass,
            );
        },
        destroy: function (e) {
          e.scrollbar.destroy();
        },
      },
    };
    var ce = {
      lastScrollTime: b(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return o().navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
              var e = r(),
                t = "onwheel",
                n = t in e;
              if (!n) {
                var i = e.createElement("div");
                i.setAttribute(t, "return;"), (n = "function" == typeof i[t]);
              }
              return (
                !n &&
                  e.implementation &&
                  e.implementation.hasFeature &&
                  !0 !== e.implementation.hasFeature("", "") &&
                  (n = e.implementation.hasFeature("Events.wheel", "3.0")),
                n
              );
            })()
          ? "wheel"
          : "mousewheel";
      },
      normalize: function (e) {
        var t = 0,
          n = 0,
          i = 0,
          r = 0;
        return (
          "detail" in e && (n = e.detail),
          "wheelDelta" in e && (n = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
          (i = 10 * t),
          (r = 10 * n),
          "deltaY" in e && (r = e.deltaY),
          "deltaX" in e && (i = e.deltaX),
          e.shiftKey && !i && ((i = r), (r = 0)),
          (i || r) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (r *= 40))
              : ((i *= 800), (r *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          r && !n && (n = r < 1 ? -1 : 1),
          { spinX: t, spinY: n, pixelX: i, pixelY: r }
        );
      },
      handleMouseEnter: function () {
        this.enabled && (this.mouseEntered = !0);
      },
      handleMouseLeave: function () {
        this.enabled && (this.mouseEntered = !1);
      },
      handle: function (e) {
        var t = e,
          n = this;
        if (n.enabled) {
          var i = n.params.mousewheel;
          n.params.cssMode && t.preventDefault();
          var r = n.$el;
          if (
            ("container" !== n.params.mousewheel.eventsTarget &&
              (r = y(n.params.mousewheel.eventsTarget)),
            !n.mouseEntered && !r[0].contains(t.target) && !i.releaseOnEdges)
          )
            return !0;
          t.originalEvent && (t = t.originalEvent);
          var a = 0,
            o = n.rtlTranslate ? -1 : 1,
            s = ce.normalize(t);
          if (i.forceToAxis)
            if (n.isHorizontal()) {
              if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
              a = -s.pixelX * o;
            } else {
              if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
              a = -s.pixelY;
            }
          else
            a =
              Math.abs(s.pixelX) > Math.abs(s.pixelY)
                ? -s.pixelX * o
                : -s.pixelY;
          if (0 === a) return !0;
          i.invert && (a = -a);
          var l = n.getTranslate() + a * i.sensitivity;
          if (
            (l >= n.minTranslate() && (l = n.minTranslate()),
            l <= n.maxTranslate() && (l = n.maxTranslate()),
            (!!n.params.loop ||
              !(l === n.minTranslate() || l === n.maxTranslate())) &&
              n.params.nested &&
              t.stopPropagation(),
            n.params.freeMode)
          ) {
            var c = { time: b(), delta: Math.abs(a), direction: Math.sign(a) },
              d = n.mousewheel.lastEventBeforeSnap,
              u =
                d &&
                c.time < d.time + 500 &&
                c.delta <= d.delta &&
                c.direction === d.direction;
            if (!u) {
              (n.mousewheel.lastEventBeforeSnap = void 0),
                n.params.loop && n.loopFix();
              var p = n.getTranslate() + a * i.sensitivity,
                f = n.isBeginning,
                h = n.isEnd;
              if (
                (p >= n.minTranslate() && (p = n.minTranslate()),
                p <= n.maxTranslate() && (p = n.maxTranslate()),
                n.setTransition(0),
                n.setTranslate(p),
                n.updateProgress(),
                n.updateActiveIndex(),
                n.updateSlidesClasses(),
                ((!f && n.isBeginning) || (!h && n.isEnd)) &&
                  n.updateSlidesClasses(),
                n.params.freeModeSticky)
              ) {
                clearTimeout(n.mousewheel.timeout),
                  (n.mousewheel.timeout = void 0);
                var v = n.mousewheel.recentWheelEvents;
                v.length >= 15 && v.shift();
                var g = v.length ? v[v.length - 1] : void 0,
                  m = v[0];
                if (
                  (v.push(c),
                  g && (c.delta > g.delta || c.direction !== g.direction))
                )
                  v.splice(0);
                else if (
                  v.length >= 15 &&
                  c.time - m.time < 500 &&
                  m.delta - c.delta >= 1 &&
                  c.delta <= 6
                ) {
                  var x = a > 0 ? 0.8 : 0.2;
                  (n.mousewheel.lastEventBeforeSnap = c),
                    v.splice(0),
                    (n.mousewheel.timeout = w(function () {
                      n.slideToClosest(n.params.speed, !0, void 0, x);
                    }, 0));
                }
                n.mousewheel.timeout ||
                  (n.mousewheel.timeout = w(function () {
                    (n.mousewheel.lastEventBeforeSnap = c),
                      v.splice(0),
                      n.slideToClosest(n.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (u || n.emit("scroll", t),
                n.params.autoplay &&
                  n.params.autoplayDisableOnInteraction &&
                  n.autoplay.stop(),
                p === n.minTranslate() || p === n.maxTranslate())
              )
                return !0;
            }
          } else {
            var C = {
                time: b(),
                delta: Math.abs(a),
                direction: Math.sign(a),
                raw: e,
              },
              T = n.mousewheel.recentWheelEvents;
            T.length >= 2 && T.shift();
            var k = T.length ? T[T.length - 1] : void 0;
            if (
              (T.push(C),
              k
                ? (C.direction !== k.direction ||
                    C.delta > k.delta ||
                    C.time > k.time + 150) &&
                  n.mousewheel.animateSlider(C)
                : n.mousewheel.animateSlider(C),
              n.mousewheel.releaseScroll(C))
            )
              return !0;
          }
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
          );
        }
      },
      animateSlider: function (e) {
        var t = this,
          n = o();
        return !(
          (this.params.mousewheel.thresholdDelta &&
            e.delta < this.params.mousewheel.thresholdDelta) ||
          (this.params.mousewheel.thresholdTime &&
            b() - t.mousewheel.lastScrollTime <
              this.params.mousewheel.thresholdTime) ||
          (!(e.delta >= 6 && b() - t.mousewheel.lastScrollTime < 60) &&
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), t.emit("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), t.emit("scroll", e.raw)),
            (t.mousewheel.lastScrollTime = new n.Date().getTime()),
            1))
        );
      },
      releaseScroll: function (e) {
        var t = this,
          n = t.params.mousewheel;
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function () {
        var e = this,
          t = ce.event();
        if (e.params.cssMode)
          return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (e.mousewheel.enabled) return !1;
        var n = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarget &&
            (n = y(e.params.mousewheel.eventsTarget)),
          n.on("mouseenter", e.mousewheel.handleMouseEnter),
          n.on("mouseleave", e.mousewheel.handleMouseLeave),
          n.on(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var e = this,
          t = ce.event();
        if (e.params.cssMode)
          return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (!e.mousewheel.enabled) return !1;
        var n = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarget &&
            (n = y(e.params.mousewheel.eventsTarget)),
          n.off(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !1),
          !0
        );
      },
    };
    const de = {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
        },
      },
      create: function () {
        T(this, {
          mousewheel: {
            enabled: !1,
            lastScrollTime: b(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            enable: ce.enable,
            disable: ce.disable,
            handle: ce.handle,
            handleMouseEnter: ce.handleMouseEnter,
            handleMouseLeave: ce.handleMouseLeave,
            animateSlider: ce.animateSlider,
            releaseScroll: ce.releaseScroll,
          },
        });
      },
      on: {
        init: function (e) {
          !e.params.mousewheel.enabled &&
            e.params.cssMode &&
            e.mousewheel.disable(),
            e.params.mousewheel.enabled && e.mousewheel.enable();
        },
        destroy: function (e) {
          e.params.cssMode && e.mousewheel.enable(),
            e.mousewheel.enabled && e.mousewheel.disable();
        },
      },
    };
    function ue() {
      return (
        (ue =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
        ue.apply(this, arguments)
      );
    }
    var pe = {
      LinearSpline: function (e, t) {
        var n, i, r, a, o;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((o = (function (e, t) {
                  for (i = -1, n = e.length; n - i > 1; )
                    e[(r = (n + i) >> 1)] <= t ? (i = r) : (n = r);
                  return n;
                })(this.x, e)),
                (a = o - 1),
                ((e - this.x[a]) * (this.y[o] - this.y[a])) /
                  (this.x[o] - this.x[a]) +
                  this.y[a])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new pe.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new pe.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var n,
          i,
          r = this,
          a = r.controller.control,
          o = r.constructor;
        function s(e) {
          var t = r.rtlTranslate ? -r.translate : r.translate;
          "slide" === r.params.controller.by &&
            (r.controller.getInterpolateFunction(e),
            (i = -r.controller.spline.interpolate(-t))),
            (i && "container" !== r.params.controller.by) ||
              ((n =
                (e.maxTranslate() - e.minTranslate()) /
                (r.maxTranslate() - r.minTranslate())),
              (i = (t - r.minTranslate()) * n + e.minTranslate())),
            r.params.controller.inverse && (i = e.maxTranslate() - i),
            e.updateProgress(i),
            e.setTranslate(i, r),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(a))
          for (var l = 0; l < a.length; l += 1)
            a[l] !== t && a[l] instanceof o && s(a[l]);
        else a instanceof o && t !== a && s(a);
      },
      setTransition: function (e, t) {
        var n,
          i = this,
          r = i.constructor,
          a = i.controller.control;
        function o(t) {
          t.setTransition(e, i),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                w(function () {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function () {
                a &&
                  (t.params.loop &&
                    "slide" === i.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(a))
          for (n = 0; n < a.length; n += 1)
            a[n] !== t && a[n] instanceof r && o(a[n]);
        else a instanceof r && t !== a && o(a);
      },
    };
    const fe = {
      name: "controller",
      params: { controller: { control: void 0, inverse: !1, by: "slide" } },
      create: function () {
        T(this, {
          controller: ue({ control: this.params.controller.control }, pe),
        });
      },
      on: {
        update: function (e) {
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        },
        resize: function (e) {
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        },
        observerUpdate: function (e) {
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        },
        setTranslate: function (e, t, n) {
          e.controller.control && e.controller.setTranslate(t, n);
        },
        setTransition: function (e, t, n) {
          e.controller.control && e.controller.setTransition(t, n);
        },
      },
    };
    function he() {
      return (
        (he =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
        he.apply(this, arguments)
      );
    }
    var ve = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var n = this,
          i = n.params.lazy;
        if (void 0 !== e && 0 !== n.slides.length) {
          var r =
              n.virtual && n.params.virtual.enabled
                ? n.$wrapperEl.children(
                    "." +
                      n.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]',
                  )
                : n.slides.eq(e),
            a = r.find(
              "." +
                i.elementClass +
                ":not(." +
                i.loadedClass +
                "):not(." +
                i.loadingClass +
                ")",
            );
          !r.hasClass(i.elementClass) ||
            r.hasClass(i.loadedClass) ||
            r.hasClass(i.loadingClass) ||
            a.push(r[0]),
            0 !== a.length &&
              a.each(function (e) {
                var a = y(e);
                a.addClass(i.loadingClass);
                var o = a.attr("data-background"),
                  s = a.attr("data-src"),
                  l = a.attr("data-srcset"),
                  c = a.attr("data-sizes"),
                  d = a.parent("picture");
                n.loadImage(a[0], s || o, l, c, !1, function () {
                  if (null != n && n && (!n || n.params) && !n.destroyed) {
                    if (
                      (o
                        ? (a.css("background-image", 'url("' + o + '")'),
                          a.removeAttr("data-background"))
                        : (l &&
                            (a.attr("srcset", l), a.removeAttr("data-srcset")),
                          c && (a.attr("sizes", c), a.removeAttr("data-sizes")),
                          d.length &&
                            d.children("source").each(function (e) {
                              var t = y(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          s && (a.attr("src", s), a.removeAttr("data-src"))),
                      a.addClass(i.loadedClass).removeClass(i.loadingClass),
                      r.find("." + i.preloaderClass).remove(),
                      n.params.loop && t)
                    ) {
                      var e = r.attr("data-swiper-slide-index");
                      if (r.hasClass(n.params.slideDuplicateClass)) {
                        var u = n.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            n.params.slideDuplicateClass +
                            ")",
                        );
                        n.lazy.loadInSlide(u.index(), !1);
                      } else {
                        var p = n.$wrapperEl.children(
                          "." +
                            n.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]',
                        );
                        n.lazy.loadInSlide(p.index(), !1);
                      }
                    }
                    n.emit("lazyImageReady", r[0], a[0]),
                      n.params.autoHeight && n.updateAutoHeight();
                  }
                }),
                  n.emit("lazyImageLoad", r[0], a[0]);
              });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          n = e.params,
          i = e.slides,
          r = e.activeIndex,
          a = e.virtual && n.virtual.enabled,
          o = n.lazy,
          s = n.slidesPerView;
        function l(e) {
          if (a) {
            if (
              t.children(
                "." + n.slideClass + '[data-swiper-slide-index="' + e + '"]',
              ).length
            )
              return !0;
          } else if (i[e]) return !0;
          return !1;
        }
        function c(e) {
          return a ? y(e).attr("data-swiper-slide-index") : y(e).index();
        }
        if (
          ("auto" === s && (s = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + n.slideVisibleClass).each(function (t) {
            var n = a ? y(t).attr("data-swiper-slide-index") : y(t).index();
            e.lazy.loadInSlide(n);
          });
        else if (s > 1)
          for (var d = r; d < r + s; d += 1) l(d) && e.lazy.loadInSlide(d);
        else e.lazy.loadInSlide(r);
        if (o.loadPrevNext)
          if (s > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            for (
              var u = o.loadPrevNextAmount,
                p = s,
                f = Math.min(r + p + Math.max(u, p), i.length),
                h = Math.max(r - Math.max(p, u), 0),
                v = r + s;
              v < f;
              v += 1
            )
              l(v) && e.lazy.loadInSlide(v);
            for (var g = h; g < r; g += 1) l(g) && e.lazy.loadInSlide(g);
          } else {
            var m = t.children("." + n.slideNextClass);
            m.length > 0 && e.lazy.loadInSlide(c(m));
            var w = t.children("." + n.slidePrevClass);
            w.length > 0 && e.lazy.loadInSlide(c(w));
          }
      },
      checkInViewOnLoad: function () {
        var e = o(),
          t = this;
        if (t && !t.destroyed) {
          var n = t.params.lazy.scrollingElement
              ? y(t.params.lazy.scrollingElement)
              : y(e),
            i = n[0] === e,
            r = i ? e.innerWidth : n[0].offsetWidth,
            a = i ? e.innerHeight : n[0].offsetHeight,
            s = t.$el.offset(),
            l = !1;
          t.rtlTranslate && (s.left -= t.$el[0].scrollLeft);
          for (
            var c = [
                [s.left, s.top],
                [s.left + t.width, s.top],
                [s.left, s.top + t.height],
                [s.left + t.width, s.top + t.height],
              ],
              d = 0;
            d < c.length;
            d += 1
          ) {
            var u = c[d];
            if (u[0] >= 0 && u[0] <= r && u[1] >= 0 && u[1] <= a) {
              if (0 === u[0] && 0 === u[1]) continue;
              l = !0;
            }
          }
          var p = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          l
            ? (t.lazy.load(), n.off("scroll", t.lazy.checkInViewOnLoad, p))
            : t.lazy.scrollHandlerAttached ||
              ((t.lazy.scrollHandlerAttached = !0),
              n.on("scroll", t.lazy.checkInViewOnLoad, p));
        }
      },
    };
    const ge = {
      name: "lazy",
      params: {
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      },
      create: function () {
        T(this, { lazy: he({ initialImageLoaded: !1 }, ve) });
      },
      on: {
        beforeInit: function (e) {
          e.params.lazy.enabled &&
            e.params.preloadImages &&
            (e.params.preloadImages = !1);
        },
        init: function (e) {
          e.params.lazy.enabled &&
            !e.params.loop &&
            0 === e.params.initialSlide &&
            (e.params.lazy.checkInView
              ? e.lazy.checkInViewOnLoad()
              : e.lazy.load());
        },
        scroll: function (e) {
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        transitionStart: function (e) {
          e.params.lazy.enabled &&
            (e.params.lazy.loadOnTransitionStart ||
              (!e.params.lazy.loadOnTransitionStart &&
                !e.lazy.initialImageLoaded)) &&
            e.lazy.load();
        },
        transitionEnd: function (e) {
          e.params.lazy.enabled &&
            !e.params.lazy.loadOnTransitionStart &&
            e.lazy.load();
        },
        slideChange: function (e) {
          var t = e.params,
            n = t.lazy,
            i = t.cssMode,
            r = t.watchSlidesVisibility,
            a = t.watchSlidesProgress,
            o = t.touchReleaseOnEdges,
            s = t.resistanceRatio;
          n.enabled && (i || ((r || a) && (o || 0 === s))) && e.lazy.load();
        },
      },
    };
    function me() {
      return (
        (me =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
        me.apply(this, arguments)
      );
    }
    var ye = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          n = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = w(function () {
            var t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0,
                    )),
                    e.emit("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                  e.emit("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                e.autoplay.run();
          }, n));
      },
      start: function () {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit("autoplayStart"),
          e.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        var e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
                  t.$wrapperEl[0].addEventListener(
                    e,
                    t.autoplay.onTransitionEnd,
                  );
                })
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
      onVisibilityChange: function () {
        var e = this,
          t = r();
        "hidden" === t.visibilityState &&
          e.autoplay.running &&
          e.autoplay.pause(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (e.autoplay.run(), (e.autoplay.paused = !1));
      },
      onTransitionEnd: function (e) {
        var t = this;
        t &&
          !t.destroyed &&
          t.$wrapperEl &&
          e.target === t.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
            t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
          }),
          (t.autoplay.paused = !1),
          t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
      },
      onMouseEnter: function () {
        var e = this;
        e.params.autoplay.disableOnInteraction
          ? e.autoplay.stop()
          : e.autoplay.pause(),
          ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
            e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
          });
      },
      onMouseLeave: function () {
        var e = this;
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), e.autoplay.run());
      },
      attachMouseEvents: function () {
        var e = this;
        e.params.autoplay.pauseOnMouseEnter &&
          (e.$el.on("mouseenter", e.autoplay.onMouseEnter),
          e.$el.on("mouseleave", e.autoplay.onMouseLeave));
      },
      detachMouseEvents: function () {
        var e = this;
        e.$el.off("mouseenter", e.autoplay.onMouseEnter),
          e.$el.off("mouseleave", e.autoplay.onMouseLeave);
      },
    };
    const we = {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      },
      create: function () {
        T(this, { autoplay: me({}, ye, { running: !1, paused: !1 }) });
      },
      on: {
        init: function (e) {
          e.params.autoplay.enabled &&
            (e.autoplay.start(),
            r().addEventListener(
              "visibilitychange",
              e.autoplay.onVisibilityChange,
            ),
            e.autoplay.attachMouseEvents());
        },
        beforeTransitionStart: function (e, t, n) {
          e.autoplay.running &&
            (n || !e.params.autoplay.disableOnInteraction
              ? e.autoplay.pause(t)
              : e.autoplay.stop());
        },
        sliderFirstMove: function (e) {
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction
              ? e.autoplay.stop()
              : e.autoplay.pause());
        },
        touchEnd: function (e) {
          e.params.cssMode &&
            e.autoplay.paused &&
            !e.params.autoplay.disableOnInteraction &&
            e.autoplay.run();
        },
        destroy: function (e) {
          e.autoplay.detachMouseEvents(),
            e.autoplay.running && e.autoplay.stop(),
            r().removeEventListener(
              "visibilitychange",
              e.autoplay.onVisibilityChange,
            );
        },
      },
    };
    var be = n(755),
      xe = n(755);
    function Ce(e) {
      var t = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)",
        ),
      );
      return t ? decodeURIComponent(t[1]) : void 0;
    }
    function Te(e, t) {
      ke(e, t, "", "/");
    }
    function ke(e, t, n, i, r, a) {
      n && (n = new Date(n).toUTCString()),
        (document.cookie =
          e +
          "=" +
          escape(t) +
          (n ? "; expires=" + n : "") +
          (i ? "; path=" + i : "") +
          (r ? "; domain=" + r : "") +
          (a ? "; secure" : ""));
    }
    function Ee(e) {
      var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
      return t && decodeURIComponent(t[1].replace(/\+/g, " "));
    }
    Q.use([ne, ae, le, de, fe, ge, we]);
    var Se = "",
      Ae = "";
    function Me() {
      be(".burger-desk > *").is(".nav-link")
        ? be("#sm-menu").addClass("active")
        : be("#sm-menu").removeClass("active");
    }
    function Pe() {
      let e = be("body");
      be(window).scrollTop() > 20
        ? be(".page-up").addClass("active")
        : be(".page-up").removeClass("active"),
        be(window).scrollTop() > 72 && !e.hasClass("fixed")
          ? (e.addClass("fixed"), Le())
          : be(window).scrollTop() <= 72 &&
            e.hasClass("fixed") &&
            (e.removeClass("fixed"), Le());
    }
    function Le() {
      be(".wrapper-nav-link .nav-link").each(function () {
        var e = be(window).outerWidth(),
          t = 100 / (e / be(".wrapper-nav-link").width()),
          n = 100;
        (be("body").hasClass("fixed") || e < 1e3) && (n = 0),
          e < 1280 && e > 840
            ? (be(".nav-link").removeClass("show"),
              be(".text-link .name-nav").on("click", function () {
                be(this).closest(".nav-link").addClass("show");
              }),
              t > 35 + n
                ? be(".wrapper-nav-link .nav-link:last-child").prependTo(
                    ".burger-desk",
                  )
                : t < 30 + n &&
                  be(".burger-desk .nav-link:first-child").appendTo(
                    ".wrapper-nav-link",
                  ))
            : e <= 840
            ? be(".burger-desk .nav-link").appendTo(".wrapper-nav-link")
            : e >= 1280 && e < 1600
            ? t > 46 + n
              ? be(".wrapper-nav-link .nav-link:last-child").prependTo(
                  ".burger-desk",
                )
              : t < 40 + n &&
                be(".burger-desk .nav-link:first-child").appendTo(
                  ".wrapper-nav-link",
                )
            : e >= 1600 &&
              (t > 66 + n
                ? be(".wrapper-nav-link .nav-link:last-child").prependTo(
                    ".burger-desk",
                  )
                : t < 60 + n &&
                  be(".burger-desk .nav-link:first-child").appendTo(
                    ".wrapper-nav-link",
                  ));
      }),
        Me();
    }
    null != Ce("gclid") && (Se = Ce("gclid")),
      null != Ce("fbclid") && (Ae = Ce("fbclid")),
      (null != Ce("gclid") && "null" != Ce("gclid")) ||
        "" == Ee("gclid") ||
        ("" != Se && "null" != Se) ||
        (ke("gclid", Ee("gclid"), "", "/"), (Se = Ce("gclid"))),
      (null != Ce("fbclid") && "null" != Ce("fbclid")) ||
        "" == Ee("fbclid") ||
        ("" != Ae && "null" != Ae) ||
        (ke("fbclid", Ee("fbclid"), "", "/"), (Ae = Ce("fbclid"))),
      null != Ce("edgeSessionId") && Ce("edgeSessionId"),
      be(document).ready(function () {
        "1" !== Ce("cookie_consent_view") &&
          setTimeout(function () {
            new Date(),
              ke("cookie_consent_view", "1", Date.now() + 31536e6, "/"),
              be(".cookie-consent").toggleClass("active");
          }, 2e3),
          be(".jsSelectricViewClear").each(function () {
            be(this).selectize({
              onFocus: function () {
                this.clear(!1);
              },
            });
          }),
          be(".jsSelectricView").each(function () {
            be(this).selectize({
              allowEmptyOption: !0,
              onInitialize: function () {
                this.$control_input.attr("readonly", !0);
              },
            });
          }),
          be(window).resize(Le()),
          be(".wr-l").on("click", function () {
            be(".js-find").removeClass("active"),
              be("#search-price, #search-prices").val(""),
              be(".drop-result").removeClass("active"),
              be(this).closest(".text-link").hasClass("ar") ||
                (be(".text-link").removeClass("ar"),
                be(".nav-link, .name-nav").removeClass("active")),
              be(this).closest(".text-link").toggleClass("ar"),
              be(this)
                .closest(".text-link")
                .find(".name-nav")
                .toggleClass("active"),
              be(window).outerWidth() > 840 &&
                (be(this)
                  .closest(".text-link")
                  .find(".nav-link")
                  .hasClass("active") ||
                be(this)
                  .closest(".nav-link")
                  .find(".dropdown-menu")
                  .hasClass("dropdown-opened")
                  ? be(this)
                      .closest(".nav-link")
                      .find(".dropdown-menu")
                      .toggleClass("dropdown-opened", !1)
                      .toggle(!1)
                  : be(this)
                      .closest(".nav-link")
                      .find(".dropdown-menu")
                      .toggleClass("dropdown-opened", !0)
                      .toggle(!0),
                be(document).click(function (e) {
                  var t = be(".dropdown-menu"),
                    n = be(".tmb-btn.child,.adult");
                  t.is(e.target) ||
                    0 !== t.has(e.target).length ||
                    n.is(e.target) ||
                    0 !== n.has(e.target).length ||
                    (be(".text-link").removeClass("ar"),
                    be(".nav-link")
                      .find(".dropdown-menu")
                      .toggleClass("dropdown-opened", !1)
                      .toggle(!1),
                    be(".nav-link").not(".drop-duble").removeClass("active"));
                }));
            var e = be(this);
            setTimeout(function () {
              be("html, body").animate(
                { scrollTop: e.offset().top - 200 },
                1e3,
              );
            }, 100);
          }),
          Me();
        var e = be(window).outerWidth();
        function t() {
          if (be(".cycle").length > 0) {
            var e = be(window).outerWidth(),
              t = be(".container.middle").width();
            if ((be(".line").height(2), e > 1e3)) {
              var n = (t - 960) / 3;
              be(".line").width(n);
            } else
              e < 1e3 && e > 621
                ? ((n = t - 480),
                  be(".line").width(0).eq(0).width(n).eq(2).width(n),
                  be(".wline").width(t / 2),
                  be(".wline span").height(n).width(2))
                : be(".line").width(2).height(20);
          }
        }
        e <= 840
          ? (be(".nav-link .text-link").sweetDropdown("disable"),
            be(".nav-link .man-drop").attr("class", "man-drop"),
            be(".nav-link .tabs").attr("class", "tab"),
            be(".nav-link .tabs-child").attr("class", "tab-ch"),
            0 === be(".nav-content .accordion-end").length &&
              be(".wrapper-tabs, .nav-content")
                .find(".active")
                .each(function (e) {
                  be(this).toggleClass("active");
                }),
            be(".wrapper-tabs .accordion-end").each(function (e) {
              be(".nav-content .accordion-item").eq(e).after(be(this));
            }))
          : e > 840 &&
            (be(".nav-link .tab").attr("class", "tabs"),
            be(".nav-link .tab-ch").attr("class", "tabs-child"),
            be(".nav-content .accordion-end").appendTo(".wrapper-tabs"),
            be(".nav-link .man-drop").attr(
              "class",
              "man-drop dropdown-menu dropdown-anchor-top-left dropdown-has-anchor",
            )),
          e <= 750 &&
            be(".services").on("click", function () {
              be(this).toggleClass("active");
            }),
          be(window).on("resize", function () {
            Me(),
              (e = be(window).outerWidth()) <= 840
                ? (be(".nav-link .text-link").sweetDropdown("disable"),
                  be(".nav-link .man-drop").attr("class", "man-drop"),
                  be(".nav-link .tabs").attr("class", "tab"),
                  be(".nav-link .tabs-child").attr("class", "tab-ch"),
                  0 == be(".nav-content .accordion-end").length &&
                    be(".wrapper-tabs, .nav-content")
                      .find(".active")
                      .each(function (e) {
                        be(this).toggleClass("active");
                      }),
                  be(".wrapper-tabs .accordion-end").each(function (e) {
                    be(".nav-content .accordion-item").eq(e).after(be(this));
                  }))
                : e > 840 &&
                  (be(".nav-link .tab").attr("class", "tabs"),
                  be(".nav-link .tab-ch").attr("class", "tabs-child"),
                  be(".nav-content .accordion-end").appendTo(".wrapper-tabs"),
                  be(".nav-link .man-drop").attr(
                    "class",
                    "man-drop dropdown-menu dropdown-anchor-top-left dropdown-has-anchor",
                  ));
          }),
          Pe(),
          t(),
          be(".tmb-btn.adult").on("click", function (e) {
            e.stopPropagation(),
              be(window).outerWidth() > 840
                ? (be(".text-link").eq(0).sweetDropdown("show"),
                  setTimeout(function () {}, 500),
                  be(".text-link").eq(0).toggleClass("ar"),
                  be(document).click(function (e) {
                    var t = be(".dropdown-menu"),
                      n = be(".tmb-btn.child,.adult");
                    t.is(e.target) ||
                      0 !== t.has(e.target).length ||
                      n.is(e.target) ||
                      0 !== n.has(e.target).length ||
                      (be(".text-link").removeClass("ar"),
                      be(".nav-link")
                        .find(".dropdown-menu")
                        .toggleClass("dropdown-opened", !1)
                        .toggle(!1),
                      be(".nav-link").not(".drop-duble").removeClass("active"));
                  }))
                : be("#xs-menu").trigger("click");
          }),
          be(".tmb-btn.child").on("click", function (e) {
            e.stopPropagation();
            let t = be(".text-link");
            be(window).outerWidth() > 840
              ? (t.eq(1).sweetDropdown("show"),
                setTimeout(function () {}, 500),
                t.eq(1).toggleClass("ar"),
                be(document).click(function (e) {
                  var t = be(".dropdown-menu"),
                    n = be(".tmb-btn.child, .adult");
                  t.is(e.target) ||
                    0 !== t.has(e.target).length ||
                    n.is(e.target) ||
                    0 !== n.has(e.target).length ||
                    (be(".text-link").removeClass("ar"),
                    be(".nav-link")
                      .find(".dropdown-menu")
                      .toggleClass("dropdown-opened", !1)
                      .toggle(!1),
                    be(".nav-link").not(".drop-duble").removeClass("active"));
                }))
              : (be("#xs-menu").trigger("click"),
                setTimeout(function () {
                  be(".nav-link").eq(1).toggleClass("active");
                }, 400));
          }),
          new Q(".swiper-head-screen", {
            slidesPerView: 1,
            preloadImages: !1,
            loop: !0,
            lazy: !0,
            autoplay: { delay: 2e3, disableOnInteraction: !1 },
            navigation: {
              nextEl: ".swiper-head-screen .swiper-button-next",
              prevEl: ".swiper-head-screen .swiper-button-prev",
            },
            pagination: {
              el: ".swiper-head-screen .swiper-pagination",
              clickable: !0,
            },
          }).on("autoplay", () => {
            console.log("Автопрокрутка запущена");
          }),
          new Q(".swiper-certificate", {
            pagination: {
              el: ".swiper-certificate .swiper-pagination",
              clickable: !0,
              centeredSlides: !0,
              autoHeight: !0,
            },
          }),
          new Q(".swiper-license", {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
              nextEl: ".license .swiper-button-next",
              prevEl: ".license .swiper-button-prev",
            },
            breakpoints: {
              840: { slidesPerView: 2 },
              480: { slidesPerView: 1, spaceBetween: 20 },
            },
          });
        var n = be("#specialists").hasClass("swiper-specialists");
        function i() {
          be(".swiper-specialists .swiper-wrapper").removeClass(
            "specialist-noslider",
          ),
            be(".swiper-specialists .swiper-slide").removeClass(
              "specialist-card",
            ),
            new Q(".swiper-specialists", {
              slidesPerView: 5,
              spaceBetween: 20,
              loop: !1,
              navigation: {
                nextEl: ".specialists .swiper-button-next",
                prevEl: ".specialists .swiper-button-prev",
              },
              breakpoints: {
                1420: { slidesPerView: 5 },
                1280: { slidesPerView: 4 },
                840: { slidesPerView: 3 },
                540: { slidesPerView: 2 },
                200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  centeredSlides: !0,
                  initialSlide: 1,
                  pagination: {
                    el: ".swiper-equipment .swiper-pagination",
                    clickable: !0,
                  },
                },
              },
              onClick: function (e) {
                if (
                  (console.log("swiper click"),
                  be(window).width() <= 820 && be(".main_page").length > 0)
                ) {
                  let e = be(this.clickedSlide).find(".hover-show").height();
                  be(this.clickedSlide)
                    .find(".simple-slider-hover")
                    .css("margin-bottom", "-" + (parseInt(e) + 25) + "px"),
                    be(this.clickedSlide).hasClass("clicked") ||
                      be(".swiper-specialists .swiper-slide").toggleClass(
                        "clicked",
                        !1,
                      ),
                    be(this.clickedSlide).toggleClass("clicked");
                }
              },
            }),
            be("body .swiper-specialists .swiper-slide").on(
              "click",
              function (e) {
                if (be(".main_page").length > 0 && be(window).width() <= 840) {
                  let t = be(this).find(".hover-show").height();
                  if (
                    (be(this)
                      .find(".simple-slider-hover")
                      .css("margin-bottom", "-" + (parseInt(t) + 25) + "px"),
                    be(this).hasClass("clicked"))
                  ) {
                    if ("A" === e.target) return !0;
                    be(this).toggleClass("clicked");
                  } else
                    be(".swiper-specialists .swiper-slide").toggleClass(
                      "clicked",
                      !1,
                    ),
                      be(this).toggleClass("clicked");
                }
              },
            );
        }
        function r() {
          var e = 0;
          be(".swiper-network").each(function (t, n) {
            var i = "slider-cl-next_" + e,
              r = "slider-cl-prev_" + e;
            be(this).siblings(".swiper-button-next").addClass(i),
              be(this).siblings(".swiper-button-prev").addClass(r),
              new Q(this, {
                slidesPerView: 4,
                spaceBetween: 25,
                loop: !0,
                lazy: !0,
                navigation: {
                  nextEl: ".network-clinics .swiper-button-next." + i,
                  prevEl: ".network-clinics .swiper-button-prev." + r,
                },
                pagination: {
                  el: ".swiper-network .swiper-pagination",
                  clickable: !0,
                },
                breakpoints: {
                  1e3: { slidesPerView: 4 },
                  620: { slidesPerView: 3 },
                  480: { slidesPerView: 2.3 },
                  300: { initialSlide: 1, slidesPerView: 1, spaceBetween: 10 },
                },
              }),
              e++;
          }),
            be(".swiper-network .swiper-wrapper").removeClass(
              "clinics-noslider",
            ),
            be(".swiper-network .swiper-slide").removeClass("clinics-card");
        }
        be("swiper-pages") &&
          (function () {
            if (be(".swiper-pages").length > 0) {
              var e = 0;
              be(".swiper-pages").each(function (t, n) {
                var i = "slider-next_" + e,
                  r = "slider-prev_" + e;
                be(this).siblings(".swiper-button-next").addClass(i),
                  be(this).siblings(".swiper-button-prev").addClass(r),
                  new Q(this, {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    loop: !1,
                    initialSlide: 0,
                    navigation: {
                      nextEl: ".swiper-button-next." + i,
                      prevEl: ".swiper-button-prev." + r,
                    },
                    breakpoints: {
                      840: { slidesPerView: 3 },
                      640: { slidesPerView: 2 },
                      200: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                        pagination: {
                          el: ".swiper-equipment .swiper-pagination",
                          clickable: !0,
                        },
                      },
                    },
                  }),
                  e++;
              });
            }
          })();
        var a = be("#network").hasClass("swiper-network");
        a && r(),
          n && i(),
          be(window).resize(function () {
            a && r(), n && i(), t();
          }),
          Le(),
          be("#equipment").hasClass("swiper-equipment") &&
            (function () {
              if (
                (be(window).outerWidth(), be(".swiper-equipment").length > 0)
              ) {
                var e = 0;
                be(".swiper-equipment").each(function (t, n) {
                  var i = "slider-next_" + e,
                    r = "slider-prev_" + e;
                  if (
                    (be(this).siblings(".swiper-button-next").addClass(i),
                    be(this).siblings(".swiper-button-prev").addClass(r),
                    be(".cycle").length > 0)
                  )
                    var a = 3;
                  else a = 4;
                  new Q(this, {
                    slidesPerView: a,
                    initialSlide: 1,
                    loop: !0,
                    spaceBetween: 25,
                    loopedSlides: 6,
                    pagination: {
                      el: ".swiper-equipment .swiper-pagination",
                      clickable: !0,
                    },
                    navigation: {
                      nextEl: ".swiper-button-next." + i,
                      prevEl: ".swiper-button-prev." + r,
                    },
                    breakpoints: {
                      840: { slidesPerView: a },
                      480: { slidesPerView: a - 1 },
                      200: {
                        slidesPerView: a - 2,
                        spaceBetween: 10,
                        centeredSlides: !0,
                        initialSlide: 1,
                        pagination: {
                          el: ".swiper-equipment .swiper-pagination",
                          clickable: !0,
                        },
                      },
                    },
                  }),
                    e++;
                });
              }
            })();
        var o,
          s,
          l,
          c,
          d,
          u = void 0,
          p = be("#direction-spec").hasClass("swiper-direction-spec");
        function f() {
          var e = be(window).outerWidth();
          e < 480 && null == u
            ? (be(".swiper-direction-spec .swiper-wrapper").removeClass(
                "direction-spec-noslider",
              ),
              be(".swiper-direction-spec .swiper-slide").removeClass(
                "direction-spec-card",
              ),
              (u = new Q(".swiper-direction-spec", {
                slidesPerView: 1.3,
                spaceBetween: 20,
                autoResize: !1,
                CSSWidthAndHeight: !0,
                centeredSlides: !0,
              })))
            : e > 481 &&
              void 0 !== u &&
              (u.destroy(),
              (u = void 0),
              be(".swiper-direction-spec .swiper-wrapper")
                .removeAttr("style")
                .addClass("direction-spec-noslider"),
              be(".swiper-direction-spec .swiper-slide")
                .removeAttr("style")
                .addClass("direction-spec-card")),
            be("body .swiper-direction-spec .swiper-slide").on(
              "click",
              function (e) {
                if (be(window).width() <= 840) {
                  let t = be(this).find(".hover-show").height();
                  if (
                    (be(this)
                      .find(".simple-slider-hover")
                      .css("margin-bottom", "-" + (parseInt(t) + 25) + "px"),
                    be(this).hasClass("clicked"))
                  ) {
                    if ("A" === e.target) return !0;
                    be(this).toggleClass("clicked");
                  } else
                    be(".swiper-direction-spec .swiper-slide").toggleClass(
                      "clicked",
                      !1,
                    ),
                      be(this).toggleClass("clicked");
                }
              },
            );
        }
        if (
          (be(document).mouseup(function (e) {
            var t = be(".clicked");
            t.is(e.target) ||
              0 !== t.has(e.target).length ||
              be("body .clicked").toggleClass("clicked", !1);
          }),
          be(window).width() > 481 &&
            be(window).width() <= 840 &&
            be("body .swiper-direction-spec .swiper-slide").click(function () {
              be(this).hasClass("clicked") ||
                be("body .clicked").toggleClass("clicked", !1),
                be(this).toggleClass("clicked");
            }),
          be(window).width() <= 840 &&
            be("body .doctors-result-cards .doc-card").click(function () {
              be(this).hasClass("clicked") ||
                be("body .clicked").toggleClass("clicked", !1),
                be(this).toggleClass("clicked");
            }),
          be("body .doctors-result-cards .doc-card a").on(
            "click",
            function (e) {
              if (
                be(window).width() <= 840 &&
                (e.stopPropagation(),
                be(this).parents("body .doctors-result-cards .doc-card")
                  .length > 0 &&
                  !be(this)
                    .parents("body .doctors-result-cards .doc-card")
                    .hasClass("clicked"))
              )
                return (
                  be(this)
                    .parents("body .doctors-result-cards .doc-card")
                    .toggleClass("clicked", !0),
                  !1
                );
            },
          ),
          be(
            "body .doctors-result-cards .doc-card, body .direction-spec-card.swiper-slide, body .swiper-specialists .swiper-slide",
          ).hover(function () {
            let e = be(this).find(".hover-show").height();
            be(this)
              .find(".simple-slider-hover")
              .css("margin-bottom", "-" + (parseInt(e) + 25) + "px");
          }),
          p &&
            (f(),
            be("body .swiper-direction-spec .swiper-slide a").on(
              "click",
              function (e) {
                if (
                  be(window).width() <= 840 &&
                  (e.stopPropagation(),
                  be(this).parents("body .swiper-direction-spec .swiper-slide")
                    .length > 0 &&
                    !be(this)
                      .parents("body .swiper-direction-spec .swiper-slide")
                      .hasClass("clicked"))
                )
                  return (
                    be(this)
                      .parents(".swiper-direction-spec .swiper-slide")
                      .toggleClass("clicked", !0),
                    !1
                  );
              },
            )),
          be(window).resize(function () {
            p && f();
          }),
          be(".swiper-certf").length > 0)
        ) {
          var h = 0;
          be(".swiper-certf").each(function (e, t) {
            var n = "slider-next_" + h,
              i = "slider-prev_" + h;
            be(this).siblings(".swiper-button-next").addClass(n),
              be(this).siblings(".swiper-button-prev").addClass(i),
              new Q(this, {
                slidesPerView: 6,
                spaceBetween: 25,
                loop: !1,
                navigation: {
                  nextEl: ".direction-certificate .swiper-button-next." + n,
                  prevEl: ".direction-certificate .swiper-button-prev." + i,
                },
                breakpoints: {
                  840: { slidesPerView: 4 },
                  620: { slidesPerView: 3, spaceBetween: 15 },
                  480: { slidesPerView: 2, spaceBetween: 15 },
                  300: { slidesPerView: 1.3, spaceBetween: 30 },
                },
              }),
              h++;
          });
        }
        function v(e = "") {
          be("body").toggleClass("active"),
            be('.popup-search input[name="serviceTitle"]').val(e),
            be(".popup-search")
              .toggleClass("active")
              .on("click", function (e) {
                var t = be(".popup-search > div");
                t.is(e.target) ||
                  0 !== t.has(e.target).length ||
                  (be(".popup-search").toggleClass("active"),
                  be("body").toggleClass("active"));
              });
        }
        function g() {
          var e = be(window).outerWidth();
          e <= 620 &&
            be("#dropdown-phone")
              .removeClass("dropdown-anchor-top-center")
              .addClass("dropdown-anchor-top-right"),
            e >= 621 &&
              be("#dropdown-phone")
                .removeClass("dropdown-anchor-top-right")
                .addClass("dropdown-anchor-top-center");
        }
        function m() {
          var e = be(window).outerWidth();
          e >= 841 && be("#dropdown-man").attr("data-add-x", "-132"),
            e >= 1280 && be("#dropdown-man").removeAttr("data-add-x", "-132");
        }
        function y() {
          var e = be(window).outerWidth(),
            t = be(".contacts-card > .card-address"),
            n = be(".contacts-card > .wrapper-address");
          e <= 480
            ? t.on("click", function () {
                n.not(be(this).next()).css("display", "none"),
                  be(this).next().css("display", "block");
              })
            : e >= 481 && (n.removeAttr("style"), t.unbind("click"));
        }
        new Q(".swiper-reviews", {
          slidesPerView: 3,
          spaceBetween: 30,
          autoHeight: !0,
          loop: !0,
          navigation: {
            nextEl: ".container.reviews .swiper-button-next",
            prevEl: ".container.reviews .swiper-button-prev",
          },
          pagination: {
            el: ".container.reviews .swiper-pagination",
            clickable: !0,
          },
          breakpoints: {
            1410: { slidesPerView: 3, spaceBetween: 30 },
            840: { slidesPerView: 2, spaceBetween: 30 },
            640: { slidesPerView: 1.1, spaceBetween: 30 },
            240: {
              slidesPerView: 1.1,
              spaceBetween: 20,
              loop: !0,
              navigation: { nextEl: null, prevEl: null },
            },
          },
        }),
          new Q(".swiper-reviews-social", {
            slidesPerView: 4,
            spaceBetween: 30,
            autoHeight: !0,
            navigation: {
              nextEl: ".container.reviews-social .swiper-button-next",
              prevEl: ".container.reviews-social .swiper-button-prev",
            },
            pagination: {
              el: ".container.reviews-social .swiper-pagination",
              clickable: !0,
            },
            breakpoints: {
              1410: { slidesPerView: 3, spaceBetween: 30 },
              840: { slidesPerView: 2, spaceBetween: 30 },
              640: { slidesPerView: 1, spaceBetween: 30 },
              240: {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: !0,
                navigation: { nextEl: null, prevEl: null },
              },
            },
          }),
          be(".specialist-prof p").html(function (e, t) {
            return be(this).text().length <= 65 ? t : t.substr(0, 65) + "...";
          }),
          be("input").hasClass("js-mask-phone") &&
            be(".js-mask-phone").mask("+371 (99) 999 99 99"),
          be(".rating-select").on("click", "img", function () {
            var e = be(this).attr("data-value");
            0 == be(".send-review.more").length
              ? be(".rating-select img").each(function () {
                  be(this).attr("data-value") <= e
                    ? be(this).attr("src", "/img/ok-star.svg")
                    : be(this).attr("src", "/img/no-star.svg");
                })
              : be(".rating-select img").each(function () {
                  be(this).attr("data-value") <= e
                    ? be(this).attr("src", "/img/star-bg.svg")
                    : be(this).attr("src", "/img/no-star.svg");
                }),
              be("input#rating").attr("value", be(this).attr("data-value"));
          }),
          be(".input-error").length > 0 &&
            be("html, body").animate(
              {
                scrollTop:
                  be(".input-error").parents("form").offset().top + 200,
              },
              400,
            ),
          be("div").hasClass("accordion") &&
            (be("section.price").find(".accordion").length > 0
              ? be(".accordion").accordion({
                  transitionSpeed: 400,
                  singleOpen: !1,
                })
              : be(".accordion").accordion({ transitionSpeed: 400 })),
          be(".nav-for-page ul").on("click", "a:not(.ext)", function (e) {
            var t = be(this).attr("href"),
              n = be(t).offset().top - 72;
            be("body, html").animate({ scrollTop: n }, 1500);
          }),
          be("a").hasClass("fancybox") &&
            be(".fancybox").fancybox({
              openEffect: "none",
              closeEffect: "none",
              nextEffect: "none",
              prevEffect: "none",
              width: "auto",
              preload: 0,
              padding: [20, 20, 20, 20],
              autoScale: !0,
              autoSize: !1,
              onComplete: function () {
                be("#fancybox-wrap").css({ top: "20px", bottom: "auto" });
              },
            }),
          be("a").hasClass("video") &&
            be(".video").fancybox({
              openEffect: "none",
              closeEffect: "none",
              nextEffect: "none",
              prevEffect: "none",
              height: "500",
              helpers: { media: !0 },
              padding: [7, 7, 7, 7],
            }),
          be(".search-header.desc-s .search-icon").on("click", function () {
            if (be(this).hasClass("first-line")) {
              var e = be(window).outerWidth(),
                t = be(this)
                  .closest(".search-header.desc-s")
                  .find(".search-inp-wrap");
              be(".flex-cont.head-phones").hide("slow"),
                be("body").toggleClass("active-first-line", !0),
                t.show("slow"),
                be(this).addClass("active"),
                be(document).on("click", function (e) {
                  var t = be(".search-header.desc-s.first-line");
                  t.is(e.target) ||
                    0 !== t.has(e.target).length ||
                    (be(".search-icon").removeClass("active"),
                    be(".flex-cont.head-phones").show("slow"),
                    be("body").toggleClass("active-first-line", !1),
                    t.find(".search-inp-wrap").hide("slow"),
                    be("#search-price, #search-prices").val(""),
                    be(".drop-result").removeClass("active"));
                });
            } else {
              (e = be(window).outerWidth()),
                (t = be(this)
                  .closest(".search-header.desc-s")
                  .find(".search-inp-wrap"));
              var n = be("#header-logo"),
                i = be("#fixed-header-logo"),
                r = be(this).parents("form"),
                a = be("#entry");
              be(".nav-link").hide("slow"),
                be("body").toggleClass("active", !0),
                be("#sm-menu").removeClass("active"),
                t.show("slow"),
                n.css("display", "none"),
                i.toggle(!1),
                r.toggleClass("active", !0),
                a.toggle(!1),
                e <= 621 &&
                  (be("#fixed-header-logo").hide("slow"),
                  be(".call-info").css("display", "none"),
                  be(".lang-page").css("display", "none"),
                  be(".second-line #header-logo").css("display", "none")),
                be(this).addClass("active"),
                be(document).on("click", function (t) {
                  var o = be(".search-header.desc-s");
                  o.is(t.target) ||
                    0 !== o.has(t.target).length ||
                    (be(".search-icon").removeClass("active"),
                    be(".nav-link").show("slow"),
                    be("body").toggleClass("active", !1),
                    Me(),
                    o.find(".search-inp-wrap").hide("slow"),
                    i.toggle(!0),
                    r.toggleClass("active", !1),
                    a.toggle(!0),
                    n.css("display", "block"),
                    (be("body").hasClass("fixed") || e <= 1e3) &&
                      (be("#fixed-header-logo").css("display", "block"),
                      be(".call-info").css("display", "block"),
                      be(".lang-page").css("display", "block"),
                      be(".second-line #header-logo").css("display", "block")),
                    be("#search-price, #search-prices").val(""),
                    be(".drop-result").removeClass("active"));
                });
            }
          }),
          be(document).mouseup(function (e) {
            var t = be("input.search");
            (t.is(e.target) && 13 != e.which) ||
              t
                .parent(".search-inp-wrap")
                .find(".drop-result")
                .toggleClass("active", !1);
            var n = be("input.search-price-inp");
            (n.is(e.target) && 13 != e.which) ||
              n
                .parent(".search-inp-wrap")
                .find(".drop-result")
                .toggleClass("active", !1);
          }),
          be(".search, .search-price-inp").bind("keyup", function () {
            if (
              (be(this)
                .parent(".search-inp-wrap")
                .find(".drop-result")
                .addClass("active"),
              be(".js-clearVal").addClass("active"),
              be(this).val().length >= 3)
            ) {
              var e = be(this).val(),
                t = be(this).attr("name"),
                n = be(this);
              xe.ajax({
                url: "/pages/searchJson/",
                type: "POST",
                dataType: "json",
                data: {
                  search: e,
                  searchType: JSON.stringify(t),
                  lang: "uk" == document.documentElement.lang ? "ua" : "ru",
                },
                success: function (e) {
                  n.parent(".search-inp-wrap")
                    .find(".drop-result")
                    .empty()
                    .append(e.result);
                },
                error: function (e, t, n) {},
              });
            } else be(this).val().length < 3 && be(this).parent(".search-inp-wrap").find(".drop-result").empty().toggleClass("active", !1);
          }),
          be("#search-price").on("submit", function () {
            var e = be(".search-price input.search-price-inp").val(),
              t = be(this).hasClass("preparation")
                ? "preparationPage"
                : be(this).hasClass("price-block")
                ? "priceBlock"
                : "pricesPage";
            return (
              xe.ajax({
                url: "/price/search/",
                type: "POST",
                dataType: "json",
                data: {
                  searchText: JSON.stringify(e),
                  lang: "uk" == document.documentElement.lang ? "ua" : "ru",
                  searchType: t,
                },
                success: function (e) {
                  if (
                    (null != e.result && e.result.length > 0
                      ? (be(".price-accordion, .alphabet__block").toggle(!1),
                        be(".warning-search").empty(),
                        be(".search-result-wrap")
                          .toggleClass("active", !0)
                          .html(e.result),
                        be(".alphabet__block.search").toggle(!0),
                        be(".drop-result").removeClass("active"))
                      : be(".search-result-wrap")
                          .toggleClass("active", !1)
                          .html(),
                    null != e.error && e.error.length > 0)
                  ) {
                    if ("priceBlock" != t) {
                      var n = be(".warning-search").offset().top - 150;
                      be("html, body").animate({ scrollTop: n }, 700);
                    }
                    be(".warning-search").toggle(!0).html(e.error);
                  }
                  be("body .js-popup-entry").on("click", function () {
                    v();
                  });
                },
                error: function (e, t, n) {},
              }),
              !1
            );
          }),
          be(".drop-result")
            .on("click", "div:not(.search-result-title)", function (e) {
              e.preventDefault();
              var t = be(this).text();
              be(this).closest(".search-inp-wrap").find("input").val(t),
                be(this).closest(".drop-result").removeClass("active"),
                be(this).closest("form").length > 0
                  ? be(this).closest("form").trigger("submit")
                  : be(this).closest(".search-doc").length > 0
                  ? be(".search-doc button.btn").trigger("click")
                  : be(this).closest(".search-blog").length > 0 &&
                    be(".search-blog button.btn").trigger("click");
            })
            .on("keypress", "div", function (e) {
              if (13 == e.which) {
                e.preventDefault();
                var t = be(this).text();
                be(this).closest(".search-inp-wrap").find("input").val(t),
                  be(this).closest(".drop-result").removeClass("active");
              }
            }),
          be(".js-clearVal").on("click", function () {
            be(this).closest(".search-inp-wrap").find(".search").val(""),
              be(this)
                .closest(".search-inp-wrap")
                .find("#search-price")
                .val(""),
              be(this).closest(".search-inp-wrap").find("#search-blog").val(""),
              be(this)
                .closest(".search-inp-wrap")
                .find(".search-price-inp")
                .val(""),
              be(this)
                .closest(".search-inp-wrap")
                .find(".drop-result")
                .removeClass("active"),
              be(this).removeClass("active"),
              be(this).parents("form").is("#search-price") &&
                (be(".price-accordion").toggle(!0),
                be(".alphabet__block").toggle(!0),
                be(".warning-search").empty(),
                be(".search-result-wrap").toggleClass("active", !1).html("")),
              be(".warning-search").toggle(!1);
          }),
          be(".services .services-desc").each(function () {
            be(this).height() > 85 &&
              be(this).closest(".services").addClass("active");
          }),
          be(".services .more-services-info, .more-review-info").on(
            "click",
            function () {
              be(this).prev().toggleClass("active"),
                be(this).toggleClass("active");
            },
          ),
          be(".doctors-screen .more-services-info, .more-text").on(
            "click",
            function () {
              return (
                be(this).prev().toggleClass("short-text"),
                be(this).toggleClass("active"),
                !1
              );
            },
          ),
          be(".js-open-rev").on("click", function (e) {
            e.preventDefault(),
              be(this).toggleClass("active"),
              be(".send-review").toggleClass("active");
          }),
          be(".download").on("click", function (e) {
            e.preventDefault();
            let t = new Image();
            (t.onload = function () {
              let e = document.createElement("canvas");
              (e.width = t.width),
                (e.height = t.height),
                e.getContext("2d").drawImage(t, 0, 0);
              var n = (function (e) {
                return e.toDataURL("image/png", 1);
              })(e);
              !(function (e, t) {
                if (navigator.msSaveBlob) {
                  let n = (function (e) {
                    let t = e.split(","),
                      n = t[0].match(/:(.*?);/)[1];
                    if (-1 !== t[0].indexOf("base64")) {
                      const e = atob(t[1]);
                      var i = e.length;
                      const r = new Uint8Array(i);
                      for (; i--; ) r[i] = e.charCodeAt(i);
                      return new Blob([r], { type: n });
                    }
                    {
                      const e = decodeURIComponent(t[1]);
                      return new Blob([e], { type: n });
                    }
                  })(e);
                  return navigator.msSaveBlob(n, t);
                }
                let n = document.createElement("a");
                (n.download = t),
                  (n.href = e),
                  document.body.appendChild(n),
                  n.click(),
                  document.body.removeChild(n);
              })(n, "license.png");
            }),
              t.setAttribute("crossOrigin", "anonymous");
            var n = be(this).attr("href");
            t.src = n;
          }),
          be(".feedback-content .more-services-info").on("click", function () {
            be(this).toggleClass("active"),
              be(this)
                .closest(".feedback-content")
                .find(".feedback-desc")
                .toggleClass("active");
          }),
          be("input").hasClass("form-input-file") &&
            ((o = document.querySelector(".form-input-file")),
            (s = document.querySelector(".form-input--file-text")),
            (l = document.querySelector(".form-input-wrap")),
            (c = document.querySelector(".exit-file")),
            (d = s.textContent),
            o.addEventListener("change", function (e) {
              var t = e.target.value.length > 0 ? e.target.value : d;
              l.classList.add("active"),
                c.classList.add("active"),
                (s.textContent = t.replace("C:\\fakepath\\", "")),
                be("button.btn.send").toggleClass("hide");
            }),
            be(".exit-file").on("click", function () {
              be(this).removeClass("active"),
                be(".form-input-file").val(""),
                be(".form-input-wrap").removeClass("active"),
                be(".form-input--file-text").text("Загрузить резюме"),
                be("button.btn.send").toggleClass("hide");
            })),
          be("form#send-vac").submit(function () {
            var e = be("#file").prop("files")[0],
              t = new FormData();
            return (
              t.append("file", e),
              xe.ajax({
                url: "/pages/sendVacancyFile/",
                type: "POST",
                contentType: !1,
                processData: !1,
                cache: !1,
                data: t,
                success: function (e) {
                  "ok" === e.success &&
                    (be(".popup.send-vacancy .title-pop span").html(
                      e.text[document.documentElement.lang],
                    ),
                    be(".popup.send-vacancy").toggleClass("active"),
                    be(".exit-file").removeClass("active"),
                    be(".form-input-file").val(""),
                    be(".form-input-wrap").removeClass("active"),
                    be(".form-input--file-text").text("Загрузить резюме"),
                    be("button.btn.send").toggleClass("hide"),
                    be(".resume-send .container").eq(0).toggleClass("hide"),
                    be(".container.after").toggleClass("hide"));
                },
              }),
              !1
            );
          }),
          be('input[name="vac_form"]').change(function () {
            var e = be("a#vac_form_main").attr("href");
            be("a#vac_form_main").attr(
              "href",
              e.replace(/forma([a-z-]*)/, be(this).val()),
            );
          }),
          be(".vacancies input, .vacancies textarea").focus(function () {
            be(this).parent().toggleClass("error-in", !1);
          }),
          be("body").on(
            "click",
            ".rev-photo-wrap .more-services-info",
            function () {
              be(this).toggleClass("active"),
                be(this)
                  .closest(".rev-photo-wrap")
                  .find(".rev-photo")
                  .toggleClass("active");
            },
          ),
          be("#review-page").length > 0 &&
            be(".show-more-rev ").on("click", function () {
              var e = be("#review-page").val();
              return (
                xe.ajax({
                  url: "/reviews/showReview/",
                  type: "POST",
                  dataType: "json",
                  data: {
                    page: e,
                    lang: "uk" == document.documentElement.lang ? "ua" : "ru",
                  },
                  success: function (t) {
                    null != t.result &&
                      t.result.length > 0 &&
                      (be(".more-rev").before(t.result),
                      be("#review-page").val(Math.ceil(e) + 1));
                  },
                }),
                !1
              );
            }),
          be(".js-popup-entry").on("click", function () {
            v(be(this).data("service"));
          }),
          be("#popup-info").on("click", function () {
            be("body").toggleClass("active"),
              be(".info-application")
                .toggleClass("active")
                .on("click", function (e) {
                  var t = be(".info-application > div");
                  t.is(e.target) ||
                    0 !== t.has(e.target).length ||
                    (be(".info-application").toggleClass("active"),
                    be("body").toggleClass("active"));
                });
          }),
          be("#popup-info").length > 0 &&
            "1" != Ce("counter_info") &&
            setTimeout(function () {
              Te("counter_info", 1);
            }, 2e4),
          be(".js-popup-request").on("click", function () {
            be("body").toggleClass("active"),
              be(".popup-request")
                .toggleClass("active")
                .on("click", function (e) {
                  var t = be(".popup-request > div");
                  t.is(e.target) ||
                    0 !== t.has(e.target).length ||
                    (be(".popup-request").toggleClass("active"),
                    be("body").toggleClass("active"));
                });
          }),
          be(".exit-pop").on("click", function () {
            be(this).closest(".popup").removeClass("active"),
              be("body").removeClass("active");
          }),
          be(".exit-pop-btn").on("click", function () {
            be(this).closest(".popup").removeClass("active"),
              be("body").removeClass("active");
          }),
          g(),
          be(window).resize(function () {
            g();
          }),
          be("#sm-menu .burger").on("click", function () {
            be(this).toggleClass("active"),
              be(".drop-duble").toggleClass("active", !1),
              be(this).hasClass("active")
                ? be("#sm-menu .dropdown-menu").css("display", "block")
                : be("#sm-menu .dropdown-menu").css("display", "none");
          }),
          be(".wcall").on("click", function (e) {
            "a" != e.target.localName
              ? (be(".text-link").removeClass("ar"),
                be(".nav-link").removeClass("active"),
                be(this).closest(".js-find").hasClass("active") ||
                  be(".js-find").removeClass("active"),
                be(this).closest(".js-find").toggleClass("active"),
                be(document).on("click", function (e) {
                  var t = be(".dropdown-menu");
                  t.is(e.target) ||
                    0 !== t.has(e.target).length ||
                    be(".js-find").removeClass("active");
                }))
              : (e.preventDefault(), (window.location = e.target.href));
          }),
          be(".now-lang").on("click", function (e) {
            be("#dropdown-lang").hasClass("dropdown-opened") &&
              be(this).sweetDropdown("hide"),
              be("#dropdown-lang-first").hasClass("dropdown-opened") &&
                be(this).sweetDropdown("hide");
          }),
          be(".ad-more").on("click", function (e) {
            be("#dropdown-phone").hasClass("dropdown-opened") &&
              be(this).sweetDropdown("hide");
          }),
          be(".drop-duble").on("click", function () {
            be(this).hasClass("active") ||
              be(".drop-duble").toggleClass("active", !1),
              be(this).toggleClass("active"),
              be(function () {
                be(document).click(function (e) {
                  be(e.target).closest(".drop-duble").length ||
                    (be(".drop-duble").toggleClass("active", !1),
                    e.stopPropagation());
                });
              });
          }),
          be(".nav-link .text-link").on("click", function () {
            be(this).closest(".nav-link").toggleClass("active"),
              be(this).closest(".nav-link").hasClass("active") ||
                be(this).sweetDropdown("hide");
          }),
          be(".nav-content .accordion-item").on("click", function (e) {
            return (
              e.stopPropagation(),
              be(this).next().hasClass("accordion-end") &&
                (be(this).toggleClass("active"),
                be(this).next().toggleClass("active")),
              !1
            );
          }),
          be("#xs-menu").on("click", function () {
            var e = be(".nav-bg").css("display", "block");
            be(".nav-bg").fadeIn(),
              e
                ? (be("header").css("position", "absolute"),
                  be("html, body").animate({ scrollTop: "0" }, 500))
                : be("header").removeAttr("style");
          }),
          be(".nav-close").on("click", function () {
            be(".nav-bg").fadeOut(), be("header").removeAttr("style");
          }),
          m(),
          be(window).resize(function () {
            m();
          }),
          y(),
          be(window).resize(function () {
            y();
          }),
          be(".nav-for-page-text").click(function () {
            be(".nav-for-page-wrap").fadeIn(),
              be("body").addClass("active"),
              be(".nav-for-page-wrap a").on("click", function () {
                be("body").removeClass("active"),
                  be(".nav-for-page-wrap").fadeOut();
              }),
              be(document).on("click", function (e) {
                var t = be(".nav-for-page");
                t.is(e.target) ||
                  0 !== t.has(e.target).length ||
                  (be(".nav-for-page-wrap").fadeOut(),
                  be("body").removeClass("active"));
              });
          }),
          be(".nav-for-page-close").click(function () {
            be(".nav-for-page-wrap").fadeOut(),
              be("body").removeClass("active");
          });
        let w = be("#navigation-menu");
        if (w.length > 0 && w.hasClass("nav-for-page") && !w.hasClass("ext"))
          !(function () {
            var e = be("#navigation-menu").offset().top,
              t = be("#navigation-menu").outerHeight();
            if (be(".helper-wrap").length > 0)
              var n = be("footer").offset().top;
            var i,
              r = be("#navigation-menu ul"),
              a = r.outerHeight() + 1,
              o = r.find("a"),
              s = o.map(function () {
                if (!be(this).hasClass("ext")) {
                  var e = be(be(this).attr("href"));
                  if (e.length) return e;
                }
              });
            be(window).scroll(function () {
              var r = be(document).scrollTop();
              r > e && r < n - t
                ? be(".nav-for-page").fadeIn("fast")
                : r > n - t && be(".nav-for-page").fadeOut("fast");
              var l = be(this).scrollTop() + a,
                c = s.map(function () {
                  if (be(this).offset().top < l) return this;
                }),
                d = (c = c[c.length - 1]) && c.length ? c[0].id : "";
              i !== d &&
                ((i = d),
                o
                  .parent()
                  .removeClass("active")
                  .end()
                  .filter("[href='#" + d + "']")
                  .parent()
                  .addClass("active"));
            });
          })();
        else if (w.hasClass("ext")) {
          var b = w.offset().top,
            x = w.outerHeight(),
            C = be("footer").offset().top;
          be(window).scroll(function () {
            var e = be(document).scrollTop();
            e > b && e < C - x + 50
              ? be(".nav-for-page").fadeIn("fast")
              : e > C - x + 50 && be(".nav-for-page").fadeOut("fast");
          });
        }
        function T(e) {
          (e.prof = be('select[name="select-prof"]').val()),
            (e.specialization = be('select[name="specialization"]').val()),
            (e.address = be('select[name="clinics"]').val());
          let t =
              window.document.location.origin +
              window.document.location.pathname,
            n = JSON.parse(JSON.stringify(e));
          window.history.pushState(null, document.title, t + "?" + be.param(n)),
            xe.ajax({
              url: "/doctors/searchJson/",
              type: "POST",
              dataType: "json",
              data: { search: JSON.stringify(e) },
              success: function (e) {
                var t = "uk" == document.documentElement.lang ? "ua" : "ru";
                null != e.result && e.result.length > 0
                  ? (be(".doctors-result-cards")
                      .parent(".container.medium")
                      .toggleClass("errorSearch", !1),
                    be(".doctors-result-cards").empty().html(e.result),
                    be("body .js-popup-entry").on("click", function () {
                      v();
                    }),
                    be(window).width() <= 840 &&
                      be("body .doctors-result-cards .doc-card").click(
                        function () {
                          be(this).hasClass("clicked") ||
                            be("body .clicked").toggleClass("clicked", !1),
                            be(this).toggleClass("clicked");
                        },
                      ),
                    be("body .doctors-result-cards .doc-card").hover(
                      function () {
                        let e = be(this).find(".hover-show").height();
                        be(this)
                          .find(".simple-slider-hover")
                          .css(
                            "margin-bottom",
                            "-" + (parseInt(e) + 25) + "px",
                          );
                      },
                    ),
                    be("body .doctors-result-cards .doc-card a").on(
                      "click",
                      function (e) {
                        if (
                          be(window).width() <= 840 &&
                          (e.stopPropagation(),
                          be(this).parents(
                            "body .doctors-result-cards .doc-card",
                          ).length > 0 &&
                            !be(this)
                              .parents("body .doctors-result-cards .doc-card")
                              .hasClass("clicked"))
                        )
                          return (
                            be(this)
                              .parents("body .doctors-result-cards .doc-card")
                              .toggleClass("clicked", !0),
                            !1
                          );
                      },
                    ))
                  : (be(".doctors-result-cards")
                      .parent(".container.medium")
                      .toggleClass("errorSearch", !0),
                    "ru" == t
                      ? be(".doctors-result-cards")
                          .empty()
                          .html(
                            "<div class='warning-search'>По вашему запросу ничего не найдено.</div>",
                          )
                      : be(".doctors-result-cards")
                          .empty()
                          .html(
                            "<div class='warning-search'>За вашим запитом нічого не знайдено.</div>",
                          )),
                  be("html, body").animate(
                    { scrollTop: be(".set-doc-search").offset().top - 30 },
                    600,
                  );
              },
            });
        }
        if (
          (be("body").on(
            "click",
            ".doctors-result-cards .doc-card-more",
            function () {
              var e = be(".doctors-result-cards .doc-card").length,
                t = be(".doctors-result-cards .doc-card.active").length,
                n = e - t,
                i = 20;
              e > t &&
                be(".doctors-result-cards .doc-card").each(function (e) {
                  e < t + i &&
                    !be(this).hasClass("active") &&
                    be(this).addClass("active");
                }),
                e === (t = be(".doctors-result-cards .doc-card.active").length)
                  ? be(".doctors-result-cards .doc-card-more").addClass("hide")
                  : (n - i < i && (i = n - i),
                    be(
                      ".doctors-result-cards .doc-card-more .more-card-info p.val-card span",
                    ).html(i));
            },
          ),
          be(".reviews-doctors .reviews-people").each(function (e) {
            e <= 1 && be(".reviews-people").eq(e).addClass("js-show-card");
          }),
          be(".pages-rev .reviews-people").each(function (e) {
            e <= 6 && be(".reviews-people").eq(e).addClass("js-show-card");
          }),
          be(".feedback-out-staff .js-def-card").each(function (e) {
            e <= 4 && be(".js-def-card").eq(e).addClass("js-show-card");
          }),
          be(".show-more-news.js-btn-more").on("click", function () {
            var e = be(".js-def-card").length,
              t = be(".js-def-card.js-show-card").length,
              n = 0;
            if (
              (e > t &&
                be(".js-def-card").each(function (e) {
                  n < 10 &&
                    (console.log(n),
                    be(this).addClass("js-show-card"),
                    be(this)
                      .find(".news-card")
                      .each(function (e) {
                        n <= 10 &&
                          !be(this).hasClass("js-show-card") &&
                          (be(this).addClass("js-show-card"), n++);
                      }));
                }),
              n < 10)
            )
              be(".js-btn-more").addClass("hide");
            else {
              var i = e - t;
              i > 10 && (i = 10), be(".js-btn-more > p span").html(10);
            }
          }),
          be(".show-more-rev.js-btn-more").on("click", function () {
            var e = be(".js-def-card").length,
              t = be(".js-def-card.js-show-card").length;
            if (
              (e > t &&
                be(".js-def-card").each(function (e) {
                  e <= t + 2 &&
                    !be(this).hasClass("js-show-card") &&
                    be(this).addClass("js-show-card");
                }),
              e === (t = be(".js-def-card.js-show-card").length))
            )
              be(".js-btn-more").addClass("hide");
            else {
              var n = e - t;
              n > 3 && (n = 3), be(".js-btn-more > p span").html(n);
            }
          }),
          be(".rev-list .all-rev").on("click", function () {
            var e = be(".js-def-card").length,
              t = be(".js-def-card.js-show-card").length;
            if (e === (t = be(".js-def-card.js-show-card").length))
              be(".js-btn-more").addClass("hide");
            else {
              var n = e - t;
              n > 3 && (n = 3), be(".js-btn-more > p span").html(n);
            }
          }),
          be(".doctors .more-btn").on("click", function () {
            var e = 0,
              t =
                (be(".doctors .swiper-slide.direction-spec-card").length,
                be(".doctors .swiper-slide.direction-spec-card.hide").length),
              n = 100;
            return (
              t > 3 && (n = 100),
              be(".doctors .swiper-slide.hide").each(function () {
                e < n && (be(this).toggleClass("hide", !1), e++);
              }),
              t - n <= 0 && be(".doctors .more-btn").addClass("hide"),
              !1
            );
          }),
          be(window).scroll(function () {
            Pe();
          }),
          be(".page-up").on("click", function () {
            be("html, body").animate({ scrollTop: 0 }, 1e3);
          }),
          be(".tabs .nav-content li").on("click", function () {
            var e = be(this).index();
            let t = be(this).hasClass("active");
            be(this)
              .parents(".nav-content")
              .find("li, .accordion-end")
              .removeClass("active"),
              be(this).toggleClass("active", !t),
              be(this).next().hasClass("accordion-end") &&
                be(this).next().toggleClass("active", !t),
              be(this)
                .parents(".tabs")
                .find(".wrapper-tabs .accordion-end")
                .css("display", "none"),
              be(this)
                .parents(".tabs")
                .find(".wrapper-tabs .accordion-end")
                .eq(e)
                .css("display", "block");
          }),
          be(".tabs-child .nav-content li").on("click", function () {
            var e = be(this).index();
            let t = be(this).hasClass("active");
            be(".tabs-child .nav-content li").removeClass("active"),
              be(this).toggleClass("active", !t),
              be(".tabs-child .wrapper-tabs .accordion-end")
                .css("display", "none")
                .eq(e)
                .css("display", "block");
          }),
          be("#updateSearchResult").length > 0 &&
            "1" === be("#updateSearchResult").val())
        ) {
          let e = be(".search-doc #search-price").val();
          T({
            searchText: e,
            letter: "" === e ? be(".search-by-name span.red").html() : "",
            lang: "uk" == document.documentElement.lang ? "ua" : "ru",
          });
        }
        be(".search-doc #search-price").bind("keyup", function () {
          if (
            (be(this)
              .parent(".search-inp-wrap")
              .find(".drop-result")
              .addClass("active"),
            be(".js-clearVal").addClass("active"),
            be(this).val().length >= 2)
          ) {
            var e = be(this).val(),
              t = be(this).attr("name"),
              n = be(this);
            xe.ajax({
              url: "/pages/searchDoctorJson/",
              type: "POST",
              dataType: "json",
              data: {
                search: e,
                searchType: JSON.stringify(t),
                lang: "uk" === document.documentElement.lang ? "ua" : "ru",
              },
              success: function (e) {
                n.parent(".search-inp-wrap")
                  .find(".drop-result")
                  .empty()
                  .append(e.result);
              },
            });
          } else be(this).val().length < 2 && be(this).parent(".search-inp-wrap").find(".drop-result").empty().toggleClass("active", !1);
        }),
          be(".doctors-screen .search-by-name span").on("click", function () {
            be(".search-by-name span.red").toggleClass("red", !1),
              be(this).toggleClass("red", !0),
              be(".search-doc input").val(""),
              be(this)
                .parent(".search-inp-wrap")
                .find(".drop-result")
                .toggleClass("active", !1),
              T({
                searchText: "",
                letter: this.innerHTML,
                lang: "uk" == document.documentElement.lang ? "ua" : "ru",
              });
          }),
          be(".search-doc button.btn").on("click", function () {
            be(".search-by-name span.red").toggleClass("red", !1),
              be(".search-by-name span").eq(0).toggleClass("red", !0),
              T({
                searchText: be(".search-doc .search-inp-wrap input").val(),
                letter: "",
                lang: "uk" == document.documentElement.lang ? "ua" : "ru",
              });
          }),
          be(
            ".set-doc-search .jsSelectricView, .set-doc-search .jsSelectricViewClear",
          ).on("change", function () {
            T({
              searchText: be(".search-doc .search-inp-wrap input").val(),
              letter:
                be(".search-by-name span.red").length > 0
                  ? be(".search-by-name span.red").eq(0).html()
                  : "",
              lang: "uk" == document.documentElement.lang ? "ua" : "ru",
            });
          }),
          be("c").on("keypress", function (e) {
            13 === e.which &&
              (be(".search-by-name span.red").eq(0).toggleClass("red", !1),
              be(".search-by-name span").eq(0).toggleClass("red", !0),
              T({
                searchText: be(this).val(),
                letter: "",
                lang: "uk" == document.documentElement.lang ? "ua" : "ru",
              }),
              be(this)
                .parent(".search-inp-wrap")
                .find(".drop-result")
                .toggleClass("active", !1));
          }),
          be(".search-doc .js-clearVal").on("click", function () {
            T({
              searchText: "",
              letter: be(".search-by-name span.red").html(),
              lang: "uk" == document.documentElement.lang ? "ua" : "ru",
            });
          }),
          be(".set-news-search .jsSelectricView").on("change", function () {
            let e = be(this).val();
            window.location.href =
              window.document.location.origin +
              window.document.location.pathname +
              ("all" !== e ? "?category=" + e : "");
          });
        var k = "";
        !(function (e) {
          var t = document.referrer,
            n = window.location.href,
            i = {
              getRawParam: function (e, t) {
                var n = new RegExp(t + "=([^&]+)").exec(e);
                return null !== n ? n[1] : null;
              },
              getParam: function (e, t) {
                var n = i.getRawParam(e, t);
                return null !== n ? decodeURIComponent(n) : null;
              },
            },
            r = {
              isArray:
                Array.isArray ||
                function (e) {
                  return (
                    "object" == typeof e &&
                    "[object Array]" === Object.prototype.toString.call(e)
                  );
                },
              isDictionary: function (e) {
                return (
                  "object" == typeof e &&
                  "[object Object]" === Object.prototype.toString.call(e)
                );
              },
              isRegExp: function (e) {
                return "[object RegExp]" === Object.prototype.toString.call(e);
              },
              isFunction: function (e) {
                return (
                  "function" == typeof e &&
                  "[object Function]" === Object.prototype.toString.call(e)
                );
              },
            },
            a = {
              update: function (e, t) {
                var n = r.isArray(t);
                for (var i in ((e = e || (n ? [] : {})), t)) {
                  var o = t[i];
                  if (r.isDictionary(o)) {
                    var s = e.hasOwnProperty(i) ? e[i] : null;
                    e[i] = a.update(s, o);
                  } else e[i] = o;
                }
                return e;
              },
              merge: function (e, t) {
                var n = {};
                return a.update(n, e), a.update(n, t), n;
              },
              keys: function (e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(n);
                return t;
              },
              getVal: function (e, t, n) {
                return e && e.hasOwnProperty(t) ? e[t] : n;
              },
            },
            o = {
              find: function (e, t, n) {
                for (var i in e) if (o.match(e[i], t, n)) return (k = i), !0;
                return !1;
              },
              match: function (e, t, n) {
                for (
                  var o = null, s = null, l = a.keys(e), c = 0;
                  c < l.length;
                  c++
                ) {
                  var d = l[c];
                  d.indexOf("utm_") > -1
                    ? ((o = i.getParam(n, d)), (s = e[d]))
                    : "ref" === d
                    ? ((o = t), (s = e[d]))
                    : "dst" === d && ((o = n), (s = e[d]));
                }
                return (
                  !(!o || !s) &&
                  ((r.isRegExp(s) && s.exec(o)) ||
                    ("string" == typeof s && o.indexOf(s) > -1) ||
                    (r.isFunction(s) && s(o)))
                );
              },
            };
          o.find(
            {
              social: { ref: /:\/\/[^\/]*(facebook)/gi },
              adwords: { dst: "gclid=" },
              ydirect_utm: { utm_source: "direct.yandex.ru" },
              facebook_utm: { utm_source: "facebook" },
              all_utm: { utm_: /([a-z0-9_-])\w+/gi },
              organic_google: { ref: /:\/\/(?:www\.)?(google)(?:\.(\w+))?/gi },
              organic_yandex: { ref: /:\/\/(?:www\.)?(yandex)(?:\.(\w+))?/gi },
            },
            t,
            n,
          );
        })();
        var E = document.referrer;
        "" === E && "" === k && (k = "direct");
        var S = void 0;
        void 0 !== Ce("source") && (S = Ce("source")),
          (null != Ce("source") && "null" != Ce("source")) ||
            "" == k ||
            (ke("source", k, "", "/"), (S = Ce("source")));
        var A = void 0;
        null != Ce("referral") && (A = Ce("referral")),
          null == Ce("referral") &&
            (ke("referral", E, "", "/"), (A = Ce("referral")));
        var M = !1;
        function P(e, t) {
          if (M) return !1;
          M = !0;
          var n = be(".nav-page span a").text().trim();
          t =
            t +
            "&cid=&gclid=" +
            Se +
            "&fbclid=" +
            Ae +
            "&source=" +
            S +
            "&referral=" +
            A +
            "&title=" +
            n;
          let i = e.serializeArray().filter((e) => "phone" === e.name)[0].value;
          (i = i
            .replaceAll(" ", "")
            .replaceAll("+", "")
            .replaceAll("(", "")
            .replaceAll(")", "")),
            xe.ajax({
              context: this,
              url: "/pages/sendMessage/",
              type: "POST",
              dataType: "json",
              data: t,
              success: function (t) {
                if (
                  (e.find(".input-wrap").toggleClass("error-in", !1),
                  "ok" === t.success)
                ) {
                  be(".popup-search, .popup-request").toggleClass("active", !1),
                    e.find("input").val("");
                  let n = new Date();
                  (window.dataLayer = window.dataLayer || []),
                    dataLayer.push({ ecommerce: null }),
                    dataLayer.push({
                      event: "purchase",
                      ecommerce: {
                        transaction_id:
                          n.getFullYear() +
                          "-" +
                          n.getMonth() +
                          "-" +
                          n.getDate() +
                          "-" +
                          i,
                        affiliation: "Medikom.ua",
                        value: "100",
                        currency: "UAH",
                      },
                    }),
                    0 === t.type
                      ? be(".popup.send-application").toggleClass("active")
                      : be(".popup.send-application-second").toggleClass(
                          "active",
                        );
                } else
                  for (var n in t.error) {
                    var r = e.find('input[name="' + n + '"]');
                    r.parents(".input-wrap").toggleClass("error-in", !0),
                      r.next().find("span").html(t.error[n]);
                  }
                M = !1;
              },
            });
        }
        function L(e, t = !1) {
          let n =
              window.document.location.origin +
              window.document.location.pathname,
            i = JSON.parse(JSON.stringify(e));
          window.history.pushState(null, document.title, n + "?" + be.param(i)),
            xe.ajax({
              url: "/blog/searchJson/",
              type: "POST",
              dataType: "json",
              data: { search: JSON.stringify(e) },
              success: function (e) {
                var n = "uk" == document.documentElement.lang ? "ua" : "ru";
                null != e.result && e.result.length > 0
                  ? (be(".blog-result-cards")
                      .parent(".container.medium")
                      .toggleClass("errorSearch", !1),
                    t
                      ? be(".blog-result-cards").append(e.result)
                      : be(".blog-result-cards").empty().html(e.result),
                    be("body .js-popup-entry").on("click", function () {
                      v();
                    }),
                    e.showMoreButton
                      ? be(".show-more-blog").toggle(!0)
                      : be(".show-more-blog").toggle(!1))
                  : (be(".blog-result-cards")
                      .parent(".container.medium")
                      .toggleClass("errorSearch", !0),
                    "ru" == n
                      ? be(".blog-result-cards")
                          .empty()
                          .html(
                            "<div class='warning-search'>По вашему запросу ничего не найдено.</div>",
                          )
                      : be(".blog-result-cards")
                          .empty()
                          .html(
                            "<div class='warning-search'>За вашим запитом нічого не знайдено.</div>",
                          )),
                  t ||
                    be("html, body").animate(
                      { scrollTop: be(".search-blog").offset().top - 30 },
                      600,
                    );
              },
            });
        }
        be("form.quick-form").submit(function () {
          return P(be(this), be(this).serialize()), !1;
        }),
          be("form.helper-info").submit(function () {
            return P(be(this), be(this).serialize()), !1;
          }),
          be("form#add-review").submit(function () {
            return (
              (function (e, t) {
                (t =
                  t +
                  "&lang=" +
                  ("uk" == document.documentElement.lang ? "ua" : "ru")),
                  xe.ajax({
                    context: this,
                    url: "/pages/addReview/",
                    type: "POST",
                    dataType: "json",
                    data: t,
                    success: function (t) {
                      if (
                        (e
                          .find(".input-wrap, .textarea-wrap")
                          .toggleClass("error-in", !1),
                        "ok" == t.success)
                      )
                        be(".popup-search, .popup-request").toggleClass(
                          "active",
                          !1,
                        ),
                          e.hasClass("review-page-form") &&
                            be("#rating").length > 0 &&
                            parseInt(be("#rating").val()) > 3 &&
                            (be("html, body").animate({ scrollTop: 0 }, 1),
                            be(".all-reviews").toggle(!1)),
                          parseInt(be("#rating").val()) > 3 &&
                            (be(".send-review").toggleClass("active", !1),
                            be(".container.more").toggleClass("hide", !1),
                            be("#myInput").val(
                              be("form#add-review textarea").val(),
                            )),
                          be(
                            'form#add-review input[type="text"],form#add-review textarea',
                          ).val(""),
                          be(".popup.send-review-after").toggleClass("active"),
                          setTimeout(function () {
                            be(".popup.send-review-after").toggleClass(
                              "active",
                              !1,
                            );
                          }, 2e3),
                          be(".rating-select img").each(function () {
                            be(this).attr("src", "/img/no-star.svg");
                          });
                      else
                        for (var n in t.error) {
                          var i;
                          (i = e.find('input[name="' + n + '"]'))
                            .parents(".input-wrap")
                            .toggleClass("error-in", !0),
                            i.next().find("span").html(t.error[n]),
                            "description" === n &&
                              ((i = e.find('textarea[name="' + n + '"]'))
                                .parents(".textarea-wrap")
                                .toggleClass("error-in", !0),
                              i.next().find("span").html(t.error[n]));
                        }
                    },
                  });
              })(be(this), be(this).serialize()),
              !1
            );
          }),
          be("form.vacancies").submit(function () {
            return (
              (function (e, t) {
                if (M) return !1;
                (M = !0),
                  xe.ajax({
                    context: this,
                    url: "/pages/sendVacancy/",
                    type: "POST",
                    dataType: "json",
                    data: t,
                    success: function (t) {
                      if (
                        (e
                          .find(".input-wrap, .date-born")
                          .toggleClass("error-in", !1),
                        "ok" === t.success)
                      )
                        be(".popup.send-vacancy").toggleClass("active"),
                          be('form.vacancies input:not([type="hidden"])').val(
                            "",
                          ),
                          be("form textarea").val(""),
                          be("form.vacancies, h1").toggleClass("hide"),
                          be(".after-send").toggleClass("hide"),
                          be(".direction-title").toggleClass("center"),
                          be("html, body").animate({ scrollTop: 50 }, 400);
                      else {
                        for (var n in t.errors) {
                          var i = e.find('input[name="' + n + '"]');
                          i.parents(".input-wrap, .date-born").toggleClass(
                            "error-in",
                            !0,
                          );
                          var r = "";
                          for (var a in t.errors[n]) r || (r = t.errors[n][a]);
                          i.parents(".input-wrap, .date-born")
                            .find(".error-input span")
                            .html(r);
                        }
                        be("html, body").animate(
                          {
                            scrollTop: be(".error-in").eq(0).offset().top - 100,
                          },
                          400,
                        );
                      }
                      M = !1;
                    },
                  });
              })(be(this), be(this).serialize()),
              !1
            );
          }),
          be(".rngst_phone_button_custom").on("click", function () {
            be(".popup.widget")
              .toggleClass("active")
              .on("click", function (e) {
                var t = be(".popup.widget > div");
                t.is(e.target) ||
                  0 !== t.has(e.target).length ||
                  be(".popup.widget").toggleClass("active", !1);
              });
          }),
          be(".bingc-phone-button")
            .on("click", function () {
              be(this).toggleClass("bingc-hide"),
                be(".bingc-passive").toggleClass("bingc-passive-closed"),
                Te("callAutoView", 1);
            })
            .hover(
              function () {
                be("#bingc-phone-button-tooltip").addClass(
                  "bingc-phone-button-tooltip-show-first",
                ),
                  setTimeout(function () {
                    be("#bingc-phone-button-tooltip").addClass(
                      "bingc-phone-button-tooltip-show-second",
                    );
                  }, 50);
              },
              function () {
                be("#bingc-phone-button-tooltip").removeClass(
                  "bingc-phone-button-tooltip-show-second",
                ),
                  setTimeout(function () {
                    be("#bingc-phone-button-tooltip").removeClass(
                      "bingc-phone-button-tooltip-show-first",
                    );
                  }, 50);
              },
            ),
          be(".bingc-passive-close-button,#bingc-passive-background").on(
            "click",
            function () {
              be(".bingc-passive").toggleClass("bingc-passive-closed"),
                be(".bingc-phone-button").toggleClass("bingc-hide"),
                Te("callAutoView", 1);
            },
          ),
          be(".bingc-active-close-button").on("click", function () {
            be("#bingc-active").toggleClass("bingc-active-closed"),
              be(".bingc-phone-button").toggleClass("bingc-hide"),
              Te("callAutoView", 1);
          }),
          Ce("callAutoView") || Te("callAutoView", 1),
          be("#bingc-passive-phone-form-button").click(function () {
            if (!be(this).hasClass("stop")) {
              be(this).toggleClass("stop", !0);
              var e = be(this)
                .siblings("#bingc-passive-get-phone-form-input")
                .val();
              let n = "";
              var t = be(".nav-page span a").text().trim();
              be.ajax({
                context: this,
                url: "/pages/sendMessage/",
                type: "POST",
                dataType: "json",
                data: {
                  phone: e,
                  name: "",
                  cid: n,
                  gclid: Se,
                  fbclid: Ae,
                  source: S,
                  referral: A,
                  title: t,
                },
                success: function (t) {
                  if ("ok" == t.success) {
                    be("#bingc-passive-phone-form-button").prev().val(""),
                      be(".bingc-passive-content").toggleClass("hide"),
                      be("#bingc-passive-get-phone-form-input").toggleClass(
                        "warning",
                        !1,
                      );
                    let t = new Date();
                    (e = e
                      .replaceAll(" ", "")
                      .replaceAll("+", "")
                      .replaceAll("(", "")
                      .replaceAll(")", "")),
                      (window.dataLayer = window.dataLayer || []),
                      dataLayer.push({ ecommerce: null }),
                      dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                          transaction_id:
                            t.getFullYear() +
                            "-" +
                            t.getMonth() +
                            "-" +
                            t.getDate() +
                            "-" +
                            e,
                          affiliation: "Medikom.ua",
                          value: "100",
                          currency: "UAH",
                        },
                      }),
                      setTimeout(function () {
                        be(".bingc-passive-content").toggleClass("hide"),
                          be(".bingc-passive").hasClass(
                            "bingc-passive-closed",
                          ) ||
                            (be(".bingc-passive").toggleClass(
                              "bingc-passive-closed",
                            ),
                            be(".bingc-phone-button").toggleClass(
                              "bingc-hide",
                            ));
                      }, 5e3);
                  } else
                    be("#bingc-passive-get-phone-form-input").toggleClass(
                      "warning",
                      !0,
                    );
                  be(".bingc-passive-phone-form-button").toggleClass(
                    "stop",
                    !1,
                  );
                },
                error: function (e, t, n) {
                  console.log(n);
                },
              });
            }
          }),
          be("#bingc-active-phone-form-button").click(function () {
            if (!be(this).hasClass("stop")) {
              be(this).toggleClass("stop", !0);
              var e = be(this).prev().val(),
                t = be(".nav-page span a").text().trim();
              be.ajax({
                context: this,
                url: "/pages/sendMessage/",
                type: "POST",
                dataType: "json",
                data: {
                  phone: e,
                  name: "",
                  cid: "",
                  gclid: Se,
                  source: S,
                  referral: A,
                  title: t,
                },
                success: function (t) {
                  if ("ok" === t.success) {
                    be("#bingc-active-phone-form-button").prev().val(""),
                      be(".bingc-active-content").toggleClass("hide"),
                      be("#bingc-active-get-phone-form-input").toggleClass(
                        "warning",
                        !1,
                      );
                    let t = new Date();
                    (e = e
                      .replaceAll(" ", "")
                      .replaceAll("+", "")
                      .replaceAll("(", "")
                      .replaceAll(")", "")),
                      (window.dataLayer = window.dataLayer || []),
                      dataLayer.push({ ecommerce: null }),
                      dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                          transaction_id:
                            t.getFullYear() +
                            "-" +
                            t.getMonth() +
                            "-" +
                            t.getDate() +
                            "-" +
                            e,
                          affiliation: "Medikom.ua",
                          value: "100",
                          currency: "UAH",
                        },
                      }),
                      setTimeout(function () {
                        be(".bingc-active-content").toggleClass("hide"),
                          be(".bingc-active").hasClass("bingc-active-closed") ||
                            (be(".bingc-active").toggleClass(
                              "bingc-active-closed",
                            ),
                            be(".bingc-phone-button").toggleClass(
                              "bingc-hide",
                            ));
                      }, 5e3);
                  } else
                    be("#bingc-active-get-phone-form-input").toggleClass(
                      "warning",
                      !0,
                    );
                  be(".bingc-active-phone-form-button").toggleClass("stop", !1);
                },
                error: function (e, t, n) {
                  console.log(n);
                },
              });
            }
          }),
          be(".jsAccord").each(function () {
            var e = be(this),
              t = e.find(".jsAccordBtn"),
              n = e.find(".jsAccordContent"),
              i = e.find(".jsAccordItem");
            t.on("click", function (e) {
              e.preventDefault();
              var r = be(this),
                a = r.closest(".jsAccordItem"),
                o = r.closest(".jsAccordItem").find(".jsAccordContent");
              r.hasClass("-active")
                ? (r.removeClass("-active"),
                  o.slideUp(),
                  a.removeClass("item_active"))
                : (i.removeClass("item_active"),
                  t.removeClass("-active"),
                  n.slideUp(),
                  r.addClass("-active"),
                  o.slideDown(),
                  a.addClass("item_active"));
            });
          }),
          be(".search-blog .search-inp-wrap input").bind("keyup", function () {
            be(this)
              .parent(".search-inp-wrap")
              .find(".drop-result")
              .addClass("active");
            var e = {
              search: be(".search-blog .search-inp-wrap input").val(),
              page: 1,
              category:
                -1 != be('select[name="category"]').val()
                  ? be('select[name="category"]').val()
                  : null,
              lang: "uk" == document.documentElement.lang ? "ua" : "ru",
            };
            if (
              (be(".js-clearVal").addClass("active"),
              be(this).val().length >= 3)
            ) {
              e = be(this).val();
              var t = be(this).attr("name"),
                n = be(this);
              xe.ajax({
                url: "/blog/search/",
                type: "POST",
                dataType: "json",
                data: {
                  search: e,
                  searchType: JSON.stringify(t),
                  lang: "uk" == document.documentElement.lang ? "ua" : "ru",
                },
                success: function (e) {
                  n.parent(".search-inp-wrap")
                    .find(".drop-result")
                    .empty()
                    .append(e.result);
                },
                error: function (e, t, n) {},
              });
            } else be(this).val().length < 3 && be(this).parent(".search-inp-wrap").find(".drop-result").empty().toggleClass("active", !1);
          }),
          be(".search-blog .js-clearVal").on("click", function () {
            be(this).parent().find(".drop-result").removeClass("active");
            var e = {
              search: "",
              category: null,
              page: 1,
              lang: "uk" == document.documentElement.lang ? "ua" : "ru",
            };
            be("input[name='blog-page']").val(1), L(e);
          }),
          be(".search-blog button.btn").on("click", function () {
            be(this).parent().find(".drop-result").removeClass("active");
            var e = {
              search: be(".search-blog .search-inp-wrap input").val(),
              category:
                -1 != be('select[name="category"]').val()
                  ? be('select[name="category"]').val()
                  : null,
              page: 1,
              lang: "uk" == document.documentElement.lang ? "ua" : "ru",
            };
            be("input[name='blog-page']").val(1), L(e);
          }),
          be(".show-more-blog").on("click", function () {
            var e = {
              search: be(".search-blog .search-inp-wrap input").val(),
              page: parseInt(be("input[name='blog-page']").val()) + 1,
              category:
                -1 != be('select[name="category"]').val()
                  ? be('select[name="category"]').val()
                  : null,
              lang: "uk" == document.documentElement.lang ? "ua" : "ru",
            };
            be("input[name='blog-page']").val(e.page), L(e, !0);
          }),
          be('select[name="category"]').length > 0 &&
            be('select[name="category"]').selectize({
              allowEmptyOption: !0,
              onInitialize: function () {
                this.$control_input.attr("readonly", !0);
              },
              onChange: function (e) {
                let t = "uk" == document.documentElement.lang ? "ua" : "ru";
                document.location.href =
                  -1 != e
                    ? ("ua" == t ? "" : "/ru") + "/blog/?category=" + e
                    : ("ua" == t ? "" : "/ru") + "/blog/";
              },
            });
      });
  })();
})();
