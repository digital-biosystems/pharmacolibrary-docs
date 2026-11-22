<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;dobutamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dobutamine_Hallik2020_reference&quot;,&quot;label&quot;:&quot;Hallik_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dobutamine/Dobutamine_Hallik2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dobutamine_ma2015_reference&quot;,&quot;label&quot;:&quot;\u0160\u00edma_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dobutamine/Dobutamine_ma2015_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# dobutamine

- **generic name:** dobutamine
- **ATC codes:** `C01CA07`
- **DrugBank:** [DB00841](https://go.drugbank.com/drugs/DB00841) · **PubChem:** [CID 36811](https://pubchem.ncbi.nlm.nih.gov/compound/36811)
- **molar mass:** 301.3801 g/mol (C18H23NO3) — DrugBank
- **groups:** approved, investigational

## About

Dobutamine is a sympathomimetic drug and beta-agonist used to treat severe heart failure and cardiogenic shock. It is administered exclusively intravenously as a continuous infusion for short-term management or while awaiting transplant. The medication is widely used and available as a generic product in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q422782](https://www.wikidata.org/wiki/Q422782), [Wikipedia](https://en.wikipedia.org/wiki/Dobutamine?oldid=1329250429) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dobutamine | parent | 301.38 | C18H23NO3 | DrugBank | [36811](https://pubchem.ncbi.nlm.nih.gov/compound/36811) | Hallik_2020 |

## Start here

> **Hallik_2020_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> critically ill neonates. [Run it in the simulator](drugs/drug_dobutamine/Dobutamine_Hallik2020_reference.md?tab=Simulation) · [record](drugs/drug_dobutamine/Dobutamine_Hallik2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Hallik_2020_reference](drugs/drug_dobutamine/Dobutamine_Hallik2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hallik M et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2020) | [10.1111/bcp.14146](https://doi.org/10.1111/bcp.14146) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Šíma_2015_reference](drugs/drug_dobutamine/Dobutamine_ma2015_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Šíma M et al., Effect of co-medication on the pharmaco…, Physiological research 64(S… (2015) | [10.33549/physiolres.933213](https://doi.org/10.33549/physiolres.933213) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hallik_2020_HR](drugs/drug_dobutamine/pd_Hallik_2020_HR.md) | heart rate ← dobutamine · direct sigmoid Emax (Hill) effect | — | Hallik M et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2020) | [10.1111/bcp.14146](https://doi.org/10.1111/bcp.14146) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hallik_2020_LVEF](drugs/drug_dobutamine/pd_Hallik_2020_LVEF.md) | left ventricular ejection fraction ← dobutamine · direct linear effect | — | Hallik M et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2020) | [10.1111/bcp.14146](https://doi.org/10.1111/bcp.14146) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hallik_2020_LVO](drugs/drug_dobutamine/pd_Hallik_2020_LVO.md) | cardiac output of left ventricle ← dobutamine · direct sigmoid Emax (Hill) effect | — | Hallik M et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2020) | [10.1111/bcp.14146](https://doi.org/10.1111/bcp.14146) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hallik_2020_MAP](drugs/drug_dobutamine/pd_Hallik_2020_MAP.md) | mean arterial pressure ← dobutamine · direct sigmoid Emax (Hill) effect | — | Hallik M et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2020) | [10.1111/bcp.14146](https://doi.org/10.1111/bcp.14146) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hallik_2020_RVO](drugs/drug_dobutamine/pd_Hallik_2020_RVO.md) | cardiac output of right ventricle ← dobutamine · direct linear effect | — | Hallik M et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2020) | [10.1111/bcp.14146](https://doi.org/10.1111/bcp.14146) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hallik_2020_cerebral_fractional_tissue_oxygen_extraction](drugs/drug_dobutamine/pd_Hallik_2020_cerebral_fractional_tissue_oxygen_extraction.md) | cerebral fractional tissue oxygen extraction ← dobutamine · direct sigmoid Emax (Hill) effect | — | Hallik M et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2020) | [10.1111/bcp.14146](https://doi.org/10.1111/bcp.14146) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 04:36 | 2:33 | 1/1/0 | 6/0/0 | 0/0/0 | 26,153/7,162 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 107 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hallik_2020.pdf` | Hallik M et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2020) | popPK | 10 | [10.1111/bcp.14146](https://doi.org/10.1111/bcp.14146) | [31657867](https://pubmed.ncbi.nlm.nih.gov/31657867) | The paper reports a population PK model for dobutamine in neonates with explicit numeric values for clearance (41.2 L/h) and volume of distribution (5.29 L) in the abstract. |
| `Schwartz_1991.pdf` | Schwartz PH et al., The pharmacokinetics of dobutamine in p…, Drug metabolism and disposi… (1991) | popPK | 10 |  | [1680627](https://pubmed.ncbi.nlm.nih.gov/1680627) | The paper reports quantitative pharmacokinetic parameters (clearance, half-lives) for dobutamine in pediatric patients with specific numeric values provided in the text. |

<sub>queue written 2026-10-06 04:33 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kasai_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glucose (IDVG) in pigs, using dobutamine only as a tool to modulate cardiac output, not as the subject drug. |
| popPK | Kuipers_1999 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for alfentanil, not dobutamine, which was only used as a pharmacologic agent to alter cardiac output. |
| popPK | Marcus_2026 | irrelevant | 0 | 0 | The study measures microcirculatory and mitochondrial parameters in rats, not pharmacokinetic disposition parameters (CL, V, etc.) for dobutamine. |
| popPK | Piani_2026 | irrelevant | 0 | 0 | Dobutamine is mentioned only as a covariate for inotropic support in a hemodynamic study, with no pharmacokinetic parameters reported. |
| popPK | Romson_1999 | irrelevant | 0 | 0 | The study reports hemodynamic and pharmacodynamic responses (heart rate, blood pressure, LV performance) to dobutamine, but does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Sun_1997 | irrelevant | 0 | 0 | The study focuses on myocardial oxygen consumption using [1-11C]acetate, and dobutamine is only used as a pharmacological agent to alter hemodynamics, not as the subject of PK analysis. |
| popPK | Šíma_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for phenobarbital, with dobutamine serving only as a co-administered drug to test for interactions. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdobutamine%5D&body=Drug%3A%20dobutamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dobutamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-06 04:33 UTC</sub>
