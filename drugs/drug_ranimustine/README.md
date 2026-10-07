<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;ranimustine&quot;}]"></div>

# ranimustine

- **generic name:** ranimustine
- **ATC codes:** `L01AD07`
- **DrugBank:** [DB13832](https://go.drugbank.com/drugs/DB13832) · **PubChem:** not captured
- **molar mass:** 327.72 g/mol (C10H18ClN3O7) — DrugBank
- **groups:** experimental

## About

Ranimustine is a nitrosourea alkylating agent developed as an anticancer (antineoplastic) drug. It is not an established marketed medicine; it remains experimental and has no European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7293058](https://www.wikidata.org/wiki/Q7293058) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:19 | 0:46 | 0/0/0 | 0/0/0 | 0/0/0 | 32,751/1,512 | einfracz / qwen3.8-27b | 2 | 3/0 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 29 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ashihara_1994 | irrelevant | 0 | 0 | The study focuses on lymphocyte subset reconstitution after stem cell transplantation and does not mention ranimustine or provide any pharmacokinetic data. |
| popPK | Chihara_2014 | irrelevant | 0 | 0 | The paper is a retrospective study of clinical outcomes for autologous stem cell transplantation and does not report pharmacokinetic parameters for ranimustine. |
| popPK | Fujimoto_1982 | irrelevant | 0 | 0 | The paper studies the antitumor activity of TA-077 and does not mention ranimustine or provide pharmacokinetic parameters. |
| popPK | Fujimoto_1984 | irrelevant | 0 | 0 | The study evaluates the antitumor activity and toxicity of MCNU (a nitrosourea derivative) and does not report pharmacokinetic parameters for ranimustine. |
| popPK | Hoshi_2009 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| popPK | Hotta_1994 | irrelevant | 0 | 0 | The paper discusses O6-alkylguanine-DNA alkyltransferase activity in gliomas and response to CENUs, but does not mention ranimustine or provide any pharmacokinetic parameters for it. |
| PGx | Ishikawa_2005 | not_relevant | 3 | 1 | The paper describes the treatment of a patient with a different drug (irinotecan) and reports a lack of pharmacogenomic effect (UGT1A1 polymorphism), not an effect on the PK/PD of ranimustine. |
| popPK | Kannuki_1995 | irrelevant | 0 | 0 | The paper describes a clinical outcome study of chemotherapy and stem cell rescue in pediatric brain tumor patients, with no pharmacokinetic analysis or parameters for ranimustine. |
| popPK | Katagiri_2011 | irrelevant | 0 | 0 | The paper is a clinical retrospective study on renal function recovery in multiple myeloma patients and does not report pharmacokinetic parameters for ranimustine. |
| popPK | Kawabata_2009 | irrelevant | 0 | 0 | The paper reports on clinical outcomes of a chemotherapy regimen (MEAM) for AIDS-related lymphoma and does not contain any pharmacokinetic parameters for ranimustine. |
| popPK | Masaoka_1985 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for MCNU (a different drug) and does not report pharmacokinetic parameters for ranimustine. |
| popPK | Matsumoto_1997 | irrelevant | 0 | 0 | The paper is a clinical study on iridium-192 brachytherapy for malignant gliomas and does not mention ranimustine or report any pharmacokinetic parameters. |
| popPK | Nagai_1999 | irrelevant | 0 | 0 | The paper is a clinical case report describing the development of leukemia following nitrosourea treatment and contains no pharmacokinetic data for ranimustine. |
| popPK | Natori_2007 | irrelevant | 0 | 0 | The paper describes a case series of therapy-related leukemia in multiple myeloma patients and contains no pharmacokinetic data or parameters for ranimustine. |
| popPK | Ogawa_2016 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| popPK | Ohno_2013 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| popPK | Okazaki_2011 | irrelevant | 0 | 0 | The paper is a clinical case report on pulsatile tinnitus and essential thrombocythemia, with no pharmacokinetic data or mention of ranimustine. |
| popPK | Sakamoto_2021 | irrelevant | 0 | 0 | The paper investigates TP53 mutations and prognosis in Adult T-cell Leukemia/Lymphoma and does not involve ranimustine or pharmacokinetics. |
| popPK | Takemori_2001 | irrelevant | 0 | 0 | The paper describes a clinical case of IgD myeloma treated with glucocorticoids and contains no pharmacokinetic data or mention of ranimustine. |
| popPK | Tanaka_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of MCNU, a different drug, with no mention of ranimustine or pharmacokinetic parameters. |
| popPK | Uni_2013 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| popPK | Ureshino_2016 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| popPK | Uzuka_2001 | irrelevant | 0 | 0 | The paper describes hyperthermia treatment planning for brain tumors and does not involve ranimustine or any pharmacokinetic analysis. |
| popPK | Uzuka_2004 | irrelevant | 0 | 0 | The paper is a clinical case review of Pneumocystis carinii pneumonia in brain tumor patients and does not report any pharmacokinetic parameters for ranimustine. |
| PD | Uzuka_2004 | not_relevant | 0 | 0 | The paper is a clinical case series regarding Pneumocystis carinii pneumonia in brain tumor patients and mentions ranimustine only as a treatment administered, without reporting any pharmacokinetic or pharmacodynamic data. |
| popPK | Wakui_1982 | irrelevant | 0 | 0 | The paper is a general review of nitrosourea pharmacokinetics and does not mention or report specific data for ranimustine. |
| popPK | Yamane_2000 | irrelevant | 0 | 0 | The study reports clinical outcomes of high-dose chemotherapy regimens (ACE, MEAC) for non-Hodgkin's lymphoma and does not involve the drug ranimustine or report pharmacokinetic parameters. |
| popPK | Yamashima_1990 | irrelevant | 0 | 0 | The paper is a clinicopathological study of neurotoxicity for ACNU and MCNU, does not investigate ranimustine, and reports no pharmacokinetic parameters. |
| popPK | Yokote_1990 | irrelevant | 0 | 0 | The study is about hyperthermia and does not involve ranimustine or report its pharmacokinetic parameters. |
| popPK | Yui_2023 | irrelevant | 0 | 0 | The paper is a clinical study on the efficacy and safety of a conditioning regimen (MEAM) for lymphoma, not a pharmacokinetic study, and contains no PK parameters for ranimustine. |
| PD | Yui_2023 | not_relevant | 0 | 0 | The text describes clinical outcomes (OS, PFS) and safety of a conditioning regimen (MEAM) but contains no pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for ranimustine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
