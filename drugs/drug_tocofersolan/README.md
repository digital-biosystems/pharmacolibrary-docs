<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;tocofersolan&quot;}]"></div>

# tocofersolan

- **generic name:** tocofersolan
- **ATC codes:** `A11HA08`
- **DrugBank:** [DB11635](https://go.drugbank.com/drugs/DB11635) · **PubChem:** not captured
- **groups:** approved

## About

Tocofersolan is a water-soluble form of vitamin E used to treat vitamin E deficiency, including deficiency linked to cholestasis. It is an approved vitamin preparation with an authorised product in the European Union, but it remains a niche treatment rather than a widely used medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q172409](https://www.wikidata.org/wiki/Q172409) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:39 | 3:33 | 0/0/0 | 0/0/0 | 0/0/0 | 150,463/2,806 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/12 | 9/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tocofersolan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` target | DrugBank actor |
| absorption | kidney | `ABCB1` target | DrugBank actor |
| absorption | liver | `ABCB1` target | DrugBank actor |
| absorption | placenta | `ABCB1` target | DrugBank actor |
| absorption | small intestine | `ABCB1` target | DrugBank actor |
| absorption | testis | `ABCB1` target | DrugBank actor |
| metabolism | kidney | `CYP4F2` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP4F2` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCA1 (substrate), ABCG5 (substrate), ABCG8 (substrate), APOBR (substrate), NPC1L1 (substrate), SCARB1 (substrate), SEC14L2 (substrate), SEC14L3 (substrate), SEC14L4 (substrate), TTPA (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 48 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cuerq_2018.pdf` | Cuerq C et al., Efficacy of two vitamin E formulations…, Journal of lipid research (2018) | popPK | 8 | [10.1194/jlr.m085043](https://doi.org/10.1194/jlr.m085043) | [30021760](https://pubmed.ncbi.nlm.nih.gov/30021760) | The study reports bioavailability percentages for tocofersolan in humans, which are quantitative PK parameters, but specific clearance, volume, or rate constants are not explicitly listed in the provided text. |

<sub>queue written 2026-10-05T08:38:55.418804+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arasu_2024 | irrelevant | 0 | 0 | The study focuses on azithromycin-loaded liposomes for Chlamydia treatment and does not report pharmacokinetic parameters for tocofersolan. |
| popPK | Aziz_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and release of atropine base from contact lenses, not the pharmacokinetics of tocofersolan. |
| popPK | Binkhathlan_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel (PTX) in rats, not tocofersolan. |
| popPK | Binkhathlan_2024_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel (PTX), not tocofersolan. |
| popPK | Bor_2022 | irrelevant | 0 | 0 | The study focuses on the physicochemical characterization and biodistribution of DHA-incorporated hexosomes/vesicles in mice, not the pharmacokinetics of tocofersolan. |
| popPK | Chang_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclosporine, not tocofersolan. |
| popPK | Chauhan_2018 | irrelevant | 0 | 0 | The paper studies a nanomaterial (Toco-Photoxil) for photothermal therapy and does not report pharmacokinetic parameters for the drug tocofersolan. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel, not tocofersolan. |
| popPK | Chou_2022 | irrelevant | 0 | 0 | The study focuses on zoledronic acid nanoparticles and does not investigate tocofersolan pharmacokinetics. |
| popPK | Coleman_2023 | irrelevant | 0 | 0 | The paper investigates the antibacterial and antibiofilm properties of compounds like PHMB and TPGS in vitro, and does not contain any pharmacokinetic data for tocofersolan. |
| popPK | Cuerq_2018 | relevant | 8 | 2 | The study reports bioavailability percentages for tocofersolan in humans, which are quantitative PK parameters, but specific clearance, volume, or rate constants are not explicitly listed in the provided text. |
| PD | Cuerq_2018 | not_relevant | 2 | 1 | The study reports PK parameters (bioavailability) and a qualitative comparison of efficacy (plasma levels at 4 months) but does not provide a concentration-effect or dose-response model with numeric PD parameters like Emax or EC50. |
| popPK | Dahe_2011 | irrelevant | 0 | 0 | The paper describes the biocompatibility and separation performance of hemodialysis membranes containing Vitamin E TPGS, not the pharmacokinetics of tocofersolan. |
| popPK | Gazdikova_2000 | irrelevant | 0 | 0 | The study measures plasma levels of antioxidants (including alpha-tocopherol) in kidney disease patients and does not involve tocofersolan or pharmacokinetic modeling. |
| popPK | Ghosh_2020 | irrelevant | 0 | 0 | The study investigates the genotoxicity and biodistribution of superparamagnetic iron oxide nanoparticles (SPION), not the pharmacokinetics of tocofersolan. |
| popPK | Guo_2020 | irrelevant | 0 | 0 | The paper focuses on the formulation and efficacy of a gemcitabine-tocopherol succinate prodrug, not the pharmacokinetics of tocofersolan. |
| popPK | Hu_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artesunate liposomes, not tocofersolan. |
| popPK | Jadhav_2025 | irrelevant | 0 | 0 | The paper is a review of surfactant-based drug delivery systems in breast cancer and does not report pharmacokinetic parameters for tocofersolan. |
| popPK | Kumbhar_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aripiprazole, not tocofersolan. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of S-HM-3 and paclitaxel, not tocofersolan. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of isoliquiritigenin, not tocofersolan. |
| popPK | Maji_2026 | irrelevant | 0 | 0 | The study focuses on tocofersolan (TPGS) as a targeting ligand for Ibrutinib delivery, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Maji_2026 | not_relevant | 3 | 2 | The paper reports IC50 values for the drug formulation, which are potency metrics, but does not provide a concentration-effect curve, Emax, or a PK/PD model linking exposure to response. |
| popPK | Modi_2020 | irrelevant | 0 | 0 | The paper focuses on membrane materials for bioartificial kidneys and does not study the pharmacokinetics of tocofersolan. |
| popPK | Mugundhan_2025 | irrelevant | 0 | 0 | The study focuses on Axitinib nanomicelles for breast cancer and does not involve tocofersolan or its pharmacokinetics. |
| popPK | Mustafa_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of kanamycin sulphate, not tocofersolan. |
| popPK | Mustafa_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Kanamycin Sulphate (KS) loaded in nanoparticles, not tocofersolan. |
| popPK | Pereira-Silva_2025 | irrelevant | 0 | 0 | The paper describes the formulation and in vitro characterization of gemcitabine-loaded micelles, not the pharmacokinetics of tocofersolan. |
| popPK | Pham_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of (S)-zaltoprofen, not tocofersolan. |
| popPK | Prashant_2010 | irrelevant | 0 | 0 | The study focuses on SPIO-loaded nanoparticles for MRI imaging and does not report pharmacokinetic parameters for tocofersolan. |
| popPK | Sathe_2024 | irrelevant | 0 | 0 | The study focuses on natamycin nanomicelles for fungal keratitis and does not involve tocofersolan. |
| popPK | Shen_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of genistein, not tocofersolan. |
| popPK | Singh_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of docetaxel, not tocofersolan. |
| popPK | Singh_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of piperine, not tocofersolan. |
| popPK | Sipos_2024 | irrelevant | 0 | 0 | The study is an in-vitro formulation and release study where tocofersolan (TPGS) is used as an excipient/solubilizer, not as the subject drug for pharmacokinetic analysis. |
| popPK | Stevens_2023 | irrelevant | 0 | 0 | The paper is a systematic review on nanoparticle delivery of flavonoids and does not report pharmacokinetic parameters for tocofersolan. |
| PD | Stevens_2023 | not_relevant | 0 | 0 | The paper is a systematic review of nanoparticle delivery of flavonoids and does not report specific pharmacodynamic or exposure-response data for tocofersolan. |
| popPK | Sun_2021 | irrelevant | 0 | 0 | The study focuses on docetaxel-loaded micelles and TPGS, not tocofersolan pharmacokinetics. |
| popPK | Tong_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of baicalein, not tocofersolan. |
| popPK | Tsend-Ayush_2017 | irrelevant | 0 | 0 | The study focuses on etoposide delivery using TPGS nanoparticles and does not investigate the pharmacokinetics of tocofersolan. |
| popPK | Verma_2018 | irrelevant | 0 | 0 | The paper is an in-vitro study on hemodialysis membrane performance and does not report pharmacokinetic parameters for tocofersolan. |
| popPK | Viswanadh_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of docetaxel-loaded nanoparticles, not tocofersolan. |
| popPK | Warsi_2014 | irrelevant | 0 | 0 | The study investigates dorzolamide-loaded nanoparticles, not tocofersolan. |
| popPK | Westergren_2010 | irrelevant | 1 | 0 | The paper is a review of dosage and formulation issues that explicitly states there are few pharmacokinetic studies and no PK studies for tocofersolan in neonates, providing no quantitative PK parameters. |
| PD | Westergren_2010 | not_relevant | 1 | 0 | The paper is a narrative review of dosage recommendations and bioavailability comparisons, containing no quantitative pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters for tocofersolan. |
| popPK | Yadav_2023 | irrelevant | 0 | 0 | The study focuses on Paclitaxel and Baicalein, not tocofersolan. |
| popPK | Yadav_2023_2 | irrelevant | 0 | 0 | The study focuses on paclitaxel pharmacokinetics in mice, not tocofersolan. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of apremilast, not tocofersolan. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chlorogenic acid (CGA) in rats, not tocofersolan. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper describes a mass spectrometry database resource for drug screening and does not report pharmacokinetic parameters for tocofersolan. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | The paper describes a metabolomics database for drug detection and does not report any pharmacodynamic or exposure-response analysis for tocofersolan. |
| popPK | Zhen_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 6-Gingerol, not tocofersolan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
