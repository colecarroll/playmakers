console.log('hello');

//fancy box jquery script
$("[data-fancybox]").fancybox({
  selector : '[data-fancybox=""]',
loop     : true
	});

// ****** Davante Adams API get *******
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
// console.log(adamsData);
        adamsReceptions.innerText = (adamsData.Receptions)
        adamsRecYards.innerText = (adamsData.ReceivingYards);
        adamsTouchdowns.innerText =(adamsData.ReceivingTouchdowns)

        adamsReceptionsSeason.innerText =(adamsData.Receptions);
        adamsYardsSeason.innerText =(adamsData.ReceivingYards);
        adamsTdsSeason.innerText =(adamsData.ReceivingTouchdowns);
      })
  })

})

// ****** end of ADAMS Data ******

// **** start of COBB API Get *****

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

        cobbReceptionsSeason.innerText = (cobbData.Receptions);
        cobbYardsSeason.innerText =(cobbData.ReceivingYards);
        cobbTdsSeason.innerText =(cobbData.ReceivingTouchdowns);

      })
  })
})

// ****** End of COBB data *******


// ***** Beginning of BENNETT API Get ******
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

        bennettReceptionsSeason.innerText =(bennettData.Receptions);
        bennettYardsSeason.innerText =(bennettData.ReceivingYards);
        bennettTdsSeason.innerText =(bennettData.ReceivingTouchdowns);

      })
  })
})

/// ****** END BENNETT DATA ******

// ***** BEGINNING OF Nelson API Get*****

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

        nelsonReceptionsSeason.innerText =(nelsonData.Receptions);
        nelsonYardsSeason.innerText =(nelsonData.ReceivingYards);
        nelsonTdsSeason.innerText =(nelsonData.ReceivingTouchdowns);
      })
  })
})

// ***** END OF JORDY DATA *****

// ***** BEGINNING OF RODGERS API Get *******
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

        rodgersYardsSeason.innerText =(rodgersData.PassingYards);
        rodgersTdsSeason.innerText =(rodgersData.PassingTouchdowns);
        rodgersIntsSeason.innerText =(rodgersData.PassingInterceptions);
      })
  })
})

//  *****END OF RODGERS DATA*****

// ****** START OF Ty Montgomery API Get ******

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

        montgomeryRushYardsSeason.innerText =(montgomeryData.RushingYards);
        montgomeryRecYardsSeason.innerText =(montgomeryData.ReceivingYards);
        montgomeryTdsSeason.innerText =(montgomeryData.RushingTouchdowns);
      })
  })
})

// ***** END OF MONTY DATA *******
