export interface JwtPayload {
  sub: string; // User ID
  email: string;
  iat?: number; // Issued At
  exp?: number; // Expiration Time
}
