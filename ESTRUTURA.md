# Estrutura do projeto

A organização foi simplificada para facilitar manutenção e atualização.

- `src/components/common/` — componentes reutilizáveis: Header, Footer, tema, WhatsApp e ScrollToTop.
- `src/components/sections/` — seções visuais e funcionais do site.
- `src/pages/` — páginas completas.
- `src/assets/` — imagens e logos usados pelo React.
- `src/styles/` — estilos atuais centralizados.
- `src/context/` — contexto global.
- `src/data/` — reservado para dados que futuramente podem ser separados dos componentes.
- `src/hooks/` — reservado para hooks reutilizáveis.
- `src/utils/` — reservado para funções auxiliares.

As pastas duplicadas antigas (`Componentes`, `Comuns`, `img`, páginas duplicadas na raiz e estruturas vazias antigas) foram removidas da versão organizada.

Os caminhos de importação dos componentes e imagens foram atualizados para a nova estrutura.
