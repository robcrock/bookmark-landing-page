import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="logo">
          {/* Add your logo image here */}
          <Image src="/logo.svg" alt="Bookmark" width={148} height={25} />
        </div>
        <nav className="hidden space-x-6 text-sm uppercase md:flex">
          <a href="#features" className="text-gray-500 hover:text-black">
            Features
          </a>
          <a href="#pricing" className="text-gray-500 hover:text-black">
            Pricing
          </a>
          <a href="#contact" className="text-gray-500 hover:text-black">
            Contact
          </a>
          <button className="rounded bg-red-500 px-6 py-2 text-white shadow hover:bg-red-600">
            Login
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto items-center px-6 py-16 md:flex">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              A Simple Bookmark Manager
            </h1>
            <p className="mb-6 text-gray-500">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="space-x-4">
              <button className="rounded bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700">
                Get it on Chrome
              </button>
              <button className="rounded bg-gray-200 px-6 py-3 text-gray-800 shadow hover:bg-gray-300">
                Get it on Firefox
              </button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2">
            {/* Add hero image here */}
            <Image
              src="/hero-image.svg"
              alt="Bookmark interface"
              width={657}
              height={466}
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="mb-6 text-center text-3xl font-bold">Features</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-500">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>

            {/* Feature tabs would go here */}
            {/* You'll need to implement tab functionality */}

            <div className="items-center md:flex">
              <div className="md:w-1/2">
                {/* Add feature image here */}
                <Image
                  src="/feature-1.svg"
                  alt="Bookmark in one click"
                  width={536}
                  height={346}
                />
              </div>
              <div className="mt-12 md:mt-0 md:w-1/2 md:pl-12">
                <h3 className="mb-4 text-2xl font-bold">
                  Bookmark in one click
                </h3>
                <p className="mb-6 text-gray-500">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <button className="rounded bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Download the extension
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-500">
              We've got more browsers in the pipeline. Please do let us know if
              you've got a favourite you'd like us to prioritize.
            </p>

            <div className="justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
              {/* Browser cards would go here */}
              {/* Example for Chrome */}
              <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                <Image
                  src="/chrome-logo.svg"
                  alt="Chrome"
                  width={102}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="mb-2 font-bold">Add to Chrome</h3>
                <p className="mb-6 text-gray-500">Minimum version 62</p>
                <button className="w-full rounded bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700">
                  Add & Install Extension
                </button>
              </div>
              {/* Repeat for Firefox and Opera */}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-500">
              Here are some of our FAQs. If you have any other questions you'd
              like answered please feel free to email us.
            </p>

            {/* FAQ accordion would go here */}
            {/* You'll need to implement accordion functionality */}

            <div className="mt-12 text-center">
              <button className="rounded bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700">
                More Info
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-4 uppercase tracking-wide">
              35,000+ already joined
            </p>
            <h2 className="mb-6 text-3xl font-bold">
              Stay up-to-date with what we're doing
            </h2>
            <form className="mx-auto max-w-lg">
              <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow rounded px-4 py-3 text-black"
                />
                <button
                  type="submit"
                  className="rounded bg-red-500 px-6 py-3 text-white shadow hover:bg-red-600"
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <Image
              src="/logo-white.svg"
              alt="Bookmark"
              width={148}
              height={25}
            />
            <a href="#features" className="hover:text-gray-300">
              Features
            </a>
            <a href="#pricing" className="hover:text-gray-300">
              Pricing
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="mt-6 flex space-x-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              <Image
                src="/icon-facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Image
                src="/icon-twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
