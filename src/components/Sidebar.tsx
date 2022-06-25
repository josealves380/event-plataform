import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSON_QUERY = gql`
query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}

`

interface GetlessonQueryResponse {
  lesson: {
    id: string
    title: string
    slug: string
    lessonType: 'live' | 'class'
  }[]
}

export function Sidebar() {
  const { data } = useQuery<GetlessonQueryResponse>(GET_LESSON_QUERY)

  console.log(data)
  return (
    <aside className="w-[348px] bg-gray-700 p-6 boder-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        
        <Lesson
        title="Aula o1"
        slug="aula-01"
        availableAt={new Date()}
        type="class"
        />
      </div>
    </aside>
  )
}