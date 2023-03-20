import { createSlice } from '@reduxjs/toolkit';

const propertySlice = createSlice({
  name: 'addProperty',
  initialState: {
    propertyType: '',
    propertyName: '',
    propertyContactPerson: '',
    contactNumber: '',
    streetAddress: '',
    addressLine2: '',
    country: '',
    companyOwned: false,
    channelManager: false,
    apartmentType: '',
    customName: '',
    bedrooms: 0,
    livingRooms: 0,
    bathrooms: 0,
    bedroomBeds: [],
    maxGuests: 0,
    enSuite: false,
    basePricePerNight: 0,
    parking: '',
    parkingType: '',
    parkingSpace: '',
    reservationRequired: false,
    parkingPricePerDay: 0,
    breakfast: '',
    breakfastType: '',
    breakfastPrice: 0,
    languages: [],
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
    extraBeds: false,
    extraBedsCount: 0,
    extraBedsPeople: [],
    extraAmenities: [],
    photos: [],
    freeCancellation: '',
    protectAgainstAccidentalBookings: false,
    checkInFrom: '',
    checkInTo: '',
    checkOutFrom: '',
    checkOutTo: '',
    smokingAllowed: false,
    childrenAllowed: false,
    petsAllowed: false,
    minimumStay: '',
    acceptCreditDebitCards: false,
    paymentMethods: [],
    bindPayment: false,
    acceptTermsAndConditions: false
  },
  reducers: {
    setPropertyType: (state, action) => {
      state.propertyType = action.payload;
    },
    setPropertyName: (state, action) => {
      state.propertyName = action.payload;
    },
    setPropertyContactPerson: (state, action) => {
      state.propertyContactPerson = action.payload;
    },
    setContactNumber: (state, action) => {
      state.contactNumber = action.payload;
    },
    setStreetAddress: (state, action) => {
      state.streetAddress = action.payload;
    },
    setAddressLine2: (state, action) => {
      state.addressLine2 = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setCompanyOwned: (state, action) => {
      state.companyOwned = action.payload;
    },
    setChannelManager: (state, action) => {
      state.channelManager = action.payload;
    },
    setApartmentType: (state, action) => {
      state.apartmentType = action.payload;
    },
    setCustomName: (state, action) => {
      state.customName = action.payload;
    },
    setBedrooms: (state, action) => {
      state.bedrooms = action.payload;
    },
    setLivingRooms: (state, action) => {
      state.livingRooms = action.payload;
    },
    setBathrooms: (state, action) => {
      state.bathrooms = action.payload;
    },
    setBedroomBeds: (state, action) => {
      state.bedroomBeds = action.payload;
    },
    setMaxGuests: (state, action) => {
      state.maxGuests = action.payload;
    },
    setEnSuite: (state, action) => {
      state.enSuite = action.payload;
    },
    setBasePricePerNight: (state, action) => {
      state.basePricePerNight = action.payload;
    },
    setParking: (state, action) => {
      state.parking = action.payload;
    },
    setParkingType: (state, action) => {
      state.parkingType = action.payload;
    },
    setParkingSpace: (state, action) => {
      state.parkingSpace = action.payload;
    },
    setReservationRequired: (state, action) => {
      state.reservationRequired = action.payload;
    },
    setParkingPricePerDay: (state, action) => {
      state.parkingPricePerDay = action.payload;
    },
    setBreakfast: (state, action) => {
      state.breakfast = action.payload;
    },
    setBreakfastType: (state, action) => {
      state.breakfastType = action.payload;
    },
    setBreakfastPrice: (state, action) => {
      state.breakfastPrice = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    setFreeWifi: (state, action) => {
      state.freeWifi = action.payload;
    },
    setBar: (state, action) => {
      state.bar = action.payload;
    },
    setSauna: (state, action) => {
      state.sauna = action.payload;
    },
    setGarden: (state, action) => {
      state.garden = action.payload;
    },
    setTerrace: (state, action) => {
      state.terrace = action.payload;
    },
    setNoSmokingRooms: (state, action) => {
      state.noSmokingRooms = action.payload;
    },
    setFamilyRooms: (state, action) => {
      state.familyRooms = action.payload;
    },
    setHotTub: (state, action) => {
      state.hotTub = action.payload;
    },
    setAirConditioning: (state, action) => {
      state.airConditioning = action.payload;
    },
    setSwimmingPool: (state, action) => {
      state.swimmingPool = action.payload;
    },
    setExtraBeds: (state, action) => {
      state.extraBeds = action.payload;
    },
    setExtraBedsCount: (state, action) => {
      state.extraBedsCount = action.payload;
    },
    setExtraBedsPeople: (state, action) => {
      state.extraBedsPeople = action.payload;
    },
    setExtraAmenities: (state, action) => {
      state.extraAmenities = action.payload;
    },
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    setFreeCancellation: (state, action) => {
      state.freeCancellation = action.payload;
    },
    setProtectAgainstAccidentalBookings: (state, action) => {
      state.protectAgainstAccidentalBookings = action.payload;
    },
    setCheckInFrom: (state, action) => {
      state.checkInFrom = action.payload;
    },
    setCheckInTo: (state, action) => {
      state.checkInTo = action.payload;
    },
    setCheckOutFrom: (state, action) => {
      state.checkOutFrom = action.payload;
    },
    setCheckOutTo: (state, action) => {
      state.checkOutTo = action.payload;
    },
    setSmokingAllowed: (state, action) => {
      state.smokingAllowed = action.payload;
    },
    setChildrenAllowed: (state, action) => {
      state.childrenAllowed = action.payload;
    },
    setPetsAllowed: (state, action) => {
      state.petsAllowed = action.payload;
    },
    setMinimumStay: (state, action) => {
      state.minimumStay = action.payload;
    },
    setPaymentMethods: (state, action) => {
      state.paymentMethods = action.payload;
    },
    setBindPayment: (state, action) => {
      state.bindPayment = action.payload;
    },
    setPaymentMethodType: (state, action) => {
      state.paymentMethodType = action.payload;
    },
    setAcceptTerms: (state, action) => {
      state.acceptTerms = action.payload;
    }
  }
});

// export the property slice reducer
export const reducer = propertySlice.reducer;

// exporation of the actions
export const {
  setPropertyType,
  setPropertyName,
  setPropertyContactPerson,
  setContactNumber,
  setStreetAddress,
  setAddressLine2,
  setCountry,
  setCompanyOwned,
  setChannelManager,
  setApartmentType,
  setCustomName,
  setBedrooms,
  setLivingRooms,
  setBathrooms,
  setBedroomBeds,
  setMaxGuests,
  setEnSuite,
  setBasePricePerNight,
  setParking,
  setParkingType,
  setParkingSpace,
  setReservationRequired,
  setParkingPricePerDay,
  setBreakfast,
  setBreakfastType,
  setBreakfastPrice,
  setLanguages,
  setFreeWifi,
  setBar,
  setSauna,
  setGarden,
  setTerrace,
  setNoSmokingRooms,
  setFamilyRooms,
  setHotTub,
  setAirConditioning,
  setSwimmingPool,
  setExtraBeds,
  setExtraBedsCount,
  setExtraBedsPeople,
  setExtraAmenities,
  setPhotos,
  setFreeCancellation,
  setProtectAgainstAccidentalBookings,
  setCheckInFrom,
  setCheckInTo,
  setCheckOutFrom,
  setCheckOutTo,
  setSmokingAllowed,
  setChildrenAllowed,
  setPetsAllowed,
  setMinimumStay,
  setPaymentMethods,
  setBindPayment,
  setPaymentMethodType,
  setAcceptTerms
} = propertySlice.actions;


