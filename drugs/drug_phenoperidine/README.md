<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;phenoperidine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenoperidine_Fischler1985_reference&quot;,&quot;label&quot;:&quot;Fischler_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_phenoperidine/Phenoperidine_Fischler1985_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# phenoperidine

- **generic name:** phenoperidine
- **ATC codes:** `N01AH04`
- **DrugBank:** [DB13605](https://go.drugbank.com/drugs/DB13605) · **PubChem:** none
- **molar mass:** 367.489 g/mol (C23H29NO3) — DrugBank
- **groups:** experimental

## About

Phenoperidine is an opioid used as an analgesic component of general anesthesia. It is used only in hospital settings during anesthesia and is available in only a few countries, mainly France.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7181394](https://www.wikidata.org/wiki/Q7181394) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenoperidine | parent | 367.489 | C23H29NO3 | DrugBank | — | Fischler_1985 |

## Start here

> **Fischler_1985_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> anaesthetized patients undergoing general surgery, n = The mean distribution half-life (T1/2 alpha) for the five patients was short (2.2 min); the mean elimination half-life (T1/2 beta) was 193 min. The mean whole body clearance was 22 ml min-1 kg-1 and the apparent steady state distribution volume (VSS) was 5.7 litre kg-1. Secondary concentration peaks occurred in all patients; in two patients these were substantial and occurred 80 min after injection.. [Run it in the simulator](drugs/drug_phenoperidine/Phenoperidine_Fischler1985_reference.md?tab=Simulation) · [record](drugs/drug_phenoperidine/Phenoperidine_Fischler1985_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 22 | L/h | 22 L/h | anaesthetized patients undergoing general surgery | The mean distribution half-life (T1/2 alpha) for the five patients was short (2.2 min); the mean elimination half-life (T1/2 beta) was 193 min. The mean whole body clearance was 22 ml min-1 kg-1 and the apparent steady state distribution volume (VSS) was 5.7 litre kg-1. Secondary concentration peaks occurred in all patients; in two patients these were substantial and occurred 80 min after injection. | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fischler_1985_reference](drugs/drug_phenoperidine/Phenoperidine_Fischler1985_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fischler_1985_reference](drugs/drug_phenoperidine/Phenoperidine_Fischler1985_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Fischler M et al., Pharmacokinetics of phenoperidine in an…, British journal of anaesthe… (1985) | [10.1093/bja/57.9.872](https://doi.org/10.1093/bja/57.9.872) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:27 | 2:06 | 1/0/0 | 0/0/0 | 0/0/0 | 20,316/1,692 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fischler_1985.pdf` | Fischler M et al., Pharmacokinetics of phenoperidine in an…, British journal of anaesthe… (1985) | popPK | 10 | [10.1093/bja/57.9.872](https://doi.org/10.1093/bja/57.9.872) | [4027103](https://pubmed.ncbi.nlm.nih.gov/4027103) | The study reports quantitative population pharmacokinetic parameters (CL, VSS, half-lives) for phenoperidine in humans, with all numeric values explicitly stated in the abstract. |
| `Calvey_1983.pdf` | Calvey TN et al., Effect of antacids on the plasma concen…, British journal of anaesthe… (1983) | popPK | 8 | [10.1093/bja/55.6.535](https://doi.org/10.1093/bja/55.6.535) | [6860522](https://pubmed.ncbi.nlm.nih.gov/6860522) | The study reports quantitative PK parameters (bioavailability and clearance trends) for phenoperidine in humans, with specific values provided in the text. |
| `Milne_1983.pdf` | Milne LA et al., Effect of urine pH on the elimination o…, British journal of clinical… (1983) | popPK | 8 | [10.1111/j.1365-2125.1983.tb02150.x](https://doi.org/10.1111/j.1365-2125.1983.tb02150.x) | [6882616](https://pubmed.ncbi.nlm.nih.gov/6882616) | The study reports on the effect of urine pH on the clearance of phenoperidine in humans, but the specific quantitative parameter values (numeric clearance rates, volumes, etc.) are not present in the provided text, only qualitative statements of significance. |
| `Fischler_1985_2.pdf` | Fischler M et al., Pharmacokinetics of phenoperidine in pa…, British journal of anaesthe… (1985) | popPK | 5 | [10.1093/bja/57.9.877](https://doi.org/10.1093/bja/57.9.877) | [4027104](https://pubmed.ncbi.nlm.nih.gov/4027104) | The abstract describes qualitative changes in phenoperidine concentrations during surgery but does not report specific numeric population PK parameters (CL, V, ka) in the provided evidence. |

<sub>queue written 2026-10-07 04:27 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calvey_1986 | irrelevant | 0 | 0 | no_text gate: only 33 chars of text extracted (&lt; 400) |
| popPK | Fischler_1985_2 | irrelevant | 5 | 0 | The abstract describes qualitative changes in phenoperidine concentrations during surgery but does not report specific numeric population PK parameters (CL, V, ka) in the provided evidence. |
| popPK | Isherwood_1984 | irrelevant | 2 | 0 | Although the abstract discusses the pharmacokinetics of phenoperidine (clearance, volume, half-life), it provides no specific numeric values for these parameters in the provided text. |
| popPK | Milne_1983 | relevant | 8 | 2 | The study reports on the effect of urine pH on the clearance of phenoperidine in humans, but the specific quantitative parameter values (numeric clearance rates, volumes, etc.) are not present in the provided text, only qualitative statements of significance. |
| popPK | Royer_1978 | irrelevant | 0 | 0 | The paper is a review of the pharmacology of morphine and its derivatives and does not report any quantitative pharmacokinetic parameter values for phenoperidine. |
| popPK | Saumet_1986 | irrelevant | 0 | 0 | The study investigates thermal and vascular effects of anaesthesia and does not report pharmacokinetic parameters for phenoperidine. |
| popPK | Saumet_1986_2 | irrelevant | 0 | 0 | The study measures skin blood flow parameters (thermal clearance, pulse amplitude) during anesthesia, where phenoperidine is merely one of the induction agents, and no pharmacokinetic parameters (CL, V, etc.) for phenoperidine are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenoperidine%5D&body=Drug%3A%20phenoperidine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_phenoperidine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 04:27 UTC</sub>
