function unicheck(wood_field, number_pips, class_name_checkbox, id_checkbox, label_checkbox) {
    var woodField = document.getElementById(wood_field);
    var tab = [];
    for (var i = 1; i < number_pips; i++) {
        tab[i]++;
    }
    for (var j = 1; j < tab.length; j++) {

        var divWood = document.createElement('div');
        var checkbox_wood = document.createElement('input');
        divWood.className = class_name_checkbox;
        checkbox_wood.type = "checkbox";
        checkbox_wood.name = "checkbox_chest";
        checkbox_wood.value = j;
        checkbox_wood.id = id_checkbox + j;
        woodField.appendChild(divWood);
        divWood.appendChild(checkbox_wood);
        var label_wood = document.createElement('label');
        // assigning attributes for
        // the created label tag
        label_wood.htmlFor = label_checkbox + j;
        // appending the created teAxt to
        // the created label tag
        label_wood.appendChild(document.createTextNode(""));
        divWood.appendChild(label_wood);

        if (j == 100 || j == 220 || j == 395||j == 595 || j == 820 || j == 1120) {
            var divempty = document.createElement('div');
            divempty.className = "empty";
            divWood.appendChild(divempty);


        }
        if (checkbox_wood.value > 100 && checkbox_wood.value < 221){
            woodField = document.getElementById("bronze_field");
            divWood.classList.remove('wood_pips');
            divWood.classList.add("bronze_pips");
            woodField.appendChild(divWood);

        }
        if (checkbox_wood.value > 220 && checkbox_wood.value < 396){
            woodField = document.getElementById("silver_field");
            divWood.classList.remove('wood_pips');
            divWood.classList.add("silver_pips");
            woodField.appendChild(divWood);

        }
        if (checkbox_wood.value > 395 && checkbox_wood.value < 596){
            woodField = document.getElementById("gold_field");
            divWood.classList.remove('wood_pips');
            divWood.classList.add("gold_pips");
            woodField.appendChild(divWood);

        }
        if (checkbox_wood.value > 595 && checkbox_wood.value < 821){
            woodField = document.getElementById("platinium_field");
            divWood.classList.remove('wood_pips');
            divWood.classList.add("platine_pips");
            woodField.appendChild(divWood);

        }
        if (checkbox_wood.value > 820 && checkbox_wood.value < 1121){
            woodField = document.getElementById("mithril_field");
            divWood.classList.remove('wood_pips');
            divWood.classList.add("mithril_pips");
            woodField.appendChild(divWood);

        }
        if (checkbox_wood.value > 1120 && checkbox_wood.value < 1451){
            woodField = document.getElementById("diamond_field");
            divWood.classList.remove('wood_pips');
            divWood.classList.add("diamond_pips");
            woodField.appendChild(divWood);

        }

    }

    starRating('.left_section');
    countChecked();
}

function wood_check() {
    unicheck("wood_field", 1451, "wood_pips", "wood", "wood");
}


function checkPrevStar(element, count) {
    if (count > 1) {
        element.parent().prev().find('input[type=checkbox]').prop('checked', true);
        element = element.parent().prev().find('input[type=checkbox]');
        count--;
        checkPrevStar(element, count);
    }
}

function uncheckNextStar(element, count) {
    if (count < 1600) {
        element.parent().next().find('input[type=checkbox]').prop('checked', false);
        element = element.parent().next().find('input[type=checkbox]');
        count++;
        uncheckNextStar(element, count);
    }
}


function starRating(var_pips) {
    $(var_pips).find('input[type=checkbox]').each(function () {
        $(this).on('click', function () {
            var star = $(this);
            console.log("star : "+star);
            var rating = $(this).attr('value');
            console.log("Value : "+rating);
            checkPrevStar(star, rating);
            uncheckNextStar(star, rating);
            countChecked();
        });
    });
}

var countChecked = function () {
    var n = $("input:checked").length;
    let div_time = document.getElementById('div_time').value ;
    $("#divte").text(n + (n === 1 ? " is" : " are") + " checked!");
    if(div_time == '' || div_time >= 15){
        console.log(div_time);
        $("#compte").text("Veuillez rentrez une valeur correcte")
    } else{
        console.log(div_time);
        $("#compte").text("Il vous reste encore " + Math.floor((1450 - n) * 5 / div_time /60) + "h");
    }

};
countChecked();

$("input[type=checkbox]").on("click", countChecked);


let togg1 = document.getElementById("wood_chest_id");
let togg2 = document.getElementById("bronze_chest_id");
let togg3 = document.getElementById("silver_chest_id");
let togg4 = document.getElementById("gold_chest_id");
let togg5 = document.getElementById("platinium_chest_id");
let togg6 = document.getElementById("mithril_chest_id");
let togg7 = document.getElementById("diamond_chest_id");
let d1 = document.getElementById("hide_wood");
let d2 = document.getElementById("hide_bronze");
let d3 = document.getElementById("hide_silver");
let d4 = document.getElementById("hide_gold");
let d5 = document.getElementById("hide_platine");
let d6 = document.getElementById("hide_mithril");
let d7 = document.getElementById("hide_diamond");
togg1.addEventListener("click", () => {
    if (getComputedStyle(d1).display != "none") {
        d1.style.display = "none";
    } else {
        d1.style.display = "block";
    }
})
togg3.addEventListener("click", () => {
    if (getComputedStyle(d3).display != "none") {
        d3.style.display = "none";
    } else {
        d3.style.display = "block";
    }
})
togg4.addEventListener("click", () => {
    if (getComputedStyle(d4).display != "none") {
        d4.style.display = "none";
    } else {
        d4.style.display = "block";
    }
})
togg5.addEventListener("click", () => {
    if (getComputedStyle(d5).display != "none") {
        d5.style.display = "none";
    } else {
        d5.style.display = "block";
    }
})
togg6.addEventListener("click", () => {
    if (getComputedStyle(d6).display != "none") {
        d6.style.display = "none";
    } else {
        d6.style.display = "block";
    }
})
togg7.addEventListener("click", () => {
    if (getComputedStyle(d7).display != "none") {
        d7.style.display = "none";
    } else {
        d7.style.display = "block";
    }
})

function togg() {
    if (getComputedStyle(d2).display != "none") {
        d2.style.display = "none";
    } else {
        d2.style.display = "block";
    }

};
togg2.onclick = togg;

function buttonDisplayAll(div) {
    $(div + 'input[type=checkbox]').prop('checked', true);

    if(div == '.wood_pips'){
        $(div + 'input[type=checkbox]').prop('checked', true);
        $('.wood_pips input[type=checkbox]').prop('checked', true);

    }
    else{
        $('.bronze_pips input[type=checkbox]').prop('checked', false);
        $('.silver_pips input[type=checkbox]').prop('checked', false);
        $('.gold_pips input[type=checkbox]').prop('checked', false);
        $('.platine_pips input[type=checkbox]').prop('checked', false);
        $('.mithril_pips input[type=checkbox]').prop('checked', false);
        $('.diamond_pips input[type=checkbox]').prop('checked', false);
    if(div == '.bronze_pips '){
        $('.wood_pips input[type=checkbox]').prop('checked', true);
        $('.bronze_pips input[type=checkbox]').prop('checked', true);
    }
    }
    if(div == '.silver_pips '){
        $('.wood_pips input[type=checkbox]').prop('checked', true);
        $('.bronze_pips input[type=checkbox]').prop('checked', true);
        $('.silver_pips input[type=checkbox]').prop('checked', true);

    }
    if(div == '.gold_pips '){
        $('.wood_pips input[type=checkbox]').prop('checked', true);
        $('.bronze_pips input[type=checkbox]').prop('checked', true);
        $('.silver_pips input[type=checkbox]').prop('checked', true);
        $('.gold_pips input[type=checkbox]').prop('checked', true);

    }
    if(div == '.platine_pips '){
        $('.wood_pips input[type=checkbox]').prop('checked', true);
        $('.bronze_pips input[type=checkbox]').prop('checked', true);
        $('.silver_pips input[type=checkbox]').prop('checked', true);
        $('.gold_pips input[type=checkbox]').prop('checked', true);
        $('.platine_pips input[type=checkbox]').prop('checked', true);

    }
    if(div == '.mithril_pips '){
        $('.wood_pips input[type=checkbox]').prop('checked', true);
        $('.bronze_pips input[type=checkbox]').prop('checked', true);
        $('.silver_pips input[type=checkbox]').prop('checked', true);
        $('.gold_pips input[type=checkbox]').prop('checked', true);
        $('.platine_pips input[type=checkbox]').prop('checked', true);
        $('.mithril_pips input[type=checkbox]').prop('checked', true);

    }
    if(div == '.diamond_pips '){
        $('.wood_pips input[type=checkbox]').prop('checked', true);
        $('.bronze_pips input[type=checkbox]').prop('checked', true);
        $('.silver_pips input[type=checkbox]').prop('checked', true);
        $('.gold_pips input[type=checkbox]').prop('checked', true);
        $('.platine_pips input[type=checkbox]').prop('checked', true);
        $('.mithril_pips input[type=checkbox]').prop('checked', true);
        $('.diamond_pips input[type=checkbox]').prop('checked', true);
    }
    else{
        console.log('off');
    }
    console.log(div);
    countChecked();
}

function Reset() {
    $('input[type=checkbox]').prop('checked', false);
    countChecked();
}