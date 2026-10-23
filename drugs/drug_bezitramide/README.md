<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;bezitramide&quot;}]"></div>

# bezitramide

- **generic name:** bezitramide
- **ATC codes:** `N02AC05`
- **DrugBank:** [DB01459](https://go.drugbank.com/drugs/DB01459) · **PubChem:** [CID 61791](https://pubchem.ncbi.nlm.nih.gov/compound/61791)
- **molar mass:** 492.6114 g/mol (C31H32N4O2) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Bezitramide is an opioid painkiller (analgesic). It was approved but has been withdrawn and is no longer in medical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q794409](https://www.wikidata.org/wiki/Q794409) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:47 | 0:01 | 0/0/0 | 0/0/0 | 0/0/0 | 833/84 | einfracz / qwen3.8-27b | 10 | 4/6 | 7/3 | 0 |

## Coverage

- **PubMed hits:** 1 matched, 1 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Meijer_1984.pdf` | Meijer DK et al., Pharmacokinetics of the oral narcotic a…, European journal of clinica… (1984) | popPK | 5 | [10.1007/BF00556902](https://doi.org/10.1007/BF00556902) | [6519169](https://pubmed.ncbi.nlm.nih.gov/6519169) | The evidence reports non-compartmental parameters (Cmax, Tmax, t1/2) for both human and rat data, but lacks the specific quantitative compartmental disposition parameters (CL, V, Q, ka) required for relevant classification. |

<sub>queue written 2026-10-07T04:47:00.902293+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aarons_1991 | irrelevant | 0 | 0 | The paper is a general review of population pharmacokinetics methodology and does not report any specific pharmacokinetic parameters for bezitramide. |
| popPK | Cheng_2021 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for CC-122, not bezitramide. |
| popPK | Fu_1979 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for cefotaxime, not bezitramide. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for pomalidomide, not bezitramide. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of LEV (levetiracetam), not bezitramide. |
| popPK | Maharaj_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for olanzapine, not bezitramide. |
| popPK | Meijer_1984 | irrelevant | 5 | 0 | The evidence reports non-compartmental parameters (Cmax, Tmax, t1/2) for both human and rat data, but lacks the specific quantitative compartmental disposition parameters (CL, V, Q, ka) required for relevant classification. |
| popPK | Methaneethorn_2023 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for doxorubicin, not bezitramide. |
| popPK | Royer_2021 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for palbociclib, not bezitramide. |
| popPK | Weiss_2024 | irrelevant | 0 | 0 | The paper is a review of distribution clearance for 15 other drugs (e.g., rocuronium, propranolol) and does not mention or report pharmacokinetic parameters for bezitramide. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for tigecycline, not bezitramide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
