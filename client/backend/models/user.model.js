import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  companyId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  country: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  isEnterprise: {
    type: Boolean,
    default:false
  },
  isPlanMember: {
    type: Boolean,
    default:false
  },
  fromGoogle: {
    type: Boolean,
    default:false
  },
},{
  timestamps:true
});

export default mongoose.model("User", userSchema)