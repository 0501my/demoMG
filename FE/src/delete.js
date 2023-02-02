function Remove(id) {
    if (confirm('Bạn có chắc chắn muốn xóa')) {
        let token = localStorage.getItem('token');
        if(token){
            token = JSON.parse(token)
        $.ajax({
            type: 'DELETE',
            url: `http://localhost:3000/products/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: () => {
                showHome()
            }
        })
    }
}}
