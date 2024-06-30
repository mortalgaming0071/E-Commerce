(() => {
    function e(e, o) {
        for (var r = 0; r < o.length; r++) {
            var n = o[r];
            (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
        }
    }
    var o = (function () {
        function o() {
            !(function (e, o) {
                if (!(e instanceof o))
                    throw new TypeError("Cannot call a class as a function");
            })(this, o);
        }
        var r, n;
        return (
            (r = o),
            (n = [
                {
                    key: "handleLogin",
                    value: function () {
                        $(".login-form").validate({
                            errorElement: "span",
                            errorClass: "help-block",
                            focusInvalid: !1,
                            rules: {
                                username: { required: !0 },
                                password: { required: !0 },
                                remember: { required: !1 },
                            },
                            messages: {
                                username: { required: "Username is required." },
                                password: { required: "Password is required." },
                            },
                            invalidHandler: function () {
                                $(".alert-danger", $(".login-form")).show();
                            },
                            highlight: function (e) {
                                $(e)
                                    .closest(".form-group")
                                    .addClass("has-error");
                            },
                            success: function (e) {
                                e
                                    .closest(".form-group")
                                    .removeClass("has-error"),
                                    e.remove();
                            },
                            errorPlacement: function (e, o) {
                                e.insertAfter(o.closest(".form-control"));
                            },
                            submitHandler: function (e) {
                                e.submit();
                            },
                        }),
                            $(".login-form input").keypress(function (e) {
                                if (13 === e.which) {
                                    var o = $(".login-form");
                                    return (
                                        o.validate().form() && o.submit(), !1
                                    );
                                }
                            });
                    },
                },
                {
                    key: "handleForgetPassword",
                    value: function () {
                        $(".forget-form").validate({
                            errorElement: "span",
                            errorClass: "help-block",
                            focusInvalid: !1,
                            ignore: "",
                            rules: { email: { required: !0, email: !0 } },
                            messages: {
                                email: { required: "Email is required." },
                            },
                            invalidHandler: function () {
                                $(".alert-danger", $(".forget-form")).show();
                            },
                            highlight: function (e) {
                                $(e)
                                    .closest(".form-group")
                                    .addClass("has-error");
                            },
                            success: function (e) {
                                e
                                    .closest(".form-group")
                                    .removeClass("has-error"),
                                    e.remove();
                            },
                            errorPlacement: function (e, o) {
                                e.insertAfter(o.closest(".form-control"));
                            },
                            submitHandler: function (e) {
                                e.submit();
                            },
                        }),
                            $(".forget-form input").keypress(function (e) {
                                if (13 === e.which)
                                    return (
                                        $(".forget-form").validate().form() &&
                                            $(".forget-form").submit(),
                                        !1
                                    );
                            });
                    },
                },
                {
                    key: "init",
                    value: function () {
                        this.handleLogin(), this.handleForgetPassword();
                    },
                },
            ]) && e(r.prototype, n),
            o
        );
    })();
    $(document).ready(function () {
        new o().init();
        var e = document.querySelector('[name="username"]'),
            r = document.querySelector('[name="email"]'),
            n = document.querySelector('[name="password"]'),
            t = document.querySelector('[name="password_confirmation"]');
        e &&
            (e.focus(),
            document.getElementById("emailGroup").classList.add("focused"),
            e.addEventListener("focusin", function () {
                document.getElementById("emailGroup").classList.add("focused");
            }),
            e.addEventListener("focusout", function () {
                document
                    .getElementById("emailGroup")
                    .classList.remove("focused");
            })),
            r &&
                (r.focus(),
                document.getElementById("emailGroup").classList.add("focused"),
                r.addEventListener("focusin", function () {
                    document
                        .getElementById("emailGroup")
                        .classList.add("focused");
                }),
                r.addEventListener("focusout", function () {
                    document
                        .getElementById("emailGroup")
                        .classList.remove("focused");
                })),
            n &&
                (n.addEventListener("focusin", function () {
                    document
                        .getElementById("passwordGroup")
                        .classList.add("focused");
                }),
                n.addEventListener("focusout", function () {
                    document
                        .getElementById("passwordGroup")
                        .classList.remove("focused");
                })),
            t &&
                (t.addEventListener("focusin", function () {
                    document
                        .getElementById("passwordConfirmationGroup")
                        .classList.add("focused");
                }),
                t.addEventListener("focusout", function () {
                    document
                        .getElementById("passwordConfirmationGroup")
                        .classList.remove("focused");
                }));
    });
})();
