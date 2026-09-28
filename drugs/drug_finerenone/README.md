<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;finerenone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Finerenone_van2022_reference&quot;,&quot;label&quot;:&quot;van_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_finerenone/Finerenone_van2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# finerenone

- **generic name:** finerenone
- **ATC codes:** `C03DA05`
- **DrugBank:** [DB16165](https://go.drugbank.com/drugs/DB16165) · **PubChem:** not captured
- **molar mass:** 378.432 g/mol (C21H22N4O3) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Finerenone, or BAY 94-8862, is a mineralocorticoid receptor antagonist indicated to reduce the risk of sustained decline in glomerular filtration rate, end stage kidney disease, cardiovascular death, heart attacks, and hospitalization due to heart failure in adults with chronic kidney disease associated with type II diabetes mellitus.[A236519,L34739] Patients with kidney disease, would originally be given [spironolactone] or [eplerenone] to antagonize the mineraclocorticoid receptor.[A236544] Spironolactone has low selectivity and affinity for the receptor; it dissociates quickly and can also have effects at the androgen, progesterone, and glucocorticoid receptors.[A236544] Eplerenone is more selective and has longer lasting effects.[A236544] More selective nonsteroidal mineralocorticoid antagonists such as [apararenone], [esaxerenone], and finerenone were later developed.[A236544] So far, finerenone is the only nonsteroidal mineralocorticoid receptor antagonist to be FDA approved.[A236544,L34739]

Finerenone was granted FDA approval on 9 July 2021,[L34739] followed by the EMA approval on 11 March 2022.[L41449]

**Indication.** In the US, finerenone is indicated to reduce the risk of sustained decline in glomerular filtration rate, end stage kidney disease, cardiovascular death, heart attacks, and hospitalization due to heart failure in adults with chronic kidney disease associated with type II diabetes mellitus.[L34739] Finerenone has also been approved for reducing the risks of cardiovascular death, hospitalization for heart failure, and urgent heart failure visits in adult patients with heart failure with left ventricular ejection fraction≥ 40%.[L43095]

In Europe, finerenone is indicated for the treatment of chronic kidney disease (stage 3 and 4 with albuminuria) associated with type 2 diabetes in adults.[L41444]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 3/0/0 | 0/0/0 | not captured | not captured | 6 | 3/3 | 6/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [van_2022_reference](drugs/drug_finerenone/Finerenone_van2022_reference.md) | 1-compartment (no model) | 0 | van den Berg P et al., Finerenone Dose-Exposure-Response for t…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01082-2](https://doi.org/10.1007/s40262-021-01082-2) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Goulooze_2022](drugs/drug_finerenone/pd_Goulooze_2022_UACR.md) | Goulooze (2022) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Goulooze_2022](drugs/drug_finerenone/pd_Goulooze_2022_eGFR.md) | Goulooze (2022) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Goulooze_2022_2](drugs/drug_finerenone/pd_Goulooze_2022_2_K.md) | Goulooze (2022) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Snelder_2020](drugs/drug_finerenone/pd_Snelder_2020_K.md) | Snelder N et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00820-x](https://doi.org/10.1007/s40262-019-00820-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Snelder_2020](drugs/drug_finerenone/pd_Snelder_2020_UACR.md) | Snelder N et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00820-x](https://doi.org/10.1007/s40262-019-00820-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Snelder_2020](drugs/drug_finerenone/pd_Snelder_2020_eGFR_EPI.md) | Snelder N et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00820-x](https://doi.org/10.1007/s40262-019-00820-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=finerenone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…ompound.[A236519] The majority of the dose recovered in the feces was as the M5 metabolite…”</sub> | prose |
| excretion | kidney | <sub>“…The majority of the dose recovered in urine was in the form of the M2, M3 (47.8%), and M4…”</sub> | prose |
| excretion | small intestine | <sub>“…519] Finerenone is not expected to be metabolized by the intestinal microflora.[A236519]…”</sub> | prose |

<sub>Actors without a tissue in the table: NR3C2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 30 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bui_2024.pdf` | Bui TT et al., Pharmacokinetic and Pharmacodynamic Int…, European journal of drug me… (2024) | popPK | 9 | [10.1007/s13318-024-00917-0](https://doi.org/10.1007/s13318-024-00917-0) | [39307908](https://pubmed.ncbi.nlm.nih.gov/39307908) | The study is a rat PK interaction study with a pop-PK model for finerenone, but the evidence only provides relative changes (e.g., % decrease in clearance) rather than absolute numeric parameter values (CL, V, ka) which are likely in the full text or supplementary material not provided. |
| `Eissing_2024.pdf` | Eissing T et al., Pharmacokinetics and pharmacodynamics o…, Diabetes, obesity & metabol… (2024) | popPK | 9 | [10.1111/dom.15387](https://doi.org/10.1111/dom.15387) | [38037539](https://pubmed.ncbi.nlm.nih.gov/38037539) | The paper describes a population PK/PD analysis for finerenone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-09-28T11:22:02.594724+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2026 | irrelevant | 0 | 0 | The paper is a secondary analysis of blood pressure and albuminuria outcomes in a clinical trial, containing no pharmacokinetic parameters for finerenone. |
| popPK | Bui_2024 | relevant | 9 | 2 | The study is a rat PK interaction study with a pop-PK model for finerenone, but the evidence only provides relative changes (e.g., % decrease in clearance) rather than absolute numeric parameter values (CL, V, ka) which are likely in the full text or supplementary material not provided. |
| popPK | Eissing_2024 | relevant | 9 | 0 | The paper describes a population PK/PD analysis for finerenone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Goulooze_2022 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic (PD) modeling of UACR and eGFR, using finerenone PK parameters from a separate published study rather than reporting original quantitative PK disposition parameters (CL, V, etc.) in the text. |
| popPK | Goulooze_2022_2 | irrelevant | 2 | 1 | The paper is a pharmacodynamic (potassium response) analysis that relies on PK parameters from a separate study (van den Berg et al.), reporting only a half-life and a single clearance value in a figure caption rather than a full population PK parameter table. |
| popPK | Hashimoto_2026 | irrelevant | 0 | 0 | The study is a real-world cohort analysis of hyperkalemia safety outcomes and does not report any pharmacokinetic parameters for finerenone. |
| popPK | Heerspink_2026_2 | irrelevant | 0 | 0 | The paper is a clinical outcome trial reporting eGFR slopes and event rates, not a pharmacokinetic study with disposition parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study reporting proteinuria and safety outcomes, not a pharmacokinetic study with disposition parameters. |
| popPK | Mottl_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis of finerenone in the CONFIDENCE trial, reporting no pharmacokinetic parameters. |
| popPK | Snelder_2020 | relevant | 10 | 2 | The paper is a population PK study for finerenone, but the specific numeric parameter estimates (CL, V, Q, ka) are located in ESM Table S1, which is not included in the provided evidence. |
| PD | van_2022 | not_relevant | 0 | 0 | not captured |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 11:22 UTC</sub>
