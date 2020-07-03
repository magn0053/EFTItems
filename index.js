//Test
const   fetch = require("fetch")
        ,express = require("express")
        ,app = express()
        ,port = 8008

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`EFTItems running at http://localhost:${port}`));