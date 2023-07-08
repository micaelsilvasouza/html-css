onmessage = function(mensagem)
{
    let sum = 1
    for (let index = 0; index <= 10000000000; index++) {
      sum += 1
    }

    postMessage(sum)
}