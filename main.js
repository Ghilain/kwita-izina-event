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

const cardList = document.getElementById('pop');

const projectsList = [
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

];

const projectCards = projectsList.map((cards) => `
<li>
              <div class="speakerbox">
              <div class="speaker1">
                  <img src="${cards.featuredImage}" class=""/>
              </div>
            <div class="temp2">
              <div class="pad">
                <h3 class="work card-heading">${cards.name}</h3>
                <h5 class="text text-2">
                ${cards.title}
                </h5>
              </div>
              <div class="line"></div>
              <p>
              ${cards.description}
              </p>
            </div>
          </div>
          </li>

`).join('');

cardList.innerHTML += projectCards;
