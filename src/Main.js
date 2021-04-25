import archangel from './images/stmichael.jpg';
import mamamary from './images/virginmary.jpg';
import sanjose from './images/stjoseph.jpg';
import divinechild from './images/santonino.jpg';

const Main = (props) => {
    return (
        <main>
            <article>
            <h2>SAINTS</h2>
            <p>
                Saints are the heroes of the Catholic faith. They lived lives in holiness, dedicated to serving God and spreading His message of salvation. Indeed, many Catholic saints courageously met their deaths simply because of their faith. Today, the saints serve as examples for all Catholics, showing us how to lead a more satisfying, more spiritual life in communion with our Lord and Savior, Jesus Christ. They are reminders that this life will come to an end, and only what was done for Christ will have a lasting reward. Each saint’s story is a fascinating one. They lived at different times in different places throughout history, but they all shared a love of God that has been meticulously documented through the teachings of the Catholic Church.
            </p>
            </article>
            <aside>
                <h2>FAVOURITE PHOTOS</h2>
                <img src={archangel} className="fav-pic" alt="st michael" />
                <img src={mamamary} className="fav-pic" alt="virgin mary" />
                <img src={sanjose} className="fav-pic" alt="st joseph" />
                <img src={divinechild} className="fav-pic" alt="santo nino" />
            </aside>
        </main>
    )
}

export default Main;
