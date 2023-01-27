let tableBody = document.getElementById("product-data");

let prductName = document.getElementById("prductName");
let productPrice = document.getElementById("productPrice");
let productQuantity = document.getElementById("productQuantity");

async function getData() {
    try {
        let res = await fetch("http://127.0.0.1:3000/product/");
        let data = await res.json();
        data.forEach((item) => {
            tableBody.innerHTML += addNewTr(item);
        });
    } catch (err) {
        console.log(err);
    }
}

function addNewTr(item) {
    return `
                    <tr>
                        <td>${item._id}</td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.quantity}</td>
                        <td>
                            
                                
                            ${editTr(item)}
                            <form action="http://127.0.0.1:3000/product/delete/${
                                item._id
                            }?_method=DELETE" method="POST" class="d-inline">
                                <button type="submit" id="delete-${
                                    item._id
                                }" class="bi bi-trash text-danger fw-bold fs-5" style="border: none; background: none;"></button>
                            </form>
                        </td>
                    </tr>
                `;
}
function editTr(item) {
    return `
                    <i type="button" class="bi bi-pencil-square text-primary fw-bold fs-5" data-bs-toggle="modal" data-bs-target="#edit-${item._id}">
                    </i>

                    <!-- Modal -->
                    <div class="modal fade" id="edit-${item._id}" tabindex="-1" aria-labelledby="edit-${item._id}" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="edit-${item._id}">Edit Product</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <form action="/product/edit/${item._id}?_method=PATCH" method="POST">
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label for="name" class="form-label">Name</label>
                                            <input type="text" class="form-control" id="name" name="name" value="${item.name}" />
                                        </div>

                                        <div class="mb-3">
                                            <label for="price" class="form-label">Price</label>
                                            <input type="number" class="form-control" id="price" name="price" value="${item.price}"/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="quantity" class="form-label">Quantity</label>
                                            <input type="number" class="form-control" id="quantity" name="quantity" value="${item.quantity}"/>
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                `;
}
getData();
