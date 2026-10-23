<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;somatropin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Somatropin_van2021_reference&quot;,&quot;label&quot;:&quot;van_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_somatropin/Somatropin_van2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# somatropin

- **generic name:** somatropin
- **ATC codes:** `H01AC01`
- **DrugBank:** [DB00052](https://go.drugbank.com/drugs/DB00052) · **PubChem:** none
- **groups:** approved, investigational

## About

Somatropin, a recombinant form of human growth hormone, is used to treat growth disorders such as pituitary dwarfism, Turner syndrome, and Prader-Willi syndrome. It is an approved medicine with authorised products in the European Union and is widely used for growth-related conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19709937](https://www.wikidata.org/wiki/Q19709937) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **van_2021_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_somatropin/Somatropin_van2021_reference.md?tab=Simulation) · [record](drugs/drug_somatropin/Somatropin_van2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 15 | L/h | 15.0 L/h | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [van_2021_reference](drugs/drug_somatropin/Somatropin_van2021_reference.md) |
| V | V | 65 | L | 65.0 L | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [van_2021_reference](drugs/drug_somatropin/Somatropin_van2021_reference.md) |
| ka | kabs | 0.95 | 1/h | 0.95 /h | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [van_2021_reference](drugs/drug_somatropin/Somatropin_van2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [van_2021_reference](drugs/drug_somatropin/Somatropin_van2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | van Esdonk MJ et al., The power of modelling pulsatile profil…, Journal of pharmacokinetics… (2021) | [10.1007/s10928-021-09743-2](https://doi.org/10.1007/s10928-021-09743-2) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [González-Sales_2015_reference](drugs/drug_somatropin/Somatropin_GonzlezSales2015_reference.md) | — | 1-compartment (no model) | 0 | González-Sales M et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0202-x](https://doi.org/10.1007/s40262-014-0202-x) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Papathanasiou_2021_reference](drugs/drug_somatropin/Somatropin_Papathanasiou2021_reference.md) | — | general linear (no model) | 0 | Papathanasiou T et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01011-3](https://doi.org/10.1007/s40262-021-01011-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Thorsted_2016_IGF_1](drugs/drug_somatropin/pd_Thorsted_2016_IGF_1.md) | insulin-like growth factor 1 (IGF-1) ← recombinant human growth hormone · indirect response — drug stimulates the production of insulin-like growth factor 1 (IGF-1) | — | Thorsted A et al., Translational mixed-effects PKPD modell…, British journal of pharmaco… (2016) | [10.1111/bph.13473](https://doi.org/10.1111/bph.13473) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Thorsted_2016_bodyweight_gain](drugs/drug_somatropin/pd_Thorsted_2016_bodyweight_gain.md) | bodyweight gain ← insulin-like growth factor 1 · direct linear effect | — | Thorsted A et al., Translational mixed-effects PKPD modell…, British journal of pharmaco… (2016) | [10.1111/bph.13473](https://doi.org/10.1111/bph.13473) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=somatropin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2C19` inhibitor | DrugBank actor |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GHR (target), PRLR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:25 | 3:19 | 1/2/0 | 0/1/0 | 0/0/0 | 207,936/13,484 | einfracz / qwen3.8-27b | 7 | 1/6 | 6/1 | 0 |

## Coverage

- **PubMed hits:** 243 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cheng_2022.pdf` | Cheng R et al., Population pharmacokinetic/pharmacodyna…, European journal of pharmac… (2022) | popPK | 9 | [10.1016/j.ejps.2022.106304](https://doi.org/10.1016/j.ejps.2022.106304) | [36209987](https://pubmed.ncbi.nlm.nih.gov/36209987) | The paper is a population PK/PD study of PEG-rhGH (somatropin conjugate) in humans, but the specific numeric parameter values are not explicitly listed in the provided abstract text and are likely in the full results tables or supplementary material. |
| `Thorsted_2016.pdf` | Thorsted A et al., Translational mixed-effects PKPD modell…, British journal of pharmaco… (2016) | popPK | 9 | [10.1111/bph.13473](https://doi.org/10.1111/bph.13473) | [26921845](https://pubmed.ncbi.nlm.nih.gov/26921845) | The study develops a quantitative PK model for rhGH (a somatropin analog) in rats and humans, but the evidence text lacks specific numeric parameter values for clearance or volume. |

<sub>queue written 2026-10-07 09:22 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albin_2012 | irrelevant | 0 | 0 | The study analyzes estradiol levels and pubertal growth, not the pharmacokinetics of somatropin. |
| popPK | Cheng_2022 | relevant | 9 | 3 | The paper is a population PK/PD study of PEG-rhGH (somatropin conjugate) in humans, but the specific numeric parameter values are not explicitly listed in the provided abstract text and are likely in the full results tables or supplementary material. |
| popPK | Denson_2008 | irrelevant | 2 | 0 | The paper is a review of growth hormone therapy and does not contain original quantitative pharmacokinetic parameter values. |
| popPK | Dubois_2012 | irrelevant | 1 | 0 | The paper describes a methodological analysis of a somatropin trial but the provided evidence contains no specific numeric parameter values (e.g., CL, V, ka). |
| popPK | González-Sales_2015_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of tesamorelin, not somatropin. |
| popPK | He_2025 | relevant | 7 | 4 | The paper reports a population PK model for YPEG-rhGH (a PEGylated growth hormone derivative) in humans, but it is a modified product rather than native somatropin, and key numeric parameter values are referenced in Table 3 which is not fully provided in the evidence. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of p-Coumaric Acid (from bamboo extract) in humans as an alternative to growth hormone therapy, but does not report PK parameters for somatropin itself. |
| popPK | Lu_2024 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of anti-GH antibodies, not a pharmacokinetic study of somatropin. |
| popPK | Peng_2025 | irrelevant | 1 | 0 | The study investigates GB08, a novel Fc-GH long-acting analogue, rather than somatropin, which is only included as a short-acting comparator. |
| popPK | Prins_2025 | irrelevant | 0 | 0 | The paper investigates in vitro ghrelin receptor signaling mechanisms and does not report pharmacokinetic parameters for somatropin. |
| popPK | Raun_1998 | irrelevant | 0 | 0 | The study investigates the pharmacology of the drug ipamorelin, not the pharmacokinetics of somatropin. |
| popPK | Stanhope_2010 | irrelevant | 2 | 0 | The paper discusses rhGH (Growth Hormone) rather than Somatropin (a growth hormone receptor agonist) and contains no numeric PK parameters for Somatropin. |
| popPK | Thorsted_2016 | relevant | 9 | 3 | The study develops a quantitative PK model for rhGH (a somatropin analog) in rats and humans, but the evidence text lacks specific numeric parameter values for clearance or volume. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The paper presents a general pharmacodynamic modeling framework and simulations, with no specific data or parameter estimates for somatropin. |
| popPK | Zhao_2026 | relevant | 10 | 2 | The study is a population PK/PD modeling study for Pegpesen (a somatropin formulation), but the specific numeric PK parameter estimates (CL, V, etc.) are not present in the provided text or numeric lines; only PD outcomes (GV, IGF-1) and dosing details are reported. |
| popPK | van_2021 | irrelevant | 0 | 0 | The paper focuses on statistical power for modeling pulsatile growth hormone (GH) secretion using a hypothetical drug, not on the pharmacokinetic parameters of somatropin itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsomatropin%5D&body=Drug%3A%20somatropin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_somatropin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 09:23 UTC</sub>
