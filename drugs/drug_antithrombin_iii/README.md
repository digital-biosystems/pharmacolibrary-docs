<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;antithrombin III&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AntithrombinIii_Kim2020_reference&quot;,&quot;label&quot;:&quot;Kim_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_antithrombin_iii/AntithrombinIii_Kim2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# antithrombin III

- **generic name:** antithrombin III
- **ATC codes:** `B01AB02`
- **DrugBank:** [DB11598](https://go.drugbank.com/drugs/DB11598) · **PubChem:** none
- **groups:** approved, investigational

## About

Antithrombin III is a blood protein used to treat or prevent excessive clotting, especially in people with antithrombin deficiency, and it works together with heparin. It is an approved medicine, given by infusion, mainly in hospital settings for clotting problems.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q24775482](https://www.wikidata.org/wiki/Q24775482) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Kim_2020_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> liver transplant recipients. [Run it in the simulator](drugs/drug_antithrombin_iii/AntithrombinIii_Kim2020_reference.md?tab=Simulation) · [record](drugs/drug_antithrombin_iii/AntithrombinIii_Kim2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.129 | L/h | 0.129 L h-1 | liver transplant recipients | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kim_2020_reference](drugs/drug_antithrombin_iii/AntithrombinIii_Kim2020_reference.md) |
| V | V | 3.86 | L | 3.86 L | liver transplant recipients | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kim_2020_reference](drugs/drug_antithrombin_iii/AntithrombinIii_Kim2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kim_2020_reference](drugs/drug_antithrombin_iii/AntithrombinIii_Kim2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kim BR et al., Pharmacokinetics of human antithrombin…, British journal of clinical… (2020) | [10.1111/bcp.14200](https://doi.org/10.1111/bcp.14200) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Carlson_1984_reference](drugs/drug_antithrombin_iii/AntithrombinIii_Carlson1984_reference.md) | — | 1-compartment (no model) | 0 | Carlson TH et al., In vivo behavior of radioiodinated rabb…, The Journal of clinical inv… (1984) | [10.1172/JCI111401](https://doi.org/10.1172/JCI111401) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Knot_1987_reference](drugs/drug_antithrombin_iii/AntithrombinIii_Knot1987_reference.md) | — | 1-compartment (no model) | 0 | Knot EA et al., Antithrombin III: biodistribution in he…, Thrombosis and haemostasis (1987) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=antithrombin_iii).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SERPINC1 (other).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 13:41 | 2:41 | 1/2/0 | 0/0/0 | 0/0/0 | 33,619/6,982 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 17 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Collen_1977.pdf` | Collen D et al., Metabolism of antithrombin III (heparin…, European journal of clinica… (1977) | popPK | 10 | [10.1111/j.1365-2362.1977.tb01566.x](https://doi.org/10.1111/j.1365-2362.1977.tb01566.x) | [65284](https://pubmed.ncbi.nlm.nih.gov/65284) | The paper reports quantitative pharmacokinetic parameters (half-life, fractional catabolic rate, intravascular fraction) for antithrombin III in humans using a two-compartment model. |
| `Kim_2020.pdf` | Kim BR et al., Pharmacokinetics of human antithrombin…, British journal of clinical… (2020) | popPK | 10 | [10.1111/bcp.14200](https://doi.org/10.1111/bcp.14200) | [31840271](https://pubmed.ncbi.nlm.nih.gov/31840271) | The paper reports a population PK model for antithrombin III with specific numeric values for volume of distribution and clearance provided in the abstract. |
| `Aibiki_2007.pdf` | Aibiki M et al., Differences in antithrombin III activit…, Shock (Augusta, Ga.) (2007) | popPK | 9 | [10.1097/shk.0b013e31803422c4](https://doi.org/10.1097/shk.0b013e31803422c4) | [17515857](https://pubmed.ncbi.nlm.nih.gov/17515857) | The study reports a two-compartment PK model for antithrombin III in humans, but specific numeric parameter values (CL, V, t1/2) are not explicitly listed in the provided text, only qualitative comparisons and p-values. |
| `Carlson_1984.pdf` | Carlson TH et al., In vivo behavior of radioiodinated rabb…, The Journal of clinical inv… (1984) | popPK | 9 | [10.1172/JCI111401](https://doi.org/10.1172/JCI111401) | [6376543](https://pubmed.ncbi.nlm.nih.gov/6376543) | The study reports quantitative compartmental fractions and fractional catabolic rates for antithrombin III in rabbits, supporting a three-compartment model. |
| `Knot_1987.pdf` | Knot EA et al., Antithrombin III: biodistribution in he…, Thrombosis and haemostasis (1987) | popPK | 9 |  | [3445222](https://pubmed.ncbi.nlm.nih.gov/3445222) | The study reports quantitative pharmacokinetic parameters (half-life, catabolic rate constant) and biodistribution data for antithrombin III in humans using a three-compartment model. |

<sub>queue written 2026-10-05 13:39 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aibiki_2007 | relevant | 9 | 2 | The study reports a two-compartment PK model for antithrombin III in humans, but specific numeric parameter values (CL, V, t1/2) are not explicitly listed in the provided text, only qualitative comparisons and p-values. |
| popPK | Raner_2024 | irrelevant | 0 | 0 | The paper is a meta-analysis of heparin and protamine dosing strategies where antithrombin III is only a secondary biomarker, not the subject of a pharmacokinetic model. |
| popPK | Schipper_1982 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fibrinogen (the subject of the turnover study), not for antithrombin III, which was used as a therapeutic agent to correct deficiency. |
| popPK | Suzuki_2021 | irrelevant | 0 | 0 | The study investigates syndecan-1 as a biomarker for organ dysfunction and lists antithrombin III only as a laboratory outcome variable, not as the subject of a pharmacokinetic analysis. |
| popPK | Völler_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant asparaginase, not antithrombin III, which is only mentioned as a covariate with no effect on the subject drug's PK. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bantithrombin_iii%5D&body=Drug%3A%20antithrombin_iii%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_antithrombin_iii/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-05 13:39 UTC</sub>
