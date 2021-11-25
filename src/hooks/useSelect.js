import React, {useState,Fragment} from 'react';
import imagen from './lupa.png';
import styled from '@emotion/styled';

const Imagen = styled.img`
    max-width: 4%;
    margin-top: 1rem;
`;

const useSelect = (stateInicial,opciones) =>  {  // custom hook
    let verdad = true;

    const lupa = (verdad) ? <div>
        <Imagen
        src = {imagen}
        alt = 'imagen cripto'
        />
    </div>
    : null

    // state del custom hook
    const [state,actualizarState] = useState(stateInicial);
    // console.log(state)
    const SelectNoticias = () => (
        <Fragment> 
             {lupa} 
        <select
             className = 'browser-default'
             value = {state}
             onChange = {evento => actualizarState(evento.target.value)}
         >
             {/* <option value = ''>-Seleccione-</option> */}
             {opciones.map( opcion => (
                 <option key = {opcion.value} value = {opcion.value}> {opcion.label} </option>
             ))}
        </select>
        </Fragment>
    );
    return [state,SelectNoticias]
};

export default useSelect;


/// Api Key de News Api 033e9b82c7084c7986502e7a50ea1e23
// Encuentre fuentes que muestren noticias en un país específico. Las posibles opciones:
//  ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr  
//  lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za. 
//  Predeterminado: todos los países.

/*AD	Andorra	020	AND
AE	Emiratos Árabes Unidos	784	ARE
AF	Afganistán	004	AFG
AG	Antigua y Barbuda	028	ATG
AI	Anguila	660	AIA
AL	Albania	008	ALB
AM	Armenia	051	ARM
AN	Antillas Neerlandesas	530	ANT
AO	Angola	024	AGO
AQ	Antártida	010	ATA
AR	Argentina	032	ARG
AS	Samoa Americana	016	ASM
AT	Austria	040	AUT
AU	Australia	036	AUS
AW	Aruba	533	ABW
AX	Islas Áland	248	ALA
AZ	Azerbaiyán	031	AZE
BA	Bosnia y Herzegovina	070	BIH
BB	Barbados	052	BRB
BD	Bangladesh	050	BGD
BE	Bélgica	056	BEL
BF	Burkina Faso	854	BFA
BG	Bulgaria	100	BGR
BH	Bahréin	048	BHR
BI	Burundi	108	BDI
BJ	Benin	204	BEN
BL	San Bartolomé	652	BLM
BM	Bermudas	060	BMU
BN	Brunéi	096	BRN
BO	Bolivia	068	BOL
BR	Brasil	076	BRA
BS	Bahamas	044	BHS
BT	Bhután	064	BTN
BV	Isla Bouvet	074	BVT
BW	Botsuana	072	BWA
BY	Belarús	112	BLR
BZ	Belice	084	BLZ
CA	Canadá	124	CAN
CC	Islas Cocos	166	CCK
CF	República Centro-Africana	140	CAF
CG	Congo	178	COG
CH	Suiza	756	CHE
CI	Costa de Marfil	384	CIV
CK	Islas Cook	184	COK
CL	Chile	152	CHL
CM	Camerún	120	CMR
CN	China	156	CHN
CO	Colombia	170	COL
CR	Costa Rica	188	CRI
CU	Cuba	192	CUB
CV	Cabo Verde	132	CPV
CX	Islas Christmas	162	CXR
CY	Chipre	196	CYP
CZ	República Checa	203	CZE
DE	Alemania	276	DEU
DJ	Yibuti	262	DJI
DK	Dinamarca	208	DNK
DM	Domínica	212	DMA
DO	República Dominicana	214	DOM
DZ	Argel	012	DZA
EC	Ecuador	218	ECU
EE	Estonia	233	EST
EG	Egipto	818	EGY
EH	Sahara Occidental	732	ESH
ER	Eritrea	232	ERI
ES	España	724	ESP
ET	Etiopía	231	ETH
FI	Finlandia	246	FIN
FJ	Fiji	242	FJI
FK	Islas Malvinas	238	KLK
FM	Micronesia	583	FSM
FO	Islas Faroe	234	FRO
FR	Francia	250	FRA
GA	Gabón	266	GAB
GB	Reino Unido	826	GBR
GD	Granada	308	GRD
GE	Georgia	268	GEO
GF	Guayana Francesa	254	GUF
GG	Guernsey	831	GGY
GH	Ghana	288	GHA
GI	Gibraltar	292	GIB
GL	Groenlandia	304	GRL
GM	Gambia	270	GMB
GN	Guinea	324	GIN
GP	Guadalupe	312	GLP
GQ	Guinea Ecuatorial	226	GNQ
GR	Grecia	300	GRC
GS	Georgia del Sur e Islas Sandwich del Sur	239	SGS
GT	Guatemala	320	GTM
GU	Guam	316	GUM
GW	Guinea-Bissau	624	GNB
GY	Guayana	328	GUY
HK	Hong Kong	344	HKG
HM	Islas Heard y McDonald	334	HMD
HN	Honduras	340	HND
HR	Croacia	191	HRV
HT	Haití	332	HTI
HU	Hungría	348	HUN
ID	Indonesia	360	IDN
IE	Irlanda	372	IRL
IL	Israel	376	ISR
IM	Isla de Man	833	IMN
IN	India	356	IND
IO	Territorio Británico del Océano Índico	086	IOT
IQ	Irak	368	IRQ
IR	Irán	364	IRN
IS	Islandia	352	ISL
IT	Italia	380	ITA
JE	Jersey	832	JEY
JM	Jamaica	388	JAM
JO	Jordania	400	JOR
JP	Japón	392	JPN
KE	Kenia	404	KEN
KG	Kirguistán	417	KGZ
KH	Camboya	116	KHM
KI	Kiribati	296	KIR
KM	Comoros	174	COM
KN	San Cristóbal y Nieves	659	KNA
KP	Corea del Norte	408	PRK
KR	Corea del Sur	410	KOR
KW	Kuwait	414	KWT
KY	Islas Caimán	136	CYM
KZ	Kazajstán	398	KAZ
LA	Laos	418	LAO
LB	Líbano	422	LBN
LC	Santa Lucía	662	LCA
LI	Liechtenstein	438	LIE
LK	Sri Lanka	144	LKA
LR	Liberia	430	LBR
LS	Lesotho	426	LSO
LT	Lituania	440	LTU
LU	Luxemburgo	442	LUX
LV	Letonia	428	LVA
LY	Libia	434	LBY
MA	Marruecos	504	MAR
MC	Mónaco	492	MCO
MD	Moldova	498	MDA
ME	Montenegro	499	MNE
MG	Madagascar	450	MDG
MH	Islas Marshall	584	MHL
MK	Macedonia	807	MKD
ML	Mali	466	MLI
MM	Myanmar	104	MMR
MN	Mongolia	496	MNG
MO	Macao	446	MAC
MQ	Martinica	474	MTQ
MR	Mauritania	478	MRT
MS	Montserrat	500	MSR
MT	Malta	470	MLT
MU	Mauricio	480	MUS
MV	Maldivas	462	MDV
MW	Malawi	454	MWI
MX	México	484	MEX
MY	Malasia	458	MYS
MZ	Mozambique	508	MOZ
NA	Namibia	516	NAM
NC	Nueva Caledonia	540	NCL
NE	Níger	562	NER
NF	Islas Norkfolk	574	NFK
NG	Nigeria	566	NGA
NI	Nicaragua	558	NIC
NL	Países Bajos	528	NLD
NO	Noruega	578	NOR
NP	Nepal	524	NPL
NR	Nauru	520	NRU
NU	Niue	570	NIU
NZ	Nueva Zelanda	554	NZL
OM	Omán	512	OMN
PA	Panamá	591	PAN
PE	Perú	604	PER
PF	Polinesia Francesa	258	PYF
PG	Papúa Nueva Guinea	598	PNG
PH	Filipinas	608	PHL
PK	Pakistán	586	PAK
PL	Polonia	616	POL
PM	San Pedro y Miquelón	666	SPM
PN	Islas Pitcairn	612	PCN
PR	Puerto Rico	630	PRI
PS	Palestina	275	PSE
PT	Portugal	620	PRT
PW	Islas Palaos	585	PLW
PY	Paraguay	600	PRY
QA	Qatar	634	QAT
RE	Reunión	638	REU
RO	Rumanía	642	ROU
RS	Serbia y Montenegro	688	SRB
RU	Rusia	643	RUS
RW	Ruanda	646	RWA
SA	Arabia Saudita	682	SAU
SB	Islas Solomón	090	SLB
SC	Seychelles	690	SYC
SD	Sudán	736	SDN
SE	Suecia	752	SWE
SG	Singapur	702	SGP
SH	Santa Elena	654	SHN
SI	Eslovenia	705	SVN
SJ	Islas Svalbard y Jan Mayen	744	SJM
SK	Eslovaquia	703	SVK
SL	Sierra Leona	694	SLE
SM	San Marino	674	SMR
SN	Senegal	686	SEN
SO	Somalia	706	SOM
SR	Surinam	740	SUR
ST	Santo Tomé y Príncipe	678	STP
SV	El Salvador	222	SLV
SY	Siria	760	SYR
SZ	Suazilandia	748	SWZ
TC	Islas Turcas y Caicos	796	TCA
TD	Chad	148	TCD
TF	Territorios Australes Franceses	260	ATF
TG	Togo	768	TGO
TH	Tailandia	764	THA
TH	Tanzania	834	TZA
TJ	Tayikistán	762	TJK
TK	Tokelau	772	TKL
TL	Timor-Leste	626	TLS
TM	Turkmenistán	795	TKM
TN	Túnez	788	TUN
TO	Tonga	776	TON
TR	Turquía	792	TUR
TT	Trinidad y Tobago	780	TTO
TV	Tuvalu	798	TUV
TW	Taiwán	158	TWN
UA	Ucrania	804	UKR
UG	Uganda	800	UGA
US	Estados Unidos de América	840	USA
UY	Uruguay	858	URY
UZ	Uzbekistán	860	UZB
VA	Ciudad del Vaticano	336	VAT
VC	San Vicente y las Granadinas	670	VCT
VE	Venezuela	862	VEN
VG	Islas Vírgenes Británicas	092	VGB
VI	Islas Vírgenes de los Estados Unidos de América	850	VIR
VN	Vietnam	704	VNM
VU	Vanuatu	548	VUT
WF	Wallis y Futuna	876	WLF
WS	Samoa	882	WSM
YE	Yemen	887	YEM
YT	Mayotte	175	MYT
ZA	Sudáfrica	710	ZAF*/
 

