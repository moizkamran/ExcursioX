import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  propertyDetails: {
    type: "",
    floors: [],
    propertyTypeOf: "",
    propertyName: "",
    propertyContact: "",
    contactNumber: "",
    isCompanyOwned: "",
    hasChannelManeger: "",
    streetAddress: "",
    addressLine2: "",
    country: "",
    city: "",
  },

  propertyLayout: {
    apartment: "",
    nameOptional: "",
    bedrooms: 1,
    beds: [],
    suite: "",
    basePrice: "",
  },

  hotelLayout: {},

  propertyFacilites: {
    // PARKING
    isParkingAvailable: "No",
    parkingType: "",
    parkingSpace: "",
    isReservationRequired: "",
    parkingPrice: "",
    // BREAKFAST
    isBreakfastAvailable: "",
    breakfastType: [],
    breakfastPrice: "",
    // Languages
    languages: [],
    //Facilities
    facilities: [],
  },
  propertyPhotos: {
    extraBed: "",
    extraBedCount: "",
    age: [],
    Extras: [],
    AddExtras: [],
    photos: [],
  },
  propertyHouseRules: {
    guestArrivalChipsFrom: {
      1: "",
      2: "",
      3: "",
      4: "",
    },
    guestArrivalChipsTo: {
      1: "",
      2: "",
      3: "",
      4: "",
    },
    guestDepartureChipsFrom: {
      1: "",
      2: "",
      3: "",
      4: "",
    },
    guestDepartureChipsTo: {
      1: "",
      2: "",
      3: "",
      4: "",
    },
  },
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    updatePropertyDetails: (state, action) => {
      return {
        ...state,
        propertyDetails: {
          ...state.propertyDetails,
          ...action.payload,
        },
      };
    },
    updatePropertyLayout: (state, action) => {
      return {
        ...state,
        propertyLayout: {
          ...state.propertyLayout,
          ...action.payload,
        },
      };
    },
    updatePropertyFacilites: (state, action) => {
      return {
        ...state,
        propertyFacilites: {
          ...state.propertyFacilites,
          ...action.payload,
        },
      };
    },
    updatePropertyPhotos: (state, action) => {
      return {
        ...state,
        propertyPhotos: {
          ...state.propertyPhotos,
          ...action.payload,
        },
      };
    },
    updatePropertyHouseRules: (state, action) => {
      const {
        chipNumberFrom,
        valueFrom,
        chipNumberTo,
        valueTo,
        chipNumberFrom1,
        valueFrom1,
        chipNumberTo1,
        valueTo1,
      } = action.payload;
      return {
        ...state,
        propertyHouseRules: {
          guestArrivalChipsFrom: {
            ...state.propertyHouseRules.guestArrivalChipsFrom,
            [chipNumberFrom]: valueFrom,
          },
          guestArrivalChipsTo: {
            ...state.propertyHouseRules.guestArrivalChipsTo,
            [chipNumberTo]: valueTo,
          },
          guestDepartureChipsFrom: {
            ...state.propertyHouseRules.guestDepartureChipsFrom,
            [chipNumberFrom1]: valueFrom1,
          },
          guestDepartureChipsTo: {
            ...state.propertyHouseRules.guestDepartureChipsTo,
            [chipNumberTo1]: valueTo1,
          },
        },
      };
    },

    addHotelLayout: (state, action) => {
      return {
        ...state,
        hotelLayout: {
          ...state.hotelLayout,
          ...action.payload,
        },
      };
    },
    addRoomToFloor: (state, action) => {
      const { floorId, room } = action.payload;
      const newFloors = [...state.propertyDetails.floors];
      const floorIndex = newFloors.findIndex(
        (floor) => floor.name === `Floor ${floorId + 1}`
      );
      const newRooms = [...newFloors[floorIndex].rooms, room];
      newFloors[floorIndex] = { ...newFloors[floorIndex], rooms: newRooms };
      return {
        ...state,
        propertyDetails: {
          ...state.propertyDetails,
          floors: newFloors,
        },
      };
    },
  },
});

export const {
  updatePropertyDetails,
  updatePropertyLayout,
  updatePropertyHouseRules,
  updatePropertyFacilites,
  addHotelLayout,
  addRoomToFloor,
  updatePropertyPhotos,
} = propertySlice.actions;
export default propertySlice.reducer;
