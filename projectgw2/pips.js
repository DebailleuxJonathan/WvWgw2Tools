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

        // if (j == 10 || j == 20 || j == 25||j == 35 || j == 45 || j == 50 || j == 60 || j == 70 || j == 75 || j == 85 || j == 95) {
        //     var divempty = document.createElement('div');
        //     divempty.className = "empty";
        //     divWood.appendChild(divempty);
        // }

    }
    starRating('.left_section');
    countChecked();
}

function wood_check() {
    unicheck("wood_field", 101, "wood_pips", "wood", "wood");
    unicheck("bronze_field", 121, "bronze_pips", "bronze", "bronze");
    unicheck("silver_field", 176, "silver_pips", "silver", "silver");
    unicheck("gold_field", 201, "gold_pips", "gold", "gold");
    unicheck("platinium_field", 226, "platine_pips", "platine", "platine");
    unicheck("mithril_field", 301, "mithril_pips", "mithril", "mithril");
    unicheck("diamond_field", 331, "diamond_pips", "diamond", "diamond");
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
            var rating = $(this).attr('value');
            checkPrevStar(star, rating);
            uncheckNextStar(star, rating);
            countChecked();
        });
    });
}

var countChecked = function () {
    var n = $("input:checked").length;
    $("#divte").text(n + (n === 1 ? " is" : " are") + " checked!");
    $("#compte").text("Il vous reste encore " + Math.floor((1450 - n) * 5 / 5 / 60) + "h");
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


function Reset() {
    $('input[type=checkbox]').prop('checked', false);
    countChecked();
}