<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;methyprylon&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methyprylon_Gwilt1985_reference&quot;,&quot;label&quot;:&quot;Gwilt_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# methyprylon

- **generic name:** methyprylon
- **ATC codes:** `N05CE02`
- **DrugBank:** [DB01107](https://go.drugbank.com/drugs/DB01107) · **PubChem:** [CID 4162](https://pubchem.ncbi.nlm.nih.gov/compound/4162)
- **molar mass:** 183.2475 g/mol (C10H17NO2) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Methyprylon is a piperidinedione derivative and central nervous system depressant used to treat insomnia. Methyprylon was withdrawn from the market in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q409558](https://www.wikidata.org/wiki/Q409558), [Wikipedia](https://en.wikipedia.org/wiki/Methyprylon?oldid=1381897762) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methyprylon | parent | 183.248 | C10H17NO2 | DrugBank | [4162](https://pubchem.ncbi.nlm.nih.gov/compound/4162) | Gwilt_1982, Gwilt_1985 |

## Start here

> **Gwilt_1985_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy volunteers. [Run it in the simulator](drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md?tab=Simulation) · [record](drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Gwilt_1985_reference](drugs/drug_methyprylon/Methyprylon_Gwilt1985_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Gwilt PR et al., Pharmacokinetics of methyprylon followi…, Journal of pharmaceutical s… (1985) | [10.1002/jps.2600740920](https://doi.org/10.1002/jps.2600740920) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Gwilt_1982_caster_oil](drugs/drug_methyprylon/Methyprylon_Gwilt1982_caster_oil.md) | — | 2-compartment (no model) | 9 | Gwilt PR et al., The effect of oral castor oil on the di…, Canadian Anaesthetists' Soc… (1982) | [10.1007/BF03007530](https://doi.org/10.1007/BF03007530) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ control](drugs/drug_methyprylon/Methyprylon_Gwilt1982_control.md) | — | 2-compartment (no model) | 9 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:03 | 0:04 | 1/2/0 | 0/0/0 | 0/0/0 | 3,230/170 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chang_1973 | irrelevant | 1 | 0 | The paper reports clearance values for drug removal via hemoperfusion in acute intoxication cases, but provides no specific numeric quantitative values in the evidence and focuses on a clinical intervention device rather than systemic PK parameter estimation. |
| PGx | Chang_1973 | not_relevant | 0 | 0 | The paper describes a drug removal technique (microcapsule artificial kidney) for intoxication and does not report any genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Chang_1973_2 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PGx | Chang_1973_2 | not_relevant | 0 | 0 | The paper evaluates the clearance of methyprylon via an artificial kidney (ACAC) in acute intoxication, not the effect of a gene variant or genotype on pharmacokinetic parameters. |
| PGx | Contos_1991 | not_relevant | 0 | 0 | The paper describes pharmacokinetics in a single overdosed patient but does not report any gene variant, genotype, or phenotype. |
| PGx | Gwilt_1982 | not_relevant | 0 | 0 | The study investigates the effect of castor oil (a substance) on methyprylon PK/PD in dogs, not the effect of a gene variant or genotype. |
| PGx | Gwilt_1985 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetic parameters in a small cohort of healthy volunteers but does not investigate or report any genetic variants or genotypes. |
| popPK | Koffler_1978 | irrelevant | 0 | 0 | Methyprylon is only listed as one of several drugs involved in overdose cases treated with hemoperfusion, and the paper focuses on treatment efficacy rather than reporting specific pharmacokinetic parameters (CL, V, etc.) for the drug itself. |
| PGx | Koffler_1978 | not_relevant | 0 | 0 | The paper describes a hemoperfusion technique for drug overdose and contains no data on gene variants or their effects on pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethyprylon%5D&body=Drug%3A%20methyprylon%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methyprylon/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:02 UTC</sub>
