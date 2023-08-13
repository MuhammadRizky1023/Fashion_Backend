exports.upload = async (req, res, next) =>{
    try {
        if (!req.files) { 
            res.status(500).send({
                status: 'Failed',
                code: 500,
                message: 'Failed to upload files'
            })
        } else {
            const image = req.files.image
            console.log(image.name)
            console.log(__dirname + '/public/')
            image.mv(process.cwd() + '/public/' + image.name, (response, err) => {
                if (err) {
                    res.send({ err })
                }
                res.send({
                    data: `http://localhost:8000/${image.name}`
                })
            })
        }
    } catch (error) {
        return next(error)
    }
}