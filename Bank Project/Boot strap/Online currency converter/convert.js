
function INRConverter()
{
document.converter.dollar.value = document.converter.rupee.value * 0.014;
document.converter.euro.value = document.converter.rupee.value * 0.011;
document.converter.pound.value = document.converter.rupee.value * 0.0099;
document.converter.yen.value = document.converter.rupee.value * 1.49;
}

function USDConverter()
{
document.converter.rupee.value = document.converter.dollar.value *73.42;
document.converter.euro.value = document.converter.dollar.value * 0.680;
document.converter.pound.value = document.converter.dollar.value * 0.488;
document.converter.yen.value = document.converter.dollar.value * 112.36;
}
function JPYConverter()
{
document.converter.rupee.value = document.converter.yen.value * 0.67;
document.converter.dollar.value = document.converter.yen.value * 0.0089;
document.converter.pound.value = document.converter.yen.value * 0.00434;
document.converter.euro.value = document.converter.yen.value * 0.00605;
}
function GBPConverter()
{
document.converter.rupee.value = document.converter.pound.value *101.11;
document.converter.dollar.value = document.converter.pound.value * 2.049;
document.converter.euro.value = document.converter.pound.value * 1.394;
document.converter.yen.value = document.converter.pound.value * 230.27;
}
function EURConverter()
{
document.converter.rupee.value = document.converter.euro.value * 87.09;
document.converter.dollar.value = document.converter.euro.value * 1.470;
document.converter.pound.value = document.converter.euro.value * 0.717;
document.converter.yen.value = document.converter.euro.value * 165.192;
}

