<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;lactitol&quot;}]"></div>

# lactitol

- **generic name:** lactitol
- **ATC codes:** `A06AD12`
- **DrugBank:** [DB12942](https://go.drugbank.com/drugs/DB12942)
- **groups:** approved

## About

**Description.** Lactitol, also known as 4-β-D-galactopyranosyl-D-glucitol, is a sugar alcohol synthesized from [lactose].[A190918] It is used in food manufacturing as a nutritive sweetener and is approximately 35% as sweet as table sugar (i.e. [sucrose]).[A190912] Clinically, lactitol has been investigated for use as an osmotic laxative and, along with other non-absorbable disaccharides such as [lactulose], in the treatment of hepatic encephalopathy in patients with cirrhosis.[A190915,A190918]

Pizensy, an oral lactitol powder for solution, was approved by the FDA for use in chronic idiopathic constipation in February 2020.[L11803]

**Indication.** Lactitol is indicated for the treatment of chronic idiopathic constipation in adults.[L11803]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 19:21 | 6:41 | 0/0/0 | 0/1/1 | 0/0/0 | 141,788/3,576 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 3/4 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Oku_2007](drugs/drug_lactitol/pd_Oku_2007_diarrhea.md) | Oku T et al., Threshold for transitory diarrhea induc…, Journal of nutritional scie… (2007) | [10.3177/jnsv.53.13](https://doi.org/10.3177/jnsv.53.13) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Oku_2005](drugs/drug_lactitol/pd_Oku_2005_breath_hydrogen.md) | Oku T et al., Maximum permissive dosage of lactose an…, Journal of nutritional scie… (2005) | [10.3177/jnsv.51.51](https://doi.org/10.3177/jnsv.51.51) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Oku_2005](drugs/drug_lactitol/pd_Oku_2005_serum_glucose.md) | Oku T et al., Maximum permissive dosage of lactose an…, Journal of nutritional scie… (2005) | [10.3177/jnsv.51.51](https://doi.org/10.3177/jnsv.51.51) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Oku_2005](drugs/drug_lactitol/pd_Oku_2005_serum_insulin.md) | Oku T et al., Maximum permissive dosage of lactose an…, Journal of nutritional scie… (2005) | [10.3177/jnsv.51.51](https://doi.org/10.3177/jnsv.51.51) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Oku_2005](drugs/drug_lactitol/pd_Oku_2005_transitory_diarrhea.md) | Oku T et al., Maximum permissive dosage of lactose an…, Journal of nutritional scie… (2005) | [10.3177/jnsv.51.51](https://doi.org/10.3177/jnsv.51.51) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lactitol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…raded into organic acids in the colon and eliminated in the feces.[L11803]…”</sub> | prose |
| excretion | small intestine | <sub>“…Lactitol is not absorbed in the gastrointestinal tract to any significant extent. The vast…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 26 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delas_1991 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerability study for constipation and does not report any pharmacokinetic parameters for lactitol. |
| PD | Delas_1991 | not_relevant | 1 | 0 | The paper reports only qualitative clinical efficacy and tolerability percentages for a fixed dose, with no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper is a safety re-evaluation of erythritol, not lactitol, and contains no pharmacokinetic parameters for the target drug. |
| PD | EFSA_2023 | not_relevant | 0 | 0 | The paper is a risk assessment for erythritol (E 968), not lactitol, and does not report a pharmacodynamic model or numeric PD parameters for lactitol. |
| popPK | Evstafeva_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 2-octynohydroxamic acid, and lactitol is only mentioned as a standard comparator for hepatic encephalopathy treatment without any PK data. |
| popPK | Giorgi_2010 | irrelevant | 0 | 0 | The paper focuses on the synthesis of PEGylated lactose analogs for enzyme inhibition studies, not on the pharmacokinetic parameters of lactitol. |
| popPK | Giorgi_2012 | irrelevant | 2 | 0 | The study focuses on the synthesis and bioavailability of PEGylated lactose analogs (not lactitol itself) for anti-parasitic use, and no quantitative PK parameters (CL, V, etc.) for lactitol are reported in the evidence. |
| popPK | Grimble_2007 | irrelevant | 0 | 0 | The paper is a review of amino acid toxicity where lactitol is only mentioned as a comparator for laxative thresholds, with no PK parameters reported. |
| PD | Grimble_2007 | not_relevant | 1 | 0 | The paper is a qualitative review of adverse effects for arginine and related amino acids; it mentions lactitol only as a comparative threshold for laxative effect without providing any numeric PD parameters or concentration-effect curves for lactitol. |
| popPK | Heredia_1988 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing lactitol and lactulose for hepatic encephalopathy and does not report any pharmacokinetic parameters. |
| PD | Heredia_1988 | not_relevant | 1 | 0 | The paper is a clinical efficacy trial comparing two drugs with no pharmacokinetic data, concentration measurements, or quantitative dose-response modeling. |
| popPK | Iwasa_2015 | irrelevant | 0 | 0 | The paper is a review of pathophysiology and management of hepatic encephalopathy that mentions lactitol only as a therapeutic agent without reporting any pharmacokinetic parameters. |
| popPK | Krupa_2017 | irrelevant | 0 | 0 | The study focuses on tadalafil as the subject drug, with lactitol serving only as a crystalline matrix former/comparator, and no PK parameters for lactitol are reported. |
| popPK | Luo_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of docetaxel liposomes, using lactitol only as a structural component for liver targeting, not as the subject drug. |
| PD | Luo_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and tissue distribution of docetaxel liposomes, not on the pharmacodynamics or exposure-response relationship of lactitol. |
| popPK | Morgan_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for hepatic encephalopathy and does not report any pharmacokinetic parameters for lactitol. |
| PD | Morgan_1987 | not_relevant | 1 | 0 | The study is a clinical efficacy trial comparing two drugs with dose titration to a clinical endpoint (stool frequency), but it does not report pharmacokinetic data, exposure-response modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Nie_2021 | irrelevant | 0 | 0 | Lactitol is used only as a chemical precursor to synthesize lipids for liposome targeting studies, not as the subject drug for pharmacokinetic analysis. |
| popPK | Oku_2005 | irrelevant | 0 | 0 | The study is a lactose tolerance and breath hydrogen test assessing gastrointestinal tolerance and fermentation, not a pharmacokinetic study reporting disposition parameters like clearance or volume for lactitol. |
| PD | Oku_2005 | not_relevant | 3 | 2 | The study reports dose-response data for diarrhea incidence (thresholds) and breath hydrogen AUC, but lacks numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect model. |
| popPK | Oku_2007 | irrelevant | 0 | 0 | The study estimates non-effective dose levels for diarrhea induction (toxicology/safety) rather than reporting pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| popPK | Pérez-Anes_2010 | irrelevant | 0 | 0 | The paper describes the synthesis and anti-HIV activity of dendrimeric compounds containing lactitol moieties, not the pharmacokinetics of lactitol as a drug. |
| popPK | Riggio_1990 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for hepatic encephalopathy and does not report any pharmacokinetic parameters for lactitol. |
| PD | Riggio_1990 | not_relevant | 1 | 0 | The paper reports clinical efficacy and dose ranges for stool softening but does not provide a concentration-effect or dose-response curve with numeric PD parameters (e.g., Emax, EC50). |
| PGx | Sakagami_2012 | not_relevant | 0 | 0 | The paper investigates the biological activity of a plant extract supplement containing lactitol, not the pharmacokinetics or pharmacodynamics of lactitol itself, and contains no pharmacogenomic data. |
| popPK | Salerno_1994 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for hepatic encephalopathy and does not report any pharmacokinetic parameters for lactitol. |
| PD | Salerno_1994 | not_relevant | 3 | 0 | The paper reports qualitative dose-response trends (higher dose more effective) but provides no numeric PD parameters, concentration-effect curves, or quantitative data to derive Emax/EC50. |
| popPK | Soontornchai_1998 | irrelevant | 2 | 0 | The study focuses on intestinal transit and digestibility (recovery percentages) rather than reporting quantitative pharmacokinetic disposition parameters like clearance, volume of distribution, or compartmental model parameters. |
| popPK | Strobel_1985 | irrelevant | 0 | 0 | The study focuses on the synthesis and cellular retention of 125I-labeled lactitol derivatives as tracers for protein catabolism, not on the pharmacokinetic disposition parameters of lactitol itself. |
| PGx | Taylor_2016 | not_relevant | 0 | 0 | The paper describes the engineering of a bacterial transcription factor (LacI) to respond to lactitol as a ligand, which is a synthetic biology study, not a pharmacogenomic study of lactitol's PK/PD in humans. |
| popPK | Walder_1988 | irrelevant | 0 | 0 | The study reports clinical efficacy and dose-response (ED50) for constipation, but contains no pharmacokinetic parameters (CL, V, ka, etc.) for lactitol. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper describes a mass spectrometry database resource for drug exposure detection and does not report pharmacokinetic parameters for lactitol. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | The paper describes a metabolomics database for drug exposure detection and does not report any pharmacodynamic or exposure-response analysis for lactitol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
