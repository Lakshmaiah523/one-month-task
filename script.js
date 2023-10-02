let userPoints = 0;
let loginHistory = [];
document.getElementById("earnPoints").addEventListener("click", function() {
    userPoints += 10;
    document.getElementById("userPoints").textContent = userPoints;
});
document.getElementById("earnBadge").addEventListener("click", function() {
    alert("Badge earned!");
});
document.getElementById("loginButton").addEventListener("click", function() {
    const timestamp = new Date().toLocaleString();
    const loginInfo = `Logged in from ${navigator.userAgent} at IP: ${getUserIP()} (${timestamp})`;
    loginHistory.push(loginInfo);
    const loginHistoryList = document.getElementById("loginHistoryList");
    const listItem = document.createElement("li");
    listItem.textContent = loginInfo;
    loginHistoryList.appendChild(listItem);
});
function getUserIP() {
    return "192.168.1.1";
}
const translations = {
    en: {
        welcomeMessage: "Welcome to the Reward System",
        pointsLabel: "Points: ",
        earnPoints: "Earn 10 Points",
        earnBadge: "Earn Badge",
        rewardSystem: "Reward System",
        loginTracking: "Login Tracking",
        loginHistory: "Login History",
        loggedInFrom: "Logged in from",
    },
    fr: {
        welcomeMessage: "Bienvenue dans le système de récompense",
        pointsLabel: "Points : ",
        earnPoints: "Gagner 10 points",
        earnBadge: "Gagner un badge",
        rewardSystem: "Système de récompense",
        loginTracking: "Suivi de la connexion",
        loginHistory: "Historique de connexion",
        loggedInFrom: "Connecté depuis",
    },
    hi: {
        welcomeMessage: "स्वागत है रिवॉर्ड सिस्टम में",
        pointsLabel: "अंक: ",
        earnPoints: "10 अंक कमाएं",
        earnBadge: "बैज अर्जित करें",
        rewardSystem: "रिवॉर्ड सिस्टम",
        loginTracking: "लॉगिन ट्रैकिंग",
        loginHistory: "लॉगिन इतिहास",
        loggedInFrom: "से लॉग इन किया गया",
    },
};
function translateUI(language) {
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key];
    });
}

translateUI("en");
document.querySelectorAll("#changeLanguage").forEach((button) => {
    button.addEventListener("click", function () {
        const lang = button.getAttribute("data-lang");
        translateUI(lang);
    });
});
