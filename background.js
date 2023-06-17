chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "copyText",
    title: "Text to Fill Form",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId === "copyText") {
    // let selectedText = info.selectionText;
    let selectedText = info.selectionText.replace(/\s{2,}/g, " ");
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
      (async function (mis) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, mis);

        async function fillFirstNameField(tabId, mis) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [mis],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(mis) {
          let firstNameField = document.getElementById("mis");
          if (firstNameField) {
            firstNameField.value = mis;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(mis);
    } else {
      console.log("No Sir Name found in the selected text.");
    }

    if (first_name) {
      console.log("First Name:", first_name);

      (async function (first_name) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, first_name);

        async function fillFirstNameField(tabId, first_name) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [first_name],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(first_name) {
          let firstNameField = document.getElementById("first_name");
          if (firstNameField) {
            firstNameField.value = first_name;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(first_name);
    } else {
      console.log("No First Name found in the selected text.");
    }

    if (last_name) {
      console.log("Last Name:", last_name);
      (async function (last_name) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, last_name);

        async function fillFirstNameField(tabId, last_name) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [last_name],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(last_name) {
          let firstNameField = document.getElementById("last_name");
          if (firstNameField) {
            firstNameField.value = last_name;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(last_name);
    } else {
      console.log("No Last Name found in the selected text.");
    }

    if (contact_no) {
      console.log("Contact Number:", contact_no);
      (async function (contact_no) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, contact_no);

        async function fillFirstNameField(tabId, contact_no) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [contact_no],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(contact_no) {
          let firstNameField = document.getElementById("contact_no");
          if (firstNameField) {
            firstNameField.value = contact_no;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(contact_no);
    } else {
      console.log("No Contact Number found in the selected text.");
    }

    if (alternate_no) {
      console.log("Alternate Number:", alternate_no);
      (async function (alternate_no) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, alternate_no);

        async function fillFirstNameField(tabId, alternate_no) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [alternate_no],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(alternate_no) {
          let firstNameField = document.getElementById("alternate_no");
          if (firstNameField) {
            firstNameField.value = alternate_no;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(alternate_no);
    } else {
      console.log("No Alternate Number found in the selected text.");
    }

    if (Email) {
      console.log("Email Address:", Email);
      (async function (Email) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, Email);

        async function fillFirstNameField(tabId, Email) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [Email],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(Email) {
          let firstNameField = document.getElementById("Email");
          if (firstNameField) {
            firstNameField.value = Email;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(Email);
    } else {
      console.log("No Email Address found in the selected text.");
    }

    if (company_name) {
      console.log("Company Name:", company_name);
      (async function (company_name) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, company_name);

        async function fillFirstNameField(tabId, company_name) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [company_name],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(company_name) {
          let firstNameField = document.getElementById("company_name");
          if (firstNameField) {
            firstNameField.value = company_name;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(company_name);
    } else {
      console.log("No company name found in the selected text.");
    }

    if (website_url) {
      console.log("Website URL:", website_url);
      (async function (website_url) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, website_url);

        async function fillFirstNameField(tabId, website_url) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [website_url],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(website_url) {
          let firstNameField = document.getElementById("website_url");
          if (firstNameField) {
            firstNameField.value = website_url;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(website_url);
    } else {
      console.log("No website URL found in the selected text.");
    }

    if (address) {
      console.log("Address:", address);
      (async function (address) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, address);

        async function fillFirstNameField(tabId, address) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [address],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(address) {
          let firstNameField = document.getElementById("address");
          if (firstNameField) {
            firstNameField.value = address;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(address);
    } else {
      console.log("No address found in the selected text.");
    }

    if (city) {
      console.log("City:", city);
      (async function (city) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, city);

        async function fillFirstNameField(tabId, city) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [city],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(city) {
          let firstNameField = document.getElementById("city");
          if (firstNameField) {
            firstNameField.value = city;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(city);
    } else {
      console.log("No city found in the selected text.");
    }

    if (state) {
      console.log("State:", state);
      (async function (state) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, state);

        async function fillFirstNameField(tabId, state) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [state],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(state) {
          let firstNameField = document.getElementById("state");
          if (firstNameField) {
            firstNameField.value = state;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(state);
    } else {
      console.log("No State found in the selected text.");
    }

    if (zip) {
      console.log("ZIP Code:", zip);
      (async function (zip) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, zip);

        async function fillFirstNameField(tabId, zip) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [zip],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(zip) {
          let firstNameField = document.getElementById("zip");
          if (firstNameField) {
            firstNameField.value = zip;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(zip);
    } else {
      console.log("No ZIP code found in the selected text.");
    }

    if (sic_desc) {
      console.log("SIC Description:", sic_desc);
      (async function (sic_desc) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, sic_desc);

        async function fillFirstNameField(tabId, sic_desc) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [sic_desc],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(sic_desc) {
          let firstNameField = document.getElementById("sic_desc");
          if (firstNameField) {
            firstNameField.value = sic_desc;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(sic_desc);
    } else {
      console.log("No SIC description found in the selected text.");
    }

    if (sic_code) {
      console.log("SIC Code:", sic_code);
      (async function (sic_code) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, sic_code);

        async function fillFirstNameField(tabId, sic_code) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [sic_code],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(sic_code) {
          let firstNameField = document.getElementById("sic_code");
          if (firstNameField) {
            firstNameField.value = sic_code;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(sic_code);
    } else {
      console.log("No SIC code found in the selected text.");
    }

    if (entity_type) {
      console.log("Entity Type:", entity_type);
      (async function (entity_type) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, entity_type);

        async function fillFirstNameField(tabId, entity_type) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [entity_type],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(entity_type) {
          let firstNameField = document.getElementById("entity_type");
          if (firstNameField) {
            firstNameField.value = entity_type;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(entity_type);
    } else {
      console.log("No entity type found in the selected text.");
    }

    if (company_sale) {
      console.log("Company Sales:", company_sale);
      (async function (company_sale) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, company_sale);

        async function fillFirstNameField(tabId, company_sale) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [company_sale],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(company_sale) {
          let firstNameField = document.getElementById("company_sale");
          if (firstNameField) {
            firstNameField.value = company_sale;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(company_sale);
    } else {
      console.log("No company sales found in the selected text.");
    }

    if (revenue) {
      console.log("Revenue:", revenue);
      (async function (revenue) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, revenue);

        async function fillFirstNameField(tabId, revenue) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [revenue],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(revenue) {
          let firstNameField = document.getElementById("revenue");
          if (firstNameField) {
            firstNameField.value = revenue;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(revenue);
    } else {
      console.log("No revenue found in the selected text.");
    }

    if (country) {
      console.log("Country/Region:", country);
      (async function (country) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, country);

        async function fillFirstNameField(tabId, country) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [country],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(country) {
          let firstNameField = document.getElementById("country");
          if (firstNameField) {
            firstNameField.value = country;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(country);
    } else {
      console.log("No country/region found in the selected text.");
    }

    if (medical_ins) {
      console.log("Medical Insurance:", medical_ins);
      (async function (medical_ins) {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let inputFields = await getInputElementIds(tab.id);

        let fillFirstName = await fillFirstNameField(tab.id, medical_ins);

        async function fillFirstNameField(tabId, medical_ins) {
          return new Promise((resolve) => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabId },
                function: setFirstNameValue,
                args: [medical_ins],
              },
              (result) => {
                resolve();
              }
            );
          });
        }

        function setFirstNameValue(medical_ins) {
          let firstNameField = document.getElementById("medical_ins");
          if (firstNameField) {
            firstNameField.value = medical_ins;
            firstNameField.dispatchEvent(new Event("input", { bubbles: true }));
            firstNameField.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      })(medical_ins);
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

async function getInputElementIds(tabId) {
  return new Promise((resolve) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        function: fetchInputFields,
      },
      (result) => {
        let inputFields = result[0]?.result || [];
        resolve(inputFields.map((input) => input.id));
      }
    );
  });
}

function fetchInputFields() {
  let inputElements = Array.from(document.getElementsByTagName("input"));
  let inputFields = inputElements.map((input) => ({ id: input.id }));
  return inputFields;
}
