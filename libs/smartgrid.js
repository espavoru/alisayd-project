const smartgrid = require('smart-grid');
const settings = {
    filename: "smart-grid",
    columns: 12,
    offset: "30px",
    container: {
        maxWidth: "1140px",
        fields: "15px"
    },
    breakPoints: {
        lg: {
            width: "1200px"
        },
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "768px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "380px"
        }
    },
    outputStyle: 'scss'
};

smartgrid('../scss/vendors/smart-grid', settings);

