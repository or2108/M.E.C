var products = [
    // Dr. Kadir
    {
        "id": "kadir-482",
        "name": "מארז ארבעה בוסטרים Meso Booster",
        "brand": "Dr. Kadir",
        "price": 760,
        "category": "MESO BOOSTER",
        "volume": "מארז ארבעה בוסטרים",
        "description": "מארז מקצועי של ארבעה בוסטרים פעילים.",
        "image": "DR.KADIR תמונות/מארז ארבעה בוסטרים.jpg"
    },
    {
        "id": "kadir-468",
        "name": "מזו בוסטר היאלורון",
        "brand": "Dr. Kadir",
        "price": 210,
        "category": "MESO BOOSTER",
        "volume": "30 מ\"ל",
        "description": "סרום מרוכז המבוסס על חומצה היאלורונית.",
        "fullDescription": "סרום לחות אינטנסיבי הפועל למילוי קמטוטים והענקת נפח לעור. מכיל ריכוז גבוה של חומצה היאלורונית במשקל מולקולרי נמוך לחדירה עמוקה ושיפור משמעותי ברמת הלחות.",
        "usage": "יש למרוח מספר טיפות על עור פנים נקי בוקר וערב לפני קרם הלחות.",
        "ingredients": "Hyaluronic Acid, Panthenol, Glycerin, Water, Sodium Hyaluronate.",
        "image": "DR.KADIR תמונות/מזו בוסטר היאלורון.jpg"
    },
    {
        "id": "kadir-469",
        "name": "מזו בוסטר פפטיד",
        "brand": "Dr. Kadir",
        "price": 210,
        "category": "MESO BOOSTER",
        "volume": "30 מ\"ל",
        "description": "בוסטר עוצמתי המכיל פפטידים מתקדמים.",
        "fullDescription": "פורמולה מתקדמת המשלבת פפטידים ביו-ממטיים המגרים את ייצור הקולגן והאלסטין. מסייע בשיפור מוצקות העור וצמצום עומק הקמטים.",
        "usage": "יש לעסות 2-3 טיפות על פנים וצוואר נקיים עד לספיגה מלאה.",
        "ingredients": "Acetyl Hexapeptide-8, Palmitoyl Tripeptide-1, Aqua, Butylene Glycol.",
        "image": "DR.KADIR תמונות/מזו בוסטר פפטיד.jpg"
    },
    {
        "id": "kadir-470",
        "name": "מזו בוסטר רטינול",
        "brand": "Dr. Kadir",
        "price": 210,
        "category": "MESO BOOSTER",
        "volume": "30 מ\"ל",
        "description": "טיפול לילה מחדש המבוסס על רטינול.",
        "fullDescription": "תכשיר לילה עוצמתי לחידוש מרקם העור, הבהרת כתמים וטיפול בסימני גיל. מעודד התחדשות תאים ומעניק מראה עור חלק וקורן.",
        "usage": "לשימוש בשעות הערב בלבד. יש להתחיל בשימוש הדרגתי (פעמיים בשבוע) ולהעלות בהתאם לסבילות העור. חובה להשתמש במקדם הגנה ביום.",
        "ingredients": "Retinol, Vitamin E, Squalane, Caprylic/Capric Triglyceride.",
        "image": "DR.KADIR תמונות/מזו בוסטר רטינול.jpg"
    },
    {
        "id": "kadir-471",
        "name": "מזו בוסטר ויטמין C",
        "brand": "Dr. Kadir",
        "price": 210,
        "category": "MESO BOOSTER",
        "volume": "30 מ\"ל",
        "description": "נוגד חמצון עוצמתי המבוסס על ויטמין C.",
        "fullDescription": "סרום ויטמין C יציב המעניק הגנה אנטי-אוקסידנטית רחבה, מבהיר את גוון העור ומעניק זוהר מיידי. מחזק את המערכת החיסונית של העור.",
        "usage": "יש למרוח בבוקר על עור נקי מתחת לקרם ההגנה.",
        "ingredients": "L-Ascorbic Acid, Ferulic Acid, Vitamin E, Propanediol.",
        "image": "DR.KADIR תמונות/מזו בוסטר ויטמין C.jpg"
    },
    {
        "id": "kadir-483",
        "name": "מארז קיט הבהרה LIGHTENING KIT",
        "brand": "Dr. Kadir",
        "price": 760,
        "category": "LIGHTENING KIT",
        "volume": "מארז קיט הבהרה",
        "description": "מארז טיפולי מקצועי להבהרת העור.",
        "fullDescription": "מערכת טיפולית שלמה להבהרה וטשטוש כתמי פיגמנטציה. המארז משלב ניקוי פעיל, סרום מרוכז וקרם הגנה, כולם פועלים בסינרגיה לעיכוב ייצור המלנין.",
        "usage": "יש לעקוב אחר ההוראות המפורטות בתוך המארז לכל אחד מהשלבים (ניקוי, טיפול, הגנה).",
        "ingredients": "Alpha Arbutin, Kojic Acid, Vitamin C, Niacinamide.",
        "image": "DR.KADIR תמונות/מארז קיט הבהרה.jpg"
    },
    {
        "id": "kadir-475",
        "name": "טיפות רזברטרול",
        "brand": "Dr. Kadir",
        "price": 184,
        "category": "LIGHTENING KIT",
        "volume": "10x2 מ\"ל",
        "description": "טיפות נוגדות חמצון המכילות רוברטרול.",
        "image": "DR.KADIR תמונות/טיפות רזברטרול.jpg"
    },
    {
        "id": "kadir-473",
        "name": "סרום הידרוקסי רטינול",
        "brand": "Dr. Kadir",
        "price": 184,
        "category": "LIGHTENING KIT",
        "volume": "30 מ\"ל",
        "description": "שילוב ייחודי של חומצות הידרוקסיות ורטינול.",
        "image": "DR.KADIR תמונות/סרום הידרוקסי רטינול.jpg"
    },
    {
        "id": "kadir-474",
        "name": "סרום הבהרה אלפא ארבוטין",
        "brand": "Dr. Kadir",
        "price": 317,
        "category": "LIGHTENING KIT",
        "volume": "30 מ\"ל",
        "description": "סרום הבהרה ממוקד המבוסס על אלפא ארבוטין.",
        "image": "DR.KADIR תמונות/סרום הבהרה אלפא ארבוטין.jpg"
    },
    {
        "id": "kadir-472",
        "name": "סבון חומצות לניקוי אינטנסיבי",
        "brand": "Dr. Kadir",
        "price": 91,
        "category": "LIGHTENING KIT",
        "volume": "150 מ\"ל",
        "description": "סבון פנים פעיל המכיל חומצות אלפא וביתא.",
        "image": "DR.KADIR תמונות/סבון חומצות לניקוי אינטנסיבי.jpg"
    },
    {
        "id": "kadir-pep1",
        "name": "פפטיד מס' 1 סרום",
        "brand": "Dr. Kadir",
        "price": 252,
        "category": "NO. 1 PEPTIDE",
        "volume": "30 מ\"ל",
        "description": "סרום פפטידים יוקרתי לחיזוק העור.",
        "image": "DR.KADIR תמונות/פפטיד מס' 1 סרום.jpg"
    },
    {
        "id": "kadir-pep2",
        "name": "פפטיד מס' 1 תחליב ג'ל לחות",
        "brand": "Dr. Kadir",
        "price": 205,
        "category": "NO. 1 PEPTIDE",
        "volume": "50 מ\"ל",
        "description": "תחליב לחות קליל הנספג במהירות.",
        "image": "DR.KADIR תמונות/פפטיד מס' 1 תחליב ג'ל לחות.jpg"
    },
    {
        "id": "kadir-pep3",
        "name": "פפטיד מס' 1 קרם ג'ל מזין",
        "brand": "Dr. Kadir",
        "price": 205,
        "category": "NO. 1 PEPTIDE",
        "volume": "50 מ\"ל",
        "description": "קרם לילה עשיר המזין את העור.",
        "image": "DR.KADIR תמונות/פפטיד מס' 1 קרם ג'ל מזין.jpg"
    },
    {
        "id": "kadir-pep4",
        "name": "פפטיד מס' 1 מסכת ברונזה",
        "brand": "Dr. Kadir",
        "price": 182,
        "category": "NO. 1 PEPTIDE",
        "volume": "50 מ\"ל",
        "description": "מסכה טיפולית המעניקה אפקט מתיחה והרגעה.",
        "fullDescription": "מסכה יוקרתית המבוססת על פפטידים ומינרלים, המעניקה מראה עור מתוח, קורן וחיוני ברגע. אידיאלית כטיפול 'זוהר' לפני אירוע.",
        "usage": "יש למרוח שכבה נדיבה על פנים נקיות, להמתין 15-20 דקות ולשטוף במים פושרים.",
        "ingredients": "Bronze Peptides, Kaolin, Minerals from the Dead Sea, Aloe Vera.",
        "image": "DR.KADIR תמונות/פפטיד מס' 1 מסכת ברונזה.jpg"
    },
    {
        "id": "kadir-hemp1",
        "name": "המפ סרום לעור יבש",
        "brand": "Dr. Kadir",
        "price": 227,
        "category": "HEMP ESSENTIAL",
        "volume": "10x2 מ\"ל",
        "description": "סרום המבוסס על שמן המפ להזנה עמוקה.",
        "image": "DR.KADIR תמונות/המפ סרום לעור יבש.png"
    },
    {
        "id": "kadir-hemp2",
        "name": "המפ לחות",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "HEMP ESSENTIAL",
        "volume": "50 מ\"ל",
        "description": "קרם לחות המבוסס על שמן המפ.",
        "image": "DR.KADIR תמונות/המפ לחות.jpg"
    },
    {
        "id": "kadir-hemp3",
        "name": "המפ מסכת הזנה לעור יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "HEMP ESSENTIAL",
        "volume": "50 מ\"ל",
        "description": "מסכת הזנה המבוססת על שמן המפ.",
        "image": "DR.KADIR תמונות/המפ מסכת הזנה לעור יבש.jpg"
    },
    {
        "id": "kadir-hemp4",
        "name": "המפ סרום גוג'י ברי",
        "brand": "Dr. Kadir",
        "price": 227,
        "category": "HEMP ESSENTIAL",
        "volume": "50 מ\"ל",
        "description": "סרום גוג'י ברי המשלב שמן המפ.",
        "image": "DR.KADIR תמונות/המפ סרום גוג'י ברי.jpg"
    },
    {
        "id": "kadir-biom1",
        "name": "ביום-קלמין קרם לחות",
        "brand": "Dr. Kadir",
        "price": 186,
        "category": "BIOM CALMINE",
        "volume": "50 מ\"ל",
        "description": "קרם לחות פרוביוטי המרגיע עור מגורה.",
        "image": "DR.KADIR תמונות/ביום-קלמין קרם לחות.jpg"
    },
    {
        "id": "kadir-biom2",
        "name": "ביום-קלמין קרם מזין",
        "brand": "Dr. Kadir",
        "price": 186,
        "category": "BIOM CALMINE",
        "volume": "50 מ\"ל",
        "description": "קרם הזנה לשיקום מחסום העור.",
        "image": "DR.KADIR תמונות/ביום-קלמין קרם מזין.jpg"
    },
    {
        "id": "kadir-biom3",
        "name": "ביום-קלמין סרום",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "BIOM CALMINE",
        "volume": "50 מ\"ל",
        "description": "סרום מרגיע המשלב טכנולוגיה פרוביוטית.",
        "image": "DR.KADIR תמונות/ביום-קלמין סרום.jpg"
    },
    {
        "id": "kadir-biom4",
        "name": "ביום-קלמין מסכה שחורה",
        "brand": "Dr. Kadir",
        "price": 176,
        "category": "BIOM CALMINE",
        "volume": "50 מ\"ל",
        "description": "מסכה מטהרת המבוססת על פחם פעיל.",
        "image": "DR.KADIR תמונות/ביום-קלמין מסכה שחורה.jpg"
    },
    {
        "id": "kadir-biom5",
        "name": "ביום-קלמין ג'ל לניקוי עדין",
        "brand": "Dr. Kadir",
        "price": 91,
        "category": "BIOM CALMINE",
        "volume": "250 מ\"ל",
        "description": "ג'ל ניקוי עדין במיוחד שאינו מייבש.",
        "image": "DR.KADIR תמונות/ביום-קלמין ג'ל לניקוי עדין.jpg"
    },
    {
        "id": "kadir-biom6",
        "name": "ביום-קלמין ג'ל לעור שמן ובעייתי",
        "brand": "Dr. Kadir",
        "price": 125,
        "category": "BIOM CALMINE",
        "volume": "30 מ\"ל",
        "description": "טיפול ממוקד לעור שמן המשלב פרוביוטיקה.",
        "image": "DR.KADIR תמונות/ביום-קלמין ג'ל לעור שמן ובעייתי.jpg"
    },
    {
        "id": "kadir-hyalu1",
        "name": "היאלו-רון קרם יום פעיל",
        "brand": "Dr. Kadir",
        "price": 222,
        "category": "HYALU-RON",
        "volume": "50 מ\"ל",
        "description": "קרם יום פעיל המבוסס על חומצה היאלורונית.",
        "image": "DR.KADIR תמונות/היאלו-רון קרם יום פעיל.jpg"
    },
    {
        "id": "kadir-hyalu2",
        "name": "היאלו-רון קרם מזין פעיל",
        "brand": "Dr. Kadir",
        "price": 222,
        "category": "HYALU-RON",
        "volume": "50 מ\"ל",
        "description": "קרם לילה מזין האידיאלי לשיקום העור.",
        "image": "DR.KADIR תמונות/היאלו-רון קרם מזין פעיל.jpg"
    },
    {
        "id": "kadir-hyalu3",
        "name": "היאלו-רון סרום מרוכז",
        "brand": "Dr. Kadir",
        "price": 222,
        "category": "HYALU-RON",
        "volume": "30 מ\"ל",
        "description": "סרום מרוכז ביותר המעניק אפקט מתיחה.",
        "image": "DR.KADIR תמונות/היאלו-רון סרום מרוכז.jpg"
    },
    {
        "id": "kadir-hyalu4",
        "name": "היאלו-רון קרם עיניים פעיל",
        "brand": "Dr. Kadir",
        "price": 222,
        "category": "HYALU-RON",
        "volume": "30 מ\"ל",
        "description": "קרם עיניים ממוקד המטפל בקמטוטים.",
        "image": "DR.KADIR תמונות/היאלו-רון קרם עיניים פעיל.jpg"
    },
    {
        "id": "kadir-apple1",
        "name": "אפל ליפט קרם לחות לעור נורמלי-יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "APPLE LIFT",
        "volume": "50 מ\"ל",
        "description": "קרם יום המרתם את כוחם של תאי גזע מתפוחים.",
        "image": "DR.KADIR תמונות/אפל ליפט קרם לחות לעור נורמלי-יבש.jpg"
    },
    {
        "id": "kadir-apple2",
        "name": "אפל ליפט קרם מזין לעור נורמלי-יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "APPLE LIFT",
        "volume": "50 מ\"ל",
        "description": "קרם לילה עשיר המבוסס על טכנולוגיית תאי גזע.",
        "image": "DR.KADIR תמונות/אפל ליפט קרם מזין לעור נורמלי-יבש.jpg"
    },
    {
        "id": "kadir-apple3",
        "name": "אפל ליפט סרום לצמצום קמטים",
        "brand": "Dr. Kadir",
        "price": 227,
        "category": "APPLE LIFT",
        "volume": "50 מ\"ל",
        "description": "סרום אנטי-אייג'ינג מרוכז המעדן את הקמטים.",
        "image": "DR.KADIR תמונות/אפל ליפט סרום לצמצום קמטים.jpg"
    },
    {
        "id": "kadir-apple4",
        "name": "אפל ליפט מסכה",
        "brand": "Dr. Kadir",
        "price": 172,
        "category": "APPLE LIFT",
        "volume": "75 מ\"ל",
        "description": "מסכת יופי המעניקה עור חלק וקורן.",
        "image": "DR.KADIR תמונות/אפל ליפט מסכה.jpg"
    },
    {
        "id": "kadir-coll1",
        "name": "ניו קולגן קרם לחות לעור נורמלי-יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "NEW COLLAGEN",
        "volume": "50 מ\"ל",
        "description": "קרם לחות המטפל באיבוד גמישות.",
        "image": "DR.KADIR תמונות/ניו קולגן קרם לחות לעור נורמלי-יבש.jpg"
    },
    {
        "id": "kadir-coll2",
        "name": "ניו קולגן קרם מזין לעור יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "NEW COLLAGEN",
        "volume": "50 מ\"ל",
        "description": "קרם מזין לעור יבש מאוד.",
        "image": "DR.KADIR תמונות/ניו קולגן קרם מזין לעור יבש.jpg"
    },
    {
        "id": "kadir-coll3",
        "name": "ניו קולגן סרום",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "NEW COLLAGEN",
        "volume": "30 מ\"ל",
        "description": "סרום קולגן פעיל החודר לשכבות העמוקות.",
        "image": "DR.KADIR תמונות/ניו קולגן סרום.jpg"
    },
    {
        "id": "kadir-coll4",
        "name": "ניו קולגן קרם עיניים",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "NEW COLLAGEN",
        "volume": "30 מ\"ל",
        "description": "קרם עיניים עדין המטפל בסימני עייפות.",
        "image": "DR.KADIR תמונות/ניו קולגן קרם עיניים.jpg"
    },
    {
        "id": "kadir-creat1",
        "name": "קריאטיב קרם לחות לעור יבש",
        "brand": "Dr. Kadir",
        "price": 227,
        "category": "CREATIVE",
        "volume": "50 מ\"ל",
        "description": "קרם לחות המיועד לשיקום העור.",
        "image": "DR.KADIR תמונות/קריאטיב קרם לחות לעור יבש.jpg"
    },
    {
        "id": "kadir-creat2",
        "name": "קריאטיב קרם מזין לעור יבש",
        "brand": "Dr. Kadir",
        "price": 227,
        "category": "CREATIVE",
        "volume": "50 מ\"ל",
        "description": "קרם מזין ועשיר לשיפור מרקם העור.",
        "image": "DR.KADIR תמונות/קריאטיב קרם מזין לעור יבש.jpg"
    },
    {
        "id": "kadir-creat3",
        "name": "קריאטיב סרום לעור יבש",
        "brand": "Dr. Kadir",
        "price": 227,
        "category": "CREATIVE",
        "volume": "50 מ\"ל",
        "description": "סרום מרוכז להזנת עור יבש.",
        "image": "DR.KADIR תמונות/קריאטיב סרום לעור יבש.jpg"
    },
    {
        "id": "kadir-creat4",
        "name": "קריאטיב קרם עיניים לעור יבש",
        "brand": "Dr. Kadir",
        "price": 176,
        "category": "CREATIVE",
        "volume": "30 מ\"ל",
        "description": "קרם עיניים לטיפול אינטנסיבי.",
        "image": "DR.KADIR תמונות/קריאטיב קרם עיניים לעור יבש.jpg"
    },
    {
        "id": "kadir-creat5",
        "name": "קריאטיב מסכת כסף",
        "brand": "Dr. Kadir",
        "price": 176,
        "category": "CREATIVE",
        "volume": "50 מ\"ל",
        "description": "מסכה טיפולית המעניקה זוהר לעור.",
        "image": "DR.KADIR תמונות/קריאטיב מסכת כסף.jpg"
    },
    {
        "id": "kadir-deep1",
        "name": "דיפ ריסטור קרם יום פעיל",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "DEEP RESTORE",
        "volume": "50 מ\"ל",
        "description": "קרם יום פעיל לשיקום עמוק.",
        "image": "DR.KADIR תמונות/דיפ ריסטור קרם יום פעיל.jpg"
    },
    {
        "id": "kadir-deep2",
        "name": "דיפ ריסטור קרם הזנה פעיל",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "DEEP RESTORE",
        "volume": "50 מ\"ל",
        "description": "קרם הזנה פעיל לחידוש העור.",
        "image": "DR.KADIR תמונות/דיפ ריסטור קרם הזנה פעיל.jpg"
    },
    {
        "id": "kadir-deep3",
        "name": "דיפ ריסטור סרום אומגה 3",
        "brand": "Dr. Kadir",
        "price": 227,
        "category": "DEEP RESTORE",
        "volume": "50 מ\"ל",
        "description": "סרום המכיל אומגה 3 להזנה מקסימלית.",
        "image": "DR.KADIR תמונות/דיפ ריסטור סרום אומגה 3.jpg"
    },
    {
        "id": "kadir-deep4",
        "name": "דיפ ריסטור סרום פעיל לאזור העיניים",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "DEEP RESTORE",
        "volume": "30 מ\"ל",
        "description": "סרום פעיל לטיפול בקמטים סביב העיניים.",
        "image": "DR.KADIR תמונות/דיפ ריסטור סרום פעיל לאזור העיניים.jpg"
    },
    {
        "id": "kadir-deep5",
        "name": "דיפ ריסטור מסכה לקטית",
        "brand": "Dr. Kadir",
        "price": 174,
        "category": "DEEP RESTORE",
        "volume": "75 מ\"ל",
        "description": "מסכה לקטית לחידוש והבהרת העור.",
        "image": "DR.KADIR תמונות/דיפ ריסטור מסכה לקטית.jpg"
    },
    {
        "id": "kadir-phyto1",
        "name": "פיטוסטרול 40+ קרם לחות לעור יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "PHYTOSTEROL 40+",
        "volume": "50 מ\"ל",
        "description": "טיפול אנטי-אייג'ינג מתקדם לעור בוגר.",
        "image": "DR.KADIR תמונות/פיטוסטרול 40+ קרם לחות לעור יבש.jpg"
    },
    {
        "id": "kadir-phyto2",
        "name": "פיטוסטרול 40+ קרם מזין לעור יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "PHYTOSTEROL 40+",
        "volume": "50 מ\"ל",
        "description": "קרם מזין לעור יבש לשיפור המוצקות.",
        "image": "DR.KADIR תמונות/פיטוסטרול 40+ קרם מזין לעור יבש.jpg"
    },
    {
        "id": "kadir-phyto3",
        "name": "פיטוסטרול 40+ קרם עיניים לעור יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "PHYTOSTEROL 40+",
        "volume": "30 מ\"ל",
        "description": "קרם עיניים עשיר לעור בוגר.",
        "image": "DR.KADIR תמונות/פיטוסטרול 40+ קרם עיניים לעור יבש.jpg"
    },
    {
        "id": "kadir-phyto4",
        "name": "פיטוסטרול 40+ סרום לעור יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "PHYTOSTEROL 40+",
        "volume": "30 מ\"ל",
        "description": "סרום אנטי-אייג'ינג מרוך.",
        "image": "DR.KADIR תמונות/פיטוסטרול 40+ סרום לעור יבש.jpg"
    },
    {
        "id": "kadir-b3-1",
        "name": "B3 ג'ל טיפולי לעור בעייתי",
        "brand": "Dr. Kadir",
        "price": 133,
        "category": "B3 – לעור בעייתי",
        "volume": "30 מ\"ל",
        "description": "תכשיר טיפולי לעור שמן ובעייתי.",
        "image": "DR.KADIR תמונות/B3 ג'ל טיפולי לעור בעייתי.jpg"
    },
    {
        "id": "kadir-b3-2",
        "name": "B3 תרחיף ייבוש + מייק אפ לעור בעייתי",
        "brand": "Dr. Kadir",
        "price": 133,
        "category": "B3 – לעור בעייתי",
        "volume": "30 מ\"ל",
        "description": "תרחיף טיפולי המשלב מייק אפ.",
        "image": "DR.KADIR תמונות/B3 תרחיף ייבוש + מייק אפ לעור בעייתי.jpg"
    },
    {
        "id": "kadir-b3-3",
        "name": "B3 קרם פנתנול לעור שמן ובעייתי",
        "brand": "Dr. Kadir",
        "price": 116,
        "category": "B3 – לעור בעייתי",
        "volume": "75 מ\"ל",
        "description": "קרם פנתנול להרגעת עור שמן.",
        "image": "DR.KADIR תמונות/B3 קרם פנתנול לעור שמן ובעייתי.jpg"
    },
    {
        "id": "kadir-b3-4",
        "name": "B3 מסכה טיפולית לעור שמן ובעייתי",
        "brand": "Dr. Kadir",
        "price": 123,
        "category": "B3 – לעור בעייתי",
        "volume": "75 מ\"ל",
        "description": "מסכה טיפולית לניקוי עמוק.",
        "image": "DR.KADIR תמונות/B3 מסכה טיפולית לעור שמן ובעייתי.jpg"
    },
    {
        "id": "kadir-b3-5",
        "name": "B3 אל סבון לניקוי עמוק",
        "brand": "Dr. Kadir",
        "price": 93,
        "category": "B3 – לעור בעייתי",
        "volume": "250 מ\"ל",
        "description": "אל סבון פנים לניקוי יסודי.",
        "image": "DR.KADIR תמונות/B3 אל סבון לניקוי עמוק.jpg"
    },
    {
        "id": "kadir-b3-6",
        "name": "B3 מי פנים טיפולי לעור בעייתי",
        "brand": "Dr. Kadir",
        "price": 91,
        "category": "B3 – לעור בעייתי",
        "volume": "250 מ\"ל",
        "description": "מי פנים טיפוליים לעור שמן.",
        "image": "DR.KADIR תמונות/B3 מי פנים טיפולי לעור בעייתי.jpg"
    },
    {
        "id": "kadir-b3-7",
        "name": "B3 קצף ניקוי לבנדר לעור שמן ובעייתי",
        "brand": "Dr. Kadir",
        "price": 97,
        "category": "B3 – לעור בעייתי",
        "volume": "200 מ\"ל",
        "description": "קצף ניקוי בריח לבנדר.",
        "image": "DR.KADIR תמונות/B3 קצף ניקוי לבנדר לעור שמן ובעייתי.jpg"
    },
    {
        "id": "kadir-b3-8",
        "name": "B3 קרם יום נטול שומן",
        "brand": "Dr. Kadir",
        "price": 116,
        "category": "B3 – לעור בעייתי",
        "volume": "75 מ\"ל",
        "description": "קרם יום קליל נטול שומן.",
        "image": "DR.KADIR תמונות/B3 קרם יום נטול שומן.jpg"
    },
    {
        "id": "kadir-ec1",
        "name": "לייט E+C קרם לחות",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "LIGHT E+C",
        "volume": "50 מ\"ל",
        "description": "קרם לחות המועשר בויטמינים E ו-C.",
        "image": "DR.KADIR תמונות/לייט E+C קרם לחות.jpg"
    },
    {
        "id": "kadir-ec2",
        "name": "לייט E+C קרם עיניים צוואר ומחשוף",
        "brand": "Dr. Kadir",
        "price": 182,
        "category": "LIGHT E+C",
        "volume": "30 מ\"ל",
        "description": "טיפול ממוקד לאזור העיניים והצוואר.",
        "image": "DR.KADIR תמונות/לייט E+C קרם עיניים צוואר ומחשוף.jpg"
    },
    {
        "id": "kadir-ec3",
        "name": "לייט E+C סרום",
        "brand": "Dr. Kadir",
        "price": 235,
        "category": "LIGHT E+C",
        "volume": "125 מ\"ל",
        "description": "סרום ויטמינים להענקת זוהר.",
        "image": "DR.KADIR תמונות/לייט E+C סרום.jpg"
    },
    {
        "id": "kadir-ec4",
        "name": "לייט E+C קצף ניקוי עדין",
        "brand": "Dr. Kadir",
        "price": 97,
        "category": "LIGHT E+C",
        "volume": "200 מ\"ל",
        "description": "קצף ניקוי עדין לכל סוגי העור.",
        "image": "DR.KADIR תמונות/לייט E+C קצף ניקוי עדין.jpg"
    },
    {
        "id": "kadir-aqua1",
        "name": "אקווה קקטוס תחליב לחות לעור נורמלי-שמן",
        "brand": "Dr. Kadir",
        "price": 191,
        "category": "AQUA CACTUS",
        "volume": "50 מ\"ל",
        "description": "תחליב לחות קליל המבוסס על אקווה קקטוס.",
        "image": "DR.KADIR תמונות/אקווה קקטוס תחליב לחות לעור נורמלי-שמן.jpg"
    },
    {
        "id": "kadir-aqua2",
        "name": "אקווה קקטוס סרום לעור נורמלי-שמן",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "AQUA CACTUS",
        "volume": "50 מ\"ל",
        "description": "סרום לחות להרגעה ורעננות.",
        "image": "DR.KADIR תמונות/אקווה קקטוס סרום לעור נורמלי-שמן.jpg"
    },
    {
        "id": "kadir-aqua3",
        "name": "אקווה קקטוס מסכה לעור נורמלי-שמן",
        "brand": "Dr. Kadir",
        "price": 172,
        "category": "AQUA CACTUS",
        "volume": "75 מ\"ל",
        "description": "מסכה מרגיעה ומלחחת.",
        "image": "DR.KADIR תמונות/אקווה קקטוס מסכה לעור נורמלי-שמן.jpg"
    },
    {
        "id": "kadir-aqua4",
        "name": "אקווה קקטוס ג'ל להרגעת העור",
        "brand": "Dr. Kadir",
        "price": 174,
        "category": "AQUA CACTUS",
        "volume": "330 מ\"ל",
        "description": "ג'ל הרגעה אינטנסיבי.",
        "image": "DR.KADIR תמונות/אקווה קקטוס ג'ל להרגעת העור.jpg"
    },
    {
        "id": "kadir-gold1",
        "name": "גולד מטריקס קרם לחות לעור נורמלי-יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "GOLD MATRIX",
        "volume": "50 מ\"ל",
        "description": "קרם לחות יוקרתי למיצוק העור.",
        "image": "DR.KADIR תמונות/גולד מטריקס קרם לחות לעור נורמלי-יבש.jpg"
    },
    {
        "id": "kadir-gold2",
        "name": "גולד מטריקס קרם הזנה לעור נורמלי-יבש",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "GOLD MATRIX",
        "volume": "50 מ\"ל",
        "description": "קרם הזנה עשיר לשיפור הגמישות.",
        "image": "DR.KADIR תמונות/גולד מטריקס קרם הזנה לעור נורמלי-יבש.jpg"
    },
    {
        "id": "kadir-gold3",
        "name": "גולד מטריקס סרום",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "GOLD MATRIX",
        "volume": "30 מ\"ל",
        "description": "סרום מרוכז למראה עור צעיר.",
        "image": "DR.KADIR תמונות/גולד מטריקס סרום.jpg"
    },
    {
        "id": "kadir-gold4",
        "name": "גולד מטריקס מסכת זהב",
        "brand": "Dr. Kadir",
        "price": 201,
        "category": "GOLD MATRIX",
        "volume": "50 מ\"ל",
        "description": "מסכת יופי מוזהבת.",
        "image": "DR.KADIR תמונות/גולד מטריקס מסכת זהב.jpg"
    },
    {
        "id": "kadir-sebo1",
        "name": "סבו-רליף קרם לעור עם נטייה לאדמומיות וקילוף",
        "brand": "Dr. Kadir",
        "price": 116,
        "category": "SEBO RELIEFE",
        "volume": "75 מ\"ל",
        "description": "קרם טיפולי להרגעת אדמומיות וקילופים.",
        "image": "DR.KADIR תמונות/סבו-רליף קרם לעור עם נטייה לאדמומיות וקילוף.jpg"
    },
    {
        "id": "kadir-sebo2",
        "name": "סבו-רליף קצף ניקוי עדין לעור",
        "brand": "Dr. Kadir",
        "price": 97,
        "category": "SEBO RELIEFE",
        "volume": "200 מ\"ל",
        "description": "קצף ניקוי עדין המותאם לעור מגורה.",
        "image": "DR.KADIR תמונות/סבו-רליף קצף ניקוי עדין לעור.jpg"
    },
    {
        "id": "kadir-trop1",
        "name": "טרופיקאר קרם לחות לעור נורמלי-יבש",
        "brand": "Dr. Kadir",
        "price": 104,
        "category": "TROPICARE",
        "volume": "75 מ\"ל",
        "description": "קרם לחות המבוסס על תמציות טרופיות.",
        "image": "DR.KADIR תמונות/טרופיקאר קרם לחות לעור נורמלי-יבש.jpg"
    },
    {
        "id": "kadir-trop2",
        "name": "טרופיקאר סבון גרגרים לפנים",
        "brand": "Dr. Kadir",
        "price": 74,
        "category": "TROPICARE",
        "volume": "75 מ\"ל",
        "description": "סבון פנים המכיל גרגירים לניקוי יסודי.",
        "image": "DR.KADIR תמונות/טרופיקאר סבון גרגרים לפנים.jpg"
    },
    {
        "id": "kadir-cal1",
        "name": "קרם מסאז' קלנדולה",
        "brand": "Dr. Kadir",
        "price": 150,
        "category": "CALENDULA",
        "volume": "250 מ\"ל",
        "description": "קרם עיסוי המועשר בקלנדולה.",
        "image": "DR.KADIR תמונות/קרם מסאז' קלנדולה.jpg"
    },
    {
        "id": "kadir-cal2",
        "name": "שמן עיסוי קלנדולה נבט חיטה",
        "brand": "Dr. Kadir",
        "price": 227,
        "category": "CALENDULA",
        "volume": "330 מ\"ל",
        "description": "שמן עיסוי מזין המשלב קלנדולה ונבט חיטה.",
        "image": "DR.KADIR תמונות/שמן עיסוי קלנדולה נבט חיטה.jpg"
    },
    {
        "id": "kadir-cal3",
        "name": "אל-סבון ג'ל קלנדולה",
        "brand": "Dr. Kadir",
        "price": 76,
        "category": "CALENDULA",
        "volume": "330 מ\"ל",
        "description": "אל-סבון המכיל תמצית קלנדולה.",
        "image": "DR.KADIR תמונות/אל-סבון ג'ל קלנדולה.jpg"
    },
    {
        "id": "kadir-green1",
        "name": "תרחיץ תה ירוק לטיפוח עור הפנים",
        "brand": "Dr. Kadir",
        "price": 76,
        "category": "GREEN TEA",
        "volume": "330 מ\"ל",
        "description": "תרחיץ פנים המועשר בתה ירוק.",
        "image": "DR.KADIR תמונות/תרחיץ תה ירוק לטיפוח עור הפנים.jpg"
    },
    {
        "id": "kadir-green2",
        "name": "אלסבון גרגרים לגוף ולפנים",
        "brand": "Dr. Kadir",
        "price": 125,
        "category": "GREEN TEA",
        "volume": "300 מ\"ל",
        "description": "אלסבון עם גרגירים לניקוי הגוף והפנים.",
        "image": "DR.KADIR תמונות/אלסבון גרגרים לגוף ולפנים.jpg"
    },
    {
        "id": "kadir-lav1",
        "name": "ג'ל עיסוי לבנדר",
        "brand": "Dr. Kadir",
        "price": 174,
        "category": "LAVENDER",
        "volume": "330 מ\"ל",
        "description": "ג'ל עיסוי מרגיע בריח לבנדר.",
        "image": "DR.KADIR תמונות/ג'ל עיסוי לבנדר.jpg"
    },
    {
        "id": "kadir-cls1",
        "name": "קרם מזין נבט חיטה-אבוקדו לעור יבש",
        "brand": "Dr. Kadir",
        "price": 110,
        "category": "CLASSICS CREAMS – קרמים ולחויות",
        "volume": "75 מ\"ל",
        "description": "קרם מזין המבוסס על נבט חיטה ואבוקדו.",
        "image": "DR.KADIR תמונות/קרם מזין נבט חיטה-אבוקדו לעור יבש.jpg"
    },
    {
        "id": "kadir-cls2",
        "name": "קרם לחות נבט חיטה לעור יבש",
        "brand": "Dr. Kadir",
        "price": 110,
        "category": "CLASSICS CREAMS – קרמים ולחויות",
        "volume": "75 מ\"ל",
        "description": "קרם לחות קלאסי המבוסס על נבט חיטה.",
        "image": "DR.KADIR תמונות/קרם לחות נבט חיטה לעור יבש.jpg"
    },
    {
        "id": "kadir-cls3",
        "name": "הידרולקטן קרם לחות לעור יבש",
        "brand": "Dr. Kadir",
        "price": 102,
        "category": "CLASSICS CREAMS – קרמים ולחויות",
        "volume": "75 מ\"ל",
        "description": "קרם לחות הידרולקטן לעור יבש.",
        "image": "DR.KADIR תמונות/הידרולקטן קרם לחות לעור יבש.jpg"
    },
    {
        "id": "kadir-cls4",
        "name": "הידרולקטן קרם לחות לעור שמן",
        "brand": "Dr. Kadir",
        "price": 102,
        "category": "CLASSICS CREAMS – קרמים ולחויות",
        "volume": "75 מ\"ל",
        "description": "קרם לחות הידרולקטן המותאם לעור שמן.",
        "image": "DR.KADIR תמונות/הידרולקטן קרם לחות לעור שמן.jpg"
    },
    {
        "id": "kadir-cls5",
        "name": "קרם עיניים וצוואר אצות ים-רוז היפ",
        "brand": "Dr. Kadir",
        "price": 172,
        "category": "CLASSICS CREAMS – קרמים ולחויות",
        "volume": "30 מ\"ל",
        "description": "קרם ממוקד לאזור העיניים והצוואר.",
        "image": "DR.KADIR תמונות/קרם עיניים וצוואר אצות ים-רוז היפ.jpg"
    },
    {
        "id": "kadir-sol1",
        "name": "קרם לחות עם הגנה מוגברת פקטור 50+",
        "brand": "Dr. Kadir",
        "price": 195,
        "category": "SOLAR ZONE – להגנה מהשמש",
        "volume": "75 מ\"ל",
        "description": "קרם לחות המעניק הגנה מקסימלית מהשמש.",
        "image": "DR.KADIR תמונות/קרם לחות עם הגנה מוגברת פקטור 50+.jpg"
    },
    {
        "id": "kadir-sol2",
        "name": "תרסיס לחות עם הגנה מוגברת פקטור 50",
        "brand": "Dr. Kadir",
        "price": 182,
        "category": "SOLAR ZONE – להגנה מהשמש",
        "volume": "125 מ\"ל",
        "description": "תרסיס הגנה קל לשימוש.",
        "image": "DR.KADIR תמונות/תרסיס לחות עם הגנה מוגברת פקטור 50.jpg"
    },
    {
        "id": "kadir-sol3",
        "name": "קרם BB עם הגנה מוגברת פקטור 30",
        "brand": "Dr. Kadir",
        "price": 155,
        "category": "SOLAR ZONE – להגנה מהשמש",
        "volume": "75 מ\"ל",
        "description": "קרם BB המשלב הגנה מהשמש.",
        "image": "DR.KADIR תמונות/קרם BB עם הגנה מוגברת פקטור 30.jpg"
    },
    {
        "id": "kadir-sol4",
        "name": "קרם CC פעיל עם הגנה מוגברת פקטור 50",
        "brand": "Dr. Kadir",
        "price": 182,
        "category": "SOLAR ZONE – להגנה מהשמש",
        "volume": "75 מ\"ל",
        "description": "קרם CC פעיל עם הגנה גבוהה.",
        "image": "DR.KADIR תמונות/קרם CC פעיל with הגנה מוגברת פקטור 50.jpg"
    },
    {
        "id": "kadir-sol5",
        "name": "שפתון הגנה פקטור 50+",
        "brand": "Dr. Kadir",
        "price": 68,
        "category": "SOLAR ZONE – להגנה מהשמש",
        "volume": "4.5 גרם",
        "description": "שפתון הגנה המונע יובש ונזקי שמש.",
        "image": "DR.KADIR תמונות/שפתון הגנה פקטור 50+.jpg"
    },
    {
        "id": "kadir-bsc1",
        "name": "שמן מיסלרי",
        "brand": "Dr. Kadir",
        "price": 112,
        "category": "BASIC CLEANSING – מוצרי ניקוי",
        "volume": "150 מ\"ל",
        "description": "שמן לניקוי פנים יסודי.",
        "image": "DR.KADIR תמונות/שמן מיסלרי חדש.jpg"
    },
    {
        "id": "kadir-bsc2",
        "name": "מים מיסלריים",
        "brand": "Dr. Kadir",
        "price": 85,
        "category": "BASIC CLEANSING – מוצרי ניקוי",
        "volume": "150 מ\"ל",
        "description": "מים מיסלריים לניקוי עדין ומהיר.",
        "image": "DR.KADIR תמונות/מים מיסלריים חדש.jpg"
    },
    {
        "id": "kadir-bsc3",
        "name": "מסיר איפור דו-פאזי",
        "brand": "Dr. Kadir",
        "price": 104,
        "category": "BASIC CLEANSING – מוצרי ניקוי",
        "volume": "150 מ\"ל",
        "description": "מסיר איפור דו-פאזי המנקה גם איפור עמיד.",
        "image": "DR.KADIR תמונות/מסיר איפור דו-פאזי.jpg"
    },
    {
        "id": "kadir-bsc4",
        "name": "מי פנים ללא אלכוהול לעור יבש",
        "brand": "Dr. Kadir",
        "price": 91,
        "category": "BASIC CLEANSING – מוצרי ניקוי",
        "volume": "250 מ\"ל",
        "description": "מי פנים עדינים ללא אלכוהול.",
        "image": "DR.KADIR תמונות/מי פנים ללא אלכוהול לעור יבש.jpg"
    },
    {
        "id": "kadir-bsc5",
        "name": "מי פנים רוז-קמומיל לעור נורמלי",
        "brand": "Dr. Kadir",
        "price": 91,
        "category": "BASIC CLEANSING – מוצרי ניקוי",
        "volume": "250 מ\"ל",
        "description": "מי פנים המבוססים על רוז וקמומיל.",
        "image": "DR.KADIR תמונות/מי פנים רוז - קמומיל לעור נורמלי.jpg"
    },
    {
        "id": "kadir-bsc6",
        "name": "מי פנים אסטרינג'נט הממליס לעור שמן",
        "brand": "Dr. Kadir",
        "price": 91,
        "category": "BASIC CLEANSING – מוצרי ניקוי",
        "volume": "250 מ\"ל",
        "description": "מי פנים אסטרינג'נט לכיווץ נקבוביות.",
        "image": "DR.KADIR תמונות/מי פנים אסטרינג'נט הממליס לעור שמן.jpg"
    },
    {
        "id": "kadir-bsc7",
        "name": "חלב פנים לכל סוגי העור",
        "brand": "Dr. Kadir",
        "price": 91,
        "category": "BASIC CLEANSING – מוצרי ניקוי",
        "volume": "250 מ\"ל",
        "description": "חלב פנים מנקה ומזין.",
        "image": "DR.KADIR תמונות/חלב פנים לכל סוגי העור.jpg"
    },
    {
        "id": "kadir-bsc8",
        "name": "שמן הידרופילי",
        "brand": "Dr. Kadir",
        "price": 108,
        "category": "BASIC CLEANSING – מוצרי ניקוי",
        "volume": "250 מ\"ל",
        "description": "שמן הידרופילי לניקוי עמוק.",
        "image": "DR.KADIR תמונות/שמן הידרופילי.jpg"
    },
    {
        "id": "kadir-bsc9",
        "name": "אלסבון רימונים",
        "brand": "Dr. Kadir",
        "price": 76,
        "category": "BASIC CLEANSING – מוצרי ניקוי",
        "volume": "330 מ\"ל",
        "description": "אלסבון המועשר בתמצית רימונים.",
        "image": "DR.KADIR תמונות/אלסבון רימונים.jpg"
    },
    {
        "id": "kadir-skn1",
        "name": "פילינג אלפא הידרוקסי 10",
        "brand": "Dr. Kadir",
        "price": 125,
        "category": "SKIN RENEW – פילינג לחידוש העור",
        "volume": "30 מ\"ל",
        "description": "פילינג חומצות אלפא הידרוקסיות לחידוש העור.",
        "image": "DR.KADIR תמונות/פילינג אלפא הידרוקסי 10.jpg"
    },
    {
        "id": "kadir-skn2",
        "name": "פילינג גרגירי עם קמומיל",
        "brand": "Dr. Kadir",
        "price": 176,
        "category": "SKIN RENEW – פילינג לחידוש העור",
        "volume": "250 מ\"ל",
        "description": "פילינג גרגרים עדין המרגיע את העור.",
        "image": "DR.KADIR תמונות/פילינג גרגירי עם קמומיל.jpg"
    },
    {
        "id": "kadir-skn3",
        "name": "פילינג משחתי",
        "brand": "Dr. Kadir",
        "price": 80,
        "category": "SKIN RENEW – פילינג לחידוש העור",
        "volume": "75 מ\"ל",
        "description": "פילינג במרקם משחה לניקוי יסודי.",
        "image": "DR.KADIR תמונות/פילינג משחתי.jpg"
    },
    {
        "id": "kadir-skn4",
        "name": "פילינג גרגירי ים המלח",
        "brand": "Dr. Kadir",
        "price": 93,
        "category": "SKIN RENEW – פילינג לחידוש העור",
        "volume": "75 מ\"ל",
        "description": "פילינג גרגרים המועשר במינרלים מים המלח.",
        "image": "DR.KADIR תמונות/פילינג גרגירי – ים המלח.jpg"
    },
    {
        "id": "kadir-msk1",
        "name": "מסכת אצות ים לעור נורמלי",
        "brand": "Dr. Kadir",
        "price": 121,
        "category": "BEAUTY MASKS – מסכות",
        "volume": "75 מ\"ל",
        "description": "מסכה המבוססת על אצות ים להענקת לחות.",
        "image": "DR.KADIR תמונות/מסכת אצות ים לעור נורמלי.jpg"
    },
    {
        "id": "kadir-msk2",
        "name": "מסכת אלוורה הממליס לעור שמן",
        "brand": "Dr. Kadir",
        "price": 121,
        "category": "BEAUTY MASKS – מסכות",
        "volume": "75 מ\"ל",
        "description": "מסכה מרגיעה המכווצת נקבוביות.",
        "image": "DR.KADIR תמונות/מסכת אלוורה הממליס לעור שמן.jpg"
    },
    {
        "id": "kadir-msk3",
        "name": "מסכת נבט חיטה עם רוז היפ לעור יבש",
        "brand": "Dr. Kadir",
        "price": 121,
        "category": "BEAUTY MASKS – מסכות",
        "volume": "75 מ\"ל",
        "description": "מסכת הזנה לעור יבש מאוד.",
        "image": "DR.KADIR תמונות/מסכת נבט חיטה עם רוז היפ לעור יבש.jpg"
    },
    {
        "id": "kadir-msk4",
        "name": "מסכת ביו-סולפור לעור בעייתי",
        "brand": "Dr. Kadir",
        "price": 121,
        "category": "BEAUTY MASKS – מסכות",
        "volume": "75 מ\"ל",
        "description": "מסכה טיפולית לעור שמן ובעייתי.",
        "image": "DR.KADIR תמונות/מסכת ביו-סולפור לעור בעייתי.jpg"
    },
    {
        "id": "kadir-top1",
        "name": "מייק אפ משי נטול שומן (6 גוונים)",
        "brand": "Dr. Kadir",
        "price": 176,
        "category": "TOP COVER – איפור מקצועי",
        "volume": "30 מ\"ל",
        "description": "מייק אפ בגימור משי לכיסוי מושלם.",
        "image": "DR.KADIR תמונות/מייק אפ משי נטול שומן (6 גוונים).jpg"
    },
    {
        "id": "kadir-top2",
        "name": "פודרה שקופה",
        "brand": "Dr. Kadir",
        "price": 159,
        "category": "TOP COVER – איפור מקצועי",
        "volume": "35 גרם",
        "description": "פודרה שקופה לקיבוע האיפור.",
        "image": "DR.KADIR תמונות/פודרה שקופה.jpg"
    },
    {
        "id": "kadir-body1",
        "name": "קרם גוף מזין עם חומצה היאלורונית",
        "brand": "Dr. Kadir",
        "price": 136,
        "category": "BODY COLLECTION – סדרת הגוף",
        "volume": "250 מ\"ל",
        "description": "קרם גוף המועשר בחומצה היאלורונית.",
        "image": "DR.KADIR תמונות/קרם גוף מזין עם חומצה היאלורונית חדש.jpg"
    },
    {
        "id": "kadir-body2",
        "name": "קרם ידיים מזין עם חומצה היאלורונית",
        "brand": "Dr. Kadir",
        "price": 89,
        "category": "BODY COLLECTION – סדרת הגוף",
        "volume": "75 מ\"ל",
        "description": "קרם ידיים המעניק לחות אינטנסיבית.",
        "image": "DR.KADIR תמונות/קרם ידיים מזין עם חומצה היאלורונית חדש.jpg"
    },
    {
        "id": "kadir-body3",
        "name": "קרם רגליים מזין",
        "brand": "Dr. Kadir",
        "price": 104,
        "category": "BODY COLLECTION – סדרת הגוף",
        "volume": "75 מ\"ל",
        "description": "קרם רגליים המונע יובש וסדקים.",
        "image": "DR.KADIR תמונות/קרם רגליים מזין חדש.jpg"
    },
    {
        "id": "kadir-body4",
        "name": "תחליב גוף ממרק",
        "brand": "Dr. Kadir",
        "price": 125,
        "category": "BODY COLLECTION – סדרת הגוף",
        "volume": "300 מ\"ל",
        "description": "תחליב גוף המעניק מרקם קטיפתי.",
        "image": "DR.KADIR תמונות/תחליב גוף ממרק.jpg"
    },
    {
        "id": "kadir-body5",
        "name": "דאודורנט רול און",
        "brand": "Dr. Kadir",
        "price": 68,
        "category": "BODY COLLECTION – סדרת הגוף",
        "volume": "70 גרם",
        "description": "דאודורנט המעניק תחושת רעננות.",
        "image": "DR.KADIR תמונות/דאודורנט רול און בריחות שונים.jpg"
    },
    {
        "id": "kadir-body6",
        "name": "סבון היגייני אינטימי",
        "brand": "Dr. Kadir",
        "price": 80,
        "category": "BODY COLLECTION – סדרת הגוף",
        "volume": "250 מ\"ל",
        "description": "סבון עדין המותאם לאזור האינטימי.",
        "image": "DR.KADIR תמונות/סבון היגייני אינטימי.jpg"
    },
    {
        "id": "kadir-cars1",
        "name": "כריזמה תחליב לאחר גילוח",
        "brand": "Dr. Kadir",
        "price": 174,
        "category": "CARISMA – לגבר",
        "volume": "125 מ\"ל",
        "description": "תחליב מרגיע לאחר גילוח לגבר.",
        "image": "DR.KADIR תמונות/כריזמה תחליב לאחר גילוח.jpg"
    },
    {
        "id": "kadir-cars2",
        "name": "כריזמה דאודורנט לגבר",
        "brand": "Dr. Kadir",
        "price": 68,
        "category": "CARISMA – לגבר",
        "volume": "70 גרם",
        "description": "דאודורנט בניחוח גברי.",
        "image": "DR.KADIR תמונות/כריזמה דאודורנט לגבר.jpg"
    },
    // PHD
    {
        "id": "phd-acure1",
        "name": "קרם לחות טיפולי משקם UVA & UVB",
        "brand": "PHD",
        "price": 210,
        "category": "ACURE",
        "volume": "50 מ\"ל",
        "description": "קרם לחות טיפולי משקם עם הגנה מהשמש.",
        "image": "PHD תמונות/קרם לחות טיפולי משקם UVA & UVB.png"
    },
    {
        "id": "phd-acure2",
        "name": "ג'ל טיפולי לעור שמן ובעייתי",
        "brand": "PHD",
        "price": 241,
        "category": "ACURE",
        "volume": "50 מ\"ל",
        "description": "ג'ל טיפולי לאיזון עור שמן.",
        "image": "PHD תמונות/ג'ל טיפולי לעור שמן ובעייתי.jpg"
    },
    {
        "id": "phd-acure3",
        "name": "מסכה טיפולית לעור שמן ובעייתי",
        "brand": "PHD",
        "price": 241,
        "category": "ACURE",
        "volume": "100 מ\"ל",
        "description": "מסכה טיפולית לניקוי וטיהור העור.",
        "image": "PHD תמונות/מסכה טיפולית לעור שמן ובעייתי.jpg"
    },
    {
        "id": "phd-alba1",
        "name": "מסכה הבהרה טיפולית",
        "brand": "PHD",
        "price": 248,
        "category": "ALBA CONTROL",
        "volume": "100 מ\"ל",
        "description": "מסכת הבהרה לטיפול בפיגמנטציה.",
        "image": "PHD תמונות/מסכה הבהרה טיפולית.jpeg"
    },
    {
        "id": "phd-alba2",
        "name": "סרום הבהרה טיפולי",
        "brand": "PHD",
        "price": 366,
        "category": "ALBA CONTROL",
        "volume": "50 מ\"ל",
        "description": "סרום מרוכז להבהרת כתמי עור.",
        "image": "PHD תמונות/סרום הבהרה טיפולי.jpg"
    },
    {
        "id": "phd-alba3",
        "name": "סבון הבהרה טיפולי",
        "brand": "PHD",
        "price": 142,
        "category": "ALBA CONTROL",
        "volume": "200 מ\"ל",
        "description": "סבון פנים מסייע בתהליך ההבהרה.",
        "image": "PHD תמונות/סבון הבהרה טיפולי.jpg"
    },
    {
        "id": "phd-calma1",
        "name": "קרם לחות והרגעה טיפולי",
        "brand": "PHD",
        "price": 135,
        "category": "CALMAFINE",
        "volume": "100 מ\"ל",
        "description": "קרם לחות מרגיע לעור רגיש.",
        "image": "PHD תמונות/קרם לחות והרגעה טיפולי.jpg"
    },
    {
        "id": "phd-calma2",
        "name": "תמיסה היגיינית טיפולית",
        "brand": "PHD",
        "price": 156,
        "category": "CALMAFINE",
        "volume": "200 מ\"ל",
        "description": "תמיסה לחיטוי והיגיינה מירבית.",
        "image": "PHD תמונות/תמיסה היגיינית טיפולית.jpg"
    },
    {
        "id": "phd-calma3",
        "name": "משחה טיפולית לאחר איפור קבוע ועור מגורה",
        "brand": "PHD",
        "price": 130,
        "category": "CALMAFINE",
        "volume": "30 מ\"ל",
        "description": "משחה לשיקום העור לאחר טיפולים.",
        "image": "PHD תמונות/משחה טיפולית לאחר איפור קבוע ועור מגורה.jpg"
    },
    {
        "id": "phd-calma4",
        "name": "ג'ל קרם ניקוי ומסיר איפור לעור עדין מגורה",
        "brand": "PHD",
        "price": 130,
        "category": "CALMAFINE",
        "volume": "200 מ\"ל",
        "description": "ניקוי עדין במיוחד לעור מגורה.",
        "image": "PHD תמונות/גל קרם ניקוי ומסיר איפור לעור עדין מגורה.jpg"
    },
    {
        "id": "phd-calma5",
        "name": "מסכת הרגעה ולחות טיפולית לשיקום העור",
        "brand": "PHD",
        "price": 208,
        "category": "CALMAFINE",
        "volume": "100 מ\"ל",
        "description": "מסכה לשיקום והרגעת העור.",
        "image": "PHD תמונות/מסכת הרגעה ולחות טיפולית לשיקום העור.jpg"
    },
    {
        "id": "phd-calma6",
        "name": "הידרו סרום לחות טיפולי",
        "brand": "PHD",
        "price": 260,
        "category": "CALMAFINE",
        "volume": "50 מ\"ל",
        "description": "סרום לחות אינטנסיבי.",
        "image": "PHD תמונות/הידרו סרום לחות טיפולי.jpg"
    },
    {
        "id": "phd-gly1",
        "name": "ג'ל פילינג טיפולי ללילה",
        "brand": "PHD",
        "price": 245,
        "category": "GLYCOCYL",
        "volume": "50 מ\"ל",
        "description": "פילינג לילה לחידוש המרקם.",
        "image": "PHD תמונות/גל פילינג טיפולי ללילה.jpg"
    },
    {
        "id": "phd-gly2",
        "name": "תמיסת פילינג טיפולית",
        "brand": "PHD",
        "price": 253,
        "category": "GLYCOCYL",
        "volume": "200 מ\"ל",
        "description": "תמיסה פעילה לחידוש העור.",
        "image": "PHD תמונות/תמיסת פילינג טיפולית.jpg"
    },
    {
        "id": "phd-gly3",
        "name": "סבון פילינג טיפולי",
        "brand": "PHD",
        "price": 135,
        "category": "GLYCOCYL",
        "volume": "200 מ\"ל",
        "description": "סבון פנים המשלב פילינג עדין.",
        "image": "PHD תמונות/סבון פילינג טיפולי.jpg"
    },
    {
        "id": "phd-lift1",
        "name": "מסכה טיפולית למיצוק להפחתת קמטים",
        "brand": "PHD",
        "price": 271,
        "category": "LIFT’N FIRM",
        "volume": "100 מ\"ל",
        "description": "מסכה למיצוק אינטנסיבי.",
        "image": "PHD תמונות/מסכה טיפולית למיצוק להפחתת קמטים.jpg"
    },
    {
        "id": "phd-lift2",
        "name": "אומגה קרם אנטי אייגינג והזנה טיפולי",
        "brand": "PHD",
        "price": 269,
        "category": "LIFT’N FIRM",
        "volume": "50 מ\"ל",
        "description": "קרם אומגה להזנה עמוקה.",
        "image": "PHD תמונות/אומגה קרם אנטי אייגינג והזנה טיפולי.jpg"
    },
    {
        "id": "phd-lift3",
        "name": "סרום פפטידים למיצוק והפחתת קמטוטים",
        "brand": "PHD",
        "price": 352,
        "category": "LIFT’N FIRM",
        "volume": "50 מ\"ל",
        "description": "סרום פפטידים לטשטוש קמטים.",
        "image": "PHD תמונות/סרום פפטידים למיצוק והפחתת קמטוטים.jpg"
    },
    {
        "id": "phd-ped1",
        "name": "קרם פילינג טיפולי לכף הרגל",
        "brand": "PHD",
        "price": 146,
        "category": "PEDICURE",
        "volume": "100 מ\"ל",
        "description": "קרם פילינג לכף רגל חלקה.",
        "image": "PHD תמונות/קרם פילינג טיפולי לכף הרגל.jpg"
    },
    {
        "id": "phd-ony1",
        "name": "תמיסה טיפולית לשיקום והיגיינת הציפורן",
        "brand": "PHD",
        "price": 163,
        "category": "ONYCOMED",
        "volume": "15 מ\"ל",
        "description": "תמיסה לטיפול ושיקום הציפורניים.",
        "image": "PHD תמונות/תמיסה טיפולית לשיקום והיגיינת הציפורן.jpg"
    },
    // Pharm Foot
    {
        "id": "pharm-allin1",
        "name": "קולגן פאוור",
        "brand": "Pharm Foot",
        "price": 130,
        "category": "קטגוריית אלין (ALLIN)",
        "volume": "15 מ\"ל",
        "description": "סרום קולגן למיצוק ושיקום הציפורן והעור.",
        "image": "FHARM FOOT תמונות/קולגן פאוור.jpg"
    },
    {
        "id": "pharm-urea1",
        "name": "מרכך נקודתי",
        "brand": "Pharm Foot",
        "price": 110,
        "category": "קטגוריית קו האוריאה (UREA LINE)",
        "volume": "15 מ\"ל",
        "description": "מרכך נקודתי לעור קשה ויבש.",
        "image": "FHARM FOOT תמונות/מרכך נקודתי.jpg"
    },
    {
        "id": "pharm-urea2",
        "name": "רי-סופטנר דרמו",
        "brand": "Pharm Foot",
        "price": 110,
        "category": "קטגוריית קו האוריאה (UREA LINE)",
        "volume": "75 מ\"ל",
        "description": "תכשיר לריכוך העור בכף הרגל.",
        "image": "FHARM FOOT תמונות/רי-סופטנר דרמו.jpg"
    },
    {
        "id": "pharm-urea3",
        "name": "מוס לכף הרגל",
        "brand": "Pharm Foot",
        "price": 130,
        "category": "קטגוריית קו האוריאה (UREA LINE)",
        "volume": "125 מ\"ל",
        "description": "מוס אוורירי המעניק לחות אינטנסיבית.",
        "image": "FHARM FOOT תמונות/מוס לכף הרגל.jpg"
    },
    {
        "id": "pharm-urea4",
        "name": "הידרו קרים (קרם לחות)",
        "brand": "Pharm Foot",
        "price": 150,
        "category": "קטגוריית קו האוריאה (UREA LINE)",
        "volume": "150 מ\"ל",
        "description": "קרם לחות המבוסס על אוריאה.",
        "image": "FHARM FOOT תמונות/הידרו קרים (קרם לחות).jpg"
    },
    {
        "id": "pharm-urea5",
        "name": "דרמה סקרייפר (פילינג)",
        "brand": "Pharm Foot",
        "price": 127,
        "category": "קטגוריית קו האוריאה (UREA LINE)",
        "volume": "200 מ\"ל",
        "description": "פילינג לחידוש עור כף הרגל.",
        "image": "FHARM FOOT תמונות/דרמה סקרייפר.jpg"
    },
    {
        "id": "pharm-urea6",
        "name": "אוריאה פורטה",
        "brand": "Pharm Foot",
        "price": 150,
        "category": "קטגוריית קו האוריאה (UREA LINE)",
        "volume": "75 מ\"ל",
        "description": "קרם אוריאה בריכוז גבוה לעור יבש מאוד.",
        "image": "FHARM FOOT תמונות/אוריאה פורטה.jpg"
    },
    {
        "id": "pharm-urea7",
        "name": "דרמו אינטנס",
        "brand": "Pharm Foot",
        "price": 165,
        "category": "קטגוריית קו האוריאה (UREA LINE)",
        "volume": "250 מ\"ל",
        "description": "טיפול אינטנסיבי לעור כף הרגל.",
        "image": "FHARM FOOT תמונות/דרמו אינטנס.jpg"
    },
    {
        "id": "pharm-cols1",
        "name": "נוטרי רי-ג'נרטור (משקם מזין) 75 מ\"ל",
        "brand": "Pharm Foot",
        "price": 128,
        "category": "קטגוריית קולוסטרום (COLOSTRUM)",
        "volume": "75 מ\"ל",
        "description": "קרם הזנה ושיקום המבוסס על קולוסטרום.",
        "image": "FHARM FOOT תמונות/נוטרי רי-ג'נרטור (משקם מזין).jpg"
    },
    {
        "id": "pharm-cols2",
        "name": "נוטרי רי-ג'נרטור (משקם מזין) 400 מ\"ל",
        "brand": "Pharm Foot",
        "price": 320,
        "category": "קטגוריית קולוסטרום (COLOSTRUM)",
        "volume": "400 מ\"ל",
        "description": "קרם הזנה ושיקום באריזה גדולה.",
        "image": "FHARM FOOT תמונות/נוטרי רי-ג'נרטור (משקם מזין)400ML.jpg"
    },
    {
        "id": "pharm-cols3",
        "name": "אוני-פלזמה",
        "brand": "Pharm Foot",
        "price": 130,
        "category": "קטגוריית קולוסטרום (COLOSTRUM)",
        "volume": "15 מ\"ל",
        "description": "תכשיר לשיקום והגנה על הציפורן.",
        "image": "FHARM FOOT תמונות/אוני-פלזמה.jpg"
    },
    {
        "id": "pharm-cols4",
        "name": "ביו קומפרס",
        "brand": "Pharm Foot",
        "price": 165,
        "category": "קטגוריית קולוסטרום (COLOSTRUM)",
        "volume": "250 מ\"ל",
        "description": "קומפרס ביו-אקטיבי לטיפול בכף הרגל.",
        "image": "FHARM FOOT תמונות/ביו קומפרס.jpg"
    },
    {
        "id": "pharm-silv1",
        "name": "סילבר רי-נובטור (מחדש כסוף) 75 מ\"ל",
        "brand": "Pharm Foot",
        "price": 128,
        "category": "קטגוריית מיקרו-סילבר (MICROSILVER)",
        "volume": "75 מ\"ל",
        "description": "קרם מחדש המועשר במיקרו-סילבר.",
        "image": "FHARM FOOT תמונות/סילבר רי-נובטור (מחדש כסוף).jpg"
    },
    {
        "id": "pharm-silv2",
        "name": "סילבר רי-נובטור (מחדש כסוף) 400 מ\"ל",
        "brand": "Pharm Foot",
        "price": 210,
        "category": "קטגוריית מיקרו-סילבר (MICROSILVER)",
        "volume": "400 מ\"ל",
        "description": "קרם מחדש כסוף באריזת חיסכון.",
        "image": "FHARM FOOT תמונות/סילבר רי-נובטור (מחדש כסוף)400ML.jpg"
    },
    {
        "id": "pharm-silv3",
        "name": "סילבר בוסטר",
        "brand": "Pharm Foot",
        "price": 130,
        "category": "קטגוריית מיקרו-סילבר (MICROSILVER)",
        "volume": "15 מ\"ל",
        "description": "בוסטר כסוף לטיפול ממוקד.",
        "image": "FHARM FOOT תמונות/סילבר בוסטר.jpg"
    },
    {
        "id": "pharm-ozo1",
        "name": "אוזון רי-בילדר (בונה מחדש) 75 מ\"ל",
        "brand": "Pharm Foot",
        "price": 128,
        "category": "קטגוריית שמן אוזון (OZONE OIL)",
        "volume": "75 מ\"ל",
        "description": "קרם משקם המבוסס על שמן אוזון.",
        "image": "FHARM FOOT תמונות/אוזון רי-בילדר (בונה מחדש).jpg"
    },
    {
        "id": "pharm-ozo2",
        "name": "אוזון רי-בילדר (בונה מחדש) 400 מ\"ל",
        "brand": "Pharm Foot",
        "price": 250,
        "category": "קטגוריית שמן אוזון (OZONE OIL)",
        "volume": "400 מ\"ל",
        "description": "קרם משקם באריזה גדולה.",
        "image": "FHARM FOOT תמונות/אוזון רי-בילדר (בונה מחדש)400ML.jpg"
    },
    {
        "id": "pharm-ozo3",
        "name": "אוזון גארד (מגן אוזון)",
        "brand": "Pharm Foot",
        "price": 110,
        "category": "קטגוריית שמן אוזון (OZONE OIL)",
        "volume": "150 מ\"ל",
        "description": "תרסיס הגנה המבוסס על שמן אוזון.",
        "image": "FHARM FOOT תמונות/אוזון גארד (מגן אוזון).jpg"
    },
    {
        "id": "pharm-ozo4",
        "name": "מגן לעקבים סדוקים 75 מ\"ל",
        "brand": "Pharm Foot",
        "price": 140,
        "category": "קטגוריית שמן אוזון (OZONE OIL)",
        "volume": "75 מ\"ל",
        "description": "משחה המגנה על עקבים סדוקים.",
        "image": "FHARM FOOT תמונות/מגן לעקבים סדוקים.jpg"
    },
    {
        "id": "pharm-ozo5",
        "name": "מגן לעקבים סדוקים 200 מ\"ל",
        "brand": "Pharm Foot",
        "price": 250,
        "category": "קטגוריית שמן אוזון (OZONE OIL)",
        "volume": "200 מ\"ל",
        "description": "משחה טיפולית לעקבים באריזה גדולה.",
        "image": "FHARM FOOT תמונות/מגן לעקבים סדוקים200ML.jpg"
    },
    {
        "id": "pharm-ozo6",
        "name": "אוזון סייף",
        "brand": "Pharm Foot",
        "price": 165,
        "category": "קטגוריית שמן אוזון (OZONE OIL)",
        "volume": "250 מ\"ל",
        "description": "תכשיר הגנה ושיקום לעור כף הרגל.",
        "image": "FHARM FOOT תמונות/אוזון סייף.jpg"
    },
    {
        "id": "pharm-mix1",
        "name": "מיקו-ורום (mycoVERRUM)",
        "brand": "Pharm Foot",
        "price": 130,
        "category": "קטגוריית מיקרו-סילבר, שמן אוזון וצמחי מרפא",
        "volume": "15 מ\"ל",
        "description": "טיפול ממוקד בבעיות עור.",
        "image": "FHARM FOOT תמונות/מיקו-ורום (mycoVERRUM).jpg"
    },
    {
        "id": "pharm-mix2",
        "name": "משחת מניעה (PREVENTIC)",
        "brand": "Pharm Foot",
        "price": 150,
        "category": "קטגוריית מיקרו-סילבר, שמן אוזון וצמחי מרפא",
        "volume": "75 מ\"ל",
        "description": "משחה למניעת זיהומים ובעיות עור.",
        "image": "FHARM FOOT תמונות/משחת מניעה (PREVENTIC).jpg"
    },
    {
        "id": "pharm-mix3",
        "name": "מוס רי-לייף (reLIFE)",
        "brand": "Pharm Foot",
        "price": 128,
        "category": "קטגוריית מיקרו-סילבר, שמן אוזון וצמחי מרפא",
        "volume": "105 מ\"ל",
        "description": "מוס טיפולי לשיפור מרקם העור.",
        "image": "FHARM FOOT תמונות/מוס רי-לייף (reLIFE).jpg"
    }
];

if (typeof window !== 'undefined') {
    window.products = products;
}
