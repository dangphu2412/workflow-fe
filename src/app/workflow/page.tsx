"use client";
import {useSession} from "next-auth/react";

export default function WorkflowPage() {
    const {status} = useSession();

    if (status === "unauthenticated") {
        return <>Please login to access this page</>
    }

    return <>Workflow</>
}
