function showFormAdd() {
    $('#body').html(`
<div class="container-fluid">
    <nav></nav>
    <div class="row justify-content-center">
        <div class="col-12 col-md-4">
            <p class="card-text"> Add Product 
            <div class="form-inline my-2 my-lg-0">
                <table class="table">
                    <tr>
                        <td>Name</td>
                        <td><input class="form-control mr-sm-2" type="text" placeholder="Name" name="name" id="name" required ></td>
                    </tr>
                     <tr>
                        <td>Price</td>
                        <td><input class="form-control mr-sm-2" type="number" placeholder="Price" name="price" required id="price" ></td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td><input class="form-control mr-sm-2" type="file" id="fileButton" onchange="uploadImage(event)" name="image"></td>
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
                <button class="btn btn btn-primary" type="submit" onclick="Add()">Add</button>
            </di>
            </p>
        </div>
    </div>
</div>`)
    getCategoriesCreate()
}
function Add() {
    let token = localStorage.getItem('token');
    if(token){
        token = JSON.parse(token)
    let name = $('#name').val();
    let price = $('#price').val();
    let image = localStorage.getItem('image');
    let category = $('#categoryAdd').val();
    let product = {
        name: name,
        price: price,
        image: image,
        category: category
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/products',
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
