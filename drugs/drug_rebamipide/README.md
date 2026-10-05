<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;rebamipide&quot;}]"></div>

# rebamipide

- **generic name:** rebamipide
- **ATC codes:** `A02BX14`
- **DrugBank:** [DB11656](https://go.drugbank.com/drugs/DB11656) · **PubChem:** [CID 5042](https://pubchem.ncbi.nlm.nih.gov/compound/5042)
- **molar mass:** 370.79 g/mol (C19H15ClN2O4) — DrugBank
- **groups:** approved, investigational

## About

Rebamipide is an anti-ulcer drug used to treat peptic ulcer and other acid-related stomach disorders. It is not authorised in the European Union; it is used mainly in Asian countries such as Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7301602](https://www.wikidata.org/wiki/Q7301602) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 11:43 | 5:44 | 0/0/0 | 0/0/0 | 0/0/0 | 217,400/5,072 | ollama / qwen3.8:27b-mtp-q8_0 | 25 | 9/25 | 25/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rebamipide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FPR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 65 matched, 104 returned
- **screened:** 7  ·  **relevant:** 6
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baek_2020.pdf` | Baek IH et al., Interspecies differences on pharmacokin…, Biopharmaceutics & drug dis… (2020) | popPK | 10 | [10.1002/bdd.2247](https://doi.org/10.1002/bdd.2247) | [32557753](https://pubmed.ncbi.nlm.nih.gov/32557753) | The study reports quantitative PK parameters (half-life, apparent clearance) for rebamipide in rats and dogs, with values explicitly provided in the abstract. |
| `Ngo_2017.pdf` | Ngo L et al., Population pharmacokinetic analysis of…, Journal of pharmacokinetics… (2017) | popPK | 10 | [10.1007/s10928-017-9519-z](https://doi.org/10.1007/s10928-017-9519-z) | [28316019](https://pubmed.ncbi.nlm.nih.gov/28316019) | The paper describes a population PK model for rebamipide in humans, but the specific numeric parameter values (CL, V, ka) are not listed in the provided evidence, only relative changes and statistical significance. |
| `Shin_2004.pdf` | Shin BS et al., Oral absorption and pharmacokinetics of…, Drug development and indust… (2004) | popPK | 10 | [10.1081/ddc-200034577](https://doi.org/10.1081/ddc-200034577) | [15521332](https://pubmed.ncbi.nlm.nih.gov/15521332) | The study reports quantitative pharmacokinetic parameters (Cl, Vss, t1/2, bioavailability) for rebamipide in rats. |
| `Ko_2021.pdf` | Ko DW et al., Development of rebamipide-loaded spray-…, Pharmaceutical development… (2021) | popPK | 9 | [10.1080/10837450.2021.1924781](https://doi.org/10.1080/10837450.2021.1924781) | [33938359](https://pubmed.ncbi.nlm.nih.gov/33938359) | The study reports pharmacokinetics of rebamipide in rats, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| `Cho_2009.pdf` | Cho HY et al., Pharmacokinetics and bioequivalence of…, Clinical therapeutics (2009) | popPK | 8 | [10.1016/j.clinthera.2009.11.010](https://doi.org/10.1016/j.clinthera.2009.11.010) | [20110013](https://pubmed.ncbi.nlm.nih.gov/20110013) | The study reports quantitative non-compartmental pharmacokinetic parameters (AUC, Cmax, t1/2) for rebamipide in humans, though it lacks compartmental model parameters like CL or V. |
| `Hasegawa_2003.pdf` | Hasegawa S et al., Bioequivalence of rebamipide granules a…, Clinical drug investigation (2003) | popPK | 8 | [10.2165/00044011-200323120-00002](https://doi.org/10.2165/00044011-200323120-00002) | [17536891](https://pubmed.ncbi.nlm.nih.gov/17536891) | The study reports quantitative pharmacokinetic parameters (AUC, Cmax, tmax, t1/2) for rebamipide in humans, though it is a bioequivalence study rather than a population PK modeling study. |
| `Jin_2022.pdf` | Jin G et al., Design and evaluation of in vivo bioava…, International journal of ph… (2022) | popPK | 8 | [10.1016/j.ijpharm.2022.121718](https://doi.org/10.1016/j.ijpharm.2022.121718) | [35381311](https://pubmed.ncbi.nlm.nih.gov/35381311) | The study reports in vivo pharmacokinetic data for rebamipide in beagle dogs, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| `Markovic_2020.pdf` | Markovic M et al., Biopharmaceutical characterization of r…, European journal of pharmac… (2020) | popPK | 8 | [10.1016/j.ejps.2020.105440](https://doi.org/10.1016/j.ejps.2020.105440) | [32615260](https://pubmed.ncbi.nlm.nih.gov/32615260) | The paper describes a physiologically-based pharmacokinetic (PBPK) model for rebamipide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| `Park_2013.pdf` | Park CW et al., Physicochemical, pharmacokinetic and ph…, Drug development and indust… (2013) | popPK | 8 | [10.3109/03639045.2012.674138](https://doi.org/10.3109/03639045.2012.674138) | [22510064](https://pubmed.ncbi.nlm.nih.gov/22510064) | The study reports PK parameters (bioavailability) for rebamipide in rats, but specific numeric values for CL, V, or ka are not present in the provided text, only a relative bioavailability comparison. |
| `Pradhan_2015.pdf` | Pradhan R et al., Development of a rebamipide solid dispe…, Archives of pharmacal resea… (2015) | popPK | 8 | [10.1007/s12272-014-0399-0](https://doi.org/10.1007/s12272-014-0399-0) | [24895145](https://pubmed.ncbi.nlm.nih.gov/24895145) | The study reports a pharmacokinetic study in rats for rebamipide, but the specific quantitative parameter values (AUC, Cmax) are not listed in the provided evidence text. |
| `Hirano_2003.pdf` | Hirano Y et al., Study of inhibition of CYP2A6 by some d…, The Journal of pharmacy and… (2003) | pd | 4 | [10.1211/0022357022278](https://doi.org/10.1211/0022357022278) | [14738594](https://www.ncbi.nlm.nih.gov/pubmed/14738594) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T11:43:11.593567+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2024 | irrelevant | 0 | 0 | The study focuses on the efficacy of a nanomicelle drug delivery system for arthritis in rats and does not report pharmacokinetic parameters for rebamipide. |
| popPK | Almajidi_2026 | irrelevant | 1 | 0 | The study focuses on formulation development and in vitro/ex vivo characterization, explicitly stating that pharmacokinetic evaluation is pending, and provides no quantitative PK parameters. |
| popPK | Alqarni_2022 | irrelevant | 0 | 0 | The paper describes spectrophotometric analytical methods for quality control and contains no pharmacokinetic data or disposition parameters for rebamipide. |
| PD | Alqarni_2022 | not_relevant | 0 | 0 | The paper describes analytical methods for quantifying rebamipide and its impurity, containing no pharmacodynamic or exposure-response data. |
| popPK | Arakawa_1995 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial in rats measuring ulcer healing and relapse rates, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Aziz_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on enzyme inhibition (Sts phosphatase) and does not report any pharmacokinetic parameters for rebamipide. |
| popPK | Bakulina_2023 | relevant | 4 | 8 | The paper is a review that summarizes and tabulates quantitative PK parameters (CL/F, AUC, T1/2) for rebamipide in humans, but it does not present original population-PK modeling or compartmental analysis. |
| PD | Bakulina_2023 | not_relevant | 2 | 1 | The paper is a review article summarizing general pharmacokinetic and pharmacodynamic characteristics without reporting specific numeric PD parameters or exposure-response models. |
| popPK | Bakulina_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of H. pylori eradication therapy and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for rebamipide. |
| popPK | Banan_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytoskeletal protection and does not report any pharmacokinetic parameters for rebamipide. |
| popPK | Bhujel_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy investigation of rebamipide eye drops in a rat model, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Cho_2009 | not_relevant | 0 | 0 | The study investigated the effect of ABCB1 polymorphisms on rebamipide pharmacokinetics but found no significant differences, meaning it does not report a pharmacogenomic effect. |
| popPK | Cooper_2014 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| popPK | Dai_2023 | irrelevant | 2 | 0 | The paper describes a validated analytical method for rebamipide and mentions its application to PK studies, but no quantitative pharmacokinetic parameter values (CL, V, t1/2, etc.) are provided in the evidence. |
| popPK | El-Shitany_2025 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology investigation of rebamipide's protective effects on testicular damage and does not report any pharmacokinetic parameters. |
| popPK | Fang_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and therapeutic efficacy of rebamipide for diabetic keratopathy, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Feng_2025 | irrelevant | 1 | 0 | The paper is a mechanistic study on hair regeneration and only cites general pharmacokinetic properties (Tmax, half-life, bioavailability) from a reference without providing original quantitative disposition parameters or models. |
| popPK | Harada_2005 | irrelevant | 0 | 0 | The study is a mechanistic investigation of rebamipide's effect on gastric mucosal injury and neutrophil activation in rats, reporting no pharmacokinetic parameters. |
| PGx | Higaki_2007 | not_relevant | 0 | 0 | The paper investigates the use of adjuvants (sodium laurate and amino acids) to improve the absorption of rebamipide, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Hirano_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2A6 inhibition and does not report pharmacokinetic disposition parameters for rebamipide. |
| PD | Hirano_2003 | not_relevant | 3 | 5 | The paper reports an in vitro IC50 value for rebamipide, but it is a mechanistic enzyme inhibition study, not a pharmacodynamic exposure-response or dose-response analysis in a biological system. |
| popPK | Igarashi_2018 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for dry eye disease measuring symptoms and cytokines, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ishihara_1992 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of rebamipide on gastric mucus secretion in rats, not its pharmacokinetic parameters. |
| popPK | Ivashkin_2020 | irrelevant | 0 | 0 | The paper is a clinical review of rebamipide's efficacy in GERD and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Jang_2018 | irrelevant | 0 | 0 | The study is a mechanistic investigation of rebamipide's therapeutic effects on radiation-induced colitis in mice and does not report any pharmacokinetic parameters. |
| popPK | Jang_2023 | irrelevant | 4 | 2 | The study reports only non-compartmental PK parameters (Cmax, Tmax, AUC) for local ocular tissues in rats, lacking the specific disposition parameters (CL, V, ka, Q) or population model required for relevance. |
| popPK | Jhun_2022 | irrelevant | 0 | 0 | The study investigates the therapeutic effects of rebamipide on obesity and inflammation in mice but does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Jin_2022 | relevant | 8 | 0 | The study reports in vivo pharmacokinetic data for rebamipide in beagle dogs, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| PD | Jin_2022 | not_relevant | 0 | 0 | The study focuses on formulation development and pharmacokinetics (bioavailability) in beagle dogs, reporting no pharmacodynamic or exposure-response data. |
| popPK | Jindal_2021 | irrelevant | 2 | 0 | The study focuses on cocrystal engineering and reports relative bioavailability enhancements, but does not provide quantitative compartmental PK parameters (CL, V, ka) for rebamipide. |
| PD | Jindal_2021 | not_relevant | 0 | 0 | The provided text describes crystallographic structures and X-ray diffraction patterns (simulated vs experimental), containing no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Jing_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating therapeutic efficacy and gastrointestinal hormone levels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kako_2024 | irrelevant | 0 | 0 | The study is an analytical method validation for HPLC quantification of rebamipide in ethosomes, not a pharmacokinetic study reporting disposition parameters. |
| PD | Kako_2024 | not_relevant | 0 | 0 | The paper describes an HPLC method validation and in vitro drug release kinetics for rebamipide ethosomes, containing no pharmacodynamic or exposure-response data. |
| popPK | Kang_2024 | irrelevant | 0 | 0 | The paper is a Phase 4 clinical trial evaluating the efficacy and safety of rebamipide/nizatidine combination therapy for erosive gastritis, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for rebamipide. |
| popPK | Kawano_1991 | irrelevant | 1 | 0 | The study focuses on gastric mucosal protection and blood flow, reporting only qualitative plasma concentration data without quantitative PK parameters like clearance or volume. |
| popPK | Ki_2018 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of end-tidal carbon dioxide on cerebral oxygen saturation and does not involve rebamipide. |
| PD | Ki_2018 | not_relevant | 0 | 0 | The paper analyzes the relationship between end-tidal CO2 and cerebral oxygen saturation, not the pharmacodynamics of rebamipide. |
| popPK | Kim_2017 | irrelevant | 2 | 0 | The study focuses on formulation development and bioavailability enhancement without reporting specific quantitative PK parameters (CL, V, ka) for rebamipide. |
| popPK | Kinoshita_2012 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for dry eye and does not report any pharmacokinetic parameters for rebamipide. |
| popPK | Kishimoto_1992 | irrelevant | 0 | 0 | The study evaluates therapeutic effects on experimental gastritis in rats and does not report pharmacokinetic parameters. |
| popPK | Kleine_1993 | irrelevant | 0 | 0 | The study is a mechanistic investigation of gastroprotection and eicosanoid biosynthesis, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Kleine_1993 | not_relevant | 3 | 2 | The study reports qualitative dose-response data for indomethacin (0.1-5 mg/kg) and rebamipide (100/500 mg/kg) but lacks numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve for rebamipide itself. |
| popPK | Ko_2021 | relevant | 9 | 2 | The study reports pharmacokinetics of rebamipide in rats, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| PGx | Koyama_2002 | not_relevant | 0 | 0 | The paper investigates the metabolic pathway (CYP3A4) using in vitro systems but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters in humans. |
| popPK | Kudur_2013 | irrelevant | 1 | 0 | The paper is a review discussing pharmacodynamics and therapeutic uses without providing original quantitative pharmacokinetic parameter values. |
| PD | Kudur_2013 | not_relevant | 1 | 0 | The paper is a qualitative review of rebamipide's mechanism and therapeutic uses, lacking any quantitative PK/PD modeling or numeric exposure-response parameters. |
| popPK | Kurokawa_1998 | irrelevant | 0 | 0 | The study is a mechanistic investigation of gastric mucosal protection in rats and does not report any pharmacokinetic parameters for rebamipide. |
| popPK | Lee_1995 | irrelevant | 0 | 0 | The study is a mechanistic investigation of hepatic function and lipid peroxidation in rats, not a pharmacokinetic study, and reports no disposition parameters for rebamipide. |
| popPK | Lim_2025 | irrelevant | 0 | 0 | The study is a mechanistic investigation of rebamipide's neuroprotective effects in a Parkinson's disease model and does not report pharmacokinetic parameters. |
| PD | Lim_2025 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent effects (10-20 mg/kg) and binding kinetics (SPR) but lacks a formal PK/PD model or numeric PD parameters (Emax, EC50) for the pharmacodynamic endpoints. |
| popPK | Lv_2026 | irrelevant | 0 | 0 | The paper is a formulation and efficacy study for dry eye that reports no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for rebamipide. |
| popPK | Markovic_2020 | relevant | 8 | 0 | The paper describes a physiologically-based pharmacokinetic (PBPK) model for rebamipide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| popPK | Mishra_2019 | irrelevant | 0 | 0 | The study is a pharmacological investigation of neuroprotective effects in a Parkinson's disease model and does not report any pharmacokinetic parameters for rebamipide. |
| popPK | Moon_2004 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of receptor binding and cellular effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Morofuji_2024 | irrelevant | 0 | 0 | The study is an ex vivo/in vitro penetration enhancement study using a porcine eye model and does not report systemic pharmacokinetic parameters (CL, V, t1/2) for rebamipide. |
| PD | Morofuji_2024 | not_relevant | 2 | 1 | The paper reports qualitative enhancement of corneal uptake by penetratin at specific concentrations but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for rebamipide. |
| popPK | Murakami_2015 | irrelevant | 0 | 0 | The study investigates the immunological mechanism of rebamipide in an asthma model and does not report any pharmacokinetic parameters. |
| popPK | Nagano_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating the inhibition of superoxide production in neutrophils and contains no pharmacokinetic parameters. |
| PD | Nagano_2001 | not_relevant | 4 | 2 | The paper describes a competitive antagonistic mechanism and a parallel right-shift in the dose-response curve, but the provided text does not contain specific numeric PD parameters (e.g., Ki, IC50, Emax) or data points to derive them. |
| PGx | Nakamura_2016 | not_relevant | 0 | 0 | The study assesses the clinical efficacy of rebamipide (ulcer healing) and mentions CYP2C19 genotype only to show no interaction with treatment effect, rather than reporting a pharmacogenomic effect on rebamipide's PK or PD parameters. |
| popPK | Nakashima_2017 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of rebamipide's protective effects on radiation-induced glossitis in rats and does not report any pharmacokinetic parameters. |
| popPK | Narala_2019 | irrelevant | 4 | 0 | The study reports a relative bioavailability improvement (4.32-fold) but lacks specific quantitative PK parameters (CL, V, t1/2) in the provided text. |
| PD | Narala_2019 | not_relevant | 2 | 1 | The paper reports PK improvements (bioavailability) and qualitative anti-ulcer efficacy (maximum prophylactic activity) but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response/dose-response curve. |
| popPK | Nebiki_1998 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of rebamipide in H. pylori eradication and does not report any pharmacokinetic parameters. |
| PD | Nebiki_1998 | not_relevant | 1 | 0 | The paper reports a clinical trial comparing cure rates between two fixed-dose groups but provides no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Ngo_2017 | relevant | 10 | 2 | The paper describes a population PK model for rebamipide in humans, but the specific numeric parameter values (CL, V, ka) are not listed in the provided evidence, only relative changes and statistical significance. |
| popPK | Ogane_2017 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of rebamipide on salivary secretion and intracellular calcium, not its pharmacokinetic parameters. |
| popPK | Oh_2022 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing rebamipide and lansoprazole for NSAID-induced gastroenteropathy and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Oka_1991 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial assessing ulcer protection and SOD activity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Okawa_2021 | irrelevant | 2 | 0 | The study focuses on formulation development (SNEDDS) and qualitative improvement of absorption, without reporting quantitative PK parameters like clearance, volume, or half-life. |
| popPK | Ota_2016 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of rebamipide for preventing gastrointestinal mucosal injury, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Ota_2016 | not_relevant | 3 | 2 | The study is a clinical trial comparing fixed doses (300 mg vs 900 mg) and reports qualitative dose-dependent trends and categorical outcomes (lesion counts, calprotectin levels) without providing a mathematical PK/PD model, concentration-effect curve, or numeric PD parameters like Emax or EC50. |
| popPK | Park_2013 | relevant | 8 | 2 | The study reports PK parameters (bioavailability) for rebamipide in rats, but specific numeric values for CL, V, or ka are not present in the provided text, only a relative bioavailability comparison. |
| PD | Park_2013 | not_relevant | 2 | 1 | The paper reports qualitative improvements in bioavailability and ulcer area reduction but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (e.g., Emax, EC50) for rebamipide. |
| popPK | Park_2025 | irrelevant | 0 | 0 | The study is a Phase 2 clinical trial evaluating the efficacy of CKD-495, with rebamipide serving only as a comparator drug; no pharmacokinetic parameters for rebamipide are reported. |
| popPK | Park_2026 | irrelevant | 1 | 0 | The paper is a Phase 2a clinical efficacy trial for a rebamipide prodrug (SA001) that does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for rebamipide, referencing only prior Phase 1 data. |
| PD | Park_2026 | not_relevant | 2 | 0 | The study reports a lack of dose-response relationship and provides no numeric PD parameters (Emax, EC50, etc.) or concentration-effect data. |
| popPK | Patel_2026 | irrelevant | 0 | 0 | The study is an in-vitro analytical method development and drug release study, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Patel_2026_2 | irrelevant | 0 | 0 | The study is an in vitro/ex vivo formulation and permeation study that does not report quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for rebamipide. |
| popPK | Pradhan_2015 | relevant | 8 | 2 | The study reports a pharmacokinetic study in rats for rebamipide, but the specific quantitative parameter values (AUC, Cmax) are not listed in the provided evidence text. |
| PD | Pradhan_2015 | not_relevant | 0 | 0 | The paper focuses on formulation development and PK bioavailability (AUC, Cmax) but does not report any pharmacodynamic or exposure-response analysis. |
| popPK | Sakurai_1994 | irrelevant | 0 | 0 | The study is a mechanistic investigation of the protective effect of rebamipide on gastric mucosal lesions in rats, reporting no pharmacokinetic parameters. |
| popPK | Salama_2026 | irrelevant | 2 | 0 | The study focuses on formulation optimization and in-vivo pharmacodynamics (nitric oxide inhibition) rather than reporting quantitative pharmacokinetic parameters like clearance or volume for rebamipide. |
| PD | Salama_2026 | not_relevant | 2 | 1 | The paper reports qualitative in-vivo efficacy (16-fold rise in NO inhibition) and permeation data, but lacks a formal PK/PD model or numeric exposure-response parameters (e.g., EC50, Emax) for rebamipide. |
| popPK | Samim_2024 | irrelevant | 0 | 0 | The study is an in-vitro formulation and permeability assessment (Caco-2 cells) without in-vivo pharmacokinetic parameter estimation. |
| popPK | Shimoyama_2002 | irrelevant | 0 | 0 | no_text gate: only 12 chars of text extracted (&lt; 400) |
| popPK | Shiraki_1988 | irrelevant | 0 | 0 | The study investigates the histological healing effects of proamipide on gastric ulcers in rats and does not report any pharmacokinetic parameters for rebamipide. |
| PGx | Son_2015 | not_relevant | 0 | 0 | The paper investigates the gastroprotective efficacy and safety of scoparone derivatives, using rebamipide only as a standard comparator, and does not report any pharmacogenomic effects on rebamipide's PK or PD parameters. |
| popPK | Sonawane_2011 | irrelevant | 0 | 0 | The paper describes a stability-indicating HPLC method and forced degradation studies, containing no pharmacokinetic data or disposition parameters for rebamipide. |
| PD | Sonawane_2011 | not_relevant | 0 | 0 | The paper describes the development and validation of a stability-indicating HPLC assay method for rebamipide, containing no pharmacodynamic or exposure-response data. |
| popPK | Suksai_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for symptom management and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for rebamipide. |
| popPK | Suzuki_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of rebamipide's effect on neutrophil-induced cell injury and does not report any pharmacokinetic parameters. |
| popPK | Suzuki_2019 | irrelevant | 0 | 0 | The study is an in-vitro chemical reaction analysis of rebamipide with hypobromous acid, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Tanaka_2019 | irrelevant | 0 | 0 | The paper is a pharmaceutical formulation and characterization study (amorphous solid dispersion) that reports physical properties and dissolution profiles, but contains no pharmacokinetic parameters (CL, V, ka, etc.) for rebamipide. |
| PD | Tanaka_2019 | not_relevant | 0 | 0 | The paper focuses on the formulation and physical characterization of amorphous solid dispersions (dissolution, stability, structure) and does not report any pharmacokinetic or pharmacodynamic data. |
| popPK | Tung_2011 | irrelevant | 2 | 0 | The study reports a relative bioavailability increase (1.74-fold) but does not provide quantitative disposition parameters (CL, V, ka, t1/2) or a PK model for rebamipide. |
| popPK | Urita_2009 | irrelevant | 0 | 0 | The study investigates the effect of rebamipide on pilocarpine-induced salivation in rats and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for rebamipide. |
| popPK | Won_2023 | irrelevant | 4 | 0 | The study reports bioequivalence statistics (Cmax, AUC) for a formulation comparison but does not provide quantitative disposition parameters (CL, V, ka) or a compartmental model for rebamipide. |
| popPK | Woo_2025 | irrelevant | 0 | 0 | The study is a real-world effectiveness trial evaluating patient-reported symptom outcomes, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Yamasaki_1987 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of OPC-12759, not the pharmacokinetics of rebamipide. |
| popPK | Yamate_2024 | irrelevant | 0 | 0 | The paper is a nested case-control study evaluating the clinical efficacy of rebamipide in preventing gastrointestinal bleeding, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Yamate_2024 | not_relevant | 0 | 0 | The study is a nested case-control analysis using claims data that reports odds ratios for categorical exposure groups (continuous vs. irregular vs. non-user) rather than a quantitative pharmacodynamic or exposure-response relationship with numeric PD parameters. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating ulcer healing efficacy and does not report any pharmacokinetic parameters for rebamipide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
