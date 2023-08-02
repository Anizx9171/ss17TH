let staff = {
    id: 1,
    name: "Ronaldo",
    age: 30,
    salary: 1000,
}
let staff2 = {
    id: 2,
    name: "Long",
    age: 22,
    salary: 10,
}
let company = [];
company.push(staff)
company.push(staff2)
console.log(company)
let inputUpdate = Number(prompt("Nhập vào id nhân viên muốn cập nhật"));
let updateSalary = Number(prompt("Nhập mức lương muốn thay đổi"));
let inputDelete = Number(prompt("Nhập vào id nhân viên muốn xóa"));
let findIndex = company.findIndex((e) => inputDelete == e.id);
company.splice(findIndex, 1);
console.log(company);
for (const key in staff) {
    console.log(`${key}: ${staff[key]}`);
}