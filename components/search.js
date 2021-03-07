import { useEffect, useState } from "react";


export default function Search() {


  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
  const [locationQuery, setLocationQuery] = useState('ph');
  const [cities, setCities] = useState([]);
  const [matchedArray, setMatchedArray] = useState([]);

  

  
  console.log(cities)

  
  
  
  useEffect(() => {
    fetch(endpoint).then(blob => blob.json()).then(data => setCities(data));
  }, [])

  useEffect(() => {
    const filterCities = cities.filter(place => {
      const regex = new RegExp(locationQuery, 'gi');
      // return place.city.match(regex) || place.state.match(regex)
      return place.city.match(regex)
    })
    setMatchedArray(filterCities.slice(0, 4)) 
  }, [locationQuery])

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


  return (
    <section>
      <div>
        <input className="input search" placeholder="UX Designer"></input>
      </div>
      <div>
        <input className="input location" placeholder="Phoenix, AZ" onChange={(event) => setLocationQuery(event.target.value)}></input>
        <ul>
          {cities ? matchedArray.map(place => <li><span>{place.city}, {place.state}</span></li>) : null}
        </ul>
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
