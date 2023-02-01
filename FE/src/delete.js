function Remove(id) {
    if (confirm('Bạn có chắc chắn muốn xóa')) {
        $.ajax({
            type: 'DELETE',
            url: `http://localhost:3000/products/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            success: () => {
                showHome()
            }
        })
    }
}
