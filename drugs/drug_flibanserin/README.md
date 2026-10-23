<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;flibanserin&quot;}]"></div>

# flibanserin

- **generic name:** flibanserin
- **ATC codes:** `G02CX02`
- **DrugBank:** [DB04908](https://go.drugbank.com/drugs/DB04908) · **PubChem:** [CID 6918248](https://pubchem.ncbi.nlm.nih.gov/compound/6918248)
- **molar mass:** 390.4021 g/mol (C20H21F3N4O) — DrugBank
- **groups:** approved, investigational

## About

Flibanserin is a drug used to treat low sexual desire in premenopausal women. It is approved in the United States but not authorised in the European Union, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415996](https://www.wikidata.org/wiki/Q415996) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Trocóniz_2012_VAS](drugs/drug_flibanserin/pd_Troc_niz_2012_VAS.md) | VAS "drowsiness" ← flibanserin · direct sigmoid Emax (Hill) effect | — | Trocóniz IF et al., Population pharmacokinetic/pharmacodyna…, Pharmaceutical research (2012) | [10.1007/s11095-011-0648-6](https://doi.org/10.1007/s11095-011-0648-6) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Simon_2020_Dizziness](drugs/drug_flibanserin/pd_Simon_2020_Dizziness.md) | Dizziness ← none · categorical (graded) response model | — | Simon JA et al., Effects of Alcohol Administered With Fl…, The journal of sexual medic… (2020) | [10.1016/j.jsxm.2019.10.004](https://doi.org/10.1016/j.jsxm.2019.10.004) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Simon_2020_Hypotension](drugs/drug_flibanserin/pd_Simon_2020_Hypotension.md) | Hypotension ← none · categorical (graded) response model | — | Simon JA et al., Effects of Alcohol Administered With Fl…, The journal of sexual medic… (2020) | [10.1016/j.jsxm.2019.10.004](https://doi.org/10.1016/j.jsxm.2019.10.004) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Simon_2020_Syncope](drugs/drug_flibanserin/pd_Simon_2020_Syncope.md) | Syncope ← none · categorical (graded) response model | — | Simon JA et al., Effects of Alcohol Administered With Fl…, The journal of sexual medic… (2020) | [10.1016/j.jsxm.2019.10.004](https://doi.org/10.1016/j.jsxm.2019.10.004) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=flibanserin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DRD4 (target), HTR1A (target), HTR2A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:08 | 1:03 | 0/0/0 | 2/0/0 | 0/0/0 | 13,644/774 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Newman-Tancredi_2008.pdf` | Newman-Tancredi A et al., Agonist and antagonist properties of an…, The international journal o… (2008) | pd | 4 | [10.1017/S1461145707008061](https://doi.org/10.1017/S1461145707008061) | [17897483](https://www.ncbi.nlm.nih.gov/pubmed/17897483) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T08:08:02.503288+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Dooley_2017 | not_relevant | 2 | 0 | The paper is a review of the FDA approval process and clinical trial outcomes for flibanserin, mentioning CYP3A4 interactions as safety concerns but not reporting any specific pharmacogenomic study or quantitative effect of a genetic variant on PK/PD parameters. |
| popPK | Newman-Tancredi_2008 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
