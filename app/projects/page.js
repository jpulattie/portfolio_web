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
              href="https://expo.dev/artifacts/eas/xc9Not5svhVPUvTwvoiEAN.apk"
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
              href="https://expo.dev/artifacts/eas/xc9Not5svhVPUvTwvoiEAN.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center block w-fit "
            >
              <span className="p-2 hover:bg-white text-black rounded-2xl bg-[#aaaaaa] mt-2"><i>APK Download</i></span>
            </a>
            <p className="pt-4 text-center"><strong>iPhone:</strong> Download and install the Expo Go app from the App Store. After the Expo Go app
              is installed, click the link below to open the SAA app in Expo Go (link must be opened on a mobile phone with Expo Go or the url will not work)
              </p>
            <a
              href="exp://u.expo.dev/cedde30c-042a-455a-b1fa-8273c4b08b10/group/67de3a4d-dd52-4a7c-9a31-fb61253438db"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center block w-fit "
            >
              <span className="p-2 hover:bg-white text-black rounded-2xl bg-[#aaaaaa] mt-2"><i>iOS Expo Go Link</i></span>
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
