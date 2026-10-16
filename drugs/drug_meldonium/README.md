<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;meldonium&quot;}]"></div>

# meldonium

- **generic name:** meldonium
- **ATC codes:** `C01EB22`
- **DrugBank:** [DB13723](https://go.drugbank.com/drugs/DB13723) · **PubChem:** not captured
- **molar mass:** 146.19 g/mol (C6H14N2O2) — DrugBank
- **groups:** investigational

## About

Meldonium is a cardiac therapy agent developed for heart-related conditions such as coronary heart disease. It is considered investigational in major Western databases and is not authorised in the European Union; it is used mainly in Eastern Europe and Russia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4289752](https://www.wikidata.org/wiki/Q4289752) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:41 | 0:16 | 0/1/0 | 0/0/0 | 0/0/0 | 6,160/508 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Forsdahl_2018_reference](drugs/drug_meldonium/Meldonium_Forsdahl2018_reference.md) | — | 1-compartment (no model) | 0 | Forsdahl G et al., Urinary excretion studies of meldonium…, Journal of pharmaceutical a… (2018) | [10.1016/j.jpba.2018.08.053](https://doi.org/10.1016/j.jpba.2018.08.053) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Forsdahl_2018.pdf` | Forsdahl G et al., Urinary excretion studies of meldonium…, Journal of pharmaceutical a… (2018) | popPK | 10 | [10.1016/j.jpba.2018.08.053](https://doi.org/10.1016/j.jpba.2018.08.053) | [30189410](https://pubmed.ncbi.nlm.nih.gov/30189410) | The paper reports a three-compartment model and specific alpha, beta, and gamma half-life values for meldonium in human volunteers. |
| `Knych_2017.pdf` | Knych HK et al., Pharmacokinetics and pharmacodynamics o…, Drug testing and analysis (2017) | popPK | 10 | [10.1002/dta.2214](https://doi.org/10.1002/dta.2214) | [28513092](https://pubmed.ncbi.nlm.nih.gov/28513092) | The study reports quantitative non-compartmental pharmacokinetic parameters (half-life, Cmax) for meldonium in horses, with specific values provided in the abstract text. |

<sub>queue written 2026-10-14T23:41:35.834451+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Skotnikov_2015 | not_relevant | 0 | 0 | The paper is a clinical trial reporting qualitative safety and efficacy outcomes (e.g., delayed dyslipidemia, improved rheology) without any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:41 UTC</sub>
