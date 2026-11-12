<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Maurocalcin&quot;}]"></div>

# Maurocalcin

- **generic name:** Maurocalcin
- **T3DB:** [T3D2582](http://www.t3db.ca/toxins/T3D2582) · **PubChem:** none

## About

Maurocalcin is a peptide toxin produced by the Chactoid scorpion (Scorpio maurus palmatus). It modifies channel gating behaviour of the ryanodine receptor.

- **Category:** Protein, Natural Toxin, Animal Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Maurocalcin is a peptide toxin produced by the Chactoid scorpion (Scorpio maurus palmatus).
- **Mechanism of toxicity:** Maurocalcin potently and reversibly modifies channel gating behaviour of the type 1 ryanodine receptor by inducing prominent subconductance behaviour.
- **Health effects:** Maurocalcin is neurotoxic.
- **Acute toxicity:** LD50: 9.37 mg/kg (Intravenous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2582">T3DB T3D2582</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 269745-22-4</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 04:22 | 1:11:03 | 0/0/0 | 0/0/0 | 0/0/0 | 1,272,812/35,339 | einfracz / qwen3.8-27b | 47 | 7/40 | 47/0 | 0 |

## Coverage

- **PubMed hits:** 249 matched, 204 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nemoto_1994.pdf` | Nemoto N et al., Elevated expression of the Cyp1a2 gene…, Archives of biochemistry an… (1994) | pgx | 7 | [10.1006/abbi.1994.1041](https://doi.org/10.1006/abbi.1994.1041) | [7508708](https://www.ncbi.nlm.nih.gov/pubmed/7508708) | metadata signals extractable PGX data (Cyp1a2, PK/PD-context) |

<sub>queue written 2026-11-11 04:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelsaid_2014 | irrelevant | 0 | 0 | The paper investigates cerebrovascular function in diabetic rats using bosentan and contains no data or parameters for maurocalcin. |
| popPK | Aboul-Nour_2024 | irrelevant | 0 | 0 | The paper investigates the hemodynamic phenomenon of competitive leptomeningeal flow in stroke patients and contains no data or kinetic parameters for maurocalcin. |
| popPK | Ahmad_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glycyrrhizic acid nanoparticles, not maurocalcin. |
| popPK | Arifuzzaman_2019 | irrelevant | 0 | 0 | The paper investigates the immunological mechanisms of mastoparan (a mast cell activator) in clearing bacterial infections, and does not report any toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for maurocalcin. |
| popPK | Arizono_1994 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the monoclonal antibody regavirumab (TI-23/MCA C23), not the substance maurocalcin. |
| popPK | Arizono_1994_2 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for a monoclonal antibody (regavirumab/MCA C23) against CMV, not for maurocalcin. |
| popPK | Armstrong_2021 | irrelevant | 0 | 0 | The paper focuses on the treatment of metabolic disorders with HST5040 and does not mention or provide any toxicokinetic parameters for maurocalcin. |
| popPK | Balcer-Kubiczek_1985 | irrelevant | 0 | 0 | The paper reports radiobiological dose-response parameters (radiosensitivity and transformation rates) for X-rays in cell lines and does not mention maurocalcin. |
| popPK | Basugi_1982 | irrelevant | 0 | 0 | The paper studies cerebral ischemia and edema in cats and contains no information about maurocalcin or its toxicokinetics. |
| popPK | Benjamin_2018 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of micafungin (an antifungal), not maurocalcin. |
| popPK | Bhat_1990 | irrelevant | 0 | 0 | The paper studies monochloroacetic acid (MCA), not maurocalcin. |
| popPK | Bhat_1991 | irrelevant | 0 | 0 | The paper studies chloroacetic acids in rats and contains no data for maurocalcin. |
| PGx | Biji_2026 | not_relevant | 0 | 0 | The paper focuses on integrating social determinants of health and genetic risk for chronic disease prediction and does not mention maurocalcin or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Bishop_1986 | irrelevant | 0 | 0 | The paper is a validation study of transcranial Doppler using Xenon-133 as a reference substance and does not report any kinetic parameters for maurocalcin. |
| popPK | Blay_1995 | irrelevant | 0 | 0 | The paper focuses on okadaic acid and does not contain any data regarding maurocalcin. |
| popPK | Bouchard_2003 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for malathion, not maurocalcin. |
| PGx | Brown_2025 | not_relevant | 0 | 0 | The paper focuses on complex disease risk prediction using social determinants and genetics; it does not mention maurocalcin or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Byun_2014 | irrelevant | 0 | 0 | The paper is a technical note on NIRS neuroimaging and exercise physiology, and it contains no mention or data regarding the substance maurocalcin. |
| popPK | Castanys-Muñoz_2012 | irrelevant | 0 | 0 | The paper investigates the function of a Leishmania metacaspase gene and does not report any toxicokinetic parameters for the substance maurocalcin. |
| PGx | Chen_2021 | not_relevant | 0 | 0 | The paper describes prenatal diagnosis of a metabolic disease (cblC defect) and does not discuss the drug maurocalcin or its pharmacokinetics/pharmacodynamics. |
| popPK | Choksey_1993 | irrelevant | 0 | 0 | The paper describes a surgical case regarding thermal clearance for blood flow monitoring and does not contain any toxicokinetic data or mentions of the substance maurocalcin. |
| popPK | Clark_1996 | irrelevant | 0 | 0 | The paper reports cerebral blood flow kinetics for the isotope 133Xe in humans and does not contain any data for the substance maurocalcin. |
| popPK | Connell_2011 | irrelevant | 0 | 0 | The paper investigates apocynin in rats and does not mention maurocalcin or provide any toxicokinetic parameters for it. |
| popPK | Cortesi_1983 | irrelevant | 0 | 0 | The paper studies the in vitro carcinogenicity of aflatoxin B1, benzidine, and other chemicals, and does not mention maurocalcin. |
| popPK | Coyer_1986 | irrelevant | 0 | 0 | The paper studies cerebral ischemia and blood flow in cats and contains no kinetic parameters or data for the substance maurocalcin. |
| popPK | Cudré-Cung_2016 | irrelevant | 0 | 0 | The paper focuses on the toxic effects of 2-methylcitrate in an in vitro model and does not contain any kinetic parameters for maurocalcin. |
| popPK | DeRiu_1980 | irrelevant | 0 | 0 | The paper studies cerebral ischemia in rabbits and does not mention or report any kinetic parameters for maurocalcin. |
| popPK | Dempsey_1985 | irrelevant | 0 | 0 | The paper studies cerebral ischemia in cats and contains no data for maurocalcin. |
| popPK | Dogan_2016 | irrelevant | 0 | 0 | The paper evaluates nasal mucociliary transport rates using a radiotracer (Tc-99m MAA) and does not contain any data on maurocalcin. |
| popPK | Du_1996 | irrelevant | 0 | 0 | The paper studies dextrorphan's neuroprotective effects in a rat model of cerebral ischemia and does not mention maurocalcin or report any toxicokinetic parameters for it. |
| PGx | Díaz-Maroto_2017 | not_relevant | 0 | 0 | The study examines UCP2 polymorphisms and stroke outcomes, with no mention of maurocalcin. |
| popPK | El-Said_2022 | irrelevant | 0 | 0 | The paper studies the protective effects of Musa sp. leaf extract against cadmium toxicity in mice, containing no kinetic parameters for maurocalcin. |
| popPK | Elgharbawy_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for N-acetylcysteine (NAC), not for the target substance maurocalcin. |
| popPK | Evans_2024 | irrelevant | 0 | 0 | The paper studies perivascular fluid movement (CSF dynamics) in rats and does not contain any toxicokinetic data for the substance maurocalcin. |
| popPK | Fajloun_2000 | irrelevant | 0 | 0 | The paper focuses on the chemical synthesis and structural characterization of maurocalcine, reporting toxicity (LD50) and electrophysiological effects, but contains no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Feng_2026 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of rtPA and PNP-rtPA, not maurocalcin, which is not mentioned. |
| popPK | Fenske_1979 | irrelevant | 0 | 0 | The paper studies the effect of dexamethasone on cerebral edema in cats and does not mention maurocalcin or its kinetic parameters. |
| PGx | Fernández-Cadenas_2006 | not_relevant | 0 | 0 | The study investigates the effect of ACE gene polymorphisms on t-PA-induced recanalization (clinical outcome), not a PK/PD parameter of maurocalcin. |
| popPK | Findlay_1989 | irrelevant | 0 | 0 | The paper focuses on the thrombolytic agent rt-PA and cerebral vasospasm pathophysiology, with no data on maurocalcin. |
| popPK | Fu_2013 | irrelevant | 0 | 0 | The paper studies the effect of calorie restriction on bile acid metabolism in mice and does not mention or measure the substance maurocalcin. |
| popPK | Fu_2016 | irrelevant | 0 | 0 | The paper reports kinetic parameters (clearance and half-life) for the tracer Gd-DTPA, not for the substance maurocalcin. |
| popPK | Garcia_1983 | irrelevant | 0 | 0 | The paper studies cerebral ischemia in primates and contains no data on the toxicokinetics or disposition of maurocalcin. |
| popPK | Gattuso_2026 | irrelevant | 0 | 0 | The paper discusses anti-CD20 monoclonal antibodies (rituximab, ocrelizumab, ofatumumab) and contains no mention or data regarding maurocalcin. |
| popPK | Gotch_2007 | irrelevant | 0 | 0 | The paper discusses the kinetics of calcium, not the peptide maurocalcin. |
| popPK | Grefhorst_2002 | irrelevant | 0 | 0 | The paper studies the LXR agonist T0901317 and its effects on lipogenesis, with no mention of the substance maurocalcin. |
| popPK | Grossmann_2000 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamics of acetazolamide on cerebral blood flow in humans and does not contain any toxicokinetic data for maurocalcin. |
| popPK | Han_1988 | irrelevant | 0 | 0 | The paper studies cerebral blood flow in cats following MCA occlusion and does not report any toxicokinetic parameters for maurocalcin. |
| popPK | Han_2019 | irrelevant | 0 | 0 | The paper investigates ovarian cancer metastasis mechanisms and contains no kinetic parameters for the substance maurocalcin. |
| popPK | Harreld_2013 | irrelevant | 0 | 0 | The paper studies the effects of propofol on cerebral perfusion MRI and contains no data regarding maurocalcin. |
| popPK | Hasan_2025 | irrelevant | 0 | 0 | The paper investigates glycine-conjugated β-muricholic acid (Gly-βMCA), not maurocalcin. |
| popPK | Hayashi_1984 | irrelevant | 0 | 0 | The paper reports a clinical trial regarding hypertension treatment in monkeys and contains no data for maurocalcin. |
| popPK | Hua_1999 | irrelevant | 0 | 0 | The paper investigates declopramide and metoclopramide, not maurocalcin. |
| PGx | Huang_1998 | not_relevant | 0 | 0 | The paper discusses apolipoprotein E and hypertriglyceridemia in mice and humans; it does not mention maurocalcin or report pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Huang_2019 | irrelevant | 0 | 0 | The paper focuses on Ethylhexyl methoxycinnamate (EHMC) and does not contain any data or parameters for maurocalcin. |
| PGx | Huguenard_2022 | not_relevant | 0 | 0 | The paper investigates the impact of APOE genotype on the metabolism of the endogenous nutrient L-carnitine, not a pharmacokinetic or pharmacodynamic effect of a specific drug candidate like maurocalcin. |
| popPK | Hwang_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for 131I-labeled chitosan hydrogels, not maurocalcin. |
| popPK | Iglehart_1981 | irrelevant | 0 | 0 | The paper studies the distribution of Friend murine leukemia virus in mice and does not report any kinetic parameters for maurocalcin. |
| popPK | Ishaque_2016 | irrelevant | 0 | 0 | The paper is a neuroimaging study on pediatric anoxic brain injury and contains no toxicokinetic data for maurocalcin. |
| popPK | Ishii_1994 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the monoclonal antibody regavirumab (TI-23), not for the substance maurocalcin. |
| popPK | Jamshed_2024 | irrelevant | 0 | 0 | The paper studies the effects of dexamethasone and naphthenic acid fraction components on rat hepatocytes, and maurocalcin is not mentioned or studied. |
| popPK | Jensen_2002 | irrelevant | 0 | 0 | The paper discusses the toxicokinetics and efficacy of BMS-204352, not maurocalcin. |
| PGx | Ji_1994 | not_relevant | 0 | 0 | The paper studies the binding of apolipoprotein E variants to cells, not the pharmacokinetics or pharmacodynamics of the drug maurocalcin. |
| PGx | Jiang_2019 | not_relevant | 0 | 0 | The paper investigates the heritability of cerebral blood flow in twins and does not mention maurocalcin or any specific pharmacokinetic/pharmacodynamic effects of a drug. |
| popPK | Johnsson_1996 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of cisplatin and its interaction with metoclopramide, not maurocalcin. |
| popPK | Johshita_1990 | irrelevant | 0 | 0 | The paper investigates the pharmacological effects of ebselen in cats and does not mention maurocalcin or provide any toxicokinetic parameters for it. |
| popPK | Jones_1981 | irrelevant | 0 | 0 | The paper studies cerebral ischemia in monkeys and does not involve maurocalcin or any toxicokinetic parameters for this substance. |
| popPK | Jones_2001 | irrelevant | 0 | 0 | The paper discusses the marketing and licensing of the Menjugate vaccine and contains no kinetic parameters or data for maurocalcin. |
| PGx | Jones_2026 | not_relevant | 0 | 0 | The paper describes a methodology for measuring mitochondrial calcium efflux in various tissues and genotypes but does not investigate the pharmacokinetics or pharmacodynamics of maurocalcin. |
| popPK | Jørgensen_1992 | irrelevant | 0 | 0 | The paper reports cerebral blood flow parameters in humans during exercise and contains no data on maurocalcin. |
| popPK | Jørgensen_1995 | irrelevant | 0 | 0 | The paper discusses cerebral hemodynamics using transcranial Doppler ultrasound and contains no mention or kinetic data for maurocalcin. |
| popPK | Kanoun_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study of modafinil teratogenicity and contains no kinetic parameters or any data regarding maurocalcin. |
| popPK | Kataoka_1989 | irrelevant | 0 | 0 | The paper focuses on cerebral ischemia and blood flow in cats and does not report any toxicokinetic parameters for maurocalcin. |
| popPK | Kawaguchi_1990 | irrelevant | 0 | 0 | The paper investigates urinary prostaglandin E2 and kallikrein in renal transplant recipients and contains no data or mention of maurocalcin. |
| popPK | Khan_2025 | irrelevant | 0 | 0 | The paper compares surgical approaches for pediatric kidney stone removal and contains no toxicokinetic parameters for the substance maurocalcin. |
| popPK | Kitsak_1979 | irrelevant | 0 | 0 | The paper studies viral-chemical carcinogenesis in mice and does not mention or report kinetic parameters for maurocalcin. |
| popPK | Kjaergaard_2010 | irrelevant | 0 | 0 | The paper studies nasal geometry and airflow in smokers and does not contain any data for maurocalcin. |
| popPK | Klinge-Xhemajli_1998 | irrelevant | 0 | 0 | The paper reports cerebral blood flow parameters in hydrocephalus patients and does not contain any data regarding maurocalcin. |
| popPK | Klymenko_2020 | irrelevant | 0 | 0 | The paper studies the effects of lysophosphatidic acid (LPA) on ovarian cancer cells and does not mention or report toxicokinetic parameters for maurocalcin. |
| popPK | Kocak_2018 | irrelevant | 0 | 0 | The paper studies nasal physiology in humans and does not report any toxicokinetic parameters for maurocalcin. |
| popPK | Koenig_2026 | irrelevant | 0 | 0 | The paper investigates the proteolytic processing of a plant peptide (Zip1/PROZIP1) in maize and Nicotiana benthamiana, and does not contain any toxicokinetic data for the substance maurocalcin. |
| popPK | Kollmar_2009 | irrelevant | 0 | 0 | The paper studies ventilation strategies in stroke patients and contains no data on maurocalcin. |
| popPK | Kong_2025 | irrelevant | 0 | 0 | The paper focuses on hyodeoxycholic acid (HDCA) and does not mention or study maurocalcin. |
| popPK | Krieger_2000 | irrelevant | 0 | 0 | The paper reports kinetic data for malathion, not maurocalcin. |
| popPK | Kulesz-Martin_1985 | irrelevant | 0 | 0 | The paper focuses on in vitro cell biology and carcinogen dose-response assays using DMBA, MCA, and MNNG, with no mention of maurocalcin or its kinetic parameters. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The paper investigates placental biometry in humans and contains no data or parameters for maurocalcin. |
| popPK | Kuroiwa_1985 | irrelevant | 0 | 0 | The paper studies blood-brain barrier permeability in cats using Evans blue and does not mention or test maurocalcin. |
| popPK | Kuroiwa_1986 | irrelevant | 0 | 0 | The paper studies cerebral ischemia in cats and does not involve maurocalcin or its toxicokinetics. |
| popPK | Kuroiwa_1988 | irrelevant | 0 | 0 | The paper focuses on cerebral ischemia and brain edema in cats and does not report any kinetic parameters for the substance maurocalcin. |
| popPK | Kuroiwa_1989 | irrelevant | 0 | 0 | The paper studies cerebral ischemia and blood flow in cats and does not mention maurocalcin or report any toxicokinetic parameters for it. |
| popPK | Lane_2015 | irrelevant | 0 | 0 | The paper discusses indocyanine green and fluorescein in neurosurgery and contains no data for maurocalcin. |
| popPK | Lapchak_2004 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of Tenecteplase and Alteplase, with no mention of or data for the subject substance maurocalcin. |
| popPK | Latchaw_1985 | irrelevant | 0 | 0 | The paper reports kinetic and physiological data for d-propranolol, not maurocalcin. |
| popPK | Le_1997 | irrelevant | 0 | 0 | The paper does not mention or study the substance maurocalcin. |
| PGx | Lechner_1995 | not_relevant | 0 | 0 | The paper discusses the effect of protease digestion on hCG epitopes for diagnostic assays, which is unrelated to the pharmacogenomics of maurocalcin. |
| popPK | Lekhavadhani_2026 | irrelevant | 0 | 0 | The paper investigates 4-methoxycinnamic acid (MCA), not maurocalcin, and provides no kinetic parameters for the target substance. |
| popPK | Li_1997 | irrelevant | 0 | 0 | The paper studies the biodistribution of 111In-DTPA-paclitaxel in mice and does not contain any kinetic data for maurocalcin. |
| popPK | Li_2000 | irrelevant | 0 | 0 | The paper studies diazepam, clonazepam, and a monocarbamate compound (MCA) in rabbits, with no mention of maurocalcin. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The paper studies radiofluorinated GPC3-binding peptides for PET imaging and does not report toxicokinetic parameters for maurocalcin. |
| PGx | Li_2020_2 | not_relevant | 0 | 0 | The paper studies methyl-cantharidimide (MCA), not maurocalcin. |
| PGx | Li_2022 | not_relevant | 0 | 0 | The paper discusses a microfluidic platform for KRAS gene mutation detection and does not report any pharmacogenomic effects on PK or PD parameters of maurocalcin. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a sociological study on digital health literacy and anxiety, containing no data or parameters for the substance maurocalcin. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for madecassic acid (MCA), not maurocalcin. |
| popPK | Little_1979 | irrelevant | 0 | 0 | The paper reports on the treatment of cerebral ischemia in cats using mannitol and CSF drainage, and does not contain any kinetic parameters or data for maurocalcin. |
| PGx | Little_2022 | not_relevant | 0 | 0 | The paper investigates the effects of PXR/CAR genetic polymorphisms on the gut microbiome and bile acid profiles, not the pharmacokinetics or pharmacodynamics of the drug maurocalcin. |
| popPK | Liu_2017 | irrelevant | 0 | 0 | The paper studies Gly-MCA, not maurocalcin. |
| popPK | Ljunggren_1986 | irrelevant | 0 | 0 | The paper reports on nimodipine, not maurocalcin. |
| popPK | Lunt_2004 | irrelevant | 0 | 0 | The paper reports the effect of caffeine on cerebral blood flow and does not contain any kinetic data for maurocalcin. |
| popPK | Mahy_2004 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the hypoxia tracer [(18)F]EF3 in mice, not maurocalcin. |
| popPK | Martin_1997 | irrelevant | 0 | 0 | The paper investigates cerebral hemodynamics (blood flow, oxygen metabolism) following head trauma and does not contain any toxicokinetic parameters for maurocalcin. |
| popPK | Matsumoto_1992 | irrelevant | 0 | 0 | The paper investigates purine catabolites (adenosine, inosine, etc.) in cats and does not report any toxicokinetic parameters for maurocalcin. |
| PGx | Matsunaga_2023 | not_relevant | 0 | 0 | The paper discusses paclitaxel, not maurocalcin. |
| popPK | Mehta_1993 | irrelevant | 0 | 0 | The paper studies the interaction between metoclopramide/droperidol and thiopental in humans, with no mention or data regarding maurocalcin. |
| popPK | Meyn_1995 | irrelevant | 0 | 0 | The paper studies the kinetics of cisplatin-induced apoptosis and does not contain any toxicokinetic parameters for maurocalcin. |
| popPK | Milne_2005 | irrelevant | 0 | 0 | The paper investigates MARCO expression in a stroke model and does not contain any toxicokinetic data for maurocalcin. |
| popPK | Morimoto_1992 | irrelevant | 0 | 0 | The study investigates the pharmacological effect of ulinastatin in cats, and maurocalcin is not mentioned or measured. |
| popPK | Moufarrij_1984 | irrelevant | 0 | 0 | The study focuses on a thromboxane A2 synthetase inhibitor in cats, not the toxicokinetics of maurocalcin. |
| popPK | Murphy_2024 | irrelevant | 0 | 0 | The paper investigates ischemic stroke in mice and does not mention or measure any kinetic parameters for maurocalcin. |
| PGx | Nemoto_1992 | not_relevant | 0 | 0 | The paper investigates the regulation of Cyp1a-1 and Cyp1a-2 gene expression in mouse hepatocytes and does not mention the drug maurocalcin or any pharmacokinetic/pharmacodynamic parameters associated with it. |
| PGx | Nemoto_1993 | not_relevant | 0 | 0 | The study investigates gene expression in mouse hepatocytes using chemicals (MCA/TCDD), not the pharmacokinetics/pharmacodynamics of the drug maurocalcin. |
| PGx | Nemoto_1994 | not_relevant | 0 | 0 | The paper discusses CYP1A2 expression in mouse hepatocytes and has no mention of the drug maurocalcin. |
| popPK | Ng_2024 | irrelevant | 0 | 0 | The paper is a urological surgical study on renal stones and contains no information on the substance maurocalcin or any toxicokinetic parameters. |
| popPK | Nishizawa_2007 | irrelevant | 0 | 0 | The paper investigates the pharmacological mechanism of R-138329 on HDL cholesterol and does not report toxicokinetic parameters for maurocalcin. |
| popPK | Nosjean_2001 | irrelevant | 0 | 0 | The paper focuses on melatonin receptors and does not mention maurocalcin. |
| popPK | Ochiai_1982 | irrelevant | 0 | 0 | The paper studies the effects of pentobarbital and Y-9179 on cerebral blood flow in cats and does not mention maurocalcin. |
| popPK | Ochiai_1982_2 | irrelevant | 0 | 0 | The paper studies pentobarbital and nizofenone in cats and does not mention or report kinetic parameters for maurocalcin. |
| popPK | Ogutu_2003 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for phenytoin and fosphenytoin, not maurocalcin. |
| popPK | Ohtaki_1993 | irrelevant | 0 | 0 | The paper studies cerebral ischemia in rats using hemodilution therapies and does not mention or measure maurocalcin. |
| popPK | Ohtsuki_1988 | irrelevant | 0 | 0 | The paper is a hemodynamic study using a dye to model blood flow in aneurysms and does not involve the substance maurocalcin. |
| popPK | Oliveira_2026 | irrelevant | 0 | 0 | The paper is a review on protozoan metacaspases and does not mention or provide kinetic parameters for maurocalcin. |
| popPK | Ortner_2019 | irrelevant | 0 | 0 | The paper investigates vascular pulsatility indices (RI/PI) in Alzheimer's disease patients and does not contain any toxicokinetic parameters for maurocalcin. |
| popPK | Park_2025 | irrelevant | 0 | 0 | The paper is a biomonitoring study of organic UV filters (benzophenone-3, CDAA, etc.) and does not mention maurocalcin or provide any kinetic parameters for it. |
| popPK | Piebalgs_2018 | irrelevant | 0 | 0 | The paper models the toxicokinetics of tissue plasminogen activator (tPA/altreplase), not maurocalcin. |
| popPK | Pintor_2003 | irrelevant | 0 | 0 | The paper studies melatonin and its analogues for ocular hypotensive effects in rabbits and does not mention maurocalcin. |
| PGx | Pirazzi_2012 | not_relevant | 0 | 0 | The paper studies the effect of a PNPLA3 variant on VLDL secretion and does not mention maurocalcin. |
| popPK | Polenakovic_1997 | irrelevant | 0 | 0 | The paper discusses tumor markers in hemodialysis patients and does not mention maurocalcin or report any kinetic parameters for it. |
| popPK | Prisby_2006 | irrelevant | 0 | 0 | The paper studies cerebral vasodilation in rats using a simulated microgravity model and does not report any toxicokinetic parameters for the peptide maurocalcin. |
| popPK | Pruijn_1997 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of melphalan and DMXAA, not maurocalcin. |
| popPK | Pérez_2021 | irrelevant | 0 | 0 | The paper focuses on the inhibition of metacaspases and does not mention maurocalcin or report any toxicokinetic parameters for it. |
| popPK | Quinn_1992 | irrelevant | 0 | 0 | The paper studies the effect of monoclonal antibodies on tumor growth in mice and does not mention maurocalcin. |
| popPK | Reina-Román_2026 | irrelevant | 0 | 0 | The paper describes surgical outcomes for ungual melanoma and does not contain any toxicokinetic parameters for maurocalcin. |
| popPK | Reshef_2008 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (half-life, clearance) for the PET tracer 18F-ML-10, not for the substance maurocalcin. |
| popPK | Richardson_1990 | irrelevant | 0 | 0 | The paper reports dosimetry for iodine-131 labeled monoclonal antibodies, not toxicokinetic parameters for maurocalcin. |
| popPK | Robinson_1991 | irrelevant | 0 | 0 | The paper studies the vasoconstrictive effects of endothelin-1 in rats and does not contain any data regarding maurocalcin. |
| PGx | Rose_2013 | not_relevant | 0 | 0 | The paper discusses obesity and clopidogrel, not maurocalcin, and does not report a pharmacogenomic effect. |
| popPK | Rosner_1986 | irrelevant | 0 | 0 | The paper investigates neuronal recovery after ischemia in cats and does not contain any toxicokinetic parameters for maurocalcin. |
| popPK | Sakata_1998 | irrelevant | 0 | 0 | The paper investigates the neuroprotective effects of platelet-derived growth factor B-chain (PDGF-BB) in rats, not the toxicokinetics of maurocalcin. |
| popPK | Schlage_1999 | irrelevant | 0 | 0 | The paper focuses on the cytotoxicity and transformation of cigarette smoke condensates in murine fibroblasts and does not mention or measure any kinetic parameters for maurocalcin. |
| popPK | Scott_1987 | irrelevant | 0 | 0 | The paper studies murine monoclonal antibodies and gelonin conjugates, not maurocalcin. |
| popPK | Scremin_1986 | irrelevant | 0 | 0 | The paper reports on the effects of Physostigmine on cerebral blood flow in rats and does not mention or provide toxicokinetic data for maurocalcin. |
| popPK | Sermwittayawong_2026 | irrelevant | 0 | 0 | The paper focuses on nasal function after laryngectomy and does not mention maurocalcin or provide any toxicokinetic parameters for it. |
| popPK | Shinyama_1997 | irrelevant | 0 | 0 | The paper investigates the pharmacological efficacy of the calcium antagonist AE0047 in cats and contains no data regarding the toxicokinetics of maurocalcin. |
| popPK | Shroads_2008 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for dichloroacetate, not maurocalcin. |
| popPK | St-Pierre_2003 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of trihalomethanes in rats and does not mention or measure maurocalcin. |
| popPK | Straniero_2020 | irrelevant | 0 | 0 | The paper focuses on bile acid and cholesterol metabolism in mice and does not mention or report any kinetic parameters for the peptide maurocalcin. |
| popPK | Su_2022 | irrelevant | 0 | 0 | The paper concerns cefepime neurotoxicity and does not contain any kinetic data for maurocalcin. |
| popPK | Sundaram_2010 | irrelevant | 0 | 0 | The paper focuses on apolipoprotein C-III in cell culture and does not mention maurocalcin or provide any toxicokinetic parameters for it. |
| PGx | Sundaram_2017 | not_relevant | 0 | 0 | The paper studies the effect of a genetic variant on lipid metabolism and VLDL production, and does not involve the pharmacokinetics or pharmacodynamics of maurocalcin. |
| popPK | Suzuki_2018 | irrelevant | 0 | 0 | The paper describes a surgical technique for embolectomy and contains no toxicokinetic data for maurocalcin. |
| popPK | Takacova_2019 | irrelevant | 0 | 0 | The paper investigates the transcriptional regulation and functional properties of carbonic anhydrase IX (CA IX) in mice, and does not mention or measure toxicokinetic parameters for maurocalcin. |
| PGx | Takahashi_2016 | not_relevant | 0 | 0 | The paper focuses on bile acid metabolism and species differences in CYP2C70/CYP2C9, with no mention of maurocalcin or its pharmacokinetics/pharmacodynamics. |
| popPK | Takahashi_2017 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of the radiopharmaceutical 123I-ioflupane, not the subject substance maurocalcin. |
| popPK | Tamura_1983 | irrelevant | 0 | 0 | The paper studies cerebral blood flow in humans using xenon enhancement and does not report kinetic parameters for maurocalcin. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper investigates bile acid signaling and aging in mice and contains no data or parameters for maurocalcin. |
| popPK | Tanaka_1987 | irrelevant | 0 | 0 | The paper studies cerebral blood flow and the effects of mannitol in cats, with no mention of maurocalcin or its toxicokinetics. |
| popPK | Tanaka_1996 | irrelevant | 0 | 0 | The paper studies a conjugate of annexin V and urokinase, and maurocalcin is not mentioned or involved. |
| popPK | Tavares_2021 | irrelevant | 0 | 0 | The paper discusses mercaptoacetamide and histone deacetylase 6 inhibitors, containing no data regarding the substance maurocalcin. |
| popPK | Temizer_2018 | irrelevant | 0 | 0 | The paper analyzes antioxidant activities and heavy metal contamination in pollen and has no relation to maurocalcin or its toxicokinetics. |
| popPK | Thornburg_2009 | irrelevant | 0 | 0 | The paper studies hydroxyurea pharmacokinetics/effects in sickle cell anemia and contains no data for the substance maurocalcin. |
| popPK | Ting_1986 | irrelevant | 0 | 0 | The paper focuses on cerebral ischemia and blood-brain barrier integrity in cats, with no mention or measurement of maurocalcin pharmacokinetics. |
| popPK | Traupe_1982 | irrelevant | 0 | 0 | The paper studies cerebral blood flow in cats after ischemia and does not report any toxicokinetic parameters for maurocalcin. |
| popPK | Tsujikawa_2016 | irrelevant | 0 | 0 | The paper studies cerebral blood flow imaging techniques (ASL/PET) in humans and does not contain any data regarding the substance maurocalcin. |
| popPK | Vasic_2025 | irrelevant | 0 | 0 | The paper is an anatomical and surgical study on lymphatic clearances for bowel tumors and does not mention maurocalcin or any toxicokinetic parameters. |
| popPK | Vikner_2025 | irrelevant | 0 | 0 | The paper investigates 4D flow MRI of cerebrospinal fluid and cerebral blood flow in humans and does not contain any data regarding the substance maurocalcin. |
| PGx | Vinokurov_2026 | not_relevant | 0 | 0 | The paper focuses on developing a genotyping method for UGT1A1 and analyzing allele frequencies; it does not report pharmacokinetic or pharmacodynamic parameters for maurocalcin. |
| popPK | Wang_2004 | irrelevant | 0 | 0 | The paper studies acoustic rhinometry in nasal allergen challenge and does not mention maurocalcin or report any toxicokinetic parameters. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The paper studies melagatran in rats and does not mention maurocalcin or provide any kinetic parameters for the subject substance. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The study focuses on 5-Fluorouracil (5-FU), not maurocalcin, and does not investigate pharmacogenomic effects. |
| popPK | Wangth_1996 | irrelevant | 0 | 0 | The paper reports on the carcinogenic promoting activity of microcystins in an in vitro cell transformation assay, with no toxicokinetic parameters reported for maurocalcin or any other substance. |
| popPK | Wennerberg_1993 | irrelevant | 0 | 0 | The paper discusses biochemical modulation of cancer therapy using agents like metoclopramide and calcium channel blockers, and contains no data, parameters, or mention of maurocalcin. |
| popPK | Wu_2008 | irrelevant | 0 | 0 | The paper reports enzyme kinetics for leucine aminopeptidase in fish muscle and contains no data regarding the substance maurocalcin. |
| popPK | Yamaguchi_1995 | irrelevant | 0 | 0 | The paper studies YM796, not maurocalcin, and reports behavioral outcomes rather than kinetic parameters for the target substance. |
| popPK | Yamashita_1989 | irrelevant | 0 | 0 | The paper studies perfluorochemicals in cats and contains no data on maurocalcin. |
| popPK | Yanamoto_1998 | irrelevant | 0 | 0 | The paper studies cerebral ischemia and infarct volume in rats and does not contain any kinetic parameters or data for maurocalcin. |
| PGx | Yao_2025 | not_relevant | 0 | 0 | The paper is about flow diverter treatment for brain aneurysms and discusses CYP2C19 genotyping for antiplatelet management, but does not report pharmacokinetic or pharmacodynamic parameters of maurocalcin. |
| popPK | Yoshida_2014 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for profluthrin, not maurocalcin. |
| popPK | Yu_1994 | irrelevant | 0 | 0 | The paper studies prostasin, a human serine proteinase, and contains no data on maurocalcin or its toxicokinetics. |
| popPK | Zeidler-Erdely_2024 | irrelevant | 0 | 0 | The paper studies lung tumor promotion by copper welding fumes in mice and does not report any quantitative toxicokinetic parameters for the substance maurocalcin. |
| popPK | Zhang_2002 | irrelevant | 0 | 0 | The paper studies ONO-1078 (pranlukast) and does not report any kinetic data for maurocalcin. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The study investigates the effects of cholecystectomy on bile acid circadian rhythms and transporters in mice; it does not report pharmacogenomic effects on the PK/PD of maurocalcin. |
| popPK | Zhang_2018_2 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for Maoecrystal A, not Maurocalcin. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is a clinical study on stroke subtypes in humans and does not mention or provide toxicokinetic data for maurocalcin. |
| popPK | Zhu_2012 | irrelevant | 0 | 0 | The paper investigates the role of OCT3 in cerebral ischemia and histamine clearance in mice, containing no data on maurocalcin. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The paper investigates glymphatic dysfunction in humans with middle cerebral artery stenosis and does not mention or report kinetic parameters for maurocalcin. |
| PGx | Zou_2026 | not_relevant | 0 | 0 | The paper does not mention the drug maurocalcin or any pharmacogenomic analysis. |
| popPK | de_2021 | irrelevant | 0 | 0 | The paper discusses metabolic control analysis in cancer cells and does not contain any data regarding maurocalcin. |
| PGx | van_2008 | not_relevant | 0 | 0 | The paper investigates the ACE I/D polymorphism and its effect on angiotensin/bradykinin metabolism, but does not study the drug maurocalcin or its PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmaurocalcin%5D&body=Drug%3A%20maurocalcin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_maurocalcin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
