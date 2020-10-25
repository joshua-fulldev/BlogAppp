import React from 'react';
import Navbar from '../NavBar';
import Footer from '../FooterComponent';
import go from '../images/secondall.jpg';
import Side from '../SideContent';
import * as Bootstrap from 'react-bootstrap';
import logo from '../logo.png';
import Message from '../MessageComponent';
import Vote from '../VoteComponent';

function ArticleOne() {
    return (
        <div>
            <div className="Paage">
            <div className="Page">
                <div className="LeftPage">
                    <h1>Luffy and His Crew</h1>
                    <img src={go}
                        alt=""
                        className="MainImg" />
                    <p> The protagonists of the One Piece series are all the members of the Straw Hat Pirates (麦わらの一味, Mugiwara no Ichimi), a crew of ten pirates captained by Monkey D. Luffy. The crew's number increases throughout the series, as Luffy recruits new members. Once Usopp joins the Straw Hat Pirates, they gain their own ship, the Going Merry, which is later destroyed and replaced by a larger and more powerful vessel, the Thousand Sunny created by their shipwright Franky. Two years later, the Straw Hats gain a new fleet, called the Straw Hat Grand Fleet, consisting of 5,640 pirates from seven different crews; Luffy objects to the idea of being a fleet commander, and organizes his new army in a way that they may act independently, but when one crew is in trouble, the others must do what they can to help them.</p>

                    <h3>Monkey D. Luffy</h3>
                    <p>Main article: Monkey D. Luffy
                    Monkey D. Luffy (モンキー・D・ルフィ, Monkī Dī Rufi) is the primary protagonist of the One Piece series. At age seven, he admires and tries to join the pirates of the "Red Haired" Shanks. Ridiculed and rejected, he inadvertently eats their treasure, the Paramecia-type Gum-Gum Fruit (ゴムゴムの実, Gomu Gomu no Mi), which gives his body the properties of rubber. His reckless efforts ultimately lead him into grave peril causing Shanks to lose an arm while rescuing him. After this, Luffy gives up on joining Shanks, resolving instead to start a crew of his own and become King of the Pirates.[ch. 1] Displeased by Shanks spoiling his grandson, Garp takes Luffy to be raised by Curly Dadan and her mountain bandits, who he strong-arms into taking him in. During Luffy's time there, he becomes a sworn brother with Garp's other ward Ace, and local runaway noble Sabo.[ch. 582–589] Ten years later, and still wearing Shanks' treasured head covering, Luffy forms and captains his own pirate crew called The Straw Hat Pirates and sets sail for the Grand Line, quickly gaining infamy as "Straw Hat" Luffy (麦わらのルフィ, Mugiwara no Rufi).[ch. 2, 7, 96, 98] Eventually, after his strength proves insufficient to save Ace from execution, he spends two years on a secluded island, learning the use of the three colors of Haki as well as his rubber ability's fourth Gear from Silvers Rayleigh, before heading to the New World.[ch. 590–602] Due to his infamy, he is one of the pirates who are known as "The Worst Generation".

Luffy is voiced by Mayumi Tanaka in the anime series.[1] In the 4Kids Entertainment English adaptation, he is voiced by Erica Schroeder.[2] In the Funimation Entertainment English adaptation, his voice is supplied by Colleen Clinkenbeard.[3]</p>

                    <h3>Roronoa Zoro</h3>
                    <p>
                        Main article: Roronoa Zoro
                        Roronoa Zoro (ロロノア・ゾロ, named after François l'Olonnais) is a swordsman who uses up to three swords simultaneously, holding one in each hand and a third in his mouth.[ch. 3, 5, 28] To fulfill a promise to Kuina, his deceased childhood friend and rival, he aims to replace "Hawk Eye" Mihawk as the world's greatest swordsman.[ch. 5, 50] Traveling the seas in search of Mihawk and making a living as a bounty hunter, he becomes infamously known as "Pirate Hunter" Zoro (海賊狩りのゾロ, Kaizoku-Gari no Zoro). Eventually, he comes into conflict with Helmeppo. To prevent the harm of innocent civilians, Zoro allows himself to be incarcerated temporarily, while Helmeppo plots to have him killed. Zoro is saved from execution by Luffy in exchange for becoming his first crewman. At that point, Zoro makes it clear that he would turn on his captain if he ever stepped between him and his dream.[ch. 2–6] However, Zoro grows fond of his crew and after several defeats in their defense, his priorities change and he convinces Mihawk to take him on as a student.[ch. 51f., 485, 597] He is known for his awful sense of direction and constantly gets lost when traveling.

In the anime television series, his voice actor is Kazuya Nakai.[1] In the 4Kids English adaptation, his name is spelled Roronoa Zolo, and he is voiced by Marc Diraison.[2] In the Funimation English adaptation, his voice is supplied by Christopher Sabat.[3]</p>

                    <h3>Usopp</h3>
                    <p>
                        During his early childhood, Usopp (ウソップ, Usoppu) is abandoned by his father, Yasopp, who leaves to join the Red-Haired Pirates. As his mother, Bachina, falls ill, Usopp starts telling tall tales, expressing his hope that his father will return and take them out to sea. Even after his mother dies, Usopp does not blame his father for leaving. Despite his cowardly disposition, he strives to become a great pirate.[ch. 25, 41] Usopp is recognizable for his long nose, a reference to the fact that he tends to lie a lot. He is a gifted inventor, painter, and sculptor.[ch. 42, 106, 190] In combat, he relies primarily on slingshots to fire various kinds of ammunition with great precision in coordination with a set of lies and different other weapons giving him a unique fighting style named "The Usopp Arsenal".[ch. 332] To help the Straw Hats rescue Nico Robin, he achieves notoriety under his alter-ego "Sniper King, the King of Snipers" (狙撃の王様そげキング, Sogeki no Ō-sama Sogekingu), a hero sniper wearing a golden mask and cape. Eventually, after helping the Straw Hats liberate Dressrosa from Don Quixote Doflamingo's rule, he becomes infamous as "God" Usopp.[ch. 435]

In the anime series, his voice actor is Kappei Yamaguchi.[1] Jason Griffith and Sonny Strait provide his voice in the 4Kids and Funimation English adaptations, respectively.[3][7],</p>

                    <h3>Sanji</h3>
                    <p>
                        Born as a prince of Germa Kingdom, Vinsmoke Sanji (ヴィンスモーク・サンジ, Vinsumōku Sanji) is routinely ridiculed by his genetically enhanced siblings and is locked away by his father Judge for being a disgrace. With help from his sister Reiju, he escapes and flees the kingdom after it enters the East Blue and his father permits it.

                        While serving as an apprentice cook on a passenger ship, nine-year-old Sanji stands up to a boarding party of pirates led by the infamous "Red Foot" Zeff. During the encounter, Sanji is swept into the sea by a massive wave. Zeff jumps in after him because of their common dream of finding the All Blue (オールブルー, Ōru Burū), a legendary sea, containing every kind of fish in the world. While castaways together, the pirate saves Sanji's life yet again by giving him all of their food. After their eventual rescue, Sanji stays with Zeff for several years and helps him build a floating restaurant, the Baratie (バラティエ). Zeff in turn makes him a first-rate cook and teaches him his kick-based fighting style.[ch. 56–59] Mirroring Zeff, Sanji will never refuse a starving person a meal, and he uses only his legs when fighting to protect the hands he needs for cooking.[ch. 48, 370] He has a weakness for women and makes it a principle never to harm one, even if it means his death.[ch. 403] Eventually, he becomes infamous as "Black Leg" Sanji (黒脚のサンジ, Kuro Ashi no Sanji).[ch. 435] While training for a period of two years in Emporio Ivankov's Kamabakka Queendom (カマバッカ王国, Kamabakka Ōkoku), he develops the Sky Walk (空中歩行スカイ・ウォーク, Sukai Wōku), a variant of the Six Powers (六式, Rokushiki) technique Moonwalk (月歩, Geppo), which allows him to essentially run through air.[ch. 635] Sanji receives his own Raid Suit from his family that grants him the ability to turn invisible.[ch. 903]

                        Sanji's standard appearance is wearing a well-fitting black suit with a skinny black tie. His hair always covers one of his eyes and he is usually smoking a cigarette.

In the Japanese anime television series, he is voiced by Hiroaki Hirata.[8] In the 4Kids English adaptation, he is voiced by David Moo.[9] In the Funimation English adaptation, his voice is supplied by Eric Vale.[3]</p>


                    <h3>Nico Robin</h3>
                    <p>
                        Being raised in Ohara (オハラ), home of the world's oldest and largest library, Nico Robin (ニコ・ロビン, Niko Robin) becomes an archaeologist at the age of eight.[ch. 218,391f.] At some point she gains the power of the Paramecia-type Flower-Flower Fruit (ハナハナの実, Hana Hana no Mi), which allows her to have temporary copies of parts of her body, including her eyes and ears, which spring up on surfaces near her.[ch. 170] Behind her teachers' backs, she acquires from them the outlawed knowledge of how to translate the ancient stones called Ponegliffs (歴史の本文ポーネグリフ, Pōnegurifu, alt. Poneglyphs), which are scattered around the world. She comes to share their goal of finding the elusive Real Ponegliff (真の歴史の本文リオ・ポーネグリフ, Rio Pōnegurifu), which is said to tell the world's lost history.[ch. 218] However, the World Government finds out about these efforts and sends a battlefleet to stop them. Only Robin escapes the devastating attack that claims the lives of the island's entire population, including that of her mother.[ch. 218, 395] Called "Devil Child" (悪魔の子, Akuma no Ko), traumatized, and with a bounty on her head, Robin lives a life on the run, unable to trust anyone.[ch. 218] To survive, she cooperates with various pirates and other outlaws. She eventually joins Sir Crocodile’s Baroque Works group, using the codename "Ms. All-Sunday" (ミス・オールサンデー, Misu Ōrusandē)[ch. 398] and becomes their vice-president.[ch. 218] After Baroque Works falls apart, with nowhere else to go, she tags along with the Straw Hat Pirates[ch. 218] and grows so fond of them that she gives herself up to the Government in order to save them. After they discover her real reason for leaving, the Strawhat Pirates declare open war to get her back. She realizes that she has finally found people who will never sell her out and becomes part of the crew.[ch. 398] Two years later, Robin further hones her Devil Fruit powers to the point she can create a full-bodied duplicate of herself.

In the anime television series, Robin's voice actress is Yuriko Yamaguchi.[17] In the 4Kids English adaptation, her Baroque Works codename was changed to Miss Sunday and she is voiced by Veronica Taylor.[12] In the Funimation English adaptation, her voice is supplied by Stephanie Young.[18]</p>

                    <h3>Franky</h3>
                    <p>
                        The son of pirate parents who abandon him at age nine, Cutty Flam (カティ・フラム, Kati Furamu), nicknamed Franky (フランキー, Furankī), is taken in as an apprentice by shipwright Tom, who built Pirate King Gol D Roger's ship Oro Jackson and also secretly holds the plans for a devastating ancient weapon.[ch. 344, 354, 427] Franky's recklessness eventually provides an opportunity for World Government agents seeking these plans.[ch. 356] Attempting to rescue his master, Franky suffers severe injuries and only survives by rebuilding parts of his body using pieces of scrap metal, turning himself into a cola-powered cyborg with strength.[ch. 336, 339, 352, 357f.] After gaining notoriety as "Cyborg" Franky (サイボーグ フランキー, Saibōgu Furankī), and to fulfill his dream of sailing a ship he built around the world, he constructs the Thousand Sunny, a brigantine-rigged sloop-of-war, for the Straw Hat Pirates and joins the crew.[ch. 435–437]

In the anime television series, his voice actor is Kazuki Yao.[19] Patrick Seitz provides his voice in the Funimation English adaptation.[20]</p>

                    <h3>Brook</h3>
                    <p>
                        Already a pirate before the time of Roger, "Humming" Brook (ブルック, Burukku) first enters the Grand Line as vice-captain of the music-themed Rumbar Pirates. Leaving their pet the infant whale Laboon at Reverse Mountain, they promise to return after sailing around the world.[ch. 487] Instead, they are annihilated, with one exception. The power of the Paramecia-type Revive-Revive Fruit (ヨミヨミの実, Yomi Yomi no Mi) allows "Dead Bones" Brook to rise again and live a second life as a skeleton.[ch. 443] Fifty years later, Brook's goal is still to fulfill his late crew's promise, and to that end he joins the Straw Hat Pirates.[ch. 459] He is an excellent musician, who says that he can play any instrument, although he is usually seen playing the violin.[ch. 486] Brook can even influence people with his music to the point of making them fall asleep.[ch. 454] While separated from the other Straw Hats, and incognito as "Soul King" Brook, he gains world fame, filling concert halls with fans.[ch. 600] He is also a skilled fencer who uses a shikomizue (a Japanese cane sword) in battle.[ch. 454] His reduced weight allows him to jump extraordinarily high and to run across water.[ch. 443, 493] Eventually, Brook learns how to use his Devil Fruit ability to leave his skeleton body and explore his surroundings as a disembodied soul.[ch. 629]

                        The idea of a skeleton musician was first conceived by Oda in 2000, about the time of Laboon's introduction and more than half a decade before the first appearance of Brook.[21]

He is voiced by Chō.[22] Ian Sinclair provides his voice in the Funimation English adaptation.</p>

                    <h3>Jimbei</h3>
                    <p>
                        Jimbei (ジンベエ, Jinbē) is a yakuza-esque whale shark-type fish-man.[ch. 528] A master of Fish-Man Karate (魚人空手, Gyojin Karate), he is capable of manipulating water as if it were a tangible cloth.[ch. 546] Jimbei can communicate with fish, an ability more usually associated with merfolk, and enlist the help of whale sharks.[ch. 547–549] After growing up in a rough part of Fish-Man Island, Jimbei first joins the island's royal army and later the Sun Pirates; he becomes captain following the death of Fisher Tiger.[ch. 624] In exchange for the World Government granting him Warlord-status and amnesty to the Sun Pirates, Jimbei eventually disbands the crew.[ch. 69] He resigns the position to side against the Government during its war with the Whitebeard Pirates, the protectors of Fish-Man Island.[ch. 557] Two years later, he enlists the help of the Straw Hat Pirates to prevent the New Fish-Man Pirates' coup d'état against Fish-Man Island's royal family. Jimbei then turns down an invitation from Luffy to join his crew, having already aligned with the Big Mom Pirates after the death of Whitebeard.[ch. 649] After cutting ties with Big Mom, he joins the Straw Hat Pirates as the crew's helmsman.[ch. 863][ch. 976]

In the Japanese anime television series, Jimbei is initially voiced by Daisuke Gōri, later by Katsuhisa Hōki.[23][24] In the Funimation English adaptation, his voice is supplied by Daniel Baugh.</p>

                <Vote />
                <Message />
                
                    
                </div>
                <div className="RightPage">
                    <h1>Other Content</h1>
                    <Side />
                </div>  
                         
            </div>
            
            <Footer />
        </div>
          
        </div>

    );
}

export default ArticleOne;