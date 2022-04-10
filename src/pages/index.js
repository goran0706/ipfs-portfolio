import { Layout, Footer } from "../components";
import { Header, About, Portfolio, Skills, Contact } from "../sections";

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  );
}
