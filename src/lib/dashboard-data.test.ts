import { describe, expect, it } from 'vitest';
import { filterGrievances, grievances, reportCsv, summaryFor } from './dashboard-data';

describe('dashboard reports', () => {
  it('filters a case by id and status together', () => {
    expect(filterGrievances(grievances, '48307', 'In progress', 'All services').map(r => r.id)).toEqual(['BGV-2026-48307']);
    expect(filterGrievances(grievances, '48307', 'Verified', 'All services')).toHaveLength(0);
  });
  it('combines service and status filters', () => {
    expect(filterGrievances(grievances, '', 'Verified', 'Sanitation').map(r => r.id)).toEqual(['BGV-2026-48092']);
  });
  it('summarizes the literal sample records', () => {
    expect(summaryFor(grievances)).toEqual({ total: 6, active: 3, awaiting: 1, verified: 2 });
  });
  it('exports only supplied rows with correct officer and case', () => {
    const csv = reportCsv(grievances.slice(0, 1));
    expect(csv.split('\r\n')).toHaveLength(2);
    expect(csv).toContain('"BGV-2026-48213"');
    expect(csv).toContain('"A. Deshmukh"');
    expect(csv).not.toContain('BGV-2026-48307');
  });
});