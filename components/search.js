import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  const router = useRouter();

  const citiesList = [
    "Remote Only",
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
  ];

  const submitSearch = (e) => {
    e.preventDefault()
    router.push(`/jobs/browse/search?query=${search}`)
  }

  return (
    <section>
      <form onSubmit={submitSearch}>
        <div>
          <input
            name="search"
            className="input search"
            placeholder="UX Designer"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <div>
          <select
            name="location"
            className="input location"
            placeholder="Phoenix, AZ"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option selected value="" disabled>
              Select a Location
            </option>
            {citiesList.map((city) => (
              <option value={city} className="location_option">
                {city}
              </option>
            ))}
            <option value="" disabled>
              More Cities Coming Soon
            </option>
          </select>
        </div>
      </form>
      <style jsx>{`
        section, form {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 4em;
        }
        div {
          width: 49%;
        }
        input,
        select {
          width: 100%;
          padding-left: 2.5em;
          position: relative;
        }
        .location_option:hover,
        option:focus {
          background-color: pink;
        }
        .search {
          background-image: url("/icons/search.svg");
          background-repeat: no-repeat;
          background-position: 8px center;
        }
        .location {
          background-image: url("/icons/place.svg"), url("/icons/expand.svg");
          background-repeat: no-repeat;
          background-position: 8px center, 97% center;
        }
        @media only screen and (max-width: 767px) {
          section, form {
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
