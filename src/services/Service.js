class Service {
  getData() {
    return [
      { id: 1, item: `Tabula Rasa`, type: `Body Armour`, price: 100 },
      { id: 2, item: `Solaris Lorica`, type: `Body Armour`, price: 34 },
      { id: 3, item: `Stormcharger`, type: `Boots`, price: 1000 },
      { id: 4, item: `Ezomyte Hold`, type: `Helmets`, price: 12 },
      { id: 5, item: `Hold`, type: `Boots`, price: 129 },
    ];
  }
  fetchItem = async () => {
    const response = await fetch(
      `https://api.poe.watch/get?category=weapon&league=Standard`
    );
    const json = await response.json();
    return json;
  };
}
export default Service;

/*
https://cors-anywhere.herokuapp.com/

poe api 
https://pathofexile.gamepedia.com/Path_of_Exile_Wiki:Data_query_API
https://pathofexile.gamepedia.com/Template:Item

https://api.poe.watch/get?category=weapon&league=Standard

https://pathofexile.gamepedia.com/api.php?
action=cargoquery&
tables=items&
fields=class_id,name,rarity,tags,inventory_icon,required_strength&
where=rarity=%22Normal%22%20AND%20
class=%22Body Armours%22&
limit=5&
group_by=name
*/
