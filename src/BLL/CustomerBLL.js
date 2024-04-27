export var cusArr = [];
export function addCustomerBLL(
  idInput,
  nameInput,
  addressInput,
  mobileNoInput
) {
  var cus = {
    id: idInput,
    name: nameInput,
    address: addressInput,
    mobileNo: mobileNoInput,
  };

  cusArr.push(cus);
}

export function searchCustomerBLL(id) {
  var cus = cusArr.find((e) => e.id == id);
  return cus;

  // the below code can be written in a single line as written in above
  // for (var cus of cusArr) {
  //   if (cus.id == id) {
  //     return cus;
  //   }
  // }
}

export function deleteCustomerBLL(id) {
  for (let i = 0; i < cusArr.length; i++) {
    if (cusArr[i].id == id) {
      cusArr.splice(i, 1);
      return "Customer Deleted Successfully";
    }
  }
  return "ID not found";
}

export function modifyCustomerBLL(id, name, address, mobileNo) {
  var cus = cusArr.find(e => e.id == id);
  cus.name = name;
  cus.address = address;
  cus.mobileNo = mobileNo;
}
// export function delteCustomerBLL(idDelete, nameDelete, addressDelete, mobileNoDelete){
//   var cus = {id: idDelete, name: nameDelete, addressDelete, mobileNo: mobileNoDelete};
//   cus
// }
