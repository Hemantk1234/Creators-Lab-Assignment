(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [477],
  {
    7005: function (t, e, i) {
      var n,
        r = i(7294),
        o =
          r && "object" == typeof r && "default" in r
            ? r
            : {
                default: r,
              },
        s = function () {
          return (s =
            Object.assign ||
            function (t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var r in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }).apply(this, arguments);
        };
      !(function (t) {
        if (!t || "undefined" == typeof window) return;
        let e = document.createElement("style");
        return (
          e.setAttribute("type", "text/css"),
          (e.innerHTML = t),
          document.head.appendChild(e),
          t
        );
      })(
        '.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'
      );
      var a = function (t) {
        var e,
          i,
          n,
          a,
          l = t.style,
          u = t.className,
          h = t.play,
          d = void 0 === h || h,
          c = t.pauseOnHover,
          p = void 0 !== c && c,
          m = t.pauseOnClick,
          f = void 0 !== m && m,
          v = t.direction,
          g = void 0 === v ? "left" : v,
          y = t.speed,
          x = void 0 === y ? 20 : y,
          b = t.delay,
          w = void 0 === b ? 0 : b,
          V = t.loop,
          A = void 0 === V ? 0 : V,
          T = t.gradient,
          P = t.gradientColor,
          E = void 0 === P ? [255, 255, 255] : P,
          S = t.gradientWidth,
          C = void 0 === S ? 200 : S,
          M = t.onFinish,
          k = t.onCycleComplete,
          B = t.children,
          R = r.useState(0),
          D = R[0],
          L = R[1],
          F = r.useState(0),
          j = F[0],
          I = F[1],
          O = r.useState(!1),
          U = O[0],
          N = O[1],
          $ = r.useRef(null),
          z = r.useRef(null);
        r.useEffect(
          function () {
            if (U) {
              var t = function () {
                z.current &&
                  $.current &&
                  (L($.current.getBoundingClientRect().width),
                  I(z.current.getBoundingClientRect().width));
              };
              return (
                t(),
                window.addEventListener("resize", t),
                function () {
                  window.removeEventListener("resize", t);
                }
              );
            }
          },
          [U]
        ),
          r.useEffect(function () {
            N(!0);
          }, []);
        var W = "rgba(" + E[0] + ", " + E[1] + ", " + E[2],
          H = j < D ? D / x : j / x;
        return o.default.createElement(
          r.Fragment,
          null,
          U
            ? o.default.createElement(
                "div",
                {
                  ref: $,
                  style: s(
                    s({}, void 0 === l ? {} : l),
                    (((e = {})["--pause-on-hover"] =
                      !d || p ? "paused" : "running"),
                    (e["--pause-on-click"] =
                      !d || (p && !f) || f ? "paused" : "running"),
                    e)
                  ),
                  className: (void 0 === u ? "" : u) + " marquee-container",
                },
                (void 0 === T || T) &&
                  o.default.createElement("div", {
                    style:
                      (((i = {})["--gradient-color"] =
                        W + ", 1), " + W + ", 0)"),
                      (i["--gradient-width"] =
                        "number" == typeof C ? C + "px" : C),
                      i),
                    className: "overlay",
                  }),
                o.default.createElement(
                  "div",
                  {
                    ref: z,
                    style:
                      (((n = {})["--play"] = d ? "running" : "paused"),
                      (n["--direction"] = "left" === g ? "normal" : "reverse"),
                      (n["--duration"] = H + "s"),
                      (n["--delay"] = w + "s"),
                      (n["--iteration-count"] = A ? "" + A : "infinite"),
                      n),
                    className: "marquee",
                    onAnimationIteration: k,
                    onAnimationEnd: M,
                  },
                  B
                ),
                o.default.createElement(
                  "div",
                  {
                    style:
                      (((a = {})["--play"] = d ? "running" : "paused"),
                      (a["--direction"] = "left" === g ? "normal" : "reverse"),
                      (a["--duration"] = H + "s"),
                      (a["--delay"] = w + "s"),
                      (a["--iteration-count"] = A ? "" + A : "infinite"),
                      a),
                    className: "marquee",
                    "aria-hidden": "true",
                  },
                  B
                )
              )
            : null
        );
      };
      e.Z = a;
    },
    4731: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return op;
        },
      });
      var n,
        r,
        o,
        s,
        a,
        l = i(7294);
      let u = (0, l.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        h = (0, l.createContext)({}),
        d = (0, l.createContext)(null),
        c = "undefined" != typeof document,
        p = c ? l.useLayoutEffect : l.useEffect,
        m = (0, l.createContext)({
          strict: !1,
        });

      function f(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }

      function v(t) {
        return "string" == typeof t || Array.isArray(t);
      }

      function g(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let y = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];

      function x(t) {
        return g(t.animate) || y.some((e) => v(t[e]));
      }

      function b(t) {
        return Boolean(x(t) || t.variants);
      }

      function w(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let V = (t) => ({
          isEnabled: (e) => t.some((t) => !!e[t]),
        }),
        A = {
          measureLayout: V(["layout", "layoutId", "drag"]),
          animation: V([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: V(["exit"]),
          drag: V(["drag", "dragControls"]),
          focus: V(["whileFocus"]),
          hover: V(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: V(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: V(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: V(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };

      function T(t) {
        let e = (0, l.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      let P = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1,
        },
        E = 1,
        S = (0, l.createContext)({});
      class C extends l.Component {
        getSnapshotBeforeUpdate() {
          let { visualElement: t, props: e } = this.props;
          return t && t.setProps(e), null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      let M = (0, l.createContext)({}),
        k = Symbol.for("motionComponentSymbol"),
        B = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];

      function R(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (B.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let D = {},
        L = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        F = new Set(L);

      function j(t, { layout: e, layoutId: i }) {
        return (
          F.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!D[t] || "opacity" === t))
        );
      }
      let I = (t) => !!(null == t ? void 0 : t.getVelocity),
        O = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        U = (t, e) => L.indexOf(t) - L.indexOf(e);

      function N(t) {
        return t.startsWith("--");
      }
      let $ = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        z = (t, e, i) => Math.min(Math.max(i, t), e),
        W = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        H = { ...W, transform: (t) => z(0, 1, t) },
        Y = { ...W, default: 1 },
        X = (t) => Math.round(1e5 * t) / 1e5,
        q = /(-)?([\d]*\.?[\d])+/g,
        G =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Z =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function _(t) {
        return "string" == typeof t;
      }
      let K = (t) => ({
          test: (e) => _(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        J = K("deg"),
        Q = K("%"),
        tt = K("px"),
        te = K("vh"),
        ti = K("vw"),
        tn = {
          ...Q,
          parse: (t) => Q.parse(t) / 100,
          transform: (t) => Q.transform(100 * t),
        },
        tr = { ...W, transform: Math.round },
        to = {
          borderWidth: tt,
          borderTopWidth: tt,
          borderRightWidth: tt,
          borderBottomWidth: tt,
          borderLeftWidth: tt,
          borderRadius: tt,
          radius: tt,
          borderTopLeftRadius: tt,
          borderTopRightRadius: tt,
          borderBottomRightRadius: tt,
          borderBottomLeftRadius: tt,
          width: tt,
          maxWidth: tt,
          height: tt,
          maxHeight: tt,
          size: tt,
          top: tt,
          right: tt,
          bottom: tt,
          left: tt,
          padding: tt,
          paddingTop: tt,
          paddingRight: tt,
          paddingBottom: tt,
          paddingLeft: tt,
          margin: tt,
          marginTop: tt,
          marginRight: tt,
          marginBottom: tt,
          marginLeft: tt,
          rotate: J,
          rotateX: J,
          rotateY: J,
          rotateZ: J,
          scale: Y,
          scaleX: Y,
          scaleY: Y,
          scaleZ: Y,
          skew: J,
          skewX: J,
          skewY: J,
          distance: tt,
          translateX: tt,
          translateY: tt,
          translateZ: tt,
          x: tt,
          y: tt,
          z: tt,
          perspective: tt,
          transformPerspective: tt,
          opacity: H,
          originX: tn,
          originY: tn,
          originZ: tt,
          zIndex: tr,
          fillOpacity: H,
          strokeOpacity: H,
          numOctaves: tr,
        };

      function ts(t, e, i, n) {
        let {
          style: r,
          vars: o,
          transform: s,
          transformKeys: a,
          transformOrigin: l,
        } = t;
        a.length = 0;
        let u = !1,
          h = !1,
          d = !0;
        for (let c in e) {
          let p = e[c];
          if (N(c)) {
            o[c] = p;
            continue;
          }
          let m = to[c],
            f = $(p, m);
          if (F.has(c)) {
            if (((u = !0), (s[c] = f), a.push(c), !d)) continue;
            p !== (m.default || 0) && (d = !1);
          } else c.startsWith("origin") ? ((h = !0), (l[c] = f)) : (r[c] = f);
        }
        if (
          (!e.transform &&
            (u || n
              ? (r.transform = (function (
                  { transform: t, transformKeys: e },
                  {
                    enableHardwareAcceleration: i = !0,
                    allowTransformNone: n = !0,
                  },
                  r,
                  o
                ) {
                  let s = "";
                  for (let a of (e.sort(U), e)) s += `${O[a] || a}(${t[a]}) `;
                  return (
                    i && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    o ? (s = o(t, r ? "" : s)) : n && r && (s = "none"),
                    s
                  );
                })(t, i, d, n))
              : r.transform && (r.transform = "none")),
          h)
        ) {
          let { originX: v = "50%", originY: g = "50%", originZ: y = 0 } = l;
          r.transformOrigin = `${v} ${g} ${y}`;
        }
      }
      let ta = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
      });

      function tl(t, e, i) {
        for (let n in e) I(e[n]) || j(n, i) || (t[n] = e[n]);
      }

      function tu(t, e, i) {
        let n = {},
          r = (function (t, e, i) {
            let n = t.style || {},
              r = {};
            return (
              tl(r, n, t),
              Object.assign(
                r,
                (function ({ transformTemplate: t }, e, i) {
                  return (0, l.useMemo)(() => {
                    let n = ta();
                    return (
                      ts(
                        n,
                        e,
                        {
                          enableHardwareAcceleration: !i,
                        },
                        t
                      ),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [e]);
                })(t, e, i)
              ),
              t.transformValues ? t.transformValues(r) : r
            );
          })(t, e, i);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((n.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          (n.style = r),
          n
        );
      }
      let th = new Set([
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "onHoverStart",
        "onHoverEnd",
        "layoutScroll",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
        "whileInView",
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
      ]);

      function td(t) {
        return th.has(t);
      }
      let tc = (t) => !td(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (tc = (t) => (t.startsWith("on") ? !td(t) : n(t)));
      } catch (tp) {}

      function tm(t, e, i) {
        return "string" == typeof t ? t : tt.transform(e + i * t);
      }
      let tf = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray",
        },
        tv = {
          offset: "strokeDashoffset",
          array: "strokeDasharray",
        };

      function tg(
        t,
        {
          attrX: e,
          attrY: i,
          originX: n,
          originY: r,
          pathLength: o,
          pathSpacing: s = 1,
          pathOffset: a = 0,
          ...l
        },
        u,
        h,
        d
      ) {
        if ((ts(t, l, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== n || void 0 !== r || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = tm(e, t.x, t.width),
                r = tm(i, t.y, t.height);
              return `${n} ${r}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let o = r ? tf : tv;
              t[o.offset] = tt.transform(-n);
              let s = tt.transform(e),
                a = tt.transform(i);
              t[o.array] = `${s} ${a}`;
            })(c, o, s, a, !1);
      }
      let ty = () => ({ ...ta(), attrs: {} }),
        tx = (t) => "string" == typeof t && "svg" === t.toLowerCase();

      function tb(t, e, i, n) {
        let r = (0, l.useMemo)(() => {
          let i = ty();
          return (
            tg(
              i,
              e,
              {
                enableHardwareAcceleration: !1,
              },
              tx(n),
              t.transformTemplate
            ),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let o = {};
          tl(o, t.style, t), (r.style = { ...o, ...r.style });
        }
        return r;
      }
      let tw = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function tV(t, { style: e, vars: i }, n, r) {
        for (let o in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(o, i[o]);
      }
      let tA = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);

      function tT(t, e, i, n) {
        for (let r in (tV(t, e, void 0, n), e.attrs))
          t.setAttribute(tA.has(r) ? r : tw(r), e.attrs[r]);
      }

      function tP(t) {
        let { style: e } = t,
          i = {};
        for (let n in e) (I(e[n]) || j(n, t)) && (i[n] = e[n]);
        return i;
      }

      function tE(t) {
        let e = tP(t);
        for (let i in t)
          if (I(t[i])) {
            let n = "x" === i || "y" === i ? "attr" + i.toUpperCase() : i;
            e[n] = t[i];
          }
        return e;
      }

      function tS(t, e, i, n = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          e
        );
      }
      let tC = (t) => Array.isArray(t),
        tM = (t) => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        tk = (t) => (tC(t) ? t[t.length - 1] || 0 : t);

      function tB(t) {
        let e = I(t) ? t.get() : t;
        return tM(e) ? e.toValue() : e;
      }
      let tR = (t) => (e, i) => {
          let n = (0, l.useContext)(h),
            r = (0, l.useContext)(d),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                n,
                r,
                o
              ) {
                let s = {
                  latestValues: (function (t, e, i, n) {
                    let r = {},
                      o = n(t);
                    for (let s in o) r[s] = tB(o[s]);
                    let { initial: a, animate: l } = t,
                      u = x(t),
                      h = b(t);
                    e &&
                      h &&
                      !u &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === l && (l = e.animate));
                    let d = !!i && !1 === i.initial;
                    d = d || !1 === a;
                    let c = d ? l : a;
                    if (c && "boolean" != typeof c && !g(c)) {
                      let p = Array.isArray(c) ? c : [c];
                      p.forEach((e) => {
                        let i = tS(t, e);
                        if (!i) return;
                        let { transitionEnd: n, transition: o, ...s } = i;
                        for (let a in s) {
                          let l = s[a];
                          if (Array.isArray(l)) {
                            let u = d ? l.length - 1 : 0;
                            l = l[u];
                          }
                          null !== l && (r[a] = l);
                        }
                        for (let h in n) r[h] = n[h];
                      });
                    }
                    return r;
                  })(n, r, o, t),
                  renderState: e(),
                };
                return i && (s.mount = (t) => i(n, t, s)), s;
              })(t, e, n, r);
          return i ? o() : T(o);
        },
        tD = {
          useVisualState: tR({
            scrapeMotionValuesFromProps: tE,
            createRenderState: ty,
            onMount(t, e, { renderState: i, latestValues: n }) {
              try {
                i.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (r) {
                i.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0,
                };
              }
              tg(
                i,
                n,
                {
                  enableHardwareAcceleration: !1,
                },
                tx(e.tagName),
                t.transformTemplate
              ),
                tT(e, i);
            },
          }),
        },
        tL = {
          useVisualState: tR({
            scrapeMotionValuesFromProps: tP,
            createRenderState: ta,
          }),
        };

      function tF(
        t,
        e,
        i,
        n = {
          passive: !0,
        }
      ) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }

      function tj(t, e, i, n) {
        (0, l.useEffect)(() => {
          let r = t.current;
          if (i && r) return tF(r, e, i, n);
        }, [t, e, i, n]);
      }

      function tI(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }

      function tO(t) {
        let e = !!t.touches;
        return e;
      }
      ((r = s || (s = {})).Animate = "animate"),
        (r.Hover = "whileHover"),
        (r.Tap = "whileTap"),
        (r.Drag = "whileDrag"),
        (r.Focus = "whileFocus"),
        (r.InView = "whileInView"),
        (r.Exit = "exit");
      let tU = {
        pageX: 0,
        pageY: 0,
      };

      function tN(t, e = "page") {
        return {
          point: tO(t)
            ? (function (t, e = "page") {
                let i = t.touches[0] || t.changedTouches[0],
                  n = i || tU;
                return {
                  x: n[e + "X"],
                  y: n[e + "Y"],
                };
              })(t, e)
            : (function (t, e = "page") {
                return {
                  x: t[e + "X"],
                  y: t[e + "Y"],
                };
              })(t, e),
        };
      }
      let t$ = (t, e = !1) => {
          var i;
          let n = (e) => t(e, tN(e));
          return e
            ? (t) => {
                let e = t instanceof MouseEvent,
                  i = !e || (e && 0 === t.button);
                i && n(t);
              }
            : n;
        },
        tz = () => c && null === window.onpointerdown,
        tW = () => c && null === window.ontouchstart,
        tH = () => c && null === window.onmousedown,
        tY = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        tX = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };

      function tq(t) {
        if (tz());
        else if (tW()) return tX[t];
        else if (tH()) return tY[t];
        return t;
      }

      function tG(t, e, i, n) {
        return tF(t, tq(e), t$(i, "pointerdown" === e), n);
      }

      function tZ(t, e, i, n) {
        return tj(t, tq(e), i && t$(i, "pointerdown" === e), n);
      }

      function t_(t) {
        let e = null;
        return () => {
          let i = () => {
            e = null;
          };
          return null === e && ((e = t), i);
        };
      }
      let tK = t_("dragHorizontal"),
        tJ = t_("dragVertical");

      function tQ(t) {
        let e = !1;
        if ("y" === t) e = tJ();
        else if ("x" === t) e = tK();
        else {
          let i = tK(),
            n = tJ();
          i && n
            ? (e = () => {
                i(), n();
              })
            : (i && i(), n && n());
        }
        return e;
      }

      function t0() {
        let t = tQ(!0);
        return !t || (t(), !1);
      }

      function t1(t, e, i) {
        return (n, r) => {
          !(!tI(n) || t0()) &&
            (t.animationState && t.animationState.setActive(s.Hover, e),
            i && i(n, r));
        };
      }
      let t5 = (t, e) => !!e && (t === e || t5(t, e.parentElement));

      function t2(t) {
        return (0, l.useEffect)(() => () => t(), []);
      }
      let t3 = (t, e) => (i) => e(t(i)),
        t9 = (...t) => t.reduce(t3);
      var t4 = i(3454);
      let t6 = (void 0 === t4 || t4.env, "production"),
        t7 = new Set(),
        t8 = new WeakMap(),
        et = new WeakMap(),
        ee = (t) => {
          let e = t8.get(t.target);
          e && e(t);
        },
        ei = (t) => {
          t.forEach(ee);
        },
        en = {
          some: 0,
          all: 1,
        };

      function er(
        t,
        e,
        i,
        { root: n, margin: r, amount: o = "some", once: a }
      ) {
        (0, l.useEffect)(() => {
          if (!t || !i.current) return;
          let l = {
              root: null == n ? void 0 : n.current,
              rootMargin: r,
              threshold: "number" == typeof o ? o : en[o],
            },
            u = (t) => {
              let { isIntersecting: n } = t;
              if (
                e.isInView === n ||
                ((e.isInView = n), a && !n && e.hasEnteredView)
              )
                return;
              n && (e.hasEnteredView = !0),
                i.animationState && i.animationState.setActive(s.InView, n);
              let r = i.getProps(),
                o = n ? r.onViewportEnter : r.onViewportLeave;
              o && o(t);
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              et.has(i) || et.set(i, {});
              let n = et.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(ei, {
                    root: t,
                    ...e,
                  })),
                n[r]
              );
            })(e);
            return (
              t8.set(t, i),
              n.observe(t),
              () => {
                t8.delete(t), n.unobserve(t);
              }
            );
          })(i.current, l, u);
        }, [t, n, r, o]);
      }

      function eo(t, e, i, { fallback: n = !0 }) {
        (0, l.useEffect)(() => {
          if (t && n) {
            if ("production" !== t6) {
              var r, o, a;
              (o =
                "IntersectionObserver not available on this device. whileInView animations will trigger on mount."),
                t7.has(o) || (console.warn(o), a && console.warn(a), t7.add(o));
            }
            requestAnimationFrame(() => {
              e.hasEnteredView = !0;
              let { onViewportEnter: t } = i.getProps();
              t && t(null),
                i.animationState && i.animationState.setActive(s.InView, !0);
            });
          }
        }, [t]);
      }
      let es = (t) => (e) => (t(e), null),
        ea = {
          inView: es(function ({
            visualElement: t,
            whileInView: e,
            onViewportEnter: i,
            onViewportLeave: n,
            viewport: r = {},
          }) {
            let o = (0, l.useRef)({
                hasEnteredView: !1,
                isInView: !1,
              }),
              s = Boolean(e || i || n);
            r.once && o.current.hasEnteredView && (s = !1);
            let a = "undefined" == typeof IntersectionObserver ? eo : er;
            a(s, o.current, t, r);
          }),
          tap: es(function ({
            onTap: t,
            onTapStart: e,
            onTapCancel: i,
            whileTap: n,
            visualElement: r,
          }) {
            let o = (0, l.useRef)(!1),
              a = (0, l.useRef)(null),
              u = {
                passive: !(e || t || i || m),
              };

            function h() {
              a.current && a.current(), (a.current = null);
            }

            function d() {
              return (
                h(),
                (o.current = !1),
                r.animationState && r.animationState.setActive(s.Tap, !1),
                !t0()
              );
            }

            function c(e, n) {
              d() && (t5(r.current, e.target) ? t && t(e, n) : i && i(e, n));
            }

            function p(t, e) {
              d() && i && i(t, e);
            }

            function m(t, i) {
              h(),
                !o.current &&
                  ((o.current = !0),
                  (a.current = t9(
                    tG(window, "pointerup", c, u),
                    tG(window, "pointercancel", p, u)
                  )),
                  r.animationState && r.animationState.setActive(s.Tap, !0),
                  e && e(t, i));
            }
            tZ(r, "pointerdown", t || e || i || n ? m : void 0, u), t2(h);
          }),
          focus: es(function ({ whileFocus: t, visualElement: e }) {
            let { animationState: i } = e,
              n = () => {
                i && i.setActive(s.Focus, !0);
              },
              r = () => {
                i && i.setActive(s.Focus, !1);
              };
            tj(e, "focus", t ? n : void 0), tj(e, "blur", t ? r : void 0);
          }),
          hover: es(function ({
            onHoverStart: t,
            onHoverEnd: e,
            whileHover: i,
            visualElement: n,
          }) {
            tZ(n, "pointerenter", t || i ? t1(n, !0, t) : void 0, {
              passive: !t,
            }),
              tZ(n, "pointerleave", e || i ? t1(n, !1, e) : void 0, {
                passive: !e,
              });
          }),
        };

      function el() {
        let t = (0, l.useContext)(d);
        if (null === t) return [!0, null];
        let { isPresent: e, onExitComplete: i, register: n } = t,
          r = (0, l.useId)();
        (0, l.useEffect)(() => n(r), []);
        let o = () => i && i(r);
        return !e && i ? [!1, o] : [!0];
      }

      function eu(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      let eh = (t) => /^\-?\d*\.?\d+$/.test(t),
        ed = (t) => /^0[^.\s]+$/.test(t),
        ec = {
          delta: 0,
          timestamp: 0,
        },
        ep = (1 / 60) * 1e3,
        em =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        ef =
          "undefined" != typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(em()), ep),
        ev = !0,
        eg = !1,
        ey = !1,
        ex = ["read", "update", "preRender", "render", "postRender"],
        eb = ex.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                i = [],
                n = 0,
                r = !1,
                o = !1,
                s = new WeakSet(),
                a = {
                  schedule(t, o = !1, a = !1) {
                    let l = a && r,
                      u = l ? e : i;
                    return (
                      o && s.add(t),
                      -1 === u.indexOf(t) &&
                        (u.push(t), l && r && (n = e.length)),
                      t
                    );
                  },
                  cancel(t) {
                    let e = i.indexOf(t);
                    -1 !== e && i.splice(e, 1), s.delete(t);
                  },
                  process(l) {
                    if (r) {
                      o = !0;
                      return;
                    }
                    if (
                      ((r = !0),
                      ([e, i] = [i, e]),
                      (i.length = 0),
                      (n = e.length))
                    )
                      for (let u = 0; u < n; u++) {
                        let h = e[u];
                        h(l), s.has(h) && (a.schedule(h), t());
                      }
                    (r = !1), o && ((o = !1), a.process(l));
                  },
                };
              return a;
            })(() => (eg = !0))),
            t
          ),
          {}
        ),
        ew = ex.reduce((t, e) => {
          let i = eb[e];
          return (
            (t[e] = (t, e = !1, n = !1) => (eg || eE(), i.schedule(t, e, n))), t
          );
        }, {}),
        eV = ex.reduce((t, e) => ((t[e] = eb[e].cancel), t), {}),
        eA = ex.reduce((t, e) => ((t[e] = () => eb[e].process(ec)), t), {}),
        eT = (t) => eb[t].process(ec),
        eP = (t) => {
          (eg = !1),
            (ec.delta = ev ? ep : Math.max(Math.min(t - ec.timestamp, 40), 1)),
            (ec.timestamp = t),
            (ey = !0),
            ex.forEach(eT),
            (ey = !1),
            eg && ((ev = !1), ef(eP));
        },
        eE = () => {
          (eg = !0), (ev = !0), ey || ef(eP);
        };

      function eS(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }

      function eC(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class eM {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return eS(this.subscriptions, t), () => eC(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let o = this.subscriptions[r];
                o && o(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }

      function ek(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      let eB = (t) => !isNaN(parseFloat(t));
      class eR {
        constructor(t, e = {}) {
          (this.version = "7.10.3"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: i, timestamp: n } = ec;
              this.lastUpdated !== n &&
                ((this.timeDelta = i),
                (this.lastUpdated = n),
                ew.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              ew.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = eB(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new eM()), this.events[t].add(e)
          );
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t) {
          this.passiveEffect = t;
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e), (this.prev = t), (this.timeDelta = i);
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? ek(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.stopAnimation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.stopAnimation &&
            (this.stopAnimation(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.stopAnimation;
        }
        clearAnimation() {
          this.stopAnimation = null;
        }
        destroy() {
          this.clearListeners(), this.stop();
        }
      }

      function eD(t, e) {
        return new eR(t, e);
      }
      let eL = (t, e) => (i) =>
          Boolean(
            (_(i) && Z.test(i) && i.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eF = (t, e, i) => (n) => {
          if (!_(n)) return n;
          let [r, o, s, a] = n.match(q);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(o),
            [i]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        ej = (t) => z(0, 255, t),
        eI = { ...W, transform: (t) => Math.round(ej(t)) },
        eO = {
          test: eL("rgb", "red"),
          parse: eF("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            eI.transform(t) +
            ", " +
            eI.transform(e) +
            ", " +
            eI.transform(i) +
            ", " +
            X(H.transform(n)) +
            ")",
        },
        eU = {
          test: eL("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: eO.transform,
        },
        eN = {
          test: eL("hsl", "hue"),
          parse: eF("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            Q.transform(X(e)) +
            ", " +
            Q.transform(X(i)) +
            ", " +
            X(H.transform(n)) +
            ")",
        },
        e$ = {
          test: (t) => eO.test(t) || eU.test(t) || eN.test(t),
          parse: (t) =>
            eO.test(t) ? eO.parse(t) : eN.test(t) ? eN.parse(t) : eU.parse(t),
          transform: (t) =>
            _(t)
              ? t
              : t.hasOwnProperty("red")
              ? eO.transform(t)
              : eN.transform(t),
        },
        ez = "${c}",
        eW = "${n}";

      function eH(t) {
        "number" == typeof t && (t = `${t}`);
        let e = [],
          i = 0,
          n = 0,
          r = t.match(G);
        r &&
          ((i = r.length), (t = t.replace(G, ez)), e.push(...r.map(e$.parse)));
        let o = t.match(q);
        return (
          o &&
            ((n = o.length), (t = t.replace(q, eW)), e.push(...o.map(W.parse))),
          {
            values: e,
            numColors: i,
            numNumbers: n,
            tokenised: t,
          }
        );
      }

      function eY(t) {
        return eH(t).values;
      }

      function eX(t) {
        let { values: e, numColors: i, tokenised: n } = eH(t),
          r = e.length;
        return (t) => {
          let e = n;
          for (let o = 0; o < r; o++)
            e = e.replace(
              o < i ? ez : eW,
              o < i ? e$.transform(t[o]) : X(t[o])
            );
          return e;
        };
      }
      let eq = (t) => ("number" == typeof t ? 0 : t),
        eG = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              _(t) &&
              ((null === (e = t.match(q)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(G)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eY,
          createTransformer: eX,
          getAnimatableNone: function (t) {
            let e = eY(t),
              i = eX(t);
            return i(e.map(eq));
          },
        },
        eZ = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function e_(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(q) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          o = eZ.has(e) ? 1 : 0;
        return n !== i && (o *= 100), e + "(" + o + r + ")";
      }
      let eK = /([a-z-]*)\(.*?\)/g,
        eJ = {
          ...eG,
          getAnimatableNone(t) {
            let e = t.match(eK);
            return e ? e.map(e_).join(" ") : t;
          },
        },
        eQ = {
          ...to,
          color: e$,
          backgroundColor: e$,
          outlineColor: e$,
          fill: e$,
          stroke: e$,
          borderColor: e$,
          borderTopColor: e$,
          borderRightColor: e$,
          borderBottomColor: e$,
          borderLeftColor: e$,
          filter: eJ,
          WebkitFilter: eJ,
        },
        e0 = (t) => eQ[t];

      function e1(t, e) {
        var i;
        let n = e0(t);
        return (
          n !== eJ && (n = eG),
          null === (i = n.getAnimatableNone) || void 0 === i
            ? void 0
            : i.call(n, e)
        );
      }
      let e5 = (t) => (e) => e.test(t),
        e2 = [
          W,
          tt,
          Q,
          J,
          ti,
          te,
          {
            test: (t) => "auto" === t,
            parse: (t) => t,
          },
        ],
        e3 = (t) => e2.find(e5(t)),
        e9 = [...e2, e$, eG],
        e4 = (t) => e9.find(e5(t));

      function e6(t, e, i) {
        let n = t.getProps();
        return tS(
          n,
          e,
          void 0 !== i ? i : n.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }

      function e7(t, e, i) {
        t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, eD(i));
      }

      function e8(t, e) {
        if (!e) return;
        let i = e[t] || e.default || e;
        return i.from;
      }

      function it(t) {
        return Boolean(I(t) && t.add);
      }
      let ie = (t, e) => `${t}: ${e}`;

      function ii(t, e) {
        let { MotionAppearAnimations: i } = window,
          n = ie(t, F.has(e) ? "transform" : e),
          r = i && i.get(n);
        return r
          ? (ew.render(() => {
              try {
                r.cancel(), i.delete(n);
              } catch (t) {}
            }),
            r.currentTime || 0)
          : 0;
      }
      let ir = "data-" + tw("framerAppearId");
      var io = function () {},
        is = function () {};
      let ia = (t) => 1e3 * t,
        il = {
          current: !1,
        },
        iu = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        ih = (t) => (e) => 1 - t(1 - e),
        id = (t) => t * t,
        ic = ih(id),
        ip = iu(id),
        im = (t, e, i) => -i * t + i * e + t;

      function iv(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let ig = (t, e, i) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - n) + n));
        },
        iy = [eU, eO, eN],
        ix = (t) => iy.find((e) => e.test(t));

      function ib(t) {
        let e = ix(t);
        is(
          Boolean(e),
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === eN &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                o = 0,
                s = 0;
              if ((e /= 100)) {
                let a = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - a;
                (r = iv(l, a, t + 1 / 3)),
                  (o = iv(l, a, t)),
                  (s = iv(l, a, t - 1 / 3));
              } else r = o = s = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let iw = (t, e) => {
        let i = ib(t),
          n = ib(e),
          r = { ...i };
        return (t) => (
          (r.red = ig(i.red, n.red, t)),
          (r.green = ig(i.green, n.green, t)),
          (r.blue = ig(i.blue, n.blue, t)),
          (r.alpha = im(i.alpha, n.alpha, t)),
          eO.transform(r)
        );
      };

      function iV(t, e) {
        return "number" == typeof t
          ? (i) => im(t, e, i)
          : e$.test(t)
          ? iw(t, e)
          : iP(t, e);
      }
      let iA = (t, e) => {
          let i = [...t],
            n = i.length,
            r = t.map((t, i) => iV(t, e[i]));
          return (t) => {
            for (let e = 0; e < n; e++) i[e] = r[e](t);
            return i;
          };
        },
        iT = (t, e) => {
          let i = { ...t, ...e },
            n = {};
          for (let r in i)
            void 0 !== t[r] && void 0 !== e[r] && (n[r] = iV(t[r], e[r]));
          return (t) => {
            for (let e in n) i[e] = n[e](t);
            return i;
          };
        },
        iP = (t, e) => {
          let i = eG.createTransformer(e),
            n = eH(t),
            r = eH(e),
            o = n.numColors === r.numColors && n.numNumbers >= r.numNumbers;
          return o
            ? t9(iA(n.values, r.values), i)
            : (io(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (i) => `${i > 0 ? e : t}`);
        },
        iE = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        iS = (t, e) => (i) => im(t, e, i);

      function iC(t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
        let o = t.length;
        is(
          o === e.length,
          "Both input and output ranges must be the same length"
        ),
          is(
            !n || !Array.isArray(n) || n.length === o - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let s = (function (t, e, i) {
            let n = [],
              r =
                i ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return e$.test(t) ? iw : iP;
                  else if (Array.isArray(t)) return iA;
                  else if ("object" == typeof t) return iT;
                  return iS;
                })(t[0]),
              o = t.length - 1;
            for (let s = 0; s < o; s++) {
              let a = r(t[s], t[s + 1]);
              if (e) {
                let l = Array.isArray(e) ? e[s] : e;
                a = t9(l, a);
              }
              n.push(a);
            }
            return n;
          })(e, n, r),
          a = s.length,
          l = (e) => {
            let i = 0;
            if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = iE(t[i], t[i + 1], e);
            return s[i](n);
          };
        return i ? (e) => l(z(t[0], t[o - 1], e)) : l;
      }
      let iM = (t) => t,
        ik = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

      function iB(t, e, i, n) {
        if (t === e && i === n) return iM;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let o,
              s,
              a = 0;
            do
              (o = ik((s = e + (i - e) / 2), n, r) - t) > 0 ? (i = s) : (e = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ik(r(t), e, n));
      }
      let iR = (t) => 1 - Math.sin(Math.acos(t)),
        iD = ih(iR),
        iL = iu(iD),
        iF = iB(0.33, 1.53, 0.69, 0.99),
        ij = ih(iF),
        iI = iu(ij),
        iO = (t) =>
          (t *= 2) < 1 ? 0.5 * ij(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        iU = {
          linear: iM,
          easeIn: id,
          easeInOut: ip,
          easeOut: ic,
          circIn: iR,
          circInOut: iL,
          circOut: iD,
          backIn: ij,
          backInOut: iI,
          backOut: iF,
          anticipate: iO,
        },
        iN = (t) => {
          if (Array.isArray(t)) {
            is(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return iB(e, i, n, r);
          }
          return "string" == typeof t
            ? (is(void 0 !== iU[t], `Invalid easing type '${t}'`), iU[t])
            : t;
        },
        i$ = (t) => Array.isArray(t) && "number" != typeof t[0];

      function iz({ keyframes: t, ease: e = ip, times: i, duration: n = 300 }) {
        var r, o;
        t = [...t];
        let s = iz[0],
          a = i$(e) ? e.map(iN) : iN(e),
          l = {
            done: !1,
            value: s,
          },
          u = (r =
            i && i.length === iz.length
              ? i
              : (function (t) {
                  let e = t.length;
                  return t.map((t, i) => (0 !== i ? i / (e - 1) : 0));
                })(t)).map((t) => t * n);

        function h() {
          var e, i;
          return iC(u, t, {
            ease: Array.isArray(a)
              ? a
              : (e = t).map(() => a || ip).splice(0, e.length - 1),
          });
        }
        let d = h();
        return {
          next: (t) => ((l.value = d(t)), (l.done = t >= n), l),
          flipTarget() {
            t.reverse(), (d = h());
          },
        };
      }

      function iW(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let iH = ["duration", "bounce"],
        iY = ["stiffness", "damping", "mass"];

      function iX(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }

      function iq({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: i = 0.01,
        ...n
      }) {
        let r = t[0],
          o = t[t.length - 1],
          s = {
            done: !1,
            value: r,
          },
          {
            stiffness: a,
            damping: l,
            mass: u,
            velocity: h,
            duration: d,
            isResolvedFromDuration: c,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!iX(t, iY) && iX(t, iH)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let r, o;
                io(t <= 1e4, "Spring duration must be 10 seconds or less");
                let s = 1 - e;
                (s = z(0.05, 1, s)),
                  (t = z(0.01, 10, t / 1e3)),
                  s < 1
                    ? ((r = (e) => {
                        let n = e * s,
                          r = n * t,
                          o = iW(e, s);
                        return 0.001 - ((n - i) / o) * Math.exp(-r);
                      }),
                      (o = (e) => {
                        let n = e * s,
                          o = n * t,
                          a = Math.pow(s, 2) * Math.pow(e, 2) * t,
                          l = iW(Math.pow(e, 2), s),
                          u = -r(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((o * i + i - a) * Math.exp(-o))) / l;
                      }))
                    : ((r = (e) => {
                        let n = Math.exp(-e * t),
                          r = (e - i) * t + 1;
                        return -0.001 + n * r;
                      }),
                      (o = (e) => {
                        let n = Math.exp(-e * t),
                          r = (i - e) * (t * t);
                        return n * r;
                      }));
                let a = 5 / t,
                  l = (function (t, e, i) {
                    let n = i;
                    for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                    return n;
                  })(r, o, a);
                if (((t *= 1e3), isNaN(l)))
                  return {
                    stiffness: 100,
                    damping: 10,
                    duration: t,
                  };
                {
                  let u = Math.pow(l, 2) * n;
                  return {
                    stiffness: u,
                    damping: 2 * s * Math.sqrt(n * u),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...i,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(n),
          p = iG,
          m = h ? -(h / 1e3) : 0,
          f = l / (2 * Math.sqrt(a * u));

        function v() {
          let t = o - r,
            e = Math.sqrt(a / u) / 1e3;
          if (
            (void 0 === i && (i = Math.min(Math.abs(o - r) / 100, 0.4)), f < 1)
          ) {
            let n = iW(e, f);
            p = (i) =>
              o -
              Math.exp(-f * e * i) *
                (((m + f * e * t) / n) * Math.sin(n * i) + t * Math.cos(n * i));
          } else if (1 === f)
            p = (i) => o - Math.exp(-e * i) * (t + (m + e * t) * i);
          else {
            let s = e * Math.sqrt(f * f - 1);
            p = (i) => {
              let n = Math.min(s * i, 300);
              return (
                o -
                (Math.exp(-f * e * i) *
                  ((m + f * e * t) * Math.sinh(n) + s * t * Math.cosh(n))) /
                  s
              );
            };
          }
        }
        return (
          v(),
          {
            next(t) {
              let n = p(t);
              if (c) s.done = t >= d;
              else {
                let r = m;
                if (0 !== t) {
                  if (f < 1) {
                    let a = Math.max(0, t - 5);
                    r = ek(n - p(a), t - a);
                  } else r = 0;
                }
                let l = Math.abs(r) <= e,
                  u = Math.abs(o - n) <= i;
                s.done = l && u;
              }
              return (s.value = s.done ? o : n), s;
            },
            flipTarget() {
              (m = -m), ([r, o] = [o, r]), v();
            },
          }
        );
      }
      iq.needsInterpolation = (t, e) =>
        "string" == typeof t || "string" == typeof e;
      let iG = (t) => 0,
        iZ = {
          decay: function ({
            keyframes: t = [0],
            velocity: e = 0,
            power: i = 0.8,
            timeConstant: n = 350,
            restDelta: r = 0.5,
            modifyTarget: o,
          }) {
            let s = t[0],
              a = {
                done: !1,
                value: s,
              },
              l = i * e,
              u = s + l,
              h = void 0 === o ? u : o(u);
            return (
              h !== u && (l = h - s),
              {
                next(t) {
                  let e = -l * Math.exp(-t / n);
                  return (
                    (a.done = !(e > r || e < -r)),
                    (a.value = a.done ? h : h + e),
                    a
                  );
                },
                flipTarget() {},
              }
            );
          },
          keyframes: iz,
          tween: iz,
          spring: iq,
        };

      function i_(t, e, i = 0) {
        return t - e - i;
      }
      let iK = (t) => {
        let e = ({ delta: e }) => t(e);
        return {
          start: () => ew.update(e, !0),
          stop: () => eV.update(e),
        };
      };

      function iJ({
        duration: t,
        driver: e = iK,
        elapsed: i = 0,
        repeat: n = 0,
        repeatType: r = "loop",
        repeatDelay: o = 0,
        keyframes: s,
        autoplay: a = !0,
        onPlay: l,
        onStop: u,
        onComplete: h,
        onRepeat: d,
        onUpdate: c,
        type: p = "keyframes",
        ...m
      }) {
        var f;
        let v,
          g = 0,
          y = t,
          x,
          b = !1,
          w = !0,
          V,
          A = iZ[s.length > 2 ? "keyframes" : p],
          T = s[0],
          P = s[s.length - 1];
        (null === (f = A.needsInterpolation) || void 0 === f
          ? void 0
          : f.call(A, T, P)) &&
          ((V = iC([0, 100], [T, P], {
            clamp: !1,
          })),
          (s = [0, 100]));
        let E = A({ ...m, duration: t, keyframes: s });
        return (
          a &&
            (l && l(),
            (v = e(function t(e) {
              if ((w || (e = -e), (i += e), !b)) {
                let s = E.next(Math.max(0, i));
                (x = s.value), V && (x = V(x)), (b = w ? s.done : i <= 0);
              }
              if ((c && c(x), b)) {
                if ((0 === g && (y = void 0 !== y ? y : i), g < n)) {
                  var a, l, u, p;
                  (a = i),
                    (l = y),
                    ((p = w) ? a >= l + o : a <= -o) &&
                      (g++,
                      "reverse" === r
                        ? (i = (function (t, e = 0, i = 0, n = !0) {
                            return n ? i_(e + -t, e, i) : e - (t - e) + i;
                          })(i, y, o, (w = g % 2 == 0)))
                        : ((i = i_(i, y, o)), "mirror" === r && E.flipTarget()),
                      (b = !1),
                      d && d());
                } else v.stop(), h && h();
              }
            })).start()),
          {
            stop() {
              u && u(), v.stop();
            },
            sample: (t) => E.next(Math.max(0, t)),
          }
        );
      }
      let iQ = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        i0 = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: iQ([0, 0.65, 0.55, 1]),
          circOut: iQ([0.55, 0, 1, 0.45]),
          backIn: iQ([0.31, 0.01, 0.66, -0.59]),
          backOut: iQ([0.33, 1.53, 0.69, 0.99]),
        };

      function i1(t, e) {
        let i = performance.now(),
          n = ({ timestamp: r }) => {
            let o = r - i;
            o >= e && (eV.read(n), t(o - e));
          };
        return ew.read(n, !0), () => eV.read(n);
      }
      let i5 = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        }),
        i2 = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        i3 = () => ({
          type: "keyframes",
          ease: "linear",
          duration: 0.3,
        }),
        i9 = {
          type: "keyframes",
          duration: 0.8,
        },
        i4 = {
          x: i5,
          y: i5,
          z: i5,
          rotate: i5,
          rotateX: i5,
          rotateY: i5,
          rotateZ: i5,
          scaleX: i2,
          scaleY: i2,
          scale: i2,
          opacity: i3,
          backgroundColor: i3,
          color: i3,
          default: i2,
        },
        i6 = (t, { keyframes: e }) => {
          if (e.length > 2) return i9;
          {
            let i = i4[t] || i4.default;
            return i(e[1]);
          }
        },
        i7 = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e && eG.test(e) && !e.startsWith("url("))
          );

      function i8(t) {
        return (
          0 === t ||
          ("string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" "))
        );
      }

      function nt(t) {
        return "number" == typeof t ? 0 : e1("", t);
      }

      function ne(t, e) {
        return t[e] || t.default || t;
      }
      let ni = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        nn = {},
        nr = {};
      for (let no in ni)
        nr[no] = () => (void 0 === nn[no] && (nn[no] = ni[no]()), nn[no]);
      let ns = new Set(["opacity"]),
        na =
          (t, e, i, n = {}) =>
          (r) => {
            let o = ne(n, t) || {},
              s = o.delay || n.delay || 0,
              { elapsed: a = 0 } = n;
            a -= ia(s);
            let l = (function (t, e, i, n) {
                let r = i7(e, i),
                  o = void 0 !== n.from ? n.from : t.get();
                return ("none" === o && r && "string" == typeof i
                  ? (o = e1(e, i))
                  : i8(o) && "string" == typeof i
                  ? (o = nt(i))
                  : !Array.isArray(i) &&
                    i8(i) &&
                    "string" == typeof o &&
                    (i = nt(o)),
                Array.isArray(i))
                  ? (null === i[0] && (i[0] = o), i)
                  : [o, i];
              })(e, t, i, o),
              u = l[0],
              h = l[l.length - 1],
              d = i7(t, u),
              c = i7(t, h);
            io(
              d === c,
              `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`
            );
            let p = {
              keyframes: l,
              velocity: e.getVelocity(),
              ...o,
              elapsed: a,
              onUpdate(t) {
                e.set(t), o.onUpdate && o.onUpdate(t);
              },
              onComplete() {
                r(), o.onComplete && o.onComplete();
              },
            };
            if (!d || !c || il.current || !1 === o.type)
              return (function ({
                keyframes: t,
                elapsed: e,
                onUpdate: i,
                onComplete: n,
              }) {
                let r = () => (i && i(t[t.length - 1]), n && n(), () => {});
                return e ? i1(r, -e) : r();
              })(p);
            if ("inertia" === o.type) {
              let m = (function ({
                keyframes: t,
                velocity: e = 0,
                min: i,
                max: n,
                power: r = 0.8,
                timeConstant: o = 750,
                bounceStiffness: s = 500,
                bounceDamping: a = 10,
                restDelta: l = 1,
                modifyTarget: u,
                driver: h,
                onUpdate: d,
                onComplete: c,
                onStop: p,
              }) {
                let m = t[0],
                  f;

                function v(t) {
                  return (void 0 !== i && t < i) || (void 0 !== n && t > n);
                }

                function g(t) {
                  return void 0 === i
                    ? n
                    : void 0 === n
                    ? i
                    : Math.abs(i - t) < Math.abs(n - t)
                    ? i
                    : n;
                }

                function y(t) {
                  null == f || f.stop(),
                    (f = iJ({
                      keyframes: [0, 1],
                      velocity: 0,
                      ...t,
                      driver: h,
                      onUpdate(e) {
                        var i;
                        null == d || d(e),
                          null === (i = t.onUpdate) ||
                            void 0 === i ||
                            i.call(t, e);
                      },
                      onComplete: c,
                      onStop: p,
                    }));
                }

                function x(t) {
                  y({
                    type: "spring",
                    stiffness: s,
                    damping: a,
                    restDelta: l,
                    ...t,
                  });
                }
                if (v(m))
                  x({
                    velocity: e,
                    keyframes: [m, g(m)],
                  });
                else {
                  let b = r * e + m;
                  void 0 !== u && (b = u(b));
                  let w = g(b),
                    V = w === i ? -1 : 1,
                    A,
                    T,
                    P = (t) => {
                      (A = T),
                        (T = t),
                        (e = ek(t - A, ec.delta)),
                        ((1 === V && t > w) || (-1 === V && t < w)) &&
                          x({
                            keyframes: [t, w],
                            velocity: e,
                          });
                    };
                  y({
                    type: "decay",
                    keyframes: [m, 0],
                    velocity: e,
                    timeConstant: o,
                    power: r,
                    restDelta: l,
                    modifyTarget: u,
                    onUpdate: v(b) ? P : void 0,
                  });
                }
                return {
                  stop: () => (null == f ? void 0 : f.stop()),
                };
              })(p);
              return () => m.stop();
            }
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: o,
              repeatType: s,
              repeatDelay: a,
              from: l,
              ...u
            }) {
              return !!Object.keys(u).length;
            })(o) && (p = { ...p, ...i6(t, p) }),
              p.duration && (p.duration = ia(p.duration)),
              p.repeatDelay && (p.repeatDelay = ia(p.repeatDelay));
            let f = e.owner,
              v = f && f.current,
              g =
                nr.waapi() &&
                ns.has(t) &&
                !p.repeatDelay &&
                "mirror" !== p.repeatType &&
                0 !== p.damping &&
                f &&
                v instanceof HTMLElement &&
                !f.getProps().onUpdate;
            if (g)
              return (function (t, e, { onUpdate: i, onComplete: n, ...r }) {
                var o;
                let {
                  keyframes: s,
                  duration: a = 0.3,
                  elapsed: l = 0,
                  ease: u,
                } = r;
                if (
                  "spring" === r.type ||
                  (!(!(o = r.ease) || Array.isArray(o)) &&
                    ("string" != typeof o || !i0[o]))
                ) {
                  let h = iJ(r),
                    d = {
                      done: !1,
                      value: s[0],
                    },
                    c = [],
                    p = 0;
                  for (; !d.done; ) c.push((d = h.sample(p)).value), (p += 10);
                  (s = c), (a = p - 10), (u = "linear");
                }
                let m = (function (
                  t,
                  e,
                  i,
                  {
                    delay: n = 0,
                    duration: r,
                    repeat: o = 0,
                    repeatType: s = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  return t.animate(
                    {
                      [e]: i,
                      offset: l,
                    },
                    {
                      delay: n,
                      duration: r,
                      easing: (function (t) {
                        if (t) return Array.isArray(t) ? iQ(t) : i0[t];
                      })(a),
                      fill: "both",
                      iterations: o + 1,
                      direction: "reverse" === s ? "alternate" : "normal",
                    }
                  );
                })(t.owner.current, e, s, {
                  ...r,
                  delay: -l,
                  duration: a,
                  ease: u,
                });
                return (
                  (m.onfinish = () => {
                    t.set(s[s.length - 1]), n && n();
                  }),
                  () => {
                    let { currentTime: e } = m;
                    if (e) {
                      let i = iJ(r);
                      t.setWithVelocity(
                        i.sample(e - 10).value,
                        i.sample(e).value,
                        10
                      );
                    }
                    ew.update(() => m.cancel());
                  }
                );
              })(e, t, p);
            {
              let y = iJ(p);
              return () => y.stop();
            }
          };

      function nl(t, e, i = {}) {
        var n;
        let r = e6(t, e, i.custom),
          { transition: o = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (o = i.transitionOverride);
        let s = r ? () => nu(t, r, i) : () => Promise.resolve(),
          a = (
            null === (n = t.variantChildren) || void 0 === n ? void 0 : n.size
          )
            ? (n = 0) => {
                let {
                  delayChildren: r = 0,
                  staggerChildren: s,
                  staggerDirection: a,
                } = o;
                return (function (t, e, i = 0, n = 0, r = 1, o) {
                  let s = [],
                    a = (t.variantChildren.size - 1) * n,
                    l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                  return (
                    Array.from(t.variantChildren)
                      .sort(nh)
                      .forEach((t, n) => {
                        s.push(
                          nl(t, e, { ...o, delay: i + l(n) }).then(() =>
                            t.notify("AnimationComplete", e)
                          )
                        );
                      }),
                    Promise.all(s)
                  );
                })(t, e, r + n, s, a, i);
              }
            : () => Promise.resolve(),
          { when: l } = o;
        if (!l) return Promise.all([s(), a(i.delay)]);
        {
          let [u, h] = "beforeChildren" === l ? [s, a] : [a, s];
          return u().then(h);
        }
      }

      function nu(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var o;
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = t.makeTargetAnimatable(e),
          u = t.getValue("willChange");
        n && (s = n);
        let h = [],
          d =
            r &&
            (null === (o = t.animationState) || void 0 === o
              ? void 0
              : o.getState()[r]);
        for (let c in l) {
          let p = t.getValue(c),
            m = l[c];
          if (!p || void 0 === m || (d && nd(d, c))) continue;
          let f = {
            delay: i,
            elapsed: 0,
            ...s,
          };
          if (
            (t.shouldReduceMotion &&
              F.has(c) &&
              (f = { ...f, type: !1, delay: 0 }),
            !p.hasAnimated)
          ) {
            let v = t.getProps()[ir];
            v && (f.elapsed = ii(v, c));
          }
          let g = p.start(na(c, p, m, f));
          it(u) && (u.add(c), (g = g.then(() => u.remove(c)))), h.push(g);
        }
        return Promise.all(h).then(() => {
          a &&
            (function (t, e) {
              let i = e6(t, e),
                {
                  transitionEnd: n = {},
                  transition: r = {},
                  ...o
                } = i ? t.makeTargetAnimatable(i, !1) : {};
              for (let s in (o = { ...o, ...n })) {
                let a = tk(o[s]);
                e7(t, s, a);
              }
            })(t, a);
        });
      }

      function nh(t, e) {
        return t.sortNodePosition(e);
      }

      function nd({ protectedKeys: t, needsAnimating: e }, i) {
        let n = t.hasOwnProperty(i) && !0 !== e[i];
        return (e[i] = !1), n;
      }
      let nc = [s.Animate, s.InView, s.Focus, s.Hover, s.Tap, s.Drag, s.Exit],
        np = [...nc].reverse(),
        nm = nc.length;

      function nf(t, e) {
        return "string" == typeof e ? e !== t : !!Array.isArray(e) && !eu(e, t);
      }

      function nv(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let ng = {
          animation: es(({ visualElement: t, animate: e }) => {
            t.animationState ||
              (t.animationState = (function (t) {
                var e;
                let i = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          t.notify("AnimationStart", e);
                          let n;
                          if (Array.isArray(e)) {
                            let r = e.map((e) => nl(t, e, i));
                            n = Promise.all(r);
                          } else if ("string" == typeof e) n = nl(t, e, i);
                          else {
                            let o =
                              "function" == typeof e ? e6(t, e, i.custom) : e;
                            n = nu(t, o, i);
                          }
                          return n.then(() => t.notify("AnimationComplete", e));
                        })(t, e, i)
                      )
                    ),
                  n = {
                    [s.Animate]: nv(!0),
                    [s.InView]: nv(),
                    [s.Hover]: nv(),
                    [s.Tap]: nv(),
                    [s.Drag]: nv(),
                    [s.Focus]: nv(),
                    [s.Exit]: nv(),
                  },
                  r = !0,
                  o = (e, i) => {
                    let n = e6(t, i);
                    if (n) {
                      let { transition: r, transitionEnd: o, ...s } = n;
                      e = { ...e, ...s, ...o };
                    }
                    return e;
                  };

                function a(e, s) {
                  let a = t.getProps(),
                    l = t.getVariantContext(!0) || {},
                    u = [],
                    h = new Set(),
                    d = {},
                    c = 1 / 0;
                  for (let p = 0; p < nm; p++) {
                    let m = np[p],
                      f = n[m],
                      y = void 0 !== a[m] ? a[m] : l[m],
                      x = v(y),
                      b = m === s ? f.isActive : null;
                    !1 === b && (c = p);
                    let w = y === l[m] && y !== a[m] && x;
                    if (
                      (w && r && t.manuallyAnimateOnMount && (w = !1),
                      (f.protectedKeys = { ...d }),
                      (!f.isActive && null === b) ||
                        (!y && !f.prevProp) ||
                        g(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let V = nf(f.prevProp, y),
                      A =
                        V || (m === s && f.isActive && !w && x) || (p > c && x),
                      T = Array.isArray(y) ? y : [y],
                      P = T.reduce(o, {});
                    !1 === b && (P = {});
                    let { prevResolvedValues: E = {} } = f,
                      S = { ...E, ...P },
                      C = (t) => {
                        (A = !0), h.delete(t), (f.needsAnimating[t] = !0);
                      };
                    for (let M in S) {
                      let k = P[M],
                        B = E[M];
                      d.hasOwnProperty(M) ||
                        (k !== B
                          ? tC(k) && tC(B)
                            ? !eu(k, B) || V
                              ? C(M)
                              : (f.protectedKeys[M] = !0)
                            : void 0 !== k
                            ? C(M)
                            : h.add(M)
                          : void 0 !== k && h.has(M)
                          ? C(M)
                          : (f.protectedKeys[M] = !0));
                    }
                    (f.prevProp = y),
                      (f.prevResolvedValues = P),
                      f.isActive && (d = { ...d, ...P }),
                      r && t.blockInitialAnimation && (A = !1),
                      A &&
                        !w &&
                        u.push(
                          ...T.map((t) => ({
                            animation: t,
                            options: {
                              type: m,
                              ...e,
                            },
                          }))
                        );
                  }
                  if (h.size) {
                    let R = {};
                    h.forEach((e) => {
                      let i = t.getBaseTarget(e);
                      void 0 !== i && (R[e] = i);
                    }),
                      u.push({
                        animation: R,
                      });
                  }
                  let D = Boolean(u.length);
                  return (
                    r &&
                      !1 === a.initial &&
                      !t.manuallyAnimateOnMount &&
                      (D = !1),
                    (r = !1),
                    D ? i(u) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: a,
                  setActive: function (e, i, r) {
                    var o;
                    if (n[e].isActive === i) return Promise.resolve();
                    null === (o = t.variantChildren) ||
                      void 0 === o ||
                      o.forEach((t) => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, i);
                      }),
                      (n[e].isActive = i);
                    let s = a(r, e);
                    for (let l in n) n[l].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (e) {
                    i = e(t);
                  },
                  getState: () => n,
                };
              })(t)),
              g(e) && (0, l.useEffect)(() => e.subscribe(t), [e]);
          }),
          exit: es((t) => {
            let { custom: e, visualElement: i } = t,
              [n, r] = el(),
              o = (0, l.useContext)(d);
            (0, l.useEffect)(() => {
              i.isPresent = n;
              let t =
                i.animationState &&
                i.animationState.setActive(s.Exit, !n, {
                  custom: (o && o.custom) || e,
                });
              t && !n && t.then(r);
            }, [n]);
          }),
        },
        ny = (t, e) => Math.abs(t - e);
      class nx {
        constructor(t, e, { transformPagePoint: i } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = nV(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    let i = ny(t.x, e.x),
                      n = ny(t.y, e.y);
                    return Math.sqrt(i ** 2 + n ** 2);
                  })(t.offset, {
                    x: 0,
                    y: 0,
                  }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = ec;
              this.history.push({ ...n, timestamp: r });
              let { onStart: o, onMove: s } = this.handlers;
              e ||
                (o && o(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                s && s(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              if (
                ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = nb(e, this.transformPagePoint)),
                tI(t) && 0 === t.buttons)
              ) {
                this.handlePointerUp(t, e);
                return;
              }
              ew.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let { onEnd: i, onSessionEnd: n } = this.handlers,
                r = nV(nb(e, this.transformPagePoint), this.history);
              this.startEvent && i && i(t, r), n && n(t, r);
            }),
            tO(t) && t.touches.length > 1)
          )
            return;
          (this.handlers = e), (this.transformPagePoint = i);
          let n = tN(t),
            r = nb(n, this.transformPagePoint),
            { point: o } = r,
            { timestamp: s } = ec;
          this.history = [{ ...o, timestamp: s }];
          let { onSessionStart: a } = e;
          a && a(t, nV(r, this.history)),
            (this.removeListeners = t9(
              tG(window, "pointermove", this.handlePointerMove),
              tG(window, "pointerup", this.handlePointerUp),
              tG(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            eV.update(this.updatePoint);
        }
      }

      function nb(t, e) {
        return e
          ? {
              point: e(t.point),
            }
          : t;
      }

      function nw(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y,
        };
      }

      function nV({ point: t }, e) {
        var i;
        return {
          point: t,
          delta: nw(t, nA(e)),
          offset: nw(t, ((i = e), i[0])),
          velocity: (function (t, e) {
            if (t.length < 2)
              return {
                x: 0,
                y: 0,
              };
            let i = t.length - 1,
              n = null,
              r = nA(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > ia(0.1)));

            )
              i--;
            if (!n)
              return {
                x: 0,
                y: 0,
              };
            let o = (r.timestamp - n.timestamp) / 1e3;
            if (0 === o)
              return {
                x: 0,
                y: 0,
              };
            let s = {
              x: (r.x - n.x) / o,
              y: (r.y - n.y) / o,
            };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(e, 0.1),
        };
      }

      function nA(t) {
        return t[t.length - 1];
      }

      function nT(t) {
        return t.max - t.min;
      }

      function nP(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }

      function nE(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = im(e.min, e.max, t.origin)),
          (t.scale = nT(i) / nT(e)),
          (nP(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = im(i.min, i.max, t.origin) - t.originPoint),
          (nP(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }

      function nS(t, e, i, n) {
        nE(t.x, e.x, i.x, null == n ? void 0 : n.originX),
          nE(t.y, e.y, i.y, null == n ? void 0 : n.originY);
      }

      function nC(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + nT(e));
      }

      function nM(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + nT(e));
      }

      function nk(t, e, i) {
        nM(t.x, e.x, i.x), nM(t.y, e.y, i.y);
      }

      function nB(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }

      function nR(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]),
          {
            min: i,
            max: n,
          }
        );
      }

      function nD(t, e, i) {
        return {
          min: nL(t, e),
          max: nL(t, i),
        };
      }

      function nL(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let nF = () => ({
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0,
        }),
        nj = () => ({
          x: nF(),
          y: nF(),
        }),
        nI = () => ({
          min: 0,
          max: 0,
        }),
        nO = () => ({
          x: nI(),
          y: nI(),
        });

      function nU(t) {
        return [t("x"), t("y")];
      }

      function nN({ top: t, left: e, right: i, bottom: n }) {
        return {
          x: {
            min: e,
            max: i,
          },
          y: {
            min: t,
            max: n,
          },
        };
      }

      function n$(t) {
        return void 0 === t || 1 === t;
      }

      function nz({ scale: t, scaleX: e, scaleY: i }) {
        return !n$(t) || !n$(e) || !n$(i);
      }

      function nW(t) {
        return nz(t) || nH(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }

      function nH(t) {
        return nY(t.x) || nY(t.y);
      }

      function nY(t) {
        return t && "0%" !== t;
      }

      function nX(t, e, i, n, r) {
        var o, s, a, l, u, h;
        return (
          void 0 !== r && ((o = t), (s = r), (t = (a = n) + s * (o - a))),
          n + i * ((l = t) - n) + e
        );
      }

      function nq(t, e = 0, i = 1, n, r) {
        (t.min = nX(t.min, e, i, n, r)), (t.max = nX(t.max, e, i, n, r));
      }

      function nG(t, { x: e, y: i }) {
        nq(t.x, e.translate, e.scale, e.originPoint),
          nq(t.y, i.translate, i.scale, i.originPoint);
      }

      function nZ(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }

      function n_(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }

      function nK(t, e, [i, n, r]) {
        let o = void 0 !== e[r] ? e[r] : 0.5,
          s = im(t.min, t.max, o);
        nq(t, e[i], e[n], s, e.scale);
      }
      let nJ = ["x", "scaleX", "originX"],
        nQ = ["y", "scaleY", "originY"];

      function n0(t, e) {
        nK(t.x, e, nJ), nK(t.y, e, nQ);
      }

      function n1(t, e) {
        return nN(
          (function (t, e) {
            if (!e) return t;
            let i = e({
                x: t.left,
                y: t.top,
              }),
              n = e({
                x: t.right,
                y: t.bottom,
              });
            return {
              top: i.y,
              left: i.x,
              bottom: n.y,
              right: n.x,
            };
          })(t.getBoundingClientRect(), e)
        );
      }
      let n5 = new WeakMap();
      class n2 {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = {
              x: 0,
              y: 0,
            }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = nO()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          if (!1 === this.visualElement.isPresent) return;
          let i = (t) => {
              this.stopAnimation(), e && this.snapToCursor(tN(t, "page").point);
            },
            n = (t, e) => {
              var i;
              let {
                drag: n,
                dragPropagation: r,
                onDragStart: o,
              } = this.getProps();
              (!n ||
                r ||
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = tQ(n)),
                this.openGlobalLock)) &&
                ((this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                nU((t) => {
                  var e, i;
                  let n = this.getAxisMotionValue(t).get() || 0;
                  if (Q.test(n)) {
                    let r =
                      null ===
                        (i =
                          null === (e = this.visualElement.projection) ||
                          void 0 === e
                            ? void 0
                            : e.layout) || void 0 === i
                        ? void 0
                        : i.layoutBox[t];
                    if (r) {
                      let o = nT(r);
                      n = o * (parseFloat(n) / 100);
                    }
                  }
                  this.originPoint[t] = n;
                }),
                null == o || o(t, e),
                null === (i = this.visualElement.animationState) ||
                  void 0 === i ||
                  i.setActive(s.Drag, !0));
            },
            r = (t, e) => {
              let {
                dragPropagation: i,
                dragDirectionLock: n,
                onDirectionLock: r,
                onDrag: o,
              } = this.getProps();
              if (!i && !this.openGlobalLock) return;
              let { offset: s } = e;
              if (n && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(s)),
                  null !== this.currentDirection &&
                    (null == r || r(this.currentDirection));
                return;
              }
              this.updateAxis("x", e.point, s),
                this.updateAxis("y", e.point, s),
                this.visualElement.render(),
                null == o || o(t, e);
            },
            o = (t, e) => this.stop(t, e);
          this.panSession = new nx(
            t,
            {
              onSessionStart: i,
              onStart: n,
              onMove: r,
              onSessionEnd: o,
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          null == r || r(t, e);
        }
        cancel() {
          var t, e;
          (this.isDragging = !1),
            this.visualElement.projection &&
              (this.visualElement.projection.isAnimationBlocked = !1),
            null === (t = this.panSession) || void 0 === t || t.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            null === (e = this.visualElement.animationState) ||
              void 0 === e ||
              e.setActive(s.Drag, !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !n3(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            o = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (o = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? im(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? im(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(o, this.constraints[t], this.elastic[t])),
            r.set(o);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: i } = this.visualElement.projection || {},
            n = this.constraints;
          t && f(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return {
                  x: nB(t.x, i, r),
                  y: nB(t.y, e, n),
                };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                {
                  x: nD(t, "left", "right"),
                  y: nD(t, "top", "bottom"),
                }
              );
            })(e)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nU((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t, e;
          let { dragConstraints: i, onMeasureDragConstraints: n } =
            this.getProps();
          if (!i || !f(i)) return !1;
          let r = i.current;
          is(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: o } = this.visualElement;
          if (!o || !o.layout) return !1;
          let s = (function (t, e, i) {
              let n = n1(t, i),
                { scroll: r } = e;
              return r && (n_(n.x, r.offset.x), n_(n.y, r.offset.y)), n;
            })(r, o.root, this.visualElement.getTransformPagePoint()),
            a = {
              x: nR((t = o.layout.layoutBox).x, s.x),
              y: nR(t.y, s.y),
            };
          if (n) {
            let l = n(
              (function ({ x: t, y: e }) {
                return {
                  top: e.min,
                  right: t.max,
                  bottom: e.max,
                  left: t.min,
                };
              })(a)
            );
            (this.hasMutatedConstraints = !!l), l && (a = nN(l));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {},
            l = nU((s) => {
              if (!n3(s, e, this.currentDirection)) return;
              let l = (null == a ? void 0 : a[s]) || {};
              o &&
                (l = {
                  min: 0,
                  max: 0,
                });
              let u = {
                type: "inertia",
                velocity: i ? t[s] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            });
          return Promise.all(l).then(s);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(na(t, i, 0, e));
        }
        stopAnimation() {
          nU((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          var e;
          let i = "_drag" + t.toUpperCase(),
            n = this.visualElement.getProps()[i];
          return (
            n ||
            this.visualElement.getValue(
              t,
              (null === (e = this.visualElement.getProps().initial) ||
              void 0 === e
                ? void 0
                : e[t]) || 0
            )
          );
        }
        snapToCursor(t) {
          nU((e) => {
            let { drag: i } = this.getProps();
            if (!n3(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: o, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - im(o, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: i } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!f(i) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = {
            x: 0,
            y: 0,
          };
          nU((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  n = nT(t),
                  r = nT(e);
                return (
                  r > n
                    ? (i = iE(e.min, e.max - n, t.min))
                    : n > r && (i = iE(t.min, t.max - r, e.min)),
                  z(0, 1, i)
                );
              })(
                {
                  min: i,
                  max: i,
                },
                this.constraints[t]
              );
            }
          });
          let { transformTemplate: o } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
            null === (t = n.root) || void 0 === t || t.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            nU((t) => {
              if (!n3(t, e, null)) return;
              let i = this.getAxisMotionValue(t),
                { min: n, max: o } = this.constraints[t];
              i.set(im(n, o, r[t]));
            });
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          n5.set(this.visualElement, this);
          let e = this.visualElement.current,
            i = tG(e, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            n = () => {
              let { dragConstraints: t } = this.getProps();
              f(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            o = r.addEventListener("measure", n);
          r &&
            !r.layout &&
            (null === (t = r.root) || void 0 === t || t.updateScroll(),
            r.updateLayout()),
            n();
          let s = tF(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            a = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (nU((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), i(), o(), null == a || a();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }

      function n3(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let n9 = {
        pan: es(function ({
          onPan: t,
          onPanStart: e,
          onPanEnd: i,
          onPanSessionStart: n,
          visualElement: r,
        }) {
          let o = (0, l.useRef)(null),
            { transformPagePoint: s } = (0, l.useContext)(u),
            a = {
              onSessionStart: n,
              onStart: e,
              onMove: t,
              onEnd(t, e) {
                (o.current = null), i && i(t, e);
              },
            };
          (0, l.useEffect)(() => {
            null !== o.current && o.current.updateHandlers(a);
          }),
            tZ(
              r,
              "pointerdown",
              (t || e || i || n) &&
                function (t) {
                  o.current = new nx(t, a, {
                    transformPagePoint: s,
                  });
                }
            ),
            t2(() => o.current && o.current.end());
        }),
        drag: es(function (t) {
          let { dragControls: e, visualElement: i } = t,
            n = T(() => new n2(i));
          (0, l.useEffect)(() => e && e.subscribe(n), [n, e]),
            (0, l.useEffect)(() => n.addListeners(), [n]);
        }),
      };

      function n4(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      let n6 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function n7(t, e, i = 1) {
        is(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, r] = (function (t) {
          let e = n6.exec(t);
          if (!e) return [,];
          let [, i, n] = e;
          return [i, n];
        })(t);
        if (!n) return;
        let o = window.getComputedStyle(e).getPropertyValue(n);
        return o ? o.trim() : n4(r) ? n7(r, e, i + 1) : r;
      }
      let n8 = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        rt = (t) => n8.has(t),
        re = (t) => Object.keys(t).some(rt),
        ri = (t, e) => {
          t.set(e, !1), t.set(e);
        },
        rn = (t) => t === W || t === tt;
      ((o = a || (a = {})).width = "width"),
        (o.height = "height"),
        (o.left = "left"),
        (o.right = "right"),
        (o.top = "top"),
        (o.bottom = "bottom");
      let rr = (t, e) => parseFloat(t.split(", ")[e]),
        ro =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/);
            if (r) return rr(r[1], e);
            {
              let o = n.match(/^matrix\((.+)\)$/);
              return o ? rr(o[1], t) : 0;
            }
          },
        rs = new Set(["x", "y", "z"]),
        ra = L.filter((t) => !rs.has(t)),
        rl = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: ro(4, 13),
          y: ro(5, 14),
        },
        ru = (t, e, i) => {
          let n = e.measureViewportBox(),
            r = e.current,
            o = getComputedStyle(r),
            { display: s } = o,
            a = {};
          "none" === s && e.setStaticValue("display", t.display || "block"),
            i.forEach((t) => {
              a[t] = rl[t](n, o);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            i.forEach((i) => {
              let n = e.getValue(i);
              ri(n, a[i]), (t[i] = rl[i](l, o));
            }),
            t
          );
        },
        rh = (t, e, i = {}, n = {}) => {
          (e = { ...e }), (n = { ...n });
          let r = Object.keys(e).filter(rt),
            o = [],
            s = !1,
            a = [];
          if (
            (r.forEach((r) => {
              let l = t.getValue(r);
              if (!t.hasValue(r)) return;
              let u = i[r],
                h = e3(u),
                d = e[r],
                c;
              if (tC(d)) {
                let p = d.length,
                  m = null === d[0] ? 1 : 0;
                h = e3((u = d[m]));
                for (let f = m; f < p; f++)
                  c
                    ? is(
                        e3(d[f]) === c,
                        "All keyframes must be of the same type"
                      )
                    : ((c = e3(d[f])),
                      is(
                        c === h || (rn(h) && rn(c)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else c = e3(d);
              if (h !== c) {
                if (rn(h) && rn(c)) {
                  let v = l.get();
                  "string" == typeof v && l.set(parseFloat(v)),
                    "string" == typeof d
                      ? (e[r] = parseFloat(d))
                      : Array.isArray(d) &&
                        c === tt &&
                        (e[r] = d.map(parseFloat));
                } else
                  (null == h ? void 0 : h.transform) &&
                  (null == c ? void 0 : c.transform) &&
                  (0 === u || 0 === d)
                    ? 0 === u
                      ? l.set(c.transform(u))
                      : (e[r] = h.transform(d))
                    : (s ||
                        ((o = (function (t) {
                          let e = [];
                          return (
                            ra.forEach((i) => {
                              let n = t.getValue(i);
                              void 0 !== n &&
                                (e.push([i, n.get()]),
                                n.set(i.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (s = !0)),
                      a.push(r),
                      (n[r] = void 0 !== n[r] ? n[r] : e[r]),
                      ri(l, d));
              }
            }),
            !a.length)
          )
            return {
              target: e,
              transitionEnd: n,
            };
          {
            let l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              u = ru(e, t, a);
            return (
              o.length &&
                o.forEach(([e, i]) => {
                  t.getValue(e).set(i);
                }),
              t.render(),
              c &&
                null !== l &&
                window.scrollTo({
                  top: l,
                }),
              {
                target: u,
                transitionEnd: n,
              }
            );
          }
        },
        rd = (t, e, i, n) => {
          var r, o, s, a;
          let l = (function (t, { ...e }, i) {
            let n = t.current;
            if (!(n instanceof Element))
              return {
                target: e,
                transitionEnd: i,
              };
            for (let r in (i && (i = { ...i }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!n4(e)) return;
              let i = n7(e, n);
              i && t.set(i);
            }),
            e)) {
              let o = e[r];
              if (!n4(o)) continue;
              let s = n7(o, n);
              s && ((e[r] = s), i && void 0 === i[r] && (i[r] = o));
            }
            return {
              target: e,
              transitionEnd: i,
            };
          })(t, e, n);
          return (
            (e = l.target),
            (n = l.transitionEnd),
            (o = e),
            (a = n),
            re(o)
              ? rh(t, o, i, a)
              : {
                  target: o,
                  transitionEnd: a,
                }
          );
        },
        rc = {
          current: null,
        },
        rp = {
          current: !1,
        },
        rm = Object.keys(A),
        rf = rm.length,
        rv = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "Unmount",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class rg {
        constructor(
          { parent: t, props: e, reducedMotionConfig: i, visualState: n },
          r = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.isPresent = !0),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => ew.render(this.render, !1, !0));
          let { latestValues: o, renderState: s } = n;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = s),
            (this.parent = t),
            (this.props = e),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = r),
            (this.isControllingVariants = x(e)),
            (this.isVariantNode = b(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(t && t.current));
          let { willChange: a, ...l } = this.scrapeMotionValuesFromProps(e);
          for (let u in l) {
            let h = l[u];
            void 0 !== o[u] && I(h) && (h.set(o[u], !1), it(a) && a.add(u));
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {};
        }
        mount(t) {
          var e;
          (this.current = t),
            this.projection && this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree =
                null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            rp.current ||
              (function () {
                if (((rp.current = !0), c)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rc.current = t.matches);
                    t.addListener(e), e();
                  } else rc.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rc.current)),
            this.parent && this.parent.children.add(this),
            this.setProps(this.props);
        }
        unmount() {
          var t, e, i;
          for (let n in (null === (t = this.projection) ||
            void 0 === t ||
            t.unmount(),
          eV.update(this.notifyUpdate),
          eV.render(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          null === (e = this.removeFromVariantTree) ||
            void 0 === e ||
            e.call(this),
          null === (i = this.parent) || void 0 === i || i.children.delete(this),
          this.events))
            this.events[n].clear();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = F.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && ew.update(this.notifyUpdate, !1, !0),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures(t, e, i, n, r, o) {
          let s = [];
          "production" !== t6 &&
            i &&
            e &&
            is(
              !1,
              "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
            );
          for (let a = 0; a < rf; a++) {
            let u = rm[a],
              { isEnabled: h, Component: d } = A[u];
            h(t) &&
              d &&
              s.push(
                (0, l.createElement)(d, {
                  key: u,
                  ...t,
                  visualElement: this,
                })
              );
          }
          if (!this.projection && r) {
            this.projection = new r(
              n,
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: c,
              layout: p,
              drag: m,
              dragConstraints: v,
              layoutScroll: g,
            } = t;
            this.projection.setOptions({
              layoutId: c,
              layout: p,
              alwaysMeasureLayout: Boolean(m) || (v && f(v)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof p ? p : "both",
              initialPromotionConfig: o,
              layoutScroll: g,
            });
          }
          return s;
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : nO();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        setProps(t) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.props = t);
          for (let e = 0; e < rv.length; e++) {
            let i = rv[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let o = e[r],
                s = i[r];
              if (I(o)) t.addValue(r, o), it(n) && n.add(r);
              else if (I(s))
                t.addValue(
                  r,
                  eD(o, {
                    owner: t,
                  })
                ),
                  it(n) && n.remove(r);
              else if (s !== o) {
                if (t.hasValue(r)) {
                  let a = t.getValue(r);
                  a.hasAnimated || a.set(o);
                } else {
                  let l = t.getStaticValue(r);
                  t.addValue(r, eD(void 0 !== l ? l : o));
                }
              }
            }
            for (let u in i) void 0 === e[u] && t.removeValue(u);
            return e;
          })(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          var e;
          return null === (e = this.props.variants) || void 0 === e
            ? void 0
            : e[t];
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          var t;
          return this.isVariantNode
            ? this
            : null === (t = this.parent) || void 0 === t
            ? void 0
            : t.getClosestVariantNode();
        }
        getVariantContext(t = !1) {
          var e, i;
          if (t)
            return null === (e = this.parent) || void 0 === e
              ? void 0
              : e.getVariantContext();
          if (!this.isControllingVariants) {
            let n =
              (null === (i = this.parent) || void 0 === i
                ? void 0
                : i.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (n.initial = this.props.initial),
              n
            );
          }
          let r = {};
          for (let o = 0; o < rx; o++) {
            let s = ry[o],
              a = this.props[s];
            (v(a) || !1 === a) && (r[s] = a);
          }
          return r;
        }
        addVariantChild(t) {
          var e;
          let i = this.getClosestVariantNode();
          if (i)
            return (
              null === (e = i.variantChildren) || void 0 === e || e.add(t),
              () => i.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          this.hasValue(t) && this.removeValue(t),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()),
            this.bindToMotionValue(t, e);
        }
        removeValue(t) {
          var e;
          this.values.delete(t),
            null === (e = this.valueSubscriptions.get(t)) ||
              void 0 === e ||
              e(),
            this.valueSubscriptions.delete(t),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = eD(e, {
                owner: this,
              })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current
            ? this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: i } = this.props,
            n =
              "string" == typeof i || "object" == typeof i
                ? null === (e = tS(this.props, i)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || I(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new eM()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          var i;
          null === (i = this.events[t]) || void 0 === i || i.notify(...e);
        }
      }
      let ry = ["initial", ...nc],
        rx = ry.length;
      class rb extends rg {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          var i;
          return null === (i = t.style) || void 0 === i ? void 0 : i[e];
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...i },
          { transformValues: n },
          r
        ) {
          let o = (function (t, e, i) {
            var n;
            let r = {};
            for (let o in t) {
              let s = e8(o, e);
              r[o] =
                void 0 !== s
                  ? s
                  : null === (n = i.getValue(o)) || void 0 === n
                  ? void 0
                  : n.get();
            }
            return r;
          })(i, t || {}, this);
          if ((n && (e && (e = n(e)), i && (i = n(i)), o && (o = n(o))), r)) {
            !(function (t, e, i) {
              var n, r;
              let o = Object.keys(e).filter((e) => !t.hasValue(e)),
                s = o.length;
              if (s)
                for (let a = 0; a < s; a++) {
                  let l = o[a],
                    u = e[l],
                    h = null;
                  Array.isArray(u) && (h = u[0]),
                    null === h &&
                      (h =
                        null !==
                          (r =
                            null !== (n = i[l]) && void 0 !== n
                              ? n
                              : t.readValue(l)) && void 0 !== r
                          ? r
                          : e[l]),
                    null != h &&
                      ("string" == typeof h && (eh(h) || ed(h))
                        ? (h = parseFloat(h))
                        : !e4(h) && eG.test(u) && (h = e1(l, u)),
                      t.addValue(
                        l,
                        eD(h, {
                          owner: t,
                        })
                      ),
                      void 0 === i[l] && (i[l] = h),
                      null !== h && t.setBaseTarget(l, h));
                }
            })(this, i, o);
            let s = rd(this, i, o, e);
            (e = s.transitionEnd), (i = s.target);
          }
          return {
            transition: t,
            transitionEnd: e,
            ...i,
          };
        }
      }
      class rw extends rb {
        readValueFromInstance(t, e) {
          if (F.has(e)) {
            let i = e0(e);
            return (i && i.default) || 0;
          }
          {
            var n;
            let r = window.getComputedStyle(t),
              o = (N(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof o ? o.trim() : o;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return n1(t, e);
        }
        build(t, e, i, n) {
          ts(t, e, i, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t) {
          return tP(t);
        }
        renderInstance(t, e, i, n) {
          tV(t, e, i, n);
        }
      }
      class rV extends rb {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          var i;
          return F.has(e)
            ? (null === (i = e0(e)) || void 0 === i ? void 0 : i.default) || 0
            : ((e = tA.has(e) ? e : tw(e)), t.getAttribute(e));
        }
        measureInstanceViewportBox() {
          return nO();
        }
        scrapeMotionValuesFromProps(t) {
          return tE(t);
        }
        build(t, e, i, n) {
          tg(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          tT(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = tx(t.tagName)), super.mount(t);
        }
      }
      let rA = (t, e) =>
        R(t)
          ? new rV(e, {
              enableHardwareAcceleration: !1,
            })
          : new rw(e, {
              enableHardwareAcceleration: !0,
            });

      function rT(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let rP = {
          correct(t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!tt.test(t)) return t;
              t = parseFloat(t);
            }
            let i = rT(t, e.target.x),
              n = rT(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        rE = "_$css";
      class rS extends l.Component {
        componentDidMount() {
          var t;
          let {
              visualElement: e,
              layoutGroup: i,
              switchLayoutGroup: n,
              layoutId: r,
            } = this.props,
            { projection: o } = e;
          Object.assign(D, rC),
            o &&
              (i.group && i.group.add(o),
              n && n.register && r && n.register(o),
              o.root.didUpdate(),
              o.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              o.setOptions({
                ...o.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (P.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            o = i.projection;
          return (
            o &&
              ((o.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? o.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? o.promote()
                  : o.relegate() ||
                    ew.postRender(() => {
                      var t;
                      (null === (t = o.getStack()) || void 0 === t
                        ? void 0
                        : t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            !t.currentAnimation && t.isLead() && this.safeToRemove());
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            (null == e ? void 0 : e.group) && e.group.remove(n),
            (null == i ? void 0 : i.deregister) && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          null == t || t();
        }
        render() {
          return null;
        }
      }
      let rC = {
          borderRadius: {
            ...rP,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: rP,
          borderTopRightRadius: rP,
          borderBottomLeftRadius: rP,
          borderBottomRightRadius: rP,
          boxShadow: {
            correct(t, { treeScale: e, projectionDelta: i }) {
              let n = t,
                r = t.includes("var("),
                o = [];
              r && (t = t.replace(n6, (t) => (o.push(t), rE)));
              let s = eG.parse(t);
              if (s.length > 5) return n;
              let a = eG.createTransformer(t),
                l = "number" != typeof s[0] ? 1 : 0,
                u = i.x.scale * e.x,
                h = i.y.scale * e.y;
              (s[0 + l] /= u), (s[1 + l] /= h);
              let d = im(u, h, 0.5);
              "number" == typeof s[2 + l] && (s[2 + l] /= d),
                "number" == typeof s[3 + l] && (s[3 + l] /= d);
              let c = a(s);
              if (r) {
                let p = 0;
                c = c.replace(rE, () => {
                  let t = o[p];
                  return p++, t;
                });
              }
              return c;
            },
          },
        },
        rM = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rk = rM.length,
        rB = (t) => ("string" == typeof t ? parseFloat(t) : t),
        rR = (t) => "number" == typeof t || tt.test(t);

      function rD(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rL = rj(0, 0.5, iD),
        rF = rj(0.5, 0.95, iM);

      function rj(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(iE(t, e, n)));
      }

      function rI(t, e) {
        (t.min = e.min), (t.max = e.max);
      }

      function rO(t, e) {
        rI(t.x, e.x), rI(t.y, e.y);
      }

      function rU(t, e, i, n, r) {
        var o, s, a, l, u, h;
        return (
          (t -= e),
          (o = t),
          (t = n + (s = 1 / i) * (o - n)),
          void 0 !== r && ((l = t), (u = 1 / r), (t = (h = n) + u * (l - h))),
          t
        );
      }

      function rN(t, e, [i, n, r], o, s) {
        !(function (t, e = 0, i = 1, n = 0.5, r, o = t, s = t) {
          if (Q.test(e)) {
            e = parseFloat(e);
            let a = im(s.min, s.max, e / 100);
            e = a - s.min;
          }
          if ("number" != typeof e) return;
          let l = im(o.min, o.max, n);
          t === o && (l -= e),
            (t.min = rU(t.min, e, i, l, r)),
            (t.max = rU(t.max, e, i, l, r));
        })(t, e[i], e[n], e[r], e.scale, o, s);
      }
      let r$ = ["x", "scaleX", "originX"],
        rz = ["y", "scaleY", "originY"];

      function rW(t, e, i, n) {
        rN(t.x, e, r$, null == i ? void 0 : i.x, null == n ? void 0 : n.x),
          rN(t.y, e, rz, null == i ? void 0 : i.y, null == n ? void 0 : n.y);
      }

      function rH(t) {
        return 0 === t.translate && 1 === t.scale;
      }

      function rY(t) {
        return rH(t.x) && rH(t.y);
      }

      function rX(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }

      function rq(t) {
        return nT(t.x) / nT(t.y);
      }
      class rG {
        constructor() {
          this.members = [];
        }
        add(t) {
          eS(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (eC(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(t) {
          let e = this.members.findIndex((e) => t === e);
          if (0 === e) return !1;
          let i;
          for (let n = e; n >= 0; n--) {
            let r = this.members[n];
            if (!1 !== r.isPresent) {
              i = r;
              break;
            }
          }
          return !!i && (this.promote(i), !0);
        }
        promote(t, e) {
          var i;
          let n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            n.instance && n.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = n),
              e && (t.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((t.snapshot = n.snapshot),
                (t.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              (null === (i = t.root) || void 0 === i ? void 0 : i.isUpdating) &&
                (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            var e, i, n, r, o;
            null === (i = (e = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(e),
              null ===
                (o =
                  null === (n = t.resumingFrom) || void 0 === n
                    ? void 0
                    : (r = n.options).onExitComplete) ||
                void 0 === o ||
                o.call(r);
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }

      function rZ(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          o = t.y.translate / e.y;
        if (
          ((r || o) && (n = `translate3d(${r}px, ${o}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: s, rotateX: a, rotateY: l } = i;
          s && (n += `rotate(${s}deg) `),
            a && (n += `rotateX(${a}deg) `),
            l && (n += `rotateY(${l}deg) `);
        }
        let u = t.x.scale * e.x,
          h = t.y.scale * e.y;
        return (1 !== u || 1 !== h) && (n += `scale(${u}, ${h})`), n || "none";
      }
      let r_ = (t, e) => t.depth - e.depth;
      class rK {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          eS(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          eC(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(r_),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let rJ = ["", "X", "Y", "Z"],
        rQ = 0;

      function r0({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t, i = {}, n = null == e ? void 0 : e()) {
            (this.id = rQ++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isTransformDirty = !1),
              (this.isProjectionDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = {
                x: 1,
                y: 1,
              }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                this.nodes.forEach(r2),
                  this.nodes.forEach(r7),
                  this.nodes.forEach(r8);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.elementId = t),
              (this.latestValues = i),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (let r = 0; r < this.path.length; r++)
              this.path[r].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rK());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new eM()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            null == i || i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e);
          }
          mount(e, i = !1) {
            var n;
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: o, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              null === (n = this.parent) ||
                void 0 === n ||
                n.children.add(this),
              this.elementId && this.root.potentialNodes.delete(this.elementId),
              i && (o || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let a,
                l = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  a && a(),
                  (a = i1(l, 250)),
                  P.hasAnimatedSinceResize &&
                    ((P.hasAnimatedSinceResize = !1), this.nodes.forEach(r6));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || o) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    var r, o, a, l, u;
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let h =
                        null !==
                          (o =
                            null !== (r = this.options.transition) &&
                            void 0 !== r
                              ? r
                              : s.getDefaultTransition()) && void 0 !== o
                          ? o
                          : oo,
                      {
                        onLayoutAnimationStart: d,
                        onLayoutAnimationComplete: c,
                      } = s.getProps(),
                      p = !this.targetLayout || !rX(this.targetLayout, n) || i,
                      m = !e && i;
                    if (
                      (null === (a = this.resumeFrom) || void 0 === a
                        ? void 0
                        : a.instance) ||
                      m ||
                      (e && (p || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, m);
                      let f = { ...ne(h, "layout"), onPlay: d, onComplete: c };
                      s.shouldReduceMotion && ((f.delay = 0), (f.type = !1)),
                        this.startAnimation(f);
                    } else
                      e || 0 !== this.animationProgress || r6(this),
                        this.isLead() &&
                          (null === (u = (l = this.options).onExitComplete) ||
                            void 0 === u ||
                            u.call(l));
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this),
              null === (t = this.getStack()) || void 0 === t || t.remove(this),
              null === (e = this.parent) ||
                void 0 === e ||
                e.children.delete(this),
              (this.instance = void 0),
              eV.preRender(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            var t;
            return (
              this.isAnimationBlocked ||
              (null === (t = this.parent) || void 0 === t
                ? void 0
                : t.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            var t;
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              null === (t = this.nodes) || void 0 === t || t.forEach(ot),
              this.animationId++);
          }
          willUpdate(t = !0) {
            var e, i, n;
            if (this.root.isUpdateBlocked()) {
              null === (i = (e = this.options).onExitComplete) ||
                void 0 === i ||
                i.call(e);
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let r = 0; r < this.path.length; r++) {
              let o = this.path[r];
              (o.shouldResetTransform = !0), o.updateScroll("snapshot");
            }
            let { layoutId: s, layout: a } = this.options;
            if (void 0 === s && !a) return;
            let l =
              null === (n = this.options.visualElement) || void 0 === n
                ? void 0
                : n.getProps().transformTemplate;
            (this.prevTransformTemplateValue =
              null == l ? void 0 : l(this.latestValues, "")),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          didUpdate() {
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(r9);
              return;
            }
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.potentialNodes.size &&
                (this.potentialNodes.forEach(os), this.potentialNodes.clear()),
              this.nodes.forEach(r4),
              this.nodes.forEach(r1),
              this.nodes.forEach(r5),
              this.clearAllSnapshots(),
              eA.update(),
              eA.preRender(),
              eA.render());
          }
          clearAllSnapshots() {
            this.nodes.forEach(r3), this.sharedNodes.forEach(oe);
          }
          scheduleUpdateProjection() {
            ew.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            ew.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            var t;
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) {
                let i = this.path[e];
                i.updateScroll();
              }
            let n = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = nO()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox),
              null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.notify(
                  "LayoutMeasure",
                  this.layout.layoutBox,
                  null == n ? void 0 : n.layoutBox
                );
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            var t;
            if (!r) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              i = this.projectionDelta && !rY(this.projectionDelta),
              n =
                null === (t = this.options.visualElement) || void 0 === t
                  ? void 0
                  : t.getProps().transformTemplate,
              o = null == n ? void 0 : n(this.latestValues, ""),
              s = o !== this.prevTransformTemplateValue;
            e &&
              (i || nW(this.latestValues) || s) &&
              (r(this.instance, o),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              oa((e = n).x),
              oa(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return nO();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (n_(e.x, i.offset.x), n_(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = nO();
            rO(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: o } = n;
              if (n !== this.root && r && o.layoutScroll) {
                if (r.isRoot) {
                  rO(e, t);
                  let { scroll: s } = this.root;
                  s && (n_(e.x, -s.offset.x), n_(e.y, -s.offset.y));
                }
                n_(e.x, r.offset.x), n_(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = nO();
            rO(i, t);
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                n0(i, {
                  x: -r.scroll.offset.x,
                  y: -r.scroll.offset.y,
                }),
                nW(r.latestValues) && n0(i, r.latestValues);
            }
            return nW(this.latestValues) && n0(i, this.latestValues), i;
          }
          removeTransform(t) {
            var e;
            let i = nO();
            rO(i, t);
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n];
              if (!r.instance || !nW(r.latestValues)) continue;
              nz(r.latestValues) && r.updateSnapshot();
              let o = nO(),
                s = r.measurePageBox();
              rO(o, s),
                rW(
                  i,
                  r.latestValues,
                  null === (e = r.snapshot) || void 0 === e
                    ? void 0
                    : e.layoutBox,
                  o
                );
            }
            return nW(this.latestValues) && rW(i, this.latestValues), i;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              (this.isProjectionDirty = !0),
              this.root.scheduleUpdateProjection();
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          resolveTargetDelta() {
            var t, e, i, n;
            let r = this.getLead();
            if (
              (this.isProjectionDirty ||
                (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
            )
              return;
            let { layout: o, layoutId: s } = this.options;
            if (this.layout && (o || s)) {
              if (!this.targetDelta && !this.relativeTarget) {
                let a = this.getClosestProjectingParent();
                a && a.layout
                  ? ((this.relativeParent = a),
                    (this.relativeTarget = nO()),
                    (this.relativeTargetOrigin = nO()),
                    nk(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      a.layout.layoutBox
                    ),
                    rO(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (
                (this.relativeTarget || this.targetDelta) &&
                ((this.target ||
                  ((this.target = nO()), (this.targetWithTransforms = nO())),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target))
                  ? ((e = this.target),
                    (i = this.relativeTarget),
                    (n = this.relativeParent.target),
                    nC(e.x, i.x, n.x),
                    nC(e.y, i.y, n.y))
                  : this.targetDelta
                  ? (Boolean(this.resumingFrom)
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox
                        ))
                      : rO(this.target, this.layout.layoutBox),
                    nG(this.target, this.targetDelta))
                  : rO(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)
              ) {
                this.attemptToResolveRelativeTarget = !1;
                let l = this.getClosestProjectingParent();
                l &&
                Boolean(l.resumingFrom) === Boolean(this.resumingFrom) &&
                !l.options.layoutScroll &&
                l.target
                  ? ((this.relativeParent = l),
                    (this.relativeTarget = nO()),
                    (this.relativeTargetOrigin = nO()),
                    nk(this.relativeTargetOrigin, this.target, l.target),
                    rO(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                nz(this.parent.latestValues) ||
                nH(this.parent.latestValues)
              )
            )
              return (this.parent.relativeTarget || this.parent.targetDelta) &&
                this.parent.layout
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          calcProjection() {
            var t;
            let { isProjectionDirty: e, isTransformDirty: i } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            let n = this.getLead(),
              r = Boolean(this.resumingFrom) || this !== n,
              o = !0;
            if ((e && (o = !1), r && i && (o = !1), o)) return;
            let { layout: s, layoutId: a } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(s || a))
            )
              return;
            rO(this.layoutCorrected, this.layout.layoutBox),
              (function (t, e, i, n = !1) {
                var r, o;
                let s = i.length;
                if (!s) return;
                e.x = e.y = 1;
                let a, l;
                for (let u = 0; u < s; u++)
                  (l = (a = i[u]).projectionDelta),
                    (null ===
                      (o =
                        null === (r = a.instance) || void 0 === r
                          ? void 0
                          : r.style) || void 0 === o
                      ? void 0
                      : o.display) !== "contents" &&
                      (n &&
                        a.options.layoutScroll &&
                        a.scroll &&
                        a !== a.root &&
                        n0(t, {
                          x: -a.scroll.offset.x,
                          y: -a.scroll.offset.y,
                        }),
                      l && ((e.x *= l.x.scale), (e.y *= l.y.scale), nG(t, l)),
                      n && nW(a.latestValues) && n0(t, a.latestValues));
                (e.x = nZ(e.x)), (e.y = nZ(e.y));
              })(this.layoutCorrected, this.treeScale, this.path, r);
            let { target: l } = n;
            if (!l) return;
            this.projectionDelta ||
              ((this.projectionDelta = nj()),
              (this.projectionDeltaWithTransform = nj()));
            let u = this.treeScale.x,
              h = this.treeScale.y,
              d = this.projectionTransform;
            nS(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = rZ(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== d ||
                this.treeScale.x !== u ||
                this.treeScale.y !== h) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l));
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e, i, n;
            null === (i = (e = this.options).scheduleRender) ||
              void 0 === i ||
              i.call(e),
              t &&
                (null === (n = this.getStack()) ||
                  void 0 === n ||
                  n.scheduleRender()),
              this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            var i, n;
            let r = this.snapshot,
              o = (null == r ? void 0 : r.latestValues) || {},
              s = { ...this.latestValues },
              a = nj();
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let l = nO(),
              u =
                (null == r ? void 0 : r.source) !==
                (null === (i = this.layout) || void 0 === i
                  ? void 0
                  : i.source),
              h =
                1 >=
                ((null === (n = this.getStack()) || void 0 === n
                  ? void 0
                  : n.members.length) || 0),
              d = Boolean(
                u && !h && !0 === this.options.crossfade && !this.path.some(or)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                var i, n, r, c, p;
                let m = e / 1e3;
                oi(a.x, t.x, m),
                  oi(a.y, t.y, m),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    (null === (i = this.relativeParent) || void 0 === i
                      ? void 0
                      : i.layout) &&
                    (nk(
                      l,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (n = this.relativeTarget),
                    (r = this.relativeTargetOrigin),
                    (c = l),
                    (p = m),
                    on(n.x, r.x, c.x, p),
                    on(n.y, r.y, c.y, p)),
                  u &&
                    ((this.animationValues = s),
                    (function (t, e, i, n, r, o) {
                      r
                        ? ((t.opacity = im(
                            0,
                            void 0 !== i.opacity ? i.opacity : 1,
                            rL(n)
                          )),
                          (t.opacityExit = im(
                            void 0 !== e.opacity ? e.opacity : 1,
                            0,
                            rF(n)
                          )))
                        : o &&
                          (t.opacity = im(
                            void 0 !== e.opacity ? e.opacity : 1,
                            void 0 !== i.opacity ? i.opacity : 1,
                            n
                          ));
                      for (let s = 0; s < rk; s++) {
                        let a = `border${rM[s]}Radius`,
                          l = rD(e, a),
                          u = rD(i, a);
                        if (void 0 === l && void 0 === u) continue;
                        l || (l = 0), u || (u = 0);
                        let h = 0 === l || 0 === u || rR(l) === rR(u);
                        h
                          ? ((t[a] = Math.max(im(rB(l), rB(u), n), 0)),
                            (Q.test(u) || Q.test(l)) && (t[a] += "%"))
                          : (t[a] = u);
                      }
                      (e.rotate || i.rotate) &&
                        (t.rotate = im(e.rotate || 0, i.rotate || 0, n));
                    })(s, o, this.latestValues, m, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = m);
              }),
              this.mixTargetDelta(0);
          }
          startAnimation(t) {
            var e, i;
            this.notifyListeners("animationStart"),
              null === (e = this.currentAnimation) || void 0 === e || e.stop(),
              this.resumingFrom &&
                (null === (i = this.resumingFrom.currentAnimation) ||
                  void 0 === i ||
                  i.stop()),
              this.pendingAnimation &&
                (eV.update(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = ew.update(() => {
                (P.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i = {}) {
                    let n = I(t) ? t : eD(t);
                    return (
                      n.start(na("", n, 1e3, i)),
                      {
                        stop: () => n.stop(),
                        isAnimating: () => n.isAnimating(),
                      }
                    );
                  })(0, 1e3, {
                    ...t,
                    onUpdate: (e) => {
                      var i;
                      this.mixTargetDelta(e),
                        null === (i = t.onUpdate) ||
                          void 0 === i ||
                          i.call(t, e);
                    },
                    onComplete: () => {
                      var e;
                      null === (e = t.onComplete) || void 0 === e || e.call(t),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            var t;
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0)),
              null === (t = this.getStack()) ||
                void 0 === t ||
                t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            var t;
            this.currentAnimation &&
              (null === (t = this.mixTargetDelta) ||
                void 0 === t ||
                t.call(this, 1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                ol(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || nO();
                let o = nT(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + o);
                let s = nT(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              rO(e, i),
                n0(e, r),
                nS(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            var i, n, r;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rG());
            let o = this.sharedNodes.get(t);
            o.add(e),
              e.promote({
                transition:
                  null === (i = e.options.initialPromotionConfig) ||
                  void 0 === i
                    ? void 0
                    : i.transition,
                preserveFollowOpacity:
                  null ===
                    (r =
                      null === (n = e.options.initialPromotionConfig) ||
                      void 0 === n
                        ? void 0
                        : n.shouldPreserveFollowOpacity) || void 0 === r
                    ? void 0
                    : r.call(n, e),
              });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e &&
                this.setOptions({
                  transition: e,
                });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let n = {};
            for (let r = 0; r < rJ.length; r++) {
              let o = "rotate" + rJ[r];
              i[o] && ((n[o] = i[o]), t.setStaticValue(o, 0));
            }
            for (let s in (null == t || t.render(), n))
              t.setStaticValue(s, n[s]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, i, n;
            let r = {};
            if (!this.instance || this.isSVG) return r;
            if (!this.isVisible)
              return {
                visibility: "hidden",
              };
            r.visibility = "";
            let o =
              null === (e = this.options.visualElement) || void 0 === e
                ? void 0
                : e.getProps().transformTemplate;
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents = tB(t.pointerEvents) || ""),
                (r.transform = o ? o(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let a = {};
              return (
                this.options.layoutId &&
                  ((a.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (a.pointerEvents = tB(t.pointerEvents) || "")),
                this.hasProjected &&
                  !nW(this.latestValues) &&
                  ((a.transform = o ? o({}, "") : "none"),
                  (this.hasProjected = !1)),
                a
              );
            }
            let l = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = rZ(
                this.projectionDeltaWithTransform,
                this.treeScale,
                l
              )),
              o && (r.transform = o(l, r.transform));
            let { x: u, y: h } = this.projectionDelta;
            for (let d in ((r.transformOrigin = `${100 * u.origin}% ${
              100 * h.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (n =
                          null !== (i = l.opacity) && void 0 !== i
                            ? i
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : l.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== l.opacity
                      ? l.opacity
                      : ""
                    : void 0 !== l.opacityExit
                    ? l.opacityExit
                    : 0),
            D)) {
              if (void 0 === l[d]) continue;
              let { correct: c, applyTo: p } = D[d],
                m = c(l[d], s);
              if (p) {
                let f = p.length;
                for (let v = 0; v < f; v++) r[p[v]] = m;
              } else r[d] = m;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this ? tB(t.pointerEvents) || "" : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(r9),
              this.root.sharedNodes.clear();
          }
        };
      }

      function r1(t) {
        t.updateLayout();
      }

      function r5(t) {
        var e, i, n;
        let r =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          let { layoutBox: o, measuredBox: s } = t.layout,
            { animationType: a } = t.options,
            l = r.source !== t.layout.source;
          "size" === a
            ? nU((t) => {
                let e = l ? r.measuredBox[t] : r.layoutBox[t],
                  i = nT(e);
                (e.min = o[t].min), (e.max = e.min + i);
              })
            : ol(a, r.layoutBox, o) &&
              nU((t) => {
                let e = l ? r.measuredBox[t] : r.layoutBox[t],
                  i = nT(o[t]);
                e.max = e.min + i;
              });
          let u = nj();
          nS(u, o, r.layoutBox);
          let h = nj();
          l
            ? nS(h, t.applyTransform(s, !0), r.measuredBox)
            : nS(h, o, r.layoutBox);
          let d = !rY(u),
            c = !1;
          if (!t.resumeFrom) {
            let p = t.getClosestProjectingParent();
            if (p && !p.resumeFrom) {
              let { snapshot: m, layout: f } = p;
              if (m && f) {
                let v = nO();
                nk(v, r.layoutBox, m.layoutBox);
                let g = nO();
                nk(g, o, f.layoutBox), rX(v, g) || (c = !0);
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: o,
            snapshot: r,
            delta: h,
            layoutDelta: u,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: c,
          });
        } else
          t.isLead() &&
            (null === (n = (i = t.options).onExitComplete) ||
              void 0 === n ||
              n.call(i));
        t.options.transition = void 0;
      }

      function r2(t) {
        t.isProjectionDirty ||
          (t.isProjectionDirty = Boolean(
            t.parent && t.parent.isProjectionDirty
          )),
          t.isTransformDirty ||
            (t.isTransformDirty = Boolean(
              t.parent && t.parent.isTransformDirty
            ));
      }

      function r3(t) {
        t.clearSnapshot();
      }

      function r9(t) {
        t.clearMeasurements();
      }

      function r4(t) {
        let { visualElement: e } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }

      function r6(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }

      function r7(t) {
        t.resolveTargetDelta();
      }

      function r8(t) {
        t.calcProjection();
      }

      function ot(t) {
        t.resetRotation();
      }

      function oe(t) {
        t.removeLeadSnapshot();
      }

      function oi(t, e, i) {
        (t.translate = im(e.translate, 0, i)),
          (t.scale = im(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }

      function on(t, e, i, n) {
        (t.min = im(e.min, i.min, n)), (t.max = im(e.max, i.max, n));
      }

      function or(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let oo = {
        duration: 0.45,
        ease: [0.4, 0, 0.1, 1],
      };

      function os(t, e) {
        let i = t.root;
        for (let n = t.path.length - 1; n >= 0; n--)
          if (Boolean(t.path[n].instance)) {
            i = t.path[n];
            break;
          }
        let r = i && i !== t.root ? i.instance : document,
          o = r.querySelector(`[data-projection-id="${e}"]`);
        o && t.mount(o, !0);
      }

      function oa(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }

      function ol(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !nP(rq(e), rq(i), 0.2))
        );
      }
      let ou = r0({
          attachResizeListener: (t, e) => tF(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        oh = {
          current: void 0,
        },
        od = r0({
          measureScroll: (t) => ({
            x: t.scrollLeft,
            y: t.scrollTop,
          }),
          defaultParent() {
            if (!oh.current) {
              let t = new ou(0, {});
              t.mount(window),
                t.setOptions({
                  layoutScroll: !0,
                }),
                (oh.current = t);
            }
            return oh.current;
          },
          resetTransform(t, e) {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            Boolean("fixed" === window.getComputedStyle(t).position),
        }),
        oc = {
          ...ng,
          ...ea,
          ...n9,
          measureLayout: function (t) {
            let [e, i] = el(),
              n = (0, l.useContext)(S);
            return l.createElement(rS, {
              ...t,
              layoutGroup: n,
              switchLayoutGroup: (0, l.useContext)(M),
              isPresent: e,
              safeToRemove: i,
            });
          },
        },
        op = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              projectionNodeConstructor: i,
              useRender: n,
              useVisualState: r,
              Component: o,
            }) {
              t &&
                (function (t) {
                  for (let e in t)
                    "projectionNodeConstructor" === e
                      ? (A.projectionNodeConstructor = t[e])
                      : (A[e].Component = t[e]);
                })(t);
              let s = (0, l.forwardRef)(function (s, a) {
                var g, y, b;
                let V = {
                    ...(0, l.useContext)(u),
                    ...s,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, l.useContext)(S).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(s),
                  },
                  { isStatic: k } = V,
                  B = null,
                  R = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (x(t)) {
                        let { initial: i, animate: n } = t;
                        return {
                          initial: !1 === i || v(i) ? i : void 0,
                          animate: v(n) ? n : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, l.useContext)(h));
                    return (0, l.useMemo)(
                      () => ({
                        initial: e,
                        animate: i,
                      }),
                      [w(e), w(i)]
                    );
                  })(s),
                  D = k
                    ? void 0
                    : T(() => {
                        if (P.hasEverUpdated) return E++;
                      }),
                  L = r(s, k);
                if (!k && c) {
                  R.visualElement = (function (t, e, i, n) {
                    let r = (0, l.useContext)(h).visualElement,
                      o = (0, l.useContext)(m),
                      s = (0, l.useContext)(d),
                      a = (0, l.useContext)(u).reducedMotion,
                      c = (0, l.useRef)();
                    (n = n || o.renderer),
                      !c.current &&
                        n &&
                        (c.current = n(t, {
                          visualState: e,
                          parent: r,
                          props: i,
                          presenceId: s ? s.id : void 0,
                          blockInitialAnimation: !!s && !1 === s.initial,
                          reducedMotionConfig: a,
                        }));
                    let f = c.current;
                    return (
                      p(() => {
                        f && f.render();
                      }),
                      p(() => {
                        f &&
                          f.animationState &&
                          f.animationState.animateChanges();
                      }),
                      p(() => () => f && f.notify("Unmount"), []),
                      f
                    );
                  })(o, L, V, e);
                  let F = (0, l.useContext)(m).strict,
                    j = (0, l.useContext)(M);
                  R.visualElement &&
                    (B = R.visualElement.loadFeatures(
                      V,
                      F,
                      t,
                      D,
                      i || A.projectionNodeConstructor,
                      j
                    ));
                }
                return l.createElement(
                  C,
                  {
                    visualElement: R.visualElement,
                    props: V,
                  },
                  B,
                  l.createElement(
                    h.Provider,
                    {
                      value: R,
                    },
                    n(
                      o,
                      s,
                      D,
                      ((y = R.visualElement),
                      (b = a),
                      (0, l.useCallback)(
                        (t) => {
                          t && L.mount && L.mount(t),
                            y && (t ? y.mount(t) : y.unmount()),
                            b &&
                              ("function" == typeof b
                                ? b(t)
                                : f(b) && (b.current = t));
                        },
                        [y]
                      )),
                      L,
                      k,
                      R.visualElement
                    )
                  )
                );
              });
              return (s[k] = o), s;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n, r) {
            let o = R(t) ? tD : tL;
            return {
              ...o,
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                let e = (e, i, n, r, { latestValues: o }, s) => {
                  let a = R(e) ? tb : tu,
                    u = a(i, o, s, e),
                    h = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        (tc(r) ||
                          (!0 === i && td(r)) ||
                          (!e && !td(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    d = { ...h, ...u, ref: r };
                  return (
                    n && (d["data-projection-id"] = n),
                    (0, l.createElement)(e, d)
                  );
                };
                return e;
              })(e),
              createVisualElement: n,
              projectionNodeConstructor: r,
              Component: t,
            };
          })(t, e, oc, rA, od)
        );
    },
  },
]);
