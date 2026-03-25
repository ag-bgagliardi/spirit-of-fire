import ricoImage from "../Assets/People/Rico.webp";
import benImage from "../Assets/People/Benjamin.jpeg";
import silasImage from "../Assets/People/SilasWide.jpeg";
import madelineImage from "../Assets/People/MadelineWide.jpeg";
import barbaraImage from "../Assets/People/Barbara.jpg";
import stephanieImage from "../Assets/People/Stephanie.jpg";

const Crew = [
    {
        name: "Rico Heisler",
        title: "Artistic Director",
        badge: "Cofounder",
        roles: ["Actor", "Director", "Choreographer"],
        image: ricoImage,
        icon: "🎬",
        col: "founder"
    },
    {
        name: "Benjamin Gagliardi",
        title: "Dramatist",
        badge: "Cofounder",
        roles: ["Actor", "Writer", "Songwriter"],
        image: benImage,
        icon: "✍️",
        col: "founder"
    },
    {
        name: "Madeline Gagliardi",
        title: "Administrator",
        roles: ["Manager", "Actor", "Singer"],
        image: madelineImage,
        icon: "◆",
        col: "company"
    },
    {
        name: "Silas Heisler",
        title: "Creative Consultant",
        roles: ["Actor", "Singer"],
        image: silasImage,
        icon: "◆",
        col: "company"
    },
    {
        name: "Barbara Gagliardi",
        title: "Creative Designer",
        roles: ["Actor", "Singer", "Director", "Designer"],
        image: barbaraImage,
        icon: "◆",
        col: "company"
    },
    {
        name: "Stephanie Wilson",
        title: "Director of Marketing",
        roles: ["Designer", "Marketer"],
        image: stephanieImage,
        icon: "◆",
        col: "company"
    },
];

const Casts = {
    "MotherRabbit_Feb_2026": [

    ]
}

const People = {
    crew: Crew,
    casts: Casts
}

export default People;