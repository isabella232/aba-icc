jQuery(function(){window.idx=lunr(function(){this.field("id");this.field("title",{boost:10});this.field("collection");this.field("summary")});window.data=$.getJSON("/content.json");window.data.then(function(n){$.each(n,function(n,t){window.idx.add($.extend({id:n},t))})});$("#search_box").on("click",function(){$("#search_results").toggleClass("show")});$("#site_search").bind("keyup",function(){event.preventDefault();var t=$("#search_box").val();var e=window.idx.search(t);n(e)});function n(n){var t=$("#search_results");window.data.then(function(e){if(n.length){t.empty();n.forEach(function(n){var i=e[n.ref];var o="<li><small>"+i.collection+'</small><br /><a href="'+i.url+'">'+i.title+"</a></li>";t.append(o)})}else{t.html("<li><strong>No results found</strong></li>")}})}});