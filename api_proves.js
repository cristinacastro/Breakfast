

    const recipesResults = peopleJSON.recipe.map( async recipe => {
        const craft = recipe.title;
        const recipeResponse = await fetch(wikiUrl + person.name);
        const recipesJSON = await recipeResponse.json();

        return {...recipesJSON, title}
    })
    return Promise.all(recipesResults);
}

function generateHTML(data) {
    data.map(recipe => {
        const section = document.createElement('section');
        peopleList.appendChild(section);
        const thumbnail = person.thumbnail ? `<img src='${person.thumbnail.source}'>` : '';
        section.innerHTML = `
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        ${thumbnail}
        <p>${person.description}</p>
        <p>${person.extract}</p>
        `
    })
}