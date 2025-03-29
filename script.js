document.addEventListener("DOMContentLoaded", function () {
    // Function to add new bucket list item
    function add_Item() {
        let input = document.getElementById("bucket_Input").value;
        if (input.trim() !== "") {
            let ul = document.getElementById("bucket_List");
            let li = document.createElement("li");
            li.textContent = input;
            ul.appendChild(li);
            document.getElementById("bucket_Input").value = "";
        }
    }

    // Function to toggle font family
    function changeFont_Family() {
        let ul = document.getElementById("bucket_List");
    
        // If no font is set, apply a default before toggling
        if (!ul.style.fontFamily) {
            ul.style.fontFamily = "Comic Sans MS, sans-serif";
        }
    
        let currentFont = ul.style.fontFamily;
        let newFont = currentFont.includes("Comic Sans MS") ? "Papyrus, serif" : "Comic Sans MS, sans-serif";
    
        ul.style.fontFamily = newFont;
        console.log("Font changed to:", newFont); // Debugging
    }
    
    // Function to make list items bold
    function make_Bold() {
        let items = document.querySelectorAll("#bucket_List li");
        items.forEach(item => {
            item.style.fontWeight = "bold";
        });
    }

    // Attach functions to buttons
    document.getElementById("addItemBtn").addEventListener("click", add_Item);
    document.getElementById("changeFontBtn").addEventListener("click", changeFont_Family);
    document.getElementById("makeBoldBtn").addEventListener("click", make_Bold);
});
