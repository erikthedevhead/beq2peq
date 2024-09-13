import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oil and Gas Consulting</title>
        <meta
          name="description"
          content="Expert consulting for the oil and gas industry"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Our Consulting Firm</h1>
        <p>We provide expert services in the oil and gas industry.</p>
        <button>Contact Us</button>
      </main>
    </div>
  );
}
