"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogsIcon } from "lucide-react"
import React, { useEffect, useState } from "react"
import { LogStyle, LogParent } from "@/components/ui/logstyle"

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
    <Tabs className="mt-4 font-firacode">
      <TabsList className="flex flex-row">
        <TabsTrigger
          value="personal"
          className="group transition-all pr-4 flex flex-row gap-x-2 data-[state=active]:text-white data-[state=active]:bg-[var(--py-dark)] hover:bg-python-dark"
        >
          <LogsIcon className="group-data-[state=active]:text-green-300" />
          <span>personal.log</span>
        </TabsTrigger>
        <TabsTrigger
          value="roadmap"
          className="group transition-all px-4 flex flex-row gap-x-2 data-[state=active]:text-white data-[state=active]:bg-[var(--py-dark)] hover:bg-python-dark"
        >
          <LogsIcon className="group-data-[state=active]:text-green-300" />
          roadmap.log
        </TabsTrigger>
        <TabsTrigger
          value="interest"
          className="group transition-all px-4 flex flex-row gap-x-2 data-[state=active]:text-white data-[state=active]:bg-[var(--py-dark)] hover:bg-python-dark"
        >
          <LogsIcon className="group-data-[state=active]:text-green-300" />
          interest.log
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="personal"
        className="bg-[var(--py-dark)] data-[state=active]:p-3 flex flex-col gap-2"
      >
        <LogParent>
          <LogStyle logname="PERSONAL" logtype="INFO">
            Hello, I'm <span className="text-python-yellow">Nizar. </span>
            my IRL friends often call me{" "}
            <span className="text-python-yellow">Zar.</span>
          </LogStyle>
          <LogStyle logname="PERSONAL" logtype="INFO">
            If you know me from the internet, you probably know me as
            <span className="text-python-yellow"> Zex.</span> ||{" "}
            <span className="text-python-yellow">dotcchix.</span> as I have
            stated before
          </LogStyle>
          <LogStyle logname="PERSONAL" logtype="INFO">
            I Live in <span className="text-python-yellow">Indonesia, </span>
            my local time is: <DynamicTime />
          </LogStyle>
          <LogStyle logname="PERSONAL" logtype="INFO">
            I'm <span className="text-python-yellow">XX </span>Years old
          </LogStyle>
        </LogParent>
      </TabsContent>
      <TabsContent
        value="roadmap"
        className="bg-python-dark data-[state=active]:p-3 flex flex-col gap-2"
      >
        <LogParent>
          <LogStyle logname="ROADMAP" logtype="INFO">
            I went to{" "}
            <span className="text-python-yellow">Vocational High School</span>{" "}
            majoring <span className="text-python-yellow">Computer</span> and{" "}
            <span className="text-python-yellow">Networking</span>
          </LogStyle>
          <LogStyle logname="ROADMAP" logtype="INFO">
            start learning programming since{" "}
            <span className="text-python-yellow">grade 10th,</span> I was so bad
            back then...
          </LogStyle>
          <LogStyle logname="ROADMAP" logtype="INFO">
            Luckily, my school provides free online courses on{" "}
            <span className="text-python-yellow">Progate</span> starting grade
            11th
          </LogStyle>
          <LogStyle logname="ROADMAP" logtype="INFO">
            That is where I start to focus on programming, specially{" "}
            <span className="underline decoration-white">
              Py
              <span className="text-python-yellow">thon</span>
            </span>
          </LogStyle>
          <LogStyle logname="ROADMAP" logtype="INFO">
            now third-year{" "}
            <span className="text-python-yellow">Informatics </span>
            student
          </LogStyle>
        </LogParent>
      </TabsContent>
      <TabsContent
        value="interest"
        className="bg-python-dark data-[state=active]:p-3 flex flex-col gap-2"
      >
        <LogParent>
          <LogStyle logname="INTEREST/DEVELOPMENT" logtype="INFO">
            my main interest is developing on{" "}
            <span className="text-python-yellow">
              back-end API, Automation, and making BOT
            </span>
          </LogStyle>
          <LogStyle logname="INTEREST/DEVELOPMENT" logtype="INFO">
            currently learning{" "}
            <span className="text-python-yellow">Machine Learning</span> at my
            college
          </LogStyle>
          <LogStyle logname="INTEREST/GAMES" logtype="INFO">
            my interest in gaming used to be{" "}
            <span className="text-python-yellow">FPS</span> game
          </LogStyle>
          <LogStyle logname="INTEREST/GAMES" logtype="INFO">
            but, I <span className="text-red-300">stopped</span> since I had no
            time to grind them rank
          </LogStyle>
          <LogStyle logname="INTEREST/GAMES" logtype="INFO">
            for now, I more like <span className="text-rose-400">Anime</span>{" "}
            themed game such as{" "}
            <span className="text-rose-400">
              Genshin Impact, Wuthering Waves, AK: Endfield, Honkai: Star Rail,
              etc
            </span>
          </LogStyle>
          <LogStyle
            logname="INTEREST/GAMES"
            logtype="INFO"
            className="!delay-1s"
          >
            specially Genshin Impact (yes I trapped in this game)
          </LogStyle>
        </LogParent>
      </TabsContent>
    </Tabs>
  )
}
