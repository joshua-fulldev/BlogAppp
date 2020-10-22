import React from 'react';
import otheri from './PreviewArticleComponents/preview_images/otherupcpre.jpg';
import otherii from './PreviewArticleComponents/preview_images/otheralltimepre.jpg';
import otheriii from './PreviewArticleComponents/preview_images/otherstrongpre.jpg';
import { Link } from 'react-router-dom';
import '../App.css';

function SideComponent() {
    return (
        <>
            <a href="https://www.thrillist.com/entertainment/nation/new-anime-2020" target="_blank">
                <article className="SideContent">
                    <h3>Upcoming Anime 2020</h3>
                    <img src={otheri}
                        alt=""
                        className="SideImage"
                    />
                    <p className="">
                        Sometime in the 2010s, anime went from a niche interest to an integral part of the pop culture zeitgeist.
                        In short, anime is cool now in addition to being more accessible than ever outside of Japan, especially with streaming services taking it seriously. 2019 was a killer year for anime,
                        but the content flow never stops: from blockbuster movie...
                    </p>

                </article>
            </a>
            <hr />

            <a href="https://www.thrillist.com/entertainment/nation/new-anime-2020" target="_blank">
                <article className="SideContent">
                    <h3>Strongest Anime Characters</h3>
                    <img src={otherii}
                        alt=""
                        className="SideImage"
                    />
                    <p className="">
                        Sometime in the 2010s, anime went from a niche interest to an integral part of the pop culture zeitgeist.
                        In short, anime is cool now in addition to being more accessible than ever outside of Japan, especially with streaming services taking it seriously. 2019 was a killer year for anime,
                        but the content flow never stops: from blockbuster movie...
                    </p>

                </article>
            </a>

            <hr />

            <a href="https://www.thrillist.com/entertainment/nation/new-anime-2020" target="_blank">
                <article className="SideContent">
                    <h3>Most Popular Anime of All Time</h3>
                    <img src={otheriii}
                        alt=""
                        className="SideImage"
                    />
                    <p className="">
                        Sometime in the 2010s, anime went from a niche interest to an integral part of the pop culture zeitgeist.
                        In short, anime is cool now in addition to being more accessible than ever outside of Japan, especially with streaming services taking it seriously. 2019 was a killer year for anime,
                        but the content flow never stops: from blockbuster movie...
                    </p>

                </article>
            </a>
        </>
    )
}

export default SideComponent;