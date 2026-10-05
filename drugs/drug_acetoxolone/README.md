<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;acetoxolone&quot;}]"></div>

# acetoxolone

- **generic name:** acetoxolone
- **ATC codes:** `A02BX09`
- **DrugBank:** [DB13640](https://go.drugbank.com/drugs/DB13640) · **PubChem:** not captured
- **molar mass:** 512.731 g/mol (C32H48O5) — DrugBank
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 08:44 | 2:23 | 0/0/0 | 0/0/0 | 0/0/0 | 84,143/2,320 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 6/7 | 13/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 0 matched, 40 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | BAILEY_1963 | irrelevant | 0 | 0 | The paper is a clinical review of epilepsy treatment that mentions acetazolamide (not acetoxolone) and contains no pharmacokinetic parameters. |
| popPK | Balachandran_2018 | irrelevant | 0 | 0 | The paper is a clinical case report regarding adverse effects (acidosis) of acetazolamide, not a pharmacokinetic study, and contains no quantitative PK parameters. |
| popPK | Basnyat_2003 | irrelevant | 0 | 0 | The paper is a review of high-altitude illness pathophysiology and management, mentioning acetazolamide (not acetoxolone) only as a prophylactic agent without providing any pharmacokinetic parameters. |
| popPK | Beermann_1975 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of chlorthalidone, with acetazolamide (not acetoxolone) used as a comparator/inhibitor. |
| popPK | Boulet_2018 | irrelevant | 0 | 0 | The study investigates the physiological effects of acetazolamide and methazolamide on hypoxic pulmonary vasoconstriction, not the pharmacokinetic parameters of acetoxolone. |
| popPK | Britton_2022 | irrelevant | 0 | 0 | The paper is a clinical case report on IVIG-induced optic disc edema treated with acetazolamide (a different drug), and contains no pharmacokinetic data for acetoxolone. |
| popPK | Colussi_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lithium and the effects of acetazolamide/frusemide on its clearance, not the pharmacokinetics of acetoxolone. |
| popPK | Delbeke_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fencamfamine, with acetazolamide serving only as a co-administered agent to influence urinary pH, not as the subject drug. |
| popPK | Delbeke_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mephentermine, with acetazolamide (not acetoxolone) used as a co-administered diuretic. |
| popPK | Erdal_2023 | irrelevant | 0 | 0 | The study investigates acetazolamide, not acetoxolone, and no quantitative PK parameters for acetoxolone are reported. |
| popPK | GALIN_1962 | irrelevant | 0 | 0 | no_text gate: only 21 chars of text extracted (&lt; 400) |
| popPK | Ganias_1975 | irrelevant | 0 | 0 | no_text gate: only 326 chars of text extracted (&lt; 400) |
| popPK | Inoue_1984 | irrelevant | 0 | 0 | The paper studies the clinical efficacy of acetazolamide (a different drug) in psychosis and does not report pharmacokinetic parameters for acetoxolone. |
| popPK | Kaneko_2022 | irrelevant | 2 | 1 | The study investigates acetazolamide (a different drug), not acetoxolone, and only reports Cmax/AUC without compartmental PK parameters. |
| popPK | Kaur_2000 | irrelevant | 0 | 0 | The study focuses on acetazolamide (a different drug) and reports intraocular pressure changes rather than pharmacokinetic parameters for acetoxolone. |
| popPK | Kaur_2020 | irrelevant | 0 | 0 | The paper focuses on the antimicrobial activity and structure-activity relationship of acetazolamide derivatives against bacteria, not the pharmacokinetics of acetoxolone. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | The study investigates acetazolamide, not acetoxolone, which is a different drug. |
| popPK | LATTS_1955 | irrelevant | 0 | 0 | no_text gate: only 6 chars of text extracted (&lt; 400) |
| popPK | LEDUC_1956 | irrelevant | 0 | 0 | no_text gate: only 8 chars of text extracted (&lt; 400) |
| popPK | Lundgaard_2017 | irrelevant | 0 | 0 | The study investigates glymphatic clearance of lactate and inulin in mice, using acetazolamide (not acetoxolone) as a pharmacological tool, and does not report PK parameters for acetoxolone. |
| popPK | Massop_2023 | irrelevant | 0 | 0 | The paper is a clinical commentary on diuretic combinations in heart failure and does not report pharmacokinetic parameters for acetoxolone. |
| popPK | Mountain_1987 | irrelevant | 0 | 0 | The paper is a clinical review of high-altitude medical problems and does not report any pharmacokinetic parameters for acetoxolone. |
| popPK | Olzowy_1975 | irrelevant | 0 | 0 | The study investigates the clinical efficacy of acetazolamide for altitude sickness and does not report pharmacokinetic parameters for acetoxolone. |
| popPK | Piepgras_1991 | irrelevant | 0 | 0 | The study uses acetazolamide (not acetoxolone) as a diagnostic agent for hemodynamic monitoring and does not report pharmacokinetic parameters. |
| popPK | Priyamkari_2023 | irrelevant | 0 | 0 | The study investigates the effect of acetazolamide (not acetoxolone) on weight gain in schizophrenia patients and reports no pharmacokinetic parameters. |
| popPK | RUSKIN_1955 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| popPK | SEITZ_1964 | irrelevant | 0 | 0 | The study focuses on the renal effects of hydrochlorothiazide on calcium and citrate, with acetazolamide mentioned only as a comparator and no pharmacokinetic parameters for acetoxolone reported. |
| popPK | Shah_2018 | irrelevant | 0 | 0 | The paper is a review on sulfonamide allergy cross-reactivity and does not report any pharmacokinetic parameters for acetoxolone. |
| popPK | Sokol_2021 | irrelevant | 0 | 0 | The paper describes an outpatient protocol for high-dose methotrexate where acetazolamide is used as an adjunct for urinary alkalinization, but it does not report pharmacokinetic parameters for acetoxolone. |
| popPK | Teba_2021 | irrelevant | 0 | 0 | The study investigates acetazolamide (a different drug), not acetoxolone, and focuses on formulation and pharmacodynamics (IOP reduction) rather than population pharmacokinetic parameters. |
| popPK | Uwai_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lithium in rats using acetazolamide as a co-administered inhibitor, not the pharmacokinetics of acetoxolone itself. |
| popPK | Van_2018 | irrelevant | 0 | 0 | The paper is a review of acetazolamide (a different drug) and does not report quantitative PK parameters for acetoxolone. |
| popPK | Walsh_1994 | irrelevant | 0 | 0 | The paper studies lactate metabolism in crustaceans and uses acetazolamide (a different drug) as a carbonic anhydrase inhibitor, not acetoxolone. |
| popPK | Watson_1984 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for acetazolamide, not acetoxolone. |
| popPK | Winaver_1986 | irrelevant | 0 | 0 | The study investigates renal physiology (bicarbonate reabsorption) in rats using acetazolamide as a carbonic anhydrase inhibitor, not the pharmacokinetics of acetoxolone. |
| popPK | Yakatan_1978 | irrelevant | 0 | 0 | The study investigates acetazolamide, a different drug, not acetoxolone. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The paper is a clinical case report on the therapeutic efficacy of acetazolamide (not acetoxolone) for retinoschisis and contains no pharmacokinetic parameters. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The study investigates the glymphatic system and alpha-synuclein clearance in mice using acetazolamide (not acetoxolone) as a tool, and does not report pharmacokinetic parameters for acetoxolone. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The study investigates the mechanism of glucocorticoid-induced diuresis in rats and uses acetazolamide only as a comparator diuretic, without reporting any pharmacokinetic parameters for acetoxolone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
