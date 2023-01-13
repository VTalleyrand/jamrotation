import { useRef } from "react";


const AlbumInfo = ({ isActive, currentAlbum, setCurrentAlbum,  setIsActive, theme, list, setList, randomNum, checkedList, setCheckedList }) => {

  const albumRef = useRef(null)
  


  return (
    <section  ref={albumRef} className={!isActive ? 'albumInfo' : 'albumInfo active'} style={{backgroundColor: theme.mainColor}}>
      <div className={!isActive ? "album-description noShow" : ' album-description show'}>
        <h3 className='album-title'>{`${currentAlbum.Album} - ${currentAlbum.Artist} `}</h3>
        <p className='album-details'>{currentAlbum.Description}</p>
      </div>
      <div className={!isActive ? "noShow record-label" : 'show record-label'}>
        <div className='album-rank'>
          <p> <span>{currentAlbum.Rank}</span> {currentAlbum.Label}</p>
        </div>
      </div>
    </section>
  );
};

export default AlbumInfo;
