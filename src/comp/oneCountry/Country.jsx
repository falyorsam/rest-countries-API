import React from "react";
import { useSelector } from "react-redux";
const Country = () => {
  const { countries } = useSelector((state) => state.country);
  const oneC = countries[0];
  // console.log(countries[0].borders[0]);
  return (
    <div className="oneCountry">
      <div className="oneCountryImg">
        <img
          className="countryImgInside"
          src={oneC.flags.png}
          alt={oneC.name}
        />
      </div>
      <div className="OneCountryInformation">
        <h3 className="oneCountryName">{oneC.name}</h3>
        <div className="for-1440px-one">
          <div className="for-1440px-one-country">
            <div className="InfoText pd-t-1440px">
              Native Name : <span>{oneC.nativeName}</span>
            </div>
            <div className="InfoText">
              Population : <span>{oneC.population}</span>
            </div>
            <div className="InfoText">
              Region : <span>{oneC.region}</span>
            </div>
            <div className="InfoText">
              Sub Region : <span>{oneC.subregion}</span>
            </div>
            <div className="InfoText">
              Capital : <span>{oneC.capital}</span>
            </div>
          </div>
          <div className="for-1440px-one-country">
            <div className="InfoText pd-t">
              Top Level Domain : <span>{oneC.topLevelDomain}</span>
            </div>
            <div className="InfoText">
              Currencies :
              {oneC.currencies.map((e) => {
                return <span key={e}>{e.name}</span>;
              })}
            </div>
            <div className="InfoText pd-b">
              Languages :
              <span>
                {oneC.languages.map((e) => {
                  return <p key={e.name}>{e.name}</p>;
                })}
              </span>
            </div>
          </div>
        </div>
        <div className="border">
          <div className="borderText">Border Countries:</div>
          <div className="gridIt">
            {countries[0].borders ? (
              countries[0].borders.map((e) => (
                <div key={e} className="borderCountry">
                  {e}
                </div>
              ))
            ) : (
              <div className="borderCountry noOne">no country</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
