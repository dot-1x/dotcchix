import { Markdown } from "@/components/ui/markdown"

export default function Experience() {
  return (
    <>
      <Markdown
        title="Python"
        fields={[
          {
            subtitle: "Roadmap",
            description:
              "This was my first language I learned and one of my main language" +
              "\nI learn this language from Progate website I mentioned earlier",
          },
          {
            subtitle: "Experience",
            description:
              "I got 5 years experience with Python" +
              "\nMainly building API, Automation, and BOT",
          },
          {
            subtitle: "Main Use",
            description: "Used as my primary programming language",
          },
        ]}
      />
      <Markdown
        title="Typescript"
        fields={[
          {
            subtitle: "Experience",
            description:
              "First time I learned typescript was around 2022, not deep dive into it" +
              "\n but actively using it since then",
          },
          {
            subtitle: "Main Use",
            description: "I mainly use typescript to develop mini web app",
          },
        ]}
      />
      <Markdown
        title="Sourcepawn"
        fields={[
          {
            subtitle: "Experience",
            description:
              "only focusing for a year (2021), used to make a SourceMod plugin for my server",
          },
          {
            subtitle: "Main Use",
            description: "Plugin for my CS:GO Community Server",
          },
        ]}
      />
      <Markdown
        title="Mentoring"
        fields={[
          {
            subtitle: "First mentoring",
            description:
              "The first time I mentored people was in my 2nd year of college" +
              "\nWith theme of 'Developing portofolio website using Next'",
          },
        ]}
      />
      <Markdown
        title="Source Level Design"
        fields={[
          {
            subtitle: "Experience",
            description:
              "i don't know why I put this in, but, i've had experience of making map for cs:go and cs:source around 2020 - 2021",
          },
        ]}
      />
    </>
  )
}
