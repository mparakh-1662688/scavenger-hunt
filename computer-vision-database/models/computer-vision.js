let mongoose = require( 'mongoose' );

let computerVisionSchema = new mongoose.Schema({
    tags: [String],
    caption: String,
    confidence: Number
  });

computerVisionSchema.methods.details = function () {
    if (this.confidence > .55) {
        return "This image represents :- " + this.caption
    }
    return "This image could not be recognized";
}

let computerVision = mongoose.model('compute', computerVisionSchema);

module.exports = computerVision;
