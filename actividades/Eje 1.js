function eje1() {
    var compra = new Number();
    var descuento = new Number();
    var tipo = new String();
    document.write("Escribe el total de la compra",'<BR/>');
    compra = Number(prompt("Escribe el total de la compra"));
    document.write("Selecciona categoria",'<BR/>');
    document.write("Tipo A 10%",'<BR/>');
    document.write("Tipo B 15%",'<BR/>');
    document.write("Tipo C 20%",'<BR/>');
    tipo =(prompt("Selecciona categoria",'Tipo A   Tipo B   Tipo C'));
    if (tipo=="Tipo A") {
        descuento = compra*0.1;
    } else {
        if (tipo=="Tipo B") {
            descuento = compra*0.15;
        } else {
            if (tipo=="Tipo C") {
                descuento = compra*0.20;
            } else {
                document.write("Esa categoria no existe",'<BR/>');
            }
        }
    }
    document.write("El total a pagar ya con el descuento aplicado es: $",compra-descuento,'<BR/>');
    document.write("El descuento aplicado es: $",descuento,'<BR/>');
}   