// ===============================
// SONGS DATA
// ===============================

let songs = [
    {
        songName: "Aam Jahe Munde - Parmish Verma & Pardhaan",
        filePath: "assets/songs/Aam Jahe Munde.mp3",
        coverPath: "assets/cover/Aam Jahe Munde.avif"
    },
    {
        songName: "Athra Style - Sidhu Moose Wala & Jenny Johal",
        filePath: "assets/songs/Athra Style.mp3",
        coverPath: "assets/cover/Athra Style.avif"
    },
    {
        songName: "BAMBIHA BOLE - Amrit Maan & Sidhu Moose Wala",
        filePath: "assets/songs/BAMBIHA BOLE.mp3",
        coverPath: "assets/cover/bambiha bole.avif"
    },
    {
        songName: "Calaboose - Sidhu Moose Wala",
        filePath: "assets/songs/Calaboose.mp3",
        coverPath: "assets/cover/Calaboose.avif"
    },
    {
        songName: "CALIFORNIA LOVE - Cheema Y",
        filePath: "assets/songs/CALIFORNIA LOVE.mp3",
        coverPath: "assets/cover/CALIFORNIA LOVE.avif"
    },
    {
        songName: "East Side Flow - Sidhu Moose Wala",
        filePath: "assets/songs/East Side Flow.mp3",
        coverPath: "assets/cover/East Side Flow.avif"
    },
    {
        songName: "MF GABHRU - Karan Aujla & Ikky",
        filePath: "assets/songs/MF GABHRU.mp3",
        coverPath: "assets/cover/MF Gabru.avif"
    },
    {
        songName: "Morni - Diljit Dosanjh",
        filePath: "assets/songs/Morni.mp3",
        coverPath: "assets/cover/Morni.avif"
    },
    {
        songName: "Proud To Be Desi - Khan Bhaini & Shipra Goyal",
        filePath: "assets/songs/Proud To Be Desi.mp3",
        coverPath: "assets/cover/Proud to be desi.avif"
    },
    {
        songName: "Same Beef - Sidhu Moose Wala & Bohemia",
        filePath: "assets/songs/Same Beef.mp3",
        coverPath: "assets/cover/same beef.avif"
    },
    {
        songName: "TAARE - Sidhu Moose Wala & Harlal Batth",
        filePath: "assets/songs/TAARE.mp3",
        coverPath: "assets/cover/Taare.avif"
    }
];


// ===============================
// VARIABLES
// ===============================

let songIndex = 0;

let audioElement = new Audio(songs[songIndex].filePath);

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let songItemContainer = document.getElementById("songItemContainer");


// ===============================
// FORMAT TIME
// ===============================

function formatTime(seconds) {

    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    let minutes = Math.floor(seconds / 60);

    let secs = Math.floor(seconds % 60);

    if (secs < 10) {
        secs = "0" + secs;
    }

    return `${minutes}:${secs}`;
}


// ===============================
// CREATE SONG CARDS
// ===============================

songs.forEach((song, index) => {

    let songItem = document.createElement("div");

    songItem.classList.add("songItem");

    songItem.innerHTML = `
        <img src="${song.coverPath}" alt="${song.songName}">

        <span class="songName">${song.songName}</span>

        <span class="timestamp">

            <span class="songCurrentTime">00:00</span>

            <span>/</span>

            <span class="songDuration">00:00</span>

            <i id="${index}" class="ri-play-fill songItemPlay"></i>

        </span>
    `;

    songItemContainer.appendChild(songItem);
});


// ===============================
// GET PLAY BUTTONS
// ===============================

let songItemPlay = Array.from(
    document.getElementsByClassName("songItemPlay")
);


// ===============================
// GET CURRENT TIME ELEMENTS
// ===============================

let songCurrentTime = Array.from(
    document.getElementsByClassName("songCurrentTime")
);


// ===============================
// GET DURATION ELEMENTS
// ===============================

let songDuration = Array.from(
    document.getElementsByClassName("songDuration")
);


// ===============================
// BOTTOM SONG INFO
// ===============================

masterSongName.innerText = songs[songIndex].songName;


// ===============================
// GET SONG DURATIONS
// ===============================

songs.forEach((song, index) => {

    let tempAudio = new Audio();

    tempAudio.src = song.filePath;

    tempAudio.addEventListener("loadedmetadata", () => {

        if (songDuration[index]) {

            songDuration[index].innerText =
                formatTime(tempAudio.duration);

        }

    });

});


// ===============================
// RESET ALL PLAY BUTTONS
// ===============================

function makeAllPlays() {

    songItemPlay.forEach((element) => {

        element.classList.remove("ri-pause-fill");

        element.classList.add("ri-play-fill");

    });
}


// ===============================
// RESET CURRENT TIMES
// ===============================

function resetCurrentTimes() {

    songCurrentTime.forEach((element) => {

        element.innerText = "00:00";

    });
}


// ===============================
// PLAY SONG
// ===============================

function playSong(index) {

    songIndex = index;

    audioElement.src = songs[songIndex].filePath;

    audioElement.currentTime = 0;

    myProgressBar.value = 0;

    masterSongName.innerText =
        songs[songIndex].songName;

    makeAllPlays();

    resetCurrentTimes();

    audioElement.play();

    masterPlay.classList.remove(
        "ri-play-circle-fill"
    );

    masterPlay.classList.add(
        "ri-pause-circle-fill"
    );

    if (songItemPlay[songIndex]) {

        songItemPlay[songIndex].classList.remove(
            "ri-play-fill"
        );

        songItemPlay[songIndex].classList.add(
            "ri-pause-fill"
        );

    }

    gif.style.height = "50px";
}


// ===============================
// SMALL PLAY / PAUSE BUTTONS
// ===============================

songItemPlay.forEach((element) => {

    element.addEventListener("click", (e) => {

        let clickedIndex = parseInt(e.target.id);


        // SAME SONG
        if (clickedIndex === songIndex) {

            if (audioElement.paused) {

                audioElement.play();

                e.target.classList.remove(
                    "ri-play-fill"
                );

                e.target.classList.add(
                    "ri-pause-fill"
                );

                masterPlay.classList.remove(
                    "ri-play-circle-fill"
                );

                masterPlay.classList.add(
                    "ri-pause-circle-fill"
                );

                gif.style.height = "50px";

            }

            else {

                audioElement.pause();

                e.target.classList.remove(
                    "ri-pause-fill"
                );

                e.target.classList.add(
                    "ri-play-fill"
                );

                masterPlay.classList.remove(
                    "ri-pause-circle-fill"
                );

                masterPlay.classList.add(
                    "ri-play-circle-fill"
                );

                gif.style.height = "2px";
            }

        }


        // DIFFERENT SONG
        else {

            playSong(clickedIndex);

        }

    });

});


// ===============================
// MASTER PLAY / PAUSE
// ===============================

masterPlay.addEventListener("click", () => {

    if (audioElement.paused) {

        audioElement.play();

        masterPlay.classList.remove(
            "ri-play-circle-fill"
        );

        masterPlay.classList.add(
            "ri-pause-circle-fill"
        );

        if (songItemPlay[songIndex]) {

            songItemPlay[songIndex].classList.remove(
                "ri-play-fill"
            );

            songItemPlay[songIndex].classList.add(
                "ri-pause-fill"
            );

        }

        gif.style.height = "50px";

    }

    else {

        audioElement.pause();

        masterPlay.classList.remove(
            "ri-pause-circle-fill"
        );

        masterPlay.classList.add(
            "ri-play-circle-fill"
        );

        if (songItemPlay[songIndex]) {

            songItemPlay[songIndex].classList.remove(
                "ri-pause-fill"
            );

            songItemPlay[songIndex].classList.add(
                "ri-play-fill"
            );

        }

        gif.style.height = "2px";
    }

});


// ===============================
// UPDATE PROGRESS + CURRENT TIME
// ===============================

audioElement.addEventListener("timeupdate", () => {

    if (
        !isNaN(audioElement.duration) &&
        audioElement.duration > 0
    ) {

        let progress =
            (audioElement.currentTime /
                audioElement.duration) * 100;

        myProgressBar.value = progress;


        // CURRENT TIME
        if (songCurrentTime[songIndex]) {

            songCurrentTime[songIndex].innerText =
                formatTime(audioElement.currentTime);

        }

    }

});


// ===============================
// SEEK SONG
// ===============================

myProgressBar.addEventListener("change", () => {

    if (
        !isNaN(audioElement.duration) &&
        audioElement.duration > 0
    ) {

        audioElement.currentTime =
            (myProgressBar.value *
                audioElement.duration) / 100;

    }

});


// ===============================
// NEXT SONG
// ===============================

next.addEventListener("click", () => {

    if (songIndex >= songs.length - 1) {

        songIndex = 0;

    }

    else {

        songIndex += 1;

    }

    playSong(songIndex);

});


// ===============================
// PREVIOUS SONG
// ===============================

previous.addEventListener("click", () => {

    if (songIndex <= 0) {

        songIndex = songs.length - 1;

    }

    else {

        songIndex -= 1;

    }

    playSong(songIndex);

});


// ===============================
// AUTO NEXT
// ===============================

audioElement.addEventListener("ended", () => {

    if (songIndex >= songs.length - 1) {

        songIndex = 0;

    }

    else {

        songIndex += 1;

    }

    playSong(songIndex);

});