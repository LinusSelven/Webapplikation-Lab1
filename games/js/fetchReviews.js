fetch('./reviews.json')
    .then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
    document.getElementById('reviews').innerHTML = `<h1> Displaying ${data.length} out of ${data.length} reviews </h1>
    ${data.map(function (review) {
        return `
            <article class="review">
            <div class="review-left">
            <img class="review-photo" src="${review.profilepic}">
            <h3>${review.name} <span class="location"></h3>
            <h4>${review.location}</h4>
            </div>
            <div class="review-right">
            <p>${review.content}</p>
            </div>
</article>`
    }).join('')}
`

    console.log(data);
}).catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
});