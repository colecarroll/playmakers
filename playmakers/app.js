console.log('hello');

//fancy box jquery script
$("[data-fancybox]").fancybox({
  selector : '[data-fancybox=""]',
loop     : true
	});

// ****** Davante Adams Ajax pull *******
var adamsForm =document.getElementById('AdamsStats')

var adamsReceptions = document.getElementById('adamsReceptions');
var adamsRecYards = document.getElementById('adamsYards');
var adamsTouchdowns = document.getElementById('adamsTouchdowns');

var adamsReceptionsSeason = document.getElementById('adamsReceptionsSeason');
var adamsYardsSeason = document.getElementById('adamsYardsSeason');
var adamsTdsSeason = document.getElementById('adamsTdsSeason');


adamsForm.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('clicked');
  var myHeaders = new Headers();
  myHeaders.append("Ocp-Apim-Subscription-Key", "398a598909fb4552931ab671df0a63ba");
  var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }

  fetch(`https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/2017REG/1/16470`, myInit)
  .then(function(response) {
    return response.json()
      .then(function(adamsData) {

        adamsReceptions.innerText = (adamsData.Receptions)
        adamsRecYards.innerText = (adamsData.ReceivingYards);
        adamsTouchdowns.innerText =(adamsData.ReceivingTouchdowns)

        adamsReceptionsSeason.append(adamsData.Receptions);
        adamsYardsSeason.append(adamsData.ReceivingYards);
        adamsTdsSeason.append(adamsData.ReceivingTouchdowns);
      })
  })

})

// ****** end of ADAMS Data ******

// **** start of COBB Data *****

var cobbForm =document.getElementById('cobbStats')

var cobbReceptions = document.getElementById('cobbReceptions');
var cobbYards = document.getElementById('cobbYards');
var cobbTouchdowns = document.getElementById('cobbTouchdowns');

var cobbReceptionsSeason = document.getElementById('cobbReceptionsSeason');
var cobbYardsSeason = document.getElementById('cobbYardsSeason');
var cobbTdsSeason = document.getElementById('cobbTdsSeason');


cobbForm.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('clicked');
  var myHeaders = new Headers();
  myHeaders.append("Ocp-Apim-Subscription-Key", "398a598909fb4552931ab671df0a63ba");
  var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }
  fetch(`https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/2017REG/1/13227`, myInit)
  .then(function(response) {
    return response.json()
      .then(function(cobbData) {
        cobbReceptions.innerText = (cobbData.Receptions);
        cobbYards.innerText = (cobbData.ReceivingYards);
        cobbTouchdowns.innerText=(cobbData.ReceivingTouchdowns);

        cobbReceptionsSeason.append(cobbData.Receptions);
        cobbYardsSeason.append(cobbData.ReceivingYards);
        cobbTdsSeason.append(cobbData.ReceivingTouchdowns);

      })
  })
})

// ****** End of COBB data *******


// ***** Beginning of BENNETT Data ******
var bennettForm =document.getElementById('bennettStats')

var bennettReceptions = document.getElementById('bennettReceptions');
var bennettYards = document.getElementById('bennettYards');
var bennettTouchdowns = document.getElementById('bennettTouchdowns');

var bennettReceptionsSeason = document.getElementById('bennettReceptionsSeason');
var bennettYardsSeason = document.getElementById('bennettYardsSeason');
var bennettTdsSeason = document.getElementById('bennettTdsSeason');


bennettForm.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('clicked');
  var myHeaders = new Headers();
  myHeaders.append("Ocp-Apim-Subscription-Key", "398a598909fb4552931ab671df0a63ba");
  var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }
  fetch(`https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/2017REG/1/1181`, myInit)
  .then(function(response) {
    return response.json()
      .then(function(bennettData) {
        bennettReceptions.innerText = (bennettData.Receptions);
        bennettYards.innerText = (bennettData.ReceivingYards);
        bennettTouchdowns.innerText= (bennettData.ReceivingTouchdowns);

        bennettReceptionsSeason.append(bennettData.Receptions);
        bennettYardsSeason.append(bennettData.ReceivingYards);
        bennettTdsSeason.append(bennettData.ReceivingTouchdowns);

      })
  })
})

/// ****** END BENNETT DATA ******

// ***** BEGINNING OF JORDY data *****

var nelsonForm =document.getElementById('nelsonStats')

var nelsonReceptions = document.getElementById('nelsonReceptions');
var nelsonYards = document.getElementById('nelsonYards');
var nelsonTouchdowns = document.getElementById('nelsonTouchdowns');

var nelsonReceptionsSeason = document.getElementById('nelsonReceptionsSeason');
var nelsonYardsSeason = document.getElementById('nelsonYardsSeason');
var nelsonTdsSeason = document.getElementById('nelsonTdsSeason');


nelsonForm.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('clicked');
  var myHeaders = new Headers();
  myHeaders.append("Ocp-Apim-Subscription-Key", "398a598909fb4552931ab671df0a63ba");
  var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }
  fetch(`https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/2017REG/1/4556`, myInit)
  .then(function(response) {
    return response.json()
      .then(function(nelsonData) {
        console.log(nelsonData);
        nelsonReceptions.innerText = (nelsonData.Receptions);
        nelsonYards.innerText = (nelsonData.ReceivingYards);
        nelsonTouchdowns.innerText= (nelsonData.ReceivingTouchdowns);

        nelsonReceptionsSeason.append(nelsonData.Receptions);
        nelsonYardsSeason.append(nelsonData.ReceivingYards);
        nelsonTdsSeason.append(nelsonData.ReceivingTouchdowns);
      })
  })
})

// ***** END OF JORDY DATA *****

// ***** BEGINNING OF RODGERS DATA *******
var rodgersForm =document.getElementById('rodgersStats')

var rodgersYards = document.getElementById('rodgersYards');
var rodgersTds = document.getElementById('rodgersTds');
var rodgersInts = document.getElementById('rodgersInts');

var rodgersYardsSeason = document.getElementById('rodgersYardsSeason');
var rodgersTdsSeason = document.getElementById('rodgersTdsSeason');
var rodgersIntsSeason = document.getElementById('rodgersIntsSeason');


rodgersForm.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('clicked');
  var myHeaders = new Headers();
  myHeaders.append("Ocp-Apim-Subscription-Key", "398a598909fb4552931ab671df0a63ba");
  var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }
  fetch(`https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/2017REG/1/2593`, myInit)
  .then(function(response) {
    return response.json()
      .then(function(rodgersData) {
        console.log(rodgersData);
        rodgersYards.innerText = (rodgersData.PassingYards);
        rodgersTds.innerText = (rodgersData.PassingTouchdowns);
        rodgersInts.innerText= (rodgersData.PassingInterceptions);

        rodgersYardsSeason.append(rodgersData.PassingYards);
        rodgersTdsSeason.append(rodgersData.PassingTouchdowns);
        rodgersIntsSeason.append(rodgersData.PassingInterceptions);
      })
  })
})

//  *****END OF RODGERS DATA*****

// ****** START OF MONTY DATA ******

var montgomeryForm =document.getElementById('MontgomeryStats')

var montgomeryRushYards = document.getElementById('montgomeryRushYards');
var montgomeryRecYards = document.getElementById('montgomeryRecYards');
var montgomeryTds = document.getElementById('montgomeryTds');

var mongtomeryRushYardsSeason = document.getElementById('montgomeryRushYardsSeason');
var montgomeryRecYardsSeason = document.getElementById('montgomeryRecYardsSeason');
var montgomeryTdsSeason = document.getElementById('montgomeryTdsSeason');


montgomeryForm.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('clicked');
  var myHeaders = new Headers();
  myHeaders.append("Ocp-Apim-Subscription-Key", "398a598909fb4552931ab671df0a63ba");
  var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }
  fetch(`https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/2017REG/1/16855`, myInit)
  .then(function(response) {
    return response.json()
      .then(function(montgomeryData) {
        console.log(montgomeryData);
        montgomeryRushYards.innerText = (montgomeryData.RushingYards);
        montgomeryRecYards.innerText = (montgomeryData.ReceivingYards);
        montgomeryTds.innerText= (montgomeryData.RushingTouchdowns);

        montgomeryRushYardsSeason.append(montgomeryData.RushingYards);
        montgomeryRecYardsSeason.append(montgomeryData.ReceivingYards);
        montgomeryTds.append(montgomeryData.RushingTouchdowns);
      })
  })
})

// ***** END OF MONTY DATA *******
