package com.example.demo.controller;

import java.util.Base64;
import java.util.Date;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {

  private final String SECRET_KEY = "mysecretkey12345"; // secret for signing JWT

  @GetMapping("/authenticate")
  public ResponseEntity<?> authenticate(HttpServletRequest request) {
    // Get Authorization header
    String authHeader = request.getHeader("Authorization");
    if (authHeader == null || !authHeader.startsWith("Basic ")) {
      return ResponseEntity.status(401).body("Missing or invalid Authorization header");
    }

    // Decode Base64 username:password
    String base64Credentials = authHeader.substring("Basic ".length());
    byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
    String credentials = new String(credDecoded);
    String[] values = credentials.split(":", 2);

    String username = values[0];
    String password = values[1];

    // (You can add actual username/password validation here if you want)
    if (!"user".equals(username) || !"pwd".equals(password)) {
      return ResponseEntity.status(401).body("Invalid credentials");
    }

    // Generate JWT token
    String token = Jwts.builder()
        .setSubject(username)
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis() + 600000)) // expires in 10 mins
        .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
        .compact();

    return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
  }
}
