import React from "react";
import "./CSS/Youtube.css";

const superHitSongs = [
  {
    title: "Gujarat Gaurav Gatha",
    thumbnail: "https://img.youtube.com/vi/TD1v2HTvnBM/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=TD1v2HTvnBM",
  },
  {
    title: "Bandh Besti Paghadi Peri Leta Nahi",
    thumbnail: "https://img.youtube.com/vi/antMroa1Ukc/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=antMroa1Ukc",
  },
  {
    title: "Tirango",
    thumbnail: "https://img.youtube.com/vi/z_4KUUKRjmo/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=z_4KUUKRjmo",
  },
  {
    title: "Mandi che...ha",
    thumbnail: "https://img.youtube.com/vi/_lsDE6uCqz0/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=_lsDE6uCqz0",
  },
];

const hitAlbums = [
  {
    //itle: "Album 1",
    thumbnail: "https://img.youtube.com/vi/cchg_uuuUfQ/mqdefault.jpg",
    link: "https://www.youtube.com/watch?v=cchg_uuuUfQ",
  },
  {
    //title: "Album 2",
    thumbnail: "https://img.youtube.com/vi/f6Xjy9R5_nY/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=f6Xjy9R5_nY",
  },
  {
    // title: "Album 3",
    thumbnail: "https://img.youtube.com/vi/FGIg_B8m-y0/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=FGIg_B8m-y0",
  },
];

const Youtube = () => {
  return (
    <section className="media-section">

      {/* SUPER HIT SONGS */}
      <div className="section-block">
        <h1 className="section-title">🎵 Super Hit Songs</h1>
        <div className="card-grid">
          {superHitSongs.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="media-card"
              key={index}
            >
              <div className="media-thumbnail">
                <img src={item.thumbnail} alt={item.title} />
                <div className="play-btn">▶</div>
              </div>
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </div>

      {/* HIT ALBUMS */}
      <div className="section-block">
        <h1 className="section-title">💿 Hit Albums</h1>
        <div className="card-grid">
          {hitAlbums.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="media-card"
              key={index}
            >
              <div className="media-thumbnail">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Youtube;