export function upNotification(){
  Push.create("Alberto Ruiz", {
    body: "Concluiste tu jornada",
    icon: 'assets/image/call.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
  });
}