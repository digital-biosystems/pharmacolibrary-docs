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

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="monkey" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Lin_1978_reference](drugs/drug_iodoxamic_acid/IodoxamicAcid_Lin1978_reference.md) | — | 1-compartment (no model) | 1 | Lin SK et al., Pharmacokinetics of iodoxamic acid in r…, Journal of pharmaceutical s… (1978) | [10.1002/jps.2600670715](https://doi.org/10.1002/jps.2600670715) |
| <span class="pk-rf" hidden data-species="monkey" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Moss_1980_reference](drugs/drug_iodoxamic_acid/IodoxamicAcid_Moss1980_reference.md) | — | parent + metabolite (no model) | 0 | Moss AA et al., Gastrointestinal radiology. Pharmacokin…, Investigative radiology (1980) | [10.1097/00004424-198011001-00028](https://doi.org/10.1097/00004424-198011001-00028) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:17 | 0:35 | 0/2/0 | 0/0/0 | 0/0/0 | 8,437/910 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 22:17 UTC</sub>
