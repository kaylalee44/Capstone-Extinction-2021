import React from "react";
import PopUp from "../story/popup";

export default function MakeAChange() {
    return (
        <div>
            <MakeAChangeTitle />
            <div className="change-divider"></div>
            <div className="change-rows">
                <ChangeCard tips="Educate Family &amp; Friends" desc="Spread awareness about local and global ecoystems." article1="20 Ways to Raise Awareness" href1="http://www.animalplanet.com/helping-pets/roar/awareness/" source1="Animal Planet" article2="Mission Animal Rescue: Raise Awareness" href2="https://kids.nationalgeographic.com/explore/nature/mission-animal-rescue/raise-awareness/" source2="National Geographic" />
                <ChangeCard tips="Recycle &amp; Compost" desc="Recycling and composting are ways in which to reduce landfill waste. Composting can help crops and plants gorw, while recycling helps protect natural resources." article1="How Recycling Protects our Animals" href1="https://homeguides.sfgate.com/recycling-protects-animals-humans-79784.html" source1="SF Gate" article2="Protect Endangered Species by Reducing Litter" href2="http://www.dwswa.org/recycle-reuse-articles/2018/10/30/protect-endangered-and-imperiled-species-by-reducing-litter" source2="Dalton-Whitfield Solid Waste Authority" />
                <ChangeCard tips="Purchase Sustainable Products" desc="Look to buy products from companies that have focused on creating their products through green methods." article1="Sustainable Purchasing" href1="https://www.nwf.org/Get-Involved/Live-Green/Sustainable-Purchasing" source1="National Wildlife Federation" article2="Endangered Species Threatened by Unsustainable Palm Oil Production" href2="https://www.worldwildlife.org/stories/endangered-species-threatened-by-unsustainable-palm-oil-production" source2="World Wildlife Federation" />
            </div>
            <div className="change-rows">
                <ChangeCard tips="Reduce Water Consumption" desc="Clean water is needed for wild animals. Don't put chemicals into toilets or storm drains. Using less water keeps more in our ecosystem and helps keep wetlands topped up for animals." article1="Conserve Water" href1="https://www.worldanimalfoundation.com/advocate/how-to-help-animals/params/post/1282480/conserve-water" source1="World Animal Foundation" article2="How to Conserve Water" href2="https://www.wildlifetrusts.org/actions/how-conserve-water" source2="The WildLife Trusts" />
                <ChangeCard tips="Reduce Carbon Footprint" desc="Walking, public transportation, bicycle, and carpooling are ways to reduce your carbon footprint. Consider reducing food waste, buying only the necessary amount, and look toward moving toward renewable energy." article1="35 Easiet Ways to Reduce Your Carbon Footprint" href1="https://blogs.ei.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/" source1="Columbia University" article2="How to Reduce Your Carbon Footprint" href2="https://www.nytimes.com/guides/year-of-living-better/how-to-reduce-your-carbon-footprint" source2="New York Times" />
                <ChangeCard tips="Don't Buy Plastic Products" desc="Reuse containers and take reusable bags. Plastic often goes into ocean and kills fish and other wildlife. Use recyclable products as a substitute." article1="6 Ways Plastic is Harming Animals, the Planet, and Us" href1="https://www.onegreenplanet.org/environment/how-plastic-is-harming-animals-the-planet-and-us/" source1="One Green Planet" article2="Wildlife Over Waste" href2="https://environmentamerica.org/feature/ame/wildlife-over-waste" source2="Environment America" />
            </div>
            <div className="change-divider divider2"></div>
            <NonprofitTitle />
            <div className="change-rows">
                <NonprofitCard org="U.S. Fish and Wildlife Service" quote="“As the principal federal partner responsible for administering the Endangered Species Act (ESA), we take the lead in recovering and conserving our nation's imperiled species by fostering partnerships, employing scientific excellence, and developing a workforce of conservation leaders.” - U.S. Fish and Wildlife Service Website" volunteer="https://www.fws.gov/volunteers/" involved="https://www.fws.gov/refuges/get-involved/" />
                <NonprofitCard org="World Wildlife Fund" quote="“As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.” - WWF Website" donolink="https://support.worldwildlife.org/site/SPageServer?pagename=main_onetime&s_src=AWE1700OQ18618A01526RX" involved="https://support.worldwildlife.org/site/SPageServer?pagename=can_actions" donation="Donate to WWF" />
                <NonprofitCard org="National Wildlife Federation" quote="“The National Wildlife Federation, America's largest and most trusted organization, works across the country to unite Americans from all walks of life in giving wildlife a voice. We've been on the front lines for wildlife since 1936, fighting for the conservation values that are woven into the fabric of our nation's collective heritage.” - NWF Heritage" donolink="https://support.nwf.org/page/9384/donate/1" donation="Donate to NWF" involved="https://www.nwf.org/Get-Involved/More-Ways-to-Give" />
            </div>
            <div className="change-divider divider2"></div>
            <RelatedArticlesTitle />
            <ArticleContainer />
        </div>
    );
}

function MakeAChangeTitle() {
    return(
        <div>
            <img id="red-panda-img" className="red-panda-img" src="img/red-panda.png" alt="A red panda" />
            <div className="change-title">
                <h1>YOU CAN MAKE A CHANGE</h1>
                <p>There are ways that you can help out in your daily life to make an impact on these animal habitats and livelihood. By making a change now, you can make strides in protecting these threatened species.</p>
            </div>
        </div>
    );
}

function ChangeCard(props) {
    return(
        <div className="change-card">
            <div className="change-card-content">
                <p className="card-tip"><strong>{props.tips}</strong></p>
                <p>{props.desc}</p>
                <div className="article-container">
                    <p>Related Articles:</p>
                    <a href={props.href1} target="_blank" rel="noreferrer">{props.article1}</a>
                    <p className="sources"><i>{props.source1}</i></p>
                    <a href={props.href2} target="_blank" rel="noreferrer">{props.article2}</a>
                    <p className="sources"><i>{props.source2}</i></p>
                </div>
            </div>
        </div>
    );
}

function NonprofitTitle() {
    return(
        <div className="nonprofit-title">
            <h1>NON PROFIT ORGANIZATIONS</h1>
            <p>Here are some organizations that we believe are contributing greatly to the animal endangerment crisis and align with our mission.</p>
        </div>
    );
}

function NonprofitCard(props) {
    let button;
    if (props.org === "U.S. Fish and Wildlife Service") {
        button = <VolunteerButton volunteer={props.volunteer}/>
    } else {
        button = <DonateButton donolink={props.donolink} donation={props.donation} />
    }
    return(
        <div className="change-card nonprofit-card">
            <div className="change-card-content">
                <p className="card-tip"><strong>{props.org}</strong></p>
                <p className="org-quote">{props.quote}</p>
            </div>
            <div className="nonprofit-btns">
                {button}
                <GetInvolvedButton involved={props.involved} />
            </div>

        </div>
    )
}

function VolunteerButton(props) {
    return(
        <div>
            <form action={props.volunteer} method="get" target="_blank">
                <button className="org-button">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.825 16.9625C11.0125 16.9625 11.1875 16.95 11.3625 16.925C11.95 18.3625 13.3625 19.375 15 19.375C16.6375 19.375 18.05 18.3625 18.6375 16.925C18.8125 16.95 19 16.9625 19.175 16.9625C21.3375 16.9625 23.1 15.2 23.1 13.0375C23.1 12.15 22.7875 11.3 22.2625 10.625C22.8 9.95 23.1 9.1 23.1 8.2125C23.1 6.05 21.3375 4.2875 19.175 4.2875C18.9875 4.2875 18.8125 4.3 18.6375 4.325C18.05 2.8875 16.6375 1.875 15 1.875C13.3625 1.875 11.95 2.8875 11.3625 4.325C11.1875 4.3 11 4.2875 10.825 4.2875C8.6625 4.2875 6.9 6.05 6.9 8.2125C6.9 9.1 7.2125 9.95 7.7375 10.625C7.2 11.3 6.8875 12.15 6.8875 13.0375C6.8875 15.2 8.65 16.9625 10.825 16.9625ZM15 16.875C14.225 16.875 13.6 16.2625 13.575 15.5L13.725 14.1375C14.125 14.2875 14.55 14.375 15 14.375C15.45 14.375 15.8875 14.2875 16.2875 14.1375L16.425 15.5C16.4 16.2625 15.775 16.875 15 16.875ZM18.375 14.2125C18.6 14.375 18.875 14.4625 19.175 14.4625C19.9625 14.4625 20.6125 13.825 20.6125 13.025C20.6125 12.475 20.2875 11.975 19.7875 11.7375L18.6875 11.2125C18.5375 12.1375 18.05 12.9375 17.3625 13.5L18.375 14.2125ZM18.3625 7.03748C18.6125 6.87498 18.8875 6.78748 19.175 6.78748C19.9625 6.78748 20.6 7.42498 20.6 8.21248C20.6 8.76248 20.2875 9.24998 19.775 9.49998L18.675 10.025C18.525 9.09998 18.0375 8.29998 17.3375 7.73748L18.3625 7.03748ZM16.425 5.75C16.4 4.9875 15.775 4.375 15 4.375C14.225 4.375 13.6 4.9875 13.575 5.75L13.725 7.1125C14.125 6.9625 14.55 6.875 15 6.875C15.45 6.875 15.8875 6.9625 16.2875 7.1125L16.425 5.75ZM10.825 6.78748C11.125 6.78748 11.4 6.87498 11.625 7.03748L12.6375 7.73748C11.95 8.29998 11.4625 9.09998 11.3125 10.025L10.2125 9.49998C9.7125 9.24998 9.3875 8.76248 9.3875 8.21248C9.3875 7.42498 10.0375 6.78748 10.825 6.78748ZM11.3125 11.225L10.2125 11.75C9.71251 12 9.38751 12.4875 9.40001 13.025C9.40001 13.8125 10.0375 14.45 10.825 14.45C11.1125 14.45 11.3875 14.3625 11.6375 14.2L12.65 13.5125C11.95 12.95 11.4625 12.15 11.3125 11.225ZM15 28.125C21.2125 28.125 26.25 23.0875 26.25 16.875C20.0375 16.875 15 21.9125 15 28.125ZM3.75 16.875C3.75 23.0875 8.7875 28.125 15 28.125C15 21.9125 9.9625 16.875 3.75 16.875ZM18.05 25.075C18.9375 22.7 20.825 20.8 23.2 19.925C22.3125 22.3 20.425 24.1875 18.05 25.075ZM6.79999 19.925C9.17499 20.8125 11.075 22.7 11.95 25.075C9.57499 24.1875 7.68749 22.3 6.79999 19.925Z" fill="#E9E3CB"/>
                    </svg>
                    <div><strong>Volunteer Opportunities</strong></div>
                </button>
            </form>
        </div>
    );
}

function DonateButton(props) {
    return(
        <div>
            <form action={props.donolink} method="get" target="_blank">
                <button className="org-button">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM12.4625 11.8375C12.4625 12.75 13.175 13.3625 15.3875 13.925C17.5875 14.5 19.95 15.45 19.9625 18.2C19.95 20.2125 18.45 21.3 16.55 21.6625V23.75H13.625V21.625C11.75 21.2375 10.175 20.0375 10.05 17.9125H12.2C12.3125 19.0625 13.1 19.9625 15.1 19.9625C17.2375 19.9625 17.725 18.8875 17.725 18.225C17.725 17.325 17.2375 16.4625 14.8 15.8875C12.0875 15.2375 10.225 14.1125 10.225 11.875C10.225 9.9875 11.7375 8.7625 13.625 8.3625V6.25H16.5375V8.3875C18.5625 8.8875 19.5875 10.425 19.65 12.1H17.5125C17.4625 10.875 16.8125 10.05 15.0875 10.05C13.45 10.05 12.4625 10.7875 12.4625 11.8375Z" fill="#E9E3CB"/>
                    </svg>

                    <div><strong>{props.donation}</strong></div>
                </button>
            </form>
        </div>
    );
}

function GetInvolvedButton(props) {
    return(
        <div>
            <form action={props.involved} method="get" target="_blank">
                <button className="org-button">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7499 4.0625C18.7499 5.4375 17.6249 6.5625 16.2499 6.5625C14.8749 6.5625 13.7499 5.4375 13.7499 4.0625C13.7499 2.6875 14.8749 1.5625 16.2499 1.5625C17.6249 1.5625 18.7499 2.6875 18.7499 4.0625ZM8.125 28.4375L11.625 10.8125L9.375 11.6875V15.9375H6.875V10.0625L13.1875 7.38749C14.4 6.87499 15.8 7.32499 16.5 8.43749L17.75 10.4375C18.75 12.1875 20.75 13.4375 23.125 13.4375V15.9375C20.375 15.9375 17.875 14.6875 16.25 12.8125L15.5 16.5625L18.125 19.0625V28.4375H15.625V20.9375L13 18.4375L10.75 28.4375H8.125Z" fill="#E9E3CB"/>
                    </svg>
                    <div><strong>Get Involved</strong></div>
                </button>
            </form>
        </div>
    );
}

function RelatedArticlesTitle() {
    return(
        <div className="nonprofit-title">
            <h1>RELATED ARTICLES</h1>
            <p>Learn more about what's going on in the world.</p>
        </div>
    );
}

function ArticleContainer() {
    return(
        <div className="article-carousel">
            <ArticleCard link="https://www.theguardian.com/environment/2020/sep/25/sliding-towards-extinction-koala-may-be-given-endangered-listing-as-numbers-plummet" id="koala-img" src="img/koala.png"  alt="A koala" title="&quot;Sliding Towards Extinction&quot;: Koala...Numbers Plummet" source="The Guardian" date="September 25, 2020" />
            <ArticleCard link="https://www.cnn.com/2020/09/17/world/captive-breeding-species-cte-scn-spc-intl/index.html" id="red-monkey-img" src="img/red-monkey.png" alt="A red monkey" title="How Captivity Saved these Animals from Extinction" source="CNN" date="September 17, 2020" />
            <ArticleCard link="https://www.resourcesmag.org/archives/endangered-species-act-under-threat/" id="resource-radio-img" src="img/resources-radio.png" alt="A podcast called resources radio" title="Is the Endangered Speices Act Under Threat?" source="Resources Magazine" date="March 18, 2020" />
        </div>
    );
}

function ArticleCard(props) {
    return(
        <div className="article-card">
            <a href={props.link} target="_blank" rel="noreferrer">
                <img id={props.id} className="article-img" src={props.src}  alt={props.alt} />
                <div className="article-info">
                    <p className="article-title">{props.title}</p>
                    <div className="article-extra">
                        <p className="article-source"><i>{props.source}</i></p>
                        <p className="article-date">{props.date}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}