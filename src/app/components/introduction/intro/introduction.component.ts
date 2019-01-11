import {CommunicateService} from "../../../services/app-service.service";
import {AfterViewInit, Component, Inject} from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements AfterViewInit{
    
    constructor(@Inject(CommunicateService) public communicationService : CommunicateService){}
    
    public menuButtons = [
	{disable : true}, {disable : true}, {disable : true}, {disable : true},
    ];
    
    public recipes = [
	{color : '#21a01a', mark : 'Нв', header : 'Сеть или кэш', text :'Сервисный рабочий в этом рецепте пытается получить более свежий контент из сети, но если запрос в сеть занимает много времени, контент получается из кэша.', link : '/caching-strategies/network-cache/(intro//aux:demo)'},
	{color : '#21a01a', mark : 'Нв', header : 'Только кэш', text :'Это пример показывает сервисного рабочего отвечающего всегда из кэша по событию <span class="dark-purple">fetch</span>', link :  '/caching-strategies/cache-only/(intro//aux:demo)'},
	{color : '#21a01a', mark : 'Нв', header : 'Кэш и обновление', text :'Пример представляет сервисного рабочего загружающего клиенту ресурс из кэша для обеспечения быстрого отклика на запрос, а после этого он обновляет запись в кэше этого ресурса из сети.', link : '/caching-strategies/cache-update/(intro//aux:demo)'},
	{color : '#e16800', mark : 'Ср', header : 'Кэш, обновление и отображение', text :'Пример сервисного рабочего загружающего ресурс из кэша для обеспечения скорейшего отклика, после чего он обновляет запись кэша ресурсов из сети, после чего интерфейс клиента обновляется автоматически, применив новые данные.', link : '/caching-strategies/cache-update-refresh/(intro//aux:demo)'},
	{color : '#e16800', mark : 'Ср', header : 'Встроенный резерв.', text: 'Пример сервисного рабочего загружающего встроенный в код шаблон, при отсутствии ресурса в сети или отсутствие соединения.', link : '/caching-strategies/embedded-fallback/(intro//aux:demo)'},
	{color : '#21a01a', mark : 'Нв', header : 'Отправка и запрос данных.', text: 'Пример отправки уведомлений и получения данных при получении сообщений.', link : ''},
	{color : '#21a01a', mark : 'Нв', header : 'Отправка данных.', text: 'Пример отправки уведомлений с данными. Пример того, как отправлять и получать строку, но данными, извлекаемыми из полученного сообщения могут быть форматы : <span class="dark-purple">string, ArrayBuffer, Blob, JSON</span>', link : ''},
	{color : '#21a01a', mark : 'Нв', header : 'Отправка с преднастройками', text: 'Пример уведомлений с установкой объекта настроек: определение языка сообщения, шаблона вибрации, изображения сопостовляющего сообщение, более подробно -  <a target="_blank" href="https://notifications.spec.whatwg.org/#api">свойства уведомления</a>', link : ''},
	{color : '#21a01a', mark : 'Ср', header : 'Простая отправка', text: 'Пример простого использования <span class="dark-purple">Web Push API</span>. Отправка уведомления пользователю, даже когда страница приложения закрыта. ', link : ''},
	{color : '#e16800', mark : 'Ср', header : 'Замещающее сообщение', text: 'Пример использование свойства <span>tag</span> при отображении сообщения клиенту, которое замещает предыдущее сообщение новым. Позволяет отобразить только обновленную версию сообщения или свернуть несколько сообщений в одно.', link : ''},
	{color : '#a00100', mark : 'Пр', header : 'Квотирование', text: 'Пример управлением квотами различных браузеров. Рассматривается попытка отправки нескольких уведомлений (видимых и скрытых) для понимания поведения уведомления при открытой и закрытой закладках, а также различия в поведениях при реагировании на сообщение и его игнорировании.', link : ''},
	{color : '#a00100', mark : 'Пр', header : 'Клиенты.', text: 'Пример контроля клиентов сервисного рабочего (обслуживаемых ресурсов) при реагировании на сообщение, сгенерированного из события <span>push</span>. Позволяет сфокусироваться на закладке приложения, если оно не в фокусе или открыть, если оно закрыто.', link : ''},
	{color : '#a00100', mark : 'Пр', header : 'Подписка.', text: 'Пример работы управлением подпиской на уведомления.', link : ''},
	{color : '#21a01a', mark : 'Нв', header : 'Немедленный контроль', text: 'Пример получения немедленного контроля сервисным рабочим над клиентами, без необходимости ожидания события навигации', link : '/general-usage/immediate-claim/(intro//aux:demo)'},
	{color : '#21a01a', mark : 'Нр', header : 'Передача сообщений', text: 'Пример коммуникации между сервисным рабочим и страницей, показывающей использование сервисного рабочего для передачи сообщений между страницами.', link : '/general-usage/message-relay/(intro//aux:demo)'},
	{color : '#e16800', mark : 'Ср', header : 'Получение ресурсов', text: 'Пример двух стандартных способов загрузки удаленных ресурсов и один способ использования сервисного рабочего как промежуточного прокси.', link : '/general-usage/fetching-remote/(intro//aux:demo)'},
	{color : '#a00100', mark : 'Пр', header : 'Реальные блок-схемы', text: 'Пример изучения работы сервисных рабочих через отображение потоковых диаграм процесса сервисного рабочего, и логирование на экране действий, выполненных веб приложением, запускающим этих сервисных рабочих.', link : ''},
	{color : '#21a01a', mark : 'Нв', header : 'Автономный откат', text: 'Пример отображения контента из кэша при отключенной сети (доступа в интернет). ', link : ''},
	{color : '#21a01a', mark : 'Нв', header : 'Автономный статус', text: 'Базовый пример кэширования критических ресурсов для использования вне сети и оповещение об этом пользователя.', link : ''},
	{color : '#21a01a', mark : 'Нв', header : 'Кэширование JSON', text: 'Пример получения <span>JSON</span> файла во время установки сервисного рабочего и добавление всех ресурсов в кэш, с немедленной активацией сервисного рабочего.', link : ''},
	{color : '#21a01a', mark : 'Нв', header : 'Локальная загрузка', text: 'Пример, позволяющий пользователю загрузить файл, сгенерированный на клиентской стороне.', link : ''},
	{color : '#e16800', mark : 'Ср', header : 'Виртуальный сервер', text: 'Пример работы сервисного рабочего в качестве удаленного сервера.', link : ''},
	{color : '#e16800', mark : 'Ср', header : 'API аналитики', text: 'Пример API, использующего логирование без вмешательства в слой пользовательского интерфейса, добавлением сервисного рабочего для накопления статистики использования, с приименением синхронного API для цикличной выгрузки накопленных данных.', link : ''},
	{color : '#e16800', mark : 'Ср', header : 'Балансировщик нагрузки', text: 'Пример сервисного рабочего, содержащего сетевую логику для динамического отбора наилутшего провайдера контента, в сооиветствии с серверной доступностью.', link : ''},
	{color : '#e16800', mark : 'Ср', header : 'Кэширование из ZIP', text: 'Пример кэширование контента из ZIP файла.', link : ''},
	{color : '#a00100', mark : 'Пр', header : 'Инжекция зависимостей', text: 'Пример сервисного рабочего для инжекции зависимостей, избегая жесткого кодирования зависимостей для компонетов высокого уровня.', link : ''},
	{color : '#a00100', mark : 'Пр', header : 'Отложенный запрос', text: 'Пример установки в очередь исходящего буфера  текущих запросов, когда устройство вне сети, для выполнения операций при востановлении связи. ', link : ''},
	{color : '#21a01a', mark : 'Нв', header : 'Кэш, затем сеть', text: 'Пример ответов сетевых запросов из кэша или из сети.', link : ''},
	{color : '#e16800', mark : 'Ср', header : 'Отображение из кэша', text: 'Пример, демонстрирующий рекомендацию из  <a target="_blank" href="https://wiki.mozilla.org/Gaia/Architecture_Proposal#Render_store">NGA</a>. Кэш, содержащий встраиваемый шаблон, отображающий его при удачных запросах, во избежании запроса шаблона к серверу. ', link : ''},

    ];
    
    ngAfterViewInit(){
        this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Сервисный рабочий. Сборник рецептов. Введение'});
	this.communicationService.sendResource({type : 'aux' });
    }


}