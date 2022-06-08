function createCard(name, description, pictureUrl, startString, endString, location) {
    return `
      <div>
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body shadow p-3 mb-5 bg-body rounded”>
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
          <p class="card-text">${description}</p>
          <div class="card-footer">
          <p>${startString} - ${endString}</p>
        </div>
      </div>
    `;
}

function alert() {
    return `
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Error</strong> Something has gone wrong. Please try again.
      </div>
    `;
}



window.addEventListener('DOMContentLoaded', async () => {
    
    const url = 'http://localhost:8000/api/conferences/';
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            const html = alert();
            const error = document.querySelector('.error');
            error.innerHTML += html;
            throw new Error(alert)
        } else {
            const data = await response.json();

            for (let conference of data.conferences) {
              const detailUrl = `http://localhost:8000${conference.href}`;
              const detailResponse = await fetch(detailUrl);
              if (detailResponse.ok) {
                const details = await detailResponse.json();
                const name = details.conference.name;
                const description = details.conference.description;
                const pictureUrl = details.conference.location.picture_url;
                const location = details.conference.location.name;
                const enUSFormatter = new Intl.DateTimeFormat('en-US');
                const starts = new Date(details.conference.starts);
                const ends = new Date(details.conference.ends);
                const startString = enUSFormatter.format(starts)
                const endString = enUSFormatter.format(ends)
                const html = createCard(name, description, pictureUrl, startString, endString, location);
                const row = document.querySelector('.row');
                row.innerHTML += html;;
              }
            }
      
          }
    }  catch (e) {
        console.error(e)
        error => console.error('error', error);
    }

});
