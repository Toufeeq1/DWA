// @ts-check
// // Fully working scripts.js file

// import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

// let page = 1;
// let matches = books

// const starting = document.createDocumentFragment()

// for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
//     const element = document.createElement('button')
//     element.classList = 'preview'
//     element.setAttribute('data-preview', id)

//     element.innerHTML = `
//         <img
//             class="preview__image"
//             src="${image}"
//         />

//         <div class="preview__info">
//             <h3 class="preview__title">${title}</h3>
//             <div class="preview__author">${authors[author]}</div>
//         </div>
//     `

//     starting.appendChild(element)
// }

// document.querySelector('[data-list-items]').appendChild(starting)

// const genreHtml = document.createDocumentFragment()
// const firstGenreElement = document.createElement('option')
// firstGenreElement.value = 'any'
// firstGenreElement.innerText = 'All Genres'
// genreHtml.appendChild(firstGenreElement)

// for (const [id, name] of Object.entries(genres)) {
//     const element = document.createElement('option')
//     element.value = id
//     element.innerText = name
//     genreHtml.appendChild(element)
// }

// document.querySelector('[data-search-genres]').appendChild(genreHtml)

// const authorsHtml = document.createDocumentFragment()
// const firstAuthorElement = document.createElement('option')
// firstAuthorElement.value = 'any'
// firstAuthorElement.innerText = 'All Authors'
// authorsHtml.appendChild(firstAuthorElement)

// for (const [id, name] of Object.entries(authors)) {
//     const element = document.createElement('option')
//     element.value = id
//     element.innerText = name
//     authorsHtml.appendChild(element)
// }

// document.querySelector('[data-search-authors]').appendChild(authorsHtml)

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     document.querySelector('[data-settings-theme]').value = 'night'
//     document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
//     document.documentElement.style.setProperty('--color-light', '10, 10, 20');
// } else {
//     document.querySelector('[data-settings-theme]').value = 'day'
//     document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
//     document.documentElement.style.setProperty('--color-light', '255, 255, 255');
// }

// document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
// document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0

// document.querySelector('[data-list-button]').innerHTML = `
//     <span>Show more</span>
//     <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
// `

// document.querySelector('[data-search-cancel]').addEventListener('click', () => {
//     document.querySelector('[data-search-overlay]').open = false
// })

// document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
//     document.querySelector('[data-settings-overlay]').open = false
// })

// document.querySelector('[data-header-search]').addEventListener('click', () => {
//     document.querySelector('[data-search-overlay]').open = true
//     document.querySelector('[data-search-title]').focus()
// })

// document.querySelector('[data-header-settings]').addEventListener('click', () => {
//     document.querySelector('[data-settings-overlay]').open = true
// })

// document.querySelector('[data-list-close]').addEventListener('click', () => {
//     document.querySelector('[data-list-active]').open = false
// })

// document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(event.target)
//     const { theme } = Object.fromEntries(formData)

//     if (theme === 'night') {
//         document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
//         document.documentElement.style.setProperty('--color-light', '10, 10, 20');
//     } else {
//         document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
//         document.documentElement.style.setProperty('--color-light', '255, 255, 255');
//     }

//     document.querySelector('[data-settings-overlay]').open = false
// })

// document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     const result = []

//     for (const book of books) {
//         let genreMatch = filters.genre === 'any'

//         for (const singleGenre of book.genres) {
//             if (genreMatch) break;
//             if (singleGenre === filters.genre) { genreMatch = true }
//         }

//         if (
//             (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
//             (filters.author === 'any' || book.author === filters.author) &&
//             genreMatch
//         ) {
//             result.push(book)
//         }
//     }

//     page = 1;
//     matches = result

//     if (result.length < 1) {
//         document.querySelector('[data-list-message]').classList.add('list__message_show')
//     } else {
//         document.querySelector('[data-list-message]').classList.remove('list__message_show')
//     }

//     document.querySelector('[data-list-items]').innerHTML = ''
//     const newItems = document.createDocumentFragment()

//     for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
//         const element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />

//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[author]}</div>
//             </div>
//         `

//         newItems.appendChild(element)
//     }

//     document.querySelector('[data-list-items]').appendChild(newItems)
//     document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1

//     document.querySelector('[data-list-button]').innerHTML = `
//         <span>Show more</span>
//         <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     document.querySelector('[data-search-overlay]').open = false
// })
// // ======
// document.querySelector('[data-list-button]').addEventListener('click', () => {
//     const fragment = document.createDocumentFragment()

//     for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
//         const element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />

//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[author]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }

//     document.querySelector('[data-list-items]').appendChild(fragment)
//     page += 1
// })

// document.querySelector('[data-list-items]').addEventListener('click', (event) => {
//     const pathArray = Array.from(event.path || event.composedPath())
//     let active = null

//     for (const node of pathArray) {
//         if (active) break

//         if (node?.dataset?.preview) {
//             let result = null

//             for (const singleBook of books) {
//                 if (result) break;
//                 if (singleBook.id === node?.dataset?.preview) result = singleBook
//             }

//             active = result
//         }
//     }

//     if (active) {
//         document.querySelector('[data-list-active]').open = true
//         document.querySelector('[data-list-blur]').src = active.image
//         document.querySelector('[data-list-image]').src = active.image
//         document.querySelector('[data-list-title]').innerText = active.title
//         document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
//         document.querySelector('[data-list-description]').innerText = active.description
//     }
// })

/**
 * @typedef {Object} selectors - html element data attribute values

 * 
 */

/**
 * Html object containing Html data Attributes
 * @type {selectors}
 */
const selectors = {
  dataListItems: document.querySelector("[data-list-items]"),
  dataSearchGenres: document.querySelector("[data-search-genres]"),
  dataSearchAuthors: document.querySelector("[data-search-authors]"),
  dataSettingTheme: document.querySelector("[data-settings-theme]"),
  dataListButton: document.querySelector("[data-list-button]"),
  dataSearchCancel: document.querySelector("[data-search-cancel]"),
  dataSettingsCancel: document.querySelector("[data-settings-cancel]"),
  dataSearchOverlay: document.querySelector("[data-search-overlay]"),
  dataSettingsOverlay: document.querySelector("[data-settings-overlay]"),
  dataHeaderSearch: document.querySelector("[data-header-search]"),
  dataSearchtTitle: document.querySelector("[data-search-title]"),
  dataHeaderSettings: document.querySelector("[data-header-settings]"),
  dataListClose: document.querySelector("[data-list-close]"),
  dataSettingsForm: document.querySelector("[data-settings-form]"),
  dataListActive: document.querySelector("[data-list-active]"),
  dataListMessage: document.querySelector("[data-list-message]"),
  dataSearchForm: document.querySelector("[data-search-form]"),
  dataListBlur: document.querySelector("[data-list-blur]"),
  dataListImage: document.querySelector("[data-list-image]"),
  dataListTitle: document.querySelector("[data-list-title]"),
  dataListSubtitle: document.querySelector("[data-list-subtitle]"),
  dataListDiscription: document.querySelector("[data-list-description]"),
};

import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";

// Initialize variables
let page = 1; // Current page number
let matches = books; // Array of matched books based on search filters

// Create a document fragment to hold the initial book previews
const starting = document.createDocumentFragment();

// Generate book previews for the first page
for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
  const element = document.createElement("button");
  // @ts-ignore
  element.classList = "preview";
  element.setAttribute("data-preview", id);

  element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

  starting.appendChild(element);
}

// Append the initial book previews to the list
selectors.dataListItems.appendChild(starting);

// Generate HTML options for genres dropdown
const genreHtml = document.createDocumentFragment();
const firstGenreElement = document.createElement("option");
firstGenreElement.value = "any";
firstGenreElement.innerText = "All Genres";
genreHtml.appendChild(firstGenreElement);

for (const [id, name] of Object.entries(genres)) {
  const element = document.createElement("option");
  element.value = id;
  element.innerText = name;
  genreHtml.appendChild(element);
}

selectors.dataSearchGenres.appendChild(genreHtml);

// Generate HTML options for authors dropdown
const authorsHtml = document.createDocumentFragment();
const firstAuthorElement = document.createElement("option");
firstAuthorElement.value = "any";
firstAuthorElement.innerText = "All Authors";
authorsHtml.appendChild(firstAuthorElement);

for (const [id, name] of Object.entries(authors)) {
  const element = document.createElement("option");
  element.value = id;
  element.innerText = name;
  authorsHtml.appendChild(element);
}

selectors.dataSearchAuthors.appendChild(authorsHtml); ///

// Check the preferred color scheme and set theme accordingly
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  selectors.dataSettingTheme.value = "night";
  document.documentElement.style.setProperty("--color-dark", "255, 255, 255");
  document.documentElement.style.setProperty("--color-light", "10, 10, 20");
} else {
  selectors.dataSettingTheme.value = "day";
  document.documentElement.style.setProperty("--color-dark", "10, 10, 20");
  document.documentElement.style.setProperty("--color-light", "255, 255, 255");
}

// Set the text and state of the "Show more" button
selectors.dataListButton.innerText = `Show more (${books.length - BOOKS_PER_PAGE
  })`;
const remaining = (matches.length - (page * BOOKS_PER_PAGE ))> 0;
// @ts-ignore
selectors.dataListButton.disabled = remaining <= 0

// Update the remaining books count in the "Show more" button
selectors.dataListButton.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE: 0 })</span>
`;

// Add event listeners for cancel buttons
selectors.dataSearchCancel.addEventListener("click", () => {
  selectors.dataSearchOverlay.open = false;
});

selectors.dataSettingsCancel.addEventListener("click", () => {
  selectors.dataSettingsOverlay.open = false;
});

// Add event listeners for search and settings overlays
selectors.dataHeaderSearch.addEventListener("click", () => {
  selectors.dataSearchOverlay.open = true;
  selectors.dataSearchtTitle.focus();
});

selectors.dataHeaderSettings.addEventListener("click", () => {
  selectors.dataSettingsOverlay.open = true;
});

// Add event listener for closing the active book preview
selectors.dataListClose.addEventListener("click", () => {
  selectors.dataListActive.open = false;
});

// Add event listener for the settings form submission
selectors.dataSettingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { theme } = Object.fromEntries(formData);

  // Set the theme based on the selected value
  if (theme === "night") {
    document.documentElement.style.setProperty("--color-dark", "255, 255, 255");
    document.documentElement.style.setProperty("--color-light", "10, 10, 20");
  } else {
    document.documentElement.style.setProperty("--color-dark", "10, 10, 20");
    document.documentElement.style.setProperty(
      "--color-light",
      "255, 255, 255"
    );
  }

  // Close the settings overlay
  selectors.dataSettingsOverlay.open = false;
});

// Add event listener for the search form submission
selectors.dataSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  // Apply the search filters to the books array
  for (const book of books) {
    let genreMatch = filters.genre === "any";

    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) {
        genreMatch = true;
      }
    }

    if (
      // @ts-ignore
      (filters.title.trim() === "" ||
        // @ts-ignore
        book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.author === "any" || book.author === filters.author) &&
      genreMatch
    ) {
      result.push(book);
    }
  }

  page = 1;
  matches = result;

  // Show/hide the list message if there are no matching results
  if (result.length < 1) {
    selectors.dataListMessage.classList.add("list__message_show");
  } else {
    selectors.dataListMessage.classList.remove("list__message_show");
  }

  // Clear the previous book previews
  selectors.dataListItems.innerHTML = "";
  const newItems = document.createDocumentFragment();

  // Generate new book previews based on the filtered results
  for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
    const element = document.createElement("button");
    // @ts-ignore
    element.classList = "preview";
    element.setAttribute("data-preview", id);

    element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;

    newItems.appendChild(element);
  }

  // Append the new book previews to the list
  selectors.dataListItems.appendChild(newItems);

  // Update the state of the "Show more" button
  selectors.dataListItems.disabled = matches.length - page * BOOKS_PER_PAGE < 1;

  // Update the "Show more" button text
  selectors.dataListButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${matches.length - page * BOOKS_PER_PAGE > 0
      ? matches.length - page * BOOKS_PER_PAGE
      : 0
    })</span>
    `;

  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Close the search overlay
  selectors.dataSearchOverlay.open = false;
});

// Add event listener for the "Show more" button
selectors.dataListButton.addEventListener("click", () => {
  const fragment = document.createDocumentFragment();

  // Generate new book previews for the next page
  for (const { author, id, image, title } of matches.slice(
    page * BOOKS_PER_PAGE,
    (page + 1) * BOOKS_PER_PAGE
  )) {
    const element = document.createElement("button");
    // @ts-ignore
    element.classList = "preview";
    element.setAttribute("data-preview", id);

    element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;

    fragment.appendChild(element);
  }

  // Append the new book previews to the list
  selectors.dataListItems.appendChild(fragment);
  page += 1;
});

// Add event listener for the book preview click
selectors.dataListItems.addEventListener("click", (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  // Find the clicked book in the books array
  for (const node of pathArray) {
    if (active) break;

    if (node?.dataset?.preview) {
      let result = null;

      for (const singleBook of books) {
        if (result) break;
        if (singleBook.id === node?.dataset?.preview) result = singleBook;
      }

      active = result;
    }
  }

  // Show the active book preview
  if (active) {
    selectors.dataListActive.open = true;
    selectors.dataListBlur.src = active.image;
    selectors.dataListImage.src = active.image;
    selectors.dataListTitle.innerText = active.title;
    selectors.dataListSubtitle.innerText = `${authors[active.author]
      } (${new Date(active.published).getFullYear()})`;
    selectors.dataListDiscription.innerText = active.description;
  }
});
