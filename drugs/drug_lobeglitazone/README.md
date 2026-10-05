<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;lobeglitazone&quot;}]"></div>

# lobeglitazone

- **generic name:** lobeglitazone
- **ATC codes:** `A10BD26`, `A10BG04`
- **DrugBank:** [DB09198](https://go.drugbank.com/drugs/DB09198) · **PubChem:** [CID 9826451](https://pubchem.ncbi.nlm.nih.gov/compound/9826451)
- **molar mass:** 480.54 g/mol (C24H24N4O5S) — DrugBank
- **groups:** investigational

## About

Lobeglitazone is a thiazolidinedione, a class of oral blood glucose lowering drugs used in diabetes. It is classified as investigational and has no European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q18350076](https://www.wikidata.org/wiki/Q18350076) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 00:33 | 2:44 | 0/0/0 | 0/0/0 | 0/0/0 | 93,202/3,357 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lobeglitazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` unknown | DrugBank actor |
| absorption | kidney | `ABCB1` unknown | DrugBank actor |
| absorption | liver | `ABCB1` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` unknown | DrugBank actor |
| absorption | small intestine | `ABCB1` unknown | DrugBank actor |
| absorption | testis | `ABCB1` unknown | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor, `CYP3A4` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PPARA (target), PPARG (activator), SLCO3A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 53 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2011.pdf` | Kim JW et al., Tolerability and pharmacokinetics of lo…, Clinical therapeutics (2011) | popPK | 10 | [10.1016/j.clinthera.2011.09.023](https://doi.org/10.1016/j.clinthera.2011.09.023) | [22047812](https://pubmed.ncbi.nlm.nih.gov/22047812) | The study reports PK parameters for lobeglitazone in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only qualitative trends and accumulation ratios. |
| `Lee_2015_2.pdf` | Lee JH et al., Gender differences in the hepatic elimi…, Biopharmaceutics & drug dis… (2015) | popPK | 9 | [10.1002/bdd.1954](https://doi.org/10.1002/bdd.1954) | [25899769](https://pubmed.ncbi.nlm.nih.gov/25899769) | The study reports quantitative PK parameters (AUC, CLint, half-life) for lobeglitazone in rats, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |
| `Kim_2019.pdf` | Kim SY et al., Pharmacokinetics of a Lobeglitazone/Met…, Clinical pharmacology in dr… (2019) | popPK | 8 | [10.1002/cpdd.625](https://doi.org/10.1002/cpdd.625) | [30329224](https://pubmed.ncbi.nlm.nih.gov/30329224) | The study reports PK parameters for lobeglitazone, but the evidence provided only contains qualitative comparisons and percentage changes (e.g., 32% decrease in Cmax) without specific numeric values for CL, V, or ka. |
| `Lee_2015.pdf` | Lee JH et al., Kinetics of the Absorption, Distributio…, Journal of pharmaceutical s… (2015) | popPK | 8 | [10.1002/jps.24378](https://doi.org/10.1002/jps.24378) | [25648999](https://pubmed.ncbi.nlm.nih.gov/25648999) | The study reports qualitative PK properties (bioavailability, linearity) for lobeglitazone in rats, but specific numeric disposition parameters (CL, V, t1/2) are not present in the provided text. |
| `Lee_2018.pdf` | Lee SJ et al., Pharmacokinetics and bioequivalence of…, International journal of cl… (2018) | popPK | 8 | [10.5414/CP203134](https://doi.org/10.5414/CP203134) | [29932413](https://pubmed.ncbi.nlm.nih.gov/29932413) | The study reports quantitative non-compartmental PK parameters (AUC, Cmax) for lobeglitazone in humans, but does not explicitly list clearance (CL), volume (V), or half-life (t1/2) values in the provided text. |
| `Park_2014.pdf` | Park MK et al., Tolerability and pharmacokinetics of lo…, Clinical drug investigation (2014) | popPK | 8 | [10.1007/s40261-014-0197-y](https://doi.org/10.1007/s40261-014-0197-y) | [24802657](https://pubmed.ncbi.nlm.nih.gov/24802657) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, Tmax) for lobeglitazone in humans, with specific numeric values provided in the abstract. |
| `Park_2022.pdf` | Park J et al., Effects of Hepatic Impairment on the Ph…, Clinical pharmacology in dr… (2022) | popPK | 8 | [10.1002/cpdd.1045](https://doi.org/10.1002/cpdd.1045) | [35255191](https://pubmed.ncbi.nlm.nih.gov/35255191) | The study reports PK parameters for lobeglitazone in humans, but the evidence only provides Geometric Mean Ratios (GMRs) and CIs, not the absolute numeric values for clearance, volume, or half-life. |
| `Yim_2017.pdf` | Yim CS et al., Specific Inhibition of the Distribution…, Drug metabolism and disposi… (2017) | popPK | 8 | [10.1124/dmd.116.074120](https://doi.org/10.1124/dmd.116.074120) | [28069721](https://pubmed.ncbi.nlm.nih.gov/28069721) | The study reports quantitative PK parameters (clearance and volume of distribution) for lobeglitazone in rats, with specific numeric values provided in the abstract. |
| `Sil_2014.pdf` | Sil Oh E et al., Effect of ketoconazole on lobeglitazone…, Clinical therapeutics (2014) | pgx | 7 | [10.1016/j.clinthera.2014.05.064](https://doi.org/10.1016/j.clinthera.2014.05.064) | [25047497](https://www.ncbi.nlm.nih.gov/pubmed/25047497) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-05T00:32:51.578496+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Choi_2018 | irrelevant | 0 | 0 | The study focuses on the therapeutic efficacy of a targeted nanocarrier for atherosclerosis in mice and does not report pharmacokinetic disposition parameters (CL, V, etc.) for lobeglitazone. |
| popPK | Choung_2018 | irrelevant | 0 | 0 | The study is a mechanistic investigation of hepatic lipid metabolism and gene expression in mice, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for lobeglitazone. |
| popPK | Dutta_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy and safety outcomes (HbA1c, lipids, adverse events) and does not report any pharmacokinetic parameters. |
| popPK | Dutta_2023_2 | irrelevant | 0 | 0 | The paper is a meta-analysis of rivoglitazone efficacy and safety, not a pharmacokinetic study of lobeglitazone. |
| popPK | Gunasinghe_2023 | irrelevant | 0 | 0 | The study is an in-silico computational analysis of lobeglitazone as a potential HPV inhibitor, reporting no pharmacokinetic parameters. |
| popPK | Hadi_2025 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of rosiglitazone in rats and does not involve lobeglitazone or report any pharmacokinetic parameters. |
| popPK | Han_2026 | irrelevant | 0 | 0 | The paper is a review of PPAR roles in pancreatic diseases and does not report pharmacokinetic parameters for lobeglitazone. |
| popPK | Hong_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing glucose-lowering effects and body composition, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for lobeglitazone. |
| popPK | Jang_2018 | irrelevant | 0 | 0 | The paper is a structural biology study (X-ray crystallography) of PPARγ binding to lobeglitazone and does not report any pharmacokinetic parameters. |
| popPK | Jang_2020 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial reporting only geometric mean ratios and bioequivalence ranges, without providing absolute quantitative disposition parameters (CL, V, ka) for lobeglitazone. |
| popPK | Jin_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cancer cell migration and invasion, reporting no pharmacokinetic parameters for lobeglitazone. |
| popPK | Joshi_2024 | irrelevant | 0 | 0 | The paper is a Phase III clinical efficacy and safety trial reporting HbA1c changes, not a pharmacokinetic study with disposition parameters. |
| popPK | Jung_2015 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial focused on warfarin, and while it mentions lobeglitazone PK was unaffected, it does not report quantitative disposition parameters (CL, V, etc.) for lobeglitazone in the provided evidence. |
| PD | Jung_2015 | not_relevant | 0 | 0 | The study is a drug-drug interaction assessment comparing warfarin PK/PD with and without lobeglitazone; it does not report a concentration- or dose-response relationship for lobeglitazone itself, nor does it provide numeric PD parameters (e.g., Emax, EC50) for lobeglitazone. |
| popPK | Kim_2011 | relevant | 10 | 2 | The study reports PK parameters for lobeglitazone in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only qualitative trends and accumulation ratios. |
| popPK | Kim_2015 | irrelevant | 2 | 0 | The study reports only geometric mean ratios for Cmax and AUC, lacking absolute quantitative disposition parameters (CL, V, ka) or a compartmental model for lobeglitazone. |
| popPK | Kim_2019 | relevant | 8 | 2 | The study reports PK parameters for lobeglitazone, but the evidence provided only contains qualitative comparisons and percentage changes (e.g., 32% decrease in Cmax) without specific numeric values for CL, V, or ka. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial reporting HbA1c and metabolic syndrome outcomes, not a pharmacokinetic study with disposition parameters. |
| popPK | Kim_2021 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial reporting only relative ratios (Cmax,ss and AUCtau) for lobeglitazone, not absolute quantitative disposition parameters (CL, V, ka, t1/2). |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The paper is a real-world safety and efficacy study reporting clinical outcomes (HbA1c, adverse events) rather than pharmacokinetic parameters. |
| popPK | Kim_2023 | irrelevant | 2 | 1 | The study reports only geometric mean ratios for drug interaction assessment and does not provide absolute quantitative disposition parameters (CL, V, ka) for lobeglitazone. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The study focuses on the microbiome and efficacy of lobeglitazone in diabetic mice, not on its pharmacokinetic parameters. |
| PD | Kim_2024 | not_relevant | 1 | 0 | The paper is a mechanistic microbiome study in mice that qualitatively mentions reducing drug doses to IC50 levels but does not report any numeric PD parameters, concentration-effect curves, or PK/PD modeling for lobeglitazone. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of fluid retention and vascular permeability in mice, not the pharmacokinetic disposition parameters of lobeglitazone. |
| popPK | Lee_2015 | relevant | 8 | 2 | The study reports qualitative PK properties (bioavailability, linearity) for lobeglitazone in rats, but specific numeric disposition parameters (CL, V, t1/2) are not present in the provided text. |
| PGx | Lee_2015 | not_relevant | 0 | 0 | The study reports standard pharmacokinetic properties in rats but does not investigate the impact of any gene variant or genotype on these parameters. |
| popPK | Lee_2015_2 | relevant | 9 | 2 | The study reports quantitative PK parameters (AUC, CLint, half-life) for lobeglitazone in rats, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |
| popPK | Lee_2015_3 | irrelevant | 2 | 1 | The study focuses on in vitro metabolite identification and in vivo metabolite formation rates (kinetics of M1 formation) rather than reporting standard quantitative disposition parameters (CL, V, ka, t1/2) for the parent drug lobeglitazone. |
| popPK | Lee_2017 | irrelevant | 0 | 0 | The paper is a structural biology study (crystallography and docking) of PPARγ binding to lobeglitazone, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic/metabolic efficacy study in mice and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for lobeglitazone. |
| popPK | Moon_2020 | irrelevant | 2 | 0 | The study reports only non-compartmental PK interaction ratios (Cmax,ss and AUC) and does not provide quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Mudaliar_2024 | irrelevant | 0 | 0 | The paper describes a UV spectrophotometric method for quantifying lobeglitazone in bulk and tablets, not a pharmacokinetic study. |
| popPK | Nuwormegbe_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lobeglitazone's antifibrotic effects on corneal fibroblasts and does not report any pharmacokinetic parameters. |
| popPK | Park_2020 | irrelevant | 0 | 0 | The study is an in vitro imaging and therapeutic evaluation of a nanodrug formulation, not a pharmacokinetic study reporting disposition parameters for lobeglitazone. |
| popPK | Park_2022 | relevant | 8 | 2 | The study reports PK parameters for lobeglitazone in humans, but the evidence only provides Geometric Mean Ratios (GMRs) and CIs, not the absolute numeric values for clearance, volume, or half-life. |
| popPK | Patel_2024 | irrelevant | 0 | 0 | The paper is a review of analytical methodologies for thiazolidinediones and does not report pharmacokinetic parameters for lobeglitazone. |
| popPK | Patel_2026 | irrelevant | 0 | 0 | The paper describes an analytical method (RP-HPLC) for quantifying drug concentrations in a formulation, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Rocha_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of PTP1B inhibition and does not report any pharmacokinetic parameters for lobeglitazone. |
| popPK | Ryang_2022 | irrelevant | 0 | 0 | The study is a clinical efficacy trial focusing on glucose-lowering effects and safety, with no pharmacokinetic parameters reported. |
| popPK | Shin_2012 | relevant | 4 | 5 | The study reports standard non-compartmental PK parameters (Cmax, AUC) for lobeglitazone in humans, but lacks specific disposition parameters like clearance (CL), volume (V), or half-life (t1/2) required for a full PK model. |
| popPK | Sil_2014 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PGx | Sil_2014 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (ketoconazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Sohn_2018 | irrelevant | 0 | 0 | The study focuses on metabolic and thermogenic effects of lobeglitazone in mice and in vitro, reporting no pharmacokinetic parameters. |
| popPK | Song_2021 | irrelevant | 0 | 0 | The study is a theranostic imaging and efficacy study in rabbits, not a pharmacokinetic study, and reports no quantitative disposition parameters for lobeglitazone. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study is a mechanistic transcriptomic and metabolomic analysis of hepatic steatosis in rats, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for lobeglitazone. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel PPAR agonists where lobeglitazone is only mentioned as a reference compound, with no pharmacokinetic data reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
