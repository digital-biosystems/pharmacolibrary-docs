<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;tasosartan&quot;}]"></div>

# tasosartan

- **generic name:** tasosartan
- **ATC codes:** `C09CA05`
- **DrugBank:** [DB01349](https://go.drugbank.com/drugs/DB01349) · **PubChem:** [CID 60919](https://pubchem.ncbi.nlm.nih.gov/compound/60919)
- **molar mass:** 411.4591 g/mol (C23H21N7O) — DrugBank
- **groups:** experimental

## About

Tasosartan is an angiotensin II receptor antagonist, a drug class used to lower blood pressure in hypertension. It remains experimental and does not appear to be an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1317131](https://www.wikidata.org/wiki/Q1317131) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:23 | 0:18 | 0/0/0 | 0/0/0 | 0/0/0 | 9,125/340 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Andrawis_2000.pdf` | Andrawis NS et al., A pharmacokinetic and pharmacodynamic s…, Journal of clinical pharmac… (2000) | popPK | 8 | [10.1177/00912700022008892](https://doi.org/10.1177/00912700022008892) | [10709151](https://pubmed.ncbi.nlm.nih.gov/10709151) | The study is a relevant human PK/PD interaction study for tasosartan, but the specific quantitative PK parameters (CL, V, etc.) are not present in the provided evidence, which only reports pharmacodynamic blood pressure data. |

<sub>queue written 2026-10-07T08:23:35.867255+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrawis_2000 | relevant | 8 | 0 | The study is a relevant human PK/PD interaction study for tasosartan, but the specific quantitative PK parameters (CL, V, etc.) are not present in the provided evidence, which only reports pharmacodynamic blood pressure data. |
| popPK | Brunner_1997 | irrelevant | 0 | 0 | The paper is a review focused on irbesartan, and tasosartan is only mentioned as a comparator without providing quantitative PK parameters for it. |
| PD | Brunner_1997 | not_relevant | 0 | 0 | Tasosartan is mentioned only in a pharmacokinetic comparison; no tasosartan-specific exposure- or dose-response relationship or numeric PD parameters are reported or derivable. |
| popPK | Buchwalder-Csajka_1999 | irrelevant | 0 | 0 | The paper evaluates angiotensin challenge methodology for pharmacodynamic profiling and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for tasosartan. |
| PD | Buchwalder-Csajka_1999 | not_relevant | 0 | 0 | The reported numeric dose-response parameters describe angiotensin challenges, not tasosartan exposure or dose; no tasosartan-specific relationship is extractable. |
| popPK | Lacourcière_1998 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting blood pressure changes and does not contain pharmacokinetic parameters (CL, V, t1/2) for tasosartan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
