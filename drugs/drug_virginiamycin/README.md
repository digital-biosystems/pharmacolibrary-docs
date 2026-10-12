<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;virginiamycin&quot;}]"></div>

# virginiamycin

- **generic name:** virginiamycin
- **ATC codes:** `D06AX10`
- **DrugBank:** [DB11476](https://go.drugbank.com/drugs/DB11476) · **PubChem:** not captured
- **molar mass:** 1349.506 g/mol (C71H84N10O17) — DrugBank
- **groups:** experimental, vet_approved

## About

Virginiamycin is a group of antibiotics that act by inhibiting protein synthesis, and it has been used topically on the skin to treat bacterial infections. It is approved for veterinary use and remains only an experimental topical antibiotic in human medicine, so it is not widely used in people.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3560696](https://www.wikidata.org/wiki/Q3560696) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:54 | 0:37 | 0/0/0 | 1/0/0 | 0/0/0 | 15,797/4,121 | openai / gpt-6-luna | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span> | [Tedeschi_2018_LAI1_3_2](drugs/drug_virginiamycin/pd_Tedeschi_2018_LAI1_3_2.md) | LAI1-3 ← virginiamycin · direct linear effect | — | Tedeschi LO et al., An assessment of the effectiveness of v…, Journal of animal science (2018) | [10.1093/jas/sky121](https://doi.org/10.1093/jas/sky121) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span> | [Tedeschi_2018_LAI_A](drugs/drug_virginiamycin/pd_Tedeschi_2018_LAI_A.md) | LAI A+ ← virginiamycin · direct linear effect | — | Tedeschi LO et al., An assessment of the effectiveness of v…, Journal of animal science (2018) | [10.1093/jas/sky121](https://doi.org/10.1093/jas/sky121) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span> | [Tedeschi_2018_ADG](drugs/drug_virginiamycin/pd_Tedeschi_2018_ADG.md) | ADG ← virginiamycin · direct linear effect | — | Tedeschi LO et al., An assessment of the effectiveness of v…, Journal of animal science (2018) | [10.1093/jas/sky121](https://doi.org/10.1093/jas/sky121) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span> | [Tedeschi_2018_LAI1_3](drugs/drug_virginiamycin/pd_Tedeschi_2018_LAI1_3.md) | LAI1-3 ← virginiamycin · direct linear effect | — | Tedeschi LO et al., An assessment of the effectiveness of v…, Journal of animal science (2018) | [10.1093/jas/sky121](https://doi.org/10.1093/jas/sky121) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cox_2005 | irrelevant | 0 | 0 | This is a human-health risk assessment, not a virginiamycin pharmacokinetic study, and reports no disposition parameters. |
| popPK | Ragheb_1979 | irrelevant | 0 | 0 | This is an in-vitro feed assay, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Rogers_1995 | irrelevant | 0 | 0 | This cattle feeding study reports performance and liver abscess outcomes, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
