<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;dihydroergocristine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dihydroergocristine_Grognet1992_reference&quot;,&quot;label&quot;:&quot;Grognet_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dihydroergocristine/Dihydroergocristine_Grognet1992_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# dihydroergocristine

- **generic name:** dihydroergocristine
- **ATC codes:** `C04AE04`
- **DrugBank:** [DB13345](https://go.drugbank.com/drugs/DB13345) · **PubChem:** not captured
- **molar mass:** 611.743 g/mol (C35H41N5O5) — DrugBank
- **groups:** approved

## About

Dihydroergocristine is a vasodilator ergot alkaloid used in the treatment of dementia. It is an approved drug, classified as a peripheral vasodilator, but does not appear to have centralised European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5276428](https://www.wikidata.org/wiki/Q5276428) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dihydroergocristine | parent | 611.743 | C35H41N5O5 | DrugBank | — | Grognet_1992 |

## Start here

> **Grognet_1992_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> rats. [Run it in the simulator](drugs/drug_dihydroergocristine/Dihydroergocristine_Grognet1992_reference.md?tab=Simulation) · [record](drugs/drug_dihydroergocristine/Dihydroergocristine_Grognet1992_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 2.65 | L/h | 2.65 L/h | rats | rat | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Grognet_1992_reference](drugs/drug_dihydroergocristine/Dihydroergocristine_Grognet1992_reference.md) |
| V | V | 3640 ‡ | L | 52 l.kg-1 | rats | rat | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Grognet_1992_reference](drugs/drug_dihydroergocristine/Dihydroergocristine_Grognet1992_reference.md) |
| t½ | t1/2z | 13.6 | h | 13.6 h | rats | rat | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Grognet_1992_reference](drugs/drug_dihydroergocristine/Dihydroergocristine_Grognet1992_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>stale — current check: Not simulated</sub> | [Grognet_1992_reference](drugs/drug_dihydroergocristine/Dihydroergocristine_Grognet1992_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Grognet JM et al., [The pharmacokinetics of dihydroergocri…, Arzneimittel-Forschung (1992) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:00 | 1:59 | 1/0/0 | 0/0/0 | 0/0/0 | 12,357/4,350 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grognet_1992.pdf` | Grognet JM et al., [The pharmacokinetics of dihydroergocri…, Arzneimittel-Forschung (1992) | popPK | 10 | not captured | [1492859](https://pubmed.ncbi.nlm.nih.gov/1492859) | The study reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for dihydroergocristine in rats. |
| `Gardner_1997.pdf` | Gardner BR et al., Agonist action at D2(short) dopamine re…, Journal of neurochemistry (1997) | pd | 4 | [10.1046/j.1471-4159.1997.69062589.x](https://doi.org/10.1046/j.1471-4159.1997.69062589.x) | [9375693](https://www.ncbi.nlm.nih.gov/pubmed/9375693) | metadata signals extractable PD data (EC50) |
| `Gardner_1998.pdf` | Gardner B et al., Agonist action at D2(long) dopamine rec…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701926](https://doi.org/10.1038/sj.bjp.0701926) | [9692784](https://www.ncbi.nlm.nih.gov/pubmed/9692784) | metadata signals extractable PD data (EC50) |
| `Markstein_1982.pdf` | Markstein R, Dopamine receptor profile of co-dergocr…, European journal of pharmac… (1982) | pd | 4 | [10.1016/0014-2999(82)90312-0](https://doi.org/10.1016/0014-2999(82)90312-0) | [6297930](https://www.ncbi.nlm.nih.gov/pubmed/6297930) | metadata signals extractable PD data (EC50) |
| `de_2001.pdf` | de Mey C et al., Erythromycin increases plasma concentra…, Clinical pharmacology and t… (2001) | pgx | 7 | [10.1067/mcp.2001.117286](https://doi.org/10.1067/mcp.2001.117286) | [11503008](https://www.ncbi.nlm.nih.gov/pubmed/11503008) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T19:59:14.967829+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Althaus_2000 | not_relevant | 0 | 0 | The paper identifies the metabolic enzyme (CYP3A4) for alpha-dihydroergocryptine in vitro but does not report any pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Gardner_1997 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PD | Gardner_1997 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of dopamine receptors and does not report any pharmacokinetic or pharmacodynamic data for dihydroergocristine. |
| popPK | Gardner_1998 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Gardner_1998 | not_relevant | 0 | 0 | The paper focuses on ligand binding and functional assays for D2 receptors and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for dihydroergocristine. |
| popPK | Markstein_1982 | irrelevant | 0 | 0 | no_text gate: only 73 chars of text extracted (&lt; 400) |
| PD | Markstein_1982 | not_relevant | 0 | 0 | The paper describes the dopamine receptor binding profile (affinity/selectivity) of co-dergocrine and its components, which is a pharmacological characterization, not a pharmacodynamic exposure-response or dose-response analysis with numeric PD parameters like Emax or EC50 in a physiological context. |
| PGx | de_2001 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (erythromycin) affecting the PK of alpha-dihydroergocryptine, not a pharmacogenomic effect (gene variant) on dihydroergocristine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 19:59 UTC</sub>
