var host = {
    isChrome: false,
    isAvailable: false,
};

function log(message) {
    var msg = document.createElement("div");
    msg.innerHTML = message;
    document.getElementById("hidden").appendChild(msg);
}

function display() {
    var hidden = document.getElementById("hidden");

    if (hidden.style.display == "none") {
        hidden.style.display = "inline"
    }
    else {
        hidden.style.display = "none";
    }
}


try {
    
    host.isChrome = window.chrome != null;

    log("isChrome: " + host.isChrome);
    log("userAgent: " + window.navigator.userAgent);
    log("platform: " + window.navigator.platform);
    log("vendor:" + window.navigator.vendor);
    log("mediaCapabilities: " + window.navigator.mediaCapabilities);
    log("Chrome: " + window.navigator.chrome);
}
catch (err) {
    console.log("Error loading javascript " + err);
}