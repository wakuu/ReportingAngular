const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Index Route
app.get('/', function (req, resp) {
    resp.send('Invalid Endpoint');
});

// Reporting Route
app.get('/api/reporting', (req, resp) => {
    const data = [
        {
            date: '2017-01',
            revenu: {
                BIL: 13585.00,
                taliko: null,
                MSF: null,
                EN: null
            },
            charge: {
                facture: {
                    CHR: -1600.00,
                    PLEXCOFO: -6000.00,
                    BAC: null,
                    ICV: null,
                    AHEAD: null
                },
                frais: -237.41
            }
        },
        {
            date: '2017-02',
            revenu: {
                BIL: null,
                taliko: 2170.92,
                MSF: 3660.00,
                EN: null
            },
            charge: {
                facture: {
                    CHR: -1600.00,
                    PLEXCOFO: -6000.00,
                    BAC: -3960.00,
                    ICV: null,
                    AHEAD: null
                },
                frais: -1391.02
            }
        },
        {
            date: '2017-03',
            revenu: {
                BIL: null,
                taliko: 2800.00,
                MSF: null,
                EN: null
            },
            charge: {
                facture: {
                    CHR: -3300.00,
                    PLEXCOFO: -7200.00,
                    BAC: -6435.00,
                    ICV: null,
                    AHEAD: null
                },
                frais: -2790.82
            }
        },
        {
            date: '2017-04',
            revenu: {
                BIL: 12850.00,
                taliko: 22270.00,
                MSF: null,
                EN: 2400.00
            },
            charge: {
                facture: {
                    CHR: -5600.00,
                    PLEXCOFO: -8200.00,
                    BAC: null,
                    ICV: null,
                    AHEAD: null
                },
                frais: -3674.52
            }
        },
        {
            date: '2017-05',
            revenu: {
                BIL: 18050.00,
                taliko: 21930.00,
                MSF: null,
                EN: null
            },
            charge: {
                facture: {
                    CHR: -5300.00,
                    PLEXCOFO: -8200.00,
                    BAC: -8910.00,
                    ICV: null,
                    AHEAD: null
                },
                frais: -4773.00
            }
        },
        {
            date: '2017-06',
            revenu: {
                BIL: 13585.00,
                taliko: null,
                MSF: null,
                EN: null
            },
            charge: {
                facture: {
                    CHR: -1600.00,
                    PLEXCOFO: -6000.00,
                    BAC: null,
                    ICV: null,
                    AHEAD: null
                },
                frais: -237.41
            }
        },
        {
            date: '2017-07',
            revenu: {
                BIL: null,
                taliko: 2170.92,
                MSF: 3660.00,
                EN: null
            },
            charge: {
                facture: {
                    CHR: -1600.00,
                    PLEXCOFO: -6000.00,
                    BAC: -3960.00,
                    ICV: null,
                    AHEAD: null
                },
                frais: -1391.02
            }
        },
        {
            date: '2017-08',
            revenu: {
                BIL: null,
                taliko: 2800.00,
                MSF: null,
                EN: null
            },
            charge: {
                facture: {
                    CHR: -3300.00,
                    PLEXCOFO: -7200.00,
                    BAC: -6435.00,
                    ICV: null,
                    AHEAD: null
                },
                frais: -2790.82
            }
        },
        {
            date: '2017-09',
            revenu: {
                BIL: 12850.00,
                taliko: 22270.00,
                MSF: null,
                EN: 2400.00
            },
            charge: {
                facture: {
                    CHR: -5600.00,
                    PLEXCOFO: -8200.00,
                    BAC: null,
                    ICV: null,
                    AHEAD: null
                },
                frais: -3674.52
            }
        },
        {
            date: '2017-10',
            revenu: {
                BIL: 18050.00,
                taliko: 21930.00,
                MSF: null,
                EN: null
            },
            charge: {
                facture: {
                    CHR: -5300.00,
                    PLEXCOFO: -8200.00,
                    BAC: -8910.00,
                    ICV: null,
                    AHEAD: null
                },
                frais: -4773.00
            }
        },
    ];

    return resp.status(200).send(data);
});

// Start Server
app.listen(port, function() {
    console.log('Server started on port ' + port);
});