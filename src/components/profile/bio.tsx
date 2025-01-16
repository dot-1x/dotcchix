"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogsIcon } from "lucide-react"
import React, { useEffect, useState } from "react"
import LogStyle from "@/components/ui/logstyle"

function DynamicTime() {
  const [localTime, setLocalTime] = useState(new Date())
  const [utcPlus7Time, setUtcPlus7Time] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()

      // Update local time
      setLocalTime(now)

      // Calculate UTC+7 time
      const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000) // UTC
      setUtcPlus7Time(new Date(utcTime.getTime() + 7 * 3600000)) // UTC+7
    }, 1000)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval)
  }, [])
  return (
    <span className="text-python-yellow">
      {utcPlus7Time.toLocaleString("en-US", { hour12: false })}
    </span>
  )
}

export default function Bio() {
  return (
    <Tabs className="mt-4">
      <TabsList className="flex flex-row">
        <TabsTrigger
          value="personal"
          className="group transition-all pr-4 flex flex-row gap-x-2 data-[state=active]:text-white data-[state=active]:bg-[var(--py-dark)]"
        >
          <LogsIcon className="group-data-[state=active]:text-green-300" />
          <span>personal.log</span>
        </TabsTrigger>
        <TabsTrigger
          value="school"
          className="group transition-all px-4 flex flex-row gap-x-2 data-[state=active]:text-white data-[state=active]:bg-[var(--py-dark)]"
        >
          <LogsIcon className="group-data-[state=active]:text-green-300" />
          school.log
        </TabsTrigger>
        <TabsTrigger
          value="interest"
          className="group transition-all px-4 flex flex-row gap-x-2 data-[state=active]:text-white data-[state=active]:bg-[var(--py-dark)]"
        >
          <LogsIcon className="group-data-[state=active]:text-green-300" />
          interest.log
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="personal"
        className="bg-[var(--py-dark)] data-[state=active]:p-3 flex flex-col gap-3"
      >
        <LogStyle logname="PERSONAL" logtype="INFO">
          Hello, I'm <span className="text-python-yellow">Nizar. </span>
          my IRL friends often call me{" "}
          <span className="text-python-yellow">Zar.</span>
        </LogStyle>
        <LogStyle logname="PERSONAL" logtype="INFO">
          If you know me from the internet, you probably know me as
          <span className="text-python-yellow"> Zex.</span> ||{" "}
          <span className="text-python-yellow">dotcchix.</span> as I have stated
          before
        </LogStyle>
        <LogStyle logname="PERSONAL" logtype="INFO">
          I Live in <span className="text-python-yellow">Indonesia, </span>
          my local time is: <DynamicTime />
        </LogStyle>
        <LogStyle logname="PERSONAL" logtype="INFO">
          I'm <span className="text-python-yellow">XX </span>Years old
        </LogStyle>
      </TabsContent>
      <TabsContent
        value="school"
        className="bg-[var(--py-dark)] data-[state=active]:p-3 flex flex-col gap-3"
      >
        <LogStyle logname="SCHOOL" logtype="INFO">
          I went to{" "}
          <span className="text-python-yellow">Vocational High School</span>{" "}
          majoring <span className="text-python-yellow">Computer</span> and{" "}
          <span className="text-python-yellow">Networking</span>
        </LogStyle>
        <LogStyle logname="SCHOOL" logtype="INFO">
          now third-year{" "}
          <span className="text-python-yellow">Informathics</span> student
        </LogStyle>
      </TabsContent>
    </Tabs>
  )
}
