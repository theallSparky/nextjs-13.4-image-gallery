export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // throw Error("ErrorMcErrorface")
    return <div>Hello Next.js 13!</div>
}