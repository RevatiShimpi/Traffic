export default function Main(){
    return (
        <>
        <div class="pac-card" id="pac-card">
        <div>
          <div id="title">Autocomplete search</div>
          <div id="type-selector" class="pac-controls">
            <input
              type="radio"
              name="type"
              id="changetype-all"
              checked="checked"
            />
            <label for="changetype-all">All</label>
  
            <input type="radio" name="type" id="changetype-establishment" />
            <label for="changetype-establishment">establishment</label>
  
            <input type="radio" name="type" id="changetype-address" />
            <label for="changetype-address">address</label>
  
            <input type="radio" name="type" id="changetype-geocode" />
            <label for="changetype-geocode">geocode</label>
  
            <input type="radio" name="type" id="changetype-cities" />
            <label for="changetype-cities">(cities)</label>
  
            <input type="radio" name="type" id="changetype-regions" />
            <label for="changetype-regions">(regions)</label>
          </div>
          <br />
          <div id="strict-bounds-selector" class="pac-controls">
            <input type="checkbox" id="use-location-bias" value="" checked />
            <label for="use-location-bias">Bias to map viewport</label>
  
            <input type="checkbox" id="use-strict-bounds" value="" />
            <label for="use-strict-bounds">Strict bounds</label>
          </div>
        </div>
        <div id="pac-container">
          <input id="pac-input" type="text" placeholder="Enter a location" />
        </div>
      </div>
      <div id="map"></div>
      <div id="infowindow-content">
        <span id="place-name" class="title"></span><br />
        <span id="place-address"></span>
      </div>
  
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&libraries=places&v=weekly"
        defer
      ></script>
      </>
    )
}