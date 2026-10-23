<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belatacept&quot;}]"></div>

# belatacept

- **generic name:** belatacept
- **ATC codes:** `L04AA28`
- **DrugBank:** [DB06681](https://go.drugbank.com/drugs/DB06681) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Belatacept is an immunosuppressant used to prevent rejection of a transplanted kidney. It is authorised in the European Union and is given under medical supervision, carrying a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4881990](https://www.wikidata.org/wiki/Q4881990) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ashokkumar_2015_CD154_frequency](drugs/drug_belatacept/pd_Ashokkumar_2015_CD154_frequency.md) | CD154+cells frequency within T-cell subsets ← belatacept · direct sigmoid Emax (Hill) effect | — | Ashokkumar C et al., Alloreactive CD154-expressing T-cell su…, Scientific reports (2015) | [10.1038/srep15218](https://doi.org/10.1038/srep15218) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:29 | 0:10 | 0/0/0 | 1/0/0 | 0/0/0 | 27,602/764 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2012.pdf` | Zhou Z et al., Time-varying belatacept exposure and it…, Clinical pharmacology and t… (2012) | popPK | 10 | [10.1038/clpt.2012.84](https://doi.org/10.1038/clpt.2012.84) | [22760001](https://pubmed.ncbi.nlm.nih.gov/22760001) | The paper explicitly describes a population pharmacokinetic model for belatacept in kidney transplant recipients, but the extracted evidence contains only qualitative descriptions of covariate effects without any specific numeric parameter values (e.g., CL, V, Q). |
| `Pyatt_2025.pdf` | Pyatt A et al., Belatacept Pharmacokinetic Analysis of…, Clinical transplantation (2025) | popPK | 9 | [10.1111/ctr.70172](https://doi.org/10.1111/ctr.70172) | [40704545](https://pubmed.ncbi.nlm.nih.gov/40704545) | The study is a population PK analysis of belatacept in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the text, likely residing in tables or supplementary materials not included. |

<sub>queue written 2026-10-06T23:29:43.254088+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ashokkumar_2015 | irrelevant | 0 | 0 | This is an in-vitro immunological study assessing T-cell sensitivity (EC50) to belatacept, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Ashokkumar_2026 | irrelevant | 1 | 1 | The study reports in vitro pharmacodynamic EC50 values for B-cell suppression, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Klaasen_2019 | irrelevant | 1 | 0 | The study describes the development of an assay and mentions a PK model visualization but does not report specific quantitative disposition parameters (CL, V, etc.) in the provided text. |
| popPK | Pyatt_2025 | relevant | 9 | 2 | The study is a population PK analysis of belatacept in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the text, likely residing in tables or supplementary materials not included. |
| popPK | Sethi_2020 | irrelevant | 0 | 0 | The paper reports clinical outcomes (survival, rejection, GFR) of an immunosuppression switch, not pharmacokinetic parameters. |
| popPK | Younis_2025 | irrelevant | 0 | 0 | This is a clinical outcomes study focusing on donor-specific antibodies in lung transplant patients, reporting no pharmacokinetic parameters for belatacept. |
| popPK | Zhou_2012 | relevant | 10 | 0 | The paper explicitly describes a population pharmacokinetic model for belatacept in kidney transplant recipients, but the extracted evidence contains only qualitative descriptions of covariate effects without any specific numeric parameter values (e.g., CL, V, Q). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
