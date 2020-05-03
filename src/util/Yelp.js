//adding credentials for yelp
const apiKey='lR0yd0ieON3slHrnho-Xpq9rdZSpdamzcdKEGirIScL74akblbi0BjeqzJQ7lTYIxS2oMKOHp83Q3jo545FqCCVLDHU2_hyO9Ucy3c9tlkpm-aBe21kcMUEnTS-uXnYx';

//adding a fetch() polyfill;for older browser

//creating a yelp module

const Yelp={
search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
        headers:{
            Authorization:`Bearer ${apiKey}`,
        }
    }).then(response=>{ //returned response to JSON to utilize businesses
        return response.json();
    }).then(jsonResponse=>{ //retrives businesses list
        if(jsonResponse.businesses){ //check if jsonResponse has a businesses key
            return jsonResponse.businesses.map(business=>{
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }

            });

        }
    });
    
    

}
}
export default Yelp;

