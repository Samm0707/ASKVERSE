import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
    Delve & Disseminate 
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">   AI-Generated Ideas</span>
    </h1>
    <p className="desc text-center">
      AskVerse is an open-source haven for creatives, allowing them to discover,
      design, and share unique prompts that harness the power of artificial
      intelligence to inspire new ideas and artistic expression
    </p>

    <Feed />
  </section>
);

export default Home;
