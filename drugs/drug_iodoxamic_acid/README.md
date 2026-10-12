<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iodoxamic acid&quot;}]"></div>

# iodoxamic acid

- **generic name:** iodoxamic acid
- **ATC codes:** `V08AC01`
- **DrugBank:** [DB13539](https://go.drugbank.com/drugs/DB13539) · **PubChem:** not captured
- **molar mass:** 1287.925 g/mol (C26H26I6N2O10) — DrugBank
- **groups:** experimental

## About

Iodoxamic acid is an iodinated, water-soluble X-ray contrast agent that is taken up by the liver and was used to visualise the biliary tract during imaging examinations. It is no longer in routine clinical use; it is currently regarded as an experimental compound and is not an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6062332](https://www.wikidata.org/wiki/Q6062332) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iodoxamic acid | parent | 1287.92 | C26H26I6N2O10 | DrugBank | — | Lin_1978 |
| iodoxamic_acid | metabolite | 1287.92 | C26H26I6N2O10 | DrugBank | — | Lin_1978 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:17 | 0:35 | 0/2/0 | 0/0/0 | 0/0/0 | 8,437/910 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lin_1978_reference](drugs/drug_iodoxamic_acid/IodoxamicAcid_Lin1978_reference.md) | — | 1-compartment (no model) | 1 | Lin SK et al., Pharmacokinetics of iodoxamic acid in r…, Journal of pharmaceutical s… (1978) | [10.1002/jps.2600670715](https://doi.org/10.1002/jps.2600670715) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Moss_1980_reference](drugs/drug_iodoxamic_acid/IodoxamicAcid_Moss1980_reference.md) | — | parent + metabolite (no model) | 0 | Moss AA et al., Gastrointestinal radiology. Pharmacokin…, Investigative radiology (1980) | [10.1097/00004424-198011001-00028](https://doi.org/10.1097/00004424-198011001-00028) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lin_1978.pdf` | Lin SK et al., Pharmacokinetics of iodoxamic acid in r…, Journal of pharmaceutical s… (1978) | popPK | 6 | [10.1002/jps.2600670715](https://doi.org/10.1002/jps.2600670715) | [96248](https://pubmed.ncbi.nlm.nih.gov/96248) | Reports numeric capacity-limited PK parameters (Vmax, Km) for iodoxamic acid in rhesus monkeys directly in the abstract, though no CL/V values. |
| `Moss_1980.pdf` | Moss AA et al., Gastrointestinal radiology. Pharmacokin…, Investigative radiology (1980) | popPK | 6 | [10.1097/00004424-198011001-00028](https://doi.org/10.1097/00004424-198011001-00028) | [6894137](https://pubmed.ncbi.nlm.nih.gov/6894137) | PK study of iodoxamic acid in rhesus monkeys with numeric parameters (Vmax, unbound fractions) present, though no standard CL/V/compartmental values. |

<sub>queue written 2026-10-07T22:17:47.804286+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Moss_1979 | irrelevant | 0 | 0 | The subject drug is iopanoic acid in rhesus monkeys; iodoxamic acid is only mentioned as the origin of the infusion method, with no PK parameters for iodoxamic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:17 UTC</sub>
