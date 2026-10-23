<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;isoflurane&quot;}]"></div>

# isoflurane

- **generic name:** isoflurane
- **ATC codes:** `N01AB06`
- **DrugBank:** [DB00753](https://go.drugbank.com/drugs/DB00753) · **PubChem:** [CID 3763](https://pubchem.ncbi.nlm.nih.gov/compound/3763)
- **molar mass:** 184.492 g/mol (C3H2ClF5O) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Isoflurane is an inhalational general anaesthetic used to keep patients unconscious during surgery, and it has also been used for severe asthma attacks. It is widely used worldwide, appears on the WHO essential medicines list, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413918](https://www.wikidata.org/wiki/Q413918) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="reptile" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (reptile), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.98).">reptile</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Williams_2020_reference](drugs/drug_isoflurane/Isoflurane_Williams2020_reference.md) | — | 1-compartment (no model) | 0 | Williams CJA et al., Ectothermy and cardiac shunts profoundl…, Scientific reports (2020) | [10.1038/s41598-020-74014-y](https://doi.org/10.1038/s41598-020-74014-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Guo_2014_EC50](drugs/drug_isoflurane/pd_Guo_2014_EC50.md) | spinal anesthesia ← isoflurane · direct Emax (saturable) effect | — | Guo J et al., Comparison of subarachnoid anesthetic e…, International journal of cl… (2014) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hall_1994_GABA_induced_inward_current_potentiation](drugs/drug_isoflurane/pd_Hall_1994_GABA_induced_inward_current_potentiation.md) | GABA-induced inward current potentiation ← isoflurane · direct sigmoid Emax (Hill) effect | — | Hall AC et al., Stereoselective and non-stereoselective…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13166.x](https://doi.org/10.1111/j.1476-5381.1994.tb13166.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Kreuer_2009_BIS](drugs/drug_isoflurane/pd_Kreuer_2009_BIS.md) | Bispectral index ← isoflurane · direct sigmoid Emax (Hill) effect | — | Kreuer S et al., Comparative pharmacodynamic modeling of…, Journal of clinical monitor… (2009) | [10.1007/s10877-009-9196-6](https://doi.org/10.1007/s10877-009-9196-6) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Kreuer_2009_Narcotrend_index](drugs/drug_isoflurane/pd_Kreuer_2009_Narcotrend_index.md) | Narcotrend index ← isoflurane · direct sigmoid Emax (Hill) effect | — | Kreuer S et al., Comparative pharmacodynamic modeling of…, Journal of clinical monitor… (2009) | [10.1007/s10877-009-9196-6](https://doi.org/10.1007/s10877-009-9196-6) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Krieger_2014_BIS](drugs/drug_isoflurane/pd_Krieger_2014_BIS.md) | Bispectral Index (BIS) ← isoflurane · direct sigmoid Emax (Hill) effect | — | Krieger A et al., Modeling and analysis of individualized…, IEEE transactions on bio-me… (2014) | [10.1109/TBME.2013.2274816](https://doi.org/10.1109/TBME.2013.2274816) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Rehberg_1999_SEF95](drugs/drug_isoflurane/pd_Rehberg_1999_SEF95.md) | spectral edge frequency at the 95th percentile of the power spectrum ← isoflurane · direct sigmoid Emax (Hill) effect | — | Rehberg B et al., Comparative pharmacodynamic modeling of…, Anesthesiology (1999) | [10.1097/00000542-199908000-00013](https://doi.org/10.1097/00000542-199908000-00013) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Röpcke_1999_MPF](drugs/drug_isoflurane/pd_R_pcke_1999_MPF.md) | median power frequency ← isoflurane · inhibition effect | — | Röpcke H et al., Isoflurane, nitrous oxide, and fentanyl…, Journal of clinical anesthe… (1999) | [10.1016/s0952-8180(99)00096-3](https://doi.org/10.1016/s0952-8180(99)00096-3) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Spencer_2023_isoflurane_induced_outward_potassium_leak](drugs/drug_isoflurane/pd_Spencer_2023_isoflurane_induced_outward_potassium_leak.md) | isoflurane-induced outward potassium leak ← isoflurane · direct sigmoid Emax (Hill) effect | — | Spencer KA et al., TREK-1 and TREK-2 Knockout Mice Are Not…, Anesthesiology (2023) | [10.1097/ALN.0000000000004577](https://doi.org/10.1097/ALN.0000000000004577) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Whyte_2004_BIS](drugs/drug_isoflurane/pd_Whyte_2004_BIS.md) | Bispectral index ← isoflurane · direct sigmoid Emax (Hill) effect | — | Whyte SD et al., Bispectral index during isoflurane anes…, Anesthesia and analgesia (2004) | [10.1213/01.ANE.0000117223.84646.36](https://doi.org/10.1213/01.ANE.0000117223.84646.36) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [el-Beheiry_1989_EPSPs](drugs/drug_isoflurane/pd_el_Beheiry_1989_EPSPs.md) | excitatory postsynaptic potentials ← isoflurane · direct Emax (saturable) effect | — | el-Beheiry H et al., Anaesthetic depression of excitatory sy…, Experimental brain research (1989) | [10.1007/BF00250570](https://doi.org/10.1007/BF00250570) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=isoflurane).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer/substrate, `CYP2E1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP2C1 (inhibitor), ATP5F1D (unknown), CALM1 (other/unknown), CHRNA4 (target), CHRNB2 (target), GABRA1 (positive allosteric modulator), GABRA1 (target), GLRA1 (target), GRIA1 (target), KCNA1 (inducer), MT-ND1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:24 | 2:09 | 0/1/0 | 1/8/0 | 0/0/0 | 236,380/8,952 | einfracz / qwen3.8-27b | 20 | 9/3 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 280 matched, 60 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hendrickx_2003.pdf` | Hendrickx JF et al., Isoflurane and desflurane uptake during…, Anesthesia and analgesia (2003) | popPK | 8 | [10.1097/00000539-200302000-00011](https://doi.org/10.1097/00000539-200302000-00011) | [12538177](https://pubmed.ncbi.nlm.nih.gov/12538177) | The paper reports quantitative uptake curves and exponential model parameters for isoflurane in humans, although it focuses on uptake volume rather than standard compartmental clearance/volume parameters. |
| `Timcenko_1995.pdf` | Timcenko A et al., Estimation of pharmacokinetic model par…, Proceedings. Symposium on C… (1995) | popPK | 7 | not captured | [8563327](https://pubmed.ncbi.nlm.nih.gov/8563327) | The study reports on a two-compartment pharmacokinetic model for isoflurane in humans, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07T05:23:40.347334+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antognini_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metocurine, with isoflurane used only as an anaesthetic condition/comparator. |
| popPK | Benito_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bupivacaine in cats, with isoflurane used only as part of the anesthetic protocol. |
| popPK | Brosnan_2007 | irrelevant | 0 | 0 | The study investigates the anesthetic mechanism of ammonia using isoflurane only as a co-administered comparator for immobilization, rather than reporting isoflurane's pharmacokinetic parameters. |
| popPK | Caldwell_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vecuronium, using isoflurane only as a co-administered anesthetic agent without reporting any PK parameters for isoflurane. |
| popPK | De_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tramadol and its metabolite M1, while isoflurane was only used as an anesthetic maintenance agent. |
| popPK | Dragne_2002 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rocuronium (a neuromuscular blocking agent) with isoflurane acting only as a concomitant anesthetic agent, not as the subject drug. |
| popPK | Escobar_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of methadone in isoflurane-anesthetized chickens, using isoflurane only as the anesthetic agent rather than as the subject drug. |
| popPK | Escobar_2023 | irrelevant | 0 | 0 | The study measures isoflurane MAC (anesthetic potency) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Fedorov_2023 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study measuring mitochondrial respiration and ATP synthesis, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Fux_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for metamizole and its metabolites in calves, while isoflurane is only used as a background anesthetic agent without its own PK data. |
| popPK | Gentilini_2001 | irrelevant | 2 | 0 | The paper describes a control system and identifies a model, but specific quantitative pharmacokinetic parameter values (CL, V, etc.) for isoflurane are not explicitly provided in the extracted evidence. |
| popPK | Ginsberg_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fentanyl in children, with isoflurane used only as a co-administered anesthetic agent without reported PK parameters for isoflurane. |
| popPK | Gittel_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for l-methadone, not isoflurane, which is only used as the anesthetic agent. |
| popPK | Guo_2014 | irrelevant | 1 | 0 | The study reports anesthetic potency (ED50/EC50) and efficacy in rats, not pharmacokinetic disposition parameters (clearance, volume, etc.). |
| popPK | Hall_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological analysis of isoflurane's mechanism of action on GABA receptors, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Hough_2025 | irrelevant | 1 | 0 | The study is a methodological paper describing an administration technique and validation via behavioral observation (movement) and stability testing, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Hönemann_1998 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of anesthetic effects on thromboxane A2 receptor signaling, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Jung_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study investigating the molecular basis of anesthesia (mitochondrial complex I inhibition and endocytosis) and does not report pharmacokinetic disposition parameters such as clearance or volume of distribution. |
| popPK | Keating_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fentanyl, with isoflurane only serving as the background anesthetic agent rather than the subject drug of the PK analysis. |
| popPK | Kreuer_2007 | irrelevant | 1 | 0 | The text is a general overview/review of PK-PD models for inhaled anesthetics and does not report specific quantitative disposition parameters (CL, V, Q, ka) for isoflurane. |
| popPK | Kreuer_2009 | irrelevant | 2 | 5 | The study reports pharmacodynamic parameters (ke0, EEG indices) rather than pharmacokinetic disposition parameters (CL, V, Q) for isoflurane. |
| popPK | Krieger_2014 | irrelevant | 2 | 0 | The paper describes a modeling framework and uses a case study, but it does not report specific quantitative population-PK parameter values (like clearance or volume) for isoflurane in the provided text. |
| popPK | Kristensen_2022 | irrelevant | 4 | 0 | The study uses isoflurane only as a probe in a theoretical multi-compartment model for reptiles to calculate induction times (T90), and does not report or extract the actual quantitative PK parameters (CL, V, Q) for the drug itself. |
| popPK | Kurita_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of remimazolam, not isoflurane; isoflurane is only used as a background anesthetic. |
| popPK | Li_2025 | irrelevant | 1 | 1 | The study reports pharmacodynamic anesthetic sensitivity (EC50, induction/emergence times) in mice, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Liu_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propofol in rats, with isoflurane mentioned only as a comparator for sensitivity differences. |
| popPK | Magorian_1995 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rocuronium, while isoflurane is only mentioned as an anesthetic maintenance agent. |
| popPK | Meng_2019 | irrelevant | 0 | 0 | This is a mechanistic study on cardiac contractility (inotropic effects) in rat tissue, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Murat_1988 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro analysis of cardiac contractility in skinned fibers, reporting no pharmacokinetic parameters (CL, V, ka) for isoflurane. |
| popPK | Obara_2021 | irrelevant | 0 | 0 | The study evaluates the impact of a real-time display on anesthesiologist behavior using isoflurane as the anesthetic agent, but it does not report population pharmacokinetic parameters (CL, V, etc.) for isoflurane. |
| popPK | Peyton_2020 | irrelevant | 2 | 0 | The study measures ventilation-perfusion inequalities and alveolar deadspace (physiological parameters) rather than reporting pharmacokinetic disposition parameters like clearance, volume of distribution, or rate constants for isoflurane. |
| popPK | Pypendop_2008 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for remifentanil, using isoflurane only as an anesthetic co-administered to the subjects. |
| popPK | Pypendop_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fentanyl, alfentanil, and sufentanil, using isoflurane only as the anesthetic agent, not as the subject drug. |
| popPK | Pypendop_2021 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of butorphanol in cats, with isoflurane used only as an anesthetic agent, not as the subject drug for PK modeling. |
| popPK | Pypendop_2023 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of buprenorphine (and its metabolite norbuprenorphine) in cats, using isoflurane only as an anesthetic agent rather than as the subject drug for PK characterization. |
| popPK | Rehberg_1999 | irrelevant | 1 | 1 | The study focuses on pharmacodynamic modeling (EC50, Ke0) of EEG effects, not the quantitative pharmacokinetic disposition parameters (clearance, volume) for isoflurane. |
| popPK | Röpcke_1999 | irrelevant | 1 | 0 | The study measures pharmacodynamic potency (isobolographic C0) of isoflurane on EEG, not quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Smart_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular signaling (InsP3 formation) and does not report pharmacokinetic parameters. |
| popPK | Sorooshian_1996 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cisatracurium, with isoflurane used only as a concurrent anesthetic agent. |
| popPK | Spencer_2023 | irrelevant | 0 | 0 | The study focuses on the molecular mechanisms of anesthetic sensitivity (MAC and EC50) and ion channel physiology in mice, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for isoflurane. |
| popPK | Steagall_2020 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of buprenorphine, not isoflurane. |
| popPK | Tanaka_2011 | irrelevant | 0 | 0 | This study investigates the mechanistic effects of isoflurane on pancreatic K(ATP) channels and insulin secretion, rather than reporting pharmacokinetic parameters for the drug. |
| popPK | Tavernier_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of isoflurane's effect on cardiac muscle force and calcium sensitivity, not a pharmacokinetic study. |
| popPK | Timcenko_1995 | relevant | 7 | 0 | The study reports on a two-compartment pharmacokinetic model for isoflurane in humans, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Torda_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of suxamethonium, with isoflurane used only as a background anesthetic agent rather than the subject of the PK analysis. |
| popPK | Tudoric_1995 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (smooth muscle relaxation) of isoflurane in an in vitro ex vivo model, not its pharmacokinetic parameters. |
| popPK | Upton_2008 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for indomethacin, not isoflurane, which is used only as an anaesthetic agent in the sheep model. |
| popPK | Villa_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketorolac in cats, with isoflurane only used as an anesthetic agent. |
| popPK | Wasilczuk_2021 | irrelevant | 2 | 2 | The study is primarily an electrophysiological/neural inertia study in mice where isoflurane serves as the anesthetic agent; while it measures brain concentrations for steady-state validation, it does not report standard pharmacokinetic disposition parameters (CL, V, t1/2) as the primary outcome or subject. |
| popPK | Watanabe_2024 | irrelevant | 0 | 0 | The study investigates the relationship between oxygen reserve index and arterial oxygen pressure in dogs where isoflurane is used only as an anesthetic agent, not as the subject of pharmacokinetic analysis. |
| popPK | Weber_2009 | irrelevant | 0 | 0 | The study measures the anesthetic potency (EC50) of isoflurane in Drosophila, which is a pharmacodynamic endpoint, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | White_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for alfaxalone, not isoflurane, which was only used for surgical induction. |
| popPK | Whyte_2004 | irrelevant | 0 | 0 | The study describes a concentration-response relationship for anesthetic effect (BIS) and does not report pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Williams_2020 | relevant | 2 | 5 | The study provides a compartmental PK model for isoflurane and reports input parameters (Q, V, solubility) and model outputs (t90) in the text and tables, but it is a theoretical simulation rather than an empirical study deriving population parameters. |
| popPK | Wilson_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of potassium penicillin and gentamicin in horses, with isoflurane used only as an anesthetic agent and not as the subject drug. |
| popPK | el-Beheiry_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of synaptic transmission in guinea pig brain slices and reports no pharmacokinetic parameters (CL, V, etc.) for isoflurane. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 05:22 UTC</sub>
