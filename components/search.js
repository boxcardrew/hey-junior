import { useEffect, useState } from "react";

import dynamic from "next/dynamic"


const SelectSearchInput = dynamic(() => import('./LocationSearch'));


export default function Search() {


  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
  const [locationQuery, setLocationQuery] = useState('');
  const [cities, setCities] = useState([]);
  const [matchedArray, setMatchedArray] = useState([]);
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  

  
  console.log(cities)

  
  
  
  // useEffect(() => {
  //   fetch(endpoint).then(blob => blob.json()).then(data => setCities(data));
  // }, [])

  // useEffect(() => {
  //   const filterCities = cities.filter(place => {
  //     const regex = new RegExp(locationQuery, 'gi');
  //     // return place.city.match(regex) || place.state.match(regex)
  //     return place.city.match(regex)
  //   })
  //   setMatchedArray(filterCities.slice(0, 4)) 
  // }, [locationQuery])

  // function findMatches(query, cities) {
  //   return cities.filter(place => {
  //     const regex = new RegExp(query, 'gi');
  //     return place.city.match(regex) || place.state.match(regex)
  //   });
  // }

  // function displayMatches() {
  //   const matchArray = findMatches(this.value, cities)
  //   const html = matchArray.map(place => {
  //     const regex = new RegExp(this.value, 'gi');
  //     const cityName = place.city.replace(regex, `<span>${this.value}</span>`)
  //     const stateName = place.state.replace(regex, `<span>${this.value}</span>`)
  //     return `
  //       <li>
  //         <span>${cityName}, ${stateName}</span>
  //       </li>
  //     `
  //   })
  // }

  const citiesList = [
    "Los Angeles-Long Beach-Anaheim, CA",
    "Chicago-Naperville-Elgin, IL-IN-WI",
    "New York-Newark-Jersey City, NY-NJ-PA",
    "Dallas-Fort Worth-Arlington, TX",
    "Houston-The Woodlands-Sugar Land, TX",
    "Washington-Arlington-Alexandria, DC-VA-MD-WV",
    "Miami-Fort Lauderdale-Pompano Beach, FL",
    "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD",
    "Atlanta-Sandy Springs-Alpharetta, GA",
    "Phoenix-Mesa-Chandler, AZ",
    "Boston-Cambridge-Newton, MA-NH",
    "San Francisco-Oakland-Berkeley, CA",
    "Riverside-San Bernardino-Ontario, CA",
    "Detroit-Warren-Dearborn, MI",
    "Seattle-Tacoma-Bellevue, WA",
    "Minneapolis-St. Paul-Bloomington, MN-WI",
    "San Diego-Chula Vista-Carlsbad, CA",
    "Tampa-St. Petersburg-Clearwater, FL",
    "Denver-Aurora-Lakewood, CO",
    "St. Louis, MO-IL",
    "Baltimore-Columbia-Towson, MD",
    "Charlotte-Concord-Gastonia, NC-SC",
    "Orlando-Kissimmee-Sanford, FL",
    "San Antonio-New Braunfels, TX",
    "Portland-Vancouver-Hillsboro, OR-WA",
    "Sacramento-Roseville-Folsom, CA",
    "Pittsburgh, PA",
    "Las Vegas-Henderson-Paradise, NV",
    "Austin-Round Rock-Georgetown, TX",
    "Cincinnati, OH-KY-IN",
    "Kansas City, MO-KS",
    "Columbus, OH",
    "Indianapolis-Carmel-Anderson, IN",
    "Cleveland-Elyria, OH",
    "San Jose-Sunnyvale-Santa Clara, CA",
    "Nashville-Davidson--Murfreesboro--Franklin, TN",
    "Virginia Beach-Norfolk-Newport News, VA-NC",
    "Providence-Warwick, RI-MA",
    "Milwaukee-Waukesha, WI",
    "Jacksonville, FL",
    "Oklahoma City, OK",
    "Raleigh-Cary, NC",
    "Memphis, TN-MS-AR",
    "Richmond, VA",
    "New Orleans-Metairie, LA",
    "Louisville/Jefferson County, KY-IN",
    "Salt Lake City, UT",
    "Hartford-East Hartford-Middletown, CT",
    "Buffalo-Cheektowaga, NY",
  ]

  // const filterItems = (arr, query) => {
  //   return arr.filter(el => el.toLowerCase().in {
  //     return <option value={el} /> }
  //   )
  // }


  return (
    <section>
      <div>
        <input className="input search" placeholder="UX Designer" onChange={(e) => setSearch(e.target.value)}></input>
      </div>
      <div>
      <SelectSearchInput location={location} setLocation={setLocation} />
      {/* <input className="input location" placeholder="Phoenix, AZ" list="cities" onChange={(e) => setLocation(e.target.value)} />

      <datalist id="cities">
        {location.length > 2 && citiesList.filter(city => city.includes(location)).slice(0, 3).map(filteredCity => (
          <option value={filteredCity} key={filteredCity} />
        ))}
      </datalist> */}
        {/* <input className="input location" placeholder="Phoenix, AZ" onChange={(event) => setLocationQuery(event.target.value)}></input>
        <ul>
          {cities ? matchedArray.map(place => <li><span>{place.city}, {place.state}</span></li>) : null}
        </ul> */}
        {/* <CityInput className="input search-input search-location" placeholder="Phoenix, AZ" /> */}
      </div>
      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 4em;
        }
        div {
          width: 49%;
        }
        input {
          width: 100%;
          padding-left: 2.5em;
          position: relative;
        }
        .search {
          background-image: url('/icons/search.svg');
          background-repeat: no-repeat;
          background-position: 8px center;
        }
        .location {
          background-image: url('/icons/place.svg');
          background-repeat: no-repeat;
          background-position: 8px center;
        }
        @media only screen and (max-width: 767px) {
          section {
            flex-direction: column;
            align-items: center;
            margin-bottom: 2em;
          }
          div {
            width: 100%;
            margin-bottom: 1em;
          }
        }
      `}</style>
    </section>
  );
}
