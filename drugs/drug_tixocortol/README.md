<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;tixocortol&quot;}]"></div>

# tixocortol

- **generic name:** tixocortol
- **ATC codes:** `A07EA05`, `R01AD07`
- **DrugBank:** [DB09091](https://go.drugbank.com/drugs/DB09091) · **PubChem:** [CID 162955](https://pubchem.ncbi.nlm.nih.gov/compound/162955)
- **molar mass:** 378.53 g/mol (C21H30O4S) — DrugBank
- **groups:** approved, withdrawn

## About

Tixocortol is a corticosteroid that was used as a locally acting intestinal anti-inflammatory agent for bowel conditions and as a nasal corticosteroid for topical nasal use. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7810486](https://www.wikidata.org/wiki/Q7810486) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:17 | 0:26 | 0/0/0 | 0/0/0 | 0/0/0 | 5,691/296 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chanoine_1984.pdf` | Chanoine F et al., Comparative pharmacokinetic studies of…, Journal of steroid biochemi… (1984) | popPK | 10 | [10.1016/0022-4731(84)90311-x](https://doi.org/10.1016/0022-4731(84)90311-x) | [6492803](https://pubmed.ncbi.nlm.nih.gov/6492803) | The study reports specific quantitative pharmacokinetic parameters (clearance and volume of distribution) for tixocortol pivalate in rats. |

<sub>queue written 2026-10-04T20:16:56.470566+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ardizzone_1998 | irrelevant | 0 | 0 | The paper is a clinical review of treatment guidelines for ulcerative colitis and does not report any pharmacokinetic parameters for tixocortol. |
| PD | Ardizzone_1998 | not_relevant | 1 | 0 | The text is a general review of treatment guidelines for distal ulcerative colitis and mentions tixocortol only as a class of topically acting corticosteroids without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| PGx | Ardizzone_2002 | not_relevant | 0 | 0 | The paper is a general review of ulcerative colitis therapies and mentions tixocortol pivalate only in the context of adverse event profiles, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Frankild_2001 | irrelevant | 0 | 0 | The study is a dermatological contact allergy test (GPMT) in guinea pigs and does not report any pharmacokinetic parameters. |
| PD | Frankild_2001 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response relationship in a contact allergy model (GPMT) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve. |
| popPK | Isaksson_2000 | irrelevant | 0 | 0 | The study is a patch-testing immunology study investigating cross-reactivity and dose-response in allergic patients, not a pharmacokinetic study. |
| PD | Isaksson_2000 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response pattern in patch testing (allergy) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for tixocortol. |
| popPK | Karp_1988 | irrelevant | 0 | 0 | The text is a brief news summary of clinical trials for enemas and contains no pharmacokinetic data or quantitative disposition parameters for tixocortol. |
| PD | Karp_1988 | not_relevant | 1 | 0 | The text is a brief review mentioning tixocortol as a new enema treatment but provides no pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Lelievre_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cyclooxygenase inhibition and does not report pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
