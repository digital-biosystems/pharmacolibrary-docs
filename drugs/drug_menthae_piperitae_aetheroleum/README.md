<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;menthae piperitae aetheroleum&quot;}]"></div>

# menthae piperitae aetheroleum

- **generic name:** menthae piperitae aetheroleum
- **ATC codes:** `A03AX15`
- **DrugBank:** [DB11198](https://go.drugbank.com/drugs/DB11198) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Peppermint oil, the essential oil of peppermint, is used for functional gastrointestinal disorders. It is an approved medicine and is also widely used as a food ingredient and herbal remedy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q353391](https://www.wikidata.org/wiki/Q353391) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:56 | 4:53 | 0/0/0 | 0/0/0 | 0/0/0 | 172,667/5,057 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 5/16 | 21/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=menthae_piperitae_aetheroleum) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 59 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shulman_2025.pdf` | Shulman RJ et al., Randomized trial: Peppermint oil (menth…, British journal of clinical… (2025) | popPK | 9 | [10.1002/bcp.70097](https://doi.org/10.1002/bcp.70097) | [40390282](https://pubmed.ncbi.nlm.nih.gov/40390282) | The study reports PK parameters (Cmax, Tmax, clearance, Vd) for menthol (active ingredient of peppermint oil) in children, but specific numeric values are not provided in the text, only qualitative descriptions and relative comparisons. |
| `Shulman_2022.pdf` | Shulman RJ et al., Randomised trial: Peppermint oil (menth…, British journal of clinical… (2022) | popPK | 8 | [10.1111/bcp.15076](https://doi.org/10.1111/bcp.15076) | [34528282](https://pubmed.ncbi.nlm.nih.gov/34528282) | The study reports pharmacokinetic parameters (half-life, AUC) for menthol, the active ingredient in peppermint oil (menthae piperitae aetheroleum), in children, with specific half-life values provided in the abstract. |
| `Wu_2010.pdf` | Wu JF et al., Bioequivalence evaluation of menthol af…, Arzneimittel-Forschung (2010) | popPK | 8 | [10.1055/s-0031-1296315](https://doi.org/10.1055/s-0031-1296315) | [20863003](https://pubmed.ncbi.nlm.nih.gov/20863003) | The study reports PK parameters (Cmax, Tmax, t1/2, MRT, AUC) for menthol (the main component of peppermint oil/menthae piperitae aetheroleum) in dogs, but the specific numeric values for these parameters are not listed in the provided evidence, only the relative bioavailability percentage. |

<sub>queue written 2026-10-04T12:56:30.929973+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | AboulFotouh_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of candesartan cilexetil, not menthae_piperitae_aetheroleum. |
| popPK | Almansob_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of silver nanoparticles using Mentha piperita extract, containing no pharmacokinetic data for the essential oil. |
| popPK | Alonso_2024 | irrelevant | 0 | 0 | The study focuses on toxicology, repellency, and in silico ADME predictions for Mentha arvensis oil components, not quantitative pharmacokinetic parameters (CL, V, ka) for menthae_piperitae_aetheroleum. |
| popPK | Ashara_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and formulation of chloramphenicol, not menthae_piperitae_aetheroleum. |
| popPK | Burbott_1969 | irrelevant | 0 | 0 | The study investigates the metabolic turnover of monoterpenes in peppermint plants (botany/plant physiology), not the pharmacokinetics of the drug in an animal or human host. |
| popPK | Chumpitazi_2018 | irrelevant | 1 | 0 | This is a review article discussing physiological effects and safety, and it does not report original quantitative pharmacokinetic parameters (CL, V, ka) for peppermint oil. |
| popPK | Croteau_1982 | irrelevant | 0 | 0 | The paper describes the enzymatic compartmentation of l-menthone metabolism in peppermint leaves (plant physiology), not the pharmacokinetics of the drug menthae_piperitae_aetheroleum in a biological host. |
| popPK | Croteau_1991 | irrelevant | 0 | 0 | The paper is a review of plant biochemistry and monoterpene metabolism in mint species, not a pharmacokinetic study of the drug in an animal or human host. |
| popPK | Davis_2005 | irrelevant | 0 | 0 | The paper describes the cloning and characterization of enzymes involved in the biosynthesis of menthol in peppermint plants, not the pharmacokinetics of menthae_piperitae_aetheroleum in an animal or human subject. |
| popPK | DeVault_1987 | irrelevant | 0 | 0 | The study investigates the effects of antireflux therapies on salivary function and does not involve menthae_piperitae_aetheroleum or its pharmacokinetics. |
| popPK | Dresser_2002 | irrelevant | 0 | 0 | The study investigates peppermint oil as a CYP3A4 inhibitor affecting the pharmacokinetics of the probe drug felodipine, rather than reporting the disposition parameters of peppermint oil itself. |
| popPK | Ferguson_2007 | irrelevant | 0 | 0 | The study focuses on the binding of pulegone and its metabolites to alpha2u-globulin in rat kidneys, not on the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Friedman_1991 | irrelevant | 0 | 0 | The paper is a clinical review of IBS treatment that mentions peppermint oil (menthae piperitae aetheroleum) only as a potential therapeutic agent without providing any pharmacokinetic data or quantitative disposition parameters. |
| popPK | Grigoleit_2005 | irrelevant | 2 | 0 | The paper describes general pharmacokinetic properties (absorption, elimination, metabolites) but does not report quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Han_2021 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of peppermint oil for reducing colonic spasms and does not report any pharmacokinetic parameters. |
| popPK | Henderson_2021 | irrelevant | 0 | 0 | The study analyzes breath washout of peppermint oil volatiles (menthol, menthone, etc.) for standardization purposes and does not report pharmacokinetic parameters (CL, V, ka) for the specific drug menthae_piperitae_aetheroleum. |
| popPK | Hiki_2011 | irrelevant | 0 | 0 | The study evaluates L-menthol (NPO-11), which is a different chemical entity from menthae_piperitae_aetheroleum (peppermint oil), and does not report quantitative PK parameters for the target drug. |
| popPK | Hudecová_2024 | irrelevant | 0 | 0 | The study investigates the in vitro antibacterial and antibiofilm activity of essential oils against fish pathogens, not the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Johnson_2017 | irrelevant | 0 | 0 | The paper is a study on the bioenergetics and biosynthesis of essential oils in plant trichomes, not a pharmacokinetic study of menthae_piperitae_aetheroleum in an animal or human subject. |
| popPK | Kapila_1984 | irrelevant | 0 | 0 | The study investigates the relationship between salivary flow and swallow rate in healthy volunteers and does not report pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Kobayashi_2011 | irrelevant | 0 | 0 | The study assesses fluoride ingestion from dentifrice in children and does not involve the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Krueger_2004 | irrelevant | 0 | 0 | The paper is a general review of complementary and alternative medicine and does not report any quantitative pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Kusuma_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on fluoride and calcium ion release from dental varnish, not a pharmacokinetic study of menthae_piperitae_aetheroleum. |
| popPK | Lan_2021 | irrelevant | 0 | 0 | The study is a breath metabolomics analysis of peppermint oil components (menthol, limonene, etc.) and does not report quantitative pharmacokinetic parameters (CL, V, ka) for menthae_piperitae_aetheroleum. |
| popPK | Liang_2024 | irrelevant | 0 | 0 | The study investigates the postharvest physiological effects of peppermint extract on pear fruit ripening, not the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Martinkus_1981 | irrelevant | 0 | 0 | The study is an in-vitro plant physiology investigation of enzyme kinetics and compartmentation in peppermint leaves, not a pharmacokinetic study of the drug in an animal or human host. |
| popPK | Mascher_2001 | irrelevant | 2 | 2 | The study reports PK parameters for menthol and carvone (constituents) rather than the total peppermint oil (menthae_piperitae_aetheroleum) as a single entity, and lacks compartmental parameters like CL or V. |
| popPK | Mascher_2002 | irrelevant | 2 | 2 | The study reports PK parameters for the specific components menthol and carvone, not for the whole drug entity 'menthae_piperitae_aetheroleum' (peppermint oil) as a single subject, and lacks compartmental parameters (CL, V) for the oil itself. |
| popPK | Mirosławski_2018 | irrelevant | 0 | 0 | The paper analyzes heavy metal content in peppermint leaves and infusions, not the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Mora-Flórez_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro digestion of menthol/luteolin powders, not on the pharmacokinetics of menthae_piperitae_aetheroleum. |
| popPK | Morton_1995 | irrelevant | 0 | 0 | The paper is a clinical case series on contact sensitivity (allergy) to menthol and peppermint, reporting no pharmacokinetic parameters. |
| popPK | Peat_2016 | irrelevant | 0 | 0 | The paper describes an analytical method for menthol (a component of peppermint oil) and does not report population pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Pham_2023 | irrelevant | 2 | 0 | The study reports breath washout times for volatile terpenes (peppermint oil constituents) rather than quantitative pharmacokinetic parameters (CL, V, ka) for the specific drug entity menthae_piperitae_aetheroleum. |
| popPK | Rathod_2022 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the safety and efficacy of an essential oil blend for COVID-19 symptoms and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for menthae_piperitae_aetheroleum. |
| popPK | Ribeiro_2005 | irrelevant | 1 | 0 | The study uses menthae_piperitae_aetheroleum (peppermint oil/menthol) as a tracer to measure gluconeogenesis, reporting only urinary recovery amounts rather than quantitative PK parameters (CL, V, ka) for the drug itself. |
| popPK | Ringer_2005 | irrelevant | 0 | 0 | The paper describes the cloning and characterization of plant enzymes involved in monoterpene biosynthesis, not the pharmacokinetics of menthae_piperitae_aetheroleum in an animal or human subject. |
| popPK | Rys_2022 | irrelevant | 0 | 0 | The paper investigates the herbicidal activity and physicochemical properties of peppermint oil nanoemulsions on plants, not the pharmacokinetics of the drug in an animal or human subject. |
| popPK | Sartaj_2026 | irrelevant | 0 | 0 | The study is a network pharmacology and molecular docking analysis of Mentha piperita phytochemicals, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for the drug. |
| popPK | Sato_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A4 inhibition by natural medicines (including peppermint oil) and does not report pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Schwartz_1979 | irrelevant | 0 | 0 | The study investigates the effects of olfactory stimulation on muscle activity (EMG) and does not report any pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Setzer_2021 | irrelevant | 0 | 0 | The paper is an agricultural and phytochemical study on the essential oil composition of mountain mint varieties, containing no pharmacokinetic data or disposition parameters. |
| popPK | Shah_2019 | irrelevant | 0 | 0 | The study is a clinical trial evaluating peppermint oil as a topical antispasmodic for colonoscopy visualization and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Shulman_2025 | relevant | 9 | 2 | The study reports PK parameters (Cmax, Tmax, clearance, Vd) for menthol (active ingredient of peppermint oil) in children, but specific numeric values are not provided in the text, only qualitative descriptions and relative comparisons. |
| popPK | Sindi_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meloxicam, with peppermint oil serving only as an excipient in the formulation, not as the subject drug. |
| popPK | Somerville_1984 | irrelevant | 2 | 0 | The study reports qualitative/relative excretion data (peak levels, delay) for menthol (a metabolite/component) but does not provide quantitative PK parameters (CL, V, ka, t1/2) for the parent drug menthae_piperitae_aetheroleum. |
| popPK | Tyagi_2026 | irrelevant | 0 | 0 | The study focuses on Selegiline and Biochanin A, using peppermint oil only as an excipient, and does not report PK parameters for menthae_piperitae_aetheroleum. |
| popPK | Tyfa_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study on the antibiofilm activity of essential oils against bacteria, containing no pharmacokinetic data for menthae_piperitae_aetheroleum. |
| popPK | Vaka_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nerve growth factor (NGF) using peppermint oil as a permeation enhancer, not the pharmacokinetics of peppermint oil itself. |
| popPK | Wacher_2002 | irrelevant | 0 | 0 | The study investigates the effect of peppermint oil on the pharmacokinetics of cyclosporine, not the pharmacokinetic parameters of peppermint oil itself. |
| popPK | Wilkinson_2021 | irrelevant | 0 | 0 | The study is a benchmarking protocol for breath analysis (GC-MS) and reports washout times, not pharmacokinetic parameters (CL, V, ka) for menthae_piperitae_aetheroleum. |
| popPK | Wu_2010 | relevant | 8 | 2 | The study reports PK parameters (Cmax, Tmax, t1/2, MRT, AUC) for menthol (the main component of peppermint oil/menthae piperitae aetheroleum) in dogs, but the specific numeric values for these parameters are not listed in the provided evidence, only the relative bioavailability percentage. |
| popPK | Xiao_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study evaluating essential oils against Staphylococcus aureus and does not report any pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Yu_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of insect microsomal oxidation of various allelochemicals (including peppermint oil/menthol) and does not report pharmacokinetic parameters for menthae_piperitae_aetheroleum. |
| popPK | Zhu_2019 | irrelevant | 0 | 0 | The study is an in vitro food science investigation of peppermint oil nanoemulsion stability and digestion, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for the drug. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| popPK | Özakar_2024 | irrelevant | 0 | 0 | The study focuses on the preparation, stability, and in-vitro antimicrobial/antioxidant properties of peppermint oil nanoemulsions, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
