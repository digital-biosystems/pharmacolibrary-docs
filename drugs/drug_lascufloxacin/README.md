<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;lascufloxacin&quot;}]"></div>

# lascufloxacin

- **generic name:** lascufloxacin
- **ATC codes:** `J01MA25`
- **DrugBank:** [DB20002](https://go.drugbank.com/drugs/DB20002) · **PubChem:** none
- **molar mass:** 439.435 g/mol (C21H24F3N3O4) — DrugBank
- **groups:** experimental

## About

Lascufloxacin is a fluoroquinolone antibacterial that has been investigated for treating respiratory tract infections. It appears to remain experimental and is not an established marketed medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27261317](https://www.wikidata.org/wiki/Q27261317) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Hosoi_2026_E](drugs/drug_lascufloxacin/pd_Hosoi_2026_E.md) | change in viable bacterial counts ← lascufloxacin · direct sigmoid Emax (Hill) effect | — | Hosoi A et al., Three fluoroquinolones with different e…, Antimicrobial agents and ch… (2026) | [10.1128/aac.00375-26](https://doi.org/10.1128/aac.00375-26) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:48 | 2:45 | 0/0/0 | 1/0/0 | 0/0/0 | 50,665/2,680 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Totsuka_2020.pdf` | Totsuka K et al., Pharmacokinetic study of lascufloxacin…, Journal of infection and ch… (2020) | popPK | 10 | [10.1016/j.jiac.2019.09.010](https://doi.org/10.1016/j.jiac.2019.09.010) | [31882385](https://pubmed.ncbi.nlm.nih.gov/31882385) | The paper is a Phase I PK study of lascufloxacin in humans, but the evidence provided only contains qualitative descriptions and relative ratios (e.g., 1.28 times higher) rather than absolute numeric values for CL, V, or t1/2. |
| `Furuie_2018.pdf` | Furuie H et al., Intrapulmonary Pharmacokinetics of Lasc…, Antimicrobial agents and ch… (2018) | popPK | 8 | [10.1128/AAC.02169-17](https://doi.org/10.1128/AAC.02169-17) | [29339391](https://pubmed.ncbi.nlm.nih.gov/29339391) | The study reports quantitative PK parameters (Cmax, AUC, Tmax) for lascufloxacin in plasma and lung compartments, but does not explicitly list clearance (CL), volume (V), or half-life (t1/2) values in the provided text. |

<sub>queue written 2026-10-13 12:47 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fu_2024 | irrelevant | 0 | 0 | The paper is a review of antimicrobial pharmacokinetics in the elderly and does not mention lascufloxacin or provide any data for it. |
| popPK | Hagihara_2021 | irrelevant | 0 | 0 | The study is an in vivo pharmacodynamic efficacy assessment in mice, reporting bacterial counts rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Herbert_2022 | irrelevant | 1 | 0 | The paper is a review of topical fluoroquinolones for keratitis and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for lascufloxacin. |
| popPK | Hirai_2025 | irrelevant | 0 | 0 | This is a clinical case report describing the treatment of Legionella pneumonia, not a pharmacokinetic study, and it does not report quantitative disposition parameters (CL, V, etc.) for lascufloxacin. |
| popPK | Hosoi_2026 | relevant | 7 | 2 | The study models the PK of lascufloxacin in mice (one-compartment model), but the specific numeric PK parameter values (CL, Vd, ka) are located in Supplementary Tables S1-S3, which are not provided in the evidence. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review of pyrrolidine-based antibiotics and does not report pharmacokinetic parameters for lascufloxacin. |
| popPK | Totsuka_2020 | relevant | 10 | 2 | The paper is a Phase I PK study of lascufloxacin in humans, but the evidence provided only contains qualitative descriptions and relative ratios (e.g., 1.28 times higher) rather than absolute numeric values for CL, V, or t1/2. |
| popPK | Zasheva_2024 | irrelevant | 0 | 0 | The paper is a review of patient access and market authorization for new antibiotics in the EU/EEA and does not contain any pharmacokinetic data or parameters for lascufloxacin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blascufloxacin%5D&body=Drug%3A%20lascufloxacin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lascufloxacin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
