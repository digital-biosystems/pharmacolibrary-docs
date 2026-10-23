<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;adinazolam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Adinazolam_Venkatakrishnan2005_reference&quot;,&quot;label&quot;:&quot;Venkatakrishnan_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# adinazolam

- **generic name:** adinazolam
- **ATC codes:** `N05BA07`
- **DrugBank:** [DB00546](https://go.drugbank.com/drugs/DB00546) · **PubChem:** [CID 37632](https://pubchem.ncbi.nlm.nih.gov/compound/37632)
- **molar mass:** 351.833 g/mol (C19H18ClN5) — DrugBank
- **groups:** experimental

## About

Adinazolam is a benzodiazepine derivative that was studied as an antidepressant and anxiolytic medicine. It remained experimental and was never approved or marketed, so it is not in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4682904](https://www.wikidata.org/wiki/Q4682904) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| adinazolam | parent | 351.833 | C19H18ClN5 | DrugBank | [37632](https://pubchem.ncbi.nlm.nih.gov/compound/37632) | Venkatakrishnan_2005 |
| N-desmethyl adinazolam | metabolite | 337.811 | C18H16ClN5 | PubChem | [119094](https://pubchem.ncbi.nlm.nih.gov/compound/119094) | Venkatakrishnan_2005 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Venkatakrishnan_2005_reference](drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference.md) | ▶ model + simulator | 1-compartment, oral | 9 | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Fleishaker_1991_DSST_decrement](drugs/drug_adinazolam/pd_Fleishaker_1991_DSST_decrement.md) | percentage decrement in digit symbol substitution test ← N-desmethyladinazolam · direct sigmoid Emax (Hill) effect | — | Fleishaker JC et al., N-desmethyladinazolam pharmacokinetics…, Psychopharmacology (1991) | [10.1007/BF02244306](https://doi.org/10.1007/BF02244306) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Kozlowski_1988_MeTRH_binding](drugs/drug_adinazolam/pd_Kozlowski_1988_MeTRH_binding.md) | Inhibition of 3H-3-methyl-His-2-TRH (MeTRH) binding to TRH receptors ← adinazolam · inhibition effect | — | Kozlowski MR, Inhibition of the binding and the behav…, Pharmacology, biochemistry,… (1988) | [10.1016/0091-3057(88)90426-1](https://doi.org/10.1016/0091-3057(88)90426-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=adinazolam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:57 | 0:58 | 0/1/0 | 1/1/0 | 0/0/0 | 32,151/2,471 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Venkatakrishnan_2005.pdf` | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | popPK | 10 | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) | [15831776](https://pubmed.ncbi.nlm.nih.gov/15831776) | Direct IV PK study of adinazolam in humans with numeric V, CL, and half-life reported in the abstract. |
| `Fleishaker_1991.pdf` | Fleishaker JC et al., N-desmethyladinazolam pharmacokinetics…, Psychopharmacology (1991) | popPK | 6 | [10.1007/BF02244306](https://doi.org/10.1007/BF02244306) | [1796125](https://pubmed.ncbi.nlm.nih.gov/1796125) | PK of N-desmethyladinazolam (adinazolam's major metabolite) was studied in humans, but the evidence gives only an EC50 (325 ng/ml) and no CL/V/t½ values, which are not shown. |
| `Kozlowski_1988.pdf` | Kozlowski MR, Inhibition of the binding and the behav…, Pharmacology, biochemistry,… (1988) | pd | 4 | [10.1016/0091-3057(88)90426-1](https://doi.org/10.1016/0091-3057(88)90426-1) | [2845442](https://www.ncbi.nlm.nih.gov/pubmed/2845442) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T17:56:37.853008+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | File_1986 | irrelevant | 0 | 0 | Behavioral place-conditioning study in rats with no PK parameters or numeric disposition values for adinazolam. |
| popPK | Fleishaker_1991 | relevant | 6 | 3 | PK of N-desmethyladinazolam (adinazolam's major metabolite) was studied in humans, but the evidence gives only an EC50 (325 ng/ml) and no CL/V/t½ values, which are not shown. |
| popPK | Kozlowski_1988 | irrelevant | 0 | 0 | Receptor-binding/pharmacodynamic study with no PK disposition parameters for adinazolam. |
| PGx | Wu_2022 | not_relevant | 2 | 0 | Review only notes genetic polymorphisms' influence on designer benzodiazepine metabolism is unclarified; no gene-variant effect on adinazolam PK/PD is reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 17:56 UTC</sub>
