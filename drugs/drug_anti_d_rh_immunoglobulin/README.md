<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;anti-D (rh) immunoglobulin&quot;}]"></div>

# anti-D (rh) immunoglobulin

- **generic name:** anti-D (rh) immunoglobulin
- **ATC codes:** `J06BB01`
- **DrugBank:** [DB11597](https://go.drugbank.com/drugs/DB11597) · **PubChem:** none
- **groups:** approved

## About

Anti-D immunoglobulin is a specific immunoglobulin used in the treatment of Rh incompatibility to prevent haemolytic disease of the newborn. The medication is approved for use.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Chapman_1996_clearance_of_Rh_D_red_cells_from_the_circulation](drugs/drug_anti_d_rh_immunoglobulin/pd_Chapman_1996_clearance_of_Rh_D_red_cells_from_the_circulatio.md) | clearance of Rh D+ red cells from the circulation ← anti-D immunoglobulin · inhibition effect | — | Chapman GE, A pharmacokinetic/pharmacodynamic model…, Transfusion medicine (Oxfor… (1996) | [10.1111/j.1365-3148.1996.tb00073.x](https://doi.org/10.1111/j.1365-3148.1996.tb00073.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 16:38 | 0:03 | 0/0/0 | 0/1/0 | 0/0/0 | 4,468/167 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrett_1999 | irrelevant | 0 | 0 | The study is a genetic association study regarding HCV infection and HLA alleles, not a pharmacokinetic study of anti-D immunoglobulin. |
| PGx | Barrett_1999 | not_relevant | 1 | 8 | The study investigates the genetic basis for spontaneous HCV clearance (host immunity) in patients exposed to contaminated anti-D Ig, rather than the pharmacokinetics or pharmacodynamics of the anti-D Ig itself. |
| popPK | Barrett_2001 | irrelevant | 0 | 0 | The paper investigates the natural course of hepatitis C virus infection acquired via contaminated anti-D immunoglobulin, rather than the pharmacokinetics of the drug itself. |
| PGx | Barrett_2001 | not_relevant | 0 | 0 | The paper investigates the natural history of HCV infection and HLA associations with viral clearance, not the pharmacokinetics or pharmacodynamics of anti-D immunoglobulin. |
| popPK | Chapman_1996 | relevant | 8 | 2 | The paper describes a PK/PD model for anti-D, but the abstract states rate constants were derived from "previously published" data and no specific numeric values for CL, V, or ka are provided in the text. |
| PGx | Chapman_1996 | not_relevant | 0 | 0 | The paper describes a general pharmacokinetic/pharmacodynamic model for anti-D clearance of Rh D-positive cells but does not report any variation based on patient gene variants or genotypes. |
| popPK | Fanning_2000 | irrelevant | 0 | 0 | The study investigates HCV viral clearance in patients who were infected via anti-D immunoglobulin, rather than the pharmacokinetics of the drug itself. |
| PGx | Fanning_2000 | not_relevant | 0 | 0 | The study investigates HLA genotypes and HCV viral clearance, not the pharmacokinetic or pharmacodynamic parameters of Anti-D immunoglobulin. |
| popPK | Fanning_2002 | irrelevant | 0 | 0 | The paper is a review on the natural progression of Hepatitis C virus infection acquired via contaminated anti-D immunoglobulin, and does not report any pharmacokinetic parameters for the drug itself. |
| PGx | Fanning_2002 | not_relevant | 0 | 0 | The paper discusses HCV infection and its progression, not pharmacogenomic effects on the PK or PD of anti-D immunoglobulin. |
| popPK | Fu_2024 | irrelevant | 0 | 0 | The paper is a narrative review discussing the clinical application, history, and immunological mechanisms of anti-D immunoglobulin, and does not report any original quantitative pharmacokinetic parameters. |
| PGx | Fu_2024 | not_relevant | 0 | 0 | The paper is a review of clinical application and population genetics, reporting no pharmacokinetic or pharmacodynamic data linked to specific genetic variants. |
| popPK | Grellier_1997 | irrelevant | 0 | 0 | The study focuses on the serology of HCV infection resulting from exposure to contaminated anti-D immunoglobulin, not the pharmacokinetics of the anti-D drug itself. |
| PGx | Grellier_1997 | not_relevant | 0 | 0 | The paper discusses HCV clearance and antibody status in patients infected via anti-D immunoglobulin, but does not report pharmacogenomic effects on the PK or PD of anti-D immunoglobulin. |
| popPK | Kumpel_2002 | irrelevant | 3 | 5 | The study focuses on monoclonal anti-D antibodies (BRAD-3 and BRAD-5) rather than the standard polyclonal anti-D immunoglobulin (RhIG), and while it reports half-lives and clearance of D+ red cells, it does not provide the standard population-PK disposition parameters (CL, V, Q) for the drug itself as the primary subject. |
| popPK | Maas_1983 | irrelevant | 2 | 0 | The study focuses on the clearance of Rh-positive erythrocytes (a target/indicator) rather than reporting quantitative pharmacokinetic parameters (CL, V, t1/2) for the anti-D immunoglobulin molecule itself. |
| PGx | Maas_1983 | not_relevant | 1 | 0 | The study investigates the mechanism of action (immune clearance) in volunteers rather than a genetic variant's effect on PK/PD parameters. |
| popPK | Miescher_2004 | irrelevant | 4 | 0 | The study describes a functional efficacy trial measuring the clearance of RhD-positive red blood cells (RBCs) by the antibody, not the pharmacokinetic disposition (CL, V, half-life) of the anti-D IgG molecule itself. |
| popPK | Nattermann_2011 | irrelevant | 0 | 0 | The study focuses on the genetic predictors of spontaneous Hepatitis C virus clearance, not the pharmacokinetic disposition parameters of the anti-D immunoglobulin used in the exposure. |
| PGx | Nattermann_2011 | not_relevant | 1 | 0 | The paper investigates genetic predictors for spontaneous HCV clearance (a disease outcome) in a cohort infected by contaminated anti-D immunoglobulin, rather than the pharmacokinetic or pharmacodynamic effects of the drug itself. |
| popPK | Starcević_2011 | irrelevant | 0 | 0 | The paper is a clinical case report regarding Hemolytic Disease of the Fetus and Newborn, not a pharmacokinetic study, and contains no quantitative PK parameters for anti-D immunoglobulin. |
| PGx | Starcević_2011 | not_relevant | 0 | 0 | The text describes a case report of Hemolytic Disease of the Fetus and Newborn involving anti-D immunoglobulin prophylaxis failure and treatment, but does not report any pharmacogenomic variants or their effects on PK/PD parameters. |
| popPK | Zibert_1997 | irrelevant | 0 | 0 | The study investigates the immune response (antibodies) to Hepatitis C virus infection acquired via anti-D immunoglobulin, not the pharmacokinetic disposition of the drug itself. |
| PGx | Zibert_1997 | not_relevant | 0 | 0 | The paper studies the immune response to HCV infection acquired via anti-D immunoglobulin, but it does not analyze genetic variants or pharmacogenomic effects on the PK/PD of the immunoglobulin itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Banti_d_rh_immunoglobulin%5D&body=Drug%3A%20anti_d_rh_immunoglobulin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_anti_d_rh_immunoglobulin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
