<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03C&quot;,&quot;href&quot;:&quot;atc/A03C.md&quot;},{&quot;label&quot;:&quot;emepronium&quot;}]"></div>

# emepronium

- **generic name:** emepronium
- **ATC codes:** `A03CA30`, `G04BD01`
- **DrugBank:** [DB13505](https://go.drugbank.com/drugs/DB13505) · **PubChem:** not captured
- **molar mass:** 282.45 g/mol (C20H28N) — DrugBank
- **groups:** experimental

## About

Emepronium is an anticholinergic (muscarinic antagonist) drug that was used as a urological agent for urinary frequency and incontinence, and in combination products for functional gastrointestinal disorders. It appears to be no longer in routine use, being classed as experimental, with no EU authorisation on record.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27247669](https://www.wikidata.org/wiki/Q27247669) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:25 | 1:31 | 0/1/0 | 0/0/0 | 0/0/0 | 12,720/3,887 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Pilbrant_1985_reference](drugs/drug_emepronium/Emepronium_Pilbrant1985_reference.md) | — | 1-compartment (no model) | 0 | Pilbrant A et al., Pharmacokinetics and pharmacodynamics o…, Acta pharmacologica et toxi… (1985) | [10.1111/j.1600-0773.1985.tb01292.x](https://doi.org/10.1111/j.1600-0773.1985.tb01292.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=emepronium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM5 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pilbrant_1985.pdf` | Pilbrant A et al., Pharmacokinetics and pharmacodynamics o…, Acta pharmacologica et toxi… (1985) | popPK | 10 | [10.1111/j.1600-0773.1985.tb01292.x](https://doi.org/10.1111/j.1600-0773.1985.tb01292.x) | [4024956](https://pubmed.ncbi.nlm.nih.gov/4024956) | The abstract explicitly reports quantitative PK parameters including triexponential half-lives, central volume, and total serum clearance for emepronium in humans. |
| `Alberts_1995.pdf` | Alberts P, Classification of the presynaptic musca…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7616431](https://www.ncbi.nlm.nih.gov/pubmed/7616431) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T13:24:04.008036+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abbiati_1988 | not_relevant | 1 | 2 | The paper reports in vitro receptor binding affinities (IC50) for emepronium, which are pharmacological properties but do not constitute a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Alberts_1995 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Alberts_1995 | not_relevant | 0 | 0 | The paper focuses on receptor subtype classification in guinea pig bladder and does not mention emepronium or report any exposure-response or dose-response data for it. |
| popPK | Hallén_1979 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 13:24 UTC</sub>
