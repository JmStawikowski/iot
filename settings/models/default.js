var modelDefault = {
    logo: "images/Schneider_Electric.png",
    icon: "images/Dell-OptiPlex-3070.png",
    name: "IIOT MODULE",
    menu: [
        {
            name: "Home",
            sub: [
                {
                    name: "My devices",
                    inner: [
                        {
                            name: "Home",
                            url: "/?model=/settings/models/devices.json"
                        }
                    ]
                }
            ]
        },
        {
            name: "Apps",
            sub: [
                {
                    name: "My apps",
                    inner: [
                        {
                            name: "Manage-9001",
                            port: "9001"
                        },
                        {
                            name: "Manage-9003",
                            port: "9003"
                        },
                        {
                            name: "Manage-9009",
                            port: "9009"
                        }                        
                    ]
                }
            ]
        }
    ]
};
