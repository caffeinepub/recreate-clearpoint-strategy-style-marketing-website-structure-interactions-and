import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ContactForm {
    name: string;
    email: string;
    message: string;
    organization: string;
}
export interface PersistentContact {
    id: bigint;
    contactForm: ContactForm;
    submittedAt: Time;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllContacts(): Promise<Array<PersistentContact>>;
    getCallerUserRole(): Promise<UserRole>;
    getContact(contactId: bigint): Promise<PersistentContact>;
    isCallerAdmin(): Promise<boolean>;
    saveContact(form: ContactForm): Promise<void>;
}
