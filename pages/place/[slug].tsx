import Layout from "@/app/components/common/Layout"
import { useRouter } from "next/router"

const Place = () => {
  const {
    query: { slug },
  }
    = useRouter()
  return (
    <Layout >{slug}</Layout>
  )
}

export default Place