const site = window.location.hostname;

// alert("Injector - Javascript has been injected into: " + site);

// Add Custom CSS - Function
// const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    // if (value !== 'Background Modal'){
    //     custom_element.innerHTML = value
    // }
    document.body.append(custom_element)
    return custom_element
}

elem1 = Create_Custom_Element(
    "div",
    "id",
    "modal",
    "Background Modal",
);

elem2 = Create_Custom_Element(
    "div",
    "id",
    "banner-overlay",
    "Creative Extension",
);

elem3 = Create_Custom_Element(
    "div",
    "id",
    "banner-text",
    "Creative Extension",
);
elem3.innerHTML = "Creative Extension";

// Create a new image element 
var icon = document.createElement('img'); 
 
// Set the src attribute to the URL of the image and add its css
icon.src = 'chrome-extension://dnbeehphiobpmdljamldjfoihekbdelo/assets/leafIcon.png'; 
icon.setAttribute("id", "icon")
 
// Append the image to an existing element in the HTML document 
elem2.appendChild(icon);
elem2.appendChild(elem3);

elem1.appendChild(elem2);