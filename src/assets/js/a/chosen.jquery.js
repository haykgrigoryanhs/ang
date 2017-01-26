
var hdChosenSelect = new function (){
    this.selName = "";
    this.init=function(el){
        
        $('.'+el).parent().children(".hd-chosen-select-content").remove();
        $('.'+el).parent().append('<div class="hd-chosen-select-content">\n\
                                    <div class="row"><div  class="col-md-10"><div id="hd-chosen-select-content-selecteds"><span class="hd-chosen-select-content-selected-item">pixs<span>x</span></span></div></div>\n\
                                    <div class="col-md-2"><div id="hd-chosen-select-content-button"><span >+</span></div></div></div>\n\
                                </div>');

        $("#hd-chosen-select-content-selecteds").html("");
        $('.'+el+' option:selected').each(function(e){
            
            $("#hd-chosen-select-content-selecteds").append('<span class="hd-chosen-select-content-selected-item">'+$(this).html()+'<span class="cancel" item-val="'+$(this).val()+'">x</span></span>');
            
        });
        
        $('body').on('click','.hd-chosen-select-content-selected-item .cancel',function(){
            $('.'+el+' option:selected[value='+$(this).attr('item-val')+']').removeAttr("selected");
            $(this).parent('.hd-chosen-select-content-selected-item').remove();
        });
        $('#hd-chosen-select-content-button').on('click',function(){
            var i = 0;
            $('body').append('<div id="hd-chosen-select-content-select-list"><ul></ul></div>');
            $('#hd-chosen-select-content-select-list').attr('style','left:'+($(this).offset().left-120)+'px;top:'+($(this).offset().top+31)+'px;')
            
            $('.'+el+' option').each(function(e){
                if(!$(this).is(':selected')){ 
                    $('#hd-chosen-select-content-select-list ul').append('<li class="hd-chosen-select-content-select-list-item" item-val="'+$(this).val()+'">'+$(this).html()+'</li>');
                    i++
                }
            });
            if(i==0)
                $('#hd-chosen-select-content-select-list').remove();
            
            $(document).on('click',function(e){
                if($(e.target).parent().attr('id')!='hd-chosen-select-content-button'){
                    $('#hd-chosen-select-content-select-list').remove();
                }
            });
            $('.hd-chosen-select-content-select-list-item').on('click',function(){
                $('.'+el+' option[value='+$(this).attr('item-val')+']').prop('selected',true);
                $('#hd-chosen-select-content-selecteds').append('<span class="hd-chosen-select-content-selected-item">'+$(this).html()+'<span class="cancel" item-val="'+$(this).attr('item-val')+'">x</span></span>')
            });
        })
    }

}

