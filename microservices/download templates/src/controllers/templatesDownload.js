

const templatesDownload = (req, res) => {
        const templateType = req.params.templateType;
        const filePath = './src/templatesStorage/' + templateType + 'Template.xlsx';
        //const filePath = './src/templatesStorage/basicLineTemplate.xlsx'

         res.download(filePath, (err) => {
            if (err) {
                // Handle error, e.g., file not found
                console.log(err);
                res.status(404).send('File not found');
            }
        })

}

module.exports = templatesDownload;