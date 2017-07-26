
module.exports = {
    up: function (queryInterface, Sequelize) {

        queryInterface.bulkInsert('Practicalmoms', [{
            callid:1,
            name:"Summer Infant Sparkle N' Splash Newborn To Toddler Bath Tub",
            category: "Bathing & Grooming" ,
            description:"Make bath time safe and simple with the Sparkle ‘n Splash Newborn to Toddler Bath Tub. The clip-on sling has a soft foam headrest that cradles and supports newborns, while the large padded seating area gives toddlers space to splash and play. Sparkle ‘n Splash fits in double sinks and in adult bathtubs.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81R8nUtheQL._SX355_.jpg",
            buyUrl:"https://www.amazon.com/Summer-Infant-Sparkle-Newborn-Toddler/dp/B00E4J8GRM/ref=sr_1_9?s=apparel&ie=UTF8&qid=1500505044&sr=1-9&nodeID=7141123011&psd=1&keywords=baby+tub",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:1,
            name:"Safety 1st Deluxe Healthcare & Grooming Kit",
            category: "Bathing & Grooming" ,
            description:"The Deluxe Healthcare & Grooming Kit by Safety 1st gives parents a convenient all-in-one kit containing a full assortment of baby essentials that are great to have along when on the go. This deluxe assortment includes a 3-in-1 thermometer with protective case; a toddler toothbrush with a chunky, easy-to-hold handle; a bottle medicine dispenser that lets you give baby medicine in a comforting, familiar way; and much more. The wrapping clutch case with zippered, clear-view compartments helps you to easily keep things where you can see them and get to them quickly. Toss the case into your diaper bag and it'll be there when you need it.",
            imgUrl: "https://i5.walmartimages.com/asr/d3c96322-b542-4ba0-8920-22bcf93b8d8f_2.8b76b852bf0617da1c9556687243144a.jpeg",
            buyUrl:"https://www.target.com/p/safety-1st-deluxe-healthcare-grooming-kit-various-colors/-/A-12873028#lnk=sametab",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:1,
            name:"Boudreaux's Butt Paste Diaper Rash Ointment",
            category: "Bathing & Grooming" ,
            description:"Let's Kick Some Rash! Boudreaux's Butt Paste was specifically formulated by a pharmacist (George Boudreaux) with direction from a respected pediatrician to provide effective diaper rash care. Today, we're focused on continuing George's commitment to provide products that meet and exceed parents' expectations for baby care. Check out our range of ointments, moisturizers, and bath gels that will help keep your baby's skin nice and smooth.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/814SN7jPyhL._SL1500_.jpg",
            buyUrl:"https://www.amazon.com/Boudreauxs-Butt-Paste-Ointment-Strength/dp/B004XFUSRI/ref=sr_1_4_s_it?s=hpc&ie=UTF8&qid=1500505745&sr=1-4&keywords=diaper%2Brash%2Bcream&th=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:1,
            name:"Aveeno Baby Daily Bath Time Solutions",
            category: "Bathing & Grooming" ,
            description:"The Aveeno Baby Bathtime Solutions Gift Set includes everything you need for your baby's bath, helping you care for your little one's delicate skin with a special bonus for you. The wicker carrier has everything you need for your baby's bath, including Baby Wash & Shampoo, Baby Calming Comfort Bath, Baby Daily Moisture Lotion, and Stress Relief Body Wash for mom. Recommended by pediatricians, Aveeno Baby products are formulated with natural oatmeal to gently moisturize delicate skin. This set is an ideal gift for new and expecting moms.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51UWBNNzp2L._SY450_.jpg",
            buyUrl:"https://www.amazon.com/Aveeno-Baby-Daily-Solutions-Prevent/dp/B005SPESKK/ref=sr_1_9_s_it?s=hpc&ie=UTF8&qid=1500505799&sr=1-9&keywords=baby+shampoo+and+body+wash",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:2,
            name:"Bright Starts 5-in-1 Activity Gym",
            category: "For Fun" ,
            description:"This is not your average play gym! The 5-in-1 Your Way Ball Play™ Activity Gym from Bright Start™ is a Walls up keeps balls inside and acts as a barrier during play time and tummy time. 35 colorful balls extend the life of this gym into the toddler years because with all walls up - it becomes a ball pit! Engaging toys include an electronic toucan that entertains baby with over 20 minutes of merry melodies.",
            imgUrl: "https://target.scene7.com/is/image/Target/51935742_Alt03?wid=520&hei=520&fmt=pjpeg",
            buyUrl:"http://www.toysrus.com/product/index.jsp?productId=91081226&cp=2255957.2273443.68241026.3670997&parentPage=family",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:3,
            name:"Bright Starts Cradling Bouncer",
            category: "Handy Helper",
            description:"Bright Starts Toucan Tango Bouncer Entertain and soothe your family's newest addition in the Bright Starts Toucan Tango Bouncer. Lion and toucan characters and soft Taggies tags give your child plenty to look at while he or she listens to melodies or reaches for the engaging toy bar. Keep your little one safe in the seat as he or she bounces and plays by buckling in with the three-point safety harness. Take the battery-powered seat to Grandma's or the park for fun wherever life takes you.",
            imgUrl: "http://www.toysrus.com/graphics/product_images/pTRU1-23586431enh-z6.jpg",
            buyUrl:"http://www.toysrus.com/product/index.jsp?productId=87690186&cp=2255957.2273443.2255983.2256084&parentPage=family",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:3,
            name:"SwaddleMe Original Swaddle",
            category: "Handy Helper" ,
            description:"SwaddleMe Original Swaddle adjustable infant wrap has secure hook and loop closures for easy, safe swaddling. We know that when baby sleeps better, you sleep better, and our full line of wearable sleep products has been designed and tested to keep babies snug, safe, and comfy every night throughout their first year. SAFER SLEEP. BRIGHTER DAYS.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91D6tARqFmL._SX522_.jpg",
            buyUrl:"https://www.amazon.com/SwaddleMe-Original-Swaddle-Woodland-Friends/dp/B016MP5IZI/ref=sr_1_1_s_it?s=baby-products&ie=UTF8&qid=1500507333&sr=1-1&keywords=swaddle&th=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:3,
            name:"Crane Drop Ultrasonic Cool Mist Humidifier",
            category: "Handy Helper" ,
            description:"Crane’s Drop Shape Ultrasonic Cool Mist Humidifiers provide up to 24 hours of soothing moisture to help relieve the effects of dryness and congestion, helping you and your Family to breathe easy and sleep through the night peacefully. The moisture that humidifiers add to dry air also help alleviate many common nuisances brought on by winter heating such as static electricity, peeling wallpaper, shrinking wood, and cracks in paint and furniture. All Natural, Non Medicated Relief from Dryness, Cough, Cold, and Flu Symptoms.",
            imgUrl:"https://images-na.ssl-images-amazon.com/images/G/01/hpc/detail-page/c26-B001ADL1SG-1-s.jpg",
            buyUrl:"https://www.amazon.com/dp/B001ADL1SG?tag=blvisitor-20",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:3,
            name:"Cloud b Sound Machine Soother, Sleep Sheep",
            category: "Handy Helper" ,
            description:"Sleep Sheep is the original plush that offers soothing sounds to help calm and comfort children to sleep. Playing soft sounds of nature or the reassuring sound of a mother's heartbeat, Sleep Sheep is the perfect companion for a calm and restful night for both baby and parents!",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41RXs9kpPrL.jpg",
            buyUrl:"https://www.amazon.com/Cloud-Sound-Machine-Soother-Sounds/dp/B013T7X5R0/ref=sr_1_5_s_it?s=hpc&ie=UTF8&qid=1500508181&sr=1-5&keywords=sleep+sheep",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:3,
            name:"Angelcare Baby Sound Monitor",
            category: "Handy Helper" ,
            description:"It's tough being a parent. You can't help but worry about your baby every minute of every day, even when your baby is sleeping soundly. The Angelcare AC420 Sound Monitor is a great sound monitor at an affordable price. You'll find the sound quality is crystal clear, and it also comes with a rechargeable mobile Parent Unit. In fact, everything you could possibly need to enjoy the experience of parenthood.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81uPdTMZTZL._SX522_.jpg",
            buyUrl:"https://www.amazon.com/gp/product/B003FGWA8G/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003FGWA8G&linkCode=as2&tag=bestprodtag111046-20",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Dr. Brown's Original Wide-Neck Bottle",
            category: "Kitchen" ,
            description:"The Dr. Brown's Natural Flow Wide-Neck Baby Bottles offer a wonderful feeding experience with innovative vent technology.  This system creates positive-pressure flow for vacuum-free feeding that is similar to breastfeeding. The breast milk or formula flows freely without nipple collapse.  Air never mixes with the breast milk or formula so oxidation is prevented, thereby maintaining essential vitamins such as C, A and E. The vent system eliminates air bubbles in the formula or milk, which helps to reduce feeding problems like colic, spit-up, burping and gas.",
            imgUrl:"https://images-na.ssl-images-amazon.com/images/I/41j4m35u4hL._SY355_.jpg",
            buyUrl:"https://www.amazon.com/gp/product/B001LENCUE/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001LENCUE&linkCode=as2&tag=bestprodtag111046-20&th=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Medela Breastmilk Bottle Set",
            category: "Kitchen" ,
            description:"Medela polypropylene breast milk bottles are made without BPA, designed to retain breast milk's beneficial properties. Compatible with all Medela breast pumps, so you can pump, store and feed with one container. Great for long term storage. Dishwasher safe. Measure the exact amount of milk you're pumping with the ounce and millimeter markers. Screw on lids for leak proof storage, travel and freezing. Travel cap keeps nipple clean. Includes (3) bottles; (3) wide based medium-flow nipples; (3) collars, solid lids & caps.",
            imgUrl:"https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/049b374e-a616-459b-bf39-caa784563c8b.jpg._CB334685830_.jpg",
            buyUrl:"https://www.amazon.com/gp/product/B001V9EVCM/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001V9EVCM&linkCode=as2&tag=bestprodtag111046-20",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Munchkin Soft-Tip Infant Spoon",
            category: "Kitchen",
            description:"Brightly-colored infant spoons that are comfortable for you to hold and gentle on your baby's gums - so you have a practical and exciting option if your child wasn't born with a silver spoon. It's the little things.® Munchkin’s Soft Tip Infant Spoons have a rounded shape that's gentle on your baby's gums. The special handle is ergonomically designed for a comfortable hold, and just the right length to reach the bottom of food jars. These non toxic spoons are safe for baby and made from flexible yet durable BPA and phthalate free plastic. ",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71o3SP%2BZ-ML._SX522_.jpg",
            buyUrl:"https://www.amazon.com/Munchkin-Soft-Tip-Infant-Spoon-Count/dp/B000LSL5ZK/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1500509348&sr=1-4&keywords=baby+spoons",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Graco Blossom 4-in-1 High Chair",
            category: "Kitchen" ,
            description:"Graco Blossom 4-in-1 Seating System- designed to adjust to your growing child’s seating needs and to accommodate more than one child in your growing family. It transforms seamlessly from an extremely functional highchair to an infant feeding booster, a toddler booster, and finally a youth chair. Should your family grow, it can even accommodate a baby and a toddler at the table all at once. The 6 height adjustments provide the perfect fit for baby at the table. The 3-position removable footrest and 3 recline positions will ensure your growing child stays comfortable at mealtime.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51H0pLbFicL._SY679_.jpg",
            buyUrl:"https://www.amazon.com/gp/product/B005XJ2VGE/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B005XJ2VGE&linkCode=as2&tag=bestprodtag111046-20&th=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Tommee Tippee Milk Feeding Bibs",
            category: "Kitchen" ,
            description:"Super-soft and extra-absorbent to protect your baby’s clothes and sensitive skin Unique dribble catcher absorbs moisture, and is ideal for drips or teething dribbles Super-soft fabric for comfort and helps prevents rashes Convenient neck fastening makes it easier to put the bib on and take it off you baby",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51l7JSysBoL._SX522_.jpg",
            buyUrl:"https://www.amazon.com/Tommee-Tippee-Milk-Feeding-Cream/dp/B00AD51O98/ref=sr_1_7_s_it?s=baby-products&ie=UTF8&qid=1500510111&sr=1-7&keywords=Tommy+tippee+bib",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:4,
            name:"Dr. Brown's Formula Mixing Pitcher",
            category: "Kitchen" ,
            description:"The formula mixing pitcher from Dr. Brown's eases formula preparation by allowing up to 4 bottles to be mixed and stored at one time. This unique feature includes a mixing blade that quickly dissolves formula with no clumping, and an adjustable stopper that prohibits the mixing blade from lifting above the surface of the liquid as to keep air introduction to a minimum. This features a locking lid, soft grip handle, and ribbed pitcher spout offer comfort and convenience when pouring. It disassembles without difficulty for easy cleaning. This is compact in size, dishwasher safe and is BPA free.",
            imgUrl:"https://images-na.ssl-images-amazon.com/images/I/41HPK4-uyBL._SY355_.jpg",
            buyUrl:"https://www.amazon.com/Dr-Brown-s-Formula-Mixing-Pitcher/dp/B00BZAKI0Q/ref=sr_1_13_s_it?s=baby-products&ie=UTF8&qid=1500510176&sr=1-13&keywords=formula+mixer",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:5,
            name:"Pampers Swaddlers",
            category: "Necessities" ,
            description:"Wrap your baby in Pampers Swaddlers diapers, our most trusted comfort and protection and the #1 Choice of US Hospitals.* Our Blankie Soft diaper with a unique Absorb Away Liner pulls wetness and mess away from baby's skin to help keep your baby comfortable. It also has a color-changing wetness indicator that tells you when your baby might need a change. Finally, we make sure your baby's delicate belly is protected with the contoured umbilical notch.** *Based on sales of the newborn hospital diaper.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81ktWSim9tL._SX522_.jpg",
            buyUrl:"https://www.amazon.com/Pampers-Swaddlers-Diapers-Size-Count/dp/B00DFFT9SQ/ref=sr_1_1?s=baby-products&ie=UTF8&qid=1500510637&sr=1-1-spons&keywords=diapers&th=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:5,
            name:"Pampers Sensitive Baby Wipes",
            category: "Necessities" ,
            description:"Changing your baby can be one of the most loving moments of the day. With Pampers Sensitive wipes unique Softgrip Texture, your baby will enjoy less wiping for more gentle cleaning. They are clinically proven mild, dermatologist-tested, hypoallergenic, and perfume-free, which helps make changing time even better. Plus Pampers Sensitive wipes are 20 percent thicker than our regular wipes. During changing time, give your baby our best gentle clean: Pampers Sensitive wipes.",
            imgUrl: "http://www.toysrus.com/graphics/tru_prod_images/Pampers-Sensitive-Baby-Wipes----pTRU1-24414146dt.jpg",
            buyUrl:"http://www.toysrus.com/product/index.jsp?productId=101695526&cp=2255957.2273443.3242082.2256105&parentPage=family",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:5,
            name:"Diaper Bag by Hip Cub",
            category: "Necessities" ,
            description:"Whether you’re a new parent or you’re working on that next bundle of joy, one of the most useful and essential baby accessories you can have is the diaper bag. It has the ability to hold almost everything your baby will needs, and still has room for that romance novel you keep intending to read.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91eQEnoEpoL._SX522_.jpg",
            buyUrl:"https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=diaper+bag",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:6,
            name:"Graco Dream Suite Bassinet",
            category: "Nursery" ,
            description:"Dream Suite is a reversible bassinet and changer, all-in-one. Now parents can have a dedicated sleep and changing space for baby conveniently located in their room. The cozy bassinet soothes baby with 2-speed vibration, allows air flow and visibility with mesh sides, blocks light with the canopy, and entertains with soft toys. The changer features easy to wipe clean fabric and can be used up to 30 lb. - even after baby no longer sleeps in the bassinet. The large storage basket keeps baby's essentials close by and the wheels make the bassinet easy to move to keep baby close by.",
            imgUrl: "https://i5.walmartimages.com/asr/573aa6df-d923-4feb-a0af-ef2e6512c4f8_1.becf806273a6bba01613f206126be8e0.jpeg",
            buyUrl:"https://www.amazon.com/Graco-Dream-Suite-Bassinet-Mason/dp/B01BGVM1C6/ref=as_at/?imprToken=Qf-uYQU5uOuK7fY7AtdWKA&slotNum=6&s=baby-products&ie=UTF8&qid=1487517338&sr=1-8&keywords=bassinet&th=1&linkCode=sl1&tag=cortegames-20&linkId=3779f9eec2b45b4c33556997595d0767",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:6,
            name:"babyletto Hudson 3-in-1 Crib",
            category: "Nursery",
            description:"Delight in mid-century modern appeal with the Hudson 3-in-1 Convertible Crib. Stylish rounded spindles bring a simple charm, and give the Hudson Crib an open, radiant feel.",
            imgUrl: "http://www.toysrus.com/graphics/media/trus/Aplusplus/2016/11_14_16/13585072/babyletto-hudson-3-in-1-convertible-crib-white-13585072-01.jpg",
            buyUrl:"https://www.amazon.com/babyletto-Hudson-Convertible-Toddler-White/dp/B007CRJHUI/ref=sr_1_3_s_it?s=baby-products&ie=UTF8&qid=1500511573&sr=1-3&keywords=baby%2Bcrib&th=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            callid:6,
            name:"Keekaroo Peanut Changer",
            category: "Nursery" ,
            description:"Peanut changer from keekaroo is the clean and safe way diaper changing pad to change your 'little peanut'. Impermeable to fluids, the soft-to-the-touch keekaroo peanut changer needs no additional sheets or pads commonly required for other diaper changing pads.  The solid surface wipes clean and limits the chance for bacterial growth.  Made from our unique soft and cushy material that was designed and tested for hospital use, the keekaroo peanut changer provides a clean, safe and comfortable diaper changer surface for diaper changes.",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71TxWuhSwoL._SY355_.jpg",
            buyUrl:"https://www.amazon.com/dp/B00KSW970Y/ref=sxr_rr_xsim_1_s_it?pf_rd_m=ATVPDKIKX0DER&pf_rd_p=3008523062&pd_rd_wg=EhBg5&pf_rd_r=GADA10N8DMQC04B5NJPR&pf_rd_s=desktop-rhs-carousels&pf_rd_t=301&pd_rd_i=B00KSW970Y&pd_rd_w=WXItK&pf_rd_i=changing%2Btable&pd_rd_r=VKEY5J04CEBQV1JDYY30&ie=UTF8&qid=1500512058&sr=1&th=1",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Practicalmoms');
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.
         Example:
         return queryInterface.bulkDelete('Person', null, {});
         */
    }
};


