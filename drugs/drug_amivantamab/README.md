<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;amivantamab&quot;}]"></div>

# amivantamab

- **generic name:** amivantamab
- **ATC codes:** `L01FX18`
- **DrugBank:** [DB16695](https://go.drugbank.com/drugs/DB16695) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Amivantamab is a monoclonal antibody used to treat non-small-cell lung cancer. It is an approved anticancer medicine authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106957199](https://www.wikidata.org/wiki/Q106957199) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 17:57 | 4:50 | 0/0/0 | 0/0/1 | 0/0/1 | 266,015/5,371 | einfracz / qwen3.8-27b | 14 | 2/12 | 14/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Yuan_2026_PFS](drugs/drug_amivantamab/pd_Yuan_2026_PFS.md) | Progression-free survival ← amivantamab · time-to-event model | — | Yuan D et al., Development of the Weight-Tiered Q3W Re…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70263](https://doi.org/10.1002/psp4.70263) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **GSTM1** | `Q22` · CL | metabolism | [Ter_2025](drugs/drug_amivantamab/pgx_Ter_2025_GSTM1_Q22.md) | Ter Heine R et al., Optimizing lazertinib therapy through G…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04828-y](https://doi.org/10.1007/s00280-025-04828-y) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amivantamab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `GSTM1` metabolism | PGx paper |

<sub>Actors without a tissue in the table: EGFR (antibody), EGFR (downregulator), FCGR3A (inducer), MET (antibody), MET (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 38 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Haddish-Berhane_2024.pdf` | Haddish-Berhane N et al., Determination and Confirmation of Recom…, Clinical pharmacology and t… (2024) | popPK | 10 | [10.1002/cpt.3064](https://doi.org/10.1002/cpt.3064) | [37776107](https://pubmed.ncbi.nlm.nih.gov/37776107) | The study describes a population PK model for amivantamab, but the specific numeric parameter values (CL, V, Q) are not listed in the provided text abstract. |
| `Minchom_2026.pdf` | Minchom A et al., Subcutaneous Delivery of Amivantamab in…, Clinical lung cancer (2026) | popPK | 6 | [10.1016/j.cllc.2026.02.001](https://doi.org/10.1016/j.cllc.2026.02.001) | [41807198](https://pubmed.ncbi.nlm.nih.gov/41807198) | The paper describes a clinical study performing population pharmacokinetic modeling for amivantamab, but the evidence provided contains no specific quantitative PK parameter values (e.g., CL, V, ka), only dose recommendations derived from the modeling. |

<sub>queue written 2026-10-14T17:57:06.609257+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexander_2025 | irrelevant | 1 | 0 | This paper focuses on resource utilization and patient satisfaction, mentioning non-inferior PK qualitatively without providing any quantitative pharmacokinetic parameter values. |
| popPK | Chon_2023 | irrelevant | 0 | 0 | The document is an FDA approval summary focused on clinical efficacy (ORR, DoR) and safety, with no quantitative pharmacokinetic parameters (CL, V, ka, etc.) reported. |
| popPK | Felip_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study (MARIPOSA) reporting progression-free survival outcomes and biomarker associations, containing no pharmacokinetic modeling or disposition parameters for amivantamab. |
| popPK | Haddish-Berhane_2024 | relevant | 10 | 2 | The study describes a population PK model for amivantamab, but the specific numeric parameter values (CL, V, Q) are not listed in the provided text abstract. |
| popPK | Halmos_2025 | irrelevant | 0 | 0 | The paper is a study design review (vodcast) for an ongoing efficacy/safety trial and does not report quantitative PK parameters like clearance or volume for amivantamab. |
| popPK | Hao_2026 | irrelevant | 0 | 0 | This is a clinical case report regarding respiratory support (ECCO2R/NO) for ARDS; amivantamab is the cause of the adverse event, but no pharmacokinetic parameters are reported. |
| PGx | Kim_2025 | not_relevant | 0 | 0 | The paper is a clinical case report describing the efficacy of amivantamab in a patient with specific EGFR mutations, but it does not report pharmacogenomic effects on PK or PD parameters of the drug itself. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of combination targeted therapy, and amivantamab is only mentioned as a subsequent therapy for one patient, with no pharmacokinetic parameters reported. |
| popPK | Lefèvre_2025 | irrelevant | 0 | 0 | The paper is a clinical review of treatment strategies for EGFR-mutated NSCLC and does not report pharmacokinetic parameters for amivantamab. |
| popPK | Leighl_2026 | irrelevant | 2 | 1 | The paper is a plain language summary of a phase 3 efficacy study where PK was only a primary endpoint for bioequivalence, but it lacks quantitative PK parameter values (CL, V, etc.) or compartmental models. |
| popPK | Marques_2024 | irrelevant | 0 | 0 | The paper is a general review on in silico approaches in precision medicine and does not report specific pharmacokinetic parameters for amivantamab. |
| popPK | Minchom_2026 | relevant | 6 | 0 | The paper describes a clinical study performing population pharmacokinetic modeling for amivantamab, but the evidence provided contains no specific quantitative PK parameter values (e.g., CL, V, ka), only dose recommendations derived from the modeling. |
| popPK | Nguyen_2026 | irrelevant | 2 | 2 | The paper is a clinical review/vodcast reporting efficacy and safety data (ORR, PFS) and PK non-inferiority ratios (AUC ratio, Ctrough ratio) rather than quantitative disposition parameters (CL, V, ka) or population PK model estimates for amivantamab. |
| popPK | Petrelli_2026 | irrelevant | 0 | 0 | This is a narrative review of subcutaneous immunotherapy that discusses amivantamab as a case study for PK noninferiority but provides no original quantitative pharmacokinetic parameter values (CL, V, etc.). |
| popPK | Printz_2020 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of recombinant human hyaluronidase PH20 (rHuPH20), not amivantamab. |
| popPK | Russell_2023 | irrelevant | 0 | 0 | The paper is a clinical review focusing on efficacy outcomes (ORR, PFS) and safety, reporting no pharmacokinetic parameters such as clearance or volume of distribution for amivantamab. |
| popPK | Shah_2023 | relevant | 4 | 3 | The paper is a clinical review that reports specific quantitative PK parameters (clearance 0.36 L/d, half-life 11.3 days) for amivantamab in the text, but it lacks a full compartmental model or volume of distribution values. |
| popPK | Swaih_2025 | irrelevant | 0 | 0 | The study focuses on the preclinical characterization of the TKI AZ14289671, and while amivantamab is mentioned as a comparator drug, no pharmacokinetic parameters for amivantamab are reported. |
| popPK | Ter_2023 | irrelevant | 2 | 1 | The paper is a cost-simulation study using existing models, and no specific numeric PK parameters (CL, V, etc.) for amivantamab are provided in the text. |
| popPK | Ter_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lazertinib, with amivantamab serving only as a co-administered drug in the clinical context, not as the subject of PK parameter estimation. |
| PGx | Ter_2025 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on the pharmacokinetics of lazertinib, not amivantamab. |
| popPK | Tomasini_2026 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes and time to symptomatic progression from a clinical trial, containing no pharmacokinetic or pharmacodynamic parameter estimates. |
| popPK | Xu_2026 | irrelevant | 2 | 0 | The paper is a narrative review discussing IV-to-SC formulation strategies for seven antibodies including amivantamab, but it does not report specific quantitative population-PK parameter values (CL, V, Q, ka) for amivantamab in the provided text. |
| popPK | Yuan_2026 | relevant | 10 | 2 | The paper describes a population PK model for amivantamab with parameters (CL, V, Q), but the specific numeric values are located in Supplementary Table S3 and figures not included in the evidence. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| popPK | unknown_2022_2 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| popPK | unknown_2025 | irrelevant | 0 | 0 | no_text gate: only 34 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
