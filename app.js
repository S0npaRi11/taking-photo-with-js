const video = document.querySelector('#video')
const btn = document.querySelector('#btn')
const canvas =  document.querySelector('#canvas')

if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true })
    .then(stream => {
        video.srcObject = stream
    })
    .catch(error => {
        console.log('An error occured while accessing webcam.')
    })
}

btn.addEventListener('click', () => {
    // get intrinsic width and height of the video element
    const width = video.videoWidth, height = video.videoHeight

    const context = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height

    context.drawImage(video, 0, 0, width, height)

    const imgURL = canvas.toDataURL('image/png')

    document.querySelector('#dl-btn').href = imgURL

    document.querySelector('#dl-btn').click()

})
