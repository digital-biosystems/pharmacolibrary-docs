<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M02A&quot;,&quot;href&quot;:&quot;atc/M02A.md&quot;},{&quot;label&quot;:&quot;suxibuzone&quot;}]"></div>

# suxibuzone

- **generic name:** suxibuzone
- **ATC codes:** `M02AA22`
- **DrugBank:** [DB13232](https://go.drugbank.com/drugs/DB13232) · **PubChem:** not captured
- **molar mass:** 438.473 g/mol (C24H26N2O6) — DrugBank
- **groups:** experimental

## About

Suxibuzone is a non-steroidal anti-inflammatory drug intended for topical treatment of joint and muscular pain. It appears only as an experimental compound and is not an established marketed medicine, so its current use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7650623](https://www.wikidata.org/wiki/Q7650623) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenylbutazone | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:45 | 0:22 | 0/1/0 | 0/0/0 | 0/0/0 | 27,430/2,179 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.333). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Delbeke_1993_reference](drugs/drug_suxibuzone/Suxibuzone_Delbeke1993_reference.md) | — | 1-compartment (no model) | 0 | Delbeke FT et al., The disposition of suxibuzone in the ho…, Journal of veterinary pharm… (1993) | [10.1111/j.1365-2885.1993.tb00175.x](https://doi.org/10.1111/j.1365-2885.1993.tb00175.x) |

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
| `Jaraiz_1999.pdf` | Jaraiz MV et al., Disposition and tolerance of suxibuzone…, Equine veterinary journal (1999) | popPK | 9 | [10.1111/j.2042-3306.1999.tb03841.x](https://doi.org/10.1111/j.2042-3306.1999.tb03841.x) | [10505957](https://pubmed.ncbi.nlm.nih.gov/10505957) | The paper reports quantitative pharmacokinetic parameters (MRT, Cmax) for the active metabolites (PBZ, OPBZ) of suxibuzone in horses, which constitute the disposition profile of the parent drug given the rapid elimination of the parent compound. |
| `Delbeke_1993.pdf` | Delbeke FT et al., The disposition of suxibuzone in the ho…, Journal of veterinary pharm… (1993) | popPK | 8 | [10.1111/j.1365-2885.1993.tb00175.x](https://doi.org/10.1111/j.1365-2885.1993.tb00175.x) | [8230399](https://pubmed.ncbi.nlm.nih.gov/8230399) | Reports quantitative pharmacokinetic parameters (half-life, terminal rate constant, peak concentration) for the major metabolite phenylbutazone after suxibuzone administration in horses. |

<sub>queue written 2026-10-07T01:45:02.870290+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bognanni_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of a suxibuzone conjugate's effect on proteasome activity, reporting no pharmacokinetic parameters (CL, V, t1/2, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:45 UTC</sub>
