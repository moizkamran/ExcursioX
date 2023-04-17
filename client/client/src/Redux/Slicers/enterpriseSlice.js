import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    enterpriseDetails: {
        enterpriseName: "", 
        contactNumber: "",
        streetAddress: "",
        enterpriseMoto: "",
        basedCountry: "",
        enterpriseType: "",
        enterpriseEmail: "",
        enterpriseWebsite: "",
        enterpriseLogo: "",
        enterpriseUseCase: "",
        enterpriseSize: "",
        enterpriseLegalDocuments: [],
    },

    enterpriseOwner: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        role: "",
    },

    enterpriseBranding: {
        enterpriseLogoWhite: "",
        enterpriseLogoBlack: "",
    },

    enterpriseEmployees: {
        employees: [
        ],
    },

    enterpriseSubscription: {
        subscriptionType: "",
        subscriptionPlan: "",
        subscriptionStartDate: "",
        subscriptionEndDate: "",
        subscriptionStatus: "",
    },
};

const enterpriseSlice = createSlice({
    name: "enterprise",
    initialState,
    reducers: {
        setEnterpriseDetails: (state, action) => {
            return {
                ...state,
                enterpriseDetails: {
                    ...state.enterpriseDetails,
                    ...action.payload,
                },
            };
        },
        
        setEnterpriseOwner: (state, action) => {
            return {
                ...state,
                enterpriseOwner: {
                    ...state.enterpriseOwner,
                    ...action.payload,
                },
            };
        },

        setEnterpriseBranding: (state, action) => {
            return {
                ...state,
                enterpriseBranding: {
                    ...state.enterpriseBranding,
                    ...action.payload,
                },
            };
        },

        setEnterpriseEmployees: (state, action) => {
            return {
              ...state,
              enterpriseEmployees: {
                ...state.enterpriseEmployees,
                employees: action.payload.employees
              }
            };
          },
    },
});

export const { setEnterpriseDetails, setEnterpriseOwner, setEnterpriseBranding, setEnterpriseEmployees } = enterpriseSlice.actions;
export default enterpriseSlice.reducer;



