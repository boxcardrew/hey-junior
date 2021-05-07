import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  const router = useRouter();

  const citiesList = [
    "Remote Only",
    "Alabama",
    "Alaska",
    "Phoenix-Mesa-Chandler, AZ",
    "Los Angeles-Long Beach-Anaheim, CA",
    "Riverside-San Bernardino-Ontario, CA",
    "Sacramento-Roseville-Folsom, CA",
    "San Diego-Chula Vista-Carlsbad, CA",
    "San Francisco-Oakland-Berkeley, CA",
    "San Jose-Sunnyvale-Santa Clara, CA",
    "Denver-Aurora-Lakewood, CO",
    "Hartford-East Hartford-Middletown, CT",
    "Washington-Arlington-Alexandria, DC-VA-MD-WV",
    "Miami-Fort Lauderdale-Pompano Beach, FL",
    "Jacksonville, FL",
    "Orlando-Kissimmee-Sanford, FL",
    "Tampa-St. Petersburg-Clearwater, FL",
    "Atlanta-Sandy Springs-Alpharetta, GA",
    "Chicago-Naperville-Elgin, IL-IN-WI",
    "Indianapolis-Carmel-Anderson, IN",
    "Louisville/Jefferson County, KY-IN",
    "New Orleans-Metairie, LA",
    "Baltimore-Columbia-Towson, MD",
    "Boston-Cambridge-Newton, MA-NH",
    "Detroit-Warren-Dearborn, MI",
    "Minneapolis-St. Paul-Bloomington, MN-WI",
    "Kansas City, MO-KS",
    "St. Louis, MO-IL",
    "Las Vegas-Henderson-Paradise, NV",
    "New York-Newark-Jersey City, NY-NJ-PA",
    "Buffalo-Cheektowaga, NY",
    "Charlotte-Concord-Gastonia, NC-SC",
    "Raleigh-Cary, NC",
    "Columbus, OH",
    "Cincinnati, OH-KY-IN",
    "Cleveland-Elyria, OH",
    "Oklahoma City, OK",
    "Portland-Vancouver-Hillsboro, OR-WA",
    "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD",
    "Pittsburgh, PA",
    "Providence-Warwick, RI-MA",
    "Nashville-Davidson--Murfreesboro--Franklin, TN",
    "Memphis, TN-MS-AR",
    "Dallas-Fort Worth-Arlington, TX",
    "San Antonio-New Braunfels, TX",
    "Austin-Round Rock-Georgetown, TX",
    "Houston-The Woodlands-Sugar Land, TX",
    "Salt Lake City, UT",
    "Richmond, VA",
    "Virginia Beach-Norfolk-Newport News, VA-NC",
    "Seattle-Tacoma-Bellevue, WA",
    "Milwaukee-Waukesha, WI",
  ];

  const submitSearch = (e) => {
    e.preventDefault();
    router.push(`/jobs/browse/search?query=${search}`);
  };

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
        section,
        form {
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
          section,
          form {
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
