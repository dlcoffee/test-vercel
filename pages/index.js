import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="rounded-lg md:w-56"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt="Woman paying for a purchase"
            />
            <div className="mt-4 md:mt-0 md:ml-6">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                Marketing
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-gray-600">
                Getting a new business off the ground is a lot of hard work.
              </p>
            </div>
          </div>
        </div>

        <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="sm:flex sm:items-center px-6 py-4">
            <img
              class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
              src="https://images.unsplash.com/photo-1590955256762-e60f6e08122a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=512&h=512&fit=crop&crop=focalpoint&fp-z=2&fp-y=0.25"
              alt="Woman's Face"
            />
            <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p class="text-xl leading-tight">Erin Lindford</p>
              <p class="text-sm leading-tight text-gray-600">
                Customer Support Specialist
              </p>
              <div class="mt-4">
                <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </main>
    </div>
  );
}
