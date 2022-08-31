const loadCountries= () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then (data => displayCountries(data))
}

const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country)
    // }
    const countryContainer = document.getElementById('country-container');
    countries.forEach(country => {
       const countryDiv = document.createElement('div') ;
       countryDiv.classList.add('country');
       

      // console.log(country)
       countryDiv.innerHTML=`
       <h3> Name: ${country.name.common} </h3>
       <p> Capital: ${country.capital ? country.capital[0]: 'this country has no capital'} </p>
       <button onclick="loadCountryDetail('${country.cca2}')"> See Country Details </button> 
       
       `;
       countryContainer.appendChild(countryDiv)
    });
}
const loadCountryDetail= (code)=> {
  const url= ` https://restcountries.com/v3.1/alpha/${code}`
  fetch(url)
.then (res => res.json())
.then (data => displayCountryDetail(data[0]))  
    //console.log('hi',code,url)
}
const displayCountryDetail = country =>{
    const countryDetail = document.getElementById('country-detail');
    const lan= 'https://restcountries.com/v3.1/lang/{lang}'

    countryDetail.innerHTML=`
     <h3> ${country.name.common} </h3>
     <p>Continents: ${country.continents[0]}</p>
     <p>Population: ${country.population}</p>
     <p>Independent: ${country.independent}</p>
     <img src = "${country.flags.png}">
    `
}
loadCountries();