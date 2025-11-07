import Image from "next/image";
import Link from "next/link";
import Footer from "../footer"


export default function Projects() {
  return (
    <div className="font-sans flex flex-col items-center h-[80vh]">



      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] w-full gap-1 overflow-y-scroll h-full scrollbar justify-items-center ">



        <div className="flex flex-col items-center text-center bg-black rounded-2xl p-4 m-4">
          <a
            href="https://ntxdevils.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block w-fit"
          ><h2 className="p-2 hover:bg-white hover:text-black rounded-2xl"><strong>NTX Devils Footy Website</strong></h2></a>
          <div className="flex flex-col items-center pt-2">
            <a
              href="https://ntxdevils.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block w-fit"
            ><Image
                className=" flex justify-center items-center rounded-xl"
                src="/footy.png"
                alt="NTX Devils website"
                width={270}
                height={57}
                priority
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition bg-black/50 rounded-lg">
                <i>Visit</i>
              </span>
            </a>
            <p className="pt-4 text-center">Developed a dynamic sports club management platform that enables administrators of any technical
              background to easily update their club website. Built with Next.js, JavaScript, Tailwind CSS, a normalized MySQL database, and Amazon S3
              for media storage. It features an intuitive admin dashboard for managing teams, rosters, schedules, sponsors, announcements, and
              club information.  </p>
            <a
              href="https://github.com/jpulattie/ntxdevils"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center block w-fit pt-[10%]"
            >
              <Image
                className=" flex justify-center items-center rounded-xl"
                src="/github-mark-white.png"
                alt="github logo"
                width={23}
                height={22.5}
                priority
              />
              <span className="p-2 hover:bg-white hover:text-black rounded-2xl "><i>github.com/jpulattie/ntxdevils</i></span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center bg-black rounded-2xl p-4 m-4">

          <h2 className="p-2 rounded-2xl"><strong>Student Athlete Availability App</strong></h2>
          <div className="flex flex-col items-center pt-2">
            <a
              href="https://expo.dev/artifacts/eas/sUG1S1K8htEbizPHSGoT5y.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block w-fit"
            ><Image
                className=" flex justify-center items-center rounded-xl"
                src="/SAA_app.jpg"
                alt="SAA App"
                width={105}
                height={57}
                priority
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition bg-black/50 rounded-lg">
                <i>Download APK</i>
              </span>
            </a>
            <p className="pt-4 text-center">Developed a React Native mobile app for Android and iOS to compile and display Student
              Athlete Availability reports. The app uses a Python AWS Lambda function with an API end point to gather, parse, and
              compile the reports into JSON and display using React Native with Expo and Typescript.</p>
            <p className="pt-4 text-center"><strong>Android:</strong> Download and install the APK below. Permission to install outside of the
              Google Play Store may need to be granted. (The link below routes to expo.dev)
            </p>
            <a
              href="https://expo.dev/artifacts/eas/sUG1S1K8htEbizPHSGoT5y.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center block w-fit "
            >
              <span className="p-2 hover:bg-white text-black rounded-2xl bg-[#aaaaaa] mt-2"><i>APK Download</i></span>
            </a>
            <p className="pt-4 text-center"><strong>iPhone:</strong> Download and install the Expo Go app from the App Store. After the Expo Go app
              is installed, scan the QR code or click the link below to open the SAA app in Expo Go (link must be opened on a mobile phone with Expo Go or the url will not work)
            </p>
            <a
              href="exp://u.expo.dev/cedde30c-042a-455a-b1fa-8273c4b08b10/group/b5ad1499-1627-4a73-bc30-002b263a67c5"
              rel="noopener noreferrer"
              className="group inline-flex items-center block w-fit "
            >
              <svg width="75" height="75" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-4">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H504C508.418 0 512 3.58172 512 8V504C512 508.418 508.418 512 504 512H8C3.58172 512 0 508.418 0 504V8Z" fill="white" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 61" shape-rendering="crispEdges" height="512" width="512" x="0" y="0"><path stroke="#000000" d="M4 4.5h7m1 0h2m1 0h2m1 0h4m1 0h2m2 0h3m4 0h5m1 0h1m2 0h1m1 0h2m3 0h7M4 5.5h1m5 0h1m1 0h1m3 0h2m3 0h1m1 0h4m3 0h1m2 0h1m1 0h2m1 0h1m2 0h2m2 0h3m2 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h5m1 0h1m1 0h1m3 0h1m2 0h2m2 0h1m1 0h1m1 0h1m2 0h4m1 0h2m2 0h1m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m3 0h1m2 0h1m6 0h1m5 0h1m1 0h1m2 0h1m2 0h1m1 0h3m2 0h2m1 0h1m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m4 0h1m2 0h1m1 0h1m3 0h1m1 0h7m2 0h3m1 0h2m2 0h1m1 0h2m3 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h1m2 0h1m1 0h1m1 0h2m1 0h2m4 0h1m3 0h4m4 0h3m3 0h1m3 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h5m1 0h1m3 0h2m2 0h3m3 0h1m6 0h1m3 0h2m1 0h3M6 12.5h3m1 0h1m1 0h1m2 0h3m1 0h1m1 0h1m2 0h2m2 0h9m1 0h1m1 0h1m1 0h1m5 0h4m2 0h3M6 13.5h1m1 0h2m1 0h1m1 0h1m5 0h1m1 0h1m4 0h3m1 0h2m2 0h4m2 0h2m1 0h4m2 0h1m1 0h6M6 14.5h1m3 0h3m2 0h1m1 0h1m3 0h3m2 0h4m1 0h1m2 0h1m2 0h2m1 0h1m1 0h1m1 0h1m2 0h2m1 0h1m1 0h2M4 15.5h2m1 0h3m2 0h2m1 0h2m2 0h1m1 0h1m5 0h1m1 0h1m3 0h1m2 0h2m1 0h1m1 0h5m1 0h3m3 0h1m1 0h1M4 16.5h1m1 0h3m1 0h1m1 0h5m2 0h2m1 0h3m4 0h3m1 0h1m1 0h2m3 0h2m3 0h2m1 0h5m1 0h2M4 17.5h1m3 0h2m1 0h1m2 0h1m2 0h2m2 0h1m6 0h1m6 0h1m1 0h2m5 0h1m1 0h2m1 0h1m1 0h2m2 0h2M4 18.5h1m1 0h3m1 0h2m1 0h4m1 0h1m2 0h1m2 0h2m2 0h1m1 0h1m2 0h2m1 0h3m1 0h3m2 0h1m1 0h2m1 0h1m1 0h1m1 0h2M4 19.5h1m1 0h1m2 0h1m1 0h1m3 0h1m1 0h1m4 0h2m1 0h1m3 0h3m1 0h1m3 0h2m5 0h1m1 0h1m2 0h1m6 0h1M4 20.5h1m2 0h1m1 0h2m3 0h2m2 0h2m4 0h5m1 0h1m3 0h2m4 0h4m2 0h1m1 0h2m1 0h4m1 0h1M5 21.5h2m2 0h1m1 0h1m3 0h2m3 0h4m1 0h1m1 0h1m1 0h2m4 0h1m4 0h1m3 0h1m1 0h1m2 0h1m2 0h1m2 0h2M4 22.5h1m1 0h1m3 0h3m1 0h1m1 0h2m1 0h5m1 0h4m1 0h1m2 0h4m3 0h4m3 0h2m1 0h1m3 0h1M4 23.5h1m3 0h1m3 0h3m2 0h1m1 0h4m1 0h1m4 0h1m10 0h1m2 0h4m8 0h1M4 24.5h1m1 0h2m1 0h3m4 0h1m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1m1 0h1m6 0h1m1 0h1m1 0h3m2 0h3m2 0h5M5 25.5h1m2 0h1m2 0h2m2 0h2m1 0h2m3 0h1m1 0h2m3 0h3m1 0h1m1 0h1m1 0h1m7 0h1m4 0h4m1 0h1M5 26.5h2m2 0h3m2 0h1m1 0h1m1 0h2m4 0h1m1 0h1m1 0h4m3 0h3m1 0h1m1 0h5m1 0h1m2 0h1m1 0h2m1 0h1M4 27.5h1m1 0h1m1 0h2m2 0h1m2 0h2m3 0h1m4 0h1m1 0h1m1 0h2m2 0h3m1 0h1m1 0h1m1 0h1m2 0h2m3 0h1m1 0h1m3 0h1M5 28.5h1m1 0h7m1 0h5m1 0h2m4 0h7m1 0h2m3 0h2m3 0h11M5 29.5h4m3 0h1m3 0h3m1 0h1m1 0h1m1 0h2m2 0h1m3 0h2m2 0h1m2 0h3m2 0h5m3 0h1m2 0h2M6 30.5h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m4 0h6m1 0h1m1 0h2m5 0h1m1 0h2m5 0h1m1 0h1m1 0h1m1 0h2M5 31.5h4m3 0h1m2 0h2m6 0h1m1 0h1m2 0h1m3 0h1m6 0h1m1 0h1m2 0h1m1 0h1m1 0h1m3 0h2m2 0h1M5 32.5h1m1 0h7m2 0h2m1 0h1m1 0h1m1 0h1m1 0h1m2 0h6m2 0h1m3 0h1m2 0h1m1 0h8m1 0h1M4 33.5h2m2 0h2m1 0h2m1 0h2m3 0h1m3 0h2m1 0h1m2 0h2m1 0h2m2 0h3m2 0h1m1 0h2m1 0h1m2 0h1m2 0h2m1 0h2M4 34.5h1m1 0h5m1 0h1m2 0h1m3 0h3m2 0h1m1 0h1m3 0h1m7 0h3m1 0h2m1 0h1m3 0h1m1 0h3M4 35.5h1m1 0h4m2 0h1m2 0h1m2 0h1m1 0h2m2 0h4m1 0h3m2 0h1m1 0h4m1 0h1m2 0h2m1 0h1m2 0h2m1 0h1m2 0h1M4 36.5h4m1 0h3m2 0h1m1 0h1m1 0h2m1 0h1m1 0h2m1 0h1m6 0h4m1 0h4m1 0h1m1 0h1m2 0h1m4 0h2m1 0h1M4 37.5h2m1 0h1m6 0h4m2 0h1m2 0h4m1 0h1m1 0h1m1 0h1m1 0h1m2 0h4m4 0h2m2 0h8M4 38.5h5m1 0h4m1 0h1m3 0h1m2 0h1m1 0h2m1 0h1m1 0h1m3 0h1m1 0h1m2 0h5m1 0h2m2 0h1m3 0h1m1 0h1M4 39.5h1m1 0h1m1 0h1m4 0h3m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m3 0h2m1 0h2m3 0h2m1 0h2m1 0h5m1 0h1M5 40.5h1m2 0h3m2 0h1m1 0h2m2 0h1m2 0h1m2 0h2m1 0h6m4 0h1m1 0h3m2 0h1m3 0h1m1 0h1m2 0h1M5 41.5h2m1 0h1m2 0h2m1 0h2m1 0h1m3 0h1m3 0h1m3 0h1m1 0h1m1 0h2m1 0h1m1 0h2m1 0h1m3 0h2m1 0h5m2 0h2M4 42.5h1m2 0h4m1 0h1m3 0h3m1 0h1m1 0h1m1 0h1m3 0h2m1 0h2m3 0h3m1 0h1m1 0h1m6 0h1m2 0h4M4 43.5h1m2 0h2m2 0h2m1 0h1m2 0h1m3 0h2m2 0h2m2 0h4m2 0h1m2 0h1m2 0h4m1 0h2m2 0h1M4 44.5h2m1 0h2m1 0h1m5 0h3m3 0h1m2 0h2m1 0h4m3 0h1m1 0h7m1 0h2m4 0h1m2 0h2M4 45.5h2m1 0h1m1 0h1m2 0h1m2 0h2m1 0h2m3 0h2m1 0h1m1 0h1m5 0h1m4 0h3m4 0h4m2 0h1m3 0h1M4 46.5h2m1 0h4m3 0h5m1 0h3m1 0h1m1 0h1m2 0h2m1 0h1m1 0h1m1 0h7m6 0h1m4 0h2M5 47.5h2m5 0h1m2 0h5m1 0h1m1 0h1m1 0h4m2 0h9m4 0h1m2 0h1m2 0h1m1 0h1m3 0h1M7 48.5h1m2 0h1m2 0h1m2 0h1m3 0h2m1 0h2m3 0h7m1 0h1m1 0h1m1 0h2m1 0h1m2 0h1m1 0h8M12 49.5h3m4 0h1m1 0h1m1 0h1m1 0h2m1 0h1m3 0h1m6 0h2m2 0h2m1 0h1m1 0h1m3 0h1m2 0h2M4 50.5h7m2 0h4m1 0h1m2 0h3m3 0h2m1 0h1m1 0h3m1 0h1m2 0h4m2 0h1m1 0h2m1 0h1m1 0h1M4 51.5h1m5 0h1m2 0h1m3 0h3m2 0h1m1 0h2m1 0h2m3 0h1m1 0h2m3 0h1m3 0h3m2 0h1m3 0h1m2 0h1M4 52.5h1m1 0h3m1 0h1m1 0h1m3 0h3m2 0h1m1 0h1m2 0h1m1 0h5m4 0h1m1 0h2m4 0h1m1 0h9M4 53.5h1m1 0h3m1 0h1m1 0h4m1 0h1m3 0h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m4 0h1m2 0h6m4 0h1m1 0h2M4 54.5h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h1m1 0h3m2 0h2m1 0h4m2 0h2m1 0h2m3 0h2m6 0h4M4 55.5h1m5 0h1m2 0h1m1 0h7m2 0h1m2 0h1m1 0h1m1 0h1m1 0h3m2 0h1m1 0h2m2 0h1m3 0h2m2 0h2m1 0h1M4 56.5h7m4 0h1m1 0h9m1 0h1m1 0h4m2 0h2m3 0h2m1 0h1m1 0h3m2 0h3m1 0h1" /></svg>

                <rect x="214.0327868852459" y="214.0327868852459" width="83.9344262295082" height="83.9344262295082" fill="black" stroke="white" stroke-width="8.89344262295082" />
                <svg x="214.0327868852459" y="214.0327868852459" width="83.9344262295082" height="83.9344262295082" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M63.9114 35.4964L52.1135 35.4964L30.6671 76.3932L39.9023 81.2706L58.0329 46.7391L76.1169 81.2829L85.333 76.3847L63.9114 35.4964Z" fill="white" />
                </svg>
              </svg>

              <span className="p-2 hover:bg-white text-black rounded-2xl bg-[#aaaaaa] ml-2 mt-2"><i>iOS Expo Go Link</i></span>
            </a>

          </div>
        </div>

        <div className="flex flex-col items-center text-center bg-black rounded-2xl p-4 m-4 ">
          <a
            href="/LittleBeaver.apk"
            download
            className="relative group block w-fit"
          ><h2 className="p-2 hover:bg-white hover:text-black rounded-2xl"><strong>Baby Tracker Android App</strong></h2></a>
          <div className="flex flex-col items-center pt-2 ">
            <a
              href="/LittleBeaver.apk"
              download
              className="relative group block w-fit"
            ><Image
                className=" flex justify-center items-center rounded-xl"
                src="/tracker.jpg"
                alt="Little Beaver Tracker APK download"
                width={95}
                height={57}
                priority
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition bg-black/50 rounded-lg">
                <i>Download</i>
              </span>
            </a>
            <p className="pt-4 text-center">Developed a baby activity tracking android application for new parents to log the activities of their children like sleep, medications, and diapers.
              My role in this project was the speech-to-text integration and text-to-speech functionality, allowing users to say &quot;Hey Benny... log a 20 minute nap&quot; for their child.  This application
              was built using Kotlin, Jetpack Compose, Firebase, and Android&apos;s speech recognizer.
            </p>
            <a
              href="https://github.com/njbrunette/467capstone/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center block w-fit pt-[10%]"
            >
              <Image
                className=" flex justify-center items-center rounded-xl"
                src="/github-mark-white.png"
                alt="github logo"
                width={23}
                height={22.5}
                priority
              />
              <span className="p-2 hover:bg-white hover:text-black rounded-2xl "><i>https://github.com/njbrunette/467capstone/</i></span>
            </a>
          </div>
        </div>
        <div className="flex  flex-col items-center text-center bg-black rounded-2xl p-4 m-4 ">
          <a
            href="https://lightsintheheights.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block w-fit"
          ><h2 className="p-2 hover:bg-white hover:text-black rounded-2xl"><strong>Lights in the Heights</strong></h2></a>
          <div className="flex flex-col items-center pt-2 ">
            <a
              href="https://lightsintheheights.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block w-fit"
            ><Image
                className=" flex justify-center items-center rounded-xl"
                src="/lightsintheheights.png"
                alt="Lights in the Heights website image"
                width={254}
                height={57}
                priority
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition bg-black/50 rounded-lg">
                <i>Visit</i>
              </span>
            </a>
            <p className="pt-4 text-center">Developed a simple website for Lights in the Heights, a holiday lighting business, that was built with Next.js, JavaScript, Tailwind CSS,
              and nodemailer for a contact form. This websites serves as a landing page for my business and is used primarily to provide contact information and allow new clients to request a quote
            </p>

            <a
              href="https://github.com/njbrunette/467capstone/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center block w-fit pt-[10%]"
            >
              <Image
                className=" flex justify-center items-center rounded-xl"
                src="/github-mark-white.png"
                alt="github logo"
                width={23}
                height={22.5}
                priority
              />
              <span className="p-2 hover:bg-white hover:text-black rounded-2xl"><i>https://github.com/jpulattie/lights_in_the_heights</i></span>
            </a>

          </div>
        </div>
      </div>


    </div>
  );
}
