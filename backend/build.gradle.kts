
plugins {
    kotlin("jvm") version "1.9.0"
    application
}

application {
    mainClass.set("com.example.ApplicationKt")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core:2.3.4")
    implementation("io.ktor:ktor-server-netty:2.3.4")
    implementation("io.ktor:ktor-serialization-kotlinx-json:2.3.4")
    testImplementation(kotlin("test"))
}
