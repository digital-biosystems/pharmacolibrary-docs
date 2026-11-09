<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Thorium-228&quot;}]"></div>

# Thorium-228

- **generic name:** Thorium-228
- **DrugBank:** none · **PubChem:** [CID 61724](https://pubchem.ncbi.nlm.nih.gov/compound/61724)
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
| 2026-11-08 23:19 | 4:02 | 0/0/0 | 0/0/0 | 0/0/0 | 271,960/5,684 | einfracz / qwen3.8-27b | 14 | 12/2 | 4/10 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 18 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blue_1981 | irrelevant | 0 | 0 | The paper is a structural electron microscopy study of the spleen using Thorotrast as a label, and reports no quantitative toxicokinetic parameters (half-lives, clearance rates, etc.) for thorium-228. |
| popPK | Böhnke_2024 | irrelevant | 2 | 2 | The paper focuses on a therapeutic PSMA-targeted conjugate labeled with thorium-227, not the toxicokinetics of free thorium-228; it does not report specific kinetic parameters (half-life, rate constants, or partition coefficients) for the substance thorium_228 itself. |
| popPK | Campos_2004 | irrelevant | 0 | 0 | The paper reports exposure concentrations and radiation doses for thorium-212 lead (212Pb), a decay product of thoron, but does not contain toxicokinetic parameters for thorium-228 itself. |
| popPK | Croymans_2017 | irrelevant | 0 | 0 | The paper reports activity concentrations of Thorium-228 in industrial slag materials, not toxicokinetic parameters in biological systems. |
| popPK | Doksanská_2025 | irrelevant | 0 | 0 | The paper reports environmental activity concentrations of thorium isotopes in water treatment plant samples, not toxicokinetic parameters in biological subjects. |
| popPK | Doksanská_2026 | irrelevant | 0 | 0 | The paper analyzes radioactive equilibrium and activity ratios in environmental samples (NORM) and does not report any toxicokinetic parameters for thorium-228 in biological systems. |
| popPK | GREISMAN_1965 | irrelevant | 0 | 0 | The paper studies endotoxin tolerance; thorotrast (thorium dioxide) is used solely as a RES blocker agent, and no kinetic parameters for thorium are reported. |
| popPK | Geser_2025 | irrelevant | 0 | 0 | The paper focuses on the calibration of clearance monitors and the measurement of radioactive waste (thoriated tungsten electrodes), providing no toxicokinetic parameters such as half-life, clearance rates, or tissue distribution for thorium in biological systems. |
| popPK | Haller_1976 | irrelevant | 0 | 0 | The paper uses thorium dioxide (thorium-228) only as an immunosuppressive agent to study viral infection in mice, and does not report any toxicokinetic parameters for thorium-228 itself. |
| popPK | Hammer_2020 | relevant | 9 | 4 | The paper reports quantitative biodistribution data (tissue uptake in % ID/g) for thorium-227 in mouse xenograft models, providing kinetic parameters for the subject nuclide, although specific numerical values are primarily contained in figures (Fig. 4) not fully transcribed here. |
| popPK | Hosea_1981 | irrelevant | 0 | 0 | The provided evidence contains only software metadata (GROBID) and no scientific content, kinetic parameters, or species information. |
| popPK | James_1975 | irrelevant | 0 | 0 | The paper measures deposition of radon daughters (specifically mentioning thorium-B, which is Th-212, not Th-228) in pig lungs and does not provide kinetic parameters for thorium-228. |
| popPK | Kreh_2001 | irrelevant | 0 | 0 | The paper describes a gamma ray spectrometry method for measuring thorium activity in industrial materials and does not report any toxicokinetic parameters. |
| popPK | Minchom_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for thorium-227, but the subject substance is thorium-228. |
| popPK | Pillai_1994 | irrelevant | 0 | 0 | The paper reports kinetic parameters for lead-212 (212Pb), a decay product of thoron, not for thorium-228. |
| popPK | Taves_1968 | irrelevant | 0 | 0 | The paper uses thorium as an analytical reagent (Morin-thorium complex) for fluoride determination, not as the subject of toxicokinetic study. |
| popPK | Toussaint_2018 | irrelevant | 0 | 0 | The paper is about airway clearance techniques in neuromuscular diseases (NMDs), and "228Th" in the title is a typo or misinterpretation of "228th ENMC" (European Neurological Centre) workshop, not the isotope Thorium-228. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthorium_228%5D&body=Drug%3A%20thorium_228%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_thorium_228/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
