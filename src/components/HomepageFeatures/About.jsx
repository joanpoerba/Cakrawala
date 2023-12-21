import Link from "@docusaurus/Link";

export default function Team() {
  return (
    <>
      <main className="w-full h-screen flex justify-center">
        <div className="lg:w-[70%] w-[90%] flex flex-col justify-center items-start">
          <h1
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #916d4d 50%)",
            }}
            className="customUnderline lg:text-4xl md:text-3xl text-2xl"
          >
            Hello Indonesia!
          </h1>
          <h2 className="lg:text-6xl md:text-5xl text-4xl md:my-10 my-5">
            Ini{" "}
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #916d4d 50%)",
              }}
            >
              Cakrawala!
            </span>{" "}
            Cara baru untuk bereksplorasi setiap sudut Indonesia.
          </h2>
          <p className="md:text-xl text-base">
            Selamat datang di{" "}
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #916d4d 50%)",
              }}
            >
              Cakrawala!
            </span>{" "}
            Temukan keindahan alam, budaya, dan keunikan masing-masing daerah
            dengan informasi lengkap dan gambar menarik. Mari eksplor setiap
            sudut Indonesia.
          </p>
          <Link
            className="flex flex-row items-center gap-x-3 button button--secondary mt-10 button--sm shadow-2xl"
            to="/docs/category/sumatera"
          >
            <span className="text-2xl">See more!</span>
          </Link>
        </div>
      </main>
    </>
  );
}
