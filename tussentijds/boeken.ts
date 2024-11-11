//isaac.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// tussentijdse toest vraag 2

/**
 * Feedback na inzending:
 * 
 * ophalen gegevens correct (1)
 * interfaces onvolledig (1)
 * de rest niet afgewerkt
 */

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