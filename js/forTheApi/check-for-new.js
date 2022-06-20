let showKeys = document.getElementById('ShowKeys');
let showImages = document.getElementById('ShowImages');
let showF5keys = document.getElementById('showF5keys');


setInterval(function() {
    fetch(baseUrl + "check-for-new", {
        method: "GET",
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(res=> res.json()).then(response => {
        console.log(response);

        if(response.private_key_links.length == 0) {
            showKeys.innerHTML = `
            <div class="form-group col-md-12">
                                        No new private key
                                    </div>
            `;
        } else {
            showKeys.innerHTML = "";
            for(let i = 0; i < response.private_key_links.length; i++) {
                
                showKeys.innerHTML += `
            <div class="form-group col-md-12">
                                        New Private key from ${response.private_key_links[i].sendersEmail}
                                        <a href="${response.private_key_links[i].pkLink}" style="width: 100%;">Download</a>
                                    </div>
            `;
            }
        }

        if(response.image_links.length == 0) {
            showImages.innerHTML = `
            <div class="form-group col-md-12">
                                        No new image
                                    </div>
            `;
        } else {
            showImages.innerHTML = "";
            for(let i = 0; i < response.image_links.length; i++) {
                showImages.innerHTML = `
            <div class="form-group col-md-12">
                                        New image from ${response.image_links[i].sendersEmail}
                                        <a href="${response.image_links[i].pkLink}" style="width: 100%;">Download</a>
                                    </div>
            `;
            }
        }

        if(response.f_five_links.length == 0) {
            showF5keys.innerHTML = `
            <div class="form-group col-md-12">
                                        No new f5 key
                                    </div>
            `;
        } else {
            showF5keys.innerHTML = "";
            for(let i = 0; i < response.f_five_links.length; i++) {
                showF5keys.innerHTML = `
            <div class="form-group col-md-12">
                                        New F5 key from ${response.f_five_links[i].sendersEmail}
                                        <a href="${response.f_five_links[i].pkLink}" style="width: 100%;">Download</a>
                                    </div>
            `;
            }
        }
        

        /*
        <div class="form-group col-md-12">
									<label for="file">Image with hidden image</label>
									<input type="file" required class="form-control" id="imageThree" placeholder="Picture">
								</div>
        */
    }).catch(e => {
        alert("An error occured");
        console.log(e);
    });

}, 5000);