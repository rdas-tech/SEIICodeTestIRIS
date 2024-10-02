export interface SubDivisionState {
	subdivisions: SubdivisionData[];
	error: string | null;
}

export interface SubDivisionApiResponse {
	subdivisions: SubdivisionData[];
}

export interface SubdivisionData {
	activeSections: number;
	builtOutSections: number;
	code: string;
	community: string | null;
	county: string;
	fieldSurveyTerritoryId: number;
	fieldSurveyTerritoryName: string;
	futureSections: number;
	iPoints: any | null;
	id: number;
	imageBoxId: number;
	latitude: number;
	longitude: number;
	marketAbbreviation: string;
	marketId: number;
	marketName: string;
	mostRecentIPointBatchDate: string;
	name: string;
	nearMapImageDate: string;
	subdivisionGeometryBoundaryId: any | null;
	subdivisionGeometryBoundingBoxId: any | null;
	subdivisionGeometryId: any | null;
	subdivisionGeometryIntelligenceBoundaryId: number;
	subdivisionGeometryIntelligenceBoundaryStatusChangeDate: string;
	subdivisionGeometryIntelligenceBoundaryStatusCode: string;
	subdivisionGeometryIntelligenceBoundaryStatusId: number;
	subdivisionSpecificStatus: string;
	subdivisionStatusCode: string;
	subdivisionStatusId: number;
	surveyMethodCode: string;
	surveyMethodId: number;
	totalLots: number;
	validatediPoints: any | null;
	zoom17Date: string;
	zoom18Date: string;
}
