<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;pegunigalsidase alfa&quot;}]"></div>

# pegunigalsidase alfa

- **generic name:** pegunigalsidase alfa
- **ATC codes:** `A16AB20`
- **DrugBank:** [DB14992](https://go.drugbank.com/drugs/DB14992) · **PubChem:** none
- **groups:** approved, investigational

## About

Pegunigalsidase alfa is an enzyme replacement therapy used to treat Fabry disease. It is authorised in the European Union and remains an approved, though still partly investigational, treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27270744](https://www.wikidata.org/wiki/Q27270744) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pegunigalsidase_alfa).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLA (modulator), Globotriaosylceramide (metabolizer), Globotriaosylceramide (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:18 | 1:24 | 0/0/0 | 0/0/0 | 0/0/0 | 63,670/756 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/6 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schiffmann_2019.pdf` | Schiffmann R et al., Pegunigalsidase alfa, a novel PEGylated…, Journal of inherited metabo… (2019) | popPK | 8 | [10.1002/jimd.12080](https://doi.org/10.1002/jimd.12080) | [30834538](https://pubmed.ncbi.nlm.nih.gov/30834538) | The study reports the mean terminal plasma half-life (53-121 hours) for pegunigalsidase alfa in humans, but lacks other quantitative disposition parameters like clearance or volume of distribution. |

<sub>queue written 2026-10-05 11:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azevedo_2020 | irrelevant | 0 | 0 | A narrative review of Fabry disease therapies with no PK parameters for pegunigalsidase alfa. |
| PD | Azevedo_2020 | not_relevant | 1 | 0 | Narrative review of Fabry disease therapies with no concentration-effect or dose-response analysis or numeric PD parameters for pegunigalsidase alfa. |
| popPK | Azimpour_2025 | irrelevant | 0 | 0 | The paper reports health state utility values (EQ-5D-3L) for quality of life and economic evaluation, not pharmacokinetic parameters. |
| popPK | Brussee_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lucerastat, not pegunigalsidase alfa. |
| PD | Brussee_2026 | not_relevant | 0 | 0 | Paper is about lucerastat (not pegunigalsidase alfa) and reports only a population PK model with exposure/dose adaptation, no PD or concentration-effect parameters. |
| popPK | Germain_2024 | irrelevant | 2 | 0 | The paper is a clinical review of efficacy and safety that mentions a ~40-fold increase in half-life (~80h) but does not report quantitative compartmental PK parameters (CL, V, Q) or a population PK model. |
| PGx | Germain_2024 | not_relevant | 0 | 0 | The paper describes the clinical development and efficacy of pegunigalsidase alfa but does not report any pharmacogenomic analysis or gene variant effects on its PK/PD parameters. |
| popPK | Gómez-Cerezo_2025 | irrelevant | 1 | 0 | This is a narrative review of immunogenicity in Fabry disease ERT; pegunigalsidase alfa is discussed qualitatively (half-life mentioned but no numeric PK parameters like CL, V, or a PK model are reported). |
| PD | Gómez-Cerezo_2025 | not_relevant | 1 | 0 | Narrative review of ADA immunogenicity in Fabry ERT; no concentration- or dose-effect analysis or numeric PD parameters for pegunigalsidase alfa. |
| popPK | Lenders_2023 | irrelevant | 2 | 1 | The study is an in-vitro immunological characterization of antibody effects on enzyme stability, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, Q) for pegunigalsidase_alfa. |
| popPK | Lenders_2025 | irrelevant | 1 | 0 | The paper focuses on immunological methods for measuring anti-drug antibodies and only mentions the half-life qualitatively without providing quantitative PK parameters like clearance or volume. |
| popPK | Lenders_2025_2 | relevant | 4 | 5 | The study reports pharmacokinetic data (AUC, half-life) for pegunigalsidase alfa in humans, but lacks standard compartmental parameters (CL, V, Q) and relies on enzyme activity assays rather than direct drug concentration measurements. |
| PGx | Perretta_2025 | not_relevant | 0 | 0 | The paper is a general review of Fabry disease treatments and does not report specific pharmacogenomic effects on the PK or PD of pegunigalsidase alfa. |
| popPK | Schiffmann_2019 | relevant | 8 | 3 | The study reports the mean terminal plasma half-life (53-121 hours) for pegunigalsidase alfa in humans, but lacks other quantitative disposition parameters like clearance or volume of distribution. |
| PD | Schiffmann_2019 | not_relevant | 3 | 2 | Dose-ranging design with PK and Gb3/renal outcomes reported descriptively, but no concentration-effect or dose-response relationship or numeric PD parameters (Emax, EC50, slope) are stated or derivable. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpegunigalsidase_alfa%5D&body=Drug%3A%20pegunigalsidase_alfa%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pegunigalsidase_alfa/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
