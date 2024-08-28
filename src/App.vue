<template>
    <div id="app" class="bg-yellow-50 min-h-screen text-center text-black">
        <div class="p-6 m-auto h-screen bg-yellow-50 bg-blend-hard-light w-full flex"
            :style="{ backgroundImage: `url(${wave9})` }">
            <div class="flex flex-col items-center justify-center w-full">
                <header class="mb-1">
                    <img :src="profilePicture" alt="Profile Picture"
                        class="bg-slate-200 rounded-full object-cover w-44 h-44 mx-auto mb-4 drop-shadow-[2px_4px_3px_#0000009c]" />
                    <h1 class="text-4xl font-bold">{{ name }}</h1>
                    <!-- <h2 class="text-2xl">{{ title }}</h2> -->
                    <!-- <p class="mt-2 text-gray-300">{{ intro }}</p> -->
                    <div class="max-w-4xl m-auto p-2 mt-2">
                        <p class="text-xl">I'm a Full Stack Software Engineer with a strong attention to detail
                            and a love for collaboration.</p>
                        <p class="mt-2 text-lg">Beyond engineering, I run an educational YouTube channel where I
                            simplify complex mechanics and strategies to help Dota 2 players improve. When I'm not
                            immersed in
                            technology,
                            you
                            can find me riding my bike and visiting local shops. Hit me up if you want to chat or work
                            together :)</p>
                    </div>
                </header>
                <section id="contact" class="pt-4 rounded-md flex items-center justify-center">
                    <!-- <h3 class="text-xl font-semibold">Contact Me</h3> -->
                    <div class="flex gap-10 justify-center items-center">
                        <a :href="'mailto:' + email"><img src="@/assets/email.svg" alt="Email icon" class="w-14"></a>
                        <a href="https://www.linkedin.com/in/adrian-rodriguez-dev/" target="_blank"><img
                                src="@/assets/linkedin.svg" alt="LinkedIn icon" class="w-10"></a>
                        <a href="https://github.com/adrianistaken" target="_blank"><img src="@/assets/github.svg"
                                alt="GitHub icon" class="w-10"></a>
                    </div>
                    <!-- <p class="mt-2">Email: <a :href="'mailto:' + email" class="text-blue-600">{{ email }}</a></p> -->
                </section>
            </div>
        </div>

        <hr class="mb-10">

        <div class="p-6 m-auto text-black bg-top bg-yellow-50 bg-blend-difference"
            :style="{ backgroundImage: `url(${wave5})` }">
            <h1 class="mb-6 text-3xl">Things I've worked on</h1>

            <!-- Resound -->
            <!-- <section class="mb-8 py-8 rounded-md max-w-5xl m-auto bg-noise bg-opacity-90"> -->
            <section class="mb-8 py-8 rounded-md max-w-5xl m-auto">
                <div class="flex items-center justify-center flex-col">
                    <!-- Project intro -->
                    <div class="flex items-center justify-center">
                        <img :src="projects[0].logo" alt="Company logo" class="w-20" />
                        <div class="text-left ml-6">
                            <h3 class="text-xl font-semibold">{{ projects[0].title }}</h3>
                            <p class="mt-1">{{ projects[0].headline }}</p>
                        </div>
                    </div>
                    <div class="rounded-md px-4 mx-auto max-w-xl">
                        <p class="my-4">{{ projects[0].description }}</p>
                    </div>
                    <!-- Project content -->
                    <video v-if="projects[0].video" :src="projects[0].video" autoplay muted loop
                        class="mx-auto w-full max-w-xl rounded-md mt-2 mb-2 drop-shadow-[2px_4px_3px_#0000009c]"></video>
                    <div class="rounded-md m-6">
                        <h3 class="text-xl font-bold mb-3">Tech Stack</h3>
                        <p class="text-lg">JavaScript, Python, Django, Vue, HTML, CSS, Tailwind, MySQL, Docker,
                            Kubernetes, GCP</p>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Projects</h3>
                    <div class="rounded-md mb-3 max-w-xl text-xl">
                        <div class="text-lg">
                            <p>
                                <strong>Custom Audio Waveform Experience</strong>
                            </p>
                            <p>Developed a custom audio waveform editor
                                using <strong class="text-green-500">Vue</strong>, <strong
                                    class="text-yellow-400">JavaScript</strong>, and open source libraries.
                                This tool significantly reduced manual editing time for users by allowing them to easily
                                edit AI-detected disfluencies.</p>
                        </div>
                    </div>
                    <div class="rounded-md mt-4 mb-2 max-w-xl text-xl">
                        <div class="text-lg">
                            <h3><strong>Full Page Editor</strong></h3>
                            <p>Designed and developed a seamless multi-track editing
                                experience, enhancing
                                the usability and functionality of the platform. Collaborated extensively with designers
                                to
                                ensure a superior user experience for both current and future features.</p>
                        </div>
                    </div>


                </div>
            </section>

            <!-- Resonate Recordings -->
            <section class="mb-8 py-8 rounded-md max-w-5xl m-auto">
                <div class="flex items-center justify-center flex-col">
                    <!-- Project intro -->
                    <div class="flex items-center justify-center">
                        <img :src="projects[1].logo" alt="Company logo" class="w-20" />
                        <div class="text-left ml-6">
                            <h3 class="text-xl font-semibold">{{ projects[1].title }}</h3>
                            <p class="mt-1">{{ projects[1].headline }}</p>
                        </div>
                    </div>
                    <div class="rounded-md px-4 mx-auto max-w-xl">
                        <p class="my-4">{{ projects[1].description }}</p>
                    </div>
                    <!-- Project content -->
                    <video v-if="projects[1].video" :src="projects[1].video" autoplay muted loop
                        class="mx-auto w-full max-w-xl rounded-md mt-2 mb-2 drop-shadow-[2px_4px_3px_#0000009c]"></video>
                    <div class="rounded-md m-6">
                        <h3 class="text-xl font-bold mb-3">Tech Stack</h3>
                        <p class="text-lg">JavaScript, Vue, PHP, Laravel, HTML, CSS, Tailwind, MySQL, Docker, GCP</p>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Projects</h3>
                    <div class="rounded-md mb-3 max-w-xl text-xl">
                        <div class="text-lg">
                            <p>
                                <strong>Enhanced Security Practices</strong>
                            </p>
                            <p>Implemented robust security measures,
                                including a comprehensive password reset flow within a <strong
                                    class="text-[#4a76ac]">PHP</strong> and
                                <strong class="text-[#f8430a]">Laravel</strong>
                                framework, to protect sensitive user data for thousands of users.
                            </p>
                        </div>
                    </div>
                    <div class="rounded-md mt-4 mb-2 max-w-xl text-xl">
                        <div class="text-lg">
                            <p>
                                <strong>Automated Email Workflows</strong>
                            </p>
                            <p>Refactored and automated transactional and
                                marketing email flows using <strong class="text-blue-600">Google Cloud
                                    Scheduler</strong>
                                and
                                <strong class="text-[#ac5a00]">MySQL</strong> user data.
                                This improved customer communication and reduced churn by keeping
                                users informed about important updates.
                            </p>
                        </div>
                    </div>


                </div>
            </section>
        </div>

        <hr class="mb-10">

        <div class="p-6 m-auto text-black bg-top bg-yellow-50 bg-blend-hard-light"
            :style="{ backgroundImage: `url(${wave8})` }">
            <!-- About -->
            <section id="about" class="mb-8 p-4 rounded-md text-black text-center flex flex-col items-center">
                <h3 class="text-3xl mb-6 font-semibold">More about me</h3>
                <p class="mt-2"></p>
                <img src="@/assets/me-minimized.jpg" alt="Me on a couch"
                    class="w-96 mb-8 rounded-md drop-shadow-[2px_4px_3px_#0000009c]" />
                <div class="text-lg max-w-2xl">
                    <h4 class="font-bold">Active</h4>
                    <p class="mb-2">I love going on bike rides, hikes, and runs, all while exploring the area around
                        me. </p>
                    <h4 class="font-bold">Games</h4>
                    <p class="mb-2">I'm big into gaming. My favorites right now are Dota 2 (I could
                        talk about it
                        for days), Slay the Spire, Stardew Valley, and PUBG. I used to play Dota 2 competitively, but
                        nowadays I play all games pretty casually. It's a great time to connect with friends.</p>
                    <h4 class="font-bold">Animals</h4>
                    <p class="mb-2">I'm a huge animal lover - I've had animals all through growing up. My family mostly
                        had dogs, but
                        other animals like cats, birds, fish, hamsters, rats, ferrets, bunnies. Yeah, we've had a lot of
                        different furry family members.</p>
                    <h4 class="font-bold">YouTube</h4>
                    <p class="mb-2">As mentioned above, I have an educational YouTube channel which has become a big
                        part of my life. The focus is to education and help Dota 2 players improve. I do everything from
                        researching topics, writing scripts, recording, editing, crafting thumbnails, responding to
                        viewers and trying to keep engagement up. It's a BIG process, but one that I've come to fully
                        love and be so thankful for.</p>
                    <p>I've gotten to interact and become friends with so many awesome
                        fans and public figures that I look up to, which is a very surreal experience. This is another
                        topic I could go on about forever, so if you have any interest in this, or especially if you
                        have a YouTube channel of your own, let's talk about it! :)</p>
                </div>
            </section>

            <!-- Contact -->
            <section id="contact-bottom" class="mb-8 p-4 rounded-md text-black">
                <h3 class="text-3xl mb-6 font-semibold">Important Links</h3>
                <div class="flex gap-5 justify-center items-center">
                    <a :href="'mailto:' + email"><img src="@/assets/email.svg" alt="Email icon" class="w-10"></a>
                    <a href="https://www.linkedin.com/in/adrian-rodriguez-dev/" target="_blank"><img
                            src="@/assets/linkedin.svg" alt="LinkedIn icon" class="w-7"></a>
                    <a href="https://github.com/adrianistaken" target="_blank"><img src="@/assets/github.svg"
                            alt="GitHub icon" class="w-8"></a>
                    <a href="https://www.youtube.com/@zzadrianzz" target="_blank"><img src="@/assets/youtube.svg"
                            alt="YouTube icon" class="w-9"></a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import profilePicture from '@/assets/adrian-photo.jpg'
import resoundLogo from '@/assets/resound-logo.png'
import resonateLogo from '@/assets/resonate-logo.png'
import resoundDemo from '@/assets/resound-demo.mov'
import resonateDemo from '@/assets/resonate-demo.mov'
import wave9 from '@/assets/wave9.png'
import wave5 from '@/assets/wave5.png'
import wave8 from '@/assets/wave8.png'

export default {
    data() {
        return {
            profilePicture,
            name: 'Adrian Rodriguez',
            title: 'Software Engineer',
            intro: `I'm a Full Stack Software Engineer with a strong attention to detail and a love for collaboration. Beyond engineering, I run an educational YouTube channel with 25k subscribers that focuses on helping Dota 2 Dota 2 players improve and achieve their goals. When I'm not immersed in technology, you can find me exploring the town and visiting local shops. Hit me up if you want to chat or work together :)`,
            email: 'adrian.rodriguez.dev@gmail.com',
            projects: [
                {
                    logo: resoundLogo,
                    title: 'Resound - Software Engineer',
                    headline: 'Artificial Intelligence podcast editing tool',
                    video: resoundDemo,
                    description: 'Resound automates podcast editing with AI. As a Software Engineer I collaborated closely with engineers and designers to build seamless features across the whole stack.',
                },
                {
                    logo: resonateLogo,
                    title: 'Resonate Recordings - Software Engineer',
                    headline: 'Podcast editing services and production platform',
                    video: resonateDemo,
                    description: 'Resonate Recordings is a podcast editing service and full production platform aiming to make podcasting easier. My focus was to optimize and improve the platform experience for podcasters and their teams.',
                }
            ],
            wave9,
            wave5,
            wave8,
        };
    }
};
</script>

<style>
@import 'tailwindcss/tailwind.css';
</style>
