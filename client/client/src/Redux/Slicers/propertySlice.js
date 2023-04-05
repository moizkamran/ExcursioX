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
    facilities: {
      freeWifi: false,
      bar: false,
      sauna: false,
      garden: false,
      terrace: false,
      noSmokingRooms: false,
      familyRooms: false,
      hotTub: false,
      airConditioning: false,
      swimmingPool: false,
    },
  },
  propertyPhotos: {
    extraBed: "",
    extraBedCount: "",
    age: {
      childrenAge2: false,
      children: false,
      adults: false,
    },
    Extras: {
      freeWifi: false,
      bar: false,
      sauna: false,
      garden: false,
      terrace: false,
      noSmokingRooms: false,
      familyRooms: false,
      hotTub: false,
      airConditioning: false,
      swimmingPool: false,
    },
    AddExtras: [],
    photos: [],
  },
  propertyHouseRules: {
    smoking: "",
    accomodate: "",
    pets: "",
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
  checkboxes: {
    checkbox1: false,
    checkbox2: false,
  },
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setCheckboxValue: (state, action) => {
      const { name, value } = action.payload;
      state.propertyPhotos.age[name] = value;
    },

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
      const { facilities } = action.payload;
      return {
        ...state,
        propertyFacilites: {
          ...state.propertyFacilites,
          facilities: {
            ...state.propertyFacilites.facilities,
            ...facilities,
          },
        },
      };
    },
    updatePropertyPhotos: (state, action) => {
      const { age, Extras } = action.payload;
      return {
        ...state,
        propertyPhotos: {
          ...state.propertyPhotos,
          age: {
            ...state.propertyPhotos.age,
            ...age,
          },
          Extras: {
            ...state.propertyPhotos.Extras,
            ...Extras,
          },
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
      const { smoking, accomodate, pets } = action.payload;

      return {
        ...state,
        propertyHouseRules: {
          ...state.propertyHouseRules,
          smoking,
          accomodate,
          pets,

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
  setCheckboxValue,
  updatePropertyHouseRules,
  updatePropertyFacilites,
  addHotelLayout,
  addRoomToFloor,
  updatePropertyPhotos,
} = propertySlice.actions;
export default propertySlice.reducer;
