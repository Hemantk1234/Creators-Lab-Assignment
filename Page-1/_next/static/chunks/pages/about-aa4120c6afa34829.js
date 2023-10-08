(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    6794: function (e, n, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return o(2805);
        },
      ]);
    },
    3753: function (e, n, o) {
      "use strict";
      o.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = o(5893),
        s = o(7294),
        t = o(9637),
        a = o.n(t);

      function r(e) {
        var n = e.style,
          o = e.items,
          t = e.children,
          r = e.interval,
          _ = e.className,
          l = e.afterEffect,
          d = (0, s.useState)(0),
          c = d[0],
          u = d[1];
        return (
          (0, s.useEffect)(
            function () {
              var e = setTimeout(function () {
                u(c < o.length - 1 ? c + 1 : 0);
              }, r);
              return function () {
                clearTimeout(e);
              };
            },
            [r, o.length, c]
          ),
          (0, s.useEffect)(
            function () {
              l && l(c);
            },
            [o, c]
          ),
          (0, i.jsxs)("section", {
            className: _,
            style: n,
            children: [
              t(o, c),
              (0, i.jsx)("ul", {
                className: a().indicator,
                children: o.map(function (e, n) {
                  return (0, i.jsx)(
                    "li",
                    {
                      className: c === n ? a().active : "",
                      onClick: function () {
                        return u(n);
                      },
                    },
                    n
                  );
                }),
              }),
            ],
          })
        );
      }
    },
    2805: function (e, n, o) {
      "use strict";
      o.r(n),
        o.d(n, {
          __N_SSG: function () {
            return y;
          },
          default: function () {
            return N;
          },
        });
      var i = o(5893),
        s = o(7294),
        t = o(1397),
        a = o.n(t);

      function r(e) {
        var e =
            null !== e
              ? e
              : (function (e) {
                  throw e;
                })(TypeError("Cannot destructure undefined")),
          n = (0, s.useRef)(null);
        return (0, i.jsxs)("fieldset", {
          className: a().root,
          onClick: function () {
            var e;
            return null === (e = n.current) || void 0 === e ? void 0 : e.play();
          },
          children: [
            (0, i.jsx)("audio", {
              ref: n,
              src: "/audio/codigo.mp3",
            }),
            (0, i.jsx)("svg", {
              width: 15,
              viewBox: "0 0 15 21",
              children: (0, i.jsx)("path", {
                d: "M10.7 20.881C12.0654 19.5174 13.1485 17.8981 13.8876 16.1155C14.6266 14.333 15.007 12.4222 15.007 10.4925C15.007 8.56285 14.6266 6.65208 13.8876 4.86954C13.1485 3.08699 12.0654 1.46763 10.7 0.104034C10.6648 0.0670901 10.6225 0.0375666 10.5757 0.0171805C10.5289 -0.00320552 10.4786 -0.0140451 10.4275 -0.0146798C10.3765 -0.0153145 10.3258 -0.00575875 10.2786 0.0134574C10.2313 0.0326735 10.1883 0.0611414 10.1522 0.0971976C10.1161 0.133254 10.0875 0.176171 10.0682 0.223418C10.0489 0.270665 10.0392 0.321309 10.0398 0.372344C10.0403 0.42338 10.051 0.473771 10.0713 0.520599C10.0916 0.567426 10.1211 0.609766 10.158 0.645049C11.4528 1.93783 12.4801 3.47319 13.181 5.16336C13.8818 6.85352 14.2425 8.6653 14.2425 10.495C14.2425 12.3247 13.8818 14.1365 13.181 15.8267C12.4801 17.5169 11.4528 19.0522 10.158 20.345C10.1168 20.3791 10.0832 20.4216 10.0594 20.4695C10.0356 20.5173 10.0222 20.5697 10.0198 20.6231C10.0175 20.6765 10.0264 20.7298 10.0459 20.7796C10.0654 20.8294 10.0951 20.8746 10.1332 20.9122C10.1712 20.9498 10.2166 20.979 10.2667 20.998C10.3167 21.0169 10.3701 21.0252 10.4235 21.0223C10.4768 21.0194 10.5291 21.0053 10.5767 20.9809C10.6243 20.9566 10.6663 20.9226 10.7 20.881V20.881ZM8.44701 2.35202C8.39331 2.29853 8.32495 2.26213 8.2506 2.24741C8.17625 2.23268 8.0992 2.24028 8.02916 2.26926C7.95913 2.29823 7.89925 2.34729 7.85704 2.41025C7.81484 2.4732 7.79219 2.54722 7.79198 2.62302C7.79204 2.7243 7.83233 2.82144 7.90398 2.89303C8.90298 3.89054 9.69552 5.07522 10.2363 6.3793C10.777 7.68338 11.0553 9.08126 11.0553 10.493C11.0553 11.9048 10.777 13.3027 10.2363 14.6068C9.69552 15.9109 8.90298 17.0955 7.90398 18.093C7.86718 18.1284 7.83782 18.1708 7.81762 18.2176C7.79741 18.2645 7.78675 18.3149 7.7863 18.3659C7.78586 18.417 7.79566 18.4675 7.81505 18.5147C7.83444 18.5619 7.86303 18.6049 7.89922 18.6408C7.93541 18.6768 7.97843 18.7052 8.02575 18.7243C8.07306 18.7435 8.1237 18.753 8.17473 18.7522C8.22576 18.7515 8.27618 18.7406 8.32293 18.7201C8.36968 18.6997 8.41186 18.67 8.44701 18.633C9.51647 17.5641 10.3647 16.2948 10.9433 14.8979C11.522 13.5009 11.8195 12.0036 11.8191 10.4915C11.8186 8.97942 11.5201 7.48229 10.9406 6.08566C10.3611 4.68903 9.51212 3.42029 8.44201 2.35202H8.44701ZM8.635 10.492C8.63838 9.39731 8.42426 8.31283 8.00505 7.30154C7.58584 6.29026 6.96988 5.37232 6.19298 4.60104C6.15777 4.5641 6.1155 4.53458 6.06871 4.51419C6.02192 4.4938 5.97155 4.48296 5.92052 4.48233C5.86949 4.48169 5.81882 4.49125 5.77153 4.51047C5.72425 4.52968 5.68131 4.55815 5.64519 4.59421C5.60907 4.63026 5.58051 4.67318 5.56121 4.72043C5.5419 4.76767 5.53222 4.81832 5.53276 4.86935C5.5333 4.92039 5.54408 4.97078 5.56438 5.01761C5.58468 5.06444 5.61411 5.10678 5.65099 5.14206C6.35369 5.84456 6.91112 6.67856 7.29143 7.59653C7.67174 8.51449 7.86748 9.49841 7.86748 10.492C7.86748 11.4857 7.67174 12.4696 7.29143 13.3875C6.91112 14.3055 6.35369 15.1395 5.65099 15.842C5.58196 15.9144 5.54403 16.011 5.54528 16.1111C5.54652 16.2111 5.58683 16.3067 5.65764 16.3773C5.72845 16.448 5.82414 16.4882 5.92418 16.4893C6.02423 16.4903 6.12069 16.4522 6.19298 16.383C6.96893 15.6113 7.58391 14.6932 8.00225 13.6819C8.42059 12.6707 8.63398 11.5864 8.62999 10.492H8.635ZM5.02898 10.492C5.02977 9.99525 4.88328 9.50937 4.60796 9.09585C4.33264 8.68234 3.94087 8.35974 3.48223 8.16885C3.02358 7.97797 2.51864 7.9274 2.03124 8.02347C1.54383 8.11954 1.09585 8.35794 0.743946 8.70859C0.392038 9.05924 0.152002 9.50638 0.0541875 9.99344C-0.0436272 10.4805 0.00514273 10.9856 0.194385 11.4449C0.383628 11.9042 0.704835 12.2971 1.11736 12.5739C1.52988 12.8507 2.01523 12.999 2.51201 13C3.17754 13 3.81588 12.7359 4.28685 12.2657C4.75783 11.7955 5.02292 11.1576 5.02397 10.492H5.02898Z",
              }),
            }),
            (0, i.jsx)("label", {
              children: "[co•di•go] Code in spanish",
            }),
          ],
        });
      }
      var _ = o(355),
        l = o(7746),
        d = o(9008),
        c = o.n(d),
        u = o(3944),
        f = o.n(u);

      function p(e) {
        var n = e.setCta;
        return (0, i.jsx)("section", {
          className: f().root,
          children: (0, i.jsxs)("div", {
            className: f().paging,
            children: [
              (0, i.jsxs)("article", {
                className: f().article,
                children: [
                  (0, i.jsx)("h2", {
                    className: "section-title",
                    children: "Find us",
                  }),
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.695957647654!2d103.83133421475394!3d1.3590575990087912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1725f6ca4f35%3A0x7412b8b701406ceb!2sCodigo%20%7C%20Mobile%20app%20development%20%7C%20Offshore%20recruitment!5e0!3m2!1sen!2ssg!4v1687068195539!5m2!1sen!2ssg",
                        style: {
                          border: "0",
                        },
                        loading: "lazy",
                        className: f().map,
                      }),
                      (0, i.jsxs)("ul", {
                        children: [
                          (0, i.jsxs)("li", {
                            children: [
                              (0, i.jsx)("h3", {
                                children: "Say Hello",
                              }),
                              (0, i.jsx)("a", {
                                href: "tel:+65 6455 9790",
                                children: "+65 6455 9790",
                              }),
                              " ",
                              (0, i.jsx)("br", {}),
                              (0, i.jsx)("a", {
                                href: "mailto:hello@codigo.co",
                                children: "hello@codigo.co",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("li", {
                            children: [
                              (0, i.jsx)("h3", {
                                children: "Join Codigo",
                              }),
                              (0, i.jsx)("a", {
                                href: "mailto:careers@codigo.co",
                                children: "careers@codigo.co",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("li", {
                            children: [
                              (0, i.jsx)("h3", {
                                children: "Build Something",
                              }),
                              (0, i.jsxs)("button", {
                                className: "animate-arrow",
                                onClick: function () {
                                  return n("quote");
                                },
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "Request a quotation",
                                  }),
                                  " ",
                                  (0, i.jsx)(l.L, {}),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("ul", {
                className: f().countries,
                children: [
                  {
                    name: "Singapore",
                    address:
                      "24 Sin Ming Lane, Midview City #04-91 Singapore 573970",
                  },
                  {
                    name: "Myanmar",
                    address:
                      "No. 11A, 2nd Floor (New Strength Building), East Horse Race Course Road, Tamwe, Yangon, Myanmar",
                  },
                  {
                    name: "Vietnam",
                    address:
                      "76 Nguyen Duc Canh Street Ninh Kieu District, Can Tho City",
                  },
                ].map(function (e) {
                  var n = e.name,
                    o = e.address;
                  return (0, i.jsxs)(
                    "li",
                    {
                      children: [
                        (0, i.jsx)(_.Z, {
                          alt: "",
                          src: "locations/".concat(n.toLowerCase(), ".png"),
                          fill: !0,
                        }),
                        (0, i.jsxs)("div", {
                          className: f().content,
                          children: [
                            (0, i.jsx)("div", {
                              className: f().head,
                              children: (0, i.jsx)("h4", {
                                children: n,
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: f().body,
                              children: [
                                (0, i.jsx)("b", {
                                  children: n,
                                }),
                                (0, i.jsx)("p", {
                                  children: o,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    n
                  );
                }),
              }),
            ],
          }),
        });
      }
      var h = o(7799),
        g = o.n(h);

      function m(e) {
        var n = e.people,
          o = (0, s.useState)(!0),
          t = o[0],
          a = o[1];
        return (0, i.jsxs)("ul", {
          className: "".concat(g().root, " ").concat(t && g().shrink),
          children: [
            n.map(function (e) {
              var n = e.image,
                o = e.post_title,
                s = e.post_content;
              return (0, i.jsxs)(
                "li",
                {
                  title: o,
                  style: {
                    animationDelay: "".concat(
                      (30 * Math.random() + 0) / 100,
                      "s"
                    ),
                  },
                  className: g().person,
                  children: [
                    (0, i.jsx)(_.Z, {
                      alt: "",
                      src: n,
                      fill: !0,
                      className: g().image,
                    }),
                    (0, i.jsx)("div", {
                      className: g().content,
                      dangerouslySetInnerHTML: {
                        __html: s,
                      },
                    }),
                  ],
                },
                o
              );
            }),
            (0, i.jsxs)("a", {
              href: "mailto:careers@codigo.co",
              className: g().mailto,
              children: [
                (0, i.jsxs)("div", {
                  className: g().content,
                  children: [
                    (0, i.jsx)("h2", {
                      children:
                        "We’re always on the look out for passionate people.",
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "If you’d like to join our amazing team, get in touch.",
                    }),
                  ],
                }),
                (0, i.jsx)("i", {}),
              ],
            }),
            (0, i.jsxs)("button", {
              className: g().expand_btn,
              onClick: function () {
                return a(!t);
              },
              children: [
                t &&
                  (0, i.jsxs)("h3", {
                    children: [
                      (0, i.jsxs)("span", {
                        children: ["+", n.length - 8],
                      }),
                      (0, i.jsxs)("span", {
                        children: ["+", n.length - 13],
                      }),
                      (0, i.jsxs)("span", {
                        children: ["+", n.length - 19],
                      }),
                    ],
                  }),
                (0, i.jsx)("p", {
                  children: t ? "View all" : "View less",
                }),
              ],
            }),
          ],
        });
      }
      var C = o(9815),
        x = o(3753),
        w = o(7386),
        j = o.n(w);

      function b(e) {
        var n = e.items,
          o = e.classes,
          t = e.children,
          a = (0, s.useRef)(null),
          r = {
            "--w": "".concat((n.length + 1) * 100, "vw"),
          },
          _ = function (e) {
            e === n.length - 1 &&
              setTimeout(function () {
                a.current &&
                  ((a.current.style.transform = "translate(0vw)"),
                  (a.current.style.transition = "none"),
                  setTimeout(function () {
                    (null == a ? void 0 : a.current) &&
                      (a.current.style.transition = "transform 500ms ease");
                  }, 200));
              }, 500);
          };
        return (0, i.jsx)(x.Z, {
          style: r,
          items: n,
          interval: 5e3,
          className: "".concat(j().root, " ").concat(o.root),
          afterEffect: _,
          children: function (e, n) {
            return (0, i.jsx)("div", {
              ref: a,
              style: {
                transform: "translate(".concat(-(100 * (n + 1)), "vw)"),
                transition: "transform 500ms ease",
              },
              className: "".concat(j().slides, " ").concat(o.slides),
              children: [e[e.length - 1]].concat((0, C.Z)(e)).map(t),
            });
          },
        });
      }
      var v = o(4091),
        S = o.n(v),
        y = !0;

      function N(e) {
        var n = e.people,
          o = e.press,
          s = e.setCta;
        return (0, i.jsxs)("main", {
          children: [
            (0, i.jsxs)(c(), {
              children: [
                (0, i.jsx)("title", {
                  children: "About us • Codigo SG SG",
                }),
                (0, i.jsx)("meta", {
                  name: "description",
                  content:
                    "We are an award winning mobile application developer based in Singapore, with offices in Myanmar and Vietnam. Speak with us today on how we can help you develop a mobile first strategy for your business with iOS/Android apps and backend web applications.",
                }),
              ],
            }),
            (0, i.jsxs)("article", {
              className: "banner",
              children: [
                (0, i.jsxs)("h1", {
                  className: "title",
                  children: [
                    "We are ",
                    (0, i.jsx)("span", {
                      children: "Codigo.",
                    }),
                  ],
                }),
                (0, i.jsx)(r, {}),
                (0, i.jsxs)("p", {
                  className: "description",
                  children: [
                    "We are an award winning mobile application developer based in Singapore, with offices in Myanmar and Vietnam. ",
                    (0, i.jsx)("br", {}),
                    " ",
                    (0, i.jsx)("br", {}),
                    "Speak with us today on how we can help you develop a mobile first strategy for your business with iOS/Android apps and backend web applications.",
                  ],
                }),
              ],
            }),
            (0, i.jsx)(m, {
              people: n,
            }),
            (0, i.jsxs)("section", {
              className: S().award,
              children: [
                (0, i.jsx)("h2", {
                  className: "section-title",
                  children: "Awards and Recognition",
                }),
                (0, i.jsx)(b, {
                  items: [
                    {
                      name: "The MOB-EX",
                      category: "Best of Show 2015",
                      position: "Winner",
                    },
                    {
                      name: "Mobile Marketing",
                      category: "Agency of the Year 2015",
                      position: "Local Hero",
                    },
                    {
                      name: "Mobile Agency",
                      category: "of the year 2014",
                      position: "1st Place",
                    },
                    {
                      name: "Mobile Marketing",
                      category: "Agency of the Year 2014",
                      position: "Local Hero",
                    },
                  ],
                  classes: {
                    root: S().slider,
                    slides: S().slides,
                  },
                  children: function (e, n) {
                    return (0, i.jsxs)(
                      "section",
                      {
                        className: S().slide,
                        children: [
                          (0, i.jsxs)("p", {
                            children: [
                              e.name,
                              " ",
                              (0, i.jsx)("br", {}),
                              " ",
                              e.category,
                            ],
                          }),
                          (0, i.jsx)("i", {}),
                          (0, i.jsx)("h4", {
                            children: e.position,
                          }),
                        ],
                      },
                      n
                    );
                  },
                }),
                (0, i.jsx)("ul", {
                  className: S().trophies,
                  children: [
                    {
                      color: "blue",
                      text: "<b>Best of Show</b>",
                    },
                    {
                      color: "gold",
                      text: "<b>10</b> Gold",
                    },
                    {
                      color: "silver",
                      text: "<b>8</b> Silver",
                    },
                  ].map(function (e) {
                    var n = e.color,
                      o = e.text;
                    return (0, i.jsxs)(
                      "li",
                      {
                        className: S().trophy,
                        children: [
                          (0, i.jsx)(_.Z, {
                            src: "trophies/".concat(n, ".png"),
                            alt: "".concat(n, " trophy"),
                          }),
                          (0, i.jsx)("p", {
                            dangerouslySetInnerHTML: {
                              __html: o,
                            },
                          }),
                        ],
                      },
                      n
                    );
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("section", {
              className: S().press,
              children: [
                (0, i.jsx)("h2", {
                  className: "section-title",
                  children: "Press Coverage",
                }),
                (0, i.jsx)(b, {
                  items: o,
                  classes: {
                    root: S().slider,
                    slides: S().slides,
                  },
                  children: function (e, n) {
                    return (0, i.jsxs)(
                      "a",
                      {
                        href: e.url,
                        className: "".concat(S().slide, " animate-arrow"),
                        children: [
                          (0, i.jsx)("p", {
                            children: e.post_title,
                          }),
                          (0, i.jsx)("h5", {
                            children: e.post_content,
                          }),
                          (0, i.jsx)(l.L, {}),
                        ],
                      },
                      n
                    );
                  },
                }),
              ],
            }),
            (0, i.jsx)(p, {
              setCta: s,
            }),
          ],
        });
      }
    },
    1397: function (e) {
      e.exports = {
        "font-sans": "CodigoAudio_font-sans__lvtoU",
        "font-mono": "CodigoAudio_font-mono__nc0gH",
        "font-serif": "CodigoAudio_font-serif__NE6CQ",
        paging: "CodigoAudio_paging___IhSC",
        "fade-in-70px": "CodigoAudio_fade-in-70px__LGA9b",
        root: "CodigoAudio_root__mZ6A_",
        "fade-in": "CodigoAudio_fade-in__s5Ktg",
        "fade-out": "CodigoAudio_fade-out__vLDpo",
        "grow-up": "CodigoAudio_grow-up__L1iZQ",
        "grow-down": "CodigoAudio_grow-down__3MLLc",
        "scale-in": "CodigoAudio_scale-in__73k3B",
        "scale-down": "CodigoAudio_scale-down__VG_RZ",
        wave: "CodigoAudio_wave__IsdDu",
        blink: "CodigoAudio_blink__QfBNm",
        spin: "CodigoAudio_spin__rb5So",
      };
    },
    9637: function (e) {
      e.exports = {
        "font-sans": "Slider_font-sans__hbO_X",
        "font-mono": "Slider_font-mono__oEruY",
        "font-serif": "Slider_font-serif__Jua_C",
        paging: "Slider_paging__cAfwe",
        "fade-in-70px": "Slider_fade-in-70px__SJI_K",
        "fade-in": "Slider_fade-in__DYoNT",
        indicator: "Slider_indicator__W9xvl",
        active: "Slider_active__RG09i",
        "fade-out": "Slider_fade-out__sR7dt",
        "grow-up": "Slider_grow-up__8JiqJ",
        "grow-down": "Slider_grow-down__jXf8_",
        "scale-in": "Slider_scale-in__t1Vft",
        "scale-down": "Slider_scale-down__WAI5l",
        wave: "Slider_wave__ZSOIW",
        blink: "Slider_blink__oj65V",
        spin: "Slider_spin__XjUXH",
      };
    },
    4091: function (e) {
      e.exports = {
        "font-sans": "About_font-sans__4ALbr",
        "font-mono": "About_font-mono__wxi_n",
        "font-serif": "About_font-serif__B_oMf",
        paging: "About_paging__eM64p",
        press: "About_press__EU_cI",
        slider: "About_slider__1NUy6",
        award: "About_award__3RPQc",
        "fade-in-70px": "About_fade-in-70px__d1vXs",
        "fade-in": "About_fade-in__XaGHP",
        slide: "About_slide__dtgmX",
        trophies: "About_trophies__E29ZO",
        trophy: "About_trophy__6TQWN",
        slides: "About_slides__MOw3_",
        "fade-out": "About_fade-out__6YkhZ",
        "grow-up": "About_grow-up__ggQrs",
        "grow-down": "About_grow-down__IPs52",
        "scale-in": "About_scale-in__aVHnf",
        "scale-down": "About_scale-down__wXhA2",
        wave: "About_wave__Yc2_K",
        blink: "About_blink__sFDqs",
        spin: "About_spin__Ek7EL",
      };
    },
    3944: function (e) {
      e.exports = {
        "font-sans": "FindUs_font-sans__IdEjM",
        "font-mono": "FindUs_font-mono__woJC1",
        "font-serif": "FindUs_font-serif__n3v3_",
        paging: "FindUs_paging__WuNbJ",
        "fade-in-70px": "FindUs_fade-in-70px__KYoIC",
        "fade-in": "FindUs_fade-in__t1onD",
        root: "FindUs_root__UtR_7",
        article: "FindUs_article__faYPz",
        map: "FindUs_map__D6izS",
        countries: "FindUs_countries__K46BZ",
        content: "FindUs_content___jdg1",
        head: "FindUs_head__DueK_",
        body: "FindUs_body__xfC1O",
        "fade-out": "FindUs_fade-out__zVoDh",
        "grow-up": "FindUs_grow-up__7JvTa",
        "grow-down": "FindUs_grow-down__7nxbp",
        "scale-in": "FindUs_scale-in__6DMLT",
        "scale-down": "FindUs_scale-down__RfrFQ",
        wave: "FindUs_wave__HVssW",
        blink: "FindUs_blink__uQ7Wb",
        spin: "FindUs_spin__dWe6J",
      };
    },
    7799: function (e) {
      e.exports = {
        "font-sans": "People_font-sans__ra7Mw",
        "font-mono": "People_font-mono__06jy9",
        "font-serif": "People_font-serif__F6Ecz",
        paging: "People_paging__T4Xi_",
        "fade-in-70px": "People_fade-in-70px__U67oQ",
        "fade-in": "People_fade-in__F5Cc8",
        root: "People_root__K1OO3",
        shrink: "People_shrink__abb3O",
        person: "People_person__jONED",
        content: "People_content__xf44e",
        mailto: "People_mailto__thv8l",
        expand_btn: "People_expand_btn__Pysi1",
        "fade-out": "People_fade-out__v4RyJ",
        "grow-up": "People_grow-up__qI6zs",
        "grow-down": "People_grow-down__HtFJ4",
        "scale-in": "People_scale-in__MmS3C",
        "scale-down": "People_scale-down__vYTTP",
        wave: "People_wave__lcalu",
        blink: "People_blink__us7f7",
        spin: "People_spin__UGU2W",
      };
    },
    7386: function (e) {
      e.exports = {
        "font-sans": "Slider_font-sans__q16OV",
        "font-mono": "Slider_font-mono__VYbc0",
        "font-serif": "Slider_font-serif__N7JZe",
        paging: "Slider_paging__jUowX",
        "fade-in-70px": "Slider_fade-in-70px__X9CPV",
        "fade-in": "Slider_fade-in__VzUPE",
        root: "Slider_root__H3Idd",
        slides: "Slider_slides__BlP_e",
        "fade-out": "Slider_fade-out__9qLC_",
        "grow-up": "Slider_grow-up__GfMRt",
        "grow-down": "Slider_grow-down__Ef2O4",
        "scale-in": "Slider_scale-in__fiZ_j",
        "scale-down": "Slider_scale-down__YMg0U",
        wave: "Slider_wave__0M_0O",
        blink: "Slider_blink__HQQ4p",
        spin: "Slider_spin__fDoCS",
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 6794));
    }),
      (_N_E = e.O());
  },
]);
