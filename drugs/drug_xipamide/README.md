<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;xipamide&quot;}]"></div>

# xipamide

- **generic name:** xipamide
- **ATC codes:** `C03BA10`
- **DrugBank:** [DB13803](https://go.drugbank.com/drugs/DB13803) · **PubChem:** not captured
- **molar mass:** 354.81 g/mol (C15H15ClN2O4S) — DrugBank
- **groups:** investigational

## About

Xipamide is a diuretic and antihypertensive drug used to treat high blood pressure and fluid retention. It is not an approved medicine today and is considered investigational, with no authorisation recorded in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q600951](https://www.wikidata.org/wiki/Q600951) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:31 | 2:18 | 0/1/0 | 0/0/0 | 0/0/0 | 41,698/4,308 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Diembeck_1982_reference](drugs/drug_xipamide/Xipamide_Diembeck1982_reference.md) | — | 1-compartment (no model) | 0 | Diembeck W et al., [Pharmacokinetics of xipamide and triam…, Arzneimittel-Forschung (1982) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Diembeck_1982.pdf` | Diembeck W et al., [Pharmacokinetics of xipamide and triam…, Arzneimittel-Forschung (1982) | popPK | 8 | not captured | [6891256](https://pubmed.ncbi.nlm.nih.gov/6891256) | The study reports quantitative pharmacokinetic parameters (terminal elimination half-life) for xipamide in healthy volunteers, assuming a two-compartment model. |

<sub>queue written 2026-10-06T17:28:52.646942+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abd_2016 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying drug concentrations in bulk and dosage forms, containing no pharmacodynamic, exposure-response, or dose-response data. |
| PD | Abd_2023 | not_relevant | 0 | 0 | The paper describes analytical methods (spectrophotometry) for quantifying drug concentrations in mixtures, not pharmacodynamic or exposure-response relationships. |
| PD | Barakat_2023 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for quantifying xipamide concentration, not a pharmacodynamic or exposure-response relationship. |
| PD | Fares_2022 | not_relevant | 0 | 0 | The paper describes analytical methods (UPLC and TLC) for quantifying xipamide and triamterene in dosage forms, containing no pharmacodynamic or exposure-response data. |
| PD | Hutcheon_1986 | not_relevant | 1 | 0 | The text is a qualitative review stating that responses generally follow concentration-time curves but provides no numeric PD parameters, dose-response data, or specific exposure-response analysis for xipamide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:28 UTC</sub>
