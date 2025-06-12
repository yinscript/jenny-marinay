import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { homeSections, routeSections } from "./data/sectionsData";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/hero";
import Journey from "./components/sections/Journey";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import About from "./components/sections/About";
import Footer from "./components/sections/Footer";
import Services from "./components/sections/Services";

const componentMap = {
  Hero,
  Journey,
  Projects,
  Contact,
  Services,
};

function SectionWrapper({ title, subtitle, link, children }) {
  return (
    <div className="max-w-4xl mt-5 px-4 mx-auto text-zinc-100">
      {title && (
        <h2 className="text-3xl font-light border-b border-zinc-700 pb-2 mt-10 flex items-center gap-2 group">
          {title}
          {link && (
            <a
              href={link}
              className="group-hover:translate-x-2 transition-all duration-300"
            >
              <IoIosArrowForward />
            </a>
          )}
        </h2>
      )}
      {subtitle && <div className="text-md text-zinc-400 pt-3">{subtitle}</div>}
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {homeSections.map((section) => {
                const Component = componentMap[section.component];
                const content = section.limit ? (
                  <Component limit={section.limit} />
                ) : (
                  <Component />
                );

                return section.title || section.subtitle ? (
                  <SectionWrapper
                    key={section.id}
                    title={section.title}
                    subtitle={section.subtitle}
                    link={section.link}
                  >
                    {content}
                  </SectionWrapper>
                ) : (
                  <Component key={section.id} />
                );
              })}
            </>
          }
        />

        {/* Journey Page */}
        <Route
          path="/journey"
          element={
            <SectionWrapper
              title={routeSections.journey.title}
              subtitle={routeSections.journey.subtitle}
            >
              <Journey />
            </SectionWrapper>
          }
        />

        {/* Projects Page */}
        <Route
          path="/projects"
          element={
            <SectionWrapper
              title={routeSections.projects.title}
              subtitle={routeSections.projects.subtitle}
            >
              <Projects />
            </SectionWrapper>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <SectionWrapper
              title={routeSections.about.title}
              subtitle={routeSections.about.subtitle}
            >
              <About />
            </SectionWrapper>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
