function Footer(){
    const date = new Date();
    return(
        <div className="fixed-bottom mb-3">
            créé par Andemion 2024 {date.toLocaleDateString()}
        </div>
    );
}

export default Footer;