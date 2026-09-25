<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferric maltol&quot;}]"></div>

# ferric maltol

- **generic name:** ferric maltol
- **ATC codes:** `B03AB10`
- **DrugBank:** [DB15598](https://go.drugbank.com/drugs/DB15598)
- **groups:** approved, investigational

## About

**Description.** Ferric maltol is an iron(III) atom complexed with 3 maltol molecules to increase the bioavailability compared to iron(II), without depositing it in the duodenum as insoluble ferric hydroxide and phosphate.[A189288] Ferric maltol has been described in literature since at least the late 1980s as a potential treatment for iron deficiency.[A189291]

Ferric maltol was initially granted FDA approval on July 25, 2019, for use in adults. [L10974] On December 22, 2025, the FDA expanded this indication to include pediatric patients aged 10 years and older. [L54873,L54878]

**Indication.** Ferric maltol is indicated for the treatment of iron deficiency in adults and pediatric patients aged 10 years and older.[L10974,L54873]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 23:03 | 2:38 | 0/0/0 | 0/0/0 | 0/0/0 | 40,323/1,336 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/1 | 2/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ferric_maltol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>“…marrow, 18±1% is present in the liver, and 2.6±1% is in the urine.[A189297] Maltol has an…”</sub> | prose |
| absorption | liver | <sub>“…dose is present in the bone marrow, 18±1% is present in the liver, and 2.6±1% is in the ur…”</sub> | prose |
| absorption | small intestine | <sub>“…Ferric maltol dissociates in the gastrointestinal tract, leading to a T&lt;sub&gt;max&lt;/sub&gt; of 1…”</sub> | prose |
| metabolism | liver | `UGT1A6` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A6` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…the urine and unabsorbed ferric maltol is eliminated in the feces.[A189306]…”</sub> | prose |
| excretion | kidney | <sub>“…9.8-60% of an oral dose of ferric maltol is excreted in the urine as a glucuronide conjuga…”</sub> | prose |

<sub>Actors without a tissue in the table: ITGB3 (substrate), SLC11A2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cai_2023.pdf` | Cai Z et al., Simultaneous determination of maltol an…, Journal of chromatography.… (2023) | popPK | 8 | [10.1016/j.jchromb.2023.123760](https://doi.org/10.1016/j.jchromb.2023.123760) | [37270862](https://pubmed.ncbi.nlm.nih.gov/37270862) | The study reports quantitative PK parameters (half-life and urinary excretion percentage) for the active moiety maltol following ferric maltol administration, but lacks full compartmental model parameters like clearance or volume of distribution. |

<sub>queue written 2026-09-18T23:03:12.167929+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2021 | relevant | 8 | 2 | The paper describes a population PK study for ferric maltol (via maltol glucuronide) in children, but specific numeric parameter values (CL, V, etc.) are not present in the text or provided supplementary material, only qualitative descriptions and references to figures. |
| popPK | Barrand_1991 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-lives of ~70 min for iron and ~12 min for maltol) for ferric maltol in rats, but lacks a full compartmental model or clearance/volume values. |
| popPK | Bokemeyer_2017 | relevant | 4 | 5 | The paper reports standard non-compartmental PK parameters (AUC, Cmax, t1/2) for the maltol moiety of ferric maltol, but lacks compartmental parameters (CL, V) and population modeling. |
| popPK | Gass_2026 | irrelevant | 2 | 0 | The study mentions PK assessment but the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for ferric maltol. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper is a computational study on drug-food interaction prediction using knowledge graphs and does not report any pharmacokinetic parameters for ferric_maltol. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting drug-food interactions and does not report any pharmacodynamic or exposure-response data for ferric maltol. |
| popPK | Khoury_2021 | irrelevant | 1 | 0 | The paper is a narrative review of ferric maltol that discusses pharmacology and efficacy but does not report original quantitative pharmacokinetic parameter values (e.g., CL, V, ka) in the provided evidence. |
| popPK | Singh_2022 | irrelevant | 0 | 0 | The paper is a review/overview of nano-formulations for iron deficiency anaemia and does not report original quantitative pharmacokinetic parameters for ferric maltol. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a title/header for conference oral presentations and contains no data, analysis, or parameters regarding ferric maltol or any pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
