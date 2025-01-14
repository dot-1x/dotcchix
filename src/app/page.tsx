import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Page() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center overflow-y-hidden"
      style={{ backgroundImage: "url('python.webp')" }}
    >
      <div className="custom-size rounded-lg overflow-y-hidden overflow-x-auto bg-custom-black/[96%]">
        <Tabs defaultValue="dotcchix" className="h-full dark">
          <TabsList>
            <TabsTrigger value="dotcchix">dotcchix</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent
            value="dotcchix"
            className="text-[var(--py-blue)] flex items-center justify-center max-w-7xl mx-auto h-full data-[state=inactive]:h-[0]"
          >
            <div className="flex flex-col justify-between mb-10">
              <p className="text-3xl">
                Greetings! my name is{" "}
                <span className="text-[var(--py-yellow)]">Zex.</span>
              </p>
              <p className="text-xl">
                People also call me by:{" "}
                <span className="text-[var(--py-yellow)]">
                  dotcchix / dot1x
                </span>
              </p>
            </div>
          </TabsContent>
          <TabsContent value="about" className="text-[var(--py-blue)] flex">
            <div className="m-5">
              <p>3rd year undergraduate student of Informathics</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
