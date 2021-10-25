const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
/*
let filteredAges = ages.filter((age) => {
    if (age > 30)
        return true;
    else
        return false;
});*/

//let filteredAges = ages.filter(age => age > 30);

// if put the {} we need toe explicitly return a value
// if we only have a single para,eter than we don't need ()
// same for the code.
//let filteredAges = ages.filter(age => { return age > 30 });

//filteredAges.forEach((age) => { console.log(age); });

//let filteredAges = ages.filter(age => { return true });

// 
//filteredAges.forEach((age, index) => console.log(`${index}: ${age}`));

let techoCompanies = companies.filter(company => company.category === 'Technology');

techoCompanies.forEach(company => console.log(`${company.name}: ${company.start}, ${company.end}`));

// Ternary Operator
let age = 50000;

let message = age > 29 ? 'You are old' : age < 10 ? 'You are very little' : 'You are not old';
console.log(message);

//Sort
//if number > 0, a is bigger
let sortedAges = ages.sort((a, b) => a - b);
sortedAges.forEach((age) => console.log(age));

sortedCompanies = companies.sort((a, b) => a.start - b.start);
sortedCompanies.forEach((company) => console.log(`${company.name} ${company.start} ${company.end}`));

//Map (returns an array of whatever you specify)
let test = companies.map(company => `Hello ${company.name}`);
test.forEach((x) => console.log(x));

let test1 = companies.map(company => {
    let t = {};
    t.property1 = company.start;
    t.property2 = company.end;
    return t;
});

test1.forEach((x) => console.log(x));


// Reduce (the only one that doesn't return a new array)

let totalAge = ages.reduce((total, age) => total, 0);
alert(totalAge);