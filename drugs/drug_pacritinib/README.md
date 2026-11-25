<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pacritinib&quot;}]"></div>

# pacritinib

- **generic name:** pacritinib
- **ATC codes:** `L01EJ03`
- **DrugBank:** [DB11697](https://go.drugbank.com/drugs/DB11697) · **PubChem:** [CID 46216796](https://pubchem.ncbi.nlm.nih.gov/compound/46216796)
- **molar mass:** 472.589 g/mol (C28H32N4O3) — DrugBank
- **groups:** approved, investigational

## About

Pacritinib is a protein kinase inhibitor used to treat myelofibrosis. It is administered orally in capsule form. The drug is approved for use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3888693](https://www.wikidata.org/wiki/Q3888693), [Wikipedia](https://en.wikipedia.org/wiki/Pacritinib?oldid=1377170292) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Buckley_2026_QTcF](drugs/drug_pacritinib/pd_Buckley_2026_QTcF.md) | QT interval ← pacritinib · inhibition effect | — | Buckley SA et al., Pacritinib Impact on QT Interval: Resul…, Clinical pharmacology in dr… (2026) | [10.1002/cpdd.70070](https://doi.org/10.1002/cpdd.70070) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:06 | 0:04 | 0/0/0 | 0/1/0 | 0/0/0 | 4,353/178 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Buckley_2026 | irrelevant | 0 | 0 | This is a Thorough QT (TQT) study focused on cardiac safety (QT interval prolongation) and does not report population pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Buckley_2026 | not_relevant | 0 | 0 | The paper evaluates the cardiac safety of pacritinib on the QT interval in a general population but does not report any pharmacogenomic effects (e.g., based on genotypes or phenotypes) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | This is a human efficacy and safety meta-analysis, with no pacritinib disposition parameters reported. |
| popPK | Gerds_2020 | irrelevant | 2 | 0 | The paper is a clinical dose-finding trial focused on efficacy and safety, and while it mentions PK modeling to support dosing, it does not report quantitative population-pharmacokinetic parameters (CL, V, etc.) in the provided evidence. |
| PGx | Gerds_2020 | not_relevant | 0 | 0 | The paper reports clinical dose-finding and safety/efficacy data for pacritinib but does not mention gene variants or pharmacogenomic effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpacritinib%5D&body=Drug%3A%20pacritinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pacritinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
