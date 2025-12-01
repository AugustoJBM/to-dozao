package br.edu.ufape.todozao.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "task_tags")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "created_at")
    private String createdAt;

    // RELACIONAMENTOS

    @ManyToOne
    @JoinColumn(name = "task_id")
    private Task task;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;
}
