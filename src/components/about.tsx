import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Bio from "./profile/bio"

export default function About() {
  return (
    <div className="my-2 w-full flex font-firacode h-[90%]">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <div className="px-5">
            <div className="flex flex-col justify-between">
              <h1 className="text-5xl">Who Am I?</h1>
              <p>Click the tabs below to know about me</p>
            </div>
            <Bio />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex items-center flex-col justify-between">
            <h1 className="text-5xl">Experience?</h1>
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
  )
}
