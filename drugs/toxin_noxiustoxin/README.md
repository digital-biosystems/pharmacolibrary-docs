<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Noxiustoxin&quot;}]"></div>

# Noxiustoxin

- **generic name:** Noxiustoxin
- **T3DB:** [T3D2522](http://www.t3db.ca/toxins/T3D2522) · **PubChem:** none

## About

Noxiustoxin is a peptide toxin produced by the Mexican scorpion (Centruroides noxius). It affects potassium channels.

- **Category:** Protein, Natural Toxin, Animal Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Noxiustoxin is a peptide toxin produced by the Mexican scorpion (Centruroides noxius).
- **Mechanism of toxicity:** Noxiustoxin blocks voltage-gated non-inactivating potassium channels and unblocks inactivating potassium channels blocked by alpha-dendrotoxin in synaptosomes. It also displaces the alpha-dendrotoxin homolog dendrotoxin I from its receptor on brain synaptic membranes.
- **Health effects:** Noxiustoxin is neurotoxic.
- **Acute toxicity:** LD50: 0.31 mg/kg (Intravenous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2522">T3DB T3D2522</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 85205-49-8</small></p>

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
| 2026-11-10 14:14 | 26:22 | 0/0/0 | 0/0/0 | 0/0/0 | 698,260/16,861 | einfracz / qwen3.8-27b | 26 | 4/22 | 26/0 | 0 |

## Coverage

- **PubMed hits:** 114 matched, 113 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Florez_2026.pdf` | Florez H et al., The role of the CYP1A1 gene in long-ter…, Osteoporosis international… (2026) | pgx | 5 | [10.1007/s00198-026-08253-6](https://doi.org/10.1007/s00198-026-08253-6) | [42944907](https://www.ncbi.nlm.nih.gov/pubmed/42944907) | metadata signals extractable PGX data (CYP1A1) |
| `Napoli_2005.pdf` | Napoli N et al., Effect of CYP1A1 gene polymorphisms on…, Journal of bone and mineral… (2005) | pgx | 5 | [10.1359/JBMR.041110](https://doi.org/10.1359/JBMR.041110) | [15647817](https://www.ncbi.nlm.nih.gov/pubmed/15647817) | metadata signals extractable PGX data (CYP1A1) |

<sub>queue written 2026-11-10 14:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arabi_2024 | irrelevant | 0 | 0 | The paper is a systematic review of statin therapy effects on bone metabolism and does not contain any data for the substance noxiustoxin. |
| PGx | Arias_2014 | not_relevant | 5 | 10 | The paper reports pharmacogenetic effects of gene variants on PD outcomes (clinical drinking behavior/response) for naltrexone and disulfiram, but does not study noxiustoxin or PK parameters for any drug. |
| popPK | Baqi_2010 | irrelevant | 0 | 0 | The paper studies the association between thyroid hormones (TSH/FT4) and bone density in humans and contains no data on the toxicokinetics of noxiustoxin. |
| popPK | Baqi_2010_2 | irrelevant | 0 | 0 | The paper studies the relationship between thyroid hormones and bone density in humans and contains no data regarding the toxicokinetics of noxiustoxin. |
| popPK | Berkhout_2016 | irrelevant | 0 | 0 | The paper reports kinetic parameters for alendronate and bone turnover markers, not for the substance noxiustoxin. |
| PGx | Berruti_2002 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effects of pamidronate on bone markers in prostate cancer patients and does not involve noxiustoxin or any pharmacogenomic variants. |
| popPK | Brown_2007 | irrelevant | 0 | 0 | The paper reports on the pharmacodynamic effects of clodronate (a bisphosphonate) on bone markers, not on the toxicokinetics of noxiustoxin. |
| PGx | Chen_2014 | not_relevant | 2 | 5 | The paper studies naltrexone, not noxiustoxin, and reports PD/clinical outcomes rather than PK parameters. |
| popPK | Christensen_2009 | irrelevant | 0 | 0 | The paper focuses on bone metabolism in calcium-sensing receptor mutations and does not mention or measure noxiustoxin. |
| popPK | Ciraulo_2008 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of naltrexone in alcohol dependence and does not contain any data for noxiustoxin. |
| popPK | Cordery_2019 | irrelevant | 0 | 0 | The paper reports transdermal delivery parameters for buprenorphine and naltrexone, not noxiustoxin. |
| PGx | Dresner_2000 | not_relevant | 0 | 0 | The paper studies beta-thalassaemia and bone metabolism, and does not involve noxiustoxin or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Dunbar_2007 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for naltrexone, not noxiustoxin. |
| popPK | Field_1989 | irrelevant | 0 | 0 | The paper investigates the endocrine response (LH levels) of rats to naloxone and naltrexone, not the toxicokinetics of noxiustoxin. |
| PGx | Florez_2026 | not_relevant | 0 | 0 | The paper investigates glucocorticoids, not noxiustoxin. |
| popPK | Fujii_2007 | irrelevant | 0 | 0 | The paper reports clinical efficacy data for risedronate in patients with chronic kidney disease and contains no information regarding noxiustoxin. |
| popPK | Gaona-Tovar_2022 | irrelevant | 0 | 0 | The paper investigates the antinociceptive and gastroprotective activities of Bocconia arborea and dihydrosanguinarine, not the substance noxiustoxin. |
| popPK | Garbin_2025 | irrelevant | 0 | 0 | The study evaluates the in vitro efficacy of Citrus aurantium bergamia essential oil on sheep nematodes and does not involve noxiustoxin or report its toxicokinetic parameters. |
| PGx | Gelernter_2007 | not_relevant | 0 | 0 | The paper studies naltrexone, not noxiustoxin. |
| PGx | Giannini_2002 | not_relevant | 0 | 0 | The paper studies the effect of VDR polymorphism on PTH and bone density, not on the pharmacokinetics or pharmacodynamics of noxiustoxin. |
| PGx | Goonoo_2014 | not_relevant | 0 | 0 | The paper discusses naltrexone, not noxiustoxin, and does not report pharmacogenomic effects on PK/PD parameters for the target drug. |
| popPK | Guo_2019 | irrelevant | 0 | 0 | The paper focuses on the behavioral effects of naltrexone and methamphetamine in rats and does not report toxicokinetic parameters for noxiustoxin. |
| PGx | Gómez-Román_2026 | not_relevant | 1 | 0 | The paper studies pharmacogenomic effects on Methotrexate, not noxiustoxin. |
| popPK | Hadji_2012 | irrelevant | 0 | 0 | The paper reports the effects of zoledronic acid on bone turnover markers in cancer patients and contains no data or kinetic parameters for noxiustoxin. |
| popPK | Hamano_2006 | irrelevant | 0 | 0 | The paper discusses NTX (a bone marker) in CKD patients, not the substance noxiustoxin, and reports no toxicokinetic parameters. |
| PGx | Harrington_2004 | not_relevant | 0 | 0 | The paper studies bone metabolism and calcium excretion in response to diet and VDR genotype; noxiustoxin is not mentioned and is not the subject of the study. |
| popPK | Haumschild_2024 | irrelevant | 0 | 0 | The paper reviews the pharmacokinetics of decitabine and azacitidine, not noxiustoxin. |
| popPK | Hayes_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on opioid use disorder treatments (buprenorphine, methadone, naltrexone) and does not contain any data or kinetic parameters for noxiustoxin. |
| PGx | Huang_2015 | not_relevant | 0 | 0 | The paper studies Pycnogenol, not noxiustoxin, and contains no pharmacogenomic analysis. |
| popPK | Ihle_2004 | irrelevant | 0 | 0 | The paper studies bone turnover markers in response to energy availability in women and does not mention noxiustoxin or provide toxicokinetic parameters for it. |
| PGx | Izumi_2001 | not_relevant | 0 | 0 | The paper investigates bone-turnover markers for diagnosing metastases in lung cancer and does not involve noxiustoxin or pharmacogenomics. |
| popPK | Kalman_1998 | irrelevant | 0 | 0 | The paper focuses on the genomic and biophysical characterization of a potassium channel (Kv1.7) and mentions noxiustoxin only as a blocking agent, containing no toxicokinetic parameters for the toxin. |
| popPK | Kamali_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for naltrexone, not noxiustoxin. |
| popPK | Karpf_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for TransCon PTH (a prodrug of PTH), not for the substance noxiustoxin. |
| popPK | Kazmi_2025 | irrelevant | 0 | 0 | The paper studies the effects of naltrexone on cancer cells and does not contain any data for the substance noxiustoxin. |
| PGx | Kim_1999 | not_relevant | 0 | 0 | The paper discusses bone metabolism and IGFs in postmenopausal women and does not involve noxiustoxin or any pharmacogenomic effects. |
| popPK | Kiptoo_2006 | irrelevant | 0 | 0 | The study focuses on the transdermal delivery of naltrexone metabolites and hydroxybupropion, with no mention of noxiustoxin. |
| popPK | Kuang_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for GM1 ganglioside, not noxiustoxin. |
| popPK | Kumagai_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for denosumab, not noxiustoxin. |
| popPK | Kurbanov_2012 | irrelevant | 0 | 0 | The paper studies naltrexone and olanzapine in rats and does not contain data for noxiustoxin. |
| popPK | Kööbi_2006 | irrelevant | 0 | 0 | The paper studies the effects of calcium and phosphate intake on artery tone in rats and does not mention or measure the substance noxiustoxin. |
| popPK | Lee_2000 | irrelevant | 0 | 0 | The paper studies nimodipine and naltrexone in mice, with no mention of noxiustoxin. |
| popPK | Li_1996 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for naltrexone in dogs, which is a different substance than noxiustoxin. |
| PGx | Lin_2020 | not_relevant | 0 | 0 | The study focuses on naltrexone, not noxiustoxin. |
| popPK | Lindström_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic and pharmacological parameters for the cathepsin K inhibitor MIV-711, not for the substance noxiustoxin. |
| popPK | Marathe_2008 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics and pharmacokinetics of denosumab, not noxiustoxin. |
| PGx | Matsumoto_2020 | not_relevant | 0 | 0 | The paper does not mention noxiustoxin and instead reports a lack of correlation between genotype and BMD scores. |
| PGx | Matsushita_2000 | not_relevant | 0 | 0 | The paper concerns bone mineral density and vertebral fracture assessment in postmenopausal women and does not involve noxiustoxin or pharmacogenomics. |
| PGx | Matsuura_2026 | not_relevant | 3 | 8 | The paper reports on oxaliplatin, not noxiustoxin. |
| popPK | Mehrotra_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetic/pharmacodynamic models for paclitaxel, nab-paclitaxel, and ixabepilone, not noxiustoxin. |
| popPK | Miyauchi_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for teriparatide, not noxiustoxin. |
| PGx | Morales-Gómez_2026 | not_relevant | 0 | 0 | The paper studies bone resorption (NTx) as a biological endpoint associated with VDR/ESR1 genotypes, not a PK/PD parameter of noxiustoxin. |
| popPK | Murphy_1999 | irrelevant | 0 | 0 | The paper studies the growth hormone secretagogue MK-677, not noxiustoxin. |
| popPK | Nagase_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for ONO-5334, not noxiustoxin. |
| PGx | Nakayama_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of nab-paclitaxel, not noxiustoxin. |
| PGx | Napoli_2005 | not_relevant | 0 | 0 | The paper investigates the effect of CYP1A1 polymorphisms on estrogen metabolism and bone density, not on the pharmacokinetics or pharmacodynamics of noxiustoxin. |
| popPK | Naruto_2023 | irrelevant | 0 | 0 | The paper studies the clinical efficacy of denosumab for bone metastasis in hepatocellular carcinoma and does not mention or report toxicokinetic parameters for noxiustoxin. |
| PGx | Nielsen_2022 | not_relevant | 0 | 0 | The paper discusses buprenorphine, not noxiustoxin. |
| popPK | OMalley_2007 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes for naltrexone in alcohol-dependent patients and contains no toxicokinetic parameters for noxiustoxin. |
| popPK | Ohishi_2019 | irrelevant | 0 | 0 | The paper studies homocysteine and bone markers in osteoporosis and does not mention or measure noxiustoxin. |
| popPK | Olmstead_2005 | irrelevant | 0 | 0 | The paper studies the behavioral effects of naltrexone, oxycodone, and morphine in rats, with no mention of noxiustoxin or its kinetic parameters. |
| popPK | Pillai_2004 | irrelevant | 0 | 0 | The study investigates naltrexone prodrugs, not noxiustoxin, which is not mentioned in the provided evidence. |
| popPK | Qu_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for naltrexone and hydromorphone, not the target substance noxiustoxin. |
| popPK | Rabiner_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for opioid receptor antagonists (GSK1521498 and naltrexone), not noxiustoxin. |
| popPK | Reuning_1989 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for naltrexone, not noxiustoxin. |
| PGx | Rubello_2005 | not_relevant | 0 | 0 | The paper investigates VDR polymorphisms in relation to bone metabolism and PTH levels in renal transplant patients; it does not study the PK or PD of the drug noxiustoxin. |
| popPK | Sarmast_2020 | irrelevant | 0 | 0 | The paper focuses on a mortality prediction model using lactate and MELD scores in patients with chronic liver disease, containing no kinetic data for noxiustoxin. |
| popPK | Schenk_2020 | irrelevant | 0 | 0 | The paper is a clinical outcome study for a different substance (Seneca Valley Virus/NTX-010) and contains no kinetic parameters for noxiustoxin. |
| PGx | Schneider_1998 | not_relevant | 0 | 0 | The paper investigates bone markers in total hip arthroplasty and does not mention noxiustoxin or pharmacogenomics. |
| popPK | Shen_1997 | irrelevant | 0 | 0 | The paper studies morphine, naltrexone, and etorphine in mice; noxiustoxin is not mentioned or studied. |
| popPK | Shenkoya_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for naltrexone, not noxiustoxin. |
| popPK | Shinomiya_1986 | irrelevant | 0 | 0 | The paper studies immune mechanisms against Listeria monocytogenes in mice and contains no data for noxiustoxin. |
| popPK | Shiraki_2013 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for teriparatide, not for noxiustoxin. |
| popPK | Sierralta_1996 | irrelevant | 0 | 0 | The paper studies clonidine pharmacology in mice and does not mention noxiustoxin. |
| PGx | Skryabin_2025 | not_relevant | 1 | 5 | The paper reports genetic effects on clinical outcomes for naltrexone, not noxiustoxin. |
| popPK | Smith_2003 | irrelevant | 0 | 0 | The paper reports on osteoprotegerin (OPG) and does not contain any data, mention, or parameters for noxiustoxin. |
| PGx | St_1998 | not_relevant | 0 | 0 | The paper focuses on collagen degradation markers in rheumatoid arthritis and does not involve noxiustoxin or pharmacogenomics. |
| PGx | Stancil_2021 | not_relevant | 0 | 0 | The paper discusses Naltrexone, not noxiustoxin. |
| PGx | Stancil_2022 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for naltrexone, not noxiustoxin. |
| PGx | Stewart_2019 | not_relevant | 0 | 0 | The paper focuses on naltrexone and alcohol use disorder, not noxiustoxin. |
| popPK | Stoch_2013 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for odanacatib, not noxiustoxin. |
| popPK | Sugimoto_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for teriparatide (human PTH 1-34), not noxiustoxin. |
| popPK | Swartjes_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic data for morphine and its metabolite M3G, not noxiustoxin. |
| popPK | Swift_1998 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of diazepam in humans, not noxiustoxin. |
| popPK | Takahashi_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for dasatinib, not noxiustoxin. |
| popPK | Tanaka_2015 | irrelevant | 0 | 0 | The paper reports pharmacokinetic/pharmacodynamic data for the drug ONO-5334, not for noxiustoxin. |
| popPK | Terabe_2012 | irrelevant | 0 | 0 | The paper investigates Vitamin D status and deficiency in elderly women, bearing no relation to the substance noxiustoxin. |
| PGx | Thomaier_2021 | not_relevant | 0 | 0 | The paper discusses platinum or taxane chemotherapy, not noxiustoxin. |
| popPK | Tian_2024 | irrelevant | 0 | 0 | The paper is a meta-analysis of acupuncture efficacy for chemotherapy-induced peripheral neuropathy and contains no toxicokinetic parameters or data for noxiustoxin. |
| popPK | Timmins_2021 | irrelevant | 0 | 0 | The paper focuses on paclitaxel-induced neuropathy outcomes and does not contain any toxicokinetic parameters for noxiustoxin. |
| popPK | Torii_2010 | irrelevant | 0 | 0 | The paper discusses botulinum neurotoxins and uses CMAP to measure potency/activity, but contains no kinetic parameters (half-life, clearance, partition coefficients) for the substance noxiustoxin. |
| PGx | Tosi_2006 | not_relevant | 0 | 0 | The study reports bone turnover markers in response to therapy in multiple myeloma patients and does not involve noxiustoxin or pharmacogenomic analysis. |
| popPK | Tsaih_2001 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of lead (Pb), not noxiustoxin. |
| popPK | Tuet_2019 | irrelevant | 0 | 0 | The study investigates carfentanil, not noxiustoxin, and no kinetic parameters for noxiustoxin are reported. |
| popPK | Vaddi_2005 | irrelevant | 0 | 0 | The paper investigates the kinetic parameters of naltrexone prodrugs, not noxiustoxin. |
| popPK | Vaishampayan_2017 | irrelevant | 0 | 0 | The paper evaluates [18F]FMAU and zoledronic acid in prostate cancer patients and does not mention or measure kinetic parameters for noxiustoxin. |
| popPK | Valiveti_2005 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of naltrexone and its prodrugs, not noxiustoxin. |
| popPK | Vathsala_1991 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and nephrotoxicity of cyclosporine, not noxiustoxin. |
| popPK | Vergara_2016 | relevant | 8 | 2 | The paper reports qualitative and semi-quantitative biodistribution data (e.g., kidney accumulation, depot effect) for noxiustoxin (identified as the main beta-neurotoxin of Micrurus fulvius venom) in rats, but specific kinetic rate constants or volumes are not explicitly listed as numeric values in the provided text. |
| popPK | Watts_2008 | irrelevant | 0 | 0 | The paper studies risedronate, not noxiustoxin. |
| popPK | Woodlief_2023 | irrelevant | 0 | 0 | The paper investigates oxycodone and D3 receptor modulators in monkeys and contains no data for noxiustoxin. |
| popPK | Yamada_2013 | irrelevant | 0 | 0 | The paper studies bone resorption markers (TRACP5b) in dialysis patients and contains no data or mention of noxiustoxin. |
| PGx | Ying_2023 | not_relevant | 0 | 0 | The paper is a review of biomarkers for prostate cancer bone metastasis and does not mention noxiustoxin or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Yuan_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis on probiotics and bone turnover markers in osteoporosis and does not contain any data, parameters, or mention of noxiustoxin. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The study investigates LXT-101 and naltrexone, not noxiustoxin, which is not mentioned or tested in the paper. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper reports kinetic parameters for nitroxoline (NTX), not noxiustoxin. |
| popPK | Zierhut_2008 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for Fc-osteoprotegerin (Fc-OPG), not noxiustoxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnoxiustoxin%5D&body=Drug%3A%20noxiustoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_noxiustoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
