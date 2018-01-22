var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
//var err = alert('Cos Nie Zadziałało');
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList,
	
  
	error: function(response){
		alert('ERROR!!! Cos Nie Zadziałało')
	}
});
}
function showCountriesList(resp) {
  countriesList.empty();
    resp.forEach(function(item) {
	 $('<li>').text(item.name).appendTo(countriesList);
	$('<li>').text('Capital is:' + item.capital).appendTo(countriesList);
	$('<li>').text('Area:' + item.area).appendTo(countriesList);
    $('<li>').text('Population:' + item.population).appendTo(countriesList);
    
    });
}
