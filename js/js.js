let nbColonne = 2;
let numColonne = 2;
let nbCard = 2;
var color = 1;

function check(form) {

    if (form.userID.value == "" && form.userMDP.value == "") {
        window.open("accueil.html")
    }
    else {
        alert("Qui êtes-vous?")
    }
}

function addCard(numColonne) {
    let conteneurCarte = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h5');
    let cardText = document.createElement('p');
    let divButton = document.createElement('div');
    let buttonModifier = document.createElement('button');
    let buttonSupprimer = document.createElement('button');
    let buttonCouleur = document.createElement('button');
    let divDrag = document.createElement('div');
    let titreTexte = document.createTextNode('TÂCHE');
    let descriptionTexte = document.createTextNode(document.getElementById('card-text'));
    let modifier1 = document.createTextNode('MODIFIER');
    let supprimer = document.createTextNode('SUPPRIMER');
    let couleur = document.createTextNode('COULEUR');

    conteneurCarte.id = 'card-body' + nbCard;
    divDrag.className = 'portlet-header';
    cardBody.id = 'card-color' + nbCard;
    cardBody.className = 'card-body';
    cardTitle.className = 'card-title';
    cardTitle.id="ancienTitre"+nbCard;
    cardText.id="ancienDescription"+nbCard;
    cardText.className = 'card-text';
    divButton.className = 'buttons';
    buttonModifier.className = 'btn btn-warning';
    buttonModifier.addEventListener("click", function () { modifier(cardTitle.id, cardText.id)  });
    buttonSupprimer.className = 'btn btn-danger';
    buttonSupprimer.addEventListener("click", function () { deleteCard(conteneurCarte.id) });
    buttonCouleur.className = 'btn btn-light';
    buttonCouleur.addEventListener("click", function () { colorer(cardBody.id) });

    cardTitle.appendChild(titreTexte);
    cardText.appendChild(descriptionTexte);
    buttonSupprimer.appendChild(supprimer);
    buttonCouleur.appendChild(couleur);
    buttonModifier.appendChild(modifier1);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(divButton);
    divDrag.appendChild(cardBody);
    divButton.appendChild(buttonModifier);
    divButton.appendChild(buttonSupprimer);
    divButton.appendChild(buttonCouleur);
    conteneurCarte.appendChild(divDrag);

    let placement = document.getElementById(numColonne);
    placement.appendChild(conteneurCarte);

    nbCard++;
    drag();
}

function addColumn() {
if (nbColonne <= 4){
    let row = document.createElement('div');
    let colonne = document.createElement('div');
    let colSmall = document.createElement('div');
    let column = document.createElement('div');
    let columnTitle = document.createElement('div');
    let ajouterCarte = document.createElement('div');
    let boutonSupprimer = document.createElement('button');
    let boutonAjouter = document.createElement('button');
    let newColumn = document.createElement('div');
    let cardBody = document.createElement('div');
    let divSupprimer = document.createElement('div');

    let titreColonne = document.createTextNode('"Titre"');
    let ajouter = document.createTextNode('AJOUTER UNE CARTE');
    let supprimer = document.createTextNode('SUPPRIMER COLONNE');


    ajouterCarte.className = 'ajouterCarte';
    row.className = 'row';
    colSmall.className = 'col-sm-3, colonneSmall';
    column.className = 'column';
    newColumn.className = 'newColumn drag';
    newColumn.id = 'column' + numColonne;
    columnTitle.className = 'columnTitle';
    cardBody.className = 'card-body';
    boutonAjouter.className = 'btn btn-success btn-sm btn-block';
    boutonSupprimer.className = 'btn btn-danger btn-sm btn-block';
    divSupprimer.className = 'supprimerColonne';
    columnTitle.contentEditable ="true";

    boutonSupprimer.addEventListener("click", function () { deleteColumn(colonne.id) });
    boutonAjouter.addEventListener("click", function () { addCard(newColumn.id) });
    colonne.id = 'idColonne' + numColonne;

    boutonAjouter.appendChild(ajouter);
    ajouterCarte.appendChild(boutonAjouter);
    columnTitle.appendChild(titreColonne);
    column.appendChild(columnTitle);
    column.appendChild(ajouterCarte);
    colSmall.appendChild(column);
    column.appendChild(newColumn);
    column.appendChild(divSupprimer);
    divSupprimer.appendChild(boutonSupprimer);
    boutonSupprimer.appendChild(supprimer);


    let nouvelleColonne = document.getElementById("colonne");
    colonne.appendChild(colSmall);
    nouvelleColonne.appendChild(colonne);
    nbColonne++;
    numColonne++;
    drag();
}
}

function deleteCard(idCarte) {
    let supprimer = document.getElementById(idCarte);
        supprimer.remove();  
}

function deleteColumn(idColonne) {
    let supprimerColonne = document.getElementById(idColonne);
        supprimerColonne.remove();
    nbColonne--;
}

function replaceCard(titreAncien, contenuAncien, texteNouveau, contenuNouveau) {
    document.getElementById(titreAncien).textContent = document.getElementById(texteNouveau).value;
    document.getElementById(contenuAncien).textContent = document.getElementById(contenuNouveau).value;

    let truc = document.getElementById("popup");
    while (truc.firstchild){
        truc.removechild(truc.firstchild);
    }
    document.getElementById("popup").remove();

}

function colorer(cardColor) {
    if (color == 1) {
        document.getElementById(cardColor).style.borderColor = "#FFB200";
        color++;
    }
    else if (color == 2) {
        document.getElementById(cardColor).style.borderColor = "#42FF00";
        color++;
    }
    else {
        document.getElementById(cardColor).style.borderColor = "#FFFF00";
        color = 1;
    }
}

function drag() {
    $(".drag").sortable({
        connectWith: ".drag",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all"
    });

    $(".portlet")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")


    $(".portlet-toggle").click(function () {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".portlet").find(".portlet-content").toggle();
    });
}

function modifier(titreAncien, descriptionAncien){
    let titre = titreAncien;
    let description= descriptionAncien;

    let popup = document.createElement('div');
    let cadrePopup = document.createElement('div');
    let formPopup = document.createElement('div');
    let boutonModif = document.createElement('button');

    let labelTitre = document.createElement('label');
    let inputTitre = document.createElement('input');
    let labelDescription = document.createElement('label');
    let inputDescription = document.createElement('input');
   
    let boutonModifTexte = document.createTextNode('Modifier');
    let labelTitreTexte = document.createTextNode('Titre');
    let labelDescriptionTexte = document.createTextNode('Description');

    popup.className="popup";
    cadrePopup.className="cadrePopup";
    formPopup.className="form-group";
    boutonModif.className="btn btn-secondary";
    inputTitre.className="form-control";
    inputDescription.className="form-control";

    inputTitre.id="titreNouveau";
    inputDescription.id="descriptionNouveau";
    popup.id="popup";

    labelTitre.appendChild(labelTitreTexte);
    labelDescription.appendChild(labelDescriptionTexte);
    boutonModif.appendChild(boutonModifTexte);

    popup.appendChild(cadrePopup);
    cadrePopup.appendChild(formPopup);
    formPopup.appendChild(labelTitre);
    formPopup.appendChild(inputTitre);
    formPopup.appendChild(labelDescription);
    formPopup.appendChild(inputDescription);
    cadrePopup.appendChild(boutonModif);
    document.getElementById("body").appendChild(popup);
    boutonModif.addEventListener("click", function () { replaceCard(titre, description, inputTitre.id, inputDescription.id) });
}