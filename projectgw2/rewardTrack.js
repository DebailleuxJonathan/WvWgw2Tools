function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
        return rhours + " hour(s) and " + rminutes + " minute(s).";
}

function progressBar() {
    let coupon = document.getElementById('coupon');
    let resultat = document.getElementById('bar');
    let test = coupon.value * 100 / 20000;
    if (test < 20001){
        resultat.style.width = test + "%";
        resultat.style.animation=  "move 2s linear infinite";
        $('#text_resultat').text(''+coupon.value+'/20000');

    }
    else{
        resultat.style.width = "100%";
    }
}

function buttonProgressBar(div_id) {
    let resultat = document.getElementById('bar');

    if(div_id === '#button_1_7'){
        resultat.style.width = "12.5%";
        $('#text_resultat').text('2500/20000');
    }if(div_id === '#button_2_7'){
        resultat.style.width = "25%";
        $('#text_resultat').text('5000/20000');
    }if(div_id === '#button_3_7'){
        resultat.style.width = "37.5%";
        $('#text_resultat').text('7500/20000');
    }if(div_id === '#button_4_7'){
        resultat.style.width = "50%";
        $('#text_resultat').text('10000/20000');
    }if(div_id === '#button_5_7'){
        resultat.style.width = "62.5%";
        $('#text_resultat').text('12500/20000');
    }if(div_id === '#button_6_7'){
        resultat.style.width = "75%";
        $('#text_resultat').text('15000/20000');
    }if(div_id === '#button_7_7'){
        resultat.style.width = "87.5%";
        $('#text_resultat').text('17500/20000');
    }

}

function timeOfReward() {
    let tickPerMin = document.getElementById('tickpermin');
    $("#resultat").text("Il vous reste encore " + timeConvert((20000 - coupon.value) / tickPerMin.value * 5));
}
/* GW2 API query tool for account achievements */
// Function to convert an object variable into a table
async function fetchApiData() {
    // '88D8A5F4-5D96-D044-83C6-FADFE570501F8CB77742-4C65-4953-97A9-0050DB86A0D7'
    let tokenUser = document.getElementById('tokenUser');
    let token = tokenUser.value;
    let url = 'https://api.guildwars2.com/v2/account?access_token='+token;
    let data = await ( await fetch(url).catch(handleErr)).json();
    let worldId = data['world'];
    if (data.code && data.code === 400 ){
        return;
    }
    console.log(data);
    $('#apidata').text(JSON.stringify(data['name']));
    $('#apidata1').text(JSON.stringify('Rang: '+ data['wvw_rank']));
    // +' Votre rang est: '+data['wvw_rank']
    worldNameFetch(worldId);
}

async function worldNameFetch(worldId) {
    let url = 'https://api.guildwars2.com/v2/worlds?ids='+worldId;
    let data = await ( await fetch(url).catch(handleErr)).json();
    if (data.code && data.code === 400 ){
        return;
    }
    console.log(data);
    $('#apidata2').text(JSON.stringify('Server: '+ data['id']));


}

function handleErr(err) {
    console.warn(err);
    let resp = new Response(
        JSON.stringify({
            code: 400,
            message: 'Error network'
        })
    );
    return resp;
}
fetchApiData();