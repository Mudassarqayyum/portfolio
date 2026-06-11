import { getProjectBySlug, projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./project-detail-client";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
