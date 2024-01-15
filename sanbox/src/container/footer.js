function Footer(){
    const date = new Date();
    return(
        <div>
            créé par Andemion 2024 {date.toLocaleDateString()}
        </div>
    );
}

export default Footer;