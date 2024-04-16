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
