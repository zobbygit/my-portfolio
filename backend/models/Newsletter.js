import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ],
    unique: true,
    lowercase: true
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
});

// Index for faster queries
newsletterSchema.index({ email: 1 });
newsletterSchema.index({ subscribedAt: -1 });

export default mongoose.model('Newsletter', newsletterSchema);