function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper (string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    const upper = string.toUpperCase();
    const lower = string.toLowerCase();
    if (string === lower){
        return "I can't hear you!";
    } else if (string ===upper){
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
}