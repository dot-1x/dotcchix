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
              "This was my first language I learned when I was at grade 11th and one my favorite language" +
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
              "First time I learned typescript was around 2022, not deep dive into it",
          },
          {
            subtitle: "Main Use",
            description: "I mainly use typescript to develop mini web app",
          },
        ]}
      />
      <Markdown
        title="Mentoring"
        fields={[
          {
            subtitle: "First mentoring",
            description:
              "The first time I mentored someone/people was in my 2nd year of college" +
              "\nWith theme of 'Developing portofolio website using Next'" +
              "\nI was with help of my friend to mentor people",
          },
        ]}
      />
    </>
  )
}
