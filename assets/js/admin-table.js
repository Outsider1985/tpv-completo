export let renderAdminTable = () => {

    let deleteTableButtons = document.querySelectorAll('.delete-table-button');
    let deleteTableModal = document.querySelector('.delete-table-modal');
    let editButtons = document.querySelectorAll('.edit-table-button');
    let exportTableToExcel = document.querySelector(".export-table-to-excel");

    document.addEventListener("renderAdminTable", (event => {
        renderAdminTable();
    }), { once: true });

    deleteTableButtons.forEach(deleteTableButton => {

        deleteTableButton.addEventListener("click", (event) => {

            deleteTableModal.dataset.id = deleteTableButton.dataset.id;

        });
    });

    if (deleteTableModal) {

        deleteTableModal.addEventListener("click", (event) => {

            let sendPostRequest = async () => {

                let data = {};
                data["route"] = deleteTableModal.dataset.route;
                data["id"] = deleteTableModal.dataset.id;

                let response = await fetch('web.php', {
                    headers: {
                        'Accept': 'application/json',
                    },
                    method: 'DELETE',
                    body: JSON.stringify(data)
                })
                    .then(response => {

                        if (!response.ok) throw response;

                        return response.json();
                    })
                    .then(json => {

                        document.querySelector("[data-element='" + json.id + "']").remove();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            };

            sendPostRequest();

        });
    }

    editButtons.forEach(editButton => {

        editButton.addEventListener("click", (event) => {

            let sendPostRequest = async () => {

                let data = {};
                data["route"] = editButton.dataset.route;
                data["id"] = editButton.dataset.id;

                let response = await fetch('web.php', {
                    headers: {
                        'Accept': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify(data)
                })
                    .then(response => {

                        if (!response.ok) throw response;

                        return response.json();
                    })
                    .then(json => {

                        Object.entries(json.element).forEach(([key, value]) => {
                        
                            if(document.getElementsByName(key).length > 0 && document.getElementsByName(key)[0].type != "file") {
                                document.getElementsByName(key)[0].value = value;
                            }
    
                            else if (document.getElementById(key)){
                                document.getElementById(key).innerHTML = value;
                            }
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            };

            sendPostRequest();

        });
    });

    if(exportTableToExcel) {

        exportTableToExcel.addEventListener("click", (event) => {
                
            let sendPostRequest = async () => {
                
                let data = {};
                data["route"] = exportTableToExcel.dataset.route;

                let response = await fetch('web.php', {
                    headers: {
                        'Accept': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify(data)
                })
                .then(response => {
                
                    if (!response.ok) throw response;

                    return response.json();
                })
                .then(json => {

                   
                })
                .catch ( error =>  {
                    console.log(error);
                });
            };

            sendPostRequest();
        }); 
    }
};