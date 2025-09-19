function Home() {
  return (
    <div className="bg-yellow-50 py-10 px-6 rounded-xl shadow-md font-serif">
      <h2 className="text-3xl font-bold text-pink-900 mb-6 text-center">Welcome to Wilhelmina Legacy Tribute</h2>
      <p className="text-yellow-900 text-lg mb-6 italic text-center">
        This is the home page of my tribute to my grandmother Wilhelmina, lovingly called Mina.
      </p>
      {/* ... your existing tribute paragraphs and quote ... */}
      <div className="text-center mt-8">
        <a href="/messages" className="text-blue-700 underline hover:text-blue-900">
          Share a message or memory →
        </a>
      </div>
    </div>
  );
}

export default Home;