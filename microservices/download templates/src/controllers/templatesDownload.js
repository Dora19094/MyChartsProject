

const templatesDownload = (req, res) => {
        const templateType = req.params.templateType;
        const isExample = req.params.isExample;
        let filePath = "";
        if (isExample === "false")
            filePath = './src/templatesStorage/templates_original/' + templateType + 'Template.xlsx';
        else
            filePath = './src/templatesStorage/templates_examples/' + templateType + 'Example.xlsx';
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