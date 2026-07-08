import twelveAngryMenImage from "../Assets/Covers/TwelveAngryMen.png";
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
        title: "Twelve Angry Men",
        dates: "TBD",
        badges: [
            badges.drama,
            badges.age,
            badges.adaptation,
        ],
        link: "",
        image: twelveAngryMenImage,
        id: "twelveangrymen",
        cast: People.casts.TwelveAngryMen_Characters,
        description: `A 19-year-old man has just stood trial for the fatal stabbing of his father. "He doesn't stand a chance," mutters the guard as the 12 jurors are taken into the bleak jury room. It looks like an open-and-shut case—until one of the jurors begins opening the others' eyes to the facts. "This is a remarkable thing about democracy," says the foreign-born juror, "that we are notified by mail to come down to this place—and decide on the guilt or innocence of a man; of a man we have not known before. We have nothing to gain or lose by our verdict. We should not make it a personal thing." But personal it does become, with each juror revealing his or her own character as the various testimonies are re-examined, the murder is re-enacted and a new murder threat is born before their eyes! Tempers get short, arguments grow heated, and the jurors become 12 angry men.`,
    },
    {
        title: "Animal Crackers",
        dates: "TBD",
        badges: [
            badges.adaptation,
            badges.comedy,
            badges.family,
        ],
        link: "",
        image: animalCrackersImage,
        id: "animalcrackers",
        cast: People.casts.AnimalCrackers_Characters,
        description: "Mayhem and zaniness ensue when a valuable painting goes missing during a party in honor of famed African explorer Captain Spaulding."
    },
    {
        title: "Missing the Rain",
        dates: "TBD",
        badges: [
            badges.premiere,
            badges.drama,
            badges.original,
            badges.age,
        ],
        link: "",
        image: missingRainImage,
        id: "missingtherain",
        cast: People.casts.MissingTheRain_Characters,
        description: ""
    },
];

export default productions;