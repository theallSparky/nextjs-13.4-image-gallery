import { Spinner } from "react-bootstrap";

export default function Loading() {
    return(
        <div>
            <Spinner />
            <h1>Loading...Hold on to your horses!</h1>
            <p>sheesh...</p>
        </div>
    )
}