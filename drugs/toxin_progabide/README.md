<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Progabide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Progabide_Brunet1989_reference&quot;,&quot;label&quot;:&quot;Brunet_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_progabide/Progabide_Brunet1989_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Progabide_Johno1982_reference&quot;,&quot;label&quot;:&quot;Johno_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_progabide/Progabide_Johno1982_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Progabide

- **generic name:** Progabide
- **T3DB:** [T3D2908](http://www.t3db.ca/toxins/T3D2908) · **DrugBank:** [DB00837](https://go.drugbank.com/drugs/DB00837) · **PubChem:** [CID 5361323](https://pubchem.ncbi.nlm.nih.gov/compound/5361323)
- **groups:** experimental

## About

Progabide is an analog and prodrug of gamma-aminobutyric acid. It is commonly used in the treatment of epilepsy. It has agonistic activity for both the GABAA and GABAB receptors. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** well absorbed with a bioavailability of 60%
- **Sources and uses:** Indicated for the treatment of epilepsy.
- **Mechanism of toxicity:** Progabide binds to both GABA<sub>A</sub> and GABA<sub>B</sub> receptors located on the terminals of primary afferent fibers. Binding to GABA<sub>A</sub> results in an increased affinity of the GABA receptor for the amino acid, an augmented flux of chloride ions across the terminal membrane, and an increase in the amount of presynaptic inhibition. …
- **Health effects:** May cause a potentially dangerous rash that may develop into Stevens Johnson syndrome, an extremely rare but potentially fatal skin disease.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2908">T3DB T3D2908</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 62666-20-0</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| progabide | parent | 334.8 | C17H16ClFN2O2 | PubChem | [5361323](https://pubchem.ncbi.nlm.nih.gov/compound/5361323) | Brunet_1989, Johno_1982 |

## Start here

> **Brunet_1989_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> rabbits. [Run it in the simulator](drugs/toxin_progabide/Progabide_Brunet1989_reference.md?tab=Simulation) · [record](drugs/toxin_progabide/Progabide_Brunet1989_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Brunet_1989_reference](drugs/toxin_progabide/Progabide_Brunet1989_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Brunet C et al., Acid metabolite of progabide pharmacoki…, European journal of drug me… (1989) | [10.1007/BF03190108](https://doi.org/10.1007/BF03190108) |
| <span class="pk-rf" hidden data-species="monkey" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Johno_1982_reference](drugs/toxin_progabide/Progabide_Johno1982_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Johno I et al., Pharmacokinetic profile of progabide, a…, Journal of pharmaceutical s… (1982) | [10.1002/jps.2600710609](https://doi.org/10.1002/jps.2600710609) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=progabide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GABBR1 (target), GABBR2 (target), GABRA1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 00:49 | 3:04 | 2/0/0 | 0/0/0 | 0/0/0 | 53,175/3,297 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brunet_1989.pdf` | Brunet C et al., Acid metabolite of progabide pharmacoki…, European journal of drug me… (1989) | popPK | 10 | [10.1007/BF03190108](https://doi.org/10.1007/BF03190108) | [2633919](https://pubmed.ncbi.nlm.nih.gov/2633919) | The paper reports quantitative elimination half-life values for progabide metabolites (assessed via HPLC and radioreceptor assay) in rabbits. |
| `Johno_1982.pdf` | Johno I et al., Pharmacokinetic profile of progabide, a…, Journal of pharmaceutical s… (1982) | popPK | 10 | [10.1002/jps.2600710609](https://doi.org/10.1002/jps.2600710609) | [7097524](https://pubmed.ncbi.nlm.nih.gov/7097524) | The paper reports specific quantitative pharmacokinetic parameters for progabide in rhesus monkeys, including clearance, half-life, and volume of distribution. |
| `Nabbout_2012.pdf` | Nabbout R et al., Stiripentol: an example of antiepilepti…, European journal of paediat… (2012) | pgx | 8 | [10.1016/j.ejpn.2012.04.009](https://doi.org/10.1016/j.ejpn.2012.04.009) | [22695038](https://www.ncbi.nlm.nih.gov/pubmed/22695038) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Rosa_2016.pdf` | Rosa M et al., Prediction of drug-drug interactions wi…, Xenobiotica; the fate of fo… (2016) | pgx | 7 | [10.3109/00498254.2016.1151088](https://doi.org/10.3109/00498254.2016.1151088) | [26936324](https://www.ncbi.nlm.nih.gov/pubmed/26936324) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-13 00:48 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bianchetti_1987 | irrelevant | 1 | 0 | The paper reports kinetic parameters for other drugs (phenobarbital, phenytoin, etc.) influenced by progabide, but no quantitative kinetic parameters for progabide itself are reported or extractable. |
| popPK | Cudennec_1987 | irrelevant | 0 | 0 | The paper reports a functional pharmacological study on cerebral glucose utilization and does not report any quantitative toxicokinetic parameters (such as half-life, clearance, volume of distribution, or partition coefficients) for progabide. |
| popPK | Kroetz_1993 | irrelevant | 0 | 0 | The paper reports inhibition constants (Ki) for an enzyme interaction, which are not toxicokinetic parameters of progabide's own disposition. |
| popPK | Leppik_1987 | irrelevant | 0 | 0 | The paper reports on clinical efficacy and safety outcomes (seizure frequency, drug interactions) without providing quantitative toxicokinetic parameters for progabide. |
| popPK | Löscher_1985 | irrelevant | 1 | 0 | The paper reports anticonvulsant efficacy (ED50) but contains no quantitative toxicokinetic parameters (no rates, half-lives, clearance, or volumes of distribution). |
| PGx | Mesdjian_1999 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with carbamazepine and mentions progabide as one of several interacting agents, but does not report any pharmacogenomic effect of gene variants on progabide's PK/PD parameters. |
| PGx | Nabbout_2012 | not_relevant | 0 | 0 | The paper discusses stiripentol and clobazam pharmacokinetics/interactions; progabide is only mentioned as a concurrent medication that inhibited CYP2C19, with no data on genetic effects on progabide's PK/PD. |
| PGx | Rosa_2016 | not_relevant | 0 | 0 | The paper discusses progabide as an inhibitor of epoxide hydrolase (drug-drug interaction) and does not investigate genetic variants or pharmacogenomic effects on progabide's PK/PD. |
| popPK | Spina_1996 | irrelevant | 0 | 0 | The paper is a review focused on carbamazepine, mentioning progabide only as an agent that inhibits epoxide hydrolase (a mechanistic interaction) without providing any quantitative toxicokinetic parameters for progabide itself. |
| PGx | Spina_1996 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with carbamazepine and mentions progabide only as an inhibitor of epoxide hydrolase affecting carbamazepine metabolites, not as a subject of pharmacogenomic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprogabide%5D&body=Drug%3A%20progabide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_progabide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 00:48 UTC</sub>
