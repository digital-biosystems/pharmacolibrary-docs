<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;moxonidine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moxonidine_Hempel1998_reference&quot;,&quot;label&quot;:&quot;Hempel_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxonidine/Moxonidine_Hempel1998_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# moxonidine

- **generic name:** moxonidine
- **ATC codes:** `C02AC05`, `C02LC05`
- **DrugBank:** [DB09242](https://go.drugbank.com/drugs/DB09242) · **PubChem:** [CID 4810](https://pubchem.ncbi.nlm.nih.gov/compound/4810)
- **molar mass:** 241.677 g/mol (C9H12ClN5O) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Moxonidine is an antihypertensive drug used to treat high blood pressure. It is an approved medicine, used mainly in Europe, and is also available in combination with a diuretic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419944](https://www.wikidata.org/wiki/Q419944) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| moxonidine | parent | 241.677 | C9H12ClN5O | DrugBank | [4810](https://pubchem.ncbi.nlm.nih.gov/compound/4810) | Hempel_1998 |

## Start here

> **Hempel_1998_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> patients with hypertension. [Run it in the simulator](drugs/drug_moxonidine/Moxonidine_Hempel1998_reference.md?tab=Simulation) · [record](drugs/drug_moxonidine/Moxonidine_Hempel1998_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 35 | L/h | 35 L/h | patients with hypertension | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Hempel_1998_reference](drugs/drug_moxonidine/Moxonidine_Hempel1998_reference.md) |
| V | V | 132 | L | 132 L | patients with hypertension | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Hempel_1998_reference](drugs/drug_moxonidine/Moxonidine_Hempel1998_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Hempel_1998_reference](drugs/drug_moxonidine/Moxonidine_Hempel1998_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hempel G et al., Population pharmacokinetic-pharmacodyna…, Clinical pharmacology and t… (1998) | [10.1016/S0009-9236(98)90053-4](https://doi.org/10.1016/S0009-9236(98)90053-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Trocóniz_2000_DBP_2](drugs/drug_moxonidine/pd_Troc_niz_2000_DBP_2.md) | manual diastolic blood pressure ← moxonidine · delayed effect through an effect compartment | — | Trocóniz IF et al., Comparison of manual versus ambulatory…, Clinical pharmacology and t… (2000) | [10.1067/mcp.2000.106907](https://doi.org/10.1067/mcp.2000.106907) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Bohmann_1994_S_I_outflow](drugs/drug_moxonidine/pd_Bohmann_1994_S_I_outflow.md) | stimulation induced (S-I) outflow of radioactivity ← moxonidine · direct sigmoid Emax (Hill) effect | model (no simulator) | Bohmann C et al., Effects of imidazolines on noradrenalin…, Naunyn-Schmiedeberg's archi… (1994) | [10.1007/BF00169827](https://doi.org/10.1007/BF00169827) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hempel_1998_DBP](drugs/drug_moxonidine/pd_Hempel_1998_DBP.md) | diastolic blood pressure ← moxonidine · delayed effect through an effect compartment | model (no simulator) | Hempel G et al., Population pharmacokinetic-pharmacodyna…, Clinical pharmacology and t… (1998) | [10.1016/S0009-9236(98)90053-4](https://doi.org/10.1016/S0009-9236(98)90053-4) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Trocóniz_2000_DBP](drugs/drug_moxonidine/pd_Troc_niz_2000_DBP.md) | 24-hour ambulatory diastolic blood pressure ← moxonidine · delayed effect through an effect compartment | model (no simulator) | Trocóniz IF et al., Comparison of manual versus ambulatory…, Clinical pharmacology and t… (2000) | [10.1067/mcp.2000.106907](https://doi.org/10.1067/mcp.2000.106907) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 12:37 | 1:36 | 1/0/0 | 1/0/2 | 0/0/0 | 27,189/2,699 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hempel_1998.pdf` | Hempel G et al., Population pharmacokinetic-pharmacodyna…, Clinical pharmacology and t… (1998) | popPK | 10 | [10.1016/S0009-9236(98)90053-4](https://doi.org/10.1016/S0009-9236(98)90053-4) | [9871427](https://pubmed.ncbi.nlm.nih.gov/9871427) | The abstract explicitly reports quantitative pharmacokinetic parameters for moxonidine, including clearance (35 L/h), volume of distribution (132 L), and effect compartment rate constant (kco = 0.198 h-1). |
| `Karlsson_1998.pdf` | Karlsson MO et al., Assumption testing in population pharma…, Journal of pharmacokinetics… (1998) | popPK | 10 | [10.1023/a:1020561807903](https://doi.org/10.1023/a:1020561807903) | [9795882](https://pubmed.ncbi.nlm.nih.gov/9795882) | The paper describes a population pharmacokinetic analysis of moxonidine in humans, but the provided evidence contains only the abstract and no numeric parameter values. |
| `Trenk_1987.pdf` | Trenk D et al., Pharmacokinetics of moxonidine after si…, Journal of clinical pharmac… (1987) | popPK | 10 | [10.1002/j.1552-4604.1987.tb05602.x](https://doi.org/10.1002/j.1552-4604.1987.tb05602.x) | [3437071](https://pubmed.ncbi.nlm.nih.gov/3437071) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, t1/2, CL/F) for moxonidine in humans directly in the text. |
| `Savic_2007.pdf` | Savic RM et al., Implementation of a transit compartment…, Journal of pharmacokinetics… (2007) | popPK | 8 | [10.1007/s10928-007-9066-0](https://doi.org/10.1007/s10928-007-9066-0) | [17653836](https://pubmed.ncbi.nlm.nih.gov/17653836) | The paper describes a population PK model for moxonidine, but the specific numeric parameter values are not present in the provided evidence text. |
| `Trocóniz_2000.pdf` | Trocóniz IF et al., Comparison of manual versus ambulatory…, Clinical pharmacology and t… (2000) | popPK | 8 | [10.1067/mcp.2000.106907](https://doi.org/10.1067/mcp.2000.106907) | [10945312](https://pubmed.ncbi.nlm.nih.gov/10945312) | The study reports a one-compartment PK model for moxonidine in humans, but specific numeric values for clearance, volume, or half-life are not provided in the text, only pharmacodynamic parameters. |
| `Brynne_2001.pdf` | Brynne L et al., Pharmacodynamic models for the cardiova…, British journal of clinical… (2001) | pd | 5 | [10.1046/j.1365-2125.2001.01320.x](https://doi.org/10.1046/j.1365-2125.2001.01320.x) | [11167663](https://www.ncbi.nlm.nih.gov/pubmed/11167663) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Schäfer_2002.pdf` | Schäfer U et al., Presynaptic effects of moxonidine in is…, The Journal of pharmacology… (2002) | pd | 5 | [10.1124/jpet.102.041657](https://doi.org/10.1124/jpet.102.041657) | [12438540](https://www.ncbi.nlm.nih.gov/pubmed/12438540) | metadata signals extractable PD data (EC50) |
| `George_2004.pdf` | George OK et al., Moxonidine, an antihypertensive agent,…, Journal of cardiovascular p… (2004) | pd | 4 | [10.1097/00005344-200402000-00022](https://doi.org/10.1097/00005344-200402000-00022) | [14716222](https://www.ncbi.nlm.nih.gov/pubmed/14716222) | metadata signals extractable PD data (EC50) |
| `Kurko_2014.pdf` | Kurko D et al., Analysis of functional selectivity thro…, Brain research bulletin (2014) | pd | 4 | [10.1016/j.brainresbull.2014.07.005](https://doi.org/10.1016/j.brainresbull.2014.07.005) | [25080296](https://www.ncbi.nlm.nih.gov/pubmed/25080296) | metadata signals extractable PD data (Emax) |
| `Girardin_2005.pdf` | Girardin F et al., [Antihypertensive therapy and drug-drug…, Revue medicale suisse (2005) | pgx | 7 | not captured | [16238231](https://www.ncbi.nlm.nih.gov/pubmed/16238231) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T12:36:58.720079+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bohmann_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and noradrenaline release, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Brynne_2001 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Doggrell_2001 | irrelevant | 1 | 0 | The paper is a review discussing the mechanism of action and clinical safety of moxonidine, mentioning a one-compartment model qualitatively but providing no quantitative pharmacokinetic parameter values. |
| popPK | George_2004 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | George_2004 | not_relevant | 0 | 0 | The paper describes a qualitative mechanistic observation regarding receptor permissiveness in rat-tail arteries and does not report numeric concentration-effect or dose-response parameters for moxonidine. |
| PGx | Girardin_2005 | not_relevant | 0 | 0 | The paper discusses general drug-drug interactions and mentions moxonidine has few PK interactions, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hayar_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of receptor mechanisms in brain slices, reporting no pharmacokinetic parameters. |
| popPK | Karlsson_1998 | relevant | 10 | 0 | The paper describes a population pharmacokinetic analysis of moxonidine in humans, but the provided evidence contains only the abstract and no numeric parameter values. |
| popPK | Kurko_2014 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Kurko_2014 | not_relevant | 0 | 0 | The paper focuses on the functional selectivity and signaling pathways of the alpha-2C adrenergic receptor, not on the pharmacokinetic or pharmacodynamic modeling of moxonidine. |
| popPK | Radwanska_2009 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor effects on isolated rat heart atria, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Savic_2007 | relevant | 8 | 0 | The paper describes a population PK model for moxonidine, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Schäfer_2002 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| popPK | Sun_2007 | irrelevant | 0 | 0 | The study investigates the mechanism of action (insulin sensitivity) of moxonidine in rat adipocytes and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Trocóniz_2000 | relevant | 8 | 2 | The study reports a one-compartment PK model for moxonidine in humans, but specific numeric values for clearance, volume, or half-life are not provided in the text, only pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 12:37 UTC</sub>
