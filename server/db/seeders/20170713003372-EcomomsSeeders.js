


module.exports = {
    up: function (queryInterface, Sequelize) {

        queryInterface.bulkInsert('Ecomoms', [{
            name:"Summer Infant Complete Nursery Care Kit",
            category: "Bathing & Grooming" ,
            description:"The Complete Nursery Care Kit includes 21 grooming and health care items essential for any nursery. A durable storage case is included so parents can keep each item conveniently close at hand at home or on-the-go.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81kdfyFQRfL._SX522_.jpg",
            buyUrl:"https://www.amazon.com/Summer-Infant-Complete-Nursery-White/dp/B00BRHSCLE/ref=sr_1_3?s=apparel&ie=UTF8&qid=1500505044&sr=1-3&nodeID=7141123011&psd=1&keywords=baby%2Btub&th=1Fridababy Bitty Bundle of Joy Mom & Baby Healthcare and Grooming Gift Kit",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"USDA Organic Baby Diaper Rash Ointment",
            category: "Bathing & Grooming" ,
            description:"For new born infants and up. Using only ingredients, Greenicare baby diaper ointment helps to nourish and recondition the soft and sensitive skin of new-born infants, soothing any irritations or rashes that may be caused by the pressure from diapers, providing relief for your child's sensitive skin.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71Ytq-O5eQL._SX522_.jpg",
            buyUrl:"https://www.amazon.com/MOMiN-Organic-Ointment-Natural-Prevention/dp/B00J7X9VE2/ref=sr_1_3?s=apparel&ie=UTF8&qid=1500505618&sr=1-3&nodeID=7141123011&psd=1&keywords=diaper+rash+cream	 ",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Puracy Natural Baby Shampoo & Body Wash",
            category: "Bathing & Grooming" ,
            description:"Puracy Natural Baby Shampoo & Body Wash is a gentle blend of clinical-grade cleansers, emollients, and a dash of essential oils.Featuring Coco Glycinate, the gentlest natural (coconut-based) cleanser available, your child will be clean and irritant-free during bath time. Our world-class blend of ingredients also includes Himalayan Pink Sea Salt, a natural mineral which hydrates and balances your baby's skin. Enjoy the soft, refreshing aromas while cleansing away the day's messes.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71p9CLj7UjL._SL1500_.jpg",
            buyUrl:"https://www.amazon.com/Puracy-Natural-Tear-Free-Sulfate-Free-Developed/dp/B00SGP6316/ref=sr_1_7_s_it?s=hpc&ie=UTF8&qid=1500505799&sr=1-7&keywords=baby+shampoo+and+body+wash	 ",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Eco-friendly Crawling Pad",
            category: "For Fun" ,
            description:"",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61Tc6lKr4JL._SY355_.jpg",
            buyUrl:"https://www.amazon.com/SyGyn-Children-Learning-education-Eco-friendly/dp/B01M4M6E2A/ref=sr_1_7_s_it?s=hpc&ie=UTF8&qid=1500506094&sr=1-7&keywords=baby+play+mat	 ",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Eco Swaddling Blanket in Winter White",
            category: "Handy Helper" ,
            description:"This Eco Swaddling Blanket is made with oxygen bleached 100% Organic Cotton Fleece that is so soft and cozy!.Perfectly pure just like a newborn babe! A perfect blanket for the cooler seasons!",
            imgUrl: "https://img1.etsystatic.com/000/1/6058634/il_570xN.276688645.jpg",
            buyUrl:"https://www.etsy.com/listing/83433159/swaddling-blanket-organic-baby-blanket?&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_b-home_and_living-bedding-blankets_and_throws-baby_blankets&utm_custom1=a82ab3fb-4352-4ee8-8381-e2fffa5a58cd&gclid=EAIaIQobChMI_qeV-MCW1QIVTDyBCh3J-wKMEAQYAyABEgLmPPD_BwE",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Ultrasonic Cool and Warm Mist Humidifiers",
            category: "Handy Helper" ,
            description:"Ultrasonic Cool and Warm Mist Alternative- marsboy Ultrasonic Cool and Warm Mist Humidifiers can provide you both cool mist in summer and warm mist in winter! Adjustable mist output, choose whatever you like all year around! Refresh your home and office efficiently!",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51zoNpQFfNL._SL1000_.jpg",
            buyUrl:"https://www.amazon.com/Ultrasonic-Humidifiers-Diffuser-Operation-Cleaning/dp/B06Y2G17YP/ref=sr_1_1_s_it?s=baby-products&ie=UTF8&qid=1500507863&sr=1-1&keywords=eco+friendly+humidifier	 ",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"White Noise App",
            category: "Handy Helper" ,
            description:"Pick your favorite sound to relax and calm your mind.  Listen to pouring rain, crashing waves on a beach, or create your own perfect soundscape.",
            imgUrl: "",
            buyUrl:"http://www.tmsoft.com/white-noise/",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Evenflo Feeding Classic Glass Twist Bottles",
            category: "Kitchen" ,
            description:"With a new twist on an iconic classic, Evenflo feeding's glass bottle offers style on top of superior sanitizing, recycling, and sustainability . The tempered glass bottle includes a classic slow flow soft silicone nipple with micro air vents to help prevent nipple collapse.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61kWcLcJcbL._SX522_.jpg",
            buyUrl:"https://www.amazon.com/Evenflo-Feeding-Classic-Glass-Bottles/dp/B00N9X4TYI/ref=sr_1_5_s_it?s=baby-products&ie=UTF8&qid=1500508666&sr=1-5&keywords=glass+baby+bottles",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Medela Breastmilk Bottle Set",
            category: "Kitchen" ,
            description:"Medela polypropylene breast milk bottles are made without BPA, designed to retain breast milk's beneficial properties. Compatible with all Medela breast pumps, so you can pump, store and feed with one container. Great for long term storage. Dishwasher safe. Measure the exact amount of milk you're pumping with the ounce and millimeter markers. Screw on lids for leak proof storage, travel and freezing. Travel cap keeps nipple clean. Includes (3) bottles; (3) wide based medium-flow nipples; (3) collars, solid lids & caps.",
            imgUrl:"https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/049b374e-a616-459b-bf39-caa784563c8b.jpg._CB334685830_.jpg",
            buyUrl:"https://www.amazon.com/gp/product/B001V9EVCM/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001V9EVCM&linkCode=as2&tag=bestprodtag111046-20",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Bambu Baby's Feeding Spoons",
            category: "Kitchen" ,
            description:"The award-winning bambu KIDS collection offers the benefits of bamboo in a range of safe feeding products, free from dyes and chemicals, designed and sized for small hands and mouths. The handle is designed for parents while the feeding end is designed for baby-sized mouths. These feeding spoons smooth natural surface come in a set of 2. This way you can throw a few in your purse, a few in your drawer, and probably a few behind the couch. Made by bambu, a values-driven company focused on renewable materials and sustainable business practices",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51zs2TSeEXL._SY355_.jpg",
            buyUrl:"https://www.amazon.com/Bambu-Babys-Feeding-Spoons-Count/dp/B003781T16",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Stokke Tripp Trapp Baby Set",
            category: "Kitchen" ,
            description:"The Baby Set™ can easily be attached to the Tripp Trapp® chair to allow a baby as young as six months old to join the family meal at the dining table.",
            imgUrl: "https://s7d2.scene7.com/is/image/BedBathandBeyond/9888616174939p?hei=2000&wid=2000&qlt=50,1",
            buyUrl:"https://www.buybuybaby.com/store/product/stokke-reg-tripp-trapp-reg-baby-set-153-in-natural/1016174939?skuId=16174939&mcid=PS_googlepla_nonbrand_highchairs_online&product_id=16174939&product_channel=online&adtype=pla&adpos=1o2&creative=86803054860&device=c&matchtype=&network=g&gclid=EAIaIQobChMI_p_C2MqW1QIVgzqBCh0LawI1EAQYAiABEgI6evD_BwE",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Nestpark Portable Drink and Baby Formula Mixer",
            category: "Kitchen" ,
            description:"MAKES THE SMOOTHEST MIXED DRINKS OR WE'LL SEND YOUR MONEY BACK! -Want to finally get rid of all those clumps and lumps in your powder & formula mixes? You’ve found the solution; Our durable, fast and easy, tornado hand mixer is perfect",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61LbVdB6ezL._SL1313_.jpg",
            buyUrl:"https://www.amazon.com/Nestpark-Portable-Drink-Formula-Mixer/dp/B01E45VBKY/ref=sr_1_1?s=baby-products&ie=UTF8&qid=1500510176&sr=1-1-spons&keywords=formula+mixer&psc=1	 ",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Bee Esstentials Bib Set",
            category: "Kitchen" ,
            description:"Super soft and adorable, our 100% organic cotton bib sports our easy signature lap shoulder style so it slides off mess-free in the moments you need it most. All bibs have a knit terry backing.",
            imgUrl: "http://s7d9.scene7.com/is/image/BurtsBeesBaby/LY11178_Heather%20Grey?$mainNew$",
            buyUrl:"http://www.burtsbeesbaby.com/Bee-Essentials-Set-of-4-Bibs/LY11178-HTG-OS.html?gclid=EAIaIQobChMIltKtg8uW1QIV1zyBCh0NIwInEAYYAyABEgLMKfD_BwE	 ",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Charlie Banana 6 Diapers Plus 12 Inserts",
            category: "Necessities" ,
            description:"Charlie Banana 2-in-1 eco diapering system contains 6 diapers with organic cotton lining with 12 washable hemp inserts. one size: fitting babies from 0 to 30 months depending on the baby size. Hybrid option to use a washable insert or a disposable insert. Charlie banana diaper adjust to your baby ever changing feature with a safe snap system. great for everyday and overnight use. hemp inserts are highly absorbent making Charlie banana 2-in1 reusable diapering system a trusted choice by mothers all over the world.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/919NgWVqcpL._SX522_.jpg",
            buyUrl:"https://www.amazon.com/Charlie-Banana-Diapers-Inserts-Organic/dp/B00MTZM6M4/ref=sr_1_10?s=apparel&ie=UTF8&qid=1500504579&sr=1-10&nodeID=7141123011&psd=1&keywords=Charlie+Banana	 ",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"WaterWipes",
            category: "Necessities" ,
            description:"With such a gentle design, these wipes can be used for several cleaning purposes, including diapering, hand and mouth cleaning, quick body washes and breastfeeding hygiene, and they're safe enough to be used by anyone in the family. The hypoallergenic, soft wipes make a great cleaning solution for individuals with skin sensitivities.",
            imgUrl: "http://www.toysrus.com/graphics/product_images/pTRU1-20442751enh-z6.jpg",
            buyUrl:"http://www.toysrus.com/product/index.jsp?productId=56479906",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Diaper Bag Backpack for Baby Care",
            category: "Necessities" ,
            description:"DURABLE & WATERPROOF : This diaper bag is made with high quality fabric that is durable and waterproof ,which makes you easy to wipe clean. MUTIPLE COMPARTMENTS & LARGE CAPACITY: Separated storage pockets allow you to organize all your supplies and your baby’s supplies easily.And it’s roomy enough for holding essential items you want to carry for baby.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81W8cMM5nBL._SX522_.jpg",
            buyUrl:"https://www.amazon.com/Backpack-Multi-Functional-Changing-Insulated-Waterproof/dp/B072LLH6NN/ref=sr_1_15_s_it?s=baby-products&ie=UTF8&qid=1500510934&sr=1-15&keywords=diaper+backpack",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Lullaby Earth 2-Stage Super Lightweight Mattress",
            category: "Nursery" ,
            description:"a lightweight design,waterproof outer with seamless edges firm support,no harmful chemicals or allergens fits in cribs and toddler beds.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61s3jmf54XL._SL1500_.jpg  ",
            buyUrl:"https://www.amazon.com/dp/B007I0K532?tag=blvisitor-20",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Oeuf Fawn Crib and Bassinet System Conversion",
            category: "Nursery" ,
            description:"The Fawn conversion kit turns the Fawn crib into a day-bed style toddler bed.The Fawn crib and bassinet system starts as a bassinet on wheels and can be converted into a full sized crib. This modern, eco-friendly design is both practical and chic. This 2-in-1 crib/bassinet convert grows with your child and will get use for years to come.",
            imgUrl: "http://lghttp.34344.nexcesscdn.net/80100D2/lgmodern/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/f/a/fawn_conversion_white_legs2.jpg",
            buyUrl:"http://www.modernnursery.com/oeuf-fawn-crib-and-bassinet-system-conversion-kit?utm_source=google&utm_medium=cse&utm_term=OE-FAWNCC-1FBCK01&gclid=EAIaIQobChMIn7G7stGW1QIVBJd-Ch0QiAcfEAQYBSABEgIRNvD_BwE	 ",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Oeuf Eco-Friendly Changing Pad",
            category: "Nursery" ,
            description:"This pad is made of renewable plant-based certified eco-foam (which substitutes plant oils for petroleum-based oils). An extra-sturdy support board, and a Damask cloth cover with waterproof backing make this pad sturdy and easy to clean",
            imgUrl: "https://www.oeufnyc.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/a/natural-mattress-white1_1.jpg",
            buyUrl:"http://www.yliving.com/oeuf-oeuf-eco-friendly-changing-pad.html?source=pla_gg_1455421870_oeuf-oeuf-eco-friendly-changing-pad_718684556_44404427664_device:c&utm_medium=pla&utm_source=cpc&scid=scplp1455421870&sc_intid=1455421870&gclid=EAIaIQobChMI3r35_tGW1QIVTB2BCh1zDgzIEAQYAyABEgJPe_D_BwE",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            name:"Petit Collage Deluxe Bamboo Mobile",
            category: "Nursery" ,
            description:"A modern addition to any child's room, this Petit Collage mobile is laser cut from sustainably harvested bamboo plywood, an earth friendly renewable resource. This deluxe bamboo mobile also features 100 percent wool felt elephant ears that easily slot into place adding a pop of color to the room.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/319y4WPZeVL.jpg",
            buyUrl:"https://www.amazon.com/Petit-Collage-Deluxe-Bamboo-Elephant/dp/B005143TE4/ref=sr_1_1_s_it?s=baby-products&ie=UTF8&qid=1500512177&sr=1-1&keywords=eco+friendly+mobile	 ",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Ecomoms');
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.
         Example:
         return queryInterface.bulkDelete('Person', null, {});
         */
    }
};

