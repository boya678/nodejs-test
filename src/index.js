const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.get('/ejemplo', (req, res) => {    
    res.json(
        {
            "environment": process.env.MESSAGE || "HOLA"
        }
    );
})

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});