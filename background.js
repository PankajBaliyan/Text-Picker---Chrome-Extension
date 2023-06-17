// IT RETURN ALL DATA

// chrome.runtime.onInstalled.addListener(function () {
//   chrome.contextMenus.create({
//     id: "copyText",
//     title: "Copy and Log Selected Text",
//     contexts: ["selection"],
//   });
// });

// chrome.contextMenus.onClicked.addListener(function (info) {
//   if (info.menuItemId === "copyText") {
//     let selectedText = info.selectionText;
//     console.log("Selected text:", selectedText);
//   }
// });

// IT RETURN EMAIL
// chrome.runtime.onInstalled.addListener(function () {
//   chrome.contextMenus.create({
//     id: "copyText",
//     title: "Copy and Log Selected Text",
//     contexts: ["selection"],
//   });
// });

// chrome.contextMenus.onClicked.addListener(function (info) {
//   if (info.menuItemId === "copyText") {
//     let selectedText = info.selectionText;
//     let emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
//     let emails = selectedText.match(emailRegex);

//     if (emails && emails.length > 0) {
//       console.log("Emails found:");
//       for (let i = 0; i < emails.length; i++) {
//         console.log(emails[i]);
//       }
//     } else {
//       console.log("No emails found in the selected text.");
//     }
//   }
// });

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "copyText",
    title: "Copy and Log Selected Text",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId === "copyText") {
    let selectedText = info.selectionText;
    let medicalInsurance = extractMedicalInsurance(selectedText);
    let countryRegion = extractCountryRegion(selectedText);
    let revenue = extractRevenue(selectedText);
    let companySales = extractCompanySales(selectedText);
    let entityType = extractEntityType(selectedText);
    let sicCode = extractSicCode(selectedText);
    let sicDescription = extractSicDescription(selectedText);
    let zipCode = extractZipCode(selectedText);
    let state = extractState(selectedText);
    let city = extractCity(selectedText);
    let address = extractAddress(selectedText);
    let websiteURL = extractWebsiteURL(selectedText);
    let companyName = extractCompanyName(selectedText);
    let emailAddress = extractEmailAddress(selectedText);
    let alternateNumber = extractAlternateNumber(selectedText);
    let contactNumber = extractContactNumber(selectedText);
    let lastName = extractLastName(selectedText);
    let firstName = extractFirstName(selectedText);
    let form = extractForm(selectedText);

    if (form) {
      console.log("Sir Name:", form);
    } else {
      console.log("No Sir Name found in the selected text.");
    }

    if (firstName) {
      console.log("First Name:", firstName);
    } else {
      console.log("No First Name found in the selected text.");
    }

    if (lastName) {
      console.log("Last Name:", lastName);
    } else {
      console.log("No Last Name found in the selected text.");
    }

    if (contactNumber) {
      console.log("Contact Number:", contactNumber);
    } else {
      console.log("No Contact Number found in the selected text.");
    }

    if (alternateNumber) {
      console.log("Alternate Number:", alternateNumber);
    } else {
      console.log("No Alternate Number found in the selected text.");
    }

    if (emailAddress) {
      console.log("Email Address:", emailAddress);
    } else {
      console.log("No Email Address found in the selected text.");
    }

    if (companyName) {
      console.log("Company Name:", companyName);
    } else {
      console.log("No company name found in the selected text.");
    }

    if (websiteURL) {
      console.log("Website URL:", websiteURL);
    } else {
      console.log("No website URL found in the selected text.");
    }

    if (address) {
      console.log("Address:", address);
    } else {
      console.log("No address found in the selected text.");
    }

    if (city) {
      console.log("City:", city);
    } else {
      console.log("No city found in the selected text.");
    }

    if (state) {
      console.log("State:", state);
    } else {
      console.log("No State found in the selected text.");
    }

    if (zipCode) {
      console.log("ZIP Code:", zipCode);
    } else {
      console.log("No ZIP code found in the selected text.");
    }

    if (sicDescription) {
      console.log("SIC Description:", sicDescription);
    } else {
      console.log("No SIC description found in the selected text.");
    }

    if (sicCode) {
      console.log("SIC Code:", sicCode);
    } else {
      console.log("No SIC code found in the selected text.");
    }

    if (entityType) {
      console.log("Entity Type:", entityType);
    } else {
      console.log("No entity type found in the selected text.");
    }

    if (companySales) {
      console.log("Company Sales:", companySales);
    } else {
      console.log("No company sales found in the selected text.");
    }

    if (revenue) {
      console.log("Revenue:", revenue);
    } else {
      console.log("No revenue found in the selected text.");
    }

    if (countryRegion) {
      console.log("Country/Region:", countryRegion);
    } else {
      console.log("No country/region found in the selected text.");
    }

    if (medicalInsurance) {
      console.log("Medical Insurance:", medicalInsurance);
    } else {
      console.log("No medical insurance found in the selected text.");
    }
  }
});

function extractForm(text) {
  let startKeyword = "FORM";
  let endKeyword = "MR./MRS./MISS";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractFirstName(text) {
  let startKeyword = "MR./MRS./MISS";
  let endKeyword = "FIRST NAME";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractLastName(text) {
  let startKeyword = "FIRST NAME";
  let endKeyword = "LAST NAME";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractContactNumber(text) {
  let startKeyword = "LAST NAME";
  let endKeyword = "CONTACT NUMBER";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractAlternateNumber(text) {
  let startKeyword = "CONTACT NUMBER";
  let endKeyword = "ALTERNATE NUMBER";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractEmailAddress(text) {
  let startKeyword = "COMPANY DATA BASE";
  let endKeyword = "EMAIL ADDRESS";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractCompanyName(text) {
  let startKeyword = "EMAIL ADDRESS";
  let endKeyword = "COMPANY NAME";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractWebsiteURL(text) {
  let startKeyword = "COMPANY NAME";
  let endKeyword = "WEBSITE URL";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractAddress(text) {
  let startKeyword = "WEBSITE URL";
  let endKeyword = "Address";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractCity(text) {
  let startKeyword = "Address";
  let endKeyword = "City";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractState(text) {
  let startKeyword = "City";
  let endKeyword = "State";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractZipCode(text) {
  let startKeyword = "State";
  let endKeyword = "ZIP Code";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractSicDescription(text) {
  let startKeyword = "ZIP Code";
  let endKeyword = "SIC DESCRIPTION";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractSicCode(text) {
  let startKeyword = "SIC DESCRIPTION";
  let endKeyword = "SIC CODE";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractEntityType(text) {
  let startKeyword = "SIC CODE";
  let endKeyword = "ENTITY TYPE";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractCompanySales(text) {
  let startKeyword = "ENTITY TYPE";
  let endKeyword = "COMPANY SALES";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractMedicalInsurance(text) {
  let startKeyword = "REGION";
  let endKeyword = "MEDICAL";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}

function extractCountryRegion(text) {
  let startKeyword = "(USD)";
  let endKeyword = "COUNTRY";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}
function extractRevenue(text) {
  let startKeyword = "SALES";
  let endKeyword = "REVENUE";
  let startIndex = text.indexOf(startKeyword);
  let endIndex = text.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    let value = text
      .substring(startIndex + startKeyword.length, endIndex)
      .trim();
    return value;
  }

  return null;
}
