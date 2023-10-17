class Helpers {
    filterMatchesByLocationAndStatus(response) {

        const result = [];

        for(const match of response.matches){
            if(match.locationlvl1 === "Germany" && match.status === "canceled"){
            result.push(match.matchId)
            }
        }
        
        return result;
    }

    filterMatchesByCoatingAndShower(response) {
        const result = [];

        for(const match of response.matches){
            if(match.matchInfo.coating === "Main.artificialGrass" && match.matchInfo.isShower === true){
            result.push(match.matchId)
            }
        }
        
        return result;
    }

    filterMatchesByLocationAndPrice(response) {
        const result = [];

        for(const match of response.matches){
            if(match.locationlvl2 === "Berlin" && match.price > 0){
            result.push(match.matchId)
            }
        }
        
        return result;
    }

    filterMatchesByCreatorFeeAndStatus(response) {
        const result = [];

        for(const match of response.matches){
            if(match.creatorFeePerPlayer > 3 && match.status === "canceled"){
            result.push(match.matchId)
            }
        }
        
        return result;
    }

    filterMatchesByCoveringAndDressingRoom(response) {
        const result = [];

        for(const match of response.matches){
            if(match.matchInfo.covering === "Main.onTheStreet" && match.matchInfo.isDressingRoom === true){
            result.push(match.matchId)
            }
        }
        
        return result;
    }
}

export default new Helpers()