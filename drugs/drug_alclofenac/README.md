<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;alclofenac&quot;}]"></div>

# alclofenac

- **generic name:** alclofenac
- **ATC codes:** `M01AB06`
- **DrugBank:** [DB13167](https://go.drugbank.com/drugs/DB13167) · **PubChem:** [CID 30951](https://pubchem.ncbi.nlm.nih.gov/compound/30951)
- **molar mass:** 226.66 g/mol (C11H11ClO3) — DrugBank
- **groups:** approved, withdrawn

## About

It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q965999](https://www.wikidata.org/wiki/Q965999) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alclofenac | parent | 226.66 | C11H11ClO3 | DrugBank | [30951](https://pubchem.ncbi.nlm.nih.gov/compound/30951) | Delbeke_1994 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:38 | 0:30 | 0/1/0 | 0/0/0 | 0/0/0 | 6,633/615 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Delbeke_1994_reference](drugs/drug_alclofenac/Alclofenac_Delbeke1994_reference.md) | — | 1-compartment (no model) | 2 | Delbeke FT et al., Disposition of human drug preparations…, Journal of veterinary pharm… (1994) | [10.1111/j.1365-2885.1994.tb00258.x](https://doi.org/10.1111/j.1365-2885.1994.tb00258.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alclofenac).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PTGS2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Delbeke_1994.pdf` | Delbeke FT et al., Disposition of human drug preparations…, Journal of veterinary pharm… (1994) | popPK | 10 | [10.1111/j.1365-2885.1994.tb00258.x](https://doi.org/10.1111/j.1365-2885.1994.tb00258.x) | [7853459](https://pubmed.ncbi.nlm.nih.gov/7853459) | The paper reports quantitative pharmacokinetic parameters (ka, t1/2, Cmax) for alclofenac in horses. |
| `Knights_2009.pdf` | Knights KM et al., Aldosterone glucuronidation by human li…, British journal of clinical… (2009) | pgx | 7 | [10.1111/j.1365-2125.2009.03469.x](https://doi.org/10.1111/j.1365-2125.2009.03469.x) | [19740398](https://www.ncbi.nlm.nih.gov/pubmed/19740398) | metadata signals extractable PGX data (UGT1A10, PK/PD-context) |

<sub>queue written 2026-10-07T00:38:12.723000+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Knights_2009 | not_relevant | 0 | 0 | The paper focuses on aldosterone glucuronidation and NSAID inhibition, but does not report pharmacogenomic effects on the PK/PD parameters of alclofenac itself. |
| popPK | Smith_1980 | irrelevant | 0 | 0 | This is an in vitro study on leukocyte chemokinesis, not a pharmacokinetic study, and reports no disposition parameters for alclofenac. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:38 UTC</sub>
