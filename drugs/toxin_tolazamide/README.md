<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Tolazamide&quot;}]"></div>

# Tolazamide

- **generic name:** Tolazamide
- **T3DB:** [T3D4765](http://www.t3db.ca/toxins/T3D4765) · **DrugBank:** [DB00839](https://go.drugbank.com/drugs/DB00839) · **PubChem:** [CID 5503](https://pubchem.ncbi.nlm.nih.gov/compound/5503)
- **groups:** approved

## About

A sulphonylurea hypoglycemic agent with actions and uses similar to those of chlorpropamide.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** rapidly and well absorbed from the gastrointestinal tract.
- **Sources and uses:** For use as an adjunct to diet to lower the blood glucose in patients with non-insulin dependent diabetes mellitus (Type II) whose hyperglycemia cannot be satisfactorily controlled by diet alone.
- **Mechanism of toxicity:** Sulfonylureas likely bind to ATP-sensitive potassium-channel receptors on the pancreatic cell surface, reducing potassium conductance and causing depolarization of the membrane. Depolarization stimulates calcium ion influx through voltage-sensitive calcium channels, raising intracellular concentrations of calcium ions, which induces the secretion, or exocytosis, of insulin.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4765">T3DB T3D4765</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 1156-19-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:156131">ChEBI 156131</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Abidi_1982_none](drugs/toxin_tolazamide/pd_Abidi_1982_none.md) | none · model not identified | — | Abidi SE et al., Pharmacokinetic interactions of tolazam…, Journal of pharmaceutical s… (1982) | [10.1002/jps.2600710107](https://doi.org/10.1002/jps.2600710107) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tolazamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCC8 (blocker), KCNJ10 (blocker).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 04:19 | 3:29 | 0/0/0 | 0/1/0 | 0/0/0 | 90,348/3,789 | einfracz / qwen3.8-flash-next | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 22 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abidi_1982.pdf` | Abidi SE et al., Pharmacokinetic interactions of tolazam…, Journal of pharmaceutical s… (1982) | popPK | 9 | [10.1002/jps.2600710107](https://doi.org/10.1002/jps.2600710107) | [7057374](https://pubmed.ncbi.nlm.nih.gov/7057374) | The paper reports a two-compartment pharmacokinetic model of tolazamide in dogs, but the specific numeric values for rate constants and volumes are not present in the text. |

<sub>queue written 2026-11-13 04:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abidi_1982 | relevant | 9 | 2 | The paper reports a two-compartment pharmacokinetic model of tolazamide in dogs, but the specific numeric values for rate constants and volumes are not present in the text. |
| popPK | Davis_1981 | irrelevant | 0 | 0 | The paper is a review of water metabolism in diabetes that mentions tolazamide only as a comparator affecting renal free water clearance, providing no quantitative toxicokinetic parameters. |
| popPK | Davis_1982 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on free water clearance effects, not a toxicokinetic study, and reports no pharmacokinetic parameters (e.g., half-life, clearance, Vd). |
| popPK | Davis_1986 | irrelevant | 0 | 0 | The paper studies urinary diluting capacity in diabetic patients using tolazamide as a comparator drug, reporting no quantitative toxicokinetic parameters for tolazamide. |
| popPK | Gwilt_1991 | irrelevant | 1 | 0 | The paper is a review article summarizing effects of diabetes on pharmacokinetics, mentioning tolazamide only qualitatively regarding delayed absorption without providing any quantitative kinetic parameters or values. |
| popPK | Harrower_1996 | irrelevant | 2 | 0 | The paper is a qualitative review of clinical recommendations for antidiabetic drugs in renal insufficiency and contains no quantitative pharmacokinetic parameters for tolazamide. |
| popPK | Kabadi_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on tolazamide in type I diabetes reporting only glucose and HbA1 outcomes, with no quantitative toxicokinetic parameters. |
| popPK | King_1985 | irrelevant | 0 | 0 | The paper describes tolazamide as a pharmacological agent modifying insulin receptors in vitro, providing no quantitative toxicokinetic parameters (rates, half-lives, partition coefficients, or clearances) for tolazamide itself. |
| popPK | McCormick_1986 | irrelevant | 2 | 0 | The study investigates metabolic effects (gluconeogenesis/ketogenesis) in in vitro liver preparations, not kinetic parameters like clearance or half-life. |
| popPK | Melchior_1996 | irrelevant | 0 | 0 | Tolazamide is mentioned only as a search term and comparator in a review of metformin, with no kinetic parameters reported for tolazamide itself. |
| popPK | Ozawa_2003 | irrelevant | 0 | 0 | The paper is a historical review of antidiabetic drug development in Japan and mentions tolazamide only as one of many drugs introduced, without reporting any kinetic parameters. |
| PGx | PMID36049896_2023 | not_relevant | 0 | 0 | The paper is a guideline for G6PD genotype and medication use generally (likely focusing on oxidative stress/hemolysis), but does not report specific PK/PD parameters for tolazamide specifically. |
| popPK | Prendergast_1984 | irrelevant | 0 | 0 | Tolazamide is only mentioned as a comparator drug in a review of glyburide and glipizide, with no kinetic data reported for tolazamide. |
| popPK | RENNIE_1963 | irrelevant | 2 | 0 | The study is a clinical efficacy comparison reporting only relative potency and clinical outcomes (blood sugar, glycosuria), with no quantitative pharmacokinetic parameters (half-life, clearance, etc.) for tolazamide. |
| popPK | Severin_1987 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting a nitrosamine impurity in tolazamide, containing no toxicokinetic parameters. |
| popPK | Skillman_1981 | irrelevant | 2 | 0 | The paper is a review of the pharmacology of sulfonylureas that mentions tolazamide but provides no specific quantitative toxicokinetic parameters or values in the provided text. |
| popPK | Skillman_1986 | irrelevant | 0 | 0 | The paper reports on the effect of tolazamide on 2-deoxyglucose distribution and insulin levels, not on the kinetic parameters of tolazamide itself. |
| popPK | Tsuchiya_1984 | irrelevant | 2 | 2 | The paper reports protein binding percentages for tolazamide in vitro, which are pharmacological interaction data rather than quantitative toxicokinetic disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Wang_1989 | irrelevant | 0 | 0 | The paper investigates the mechanism of tolazamide action on glucose transporters in cultured cells, reporting fold-changes in mRNA and protein, not toxicokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btolazamide%5D&body=Drug%3A%20tolazamide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tolazamide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
