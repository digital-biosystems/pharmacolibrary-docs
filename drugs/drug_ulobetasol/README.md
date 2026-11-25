<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05A&quot;,&quot;href&quot;:&quot;atc/D05A.md&quot;},{&quot;label&quot;:&quot;ulobetasol&quot;}]"></div>

# ulobetasol

- **generic name:** ulobetasol
- **ATC codes:** `D05AX55`, `D07AC21`
- **DrugBank:** [DB00596](https://go.drugbank.com/drugs/DB00596) · **PubChem:** [CID 5311167](https://pubchem.ncbi.nlm.nih.gov/compound/5311167)
- **molar mass:** 428.9 g/mol (C22H27ClF2O4) — DrugBank
- **groups:** approved, investigational

## About

Ulobetasol is a potent topical corticosteroid indicated for the treatment of psoriasis. It is administered topically in forms such as creams, lotions, and ointments. The drug is approved and available as a generic medication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7879715](https://www.wikidata.org/wiki/Q7879715), [Wikipedia](https://en.wikipedia.org/wiki/Ulobetasol?oldid=1332227423) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Scott_2001_overall_disease_severity](drugs/drug_ulobetasol/pd_Scott_2001_overall_disease_severity.md) | overall disease severity · model not identified | — | Scott LJ et al., Calcipotriol ointment. A review of its…, American journal of clinica… (2001) | [10.2165/00128071-200102020-00008](https://doi.org/10.2165/00128071-200102020-00008) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 08:18 | 0:05 | 0/0/0 | 0/1/0 | 0/0/0 | 7,504/379 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carvajal-Vidal_2020 | irrelevant | 0 | 0 | The study focuses on Halobetasol propionate, not ulobetasol, and does not report systemic population PK parameters for ulobetasol. |
| PGx | Carvajal-Vidal_2020 | not_relevant | 0 | 0 | The paper discusses Halobetasol propionate, not ulobetasol, and focuses on formulation development without any pharmacogenomic analysis. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | The paper is a clinical review of topical corticosteroid usage strategies for eczema and does not contain any pharmacokinetic data or parameters for ulobetasol. |
| PGx | Lax_2022 | not_relevant | 0 | 0 | The paper is a clinical review of treatment strategies for eczema and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of ulobetasol. |
| popPK | Nalwade_2015 | irrelevant | 0 | 0 | The study focuses on the analytical quantification of halobetasol propionate (not ulobetasol) in dosage forms and contains no pharmacokinetic data. |
| PGx | Nalwade_2015 | not_relevant | 0 | 0 | The paper describes a stability-indicating LC method for halobetasol propionate, not ulobetasol, and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Reddy_2020 | irrelevant | 0 | 0 | The paper is a review of halobetasol propionate and tazarotene, not ulobetasol, and contains no pharmacokinetic parameters for ulobetasol. |
| PGx | Reddy_2020 | not_relevant | 0 | 0 | The paper discusses halobetasol propionate and tazarotene, and does not report any pharmacogenomic effects on PK or PD parameters of ulobetasol. |
| popPK | Scott_2001 | irrelevant | 0 | 0 | The paper is a review of calcipotriol, and ulobetasol is mentioned only as a comparator agent in combination therapy, with no PK data for ulobetasol. |
| PGx | Scott_2001 | not_relevant | 0 | 0 | The paper reviews the efficacy and safety of calcipotriol, not ulobetasol, and contains no pharmacogenomic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bulobetasol%5D&body=Drug%3A%20ulobetasol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ulobetasol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
