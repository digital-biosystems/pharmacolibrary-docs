<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;parnaparin&quot;}]"></div>

# parnaparin

- **generic name:** parnaparin
- **ATC codes:** `B01AB07`
- **DrugBank:** [DB09260](https://go.drugbank.com/drugs/DB09260) · **PubChem:** not captured
- **groups:** approved

## About

Parnaparin is a low-molecular-weight heparin used as an antithrombotic to prevent and treat blood clots. It is an approved medicine, used mainly in Italy and not widely elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3896308](https://www.wikidata.org/wiki/Q3896308) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:20 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 28,329/387 | einfracz / qwen3.8-27b | 2 | 1/0 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Florian-Kujawski_2004.pdf` | Florian-Kujawski M et al., Differential regulation of thrombin act…, International angiology : a… (2004) | pd | 4 | not captured | [15767980](https://www.ncbi.nlm.nih.gov/pubmed/15767980) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T21:20:03.857469+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Florian-Kujawski_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring TAFI inhibition (IC50) and does not report pharmacokinetic disposition parameters for parnaparin. |
| popPK | Forestieri_2007 | irrelevant | 1 | 0 | The study reports pharmacodynamic endpoints (APTT, anti-Xa, anti-IIa levels) for prophylaxis efficacy rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Frampton_1994 | irrelevant | 1 | 0 | This is a clinical review that discusses pharmacological properties and efficacy but does not report quantitative pharmacokinetic parameters (such as clearance or volume) for parnaparin. |
| popPK | Hao_2019 | irrelevant | 0 | 0 | The paper is a clinical review of low molecular weight heparins including Parnaparin, but it does not report original quantitative pharmacokinetic parameter values (CL, V, etc.). |
| popPK | Imberti_2009 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (anti-Factor Xa activity) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for parnaparin. |
| popPK | Maddineni_2006 | irrelevant | 0 | 0 | The paper is a review discussing the chemical individuality of LMWHs and mentions parnaparin only as a commercial product example, without reporting any pharmacokinetic parameters. |
| PD | Maddineni_2006 | not_relevant | 0 | 0 | The paper is a review discussing the chemical and biological uniqueness of LMWHs and the need for PD testing in generic equivalence, but it does not report any specific PD data, exposure-response relationships, or numeric PD parameters for parnaparin. |
| popPK | Mousa_2002 | irrelevant | 0 | 0 | The paper is a review focused on tinzaparin, and parnaparin is only mentioned as a comparator without any quantitative pharmacokinetic parameters provided. |
| PD | Mousa_2002 | not_relevant | 0 | 0 | The text is a general review introduction discussing the history and classification of LMWHs, including a brief mention of parnaparin, but it contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Petrikov_2020 | irrelevant | 2 | 0 | The paper is a review analyzing pharmacokinetic features generally but does not provide specific quantitative PK parameter values for parnaparin in the evidence. |
| PD | Petrikov_2020 | not_relevant | 1 | 0 | The text is a review summarizing general pharmacokinetic and pharmacodynamic features of LMWHs without providing specific numeric PD parameters or exposure-response data for parnaparin. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for parnaparin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
