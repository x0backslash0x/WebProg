//main.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
//  Labo 8 oefening 1 uitvinders


interface Uitvinder {
    first: string,
    last: string,
    year: number,
    passed: number;
}

const uitvinders: Uitvinder[] = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, 
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },  
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },  
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },  
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },  
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },  
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },  
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },  
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },  
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },  
    { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }  
]

console.log(uitvinders.filter((uitvinder: Uitvinder) => {
    const year: number = uitvinder.year;
    if (year >= 1500 && year < 1600) {
        return uitvinder;
    }
}))