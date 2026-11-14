<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Zoledronate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zoledronate_Chen2002_reference&quot;,&quot;label&quot;:&quot;Chen_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zoledronate/Zoledronate_Chen2002_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Zoledronate

- **generic name:** Zoledronate
- **T3DB:** [T3D2669](http://www.t3db.ca/toxins/T3D2669) · **DrugBank:** [DB00399](https://go.drugbank.com/drugs/DB00399) · **PubChem:** [CID 68740](https://pubchem.ncbi.nlm.nih.gov/compound/68740)
- **groups:** approved, investigational

## About

Zoledronate (zoledronic acid, marketed by Novartis under the trade names Zometa and Reclast) is a bisphosphonate. Zometa is used to prevent skeletal fractures in patients with cancers such as multiple myeloma and prostate cancer. It can also be used to treat hypercalcemia of malignancy and can be helpful for treating pain from bone metastases. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** intravenous.
Poorly absorbed (oral absorption is about 1% of what intravenous absorption is).
- **Sources and uses:** For the treatment of hypercalcemia of malignancy. Also for the treatment of patients with multiple myeloma and patients with documented bone metastases from solid tumors, in conjunction with standard antineoplastic therapy. …
- **Mechanism of toxicity:** The action of zoledronate on bone tissue is based partly on its affinity for hydroxyapatite, which is part of the mineral matrix of bone. Zoledronate also targets farnesyl pyrophosphate (FPP) synthase. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2669">T3DB T3D2669</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 118072-93-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:46557">ChEBI 46557</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zoledronate (Zoledronic acid) | parent | 272.09 | C5H10N2O7P2 | PubChem | [68740](https://pubchem.ncbi.nlm.nih.gov/compound/68740) | Chen_2002, Hortobagyi_2019, Lin_2011 |

## Start here

> **Chen_2002_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> cancer patients with bone metastases, n = ,. [Run it in the simulator](drugs/toxin_zoledronate/Zoledronate_Chen2002_reference.md?tab=Simulation) · [record](drugs/toxin_zoledronate/Zoledronate_Chen2002_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chen_2002_reference](drugs/toxin_zoledronate/Zoledronate_Chen2002_reference.md) | ▶ model + simulator | retention, 1 pool | 2 | Chen T et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2002) | [10.1177/009127002762491316](https://doi.org/10.1177/009127002762491316) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q91 — no SI value to build from</sub> | [Hortobagyi_2019_reference](drugs/toxin_zoledronate/Zoledronate_Hortobagyi2019_reference.md) | held back | 1-compartment, IV | 4 | Hortobagyi GN et al., Indirect Evaluation of Bone Saturation…, The oncologist (2019) | [10.1634/theoncologist.2018-0218](https://doi.org/10.1634/theoncologist.2018-0218) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: disposition incomplete — retention function missing A1, A2 — TK_Retention canno…</sub> | [Lin_2011_reference](drugs/toxin_zoledronate/Zoledronate_Lin2011_reference.md) | held back | retention, 2 pools | 3 | Lin J et al., Preparation and in vivo biological inve…, Nuclear medicine and biology (2011) | [10.1016/j.nucmedbio.2010.12.005](https://doi.org/10.1016/j.nucmedbio.2010.12.005) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=zoledronate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FDPS (inhibitor), GGPS1 (inhibitor), Hydroxylapatite (binder), Hydroxylapatite (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 18:59 | 45:46 | 3/0/0 | 0/0/0 | 0/0/0 | 1,153,078/71,160 | einfracz / qwen3.8-flash-next | 52 | 6/32 | 52/0 | 0 |

## Coverage

- **PubMed hits:** 183 matched, 159 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 3  ·  extracted 1  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2002.pdf` | Chen T et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2002) | popPK | 10 | [10.1177/009127002762491316](https://doi.org/10.1177/009127002762491316) | [12412821](https://pubmed.ncbi.nlm.nih.gov/12412821) | The paper reports quantitative pharmacokinetic parameters (half-lives, urinary excretion percentages, and renal clearance) for zoledronic acid in cancer patients. |
| `Skerjanec_2003.pdf` | Skerjanec A et al., The pharmacokinetics and pharmacodynami…, Journal of clinical pharmac… (2003) | popPK | 10 | [10.1177/0091270002239824](https://doi.org/10.1177/0091270002239824) | [12616668](https://pubmed.ncbi.nlm.nih.gov/12616668) | The abstract confirms a zoledronic acid PK study in humans reporting AUC and excretion, but the specific numeric values for kinetic parameters are not included in the provided text snippet. |
| `Hortobagyi_2019.pdf` | Hortobagyi GN et al., Indirect Evaluation of Bone Saturation…, The oncologist (2019) | popPK | 9 | [10.1634/theoncologist.2018-0218](https://doi.org/10.1634/theoncologist.2018-0218) | [30297386](https://pubmed.ncbi.nlm.nih.gov/30297386) | The paper reports quantitative pharmacokinetic parameters (plasma AUC0-6h and urine excretion percentage) for zoledronic acid in humans, which constitute kinetic data. |
| `Christophoridis_2022.pdf` | Christophoridis C et al., Accumulation of zoledronic acid in rabb…, Journal of chromatography.… (2022) | popPK | 8 | [10.1016/j.jchromb.2022.123229](https://doi.org/10.1016/j.jchromb.2022.123229) | [35349887](https://pubmed.ncbi.nlm.nih.gov/35349887) | The paper reports toxicokinetic accumulation and clearance profiles in a rabbit model, although specific numeric parameters are not explicitly listed in the abstract text, implying they are in the figures/full text. |
| `Katsumi_2016.pdf` | Katsumi H et al., Pharmacokinetic and therapeutic efficac…, Journal of drug targeting (2016) | popPK | 8 | [10.3109/1061186X.2015.1101768](https://doi.org/10.3109/1061186X.2015.1101768) | [26508267](https://pubmed.ncbi.nlm.nih.gov/26508267) | The paper reports the bioavailability of zoledronate in rats, which is a kinetic parameter, but no other specific numeric values (half-life, clearance, etc.) are present in the extracted evidence. |
| `Li_2019.pdf` | Li X et al., Zoledronic Acid-containing Nanoparticle…, ACS applied materials & int… (2019) | popPK | 8 | [10.1021/acsami.8b16588](https://doi.org/10.1021/acsami.8b16588) | [30689348](https://pubmed.ncbi.nlm.nih.gov/30689348) | The paper reports biodistribution data (relative distribution in bone vs tumor) for zoledronate in mice, which constitutes tissue distribution kinetics, but specific numeric parameters are not provided in the abstract and are likely in figures or supplementary tables. |
| `Nieto_2013.pdf` | Nieto JE et al., Pharmacokinetics, pharmacodynamics, and…, American journal of veterin… (2013) | popPK | 8 | [10.2460/ajvr.74.4.550](https://doi.org/10.2460/ajvr.74.4.550) | [23531062](https://pubmed.ncbi.nlm.nih.gov/23531062) | The paper is a pharmacokinetic study in horses using a 2-compartment model, but the specific numeric parameter values are not included in the extracted text, only the model structure and qualitative results. |
| `Shiraki_2017.pdf` | Shiraki M et al., Safety, pharmacokinetics, and changes i…, Journal of bone and mineral… (2017) | popPK | 8 | [10.1007/s00774-016-0806-3](https://doi.org/10.1007/s00774-016-0806-3) | [28000034](https://pubmed.ncbi.nlm.nih.gov/28000034) | The paper reports pharmacokinetic outcomes (Cmax, AUC, urinary excretion) for zoledronic acid in humans, but specific numeric parameter values are missing from the provided text summary. |
| `Li_2017.pdf` | Li X et al., In vivo distribution of zoledronic acid…, International journal of ph… (2017) | popPK | 7 | [10.1016/j.ijpharm.2017.04.053](https://doi.org/10.1016/j.ijpharm.2017.04.053) | [28455136](https://pubmed.ncbi.nlm.nih.gov/28455136) | The paper reports on zoledronate biodistribution and blood circulating time in mice, which are toxicokinetic measures, but the specific quantitative values (e.g., AUC, half-life, %ID) are not present in the provided text. |
| `Lin_2011.pdf` | Lin J et al., Preparation and in vivo biological inve…, Nuclear medicine and biology (2011) | popPK | 7 | [10.1016/j.nucmedbio.2010.12.005](https://doi.org/10.1016/j.nucmedbio.2010.12.005) | [21718936](https://pubmed.ncbi.nlm.nih.gov/21718936) | The paper reports blood clearance half-lives (T1/2α and T1/2β) for zoledronic acid in mice, which are toxicokinetic parameters of the substance. |

<sub>queue written 2026-11-13 18:37 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aapro_2008 | irrelevant | 0 | 0 | The paper is a clinical guideline review on the use of bisphosphonates for cancer-related bone disease and contains no quantitative toxicokinetic parameters. |
| popPK | Addeo_2008 | irrelevant | 1 | 0 | The paper is a clinical outcome study focusing on pain and quality of life with no quantitative toxicokinetic parameters for zoledronate. |
| popPK | Aguirre_2026 | irrelevant | 1 | 0 | The paper is a bone morphometry and biomechanics study measuring structural endpoints (BMC, vBMD, stiffness) rather than toxicokinetic parameters like concentration-time profiles, half-lives, or clearance. |
| popPK | Akbar_2010 | irrelevant | 0 | 0 | The paper is a clinical audit of prescribing practices and dosing appropriateness in patients, reporting no quantitative toxicokinetic parameters such as half-lives, clearance, or volumes of distribution. |
| popPK | Attivi_2014 | irrelevant | 0 | 0 | This is a clinical study on the effect of hydration on efficacy and safety (calcium/creatinine clearance), containing no pharmacokinetic parameters. |
| popPK | Body_2006 | irrelevant | 0 | 0 | The paper is a clinical review of bisphosphonate therapy in breast cancer and contains no quantitative toxicokinetic parameters for zoledronate. |
| popPK | Body_2007 | irrelevant | 0 | 0 | The paper is a clinical practice recommendation review focusing on clinical outcomes and safety, containing no quantitative toxicokinetic parameters. |
| popPK | Body_2012 | irrelevant | 1 | 0 | The paper focuses on the pharmacokinetics of denosumab, with zoledronic acid mentioned only as a comparator agent. |
| popPK | Body_2015 | irrelevant | 1 | 2 | The paper reports clinical outcome data (incidence of hypocalcaemia) for zoledronic acid used as a comparator, not quantitative toxicokinetic parameters. |
| popPK | Boonen_2008 | irrelevant | 0 | 0 | The paper is a clinical safety outcome study reporting serum creatinine and renal function changes without reporting any quantitative toxicokinetic parameters (e.g., clearance, half-life, Vd) for zoledronate. |
| popPK | Buonerba_2013 | irrelevant | 0 | 0 | The paper is a clinical commentary/speculative article comparing drug efficacy and toxicity profiles, containing no quantitative toxicokinetic parameters for zoledronate. |
| popPK | Carmona_2009 | irrelevant | 2 | 1 | The paper is a clinical review on adherence and efficacy; the only kinetic mention (39% urinary excretion) is cited from another source, not original data, and lacks specific kinetic parameters like half-life or clearance. |
| popPK | Cha_2013 | irrelevant | 0 | 0 | The study is an epidemiological outcome analysis identifying risk factors for renal impairment, containing no quantitative toxicokinetic parameters. |
| popPK | Chahal_2025 | irrelevant | 0 | 0 | The paper reports on a clinical implementation program and patient outcomes without reporting any quantitative toxicokinetic parameters for zoledronate. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamic effects of zoledronic acid (inducing apoptosis and inhibiting efferocytosis) and the rescue effect of geranylgeraniol, but reports no quantitative toxicokinetic parameters (such as half-life, clearance, volume of distribution, or metabolic rate constants) for zoledronic acid. |
| popPK | Chennuru_2008 | irrelevant | 1 | 6 | The paper is a clinical outcome/epidemiological study identifying risk factors for hypocalcaemia, not a toxicokinetic study; it merely cites the half-life (146 h) as background literature without reporting new kinetic parameters or data for zoledronate. |
| popPK | Choi_2021 | irrelevant | 0 | 0 | The paper reports cell proliferation and immunological outcomes, not pharmacokinetic parameters for zoledronate. |
| popPK | Chou_2022 | irrelevant | 1 | 0 | The paper focuses on nanoparticle formulation and efficacy, mentioning zoledronic acid's rapid renal clearance only as general background without reporting specific quantitative kinetic parameters (e.g., half-life, clearance values) for zoledronate itself. |
| popPK | Cipriani_2017 | irrelevant | 1 | 0 | The paper reports biomarkers of acute kidney injury and bone turnover, not zoledronate concentrations or kinetic parameters. |
| popPK | Darwish_2024 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting Zolbetuximab, a different substance than Zoledronate, and reports no toxicokinetic parameters. |
| popPK | David_2019 | irrelevant | 0 | 0 | The paper focuses on a doxorubicin-bisphosphonate conjugate; zoledronate is only mentioned as a comparator agent in efficacy terms, with no kinetic parameters provided. |
| popPK | Desager_1988 | irrelevant | 0 | 0 | The paper studies the interaction between zolpidem and chlorpromazine in humans and does not involve zoledronate at all. |
| popPK | Domschke_2014 | irrelevant | 0 | 0 | The paper is a clinical review of side effects and contains no quantitative toxicokinetic parameters for zoledronate. |
| popPK | Eastell_2009 | irrelevant | 0 | 0 | The paper is a clinical trial subgroup analysis reporting fracture risk and BMD outcomes, containing no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution for zoledronate. |
| popPK | Ekeuku_2026 | irrelevant | 0 | 0 | The paper is a scoping review on geranylgeraniol's effects on osteoporosis mechanisms; zoledronate is mentioned only as a comparator causing cellular toxicity, with no quantitative toxicokinetic parameters reported. |
| popPK | El-Nabarawy_2019 | irrelevant | 0 | 0 | The paper reports kinetic parameters for zoledronate's structural and functional analog 'zolmitriptan', not the subject substance zoledronate. |
| popPK | Faiq_2023 | irrelevant | 0 | 0 | Zoledronate is only mentioned as a standard treatment option that was avoided; no kinetic parameters are reported. |
| popPK | Fayez_2022 | irrelevant | 2 | 0 | The study focuses on a new zoledronate derivative, not zoledronate itself, and reports only qualitative biodistribution trends without quantitative kinetic parameters for zoledronate. |
| popPK | Fixen_2022 | irrelevant | 2 | 0 | The paper reports clinical outcomes (AKI incidence, serum creatinine changes) but contains no quantitative toxicokinetic parameters such as clearance, volume of distribution, half-life, or rate constants. |
| popPK | Gan_2022 | irrelevant | 0 | 0 | The paper focuses on Lactic Acid Bacteria absorbing Zearalenone (ZEN) and does not mention zoledronate at all. |
| popPK | Gheorghe_2025 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on diagnosis and treatment decisions for Paget's disease and hyperparathyroidism; it mentions zoledronate administration but reports no toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for the substance. |
| PGx | Gheorghe_2025 | not_relevant | 0 | 0 | The paper is a case report describing the coexistence of Paget's disease, hyperparathyroidism, and osteoporosis treated with zoledronate, but it contains no genetic data or pharmacogenomic analysis of drug response parameters. |
| popPK | Ghosh_2019 | irrelevant | 0 | 0 | The paper studies immune cell function and zoledronate is used merely as a stimulation reagent, not as a subject for toxicokinetic profiling. |
| popPK | Guay_2006 | irrelevant | 1 | 0 | The paper reviews ibandronate, mentioning zoledronate only incidentally as a comparator for infusion duration, with no kinetic parameters for zoledronate. |
| popPK | Hadji_2012 | irrelevant | 1 | 0 | The paper is a clinical outcome study reporting changes in pharmacodynamic bone turnover markers (P1NP, CTX) and adverse events, but contains no quantitative toxicokinetic parameters (e.g., clearance, volume of distribution, half-life, or concentration-time profiles) for zoledronate. |
| popPK | Hodgins_2017 | irrelevant | 1 | 0 | The text describes immunotherapy efficacy and general biodistribution trends without reporting any specific quantitative toxicokinetic parameters for zoledronate. |
| popPK | Hokugo_2013 | irrelevant | 2 | 0 | The paper describes a mechanistic model and qualitative distribution patterns of zoledronate in rats but provides no quantitative kinetic parameters (such as half-lives, clearance, or partition coefficients) in the text. |
| popPK | Houston_2010 | irrelevant | 0 | 0 | The paper is an observational study on renal monitoring and resource use, reporting no toxicokinetic parameters for zoledronate. |
| popPK | Ironside_2010 | irrelevant | 1 | 0 | The paper focuses on solid-state NMR structural analysis and protonation states, not quantitative toxicokinetic parameters like half-life or clearance. |
| popPK | Jakobsen_2010 | irrelevant | 0 | 0 | The paper describes an orthopedic implant study using zoledronate as a local treatment agent to measure bone fixation, not a toxicokinetic study reporting quantitative kinetic parameters like half-life or clearance. |
| popPK | Jalbert_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study on contraindication prevalence in hip-fracture patients, reporting no toxicokinetic parameters for zoledronate. |
| popPK | Jiang_2020 | irrelevant | 0 | 0 | Zoledronate is used as a targeting ligand in a nanoparticle formulation, not as the substance of toxicokinetic study, and no kinetic parameters for zoledronate itself are reported. |
| popPK | Katsumi_2016 | relevant | 8 | 2 | The paper reports the bioavailability of zoledronate in rats, which is a kinetic parameter, but no other specific numeric values (half-life, clearance, etc.) are present in the extracted evidence. |
| popPK | Kavanagh_2006 | irrelevant | 0 | 0 | The paper describes in vitro enzyme kinetics (Ki/IC50) for FPPS inhibition, not quantitative ADME/Tox parameters like clearance or half-life. |
| popPK | Khawar_2019 | irrelevant | 4 | 2 | The paper reports radiation dosimetry and biodistribution imaging metrics (absorbed doses in mSv/MBq) for a radiolabeled conjugate ([68Ga]Ga-DOTAZOL), not specific toxicokinetic parameters like half-lives, clearance rates, or partition coefficients for the zoledronate substance itself; while residence times exist, they are not explicitly extracted or numeric in the provided evidence. |
| popPK | Khawar_2019_2 | irrelevant | 2 | 8 | The paper reports dosimetry and biodistribution for the radiolabeled complex [177Lu]Lu-DOTAZOL, not the unlabelled parent substance zoledronate; the kinetic parameters (residence times, absorbed doses) belong to the radiopharmaceutical. |
| popPK | Kirby_2024 | irrelevant | 0 | 0 | The paper reports cytotoxicity (viability loss) and cellular uptake mechanisms (macropinocytosis inhibition) in human gingival fibroblast cells (in vitro), but does not provide quantitative toxicokinetic parameters such as clearance, volume of distribution, half-life, or partition coefficients. |
| popPK | La-Beck_2021 | irrelevant | 0 | 0 | The text is a narrative review abstract with no specific quantitative kinetic parameters or numeric data values for zoledronate. |
| popPK | Lafage-Proust_2008 | irrelevant | 0 | 0 | The paper reports on renal safety and creatinine clearance as clinical outcomes in a large trial, but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or Vd) for zoledronate. |
| popPK | Lan_2019 | irrelevant | 0 | 0 | The paper reports urinary metabolite biomarkers and mechanisms of nephrotoxicity in rats but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for zoledronate itself. |
| popPK | Legay_2002 | irrelevant | 2 | 0 | The paper focuses on the development and validation of a radioimmunoassay (RIA) method; while it mentions multiphasic profiles and renal recovery, no specific quantitative toxicokinetic parameters (e.g., half-lives, clearance values, Vd) are provided in the text. |
| PGx | Lerman_2023 | not_relevant | 0 | 0 | The paper discusses zoledronate only as a treatment for rebound hypercalcemia and does not analyze genetic variants affecting zoledronate PK or PD. |
| popPK | Li_2017 | relevant | 7 | 1 | The paper reports on zoledronate biodistribution and blood circulating time in mice, which are toxicokinetic measures, but the specific quantitative values (e.g., AUC, half-life, %ID) are not present in the provided text. |
| popPK | Li_2019 | relevant | 8 | 2 | The paper reports biodistribution data (relative distribution in bone vs tumor) for zoledronate in mice, which constitutes tissue distribution kinetics, but specific numeric parameters are not provided in the abstract and are likely in figures or supplementary tables. |
| popPK | Lin_2010 | irrelevant | 2 | 0 | Zoledronate (ZL) is used only as a comparison agent, not the subject substance, and the study focuses on the biodistribution of a novel derivative (EMIDP). |
| popPK | Lin_2012 | irrelevant | 2 | 0 | The paper focuses on developing and evaluating new radioactive derivatives (IBDP, IPeDP) and compares them to (99m)Tc-ZL, but does not report quantitative toxicokinetic parameters for zoledronate itself. |
| popPK | Lohiya_2024 | irrelevant | 0 | 0 | The paper is a clinical case report on surgical treatment and adjuvant therapy efficacy, reporting no quantitative toxicokinetic parameters for zoledronic acid. |
| popPK | Ma_2024 | irrelevant | 2 | 1 | The paper is a clinical efficacy and safety study (outcome epidemiology) comparing Denosumab and Zoledronate; it reports biomarker changes (BTMs) and adverse event rates but no quantitative toxicokinetic parameters (half-life, clearance, Vd, etc.) for zoledronate. |
| popPK | Malgo_2024 | irrelevant | 0 | 0 | This is a clinical safety/outcome study regarding zoledronate administration in hip fracture patients, reporting no toxicokinetic parameters. |
| popPK | Martín-Jiménez_2007 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| popPK | Meckel_2017 | irrelevant | 2 | 8 | The paper reports biodistribution and kinetic parameters for radiolabeled DOTA-conjugates of zoledronate (DOTAZOL), not zoledronate itself; zoledronate is a structural precursor/ligand but the measured substance is a distinct chelator-nuclide complex. |
| popPK | Miller_2011 | irrelevant | 2 | 0 | The paper is a general review of renal safety discussing zoledronate qualitatively without reporting any specific quantitative toxicokinetic parameters. |
| popPK | Miller_2013 | irrelevant | 1 | 0 | This is a review paper on renal safety outcomes, reporting no specific quantitative toxicokinetic parameters for zoledronate. |
| popPK | Mills_2022 | irrelevant | 0 | 0 | The paper uses zoledronic acid as a comparator or agent to modulate nanoparticle clearance, not as the subject substance for kinetic parameter extraction. |
| popPK | Moltzahn_2012 | irrelevant | 0 | 0 | The text is a general review/abstract mentioning zoledronic acid as a comparator for denosumab but provides no specific toxicokinetic parameters or quantitative data. |
| popPK | Morado-Urbina_2014 | irrelevant | 0 | 0 | The study reports on the pharmacological/therapeutic efficacy of zoledronate in a pain model, providing only administration doses but no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients). |
| popPK | Morio_2014 | irrelevant | 1 | 0 | The study is a clinical outcome analysis comparing survival rates based on renal impairment status without reporting any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Motaleb_2017 | irrelevant | 3 | 0 | The kinetic parameters (Cmax, tmax, AUC, MRT, t1/2, bioavailability) describe the novel derivative 99mTc-EMIHPBP, not zoledronate itself, and zoledronate is not the subject of the pharmacokinetic modeling. |
| popPK | Muzaffar-Ur-Rehman_2025 | irrelevant | 0 | 0 | The paper is an in silico drug design study using molecular docking and dynamics where zoledronate is only mentioned as a structural reference/comparator, with no measured or modeled toxicokinetic parameters reported. |
| popPK | Nalluri_2026 | irrelevant | 0 | 0 | The paper is a clinical case report where zoledronate is mentioned only as a failed treatment for hypercalcemia, with no quantitative toxicokinetic parameters reported. |
| popPK | Naruto_2023 | irrelevant | 0 | 0 | The paper reports clinical outcomes and bone metabolic markers (NTx) for denosumab and zoledronate in HCC patients but provides no quantitative toxicokinetic parameters (half-life, clearance, Vd, etc.) for zoledronate itself; zoledronate is merely a prior therapy context. |
| popPK | Nguyen_2018 | irrelevant | 0 | 0 | The paper reports clinical outcomes (hypomagnesemia, hypophosphatemia, ONJ) and cost data for zoledronic acid but contains no quantitative toxicokinetic parameters such as half-life, clearance, volume of distribution, or PK model parameters. |
| popPK | Nieto_2013 | relevant | 8 | 0 | The paper is a pharmacokinetic study in horses using a 2-compartment model, but the specific numeric parameter values are not included in the extracted text, only the model structure and qualitative results. |
| popPK | Okada_2013 | irrelevant | 0 | 0 | The paper is an epidemiological study on denosumab-induced hypocalcemia where zoledronic acid is only mentioned as a prior exposure/comparator; no toxicokinetic parameters for zoledronate are reported. |
| popPK | Palmer_2021 | irrelevant | 0 | 0 | This is a clinical safety/efficacy study reporting on serum creatinine and calcium outcomes, with no toxicokinetic parameters reported. |
| popPK | Perez_2015 | irrelevant | 0 | 0 | The paper is a review about the pharmacology of denosumab, where zoledronate is mentioned only as a comparator in clinical outcomes, with no quantitative kinetic parameters provided for zoledronate. |
| popPK | Pieper_2007 | irrelevant | 0 | 0 | The paper is an epidemiological study on vitamin D levels in hip fracture patients where zoledronate is merely the context of the clinical trial (a co-exposure/comparator), with no toxicokinetic parameters for zoledronate reported. |
| popPK | Pineda-Roman_2007 | irrelevant | 0 | 0 | The paper is a clinical discussion on melphalan pharmacokinetics and renal outcomes; zoledronate is mentioned only as a cause of renal dysfunction, not as a subject of kinetic parameter extraction. |
| popPK | Portales-Castillo_2022 | irrelevant | 1 | 0 | The paper describes clinical cases of Fanconi syndrome and adverse outcomes without reporting any quantitative toxicokinetic parameters (rates, half-lives, partitions) for zoledronate. |
| popPK | Qin_2024 | irrelevant | 1 | 0 | The paper focuses on the molecular mechanisms (ERS, apoptosis, lymphatic drainage) and nanoparticle formulation of zoledronate for treating osteonecrosis, reporting no quantitative pharmacokinetic parameters (half-life, clearance, etc.). |
| popPK | Qiu_2011 | irrelevant | 1 | 2 | The paper focuses on synthesis and biodistribution of 99mTc-labeled derivatives of zoledronic acid (MIPrDP, MIBDP, MIPeDP), not zoledronate itself; no kinetic parameters for zoledronate are reported. |
| popPK | Qiu_2013 | irrelevant | 2 | 0 | The paper focuses on the kinetics of a new tracer (99mTc-BIPeDP); zoledronate is mentioned only as a comparator without specific numeric kinetic parameters reported for it in the text. |
| popPK | Qiu_2015 | irrelevant | 2 | 0 | The quantitative kinetic parameters reported are for 99mTc-HBIDP, not zoledronate; zoledronate appears only as a comparator without specific kinetic data provided in the text. |
| popPK | Qu_2024 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for zearalenone (ZEN), not zoledronate; zoledronate is not the subject substance. |
| popPK | Ramírez_2009 | irrelevant | 0 | 0 | The paper discusses dosage adjustment based on creatinine clearance formulas and does not report quantitative toxicokinetic parameters for zoledronate. |
| popPK | Recknor_2011 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and safety outcomes with no reported quantitative pharmacokinetic parameters or numeric values. |
| popPK | Riquelme-Guzmán_2022 | irrelevant | 0 | 0 | The paper reports the functional effect of zoledronic acid on osteoclast activity and skeletal resorption in axolotl limb regeneration, but does not report any quantitative toxicokinetic parameters (such as half-life, clearance, or volume of distribution) for zoledronate itself. |
| popPK | Roux_2012 | irrelevant | 0 | 0 | The paper reports clinical outcomes (bone mineral density changes) and treatment efficacy comparisons, but contains no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Rozenbaum_2020 | irrelevant | 1 | 1 | The paper is an immunology study on CAR-T cells where zoledronate is used merely as a reagent for T-cell expansion and a drug for in vivo priming in a leukemia model, with no toxicokinetic parameters (ADME, clearance, volume of distribution, etc.) for zoledronate reported. |
| popPK | Ruan_2023 | irrelevant | 0 | 0 | The paper studies zolmitriptan and isopropyl myristate, not zoledronate, which is not mentioned or analyzed. |
| popPK | Russell_2011 | irrelevant | 2 | 0 | The paper is a Phase I clinical trial reporting toxicity and dose recommendations; it mentions that zoledronic acid pharmacokinetics were "similar to adults" but provides no actual quantitative kinetic parameters (values, tables, or figures) in the text. |
| popPK | Schini_2022 | irrelevant | 0 | 0 | This is a clinical outcome study assessing renal safety and predicting AKI risk using eGFR/CrCl cut-offs; it does not report any toxicokinetic parameters (half-life, clearance, volume of distribution, etc.) for zoledronate. |
| popPK | Schmitt_2013 | irrelevant | 1 | 0 | The paper reports clinical outcomes (renal function/creatinine clearance) but does not report quantitative toxicokinetic parameters such as half-lives, clearances, or volumes of distribution. |
| popPK | Shah_2012 | irrelevant | 0 | 0 | The study reports clinical outcomes (incidence of renal failure) rather than any quantitative toxicokinetic parameters such as clearance, half-life, or volume of distribution. |
| popPK | Shiraki_2017 | relevant | 8 | 3 | The paper reports pharmacokinetic outcomes (Cmax, AUC, urinary excretion) for zoledronic acid in humans, but specific numeric parameter values are missing from the provided text summary. |
| popPK | Shmeeda_2013 | irrelevant | 0 | 0 | The paper describes pharmacokinetic changes (sustained levels, slow clearance) in mice but provides no quantitative numeric kinetic parameters (half-lives, rate constants, partition coefficients, etc.) in the provided evidence. |
| popPK | Skerjanec_2003 | relevant | 10 | 3 | The abstract confirms a zoledronic acid PK study in humans reporting AUC and excretion, but the specific numeric values for kinetic parameters are not included in the provided text snippet. |
| popPK | Soares_2016 | irrelevant | 2 | 0 | The paper is a review article that does not present its own quantitative kinetic parameters for zoledronate. |
| popPK | Song_2025 | irrelevant | 0 | 0 | The paper is a clinical survey on diagnostic and management preferences for primary hyperparathyroidism, reporting only percentages of respondent preferences and no quantitative toxicokinetic parameters for zoledronate. |
| popPK | Sproat_2023 | irrelevant | 0 | 0 | The paper is a retrospective clinical outcome study comparing drug costs and eligibility, containing no toxicokinetic parameters for zoledronate. |
| popPK | Stopeck_2010 | irrelevant | 1 | 0 | The paper is a clinical efficacy and safety study comparing denosumab and zoledronic acid for bone metastases, reporting outcome data (skeletal-related events, adverse events) but no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Sun_2026 | irrelevant | 1 | 0 | The paper is a clinical safety study reporting on serum creatinine, calcium, and temperature changes, but it does not report quantitative toxicokinetic parameters (such as half-life, clearance, or volume of distribution) for zoledronate. |
| popPK | Søe_2014 | irrelevant | 2 | 0 | The paper reports clinical outcomes (bone markers and creatinine clearance) and statistical correlations with dosing schedules, but contains no quantitative pharmacokinetic parameters such as half-lives, clearance, volume of distribution, or partition coefficients. |
| popPK | Terpos_2021 | irrelevant | 0 | 0 | The paper is a clinical trial comparing efficacy (progression-free survival) of denosumab versus zoledronic acid, reporting no toxicokinetic parameters (PK data) for zoledronate. |
| popPK | Vaishampayan_2017 | irrelevant | 0 | 0 | The paper reports clinical efficacy and imaging outcomes (SUV, PSA, NTx) in humans but does not report quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution for zoledronate. |
| popPK | Van_2011 | irrelevant | 0 | 0 | The paper is a clinical practice guideline review focusing on treatment recommendations and efficacy, containing no quantitative toxicokinetic parameters for zoledronate. |
| popPK | Wang_2011 | irrelevant | 2 | 6 | The study focuses on a novel zolendronate derivative (i-PIDP) labeled with Technetium-99m for imaging, not the disposition parameters of the parent drug zoledronate itself. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper reports on the biological effects of zoledronic acid as a positive control in fracture healing and bone growth studies in mice, but provides no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for the substance. |
| popPK | Watts_2010 | irrelevant | 2 | 0 | The paper is a clinical review of bisphosphonate safety and efficacy, providing qualitative statements about bone accumulation but no quantitative toxicokinetic parameters for zoledronate. |
| PGx | Whyte_2024 | not_relevant | 0 | 0 | The paper reports a genetic disease (TMEM53 mutation) where zoledronate was used therapeutically but failed, without reporting any pharmacokinetic or pharmacodynamic parameters modified by genotype. |
| popPK | Xu_2021 | irrelevant | 2 | 0 | The paper focuses on nanoparticle fabrication, in vitro release profiles, and toxicity assessment; it does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, Vd) for zoledronate in animals, and cited human PK data are from a reference not analyzed here. |
| popPK | Yamasaki_2016 | irrelevant | 0 | 10 | The paper reports clinical outcomes (creatinine clearance rates) and dose adjustments but contains no toxicokinetic parameters (such as half-life, clearance, volume of distribution, or rate constants) for zoledronate. |
| popPK | Yanae_2012 | irrelevant | 0 | 0 | The study is a clinical outcome analysis of adverse events and renal function, reporting no quantitative toxicokinetic parameters (such as half-lives, clearance, or volume of distribution) for zoledronate. |
| popPK | Yoshizawa_2023 | irrelevant | 1 | 0 | The paper reports clinical outcomes (BMD, adverse effects) but contains no quantitative toxicokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Zatkóné_2009 | irrelevant | 0 | 0 | The paper is a nursing review on patient compliance and care, containing no quantitative toxicokinetic parameters for zoledronate. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on zoledronic acid-induced osteonecrosis of the jaw (BRONJ) focusing on macrophage biology and autophagy, containing no toxicokinetic parameters (ADME data). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzoledronate%5D&body=Drug%3A%20zoledronate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zoledronate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 18:37 UTC</sub>
