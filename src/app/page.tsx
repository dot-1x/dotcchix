import About from "@/components/about"
import Projects from "@/components/projects"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"

export default function Page() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('python.webp')" }}
    >
      <main className="custom-size rounded-lg overflow-hidden bg-custom-black/[96%] hover:cursor-default">
        <Tabs defaultValue="dotcchix" className="h-full">
          <TabsList className="flex flex-col md:flex-row xl:w-[35%] w-full inline-flex items-center justify-center text-white p-1 font-firacode">
            <TabsTrigger
              value="dotcchix"
              className="transition-all data-[state=active]:border-b-2 border-python-yellow w-full mx-auto inline-flex items-center justify-center font-medium hover:text-python-blue"
            >
              hello.friends
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="transition-all data-[state=active]:border-b-2 border-python-yellow w-full mx-auto inline-flex items-center justify-center font-medium hover:text-python-yellow"
            >
              about.me
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="transition-all data-[state=active]:border-b-2 border-python-yellow w-full mx-auto inline-flex items-center justify-center font-medium hover:text-python-blue"
            >
              projects.py
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="transition-all data-[state=active]:border-b-2 border-python-yellow w-full mx-auto inline-flex items-center justify-center  font-medium hover:text-python-yellow"
            >
              contact.md
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="dotcchix"
            className="text-python-blue flex items-center justify-center max-w-7xl mx-auto"
          >
            <div className="flex flex-col justify-between">
              <p className="text-3xl">
                Greetings! I am <span className="text-python-yellow">Zex.</span>
              </p>
              <p className="text-xl">
                Also known as{"\n"}
                <span className="text-python-yellow">dotcchix || dot1x</span>
              </p>
              <ul className="mt-9 text-2xl font-firacode">
                <li>
                  {">"} find me on{" "}
                  <Link
                    className="text-python-yellow"
                    href="https://discord.com/users/732842920889286687"
                    target="blank"
                  >
                    discord
                  </Link>
                </li>
                <li>
                  {">"} visit my{" "}
                  <Link
                    className="text-python-yellow"
                    href="https://github.com/dot-1x"
                    target="blank"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="about" className="text-white">
            <About />
          </TabsContent>
          <TabsContent value="projects" className="text-white">
            <Projects />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
