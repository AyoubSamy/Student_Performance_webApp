import { useSpring, animated } from "@react-spring/web";

const WhatWeOffer = () => {
  const paragraphAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(3rem)" },
    to: { opacity: 1, transform: "translateX(0rem)" },
    config: { duration: 500 },
  });
  const paragraphAnimation2 = useSpring({
    from: { opacity: 0, transform: "translateX(3rem)" },
    to: { opacity: 1, transform: "translateX(0rem)" },
    config: { duration: 500 },
    delay: 500 
  });
  const paragraphAnimation3 = useSpring({
    from: { opacity: 0, transform: "translateX(3rem)" },
    to: { opacity: 1, transform: "translateX(0rem)" },
    config: { duration: 500 },
    delay: 800 
  });
  const paragraphAnimation4 = useSpring({
    from: { opacity: 0, transform: "translateX(3rem)" },
    to: { opacity: 1, transform: "translateX(0rem)" },
    config: { duration: 500 },
    delay: 1200 
  });
  const paragraphAnimation5 = useSpring({
    from: { opacity: 0, transform: "translateX(3rem)" },
    to: { opacity: 1, transform: "translateX(0rem)" },
    config: { duration: 500 },
    delay: 1500 
  });
  const paragraphAnimation6 = useSpring({
    from: { opacity: 0, transform: "translateX(3rem)" },
    to: { opacity: 1, transform: "translateX(0rem)" },
    config: { duration: 500 },
    delay: 2000 
  });

  return (
    <div className="max-w-[50rem] min-[1000px]:ml-[4rem] min-[1000px]:my-[2rem]">
      <div className="text-start text-gray-800 mt-10">
        <h1 className="text-4xl font-bold mb-8">
          What We Offer: Revolutionizing Education with Intelligent Solutions
        </h1>
        <animated.div style={paragraphAnimation}>
          <p className="text-sm mb-8 transition-all hover:translate-x-5">
            <span className="font-bold text-lg text-cyan-500">1. </span> At
            our core, we're dedicated to revolutionizing the educational
            landscape through innovative technology solutions. Our flagship
            project, a culmination of diligent research and technological
            prowess, introduces an intelligent application designed to elevate
            academic performance amidst unprecedented challenges, such as the
            global pandemic.
          </p>
        </animated.div>
        <animated.div style={paragraphAnimation2}>
          <p className="text-sm mb-8 transition-all hover:translate-x-5">
            <span className="font-bold text-lg text-cyan-500">2. </span> Our
            application harnesses the power of artificial intelligence to
            predict students' future exam results based on their familial
            backgrounds. By leveraging advanced data analytics, we offer a
            predictive tool that empowers students to foresee their academic
            trajectory and educators to proactively address learning needs.
          </p>
        </animated.div>
        <animated.div style={paragraphAnimation3}>
          <p className="text-sm mb-8 transition-all hover:translate-x-5">
            <span className="font-bold text-lg text-cyan-500">3. </span>{" "}
            Informed decisions are the cornerstone of effective education
            management. Our solution provides educational stakeholders with
            actionable insights derived from comprehensive data analysis. By
            visualizing trends and patterns, we empower decision-makers to
            optimize educational strategies and enhance student outcomes.
          </p>
        </animated.div>
        <animated.div style={paragraphAnimation4}>
          <p className="text-sm mb-8 transition-all hover:translate-x-5">
            <span className="font-bold text-lg text-cyan-500">4. </span> At
            the heart of our mission lies a commitment to student success.
            Through our intelligent application, we aim to provide students
            with the tools they need to thrive academically. By offering
            personalized insights and support mechanisms, we empower students
            to overcome challenges and reach their full potential.
          </p>
        </animated.div>
        <animated.div style={paragraphAnimation5}>
          <p className="text-sm mb-8 transition-all hover:translate-x-5">
            <span className="font-bold text-lg text-cyan-500">5. </span> We
            understand that the journey towards educational excellence is
            dynamic and ever-evolving. As such, we remain dedicated to
            continuous improvement and innovation. Our team is committed to
            refining our solution, incorporating feedback, and staying ahead of
            emerging trends to ensure that we deliver unparalleled value to the
            educational community.
          </p>
        </animated.div>
        <animated.div style={paragraphAnimation6}>
          <p className="text-sm transition-all hover:translate-x-5">
            Join us in shaping the future of education through intelligent
            solutions that inspire learning, foster growth, and drive success
            for students and educators alike. Together, let's unlock the full
            potential of every learner, today and tomorrow.
          </p>
        </animated.div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
