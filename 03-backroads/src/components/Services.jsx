import { articles } from "../data";
import SectionTitle from "./SectionTitle";

export default function SectionServices() {
  return (
    <section className="section services" id="services">
      <SectionTitle title="out" subTitle="services" />
      <div className="section-center services-center">
        {articles.map((article) => {
          return (
            <article className="service" key={article.id}>
              <span className="service-icon">
                <i className={article.fas}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{article.title}</h4>
                <p className="service-text">{article.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
