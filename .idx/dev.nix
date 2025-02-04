{ pkgs }: {
  # Canal estable de Nix
  channel = "stable-24.05";

  # Instalación de paquetes esenciales
  packages = [
    pkgs.nodejs_20        # Instalar Node.js (versión 20)
    pkgs.yarn             # Instalar Yarn
    pkgs.nodePackages.pnpm # Instalar PNPM
    pkgs.bun              # Instalar Bun
    pkgs.mongodb          # Instalar MongoDB
    pkgs.mongosh          # Cliente de MongoDB
    pkgs.docker           # Instalar Docker
    pkgs.docker-compose   # Instalar Docker Compose
  ];

  # Configuración de servicios
  services = {
    mongodb.enable = true;   # Habilitar MongoDB
    docker.enable = true;    # Habilitar Docker
  };

  # Variables de entorno
  env = {
    DATABASE_URL = "mongodb://localhost:27017";
  };

  # Configuración del espacio de trabajo en Google IDX
  idx = {
    # Extensiones recomendadas
    extensions = [
      # "vscodevim.vim" # Descomentar si usas Vim en VSCode
    ];

    workspace = {
      # Comandos a ejecutar al crear el workspace
      onCreate = {
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";
        # Archivos a abrir automáticamente
        default.openFiles = [
          "pages/index.tsx" "pages/index.js"
          "src/pages/index.tsx" "src/pages/index.js"
          "app/page.tsx" "app/page.js"
          "src/app/page.tsx" "src/app/page.js"
        ];
      };

      # Configuración al iniciar el workspace
      onStart = {
       
        # Iniciar el demonio de Docker
        start-docker = "dockerd > /workspace/docker.log 2>&1 &";
      };
    };

    # Configuración de vistas previas en Google IDX
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0"];
          manager = "web";
        };
      };
    };
  };
}
