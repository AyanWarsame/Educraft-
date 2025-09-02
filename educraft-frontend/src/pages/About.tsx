import Card from "../components/Cards";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-sand to-skyfade/50" id="AboutUs">
      <div className="text-center pt-8 pb-4 px-10">
        <h1 className="text-4xl font-bold text-indigoDeep mb-4">🔥WHO WE ARE</h1>
        <h2 className="text-lg text-gray mt-4 mx-auto max-w-3xl leading-relaxed mb-4">
          Battle-tested engineers building tomorrow's tech leaders.
          We replace academic theory with production-grade combat simulations.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <Card
          variant="mission"
          title="⚡Our Manifesto"
          description="Learn by Doing → Real skills come from practice, not just theory. Tools in Action → Master using tools, not just knowing them.Build with Purpose → Create tech that’s fast, ethical, and impactful."
          className="my-4 bg-white h-90 w-85 leading-normal tracking-wide mb-8"
        />

        <Card
          variant="mission"
          title="🎯Our Mission"
          description="At Educraft, we turn learners into doers. Our mission is to bridge the gap between theory and practice by giving you real-world tools, challenges, and workflows. You’ll learn by building and grow by shipping."
          className="my-4 bg-white h-90 w-85 leading-normal tracking-wide mb-8"
        />

        <Card
          variant="mission"
          title="🌍Our Vision"
          description="We believe skills speak louder than degrees. At Educraft, talent is measured by what you build and solve—not by certificates. Curiosity drives growth, portfolios replace résumés, and learning powers innovation."
          className="my-4 bg-white h-90 w-85 leading-normal tracking-wide mb-8"
        />


      </div>
    </div>
  );
}

export default About;