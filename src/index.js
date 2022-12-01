const API = "http://localhost:3000/ramens";
const ramenMenuDiv = document.getElementById("ramen-menu");

function singleRamen(ramen){
    const image = document.createElement("img");
    image.src = ramen.image;
    image.alt = ramen.name;
    
    ramenMenuDiv.append(image);
    image.addEventListener("click", e => {
        const name = document.getElementById("name");
        const detailImage = document.getElementById("detail-image");
        const restaurant = document.getElementById("restaurant");
        const ratingDisplay = document.getElementById("rating-display");
        const commentDisplay = document.getElementById("comment-display");

        detailImage.src = ramen.image;
        detailImage.alt = ramen.name;

        name.innerText = ramen.name;
        restaurant.innerText = ramen.restaurant;
        ratingDisplay.innerText = ramen.rating;
        commentDisplay.innerText = ramen.comment;

    })
}

const form = document.getElementById('new-ramen');

const createNewRamen = (e) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('new-name');

        const newRamen = {
            name: e.target.name.value,
            image: e.target.image.value,
            restaurant: e.target.restaurant.value,
            rating: e.target.rating.value,
            comment: e.target["new-comment"].value,
        }
        singleRamen(newRamen);
        e.target.reset();
    });
}

const renderRamen = () => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
        data.forEach(singleRamen);
    })
}

renderRamen();

createNewRamen();