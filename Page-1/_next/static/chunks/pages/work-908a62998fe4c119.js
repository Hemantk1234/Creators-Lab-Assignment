(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [337],
  {
    7880: function (e, n, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/work",
        function () {
          return o(9819);
        },
      ]);
    },
    9819: function (e, n, o) {
      "use strict";
      o.r(n),
        o.d(n, {
          __N_SSG: function () {
            return m;
          },
          default: function () {
            return h;
          },
        });
      var r = o(5893),
        t = o(355),
        a = o(9008),
        s = o.n(a),
        _ = o(1664),
        i = o.n(_),
        c = o(1163),
        l = o(8847),
        u = o(1767),
        d = o.n(u);

      function f(e) {
        var n = e.active,
          o = e.categories;
        return (0, r.jsxs)("section", {
          className: d().root,
          children: [
            (0, r.jsx)("ul", {
              className: d().categories,
              children: o.map(function (e) {
                var o = e.name,
                  t = e.slug,
                  a = "all" === t ? "/work" : "/work?tag=".concat(t);
                return (0, r.jsx)(
                  "li",
                  {
                    className: n === t ? d().active : "",
                    children: (0, r.jsx)(i(), {
                      href: a,
                      scroll: !1,
                      children: (0, l.Y)(o),
                    }),
                  },
                  t
                );
              }),
            }),
            (0, r.jsxs)("div", {
              className: d().legends,
              children: [
                (0, r.jsx)("h4", {
                  children: "LEGEND",
                }),
                (0, r.jsx)("ul", {
                  children: [
                    {
                      icon: "app",
                      name: "APP",
                    },
                    {
                      icon: "web",
                      name: "WEB",
                    },
                    {
                      icon: "cms",
                      name: "CMS",
                    },
                    {
                      icon: "uiux",
                      name: "UI/UX",
                    },
                  ].map(function (e) {
                    var n = e.icon,
                      o = e.name;
                    return (0, r.jsxs)(
                      "li",
                      {
                        children: [
                          (0, r.jsx)(t.Z, {
                            alt: o,
                            src: "legends/ico-".concat(n, ".svg"),
                          }),
                          (0, r.jsx)("legend", {
                            children: o,
                          }),
                        ],
                      },
                      o
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var g = o(757),
        p = o.n(g),
        m = !0;

      function h(e) {
        var n,
          o,
          a = e.works,
          _ = e.categories,
          u = (0, c.useRouter)().query.tag || "all",
          d = a.filter(function (e) {
            var n = e.categories;
            return (
              "all" === u ||
              n.filter(function (e) {
                return e.slug === u;
              }).length > 0
            );
          });
        return (0, r.jsxs)("main", {
          children: [
            (0, r.jsxs)(s(), {
              children: [
                (0, r.jsx)("title", {
                  children: "Work • Codigo SG",
                }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content:
                    "Here’s 5% of our published work. See 100% of our power.",
                }),
              ],
            }),
            (0, r.jsxs)("article", {
              className: "banner",
              children: [
                (0, r.jsxs)("h1", {
                  className: "title",
                  children: [
                    "Here’s 5% of ",
                    (0, r.jsx)("br", {}),
                    "our published work. ",
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("span", {
                      children: "See 100% of our power.",
                    }),
                  ],
                }),
                (0, r.jsx)(f, {
                  categories: _,
                  active: u,
                }),
              ],
            }),
            d.length > 0
              ? (0, r.jsx)(
                  "section",
                  {
                    className: p().list,
                    children: d.map(function (e, n) {
                      var o = e.name,
                        a = e.slug,
                        s = e.roles,
                        _ = e.images,
                        c = e.grid_size,
                        u = e.categories,
                        d = e.text_colour,
                        f = e.description;
                      return (0, r.jsxs)(
                        i(),
                        {
                          href: "/work/".concat(a),
                          style: {
                            animationDelay: "".concat(
                              (30 * Math.random() + 0) / 100,
                              "s"
                            ),
                          },
                          className: ""
                            .concat(p().item, " ")
                            .concat(0.5 === c && p().col_span_2),
                          children: [
                            (0, r.jsx)(t.Z, {
                              alt: f,
                              src: _.retina,
                              fill: !0,
                              className: p().image,
                            }),
                            (0, r.jsxs)("div", {
                              style: {
                                color: d || "#fff",
                              },
                              className: p().content,
                              children: [
                                (0, r.jsx)("p", {
                                  children: u
                                    .map(function (e) {
                                      var n = e.name;
                                      return (0, l.Y)(n);
                                    })
                                    .join(", "),
                                }),
                                (0, r.jsx)("h3", {
                                  children: o,
                                }),
                                (0, r.jsx)("ul", {
                                  className: p().roles,
                                  children: s.map(function (e) {
                                    var n = e.name;
                                    return (0, r.jsx)(
                                      "li",
                                      {
                                        title: n.toUpperCase(),
                                        children: (0, r.jsx)(t.Z, {
                                          alt: n,
                                          src: "legends/ico-".concat(n, ".svg"),
                                        }),
                                      },
                                      n
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        n
                      );
                    }),
                  },
                  "".concat(u)
                )
              : (0, r.jsx)("p", {
                  className: p().empty,
                  children:
                    "There is no specific project related with the tag name(media)! Do you want to show all the projects instead?",
                }),
          ],
        });
      }
    },
    8847: function (e, n, o) {
      "use strict";
      o.d(n, {
        P: function () {
          return i;
        },
        Y: function () {
          return _;
        },
      });
      var r = o(4924),
        t = o(6042),
        a = o(9396),
        s = o(828),
        _ = function (e) {
          return e.replace("&amp;", "&");
        },
        i = function (e) {
          return Object.entries(e).reduce(function (e, n) {
            var o = (0, s.Z)(n, 2),
              _ = o[0],
              i = o[1];
            return i
              ? (0, a.Z)((0, t.Z)({}, e), (0, r.Z)({}, "--".concat(_), i))
              : e;
          }, {});
        };
    },
    757: function (e) {
      e.exports = {
        "font-sans": "Work_font-sans__Zzu_V",
        "font-mono": "Work_font-mono__lt8aQ",
        "font-serif": "Work_font-serif__1p22T",
        paging: "Work_paging__wX_0W",
        "fade-in-70px": "Work_fade-in-70px__2B3wM",
        "fade-in": "Work_fade-in__lkDZb",
        list: "Work_list__qtP9t",
        item: "Work_item__3rDPm",
        image: "Work_image__H0UbE",
        content: "Work_content__BMjDp",
        roles: "Work_roles__k10uh",
        empty: "Work_empty__L47lC",
        flip: "Work_flip__awpoj",
        col_span_2: "Work_col_span_2__2qhH_",
        "fade-out": "Work_fade-out__FQlqe",
        "grow-up": "Work_grow-up__SH9Gt",
        "grow-down": "Work_grow-down__ELv41",
        "scale-in": "Work_scale-in__Cd78o",
        "scale-down": "Work_scale-down__QIm_x",
        wave: "Work_wave__FZSgF",
        blink: "Work_blink__XM7pF",
        spin: "Work_spin__NO9kU",
      };
    },
    1767: function (e) {
      e.exports = {
        "font-sans": "Category_font-sans__o2qnu",
        "font-mono": "Category_font-mono__I4jLc",
        "font-serif": "Category_font-serif__QSZLz",
        paging: "Category_paging__0oHUf",
        "fade-in-70px": "Category_fade-in-70px__smCHd",
        root: "Category_root__wgVHy",
        "fade-in": "Category_fade-in__z4Ipd",
        categories: "Category_categories__CRdvQ",
        active: "Category_active__zFjM7",
        legends: "Category_legends__h_mKm",
        "fade-out": "Category_fade-out__NRsJY",
        "grow-up": "Category_grow-up__VmgvF",
        "grow-down": "Category_grow-down__xVhvO",
        "scale-in": "Category_scale-in__FVTx7",
        "scale-down": "Category_scale-down__XkX8s",
        wave: "Category_wave__7B_Ao",
        blink: "Category_blink__VnWTa",
        spin: "Category_spin__aalKT",
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 7880));
    }),
      (_N_E = e.O());
  },
]);
