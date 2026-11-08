import christmasCarolImage from "../Assets/Covers/homepageImage.png";
import twelveAngryMenImage from "../Assets/Covers/TwelveAngryMen.png";
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg";
import playonImage from "../Assets/Covers/playon.png";
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
    // {
    //     title: "A Christmas Carol",
    //     dates: "December 29th - December 30th",
    //     badges: [
    //         badges.drama,
    //         badges.age,
    //         badges.adaptation,
    //     ],
    //     link: "",
    //     image: christmasCarolImage,
    //     id: "christmascarol",
    //     cast: People.casts.ChristmasCarol_Characters,
    //     description: `A Live Radio-Style Theatrical Presentation. Dicken's beloved story brought to life with actors, live sound effects, and Christmas carols.`,
    // },
    {
        title: "Play On!",
        dates: "June 11th - June 20th",
        badges: [
            badges.comedy,
            badges.age,
            badges.adaptation,
        ],
        link: "",
        image: playonImage,
        id: "playon",
        cast: People.casts.PlayOn_Characters,
        description: `One plucky community theatre is about to produce a show called Murder Most Foul, a new “murder mystery play” with the same title as an Agatha Christie novel but with no relation whatsoever. The director/theatre manager, Gerry, thought producing the play was a good idea since the inexperienced playwright has agreed to let the company perform the show for no charge. Gerry, however, had no idea what disasters awaited her: the show is hilariously amateur, the “murder mystery” plot doesn’t really have a murder, and to top it off the playwright keeps changing the story and script only two days from its premiere! It doesn’t help that the cast is disgruntled, and the playwright accidentally deletes the entire sound effect board. All of the disasters come to fruition in Act III when the company performs the actual show with hilarious mishaps as every turn. Play On! is a hilarious love letter to community theatre.`,
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