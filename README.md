# Aulas JavaScript

Introdução ao Java Script para uso básico.

## Sobre a Linguagen

- JavaScript **NãO É** Java
- JavaSceript = JS = EcmaScript
- É uma linguagem voltada principalmente para o Front-End
- MAs também pode ser usada no Back-End através de plataformas com Node.JS por exemplo
- Até mesmo no nicho de apps Mobile, o JS também pode ser usado (React, Nest etc)

## Onde Usar o JS dentro do Front-End?

- Funcionalidades de menu responsivo
- Galeria de Fotos
- Carousel/Slider de contéudo
- Recursos avançados de formulário (validação, integração com API)
- Interações avançadas (manipulação de mouse, teclado, gestos, toques etc)

## Como Implementar?

### Interna

Programação feito dentro da propria página HTML usando a tag `script`, usada principalmente quando são scripts mais simples ou pequenos

### Externa

Programação feita dentro de arquivos JavaScript exclusivos (possuem a extensão **.js**), usada principalmente quando queremos reutilizar scripts entre página HTML diferentes. A ligação entre o arquivo JavaScript e a página HTML também é feita usando a tag `<script>`. É a forma mais recomendada.

**Obs.:** normalmente a programação é feita (ou ligada) **NO FINAL** da página HTML, portanto, pouco antes do fechamento `</body>`.

---

## Sobre Arrays

Arrays são estruturas de dados **indexados**, também conhecidos como **vetores** ou **matrizes**.

Na prática, um array é lista de dados sequencias, e cada dado é armazenado em uma posição/índice de array.

**Obs.:** a contagem de elementos do array **sempre inicia em zero**.

---

## Sobre Objetos

Objetos também são estruturas de dados só que **não indexados**, ou seja, o acesso aos dados é feito de forma diferente do que vimos nos arrays. No objeto, acessamos atráves de **prioridades** e **valores** declarados dentro do objeto.

Normalmente, o objeto é programado de acordo com algum contexto relacionado ao mundo real.

---

## Sobre condicionais

São estruturas ou comandos, que permitem usar uma ou mais condições dentro de uma aplicação.

De acordo com essa análise, podendo ser **verdadeiro/true** ou **falso/false**, a aplicação poderá fazer ações diferentes.

## Operadores Opcionais

Ao trabalhar com operadores opcionais, é comum ultilizar operações relacionais para comparações dentro das condições. Os operadores mais comuns são:

- Maior que         >
- Menor que         <
- Maior ou igual   >=
- Menor ou igual   <=
- Igualdade        ==
- Diferença        !=


---

## Sobre comandos de repetição

São estruturas/comandos que permitem a execução repetidas vezes de uma ou mais ações/ comando/ operações. Também conhecidos como **loops** ou **laços de repetições**

A quantidade vezes que o loop será executado dependerá de alguma lógicaou condição definida pelo programador ou pelo sistema/aplicação. Também é comum que, para que o loop pare de executar, seja definida uma variável de controle de repetição.

## Dom

/* Funçoes de acersso e manipulação de DOM

- querySelector () é uma função para selecionar UM ÚNICO elemendo da página (DOM).

- querySeletorAll() é uma funçao para selecionar VÁRIOS elementos na página (DOm).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no CSS*/
