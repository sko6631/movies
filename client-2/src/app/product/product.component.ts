import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  movies =[
    {"tconst":"tt0030298","titleType":"tvMovie","primaryTitle":"Julius Caesar","originalTitle":"Julius Caesar","startYear":"1938","endYear":"\\N","runtimeMinutes":"101","genres":"Drama,History"},
    {"tconst":"tt0038309","titleType":"tvMovie","primaryTitle":"As You Like It","originalTitle":"As You Like It","startYear":"1946","endYear":"\\N","runtimeMinutes":"\\N","genres":"Drama"},
    {"tconst":"tt0038738","titleType":"tvMovie","primaryTitle":"A Midsummer Night's Dream","originalTitle":"A Midsummer Night's Dream","startYear":"1946","endYear":"\\N","runtimeMinutes":"150","genres":"Drama,Fantasy"},
    {"tconst":"tt0039445","titleType":"tvMovie","primaryTitle":"Hamlet Part 1","originalTitle":"Hamlet Part 1","startYear":"1947","endYear":"\\N","runtimeMinutes":"88","genres":"Drama"},
    {"tconst":"tt0039618","titleType":"tvMovie","primaryTitle":"The Merchant of Venice","originalTitle":"The Merchant of Venice","startYear":"1947","endYear":"\\N","runtimeMinutes":"90","genres":"Drama"},
    {"tconst":"tt0039624","titleType":"tvMovie","primaryTitle":"A Midsummer Night's Dream","originalTitle":"A Midsummer Night's Dream","startYear":"1947","endYear":"\\N","runtimeMinutes":"\\N","genres":"Fantasy"},
    {"tconst":"tt0040060","titleType":"tvMovie","primaryTitle":"Wit and Wisdom","originalTitle":"Wit and Wisdom","startYear":"1948","endYear":"\\N","runtimeMinutes":"45","genres":"Comedy"},
    {"tconst":"tt0040510","titleType":"tvMovie","primaryTitle":"The Tragedy of King Lear Part 1","originalTitle":"The Tragedy of King Lear Part 1","startYear":"1948","endYear":"\\N","runtimeMinutes":"108","genres":"Drama"},
    {"tconst":"tt0041533","titleType":"tvMovie","primaryTitle":"Julius Caesar","originalTitle":"Julius Caesar","startYear":"1949","endYear":"\\N","runtimeMinutes":"\\N","genres":"Drama,History"},
    {"tconst":"tt0041614","titleType":"tvMovie","primaryTitle":"Macbeth","originalTitle":"Macbeth","startYear":"1949","endYear":"\\N","runtimeMinutes":"120","genres":"Drama"},
    {"tconst":"tt0042169","titleType":"tvMovie","primaryTitle":"Wit and Wisdom","originalTitle":"Wit and Wisdom","startYear":"1950","endYear":"\\N","runtimeMinutes":"45","genres":"Comedy"},
    {"tconst":"tt0043691","titleType":"tvMovie","primaryTitle":"The Gamblers","originalTitle":"Les joueurs","startYear":"1950","endYear":"\\N","runtimeMinutes":"50","genres":"Comedy"},
    {"tconst":"tt0045553","titleType":"tvMovie","primaryTitle":"Beyond the Moon","originalTitle":"Beyond the Moon","startYear":"1954","endYear":"\\N","runtimeMinutes":"76","genres":"Adventure,Family,Sci-Fi"},
    {"tconst":"tt0045655","titleType":"tvMovie","primaryTitle":"Crash of Moons","originalTitle":"Crash of Moons","startYear":"1954","endYear":"\\N","runtimeMinutes":"78","genres":"Adventure,Family,Sci-Fi"},
    {"tconst":"tt0045658","titleType":"tvMovie","primaryTitle":"Crossroad Avenger: The Adventures of the Tucson Kid","originalTitle":"Crossroad Avenger: The Adventures of the Tucson Kid","startYear":"1953","endYear":"\\N","runtimeMinutes":"25","genres":"Western"},
    {"tconst":"tt0045781","titleType":"tvMovie","primaryTitle":"Forbidden Moon","originalTitle":"Forbidden Moon","startYear":"1956","endYear":"\\N","runtimeMinutes":"78","genres":"Sci-Fi"},
    {"tconst":"tt0045865","titleType":"tvMovie","primaryTitle":"Henry V","originalTitle":"Henry V","startYear":"1953","endYear":"\\N","runtimeMinutes":"\\N","genres":"Drama,War"},
    {"tconst":"tt0046065","titleType":"tvMovie","primaryTitle":"Menace from Outer Space","originalTitle":"Menace from Outer Space","startYear":"1956","endYear":"\\N","runtimeMinutes":"78","genres":"Adventure,Family,Sci-Fi"},
    {"tconst":"tt0046316","titleType":"tvMovie","primaryTitle":"Silver Needle in the Sky","originalTitle":"Silver Needle in the Sky","startYear":"1954","endYear":"\\N","runtimeMinutes":"76","genres":"Adventure,Family,Sci-Fi"},
    {"tconst":"tt0046324","titleType":"tvMovie","primaryTitle":"Skip Taylor","originalTitle":"Skip Taylor","startYear":"1953","endYear":"\\N","runtimeMinutes":"\\N","genres":"\\N"},
    {"tconst":"tt0046619","titleType":"tvMovie","primaryTitle":"Mandrake the Magician","originalTitle":"Mandrake the Magician","startYear":"1954","endYear":"\\N","runtimeMinutes":"30","genres":"Fantasy"},
    {"tconst":"tt0046684","titleType":"tvMovie","primaryTitle":"The Adventures of Huckleberry Finn","originalTitle":"The Adventures of Huckleberry Finn","startYear":"1955","endYear":"\\N","runtimeMinutes":"60","genres":"Drama"},
    {"tconst":"tt0046978","titleType":"tvMovie","primaryTitle":"Fire One","originalTitle":"Fire One","startYear":"1954","endYear":"\\N","runtimeMinutes":"53","genres":"Drama"},
    {"tconst":"tt0047198","titleType":"tvMovie","primaryTitle":"Macbeth","originalTitle":"Macbeth","startYear":"1954","endYear":"\\N","runtimeMinutes":"103","genres":"Drama"},
    {"tconst":"tt0047211","titleType":"tvMovie","primaryTitle":"Manhunt in Space","originalTitle":"Manhunt in Space","startYear":"1956","endYear":"\\N","runtimeMinutes":"78","genres":"Adventure,Family,Sci-Fi"},
    {"tconst":"tt0047409","titleType":"tvMovie","primaryTitle":"King Richard II","originalTitle":"King Richard II","startYear":"1954","endYear":"\\N","runtimeMinutes":"\\N","genres":"Drama"},
    {"tconst":"tt0047798","titleType":"tvMovie","primaryTitle":"Abschiedsvorstellung","originalTitle":"Abschiedsvorstellung","startYear":"1955","endYear":"\\N","runtimeMinutes":"90","genres":"Comedy,Musical"},
    {"tconst":"tt0048088","titleType":"tvMovie","primaryTitle":"Foreign Intrigue: Jeannie","originalTitle":"Foreign Intrigue: Jeannie","startYear":"1955","endYear":"\\N","runtimeMinutes":"\\N","genres":"\\N"},
    {"tconst":"tt0048144","titleType":"tvMovie","primaryTitle":"Hamlet","originalTitle":"Hamlet","startYear":"1955","endYear":"\\N","runtimeMinutes":"\\N","genres":"Drama"},
    {"tconst":"tt0048357","titleType":"tvMovie","primaryTitle":"Masquerade","originalTitle":"Masquerade","startYear":"1955","endYear":"\\N","runtimeMinutes":"71","genres":"Western"},
    {"tconst":"tt0048372","titleType":"tvMovie","primaryTitle":"The Merry Wives of Windsor","originalTitle":"The Merry Wives of Windsor","startYear":"1955","endYear":"\\N","runtimeMinutes":"\\N","genres":"Comedy,Romance"},
    {"tconst":"tt0048456","titleType":"tvMovie","primaryTitle":"Othello","originalTitle":"Othello","startYear":"1955","endYear":"\\N","runtimeMinutes":"108","genres":"Drama,Romance"},
    {"tconst":"tt0048650","titleType":"tvMovie","primaryTitle":"Spin and Marty: The Movie","originalTitle":"Spin and Marty: The Movie","startYear":"1955","endYear":"\\N","runtimeMinutes":"\\N","genres":"Family,Western"},
    {"tconst":"tt0048957","titleType":"tvMovie","primaryTitle":"Invaders from Space","originalTitle":"Invaders from Space","startYear":"1965","endYear":"\\N","runtimeMinutes":"78","genres":"Sci-Fi"},
    {"tconst":"tt0049197","titleType":"tvMovie","primaryTitle":"Die Fahrt ins Blaue","originalTitle":"Die Fahrt ins Blaue","startYear":"1956","endYear":"\\N","runtimeMinutes":"\\N","genres":"\\N"},
    {"tconst":"tt0049402","titleType":"tvMovie","primaryTitle":"Keiner stirbt leicht","originalTitle":"Keiner stirbt leicht","startYear":"1956","endYear":"\\N","runtimeMinutes":"\\N","genres":"Crime,Drama"},
    {"tconst":"tt0049556","titleType":"tvMovie","primaryTitle":"The Ninth Day","originalTitle":"The Ninth Day","startYear":"1956","endYear":"\\N","runtimeMinutes":"\\N","genres":"\\N"},
    {"tconst":"tt0049770","titleType":"tvMovie","primaryTitle":"Smaragden - Geschichte","originalTitle":"Smaragden - Geschichte","startYear":"1956","endYear":"\\N","runtimeMinutes":"50","genres":"Comedy,Crime"},
    {"tconst":"tt0049835","titleType":"tvMovie","primaryTitle":"Termin Julia wird gehalten","originalTitle":"Termin Julia wird gehalten","startYear":"1956","endYear":"\\N","runtimeMinutes":"\\N","genres":"\\N"},
    {"tconst":"tt0050273","titleType":"tvMovie","primaryTitle":"The Critical Point","originalTitle":"The Critical Point","startYear":"1957","endYear":"\\N","runtimeMinutes":"90","genres":"\\N"},
    {"tconst":"tt0050502","titleType":"tvMovie","primaryTitle":"Mr. Sleeman Is Coming","originalTitle":"Herr Sleeman kommer","startYear":"1957","endYear":"\\N","runtimeMinutes":"43","genres":"Drama"},
    {"tconst":"tt0050536","titleType":"tvMovie","primaryTitle":"Illusionen","originalTitle":"Illusionen","startYear":"1957","endYear":"\\N","runtimeMinutes":"82","genres":"\\N"},
    {"tconst":"tt0050581","titleType":"tvMovie","primaryTitle":"Einen Jux will er sich machen","originalTitle":"Einen Jux will er sich machen","startYear":"1956","endYear":"\\N","runtimeMinutes":"88","genres":"Comedy"},
    {"tconst":"tt0050602","titleType":"tvMovie","primaryTitle":"Kolportage","originalTitle":"Kolportage","startYear":"1957","endYear":"\\N","runtimeMinutes":"62","genres":"Drama"},
    {"tconst":"tt0050761","titleType":"tvMovie","primaryTitle":"Nebel","originalTitle":"Nebel","startYear":"1957","endYear":"\\N","runtimeMinutes":"93","genres":"Crime"},
    {"tconst":"tt0050819","titleType":"tvMovie","primaryTitle":"Die Panne","originalTitle":"Die Panne","startYear":"1957","endYear":"\\N","runtimeMinutes":"88","genres":"Drama"},
    {"tconst":"tt0050842","titleType":"tvMovie","primaryTitle":"The Pied Piper of Hamelin","originalTitle":"The Pied Piper of Hamelin","startYear":"1957","endYear":"\\N","runtimeMinutes":"89","genres":"Family,Fantasy,Musical"},
    {"tconst":"tt0050846","titleType":"tvMovie","primaryTitle":"Pinocchio","originalTitle":"Pinocchio","startYear":"1957","endYear":"\\N","runtimeMinutes":"60","genres":"Family"},
    {"tconst":"tt0050898","titleType":"tvMovie","primaryTitle":"Der Richter und sein Henker","originalTitle":"Der Richter und sein Henker","startYear":"1957","endYear":"\\N","runtimeMinutes":"89","genres":"Drama,Mystery"},
    {"tconst":"tt0050938","titleType":"tvMovie","primaryTitle":"Schinderhannes","originalTitle":"Schinderhannes","startYear":"1957","endYear":"\\N","runtimeMinutes":"102","genres":"Drama"},
    {"tconst":"tt0051037","titleType":"tvMovie","primaryTitle":"The Sword","originalTitle":"The Sword","startYear":"1957","endYear":"\\N","runtimeMinutes":"\\N","genres":"\\N"},
    {"tconst":"tt0051347","titleType":"tvMovie","primaryTitle":"Die Alkestiade","originalTitle":"Die Alkestiade","startYear":"1958","endYear":"\\N","runtimeMinutes":"125","genres":"Drama"},
    {"tconst":"tt0051359","titleType":"tvMovie","primaryTitle":"Androklus und der Löwe","originalTitle":"Androklus und der Löwe","startYear":"1958","endYear":"\\N","runtimeMinutes":"116","genres":"Comedy"},
    {"tconst":"tt0051384","titleType":"tvMovie","primaryTitle":"Iz pepla","originalTitle":"Iz pepla","startYear":"1958","endYear":"\\N","runtimeMinutes":"\\N","genres":"\\N"},
    {"tconst":"tt0051483","titleType":"tvMovie","primaryTitle":"Colombe","originalTitle":"Colombe","startYear":"1958","endYear":"\\N","runtimeMinutes":"130","genres":"Comedy"},
    {"tconst":"tt0052095","titleType":"tvMovie","primaryTitle":"Próbáld meg, Daddy!","originalTitle":"Próbáld meg, Daddy!","startYear":"1959","endYear":"\\N","runtimeMinutes":"60","genres":"Drama"},
    {"tconst":"tt0052273","titleType":"tvMovie","primaryTitle":"Tarzan and the Trappers","originalTitle":"Tarzan and the Trappers","startYear":"1960","endYear":"\\N","runtimeMinutes":"70","genres":"Action,Adventure"},
    {"tconst":"tt0052299","titleType":"tvMovie","primaryTitle":"Der Tod auf dem Rummelplatz","originalTitle":"Der Tod auf dem Rummelplatz","startYear":"1958","endYear":"\\N","runtimeMinutes":"45","genres":"Crime"},
    {"tconst":"tt0052537","titleType":"tvMovie","primaryTitle":"Affäre Dreyfus","originalTitle":"Affäre Dreyfus","startYear":"1959","endYear":"\\N","runtimeMinutes":"151","genres":"Biography"},
    {"tconst":"tt0052616","titleType":"tvMovie","primaryTitle":"The Bells of St. Mary's","originalTitle":"The Bells of St. Mary's","startYear":"1959","endYear":"\\N","runtimeMinutes":"90","genres":"Drama"},
    {"tconst":"tt0052620","titleType":"tvMovie","primaryTitle":"Der Besuch der alten Dame","originalTitle":"Der Besuch der alten Dame","startYear":"1959","endYear":"\\N","runtimeMinutes":"115","genres":"Comedy,Drama"},
    {"tconst":"tt0052917","titleType":"tvMovie","primaryTitle":"Im sechsten Stock","originalTitle":"Im sechsten Stock","startYear":"1954","endYear":"\\N","runtimeMinutes":"80","genres":"Comedy"},
    {"tconst":"tt0052988","titleType":"tvMovie","primaryTitle":"Land, das meine Sprache spricht","originalTitle":"Land, das meine Sprache spricht","startYear":"1959","endYear":"\\N","runtimeMinutes":"105","genres":"Drama"},
    {"tconst":"tt0053079","titleType":"tvMovie","primaryTitle":"The Moon and Sixpence","originalTitle":"The Moon and Sixpence","startYear":"1959","endYear":"\\N","runtimeMinutes":"\\N","genres":"Drama"},
    {"tconst":"tt0053107","titleType":"tvMovie","primaryTitle":"Neues aus dem sechsten Stock","originalTitle":"Neues aus dem sechsten Stock","startYear":"1954","endYear":"\\N","runtimeMinutes":"70","genres":"Crime"},
    {"tconst":"tt0053205","titleType":"tvMovie","primaryTitle":"The Race for Space","originalTitle":"The Race for Space","startYear":"1959","endYear":"\\N","runtimeMinutes":"55","genres":"Documentary"},
    {"tconst":"tt0053258","titleType":"tvMovie","primaryTitle":"There Will Be No Leave Today","originalTitle":"Segodnya uvolneniya ne budet","startYear":"1959","endYear":"\\N","runtimeMinutes":"45","genres":"Drama,Thriller"},
    {"tconst":"tt0053301","titleType":"tvMovie","primaryTitle":"Spiel im Schloß","originalTitle":"Spiel im Schloß","startYear":"1959","endYear":"\\N","runtimeMinutes":"115","genres":"\\N"},
    {"tconst":"tt0053348","titleType":"tvMovie","primaryTitle":"Experiment in Evil","originalTitle":"Le testament du Docteur Cordelier","startYear":"1959","endYear":"\\N","runtimeMinutes":"95","genres":"Drama,Horror,Sci-Fi"},
    {"tconst":"tt0053446","titleType":"tvMovie","primaryTitle":"Winterset","originalTitle":"Winterset","startYear":"1959","endYear":"\\N","runtimeMinutes":"90","genres":"Drama"},
    {"tconst":"tt0053474","titleType":"tvMovie","primaryTitle":"Åke och hans värld","originalTitle":"Åke och hans värld","startYear":"1959","endYear":"\\N","runtimeMinutes":"\\N","genres":"Drama"},
    {"tconst":"tt0053560","titleType":"tvMovie","primaryTitle":"Der 18. Geburtstag","originalTitle":"Der 18. Geburtstag","startYear":"1962","endYear":"\\N","runtimeMinutes":"47","genres":"\\N"},
    {"tconst":"tt0053567","titleType":"tvMovie","primaryTitle":"Abendstunde im Spätherbst","originalTitle":"Abendstunde im Spätherbst","startYear":"1960","endYear":"\\N","runtimeMinutes":"50","genres":"Drama"},
    {"tconst":"tt0053574","titleType":"tvMovie","primaryTitle":"Aftermath","originalTitle":"Aftermath","startYear":"1960","endYear":"\\N","runtimeMinutes":"22","genres":"\\N"},
    {"tconst":"tt0053607","titleType":"tvMovie","primaryTitle":"Architecture of Entertainment","originalTitle":"Architecture of Entertainment","startYear":"1960","endYear":"\\N","runtimeMinutes":"22","genres":"Documentary"},
    {"tconst":"tt0053647","titleType":"tvMovie","primaryTitle":"Between Two Rivers","originalTitle":"Between Two Rivers","startYear":"1960","endYear":"\\N","runtimeMinutes":"28","genres":"Documentary"},
    {"tconst":"tt0053692","titleType":"tvMovie","primaryTitle":"The Cape Canaveral Monsters","originalTitle":"The Cape Canaveral Monsters","startYear":"1960","endYear":"\\N","runtimeMinutes":"69","genres":"Horror,Sci-Fi"},
    {"tconst":"tt0053790","titleType":"tvMovie","primaryTitle":"Einer von sieben","originalTitle":"Einer von sieben","startYear":"1960","endYear":"\\N","runtimeMinutes":"60","genres":"Drama"},
    {"tconst":"tt0053805","titleType":"tvMovie","primaryTitle":"The Expendables","originalTitle":"The Expendables","startYear":"1962","endYear":"\\N","runtimeMinutes":"\\N","genres":"Action,Drama"},
    {"tconst":"tt0053812","titleType":"tvMovie","primaryTitle":"Die Falle","originalTitle":"Die Falle","startYear":"1960","endYear":"\\N","runtimeMinutes":"100","genres":"Crime,Drama"},
    {"tconst":"tt0053888","titleType":"tvMovie","primaryTitle":"Hamlet","originalTitle":"Hamlet, Prinz von Dänemark","startYear":"1960","endYear":"\\N","runtimeMinutes":"152","genres":"Drama,Mystery"},
    {"tconst":"tt0054036","titleType":"tvMovie","primaryTitle":"Die Lokalbahn","originalTitle":"Die Lokalbahn","startYear":"1960","endYear":"\\N","runtimeMinutes":"100","genres":"Comedy"},
    {"tconst":"tt0054046","titleType":"tvMovie","primaryTitle":"Madame Sans-Gêne","originalTitle":"Madame Sans-Gêne","startYear":"1960","endYear":"\\N","runtimeMinutes":"85","genres":"Drama,History"},
    {"tconst":"tt0054109","titleType":"tvMovie","primaryTitle":"Die Nachbarskinder","originalTitle":"Die Nachbarskinder","startYear":"1960","endYear":"\\N","runtimeMinutes":"36","genres":"\\N"},
    {"tconst":"tt0054155","titleType":"tvMovie","primaryTitle":"Papas neue Freundin","originalTitle":"Papas neue Freundin","startYear":"1960","endYear":"\\N","runtimeMinutes":"95","genres":"Comedy,Family"},
    {"tconst":"tt0054176","titleType":"tvMovie","primaryTitle":"Peter Pan","originalTitle":"Peter Pan","startYear":"1960","endYear":"\\N","runtimeMinutes":"100","genres":"Adventure,Comedy,Family"},
    {"tconst":"tt0054220","titleType":"tvMovie","primaryTitle":"Pust svetit","originalTitle":"Pust svetit","startYear":"1960","endYear":"\\N","runtimeMinutes":"40","genres":"Drama,War"},
    {"tconst":"tt0054261","titleType":"tvMovie","primaryTitle":"Rómeó, Júlia és a sötétség","originalTitle":"Rómeó, Júlia és a sötétség","startYear":"1986","endYear":"\\N","runtimeMinutes":"101","genres":"Drama"},
    {"tconst":"tt0054300","titleType":"tvMovie","primaryTitle":"The Shepherd of the Hills","originalTitle":"The Shepherd of the Hills","startYear":"1960","endYear":"\\N","runtimeMinutes":"30","genres":"Drama"},
    {"tconst":"tt0054334","titleType":"tvMovie","primaryTitle":"Spirit of the Alamo","originalTitle":"Spirit of the Alamo","startYear":"1960","endYear":"\\N","runtimeMinutes":"\\N","genres":"Biography,Documentary,History"},
    {"tconst":"tt0054448","titleType":"tvMovie","primaryTitle":"Der Vogelhändler","originalTitle":"Der Vogelhändler","startYear":"1960","endYear":"\\N","runtimeMinutes":"150","genres":"Music"},
    {"tconst":"tt0054551","titleType":"tvMovie","primaryTitle":"Jack Mortimer","originalTitle":"Jack Mortimer","startYear":"1961","endYear":"\\N","runtimeMinutes":"88","genres":"Crime"},
    {"tconst":"tt0054561","titleType":"tvMovie","primaryTitle":"The Power and the Glory","originalTitle":"The Power and the Glory","startYear":"1961","endYear":"\\N","runtimeMinutes":"90","genres":"Drama"},
    {"tconst":"tt0054626","titleType":"tvMovie","primaryTitle":"The Anatomist","originalTitle":"The Anatomist","startYear":"1956","endYear":"\\N","runtimeMinutes":"73","genres":"Drama,Horror"},
    {"tconst":"tt0054682","titleType":"tvMovie","primaryTitle":"Biographie eines Schokoladentages","originalTitle":"Biographie eines Schokoladentages","startYear":"1961","endYear":"\\N","runtimeMinutes":"58","genres":"Drama"},
    {"tconst":"tt0054952","titleType":"tvMovie","primaryTitle":"Gunfight at Black Horse Canyon","originalTitle":"Gunfight at Black Horse Canyon","startYear":"1961","endYear":"\\N","runtimeMinutes":"100","genres":"Western"},
    {"tconst":"tt0054955","titleType":"tvMovie","primaryTitle":"Gäst hos verkligheten","originalTitle":"Gäst hos verkligheten","startYear":"1961","endYear":"\\N","runtimeMinutes":"64","genres":"Drama"},
    {"tconst":"tt0054985","titleType":"tvMovie","primaryTitle":"Hollywood: The Golden Years","originalTitle":"Hollywood: The Golden Years","startYear":"1961","endYear":"\\N","runtimeMinutes":"52","genres":"Documentary,History"},
    {"tconst":"tt0055042","titleType":"tvMovie","primaryTitle":"Das kartenspiel","originalTitle":"Das kartenspiel","startYear":"1961","endYear":"\\N","runtimeMinutes":"93","genres":"Crime"},
    {"tconst":"tt0055063","titleType":"tvMovie","primaryTitle":"Die Kurve","originalTitle":"Die Kurve","startYear":"1961","endYear":"\\N","runtimeMinutes":"55","genres":"Crime"}]

  basket: object[] = []

  addToBasket(item: object) : void{
    if(this.basket.includes(item)){
      this.basket.splice(this.basket.indexOf(item), 1)
    }
    else{
      this.basket.push(item)
    }
    console.log(this.basket)
  }

  checkBasket(item: object) : boolean{
    return this.basket.includes(item)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
