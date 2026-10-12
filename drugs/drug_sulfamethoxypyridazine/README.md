<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfamethoxypyridazine&quot;}]"></div>

# sulfamethoxypyridazine

- **generic name:** sulfamethoxypyridazine
- **ATC codes:** `J01ED05`
- **DrugBank:** [DB13773](https://go.drugbank.com/drugs/DB13773) · **PubChem:** not captured
- **molar mass:** 280.3 g/mol (C11H12N4O3S) — DrugBank
- **groups:** investigational

## About

Sulfamethoxypyridazine is a long-acting sulfonamide antibiotic used to treat bacterial infections. It is currently classed as investigational and does not appear to have an authorised marketing status in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7636177](https://www.wikidata.org/wiki/Q7636177) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sulfamethoxypyridazine | parent | 280.3 | C11H12N4O3S | DrugBank | — | Abdennebi_1994 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:11 | 1:01 | 0/2/0 | 0/0/0 | 0/0/0 | 46,453/4,099 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Abdennebi_1994_reference](drugs/drug_sulfamethoxypyridazine/Sulfamethoxypyridazine_Abdennebi1994_reference.md) | — | 1-compartment (no model) | 13 | Abdennebi EH et al., [Pharmacokinetics and plasma protein bi…, Revue d'elevage et de medec… (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kassem_1981_reference](drugs/drug_sulfamethoxypyridazine/Sulfamethoxypyridazine_Kassem1981_reference.md) | — | 1-compartment (no model) | 0 | Kassem AA et al., Biological availability of sulfamethoxy…, Die Pharmazie (1981) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kassem_1981.pdf` | Kassem AA et al., Biological availability of sulfamethoxy…, Die Pharmazie (1981) | popPK | 7 | not captured | [7330085](https://pubmed.ncbi.nlm.nih.gov/7330085) | The study reports quantitative PK parameters (availability rate constants, K1, and relative bioavailability ratios) for sulfamethoxypyridazine in humans using a one-compartment model, though specific clearance/volume numbers are not explicitly listed in the abstract text. |

<sub>queue written 2026-10-07T11:11:08.493717+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study investigates the toxic effects and mechanisms of sulfamethoxypyridazine on algae (Scenedesmus obliquus) rather than its pharmacokinetic disposition. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:11 UTC</sub>
