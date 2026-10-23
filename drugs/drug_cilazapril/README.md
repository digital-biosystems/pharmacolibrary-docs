<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;cilazapril&quot;}]"></div>

# cilazapril

- **generic name:** cilazapril
- **ATC codes:** `C09AA08`, `C09BA08`
- **DrugBank:** [DB01340](https://go.drugbank.com/drugs/DB01340) · **PubChem:** [CID 56330](https://pubchem.ncbi.nlm.nih.gov/compound/56330)
- **molar mass:** 417.4986 g/mol (C22H31N3O5) — DrugBank
- **groups:** approved, investigational

## About

Cilazapril is an ACE inhibitor used to treat high blood pressure and congestive heart failure. It is an approved medicine, available alone and in combination with a diuretic, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q867350](https://www.wikidata.org/wiki/Q867350) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q76, Q22 — no SI value to buil…</sub> | [Meredith_1989_reference](drugs/drug_cilazapril/Cilazapril_Meredith1989_reference.md) | — | 1-compartment (no model) | 5 | Meredith PA et al., The pharmacokinetics and angiotensin co…, British journal of clinical… (1989) | [10.1111/j.1365-2125.1989.tb03490.x](https://doi.org/10.1111/j.1365-2125.1989.tb03490.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Gross_1993_reference](drugs/drug_cilazapril/Cilazapril_Gross1993_reference.md) | — | general linear (no model) | 4 | Gross V et al., Angiotensin-converting enzyme (ACE)-inh…, Journal of hepatology (1993) | [10.1016/s0168-8278(05)80519-7](https://doi.org/10.1016/s0168-8278(05)80519-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kleinbloesem_1989_ACE_inhibition](drugs/drug_cilazapril/pd_Kleinbloesem_1989_ACE_inhibition.md) | ACE inhibition ← cilazaprilat · inhibition effect | — | Kleinbloesem CH et al., Clinical pharmacology of cilazapril, The American journal of med… (1989) | [10.1016/0002-9343(89)90092-2](https://doi.org/10.1016/0002-9343(89)90092-2) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kleinbloesem_1989_blood_pressure_reduction](drugs/drug_cilazapril/pd_Kleinbloesem_1989_blood_pressure_reduction.md) | blood pressure reduction ← cilazapril · inhibition effect | — | Kleinbloesem CH et al., Clinical pharmacology of cilazapril, The American journal of med… (1989) | [10.1016/0002-9343(89)90092-2](https://doi.org/10.1016/0002-9343(89)90092-2) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Krum_1992_ACE](drugs/drug_cilazapril/pd_Krum_1992_ACE.md) | angiotensin-converting enzyme (ACE) activity ← cilazaprilat · direct linear effect | — | Krum H et al., Steady-state pharmacokinetics and pharm…, Journal of cardiovascular p… (1992) | [10.1097/00005344-199209000-00017](https://doi.org/10.1097/00005344-199209000-00017) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Louis_1992_ACE](drugs/drug_cilazapril/pd_Louis_1992_ACE.md) | Plasma angiotensin-converting enzyme (ACE) activity ← cilazaprilat · direct sigmoid Emax (Hill) effect | — | Louis WJ et al., Comparison of the pharmacokinetics and…, Clinical and experimental p… (1992) | [10.1111/j.1440-1681.1992.tb02811.x](https://doi.org/10.1111/j.1440-1681.1992.tb02811.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Meredith_1989_ACE_inhibition](drugs/drug_cilazapril/pd_Meredith_1989_ACE_inhibition.md) | angiotensin converting enzyme inhibition ← cilazaprilat · target-mediated drug disposition | — | Meredith PA et al., The pharmacokinetics and angiotensin co…, British journal of clinical… (1989) | [10.1111/j.1365-2125.1989.tb03490.x](https://doi.org/10.1111/j.1365-2125.1989.tb03490.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cilazapril).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor, `SLC15A1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor, `SLC15A2` substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 10:05 | 5:57 | 0/1/1 | 4/0/0 | 0/0/0 | 450,045/7,683 | einfracz / qwen3.8-27b | 28 | 21/6 | 15/13 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 55 returned
- **screened:** 6  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Francis_1987.pdf` | Francis RJ et al., Pharmacokinetics of the converting enzy…, Journal of cardiovascular p… (1987) | popPK | 10 | not captured | [2434791](https://pubmed.ncbi.nlm.nih.gov/2434791) | The paper reports pharmacokinetic modeling and specific half-lives for the active metabolite cilazaprilat, but full compartmental parameters like CL and V are not explicitly listed in the evidence provided. |

<sub>queue written 2026-10-22T10:04:53.278775+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajayi_1986 | irrelevant | 1 | 0 | The study reports pharmacodynamic endpoints (blood pressure, ACE inhibition) but contains no quantitative pharmacokinetic parameters (clearance, volume, half-life) for cilazapril. |
| popPK | Altunlu_2025 | irrelevant | 0 | 0 | The study investigates the neuroprotective and antioxidant effects of cilazapril in an in vitro PD model via molecular docking and cell assays, containing no pharmacokinetic data. |
| PD | Anderson_1996 | not_relevant | 0 | 0 | The provided text describes only the pharmacokinetic (PK) data analysis methods (compartmental modeling of plasma concentrations) and does not contain any information regarding pharmacodynamic (PD) endpoints, exposure-response relationships, or numeric PD parameters. |
| popPK | Attwood_1989 | irrelevant | 0 | 0 | The paper is a mechanistic study on the three-dimensional structural requirements for ACE inhibition and drug design, not a pharmacokinetic study. |
| PD | Attwood_1989 | not_relevant | 2 | 1 | The paper focuses on the chemical design and structure-activity relationship (SAR) of cilazapril, mentioning IC50 values for enzyme inhibition but lacking a pharmacokinetic/pharmacodynamic (PK/PD) model or exposure-response analysis in vivo. |
| popPK | Begg_1989 | irrelevant | 1 | 0 | The text is a narrative review discussing general principles of ACE inhibitor pharmacokinetics in renal impairment without reporting specific quantitative parameter values for cilazapril. |
| PD | Begg_1989 | not_relevant | 1 | 0 | The text is a qualitative review of PK principles in renal impairment and does not report any numeric PD parameters or concentration-effect data for cilazapril. |
| popPK | Belz_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of angiotensin I antagonism (hemodynamic responses) and does not report pharmacokinetic parameters like clearance, volume, or half-life for cilazapril. |
| popPK | Belz_1989 | irrelevant | 2 | 0 | The study measures cilazaprilat (the active metabolite) but reports no quantitative pharmacokinetic parameters (like CL, V, or ka) for cilazapril itself, and the primary cilazaprilat values are presented only as figures not included in the evidence. |
| popPK | Belz_1989_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of venoconstriction in humans and reports no pharmacokinetic parameters (CL, V, ka, etc.) for cilazapril. |
| popPK | Belz_1994 | irrelevant | 3 | 0 | The paper is a review/abstract focused on pharmacodynamics (BP response, ACE inhibition) and only mentions a "pharmacologic half-life" without providing quantitative disposition parameters like clearance or volume. |
| popPK | Buchwalder-Csajka_1999 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of angiotensin challenge methodology and does not report quantitative population pharmacokinetic parameters for cilazapril. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any pharmacokinetic parameters for cilazapril. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any specific pharmacodynamic or exposure-response data for cilazapril. |
| popPK | Clozel_1993 | irrelevant | 0 | 0 | The paper focuses on the discovery and pharmacodynamic effects of the renin inhibitor remikiren, mentioning cilazapril only as a comparator agent for blood pressure reduction without reporting cilazapril's pharmacokinetic parameters. |
| PD | Clozel_1993 | not_relevant | 1 | 0 | The text is a discovery abstract for remikiren that only qualitatively compares its blood pressure effect to cilazapril without providing any numeric PD parameters or exposure-response data for cilazapril. |
| popPK | Deget_1991 | irrelevant | 3 | 7 | This is a review article that summarizes pharmacokinetic parameters (half-life, clearance, bioavailability) for cilazapril and its metabolite cilazaprilat, but does not report original quantitative population-PK model estimates (e.g., intercompartmental clearance, individual variability) as a primary study. |
| popPK | Deng_1993 | irrelevant | 0 | 0 | The study focuses on vascular reactivity and hemodynamics in rats, not on the pharmacokinetic disposition parameters (CL, V, ka) of cilazapril. |
| PD | Deng_1993 | not_relevant | 3 | 2 | The study reports dose-response curves to endothelin-1 (a vasoconstrictor) in response to cilazapril treatment, but does not report a pharmacodynamic model or numeric PD parameters (e.g., EC50, Emax) for cilazapril itself. |
| popPK | Ding_2000 | irrelevant | 4 | 4 | The paper is a review that summarizes and reproduces key pharmacokinetic parameters (Cmax, AUC, t1/2, CL) for cilazaprilat (the active metabolite of cilazapril) in human subjects, but it does not report new original PK modeling data. |
| PD | Ding_2000 | not_relevant | 2 | 1 | The paper is a review discussing PK/PD differences between ethnicities based on existing data, but it does not present a specific PD model or extractable numeric PD parameters (like Emax or EC50) for cilazapril in the provided text. |
| PGx | Ding_2000 | not_relevant | 2 | 0 | The paper is a review comparing Chinese and Caucasian populations, finding no significant pharmacokinetic differences for cilazapril, rather than reporting a specific pharmacogenomic effect. |
| popPK | Ebihara_1996 | irrelevant | 0 | 0 | The study investigates the mechanism of ACE inhibitor-induced cough in guinea pigs and does not report any pharmacokinetic parameters (CL, V, etc.) for cilazapril. |
| popPK | Erb_1991 | irrelevant | 1 | 0 | The study focuses on pharmacodynamics (angiotensin I dose-response) and only reports a pharmacological half-life, lacking quantitative population-PK parameters like clearance, volume, or absorption rate. |
| popPK | Essig_1989 | irrelevant | 1 | 0 | The study is a pharmacodynamic assessment using angiotensin I challenges and reports pharmacodynamic half-lives, not quantitative pharmacokinetic parameters (CL, V, ka) for cilazapril. |
| popPK | Fischli_1991 | irrelevant | 0 | 0 | The study characterizes the renin inhibitor Ro 42-5892, using cilazapril only as a comparator for blood pressure effects without reporting pharmacokinetic parameters for cilazapril. |
| PD | Fischli_1991 | not_relevant | 2 | 1 | The paper focuses on the PD of Ro 42-5892; cilazapril is only mentioned as a qualitative comparator for blood pressure lowering effects without providing specific numeric PD parameters or exposure-response data for cilazapril. |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | The paper is a network-based drug repurposing algorithm study for COVID-19 and does not report any pharmacokinetic parameters for cilazapril. |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | The paper is a computational network-based drug repurposing study that does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for cilazapril or any other drug. |
| popPK | Francis_1987 | relevant | 10 | 3 | The paper reports pharmacokinetic modeling and specific half-lives for the active metabolite cilazaprilat, but full compartmental parameters like CL and V are not explicitly listed in the evidence provided. |
| popPK | Frohlich_1990 | irrelevant | 0 | 0 | The study focuses on cardiovascular mass and functional hemodynamics in rats, reporting no pharmacokinetic parameters for cilazapril. |
| PD | Frohlich_1990 | not_relevant | 1 | 0 | The paper reports qualitative structural and functional differences between ACE inhibitors but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters for cilazapril. |
| popPK | Frohlich_1991 | irrelevant | 0 | 0 | This is a hemodynamic study comparing the physiological effects of ACE inhibitors, not a pharmacokinetic study reporting disposition parameters for cilazapril. |
| PD | Frohlich_1991 | not_relevant | 1 | 0 | The paper reports qualitative comparative effects of multiple ACE inhibitors on cardiovascular structure and function in rats but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters for cilazapril. |
| popPK | Gasic_1989 | irrelevant | 0 | 0 | The study investigates hemodynamic effects of cilazapril on splanchnic and systemic circulation, not pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Johnston_1988 | irrelevant | 1 | 0 | The study focuses on in vitro potency and plasma concentration measurement methods for ACE inhibitors, but does not report pharmacokinetic disposition parameters (CL, V, ka) for cilazapril. |
| PD | Johnston_1988 | not_relevant | 2 | 1 | The paper reports in vitro ID50/IC50 values for rat ACE and validates a plasma assay, but does not provide in vivo exposure-response or dose-response data for cilazapril. |
| popPK | Keltai_1993 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Kihara_1999 | irrelevant | 0 | 0 | The study is a pharmacological investigation of cilazapril's therapeutic effects on diabetic neuropathy in rats and does not report any pharmacokinetic parameters (CL, V, etc.) for cilazapril. |
| PD | Kihara_1999 | not_relevant | 3 | 2 | The study reports qualitative improvements in nerve blood flow and electrophysiology with cilazapril and a single-point local application, but does not provide a dose-response curve or numeric PD parameters (e.g., EC50, Emax) for cilazapril. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The paper is a population PK/PD study of fimasartan, and cilazapril is only mentioned as a comparator for BP response patterns. |
| popPK | Kleinbloesem_1989 | irrelevant | 2 | 1 | The text is a clinical review summary that mentions a half-life range but lacks specific quantitative compartmental PK parameters (CL, V, Q, ka) required for population PK modeling. |
| popPK | Kleinbloesem_1989_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of cilazapril and propranolol focusing on hemodynamics and RAAS markers, without reporting any quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for cilazapril. |
| PD | Kleinbloesem_1989_2 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic effects (BP, HR, RAAS parameters) at fixed doses but does not provide numeric concentration-effect parameters (Emax, EC50) or a fitted PD model. |
| popPK | Kleinbloesem_1991 | irrelevant | 3 | 1 | The paper is a review of cilazapril's clinical pharmacology that summarizes findings from other studies, reporting only qualitative descriptions and general half-life ranges (e.g., "30 to 50 hours") rather than original quantitative compartmental parameters (CL, Vd, Ka, Q) or population PK model estimates. |
| popPK | Kobrin_1991 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focused on antihypertensive duration of action (blood pressure changes) and does not report quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for cilazapril. |
| PD | Kobrin_1991 | not_relevant | 3 | 2 | The paper describes a dose-response trial with qualitative comparisons of blood pressure reductions but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed concentration-effect data in the provided text. |
| popPK | Krum_1992 | irrelevant | 4 | 2 | The study reports qualitative PK properties (Tmax, half-life, dose proportionality) but lacks the quantitative compartmental parameters (CL, V, ka) required for population pharmacokinetic extraction. |
| popPK | Lacourcière_1991 | irrelevant | 1 | 0 | The study evaluates antihypertensive efficacy via ambulatory blood pressure monitoring and does not report pharmacokinetic parameters. |
| PD | Lacourcière_1991 | not_relevant | 3 | 2 | The paper reports a dose-comparison study (2.5 vs 5 mg) with mean blood pressure reductions but does not provide concentration-effect data, PK parameters, or a fitted dose-response curve with numeric PD parameters (e.g., EC50, Emax). |
| popPK | Louis_1992 | relevant | 8 | 2 | The study reports qualitative pharmacokinetic behavior (Cmax, time of detection) and pharmacodynamic parameters (EC50) for cilazaprilat, but specific quantitative disposition parameters like clearance (CL), volume (V), and half-life (t1/2) are not explicitly listed in the text or provided tables. |
| popPK | Rosendorff_1992 | irrelevant | 0 | 0 | This is a hemodynamic study investigating pressor sensitivity and blood pressure changes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Rosendorff_1992 | not_relevant | 3 | 2 | The study reports dose-response curves for exogenous agonists (phenylephrine/Ang II) and PD20 values, but these characterize receptor sensitivity rather than the pharmacodynamic effect of cilazapril itself; no concentration-effect or dose-effect parameters for cilazapril are provided. |
| popPK | Shah_2025 | irrelevant | 0 | 0 | The paper is a review of machine learning methods for predicting food effects and mentions cilazapril only as a brief example of a drug with clinically irrelevant food effects, providing no quantitative pharmacokinetic parameters or models for cilazapril. |
| PD | Shah_2025 | not_relevant | 0 | 0 | The paper is a review on machine learning for predicting food effects on drug absorption (PK) and does not report any pharmacodynamic or exposure-response data for cilazapril. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug utilization and prevalence of drug-drug interactions in Hungary, containing no pharmacokinetic studies or disposition parameters for cilazapril. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | The paper is a retrospective analysis of drug dispensing data to estimate the prevalence of drug-drug interactions; it contains no pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for cilazapril. |
| popPK | Song_2002 | irrelevant | 3 | 2 | The paper is a review of newer ACE inhibitors (trandolapril, moexipril, spirapril, etc.) and only lists cilazapril in a table of older agents with limited PK parameters (no CL or Vd reported), without original detailed PK modeling or quantitative disposition parameters for cilazapril as the primary subject. |
| PD | Song_2002 | not_relevant | 2 | 1 | The paper is a review that mentions cilazapril only in the context of PK parameters and general class effects, without providing specific numeric PD parameters or exposure-response data for cilazapril. |
| popPK | Thomson_1989 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of lisinopril, not cilazapril, which is only mentioned as a comparator for ACE binding properties. |
| PD | Thomson_1989 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of lisinopril, not cilazapril, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Waterfall_1989 | irrelevant | 2 | 0 | The paper is a review of preclinical pharmacology (pharmacodynamics and enzyme inhibition) of cilazapril and does not report quantitative population-pharmacokinetic parameters (CL, Vd, ka) for the drug. |
| PD | Waterfall_1989 | not_relevant | 3 | 2 | The paper is a review of preclinical pharmacology that reports qualitative dose-response trends and specific point estimates (e.g., IC50, max inhibition) but does not provide a formal PK/PD model or a complete concentration-effect curve with derivable PD parameters like Emax/EC50 for the drug's systemic effects. |
| popPK | Weber_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of remikiren (a renin inhibitor), not cilazapril. |
| PD | Weber_1993 | not_relevant | 0 | 0 | The paper studies remikiren, not cilazapril. |
| popPK | Wellstein_1987 | irrelevant | 4 | 0 | The study reports a pharmacodynamic half-life (time for loss of AT-I response) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) or a population PK model. |
| popPK | Wright_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of colchicine, not cilazapril. |
| PD | Wright_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of colchicine, not cilazapril, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Zhang_1994 | irrelevant | 0 | 0 | The study investigates the effect of cilazapril on insulin resistance in rabbits using a glucose/insulin compartmental model, but does not report any pharmacokinetic parameters (CL, V, ka, t1/2) for cilazapril itself. |
| popPK | Łukawski_2011 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of drug interactions on seizure thresholds in mice, reporting no quantitative pharmacokinetic parameters (CL, V, ka) for cilazapril. |
| PD | Łukawski_2011 | not_relevant | 3 | 2 | The study reports a qualitative pharmacodynamic interaction (enhancement of VPA efficacy by enalapril) and a shift in ED50, but it does not provide a concentration-effect or dose-response model for cilazapril itself, nor does it report numeric PD parameters (like Emax or EC50) for cilazapril. |
| popPK | Łukawski_2013 | irrelevant | 0 | 0 | The study investigates pharmacodynamic interactions (anticonvulsant effects) in mice and does not report pharmacokinetic parameters for cilazapril. |
| PD | Łukawski_2013 | not_relevant | 2 | 1 | The study reports that cilazapril did not affect the protective activity of antiepileptics, providing no numeric PD parameters or exposure-response relationship for cilazapril. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-22 10:03 UTC</sub>
