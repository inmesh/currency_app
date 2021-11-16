import React from 'react'

export default function CurrDropdown(props) {

    function onChange(e) {
        return props.onChange(e)
    }
    
    return(
        <select id='currency' name={props.direction} onChange={onChange} value={props.default}>
            <option>{props.direction} currency..</option>
            {/* <option>--- CRYPTO ---</option>
            <option value="BTC" label="Bitcoin">BTC</option>
            <option value="ETH" label="Ethereum">ETH</option>
            <option value="LTC" label="Litecoin">LTC</option>
            <option value="XRP" label="Ripples">XRP</option>
            <option>--- NON-CRYPTO ---</option> */}
            <option value="USD" label="US dollar">USD</option>
            <option value="EUR" label="Euro">EUR</option>
            <option value="ILS" label="Israeli new shekel">ILS</option>
            <option value="JPY" label="Japanese yen">JPY</option>
            <option value="GBP" label="Pound sterling">GBP</option>
            <option value="AED" label="United Arab Emirates dirham">AED</option>
            <option value="AFN" label="Afghan afghani">AFN</option>
            <option value="ALL" label="Albanian lek">ALL</option>
            <option value="AMD" label="Armenian dram">AMD</option>
            <option value="AOA" label="Angolan kwanza">AOA</option>
            <option value="ARS" label="Argentine peso">ARS</option>
            <option value="AUD" label="Australian dollar">AUD</option>
            <option value="AZN" label="Azerbaijani manat">AZN</option>
            <option value="BIH" label="Bosnia and Herzegovina convertible mark">BIH</option>
            <option value="BDT" label="Bangladeshi taka">BDT</option>
            <option value="BGN" label="Bulgarian lev">BGN</option>
            <option value="BHD" label="Bahraini dinar">BHD</option>
            <option value="BIF" label="Burundian franc">BIF</option>
            <option value="BND" label="Brunei dollar">BND</option>
            <option value="BOB" label="Bolivian boliviano">BOB</option>
            <option value="BRL" label="Brazilian real">BRL</option>
            <option value="BSD" label="Bahamian dollar">BSD</option>
            <option value="BWP" label="Botswana pula">BWP</option>
            <option value="BYR" label="Belarusian ruble">BYR</option>
            <option value="CAD" label="Canadian dollar">CAD</option>
            <option value="CDF" label="Congolese franc">CDF</option>
            <option value="CHF" label="Swiss franc">CHF</option>
            <option value="CLP" label="Chilean peso">CLP</option>
            <option value="CNY" label="Chinese yuan">CNY</option>
            <option value="COP" label="Colombian peso">COP</option>
            <option value="CRC" label="Costa Rican colón">CRC</option>
            <option value="CUC" label="Cuban convertible peso">CUC</option>
            <option value="CVE" label="Cape Verdean escudo">CVE</option>
            <option value="CZK" label="Czech koruna">CZK</option>
            <option value="DJF" label="Djiboutian franc">DJF</option>
            <option value="DKK" label="Danish krone">DKK</option>
            <option value="DOP" label="Dominican peso">DOP</option>
            <option value="DZD" label="Algerian dinar">DZD</option>
            <option value="EGP" label="Egyptian pound">EGP</option>
            <option value="ERN" label="Eritrean nakfa">ERN</option>
            <option value="ETB" label="Ethiopian birr">ETB</option>
            <option value="FJD" label="Fijian dollar">FJD</option>
            <option value="GEL" label="Georgian lari">GEL</option>
            <option value="GHS" label="Ghanaian cedi">GHS</option>
            <option value="GMD" label="Gambian dalasi">GMD</option>
            <option value="GNF" label="Guinean franc">GNF</option>
            <option value="GTQ" label="Guatemalan quetzal">GTQ</option>
            <option value="GYD" label="Guyanese dollar">GYD</option>
            <option value="HKD" label="Hong Kong dollar">HKD</option>
            <option value="HNL" label="Honduran lempira">HNL</option>
            <option value="HKD" label="Hong Kong dollar">HKD</option>
            <option value="HRV" label="Croatian kuna">HRV</option>
            <option value="HTG" label="Haitian gourde">HTG</option>
            <option value="HUF" label="Hungarian forint">HUF</option>
            <option value="IDR" label="Indonesian rupiah">IDR</option>
            <option value="INR" label="Indian rupee">INR</option>
            <option value="IQD" label="Iraqi dinar">IQD</option>
            <option value="IRR" label="Iranian rial">IRR</option>
            <option value="ISK" label="Icelandic króna">ISK</option>
            <option value="JMD" label="Jamaican dollar">JMD</option>
            <option value="JOD" label="Jordanian dinar">JOD</option>
            <option value="KES" label="Kenyan shilling">KES</option>
            <option value="KGS" label="Kyrgyzstani som">KGS</option>
            <option value="KHR" label="Cambodian riel">KHR</option>
            <option value="KMF" label="Comorian franc">KMF</option>
            <option value="KRW" label="South Korean won">KRW</option>
            <option value="KYD" label="Cayman Islands dollar">KYD</option>
            <option value="KZT" label="Kazakhstani tenge">KZT</option>
            <option value="LAK" label="Lao kip">LAK</option>
            <option value="LBP" label="Lebanese pound">LBP</option>
            <option value="LKR" label="Sri Lankan rupee">LKR</option>
            <option value="LRD" label="Liberian dollar">LRD</option>
            <option value="LSL" label="Lesotho loti">LSL</option>
            <option value="LYD" label="Libyan dinar">LYD</option>
            <option value="MAD" label="Moroccan dirham">MAD</option>
            <option value="MDL" label="Moldovan leu">MDL</option>
            <option value="MGA" label="Malagasy ariary">MGA</option>
            <option value="MKD" label="Macedonian denar">MKD</option>
            <option value="MMK" label="Burmese kyat">MMK</option>
            <option value="MNT" label="Mongolian tögrög">MNT</option>
            <option value="MOP" label="Macanese pataca">MOP</option>
            <option value="MUR" label="Mauritian rupee">MUR</option>
            <option value="MVR" label="Maldivian rufiyaa">MVR</option>
            <option value="MWK" label="Malawian kwacha">MWK</option>
            <option value="MXN" label="Mexican peso">MXN</option>
            <option value="MYR" label="Malaysian ringgit">MYR</option>
            <option value="MZN" label="Mozambican metical">MZN</option>
            <option value="NAD" label="Namibian dollar">NAD</option>
            <option value="NGN" label="Nigerian naira">NGN</option>
            <option value="NIO" label="Nicaraguan córdoba">NIO</option>
            <option value="NOK" label="Norwegian krone">NOK</option>
            <option value="NPR" label="Nepalese rupee">NPR</option>
            <option value="NZD" label="New Zealand dollar">NZD</option>
            <option value="OMR" label="Omani rial">OMR</option>
            <option value="PAB" label="Panamanian balboa">PAB</option>
            <option value="PEN" label="Peruvian sol">PEN</option>
            <option value="PGK" label="Papua New Guinean kina">PGK</option>
            <option value="PHP" label="Philippine peso">PHP</option>
            <option value="PKR" label="Pakistani rupee">PKR</option>
            <option value="PLN" label="Polish złoty">PLN</option>
            <option value="PYG" label="Paraguayan guaraní">PYG</option>
            <option value="QAR" label="Qatari riyal">QAR</option>
            <option value="RON" label="Romanian leu">RON</option>
            <option value="RSD" label="Serbian dinar">RSD</option>
            <option value="RUB" label="Russian ruble">RUB</option>
            <option value="RWF" label="Rwandan franc">RWF</option>
            <option value="SAR" label="Saudi riyal">SAR</option>
            <option value="SCR" label="Seychelles rupee">SCR</option>
            <option value="SDG" label="Sudanese pound">SDG</option>
            <option value="SEK" label="Swedish krona">SEK</option>
            <option value="SGD" label="Singapore dollar">SGD</option>
            <option value="SLL" label="Sierra Leonean leone">SLL</option>
            <option value="SOS" label="Somali shilling">SOS</option>
            <option value="SRD" label="Surinamese dollar">SRD</option>
            <option value="SSP" label="South Sudanese pound">SSP</option>
            <option value="STD" label="São Tomé and Príncipe dobra">STD</option>
            <option value="SVC" label="Salvadoran colón">SVC</option>
            <option value="SYP" label="Syrian pound">SYP</option>
            <option value="SZL" label="Swazi lilangeni">SZL</option>
            <option value="THB" label="Thai baht">THB</option>
            <option value="TJS" label="Tajikistani somoni">TJS</option>
            <option value="TMT" label="Turkmenistan manat">TMT</option>
            <option value="TND" label="Tunisian dinar">TND</option>
            <option value="TRY" label="Turkish lira">TRY</option>
            <option value="TTD" label="Trinidad and Tobago dollar">TTD</option>
            <option value="TWD" label="New Taiwan dollar">TWD</option>
            <option value="TZS" label="Tanzanian shilling">TZS</option>
            <option value="UAH" label="Ukrainian hryvnia">UAH</option>
            <option value="UGX" label="Ugandan shilling">UGX</option>
            <option value="URY" label="Uruguayan peso">URY</option>
            <option value="UZS" label="Uzbekistani soʻm">UZS</option>
            <option value="VND" label="Vietnamese đồng">VND</option>
            <option value="XAF" label="Central African CFA franc">XAF</option>
            <option value="XOF" label="West African CFA franc">XOF</option>
            <option value="XPF" label="CFP franc">XPF</option>
            <option value="YER" label="Yemeni rial">YER</option>
            <option value="ZAR" label="South African rand">ZAR</option>
        </select>
    )
}