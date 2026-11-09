<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Thorium-230&quot;}]"></div>

# Thorium-230

- **generic name:** Thorium-230
- **DrugBank:** none · **PubChem:** [CID 61723](https://pubchem.ncbi.nlm.nih.gov/compound/61723)
- **groups:** not captured

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-08 23:22 | 3:18 | 0/0/0 | 0/0/0 | 0/0/0 | 223,468/3,581 | einfracz / qwen3.8-27b | 12 | 10/2 | 4/8 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 16 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blue_1981 | irrelevant | 0 | 0 | The paper is a structural histology study using Thorotrast (a different thorium compound) as a tracer to visualize spleen macrophages, and it does not report quantitative toxicokinetic parameters for thorium-230. |
| popPK | Böhnke_2024 | irrelevant | 0 | 0 | The paper focuses on thorium-227, not thorium-230, which is the specified target substance. |
| popPK | Campos_2004 | irrelevant | 0 | 0 | The paper measures thoron daughter (212Pb) air concentrations and calculates radiation doses, but does not report toxicokinetic parameters for the subject substance Thorium-230. |
| popPK | Doksanská_2025 | irrelevant | 0 | 0 | The paper measures radionuclide concentrations in environmental water treatment samples (NORM) and does not report any toxicokinetic parameters for humans or animals. |
| popPK | Doksanská_2026 | irrelevant | 0 | 0 | The paper focuses on the radioactive equilibrium of 230Th in industrial NORM samples and analytical estimation equations, containing no toxicokinetic parameters for a biological subject. |
| popPK | GREISMAN_1965 | irrelevant | 0 | 0 | The paper focuses on endotoxin pyrogenic tolerance mechanisms, and thorotrast (thorium dioxide) is only mentioned as a RES-blocking agent, not as the subject of toxicokinetic study. |
| popPK | Geser_2025 | irrelevant | 0 | 0 | The paper focuses on radiation detection efficiency and clearance limits for thorium-232 waste, not the toxicokinetics (biological uptake, distribution, or elimination) of thorium-230. |
| popPK | Haller_1976 | irrelevant | 0 | 0 | The paper studies influenza A virus infection in mice and mentions thorium dioxide (general thorium, not specifically Th-230) only as a co-exposure to test macrophage function, reporting no kinetic parameters for thorium. |
| popPK | Hammer_2020 | irrelevant | 0 | 0 | The paper investigates thorium-227 as a therapeutic radionuclide, not thorium-230, and contains no kinetic parameters for thorium-230. |
| popPK | Hosea_1981 | irrelevant | 0 | 0 | The provided evidence contains no scientific content, only software metadata from the GROBID extraction tool. |
| popPK | James_1975 | irrelevant | 0 | 0 | The paper studies deposition and clearance of radon daughters (Pb-212, Bi-212) in pig lungs, not Thorium-230. |
| popPK | Kalkwarf_1984 | relevant | 10 | 2 | The paper provides a lung-clearance classification (100% Class Y, half-time &gt;100 days) for thorium-230 based on dissolution rates in simulated lung fluid, which is a quantitative kinetic parameter for the substance. |
| popPK | Kreh_2001 | irrelevant | 0 | 0 | The paper describes gamma ray spectrometry methods for measuring thorium contamination in materials and work areas, but contains no toxicokinetic parameters (e.g., half-lives, clearance, distribution) for the substance. |
| popPK | Minchom_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for thorium-227 (Th-227), not the target substance thorium-230 (Th-230). |
| popPK | Pillai_1994 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for lead-212 (212Pb), a decay product of thoron (220Rn), not for thorium-230 (230Th). |
| popPK | Taves_1968 | irrelevant | 0 | 0 | The paper uses a thorium compound as an analytical reagent for measuring fluoride, not as the subject of toxicokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthorium_230%5D&body=Drug%3A%20thorium_230%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_thorium_230/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
