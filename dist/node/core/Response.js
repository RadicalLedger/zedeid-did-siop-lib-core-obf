'use strict';var a15_0x44a9=['INVALID_SIGNATURE_ERROR','INCORRECT_AUDIENCE','request','./globals','response_type','toString','1NjhscD','Crypto','split','Incorrect\x20nonce','isExpirable','fromKey','6fNeaXS','Malformed\x20response\x20jwt','query-string','encrypt','checkErrorResponse','488qlmzSP','TOKEN_MISMATCH','decrypt','No\x20exp\x20in\x20jwt','./Crypto','find','hash','ops','validBefore','grant_type','KTYS','resolve','parse','did','https://self-issued.me','KEY_FORMATS','client_id','DidSiopResponse','ALREADY\x20USED\x20CODE','iterator','91052yNrmvK','validateRefreshToken','__createBinding','default','apply','./JWT','includes','id_token','RSA','__esModule','getMinimalJWK','__awaiter','getItem','Generator\x20is\x20already\x20executing.','618UAEYTV','generateResponse','validateAuthorizationCode','query','getDocument','sign','./Identity','now','INVALID\x20REQUEST','match','length','push','Invalid\x20signature\x20error','exp','generateAuthorizationCode','115777RzYHMr','iss','sub','calculateThumbprint','code','kty','__generator','done','reject','hasOwnProperty','No\x20iat\x20in\x20jwt','./ErrorResponse','kid','next','1bnPYIb','NO_EXPIRATION','payload','decode','generateRefreshToken','Expired\x20refresh\x20token','id_token\x20does\x20not\x20match\x20with\x20refresh_token','key','326589eNaKOI','./JWKUtils','state','sub_jwk','invalid\x20ciphertext\x20size\x20(must\x20be\x20multiple\x20of\x2016\x20bytes)','Invalid\x20sub\x20(sub_jwk\x20thumbprint)','base64url','extractAuthenticationKeys','243IHZJZK','NON_SIOP_FLOW','throw','EXPIRED_REFRESH_TOKEN','Cannot\x20resolve\x20public\x20key','JWT_VALIDITY_EXPIRED','iat','ALGORITHMS','stringify','call','538jYpbtA','aud','freeze','authorization_code','trys','RSAKey','Response\x20jwt\x20is\x20not\x20compatible\x20with\x20SIOP\x20flow','__importDefault','publicKey','UNSUPPORTED_ALGO','INCORRECT_NONCE','14206VXpgbZ','nonce','label','parseUrl','sent','INVALID_JWK_THUMBPRINT','PUBLIC_KEY_ERROR','format','value','MALFORMED_JWT_ERROR','ECKey','defineProperty','pop','JWT','Incorrect\x20audience','OKP','true','452088avAwCP','return','__importStar','alg'];var a15_0x20c4=function(_0x375a33,_0x1c4d81){_0x375a33=_0x375a33-0xc1;var _0x44a937=a15_0x44a9[_0x375a33];return _0x44a937;};var a15_0x28817c=a15_0x20c4;(function(_0x1e3b21,_0x39d148){var _0x474b0c=a15_0x20c4;while(!![]){try{var _0x40fb73=-parseInt(_0x474b0c(0x13e))+-parseInt(_0x474b0c(0x104))*parseInt(_0x474b0c(0x125))+parseInt(_0x474b0c(0x11f))*-parseInt(_0x474b0c(0xe7))+parseInt(_0x474b0c(0xd1))*parseInt(_0x474b0c(0xdf))+parseInt(_0x474b0c(0x12a))*parseInt(_0x474b0c(0xf9))+-parseInt(_0x474b0c(0xc2))*parseInt(_0x474b0c(0xef))+parseInt(_0x474b0c(0x115));if(_0x40fb73===_0x39d148)break;else _0x1e3b21['push'](_0x1e3b21['shift']());}catch(_0x596816){_0x1e3b21['push'](_0x1e3b21['shift']());}}}(a15_0x44a9,0x2b4ce));var __createBinding=this&&this[a15_0x28817c(0x140)]||(Object['create']?function(_0x257383,_0x3a73b2,_0x1f059f,_0x528146){var _0x2d234d=a15_0x28817c;if(_0x528146===undefined)_0x528146=_0x1f059f;Object[_0x2d234d(0x10f)](_0x257383,_0x528146,{'enumerable':!![],'get':function(){return _0x3a73b2[_0x1f059f];}});}:function(_0x53fed4,_0x450fc9,_0x5ce25c,_0x56e922){if(_0x56e922===undefined)_0x56e922=_0x5ce25c;_0x53fed4[_0x56e922]=_0x450fc9[_0x5ce25c];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object['create']?function(_0x4cfdb4,_0xaeba39){var _0xac3748=a15_0x28817c;Object[_0xac3748(0x10f)](_0x4cfdb4,_0xac3748(0x141),{'enumerable':!![],'value':_0xaeba39});}:function(_0xe7535e,_0x2120a8){_0xe7535e['default']=_0x2120a8;}),__importStar=this&&this[a15_0x28817c(0x117)]||function(_0x18b160){var _0x1e76f1=a15_0x28817c;if(_0x18b160&&_0x18b160[_0x1e76f1(0x147)])return _0x18b160;var _0x563824={};if(_0x18b160!=null){for(var _0x5ff875 in _0x18b160)if(_0x5ff875!==_0x1e76f1(0x141)&&Object[_0x1e76f1(0xda)][_0x1e76f1(0xf8)](_0x18b160,_0x5ff875))__createBinding(_0x563824,_0x18b160,_0x5ff875);}return __setModuleDefault(_0x563824,_0x18b160),_0x563824;},__awaiter=this&&this[a15_0x28817c(0x149)]||function(_0x3f83c2,_0x39cca7,_0xc5c5f0,_0x1a50e0){function _0x1ea08e(_0x4a3432){return _0x4a3432 instanceof _0xc5c5f0?_0x4a3432:new _0xc5c5f0(function(_0x3d5de8){_0x3d5de8(_0x4a3432);});}return new(_0xc5c5f0||(_0xc5c5f0=Promise))(function(_0x48fef8,_0x40e9b9){var _0x62854d=a15_0x20c4;function _0x169e18(_0x322bb3){var _0x1f9952=a15_0x20c4;try{_0x5a71e6(_0x1a50e0[_0x1f9952(0xde)](_0x322bb3));}catch(_0x1e1a47){_0x40e9b9(_0x1e1a47);}}function _0x54f8c4(_0x439735){var _0x383cb5=a15_0x20c4;try{_0x5a71e6(_0x1a50e0[_0x383cb5(0xf1)](_0x439735));}catch(_0x1b40f8){_0x40e9b9(_0x1b40f8);}}function _0x5a71e6(_0xfbb73b){var _0x2d4661=a15_0x20c4;_0xfbb73b[_0x2d4661(0xd8)]?_0x48fef8(_0xfbb73b[_0x2d4661(0x10c)]):_0x1ea08e(_0xfbb73b[_0x2d4661(0x10c)])['then'](_0x169e18,_0x54f8c4);}_0x5a71e6((_0x1a50e0=_0x1a50e0[_0x62854d(0x142)](_0x3f83c2,_0x39cca7||[]))[_0x62854d(0xde)]());});},__generator=this&&this[a15_0x28817c(0xd7)]||function(_0x459b0e,_0x2059e1){var _0x32e053=a15_0x28817c,_0x4844db={'label':0x0,'sent':function(){if(_0x3b45a4[0x0]&0x1)throw _0x3b45a4[0x1];return _0x3b45a4[0x1];},'trys':[],'ops':[]},_0x2abddd,_0x17454a,_0x3b45a4,_0x2a7af3;return _0x2a7af3={'next':_0x3950fa(0x0),'throw':_0x3950fa(0x1),'return':_0x3950fa(0x2)},typeof Symbol==='function'&&(_0x2a7af3[Symbol[_0x32e053(0x13d)]]=function(){return this;}),_0x2a7af3;function _0x3950fa(_0x32a1e0){return function(_0x4ed9a3){return _0x4a582a([_0x32a1e0,_0x4ed9a3]);};}function _0x4a582a(_0x4ba6da){var _0x7c2ac0=_0x32e053;if(_0x2abddd)throw new TypeError(_0x7c2ac0(0xc1));while(_0x4844db)try{if(_0x2abddd=0x1,_0x17454a&&(_0x3b45a4=_0x4ba6da[0x0]&0x2?_0x17454a[_0x7c2ac0(0x116)]:_0x4ba6da[0x0]?_0x17454a[_0x7c2ac0(0xf1)]||((_0x3b45a4=_0x17454a[_0x7c2ac0(0x116)])&&_0x3b45a4[_0x7c2ac0(0xf8)](_0x17454a),0x0):_0x17454a['next'])&&!(_0x3b45a4=_0x3b45a4[_0x7c2ac0(0xf8)](_0x17454a,_0x4ba6da[0x1]))[_0x7c2ac0(0xd8)])return _0x3b45a4;if(_0x17454a=0x0,_0x3b45a4)_0x4ba6da=[_0x4ba6da[0x0]&0x2,_0x3b45a4[_0x7c2ac0(0x10c)]];switch(_0x4ba6da[0x0]){case 0x0:case 0x1:_0x3b45a4=_0x4ba6da;break;case 0x4:_0x4844db[_0x7c2ac0(0x106)]++;return{'value':_0x4ba6da[0x1],'done':![]};case 0x5:_0x4844db[_0x7c2ac0(0x106)]++,_0x17454a=_0x4ba6da[0x1],_0x4ba6da=[0x0];continue;case 0x7:_0x4ba6da=_0x4844db[_0x7c2ac0(0x131)][_0x7c2ac0(0x110)](),_0x4844db['trys'][_0x7c2ac0(0x110)]();continue;default:if(!(_0x3b45a4=_0x4844db[_0x7c2ac0(0xfd)],_0x3b45a4=_0x3b45a4[_0x7c2ac0(0xcc)]>0x0&&_0x3b45a4[_0x3b45a4['length']-0x1])&&(_0x4ba6da[0x0]===0x6||_0x4ba6da[0x0]===0x2)){_0x4844db=0x0;continue;}if(_0x4ba6da[0x0]===0x3&&(!_0x3b45a4||_0x4ba6da[0x1]>_0x3b45a4[0x0]&&_0x4ba6da[0x1]<_0x3b45a4[0x3])){_0x4844db['label']=_0x4ba6da[0x1];break;}if(_0x4ba6da[0x0]===0x6&&_0x4844db['label']<_0x3b45a4[0x1]){_0x4844db[_0x7c2ac0(0x106)]=_0x3b45a4[0x1],_0x3b45a4=_0x4ba6da;break;}if(_0x3b45a4&&_0x4844db['label']<_0x3b45a4[0x2]){_0x4844db[_0x7c2ac0(0x106)]=_0x3b45a4[0x2],_0x4844db['ops'][_0x7c2ac0(0xcd)](_0x4ba6da);break;}if(_0x3b45a4[0x2])_0x4844db[_0x7c2ac0(0x131)]['pop']();_0x4844db[_0x7c2ac0(0xfd)]['pop']();continue;}_0x4ba6da=_0x2059e1[_0x7c2ac0(0xf8)](_0x459b0e,_0x4844db);}catch(_0x93cd8d){_0x4ba6da=[0x6,_0x93cd8d],_0x17454a=0x0;}finally{_0x2abddd=_0x3b45a4=0x0;}if(_0x4ba6da[0x0]&0x5)throw _0x4ba6da[0x1];return{'value':_0x4ba6da[0x0]?_0x4ba6da[0x1]:void 0x0,'done':!![]};}},__importDefault=this&&this[a15_0x28817c(0x100)]||function(_0x4b34e0){var _0x4dc8c2=a15_0x28817c;return _0x4b34e0&&_0x4b34e0[_0x4dc8c2(0x147)]?_0x4b34e0:{'default':_0x4b34e0};};Object['defineProperty'](exports,a15_0x28817c(0x147),{'value':!![]}),exports['DidSiopResponse']=void 0x0;var globals_1=require(a15_0x28817c(0x11c)),JWT=__importStar(require(a15_0x28817c(0x143))),Identity_1=require(a15_0x28817c(0xc8)),JWKUtils_1=require(a15_0x28817c(0xe8)),base64url_1=__importDefault(require(a15_0x28817c(0xed))),Crypto_1=require(a15_0x28817c(0x12e)),ErrorResponse=__importStar(require(a15_0x28817c(0xdc))),queryString=__importStar(require(a15_0x28817c(0x127))),ERRORS=Object[a15_0x28817c(0xfb)]({'UNSUPPORTED_ALGO':'Algorithm\x20not\x20supported','PUBLIC_KEY_ERROR':a15_0x28817c(0xf3),'KEY_MISMATCH':'Signing\x20key\x20does\x20not\x20match\x20kid','MALFORMED_JWT_ERROR':a15_0x28817c(0x126),'NON_SIOP_FLOW':a15_0x28817c(0xff),'INCORRECT_AUDIENCE':a15_0x28817c(0x112),'INCORRECT_NONCE':a15_0x28817c(0x122),'NO_ISSUED_TIME':a15_0x28817c(0xdb),'NO_EXPIRATION':a15_0x28817c(0x12d),'JWT_VALIDITY_EXPIRED':'JWT\x20validity\x20has\x20expired','INVALID_JWK_THUMBPRINT':a15_0x28817c(0xec),'INVALID_SIGNATURE_ERROR':a15_0x28817c(0xce),'TOKEN_MISMATCH':a15_0x28817c(0xe5),'EXPIRED_REFRESH_TOKEN':a15_0x28817c(0xe4)}),DidSiopResponse=function(){var _0x5b7544=a15_0x28817c;function _0x473656(){}return _0x473656[_0x5b7544(0xc3)]=function(_0x54eb08,_0x1c2e0c,_0x340ddd,_0x1d4a4c,_0x465261,_0x288d5,_0xccb8ce){return _0x1d4a4c===void 0x0&&(_0x1d4a4c=0x3e8),__awaiter(this,void 0x0,void 0x0,function(){var _0x38fc54,_0xb11caa,_0x3163f7,_0x353808,_0x2b0356,_0x41ece5,_0x5eddb1,_0x5709bc,_0x349312,_0x22b011,_0x4a011a,_0x4cda4b,_0x3b3ef5,_0x37efb6,_0xaf3c46,_0x598c05,_0x49e25a,_0x59a738,_0x22b011,_0x5eddb1,_0x5709bc,_0x68af4a;return __generator(this,function(_0x3bef75){var _0x806c47=a15_0x20c4;switch(_0x3bef75[_0x806c47(0x106)]){case 0x0:_0x3bef75[_0x806c47(0xfd)][_0x806c47(0xcd)]([0x0,0x10,,0x11]),_0x38fc54=_0x54eb08['header'],_0xb11caa=_0x54eb08[_0x806c47(0xe1)],_0x3163f7=![],_0x353808=queryString['parseUrl'](_0x288d5);if(!(_0xb11caa[_0x806c47(0x11d)]===_0x806c47(0xd5)))return[0x3,0x5];if(!(_0x353808[_0x806c47(0xc5)][_0x806c47(0x133)]==='authorization_code'))return[0x3,0x2];return[0x4,this['validateAuthorizationCode'](_0x288d5,_0xb11caa,_0x465261,_0xccb8ce)];case 0x1:_0x2b0356=_0x3bef75['sent']();if(_0x2b0356)_0x3163f7=!![];else return[0x2,_0x2b0356];return[0x3,0x4];case 0x2:return[0x4,this[_0x806c47(0xd0)](_0xb11caa,_0x465261)];case 0x3:_0x41ece5=_0x3bef75[_0x806c47(0x108)]();return[0x2,JSON[_0x806c47(0xf7)]({'response_type':_0x806c47(0xd5),'code':_0x41ece5})];case 0x4:return[0x3,0xa];case 0x5:if(!(_0x353808[_0x806c47(0xc5)]['grant_type']==='refresh_token'))return[0x3,0x9];_0x5eddb1=_0x353808[_0x806c47(0xc5)][_0x806c47(0x145)],_0x5709bc=_0x353808[_0x806c47(0xc5)]['refresh_token'];return[0x4,this[_0x806c47(0x13f)](_0x5eddb1,_0x5709bc,_0x465261)];case 0x6:_0x349312=_0x3bef75[_0x806c47(0x108)]();if(!(_0x349312===_0x806c47(0x114)))return[0x3,0x8];_0xb11caa[_0x806c47(0xf5)]=Date[_0x806c47(0xc9)](),_0xb11caa[_0x806c47(0xcf)]=Date[_0x806c47(0xc9)]()+_0x1d4a4c,_0x22b011={'header':_0x38fc54,'payload':_0xb11caa},_0x4a011a=JWT[_0x806c47(0xc7)](_0x22b011,_0x1c2e0c);return[0x4,this[_0x806c47(0xe3)](_0x4a011a,_0x465261)];case 0x7:_0x4cda4b=_0x3bef75[_0x806c47(0x108)]();return[0x2,JSON[_0x806c47(0xf7)]({'response_type':_0x806c47(0x145),'id_token':_0x4a011a,'refresh_token':_0x4cda4b})];case 0x8:return[0x2,_0x349312];case 0x9:_0x3163f7=!![],_0x3bef75[_0x806c47(0x106)]=0xa;case 0xa:if(!_0x3163f7)return[0x3,0xe];_0x3b3ef5=void 0x0,_0x37efb6='';_0xb11caa['registration']['id_token_signed_response_alg'][_0x806c47(0x144)](globals_1[_0x806c47(0xf6)][_0x1c2e0c['alg']])?_0x37efb6=globals_1[_0x806c47(0xf6)][_0x1c2e0c[_0x806c47(0x118)]]:Promise[_0x806c47(0xd9)](ERRORS[_0x806c47(0x102)]);_0xaf3c46=_0x340ddd['extractAuthenticationKeys']()['find'](function(_0xc1e580){var _0x3f7d0e=_0x806c47;return _0xc1e580['id']===_0x1c2e0c[_0x3f7d0e(0xdd)];}),_0x3b3ef5={'typ':_0x806c47(0x111),'alg':_0x37efb6,'kid':_0x1c2e0c[_0x806c47(0xdd)]},_0x598c05=void 0x0,_0x49e25a=void 0x0;if(_0xaf3c46){_0x49e25a={'key':_0xaf3c46[_0x806c47(0x101)],'kid':_0xaf3c46['id'],'use':'sig','kty':globals_1[_0x806c47(0x134)][_0xaf3c46[_0x806c47(0xd6)]],'format':_0xaf3c46['format'],'isPrivate':![]};switch(_0xaf3c46['kty']){case globals_1[_0x806c47(0x134)][_0x806c47(0x146)]:_0x598c05=JWKUtils_1[_0x806c47(0xfe)][_0x806c47(0x124)](_0x49e25a);break;case globals_1[_0x806c47(0x134)]['EC']:{_0xaf3c46['format']===globals_1[_0x806c47(0x139)]['ETHEREUM_ADDRESS']&&(_0x49e25a[_0x806c47(0xe6)]=_0x1c2e0c['key'],_0x49e25a[_0x806c47(0x10b)]=_0x1c2e0c[_0x806c47(0x10b)],_0x49e25a['isPrivate']=!![]);_0x598c05=JWKUtils_1[_0x806c47(0x10e)]['fromKey'](_0x49e25a);break;}case globals_1[_0x806c47(0x134)][_0x806c47(0x113)]:_0x598c05=JWKUtils_1[_0x806c47(0x113)][_0x806c47(0x124)](_0x49e25a);break;}}else return[0x2,Promise['reject'](new Error(ERRORS['PUBLIC_KEY_ERROR']))];_0x59a738={'iss':_0x806c47(0x138)},_0x59a738[_0x806c47(0x137)]=_0x340ddd[_0x806c47(0xc6)]()['id'];if(_0xb11caa[_0x806c47(0x13a)])_0x59a738[_0x806c47(0xfa)]=_0xb11caa[_0x806c47(0x13a)];if(_0x598c05)_0x59a738['sub_jwk']=_0x598c05[_0x806c47(0x148)](),_0x59a738[_0x806c47(0xd3)]=JWKUtils_1[_0x806c47(0xd4)](_0x598c05[_0x806c47(0x148)]());else return[0x2,Promise[_0x806c47(0xd9)](new Error(ERRORS[_0x806c47(0x10a)]))];if(_0xb11caa['nonce'])_0x59a738[_0x806c47(0x105)]=_0xb11caa['nonce'];if(_0xb11caa[_0x806c47(0xe9)])_0x59a738['state']=_0xb11caa['state'];_0x59a738['iat']=Date[_0x806c47(0xc9)](),_0x59a738['exp']=Date[_0x806c47(0xc9)]()+_0x1d4a4c,_0x22b011={'header':_0x3b3ef5,'payload':_0x59a738};if(!(_0x353808[_0x806c47(0xc5)][_0x806c47(0x133)]===_0x806c47(0xfc)))return[0x3,0xc];_0x5eddb1=JWT[_0x806c47(0xc7)](_0x22b011,_0x1c2e0c);return[0x4,this[_0x806c47(0xe3)](_0x5eddb1,_0x465261)];case 0xb:_0x5709bc=_0x3bef75[_0x806c47(0x108)]();return[0x2,JSON[_0x806c47(0xf7)]({'response_type':_0x806c47(0x145),'id_token':_0x5eddb1,'refresh_token':_0x5709bc})];case 0xc:return[0x2,JSON['stringify']({'response_type':_0x806c47(0x145),'id_token':JWT['sign'](_0x22b011,_0x1c2e0c)})];case 0xd:return[0x3,0xf];case 0xe:return[0x2,''];case 0xf:return[0x3,0x11];case 0x10:_0x68af4a=_0x3bef75[_0x806c47(0x108)]();return[0x2,Promise[_0x806c47(0xd9)](_0x68af4a)];case 0x11:return[0x2];}});});},_0x473656['validateResponse']=function(_0x4ff5b7,_0x25f8a5){return __awaiter(this,void 0x0,void 0x0,function(){var _0x362888,_0x322b19,_0xbfe7f3,_0x2e2148,_0x40999e,_0x185aca,_0x5b10c4,_0x347392,_0x44b160;return __generator(this,function(_0x2f9483){var _0x1091a8=a15_0x20c4;switch(_0x2f9483[_0x1091a8(0x106)]){case 0x0:try{_0xbfe7f3=ErrorResponse[_0x1091a8(0x129)](_0x4ff5b7);if(_0xbfe7f3)return[0x2,_0xbfe7f3];_0x362888=JSON[_0x1091a8(0x136)](base64url_1['default'][_0x1091a8(0xe2)](_0x4ff5b7['split']('.')[0x0])),_0x322b19=JSON[_0x1091a8(0x136)](base64url_1[_0x1091a8(0x141)][_0x1091a8(0xe2)](_0x4ff5b7[_0x1091a8(0x121)]('.')[0x1]));}catch(_0x809877){return[0x2,Promise[_0x1091a8(0xd9)](_0x809877)];}if(!(_0x362888[_0x1091a8(0xdd)]&&!_0x362888['kid']['match'](/^ *$/)&&(_0x322b19[_0x1091a8(0xd2)]&&!_0x322b19['iss'][_0x1091a8(0xcb)](/^ *$/))&&(_0x322b19['aud']&&!_0x322b19['aud'][_0x1091a8(0xcb)](/^ *$/))&&(_0x322b19[_0x1091a8(0x137)]&&!_0x322b19[_0x1091a8(0x137)][_0x1091a8(0xcb)](/^ *$/))&&(_0x322b19[_0x1091a8(0xd3)]&&!_0x322b19[_0x1091a8(0xd3)]['match'](/^ *$/))&&(_0x322b19[_0x1091a8(0xea)]&&!JSON[_0x1091a8(0xf7)](_0x322b19['sub_jwk'])[_0x1091a8(0xcb)](/^ *$/))))return[0x3,0x5];if(_0x322b19[_0x1091a8(0xd2)]!==_0x1091a8(0x138))return[0x2,Promise[_0x1091a8(0xd9)](new Error(ERRORS[_0x1091a8(0xf0)]))];if(_0x322b19['aud']!==_0x25f8a5['redirect_uri'])return[0x2,Promise[_0x1091a8(0xd9)](new Error(ERRORS[_0x1091a8(0x11a)]))];if(_0x322b19['nonce']&&_0x322b19[_0x1091a8(0x105)]!==_0x25f8a5[_0x1091a8(0x105)])return[0x2,Promise[_0x1091a8(0xd9)](new Error(ERRORS[_0x1091a8(0x103)]))];if(_0x25f8a5[_0x1091a8(0x132)]){if(_0x322b19['iat']){if(_0x322b19[_0x1091a8(0xf5)]+_0x25f8a5[_0x1091a8(0x132)]<=Date['now']())return[0x2,Promise[_0x1091a8(0xd9)](new Error(ERRORS[_0x1091a8(0xf4)]))];}else return[0x2,Promise[_0x1091a8(0xd9)](new Error(ERRORS['NO_ISSUED_TIME']))];}if(_0x25f8a5[_0x1091a8(0x123)]){if(_0x322b19['exp']){if(_0x322b19[_0x1091a8(0xcf)]<=Date[_0x1091a8(0xc9)]())return[0x2,Promise[_0x1091a8(0xd9)](new Error(ERRORS[_0x1091a8(0xf4)]))];}else return[0x2,Promise[_0x1091a8(0xd9)](new Error(ERRORS[_0x1091a8(0xe0)]))];}_0x2e2148=JWKUtils_1[_0x1091a8(0xd4)](_0x322b19[_0x1091a8(0xea)]);if(_0x2e2148!==_0x322b19[_0x1091a8(0xd3)])return[0x2,Promise[_0x1091a8(0xd9)](new Error(ERRORS[_0x1091a8(0x109)]))];_0x40999e=void 0x0,_0x2f9483[_0x1091a8(0x106)]=0x1;case 0x1:_0x2f9483[_0x1091a8(0xfd)][_0x1091a8(0xcd)]([0x1,0x3,,0x4]),_0x185aca=new Identity_1['Identity']();return[0x4,_0x185aca[_0x1091a8(0x135)](_0x322b19[_0x1091a8(0x137)])];case 0x2:_0x2f9483[_0x1091a8(0x108)](),_0x5b10c4=_0x185aca[_0x1091a8(0xee)]()[_0x1091a8(0x12f)](function(_0x24e4e5){var _0x29b79c=_0x1091a8;return _0x24e4e5['id']===_0x362888[_0x29b79c(0xdd)];});if(_0x5b10c4)_0x40999e={'key':_0x5b10c4[_0x1091a8(0x101)],'kid':_0x5b10c4['id'],'alg':_0x5b10c4[_0x1091a8(0x118)],'format':_0x5b10c4['format']};else throw new Error(ERRORS[_0x1091a8(0x10a)]);return[0x3,0x4];case 0x3:_0x347392=_0x2f9483[_0x1091a8(0x108)]();return[0x2,Promise[_0x1091a8(0xd9)](ERRORS[_0x1091a8(0x10a)])];case 0x4:_0x44b160=![];if(_0x40999e)_0x44b160=JWT['verify'](_0x4ff5b7,_0x40999e);else return[0x2,Promise[_0x1091a8(0xd9)](ERRORS[_0x1091a8(0x10a)])];if(_0x44b160)return[0x2,{'header':_0x362888,'payload':_0x322b19}];return[0x2,Promise[_0x1091a8(0xd9)](new Error(ERRORS[_0x1091a8(0x119)]))];case 0x5:return[0x2,Promise[_0x1091a8(0xd9)](new Error(ERRORS[_0x1091a8(0x10d)]))];}});});},_0x473656[_0x5b7544(0xd0)]=function(_0x1bacbb,_0x1f7977){return __awaiter(this,void 0x0,void 0x0,function(){var _0x31d2ff,_0x23f4e8,_0x130d4e;return __generator(this,function(_0xe94898){var _0x1d29bb=a15_0x20c4;try{return _0x31d2ff=Crypto_1['Crypto'][_0x1d29bb(0x130)](JSON[_0x1d29bb(0xf7)](_0x1bacbb)),_0x23f4e8={'iat':Date[_0x1d29bb(0xc9)](),'exp':Date[_0x1d29bb(0xc9)]()+0x3e8*0x3c*0xa,'request':_0x31d2ff},_0x130d4e=_0x1f7977['encrypt'](JSON[_0x1d29bb(0xf7)](_0x23f4e8)),[0x2,_0x130d4e];}catch(_0x4b68e9){return[0x2,Promise[_0x1d29bb(0xd9)](new Error(_0x4b68e9))];}return[0x2];});});},_0x473656[_0x5b7544(0xc4)]=function(_0x1174cc,_0x3a01b3,_0xdaa2f1,_0x5a35c3){return __awaiter(this,void 0x0,void 0x0,function(){var _0x432bda,_0x16ab17,_0x8ff3c7,_0x2681b0,_0x21b718,_0x2683c9,_0x36f896;return __generator(this,function(_0xe27fd3){var _0x137c14=a15_0x20c4;switch(_0xe27fd3[_0x137c14(0x106)]){case 0x0:_0xe27fd3[_0x137c14(0xfd)][_0x137c14(0xcd)]([0x0,0x7,,0x8]),_0x432bda=queryString[_0x137c14(0x107)](_0x1174cc),_0x16ab17=_0x432bda[_0x137c14(0xc5)][_0x137c14(0xd5)],_0x8ff3c7=_0xdaa2f1[_0x137c14(0x12c)](_0x16ab17),_0x2681b0=JSON[_0x137c14(0x136)](_0x8ff3c7),_0x21b718=Crypto_1[_0x137c14(0x120)]['hash'](JSON['stringify'](_0x3a01b3));return[0x4,_0x5a35c3[_0x137c14(0x14a)](_0x2681b0[_0x137c14(0xf5)][_0x137c14(0x11e)]())];case 0x1:_0x2683c9=_0xe27fd3[_0x137c14(0x108)]();if(!(_0x21b718!=_0x2681b0[_0x137c14(0x11b)]))return[0x3,0x2];return[0x2,Promise[_0x137c14(0xd9)](new Error(_0x137c14(0xca)))];case 0x2:if(!(_0x2681b0['exp']<Date[_0x137c14(0xc9)]()))return[0x3,0x3];return[0x2,Promise['reject'](new Error('EXPIRED\x20AUTHORIZATION\x20CODE'))];case 0x3:if(!_0x2683c9)return[0x3,0x4];return[0x2,Promise[_0x137c14(0xd9)](new Error(_0x137c14(0x13c)))];case 0x4:return[0x4,_0x5a35c3['setItem'](_0x2681b0['iat'][_0x137c14(0x11e)](),_0x2681b0[_0x137c14(0x11b)])];case 0x5:_0xe27fd3[_0x137c14(0x108)]();return[0x2,Promise[_0x137c14(0x135)]('True')];case 0x6:return[0x3,0x8];case 0x7:_0x36f896=_0xe27fd3['sent']();return _0x36f896['message']===_0x137c14(0xeb)?[0x2,Promise[_0x137c14(0xd9)](new Error('INVALID\x20AUTH\x20CODE'))]:[0x2,Promise[_0x137c14(0xd9)](_0x36f896)];return[0x3,0x8];case 0x8:return[0x2];}});});},_0x473656['generateRefreshToken']=function(_0x11d4d3,_0x40a1d1){return __awaiter(this,void 0x0,void 0x0,function(){var _0xf12ad7,_0x204eb1,_0x18cfd2;return __generator(this,function(_0x4f1397){var _0x2305af=a15_0x20c4;try{return _0xf12ad7=Crypto_1[_0x2305af(0x120)][_0x2305af(0x130)](JSON['stringify'](_0x11d4d3)),_0x204eb1={'iat':Date[_0x2305af(0xc9)](),'exp':Date[_0x2305af(0xc9)]()+0x3e8*0x3c*0x3c*0x18*0x1e,'id_token':_0xf12ad7},_0x18cfd2=_0x40a1d1[_0x2305af(0x128)](JSON[_0x2305af(0xf7)](_0x204eb1)),[0x2,_0x18cfd2];}catch(_0x3f74b0){return[0x2,Promise[_0x2305af(0xd9)](new Error(_0x3f74b0))];}return[0x2];});});},_0x473656['validateRefreshToken']=function(_0x2753cd,_0x34c9ba,_0x40a98c){return __awaiter(this,void 0x0,void 0x0,function(){var _0x3b42d7,_0x311c10;return __generator(this,function(_0x4226f5){var _0x1f2e6e=a15_0x20c4;try{_0x3b42d7=Crypto_1['Crypto'][_0x1f2e6e(0x130)](JSON['stringify'](_0x2753cd)),_0x311c10=JSON[_0x1f2e6e(0x136)](_0x40a98c['decrypt'](_0x34c9ba));if(_0x311c10[_0x1f2e6e(0x145)]!=_0x3b42d7)return[0x2,Promise[_0x1f2e6e(0xd9)](new Error(ERRORS[_0x1f2e6e(0x12b)]))];if(Date['now']()>_0x311c10[_0x1f2e6e(0xcf)])return[0x2,Promise['reject'](new Error(ERRORS[_0x1f2e6e(0xf2)]))];return[0x2,'true'];}catch(_0x36f70c){return[0x2,Promise['reject'](new Error(_0x36f70c))];}return[0x2];});});},_0x473656;}();exports[a15_0x28817c(0x13b)]=DidSiopResponse;