var p;
var player = {
    playVideo: function (container, videoId) {
        if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {
            window.onYouTubeIframeAPIReady = function () {
                player.loadPlayer(container, videoId);
            };

            $.getScript('//www.youtube.com/iframe_api');
        } else {
            player.loadPlayer(container, videoId);
        }
    },

    loadPlayer: function (container, videoId) {
        p = new YT.Player(container, {
            videoId: videoId,
            width: '1600',
            height: '900',
            playerVars: {
                autoplay: 0,
                controls: 1,
                disablekb: 1,
                hl: 'ru-ru',
                loop: 1,
                modestbranding: 1,
                showinfo: 0,
                autohide: 1,
                color: 'white',
                iv_load_policy: 3,
                theme: 'light',
                rel: 0
            },
            events: {
                'onReady': onPlayerReady
            }
        });
    }

};
player.playVideo('yt_video_player', 'O55s69YVXKU');

function onPlayerReady(event) {
    p.mute();
}
// YOUTUBE PLAYER - END
