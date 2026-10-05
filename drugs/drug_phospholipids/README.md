<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;phospholipids&quot;}]"></div>

# phospholipids

- **generic name:** phospholipids
- **ATC codes:** `A05BA10`
- **DrugBank:** [DB11133](https://go.drugbank.com/drugs/DB11133) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical

## About

Phospholipids, also known as omega fatty acids, are used in liver therapy as lipotropic agents. They are approved and also available as nutraceuticals, with some investigational uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:54 | 20:21 | 0/0/1 | 0/0/0 | 0/0/0 | 851,361/17,496 | ollama / qwen3.8:27b-mtp-q8_0 | 83 | 16/90 | 80/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: not captured</sub> | [Hummel_1975_non pregnant female rats](drugs/drug_phospholipids/Phospholipids_Hummel1975_non_pregnant_female_rats.md) | — | — (no model) | 0 | Hummel L, Studies on the synthesis of liver phosp…, Acta biologica et medica Ge… (1975) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phospholipids) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALOX5 (substrate), PPARA (activator), PPARG (target), PTGS2 (substrate), SREBF1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2300 matched, 226 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kára_1994.pdf` | Kára J et al., Pharmacokinetics and metabolism of a ne…, Journal of cancer research… (1994) | popPK | 9 | [10.1007/BF01245378](https://doi.org/10.1007/BF01245378) | [7962042](https://pubmed.ncbi.nlm.nih.gov/7962042) | The study reports pharmacokinetic parameters (half-lives) for a semisynthetic ether phospholipid in mice, but specific clearance and volume values are not explicitly listed in the provided text. |
| `Thesing_2018.pdf` | Thesing CS et al., Omega-3 polyunsaturated fatty acid leve…, Psychoneuroendocrinology (2018) | pd | 5 | [10.1016/j.psyneuen.2018.07.002](https://doi.org/10.1016/j.psyneuen.2018.07.002) | [30077075](https://www.ncbi.nlm.nih.gov/pubmed/30077075) | metadata signals extractable PD data (exposure-response) |
| `Zhang_2021.pdf` | Zhang J et al., Associations of total blood mercury and…, Journal of trace elements i… (2021) | pd | 5 | [10.1016/j.jtemb.2021.126845](https://doi.org/10.1016/j.jtemb.2021.126845) | [34418744](https://www.ncbi.nlm.nih.gov/pubmed/34418744) | metadata signals extractable PD data (exposure-response) |
| `Chang_1985.pdf` | Chang RS et al., Cholecystokinin receptor mediated hydro…, Life sciences (1985) | pd | 4 | [10.1016/0024-3205(85)90392-3](https://doi.org/10.1016/0024-3205(85)90392-3) | [2983160](https://www.ncbi.nlm.nih.gov/pubmed/2983160) | metadata signals extractable PD data (EC50) |
| `Cortese_1987.pdf` | Cortese JD et al., Noncooperative vs. cooperative reactiva…, Biochemistry (1987) | pd | 4 | [10.1021/bi00391a011](https://doi.org/10.1021/bi00391a011) | [3676253](https://www.ncbi.nlm.nih.gov/pubmed/3676253) | metadata signals extractable PD data (sigmoid) |
| `Du_1993.pdf` | Du ZY et al., Effects of tetrandrine on production of…, Zhongguo yao li xue bao = A… (1993) | pd | 4 | not captured | [8249626](https://www.ncbi.nlm.nih.gov/pubmed/8249626) | metadata signals extractable PD data (IC50) |
| `Leifert_1999.pdf` | Leifert WR et al., Inhibition of cardiac sodium currents i…, The Journal of physiology (1999) | pd | 4 | [10.1111/j.1469-7793.1999.00671.x](https://doi.org/10.1111/j.1469-7793.1999.00671.x) | [10545135](https://www.ncbi.nlm.nih.gov/pubmed/10545135) | metadata signals extractable PD data (EC50) |
| `Liu_2020.pdf` | Liu GY et al., A functional role for eicosanoid-lysoph…, The Journal of biological c… (2020) | pd | 4 | [10.1074/jbc.RA120.013619](https://doi.org/10.1074/jbc.RA120.013619) | [32641497](https://www.ncbi.nlm.nih.gov/pubmed/32641497) | metadata signals extractable PD data (EC50) |
| `Rappaport_1986.pdf` | Rappaport MS et al., Parathyroid hormone and calcitonin modi…, Journal of bone and mineral… (1986) | pd | 4 | [10.1002/jbmr.5650010202](https://doi.org/10.1002/jbmr.5650010202) | [3503534](https://www.ncbi.nlm.nih.gov/pubmed/3503534) | metadata signals extractable PD data (EC50) |
| `Satoh_1997.pdf` | Satoh K et al., Inhibition of Na+,K(+)-ATPase by 1,2,3,…, Biochemical pharmacology (1997) | pd | 4 | [10.1016/s0006-2952(96)00828-3](https://doi.org/10.1016/s0006-2952(96)00828-3) | [9105414](https://www.ncbi.nlm.nih.gov/pubmed/9105414) | metadata signals extractable PD data (IC50) |
| `Wieder_1995.pdf` | Wieder T et al., The effect of two synthetic phospholipi…, Lipids (1995) | pd | 4 | [10.1007/BF02536296](https://doi.org/10.1007/BF02536296) | [7637558](https://www.ncbi.nlm.nih.gov/pubmed/7637558) | metadata signals extractable PD data (IC50) |
| `Parajuli_2021.pdf` | Parajuli RP et al., Variation in biomarker levels of metals…, Environmental research (2021) | pgx | 8 | [10.1016/j.envres.2021.111393](https://doi.org/10.1016/j.envres.2021.111393) | [34062203](https://www.ncbi.nlm.nih.gov/pubmed/34062203) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Kimura_2007.pdf` | Kimura Y et al., Mechanism of multidrug recognition by M…, Cancer science (2007) | pgx | 7 | [10.1111/j.1349-7006.2007.00538.x](https://doi.org/10.1111/j.1349-7006.2007.00538.x) | [17608770](https://www.ncbi.nlm.nih.gov/pubmed/17608770) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Xiang_2021.pdf` | Xiang GQ et al., [Gilbert's syndrome: hyperbilirubinemia…, Zhonghua gan zang bing za z… (2021) | pgx | 5 | [10.3760/cma.j.cn501113-20200212-00041](https://doi.org/10.3760/cma.j.cn501113-20200212-00041) | [34814402](https://www.ncbi.nlm.nih.gov/pubmed/34814402) | metadata signals extractable PGX data (UGT1A1) |

<sub>queue written 2026-10-04T15:42:26.636340+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abma_2020 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of Lipoxin A4 on airway hyperreactivity in mice and does not report pharmacokinetic parameters for phospholipids. |
| popPK | Aggarwal_2025 | irrelevant | 0 | 0 | The paper is a narrative review of nutraceuticals in cancer chemotherapy and does not report pharmacokinetic parameters for phospholipids. |
| PD | Aggarwal_2025 | not_relevant | 0 | 0 | The paper is a narrative review of nutraceuticals in cancer chemotherapy and does not report any specific pharmacodynamic or exposure-response analysis for phospholipids. |
| PGx | Albano_1995 | not_relevant | 0 | 0 | The paper investigates the metabolic activation of alkylhydrazines by CYP2E1, not the pharmacokinetics or pharmacodynamics of phospholipids. |
| popPK | Amin_1975 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of model compounds (benzoylformic acid, mandelic acid, etc.) in rats, not phospholipids, which are only mentioned as components of membrane pores. |
| PGx | Anna_2025 | not_relevant | 0 | 0 | The paper studies the anticancer efficacy of indomethacin-phospholipid hybrids in cell lines and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Annevelink_2024 | irrelevant | 0 | 0 | The study is a genome-wide interaction analysis of fatty acids and cognition, not a pharmacokinetic study of phospholipids. |
| popPK | Archer_2023 | irrelevant | 0 | 0 | The paper describes the synthesis of lipid-based multi-compartment structures and contains no pharmacokinetic data or disposition parameters for phospholipids. |
| popPK | Bae_2022 | irrelevant | 0 | 0 | The paper describes the immunological mechanism and structure-activity relationship of a bacterial phospholipid (a15:0-i15:0 PE) acting as a TLR2 agonist, not its pharmacokinetic disposition parameters. |
| popPK | Bahreynian_2023 | irrelevant | 0 | 0 | The study examines the association between breast milk fatty acid content and infant growth, not the pharmacokinetic disposition parameters of phospholipids. |
| popPK | Bajahzer_2022 | irrelevant | 0 | 0 | The study investigates the effect of sugar-sweetened soda on fatty acid composition in plasma phospholipids, not the pharmacokinetics of phospholipids as a drug. |
| popPK | Barkai_1988 | irrelevant | 0 | 0 | The study investigates the in vitro incorporation of arachidonic acid into phospholipids in rat brain tissue, which is a mechanistic/biochemical study, not a pharmacokinetic study of phospholipids as a drug. |
| PGx | Batrow_2025 | not_relevant | 0 | 0 | The paper investigates the role of PPARα in lipid metabolism and de novo lipogenesis in brown adipose tissue, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Belury_2021 | irrelevant | 0 | 0 | The study is a cross-sectional analysis of fatty acid composition and body composition, not a pharmacokinetic study of phospholipids. |
| popPK | Berlin_2020 | irrelevant | 0 | 0 | The study investigates OMT-28 (a synthetic analog of omega-3 epoxyeicosanoids), not phospholipids, as the subject drug. |
| popPK | Bihorel_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the monoclonal antibody evinacumab, not for phospholipids. |
| PGx | Boles_1991 | not_relevant | 0 | 0 | The paper investigates lipid metabolism in a genetic disease (ALD) but does not report the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Borst_1993 | not_relevant | 2 | 0 | The paper discusses the physiological role of P-glycoproteins in phospholipid secretion and multidrug resistance mechanisms, but does not report a pharmacogenomic effect on the PK/PD of a specific drug. |
| popPK | Brooks_1991 | irrelevant | 0 | 0 | The paper is a review of skin lipid structure and barrier function, not a pharmacokinetic study of phospholipids as a drug. |
| popPK | Budda_2026 | irrelevant | 0 | 0 | The study focuses on dopamine D2 receptor ligands (e.g., buprenorphine, aripiprazole) and uses phospholipids only as a component in the calculation of the microsomal membrane partition coefficient (KpM), not as the subject drug for PK parameter estimation. |
| PGx | Bumpus_2020 | not_relevant | 0 | 0 | The paper describes a chemical biology method (IMPACT) for imaging phospholipase D activity and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PD | Calder_2018 | not_relevant | 2 | 0 | The text is a narrative review describing the mechanisms of action and general dose-dependent incorporation of n-3 fatty acids, but it does not report specific numeric PD parameters (e.g., Emax, EC50) or quantitative exposure-response curves for phospholipids. |
| PGx | Cerbón_1970 | not_relevant | 0 | 0 | The paper studies yeast arsenate transport and phospholipid biosynthesis, not human pharmacogenomics or drug PK/PD parameters. |
| PD | Chae_2021 | not_relevant | 2 | 1 | The study reports an epidemiological association between dietary intake and depression using odds ratios, but it does not measure drug concentrations or model a pharmacodynamic exposure-response relationship. |
| popPK | Chang_1985 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PGx | Chang_2014 | not_relevant | 0 | 0 | The paper investigates the role of CYP2C enzymes in photoreceptor cell death and arachidonic acid metabolism, but does not report a pharmacogenomic effect on the PK or PD of phospholipids. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper investigates the cardiovascular effects of air pollution and omega-3 fatty acids, not the pharmacokinetics of phospholipids. |
| popPK | Cheng_2021 | irrelevant | 0 | 0 | The paper describes the mechanism of action of mathermycin targeting phospholipids (PE) in cell membranes, not the pharmacokinetics of phospholipids as a drug. |
| PGx | Clay_2015 | not_relevant | 0 | 0 | The paper investigates the biochemical interaction between P-glycoprotein and sterols/phospholipids in vitro, not the effect of a human gene variant on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Cortese_1987 | irrelevant | 0 | 0 | no_text gate: only 221 chars of text extracted (&lt; 400) |
| PD | Cortese_1987 | not_relevant | 0 | 0 | The paper investigates the biophysical binding equilibria of phospholipids to an enzyme, not a pharmacodynamic exposure-response or dose-response relationship for a drug. |
| popPK | Dardano_2026 | irrelevant | 0 | 0 | The paper is a review on antioxidants, gut microbiota, and epilepsy, and does not report pharmacokinetic parameters for phospholipids. |
| PD | Dardano_2026 | not_relevant | 0 | 0 | The paper is a narrative review discussing the gut-brain axis and epilepsy; it does not report any specific pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for phospholipids or any other drug. |
| popPK | Daum_1986 | irrelevant | 0 | 0 | The study investigates intracellular phospholipid transfer mechanisms in yeast, not the pharmacokinetics of phospholipids as a drug. |
| popPK | Davran_2026 | irrelevant | 0 | 0 | The paper is a review of marine bioactive compounds and does not report pharmacokinetic parameters for phospholipids. |
| PD | Davran_2026 | not_relevant | 1 | 0 | The paper is a general review of marine bioactive compounds and does not report specific pharmacodynamic models or numeric exposure-response parameters for phospholipids. |
| PGx | De_2014 | not_relevant | 0 | 0 | The paper investigates genetic associations with electromagnetic hypersensitivity and metabolic markers, but does not report pharmacokinetic or pharmacodynamic effects of a specific drug. |
| PD | Djuricic_2021 | not_relevant | 2 | 1 | The paper is a narrative review summarizing epidemiological associations and qualitative dose-response trends (e.g., linear RR for CVD mortality) but does not report a pharmacodynamic model or extractable numeric PD parameters (Emax, EC50) for phospholipids. |
| PGx | Doering_1993 | not_relevant | 0 | 0 | The paper describes trypanosome lipid metabolism and VSG anchoring, not a pharmacogenomic effect on the PK/PD of a drug. |
| popPK | Dołowy_2026 | irrelevant | 0 | 0 | The paper is a review of chromatography techniques and does not report pharmacokinetic parameters for phospholipids. |
| PD | Dołowy_2026 | not_relevant | 0 | 0 | The text is a general introduction to chromatography techniques in analytical chemistry and contains no pharmacodynamic, exposure-response, or dose-response data for phospholipids or any other drug. |
| PGx | Drzymała-Czyż_2017 | not_relevant | 0 | 0 | The paper investigates the association between CFTR genotype and endogenous fatty acid composition in phospholipids, not the pharmacokinetic or pharmacodynamic effects of a drug. |
| popPK | Duan_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing cognitive function and biomarker levels, not a pharmacokinetic study reporting disposition parameters for phospholipids. |
| PGx | Efferth_2003 | not_relevant | 0 | 0 | The paper is a review of ABC transporter genes in aging and disease, discussing physiological roles and disease associations rather than reporting pharmacogenomic effects on the PK/PD of phospholipids. |
| PGx | Esan_2021 | not_relevant | 0 | 0 | The paper is a review of triglycerides and cardiovascular disease risk, not a study on pharmacogenomic effects on the PK/PD of phospholipids. |
| PGx | Evans_2024 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of oxylipins (9-HODE/9-HOTrE) on HepG2 cells and does not report a pharmacogenomic effect of a gene variant on the PK/PD of a specific drug. |
| popPK | Fajdiga_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lipid emulsion effects on Jurkat cell mechanics and viability, not a pharmacokinetic study reporting disposition parameters for phospholipids. |
| popPK | Farahat_2026 | irrelevant | 0 | 0 | The paper is a methodological study on PBPK modeling uncertainty and does not report specific pharmacokinetic parameters for phospholipids. |
| PD | Farahat_2026 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling uncertainty and tissue partitioning (PK) for phospholipids and other molecules, but does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Farmer_2022 | irrelevant | 0 | 0 | The paper focuses on the chemical design and mechanism of ferroptosis inhibitors (antioxidants) interacting with phospholipids, not the pharmacokinetics of phospholipids as a drug. |
| popPK | Fatima_2025 | irrelevant | 0 | 0 | The paper is a review of nutraceuticals and natural compounds for chronic disease management and does not report pharmacokinetic parameters for phospholipids. |
| PD | Fatima_2025 | not_relevant | 0 | 0 | The paper is a narrative review of nutraceuticals and natural compounds, containing no specific pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for phospholipids. |
| PGx | Faure_1993 | not_relevant | 0 | 0 | The paper studies the pharmacology of a snake venom toxin (crotoxin) and its isoforms, not the effect of human gene variants on the PK/PD of a drug. |
| popPK | Faurot_2023 | irrelevant | 0 | 0 | The paper is a clinical trial on dietary fatty acids for migraine and does not report pharmacokinetic parameters for phospholipids. |
| PGx | Fuchs_2024 | not_relevant | 0 | 0 | The paper investigates the structural determinants of CYP1A1/1A2 membrane microdomain localization, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a phospholipid drug. |
| popPK | Gabbay_2012 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for omega-3 fatty acids in Tourette's disorder and does not report pharmacokinetic parameters for phospholipids. |
| PD | Giacomo_2026 | not_relevant | 1 | 0 | The text is a narrative review discussing the need for better dose-response data and product quality, but it does not report any specific numeric PD parameters or concentration-effect curves. |
| PGx | Gkouskou_2021 | not_relevant | 0 | 0 | The paper is a review on micronutrient supplementation and does not report pharmacokinetic or pharmacodynamic parameters for phospholipids. |
| popPK | Gonzales_1985 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of phospholipase C activity in rat membranes, not a pharmacokinetic study of phospholipids as a drug. |
| popPK | Goryanin_2025 | irrelevant | 0 | 0 | The study focuses on the gut microbiome and metabolome in asthma patients treated with inhaled corticosteroids, not the pharmacokinetics of phospholipids. |
| PD | Goryanin_2025 | not_relevant | 0 | 0 | The study is a metagenomic and metabolomic analysis of gut microbiome changes in asthma patients using inhaled corticosteroids; it does not report drug exposure, concentration-effect relationships, or pharmacodynamic parameters for phospholipids or the drug itself. |
| popPK | Guimarães_2010 | irrelevant | 0 | 0 | The paper is a phytochemical and antioxidant study of Rosa micrantha, not a pharmacokinetic study of phospholipids. |
| PD | Guimarães_2010 | not_relevant | 0 | 0 | The paper reports chemical composition and in vitro antioxidant activity (EC50) of plant extracts, not a pharmacodynamic exposure-response relationship for a specific drug or phospholipid in a biological system. |
| PGx | Gurung_2018 | not_relevant | 0 | 0 | The paper investigates the structural impact of a polymorphism on the endogenous enzyme Lp-PLA2, not the pharmacokinetics or pharmacodynamics of an exogenous drug. |
| PGx | Han_2025 | not_relevant | 0 | 0 | The paper focuses on plant genetics and crop disease resistance, not human pharmacogenomics or drug PK/PD parameters. |
| popPK | Hanikoglu_2019 | irrelevant | 0 | 0 | The study investigates the effects of somatostatin and vitamin C on fatty acid profiles in breast cancer cells, not the pharmacokinetics of phospholipids. |
| PD | Hanikoglu_2019 | not_relevant | 2 | 1 | The study uses fixed EC50 concentrations for treatment but reports only qualitative changes in fatty acid profiles and signaling pathways, without providing a dose-response curve or numeric PD parameters for the effect of the drugs on the measured endpoints. |
| popPK | Hassanein_2022 | irrelevant | 0 | 0 | The study is a food chemistry analysis of linseed oil composition and stability, not a pharmacokinetic study of phospholipids. |
| PD | Hassanein_2022 | not_relevant | 0 | 0 | The paper analyzes the chemical composition and oxidative stability of linseed oil after roasting, not the pharmacodynamic or exposure-response relationship of a drug in a biological system. |
| popPK | Hasselstrøm_2026 | irrelevant | 0 | 0 | The study is a computational molecular dynamics and free energy calculation of SPM binding to GPR101, not a pharmacokinetic study of phospholipids. |
| PD | Hasselstrøm_2026 | not_relevant | 0 | 0 | The paper reports computational binding free energies and molecular dynamics simulations, not pharmacodynamic exposure-response or dose-response relationships with numeric PD parameters. |
| PGx | Hill_2024 | not_relevant | 0 | 0 | The paper focuses on gene expression biomarkers for psychosis diagnosis and treatment prediction, not on pharmacogenomic effects on the PK/PD of phospholipids. |
| popPK | Hoshi_2013 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of DHA on ion channels and blood pressure, not the pharmacokinetic disposition parameters of phospholipids. |
| popPK | Hummel_1975 | irrelevant | 2 | 3 | The study reports turnover rates and times for phospholipids in rats, but these are metabolic/turnover parameters rather than standard pharmacokinetic disposition parameters (CL, V, ka) for a dosed drug. |
| PGx | Ibanez_2025 | not_relevant | 0 | 0 | The study investigates the effect of extracellular acidosis on fatty acid uptake and metabolism, explicitly stating that the observed effects occur "regardless of genotype," and does not report pharmacogenomic effects on PK/PD parameters. |
| PD | Igarashi_1984 | not_relevant | 3 | 1 | The paper describes a qualitative dose-response profile linking ACTH to phospholipid changes but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve in the text. |
| PGx | Isobe_2018 | not_relevant | 0 | 0 | The paper investigates the enzymatic metabolism of a lipid (EPA) by CYP isoforms, not the pharmacokinetic or pharmacodynamic effects of a drug modulated by a gene variant. |
| PGx | Jackson_2018 | not_relevant | 0 | 0 | The paper reports structural biology of the ABCG2 transporter and inhibitor binding, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Jarullah_2025 | irrelevant | 0 | 0 | The study investigates the association between FADS1 polymorphisms and fatty acid levels in diabetes, not the pharmacokinetics of phospholipids. |
| PD | Jarullah_2025 | not_relevant | 0 | 0 | The study is a genetic association/case-control analysis of FADS1 polymorphism and fatty acid levels, not a pharmacodynamic exposure-response or dose-response study for a drug. |
| popPK | Jon_2025 | irrelevant | 0 | 0 | The paper is a review of donepezil delivery systems and does not report pharmacokinetic parameters for phospholipids. |
| PD | Jon_2025 | not_relevant | 1 | 0 | The paper is a review of donepezil delivery systems and does not report specific pharmacodynamic models or numeric exposure-response parameters for phospholipids. |
| popPK | KIRSCHNER_1964 | irrelevant | 0 | 0 | The paper investigates the turnover of phosphatidic acid in red blood cells to test a sodium transport model, not the pharmacokinetics of phospholipids as a drug. |
| PD | Kander_2018 | not_relevant | 2 | 0 | The study reports a lack of dose-response effect for omega-3 on platelet aggregation in vivo and does not provide numeric PD parameters or an extractable concentration-effect curve. |
| popPK | Kannan_1980 | irrelevant | 0 | 0 | The study investigates the turnover of free fatty acids (linoleate and palmitate) in a tumor model, not the pharmacokinetics of phospholipids as a subject drug. |
| popPK | Karakitsios_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of antitubercular drugs (rifampicin, pyrazinamide, etc.), not phospholipids. |
| PD | Karakitsios_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) modeling and extrapolation of drug concentrations in lung tissues; it does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Karakitsios_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bedaquiline, not phospholipids. |
| PD | Karakitsios_2025 | not_relevant | 2 | 1 | The paper focuses on PBPK modeling of drug distribution (PK) and compares predicted concentrations to static MIC/WCC thresholds, but does not report a fitted pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) describing an exposure-response relationship. |
| popPK | Karimi_2025 | irrelevant | 0 | 0 | The study investigates the effects of spirulina supplementation on inflammation and quality of life in multiple sclerosis patients, not the pharmacokinetics of phospholipids. |
| PGx | Kawatani_2024 | not_relevant | 0 | 0 | The paper investigates the impact of ABCA7 deficiency on endogenous mitochondrial lipid metabolism and neuronal function, not the pharmacokinetics or pharmacodynamics of an exogenous drug. |
| popPK | Kendall_1985 | irrelevant | 0 | 0 | The study investigates in vitro receptor pharmacology and signal transduction (inositol phosphate accumulation) in rat brain slices, not the pharmacokinetic disposition of phospholipids as a drug. |
| popPK | Khwarg_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of atorvastatin and omega-3 fatty acids (EPA/DHA), not the drug phospholipids. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The study investigates the association between plasma omega-3 fatty acid levels and disease progression in pulmonary fibrosis, not the pharmacokinetic parameters (CL, V, etc.) of phospholipids. |
| PGx | Kim_2025 | not_relevant | 0 | 0 | The paper investigates the causal association between genetically predicted polyunsaturated fatty acid levels and skin cancer risk, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Kim_2025_2 | not_relevant | 0 | 0 | The paper investigates the causal association between genetically predicted polyunsaturated fatty acid levels and acne risk, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Kimura_2007 | not_relevant | 0 | 0 | The paper is a mechanistic review of MDR1/ABCB1 substrate recognition and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Kistler-Fischbacher_2024 | irrelevant | 0 | 0 | The paper is a clinical trial examining the effects of Vitamin D, omega-3s, and exercise on bone mineral density, and does not report pharmacokinetic parameters for phospholipids. |
| PGx | Kodali_1990 | not_relevant | 0 | 0 | The paper describes the physical chemistry and polymorphism of synthetic diacylglycerols, not the pharmacogenomics of phospholipid PK/PD. |
| popPK | Koistinen_2025 | irrelevant | 0 | 0 | The study is a metabolomics analysis of glucose metabolism markers in humans, not a pharmacokinetic study of phospholipids as a drug. |
| popPK | Kubota_2014 | irrelevant | 0 | 0 | The study focuses on the metabolic conversion and anti-inflammatory activity of eicosapentaenoic acid (EPA) and its metabolites, not the pharmacokinetic parameters of phospholipids. |
| PGx | Kuentzel_2026 | not_relevant | 0 | 0 | The paper investigates the effect of a gene variant (TAZ) on endogenous lipid metabolism and the therapeutic effect of a dietary supplement (omega-3 fatty acids), not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Kurma_2025 | irrelevant | 0 | 0 | The paper describes the molecular design and pharmacology of A3 adenosine receptor modulators, not the pharmacokinetics of phospholipids. |
| PGx | Lahiri_2024 | not_relevant | 0 | 0 | The paper reports endogenous lipidomic changes caused by JPH2 gene variants, not the pharmacokinetics or pharmacodynamics of an exogenous drug. |
| popPK | Lakka_2025 | irrelevant | 0 | 0 | The study investigates the association between plasma fatty acid composition in phospholipids and bone mineral density, not the pharmacokinetics of phospholipids as a drug. |
| popPK | Lancé_2013 | irrelevant | 0 | 0 | The study investigates pre-analytical variables in platelet function analysis, using phospholipids only as a reagent in the thrombin generation assay, not as a subject drug for pharmacokinetic modeling. |
| PD | Lands_2018 | not_relevant | 1 | 0 | The text is a qualitative review discussing the biological mechanisms and importance of fatty acid balance in phospholipids, but it does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Lara_2026 | irrelevant | 0 | 0 | The study investigates the association between dietary omega-3 fatty acid intake and atrial fibrillation biomarkers, not the pharmacokinetics of phospholipids. |
| popPK | Laupsa-Borge_2023 | irrelevant | 0 | 0 | The study investigates the effects of omega-3 and omega-6 fatty acid supplementation on lipoprotein profiles and insulin sensitivity, measuring serum phospholipid concentrations as a biomarker, but does not perform pharmacokinetic modeling or report disposition parameters (CL, V, etc.) for phospholipids as a drug. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper is a longitudinal cohort study on cognitive function and omega-3 supplement use, not a pharmacokinetic study, and does not report quantitative disposition parameters (CL, V, etc.) for phospholipids. |
| popPK | Lee_2026_2 | irrelevant | 0 | 0 | The study is a survey on natural health product usage and coding feasibility, not a pharmacokinetic study of phospholipids. |
| PD | Lee_2026_2 | not_relevant | 0 | 0 | The paper is a descriptive epidemiological study on the prevalence of natural health product use and coding feasibility; it contains no pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Leifert_1999 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of fatty acids on sodium currents in rat myocytes, not the pharmacokinetics of phospholipids. |
| popPK | Leiva-Castro_2025 | irrelevant | 0 | 0 | The paper is a systematic review of nutraceuticals (probiotics, omega-3s, etc.) for rheumatoid arthritis and does not report pharmacokinetic parameters for phospholipids. |
| PD | Leiva-Castro_2025 | not_relevant | 1 | 0 | The paper is a systematic review of nutraceuticals in rheumatoid arthritis and does not report specific pharmacodynamic models or numeric exposure-response parameters for phospholipids. |
| popPK | Lekka_1993 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacological investigation of phosphatidylglycerol as an inhibitor of platelet aggregation, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for phospholipids as a drug. |
| popPK | Li_1995 | irrelevant | 0 | 0 | The paper describes the molecular biology and binding properties of synaptotagmins, not the pharmacokinetics of phospholipids as a drug. |
| PD | Li_1995 | not_relevant | 0 | 0 | The paper describes protein-protein interactions and calcium-dependent binding of syntaxins to synaptotagmins, not a pharmacodynamic exposure-response relationship for a drug. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a cross-sectional epidemiological study on the association between polyunsaturated fatty acid intake and allergic rhinitis, not a pharmacokinetic study of phospholipids. |
| PGx | Liao_2020 | not_relevant | 0 | 0 | The paper investigates the reversal of drug resistance in cancer cells using fish oil and selenium, but does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of phospholipids. |
| popPK | Liao_2026 | irrelevant | 0 | 0 | The paper investigates the association between omega-3 supplementation and cognitive decline in Alzheimer's disease using neuroimaging and clinical scores, and does not report any pharmacokinetic parameters (CL, V, etc.) for phospholipids. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug oridonin, not for phospholipids, which are used only as a component of the liposomal formulation. |
| popPK | Liscovitch_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phospholipase D activity and does not report pharmacokinetic parameters for phospholipids. |
| popPK | Lituma-González_2025 | irrelevant | 0 | 0 | The paper is a computational study on fatty acids as ACE2 modulators and does not report pharmacokinetic parameters for phospholipids. |
| PD | Lituma-González_2025 | not_relevant | 0 | 0 | The paper is a purely computational study (molecular docking, MD simulations, MM/PBSA) reporting binding free energies and dynamic properties, with no experimental pharmacodynamic data, concentration-effect curves, or dose-response parameters. |
| popPK | Liu_1999 | irrelevant | 0 | 0 | The study is an in-vitro investigation of phospholipid derivatives as permeability enhancers in Caco-2 cells, not a pharmacokinetic study of phospholipids as a subject drug. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Liu_2020 | not_relevant | 0 | 0 | The paper focuses on the functional role of eicosanoid-lysophospholipids in monocyte signaling and does not report a pharmacokinetic/pharmacodynamic model or numeric exposure-response parameters for a drug. |
| PD | Liu_2024 | not_relevant | 3 | 2 | The study is an epidemiological cross-sectional analysis of dietary intake (exposure) and disease risk (osteoporosis), not a pharmacodynamic study of drug concentration or dose; it lacks specific PD parameters like Emax or EC50. |
| PGx | Liu_2026 | not_relevant | 0 | 0 | The study investigates genetic associations with endogenous metabolites (e.g., LPC, PGE3) and blood pressure, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Lv_2026 | irrelevant | 0 | 0 | The paper studies a carboline-based ferroptosis inhibitor and its effect on phosphatidylcholine remodeling, not the pharmacokinetics of phospholipids as a drug. |
| PGx | Mahmood_2025 | not_relevant | 0 | 0 | The paper investigates the role of the Hsd17b13 gene in liver steatosis and lipid metabolism, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Manzke_2018 | not_relevant | 0 | 0 | The paper studies the effect of dietary energy supplementation on pig growth and does not report pharmacogenomic effects on phospholipid PK/PD parameters. |
| popPK | Menon_1986 | irrelevant | 0 | 0 | The paper is a study on avian epidermal differentiation and lipid biochemistry, not a pharmacokinetic study of phospholipids as a drug. |
| PGx | Milaneschi_2019 | not_relevant | 0 | 0 | The paper investigates the genetic architecture of vitamin D and omega-3 fatty acid levels and their association with depression, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of phospholipids. |
| PD | Mills_1989 | not_relevant | 3 | 2 | The study reports qualitative dose-response trends (e.g., "no dose-response" for 18:3n-6) and percentage changes in blood pressure, but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve. |
| PD | Minihane_2025 | not_relevant | 1 | 0 | The paper is a narrative review that discusses qualitative associations and calls for future dose-response studies, but it does not report any numeric PD parameters or extractable concentration-effect curves. |
| PGx | Morita_2013 | not_relevant | 0 | 0 | The paper investigates the mechanism of ABCB4-mediated phospholipid efflux in membranes but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Mustad_2006 | irrelevant | 0 | 0 | The study investigates the metabolic and vascular effects of n-3 fatty acids in diabetic mice, not the pharmacokinetics of phospholipids. |
| popPK | Nassimi_2009 | irrelevant | 0 | 0 | The study investigates the cytotoxicity of solid lipid nanoparticles (SLNs) in vitro and ex vivo, not the pharmacokinetic disposition parameters of phospholipids as a drug. |
| PGx | Neumann_2017 | not_relevant | 0 | 0 | The paper is a review of the biophysical mechanisms of ABC transporter-mediated lipid transport and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Nyangwa_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of anti-tuberculosis drugs (bedaquiline, pretomanid, linezolid, etc.), not phospholipids. |
| PD | Nyangwa_2026 | not_relevant | 4 | 3 | The study investigates exposure-response relationships for anti-TB drugs (bedaquiline, pretomanid, linezolid, moxifloxacin, clofazimine) but does not report any pharmacodynamic data or parameters for phospholipids. |
| popPK | Nyangwa_2026_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of anti-tuberculosis drugs (bedaquiline, pretomanid, linezolid, etc.), not phospholipids. |
| PD | Nyangwa_2026_2 | not_relevant | 4 | 4 | The paper investigates exposure-response relationships for anti-TB drugs (bedaquiline, pretomanid, linezolid, moxifloxacin, clofazimine) but does not report any pharmacodynamic data for phospholipids. |
| popPK | Ortuso_2017 | irrelevant | 0 | 0 | The paper describes a mechanosensitive chemical sensor (polydiacetylene) using a phospholipid derivative, not a pharmacokinetic study of phospholipids as a drug. |
| popPK | Ouguerram_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of apoB100-containing lipoproteins (VLDL, IDL, LDL) in response to n-3 fatty acid supplementation, not the pharmacokinetics of phospholipids as a subject drug. |
| popPK | Palatini_1992 | irrelevant | 2 | 0 | The paper is a review discussing the mechanisms and modeling challenges of liposome disposition without reporting original quantitative pharmacokinetic parameter values. |
| PGx | Parajuli_2021 | not_relevant | 0 | 0 | The study investigates genetic associations with biomarkers of environmental contaminants and nutrients, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Parapob_2026 | irrelevant | 0 | 0 | The paper is a review on the pathogenesis of preeclampsia and does not contain pharmacokinetic data for phospholipids. |
| PD | Parapob_2026 | not_relevant | 0 | 0 | The paper is a mechanistic review of oxidative stress in preeclampsia and does not report any pharmacodynamic or exposure-response data for phospholipids or any other drug. |
| popPK | Parikh_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of omega-3 fatty acids (EPA and DHA), not phospholipids. |
| popPK | Pawlosky_2003 | irrelevant | 0 | 0 | The study investigates the kinetics of n-3 fatty acid metabolism, not the pharmacokinetics of phospholipids. |
| popPK | Pawlosky_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of n-3 essential fatty acids (specifically d5-18:3n-3), not the drug phospholipids. |
| popPK | Pein_2017 | irrelevant | 0 | 0 | The study investigates the mechanistic role of phospholipid composition in Akt signaling and is not a pharmacokinetic study of phospholipids as a drug. |
| PGx | Pingitore_2019 | not_relevant | 0 | 0 | The paper is a review of the PNPLA3 gene's role in liver disease and lipid metabolism, not a study on the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Qiao_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of protein-lipid binding affinity (Kir3.2 and phosphatidylinositides) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for phospholipids as a drug. |
| PGx | Qiao_2026 | not_relevant | 0 | 0 | The study investigates the association between genetic predisposition to coffee consumption and atherosclerosis risk, not the pharmacokinetic or pharmacodynamic effects of a specific drug on phospholipids. |
| PGx | Quignard-Boulange_1989 | not_relevant | 0 | 0 | The paper studies fatty acid metabolism in obese rats, not the effect of a gene variant on the PK/PD of a specific drug. |
| popPK | Rappaport_1986 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Rappaport_1986 | not_relevant | 0 | 0 | The paper investigates the effects of parathyroid hormone and calcitonin on inositol phospholipid metabolism, not the pharmacodynamics of phospholipids as a drug. |
| PGx | Rasouli_2023 | not_relevant | 0 | 0 | The paper describes structural and molecular dynamics simulations of ABCG2 interactions with lipids and drugs, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Rehfeldt_1993 | irrelevant | 0 | 0 | The paper is a biochemical study on the purification and characterization of phospholipase A2 enzyme activity in cell lines, not a pharmacokinetic study of phospholipids as a drug. |
| PD | Rehfeldt_1993 | not_relevant | 0 | 0 | The paper characterizes the biochemical properties and substrate specificity of a purified enzyme (PLA2), not a pharmacodynamic exposure-response relationship for a drug. |
| popPK | Richter_2014 | irrelevant | 0 | 0 | The study investigates the mechanism of action of riluzole on TRPC5 channels in vitro, and phospholipids are only mentioned as a known modulator, not as the subject of a pharmacokinetic study. |
| PGx | Rivas_2020 | not_relevant | 0 | 0 | The paper investigates lipidomic changes in cancer cells due to gene knockdown (macroH2A1/FAK) but does not report pharmacokinetic or pharmacodynamic parameters of a specific drug. |
| popPK | Rivero-Pino_2025 | irrelevant | 0 | 0 | The paper characterizes the nutritional composition of algae and does not report pharmacokinetic parameters for phospholipids. |
| PD | Rivero-Pino_2025 | not_relevant | 0 | 0 | The paper characterizes the nutritional composition and bioactive potential of algae, reporting an EC50 for antioxidant activity, but does not report a pharmacodynamic exposure-response or dose-response relationship for a specific drug or phospholipid in a biological system. |
| popPK | Riya_2023 | irrelevant | 0 | 0 | The paper is a phytochemical and antioxidant analysis of a plant, not a pharmacokinetic study of phospholipids. |
| PD | Riya_2023 | not_relevant | 0 | 0 | The paper reports phytochemical composition and in vitro antioxidant assays (e.g., DPPH EC50) for plant extracts, but does not report a pharmacodynamic exposure-response or dose-response relationship for a drug in a biological system. |
| PD | Roach_2021 | not_relevant | 0 | 0 | The paper describes the synthesis and surface characterization (NMR, SERS) of phospholipid-coated gold nanorods, containing no pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Rooney_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phospholipase D activation and surfactant secretion in rat cells, not a pharmacokinetic study of phospholipids as a drug. |
| popPK | Ryan_2026 | irrelevant | 0 | 0 | The paper is a protocol for a prescribing appropriateness study in older adults with intellectual disability and contains no pharmacokinetic data for phospholipids. |
| PD | Ryan_2026 | not_relevant | 0 | 0 | The paper describes a protocol for applying a prescribing criteria tool (OPTIMA-ID) to observational data and contains no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Saleh_2023 | irrelevant | 0 | 0 | The study focuses on a PBPK model for 10 specific drugs (e.g., cyclophosphamide, methotrexate) in mice and does not involve phospholipids. |
| PD | Saleh_2023 | not_relevant | 0 | 0 | The paper focuses on physiologically-based pharmacokinetic (PBPK) modeling to predict drug concentrations in brain extracellular fluid, but it does not report any pharmacodynamic (PD) or exposure-response relationships, nor does it provide numeric PD parameters. |
| PGx | Saneto_2022 | not_relevant | 0 | 0 | The paper describes a genetic variant (SERAC1) affecting endogenous phospholipid metabolism and mitochondrial function, not the pharmacokinetics or pharmacodynamics of an exogenous drug. |
| popPK | Sarosiek_1984 | irrelevant | 0 | 0 | The study investigates the biophysical effect of phospholipids on hydrogen ion diffusion in gastric mucus, not the pharmacokinetics of phospholipids as a drug. |
| PGx | Schooneveldt_2025 | not_relevant | 0 | 0 | The paper investigates the genetic architecture of endogenous ether lipid metabolism in obesity, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Seeßle_2020 | not_relevant | 0 | 0 | The study investigates the association between PNPLA3 genotype and lipid levels in hereditary hemochromatosis, but does not report a pharmacogenomic effect on the PK/PD of a specific drug. |
| PGx | Sevrioukova_2015 | not_relevant | 0 | 0 | The paper investigates the structural and functional effects of citrate (an anion) on CYP3A4 activity, not the impact of a gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| popPK | She_2025 | irrelevant | 0 | 0 | The study investigates the antimicrobial mechanism of bunamidine hydrochloride targeting bacterial phospholipids, not the pharmacokinetics of phospholipids as a drug. |
| PD | She_2025 | not_relevant | 2 | 1 | The paper reports MICs and qualitative membrane disruption mechanisms but lacks a formal PK/PD model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for the drug's pharmacodynamic effect. |
| popPK | Sheng_2020 | irrelevant | 0 | 0 | The study investigates the mechanism of action of a Chinese medicine (DZSM) and its active ingredients (4,5-CQA and scutellarin) on neurotransmitter synapses, with no pharmacokinetic modeling or quantitative disposition parameters for phospholipids. |
| popPK | Shinto_2024 | irrelevant | 0 | 0 | The study investigates the clinical efficacy of omega-3 fatty acids on brain lesions, not the pharmacokinetics of phospholipids. |
| popPK | Siheri_2019 | irrelevant | 0 | 0 | The paper is a phytochemical and pharmacological study of propolis compounds against parasites, not a pharmacokinetic study of phospholipids. |
| PD | Siheri_2019 | not_relevant | 3 | 2 | The paper reports single-point EC50 values for anti-trypanosomal activity and qualitative metabolomics data on phospholipid metabolism, but lacks a dose-response curve or PK/PD model for phospholipids. |
| popPK | Snider_1986 | irrelevant | 0 | 0 | The study investigates the mechanism of neurotensin receptor signaling (inositol phospholipid metabolism) in cell lines, not the pharmacokinetics of phospholipids as a drug. |
| PGx | Sprenger_2025 | not_relevant | 0 | 0 | The paper is a review of lipid metabolism in Alzheimer's disease and does not report pharmacogenomic effects on the PK or PD of a specific drug. |
| PD | Talandashti_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of dietary supplements for migraine prophylaxis and does not report pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships for phospholipids. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements in breast cancer and does not report pharmacokinetic parameters for phospholipids. |
| PD | Talath_2026 | not_relevant | 1 | 0 | The paper is a narrative review of natural supplements in breast cancer that discusses mechanisms and preclinical models but does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for phospholipids or any other specific drug. |
| PGx | Tamarindo_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of DHA on prostate cancer cells and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Tambini_2016 | not_relevant | 0 | 0 | The paper investigates the effect of the ApoE4 genotype on endogenous phospholipid synthesis and mitochondrial function in the context of Alzheimer's disease, not the pharmacokinetics or pharmacodynamics of an administered drug. |
| PGx | Temesszentandrási-Ambrus_2023 | not_relevant | 0 | 0 | The paper describes an in vitro assay for ABCB4 transport function and drug interactions, but does not report pharmacogenomic effects of gene variants on PK/PD parameters in humans. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The study investigates the antimicrobial mechanism of candesartan cilexetil against MRSA, not the pharmacokinetics of phospholipids. |
| PD | Thesing_2018 | not_relevant | 3 | 2 | The study reports linear regression associations between biomarkers and fatty acid levels, not a pharmacodynamic exposure-response model with parameters like Emax or EC50. |
| PD | Thomas_2017 | not_relevant | 2 | 1 | The paper is a review of SHIP2 biology and structure; it mentions sub-micromolar IC50 values for inhibitors but does not provide specific numeric PD parameters, exposure-response curves, or PK/PD modeling data. |
| popPK | Trentin_2025 | irrelevant | 0 | 0 | The paper is an in-vitro bioactivity and chemical profiling study of microalgae extracts, not a pharmacokinetic study of phospholipids. |
| PGx | Vallejo-Vaz_2020 | not_relevant | 0 | 0 | The paper reviews the association between triglyceride levels and cardiovascular risk, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of a phospholipid drug. |
| popPK | Van_2016 | irrelevant | 0 | 0 | The paper investigates the mechanism of PUVA-induced phospholipid modification and its effect on cell signaling, not the pharmacokinetics (disposition parameters) of phospholipids. |
| PGx | Verkerke_2024 | not_relevant | 0 | 0 | The paper investigates the physiological role of the SLC25A48 transporter in choline metabolism and mitochondrial function, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Vesnina_2022 | not_relevant | 0 | 0 | The paper is a review on nutrition and atherosclerosis, not a pharmacogenomic study of a drug's PK/PD. |
| PGx | Vidimce_2022 | not_relevant | 0 | 0 | The paper investigates the effect of a genetic mutation (Gunn rat) on endogenous lipid metabolism, not the pharmacokinetics or pharmacodynamics of an exogenous drug. |
| popPK | Villapiano_2026 | irrelevant | 0 | 0 | The paper is a review of nanoemulsion formulation principles and does not report pharmacokinetic parameters for phospholipids. |
| PD | Villapiano_2026 | not_relevant | 0 | 0 | The paper is a review on the formulation and physicochemical properties of green nanoemulsions and does not report any pharmacodynamic or exposure-response data for phospholipids. |
| popPK | Vujasinović_2012 | irrelevant | 0 | 0 | The paper is a food science study on pumpkin seed roasting and reports phospholipid content in oil, not pharmacokinetic parameters. |
| PD | Vujasinović_2012 | not_relevant | 0 | 0 | The paper describes food processing optimization (roasting conditions) and reports an antioxidant assay value (EC50 for DPPH), which is not a pharmacodynamic drug exposure-response relationship. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro ion transport mechanism of a synthetic phospholipid derivative, not the pharmacokinetics of a drug. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of omega-3 polyunsaturated fatty acids (PUFA), not phospholipids. |
| PGx | Watanabe_2020 | not_relevant | 0 | 0 | The paper studies plant physiology and metabolomics in rice, not human pharmacogenomics or drug PK/PD. |
| PD | Wei_2023 | not_relevant | 3 | 2 | The paper reports epidemiological dose-response associations (hazard/relative risks per unit intake) for omega-3 fatty acids, but these are not pharmacodynamic parameters (e.g., Emax, EC50) for a specific drug's concentration-effect relationship in the context of PK/PD modeling. |
| PGx | Welsh_1994 | not_relevant | 0 | 0 | The paper describes a metabolic deficiency in a specific cell line (MCF-7) regarding ether lipid biosynthesis, but does not report a pharmacogenomic effect of a gene variant on the PK or PD of a specific drug. |
| popPK | Wen_2026 | irrelevant | 0 | 0 | The study focuses on developing a physiologically based liver distribution model for various drugs using FABP1 binding, not on the pharmacokinetics of phospholipids as a subject drug. |
| PD | Wen_2026 | not_relevant | 0 | 0 | The paper focuses on physiologically based pharmacokinetic (PBPK) modeling of drug distribution (Kp) and binding to FABP1, not on pharmacodynamic (exposure-response or dose-response) effects. |
| PGx | Wiesmann_2016 | not_relevant | 0 | 0 | The paper investigates the effect of a dietary intervention on brain function in ApoE4 mice, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The study investigates the effect of a drug (silybin) on P450 activity in a disease model (NAFLD) and does not report any pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| PGx | Xia_2024 | not_relevant | 0 | 0 | The paper investigates the effect of omega-3 fatty acids on PAH-induced carcinogenesis and does not report pharmacogenomic effects on the PK/PD of phospholipids. |
| PGx | Xiang_2021 | not_relevant | 0 | 0 | The paper discusses Gilbert's syndrome and bilirubin metabolism, not the pharmacokinetics or pharmacodynamics of phospholipids as a drug. |
| popPK | Xing_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phospholipase A2 activity and arachidonic acid release, not a pharmacokinetic study of phospholipids as a drug. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper is a review on metabolomics in diabetes and does not report pharmacokinetic parameters for phospholipids. |
| PD | Xu_2025 | not_relevant | 0 | 0 | The paper is a review of metabolomics in diabetes and does not report any pharmacodynamic or exposure-response analysis for phospholipids. |
| PGx | Xue_2024 | not_relevant | 0 | 0 | The study investigates the effects of a grape seed extract on CYP3A4 activity and inflammatory markers in smokers, but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yan_2025 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of melatonin receptor gene variants on glucose and lipid metabolism, not the pharmacokinetic or pharmacodynamic parameters of a specific drug. |
| PD | Yan_2025_2 | not_relevant | 3 | 2 | The study analyzes dietary intake (dose) rather than drug exposure/concentration, and the reported beta coefficients are regression estimates for categorical tertiles rather than pharmacodynamic parameters (e.g., Emax, EC50) for a specific drug. |
| popPK | Yaradanakul_2008 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study on calcium-induced membrane fusion in BHK fibroblasts, not a pharmacokinetic study of phospholipids as a drug. |
| PGx | Yeh_2025 | not_relevant | 0 | 0 | The paper investigates the physical chemistry of lipid membrane phase transitions induced by butyl methacrylate, not the pharmacogenomic effects of gene variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yin_2026 | not_relevant | 0 | 0 | The paper investigates the effect of a gene knockout on lipid metabolism and disease phenotype, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Yoshioka_1983 | not_relevant | 0 | 0 | The paper describes a genetic defect in Drosophila affecting phospholipid metabolism, but it does not involve a drug or report pharmacokinetic/pharmacodynamic parameters. |
| popPK | Young_2017 | irrelevant | 0 | 0 | The study is a clinical trial on behavioral outcomes in youth with depression, not a pharmacokinetic study of phospholipids. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| PD | Zhang_2021 | not_relevant | 0 | 0 | The paper analyzes the association between mercury exposure and diabetes risk, not the pharmacodynamic response of a drug to phospholipids. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study on dietary omega-3 fatty acid intake and cardiovascular-kidney-metabolic syndrome, not a pharmacokinetic study of phospholipids. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The study investigates oxylipins (fatty acid metabolites) in mouse uterine tissue, not the pharmacokinetics of the drug phospholipids. |
| PGx | de_2023 | not_relevant | 0 | 0 | The paper is a review on the genetic and epigenetic regulation of the innate immune response to gout (uric acid), not a pharmacogenomic study of a drug's PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 15:40 UTC</sub>
