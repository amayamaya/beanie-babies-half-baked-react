import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className="beanies">
      {beanieBabies.map((beanie, i) => (
        <BeanieBaby key={beanie.title + i + beanie.id} beanie={beanie} />
      ))}
    </div>
  );
}
