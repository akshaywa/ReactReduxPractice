export interface DecodedToken {
    email: string;
    exp: number;
    iat: number;
    roles: string[];
    sub: string;
}