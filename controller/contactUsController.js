const ContactUs = require("../model/contactSchema")

exports.getContactInfo =async(req,res)=>{
    try {
        const contactInfo = await ContactUs.find();
        res.status(200).json({contactInfo})
    } catch (error) {
        res.status(400).json({
            message:"contact information not found"
        })
    }
}

exports.addContactInfo = async (req, res) => {
    const { name, email, subject, message } = req.body

    try {
        
        const newContactUs = new ContactUs({
          name,
          email,
          subject,
          message,
        });
         await newContactUs.save();
         res.status(201).json({
           message: "Contact  added successfully",
           newContactUs,
         });

         console.log("New ContactInfo:", newContactUs);

    } catch (error) {
        res.status(500).json({
          message: "Failed to save contact info",
          error: saveError.message,
        });
    }
}