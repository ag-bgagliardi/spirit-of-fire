
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg";
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg";
import missingRainImage from "../Assets/Covers/MissingTheRain.webp";
import People from "./CastCrew";

import MR1 from "../Assets/ShowImages/MR/MR1.JPG";
import MR2 from "../Assets/ShowImages/MR/MR2.JPG";
import MR3 from "../Assets/ShowImages/MR/MR3.JPG";
import MR4 from "../Assets/ShowImages/MR/MR4.JPG";
import MR5 from "../Assets/ShowImages/MR/MR5.JPG";
import MR6 from "../Assets/ShowImages/MR/MR6.JPG";
import MR7 from "../Assets/ShowImages/MR/MR7.JPG";
import MR8 from "../Assets/ShowImages/MR/MR8.JPG";
import MR9 from "../Assets/ShowImages/MR/MR9.JPG";

const badgeColor = "#ffbb00";
const textColor = "#350000";

const badges = {
    encore: {
        label: "Encore Performance",
        color: badgeColor,
        textcolor: textColor,
    },
    adaptation: {
        label: "Adaptation",
        color: badgeColor,
        textcolor: textColor,
    },
    premiere: {
        label: "World Premiere",
        color: badgeColor,
        textcolor: textColor,
    },
    original: {
        label: "Original Work",
        color: badgeColor,
        textcolor: textColor,
    },
    family: {
        label: "Family-Friendly",
        textcolor: textColor,
        color: badgeColor,
    },
    age: {
        label: "PG13",
        textcolor: textColor,
        color: badgeColor,
    },
    comedy: {
        label: "Comedy",
        color: badgeColor,
        textcolor: textColor,
    },
    drama: {
        label: "Drama",
        color: badgeColor,
        textcolor: textColor,
    },
    romance: {
        label: "Romance",
        color: badgeColor,
        textcolor: textColor,
    },
    musical: {
        label: "Musical",
        color: badgeColor,
        textcolor: textColor,
    },
};

const productions = [
    { 
        title: "Mother Rabbit",
        dates: "FEB 05 — FEB 08",
        badges: [
            badges.encore,
            badges.comedy,
            badges.original,
            badges.family,
        ],
        image: motherRabbitImage,
        id: "motherrabbit",
        cast: People.casts.MotherRabbit_Jun_2026,
        description: "",
        images: [ MR1, MR2, MR3, MR4, MR5, MR6, MR7 ]
    }
];

export default productions;