"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [683],
  {
    1683: function (e, t, n) {
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      n.d(t, {
        VY: function () {
          return ef;
        },
        h4: function () {
          return ed;
        },
        ck: function () {
          return ec;
        },
        fC: function () {
          return eu;
        },
        xz: function () {
          return es;
        },
      });
      var o = n(7294),
        l = n.t(o, 2);

      function a(e, t = []) {
        let n = [],
          r = () => {
            let t = n.map((e) => (0, o.createContext)(e));
            return function (n) {
              let r = (null == n ? void 0 : n[e]) || t;
              return (0, o.useMemo)(
                () => ({
                  [`__scope${e}`]: { ...n, [e]: r },
                }),
                [n, r]
              );
            };
          };
        return (
          (r.scopeName = e),
          [
            function (t, r) {
              let l = (0, o.createContext)(r),
                a = n.length;

              function i(t) {
                let { scope: n, children: r, ...i } = t,
                  u = (null == n ? void 0 : n[e][a]) || l,
                  c = (0, o.useMemo)(() => i, Object.values(i));
                return (0, o.createElement)(
                  u.Provider,
                  {
                    value: c,
                  },
                  r
                );
              }
              return (
                (n = [...n, r]),
                (i.displayName = t + "Provider"),
                [
                  i,
                  function (n, i) {
                    let u = (null == i ? void 0 : i[e][a]) || l,
                      c = (0, o.useContext)(u);
                    if (c) return c;
                    if (void 0 !== r) return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e),
                      l = o[`__scope${r}`];
                    return { ...t, ...l };
                  }, {});
                  return (0, o.useMemo)(
                    () => ({
                      [`__scope${t.scopeName}`]: r,
                    }),
                    [r]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(r, ...t),
          ]
        );
      }

      function i(...e) {
        return (t) =>
          e.forEach((e) => {
            var n, r;
            "function" == typeof (n = e) ? n(t) : null != n && (n.current = t);
          });
      }

      function u(...e) {
        return (0, o.useCallback)(i(...e), e);
      }
      let c = (0, o.forwardRef)((e, t) => {
        let { children: n, ...l } = e,
          a = o.Children.toArray(n),
          i = a.find(f);
        if (i) {
          let u = i.props.children,
            c = a.map((e) =>
              e !== i
                ? e
                : o.Children.count(u) > 1
                ? o.Children.only(null)
                : (0, o.isValidElement)(u)
                ? u.props.children
                : null
            );
          return (0, o.createElement)(
            d,
            r({}, l, {
              ref: t,
            }),
            (0, o.isValidElement)(u) ? (0, o.cloneElement)(u, void 0, c) : null
          );
        }
        return (0, o.createElement)(
          d,
          r({}, l, {
            ref: t,
          }),
          n
        );
      });
      c.displayName = "Slot";
      let d = (0, o.forwardRef)((e, t) => {
        let { children: n, ...r } = e;
        return (0, o.isValidElement)(n)
          ? (0, o.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let o = e[r],
                    l = t[r],
                    a = /^on[A-Z]/.test(r);
                  a
                    ? o && l
                      ? (n[r] = (...e) => {
                          l(...e), o(...e);
                        })
                      : o && (n[r] = o)
                    : "style" === r
                    ? (n[r] = { ...o, ...l })
                    : "className" === r &&
                      (n[r] = [o, l].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(r, n.props),
              ref: i(t, n.ref),
            })
          : o.Children.count(n) > 1
          ? o.Children.only(null)
          : null;
      });
      d.displayName = "SlotClone";
      let s = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);

      function f(e) {
        return (0, o.isValidElement)(e) && e.type === s;
      }

      function p(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }

      function m(e) {
        let t = (0, o.useRef)(e);
        return (
          (0, o.useEffect)(() => {
            t.current = e;
          }),
          (0, o.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            []
          )
        );
      }

      function v({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [r, l] = (function ({ defaultProp: e, onChange: t }) {
            let n = (0, o.useState)(e),
              [r] = n,
              l = (0, o.useRef)(r),
              a = m(t);
            return (
              (0, o.useEffect)(() => {
                l.current !== r && (a(r), (l.current = r));
              }, [r, l, a]),
              n
            );
          })({
            defaultProp: t,
            onChange: n,
          }),
          a = void 0 !== e,
          i = m(n),
          u = (0, o.useCallback)(
            (t) => {
              if (a) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && i(n);
              } else l(t);
            },
            [a, e, l, i]
          );
        return [a ? e : r, u];
      }
      var h = n(3935);
      let E = [
          "a",
          "button",
          "div",
          "h2",
          "h3",
          "img",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (0, o.forwardRef)((e, n) => {
            let { asChild: l, ...a } = e,
              i = l ? c : t;
            return (
              (0, o.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, o.createElement)(
                i,
                r({}, a, {
                  ref: n,
                })
              )
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        b = Boolean(null == globalThis ? void 0 : globalThis.document)
          ? o.useLayoutEffect
          : () => {},
        g = (e) => {
          let { present: t, children: n } = e,
            r = (function (e) {
              var t, n;
              let [r, l] = (0, o.useState)(),
                a = (0, o.useRef)({}),
                i = (0, o.useRef)(e),
                u = (0, o.useRef)("none"),
                [c, d] =
                  ((n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: {
                      MOUNT: "mounted",
                    },
                  }),
                  (0, o.useReducer)(
                    (e, t) => {
                      let r = n[e][t];
                      return null != r ? r : e;
                    },
                    e ? "mounted" : "unmounted"
                  ));
              return (
                (0, o.useEffect)(() => {
                  let e = y(a.current);
                  u.current = "mounted" === c ? e : "none";
                }, [c]),
                b(() => {
                  let t = a.current,
                    n = i.current;
                  if (n !== e) {
                    let r = u.current,
                      o = y(t);
                    e
                      ? d("MOUNT")
                      : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? d("UNMOUNT")
                      : n && r !== o
                      ? d("ANIMATION_OUT")
                      : d("UNMOUNT"),
                      (i.current = e);
                  }
                }, [e, d]),
                b(() => {
                  if (r) {
                    let e = (e) => {
                        let t = y(a.current),
                          n = t.includes(e.animationName);
                        e.target === r &&
                          n &&
                          (0, h.flushSync)(() => d("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === r && (u.current = y(a.current));
                      };
                    return (
                      r.addEventListener("animationstart", t),
                      r.addEventListener("animationcancel", e),
                      r.addEventListener("animationend", e),
                      () => {
                        r.removeEventListener("animationstart", t),
                          r.removeEventListener("animationcancel", e),
                          r.removeEventListener("animationend", e);
                      }
                    );
                  }
                  d("ANIMATION_END");
                }, [r, d]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(c),
                  ref: (0, o.useCallback)((e) => {
                    e && (a.current = getComputedStyle(e)), l(e);
                  }, []),
                }
              );
            })(t),
            l =
              "function" == typeof n
                ? n({
                    present: r.isPresent,
                  })
                : o.Children.only(n),
            a = u(r.ref, l.ref);
          return "function" == typeof n || r.isPresent
            ? (0, o.cloneElement)(l, {
                ref: a,
              })
            : null;
        };

      function y(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      g.displayName = "Presence";
      let C = l["useId".toString()] || (() => void 0),
        w = 0;

      function A(e) {
        let [t, n] = o.useState(C());
        return (
          b(() => {
            e || n((e) => (null != e ? e : String(w++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      let N = "Collapsible",
        [_, R] = a(N),
        [I, O] = _(N),
        x = (0, o.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: n,
              open: l,
              defaultOpen: a,
              disabled: i,
              onOpenChange: u,
              ...c
            } = e,
            [d = !1, s] = v({
              prop: l,
              defaultProp: a,
              onChange: u,
            });
          return (0, o.createElement)(
            I,
            {
              scope: n,
              disabled: i,
              contentId: A(),
              open: d,
              onOpenToggle: (0, o.useCallback)(() => s((e) => !e), [s]),
            },
            (0, o.createElement)(
              E.div,
              r(
                {
                  "data-state": P(d),
                  "data-disabled": i ? "" : void 0,
                },
                c,
                {
                  ref: t,
                }
              )
            )
          );
        }),
        M = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, ...l } = e,
            a = O("CollapsibleTrigger", n);
          return (0, o.createElement)(
            E.button,
            r(
              {
                type: "button",
                "aria-controls": a.contentId,
                "aria-expanded": a.open || !1,
                "data-state": P(a.open),
                "data-disabled": a.disabled ? "" : void 0,
                disabled: a.disabled,
              },
              l,
              {
                ref: t,
                onClick: p(e.onClick, a.onOpenToggle),
              }
            )
          );
        }),
        k = "CollapsibleContent",
        S = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...l } = e,
            a = O(k, e.__scopeCollapsible);
          return (0, o.createElement)(
            g,
            {
              present: n || a.open,
            },
            ({ present: e }) =>
              (0, o.createElement)(
                T,
                r({}, l, {
                  ref: t,
                  present: e,
                })
              )
          );
        }),
        T = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, present: l, children: a, ...i } = e,
            c = O(k, n),
            [d, s] = (0, o.useState)(l),
            f = (0, o.useRef)(null),
            p = u(t, f),
            m = (0, o.useRef)(0),
            v = m.current,
            h = (0, o.useRef)(0),
            g = h.current,
            y = c.open || d,
            C = (0, o.useRef)(y),
            w = (0, o.useRef)();
          return (
            (0, o.useEffect)(() => {
              let e = requestAnimationFrame(() => (C.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            b(() => {
              let e = f.current;
              if (e) {
                (w.current = w.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (m.current = t.height),
                  (h.current = t.width),
                  C.current ||
                    ((e.style.transitionDuration =
                      w.current.transitionDuration),
                    (e.style.animationName = w.current.animationName)),
                  s(l);
              }
            }, [c.open, l]),
            (0, o.createElement)(
              E.div,
              r(
                {
                  "data-state": P(c.open),
                  "data-disabled": c.disabled ? "" : void 0,
                  id: c.contentId,
                  hidden: !y,
                },
                i,
                {
                  ref: p,
                  style: {
                    "--radix-collapsible-content-height": v ? `${v}px` : void 0,
                    "--radix-collapsible-content-width": g ? `${g}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              y && a
            )
          );
        });

      function P(e) {
        return e ? "open" : "closed";
      }
      let D = (0, o.createContext)(void 0),
        U = "Accordion",
        V = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [$, L, j] = (function (e) {
          let t = e + "CollectionProvider",
            [n, r] = a(t),
            [l, i] = n(t, {
              collectionRef: {
                current: null,
              },
              itemMap: new Map(),
            }),
            d = (e) => {
              let { scope: t, children: n } = e,
                r = o.useRef(null),
                a = o.useRef(new Map()).current;
              return o.createElement(
                l,
                {
                  scope: t,
                  itemMap: a,
                  collectionRef: r,
                },
                n
              );
            },
            s = e + "CollectionSlot",
            f = o.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                l = i(s, n),
                a = u(t, l.collectionRef);
              return o.createElement(
                c,
                {
                  ref: a,
                },
                r
              );
            }),
            p = e + "CollectionItemSlot",
            m = "data-radix-collection-item",
            v = o.forwardRef((e, t) => {
              let { scope: n, children: r, ...l } = e,
                a = o.useRef(null),
                d = u(t, a),
                s = i(p, n);
              return (
                o.useEffect(
                  () => (
                    s.itemMap.set(a, {
                      ref: a,
                      ...l,
                    }),
                    () => void s.itemMap.delete(a)
                  )
                ),
                o.createElement(
                  c,
                  {
                    [m]: "",
                    ref: d,
                  },
                  r
                )
              );
            });
          return [
            {
              Provider: d,
              Slot: f,
              ItemSlot: v,
            },
            function (t) {
              let n = i(e + "CollectionConsumer", t),
                r = o.useCallback(() => {
                  let e = n.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll(`[${m}]`)),
                    r = Array.from(n.itemMap.values()),
                    o = r.sort(
                      (e, n) =>
                        t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                    );
                  return o;
                }, [n.collectionRef, n.itemMap]);
              return r;
            },
            r,
          ];
        })(U),
        [F, z] = a(U, [j, R]),
        B = R(),
        H = o.forwardRef((e, t) => {
          let { type: n, ...l } = e;
          return o.createElement(
            $.Provider,
            {
              scope: e.__scopeAccordion,
            },
            "multiple" === n
              ? o.createElement(
                  J,
                  r({}, l, {
                    ref: t,
                  })
                )
              : o.createElement(
                  G,
                  r({}, l, {
                    ref: t,
                  })
                )
          );
        });
      H.propTypes = {
        type(e) {
          let t = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."
              )
            : "multiple" === e.type && "string" == typeof t
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."
              )
            : "single" === e.type && Array.isArray(t)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."
              )
            : null;
        },
      };
      let [q, K] = F(U),
        [Y, Z] = F(U, {
          collapsible: !1,
        }),
        G = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: l,
              onValueChange: a = () => {},
              collapsible: i = !1,
              ...u
            } = e,
            [c, d] = v({
              prop: n,
              defaultProp: l,
              onChange: a,
            });
          return o.createElement(
            q,
            {
              scope: e.__scopeAccordion,
              value: c ? [c] : [],
              onItemOpen: d,
              onItemClose: o.useCallback(() => i && d(""), [i, d]),
            },
            o.createElement(
              Y,
              {
                scope: e.__scopeAccordion,
                collapsible: i,
              },
              o.createElement(
                X,
                r({}, u, {
                  ref: t,
                })
              )
            )
          );
        }),
        J = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: l,
              onValueChange: a = () => {},
              ...i
            } = e,
            [u = [], c] = v({
              prop: n,
              defaultProp: l,
              onChange: a,
            }),
            d = o.useCallback((e) => c((t = []) => [...t, e]), [c]),
            s = o.useCallback(
              (e) => c((t = []) => t.filter((t) => t !== e)),
              [c]
            );
          return o.createElement(
            q,
            {
              scope: e.__scopeAccordion,
              value: u,
              onItemOpen: d,
              onItemClose: s,
            },
            o.createElement(
              Y,
              {
                scope: e.__scopeAccordion,
                collapsible: !0,
              },
              o.createElement(
                X,
                r({}, i, {
                  ref: t,
                })
              )
            )
          );
        }),
        [Q, W] = F(U),
        X = o.forwardRef((e, t) => {
          let {
              __scopeAccordion: n,
              disabled: l,
              dir: a,
              orientation: i = "vertical",
              ...c
            } = e,
            d = o.useRef(null),
            s = u(d, t),
            f = L(n),
            m = (function (e) {
              let t = (0, o.useContext)(D);
              return e || t || "ltr";
            })(a),
            v = "ltr" === m,
            h = p(e.onKeyDown, (e) => {
              var t;
              if (!V.includes(e.key)) return;
              let n = e.target,
                r = f().filter((e) => {
                  var t;
                  return !(
                    null !== (t = e.ref.current) &&
                    void 0 !== t &&
                    t.disabled
                  );
                }),
                o = r.findIndex((e) => e.ref.current === n),
                l = r.length;
              if (-1 === o) return;
              e.preventDefault();
              let a = o,
                u = l - 1,
                c = () => {
                  (a = o + 1) > u && (a = 0);
                },
                d = () => {
                  (a = o - 1) < 0 && (a = u);
                };
              switch (e.key) {
                case "Home":
                  a = 0;
                  break;
                case "End":
                  a = u;
                  break;
                case "ArrowRight":
                  "horizontal" === i && (v ? c() : d());
                  break;
                case "ArrowDown":
                  "vertical" === i && c();
                  break;
                case "ArrowLeft":
                  "horizontal" === i && (v ? d() : c());
                  break;
                case "ArrowUp":
                  "vertical" === i && d();
              }
              let s = a % l;
              null === (t = r[s].ref.current) || void 0 === t || t.focus();
            });
          return o.createElement(
            Q,
            {
              scope: n,
              disabled: l,
              direction: a,
              orientation: i,
            },
            o.createElement(
              $.Slot,
              {
                scope: n,
              },
              o.createElement(
                E.div,
                r({}, c, {
                  "data-orientation": i,
                  ref: s,
                  onKeyDown: l ? void 0 : h,
                })
              )
            )
          );
        }),
        ee = "AccordionItem",
        [et, en] = F(ee),
        er = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, value: l, ...a } = e,
            i = W(ee, n),
            u = K(ee, n),
            c = B(n),
            d = A(),
            s = (l && u.value.includes(l)) || !1,
            f = i.disabled || e.disabled;
          return o.createElement(
            et,
            {
              scope: n,
              open: s,
              disabled: f,
              triggerId: d,
            },
            o.createElement(
              x,
              r(
                {
                  "data-orientation": i.orientation,
                  "data-state": s ? "open" : "closed",
                },
                c,
                a,
                {
                  ref: t,
                  disabled: f,
                  open: s,
                  onOpenChange(e) {
                    e ? u.onItemOpen(l) : u.onItemClose(l);
                  },
                }
              )
            )
          );
        }),
        eo = o.forwardRef((e, t) => {
          var n;
          let { __scopeAccordion: l, ...a } = e,
            i = W(U, l),
            u = en("AccordionHeader", l);
          return o.createElement(
            E.h3,
            r(
              {
                "data-orientation": i.orientation,
                "data-state": ((n = u.open), n ? "open" : "closed"),
                "data-disabled": u.disabled ? "" : void 0,
              },
              a,
              {
                ref: t,
              }
            )
          );
        }),
        el = "AccordionTrigger",
        ea = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...l } = e,
            a = W(U, n),
            i = en(el, n),
            u = Z(el, n),
            c = B(n);
          return o.createElement(
            $.ItemSlot,
            {
              scope: n,
            },
            o.createElement(
              M,
              r(
                {
                  "aria-disabled": (i.open && !u.collapsible) || void 0,
                  "data-orientation": a.orientation,
                  id: i.triggerId,
                },
                c,
                l,
                {
                  ref: t,
                }
              )
            )
          );
        }),
        ei = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...l } = e,
            a = W(U, n),
            i = en("AccordionContent", n),
            u = B(n);
          return o.createElement(
            S,
            r(
              {
                role: "region",
                "aria-labelledby": i.triggerId,
                "data-orientation": a.orientation,
              },
              u,
              l,
              {
                ref: t,
                style: {
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                  ...e.style,
                },
              }
            )
          );
        }),
        eu = H,
        ec = er,
        ed = eo,
        es = ea,
        ef = ei;
    },
  },
]);
