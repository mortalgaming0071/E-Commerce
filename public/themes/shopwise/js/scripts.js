(() => {
    function a(e) {
        return (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (a) {
                      return typeof a;
                  }
                : function (a) {
                      return a &&
                          "function" == typeof Symbol &&
                          a.constructor === Symbol &&
                          a !== Symbol.prototype
                          ? "symbol"
                          : typeof a;
                  })(e);
    }
    !(function (e) {
        "use strict";
        e(window).on("load", function () {
            setTimeout(function () {
                e(".preloader").delay(700).fadeOut(700).addClass("loaded");
            }, 800);
        }),
            e(".background_bg").each(function () {
                var o = e(this).attr("data-img-src");
                "undefined" !== a(o) &&
                    !1 !== o &&
                    e(this).css("background-image", "url(" + o + ")");
            }),
            e(function () {
                function a(a, o) {
                    a.each(function () {
                        var a = e(this),
                            t = a.attr("data-animation"),
                            s = a.attr("data-animation-delay");
                        a.css({
                            "-webkit-animation-delay": s,
                            "-moz-animation-delay": s,
                            "animation-delay": s,
                            opacity: 0,
                        }),
                            (o || a).waypoint(
                                function () {
                                    a.addClass("animated").css("opacity", "1"),
                                        a.addClass("animated").addClass(t);
                                },
                                { triggerOnce: !0, offset: "90%" }
                            );
                    });
                }
                a(e(".animation")),
                    a(
                        e(".staggered-animation"),
                        e(".staggered-animation-wrap")
                    );
            }),
            e(window).on("scroll", function () {
                e(window).scrollTop() >= 150
                    ? e("header.fixed-top").addClass("nav-fixed")
                    : e("header.fixed-top").removeClass("nav-fixed");
            }),
            e(document).on("ready", function () {
                e(".dropdown-menu a.dropdown-toggler").on("click", function () {
                    return (
                        e(this).next().hasClass("show") ||
                            e(this)
                                .parents(".dropdown-menu")
                                .first()
                                .find(".show")
                                .removeClass("show"),
                        e(this).next(".dropdown-menu").toggleClass("show"),
                        e(this).parent("li").toggleClass("show"),
                        e(this)
                            .parents("li.nav-item.dropdown.show")
                            .on("hidden.bs.dropdown", function () {
                                e(".dropdown-menu .show").removeClass("show");
                            }),
                        !1
                    );
                });
            });
        var o = e(".header_wrap"),
            t = o.find(".navbar-collapse ul li a.page-scroll");
        e.each(t, function () {
            e(this).on("click", function () {
                o.find(".navbar-collapse").collapse("hide"),
                    e("header").removeClass("active");
            });
        }),
            e(".navbar-toggler").on("click", function () {
                e("header").toggleClass("active"),
                    e(".search-overlay").hasClass("open") &&
                        (e(".search-overlay").removeClass("open"),
                        e(".search_trigger").removeClass("open"));
            }),
            e(document).on("ready", function () {
                !e(".header_wrap").hasClass("fixed-top") ||
                    e(".header_wrap").hasClass("transparent_header") ||
                    e(".header_wrap").hasClass("no-sticky") ||
                    e(".header_wrap").before(
                        '<div class="header_sticky_bar d-none"></div>'
                    );
            }),
            e(window).on("scroll", function () {
                e(window).scrollTop() >= 150
                    ? (e(".header_sticky_bar").removeClass("d-none"),
                      e("header.no-sticky").removeClass("nav-fixed"))
                    : e(".header_sticky_bar").addClass("d-none");
            });
        var s = function () {
            var a = e(".header_wrap").height();
            e(".header_sticky_bar").css({ height: a });
        };
        e(window).on("load", function () {
            s();
        }),
            e(window).on("resize", function () {
                s();
            }),
            e(".sidetoggle").on("click", function () {
                e(this).addClass("open"),
                    e("body").addClass("sidetoggle_active"),
                    e(".sidebar_menu").addClass("active"),
                    e("body").append(
                        '<div id="header-overlay" class="header-overlay"></div>'
                    );
            }),
            e(document).on(
                "click",
                "#header-overlay, .sidemenu_close",
                function () {
                    return (
                        e(".sidetoggle").removeClass("open"),
                        e("body").removeClass("sidetoggle_active"),
                        e(".sidebar_menu").removeClass("active"),
                        e("#header-overlay").fadeOut("3000", function () {
                            e("#header-overlay").remove();
                        }),
                        !1
                    );
                }
            ),
            e(".categories_btn").on("click", function () {
                e(".side_navbar_toggler").attr("aria-expanded", "false"),
                    e("#navbarSidetoggle").removeClass("show");
            }),
            e(".side_navbar_toggler").on("click", function () {
                e(".categories_btn").attr("aria-expanded", "false"),
                    e("#navCatContent").removeClass("show");
            }),
            e(".pr_search_trigger").on("click", function () {
                e(this).toggleClass("show"),
                    e(".product_search_form").toggleClass("show");
            });
        var n = !0;
        e("html").on("click", function () {
            n &&
                (e(".categories_btn").addClass("collapsed"),
                e(".categories_btn,.side_navbar_toggler").attr(
                    "aria-expanded",
                    "false"
                ),
                e("#navCatContent,#navbarSidetoggle").removeClass("show")),
                (n = !0);
        }),
            e(
                ".categories_btn,#navCatContent,#navbarSidetoggle .navbar-nav,.side_navbar_toggler"
            ).on("click", function () {
                n = !1;
            });
        var i = e(".top-header").innerHeight(),
            r = e(".header_wrap").innerHeight() - i - 20;
        e('a.page-scroll[href*="#"]:not([href="#"])').on("click", function () {
            if (
                (e("a.page-scroll.active").removeClass("active"),
                e(this).closest(".page-scroll").addClass("active"),
                location.pathname.replace(/^\//, "") ===
                    this.pathname.replace(/^\//, "") &&
                    location.hostname === this.hostname)
            ) {
                var a = e(this.hash),
                    o = e(this).data("speed") || 800;
                (a = a.length ? a : e("[name=" + this.hash.slice(1) + "]"))
                    .length &&
                    (event.preventDefault(),
                    e("html, body").animate(
                        { scrollTop: a.offset().top - r },
                        o
                    ));
            }
        }),
            e(window).on("scroll", function () {
                var a,
                    o = e(".header_wrap").find("a.page-scroll"),
                    t = e(".header_wrap").innerHeight() + 20,
                    s = o.map(function () {
                        var a = e(e(this).attr("href"));
                        if (a.length) return a;
                    }),
                    n = e(this).scrollTop() + t,
                    i = s.map(function () {
                        if (e(this).offset().top < n) return this;
                    }),
                    r = (i = i[i.length - 1]) && i.length ? i[0].id : "";
                a !== r &&
                    ((a = r),
                    o
                        .closest(".page-scroll")
                        .removeClass("active")
                        .end()
                        .filter("[href='#" + r + "']")
                        .closest(".page-scroll")
                        .addClass("active"));
            }),
            e(".more_slide_open").slideUp(),
            e(".more_categories").on("click", function () {
                e(this).toggleClass("show"),
                    e(".more_slide_open").slideToggle();
            }),
            e(".close-search").on("click", function () {
                e(".search_wrap,.search_overlay").removeClass("open"),
                    e("body").removeClass("search_open");
            });
        var l = !0;
        function c() {
            e(".carousel_slider").each(function () {
                var a = e(this);
                a.owlCarousel({
                    rtl: "rtl" === e("body").prop("dir"),
                    dots: a.data("dots"),
                    loop: a.data("loop"),
                    items: a.data("items"),
                    margin: a.data("margin"),
                    mouseDrag: a.data("mouse-drag"),
                    touchDrag: a.data("touch-drag"),
                    autoHeight: a.data("autoheight"),
                    center: a.data("center"),
                    nav: a.data("nav"),
                    rewind: a.data("rewind"),
                    navText: [
                        '<i class="ion-ios-arrow-left"></i>',
                        '<i class="ion-ios-arrow-right"></i>',
                    ],
                    autoplay: a.data("autoplay"),
                    animateIn: a.data("animate-in"),
                    animateOut: a.data("animate-out"),
                    autoplayTimeout: a.data("autoplay-timeout"),
                    smartSpeed: a.data("smart-speed"),
                    responsive: a.data("responsive"),
                });
            });
        }
        function d() {
            e(".slick_slider").each(function () {
                var a = e(this);
                a.slick({
                    rtl: "rtl" === e("body").prop("dir"),
                    arrows: a.data("arrows"),
                    dots: a.data("dots"),
                    infinite: a.data("infinite"),
                    centerMode: a.data("center-mode"),
                    vertical: a.data("vertical"),
                    fade: a.data("fade"),
                    cssEase: a.data("css-ease"),
                    autoplay: a.data("autoplay"),
                    verticalSwiping: a.data("vertical-swiping"),
                    autoplaySpeed: a.data("autoplay-speed"),
                    speed: a.data("speed"),
                    pauseOnHover: a.data("pause-on-hover"),
                    draggable: a.data("draggable"),
                    slidesToShow: a.data("slides-to-show"),
                    slidesToScroll: a.data("slides-to-scroll"),
                    asNavFor: a.data("as-nav-for"),
                    focusOnSelect: a.data("focus-on-select"),
                    responsive: a.data("responsive"),
                });
            });
        }
        e(".search_wrap").after('<div class="search_overlay"></div>'),
            e(".search_trigger").on("click", function () {
                e(".search_wrap,.search_overlay").toggleClass("open"),
                    e("body").toggleClass("search_open"),
                    (l = !1),
                    e(".navbar-collapse").hasClass("show") &&
                        (e(".navbar-collapse").removeClass("show"),
                        e(".navbar-toggler").addClass("collapsed"),
                        e(".navbar-toggler").attr("aria-expanded", !1));
            }),
            e(".search_wrap form").on("click", function () {
                l = !1;
            }),
            e("html").on("click", function () {
                l &&
                    (e("body").removeClass("open"),
                    e(".search_wrap,.search_overlay").removeClass("open"),
                    e("body").removeClass("search_open")),
                    (l = !0);
            }),
            e(window).on("scroll", function () {
                e(this).scrollTop() > 150
                    ? e(".scrollup").fadeIn()
                    : e(".scrollup").fadeOut();
            }),
            e(".scrollup").on("click", function (a) {
                return (
                    a.preventDefault(),
                    e("html, body").animate({ scrollTop: 0 }, 600),
                    !1
                );
            }),
            e(window).on("load", function () {
                var a = e(".grid_container");
                if (a.length) {
                    var o = ".grid_filter > li > a";
                    a.length > 0 &&
                        a.imagesLoaded(function () {
                            a.hasClass("masonry")
                                ? a.isotope({
                                      itemSelector: ".grid_item",
                                      percentPosition: !0,
                                      layoutMode: "masonry",
                                      masonry: { columnWidth: ".grid-sizer" },
                                  })
                                : a.isotope({
                                      itemSelector: ".grid_item",
                                      percentPosition: !0,
                                      layoutMode: "fitRows",
                                  });
                        }),
                        e(document).on("click", o, function () {
                            e(o).removeClass("current"),
                                e(this).addClass("current");
                            var t = e(this).data("filter");
                            return (
                                a.hasClass("masonry")
                                    ? a.isotope({
                                          itemSelector: ".grid_item",
                                          layoutMode: "masonry",
                                          masonry: {
                                              columnWidth: ".grid_item",
                                          },
                                          filter: t,
                                      })
                                    : a.isotope({
                                          itemSelector: ".grid_item",
                                          layoutMode: "fitRows",
                                          filter: t,
                                      }),
                                !1
                            );
                        }),
                        e(".portfolio_filter").on("change", function () {
                            a.isotope({ filter: this.value });
                        }),
                        e(window).on("resize", function () {
                            setTimeout(function () {
                                a
                                    .find(".grid_item")
                                    .removeClass("animation")
                                    .removeClass("animated"),
                                    a.isotope("layout");
                            }, 300);
                        });
                }
            }),
            e(".link_container").each(function () {
                e(this).magnificPopup({
                    delegate: ".image_popup",
                    type: "image",
                    mainClass: "mfp-zoom-in",
                    removalDelay: 500,
                    gallery: { enabled: !0 },
                });
            }),
            e(document).ready(function () {
                c(), d();
            }),
            e("#submitButton").on("click", function (a) {
                a.preventDefault();
                var o = e("form").serialize();
                e.ajax({
                    type: "POST",
                    dataType: "json",
                    url: "contact.php",
                    data: o,
                    success: function (a) {
                        "error" === a.type
                            ? (e("#alert-msg").removeClass(
                                  "alert, alert-success"
                              ),
                              e("#alert-msg").addClass("alert, alert-danger"))
                            : (e("#alert-msg").addClass("alert, alert-success"),
                              e("#alert-msg").removeClass(
                                  "alert, alert-danger"
                              ),
                              e("#first-name").val("Enter Name"),
                              e("#email").val("Enter Email"),
                              e("#phone").val("Enter Phone Number"),
                              e("#subject").val("Enter Subject"),
                              e("#description").val("Enter Message")),
                            e("#alert-msg").html(a.msg),
                            e("#alert-msg").show();
                    },
                    error: function (a, e) {
                        alert(e);
                    },
                });
            }),
            e(".content-popup").magnificPopup({
                type: "inline",
                preloader: !0,
                mainClass: "mfp-zoom-in",
            }),
            e(".image_gallery").each(function () {
                e(this).magnificPopup({
                    delegate: "a",
                    type: "image",
                    gallery: { enabled: !0 },
                });
            }),
            e(".popup-ajax").magnificPopup({
                type: "ajax",
                callbacks: {
                    ajaxContentAdded: function () {
                        c(), d();
                    },
                },
            }),
            e(".video_popup, .iframe_popup").magnificPopup({
                type: "iframe",
                removalDelay: 160,
                mainClass: "mfp-zoom-in",
                preloader: !1,
                fixedContentPos: !1,
            }),
            e("select").length &&
                e.each(e("select"), function (a, o) {
                    var t = e(o);
                    "" === t.val() && t.addClass("first_null"),
                        t.val() || t.addClass("not_chosen"),
                        t.on("change", function () {
                            t.val()
                                ? t.removeClass("not_chosen")
                                : t.addClass("not_chosen");
                        });
                }),
            e(".fit-videos").length > 0 &&
                e(".fit-videos").fitVids({
                    customSelector: "iframe[src^='https://w.soundcloud.com']",
                }),
            e(".custome_select").length > 0 &&
                e(document).on("ready", function () {
                    e(".custome_select").msDropdown();
                }),
            e(".countdown_time").each(function () {
                var a = e(this).data("time");
                e(this).countdown(a, function (a) {
                    e(this).html(
                        a.strftime(
                            '<div class="countdown_box"><div class="countdown-wrap"><span class="countdown days">%D </span><span class="cd_text">Days</span></div></div><div class="countdown_box"><div class="countdown-wrap"><span class="countdown hours">%H</span><span class="cd_text">Hours</span></div></div><div class="countdown_box"><div class="countdown-wrap"><span class="countdown minutes">%M</span><span class="cd_text">Minutes</span></div></div><div class="countdown_box"><div class="countdown-wrap"><span class="countdown seconds">%S</span><span class="cd_text">Seconds</span></div></div>'
                        )
                    );
                });
            }),
            e(document).on("click", ".shorting_icon", function () {
                e(this).hasClass("grid")
                    ? (e(".shop_container")
                          .removeClass("list")
                          .addClass("grid"),
                      e(this)
                          .addClass("active")
                          .siblings()
                          .removeClass("active"))
                    : e(this).hasClass("list") &&
                      (e(".shop_container")
                          .removeClass("grid")
                          .addClass("list"),
                      e(this)
                          .addClass("active")
                          .siblings()
                          .removeClass("active")),
                    e(".shop_container").append(
                        '<div class="loading_pr"><div class="mfp-preloader"></div></div>'
                    ),
                    setTimeout(function () {
                        e(".loading_pr").remove();
                    }, 500);
            }),
            e(function () {
                e('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
            }),
            e(function () {
                e('[data-toggle="popover"]').popover();
            }),
            e(".product_color_switch span").each(function () {
                var a = e(this).attr("data-color");
                e(this).css("background-color", a);
            }),
            e(".product_color_switch span,.product_size_switch span").on(
                "click",
                function () {
                    e(this)
                        .siblings(this)
                        .removeClass("active")
                        .end()
                        .addClass("active");
                }
            );
        e.magnificPopup.defaults.callbacks = {
            open: function () {
                e("body").addClass("zoom_image");
            },
            close: function () {
                setTimeout(function () {
                    e("body")
                        .removeClass("zoom_image")
                        .removeClass("zoom_gallery_image"),
                        e(".zoomContainer:last-child").remove(),
                        e(".zoomContainer").slice(1).remove();
                }, 100);
            },
        };
        var p = e("#pr_item_gallery");
        p.magnificPopup({
            delegate: "a",
            type: "image",
            gallery: { enabled: !0 },
            callbacks: {
                elementParse: function (a) {
                    a.src = a.el.attr("data-zoom-image");
                },
            },
        }),
            e(".product_img_zoom").on("click", function () {
                var a = e("#pr_item_gallery a").attr("data-zoom-image");
                e("body").addClass("zoom_gallery_image"),
                    e("#pr_item_gallery .item").each(function () {
                        if (
                            a ==
                            e(this)
                                .find(".product_gallery_item")
                                .attr("data-zoom-image")
                        )
                            return p.magnificPopup("open", e(this).index());
                    });
            }),
            e(".plus").on("click", function () {
                e(this).prev().val() &&
                    e(this)
                        .prev()
                        .val(+e(this).prev().val() + 1);
            }),
            e(".minus").on("click", function () {
                e(this).next().val() > 1 &&
                    e(this).next().val() > 1 &&
                    e(this)
                        .next()
                        .val(+e(this).next().val() - 1);
            }),
            e(document).ready(function () {
                function a(a, e, o, t) {
                    var s = isFinite(+a) ? +a : 0,
                        n = isFinite(+e) ? Math.abs(e) : 0,
                        i = void 0 === t ? "," : t,
                        r = void 0 === o ? "." : o,
                        l = (
                            n
                                ? (function (a, e) {
                                      var o = Math.pow(10, e);
                                      return Math.round(a * o) / o;
                                  })(s, n)
                                : Math.round(s)
                        )
                            .toString()
                            .split(".");
                    return (
                        l[0].length > 3 &&
                            (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, i)),
                        (l[1] || "").length < n &&
                            ((l[1] = l[1] || ""),
                            (l[1] += new Array(n - l[1].length + 1).join("0"))),
                        l.join(r)
                    );
                }
                var o = e("#price_filter");
                if (o.length) {
                    var t = o.data("min-value"),
                        s = o.data("max-value"),
                        n = o.data("price-sign"),
                        i = parseFloat(
                            e("div[data-current-exchange-rate]").data(
                                "current-exchange-rate"
                            )
                        ),
                        r = e("div[data-is-prefix-symbol]").data(
                            "is-prefix-symbol"
                        );
                    o.slider({
                        isRTL: "rtl" === e("body").prop("dir"),
                        range: !0,
                        min: o.data("min"),
                        max: o.data("max"),
                        values: [t, s],
                        slide: function (o, t) {
                            var s = a(t.values[0] * i),
                                l = a(t.values[1] * i);
                            "1" == r
                                ? ((s = n + s), (l = n + l))
                                : ((s += n), (l += n)),
                                e("#flt_price").html(s + " - " + l),
                                e("#price_first").val(t.values[0]),
                                e("#price_second").val(t.values[1]);
                        },
                        stop: function () {
                            e("#price_filter").closest("form").submit();
                        },
                    });
                    var l = a(o.slider("values", 0) * i),
                        c = a(o.slider("values", 1) * i);
                    "1" == r
                        ? ((l = n + l), (c = n + c))
                        : ((l += n), (c += n)),
                        e("#flt_price").html(l + " - " + c);
                }
            }),
            e(document).ready(function () {
                e(".star_rating span").on("click", function () {
                    for (
                        var a = parseFloat(e(this).data("value"), 10),
                            o = e(this).parent().children(".star_rating span"),
                            t = 0;
                        t < o.length;
                        t++
                    )
                        e(o[t]).removeClass("selected");
                    for (t = 0; t < a; t++) e(o[t]).addClass("selected");
                    e(this).closest("form").find("input[name=star]").val(a);
                });
            }),
            e(document).ready(function () {
                var a, o;
                (a = e("#product_img")),
                    (o = !1),
                    1 == e(a).data("zoom-enable") &&
                        ((o = !o)
                            ? e(a).length > 0 &&
                              e(a).elevateZoom({
                                  cursor: "crosshair",
                                  easing: !0,
                                  gallery: "pr_item_gallery",
                                  zoomType: "inner",
                                  galleryActiveClass: "active",
                              })
                            : (e.removeData(a, "elevateZoom"),
                              e(".zoomContainer:last-child").remove()));
            });
    })(jQuery);
})();
