<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;govorestat&quot;}]"></div>

# govorestat

- **generic name:** govorestat
- **ATC codes:** `A16AX24`
- **DrugBank:** [DB16707](https://go.drugbank.com/drugs/DB16707) · **PubChem:** not captured
- **molar mass:** 425.4 g/mol (C17H10F3N3O3S2) — DrugBank
- **groups:** investigational

## About

Govorestat was developed as a treatment for galactosemia. It remains investigational; its marketing authorisation application in the European Union was withdrawn, so it is not approved there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123481136](https://www.wikidata.org/wiki/Q123481136) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:09 | 3:37 | 0/0/0 | 0/0/0 | 0/0/0 | 120,422/4,668 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 2/9 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=govorestat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: AKR1B1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 222 matched, 36 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Perfetti_2024.pdf` | Perfetti R et al., Safety, Pharmacokinetics, and Pharmacod…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2495](https://doi.org/10.1002/jcph.2495) | [38988185](https://pubmed.ncbi.nlm.nih.gov/38988185) | The paper describes a population PK model for govorestat in humans, but specific numeric parameter values (CL, V, Q, ka) are not present in the provided text, only the half-life (~10 h) and model structure. |

<sub>queue written 2026-10-05T11:07:19.101143+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abulfathi_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for meropenem, not govorestat. |
| PD | Abulfathi_2021 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for meropenem, not govorestat, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Aljanabi_2026 | irrelevant | 0 | 0 | The paper describes a computational web server for retrosynthesis and ADMET prediction, not a pharmacokinetic study of govorestat. |
| PD | Aljanabi_2026 | not_relevant | 0 | 0 | The paper describes a computational tool for retrosynthesis and ADMET prediction and does not report any pharmacodynamic or exposure-response data for govorestat. |
| PD | Bailey_2025 | not_relevant | 2 | 1 | The study reports group-level mean changes and a Pearson correlation between galactitol levels and clinical outcomes, but does not provide individual concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for govorestat. |
| popPK | Balaguer-Lluna_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of inavolisib and ipatasertib, not govorestat. |
| popPK | Bauer_2025 | irrelevant | 0 | 0 | The paper is a software tutorial on modeling delays in NONMEM and does not report pharmacokinetic parameters for govorestat. |
| PD | Bauer_2025 | not_relevant | 0 | 0 | The paper is a software tutorial on modeling delays in NONMEM and does not report specific pharmacodynamic data or parameters for govorestat. |
| popPK | Bekker_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fosfomycin and flomoxef, not govorestat. |
| PD | Bekker_2026 | not_relevant | 0 | 0 | The paper reports PK and safety for fosfomycin and flomoxef, not govorestat, and does not provide PD parameters. |
| popPK | Boccarella_2026 | irrelevant | 0 | 0 | The paper is about bacterial evolution and antibiotic resistance in E. coli, not the pharmacokinetics of govorestat. |
| PD | Boccarella_2026 | not_relevant | 0 | 0 | The paper discusses bacterial persistence and antibiotic resistance evolution in E. coli, not the pharmacodynamics of the drug govorestat. |
| popPK | Boşnak_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levofloxacin, not govorestat. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of KJ103 (an IgG-degrading enzyme), not govorestat. |
| PGx | Cortese_2025 | not_relevant | 0 | 0 | The paper describes the genotype-phenotype spectrum of Charcot-Marie-Tooth disease and sorbitol levels as a biomarker, but does not report pharmacokinetic or pharmacodynamic effects of govorestat modified by genetic variants. |
| popPK | Darwish_2024 | irrelevant | 0 | 0 | The paper focuses on trofinetide, not govorestat, and reports exposure-response modeling for trofinetide. |
| popPK | Darwish_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetics for trofinetide, not govorestat. |
| PD | Darwish_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (popPK) modeling and exposure simulations for trofinetide, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Darwish_2025_2 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for trofinetide, not govorestat. |
| PD | Darwish_2025_2 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (popPK) modeling for trofinetide and does not report any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Fu_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for teicoplanin, not govorestat. |
| PD | Fu_2022 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PopPK) of teicoplanin, not govorestat, and does not report any pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Gaurav_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of favezelimab, not govorestat. |
| PD | Gaurav_2026 | not_relevant | 0 | 0 | The paper analyzes favezelimab, not govorestat. |
| popPK | Gieselmann_2025 | irrelevant | 0 | 0 | The paper describes the characterization of an HIV-1 broadly neutralizing antibody (007) and its structural/functional properties, with no mention of govorestat or its pharmacokinetics. |
| PD | Gieselmann_2025 | not_relevant | 0 | 0 | The paper characterizes a broadly neutralizing antibody (007) against HIV-1, not the drug govorestat, and does not report pharmacodynamic parameters for govorestat. |
| popPK | Gieselmann_2026 | irrelevant | 0 | 0 | The paper describes an HIV-1 broadly neutralizing antibody and its structural/functional characterization, with no mention of govorestat or any pharmacokinetic parameters. |
| PD | Gieselmann_2026 | not_relevant | 0 | 0 | The paper characterizes an HIV-1 broadly neutralizing antibody (007) and does not mention the drug govorestat or report any pharmacodynamic parameters for it. |
| popPK | Han_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ainuovirine, not govorestat. |
| PD | Han_2024 | not_relevant | 0 | 0 | The paper analyzes Ainuovirine (ANV), not govorestat. |
| popPK | Hansel_2024 | irrelevant | 0 | 0 | The paper is a systematic review of beta-lactam antimicrobials and does not study govorestat. |
| PD | Hansel_2024 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) covariates for beta-lactams and does not report any pharmacodynamic (PD) or exposure-response data for govorestat. |
| popPK | He_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetics for oral paclitaxel, not govorestat. |
| PD | He_2022 | not_relevant | 0 | 0 | The paper describes population pharmacokinetics (PK) for oral paclitaxel, not govorestat, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Hoglund_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ivermectin, not govorestat. |
| PD | Hoglund_2026 | not_relevant | 0 | 0 | not captured |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for clesrovimab, not govorestat. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) for clesrovimab, not govorestat, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Maroselli_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of imatinib, not govorestat. |
| PD | Maroselli_2025 | not_relevant | 0 | 0 | The paper analyzes the impact of BMI on imatinib pharmacokinetics (exposure), not pharmacodynamics (effect), and does not report any PD parameters or exposure-response relationships. |
| popPK | Mu_2022 | irrelevant | 0 | 0 | The paper describes a population pharmacokinetic model for a CAR T-cell therapy (CT103A), not the drug govorestat. |
| PD | Mu_2022 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PopPK) model for a CAR T-cell therapy (CT103A), not govorestat, and does not report a pharmacodynamic (PD) or exposure-response model with numeric PD parameters. |
| popPK | Parra-Guillen_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the oncolytic virus V937, not the drug govorestat. |
| popPK | Perfetti_2024 | relevant | 10 | 2 | The paper describes a population PK model for govorestat in humans, but specific numeric parameter values (CL, V, Q, ka) are not present in the provided text, only the half-life (~10 h) and model structure. |
| popPK | Pokorná_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meropenem, not govorestat. |
| PD | Pokorná_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of meropenem, not govorestat, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Scarpignato_2022 | irrelevant | 0 | 0 | The paper reports a population pharmacokinetic model for vonoprazan, not govorestat. |
| PD | Scarpignato_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for vonoprazan, not govorestat, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Stäubli_2026 | irrelevant | 0 | 0 | The paper investigates visual evoked potentials in CRB1 retinopathy and does not mention govorestat or any pharmacokinetic parameters. |
| PD | Stäubli_2026 | not_relevant | 0 | 0 | The paper investigates visual evoked potentials in CRB1 retinopathy and does not mention govorestat or any pharmacodynamic exposure-response relationship. |
| popPK | Vaddady_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for quizartinib, not govorestat. |
| PD | Vaddady_2024 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PK) analysis of quizartinib, not govorestat, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of serplulimab, not govorestat. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of serplulimab (not govorestat) and explicitly states that exposure-response analyses revealed no meaningful association, providing no numeric PD parameters. |
| popPK | Wassef_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefazolin, not govorestat. |
| PD | Wassef_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (popPK) of cefazolin, not govorestat, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Yao_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acalabrutinib, not govorestat. |
| PD | Yao_2025 | not_relevant | 0 | 0 | The paper analyzes acalabrutinib, not govorestat. |
| popPK | Yin_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ceftazidime, not govorestat. |
| PD | Yin_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PK) of ceftazidime in neonates and does not report any pharmacodynamic (PD) or exposure-response relationship for govorestat. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
