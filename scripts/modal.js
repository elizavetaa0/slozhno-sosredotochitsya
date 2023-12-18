const imgButtons = document.querySelectorAll('.img-content');
const popupImage = document.querySelector('.popup_type_image'); 
const imageElement = popupImage.querySelector('.popup__image');
const captionElement = popupImage.querySelector('.popup__caption'); 

imgButtons.forEach(imgButton => {
  imgButton.addEventListener('click', (evt)=>{
    evt.preventDefault(); 
    openImagePopupHandler(evt); 
  });
});

function openModal(popup) { 
  popup.classList.add('popup_is-opened'); 
  popup.addEventListener('click', closeByOverlayClick); 
  document.addEventListener('keydown', closeByEscHandler); 
} 

function openImagePopupHandler(event) { 
  event.preventDefault();
  const imageSource = event.target.src; 
  const caption = event.target.alt; 
  imageElement.src = imageSource; 
  captionElement.textContent = caption; 
  openModal(popupImage); 
}

function closeModal(popup) { 
  popup.classList.remove('popup_is-opened'); 
  popup.removeEventListener('click', closeByOverlayClick); 
  document.removeEventListener('keydown', closeByEscHandler); 
} 

function closeByEscHandler(event) { 
  if (event.key === 'Escape') { 
    const openedPopup = document.querySelector('.popup_is-opened'); 
      closeModal(openedPopup);
  } 
} 

function closeByOverlayClick(event) { 
  if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) { 
    const clickedPopup = event.currentTarget; 
    if (clickedPopup) { 
      closeModal(clickedPopup); 
    } 
  } 
} 




