<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Aflatoxin B2&quot;}]"></div>

# Aflatoxin B2

- **generic name:** Aflatoxin B2
- **T3DB:** [T3D3669](http://www.t3db.ca/toxins/T3D3669) · **PubChem:** [CID 23648](https://pubchem.ncbi.nlm.nih.gov/compound/23648)

## About

Aflatoxin B2 is a metabolite of Aspergillus flavus.

- **Category:** Fungal Toxin, Food Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** The native habitat of Aspergillus is in soil, decaying vegetation, hay, and grains undergoing microbiological deterioration and it invades all types of organic substrates whenever conditions are favorable for its growth. Crops which are frequently affected include cereals (maize, sorghum, pearl millet, rice, wheat), oilseeds (peanut, soybean, sunflower, cotton), spices (chile peppers, black pepper, coriander, turmeric, ginger), and tree nuts (almond, pistachio, walnut, coconut, brazil nut). …
- **Mechanism of toxicity:** Aflatoxins produce singlet oxygen upon their exposure to UV (365-nm) light. Singlet oxygen in turn activates them to mutagens and DNA binding species. …
- **Health effects:** The main target organ in mammals is the liver so aflatoxicosis is primarily a hepatic disease. Protracted exposure to aflatoxins may cause liver damage and necrosis, cholestasis, and hepatomas. …
- **Carcinogenicity:** IARC group 1, carcinogenic to humans
- **Treatment:** Administration of phonobarbital enhances hepatic transformation activities and also protects against AFB-induced toxicity, carcinogenicity and DNA binding in vivo. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3669">T3DB T3D3669</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 7220-81-7</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 08:14 | 22:08 | 0/0/0 | 0/0/0 | 0/0/0 | 826,272/25,775 | ollama / glm-5.3-flash | 41 | 7/33 | 41/0 | 0 |

## Coverage

- **PubMed hits:** 537 matched, 110 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_1984.pdf` | Chen C et al., Tissue deposition and clearance of afla…, Food and chemical toxicolog… (1984) | popPK | 5 | [10.1016/0278-6915(84)90327-2](https://doi.org/10.1016/0278-6915(84)90327-2) | [6539734](https://pubmed.ncbi.nlm.nih.gov/6539734) | Reports tissue deposition and rapid clearance time-course of aflatoxin B2 in broiler chickens, though only approximate numeric levels are given and detailed values may be in tables/figures. |

<sub>queue written 2026-11-15 08:13 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Acevedo_2024 | irrelevant | 0 | 0 | Paper is about AAV viral protein stoichiometry and baculovirus impurity assays; aflatoxin B2 does not appear at all. |
| popPK | Akamine_2019 | irrelevant | 0 | 0 | A review of P-gp drug-drug interactions in humans; aflatoxin B2 does not appear as a subject substance and no kinetic parameters for it are present. |
| popPK | Akita_2010 | irrelevant | 0 | 0 | This paper reports HDL clearance kinetics in PPARα-null mice; aflatoxin B2 does not appear at all as a study substance. |
| popPK | Arifa_2025 | irrelevant | 0 | 0 | Sepsis/neutrophil study with bradykinin receptors; aflatoxin B2 does not appear and no kinetic parameters for it are reported. |
| popPK | Ashraf_2022 | irrelevant | 1 | 1 | AFB1 toxicology study in chickens, but no toxicokinetic parameters (no half-life, clearance, rates, or concentrations over time), only effects data (wrong substance focus — aflatoxin B1, not B2). |
| popPK | Bailey_1987 | irrelevant | 2 | 2 | Toxicokinetic data are for aflatoxin B1 (not B2) in trout, and the actual numeric values reside in Figures 1-3, which are only described, not provided; the substance is also aflatoxin B1, not aflatoxin B2. |
| popPK | Baldo_2023 | irrelevant | 0 | 0 | Case report on thiamine deficiency lactic acidosis; aflatoxin B2 is never mentioned and no toxicokinetic parameters for it are present. |
| popPK | Ballerie_2019 | irrelevant | 0 | 0 | The paper studies efferocytosis in systemic sclerosis and contains no toxicokinetic parameters for aflatoxin_b2 whatsoever. |
| popPK | Berger_2021 | irrelevant | 0 | 0 | The paper concerns micronutrient clearance during renal replacement therapy; aflatoxin_b2 is never mentioned and no kinetic parameters for it appear. |
| popPK | Blagih_2012 | irrelevant | 0 | 0 | Review on lymphocyte metabolism (LKB1/AMPK) with no aflatoxin B2 or kinetic parameters whatsoever. |
| popPK | Brostjan_2020 | irrelevant | 0 | 0 | Review on neutrophil death and clearance of apoptotic cells; aflatoxin B2 is not mentioned and no toxicokinetic parameters appear. |
| popPK | Brás-Silva_2008 | irrelevant | 0 | 0 | The paper is a review of endothelin-1 myocardial effects; aflatoxin B2 is not mentioned and no kinetic parameters for it exist. |
| popPK | Buur_2024 | irrelevant | 0 | 0 | The paper concerns pharmacokinetics of the antibody Lu AF82422 in humans, with no data on aflatoxin_b2. |
| popPK | Cai_2024 | irrelevant | 0 | 0 | The paper studies polyethylene nanoplastics in macrophages; aflatoxin B2 does not appear at all and no kinetic parameters for it are reported. |
| popPK | Cambridge_1995 | irrelevant | 0 | 0 | The paper concerns bradykinin-induced plasma extravasation in rat knee joints; aflatoxin_b2 is absent and no kinetic parameters for it exist. |
| popPK | Casino_2023 | irrelevant | 0 | 0 | The paper describes urea kinetics (Kt/V, protein catabolic rate) in hemodialysis patients; aflatoxin_b2 is never mentioned. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | The paper concerns neutrophil signaling adapter protein 3BP2 in mice, with no aflatoxin B2 toxicokinetic data of any kind. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper studies the anti-HIV peptide enfuvirtide (T20) and its oligomannose conjugates, not aflatoxin_b2, which does not appear anywhere in the evidence. |
| popPK | Cohn_2025 | irrelevant | 0 | 0 | Clinical trial of CRISPR gene-editing therapy for hereditary angioedema; aflatoxin B2 is not mentioned and no toxicokinetic parameters for it appear. |
| popPK | Cooley_2016 | irrelevant | 0 | 0 | Paper is about SPAG6 immunology in mice; aflatoxin_b2 does not appear at all, and no toxicokinetic parameters are present. |
| popPK | Costa_2021 | irrelevant | 0 | 0 | The paper is about thiamine supplementation in septic shock; aflatoxin_b2 is never mentioned, and the half-life value given (9.5–18.5 days) belongs to thiamine, not aflatoxin_b2. |
| popPK | Coulombe_1985 | irrelevant | 2 | 0 | The paper reports pharmacokinetic parameters (half-lives, excretion percentages) for aflatoxin B1, not aflatoxin B2, so the parameters belong to a different substance. |
| popPK | Dasí-Navarro_2024 | irrelevant | 0 | 0 | Human urinary biomonitoring/exposure study; aflatoxin B2 appears only as an analytical target with no kinetic parameters (no half-life, clearance, rate constants or model) reported. |
| popPK | Deng_2023 | irrelevant | 0 | 0 | The paper concerns HCV antibodies and viral neutralization; aflatoxin B2 appears nowhere and no kinetic parameters are reported. |
| popPK | Fraeyman_2017 | irrelevant | 0 | 0 | This review covers enniatins, beauvericin, moniliformin and Alternaria toxins only; aflatoxin_b2 does not appear as a subject substance and no kinetic parameters for it are present. |
| popPK | Goeger_1986 | irrelevant | 1 | 1 | The study concerns aflatoxin B1, not aflatoxin B2, and reports only relative distribution/metabolism changes with no numeric kinetic parameters for aflatoxin B2. |
| popPK | Greenfield_2023 | irrelevant | 0 | 0 | The paper studies polymerized Human hemoglobin ("B2" refers to a fractionation bracket, not aflatoxin B2); no toxicokinetic parameters for aflatoxin B2 appear. |
| popPK | Gridley_2024 | irrelevant | 0 | 0 | Immunology study of viral infection in mice with no toxicokinetic parameters for aflatoxin_b2 and no mention of the substance. |
| popPK | Grist_2023 | irrelevant | 0 | 0 | The paper concerns hyperpolarized 13C pyruvate MRI brain imaging; aflatoxin_b2 does not appear at all as a subject substance, so no kinetic parameters for it are reported. |
| popPK | Groopman_1987 | irrelevant | 1 | 0 | The paper concerns aflatoxin B1 (not B2) adduct biomonitoring methods; no numeric kinetic parameters are provided, and no values appear in the text. |
| popPK | Groopman_1992 | irrelevant | 1 | 0 | The paper concerns aflatoxin B1 (not B2) molecular dosimetry/biomarkers in urine with no numeric kinetic parameters for aflatoxin B2 present in the evidence. |
| popPK | Gulilat_2020 | irrelevant | 0 | 0 | The paper concerns apixaban pharmacokinetics; aflatoxin B2 does not appear as a subject substance, and none of the excluded low-scoring conditions apply. |
| popPK | Hess_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of thiamine (vitamin B1) in horses, not aflatoxin_b2, so aflatoxin_b2 is not the subject substance. |
| popPK | Hirota_2019 | irrelevant | 0 | 0 | The paper reviews pharmacokinetics of ALK inhibitors (crizotinib, ceritinib, etc.). Aflatoxin B2 is not mentioned, and no kinetic parameters for aflatoxin B2 appear anywhere in the evidence. |
| popPK | Hurkmans_2025 | irrelevant | 0 | 0 | The paper concerns SR-B1/cholesterol metabolism in mice; aflatoxin B2 is never mentioned and no kinetic parameters exist for it. |
| popPK | Jiao_2023 | irrelevant | 0 | 0 | The "B2" in this paper is polymyxin B2, a polymyxin B component, not aflatoxin B2; no aflatoxin toxicokinetic parameters are present. |
| popPK | Kaveri_2012 | irrelevant | 0 | 0 | This paper concerns natural IgM immunology and contains no toxicokinetic data on aflatoxin_b2. |
| popPK | Kempaiah_2019 | irrelevant | 0 | 0 | Paper is about Plasmodium phosphoglycolate phosphatase enzyme kinetics; aflatoxin B2 does not appear as a subject substance and no toxicokinetic parameters for it are reported. |
| popPK | Kim_1988 | irrelevant | 0 | 0 | The paper concerns renin isoforms (renin B-2 is a glycosylation variant of renin), not the mycotoxin aflatoxin B2; "B-2" is not the subject substance. |
| popPK | Kobayashi_2021 | irrelevant | 0 | 0 | The paper concerns myostatin deficiency in septic mice and contains no kinetic parameters for aflatoxin B2 whatsoever. |
| popPK | Koç_2026 | irrelevant | 0 | 0 | A review on CYP450 and MASLD; aflatoxin B1 only mentioned qualitatively (not B2) with no kinetic parameters and no numeric values. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The paper is about complement and natural antibodies; aflatoxin_b2 does not appear at all and no kinetic parameters are present. |
| popPK | Küçükköse_2022 | irrelevant | 0 | 0 | A colorectal cancer immunotherapy study in humanized mice with no toxicokinetic parameters for aflatoxin_b2 anywhere in the evidence. |
| popPK | Lam_2020 | irrelevant | 0 | 0 | This is a review of B cell responses to viral infections with no aflatoxin B2 toxicokinetic parameters whatsoever. |
| popPK | Lassen_2015 | irrelevant | 0 | 0 | The paper is a pharmacogenetics review of tramadol, with no kinetic parameters for aflatoxin_b2. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper reports rivaroxaban pharmacokinetics (concentrations, creatinine clearance) with no aflatoxin_B2 kinetic parameters of any kind. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The paper uses aflatoxin B1 (not B2) as a test promutagen in genotoxicity assays, with no kinetic parameters of any kind reported. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The paper is a mouse sepsis/omentum immunology study with no toxicokinetic parameters for aflatoxin B2 at all. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper reports ocular pharmacokinetics of gatifloxacin in rabbits; aflatoxin B2 does not appear anywhere in the study. |
| popPK | Longhurst_2024 | irrelevant | 0 | 0 | The paper concerns CRISPR gene editing (NTLA-2002/KLKB1) for hereditary angioedema; aflatoxin_b2 is never mentioned and no toxicokinetic parameters for it appear. |
| popPK | Lootens_2024 | irrelevant | 2 | 8 | The subject substance is aflatoxin B1, not aflatoxin_b2; AFB2 is not studied here, so no toxicokinetic parameters for aflatoxin_b2 exist in the paper. |
| popPK | Mahdjoub_2026 | irrelevant | 0 | 0 | The paper's kinetic parameters (hepatic clearance values) belong to enniatin B1, not aflatoxin B2, which does not appear as the subject substance. |
| popPK | Mara_2024 | irrelevant | 0 | 0 | Immunology study of natural antibodies in allergic airway disease in mice; aflatoxin B2 is not mentioned and no kinetic parameters are reported. |
| popPK | Mariam_2025 | irrelevant | 0 | 0 | The paper concerns a GLP-1 dimeric analog's receptor structural modeling; aflatoxin B2 does not appear at all and no toxicokinetic parameters are reported. |
| popPK | Melander_2023 | irrelevant | 0 | 0 | The paper reports PK parameters (CL, Vd, t½) for cyclic peptides SFTI-1 and kalata B1 in rats; aflatoxin B2 does not appear anywhere as the subject substance. |
| popPK | Molinatti_1986 | irrelevant | 0 | 0 | The paper concerns lactic acidosis and phenformin; aflatoxin_b2 is never mentioned and no kinetic parameters for it appear. |
| popPK | Moradihaghgou_2023 | irrelevant | 0 | 0 | In silico computational screening of flavonoid PPARγ partial agonists; aflatoxin B2 does not appear as a subject substance and no toxicokinetic parameters are reported. |
| popPK | Muthusamy_2024 | irrelevant | 0 | 0 | In silico docking/ADME study of vasicine as an AFB1/OTA binder; aflatoxin B2 does not appear at all and no kinetic parameters for it are present. |
| popPK | N_2025 | irrelevant | 0 | 0 | Computational drug-design paper on benzothiazole p53-MDM2 inhibitors; aflatoxin B2 is not mentioned and no kinetic parameters are reported. |
| popPK | Naderi_2023 | irrelevant | 0 | 0 | This is an HLA-DQB1 polymorphism study of HBV patients; no aflatoxin B2 or any toxicokinetic parameters of aflatoxin B2 are present anywhere. |
| popPK | Nie_2026 | irrelevant | 0 | 0 | No toxicokinetic parameters for aflatoxin B2 are reported; the paper concerns senescence and GBM recurrence with no kinetic data. |
| popPK | Pallarés_2022 | irrelevant | 1 | 4 | This is a human biomonitoring/exposure study measuring AFB2 urinary concentrations and PDI risk estimates, with no kinetic parameters (half-life, clearance, excretion rate, partition coefficients) of aflatoxin B2 itself. |
| popPK | Pastén-Castrejón_2026 | irrelevant | 0 | 0 | Study of thiamine pyrophosphate in AD mice; aflatoxin B1/B2 never appears, and no toxicokinetic parameters are reported. |
| popPK | Pegram_1989 | irrelevant | 1 | 1 | The paper studies aflatoxin B1 (not B2), is a DNA adduct/outcome study with no numeric kinetic parameters in the evidence, and mentions clearance only qualitatively. |
| popPK | Petkova_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for N-acetylcysteine (NAC), not aflatoxin B2; aflatoxin B1 is mentioned only as a context for NAC's antioxidant use. |
| popPK | Petrovicová_1983 | irrelevant | 0 | 0 | Paper concerns coxsackievirus B1 infection in mice, with no aflatoxin B2 kinetic parameters of any kind. |
| popPK | Phaisal_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for rifapentine and isoniazid, with aflatoxin_b2 appearing nowhere in the evidence. |
| popPK | Poth_2019 | irrelevant | 0 | 0 | The paper's subject substances are kalata B1 and cyclotide analogues; aflatoxin B2 appears not at all, so no toxicokinetic parameters for aflatoxin_b2 are present. |
| popPK | Powers_2022 | irrelevant | 0 | 0 | The paper is about SR-B1/HDL-cholesterol transport; aflatoxin B2 does not appear at all, and no toxicokinetic parameters for it are present. |
| popPK | Ransegnola_2024 | irrelevant | 0 | 0 | The paper is an immunology review of IgM-producing B cells in atherosclerosis with no aflatoxin_b2 kinetic data of any kind. |
| popPK | Roy_2014 | irrelevant | 0 | 0 | Paper concerns Grb2/UVRAG interactions in Alzheimer's disease models with no toxicokinetic data for aflatoxin B2 of any kind. |
| popPK | Sahay_2014 | irrelevant | 0 | 0 | This paper is about Bacillus anthracis infection and immune responses, with no aflatoxin B2 kinetic data at all. |
| popPK | Sharma_2022 | irrelevant | 0 | 0 | The paper is about nanodisc delivery of antisense oligonucleotides with no toxicokinetic parameters for aflatoxin B2 at all; aflatoxin is never mentioned. |
| popPK | Shelton_1986 | irrelevant | 2 | 2 | Subject substance is aflatoxin B1 (not B2) in rainbow trout; mostly qualitative distribution/metabolism percentages without true TK parameters, and no numeric kinetic values are given in the evidence. |
| popPK | Slobodchikova_2018 | irrelevant | 0 | 0 | This is an analytical LC-MS method development paper for measuring mycotoxins (including AFB2) in human plasma — it reports validation metrics (LOQs, recovery, matrix effects), not any toxicokinetic parameters; no half-life, clearance, rate constants or model for AFB2 itself. |
| popPK | Sohel_2025 | irrelevant | 0 | 0 | Review of phytoestrogens in TNBC with no kinetic parameters for aflatoxin B2; aflatoxin B2 is not a subject substance here. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The subject substance is aflatoxin B1 (all PK parameters, IC50s, AUC, Vd, CL belong to AFB1 and tiamulin); aflatoxin B2 appears only once as a feed co-contaminant with no kinetic data. |
| popPK | Tian_2024 | irrelevant | 0 | 0 | This plant stress-tolerance study contains no aflatoxin_b2 kinetic data whatsoever. |
| popPK | Tindle_2023 | irrelevant | 0 | 0 | A Crohn's disease patient-derived organoid study with no aflatoxin B2 or any toxicokinetic parameters mentioned. |
| popPK | Trelford_2024 | irrelevant | 0 | 0 | This is an ovarian cancer cell biology study (LKB1/STRADα in spheroid invasion) with no mention of aflatoxin B2 or any toxicokinetic parameters. |
| popPK | Vesselinovitch_1982 | irrelevant | 0 | 0 | No kinetic parameters for aflatoxin B2; the paper only discusses liver tumor interpretation with a passing mention of aflatoxin B1 exposure. |
| popPK | Wan_2023 | irrelevant | 0 | 0 | This is an oocyte mRNA storage/clearance study in Lsm14b knockout mice — "clearance" refers to mRNA decay, not aflatoxin B2 toxicokinetics; no aflatoxin parameters exist. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | Paper concerns antitubercular drug candidates, not aflatoxin B2; no kinetic parameters for aflatoxin B2 appear. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper concerns polymyxin B (PB2 component) quantification, not aflatoxin B2, and no aflatoxin kinetic parameters appear. |
| popPK | Watanabe_2021 | irrelevant | 0 | 0 | The paper reports PET pharmacokinetics and dosimetry of [11C]TTFD (a thiamine derivative), with aflatoxin_b2 not appearing as the subject substance at all. |
| popPK | Wen_2022 | irrelevant | 0 | 0 | This is a radiopharmaceutical (177Lu-EB-FAPI tracer) study; aflatoxin B2 never appears as a subject substance (B2 here refers to EB-FAPI-B2, a different compound), so no aflatoxin_b2 kinetic parameters exist. |
| popPK | Wermke_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of the drug obrixtamig, with aflatoxin_b2 appearing nowhere in the study; no kinetic parameters for aflatoxin_b2 are present. |
| popPK | Williams_2021 | irrelevant | 0 | 0 | This is a review of I3C/DIM (not aflatoxin B2) toxicokinetics; aflatoxin B1 appears only as a co-exposure carcinogen in chemoprevention discussion, with no AFB2 kinetic parameters. |
| popPK | Xiang_2015 | irrelevant | 0 | 0 | The paper concerns aristolochic acid I (AA-I) pharmacokinetics in Pi-deficiency rats; aflatoxin B2 does not appear as a study substance. |
| popPK | Xiao_2024 | irrelevant | 0 | 0 | This is an immunology study of Lkb1 in γδ T cells with no aflatoxin B2 toxicokinetic parameters whatsoever. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | "B2" here refers to subclass B2 metallo-β-lactamases, not aflatoxin B2; no aflatoxin toxicokinetic data. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The paper concerns bufalin/acetyl-bufalin pharmacokinetics in rats; aflatoxin_b2 does not appear as a study substance and no kinetic parameters for it are reported. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper concerns insulin-Fc conjugates; aflatoxin B2 does not appear as a subject substance and no toxicokinetic parameters for it exist here. |
| popPK | Youngman_1992 | irrelevant | 0 | 0 | This is a rat study of AFB1-induced preneoplastic foci as a function of dietary protein; the substance of interest (aflatoxin B2) is not studied and no kinetic parameters, even for aflatoxin B1, are reported. |
| popPK | Yu_2015 | irrelevant | 0 | 0 | The paper is a review of microglial Aβ receptors in Alzheimer's disease with no relation to aflatoxin_b2 and no toxicokinetic parameters of any kind. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper concerns SHP2 inhibitor drug design for AML; aflatoxin B2 is not mentioned and no toxicokinetic parameters for it appear. |
| popPK | Zhu_2023 | irrelevant | 0 | 0 | This paper is about methotrexate biomimetic nanoparticles for atherosclerosis; aflatoxin_b2 does not appear as a subject substance and no toxicokinetic parameters for it are reported. |
| popPK | Zou_2020 | irrelevant | 0 | 0 | This is a review about IgM natural antibody T15/E06 in atherosclerosis with no toxicokinetic parameters for aflatoxin_b2. |
| popPK | de_2017 | irrelevant | 0 | 0 | The paper is about ABCG1 and pulmonary surfactant; aflatoxin B2 does not appear at all, with no kinetic parameters relevant to it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baflatoxin_b2%5D&body=Drug%3A%20aflatoxin_b2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aflatoxin_b2/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
