"use strict";

var m = { "margin-left": 0, "margin-right": 0, "margin-top": 0, "margin-bottom": 0, "padding": 0 };
var heading = { "margin-top": 0, "margin-bottom": 15, "padding": 0, 'font-weight': 300 };
var max = 900;
var wrapper = { "max-width": max, "margin": "0 auto" };
var verticalAlign = { "position": "relative", "top": "50%", "transform": "translateY(-50%)" };
var _button = { "background": "none",
	"border-width": "1px",
	"border-style": "solid",
	"border-color": "currentColor",
	"padding": "10px 15px",
	"text-decoration": "none",
	"font-size": 12,
	"letter-spacing": 1,
	"text-transform": "uppercase",
	"font-weight": "normal",
	"cursor": "pointer" };
var clearfix = { "&::after": {
		"content": "",
		"display": "table",
		"clear": "both"
	}
};
var rand_rgba = function rand_rgba() {
	return "rgba(" + [255, 255, 255].map(function (x) {
		return Math.round(Math.random() * x);
	}).join() + ", 1)";
};
var rand_angle = function rand_angle() {
	return Math.round(Math.random() * 180 - 90);
};

var prop = function prop(sel, a, b, x, y) {
	if (sel <= a) return x;
	if (sel >= b) return y;
	var ratio = (sel - a) / (b - a);
	return x + (y - x) * ratio;
};

var p = new Plato();
var start = Date.now();

var lastScroll = $(window).scrollTop();
var d = new Descartes({
	"html": {
		"_mixins": m,
		"font-family": "Source Sans Pro, Helvetica",
		"color": "#333",
		"font-size": 16,
		"font-weight": 300,
		"height": "100%",
		"body": {
			"_mixins": m,
			"_listeners": [[window, "click"], ["#bgChange", "touchstart"]],
			"height": "100%",
			"background": function background() {
				return 'linear-gradient(' + rand_angle().toString() + 'deg,' + rand_rgba() + ',' + rand_rgba() + ')' + ' center center fixed no-repeat';
			},
			"pre": {
				"font-size": 14,
				"code": {
					"font-family": "Anonymous Pro"
				}
			},
			".row": { _mixins: p.row() },
			".col1": { _mixins: p.col(1) },
			".col2": { _mixins: p.col(2) },
			".col3": { _mixins: p.col(3) },
			".col4": { _mixins: p.col(4) },
			".col5": { _mixins: p.col(5) },
			".col6": { _mixins: p.col(6) },
			".col7": { _mixins: p.col(7) },
			".col8": { _mixins: p.col(8) },
			".col9": { _mixins: p.col(9) },
			".col10": { _mixins: p.col(10) },
			".col11": { _mixins: p.col(11) },
			".col12": { _mixins: p.col(12) },
			".table-row": { _mixins: p.tableRow() },
			".table-col1": { _mixins: p.tableCol(1) },
			".table-col2": { _mixins: p.tableCol(2) },
			".table-col3": { _mixins: p.tableCol(3) },
			".table-col4": { _mixins: p.tableCol(4) },
			".table-col5": { _mixins: p.tableCol(5) },
			".table-col6": { _mixins: p.tableCol(6) },
			".table-col7": { _mixins: p.tableCol(7) },
			".table-col8": { _mixins: p.tableCol(8) },
			".table-col9": { _mixins: p.tableCol(9) },
			".table-col10": { _mixins: p.tableCol(10) },
			".table-col11": { _mixins: p.tableCol(11) },
			".table-col12": { _mixins: p.tableCol(12) },
			"a": {
				"color": "currentColor"
			},
			"nav": {
				"_listeners": [[window, "scroll"], [window, "resize"], [window, 'click'], [window, 'touchstart']],
				"text-align": "center",
				"position": "fixed",
				"width": "100%",
				"overflow": "hidden",
				"box-sizing": "border-box",
				"transition": "all 0.5s ease",
				"z-index": 9999,
				"height": function height(_) {
					if ($(window).width() < p.mobileBreak) return "auto";
					var pos = $(window).scrollTop();
					if (pos > $(window).height() * 0.9 - 50 && pos > lastScroll) {
						lastScroll = pos;
						return 0;
					}
					lastScroll = pos;
					return 50;
				},
				"background": function background(_) {
					if ($(window).width() < p.mobileBreak) {
						return "rgba(255,255,255,0.9)";
					}
					return p.rgba(255, 255, 255, p.scale($(window).scrollTop(), $(window).height() / 2, $(window).height(), 0, 0.95));
				},
				"box-shadow": function boxShadow(_) {
					return "0 0 15px " + p.rgba(100, 100, 100, p.scale($(window).scrollTop(), $(window).height() / 2, $(window).height(), 0, 0.2));
				},
				".options": {
					"_listeners": [[window, "scroll"], [window, "resize"], [window, 'click'], [window, 'touchstart']],
					"display": function display(_) {
						if ($(window).width() < p.mobileBreak && !$("nav").hasClass("show")) return "none";
						return "block";
					}
				},
				"a": {
					"_listeners": [[window, "scroll"], [window, "resize"]],
					"text-decoration": "none",
					"display": "block",
					"margin": "15px 0",
					"color": function color(_) {
						if ($(window).width() < p.mobileBreak) return "#333";
						var v = p.scale($(window).scrollTop(), $(window).height() / 2, $(window).height(), 255, 50);
						return p.rgba(v, v, v, 1);
					}
				}
			},
			".button": {
				"_mixins": _button,
				"&.primary": {
					"_listeners": [[window, "click"]],
					"background": "rgba(255,255,255, 0.25)"
				}
			},
			"button": {
				"_mixins": _button
			},
			"img.roundImage": {
				"border-radius": function borderRadius(_) {
					return _.width / 2;
				},
				"overflow": "hidden",
				"margin-top": 10
			},
			".wrapper": {
				"_mixins": wrapper
			},
			"header": {
				"_mixins": m,
				"height": "90%",
				"color": "#fff",
				"div.content": {
					"_listeners": [[window, "scroll"]],
					"_mixins": [verticalAlign, wrapper],
					"opacity": function opacity() {
						return prop($(window).scrollTop(), 150, 350, 1, 0);
					},
					"text-align": "center",
					"h1": {
						"_listeners": [[window, "resize"]],
						"_mixins": heading,
						"font-size": function fontSize() {
							return p.scale($(window).width(), p.mobileBreak, p.wrapper, 72, 120);
						},
						"font-weight": 100,
						"line-height": function lineHeight() {
							return p.scale($(window).width(), p.mobileBreak, p.wrapper, 60, 110);
						},
						"margin-bottom": 0
					},
					"h2": {
						"_listeners": [[window, "resize"]],
						"_mixins": heading,
						"margin-bottom": 0,
						"font-size": function fontSize() {
							return p.scale($(window).width(), p.mobileBreak, p.wrapper, 24, 36);
						}
					},
					".subtitle": {
						"_listeners": [[window, "resize"]],
						"_mixins": heading,
						"margin-bottom": 15,
						"font-size": function fontSize() {
							return p.scale($(window).width(), p.mobileBreak, p.wrapper, 16, 20);
						}
					},
					".shares": {
						"_listeners": [[window, "resize"]],
						"margin-top": 15,
						"font-size": 14
					},
					"pre": {
						"width": "100%",
						"code": {
							"text-align": "left",
							"font-size": 16,
							"font-family": "Anonymous Pro",
							"padding": 25,
							"background": "rgba(0,0,0,0.75)"
						}
					},
					"button": {
						"_mixins": _button,
						"color": "#fff"
					}
				}
			},
			"section": {
				"_listeners": [[window, "resize"]],
				"padding": function padding() {
					return window.innerWidth >= p.mobileBreak ? "50px 0" : "50px " + p.fixedGutter + "px";
				},
				"box-sizing": "border-box",
				"&.plain": {
					"background": "none",
					"color": "#fff",
					"text-align": "center",
					".row": {
						"_mixins": [wrapper, p.clearfix()],
						"a.button": {
							"color": "#fff"
						}
					}
				},
				"&.features": {
					"color": "#fff",
					"background": "#474949",
					"margin-top": 25,
					"pre": {
						"border": "1px dashed #666"
					},
					".table-row": {
						"_mixins": [p.tableRow(), wrapper],
						".fa": {
							"padding-right": 10
						},
						".table-col12": {
							"font-size": 20
						},
						".table-col5": {
							"vertical-align": "middle",
							"padding-right": 25
						},
						".table-col7": {
							"vertical-align": "middle"
						}
					}
				},
				"&.offset": {
					"width": "100%",
					"background": "rgba(255,255,255,0.75)",
					"position": "relative",
					"min-height": "100%",
					".row": {
						"_mixins": [p.row(), wrapper],
						"box-sizing": "border-box",
						"font-size": 20
					},
					".info-row": {
						"_mixins": [p.tableRow()],
						"width": "100%",
						".info-col3": {
							"_mixins": p.tableCol(3),
							"vertical-align": "middle",
							"text-align": "right",
							".fa": {
								"padding-right": 25
							},
							"img": {
								"_listeners": [[window, 'resize']],
								"display": function display() {
									return $(window).width() >= p.mobileBreak ? "inline-block" : "none";
								},
								"width": 25,
								"padding-right": 25
							}
						},
						".info-col9": {
							"_mixins": p.tableCol(9),
							"vertical-align": "middle",
							"text-align": "left",
							"padding-bottom": 15,
							"h3": {
								"font-weight": 100,
								"font-size": 25
							},
							"p": {
								"margin": 0,
								"span": {
									"font-size": 14
								}
							}
						}
					},
					".table-row": {
						"_listeners": [[window, 'resize']],
						"_mixins": [p.tableRow(), wrapper],
						"min-height": function minHeight() {
							return window.innerHeight;
						},
						".table-col5": {
							"_mixins": p.tableCol(5),
							"vertical-align": "middle",
							"padding": "0 25px"
						},
						".table-col7": {
							"_mixins": p.tableCol(7),
							"vertical-align": "middle"
						}
					}
				},
				".button": {
					"_mixins": _button,
					"color": "#333"
				},
				"h3": {
					"_mixins": heading,
					"font-size": 36,
					"margin-bottom": 0
				},
				"h4": {
					"_mixins": heading,
					"font-size": 24,
					"margin-bottom": 0
				}
			}
		}
	}
});
var time = Date.now() - start;
document.getElementById("time").innerHTML = time.toString();
if (time > 250) {
	document.getElementById("disclaimer").innerHTML = ' Okay, well, not so fast this time. Try reloading or take a look at how it might get faster <a href="https://github.com/JonHMChan/descartes/issues/26" target="_blank">in this open issue.</a>';
}
$("#mobileMenu").click(function () {
	$("nav").toggleClass("show");
	$("#mobileMenu a.button").html($("nav").hasClass("show") ? "Close Menu" : "Show Menu");
});

$(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});

new Descartes({
"footer-color": {
    "_listeners": [[window, click]],
    "font-family": "Helvetica",
    "font-size": function() {
        return 16 + Math.round(Math.random() * 42);
    }
}
})
