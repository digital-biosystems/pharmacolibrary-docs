<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;inositol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Inositol_Phelps2013_covariate_estimate_standard_error&quot;,&quot;label&quot;:&quot;Phelps_2013_covariate_estimate_standard_error&quot;,&quot;href&quot;:&quot;drugs/drug_inositol/Inositol_Phelps2013_covariate_estimate_standard_error.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Inositol_Phelps2013_estimate&quot;,&quot;label&quot;:&quot;Phelps_2013_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_inositol/Inositol_Phelps2013_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# inositol

- **generic name:** inositol
- **ATC codes:** `A11HA07`
- **DrugBank:** [DB13178](https://go.drugbank.com/drugs/DB13178)
- **groups:** approved, withdrawn

## About

**Description.** Inositol is a collection of nine different stereoisomers but the name is usually used to describe only the most common type of inositol, myo-inositol. Myo-inositol is the cis-1,2,3,5-trans-4,6-cyclohexanehexol and it is prepared from an aqueous extract of corn kernels by precipitation and hydrolysis of crude phytate. These molecules have structural similarities to glucose and are involved in cellular signaling. It is considered a pseudovitamin as it is a molecule that does not qualify to be an essential vitamin because even though its presence is vital in the body, a deficiency in this molecule does not translate into disease conditions.[L2560] Inositol can be found as an ingredient of OTC products by Health Canada but all current product whose main ingredient is inositol are discontinued.[L1113] By the FDA, inositol is considered in the list of specific substances affirmed as generally recognized as safe (GRAS).[L2561]

**Indication.** Inositol may be used in food without any limitation. As a drug, inositol is used as a nutrient supplement in special dietary foods and infant formula.[L2561] As it presents a relevant role in ensuring oocyte fertility, inositol has been studied for its use in the management of polycystic ovaries.[A32751] Inositol is also being researched for the treatment of diabetes,[A32766] prevention of metabolic syndrome,[A32768] aid agent for weight loss,[A32769] treatment of depression, psychiatric disorder and anxiety disorder[A32770] and for prevention of cancer.[A32771]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 22:10 | 0:41 | 0/0/2 | 0/0/0 | 0/0/0 | 22,586/671 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Phelps_2013_covariate_estimate_standard_error](drugs/drug_inositol/Inositol_Phelps2013_covariate_estimate_standard_error.md) | Phelps DL et al., Pharmacokinetics and safety of a single…, Pediatric research (2013) | [10.1038/pr.2013.162](https://doi.org/10.1038/pr.2013.162) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61, Q22, Q47, Q57 — no SI value to…</sub><br><sub>route_to: `human_review`</sub> | [Phelps_2013_estimate](drugs/drug_inositol/Inositol_Phelps2013_estimate.md) | Phelps DL et al., Pharmacokinetics and safety of a single…, Pediatric research (2013) | [10.1038/pr.2013.162](https://doi.org/10.1038/pr.2013.162) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=inositol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Inositol is absorbed from the small intestine.[T184] In patients with inositol deficiency,…”</sub> | prose |
| excretion | kidney | <sub>“…Most of the administered dose is excreted in urine.[A32809]…”</sub> | prose |

<sub>Actors without a tissue in the table: APP (inhibitor), SLC5A3 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1137 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Antonowski_2022.pdf` | Antonowski T et al., Pharmacokinetics of, International journal of mo… (2022) | popPK | 9 | [10.3390/ijms231911246](https://doi.org/10.3390/ijms231911246) | [36232547](https://pubmed.ncbi.nlm.nih.gov/36232547) | The paper describes a pharmacokinetic study of inositol in rats using a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence. |

<sub>queue written 2026-09-21T22:09:59.461103+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antonowski_2022 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of inositol in rats using a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 22:10 UTC</sub>
