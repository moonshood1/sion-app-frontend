export function BestVideos() {
  return (
    <>
      <h1 className="container__title" style={{ marginTop: "4%" }}>
        Meilleures vidéos
      </h1>
      <div className="slider__container">
        <div className="container__col-3">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652626976/sion-project/Capture_d_e%CC%81cran_2022-05-15_a%CC%80_15.01.42_wyjzpb.jpg"
            alt="best_videos_1"
            className="slider__videos-thumbnail"
          />
        </div>
        <div className="container__col-3">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652626976/sion-project/Capture_d_e%CC%81cran_2022-05-15_a%CC%80_15.01.42_wyjzpb.jpg"
            alt="best_videos_1"
            className="slider__videos-thumbnail"
          />
        </div>
        <div className="container__col-3">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652626976/sion-project/Capture_d_e%CC%81cran_2022-05-15_a%CC%80_15.01.42_wyjzpb.jpg"
            alt="best_videos_1"
            className="slider__videos-thumbnail to-go"
          />
        </div>
        <div className="container__col-3">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652626976/sion-project/Capture_d_e%CC%81cran_2022-05-15_a%CC%80_15.01.42_wyjzpb.jpg"
            alt="best_videos_1"
            className="slider__videos-thumbnail to-go"
          />
        </div>
      </div>
      <a href="#" className="link__to_all">
        Voir toutes les videos
      </a>
    </>
  );
}
