let list = document.getElementsByClassName('tableList')[0]
let rows = list.getElementsByTagName('tr')

for (let i = 0; i < rows.length; i++) {
  let row = rows[i]
  let title = row.getElementsByClassName('bookTitle')[0]
  let link = title.href
  let button = document.createElement('button')
  button.style =
    'background-color: #409D69; border: none; border-radius: 2px; color: white; text-align: center; padding: 6px; cursor: pointer; margin: auto;'
  button.innerText = 'Get Pagecount'
  button.onclick = () => {
    try {
      button.innerText = 'Fetching...'
      fetch(link)
        .then((response) => response.text())
        .then((html) => {
          let parser = new DOMParser()
          let doc = parser.parseFromString(html, 'text/html')
          let pagecount = doc
            .getElementsByClassName('FeaturedDetails')[0]
            .innerText.split(' ')[0]
          button.innerText = `${pagecount} pages`
          let pageView = document.createElement('p')
          pageView.innerText = pagecount
        })
    } catch (e) {
      console.error(e)
      button.innerText = 'Could not fetch'
    }
  }
  row.appendChild(button)
}
