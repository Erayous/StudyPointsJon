import React, {useState, useEffect} from "react";
import countryFacade from "./countryFacade";

const CountryTable = () => {
  const [countryData, setcountryData] = useState([]);
  const [labelData, setlabelData] = useState([]);

  useEffect(() => {
    countryFacade.getCountries().then(data => setcountryData(data));
  }, [countryData]);

  useEffect(() => {
    countryFacade.getLabels().then(data => setlabelData(data));
  }, [labelData]);

    return (
      <div>
      <p>Replace the thead section with a row generated from the Labels endpoint</p>
      <p>Replace the tbody section with rows generated from the countries endpoint</p>
      <p>Fandt: {countryData.length} forskellige lande.</p>
    
      <table className="table" id="customers">
      <tr>
        {labelData.map(label =>
            <th>{label}</th>
        )}
      </tr>
      {countryData.map(country =>
         <tr>
            <td>{country.name}</td>
            <td>{country.capital}</td>
            <td>{country.capital}</td>
            <td>{country.region}</td>
            <td>{country.population}</td>
            <td>{country.area}</td>
            <td>{country.timezones}</td>
            <td>{country.topLevelDomain}</td>
            <td>{country.currencies}</td>
            <td>{country.languages}</td>
        </tr>
      )}
    </table>
      </div>
    );
};
export default CountryTable;