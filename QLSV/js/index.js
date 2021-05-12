$.ajax({
    type: "GET",
    url: "/students",
    dataType: "json",
    error: () => alert("Không thể tải dữ liệu"),
    success: (json) => {
        let tbody = $("tbody")
        $(json).each(index, student) => {
            let tr = $("<tr/>", {
                html: `
                <td>${student.fullname}</td>
                <td>${student.email}</td>
                <td>${student.birthday}</td>
                <td>
                  <a href="#" class="text-primary mx-2"
                    >Sửa <i class="bi bi-pencil-square"></i
                  ></a>
    
                  <a href="#" class="text-danger"
                    ><i class="bi bi-x-circle-fill"></i> Xoá</a
                  > 
                </td>
                `
            }
            )
        }
    }
})