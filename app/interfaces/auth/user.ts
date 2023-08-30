export interface UserBasic {
    status?: string;
    user?:   User;
}

export interface User {
    _id?:       string;
    name?:      string;
    lastname?:  string;
    username?:  string;
    email?:     string;
    createdAt?: Date;
    __v?:       number;
}
