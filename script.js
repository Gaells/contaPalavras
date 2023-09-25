function countWords() {
    const input = document.getElementById('inputWord').value.trim();
    const wordCounter = document.getElementById('word-counter');
    const charCounter = document.getElementById('char-counter');
    const vowelCounter = document.getElementById('vowel-counter');
    const consonantCounter = document.getElementById('consonant-counter');
    const spaceCounter = document.getElementById('space-counter');

    // Contar palavras
    const words = input.split(/\s+/);
    wordCounter.textContent = words.length;

    // Contar caracteres
    charCounter.textContent = input.length;

    // Contar vogais e consoantes
    const vowels = input.match(/[aeiouAEIOU]/g);
    const consonants = input.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);

    vowelCounter.textContent = vowels ? vowels.length : 0;
    consonantCounter.textContent = consonants ? consonants.length : 0;

    // Contar espaços
    spaceCounter.textContent = input.split(' ').length - 1;
}
