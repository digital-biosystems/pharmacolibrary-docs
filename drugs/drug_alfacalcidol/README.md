<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;alfacalcidol&quot;}]"></div>

# alfacalcidol

- **generic name:** alfacalcidol
- **ATC codes:** `A11CC03`
- **DrugBank:** [DB01436](https://go.drugbank.com/drugs/DB01436)
- **groups:** approved, investigational, nutraceutical

## About

**Description.** Alfacalcidol, or 1-alpha-hydroxycholecalciferol or 1-alpha-hydroxyvitamin D3, is a non-endogenous analogue of [vitamin D].[A234044] It plays an essential function in calcium homeostasis and bone metabolism. Alfacaldisol is activated by the enzyme 25-hydroxylase in the liver to mediate its effects in the body, or most importantly, the kidneys and bones. The pharmacological actions of alfacalcidol are prolonged than vitamin D because a negative feedback mechanism regulates the final activation step of vitamin D in the kidneys.[A175348,A175351]

Alfacalcidol is available in oral and intravenous formulations. In Canada, it is marketed as ONE-ALPHA, which manages hypocalcemia, secondary hyperparathyroidism, and osteodystrophy in adults with chronic renal failure.[L33284] In approving European countries, alfacalcidol is also indicated for managing nutritional and malabsorptive rickets and osteomalacia, vitamin D-dependent rickets and osteomalacia, and hypophosphataemic vitamin D resistant rickets and osteomalacia.[L33364,L33369]

**Indication.** Alfacalcidol is indicated in adult patients with chronic renal failure for the management of hypocalcemia, secondary hyperparathyroidism, or osteodystrophy.[L33284]

Alfacalcidol is indicated in the management of nutritional and malabsorptive rickets and osteomalacia, vitamin D-dependent rickets and osteomalacia, and hypophosphataemic vitamin D resistant rickets and osteomalacia.[L33364,L33369]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 08:14 | 3:52 | 0/0/0 | 0/1/0 | 0/0/0 | 23,272/1,178 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 4/17 | 18/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: disputed</span> | [Hoeben_2026](drugs/drug_alfacalcidol/pd_Hoeben_2026_TV.md) | Hoeben E et al., PKPD-Based Translational Modeling of Ca…, European journal of drug me… (2026) | [10.1007/s13318-026-01010-4](https://doi.org/10.1007/s13318-026-01010-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=alfacalcidol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…ol is absorbed passively and almost completely in the small intestine.[L33369]…”</sub> | prose |
| metabolism | bile duct | <sub>“…polar inactive metabolites, excreted primarily through the bile.[L33369]…”</sub> | prose |
| metabolism | liver | <sub>“…Alfacalcidol is rapidly converted in the liver to 1,25-dihydroxyvitamin D, which is essent…”</sub> | prose |

<sub>Actors without a tissue in the table: Alpha globin (binder), CYP27B1 (unknown), GC (substrate), RXRA (unknown), VDR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9088 matched, 71 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ose_2017.pdf` | Ose A et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2017) | pd | 5 | [10.1002/jcph.949](https://doi.org/10.1002/jcph.949) | [28614613](https://www.ncbi.nlm.nih.gov/pubmed/28614613) | metadata signals extractable PD data (Exposure-Response) |
| `Chen_1995.pdf` | Chen HF et al., Ketone EC50 values in the Microtox test, Ecotoxicology and environme… (1995) | pd | 4 | [10.1006/eesa.1995.1014](https://doi.org/10.1006/eesa.1995.1014) | [7539364](https://www.ncbi.nlm.nih.gov/pubmed/7539364) | metadata signals extractable PD data (EC50) |
| `Davenport_2024.pdf` | Davenport A, Does native vitamin D, or active vitami…, The International journal o… (2024) | pd | 4 | [10.1177/03913988241241204](https://doi.org/10.1177/03913988241241204) | [38561893](https://www.ncbi.nlm.nih.gov/pubmed/38561893) | metadata signals extractable PD data (IC50) |
| `De_2017.pdf` | De Leo M et al., Constituents of Polygala flavescens ssp…, Journal of natural products (2017) | pd | 4 | [10.1021/acs.jnatprod.7b00295](https://doi.org/10.1021/acs.jnatprod.7b00295) | [28692289](https://www.ncbi.nlm.nih.gov/pubmed/28692289) | metadata signals extractable PD data (IC50) |
| `Lachnit_1997.pdf` | Lachnit WG et al., Pharmacological characterization of an…, British journal of pharmaco… (1997) | pd | 4 | [10.1038/sj.bjp.0700983](https://doi.org/10.1038/sj.bjp.0700983) | [9138687](https://www.ncbi.nlm.nih.gov/pubmed/9138687) | metadata signals extractable PD data (concentration-effect) |
| `Omidvar_2016.pdf` | Omidvar R et al., NMR structure and conformational dynami…, Biochimica et biophysica ac… (2016) | pd | 4 | [10.1016/j.bbapap.2016.08.017](https://doi.org/10.1016/j.bbapap.2016.08.017) | [27592418](https://www.ncbi.nlm.nih.gov/pubmed/27592418) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-16T08:14:10.332366+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Atsukawa_2013 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of alfacalcidol on HCV treatment outcomes (SVR) and does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of alfacalcidol itself. |
| popPK | Baroudi_2026 | irrelevant | 0 | 0 | The study focuses on population pharmacokinetic models for tacrolimus, not alfacalcidol. |
| PD | Baroudi_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (popPK) model selection for tacrolimus and does not report any pharmacodynamic (PD) or exposure-response relationships for alfacalcidol. |
| popPK | Barry_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vancomycin, not alfacalcidol. |
| PD | Barry_2026 | not_relevant | 0 | 0 | The paper analyzes vancomycin nephrotoxicity, not alfacalcidol. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population PK models for therapeutic enzymes in lysosomal storage diseases (e.g., imiglucerase, avalglucosidase alfa) and does not study alfacalcidol. |
| PD | Barzel_2026 | not_relevant | 1 | 0 | The paper is a review of pharmacokinetic/pharmacodynamic models for enzyme replacement therapies in lysosomal storage diseases and does not contain any data, analysis, or parameters for alfacalcidol. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric modeling using warfarin and generic PK data, with no mention of alfacalcidol or its specific pharmacokinetic parameters. |
| PD | Bräm_2026 | not_relevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric modeling using neural ODEs and LASSO, demonstrating it on warfarin PK/PD data, but does not report any PD or exposure-response relationship for alfacalcidol. |
| PGx | Castejon_2003 | not_relevant | 0 | 0 | The paper investigates the alpha-adducin polymorphism and its effects on blood pressure, salt sensitivity, and nitric oxide excretion, but does not mention alfacalcidol or any pharmacokinetic/pharmacodynamic parameters of this drug. |
| popPK | Chen_1995 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | Chen_1995 | not_relevant | 0 | 0 | The text discusses ketone EC50 values in a Microtox test, which is unrelated to alfacalcidol pharmacodynamics. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | The paper discusses GABA-A agonists and does not involve alfacalcidol or its pharmacokinetics. |
| PD | Chen_2012 | not_relevant | 0 | 0 | The paper discusses GABA-A agonists (lorazepam, zolpidem, etc.) and does not mention alfacalcidol. |
| popPK | Cheong_2019 | irrelevant | 0 | 0 | The paper describes the cloning and antiproliferative activity of a mushroom lectin and does not involve alfacalcidol or pharmacokinetics. |
| PD | Cheong_2019 | not_relevant | 0 | 0 | The paper reports pharmacological data for Rhinocelectin (a lectin from Tiger Milk Mushroom), not alfacalcidol. |
| popPK | Dahan_2026 | irrelevant | 0 | 0 | The paper is a narrative review of Model-Informed Drug Development for analgesics and does not report any pharmacokinetic parameters for alfacalcidol. |
| PD | Dahan_2026 | not_relevant | 0 | 0 | The paper is a narrative review of MIDD methodologies and does not report specific pharmacodynamic parameters or exposure-response data for alfacalcidol. |
| popPK | Davenport_2024 | irrelevant | 0 | 0 | no_text gate: only 138 chars of text extracted (&lt; 400) |
| PD | Davenport_2024 | not_relevant | 0 | 0 | The paper investigates the association between vitamin D levels and antibody responses, but does not report a pharmacodynamic model or numeric exposure-response parameters for alfacalcidol. |
| popPK | De_2017 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | De_2017 | not_relevant | 0 | 0 | The paper focuses on the constituents of Polygala flavescens and their inhibition of Lactate Dehydrogenase, with no mention of alfacalcidol or its pharmacodynamics. |
| popPK | Dong_2020 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro inhibitory activity of CYP1B1 inhibitors, containing no pharmacokinetic data for alfacalcidol. |
| PD | Dong_2020 | not_relevant | 0 | 0 | The paper focuses on the synthesis and structure-activity relationship of CYP1B1 inhibitors, not on the pharmacodynamics or exposure-response of alfacalcidol. |
| PGx | Dong_2020 | not_relevant | 0 | 0 | The paper focuses on the synthesis of CYP1B1 inhibitors and does not report pharmacogenomic effects on the PK/PD of alfacalcidol. |
| popPK | Eisenach_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexmedetomidine in sheep, not alfacalcidol. |
| PD | Eisenach_1994 | not_relevant | 0 | 0 | The paper studies dexmedetomidine, not alfacalcidol. |
| popPK | Eleveld_2026 | irrelevant | 0 | 0 | The paper is a methodological comparison of software tools (OpenPMX vs NONMEM) and does not report pharmacokinetic parameters for alfacalcidol. |
| PD | Eleveld_2026 | not_relevant | 0 | 0 | The paper is a methodological comparison of software tools (OpenPMX vs NONMEM) and does not report any pharmacodynamic or exposure-response data for alfacalcidol. |
| PGx | Flor_2022 | not_relevant | 0 | 0 | The paper concerns fungal identification in blueberry plants and has no relation to alfacalcidol pharmacogenomics. |
| PGx | Formosa_2015 | not_relevant | 2 | 5 | The paper reports a drug-drug interaction (phenobarbitone increasing 1-AC metabolism) and a disease-causing mutation (CaSR), but does not report a pharmacogenomic effect of a specific gene variant on the PK/PD of alfacalcidol. |
| popPK | Goeyvaerts_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mosnodenvir, not alfacalcidol. |
| PD | Goeyvaerts_2026 | not_relevant | 0 | 0 | The paper describes a PD model for mosnodenvir (an antiviral), not alfacalcidol. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of calaspargase pegol (CalPEG), not alfacalcidol. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study evaluating automated PopPK modeling algorithms on 22 datasets (including bedaquiline, cefaclor, etc.), but alfacalcidol is not among the drugs studied or mentioned. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling methods and does not report any pharmacodynamic (PD) or exposure-response relationships for alfacalcidol or any other drug. |
| PGx | Infante_2019 | not_relevant | 0 | 0 | The paper is a review on the immunomodulatory effects of vitamin D in Type 1 Diabetes and does not report pharmacogenomic effects on the PK or PD of alfacalcidol. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not alfacalcidol. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not alfacalcidol, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The study focuses on multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not mention alfacalcidol. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper focuses on multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not mention alfacalcidol or report any PD parameters for it. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a general framework for benchmarking covariate model building methods using simulated data and does not report specific pharmacokinetic parameters for alfacalcidol. |
| PD | Karlsen_2026 | not_relevant | 0 | 0 | The paper describes a framework for benchmarking covariate model building in population pharmacokinetics (PK) and does not report any pharmacodynamic (PD) or exposure-response relationships for alfacalcidol. |
| popPK | Khan_2023 | irrelevant | 0 | 0 | The paper is a chemical investigation of fungal metabolites and does not involve alfacalcidol or pharmacokinetic studies. |
| PD | Khan_2023 | not_relevant | 0 | 0 | The paper reports IC50 values for novel fungal compounds (phomopthane A, etc.), not for the drug alfacalcidol. |
| popPK | Khriesha_2021 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring IC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bevacizumab (CT-P16), not alfacalcidol. |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bevacizumab (CT-P16) and compares exposure to a published efficacy benchmark, but it does not model or report a pharmacodynamic (PD) relationship or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Lachnit_1997 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Lachnit_1997 | not_relevant | 0 | 0 | The paper characterizes alpha 1A-adrenoceptor responses to noradrenaline in rat caudal artery and does not mention alfacalcidol or report any PD parameters for it. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of PF-06804103, not alfacalcidol. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper discusses PF-06804103, not alfacalcidol. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for gotistobart, not alfacalcidol. |
| PD | Li_2026_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for gotistobart, not alfacalcidol, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Luo_2018 | irrelevant | 0 | 0 | The paper is a natural product chemistry study on fungal polyketides with anti-influenza activity and contains no pharmacokinetic data for alfacalcidol. |
| PD | Luo_2018 | not_relevant | 0 | 0 | The paper reports the isolation of polyketides and their anti-influenza activities (IC50 values), but does not study alfacalcidol or report any pharmacodynamic/exposure-response relationship for it. |
| popPK | Ma_2019 | irrelevant | 0 | 0 | The paper studies exopolysaccharides from S. sanghuang and contains no data on alfacalcidol pharmacokinetics. |
| PD | Ma_2019 | not_relevant | 0 | 0 | The paper reports on the bioactivity of exopolysaccharides (SHP-2) in a mouse aging model and does not mention alfacalcidol or any pharmacodynamic parameters for it. |
| popPK | Min_2000 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding alfacalcidol pharmacokinetics. |
| PD | Min_2000 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding alfacalcidol or pharmacodynamics. |
| PGx | Negri_2014 | not_relevant | 2 | 0 | The text mentions VDR polymorphisms affecting calcitriol response but is a narrative review without specific data, tables, or fitted effect sizes for alfacalcidol PK/PD parameters. |
| popPK | Nuansri_2022 | irrelevant | 0 | 0 | The paper describes the isolation and biological activity of fungal metabolites and does not involve alfacalcidol or pharmacokinetic studies. |
| PD | Nuansri_2022 | not_relevant | 0 | 0 | The paper reports the isolation and characterization of fungal metabolites and their antifungal/cytotoxic activity, containing no data on alfacalcidol or any pharmacodynamic modeling. |
| popPK | Omidvar_2016 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Omidvar_2016 | not_relevant | 0 | 0 | The paper describes the NMR structure of a plant peptide and contains no information regarding alfacalcidol or pharmacodynamics. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor, not alfacalcidol. |
| PD | Ooi_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and pharmacodynamics of elafibranor, not alfacalcidol. |
| popPK | Ose_2017 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Ose_2017 | not_relevant | 0 | 0 | The paper analyzes teriparatide, not alfacalcidol. |
| popPK | Pereira_2012 | irrelevant | 0 | 0 | The paper is a clinical guideline for glucocorticoid-induced osteoporosis and does not report pharmacokinetic parameters for alfacalcidol. |
| PD | Pereira_2012 | not_relevant | 0 | 0 | The paper is a clinical guideline for glucocorticoid-induced osteoporosis and does not report any pharmacodynamic or exposure-response data for alfacalcidol. |
| popPK | Romo-Pérez_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on dihydrobenzo[c]phenanthridines and does not involve alfacalcidol or pharmacokinetic parameters. |
| PD | Romo-Pérez_2017 | not_relevant | 0 | 0 | The paper reports in vitro cytotoxicity (IC50) for dihydrobenzo[c]phenanthridine derivatives, not alfacalcidol, and does not contain pharmacokinetic or pharmacodynamic modeling. |
| popPK | Salminen_2007 | irrelevant | 0 | 0 | The paper studies nicotinic acetylcholine receptor pharmacology in mice and does not involve alfacalcidol or pharmacokinetic parameters. |
| PD | Salminen_2007 | not_relevant | 0 | 0 | The paper studies nicotinic acetylcholine receptor pharmacology in mice and does not mention alfacalcidol. |
| popPK | Sato_2010 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of a new VDR ligand (VDRM2) where alfacalcidol is used only as a comparator for efficacy and safety margins, with no pharmacokinetic parameters reported. |
| popPK | Schulz_2000 | irrelevant | 0 | 0 | The paper is a mechanistic study on Drosophila nicotinic acetylcholine receptors and does not involve alfacalcidol or pharmacokinetics. |
| PD | Schulz_2000 | not_relevant | 0 | 0 | The paper studies Drosophila nicotinic acetylcholine receptors and does not involve alfacalcidol or any pharmacodynamic modeling of the specified drug. |
| popPK | Sethuramalingam_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for asparaginase (N-Asp and P-Asp), not alfacalcidol. |
| PD | Sethuramalingam_2026 | not_relevant | 0 | 0 | The paper focuses on asparaginase (N-Asp and P-Asp) pharmacokinetics and activity, not alfacalcidol. |
| popPK | Sharma_1990 | irrelevant | 0 | 0 | The paper studies the immunological activity of alpha-d3DGuo, not the pharmacokinetics of alfacalcidol. |
| PD | Sharma_1990 | not_relevant | 0 | 0 | The paper studies alpha-d3DGuo, not alfacalcidol. |
| popPK | Skomedal_1988 | irrelevant | 0 | 0 | The paper studies adrenoceptor-mediated inotropic responses in rat heart and does not involve alfacalcidol or pharmacokinetic parameters. |
| PD | Skomedal_1988 | not_relevant | 0 | 0 | The paper studies the inotropic response to norepinephrine in rat hearts and does not mention alfacalcidol or any pharmacodynamic parameters for it. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B, not alfacalcidol. |
| PD | Soeorg_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B, not alfacalcidol. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not alfacalcidol. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil, not alfacalcidol, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Sürmelioğlu_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for vancomycin, not alfacalcidol. |
| PD | Sürmelioğlu_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) studies for vancomycin, not alfacalcidol, and does not report any pharmacodynamic (PD) or exposure-response models. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and does not report any parameters for alfacalcidol. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on busulfan PK and sampling strategies, not alfacalcidol, and does not report any pharmacodynamic or exposure-response relationships. |
| PGx | Ventura_2020 | not_relevant | 0 | 0 | The paper reports the clinical and molecular epidemiology of erythropoietic protoporphyria (EPP) in Italy, focusing on FECH and ALAS2 mutations, but does not investigate the pharmacokinetics or pharmacodynamics of alfacalcidol. |
| popPK | Wang_2001 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on vasorelaxing quinolinone derivatives and does not involve alfacalcidol or pharmacokinetic parameters. |
| PD | Wang_2001 | not_relevant | 0 | 0 | The paper studies vasorelaxing activity of synthetic quinolinone derivatives, not alfacalcidol. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic model library for polymyxin B, not alfacalcidol. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of polymyxin B and does not contain any pharmacodynamic (PD) or exposure-response analysis for alfacalcidol. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The paper is a methodological study using simulated data to demonstrate a statistical metric (95% CDIRAs) and does not report pharmacokinetic parameters for alfacalcidol. |
| PD | Wanika_2026 | not_relevant | 0 | 0 | The paper is a methodological case study on uncertainty quantification using simulated PK data and does not report any pharmacodynamic or exposure-response relationship for alfacalcidol. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bosutinib, not alfacalcidol. |
| PD | Wu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of bosutinib and does not report any pharmacodynamic (PD) or exposure-response relationship for alfacalcidol or any other drug. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not alfacalcidol. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for tacrolimus, not alfacalcidol, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of daptomycin, not alfacalcidol. |
| PD | Xie_2026 | not_relevant | 0 | 0 | The paper focuses on daptomycin population pharmacokinetics and precision dosing, not alfacalcidol, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polymyxin B, not alfacalcidol. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) exposure prediction (AUC) for polymyxin B using Bayesian and machine learning methods, and does not report any pharmacodynamic (PD) or exposure-response relationship for alfacalcidol or any other drug. |
| popPK | Yoshida_2000 | irrelevant | 0 | 0 | The paper describes enzymatic activity of alpha-mannosidases in Aspergillus oryzae and contains no pharmacokinetic data for alfacalcidol. |
| PD | Yoshida_2000 | not_relevant | 0 | 0 | The paper describes the enzymatic activity of alpha-mannosidase from Aspergillus oryzae and is unrelated to the pharmacodynamics of alfacalcidol. |
| PGx | Yu_2005 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of Benazepril, not alfacalcidol. |
| popPK | Zborovsky_2021 | irrelevant | 0 | 0 | The paper studies albicidin (an antibacterial agent), not alfacalcidol. |
| PD | Zborovsky_2021 | not_relevant | 0 | 0 | The paper studies albicidin (an antibacterial peptide), not alfacalcidol, and does not report specific numeric PD parameters for the target drug. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for imipenem, not alfacalcidol. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for imipenem and does not report any pharmacodynamic (PD) or exposure-response relationships for alfacalcidol. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper discusses the engineering of an alpha-amylase enzyme for starch hydrolysis and is unrelated to alfacalcidol pharmacogenomics. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for immunoglobulins (IVIg/SCIg), not alfacalcidol. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for immunoglobulins (IVIg/SCIg) and does not contain any data, analysis, or parameters for alfacalcidol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
