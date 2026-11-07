<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;amivantamab&quot;}]"></div>

# amivantamab

- **generic name:** amivantamab
- **ATC codes:** `L01FX18`
- **DrugBank:** [DB16695](https://go.drugbank.com/drugs/DB16695) · **PubChem:** none
- **groups:** approved, investigational

## About

Amivantamab is a monoclonal antibody used to treat non-small-cell lung cancer. It is an approved anticancer medicine authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106957199](https://www.wikidata.org/wiki/Q106957199) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yuan_2026_PFS](drugs/drug_amivantamab/pd_Yuan_2026_PFS.md) | progression-free survival ← amivantamab · time-to-event model | — | Yuan D et al., Development of the Weight-Tiered Q3W Re…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70263](https://doi.org/10.1002/psp4.70263) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **GSTM1** | `Q22` · CL | metabolism | [Ter_2025](drugs/drug_amivantamab/pgx_Ter_2025_GSTM1_Q22.md) | Ter Heine R et al., Optimizing lazertinib therapy through G…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04828-y](https://doi.org/10.1007/s00280-025-04828-y) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amivantamab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `GSTM1` metabolism | PGx paper |

<sub>Actors without a tissue in the table: EGFR (antibody), EGFR (downregulator), FCGR3A (inducer), MET (antibody), MET (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:36 | 3:56 | 0/0/0 | 1/0/0 | 0/0/1 | 164,356/3,823 | einfracz / qwen3.8-27b | 14 | 2/12 | 14/0 | 0 |

## Coverage

- **PubMed hits:** 38 matched, 38 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Haddish-Berhane_2024.pdf` | Haddish-Berhane N et al., Determination and Confirmation of Recom…, Clinical pharmacology and t… (2024) | popPK | 10 | [10.1002/cpt.3064](https://doi.org/10.1002/cpt.3064) | [37776107](https://pubmed.ncbi.nlm.nih.gov/37776107) | A human amivantamab PopPK model is reported, but numeric disposition parameter values are not present in the evidence. |
| `Minchom_2026.pdf` | Minchom A et al., Subcutaneous Delivery of Amivantamab in…, Clinical lung cancer (2026) | popPK | 8 | [10.1016/j.cllc.2026.02.001](https://doi.org/10.1016/j.cllc.2026.02.001) | [41807198](https://pubmed.ncbi.nlm.nih.gov/41807198) | Population pharmacokinetic modeling is reported, but no numeric disposition parameters are provided in the evidence. |

<sub>queue written 2026-10-13 12:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexander_2025 | irrelevant | 0 | 0 | The paper is a resource utilization and patient satisfaction study from the PALOMA-3 trial and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for amivantamab. |
| popPK | Felip_2024 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes (PFS, ctDNA clearance) for amivantamab-lazertinib in the MARIPOSA trial and contains no pharmacokinetic parameter estimates (CL, V, ka, t1/2). |
| popPK | Haddish-Berhane_2024 | relevant | 10 | 0 | A human amivantamab PopPK model is reported, but numeric disposition parameter values are not present in the evidence. |
| popPK | Halmos_2025 | irrelevant | 0 | 0 | The paper is a study design description (vodcast/article) for the COPERNICUS clinical trial and contains no quantitative pharmacokinetic parameter values (CL, V, etc.) for amivantamab. |
| popPK | Hao_2026 | irrelevant | 0 | 0 | This is a clinical case report regarding respiratory support (ECCO2R) for amivantamab-induced lung injury, containing no pharmacokinetic data. |
| PGx | Kim_2025 | not_relevant | 1 | 5 | The paper is a case report describing the clinical efficacy (tumor response) of amivantamab, not a study on how genetic variants affect the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | This is a clinical efficacy and resistance study; amivantamab is mentioned only as a single patient's subsequent therapy, not as the subject of a pharmacokinetic analysis. |
| popPK | Lefèvre_2025 | irrelevant | 0 | 0 | The paper is a clinical review of EGFR-mutated NSCLC treatment and does not report quantitative pharmacokinetic parameters for amivantamab. |
| popPK | Leighl_2026 | relevant | 4 | 2 | The study reports pharmacokinetic outcomes (SC-to-IV ratios) for amivantamab in humans, but it is a bioequivalence study lacking detailed compartmental parameters (CL, V, Q) and specific numeric PK values are limited to ratios in figures not fully transcribed. |
| popPK | Marques_2024 | irrelevant | 0 | 0 | The paper is a general review of in silico approaches in precision medicine and does not report specific pharmacokinetic parameters for amivantamab. |
| popPK | Minchom_2026 | relevant | 8 | 0 | Population pharmacokinetic modeling is reported, but no numeric disposition parameters are provided in the evidence. |
| popPK | Nguyen_2026 | irrelevant | 2 | 1 | The paper is a clinical review/vodcast that reports only PK ratio endpoints (C trough and AUC ratios) for a bioequivalence study, lacking specific quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Petrelli_2026 | irrelevant | 1 | 0 | This is a narrative review summarizing clinical outcomes and qualitative PK noninferiority for SC amivantamab, but it does not report any specific quantitative pharmacokinetic parameter values (e.g., clearance, volume, half-life). |
| popPK | Printz_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant human hyaluronidase PH20 (rHuPH20), not amivantamab. |
| popPK | Shah_2023 | relevant | 4 | 3 | The paper is a review that cites specific PK values (CL, half-life) from the CHRYSALIS trial in the text, but lacks a full compartmental model or volume of distribution values. |
| popPK | Swaih_2025 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of the drug AZ14289671, not amivantamab, which is only mentioned as a clinical comparator in the introduction. |
| popPK | Ter_2023 | relevant | 8 | 1 | The study simulates amivantamab using a population-PK model, but its numeric parameter values and detailed results are not provided here. |
| popPK | Ter_2025 | irrelevant | 0 | 0 | The simulations quantify lazertinib exposure, not amivantamab pharmacokinetic parameters. |
| popPK | Tomasini_2026 | irrelevant | 0 | 0 | This human clinical outcomes study reports no quantitative pharmacokinetic parameters for amivantamab. |
| popPK | Xu_2026 | irrelevant | 1 | 0 | The paper is a narrative review discussing general PK bridging strategies and qualitative outcomes, without providing original quantitative PK parameter values (e.g., CL, V, ka) for amivantamab. |
| popPK | Yuan_2026 | relevant | 10 | 2 | The human population-PK model is relevant, but its numeric parameter values are only referenced in Table S3, which is not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamivantamab%5D&body=Drug%3A%20amivantamab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amivantamab/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
