export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id" + process.env.UNSPLASH_ACCESS_KEY)
    
}