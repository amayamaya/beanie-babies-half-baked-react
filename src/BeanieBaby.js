import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanie }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <Link to={`/beanieBabies/${beanie.id}`}>
      <div className="beanie">
        <h3>{beanie.title}</h3>
        <p>{beanie.astroSign}</p>
        <img src={beanie.image} />
      </div>
    </Link>
  );
}
