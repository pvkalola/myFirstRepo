var ajaxCall;
var jqxhr =
{
	ajaxRequest : function(_URL,_data,_dataType="html",_type="POST",_beforeSend=$('#before')){
		_beforeSend.show();
	 	// if(ajaxCall) ajaxCall.abort();
	 	ajaxCall=$.ajax({
			type: _type,
			timeout: 10000,
        	url: _URL,
	        data: _data,
	        dataType: _dataType,
         	cache: false,
	    })
	   /* .done(function(data, textStatus, jqXHR){ 
    		console.log(data);
			
				//return _success.text(data);	  
				return data;	  
				
		})*/
	    .fail(function(jqXHR, textStatus, errorThrown) { 
	 		console.log(jqXHR);
	 		console.log(textStatus);
	 		console.log(errorThrown);
		 })
		.always(function(jqXHR, textStatus, errorThrown) { 
			_beforeSend.hide();
			/*console.log(jqXHR);
	 		console.log(textStatus);
	 		console.log(errorThrown);*/
	 		/*return ajaxCall;*/
		})
	},
}