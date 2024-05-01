interface Props {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({params, searchParams }: Props) {
  if(searchParams.word === undefined) return ( <div>請查詢單字</div>)
  return (
    <div>123</div>
  )
}