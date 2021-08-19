const mongoose = require('mongoose');
const fileContentSchema = new mongoose.Schema({
    metadata: String,
    content: String,
    });
    
fileContentSchema.index({ 'metedata': 'text', 'content': 'text' });

const fileContentModel = mongoose.model('fileContent', fileContentSchema);
module.exports = fileContentModel;