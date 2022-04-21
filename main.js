// // mobile menu
const openMenu = document.querySelector('.menubar');
const closeMenu = document.querySelector('.close-x');
const mobileMenu = document.querySelector('.navlist1');

openMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

// Object Featured speaker

const speakersList = [
  {
    featuredImage: './image/meddy.png',
    name: 'Ngabo Meddy',
    title: 'Rwandan Artist',
    description: `From 2013 to the present Meddy lives in Texas. popular songs 
    "Ntawamusimbura", "Burinde Bucya", "Adi Top" and "Slowly".`,
  },

  {
    featuredImage: './image/itzhak-fisher.jpg',
    name: 'Itzhak  Fisher',
    title: 'RDB Chairman',
    description: `Itzhak Fisher, is an Israeli businessman who served as the Founder 
    and General Partner of Pereg Ventures.`,
  },

  {
    featuredImage: './image/LouiseKanyonga.png',
    name: 'Louise Kanyonga',
    title: 'Chief Strategy & Compliance Officer RDB',
    description: `Ms. Kanyonga is a lawyer by training, specialized in commercial 
    and corporate law.`,
  },

  {
    featuredImage: './image/ellendegeneres.png',
    name: 'Ellen DeGeneres',
    title: 'Ellen Lee DeGeneres is an American comedian',
    description: `Ellen Lee DeGeneres is an American comedian, television host, actress, writer, 
    and producer.`,
  },

  {
    featuredImage: './image/angelina-jolie.png',
    name: 'Angelina Jolie',
    title: 'American actress',
    description: 'Angelina Jolie DCMG is an American actress, filmmaker, and humanitarian.',
  },

  {
    featuredImage: './image/kevin-hart.jpg',
    name: 'Kevin Hart',
    title: 'American comedian',
    description: `Kevin Darnell Hart is an American stand-up comedian and actor. 
                  Born and raised in Philadelphia, Pennsylvania.`,
  },
];

const grid = document.querySelector('#pop');
function createGridItem({
  featuredImage, name, title, description,
}) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('speaker-bar');
  gridItem.innerHTML = `
  <li>
  <div class="speakerbox">
  <div class="speaker1">
      <img src="${featuredImage}" alt="${name} image" class=""/>
  </div>
<div class="temp2">
  <div class="pad">
    <h3 class="work card-heading">${name}</h3>
    <h5 class="text text-2">
    ${title}
    </h5>
  </div>
  <div class="line"></div>
  <p>
  ${description}
  </p>
</div>
</div>
</li>
    `;

  grid.appendChild(gridItem);
}

if (grid) {
  speakersList.forEach((instr) => {
    createGridItem(instr);
  });
}
