import { tours } from "../data";
import SectionTitle from "./SectionTitle";

export default function Tours() {
  return (
    <div>
      <section className="section" id="tours">
        <SectionTitle title="featured" subTitle="tours" />
        <div className="section-center featured-center">
          {tours.map((tour) => {
            return (
              <article className="tour-card" key={tour.id}>
                <div className="tour-img-container">
                  <img src={tour.img} className="tour-img" alt="" />
                  <p className="tour-date">{tour.date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tour.title}</h4>
                  </div>
                  <p>{tour.description}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {tour.location}
                    </p>
                    <p>{tour.days}</p>
                    <p>from {tour.price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
