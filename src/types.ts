interface ReportEntry {
	metafile: string;
	outfile: string;
	bytes: number;
}
export type Report = Record<string, ReportEntry>;

export interface CompareResult {
	metafile: string;
	outfile: string;
	bytes: number;
	diff: number;
	remark: "added" | "deleted" | "increased" | "decreased";
}

export interface Options {
	name: string;
	metafiles: Array<string>;
	includeExtensions: Array<string>;
	analyzerDirectory: string;
	percentExtraAttention: number;
	showDetails: boolean;
}
