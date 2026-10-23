<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;theophylline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Theophylline_Frymoyer2020_reference&quot;,&quot;label&quot;:&quot;Frymoyer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_theophylline/Theophylline_Frymoyer2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# theophylline

- **generic name:** theophylline
- **ATC codes:** `R03DA04`, `R03DB04`
- **DrugBank:** [DB00277](https://go.drugbank.com/drugs/DB00277) · **PubChem:** [CID 2153](https://pubchem.ncbi.nlm.nih.gov/compound/2153)
- **molar mass:** 180.164 g/mol (C7H8N4O2) — DrugBank
- **groups:** approved, investigational

## About

Theophylline is a bronchodilator used to treat breathing problems such as asthma, pulmonary emphysema, and acute bronchitis. It remains an approved medicine and is still used for obstructive airway diseases, though generally less often than newer inhaled treatments.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407308](https://www.wikidata.org/wiki/Q407308) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| theophylline | parent | 180.164 | C7H8N4O2 | DrugBank | [2153](https://pubchem.ncbi.nlm.nih.gov/compound/2153) | Frymoyer_2020, Kim_2013 |

## Start here

> **Frymoyer_2020_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> neonates with hypoxic ischemic encephalopathy undergoing therapeutic hypothermia, n = 22. [Run it in the simulator](drugs/drug_theophylline/Theophylline_Frymoyer2020_reference.md?tab=Simulation) · [record](drugs/drug_theophylline/Theophylline_Frymoyer2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.049 | L/h | 0.049 L/h | neonates with hypoxic ischemic encephalopathy undergoing therapeutic hypothermia | 22 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Frymoyer_2020_reference](drugs/drug_theophylline/Theophylline_Frymoyer2020_reference.md) |
| V | V | 2.7 | L | 2.7 L | neonates with hypoxic ischemic encephalopathy undergoing therapeutic hypothermia | 22 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Frymoyer_2020_reference](drugs/drug_theophylline/Theophylline_Frymoyer2020_reference.md) |
| ka | kabs | 34.8 | 1/h | 0.58 min -1 | neonates with hypoxic ischemic encephalopathy undergoing therapeutic hypothermia | 22 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Frymoyer_2020_reference](drugs/drug_theophylline/Theophylline_Frymoyer2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): F</sub> | [Frymoyer_2020_reference](drugs/drug_theophylline/Theophylline_Frymoyer2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+1 cov.) | Frymoyer A et al., Theophylline dosing and pharmacokinetic…, Pediatric research (2020) | [10.1038/s41390-020-01140-8](https://doi.org/10.1038/s41390-020-01140-8) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kim_2013_reference](drugs/drug_theophylline/Theophylline_Kim2013_reference.md) | — | 1-compartment (no model) | 0 | Kim SE et al., Population pharmacokinetics of theophyl…, Therapeutic drug monitoring (2013) | [10.1097/FTD.0b013e3182866695](https://doi.org/10.1097/FTD.0b013e3182866695) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sugimoto_2001_GABA_induced_currents](drugs/drug_theophylline/pd_Sugimoto_2001_GABA_induced_currents.md) | GABA-induced currents biomarker turnover ← theophylline | — | Sugimoto T et al., Inhibitory effect of theophylline on re…, Neuroreport (2001) | [10.1097/00001756-200103050-00013](https://doi.org/10.1097/00001756-200103050-00013) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=theophylline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `SLC22A7` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor/substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADA (inducer), ADA (inhibitor), ADORA1 (target), ADORA2A (target), ADORA2B (target), CPNE1 (binder), HDAC2 (activator), NT5E (inhibitor), PARP1 (inhibitor), PDE3A (inhibitor), PDE4A (inhibitor), PDE4B (inhibitor), PDE5A (inhibitor), RIC3 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:16 | 1:36 | 1/1/0 | 1/0/0 | 0/0/0 | 148,027/6,935 | einfracz / qwen3.8-27b | 6 | 5/1 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 331 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2013.pdf` | Kim SE et al., Population pharmacokinetics of theophyl…, Therapeutic drug monitoring (2013) | popPK | 10 | [10.1097/FTD.0b013e3182866695](https://doi.org/10.1097/FTD.0b013e3182866695) | [23666573](https://pubmed.ncbi.nlm.nih.gov/23666573) | The abstract explicitly reports the final population PK model equations for clearance and volume of distribution with specific numeric coefficients. |
| `Tse_1982.pdf` | Tse FL et al., Theophylline bioavailability in the dog, Journal of pharmaceutical s… (1982) | popPK | 8 | [10.1002/jps.2600711132](https://doi.org/10.1002/jps.2600711132) | [7175732](https://pubmed.ncbi.nlm.nih.gov/7175732) | The paper reports a one-compartment PK model for theophylline in dogs, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-07 22:15 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chamorro_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and antioxidant/neuroprotective properties of nitrone compounds where theophylline is used as a chemical precursor (nucleobase) in an in vitro assay, containing no pharmacokinetic parameters for theophylline itself. |
| popPK | Danhof_1993 | irrelevant | 0 | 0 | The paper is a methodological review on PK-PD modelling in rats using various drug classes, where theophylline (specifically cyclopentyl-theophylline) is only mentioned as an example of a competitive antagonist for adenosine receptors, not as the subject of a PK parameter study. |
| popPK | Dekhuijzen_2002 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of zafirlukast, not theophylline, which is only mentioned as a co-administered agent. |
| popPK | Emami_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of curcumin's relaxant effects on smooth muscle, using theophylline only as a positive control, and does not report pharmacokinetic parameters. |
| popPK | Jackson_1996 | irrelevant | 0 | 0 | The paper studies the vasodilatory properties of maxadilan in rabbit arteries, using theophylline only as a non-specific phosphodiesterase inhibitor control, not as the subject of pharmacokinetic analysis. |
| popPK | Katsiotis_2023 | irrelevant | 0 | 0 | The paper focuses on pharmaceutical formulation and in-vitro drug release kinetics using 3D printing, not in-vivo pharmacokinetics or population PK modeling. |
| popPK | Kaye_2000 | irrelevant | 0 | 0 | The paper is a review of ropinirole pharmacokinetics; theophylline is only mentioned as a CYP1A2 substrate in a drug interaction context with no PK parameters reported. |
| popPK | Kumar_2006 | irrelevant | 0 | 0 | Theophylline is only a co-administered comparator drug in a study focused on the pharmacokinetics of centchroman in rats. |
| popPK | Ma_2016 | irrelevant | 3 | 3 | This is a review article summarizing existing studies rather than reporting original data from a single primary pharmacokinetic study. |
| popPK | Ragazzi_1989 | irrelevant | 0 | 0 | The paper investigates the pharmacological effects (binding, relaxation) of methylxanthine thioderivatives (6-thiocaffeine and 6-thiotheophylline) in vitro and in vivo, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for theophylline itself. |
| popPK | Schaefer_1995 | irrelevant | 0 | 0 | The paper is a review on the pharmacokinetic development of quinolone antibiotics, and theophylline is only mentioned as a potential drug for interaction studies. |
| popPK | Siddiqui_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic experiment measuring bronchodilatory effects (smooth muscle relaxation) using theophylline as a positive control, reporting no pharmacokinetic disposition parameters. |
| popPK | Sugimoto_2001 | irrelevant | 0 | 0 | The study investigates the mechanism of action (GABA receptor inhibition) of theophylline in vitro, not its pharmacokinetics or disposition parameters. |
| popPK | Thomson_1992 | irrelevant | 1 | 0 | The text is a general review of Bayesian parameter estimation methods and mentions theophylline only as a drug class where the technique is applied, providing no quantitative disposition parameters or specific study data. |
| popPK | Tornøe_2004 | irrelevant | 2 | 0 | This is a software/methodology paper illustrating the use of an R package with theophylline data, but no specific numeric PK parameters are provided in the evidence. |
| popPK | Tse_1982 | relevant | 8 | 2 | The paper reports a one-compartment PK model for theophylline in dogs, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Yalcin_2022 | irrelevant | 1 | 0 | The paper is a systematic review of ECMO's effect on drug PK in neonates; while theophylline is listed as a drug included in the search, no specific quantitative PK parameters for theophylline are reported in the provided text (it is only mentioned in the abstract and drug list). |
| popPK | Świerczek_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of "compound 34," a novel theophylline derivative and PDE4/7 inhibitor, rather than theophylline itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btheophylline%5D&body=Drug%3A%20theophylline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_theophylline/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 22:15 UTC</sub>
