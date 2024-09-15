const urls=require("../Models/UrlModel")
const submitUrl = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ message: 'URL is required!' });
        }
        if((!url.startsWith('http://')) && (!url.startsWith("https://"))){
            return res.status(400).json({message:"URL must be start with http:// or https://"})
        }
        const newUrl = new urls({
            
            redirectUrl: url
        });

        const savedUrl=await newUrl.save();
        return res.status(201).json({ message: 'Short URL successfully created', urlId:savedUrl.UrlId });
    } catch (err) {
        return res.status(500).json({ message: 'Error while generating the short URL', error: err.message });
    }
};

const redirectOriginal = async (req, res) => {
    try {
        const { urlId } = req.params;
        
        const urlEntry = await urls.findOne({ UrlId: urlId });

        if (!urlEntry) {
            return res.status(404).json({ message: 'URL not found' });
        }

        const redirectUrl = urlEntry.redirectUrl;
        if (!redirectUrl.startsWith('http://') && !redirectUrl.startsWith('https://')) {
            return res.status(400).json({ message: 'Invalid redirect URL format' });
        }
        console.log('Redirecting to:', redirectUrl);
        res.redirect(redirectUrl);
    } catch (error) {
        console.error('Error while redirecting to original URL:', error);
        return res.status(500).json({ message: 'Error while redirecting to the original URL', error: error.message });
    }
};
module.exports={submitUrl,redirectOriginal}