const allTeams = [{ name: 'Tampa Bay', wins: 100, losses: 62, GB: 0 },
    { name: 'New York', wins: 92, losses: 70, GB: 8.0 },
    { name: 'Boston', wins: 92, losses: 70, GB: 8.0 },
    { name: 'Toronto', wins: 91, losses: 71, GB: 9.0 },
    { name: 'Baltimore', wins: 52, losses: 110, GB: 48.0 }
];

// So we can filter out teams without loosing them (allTeams always has every team)
let teams = allTeams;

let currentSortField = 'GB';
let sortDirection = 'ASC';


function createStandings() {
    document.querySelector('#rows').innerHTML = '';
    teams.forEach(team => {
        let row = createRow(team);
        document.querySelector('#rows').appendChild(row);
    });
}

function createRow(team) {
    let newRow = document.createElement('tr');
    newRow.setAttribute('scope', 'row');
    let newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.name));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.wins));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.losses));
    newRow.appendChild(newCell);
    newCell = document.createElement('td');
    newCell.appendChild(document.createTextNode(team.GB));
    newRow.appendChild(newCell);

    return newRow;
}

function sort(field) {
    console.log("im sorting");
    console.log(teams);
    if (field === undefined) {
        field = currentSortField;
        //Called from filter teams
    } else if (field === currentSortField) {
        sortDirection = sortDirection === 'ASC' ? 'DESC' : 'ASC';
    } else {
        sortDirection = 'ASC';
        currentSortField = field;
    }
    if (sortDirection === 'ASC') {
        if (field === 'team') {
            team = teams.sort((a, b) => a.name.localeCompare(b.name) > 0 ? 1 : -1);
        } else if (field === 'wins') {
            teams = teams.sort((a, b) => a.wins - b.wins);
        } else if (field === 'losses') {
            teams = teams.sort((a, b) => a.losses - b.losses);
        } else {
            teams = teams.sort((a, b) => a.GB - b.GB);
        }
    } else {
        if (field === 'team') {
            team = teams.sort((a, b) => a.name.localeCompare(b.name) < 0 ? 1 : -1);
            console.log("ooga booga");
        } else if (field === 'wins') {
            teams = teams.sort((a, b) => b.wins - a.wins);
        } else if (field === 'losses') {
            teams = teams.sort((a, b) => b.losses - a.losses);
        } else {
            teams = teams.sort((a, b) => b.GB - a.GB);
        }
    }
    createStandings();
}

function filterTeams() {
    let filterValue = document.querySelector('#filter').value;
    teams = allTeams.filter(team => (team.name.indexOf(filterValue) >= 0));
    console.log(teams);
    sort(); // field in sort will be undefined
}


createStandings();