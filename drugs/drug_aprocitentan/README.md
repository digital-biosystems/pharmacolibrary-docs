<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;aprocitentan&quot;}]"></div>

# aprocitentan

- **generic name:** aprocitentan
- **ATC codes:** `C02KN01`
- **DrugBank:** [DB15059](https://go.drugbank.com/drugs/DB15059) · **PubChem:** not captured
- **molar mass:** 546.19 g/mol (C16H14Br2N6O4S) — DrugBank
- **groups:** approved

## About

**Description.** Aprocitentan is a dual antagonist of endothelin receptors A and B used for treatment-resistant hypertension. It is the active metabolite of [macitentan].

Approximately 10-15% of patients with hypertension have resistant hypertension, defined as uncontrolled high blood pressure despite the combined use of a renin-angiotensin system blocker, a calcium channel blocker, and a diuretic at maximally tolerated doses.[A263386] Patients with resistant hypertension are at an increased risk of cardiovascular and renal events[A263386] and have traditionally had limited additional treatment options. Endothelin receptor antagonism provides a novel therapeutic pathway for the management of patients with resistant hypertension.[A263386,L50261]

Aprocitentan was approved by the FDA in March 2024 for the treatment of hypertension in patients inadequately controlled with standard therapy.[L50261] It was the first antihypertensive employing a novel mechanism to be approved in almost 40 years.[L50261]

**Indication.** Aprocitentan, in combination with other antihypertensive medications, is indicated to lower blood pressure in adult patients who are not adequately controlled on other therapies.[L50266]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 01:04 | 12:27 | 0/0/0 | 0/0/0 | 0/0/0 | 45,599/2,705 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aprocitentan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT2B7` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` inducer/inhibitor, `SLC10A1` inhibitor, `UGT1A1` inhibitor/substrate, `UGT2B7` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor, `UGT1A1` inhibitor/substrate, `UGT2B7` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…dose was eliminated via urine (0.2% unchanged) and 25% via feces (6.8% unchanged).[L50266]…”</sub> | prose |
| excretion | kidney | <sub>“…ocitentan, approximately 52% of the dose was eliminated via urine (0.2% unchanged) and 25%…”</sub> | prose |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP2C18 (inhibitor), EDNRA (target), EDNRB (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bartolucci_2021.pdf` | Bartolucci R et al., A Population Pharmacokinetic Model of M…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-021-01049-3](https://doi.org/10.1007/s40262-021-01049-3) | [34159557](https://pubmed.ncbi.nlm.nih.gov/34159557) | The paper is a population PK study for aprocitentan, but specific numeric parameter values (CL, V, Q) are not present in the provided text, only qualitative descriptions and macitentan values. |
| `Brussee_2024.pdf` | Brussee JM et al., Population pharmacokinetics of the dual…, Journal of pharmacokinetics… (2024) | popPK | 10 | [10.1007/s10928-024-09902-1](https://doi.org/10.1007/s10928-024-09902-1) | [38332190](https://pubmed.ncbi.nlm.nih.gov/38332190) | The paper is a population PK study for aprocitentan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Sidharta_2019_2.pdf` | Sidharta PN et al., Single-Dose Pharmacokinetics and Tolera…, Clinical drug investigation (2019) | popPK | 9 | [10.1007/s40261-019-00837-x](https://doi.org/10.1007/s40261-019-00837-x) | [31435905](https://pubmed.ncbi.nlm.nih.gov/31435905) | The study reports quantitative PK parameters (tmax, t1/2, GMRs) for aprocitentan in humans, though specific clearance and volume values are not explicitly listed in the text. |
| `Fontes_2021.pdf` | Fontes MSC et al., Multiple-Dose Pharmacokinetics, Safety,…, Clinical pharmacology in dr… (2021) | popPK | 8 | [10.1002/cpdd.881](https://doi.org/10.1002/cpdd.881) | [33063477](https://pubmed.ncbi.nlm.nih.gov/33063477) | The study reports quantitative PK parameters (half-life, accumulation index) for aprocitentan, but lacks detailed compartmental model parameters (CL, V, Q) typically required for population PK extraction. |
| `Sidharta_2019.pdf` | Sidharta PN et al., Single- and multiple-dose tolerability,…, Drug design, development an… (2019) | popPK | 8 | [10.2147/DDDT.S199051](https://doi.org/10.2147/DDDT.S199051) | [30962677](https://pubmed.ncbi.nlm.nih.gov/30962677) | The paper is a primary PK study for aprocitentan, but the provided evidence only contains qualitative descriptions and a half-life value, lacking specific numeric values for clearance, volume, or other compartmental parameters. |
| `Nguyen_2025.pdf` | Nguyen T et al., Aprocitentan: The First Endothelin Rece…, American journal of therape… (2025) | pgx | 7 | [10.1097/MJT.0000000000001950](https://doi.org/10.1097/MJT.0000000000001950) | [40638911](https://www.ncbi.nlm.nih.gov/pubmed/40638911) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-09-28T01:03:03.602949+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bajinka_2025 | not_relevant | 0 | 0 | The paper is a review of 3PM in hypertension that mentions aprocitentan's general efficacy but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Bartolucci_2021 | relevant | 10 | 2 | The paper is a population PK study for aprocitentan, but specific numeric parameter values (CL, V, Q) are not present in the provided text, only qualitative descriptions and macitentan values. |
| popPK | Berger_2026 | irrelevant | 2 | 1 | The study focuses on macitentan as the subject drug, with aprocitentan serving only as a metabolite for exposure assessment (Ctrough) rather than providing compartmental PK parameters (CL, V, etc.) for aprocitentan itself. |
| popPK | Brussee_2024 | relevant | 10 | 0 | The paper is a population PK study for aprocitentan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report original quantitative pharmacokinetic parameters for aprocitentan. |
| PD | Cabré_2026 | not_relevant | 1 | 0 | The text is a narrative review of cardiovascular pharmacotherapy that mentions endothelin pathway modulators but does not provide specific numeric PD parameters or exposure-response data for aprocitentan. |
| popPK | Fontes_2021 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life, accumulation index) for aprocitentan, but lacks detailed compartmental model parameters (CL, V, Q) typically required for population PK extraction. |
| popPK | Gueneau_2021 | irrelevant | 1 | 0 | The study focuses on fluid homeostasis and body weight, and while it mentions a half-life of ~44 hours, it does not report quantitative disposition parameters like clearance, volume, or compartmental model values. |
| popPK | Naseralallah_2024 | irrelevant | 1 | 0 | The paper is a narrative review summarizing efficacy and safety without reporting original quantitative pharmacokinetic parameter values. |
| PD | Naseralallah_2024 | not_relevant | 2 | 0 | The text is a narrative review summarizing general efficacy and safety without providing specific numeric PD parameters, exposure-response curves, or detailed PK/PD modeling results. |
| popPK | Nguyen_2025 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Nguyen_2025 | not_relevant | 1 | 0 | The text is a title indicating a review or overview article, which typically lacks the specific numeric PD parameters or detailed exposure-response data required for extraction. |
| PGx | Nguyen_2025 | not_relevant | 0 | 0 | The paper is a general review of aprocitentan for resistant hypertension and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Phillips_2025 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and safety that does not report original quantitative pharmacokinetic parameter values for aprocitentan. |
| popPK | Sidharta_2019 | relevant | 8 | 2 | The paper is a primary PK study for aprocitentan, but the provided evidence only contains qualitative descriptions and a half-life value, lacking specific numeric values for clearance, volume, or other compartmental parameters. |
| popPK | Sidharta_2020 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of rosuvastatin as the subject drug to assess a drug-drug interaction, and no quantitative PK parameters for aprocitentan are reported in the evidence. |
| popPK | Sidharta_2020_2 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of midazolam as the subject drug to assess drug-drug interactions, with aprocitentan serving only as the co-administered agent. |
| popPK | Sidharta_2025 | irrelevant | 2 | 0 | The paper is a QT/QTc safety study that reports concentration-QT modeling but does not provide quantitative population pharmacokinetic parameters (CL, V, Q, ka) for aprocitentan. |
| popPK | Sidhu_2026 | irrelevant | 1 | 0 | The paper is a review article summarizing the drug's profile and does not report original quantitative pharmacokinetic parameter values. |
| PD | Sidhu_2026 | not_relevant | 2 | 0 | The text is a narrative review summarizing the drug's profile and trial outcomes but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed exposure-response data in the provided excerpt. |
| popPK | Verweij_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure outcomes and adverse events, with no pharmacokinetic parameters (CL, V, t1/2) reported for aprocitentan. |
| popPK | Zheng_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (blood pressure) and safety, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for aprocitentan. |
| PD | Zheng_2025 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting mean differences in blood pressure for fixed dose groups (10-12.5, 25, 50 mg) but does not provide concentration-effect data, PK parameters, or a fitted PD model (e.g., Emax, EC50) to derive a pharmacodynamic relationship. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 22 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a generic title "Drugs for hypertension" and contains no specific data, analysis, or mention of aprocitentan or any pharmacodynamic parameters. |
| popPK | unknown_2024_2 | irrelevant | 0 | 0 | no_text gate: only 38 chars of text extracted (&lt; 400) |
| PD | unknown_2024_2 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, models, or numeric parameters. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | unknown_2026 | not_relevant | 0 | 0 | The provided text describes baxdrostat, not aprocitentan, and contains no pharmacodynamic data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
