<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;tasonermin&quot;}]"></div>

# tasonermin

- **generic name:** tasonermin
- **ATC codes:** `L03AX11`
- **DrugBank:** [DB11626](https://go.drugbank.com/drugs/DB11626) · **PubChem:** not captured
- **groups:** approved

## About

Tasonermin is an immunostimulant anticancer medicine used to treat sarcoma. It is authorised in the European Union and is restricted to hospital use, where it is given by isolated limb perfusion for sarcoma in a limb.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28852342](https://www.wikidata.org/wiki/Q28852342) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:16 | 3:50 | 0/0/0 | 0/0/0 | 0/0/0 | 28,538/1,295 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tasonermin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TNFRSF1A (target), TNFRSF1B (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2606 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angelidis_2018 | irrelevant | 0 | 0 | The paper reviews the pharmacokinetics of colchicine, not tasonermin. |
| popPK | Chisari_1995 | irrelevant | 0 | 0 | The paper is a review of Hepatitis B virus immunopathology and contains no pharmacokinetic data for tasonermin. |
| popPK | Chisari_1995_2 | irrelevant | 0 | 0 | The paper is a review on the immunopathogenesis of Hepatitis B virus and does not mention tasonermin or report any pharmacokinetic parameters. |
| popPK | Dulai_2016 | irrelevant | 0 | 0 | The paper is a review of TNF antagonists for IBD and does not mention tasonermin or report any pharmacokinetic parameters. |
| popPK | Enayati_1994 | irrelevant | 0 | 0 | The paper is a general review of cytokine neutralizing strategies in sepsis and does not report any quantitative pharmacokinetic parameters for tasonermin. |
| popPK | Feingold_1992 | irrelevant | 0 | 0 | The paper is a review on cytokines and hyperlipidemia and does not contain any pharmacokinetic data for tasonermin. |
| popPK | Felipez_2025 | irrelevant | 0 | 0 | The paper is a review on therapeutic drug monitoring for anti-TNF agents in pediatric IBD and does not contain pharmacokinetic data for tasonermin. |
| popPK | Feng_2020 | irrelevant | 0 | 0 | The paper discusses the role of RELL1 in Mycobacterium tuberculosis survival in macrophages and contains no pharmacokinetic data for tasonermin. |
| popPK | Gross_1990 | irrelevant | 0 | 0 | The paper studies urokinase-type plasminogen activator in rat lung cells and is unrelated to tasonermin pharmacokinetics. |
| popPK | Grunfeld_1991 | irrelevant | 0 | 0 | The paper is a review of cytokine mechanisms in hyperlipidemia and does not report any pharmacokinetic parameters for tasonermin. |
| popPK | Knolle_1995 | irrelevant | 0 | 0 | The paper studies cytokine secretion by Kupffer cells in vitro and does not involve tasonermin or any pharmacokinetic analysis. |
| popPK | Linde_2023 | irrelevant | 0 | 0 | The paper describes a neutrophil-activating cancer therapy mechanism and does not mention tasonermin or report any pharmacokinetic parameters. |
| popPK | Passot_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for infliximab, not tasonermin. |
| popPK | Rao_1989 | irrelevant | 0 | 0 | The paper is a mechanistic study on cell signaling in leukocytes and does not involve tasonermin pharmacokinetics. |
| popPK | Resnick_1992 | irrelevant | 0 | 0 | The paper discusses pediatric infectious diseases (TSS and SSSS) and contains no pharmacokinetic data for tasonermin. |
| popPK | Ruderman_2013 | irrelevant | 0 | 0 | The paper discusses the concomitant use of methotrexate with biologic agents for rheumatoid arthritis and does not mention tasonermin or report any pharmacokinetic parameters for it. |
| popPK | Theeß_2017 | irrelevant | 0 | 0 | The paper is an immunological study on MPO in a malaria model and does not involve tasonermin or report any pharmacokinetic parameters. |
| popPK | Waltz_1993 | irrelevant | 0 | 0 | The paper studies urokinase-type plasminogen activator (uPA) in U937 cells and does not involve the drug tasonermin. |
| popPK | Zheng_2024 | irrelevant | 0 | 0 | The paper investigates the role of TNF and bile acids in ulcerative colitis and does not involve the drug tasonermin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
