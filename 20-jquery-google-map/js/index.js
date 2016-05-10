function initialize() {
  if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    var a = 15;
    var b = 2;
  }else{
    var a = 17;
    var b = 1;
  }
  var latlng = new google.maps.LatLng(35.6714305,139.7040676);
  var point = new google.maps.LatLng(35.6714305,139.7040676);
  var myOptions = {
    zoom: a,/*拡大比率*/
    center: latlng,/*表示枠内の中心点*/
    scrollwheel: false,
    mapTypeControlOptions: { mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
  };
  var map = new google.maps.Map(document.getElementById('top_cont_7_map'), myOptions);
  
  /*アイコン設定▼*/
  var icon = new google.maps.MarkerImage('img/pin-icon.png',
  new google.maps.Size(80.0, 110.0),
  new google.maps.Point(0, 0),
  new google.maps.Point(40.0/b, 110.0/b),
  new google.maps.Size(80.0/b, 110.0/b)
  );
  
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: 'エルモとゆかいな仲間たちcafe'
  };
  var marker=new google.maps.Marker({
    position: point,
    map: map,
    icon: icon,
    zIndex: 5
  });
  　/*アイコン設定ここまで▲*/
  /*取得スタイルの貼り付け*/
  var styleOptions = [
    {
    featureType: "all",
    elementType: "all",
    stylers: [
    { visibility: "simplified" }
    ]
    },{
    featureType: "all",
    elementType: "all",
    stylers: [
    { visibility: "on" }
    ]
    },{
    featureType: "all",
    elementType: "all",
    stylers: [
    
    ]
    }
  ];
  var styledMapOptions = { name: 'エルモとゆかいな仲間たちcafe' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}

google.maps.event.addDomListener(window, 'load', initialize);