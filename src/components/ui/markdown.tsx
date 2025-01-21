export function Markdown({
  title,
  fields,
}: {
  title: string
  fields: Array<{
    subtitle: string
    description: string
  }>
}) {
  return (
    <div className="w-full p-2 font-firacode">
      <h1 className="text-2xl font-medium text-white mb-5">{title}</h1>
      <div className="pl-10">
        <ul className="list-disc text-white/80">
          {fields?.map((v, parent_idx) => (
            <div key={v.subtitle} className="flex flex-col gap-2">
              <li className="font-medium text-lg text-white/90">
                {v.subtitle}
              </li>
              {v.description.split("\n").map((v, idx) => (
                <p key={"desc" + idx + parent_idx}>{v}</p>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
