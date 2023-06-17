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
    let mis = extractForm(selectedText);
    let first_name = extractFirstName(selectedText);
    let last_name = extractLastName(selectedText);
    let contact_no = extractContactNumber(selectedText);
    let alternate_no = extractAlternateNumber(selectedText);
    let Email = extractEmailAddress(selectedText);
    let company_name = extractCompanyName(selectedText);
    let website_url = extractWebsiteURL(selectedText);
    let address = extractAddress(selectedText);
    let city = extractCity(selectedText);
    let state = extractState(selectedText);
    let zip = extractZipCode(selectedText);
    let sic_desc = extractSicDescription(selectedText);
    let sic_code = extractSicCode(selectedText);
    let entity_type = extractEntityType(selectedText);
    let company_sale = extractCompanySales(selectedText);
    let revenue = extractRevenue(selectedText);
    let country = extractCountryRegion(selectedText);
    let medical_ins = extractMedicalInsurance(selectedText);

    if (mis) {
      console.log("Sir Name:", mis);
    } else {
      console.log("No Sir Name found in the selected text.");
    }

    if (first_name) {
      console.log("First Name:", first_name);
    } else {
      console.log("No First Name found in the selected text.");
    }

    if (last_name) {
      console.log("Last Name:", last_name);
    } else {
      console.log("No Last Name found in the selected text.");
    }

    if (contact_no) {
      console.log("Contact Number:", contact_no);
    } else {
      console.log("No Contact Number found in the selected text.");
    }

    if (alternate_no) {
      console.log("Alternate Number:", alternate_no);
    } else {
      console.log("No Alternate Number found in the selected text.");
    }

    if (Email) {
      console.log("Email Address:", Email);
    } else {
      console.log("No Email Address found in the selected text.");
    }

    if (company_name) {
      console.log("Company Name:", company_name);
    } else {
      console.log("No company name found in the selected text.");
    }

    if (website_url) {
      console.log("Website URL:", website_url);
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

    if (zip) {
      console.log("ZIP Code:", zip);
    } else {
      console.log("No ZIP code found in the selected text.");
    }

    if (sic_desc) {
      console.log("SIC Description:", sic_desc);
    } else {
      console.log("No SIC description found in the selected text.");
    }

    if (sic_code) {
      console.log("SIC Code:", sic_code);
    } else {
      console.log("No SIC code found in the selected text.");
    }

    if (entity_type) {
      console.log("Entity Type:", entity_type);
    } else {
      console.log("No entity type found in the selected text.");
    }

    if (company_sale) {
      console.log("Company Sales:", company_sale);
    } else {
      console.log("No company sales found in the selected text.");
    }

    if (revenue) {
      console.log("Revenue:", revenue);
    } else {
      console.log("No revenue found in the selected text.");
    }

    if (country) {
      console.log("Country/Region:", country);
    } else {
      console.log("No country/region found in the selected text.");
    }

    if (medical_ins) {
      console.log("Medical Insurance:", medical_ins);
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
