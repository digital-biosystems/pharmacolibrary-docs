<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;phenytoin&quot;}]"></div>

# phenytoin

- **generic name:** phenytoin
- **ATC codes:** `N03AB02`
- **DrugBank:** [DB00252](https://go.drugbank.com/drugs/DB00252) · **PubChem:** [CID 1775](https://pubchem.ncbi.nlm.nih.gov/compound/1775)
- **molar mass:** 252.268 g/mol (C15H12N2O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Phenytoin is an anti-seizure medication used to treat epilepsy, including temporal lobe epilepsy and tonic–clonic seizures, and has also been used for epidermolysis bullosa. It is an approved medicine listed among WHO essential medicines and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410400](https://www.wikidata.org/wiki/Q410400) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Della_1998_reference](drugs/drug_phenytoin/Phenytoin_Della1998_reference.md) | — | 1-compartment (no model) | 0 | Della Paschoa OE et al., Modelling of the pharmacodynamic intera…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0702235](https://doi.org/10.1038/sj.bjp.0702235) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Della_1998_TGS](drugs/drug_phenytoin/pd_Della_1998_TGS.md) | increase in the threshold for generalized seizure activity ← phenytoin · delayed effect through an effect compartment | — | Della Paschoa OE et al., Modelling of the pharmacodynamic intera…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0702235](https://doi.org/10.1038/sj.bjp.0702235) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Della_1998_2_EEG](drugs/drug_phenytoin/pd_Della_1998_2_EEG.md) | electroencephalogram (EEG) effect ← phenytoin · direct sigmoid Emax (Hill) effect | — | Della Paschoa OE et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1998) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Della_1998_2_TGS](drugs/drug_phenytoin/pd_Della_1998_2_TGS.md) | threshold for generalized seizure activity ← phenytoin · direct sigmoid Emax (Hill) effect | — | Della Paschoa OE et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1998) | — |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Bettio_2025_Fraction_Seizing](drugs/drug_phenytoin/pd_Bettio_2025_Fraction_Seizing.md) | Fraction Seizing ← phenytoin · categorical (graded) response model | — | Bettio L et al., The Pharmacokinetic and Pharmacodynamic…, International journal of mo… (2025) | [10.3390/ijms26157029](https://doi.org/10.3390/ijms26157029) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenytoin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCC2` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `COMT` substrate, `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `COMT` substrate, `CYP3A5` inducer/substrate, `UGT1A9` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `COMT` substrate, `CYP1A2` inducer, `CYP2A6` substrate, `CYP2B6` inducer/substrate, `CYP2C19` inducer/substrate, `CYP2C8` inducer/substrate, `CYP2C9` inducer/inhibitor/substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` inducer/substrate, `CYP3A5` inducer/substrate, `CYP3A7` inducer/substrate, `EPHX1` substrate, `NQO1` substrate, `UGT1A1` inducer/substrate, `UGT1A4` substrate, `UGT1A6` inhibitor/substrate, `UGT1A9` inhibitor/substrate | DrugBank actor |
| metabolism | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer/substrate, `UGT1A1` inducer/substrate, `UGT1A6` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate, `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCC2` substrate | DrugBank actor |
| — | adrenal gland | `CYP11B1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CYP2C18 (substrate), KCNH2 (inhibitor), NR1I2 (target), SCN1A (inhibitor), SCN1B (inhibitor), SCN2A (inhibitor), SCN3A (inhibitor), SCN5A (inhibitor), SCN8A (inhibitor), SERPINA7 (substrate), SLCO1C1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:09 | 2:02 | 0/1/0 | 3/0/0 | 0/0/0 | 165,783/9,791 | einfracz / qwen3.8-27b | 23 | 2/3 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 220 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hennig_2015.pdf` | Hennig S et al., Population pharmacokinetics of phenytoi…, Journal of clinical pharmac… (2015) | popPK | 10 | [10.1002/jcph.417](https://doi.org/10.1002/jcph.417) | [25331445](https://pubmed.ncbi.nlm.nih.gov/25331445) | The study reports quantitative population PK parameters for phenytoin, but specific numeric values for clearance, volume, and half-life are not present in the provided abstract evidence. |
| `Moffett_2018.pdf` | Moffett BS et al., Fosphenytoin Population Pharmacokinetic…, Pediatric critical care med… (2018) | popPK | 10 | [10.1097/PCC.0000000000001627](https://doi.org/10.1097/PCC.0000000000001627) | [29927880](https://pubmed.ncbi.nlm.nih.gov/29927880) | The paper describes a population PK model for phenytoin but the specific numeric parameter estimates (CL, V, Q) are not listed in the provided evidence. |
| `Della_1998_2.pdf` | Della Paschoa OE et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1998) | popPK | 8 | not captured | [9454785](https://pubmed.ncbi.nlm.nih.gov/9454785) | The study reports phenytoin PK in rats with Michaelis-Menten parameters (Vmax, Km) and ke0 values, but lacks a complete compartmental PK profile (e.g., clearance, volume of distribution) required for full population-PK extraction. |
| `Miyazaki_2016.pdf` | Miyazaki S et al., Pharmacokinetic model analysis of inter…, International journal of cl… (2016) | popPK | 8 | [10.5414/CP202416](https://doi.org/10.5414/CP202416) | [27390048](https://pubmed.ncbi.nlm.nih.gov/27390048) | The paper describes a phenytoin PK model and reports parameters for the inhibitor (5-FU/CYP2C9), but the specific quantitative disposition parameters for phenytoin itself (CL, V) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T07:07:31.638396+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2008 | irrelevant | 0 | 0 | The paper is a review discussing therapeutic drug monitoring and genetics of antiepileptic drugs in general, without reporting specific quantitative pharmacokinetic parameter values for phenytoin. |
| popPK | Bettio_2025 | irrelevant | 2 | 1 | The study reports PK/PD parameters (EC50, B/P ratio) for multiple antiseizure medications, but phenytoin is a co-administered/comparator drug rather than the sole subject, and no quantitative disposition parameters (CL, V, ka) for phenytoin are provided, only ED50/EC50 values. |
| popPK | Brouwers_1994 | irrelevant | 0 | 0 | This is a review of drug interactions where phenytoin is mentioned only as a co-administered agent affected by NSAIDs, without reporting original quantitative PK parameters for phenytoin. |
| popPK | Chan_2001 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lamotrigine, with phenytoin mentioned only as a concomitant drug influencing lamotrigine clearance. |
| popPK | Della_1998_2 | relevant | 8 | 4 | The study reports phenytoin PK in rats with Michaelis-Menten parameters (Vmax, Km) and ke0 values, but lacks a complete compartmental PK profile (e.g., clearance, volume of distribution) required for full population-PK extraction. |
| popPK | Falcão_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of eslicarbazepine acetate, and phenytoin is only mentioned as a co-administered drug that does not affect eslicarbazepine or whose clearance is not altered by eslicarbazepine. |
| popPK | Fuhr_2022 | irrelevant | 0 | 0 | The paper is a PBPK study of felodipine where phenytoin serves only as a perpetrator drug in DDI simulations, so no phenytoin PK parameters are reported. |
| popPK | Guerciolini_1997 | irrelevant | 0 | 0 | The paper discusses the mode of action of orlistat and states that it does not affect phenytoin's pharmacokinetics, but it is not a PK study of phenytoin and provides no numeric PK parameters for phenytoin. |
| popPK | Hennig_2015 | relevant | 10 | 2 | The study reports quantitative population PK parameters for phenytoin, but specific numeric values for clearance, volume, and half-life are not present in the provided abstract evidence. |
| popPK | Li_2021 | irrelevant | 0 | 0 | no_text gate: only 336 chars of text extracted (&lt; 400) |
| popPK | Miyazaki_2016 | relevant | 8 | 2 | The paper describes a phenytoin PK model and reports parameters for the inhibitor (5-FU/CYP2C9), but the specific quantitative disposition parameters for phenytoin itself (CL, V) are not explicitly listed in the provided text. |
| popPK | Moffett_2018 | relevant | 10 | 2 | The paper describes a population PK model for phenytoin but the specific numeric parameter estimates (CL, V, Q) are not listed in the provided evidence. |
| popPK | Ngo_2020 | irrelevant | 1 | 1 | This study investigates the pharmacokinetics of rivaroxaban when co-administered with phenytoin, making phenytoin a comparator drug rather than the subject of the PK analysis. |
| popPK | Schoemaker_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of brivaracetam, with phenytoin serving only as a co-administered enzyme-inducing drug in a interaction analysis. |
| popPK | Takenaka_2018 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of perampanel, with phenytoin mentioned only as a concomitant medication affecting perampanel clearance. |
| popPK | Teixeira-da-Silva_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for valproic acid (VPA), with phenytoin appearing only as a comedication covariate affecting VPA clearance. |
| popPK | Thomson_1992 | irrelevant | 2 | 0 | The text is a narrative overview of Bayesian estimation in TDM and mentions phenytoin only as an example of a drug using this technique, without providing any quantitative pharmacokinetic parameter values. |
| popPK | Tompson_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of retigabine; phenytoin is mentioned only as a co-administered drug that affects retigabine's clearance, not as the subject of a PK parameter extraction. |
| popPK | Whiting_1986 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics methodology that mentions phenytoin only as an example of a drug studied with NONMEM, without reporting any original quantitative PK parameters or values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 07:07 UTC</sub>
