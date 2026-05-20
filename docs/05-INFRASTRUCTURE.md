# 🚀 Estratégia de Lançamento: Mobile & Lojas

Este documento detalha o processo de transição da aplicação Web (Next.js) para as lojas oficiais **Google Play Store** e **Apple App Store**.

## 1. Abordagem Técnica: Capacitor
Utilizaremos o **Capacitor** para converter o projeto Next.js em um app nativo. O Capacitor permite que o mesmo código web rode dentro de um "Webview" nativo de alta performance.

### Pré-requisitos de Instalação
No futuro, quando decidirmos gerar as builds nativas:
```bash
npm install @capacitor/core @capacitor/cli
npx cap init Romper com.seuusuario.romper
npm install @capacitor/android @capacitor/ios
npx cap add android
npx cap add ios
```

## 2. Checklist para a Google Play Store (Android)
*   **Custo:** US$ 25 (taxa única).
*   **Hardware:** Qualquer computador (Windows/Mac/Linux).
*   **Principais Ativos:**
    *   Ícone (512x512px).
    *   Feature Graphic (1024x500px).
    *   Mínimo de 2 prints de tela (celular).
*   **Procedimento:**
    1. Criar conta no [Google Play Console](https://play.google.com/console).
    2. Gerar o arquivo `.aab` (Android App Bundle) via Android Studio.
    3. Enviar para teste interno e depois produção.

## 3. Checklist para a Apple App Store (iOS)
*   **Custo:** US$ 99 (anuidade).
*   **Hardware:** **Obrigatório o uso de um Mac** com a versão mais recente do Xcode.
*   **Principais Ativos:**
    *   Prints de tela para iPhone de 6.5" e 5.5".
    *   Prints para iPad (opcional, mas recomendado).
*   **Procedimento:**
    1. Criar conta no [Apple Developer Program](https://developer.apple.com/).
    2. Sincronizar o projeto com o Xcode (`npx cap open ios`).
    3. Assinar o app com o certificado de distribuição.
    4. Enviar via "Transporter" ou Xcode para o App Store Connect.

## 4. Diferenciais para Aprovação (Apple Rigidity)
A Apple recusa apps que parecem apenas "sites". Para garantir a aprovação, o Romper deve manter:
*   **Offline Support:** O app deve carregar a estrutura básica mesmo sem internet.
*   **UX Nativa:** Animações fluidas e botões que respondem ao toque sem atraso (o que já estamos fazendo com o `Framer Motion` e CSS otimizado).
*   **Notificações:** O uso de push notifications ajuda a justificar ser um "App" e não apenas um site.

## 5. Próximos Passos de PWA (Atual)
Enquanto não subimos para as lojas, o app já funciona como PWA:
*   **iOS:** No Safari, clicar em "Compartilhar" > "Adicionar à Tela de Início".
*   **Android:** No Chrome, clicar nos três pontos > "Instalar Aplicativo".

---
*Atualizado em: 20 de maio de 2026*
