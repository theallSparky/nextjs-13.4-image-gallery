"use client"

interface ErrorPageProps {
    error: Error,
    reset: ()=> void
}

export default function Error() {
    return(
        <div>
            <h1>Error!</h1>
            <p>Somewhere, somebody made an oopsie woopsie!</p>
        </div>
    )
}