// INFO: To simulate Dynamic Content
const _content = [
  { text: 'Popular' },
  { text: 'Featured' },
  { text: 'Most Visited' },
  { text: 'Europe' },
  { text: 'Asia' }
]
const _resorts = [
  { text: 'Place 1', image: '/images/img1.jpg', photographer: 'Edvin Johansson', price: '$300.', city: 'London', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.', stars: 4, favorite: true },
  { text: 'Place 2', image: '/images/img2.jpg', photographer: 'Fernando Álvarez Rodríguez', price: '$300.', city: 'Monaco', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.', stars: 5, favorite: false },
  { text: 'Place 3', image: '/images/img3.jpg', photographer: 'Sara Dubler', price: '$300.', city: 'Paris', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.', stars: 4, favorite: false },
  { text: 'Place 4', image: '/images/img4.jpg', photographer: 'Sara Dubler', price: '$300.', city: 'Madrid', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.', stars: 0, favorite: false },
  { text: 'Place 5', image: '/images/img5.jpg', photographer: 'visualsofdana', price: '$300.', city: 'Mexico', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.', stars: 5, favorite: true },
  { text: 'Place 6', image: '/images/img6.jpg', photographer: 'Ralph (Ravi) Kayden', price: '$300.', city: 'Mexico', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.', stars: 2, favorite: false },
  { text: 'Place 7', image: '/images/img7.jpg', photographer: 'Anmol Seth', price: '$300.', city: 'Mexico', details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.', stars: 3, favorite: false },
]

Alloy.Collections.content.reset(_content)
Alloy.Collections.popular.reset(_resorts)
Alloy.Collections.recomended.reset(_.shuffle(_resorts))

changeProperties($.content.children[0], 'bold', '#dcfce7')

function doClick({ source }) {
  if (source.text) {
    _.each(source.parent.children, child => {
      if (child.backgroundColor === '#dcfce7')
        changeProperties(child)
    })

    $.largeLabel.applyProperties({ text: source.text })

    changeProperties(source, 'bold', '#dcfce7')

    Alloy.Collections.popular.reset(_.shuffle(_resorts))
    Alloy.Collections.recomended.reset(_.shuffle(_resorts))
  }
}

function changeProperties(_child, fontWeight = 'normal', backgroundColor = '#f9fafb') {
  _child.applyProperties({ backgroundColor, font: { fontSize: _child.font.fontSize, fontWeight } })
}

function showPopularDetails({ source }) {
  if (source.cid)
    Alloy.Globals.tabGroup.activeTab.open(Alloy.createController('details',
      Alloy.Collections.popular._byId[source.cid].attributes).getView())
}

function showRecomendedDetails({ source }) {
  if (source.cid)
    Alloy.Globals.tabGroup.activeTab.open(Alloy.createController('details',
      Alloy.Collections.recomended._byId[source.cid].attributes).getView())
}
