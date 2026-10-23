<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;progabide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Progabide_Johno1982_reference&quot;,&quot;label&quot;:&quot;Johno_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_progabide/Progabide_Johno1982_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# progabide

- **generic name:** progabide
- **ATC codes:** `N03AG05`
- **DrugBank:** [DB00837](https://go.drugbank.com/drugs/DB00837) · **PubChem:** [CID 5361323](https://pubchem.ncbi.nlm.nih.gov/compound/5361323)
- **molar mass:** 334.78 g/mol (C17H16ClFN2O2) — DrugBank
- **groups:** experimental

## About

Progabide is an anticonvulsant drug developed for the treatment of epilepsy, with additional antidepressant and antiparkinsonian properties. It is classed as an experimental agent and is not an established, widely marketed medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q426524](https://www.wikidata.org/wiki/Q426524) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| progabide | parent | 334.78 | C17H16ClFN2O2 | DrugBank | [5361323](https://pubchem.ncbi.nlm.nih.gov/compound/5361323) | Johno_1982 |

## Start here

> **Johno_1982_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> male rhesus monkeys, n = &gt; 5. [Run it in the simulator](drugs/drug_progabide/Progabide_Johno1982_reference.md?tab=Simulation) · [record](drugs/drug_progabide/Progabide_Johno1982_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 146.3 ‡ | L/h | 2.09 liter/hr/kg | male rhesus monkeys | &gt; 5 | monkey | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Johno_1982_reference](drugs/drug_progabide/Progabide_Johno1982_reference.md) |
| V | V | 137.9 ‡ | L | 1.97 liter/kg | male rhesus monkeys | &gt; 5 | monkey | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Johno_1982_reference](drugs/drug_progabide/Progabide_Johno1982_reference.md) |
| t½ | t1/2z | 0.656 | h | 0.656 hr | male rhesus monkeys | &gt; 5 | monkey | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Johno_1982_reference](drugs/drug_progabide/Progabide_Johno1982_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="monkey" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Johno_1982_reference](drugs/drug_progabide/Progabide_Johno1982_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Johno I et al., Pharmacokinetic profile of progabide, a…, Journal of pharmaceutical s… (1982) | [10.1002/jps.2600710609](https://doi.org/10.1002/jps.2600710609) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:33 | 1:24 | 1/0/0 | 0/0/0 | 0/0/0 | 30,758/1,526 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Johno_1982.pdf` | Johno I et al., Pharmacokinetic profile of progabide, a…, Journal of pharmaceutical s… (1982) | popPK | 10 | [10.1002/jps.2600710609](https://doi.org/10.1002/jps.2600710609) | [7097524](https://pubmed.ncbi.nlm.nih.gov/7097524) | The paper provides specific quantitative pharmacokinetic parameters (clearance, volume, half-life) for progabide in rhesus monkeys. |
| `Nabbout_2012.pdf` | Nabbout R et al., Stiripentol: an example of antiepilepti…, European journal of paediat… (2012) | pgx | 8 | [10.1016/j.ejpn.2012.04.009](https://doi.org/10.1016/j.ejpn.2012.04.009) | [22695038](https://www.ncbi.nlm.nih.gov/pubmed/22695038) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Rosa_2016.pdf` | Rosa M et al., Prediction of drug-drug interactions wi…, Xenobiotica; the fate of fo… (2016) | pgx | 7 | [10.3109/00498254.2016.1151088](https://doi.org/10.3109/00498254.2016.1151088) | [26936324](https://www.ncbi.nlm.nih.gov/pubmed/26936324) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T07:32:33.708001+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Mesdjian_1999 | not_relevant | 0 | 0 | The paper focuses on the CYP3A6-mediated metabolism of carbamazepine, with no mention of pharmacogenomic effects on the PK or PD of progabide. |
| PGx | Nabbout_2012 | not_relevant | 3 | 0 | The paper discusses a CYP polymorphism affecting stiripentol's interaction with clobazam, not a pharmacogenomic effect on progabide's PK/PD. |
| PGx | Rosa_2016 | not_relevant | 0 | 0 | The study focuses on drug-drug interactions at the epoxide hydrolase level using an in vitro assay, not on how a specific gene variant/genotype changes the pharmacokinetics of progabide. |
| PGx | Spina_1996 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving carbamazepine and mentions progabide only as an inhibitor of carbamazepine-10,11-epoxide metabolism, without reporting any pharmacogenomic effects on progabide's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 07:32 UTC</sub>
