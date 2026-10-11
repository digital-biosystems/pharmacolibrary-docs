<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;belotecan&quot;}]"></div>

# belotecan

- **generic name:** belotecan
- **ATC codes:** `L01CE04`
- **DrugBank:** [DB12459](https://go.drugbank.com/drugs/DB12459) · **PubChem:** [CID 6456014](https://pubchem.ncbi.nlm.nih.gov/compound/6456014)
- **molar mass:** 433.508 g/mol (C25H27N3O4) — DrugBank
- **groups:** investigational

## About

Belotecan is a topoisomerase I inhibitor investigated for treating ovarian cancer and small cell lung cancer. It is not an approved medicine and remains investigational, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4884574](https://www.wikidata.org/wiki/Q4884574) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:33 | 1:57 | 0/0/0 | 0/0/0 | 0/0/0 | 181,791/5,326 | einfracz / qwen3.8-27b | 17 | 6/12 | 17/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=belotecan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TOP1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 78 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2007.pdf` | Lee DH et al., A phase I and pharmacologic study of be…, Clinical cancer research :… (2007) | popPK | 9 | [10.1158/1078-0432.CCR-07-0534](https://doi.org/10.1158/1078-0432.CCR-07-0534) | [17947485](https://pubmed.ncbi.nlm.nih.gov/17947485) | The study is a Phase I clinical trial in humans that reports specific numeric PK parameters (clearance, half-life) for belotecan in the abstract. |
| `Namkoong_2007.pdf` | Namkoong EM et al., Effect of probenecid on the biliary exc…, Archives of pharmacal resea… (2007) | popPK | 8 | [10.1007/BF02977375](https://doi.org/10.1007/BF02977375) | [18087819](https://pubmed.ncbi.nlm.nih.gov/18087819) | The study reports quantitative systemic pharmacokinetic data (specifically that systemic PK did not change) and detailed biliary clearance values for belotecan in rats, although full compartmental parameters (CL, V) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T17:33:30.820286+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achari_2017 | irrelevant | 0 | 0 | The paper is a clinical radiotherapy study in glioblastoma patients and does not contain any pharmacokinetic data or parameters for belotecan. |
| popPK | Alford_1978 | irrelevant | 0 | 0 | The paper is a review of environmental mass spectrometry and contains no pharmacokinetic data for belotecan. |
| popPK | Arpino_1974 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| popPK | Aydıntuğ-Gürbüz_2024 | irrelevant | 0 | 0 | The study investigates the effects of IGF1 and MGF on neural stem cells under hypoxic conditions and contains no pharmacokinetic data for belotecan. |
| popPK | BOLTON_1964 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| popPK | Brumley_1981 | irrelevant | 0 | 0 | no_text gate: only 28 chars of text extracted (&lt; 400) |
| popPK | Carey-Ewend_2020 | irrelevant | 0 | 0 | The paper describes a 3D brain cancer model for neural stem cell therapy and does not involve belotecan or any pharmacokinetic analysis. |
| popPK | Carradori_2020 | irrelevant | 0 | 0 | The paper is a study on retinoic acid nanocapsules in rats and does not mention belotecan or any pharmacokinetic parameters for it. |
| popPK | Cheng_2022 | irrelevant | 1 | 0 | The study reports PK parameters for the antibody-drug conjugate SKB264 and its belotecan-derived payload (KL610023), but does not provide population PK model parameters (CL, V, etc.) for the parent drug belotecan itself. |
| popPK | Coronas_2023 | irrelevant | 0 | 0 | The paper studies IL-22 and neural stem cells in mice and does not involve the drug belotecan or any pharmacokinetic analysis. |
| popPK | Crowley_1980 | irrelevant | 0 | 0 | The paper discusses o-hydroxymandelic acid excretion in phenylketonuria and does not involve belotecan. |
| popPK | Dietze_2014 | irrelevant | 0 | 0 | The paper is a review of nonstructural carbon dynamics in woody plants and does not contain any data or parameters for the drug belotecan. |
| popPK | Due_1976 | irrelevant | 0 | 0 | The study investigates the metabolism of propoxyphene, not belotecan. |
| popPK | Esmaeilpour_2020 | irrelevant | 0 | 0 | The paper investigates ultraweak photon emission from murine neural stem cells and has no relation to belotecan pharmacokinetics. |
| popPK | FREI_1965 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| popPK | Fan_2022 | irrelevant | 0 | 0 | The paper investigates neural stem cell transplantation for spinal cord injury in rats and does not mention or measure pharmacokinetics for belotecan. |
| popPK | Ferry_1984 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of nalidixic acid, not belotecan. |
| popPK | Fuchigami_2023 | irrelevant | 0 | 0 | The paper is a neurobiology study regarding ganglioside GD3 regulation in mouse neural stem cells and does not mention belotecan or report pharmacokinetic parameters. |
| popPK | Fuchigami_2024 | irrelevant | 0 | 0 | The paper investigates the role of ganglioside GD3 in neural stem cells and contains no data or mention of the drug belotecan. |
| popPK | Furze_2019 | irrelevant | 0 | 0 | The paper is a botanical study on carbohydrate storage in trees and contains no pharmacokinetic data for belotecan. |
| popPK | Gao_2024 | irrelevant | 0 | 0 | The paper studies the SUMO-Hippo pathway in Drosophila neural stem cells and does not involve the drug belotecan or pharmacokinetics. |
| popPK | Ghiringhelli_1981 | irrelevant | 0 | 0 | The paper is about the mass spectrometry of maleimycin, a different drug, and does not contain any pharmacokinetic data for belotecan. |
| popPK | Greaves_1979 | irrelevant | 0 | 0 | The study focuses on primaquine, not belotecan, and does not report any belotecan pharmacokinetic parameters. |
| popPK | Guan_2022 | irrelevant | 0 | 0 | The paper studies plant carbohydrate storage in trees and is unrelated to pharmacokinetics or belotecan. |
| popPK | Haegele_1974 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Harvan_1980 | irrelevant | 0 | 0 | The paper is a mass spectrometry study of di-(2-ethylhexyl)phthalate metabolites, which is a different chemical compound entirely unrelated to belotecan pharmacokinetics. |
| popPK | Huang_2016 | irrelevant | 0 | 0 | The paper studies porf-2's effect on neural stem cell proliferation and is completely unrelated to belotecan pharmacokinetics. |
| popPK | Hunter_1991 | irrelevant | 0 | 0 | The paper describes cell adhesion mechanisms involving LRE and s-laminin in cell lines and is completely unrelated to the pharmacokinetics of belotecan. |
| popPK | Iden_1979 | irrelevant | 0 | 0 | The study is about methylphenidate and its metabolite ritalinic acid, not belotecan. |
| popPK | Jin_2009 | irrelevant | 2 | 0 | Study reports qualitative effects on renal clearance mechanisms (Oat1/Bcrp) in rats but provides no numeric PK parameter values (CL, V, t1/2) in the evidence. |
| popPK | Julien-Larose_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ketotifen, not belotecan. |
| popPK | Khaiwa_2021 | irrelevant | 0 | 0 | The paper is a review of camptothecin analogues and does not report original quantitative pharmacokinetic parameters for belotecan. |
| PD | Khaiwa_2021 | not_relevant | 1 | 0 | The text is a general review of camptothecin analogues and does not report specific numeric pharmacodynamic parameters or exposure-response data for belotecan. |
| popPK | Kim_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and cell cycle effects, reporting no pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Köppel_1985 | irrelevant | 0 | 0 | The paper studies the metabolism of amantadine, not belotecan. |
| popPK | Li_2008 | irrelevant | 2 | 1 | The study focuses on in vitro transporter mechanisms (Caco-2/MDCKII) and only reports a single bioavailability percentage (11.4%) for belotecan in rats, without providing compartmental PK parameters (CL, V, Q, ka) or a population model. |
| popPK | Lin_2024 | irrelevant | 0 | 0 | The paper studies GPCR signaling in Drosophila neural stem cells and contains no data on the drug belotecan or its pharmacokinetics. |
| popPK | Lissoni_1992 | irrelevant | 0 | 0 | The study investigates melatonin in lung cancer patients and does not involve belotecan or report any pharmacokinetic parameters. |
| popPK | Luck_1984 | irrelevant | 0 | 0 | The paper studies a different compound (NSC-101327) and focuses on in vitro nucleic acid binding, not the pharmacokinetics of belotecan. |
| popPK | Markey_1981 | irrelevant | 0 | 0 | The paper discusses mass spectrometry principles for melatonin and cholesterol, with no mention of belotecan or its pharmacokinetics. |
| popPK | Martín-Encinas_2022 | irrelevant | 0 | 0 | The paper is a narrative review of topoisomerase I inhibitors and contains no original quantitative pharmacokinetic data for belotecan. |
| popPK | Matta_2021 | irrelevant | 0 | 0 | The paper focuses on neural stem cell migration and N-cadherin expression in a 3-D hydrogel model and does not involve belotecan or any pharmacokinetic parameters. |
| popPK | McKim_2024 | irrelevant | 0 | 0 | The paper is a study of the Drosophila brain connectome and contains no pharmacokinetic data or mention of belotecan. |
| popPK | Millard_1974 | irrelevant | 0 | 0 | no_text gate: only 28 chars of text extracted (&lt; 400) |
| popPK | Moraca_2025 | irrelevant | 0 | 0 | The paper focuses on the in vitro mechanism of G-quadruplex stabilization by belotecan and does not report pharmacokinetic parameters. |
| popPK | Nah_2024 | irrelevant | 0 | 0 | The study focuses on nitric oxide-scavenging nanoparticles for osteoarthritis and does not involve belotecan. |
| popPK | Occolowitz_1976 | irrelevant | 0 | 0 | no_text gate: only 383 chars of text extracted (&lt; 400) |
| popPK | Pan_2025 | irrelevant | 0 | 0 | The paper describes a mechanism of neural stem cell-derived extracellular vesicles in vascular dementia in mice and contains no pharmacokinetic data or parameters for belotecan. |
| popPK | Pettit_1980 | irrelevant | 0 | 0 | The paper analyzes hexitols (polyols) in biological fluids and does not involve belotecan or its pharmacokinetics. |
| PGx | Pommier_2026 | not_relevant | 0 | 0 | The paper is a review of mechanistic determinants of response for topoisomerase I inhibitors, not a pharmacogenomic study reporting specific gene-variant effects on PK/PD parameters. |
| popPK | Popov_1979 | irrelevant | 0 | 0 | no_text gate: only 336 chars of text extracted (&lt; 400) |
| popPK | Reiner_1979 | irrelevant | 0 | 0 | The paper describes cell differentiation using pyrolysis gas chromatography and contains no pharmacokinetic data or mention of belotecan. |
| popPK | Rodríguez_2017 | irrelevant | 0 | 0 | The paper discusses neural stem cells and hydrocephalus and contains no pharmacokinetic data for belotecan. |
| popPK | Roepstorff_1984 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| popPK | Schmid_1980 | irrelevant | 0 | 0 | no_text gate: only 385 chars of text extracted (&lt; 400) |
| popPK | Schneider_1988 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (DNA topoisomerase II inhibition) of a different drug (NSC 601316), not the pharmacokinetics of belotecan. |
| popPK | Seo_2024 | irrelevant | 0 | 0 | The paper studies the anticancer effects of NSC-38270 in vitro and does not involve the drug belotecan or pharmacokinetic parameters. |
| popPK | Simões_2021 | irrelevant | 0 | 0 | The paper describes the use of FRET spectroscopy to measure nanoscale contact between polymer films and contains no pharmacokinetic data for belotecan. |
| popPK | Simões_2024 | irrelevant | 0 | 0 | The paper is a physics/materials science study on using FRET to measure nanoscale contact in solid surfaces, with no mention of belotecan or pharmacokinetics. |
| popPK | Steel_1977 | irrelevant | 0 | 0 | The paper is about photoperiodic control in aphids and contains no pharmacokinetic data for belotecan. |
| popPK | Taylor_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for NSC 117079 and NSC 45586, not belotecan. |
| popPK | Vermeulen_1980 | irrelevant | 0 | 0 | The paper concerns the mass spectrometry analysis of metabolites of cyclohexeneoxide in rats and does not involve belotecan or its pharmacokinetics. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study investigates the mechanism of action (ER-stress and apoptosis) of NSC606985, not belotecan, and contains no pharmacokinetic parameters. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The paper describes microfluidic engineering of neural stem cell niches and contains no data or mention of the drug belotecan or pharmacokinetics. |
| popPK | Weber_2019 | irrelevant | 0 | 0 | The paper is a plant physiology study on tree carbon allocation and is unrelated to belotecan pharmacokinetics. |
| popPK | Weinreb_2018 | irrelevant | 0 | 0 | The paper is a survey methodology study about interviewer familiarity in the Dominican Republic and contains no pharmacokinetic data for belotecan. |
| popPK | Wu_2012 | irrelevant | 0 | 0 | The study reports pharmacokinetics for the liposomal formulation of CKD-602 (S-CKD602), not belotecan. |
| PD | Wu_2012 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for S-CKD602 but does not contain any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Wu_2012_2 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of CKD-602 (specifically its liposomal formulation S-CKD602), not belotecan. |
| popPK | Yan_2019 | irrelevant | 0 | 0 | The paper describes the development of an ELISA assay for camptothecin and reports cross-reactivity IC50 values for belotecan, but contains no pharmacokinetic disposition parameters (CL, V, etc.). |
| PD | Yan_2019 | not_relevant | 0 | 0 | The paper describes the development of an ELISA assay for camptothecin; the IC50 values reported refer to antibody cross-reactivity in the immunoassay, not to pharmacodynamic drug effects. |
| popPK | Yates_1973 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| popPK | Ye_2018 | irrelevant | 0 | 0 | The paper is a preclinical study on neural stem cells in mice and contains no data on belotecan. |
| popPK | Yinon_1984 | irrelevant | 0 | 0 | The paper focuses on the mass spectrometry of 2,4,6-trinitrotoluene (TNT) metabolites and does not study belotecan or report any pharmacokinetic parameters. |
| popPK | Yoshida_1979 | irrelevant | 0 | 0 | The study investigates the metabolites of loperamide in rats, not belotecan. |
| popPK | unknown_1960 | irrelevant | 0 | 0 | no_text gate: only 45 chars of text extracted (&lt; 400) |
| popPK | van_2023 | irrelevant | 0 | 0 | The study is a clinical cohort analyzing emergency department outcomes in older adults and contains no pharmacokinetic data for belotecan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
