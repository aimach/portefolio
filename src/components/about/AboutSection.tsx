import "./aboutSection.scss";
import avatar from "../../assets/img/avatar.png";

export default function AboutSection() {
  return (
    <section className="aboutSection" id="profil">
      <h3>A propos</h3>
      <div className="aboutSection__content">
        <img src={avatar} alt="avatar" className="aboutSection__avatar" />
        <p className="aboutSection__paragraphe">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          laboriosam dolor tempore quaerat repellat voluptatem deleniti odit?
          Labore iusto dolorem, nemo libero nihil deserunt voluptas molestias
          odio, deleniti rem fuga. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis cumque inventore deleniti debitis libero
          necessitatibus minus sint expedita et id sapiente hic ducimus quaerat,
          eos animi. Eum qui itaque rerum.
        </p>
      </div>
    </section>
  );
}
