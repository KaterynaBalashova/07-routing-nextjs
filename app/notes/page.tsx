import Notes from "./Notes.client";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";

export default async function App() {
    const queryClient = new QueryClient();
    
    await queryClient.prefetchQuery({
        queryKey: ["notes", "", 1],
        queryFn: () => fetchNotes("", 1),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Notes />
        </HydrationBoundary>
    );
}