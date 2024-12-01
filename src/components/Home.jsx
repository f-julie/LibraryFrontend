import Hero from "../assets/hero.jpg";

export default function Home() {
  return (
    <div>
      <section className="hero flex justify-center">
        <img
          src={Hero}
          alt="hero image"
          className="w-[50%] h-[400px] rounded-md"
        />
      </section>
      <main className="flex flex-col align-center gap-4">
        <h1 className="self-center text-2xl mt-4">
          Welcome to the Assignment Review App
        </h1>
        <p className="w-[80%] self-center mb-4 border p-5 text-blue-700/50 rounded-md text-center text-xl">
          “Live as if you were to die tomorrow. Learn as if you were to live
          forever.” — Mahatma Gandhi
          {/* <span className="text-2xl font-serif text-blue-700/50">"</span>“Live as
          if you were to die tomorrow. Learn as if you were to live forever.” —
          Mahatma Gandhi
          <span className="text-2xl font-serif text-gray-500">"</span> */}
        </p>
      </main>
    </div>
  );
}
