import { useRef } from 'react';
import vinylImg from '../images/vinyl.png';

const RANDOM_NUM = (num) => {
  return Math.floor(Math.random() * num);
};

const Vinyl = ({list, randomNum, setRandomNum, setCurrentAlbum, isActive, setIsActive}) => {
  const spinRef = useRef(null);


  // On vinyl click
  const handleClick = () => {
    setIsActive(!isActive);
    setRandomNum(RANDOM_NUM(list.length));
    setCurrentAlbum(list[randomNum]);
  };

  return (
    <main>
      <div
        className='vinyl-parent'
        onClick={handleClick}
      >
        <img
          className={isActive ? 'vinyl active' : 'vinyl'}
          ref={spinRef}
          src={vinylImg}
          alt="vinyl"
        />
      </div>
    </main>
  );
};

export default Vinyl;
