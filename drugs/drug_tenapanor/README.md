<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;tenapanor&quot;}]"></div>

# tenapanor

- **generic name:** tenapanor
- **ATC codes:** `A06AX08`
- **DrugBank:** [DB11761](https://go.drugbank.com/drugs/DB11761)
- **groups:** approved, investigational

## About

**Description.** Tenapanor is a novel, small molecule medication approved in September 2019 for the treatment of constipation-predominant irritable bowel-syndrome (IBS-C).[L8558] It was first designed and synthesized in 2012.[A185492] As an inhibitor of the sodium/hydrogen exchanger isoform 3 (NHE3) transporter, it is the first and currently only medication within its class[A185489,A185492,A185495] and therefore exists as a novel alternative in the treatment of IBS-C. In October 2023, tenapanor was approved for the treatment of chronic kidney disease.[L48511]

**Indication.** Tenapanor is indicated for the treatment of constipation-predominant irritable bowel syndrome (IBS-C) in adults.[L8558] 

It is also indicated to reduce serum phosphorus in adults with chronic kidney disease (CKD) on dialysis as add-on therapy in patients who have an inadequate response to phosphate binders or who are intolerant of any dose of phosphate binder therapy.[L48511]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 00:37 | 6:52 | 0/0/0 | 0/1/0 | 0/0/0 | 200,199/4,273 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 2/16 | 19/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Yin_2017](drugs/drug_tenapanor/pd_Yin_2017_NHE3.md) | Yin J et al., A common NHE3 single-nucleotide polymor…, American journal of physiol… (2017) | [10.1152/ajpgi.00044.2017](https://doi.org/10.1152/ajpgi.00044.2017) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tenapanor) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `SLCO2B1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…of tenapanor, 70% of the radioactivity was excreted in the feces within 120 hours of admin…”</sub> | prose |
| excretion | kidney | <sub>“…stration. Only 9% of the administered dose was found in the urine, existing primarily as m…”</sub> | prose |

<sub>Actors without a tissue in the table: SLC9A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 39 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yuan_2024.pdf` | Yuan G et al., Pharmacokinetics, Safety, and Tolerabil…, International journal of cl… (2024) | popPK | 8 | [10.1155/2024/1386980](https://doi.org/10.1155/2024/1386980) | [38481823](https://pubmed.ncbi.nlm.nih.gov/38481823) | The study reports PK parameters for tenapanor's metabolite (M1) such as Cmax and AUC, but lacks specific quantitative disposition parameters (CL, V, ka) for the parent drug tenapanor, which was below the limit of quantitation. |

<sub>queue written 2026-09-22T00:35:16.201005+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akizawa_2021 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on pill burden reduction and phosphorus control, containing no pharmacokinetic parameters or disposition data for tenapanor. |
| PD | Akizawa_2021 | not_relevant | 0 | 0 | The paper reports clinical efficacy (pill burden reduction) and safety but contains no pharmacokinetic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Aoki_2022 | irrelevant | 0 | 0 | The paper is a letter to the editor discussing clinical trial design and safety, containing no pharmacokinetic data or quantitative disposition parameters for tenapanor. |
| PD | Aoki_2022 | not_relevant | 0 | 0 | The text is a letter to the editor discussing study design and safety concerns, containing no pharmacodynamic data, models, or numeric parameters. |
| popPK | Currò_2023 | irrelevant | 1 | 0 | The paper is a literature review/update that discusses pharmacokinetic properties qualitatively but does not report original quantitative disposition parameters or numeric values for tenapanor. |
| PD | Currò_2023 | not_relevant | 2 | 1 | The paper is a qualitative review that mentions the IC50 concept to explain the mechanism of action but does not provide a specific numeric IC50 value or any extractable dose-response curve parameters. |
| popPK | Haggie_2018 | irrelevant | 0 | 0 | The paper focuses on the discovery of SLC26A3 inhibitors (DRA inh-A250) and uses tenapanor only as a comparator agent in efficacy studies, without reporting any pharmacokinetic parameters for tenapanor. |
| PD | Haggie_2018 | not_relevant | 0 | 0 | The provided text contains only methodological details and figure captions without any data, results, or numeric parameters regarding tenapanor or any drug's pharmacodynamic relationship. |
| popPK | Inaba_2022 | irrelevant | 0 | 0 | The paper is a Phase 2 clinical trial evaluating the efficacy (serum phosphorus levels) and safety of tenapanor, and it does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Inaba_2022_2 | irrelevant | 0 | 0 | The paper is a letter reply regarding clinical trial discontinuations and dosing rationale, containing no pharmacokinetic parameters or quantitative disposition data for tenapanor. |
| PD | Inaba_2022_2 | not_relevant | 0 | 0 | The text is a letter to the editor discussing study discontinuations and dose selection rationale, containing no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Johansson_2017 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of the probe drug midazolam to assess CYP3A4 interactions, and tenapanor plasma concentrations were below the limit of quantification, so no quantitative disposition parameters for tenapanor are reported. |
| PD | Johansson_2017 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for CYP inhibition and clinical PK ratios for a drug-drug interaction study, but does not provide a pharmacodynamic exposure-response model or numeric PD parameters (e.g., Emax, EC50) for tenapanor's therapeutic effect. |
| PGx | Johansson_2017 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP3A4 inhibition) of tenapanor, not pharmacogenomic effects of gene variants on tenapanor's PK/PD. |
| popPK | Johansson_2017_2 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic endpoints (sodium/phosphorus excretion) and reports that plasma tenapanor concentrations were below the limit of quantification, providing no quantitative PK parameters. |
| PD | Johansson_2017_2 | not_relevant | 2 | 1 | The paper reports a drug-drug interaction study comparing fixed doses, providing only mean effect values (stool/urine sodium/phosphorus) without concentration-effect modeling or derivable PD parameters like Emax or EC50. |
| popPK | Johansson_2017_3 | irrelevant | 0 | 0 | Tenapanor is a co-administered agent in a drug-drug interaction study where it was not detected in plasma, so no PK parameters for tenapanor are reported. |
| PD | Johansson_2017_3 | not_relevant | 1 | 0 | The study is a drug-drug interaction assessment using cefadroxil as a probe; it reports PK ratios and qualitative stool effects but provides no numeric concentration-effect or dose-response parameters for tenapanor. |
| popPK | Johansson_2017_4 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of food effects on stool/urinary electrolytes and explicitly states that PK parameters were not evaluated because tenapanor has minimal systemic availability (all plasma levels were below the limit of quantification). |
| PD | Johansson_2017_4 | not_relevant | 3 | 2 | The study reports mean pharmacodynamic effects (stool/urinary excretion) under different food conditions but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Johansson_2017_5 | irrelevant | 2 | 0 | The study reports minimal systemic exposure with plasma concentrations mostly below the limit of quantification and does not provide quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Pergola_2022 | irrelevant | 0 | 0 | The paper is a clinical review of phosphate management in CKD that discusses tenapanor's mechanism and efficacy but does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Rosenbaum_2018 | irrelevant | 1 | 0 | The study focuses on pharmacodynamics and safety, reporting that plasma concentrations were below the quantification limit in 98.5% of samples, with no quantitative PK parameters (CL, V, t1/2) provided. |
| popPK | Sinagra_2020 | irrelevant | 2 | 0 | The paper is a review article summarizing evidence without providing original quantitative pharmacokinetic parameter values for tenapanor. |
| PD | Sinagra_2020 | not_relevant | 2 | 0 | The text is a review summary that qualitatively describes tenapanor's local pharmacodynamic profile and clinical efficacy but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Sprague_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for hyperphosphatemia and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for tenapanor. |
| PD | Sprague_2024 | not_relevant | 0 | 0 | The paper reports clinical efficacy (serum phosphate reduction) and safety outcomes but does not provide pharmacokinetic data or a quantitative exposure-response/dose-response model with numeric PD parameters. |
| popPK | Stamatopoulos_2023 | irrelevant | 2 | 1 | The paper is a physiologically based biopharmaceutics model (PBBM) focused on pharmacodynamic endpoints (sodium excretion) rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, ka) for tenapanor, which has negligible systemic exposure. |
| popPK | Suzuki_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial evaluating serum phosphorus and stool consistency, not a pharmacokinetic study, and contains no PK parameters for tenapanor. |
| PD | Suzuki_2025 | not_relevant | 2 | 1 | The paper is a clinical trial reporting clinical outcomes (serum phosphorus, stool consistency) over time but does not provide pharmacokinetic data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper is a GWAS study on diverticular disease genetics and does not report pharmacokinetic or pharmacodynamic effects of tenapanor. |
| popPK | Yin_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NHE3 polymorphisms and reports IC50 values for tenapanor inhibition, but it does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for tenapanor. |
| popPK | Yuan_2024 | relevant | 8 | 2 | The study reports PK parameters for tenapanor's metabolite (M1) such as Cmax and AUC, but lacks specific quantitative disposition parameters (CL, V, ka) for the parent drug tenapanor, which was below the limit of quantitation. |
| popPK | Zielińska_2015 | irrelevant | 2 | 0 | The paper is a review article discussing pharmacokinetics qualitatively without providing original quantitative disposition parameter values for tenapanor. |
| PD | Zielińska_2015 | not_relevant | 2 | 0 | The text is a review article that qualitatively discusses pharmacodynamics and mentions the need to optimize dose-response, but it does not report specific numeric PD parameters or extractable concentration-effect curves. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | no_text gate: only 34 chars of text extracted (&lt; 400) |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text is only a title ("Drugs for Irritable Bowel Syndrome") and contains no data, analysis, or numeric parameters regarding tenapanor or any other drug. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The paper is a corrigendum correcting a demographic data error in a clinical trial and contains no pharmacokinetic parameters or quantitative disposition data for tenapanor. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The text is a corrigendum correcting a typo in a table and does not contain any pharmacodynamic data, models, or numeric parameters. |
| popPK | unknown_2022_2 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| PD | unknown_2022_2 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess a pharmacodynamic relationship. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess a pharmacodynamic relationship. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | no_text gate: only 34 chars of text extracted (&lt; 400) |
| PD | unknown_2025 | not_relevant | 1 | 0 | The text is a title for a review article on IBS drugs and does not contain specific pharmacodynamic data, exposure-response analysis, or numeric parameters for tenapanor. |
| popPK | unknown_2025_2 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | unknown_2025_2 | not_relevant | 0 | 0 | The text is a title of a comparison chart for IBS-C drugs and contains no data, analysis, or numeric parameters for tenapanor. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
