const toggleOpen = document.getElementById('toggleOpen');
const toggleClose = document.getElementById('toggleClose');
const menu = document.getElementById('collapseMenu');

let lastFocusedElement = null;

function openMenu() {
    lastFocusedElement = document.activeElement;
    menu.classList.remove('hidden');
    toggleOpen.setAttribute('aria-expanded', 'true');

    // Move focus into menu
    menu.focus();
}

function closeMenu() {
    menu.classList.add('hidden');
    toggleOpen.setAttribute('aria-expanded', 'false');

    // Restore focus
    lastFocusedElement?.focus();
}

toggleOpen.addEventListener('click', openMenu);
toggleClose.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
        closeMenu();
    }
});

///////////
const menus = document.getElementById('menus');

const card = [
    { id: 1, price: 9.99, name: 'Fried Eggs' },
    { id: 2, price: 15.99, name: 'Hawaiian Pizza' },
    { id: 3, price: 7.25, name: 'Martinez Cocktail' },
    { id: 4, price: 20.99, name: 'Butterscotch Cake' },
    { id: 5, price: 5.89, name: 'Mint Lemonade' },
    { id: 6, price: 18.05, name: 'Chocolate Icecream' },
    { id: 7, price: 12.55, name: 'Cheese Burger' },
    { id: 8, price: 12.99, name: 'Classic Waffles' }
];


if (menus) {
    menus.innerHTML = card.map(items => `
        <div class="border-[#DBDFD0] rounded-2xl shadow-sm flex flex-col items-center justify-center w-[300px] gap-4">
            <img src="../img/food${items.id}.png" alt="">
            <div class="text-center">
                <span class="text-[#AD343E] font-semibold">$ ${items.price}</span>
                <h6 class="font-semibold my-2">${items.name}</h6>
                <p class="text-[#414536] mb-4">Made with eggs, lettuce, salt, oil and other ingredients.</p>
            </div>
        </div>
    `).join('');
}



const ourBlog = document.getElementById('ourBlog');

const blogcard = [
    { id: 1, p: 'How to prepare a delicious gluten free sushi' },
    { id: 2, p: 'Exclusive baking lessons from the pastry king' },
    { id: 3, p: 'How to prepare the perfect fries in an air fryer' },
    { id: 4, p: 'How to prepare delicious chicken tenders' },
    { id: 5, p: '5 great cooking gadgets you can buy to save time' },
    { id: 6, p: 'The secret tips & tricks to prepare a perfect burger' },
    { id: 7, p: '7 delicious cheesecake recipes you can prepare' },
    { id: 8, p: '5 great pizza restaurants you should visit this city' },
    { id: 9, p: '5 great cooking gadgets you can buy to save time' },
    { id: 10, p: 'How to prepare a delicious gluten free sushi' },
    { id: 11, p: 'Top 20 simple and quick desserts for kids' },
    { id: 12, p: 'Top 20 simple and quick desserts for kids' }
];


if (ourBlog) {
    ourBlog.innerHTML = blogcard.map(item => `
        <div class="flex flex-col items-center justify-center gap-5 w-[300px] rounded-2xl shadow-sm">
            <img src="../img/blog${item.id}.png" alt="Blog Image ${item.id}">
            <div>
                <span class="text-[#737865]">January 3, 2023</span>
                <p class="my-5 text-[#2C2F24]">${item.p}</p>
            </div>
        </div>
    `).join('');
}


const pagesBtn = document.getElementById('pagesBtn');
const pagesDropdown = document.getElementById('pagesDropdown');

if (pagesBtn && pagesDropdown) {
    pagesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        pagesDropdown.classList.toggle('hidden');
    });
}