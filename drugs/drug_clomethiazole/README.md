<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;clomethiazole&quot;}]"></div>

# clomethiazole

- **generic name:** clomethiazole
- **ATC codes:** `N05CM02`
- **DrugBank:** [DB06470](https://go.drugbank.com/drugs/DB06470) · **PubChem:** [CID 10783](https://pubchem.ncbi.nlm.nih.gov/compound/10783)
- **molar mass:** 161.65 g/mol (C6H8ClNS) — DrugBank
- **groups:** investigational

## About

Clomethiazole is a sedative and hypnotic medication, also described as an anticonvulsant and neuroprotective agent. It is classified among other hypnotics and sedatives, but its current availability is unclear; DrugBank lists it as investigational and no EU marketing authorisation is recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417178](https://www.wikidata.org/wiki/Q417178) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Zingmark_2003_reference](drugs/drug_clomethiazole/Clomethiazole_Zingmark2003_reference.md) | — | 1-compartment (no model) | 0 | Zingmark PH et al., Population pharmacokinetics of clomethi…, British journal of clinical… (2003) | [10.1046/j.0306-5251.2003.01850.x](https://doi.org/10.1046/j.0306-5251.2003.01850.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nelson_2002_Direct_activation_of_GABA_A_current_in_alpha1_beta1_gamma2_receptors](drugs/drug_clomethiazole/pd_Nelson_2002_Direct_activation_of_GABA_A_current_in_alpha1_be.md) | Direct activation of GABA(A) current in alpha1/beta1/gamma2 receptors ← clomethiazole · direct Emax (saturable) effect | — | Nelson RM et al., Electrophysiological actions of gamma-a…, European journal of pharmac… (2002) | [10.1016/s0014-2999(02)02233-1](https://doi.org/10.1016/s0014-2999(02)02233-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nelson_2002_Direct_activation_of_GABA_A_current_in_alpha1_beta2_gamma2_receptors](drugs/drug_clomethiazole/pd_Nelson_2002_Direct_activation_of_GABA_A_current_in_alpha1_be.md) | Direct activation of GABA(A) current in alpha1/beta2/gamma2 receptors ← clomethiazole · direct Emax (saturable) effect | — | Nelson RM et al., Electrophysiological actions of gamma-a…, European journal of pharmac… (2002) | [10.1016/s0014-2999(02)02233-1](https://doi.org/10.1016/s0014-2999(02)02233-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nelson_2002_Potentiation_of_GABA_activated_current](drugs/drug_clomethiazole/pd_Nelson_2002_Potentiation_of_GABA_activated_current.md) | Potentiation of GABA-activated current ← clomethiazole · direct Emax (saturable) effect | — | Nelson RM et al., Electrophysiological actions of gamma-a…, European journal of pharmac… (2002) | [10.1016/s0014-2999(02)02233-1](https://doi.org/10.1016/s0014-2999(02)02233-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Visser_2006_body_temperature](drugs/drug_clomethiazole/pd_Visser_2006_body_temperature.md) | body temperature ← clomethiazole · stimulation effect | — | Visser SA et al., Modeling drug- and system-related chang…, The Journal of pharmacology… (2006) | [10.1124/jpet.105.095224](https://doi.org/10.1124/jpet.105.095224) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=clomethiazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GABRA1 (unknown), GABRG3 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:05 | 1:20 | 0/1/0 | 2/0/0 | 0/0/0 | 21,231/2,732 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jostell_1978.pdf` | Jostell KG et al., Pharmacokinetics of clomethiazole in he…, Acta pharmacologica et toxi… (1978) | popPK | 10 | [10.1111/j.1600-0773.1978.tb02253.x](https://doi.org/10.1111/j.1600-0773.1978.tb02253.x) | [707131](https://pubmed.ncbi.nlm.nih.gov/707131) | Original PK study in humans with numeric values (systemic clearance 49 ml/min/kg, half-lives 3.6–5.0 h, bioavailability, two-compartment model) directly in the abstract. |
| `Zingmark_2003.pdf` | Zingmark PH et al., Population pharmacokinetics of clomethi…, British journal of clinical… (2003) | popPK | 10 | [10.1046/j.0306-5251.2003.01850.x](https://doi.org/10.1046/j.0306-5251.2003.01850.x) | [12895190](https://pubmed.ncbi.nlm.nih.gov/12895190) | Population PK (NONMEM two-compartment) of clomethiazole with CL, V1, Q, V2 and IIV values reported directly in the abstract. |
| `Visser_2006.pdf` | Visser SA et al., Modeling drug- and system-related chang…, The Journal of pharmacology… (2006) | popPK | 6 | [10.1124/jpet.105.095224](https://doi.org/10.1124/jpet.105.095224) | [16339393](https://pubmed.ncbi.nlm.nih.gov/16339393) | Population PK concentration-time profiles for clomethiazole were fitted in rats and used as PK-PD input, but the evidence contains only PD parameters (potency, transit, turnover), not the numeric CL/V/ka values, which appear to live in other publications or supplementary material. |
| `Tsuei_1980.pdf` | Tsuei SE et al., Design of infusion regimens to achieve…, Clinical pharmacology and t… (1980) | popPK | 5 | [10.1038/clpt.1980.164](https://doi.org/10.1038/clpt.1980.164) | [7408388](https://pubmed.ncbi.nlm.nih.gov/7408388) | Clomethiazole is the subject drug of a PK infusion-regimen application, but the abstract contains no numeric disposition parameters, which likely reside in the full text/figures not provided. |

<sub>queue written 2026-10-06T20:05:16.658507+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arslan_2026 | not_relevant | 0 | 0 | Paper only reports chemical detection of clomethiazole in a counterfeit product and in silico docking/ADME predictions; no gene variant effect on PK/PD parameters. |
| PGx | Dinger_2014 | not_relevant | 0 | 0 | Clomethiazole is used only as a CYP2E1 probe substrate in an in vitro inhibition assay; no gene variant/genotype effect on its PK/PD is reported. |
| popPK | Jiang_2018 | irrelevant | 0 | 0 | This is a mechanistic electropharmacology study of a clomethiazole derivative on GABAA receptors, with no PK disposition parameters reported. |
| PGx | Kamel_2023 | not_relevant | 2 | 0 | Computational study of CLM-P450 metabolism mechanisms; no gene variant/genotype effect on PK/PD parameters reported. |
| popPK | Nelson_2002 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor pharmacology with EC50 values, no PK disposition parameters for clomethiazole. |
| PGx | Stresser_2016 | not_relevant | 0 | 0 | Paper describes clomethiazole's inhibition of CYP2E1 in vitro; no gene variant/genotype effect on clomethiazole PK/PD is reported. |
| popPK | Tsuei_1980 | relevant | 5 | 0 | Clomethiazole is the subject drug of a PK infusion-regimen application, but the abstract contains no numeric disposition parameters, which likely reside in the full text/figures not provided. |
| popPK | Visser_2006 | relevant | 6 | 3 | Population PK concentration-time profiles for clomethiazole were fitted in rats and used as PK-PD input, but the evidence contains only PD parameters (potency, transit, turnover), not the numeric CL/V/ka values, which appear to live in other publications or supplementary material. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 20:05 UTC</sub>
