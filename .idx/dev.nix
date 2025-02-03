{ pkgs }:

{
  # Definir el canal de pkgs
  channel = "stable-24.05";  # Usa "unstable" si necesitas versiones más recientes
  packages = [
    pkgs.nodejs_20   # Instalar Node.js (versión 20)
    pkgs.yarn        # Instalar Yarn (gestor de paquetes)
    pkgs.nodePackages.pnpm  # Instalar PNPM
    pkgs.bun          # Instalar Bun (opcional)
    pkgs.mongodb      # Instalar MongoDB
    pkgs.mongosh      # Instalar Mongosh (cliente de MongoDB)
  ];

  # Configuración del servicio MongoDB
  services.mongodb = {
    enable = true;    # Habilitar MongoDB en el entorno
  };

  # Definir las variables de entorno
  env = {
    # Si necesitas definir alguna variable de entorno específica
    # Por ejemplo:
     DATABASE_URL = "mongodb://localhost:27017";
  };

  # Configuración de IDX (espacio de trabajo de desarrollo)
  idx = {
    # Configurar extensiones si es necesario
    extensions = [
      # "vscodevim.vim" # Descomentar para habilitar extensión de Vim
    ];

    # Configuración cuando el espacio de trabajo se crea
    workspace = {
      # Ejecutar comandos cuando se crea el workspace
      onCreate = {
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";
        # Abrir estos archivos por defecto si existen
        default.openFiles = [
          "pages/index.tsx" "pages/index.js"
          "src/pages/index.tsx" "src/pages/index.js"
          "app/page.tsx" "app/page.js"
          "src/app/page.tsx" "src/app/page.js"
        ];
      };

      # Configuración de arranque
      onStart = {
        # Iniciar MongoDB en el contenedor
        start-database = "mongod --dbpath=/workspace/data/db --bind_ip 0.0.0.0 --port 27017";
      };
    };

    # Habilitar vistas previas y configurar su comportamiento
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
