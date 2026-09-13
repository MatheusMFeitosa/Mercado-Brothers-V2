import { mostrarProdutosTela } from './index.js';

const inputSearch = document.getElementById("barra_pesquisa")
const iconeSearch = document.querySelector(".fa-magnifying-glass")

inputSearch.addEventListener("input", () => {
    if (inputSearch.value != "") {
        conductResearch(inputSearch.value)
    } else {
        mostrarProdutosTela()
    }
})

// inputSearch.addEventListener("keydown", function (event) {
//     if (event.key === 'Enter') {
//         if (inputSearch.value != "") {
//             conductResearch(inputSearch.value)
//         }
//     }
//     else {
//         mostrarProdutosTela()
//     }
// })

// iconeSearch.addEventListener("click", () => {
//     if (inputSearch.value != "") {
//         conductResearch(inputSearch.value)
//     } else {
//         mostrarProdutosTela()
//     }
// })

function conductResearch(researchValue) {
    const namesOfAllProducts = document.querySelectorAll(".nomeProduto")
    console.log(researchValue)
    let productsFound = []

    for (let i = 0; i < namesOfAllProducts.length; i++) {

        const currentProduct = namesOfAllProducts[i].textContent.toLocaleLowerCase()

        if (currentProduct.includes(researchValue.toLocaleLowerCase())) {

            productsFound.push({
                position: i,
                itemName: currentProduct
            })
        }
    }

    console.log(productsFound)

    applySearch(productsFound)
}

function applySearch(productsFound) {
    const allProducts = document.querySelectorAll(".produto")

    for (let i = 0; i < allProducts.length; i++) {
        let found = false

        for (let j = 0; j < productsFound.length; j++) {
            if (i == productsFound[j].position) {
                found = true
                break
            }
        }

        if (!found) {
            allProducts[i].remove()
        }
    }
}

// Esta dando um erro deu quando aperto (Ctrl, Alt e Shift...) ele reseta a pesquisa e aparece todos os produtos.
