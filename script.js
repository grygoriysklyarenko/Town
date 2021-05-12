let road = `<td class="road__td"></td>`,
    trees = `<td class="trees"></td>`,
    road__tr = `<tr><td colspan="9" class="road__tr"></td></tr>`,
    table = `
<table class="town">
    <tr>
        ${trees}
        ${renderCar(`first`, `second`)}
        ${renderCar(`third`, `fourth`, `second`)}
        ${renderCar(`fourth`, `first`)}
        ${road}
        ${trees}
    </tr>
    ${road__tr}
    <tr>
        ${trees}
        ${renderHome (`blue`)}
        ${renderHome (`pink`)}
        ${renderHome (`purple`)}
        ${road}
        ${trees}
    </tr>
    ${road__tr}
    <tr>
        ${trees}
        ${road}
        <td class="football__td"></td>
        ${road}
        <td class="ocean__td">
            <img src="images/whale.svg" alt="whale" width="45px">
        </td>
        ${road}
        <td class="ice__td"></td>
        ${road}
        ${trees}
    </tr>
</table>`;

function renderHome (houseColor) {
    let houseImg = `<img class="house" src="images/home--${houseColor}.svg" alt="home">`;
    let firstTr = `
    <tr>
        <td></td>
        <td>${houseImg}</td>
        <td>${houseImg}</td>
        <td></td>
    </tr>`;

    let housesTd = `
    ${road}
    <td class=houses__td>
        <table class="houses">
            ${firstTr}
            <tr>
                <td>${houseImg}</td>
                <td colspan="2"></td>
                <td>${houseImg}</td>
            </tr>
            ${firstTr}
        </table>
    </td>`;

    return housesTd;
}

function renderCar (firstCar, secondCar, thirdCar){
    if (thirdCar === undefined){
        carsTd = `
        ${road}
        <td class="parking__td">
            <img class = "car" src="images/cars/${firstCar}.svg" alt="car">
            <img class = "car" src="images/cars/${secondCar}.svg" alt="car">
        </td>`;
    } else {
        carsTd = `
        ${road}
        <td class="parking__td">
            <img class = "car" src="images/cars/${firstCar}.svg" alt="car">
            <img class = "car" src="images/cars/${secondCar}.svg" alt="car">
            <img class = "car" src="images/cars/${thirdCar}.svg" alt="car">
        </td>`;
    }
    
    return carsTd;
}

document.write(table);