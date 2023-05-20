(this["webpackJsonpcrypto-tracker"] = this["webpackJsonpcrypto-tracker"] || []).push([
    [0], {
        226: function(e, t, n) {},
        286: function(e, t, n) {},
        311: function(e, t) {},
        437: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                c = n(27),
                i = n.n(c),
                s = (n(226), n(473)),
                o = n(476),
                l = n(478),
                u = n(1),
                d = n.n(u),
                j = n(3),
                p = n(20),
                b = n(63),
                h = n.n(b),
                f = n(195),
                g = n.n(f),
                m = n(73),
                O = function(e) {
                    return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e, "&order=market_cap_desc&per_page=100&page=1&sparkline=false")
                },
                x = function(e) {
                    return "https://api.coingecko.com/api/v3/coins/".concat(e)
                },
                v = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 365,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return "https://api.coingecko.com/api/v3/coins/".concat(e, "/market_chart?vs_currency=").concat(n, "&days=").concat(t)
                },
                y = function(e) {
                    return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e, "&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")
                },
                k = n(42),
                C = n(196),
                w = n(44),
                S = (n(278), n(438), {
                    apiKey: "AIzaSyBMfHUVXe4GDHryY7sJMPmnElS5kLDZZo4",
                    authDomain: "crypto-hunter-50991.firebaseapp.com",
                    projectId: "crypto-hunter-50991",
                    storageBucket: "crypto-hunter-50991.appspot.com",
                    messagingSenderId: "141181984273",
                    appId: "1:141181984273:web:ba51a25e27ce6a2b1d9bb0"
                }),
                D = Object(C.a)(S),
                N = Object(k.c)(D),
                E = Object(w.b)(D),
                _ = n(9),
                I = Object(a.createContext)(),
                F = function(e) {
                    var t = e.children,
                        n = Object(a.useState)("INR"),
                        r = Object(p.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        s = Object(a.useState)("\u20b9"),
                        o = Object(p.a)(s, 2),
                        l = o[0],
                        u = o[1],
                        b = Object(a.useState)({
                            open: !1,
                            message: "",
                            type: "success"
                        }),
                        f = Object(p.a)(b, 2),
                        g = f[0],
                        m = f[1],
                        x = Object(a.useState)(null),
                        v = Object(p.a)(x, 2),
                        y = v[0],
                        C = v[1],
                        S = Object(a.useState)([]),
                        D = Object(p.a)(S, 2),
                        F = D[0],
                        M = D[1],
                        W = Object(a.useState)(!1),
                        B = Object(p.a)(W, 2),
                        A = B[0],
                        P = B[1],
                        R = Object(a.useState)([]),
                        T = Object(p.a)(R, 2),
                        L = T[0],
                        z = T[1];
                    Object(a.useEffect)((function() {
                        if (y) {
                            var e = Object(w.a)(E, "watchlist", null === y || void 0 === y ? void 0 : y.uid),
                                t = Object(w.c)(e, (function(e) {
                                    e.exists() ? (console.log(e.data().coins), z(e.data().coins)) : console.log("No Items in Watchlist")
                                }));
                            return function() {
                                t()
                            }
                        }
                    }), [y]), Object(a.useEffect)((function() {
                        Object(k.d)(N, (function(e) {
                            C(e || null)
                        }))
                    }), []);
                    var U = function() {
                        var e = Object(j.a)(d.a.mark((function e() {
                            var t, n;
                            return d.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return P(!0), e.next = 3, h.a.get(O(c));
                                    case 3:
                                        t = e.sent, n = t.data, M(n), P(!1);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return Object(a.useEffect)((function() {
                        "INR" === c ? u("\u20b9") : "USD" === c && u("$"), U()
                    }), [c]), Object(_.jsx)(I.Provider, {
                        value: {
                            currency: c,
                            setCurrency: i,
                            symbol: l,
                            alert: g,
                            setAlert: m,
                            user: y,
                            coins: F,
                            loading: A,
                            watchlist: L
                        },
                        children: t
                    })
                },
                M = function() {
                    return Object(a.useContext)(I)
                },
                W = n(499),
                B = n(206),
                A = n(475),
                P = n(501),
                R = n(482),
                T = n(440),
                L = n(483),
                z = n(484),
                U = n(485),
                H = n(486),
                J = n(487),
                Y = n(488),
                G = n(30);

            function Z(e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }

            function K() {
                var e, t = Object(a.useState)(""),
                    n = Object(p.a)(t, 2),
                    r = n[0],
                    c = n[1],
                    i = Object(a.useState)(1),
                    u = Object(p.a)(i, 2),
                    d = u[0],
                    j = u[1],
                    b = M(),
                    h = b.symbol,
                    f = b.coins,
                    g = b.loading,
                    m = Object(s.a)({
                        row: {
                            backgroundColor: "#16171a",
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "#131111"
                            },
                            fontFamily: "Montserrat"
                        },
                        pagination: {
                            "& .MuiPaginationItem-root": {
                                color: "gold"
                            }
                        }
                    })(),
                    O = Object(G.e)(),
                    x = Object(B.a)({
                        palette: {
                            primary: {
                                main: "#fff"
                            },
                            type: "dark"
                        }
                    }),
                    v = function() {
                        return f.filter((function(e) {
                            return e.name.toLowerCase().includes(r) || e.symbol.toLowerCase().includes(r)
                        }))
                    };
                return Object(_.jsx)(A.a, {
                    theme: x,
                    children: Object(_.jsxs)(o.a, {
                        style: {
                            textAlign: "center"
                        },
                        children: [Object(_.jsx)(l.a, {
                            variant: "h4",
                            style: {
                                margin: 18,
                                fontFamily: "Montserrat"
                            },
                            children: "Cryptocurrency Prices by Market Cap"
                        }), Object(_.jsx)(P.a, {
                            label: "Search For a Crypto Currency..",
                            variant: "outlined",
                            style: {
                                marginBottom: 20,
                                width: "100%"
                            },
                            onChange: function(e) {
                                return c(e.target.value)
                            }
                        }), Object(_.jsx)(R.a, {
                            component: T.a,
                            children: g ? Object(_.jsx)(L.a, {
                                style: {
                                    backgroundColor: "gold"
                                }
                            }) : Object(_.jsxs)(z.a, {
                                "aria-label": "simple table",
                                children: [Object(_.jsx)(U.a, {
                                    style: {
                                        backgroundColor: "#EEBC1D"
                                    },
                                    children: Object(_.jsx)(H.a, {
                                        children: ["Coin", "Price", "24h Change", "Market Cap"].map((function(e) {
                                            return Object(_.jsx)(J.a, {
                                                style: {
                                                    color: "black",
                                                    fontWeight: "700",
                                                    fontFamily: "Montserrat"
                                                },
                                                align: "Coin" === e ? "left" : "right",
                                                children: e
                                            }, e)
                                        }))
                                    })
                                }), Object(_.jsx)(Y.a, {
                                    children: v().slice(10 * (d - 1), 10 * (d - 1) + 10).map((function(e) {
                                        var t = e.price_change_percentage_24h > 0;
                                        return Object(_.jsxs)(H.a, {
                                            onClick: function() {
                                                return O.push("/coins/".concat(e.id))
                                            },
                                            className: m.row,
                                            children: [Object(_.jsxs)(J.a, {
                                                component: "th",
                                                scope: "row",
                                                style: {
                                                    display: "flex",
                                                    gap: 15
                                                },
                                                children: [Object(_.jsx)("img", {
                                                    src: null === e || void 0 === e ? void 0 : e.image,
                                                    alt: e.name,
                                                    height: "50",
                                                    style: {
                                                        marginBottom: 10
                                                    }
                                                }), Object(_.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column"
                                                    },
                                                    children: [Object(_.jsx)("span", {
                                                        style: {
                                                            textTransform: "uppercase",
                                                            fontSize: 22
                                                        },
                                                        children: e.symbol
                                                    }), Object(_.jsx)("span", {
                                                        style: {
                                                            color: "darkgrey"
                                                        },
                                                        children: e.name
                                                    })]
                                                })]
                                            }), Object(_.jsxs)(J.a, {
                                                align: "right",
                                                children: [h, " ", Z(e.current_price.toFixed(2))]
                                            }), Object(_.jsxs)(J.a, {
                                                align: "right",
                                                style: {
                                                    color: t > 0 ? "rgb(14, 203, 129)" : "red",
                                                    fontWeight: 500
                                                },
                                                children: [t && "+", e.price_change_percentage_24h.toFixed(2), "%"]
                                            }), Object(_.jsxs)(J.a, {
                                                align: "right",
                                                children: [h, " ", Z(e.market_cap.toString().slice(0, -6)), "M"]
                                            })]
                                        }, e.name)
                                    }))
                                })]
                            })
                        }), Object(_.jsx)(W.a, {
                            count: parseInt(((null === (e = v()) || void 0 === e ? void 0 : e.length) / 10).toFixed(0)),
                            style: {
                                padding: 20,
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            },
                            classes: {
                                ul: m.pagination
                            },
                            onChange: function(e, t) {
                                j(t), window.scroll(0, 450)
                            }
                        })]
                    })
                })
            }
            var V = function() {
                    var e = Object(a.useState)([]),
                        t = Object(p.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = M(),
                        i = c.currency,
                        o = c.symbol,
                        l = function() {
                            var e = Object(j.a)(d.a.mark((function e() {
                                var t, n;
                                return d.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h.a.get(y(i));
                                        case 2:
                                            t = e.sent, n = t.data, r(n);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(a.useEffect)((function() {
                        l()
                    }), [i]);
                    var u = Object(s.a)((function(e) {
                            return {
                                carousel: {
                                    height: "50%",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                carouselItem: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    textTransform: "uppercase",
                                    color: "white"
                                }
                            }
                        }))(),
                        b = n.map((function(e) {
                            var t, n = (null === e || void 0 === e ? void 0 : e.price_change_percentage_24h) >= 0;
                            return Object(_.jsxs)(m.b, {
                                className: u.carouselItem,
                                to: "/coins/".concat(e.id),
                                children: [Object(_.jsx)("img", {
                                    src: null === e || void 0 === e ? void 0 : e.image,
                                    alt: e.name,
                                    height: "80",
                                    style: {
                                        marginBottom: 10
                                    }
                                }), Object(_.jsxs)("span", {
                                    children: [null === e || void 0 === e ? void 0 : e.symbol, "\xa0", Object(_.jsxs)("span", {
                                        style: {
                                            color: n > 0 ? "rgb(14, 203, 129)" : "red",
                                            fontWeight: 500
                                        },
                                        children: [n && "+", null === e || void 0 === e || null === (t = e.price_change_percentage_24h) || void 0 === t ? void 0 : t.toFixed(2), "%"]
                                    })]
                                }), Object(_.jsxs)("span", {
                                    style: {
                                        fontSize: 22,
                                        fontWeight: 500
                                    },
                                    children: [o, " ", Z(null === e || void 0 === e ? void 0 : e.current_price.toFixed(2))]
                                })]
                            })
                        }));
                    return Object(_.jsx)("div", {
                        className: u.carousel,
                        children: Object(_.jsx)(g.a, {
                            mouseTracking: !0,
                            infinite: !0,
                            autoPlayInterval: 1e3,
                            animationDuration: 1500,
                            disableDotsControls: !0,
                            disableButtonsControls: !0,
                            responsive: {
                                0: {
                                    items: 2
                                },
                                512: {
                                    items: 4
                                }
                            },
                            items: b,
                            autoPlay: !0
                        })
                    })
                },
                X = Object(s.a)((function(e) {
                    return {
                        banner: {
                            backgroundImage: "url(./banner2.jpg)"
                        },
                        bannerContent: {
                            height: 400,
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: 25,
                            justifyContent: "space-around"
                        },
                        tagline: {
                            display: "flex",
                            height: "40%",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center"
                        },
                        carousel: {
                            height: "50%",
                            display: "flex",
                            alignItems: "center"
                        }
                    }
                }));
            var $ = function() {
                    var e = X();
                    return Object(_.jsx)("div", {
                        className: e.banner,
                        children: Object(_.jsxs)(o.a, {
                            className: e.bannerContent,
                            children: [Object(_.jsxs)("div", {
                                className: e.tagline,
                                children: [Object(_.jsx)(l.a, {
                                    variant: "h2",
                                    style: {
                                        fontWeight: "bold",
                                        marginBottom: 15,
                                        fontFamily: "Montserrat"
                                    },
                                    children: "Crypto Hunter"
                                }), Object(_.jsx)(l.a, {
                                    variant: "subtitle2",
                                    style: {
                                        color: "darkgrey",
                                        textTransform: "capitalize",
                                        fontFamily: "Montserrat"
                                    },
                                    children: "Get all the Info regarding your favorite Crypto Currency"
                                })]
                            }), Object(_.jsx)(V, {})]
                        })
                    })
                },
                q = function() {
                    return Object(_.jsxs)(_.Fragment, {
                        children: [Object(_.jsx)($, {}), Object(_.jsx)(K, {})]
                    })
                },
                Q = (n(286), n(6)),
                ee = n(28),
                te = n(490),
                ne = n(202),
                ae = n.n(ne),
                re = n(208),
                ce = n(489),
                ie = function(e) {
                    var t = e.children,
                        n = e.selected,
                        a = e.onClick,
                        r = Object(s.a)({
                            selectbutton: {
                                border: "1px solid gold",
                                borderRadius: 5,
                                padding: 10,
                                fontFamily: "Montserrat",
                                cursor: "pointer",
                                backgroundColor: n ? "gold" : "",
                                color: n ? "black" : "",
                                fontWeight: n ? 700 : 500,
                                "&:hover": {
                                    backgroundColor: "gold",
                                    color: "black"
                                },
                                width: "23%",
                                textAlign: "center"
                            }
                        })();
                    return Object(_.jsx)("span", {
                        onClick: a,
                        className: r.selectbutton,
                        children: t
                    })
                },
                se = [{
                    label: "24 Hours",
                    value: 1
                }, {
                    label: "30 Days",
                    value: 30
                }, {
                    label: "3 Months",
                    value: 90
                }, {
                    label: "1 Year",
                    value: 365
                }],
                oe = function(e) {
                    var t = e.coin,
                        n = Object(a.useState)(),
                        r = Object(p.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        o = Object(a.useState)(1),
                        l = Object(p.a)(o, 2),
                        u = l[0],
                        b = l[1],
                        f = M().currency,
                        g = Object(s.a)((function(e) {
                            return {
                                container: Object(Q.a)({
                                    width: "75%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 25,
                                    padding: 40
                                }, e.breakpoints.down("md"), {
                                    width: "100%",
                                    marginTop: 0,
                                    padding: 20,
                                    paddingTop: 0
                                })
                            }
                        }))(),
                        m = function() {
                            var e = Object(j.a)(d.a.mark((function e() {
                                var n, a;
                                return d.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h.a.get(v(t.id, u, f));
                                        case 2:
                                            n = e.sent, a = n.data, i(a.prices);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(a.useEffect)((function() {
                        m()
                    }), [u, f]);
                    var O = Object(B.a)({
                        palette: {
                            primary: {
                                main: "#fff"
                            },
                            type: "dark"
                        }
                    });
                    return Object(_.jsx)(A.a, {
                        theme: O,
                        children: Object(_.jsx)("div", {
                            className: g.container,
                            children: c ? Object(_.jsxs)(_.Fragment, {
                                children: [Object(_.jsx)(re.a, {
                                    data: {
                                        labels: c.map((function(e) {
                                            var t = new Date(e[0]),
                                                n = t.getHours() > 12 ? "".concat(t.getHours() - 12, ":").concat(t.getMinutes(), " PM") : "".concat(t.getHours(), ":").concat(t.getMinutes(), " AM");
                                            return 1 === u ? n : t.toLocaleDateString()
                                        })),
                                        datasets: [{
                                            data: c.map((function(e) {
                                                return e[1]
                                            })),
                                            label: "Price ( Past ".concat(u, " Days ) in ").concat(f),
                                            borderColor: "#EEBC1D"
                                        }]
                                    },
                                    options: {
                                        elements: {
                                            point: {
                                                radius: 1
                                            }
                                        }
                                    }
                                }), Object(_.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        marginTop: 20,
                                        justifyContent: "space-around",
                                        width: "100%"
                                    },
                                    children: se.map((function(e) {
                                        return Object(_.jsx)(ie, {
                                            onClick: function() {
                                                return b(e.value)
                                            },
                                            selected: e.value === u,
                                            children: e.label
                                        }, e.value)
                                    }))
                                })]
                            }) : Object(_.jsx)(ce.a, {
                                style: {
                                    color: "gold"
                                },
                                size: 250,
                                thickness: 1
                            })
                        })
                    })
                },
                le = function() {
                    var e = Object(G.f)().id,
                        t = Object(a.useState)(),
                        n = Object(p.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        i = M(),
                        o = i.currency,
                        u = i.symbol,
                        b = i.user,
                        f = i.setAlert,
                        g = i.watchlist,
                        m = function() {
                            var t = Object(j.a)(d.a.mark((function t() {
                                var n, a;
                                return d.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, h.a.get(x(e));
                                        case 2:
                                            n = t.sent, a = n.data, c(a);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        O = g.includes(null === r || void 0 === r ? void 0 : r.id),
                        v = function() {
                            var e = Object(j.a)(d.a.mark((function e() {
                                var t;
                                return d.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(w.a)(E, "watchlist", b.uid), e.prev = 1, e.next = 4, Object(w.d)(t, {
                                                coins: g ? [].concat(Object(ee.a)(g), [null === r || void 0 === r ? void 0 : r.id]) : [null === r || void 0 === r ? void 0 : r.id]
                                            }, {
                                                merge: !0
                                            });
                                        case 4:
                                            f({
                                                open: !0,
                                                message: "".concat(r.name, " Added to the Watchlist !"),
                                                type: "success"
                                            }), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), f({
                                                open: !0,
                                                message: e.t0.message,
                                                type: "error"
                                            });
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        y = function() {
                            var e = Object(j.a)(d.a.mark((function e() {
                                var t;
                                return d.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(w.a)(E, "watchlist", b.uid), e.prev = 1, e.next = 4, Object(w.d)(t, {
                                                coins: g.filter((function(e) {
                                                    return e !== (null === r || void 0 === r ? void 0 : r.id)
                                                }))
                                            }, {
                                                merge: !0
                                            });
                                        case 4:
                                            f({
                                                open: !0,
                                                message: "".concat(r.name, " Removed from the Watchlist !"),
                                                type: "success"
                                            }), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), f({
                                                open: !0,
                                                message: e.t0.message,
                                                type: "error"
                                            });
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(a.useEffect)((function() {
                        m()
                    }), []);
                    var k = Object(s.a)((function(e) {
                        var t, n;
                        return {
                            container: Object(Q.a)({
                                display: "flex"
                            }, e.breakpoints.down("md"), {
                                flexDirection: "column",
                                alignItems: "center"
                            }),
                            sidebar: (t = {
                                width: "30%"
                            }, Object(Q.a)(t, e.breakpoints.down("md"), {
                                width: "100%"
                            }), Object(Q.a)(t, "display", "flex"), Object(Q.a)(t, "flexDirection", "column"), Object(Q.a)(t, "alignItems", "center"), Object(Q.a)(t, "marginTop", 25), Object(Q.a)(t, "borderRight", "2px solid grey"), t),
                            heading: {
                                fontWeight: "bold",
                                marginBottom: 20,
                                fontFamily: "Montserrat"
                            },
                            description: {
                                width: "100%",
                                fontFamily: "Montserrat",
                                padding: 25,
                                paddingBottom: 15,
                                paddingTop: 0,
                                textAlign: "justify"
                            },
                            marketData: (n = {
                                alignSelf: "start",
                                padding: 25,
                                paddingTop: 10,
                                width: "100%"
                            }, Object(Q.a)(n, e.breakpoints.down("md"), {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }), Object(Q.a)(n, e.breakpoints.down("xs"), {
                                alignItems: "start"
                            }), n)
                        }
                    }))();
                    return r ? Object(_.jsxs)("div", {
                        className: k.container,
                        children: [Object(_.jsxs)("div", {
                            className: k.sidebar,
                            children: [Object(_.jsx)("img", {
                                src: null === r || void 0 === r ? void 0 : r.image.large,
                                alt: null === r || void 0 === r ? void 0 : r.name,
                                height: "200",
                                style: {
                                    marginBottom: 20
                                }
                            }), Object(_.jsx)(l.a, {
                                variant: "h3",
                                className: k.heading,
                                children: null === r || void 0 === r ? void 0 : r.name
                            }), Object(_.jsxs)(l.a, {
                                variant: "subtitle1",
                                className: k.description,
                                children: [ae()(null === r || void 0 === r ? void 0 : r.description.en.split(". ")[0]), "."]
                            }), Object(_.jsxs)("div", {
                                className: k.marketData,
                                children: [Object(_.jsxs)("span", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: [Object(_.jsx)(l.a, {
                                        variant: "h5",
                                        className: k.heading,
                                        children: "Rank:"
                                    }), "\xa0 \xa0", Object(_.jsx)(l.a, {
                                        variant: "h5",
                                        style: {
                                            fontFamily: "Montserrat"
                                        },
                                        children: Z(null === r || void 0 === r ? void 0 : r.market_cap_rank)
                                    })]
                                }), Object(_.jsxs)("span", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: [Object(_.jsx)(l.a, {
                                        variant: "h5",
                                        className: k.heading,
                                        children: "Current Price:"
                                    }), "\xa0 \xa0", Object(_.jsxs)(l.a, {
                                        variant: "h5",
                                        style: {
                                            fontFamily: "Montserrat"
                                        },
                                        children: [u, " ", Z(null === r || void 0 === r ? void 0 : r.market_data.current_price[o.toLowerCase()])]
                                    })]
                                }), Object(_.jsxs)("span", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: [Object(_.jsx)(l.a, {
                                        variant: "h5",
                                        className: k.heading,
                                        children: "Market Cap:"
                                    }), "\xa0 \xa0", Object(_.jsxs)(l.a, {
                                        variant: "h5",
                                        style: {
                                            fontFamily: "Montserrat"
                                        },
                                        children: [u, " ", Z(null === r || void 0 === r ? void 0 : r.market_data.market_cap[o.toLowerCase()].toString().slice(0, -6)), "M"]
                                    })]
                                }), b && Object(_.jsx)(te.a, {
                                    variant: "outlined",
                                    style: {
                                        width: "100%",
                                        height: 40,
                                        backgroundColor: O ? "#ff0000" : "#EEBC1D"
                                    },
                                    onClick: O ? y : v,
                                    children: O ? "Remove from Watchlist" : "Add to Watchlist"
                                })]
                            })]
                        }), Object(_.jsx)(oe, {
                            coin: r
                        })]
                    }) : Object(_.jsx)(L.a, {
                        style: {
                            backgroundColor: "gold"
                        }
                    })
                },
                ue = n(492),
                de = n(494),
                je = n(496),
                pe = n(506),
                be = n(500),
                he = n(491),
                fe = n(441),
                ge = n(497),
                me = n(493),
                Oe = n(495),
                xe = function(e) {
                    var t = e.handleClose,
                        n = Object(a.useState)(""),
                        r = Object(p.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        s = Object(a.useState)(""),
                        o = Object(p.a)(s, 2),
                        l = o[0],
                        u = o[1],
                        b = Object(a.useState)(""),
                        h = Object(p.a)(b, 2),
                        f = h[0],
                        g = h[1],
                        m = M().setAlert,
                        O = function() {
                            var e = Object(j.a)(d.a.mark((function e() {
                                var n;
                                return d.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (l === f) {
                                                e.next = 3;
                                                break
                                            }
                                            return m({
                                                open: !0,
                                                message: "Passwords do not match",
                                                type: "error"
                                            }), e.abrupt("return");
                                        case 3:
                                            return e.prev = 3, e.next = 6, Object(k.b)(N, c, l);
                                        case 6:
                                            n = e.sent, m({
                                                open: !0,
                                                message: "Sign Up Successful. Welcome ".concat(n.user.email),
                                                type: "success"
                                            }), t(), e.next = 15;
                                            break;
                                        case 11:
                                            return e.prev = 11, e.t0 = e.catch(3), m({
                                                open: !0,
                                                message: e.t0.message,
                                                type: "error"
                                            }), e.abrupt("return");
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 11]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(_.jsxs)(Oe.a, {
                        p: 3,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px"
                        },
                        children: [Object(_.jsx)(P.a, {
                            variant: "outlined",
                            type: "email",
                            label: "Enter Email",
                            value: c,
                            onChange: function(e) {
                                return i(e.target.value)
                            },
                            fullWidth: !0
                        }), Object(_.jsx)(P.a, {
                            variant: "outlined",
                            label: "Enter Password",
                            type: "password",
                            value: l,
                            onChange: function(e) {
                                return u(e.target.value)
                            },
                            fullWidth: !0
                        }), Object(_.jsx)(P.a, {
                            variant: "outlined",
                            label: "Confirm Password",
                            type: "password",
                            value: f,
                            onChange: function(e) {
                                return g(e.target.value)
                            },
                            fullWidth: !0
                        }), Object(_.jsx)(te.a, {
                            variant: "contained",
                            size: "large",
                            style: {
                                backgroundColor: "#EEBC1D"
                            },
                            onClick: O,
                            children: "Sign Up"
                        })]
                    })
                },
                ve = function(e) {
                    var t = e.handleClose,
                        n = Object(a.useState)(""),
                        r = Object(p.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        s = Object(a.useState)(""),
                        o = Object(p.a)(s, 2),
                        l = o[0],
                        u = o[1],
                        b = M().setAlert,
                        h = function() {
                            var e = Object(j.a)(d.a.mark((function e() {
                                var n;
                                return d.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (c && l) {
                                                e.next = 3;
                                                break
                                            }
                                            return b({
                                                open: !0,
                                                message: "Please fill all the Fields",
                                                type: "error"
                                            }), e.abrupt("return");
                                        case 3:
                                            return e.prev = 3, e.next = 6, Object(k.e)(N, c, l);
                                        case 6:
                                            n = e.sent, b({
                                                open: !0,
                                                message: "Sign Up Successful. Welcome ".concat(n.user.email),
                                                type: "success"
                                            }), t(), e.next = 15;
                                            break;
                                        case 11:
                                            return e.prev = 11, e.t0 = e.catch(3), b({
                                                open: !0,
                                                message: e.t0.message,
                                                type: "error"
                                            }), e.abrupt("return");
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 11]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(_.jsxs)(Oe.a, {
                        p: 3,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px"
                        },
                        children: [Object(_.jsx)(P.a, {
                            variant: "outlined",
                            type: "email",
                            label: "Enter Email",
                            value: c,
                            onChange: function(e) {
                                return i(e.target.value)
                            },
                            fullWidth: !0
                        }), Object(_.jsx)(P.a, {
                            variant: "outlined",
                            label: "Enter Password",
                            type: "password",
                            value: l,
                            onChange: function(e) {
                                return u(e.target.value)
                            },
                            fullWidth: !0
                        }), Object(_.jsx)(te.a, {
                            variant: "contained",
                            size: "large",
                            onClick: h,
                            style: {
                                backgroundColor: "#EEBC1D"
                            },
                            children: "Login"
                        })]
                    })
                },
                ye = n(205),
                ke = n.n(ye),
                Ce = Object(s.a)((function(e) {
                    return {
                        modal: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        paper: {
                            width: 400,
                            backgroundColor: e.palette.background.paper,
                            color: "white",
                            borderRadius: 10
                        },
                        google: {
                            padding: 24,
                            paddingTop: 0,
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                            gap: 20,
                            fontSize: 20
                        }
                    }
                }));

            function we() {
                var e = Ce(),
                    t = Object(a.useState)(!1),
                    n = Object(p.a)(t, 2),
                    r = n[0],
                    c = n[1],
                    i = M().setAlert,
                    s = function() {
                        c(!1)
                    },
                    o = Object(a.useState)(0),
                    l = Object(p.a)(o, 2),
                    u = l[0],
                    d = l[1],
                    j = new k.a;
                return Object(_.jsxs)("div", {
                    children: [Object(_.jsx)(te.a, {
                        variant: "contained",
                        style: {
                            width: 85,
                            height: 40,
                            marginLeft: 15,
                            backgroundColor: "#EEBC1D"
                        },
                        onClick: function() {
                            c(!0)
                        },
                        children: "Login"
                    }), Object(_.jsx)(be.a, {
                        "aria-labelledby": "transition-modal-title",
                        "aria-describedby": "transition-modal-description",
                        className: e.modal,
                        open: r,
                        onClose: s,
                        closeAfterTransition: !0,
                        BackdropComponent: he.a,
                        BackdropProps: {
                            timeout: 500
                        },
                        children: Object(_.jsx)(fe.a, { in: r,
                            children: Object(_.jsxs)("div", {
                                className: e.paper,
                                children: [Object(_.jsx)(ue.a, {
                                    position: "static",
                                    style: {
                                        backgroundColor: "transparent",
                                        color: "white"
                                    },
                                    children: Object(_.jsxs)(ge.a, {
                                        value: u,
                                        onChange: function(e, t) {
                                            d(t)
                                        },
                                        variant: "fullWidth",
                                        style: {
                                            borderRadius: 10
                                        },
                                        children: [Object(_.jsx)(me.a, {
                                            label: "Login"
                                        }), Object(_.jsx)(me.a, {
                                            label: "Sign Up"
                                        })]
                                    })
                                }), 0 === u && Object(_.jsx)(ve, {
                                    handleClose: s
                                }), 1 === u && Object(_.jsx)(xe, {
                                    handleClose: s
                                }), Object(_.jsxs)(Oe.a, {
                                    className: e.google,
                                    children: [Object(_.jsx)("span", {
                                        children: "OR"
                                    }), Object(_.jsx)(ke.a, {
                                        style: {
                                            width: "100%",
                                            outline: "none"
                                        },
                                        onClick: function() {
                                            Object(k.f)(N, j).then((function(e) {
                                                i({
                                                    open: !0,
                                                    message: "Sign Up Successful. Welcome ".concat(e.user.email),
                                                    type: "success"
                                                }), s()
                                            })).catch((function(e) {
                                                i({
                                                    open: !0,
                                                    message: e.message,
                                                    type: "error"
                                                })
                                            }))
                                        }
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
            var Se = n(69),
                De = n(505),
                Ne = n(504),
                Ee = n(207),
                _e = Object(s.a)({
                    container: {
                        width: 350,
                        padding: 25,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "monospace"
                    },
                    profile: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        height: "92%"
                    },
                    logout: {
                        height: "8%",
                        width: "100%",
                        backgroundColor: "#EEBC1D",
                        marginTop: 20
                    },
                    picture: {
                        width: 200,
                        height: 200,
                        cursor: "pointer",
                        backgroundColor: "#EEBC1D",
                        objectFit: "contain"
                    },
                    watchlist: {
                        flex: 1,
                        width: "100%",
                        backgroundColor: "grey",
                        borderRadius: 10,
                        padding: 15,
                        paddingTop: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 12,
                        overflowY: "scroll"
                    },
                    coin: {
                        padding: 10,
                        borderRadius: 5,
                        color: "black",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#EEBC1D",
                        boxShadow: "0 0 3px black"
                    }
                });

            function Ie() {
                var e = _e(),
                    t = r.a.useState({
                        right: !1
                    }),
                    n = Object(p.a)(t, 2),
                    a = n[0],
                    c = n[1],
                    i = M(),
                    s = i.user,
                    o = i.setAlert,
                    l = i.watchlist,
                    u = i.coins,
                    b = i.symbol;
                console.log(l, u);
                var h = function(e, t) {
                        return function(n) {
                            ("keydown" !== n.type || "Tab" !== n.key && "Shift" !== n.key) && c(Object(Se.a)(Object(Se.a)({}, a), {}, Object(Q.a)({}, e, t)))
                        }
                    },
                    f = function() {
                        Object(k.g)(N), o({
                            open: !0,
                            type: "success",
                            message: "Logout Successfull !"
                        }), h()
                    },
                    g = function() {
                        var e = Object(j.a)(d.a.mark((function e(t) {
                            var n;
                            return d.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = Object(w.a)(E, "watchlist", s.uid), e.prev = 1, e.next = 4, Object(w.d)(n, {
                                            coins: l.filter((function(e) {
                                                return e !== (null === t || void 0 === t ? void 0 : t.id)
                                            }))
                                        }, {
                                            merge: !0
                                        });
                                    case 4:
                                        o({
                                            open: !0,
                                            message: "".concat(t.name, " Removed from the Watchlist !"),
                                            type: "success"
                                        }), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), o({
                                            open: !0,
                                            message: e.t0.message,
                                            type: "error"
                                        });
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 7]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return Object(_.jsx)("div", {
                    children: ["right"].map((function(t) {
                        return Object(_.jsxs)(r.a.Fragment, {
                            children: [Object(_.jsx)(Ne.a, {
                                onClick: h(t, !0),
                                style: {
                                    height: 38,
                                    width: 38,
                                    marginLeft: 15,
                                    cursor: "pointer",
                                    backgroundColor: "#EEBC1D"
                                },
                                src: s.photoURL,
                                alt: s.displayName || s.email
                            }), Object(_.jsx)(De.a, {
                                anchor: t,
                                open: a[t],
                                onClose: h(t, !1),
                                children: Object(_.jsxs)("div", {
                                    className: e.container,
                                    children: [Object(_.jsxs)("div", {
                                        className: e.profile,
                                        children: [Object(_.jsx)(Ne.a, {
                                            className: e.picture,
                                            src: s.photoURL,
                                            alt: s.displayName || s.email
                                        }), Object(_.jsx)("span", {
                                            style: {
                                                width: "100%",
                                                fontSize: 25,
                                                textAlign: "center",
                                                fontWeight: "bolder",
                                                wordWrap: "break-word"
                                            },
                                            children: s.displayName || s.email
                                        }), Object(_.jsxs)("div", {
                                            className: e.watchlist,
                                            children: [Object(_.jsx)("span", {
                                                style: {
                                                    fontSize: 15,
                                                    textShadow: "0 0 5px black"
                                                },
                                                children: "Watchlist"
                                            }), u.map((function(t) {
                                                return l.includes(t.id) ? Object(_.jsxs)("div", {
                                                    className: e.coin,
                                                    children: [Object(_.jsx)("span", {
                                                        children: t.name
                                                    }), Object(_.jsxs)("span", {
                                                        style: {
                                                            display: "flex",
                                                            gap: 8
                                                        },
                                                        children: [b, " ", Z(t.current_price.toFixed(2)), Object(_.jsx)(Ee.a, {
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            fontSize: "16",
                                                            onClick: function() {
                                                                return g(t)
                                                            }
                                                        })]
                                                    })]
                                                }) : Object(_.jsx)(_.Fragment, {})
                                            }))]
                                        })]
                                    }), Object(_.jsx)(te.a, {
                                        variant: "contained",
                                        className: e.logout,
                                        onClick: f,
                                        children: "Log Out"
                                    })]
                                })
                            })]
                        }, t)
                    }))
                })
            }
            var Fe = Object(s.a)((function(e) {
                    return {
                        title: {
                            flex: 1,
                            color: "gold",
                            fontFamily: "Montserrat",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }
                    }
                })),
                Me = Object(B.a)({
                    palette: {
                        primary: {
                            main: "#fff"
                        },
                        type: "dark"
                    }
                });
            var We = function() {
                    var e = Fe(),
                        t = M(),
                        n = t.currency,
                        a = t.setCurrency,
                        r = t.user,
                        c = Object(G.e)();
                    return Object(_.jsx)(A.a, {
                        theme: Me,
                        children: Object(_.jsx)(ue.a, {
                            color: "transparent",
                            position: "static",
                            children: Object(_.jsx)(o.a, {
                                children: Object(_.jsxs)(de.a, {
                                    children: [Object(_.jsx)(l.a, {
                                        onClick: function() {
                                            return c.push("/")
                                        },
                                        variant: "h6",
                                        className: e.title,
                                        children: "Crypto Hunter"
                                    }), Object(_.jsxs)(je.a, {
                                        variant: "outlined",
                                        labelId: "demo-simple-select-label",
                                        id: "demo-simple-select",
                                        value: n,
                                        style: {
                                            width: 85,
                                            height: 40
                                        },
                                        onChange: function(e) {
                                            return a(e.target.value)
                                        },
                                        children: [Object(_.jsx)(pe.a, {
                                            value: "USD",
                                            children: "USD"
                                        }), Object(_.jsx)(pe.a, {
                                            value: "INR",
                                            children: "INR"
                                        })]
                                    }), r ? Object(_.jsx)(Ie, {}) : Object(_.jsx)(we, {})]
                                })
                            })
                        })
                    })
                },
                Be = n(502),
                Ae = n(498),
                Pe = function() {
                    var e = M(),
                        t = e.alert,
                        n = e.setAlert,
                        a = function(e, t) {
                            "clickaway" !== t && n({
                                open: !1
                            })
                        };
                    return Object(_.jsx)(Be.a, {
                        open: t.open,
                        autoHideDuration: 3e3,
                        onClose: a,
                        children: Object(_.jsx)(Ae.a, {
                            onClose: a,
                            elevation: 10,
                            variant: "filled",
                            severity: t.type,
                            children: t.message
                        })
                    })
                },
                Re = Object(s.a)((function() {
                    return {
                        App: {
                            backgroundColor: "#14161a",
                            color: "white",
                            minHeight: "100vh"
                        }
                    }
                }));
            var Te = function() {
                var e = Re();
                return Object(_.jsxs)(m.a, {
                    children: [Object(_.jsxs)("div", {
                        className: e.App,
                        children: [Object(_.jsx)(We, {}), Object(_.jsx)(G.a, {
                            path: "/",
                            component: q,
                            exact: !0
                        }), Object(_.jsx)(G.a, {
                            path: "/coins/:id",
                            component: le,
                            exact: !0
                        })]
                    }), Object(_.jsx)(Pe, {})]
                })
            };
            n(436);
            i.a.render(Object(_.jsx)(r.a.StrictMode, {
                children: Object(_.jsx)(F, {
                    children: Object(_.jsx)(Te, {})
                })
            }), document.getElementById("root"))
        }
    },
    [
        [437, 1, 2]
    ]
]);
//# sourceMappingURL=main.19cf65d6.chunk.js.map