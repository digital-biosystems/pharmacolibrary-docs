<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A09A&quot;,&quot;href&quot;:&quot;atc/A09A.md&quot;},{&quot;label&quot;:&quot;pepsin&quot;}]"></div>

# pepsin

- **generic name:** pepsin
- **ATC codes:** `A09AA03`, `A09AC01`
- **DrugBank:** [DB13198](https://go.drugbank.com/drugs/DB13198) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Pepsin, a digestive enzyme preparation obtained from hog or cattle stomach lining, was used as a digestive aid to help break down food proteins. It is no longer used as a medicine, having been withdrawn from the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q95992717](https://www.wikidata.org/wiki/Q95992717) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 21:48 | 6:35 | 0/0/0 | 0/0/0 | 0/0/0 | 258,427/4,818 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 1/8 | 17/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pepsin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | stomach | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 476 matched, 104 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alashi_2014.pdf` | Alashi AM et al., Antioxidant properties of Australian ca…, Food chemistry (2014) | pd | 4 | [10.1016/j.foodchem.2013.09.081](https://doi.org/10.1016/j.foodchem.2013.09.081) | [24176374](https://www.ncbi.nlm.nih.gov/pubmed/24176374) | metadata signals extractable PD data (EC50) |
| `Arimboor_2011.pdf` | Arimboor R et al., Sea buckthorn (Hippophae rhamnoides) pr…, Journal of food science (2011) | pd | 4 | [10.1111/j.1750-3841.2011.02238.x](https://doi.org/10.1111/j.1750-3841.2011.02238.x) | [22417524](https://www.ncbi.nlm.nih.gov/pubmed/22417524) | metadata signals extractable PD data (EC50) |
| `Bravo_2022.pdf` | Bravo RKD et al., Isolation, purification and characteriz…, Food chemistry. Molecular s… (2022) | pd | 4 | [10.1016/j.fochms.2021.100062](https://doi.org/10.1016/j.fochms.2021.100062) | [35415680](https://www.ncbi.nlm.nih.gov/pubmed/35415680) | metadata signals extractable PD data (IC50) |
| `Cai_2014.pdf` | Cai MY et al., Pilot-scale production of soybean oligo…, Journal of food science and… (2014) | pd | 4 | [10.1007/s13197-012-0701-4](https://doi.org/10.1007/s13197-012-0701-4) | [25190841](https://www.ncbi.nlm.nih.gov/pubmed/25190841) | metadata signals extractable PD data (IC50) |
| `Chi_2015.pdf` | Chi CF et al., Influence of Amino Acid Compositions an…, Marine drugs (2015) | pd | 4 | [10.3390/md13052580](https://doi.org/10.3390/md13052580) | [25923316](https://www.ncbi.nlm.nih.gov/pubmed/25923316) | metadata signals extractable PD data (EC50) |
| `Dang_2022.pdf` | Dang J et al., Screening and Identification of Novel S…, Foods (Basel, Switzerland) (2022) | pd | 4 | [10.3390/foods11223695](https://doi.org/10.3390/foods11223695) | [36429288](https://www.ncbi.nlm.nih.gov/pubmed/36429288) | metadata signals extractable PD data (IC50) |
| `Herawati_2022.pdf` | Herawati E et al., In Vitro Antioxidant and Antiaging Acti…, Marine drugs (2022) | pd | 4 | [10.3390/md20080516](https://doi.org/10.3390/md20080516) | [36005519](https://www.ncbi.nlm.nih.gov/pubmed/36005519) | metadata signals extractable PD data (IC50) |
| `Herbert_1992.pdf` | Herbert JM et al., Biochemical and pharmacological activit…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1738126](https://www.ncbi.nlm.nih.gov/pubmed/1738126) | metadata signals extractable PD data (IC50) |
| `Ibrahim_2017.pdf` | Ibrahim HR et al., Novel angiotensin-converting enzyme inh…, Journal of advanced research (2017) | pd | 4 | [10.1016/j.jare.2016.12.002](https://doi.org/10.1016/j.jare.2016.12.002) | [28053783](https://www.ncbi.nlm.nih.gov/pubmed/28053783) | metadata signals extractable PD data (IC50) |
| `Jin_2019.pdf` | Jin HX et al., Preparation and Evaluation of Peptides…, Marine drugs (2019) | pd | 4 | [10.3390/md17030169](https://doi.org/10.3390/md17030169) | [30875949](https://www.ncbi.nlm.nih.gov/pubmed/30875949) | metadata signals extractable PD data (EC50) |
| `Jin_2020.pdf` | Jin R et al., Identification of novel DPP-IV inhibito…, Food research international… (2020) | pd | 4 | [10.1016/j.foodres.2020.109161](https://doi.org/10.1016/j.foodres.2020.109161) | [32466942](https://www.ncbi.nlm.nih.gov/pubmed/32466942) | metadata signals extractable PD data (IC50) |
| `Lanas_1994.pdf` | Lanas AI et al., Effects of cholinergic, histaminergic,…, Scandinavian journal of gas… (1994) | pd | 4 | [10.3109/00365529409092493](https://doi.org/10.3109/00365529409092493) | [7973426](https://www.ncbi.nlm.nih.gov/pubmed/7973426) | metadata signals extractable PD data (EC50) |
| `Liu_2022.pdf` | Liu Q et al., Production of Dual Inhibitory Hydrolysa…, Marine biotechnology (New Y… (2022) | pd | 4 | [10.1007/s10126-022-10104-4](https://doi.org/10.1007/s10126-022-10104-4) | [35275289](https://www.ncbi.nlm.nih.gov/pubmed/35275289) | metadata signals extractable PD data (IC50) |
| `Phyo_2024.pdf` | Phyo SH et al., Potential inhibitory effect of highland…, International journal of bi… (2024) | pd | 4 | [10.1016/j.ijbiomac.2024.131632](https://doi.org/10.1016/j.ijbiomac.2024.131632) | [38643911](https://www.ncbi.nlm.nih.gov/pubmed/38643911) | metadata signals extractable PD data (IC50) |
| `Rahuel_1991.pdf` | Rahuel J et al., The crystal structures of recombinant g…, Journal of structural biolo… (1991) | pd | 4 | [10.1016/1047-8477(91)90048-2](https://doi.org/10.1016/1047-8477(91)90048-2) | [1807356](https://www.ncbi.nlm.nih.gov/pubmed/1807356) | metadata signals extractable PD data (IC50) |
| `Roth_1986.pdf` | Roth GJ et al., Localization of binding sites within hu…, Biochemistry (1986) | pd | 4 | [10.1021/bi00374a004](https://doi.org/10.1021/bi00374a004) | [3493805](https://www.ncbi.nlm.nih.gov/pubmed/3493805) | metadata signals extractable PD data (EC50) |
| `Wood_1989.pdf` | Wood JM et al., CGP 38 560: orally active, low-molecula…, Journal of cardiovascular p… (1989) | pd | 4 | not captured | [2476594](https://www.ncbi.nlm.nih.gov/pubmed/2476594) | metadata signals extractable PD data (IC50) |
| `Zhang_2021.pdf` | Zhang SY et al., Purification, Identification, Activity…, Marine drugs (2021) | pd | 4 | [10.3390/md19060347](https://doi.org/10.3390/md19060347) | [34204535](https://www.ncbi.nlm.nih.gov/pubmed/34204535) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T21:45:26.510392+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdhul_2015 | irrelevant | 0 | 0 | The paper studies a bacteriocin from Bacillus coagulans and mentions pepsin only as an enzyme used to test the stability of the bacteriocin, not as the subject drug for pharmacokinetic analysis. |
| PD | Abdhul_2015 | not_relevant | 0 | 0 | The paper reports on a bacteriocin from Bacillus coagulans; pepsin is only mentioned as an enzyme that degrades the bacteriocin, and no pharmacodynamic or exposure-response relationship for pepsin is reported. |
| popPK | Alashi_2014 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Alashi_2014 | not_relevant | 0 | 0 | The paper discusses antioxidant properties of canola meal protein hydrolysates and does not mention pepsin or report any pharmacodynamic or exposure-response relationships. |
| PGx | Altomare_2013 | not_relevant | 0 | 0 | The paper discusses the pathophysiology of GERD and the role of pepsin as a noxious factor, but does not report any pharmacogenomic effects on the PK or PD of pepsin. |
| popPK | Amer_2025 | irrelevant | 0 | 0 | The paper is a review of peptide delivery technologies and does not report quantitative pharmacokinetic parameters for pepsin. |
| PD | Amer_2025 | not_relevant | 0 | 0 | The text is a review of peptide delivery technologies and does not contain any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for pepsin. |
| popPK | Arav_2024 | irrelevant | 0 | 0 | The paper is a general review of modeling approaches for oral drug delivery and does not report specific pharmacokinetic parameters for pepsin. |
| PD | Arav_2024 | not_relevant | 0 | 0 | The paper is a review of mathematical modeling approaches for oral drug delivery (PK, AI, PBPK) and does not report any pharmacodynamic or exposure-response data for pepsin. |
| popPK | Arimboor_2011 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Asoodeh_2016 | not_relevant | 0 | 0 | The paper reports in vitro biochemical IC50 values for a peptide's antioxidant and ACE-inhibitory properties, not a pharmacodynamic (exposure-response) relationship for the drug pepsin. |
| PD | Bakwo_2024 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant and glucose uptake assays for protein hydrolysates, not a pharmacodynamic exposure-response relationship for the drug pepsin. |
| popPK | Berends_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of infliximab, not pepsin. |
| PD | Berends_2019 | not_relevant | 0 | 0 | The paper validates a dried blood spot sampling method for infliximab concentrations and reports PK parameters, but it does not report any pharmacodynamic (exposure-response or dose-response) relationship or PD parameters. |
| PD | Bravo_2022 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of bioactive peptides from pigeon pea protein, not on the pharmacodynamics of the drug pepsin. |
| popPK | Busby_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and stability of linaclotide, using pepsin only as an enzyme to test stability, not as the subject drug. |
| PD | Cai_2014 | not_relevant | 0 | 0 | The paper focuses on soybean oligopeptides and does not report any pharmacodynamic or exposure-response data for pepsin. |
| popPK | Charbonneau_2021 | irrelevant | 0 | 0 | The paper models the pharmacokinetics of phenylalanine (Phe) and the activity of a synthetic biotic (SYNB1618), mentioning pepsin only as a factor in gastric simulation conditions, not as the subject drug. |
| PGx | Cheng_2011 | not_relevant | 2 | 0 | The paper is a clinical review of PPIs for peptic ulcer bleeding; it mentions CYP2C19 variability qualitatively but does not report specific pharmacogenomic effects on PK/PD parameters of pepsin. |
| PGx | Chernin_2004 | not_relevant | 0 | 0 | The paper describes clinicopathogenetic variants of chronic gastritis and measures pepsin levels as a biomarker of gastric function, but it does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of pepsin as a drug. |
| popPK | Chi_2015 | irrelevant | 0 | 0 | no_text gate: only 138 chars of text extracted (&lt; 400) |
| PD | Chi_2015 | not_relevant | 0 | 0 | The paper focuses on the purification and antioxidant characterization of peptides from croaker muscle, not on the pharmacodynamics or exposure-response of the drug pepsin. |
| popPK | Chi_2015_2 | irrelevant | 0 | 0 | The study investigates the antioxidant properties of protein hydrolysates from tuna, using pepsin only as a tool for hydrolysis, and contains no pharmacokinetic data. |
| PD | Chi_2015_2 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) of protein hydrolysates and peptides, not a pharmacodynamic exposure-response relationship for the drug pepsin. |
| popPK | Cígler_2005 | irrelevant | 0 | 0 | The paper is a structural and mechanistic study of HIV protease inhibitors, where pepsin is used only as a comparator enzyme for selectivity testing, not as the subject of a pharmacokinetic study. |
| PD | Dang_2022 | not_relevant | 0 | 0 | The paper focuses on the identification of soluble epoxide hydrolase inhibitors from corn gluten peptides and does not report any pharmacodynamic or exposure-response data for pepsin. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper discusses post-mortem inspection delays and pathogen detection in ungulates, containing no pharmacokinetic data for pepsin. |
| PD | EFSA_2020 | not_relevant | 0 | 0 | The paper discusses the impact of delayed post-mortem inspection on disease and contaminant detection sensitivity, not the pharmacodynamic or exposure-response relationship of pepsin. |
| popPK | Edache_2026 | irrelevant | 0 | 0 | The study is a computational investigation of H+/K+-ATPase inhibitors and does not report pharmacokinetic parameters for pepsin. |
| PD | Edache_2026 | not_relevant | 0 | 0 | The paper is a computational study (docking, MD, MMGBSA) of H+/K+-ATPase inhibitors and does not report any experimental pharmacodynamic or exposure-response data for pepsin. |
| PGx | Geib_2021 | not_relevant | 0 | 0 | The paper describes an analytical method for quantifying acetaminophen binding to proteins and does not report pharmacogenomic effects on pepsin PK/PD. |
| popPK | Gespach_1983 | irrelevant | 0 | 0 | The study investigates cAMP regulation in guinea pig gastric glands and mentions pepsin only as a secretory product, not as a subject of pharmacokinetic analysis. |
| PD | Gespach_1983 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for VIP, histamine, and somatostatin on cAMP levels, but does not report a PD or exposure-response relationship for the drug pepsin. |
| PGx | Geus_2000 | not_relevant | 0 | 0 | The paper discusses the clinical use of acid-inhibiting drugs for GI bleeding and mentions CYP2C19 interactions generally, but does not report specific pharmacogenomic effects on the PK or PD parameters of pepsin. |
| popPK | Golombek_2020 | irrelevant | 0 | 0 | The paper is a review of cannabidiol (CBD) degradation and does not study pepsin pharmacokinetics. |
| PD | Golombek_2020 | not_relevant | 0 | 0 | The paper is a review of CBD degradation and does not report any pharmacodynamic or exposure-response data for pepsin. |
| popPK | Hagemeyer_2026 | irrelevant | 0 | 0 | The paper investigates the solution structure and permeability mechanism of griselimycin, not the pharmacokinetics of pepsin. |
| PD | Hagemeyer_2026 | not_relevant | 0 | 0 | The paper focuses on the structural conformational ensembles and physicochemical properties (permeability, solubility) of griselimycin, not on pharmacodynamic exposure-response or dose-response relationships. |
| PD | Herawati_2022 | not_relevant | 0 | 0 | The paper investigates the antioxidant and antiaging activities of collagen hydrolysates from fish skin, not the pharmacodynamics of the drug pepsin. |
| PD | Herbert_1992 | not_relevant | 0 | 0 | The paper focuses on the biochemical and pharmacological activities of SR 26831, an elastase inhibitor, and does not report any pharmacodynamic or exposure-response data for pepsin. |
| popPK | Hoelzen_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of valine-niclosamide, not pepsin. |
| PD | Hoelzen_2025 | not_relevant | 0 | 0 | The paper focuses on niclosamide and its valine conjugate for hepatocellular carcinoma, with no mention of pepsin or any pharmacodynamic parameters for pepsin. |
| popPK | Howden_2025 | irrelevant | 0 | 0 | The study models the relationship between gastric pH holding time and esophagitis healing rates for acid-suppressing drugs (PPIs, H2RAs, P-CABs) and does not report pharmacokinetic parameters for pepsin. |
| popPK | Hu_2020 | irrelevant | 0 | 0 | The paper is an in-vitro study on antioxidant peptides from monkfish muscle where pepsin is used only as a hydrolysis enzyme, not as the subject drug for pharmacokinetic analysis. |
| popPK | Iafelice_2007 | irrelevant | 0 | 0 | The paper describes the chemical modification of hemoglobin using pepsin as a digestive enzyme for mass spectrometry analysis, not a pharmacokinetic study of pepsin. |
| PD | Iafelice_2007 | not_relevant | 0 | 0 | The paper describes the chemical modification (PEGylation) of haemoglobin and uses pepsin only as a proteolytic enzyme for mass spectrometry analysis; it does not report any pharmacodynamic or exposure-response relationship for pepsin. |
| PD | Ibrahim_2017 | not_relevant | 0 | 0 | The paper focuses on the identification of ACE-inhibitory peptides from goat milk proteins, not on the pharmacodynamics of the drug pepsin. |
| popPK | Jia_2023 | irrelevant | 0 | 0 | The paper is a review of traditional Chinese medications for gastric mucosal injury and does not report pharmacokinetic parameters for pepsin. |
| PD | Jia_2023 | not_relevant | 1 | 0 | The paper is a narrative review of traditional Chinese medications for gastric mucosal injury and does not report any specific pharmacodynamic or exposure-response analysis for pepsin. |
| popPK | Jin_2019 | irrelevant | 0 | 0 | no_text gate: only 210 chars of text extracted (&lt; 400) |
| PD | Jin_2019 | not_relevant | 0 | 0 | The paper focuses on the preparation and antioxidant activity of peptides from sea cucumber collagen, not on the pharmacokinetics or pharmacodynamics of the drug pepsin. |
| PD | Jin_2020 | not_relevant | 0 | 0 | The paper focuses on identifying DPP-IV inhibitory peptides from salmon skin, not on the pharmacodynamics of pepsin. |
| popPK | Kang_2023 | irrelevant | 0 | 0 | The paper investigates glioblastoma radioresistance mechanisms involving DGKB and DGAT1, and does not study the pharmacokinetics of pepsin. |
| PD | Kang_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of radioresistance in glioblastoma involving DGKB and DGAT1, and does not report any pharmacodynamic or exposure-response relationship for pepsin. |
| popPK | Kao_1977 | irrelevant | 0 | 0 | The study investigates the secretion kinetics of procollagen in chick tendon cells, using pepsin only as a diagnostic reagent for digestion, not as the subject drug for PK analysis. |
| PD | Karaś_2014 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (IC50) of protein hydrolysates, not a pharmacodynamic exposure-response relationship for the drug pepsin. |
| popPK | Kashyap_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Vitamin B12, not pepsin. |
| PD | Kashyap_2024 | not_relevant | 0 | 0 | The paper analyzes the dose-dependency of Vitamin B12 bioavailability, not the pharmacodynamics of pepsin. |
| PGx | Konturek_1998 | not_relevant | 0 | 0 | The paper studies the pharmacological effect of a protein variant (PSTI) on gastric healing and secretion, not the effect of a host gene variant on the PK/PD of the drug pepsin. |
| popPK | Koush_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of indomethacin, not pepsin. |
| PD | Koush_2025 | not_relevant | 2 | 1 | The paper describes qualitative changes in analgesic effect and release kinetics for indomethacin formulations but does not provide numeric concentration-effect data, dose-response curves, or fitted PD parameters (e.g., Emax, EC50). |
| popPK | Lanas_1994 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Lanas_1994 | not_relevant | 0 | 0 | The paper studies pepsinogen secretion by isolated cells in vitro, not the pharmacodynamics of the drug pepsin in vivo or in a clinical PK/PD context. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on the chemical profiling and metabolite identification of the traditional Chinese medicine Huan Shao Dan, not the pharmacokinetics of pepsin. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper focuses on the identification of chemical profiles and metabolites of a Traditional Chinese Medicine formula using mass spectrometry and deep learning, with no pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters reported. |
| popPK | Liang_2019 | irrelevant | 0 | 0 | The paper is a food science study on Moringa oleifera seed polypeptides where pepsin is used only as a hydrolysis enzyme, not as the subject drug for pharmacokinetic analysis. |
| PD | Liang_2019 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) of Moringa oleifera seed polypeptides, not a pharmacodynamic or exposure-response relationship for the drug pepsin. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper focuses on the production of a squid hydrolysate and its inhibitory activity against pepsin, not on the pharmacokinetics or pharmacodynamics of pepsin itself. |
| popPK | Lubkowicz_2022 | irrelevant | 0 | 0 | The paper studies an engineered bacterial therapeutic (SYNB8802) for oxalate metabolism and does not report pharmacokinetic parameters for the drug pepsin. |
| popPK | Ma_2023 | irrelevant | 0 | 0 | The study focuses on the diagnostic utility of salivary pepsin concentrations for GERD, not on the pharmacokinetic disposition parameters (CL, V, t1/2) of pepsin as a drug. |
| PGx | Malamas_2010 | not_relevant | 0 | 0 | The paper reports on the design of BACE1 inhibitors and their selectivity against pepsin, but does not report any pharmacogenomic effects on pepsin's PK or PD parameters. |
| popPK | Malamas_2010_2 | irrelevant | 0 | 0 | The paper focuses on the design of BACE1 inhibitors and mentions pepsin only as a selectivity comparator, not as the subject of pharmacokinetic analysis. |
| PD | Malamas_2010_2 | not_relevant | 0 | 0 | The paper reports in vitro potency (IC50/EC50) and a single acute dose effect in mice, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response relationship for pepsin. |
| popPK | Malamas_2010_3 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro enzymatic activity of BACE1 inhibitors, using pepsin only as a selectivity comparator, and contains no pharmacokinetic data. |
| PD | Malamas_2010_3 | not_relevant | 0 | 0 | The paper reports in vitro enzyme and cell-based IC50/EC50 values for BACE1 inhibitors, but does not report any pharmacodynamic or exposure-response relationship for pepsin. |
| popPK | Mandalari_2019 | irrelevant | 0 | 0 | The study investigates the in vitro stability of synthetic compounds (NAABs) against pepsin and their antiviral activity, rather than the pharmacokinetics of pepsin itself. |
| popPK | Miljak_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and stability of alpha lipoic acid, not the pharmacokinetics of pepsin. |
| PD | Miljak_2026 | not_relevant | 0 | 0 | The paper focuses on the formulation and physicochemical properties (dissolution, stability, permeability) of Alpha Lipoic Acid cyclodextrin complexes and does not report any pharmacodynamic or exposure-response data for pepsin. |
| PGx | Milton_2024 | not_relevant | 0 | 0 | The paper describes the engineering of liver decellularized extracellular matrix hydrogels for cell culture and does not report pharmacogenomic effects on pepsin pharmacokinetics or pharmacodynamics. |
| popPK | Olivarez_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for pantoprazole, not pepsin. |
| PD | Olivarez_2020 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (clearance, half-life, volume of distribution) and tissue residue levels for pantoprazole; it explicitly states that pharmacodynamic studies are necessary in the future and provides no exposure-response or dose-response data. |
| popPK | Orth_2025 | irrelevant | 0 | 0 | The paper describes the in vitro ubiquitination of small molecule inhibitors (BI8622/BI8626) by the enzyme HUWE1 and does not involve the drug pepsin or any pharmacokinetic parameters. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain pharmacokinetic data for pepsin. |
| PD | Papadopoulou_2025 | not_relevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain any pharmacodynamic or exposure-response data for pepsin. |
| popPK | Pappalardo_2024 | irrelevant | 0 | 0 | The paper is a review of in silico computational methods for receptor mutations and does not contain any pharmacokinetic data for pepsin. |
| PD | Pappalardo_2024 | not_relevant | 0 | 0 | The paper is a review of in silico computational methods for receptor mutations and does not report any pharmacodynamic or exposure-response data for pepsin. |
| popPK | Petruk_2023 | irrelevant | 0 | 0 | The paper describes the development and pharmacodynamics of a stapled peptide (sHVF18) targeting CD14, not the pharmacokinetics of the drug pepsin. |
| PD | Phyo_2024 | not_relevant | 0 | 0 | The paper studies the inhibitory effect of highland barley protein hydrolysates on AGE formation, not the pharmacodynamics of the drug pepsin. |
| popPK | Qiu_2019 | irrelevant | 0 | 0 | The paper is a food science study on gelatin hydrolysates where pepsin is used as a hydrolyzing enzyme, not as the subject drug for pharmacokinetic analysis. |
| PD | Qiu_2019 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) of isolated peptides, not a pharmacodynamic exposure-response relationship for the drug pepsin. |
| PD | Rahuel_1991 | not_relevant | 0 | 0 | The paper reports crystal structures of human renin and its inhibitor complex, not pepsin, and contains no pharmacodynamic or exposure-response data. |
| PD | Ren_2021 | not_relevant | 0 | 0 | The paper investigates the antioxidant activity of rice protein hydrolysates using pepsin as a hydrolyzing enzyme, not pepsin as a pharmacological drug, and does not report any pharmacodynamic or exposure-response relationship for pepsin. |
| popPK | Roth_1986 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Roth_1986 | not_relevant | 0 | 0 | The paper focuses on the structural localization of binding sites for collagen on von Willebrand factor and does not report any pharmacodynamic or exposure-response data for pepsin. |
| PGx | Schmidt_2002 | not_relevant | 0 | 0 | The paper describes an autoimmune disease case where pepsin is used as a reagent for protein digestion, not as a drug subject to pharmacogenomic analysis. |
| popPK | Schuligoi_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Prostaglandin D2 (PGD2), and pepsin is only mentioned as a reagent used to digest serum, not as the subject drug. |
| PD | Schwille_1977 | not_relevant | 0 | 0 | The paper reports dose-response parameters (Km, Vmax) for acid output, not pepsin, and provides no numeric PD parameters or concentration-effect relationship for pepsin. |
| popPK | Seed_2024 | irrelevant | 0 | 0 | The paper investigates mechanisms of PARP inhibitor resistance in prostate cancer and does not report pharmacokinetic parameters for pepsin. |
| PD | Seed_2024 | not_relevant | 0 | 0 | The paper focuses on genomic mechanisms of PARP inhibitor resistance (reversion mutations) and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for pepsin or any other drug. |
| popPK | Somasundaram_1987 | irrelevant | 0 | 0 | The study focuses on gastric mucosal defense mechanisms and mucus secretion in rats, not the pharmacokinetic parameters of pepsin. |
| PD | Szafran_1978 | not_relevant | 3 | 1 | The paper describes a qualitative dose-response relationship for pentagastrin on pepsin secretion but does not provide numeric PD parameters or extractable concentration-effect curves. |
| PD | Terashima_2010 | not_relevant | 0 | 0 | The paper reports IC50 values for ACE inhibitory peptides derived from chicken meat, not for the drug pepsin; pepsin is only mentioned as the enzyme used for digestion. |
| PD | Thaisrivongs_1986 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for renin and pepsin, but does not provide an in vivo exposure-response or dose-response analysis for pepsin; the in vivo data is for a renin inhibitor. |
| popPK | Wang_2013 | irrelevant | 0 | 0 | The study is an in-vitro food chemistry investigation of antioxidant peptides where pepsin is used only as a hydrolyzing enzyme, not as the subject drug for pharmacokinetic analysis. |
| PD | Wang_2013 | not_relevant | 0 | 0 | The paper reports antioxidant activity of a peptide (BNH-P7) using pepsin only as a hydrolysis enzyme, not as the drug of interest, and does not report a pharmacodynamic exposure-response relationship for pepsin. |
| PD | Wood_1989 | not_relevant | 0 | 0 | The paper describes a renin inhibitor (CGP 38 560), not pepsin, and does not report PD parameters for pepsin. |
| PD | Wood_1990 | not_relevant | 1 | 2 | The paper reports in vitro IC50 values for pepsin (26 nM) but does not provide an in vivo exposure-response or dose-response relationship for pepsin inhibition; the in vivo data focuses on renin inhibition and blood pressure effects. |
| PD | Wotring_2022 | not_relevant | 0 | 0 | The paper reports in vitro antiviral efficacy (IC50) for bovine lactoferrin against SARS-CoV-2, not a pharmacodynamic or exposure-response relationship for the drug pepsin. |
| popPK | Wu_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of insulin-liposomes, using pepsin only as a digestive enzyme in an in-vitro stability assay, not as the subject drug. |
| PGx | Xie_2020 | not_relevant | 0 | 0 | The paper discusses the resistance of a nanocarrier to pepsin degradation, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of pepsin itself. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The study investigates peptides from fish for hyperuricemia inhibition and does not involve the drug pepsin or its pharmacokinetics. |
| PD | Xu_2025 | not_relevant | 0 | 0 | The paper investigates peptides from fish, not the drug pepsin, and reports qualitative in vitro inhibitory activities without numeric PD parameters. |
| popPK | Xu_2025_2 | irrelevant | 0 | 0 | The paper is a review of flavonoids in digestive diseases and does not report pharmacokinetic parameters for pepsin. |
| PD | Xu_2025_2 | not_relevant | 0 | 0 | The paper is a narrative review of flavonoids in digestive diseases and does not report any pharmacodynamic or exposure-response data for pepsin. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The study focuses on the preparation and antioxidant properties of peptides from tuna gelatin, using pepsin only as an in-vitro digestive enzyme, not as the subject drug for pharmacokinetic analysis. |
| PD | Yang_2019 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) of peptides derived from gelatin hydrolysate, not a pharmacodynamic exposure-response relationship for the drug pepsin. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study focuses on the identification and antioxidant activity of peptides from tuna hydrolysates, using pepsin only as an in-vitro digestive enzyme, and contains no pharmacokinetic parameters for pepsin. |
| PD | Zhang_2019 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) of peptides, not a pharmacodynamic exposure-response relationship for the drug pepsin. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper describes protein engineering of a phytase enzyme and its resistance to pepsin, not the pharmacogenomics of pepsin itself. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PD | Zhang_2021 | not_relevant | 0 | 0 | The paper focuses on the purification and antioxidant activity of peptides from Antarctic Krill, not on the pharmacodynamics of the drug pepsin. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study measures pepsin concentration in sputum as a biomarker for gastroesophageal reflux, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| PD | Zheng_2019 | not_relevant | 0 | 0 | The paper reports IC50 values for bioactive peptides derived from coconut albumin, not for the drug pepsin; pepsin is only mentioned as a digestive enzyme used in the hydrolysis process. |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of enrofloxacin in pigs, not pepsin. |
| PD | Zhou_2021 | not_relevant | 0 | 0 | The paper focuses on PK modeling (PBPK) and formulation development for enrofloxacin; pepsin is only listed as a reagent for in vitro dissolution testing, and no pharmacodynamic or exposure-response relationship for pepsin is reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
