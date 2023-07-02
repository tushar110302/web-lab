function identifyInfection(V, bloodSamples) {
    const results = [];
  
    for (const blood of bloodSamples) {
      let virusIndex = 0;
      let bloodIndex = 0;
  
      while (virusIndex < V.length && bloodIndex < blood.length) {
        if (V[virusIndex] === blood[bloodIndex]) {
          virusIndex++;
          bloodIndex++;
        } else {
          virusIndex++;
        }
      }
  
      if (bloodIndex === blood.length) {
        results.push("POSITIVE");
      } else {
        results.push("NEGATIVE");
      }
    }
  
    return results;
  }
  
  // Example usage
  const virusComposition = "coronavirus";
  const bloodCompositions = ["ravus", "oron", "covirus", "coronaviruss", "viruscorna"];
  
  const results = identifyInfection(virusComposition, bloodCompositions);
  console.log(results);