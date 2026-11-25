<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;camazepam&quot;}]"></div>

# camazepam

- **generic name:** camazepam
- **ATC codes:** `N05BA15`
- **DrugBank:** [DB01489](https://go.drugbank.com/drugs/DB01489) · **PubChem:** [CID 37367](https://pubchem.ncbi.nlm.nih.gov/compound/37367)
- **molar mass:** 371.818 g/mol (C19H18ClN3O3) — DrugBank
- **groups:** experimental, illicit

## About

Camazepam is a benzodiazepine derivative used as an anxiolytic. It is administered orally in pill form and is well absorbed.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3651150](https://www.wikidata.org/wiki/Q3651150), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| camazepam | parent | 371.818 | C19H18ClN3O3 | DrugBank | [37367](https://pubchem.ncbi.nlm.nih.gov/compound/37367) | Legheand_1982 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Legheand_1982_reference](drugs/drug_camazepam/Camazepam_Legheand1982_reference.md) | — | 1-compartment (no model) | 3 | Legheand J et al., Pharmacokinetics of intravenous camazep…, Arzneimittel-Forschung (1982) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:00 | 0:03 | 1/0/0 | 0/0/0 | 0/0/0 | 3,650/374 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Legheand_1982 | relevant | 10 | 3 | The study reports PK parameters (half-life, model) for camazepam in dogs, but specific numeric values for clearance, volume, and rate constants are not explicitly listed in the provided text excerpt. |
| PGx | Legheand_1982 | not_relevant | 0 | 0 | The study reports pharmacokinetics of camazepam in dogs but contains no genetic variants, genotypes, or pharmacogenomic analysis. |
| popPK | Morino_1985 | irrelevant | 0 | 0 | The provided evidence contains only OCR metadata and no scientific content regarding camazepam pharmacokinetics. |
| PGx | Morino_1985 | not_relevant | 0 | 0 | The provided text consists solely of software metadata (GROBID) and contains no scientific content regarding camazepam pharmacogenomics. |
| popPK | Morino_1986 | irrelevant | 0 | 0 | The study focuses on receptor binding affinities and a receptor-mediated pharmacodynamic model (effect vs. brain levels) rather than reporting pharmacokinetic disposition parameters (CL, V, Q, etc.) for camazepam. |
| PGx | Morino_1986 | not_relevant | 0 | 0 | The paper describes a receptor-mediated pharmacodynamic model for camazepam in rats but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcamazepam%5D&body=Drug%3A%20camazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_camazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 19:59 UTC</sub>
