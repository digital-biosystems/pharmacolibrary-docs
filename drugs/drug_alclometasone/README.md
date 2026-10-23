<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;alclometasone&quot;}]"></div>

# alclometasone

- **generic name:** alclometasone
- **ATC codes:** `D07AB10`, `S01BA10`
- **DrugBank:** [DB00240](https://go.drugbank.com/drugs/DB00240) · **PubChem:** [CID 5311000](https://pubchem.ncbi.nlm.nih.gov/compound/5311000)
- **molar mass:** 408.916 g/mol (C22H29ClO5) — DrugBank
- **groups:** approved

## About

Alclometasone is a moderately potent topical corticosteroid used to treat inflammatory skin conditions such as dermatitis, including on the face, scalp, legs, and hands. It is an approved medicine, applied to the skin, and is also listed for ophthalmic anti-inflammatory use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4713192](https://www.wikidata.org/wiki/Q4713192) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 21:02 | 0:32 | 0/0/0 | 0/0/0 | 0/0/0 | 9,550/281 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sakuma_2001.pdf` | Sakuma S et al., Tacrolimus suppressed the production of…, International immunopharmac… (2001) | pd | 4 | [10.1016/s1567-5769(01)00059-5](https://doi.org/10.1016/s1567-5769(01)00059-5) | [11407316](https://www.ncbi.nlm.nih.gov/pubmed/11407316) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T21:01:59.713253+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lax_2022 | irrelevant | 0 | 0 | This is a systematic review of clinical trials evaluating the efficacy and safety of topical corticosteroid strategies for eczema, and it does not report any pharmacokinetic parameters for alclometasone or other specific agents. |
| popPK | Morresi_1990 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing two topical steroids and reports no pharmacokinetic parameters such as clearance or volume of distribution. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
