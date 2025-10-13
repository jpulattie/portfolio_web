import Image from "next/image";
import Link from "next/link";
import Footer from "../footer"


export default function Experience() {
  return (
    <div className=" font-sans items-center justify-items-center h-[80vh]">

      <div className="flex  items-center flex-col flex row-start-2 h-[100%] md:w-[75%] w-[100%] rounded-xl md:items-center ">
      
        <div className="overflow-hidden rounded-2xl">
        <li className="font-sans bg-black rounded-2xl p-4 overflow-y-scroll h-full scrollbar ">
          <div className=" p-2">
            <h3 className="p-4"> <strong>Summary</strong> </h3>

            <p className="pl-4 pb-3">
              Computer Science graduate and Technical Trainer with a background in education, coaching, and software development. I lead client training on API integration, build example web apps with Next.js and React, and teach advanced SQL reporting on large IBM DB2 enterprise databases.
            </p>
            <p className="pl-4 pb-3">
              Skilled in Python, Java, C, C++, SQL (MySQL/DB2), Next.js, and React, with experience in Agile and Scrum methodologies. Passionate about making complex technical concepts accessible, driving efficiency, and enabling data-driven decision making.
            </p>


            <div>
              <h3 className="p-4"> <strong>Technical Skills</strong> </h3>
              <h4 className="pl-8 pb-1"> <strong>Languages</strong>:  Python, JavaScript, C, C++, Java, SQL (MySQL, IBM DB2)
              </h4>
              <h4 className="pl-8 pb-1"> <strong>Frameworks/Libraries</strong>:  Node.js, Next.js, React, Django/Flask
              </h4>
              <h4 className="pl-8 pb-1"> <strong>Tools & Technologies</strong>:  Git, APIs, npm, Agile/Scrum, AWS/Amazon S3
              </h4>
              <h4 className="pl-8 pb-3"> <strong>Databases</strong>:  MySQL, IBM DB2
              </h4>

            </div>
          </div>



            <div className="p-4">
              <h3 className="pb-3"> <strong>Technical Trainer</strong> | Corelation | <i>Jun 2024-Present</i> </h3>
              <ul className="list-disc pl-5 pt-2">
                <li className="pl-1 pb-1">
                  Delivered client training on company APIs, providing hands-on instruction and sharing best practices for seamless integration into production systems.
                </li>
                <li className="pl-1 pb-1">
                  Built sample web applications and automation scripts using Next.js and React to demonstrate real-world API workflows and practical implementation strategies.
                </li>
                <li className="pl-1 pb-1">
                  Trained clients to write and optimize complex SQL queries on large IBM DB2 enterprise databases, enabling accurate reporting and actionable data analysis.
                </li>
              </ul>
            </div>
            <div className=" p-4">
              <h3 className="pb-3"> <strong>Computer Science Teacher & Coach</strong> | Paschal High School | <i>Jun 2023 - Jun 2024</i> </h3>
              <ul className="list-disc pl-5 pt-2">

                <li className="pl-1 pb-1">
                  Taught Computer Science I–III, guiding students through Python, Java, and software development
                  fundamentals including algorithms, object-oriented design, and problem-solving
                </li>
                <li className="pl-1 pb-1">
                  Led the 2024 Women’s JV2 basketball team to a District Championship as Head Coach, fostering
                  teamwork, discipline, and competitive success
                </li>
              </ul>

            </div>
            <div className=" p-4">
              <h3 className="pb-3"> <strong>Computer Science Teacher & Coach</strong> | The Colony High School | <i>2015-2020</i> </h3>
              <ul className="list-disc pl-5 pt-2">

                <li className="pl-1 pb-1">
                  Taught Computer Science I & II, delivering instruction in Javascript, Java, and software development
                </li>
                <li className="pl-1 pb-1">
                  Managed the team website and produced digital/video content to boost program visibility
                </li>
                <li className="pl-1 pb-1">
                  Won three District Championships across multiple sports
                </li>
                <li className="pl-1 pb-1">
                  Organized and executed weekly training plans for 100+ athletes, driving performance at scale
                </li>
                <li className="pl-1 pb-1">
                  Coached players who achieved national recognition, including two current NFL starters
                </li>
              </ul>
            </div>
            <div className=" p-4">
              <h3 className="pb-3"> <strong>Teacher & Offensive Coordinator</strong> | Life High School | <i>2020-2021</i> </h3>
              <ul className="list-disc pl-5 pt-2">

                <li className="pl-1 pb-1">
                  Directed team performance and drove process improvements to achieve operational goals
                </li>
                <li className="pl-1 pb-1">
                  Planned and executed strategic initiatives, ensuring alignment across priorities and deliverables
                </li>
                <li className="pl-1 pb-1">
                  Led a high-performing team in a competitive, results-driven environment
                </li>

              </ul>
            </div>
            <div className=" p-4">
              <h3 className="pb-3"> <strong>Computer Science Teacher</strong> | Kennedale High School | <i>Jan 2023 - Jun 2023</i> </h3>
              <ul className="list-disc pl-5 pt-2">
                <li className="pl-1 pb-1">Taught Computer Science I–III, AP Computer Science, and CS Practicum, covering Python, Java, Javascript, algorithms, data structures, and software engineering principles.</li>
                <li className="pl-1 pb-1">Achieved a 60%+ AP CS exam pass rate, mentoring students in developing production-level coding skills and real-world projects.</li>
              </ul>
            </div>
            <div className=" p-4">
              <h3 className="pb-3"> <strong>Founder</strong> | Lights in the Heights | <i>Sep 2022 - Present</i> </h3>
              <ul className="list-disc pl-5 pt-2">
                <li className="pl-1 pb-1">Founded and ran a profitable holiday lighting company, achieving profitability within the first year.</li>
                <li className="pl-1 pb-1">Managed all aspects of the business, including marketing, customer service, sales, and billing, demonstrating strong entrepreneurial and leadership skills.</li>
              </ul>
            </div>
            <div className="p-4">
              <h3 className="pb-3"> <strong>Other Professional Experience</strong></h3>
              <ul className="list-disc pl-5 pt-2">


                <li className="pl-1 pb-1">
                  <strong>Churchill Mortgage</strong> | Marketing Manager | <i>Jun 2021 - Sep 2022</i>
                </li>
                <li className="pl-1 pb-1">
                  <strong>North Crowley High School</strong> | Teacher & Coach | <i>Jun 2013 - Jun 2015</i>
                </li>
                <li className="pl-1 pb-1">
                  <strong>Decatur High School</strong> | Teacher & Coach | <i>Jun 2012 - Jun 2013</i>
                </li>
                <li className="pl-1 pb-1">
                  <strong>Colleyville Middle School</strong> | Teacher & Coach | <i>Jun 2011 - Jun 2012</i>
                </li>

              </ul>
            </div>

        </li>
</div>

      </div>
    </div>
      
  );
}
