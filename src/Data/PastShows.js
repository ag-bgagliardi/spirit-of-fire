
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg";
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg";
import missingRainImage from "../Assets/Covers/MissingTheRain.webp";
import People from "./CastCrew"

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
        dates: "FEB 05 — FEB 08",
        badge: badges.encore.label,
        badgeColor: badges.encore.color,
        badgeText: badges.encore.textcolor,
        image: motherRabbitImage,
        id: "motherrabbit",
        cast: People.casts.MotherRabbit_Feb_2026
    }
];

export default productions;