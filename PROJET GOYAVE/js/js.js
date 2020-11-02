let nbColonne = 1;
let click = 1;

function check(form) {

    if (form.userID.value == "" && form.userMDP.value == "") {
        window.open("accueil.html")
    }
    else {
        alert("Qui êtes-vous?")
    }
}

function addCard(nbColonne) {
    let conteneurCarte = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h5');
    let cardText = document.createElement('p');
    let divButton = document.createElement('div');
    let buttonModifier = document.createElement('button');
    let buttonSupprimer = document.createElement('button');
    let buttonDeplacer = document.createElement('button');

    let titreTexte = document.createTextNode('Titre');
    let descriptionTexte = document.createTextNode(document.getElementById('card-text'));
    let modifier = document.createTextNode('MODIFIER');
    let supprimer = document.createTextNode('SUPPRIMER');
    let deplacer = document.createTextNode('DÉPLACER');
    
    conteneurCarte.id = 'card-body' + click;
    cardBody.className = 'card-body';
    cardTitle.className = 'card-title';
    cardText.className = 'card-text';
    divButton.className = 'buttons'
    buttonModifier.className = 'btn btn-warning';
    buttonSupprimer.className = 'btn btn-danger';
    buttonSupprimer.addEventListener("click", function () { deleteCard(conteneurCarte.id) });
    buttonDeplacer.className = 'btn btn-info';

    cardTitle.appendChild(titreTexte);
    cardText.appendChild(descriptionTexte);
    buttonSupprimer.appendChild(supprimer);
    buttonDeplacer.appendChild(deplacer);
    buttonModifier.appendChild(modifier);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(divButton);

    divButton.appendChild(buttonModifier);
    divButton.appendChild(buttonSupprimer);
    divButton.appendChild(buttonDeplacer);
    conteneurCarte.appendChild(cardBody);

    let placement = document.getElementById(nbColonne);
    placement.appendChild(conteneurCarte);

    click++;
}


function addColumn() {
    let row = document.createElement('div');
    let colSmall = document.createElement('div');
    let column = document.createElement('div');
    let columnTitle = document.createElement('div');
    let ajouterCarte = document.createElement('div');
    let boutonSupprimer = document.createElement('button');
    let boutonAjouter = document.createElement('button');
    let newColumn = document.createElement('div');
    let cardBody = document.createElement('div');    
    let colonne = document.createElement('div');

    let titreColonne = document.createTextNode('Titre');
    let ajouter = document.createTextNode('AJOUTER');
    let supprimer = document.createTextNode('SUPPRIMER');


    ajouterCarte.className = 'ajouterCarte';
    row.className = 'row';
    colSmall.className = 'col-sm-3, colonneSmall';
    column.className = 'column';
    newColumn.className = 'newColumn';
    newColumn.id = 'column' + nbColonne;
    columnTitle.className = 'columnTitle';
    cardBody.className = 'card-body';
    boutonAjouter.className = 'btn btn-success';
    boutonSupprimer.className = 'btn btn-danger';

    boutonSupprimer.addEventListener("click", function () { deleteCard(colonne.id) });
    boutonAjouter.addEventListener("click", function () { addCard(newColumn.id) });
    colonne.id = 'idColonne' + nbColonne;

    boutonAjouter.appendChild(ajouter);
    ajouterCarte.appendChild(boutonAjouter);
    columnTitle.appendChild(titreColonne);
    column.appendChild(columnTitle);

    column.appendChild(ajouterCarte);
    colSmall.appendChild(column);
    boutonSupprimer.appendChild(supprimer);
    ajouterCarte.appendChild(boutonSupprimer);
    column.appendChild(newColumn);

    let nouvelleColonne = document.getElementById("colonne");
    colonne.appendChild(colSmall);
    nouvelleColonne.appendChild(colonne);
    nbColonne++;
}

function deleteCard(idCarte) {
    let supprimer = document.getElementById(idCarte);
    while (supprimer.firstChild) {
        supprimer.removeChild(supprimer.firstChild);
    }
}

function deleteColumn(idColonne) {
    let supprimerColonne = document.getElementById(idColonne);
    while (supprimerColonne.firstChild) {
        supprimerColonne.removeChild(supprimerColonne.firstChild);
    }
}

function coucou(){
    console.log("coucou");
}