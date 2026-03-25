
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg";
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg";
import missingRainImage from "../Assets/Covers/MissingTheRain.webp";

const badges = {
    encore: {
        label: "Encore Performance",
        color: "#a37cea",
        textcolor: "#38017a",
    },
    adaptation: {
        label: "Adaptation",
        color: "#201f1f",
        textcolor: "#ffb59a",
    },
    premiere: {
        label: "World Premiere",
        color: "#f95e14",
        textcolor: "#4f1700",
    },
};

const productions = [
    { 
        title: "Mother Rabbit",
        dates: "JUN 01 — JUL 01",
        badge: badges.encore.label,
        badgeColor: badges.encore.color,
        badgeText: badges.encore.textcolor,
        image: motherRabbitImage
    },
    { 
        title: "Animal Crackers",
        dates: "TBD",
        badge: badges.adaptation.label,
        badgeColor: badges.adaptation.color,
        badgeText: badges.adaptation.textcolor,
        image: animalCrackersImage
    },
    {
        title: "Missing the Rain",
        dates: "TBD",
        badge: badges.premiere.label,
        badgeColor: badges.premiere.color,
        badgeText: badges.premiere.textcolor,
        image: missingRainImage
    },
];

export default productions;