export function pruebaNotification(){
  Push.create("Alberto Ruiz", {
    body: "Se ha notificado al padre",
    icon: 'assets/image/call.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
  });
}