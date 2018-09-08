$(document).ready(function(){
        
    var channelName;


    // function to load default channel

    function loadDefaultChannel(){
        
        var url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings,statistics&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw &key={your-api-key}';


                $.getJSON(url, function(data){


                    $('#channel-banner img').attr('src', data.items[0].brandingSettings.image.bannerImageUrl).attr('alt', data.items[0].snippet.title);
                    $('#channel-logo img').attr('src', data.items[0].snippet.thumbnails.default.url).attr('alt', data.items[0].snippet.title);
                    $('#channel-name').text(data.items[0].snippet.title);
                    $('#channel-desc').text(data.items[0].snippet.description);
                    $('#odometer').html(data.items[0].statistics.subscriberCount);
                    $('#ytsubscribe').attr('href', 'https://www.youtube.com/channel/' +data.items[0].id+ '?sub_confirmation=1');
                    $('#total-views').text(data.items[0].statistics.viewCount);
                    $('#total-videos').text(data.items[0].statistics.videoCount);
                    $('#total-keywords').text(data.items[0].brandingSettings.channel.keywords);

            });
            
    }
    
    // function to load channel by channel id
        
    function loadChannelDetailsById(channelId){
                    
            var url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings,statistics&id='+ channelId +'&key={your-api-key}';


                $.getJSON(url, function(data){


                    $('#channel-banner img').attr('src', data.items[0].brandingSettings.image.bannerImageUrl).attr('alt', data.items[0].snippet.title);
                    $('#channel-logo img').attr('src', data.items[0].snippet.thumbnails.default.url).attr('alt', data.items[0].snippet.title);
                    $('#channel-name').text(data.items[0].snippet.title);
                    $('#channel-desc').text(data.items[0].snippet.description);
                    $('#odometer').html(data.items[0].statistics.subscriberCount);
                    $('#ytsubscribe').attr('href', 'https://www.youtube.com/channel/' +data.items[0].id+ '?sub_confirmation=1');
                    $('#total-views').html(data.items[0].statistics.viewCount);
                    $('#total-videos').html(data.items[0].statistics.videoCount);
                    $('#total-keywords').text(data.items[0].brandingSettings.channel.keywords);

            });
            
        
        
    }
    
    // function to load channel by username
    
    function loadChannelDetailsByUser(username){
        
        
            var url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings,statistics&forUsername='+ username +'&key={your-api-key}';

                $.getJSON(url, function(data){


                    $('#channel-banner img').attr('src', data.items[0].brandingSettings.image.bannerImageUrl).attr('alt', data.items[0].snippet.title);
                    $('#channel-logo img').attr('src', data.items[0].snippet.thumbnails.default.url).attr('alt', data.items[0].snippet.title);
                    $('#channel-name').text(data.items[0].snippet.title);
                    $('#channel-desc').text(data.items[0].snippet.description);
                    $('#odometer').html(data.items[0].statistics.subscriberCount);
                    $('#ytsubscribe').attr('href', 'https://www.youtube.com/channel/' +data.items[0].id+ '?sub_confirmation=1');
                    $('#total-views').text(data.items[0].statistics.viewCount);
                    $('#total-videos').text(data.items[0].statistics.videoCount);
                    $('#total-keywords').text(data.items[0].brandingSettings.channel.keywords);

            });
            
        
        
    }
    
    
    loadDefaultChannel();
    var defaultLoop = setInterval(loadDefaultChannel,3000);    

    
    $('#find-icon').click(function(e){
        clearInterval(defaultLoop); 
        channelName = $('#channel').val();
        
        if((channelName.slice(0,2) == "UC" || channelName.slice(0,2) == "HC" || channelName.slice(0,2) == "uc" || channelName.slice(0,2) == "hc") && channelName.length == 24){
            loadChannelDetailsById(channelName);
            setInterval(function(){ loadChannelDetailsById(channelName); }, 3000);
        } else if(channelName.indexOf("channel") !== -1){
            channelName = channelName.split("channel/")[1];
            loadChannelDetailsById(channelName);
            setInterval(function(){ loadChannelDetailsById(channelName); }, 3000);
        } else if(channelName.indexOf("user") !== -1){
            channelName = channelName.split("user/")[1];
            loadChannelDetailsByUser(channelName);
            setInterval(function(){ loadChannelDetailsByUser(channelName); }, 3000);
        } else {
            loadChannelDetailsByUser(channelName);
            setInterval(function(){ loadChannelDetailsByUser(channelName); }, 3000);
        }  
        
        
        
        
    });
    $('#channel').keypress(function(e){
        clearInterval(defaultLoop);
        if(e.which == '13'){
            channelName = $('#channel').val();
        
            if((channelName.slice(0,2) == "UC" || channelName.slice(0,2) == "HC" || channelName.slice(0,2) == "uc" || channelName.slice(0,2) == "hc") && channelName.length == 24){
                loadChannelDetailsById(channelName);
                setInterval(function(){ loadChannelDetailsById(channelName); }, 3000);
            } else if(channelName.indexOf("channel") !== -1){
                channelName = channelName.split("channel/")[1];
                loadChannelDetailsById(channelName);
                setInterval(function(){ loadChannelDetailsById(channelName); }, 3000);
            } else if(channelName.indexOf("user") !== -1){
                channelName = channelName.split("user/")[1];
                loadChannelDetailsByUser(channelName);
                setInterval(function(){ loadChannelDetailsByUser(channelName); }, 3000);
            } else {
                loadChannelDetailsByUser(channelName);
                setInterval(function(){ loadChannelDetailsByUser(channelName); }, 3000);
            }  
        };
        
    });
    
    
    
    
    
                  
    
});