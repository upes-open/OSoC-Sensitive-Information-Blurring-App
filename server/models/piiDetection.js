const mongoose = require('mongoose');


const piiDetectionSchema = new mongoose.Schema({
    detection_id: { type: Number, required: true, unique: true },
    user_id: { type: Number, required: true },
    document_name: { type: String, required: true },
    detection_results: { type: mongoose.Schema.Types.Mixed, required: true },
    detection_timestamp: { type: Date, default: Date.now },
  });


  const PIIDetection = mongoose.model('PIIDetection', piiDetectionSchema);
  module.exports = PIIDetection;