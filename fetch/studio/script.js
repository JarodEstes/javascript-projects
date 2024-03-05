//TODO: Add Your Code Below
window.addEventListener('load', function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(res)

    const container = document.getElementById("container");
    for (let i = 0; i < JSON.length; i++) {
        container.innerHTML = `
        <div class="astronaut">
        <div class="bio">
            <h3>${json[i].firstName} ${json[i].lastName}</h3>
            <ul>
            <li>Skills; Physician, Chemical Engineer</li>
            </ul>
        </div>
        <img class ="avatar" src="images/mac-jenison.jpg">
        `;
    }
})