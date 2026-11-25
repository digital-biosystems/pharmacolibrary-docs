<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;pralidoxime&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pralidoxime_Abbara2010_reference&quot;,&quot;label&quot;:&quot;Abbara_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pralidoxime/Pralidoxime_Abbara2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# pralidoxime

- **generic name:** pralidoxime
- **ATC codes:** `V03AB04`, `V03AB54`
- **DrugBank:** [DB00733](https://go.drugbank.com/drugs/DB00733) · **PubChem:** [CID 5353894](https://pubchem.ncbi.nlm.nih.gov/compound/5353894)
- **molar mass:** 137.1592 g/mol (C7H9N2O) — DrugBank
- **groups:** approved, vet_approved

## About

Pralidoxime is a cholinesterase reactivator and antidote used to treat organophosphate poisoning. It is administered by intramuscular, intravenous, or subcutaneous injection. It is approved for human use and for veterinary use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2735334](https://www.wikidata.org/wiki/Q2735334), [Wikipedia](https://en.wikipedia.org/wiki/Pralidoxime?oldid=1377012930) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pralidoxime | parent | 137.159 | C7H9N2O | DrugBank | [5353894](https://pubchem.ncbi.nlm.nih.gov/compound/5353894) | Abbara_2010 |

## Start here

> **Abbara_2010_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy volunteers. [Run it in the simulator](drugs/drug_pralidoxime/Pralidoxime_Abbara2010_reference.md?tab=Simulation) · [record](drugs/drug_pralidoxime/Pralidoxime_Abbara2010_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Abbara_2010_reference](drugs/drug_pralidoxime/Pralidoxime_Abbara2010_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Abbara C et al., Pharmacokinetic analysis of pralidoxime…, British journal of pharmaco… (2010) | [10.1111/j.1476-5381.2010.01007.x](https://doi.org/10.1111/j.1476-5381.2010.01007.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:45 | 0:03 | 1/0/0 | 0/0/0 | 0/0/0 | 4,120/210 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbara_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for diazepam (and its prodrug), with pralidoxime only used as a co-administered agent in a formulation device; no PK data for pralidoxime itself are reported. |
| PGx | Abbara_2009 | not_relevant | 0 | 0 | The study examines the PK of a different drug (diazepam/avizafone) in the presence of pralidoxime and does not report any pharmacogenomic effects on pralidoxime itself. |
| PGx | Abbara_2010 | not_relevant | 0 | 0 | The paper reports the effect of co-administered drugs on pralidoxime PK, not a pharmacogenomic effect based on gene variants. |
| popPK | Capacio_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of diazepam in guinea pigs, with pralidoxime administered only as part of the standard treatment regimen without PK analysis. |
| PGx | Capacio_2001 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of diazepam and seizure outcomes in guinea pigs, with no data on pralidoxime PK/PD or genetic effects. |
| popPK | Eterović_2011 | irrelevant | 0 | 0 | The study focuses on the neuroprotective mechanism of a cembranoid against paraoxon in hippocampal slices, using pralidoxime only as a functional comparator without reporting any pharmacokinetic parameters. |
| PGx | Eterović_2011 | not_relevant | 0 | 0 | Paper reports neuroprotection by a cembranoid against paraoxon; no pharmacogenomic effect on pralidoxime PK/PD parameters. |
| popPK | Green_1986 | relevant | 10 | 0 | The study reports the pharmacokinetic model and parameters for pralidoxime in rats, but no specific numeric values are provided in the text evidence. |
| PGx | Green_1986 | not_relevant | 0 | 0 | The study focuses solely on dose-dependent pharmacokinetics in rats and does not involve gene variants or pharmacogenomics. |
| popPK | Hong_2013 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of the drug MMB4 (an oxime analogue) and does not report quantitative PK parameters for pralidoxime itself, which is only mentioned as the reference drug being replaced. |
| PGx | Hong_2013 | not_relevant | 0 | 0 | The study examines the pharmacokinetics of MMB4, not pralidoxime, and does not report any pharmacogenomic effects. |
| popPK | Horn_2023 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of hepatotoxicity and cytotoxicity (EC50) in HepaRG spheroids, not a pharmacokinetic study reporting disposition parameters like clearance or volume for pralidoxime. |
| PGx | Horn_2023 | not_relevant | 0 | 0 | The paper investigates the general cytotoxicity of oximes in an in vitro liver model and does not report any genetic variants or their effect on pralidoxime pharmacokinetics or pharmacodynamics. |
| popPK | Houzé_2010 | irrelevant | 3 | 2 | The study focuses on toxicodynamics (cholinesterase reactivation) and respiratory effects in rats, reporting an in-vitro EC50 but not providing explicit quantitative PK parameters (CL, V, half-life) for pralidoxime in the provided text. |
| PGx | Houzé_2010 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics and toxicodynamics of pralidoxime in rats but does not examine gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Jeevarathinam_1988 | relevant | 9 | 0 | The study describes a two-compartment pharmacokinetic model for pralidoxime in rats, but no specific numeric parameter values (clearance, volume, etc.) are present in the provided evidence. |
| PGx | Jeevarathinam_1988 | not_relevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic effects of pralidoxime chloride in rats, but it does not investigate how a gene variant, genotype, or phenotype modifies these effects; therefore, it is not pharmacogenomic. |
| popPK | Moeller_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ketamine, with pralidoxime mentioned only as a co-administered standard of care agent. |
| PGx | Moeller_2019 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of ketamine in rats and does not involve pralidoxime or any pharmacogenomic analysis. |
| popPK | Reymond_2018 | irrelevant | 2 | 0 | The paper focuses on the efficacy of HI-6 vs. 2-PAM (pralidoxime) in poisoning models; PK analysis is explicitly performed for HI-6, not pralidoxime, and no PK parameters for pralidoxime are reported. |
| PGx | Reymond_2018 | not_relevant | 0 | 0 | The study compares the efficacy and pharmacokinetics of two different oxime drugs (HI-6 vs. pralidoxime) in monkeys but does not report any pharmacogenomic effects or gene variants influencing pralidoxime. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpralidoxime%5D&body=Drug%3A%20pralidoxime%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pralidoxime/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 14:59 UTC</sub>
