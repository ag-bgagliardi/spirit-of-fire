
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg";
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg";
import missingRainImage from "../Assets/Covers/MissingTheRain.webp";
import People from "./CastCrew"

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
        dates: "JUN 11 — JUN 14",
        badges: [
            badges.encore,
            badges.comedy,
            badges.original,
            badges.family,
        ],
        image: motherRabbitImage,
        id: "motherrabbit",
        cast: People.casts.MotherRabbit_Jun_2026,
        description: `Peter Kotski's mother is sick. His father passed away years ago. 
        His eccentric brothers are eccentric, and estranged. His mother's illness 
        brings them all together again, where they must reconcile with each other, 
        and her infamous personal Doctor, Reverend Byrd. Filled with boystrous energy
        shenanigans, and all sorts of tomfoolery, Mother Rabbit has a laugh for anyone
        who comes. The show is Family-friendly and has strong themes of forgiveness and 
        family values.`
    },
    {
        title: "Animal Crackers",
        dates: "TBD",
        badges: [
            badges.adaptation,
            badges.comedy,
            badges.family,
        ],
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
        image: missingRainImage,
        id: "missingtherain",
        cast: People.casts.MissingTheRain_Characters,
        description: ""
    },
];

export default productions;