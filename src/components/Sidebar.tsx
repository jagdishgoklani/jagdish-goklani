"use client";

import { useState } from "react";
import { navigationStructure, NavItem } from "@/data/navigation";
import "./Sidebar.css";

interface SidebarProps {
  onSelect: (sectionId: string, subsectionId?: string) => void;
  onHome?: () => void;
  activeSection?: string;
  activeSubsection?: string;
}

export default function Sidebar({
  onSelect,
  onHome,
  activeSection,
  activeSubsection,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleItemClick = (sectionId: string, subsectionId?: string) => {
    onSelect(sectionId, subsectionId);
    setIsOpen(false);
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasSubsections = item.subsections && item.subsections.length > 0;
    const isExpanded = expandedSections.has(item.id);

    return (
      <div key={item.id} className={`nav-item level-${level}`}>
        <div className="nav-item-content">
          <button
            className={`nav-button ${
              activeSection === item.id ? "active" : ""
            } ${hasSubsections ? "expandable" : ""}`}
            onClick={() => {
              if (hasSubsections) {
                toggleSection(item.id);
              } else {
                handleItemClick(item.id);
              }
            }}
          >
            {hasSubsections && (
              <span className={`expand-icon ${isExpanded ? "expanded" : ""}`}>
                ▶
              </span>
            )}
            <span className="nav-text">{item.title}</span>
          </button>
        </div>

        {hasSubsections && isExpanded && item.subsections && (
          <div className="subsections">
            {item.subsections.map((subsection) => (
              <button
                key={subsection.id}
                className={`nav-button subsection-button ${
                  activeSubsection === subsection.id ? "active" : ""
                }`}
                onClick={() => handleItemClick(item.id, subsection.id)}
              >
                <span className="nav-text">{subsection.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Hamburger Menu Button - 3 Lines */}
      <button
        className="hamburger-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        title="मेनू खोलें"
      >
        <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">जग ग्वालियरी</h2>
          <button
            className="close-button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        <div className="sidebar-content">
          {/* Home Button */}
          <button
            className="home-button"
            onClick={() => {
              if (onHome) onHome();
              setIsOpen(false);
            }}
            title="होम पेज"
          >
            <span className="home-icon">🏠</span>
            <span className="home-text">होम</span>
          </button>

          {navigationStructure.map((item) => renderNavItem(item))}
        </div>
      </nav>
    </>
  );
}
