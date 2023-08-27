export interface Notes {
    _id?:         string;
    workSpaceId?: string;
    userId?:      string;
    title?:       string;
    content?:     string;
    settings?:    Settings;
}

export interface Settings {
    archived?:        boolean;
    pinned?:          boolean;
    backgroundColor?: string;
    _id?:             string;
}