import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Our Lead Consultant</title>
        <meta
          name="description"
          content="Learn about our lead consultant's 40 years of experience in deep water petroleum engineering and tight play specialization."
        />
      </Head>
      <main className="about-container">
        <div className="about-content">
          {/* Bio Text */}
          <div className="bio-text">
            <h1>About Our Lead Consultant</h1>
            <p>
              With over 40 years of experience in the oil and gas industry, our
              lead consultant is a Deep Water Petroleum Engineer and Tight Play
              Specialist. He has worked on numerous challenging projects in
              offshore drilling and tight shale formations, offering expert
              guidance to clients in maximizing the value of their assets. His
              deep understanding of unconventional plays has helped clients
              across West Texas, the Baaken, and beyond to optimize their
              production strategies.
            </p>
            <p>
              Throughout his career, he has developed a reputation for providing
              practical, innovative solutions to complex geological and
              engineering challenges. His experience includes managing
              multi-million dollar projects, leading engineering teams, and
              implementing advanced recovery techniques in challenging
              environments.
            </p>
            <p>
              As a recognized industry expert, he has authored several papers on
              tight shale development and frequently speaks at conferences on
              petroleum engineering. His contributions to the field have made a
              significant impact, helping operators achieve cost-effective,
              high-efficiency production in some of the world's most challenging
              reservoirs.
            </p>
            <p>
              Whether you're facing challenges in offshore deepwater projects or
              unconventional tight shale plays, our consultant is here to
              provide tailored, expert advice to help you navigate the
              complexities of the oil and gas industry.
            </p>
          </div>

          {/* Headshot */}
          <div className="headshot">
            <Image
              src="/elliott.jpeg" // Assuming the image is in the public folder
              alt="Lead Consultant Headshot"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </main>
    </>
  );
}
