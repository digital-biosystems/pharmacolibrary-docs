<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;}]"></div>

# rutoside

- **generic name:** rutoside
- **ATC codes:** `C05CA01`
- **DrugBank:** [DB01698](https://go.drugbank.com/drugs/DB01698) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** A flavonol glycoside found in many plants, including buckwheat; tobacco; forsythia; hydrangea; viola, etc. It has been used therapeutically to decrease capillary fragility.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 03:34 | 35:51 | 0/0/0 | 0/0/0 | 0/0/0 | 61,540/3,040 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 4/0 | 2/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rutoside) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1C3 (inhibitor), CBR1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 191 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ghica_2023.pdf` | Ghica A et al., Phytochemical Screening and Antioxidant…, Plants (Basel, Switzerland) (2023) | pd | 4 | [10.3390/plants12132510](https://doi.org/10.3390/plants12132510) | [37447070](https://www.ncbi.nlm.nih.gov/pubmed/37447070) | metadata signals extractable PD data (IC50) |
| `Lemmens_2014.pdf` | Lemmens KJ et al., The flavonoid 7-mono-O-(β-hydroxyethyl)…, Toxicology in vitro : an in… (2014) | pd | 4 | [10.1016/j.tiv.2013.12.019](https://doi.org/10.1016/j.tiv.2013.12.019) | [24412621](https://www.ncbi.nlm.nih.gov/pubmed/24412621) | metadata signals extractable PD data (EC50) |
| `Müller_1998.pdf` | Müller K et al., Ilex aquifolium: protection against enz…, Planta medica (1998) | pd | 4 | [10.1055/s-2006-957509](https://doi.org/10.1055/s-2006-957509) | [9741300](https://www.ncbi.nlm.nih.gov/pubmed/9741300) | metadata signals extractable PD data (IC50) |
| `Raman_2024.pdf` | Raman K et al., Phytoconstituents of Citrus limon (Lemo…, ChemistryOpen (2024) | pd | 4 | [10.1002/open.202300198](https://doi.org/10.1002/open.202300198) | [39031747](https://www.ncbi.nlm.nih.gov/pubmed/39031747) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-29T03:30:21.984236+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2024 | irrelevant | 0 | 0 | The study focuses on oxovanadium(IV) complexes and does not report pharmacokinetic parameters for rutoside. |
| popPK | Borzeix_1995 | irrelevant | 0 | 0 | The study is a hemodynamic/physiological investigation in rabbits measuring flow and pressure, not a pharmacokinetic study reporting disposition parameters for rutoside. |
| popPK | Cermak_2010 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Costea_2022 | not_relevant | 0 | 0 | The paper reports the chemical composition and in vitro antioxidant activity (IC50) of vegetal extracts, but does not provide a pharmacodynamic or exposure-response model for rutoside specifically. |
| popPK | Dittrich_1985 | irrelevant | 2 | 0 | The study focuses on an HPLC method for troxerutin (a rutoside derivative) and reports only relative bioavailability, lacking quantitative disposition parameters like clearance or volume for rutoside itself. |
| popPK | Gerdin_1983 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of microvascular permeability in rats and does not report any pharmacokinetic parameters for rutoside. |
| PD | Ghica_2023 | not_relevant | 0 | 0 | The paper focuses on phytochemical screening and antioxidant potential of plant extracts and does not mention rutoside or report any pharmacodynamic or exposure-response data. |
| popPK | Griffiths_1978 | irrelevant | 2 | 0 | The study is an animal tissue distribution/excretion study that reports percentage excretion data but does not provide quantitative compartmental PK parameters (CL, V, ka) for rutoside. |
| PD | Hosseini_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for isolated compounds (including quercetin-3-O-rutoside) but does not report a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve for rutoside itself. |
| popPK | Hou_2023 | irrelevant | 0 | 0 | The paper is a transcriptome and metabolome study on flavonoid biosynthesis in a plant, not a pharmacokinetic study of rutoside. |
| popPK | Jebahi_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis and antimicrobial properties of zinc oxide nanoparticles, not the pharmacokinetics of rutoside. |
| popPK | Lemmens_2014 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Lemmens_2014 | not_relevant | 0 | 0 | The text describes a qualitative antioxidant mechanism of action for rutoside on endothelial cells but does not report any quantitative exposure-response, dose-response, or PK/PD analysis with numeric parameters. |
| popPK | Lemmens_2015 | irrelevant | 0 | 0 | The study focuses on the antioxidant activity and toxicity mechanisms of a rutoside metabolite, not on pharmacokinetic disposition parameters. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The study is an in-silico network pharmacology analysis of phytochemicals for osteomyelitis and does not report quantitative pharmacokinetic parameters for rutoside. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The study focuses on the antimicrobial synergy and toxicity of rutin (a related compound, not rutoside) with colistin, and does not report pharmacokinetic parameters for rutoside. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | The paper is a review of Lonicerae Japonicae Flos (Jinyinhua) and its components (e.g., chlorogenic acid, rutin), and does not report pharmacokinetic parameters for rutoside. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | The study focuses on Rubi Fructus components (including rutin, not rutoside) and does not report pharmacokinetic parameters for rutoside. |
| popPK | Mashaal_2025 | irrelevant | 0 | 0 | The study focuses on the molluscicidal and anti-inflammatory effects of star anise extract in snails, with no pharmacokinetic data or parameters for rutoside. |
| popPK | Metuge_2024 | irrelevant | 0 | 0 | The paper is a molecular docking and MD simulation study of phytochemicals (including rutin, not rutoside) against COX/LOX enzymes, containing no pharmacokinetic data. |
| popPK | Mohamed_2024 | irrelevant | 0 | 0 | The study focuses on kidney stone formation and alkaline diets, with no pharmacokinetic parameters reported for rutoside. |
| PD | Müller_1998 | not_relevant | 1 | 0 | The paper reports an IC50 for the whole plant extract, not for rutoside specifically, and explicitly states that rutoside did not mediate the leukotriene inhibition; no numeric PD parameters for rutoside are provided. |
| popPK | Nocker_1987 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| popPK | Nocker_1989 | irrelevant | 0 | 0 | The study is a clinical efficacy trial measuring edema reduction and does not report any pharmacokinetic parameters for rutoside. |
| PD | Nocker_1989 | not_relevant | 3 | 2 | The study is a dose-response trial but reports only qualitative/summary outcomes (significant decrease vs placebo, no difference between dose groups) without providing numeric concentration-effect data, PK parameters, or fitted PD model parameters (Emax, EC50, etc.). |
| popPK | Ollech_2020 | irrelevant | 0 | 0 | The paper is a clinical retrospective cohort study on the treatment of pigmented purpuric dermatosis, not a pharmacokinetic study, and contains no PK parameters for rutoside. |
| PGx | Paczkowska-Walendowska_2026 | not_relevant | 0 | 0 | The paper is a general review of the health benefits of Japanese Pearl Tree and mentions rutoside only as a bioactive compound, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PD | Raman_2024 | not_relevant | 0 | 0 | The paper focuses on molecular modeling and in vitro inhibition of SARS-CoV-2 targets by Citrus limon constituents and does not report any pharmacodynamic or exposure-response data for rutoside. |
| popPK | Ramaswamy_2017 | irrelevant | 2 | 0 | The study focuses on curcumin and rutin (not rutoside) and only reports fold-increases in bioavailability without providing specific quantitative PK parameters like clearance or volume. |
| popPK | Rashid_2024 | irrelevant | 0 | 0 | The study focuses on rutin (a different compound) and in-silico pharmacokinetic predictions for SARS-CoV-2 inhibitors, not rutoside. |
| popPK | STRUBELT_1963 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Sawai_1987 | irrelevant | 2 | 1 | The study reports pharmacokinetic parameters for rutoside metabolites (DHT, mPHAA, etc.) rather than rutoside itself, and only provides a single half-life value for the sum of metabolites without compartmental model parameters for the parent drug. |
| popPK | Seo_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of quercetin and kaempferol from Cudrania tricuspidata, not rutoside. |
| popPK | Song_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inhibition and does not report pharmacokinetic parameters for rutoside. |
| popPK | Tang_2019 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of a traditional Chinese medicine extract on cognitive impairment in mice and does not report any pharmacokinetic parameters for rutoside. |
| PGx | Thakur_2025 | not_relevant | 0 | 0 | The paper is a network pharmacology study exploring the mechanism of action of rutin in nephropathy and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Tian_2022 | irrelevant | 2 | 2 | The study investigates rutin (a different compound) rather than rutoside, and the reported parameters are non-compartmental (t1/2, Cmax, AUC) without clearance or volume values. |
| popPK | Wahnou_2024 | irrelevant | 0 | 0 | The study focuses on Artemisia herba alba compounds for IBD-associated arthritis and does not report pharmacokinetic parameters for rutoside. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on flavonoids from Chimonanthus nitens (rutin, nicotiflorin, etc.) and does not report pharmacokinetic parameters for rutoside. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The study focuses on Rutin (a different compound) rather than Rutoside, and reports only relative fold-changes in PK parameters rather than absolute quantitative values. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sophoraflavanone G and kurarinone, using rutin (a different compound) only as an internal standard, not rutoside. |
| popPK | Yao_2019 | irrelevant | 0 | 0 | The paper is a review of Polyalthia species and does not report pharmacokinetic parameters for rutoside. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action and therapeutic efficacy of cerium-rutin nanoparticles in Alzheimer's disease, not on the pharmacokinetic parameters of rutoside. |
| popPK | Zeng_2018 | irrelevant | 2 | 0 | The study focuses on chlorogenic acid and rutin (not rutoside) and the provided evidence lacks specific quantitative PK parameter values (CL, V, ka) for the subject drug. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study focuses on oseltamivir and Radix Scutellariae, not rutoside. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on a nanodrug formulation (RCPM) for lung cancer chemotherapy and does not report pharmacokinetic parameters for rutoside. |
| popPK | Zhao_2021 | irrelevant | 2 | 0 | The paper focuses on the development of an analytical method (molecularly imprinted polymers) for quantifying rutin and its metabolites, and does not report quantitative pharmacokinetic parameter values (CL, V, etc.) for rutoside. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The study focuses on the immunomodulatory mechanism of rutin (a related flavonoid, not rutoside) in macrophages and contains no pharmacokinetic parameters. |
| popPK | de_2021 | irrelevant | 0 | 0 | The study is an in silico evaluation of flavonoids in açaí fruit and does not report quantitative pharmacokinetic parameters for rutoside. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
