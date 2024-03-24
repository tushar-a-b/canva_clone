/* eslint-disable no-unused-vars */

// ====== USER PARAMS

declare type CreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};
