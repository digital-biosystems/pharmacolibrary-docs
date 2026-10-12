<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01A&quot;,&quot;href&quot;:&quot;atc/J01A.md&quot;},{&quot;label&quot;:&quot;rolitetracycline&quot;}]"></div>

# rolitetracycline

- **generic name:** rolitetracycline
- **ATC codes:** `J01AA09`
- **DrugBank:** [DB01301](https://go.drugbank.com/drugs/DB01301) · **PubChem:** [CID 54682938](https://pubchem.ncbi.nlm.nih.gov/compound/54682938)
- **molar mass:** 527.5662 g/mol (C27H33N3O8) — DrugBank
- **groups:** approved, withdrawn

## About

Rolitetracycline is a tetracycline antibiotic used to treat bacterial infections. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3940320](https://www.wikidata.org/wiki/Q3940320) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rolitetracycline | parent | 527.566 | C27H33N3O8 | DrugBank | [54682938](https://pubchem.ncbi.nlm.nih.gov/compound/54682938) | Lashev_1995 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:07 | 0:11 | 0/1/0 | 0/0/0 | 0/0/0 | 12,266/1,177 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Lashev_1995_reference](drugs/drug_rolitetracycline/Rolitetracycline_Lashev1995_reference.md) | — | 1-compartment (no model) | 1 | Lashev L et al., Species specific pharmacokinetics of ro…, Zentralblatt fur Veterinarm… (1995) | [10.1111/j.1439-0442.1995.tb00371.x](https://doi.org/10.1111/j.1439-0442.1995.tb00371.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lashev_1995.pdf` | Lashev L et al., Species specific pharmacokinetics of ro…, Zentralblatt fur Veterinarm… (1995) | popPK | 9 | [10.1111/j.1439-0442.1995.tb00371.x](https://doi.org/10.1111/j.1439-0442.1995.tb00371.x) | [8578898](https://pubmed.ncbi.nlm.nih.gov/8578898) | The study reports quantitative PK parameters (half-life, model type) for rolitetracycline in multiple animal species, with specific half-life values provided in the text. |
| `Wójcicki_1981.pdf` | Wójcicki J et al., Effect of unilateral nephrectomy on the…, Arzneimittel-Forschung (1981) | popPK | 8 | not captured | [7197954](https://pubmed.ncbi.nlm.nih.gov/7197954) | The study reports pharmacokinetic analysis for rolitetracycline in rabbits, but specific numeric values for clearance (CL) and volume (V) are not explicitly listed, only derived metrics like AUC change and half-life. |

<sub>queue written 2026-10-07T10:07:19.547727+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wójcicki_1981 | relevant | 8 | 2 | The study reports pharmacokinetic analysis for rolitetracycline in rabbits, but specific numeric values for clearance (CL) and volume (V) are not explicitly listed, only derived metrics like AUC change and half-life. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:07 UTC</sub>
