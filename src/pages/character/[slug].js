import { useRouter } from "next/router"

export default function PageCharacter() {
    const route = useRouter();
    return (
        <h1>Character {JSON.stringify(route.query)}</h1>
    )
  }
  