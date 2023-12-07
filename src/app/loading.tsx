import { Spinner } from "react-bootstrap";

export default function Loading() {
    return(
        <div>
            <Spinner animation="border" className="d-block m-auto"/>
            <h1 className="m-auto text-center py-3">Loading...Hold on to your horses!</h1>
            <p className="m-auto text-center py-3">sheesh...</p>
        </div>
    )
}