import styles from "./styles.module.css";

const FeatureList = [
  {
    image: require("@site/static/img/joan.jpg").default,
    developer: <>Joan Purba</>,
  },
  {
    image: require("@site/static/img/fabregas.jpeg").default,
    developer: <>Fabregas Andana</>,
  },
  {
    image: require("@site/static/img/grace.jpeg").default,
    developer: <>Grace Angelika</>,
  },
];

function Feature({ image, developer }) {
  return (
    <div className="w-[250px] h-[300px] flex flex-col items-center gap-y-5">
      <img className="w-full h-full object-cover rounded-md" src={image} />
      <p>{developer}</p>
    </div>
  );
}

export default function Team() {
  return (
    <>
      <main className="h-full flex flex-col justify-center items-center">
        <h1
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #916d4d 50%)",
          }}
          className={"customUnderline text-2xl md:text-4xl"}
        >
          Cakrawala Team
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-y-28 justify-evenly items-center mt-20">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </main>
    </>
  );
}
