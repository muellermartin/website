jQuery(() => {
  jQuery
    .get("https://supporters.savetheinternet.info/api/supporters")
    .done(data => {
      let content = JSON.parse(data)[0];
      let orga = "";
      content.orga.forEach(element => {
        if(element.url != null && !element.url.startsWith("http")) {
          element.url = "http://" + element.url;
        }
        
        orga += '<div class="w-1/4 p-4 mt-8">' +
            '<a href="' + element.url + '" target="_blank">' + 
            '<img src="' +
            'https://supporters.savetheinternet.info/' + element.logoURL +
            '" class="h-16 block mx-auto"/><br /><p class="text-center w-full">' +
            element.name +
            '</a></p></div>';
      });

      let ppl = "";
      content.person.forEach(element => {
        ppl +=
          '<div class="w-1/4 py-2 px-4 mt-3"><p class="text-center w-full">' +
          element.name +
          "</p></div>";
      });

      jQuery("#supporting-ppl").append(ppl);
      jQuery("#supporting-orga").append(orga);
    });
});
