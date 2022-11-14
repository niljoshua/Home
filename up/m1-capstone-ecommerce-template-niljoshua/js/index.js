
let carrinho = document.querySelector(".cart__content");

let divTotal = document.querySelector(".total"),
	qtdCarrinho = 0,
	total = 0,
	vazio = document.querySelector(".vazio");

function addItem(item) {
	divTotal.classList.remove("hidden");

	try {
		carrinho.removeChild(vazio);
	} catch (e) {
		carrinho;
	}

	let id = item.id.substring(2),
		dataItem = data[id];

	dataItem.qtd += 1;

	repeated();

	total += dataItem.value;
	qtdCarrinho += 1;
	document.querySelector(".quantidade").innerHTML = qtdCarrinho;

	document.querySelector(".preco__total").innerText = `R$ ${total}`;
}


function rmItem(item) {
	let items = carrinho.children;

	for (let i = 0; items.length > i; i++) {
		if (items[i].id.substring(2) == item.id.substring(2)) {
			data[item.id.substring(2)].qtd -= 1;
			repeated();
			total -= data[item.id.substring(2)].value;
			document.querySelector(".preco__total").innerHTML = `R$ ${total}`;
			qtdCarrinho -= 1;
			document.querySelector(".quantidade").innerHTML = qtdCarrinho;
			break;
		}
	}

	if (carrinho.childElementCount == 0) {
		divTotal.classList.toggle("hidden");
		carrinho.appendChild(vazio);
	}
}

function repeated() {
	let copyCart = [...data],
		noRepeat = [],
		li = document.createElement("li");

	noRepeat = copyCart.filter((x, i, arr) => {
		return (
			x.id != (arr[i + 1] != undefined ? arr[i + 1].id : arr[i + 1]) &&
			x.qtd != 0
		);
	});

	carrinho.innerHTML = "";
	noRepeat.forEach((element) => {
		li.innerHTML = `
		<div id="d_${element.id}"  class="item__cart">
			<div class="item__cart__img bg-white">
				<img src="${element.img}" alt="" />
			</div>
			<div class="info">
				<div class="item__cart__nome h4">${element.nameItem}</div>
				<div class="item__cart__preco h4 text-primary">R$ ${element.value}</div>
				<div class="small text-secondary">qtd. ${element.qtd}</div>
				<div id="c_${element.id}"  class="remover small" onclick="rmItem(event.target)">Remover</div>
			</div>
		</div>`;
		carrinho.innerHTML += `
		<div id="d_${element.id}"  class="item__cart">
			<div class="item__cart__img bg-white">
				<img src="${element.img}" alt="" />
			</div>
			<div class="info">
				<div class="item__cart__nome h4">${element.nameItem}</div>
				<div class="item__cart__preco h4 text-primary">R$ ${element.value}</div>
				<div class="small text-secondary">qtd. ${element.qtd}</div>
				<div id="c_${element.id}"  class="remover small" onclick="rmItem(event.target)">Remover</div>
			</div>
		</div>`;
	});
}

let resultSearch = [],
	searchBar = document.getElementById("search__bar");

function renderizaCard(element) {
	let ul = document.querySelector(".ul__items");

	let li = document.createElement("li");
	li.classList.add("item");
	li.classList.add("card");
	li.classList.add("bg-gray-0");

	let tag = "";
	element.tag.forEach((x) => {
		if (x.toLowerCase() == "camisetas")
			tag += `<div class="clas camisetas small bg-primary fw-bold">${x}</div>`;
		else if (x.toLowerCase() == "acessórios") {
			tag += `<div class="clas acessorios small bg-primary fw-bold">${x}</div>`;
		} else if (x.toLowerCase() == "x") {
			tag += `<div class="clas x small bg-primary fw-bold">${x}</div>`;
		} else {
			tag += `<div class="clas small bg-primary fw-bold">${x}</div>`;
		}
	});

	li.innerHTML = `
        <div class="card__head">
            <img src="${element.img}" alt="${element.nameItem}" />
        </div>
        <div class="card__body bg-white">
			<div>
				${tag}
				<h3 class="title h3">${element.nameItem}</h3>
			</div>
            <p class="desc bodybold">
                ${element.description}
            </p>
			<div>
            	<p class="price fw-bold text-primary">R$ ${element.value}</p>
            	<a id="p_${element.id}" class="add__cart bodybold" onclick="addItem(event.target)"> ${element.addCart} </a>
			</div>
        </div>
    `;

	tag = "";
	ul.appendChild(li);
}

function showCard() {
	let ul = document.querySelector(".ul__items");

	data.forEach((x) => {
		if (searchBar.value == "") {
			resultSearch.push(x);
		} else if (
			x.description.toLowerCase().includes(searchBar.value.toLowerCase()) ||
			x.nameItem.toLowerCase().includes(searchBar.value.toLowerCase()) ||
			x.tag.filter((k) => {
				return k.toLowerCase().includes(searchBar.value.toLowerCase());
			}).length
		) {
			resultSearch.push(x);
		}
	});

	ul.innerHTML = "";

	resultSearch.map((x) => {
		renderizaCard(x);
	});
	resultSearch = [];
}

searchBar.addEventListener("keypress", showCard, false);
searchBar.addEventListener("keyup", showCard, false);

document.addEventListener("DOMContentLoaded", showCard, false);

