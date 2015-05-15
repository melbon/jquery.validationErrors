/*
 * April 2015
 * validationErrors 1.1.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * MIT license
 */
$.fn.validationErrors = function(options) {
    return this.each(function() {
        var settings = $.extend({
            type: "inline",
            position: "after",
            keypress: false,
            ajaxPost: true,
            onSubmit: function () {}
        }, options);

        var container = this,
            $form = $(this)[0],
            errMsgs = "error-messages-block",
            errMsg = "error-message",
            errs;

        $form.addEventListener("invalid", function (e) {
            e.preventDefault();
        }, true);

        $(container).submit(function (e) {
            if (!this.checkValidity()) {
                e.preventDefault();
            }
            settings.onSubmit(this);
            if (settings.ajaxPost) {
                $form.reset();
                return false;
            }
        });

        if (settings.type == "block" && settings.position == "after") {
            $(container).append("<ul class='" + errMsgs + "'></ul>");
        }
        if (settings.type == "block" && settings.position == "before") {
            $(container).prepend("<ul class='" + errMsgs + "'></ul>");
        }

        $("[type='submit']", container).click(function () {
            var $invalidFields = $(":invalid", container),
                errs = "";

            if (settings.type === "block") {
                for (var i = 0; i < $invalidFields.length; i++) {
                    errs += "<li data-id='" + $invalidFields[i].name + "'><span>" + $invalidFields[i].name + "</span>: " + $invalidFields[i].validationMessage + "</li>";
                }
                $("." + errMsgs).html(errs);
            }
            else if (settings.type === "inline") {
                $("." + errMsg).remove();
                for (var i = 0; i < $invalidFields.length; i++) {
                    $($invalidFields[i]).parent().append("<div class='error-message'>" + $invalidFields[i].validationMessage + "</div>")
                }
            }

            if ($invalidFields.length > 0) {
                $invalidFields[0].focus();
            }
        });

        if (settings.keypress && settings.type == "inline") {
            $(":input").keyup(function () {
                $(this).parent().find("." + errMsg).remove();
                if (this.validationMessage && this.value != "") {
                    errs = "<div class='error-message'>" + this.validationMessage + "</div>";
                    $(this).parent().append(errs);
                }
                $(this).focusout(function() {
                    $(this).parent().find("." + errMsg).remove();
                });
            });
        }
    });
}