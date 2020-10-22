import React from 'react';
import '../../App.css';
import firsti from './preview_images/secondpre.jpg';
import secondi from './preview_images/bennpre.jpg';
import thridi from './preview_images/thirdpre.jpg';
import fourthi from './preview_images/shankspre.jpg';
import fifthi from './preview_images/emperorpre.jpg';
import sixthi from './preview_images/oldpre.jpg';
import otheri from './preview_images/otherupcpre.jpg';
import otherii from './preview_images/otheralltimepre.jpg';
import otheriii from './preview_images/otherstrongpre.jpg';
import { Link } from 'react-router-dom';

function Articlehgp() {
    return (
        <>
            <section className="Container">
                <Link to="/articlea">
                    <article className="Follow">
                        <img src={firsti}
                            alt="" />
                        <h3>
                            What You don't Know About Luffy's Crew
                    </h3>
                        <p>
                            One Piece's Monkey D. Luffy may be one of the show's most powerful pirates,
                            but that doesn't mean he could take down each of his enemies by himself.
                    </p>
                    </article>
                </Link>
                <Link to="/articleb">
                    <article className="Follow">
                        <img src={secondi}
                            alt="" />
                        <h3>
                            Most Underrated Character
                    </h3>
                        <p>
                            Benn Beckman is the first mate and an officer of the Red Hair Pirates.
                    </p>
                    </article>
                </Link>
                <Link to="/articlec">
                    <article className="Follow FollowRight">
                        <img src={thridi}
                            alt="" />
                        <h3>
                            Luffy Vs. Zoro
                    </h3>
                        <p>
                            Many argue that Zoro is a swordsman and Luffy would get cut if they went one on one.
                    </p>
                    </article>
                </Link>
                <Link to="/articled">
                    <article className="Follow">
                        <img src={fourthi}
                            alt="" />
                        <h3>
                            The Most Balanced Crew
                    </h3>
                        <p>
                            The Red Hair Pirates are an infamous and powerful pirate crew ruling in the New World,
                            captained by their leader Red-Haired Shanks, who is one of the Four Emperors.
                    </p>
                    </article>
                </Link>
                <Link to="/articlee">
                    <article className="Follow">
                        <img src={fifthi}
                            alt="" />
                        <h3>
                            All About the Yonkos
                    </h3>
                        <p>
                            The Yonkou (literally Four Emperors),
                            four of the world's most powerful pirates in the anime/manga series One Piece.
                    </p>
                    </article>
                </Link>
                <Link to="/articlef">
                    <article className="Follow FollowRight">
                        <img src={sixthi}
                            alt="" />
                        <h3>
                            Strong Characters From The Old Generation
                    </h3>
                        <p>
                            One Piece has seen the rise of countless pirates over different generations,
                            ranging from the times of the Pirate King, Gol D. Roger to Monkey D. Luffy.
                    </p>
                    </article>
                </Link>
            </section>
            <section className="BottomContainer">
                <h1 className="BottomHeader">Other Content...</h1>
                <article className="No_Follow">
                    <h3>Upcoming Anime 2020</h3>
                    <img src={otheri}
                        alt=""
                        className="OtherImg"
                    />
                    <p className="ArticleInfo">
                        Sometime in the 2010s, anime went from a niche interest to an integral part of the pop culture zeitgeist.
                        In short, anime is cool now in addition to being more accessible than ever outside of Japan, especially with streaming services taking it seriously. 2019 was a killer year for anime,
                        but the content flow never stops: from blockbuster movie releases to a slew of projects
                        from renowned director Masaaki Yuasa to the highly anticipated Evangelion 3.0 + 1.0, 2020 is shaping
                        up to be just as big of a year in anime. Whether you’re here for the adrenaline rush of a volleyball match in Haikyuu!! or ready to sit back and binge every Studio Ghibli film after HBO Max launches in May, we’ve compiled the 25 anime titles and events we’re most excited for this year.
                    </p>

                </article>
                <hr />

                <article className="No_Follow">
                    <h3>Strongest Anime Characters</h3>
                    <img src={otherii}
                        alt=""
                        className="OtherImg"
                    />
                    <p className="ArticleInfo">
                        Sometime in the 2010s, anime went from a niche interest to an integral part of the pop culture zeitgeist.
                        In short, anime is cool now in addition to being more accessible than ever outside of Japan, especially with streaming services taking it seriously. 2019 was a killer year for anime,
                        but the content flow never stops: from blockbuster movie releases to a slew of projects
                        from renowned director Masaaki Yuasa to the highly anticipated Evangelion 3.0 + 1.0, 2020 is shaping
                        up to be just as big of a year in anime. Whether you’re here for the adrenaline rush of a volleyball match in Haikyuu!! or ready to sit back and binge every Studio Ghibli film after HBO Max launches in May, we’ve compiled the 25 anime titles and events we’re most excited for this year.
                    </p>

                </article>

                <hr />

                <article className="No_Follow">
                    <h3>Most Popular Anime of All Time</h3>
                    <img src={otheriii}
                        alt=""
                        className="OtherImg"
                    />
                    <p className="ArticleInfo">
                        Sometime in the 2010s, anime went from a niche interest to an integral part of the pop culture zeitgeist.
                        In short, anime is cool now in addition to being more accessible than ever outside of Japan, especially with streaming services taking it seriously. 2019 was a killer year for anime,
                        but the content flow never stops: from blockbuster movie releases to a slew of projects
                        from renowned director Masaaki Yuasa to the highly anticipated Evangelion 3.0 + 1.0, 2020 is shaping
                        up to be just as big of a year in anime. Whether you’re here for the adrenaline rush of a volleyball match in Haikyuu!! or ready to sit back and binge every Studio Ghibli film after HBO Max launches in May, we’ve compiled the 25 anime titles and events we’re most excited for this year.
                    </p>

                </article>

            </section>
        </>
    )
}

export default Articlehgp;
