const site = window.location.hostname;

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)

    if (value){
        if (tag == 'img'){
            custom_element.src = value;
        }
        else {
            custom_element.innerHTML = value;
        }
    }

    document.body.append(custom_element)
    return custom_element
}

// Element Declarations 
modal = Create_Custom_Element("div", "id", "modal");

bannerOverlay = Create_Custom_Element("div", "id", "banner-overlay");

bannerContent = Create_Custom_Element("div", "id", "banner-text", "Creative Extension");

panRight = Create_Custom_Element("img", "id", "panRight", 'chrome-extension://dnbeehphiobpmdljamldjfoihekbdelo/assets/rightPan.png');

panLeft = Create_Custom_Element("img", "id", "panLeft", 'chrome-extension://dnbeehphiobpmdljamldjfoihekbdelo/assets/leftPan.png');

productTile = Create_Custom_Element("div", "id", "product-tile");

imageSlot = Create_Custom_Element("img", "id", "image-slot", 'chrome-extension://dnbeehphiobpmdljamldjfoihekbdelo/assets/leafIcon.png');

// Needs to have the caption truncated when the caption is too long and ... added
captionSlot = Create_Custom_Element("div", "id", "caption", "Some wordy caption with lots of text written blah blah blah ahahah here we go n with lots of text written blah blah blah a");

addToCartButton = Create_Custom_Element("div", "id", "button");

carousel = Create_Custom_Element("div", "id", "carousel");

buttonText = Create_Custom_Element("div", "id", "button-text", "Add to Cart");

leafImage = Create_Custom_Element("img", "id", "icon", 'chrome-extension://dnbeehphiobpmdljamldjfoihekbdelo/assets/leafIcon.png');

cartImage = Create_Custom_Element("img", "id", "cart", 'chrome-extension://dnbeehphiobpmdljamldjfoihekbdelo/assets/cartIcon.png');

// Might be able to rework this into some sort of recursive function that appends all the elements to eachother in order - wait until working on the next bit below the banner before trying this
bannerOverlay.appendChild(leafImage);
bannerOverlay.appendChild(bannerContent);
addToCartButton.appendChild(cartImage);
addToCartButton.appendChild(buttonText);
productTile.appendChild(imageSlot);
productTile.appendChild(captionSlot);
carousel.appendChild(panLeft);
carousel.appendChild(productTile);
carousel.appendChild(panRight);

modal.appendChild(bannerOverlay);
modal.appendChild(carousel);
modal.appendChild(addToCartButton);