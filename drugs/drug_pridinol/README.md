<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;pridinol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pridinol_Minamijima2026_reference&quot;,&quot;label&quot;:&quot;Minamijima_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pridinol/Pridinol_Minamijima2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pridinol

- **generic name:** pridinol
- **ATC codes:** `M03BX03`
- **DrugBank:** [DB13642](https://go.drugbank.com/drugs/DB13642) · **PubChem:** not captured
- **molar mass:** 295.426 g/mol (C20H25NO) — DrugBank
- **groups:** investigational

## About

Pridinol is a centrally acting muscle relaxant used for painful muscle spasms and related musculoskeletal conditions. It is considered investigational in DrugBank and is not authorised in the European Union; it appears to be used only in a few countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q827515](https://www.wikidata.org/wiki/Q827515) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pridinol | parent | 295.426 | C20H25NO | DrugBank | — | Minamijima_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:43 | 0:55 | 1/0/0 | 0/0/0 | 0/0/0 | 21,743/2,044 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Minamijima_2026_reference](drugs/drug_pridinol/Pridinol_Minamijima2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Minamijima Y et al., Plasma and Urine Pharmacokinetics of In…, Journal of veterinary pharm… (2026) | [10.1111/jvp.70029](https://doi.org/10.1111/jvp.70029) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Minamijima_2026.pdf` | Minamijima Y et al., Plasma and Urine Pharmacokinetics of In…, Journal of veterinary pharm… (2026) | popPK | 10 | [10.1111/jvp.70029](https://doi.org/10.1111/jvp.70029) | [41065090](https://pubmed.ncbi.nlm.nih.gov/41065090) | The study reports specific quantitative pharmacokinetic parameters (clearance, volume of distribution) for pridinol in horses. |

<sub>queue written 2026-10-07T02:43:34.259958+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:43 UTC</sub>
