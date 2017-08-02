const Path = require("path");

const repoPackagesDir = Path.join(__dirname, "../../../../packages");

module.exports = {
  resolve: {
    alias: {
      
      "bluerain-client-services": Path.join(repoPackagesDir, "bluerain-client-services/src"),
      
      "bluerain-os": Path.join(repoPackagesDir, "bluerain-os/src"),
      
    },
  modules: [
        
      Path.join(repoPackagesDir, "bluerain-client-services"),
      Path.join(repoPackagesDir, "bluerain-client-services/node_modules"),
      
      Path.join(repoPackagesDir, "bluerain-os"),
      Path.join(repoPackagesDir, "bluerain-os/node_modules"),
      
    ]
  }
};
