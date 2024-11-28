import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-inter">
      {/* Head Section */}
      <Head>
        <title>Montyphyllic Pricing</title>
        <meta name="description" content="Montyphyllic Graduation Photoshoot Pricing" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <header className="w-full bg-white text-black p-6">
        <h1 className="text-4xl font-bold text-center tracking-tight">
          Montyphyllic X Akandy  Studios
        </h1>
        <p className="text-center text-black-400 mt-2">
          Graduation Photoshoot Packages
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {/* Basic Package */}
          <div className="bg-white shadow-xl p-6 rounded-lg border-2 border-black">
            <h3 className="text-xl font-bold mb-4 text-black">Basic Package</h3>
            <p className="text-gray-600 mb-6">Perfect for individuals on a budget.</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                5 Edited Photos
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                10 Unedited Photos
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                1 Outfit
              </li>
            </ul>
            <p className="text-black font-semibold text-2xl mt-6">1,000 KES</p>
            <a href="https://forms.gle/3945ejiux5Tx6KVc9" target="_blank" rel="noopener noreferrer">
                 <button className="mt-6 w-full bg-black text-yellow-400 py-3 rounded-lg text-sm font-medium hover:bg-yellow-500 transition-colors">
                     Select Package
                  </button>
            </a>
          </div>

          {/* Standard Package */}
          <div className="bg-white shadow-xl p-6 rounded-lg border-2 border-yellow-400">
            <h3 className="text-xl font-bold mb-4 text-black">Standard Package</h3>
            <p className="text-gray-600 mb-6">Best for those who want more variety.</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                10 Edited Photos
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                20 Unedited Photos
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                2 Outfits
              </li>
            </ul>
            <p className="text-black font-semibold text-2xl mt-6">2,000 KES</p>
            <a href="https://forms.gle/3945ejiux5Tx6KVc9" target="_blank" rel="noopener noreferrer">
                 <button className="mt-6 w-full bg-black text-yellow-400 py-3 rounded-lg text-sm font-medium hover:bg-yellow-500 transition-colors">
                     Select Package
                  </button>
            </a>
          </div>

          {/* Group Package */}
          <div className="bg-white shadow-xl p-6 rounded-lg border-2 border-yellow-400">
            <h3 className="text-xl font-bold mb-4 text-black">Group Package</h3>
            <p className="text-gray-600 mb-6">Ideal for group memories.</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                25 Edited Photos
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                35 Unedited Photos
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                3 Outfits
              </li>
            </ul>
            <p className="text-black font-semibold text-2xl mt-6">3,500 KES</p>
            <a href="https://forms.gle/3945ejiux5Tx6KVc9" target="_blank" rel="noopener noreferrer">
                 <button className="mt-6 w-full bg-black text-yellow-400 py-3 rounded-lg text-sm font-medium hover:bg-yellow-500 transition-colors">
                     Select Package
                  </button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-6 mt-12">
        <p className="text-center">"Hii ni deal noma! Usiwachwe nyuma."</p>
        <p className="text-center mt-2">© 2024 Montyphyllic. All rights reserved.</p>
      </footer>
    </div>
  );
}
