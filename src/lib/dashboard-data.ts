export type GrievanceStatus = 'In progress' | 'Awaiting confirmation' | 'Verified' | 'Needs attention';
export type Grievance = { id: string; title: string; category: string; ward: string; filed: string; updated: string; status: GrievanceStatus; officer: string; department: string; description: string; progress: number; };
export const grievances: Grievance[] = [
  { id: 'BGV-2026-48213', title: 'Streetlight outage near community centre', category: 'Street lighting', ward: 'Ward 04 · Pune', filed: '2026-10-02', updated: '2026-10-09', status: 'Awaiting confirmation', officer: 'A. Deshmukh', department: 'Electrical Maintenance', description: 'Three streetlights on the approach to the community centre have stopped working. The department has recorded replacement work; citizen confirmation is pending.', progress: 75 },
  { id: 'BGV-2026-48307', title: 'Water pipeline leak on the main road', category: 'Water supply', ward: 'Ward 04 · Pune', filed: '2026-10-04', updated: '2026-10-10', status: 'In progress', officer: 'S. Patil', department: 'Water Supply Department', description: 'A damaged pipeline is causing water to collect along the footpath. Inspection is complete and repair work has been assigned.', progress: 50 },
  { id: 'BGV-2026-48092', title: 'Uncollected waste at market entrance', category: 'Sanitation', ward: 'Ward 04 · Pune', filed: '2026-09-28', updated: '2026-10-08', status: 'Verified', officer: 'R. Kulkarni', department: 'Solid Waste Management', description: 'Accumulated waste at the market entrance has been removed. The citizen has confirmed the site is clear.', progress: 100 },
  { id: 'BGV-2026-47918', title: 'Damaged footpath outside primary school', category: 'Roads & public works', ward: 'Ward 04 · Pune', filed: '2026-09-24', updated: '2026-10-07', status: 'Needs attention', officer: 'M. Joshi', department: 'Public Works Department', description: 'Broken paving stones create a hazard outside the school gate. An update from the assigned department is still needed.', progress: 25 },
  { id: 'BGV-2026-48401', title: 'Blocked drain on Station Road', category: 'Sanitation', ward: 'Ward 07 · Pune', filed: '2026-10-06', updated: '2026-10-10', status: 'In progress', officer: 'R. Kulkarni', department: 'Drainage Department', description: 'A blocked stormwater drain causes standing water after rainfall. The cleaning team has been assigned.', progress: 50 },
  { id: 'BGV-2026-47836', title: 'Park entrance ramp needs repair', category: 'Community spaces', ward: 'Ward 04 · Pune', filed: '2026-09-20', updated: '2026-10-05', status: 'Verified', officer: 'N. Shinde', department: 'Parks & Gardens', description: 'The damaged accessible ramp at the park entrance has been repaired and the outcome confirmed by the citizen.', progress: 100 },
];
export function filterGrievances(rows: Grievance[], search: string, status: string, category: string) {
  const term = search.trim().toLowerCase();
  return rows.filter(row => (status === 'All statuses' || row.status === status) && (category === 'All services' || row.category === category) && `${row.id} ${row.title} ${row.ward} ${row.department}`.toLowerCase().includes(term));
}
export function summaryFor(rows: Grievance[]) {
  return { total: rows.length, active: rows.filter(r => r.status === 'In progress' || r.status === 'Needs attention').length, awaiting: rows.filter(r => r.status === 'Awaiting confirmation').length, verified: rows.filter(r => r.status === 'Verified').length };
}
export function reportCsv(rows: Grievance[]) {
  const escape = (v: string) => `"${v.replaceAll('"', '""')}"`;
  return [['Case number', 'Issue', 'Service', 'Location', 'Filed', 'Updated', 'Status', 'Department', 'Officer'], ...rows.map(r => [r.id, r.title, r.category, r.ward, r.filed, r.updated, r.status, r.department, r.officer])].map(r => r.map(escape).join(',')).join('\r\n');
}