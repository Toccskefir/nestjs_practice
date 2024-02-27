import { SetMetadata } from '@nestjs/common';
import { Role } from '../user/user.model';

export const ROLES_KEY = 'roles';
export const WithRole = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
