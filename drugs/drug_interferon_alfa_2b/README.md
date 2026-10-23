<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;interferon alfa-2b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;InterferonAlfa2b_GarcaGarca2016_reference&quot;,&quot;label&quot;:&quot;Garc\u00eda-Garc\u00eda_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_interferon_alfa_2b/InterferonAlfa2b_GarcaGarca2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# interferon alfa-2b

- **generic name:** interferon alfa-2b
- **ATC codes:** `L03AB05`
- **DrugBank:** [DB00105](https://go.drugbank.com/drugs/DB00105) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Interferon alfa-2b is an immunostimulant interferon used to treat several cancers, including hairy cell leukemia, follicular lymphoma, melanoma and multiple myeloma, as well as chronic hepatitis B and C infections. It is an approved medicine, though some European Union products have been withdrawn, and it has also been studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72483271](https://www.wikidata.org/wiki/Q72483271) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| interferon_alfa_2b | metabolite | 746.528 | C16H17Cl3I2N3NaO5S | PubChem | [71306834](https://pubchem.ncbi.nlm.nih.gov/compound/71306834) | García-García_2016 |

## Start here

> **García-García_2016_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy male volunteers, n = : 9. [Run it in the simulator](drugs/drug_interferon_alfa_2b/InterferonAlfa2b_GarcaGarca2016_reference.md?tab=Simulation) · [record](drugs/drug_interferon_alfa_2b/InterferonAlfa2b_GarcaGarca2016_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.8 | L/h | 1.8 L/h | healthy male volunteers | : 9 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [García-García_2016_reference](drugs/drug_interferon_alfa_2b/InterferonAlfa2b_GarcaGarca2016_reference.md) |
| V | V | 38.4 | L | 38.4 L | healthy male volunteers | : 9 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [García-García_2016_reference](drugs/drug_interferon_alfa_2b/InterferonAlfa2b_GarcaGarca2016_reference.md) |
| ka | kabs | 0.15 | 1/h | 0.15 h–1 | healthy male volunteers | : 9 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [García-García_2016_reference](drugs/drug_interferon_alfa_2b/InterferonAlfa2b_GarcaGarca2016_reference.md) |
| F | Fab | 0.22 |  | 0.22 | healthy male volunteers | : 9 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [García-García_2016_reference](drugs/drug_interferon_alfa_2b/InterferonAlfa2b_GarcaGarca2016_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [García-García_2016_reference](drugs/drug_interferon_alfa_2b/InterferonAlfa2b_GarcaGarca2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | García-García I et al., Pharmacokinetic and pharmacodynamic cha…, BMC pharmacology & toxicolo… (2016) | [10.1186/s40360-016-0103-8](https://doi.org/10.1186/s40360-016-0103-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Talal_2006_HCV_RNA](drugs/drug_interferon_alfa_2b/pd_Talal_2006_HCV_RNA.md) | HCV RNA ← PEG-IFN alpha-2b · indirect response — drug inhibits the production of HCV RNA | model (no simulator) | Talal AH et al., Pharmacodynamics of PEG-IFN alpha diffe…, Hepatology (Baltimore, Md.) (2006) | [10.1002/hep.21136](https://doi.org/10.1002/hep.21136) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:56 | 1:05 | 1/0/0 | 0/0/1 | 0/0/0 | 100,594/6,078 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rozenberg_2009.pdf` | Rozenberg L et al., Therapeutic response to peg-IFN-alpha-2…, AIDS (London, England) (2009) | popPK | 8 | [10.1097/QAD.0b013e32832ff1c0](https://doi.org/10.1097/QAD.0b013e32832ff1c0) | [19898214](https://pubmed.ncbi.nlm.nih.gov/19898214) | The study analyzes PK parameters for peg-IFN-alpha-2b (the relevant form of the subject drug) in humans, but the evidence text only contains qualitative descriptions of similarities without specific numeric values for CL, V, or half-life. |
| `Vinogradova_2015.pdf` | Vinogradova SV et al., Prediction of long-term treatment outco…, Journal of theoretical biol… (2015) | popPK | 8 | [10.1016/j.jtbi.2015.06.041](https://doi.org/10.1016/j.jtbi.2015.06.041) | [26163367](https://pubmed.ncbi.nlm.nih.gov/26163367) | The paper describes a population PKPD model for PEG-IFN alpha-2b, but the specific quantitative parameter values are not provided in the extracted evidence, likely residing in figures or supplementary data. |
| `Jen_2001.pdf` | Jen JF et al., Population pharmacokinetic analysis of…, Clinical pharmacology and t… (2001) | popPK | 5 | [10.1067/mcp.2001.115872](https://doi.org/10.1067/mcp.2001.115872) | [11406738](https://pubmed.ncbi.nlm.nih.gov/11406738) | The abstract mentions apparent clearance values but only reports percentage changes relative to week 4 values, without providing the actual quantitative numeric parameters required for extraction. |

<sub>queue written 2026-10-06T22:55:51.358362+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2002 | irrelevant | 0 | 0 | The study is an efficacy/toxicology study in mice focusing on tumor growth inhibition and biological dosing, not pharmacokinetic parameter estimation. |
| popPK | Huang_2022 | irrelevant | 1 | 1 | The study reports only non-compartmental metrics (Cmax, Tmax, AUC) for a pegylated derivative (ropeginterferon alfa-2b) rather than the quantitative disposition parameters (CL, V, Q) required for the parent drug interferon alfa-2b. |
| popPK | Jen_2001 | irrelevant | 5 | 1 | The abstract mentions apparent clearance values but only reports percentage changes relative to week 4 values, without providing the actual quantitative numeric parameters required for extraction. |
| popPK | Jen_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and dosing of ribavirin, with interferon alfa-2b serving only as a co-administered agent without its own PK parameters being reported. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of modakafusp alfa (a fusion protein), not interferon alfa-2b itself. |
| popPK | Rozenberg_2009 | relevant | 8 | 0 | The study analyzes PK parameters for peg-IFN-alpha-2b (the relevant form of the subject drug) in humans, but the evidence text only contains qualitative descriptions of similarities without specific numeric values for CL, V, or half-life. |
| popPK | Su_2018 | irrelevant | 0 | 0 | The study is a clinical trial assessing renal safety (eGFR) and antiviral efficacy, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for interferon_alfa_2b. |
| popPK | Talal_2006 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (EC50) and explicitly states that PK parameters were similar between groups without reporting specific quantitative PK values (CL, V, etc.). |
| popPK | Vinogradova_2015 | relevant | 8 | 0 | The paper describes a population PKPD model for PEG-IFN alpha-2b, but the specific quantitative parameter values are not provided in the extracted evidence, likely residing in figures or supplementary data. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on renal function and antiviral efficacy (HBsAg clearance) of PEG-IFN-α-2b in chronic hepatitis B patients, without reporting any pharmacokinetic parameters (CL, V, t1/2, etc.) for interferon alfa 2b. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 22:55 UTC</sub>
