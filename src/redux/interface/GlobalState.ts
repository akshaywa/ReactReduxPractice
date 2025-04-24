import { DecodedToken } from "../../interface/DecodedToken";
import { FormState } from "../../interface/FormState";

export interface GlobalState {
    formData: FormState;
    studentData: FormState[];
    jwtToken: string | null;
    decodedToken: DecodedToken;
}