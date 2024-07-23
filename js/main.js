const boxItems = document.querySelectorAll(".box-item");
const boxWrapper = document.querySelectorAll(".box-wrapper");
boxItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("draggable");
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("draggable");
  });
});

boxWrapper.forEach(box => {
    box.addEventListener('dragover', () => {
        const draggedElement = document.querySelector('.draggable')
        box.append(draggedElement)
    })
})