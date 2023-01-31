showHome()

function showList() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
            'Content-Type': 'application/json',
        },
        success: (products) => {
            let html = ''
            products.map(item => {
                html += `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td><img src="${item.image}" style="height: 150px; width: 150px"></td>
    <td>${item.category}</td>
    <td>${item.nameCategory}</td>
    <td><button onclick="showFormEdit('${item.id}')">Edit</button></td>
    <td><button onclick="Remove('${item.id}')">Delete</button></td>
</tr>
`
            })
            $('#tbody').html(html)
        }
    })

}

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

function uploadImage(e) {
    let fbBucketName = 'images';
    let uploader = document.getElementById('uploader');
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            document.getElementById('imgDiv').innerHTML = `<img src="${downloadURL}" style="width: 150px ; height: 150px">`
            localStorage.setItem('image', downloadURL);
        });
}

function showHome() {
    $('#body').html(`
<table class="table ">
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                  <th>Price</th>
                <th>Image</th>
              <th>Category</th>
                <th>NameCategory</th>
                <th></th>
                <th></th>
                <th>Action</th>
            </tr>
           <tbody id="tbody">
    </tbody>
        </table>
    
</table>`)
    showList()
}

function Add() {
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
    console.log(product)
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/products',
        data: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json',
        },

        success: () => {
            showHome()
        }
    })
}

function showFormEdit(id) {
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
            'Content-Type': 'application/json',
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

function Edit(id) {
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
        },

        success: () => {
            showHome()
        }
    })
}

function Remove(id) {
    if (confirm('Bạn có chắc chắn muốn xóa')) {
        $.ajax({
            type: 'DELETE',
            url: `http://localhost:3000/products/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
            success: () => {
                showHome()
            }
        })
    }
}

function getCategoriesCreate() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/categories',
        headers: {
            'Content-Type': 'application/json',
        },
        success: (categories) => {
            console.log(categories)
            let Categories = ``;
            for (const category of categories) {
                Categories += `
                    <option value=${category.id}>${category.name}</option>
                `
            }
            $('#categoryAdd').html(Categories);
        }
    })
}

