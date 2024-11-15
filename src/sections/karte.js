
function Karte({ season }) {

    return (
        <div className={`map ${season}-bg`} id="karte">
            <h3>Altstadt auf der Karte</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43128.30105498199!2d8.655740571283467!3d47.49928655451059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a999d17e052bd%3A0x14770a4c434bb9db!2sAltstadt%2C%208400%20Winterthur!5e0!3m2!1sde!2sch!4v1731675073307!5m2!1sde!2sch"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                title="Altstadt Karte"
            ></iframe>
        </div>
    )
}
export default Karte;