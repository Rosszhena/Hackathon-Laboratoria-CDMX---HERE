export function emergencyCall(){
  Push.create("Emergencia", {
    body: "Llamando...",
    icon: 'assets/image/call.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
  });
}