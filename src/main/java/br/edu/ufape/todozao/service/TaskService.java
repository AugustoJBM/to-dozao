package br.edu.ufape.todozao.service;

import br.edu.ufape.todozao.dto.TaskCreateDTO;
import br.edu.ufape.todozao.model.Project;
import br.edu.ufape.todozao.model.Task;
import br.edu.ufape.todozao.model.TaskStatus;
import br.edu.ufape.todozao.model.User;
import br.edu.ufape.todozao.repository.ProjectRepository;
import br.edu.ufape.todozao.repository.TaskRepository;
import br.edu.ufape.todozao.repository.TaskStatusRepository;
import br.edu.ufape.todozao.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;
    private final TaskStatusRepository taskStatusRepository;

    public TaskService(TaskRepository taskRepository,
                       UserRepository userRepository,
                       ProjectRepository projectRepository,
                       TaskStatusRepository taskStatusRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
        this.taskStatusRepository = taskStatusRepository;
    }

    // ✅ CASO DE USO
    public Task criarTask(TaskCreateDTO dto) {

        // 1️⃣ validar invariantes cedo
        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        TaskStatus status = taskStatusRepository.findById(dto.getTaskStatusId())
                .orElseThrow(() -> new RuntimeException("Status inválido"));

        Project project = null;
        if (dto.getProjectId() != null) {
            project = projectRepository.findById(dto.getProjectId())
                    .orElseThrow(() -> new RuntimeException("Projeto não encontrado"));
        }

        // 2️⃣ idempotência simples
        if (taskRepository.existsByTitleAndUserId(dto.getTitle(), user.getId())) {
            throw new RuntimeException("Task duplicada para esse usuário");
        }

        Task task = Task.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .color(dto.getColor())
                .priority(dto.getPriority())
                .user(user)
                .project(project)
                .taskStatus(status)
                .build();

        return taskRepository.save(task);
    }
}
