<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;alendronic acid&quot;}]"></div>

# alendronic acid

- **generic name:** alendronic acid
- **ATC codes:** `M05BA04`, `M05BB03`, `M05BB06`
- **DrugBank:** [DB00630](https://go.drugbank.com/drugs/DB00630) · **PubChem:** [CID 2088](https://pubchem.ncbi.nlm.nih.gov/compound/2088)
- **molar mass:** 249.096 g/mol (C4H13NO7P2) — DrugBank
- **groups:** approved, investigational

## About

Alendronic acid is a bisphosphonate used to treat osteoporosis and other bone diseases. It is an approved medicine, widely used for bone conditions, and has also been studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420057](https://www.wikidata.org/wiki/Q420057) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Abrahamsen_2011_HF](drugs/drug_alendronic_acid/pd_Abrahamsen_2011_HF.md) | hip fracture ← alendronate · inhibition effect | — | Abrahamsen B et al., Proton pump inhibitor use and the antif…, Archives of internal medici… (2011) | [10.1001/archinternmed.2011.20](https://doi.org/10.1001/archinternmed.2011.20) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ohta_2002_BMD](drugs/drug_alendronic_acid/pd_Ohta_2002_BMD.md) | Bone mineral density ← alendronate · stimulation effect | — | Ohta T et al., [Pharmacological and clinical propertie…, Nihon yakurigaku zasshi. Fo… (2002) | [10.1254/fpj.120.409](https://doi.org/10.1254/fpj.120.409) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **FDPS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Guaraná_2024](drugs/drug_alendronic_acid/pgx_Guaran_2024_FDPS_Q100.md) | Guaraná WL et al., Farnesyl Diphosphate Synthase Gene Asso…, International journal of mo… (2024) | [10.3390/ijms25115623](https://doi.org/10.3390/ijms25115623) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alendronic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP6V1A (inhibitor), FDPS (inhibitor), FDPS (target), Hydroxylapatite (target), PTPN4 (inhibitor), PTPRE (inhibitor), PTPRS (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:13 | 7:16 | 0/0/0 | 2/0/0 | 0/0/1 | 189,083/2,636 | einfracz / qwen3.8-27b | 18 | 3/1 | 17/1 | 0 |

## Coverage

- **PubMed hits:** 81 matched, 58 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rhim_2009.pdf` | Rhim SY et al., Bioavailability and bioequivalence of t…, Clinical therapeutics (2009) | popPK | 8 | [10.1016/j.clinthera.2009.05.001](https://doi.org/10.1016/j.clinthera.2009.05.001) | [19539104](https://pubmed.ncbi.nlm.nih.gov/19539104) | The study provides non-compartmental PK parameters (t1/2, ke, Tmax, AUC) for alendronate sodium, but lacks specific clearance (CL) or volume (V) values which are often derived but not explicitly listed as primary summary statistics in the abstract text provided. |

<sub>queue written 2026-10-07T03:13:00.473008+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ghorbanizamani_2026 | irrelevant | 0 | 0 | The paper is a review of upconversion nanoparticles and does not report pharmacokinetic parameters for alendronic acid. |
| popPK | Leal_2023 | irrelevant | 0 | 0 | The paper is a large-scale observational study on polypharmacy and dosage adjustments using electronic health records; alendronic acid is only mentioned as an example of a co-medication pair, and no pharmacokinetic parameters (CL, V, ka, etc.) are reported. |
| popPK | Stroehlein_2021 | irrelevant | 0 | 0 | The paper is a systematic review of Vitamin D for COVID-19 and does not contain any pharmacokinetic data for alendronic acid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
