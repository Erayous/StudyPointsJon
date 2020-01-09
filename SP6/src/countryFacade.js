//Add imports here

const label_url = "http://localhost:3333/labels";
const countries_url = "http://localhost:3333/countries";

function handleHttpErrors(res) {
	if (!res.ok) {
		return Promise.reject({status: res.status, fullError: res.json()}) 
	}
	//window.M.toast({html: "Serveren returnerede: " + res.status})
	return res.json();
}

const countryFacade = () => {

  const getLabels = () => {
    return fetch(label_url).then(handleHttpErrors);
  }

  const getCountries = () => {
    return fetch(countries_url).then(handleHttpErrors);
  }
  return {
    getLabels,
    getCountries
  }

  
}
export default  countryFacade();