<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;iodine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iodine_Samukawa2017_reference&quot;,&quot;label&quot;:&quot;Samukawa_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iodine/Iodine_Samukawa2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# iodine

- **generic name:** iodine
- **ATC codes:** `D08AG03`
- **DrugBank:** [DB05382](https://go.drugbank.com/drugs/DB05382) · **PubChem:** [CID 807](https://pubchem.ncbi.nlm.nih.gov/compound/807)
- **molar mass:** 253.8089 g/mol (I2) — DrugBank
- **groups:** approved, investigational

## About

Iodine is used as a topical antiseptic and disinfectant for the skin. It is an approved drug, widely available for skin antisepsis, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2064483](https://www.wikidata.org/wiki/Q2064483) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:04 | 14:57 | 1/1/0 | 1/0/1 | 0/0/0 | 1,531,840/80,409 | einfracz / qwen3.8-27b | 89 | 14/80 | 81/8 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Samukawa_2017_reference](drugs/drug_iodine/Iodine_Samukawa2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Samukawa Y et al., Mechanism-Based Pharmacokinetic-Pharmac…, Biological & pharmaceutical… (2017) | [10.1248/bpb.b16-00998](https://doi.org/10.1248/bpb.b16-00998) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kirchner_1994_reference](drugs/drug_iodine/Iodine_Kirchner1994_reference.md) | — | general linear (no model) | 0 | Kirchner G, Transport of iodine and cesium via the…, Health physics (1994) | [10.1097/00004032-199406000-00005](https://doi.org/10.1097/00004032-199406000-00005) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhuang_1995_forskolin_stimulated_adenylyl_cyclase_activity](drugs/drug_iodine/pd_Zhuang_1995_forskolin_stimulated_adenylyl_cyclase_activity.md) | forskolin-stimulated adenylyl cyclase activity ← (+)-(R)-trans-8-hydroxy-2-[N-n-propyl-N-(3'-iodo-2'-propenyl)] aminotetralin · inhibition effect | — | Zhuang ZP et al., Synthesis of (+)-(R)- and (-)-(S)-trans…, Chirality (1995) | [10.1002/chir.530070611](https://doi.org/10.1002/chir.530070611) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fusella_2026_Tg](drugs/drug_iodine/pd_Fusella_2026_Tg.md) | serum thyroglobulin ← radioactive iodine · inhibition effect | — | Fusella Giuntini M et al., A computational framework for optimizin…, Scientific reports (2026) | [10.1038/s41598-026-56267-1](https://doi.org/10.1038/s41598-026-56267-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=iodine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |

<sub>Actors without a tissue in the table: Microbial proteins (unknown), SLC26A4 (substrate), SLC5A5 (substrate), TG (binder), TPO (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3349 matched, 279 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_19 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Frennby_1995.pdf` | Frennby B et al., The use of iohexol clearance to determi…, Clinical nephrology (1995) | popPK | 5 | not captured | [7697934](https://pubmed.ncbi.nlm.nih.gov/7697934) | The study uses iohexol (iodinated contrast) as a probe to determine GFR and reports specific clearance values for iohexol/iodine in patients, though it is primarily a comparative renal function study rather than a dedicated PK characterization of iodine. |
| `Kirchner_1994.pdf` | Kirchner G, Transport of iodine and cesium via the…, Health physics (1994) | popPK | 5 | [10.1097/00004032-199406000-00005](https://doi.org/10.1097/00004032-199406000-00005) | [8181940](https://pubmed.ncbi.nlm.nih.gov/8181940) | The study reports quantitative compartmental modeling parameters (weathering half-lives and feed-to-milk transfer coefficients) for iodine in cows. |
| `Latif_2015.pdf` | Latif R et al., New small molecule agonists to the thyr…, Thyroid : official journal… (2015) | pd | 5 | [10.1089/thy.2014.0119](https://doi.org/10.1089/thy.2014.0119) | [25333622](https://www.ncbi.nlm.nih.gov/pubmed/25333622) | metadata signals extractable PD data (EC50) |
| `Li_2022.pdf` | Li J et al., Halocyclopentadienes: An Emerging Class…, Environmental science & tec… (2022) | pd | 5 | [10.1021/acs.est.2c02490](https://doi.org/10.1021/acs.est.2c02490) | [35938673](https://www.ncbi.nlm.nih.gov/pubmed/35938673) | metadata signals extractable PD data (EC50) |
| `Musch_1987.pdf` | Musch MW et al., Homologous desensitization to prostagla…, The American journal of phy… (1987) | pd | 5 | [10.1152/ajpgi.1987.252.1.G120](https://doi.org/10.1152/ajpgi.1987.252.1.G120) | [3812680](https://www.ncbi.nlm.nih.gov/pubmed/3812680) | metadata signals extractable PD data (EC50) |
| `Asquith_2022.pdf` | Asquith CRM et al., Identification of 4-Anilinoquin(az)olin…, ChemMedChem (2022) | pd | 4 | [10.1002/cmdc.202200161](https://doi.org/10.1002/cmdc.202200161) | [35403825](https://www.ncbi.nlm.nih.gov/pubmed/35403825) | metadata signals extractable PD data (IC50) |
| `Badio_1994.pdf` | Badio B et al., Epibatidine, a potent analgetic and nic…, Molecular pharmacology (1994) | pd | 4 | not captured | [8183234](https://www.ncbi.nlm.nih.gov/pubmed/8183234) | metadata signals extractable PD data (EC50) |
| `Ding_2023.pdf` | Ding S et al., Leaching of organic matter and iodine,…, Journal of hazardous materi… (2023) | pd | 4 | [10.1016/j.jhazmat.2023.132241](https://doi.org/10.1016/j.jhazmat.2023.132241) | [37567136](https://www.ncbi.nlm.nih.gov/pubmed/37567136) | metadata signals extractable PD data (EC50) |
| `Fujita_1995.pdf` | Fujita H et al., Isolation and characterization of ovoki…, Peptides (1995) | pd | 4 | [10.1016/0196-9781(95)00054-n](https://doi.org/10.1016/0196-9781(95)00054-n) | [7479316](https://www.ncbi.nlm.nih.gov/pubmed/7479316) | metadata signals extractable PD data (EC50) |
| `Hou_2022.pdf` | Hou X et al., Construction of a 124I-Labeled Specific…, Molecular pharmaceutics (2022) | pd | 4 | [10.1021/acs.molpharmaceut.2c00342](https://doi.org/10.1021/acs.molpharmaceut.2c00342) | [35904514](https://www.ncbi.nlm.nih.gov/pubmed/35904514) | metadata signals extractable PD data (EC50) |
| `Jones_1992.pdf` | Jones SB et al., Altered aortic production of 6-keto-pro…, Journal of vascular research (1992) | pd | 4 | [10.1159/000158940](https://doi.org/10.1159/000158940) | [1504198](https://www.ncbi.nlm.nih.gov/pubmed/1504198) | metadata signals extractable PD data (EC50) |
| `Maletti_1987.pdf` | Maletti M et al., Evidence of functional gastric inhibito…, Diabetes (1987) | pd | 4 | [10.2337/diab.36.11.1336](https://doi.org/10.2337/diab.36.11.1336) | [2822518](https://www.ncbi.nlm.nih.gov/pubmed/2822518) | metadata signals extractable PD data (IC50) |
| `Rajasekaran_2014.pdf` | Rajasekaran D et al., Targeting distinct tautomerase sites of…, FASEB journal : official pu… (2014) | pd | 4 | [10.1096/fj.14-256636](https://doi.org/10.1096/fj.14-256636) | [25016026](https://www.ncbi.nlm.nih.gov/pubmed/25016026) | metadata signals extractable PD data (EC50) |
| `Schiebinger_1988.pdf` | Schiebinger RJ et al., The adrenal capsule alters the response…, Endocrinology (1988) | pd | 4 | [10.1210/endo-123-1-492](https://doi.org/10.1210/endo-123-1-492) | [2968238](https://www.ncbi.nlm.nih.gov/pubmed/2968238) | metadata signals extractable PD data (IC50) |
| `Wong_1990.pdf` | Wong SK et al., Chimeric muscarinic cholinergic: beta-a…, The Journal of biological c… (1990) | pd | 4 | not captured | [2156845](https://www.ncbi.nlm.nih.gov/pubmed/2156845) | metadata signals extractable PD data (EC50) |
| `Kim_2022.pdf` | Kim H et al., Association of the SLC47A1 Gene Variant…, The Journal of clinical end… (2022) | pgx | 8 | [10.1210/clinem/dgac333](https://doi.org/10.1210/clinem/dgac333) | [35639991](https://www.ncbi.nlm.nih.gov/pubmed/35639991) | metadata signals extractable PGX data (SLC47A1, PK/PD-context) |
| `Low_2026.pdf` | Low XY et al., Influence of transporter polymorphisms…, Pharmacogenomics (2026) | pgx | 8 | [10.1080/14622416.2026.2641750](https://doi.org/10.1080/14622416.2026.2641750) | [41811250](https://www.ncbi.nlm.nih.gov/pubmed/41811250) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Shi_2023.pdf` | Shi J et al., Effect of Genotype on the Pharmacokinet…, Journal of clinical pharmac… (2023) | pgx | 8 | [10.1002/jcph.2168](https://doi.org/10.1002/jcph.2168) | [36309848](https://www.ncbi.nlm.nih.gov/pubmed/36309848) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Masimirembwa_1995.pdf` | Masimirembwa CM et al., Low CYP1A2 activity in rural Shona chil…, Clinical pharmacology and t… (1995) | pgx | 5 | [10.1016/0009-9236(95)90262-7](https://doi.org/10.1016/0009-9236(95)90262-7) | [7828378](https://www.ncbi.nlm.nih.gov/pubmed/7828378) | metadata signals extractable PGX data (CYP1A2) |

<sub>queue written 2026-10-07T21:51:58.118330+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abera_2026 | not_relevant | 0 | 0 | The paper discusses Vitamin D and Type 2 Diabetes, not the pharmacogenomics of iodine. |
| PD | Ahmad_2023 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel flurbiprofen derivatives as urease inhibitors, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) relationship for iodine. |
| PGx | Ahmadi_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacogenomics of antipsychotic-induced akathisia, not iodine pharmacokinetics or pharmacodynamics. |
| PGx | Allphin_2023 | not_relevant | 0 | 0 | The paper studies the effects of APOE genotypes on cardiac morphology and function using CT imaging; iodine is used solely as a radiological contrast agent to generate the images and is not the subject of a pharmacokinetic or pharmacodynamic analysis. |
| PGx | Alqurain_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacogenomic effects for warfarin, clopidogrel, and tacrolimus, but does not contain any data or analysis regarding iodine. |
| PD | Asquith_2022 | not_relevant | 0 | 0 | The paper focuses on the identification of a PKN3 inhibitor chemotype and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| PGx | Audet-Delage_2017 | not_relevant | 0 | 0 | The paper investigates UGT1A isoforms in colon cancer metabolism and does not report pharmacogenomic effects on the PK or PD of iodine. |
| popPK | BERSON_1954 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of iodoalbumin (radioiodine-labeled human serum albumin) as a tracer for albumin distribution, not the pharmacokinetics of iodine (iodide) itself. |
| PD | Baars_1980 | not_relevant | 2 | 1 | The study uses an agar diffusion technique to report qualitative inhibition percentages for various bacterial strains, lacking specific concentration-effect curves or numeric PD parameters (e.g., MIC, EC50) for iodine. |
| PGx | Bacha_2025 | not_relevant | 0 | 0 | The paper analyzes tenecteplase in acute ischemic stroke and does not mention iodine or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Badio_1994 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| PD | Badio_1994 | not_relevant | 0 | 0 | The paper discusses epibatidine, not iodine, and does not report any exposure-response or dose-response relationship for iodine. |
| popPK | Baqi_2018 | irrelevant | 0 | 0 | The paper is a structural-activity relationship study of GPR17 agonists and does not contain any pharmacokinetic data for iodine. |
| PD | Baqi_2018 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/agonist EC50 values for GPR17 ligands, which is pharmacology but not a pharmacokinetic/pharmacodynamic (exposure-response) relationship for iodine or any drug in a biological system. |
| PGx | Bayrak_2023 | not_relevant | 0 | 0 | The paper describes the design and synthesis of anticancer drug candidates and their in vitro/in silico activity; it does not report pharmacogenomic effects on PK/PD parameters of iodine. |
| popPK | Bechman_2026 | irrelevant | 0 | 0 | The paper investigates the impact of BMI on clinical response to JAK inhibitors in rheumatoid arthritis and contains no data regarding iodine pharmacokinetics. |
| popPK | Bergström_1979 | irrelevant | 1 | 0 | The paper analyzes contrast enhancement patterns using a compartment model for diagnostic imaging purposes rather than reporting standard PK disposition parameters (CL, V) for iodine as a drug. |
| popPK | Bi_2026 | irrelevant | 0 | 0 | The paper focuses on the in vitro pharmacology and molecular docking of neferine as a delta-opioid receptor agonist, containing no data on iodine pharmacokinetics. |
| PD | Bi_2026 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of Neferine as a DOR agonist and does not report any pharmacodynamic or exposure-response data for iodine. |
| PGx | Brose_2012 | not_relevant | 0 | 0 | The paper discusses targeted therapy for thyroid cancer and BRAF mutation, but does not report pharmacogenomic effects on the PK/PD of iodine. |
| PGx | Buletsa_1990 | not_relevant | 0 | 0 | The paper discusses environmental iodine levels and their association with disease course, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of iodine as a drug. |
| PD | CRISMER_1947 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics (absorption, excretion) of bilisil lectan, not iodine, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Cao_2026 | irrelevant | 0 | 0 | The paper describes a QSP model for Alzheimer's disease and lecanemab, containing no pharmacokinetic data for iodine. |
| popPK | Carballeira_2019 | irrelevant | 0 | 0 | The study focuses on the synthesis and antileishmanial activity of brominated and chlorinated fatty acids, not the pharmacokinetics of iodine. |
| PGx | Cargnin_2014 | not_relevant | 0 | 0 | The paper analyzes HLA-B*57:01 and abacavir hypersensitivity, not iodine pharmacokinetics or pharmacodynamics. |
| PGx | Chen_2013 | not_relevant | 0 | 0 | The paper reports a meta-analysis on cervical cancer risk associated with the MTHFR C677T polymorphism, which is unrelated to the pharmacokinetics or pharmacodynamics of iodine. |
| PGx | Chen_2022 | not_relevant | 0 | 0 | The paper is a diagnostic accuracy meta-analysis for lung cancer and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Chen_2026 | not_relevant | 0 | 0 | The paper investigates genetic associations with AMD susceptibility and anti-VEGF response, not pharmacokinetics or pharmacodynamics of iodine. |
| PGx | Chen_2026_2 | not_relevant | 0 | 0 | The paper is a review of dietary supplement safety and efficacy in pregnancy, not a pharmacogenomic study of iodine pharmacokinetics/pharmacodynamics. |
| PGx | Chen_2026_3 | not_relevant | 0 | 0 | The paper studies the association between a gene variant and disease susceptibility (IBD), not pharmacokinetics or pharmacodynamics of iodine. |
| PGx | Chenchula_2026 | not_relevant | 0 | 0 | The paper investigates pharmacogenetic predictors of chemotherapy toxicities in leukemia but does not mention iodine or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Cheng_2025 | not_relevant | 0 | 0 | The paper analyzes a circulating RNA biomarker (hsa_circ_0001955) for diagnostic/prognostic value in thyroid cancer, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of iodine. |
| PGx | Chiewchankaset_2022 | not_relevant | 0 | 0 | The paper studies plant physiology (cassava carbon partitioning) and uses iodine only as a staining reagent, not as a drug subject to pharmacogenomic analysis. |
| PD | Chitneni_2007 | not_relevant | 3 | 2 | The paper reports a single IC50 value for the non-radioactive analogue in an in vitro assay and qualitative biodistribution data, but does not provide a concentration-effect curve, dose-response relationship, or PK/PD model for the radiotracer. |
| popPK | Cohen_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (clearance, AUC) for the drug axitinib, not for iodine; iodine-131 is mentioned only as a prior therapy or exclusion criterion. |
| popPK | Colombo_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lenvatinib, not iodine, and iodine is only mentioned in the context of the cancer subtype (radioactive iodine-refractory). |
| PD | Colombo_2026 | not_relevant | 2 | 0 | The paper focuses on PK variability and dose-concentration correlation for lenvatinib, not on pharmacodynamic (exposure-response) parameters or effect modeling. |
| popPK | Conway_1989 | irrelevant | 0 | 0 | The study uses iodine as a diagnostic contrast agent in arthrography and does not report quantitative pharmacokinetic parameters (e.g., clearance, volume) for iodine. |
| PGx | DE_2024_2 | not_relevant | 0 | 0 | The paper investigates the effect of a variant on Gefitinib outcomes, not iodine. |
| PGx | Del_2026 | not_relevant | 0 | 0 | The paper discusses clopidogrel, not iodine. |
| PGx | Dello_2026 | not_relevant | 3 | 10 | The paper reports pharmacogenomic effects on clinical toxicity outcomes (PD) for sacituzumab govitecan, not for iodine. |
| PGx | Demirkol_2026 | not_relevant | 2 | 2 | The paper reports clinical efficacy of genotype-guided MAPK inhibition on iodine avidity (a PD parameter) but does not report specific pharmacokinetic parameters of iodine or quantitative pharmacogenomic effect sizes (theta) for PK/PD. |
| popPK | Deng_2022 | irrelevant | 0 | 0 | The paper investigates GPR15 receptor signaling in recombinant cells and does not involve iodine or its pharmacokinetics. |
| PD | Deng_2022 | not_relevant | 0 | 0 | The paper investigates GPR15 receptor signaling using peptide agonists, not the pharmacodynamics of iodine. |
| PGx | Dimulescu_2026 | not_relevant | 0 | 0 | The study evaluates the association between polymorphisms and neutropenia (PD toxicity) for CDK4/6 inhibitors, not iodine pharmacokinetics or pharmacodynamics. |
| popPK | Ding_2023 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| PD | Ding_2023 | not_relevant | 0 | 0 | The paper focuses on environmental chemistry and toxicological risk assessment of iodinated disinfection by-products from seaweed cooking, not on pharmacodynamic modeling or dose-response relationships for a drug. |
| popPK | Ding_2026 | irrelevant | 0 | 0 | The paper investigates the association between estimated glucose disposal rate and frailty progression in humans, and contains no data or models related to iodine pharmacokinetics. |
| popPK | Ding_2026_2 | irrelevant | 0 | 0 | The paper is a meta-analysis on the diagnostic value of D-dimer for detecting deep vein thrombosis and contains no pharmacokinetic data for iodine. |
| PGx | Doan_2023 | not_relevant | 0 | 0 | The paper investigates the emergence of Rotavirus strains following vaccine introduction, not pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Du_2019 | not_relevant | 3 | 4 | The paper addresses atazanavir pharmacogenomics (bilirubin metabolism) and does not report pharmacokinetic or pharmacodynamic effects related to iodine. |
| PGx | Du_2025 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between sorafenib and SGLT2 inhibitors, not the effect of a gene variant on the pharmacokinetics of iodine. |
| popPK | Ekundayo_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis on the prevalence of Hepatitis A and E viruses in food, unrelated to the pharmacokinetics of iodine. |
| PGx | El_2024 | not_relevant | 0 | 0 | The paper reports the preclinical development and biodistribution of a radiopharmaceutical, with no data on gene variants or pharmacogenomics. |
| PGx | Elsayed_2025 | not_relevant | 1 | 0 | The paper concerns clopidogrel and ticagrelor, not iodine, and reports clinical outcomes (thrombosis, bleeding) rather than PK/PD parameters. |
| popPK | Enokibori_1994 | irrelevant | 0 | 0 | The study investigates the mechanism of substance P-induced relaxation in dog arteries and does not report pharmacokinetic parameters for iodine. |
| PD | Enokibori_1994 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for substance P, not iodine. |
| popPK | Errico_2001 | irrelevant | 0 | 0 | The paper investigates the signaling mechanism of 5-HT(7) receptors in rat hippocampal neurons and does not report any pharmacokinetic parameters for iodine. |
| PD | Errico_2001 | not_relevant | 4 | 3 | The paper reports receptor pharmacology (EC50) for serotonin agonists in cell culture, not a pharmacodynamic exposure-response relationship for the drug iodine. |
| PGx | Fang_2021 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for valproic acid, not iodine. |
| popPK | Finogenova_2026 | irrelevant | 0 | 0 | This is a review of nanoparticle-based radionuclide therapy studies where iodine-131 is used as a diagnostic/therapeutic radionuclide label for nanoparticles, not a pharmacokinetic study of iodine as a subject drug with quantitative disposition parameters. |
| PD | Finogenova_2026 | not_relevant | 1 | 0 | The paper is a qualitative review of imaging-therapy correlations for radionuclide nanoparticles and does not report specific numeric PD parameters or concentration-effect curves. |
| popPK | Foudjin_2026 | irrelevant | 0 | 0 | The paper is a study on the antihyperlipidemic potential of fruit oil in rats, where "iodine" is only mentioned as a chemical quality control parameter (iodine value) for the oil, not as a pharmacokinetic subject drug. |
| PD | Foudjin_2026 | not_relevant | 2 | 1 | The paper reports an in vitro antioxidant EC50 and a qualitative dose-response for lipid parameters in rats, but does not report a pharmacodynamic model or numeric PD parameters (like Emax, EC50 for the in vivo effect, or slope) for the drug's exposure-response relationship. |
| popPK | Fresquet-Molina_2025 | irrelevant | 0 | 0 | The paper is a systematic review of vancomycin pharmacokinetics, not a study of iodine, and contains no data on the subject drug. |
| PD | Fresquet-Molina_2025 | not_relevant | 0 | 0 | The paper is a systematic review of vancomycin pharmacokinetic models and contains no information regarding iodine or any pharmacodynamic/exposure-response relationships. |
| popPK | Fujita_1995 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Fujita_1995 | not_relevant | 0 | 0 | The paper characterizes a peptide (ovokinin) and its interaction with the bradykinin B1 receptor, not the pharmacodynamics of iodine. |
| popPK | Fusella_2026 | irrelevant | 2 | 1 | The study models radioiodine therapy response dynamics (thyroglobulin kinetics and tumor cell dynamics) rather than the pharmacokinetic disposition parameters (CL, V) of the iodine itself. |
| popPK | Futaki_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fluorescein isothiocyanate dextran (FD-4), using iodine only as an X-ray tracer for visualizing skin distribution, not as the subject drug for PK parameter quantification. |
| PGx | GIBBONS_1964 | not_relevant | 0 | 0 | The paper concerns the metabolism of an intracellular iodine-staining polysaccharide in bacteria, not the pharmacogenomics of pharmacokinetic or pharmacodynamic parameters of iodine as a drug. |
| popPK | Garnier_1993 | irrelevant | 1 | 0 | The study focuses on methodological validation of compartmental analysis for an iodinated fatty acid (IHA) in isolated rat hearts, not on the systemic pharmacokinetic parameters of the drug iodine itself. |
| popPK | Gebrin_2025 | irrelevant | 0 | 0 | The paper is a systematic review of tranexamic acid in traumatic brain injury and contains no data on iodine pharmacokinetics. |
| PD | Gebrin_2025 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trials for tranexamic acid in traumatic brain injury, reporting clinical outcomes (mortality, hemorrhage) rather than pharmacodynamic or exposure-response parameters. |
| PGx | Gong_2024 | not_relevant | 0 | 0 | The study analyzes the association between MDR1 polymorphism and breast cancer risk, not PK/PD of iodine. |
| PGx | Gonnella_2019 | not_relevant | 0 | 0 | The study analyzes iodine biofortification in Brassica plants, not human pharmacogenomics or PK/PD parameters. |
| popPK | Goryanin_2026 | irrelevant | 0 | 0 | The paper describes a systems pharmacology model for aging involving semaglutide, SGLT2 inhibitors, metformin, and rapamycin, and does not mention iodine or its pharmacokinetics. |
| PD | Goryanin_2026 | not_relevant | 0 | 0 | The paper focuses on a systems pharmacology model for aging and metabolic health involving GLP-1 agonists, SGLT2 inhibitors, metformin, and rapamycin, with no mention of iodine or its pharmacodynamics. |
| popPK | Grigoroglou_2021 | irrelevant | 0 | 0 | The paper is a clinical psychology meta-analysis regarding collaborative care for depression and does not contain any pharmacokinetic data for iodine. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | This is an iodine balance study focusing on intake and excretion in children, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| popPK | Hadházy_1986 | irrelevant | 0 | 0 | This study is an in-vitro pharmacological investigation of prostaglandins and indomethacin on vascular tone, where I2 likely refers to prostaglandin I2 rather than the element iodine, and no pharmacokinetic parameters are reported. |
| PGx | Hamran_2025 | not_relevant | 0 | 0 | The paper discusses HCV genotypes (viral genotypes) and treatment outcomes, not human pharmacogenomic variants affecting the PK/PD of iodine. |
| PGx | Harvey_2026 | not_relevant | 3 | 5 | The paper discusses transcriptomic subtypes predicting radioactive iodine response/avidity, but it does not report a specific pharmacokinetic or pharmacodynamic parameter for a standard drug based on a gene variant. |
| PGx | Hikino_2021 | not_relevant | 0 | 0 | The paper analyzes the pharmacodynamics of albuterol (salbutamol), not iodine. |
| PGx | Ho_2022 | not_relevant | 0 | 0 | The paper reports on a clinical trial testing the efficacy of selumetinib with radioactive iodine and does not report any pharmacogenomic effects of gene variants on the PK or PD parameters of iodine. |
| PGx | Ho_2026 | not_relevant | 0 | 0 | The paper concerns the clinical efficacy of thermal ablation for HPV/cervical cancer, not the pharmacogenomics of iodine. |
| popPK | Hoetzel_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of a doxycycline-binding RNA aptamer (riboswitch) and contains no pharmacokinetic data for iodine. |
| popPK | Hogendorf_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a novel 5-HT7 receptor agonist (compound 1o), where iodine is merely a substituent, not the subject drug. |
| PD | Hosohata_1997 | not_relevant | 0 | 0 | The paper studies the pharmacology of AM630 (a cannabinoid antagonist) and does not report a pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Hou_2022 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Hou_2022 | not_relevant | 0 | 0 | The paper focuses on the radiolabeling and imaging application of an antibody for tumor detection, not on the pharmacodynamic or exposure-response relationship of iodine. |
| PGx | Hu_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomic associations for carbamazepine, not iodine. |
| popPK | Huang_2020 | irrelevant | 0 | 0 | The study is a preclinical imaging trial using iodine-labeled antibodies as diagnostic tracers, not a pharmacokinetic study of iodine as a subject drug. |
| PGx | Huang_2024 | not_relevant | 0 | 0 | The paper compares clinical outcomes of tenecteplase vs alteplase and does not involve the drug iodine or pharmacogenomic analysis. |
| PGx | Hurst_2019 | not_relevant | 2 | 3 | The paper identifies genetic haplotypes associated with clinical radioiodine refractoriness (response status) but does not report quantified changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters of iodine. |
| popPK | Iannuzzi_2026 | irrelevant | 0 | 0 | The paper focuses on HIV prevention using FTC/TDF-PrEP and does not study the pharmacokinetics of iodine. |
| PD | Iannuzzi_2026 | not_relevant | 4 | 3 | The paper uses a mechanistic viral dynamics model to simulate PrEP efficacy based on PK data, but it does not report a direct pharmacodynamic (concentration-effect) relationship or numeric PD parameters (like Emax or EC50) for the drug itself; instead, it derives efficacy from infection probability simulations. |
| popPK | Ibrahim_2025 | irrelevant | 0 | 0 | The paper focuses on a statistical model for competing risks in diabetes prevention and contains no pharmacokinetic data for iodine. |
| PD | Ibrahim_2025 | not_relevant | 0 | 0 | The paper describes a statistical method for competing risks analysis in a diabetes prevention study and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Iida_1994 | irrelevant | 0 | 0 | The study uses iodine-123-IMP as a diagnostic tracer to measure cerebral blood flow, rather than reporting the pharmacokinetic disposition parameters of the drug iodine itself. |
| popPK | Jaiswal_1992 | irrelevant | 0 | 0 | The study investigates angiotensin-induced prostaglandin release in porcine endothelial cells and does not involve iodine pharmacokinetics. |
| PD | Jaiswal_1992 | not_relevant | 0 | 0 | The paper investigates angiotensin peptides, not iodine. |
| popPK | James_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of glucagon, not iodine. |
| PD | James_2024 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for glucagon, not iodine. |
| popPK | Jang_2008 | irrelevant | 2 | 0 | The paper describes the derivation of retention functions for thyroid dose estimation but does not report specific quantitative pharmacokinetic parameter values (e.g., numerical CL, V, or ka) in the provided evidence. |
| PGx | Jang_2023 | not_relevant | 1 | 0 | The paper investigates the effect of PPARG polymorphisms on the response to thiazolidinediones (diabetes drugs), not on the pharmacokinetic or pharmacodynamic parameters of iodine. |
| PGx | Jena_2023 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of thiopurines, not iodine. |
| popPK | Jeon_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carboplatin, not iodine, and iodine is not the subject drug or a relevant metabolite in this context. |
| PD | Jeon_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) dosing optimization for carboplatin using the Calvert formula and does not report any pharmacodynamic (PD) or exposure-response relationships for iodine or any other drug. |
| PGx | Ji_2018 | not_relevant | 0 | 0 | The paper focuses on the clinical efficacy (SVR) of HCV treatments in Asian populations and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of iodine. |
| popPK | Jones_1992 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Jones_1992 | not_relevant | 0 | 0 | The paper investigates the effect of aldosterone-salt hypertension on aortic 6-keto-PGF1alpha production and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| PGx | Kabibulatova_2026 | not_relevant | 0 | 0 | The paper investigates genetic determinants of coronary artery disease risk in diabetes and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of iodine. |
| popPK | Kaczmarek_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antiviral activity of iodine-containing nucleoside analogues, not the pharmacokinetics of the element iodine. |
| popPK | Kaito_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on vascular physiology in dog arteries and does not involve iodine or pharmacokinetic parameters. |
| PD | Kaito_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of endothelin-1, not iodine. |
| popPK | Kan_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of semaglutide for MASH and contains no pharmacokinetic data for iodine. |
| PGx | Karbownik_2020 | not_relevant | 0 | 0 | The study examines the effect of diabetes (a disease phenotype) on sorafenib pharmacokinetics, not a gene variant/genotype effect, and iodine is not the subject drug. |
| popPK | Karhan_2026 | relevant | 4 | 2 | The paper reports qualitative findings on a two-compartment model for iodine-131 biokinetics in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| PGx | Karimi_2021 | not_relevant | 0 | 0 | The paper focuses on ADRB2 polymorphisms and asthma exacerbation outcomes, not the pharmacokinetics or pharmacodynamics of iodine. |
| PD | Kasibhatla_2007 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and in vivo tumor growth inhibition percentages, but does not provide an exposure-response or dose-response curve with derivable PD parameters (e.g., Emax, EC50 in vivo, or concentration-effect relationship). |
| popPK | Kasula_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and anti-hepatitis B virus activity of pyrazolo[3,4-d]pyrimidine-based neplanocin analogues, with no mention of iodine pharmacokinetics. |
| PGx | Kaur_2023 | not_relevant | 0 | 0 | The paper focuses on clinical risk factors and prognostic mutations for nodal recurrence in thyroid cancer, not on pharmacogenomic effects on the PK/PD of iodine therapy. |
| popPK | Kerling_2023 | irrelevant | 0 | 0 | The study investigates the effect of loop diuretics on antibiotic pharmacokinetics, not the pharmacokinetics of iodine. |
| PGx | Khattab_2025 | not_relevant | 1 | 5 | The paper concerns a pharmacogenomic interaction for clopidogrel, not for iodine. |
| PGx | Kido_2026 | not_relevant | 0 | 0 | The paper evaluates a drug-drug interaction between diltiazem/verapamil and DOACs, not a pharmacogenomic effect on iodine. |
| PGx | Kim_2022 | not_relevant | 0 | 0 | The paper focuses on metformin pharmacogenomics, not iodine. |
| popPK | Lai_2025 | irrelevant | 0 | 0 | The paper is a systematic review on chronic hepatitis B clinical outcomes and does not contain any pharmacokinetic data for iodine. |
| popPK | Latif_2015 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| PD | Latif_2015 | not_relevant | 0 | 0 | The paper focuses on the development of small molecule agonists for the thyrotropin receptor, not on the pharmacodynamics or exposure-response relationship of iodine. |
| popPK | Lauffer_2024 | irrelevant | 0 | 0 | The paper is a systematic review of reference intervals for thyroid function (fT4) in neonates, not a pharmacokinetic study of iodine disposition. |
| PGx | Lee_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of allopurinol and gout, not iodine. |
| popPK | Lenters_2011 | irrelevant | 0 | 0 | The paper is an epidemiological meta-analysis regarding asbestos exposure and lung cancer, completely unrelated to iodine pharmacokinetics. |
| PD | Lenters_2011 | not_relevant | 0 | 0 | The paper is a meta-analysis of epidemiological studies on asbestos and lung cancer, not a pharmacodynamic study of iodine. |
| popPK | Li_2022 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Li_2022 | not_relevant | 0 | 0 | The paper discusses halocyclopentadienes as toxic disinfection byproducts in drinking water and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of mortality rates in Klebsiella pneumoniae bacteremia, which is unrelated to the pharmacokinetics of iodine. |
| PGx | Li_2023_2 | not_relevant | 0 | 0 | The paper reports on Tacrolimus pharmacokinetics, not iodine. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper investigates antidepressants, not iodine. |
| PGx | Lingaratnam_2024 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for cancer therapies (e.g., fluoropyrimidines, irinotecan) and toxicity outcomes, but does not report PK/PD effects for iodine. |
| PGx | Liu_2014 | not_relevant | 0 | 0 | The paper analyzes the association between Vitamin D receptor gene polymorphisms and the risk of urolithiasis, but does not involve iodine or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Liu_2018 | not_relevant | 0 | 0 | This paper investigates the association of QSOX1 genetic variants with carcass and meat quality traits in cattle, not with the pharmacokinetics or pharmacodynamics of iodine or any other drug. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis regarding the diagnostic accuracy of Sonazoid (a perfluorobutane contrast agent) for hepatocellular carcinoma, not a pharmacokinetic study of iodine. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetics for selpercatinib, not iodine. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for selpercatinib to support dosing, but it does not report any pharmacodynamic (PD) or exposure-response relationship, nor does it provide numeric PD parameters. |
| PGx | Low_2026 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on digoxin, not iodine. |
| popPK | Lundemose_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis regarding glucagon for hypoglycemia in diabetes and contains no data on iodine pharmacokinetics. |
| PD | Lundemose_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of glucagon efficacy and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Magini_2026 | irrelevant | 0 | 0 | The paper is a review of curcumin pharmacology and contains no data for iodine. |
| PD | Magini_2026 | not_relevant | 0 | 0 | The paper is a conceptual review of curcumin's pharmacology and does not report any exposure-response or dose-response data for iodine. |
| popPK | Mahajan_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the radiotracer 124I-PU-H71, not for iodine as a therapeutic or diagnostic substance. |
| PD | Maletti_1987 | not_relevant | 0 | 0 | The paper investigates GIP receptor binding and adenylate cyclase activation in insulinoma, which is unrelated to iodine pharmacodynamics. |
| popPK | Mannix_1993 | irrelevant | 0 | 0 | The study investigates cellular signaling responses to nucleotides in rabbit endothelium and does not involve the pharmacokinetics of iodine. |
| PD | Mannix_1993 | not_relevant | 0 | 0 | The paper reports pharmacological data for ATP and nucleotides, not iodine. |
| popPK | Mansi_2020 | irrelevant | 0 | 0 | The study evaluates pharmacokinetics (biodistribution) and pharmacodynamics (binding affinity) of Ga-68 labeled somatostatin analogs, not the pharmacokinetic parameters (CL, V, etc.) of the drug iodine itself. |
| popPK | Mansour_2026 | irrelevant | 0 | 0 | The paper is a systematic review regarding BAFF/APRIL inhibitors for IgA nephropathy and contains no pharmacokinetic data for iodine. |
| PD | Mansour_2026 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trial efficacy and safety outcomes (proteinuria, eGFR, biomarkers) for BAFF/APRIL inhibitors, and does not report any pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| PGx | Masimirembwa_1995 | not_relevant | 0 | 0 | The paper discusses caffeine metabolism (CYP1A2) and mentions iodine deficiency only as a potential cause for liver issues, reporting no pharmacokinetic or pharmacodynamic parameters of iodine itself. |
| PGx | Mason_2026 | not_relevant | 0 | 0 | The paper reports the economic effectiveness of pharmacogenomics-guided prescribing in psychiatry, focusing on cost and quality-of-life, with no data on the pharmacokinetic or pharmacodynamic parameters of iodine. |
| popPK | McGuigan_2001 | irrelevant | 0 | 0 | The paper is a review of antiviral drug synthesis and activity, with no pharmacokinetic data for iodine. |
| PD | McGuigan_2001 | not_relevant | 1 | 0 | The paper is a review of furano pyrimidines (antivirals) and does not report pharmacodynamic or exposure-response data for iodine. |
| popPK | McLean_1995 | irrelevant | 0 | 0 | The paper studies 5-HT4 receptor antagonists in isolated tissues and does not investigate the pharmacokinetics of iodine. |
| PD | McLean_1995 | not_relevant | 0 | 0 | The paper reports pharmacological affinities (pKB, pA2) and agonist EC50s for 5-HT4 antagonists, not a pharmacodynamic exposure-response or dose-response relationship for iodine. |
| popPK | Menezes_2018 | irrelevant | 0 | 0 | The paper is a systematic review on respiratory function interventions after stroke and contains no data regarding iodine or pharmacokinetics. |
| PD | Menezes_2018 | not_relevant | 0 | 0 | The paper is a systematic review of respiratory interventions after stroke and contains no pharmacodynamic or exposure-response analysis for iodine. |
| popPK | Meng_2025 | irrelevant | 0 | 0 | The study is a nutritional status assessment focusing on the optimal timing for urine collection (iodine/creatinine ratio) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Menkissoglu-Spiroudi_2001 | irrelevant | 0 | 0 | The paper investigates the antibacterial activity of hypervalent iodine compounds against Pseudomonas syringae, which is a microbiological study, not a pharmacokinetic study of iodine. |
| PGx | Merlini_1995 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of an anthracycline compound on amyloid fibrils and does not report any pharmacogenomic effects on a PK or PD parameter. |
| popPK | Methaneethorn_2025 | irrelevant | 0 | 0 | The paper is a systematic review of azithromycin pharmacokinetics, not iodine. |
| PD | Methaneethorn_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics (PopPK) for azithromycin, not iodine, and explicitly states there is limited data on exposure-safety relationships without reporting specific PD parameters. |
| PGx | Methaneethorn_2025_2 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic interactions between fruit juices and antihypertensive drugs, not the effect of genetic variants on iodine parameters. |
| PGx | Michael_2022 | not_relevant | 0 | 0 | The paper is a meta-analysis of antiretroviral therapy on neurocognitive outcomes in HIV patients, not a study on the pharmacokinetics or pharmacodynamics of iodine. |
| PGx | Mizutani_2022 | not_relevant | 0 | 0 | The paper investigates a radiopharmaceutical (iodine-labeled O-desmethylvenlafaxine) to image CYP activity, but it does not report the pharmacokinetics or pharmacodynamics of iodine as a therapeutic drug. |
| popPK | Moqadami_2024 | irrelevant | 0 | 0 | The study is an in vitro investigation of minocycline's effects on chondrocytes and does not involve the pharmacokinetics of iodine. |
| PD | Moqadami_2024 | not_relevant | 3 | 2 | The study is an in vitro cell biology experiment that qualitatively reports protective effects at an "EC50" concentration but does not provide a quantitative exposure-response curve or numeric PD parameters (like Emax or specific EC50 values) for the drug. |
| PGx | Morau_2024 | not_relevant | 0 | 0 | The paper studies pharmacogenomics of Gefitinib, not iodine. |
| popPK | Musch_1987 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| PD | Musch_1987 | not_relevant | 0 | 0 | The paper discusses prostaglandin desensitization in rabbit ileum and does not report any pharmacodynamic or exposure-response relationship for iodine. |
| PGx | Ménard_2013 | not_relevant | 0 | 0 | The paper discusses the regulation of UGT2B7 enzyme activity by splice variants, not the pharmacokinetics or pharmacodynamics of iodine. |
| popPK | Nakijoba_2026 | irrelevant | 0 | 0 | The paper is a systematic review regarding breastfeeding behavior among women on medication and does not report any pharmacokinetic parameters for iodine. |
| PD | Nakijoba_2026 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of breastfeeding prevalence among women on medications, containing no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for iodine or any other drug. |
| PGx | Napit_2023 | not_relevant | 0 | 0 | The paper concerns Newcastle disease and vaccine efficacy in poultry, unrelated to pharmacogenomics. |
| PGx | Niba_2021 | not_relevant | 0 | 0 | The study focuses on Plasmodium falciparum drug resistance gene prevalence, not human pharmacogenomic effects on iodine PK/PD. |
| popPK | Nishizawa_1995 | irrelevant | 0 | 0 | The study evaluates cerebral blood flow using the diagnostic radiotracer iodine-123-iodoamphetamine (IMP), not the pharmacokinetics of the drug iodine itself. |
| popPK | Noble_2019 | irrelevant | 0 | 0 | The study investigates the in vitro receptor activity of synthetic cannabinoids (including an iodo-analogue), not the pharmacokinetics of the drug iodine. |
| PGx | Nuñez_2023 | not_relevant | 0 | 0 | The paper investigates the association between SLC6A4 polymorphisms and antidepressant-induced mania, not the pharmacokinetics or pharmacodynamics of iodine. |
| popPK | OPPEHNEIMER_1965 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of thyroxine-binding prealbumin (a protein), not the disposition of iodine as a drug. |
| popPK | Ohta_2013 | irrelevant | 0 | 0 | The study focuses on the synthesis and binding affinity of carborane-containing estrogen receptor modulators, not the pharmacokinetics of iodine. |
| popPK | Okwu_1992 | irrelevant | 0 | 0 | The study investigates platelet receptor desensitization and uses an iodine-containing ligand (I-BOP) as a tool for binding/aggregation assays, not for the pharmacokinetics of the drug iodine. |
| popPK | Onishi_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the radioligand iodine-123-iomazenil (a benzodiazepine receptor ligand), not the drug iodine itself. |
| PGx | Oussalah_2017 | not_relevant | 0 | 0 | The paper discusses vitamin B-12 metabolism and does not involve the drug iodine. |
| PGx | Pan_2015 | not_relevant | 0 | 0 | The paper investigates the association between CYP2A6 polymorphisms and cigarette consumption/nicotine metabolism, not the pharmacokinetics or pharmacodynamics of iodine. |
| PGx | Park_2024 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of sirolimus (Rapamune) in transplant patients, not iodine, and does not report pharmacogenomic effects. |
| popPK | Pence_2026 | irrelevant | 0 | 0 | The paper is a diagnostic accuracy meta-analysis for portable MRI in stroke and contains no pharmacokinetic data for iodine. |
| PGx | Pereira_2024 | not_relevant | 0 | 0 | The paper investigates heat wave effects on wheat grain starch quality and transcriptomics, unrelated to human pharmacogenomics or iodine pharmacokinetics. |
| PGx | Pham_2025 | not_relevant | 0 | 0 | The paper focuses on the association between the HLA-B*58:01 genotype and allopurinol-induced severe cutaneous adverse reactions, explicitly excluding studies on pharmacokinetics/pharmacodynamics and involving iodine. |
| PGx | Poland_1990 | not_relevant | 0 | 0 | The paper characterizes Ah receptor gene variants in mice using radiolabeled ligands, but does not report pharmacokinetic or pharmacodynamic effects of iodine itself. |
| PGx | Pullano_2026 | not_relevant | 0 | 0 | The paper focuses on antidepressants in MDD and does not discuss iodine or its PK/PD parameters. |
| popPK | Pérez-Albaladejo_2023 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment of haloacetic acids (disinfection by-products), not a pharmacokinetic study of iodine disposition. |
| popPK | Qin_2023 | irrelevant | 0 | 0 | The paper is a systematic review of dental implant placement outcomes and contains no pharmacokinetic data for iodine. |
| popPK | Rajabi_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of device-related thrombosis incidence following left atrial appendage occlusion and contains no pharmacokinetic data for iodine. |
| popPK | Rajasekaran_2014 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Rajasekaran_2014 | not_relevant | 0 | 0 | The paper focuses on the inhibition of neutrophil lung recruitment by targeting D-DT and MIF, not on iodine pharmacodynamics or exposure-response relationships. |
| popPK | Ramadan_2026 | irrelevant | 0 | 0 | The study is a systematic review of ivermectin for malaria vector control and does not report pharmacokinetic parameters for iodine. |
| PD | Ramadan_2026 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trials evaluating ivermectin for malaria vector control; it does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for iodine. |
| popPK | Regazzo_2026 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy of balneotherapy and aquatic exercise for knee osteoarthritis, containing no pharmacokinetic data or parameters for iodine. |
| PGx | Regina_2024 | not_relevant | 0 | 0 | The paper investigates SNPs in vitamin D metabolism genes in relation to COVID-19 severity and mortality, unrelated to the pharmacokinetics or pharmacodynamics of iodine. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The paper investigates skeletal muscle mass recovery in hyperthyroid patients after radioactive iodine therapy, focusing on inflammatory biomarkers, and does not report any pharmacokinetic parameters (such as clearance, volume, or half-life) for iodine itself. |
| PGx | Richardson_2019 | not_relevant | 0 | 0 | The paper investigates the association between NAT2 variants and anti-tuberculosis drug toxicity (hepatotoxicity), not the pharmacokinetics or pharmacodynamics of iodine. |
| popPK | Robert_1992 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 4'-iodo-4'-deoxydoxorubicin (an anthracycline chemotherapy drug), not for the element iodine itself. |
| PGx | Rofo_2022 | not_relevant | 0 | 0 | The paper studies a recombinant protein therapy for Alzheimer's disease and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of iodine. |
| PGx | Rowen_1992 | not_relevant | 0 | 0 | The paper discusses the glycogen branching enzyme in yeast and does not involve human pharmacogenomics or the pharmacokinetics/pharmacodynamics of iodine as a therapeutic agent. |
| PD | SALTER_1945 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, curves, or parameters required to extract a pharmacodynamic relationship. |
| popPK | Saidi_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and anti-inflammatory evaluation of benzofuran-hybrids, with no content related to iodine pharmacokinetics. |
| PD | Saidi_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 and in vivo percent inhibition for novel synthetic compounds, not a pharmacodynamic or exposure-response relationship for iodine. |
| popPK | Salim_2025 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of carbohydrate derivatives and contains no pharmacokinetic data for iodine. |
| PD | Salim_2025 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of carbohydrate derivatives and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Samukawa_2017 | irrelevant | 0 | 0 | The study reports PK parameters for luseogliflozin (an SGLT2 inhibitor), not for iodine. |
| popPK | Saul_2020 | irrelevant | 0 | 0 | The paper describes the antiviral activity of chemical compounds containing iodine as a substituent, not the pharmacokinetics of the drug iodine. |
| PD | Schiebinger_1988 | not_relevant | 0 | 0 | The paper investigates the effect of the adrenal capsule on zona glomerulosa cells' response to atrial natriuretic peptide, not iodine. |
| PGx | Schwartz_1986 | not_relevant | 0 | 0 | The paper studies the metabolic effects of growth hormone on adipocytes and uses radiolabeled iodine for binding assays, but does not report a pharmacogenomic effect on the PK/PD of iodine as a drug. |
| PGx | Scott_1995 | not_relevant | 0 | 0 | The paper is a case report on nuclear medicine imaging for thyroid cancer metastasis and does not discuss pharmacogenomics or genetic effects on PK/PD parameters. |
| popPK | Seshadri_2021 | irrelevant | 0 | 0 | The paper is a meta-analysis of psychotherapy for depression and contains no pharmacokinetic data for iodine. |
| popPK | Shadid_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vitamin D (25-OH-D), not iodine. |
| PGx | Shao_2020 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on sirolimus, not iodine. |
| PGx | Shi_2023 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the PK/PD of direct oral anticoagulants, not iodine. |
| popPK | Siegrist_1986 | irrelevant | 0 | 0 | The paper describes an in vitro assay for melanin synthesis using MSH peptides, which is unrelated to the pharmacokinetics of the drug iodine. |
| popPK | Simon_1979 | irrelevant | 4 | 0 | The study describes a two-compartment model for the follicular iodide pool in rats, but no quantitative pharmacokinetic parameter values (CL, V, k, t1/2) are present in the evidence. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | The paper reports antiviral activity (EC50) of nucleoside analogues, not pharmacokinetic disposition parameters for iodine. |
| PGx | Singh_2026 | not_relevant | 0 | 0 | The paper is a meta-analysis of allele frequencies and does not measure PK or PD parameters for iodine or any specific drug. |
| PGx | Sito_2024 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics of platinum chemotherapy in lung cancer, not iodine. |
| PGx | Solitano_2023 | not_relevant | 0 | 0 | The paper focuses on the immunogenicity of TNF-alpha antagonists, not the pharmacokinetics or pharmacodynamics of iodine. |
| popPK | Song_2025 | irrelevant | 0 | 0 | The study is a nutritional iodine balance study calculating intake requirements (EAR/RNI), not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Souza_2025 | not_relevant | 0 | 0 | The paper discusses genetic associations with MASLD outcomes, not a pharmacogenomic effect on the PK/PD of iodine. |
| PGx | Starčević_2022 | not_relevant | 0 | 0 | The paper investigates the association between HFE gene variants and susceptibility to multiple sclerosis, which is a disease risk association study, not a pharmacogenomic study of iodine pharmacokinetics or pharmacodynamics. |
| popPK | Stitt_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tranexamic acid, not iodine. |
| PD | Stitt_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tranexamic acid, not iodine, and focuses on exposure targets rather than pharmacodynamic (PD) or dose-response relationships. |
| PGx | Sun_2023 | not_relevant | 0 | 0 | The paper focuses on computational methods for predicting solvation free energy and does not study pharmacogenomic effects on iodine pharmacokinetics or pharmacodynamics. |
| PD | Sunghwa_2009 | not_relevant | 0 | 0 | The paper describes a chemical synthesis method using iodine as a catalyst and reports a single IC50 value for a synthesized derivative, but does not report a pharmacodynamic or exposure-response relationship for iodine itself. |
| PD | TRONCHE_1961 | not_relevant | 0 | 0 | The paper focuses on the physical penetration of I-131 through ocular membranes and does not report a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters. |
| PGx | Takeuchi_2020 | not_relevant | 0 | 0 | The text describes the search strategy and methods for a systematic review on warfarin and CYP2C9, not iodine. |
| PGx | Talpacci_2026 | not_relevant | 2 | 5 | The paper describes a clinical case of drug-induced redifferentiation (PD effect) in a patient with a specific genotype, but it is a single case report without population-level statistical analysis or fitted pharmacokinetic/pharmacodynamic effect sizes for the genotype-phenotype relationship. |
| popPK | Tan_2024 | irrelevant | 0 | 0 | The paper is a systematic review on plant-based diets and mortality, containing no pharmacokinetic data for iodine. |
| popPK | Tan_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis on the association between skipping breakfast and depression, containing no pharmacokinetic data for iodine. |
| PGx | Tang_2014 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effect of ATRA on iodine uptake in cancer cells, not the effect of a gene variant on iodine's PK/PD. |
| popPK | Thomas_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of isoniazid, not iodine. |
| PD | Thomas_2022 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) models for isoniazid, focusing on clearance and NAT2 genotype, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Toda_1987 | irrelevant | 0 | 0 | The paper is an in vitro pharmacological study on coronary artery reactivity to vasoactive agents in beagles and does not report any pharmacokinetic parameters for iodine. |
| PGx | Tom_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of efficacy and safety outcomes in polycythemia vera and does not report pharmacogenomic effects on the PK or PD of iodine. |
| PD | Uddin_2011 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for a radiotracer analogue, which is a pharmacological potency metric, but does not report an in vivo exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Valderrama_2025 | irrelevant | 0 | 0 | The study analyzes pharmacokinetic parameters for fluorouracil and sunitinib, not iodine. |
| PD | Valderrama_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) concentration prediction using machine learning and population PK models, with no mention of pharmacodynamic (PD) effects, exposure-response relationships, or dose-response parameters. |
| PGx | Vorobyeva_2019 | not_relevant | 0 | 0 | The paper investigates radiolabeling strategies for an imaging probe (DARPin G3) and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of iodine. |
| PGx | Wallis_1993 | not_relevant | 0 | 0 | The paper describes the production of a radioactive tracer (35S-labeled ovine growth hormone) and does not investigate pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of iodine or any other drug. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper investigates the association between MTTP genotype and hepatic steatosis in Hepatitis C, not the pharmacokinetic or pharmacodynamic effects of iodine. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper examines pharmacogenomic effects on anti-seizure medications (ASMs) for epilepsy, not on iodine pharmacokinetics or pharmacodynamics. |
| popPK | Wang_2024_2 | irrelevant | 0 | 0 | The study focuses on iodine balance and nutritional requirement (zero iodine balance), not pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Wang_2024_3 | not_relevant | 0 | 0 | The paper investigates the effect of CYP1A2 genotype on exercise performance (PD) following caffeine ingestion, not iodine. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The study investigates prognostic biomarkers (ctDNA) for survival in NSCLC, not pharmacogenomic effects on PK/PD. |
| PD | Werner_1989 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response observation for an inhibitor but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative exposure-response model for iodine. |
| popPK | Wong_1990 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Wong_1990 | not_relevant | 0 | 0 | The paper describes the engineering of chimeric G-protein coupled receptors and their signaling properties, containing no pharmacokinetic or pharmacodynamic data for iodine. |
| popPK | Woods_2023 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of depressive symptoms following bariatric surgery and contains no data regarding the pharmacokinetics of iodine. |
| PGx | Wu_2024 | not_relevant | 0 | 0 | The paper investigates the effect of a gene variant on antidepressant efficacy (clinical response), not on the pharmacokinetics or pharmacodynamics of iodine. |
| PGx | Xian_2024 | not_relevant | 0 | 0 | The study investigates the causal association between serum metabolites (like betaine) and Active Tuberculosis (ATB) using Mendelian Randomization, focusing on disease pathogenesis and biomarkers, not on pharmacokinetic or pharmacodynamic parameters of iodine. |
| popPK | Xinna_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis regarding maternal age and perinatal outcomes (e.g., Down syndrome), containing no pharmacokinetic data for iodine. |
| PGx | Yadav_2021 | not_relevant | 0 | 0 | The paper is a meta-analysis on folate/cobalamin biomarkers and NTD risk, with no mention of iodine pharmacokinetics or pharmacogenomics. |
| PGx | Yatsu_1990 | not_relevant | 0 | 0 | The paper studies HDL metabolism and Apolipoprotein A-I polymorphisms, using iodine-125 merely as a radiolabel, not as a drug subject to pharmacogenomic analysis. |
| popPK | Yokoi_1993 | irrelevant | 2 | 2 | The study analyzes the pharmacokinetics of the radioactive tracer I-123-iodoamphetamine for diagnostic cerebral blood flow measurement, not the systemic disposition of iodine as a therapeutic drug. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of teicoplanin, not iodine. |
| PD | Yu_2025 | not_relevant | 1 | 0 | The paper is a review of population pharmacokinetic (PPK) models for Teicoplanin (not iodine) and explicitly states that further studies are needed to clarify the dose-exposure-response relationship, indicating no PD parameters are reported. |
| PD | Yuan_2026 | not_relevant | 0 | 0 | The paper is a synthetic chemistry study reporting the synthesis and characterization of organoboron compounds; it contains no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or dose-response curves for iodine or any drug. |
| popPK | Zhang_2006 | irrelevant | 0 | 0 | The paper investigates receptor mutagenesis and ligand binding in an in vitro system and does not report pharmacokinetic parameters for iodine. |
| PD | Zhang_2006 | not_relevant | 0 | 0 | The paper reports receptor binding and functional activation data for 5-HT6 receptor mutants, not a pharmacokinetic or pharmacodynamic exposure-response relationship for iodine. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The paper focuses on the biodegradation of benzalkonium chloride, not the pharmacokinetics of iodine. |
| PGx | Zhang_2019 | not_relevant | 0 | 0 | The paper discusses inhaled corticosteroids and asthma management, involving no gene variants or iodine pharmacokinetics/pharmacodynamics. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper discusses the pharmacogenomics of voriconazole (an antifungal), not iodine. |
| PGx | Zhang_2023 | not_relevant | 0 | 0 | The paper analyzes the association between alcohol metabolism gene variants and cancer risk, not the pharmacokinetics or pharmacodynamics of iodine. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study is a systematic review of population pharmacokinetics for azithromycin, not iodine. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) studies for azithromycin and does not report any pharmacodynamic (PD) or exposure-response relationship for iodine. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study focuses on purine metabolism (uric acid) in kidney disease models and does not investigate the pharmacokinetics of iodine. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on metabolomic signatures and Mendelian randomization for uric acid in kidney disease, not on pharmacodynamic modeling or exposure-response relationships for iodine. |
| PD | Zhao_2016 | not_relevant | 0 | 0 | The paper reports in vitro anti-HBV activity of novel compounds but does not provide numeric PD parameters (e.g., IC50, Emax) or exposure-response relationships in the provided text. |
| PGx | Zheng_2024 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between Lenvatinib and Schisantherin A/Schisandrin A, not the effect of a gene variant on the PK/PD of iodine. |
| PGx | Zheng_2026 | not_relevant | 0 | 0 | The paper investigates the association between kisspeptin/KISS1 polymorphisms and polycystic ovary syndrome risk, with no mention of iodine pharmacokinetics or pharmacodynamics. |
| popPK | Zhu_2024 | irrelevant | 0 | 0 | The paper is a meta-analysis of transcriptomic data related to Benzo[a]pyrene exposure and does not report pharmacokinetic parameters for iodine. |
| PD | Zhu_2024 | not_relevant | 0 | 0 | The paper is a meta-analysis of gene expression changes (transcriptomics) in response to Benzo[a]pyrene, not a pharmacodynamic study of iodine, and it does not report concentration-effect curves or numeric PD parameters like Emax or EC50. |
| popPK | Zhuang_1995 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro receptor binding affinity of a new 5-HT1A ligand containing iodine, not the pharmacokinetics of iodine as a drug. |
| popPK | Zhuang_2026 | irrelevant | 0 | 0 | This is an epidemiological study on PM2.5 and thyroid health, not a pharmacokinetic study of iodine. |
| PGx | Zou_2026 | not_relevant | 0 | 0 | The paper is a meta-analysis of antiviral drugs against a virus in porcine cell models, containing no information on iodine pharmacokinetics, pharmacodynamics, or human pharmacogenomics. |
| popPK | de_2023 | irrelevant | 0 | 0 | The paper is a systematic review of oral health-related quality of life in patients with cleft lip and palate and does not contain any pharmacokinetic data for iodine. |
| PGx | de_2024 | not_relevant | 1 | 0 | The paper concerns pharmacogenomics of DPYD and fluoropyrimidines (e.g., 5-FU) rather than the drug iodine. |
| PGx | de_2026 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on imatinib, not iodine. |
| PGx | unknown_1984 | not_relevant | 0 | 0 | The paper describes the causes of congenital hypothyroidism and does not report pharmacogenomic effects on the PK or PD of iodine. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The paper is a study on telemedicine for surgical wound assessment and contains no pharmacokinetic data for iodine. |
| PGx | van_2015 | not_relevant | 0 | 0 | The paper describes metabolic engineering for chemical production and mentions iodine only as a reagent for a DNA cloning technique, not as a drug subject to pharmacogenomic analysis. |
| popPK | Álvarez_2020 | irrelevant | 0 | 0 | The paper is a systematic review on the association between dementia and suicide, containing no pharmacokinetic data for iodine. |
| popPK | Çavdar_2025 | irrelevant | 0 | 0 | The study evaluates lithium therapy for Graves' disease and iodine is only mentioned as a comparator/surgical option (radioactive iodine), with no PK parameters for iodine reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:52 UTC</sub>
