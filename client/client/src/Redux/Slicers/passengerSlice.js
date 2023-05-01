import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    passengerDetails: {
        passport_number: "",
        given_name: "",
        surname: "",
        gender: "",
        maritial_status: "",
        dob: "",
        age: "",
        pax: "",
        pob: "",
        nationality : "",
        education: "",
    },
    passportDetails: {
        passport_type: "",
        issue_date: "",
        expiry_date: "",
        issuing_country: "",
        passport_photo: "",
    },
    visaDetails: {
        visa_type: "",
        visa_number: "",
        visa_issue_date: "",
        visa_expiry_date: "",
    },
    relationDetails: {
        relation: "",
        relation_name: "",
        relation_id: "",
    },
    groupDetails: {
        group_name: "",
        group_id: "",
    },
    config: {
        isFH: false,
        isGH: false,
        usedRegulaAPI: false,
        usedOCR: false,
        usedMRZ: false,
        usedFaceMatch: false,
    },
};

const passengerSlice = createSlice({
    name: "passenger",
    initialState,
    reducers: {
        setPassengerDetails: (state, action) => {
            return {
                ...state,
                passengerDetails: {
                    ...state.passengerDetails,
                    ...action.payload,
                },
            };
        },
        setPassportDetails: (state, action) => {
            return {
                ...state,
                passportDetails: {
                    ...state.passportDetails,
                    ...action.payload,
                },
            };
        },
    },
});

export const { setPassengerDetails, setPassportDetails } = passengerSlice.actions;

export default passengerSlice.reducer;
