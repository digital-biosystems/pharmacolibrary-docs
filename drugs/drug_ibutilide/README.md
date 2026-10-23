<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;ibutilide&quot;}]"></div>

# ibutilide

- **generic name:** ibutilide
- **ATC codes:** `C01BD05`
- **DrugBank:** [DB00308](https://go.drugbank.com/drugs/DB00308) · **PubChem:** [CID 60753](https://pubchem.ncbi.nlm.nih.gov/compound/60753)
- **molar mass:** 384.576 g/mol (C20H36N2O3S) — DrugBank
- **groups:** approved

## About

Ibutilide is a class III antiarrhythmic drug used to treat atrial fibrillation. It is an approved medicine, given by injection, and its use is generally restricted to hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3791612](https://www.wikidata.org/wiki/Q3791612) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ibutilide | parent | 384.576 | C20H36N2O3S | DrugBank | [60753](https://pubchem.ncbi.nlm.nih.gov/compound/60753) | Zeng_2017 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Zeng_2017_reference](drugs/drug_ibutilide/Ibutilide_Zeng2017_reference.md) | — | 2-compartment (no model) | 4 | Zeng Z et al., Population Pharmacokinetic/Pharmacodyna…, Clinical therapeutics (2017) | [10.1016/j.clinthera.2017.05.349](https://doi.org/10.1016/j.clinthera.2017.05.349) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">other organism</span> | [Lin_2008_HERG](drugs/drug_ibutilide/pd_Lin_2008_HERG.md) | HERG current inhibition ← ibutilide · direct Emax (saturable) effect | — | Lin C et al., Extracellular acidification and hyperka…, Cardiology (2008) | [10.1159/000111932](https://doi.org/10.1159/000111932) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [McBride_2009_IKr](drugs/drug_ibutilide/pd_McBride_2009_IKr.md) | IKr ← ibutilide · direct sigmoid Emax (Hill) effect | — | McBride BF et al., Influence of the G2677T/C3435T haplotyp…, The pharmacogenomics journal (2009) | [10.1038/tpj.2009.1](https://doi.org/10.1038/tpj.2009.1) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zeng_2017_QTc](drugs/drug_ibutilide/pd_Zeng_2017_QTc.md) | QT interval ← ibutilide · direct sigmoid Emax (Hill) effect | — | Zeng Z et al., Population Pharmacokinetic/Pharmacodyna…, Clinical therapeutics (2017) | [10.1016/j.clinthera.2017.05.349](https://doi.org/10.1016/j.clinthera.2017.05.349) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tisdale_2012_QTF](drugs/drug_ibutilide/pd_Tisdale_2012_QTF.md) | Fridericia-corrected QT interval ← ibutilide · direct sigmoid Emax (Hill) effect | — | Tisdale JE et al., Enhanced sensitivity to drug-induced QT…, Journal of clinical pharmac… (2012) | [10.1177/0091270011416939](https://doi.org/10.1177/0091270011416939) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ibutilide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CACNA1C (activator), CACNA2D1 (activator), CACNB1 (activator), CACNG1 (activator), KCNH2 (inhibitor), KCNH6 (inhibitor), KCNH7 (inhibitor), KCNJ11 (inhibitor), KCNK1 (inhibitor), KCNK6 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 18:20 | 5:44 | 0/1/0 | 4/0/0 | 0/0/0 | 81,100/8,006 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 5/8 | 2/5 | 0 |

## Coverage

- **PubMed hits:** 31 matched, 31 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yang_1995.pdf` | Yang T et al., Ibutilide, a methanesulfonanilide antia…, Circulation (1995) | pd | 4 | [10.1161/01.cir.91.6.1799](https://doi.org/10.1161/01.cir.91.6.1799) | [7882490](https://www.ncbi.nlm.nih.gov/pubmed/7882490) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-08T18:20:17.677557+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amos_2001 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of H 345/52 with ibutilide serving only as a comparator for proarrhythmic potential, and no pharmacokinetic parameters are reported. |
| popPK | Bai_2025 | irrelevant | 0 | 0 | The study focuses on in vitro electrophysiological effects and machine learning classification of antiarrhythmic drugs, not on the pharmacokinetic disposition parameters (CL, V, etc.) of ibutilide. |
| PD | Bai_2025 | not_relevant | 3 | 2 | The paper uses in silico simulations with fixed IC50 values to classify drugs via machine learning, but does not report a fitted exposure-response curve or derived PD parameters (like Emax or slope) for ibutilide. |
| popPK | Brandts_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel inhibition (IC50) in rat myocytes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for ibutilide. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any specific pharmacodynamic or exposure-response data for ibutilide. |
| popPK | Ellenbogen_1996 | irrelevant | 1 | 0 | The paper is a clinical efficacy study reporting arrhythmia termination rates and safety, with no quantitative pharmacokinetic parameters (CL, V, t1/2) reported for ibutilide. |
| popPK | Gallik_1997 | irrelevant | 0 | 0 | The paper is a review of pharmacologic cardioversion efficacy and mechanisms, containing no quantitative pharmacokinetic parameters for ibutilide. |
| PD | Gallik_1997 | not_relevant | 1 | 0 | The text is a review introduction that qualitatively discusses ibutilide's mechanism and cites general conversion rates from other trials, but it does not report any specific exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | Greenberg_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for moxifloxacin, not ibutilide. |
| PD | Greenberg_2022 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of moxifloxacin in children and does not report any pharmacodynamic or exposure-response relationship for ibutilide. |
| popPK | Gualdani_2015 | irrelevant | 0 | 0 | The paper investigates the hERG channel blocking properties of mexiletine and its metabolite, not the pharmacokinetics of ibutilide. |
| PD | Gualdani_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of mexiletine and its metabolite on hERG channels, not ibutilide. |
| popPK | Lago_2022 | irrelevant | 0 | 0 | The paper is a review on schizophrenia genetics and drug repurposing, with no mention of ibutilide or its pharmacokinetics. |
| PD | Lago_2022 | not_relevant | 0 | 0 | The paper is a review on the druggable schizophrenia genome and does not contain any pharmacodynamic or exposure-response data for ibutilide. |
| popPK | Lin_2008 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Marks_1996 | irrelevant | 1 | 0 | The paper is a developmental toxicity study in rats and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for ibutilide. |
| PD | Marks_1996 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response relationship for teratogenicity (malformation rates) at specific doses, but it does not provide concentration-effect data, PK parameters, or numeric PD model parameters (e.g., EC50, Emax) required for extractable pharmacodynamic modeling. |
| popPK | McBride_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MDR1 polymorphisms on ibutilide-induced HERG block in CHO cells, reporting IC50 values for channel blockade rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | McBride_2009_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated channel block, not a pharmacokinetic study, and ibutilide is only a secondary probe drug without any PK parameters reported. |
| popPK | Perry_2006 | irrelevant | 0 | 0 | The paper is a mechanistic study of hERG channel binding and structure-activity relationships, not a pharmacokinetic study, and contains no disposition parameters for ibutilide. |
| popPK | Reiffel_2000 | irrelevant | 0 | 0 | The study is a mechanistic/clinical trial investigating QTc prolongation and drug interactions, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for ibutilide. |
| popPK | Serrano_2023 | irrelevant | 0 | 0 | The paper describes an in vitro deep learning model for proarrhythmia risk and does not report pharmacokinetic parameters for ibutilide. |
| PD | Serrano_2023 | not_relevant | 0 | 0 | The paper describes a deep learning platform for predicting proarrhythmia risk using iPSC-CMs and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for ibutilide. |
| popPK | Simó-Vicens_2017 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on ion channels, not a pharmacokinetic study, and no PK parameters for ibutilide are present in the evidence. |
| PD | Simó-Vicens_2017 | not_relevant | 0 | 0 | The paper investigates the effect of antiarrhythmic drugs on SK channels but explicitly states that ibutilide did not inhibit the channels, and no PD parameters for ibutilide are reported. |
| popPK | Tisdale_2012 | relevant | 8 | 2 | The study fits the criteria as it uses a 2-compartment PK model for ibutilide, but the specific numeric PK parameter values (CL, V, t1/2) are not present in the text, likely residing in the referenced Table II or Supplementary Figure S1. |
| popPK | Wesley_1993 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy investigation of defibrillation in dogs and does not report pharmacokinetic parameters for ibutilide. |
| popPK | Yamreudeewong_2003 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review on drug interactions, with no original pharmacokinetic data or numeric parameters for ibutilide. |
| PD | Yamreudeewong_2003 | not_relevant | 1 | 0 | The text is a review of drug interactions for class III antiarrhythmics and mentions ibutilide's pharmacodynamic interactions qualitatively, but it does not report any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Yamreudeewong_2003 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions for class III antiarrhythmics and does not report any pharmacogenomic effects (gene variants) on the PK or PD of ibutilide. |
| popPK | Yang_1995 | irrelevant | 0 | 0 | no_text gate: only 204 chars of text extracted (&lt; 400) |
| PD | Yang_1995 | not_relevant | 0 | 0 | The provided text is only a title and abstract fragment describing the mechanism of action (IKr block) and dependencies, but it does not contain the full text, data, or numeric PD parameters (such as IC50 or Emax) required to extract a quantitative exposure-response relationship. |
| popPK | Yoo_2021 | irrelevant | 0 | 0 | The paper describes an in silico/in vitro proarrhythmia prediction model and does not report pharmacokinetic parameters for ibutilide. |
| PD | Yoo_2021 | not_relevant | 0 | 0 | The paper focuses on an artificial neural network model for classifying proarrhythmic risk using in silico electrophysiological features and does not report a pharmacodynamic (exposure-response) model or numeric PD parameters (e.g., Emax, EC50) for ibutilide. |
| popPK | Zeng_2017 | relevant | 10 | 0 | The paper describes a population PK model for ibutilide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-08 18:15 UTC</sub>
