function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
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
    $('#apidata').text(data['name']);
    $('#apidata1').text('Rang: '+ data['wvw_rank']);
    // +' Votre rang est: '+data['wvw_rank']
    worldNameFetch(worldId);
    matchInProg(worldId)
}

async function worldNameFetch(worldId) {
    let url = 'https://api.guildwars2.com/v2/worlds?ids='+worldId;
    let data = await ( await fetch(url).catch(handleErr)).json();
    let name = data[0]['name'];
    if (data.code && data.code === 400 ){
        return;
    }
    $('#apidata2').text('Server: '+ name );
}

async function matchInProg(worldId) {
    let url = 'https://api.guildwars2.com/v2/wvw/matches/score?world='+worldId;
    let data = await ( await fetch(url).catch(handleErr)).json();
    let all_worlds = data['all_worlds']['red']+','+data['all_worlds']['blue']+','+data['all_worlds']['green'];
    let name ='https://api.guildwars2.com/v2/worlds?ids='+all_worlds;
    let data1 = await ( await fetch(name).catch(handleErr)).json();
    let watcherId = Math.max.apply( null, data['skirmishes'].map( s => +s.id ) );
    console.log(watcherId);

    if (data.code && data.code === 400 ){
        return;
    }
    $('#start_time').text('Match start: '+ data['start_time']);
    $('#end_time').text('Match end: '+ data['end_time']);
    $('#worlds').text('Server in match in progress: ');
    $('#red').text(' RED: '+ data1[0]['name'] +' ' + data1[1]['name'] +' Score escarmouche: '+data['victory_points']['red'] + ' Score actuel : ' + data['skirmishes'][watcherId-1]['scores']['red']);
    $('#blue').text(' BLUE: '+data1[2]['name'] +' ' + data1[3]['name'] +' Score escarmouche: '+data['victory_points']['blue']+ ' Score actuel : ' + data['skirmishes'][watcherId-1]['scores']['blue']);
    $('#green').text(' GREEN: '+data1[4]['name'] +' ' + data1[5]['name'] +' Score escarmouche: '+data['victory_points']['green'] + ' Score actuel : ' + data['skirmishes'][watcherId-1]['scores']['green']);
    $('#skirmish').text()
    console.log(data['skirmishes']);
}

async function wallet_ticket() {
    let tokenUser = document.getElementById('tokenUser');
    let token = tokenUser.value;
    let url = 'https://api.guildwars2.com/v2/account/wallet?access_token='+token;
    let data = await ( await fetch(url).catch(handleErr)).json();
    if (data.code && data.code === 400 ){
        return;
    }
    console.log(data[22]);
    $('#ticket').text('Nombre de ticket : '+data[22]['value'])

}
wallet_ticket();
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

function degree() {
    let degree = document.getElementById('degre');
    let results = (degree.value - 32)*5/9;
    $('#resultat').text(Math.floor(results)+'°C');
}