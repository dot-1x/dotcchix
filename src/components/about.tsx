import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Bio from "./profile/bio"
import Experience from "./profile/experience"
export default function About() {
  return (
    <div className="my-2 w-full flex h-[90%]">
      <div className="invisible lg:visible w-0 lg:w-[100%]">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <div className="px-5">
              <div className="flex flex-col justify-between">
                <h1 className="text-5xl">Me?</h1>
                <p>Click the tabs below to know about me</p>
                <p>
                  Use the <span className="text-python-yellow">Slider</span> to
                  expand the main tab
                </p>
              </div>
              <Bio />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex items-center flex-col justify-between overflow-y-auto h-full">
              <h1 className="text-5xl">Experience?</h1>
              <Experience />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25}>
            <div className="flex items-end flex-col justify-between px-5">
              <h1 className="text-5xl">Hobbies</h1>
              <h3 className="text-2xl">and stuff.</h3>
              <div className="mt-3"></div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="visible lg:invisible w-[100%] lg:w-0">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="px-5">
              <div className="flex flex-col justify-between">
                <h1 className="text-5xl">Me?</h1>
                <p>Click the tabs below to know about me</p>
                <p>
                  Use the <span className="text-python-yellow">Slider</span> to
                  expand the main tab
                </p>
              </div>
              <Bio />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex items-center flex-col justify-between overflow-y-auto h-full">
              <h1 className="text-5xl">Experience?</h1>
              <Experience />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25}>
            <div className="flex items-end flex-col justify-between px-5">
              <h1 className="text-5xl">Hobbies</h1>
              <h3 className="text-2xl">and stuff.</h3>
              <div className="mt-3"></div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}
