import style from "./styles.module.css";

const FeatureList = [
  {
    image: require("@site/static/img/reactLogo.png").default,
    description: <>React</>,
  },
  {
    image: require("@site/static/img/viteLogo.png").default,
    description: <>Vite</>,
  },
  {
    image: require("@site/static/img/tailwindLogo.png").default,
    description: <>Tailwind</>,
  },
  {
    image: require("@site/static/img/docusaurus.png").default,
    description: <>Docusaurus</>,
  },
  {
    image: require("@site/static/img/mdxLogo.png").default,
    description: <>MDX</>,
  },
];

function Feature({ image, description }) {
  return (
    <div className="w-[70px] sm:w-[90px] md:w-[120px] h-[150px] md:h-[200px] flex flex-col items-center">
      <img
        className="w-full h-full object-contain rounded-md"
        src={image}
        alt=""
      />
      <p>{description}</p>
    </div>
  );
}

export default function TechStack() {
  return (
    <>
      <main className="h-full flex flex-col justify-center items-center py-20 md:py-52">
        <h1
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #916d4d 50%)",
          }}
          className={"customUnderline text-2xl md:text-4xl"}
        >
          Tools & Tech Stack
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-y-5 md:gap-y-28 justify-evenly items-center mt-20">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </main>
    </>
  );
}
