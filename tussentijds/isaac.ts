const json = [
    {
      "title": "Pebble in the Sky - Galactic Empire Series",
      "publication_year": 1950,
      "synopsis": "A story about a man from the 20th century who is accidentally transported to a far future where Earth is an isolated and radioactive backwater in a vast Galactic Empire.",
      "adaptation": {}
    },
    {
      "title": "The Stars, Like Dust - Galactic Empire Series",
      "publication_year": 1951,
      "synopsis": "A young man named Biron Farrill becomes entangled in a complex plot involving rebellion against a tyrannical regime in a distant galaxy.",
      "adaptation": {}
    },
    {
      "title": "The Currents of Space - Galactic Empire Series",
      "publication_year": 1952,
      "synopsis": "A space worker with knowledge of an impending disaster on a planet is caught in a web of political intrigue involving the planet's rulers and the Trantorian Empire.",
      "adaptation": {}
    },
    {
      "title": "Foundation - Foundation Series",
      "publication_year": 1951,
      "synopsis": "The first book in the Foundation series introduces Hari Seldon, a mathematician who develops psychohistory, a method of predicting future events on a large scale, and establishes a foundation to preserve knowledge and shorten the Dark Ages that will follow the fall of the Galactic Empire.",
      "adaptation": {
        "title": "Foundation",
        "type": "tv series",
        "year": 2021
      }
    },
    {
      "title": "Foundation and Empire - Foundation Series",
      "publication_year": 1952,
      "synopsis": "The story follows the Foundation as it faces threats from the dying Galactic Empire and a mysterious leader known as 'The Mule,' who has unique mental abilities.",
      "adaptation": {
        "title": "Foundation",
        "type": "tv series",
        "year": 2021
      }
    },
    {
      "title": "Second Foundation - Foundation Series",
      "publication_year": 1953,
      "synopsis": "The search for the mythical 'Second Foundation,' which is believed to possess greater knowledge and power than the First Foundation, takes center stage as the Mule's influence grows.",
      "adaptation": {
        "title": "Foundation",
        "type": "tv series",
        "year": 2021
      }
    },
    {
      "title": "Foundation's Edge - Foundation Series",
      "publication_year": 1982,
      "synopsis": "Set many years after the events of the original trilogy, this book follows Golan Trevize, a councilman of the Foundation, as he sets out to find the Second Foundation.",
      "adaptation": {}
    },
    {
      "title": "Foundation and Earth - Foundation Series",
      "publication_year": 1986,
      "synopsis": "Continuing from 'Foundation's Edge,' Golan Trevize seeks the location of Earth, the legendary original home of humanity, to solve the mystery of his own intuition.",
      "adaptation": {}
    },
    {
      "title": "Prelude to Foundation - Foundation Series",
      "publication_year": 1988,
      "synopsis": "A prequel to the original Foundation trilogy, this book explores the origins of Hari Seldon and the development of psychohistory.",
      "adaptation": {}
    },
    {
      "title": "Forward the Foundation - Foundation Series",
      "publication_year": 1993,
      "synopsis": "A sequel to 'Prelude to Foundation,' chronicling the later years of Hari Seldon's life as he works to establish the Foundation and protect it from political forces.",
      "adaptation": {}
    },
    {
      "title": "I, Robot - Robot Series",
      "publication_year": 1950,
      "synopsis": "A collection of interconnected short stories that explore the ethical and moral implications of robots and artificial intelligence, introducing Asimov's famous Three Laws of Robotics.",
      "adaptation": {
        "title": "I, Robot",
        "type": "movie",
        "year": 2004
      }
    },
    {
      "title": "The Caves of Steel - Robot Series",
      "publication_year": 1954,
      "synopsis": "A science fiction detective novel featuring Earth detective Elijah Baley and his robot partner R. Daneel Olivaw, investigating a murder in a future where robots and humans coexist uneasily.",
      "adaptation": {
        "title": "The Caves of Steel",
        "type": "tv series",
        "year": 1964
      }
    },
    {
      "title": "The Naked Sun - Robot Series",
      "publication_year": 1957,
      "synopsis": "The sequel to 'The Caves of Steel,' in which Elijah Baley and R. Daneel Olivaw are sent to the Spacer world of Solaria to investigate a murder in a society where humans live in extreme isolation.",
      "adaptation": {}
    },
    {
      "title": "The Robots of Dawn - Robot Series",
      "publication_year": 1983,
      "synopsis": "Elijah Baley is called to the Spacer world of Aurora to investigate the destruction of a humaniform robot, R. Jander Panell, which could threaten Earth’s future.",
      "adaptation": {}
    },
    {
      "title": "Robots and Empire - Robot Series",
      "publication_year": 1985,
      "synopsis": "Set several centuries after 'The Robots of Dawn,' this book explores the evolving relationship between humans and robots, as Earth begins to expand into the Galaxy.",
      "adaptation": {}
    },
    {
      "title": "The End of Eternity",
      "publication_year": 1955,
      "synopsis": "A science fiction novel about time travel and the secret organization, Eternity, that controls and manipulates time to maintain human history's stability.",
      "adaptation": {
        "title": "The End of Eternity",
        "type": "movie",
        "year": 2015
      }
    }
]

function sorterenOpJaar(a: string, b: string) {
    if(a < b) {
        return -1;
        } else if(a > b) {
        return 1;
        } else {
        return 0;
        }
}

console.log(json[1]["publication_year"]);
//console.log(json.sort((a: string, b: string) => a - b))