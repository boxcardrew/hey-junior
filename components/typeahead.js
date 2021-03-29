import { useEffect, useState } from "react";
import { Hint } from "react-autocomplete-hint";

// const options = ["orange", "banana", "apple"];

// OR

export const CityInput = ( {className, placeholder, setFieldValue} ) => {
  const [text, setText] = useState("");
  const options = [
    {
      id: 1,
      label: "San Jose-Sunnyvale-Santa Clara, CA",
    },
    {
      id: 2,
      label: "Huntsville, AL",
    },
    {
      id: 3,
      label: "Seattle-Bellevue-Everett, WA",
    },
    {
      id: 4,
      label: "Durham-Chapel Hill, NC",
    },
    {
      id: 5,
      label: "Boulder, CO",
    },
    {
      id: 6,
      label: "San Francisco-San Mateo-Redwood City, CA",
    },
    {
      id: 7,
      label: "Washington-Arlington-Alexandria, DC-VA-MD-WV",
    },
    {
      id: 8,
      label: "Raleigh-Cary, NC",
    },
    {
      id: 9,
      label: "Austin-Round Rock-San Marcos, TX",
    },
    {
      id: 10,
      label: "Boston-Cambridge-Quincy, MA",
    },
    {
      id: 11,
      label: "Dallas-Plano-Irving, TX",
    },
    {
      id: 12,
      label: "Cedar Rapids, IA",
    },
    {
      id: 13,
      label: "Denver-Aurora-Broomfield, CO",
    },
    {
      id: 14,
      label: "Charlotte-Gastonia-Rock Hill, NC-SC",
    },
    {
      id: 15,
      label: "Colorado Springs, CO",
    },
    {
      id: 16,
      label: "Trenton-Ewing, NJ",
    },
    {
      id: 17,
      label: "Columbus, OH",
    },
    {
      id: 18,
      label: "Minneapolis-St. Paul-Bloomington, MN-WI",
    },
    {
      id: 19,
      label: "Rochester, MN",
    },
    {
      id: 20,
      label: "Atlanta-Sandy Springs-Marietta, GA",
    },
    {
      id: 21,
      label: "Baltimore-Towson, MD",
    },
    {
      id: 22,
      label: "Des Moines-West Des Moines, IA",
    },
    {
      id: 23,
      label: "Palm Bay-Melbourne-Titusville, FL",
    },
    {
      id: 24,
      label: "Hartford-West Hartford-East Hartford, CT",
    },
    {
      id: 25,
      label: "Madison, WI",
    },
    {
      id: 26,
      label: "Detroit-Livonia-Dearborn, MI",
    },
    {
      id: 27,
      label: "Provo-Orem, UT",
    },
    {
      id: 28,
      label: "Omaha-Council Bluffs, NE-IA",
    },
    {
      id: 29,
      label: "Corvallis, OR",
    },
    {
      id: 30,
      label: "Dayton, OH",
    },
    {
      id: 31,
      label: "Kansas City, MO-KS",
    },
    {
      id: 32,
      label: "Bloomington-Normal, IL",
    },
    {
      id: 33,
      label: "St. Louis, MO-IL",
    },
    {
      id: 34,
      label: "Lansing-East Lansing, MI",
    },
    {
      id: 35,
      label: "Cincinnati-Middletown, OH-KY-IN",
    },
    {
      id: 36,
      label: "Houston-Sugar Land-Baytown, TX",
    },
    {
      id: 37,
      label: "Binghamton, NY",
    },
    {
      id: 38,
      label: "Wilmington, DE-MD-NJ",
    },
    {
      id: 39,
      label: "Phoenix-Mesa-Glendale, AZ",
    },
    {
      id: 40,
      label: "Fort Collins-Loveland, CO",
    },
    {
      id: 41,
      label: "Portland-Vancouver-Hillsboro, OR-WA",
    },
    {
      id: 42,
      label: "Nashua, NH-MA",
    },
    {
      id: 43,
      label: "Philadelphia, PA",
    },
    {
      id: 44,
      label: "Pittsburgh, PA",
    },
    {
      id: 45,
      label: "Peoria, IL",
    },
    {
      id: 46,
      label: "Rochester, NY",
    },
    {
      id: 47,
      label: "Milwaukee-Waukesha-West Allis, WI",
    },
    {
      id: 48,
      label: "Richmond, VA",
    },
    {
      id: 49,
      label: "Indianapolis-Carmel, IN",
    },
    {
      id: 50,
      label: "Dalton, GA",
    },
    {
      id: 51,
      label: "Springfield, IL",
    },
    {
      id: 52,
      label: "Albany-Schenectady-Troy, NY",
    },
    {
      id: 53,
      label: "Olympia, WA",
    },
    {
      id: 54,
      label: "Cleveland-Elyria-Mentor, OH",
    },
    {
      id: 55,
      label: "Ames, IA",
    },
    {
      id: 56,
      label: "Morgantown, WV",
    },
    {
      id: 57,
      label: "Ann Arbor, MI",
    },
    {
      id: 58,
      label: "Harrisburg-Carlisle, PA",
    },
    {
      id: 59,
      label: "Chicago-Joliet-Naperville, IL",
    },
    {
      id: 60,
      label: "Elizabethtown, KY",
    },
    {
      id: 61,
      label: "Champaign-Urbana, IL",
    },
    {
      id: 62,
      label: "Ithaca, NY",
    },
    {
      id: 63,
      label: "Crestview-Fort Walton Beach-Destin, FL",
    },
    {
      id: 64,
      label: "State College, PA",
    },
    {
      id: 65,
      label: "Jefferson City, MO",
    },
    {
      id: 66,
      label: "Salt Lake City, UT",
    },
    {
      id: 67,
      label: "New York-White Plains-Wayne, NY-NJ",
    },
    {
      id: 68,
      label: "Oakland-Fremont-Hayward, CA",
    },
    {
      id: 69,
      label: "Sacramento–Arden-Arcade–Roseville, CA",
    },
    {
      id: 70,
      label: "Birmingham-Hoover, AL",
    },
    {
      id: 71,
      label: "Worcester, MA-CT",
    },
    {
      id: 72,
      label: "Columbus, GA-AL",
    },
    {
      id: 73,
      label: "Little Rock-North Little Rock-Conway, AR",
    },
    {
      id: 74,
      label: "Akron, OH",
    },
    {
      id: 75,
      label: "Fort Worth-Arlington, TX",
    },
    {
      id: 76,
      label: "Hagerstown-Martinsburg, MD-WV",
    },
    {
      id: 77,
      label: "Providence-Fall River-Warwick, RI-MA",
    },
    {
      id: 78,
      label: "Lincoln, NE",
    },
    {
      id: 79,
      label: "Green Bay, WI",
    },
    {
      id: 80,
      label: "Tallahassee, FL",
    },
    {
      id: 81,
      label: "Las Cruces, NM",
    },
    {
      id: 82,
      label: "Tampa-St. Petersburg-Clearwater, FL",
    },
    {
      id: 83,
      label: "Winston-Salem, NC",
    },
    {
      id: 84,
      label: "Syracuse, NY",
    },
    {
      id: 85,
      label: "Warner Robins, GA",
    },
    {
      id: 86,
      label: "Greensboro-High Point, NC",
    },
    {
      id: 87,
      label: "Topeka, KS",
    },
    {
      id: 88,
      label: "San Antonio-New Braunfels, TX",
    },
    {
      id: 89,
      label: "Lynchburg, VA",
    },
    {
      id: 90,
      label: "San Diego-Carlsbad-San Marcos, CA",
    },
    {
      id: 91,
      label: "Burlington-South Burlington, VT",
    },
    {
      id: 92,
      label: "Buffalo-Niagara Falls, NY",
    },
    {
      id: 93,
      label: "Albuquerque, NM",
    },
    {
      id: 94,
      label: "Bridgeport-Stamford-Norwalk, CT",
    },
    {
      id: 95,
      label: "Montgomery, AL",
    },
    {
      id: 96,
      label: "Pittsfield, MA",
    },
    {
      id: 97,
      label: "Utica-Rome, NY",
    },
    {
      id: 98,
      label: "Nashville-Davidson–Murfreesboro–Franklin, TN",
    },
    {
      id: 99,
      label: "Oklahoma City, OK",
    },
    {
      id: 100,
      label: "Sheboygan, WI",
    },
  ];

  // 
  useEffect(() => {
    setFieldValue('location', text);
  }, [text])

  return (
    <>
      <Hint options={options} allowTabFill>
        <input
          className={className}
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder={placeholder}
        />
      </Hint>
      <style jsx>{`
        
      `}</style>
    </>
  );
}

export default CityInput;