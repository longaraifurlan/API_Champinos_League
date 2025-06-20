export enum ContentType {
  // Tipos mais comuns
  JSON = "application/json",
  TEXT = "text/plain",
  HTML = "text/html",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",

  // Arquivos
  PDF = "application/pdf",
  ZIP = "application/zip",
  OCTET_STREAM = "application/octet-stream",

  // Imagens
  PNG = "image/png",
  JPEG = "image/jpeg",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WEBP = "image/webp",

  // Áudio e vídeo
  MP3 = "audio/mpeg",
  MP4 = "video/mp4",
  OGG_AUDIO = "audio/ogg",
  OGG_VIDEO = "video/ogg",
  WEBM = "video/webm",

  // Outros menos comuns
  XML = "application/xml",
  CSV = "text/csv",
  EVENT_STREAM = "text/event-stream"
}
