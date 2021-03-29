import SelectSearch, { fuzzySearch } from "react-select-search";

/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */
const options = [
  {
    "name": "Los Angeles-Long Beach-Anaheim, CA",
    "value": "Los Angeles-Long Beach-Anaheim, CA",
  },
  {
    "name": "Chicago-Naperville-Elgin, IL-IN-WI",
    "value": "Chicago-Naperville-Elgin, IL-IN-WI",
  },
  {
    "name": "New York-Newark-Jersey City, NY-NJ-PA",
    "value": "New York-Newark-Jersey City, NY-NJ-PA",
  },
  {
    "name": "Dallas-Fort Worth-Arlington, TX",
    "value": "Dallas-Fort Worth-Arlington, TX",
  },
  {
    "name": "Houston-The Woodlands-Sugar Land, TX",
    "value": "Houston-The Woodlands-Sugar Land, TX",
  },
  {
    "name": "Washington-Arlington-Alexandria, DC-VA-MD-WV",
    "value": "Washington-Arlington-Alexandria, DC-VA-MD-WV",
  },
  {
    "name": "Miami-Fort Lauderdale-Pompano Beach, FL",
    "value": "Miami-Fort Lauderdale-Pompano Beach, FL",
  },
  {
    "name": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD",
    "value": "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD",
  },
  {
    "name": "Atlanta-Sandy Springs-Alpharetta, GA",
    "value": "Atlanta-Sandy Springs-Alpharetta, GA",
  },
  {
    "name": "Phoenix-Mesa-Chandler, AZ",
    "value": "Phoenix-Mesa-Chandler, AZ",
  },
  {
    "name": "Boston-Cambridge-Newton, MA-NH",
    "value": "Boston-Cambridge-Newton, MA-NH",
  },
  {
    "name": "San Francisco-Oakland-Berkeley, CA",
    "value": "San Francisco-Oakland-Berkeley, CA",
  },
  {
    "name": "Riverside-San Bernardino-Ontario, CA",
    "value": "Riverside-San Bernardino-Ontario, CA",
  },
  {
    "name": "Detroit-Warren-Dearborn, MI",
    "value": "Detroit-Warren-Dearborn, MI",
  },
  {
    "name": "Seattle-Tacoma-Bellevue, WA",
    "value": "Seattle-Tacoma-Bellevue, WA",
  },
  {
    "name": "Minneapolis-St. Paul-Bloomington, MN-WI",
    "value": "Minneapolis-St. Paul-Bloomington, MN-WI",
  },
  {
    "name": "San Diego-Chula Vista-Carlsbad, CA",
    "value": "San Diego-Chula Vista-Carlsbad, CA",
  },
  {
    "name": "Tampa-St. Petersburg-Clearwater, FL",
    "value": "Tampa-St. Petersburg-Clearwater, FL",
  },
  {
    "name": "Denver-Aurora-Lakewood, CO",
    "value": "Denver-Aurora-Lakewood, CO",
  },
  {
    "name": "St. Louis, MO-IL",
    "value": "St. Louis, MO-IL",
  },
  {
    "name": "Baltimore-Columbia-Towson, MD",
    "value": "Baltimore-Columbia-Towson, MD",
  },
  {
    "name": "Charlotte-Concord-Gastonia, NC-SC",
    "value": "Charlotte-Concord-Gastonia, NC-SC",
  },
  {
    "name": "Orlando-Kissimmee-Sanford, FL",
    "value": "Orlando-Kissimmee-Sanford, FL",
  },
  {
    "name": "San Antonio-New Braunfels, TX",
    "value": "San Antonio-New Braunfels, TX",
  },
  {
    "name": "Portland-Vancouver-Hillsboro, OR-WA",
    "value": "Portland-Vancouver-Hillsboro, OR-WA",
  },
  {
    "name": "Sacramento-Roseville-Folsom, CA",
    "value": "Sacramento-Roseville-Folsom, CA",
  },
  {
    "name": "Pittsburgh, PA",
    "value": "Pittsburgh, PA",
  },
  {
    "name": "Las Vegas-Henderson-Paradise, NV",
    "value": "Las Vegas-Henderson-Paradise, NV",
  },
  {
    "name": "Austin-Round Rock-Georgetown, TX",
    "value": "Austin-Round Rock-Georgetown, TX",
  },
  {
    "name": "Cincinnati, OH-KY-IN",
    "value": "Cincinnati, OH-KY-IN",
  },
  {
    "name": "Kansas City, MO-KS",
    "value": "Kansas City, MO-KS",
  },
  {
    "name": "Columbus, OH",
    "value": "Columbus, OH",
  },
  {
    "name": "Indianapolis-Carmel-Anderson, IN",
    "value": "Indianapolis-Carmel-Anderson, IN",
  },
  {
    "name": "Cleveland-Elyria, OH",
    "value": "Cleveland-Elyria, OH",
  },
  {
    "name": "San Jose-Sunnyvale-Santa Clara, CA",
    "value": "San Jose-Sunnyvale-Santa Clara, CA",
  },
  {
    "name": "Nashville-Davidson--Murfreesboro--Franklin, TN",
    "value": "Nashville-Davidson--Murfreesboro--Franklin, TN",
  },
  {
    "name": "Virginia Beach-Norfolk-Newport News, VA-NC",
    "value": "Virginia Beach-Norfolk-Newport News, VA-NC",
  },
  {
    "name": "Providence-Warwick, RI-MA",
    "value": "Providence-Warwick, RI-MA",
  },
  {
    "name": "Milwaukee-Waukesha, WI",
    "value": "Milwaukee-Waukesha, WI",
  },
  {
    "name": "Jacksonville, FL",
    "value": "Jacksonville, FL",
  },
  {
    "name": "Oklahoma City, OK",
    "value": "Oklahoma City, OK",
  },
  {
    "name": "Raleigh-Cary, NC",
    "value": "Raleigh-Cary, NC",
  },
  {
    "name": "Memphis, TN-MS-AR",
    "value": "Memphis, TN-MS-AR",
  },
  {
    "name": "Richmond, VA",
    "value": "Richmond, VA",
  },
  {
    "name": "New Orleans-Metairie, LA",
    "value": "New Orleans-Metairie, LA",
  },
  {
    "name": "Louisville/Jefferson County, KY-IN",
    "value": "Louisville/Jefferson County, KY-IN",
  },
  {
    "name": "Salt Lake City, UT",
    "value": "Salt Lake City, UT",
  },
  {
    "name": "Hartford-East Hartford-Middletown, CT",
    "value": "Hartford-East Hartford-Middletown, CT",
  },
  {
    "name": "Buffalo-Cheektowaga, NY",
    "value": "Buffalo-Cheektowaga, NY",
  },
];

/* Simple example */
export default function location({ location, setLocation }) {
  return (
    <>
      <SelectSearch
      printOptions="on-focus"
      onChange={setLocation}
        options={options}
        value={location}
        name="language"
        placeholder="Enter a City"
        emptyMessage="More Cities Coming Soon"
        search
        filterOptions={options => {
            const filter = fuzzySearch(options);

            return (q) => filter(q).slice(0, 4);
        }}
      />
    </>
  );
}
