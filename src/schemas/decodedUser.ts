import { Role } from "@shared/enum";

export type DecodedUser = {
    authId: string;
    userId: string;
    name: string;
    isVerified: boolean;
    isBlocked: boolean;
    isApproved: boolean;
    email: string;
    role: Role;
};