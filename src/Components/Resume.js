import { About } from "./About";
import { Contact } from "./Contact";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
export function Resume() {
  return (
    <main>
      {/* <header>
        <h1>VISMAYA WILSON</h1>
        <h2>SOFTWARE DEVELOPER</h2>
      </header> */}
      <div className="flex-container">
        
        <div className="aside-items">
          <aside>
         
            <About />
          </aside>
          <aside>
            <Skills />
          </aside>
          <aside>
          <Experience />
          
          </aside>
          <aside>
          <Contact />
          </aside>
        </div>
        <div className="section-items">
          <section>
           
          </section>
          <section>
            <Projects />
          </section>
          <section>
          <Education />
          </section>
        </div>
      </div>
    </main>
  );
}
