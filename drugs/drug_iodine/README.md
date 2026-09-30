<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;iodine&quot;}]"></div>

# iodine

- **generic name:** iodine
- **ATC codes:** `D08AG03`
- **DrugBank:** [DB05382](https://go.drugbank.com/drugs/DB05382) · **PubChem:** [CID 807](https://pubchem.ncbi.nlm.nih.gov/compound/807)
- **molar mass:** 253.8089 g/mol (I2) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Iodine is commonly used as an antiseptic for minor cuts and abrasions, preventing infections that may result from contaminated wounds. Additionally, iodine has been studied in the treatment of fibrocystic disease and breast cancer.[A3413,A192153,A192156,A192159]

**Indication.** Investigated for use/treatment in breast disorders (unspecified) and pain (acute or chronic).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/0/0 | 1/0/0 | 0/0/0 | not captured | not captured | 63 | 6/24 | 53/10 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Samukawa_2017_UGE](drugs/drug_iodine/pd_Samukawa_2017_UGE.md) | urinary glucose excretion ← luseogliflozin · inhibition effect | — | Samukawa Y et al., Mechanism-Based Pharmacokinetic-Pharmac…, Biological & pharmaceutical… (2017) | [10.1248/bpb.b16-00998](https://doi.org/10.1248/bpb.b16-00998) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=iodine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |

<sub>Actors without a tissue in the table: Microbial proteins (unknown), SLC26A4 (substrate), SLC5A5 (substrate), TG (binder), TPO (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3349 matched, 279 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_23 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Latif_2015.pdf` | Latif R et al., New small molecule agonists to the thyr…, Thyroid : official journal… (2015) | pd | 5 | [10.1089/thy.2014.0119](https://doi.org/10.1089/thy.2014.0119) | [25333622](https://www.ncbi.nlm.nih.gov/pubmed/25333622) | metadata signals extractable PD data (EC50) |
| `Li_2022.pdf` | Li J et al., Halocyclopentadienes: An Emerging Class…, Environmental science & tec… (2022) | pd | 5 | [10.1021/acs.est.2c02490](https://doi.org/10.1021/acs.est.2c02490) | [35938673](https://www.ncbi.nlm.nih.gov/pubmed/35938673) | metadata signals extractable PD data (EC50) |
| `Musch_1987.pdf` | Musch MW et al., Homologous desensitization to prostagla…, The American journal of phy… (1987) | pd | 5 | [10.1152/ajpgi.1987.252.1.G120](https://doi.org/10.1152/ajpgi.1987.252.1.G120) | [3812680](https://www.ncbi.nlm.nih.gov/pubmed/3812680) | metadata signals extractable PD data (EC50) |
| `Asquith_2022.pdf` | Asquith CRM et al., Identification of 4-Anilinoquin(az)olin…, ChemMedChem (2022) | pd | 4 | [10.1002/cmdc.202200161](https://doi.org/10.1002/cmdc.202200161) | [35403825](https://www.ncbi.nlm.nih.gov/pubmed/35403825) | metadata signals extractable PD data (IC50) |
| `Badio_1994.pdf` | Badio B et al., Epibatidine, a potent analgetic and nic…, Molecular pharmacology (1994) | pd | 4 | not captured | [8183234](https://www.ncbi.nlm.nih.gov/pubmed/8183234) | metadata signals extractable PD data (EC50) |
| `Bi_2026.pdf` | Bi Z et al., Identification of Neferine as a DOR Ago…, International journal of mo… (2026) | pd | 4 | [10.3390/ijms27042058](https://doi.org/10.3390/ijms27042058) | [41752194](https://www.ncbi.nlm.nih.gov/pubmed/41752194) | metadata signals extractable PD data (EC50) |
| `Ding_2023.pdf` | Ding S et al., Leaching of organic matter and iodine,…, Journal of hazardous materi… (2023) | pd | 4 | [10.1016/j.jhazmat.2023.132241](https://doi.org/10.1016/j.jhazmat.2023.132241) | [37567136](https://www.ncbi.nlm.nih.gov/pubmed/37567136) | metadata signals extractable PD data (EC50) |
| `Fujita_1995.pdf` | Fujita H et al., Isolation and characterization of ovoki…, Peptides (1995) | pd | 4 | [10.1016/0196-9781(95)00054-n](https://doi.org/10.1016/0196-9781(95)00054-n) | [7479316](https://www.ncbi.nlm.nih.gov/pubmed/7479316) | metadata signals extractable PD data (EC50) |
| `Hou_2022.pdf` | Hou X et al., Construction of a 124I-Labeled Specific…, Molecular pharmaceutics (2022) | pd | 4 | [10.1021/acs.molpharmaceut.2c00342](https://doi.org/10.1021/acs.molpharmaceut.2c00342) | [35904514](https://www.ncbi.nlm.nih.gov/pubmed/35904514) | metadata signals extractable PD data (EC50) |
| `Jones_1992.pdf` | Jones SB et al., Altered aortic production of 6-keto-pro…, Journal of vascular research (1992) | pd | 4 | [10.1159/000158940](https://doi.org/10.1159/000158940) | [1504198](https://www.ncbi.nlm.nih.gov/pubmed/1504198) | metadata signals extractable PD data (EC50) |
| `Maletti_1987.pdf` | Maletti M et al., Evidence of functional gastric inhibito…, Diabetes (1987) | pd | 4 | [10.2337/diab.36.11.1336](https://doi.org/10.2337/diab.36.11.1336) | [2822518](https://www.ncbi.nlm.nih.gov/pubmed/2822518) | metadata signals extractable PD data (IC50) |
| `Rajasekaran_2014.pdf` | Rajasekaran D et al., Targeting distinct tautomerase sites of…, FASEB journal : official pu… (2014) | pd | 4 | [10.1096/fj.14-256636](https://doi.org/10.1096/fj.14-256636) | [25016026](https://www.ncbi.nlm.nih.gov/pubmed/25016026) | metadata signals extractable PD data (EC50) |
| `Schiebinger_1988.pdf` | Schiebinger RJ et al., The adrenal capsule alters the response…, Endocrinology (1988) | pd | 4 | [10.1210/endo-123-1-492](https://doi.org/10.1210/endo-123-1-492) | [2968238](https://www.ncbi.nlm.nih.gov/pubmed/2968238) | metadata signals extractable PD data (IC50) |
| `Wong_1990.pdf` | Wong SK et al., Chimeric muscarinic cholinergic: beta-a…, The Journal of biological c… (1990) | pd | 4 | not captured | [2156845](https://www.ncbi.nlm.nih.gov/pubmed/2156845) | metadata signals extractable PD data (EC50) |
| `Dello_2026.pdf` | Dello Russo C et al., UGT1A1 and Sacituzumab Govitecan Toxici…, Clinical pharmacology and t… (2026) | pgx | 8 | [10.1002/cpt.70060](https://doi.org/10.1002/cpt.70060) | [40936312](https://www.ncbi.nlm.nih.gov/pubmed/40936312) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Fang_2021.pdf` | Fang H et al., The association of adjusted plasma valp…, Annals of translational med… (2021) | pgx | 8 | [10.21037/atm-21-1459](https://doi.org/10.21037/atm-21-1459) | [34164480](https://www.ncbi.nlm.nih.gov/pubmed/34164480) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Kim_2022.pdf` | Kim H et al., Association of the SLC47A1 Gene Variant…, The Journal of clinical end… (2022) | pgx | 8 | [10.1210/clinem/dgac333](https://doi.org/10.1210/clinem/dgac333) | [35639991](https://www.ncbi.nlm.nih.gov/pubmed/35639991) | metadata signals extractable PGX data (SLC47A1, PK/PD-context) |
| `Li_2023.pdf` | Li Z et al., The Impact of ABCB1 SNPs on Tacrolimus…, Current pharmaceutical desi… (2023) | pgx | 8 | [10.2174/0113816128259239231009112019](https://doi.org/10.2174/0113816128259239231009112019) | [37817654](https://www.ncbi.nlm.nih.gov/pubmed/37817654) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Low_2026.pdf` | Low XY et al., Influence of transporter polymorphisms…, Pharmacogenomics (2026) | pgx | 8 | [10.1080/14622416.2026.2641750](https://doi.org/10.1080/14622416.2026.2641750) | [41811250](https://www.ncbi.nlm.nih.gov/pubmed/41811250) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Shi_2023.pdf` | Shi J et al., Effect of Genotype on the Pharmacokinet…, Journal of clinical pharmac… (2023) | pgx | 8 | [10.1002/jcph.2168](https://doi.org/10.1002/jcph.2168) | [36309848](https://www.ncbi.nlm.nih.gov/pubmed/36309848) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Du_2025.pdf` | Du W et al., In vivo assessment of pharmacokinetic i…, PeerJ (2025) | pgx | 7 | [10.7717/peerj.19662](https://doi.org/10.7717/peerj.19662) | [40656939](https://www.ncbi.nlm.nih.gov/pubmed/40656939) | metadata signals extractable PGX data (Ugt2b7, PK/PD-context) |
| `Masimirembwa_1995.pdf` | Masimirembwa CM et al., Low CYP1A2 activity in rural Shona chil…, Clinical pharmacology and t… (1995) | pgx | 5 | [10.1016/0009-9236(95)90262-7](https://doi.org/10.1016/0009-9236(95)90262-7) | [7828378](https://www.ncbi.nlm.nih.gov/pubmed/7828378) | metadata signals extractable PGX data (CYP1A2) |
| `Wang_2024.pdf` | Wang S et al., Integrative analysis of rs717620 polymo…, Heliyon (2024) | pgx | 5 | [10.1016/j.heliyon.2023.e23942](https://doi.org/10.1016/j.heliyon.2023.e23942) | [38192780](https://www.ncbi.nlm.nih.gov/pubmed/38192780) | metadata signals extractable PGX data (ABCC2) |

<sub>queue written 2026-09-29T23:23:42.327490+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ahmad_2023 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel flurbiprofen derivatives as urease inhibitors, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) relationship for iodine. |
| PD | Asquith_2022 | not_relevant | 0 | 0 | The paper focuses on the identification of a PKN3 inhibitor chemotype and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| popPK | BERSON_1954 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of iodine-labeled human serum albumin (iodoalbumin) as a tracer for protein distribution, not iodine as a subject drug. |
| PD | Baars_1980 | not_relevant | 2 | 1 | The study uses an agar diffusion technique to report qualitative inhibition percentages for various bacterial strains, lacking specific concentration-effect curves or numeric PD parameters (e.g., MIC, EC50) for iodine. |
| popPK | Badio_1994 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| PD | Badio_1994 | not_relevant | 0 | 0 | The paper discusses epibatidine, not iodine, and does not report any exposure-response or dose-response relationship for iodine. |
| popPK | Baqi_2018 | irrelevant | 0 | 0 | The paper is a structure-activity relationship (SAR) study of GPR17 agonists, not a pharmacokinetic study of iodine. |
| PD | Baqi_2018 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/agonist EC50 values for GPR17 ligands, which is pharmacology but not a pharmacokinetic/pharmacodynamic (exposure-response) relationship for iodine or any drug in a biological system. |
| popPK | Bechman_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of JAK inhibitors in rheumatoid arthritis and does not involve iodine pharmacokinetics. |
| popPK | Bergström_1979 | irrelevant | 2 | 0 | The study uses iodine as a diagnostic contrast agent to analyze brain infarction enhancement patterns, rather than reporting pharmacokinetic disposition parameters (CL, V, etc.) for iodine itself. |
| popPK | Bi_2026 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Bi_2026 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of Neferine as a DOR agonist and does not report any pharmacodynamic or exposure-response data for iodine. |
| PD | CRISMER_1947 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics (absorption, excretion) of bilisil lectan, not iodine, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Cao_2026 | irrelevant | 0 | 0 | The paper describes a QSP model for Alzheimer's disease and lecanemab, and does not study iodine pharmacokinetics. |
| popPK | Carballeira_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and enzymatic inhibition of halogenated fatty acids, containing no pharmacokinetic data for iodine. |
| PD | Chitneni_2007 | not_relevant | 3 | 2 | The paper reports a single IC50 value for the non-radioactive analogue in an in vitro assay and qualitative biodistribution data, but does not provide a concentration-effect curve, dose-response relationship, or PK/PD model for the radiotracer. |
| popPK | Cohen_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of axitinib, not iodine, which is only mentioned as a prior therapy or diagnostic agent. |
| popPK | Colombo_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lenvatinib, not iodine, and iodine is only mentioned as a diagnostic/treatment context for the cancer type. |
| PD | Colombo_2026 | not_relevant | 2 | 0 | The paper focuses on PK variability and dose-concentration correlation for lenvatinib, not on pharmacodynamic (exposure-response) parameters or effect modeling. |
| popPK | Conway_1989 | irrelevant | 0 | 0 | The paper is a diagnostic imaging study using iodine as a contrast agent and does not report pharmacokinetic parameters for iodine. |
| popPK | Deng_2022 | irrelevant | 0 | 0 | The paper is a pharmacological study of GPR15 receptor signaling in cell lines and does not involve iodine or pharmacokinetic parameters. |
| PD | Deng_2022 | not_relevant | 0 | 0 | The paper investigates GPR15 receptor signaling using peptide agonists, not the pharmacodynamics of iodine. |
| popPK | Ding_2023 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| PD | Ding_2023 | not_relevant | 0 | 0 | The paper focuses on environmental chemistry and toxicological risk assessment of iodinated disinfection by-products from seaweed cooking, not on pharmacodynamic modeling or dose-response relationships for a drug. |
| popPK | Ding_2026 | irrelevant | 0 | 0 | The paper investigates the association between estimated glucose disposal rate (eGDR) and frailty progression, and does not contain any pharmacokinetic data or parameters for iodine. |
| popPK | Ding_2026_2 | irrelevant | 0 | 0 | The paper is a meta-analysis of the diagnostic value of D-dimer for deep vein thrombosis and does not contain any pharmacokinetic data for iodine. |
| popPK | Ekundayo_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis on the prevalence of Hepatitis A and E viruses in food, containing no pharmacokinetic data for iodine. |
| popPK | Enokibori_1994 | irrelevant | 0 | 0 | The paper investigates the mechanism of substance P-induced relaxation in dog arteries and does not involve iodine or pharmacokinetic parameters. |
| PD | Enokibori_1994 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for substance P, not iodine. |
| popPK | Errico_2001 | irrelevant | 0 | 0 | The paper is a mechanistic study on 5-HT receptors in neurons and does not involve iodine pharmacokinetics. |
| PD | Errico_2001 | not_relevant | 4 | 3 | The paper reports receptor pharmacology (EC50) for serotonin agonists in cell culture, not a pharmacodynamic exposure-response relationship for the drug iodine. |
| popPK | Finogenova_2026 | irrelevant | 0 | 0 | The paper is a review of radionuclide-labeled nanoparticles for imaging and therapy, not a pharmacokinetic study reporting quantitative disposition parameters for iodine. |
| PD | Finogenova_2026 | not_relevant | 1 | 0 | The paper is a qualitative review of imaging-therapy correlations for radionuclide nanoparticles and does not report specific numeric PD parameters or concentration-effect curves. |
| popPK | Foudjin_2026 | irrelevant | 0 | 0 | The paper is a study on the antihyperlipidemic potential of fruit oil, where "iodine" refers only to the iodine value (a chemical quality index for unsaturation), not the pharmacokinetics of iodine as a drug. |
| PD | Foudjin_2026 | not_relevant | 2 | 1 | The paper reports an in vitro antioxidant EC50 and a qualitative dose-response for lipid parameters in rats, but does not report a pharmacodynamic model or numeric PD parameters (like Emax, EC50 for the in vivo effect, or slope) for the drug's exposure-response relationship. |
| popPK | Frennby_1995 | irrelevant | 2 | 1 | The study uses iohexol (a contrast medium) as a marker to measure GFR, not as the subject drug for PK parameter estimation, and reports clearance values for the marker rather than population PK parameters for iodine itself. |
| popPK | Fresquet-Molina_2025 | irrelevant | 0 | 0 | The paper is a systematic review of vancomycin pharmacokinetics, not iodine. |
| PD | Fresquet-Molina_2025 | not_relevant | 0 | 0 | The paper is a systematic review of vancomycin pharmacokinetic models and contains no information regarding iodine or any pharmacodynamic/exposure-response relationships. |
| popPK | Fujita_1995 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Fujita_1995 | not_relevant | 0 | 0 | The paper characterizes a peptide (ovokinin) and its interaction with the bradykinin B1 receptor, not the pharmacodynamics of iodine. |
| popPK | Fusella_2026 | irrelevant | 2 | 0 | The paper focuses on a mechanistic model for tumor response and thyroglobulin kinetics in thyroid cancer therapy, not on the pharmacokinetic disposition parameters (CL, V, Q) of iodine itself. |
| popPK | Futaki_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluorescein isothiocyanate dextran (FD-4), using iodine only as an X-ray tracer for imaging, not as the subject drug for PK parameter estimation. |
| popPK | Garnier_1993 | irrelevant | 2 | 0 | The study focuses on the metabolic compartmental analysis of an iodinated fatty acid (IHA) in isolated rat hearts, not the pharmacokinetic disposition parameters (CL, V, etc.) of iodine itself. |
| popPK | Gebrin_2025 | irrelevant | 0 | 0 | The paper is a systematic review of tranexamic acid for traumatic brain injury and does not involve iodine pharmacokinetics. |
| PD | Gebrin_2025 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trials for tranexamic acid in traumatic brain injury, reporting clinical outcomes (mortality, hemorrhage) rather than pharmacodynamic or exposure-response parameters. |
| popPK | Goryanin_2026 | irrelevant | 0 | 0 | The paper focuses on a systems pharmacology model for aging involving GLP-1 agonists, SGLT2 inhibitors, metformin, and rapamycin, with no mention of iodine pharmacokinetics. |
| PD | Goryanin_2026 | not_relevant | 0 | 0 | The paper focuses on a systems pharmacology model for aging and metabolic health involving GLP-1 agonists, SGLT2 inhibitors, metformin, and rapamycin, with no mention of iodine or its pharmacodynamics. |
| popPK | Grigoroglou_2021 | irrelevant | 0 | 0 | The paper is a meta-analysis on collaborative care for suicidal ideation and contains no pharmacokinetic data for iodine. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The study is an iodine balance study measuring intake and excretion, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Hadházy_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular tone in isolated arteries, not a pharmacokinetic study of iodine. |
| popPK | Hoetzel_2026 | irrelevant | 0 | 0 | The paper describes the mechanism of a doxycycline-binding RNA aptamer and contains no pharmacokinetic data for iodine. |
| popPK | Hogendorf_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a 5-HT7 receptor agonist (compound 1o) where iodine is merely a structural substituent, not the subject drug. |
| PD | Hosohata_1997 | not_relevant | 0 | 0 | The paper studies the pharmacology of AM630 (a cannabinoid antagonist) and does not report a pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Hou_2022 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Hou_2022 | not_relevant | 0 | 0 | The paper focuses on the radiolabeling and imaging application of an antibody for tumor detection, not on the pharmacodynamic or exposure-response relationship of iodine. |
| popPK | Huang_2020 | irrelevant | 0 | 0 | The study focuses on immuno-PET imaging and binding affinity of a radiolabeled antibody, not on the pharmacokinetic disposition parameters (CL, V, etc.) of iodine as a subject drug. |
| popPK | Iannuzzi_2026 | irrelevant | 0 | 0 | The paper focuses on HIV pre-exposure prophylaxis (TDF/FTC) and does not study iodine pharmacokinetics. |
| PD | Iannuzzi_2026 | not_relevant | 4 | 3 | The paper uses a mechanistic viral dynamics model to simulate PrEP efficacy based on PK data, but it does not report a direct pharmacodynamic (concentration-effect) relationship or numeric PD parameters (like Emax or EC50) for the drug itself; instead, it derives efficacy from infection probability simulations. |
| popPK | Ibrahim_2025 | irrelevant | 0 | 0 | The paper is a statistical analysis of a diabetes prevention study and contains no pharmacokinetic data for iodine. |
| PD | Ibrahim_2025 | not_relevant | 0 | 0 | The paper describes a statistical method for competing risks analysis in a diabetes prevention study and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Iida_1994 | irrelevant | 1 | 0 | The study uses iodine-123-IMP as a diagnostic imaging agent to measure cerebral blood flow, not to characterize the pharmacokinetic disposition parameters (CL, V, etc.) of iodine itself. |
| popPK | Jaiswal_1992 | irrelevant | 0 | 0 | The paper studies angiotensin peptides and prostaglandin production in endothelial cells, with no mention of iodine or pharmacokinetic parameters. |
| PD | Jaiswal_1992 | not_relevant | 0 | 0 | The paper investigates angiotensin peptides, not iodine. |
| popPK | James_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of glucagon, not iodine. |
| PD | James_2024 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for glucagon, not iodine. |
| popPK | Jang_2008 | irrelevant | 2 | 0 | The paper describes a dosimetry model for thyroid dose estimation using a compartmental framework, but the provided evidence contains no quantitative pharmacokinetic parameter values (CL, V, Q, ka) for iodine. |
| popPK | Jeon_2026 | irrelevant | 0 | 0 | The study focuses on carboplatin pharmacokinetics and dosing, not iodine. |
| PD | Jeon_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) dosing optimization for carboplatin using the Calvert formula and does not report any pharmacodynamic (PD) or exposure-response relationships for iodine or any other drug. |
| popPK | Jones_1992 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Jones_1992 | not_relevant | 0 | 0 | The paper investigates the effect of aldosterone-salt hypertension on aortic 6-keto-PGF1alpha production and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Kaczmarek_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and antiviral activity of furopyrimidine nucleosides, with no pharmacokinetic data for iodine. |
| popPK | Kaito_1995 | irrelevant | 0 | 0 | The paper is a mechanistic study on endothelin-1 and cerebral vasodilation in canine arteries, with no mention of iodine or pharmacokinetic parameters. |
| PD | Kaito_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of endothelin-1, not iodine. |
| popPK | Kan_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of semaglutide for MASH and contains no pharmacokinetic data for iodine. |
| popPK | Karhan_2026 | irrelevant | 2 | 0 | The study is a simulation of dosimetry curve fitting bias/precision rather than a report of quantitative PK parameters (CL, V, etc.) for iodine, and no specific numeric PK values are provided in the evidence. |
| PD | Kasibhatla_2007 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and in vivo tumor growth inhibition percentages, but does not provide an exposure-response or dose-response curve with derivable PD parameters (e.g., Emax, EC50 in vivo, or concentration-effect relationship). |
| popPK | Kasula_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and anti-HBV activity of neplanocin analogues, with iodine mentioned only as a structural substituent (3-iodo) rather than as the subject drug for pharmacokinetic analysis. |
| popPK | Kerling_2023 | irrelevant | 0 | 0 | The paper is a systematic review of loop diuretics' effect on antibiotic pharmacokinetics and does not report quantitative PK parameters for iodine. |
| popPK | Kirchner_1994 | irrelevant | 2 | 2 | The study reports environmental transfer coefficients (feed-to-milk) and weathering half-lives for iodine in a grass-cow-milk pathway, not standard pharmacokinetic parameters (CL, V, ka) for the drug iodine in a biological subject. |
| popPK | Lai_2025 | irrelevant | 0 | 0 | The paper is a systematic review of chronic hepatitis B clinical outcomes and does not involve iodine pharmacokinetics. |
| popPK | Latif_2015 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| PD | Latif_2015 | not_relevant | 0 | 0 | The paper focuses on the development of small molecule agonists for the thyrotropin receptor, not on the pharmacodynamics or exposure-response relationship of iodine. |
| popPK | Lauffer_2024 | irrelevant | 0 | 0 | The paper is a systematic review of thyroid hormone reference intervals in neonates and does not report pharmacokinetic parameters for iodine. |
| popPK | Lenters_2011 | irrelevant | 0 | 0 | The paper is a meta-analysis of asbestos exposure and lung cancer risk, containing no pharmacokinetic data for iodine. |
| PD | Lenters_2011 | not_relevant | 0 | 0 | The paper is a meta-analysis of epidemiological studies on asbestos and lung cancer, not a pharmacodynamic study of iodine. |
| popPK | Li_2022 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Li_2022 | not_relevant | 0 | 0 | The paper discusses halocyclopentadienes as toxic disinfection byproducts in drinking water and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis on mortality rates in Klebsiella pneumoniae bacteremia and contains no pharmacokinetic data for iodine. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is a diagnostic meta-analysis of contrast-enhanced ultrasound for liver cancer and does not report pharmacokinetic parameters for iodine. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of selpercatinib, not iodine. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for selpercatinib to support dosing, but it does not report any pharmacodynamic (PD) or exposure-response relationship, nor does it provide numeric PD parameters. |
| popPK | Lundemose_2025 | irrelevant | 0 | 0 | The paper is a systematic review of glucagon for hypoglycemia in diabetes and does not report pharmacokinetic parameters for iodine. |
| PD | Lundemose_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of glucagon efficacy and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Magini_2026 | irrelevant | 0 | 0 | The paper is a review of curcumin pharmacology and does not report pharmacokinetic parameters for iodine. |
| PD | Magini_2026 | not_relevant | 0 | 0 | The paper is a conceptual review of curcumin's pharmacology and does not report any exposure-response or dose-response data for iodine. |
| popPK | Mahajan_2024 | irrelevant | 2 | 2 | The study reports pharmacokinetic parameters for the radiotracer 124I-PU-H71, not for iodine as a subject drug, and iodine serves only as the radioactive label for the imaging agent. |
| PD | Maletti_1987 | not_relevant | 0 | 0 | The paper investigates GIP receptor binding and adenylate cyclase activation in insulinoma, which is unrelated to iodine pharmacodynamics. |
| popPK | Mannix_1993 | irrelevant | 0 | 0 | The paper studies nucleotide receptor signaling in endothelial cells and does not involve iodine pharmacokinetics. |
| PD | Mannix_1993 | not_relevant | 0 | 0 | The paper reports pharmacological data for ATP and nucleotides, not iodine. |
| popPK | Mansi_2020 | irrelevant | 0 | 0 | The paper studies a 68Ga-labeled somatostatin analog containing iodo-amino acids, not iodine as a subject drug, and reports no pharmacokinetic parameters for iodine. |
| popPK | Mansour_2026 | irrelevant | 0 | 0 | The paper is a systematic review of BAFF/APRIL inhibitors for IgA nephropathy and does not study iodine pharmacokinetics. |
| PD | Mansour_2026 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trial efficacy and safety outcomes (proteinuria, eGFR, biomarkers) for BAFF/APRIL inhibitors, and does not report any pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | McGuigan_2001 | irrelevant | 0 | 0 | The paper is a review of antiviral nucleosides and does not report pharmacokinetic parameters for iodine. |
| PD | McGuigan_2001 | not_relevant | 1 | 0 | The paper is a review of furano pyrimidines (antivirals) and does not report pharmacodynamic or exposure-response data for iodine. |
| popPK | McLean_1995 | irrelevant | 0 | 0 | The paper studies 5-HT4 receptor antagonists (SB207710, etc.) in isolated tissues and does not report pharmacokinetic parameters for iodine. |
| PD | McLean_1995 | not_relevant | 0 | 0 | The paper reports pharmacological affinities (pKB, pA2) and agonist EC50s for 5-HT4 antagonists, not a pharmacodynamic exposure-response or dose-response relationship for iodine. |
| popPK | Menezes_2018 | irrelevant | 0 | 0 | The paper is a systematic review of respiratory interventions after stroke and contains no pharmacokinetic data for iodine. |
| PD | Menezes_2018 | not_relevant | 0 | 0 | The paper is a systematic review of respiratory interventions after stroke and contains no pharmacodynamic or exposure-response analysis for iodine. |
| popPK | Meng_2025 | irrelevant | 1 | 0 | The study focuses on the timing of urine collection for iodine status assessment (UI/Cr ratio) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or compartmental model parameters. |
| popPK | Menkissoglu-Spiroudi_2001 | irrelevant | 0 | 0 | The paper investigates the antibacterial activity of hypervalent iodine compounds, not the pharmacokinetics of iodine as a drug. |
| popPK | Methaneethorn_2025 | irrelevant | 0 | 0 | The paper is a systematic review of azithromycin pharmacokinetics, not iodine. |
| PD | Methaneethorn_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics (PopPK) for azithromycin, not iodine, and explicitly states there is limited data on exposure-safety relationships without reporting specific PD parameters. |
| popPK | Moqadami_2024 | irrelevant | 0 | 0 | The study is an in-vitro investigation of minocycline's effects on chondrocytes and does not involve iodine pharmacokinetics. |
| PD | Moqadami_2024 | not_relevant | 3 | 2 | The study is an in vitro cell biology experiment that qualitatively reports protective effects at an "EC50" concentration but does not provide a quantitative exposure-response curve or numeric PD parameters (like Emax or specific EC50 values) for the drug. |
| popPK | Musch_1987 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| PD | Musch_1987 | not_relevant | 0 | 0 | The paper discusses prostaglandin desensitization in rabbit ileum and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Nakijoba_2026 | irrelevant | 0 | 0 | The paper is a systematic review on breastfeeding prevalence among women taking medications and does not report any pharmacokinetic parameters for iodine. |
| PD | Nakijoba_2026 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of breastfeeding prevalence among women on medications, containing no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for iodine or any other drug. |
| popPK | Nishizawa_1995 | irrelevant | 0 | 0 | The study uses iodine-123-iodoamphetamine (IMP) as a diagnostic radiotracer for cerebral blood flow imaging, not as a subject drug for pharmacokinetic parameter estimation. |
| popPK | Noble_2019 | irrelevant | 0 | 0 | The study investigates the in vitro receptor activity of synthetic cannabinoids, not the pharmacokinetics of iodine. |
| popPK | OPPEHNEIMER_1965 | irrelevant | 0 | 0 | The study focuses on the metabolism of thyroxine-binding prealbumin (a protein), not the pharmacokinetics of iodine as a drug. |
| popPK | Ohta_2013 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on estrogen receptor modulators and does not report pharmacokinetic parameters for iodine. |
| popPK | Okwu_1992 | irrelevant | 0 | 0 | The study investigates platelet receptor desensitization using iodinated ligands as tools, not the pharmacokinetics of iodine as a drug. |
| popPK | Onishi_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the radioligand [123I]iomazenil for receptor binding quantification, not the disposition of iodine as a subject drug. |
| popPK | Pence_2026 | irrelevant | 0 | 0 | The paper is a systematic review on the diagnostic accuracy of MRI for stroke and contains no pharmacokinetic data for iodine. |
| popPK | Pérez-Albaladejo_2023 | irrelevant | 0 | 0 | The paper is an in-vitro toxicology study on haloacetic acids (disinfection by-products) and does not report pharmacokinetic parameters for iodine. |
| popPK | Qin_2023 | irrelevant | 0 | 0 | The paper is a systematic review on dental implant placement and has no relation to iodine pharmacokinetics. |
| popPK | Rajabi_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of device-related thrombosis following left atrial appendage occlusion and does not involve iodine pharmacokinetics. |
| popPK | Rajasekaran_2014 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Rajasekaran_2014 | not_relevant | 0 | 0 | The paper focuses on the inhibition of neutrophil lung recruitment by targeting D-DT and MIF, not on iodine pharmacodynamics or exposure-response relationships. |
| popPK | Ramadan_2026 | irrelevant | 0 | 0 | The paper is a systematic review of ivermectin for malaria vector control and does not report pharmacokinetic parameters for iodine. |
| PD | Ramadan_2026 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trials evaluating ivermectin for malaria vector control; it does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for iodine. |
| popPK | Regazzo_2026 | irrelevant | 0 | 0 | The paper is a clinical trial on balneotherapy for knee osteoarthritis where iodine is merely a component of the mineral water, not a subject drug for pharmacokinetic analysis. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The study investigates inflammatory biomarkers and muscle mass in hyperthyroid patients treated with radioactive iodine, but does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for iodine. |
| popPK | Robert_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the drug 4'-iodo-4'-deoxy-doxorubicin, not iodine itself. |
| PD | SALTER_1945 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, curves, or parameters required to extract a pharmacodynamic relationship. |
| popPK | Saidi_2026 | irrelevant | 0 | 0 | The paper focuses on the design and anti-inflammatory activity of benzofuran hybrids, not the pharmacokinetics of iodine. |
| PD | Saidi_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 and in vivo percent inhibition for novel synthetic compounds, not a pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Salim_2025 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of carbohydrate derivatives and contains no pharmacokinetic data or parameters for iodine. |
| PD | Salim_2025 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of carbohydrate derivatives and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Samukawa_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of luseogliflozin, not iodine. |
| popPK | Saul_2020 | irrelevant | 0 | 0 | The paper describes the antiviral activity of iodine-substituted compounds against dengue virus and does not report pharmacokinetic parameters for iodine as a drug. |
| PD | Schiebinger_1988 | not_relevant | 0 | 0 | The paper investigates the effect of the adrenal capsule on zona glomerulosa cells' response to atrial natriuretic peptide, not iodine. |
| popPK | Seshadri_2021 | irrelevant | 0 | 0 | The paper is a meta-analysis of psychotherapy for depression and contains no pharmacokinetic data for iodine. |
| popPK | Shadid_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vitamin D (25(OH)D), not iodine. |
| popPK | Siegrist_1986 | irrelevant | 0 | 0 | The paper describes an in vitro melanin assay for MSH peptides and does not report pharmacokinetic parameters for iodine. |
| popPK | Simon_1979 | irrelevant | 2 | 0 | The study describes a mechanistic two-compartment model for iodide pools in rat thyroids but provides no quantitative pharmacokinetic parameter values (CL, V, ka, etc.) in the evidence. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antiviral nucleoside analogues, not a pharmacokinetic study of iodine. |
| popPK | Song_2025 | irrelevant | 0 | 0 | The study is an iodine balance/nutritional requirement study, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Stitt_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tranexamic acid, not iodine. |
| PD | Stitt_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tranexamic acid, not iodine, and focuses on exposure targets rather than pharmacodynamic (PD) or dose-response relationships. |
| PD | Sunghwa_2009 | not_relevant | 0 | 0 | The paper describes a chemical synthesis method using iodine as a catalyst and reports a single IC50 value for a synthesized derivative, but does not report a pharmacodynamic or exposure-response relationship for iodine itself. |
| PD | TRONCHE_1961 | not_relevant | 0 | 0 | The paper focuses on the physical penetration of I-131 through ocular membranes and does not report a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Tan_2024 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis on plant-based diets and mortality, containing no pharmacokinetic data for iodine. |
| popPK | Tan_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis on the association between skipping breakfast and depression, containing no pharmacokinetic data for iodine. |
| popPK | Thomas_2022 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for isoniazid, not iodine. |
| PD | Thomas_2022 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) models for isoniazid, focusing on clearance and NAT2 genotype, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Toda_1987 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on isolated coronary arteries and does not report any pharmacokinetic parameters for iodine. |
| PD | Uddin_2011 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for a radiotracer analogue, which is a pharmacological potency metric, but does not report an in vivo exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Valderrama_2025 | irrelevant | 0 | 0 | The study focuses on fluorouracil and sunitinib, not iodine. |
| PD | Valderrama_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) concentration prediction using machine learning and population PK models, with no mention of pharmacodynamic (PD) effects, exposure-response relationships, or dose-response parameters. |
| popPK | Wang_2024_2 | irrelevant | 0 | 0 | The study focuses on iodine balance and nutritional requirements using regression models, not on pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PD | Werner_1989 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response observation for an inhibitor but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative exposure-response model for iodine. |
| popPK | Wong_1990 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Wong_1990 | not_relevant | 0 | 0 | The paper describes the engineering of chimeric G-protein coupled receptors and their signaling properties, containing no pharmacokinetic or pharmacodynamic data for iodine. |
| popPK | Woods_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of depressive symptoms after bariatric surgery and contains no pharmacokinetic data for iodine. |
| popPK | Xinna_2026 | irrelevant | 0 | 0 | The paper is a systematic review on maternal age and perinatal outcomes, containing no pharmacokinetic data for iodine. |
| popPK | Yokoi_1993 | irrelevant | 1 | 0 | The study focuses on cerebral blood flow and partition coefficients for the diagnostic tracer iodine-123-iodoamphetamine, not the systemic pharmacokinetic disposition parameters (CL, V, ka) of iodine as a drug. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for teicoplanin, not iodine. |
| PD | Yu_2025 | not_relevant | 1 | 0 | The paper is a review of population pharmacokinetic (PPK) models for Teicoplanin (not iodine) and explicitly states that further studies are needed to clarify the dose-exposure-response relationship, indicating no PD parameters are reported. |
| PD | Yuan_2026 | not_relevant | 0 | 0 | The paper is a synthetic chemistry study reporting the synthesis and characterization of organoboron compounds; it contains no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or dose-response curves for iodine or any drug. |
| popPK | Zhang_2006 | irrelevant | 0 | 0 | The paper is a mechanistic study on 5-HT6 receptor mutations and ligand binding, not a pharmacokinetic study of iodine. |
| PD | Zhang_2006 | not_relevant | 0 | 0 | The paper reports receptor binding and functional activation data for 5-HT6 receptor mutants, not a pharmacokinetic or pharmacodynamic exposure-response relationship for iodine. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The paper studies the biodegradation of benzalkonium chloride in activated sludge and does not involve iodine pharmacokinetics. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for azithromycin, not iodine. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) studies for azithromycin and does not report any pharmacodynamic (PD) or exposure-response relationship for iodine. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on purine metabolism and uric acid in kidney disease, not the pharmacokinetics of iodine. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on metabolomic signatures and Mendelian randomization for uric acid in kidney disease, not on pharmacodynamic modeling or exposure-response relationships for iodine. |
| PD | Zhao_2016 | not_relevant | 0 | 0 | The paper reports in vitro anti-HBV activity of novel compounds but does not provide numeric PD parameters (e.g., IC50, Emax) or exposure-response relationships in the provided text. |
| popPK | Zhu_2024 | irrelevant | 0 | 0 | The paper is a transcriptomic meta-analysis of Benzo[a]pyrene exposure and does not involve iodine pharmacokinetics. |
| PD | Zhu_2024 | not_relevant | 0 | 0 | The paper is a meta-analysis of gene expression changes (transcriptomics) in response to Benzo[a]pyrene, not a pharmacodynamic study of iodine, and it does not report concentration-effect curves or numeric PD parameters like Emax or EC50. |
| popPK | Zhuang_1995 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro receptor binding affinity of a radioiodinated ligand, not the pharmacokinetics of iodine as a drug. |
| popPK | Zhuang_2026 | irrelevant | 0 | 0 | The study is a cross-sectional epidemiological analysis of PM2.5 exposure and thyroid function, not a pharmacokinetic study of iodine. |
| popPK | de_2023 | irrelevant | 0 | 0 | The paper is a systematic review on oral health-related quality of life in patients with cleft lip and palate and contains no pharmacokinetic data for iodine. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The paper is a study on telemedicine for surgical wound assessment and contains no pharmacokinetic data for iodine. |
| popPK | Álvarez_2020 | irrelevant | 0 | 0 | The paper is a systematic review on the association between dementia and suicide, containing no pharmacokinetic data for iodine. |
| popPK | Çavdar_2025 | irrelevant | 0 | 0 | The study focuses on the safety and efficacy of lithium therapy for Graves' disease, with iodine mentioned only as a comparator treatment (radioactive iodine) and not as the subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
