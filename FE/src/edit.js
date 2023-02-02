function showFormEdit(id) {
   let token = localStorage.getItem('token');
    if(token){
        token = JSON.parse(token)
        $.ajax({
            type: 'GET',
            url: `http://localhost:3000/products/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (products) => {
                $('#body').html(`
<div class="container-fluid">
    <nav></nav>
    <div class="row justify-content-center">
        <div class="col-12 col-md-4">
            <p class="card-text"> Edit Product 
            <div class="form-inline my-2 my-lg-0">
                <table class="table">
                    <tr>
                        <td>Name</td>
                        <td><input class="form-control mr-sm-2" type="text" placeholder="Name" name="name" required  value="${products.name}"></td>
                    </tr>
                     <tr>
                        <td>Price</td>
                        <td><input class="form-control mr-sm-2" type="number" placeholder="Price" name="price" required id="price" value="${products.price}"></td>
                    </tr>
                    <tr>
                    <img src="${products.image}" alt="${products.image}" width="150" height="150">
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td><input class="form-control mr-sm-2" type="file" id="fileButton" onchange="uploadImage(event)" name="image" required valueImage></td>
                    </tr>
                    <div id="imgDiv"></div>
                    <tr>
                        <td>Type</td>
                        <td>
                            <select class="form-control mr-sm-2" name="type" required id="categoryAdd">
                                <option selected>Category</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <button class="btn btn btn-primary" type="submit" onclick="Edit('${products.id}')">Edit</button>
            </div>
            </p>
        </div>
    </div>
</div>`
                )
            }
        })
        getCategoriesCreate()
    }

}

function Edit(id) {
   let token = localStorage.getItem('token');
    if(token){
        token = JSON.parse(token)
    let name = $('#name').val();
    let price = $('#price').val();
    let image = localStorage.getItem('image');
    let category = $('#category').val();
    let product = {
        name: name,
        price: price,
        image: image,
        category: category
    }

    $.ajax({
        type: 'PUT',
        url: `http://localhost:3000/products/${id}`,
        data: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token.token
        },
        success: () => {
            showHome()
        }
    })
}}
