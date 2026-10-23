<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;valoctocogene roxaparvovec&quot;}]"></div>

# valoctocogene roxaparvovec

- **generic name:** valoctocogene roxaparvovec
- **ATC codes:** `B02BD15`
- **DrugBank:** [DB15561](https://go.drugbank.com/drugs/DB15561) · **PubChem:** none
- **groups:** approved, investigational

## About

Valoctocogene roxaparvovec is a gene therapy used to treat hemophilia A. It is authorised in the European Union as a gene-therapy medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q107391591](https://www.wikidata.org/wiki/Q107391591) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Cao_2025_reference](drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Cao2025_reference.md) | — | 2-compartment (no model) | 4 | Cao M et al., Safety, efficacy, and immunogenicity of…, Gene therapy (2025) | [10.1038/s41434-025-00512-1](https://doi.org/10.1038/s41434-025-00512-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=valoctocogene_roxaparvovec).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Coagulation factor VIII (F8) (gene replacement).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:00 | 1:21 | 0/1/0 | 0/0/0 | 0/0/0 | 51,995/552 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/8 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mahlangu_2023.pdf` | Mahlangu J et al., Two-Year Outcomes of Valoctocogene Roxa…, The New England journal of… (2023) | popPK | 8 | [10.1056/NEJMoa2211075](https://doi.org/10.1056/NEJMoa2211075) | [36812433](https://pubmed.ncbi.nlm.nih.gov/36812433) | The paper reports a population PK model for the transgene-derived factor VIII (the product of the gene therapy) with a specific half-life value (123 weeks), which is the primary pharmacokinetic parameter for this gene therapy. |

<sub>queue written 2026-10-05 20:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2024 | irrelevant | 2 | 1 | The study reports vector DNA biodistribution and shedding kinetics (clearance times, peak concentrations) rather than standard pharmacokinetic parameters (CL, V, ka) for the drug substance or its therapeutic protein product. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of KJ103 (an IgG-degrading enzyme), not valoctocogene roxaparvovec. |
| popPK | Long_2019 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (FVIII-SQ Cmax and AUC) rather than pharmacokinetic disposition parameters (CL, V, ka) for the vector or transgene. |
| popPK | Long_2021 | irrelevant | 0 | 0 | The paper focuses exclusively on immunogenicity (antibody titers and cellular responses) and does not report pharmacokinetic parameters such as clearance, volume, or half-life for valoctocogene roxaparvovec. |
| popPK | Long_2024 | irrelevant | 0 | 0 | The paper focuses on immunogenicity (antibodies and cellular immune responses) and safety outcomes, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Mihaila_2023 | irrelevant | 0 | 0 | The paper is a review focused on emicizumab and general gene therapy concepts, and does not report quantitative pharmacokinetic parameters for valoctocogene roxaparvovec. |
| popPK | Puzzo_2025 | irrelevant | 0 | 0 | The paper is a general review of liver-directed gene therapy and does not report quantitative pharmacokinetic parameters for valoctocogene roxaparvovec. |
| popPK | Rana_2025 | irrelevant | 0 | 0 | The paper is a narrative review of clinical trials focusing on efficacy and immunogenicity, and it does not report quantitative pharmacokinetic parameters or compartmental models for valoctocogene roxaparvovec. |
| popPK | Serrafi_2026 | irrelevant | 0 | 0 | The paper is a narrative review of gene therapy in hemophilia that discusses clinical outcomes and mechanisms but does not report quantitative pharmacokinetic parameters (CL, V, Q, ka) for valoctocogene roxaparvovec. |
| popPK | Suoranta_2022 | irrelevant | 0 | 0 | The paper is a review on AAV vector safety and engineering strategies, containing no pharmacokinetic data or quantitative disposition parameters for valoctocogene roxaparvovec. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvaloctocogene_roxaparvovec%5D&body=Drug%3A%20valoctocogene_roxaparvovec%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_valoctocogene_roxaparvovec/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-05 20:00 UTC</sub>
