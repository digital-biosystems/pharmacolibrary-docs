<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;belotecan&quot;}]"></div>

# belotecan

- **generic name:** belotecan
- **ATC codes:** `L01CE04`
- **DrugBank:** [DB12459](https://go.drugbank.com/drugs/DB12459)
- **groups:** investigational

## About

**Description.** Belotecan has been investigated for the treatment of Epithelial Ovarian Cancer.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 20:00 | 2:37 | 0/0/0 | 2/0/0 | 0/0/0 | 28,501/1,175 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 6/12 | 18/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2009](drugs/drug_belotecan/pd_Kim_2009_apoptosis.md) | Kim YY et al., CKD-602, a camptothecin derivative, inh…, Oncology reports (2009) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2009](drugs/drug_belotecan/pd_Kim_2009_cell_viability.md) | Kim YY et al., CKD-602, a camptothecin derivative, inh…, Oncology reports (2009) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wu_2012_2](drugs/drug_belotecan/pd_Wu_2012_2_MONO.md) | Wu (2012) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=belotecan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TOP1 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 14 matched, 78 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jin_2009.pdf` | Jin QR et al., Decreased urinary secretion of beloteca…, Xenobiotica; the fate of fo… (2009) | popPK | 8 | [10.1080/00498250903026458](https://doi.org/10.1080/00498250903026458) | [19552531](https://pubmed.ncbi.nlm.nih.gov/19552531) | The study reports quantitative renal clearance (CLr) parameters for belotecan in rats, but specific numeric values are not present in the provided text evidence. |
| `Lee_2007.pdf` | Lee DH et al., A phase I and pharmacologic study of be…, Clinical cancer research :… (2007) | popPK | 8 | [10.1158/1078-0432.CCR-07-0534](https://doi.org/10.1158/1078-0432.CCR-07-0534) | [17947485](https://pubmed.ncbi.nlm.nih.gov/17947485) | The study reports quantitative non-compartmental pharmacokinetic parameters (clearance and half-life) for belotecan in humans, with values explicitly stated in the text. |
| `Namkoong_2007.pdf` | Namkoong EM et al., Effect of probenecid on the biliary exc…, Archives of pharmacal resea… (2007) | popPK | 8 | [10.1007/BF02977375](https://doi.org/10.1007/BF02977375) | [18087819](https://pubmed.ncbi.nlm.nih.gov/18087819) | The study reports quantitative pharmacokinetic parameters (biliary clearance) for belotecan in rats, with specific numeric values provided in the text. |

<sub>queue written 2026-09-15T20:00:40.693726+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achari_2017 | irrelevant | 0 | 0 | The paper is a clinical radiotherapy study on glioblastoma and does not report any pharmacokinetic parameters for belotecan. |
| popPK | Alford_1978 | irrelevant | 0 | 0 | The paper is a review of environmental mass spectrometry studies and does not contain any pharmacokinetic data for belotecan. |
| popPK | Arpino_1974 | irrelevant | 0 | 0 | The paper is a methodological study on LC-MS published in 1974, long before the development of belotecan, and contains no pharmacokinetic data for the drug. |
| popPK | Aydıntuğ-Gürbüz_2024 | irrelevant | 0 | 0 | The paper is an in-vitro study on neural stem cells and growth factors, with no mention of belotecan or pharmacokinetic parameters. |
| popPK | BOLTON_1964 | irrelevant | 0 | 0 | The paper is a Phase I study of hydroxyurea, not belotecan. |
| popPK | Brumley_1981 | irrelevant | 0 | 0 | The evidence provided is a title fragment unrelated to belotecan pharmacokinetics. |
| popPK | Carey-Ewend_2020 | irrelevant | 0 | 0 | The paper describes a 3D brain cancer model for neural stem cell therapy and does not involve belotecan or report any pharmacokinetic parameters. |
| popPK | Carradori_2020 | irrelevant | 0 | 0 | The paper studies retinoic acid-loaded nanocapsules for oligodendrogenesis and does not involve belotecan or pharmacokinetic parameters. |
| popPK | Cheng_2022 | irrelevant | 2 | 3 | The study focuses on the pharmacokinetics of the antibody-drug conjugate SKB264 and its payload KL610023 (a belotecan derivative), not belotecan itself, and does not report compartmental PK parameters (CL, V, Q) for belotecan. |
| popPK | Coronas_2023 | irrelevant | 0 | 0 | The paper is a study on IL-22 and neural stem cells in mice, unrelated to belotecan pharmacokinetics. |
| popPK | Crowley_1980 | irrelevant | 0 | 0 | The paper studies o-hydroxymandelic acid in phenylketonuria and does not involve belotecan or its pharmacokinetics. |
| popPK | Dietze_2014 | irrelevant | 0 | 0 | The paper is a review of nonstructural carbon dynamics in woody plants and does not involve belotecan or pharmacokinetics. |
| popPK | Due_1976 | irrelevant | 0 | 0 | The paper studies the metabolism of propoxyphene, not belotecan. |
| popPK | Esmaeilpour_2020 | irrelevant | 0 | 0 | The paper investigates ultraweak photon emission from neural stem cells and is unrelated to belotecan pharmacokinetics. |
| popPK | FREI_1965 | irrelevant | 0 | 0 | The paper studies dichloromethotrexate, not belotecan. |
| popPK | Fan_2022 | irrelevant | 0 | 0 | The paper is a study on neural stem cell transplantation for spinal cord injury and does not involve the drug belotecan or any pharmacokinetic analysis. |
| popPK | Ferry_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nalidixic acid, not belotecan. |
| popPK | Fuchigami_2023 | irrelevant | 0 | 0 | The paper is a neuroscience study on ganglioside GD3 and neural stem cells, with no mention of belotecan or pharmacokinetic parameters. |
| popPK | Fuchigami_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on ganglioside GD3 and neural stem cells, with no mention of belotecan or pharmacokinetic parameters. |
| popPK | Furze_2019 | irrelevant | 0 | 0 | The paper is a study on nonstructural carbohydrate storage in temperate trees and does not involve the drug belotecan or pharmacokinetics. |
| popPK | Gao_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on Drosophila neural stem cells and does not involve the drug belotecan or pharmacokinetic parameters. |
| popPK | Ghiringhelli_1981 | irrelevant | 0 | 0 | The paper discusses the mass spectrometry of maleimycin, not the pharmacokinetics of belotecan. |
| popPK | Greaves_1979 | irrelevant | 0 | 0 | The paper describes an assay for primaquine, not belotecan. |
| popPK | Guan_2022 | irrelevant | 0 | 0 | The paper is a botanical study on non-structural carbohydrates in Catalpa bungei trees and has no relation to belotecan pharmacokinetics. |
| popPK | Haegele_1974 | irrelevant | 0 | 0 | The paper concerns the structural elucidation of polyene macrolide antibiotics (Nystatin, amphotericin B, pimaricin) and does not involve belotecan or pharmacokinetics. |
| popPK | Harvan_1980 | irrelevant | 0 | 0 | The paper concerns mass spectrometry of di-(2-ethylhexyl)phthalate metabolites and does not involve belotecan or pharmacokinetic parameters. |
| popPK | Huang_2016 | irrelevant | 0 | 0 | The paper is a mechanistic study on neural stem cell proliferation involving the porf-2 protein and does not involve the drug belotecan or pharmacokinetic parameters. |
| popPK | Hunter_1991 | irrelevant | 0 | 0 | The paper describes cell adhesion mechanisms involving s-laminin and LRE peptides, and does not involve the drug belotecan or any pharmacokinetic parameters. |
| popPK | Iden_1979 | irrelevant | 0 | 0 | The paper describes an assay for methylphenidate, not belotecan. |
| popPK | Jin_2009 | relevant | 8 | 2 | The study reports quantitative renal clearance (CLr) parameters for belotecan in rats, but specific numeric values are not present in the provided text evidence. |
| popPK | Julien-Larose_1983 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of ketotifen, not belotecan. |
| popPK | Khaiwa_2021 | irrelevant | 0 | 0 | The paper is a review of camptothecin analogues and does not report original quantitative pharmacokinetic parameters for belotecan. |
| PD | Khaiwa_2021 | not_relevant | 1 | 0 | The text is a general review of camptothecin analogues and does not report specific numeric pharmacodynamic parameters or exposure-response data for belotecan. |
| popPK | Kim_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and cell cycle effects, reporting no pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Köppel_1985 | irrelevant | 0 | 0 | The paper studies the metabolism of amantadine, not belotecan. |
| popPK | Li_2008 | irrelevant | 2 | 0 | The study focuses on in-vitro transporter mechanisms and reports only bioavailability percentages, lacking quantitative compartmental PK parameters (CL, V, ka) for belotecan. |
| popPK | Lin_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on neural stem cell reactivation in Drosophila and does not involve the drug belotecan or pharmacokinetic parameters. |
| popPK | Lissoni_1992 | irrelevant | 0 | 0 | The paper is a clinical trial of melatonin in lung cancer and does not involve belotecan or report any pharmacokinetic parameters. |
| popPK | Luck_1984 | irrelevant | 0 | 0 | The paper studies the nucleic acid binding properties of NSC-101327, not the pharmacokinetics of belotecan. |
| popPK | Markey_1981 | irrelevant | 0 | 0 | The paper discusses mass spectrometry methods for melatonin and cholesterol, with no mention of belotecan or its pharmacokinetic parameters. |
| popPK | Martín-Encinas_2022 | irrelevant | 0 | 0 | The paper is a review of topoisomerase I inhibitors and does not report original quantitative pharmacokinetic parameters for belotecan. |
| popPK | Matta_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on neural stem cell migration and does not involve belotecan or pharmacokinetics. |
| popPK | McKim_2024 | irrelevant | 0 | 0 | The paper is a connectomics study of the Drosophila brain and does not involve belotecan or pharmacokinetics. |
| popPK | Millard_1974 | irrelevant | 0 | 0 | The paper is an editorial on mass spectrometry and contains no pharmacokinetic data for belotecan. |
| popPK | Moraca_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on G-quadruplex binding and cytotoxicity in cell lines, containing no pharmacokinetic parameters for belotecan. |
| popPK | Nah_2024 | irrelevant | 0 | 0 | The paper describes a hyaluronic acid nanoparticle for osteoarthritis and does not involve belotecan or pharmacokinetic parameters. |
| popPK | Occolowitz_1976 | irrelevant | 0 | 0 | The paper discusses the chemical structure of narasin and ionophores, not the pharmacokinetics of belotecan. |
| popPK | Pan_2025 | irrelevant | 0 | 0 | The paper investigates the neuroprotective mechanisms of NSC-derived extracellular vesicles in vascular dementia and does not involve the drug belotecan or report any pharmacokinetic parameters. |
| popPK | Pettit_1980 | irrelevant | 0 | 0 | The paper describes the analysis of hexitols (polyols) in biological fluids and does not involve belotecan or pharmacokinetic parameters. |
| PGx | Pommier_2026 | not_relevant | 0 | 0 | The paper is a review of molecular determinants for TOP1 inhibitor ADCs and does not report specific pharmacogenomic effects on the PK or PD of belotecan. |
| popPK | Popov_1979 | irrelevant | 0 | 0 | The paper discusses the mass spectrometry of valepotriates, which is unrelated to the pharmacokinetics of belotecan. |
| popPK | Reiner_1979 | irrelevant | 0 | 0 | The paper describes pyrolysis gas chromatography mass spectrometry of human cells and does not involve belotecan or pharmacokinetics. |
| popPK | Rodríguez_2017 | irrelevant | 0 | 0 | The paper discusses neural stem cells and hydrocephalus and contains no pharmacokinetic data or mention of belotecan. |
| popPK | Roepstorff_1984 | irrelevant | 0 | 0 | The paper is about mass spectrometry nomenclature for peptides and contains no pharmacokinetic data for belotecan. |
| popPK | Schmid_1980 | irrelevant | 0 | 0 | The study focuses on methoxsalen, not belotecan. |
| popPK | Schneider_1988 | irrelevant | 0 | 0 | The paper studies the mechanism of action (DNA topoisomerase II inhibition) of a different drug (NSC 601316) and does not involve belotecan or pharmacokinetic parameters. |
| popPK | Seo_2024 | irrelevant | 0 | 0 | The paper studies NSC-38270 in vitro and does not involve belotecan or pharmacokinetic parameters. |
| popPK | Simões_2021 | irrelevant | 0 | 0 | The paper describes a FRET spectroscopy technique for measuring nanoscale contact in polymer films and does not involve the drug belotecan or any pharmacokinetic parameters. |
| popPK | Simões_2024 | irrelevant | 0 | 0 | The paper describes a surface physics/chemistry study using FRET to measure nanoscale contact and does not involve belotecan or pharmacokinetics. |
| popPK | Steel_1977 | irrelevant | 0 | 0 | The paper is a study on aphid neurobiology and photoperiodism, unrelated to belotecan pharmacokinetics. |
| popPK | Taylor_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Phlpp inhibitors NSC 117079 and NSC 45586, not for the target drug belotecan. |
| popPK | Vermeulen_1980 | irrelevant | 0 | 0 | The paper studies mass spectrometry of cyclohexeneoxide metabolites and does not involve belotecan or pharmacokinetic parameters. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on NSC606985 (a camptothecin analog) and does not report pharmacokinetic parameters for belotecan. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The paper is a microfluidic engineering study on neural stem cells and does not involve belotecan or pharmacokinetics. |
| popPK | Weber_2019 | irrelevant | 0 | 0 | The paper is a plant physiology study on tree carbon allocation and contains no information regarding the drug belotecan or pharmacokinetics. |
| popPK | Weinreb_2018 | irrelevant | 0 | 0 | The paper is a sociological study on survey methodology and contains no pharmacokinetic data for belotecan. |
| popPK | Wu_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CKD-602 (S-CKD602), not belotecan. |
| PD | Wu_2012 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for S-CKD602 but does not contain any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Wu_2012_2 | irrelevant | 0 | 0 | The study focuses on CKD-602 (S-CKD602), a different drug, and does not report pharmacokinetic parameters for belotecan. |
| popPK | Yan_2019 | irrelevant | 0 | 0 | The paper describes the development of an ELISA assay for camptothecin and reports cross-reactivity IC50 values for belotecan, but contains no pharmacokinetic disposition parameters (CL, V, etc.). |
| PD | Yan_2019 | not_relevant | 0 | 0 | The paper describes the development of an ELISA assay for camptothecin; the IC50 values reported refer to antibody cross-reactivity in the immunoassay, not to pharmacodynamic drug effects. |
| popPK | Yates_1973 | irrelevant | 0 | 0 | The paper concerns cytosine arabinoside and daunorubicin, not belotecan. |
| popPK | Ye_2018 | irrelevant | 0 | 0 | The paper is a study on neural stem cell therapy for neonatal hypoxia-ischemia in mice and does not involve belotecan or pharmacokinetic parameters. |
| popPK | Yinon_1984 | irrelevant | 0 | 0 | The paper studies the metabolism of trinitrotoluene (TNT) using mass spectrometry and does not involve belotecan or pharmacokinetic parameters. |
| popPK | Yoshida_1979 | irrelevant | 0 | 0 | The paper studies the metabolism of loperamide in rats, not the pharmacokinetics of belotecan. |
| popPK | unknown_1960 | irrelevant | 0 | 0 | The paper concerns a different drug (NSC-1026) and contains no data for belotecan. |
| popPK | van_2023 | irrelevant | 0 | 0 | The paper is a clinical cohort study on emergency department outcomes in older adults and does not involve belotecan or pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_belotecan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
