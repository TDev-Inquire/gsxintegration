

var storedLegal = chrome.storage.local.get('cxStorage', function (items) {
  console.log(items); 

  document.querySelector("#rep_cust__ph").value = items.cxStorage.cx_number;
  document.querySelector("#rep_cust__fn").value = items.cxStorage.cx_fname;
  document.querySelector("#rep_cust__ln").value = items.cxStorage.cx_lname;
  document.querySelector("#rep_cust__em").value = items.cxStorage.cx_email;
  document.querySelector("#rep_cust__notes").value = items.cxStorage.cx_note;
  document.querySelector("#rep_cust__po").value = items.cxStorage.cx_pchorder;
  document.querySelector("#rep_cust__ref").value = items.cxStorage.cx_reference;
  document.querySelector("#rep_cust__fn").value = items.cxStorage.cx_number;
  document.querySelector("#rep_cust__fn").value = items.cxStorage.cx_fname;
  document.querySelector("#rep_cust__ln").value = items.cxStorage.cx_lname;
  document.querySelector("#rep_cust__em").value = items.cxStorage.cx_email;
  document.querySelector("#rep_cust__notes").value = items.cxStorage.cx_note;
  document.querySelector("#rep_cust__po").value = items.cxStorage.cx_pchorder;
  document.querySelector("#rep_cust__ref").value = items.cxStorage.cx_reference;
  document.querySelector("#rep_cust__class").value = "SINGLE";
  document.querySelector("#rep_cust__st").value = "NC";

  ///cx_number
  document.querySelector("#repair-header-card > div.repair-header__body > div:nth-child(1) > div.first-row__right-section > div.repair-customer.repair-customer--editable > div.repair-customer__form.el-row > div.repair-customer__left.el-col.el-col-24 > form:nth-child(1) > div > div.el-row > div > div > div.el-col.el-col-15 > div").className = "el-form-item is-success is-required is-no-asterisk el-form-item--mini";
  ///first name
  document.querySelector("#repair-header-card > div.repair-header__body > div:nth-child(1) > div.first-row__right-section > div.repair-customer.repair-customer--editable > div.repair-customer__form.el-row > div.repair-customer__left.el-col.el-col-24 > form:nth-child(1) > div > div:nth-child(1)").className = "el-form-item is-success is-required is-no-asterisk el-form-item--mini";
  ///last name
  document.querySelector("#repair-header-card > div.repair-header__body > div:nth-child(1) > div.first-row__right-section > div.repair-customer.repair-customer--editable > div.repair-customer__form.el-row > div.repair-customer__left.el-col.el-col-24 > form:nth-child(1) > div > div:nth-child(2)").className = "el-form-item is-success is-required is-no-asterisk el-form-item--mini";
  ///email
  document.querySelector("#repair-header-card > div.repair-header__body > div:nth-child(1) > div.first-row__right-section > div.repair-customer.repair-customer--editable > div.repair-customer__form.el-row > div.repair-customer__left.el-col.el-col-24 > form:nth-child(1) > div > div.el-form-item.is-error.is-required.is-no-asterisk.el-form-item--mini").className = "el-form-item is-success is-required is-no-asterisk el-form-item--mini";
  ///Note
  document.querySelector("#repair-header-card > div.repair-header__body > div:nth-child(1) > div.first-row__right-section > div.repair-customer.repair-customer--editable > div.repair-customer__form.el-row > div.repair-customer__right.el-col.el-col-24 > div > form.el-form.repair-customer__intake_wrapper.el-form--label-top > div").className = "el-form-item is-success is-required is-no-asterisk el-form-item--mini";
  ///Purchase Order
  document.querySelector("#repair-header-card > div.repair-header__body > div:nth-child(1) > div.first-row__right-section > div.repair-customer.repair-customer--editable > div.repair-customer__form.el-row > div.repair-customer__right.el-col.el-col-24 > form > div > div:nth-child(1)").className = "el-form-item is-success is-required is-no-asterisk el-form-item--mini";
  ///reference number not needed (not required)
  ///classification
  document.querySelector("#repair-header-card > div.repair-header__body > div:nth-child(1) > div.first-row__right-section > div.repair-customer.repair-customer--editable > div.repair-customer__form.el-row > div.repair-customer__right.el-col.el-col-24 > form > div > div.el-form-item.repair_class.is-error.is-required.is-no-asterisk.el-form-item--mini").className = "el-form-item repair_class is-success is-required is-no-asterisk el-form-item--mini";
  ///state
  document.querySelector("#customer\\.address\\[0\\]\\.stateCode").className = "el-form-item is-success is-required is-no-asterisk el-form-item--mini";



console.log("PCRT info pasted into GSX");

});