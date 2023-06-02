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
   cancellationPolicy: "",
   accidentalBookingsGuard : "",
   checktimes: {
    guestsArrival: {
      from: "",
      to: "",
    },
    guestsDeparture: {
      from: "",
      to: "",
    },
  },
  isSmokingAllowed: "",
  isPetsAllowed: "",
  isEventsAllowed: "",
  canInfantsBeHosted: "",
  minNightStay: "",
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
    updatePropertyHouseRules: (state, action) => {
      return {
        ...state,
        propertyHouseRules: {
          ...state.propertyHouseRules,
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
      const { age, Extras, extraBed, extraBedCount, AddExtras, selectedFileUrl } = action.payload;
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
          extraBed: extraBed !== undefined ? extraBed : state.propertyPhotos.extraBed,
          extraBedCount: extraBedCount !== undefined ? extraBedCount : state.propertyPhotos.extraBedCount,
          AddExtras: AddExtras !== undefined ? AddExtras : state.propertyPhotos.AddExtras,
          photos: selectedFileUrl !== undefined ? [...state.propertyPhotos.photos, selectedFileUrl] : state.propertyPhotos.photos,
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
