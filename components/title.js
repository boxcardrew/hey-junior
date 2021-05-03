export default function Title() {
  return (
    <div className="container">
      <div className="list-storage">
        <ul className="animated">
          <li>developers</li>
          <li>designers</li>
          <li>marketers</li>
          <li>sales</li>
          <li>finance</li>
          <li>support staff</li>
          <li>business development</li>
          <li>designers</li>
          <li>marketers</li>
          <li>developers</li>
        </ul>
      </div>

      <style jsx>{`
        .container {
          height: 6em;
          background: var(--background);
          overflow: hidden;
          position: relative;
          padding: 0;
          margin-top: .5em;
        }
        .list-storage {
          margin-top: -.5em;
          padding: 0;
          overflow: hidden;
          text-align: center;
          position: relative;
          height: 6em;
        }
        .list-storage::before {
          content: "";
          display: block;
          position: absolute;
          height: 1em;
          z-index: 2;
          left: 0;
          top: 0;
          right: 0;
          background-image: linear-gradient(
            to top,
            rgba(245, 223, 187, 0) 0%,
            rgb(245, 223, 187) 85%
          );
        }

        .list-storage::after {
          content: "";
          display: block;
          position: absolute;
          height: 1em;
          z-index: 2;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: linear-gradient(
            to bottom,
            rgba(245, 223, 187, 0) 0%,
            rgb(245, 223, 187) 85%
          );
        }

        .animated {
          animation-duration: 20s;
          animation-timing-function: cubic-bezier(1, 0, 0.5, 0);
          animation-delay: 0s;
          animation-iteration-count: 4;
          animation-direction: normal;
          animation-fill-mode: both;
          animation-play-state: running;
          animation-name: tick;
        }

        .list-storage ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .animated li {
          color: var(--brown);
          font-family: "Lobster", cursive; 
          font-size: 2.5em;
          line-height: 3;
        }

        @keyframes tick {
          0% {
            transform: translate3d(0, -1.25em, 0);
          }
          11.11111% {
            transform: translate3d(0, -8.75em, 0);
          }
          22.22222% {
            transform: translate3d(0, -16.25em, 0);
          }
          33.33333% {
            transform: translate3d(0, -23.75em, 0);
          }
          44.44444% {
            transform: translate3d(0, -31.25em, 0);
          }
          55.55556% {
            transform: translate3d(0, -38.75em, 0);
          }
          66.66667% {
            transform: translate3d(0, -46.25em, 0);
          }
          77.77778% {
            transform: translate3d(0, -53.75em, 0);
          }
          88.88889% {
            transform: translate3d(0, -61.25em, 0);
          }
          100% {
            transform: translate3d(0, -68.75em, 0);
          }
        }
      `}</style>
    </div>
  );
}
