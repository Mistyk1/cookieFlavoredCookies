if (CFC === undefined) var CFC = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

CFC.name = 'Cookie Flavored Cookies';
CFC.version = '1.0';
CFC.GameVersion = '2.053';

CFC.launch = function() {
	CFC.init = function() {
		CFC.isLoaded = 1;

		window.GetModPath = (modName) => { // Tanks Trigger Finger
			let mod = App.mods[modName];
			let pos = mod.dir.lastIndexOf('\\');
			if(pos == -1) return '../mods/' + (mod.local ? 'local' : 'workshop') + '/' + mod.path;
			else return '../mods/' + mod.dir.substring(pos + 1);
		};
		
		CFC.path = (App ? window.GetModPath('cookieFlavoredCookies') : ''); // Put url in this: https://github.com/Mistyk1/cookieFlavoredCookies
		
		/*test = CCSE.NewUpgrade('Test Upgrade', 'bruh', 50, [25, 12], () => {});
        test.canBuyFunc = function () { return true };
		test.clickFunction = function () {
			Game.Notify('a', 'a', [25, 12], 6);
		};*/

		CFC.NewAutoBuyBuilding = function(obj)
		{
			var building = Game.Objects[obj.building];
			var upgrade = CCSE.NewHeavenlyUpgrade(
				obj.name,
				parseLoc("When possible, buy%1 <b>%2</b> every 10 seconds.", [(obj.building == 'You' ? '' : ' a'), cap(obj.building)]) + (EN?'<q>'+obj.q+'</q>':''),
				Math.pow(building.id+1,7.1) * 15000000,
				[building.iconColumn, 21],
				750 - Math.sin((building.id+1)*0.23+2.3) * 600,
				200 + Math.cos((building.id+1)*0.23+2.3) * 600,
				obj.building == 'Cursor' ? ['Unshackled ' + building.bplural] : ['Unshackled ' + building.bplural, Game.ObjectsById[building.id-1].autoBuyUpgrade],
				() => {}
			)
			building.autoBuyUpgrade = obj.name;
			return upgrade;
		}

		//Heavenly Upgrades
		CCSE.NewHeavenlyUpgrade('Cookies from above', 'Contains an assortment of heaven-sent cookies.</b><q>The gods wanted you to try these.</q>', 555000000000000, [25, 12], -725, -1425, ['Box of pastries', 'Box of maybe cookies', 'Box of not cookies']);
		CCSE.NewHeavenlyUpgrade('Cookies from below', 'Contains an assortment of disgusting cookies.</b><q>Do you really want to taste them?</q>', 555000000000000, [26, 12], -550, -1475, ['Box of pastries', 'Box of maybe cookies', 'Box of not cookies']);
		CFC.NewAutoBuyBuilding({building: 'Cursor', name: 'Cursor clicking cursors', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Grandma', name: 'name 1', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Farm', name: 'name 2', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Mine', name: 'name 3', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Factory', name: 'name 4', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Bank', name: 'Economic paradox', q: 'You\'ve twisted the economy so efficiently that one cookie is now worth two cookies!.'})
		CFC.NewAutoBuyBuilding({building: 'Temple', name: 'God of cookies', q: 'Why only exploit ancient temple? Why not worship deities and see if they respond back?.'})
		CFC.NewAutoBuyBuilding({building: 'Wizard tower', name: 'Cookienomicon', q: 'In the darkest of spell books, you learned the ability to spawn life itself. You quickly teached this spell to your wizards so that they can create more wizards.'})
		CFC.NewAutoBuyBuilding({building: 'Shipment', name: 'name 7', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Alchemy lab', name: 'name 8', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Portal', name: 'The third portal', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Time machine', name: 'Looping timelines', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Antimatter condenser', name: 'Cookienium liquid', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Prism', name: 'Light from nothing', q: 'While tinkering with one of your prism, you found out that you can convert darkness into light! You are litteraly creating light from nothing!'})
		CFC.NewAutoBuyBuilding({building: 'Chancemaker', name: 'Sudden luck', q: 'Not only are you creating cookies out of sheer luck, you\'re also creating more Chancemakers!'})
		CFC.NewAutoBuyBuilding({building: 'Fractal engine', name: 'Self-contained fractal engines', q: 'Do you know what happens when you put a fractal engine inside another one? Thank god it doesn\'t destroy the universe, or else whe would\'nt be here.'})
		CFC.NewAutoBuyBuilding({building: 'Javascript console', name: 'Object.assign({}, building)', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Idleverse', name: 'name 9', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'Cortex baker', name: 'name 10', q: 'textexttextexttextexttextext.'})
		CFC.NewAutoBuyBuilding({building: 'You', name: 'Clone cloning themselves', q: 'textexttextexttextexttextext.'})

		//Cookies Upgrade
		Game.NewUpgradeCookie({
			name: 'Shimmering cookies',
			desc: 'Mmmh, what a delight!',
			icon: [0, 0, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,41),
			require: 'Cookies from above'
		});
		Game.NewUpgradeCookie({
			name: 'Glinting cookies',
			desc: 'These are even better than the one before!',
			icon: [1, 0, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,43),
			require: 'Cookies from above'
		});
		Game.NewUpgradeCookie({
			name: 'Shimmering cookies 3',
			desc: 'Its bright purple shimmer and its indescribable taste gives you memories of ancient lives.',
			icon: [2, 0, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,45),
			require: 'Cookies from above'
		});
		Game.NewUpgradeCookie({
			name: 'Shimmering cookies 4',
			desc: 'aaaaaaaa',
			icon: [3, 0, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,47),
			require: 'Cookies from above'
		});
		Game.NewUpgradeCookie({
			name: 'Shimmering cookies 5',
			desc: 'aaaaaaaa',
			icon: [4, 0, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,49),
			require: 'Cookies from above'
		});
		Game.NewUpgradeCookie({
			name: 'Shimmering cookies 6',
			desc: 'aaaaaaaa',
			icon: [5, 0, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,51),
			require: 'Cookies from above'
		});
		Game.NewUpgradeCookie({
			name: 'Sparkling cookies',
			desc: 'Maybe you should put sunglasses while eating it, its shimmer could burn your eyes.',
			icon: [6, 0, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,53),
			require: 'Cookies from above'
		});
		Game.NewUpgradeCookie({
			name: 'Shimmering cookies 8',
			desc: 'I don\t think there will be a better cookie than this one.',
			icon: [7, 0, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,55),
			require: 'Cookies from above'
		});
		Game.NewUpgradeCookie({
			name: 'Shimmering cookies 9',
			desc: 'aaaaaaaa',
			icon: [8, 0, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,57),
			require: 'Cookies from above'
		});
		Game.NewUpgradeCookie({
			name: 'Luminescent cookies',
			desc: 'A taste so powerful its shimmer absorbs nearly all light.',
			icon: [9, 0, CFC.path+"/icons.png"],
			power: 10,
			price: Math.pow(10,59),
			require: 'Cookies from above'
		});
		Game.NewUpgradeCookie({
			name: 'Soggy cookies',
			desc: 'These are awful.',
			icon: [0, 1, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,41),
			require: 'Cookies from below'
		});
		Game.NewUpgradeCookie({
			name: 'Soggy cookies 2',
			desc: 'aaaaaaaa',
			icon: [1, 1, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,43),
			require: 'Cookies from below'
		});
		Game.NewUpgradeCookie({
			name: 'Soggy cookies 3',
			desc: 'aaaaaaaa',
			icon: [2, 1, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,45),
			require: 'Cookies from below'
		});
		Game.NewUpgradeCookie({
			name: 'Soggy cookies 4',
			desc: 'aaaaaaaa',
			icon: [3, 1, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,47),
			require: 'Cookies from below'
		});
		Game.NewUpgradeCookie({
			name: 'Soggy cookies 5',
			desc: 'aaaaaaaa',
			icon: [4, 1, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,49),
			require: 'Cookies from below'
		});
		Game.NewUpgradeCookie({
			name: 'Soggy cookies 6',
			desc: 'aaaaaaaa',
			icon: [5, 1, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,51),
			require: 'Cookies from below'
		});
		Game.NewUpgradeCookie({
			name: 'Umbral cookies',
			desc: 'Can this even be considered a cookie?',
			icon: [6, 1, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,53),
			require: 'Cookies from below'
		});
		Game.NewUpgradeCookie({
			name: 'Shadow Cookie',
			desc: 'aaaaaaaa',
			icon: [7, 1, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,55),
			require: 'Cookies from below'
		});
		Game.NewUpgradeCookie({
			name: 'Soggy cookies 9',
			desc: 'aaaaaaaa',
			icon: [8, 1, CFC.path+"/icons.png"],
			power: 8,
			price: Math.pow(10,57),
			require: 'Cookies from below'
		});
		Game.NewUpgradeCookie({
			name: 'Forsaken cookies',
			desc: 'I swear this cookie was talking to me... I\'m not crazy, right?',
			icon: [9, 1, CFC.path+"/icons.png"],
			power: 10,
			price: Math.pow(10,59),
			require: 'Cookies from below'
		});
	}
	if (CCSE.ConfirmGameVersion(CFC.name, CFC.version, CFC.GameVersion)) Game.registerMod(CFC.name, CFC);
	Game.Notify('Cookie Flavored Cookies', 'Version 1.0', [25, 12], 6);
}

if (!CFC.isLoaded){
	if (CCSE && CCSE.isLoaded) {
		CFC.launch();
	} else {
		if (!CCSE) var CCSE = {};
		if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(CFC.launch);
	}
}