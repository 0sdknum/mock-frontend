import CaseDetailClient from "./CaseDetailClient";
import { MOCK_CASES } from "../../../lib/mockCases";

export function generateStaticParams() {
  return MOCK_CASES.map((c) => ({ id: c.id }));
}

export default async function CaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <CaseDetailClient id={id} />;
}
