<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;gefitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gefitinib_Hill2017_reference&quot;,&quot;label&quot;:&quot;Hill_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gefitinib/Gefitinib_Hill2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# gefitinib

- **generic name:** gefitinib
- **ATC codes:** `L01EB01`, `L01XE02`
- **DrugBank:** [DB00317](https://go.drugbank.com/drugs/DB00317)
- **groups:** approved, investigational

## About

**Description.** Gefitinib (originally coded ZD1839) is a drug used in the treatment of certain types of cancer. Acting in a similar manner to erlotinib (marketed as Tarceva), gefitinib selectively targets the mutant proteins in malignant cells. It is marketed by AstraZeneca under the trade name Iressa.

**Indication.** For the continued treatment of patients with locally advanced or metastatic non-small cell lung cancer after failure of either platinum-based or docetaxel chemotherapies.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 26 | 2/0 | 13/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hill_2017_reference](drugs/drug_gefitinib/Gefitinib_Hill2017_reference.md) | Hill L et al., The usage of a three-compartment model…, Mathematical medicine and b… (2017) | [10.1093/imammb/dqv029](https://doi.org/10.1093/imammb/dqv029) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gefitinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…nation is by metabolism (primarily CYP3A4) and excretion in feces. Excretion is predominan…”</sub> | prose |
| excretion | kidney | <sub>“…eces. Excretion is predominantly via the feces (86%), with renal elimination of drug and m…”</sub> | prose |

<sub>Actors without a tissue in the table: EGFR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Haaland_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy meta-analysis reporting survival and response rates, containing no pharmacokinetic parameters for gefitinib. |
| popPK | Hotta_2021 | irrelevant | 1 | 0 | Gefitinib is a co-administered agent and the study reports PK parameters solely for edoxaban, with only trough concentrations provided for gefitinib. |
| popPK | Janssen_2022 | irrelevant | 1 | 0 | The study focuses on ctDNA biomarker modeling rather than gefitinib pharmacokinetics, explicitly noting that external PK models were used and no quantitative disposition parameters are reported. |
| popPK | Kawata_2019 | relevant | 10 | 2 | The study is a population PK analysis of gefitinib, but the actual numeric parameter estimates are referenced in Table 2 and supplementary materials that are not provided in the evidence. |
| popPK | Kramer_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the PET tracer 18F-FLT, not for gefitinib, which is only mentioned as background therapy. |
| popPK | Leighl_2020 | irrelevant | 0 | 0 | The paper focuses exclusively on patient-reported outcomes and quality of life in a clinical trial, with no pharmacokinetic data or modeling for gefitinib reported. |
| popPK | Li_2021 | irrelevant | 1 | 0 | The study explicitly states that no gefitinib plasma concentrations were collected, so no pharmacokinetic parameters for gefitinib are reported or extractable. |
| popPK | Nishino_2013 | irrelevant | 1 | 0 | This is a tumor growth/response study in gefitinib-treated NSCLC, not a PK study, and no gefitinib disposition parameters are reported. |
| popPK | Nishino_2016 | irrelevant | 0 | 0 | The paper is an oncology imaging study assessing tumor volume and survival, containing no pharmacokinetic data or disposition parameters for gefitinib. |
| popPK | Wanika_2024 | irrelevant | 2 | 9 | The numeric parameter estimates for gefitinib are directly provided in Table 2 of the main text, but the study is strictly an in vitro cell-line model rather than a human or animal disposition study. |
| popPK | Xiong_2022 | irrelevant | 0 | 0 | The study exclusively reports population pharmacokinetic parameters for tepotinib, with gefitinib only mentioned as a co-administered drug and no PK values provided for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 12:09 UTC</sub>
