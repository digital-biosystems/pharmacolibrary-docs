<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12B&quot;,&quot;href&quot;:&quot;atc/A12B.md&quot;},{&quot;label&quot;:&quot;potassium citrate&quot;}]"></div>

# potassium citrate

- **generic name:** potassium citrate
- **ATC codes:** `A12BA02`
- **DrugBank:** [DB09125](https://go.drugbank.com/drugs/DB09125) · **PubChem:** [CID 13344](https://pubchem.ncbi.nlm.nih.gov/compound/13344)
- **molar mass:** 306.394 g/mol (C6H5K3O7) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

**Description.** Potassium citrate (also known as tripotassium citrate) is a potassium salt of citric acid. It is a white, hygroscopic crystalline powder. It is odorless with a saline taste. It contains 38.3% potassium by mass. In the monohydrate form it is highly hygroscopic and deliquescent.
Potassium citrate is used to treat a kidney stone condition called renal tubular acidosis. Potassium Citrate is indicated also for the management of Hypocitraturic calcium oxalate nephrolithiasis.

**Indication.** For the management of renal tubular acidosis, hypocitraturic calcium oxalate nephrolithiasis, and uric acid lithiasis with or without calcium stones.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 12:39 | 27:41 | 0/0/0 | 0/0/0 | 0/0/0 | 96,428/4,199 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 3/6 | 6/3 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=potassium_citrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…Urinary; less than 5% unchanged.…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 73 matched, 60 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sandford_1992.pdf` | Sandford CA et al., Properties of a cell volume-sensitive p…, The Journal of physiology (1992) | pd | 4 | [10.1113/jphysiol.1992.sp018995](https://doi.org/10.1113/jphysiol.1992.sp018995) | [1593444](https://www.ncbi.nlm.nih.gov/pubmed/1593444) | metadata signals extractable PD data (IC50) |
| `Song_2020.pdf` | Song Z et al., A comparative study of 14-day dual ther…, Helicobacter (2020) | pgx | 5 | [10.1111/hel.12762](https://doi.org/10.1111/hel.12762) | [33040439](https://www.ncbi.nlm.nih.gov/pubmed/33040439) | metadata signals extractable PGX data (CYP2C19) |
| `Suo_2025.pdf` | Suo B et al., Tailored Therapy Guided by Antibiotic G…, Helicobacter (2025) | pgx | 5 | [10.1111/hel.70082](https://doi.org/10.1111/hel.70082) | [41116602](https://www.ncbi.nlm.nih.gov/pubmed/41116602) | metadata signals extractable PGX data (CYP2C19) |
| `Wang_2023.pdf` | Wang X et al., Efficacy and safety of vonoprazan-amoxi…, Therapeutic advances in gas… (2023) | pgx | 5 | [10.1177/17562848231190976](https://doi.org/10.1177/17562848231190976) | [37664169](https://www.ncbi.nlm.nih.gov/pubmed/37664169) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-26T12:34:52.589144+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akerele_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ofloxacin, with potassium citrate serving only as a co-administered agent to test for interactions, not as the subject drug. |
| PD | Arif_2026 | not_relevant | 0 | 0 | The paper studies the dose-response of selenium methionine on rooster semen quality, not the pharmacodynamics of potassium citrate (which is merely an ingredient in the extender). |
| popPK | Attalla_2026 | irrelevant | 0 | 0 | The paper is an in-vitro anthelmintic efficacy study using C. elegans, where potassium citrate is used only as a buffer component in the growth medium, not as a subject drug for pharmacokinetic analysis. |
| PD | Attalla_2026 | not_relevant | 0 | 0 | The paper investigates anthelmintics (e.g., albendazole, ivermectin) in C. elegans and does not mention or test potassium citrate. |
| popPK | Belldina_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cysteamine bitartrate, not potassium_citrate. |
| PD | Belldina_2003 | not_relevant | 0 | 0 | The paper investigates cysteamine bitartrate, not potassium citrate. |
| popPK | Canales_2019 | irrelevant | 0 | 0 | The paper is a clinical outcome study on stone recurrence rates and does not report any pharmacokinetic parameters for potassium citrate. |
| PD | Carvalho_2017 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical outcomes (stone recurrence) and does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters like Emax or EC50. |
| popPK | Caudarella_2009 | irrelevant | 0 | 0 | The paper is a review of the clinical use of potassium citrate for nephrolithiasis and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Cui_2021 | not_relevant | 0 | 0 | The paper investigates H. pylori antibiotic resistance genes and their correlation with clinical efficacy, not human pharmacogenomic effects on the PK/PD of potassium citrate. |
| PGx | Dong_2015 | not_relevant | 0 | 0 | The paper focuses on antibiotic resistance in H. pylori and does not report pharmacogenomic effects on the PK or PD of potassium citrate. |
| PD | Du_2024 | not_relevant | 0 | 0 | The provided text contains only exclusion criteria and bioanalytical method details for a PK study; it does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters for potassium citrate or any other drug. |
| popPK | EFSA_2025 | irrelevant | 0 | 0 | The paper is a toxicological risk assessment of bromide and does not contain any pharmacokinetic data for potassium citrate. |
| PD | EFSA_2025 | not_relevant | 0 | 0 | The paper discusses bromide toxicity and risk assessment, not potassium citrate pharmacodynamics. |
| PD | Ergani_2021 | not_relevant | 0 | 0 | The paper is a clinical case report describing the management of Gitelman syndrome in pregnancy with qualitative observations on dosage adjustments, but it does not provide any quantitative exposure-response or dose-response data, curves, or PD parameters for potassium citrate. |
| popPK | Fukunaga_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of phenobarbital, with potassium citrate used only as a dietary agent for urine alkalinization, not as the subject drug. |
| popPK | Gambaro_2000 | irrelevant | 0 | 0 | The paper is a case report on liver-kidney transplantation where potassium citrate is used as a therapeutic agent to increase oxalate solubility, not as a subject of pharmacokinetic analysis. |
| popPK | Ghorbani_2019 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of sodium potassium citrate for preventing contrast-induced nephropathy and does not report any pharmacokinetic parameters. |
| PD | Gisbert_1997 | not_relevant | 1 | 0 | The paper is a cost-effectiveness analysis that cites clinical outcomes (relapse rates) from other studies but does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters for potassium citrate. |
| popPK | Gridley_2019 | irrelevant | 0 | 0 | The paper is a clinical retrospective review of dissolution therapy outcomes for kidney stones and does not report any pharmacokinetic parameters for potassium citrate. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The study reports urinary stone risk parameters (citrate, pH, supersaturation) rather than pharmacokinetic disposition parameters (CL, V, ka) for potassium citrate. |
| popPK | Huang_2000 | irrelevant | 0 | 0 | The study investigates free radical production and urinary enzymes in nephrolithiasis, using potassium citrate only as a therapeutic agent without reporting any pharmacokinetic parameters. |
| popPK | Hwang_1992 | irrelevant | 2 | 0 | The study describes urinary excretion profiles (pH, K, citrate) rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, ka) for potassium citrate. |
| popPK | Kavanagh_2022 | irrelevant | 1 | 0 | The paper focuses on the pharmacokinetics of antibiotics (amoxicillin, ciprofloxacin, etc.) and the solubility effects of alkalising agents, not the quantitative PK parameters of potassium citrate itself. |
| PD | Korkmaz_2019 | not_relevant | 0 | 0 | The paper investigates potassium citrate as a radiation dosimeter material using ESR spectroscopy, reporting a physical dose-response to radiation, not a pharmacodynamic drug effect. |
| popPK | Kourambas_2000 | irrelevant | 0 | 0 | The paper is a clinical case series on ureteroscopic management of kidney stones where potassium citrate is only mentioned as a maintenance therapy, with no pharmacokinetic data reported. |
| popPK | Li_2025 | relevant | 4 | 5 | The study reports NCA parameters (Tmax, t1/2, AUC) for a combination of potassium citrate and potassium chloride, but does not provide separate quantitative disposition parameters (CL, V, Q) for potassium citrate alone. |
| popPK | Li_2025_2 | irrelevant | 0 | 0 | no_text gate: only 365 chars of text extracted (&lt; 400) |
| popPK | Lubkowicz_2022 | irrelevant | 0 | 0 | The paper focuses on an engineered bacterial therapeutic (SYNB8802) for hyperoxaluria and does not study potassium_citrate as the subject drug. |
| popPK | Lv_2026 | irrelevant | 2 | 0 | The study measures the pharmacokinetics of bismuth (the metal) from bismuth potassium citrate, not the pharmacokinetic parameters of potassium citrate itself. |
| popPK | Martín_2001 | irrelevant | 0 | 0 | The paper is a clinical case report regarding uric acid lithiasis where potassium citrate is used as a therapeutic agent, but no pharmacokinetic parameters are reported. |
| popPK | Miao_2023 | irrelevant | 1 | 0 | The study focuses on bismuth pharmacokinetics as a component of quadruple therapy, not potassium citrate, and does not report PK parameters for potassium citrate. |
| popPK | Papatsoris_2025 | irrelevant | 0 | 0 | The paper is a review of kidney stone pathophysiology and treatment that mentions potassium citrate only as a therapeutic agent for stone prevention, without reporting any pharmacokinetic parameters. |
| PD | Reum_2024 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (eradication rates) and does not report pharmacokinetic or pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships for potassium citrate. |
| popPK | Ripa_2023 | irrelevant | 0 | 0 | The paper is a systematic review of clinical outcomes (stone-free rates, complications) for cystine stone management, not a pharmacokinetic study, and contains no PK parameters for potassium citrate. |
| popPK | Sakhaee_1991 | irrelevant | 1 | 0 | The study reports renal citrate clearance (a pharmacodynamic/physiological measure) rather than pharmacokinetic disposition parameters (CL, V, ka) for potassium citrate. |
| PD | Sandford_1992 | not_relevant | 0 | 0 | The paper investigates the biophysical properties of a potassium conductance channel in hepatocytes, not the pharmacodynamic or exposure-response relationship of the drug potassium citrate. |
| PD | Sarica_2008 | not_relevant | 1 | 0 | The text is a review overview that qualitatively mentions potassium citrate as a protective agent and explicitly states that further investigations are needed to determine the dose-response relationship, providing no numeric PD parameters. |
| PD | Schell-Feith_2006 | not_relevant | 1 | 0 | The paper is a clinical trial reporting binary outcomes (nephrocalcinosis incidence) and urinary biomarkers, but it does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for potassium citrate. |
| popPK | Singh_2011 | irrelevant | 0 | 0 | The paper is a clinical trial comparing efficacy in nephrolithiasis and does not report pharmacokinetic parameters for potassium citrate. |
| PGx | Song_2016 | not_relevant | 0 | 0 | The paper reports clinical efficacy of an H. pylori regimen and analyzes CYP2C19 polymorphism, but does not report pharmacokinetic or pharmacodynamic parameters for potassium citrate. |
| PGx | Song_2020 | not_relevant | 0 | 0 | The study compares H. pylori eradication rates and safety profiles of different antibiotic regimens and does not report pharmacokinetic or pharmacodynamic parameters for potassium citrate. |
| PGx | Suo_2025 | not_relevant | 0 | 0 | The paper focuses on H. pylori eradication efficacy and safety, not the pharmacokinetics or pharmacodynamics of potassium citrate. |
| popPK | Tanner_1998 | irrelevant | 0 | 0 | The study reports renal function (GFR) and plasma potassium levels, not pharmacokinetic disposition parameters (CL, V, ka) for potassium citrate. |
| popPK | Tanner_2000 | irrelevant | 2 | 0 | The study focuses on renal physiology (GFR, citrate handling) in a disease model rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for potassium citrate. |
| popPK | Toblli_2001 | irrelevant | 0 | 0 | The study is a histopathological and functional assessment of renal damage in rats, not a pharmacokinetic study, and does not report PK parameters for potassium citrate. |
| popPK | Vaidyanathan_2006 | irrelevant | 0 | 0 | The paper is a clinical case report describing metabolic changes (urinary oxalate/citrate levels) in a patient, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for potassium citrate. |
| popPK | Veronese_2025 | irrelevant | 0 | 0 | The paper is an umbrella review of clinical efficacy for kidney stone prevention and does not report any pharmacokinetic parameters for potassium citrate. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper reports clinical efficacy (eradication rates) and safety, not pharmacokinetic or pharmacodynamic parameters of potassium citrate. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper reports on H. pylori antibiotic resistance genotypes and treatment efficacy, not human pharmacogenomic effects on the PK/PD of potassium citrate. |
| PD | Wiegand_2020 | not_relevant | 2 | 1 | The study is an observational comparison of treated vs. untreated groups reporting mean changes in urinary parameters, but it does not model or report a quantitative exposure-response or dose-response relationship (e.g., Emax, EC50, or slope) for potassium citrate. |
| popPK | Yuruk_2017 | irrelevant | 0 | 0 | The paper is a surgical study on pediatric cystine stones where potassium citrate is only mentioned as a prophylactic treatment, with no pharmacokinetic parameters reported. |
| PGx | Zgheib_2024 | not_relevant | 0 | 0 | The paper is a case report on nephrocalcinosis and hypothyroidism; it mentions potassium citrate treatment but does not report any pharmacogenomic effects on its PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
