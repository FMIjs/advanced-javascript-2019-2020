##  Какво е HTTP 1.1 (Hypertext Transfer protocol ) протокола и как работи 

[Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

![http communication](https://www.researchgate.net/profile/Paul_Raine2/publication/327076386/figure/fig2/AS:663433397694466@1535186256170/HTTP-request-and-response-process-between-client-and-server.png)

HTTP протокола разчита на TCP, за да се установи връзка между клиента и сървъра.
![OSI and TCP/IP model relation](https://fiberbit.com.tw/wp-content/uploads/2013/12/TCP-IP-model-vs-OSI-model.png)



#### Headers
Хедърите позволяват на клиента и на сървъра да изпращат допълнителна информация на към http request-a или response-a. 

Хедърите се делят на 4 основни групи: 
* основна група (за request и response) , която няма отношение в типа на данните 
* Request хедъри , съдържа информация за ресурса, който ще бъде извлечен или за клиента, който иска ресурс
* Response хедъри , съдържат допълнителна информация за response-a, като на локация или информаиция за сървъра
* Entity хедъри, които съдържат информация за тялото на ресурса, които изпращаме 

Може прочетете още за хедърите [тук.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)


#### Response codes 
Когато сървъра обработва една заявка е много важно да подбирате какъв статус код тя ще върне на вашия клиент в текущата ситуация. По този начин клиента може да разбере много бързо какво е станало с неговата заявка, как е била обработен, дали е минала успешно или не. 

Ето различните диапазони от статус кодове. 
1) Informational responses (100–199)
2) Successful responses (200–299)
3) Redirects (300–399)
4) Client errors (400–499)
5) Server errors (500–599)

По-подробна информация за статус кодовете може да прочетете [тук](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) или [тук](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). 

#### Cookies - Бисквитки 
Бисквиките са много части информация, които сървъра изпраща на клиента. Браузъра може да запише тези малки части информация и да ги изпрати със следващата заявка до същия сървър.   
Бисквиките са много ползно нещо имайки предвид, че http е не може да запазва състояния.
Http бисквитките се използват предимно за следните цели: 
* сесийност на потребител 
* идентификация/ персонализация на потребител 
* запазване / следене на състояние 

Може да прочетете още за бисквитките [тук](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)


### Node JS http module 
[Link](https://nodejs.org/api/http.html#http_response_statuscode)
 
### Бонус 
[JSON WEB token](https://jwt.io)

[Postman](https://www.getpostman.com) - може да тествате вашите заявки чрез това приложение

[cURL](https://curl.haxx.se/docs/manpage.html) - за тестване на вашите заявки (и много др.) през конзолата 