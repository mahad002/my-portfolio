import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// Setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative flex flex-col h-screen`}>
      {/* metadata */}
      <Head>
        <title>Ensemble AI | Portfolio</title>
        <meta
          name="description"
          content="Empowering Visionaries, Elevating Innovations."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Ensemble AI" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <Header />
      <Nav />

      {/* Main content with conditional scrolling */}
      <main className="bg-black/60 relative z-10 flex-1 overflow-y-auto overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 py-8">{children}</div>
      </main>

      {/* Background elements */}
      <TopLeftImg />
    </div>
  );
};

export default Layout;
