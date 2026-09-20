var Remtairy = Remtairy || {};
Remtairy.Lovense = Remtairy.Lovense || {};

//=============================================================================
 /*:
 * @plugindesc Lovense
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 * 
 * Code based off of and modified with permission from
 * Lovense and Wes Townsend (NLT). 
 */
//=============================================================================

// Lovense JS (Modified)
// Modified from Wes Townsend (NLT), which was modified from Lovense
;(function() {
	window.lovense = window.Lovense = window.lovense || window.Lovense || {}
	var lovense = window.lovense
	var toyMap = {}
	
	//Credits to YoshiEnVerde#7677 for the code
	lovense.formatAddress = function(ip, port) {
        let url = "http://";
		
		ip = String(ip);
		
        if (ip.includes(":")) 
            url += "[";

        url += ip;

        if (ip.includes(":")) 
            url += "]";

        url += ':' + port + '/command';

        return url;
    }
	
	lovense.checkLocalConnect = function() {
		lovense.resetToys();
		
		/*
		toyMap[0] = {nickName: "My Toy", name: "lush", id: "211", battery: 69, version: "3", status: "1"};
		toyMap[1] = {nickName: "My 2nd Toy", name: "max", id: "311", battery: 100, version: "2", status: "1"};
		ConfigManager.lovenseConnected = true;
		ConfigManager.setupRaidToys();
		SceneManager._scene._optionsWindow.refresh();
		return;
		*/
		
		if(ConfigManager.lovensePCLANEnabled || (ConfigManager.lovenseIP && ConfigManager.lovensePort)) {
			var xhr = new XMLHttpRequest()
			var xmlHttp_timeout = null
			data='{"command":"GetToys","apiVer":1}';
			var url = "";
			if(ConfigManager.lovensePCLANEnabled)
				url = 'https://127-0-0-1.lovense.club:30010/command';
			else
				//url = 'http://' + ConfigManager.lovenseIP + ':' + ConfigManager.lovensePort + '/command';
				url = lovense.formatAddress(ConfigManager.lovenseIP, ConfigManager.lovensePort);
			xhr.open("POST", url);
			xhr.setRequestHeader("Accept", "application/json");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (typeof xhr.response === 'string') {
						try {
							data = JSON.parse(xhr.response);
						} catch (e) {
							return false;
						}
					}
					if (data.data) {
						toyMap = JSON.parse(data.data.toys);
						ConfigManager.lovenseConnected = true;
						ConfigManager.setupRaidToys();
						SceneManager._scene._optionsWindow.refresh();
					}
				}};
			xhr.send(data);
		}
	}

	lovense.getToys = function() {
		return Object.values(toyMap)
	}
	lovense.resetToys = function() {
		toyMap = {};
	}
  
	lovense.sendNewCommand = function(data) {
		if(ConfigManager.lovensePCLANEnabled || (ConfigManager.lovenseIP && ConfigManager.lovensePort)) {
			let xhr = new XMLHttpRequest();
			var url = "";
			if(ConfigManager.lovensePCLANEnabled)
				url = 'https://127-0-0-1.lovense.club:30010/command';
			else
				//url = 'http://' + ConfigManager.lovenseIP + ':' + ConfigManager.lovensePort + '/command';
				url = lovense.formatAddress(ConfigManager.lovenseIP, ConfigManager.lovensePort);
			xhr.open("POST", url);
			xhr.setRequestHeader("Accept", "application/json");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
			
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
				}
			};
			xhr.send(data);
		} 
	}
	
	lovense.sendTestToy = function(toyNum) {
		lovense.sendRemCommand('1', 1000, 1, toyNum);
		/*
		let aa = [];
		aa.push([0,25]);
		aa.push([100,75]);
		aa.push([300,15]);
		lovense.sendRemSolaceProSetupCommand(aa);
		lovense.sendRemSolaceProPlayCommand(toyNum, 20);
		*/
	}
  
	lovense.sendRemCommand = function(str, interval, time, toyNum) {
		let toyId = lovense.getToyID(toyNum);
		if(toyId === -1) return;
		let command = '';
		if(ConfigManager.lovensePumpEnable)
			command = '{"command":"Pattern","rule":"V:1;F:v,r,p,t,f,s,d,o;S:%2#","strength":"%1","timeSec":%3,"toy":"%4","apiVer":2}';
		else
			command = '{"command":"Pattern","rule":"V:1;F:v,r,t,f,s,d,o;S:%2#","strength":"%1","timeSec":%3,"toy":"%4","apiVer":2}';
		lovense.sendNewCommand(command.format(str, interval, time, toyId));
	}
	
	lovense.sendRemSolaceCommand = function(thrust, depth, time, toyNum, loopRunningSec, loopPauseSec) {
		let toyId = lovense.getToyID(toyNum);
		if(toyId === -1) return;
		let command = '';
		command = '{"command":"Function","action":"Thrusting:%1,Depth:%2","timeSec":%3,"toy":"%4"';
		if(loopRunningSec && loopPauseSec) 
			command += ',"loopRunningSec":%5,"loopPauseSec":%6'
		command += ',"apiVer":1}'
		if(loopRunningSec && loopPauseSec) 
			lovense.sendNewCommand(command.format(thrust, depth, time, toyId, loopRunningSec, loopPauseSec));
		else 
			lovense.sendNewCommand(command.format(thrust, depth, time, toyId));
	}
	
	lovense.sendRemSolaceProSetupCommand = function(actionArray) {
		let command = '';
		command = '{"command":"PatternV2","type":"Setup","actions":[';
		for(let i = 0; i < actionArray.length; ++i) {
			if(i > 0) command += ',';
			command += '{ "ts":';
			command += actionArray[i][0];
			command += ', "pos":';
			command += actionArray[i][1];
			command += '}';
		}
		command += '],"apiVer":1}'

		lovense.sendNewCommand(command);
	}
	lovense.sendRemSolaceProPlayCommand = function(toyNum, time) {
		let toyId = lovense.getToyID(toyNum);
		if(toyId === -1) return;
		let command = '{"command":"PatternV2","type":"Play","startTime":0,"offsetTime":0,"toy":"%1","timeMs":%2,"apiVer":1}';
		lovense.sendNewCommand(command.format(toyId, time));
	};
	
	lovense.sendStopAll = function() {
		if(!lovense.isConnected()) return;
		let toys = lovense.getToys();
		for(let i = 0; i < toys.length; ++i) {
			let toy = toys[i];
			lovense.sendStopToy(i);
		}
	}
	lovense.sendStopToy = function(toyNum) {
		let toyId = lovense.getToyID(toyNum);
		if(toyId === -1) return;
		let toys = lovense.getToys();
		let toy = toys[toyNum];
		let isPatternV2toy = toy.name === 'solace pro';
		if(isPatternV2toy && false) {
			lovense.sendStopPatternV2Toy(i);
		}
		let command = '{"command":"Function","action":"Stop","timeSec":0,"toy":"%1","apiVer":1}';
		lovense.sendNewCommand(command.format(toyId));
		toys[toyNum].being_RAIDed = false;
		toys[toyNum].RAID_timeUntilEnd = 0;
	};
	lovense.sendStopPatternV2Toy = function(toyNum) {
		let toyId = lovense.getToyID(toyNum);
		if(toyId === -1) return;
		let command = '{"command":"PatternV2","type":"Stop","toy":"%1","apiVer":1}';
		lovense.sendNewCommand(command.format(toyId));
		lovense.getToys()[toyNum].being_RAIDed = false;
		lovense.getToys()[toyNum].RAID_timeUntilEnd = 0;
	};
	
	lovense.isConnected = function() {
		return ConfigManager.lovenseConnected && lovense.getToys() && lovense.getToys().length > 0;
	};
	
	lovense.getToyID = function(index) {
		if(!lovense.isConnected() || lovense.getToys().length < (index + 1)) return -1;
		
		let toyData = lovense.getToys()[index];
		let id = toyData.id;
		
		return id;
	};
	
	
})()
