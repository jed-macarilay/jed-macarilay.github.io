import type { Route } from "./+types/home"
import Badges from "../components/Badges"

export default function Home() {
  return (
    <>
      <section>
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          <div className="bg-zinc-800 text-white">
            <div className="p-4">
              <h3 className="text-lg font-medium">Senior Developer - Diversified Robotics</h3>
              <p className="text-sm text-zinc-400">January 2024 - June 2025</p>
              <Badges techs={[
                'Vue.js',
                'TypeScript',
                'React',
                'Tailwind CSS',
                'Node.js',
                'Laravel',
                'Cosmos DB',
                'Azure DevOps',
                'Azure Functions',
                'Azure Blob Storage',
                'Git',
              ]} />
            </div>
          </div>

          <div className="bg-zinc-800 text-white">
            <div className="p-4">
              <h3 className="text-lg font-medium">Vue.js Developer - Questronix Corporation</h3>
              <p className="text-sm text-zinc-400">June 2022 - July 2023</p>
              <Badges techs={[
                'Vue.js',
                'Bootstrap',
                'CodeIgniter',
                'Cosmos DB',
                'Amazon Web Services s3',
                'Git',
              ]} />
            </div>
          </div>

          <div className="bg-zinc-800 text-white">
            <div className="p-4">
              <h3 className="text-lg font-medium">Full-Stack Web Developer (Part-Time) - Redmer Productions, LLC</h3>
              <p className="text-sm text-zinc-400">July 2023 - September 2023</p>
              <Badges techs={[
                'Vue.js',
                'Node.js',
                'Git',
              ]} />
            </div>
          </div>

          <div className="bg-zinc-800 text-white">
            <div className="p-4">
              <h3 className="text-lg font-medium">Full-Stack Web Developer - QAIROS</h3>
              <p className="text-sm text-zinc-400">Jul 2021 - Dec 2021</p>
              <Badges techs={[
                'Vue.js',
                'Laravel',
                'Drupal',
                'Git',
              ]} />
            </div>
          </div>

          <div className="bg-zinc-800 text-white">
            <div className="p-4">
              <h3 className="text-lg font-medium">Software Developer - Mobext Philippines</h3>
              <p className="text-sm text-zinc-400">May 2019 - Dec 2021</p>
              <Badges techs={[
                'Vue.js',
                'Laravel',
                'VuetifyDeveloped a rental management system with payment processing, lease tracking, and role-based access.',
                'CodeIgniter',
                'October CMS',
                'Docker',
                'Git',
              ]} />
            </div>
          </div>

          <div className="bg-zinc-800 text-white">
            <div className="p-4">
              <h3 className="text-lg font-medium">Web Developer (Part-Time) - Cinnamon Digital</h3>
              <p className="text-sm text-zinc-400">Jan 2020 - Feb 2020</p>
              <Badges techs={[
                'Vue.js',
                'Laravel',
                'Tailwind CSS',
                'Stripe API',
                'Git',
              ]} />
            </div>
          </div>

          <div className="bg-zinc-800 text-white">
            <div className="p-4">
              <h3 className="text-lg font-medium">Junior Web Developer - Jarvis Butler Property Management</h3>
              <p className="text-sm text-zinc-400">Sep 2018 - Mar 2019</p>
              <Badges techs={[
                'Vue.js',
                'Laravel',
                'JavaScript',
                'PHP',
                'Boostrap',
                'Git',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div className="bg-zinc-800 text-white">
            <div className="p-4">
              <h3 className="text-lg font-medium">Divine Mercy College Foundation INC</h3>
              <p className="text-sm text-zinc-400">BS in Information Technology</p>
              <p className="text-sm text-zinc-400">2014 - 2018</p>
              <p className="text-sm text-zinc-400 mt-2">Cum Laude, Divine Mercy College</p>
              <p className="text-sm text-zinc-400 mt-2">Best in Practicum Awardee, Class of 2018</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}