const listeCours = document.getElementById('listeCours');
const barreRecherche = document.getElementById('barreRecherche');

let lesCours = [
    {
        "titre": "Demonstration",
        "langage": "lang1",
        "image": "https://media.giphy.com/media/hsDkitC0kWA60R5VEU/giphy.gif",
        "lien": "template.html"
    },
    {
        "titre": "titre2",
        "langage": "lang2",
        "image": "https://media.giphy.com/media/hsDkitC0kWA60R5VEU/giphy.gif",
        "lien": "template.html"
    },
    {
        "titre": "Angular App",
        "langage": "java",
        "image": "https://media.giphy.com/media/hsDkitC0kWA60R5VEU/giphy.gif",
        "lien": "template.html"
    },
    {
        "titre": "titre2",
        "langage": "html/css",
        "image": "https://media.giphy.com/media/hsDkitC0kWA60R5VEU/giphy.gif",
        "lien": "template.html"
    },
    {
        "titre": "Title",
        "langage": "langage",
        "image": "https://media.giphy.com/media/hsDkitC0kWA60R5VEU/giphy.gif",
        "lien": "template.html"
    },
    {
        "titre": "Random",
        "langage": "hazard",
        "image": "https://media.giphy.com/media/hsDkitC0kWA60R5VEU/giphy.gif",
        "lien": "template.html"
    }
];

//-------------------------------------------------------------------------------------------------------------------------

window.onload = () => { document.body.classList.add(localStorage.getItem("themeColor")); };

barreRecherche.addEventListener('keyup', (e) => {
    const recherche = e.target.value.toLowerCase();

    const filtreCours = lesCours.filter((cours) => {
        return (
            cours.titre.toLowerCase().includes(recherche) ||
            cours.langage.toLowerCase().includes(recherche)
        );
    });
    afficherCours(filtreCours);
});

const chargerCours = async () => {
    try {
        afficherCours(lesCours);
    } catch (err) {
        console.error(err);
    }
};

const afficherCours = (cartes) => {
    const htmlString = cartes
        .map((cours) => {
            return `
            <li class="cours">
                <h2>${cours.titre}</h2>
                <p>Langage: ${cours.langage}</p>
                <a href="${cours.lien}">Lien</a>
                <img src="${cours.image}"></img>
            </li>
        `;
        })
        .join('');
    listeCours.innerHTML = htmlString;
};

chargerCours();
//***********Theme******************************
const theme = document.querySelectorAll('.theme');

theme.forEach((item) =>{
    item.addEventListener('click', (e)=>{
        document.body.classList.remove("batmanTheme", "supermanTheme", "wonderwomanTheme");
        switch(e.target.id){
            case "batman": localStorage.setItem("themeColor", "batmanTheme"); 
                 document.body.classList.add("batmanTheme"); 
                break;
            case "superman":localStorage.setItem("themeColor", "supermanTheme");  document.body.classList.add("supermanTheme"); 
                break;
            case "wonderwoman":localStorage.setItem("themeColor", "wonderwomanTheme"); 
                 document.body.classList.add("wonderwomanTheme"); 
                break;
            default: localStorage.setItem("themeColor", "batmanTheme");
                document.body.classList.add("batmanTheme");
        }
    })
})



