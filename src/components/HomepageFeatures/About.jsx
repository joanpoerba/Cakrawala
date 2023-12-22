import Link from "@docusaurus/Link";

export default function Team() {
  return (
    <>
      <main className="w-full py-40 flex justify-center">
        <div className="lg:w-[70%] w-[90%] flex flex-col justify-center items-start">
          <h1
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #916d4d 50%)",
            }}
            className="customUnderline lg:text-4xl md:text-3xl text-2xl"
          >
            Halo Indonesia!
          </h1>
          <h2 className="lg:text-6xl md:text-5xl text-4xl md:my-10 my-5">
            Selamat datang di{" "}
            <span
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #916d4d 50%)",
              }}
            >
              Cakrawala!
            </span>{" "}
            Cara baru untuk eksplor setiap sudut Indonesia
          </h2>
          <p className="md:text-xl text-base">
            Jelajahi keindahan alam dan kultur yang unik di seluruh Nusantara,
            dilengkapi dengan informasi yang lengkap, serta gambar yang menarik
          </p>
          <Link
            className="flex flex-row items-center gap-x-3 button button--secondary mt-10 button--sm"
            to="/docs/category/sumatera"
          >
            <span className="text-2xl">See more!</span>
          </Link>
        </div>
      </main>
    </>
  );
}
