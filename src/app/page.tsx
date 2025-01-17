import About from "@/components/about"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Page() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center overflow-y-hidden"
      style={{ backgroundImage: "url('python.webp')" }}
    >
      <main className="custom-size rounded-lg overflow-y-hidden overflow-x-auto bg-custom-black/[96%] hover:cursor-default">
        <Tabs defaultValue="dotcchix" className="h-full">
          <TabsList className="xl:w-[35%] w-full inline-flex h-9 items-center justify-center text-white p-1 font-firacode">
            <TabsTrigger
              value="dotcchix"
              className="px-3 transition-all data-[state=active]:border-b-2 border-python-yellow w-full mx-auto inline-flex items-center justify-center font-medium hover:text-[var(--py-blue)]"
            >
              hello.friends
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="px-3 transition-all data-[state=active]:border-b-2 border-python-yellow w-full mx-auto inline-flex items-center justify-center font-medium hover:text-python-yellow"
            >
              about.me
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="px-3 transition-all data-[state=active]:border-b-2 border-python-yellow w-full mx-auto inline-flex items-center justify-center font-medium hover:text-[var(--py-blue)]"
            >
              projects.py
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="px-3 transition-all data-[state=active]:border-b-2 border-python-yellow w-full mx-auto inline-flex items-center justify-center  font-medium hover:text-python-yellow"
            >
              contact.md
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="dotcchix"
            className="text-[var(--py-blue)] flex items-center justify-center max-w-7xl mx-auto h-full data-[state=inactive]:h-[0]"
          >
            <div className="flex flex-col justify-between mb-10">
              <p className="text-3xl">
                Greetings! I am <span className="text-python-yellow">Zex.</span>
              </p>
              <p className="text-xl">
                Also known as{"\n"}
                <span className="text-python-yellow">dotcchix || dot1x</span>
              </p>
            </div>
          </TabsContent>
          <TabsContent
            value="about"
            className="text-[var(--py-blue)] flex h-full data-[state=inactive]:h-[0]"
          >
            <About />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
