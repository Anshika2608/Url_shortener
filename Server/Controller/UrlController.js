const urlModel=require("../Models/UrlModel")
const submitUrl = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ message: 'URL is required!' });
        }


        const newUrl = new urlModel({
            
            redirectUrl: url
        });

        await newUrl.save();
        return res.status(201).json({ message: 'Short URL successfully created' });
    } catch (err) {
        return res.status(500).json({ message: 'Error while generating the short URL', error: err.message });
    }
};
module.exports=submitUrl