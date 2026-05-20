Prompts para gerar sprites de "moises" (Português / English)

Base (use para todas as poses):
PT: "Personagem: moises. Estilo: 2D Flat Illustration, amigável, premium mobile game, cores vibrantes, sombreamento suave (cel shading). Proporções cartunescas, olhos expressivos, traços limpos e contornos suaves. Roupas modernas casuais, paleta: azul petróleo, branco, toques de dourado. Fundo: transparente. Resolução: 1024x1024. Personagem centralizado. Alta qualidade, detalhes nítidos, iluminação suave, sombra cel-shading leve. --no text, watermark, border"
EN: "Character: moises. Style: 2D flat illustration, friendly, premium mobile game, vibrant colors, soft cel-shading. Cartoon proportions, expressive eyes, clean lines, soft outlines. Modern casual outfit, color palette: teal, white, gold accents. Background: transparent. Resolution: 1024x1024. Character centered. High quality, sharp details, soft lighting, subtle cel-shaded shadows. --no text, watermark, border"

Frames e variações específicas:
1) idle_1
PT: base + "pose: standing relaxed, hands at sides, slight smile, weight on one leg, slight head tilt."
EN: base + "pose: standing relaxed, hands at sides, slight smile, weight on one leg, slight head tilt."

2) idle_2
PT: base + "pose: hands on hips, confident friendly smile, subtle chest forward."

3) walk_1..4
PT: base + "sequence: walk cycle frame X of 4, dynamic but natural stride, arms swinging, readable silhouette. (substitua X por 1..4)."

4) run_1..6
PT: base + "sequence: run cycle frame X of 6, forward lean, expressive motion blur allowed on limbs but keep crisp edges, energetic."

5) jump_1..3
PT: base + "frame X of jump: prepare (crouch), airborne (knees tucked), landing (bent knees). Emphasize readable silhouette."

6) attack_1..4
PT: base + "action: attack frame X of 4, swing motion with energy, weapon optional (use a stylish wooden staff), follow-through and anticipation."

7) hurt_1..2
PT: base + "reaction: hurt, slight grimace, body recoiling."

8) die_1..4
PT: base + "sequence: stagger then collapse across frames, keep character readable and on transparent background."

9) emotes
PT: base + "close-up expression: happy / sad / angry. Slight head crop allowed but keep full body centered for consistency."

Dicas de geração:
- Use o mesmo prompt base e, se possível, use inpainting com uma máscara para manter consistência do corpo enquanto atualiza apenas pose/expressão.
- Defina uma seed fixa por animação para reduzir variações indesejadas entre frames.
- Ajuste guia de cor (color reference image) se o gerador suportar imagens de referência.
- Negative prompt: "text, watermark, logo, extra limbs, lowres, blurry, deformed".

Exemplo para uma chamada (Stable Diffusion):
sdxl_generate(prompt=PT_base + " pose: standing relaxed...", width=1024, height=1024, seed=12345, negative_prompt="text, watermark, lowres")

Se quiser, adapto esses prompts para Automatic1111/InvokeAI, Midjourney (com variações), ou gero um script para baixar resultados automaticamente.
