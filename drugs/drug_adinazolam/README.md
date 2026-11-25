<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;adinazolam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Adinazolam_Venkatakrishnan2005_reference&quot;,&quot;label&quot;:&quot;Venkatakrishnan_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# adinazolam

- **generic name:** adinazolam
- **ATC codes:** `N05BA07`
- **DrugBank:** [DB00546](https://go.drugbank.com/drugs/DB00546) · **PubChem:** [CID 37632](https://pubchem.ncbi.nlm.nih.gov/compound/37632)
- **molar mass:** 351.833 g/mol (C19H18ClN5) — DrugBank
- **groups:** experimental

## About

Adinazolam is a triazolobenzodiazepine tranquilizer with anxiolytic, anticonvulsant, sedative, and antidepressant properties. It was never approved for public use but has been sold as a designer drug.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q4682904](https://www.wikidata.org/wiki/Q4682904), [Wikipedia](https://en.wikipedia.org/wiki/Adinazolam?oldid=1316957230) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| adinazolam | parent | 351.833 | C19H18ClN5 | DrugBank | [37632](https://pubchem.ncbi.nlm.nih.gov/compound/37632) | Venkatakrishnan_2005 |
| N-desmethyl adinazolam | metabolite | 337.811 | C18H16ClN5 | PubChem | [119094](https://pubchem.ncbi.nlm.nih.gov/compound/119094) | Venkatakrishnan_2005 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Venkatakrishnan_2005_reference](drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Fleishaker_1991_percentage_decrements_in_digit_symbol_substitution](drugs/drug_adinazolam/pd_Fleishaker_1991_percentage_decrements_in_digit_symbol_substi.md) | percentage decrements in digit-symbol substitution ← N-desmethyladinazolam · direct sigmoid Emax (Hill) effect | — | Fleishaker JC et al., N-desmethyladinazolam pharmacokinetics…, Psychopharmacology (1991) | [10.1007/BF02244306](https://doi.org/10.1007/BF02244306) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 16:27 | 2:18 | 0/1/0 | 1/0/0 | 0/0/0 | 17,841/7,249 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Venkatakrishnan_2005.pdf` | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | popPK | 10 | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) | [15831776](https://pubmed.ncbi.nlm.nih.gov/15831776) | The abstract provides specific numeric values for volume of distribution, elimination half-life, and clearance for adinazolam in healthy volunteers. |
| `Kozlowski_1988.pdf` | Kozlowski MR, Inhibition of the binding and the behav…, Pharmacology, biochemistry,… (1988) | pd | 4 | [10.1016/0091-3057(88)90426-1](https://doi.org/10.1016/0091-3057(88)90426-1) | [2845442](https://www.ncbi.nlm.nih.gov/pubmed/2845442) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-23 16:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | File_1986 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study using a place-conditioning paradigm in rats to assess the appetitive/aversive properties of adinazolam, reporting no pharmacokinetic parameters. |
| PGx | File_1986 | not_relevant | 0 | 0 | The paper reports behavioral pharmacodynamics (place conditioning) in rats but does not involve gene variants or genotypes. |
| popPK | Fleishaker_1991 | irrelevant | 7 | 0 | The study reports PK of the metabolite N-desmethyladinazolam following direct administration of the metabolite, not adinazolam, and the provided evidence lacks specific numeric PK parameter values (CL, V, t1/2). |
| PGx | Fleishaker_1991 | not_relevant | 0 | 0 | The study describes standard PK/PD in healthy volunteers and does not investigate the effect of any gene variant or genotype on adinazolam or its metabolite. |
| popPK | Kozlowski_1988 | irrelevant | 0 | 0 | The study focuses on receptor binding and behavioral effects, not pharmacokinetic disposition parameters. |
| PGx | Kozlowski_1988 | not_relevant | 0 | 0 | The paper investigates receptor binding affinities and behavioral effects of adinazolam and other benzodiazepines, but it does not contain any data regarding gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| PGx | Venkatakrishnan_2005 | not_relevant | 0 | 0 | The study reports standard PK/PD parameters in healthy volunteers but does not investigate the impact of gene variants, genotypes, or phenotypes on these parameters. |
| PGx | Wu_2022 | not_relevant | 2 | 0 | Review only notes genetic polymorphisms' influence on designer benzodiazepine metabolism is unclarified; no gene-variant effect on adinazolam PK/PD is reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Badinazolam%5D&body=Drug%3A%20adinazolam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_adinazolam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 16:26 UTC</sub>
