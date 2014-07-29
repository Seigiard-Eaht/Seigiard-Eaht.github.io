var initStatments = function() {
    return $.extend({}, {
        isSmartLinkConnection: false,
        isFirmwareUpdated: false,
        isDriverCardUploaded: false,
        isReminderOn: false
    });
};

var statements = initStatments(false);

var $footer = $(".app-bottombar");

var $updatesBar = $(".js-updates", $footer);

var $updatesBarButtonDC = $(".js-drivercard-update", $footer);

var $updatesBarButtonFW = $(".js-firmware-update", $footer);

var $smartlinkStatusIcon = $(".js-smartlink-status", $footer);

var $driverStatusIcon = $(".js-driver-status i", $footer);

$("a", $updatesBar).on("click", function(e) {
    e.preventDefault();
});

$updatesBarButtonDC.on("click", function(e) {
    statements.isDriverCardUploaded = true;
    $updatesBarButtonDC.hide();
    if (statements.isDriverCardUploaded && statements.isFirmwareUpdated) {
        $updatesBar.hide();
    }
    updateFooter();
});

$updatesBarButtonFW.on("click", function(e) {
    statements.isFirmwareUpdated = true;
    $updatesBarButtonFW.hide();
    if (statements.isDriverCardUploaded && statements.isFirmwareUpdated) {
        $updatesBar.hide();
    }
    updateFooter();
});

var initFooter = function($page) {
    $page.on("appShow", function() {
        showFooter();
    });
};

var hideFooter = function() {
    $footer.hide();
    updateFooter();
};

var showFooter = function() {
    $footer.show();
    updateFooter();
};

var updateFooter = function(page) {
    var $scrollFixer = $(".scrollFixer");
    if (!$scrollFixer.length) {
        $scrollFixer = $("<div>").addClass("scrollFixer");
        $(".app-content").append($scrollFixer);
    }
    $scrollFixer.height($footer.height());
};

var setupSmartlinkConnection = function($page) {
    if (statements.isSmartLinkConnection) {
        $(".js-smartlink-not-connected", $page).removeClass("hide");
        $(".js-smartlink-connected", $page).addClass("hide");
        $smartlinkStatusIcon.removeClass("icon-flash").addClass("icon-attention");
    } else {
        $(".js-smartlink-not-connected", $page).addClass("hide");
        $(".js-smartlink-connected", $page).removeClass("hide");
        $smartlinkStatusIcon.removeClass("icon-attention").addClass("icon-flash");
    }
    console.log(statements.isSmartLinkConnection);
    statements.isSmartLinkConnection = !statements.isSmartLinkConnection;
};

var setupReminder = function($page) {
    if (statements.isReminderOn) {
        statements.isReminderOn = false;
        $(".js-reminder-off", $page).removeClass("hide");
        $(".js-reminder-on", $page).addClass("hide");
    } else {
        statements.isReminderOn = true;
        $(".js-reminder-off", $page).addClass("hide");
        $(".js-reminder-on", $page).removeClass("hide");
    }
};

App.setDefaultTransition("instant");

App.controller("login", function(page) {
    var $page = $(page);
    $page.on("appShow", function() {
        hideFooter();
        initStatments();
    });
});

App.controller("main", function(page) {
    var $page = $(page);
    initFooter($page);
    $page.on("appLoad", function() {
        setupSmartlinkConnection();
        setupReminder();
    });
    $(".js-button-smartlink", $page).on("click", function(e) {
        setupSmartlinkConnection($page);
    });
    $(".js-reminder-switch", $page).on("click", function(e) {
        setupReminder($page);
    });
    $(".js-driver-status a", $page).on("click", function(e) {
        e.preventDefault();
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
        $driverStatusIcon.attr("class", $(this).find("i").attr("class"));
    });
    $(".js-logout", $page).on("click", function(e) {
        App.back("login");
    });
    $(".messages", $page).on("click", function(e) {
        e.preventDefault();
        App.load("messages");
    });
    $(".vdo", $page).on("click", function(e) {
        e.preventDefault();
        App.load("vdo");
    });
    $(".control", $page).on("click", function(e) {
        e.preventDefault();
        App.load("control");
    });
    $(".calendar", $page).on("click", function(e) {
        e.preventDefault();
        App.load("calendar");
    });
    $(".vehicle", $page).on("click", function(e) {
        e.preventDefault();
        App.load("vehicle");
    });
    $(".settings", $page).on("click", function(e) {
        e.preventDefault();
        App.load("settings");
    });
});

App.controller("messages", function(page) {
    var $page = $(page);
    initFooter($page);
});

App.controller("message", function(page) {
    var $page = $(page);
    initFooter($page);
});

App.controller("message-new", function(page, attr) {
    var $page = $(page);
    if (attr.to) {
        $(".js-input-to", $page).val(attr.to);
    }
    $(".js-submit", $page).on("click", function(e) {
        alertify.success("Message has been sent.");
    });
});

App.controller("calendar", function(page) {
    var $page = $(page);
    initFooter($page);
    $(".calendar-nav button", $page).on("click", function(e) {
        App.load("calendar");
    });
    $("ul.calendar li[data-target]", $page).on("click", function(e) {
        App.load("calendar-day");
    });
});

App.controller("calendar-day", function(page) {
    var $page = $(page);
    initFooter($page);
});

App.controller("vehicle", function(page) {
    var $page = $(page);
    initFooter($page);
});

App.controller("vdo", function(page) {
    var $page = $(page);
    initFooter($page);
});

App.controller("control", function(page) {
    var $page = $(page);
    initFooter($page);
});

App.controller("vehicle", function(page) {
    var $page = $(page);
    initFooter($page);
});

App.controller("settings", function(page) {
    var $page = $(page);
    initFooter($page);
});

try {
    App.restore();
} catch (err) {
    App.load("login");
}