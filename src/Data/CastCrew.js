import ricoImage from "../Assets/People/Rico.webp";
import benImage from "../Assets/People/Benjamin2.jpg";
import silasImage from "../Assets/People/SilasWide.jpeg";
import madelineImage from "../Assets/People/MadelineWide.jpeg";
import barbaraImage from "../Assets/People/Barbara.jpg";
import stephanieImage from "../Assets/People/Stephanie.jpg";
import marthaImage from "../Assets/People/Martha.jpg";
import brandynImage from "../Assets/People/Brandyn.jpg";
import stuartImage from "../Assets/People/Stuart.jpg";
import lanceImage from "../Assets/People/Lance.jpg";
import kenzieImage from "../Assets/People/Kenzie.jpg";

const Crew = [
    {
        name: "Rico Heisler",
        title: "Artistic Director",
        badge: "Cofounder",
        role: "Artistic Director",
        roles: ["Actor", "Director", "Choreographer"],
        image: ricoImage,
        icon: "◆",
        col: "founder",
        bio: "A Bachelor of Arts graduate from the University of Northwestern (Saint Paul) and the J.D. William Mitchell College of Law, he has had over 20 years of directing, choreographing and acting experience. Rico brings an intensity and deep physical breadth to every project.",
    },
    {
        name: "Benjamin Gagliardi",
        title: "Dramatist",
        badge: "Cofounder",
        role: "Dramatist",
        roles: ["Actor", "Writer", "Songwriter"],
        image: benImage,
        icon: "◆",
        col: "founder",
        bio: "A graduate of Theatre and Computer Science from the University of Wisconsin, Madison, Benjamin is an aspiring writer and actor. He finds particular joy in humor and comedy.",
        cta: {label: "Read Portfolio", link: "/portfolio"},
    },
    {
        name: "Madeline Gagliardi",
        title: "Administrator",
        roles: ["Manager", "Actor", "Singer"],
        image: madelineImage,
        icon: "◆",
        col: "company",
        bio: "As a proud mother of five daughters, Madeline Gagliardi comes from years of working for the States of Wisconsin and Minnesota in legislative affairs, public policy, and case management in collaboration with various state agencies. Madeline also brings years of experience in non-profit advancement and administration, including her work with Marquette University and the Archdiocese of Saint Paul & Minneapolis. She is thrilled to be joining Spirit of Fire Theatre, combining her professional skills with her background and love for choral, vocal, and musical theatre."
    },
    {
        name: "Silas Heisler",
        title: "Creative Consultant",
        roles: ["Actor", "Singer"],
        image: silasImage,
        icon: "◆",
        col: "company",
        bio: "Silas Heisler is a student at the University of Northwestern St Paul studying theology and vocal performance. He grew up immersed in the world of theater as he watched his father, Rico Heisler, perform in several production at Chanhassen Dinner Theater and direct shows at Hudson High School alongside his mother. He quickly fell in love with all areas of performance and maintains a deep desire to tell good, true, and beautiful stories for the Glory of God."
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
        {
            character: "Richard Kotski",
            name: "Silas Heisler",
            bio: "Silas Heisler is thrilled to be part of the inaugural Spirit of Fire production! Recent roles include Mr. Van Daan in The Diary of Anne Frank, Robert in The Play That Goes Wrong, Jean Valjean in Les Misérables, and Ren McCormack in Footloose. He is a student at the University of Northwestern–St. Paul, double majoring in Biblical and Theological Studies and Music.",
            image: silasImage,
        },
        {
            character: "Robert (Bobby) Kotski",
            name: "Benjamin Gagliardi",
            bio: "Benjamin Gagliardi is a Theatre Graduate from UW Madison. He now spends his free time as an actor and writer in Hudson, Wisconsin. He is the cofounder of the Theatre company Spirit of Fire, and is excited to present his first comedy, Mother Rabbit. He wants to extend special thanks to his family, the Heislers, and the Wilson family for their inspiration and help through the show.",
            image: benImage,
        },
        {
            character: "Peter Kotski",
            name: "Brandyn Tapio",
            bio: "Brandyn’s inaugural production with Spirit of Fire. Primarily a dancer, he has collaborated most recently with Concerto Dance by Jolene Konkel and Flying Foot Forum. Spent several years working at Chanhassen Dinner Theatres, where he performing in Newsies!, Mary Poppins, Beauty and the Beast, Camelot, and Mama Mia!. Brandyn works in physical therapy and does online fitness coaching. Check him out on Instagram @ironwell.fitness. ",
            image: brandynImage,
        },
        {
            character: "Sara Washabaugh",
            name: "Kenzie Kroll",
            bio: "Mackenzie Kroll is excited to perform with Spirit of Fire! She is a preschool teacher and a vocalist at Eagle Brook Church! PAST CREDITS: BIG BLUE: Shooey, Soup; Princess Leia, A Newith Hopeith; ELSEWHERE: Reno Sweeney, Anything Goes; Annabeth, The Lightning Thief; Amy, Little Women; Missy, The Marvelous Wonderettes; Margo, Bright Star; Charlotte, These Shining Lives.Thanks for supporting the arts!",
            image: kenzieImage,
        },
        {
            character: "Elena Kotski",
            name: "Barbara Gagliardi",
            bio: "Barbara Gagliardi has enjoyed involvement in Theatre her whole life, and a deep passion for the arts. Playing Elena has been a delight. Working with such a young cast, including two of her children, has been very  refreshing. Talking about the characters and backstories with the author has made this experience uniquely memorable, and she hopes you enjoy the show.",
            image: barbaraImage,
        },
        {
            character: "Father Dominick Colgan",
            name: "Lance Heisler",
            bio: "I am only in this play because everyone else is either related to me or owes me money, or both. Turns out, this play is so good, I’m cancelling all the invoices.",
            image: lanceImage,
        },
        {
            character: "Reverend Doctor Allen Byrd",
            name: "Stuart Felth",
            bio: "It’s been over 20 years since Stuart was last on stage: Best Little Whorehouse in Texas with Sally Struthers. He’s very grateful for this wonderful opportunity and thanks his wife (Carol Jean) and children (Brady, Dylan, and Grace) for allowing him to get back on stage.",
            image: stuartImage,
        },
        {
            character: "Kiera Lesley",
            name: "Martha Cashman",
            bio: "Martha Cashman grew up watching her mother (Barbara Gagliardi) acting and followed in her footsteps. She got a BFA degree in Musical Theater from UM Duluth. She found the things she learned there invaluable while working briefly in the Twin Cities after college but mostly in her favorite role as a wife and mother! She wants to thank Benjamin and Rico for getting her back on stage, this show has been a blast! Enjoy and God Bless.",
            image: marthaImage,
        },
        {
            character: "Director",
            name: "Rico Heisler",
            bio: "Credits: 20 years directing & choreographing Hudson High School. Acting: Chanhassen Dinner Theatre including All Shook Up (Chad) and West Side Story (Bernardo); Jungle Theatre Urinetown; Bloomington Civic Theatre Crazy for You (Bobby), A Chorus Line (Mike); Minnesota Opera La Traviata and The Merry Widow. B.A. University of Northwestern (St. Paul). Rico shares his life with his wife, Kari, and their 7 children.",
            image: ricoImage,
        },
        {
            character: "Stage Manager",
            name: "Gideon Heisler",
            bio: "",
            image: "",
        },
    ],
    "MotherRabbit_Jun_2026": [
        {
            character: "Richard Kotski",
            name: "Silas Heisler",
            bio: "Silas Heisler is thrilled to be part of the inaugural Spirit of Fire production! Recent roles include Mr. Van Daan in The Diary of Anne Frank, Robert in The Play That Goes Wrong, Jean Valjean in Les Misérables, and Ren McCormack in Footloose. He is a student at the University of Northwestern–St. Paul, double majoring in Biblical and Theological Studies and Music.",
            image: silasImage,
        },
        {
            character: "Robert (Bobby) Kotski",
            name: "Benjamin Gagliardi",
            bio: "Benjamin Gagliardi is a Theatre Graduate from UW Madison. He now spends his free time as an actor and writer in Hudson, Wisconsin. He is the cofounder of the Theatre company Spirit of Fire, and is excited to present his first comedy, Mother Rabbit. He wants to extend special thanks to his family, the Heislers, and the Wilson family for their inspiration and help through the show.",
            image: benImage,
        },
        {
            character: "Peter Kotski",
            name: "Brandyn Tapio",
            bio: "Brandyn’s inaugural production with Spirit of Fire. Primarily a dancer, he has collaborated most recently with Concerto Dance by Jolene Konkel and Flying Foot Forum. Spent several years working at Chanhassen Dinner Theatres, where he performing in Newsies!, Mary Poppins, Beauty and the Beast, Camelot, and Mama Mia!. Brandyn works in physical therapy and does online fitness coaching. Check him out on Instagram @ironwell.fitness. ",
            image: brandynImage,
        },
        {
            character: "Sara Washabaugh",
            name: "Kenzie Kroll",
            bio: "Mackenzie Kroll is excited to perform with Spirit of Fire! She is a preschool teacher and a vocalist at Eagle Brook Church! PAST CREDITS: BIG BLUE: Shooey, Soup; Princess Leia, A Newith Hopeith; ELSEWHERE: Reno Sweeney, Anything Goes; Annabeth, The Lightning Thief; Amy, Little Women; Missy, The Marvelous Wonderettes; Margo, Bright Star; Charlotte, These Shining Lives.Thanks for supporting the arts!",
            image: kenzieImage,
        },
        {
            character: "Elena Kotski",
            name: "Barbara Gagliardi",
            bio: "Barbara Gagliardi has enjoyed involvement in Theatre her whole life, and a deep passion for the arts. Playing Elena has been a delight. Working with such a young cast, including two of her children, has been very  refreshing. Talking about the characters and backstories with the author has made this experience uniquely memorable, and she hopes you enjoy the show.",
            image: barbaraImage,
        },
        {
            character: "Fr. Dominick Colgan",
            name: "Lance Heisler",
            bio: "I am only in this play because everyone else is either related to me or owes me money, or both. Turns out, this play is so good, I’m cancelling all the invoices.",
            image: lanceImage,
        },
        {
            character: "Rev. Dr. Allen Byrd",
            name: "Stuart Felth",
            bio: "It’s been over 20 years since Stuart was last on stage: Best Little Whorehouse in Texas with Sally Struthers. He’s very grateful for this wonderful opportunity and thanks his wife (Carol Jean) and children (Brady, Dylan, and Grace) for allowing him to get back on stage.",
            image: stuartImage,
        },
        {
            character: "Kiera Lesley",
            name: "Martha Cashman",
            bio: "Martha Cashman grew up watching her mother (Barbara Gagliardi) acting and followed in her footsteps. She got a BFA degree in Musical Theater from UM Duluth. She found the things she learned there invaluable while working briefly in the Twin Cities after college but mostly in her favorite role as a wife and mother! She wants to thank Benjamin and Rico for getting her back on stage, this show has been a blast! Enjoy and God Bless.",
            image: marthaImage,
        },
        {
            character: "Director",
            name: "Rico Heisler",
            bio: "Credits: 20 years directing & choreographing Hudson High School. Acting: Chanhassen Dinner Theatre including All Shook Up (Chad) and West Side Story (Bernardo); Jungle Theatre Urinetown; Bloomington Civic Theatre Crazy for You (Bobby), A Chorus Line (Mike); Minnesota Opera La Traviata and The Merry Widow. B.A. University of Northwestern (St. Paul). Rico shares his life with his wife, Kari, and their 7 children.",
            image: ricoImage,
        },
        {
            character: "Stage Manager",
            name: "Gideon Heisler",
            bio: "",
            image: "",
        },
    ],
    "AnimalCrackers_Characters": [
        {
            character: "Captain Jeffrey T. Spaulding",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "The Professor",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Signor Emanuel Ravelli",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Horatio Jamison",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Arabella Rittenhouse",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Mrs. Rittenhouse",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Roscoe W. Chandler",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "John Parker",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Mrs. Whitehead",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Grace Carpenter",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Hives",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Inspector Hennessey",
            name: "",
            bio: "",
            image: "",
        },
    ],
    "MissingTheRain_Characters": [
        {
            character: "George Pridane",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Lisa Pridane",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Logan Pridane",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Manny Belmeyer",
            name: "",
            bio: "",
            image: "",
        },
        {
            character: "Lenny Yenti",
            name: "",
            bio: "",
            image: "",
        },
    ]
}

const People = {
    crew: Crew,
    casts: Casts
}

export default People;