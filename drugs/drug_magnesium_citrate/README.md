<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;magnesium citrate&quot;}]"></div>

# magnesium citrate

- **generic name:** magnesium citrate
- **ATC codes:** `A06AD19`, `A12CC04`, `B05CB03`
- **DrugBank:** [DB11110](https://go.drugbank.com/drugs/DB11110)
- **groups:** approved, investigational

## About

**Description.** Magnesium citrate is a low volume and osmotic cathartic agent. The cathartic action works primarily through the high osmolarity of the solution which draws large amounts of fluid into space where is used.[T215] Magnesium citrate is considered by the FDA as an approved inactive ingredient for approved drug products under the specifications of oral administration of a maximum concentration of 237 mg.[L2831] It is also considered as an active ingredient in over-the-counter products.[L1113]

**Indication.** Magnesium citrate has been used in bowel preparations prior to a colonoscopy as a cathartic agent.[T215] 

It is also used in over-the-counter products to relieve occasional constipation.[L2841]

Magnesium citrate can be one of the forms used for the administration of dietary supplements.[L2842]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 09:42 | 3:25 | 0/0/0 | 0/0/0 | 0/0/0 | 49,096/1,338 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/0 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=magnesium_citrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…A33129] Magnesium citrate is also widely eliminated via the feces because, when present in…”</sub> | prose |
| excretion | kidney | <sub>“…nistration of magnesium citrate, there is a 40% increase in urine excretion of magnesium.[…”</sub> | prose |
| excretion | small intestine | <sub>“…in the bowel, it relaxes the bowel and pulls water into the intestine which increases bowe…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wilimzig_1996.pdf` | Wilimzig C et al., Increase in magnesium plasma level afte…, European journal of clinica… (1996) | popPK | 8 | [10.1007/BF00226334](https://doi.org/10.1007/BF00226334) | [8857079](https://pubmed.ncbi.nlm.nih.gov/8857079) | The study reports PK parameters (AUC, half-life) for trimagnesium dicitrate (a magnesium salt), but specific clearance or volume values are not provided in the text. |

<sub>queue written 2026-09-11T09:41:52.447106+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertrand_1997 | irrelevant | 0 | 0 | The paper is a biochemical study on enzyme mutagenesis where magnesium citrate is used only as an inhibitor to measure IC50 values, not as a subject drug for pharmacokinetic analysis. |
| PD | Bertrand_1997 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Vmax, IC50) for a mutated protein, not pharmacodynamic exposure-response or dose-response data for a drug in a biological system. |
| popPK | Corkery_2022 | irrelevant | 0 | 0 | The paper is a case report and review regarding the novel psychoactive substance 4-Fluoroethylphenidate (4F-EPH) and contains no data on magnesium_citrate. |
| PD | Corkery_2022 | not_relevant | 0 | 0 | The paper is a case report and literature review regarding the first death involving 4-fluoroethylphenidate (4F-EPH) and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for magnesium citrate or any other drug. |
| popPK | Engeli_2025 | irrelevant | 0 | 0 | The paper is a review of Cannabidiol (CBD) and does not study magnesium_citrate or report any pharmacokinetic parameters for it. |
| PD | Engeli_2025 | not_relevant | 0 | 0 | The paper is a review of cannabidiol (CBD) in foods and does not contain any pharmacodynamic or exposure-response data for magnesium citrate. |
| popPK | Gabriel_1984 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on isocitrate dehydrogenase, not a pharmacokinetic study of magnesium citrate. |
| PD | Gabriel_1984 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (S0.5 values) for NAD-dependent isocitrate dehydrogenase, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| popPK | Gabriel_1985 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on isocitrate dehydrogenase where magnesium citrate is only mentioned as a non-reversing agent, containing no pharmacokinetic parameters. |
| PD | Gabriel_1985 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (IC50/S0.5) for ATP and Calcium, and mentions magnesium citrate only as a non-reversing agent, providing no pharmacodynamic exposure-response or dose-response data for magnesium citrate. |
| popPK | Ranade_2001 | irrelevant | 2 | 0 | The paper is explicitly identified as a review that examines bioavailability and pharmacokinetics, but the provided evidence contains no original quantitative disposition parameters or numeric values for magnesium citrate. |
| PD | Ranade_2001 | not_relevant | 2 | 1 | The text is a review abstract that qualitatively discusses the correlation between magnesium salt structure and pharmacodynamic effects but does not report specific numeric PD parameters or exposure-response data for magnesium citrate. |
| popPK | Wilimzig_1996 | relevant | 8 | 2 | The study reports PK parameters (AUC, half-life) for trimagnesium dicitrate (a magnesium salt), but specific clearance or volume values are not provided in the text. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of a conference citation with no study details, drug information, or pharmacokinetic data. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and does not contain any data, analysis, or parameters regarding magnesium citrate pharmacodynamics. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or study details for magnesium citrate. |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a title/header for conference proceedings and contains no data, analysis, or parameters regarding magnesium citrate pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
