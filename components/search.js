export default function Search() {
  return (
    <section>
      <div>
        <input className="input search" placeholder="UX Designer"></input>
      </div>
      <div>
        <input className="input location" placeholder="Phoenix, AZ"></input>
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
