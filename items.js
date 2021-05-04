const items = document.getElementById('items')
const searchButton = document.getElementById('search')
const priceButton = document.getElementById('price-selector')
const scopeButton = document.getElementById('scope-selector')
const usageButton = document.getElementById('usage-selector')
const resetButton = document.getElementById('reset')

const itemArray = [
    {
        name: 'Snowbot',
        summary: 'By Hanyang Robotics',
        cost: 2000,
        scope: 'Household',
        usage: 'Automatic',
        description: 'Snowbot, to be released in 2021, is an all-new artificially intelligent snowblower. It features a 360 degree rotation blower with a 20 foot range along with a snow brush for effective and comprehensive snow removal for your driveway. Ultrasonic sensors allow it to detect nearby objects and avoid obstacles. Rubber tracks and cold resistance allow it to remain functional in freezing weather. Its app features an automatic snow sweeping path along with customizable options.',
        recommendation: 'We recommend Snowbot for those who find themselves busy and are willing to splurge a little for one of the most technologically advanced solutions. Snowbot may also be a good fit for you if weather conditions or safety are concerns.',
        link: 'https://thesnowbot.com',
        img: './images/snowbot.jpg',
        scopeFilter: false,
        usageFilter: false
    },
    {
        name: 'SnoBrum-AUTO',
        summary: 'By SNOBRUM',
        cost: 40,
        scope: 'Vehicle',
        usage: 'Manual',
        description: 'The SnoBrum-AUTO was designed to move snow quickly and efficiently. It features a push broom design that makes it easy and seamless to use and a polyethylene foam blade that prevents it from causing harm to vehicles and windows.',
        recommendation: 'If you enjoy parking outside, then the SnoBrum-AUTO is the perfect fit for you. Designed for brushing snow off vehicles, this device will protect your paintjob while removing snow effectively.',
        link: 'https://www.amazon.com/SnoBrum-Push-Broom-Extendable-Telescoping-Scratching/dp/B0007LDXLA',
        img: './images/snobrum.png',
        scopeFilter: false,
        usageFilter: false
    },
    {
        name: 'Snow Joe SJ-SHLV01',
        summary: 'By Snow Joe',
        cost: 30,
        scope: 'Household',
        usage: 'Manual',
        description: 'This shovel features an additional handle to reduce the strain while shoveling snow.',
        recommendation: 'We recommend this shovel for those who like getting the job done by hand. The additional handle allows the user to handle heavier loads while maintaining a healthy posture.',
        link: 'https://www.amazon.com/Snow-Joe-SJ-SHLV01-Shovelution-Strain-Reducing/dp/B01LXEQ6UM/ref=sxin_10?asc_contentid=amzn1.osa.a6c1f1e9-3d86-42d4-b8ef-0b93381665ec.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.a6c1f1e9-3d86-42d4-b8ef-0b93381665ec.ATVPDKIKX0DER.en_US&creativeASIN=B01LXEQ6UM&cv_ct_cx=snow+shovel&cv_ct_id=amzn1.osa.a6c1f1e9-3d86-42d4-b8ef-0b93381665ec.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&dchild=1&keywords=snow+shovel&linkCode=oas&pd_rd_i=B01LXEQ6UM&pd_rd_r=21ff310a-eb54-4ac2-b593-4c527f2feca7&pd_rd_w=w0Egp&pd_rd_wg=xsDfg&pf_rd_p=c5aa77b7-f0ac-4b95-b207-5ef230c60c9b&pf_rd_r=V0D8DRXR1JNTSX74QXR2&qid=1619920097&sr=1-1-64f3a41a-73ca-403a-923c-8152c45485fe&tag=aimassociatesski-20',
        img: './images/snowjoe.png',
        scopeFilter: false,
        usageFilter: false
    },
    {
        name: 'Snow Joe SJ619E',
        summary: 'By Snow Joe',
        cost: 142,
        scope: 'Household',
        usage: 'Machinery',
        description: 'The traditional but reliable snow blower. The Snow Joe SJ619E is powered by electricity, relieving the need to stock up and manage gasoline. Its 14.5 amp motor is capable of moving 650 pounds of snow per minute, which makes it great for clearing snow from overcrowded driveways.',
        recommendation: 'This snow blower is ideal for customers willing to spend a little more for an easier snow clearing experience. Its electric power source makes maintenance hassle free while its engine makes clearing large amounts of snow a piece of cake.',
        link: 'https://www.amazon.com/Snow-Joe-SJ619E-Electric-Thrower/dp/B017E9NKOC/ref=sr_1_1_sspa?dchild=1&keywords=snow+blower&qid=1620071598&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFTRUJUVUFCSzBQNDkmZW5jcnlwdGVkSWQ9QTA3ODQ3MTBVNElMTTA0T0FNMVcmZW5jcnlwdGVkQWRJZD1BMDIxNjE1NDE2WlFCM1A1MkhKRUQmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
        img: './images/snowblower.png',
        scopeFilter: false,
        usageFilter: false
    },
    {
        name: 'Minnesota Site Plowing',
        summary: 'Offered by Interstate Companies',
        cost: 1000000,
        scope: 'Area',
        usage: 'Service',
        description: 'Interstate Companies offers commercial snow plowing for larger areas, such as neighborhoods, parking lots, and more. Their methods range from fleets of snowplow vehicles to individual workers with shovels for any situation. Visit their website to set up an appraisal for your area and get an estimate for pricing.',
        recommendation: 'Commercial plowing is only viable for large organizations or cities. If you manage an applicable area however, Interstate Companies is a great fit',
        link: 'https://interstatepm.com/commercial-snow-plowing/',
        img: './images/interstate.png',
        scopeFilter: false,
        usageFilter: false
    },
    {
        name: 'Minnesota Deicing & Anti-Icing',
        summary: 'Offered by Interstate Companies',
        cost: 10000000,
        scope: 'Area',
        usage: 'Service',
        description: 'Fear not if your snow has condensed into ice, for there may be hope yet! Interstate Companies offers ice removal as well as ice prevention in the form of chemical compounds. Visit their site to schedule an appraisal for your area and get an estimate on pricing.',
        recommendation: 'As ice removal can be a complicated process, we recommend using this service if the ice in your area is starting to affect accident rates.',
        link: 'https://interstatepm.com/snow-ice-management/',
        img: './images/interstate.png',
        scopeFilter: false,
        usageFilter: false
    },
    {
        name: 'Home Plow',
        summary: 'By Meyer',
        cost: 3000,
        scope: 'Area',
        usage: 'Machinery',
        description: 'This snow plow truck add-on measures 90 inches by 22 inches and comes with a wireless remote to help with horizontal angle setting. It is made of durable steel and is compatible with SUVs in addition to trucks. This item is also available to rent for $500 per month.',
        recommendation: 'We recommend this snow plow for those looking to service their communities with regard to snow management. This is a great option for communities that own trucks but not commercial snow plow vehicles.',
        link: 'https://www.homedepot.com/p/Home-Plow-by-Meyer-90-in-x-22-in-Residential-Power-Angle-Snow-Plow-26500/203539923',
        img: './images/meyer.png',
        scopeFilter: false,
        usageFilter: false
    },
    {
        name: 'Personal Snow Plowing (Minnesota)',
        summary: 'Offered by Lawn & Turf',
        cost: 100000,
        scope: 'Household',
        usage: 'Service',
        description: 'Lawn & Turf bolsters a fleet of snow plow vehicles and constantly monitors the weather for incoming snowfall. Visit their website to obtain pricing estimates and sign up for plowing services.',
        recommendation: 'Lawn & Turf is great for customers who are too busy or otherwise unable to clear out their driveways after a snowstorm. Their flexible pricing and wide range of vehicles make this option viable and effective for everyone.',
        link: 'https://lawnandturfonline.com/snow-plowing/',
        img: './images/lawnandturf.png',
        scopeFilter: false,
        usageFilter: false
    }
]

const handlePrice = () => {
    if (priceButton.value == 'high-low') {
        itemArray.sort((a, b) => a.cost < b.cost ? 1 : -1)
    }
    else if (priceButton.value == 'low-high') {
        itemArray.sort((a, b) => a.cost > b.cost ? 1 : -1) 
    }
}

/*
const handleScope = () => {
    switch (scopeButton.value) {
        case 'household':
            filterScope('household')
            break
        case 'vehicle':
            filterScope('vehicle')
            break
        case 'area':
            filterScope('area')
            break
        case 'any':
            filterScope('any')
            break
    }
}

const filterScope = scope => {
    for (let i = 0; i < itemArray.length; i++) {
        if (scope == 'any') {
            itemArray[i].scopeFilter = false
        }
        else {
            if (itemArray[i].scope.toLowerCase() != scope) {
                itemArray[i].scopeFilter = true
            }
            else {
                itemArray[i].scopeFilter = false
            }
        }
    }
}
*/

const handleScope = () => {
    for (let i = 0; i < itemArray.length; i++) {
        if (scopeButton.value == 'any') {
            itemArray[i].scopeFilter = false
        }
        else {
            if (itemArray[i].scope.toLowerCase() != scopeButton.value) {
                itemArray[i].scopeFilter = true
            }
            else {
                itemArray[i].scopeFilter = false
            }
        }
    }
}

/*
const handleUsage = () => {
    switch (usageButton.value) {
        case 'automatic':
            filterUsage('automatic')
            break
        case 'manual':
            filterUsage('manual')
            break
        case 'service':
            filterUsage('service')
            break
        case 'any':
            filterUsage('any')
            break
    }
}

const filterUsage = usage => {
    for (let i = 0; i < itemArray.length; i++) {
        if (usage == 'any') {
            itemArray[i].usageFilter = false
        }
        else {
            if (itemArray[i].usage.toLowerCase() != usage) {
                itemArray[i].usageFilter = true
            }
            else {
                itemArray[i].usageFilter = false
            }
        }
    }
}
*/

const handleUsage = () => {
    for (let i=0; i < itemArray.length; i++) {
        if (usageButton.value == 'any') {
            itemArray[i].usageFilter = false
        }
        else {
            if (itemArray[i].usage.toLowerCase() != usageButton.value) {
                itemArray[i].usageFilter = true
            }
            else {
                itemArray[i].usageFilter = false
            }
        }
    }
}

const handleSearch = () => {
    for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i].scopeFilter == true || itemArray[i].usageFilter == true) {
            items.children[i].style.display = 'none'
        }
        else {
            items.children[i].style.display = 'flex'
            items.children[i].children[0].children[0].innerHTML = itemArray[i].name
            items.children[i].children[0].children[1].innerHTML = itemArray[i].summary
            itemArray[i].cost > 10000 ? items.children[i].children[0].children[2].children[0].innerHTML = 'Cost: Varies' : items.children[i].children[0].children[2].children[0].innerHTML = `Cost: $${itemArray[i].cost}`
            items.children[i].children[0].children[2].children[1].innerHTML = `Scope: ${itemArray[i].scope}`
            items.children[i].children[0].children[2].children[2].innerHTML = `Usage: ${itemArray[i].usage}`
            items.children[i].children[0].children[3].innerHTML = itemArray[i].description
            items.children[i].children[0].children[4].innerHTML = itemArray[i].recommendation
            items.children[i].children[0].children[5].setAttribute('href', itemArray[i].link)
            items.children[i].children[1].setAttribute('src', itemArray[i].img)
        }
    }
}


priceButton.addEventListener('change', handlePrice)
scopeButton.addEventListener('change', handleScope)
usageButton.addEventListener('change', handleUsage)
searchButton.addEventListener('click', handleSearch)
resetButton.addEventListener('click', () => {
    location.reload()
})