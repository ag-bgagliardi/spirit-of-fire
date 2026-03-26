
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
    original: {
        label: "Original Work",
        color: "#352c00",
        textcolor: "#e2bc00",
    },
    family: {
        label: "Family-Friendly",
        textcolor: "#3fc465",
        color: "#00350b",
    },
    age: {
        label: "PG13",
        textcolor: "#78bfe9",
        color: "#0d0035",
    },
    comedy: {
        label: "Comedy",
        color: "#f95e14",
        textcolor: "#4f1700",
    },
    drama: {
        label: "Drama",
        color: "#f95e14",
        textcolor: "#4f1700",
    },
    romance: {
        label: "Romance",
        color: "#f95e14",
        textcolor: "#4f1700",
    },
    musical: {
        label: "Musical",
        color: "#f95e14",
        textcolor: "#4f1700",
    },
};

const productions = [
    {
        title: "Mother Rabbit",
        dates: "JUN 01 — JUL 01",
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
        cast: "",
        description: ""
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
        cast: "",
        description: ""
    },
];

export default productions;