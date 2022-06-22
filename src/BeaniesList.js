import BeanieBaby from './BeanieBaby.js';
import { Link } from 'react-router-dom';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className="beanies">
      {beanieBabies.map((beanie, i) => (
        <Link key={(beanie.title + i + beanie.id)} to={`/beanieBabies/${beanie.id}`}>
          <div className='beanie'>
            <h3>{beanie.title}</h3>
            <p>{beanie.astroSign}</p>
            <img src={beanie.image}/>
          </div>
        </Link>
      ))}
    </div>
  );
}
