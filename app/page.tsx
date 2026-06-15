import Navbar from "../app/components/Navbar"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-100 px-6 py-6">
      <Navbar />

      <section className="mx-auto mt-24 max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-blue-500">
          About Us
        </h2>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-left text-xl leading-10 text-gray-700 md:text-2xl md:leading-[3.5rem]">
            Let's Tweet is a platform for sharing thoughts, exploring
            trending topics, and connecting with others. Our mission is to
            empower individuals to express themselves freely and stay informed
            about what's happening in the world.
          </p>
        </div>
      </section>
    </main>
  )
}