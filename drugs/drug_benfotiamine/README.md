<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11D&quot;,&quot;href&quot;:&quot;atc/A11D.md&quot;},{&quot;label&quot;:&quot;benfotiamine&quot;}]"></div>

# benfotiamine

- **generic name:** benfotiamine
- **ATC codes:** `A11DA03`
- **DrugBank:** [DB11748](https://go.drugbank.com/drugs/DB11748) · **PubChem:** [CID 3032771](https://pubchem.ncbi.nlm.nih.gov/compound/3032771)
- **molar mass:** 466.45 g/mol (C19H23N4O6PS) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Benfotiamine is a vitamin B1 analogue used as a thiamine supplement, for example in vitamin B1 deficiency. It is available as a vitamin product in the ATC vitamins group, though it has also been investigated for other uses and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409953](https://www.wikidata.org/wiki/Q409953) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 07:06 | 2:41 | 0/0/0 | 0/0/0 | 0/0/0 | 76,333/2,093 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 5/9 | 11/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xie_2014.pdf` | Xie F et al., Pharmacokinetic study of benfotiamine a…, Journal of clinical pharmac… (2014) | popPK | 9 | [10.1002/jcph.261](https://doi.org/10.1002/jcph.261) | [24399744](https://pubmed.ncbi.nlm.nih.gov/24399744) | The study reports PK parameters for thiamine (the active metabolite of benfotiamine) in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only bioavailability percentages. |

<sub>queue written 2026-10-05T07:06:13.616516+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Avakumov_1976 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| popPK | Babaei-Jadidi_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of dyslipidaemia and hepatic metabolite concentrations in rats, not a pharmacokinetic study reporting clearance, volume, or half-life parameters for benfotiamine. |
| PD | Bashir_2024 | not_relevant | 2 | 1 | The study reports qualitative dose-response trends (100 vs 200 mg/kg) and behavioral improvements but lacks concentration data or numeric PD parameters (Emax, EC50) required for an extractable exposure-response relationship. |
| popPK | Beltramo_2021 | irrelevant | 0 | 0 | The paper is a narrative review discussing the history and clinical potential of thiamine and benfotiamine in diabetes, without reporting any original quantitative pharmacokinetic parameters. |
| PD | Beltramo_2021 | not_relevant | 1 | 0 | The paper is a narrative review discussing the history and mechanisms of thiamine/benfotiamine in diabetes, containing no original PK/PD data, dose-response curves, or numeric PD parameters. |
| popPK | Bitsch_1991 | irrelevant | 2 | 0 | The study reports bioavailability metrics (AUC, Cmax) and transketolase activity but does not provide quantitative compartmental PK parameters (CL, V, ka, t1/2) for benfotiamine. |
| popPK | Bozic_2023 | irrelevant | 0 | 0 | The paper is a review focusing on the neuroprotective and therapeutic potential of thiamine and benfotiamine, with no quantitative pharmacokinetic parameters reported. |
| popPK | Bunik_2023 | irrelevant | 0 | 0 | The paper is an editorial discussing a pilot clinical trial of benfotiamine in Alzheimer's disease and cancer metabolism, but it does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for benfotiamine. |
| PD | Bykov_2022 | not_relevant | 0 | 0 | The paper is a review of sulbutiamine and does not report any quantitative pharmacodynamic or exposure-response data for benfotiamine. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The study investigates the mechanism of HbA1c formation via d-ribose and the effect of benfotiamine on d-ribose levels, but does not report any pharmacokinetic parameters (CL, V, ka, etc.) for benfotiamine. |
| popPK | Erdogan_2020 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology investigation of benfotiamine's protective effects on liver injury and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Eskandari_2022 | irrelevant | 0 | 0 | The paper is an in silico molecular docking study investigating benfotiamine as a potential inhibitor of SARS-CoV-2 proteins, containing no pharmacokinetic data. |
| popPK | FUKUI_1962 | irrelevant | 0 | 0 | The study investigates the biological activity of S-benzoylthiamine monophosphate (BTMP) in yeast, not the pharmacokinetics of benfotiamine. |
| PD | Fung_2013 | not_relevant | 0 | 0 | The paper explicitly states that benfotiamine did not interfere with the effect of hepcidin on ferroportin, and no PD parameters are reported for it. |
| PD | Gholami_2025 | not_relevant | 3 | 2 | The study reports group-level mean effects for two fixed doses (100 and 200 mg/kg) without measuring drug concentrations or fitting a dose-response model, making it impossible to derive specific PD parameters like Emax or EC50. |
| popPK | Gibson_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for Alzheimer's disease and does not report pharmacokinetic parameters (CL, V, ka, etc.) for benfotiamine. |
| popPK | Hanawa_1995 | irrelevant | 0 | 0 | The study investigates the in-vitro release behavior of benfotiamine from a silk fibroin gel formulation, not pharmacokinetic disposition parameters in a biological system. |
| PD | Hanawa_1995 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding benfotiamine or pharmacodynamics. |
| popPK | Higaki_2025 | irrelevant | 0 | 0 | The study is a retrospective observational analysis of vitamin B1 levels and cognitive scores in Alzheimer's patients, containing no pharmacokinetic data or disposition parameters for benfotiamine. |
| popPK | Javed_2015 | irrelevant | 0 | 0 | The paper is a review of treatment strategies for painful diabetic neuropathy and mentions benfotiamine only as a pathogenetic agent without reporting any pharmacokinetic parameters. |
| popPK | Karpov_1986 | irrelevant | 0 | 0 | The study investigates benzoylthiamine monophosphate, not benfotiamine, and reports qualitative distribution/excretion observations rather than quantitative PK parameters. |
| popPK | Kolomoĭskaia_1989 | irrelevant | 0 | 0 | The study is a clinical trial assessing hemodynamic effects of a drug combination containing benfotiamine, with no pharmacokinetic parameters reported. |
| popPK | Laskova_1995 | irrelevant | 0 | 0 | The study focuses on immunomodulating effects and physical fitness in rats, with no pharmacokinetic parameters reported for benfotiamine. |
| popPK | Masson_1966 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| popPK | Obrenovich_2003 | irrelevant | 0 | 0 | The paper is a news summary of a mechanistic study in rats focusing on metabolic pathways and disease prevention, with no pharmacokinetic parameters reported. |
| PD | Parlak_2024 | not_relevant | 2 | 1 | The study is a qualitative toxicology experiment comparing fixed doses of benfotiamine and cyfluthrin in rats, reporting histological and sperm quality outcomes without any concentration-effect modeling, PK/PD fitting, or derivation of numeric PD parameters like Emax or EC50. |
| popPK | Rabbani_2011 | irrelevant | 0 | 0 | The paper is a review discussing the role of thiamine and benfotiamine in diabetic nephropathy without reporting original quantitative pharmacokinetic parameters. |
| popPK | Raval_2015 | irrelevant | 0 | 0 | This is a systematic review of clinical outcomes (albuminuria, GFR) for vitamin B derivatives in diabetic kidney disease, not a pharmacokinetic study, and contains no PK parameters for benfotiamine. |
| popPK | SAMPEREZ_1965 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| popPK | Strekalova_2025 | irrelevant | 0 | 0 | The study is a behavioral and mechanistic investigation of oxidative stress and inflammation in mice, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for benfotiamine. |
| popPK | Takekawa_2023 | irrelevant | 0 | 0 | The paper is a clinical case report on headache treatment where benfotiamine is merely a co-administered supplement, with no pharmacokinetic data reported. |
| popPK | Várkonyi_2017 | irrelevant | 0 | 0 | The paper is a clinical review of diabetic neuropathy management and does not report any quantitative pharmacokinetic parameters for benfotiamine. |
| PD | Winkler_1999 | not_relevant | 3 | 1 | The paper reports a clinical dose-comparison study with qualitative efficacy conclusions but provides no numeric concentration-effect data, PK parameters, or derivable PD model parameters (e.g., Emax, EC50). |
| popPK | Xie_2014 | relevant | 9 | 2 | The study reports PK parameters for thiamine (the active metabolite of benfotiamine) in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only bioavailability percentages. |
| popPK | Yako_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell viability and metabolism where benfotiamine is used as a therapeutic agent, not a pharmacokinetic study. |
| popPK | Zaheer_2021 | irrelevant | 0 | 0 | The paper is a review of treatment options for diabetic polyneuropathy and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for benfotiamine. |
| popPK | Ziegler_2021 | irrelevant | 0 | 0 | The paper is a clinical review of diabetic polyneuropathy management and does not report any pharmacokinetic parameters for benfotiamine. |
| popPK | Ziegler_2022 | irrelevant | 0 | 0 | The paper is a clinical consensus guideline for diabetic neuropathy management and does not report any pharmacokinetic parameters for benfotiamine. |
| popPK | Ziegler_2022_2 | irrelevant | 0 | 0 | The paper is a review discussing the therapeutic role of biofactors like benfotiamine in diabetic complications and does not report any quantitative pharmacokinetic parameters. |
| popPK | Ziegler_2023 | irrelevant | 0 | 0 | The paper is a review of pathogenetic treatments for diabetic peripheral neuropathy and does not report any quantitative pharmacokinetic parameters for benfotiamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
