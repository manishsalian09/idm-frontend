import { User } from "../user/user";

export class Role {
    id: number;
    name: string;
    description: string;
    owner: User;
    approvers: RoleApprover[] = [];
    action: string;
    active: string;
    status: string;
}

export class RoleApprover {
    id: number;
    user: User;
    role: Role;
    createdOn: number;
    createdBy: string;
    modifiedOn: number;
    modifiedBy: string;
    status: string;
}