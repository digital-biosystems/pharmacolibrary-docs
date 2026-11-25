<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;hydroxyzine&quot;}]"></div>

# hydroxyzine

- **generic name:** hydroxyzine
- **ATC codes:** `N05BB01`
- **DrugBank:** [DB00557](https://go.drugbank.com/drugs/DB00557) · **PubChem:** [CID 3658](https://pubchem.ncbi.nlm.nih.gov/compound/3658)
- **molar mass:** 374.904 g/mol (C21H27ClN2O2) — DrugBank
- **groups:** approved, investigational

## About

Hydroxyzine is a first-generation antihistamine and anxiolytic used to treat itching, anxiety, insomnia, and nausea. It is usually taken by mouth in tablet or syrup form, with intramuscular injection also available for administration. The medication is widely used, having been among the most commonly prescribed drugs in the United States recently.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q421937](https://www.wikidata.org/wiki/Q421937), [Wikipedia](https://en.wikipedia.org/wiki/Hydroxyzine?oldid=1379310850) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:17 | 0:05 | 0/0/0 | 0/0/0 | 0/0/0 | 3,690/150 | einfracz / qwen3.8-27b | 4 | 4/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_1998.pdf` | Wang WX et al., "Conventional" antihistamines slow card…, Journal of cardiovascular p… (1998) | pd | 4 | [10.1097/00005344-199807000-00019](https://doi.org/10.1097/00005344-199807000-00019) | [9676731](https://www.ncbi.nlm.nih.gov/pubmed/9676731) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-23 22:17 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Di_2021 | irrelevant | 0 | 0 | The paper is a review of alcohol dehydrogenase enzymes and mentions hydroxyzine only as an example of a substrate, providing no original pharmacokinetic parameters or quantitative disposition data. |
| PGx | Di_2021 | not_relevant | 2 | 0 | The paper is a general review of Alcohol Dehydrogenase (ADH) enzymes and their role in drug metabolism, mentioning hydroxyzine only as an example of a substrate, without reporting specific pharmacogenomic data or PK/PD parameter changes for hydroxyzine. |
| PGx | Duvignaud_2020 | not_relevant | 0 | 0 | Hydroxyzine only appears as an exclusion criterion (QT risk) in a COVID-19 trial protocol; no pharmacogenomic PK/PD effect reported. |
| PGx | Fadel_2026 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on hydroxyzine PK/PD is reported; only drug-drug interaction concerns (CYP2D6 inhibition affecting flecainide, not hydroxyzine). |
| popPK | Hamelin_1998 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic characterization of CYP2D6 inhibition by hydroxyzine, reporting Ki values rather than pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Hamelin_1998 | not_relevant | 2 | 0 | The paper reports in vitro inhibition of CYP2D6 by hydroxyzine, which is a drug-drug interaction mechanism, not a pharmacogenomic effect (genotype-dependent change in PK/PD) of hydroxyzine itself. |
| PGx | Ivashchenko_2026 | not_relevant | 0 | 0 | Hydroxyzine is only mentioned as a co-prescribed anxiolytic; no gene variant effect on hydroxyzine PK/PD parameters is reported. |
| popPK | Paine_2022 | relevant | 9 | 2 | Population PK model of hydroxyzine (and its metabolite cetirizine) in horses, but numeric parameter values are not present in the provided evidence. |
| PGx | Rosu_2015 | not_relevant | 0 | 0 | Hydroxyzine is only mentioned as symptomatic treatment; no gene variant effect on its PK/PD is reported. |
| popPK | Szabo_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of [11C]pyrilamine, using hydroxyzine only as a competitive blocker to validate H1 receptor occupancy, not as the subject drug for PK parameter estimation. |
| PGx | Szabo_1993 | not_relevant | 0 | 0 | The paper describes the kinetic modeling of a radioligand ([11C]pyrilamine) in the brain and does not report any pharmacogenomic effects on the PK/PD of hydroxyzine. |
| popPK | Wang_1998 | irrelevant | 0 | 0 | The paper reports in-vitro pharmacodynamic data (QT prolongation potency) in isolated feline hearts, not pharmacokinetic disposition parameters. |
| PGx | Wang_1998 | not_relevant | 0 | 0 | The paper describes in vitro cardiac electrophysiology of antihistamines without investigating genetic variants or pharmacogenomic effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydroxyzine%5D&body=Drug%3A%20hydroxyzine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hydroxyzine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
