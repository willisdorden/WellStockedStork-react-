

module.exports = {
    up: function (queryInterface, Sequelize) {

        queryInterface.bulkInsert('Chicmoms', [{
            callid:1,
            name:"Aquascale 3 in 1 Digital Scale",
            category: "Bathing & Grooming" ,
            description:"The Aqua Scale is a digital tub to monitor your child's health and well-being. It has a patented technology that adjusts for water and displays your child's weight.",
            imgUrl: "http://www.toysrus.com/graphics/product_images/pTRU1-21067633_alternate1_dt.jpg",
            buyUrl:"http://www.toysrus.com/product/index.jsp?productId=61949586",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:1,
            name:"Fridababy Bitty Bundle of Joy",
            category: "Bathing & Grooming" ,
            description:"The Bitty Bundle of Joy from Fridababy is the perfect fuss-busting starter kit for new parents. Featuring NoseFrida, the pediatrician recommended booger buster, the Bitty Bundle of Joy also comes equipped with Windi, the all-natural gas passer, and NailFrida for those intimidating baby mani-pedis.",
            imgUrl: "http://www.toysrus.com/graphics/tru_prod_images/Fridababy-Bitty-Bundle-of-Joy--pTRU1-23586227dt.jpg",
            buyUrl:"https://www.target.com/p/fridababy-bitty-bundle-of-joy/-/A-50729283#lnk=sametab",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:1,
            name:"Triple Paste Medicated Ointment for Diaper Rash",
            category: "Bathing & Grooming" ,
            description:"Triple Paste medicated ointment is the premium choice to help treat and prevent diaper rash. This ointment provides a fragrance free and hypoallergenic option for treating babies with raw and irritated skin. Every baby deserves the best diaper ointment. Triple Paste is everything you need to comfort your baby's diaper rash.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81WxLY065bL._SY355_.jpg",
            buyUrl:"https://www.amazon.com/Triple-Paste-Medicated-Ointment-16-Ounce/dp/B000GCL2B8/ref=sr_1_cc_9_a_it?s=aps&ie=UTF8&qid=1500505618&sr=1-9-catcorr&keywords=diaper%2Brash%2Bcream&th=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:1,            name:"3-in-1 Baby Shampoo",
            category: "Bathing & Grooming" ,
            description:"KEEP YOUR BABY HAPPY, HEALTHY & SAFE: No Harsh Chemicals. No Parabens, No Phosphates, No Sulfates. NO MORE CRYING WITH TEAR FREE Baby Wash - Try the tear test by washing your face with the baby shampoo and body wash",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71CkEFGU8fL._SY355_.jpg",
            buyUrl:"https://www.amazon.com/Baby-Shampoo-Bubble-Bath-Body/dp/B01672BWHO/ref=sr_1_3?s=hpc&ie=UTF8&qid=1500505799&sr=1-3-spons&keywords=baby+shampoo+and+body+wash&psc=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:2,            name:"Skip Hop Silver Lining Cloud Activity Gym",
            category: "For Fun" ,
            description:"Enjoy plush playtime on our big, cozy cloud! Every cloud has a silver lining and this dreamy baby activity gym is no exception! Offering hours of plush playtime, it features a soft color palette to complement modern decor along with pops of neon to stimulate baby's sight.",
            imgUrl: "http://www.toysrus.com/graphics/product_images/pTRU1-24714263dt.jpg",
            buyUrl:"http://www.toysrus.com/product/index.jsp?productId=108706116&cp=2255957.2273443.68241026.3670997&parentPage=family",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:3,
            name:"BABYBJORN Cotton Bouncer Bliss",
            category: "Handy Helper" ,
            description:"The light gray base and frame creates a soft impression, and the monotone fabric seat provides a luxurious feel that will be an attractive detail in your home. Bouncer Bliss is available in a plush cotton quilting and soft, child-friendly mesh - two extra cozy fabrics for a soft start to life. Bouncer Bliss gives your baby a cozy place to rest and play. The ergonomically shaped seat provides proper support to your baby's back, neck and head.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71i38aKhjtL._SY450_.jpg",
            buyUrl:"https://www.amazon.com/dp/B06XPBB1TH/ref=sxbs_sxwds-stvp_3_s_it?pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2972357942&pd_rd_wg=BLrQo&pf_rd_r=46GTZ9D5HJ7W0BH1SN13&pf_rd_s=desktop-sx-bottom-slot&pf_rd_t=301&pd_rd_i=B06XPBB1TH&pd_rd_w=EGbjO&pf_rd_i=bouncer&pd_rd_r=4VGSXSE1P6B6V6FCDRY0&ie=UTF8&qid=1500506441&sr=3&th=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:3,
            name:"Eco Swaddling Blanket in Winter White",
            category: "Handy Helper" ,
            description:"This Eco Swaddling Blanket is made with oxygen bleached 100% Organic Cotton Fleece that is so soft and cozy!.Perfectly pure just like a newborn babe! A perfect blanket for the cooler seasons!",
            imgUrl: "https://img1.etsystatic.com/000/1/6058634/il_570xN.276688645.jpg",
            buyUrl:"https://www.etsy.com/listing/83433159/swaddling-blanket-organic-baby-blanket?&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_b-home_and_living-bedding-blankets_and_throws-baby_blankets&utm_custom1=a82ab3fb-4352-4ee8-8381-e2fffa5a58cd&gclid=EAIaIQobChMI_qeV-MCW1QIVTDyBCh3J-wKMEAQYAyABEgLmPPD_BwE",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:3,
            name:"Dyson Humidifer",
            category: "Handy Helper" ,
            description:"The Dyson Humidifier in White/Silver exposes every drop of water to an ultraviolet light through patented Ultraviolet Cleanse technology. The cooling humidifier can keep you cool in summer while hydrating the winter air.",
            imgUrl: "https://target.scene7.com/is/image/Target/49174308?wid=520&hei=520&fmt=pjpeg",
            buyUrl:"http://www.dyson.com/air-treatment/humidifiers.aspx?&mkwid=sPinltkZo_dc&pcrid=159737321954&pkw=%2Bhumidifer&pmt=b&productid=&gclid=EAIaIQobChMIusu59sKW1QIV2AyBCh05yA01EAAYASAAEgK21vD_BwE",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:3,
            name:"Wave Baby Premium Soothing Sound Machine",
            category: "Handy Helper" ,
            description:"Add a sense of calm to your baby’s nursery with this stylish sound machine that helps drown out household noises and promotes more restful sleep. Each of the 6 sound settings were carefully selected with your baby in mind to help you create the ideal mood for naptime or bedtime.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41YK84T7kdL.jpg",
            buyUrl:"https://www.amazon.com/Wave-Premium-Soothing-Sound-Machine/dp/B0711FK8FZ/ref=sr_1_24_s_it?s=hpc&ie=UTF8&qid=1500508098&sr=1-24&keywords=white+noise+baby",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:3,
            name:"Infant Optics DXR-8 Video Baby Monitor",
            category: "Handy Helper" ,
            description:"The Infant Optics DXR-8 Video Monitor is the first baby monitor with interchangeable lens technology. Three separate lens types normal, wide angle and zoom allow you to choose the most suitable focal length and viewing angle for the specific environment.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81PbGDE5jcL._SX355_.jpg",
            buyUrl:"https://www.amazon.com/gp/product/B00ECHYTBI/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00ECHYTBI&linkCode=as2&tag=bestprodtag111046-20",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Philips Avent Natural Newborn Baby Bottle",
            category: "Kitchen" ,
            description:"Philips Avent SCD296/02 BPA Free Natural Infant Starter Set is the most natural way to start bottle feeding. The 5 BPA-free Natural bottles included in this kit feature wide breast-shaped nipples with unique comfort petals promoting natural latch on and making it easy to combine breast and bottle feeding.  ",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/G/01/aplus/detail-page/Philips_AVENT_Natural_Infant_Starter_Set_1.jpg",
            buyUrl:"https://www.amazon.com/gp/product/B00E1CI2TO/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00E1CI2TO&linkCode=as2&tag=bestprodtag111046-20",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Medela Breastmilk Bottle Set",
            category: "Kitchen" ,
            description:"Medela polypropylene breast milk bottles are made without BPA, designed to retain breast milk's beneficial properties. Compatible with all Medela breast pumps, so you can pump, store and feed with one container. Great for long term storage. Dishwasher safe. Measure the exact amount of milk you're pumping with the ounce and millimeter markers. Screw on lids for leak proof storage, travel and freezing.",
            imgUrl:"https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/049b374e-a616-459b-bf39-caa784563c8b.jpg._CB334685830_.jpg",
            buyUrl:"https://www.amazon.com/gp/product/B001V9EVCM/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001V9EVCM&linkCode=as2&tag=bestprodtag111046-20",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Eternal Circle Child's Fork and Spoon Set",
            category: "Kitchen" ,
            description:"There is no shape more complete, more eternal, than a circle. Fork and spoon in sterling silver. 4.5 long each.",
            imgUrl: "http://media.tiffany.com/is/image/Tiffany/EcomItemSocialL/elsa-perettieternal-circle-childs-fork-and-spoon-set-31530016_923489_ED.jpg?defaultImage=NoImageAvailable&op_usm=3,1,6",
            buyUrl:"http://www.tiffany.com/gifts/baby-gifts/elsa-peretti-eternal-circle-childs-fork-and-spoon-set-31530016?&fromGrid=1&search_params=p+1-n+10000-c+288202-s+5-r+-t+-ni+1-x+-lr+-hr+-ri+-mi+-pp+1192+5&search=0&origin=browse&searchkeyword=&trackpdp=bg&fromcid=288202&trackgridpos=16",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Nuna Zaaz Highchair",
            category: "Kitchen" ,
            description:"This versatile high chair features durable designer details in addition to innovative construction. Expertly built from the ground up, this revolutionary chair from Nuna is a must-have for your baby’s mealtime. Customizable, supportive and exceedingly tested for safety, the ZAAZ™ will grow with your baby without compromising your pre-baby lifestyle. Plus, the gliding lift mechanism and removable tray and arm bar make clean-up a snap!",
            imgUrl: "https://www.potterybarnkids.com/pkimgs/ab/images/dp/wcm/201708/0057/nuna-zaaz-highchair-c.jpg",
            buyUrl:"https://www.potterybarnkids.com/products/nuna-zaaz-highchair/?pkey=e%7Cbaby%2Bswing%7C146%7Cbest%7C0%7C1%7C24%7C%7C16&cm_src=PRODUCTSEARCH",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Sugar Chic Baby Bibs",
            category: "Kitchen" ,
            description:"Our modern Sugar Chic Baby Bibs are made of high quality designer fabrics on all bib fronts & an absorbent DOUBLE layer of soft organic flannel on the back to keep your drooly baby extra dry & comfortable. ",
            imgUrl: "https://s-media-cache-ak0.pinimg.com/736x/0e/e8/c3/0ee8c326e631237c91fb1218a9cd782a--bibs-for-babies-baby-knits.jpg",
            buyUrl:"https://www.etsy.com/shop/SugarChicBaby?search_query=bibs",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Baby Brezza Formula Pro One Step Food Maker",
            category: "Kitchen" ,
            description:" Introducing Formula Pro, the revolutionary new way of preparing your baby’s formula bottles. The Formula Pro uses worldwide patent-pending technology to measure and mix water and powdered formula to the perfect temperature (about 98 degrees) and consistency. With the push of a button, you can prepare a bottle within seconds that has no air bubbles. ",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/812WVN8zkeL._SL1500_.jpg",
            buyUrl:"https://www.amazon.com/Baby-Brezza-Formula-Step-Maker/dp/B00E8KJYNC/ref=sr_1_3_s_it?s=baby-products&ie=UTF8&qid=1500510176&sr=1-3&keywords=formula+mixer",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:5,
            name:"Pampers Swaddlers",
            category: "Necessities" ,
            description:"Wrap your baby in Pampers Swaddlers diapers, our most trusted comfort and protection and the #1 Choice of US Hospitals.* Our Blankie Soft diaper with a unique Absorb Away Liner pulls wetness and mess away from baby's skin to help keep your baby comfortable. It also has a color-changing wetness indicator that tells you when your baby might need a change.",
            imgUrl: "http://www.toysrus.com/graphics/product_images/pTRU1-18515968enh-z6.jpg",
            buyUrl:"https://www.amazon.com/Pampers-Swaddlers-Diapers-Size-Count/dp/B00DFFT9SQ/ref=sr_1_1?s=baby-products&ie=UTF8&qid=1500510637&sr=1-1-spons&keywords=diapers&th=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:5,
            name:"WaterWipes",
            category: "Necessities" ,
            description:"With such a gentle design, these wipes can be used for several cleaning purposes, including diapering, hand and mouth cleaning, quick body washes and breastfeeding hygiene, and they're safe enough to be used by anyone in the family. The hypoallergenic, soft wipes make a great cleaning solution for individuals with skin sensitivities.",
            imgUrl: "http://www.toysrus.com/graphics/product_images/pTRU1-20442751enh-z6.jpg",
            buyUrl:"http://www.toysrus.com/product/index.jsp?productId=56479906",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:5,
            name:"watson lane betheny baby bag",
            category: "Necessities" ,
            description:"his season, at kate spade new york, everything's coming up roses, and that includes the watson lane betheny, a chic printed nylon baby bag that boasts loads of mom-friendly details",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/716HToAUiEL._UY500_.jpg",
            buyUrl:"https://www.katespade.com/products/watson-lane-betheny-baby-bag/PXRU7645.html?cgid=ks-diaper-bags&dwvar_PXRU7645_color=071&dwvar_PXRU7645_size=UNS#start=2&cgid=ks-diaper-bags",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:6,
            name:"Arms Reach Concepts Inc. Co-Sleeper Sleigh Bed",
            category: "Nursery" ,
            description:"The Arms Reach Sleigh Bedside Co-Sleeper Bassinet is made of beautiful solid beech wood designed to create a classic Sleigh Bed look. It attaches securely to your adult bed and fits all sizes from twin to California King, from 18 to 30 bed heights in two inch increments. The Sleigh Bedside Co-Sleeper Bassinet offers a cozy environment and ease of nighttime nursing while mother rests comfortably in her own bed.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41fRsP1x3CL._SX355_.jpg",
            buyUrl:"https://www.amazon.com/Arms-Reach-Concepts-Co-Sleeper-Sleigh/dp/B0007CQ6G8/ref=sr_1_4_s_it?s=baby-products&ie=UTF8&qid=1500511330&sr=1-4&keywords=bassinet",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:6,
            name:"Cristallo 2 Piece Nursery Set with Leather Panel",
            category: "Nursery" ,
            description:"Like the playful nature of light that bounces off a crystal and makes rainbows on the wall, the architectural shapes paired with the upholstered cushion of the Cristallo Forever Crib provide a playful combination of refined styling and chic design. The Cristallo Forever Crib is an enchanting blend of classic lines paired with sweet touches of sophisticated luxury.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51ic5ZkbR4L._SY450_.jpg",
            buyUrl:"http://www.bambibaby.com/pali-cristallo-2-piece-nursery-set-with-leather-panel-crib-double-dresser?utm_source=google&utm_medium=pla&adpos=1o1&scid=scplp25376&sc_intid=25376&gclid=EAIaIQobChMIkvmh1c-W1QIVWVYNCh2h6QdjEAYYASABEgLkAPD_BwE",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:6,
            name:"Fillmore Extra Wide Dresser & Topper Set",
            category: "Nursery" ,
            description:"Ample storage is a gift you will treasure more with each passing year, as your baby – and your baby's wardrobe – grows. With four small and four large drawers, this substantial dresser will meet your child’s needs through the teen years.",
            imgUrl: "https://www.potterybarnkids.com/pkimgs/rk/images/dp/wcm/201728/0003/fillmore-extra-wide-dresser-topper-set-c.jpg",
            buyUrl:"https://www.potterybarnkids.com/products/fillmore-extra-wide-dresser-and-changing-table-topper/?pkey=e%7Cbaby%2Bchanging%2Btable%7C81%7Cbest%7C0%7C1%7C24%7C%7C3&sku=5554568&group=1&cm_src=PRODUCTSEARCH",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:6,
            name:"Handmade Elephant & Bubble Baby Mobile",
            category: "Nursery" ,
            description:"This adorable elephant and bubble baby mobile will be the piece that really ties the nursery together! Natural wood and hand-knit organic cotton create the ideal combination for an eco-conscious mum and dad.",
            imgUrl: "https://s-media-cache-ak0.pinimg.com/736x/6b/a7/2c/6ba72c1fe58029e2a199315553078b77--mobile-crochet-babymobile.jpg",
            buyUrl:"https://www.amazon.com/Handmade-Elephant-Bubble-Baby-Mobile/dp/B01F7O3G0O/ref=sr_1_13_s_it?s=baby-products&ie=UTF8&qid=1500512177&sr=1-13&keywords=eco+friendly+mobile",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Chicmoms');
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.
         Example:
         return queryInterface.bulkDelete('Person', null, {});
         */
    }
};
