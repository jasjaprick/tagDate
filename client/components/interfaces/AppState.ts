import { makeVar} from '@apollo/client';

//GET USER ID REGISTER
export const currentUserRegistrationId = makeVar<number | null>(null);

export const currentUserTag= makeVar<number | null>(null);

