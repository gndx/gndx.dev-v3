import requests
from xml.dom import minidom, Node
from jinja2 import Environment, FileSystemLoader, select_autoescape
env = Environment(loader=FileSystemLoader('helpers/templates'))

rss_feed = "https://www.youtube.com/feeds/videos.xml?channel_id=UC8KCb358oioQMcJ5pUfs8UQ"

feed = requests.get(rss_feed)
root = minidom.parseString(feed.text)

def innerText(self, sep=''):
    t = ""
    for curNode in self.childNodes:
        if (curNode.nodeType == Node.TEXT_NODE):
            t += sep + curNode.nodeValue
        elif (curNode.nodeType == Node.ELEMENT_NODE):
            t += sep + curNode.innerText(sep=sep)
    return t


videos = []
for child in root.getElementsByTagName('entry'):
    media = child.getElementsByTagName("media:group")[0]
    video = {
        'id': innerText(child.getElementsByTagName('id')[0]),
        'published': innerText(child.getElementsByTagName('published')[0]),
        'url': child.getElementsByTagName('link')[0].getAttribute('href'),
        'title': innerText(media.getElementsByTagName('media:title')[0]),
        'description': innerText(media.getElementsByTagName('media:description')[0]),
        'thumbnail': media.getElementsByTagName('media:thumbnail')[0].getAttribute('url'),
    }

    video['description'] = video['description'].split('\n')[0]
    videos.append(video)


template = env.get_template('youtubeData.ts.jinja')

with open("src/data/youtubeData.ts", "w") as data:
    data.write(template.render(videos=videos))