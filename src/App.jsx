"use client"

import { useState } from "react"
import backgroundImage from "./assets/background_mandala.jpg"
import hero_rangoli from "./assets/hero_rangoli.png"

function App() {
  const [activeTab, setActiveTab] = useState("overview")

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    const element = document.getElementById(`${tab}-section`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <main className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-amber-950/30 backdrop-blur-sm z-0"></div>

      {/* Content container */}
      <div className="relative z-10">
        <section className="w-full p-4 bg-gradient-to-b from-iks-red/120 text-amber-50 backdrop-blur-sm border-iks-orange/50  border-t-2 border-l-2 border-r-2">
          <div className="max-w-md mx-auto text-center py-6">
          <img className="w-100 pb-10" src={hero_rangoli}></img>
            <h2 className="text-2xl font-bold">Pulli Kolam</h2>
            <p className="mb-5 text-sm leading-relaxed">
              <i>PuLLi = dot, NeLi = curve</i><br />
            </p>
            <p className="mb-4 text-sm leading-relaxed w-90 mx-auto font-semibold">
              At first glance, Kolam may appear to be a simple form of decoration. However, it is much more than that.<br /><br />
              It is a visual representation of sacred geometry, with intricate patterns and symmetrical designs that hold deep spiritual meaning.
              The geometric patterns used in Kolam are believed to have a harmonizing effect on the environment and the individuals who create them.

            </p>
          </div>
        </section>

        {/* Tab navigation - simplified for touch */}
        <div className="top-16 z-20 bg-amber-100/90 shadow-md backdrop-blur-sm">
          <div className="max-w-md mx-auto grid grid-cols-3 text-center">
            {["overview", "history", "mathematics"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`py-3 px-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-iks-pale ${
                  activeTab === tab
                    ? "bg-iks-orange text-amber-50"
                    : "bg-amber-100/90 text-amber-900 hover:bg-amber-200/90"
                }`}
                aria-selected={activeTab === tab}
                role="tab"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content sections - with semi-transparent backgrounds */}
        <div className="w-full max-w-md mx-auto p-4">
          {/* Overview Section */}
          <section
            id="overview-section"
            className={`mb-6 bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-lg ${activeTab === "overview" ? "block" : "hidden"}`}
          >
            <h3 className="text-lg font-bold text-amber-900 mb-3">What is Kolam Rangoli?</h3>
            <p className="text-amber-950 mb-4 text-sm leading-relaxed">
            The traditional South Indian kolam, based on a grid of points is known as PuLLi kolam in Tamil Nadu <br />  
              It is created using rice flour, chalk, or colored powders.
              These geometric patterns are drawn around a grid of dots, forming intricate designs with curved loops and
              lines.
            </p>

            <h4 className="text-base font-bold text-amber-900 mb-2">Cultural Significance</h4>
            <p className="text-amber-950 mb-4 text-sm leading-relaxed">
              Drawn daily at the entrance of homes, Kolams are believed to bring prosperity and good fortune. They
              welcome the goddess Lakshmi and provide food for insects and small creatures, symbolizing harmony with
              nature.
            </p>

            <h4 className="text-base font-bold text-amber-900 mb-2">Daily Practice</h4>
            <p className="text-amber-950 text-sm leading-relaxed">
              Each morning, women create new Kolams that may be walked on or washed away by evening. This practice
              represents the impermanence of life and the importance of daily renewal.
            </p>
          </section>

          {/* History Section */}
          <section
            id="history-section"
            className={`mb-6 bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-lg ${activeTab === "history" ? "block" : "hidden"}`}
          >
            <p className="text-center"><i>The  earliest  surviving  kolams  date back to around 900AD. They were used for a variety of  purposes  including  mapmaking,  navigation  and recordkeeping.</i></p> <br />
            <h3 className="text-lg font-bold text-amber-900 mb-3">Introduction</h3>
            <p className="text-amber-950 mb-4 text-sm leading-relaxed">
              The decoration is not the main purpose of a Kolam. In olden days, kolams were drawn in coarse rice flour, so the ants would not have to walk too far or too long for a meal.
              The rice powder also invites birds and other small creatures to eat it, thus welcoming other beings into ones home and everyday life.
            </p>

            <h3 className="text-lg font-bold text-amber-900 mb-3">Origins</h3>
            <p className="text-amber-950 mb-4 text-sm leading-relaxed">
              The origins of the kolam tradition in Tamil Nadu can be traced to the ancient Sangam literature, which is a compilation of poems, songs and narratives from among the Tamil people.
              The Kolam tradition has its origin in this literature. They may have been first used by farmers to mark their fields or as a means to record the name of the house that owned them. 
            </p>
          </section>

          {/* Mathematics Section */}
          <section
            id="mathematics-section"
            className={`mb-6 bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-lg ${activeTab === "mathematics" ? "block" : "hidden"}`}
          >
            <h3 className="text-lg font-bold text-amber-900 mb-3">Mathematical Connection</h3>
            <p className="text-amber-950 mb-4 text-sm leading-relaxed">
              Kolam designs incorporate principles of symmetry, fractals, and number theory. The patterns follow
              specific mathematical rules and sequences that have attracted the attention of mathematicians worldwide.
            </p>

            <h4 className="text-base font-bold text-amber-900 mb-2">Dot Grid System</h4>
            <p className="text-amber-950 mb-4 text-sm leading-relaxed">
              Many Kolams start with a grid of dots (pulli) that serve as the framework. The number and arrangement of
              these dots follow mathematical patterns, often based on odd numbers considered auspicious.
            </p>
          </section>
        </div>
        {/* Footer */}
        <footer className="w-full bg-iks-pale/60 backdrop-blur-sm text-amber-900 font-extrabold p-2 mt-6">
          <div className="max-w-md mx-auto text-center">
            <p className="text-sm">Prakalp 2025</p>
            <p className="text-xs mt-2 font-bold">Built by Team FiboMandala</p>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
