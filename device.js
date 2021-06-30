function GetSysType(agent){
    var sysType = '';

    if((sysType === '')&&((/tvOS/g).test(agent) === true)){sysType = 'Apple-TV';}
    if((sysType === '')&&((/CrOS/g).test(agent) === true)){sysType = 'Chrome-Book';}
    if((sysType === '')&&((/OS2/g).test(agent) === true)){sysType = 'Gadget-OS2';}
    if((sysType === '')&&((/SMART-TV/g).test(agent) === true)){sysType = 'Smart-TV';}
    if((sysType === '')&&((/iPod/g).test(agent) === true)){sysType = 'Gadget-iPod';}
    if((sysType === '')&&((/Silk/g).test(agent) === true)){sysType = 'Gadget-Silk';}
    if((sysType === '')&&((/SunOS/g).test(agent) === true)){sysType = 'Gadget-Sun';}
    if((sysType === '')&&((/iPhone/g).test(agent) === true)){sysType = 'Mobile iPhone';}

    if((sysType === '')&&((/win|windows|Windows NT/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){sysType = 'Windows NT';}
    if((sysType === '')&&((/linux i686|Linux i686/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){sysType = 'System-Linux';}
    if((sysType === '')&&((/linux x86_64|Linux x86_64/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){sysType = 'System-Linux';}
    if((sysType === '')&&((/linux|Linux/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){sysType = 'System-Linux';}
    if((sysType === '')&&((/ubuntu|Ubuntu/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){sysType = 'System-Ubuntu';}
    if((sysType === '')&&((/mac_powerpc|Mac_PowerPC/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){sysType = 'System-Mac';}
    if((sysType === '')&&((/macintosh|Macintosh/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){sysType = 'System-Mac';}
    if((sysType === '')&&((/mac|Mac/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){sysType = 'System-Mac';}
    if((sysType === '')&&((/solaris|Solaris/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){sysType = 'System-Solaris';}

    if((sysType === '')&&((/mobile|Mobile/g).test(agent) === true)&&((/asus|Asus/g).test(agent) === true)){sysType = 'Asus Mobile';}
    if((sysType === '')&&((/mobile|Mobile/g).test(agent) === true)&&((/itel|iTel/g).test(agent) === true)){sysType = 'iTel Mobile';}
    if((sysType === '')&&((/mobile|Mobile/g).test(agent) === true)&&((/vivo|Vivo/g).test(agent) === true)){sysType = 'Vivo Mobile';}
    if((sysType === '')&&((/mobile|Mobile/g).test(agent) === true)&&((/rmx|RMX/g).test(agent) === true)){sysType = 'Realme Mobile';}
    if((sysType === '')&&((/mobile|Mobile/g).test(agent) === true)&&((/lld-|LLD-/g).test(agent) === true)){sysType = 'Honor Mobile';}
    if((sysType === '')&&((/mobile|Mobile/g).test(agent) === true)&&((/redmi|Redmi/g).test(agent) === true)){sysType = 'Redmi Mobile';}
    if((sysType === '')&&((/mobile|Mobile/g).test(agent) === true)&&((/play_8x|Play_8X/g).test(agent) === true)){sysType = 'Xolo Mobile';}
    if((sysType === '')&&((/mobile|Mobile/g).test(agent) === true)&&((/sm-|SM-|samsung|Samsung/g).test(agent) === true)){sysType = 'Samsung Mobile';}
    if((sysType === '')&&((/mobile|Mobile/g).test(agent) === true)&&((/pixel|Pixel/g).test(agent) === true)){sysType = 'Google Pixel';}
    if((sysType === '')&&((/mobile|Mobile|phone|Phone/g).test(agent) === true)&&((/windows|Windows/g).test(agent) === true)){sysType = 'Windows Mobile';}
    if((sysType === '')&&((/mobile|Mobile|phone|Phone/g).test(agent) === true)&&((/win/g).test(agent) === true)){sysType = 'Windows Mobile';}
    if((sysType === '')&&((/mobile|Mobile|phone|Phone|presto|Presto/g).test(agent) === true)&&((/android|Android/g).test(agent) === true)){sysType = 'Android Mobile';}

    if((sysType === '')&&((/ipad|iPad/g).test(agent) === true)){sysType = 'Tablet iPad';}
    if((sysType === '')&&((/nokia|Nokia/g).test(agent) === true)){sysType = 'Nokia Mobile';}
    if((sysType === '')&&((/ios|iOS/g).test(agent) === true)){sysType = 'Mobile iPhone';}
    if((sysType === '')&&((/blackberry|BlackBerry/g).test(agent) === true)){sysType = 'BlackBerry Mobile';}
    if((sysType === '')&&((/mobile|Mobile/g).test(agent) === true)){sysType = 'Mobile Phone';}
    return sysType;
}

function GetSystemOS(agent){
    var osType = '';
    
    if((osType === '')&&((/OS2/g).test(agent) === true)){osType = 'OS2';}
    if((osType === '')&&((/Silk/g).test(agent) === true)){osType = 'Silk OS';}
    if((osType === '')&&((/CrOS/g).test(agent) === true)){osType = 'Chrome OS';}
    if((osType === '')&&((/tvOS/g).test(agent) === true)){osType = 'Apple TV OS';}
    if((osType === '')&&((/iPod|iOS/g).test(agent) === true)){osType = 'Apple iOS';}
    if((osType === '')&&((/SMART-TV/g).test(agent) === true)){osType = 'Smart TV OS';}
    if((osType === '')&&((/solaris|Solaris/g).test(agent) === true)){osType = 'Solaris OS';}
    
    if((osType === '')&&((/windows nt 10.0|Windows NT 10.0/g).test(agent) === true)){osType = 'Windows 10';}
    if((osType === '')&&((/windows nt 6.3|Windows NT 6.3/g).test(agent) === true)){osType = 'Windows 8.1';}
    if((osType === '')&&((/windows nt 6.2|Windows NT 6.2/g).test(agent) === true)){osType = 'Windows 8';}
    if((osType === '')&&((/windows nt 6.1|Windows NT 6.1/g).test(agent) === true)){osType = 'Windows 7';}
    if((osType === '')&&((/windows nt 6.0|Windows NT 6.0/g).test(agent) === true)){osType = 'Windows Vista';}
    if((osType === '')&&((/windows nt 5.2|Windows NT 5.2/g).test(agent) === true)){osType = 'Windows 2003 x64';}
    if((osType === '')&&((/windows nt 5.1|Windows NT 5.1|windows xp|Windows XP/g).test(agent) === true)){osType = 'Windows XP';}
    if((osType === '')&&((/windows nt 5.0|Windows NT 5.0/g).test(agent) === true)){osType = 'Windows 2000';}
    if((osType === '')&&((/windows me|Windows ME/g).test(agent) === true)){osType = 'Windows ME';}
    if((osType === '')&&((/win98|win98SE/g).test(agent) === true)){osType = 'Windows 98';}
    if((osType === '')&&((/win95/g).test(agent) === true)){osType = 'Windows 95';}
    if((osType === '')&&((/win16/g).test(agent) === true)){osType = 'Windows 3.1';}
    
    if((osType === '')&&((/android 12|Android 12|android 12.0|Android 12.0/g).test(agent) === true)){osType = 'Amdroid 12';}
    if((osType === '')&&((/android 11|Android 11|android 11.0|Android 11.0/g).test(agent) === true)){osType = 'Amdroid 11';}
    if((osType === '')&&((/android 10|Android 10|android 10.0|Android 10.0/g).test(agent) === true)){osType = 'Amdroid 10';}
    if((osType === '')&&((/android 9|Android 9|android 9.0|Android 9.0/g).test(agent) === true)){osType = 'Amdroid 9';}
    if((osType === '')&&((/android 8.1.0|Android 8.1.0|android 8.1|Android 8.1/g).test(agent) === true)){osType = 'Amdroid 8.1';}
    if((osType === '')&&((/android 8|Android 8|android 8.0|Android 8.0/g).test(agent) === true)){osType = 'Amdroid 8';}
    if((osType === '')&&((/android 7.1.1|Android 7.1.1/g).test(agent) === true)){osType = 'Amdroid 7.1.1';}
    if((osType === '')&&((/android 7|Android 7|android 7.0|Android 7.0/g).test(agent) === true)){osType = 'Amdroid 7';}
    if((osType === '')&&((/android 6.0.1|Android 6.0.1/g).test(agent) === true)){osType = 'Amdroid 6.0.1';}
    if((osType === '')&&((/android 6|Android 6|android 6.0|Android 6.0/g).test(agent) === true)){osType = 'Amdroid 6';}
    if((osType === '')&&((/android 5.1.1|Android 5.1.1/g).test(agent) === true)){osType = 'Amdroid 5.1.1';}
    if((osType === '')&&((/android 5.1.0|Android 5.1.0/g).test(agent) === true)){osType = 'Amdroid 5.1';}
    if((osType === '')&&((/android 5|Android 5|android 5.0|Android 5.0/g).test(agent) === true)){osType = 'Amdroid 5';}
    if((osType === '')&&((/android 4.4.2|Android 4.4.2/g).test(agent) === true)){osType = 'Amdroid 4.4.2';}
    if((osType === '')&&((/android 4.4|Android 4.4/g).test(agent) === true)){osType = 'Amdroid 4.4';}
    if((osType === '')&&((/android 4.3|Android 4.3/g).test(agent) === true)){osType = 'Amdroid 4.3';}
    if((osType === '')&&((/android 4.2|Android 4.2/g).test(agent) === true)){osType = 'Amdroid 4.2';}
    if((osType === '')&&((/android 4.1|Android 4.1/g).test(agent) === true)){osType = 'Amdroid 4.1';}
    if((osType === '')&&((/android 4|Android 4/g).test(agent) === true)){osType = 'Amdroid 4';}
    if((osType === '')&&((/android|Android/g).test(agent) === true)){osType = 'Amdroid OS';}
    
    if((osType === '')&&((/Mac OS X|mac os x/g).test(agent) === true)){osType = 'Mac OS X';}
    if((osType === '')&&((/blackberry/g).test(agent) === true)&&((/android|Android/g).test(agent) !== true)){osType = 'BlackBerry OS';}
    if((osType === '')&&((/ubuntu|Ubuntu/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){osType = 'Ubuntu OS';}
    if((osType === '')&&((/win nt|windows nt|Windows NT/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){osType = 'Windows PC OS';}
    if((osType === '')&&((/alexa/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)&&((/iOS/g).test(agent) !== true)){osType = 'Apple Smart OS';}
    if((osType === '')&&((/iPhone/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) === true)&&((/iOS/g).test(agent) !== true)){osType = 'Apple iPhone OS';}
    if((osType === '')&&((/webos/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) === true)&&((/android|Android/g).test(agent) !== true)){osType = 'Mobile Web OS';}
    if((osType === '')&&((/mac|Mac|macintosh|Macintosh|mac_powerpc|Mac_PowerPC/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)){osType = 'Apple Mac OS';}
    if((osType === '')&&((/linux|Linux/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) !== true)&&((/android|Android/g).test(agent) !== true)){osType = 'Linux OS';}
    if((osType === '')&&((/nokia/g).test(agent) === true)&&((/mobile|phone|Mobile|Phone/g).test(agent) === true)&&((/android|Android|win|windows|Windows/g).test(agent) !== true)){osType = 'Nokia Mobile OS';}
    return osType;
}

function GetBrowser(agent){
    var Browser = '';
    
    if((Browser === '')&&((/OppoBrowser/g).test(agent) === true)){Browser = 'OppoBrowser';}
    if((Browser === '')&&((/VivoBrowser/g).test(agent) === true)){Browser = 'VivoBrowser';}
    if((Browser === '')&&((/RealmeBrowser/g).test(agent) === true)){Browser = 'RealmeBrowser';}
    if((Browser === '')&&((/SamsungBrowser/g).test(agent) === true)){Browser = 'SamsungBrowser';}
    if((Browser === '')&&((/ucbrowser|UCBrowser/g).test(agent) === true)){Browser = 'UC Browser';}
    if((Browser === '')&&((/uc browser|UC Browser/g).test(agent) === true)){Browser = 'UC Browser';}
    if((Browser === '')&&((/opera mini|Opera Mini/g).test(agent) === true)){Browser = 'Opera Mini';}
    if((Browser === '')&&((/android browser|Android Browser/g).test(agent) === true)){Browser = 'Android Browser';}
    
    if((Browser === '')&&((/msie/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) !== true)){Browser = 'IExplorer';}
    if((Browser === '')&&((/Edg|EdgA/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) !== true)){Browser = 'MS Edge';}
    if((Browser === '')&&((/yandex|Yandex/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) !== true)){Browser = 'Yandex';}
    if((Browser === '')&&((/chrome|Chrome/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) !== true)){Browser = 'Chrome';}
    if((Browser === '')&&((/maxthon|Maxthon/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) !== true)){Browser = 'Maxthon';}
    if((Browser === '')&&((/firefox|Firefox/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) !== true)){Browser = 'Firefox';}
    if((Browser === '')&&((/trident|Trident/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) !== true)){Browser = 'IExplorer';}
    if((Browser === '')&&((/netscape|Netscape/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) !== true)){Browser = 'Netscape';}
    if((Browser === '')&&((/konqueror|Konqueror/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) !== true)){Browser = 'Konqueror';}
    
    if((Browser === '')&&((/opr|OPR/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) === true)){Browser = 'Mobile Opera';}
    if((Browser === '')&&((/Edg|EdgA/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) === true)){Browser = 'Mobile Edge';}
    if((Browser === '')&&((/chrome|Chrome/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) === true)){Browser = 'Mobile Chrome';}
    if((Browser === '')&&((/firefox|Firefox/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|android|Android/g).test(agent) === true)){Browser = 'Mobile Firefox';}
    if((Browser === '')&&((/safari|Safari/g).test(agent) === true)&&((/mac|Mac|iOS/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone|iphone|iPhone|iPad/g).test(agent) === true)){Browser = 'Mobile Safari';}
    return Browser;
}

function GetSysModel(agent){
    var SysModel = '';

    if((SysModel === '')&&((/SM-C900F/g).test(agent) === true)){SysModel = 'Samsung C9 Pro';}
    if((SysModel === '')&&((/SM-T561/g).test(agent) === true)){SysModel = 'Samsung T561';}
    if((SysModel === '')&&((/SM-M315F/g).test(agent) === true)){SysModel = 'Samsung M31';}
    if((SysModel === '')&&((/SM-M013F/g).test(agent) === true)){SysModel = 'Samsung M01';}
    if((SysModel === '')&&((/SM-A920F/g).test(agent) === true)){SysModel = 'Samsung A9';}
    if((SysModel === '')&&((/SM-A750F/g).test(agent) === true)){SysModel = 'Samsung A7';}
    if((SysModel === '')&&((/SM-A730F/g).test(agent) === true)){SysModel = 'Samsung A8+';}
    if((SysModel === '')&&((/SM-A725F/g).test(agent) === true)){SysModel = 'Samsung A72';}
    if((SysModel === '')&&((/SM-A715F/g).test(agent) === true)){SysModel = 'Samsung A71';}
    if((SysModel === '')&&((/SM-A707F/g).test(agent) === true)){SysModel = 'Samsung A70';}
    if((SysModel === '')&&((/SM-A605G/g).test(agent) === true)){SysModel = 'Samsung A6+';}
    if((SysModel === '')&&((/SM-A505F/g).test(agent) === true)){SysModel = 'Samsung A50';}
    if((SysModel === '')&&((/SM-A315F/g).test(agent) === true)){SysModel = 'Samsung A31';}
    if((SysModel === '')&&((/SM-A307FN/g).test(agent) === true)){SysModel = 'Samsung A30s';}
    if((SysModel === '')&&((/SM-A305F/g).test(agent) === true)){SysModel = 'Samsung A30';}
    if((SysModel === '')&&((/SM-A205F/g).test(agent) === true)){SysModel = 'Samsung A20';}
    if((SysModel === '')&&((/SM-G975F/g).test(agent) === true)){SysModel = 'Samsung S10';}
    if((SysModel === '')&&((/SM-G900P/g).test(agent) === true)){SysModel = 'Samsung S5';}
    if((SysModel === '')&&((/SM-G615FU/g).test(agent) === true)){SysModel = 'Samsung J7 Max';}
    if((SysModel === '')&&((/SM-G615F/g).test(agent) === true)){SysModel = 'Samsung J7 Max';}
    if((SysModel === '')&&((/SM-G611F/g).test(agent) === true)){SysModel = 'Samsung J7 Prime 2';}
    if((SysModel === '')&&((/SM-G610F/g).test(agent) === true)){SysModel = 'Samsung J7 Prime';}
    if((SysModel === '')&&((/SM-J700F/g).test(agent) === true)){SysModel = 'Samsung J7';}
    if((SysModel === '')&&((/SM-J610F/g).test(agent) === true)){SysModel = 'Samsung J6+';}
    if((SysModel === '')&&((/SM-G570F/g).test(agent) === true)){SysModel = 'Samsung J5 Prime';}
    if((SysModel === '')&&((/SM-J400F/g).test(agent) === true)){SysModel = 'Samsung J4';}
    if((SysModel === '')&&((/SM-J210F/g).test(agent) === true)){SysModel = 'Samsung J2 Pro';}
    if((SysModel === '')&&((/SM-G355H/g).test(agent) === true)){SysModel = 'Samsung Core 2';}
    if((SysModel === '')&&((/SM-/g).test(agent) === true)){SysModel = 'Samsung Mobile';}

    if((SysModel === '')&&((/V2040/g).test(agent) === true)){SysModel = 'Vivo V20';}
    if((SysModel === '')&&((/V2025/g).test(agent) === true)){SysModel = 'Vivo V20';}
    if((SysModel === '')&&((/vivo 1951/g).test(agent) === true)){SysModel = 'Vivo Z1Pro';}
    if((SysModel === '')&&((/vivo 1935/g).test(agent) === true)){SysModel = 'Vivo Y50';}
    if((SysModel === '')&&((/vivo 1920/g).test(agent) === true)){SysModel = 'Vivo S1Pro';}
    if((SysModel === '')&&((/vivo 1917/g).test(agent) === true)){SysModel = 'Vivo Z1x';}
    if((SysModel === '')&&((/vivo 1907/g).test(agent) === true)){SysModel = 'Vivo S1';}
    if((SysModel === '')&&((/vivo 1906/g).test(agent) === true)){SysModel = 'Vivo Y11';}
    if((SysModel === '')&&((/vivo 1904/g).test(agent) === true)){SysModel = 'Vivo Y12';}
    if((SysModel === '')&&((/vivo 1902/g).test(agent) === true)){SysModel = 'Vivo Y17';}
    if((SysModel === '')&&((/vivo 1901/g).test(agent) === true)){SysModel = 'Vivo Y15';}
    if((SysModel === '')&&((/vivo 1851/g).test(agent) === true)){SysModel = 'Vivo V9 Pro';}
    if((SysModel === '')&&((/vivo 1819/g).test(agent) === true)){SysModel = 'Vivo V15';}
    if((SysModel === '')&&((/vivo 1818/g).test(agent) === true)){SysModel = 'Vivo V15 Pro';}
    if((SysModel === '')&&((/vivo 1814/g).test(agent) === true)){SysModel = 'Vivo Y93';}
    if((SysModel === '')&&((/vivo 1811/g).test(agent) === true)){SysModel = 'Vivo Y91';}
    if((SysModel === '')&&((/vivo 1806/g).test(agent) === true)){SysModel = 'Vivo V9 Youth';}
    if((SysModel === '')&&((/vivo 1804/g).test(agent) === true)){SysModel = 'Vivo V11 Pro';}
    if((SysModel === '')&&((/vivo 1803/g).test(agent) === true)){SysModel = 'Vivo Y81';}
    if((SysModel === '')&&((/vivo 1726/g).test(agent) === true)){SysModel = 'Vivo Y83 Pro';}
    if((SysModel === '')&&((/vivo 1724/g).test(agent) === true)){SysModel = 'Vivo Y71';}
    if((SysModel === '')&&((/vivo 1723/g).test(agent) === true)){SysModel = 'Vivo V9';}
    if((SysModel === '')&&((/vivo 1716/g).test(agent) === true)){SysModel = 'Vivo V7+';}
    if((SysModel === '')&&((/vivo 1714/g).test(agent) === true)){SysModel = 'Vivo Y69';}
    if((SysModel === '')&&((/vivo 1713/g).test(agent) === true)){SysModel = 'Vivo V5s';}
    if((SysModel === '')&&((/vivo 1606/g).test(agent) === true)){SysModel = 'Vivo Y53i';}
    if((SysModel === '')&&((/vivo Y51L/g).test(agent) === true)){SysModel = 'Vivo Y51L';}
    if((SysModel === '')&&((/vivo/g).test(agent) === true)){SysModel = 'Vivo Mobile';}

    if((SysModel === '')&&((/CPH2119/g).test(agent) === true)){SysModel = 'Oppo F17 Pro';}
    if((SysModel === '')&&((/CPH2035/g).test(agent) === true)){SysModel = 'Oppo Reno3 Pro';}
    if((SysModel === '')&&((/CPH2015/g).test(agent) === true)){SysModel = 'Oppo A31';}
    if((SysModel === '')&&((/CPH2001/g).test(agent) === true)){SysModel = 'Oppo F15';}
    if((SysModel === '')&&((/CPH1989/g).test(agent) === true)){SysModel = 'Oppo Reno 2 F';}
    if((SysModel === '')&&((/CPH1945/g).test(agent) === true)){SysModel = 'Oppo Reno 2 Z';}
    if((SysModel === '')&&((/CPH1937/g).test(agent) === true)){SysModel = 'Oppo A9';}
    if((SysModel === '')&&((/CPH1931/g).test(agent) === true)){SysModel = 'Oppo A5';}
    if((SysModel === '')&&((/CPH1911/g).test(agent) === true)){SysModel = 'Oppo F11';}
    if((SysModel === '')&&((/CPH1901/g).test(agent) === true)){SysModel = 'Oppo A7';}
    if((SysModel === '')&&((/CPH1823/g).test(agent) === true)){SysModel = 'Oppo F9 Pro';}
    if((SysModel === '')&&((/CPH1803/g).test(agent) === true)){SysModel = 'Oppo A3s';}
    if((SysModel === '')&&((/CPH1729/g).test(agent) === true)){SysModel = 'Oppo A83';}
    if((SysModel === '')&&((/CPH1717/g).test(agent) === true)){SysModel = 'Oppo A71';}
    if((SysModel === '')&&((/A37F/g).test(agent) === true)){SysModel = 'Oppo A37F';}
    if((SysModel === '')&&((/A33F/g).test(agent) === true)){SysModel = 'Oppo Neo 7';}
    if((SysModel === '')&&((/A1601/g).test(agent) === true)){SysModel = 'Oppo F1s';}
    
    /*if((SysModel === '')&&((/15A356/g).test(agent) === true)){SysModel = 'iPhone 11';}
    if((SysModel === '')&&((/14A403/g).test(agent) === true)){SysModel = 'iPhone X';}
    if((SysModel === '')&&((/iPhone 9 plus/g).test(agent) === true)){SysModel = 'iPhone 9 Plus';}
    if((SysModel === '')&&((/iPhone 9/g).test(agent) === true)){SysModel = 'iPhone 9';}
    if((SysModel === '')&&((/iPhone 8 plus/g).test(agent) === true)){SysModel = 'iPhone 8 Plus';}
    if((SysModel === '')&&((/iPhone 8/g).test(agent) === true)){SysModel = 'iPhone 8';}
    if((SysModel === '')&&((/11B651/g).test(agent) === true)){SysModel = 'iPhone 6';}
    if((SysModel === '')&&((/14E304/g).test(agent) === true)){SysModel = 'iPhone 5';}
    if((SysModel === '')&&((/15E148/g).test(agent) === true)){SysModel = 'iPhone 5';}*/
    if((SysModel === '')&&((/iPhone/g).test(agent) === true)){SysModel = 'Mobile iPhone';}

    if((SysModel === '')&&((/Redmi Note 9 Pro/g).test(agent) === true)){SysModel = 'Redmi Note 9 Pro';}
    if((SysModel === '')&&((/M1906g7i/g).test(agent) === true)){SysModel = 'Redmi Note 8 Pro';}
    if((SysModel === '')&&((/Redmi Note 7 Pro/g).test(agent) === true)){SysModel = 'Redmi Note 7 Pro';}
    if((SysModel === '')&&((/Redmi Note 5 Pro/g).test(agent) === true)){SysModel = 'Redmi Note 5 Pro';}
    if((SysModel === '')&&((/Redmi Note 7/g).test(agent) === true)){SysModel = 'Redmi Note 7';}
    if((SysModel === '')&&((/Redmi Note 4/g).test(agent) === true)){SysModel = 'Redmi Note 4';}
    if((SysModel === '')&&((/Redmi 8A Dual/g).test(agent) === true)){SysModel = 'Redmi 8A Dual';}
    if((SysModel === '')&&((/Redmi 6A/g).test(agent) === true)){SysModel = 'Redmi 6A';}
    if((SysModel === '')&&((/Redmi K20/g).test(agent) === true)){SysModel = 'Redmi K20';}
    if((SysModel === '')&&((/Redmi Y3/g).test(agent) === true)){SysModel = 'Redmi Y3';}
    if((SysModel === '')&&((/Redmi Y2/g).test(agent) === true)){SysModel = 'Redmi Y2';}
    if((SysModel === '')&&((/Redmi 5/g).test(agent) === true)){SysModel = 'Redmi 5';}
    if((SysModel === '')&&((/Redmi 4/g).test(agent) === true)){SysModel = 'Redmi 4';}
    if((SysModel === '')&&((/redmi/g).test(agent) === true)){SysModel = 'Redmi Mobile';}

    if((SysModel === '')&&((/RMX2085/g).test(agent) === true)){SysModel = 'Realme X3 SuperZoom';}
    if((SysModel === '')&&((/RMX2040/g).test(agent) === true)){SysModel = 'Realme Narzo 10';}
    if((SysModel === '')&&((/RMX2001/g).test(agent) === true)){SysModel = 'Realme 6';}
    if((SysModel === '')&&((/RMX1921/g).test(agent) === true)){SysModel = 'Realme XT';}
    if((SysModel === '')&&((/RMX1901/g).test(agent) === true)){SysModel = 'Realme X';}
    if((SysModel === '')&&((/RMX1851/g).test(agent) === true)){SysModel = 'Realme 3 Pro';}
    if((SysModel === '')&&((/RMX1801/g).test(agent) === true)){SysModel = 'Realme 2 Pro';}
    if((SysModel === '')&&((/RMX1805/g).test(agent) === true)){SysModel = 'Realme 2';}
    if((SysModel === '')&&((/CPH1859/g).test(agent) === true)){SysModel = 'Realme 1';}
    if((SysModel === '')&&((/RMX/g).test(agent) === true)){SysModel = 'Realme Mobile';}

    if((SysModel === '')&&((/HM2014818/g).test(agent) === true)){SysModel = 'Xiaomi Redmi 2';}
    if((SysModel === '')&&((/2014818/g).test(agent) === true)){SysModel = 'Xiaomi Redmi 2';}
    if((SysModel === '')&&((/Mi 10/g).test(agent) === true)){SysModel = 'Xiaomi Mi 10';}

    if((SysModel === '')&&((/Lenovo K8 Plus/g).test(agent) === true)){SysModel = 'Lenovo K8 Plus';}
    if((SysModel === '')&&((/Lenovo K53a48/g).test(agent) === true)){SysModel = 'Lenovo K6 Note';}
    if((SysModel === '')&&((/Lenovo K50a40/g).test(agent) === true)){SysModel = 'Lenovo K3 Note';}

    if((SysModel === '')&&((/LLD-AL20/g).test(agent) === true)){SysModel = 'Honor 9N';}
    if((SysModel === '')&&((/DUA-AL00/g).test(agent) === true)){SysModel = 'Honor 7S';}

    if((SysModel === '')&&((/oneplus/g).test(agent) === true)){SysModel = 'OnePlus Mobile';}
    if((SysModel === '')&&((/IN2011/g).test(agent) === true)){SysModel = 'OnePlus 8';}
    if((SysModel === '')&&((/A6000/g).test(agent) === true)){SysModel = 'OnePlus 6';}

    if((SysModel === '')&&((/XT1663/g).test(agent) === true)){SysModel = 'Motorola M';}
    if((SysModel === '')&&((/XT1562/g).test(agent) === true)){SysModel = 'Motorola X';}
    if((SysModel === '')&&((/Moto G/g).test(agent) === true)){SysModel = 'Motorola G4';}

    if((SysModel === '')&&((/itel/g).test(agent) === true)){SysModel = 'Itel Mobile';}
    if((SysModel === '')&&((/L5503/g).test(agent) === true)){SysModel = 'Itel A46';}

    if((SysModel === '')&&((/P7 Max/g).test(agent) === true)){SysModel = 'Gionee P7 Max';}

    if((SysModel === '')&&((/Play_/g).test(agent) === true)){SysModel = 'Xolo Mobile';}
    if((SysModel === '')&&((/Play_8X-1200/g).test(agent) === true)){SysModel = 'Xolo 8X-1200';}

    if((SysModel === '')&&((/Pixel 2/g).test(agent) === true)){SysModel = 'Pixel 2';}
    if((SysModel === '')&&((/Pixel 2 XL/g).test(agent) === true)){SysModel = 'Pixel 2 XL';}

    if((SysModel === '')&&((/LM-G850/g).test(agent) === true)){SysModel = 'LG G8 ThinQ';}

    if((SysModel === '')&&((/Infinix X626B/g).test(agent) === true)){SysModel = 'Infinix S4';}

    if((SysModel === '')&&((/InFocus M430/g).test(agent) === true)){SysModel = 'InFocus Bingo 21';}

    if((SysModel === '')&&((/ASUS_X00TD/g).test(agent) === true)){SysModel = 'Asus Zenfone Max Pro M1';}
    if((SysModel === '')&&((/CrOS/g).test(agent) === true)){SysModel = 'Chrome-Book';}
    if((SysModel === '')&&((/tvOS/g).test(agent) === true)){SysModel = 'Apple-TV';}
    if((SysModel === '')&&((/win nt/g).test(agent) === true)){SysModel = 'Windows-PC';}
    if((SysModel === '')&&((/BlackBerry/g).test(agent) === true)){SysModel = 'BlackBerry Mobile';}
    if((SysModel === '')&&((/SMART-TV/g).test(agent) === true)){SysModel = 'Smart TV';}
    if((SysModel === '')&&((/alexa/g).test(agent) === true)){SysModel = 'Amazon Alexa';}
    if((SysModel === '')&&((/iPad/g).test(agent) === true)){SysModel = 'Tablet iPad';}
    if((SysModel === '')&&((/iPod/g).test(agent) === true)){SysModel = 'Gadget iPod';}
    if((SysModel === '')&&((/win/g).test(agent) === true)&&((/mobile|phone/g).test(agent) !== true)){SysModel = 'Windows-PC';}
    if((SysModel === '')&&((/ubuntu/g).test(agent) === true)&&((/mobile|phone/g).test(agent) !== true)){SysModel = 'Ubuntu-PC';}
    if((SysModel === '')&&((/solaris/g).test(agent) === true)&&((/mobile|phone/g).test(agent) !== true)){SysModel = 'Solaris-PC';}
    if((SysModel === '')&&((/linux|Linux/g).test(agent) === true)&&((/mobile|phone/g).test(agent) !== true)){SysModel = 'Linux-PC';}
    if((SysModel === '')&&((/win|windows|Windows/g).test(agent) === true)&&((/mobile|phone/g).test(agent) !== true)){SysModel = 'Windows-PC';}
    if((SysModel === '')&&((/mac_powerpc|macintosh|mac/g).test(agent) === true)&&((/mobile|phone/g).test(agent) !== true)){SysModel = 'Mac-PC';}
    
    if((SysModel === '')&&((/asus/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone/g).test(agent) === true)){SysModel = 'Asus Mobile';}
    if((SysModel === '')&&((/windows/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone/g).test(agent) === true)){SysModel = 'Windows Mobile';}
    if((SysModel === '')&&((/android|Android|presto|linux/g).test(agent) === true)&&((/mobile|Mobile|phone|Phone/g).test(agent) === true)){SysModel = 'Android Mobile';}
    if((SysModel === '')&&((/nokia/g).test(agent) === true)){SysModel = 'Nokia Mobile';}
    if((SysModel === '')&&((/iOS/g).test(agent) === true)){SysModel = 'iPhone/iPad';}
    return SysModel;
};

function GetAgentDetail(){
    var agent = navigator.userAgent;
    var width = window.screen.width;
    var height = window.screen.height;
    var dpr = window.devicePixelRatio.toFixed(2);
    
    var sysType = GetSysType(agent);
    var systemOS = GetSystemOS(agent);
    var browser = GetBrowser(agent);
    var sysModel = GetSysModel(agent);
    
    var display = (width > height) ? 'Landscape':'Portrait';
    return {sysType:sysType,systemOS:systemOS,browser:browser,sysModel:sysModel,display:display,width:width,height:height,dpr:dpr,agent:agent};
}
