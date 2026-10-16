<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belatacept&quot;}]"></div>

# belatacept

- **generic name:** belatacept
- **ATC codes:** `L04AA28`
- **DrugBank:** [DB06681](https://go.drugbank.com/drugs/DB06681) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Belatacept is an immunosuppressant used to prevent rejection of a transplanted kidney. It is authorised in the European Union and is given under medical supervision, carrying a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4881990](https://www.wikidata.org/wiki/Q4881990) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:55 | 0:12 | 0/0/0 | 1/0/0 | 0/0/0 | 25,282/750 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ashokkumar_2015_CD154](drugs/drug_belatacept/pd_Ashokkumar_2015_CD154.md) | CD154+T-cell subsets ← belatacept · direct sigmoid Emax (Hill) effect | — | Ashokkumar C et al., Alloreactive CD154-expressing T-cell su…, Scientific reports (2015) | [10.1038/srep15218](https://doi.org/10.1038/srep15218) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=belatacept).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD28 (inhibitor), CD80 (target), CD86 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2012.pdf` | Zhou Z et al., Time-varying belatacept exposure and it…, Clinical pharmacology and t… (2012) | popPK | 10 | [10.1038/clpt.2012.84](https://doi.org/10.1038/clpt.2012.84) | [22760001](https://pubmed.ncbi.nlm.nih.gov/22760001) | The paper describes a population PK model for belatacept and mentions covariates affecting clearance and volume, but no specific numeric parameter values are provided in the evidence. |
| `Klaasen_2019.pdf` | Klaasen RA et al., A Fully Automated Method for the Determ…, Therapeutic drug monitoring (2019) | popPK | 9 | [10.1097/FTD.0000000000000580](https://doi.org/10.1097/FTD.0000000000000580) | [30633722](https://pubmed.ncbi.nlm.nih.gov/30633722) | The study is a population pharmacokinetic analysis of belatacept in humans, but the specific numeric parameter estimates (CL, V, etc.) are not explicitly listed in the provided evidence text. |
| `Pyatt_2025.pdf` | Pyatt A et al., Belatacept Pharmacokinetic Analysis of…, Clinical transplantation (2025) | popPK | 8 | [10.1111/ctr.70172](https://doi.org/10.1111/ctr.70172) | [40704545](https://pubmed.ncbi.nlm.nih.gov/40704545) | The study reports population PK parameters (specifically Clearance) for belatacept, but the abstract provides only qualitative comparisons (e.g., "significantly higher") and refers to a "published... model" without listing the specific numeric parameter values in the provided text. |

<sub>queue written 2026-10-14T20:55:14.900368+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ashokkumar_2015 | irrelevant | 0 | 0 | This is an in-vitro immunological study measuring T-cell subset sensitivity (EC50) to belatacept, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Ashokkumar_2026 | irrelevant | 1 | 0 | The study reports in vitro efficacy (EC50) data for B-cell suppression rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for belatacept. |
| popPK | Klaasen_2019 | relevant | 9 | 1 | The study is a population pharmacokinetic analysis of belatacept in humans, but the specific numeric parameter estimates (CL, V, etc.) are not explicitly listed in the provided evidence text. |
| popPK | Pyatt_2025 | relevant | 8 | 2 | The study reports population PK parameters (specifically Clearance) for belatacept, but the abstract provides only qualitative comparisons (e.g., "significantly higher") and refers to a "published... model" without listing the specific numeric parameter values in the provided text. |
| popPK | Sethi_2020 | irrelevant | 0 | 0 | The paper reports clinical outcomes (rejection/survival rates) of a therapeutic conversion strategy, not pharmacokinetic parameters (CL, V, etc.) for belatacept. |
| popPK | Younis_2025 | irrelevant | 0 | 0 | The study is a clinical outcomes analysis of belatacept's immunological effects (DSA reduction) in lung transplant patients and contains no pharmacokinetic parameters or models. |
| popPK | Zhou_2012 | relevant | 10 | 0 | The paper describes a population PK model for belatacept and mentions covariates affecting clearance and volume, but no specific numeric parameter values are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
