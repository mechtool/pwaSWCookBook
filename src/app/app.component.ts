import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {MenuButton, SideNavItemClass, CommunicateService} from "./services/app-service.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl : './app.component.html',
    changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
    
    public appTitle = '';
    
    constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef, @Inject(CommunicateService) private communicateService : CommunicateService, @Inject(Router) private router : Router, @Inject(Renderer2) private renderer : Renderer2){}
    public menuButtons :  MenuButton[] = [
	{text : 'Demo', icon : 'slideshow'},
	{text : 'index.js'},
	{text : 'service-worker.js'},
	{text : 'server.js'},
    ];
    public sideNavItems : SideNavItemClass[] = [
	new SideNavItemClass('Введение', 'level0', '#adadad','/introduction', '1'),
	new SideNavItemClass('Стратегии кэширования', 'level0', '#adadad','/caching-strategies',  '2', 'remove', [
		new SideNavItemClass('Сеть или кэш', 'level1', '#21a01a','/caching-strategies/network-cache/intro', 'Нв'),
		new SideNavItemClass('Только кэш', 'level1', '#21a01a','/caching-strategies/cache-only/intro', 'Нв'),
		new SideNavItemClass('Кэш и обновление', 'level1', '#21a01a','/caching-strategies/cache-update/intro', 'Нв'),
		new SideNavItemClass('Кэш, обновление и отображение', 'level1', '#e16800','/caching-strategies/cache-update-refresh/intro', 'Ср'),
		new SideNavItemClass('Встроенный резерв', 'level1', '#e16800','/caching-strategies/embedded-fallback/intro', 'Ср'),
	]),
	new SideNavItemClass('Сетевые уведомления', 'level0', '#adadad','/web-push', '3', 'remove',[
	    new SideNavItemClass('Отправка и запрос данных', 'level1', '#21a01a','/web-push/push-retrieve/intro', 'Нв'),
	    new SideNavItemClass('Отправка данных', 'level1', '#21a01a','/web-push/push-payload', 'Нв'),
	    new SideNavItemClass('Отправка с преднастройками', 'level1', '#21a01a','/web-push/push-rich', 'Нв'),
	    new SideNavItemClass('Простая отправка', 'level1', '#21a01a','/web-push/push-simple', 'Нв'),
	    new SideNavItemClass('Замещающее сообщение', 'level1', '#e16800','/web-push/push-tag', 'Ср'),
	    new SideNavItemClass('Квотирование', 'level1', '#a00100','/web-push/push-quota', 'Пр'),
	    new SideNavItemClass('Клиенты', 'level1', '#a00100','/web-push/push-clients', 'Пр'),
	    new SideNavItemClass('Подписка', 'level1', '#a00100','/web-push/push-subscription', 'Пр'),
	]),
	new SideNavItemClass('Общее использование', 'level0', '#adadad','/general-usage', '4', 'remove', [
	    new SideNavItemClass('Немедленный контроль', 'level1', '#21a01a','/general-usage/immediate-claim/intro', 'Нв'),
	    new SideNavItemClass('Передача сообщений', 'level1', '#21a01a','/general-usage/message-relay/intro', 'Нв'),
	    new SideNavItemClass('Получение ресурсов', 'level1', '#e16800','/general-usage/fetching-remote/intro', 'Ср'),
	    new SideNavItemClass('Реальные блок-схемы', 'level1', '#a00100','/general-usage/live-flowchart', 'Пр'),
	]),
	new SideNavItemClass('Автономность', 'level0', '#adadad','/offline', '5', 'remove', [
	    new SideNavItemClass('Автономный откат', 'level1', '#21a01a','/offline/offline-fallback', 'Нв'),
	    new SideNavItemClass('Автономный статус', 'level1', '#21a01a','/offline/offline-status', 'Нв'),
	    new SideNavItemClass('Кэширование JSON', 'level1', '#21a01a','/offline/JSON-cache', 'Нв'),
	]),
	new SideNavItemClass('Расширенная автономность', 'level0', '#adadad','/beyond-offline', '6', 'remove', [
	    new SideNavItemClass('Локальная загрузка', 'level1', '#21a01a','/beyond-offline/local-download', 'Нв'),
	    new SideNavItemClass('Виртуальный сервер', 'level1', '#e16800','/beyond-offline/virtual-server', 'Ср'),
	    new SideNavItemClass('API аналитики', 'level1', '#e16800','/beyond-offline/API-analytics', 'Ср'),
	    new SideNavItemClass('Баланстровщик загрузки', 'level1', '#e16800','/beyond-offline/load-balancer', 'Ср'),
	    new SideNavItemClass('Кэширование из ZIP', 'level1', '#e16800','/beyond-offline/cache-ZIP', 'Ср'),
	    new SideNavItemClass('Инжекция зависимостей', 'level1', '#a00100','/beyond-offline/dependency-injection', 'Пр'),
	    new SideNavItemClass('Отложенный запрос', 'level1', '#a00100','/beyond-offline/request-deferrer', 'Пр'),
	]),
	new SideNavItemClass('Производительность', 'level0', '#adadad','/performance', '7', 'remove', [
	    new SideNavItemClass('Кэширование', 'level1', '#21a01a','/performance/cache-network', 'Нв'),
	    new SideNavItemClass('Отображение из кэша', 'level1', '#e16800','/performance/render-store', 'Ср'),
	]),
    ];
    @ViewChild('sideNav', {read : MatSidenav}) private sideNav : MatSidenav;
    @ViewChild('buttonPanel', {read : ElementRef}) public buttonPanel : ElementRef;
    
    ngOnInit(){ //инициализация сервисов
		this.communicateService.communicateObservable.subscribe((data)=>{ //вызывается при загрузки компонента
			if(data.type == 'intro'){
				data.menuButtons.forEach((item, inx)=>{
					this.menuButtons[inx].link = item.link || false ;
					this.menuButtons[inx].disable = item.disable || false;
					item.text && (this.menuButtons[inx].text = item.text);
					this.menuButtons[inx].activeMenuButton = item.activeMenuButton || false;
				}) ;
			}
			else if(data.type == 'aux'){
				this.menuButtons.forEach((button, inx)=>{
					this.menuButtons[inx].activeMenuButton = data.index == inx || false;
				}) ;
			}
			this.appTitle = data.appTitle || this.appTitle;
			//запуск рендеринга
			this.changeDetector.detectChanges();
		});
    }
    
    onClickButtonMenu(){ //активация иконки вызова меню
         this.sideNav.toggle();
    }

    onClickSideNavItem($event){//навигация элементов выпадающего меню (слева)
        let target = $event.target,
	    oldTargets = $event.currentTarget.querySelectorAll('.itemBlock');
        //снять все старые классы
	oldTargets.forEach((t)=>{
	   t.classList.remove('active');
	});
	//установить новые
        while (true){
	    if(target.classList.contains('itemBlock')){
		target.classList.add('active');
	    }
	    if(target.classList.contains('block0')){
	        let top = target.querySelector('.itemBlock0');
	        !top.classList.contains('active') && top.classList.add('active');
	        return;
	    }
            target = target.parentElement;
	}
    }
    onClickToolBarMenu(link){ //активация кнопки панели кнопок(сверху справа)
		this.router.navigateByUrl(link) ;
    }

}
