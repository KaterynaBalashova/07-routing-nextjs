import { Suspense } from "react";

export default function NotesLayout({
    children,
    sidebar
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
    return (
        <div>
            <Suspense fallback={<div>Loading categories...</div>}>{sidebar}</Suspense>
            {children}
        </div>
    )
};
