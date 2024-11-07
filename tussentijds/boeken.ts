interface SciFiboeken {
    name: string;
    avg: number;
    criteria: string;
    score: number;
    maxScore: number;
}

async function dataOphalen(): Promise<void> {
    const response: Response = await fetch("https://examen-webprogramming-ap.surge.sh/books.json");
    const boeken: SciFiboeken = await response.json();
    console.log(boeken);
    //return(text);
}

//let data = dataOphalen();
//console.log(data);
dataOphalen();