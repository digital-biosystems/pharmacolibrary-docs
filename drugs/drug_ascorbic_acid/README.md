<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11G&quot;,&quot;href&quot;:&quot;atc/A11G.md&quot;},{&quot;label&quot;:&quot;ascorbic acid&quot;}]"></div>

# ascorbic acid

- **generic name:** ascorbic acid
- **ATC codes:** `A11GA01`, `A11GB01`, `G01AD03`, `S01XA15`
- **DrugBank:** [DB00126](https://go.drugbank.com/drugs/DB00126) · **PubChem:** [CID 54670067](https://pubchem.ncbi.nlm.nih.gov/compound/54670067)
- **molar mass:** 176.1241 g/mol (C6H8O6) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Ascorbic acid, better known as vitamin C, is a water-soluble vitamin and antioxidant that the body needs to make collagen and support the immune system. It is widely used as a dietary supplement and approved medicine, and is also applied in gynecological and eye preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q199678](https://www.wikidata.org/wiki/Q199678) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 07:26 | 3:01 | 0/1/0 | 0/0/0 | 0/0/0 | 81,666/3,890 | ollama / qwen3.8:27b-mtp-q8_0 | 34 | 38/2 | 22/12 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Bluck_1996_reference](drugs/drug_ascorbic_acid/AscorbicAcid_Bluck1996_reference.md) | — | 1-compartment (no model) | 1 | Bluck LJ et al., Measurement of ascorbic acid kinetics i…, Journal of mass spectrometr… (1996) | [10.1002/(SICI)1096-9888(199607)31:7&lt;741::AID-JMS352&gt;3.0.CO;2-H](https://doi.org/10.1002/(SICI)1096-9888(199607)31:7&lt;741::AID-JMS352&gt;3.0.CO;2-H) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ascorbic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALKBH2 (activator), ALKBH3 (activator), BBOX1 (cofactor), DBH (cofactor), DNA (cleavage), EGLN1 (cofactor), EGLN2 (cofactor), EGLN3 (cofactor), KDM5D (cofactor), OGFOD1 (cofactor), OGFOD2 (cofactor), P3H1 (cofactor), P3H2 (cofactor), P3H3 (cofactor), P4HA1 (cofactor), P4HTM (cofactor), PAM (cofactor), PHYH (cofactor), PLOD1 (cofactor), PLOD2 (cofactor), PLOD3 (cofactor), SLC23A1 (modulator), SLC23A1 (substrate), SLC23A2 (modulator), SLC23A2 (substrate), SLC2A1 (substrate), SLC2A3 (substrate), SLC2A4 (substrate), TMLHE (cofactor), TXNRD1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2245 matched, 70 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Toutain_1997.pdf` | Toutain PL et al., Ascorbic acid disposition kinetics in t…, The American journal of phy… (1997) | popPK | 10 | [10.1152/ajpregu.1997.273.5.R1585](https://doi.org/10.1152/ajpregu.1997.273.5.R1585) | [9374798](https://pubmed.ncbi.nlm.nih.gov/9374798) | The paper reports quantitative pharmacokinetic parameters (Cl, Vss, MRT) for ascorbic acid in calves with specific numeric values provided in the text. |
| `Bluck_1996.pdf` | Bluck LJ et al., Measurement of ascorbic acid kinetics i…, Journal of mass spectrometr… (1996) | popPK | 8 | [10.1002/(SICI)1096-9888(199607)31:7&lt;741::AID-JMS352&gt;3.0.CO;2-H](https://doi.org/10.1002/(SICI)1096-9888(199607)31:7<741::AID-JMS352>3.0.CO;2-H) | [8799306](https://pubmed.ncbi.nlm.nih.gov/8799306) | The study reports a three-compartment model for ascorbic acid in humans, but the specific numeric parameter values are not present in the provided evidence. |
| `Abidin_2022.pdf` | Abidin IZZ et al., A Comparative Analysis of Ascorbic Acid…, Current stem cell research… (2022) | pd | 4 | [10.2174/1574888X17666220124141310](https://doi.org/10.2174/1574888X17666220124141310) | [35068396](https://www.ncbi.nlm.nih.gov/pubmed/35068396) | metadata signals extractable PD data (IC50) |
| `Britto-Júnior_2024.pdf` | Britto-Júnior J et al., Epithelium-derived 6-nitrodopamine modu…, Life sciences (2024) | pd | 4 | [10.1016/j.lfs.2024.122695](https://doi.org/10.1016/j.lfs.2024.122695) | [38710285](https://www.ncbi.nlm.nih.gov/pubmed/38710285) | metadata signals extractable PD data (Emax) |
| `Chen_2024.pdf` | Chen Y et al., New Bioactive Polyketides from the Mang…, Marine drugs (2024) | pd | 4 | [10.3390/md22090384](https://doi.org/10.3390/md22090384) | [39330265](https://www.ncbi.nlm.nih.gov/pubmed/39330265) | metadata signals extractable PD data (EC50) |
| `Kazunin_2022.pdf` | Kazunin MS et al., Тhio-containing pteridines: Synthesis,…, Archiv der Pharmazie (2022) | pd | 4 | [10.1002/ardp.202200252](https://doi.org/10.1002/ardp.202200252) | [36166689](https://www.ncbi.nlm.nih.gov/pubmed/36166689) | metadata signals extractable PD data (IC50) |
| `Masalu_2012.pdf` | Masalu RJ et al., Indigenous to Tanzania, Tanzania journal of health… (2012) | pd | 4 | not captured | [26591744](https://www.ncbi.nlm.nih.gov/pubmed/26591744) | metadata signals extractable PD data (EC50) |
| `Matowane_2022.pdf` | Matowane GR et al., Complexation potentiated promising anti…, Diabetic medicine : a journ… (2022) | pd | 4 | [10.1111/dme.14905](https://doi.org/10.1111/dme.14905) | [35748705](https://www.ncbi.nlm.nih.gov/pubmed/35748705) | metadata signals extractable PD data (IC50) |
| `Nguyen_2022.pdf` | Nguyen ATL et al., Valorization of seed and kernel marcs a…, Food chemistry (2022) | pd | 4 | [10.1016/j.foodchem.2022.133168](https://doi.org/10.1016/j.foodchem.2022.133168) | [35569394](https://www.ncbi.nlm.nih.gov/pubmed/35569394) | metadata signals extractable PD data (EC50) |
| `Ramorobi_2022.pdf` | Ramorobi LM et al., Bioactive synergism between zinc minera…, Journal of food biochemistry (2022) | pd | 4 | [10.1111/jfbc.14360](https://doi.org/10.1111/jfbc.14360) | [35929608](https://www.ncbi.nlm.nih.gov/pubmed/35929608) | metadata signals extractable PD data (IC50) |
| `Rozimamat_2019.pdf` | Rozimamat R et al., New compound from Euphorbia alatavica B…, Natural product research (2019) | pd | 4 | [10.1080/14786419.2018.1455039](https://doi.org/10.1080/14786419.2018.1455039) | [29577751](https://www.ncbi.nlm.nih.gov/pubmed/29577751) | metadata signals extractable PD data (IC50) |
| `Wen_2021.pdf` | Wen YT et al., Effect of ascorbic acid on tyrosinase a…, Journal of food biochemistry (2021) | pd | 4 | [10.1111/jfbc.13995](https://doi.org/10.1111/jfbc.13995) | [34730855](https://www.ncbi.nlm.nih.gov/pubmed/34730855) | metadata signals extractable PD data (IC50) |
| `Ebenuwa_2023.pdf` | Ebenuwa I et al., Vitamin C Urinary Loss in Fabry Disease…, The Journal of nutrition (2023) | pgx | 8 | [10.1016/j.tjnut.2022.12.009](https://doi.org/10.1016/j.tjnut.2022.12.009) | [37229630](https://www.ncbi.nlm.nih.gov/pubmed/37229630) | metadata signals extractable PGX data (SLC23A1, PK/PD-context) |
| `Pirmohamed_1995.pdf` | Pirmohamed M et al., Metabolism and bioactivation of clozapi…, The Journal of pharmacology… (1995) | pgx | 5 | not captured | [7891353](https://www.ncbi.nlm.nih.gov/pubmed/7891353) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-05T07:24:43.805285+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2026 | irrelevant | 0 | 0 | The paper is a clinical study on intense pulsed light therapy for meibomian gland dysfunction and contains no pharmacokinetic data for ascorbic acid. |
| PGx | Alcântara_2015 | not_relevant | 0 | 0 | The paper investigates the agronomic effects of ascorbic acid seed priming on maize aluminum tolerance, not the pharmacokinetics or pharmacodynamics of ascorbic acid in humans or animals. |
| PD | Andriolo_2024 | not_relevant | 0 | 0 | The paper is a narrative review discussing preclinical and clinical findings, explicitly stating that dose-response curves and ED50 values were not determined in the cited studies, and contains no population pharmacodynamic modeling. |
| PGx | Attri_2006 | not_relevant | 0 | 0 | The paper investigates oxidative stress and erythrocyte metabolism in Wilson disease, mentioning ascorbic acid levels only as a general antioxidant marker, not as a pharmacokinetic or pharmacodynamic parameter influenced by a specific gene variant. |
| PD | Bendich_1990 | not_relevant | 2 | 1 | The paper is a meta-analysis of published literature describing dose-response relationships and statistical comparisons, but it does not report a formal population pharmacodynamic model (e.g., NONMEM) with estimated structural PD parameters like Emax or EC50. |
| popPK | Bluck_1996 | relevant | 8 | 0 | The study reports a three-compartment model for ascorbic acid in humans, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Britto-Júnior_2024 | irrelevant | 0 | 0 | The study is a pharmacological investigation of catecholamine release and smooth muscle contraction in seminal vesicles, where ascorbic acid is used only as a stabilizer in the bath solution, not as the subject of pharmacokinetic analysis. |
| PD | Britto-Júnior_2024 | not_relevant | 0 | 0 | The paper reports concentration-response data for catecholamines (6-ND, NA, etc.), not for ascorbic acid, which is only used as a component of the bath solution. |
| PGx | Carson_1981 | not_relevant | 0 | 0 | The paper focuses on the toxicology of primaquine and 8-aminoquinolines, mentioning ascorbic acid only as a comparative agent in in vitro studies, not as the primary drug of interest for pharmacogenomic analysis. |
| popPK | Chaudhary_2020 | irrelevant | 0 | 0 | The study is a phytochemical and antioxidant profiling of Ocimum sanctum extracts, using ascorbic acid only as a reference standard for antioxidant activity, not as a subject of pharmacokinetic analysis. |
| PD | Chaudhary_2020 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant assays and phytochemical analysis of plant extracts, not a population pharmacodynamic or exposure-response model for ascorbic acid. |
| popPK | Chen_2024 | irrelevant | not captured | not captured | Ascorbic acid is only used as an in vitro positive control for antioxidant assays, with no pharmacokinetic parameters reported. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper reports on the isolation and structural elucidation of natural products from a fungus, with ascorbic acid used only as a positive control in in vitro assays; it does not contain any population pharmacokinetic or pharmacodynamic modeling. |
| PGx | Chioti_2022 | not_relevant | 0 | 0 | The paper studies genetic variation in eggplant cultivars and its effect on phytochemical content, not the pharmacokinetics or pharmacodynamics of ascorbic acid in humans. |
| PGx | Conklin_1997 | not_relevant | 0 | 0 | The paper studies ascorbic acid biosynthesis in plants (Arabidopsis), not human pharmacogenomics or drug PK/PD. |
| PGx | Cruz-Camino_2020 | not_relevant | 0 | 0 | The paper discusses a genetic disorder (Hawkinsinuria) and mentions ascorbic acid as a dietary supplement, but does not report a pharmacogenomic effect of a gene variant on the PK or PD of ascorbic acid. |
| PGx | De_2001 | not_relevant | 0 | 0 | The paper discusses general cancer prevention mechanisms and GSTM1 genotype effects on DNA adducts, but does not report pharmacokinetic or pharmacodynamic parameters for ascorbic acid. |
| PGx | Deng_2022 | not_relevant | 0 | 0 | The paper studies ascorbic acid biosynthesis in kiwifruit plants, not human pharmacogenomics or drug PK/PD. |
| popPK | Djaldetti_1998 | irrelevant | not captured | not captured | Ascorbic acid is only mentioned as a co-formulated agent for levodopa, and the paper contains no quantitative pharmacokinetic data for it. |
| popPK | Dryburgh_1985 | irrelevant | not captured | not captured | The paper is a clinical literature review focusing on therapeutic benefits and dietary factors of vitamin C, containing no quantitative pharmacokinetic data or modeling. |
| popPK | Du_2012 | irrelevant | not captured | not captured | This is a review article that qualitatively discusses ascorbic acid's mechanisms and cites pharmacokinetic data without presenting original quantitative parameters or models. |
| PGx | Hammami_2024 | not_relevant | 0 | 0 | The paper reviews adverse reactions to rasburicase in G6PD deficiency and mentions ascorbic acid only as a potential treatment with limited benefit, without reporting any pharmacogenomic effects on ascorbic acid's PK or PD parameters. |
| PGx | Hamza_2022 | not_relevant | 0 | 0 | The paper is a case report on phenazopyridine-induced methaemoglobinaemia treated with vitamin C and does not report any pharmacogenomic effects on the PK or PD of ascorbic acid. |
| PGx | Hesari_2023 | not_relevant | 0 | 0 | The paper studies ascorbic acid biosynthesis and recycling in cucumber plants, not the pharmacokinetics or pharmacodynamics of ascorbic acid as a drug in humans. |
| PGx | Höller_2014 | not_relevant | 0 | 0 | The paper investigates plant physiology (rice ascorbic acid metabolism under zinc stress), not human pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| PGx | Juneja_2022 | not_relevant | 0 | 0 | The paper is a review of adverse events (hemolysis) associated with Vitamin C use, particularly in G6PD deficiency, but it does not report pharmacokinetic or pharmacodynamic parameter changes driven by genetic variants. |
| popPK | Jungert_2020 | irrelevant | not captured | not captured | The paper analyzes longitudinal determinants of steady-state plasma vitamin C concentrations using statistical mixed-effects models rather than reporting quantitative pharmacokinetic disposition parameters or population-PK modeling. |
| popPK | Kazunin_2022 | irrelevant | 0 | 0 | The paper is a synthetic chemistry and in vitro biological activity study of thio-containing pteridines, where ascorbic acid is used only as a reference compound for antiradical activity, not as the subject of a pharmacokinetic study. |
| PD | Kazunin_2022 | not_relevant | 0 | 0 | The paper reports IC50/EC50 values for novel thio-containing pteridines, using ascorbic acid only as a reference standard for antiradical activity, and does not report a pharmacodynamic or exposure-response relationship for ascorbic acid itself. |
| PGx | Keats_2024 | not_relevant | 0 | 0 | The paper is a case report comparing the efficacy of ascorbic acid versus methylene blue for methemoglobinemia and does not report any pharmacogenomic effects (gene variants) on the PK or PD of ascorbic acid. |
| PGx | Khan_2017 | not_relevant | 0 | 0 | The paper discusses rasburicase-induced methemoglobinemia in G6PD deficiency and mentions ascorbic acid only as a treatment, without reporting any pharmacogenomic effect on ascorbic acid's PK or PD parameters. |
| PGx | Kováčik_2023 | not_relevant | 0 | 0 | The paper studies mercury toxicity in lichens and does not involve human pharmacogenomics or the pharmacokinetics/pharmacodynamics of ascorbic acid as a drug. |
| PGx | Langasco_2022 | not_relevant | 0 | 0 | The paper focuses on analytical methods for arsenic determination in soil and rice, where ascorbic acid is used as a reagent, not as a drug subject to pharmacogenomic analysis. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper investigates cold stress responses in bermudagrass genotypes and does not involve ascorbic acid pharmacokinetics or pharmacodynamics. |
| popPK | Lykkesfeldt_2025 | irrelevant | not captured | not captured | The paper is a narrative review that discusses vitamin C pharmacology qualitatively without presenting original quantitative population or compartmental pharmacokinetic parameters. |
| PGx | Ma_2022 | not_relevant | 0 | 0 | The paper studies the effects of chemical treatments (SNP, NaHS) on chromium stress in spinach plants, not the pharmacogenomics of ascorbic acid in humans. |
| popPK | Masalu_2012 | irrelevant | 0 | 0 | The study evaluates the free radical scavenging capacity of fungal extracts using ascorbic acid only as a reference standard for EC50 values, not as a subject of pharmacokinetic analysis. |
| PD | Masalu_2012 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) of fungal extracts using ascorbic acid only as a reference standard, not a pharmacodynamic or exposure-response analysis of ascorbic acid itself. |
| PD | Mata_2016 | not_relevant | 0 | 0 | The paper is a systematic review of clinical and non-clinical studies, not an original population pharmacodynamic modeling study with estimated parameters. |
| popPK | Matowane_2022 | irrelevant | 0 | 0 | The study investigates the anti-diabetic and anti-oxidative properties of a zinc-ferulic acid complex, with ascorbic acid serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Matowane_2022 | not_relevant | 0 | 0 | The paper investigates a zinc-ferulic acid complex and does not report any pharmacodynamic or exposure-response data for ascorbic acid. |
| PGx | Mehta_1990 | not_relevant | 0 | 0 | The text describes a clinical case report of ascorbic acid-induced hemolysis in G6PD deficiency, which is a pharmacogenomic adverse event, but it does not report quantitative changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| PGx | Mekasha_2020 | not_relevant | 0 | 0 | The paper describes a bacterial enzyme for chitin degradation and is unrelated to ascorbic acid pharmacogenomics. |
| popPK | Miyaue_2022 | irrelevant | not captured | not captured | The paper reports pharmacokinetic data only for levodopa, using ascorbic acid solely as a co-administered stabilizer without any PK parameters for ascorbic acid itself. |
| popPK | Moghrabi_2022 | irrelevant | 0 | 0 | The study is an in vitro investigation of dasatinib bioavailability where ascorbic acid is used as a co-administered agent to modify pH, not as the subject drug for PK parameter estimation. |
| popPK | Morshed_2023 | irrelevant | 0 | 0 | The paper describes an enzymatic biofuel cell for glucose sensing and only mentions ascorbic acid as an interferent in a selectivity test, providing no pharmacokinetic parameters. |
| popPK | Mulyukov_2018 | irrelevant | not captured | not captured | The paper focuses exclusively on ranibizumab pharmacokinetics and pharmacodynamics for neovascular age-related macular degeneration and contains no data on ascorbic acid. |
| popPK | Nagel_2020 | irrelevant | not captured | not captured | The paper reports only sparse plasma concentrations and clinical outcomes without deriving quantitative pharmacokinetic parameters or population models. |
| popPK | Nguimbou_2014 | irrelevant | 0 | 0 | The paper is a food chemistry study on taro mucilage where ascorbic acid is used only as a comparator for antioxidant activity, not a pharmacokinetic study. |
| PD | Nguimbou_2014 | not_relevant | 0 | 0 | The paper is an in vitro food chemistry study analyzing mucilage composition and antioxidant properties of taro, using ascorbic acid only as a chemical reference standard, not involving any pharmacokinetic or population pharmacodynamic modeling. |
| popPK | Nguyen_2022 | irrelevant | 0 | 0 | The study evaluates the antioxidant potential of plant extracts using ascorbic acid only as a reference standard, not as a subject of pharmacokinetic analysis. |
| PD | Nguyen_2022 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) for plant extracts, using ascorbic acid only as a reference standard, and does not report any pharmacokinetic or pharmacodynamic modeling of ascorbic acid in a biological system. |
| popPK | Olszewska_2025 | irrelevant | not captured | not captured | Ascorbic acid is used solely as a manufacturing additive for a platelet gel, with no pharmacokinetic parameters or modeling reported. |
| PGx | Ou_2025 | not_relevant | 0 | 0 | The paper studies plant physiology (wheat) and aluminum toxicity, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of ascorbic acid as a drug. |
| PGx | PMID36049896_2023 | not_relevant | 0 | 0 | The paper discusses G6PD genotype and medication safety (hemolysis risk) but does not report pharmacokinetic or pharmacodynamic parameters for ascorbic acid. |
| popPK | Patel_2012 | irrelevant | not captured | not captured | The paper evaluates gastrointestinal tolerability of aspirin co-administered with ascorbic acid and does not report quantitative pharmacokinetic parameters for ascorbic acid. |
| PGx | Pirmohamed_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of clozapine, not ascorbic acid, and ascorbic acid is only mentioned as an inhibitor of a specific reduction step. |
| popPK | Pogue_2015 | irrelevant | not captured | not captured | The paper focuses on colistin pharmacokinetics and clinical usage, containing no data or models for ascorbic acid. |
| popPK | Pozzer_2021 | irrelevant | not captured | not captured | The paper is a mechanistic review focusing on the cellular role of ascorbic acid in the endoplasmic reticulum and contains no quantitative pharmacokinetic data or modeling. |
| popPK | Ramorobi_2022 | irrelevant | 0 | 0 | The study focuses on the in vitro antioxidant and antihyperglycemic properties of a zinc-p-coumaric acid complex, with ascorbic acid serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Ramorobi_2022 | not_relevant | 0 | 0 | The paper investigates the synergistic effects of a zinc-p-coumaric acid complex, not ascorbic acid; ascorbic acid is only mentioned as a comparator for antioxidant activity. |
| popPK | Reynaerts_2022 | irrelevant | 0 | 0 | Ascorbic acid is used as a stabilizer/excipient in the iontophoresis solution, not as the subject drug for pharmacokinetic analysis. |
| popPK | Riedl_2022 | irrelevant | 0 | 0 | The paper investigates the impact of retinal fluid volume on vision in patients treated with ranibizumab, containing no pharmacokinetic data for ascorbic acid. |
| PD | Rozimamat_2019 | not_relevant | 0 | 0 | The paper reports in vitro phytochemical isolation and DPPH antioxidant assays (IC50 values), not a population pharmacodynamic or exposure-response model for ascorbic acid. |
| PGx | Sahoo_2022 | not_relevant | 0 | 0 | The paper is a computational study on drug combinations for SARS-CoV-2 and does not report any pharmacogenomic effects on the PK or PD of ascorbic acid. |
| PGx | Saleem_2022 | not_relevant | 0 | 0 | The paper studies the effect of ascorbic acid on sugarcane plants, not human pharmacogenomics or PK/PD parameters. |
| PGx | Sanahuja_2013 | not_relevant | 0 | 0 | The paper studies ascorbic acid metabolism in maize plants, not human pharmacokinetics or pharmacodynamics. |
| PGx | Santilli_2016 | not_relevant | 0 | 0 | The paper discusses the pharmacogenomics of folic acid and homocysteine, not ascorbic acid. |
| popPK | Scheers_2011 | irrelevant | not captured | not captured | The paper is an in-vitro mechanistic study on cellular transporters and does not report any systemic pharmacokinetic parameters or population/compartmental models for ascorbic acid. |
| PGx | Selvam_2002 | not_relevant | 0 | 0 | The paper discusses ascorbic acid as an antioxidant in the context of calcium oxalate stone pathogenesis and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Shenfield_1986 | irrelevant | not captured | not captured | The paper reviews drug interactions with oral contraceptives and does not report quantitative pharmacokinetic parameters for ascorbic acid. |
| popPK | Shenoy_2018 | irrelevant | not captured | not captured | This is a review article that discusses ascorbic acid pharmacokinetics qualitatively without reporting original quantitative population or compartmental PK parameters. |
| PGx | Skorupa_2022 | not_relevant | 0 | 0 | The paper studies ascorbate oxidase gene expression in plants (Beta vulgaris) under abiotic stress, not human pharmacogenomics or drug PK/PD. |
| PGx | Steelheart_2020 | not_relevant | 0 | 0 | The paper studies the effect of ascorbic acid on tomato fruit ripening in plants, not the pharmacokinetics or pharmacodynamics of ascorbic acid in humans or animals influenced by genetic variants. |
| popPK | Uckun_2021 | irrelevant | not captured | not captured | Ascorbic acid is only measured as an endogenous tissue biomarker affected by another drug, with no quantitative PK parameters reported. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic interactions of theophylline, not ascorbic acid, and does not report pharmacogenomic effects. |
| PGx | Vidhyashree_2022 | not_relevant | 0 | 0 | The paper reviews rasburicase-induced methemoglobinemia and mentions ascorbic acid only as a treatment, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Visclosky_2021 | not_relevant | 0 | 0 | The paper is a case report on primaquine toxicity in a G6PD deficient patient; it does not report pharmacogenomic effects on the PK or PD of ascorbic acid. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism of harmaline to harmine, where ascorbic acid is only mentioned as an inhibitor, not as the subject drug for PK parameter estimation. |
| PD | Wang_2022 | not_relevant | 0 | 0 | The paper describes the metabolic conversion of harmaline to harmine and notes that ascorbic acid inhibits this reaction, but it does not report a pharmacodynamic (exposure-response) relationship for ascorbic acid itself, nor does it provide numeric PD parameters (e.g., IC50, Emax) for ascorbic acid. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper studies a nucleobase-ascorbate transporter in barley plants regarding cadmium tolerance, not human pharmacogenomics of ascorbic acid. |
| popPK | Wilgus_1980 | irrelevant | not captured | not captured | The paper is a qualitative review of vitamin-disease interactions in poultry and contains no quantitative pharmacokinetic data for ascorbic acid. |
| popPK | Wilson_2014 | irrelevant | not captured | not captured | This is a narrative review that discusses vitamin C pharmacokinetics qualitatively without reporting original quantitative PK parameters or population models. |
| PD | Wu_2005 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity assays (IC50 values) for plant extracts, not a population pharmacodynamic or exposure-response model for ascorbic acid. |
| popPK | Xiao_2019 | irrelevant | not captured | not captured | The study focuses on designing an ascorbic acid-modified liposomal delivery system and does not report quantitative pharmacokinetic parameters for ascorbic acid itself. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The paper is a clinical study on conbercept for diabetic macular edema and does not report pharmacokinetic parameters for ascorbic acid. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper analyzes metabolic pathways and gene expression in strawberries, not the pharmacokinetics or pharmacodynamics of ascorbic acid in humans. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper focuses on the plant genome of seabuckthorn and the biosynthesis of ascorbic acid in the plant, not on human pharmacogenomics or the PK/PD of ascorbic acid as a drug. |
| popPK | Zhang_2023 | irrelevant | not captured | not captured | The study focuses on in vitro release kinetics and topical skin permeation of a novel formulation without reporting systemic pharmacokinetic or population-PK parameters. |
| popPK | Zucchi_2019 | irrelevant | not captured | not captured | The paper focuses exclusively on the pharmacokinetics of PDE5 inhibitors and contains no data on ascorbic acid. |
| PGx | Zuo_2024 | not_relevant | 0 | 0 | The paper investigates the causal relationship between serum metabolites and tinnitus risk using Mendelian randomization, not the pharmacokinetics or pharmacodynamics of ascorbic acid as a drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 07:24 UTC</sub>
