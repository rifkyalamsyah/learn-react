// import './MenuRestro.css'

function Menurestro(){
    const styleMenuItem = {
        backgroundColor: "#e8e8e8",
        padding: "16px",
        color: "#000",
        borderRadius: "16px",
        marginBottom: "8px",
    }

    const menu = [
        {name: 'Ayam Bakar', price: 'Rp12.000'},
        {name: 'Ayam Goreng', price: 'Rp10.000'},
        {name: 'Soto Ayam', price: 'Rp8.000'},
    ]

    return(
        <>
        {
            menu.map((item, index) => {
                return(
                    <div style={styleMenuItem} key={index}>
                        <div><b>Menu:</b><em>{item.name}</em></div>
                        <div><b>Price:</b><em>{item.price}</em></div>
                    </div>
                )
            })
        }
        </>
    )
}

export default Menurestro