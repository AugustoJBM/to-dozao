package br.edu.ufape.todozao.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "task_dependencies")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskDependency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "created_at")
    private String createdAt;

    // A TAREFA QUE DEPENDE DE OUTRA

    @ManyToOne
    @JoinColumn(name = "task_id")
    private Task task;

    // A TAREFA DA QUAL A OUTRA DEPENDE

    @ManyToOne
    @JoinColumn(name = "depends_on_task_id")
    private Task dependsOn;
}
