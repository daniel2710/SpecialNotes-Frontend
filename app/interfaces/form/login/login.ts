export type SignUpType = {
    name: string;
    lastname: string;
    email?: string;
    username: string;
    password: string;
    confirm_password: string;
}

export type SignInType = {
    username: string;
    password: string;
}
