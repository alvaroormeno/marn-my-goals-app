// NOTE: Here we define our schema which is the fields for this particular resource (Goals Resource). For each goal we will only have text field aside from a time stamp, the id and user. The user will be a relationship with the user resource.
////////////////////////////////////////////////////////////////////////

const mongoose = require('mongoose')

// Create schema
const goalSchema = mongoose.Schema(
  // Object with schema fields
  {
    text: {
      // declare type of field
      type: String,
      // declare it is a required field and add error message
      required: [true, 'Please add a text value']
    }
  },
  {
    timestamps: true,
  }
)

// Export the schema with mongoose.model. First param is the name (Goal), second is the schema we are exporting with the name of Goal.
module.exports = mongoose.model('Goal', goalSchema)