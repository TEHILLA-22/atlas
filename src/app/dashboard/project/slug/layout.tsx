// app/dashboard/project/[slug]/layout.tsx
import ProjectSidebar from '@/components/ProjectSidebar';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <ProjectSidebar />
      <main className="lg:ml-72 min-h-screen">
        {children}
      </main>
    </div>
  );
}