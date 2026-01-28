import Newsletter from '../models/Newsletter.js';

// Subscribe to newsletter
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Create new subscriber
    const subscriber = new Newsletter({ email });
    await subscriber.save();

    res.status(201).json({ 
      message: 'Successfully subscribed to newsletter',
      data: subscriber 
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }
    res.status(500).json({ message: error.message });
  }
};

// Get all subscribers (admin only)
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ subscribedAt: -1 });
    res.status(200).json({ 
      count: subscribers.length,
      data: subscribers 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Unsubscribe
export const unsubscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    const subscriber = await Newsletter.findOneAndUpdate(
      { email },
      { status: 'inactive' },
      { new: true }
    );

    if (!subscriber) {
      return res.status(404).json({ message: 'Email not found' });
    }

    res.status(200).json({ 
      message: 'Successfully unsubscribed',
      data: subscriber 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};