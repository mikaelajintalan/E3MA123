import archangel from './images/stmichael.jpg';
import mamamary from './images/virginmary.jpg';
import sanjose from './images/stjoseph.jpg';
import divinechild from './images/santonino.jpg';

const Main = (props) => {
    return (
        <main>
            <article>
            <h1>SAINTS</h1>
            <p>
                Saints are the heroes of the Catholic faith. They lived lives in holiness, dedicated to serving God and spreading His message of salvation. Indeed, many Catholic saints courageously met their deaths simply because of their faith. Today, the saints serve as examples for all Catholics, showing us how to lead a more satisfying, more spiritual life in communion with our Lord and Savior, Jesus Christ. They are reminders that this life will come to an end, and only what was done for Christ will have a lasting reward. Each saint’s story is a fascinating one. They lived at different times in different places throughout history, but they all shared a love of God that has been meticulously documented through the teachings of the Catholic Church. View our comprehensive documentation, from the Blessed Virgin Mary, the Queen of Saints, to St Anthony of Padua, and other saints who serve as theologians and doctors of the Church.
            </p>
            </article>
            <aside>
                <h1>FAVOURITE PHOTOS</h1>
                <img src={archangel} className="Saint" alt="st michael" />
                <img src={mamamary} className="Saint" alt="virgin mary" />
                <img src={sanjose} className="Saint" alt="st joseph" />
                <img src={divinechild} className="Saint" alt="santo nino" />
            </aside>
        </main>
    )
}

export default Main;
