import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-agrandir">
      <Head>
        <title>Montyphyllic Pricing</title>
        <meta name="description" content="Montyphyllic Graduation Photoshoot Pricing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="w-full bg-white shadow-md p-6">
        <h1 className="text-4xl font-semibold text-center text-gray-900 tracking-tight">
          Montyphyllic
        </h1>
        <p className="text-center text-gray-600 mt-2">Graduation Photoshoot Packages</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <section className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {/* Basic Package */}
          <div className="bg-white shadow-lg p-8 rounded-3xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Basic Package</h3>
            <ul className="text-gray-700 space-y-2">
              <li>5 Edited Photos</li>
              <li>10 Unedited Photos</li>
              <li>1 Outfit</li>
            </ul>
            <p className="text-gray-900 font-semibold text-xl mt-6">1,000 KES</p>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
              Select Package
            </button>
          </div>

          {/* Standard Package */}
          <div className="bg-white shadow-lg p-8 rounded-3xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Standard Package</h3>
            <ul className="text-gray-700 space-y-2">
              <li>10 Edited Photos</li>
              <li>20 Unedited Photos</li>
              <li>2 Outfits</li>
            </ul>
            <p className="text-gray-900 font-semibold text-xl mt-6">2,000 KES</p>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
              Select Package
            </button>
          </div>

          {/* group Package */}
          <div className="bg-white shadow-lg p-8 rounded-3xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Group Package</h3>
            <ul className="text-gray-700 space-y-2">
              <li>25 Edited Photos</li>
              <li>35 Unedited Photos</li>
              <li>3 Outfits</li>
            </ul>
            <p className="text-gray-900 font-semibold text-xl mt-6">3,500 KES</p>
            <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
              Select Package
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 py-6 mt-12">
        <p className="text-center text-gray-600">© 2024 Montyphyllic. All rights reserved.</p>
      </footer>
    </div>
  );
}
