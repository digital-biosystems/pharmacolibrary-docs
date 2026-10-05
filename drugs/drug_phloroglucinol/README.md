<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;phloroglucinol&quot;}]"></div>

# phloroglucinol

- **generic name:** phloroglucinol
- **ATC codes:** `A03AX12`
- **DrugBank:** [DB12944](https://go.drugbank.com/drugs/DB12944) · **PubChem:** [CID 359](https://pubchem.ncbi.nlm.nih.gov/compound/359)
- **molar mass:** 126.11 g/mol (C6H6O3) — DrugBank
- **groups:** investigational

## About

Phloroglucinol is classified as a drug for functional gastrointestinal disorders, where it has been used as an antispasmodic to relieve spasmodic pain. It is considered investigational, so it is not an established, widely approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q899008](https://www.wikidata.org/wiki/Q899008) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:02 | 6:15 | 0/0/0 | 0/0/2 | 0/0/0 | 258,194/6,492 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 4/26 | 19/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">fish</span> | [Jarque_2018_tg_mCherry](drugs/drug_phloroglucinol/pd_Jarque_2018_tg_mCherry.md) | tg:mCherry fluorescence ← phloroglucinol · direct sigmoid Emax (Hill) effect | — | Jarque S et al., An automated screening method for detec…, PloS one (2018) | [10.1371/journal.pone.0203087](https://doi.org/10.1371/journal.pone.0203087) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Weiz_2024_cell_viability](drugs/drug_phloroglucinol/pd_Weiz_2024_cell_viability.md) | cell viability biomarker turnover ← phloroglucinol | — | Weiz G et al., Rutinosides-derived from Sarocladium st…, Microbial cell factories (2024) | [10.1186/s12934-024-02395-0](https://doi.org/10.1186/s12934-024-02395-0) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 233 matched, 103 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sun_2026.pdf` | Sun Q et al., SIL-IS LC-MS/MS method for rapid quanti…, Journal of chromatography.… (2026) | popPK | 10 | [10.1016/j.jchromb.2026.125298](https://doi.org/10.1016/j.jchromb.2026.125298) | [42790030](https://pubmed.ncbi.nlm.nih.gov/42790030) | The paper describes a PK study of phloroglucinol in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains the abstract and method details. |
| `Dollo_1999.pdf` | Dollo G et al., [Bioavailability of phloroglucinol in m…, Journal de pharmacie de Bel… (1999) | popPK | 8 | not captured | [10431474](https://pubmed.ncbi.nlm.nih.gov/10431474) | The study reports pharmacokinetic parameters (T1/2, AUC, etc.) for phloroglucinol in humans, but the specific numeric values are not present in the provided evidence. |
| `Cao_2018.pdf` | Cao JQ et al., Rearranged Phloroglucinol-Monoterpenoid…, Journal of natural products (2018) | pd | 4 | [10.1021/acs.jnatprod.7b00606](https://doi.org/10.1021/acs.jnatprod.7b00606) | [29261312](https://www.ncbi.nlm.nih.gov/pubmed/29261312) | metadata signals extractable PD data (IC50) |
| `Hu_2016.pdf` | Hu L et al., (±)-Japonicols A-D, Acylphloroglucinol-…, Journal of natural products (2016) | pd | 4 | [10.1021/acs.jnatprod.5b01119](https://doi.org/10.1021/acs.jnatprod.5b01119) | [27116034](https://www.ncbi.nlm.nih.gov/pubmed/27116034) | metadata signals extractable PD data (EC50) |
| `Hu_2024.pdf` | Hu RD et al., New α-Glucosidase Inhibitors from the W…, Journal of agricultural and… (2024) | pd | 4 | [10.1021/acs.jafc.4c00500](https://doi.org/10.1021/acs.jafc.4c00500) | [38736181](https://www.ncbi.nlm.nih.gov/pubmed/38736181) | metadata signals extractable PD data (IC50) |
| `Ijaz_2016.pdf` | Ijaz S et al., Antioxidant potential of indigenous cya…, Natural product research (2016) | pd | 4 | [10.1080/14786419.2015.1053088](https://doi.org/10.1080/14786419.2015.1053088) | [26150139](https://www.ncbi.nlm.nih.gov/pubmed/26150139) | metadata signals extractable PD data (EC50) |
| `Lin_2019.pdf` | Lin QM et al., Tyrosinase inhibitors from the leaves o…, Fitoterapia (2019) | pd | 4 | [10.1016/j.fitote.2019.104418](https://doi.org/10.1016/j.fitote.2019.104418) | [31704262](https://www.ncbi.nlm.nih.gov/pubmed/31704262) | metadata signals extractable PD data (IC50) |
| `Liu_2020.pdf` | Liu H et al., Polymethylated Phloroglucinol Meroterpe…, Chemistry & biodiversity (2020) | pd | 4 | [10.1002/cbdv.202000489](https://doi.org/10.1002/cbdv.202000489) | [32761773](https://www.ncbi.nlm.nih.gov/pubmed/32761773) | metadata signals extractable PD data (IC50) |
| `Rajauria_2018.pdf` | Rajauria G, Optimization and validation of reverse…, Journal of pharmaceutical a… (2018) | pd | 4 | [10.1016/j.jpba.2017.10.002](https://doi.org/10.1016/j.jpba.2017.10.002) | [29055247](https://www.ncbi.nlm.nih.gov/pubmed/29055247) | metadata signals extractable PD data (EC50) |
| `Rengasamy_2013.pdf` | Rengasamy KR et al., Potential antiradical and alpha-glucosi…, Food chemistry (2013) | pd | 4 | [10.1016/j.foodchem.2013.04.019](https://doi.org/10.1016/j.foodchem.2013.04.019) | [23790932](https://www.ncbi.nlm.nih.gov/pubmed/23790932) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T12:59:45.430418+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | A_2021 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro cytotoxicity study of phloroglucinol derivatives, containing no pharmacokinetic data or disposition parameters. |
| popPK | Ahmed_2023 | irrelevant | 0 | 0 | The paper is an in-vitro phytochemical and biological activity study (antioxidant/enzyme inhibition) of plant constituents, not a pharmacokinetic study, and reports no disposition parameters for phloroglucinol. |
| PGx | An_2026 | not_relevant | 0 | 0 | The paper reports the isolation of new phloroglucinol derivatives and their mechanism of action (reversing multidrug resistance via ABC transporter inhibition), but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of phloroglucinol. |
| popPK | Artan_2008 | irrelevant | 0 | 0 | The study investigates the anti-HIV activity of a phloroglucinol derivative (6,6'-bieckol) in vitro and does not report any pharmacokinetic parameters for phloroglucinol. |
| popPK | Arvizu-Espinosa_2019 | irrelevant | 0 | 0 | The paper reports on the isolation and biological activity (MAO inhibition, cytotoxicity) of acylphloroglucinol derivatives, not the pharmacokinetics of phloroglucinol. |
| popPK | Aufmkolk_1986 | irrelevant | 0 | 0 | The paper is a mechanistic study on enzyme inhibition and crystal structure, not a pharmacokinetic study, and phloroglucinol is only mentioned as an inactive biodegradation product. |
| popPK | Baldrick_2018 | irrelevant | 0 | 0 | The study investigates the bioactivity and biomarkers of seaweed phenolics, not the pharmacokinetic disposition parameters (CL, V, etc.) of phloroglucinol. |
| popPK | Bharate_2015 | irrelevant | 0 | 0 | The paper focuses on the synthesis and P-glycoprotein induction activity of colupulone analogs (phloroglucinol derivatives) in vitro, with no pharmacokinetic parameters reported for phloroglucinol. |
| popPK | Cantoni_2003 | irrelevant | 0 | 0 | The study focuses on CYP3A enzyme induction by hyperforin (a phloroglucinol derivative) in mice, not on the pharmacokinetic parameters (CL, V, etc.) of phloroglucinol itself. |
| popPK | Cao_2018 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| PD | Cao_2018 | not_relevant | 0 | 0 | The paper focuses on the chemical synthesis and structural characterization of phloroglucinol-monoterpenoid adducts, with no pharmacodynamic or exposure-response data reported. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro pharmacological study of plant constituents, not a pharmacokinetic study of phloroglucinol. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on the identification and in-vitro antiviral activity of phloroglucinol derivatives, not on their pharmacokinetic disposition parameters. |
| popPK | Corona_2016 | irrelevant | 2 | 0 | The study investigates the bioavailability of complex seaweed phlorotannins (oligomers/polymers) rather than phloroglucinol as a specific subject drug, and no quantitative PK parameters (CL, V, ka) are reported in the evidence. |
| popPK | Daus_2022 | irrelevant | 0 | 0 | The paper is a phytochemical study on the isolation and structural characterization of phloroglucinol-meroterpenoids, reporting no pharmacokinetic parameters. |
| popPK | Ding_2023 | irrelevant | 0 | 0 | The paper is a phytochemical study focusing on the isolation and structural elucidation of phloroglucinol derivatives, with no pharmacokinetic data reported. |
| popPK | Dollo_1999 | relevant | 8 | 0 | The study reports pharmacokinetic parameters (T1/2, AUC, etc.) for phloroglucinol in humans, but the specific numeric values are not present in the provided evidence. |
| popPK | Díaz-Mula_2019 | irrelevant | 0 | 0 | The study uses phloroglucinol as a reagent for chemical analysis (phloroglucinolysis) of proanthocyanidins in pomegranate, not as a subject drug for pharmacokinetic evaluation. |
| popPK | Fiset_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of D-xylose, using phloroglucinol only as a reagent in the colorimetric assay method. |
| popPK | Fokialakis_2012 | irrelevant | 0 | 0 | The paper is a medicinal chemistry and in vitro pharmacology study of Biochanin A derivatives, where phloroglucinol is only mentioned as a synthetic precursor, and no pharmacokinetic parameters are reported. |
| PGx | Goswami_2016 | not_relevant | 0 | 0 | The study investigates the pharmacological effects of phloroglucinol in diabetic rats and its in vitro CYP3A4 inhibition, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Hafez-Ghoran_2025 | irrelevant | 0 | 0 | The paper is a phytochemical study isolating polycyclic polyprenylated benzoylphloroglucinols (PPBPs) from a plant, not a pharmacokinetic study of the drug phloroglucinol. |
| PD | Hafez-Ghoran_2025 | not_relevant | 3 | 3 | The paper reports IC50 values for specific isolated compounds (hyperibones G and G) but does not provide a dose-response curve, Emax, or a PK/PD model for phloroglucinol itself. |
| popPK | Hein_2008 | irrelevant | 0 | 0 | The study is an in-vitro microbiological degradation study of flavonoids where phloroglucinol is identified as a degradation product, not a pharmacokinetic study of phloroglucinol disposition. |
| popPK | Hu_2016 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| popPK | Hu_2024 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PD | Hu_2024 | not_relevant | 0 | 0 | The paper focuses on the discovery of new alpha-glucosidase inhibitors from Hypericum beanii and does not report pharmacodynamic or exposure-response data for phloroglucinol. |
| popPK | Huong_2023 | irrelevant | 0 | 0 | The paper is a review of Icaritin, a different drug, and phloroglucinol is only mentioned as a precursor in its synthesis. |
| popPK | Ijaz_2016 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Ijaz_2016 | not_relevant | 0 | 0 | The paper focuses on the antioxidant potential of cyanobacteria and their phenolic/flavonoid content, with no mention of phloroglucinol or any pharmacodynamic/exposure-response analysis. |
| popPK | Ivanova_2020 | irrelevant | 0 | 0 | The study is an in-vitro antioxidant screening of chemical compounds containing phloroglucinol fragments, not a pharmacokinetic study of phloroglucinol. |
| popPK | Jarque_2018 | irrelevant | 0 | 0 | The study is a toxicological screening assay measuring thyroid gene expression (goitrogenic activity) in zebrafish, not a pharmacokinetic study reporting disposition parameters for phloroglucinol. |
| popPK | Ji_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of phloroglucinol for ureteral stone expulsion, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Jiang_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of DHEA (dehydroepiandrosterone) cocrystals, where phloroglucinol is used only as a coformer in crystal engineering, not as the subject drug. |
| popPK | Jiang_2026 | irrelevant | 0 | 0 | The study focuses on the kinetics of 4-hydroxynonenal (4-HNE) and its adduct formation with cyanidin-3-O-glucoside and phloroglucinol aldehyde, not the pharmacokinetic parameters (CL, V, etc.) of phloroglucinol itself. |
| popPK | Jing_2024 | irrelevant | 0 | 0 | The study focuses on the antifungal activity of phloroglucinol derivatives in vitro and in vivo, not on the pharmacokinetics of phloroglucinol itself. |
| popPK | Jung_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of hepatotoxicity protection and does not report pharmacokinetic parameters for phloroglucinol. |
| popPK | Kabran_2015 | irrelevant | 0 | 0 | The paper is a phytochemical study reporting the isolation and in vitro bioactivity of phloroglucinol derivatives, with no pharmacokinetic data. |
| PGx | Kandel_2014 | not_relevant | 0 | 0 | The paper investigates the interaction of phloroglucinol derivatives with the PXR receptor but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Khan_2026 | not_relevant | 0 | 0 | The paper studies the effect of elevated CO2 on maize growth and lignin biosynthesis, not the pharmacokinetics or pharmacodynamics of phloroglucinol. |
| popPK | Khare_2016 | irrelevant | 0 | 0 | The paper is a review of mangiferin, a different compound, and does not report pharmacokinetic parameters for phloroglucinol. |
| popPK | Kim_2005 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay assessing hepatoprotective activity, not a pharmacokinetic study, and reports no disposition parameters for phloroglucinol. |
| PD | Kim_2005 | not_relevant | 4 | 0 | The text reports EC50 values for eckstolonol and eckol, but explicitly states that phloroglucinol was isolated without reporting any specific quantitative PD parameters (such as EC50) for it. |
| popPK | Kusumaningsih_2020 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of 2,4-diacetylphloroglucinol using phloroglucinol as a starting material, not a pharmacokinetic study. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper describes a bacterial metabolic pathway for degrading phloroglucinol, not a human pharmacogenomic effect on its pharmacokinetics or pharmacodynamics. |
| popPK | Liang_2024 | irrelevant | 0 | 0 | The study is an in vitro gastrointestinal digestion and fermentation analysis where phloroglucinol is identified as a microbial metabolite, not a pharmacokinetic study of the drug itself. |
| popPK | Lin_2019 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| PD | Lin_2019 | not_relevant | 0 | 0 | The paper focuses on the isolation and identification of tyrosinase inhibitors from Eucalyptus globulus, not on the pharmacodynamics of phloroglucinol. |
| popPK | Liu_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phloroglucinol's chemical reactivity with carbonyls, not a pharmacokinetic study. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| popPK | Liu_2020_2 | irrelevant | 0 | 0 | The paper is a natural product chemistry study focusing on the isolation and in-vitro acetylcholinesterase inhibitory activity of acylphloroglucinol derivatives, containing no pharmacokinetic data. |
| popPK | Lv_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Ebracteolatain A, a phloroglucinol derivative, not phloroglucinol itself. |
| popPK | Maillard_1966 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| PD | Maillard_1966 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Mendonça_2024 | irrelevant | 0 | 0 | The paper is an in vitro and in silico study on the antiviral activity of plant extracts against SARS-CoV-2, containing no pharmacokinetic data for phloroglucinol. |
| PD | Mendonça_2024 | not_relevant | 2 | 1 | The paper reports a single EC50 value for crude plant extracts against viral replication and uses chemometric (PLS) models to correlate LC-MS features with activity, but it does not provide a concentration-effect curve, dose-response relationship, or numeric PD parameters (Emax, EC50, slope) for the specific compound phloroglucinol. |
| popPK | Menezes_2017 | irrelevant | 0 | 0 | The study investigates the anti-parasitic and immunomodulatory mechanisms of a phloroglucinol derivative (isoaustrobrasilol B) and does not report any pharmacokinetic parameters for phloroglucinol. |
| popPK | Mohos_2020 | irrelevant | 0 | 0 | The study is an in-vitro investigation of protein binding and enzyme inhibition by phloroglucinol, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Mohos_2020 | not_relevant | 0 | 0 | The paper investigates in vitro pharmacokinetic interactions (protein binding and enzyme inhibition) of phloroglucinol but does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| popPK | Mondal_2025 | irrelevant | 0 | 0 | The study focuses on the therapeutic efficacy and biodistribution of phloroglucinol-encased vesicles in a Parkinson's disease model, without reporting quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Mondal_2025 | not_relevant | 0 | 0 | The paper reports qualitative therapeutic efficacy and biodistribution of a drug delivery vehicle but does not provide any quantitative pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for phloroglucinol. |
| popPK | Mueller_2018 | irrelevant | 0 | 0 | The study focuses on anthocyanins and their degradation product phloroglucinol aldehyde, not the pharmacokinetics of phloroglucinol itself. |
| popPK | Nakashima_2012 | irrelevant | 0 | 0 | The paper is a structural chemistry study on procyanidins where phloroglucinol is used as a reagent for degradation, not as a subject drug for pharmacokinetic analysis. |
| popPK | Nishiwaki_2015 | irrelevant | 0 | 0 | The paper focuses on the stereochemistry and biological activity (insecticidal/cytotoxic) of ficifolidione, not the pharmacokinetics of phloroglucinol. |
| popPK | Orrego-Lagarón_2016 | irrelevant | 0 | 0 | The study focuses on the metabolism of naringenin, and phloroglucinol is only mentioned as a metabolite identified in the metabolic profile, not as the subject of a pharmacokinetic study. |
| popPK | Pais_2024 | irrelevant | 0 | 0 | The study is an in vitro simulated gastrointestinal digestion experiment measuring bioaccessibility and absorption percentages, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka, etc.) for phloroglucinol. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain pharmacokinetic data for phloroglucinol. |
| PD | Papadopoulou_2025 | not_relevant | 0 | 0 | The paper is a review on marine by-products for cosmetics and does not contain any pharmacodynamic or exposure-response data for phloroglucinol. |
| popPK | Pereira_2021 | irrelevant | 0 | 0 | The paper is a review on seaweed diets for neurodegenerative diseases and does not contain pharmacokinetic data for phloroglucinol. |
| PD | Pereira_2021 | not_relevant | 0 | 0 | The paper is a general review on seaweed diets and neurodegenerative diseases; it does not report specific pharmacodynamic or exposure-response data for phloroglucinol. |
| popPK | Pham_2019 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on immunosuppressive activities of phloroglucinol derivatives and does not report any pharmacokinetic parameters. |
| popPK | Piras_2024 | irrelevant | 0 | 0 | The study focuses on the neuroprotective effects of arzanol (a phloroglucinol derivative) in cell lines and does not report quantitative pharmacokinetic parameters for phloroglucinol. |
| popPK | Popoola_2015 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro biological activity study of acylphloroglucinol derivatives, containing no pharmacokinetic data or disposition parameters. |
| popPK | Qadan_2011 | irrelevant | 0 | 0 | The paper is a phytochemical study on Ginkgo biloba antioxidants where phloroglucinol is used only as a reagent for acid-catalyzed degradation, not as a subject drug for pharmacokinetic analysis. |
| PD | Qadan_2011 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (IC50) of Ginkgo biloba compounds, not a pharmacodynamic or exposure-response relationship for the drug phloroglucinol. |
| popPK | Qian_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of BLT1 inhibitors (chromone derivatives) where phloroglucinol is only part of the chemical scaffold, not the subject drug for PK analysis. |
| popPK | Qin_2018 | irrelevant | 0 | 0 | The paper is a natural product isolation and structure elucidation study of phloroglucinol derivatives, not a pharmacokinetic study of the drug phloroglucinol. |
| PD | Qin_2018 | not_relevant | 2 | 2 | The paper reports a single IC50 value for one compound (eucalypglobulusal F) but lacks a dose-response curve, PK data, or a formal PD model to define an exposure-response relationship. |
| popPK | Quan_2023 | irrelevant | 0 | 0 | The paper is a phytochemical study identifying new isopentenyl phloroglucinol compounds and their cytotoxicity, containing no pharmacokinetic data or disposition parameters. |
| popPK | Rajauria_2018 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Rajauria_2018 | not_relevant | 0 | 0 | The paper describes an HPLC method for quantifying polyphenols in seaweed and does not contain any pharmacodynamic, exposure-response, or dose-response data for phloroglucinol. |
| popPK | Ramabulana_2022 | irrelevant | 0 | 0 | The paper is a phytochemical profiling study identifying compounds in a plant extract and does not report any pharmacokinetic parameters for phloroglucinol. |
| PD | Ramabulana_2022 | not_relevant | 0 | 0 | The paper is a phytochemical profiling study that identifies compounds and reports IC50 values for triterpenoids, but it does not report any pharmacodynamic or exposure-response data for phloroglucinol. |
| popPK | Rani_2022 | irrelevant | 0 | 0 | The paper is a phytochemical and biological activity study of plant extracts where phloroglucinol derivatives are only identified as components, with no pharmacokinetic parameters reported. |
| PD | Rani_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for crude plant extracts, not for the specific compound phloroglucinol, and does not provide a concentration-effect relationship or PD parameters for phloroglucinol itself. |
| popPK | Rao_2013 | irrelevant | 0 | 0 | The paper describes the biotechnological production and purification of phloroglucinol in bacteria, not its pharmacokinetics. |
| popPK | Rengasamy_2013 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Rengasamy_2013 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for alpha-glucosidase, which is a pharmacological potency metric, not a pharmacodynamic (exposure-response or dose-response) relationship in a biological system with numeric PD parameters like Emax or EC50 in the context of drug effect modeling. |
| PGx | Rieusset_2022 | not_relevant | 0 | 0 | The paper studies plant-microbe interactions and metabolomics, not human pharmacogenomics or drug PK/PD. |
| popPK | Romero_2023 | irrelevant | 0 | 0 | The study is an in vitro rumen fermentation experiment measuring gas production and VFA profiles, not a pharmacokinetic study reporting disposition parameters for phloroglucinol. |
| popPK | Sabarathinam_2026 | irrelevant | 0 | 0 | The study focuses on hyperforin (a derivative) and mechanistic/computational insights, not quantitative PK parameters for phloroglucinol. |
| PGx | Sabarathinam_2026 | not_relevant | 0 | 0 | The paper discusses the mechanism of CYP3A4 induction by hyperforin (a phloroglucinol derivative) but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Salviati_2021 | irrelevant | 0 | 0 | The study focuses on hop bitter acids (prenylated phloroglucinol derivatives) rather than phloroglucinol itself, and reports in vitro metabolic stability parameters rather than systemic PK parameters for the parent drug. |
| popPK | Sevimli_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro enzyme inhibition of phloroglucinol derivatives, containing no pharmacokinetic data. |
| popPK | Shanmugam_2024 | irrelevant | 0 | 0 | The study focuses on the formulation, release profile, and cytotoxicity of phloroglucinol nanoparticles, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Silva_2026 | irrelevant | 0 | 0 | The paper reports the isolation and in-vitro antileishmanial activity of a phloroglucinol derivative, not pharmacokinetic parameters for the drug phloroglucinol. |
| popPK | Sukandar_2024 | irrelevant | 0 | 0 | The paper is a phytochemical study on the isolation and structure elucidation of polyprenylated benzoylphloroglucinols, containing no pharmacokinetic data for the drug phloroglucinol. |
| PD | Sukandar_2024 | not_relevant | 3 | 3 | The paper reports IC50 values for cytotoxicity (dose-response) but does not provide the full concentration-effect curves or data points required to derive standard PD parameters like Emax or slope, nor does it involve PK modeling. |
| popPK | Sun_2026 | relevant | 10 | 0 | The paper describes a PK study of phloroglucinol in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains the abstract and method details. |
| popPK | Voynikov_2025 | irrelevant | 0 | 0 | The paper is a review of arzanol (a phloroglucinol derivative), not a primary pharmacokinetic study of phloroglucinol itself, and no quantitative PK parameters are provided. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper describes a drug delivery nanoplatform for colorectal cancer where phloroglucinol is used only as a chemical precursor for the material, not as the subject drug for pharmacokinetic analysis. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study investigates the in vitro biotransformation of flavonols by bacteria, not the pharmacokinetics of phloroglucinol in a biological host. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper describes a computational metabolomics framework and does not report pharmacokinetic parameters for phloroglucinol. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper is a computational metabolomics framework study; it reports statistical differences in phloroglucinol abundance across pregnancy trimesters but contains no pharmacodynamic, exposure-response, or dose-response analysis or parameters. |
| popPK | Weiz_2024 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic and anti-tumoral activity study, not a pharmacokinetic study, and reports no disposition parameters for phloroglucinol. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The paper is a review of phlorotannins and gut microbiota interactions, lacking original quantitative pharmacokinetic parameters (CL, V, etc.) for phloroglucinol. |
| popPK | Wurglics_2006 | irrelevant | 0 | 0 | The paper is a review of Hypericum perforatum components (hyperforin, hypericins, flavonoids) and does not report quantitative pharmacokinetic parameters for phloroglucinol itself. |
| popPK | Xin_2012 | irrelevant | 0 | 0 | The paper reports on the isolation and in vitro biological activities of phloroglucinol derivatives, not pharmacokinetic parameters for phloroglucinol. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper reports on the isolation and in-vitro enzymatic inhibitory activities of phloroglucinol derivatives, not pharmacokinetic parameters. |
| popPK | Yuk_2020 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic study on xanthine oxidase inhibition by phloroglucinol derivatives and does not report any pharmacokinetic parameters. |
| popPK | Zahoor_2018 | irrelevant | 0 | 0 | The paper is a phytochemical study on Aesculus indica fruit extracts, reporting antioxidant and enzyme inhibition data, with no pharmacokinetic parameters for phloroglucinol. |
| PD | Zahoor_2018 | not_relevant | 0 | 0 | The paper reports dose-response data (IC50) for crude plant extracts and isolated compounds (quercetin, mandelic acid), but does not provide specific pharmacodynamic parameters or concentration-effect data for phloroglucinol. |
| popPK | Zanoli_2004 | irrelevant | 0 | 0 | The paper is a review of hyperforin (a phloroglucinol derivative), not the drug phloroglucinol itself, and does not report quantitative PK parameters for phloroglucinol. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper reports the isolation and antifungal activity of phloroglucinol derivatives, not the pharmacokinetics of phloroglucinol itself. |
| popPK | Zhi_2018 | irrelevant | 0 | 0 | The paper is a natural product isolation and structural elucidation study of phloroglucinol derivatives, containing no pharmacokinetic data or disposition parameters. |
| PD | Zhi_2018 | not_relevant | 2 | 2 | The paper reports IC50 values for anti-inflammatory activity, which are single-point potency metrics, but does not provide a dose-response curve, Emax, or any pharmacokinetic/pharmacodynamic modeling parameters. |
| popPK | da_2023 | irrelevant | 0 | 0 | The study is an in silico prediction of ADMET properties for various phloroglucinol derivatives, not a pharmacokinetic study reporting quantitative disposition parameters for the specific drug phloroglucinol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
